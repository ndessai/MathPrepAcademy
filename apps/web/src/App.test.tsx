import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";

import { App } from "./App";

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

  it("renders the assessment page", () => {
    renderAt("/assessment");
    expect(screen.getByRole("heading", { name: "Assessment" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Start assessment" })).toBeInTheDocument();
  });

  it("renders the roadmap page", () => {
    renderAt("/roadmap");
    expect(screen.getByRole("heading", { name: "Roadmap" })).toBeInTheDocument();
  });
});
