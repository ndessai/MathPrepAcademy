import type { DatabaseSync } from "node:sqlite";

import type { Context } from "hono";
import { Hono } from "hono";
import { deleteCookie, getCookie, setCookie } from "hono/cookie";

import type { AuthConfig, AuthUser } from "@mathprep/core";
import { devLoginSchema, googleLoginSchema } from "@mathprep/core";

import { createSession, deleteSession, getSessionUser, upsertUser } from "./authRepository";
import type { GoogleClaims, GoogleCredentialVerifier } from "./googleAuth";
import { verifyGoogleCredential } from "./googleAuth";

export const SESSION_COOKIE = "mathprep_session";

export interface AuthOptions extends AuthConfig {
  /** Overridable in tests to avoid live calls to Google's JWKS endpoint. */
  verifyGoogle?: GoogleCredentialVerifier;
}

function startSession(c: Context, db: DatabaseSync, userId: string): void {
  const session = createSession(db, userId);
  setCookie(c, SESSION_COOKIE, session.token, {
    path: "/",
    httpOnly: true,
    sameSite: "Lax",
    expires: new Date(session.expiresAt),
  });
}

export function currentUser(c: Context, db: DatabaseSync): AuthUser | null {
  const token = getCookie(c, SESSION_COOKIE);
  return token ? getSessionUser(db, token) : null;
}

export function createAuthApp(db: DatabaseSync, options: AuthOptions): Hono {
  const verifyGoogle = options.verifyGoogle ?? verifyGoogleCredential;
  const app = new Hono();

  // Which sign-in methods the web app should offer.
  app.get("/config", (c) => {
    const config: AuthConfig = {
      googleClientId: options.googleClientId,
      devLoginEnabled: options.devLoginEnabled,
    };
    return c.json(config);
  });

  app.get("/me", (c) => {
    const user = currentUser(c, db);
    if (!user) {
      return c.json({ error: "Not signed in" }, 401);
    }
    return c.json(user);
  });

  app.post("/google", async (c) => {
    if (!options.googleClientId) {
      return c.json({ error: "Google sign-in is not configured" }, 503);
    }
    const parsed = googleLoginSchema.safeParse(await c.req.json().catch(() => null));
    if (!parsed.success) {
      return c.json({ error: "Invalid request", issues: parsed.error.issues }, 400);
    }
    let claims: GoogleClaims;
    try {
      claims = await verifyGoogle(parsed.data.credential, options.googleClientId);
    } catch {
      return c.json({ error: "Invalid Google credential" }, 401);
    }
    const user = upsertUser(db, {
      email: claims.email,
      name: claims.name,
      googleSub: claims.sub,
      picture: claims.picture,
    });
    startSession(c, db, user.id);
    return c.json(user);
  });

  // Name + email sign-in for local development and e2e, where no Google
  // OAuth client exists. Never enabled when Google is the configured path.
  app.post("/dev", async (c) => {
    if (!options.devLoginEnabled) {
      return c.json({ error: "Dev sign-in is disabled" }, 403);
    }
    const parsed = devLoginSchema.safeParse(await c.req.json().catch(() => null));
    if (!parsed.success) {
      return c.json({ error: "Invalid request", issues: parsed.error.issues }, 400);
    }
    const user = upsertUser(db, parsed.data);
    startSession(c, db, user.id);
    return c.json(user);
  });

  app.post("/logout", (c) => {
    const token = getCookie(c, SESSION_COOKIE);
    if (token) {
      deleteSession(db, token);
    }
    deleteCookie(c, SESSION_COOKIE, { path: "/" });
    return c.json({ ok: true });
  });

  return app;
}
