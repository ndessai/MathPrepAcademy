import { Navigate, Outlet, useLocation } from "react-router";

import { useAuth } from "./authContext";

export function RequireAuth() {
  const { status } = useAuth();
  const location = useLocation();

  if (status === "loading") {
    return <p className="hint">Checking your session…</p>;
  }
  if (status === "signed-out") {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }
  return <Outlet />;
}
