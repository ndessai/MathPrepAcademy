# MathPrep Academy

Monorepo of React webapps for math tutoring, adaptive assessment, and personalized learning-roadmap building.

## Stack

- **Monorepo:** [pnpm workspaces](https://pnpm.io/workspaces) + [Turborepo](https://turborepo.com)
- **Apps:** React 19, [Vite](https://vite.dev), React Router, TypeScript (strict)
- **Testing:** [Vitest](https://vitest.dev) + Testing Library (unit), [Playwright](https://playwright.dev) (e2e)
- **Quality:** ESLint (flat config) + Prettier, Husky + lint-staged pre-commit
- **CI:** GitHub Actions (lint, typecheck, unit tests, build, e2e on every PR), Dependabot
- **Versioning:** [Changesets](https://github.com/changesets/changesets)

## Layout

```
apps/
  web/                  # student-facing app: AMC 8 assessment portal (@mathprep/web)
  api/                  # assessment API: Hono + SQLite, seeded question bank (@mathprep/api)
packages/
  core/                 # shared domain: types, schemas, taxonomy, scoring (@mathprep/core)
  ui/                   # shared React components (@mathprep/ui)
  eslint-config/        # shared ESLint presets (@mathprep/eslint-config)
  typescript-config/    # shared tsconfig presets (@mathprep/typescript-config)
docs/
  amc8-analysis.md      # AMC 8 exam research: format, dates, cutoffs, curriculum
```

## Getting started

Requires Node 24+ (see `.node-version`) and pnpm 11+ (`corepack enable`).

```bash
pnpm install
pnpm --filter @mathprep/web exec playwright install chromium   # once, for e2e
pnpm dev                                                       # api on :3001 + web on :5173
```

The web app proxies `/api` to the API server. The SQLite database
(`apps/api/data/dev.db`) is created and seeded with the question bank on first boot.

## Everyday commands

| Command                        | What it does                                                         |
| ------------------------------ | -------------------------------------------------------------------- |
| `pnpm check`                   | lint + typecheck + unit tests + build, all workspaces (turbo-cached) |
| `pnpm test:e2e`                | Playwright e2e against a production preview build                    |
| `pnpm format`                  | Prettier-write the repo                                              |
| `pnpm changeset`               | record a user-visible change                                         |
| `pnpm --filter <pkg> <script>` | run one workspace's script                                           |

## Agentic development

This repo is set up for AI-agent workflows:

- `CLAUDE.md` (symlinked as `AGENTS.md`) — repo map, commands, conventions, and definition of done.
- `.claude/skills/` — project skills for the repeatable workflows: `verify-changes`, `new-app`, `new-package`, `e2e-debug`.
- `.claude/settings.json` — pre-approved tool permissions for common pnpm/turbo/git commands.

## Contributing

1. Branch from `main`.
2. Make changes; keep unit tests colocated and add e2e specs for new user flows.
3. `pnpm check && pnpm test:e2e` must pass (CI enforces both).
4. Add a changeset for user-visible changes.
5. Open a PR — the template includes the checklist.
