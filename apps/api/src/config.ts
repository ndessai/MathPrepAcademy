import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

export const PORT = Number(process.env.PORT ?? 3001);

/** SQLite file path; ":memory:" gives a fresh, auto-seeded in-memory database. */
export const DATABASE_PATH = process.env.DATABASE_PATH ?? resolve(packageRoot, "data", "dev.db");

/** Google OAuth client id for Sign in with Google; unset leaves it disabled. */
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID ?? null;

/**
 * The dev sign-in (name + email, no Google account) is on whenever Google
 * isn't configured, or when forced with AUTH_DEV_LOGIN=1 (used by e2e).
 */
export const DEV_LOGIN_ENABLED = GOOGLE_CLIENT_ID === null || process.env.AUTH_DEV_LOGIN === "1";
