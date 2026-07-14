import katex from "katex";

/**
 * Matches one inline math segment: $...$ where the content may include
 * escaped dollars (\$, used for currency) but no bare $.
 */
const MATH_SEGMENT = /(\$(?:\\\$|[^$])+\$)/g;

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function renderMathToHtml(text: string): string {
  return text
    .split(MATH_SEGMENT)
    .map((part) => {
      if (part.length > 2 && part.startsWith("$") && part.endsWith("$")) {
        return katex.renderToString(part.slice(1, -1), { throwOnError: false });
      }
      return escapeHtml(part);
    })
    .join("");
}
