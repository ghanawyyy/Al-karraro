import { Bat } from "./spooky-symbols";

const RING_TEXT = "TAKING SWEET MOMENTS TO ANOTHER LEVEL · TAKING SWEET MOMENTS TO ANOTHER LEVEL · ";

/** Replaces the source's "SUC'ARA / Artisan Confections" wordmark (Sucara-New-Logo-500px.png, 501x135). */
export function CukarraWordmark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 501 135" role="img" aria-labelledby="ak-cukarra-title">
      <title id="ak-cukarra-title">Cukarra Artisan Confections</title>
      <text x="250.5" y="86" textAnchor="middle" textLength="470" lengthAdjust="spacing" className="ak-cukarra-name">
        <tspan className="ak-cukarra-c">C</tspan>UKARRA
      </text>
      <text x="250.5" y="124" textAnchor="middle" textLength="300" lengthAdjust="spacing" className="ak-cukarra-tagline">
        Artisan Confections
      </text>
    </svg>
  );
}

/** Replaces the source's round "S" badge (Sucara-icon-for-website, 100x100) with a script "C". */
export function CukarraEmblem({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" role="img" aria-labelledby="ak-cukarra-emblem-title">
      <title id="ak-cukarra-emblem-title">Cukarra — taking sweet moments to another level</title>
      <defs>
        <path id="ak-cukarra-ring" d="M50 50m-41 0a41 41 0 1 1 82 0a41 41 0 1 1-82 0" />
      </defs>
      <g className="ak-cukarra-ring-spin">
        <text className="ak-cukarra-ring-text" textLength="256" lengthAdjust="spacing">
          <textPath href="#ak-cukarra-ring">{RING_TEXT}</textPath>
        </text>
      </g>
      <text x="51" y="70" textAnchor="middle" className="ak-cukarra-emblem-c">
        C
      </text>
    </svg>
  );
}

const orbit = ["ak-orbit-1", "ak-orbit-2", "ak-orbit-3"];

/** Bats circling a logo or emblem. */
export function OrbitingBats() {
  return (
    <div className="ak-orbit" aria-hidden="true">
      {orbit.map((name) => (
        <div key={name} className={`ak-orbit-arm ${name}`}>
          <Bat className="ak-orbit-bat" />
        </div>
      ))}
    </div>
  );
}
