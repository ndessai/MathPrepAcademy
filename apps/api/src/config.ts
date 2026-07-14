import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

export const PORT = Number(process.env.PORT ?? 3001);

/** SQLite file path; ":memory:" gives a fresh, auto-seeded in-memory database. */
export const DATABASE_PATH = process.env.DATABASE_PATH ?? resolve(packageRoot, "data", "dev.db");
