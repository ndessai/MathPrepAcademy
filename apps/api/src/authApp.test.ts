import { beforeEach, describe, expect, it, vi } from "vitest";

import type { Hono } from "hono";
import type { DatabaseSync } from "node:sqlite";

import type { AuthUser } from "@mathprep/core";

import { createApp } from "./app";
import { openDatabase } from "./db";

let db: DatabaseSync;

beforeEach(() => {
  db = openDatabase(":memory:");
});

async function json<T>(res: Response): Promise<T> {
  return (await res.json()) as T;
}

function sessionCookie(res: Response): string {
  const header = res.headers.get("set-cookie");
  expect(header).toContain("mathprep_session=");
  expect(header).toContain("HttpOnly");
  return (header ?? "").split(";")[0] ?? "";
}

async function devSignIn(app: Hono, name = "Test Student", email = "student@example.com") {
  const res = await app.request("/api/auth/dev", {
    method: "POST",
    body: JSON.stringify({ name, email }),
    headers: { "content-type": "application/json" },
  });
  expect(res.status).toBe(200);
  return { user: await json<AuthUser>(res), cookie: sessionCookie(res) };
}

describe("auth config", () => {
  it("advertises dev sign-in when Google is not configured", async () => {
    const app = createApp(db);
    const res = await app.request("/api/auth/config");
    expect(await json(res)).toEqual({ googleClientId: null, devLoginEnabled: true });
  });

  it("advertises the Google client id when configured", async () => {
    const app = createApp(db, { googleClientId: "client-123", devLoginEnabled: false });
    const res = await app.request("/api/auth/config");
    expect(await json(res)).toEqual({ googleClientId: "client-123", devLoginEnabled: false });
  });
});

describe("dev sign-in", () => {
  it("creates a session and returns the user", async () => {
    const app = createApp(db);
    const { user, cookie } = await devSignIn(app, "Casey Kim", "casey@example.com");
    expect(user).toMatchObject({ name: "Casey Kim", email: "casey@example.com", picture: null });

    const me = await app.request("/api/auth/me", { headers: { cookie } });
    expect(me.status).toBe(200);
    expect(await json<AuthUser>(me)).toEqual(user);
  });

  it("reuses the same user for the same email", async () => {
    const app = createApp(db);
    const first = await devSignIn(app, "Casey", "casey@example.com");
    const second = await devSignIn(app, "Casey K.", "casey@example.com");
    expect(second.user.id).toBe(first.user.id);
    expect(second.user.name).toBe("Casey K.");
  });

  it("rejects invalid emails", async () => {
    const app = createApp(db);
    const res = await app.request("/api/auth/dev", {
      method: "POST",
      body: JSON.stringify({ name: "X", email: "not-an-email" }),
      headers: { "content-type": "application/json" },
    });
    expect(res.status).toBe(400);
  });

  it("is rejected when disabled", async () => {
    const app = createApp(db, { googleClientId: "client-123", devLoginEnabled: false });
    const res = await app.request("/api/auth/dev", {
      method: "POST",
      body: JSON.stringify({ name: "X", email: "x@example.com" }),
      headers: { "content-type": "application/json" },
    });
    expect(res.status).toBe(403);
  });
});

describe("google sign-in", () => {
  it("is unavailable when no client id is configured", async () => {
    const app = createApp(db);
    const res = await app.request("/api/auth/google", {
      method: "POST",
      body: JSON.stringify({ credential: "abc" }),
      headers: { "content-type": "application/json" },
    });
    expect(res.status).toBe(503);
  });

  it("verifies the credential and creates a session", async () => {
    const verifyGoogle = vi.fn().mockResolvedValue({
      sub: "google-sub-1",
      email: "casey@example.com",
      name: "Casey Kim",
      picture: "https://example.com/p.png",
    });
    const app = createApp(db, {
      googleClientId: "client-123",
      devLoginEnabled: false,
      verifyGoogle,
    });

    const res = await app.request("/api/auth/google", {
      method: "POST",
      body: JSON.stringify({ credential: "fake-jwt" }),
      headers: { "content-type": "application/json" },
    });
    expect(res.status).toBe(200);
    expect(verifyGoogle).toHaveBeenCalledWith("fake-jwt", "client-123");
    const user = await json<AuthUser>(res);
    expect(user).toMatchObject({
      name: "Casey Kim",
      email: "casey@example.com",
      picture: "https://example.com/p.png",
    });

    const me = await app.request("/api/auth/me", { headers: { cookie: sessionCookie(res) } });
    expect(me.status).toBe(200);
  });

  it("rejects credentials that fail verification", async () => {
    const verifyGoogle = vi.fn().mockRejectedValue(new Error("bad token"));
    const app = createApp(db, {
      googleClientId: "client-123",
      devLoginEnabled: false,
      verifyGoogle,
    });

    const res = await app.request("/api/auth/google", {
      method: "POST",
      body: JSON.stringify({ credential: "tampered" }),
      headers: { "content-type": "application/json" },
    });
    expect(res.status).toBe(401);
  });

  it("links a Google sign-in to an existing dev user with the same email", async () => {
    const verifyGoogle = vi.fn().mockResolvedValue({
      sub: "google-sub-1",
      email: "casey@example.com",
      name: "Casey Kim",
      picture: null,
    });
    const app = createApp(db, {
      googleClientId: "client-123",
      devLoginEnabled: true,
      verifyGoogle,
    });

    const dev = await devSignIn(app, "Casey", "casey@example.com");
    const res = await app.request("/api/auth/google", {
      method: "POST",
      body: JSON.stringify({ credential: "fake-jwt" }),
      headers: { "content-type": "application/json" },
    });
    const googleUser = await json<AuthUser>(res);
    expect(googleUser.id).toBe(dev.user.id);
  });
});

describe("session lifecycle", () => {
  it("GET /api/auth/me is 401 without a session", async () => {
    const app = createApp(db);
    const res = await app.request("/api/auth/me");
    expect(res.status).toBe(401);
  });

  it("logout invalidates the session server-side", async () => {
    const app = createApp(db);
    const { cookie } = await devSignIn(app);

    const out = await app.request("/api/auth/logout", { method: "POST", headers: { cookie } });
    expect(out.status).toBe(200);

    // Even replaying the old cookie must fail: the session row is gone.
    const me = await app.request("/api/auth/me", { headers: { cookie } });
    expect(me.status).toBe(401);
  });
});
