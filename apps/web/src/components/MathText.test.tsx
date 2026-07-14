import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { MathText } from "./MathText";
import { renderMathToHtml } from "./mathHtml";

describe("renderMathToHtml", () => {
  it("passes plain text through with HTML escaped", () => {
    expect(renderMathToHtml("2 < 3 & 4")).toBe("2 &lt; 3 &amp; 4");
  });

  it("renders $...$ segments with KaTeX", () => {
    const html = renderMathToHtml(String.raw`What is $\frac{1}{2}$?`);
    expect(html).toContain("katex-html");
    // The $ delimiters are consumed, not passed through as text.
    expect(html).not.toContain(String.raw`$\frac`);
  });

  it("supports escaped currency dollars inside math", () => {
    const html = renderMathToHtml(String.raw`A jacket costs $\$40$ today.`);
    expect(html).toContain("katex");
    expect(html).toContain("today.");
  });

  it("leaves a lone dollar sign alone", () => {
    expect(renderMathToHtml("just text $")).toBe("just text $");
  });
});

describe("MathText", () => {
  it("renders math into the DOM", () => {
    const { container } = render(<MathText text={String.raw`$x^2$`} />);
    expect(container.querySelector(".katex")).not.toBeNull();
  });
});
