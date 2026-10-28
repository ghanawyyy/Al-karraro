"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { JackOLantern } from "./spooky-symbols";

const SHOW_AFTER_PX = 700;

/** Not on the source site: a floating pumpkin that glides long price lists back to the top. */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  function handleClick() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      className={visible ? "ak-to-top ak-to-top-visible" : "ak-to-top"}
      onClick={handleClick}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      <JackOLantern className="ak-to-top-pumpkin" />
      <ChevronUp className="ak-to-top-arrow" aria-hidden="true" />
    </button>
  );
}
