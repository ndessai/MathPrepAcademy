import { NavLink, Route, Routes } from "react-router";

import { AssessmentHub } from "./pages/AssessmentHub";
import { HomePage } from "./pages/HomePage";
import { ResultsPage } from "./pages/ResultsPage";
import { RoadmapPage } from "./pages/RoadmapPage";
import { TakeAssessment } from "./pages/TakeAssessment";

export function App() {
  return (
    <>
      <header>
        <h1>MathPrep Academy</h1>
        <nav aria-label="Main">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/assessment">Assessments</NavLink>
          <NavLink to="/roadmap">Roadmap</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/assessment" element={<AssessmentHub />} />
          <Route path="/assessment/:assessmentId/attempt/:attemptId" element={<TakeAssessment />} />
          <Route path="/results/:attemptId" element={<ResultsPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
        </Routes>
      </main>
    </>
  );
}
