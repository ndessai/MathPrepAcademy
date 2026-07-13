import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Button } from "./Button";

describe("Button", () => {
  it("renders its children", () => {
    render(<Button>Start assessment</Button>);
    expect(screen.getByRole("button", { name: "Start assessment" })).toBeInTheDocument();
  });

  it("applies the variant as a data attribute", () => {
    render(<Button variant="secondary">Skip</Button>);
    expect(screen.getByRole("button", { name: "Skip" })).toHaveAttribute(
      "data-variant",
      "secondary",
    );
  });
});
