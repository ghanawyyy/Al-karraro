import "@fontsource/creepster/400.css";
import "@fontsource/im-fell-english/400.css";
import "./alforno.css";
import "./category.css";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import type { CategoryMenu } from "./category-menus";
import { HauntLayer } from "./haunt-layer";
import { MenuFooter } from "./menu-footer";
import { MenuTabs } from "./menu-tabs";
import { PortalReveal } from "./portal-reveal";
import { SpookyLink } from "./spooky-link";

/** Source: alfornogourmet.com/menu/<slug>/ — banner header, sub-category filters, price list, footer. */
export function CategoryPage({ menu }: { menu: CategoryMenu }) {
  return (
    <div className="ak-page ak-category-page">
      <div className="ak-bg" aria-hidden="true" />
      <HauntLayer />

      <SpookyLink href="/" className="ak-back" aria-label="Back to the menu">
        <ArrowLeft aria-hidden="true" />
        <span>Menu</span>
      </SpookyLink>

      <header className="ak-banner">
        <Image src={menu.banner} alt={`Al Karraro Gourmet — ${menu.title}`} fill priority sizes="100vw" />
        <h1 className="sr-only">{menu.title}</h1>
      </header>

      <main className="ak-category-main">
        <MenuTabs tabs={menu.tabs} defaultTab={menu.defaultTab} label={`${menu.title} sections`} />
      </main>

      <MenuFooter />
      <PortalReveal />
    </div>
  );
}
