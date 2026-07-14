import { Card } from "@mathprep/ui";
import { Link } from "react-router";

export function HomePage() {
  return (
    <Card title="Welcome">
      <p>
        MathPrep Academy helps students master math through tutoring, adaptive assessments, and
        personalized learning roadmaps — starting with AMC 8 preparation.
      </p>
      <ul>
        <li>
          <Link to="/assessment">Take an assessment</Link> — a full AMC 8 mock exam, a quick
          diagnostic, or a topic quiz with instant scoring and worked explanations.
        </li>
        <li>
          <Link to="/roadmap">View your roadmap</Link> — coming soon: a personalized plan built from
          your assessment results.
        </li>
      </ul>
      <p className="meta">
        The AMC 8 is a 25-question, 40-minute contest held each January. See{" "}
        <code>docs/amc8-analysis.md</code> in this repo for the full breakdown.
      </p>
    </Card>
  );
}
