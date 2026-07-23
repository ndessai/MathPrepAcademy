import type { ScoreReport } from "@mathprep/core";
import { CHOICE_LABELS, performanceMessage, topicLabel } from "@mathprep/core";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

import { fetchReport } from "../api/client";
import { MathText } from "../components/MathText";

export function ResultsPage() {
  const { attemptId } = useParams<{ attemptId: string }>();
  const [report, setReport] = useState<ScoreReport | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!attemptId) {
      return;
    }
    fetchReport(attemptId)
      .then(setReport)
      .catch((e: unknown) => setError(e instanceof Error ? e.message : "Failed to load report"));
  }, [attemptId]);

  if (error) {
    return (
      <p role="alert" className="error">
        {error}
      </p>
    );
  }
  if (!report) {
    return <p>Loading report…</p>;
  }

  const minutes = Math.max(
    1,
    Math.round(
      (new Date(report.completedAt).getTime() - new Date(report.startedAt).getTime()) / 60_000,
    ),
  );
  // AMC 10/12 blanks earn 1.5 points, so scores can be non-integer.
  const score = Number.isInteger(report.score) ? String(report.score) : report.score.toFixed(1);

  return (
    <div className="results">
      <h2>Score report</h2>
      <section className="panel score-panel">
        <p className="score-headline" aria-label="Score">
          {score} / {report.maxScore}
        </p>
        <p>
          <strong>{report.studentName}</strong> · {report.assessmentTitle}
        </p>
        <p>
          Answered {report.answered} of {report.results.length} · about {minutes} min
        </p>
        <p className="performance">
          {performanceMessage(report.score, report.maxScore, report.examType)}
        </p>
      </section>

      <section>
        <h3>By topic</h3>
        <table className="topic-table">
          <thead>
            <tr>
              <th scope="col">Topic</th>
              <th scope="col">Correct</th>
              <th scope="col" aria-label="Progress" />
            </tr>
          </thead>
          <tbody>
            {report.topicBreakdown.map((t) => (
              <tr key={t.topic}>
                <td>{topicLabel(t.topic)}</td>
                <td>
                  {t.correct} / {t.total}
                </td>
                <td className="bar-cell">
                  <div className="bar">
                    <div
                      className="bar-fill"
                      style={{ width: `${t.total === 0 ? 0 : (t.correct / t.total) * 100}%` }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h3>Question review</h3>
        <ol className="review-list">
          {report.results.map((r, i) => {
            const status = r.selectedIndex === null ? "blank" : r.correct ? "correct" : "incorrect";
            return (
              <li key={r.questionId} className={`review-item ${status}`}>
                <p className="review-head">
                  <span className={`badge ${status}`}>
                    {status === "correct"
                      ? "Correct"
                      : status === "incorrect"
                        ? "Incorrect"
                        : "Blank"}
                  </span>
                  <span className="review-number">Q{i + 1}</span>
                  <span className="review-topic">{topicLabel(r.topic)}</span>
                </p>
                <p className="question-stem">
                  <MathText text={r.stem} />
                </p>
                <p>
                  {r.selectedIndex !== null && (
                    <>
                      Your answer: <strong>{CHOICE_LABELS[r.selectedIndex]}</strong>{" "}
                      <MathText text={r.choices[r.selectedIndex] ?? ""} /> ·{" "}
                    </>
                  )}
                  Correct answer: <strong>{CHOICE_LABELS[r.correctIndex]}</strong>{" "}
                  <MathText text={r.choices[r.correctIndex] ?? ""} />
                </p>
                <details open={!r.correct}>
                  <summary>Explanation</summary>
                  <p>
                    <MathText text={r.explanation} />
                  </p>
                </details>
              </li>
            );
          })}
        </ol>
      </section>

      <p>
        <Link to="/assessment">Back to assessments</Link>
      </p>
    </div>
  );
}
