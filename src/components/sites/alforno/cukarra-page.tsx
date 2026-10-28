import "@fontsource/creepster/400.css";
import "@fontsource/im-fell-english/400.css";
import "@fontsource/cinzel/400.css";
import "@fontsource/pinyon-script/400.css";
import "@fontsource/questrial/400.css";
import "./alforno.css";
import "./category.css";
import "./cukarra.css";

import { ArrowLeft } from "lucide-react";
import { BrewingBox } from "./brewing-box";
import { CukarraWordmark, OrbitingBats } from "./cukarra-brand";
import { HauntLayer } from "./haunt-layer";
import { PortalReveal } from "./portal-reveal";
import { SpookyLink } from "./spooky-link";
import { cukarraLanding } from "./cukarra-sections";
import { Cobweb, Spider } from "./spooky-symbols";

const spiders = ["ak-spider-1", "ak-spider-2"];

/**
 * Source: the Suc'ara landing page (alfornogourmet.com/menu/sucara/), rebranded as Cukarra — its own
 * petal pattern, wordmark and filled boxes, and no footer.
 */
export function CukarraPage() {
  return (
    <div className="ak-page ak-category-page ak-cukarra">
      <div className="ak-cukarra-bg" aria-hidden="true" />
      <HauntLayer />

      <SpookyLink href="/" className="ak-back" aria-label="Back to the menu">
        <ArrowLeft aria-hidden="true" />
        <span>Menu</span>
      </SpookyLink>

      <main className="ak-cukarra-main">
        <Cobweb className="ak-web ak-web-left" />
        <Cobweb className="ak-web ak-web-right" />
        {spiders.map((name) => (
          <div key={name} className={`ak-spider ${name}`} aria-hidden="true">
            <Spider className="ak-spider-svg" />
          </div>
        ))}

        <div className="container">
          <div className="logo">
            <CukarraWordmark className="ak-cukarra-wordmark" />
            <OrbitingBats />
          </div>
          <h1 className="sr-only">Cukarra Coffee Shop</h1>
          <nav className="menu-options" aria-label="Cukarra menu">
            {cukarraLanding.map(({ title, icon: Icon, slug }) => {
              const label = (
                <h2>
                  <Icon className="ak-category-icon" aria-hidden="true" />
                  <span>{title}</span>
                </h2>
              );
              return slug ? (
                <SpookyLink key={title} href={`/cukarra/${slug}`} className="menu-box">
                  {label}
                </SpookyLink>
              ) : (
                <BrewingBox key={title} title={title}>
                  {label}
                </BrewingBox>
              );
            })}
          </nav>
        </div>
      </main>

      <PortalReveal />
    </div>
  );
}
