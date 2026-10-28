import "@fontsource/creepster/400.css";
import "@fontsource/im-fell-english/400.css";
import "@fontsource/questrial/400.css";
import "./alforno.css";
import "./category.css";
import "./sucara.css";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { SucaraPager, SucaraRail } from "./category-nav";
import { HauntLayer } from "./haunt-layer";
import { MenuTabs } from "./menu-tabs";
import { PortalReveal } from "./portal-reveal";
import { SpookyLink } from "./spooky-link";
import type { SucaraSection } from "./sucara-menus";

/**
 * Source: alfornogourmet.com/menu/sucara/<slug>/ — petal-pattern header, the round "S" emblem,
 * sub-category filters and a lilac price list. The source hides the site footer on these pages.
 */
export function SucaraSectionPage({ section }: { section: SucaraSection }) {
  return (
    <div className="ak-page ak-category-page ak-sucara ak-sucara-section">
      <HauntLayer />

      <SpookyLink href="/sucara" className="ak-back" aria-label="Back to Suc'ara">
        <ArrowLeft aria-hidden="true" />
        <span>Suc&apos;ara</span>
      </SpookyLink>

      <header className="ak-sucara-banner">
        <h1 className="sr-only">Suc&apos;ara — {section.title}</h1>
      </header>

      <div className="ak-sucara-emblem">
        <Image
          src="/sites/alforno/sucara/sucara-emblem-spooky.png"
          alt="Suc'ara — taking sweet moments to another level"
          width={100}
          height={100}
          priority
        />
      </div>

      <SucaraRail slug={section.slug} />

      <main className="ak-category-main">
        <MenuTabs tabs={section.tabs} defaultTab={section.defaultTab} label={`${section.title} sections`} />
        <SucaraPager slug={section.slug} />
      </main>

      <PortalReveal />
    </div>
  );
}
