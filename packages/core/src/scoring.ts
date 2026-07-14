import type { TopicId } from "./taxonomy";
import type { GradedQuestion, Question, ResponseMap, TopicBreakdown } from "./types";

/**
 * Grade a set of responses against the question list, AMC 8 style:
 * 1 point per correct answer, 0 for wrong or blank. No penalty for guessing.
 */
export function gradeResponses(
  questions: Question[],
  responses: ResponseMap,
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

  return {
    results,
    score: results.filter((r) => r.correct).length,
    maxScore: questions.length,
    answered: results.filter((r) => r.selectedIndex !== null).length,
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
 * Encouraging feedback for a completed attempt. For 25-question mocks the
 * bands echo recent AMC 8 recognition levels (Honor Roll ≈ top 5%,
 * Distinguished Honor Roll ≈ top 1%). Cutoffs have been rising — 2025/2026
 * were DHR 23/24 and HR 19/21 — so the bands use the recent values.
 * Otherwise they are percentage bands.
 */
export function performanceMessage(score: number, maxScore: number): string {
  if (maxScore === 25) {
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
