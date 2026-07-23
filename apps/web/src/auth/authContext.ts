import { createContext, useContext } from "react";

import type { AuthUser } from "@mathprep/core";

export type AuthStatus = "loading" | "signed-in" | "signed-out";

export interface AuthContextValue {
  status: AuthStatus;
  user: AuthUser | null;
  /** Called by the login page after a successful sign-in request. */
  setUser: (user: AuthUser) => void;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}

/** For pages behind RequireAuth, where a signed-in user is guaranteed. */
export function useUser(): AuthUser {
  const { user } = useAuth();
  if (!user) {
    throw new Error("useUser requires a signed-in user");
  }
  return user;
}
