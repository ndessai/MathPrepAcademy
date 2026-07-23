import type { Assessment } from "@mathprep/core";
import { TOPICS } from "@mathprep/core";

import { PRACTICE_SETS } from "./sets";

/**
 * The mock exam mirrors the real AMC 8's difficulty ramp:
 * questions 1-10 easy, 11-20 medium, 21-25 hard, mixed across topics.
 */
const MOCK_QUESTION_IDS = [
  // 1-10: easy
  "arith-01",
  "nt-01",
  "alg-01",
  "geo-01",
  "count-01",
  "prob-01",
  "data-01",
  "logic-01",
  "arith-02",
  "geo-02",
  // 11-20: medium
  "nt-03",
  "alg-04",
  "geo-03",
  "count-04",
  "prob-04",
  "data-03",
  "logic-03",
  "arith-03",
  "nt-04",
  "geo-05",
  // 21-25: hard
  "nt-06",
  "geo-06",
  "count-06",
  "prob-06",
  "logic-06",
];

const DIAGNOSTIC_QUESTION_IDS = [
  "logic-02",
  "data-02",
  "arith-04",
  "nt-05",
  "alg-05",
  "geo-04",
  "count-03",
  "prob-05",
  "arith-05",
  "logic-05",
];

// Topic quizzes cover the AMC 8 bank's 8 topics; precalculus exists only in
// AMC 12 practice sets and has no standalone quiz.
const QUIZ_TOPICS = TOPICS.filter((topic) => topic.id !== "precalculus");

const TOPIC_QUIZZES: Assessment[] = QUIZ_TOPICS.map((topic) => ({
  id: `quiz-${topic.id}`,
  title: `${topic.label} Quiz`,
  description: `Six questions covering ${topic.description
    .charAt(0)
    .toLowerCase()}${topic.description.slice(1)}`,
  kind: "topic-quiz",
  examType: "amc8" as const,
  timeLimitMinutes: 15,
  questionIds: [1, 2, 3, 4, 5, 6].map((n) => `${idPrefix(topic.id)}-0${n}`),
}));

/** Question ids use short prefixes; map each topic id to its prefix. */
function idPrefix(topicId: string): string {
  const prefixes: Record<string, string> = {
    arithmetic: "arith",
    "number-theory": "nt",
    algebra: "alg",
    geometry: "geo",
    counting: "count",
    probability: "prob",
    "data-analysis": "data",
    logic: "logic",
  };
  const prefix = prefixes[topicId];
  if (!prefix) {
    throw new Error(`No question id prefix for topic ${topicId}`);
  }
  return prefix;
}

const EXAM_LABEL = { amc8: "AMC 8", amc10: "AMC 10", amc12: "AMC 12" } as const;

const PRACTICE_MOCKS: Assessment[] = PRACTICE_SETS.map((set) => {
  const label = EXAM_LABEL[set.examType];
  // AMC 8 mocks keep their original short ids (mock-02, ...); AMC 10/12 mocks
  // are namespaced by contest (amc10-mock-01, ...).
  const id =
    set.examType === "amc8"
      ? `mock-${String(set.setNumber).padStart(2, "0")}`
      : `${set.examType}-mock-${String(set.setNumber).padStart(2, "0")}`;
  return {
    id,
    title: `${label} Mock Exam #${set.setNumber}`,
    description:
      set.examType === "amc8"
        ? "Full-length simulation: 25 questions in 40 minutes, with difficulty ramping just like the real AMC 8. No penalty for guessing — never leave a question blank."
        : `Full-length simulation: 25 questions in 75 minutes with official ${label} scoring — 6 points per correct answer, 1.5 per blank, 0 per wrong. Leaving a hard question blank beats a wild guess.`,
    kind: "mock",
    examType: set.examType,
    timeLimitMinutes: set.examType === "amc8" ? 40 : 75,
    questionIds: set.questions.map((q) => q.id),
  };
});

export const ASSESSMENTS: Assessment[] = [
  {
    id: "mock-01",
    title: "AMC 8 Mock Exam #1",
    description:
      "Full-length simulation: 25 questions in 40 minutes, with difficulty ramping just like the real AMC 8. No penalty for guessing — never leave a question blank.",
    kind: "mock",
    examType: "amc8",
    timeLimitMinutes: 40,
    questionIds: MOCK_QUESTION_IDS,
  },
  {
    id: "diagnostic-01",
    title: "Quick Diagnostic",
    description:
      "Ten mixed questions across every AMC 8 topic to find your starting point. Takes about 15 minutes.",
    kind: "diagnostic",
    examType: "amc8",
    timeLimitMinutes: 15,
    questionIds: DIAGNOSTIC_QUESTION_IDS,
  },
  ...PRACTICE_MOCKS,
  ...TOPIC_QUIZZES,
];
