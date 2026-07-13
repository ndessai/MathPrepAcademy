---
name: new-package
description: Scaffold a new shared package under packages/ (e.g. math-engine, api-client, design tokens) following the internal-package pattern. Use when asked to add shared code consumed by multiple apps.
---

# Add a new shared package

Shared packages use the "internal package" pattern: they export TypeScript source directly and have **no build step**. Use `packages/ui` as the reference.

To create `packages/<name>` (package `@mathprep/<name>`):

1. `package.json`:
   ```json
   {
     "name": "@mathprep/<name>",
     "version": "0.0.0",
     "private": true,
     "type": "module",
     "exports": { ".": "./src/index.ts" },
     "scripts": {
       "lint": "eslint .",
       "typecheck": "tsc --noEmit",
       "test": "vitest run"
     }
   }
   ```
2. `tsconfig.json` extends `@mathprep/typescript-config/react-library.json` (React) or `@mathprep/typescript-config/base.json` (plain TS, e.g. a math engine).
3. `eslint.config.js` re-exports `@mathprep/eslint-config/react` or `.../base`.
4. Install dev dependencies (add `@vitejs/plugin-react`, Testing Library, jsdom, and react only if the package renders components):
   ```bash
   pnpm --filter @mathprep/<name> add -D typescript vitest eslint "@mathprep/eslint-config@workspace:*" "@mathprep/typescript-config@workspace:*"
   ```
   If it ships React components, mirror `packages/ui`'s devDependencies and add `peerDependencies` on `react`/`react-dom`.
5. Export everything through `src/index.ts` using named exports; consumers import `@mathprep/<name>` only (no deep imports).
6. Consume it from an app with `pnpm --filter @mathprep/web add "@mathprep/<name>@workspace:*"`.
7. Colocate `*.test.ts(x)` files next to sources; every exported unit gets a test.
8. Verify with the `verify-changes` skill.
