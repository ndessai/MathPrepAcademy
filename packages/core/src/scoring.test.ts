import { describe, expect, it } from "vitest";

import { gradeResponses, performanceMessage, topicBreakdown } from "./scoring";
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
});
