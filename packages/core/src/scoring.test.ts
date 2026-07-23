import { describe, expect, it } from "vitest";

import { EXAM_SCORING, gradeResponses, performanceMessage, topicBreakdown } from "./scoring";
import type { Question, ResponseMap } from "./types";

function q(id: string, topic: Question["topic"], answerIndex: number): Question {
  return {
    id,
    topic,
    difficulty: "easy",
    stem: `stem ${id}`,
    choices: ["1", "2", "3", "4", "5"],
    answerIndex,
    explanation: "because",
    source: "original",
  };
}

const questions: Question[] = [
  q("q1", "arithmetic", 0),
  q("q2", "arithmetic", 1),
  q("q3", "geometry", 2),
  q("q4", "geometry", 3),
];

describe("gradeResponses", () => {
  it("scores 1 point per correct answer with no penalty for wrong or blank", () => {
    const responses: ResponseMap = { q1: 0, q2: 4, q3: null };
    const graded = gradeResponses(questions, responses);

    expect(graded.score).toBe(1);
    expect(graded.maxScore).toBe(4);
    expect(graded.answered).toBe(2);
    expect(graded.results.map((r) => r.correct)).toEqual([true, false, false, false]);
  });

  it("treats a missing response the same as an explicit blank", () => {
    const graded = gradeResponses(questions, {});
    expect(graded.score).toBe(0);
    expect(graded.answered).toBe(0);
    expect(graded.results.every((r) => r.selectedIndex === null)).toBe(true);
  });

  it("keeps the correct index and explanation in every graded result", () => {
    const graded = gradeResponses(questions, { q1: 0 });
    expect(graded.results[0]).toMatchObject({
      questionId: "q1",
      correctIndex: 0,
      explanation: "because",
    });
  });

  it("applies AMC 10/12 scoring: 6 per correct, 1.5 per blank, 0 per wrong", () => {
    // q1 correct, q2 wrong, q3 + q4 blank.
    const graded = gradeResponses(questions, { q1: 0, q2: 4 }, EXAM_SCORING.amc10);
    expect(graded.score).toBe(6 + 0 + 1.5 + 1.5);
    expect(graded.maxScore).toBe(24);
    expect(graded.answered).toBe(2);
  });

  it("an all-blank AMC 10 submission scores 1.5 per question", () => {
    const graded = gradeResponses(questions, {}, EXAM_SCORING.amc12);
    expect(graded.score).toBe(6);
    expect(graded.maxScore).toBe(24);
  });
});

describe("topicBreakdown", () => {
  it("aggregates correct/total per topic in first-appearance order", () => {
    const graded = gradeResponses(questions, { q1: 0, q3: 2, q4: 0 });
    expect(topicBreakdown(graded.results)).toEqual([
      { topic: "arithmetic", correct: 1, total: 2 },
      { topic: "geometry", correct: 1, total: 2 },
    ]);
  });
});

describe("performanceMessage", () => {
  it("maps 25-question mock scores to AMC 8 recognition bands (2025/2026 cutoff levels)", () => {
    expect(performanceMessage(23, 25)).toContain("Distinguished Honor Roll");
    expect(performanceMessage(19, 25)).toContain("Honor Roll");
    expect(performanceMessage(19, 25)).not.toContain("Distinguished");
    expect(performanceMessage(15, 25)).toContain("Achievement Roll");
  });

  it("uses percentage bands for non-mock lengths", () => {
    expect(performanceMessage(6, 6)).toContain("Outstanding");
    expect(performanceMessage(0, 6)).toContain("more practice");
  });

  it("maps AMC 10/12 scores to AIME-referenced bands", () => {
    expect(performanceMessage(126, 150, "amc10")).toContain("Distinguished Honor Roll");
    expect(performanceMessage(108, 150, "amc10")).toContain("AIME qualification");
    expect(performanceMessage(96, 150, "amc10")).toContain("AIME door");
    expect(performanceMessage(96, 150, "amc12")).toContain("AIME qualification");
    expect(performanceMessage(37.5, 150, "amc12")).not.toContain("AIME");
  });
});
