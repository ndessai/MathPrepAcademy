# AMC 8 Question Style Guide

_Distilled from the real 2022-2025 AMC 8 exams (studied via the AoPS wiki archive)._
_Used to author the seed bank in `apps/api/src/seed/questions.ts`. Real AMC problems are MAA-copyrighted — this guide captures the **style**; all bank content must be original._

## AMC 8 House Style — Hard Rules for Question Authors

**Scope and originality.** Every problem must be ORIGINAL: take an archetype's structure, then invent your own scenario, numbers, and framing. Never reuse a real AMC problem's scenario-plus-numbers combination, and never near-copy (real problems are MAA-copyrighted). Every problem must be fully solvable from TEXT ALONE — no diagrams. Geometry must be describable (coordinates, dimensions, named points); tables become bulleted or inline text lines. If a figure would normally exist, restate every fact it would carry in words.

**Stem voice.** Sentence 1 names one actor with a present-tense concrete activity: "Amara is cutting ribbon into equal pieces." Use diverse, plausible first names, never surnames (adults get "Mr./Ms./Prof. + name"), never real people or brands, at most one name per problem (two–three only when a relationship or turn order matters). Animals and invented institutions may be whimsical ("Milo the tortoise", "the Riverbend Math Club") but their rules must be precise. Constraints come as plain declarative clauses, one fact each; use a bulleted list when there are 3+ parallel facts, and Roman numerals (I)(II)(III) for stacked properties in hard problems. Define any non-curricular term in-stem, italicized on first use, with a worked micro-example in the same breath: "the _triple factorial_ $n!!!$ means …. For example, $9!!! = 3 \cdot 6 \cdot 9$." Defuse technicalities with parentheticals: "(Note that the median of $20$ scores is the average of the $10$th and $11$th.)" The question is ALWAYS the final sentence, a single interrogative from the stock menu: "What is the value of…?", "How many…?", "In how many ways…?", "What is the probability that…?", "What is the least/greatest possible…?", "Which of the following could/cannot be…?". Estimation problems must say "Approximately" or "Which of the following is closest to", and any rounding is an explicit imperative: "Round your answer to the nearest integer." Units live in the question, set off by commas ("What is the area, in square inches, of…?"), never in the choices.

