import type { TopicId } from "./taxonomy";
import type { ExamType, GradedQuestion, Question, ResponseMap, TopicBreakdown } from "./types";

/** Points awarded per correct / blank / wrong answer. */
export interface ScoringRule {
  correctPoints: number;
  blankPoints: number;
  wrongPoints: number;
}

/**
 * Official MAA scoring per contest: AMC 8 gives 1 point per correct answer
 * (max 25); AMC 10/12 give 6 points per correct, 1.5 per blank, 0 per wrong
 * (max 150) — so a blank beats a wild guess unless two choices are eliminated.
 */
export const EXAM_SCORING: Record<ExamType, ScoringRule> = {
  amc8: { correctPoints: 1, blankPoints: 0, wrongPoints: 0 },
  amc10: { correctPoints: 6, blankPoints: 1.5, wrongPoints: 0 },
  amc12: { correctPoints: 6, blankPoints: 1.5, wrongPoints: 0 },
};

/**
 * Grade a set of responses against the question list under the given scoring
 * rule (AMC 8 rules by default).
 */
export function gradeResponses(
  questions: Question[],
  responses: ResponseMap,
  rule: ScoringRule = EXAM_SCORING.amc8,
): { results: GradedQuestion[]; score: number; maxScore: number; answered: number } {
  const results: GradedQuestion[] = questions.map((q) => {
    const selected = responses[q.id];
    const selectedIndex = typeof selected === "number" ? selected : null;
    return {
      questionId: q.id,
      topic: q.topic,
      difficulty: q.difficulty,
      stem: q.stem,
      choices: q.choices,
      selectedIndex,
      correctIndex: q.answerIndex,
      correct: selectedIndex === q.answerIndex,
      explanation: q.explanation,
    };
  });

  const correct = results.filter((r) => r.correct).length;
  const answered = results.filter((r) => r.selectedIndex !== null).length;
  const blank = results.length - answered;
  const wrong = answered - correct;

  return {
    results,
    score: correct * rule.correctPoints + blank * rule.blankPoints + wrong * rule.wrongPoints,
    maxScore: results.length * rule.correctPoints,
    answered,
  };
}

/** Per-topic correct/total counts, ordered by the questions' first appearance. */
export function topicBreakdown(results: GradedQuestion[]): TopicBreakdown[] {
  const byTopic = new Map<TopicId, TopicBreakdown>();
  for (const r of results) {
    const entry = byTopic.get(r.topic) ?? { topic: r.topic, correct: 0, total: 0 };
    entry.total += 1;
    if (r.correct) {
      entry.correct += 1;
    }
    byTopic.set(r.topic, entry);
  }
  return [...byTopic.values()];
}

/**
 * Encouraging feedback for a completed attempt, calibrated to each contest's
 * recent recognition levels. AMC 8 bands echo the 2025/2026 cutoffs
 * (DHR 23/24, HR 19/21). AMC 10/12 bands reference AIME qualification, whose
 * cutoffs float year to year (recently roughly 93-110 for AMC 10 and 85-95
 * for AMC 12, out of 150). Non-contest lengths fall back to percentage bands.
 */
export function performanceMessage(
  score: number,
  maxScore: number,
  examType: ExamType = "amc8",
): string {
  if (examType === "amc8" && maxScore === 25) {
    if (score >= 23) {
      return "Distinguished Honor Roll pace — this score would typically land in the top 1% nationally.";
    }
    if (score >= 19) {
      return "Honor Roll pace — this score would typically land in the top 5% nationally.";
    }
    if (score >= 15) {
      return "Achievement Roll pace for grade 6 and below — a very strong result.";
    }
    if (score >= 10) {
      return "Solid foundation — review the missed topics below and keep practicing.";
    }
    return "Every mock is progress. Review the explanations below and try a topic quiz next.";
  }

  if ((examType === "amc10" || examType === "amc12") && maxScore === 150) {
    const aimeBand = examType === "amc10" ? 105 : 95;
    if (score >= 120) {
      return "Distinguished Honor Roll pace — top 1% territory on recent exams.";
    }
    if (score >= aimeBand) {
      return "AIME qualification pace — recent cutoffs vary by year, but this score would usually make it.";
    }
    if (score >= aimeBand - 15) {
      return "Knocking on the AIME door — a couple more correct answers closes the gap.";
    }
    if (score >= 60) {
      return "Solid base — bank the early questions faster and review the missed topics below.";
    }
    return "This level is a climb. Review every explanation, then rebuild fundamentals with the AMC 8 sets.";
  }

  const pct = maxScore === 0 ? 0 : score / maxScore;
  if (pct >= 0.9) {
    return "Outstanding — this topic looks ready for test day.";
  }
  if (pct >= 0.7) {
    return "Strong work — a little more practice and this topic is locked in.";
  }
  if (pct >= 0.5) {
    return "Good start — review the explanations for the ones you missed.";
  }
  return "This topic needs more practice. Read each explanation, then retry the quiz.";
}
