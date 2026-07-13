import { NavLink, Route, Routes } from "react-router";

import { AssessmentPage } from "./pages/AssessmentPage";
import { HomePage } from "./pages/HomePage";
import { RoadmapPage } from "./pages/RoadmapPage";

export function App() {
  return (
    <>
      <header>
        <h1>MathPrep Academy</h1>
        <nav aria-label="Main">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/assessment">Assessment</NavLink>
          <NavLink to="/roadmap">Roadmap</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/assessment" element={<AssessmentPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
        </Routes>
      </main>
    </>
  );
}
