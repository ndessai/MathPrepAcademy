import type { DatabaseSync } from "node:sqlite";

import { Hono } from "hono";

import type { AssessmentDetail, ScoreReport } from "@mathprep/core";
import {
  EXAM_SCORING,
  gradeResponses,
  startAttemptSchema,
  submitAttemptSchema,
  topicBreakdown,
} from "@mathprep/core";

import {
  completeAttempt,
  createAttempt,
  getAssessment,
  getAssessmentQuestions,
  getAttempt,
  getAttemptResponses,
  listAssessments,
  listAttemptsByStudent,
} from "./repository";

export function createApp(db: DatabaseSync): Hono {
  const app = new Hono();

  app.get("/api/health", (c) => c.json({ status: "ok" }));

  app.get("/api/assessments", (c) => c.json(listAssessments(db)));

  // Assessment detail for taking a test: questions WITHOUT answers or
  // explanations — grading happens server-side only.
  app.get("/api/assessments/:id", (c) => {
    const assessment = getAssessment(db, c.req.param("id"));
    if (!assessment) {
      return c.json({ error: "Assessment not found" }, 404);
    }
    const questions = getAssessmentQuestions(db, assessment);
    const detail: AssessmentDetail = {
      id: assessment.id,
      title: assessment.title,
      description: assessment.description,
      kind: assessment.kind,
      examType: assessment.examType,
      timeLimitMinutes: assessment.timeLimitMinutes,
      questionCount: assessment.questionIds.length,
      questions: questions.map(({ id, topic, difficulty, stem, choices }) => ({
        id,
        topic,
        difficulty,
        stem,
        choices,
      })),
    };
    return c.json(detail);
  });

  app.post("/api/attempts", async (c) => {
    const parsed = startAttemptSchema.safeParse(await c.req.json().catch(() => null));
    if (!parsed.success) {
      return c.json({ error: "Invalid request", issues: parsed.error.issues }, 400);
    }
    const { assessmentId, studentName } = parsed.data;
    if (!getAssessment(db, assessmentId)) {
      return c.json({ error: "Assessment not found" }, 404);
    }
    return c.json(createAttempt(db, assessmentId, studentName), 201);
  });

  app.post("/api/attempts/:id/submit", async (c) => {
    const attempt = getAttempt(db, c.req.param("id"));
    if (!attempt) {
      return c.json({ error: "Attempt not found" }, 404);
    }
    if (attempt.completedAt) {
      return c.json({ error: "Attempt already submitted" }, 409);
    }

    const parsed = submitAttemptSchema.safeParse(await c.req.json().catch(() => null));
    if (!parsed.success) {
      return c.json({ error: "Invalid request", issues: parsed.error.issues }, 400);
    }

    const assessment = getAssessment(db, attempt.assessmentId);
    if (!assessment) {
      return c.json({ error: "Assessment not found" }, 404);
    }
    const validIds = new Set(assessment.questionIds);
    const unknown = Object.keys(parsed.data.responses).filter((qid) => !validIds.has(qid));
    if (unknown.length > 0) {
      return c.json({ error: `Unknown question ids: ${unknown.join(", ")}` }, 400);
    }

    const questions = getAssessmentQuestions(db, assessment);
    const graded = gradeResponses(
      questions,
      parsed.data.responses,
      EXAM_SCORING[assessment.examType],
    );
    const completed = completeAttempt(
      db,
      attempt.id,
      parsed.data.responses,
      graded.score,
      graded.maxScore,
    );

    const report: ScoreReport = {
      attemptId: completed.id,
      assessmentId: assessment.id,
      assessmentTitle: assessment.title,
      examType: assessment.examType,
      studentName: completed.studentName,
      startedAt: completed.startedAt,
      completedAt: completed.completedAt ?? new Date().toISOString(),
      score: graded.score,
      maxScore: graded.maxScore,
      answered: graded.answered,
      results: graded.results,
      topicBreakdown: topicBreakdown(graded.results),
    };
    return c.json(report);
  });

  // Full report for a completed attempt (used by the results page).
  app.get("/api/attempts/:id", (c) => {
    const attempt = getAttempt(db, c.req.param("id"));
    if (!attempt) {
      return c.json({ error: "Attempt not found" }, 404);
    }
    if (!attempt.completedAt) {
      return c.json({ error: "Attempt not yet submitted" }, 409);
    }
    const assessment = getAssessment(db, attempt.assessmentId);
    if (!assessment) {
      return c.json({ error: "Assessment not found" }, 404);
    }
    const responses = getAttemptResponses(db, attempt.id) ?? {};
    const questions = getAssessmentQuestions(db, assessment);
    const graded = gradeResponses(questions, responses, EXAM_SCORING[assessment.examType]);

    const report: ScoreReport = {
      attemptId: attempt.id,
      assessmentId: assessment.id,
      assessmentTitle: assessment.title,
      examType: assessment.examType,
      studentName: attempt.studentName,
      startedAt: attempt.startedAt,
      completedAt: attempt.completedAt,
      score: graded.score,
      maxScore: graded.maxScore,
      answered: graded.answered,
      results: graded.results,
      topicBreakdown: topicBreakdown(graded.results),
    };
    return c.json(report);
  });

  app.get("/api/students/:name/attempts", (c) => {
    return c.json(listAttemptsByStudent(db, c.req.param("name")));
  });

  return app;
}
