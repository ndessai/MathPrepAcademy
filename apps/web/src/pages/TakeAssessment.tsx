import type { AssessmentDetail, ResponseMap } from "@mathprep/core";
import { CHOICE_LABELS } from "@mathprep/core";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import { Button } from "@mathprep/ui";

import { fetchAssessment, submitAttempt } from "../api/client";
import { CountdownTimer } from "../components/CountdownTimer";
import { MathText } from "../components/MathText";

export function TakeAssessment() {
  const { assessmentId, attemptId } = useParams<{ assessmentId: string; attemptId: string }>();
  const [detail, setDetail] = useState<AssessmentDetail | null>(null);
  const [deadline, setDeadline] = useState<number | null>(null);
  const [responses, setResponses] = useState<ResponseMap>({});
  const [index, setIndex] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!assessmentId) {
      return;
    }
    fetchAssessment(assessmentId)
      .then((d) => {
        setDetail(d);
        setDeadline(Date.now() + d.timeLimitMinutes * 60_000);
      })
      .catch((e: unknown) => setError(e instanceof Error ? e.message : "Failed to load"));
  }, [assessmentId]);

  const handleSubmit = useCallback(
    async (auto: boolean) => {
      if (!detail || !attemptId || submitting) {
        return;
      }
      const unanswered = detail.questions.filter((q) => responses[q.id] == null).length;
      if (
        !auto &&
        unanswered > 0 &&
        !window.confirm(
          `You have ${unanswered} unanswered question${unanswered === 1 ? "" : "s"}. Submit anyway?`,
        )
      ) {
        return;
      }
      setSubmitting(true);
      setError(null);
      try {
        const fullResponses: ResponseMap = Object.fromEntries(
          detail.questions.map((q) => [q.id, responses[q.id] ?? null]),
        );
        await submitAttempt(attemptId, fullResponses);
        navigate(`/results/${attemptId}`);
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "Submission failed");
        setSubmitting(false);
      }
    },
    [detail, attemptId, submitting, responses, navigate],
  );

  const handleExpire = useCallback(() => {
    void handleSubmit(true);
  }, [handleSubmit]);

  if (error && !detail) {
    return (
      <p role="alert" className="error">
        {error}
      </p>
    );
  }
  if (!detail) {
    return <p>Loading questions…</p>;
  }

  const question = detail.questions[index];
  if (!question) {
    return null;
  }
  const answered = detail.questions.filter((q) => responses[q.id] != null).length;

  function select(choiceIndex: number) {
    if (!question) {
      return;
    }
    setResponses((prev) => ({
      ...prev,
      // Clicking the selected choice again clears it (back to blank).
      [question.id]: prev[question.id] === choiceIndex ? null : choiceIndex,
    }));
  }

  return (
    <div className="take">
      <div className="take-header">
        <h2>{detail.title}</h2>
        {deadline !== null && <CountdownTimer deadline={deadline} onExpire={handleExpire} />}
      </div>

      <p className="progress">
        Question {index + 1} of {detail.questions.length} · {answered} answered
      </p>

      <div className="question-card">
        <p className="question-stem">
          <MathText text={question.stem} />
        </p>
        <div className="choices" role="group" aria-label="Answer choices">
          {question.choices.map((choice, i) => (
            <button
              key={i}
              type="button"
              className="choice"
              aria-pressed={responses[question.id] === i}
              onClick={() => select(i)}
            >
              <span className="choice-letter">{CHOICE_LABELS[i]}</span>
              <MathText text={choice} />
            </button>
          ))}
        </div>
      </div>

      <div className="take-controls">
        <Button variant="secondary" disabled={index === 0} onClick={() => setIndex(index - 1)}>
          Previous
        </Button>
        <Button
          variant="secondary"
          disabled={index === detail.questions.length - 1}
          onClick={() => setIndex(index + 1)}
        >
          Next
        </Button>
        <Button disabled={submitting} onClick={() => void handleSubmit(false)}>
          {submitting ? "Submitting…" : "Submit answers"}
        </Button>
      </div>

      {error && (
        <p role="alert" className="error">
          {error}
        </p>
      )}

      <nav aria-label="Question navigation" className="palette">
        {detail.questions.map((q, i) => (
          <button
            key={q.id}
            type="button"
            className={[
              "palette-item",
              i === index ? "current" : "",
              responses[q.id] != null ? "answered" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            aria-label={`Go to question ${i + 1}${responses[q.id] != null ? " (answered)" : ""}`}
            onClick={() => setIndex(i)}
          >
            {i + 1}
          </button>
        ))}
      </nav>
    </div>
  );
}
