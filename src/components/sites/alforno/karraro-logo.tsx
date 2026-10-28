// Redraws the Al Forno badge (public/sites/alforno/logo-original.png, 501x160) with the new name.
export function KarraroLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 501 160"
      role="img"
      aria-labelledby="ak-logo-title"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="ak-logo-title">Al Karraro Gourmet</title>
      <path
        d="M20 4H481a16 16 0 0 1 15 20l-26 116a20 20 0 0 1-20 16H51a20 20 0 0 1-20-16L5 24A16 16 0 0 1 20 4z"
        fill="#f3e3c3"
      />
      <path
        d="M26 12H475a10 10 0 0 1 10 13l-24 109a14 14 0 0 1-14 12H54a14 14 0 0 1-14-12L16 25a10 10 0 0 1 10-13z"
        fill="#0b0710"
      />
      <text
        x="250.5"
        y="100"
        textAnchor="middle"
        textLength="410"
        lengthAdjust="spacingAndGlyphs"
        className="ak-logo-name"
      >
        AL KARRARO
      </text>
      <rect x="165" y="122" width="172" height="36" rx="9" fill="#f3e3c3" stroke="#0b0710" strokeWidth="3" />
      <text
        x="251"
        y="147"
        textAnchor="middle"
        textLength="140"
        lengthAdjust="spacing"
        className="ak-logo-gourmet"
      >
        GOURMET
      </text>
    </svg>
  );
}
