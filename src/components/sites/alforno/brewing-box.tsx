"use client";

import { FlaskConical } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

const TOAST_MS = 2600;

/** A category whose page isn't cloned yet: it wobbles and says it's still brewing. */
export function BrewingBox({ title, children }: { title: string; children: ReactNode }) {
  const [toast, setToast] = useState(0);
  const button = useRef<HTMLButtonElement>(null);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  function handleClick() {
    const el = button.current;
    if (el) {
      // Restart the wobble without remounting the focused button.
      el.classList.remove("ak-brew-shake");
      void el.offsetWidth;
      el.classList.add("ak-brew-shake");
    }
    window.clearTimeout(timer.current);
    setToast((n) => n + 1);
    timer.current = window.setTimeout(() => setToast(0), TOAST_MS);
  }

  return (
    <>
      <button ref={button} type="button" className="menu-box" onClick={handleClick}>
        {children}
      </button>
      {toast > 0 &&
        createPortal(
          <div key={toast} className="ak-toast" role="status">
            <FlaskConical aria-hidden="true" />
            <span>{title} is still brewing in the cauldron… coming soon</span>
          </div>,
          document.body,
        )}
    </>
  );
}
