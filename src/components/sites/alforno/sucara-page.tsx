import "@fontsource/creepster/400.css";
import "@fontsource/im-fell-english/400.css";
import "@fontsource/questrial/400.css";
import "./alforno.css";
import "./category.css";
import "./sucara.css";

import type { LucideIcon } from "lucide-react";
import { ArrowLeft, CakeSlice, Coffee, Croissant, Fish, IceCreamBowl, IceCreamCone, Salad, Sandwich } from "lucide-react";
import Image from "next/image";
import { BrewingBox } from "./brewing-box";
import { HauntLayer } from "./haunt-layer";
import { PortalReveal } from "./portal-reveal";
import { SpookyLink } from "./spooky-link";

// Order and labels copied from alfornogourmet.com/menu/sucara/ (saved 2026-10-28). Their pages aren't cloned yet.
const sucaraSections: { title: string; icon: LucideIcon }[] = [
  { title: "Food Bites", icon: Sandwich },
  { title: "Salads", icon: Salad },
  { title: "Sushi", icon: Fish },
  { title: "Viennoiserie", icon: Croissant },
  { title: "Cakes", icon: CakeSlice },
  { title: "Beverages", icon: Coffee },
  { title: "Frisco & Swirls", icon: IceCreamBowl },
  { title: "Ice Cream", icon: IceCreamCone },
];

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
            {sucaraSections.map(({ title, icon: Icon }) => (
              <BrewingBox key={title} title={title}>
                <h2>
                  <Icon className="ak-category-icon" aria-hidden="true" />
                  <span>{title}</span>
                </h2>
              </BrewingBox>
            ))}
          </nav>
        </div>
      </main>

      <PortalReveal />
    </div>
  );
}
