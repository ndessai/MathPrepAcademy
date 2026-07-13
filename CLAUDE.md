# MathPrep Academy

Monorepo of React webapps for math tutoring, adaptive assessment, and personalized learning-roadmap building.

## Layout

- `apps/web` — student-facing app (`@mathprep/web`): Vite + React 19 + React Router. Playwright e2e specs live in `apps/web/e2e/`.
- `packages/ui` — shared React components (`@mathprep/ui`).
- `packages/eslint-config`, `packages/typescript-config` — shared tooling presets consumed by every workspace.

Toolchain: pnpm workspaces + Turborepo, TypeScript (strict), Vitest + Testing Library (unit), Playwright (e2e), ESLint + Prettier, GitHub Actions CI, Changesets, Husky pre-commit (prettier via lint-staged).

## Commands (run from repo root)

| Command                           | What it does                                                                  |
| --------------------------------- | ----------------------------------------------------------------------------- |
| `pnpm check`                      | lint + typecheck + unit tests + build for all workspaces (turbo-cached)       |
| `pnpm test:e2e`                   | Playwright e2e (turbo builds the app first, tests run against `vite preview`) |
| `pnpm --filter @mathprep/web dev` | start the web app dev server                                                  |
| `pnpm --filter <pkg> <script>`    | run one workspace's script (`lint`, `typecheck`, `test`, `build`)             |
| `pnpm format`                     | Prettier-write the whole repo                                                 |
| `pnpm changeset`                  | record a user-visible change for versioning                                   |

Add dependencies with `pnpm --filter <pkg> add [-D] <dep>` — never hand-edit `pnpm-lock.yaml`.

## Conventions

- Internal packages export TypeScript source directly (`"exports": { ".": "./src/index.ts" }`) — no build step for packages; only apps build. Apps compile package source via Vite.
- Workspace dependencies use the `workspace:*` protocol.
- Named exports only; no default exports.
- `import type` for type-only imports (`verbatimModuleSyntax` is on).
- Reusable presentational components belong in `packages/ui` with a colocated `*.test.tsx`; app-specific components stay in the app.
- E2e specs use role-based locators (`getByRole`), not CSS selectors.
- Each workspace has its own `eslint.config.js` and `tsconfig.json` that extend the shared presets — change rules in `packages/eslint-config` / `packages/typescript-config`, not per-workspace.

## Definition of done

1. `pnpm check` passes.
2. `pnpm test:e2e` passes when routes, navigation, or user flows changed.
3. New components have unit tests; new user flows have an e2e spec.
4. User-visible changes get a changeset.

Project skills in `.claude/skills/` cover the repeatable workflows: `verify-changes`, `new-app`, `new-package`, `e2e-debug`.
