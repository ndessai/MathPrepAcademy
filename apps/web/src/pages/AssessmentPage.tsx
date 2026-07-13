import { Button, Card } from "@mathprep/ui";
import { useState } from "react";

export function AssessmentPage() {
  const [started, setStarted] = useState(false);

  return (
    <Card title="Assessment">
      {started ? (
        <p>Sample question: What is 7 × 8?</p>
      ) : (
        <>
          <p>Take a short diagnostic to find your starting point.</p>
          <Button onClick={() => setStarted(true)}>Start assessment</Button>
        </>
      )}
    </Card>
  );
}
