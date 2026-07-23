import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router";

import type { AuthConfig } from "@mathprep/core";
import { Button } from "@mathprep/ui";

import { fetchAuthConfig, signInDev, signInWithGoogle } from "../api/client";
import { useAuth } from "../auth/authContext";

const GSI_SCRIPT_SRC = "https://accounts.google.com/gsi/client";

export function LoginPage() {
  const { status, setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string } | null)?.from ?? "/";

  const [config, setConfig] = useState<AuthConfig | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const googleButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchAuthConfig()
      .then(setConfig)
      .catch(() => setError("Could not load sign-in options. Is the API running?"));
  }, []);

  // Render the official "Sign in with Google" button once the GIS script and
  // the server-provided client id are both available.
  const clientId = config?.googleClientId ?? null;
  useEffect(() => {
    if (!clientId) {
      return;
    }
    let cancelled = false;

    function renderButton() {
      const container = googleButtonRef.current;
      const googleId = window.google?.accounts.id;
      if (cancelled || !container || !googleId) {
        return;
      }
      googleId.initialize({
        client_id: clientId as string,
        callback: (response) => {
          signInWithGoogle(response.credential)
            .then((user) => {
              setUser(user);
              void navigate(from, { replace: true });
            })
            .catch((e: unknown) => {
              setError(e instanceof Error ? e.message : "Google sign-in failed");
            });
        },
      });
      googleId.renderButton(container, { theme: "outline", size: "large", text: "signin_with" });
    }

    if (window.google?.accounts.id) {
      renderButton();
      return;
    }
    const existing = document.querySelector(`script[src="${GSI_SCRIPT_SRC}"]`);
    const script = existing ?? document.createElement("script");
    script.addEventListener("load", renderButton);
    if (!existing) {
      (script as HTMLScriptElement).src = GSI_SCRIPT_SRC;
      (script as HTMLScriptElement).async = true;
      document.head.appendChild(script);
    }
    return () => {
      cancelled = true;
      script.removeEventListener("load", renderButton);
    };
  }, [clientId, from, navigate, setUser]);

  if (status === "signed-in") {
    return <Navigate to={from} replace />;
  }

  async function handleDevSubmit(event: FormEvent) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const user = await signInDev(name.trim(), email.trim());
      setUser(user);
      void navigate(from, { replace: true });
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Sign-in failed");
      setSubmitting(false);
    }
  }

  return (
    <div className="login">
      <section className="panel login-panel">
        <h2>Sign in</h2>
        <p>
          Sign in to take AMC 8, AMC 10, and AMC 12 assessments, track your scores, and build your
          study roadmap.
        </p>

        {error && (
          <p role="alert" className="error">
            {error}
          </p>
        )}

        {config === null && !error && <p className="hint">Loading sign-in options…</p>}

        {clientId && <div ref={googleButtonRef} className="google-button-slot" />}

        {config?.devLoginEnabled && (
          <>
            {clientId && <p className="login-divider">or</p>}
            <form onSubmit={(e) => void handleDevSubmit(e)} className="login-form">
              <label>
                Your name
                <input
                  required
                  maxLength={60}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                />
              </label>
              <label>
                Email
                <input
                  required
                  type="email"
                  maxLength={120}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </label>
              <Button type="submit" disabled={submitting}>
                {submitting ? "Signing in…" : "Sign in"}
              </Button>
              <p className="hint">
                Development sign-in — used while Google sign-in is not configured.
              </p>
            </form>
          </>
        )}
      </section>
    </div>
  );
}
