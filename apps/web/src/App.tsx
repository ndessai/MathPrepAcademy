import { NavLink, Route, Routes, useNavigate } from "react-router";

import { Button } from "@mathprep/ui";

import { useAuth } from "./auth/authContext";
import { AuthProvider } from "./auth/AuthProvider";
import { RequireAuth } from "./auth/RequireAuth";
import { AssessmentHub } from "./pages/AssessmentHub";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { ResultsPage } from "./pages/ResultsPage";
import { RoadmapPage } from "./pages/RoadmapPage";
import { TakeAssessment } from "./pages/TakeAssessment";

function Header() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  async function handleSignOut() {
    await signOut();
    await navigate("/login");
  }

  return (
    <header>
      <div className="header-row">
        <h1>MathPrep Academy</h1>
        {user && (
          <div className="user-chip">
            {user.picture && (
              <img src={user.picture} alt="" referrerPolicy="no-referrer" className="avatar" />
            )}
            <div className="user-ids">
              <span className="user-name">{user.name}</span>
              <span className="user-email">{user.email}</span>
            </div>
            <Button variant="secondary" onClick={() => void handleSignOut()}>
              Sign out
            </Button>
          </div>
        )}
      </div>
      {user && (
        <nav aria-label="Main">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/assessment">Assessments</NavLink>
          <NavLink to="/roadmap">Roadmap</NavLink>
        </nav>
      )}
    </header>
  );
}

export function App() {
  return (
    <AuthProvider>
      <Header />
      <main>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<RequireAuth />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/assessment" element={<AssessmentHub />} />
            <Route
              path="/assessment/:assessmentId/attempt/:attemptId"
              element={<TakeAssessment />}
            />
            <Route path="/results/:attemptId" element={<ResultsPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
          </Route>
        </Routes>
      </main>
    </AuthProvider>
  );
}
