import "@fontsource/creepster/400.css";
import "@fontsource/im-fell-english/400.css";
import "@fontsource/cinzel/400.css";
import "@fontsource/pinyon-script/400.css";
import "@fontsource/questrial/400.css";
import "./alforno.css";
import "./category.css";
import "./cukarra.css";

import { ArrowLeft } from "lucide-react";
import { BackToTop } from "./back-to-top";
import { CukarraPager, CukarraRail } from "./category-nav";
import { CukarraEmblem, OrbitingBats } from "./cukarra-brand";
import { HauntLayer } from "./haunt-layer";
import { MenuTabs } from "./menu-tabs";
import { PortalReveal } from "./portal-reveal";
import { SpookyLink } from "./spooky-link";
import type { CukarraSection } from "./cukarra-menus";
import { Cobweb, Spider } from "./spooky-symbols";

/**
 * Source: alfornogourmet.com/menu/sucara/<slug>/, rebranded Cukarra — petal-pattern header, the round
 * emblem (its "S" is now a "C"), sub-category filters and a lilac price list. The source hides the site
 * footer on these pages.
 */
export function CukarraSectionPage({ section }: { section: CukarraSection }) {
  return (
    <div className="ak-page ak-category-page ak-cukarra ak-cukarra-section">
      <HauntLayer />

      <SpookyLink href="/cukarra" className="ak-back" aria-label="Back to Cukarra">
        <ArrowLeft aria-hidden="true" />
        <span>Cukarra</span>
      </SpookyLink>

      <header className="ak-cukarra-banner">
        <h1 className="sr-only">Cukarra — {section.title}</h1>
        <div className="ak-banner-fog" aria-hidden="true" />
        <Cobweb className="ak-web ak-web-left" />
        <Cobweb className="ak-web ak-web-right" />
        <div className="ak-spider ak-spider-1" aria-hidden="true">
          <Spider className="ak-spider-svg" />
        </div>
      </header>

      <div className="ak-cukarra-emblem">
        <CukarraEmblem className="ak-cukarra-emblem-svg" />
        <OrbitingBats />
      </div>

      <CukarraRail slug={section.slug} />

      <main className="ak-category-main">
        <MenuTabs tabs={section.tabs} defaultTab={section.defaultTab} label={`${section.title} sections`} />
        <CukarraPager slug={section.slug} />
      </main>

      <BackToTop />
      <PortalReveal />
    </div>
  );
}
