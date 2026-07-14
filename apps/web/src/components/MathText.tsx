import { useMemo } from "react";

import { renderMathToHtml } from "./mathHtml";

export interface MathTextProps {
  text: string;
  className?: string;
}

/**
 * Renders question text containing inline LaTeX ($...$) via KaTeX.
 * The HTML comes from KaTeX over content we author ourselves.
 */
export function MathText({ text, className }: MathTextProps) {
  const html = useMemo(() => renderMathToHtml(text), [text]);
  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
