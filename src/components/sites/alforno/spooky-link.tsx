"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { Bat, JackOLantern, Witch } from "./spooky-symbols";

// The summon animation hands over to <PortalReveal> on the next page once the screen is covered.
const NAVIGATE_AFTER_MS = 880;

const swarm = Array.from({ length: 14 }, (_, i) => {
  const angle = (i / 14) * Math.PI * 2 + (i % 2 ? 0.2 : -0.15);
  const distance = 38 + (i % 4) * 14;
  return {
    "--ak-dx": `${(Math.cos(angle) * distance).toFixed(1)}vmax`,
    "--ak-dy": `${(Math.sin(angle) * distance).toFixed(1)}vmax`,
    "--ak-s": `${1 + (i % 3) * 0.35}`,
    "--ak-r": `${(i % 2 ? 1 : -1) * (10 + i * 3)}deg`,
    "--ak-delay": `${(i % 5) * 40}ms`,
  } as CSSProperties;
});

interface SpookyLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
}

export function SpookyLink({ href, className, children, ...rest }: SpookyLinkProps) {
  const router = useRouter();
  const [origin, setOrigin] = useState<{ x: number; y: number } | null>(null);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    event.preventDefault();
    if (origin) return;
    const box = event.currentTarget.getBoundingClientRect();
    // Keyboard activation reports (0, 0); start from the middle of the link instead.
    const fromPointer = event.clientX !== 0 || event.clientY !== 0;
    setOrigin({
      x: fromPointer ? event.clientX : box.left + box.width / 2,
      y: fromPointer ? event.clientY : box.top + box.height / 2,
    });
    router.prefetch(href);
    timer.current = window.setTimeout(() => router.push(href), NAVIGATE_AFTER_MS);
  }

  return (
    <>
      <Link href={href} className={className} onClick={handleClick} {...rest}>
        {children}
      </Link>
      {origin &&
        createPortal(
          <div
            className="ak-burst"
            aria-hidden="true"
            style={{ "--ak-x": `${origin.x}px`, "--ak-y": `${origin.y}px` } as CSSProperties}
          >
            <div className="ak-burst-portal" />
            <div className="ak-burst-ring" />
            {swarm.map((style, i) => (
              <div key={i} className="ak-burst-bat" style={style}>
                <Bat />
              </div>
            ))}
            <div className="ak-burst-witch">
              <Witch />
            </div>
            <JackOLantern className="ak-burst-pumpkin" />
          </div>,
          document.body,
        )}
    </>
  );
}
