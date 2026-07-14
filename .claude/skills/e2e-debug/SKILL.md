---
name: e2e-debug
description: Run, debug, and author Playwright e2e tests in this repo. Use when e2e tests fail, when asked to debug a browser flow, or when writing new e2e specs.
---

# E2e testing with Playwright

Specs live in `apps/web/e2e/*.spec.ts`, configured by `apps/web/playwright.config.ts`. The web server is `vite preview` (a production build), not the dev server — turbo builds first via `pnpm test:e2e`.

## Running

```bash
pnpm test:e2e                                  # full run from root (builds first)
pnpm --filter @mathprep/web exec playwright test --headed       # watch the browser
pnpm --filter @mathprep/web exec playwright test -g "roadmap"   # single test by title
pnpm --filter @mathprep/web exec playwright test --ui           # interactive UI mode (needs a prior build)
```

If running `playwright test` directly (not via turbo), build first: `pnpm --filter @mathprep/web build`. Playwright reuses an already-running preview server locally.

## Debugging failures

1. Read the failure output — Playwright prints the failed locator and a DOM snapshot.
2. On retry failures, a trace is recorded (`trace: "on-first-retry"`). Open it:
   ```bash
   pnpm --filter @mathprep/web exec playwright show-trace test-results/<test-dir>/trace.zip
   ```
3. HTML report: `pnpm --filter @mathprep/web exec playwright show-report`.
4. A `webServer` timeout usually means port 4173 is occupied by a stale process — kill it.
5. Testing a stale build is the classic trap: if app code changed, rebuild before rerunning Playwright directly.
6. **Stale API server**: `reuseExistingServer` will happily reuse an orphaned api process on port 3001 (aborted runs can leave the tsx grandchild alive). Symptom: reads work but POSTs return 500 (especially if `apps/api/data/dev.db` was deleted under a running server). Fix: `lsof -nP -i :3001` and kill the stale node process.

## Authoring conventions

- Role-based locators only: `page.getByRole("button", { name: "Start assessment" })` — never CSS/XPath selectors.
- Web-first assertions (`await expect(locator).toBeVisible()`), no manual waits or `waitForTimeout`.
- One user journey per test; name tests by user intent ("user can start an assessment"), not implementation.
- New routes or flows require a spec here — CI runs these on every PR in headless Chromium.