**Story per band.** Easy (positions #1–10 equivalent): story is decorative; stripping it leaves the math intact; 1–3 sentences, 20–55 words. Medium (#11–20): the story ENCODES structure (the fold is the pairing, the turn order is the ratio); 2–5 sentences, 40–90 words; this is where defined notation and "Let $m$ and $M$…" first appear. Hard (#21–25): either terse and abstract (dense condition lists, zero fat) or a longer load-bearing scenario where every sentence carries a constraint; rule-heavy stems state rules with legalistic precision; a light editorial wink ("Surprisingly, …") is permitted only here.

**Reasoning-step targets.** Easy: 1–2 genuine steps, exactly one thing to see, all data stated directly, no representation-building. Medium: 2–4 steps with exactly ONE non-obvious insight (an invariant, a fencepost, a factorization, a complement) followed by short execution; brute force should still succeed within the time limit. Hard: 4+ steps requiring either two coordinated insights, multi-constraint casework where every case is confirmed or excluded, or a modeling/representation step; must be genuinely #21–25 level (mid-range AMC 10). Difficulty must come from insight, never from ugly arithmetic: EVERYTHING is calculator-free — engineer numbers so divisions are exact, factorizations are clean, and hard problems use awkward-looking numbers only to signal "model, don't grind."

**Choices.** Exactly 5, labeled (A)–(E), strictly ascending when numeric, formatted `$\textbf{(A) } x \qquad \textbf{(B) } y \qquad …$`. Easy problems may spread choices widely when the choice set is a unit-error detector; medium/hard choices cluster tightly (consecutive integers, or steps matching the problem's natural parity) so estimation cannot substitute for solving. Hard counting problems use tiny consecutive choices (0–4 or similar). Fractions in lowest terms with thematically related denominators; irrational answers only where structurally forced, with the whole choice set living in the same family. Rotate the correct answer's position across the bank — it must not favor (C).

**Distractor engineering (mandatory).** Every wrong choice must be the terminus of ONE nameable student error — never random. Build the set from this menu: (1) the fencepost/off-by-one in each direction; (2) the right-method-wrong-quantity answer (the solved variable, the other container, the "before" state, the median when N was asked); (3) the tempting-but-invalid shortcut (multiplying probabilities that aren't independent, assuming disjointness, linear scaling of areas); (4) the stop-one-step-early partial result; (5) the constraint-subset fixed point (satisfies two of three stated conditions); (6) for estimation, clean factor-of-2 or power-of-10 slips; (7) one near-miss within a hair of correct (count off by exactly one) for hard problems. When the crux is an off-by-one, ladder the choices so every plausible count is listed.

**Notation.** Every number participating in the math sits in `$...$`, even bare integers in prose ("$15$ cards"). Currency is `\$` inside math — never a bare `$` in text. Thousands separators via `{,}`. Sequences use ellipsis lists "$2, 4, \ldots, 50$"; formal notation (subscripts, $\triangle ABC$, chained inequalities, "Let") is reserved for medium-hard. Ratios formatted "$5 : 12$".

**Explanations.** Server-side only, 3–8 sentences: state the key insight first, then the computation in order, ending by confirming the answer letter. Then briefly name the error behind each distractor ("Choice (B) comes from using $10$ steps instead of $9$."). Match the stem's notation exactly; keep the tone neutral and warm, never jokey.

## Archetype catalog used by the current bank

| Slot             | Difficulty | Archetype                                                                           |
| ---------------- | ---------- | ----------------------------------------------------------------------------------- |
| arithmetic-01    | easy       | successive fractions of what was left                                               |
| arithmetic-02    | easy       | capture-recapture proportion                                                        |
| arithmetic-03    | medium     | multi-step unit-conversion rate chain                                               |
| arithmetic-04    | medium     | repeated halving of a gap toward an ambient value                                   |
| arithmetic-05    | medium     | order-of-magnitude estimation over a long span                                      |
| arithmetic-06    | hard       | Simpson's-paradox rate reconciliation                                               |
| number-theory-01 | easy       | erased number forcing divisibility of the remaining sum                             |
| number-theory-02 | easy       | omitted addend recovered from a near-perfect-square sum                             |
| number-theory-03 | medium     | units digit of a long sum under newly defined notation                              |
| number-theory-04 | medium     | minimum moves of +a/-b to reach a target                                            |
| number-theory-05 | medium     | cryptarithm collapsed by place-value factorization                                  |
| number-theory-06 | hard       | intersection of a digit-ending condition, an algebraic factorization, and primality |
| algebra-01       | easy       | ages with a time shift and a sum condition                                          |
| algebra-02       | easy       | evaluate nested custom binary operations                                            |
| algebra-03       | medium     | recover a target from overlapping pair sums or averages                             |
| algebra-04       | medium     | total split under chained CUMULATIVE increments                                     |
| algebra-05       | medium     | before/after ratio with two-way transfers                                           |
| algebra-06       | hard       | arithmetic progression pinned by interval constraints                               |
| geometry-01      | easy       | total surface area to volume                                                        |
| geometry-02      | easy       | area of the union of two overlapping rectangles                                     |
| geometry-03      | medium     | midpoint (Varignon) quadrilateral from coordinates                                  |
| geometry-04      | medium     | similar-figure area ratio from a parallel cut                                       |
| geometry-05      | medium     | equal areas force a length via collapsing quadratic                                 |
| geometry-06      | hard       | count integer-sided constrained polygons of fixed perimeter                         |
| counting-01      | easy       | distinct end-values of a short branching process                                    |
| counting-02      | easy       | multiplication principle with one forbidden pairing                                 |
| counting-03      | medium     | arrangements with identical letters exactly filling the gaps                        |
| counting-04      | medium     | balanced up/down move sequences that never go below start                           |
| counting-05      | medium     | extremal packing: minimum lines covering forced elements                            |
| counting-06      | hard       | count equal-sum partitions of 1..9 into three unordered triples                     |
| probability-01   | easy       | random integer from a range has a divisibility property                             |
| probability-02   | easy       | two spinners form a two-digit number                                                |
| probability-03   | medium     | at least one occurrence via the complement                                          |
| probability-04   | medium     | random digit arrangement meets a divisibility condition                             |
| probability-05   | medium     | random pair from a listed set satisfies a parity/sum condition                      |
| probability-06   | hard       | return-to-start probability of a symmetric random process                           |
| data-analysis-01 | easy       | cumulative at-least table to a range count                                          |
| data-analysis-02 | easy       | linear extrapolation from a constant real-world rate                                |
| data-analysis-03 | medium     | insert a value to force a mean-median relation                                      |
| data-analysis-04 | medium     | minimum edits to force a target median                                              |
| data-analysis-05 | medium     | best unit rate from a price-size table                                              |
| data-analysis-06 | hard       | list simultaneously constrained by mean, unique mode, and median                    |
| logic-01         | easy       | deduce a missing row of a win-loss table                                            |
| logic-02         | easy       | ordering deduction from pairwise clues                                              |
| logic-03         | medium     | cuts-versus-pieces fencepost invariant                                              |
| logic-04         | medium     | minimum overlap of two majority subsets                                             |
| logic-05         | medium     | board-operation invariant determines feasible final values                          |
| logic-06         | hard       | pursuit simulation with a conditional boarding/waiting rule                         |

## App-specific overrides

- `choices` are 5 bare values (no `(A)`-`(E)` labels, no `\textbf`/`\qquad`) — the app renders letters.
- Inline `$...$` KaTeX only; no display math, no figures. Multi-line fact lists in stems are allowed (rendered with `white-space: pre-line`).
- Every question must be re-solved independently before merging (the bank was verified with 3 independent solvers per question).
