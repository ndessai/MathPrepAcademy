---
name: author-questions
description: Add or edit AMC 8-style questions and assessments in the seed bank. Use when asked to add questions, create a new quiz or mock exam, or fix question content.
---

# Authoring questions and assessments

The question bank lives in `apps/api/src/seed/questions.ts`; assessment definitions in
`apps/api/src/seed/assessments.ts`. Seed data is validated against the zod schemas in
`@mathprep/core` at server boot and in `apps/api/src/seed/seed.test.ts`.

**Read `style-guide.md` in this skill directory first** — it is the house style
distilled from the real 2022-2025 AMC 8 exams (stem voice, story-per-band,
reasoning-step targets, distractor menu, notation) plus the archetype catalog already
used by the bank. New questions must match it and must not reuse an archetype already
in the catalog for the same difficulty.

## Non-negotiable rules

1. **Original content only.** Real AMC/MATHCOUNTS problems are copyrighted (MAA). Write
   new problems in AMC 8 style; never copy past problems into the bank.
2. **Verify the math.** Solve the problem yourself before writing it down. Confirm the
   correct choice, and confirm every distractor is actually wrong. A wrong answer key is
   worse than no question.
3. **Five distinct choices**, ascending numeric/value order (AMC convention), with
   `answerIndex` pointing at the correct one (0-based).
4. **Every question gets a worked explanation** — 1–3 sentences a strong 4th grader can
   follow, ideally naming the technique (telescoping, complementary counting, …).

## Content format

- Fields: `id`, `topic` (one of the 8 ids in `packages/core/src/taxonomy.ts`),
  `difficulty` (`easy` ≈ AMC 8 #1–10, `medium` ≈ #11–20, `hard` ≈ #21–25), `stem`,
  `choices`, `answerIndex`, `explanation`, `source`.
- Inline LaTeX goes in `$...$`; author with `String.raw` so backslashes stay literal.
  Currency must be `\$` **inside** math (`$\$40$`) — a bare `$` in plain text breaks
  the client-side math parser.
- Id convention: `<topic-prefix>-NN` (`arith`, `nt`, `alg`, `geo`, `count`, `prob`,
  `data`, `logic`).

## Assessments

- Mock exams: 25 questions ordered 10 easy → 10 medium → 5 hard (the seed test enforces
  this for `mock-01`; follow the same shape for new mocks), 40-minute limit.
- Topic quizzes: single-topic, 15-minute limit.
- Reference questions by id; the seed test fails on unknown or duplicate ids.

## Verify

```bash
pnpm --filter @mathprep/api test      # schema + integrity + API tests
pnpm test:e2e                         # full portal flow against seeded data
```

Restart the api dev server (or delete `apps/api/data/dev.db`) after seed changes —
seeding only runs when the questions table is empty.
