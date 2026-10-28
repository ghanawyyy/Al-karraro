import type { CSSProperties } from "react";
import { Bat, JackOLantern } from "./spooky-symbols";

const scatter = Array.from({ length: 10 }, (_, i) => {
  const angle = (i / 10) * Math.PI * 2 + 0.3;
  const distance = 42 + (i % 3) * 12;
  return {
    "--ak-dx": `${(Math.cos(angle) * distance).toFixed(1)}vmax`,
    "--ak-dy": `${(Math.sin(angle) * distance).toFixed(1)}vmax`,
    "--ak-s": `${1.2 + (i % 3) * 0.3}`,
    "--ak-r": `${(i % 2 ? 1 : -1) * (12 + i * 4)}deg`,
    "--ak-delay": `${180 + (i % 4) * 35}ms`,
  } as CSSProperties;
});

/** Plays once when a page mounts: the pumpkin from the tap transition bursts and the portal opens. */
export function PortalReveal() {
  return (
    <div className="ak-entry" aria-hidden="true">
      <div className="ak-entry-veil" />
      {scatter.map((style, i) => (
        <div key={i} className="ak-entry-bat" style={style}>
          <Bat />
        </div>
      ))}
      <JackOLantern className="ak-entry-pumpkin" />
    </div>
  );
}
