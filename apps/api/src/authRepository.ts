import { randomBytes, randomUUID } from "node:crypto";
import type { DatabaseSync } from "node:sqlite";

import type { AuthUser } from "@mathprep/core";

const SESSION_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

interface UserRow {
  id: string;
  google_sub: string | null;
  email: string;
  name: string;
  picture: string | null;
}

function toAuthUser(row: UserRow): AuthUser {
  return { id: row.id, name: row.name, email: row.email, picture: row.picture };
}

export interface UpsertUserInput {
  email: string;
  name: string;
  googleSub?: string;
  picture?: string | null;
}

/**
 * Find-or-create a user. Matches by Google subject first, then by email, so a
 * student who tried the dev sign-in keeps the same identity (and attempt
 * history) once they sign in with the real Google account. Name and picture
 * refresh on every sign-in.
 */
export function upsertUser(db: DatabaseSync, input: UpsertUserInput): AuthUser {
  const bySub = input.googleSub
    ? (db.prepare("SELECT * FROM users WHERE google_sub = ?").get(input.googleSub) as
        UserRow | undefined)
    : undefined;
  const existing =
    bySub ??
    (db.prepare("SELECT * FROM users WHERE email = ?").get(input.email) as UserRow | undefined);

  if (existing) {
    db.prepare(
      "UPDATE users SET name = ?, email = ?, picture = ?, google_sub = COALESCE(?, google_sub) WHERE id = ?",
    ).run(input.name, input.email, input.picture ?? null, input.googleSub ?? null, existing.id);
    return {
      id: existing.id,
      name: input.name,
      email: input.email,
      picture: input.picture ?? null,
    };
  }

  const user: AuthUser = {
    id: randomUUID(),
    name: input.name,
    email: input.email,
    picture: input.picture ?? null,
  };
  db.prepare(
    "INSERT INTO users (id, google_sub, email, name, picture, created_at) VALUES (?, ?, ?, ?, ?, ?)",
  ).run(
    user.id,
    input.googleSub ?? null,
    user.email,
    user.name,
    user.picture,
    new Date().toISOString(),
  );
  return user;
}

export interface Session {
  token: string;
  expiresAt: string;
}

export function createSession(db: DatabaseSync, userId: string): Session {
  const token = randomBytes(32).toString("hex");
  const now = Date.now();
  const expiresAt = new Date(now + SESSION_TTL_MS).toISOString();
  db.prepare(
    "INSERT INTO sessions (token, user_id, created_at, expires_at) VALUES (?, ?, ?, ?)",
  ).run(token, userId, new Date(now).toISOString(), expiresAt);
  return { token, expiresAt };
}

export function getSessionUser(db: DatabaseSync, token: string): AuthUser | null {
  const row = db
    .prepare(
      `SELECT users.*, sessions.expires_at
       FROM sessions JOIN users ON users.id = sessions.user_id
       WHERE sessions.token = ?`,
    )
    .get(token) as (UserRow & { expires_at: string }) | undefined;
  if (!row) {
    return null;
  }
  if (row.expires_at <= new Date().toISOString()) {
    deleteSession(db, token);
    return null;
  }
  return toAuthUser(row);
}

export function deleteSession(db: DatabaseSync, token: string): void {
  db.prepare("DELETE FROM sessions WHERE token = ?").run(token);
}
