import "@fontsource/creepster/400.css";
import "@fontsource/im-fell-english/400.css";
import "@fontsource/questrial/400.css";
import "./alforno.css";
import "./category.css";
import "./sucara.css";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { BrewingBox } from "./brewing-box";
import { HauntLayer } from "./haunt-layer";
import { PortalReveal } from "./portal-reveal";
import { SpookyLink } from "./spooky-link";
import { sucaraLanding } from "./sucara-sections";

/** Source: the Suc'ara landing page — its own lilac pattern, logo and filled boxes, and no footer. */
export function SucaraPage() {
  return (
    <div className="ak-page ak-category-page ak-sucara">
      <div className="ak-sucara-bg" aria-hidden="true" />
      <HauntLayer />

      <SpookyLink href="/" className="ak-back" aria-label="Back to the menu">
        <ArrowLeft aria-hidden="true" />
        <span>Menu</span>
      </SpookyLink>

      <main className="ak-sucara-main">
        <div className="container">
          <div className="logo">
            <Image
              src="/sites/alforno/sucara/sucara-logo-spooky.png"
              alt="Suc'ara Artisan Confections"
              width={501}
              height={135}
              priority
            />
          </div>
          <h1 className="sr-only">Suc&apos;ara Coffee Shop</h1>
          <nav className="menu-options" aria-label="Suc'ara menu">
            {sucaraLanding.map(({ title, icon: Icon, slug }) => {
              const label = (
                <h2>
                  <Icon className="ak-category-icon" aria-hidden="true" />
                  <span>{title}</span>
                </h2>
              );
              return slug ? (
                <SpookyLink key={title} href={`/sucara/${slug}`} className="menu-box">
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
