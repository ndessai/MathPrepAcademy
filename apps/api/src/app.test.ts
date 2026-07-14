import { beforeEach, describe, expect, it } from "vitest";

import type { Hono } from "hono";

import type {
  AssessmentDetail,
  AssessmentSummary,
  Attempt,
  AttemptSummary,
  ResponseMap,
  ScoreReport,
} from "@mathprep/core";

import { createApp } from "./app";
import { openDatabase } from "./db";
import { QUESTION_BANK } from "./seed/questions";

let app: Hono;

beforeEach(() => {
  app = createApp(openDatabase(":memory:"));
});

async function json<T>(res: Response): Promise<T> {
  return (await res.json()) as T;
}

async function startAttempt(assessmentId: string, studentName = "Alex"): Promise<Attempt> {
  const res = await app.request("/api/attempts", {
    method: "POST",
    body: JSON.stringify({ assessmentId, studentName }),
    headers: { "content-type": "application/json" },
  });
  expect(res.status).toBe(201);
  return json<Attempt>(res);
}

async function submit(attemptId: string, responses: ResponseMap): Promise<Response> {
  return app.request(`/api/attempts/${attemptId}/submit`, {
    method: "POST",
    body: JSON.stringify({ responses }),
    headers: { "content-type": "application/json" },
  });
}

describe("GET /api/health", () => {
  it("responds ok", async () => {
    const res = await app.request("/api/health");
    expect(res.status).toBe(200);
    expect(await json(res)).toEqual({ status: "ok" });
  });
});

describe("GET /api/assessments", () => {
  it("lists the seeded assessments with question counts", async () => {
    const res = await app.request("/api/assessments");
    expect(res.status).toBe(200);
    const list = await json<AssessmentSummary[]>(res);
    expect(list.length).toBe(10);
    const mock = list.find((a) => a.id === "mock-01");
    expect(mock).toMatchObject({ questionCount: 25, timeLimitMinutes: 40, kind: "mock" });
  });
});

describe("GET /api/assessments/:id", () => {
  it("returns questions without answers or explanations", async () => {
    const res = await app.request("/api/assessments/mock-01");
    expect(res.status).toBe(200);
    const detail = await json<AssessmentDetail>(res);
    expect(detail.questions).toHaveLength(25);
    for (const q of detail.questions) {
      expect(q).not.toHaveProperty("answerIndex");
      expect(q).not.toHaveProperty("explanation");
      expect(q.choices).toHaveLength(5);
    }
  });

  it("404s for an unknown assessment", async () => {
    const res = await app.request("/api/assessments/nope");
    expect(res.status).toBe(404);
  });
});

describe("attempt lifecycle", () => {
  it("grades a perfect submission at full marks", async () => {
    const attempt = await startAttempt("quiz-arithmetic");
    const answers = Object.fromEntries(
      QUESTION_BANK.filter((q) => q.topic === "arithmetic").map((q) => [q.id, q.answerIndex]),
    );
    const res = await submit(attempt.id, answers);
    expect(res.status).toBe(200);
    const report = await json<ScoreReport>(res);
    expect(report.score).toBe(6);
    expect(report.maxScore).toBe(6);
    expect(report.results.every((r) => r.correct)).toBe(true);
    expect(report.topicBreakdown).toEqual([{ topic: "arithmetic", correct: 6, total: 6 }]);
  });

  it("scores blanks and wrong answers as zero without penalty", async () => {
    const attempt = await startAttempt("quiz-geometry");
    const geometry = QUESTION_BANK.filter((q) => q.topic === "geometry");
    const responses: ResponseMap = Object.fromEntries(geometry.map((q) => [q.id, null]));
    // Answer one correctly and one incorrectly; leave the rest blank.
    const [first, second] = geometry;
    responses[first!.id] = first!.answerIndex;
    responses[second!.id] = (second!.answerIndex + 1) % 5;

    const report = await json<ScoreReport>(await submit(attempt.id, responses));
    expect(report.score).toBe(1);
    expect(report.answered).toBe(2);
    expect(report.maxScore).toBe(6);
  });

  it("rejects double submission with 409", async () => {
    const attempt = await startAttempt("diagnostic-01");
    expect((await submit(attempt.id, {})).status).toBe(200);
    expect((await submit(attempt.id, {})).status).toBe(409);
  });

  it("rejects responses for questions outside the assessment", async () => {
    const attempt = await startAttempt("quiz-arithmetic");
    const res = await submit(attempt.id, { "geo-01": 0 });
    expect(res.status).toBe(400);
  });

  it("rejects a malformed start request", async () => {
    const res = await app.request("/api/attempts", {
      method: "POST",
      body: JSON.stringify({ assessmentId: "mock-01", studentName: "" }),
      headers: { "content-type": "application/json" },
    });
    expect(res.status).toBe(400);
  });

  it("serves the report again on GET and lists it in student history", async () => {
    const attempt = await startAttempt("quiz-logic", "Jordan");
    await submit(attempt.id, { "logic-01": 3 });

    const reportRes = await app.request(`/api/attempts/${attempt.id}`);
    expect(reportRes.status).toBe(200);
    const report = await json<ScoreReport>(reportRes);
    expect(report.score).toBe(1);
    expect(report.studentName).toBe("Jordan");

    const historyRes = await app.request("/api/students/Jordan/attempts");
    const history = await json<AttemptSummary[]>(historyRes);
    expect(history).toHaveLength(1);
    expect(history[0]).toMatchObject({
      assessmentId: "quiz-logic",
      assessmentTitle: "Logic & Spatial Reasoning Quiz",
      score: 1,
      maxScore: 6,
    });
  });

  it("does not serve a report for an unsubmitted attempt", async () => {
    const attempt = await startAttempt("mock-01");
    const res = await app.request(`/api/attempts/${attempt.id}`);
    expect(res.status).toBe(409);
  });
});
