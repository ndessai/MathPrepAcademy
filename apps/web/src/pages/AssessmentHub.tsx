import type { AssessmentSummary, AttemptSummary } from "@mathprep/core";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

import { Button } from "@mathprep/ui";

import { fetchAssessments, fetchStudentAttempts, startAttempt } from "../api/client";

const NAME_STORAGE_KEY = "mathprep.studentName";

export function AssessmentHub() {
  const [assessments, setAssessments] = useState<AssessmentSummary[] | null>(null);
  const [studentName, setStudentName] = useState(
    () => localStorage.getItem(NAME_STORAGE_KEY) ?? "",
  );
  const [history, setHistory] = useState<AttemptSummary[]>([]);
  const [startingId, setStartingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAssessments()
      .then(setAssessments)
      .catch((e: unknown) => setError(e instanceof Error ? e.message : "Failed to load"));
  }, []);

  const trimmedName = studentName.trim();

  useEffect(() => {
    if (!trimmedName) {
      return;
    }
    let cancelled = false;
    fetchStudentAttempts(trimmedName)
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
  }, [trimmedName]);

  function updateName(name: string) {
    setStudentName(name);
    localStorage.setItem(NAME_STORAGE_KEY, name);
    if (!name.trim()) {
      setHistory([]);
    }
  }

  async function handleStart(assessmentId: string) {
    setStartingId(assessmentId);
    setError(null);
    try {
      const attempt = await startAttempt(assessmentId, trimmedName);
      navigate(`/assessment/${assessmentId}/attempt/${attempt.id}`);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Could not start the assessment");
      setStartingId(null);
    }
  }

  const quizzes = assessments?.filter((a) => a.kind === "topic-quiz") ?? [];
  const examSections = (
    [
      { type: "amc8", label: "AMC 8" },
      { type: "amc10", label: "AMC 10" },
      { type: "amc12", label: "AMC 12" },
    ] as const
  )
    .map((section) => ({
      ...section,
      items:
        assessments?.filter((a) => a.kind !== "topic-quiz" && a.examType === section.type) ?? [],
    }))
    .filter((section) => section.items.length > 0);

  return (
    <div className="hub">
      <h2>Assessments</h2>

      <section className="panel">
        <h3>Who is practicing today?</h3>
        <div className="student-picker">
          <input
            aria-label="Student name"
            placeholder="Student name"
            value={studentName}
            onChange={(e) => updateName(e.target.value)}
          />
        </div>
        {!trimmedName && <p className="hint">Enter a name to enable the start buttons.</p>}
      </section>

      {error && (
        <p role="alert" className="error">
          {error}
        </p>
      )}

      {assessments === null && !error && <p>Loading assessments…</p>}

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
                <Button
                  disabled={!trimmedName || startingId !== null}
                  onClick={() => void handleStart(a.id)}
                >
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
                  disabled={!trimmedName || startingId !== null}
                  onClick={() => void handleStart(a.id)}
                >
                  {startingId === a.id ? "Starting…" : `Start ${a.title}`}
                </Button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {trimmedName && history.length > 0 && (
        <section>
          <h3>Recent results for {trimmedName}</h3>
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
