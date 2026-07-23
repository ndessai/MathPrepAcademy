import type { ReactNode } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";

import type { AuthUser } from "@mathprep/core";

import { fetchMe, signOutRequest } from "../api/client";
import type { AuthContextValue } from "./authContext";
import { AuthContext } from "./authContext";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<Pick<AuthContextValue, "status" | "user">>({
    status: "loading",
    user: null,
  });

  useEffect(() => {
    let cancelled = false;
    fetchMe()
      .then((user) => {
        if (!cancelled) {
          setState({ status: "signed-in", user });
        }
      })
      .catch(() => {
        if (!cancelled) {
          setState({ status: "signed-out", user: null });
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const setUser = useCallback((user: AuthUser) => {
    setState({ status: "signed-in", user });
  }, []);

  const signOut = useCallback(async () => {
    await signOutRequest();
    setState({ status: "signed-out", user: null });
  }, []);

  const value = useMemo(() => ({ ...state, setUser, signOut }), [state, setUser, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
