---
name: verify-changes
description: Verify a code change in this monorepo end-to-end. Use before declaring any task done, before committing, and whenever asked to "verify", "check", or "make sure it works".
---

# Verify changes

Run the verification ladder from the repo root. Stop and fix at the first failing rung.

## 1. Static checks + unit tests + build

```bash
pnpm check
```

This runs `lint`, `typecheck`, `test`, and `build` across all workspaces via Turborepo. Unchanged workspaces are cache hits — that is expected and fine.

## 2. E2e (when behavior changed)

Required when the change touches routes, navigation, forms, or any user-visible flow in an app:

```bash
pnpm test:e2e
```

Playwright builds the app first (turbo dependency), serves it with `vite preview` on port 4173, and runs `apps/web/e2e/*.spec.ts` in headless Chromium.

## 3. Observe the real app (for UX-affecting changes)

```bash
pnpm --filter @mathprep/web dev
```

Then drive the affected flow in the browser (or via Playwright headed mode — see the `e2e-debug` skill). A passing test suite is not a substitute for seeing a new UI state render.

## Failure triage

- Lint failures: try `pnpm --filter <pkg> exec eslint . --fix`, then re-run.
- Type errors referencing another workspace: the importing workspace typechecks package source directly (packages export `./src/index.ts`) — fix the source package, not the consumer.
- E2e timeout on `webServer`: port 4173 may be occupied; kill the stale `vite preview` process.
- Never mark a task done with a failing or skipped rung; report the failure output instead.
