"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { categoryIcons } from "./category-icons";
import { menuCategories, type MenuCategoryId } from "./menu-data";
import { SpookyLink } from "./spooky-link";

const linked = menuCategories.filter((category) => category.slug && !category.hidden);

/** Not on the source site: lets visitors hop between cloned categories without going back to the menu. */
export function CategoryRail({ current }: { current: MenuCategoryId }) {
  const rail = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = rail.current;
    const active = el?.querySelector<HTMLElement>("[aria-current=page]");
    if (!el || !active) return;
    el.scrollLeft = active.offsetLeft - (el.clientWidth - active.offsetWidth) / 2;
  }, []);

  return (
    <nav ref={rail} className="ak-rail" aria-label="Menu categories">
      {linked.map((category) => {
        const Icon = categoryIcons[category.id];
        const isCurrent = category.id === current;
        return (
          <SpookyLink
            key={category.id}
            href={`/${category.slug}`}
            className={isCurrent ? "ak-rail-chip ak-rail-chip-current" : "ak-rail-chip"}
            aria-current={isCurrent ? "page" : undefined}
          >
            <Icon aria-hidden="true" />
            <span>{category.title}</span>
          </SpookyLink>
        );
      })}
    </nav>
  );
}

export function CategoryPager({ current }: { current: MenuCategoryId }) {
  const index = linked.findIndex((category) => category.id === current);
  const prev = linked[(index - 1 + linked.length) % linked.length];
  const next = linked[(index + 1) % linked.length];

  return (
    <nav className="ak-pager" aria-label="More categories">
      <SpookyLink href={`/${prev.slug}`} className="ak-pager-link ak-pager-prev">
        <ChevronLeft aria-hidden="true" />
        <span>
          <small>Previous</small>
          {prev.title}
        </span>
      </SpookyLink>
      <SpookyLink href={`/${next.slug}`} className="ak-pager-link ak-pager-next">
        <span>
          <small>Next</small>
          {next.title}
        </span>
        <ChevronRight aria-hidden="true" />
      </SpookyLink>
    </nav>
  );
}
