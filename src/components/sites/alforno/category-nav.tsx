"use client";

import type { LucideIcon } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, type ComponentType } from "react";
import { categoryIcons } from "./category-icons";
import { menuCategories, type MenuCategoryId } from "./menu-data";
import { SpookyLink } from "./spooky-link";
import { cukarraLinks } from "./cukarra-sections";

export interface NavLink {
  href: string;
  title: string;
  icon: LucideIcon | ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
}

const categoryLinks: NavLink[] = menuCategories
  .filter((category) => category.slug && !category.hidden)
  .map((category) => ({ href: `/${category.slug}`, title: category.title, icon: categoryIcons[category.id] }));

function currentHref(id: MenuCategoryId) {
  return `/${menuCategories.find((category) => category.id === id)?.slug}`;
}

/** Not on the source site: lets visitors hop between pages without going back to a menu. */
export function NavRail({ links, current, label }: { links: NavLink[]; current: string; label: string }) {
  const rail = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = rail.current;
    const active = el?.querySelector<HTMLElement>("[aria-current=page]");
    if (!el || !active) return;
    el.scrollLeft = active.offsetLeft - (el.clientWidth - active.offsetWidth) / 2;
  }, []);

  return (
    <nav ref={rail} className="ak-rail" aria-label={label}>
      {links.map(({ href, title, icon: Icon }) => {
        const isCurrent = href === current;
        return (
          <SpookyLink
            key={href}
            href={href}
            className={isCurrent ? "ak-rail-chip ak-rail-chip-current" : "ak-rail-chip"}
            aria-current={isCurrent ? "page" : undefined}
          >
            <Icon aria-hidden="true" />
            <span>{title}</span>
          </SpookyLink>
        );
      })}
    </nav>
  );
}

export function NavPager({ links, current, label }: { links: NavLink[]; current: string; label: string }) {
  const index = links.findIndex((link) => link.href === current);
  const prev = links[(index - 1 + links.length) % links.length];
  const next = links[(index + 1) % links.length];

  return (
    <nav className="ak-pager" aria-label={label}>
      <SpookyLink href={prev.href} className="ak-pager-link ak-pager-prev">
        <ChevronLeft aria-hidden="true" />
        <span>
          <small>Previous</small>
          {prev.title}
        </span>
      </SpookyLink>
      <SpookyLink href={next.href} className="ak-pager-link ak-pager-next">
        <span>
          <small>Next</small>
          {next.title}
        </span>
        <ChevronRight aria-hidden="true" />
      </SpookyLink>
    </nav>
  );
}

export function CategoryRail({ current }: { current: MenuCategoryId }) {
  return <NavRail links={categoryLinks} current={currentHref(current)} label="Menu categories" />;
}

export function CategoryPager({ current }: { current: MenuCategoryId }) {
  return <NavPager links={categoryLinks} current={currentHref(current)} label="More categories" />;
}

export function CukarraRail({ slug }: { slug: string }) {
  return <NavRail links={cukarraLinks} current={`/cukarra/${slug}`} label="Cukarra sections" />;
}

export function CukarraPager({ slug }: { slug: string }) {
  return <NavPager links={cukarraLinks} current={`/cukarra/${slug}`} label="More Cukarra sections" />;
}
