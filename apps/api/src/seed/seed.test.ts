import { describe, expect, it } from "vitest";

import { assessmentSchema, questionSchema } from "@mathprep/core";

import { ASSESSMENTS } from "./assessments";
import { QUESTION_BANK } from "./questions";
import { PRACTICE_SETS } from "./sets";

describe("question bank integrity", () => {
  it("every question passes the shared schema (5 distinct choices, valid answer index)", () => {
    for (const q of QUESTION_BANK) {
      const result = questionSchema.safeParse(q);
      expect(result.success, `question ${q.id}: ${JSON.stringify(result.error?.issues)}`).toBe(
        true,
      );
    }
  });

  it("question ids are unique across the bank and all practice sets", () => {
    const ids = [
      ...QUESTION_BANK.map((q) => q.id),
      ...PRACTICE_SETS.flatMap((s) => s.questions.map((q) => q.id)),
    ];
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("covers every topic with at least 2 easy, 3 medium, and 1 hard question", () => {
    const byTopic = new Map<string, { easy: number; medium: number; hard: number }>();
    for (const q of QUESTION_BANK) {
      const counts = byTopic.get(q.topic) ?? { easy: 0, medium: 0, hard: 0 };
      counts[q.difficulty] += 1;
      byTopic.set(q.topic, counts);
    }
    expect(byTopic.size).toBe(8);
    for (const [topic, counts] of byTopic) {
      expect(counts.easy, `${topic} easy`).toBeGreaterThanOrEqual(2);
      expect(counts.medium, `${topic} medium`).toBeGreaterThanOrEqual(3);
      expect(counts.hard, `${topic} hard`).toBeGreaterThanOrEqual(1);
    }
  });
});

describe("assessment definitions", () => {
  const questionById = new Map(
    [...QUESTION_BANK, ...PRACTICE_SETS.flatMap((s) => s.questions)].map((q) => [q.id, q]),
  );

  it("every assessment passes the shared schema", () => {
    for (const a of ASSESSMENTS) {
      const result = assessmentSchema.safeParse(a);
      expect(result.success, `assessment ${a.id}`).toBe(true);
    }
  });

  it("every referenced question exists and appears at most once per assessment", () => {
    for (const a of ASSESSMENTS) {
      expect(new Set(a.questionIds).size, `${a.id} has duplicate questions`).toBe(
        a.questionIds.length,
      );
      for (const qid of a.questionIds) {
        expect(questionById.has(qid), `${a.id} references missing question ${qid}`).toBe(true);
      }
    }
  });

  it("the mock exam has 25 questions ramping easy -> medium -> hard like the real AMC 8", () => {
    const mock = ASSESSMENTS.find((a) => a.id === "mock-01");
    expect(mock).toBeDefined();
    const difficulties = mock!.questionIds.map((qid) => questionById.get(qid)!.difficulty);
    expect(difficulties).toHaveLength(25);
    expect(difficulties.slice(0, 10).every((d) => d === "easy")).toBe(true);
    expect(difficulties.slice(10, 20).every((d) => d === "medium")).toBe(true);
    expect(difficulties.slice(20).every((d) => d === "hard")).toBe(true);
  });

  it("every practice set has 25 schema-valid questions ramping 10 easy / 10 medium / 5 hard", () => {
    for (const set of PRACTICE_SETS) {
      expect(set.questions, `set ${set.setNumber} length`).toHaveLength(25);
      for (const q of set.questions) {
        const result = questionSchema.safeParse(q);
        expect(result.success, `question ${q.id}: ${JSON.stringify(result.error?.issues)}`).toBe(
          true,
        );
      }
      const difficulties = set.questions.map((q) => q.difficulty);
      expect(
        difficulties.slice(0, 10).every((d) => d === "easy"),
        `set ${set.setNumber} easy`,
      ).toBe(true);
      expect(
        difficulties.slice(10, 20).every((d) => d === "medium"),
        `set ${set.setNumber} medium`,
      ).toBe(true);
      expect(
        difficulties.slice(20).every((d) => d === "hard"),
        `set ${set.setNumber} hard`,
      ).toBe(true);
      const topics = new Set(set.questions.map((q) => q.topic));
      expect(topics.size, `set ${set.setNumber} topic variety`).toBeGreaterThanOrEqual(6);
    }
  });

  it("every practice set has a matching mock assessment with its contest's timing", () => {
    for (const set of PRACTICE_SETS) {
      const id =
        set.examType === "amc8"
          ? `mock-${String(set.setNumber).padStart(2, "0")}`
          : `${set.examType}-mock-${String(set.setNumber).padStart(2, "0")}`;
      const mock = ASSESSMENTS.find((a) => a.id === id);
      expect(mock, `${id} missing`).toBeDefined();
      expect(mock!.questionIds).toEqual(set.questions.map((q) => q.id));
      expect(mock!.examType).toBe(set.examType);
      expect(mock!.timeLimitMinutes).toBe(set.examType === "amc8" ? 40 : 75);
    }
  });

  it("each topic has a 6-question topic quiz", () => {
    const quizzes = ASSESSMENTS.filter((a) => a.kind === "topic-quiz");
    expect(quizzes).toHaveLength(8);
    for (const quiz of quizzes) {
      expect(quiz.questionIds).toHaveLength(6);
      const topics = new Set(quiz.questionIds.map((qid) => questionById.get(qid)!.topic));
      expect(topics.size, `${quiz.id} should be single-topic`).toBe(1);
    }
  });
});
