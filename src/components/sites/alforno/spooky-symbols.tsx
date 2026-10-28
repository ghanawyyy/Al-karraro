type SymbolProps = { className?: string };

export function Bat({ className }: SymbolProps) {
  return (
    <svg className={className} viewBox="0 0 64 32" aria-hidden="true">
      <path
        fill="currentColor"
        d="M32 9c-1.6 0-2.6 1.2-3 2.4l-1.2-3.2-1 3.6C22 8 13 6 2 10c6 1 9 4.5 9.5 9 2.5-2.2 6-2.6 8.5-1 1.2-2.4 4-3.6 6.5-3 .8 1.6 3 3 5.5 3s4.7-1.4 5.5-3c2.5-.6 5.3.6 6.5 3 2.5-1.6 6-1.2 8.5 1 .5-4.5 3.5-8 9.5-9-11-4-20-2-24.8 1.8l-1-3.6-1.2 3.2C34.6 10.2 33.6 9 32 9z"
      />
    </svg>
  );
}

export function Spider({ className }: SymbolProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <g fill="none" stroke="#0b0710" strokeWidth="1.8" strokeLinecap="round">
        <path d="M13 16 6 11 3 14M13 18H5l-3 3M13 20l-6 4-1 5M14 21l-3 8" />
        <path d="M19 16l7-5 3 3M19 18h8l3 3M19 20l6 4 1 5M18 21l3 8" />
      </g>
      <circle cx="16" cy="13" r="4" fill="#0b0710" />
      <ellipse cx="16" cy="20" rx="5" ry="6" fill="#0b0710" />
      <circle cx="14.5" cy="12.5" r="1" fill="#e8721c" />
      <circle cx="17.5" cy="12.5" r="1" fill="#e8721c" />
    </svg>
  );
}

export function JackOLantern({ className }: SymbolProps) {
  return (
    <svg className={className} viewBox="0 0 48 44" aria-hidden="true">
      <path fill="#4b7a2a" d="M22 9c0-3 1-6 4-8l2 2c-2 1.5-2.5 3.5-2.5 6z" />
      <ellipse cx="24" cy="26" rx="22" ry="17" fill="#e8721c" />
      <path
        fill="none"
        stroke="#b4500f"
        strokeWidth="1.6"
        d="M17 10c-6 4-6 28 0 32M31 10c6 4 6 28 0 32M24 9v34"
      />
      <g className="ak-jack-face">
        <path fill="#ffd36b" d="M11 22l6-6 4 7zM37 22l-6-6-4 7zM24 24l-3 5h6z" />
        <path fill="#ffd36b" d="M10 30c4 7 24 7 28 0l-4 1-2 3-3-3-3 3-3-3-3 3-3-3-2 2z" />
      </g>
    </svg>
  );
}

export function SpookyGhost({ className, id }: SymbolProps & { id: string }) {
  const gradient = `ak-ghost-body-${id}`;
  return (
    <svg className={className} viewBox="0 0 60 90" aria-hidden="true">
      <defs>
        <linearGradient id={gradient} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#efe9ff" stopOpacity="0.95" />
          <stop offset="0.55" stopColor="#cfc4f0" stopOpacity="0.7" />
          <stop offset="1" stopColor="#a796d8" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradient})`}
        d="M30 4C14 4 6 18 6 34v8c-4 2-6 6-5 10 2-3 4-4 5-4v14c0 8-2 16-4 24 6-4 10-2 14 2 4-6 8-8 12-2 4-6 10-6 14 1 4-6 8-5 12-1-2-10 0-20 0-30V48c1 0 3 1 5 4 1-4-1-8-5-10v-8C54 18 46 4 30 4z"
      />
      <path fill="#0b0710" d="M17 27c3-3 9-2 10 3 1 5-2 10-6 10s-7-8-4-13zM43 27c-3-3-9-2-10 3-1 5 2 10 6 10s7-8 4-13z" />
      <circle className="ak-ghost-eye" cx="22" cy="33" r="1.8" fill="#ff3b2f" />
      <circle className="ak-ghost-eye" cx="38" cy="33" r="1.8" fill="#ff3b2f" />
      <path fill="#0b0710" d="M30 46c-5 0-7 6-6 14s3 12 6 12 5-4 6-12-1-14-6-14z" />
    </svg>
  );
}

export function Witch({ className }: SymbolProps) {
  return (
    <svg className={className} viewBox="0 -10 124 80" aria-hidden="true">
      <g fill="currentColor">
        <path d="M6 47.5 96 39l.4 3.5-90 8.5z" />
        <path d="M92 34l28-9-3 13 5 4-6 3 3 10-27-9z" />
        <path d="M44 44c4-16 18-26 34-22 6 2 12 2 16-1-2 8-9 12-16 12 5 2 9 6 10 12-10-4-20-4-30 2z" />
        <path d="M37 44c-2-12 3-22 11-25l9 22z" />
        <circle cx="47" cy="15" r="6.5" />
        <path d="M41 14.5 33 18l8.4 1.6z" />
        <path d="M35 10.5c6-2 18-3 26-1-4 2-20 3-26 1z" />
        <path d="M41.5 9.5C46 2 54-6 70-6c-8 3-12 8-14 15z" />
        <path d="M44 25 30 39l3 3 15-12z" />
        <path d="M49 42 43 55l-6 1.5 1 2.5 9-1 7-13z" />
      </g>
    </svg>
  );
}

export function LightningBolt({ className }: SymbolProps) {
  return (
    <svg className={className} viewBox="0 0 60 160" aria-hidden="true">
      <path
        fill="none"
        stroke="#f4ecff"
        strokeWidth="3"
        strokeLinejoin="round"
        d="M38 0 22 52l14 2-22 46 14 2L4 160l40-70-15-2 19-38-14-2z"
      />
    </svg>
  );
}

const webThreads = [0, 18, 36, 54, 72, 90];
const webRings = [26, 52, 80, 108];

function polar(r: number, deg: number) {
  const a = (deg * Math.PI) / 180;
  return `${(r * Math.cos(a)).toFixed(1)} ${(r * Math.sin(a)).toFixed(1)}`;
}

export function Cobweb({ className }: SymbolProps) {
  const rings = webRings.map((r) =>
    webThreads
      .slice(1)
      .map((deg, i) => `Q${polar(r * 0.78, (deg + webThreads[i]) / 2)} ${polar(r, deg)}`)
      .join(" "),
  );
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
        {webThreads.map((deg) => (
          <path key={deg} d={`M0 0L${polar(130, deg)}`} />
        ))}
        {rings.map((d, i) => (
          <path key={webRings[i]} d={`M${polar(webRings[i], 0)} ${d}`} />
        ))}
      </g>
    </svg>
  );
}
