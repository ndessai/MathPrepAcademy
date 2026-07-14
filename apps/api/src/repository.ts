import { randomUUID } from "node:crypto";
import type { DatabaseSync } from "node:sqlite";

import type {
  Assessment,
  AssessmentSummary,
  Attempt,
  AttemptSummary,
  Question,
  ResponseMap,
} from "@mathprep/core";

interface AssessmentRow {
  id: string;
  title: string;
  description: string;
  kind: Assessment["kind"];
  time_limit_minutes: number;
  question_ids: string;
}

interface QuestionRow {
  id: string;
  topic: Question["topic"];
  difficulty: Question["difficulty"];
  stem: string;
  choices: string;
  answer_index: number;
  explanation: string;
  source: string;
}

interface AttemptRow {
  id: string;
  assessment_id: string;
  student_name: string;
  started_at: string;
  completed_at: string | null;
  responses: string | null;
  score: number | null;
  max_score: number | null;
}

function toAssessment(row: AssessmentRow): Assessment {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    kind: row.kind,
    timeLimitMinutes: row.time_limit_minutes,
    questionIds: JSON.parse(row.question_ids) as string[],
  };
}

function toQuestion(row: QuestionRow): Question {
  return {
    id: row.id,
    topic: row.topic,
    difficulty: row.difficulty,
    stem: row.stem,
    choices: JSON.parse(row.choices) as string[],
    answerIndex: row.answer_index,
    explanation: row.explanation,
    source: row.source,
  };
}

function toAttempt(row: AttemptRow): Attempt {
  return {
    id: row.id,
    assessmentId: row.assessment_id,
    studentName: row.student_name,
    startedAt: row.started_at,
    completedAt: row.completed_at,
    score: row.score,
    maxScore: row.max_score,
  };
}

export function listAssessments(db: DatabaseSync): AssessmentSummary[] {
  const rows = db
    .prepare("SELECT * FROM assessments ORDER BY rowid")
    .all() as unknown as AssessmentRow[];
  return rows.map((row) => {
    const a = toAssessment(row);
    return {
      id: a.id,
      title: a.title,
      description: a.description,
      kind: a.kind,
      timeLimitMinutes: a.timeLimitMinutes,
      questionCount: a.questionIds.length,
    };
  });
}

export function getAssessment(db: DatabaseSync, id: string): Assessment | null {
  const row = db.prepare("SELECT * FROM assessments WHERE id = ?").get(id) as
    AssessmentRow | undefined;
  return row ? toAssessment(row) : null;
}

/** Questions for an assessment, in the assessment's defined order. */
export function getAssessmentQuestions(db: DatabaseSync, assessment: Assessment): Question[] {
  const stmt = db.prepare("SELECT * FROM questions WHERE id = ?");
  return assessment.questionIds.map((qid) => {
    const row = stmt.get(qid) as QuestionRow | undefined;
    if (!row) {
      throw new Error(`Question ${qid} referenced by ${assessment.id} not found`);
    }
    return toQuestion(row);
  });
}

export function createAttempt(
  db: DatabaseSync,
  assessmentId: string,
  studentName: string,
): Attempt {
  const attempt: Attempt = {
    id: randomUUID(),
    assessmentId,
    studentName,
    startedAt: new Date().toISOString(),
    completedAt: null,
    score: null,
    maxScore: null,
  };
  db.prepare(
    `INSERT INTO attempts (id, assessment_id, student_name, started_at)
     VALUES (?, ?, ?, ?)`,
  ).run(attempt.id, attempt.assessmentId, attempt.studentName, attempt.startedAt);
  return attempt;
}

export function getAttempt(db: DatabaseSync, id: string): Attempt | null {
  const row = db.prepare("SELECT * FROM attempts WHERE id = ?").get(id) as AttemptRow | undefined;
  return row ? toAttempt(row) : null;
}

export function getAttemptResponses(db: DatabaseSync, id: string): ResponseMap | null {
  const row = db.prepare("SELECT responses FROM attempts WHERE id = ?").get(id) as
    { responses: string | null } | undefined;
  return row?.responses ? (JSON.parse(row.responses) as ResponseMap) : null;
}

export function completeAttempt(
  db: DatabaseSync,
  id: string,
  responses: ResponseMap,
  score: number,
  maxScore: number,
): Attempt {
  const completedAt = new Date().toISOString();
  db.prepare(
    `UPDATE attempts SET completed_at = ?, responses = ?, score = ?, max_score = ? WHERE id = ?`,
  ).run(completedAt, JSON.stringify(responses), score, maxScore, id);
  const updated = getAttempt(db, id);
  if (!updated) {
    throw new Error(`Attempt ${id} vanished during submit`);
  }
  return updated;
}

export function listAttemptsByStudent(db: DatabaseSync, studentName: string): AttemptSummary[] {
  const rows = db
    .prepare(
      `SELECT attempts.*, assessments.title AS assessment_title
       FROM attempts JOIN assessments ON assessments.id = attempts.assessment_id
       WHERE student_name = ? ORDER BY started_at DESC LIMIT 50`,
    )
    .all(studentName) as unknown as (AttemptRow & { assessment_title: string })[];
  return rows.map((row) => ({ ...toAttempt(row), assessmentTitle: row.assessment_title }));
}
