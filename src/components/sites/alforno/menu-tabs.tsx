"use client";

import { useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import type { MenuTab } from "./category-menus";
import { JackOLantern } from "./spooky-symbols";

interface MenuTabsProps {
  tabs: MenuTab[];
  defaultTab: string;
  label: string;
}

/** Source: the isotope ".menu-filter" buttons that filter ".loop-menus" articles by sub-category. */
export function MenuTabs({ tabs, defaultTab, label }: MenuTabsProps) {
  const [activeId, setActiveId] = useState(defaultTab);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const keys: Record<string, number> = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    const index = tabs.findIndex((tab) => tab.id === active.id);
    let next: number | undefined;
    if (event.key in keys) next = (index + keys[event.key] + tabs.length) % tabs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = tabs.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    setActiveId(tabs[next].id);
    tabRefs.current[next]?.focus();
  }

  return (
    <>
      {/* Shisha has a single list and no sub-category filters on the source. */}
      <div className="ak-tabs" role="tablist" aria-label={label} onKeyDown={handleKeyDown} hidden={tabs.length < 2}>
        {tabs.map((tab, i) => {
          const selected = tab.id === active.id;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`ak-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls="ak-tab-panel"
              tabIndex={selected ? 0 : -1}
              className={selected ? "ak-tab ak-tab-active" : "ak-tab"}
              onClick={() => setActiveId(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <section className="ak-menu-panel" role="tabpanel" id="ak-tab-panel" aria-labelledby={`ak-tab-${active.id}`}>
        <h2 className="ak-tab-heading" key={`h-${active.id}`}>
          <JackOLantern className="ak-tab-pumpkin" />
          <span>{active.label}</span>
          <JackOLantern className="ak-tab-pumpkin" />
        </h2>
        <div className="ak-items" key={active.id}>
          {active.items.map((item, i) => {
            // The source stores serving notes ("served with…", "Add grilled chicken…!") as price-less entries.
            const isNote = !item.price && (/^[a-z]/.test(item.title) || /\bserved with\b/i.test(item.title) || /[.!]$/.test(item.title));
            return (
              <article
                key={`${item.title}-${i}`}
                className={isNote ? "ak-item ak-item-note" : "ak-item"}
                style={{ "--i": i } as CSSProperties}
              >
                <h3 className="ak-item-head">
                  <span className="ak-item-title">
                    <span className="ak-item-chip">{item.title}</span>
                  </span>
                  {item.price && (
                    <>
                      <span className="ak-item-leader" aria-hidden="true" />
                      <span className="ak-item-price">{item.price}</span>
                    </>
                  )}
                </h3>
                {item.description && <p className="ak-item-desc">{item.description}</p>}
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
