import { useEffect, useRef, useState } from "react";

export interface CountdownTimerProps {
  /** Epoch milliseconds when time runs out. */
  deadline: number;
  onExpire: () => void;
}

export function CountdownTimer({ deadline, onExpire }: CountdownTimerProps) {
  const [now, setNow] = useState(() => Date.now());
  const expiredRef = useRef(false);

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 500);
    return () => clearInterval(id);
  }, []);

  const remainingMs = Math.max(0, deadline - now);

  useEffect(() => {
    if (remainingMs === 0 && !expiredRef.current) {
      expiredRef.current = true;
      onExpire();
    }
  }, [remainingMs, onExpire]);

  const minutes = Math.floor(remainingMs / 60_000);
  const seconds = Math.floor((remainingMs % 60_000) / 1000);
  const low = remainingMs < 5 * 60_000;

  return (
    <span role="timer" aria-label="Time remaining" className={low ? "timer timer-low" : "timer"}>
      {minutes}:{String(seconds).padStart(2, "0")}
    </span>
  );
}
