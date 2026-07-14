import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/server.ts"],
  format: ["esm"],
  target: "node24",
  clean: true,
  sourcemap: true,
  // @mathprep/core ships TypeScript source (internal-package pattern), so it
  // must be bundled rather than left as an external import.
  noExternal: ["@mathprep/core"],
});
