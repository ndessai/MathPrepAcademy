---
name: new-app
description: Scaffold a new React app workspace under apps/ (e.g. a tutor dashboard or admin console) following repo conventions. Use when asked to add a new webapp to the monorepo.
---

# Add a new app workspace

Use `apps/web` as the reference implementation. To create `apps/<name>` (package `@mathprep/<name>`):

1. Copy the shape of `apps/web`: `package.json`, `index.html`, `vite.config.ts`, `vitest.config.ts`, `vitest.setup.ts`, `playwright.config.ts`, `tsconfig.json`, `eslint.config.js`, `src/`, `e2e/`.
2. In `package.json`: set `"name": "@mathprep/<name>"`, keep the same script names (`dev`, `build`, `preview`, `lint`, `typecheck`, `test`, `test:e2e`) — Turborepo tasks depend on these exact names.
3. Pick a unique preview port (web uses 4173; use 4174, 4175, … next) and update it in `playwright.config.ts`.
4. Install dependencies so the lockfile picks real versions (never hand-write versions):
   ```bash
   pnpm --filter @mathprep/<name> add react react-dom react-router "@mathprep/ui@workspace:*"
   pnpm --filter @mathprep/<name> add -D vite @vitejs/plugin-react typescript vitest @testing-library/react @testing-library/jest-dom jsdom @playwright/test @types/node @types/react @types/react-dom eslint "@mathprep/eslint-config@workspace:*" "@mathprep/typescript-config@workspace:*"
   ```
5. `tsconfig.json` extends `@mathprep/typescript-config/react-app.json`; `eslint.config.js` re-exports `@mathprep/eslint-config/react`.
6. Write at least one unit test (`src/App.test.tsx`) and one e2e smoke spec (`e2e/smoke.spec.ts`).
7. No root or CI changes are needed — `pnpm-workspace.yaml` globs `apps/*` and CI runs tasks via turbo.
8. Verify with the `verify-changes` skill (`pnpm check` then `pnpm test:e2e`).
