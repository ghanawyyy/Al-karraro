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

export function Ghost({ className }: SymbolProps) {
  return (
    <svg className={className} viewBox="0 0 40 48" aria-hidden="true">
      <path fill="#f3e3c3" d="M20 2C10 2 4 10 4 20v24l5-4 5 4 6-4 6 4 5-4 5 4V20C36 10 30 2 20 2z" />
      <ellipse cx="14.5" cy="19" rx="3" ry="4.2" fill="#0b0710" />
      <ellipse cx="25.5" cy="19" rx="3" ry="4.2" fill="#0b0710" />
      <ellipse cx="20" cy="29" rx="3.2" ry="4.4" fill="#0b0710" />
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
      <path fill="#ffd36b" d="M11 22l6-6 4 7zM37 22l-6-6-4 7zM24 24l-3 5h6z" />
      <path fill="#ffd36b" d="M10 30c4 7 24 7 28 0l-4 1-2 3-3-3-3 3-3-3-3 3-3-3-2 2z" />
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
