import { mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { DatabaseSync } from "node:sqlite";

import { assessmentSchema, questionSchema } from "@mathprep/core";

import { ASSESSMENTS } from "./seed/assessments";
import { QUESTION_BANK } from "./seed/questions";
import { PRACTICE_SETS } from "./seed/sets";

export function openDatabase(path: string): DatabaseSync {
  if (path !== ":memory:") {
    mkdirSync(dirname(path), { recursive: true });
  }
  const db = new DatabaseSync(path);
  db.exec("PRAGMA foreign_keys = ON;");
  migrate(db);
  seedIfEmpty(db);
  return db;
}

function migrate(db: DatabaseSync): void {
  db.exec(`
    CREATE TABLE IF NOT EXISTS questions (
      id TEXT PRIMARY KEY,
      topic TEXT NOT NULL,
      difficulty TEXT NOT NULL CHECK (difficulty IN ('easy', 'medium', 'hard')),
      stem TEXT NOT NULL,
      choices TEXT NOT NULL,
      answer_index INTEGER NOT NULL CHECK (answer_index BETWEEN 0 AND 4),
      explanation TEXT NOT NULL,
      source TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS assessments (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      kind TEXT NOT NULL CHECK (kind IN ('mock', 'diagnostic', 'topic-quiz')),
      exam_type TEXT NOT NULL DEFAULT 'amc8' CHECK (exam_type IN ('amc8', 'amc10', 'amc12')),
      time_limit_minutes INTEGER NOT NULL,
      question_ids TEXT NOT NULL
    );

    -- AMC 10/12 award 1.5 points per blank, so scores are REAL, not INTEGER.
    CREATE TABLE IF NOT EXISTS attempts (
      id TEXT PRIMARY KEY,
      assessment_id TEXT NOT NULL REFERENCES assessments(id),
      student_name TEXT NOT NULL,
      started_at TEXT NOT NULL,
      completed_at TEXT,
      responses TEXT,
      score REAL,
      max_score REAL
    );

    CREATE INDEX IF NOT EXISTS idx_attempts_student ON attempts(student_name, started_at DESC);

    -- google_sub is NULL for users created through the dev sign-in; the same
    -- row is claimed by Google sign-in later via the email match.
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      google_sub TEXT UNIQUE,
      email TEXT NOT NULL UNIQUE,
      name TEXT NOT NULL,
      picture TEXT,
      created_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS sessions (
      token TEXT PRIMARY KEY,
      user_id TEXT NOT NULL REFERENCES users(id),
      created_at TEXT NOT NULL,
      expires_at TEXT NOT NULL
    );

    CREATE INDEX IF NOT EXISTS idx_sessions_user ON sessions(user_id);
  `);
}

/**
 * Seed the question bank and assessment definitions on first boot. Every seed
 * row is validated against the shared zod schemas so authoring mistakes fail
 * loudly at startup (and in tests) instead of surfacing mid-assessment.
 */
function seedIfEmpty(db: DatabaseSync): void {
  const row = db.prepare("SELECT COUNT(*) AS n FROM questions").get() as { n: number };
  if (row.n > 0) {
    return;
  }

  const allQuestions = [...QUESTION_BANK, ...PRACTICE_SETS.flatMap((s) => s.questions)];

  const insertQuestion = db.prepare(
    `INSERT INTO questions (id, topic, difficulty, stem, choices, answer_index, explanation, source)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
  );
  for (const raw of allQuestions) {
    const q = questionSchema.parse(raw);
    insertQuestion.run(
      q.id,
      q.topic,
      q.difficulty,
      q.stem,
      JSON.stringify(q.choices),
      q.answerIndex,
      q.explanation,
      q.source,
    );
  }

  const knownIds = new Set(allQuestions.map((q) => q.id));
  const insertAssessment = db.prepare(
    `INSERT INTO assessments (id, title, description, kind, exam_type, time_limit_minutes, question_ids)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
  );
  for (const raw of ASSESSMENTS) {
    const a = assessmentSchema.parse(raw);
    for (const qid of a.questionIds) {
      if (!knownIds.has(qid)) {
        throw new Error(`Assessment ${a.id} references unknown question ${qid}`);
      }
    }
    insertAssessment.run(
      a.id,
      a.title,
      a.description,
      a.kind,
      a.examType,
      a.timeLimitMinutes,
      JSON.stringify(a.questionIds),
    );
  }
}
