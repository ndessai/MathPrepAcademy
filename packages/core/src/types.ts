import type { Difficulty, TopicId } from "./taxonomy";

/** Number of answer choices per question (AMC 8 uses A–E). */
export const CHOICE_COUNT = 5;

export const CHOICE_LABELS = ["A", "B", "C", "D", "E"] as const;

/**
 * A question as stored on the server. Text fields may contain inline LaTeX
 * delimited by $...$ (rendered with KaTeX in the web app).
 */
export interface Question {
  id: string;
  topic: TopicId;
  difficulty: Difficulty;
  stem: string;
  choices: string[];
  answerIndex: number;
  explanation: string;
  source: string;
}

/** A question as served to a student during a test — no answer, no explanation. */
export type PublicQuestion = Pick<Question, "id" | "topic" | "difficulty" | "stem" | "choices">;

export type AssessmentKind = "mock" | "diagnostic" | "topic-quiz";

/**
 * Which MAA contest an assessment emulates. Determines scoring: AMC 8 is
 * +1/0/0 (max 25); AMC 10/12 are +6 per correct, +1.5 per blank, 0 per wrong
 * (max 150), 75 minutes.
 */
export type ExamType = "amc8" | "amc10" | "amc12";

export interface Assessment {
  id: string;
  title: string;
  description: string;
  kind: AssessmentKind;
  examType: ExamType;
  timeLimitMinutes: number;
  questionIds: string[];
}

export interface AssessmentSummary {
  id: string;
  title: string;
  description: string;
  kind: AssessmentKind;
  examType: ExamType;
  timeLimitMinutes: number;
  questionCount: number;
}

export interface AssessmentDetail extends AssessmentSummary {
  questions: PublicQuestion[];
}

/** Map of questionId -> selected choice index, or null if left blank. */
export type ResponseMap = Record<string, number | null>;

export interface Attempt {
  id: string;
  assessmentId: string;
  studentName: string;
  startedAt: string;
  completedAt: string | null;
  score: number | null;
  maxScore: number | null;
}

export interface AttemptSummary extends Attempt {
  assessmentTitle: string;
}

export interface GradedQuestion {
  questionId: string;
  topic: TopicId;
  difficulty: Difficulty;
  stem: string;
  choices: string[];
  selectedIndex: number | null;
  correctIndex: number;
  correct: boolean;
  explanation: string;
}

export interface TopicBreakdown {
  topic: TopicId;
  correct: number;
  total: number;
}

export interface ScoreReport {
  attemptId: string;
  assessmentId: string;
  assessmentTitle: string;
  examType: ExamType;
  studentName: string;
  startedAt: string;
  completedAt: string;
  score: number;
  maxScore: number;
  answered: number;
  results: GradedQuestion[];
  topicBreakdown: TopicBreakdown[];
}
