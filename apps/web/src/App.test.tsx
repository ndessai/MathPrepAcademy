import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { App } from "./App";
import * as client from "./api/client";

vi.mock("./api/client", () => ({
  fetchMe: vi.fn(),
  fetchAuthConfig: vi.fn(),
  signInDev: vi.fn(),
  signInWithGoogle: vi.fn(),
  signOutRequest: vi.fn(),
  fetchAssessments: vi.fn(),
  fetchStudentAttempts: vi.fn(),
  startAttempt: vi.fn(),
}));

const USER = {
  id: "u1",
  name: "Taylor Reed",
  email: "taylor@example.com",
  picture: null,
};

const ASSESSMENTS = [
  {
    id: "mock-01",
    title: "AMC 8 Mock Exam #1",
    description: "Full-length simulation.",
    kind: "mock",
    examType: "amc8",
    timeLimitMinutes: 40,
    questionCount: 25,
  },
  {
    id: "quiz-geometry",
    title: "Geometry Quiz",
    description: "Six questions.",
    kind: "topic-quiz",
    examType: "amc8",
    timeLimitMinutes: 15,
    questionCount: 6,
  },
  {
    id: "amc10-mock-01",
    title: "AMC 10 Mock Exam #1",
    description: "Full-length AMC 10 simulation.",
    kind: "mock",
    examType: "amc10",
    timeLimitMinutes: 75,
    questionCount: 25,
  },
] as const;

beforeEach(() => {
  vi.mocked(client.fetchMe).mockResolvedValue(USER);
  vi.mocked(client.fetchAuthConfig).mockResolvedValue({
    googleClientId: null,
    devLoginEnabled: true,
  });
  vi.mocked(client.fetchAssessments).mockResolvedValue([...ASSESSMENTS]);
  vi.mocked(client.fetchStudentAttempts).mockResolvedValue([]);
  vi.mocked(client.signOutRequest).mockResolvedValue({ ok: true });
});

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe("authentication", () => {
  it("redirects signed-out visitors to the login page", async () => {
    vi.mocked(client.fetchMe).mockRejectedValue(new Error("Not signed in"));
    renderAt("/");
    expect(await screen.findByRole("heading", { name: "Sign in" })).toBeInTheDocument();
    expect(await screen.findByLabelText("Your name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("signs in through the dev form and shows the user's name and email", async () => {
    vi.mocked(client.fetchMe).mockRejectedValue(new Error("Not signed in"));
    vi.mocked(client.signInDev).mockResolvedValue(USER);
    renderAt("/login");

    fireEvent.change(await screen.findByLabelText("Your name"), {
      target: { value: "Taylor Reed" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "taylor@example.com" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Sign in" }));

    expect(
      await screen.findByRole("heading", { name: "Welcome, Taylor Reed" }),
    ).toBeInTheDocument();
    expect(client.signInDev).toHaveBeenCalledWith("Taylor Reed", "taylor@example.com");
    // Header shows identity from the session.
    expect(screen.getAllByText("taylor@example.com").length).toBeGreaterThanOrEqual(1);
  });

  it("signs the user out and returns to the login page", async () => {
    renderAt("/");
    fireEvent.click(await screen.findByRole("button", { name: "Sign out" }));
    expect(await screen.findByRole("heading", { name: "Sign in" })).toBeInTheDocument();
    expect(client.signOutRequest).toHaveBeenCalled();
  });
});

describe("post-login home", () => {
  it("greets the user and offers AMC 8, AMC 10, and AMC 12", async () => {
    renderAt("/");
    expect(
      await screen.findByRole("heading", { name: "Welcome, Taylor Reed" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Signed in as taylor@example.com")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Take an AMC 8 assessment" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Take an AMC 10 assessment" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Take an AMC 12 assessment" })).toBeInTheDocument();
  });
});

describe("assessment hub", () => {
  it("lists fetched assessments with start buttons enabled", async () => {
    renderAt("/assessment");
    expect(await screen.findByText("AMC 8 Mock Exam #1")).toBeInTheDocument();
    expect(screen.getByText("Geometry Quiz")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Start AMC 8 Mock Exam #1/ })).toBeEnabled();
  });

  it("filters to one competition via the exam query param", async () => {
    renderAt("/assessment?exam=amc8");
    expect(await screen.findByText("AMC 8 Mock Exam #1")).toBeInTheDocument();
    expect(screen.getByText(/Showing AMC 8 assessments/)).toBeInTheDocument();
    expect(screen.queryByText("AMC 10 Mock Exam #1")).not.toBeInTheDocument();
  });
});

describe("roadmap", () => {
  it("renders the roadmap page for a signed-in user", async () => {
    renderAt("/roadmap");
    expect(await screen.findByRole("heading", { name: "Roadmap" })).toBeInTheDocument();
  });
});
