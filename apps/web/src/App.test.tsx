import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it, vi } from "vitest";

import { App } from "./App";

vi.mock("./api/client", () => ({
  fetchAssessments: vi.fn().mockResolvedValue([
    {
      id: "mock-01",
      title: "AMC 8 Mock Exam #1",
      description: "Full-length simulation.",
      kind: "mock",
      timeLimitMinutes: 40,
      questionCount: 25,
    },
    {
      id: "quiz-geometry",
      title: "Geometry Quiz",
      description: "Six questions.",
      kind: "topic-quiz",
      timeLimitMinutes: 15,
      questionCount: 6,
    },
  ]),
  fetchStudentAttempts: vi.fn().mockResolvedValue([]),
  startAttempt: vi.fn(),
}));

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe("App", () => {
  it("renders the home page by default", () => {
    renderAt("/");
    expect(screen.getByRole("heading", { name: "MathPrep Academy" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Welcome" })).toBeInTheDocument();
  });

  it("renders the assessment hub with fetched assessments", async () => {
    renderAt("/assessment");
    expect(screen.getByRole("heading", { name: "Assessments" })).toBeInTheDocument();
    expect(await screen.findByText("AMC 8 Mock Exam #1")).toBeInTheDocument();
    expect(screen.getByText("Geometry Quiz")).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Student name" })).toBeInTheDocument();
  });

  it("enables start buttons only after a student name is entered", async () => {
    localStorage.clear();
    renderAt("/assessment");
    const start = await screen.findByRole("button", { name: /Start AMC 8 Mock Exam #1/ });
    expect(start).toBeDisabled();

    fireEvent.change(screen.getByRole("textbox", { name: "Student name" }), {
      target: { value: "Alex" },
    });
    expect(start).toBeEnabled();
  });

  it("renders the roadmap page", () => {
    renderAt("/roadmap");
    expect(screen.getByRole("heading", { name: "Roadmap" })).toBeInTheDocument();
  });
});
