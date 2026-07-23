import { Link } from "react-router";

import { useUser } from "../auth/authContext";

const EXAMS = [
  {
    type: "amc8",
    label: "AMC 8",
    blurb: "25 questions · 40 minutes · for students in grade 8 and below.",
  },
  {
    type: "amc10",
    label: "AMC 10",
    blurb: "25 questions · 75 minutes · for students in grade 10 and below.",
  },
  {
    type: "amc12",
    label: "AMC 12",
    blurb: "25 questions · 75 minutes · for students in grade 12 and below.",
  },
] as const;

export function HomePage() {
  const user = useUser();

  return (
    <div className="home">
      <section className="panel">
        <h2>Welcome, {user.name}</h2>
        <p className="meta">Signed in as {user.email}</p>
        <p>
          Pick a competition below to take an assessment and find out where you stand. Your results
          feed the <Link to="/roadmap">study roadmap</Link> that shows which topics to focus on.
        </p>
      </section>

      <section>
        <h3>Choose your competition</h3>
        <ul className="assessment-list exam-grid">
          {EXAMS.map((exam) => (
            <li key={exam.type} className="assessment-card">
              <div>
                <h4>{exam.label}</h4>
                <p>{exam.blurb}</p>
              </div>
              <Link className="exam-link" to={`/assessment?exam=${exam.type}`}>
                Take an {exam.label} assessment
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
