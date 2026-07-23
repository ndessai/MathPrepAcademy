import type { AssessmentSummary, AttemptSummary, ExamType } from "@mathprep/core";
import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router";

import { Button } from "@mathprep/ui";

import { fetchAssessments, fetchStudentAttempts, startAttempt } from "../api/client";
import { useUser } from "../auth/authContext";

const EXAM_SECTIONS = [
  { type: "amc8", label: "AMC 8" },
  { type: "amc10", label: "AMC 10" },
  { type: "amc12", label: "AMC 12" },
] as const;

function parseExamFilter(value: string | null): ExamType | null {
  return EXAM_SECTIONS.some((s) => s.type === value) ? (value as ExamType) : null;
}

export function AssessmentHub() {
  const user = useUser();
  const [assessments, setAssessments] = useState<AssessmentSummary[] | null>(null);
  const [history, setHistory] = useState<AttemptSummary[]>([]);
  const [startingId, setStartingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const examFilter = parseExamFilter(searchParams.get("exam"));

  useEffect(() => {
    fetchAssessments()
      .then(setAssessments)
      .catch((e: unknown) => setError(e instanceof Error ? e.message : "Failed to load"));
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetchStudentAttempts(user.name)
      .then((attempts) => {
        if (!cancelled) {
          setHistory(attempts.filter((a) => a.completedAt !== null));
        }
      })
      .catch(() => {
        // History is non-critical; ignore load errors.
      });
    return () => {
      cancelled = true;
    };
  }, [user.name]);

  async function handleStart(assessmentId: string) {
    setStartingId(assessmentId);
    setError(null);
    try {
      const attempt = await startAttempt(assessmentId, user.name);
      await navigate(`/assessment/${assessmentId}/attempt/${attempt.id}`);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Could not start the assessment");
      setStartingId(null);
    }
  }

  const visible = examFilter
    ? (assessments?.filter((a) => a.examType === examFilter) ?? [])
    : (assessments ?? []);
  const quizzes = visible.filter((a) => a.kind === "topic-quiz");
  const examSections = EXAM_SECTIONS.filter((section) => !examFilter || section.type === examFilter)
    .map((section) => ({
      ...section,
      items: visible.filter((a) => a.kind !== "topic-quiz" && a.examType === section.type),
    }))
    .filter((section) => section.items.length > 0);
  const filterLabel = EXAM_SECTIONS.find((s) => s.type === examFilter)?.label;

  return (
    <div className="hub">
      <h2>Assessments</h2>

      {filterLabel && (
        <p className="filter-note">
          Showing {filterLabel} assessments · <Link to="/assessment">Show all</Link>
        </p>
      )}

      {error && (
        <p role="alert" className="error">
          {error}
        </p>
      )}

      {assessments === null && !error && <p>Loading assessments…</p>}

      {assessments !== null && visible.length === 0 && (
        <p className="hint">
          No assessments available{filterLabel ? ` for ${filterLabel}` : ""} yet.
        </p>
      )}

      {examSections.map((section) => (
        <section key={section.type}>
          <h3>{section.label}</h3>
          <ul className="assessment-list quiz-grid">
            {section.items.map((a) => (
              <li key={a.id} className="assessment-card">
                <div>
                  <h4>{a.title}</h4>
                  <p>{a.description}</p>
                  <p className="meta">
                    {a.questionCount} questions · {a.timeLimitMinutes} minutes
                  </p>
                </div>
                <Button disabled={startingId !== null} onClick={() => void handleStart(a.id)}>
                  {startingId === a.id ? "Starting…" : `Start ${a.title}`}
                </Button>
              </li>
            ))}
          </ul>
        </section>
      ))}

      {quizzes.length > 0 && (
        <section>
          <h3>Topic quizzes</h3>
          <ul className="assessment-list quiz-grid">
            {quizzes.map((a) => (
              <li key={a.id} className="assessment-card">
                <div>
                  <h4>{a.title}</h4>
                  <p className="meta">
                    {a.questionCount} questions · {a.timeLimitMinutes} minutes
                  </p>
                </div>
                <Button
                  variant="secondary"
                  disabled={startingId !== null}
                  onClick={() => void handleStart(a.id)}
                >
                  {startingId === a.id ? "Starting…" : `Start ${a.title}`}
                </Button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {history.length > 0 && (
        <section>
          <h3>Recent results for {user.name}</h3>
          <ul className="history-list">
            {history.map((h) => (
              <li key={h.id}>
                <span>
                  {h.assessmentTitle} —{" "}
                  <strong>
                    {h.score} / {h.maxScore}
                  </strong>{" "}
                  on {new Date(h.startedAt).toLocaleDateString()}
                </span>
                <Link to={`/results/${h.id}`}>View report</Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
