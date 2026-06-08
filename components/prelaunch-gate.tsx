"use client";

import { useEffect, useMemo, useState } from "react";

const launchDate = new Date("2026-06-08T00:00:00-07:00");

function getRemaining(now: Date) {
  const ms = Math.max(0, launchDate.getTime() - now.getTime());
  return Math.floor(ms / 1000);
}

export function PrelaunchGate({ children }: { children: React.ReactNode }) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const remaining = useMemo(() => getRemaining(now), [now]);
  const unlocked = remaining <= 0;

  if (unlocked) {
    return children;
  }

  return (
    <main className="prelaunch-screen" aria-label="Prelaunch screen">
      <time className="prelaunch-date" dateTime="2026-06-08">
        06/08/2026
      </time>
    </main>
  );
}
