"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const launchDate = new Date("2026-07-08T00:00:00-04:00");

const storyBeats = [
  "lorida went quiet before anyone said the word cow.",
  "three backs held in the middle water where there should not be ground.",
  "one head turned. the boat motor quit. nobody wrote it down right.",
  "the archive opens when the flat-water file is ready.",
];

function getRemaining(now: Date) {
  const ms = Math.max(0, launchDate.getTime() - now.getTime());
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, totalSeconds };
}

function pad(value: number) {
  return value.toString().padStart(2, "0");
}

export function PrelaunchGate({ children }: { children: React.ReactNode }) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const remaining = useMemo(() => getRemaining(now), [now]);
  const unlocked = remaining.totalSeconds <= 0;

  if (unlocked) {
    return children;
  }

  return (
    <main className="prelaunch-screen" aria-label="Sea Cows Are Real prelaunch screen">
      <div className="prelaunch-scanline" aria-hidden="true" />
      <div className="prelaunch-stage">
        <Image
          alt=""
          aria-hidden="true"
          className="prelaunch-backdrop"
          fill
          priority
          sizes="100vw"
          src="/images/prelaunch/lorida-pixel-lake.png"
        />
        <div className="prelaunch-cloud prelaunch-cloud-a" aria-hidden="true" />
        <div className="prelaunch-cloud prelaunch-cloud-b" aria-hidden="true" />
        <div className="prelaunch-ripple prelaunch-ripple-a" aria-hidden="true" />
        <div className="prelaunch-ripple prelaunch-ripple-b" aria-hidden="true" />

        <section className="prelaunch-panel">
          <p className="prelaunch-kicker">sea cows are real</p>
          <h1>case file loading</h1>
          <p className="prelaunch-date">07/08/2026</p>
          <div className="prelaunch-divider" aria-hidden="true" />
          <div className="prelaunch-dialogue" aria-live="polite">
            {storyBeats.map((beat, index) => (
              <p key={beat} style={{ animationDelay: `${index * 2.4}s` }}>
                {beat}
              </p>
            ))}
          </div>
          <dl className="prelaunch-countdown" aria-label="Time remaining until launch">
            <div>
              <dt>days</dt>
              <dd>{remaining.days}</dd>
            </div>
            <div>
              <dt>hrs</dt>
              <dd>{pad(remaining.hours)}</dd>
            </div>
            <div>
              <dt>min</dt>
              <dd>{pad(remaining.minutes)}</dd>
            </div>
            <div>
              <dt>sec</dt>
              <dd>{pad(remaining.seconds)}</dd>
            </div>
          </dl>
          <div className="prelaunch-loader" aria-hidden="true">
            <span />
          </div>
        </section>
      </div>
    </main>
  );
}
