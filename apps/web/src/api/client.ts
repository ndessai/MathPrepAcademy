import type {
  AssessmentDetail,
  AssessmentSummary,
  Attempt,
  AttemptSummary,
  ResponseMap,
  ScoreReport,
} from "@mathprep/core";

const BASE = "/api";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, init);
  if (!res.ok) {
    const body = (await res.json().catch(() => null)) as { error?: string } | null;
    throw new Error(body?.error ?? `Request failed with status ${res.status}`);
  }
  return (await res.json()) as T;
}

function post<T>(path: string, body: unknown): Promise<T> {
  return request<T>(path, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "content-type": "application/json" },
  });
}

export function fetchAssessments(): Promise<AssessmentSummary[]> {
  return request("/assessments");
}

export function fetchAssessment(id: string): Promise<AssessmentDetail> {
  return request(`/assessments/${encodeURIComponent(id)}`);
}

export function startAttempt(assessmentId: string, studentName: string): Promise<Attempt> {
  return post("/attempts", { assessmentId, studentName });
}

export function submitAttempt(attemptId: string, responses: ResponseMap): Promise<ScoreReport> {
  return post(`/attempts/${encodeURIComponent(attemptId)}/submit`, { responses });
}

export function fetchReport(attemptId: string): Promise<ScoreReport> {
  return request(`/attempts/${encodeURIComponent(attemptId)}`);
}

export function fetchStudentAttempts(studentName: string): Promise<AttemptSummary[]> {
  return request(`/students/${encodeURIComponent(studentName)}/attempts`);
}
