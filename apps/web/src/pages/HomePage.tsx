import { Card } from "@mathprep/ui";
import { Link } from "react-router";

export function HomePage() {
  return (
    <Card title="Welcome">
      <p>
        MathPrep Academy helps students master math through tutoring, adaptive assessments, and
        personalized learning roadmaps.
      </p>
      <ul>
        <li>
          <Link to="/assessment">Take an assessment</Link>
        </li>
        <li>
          <Link to="/roadmap">View your roadmap</Link>
        </li>
      </ul>
    </Card>
  );
}
