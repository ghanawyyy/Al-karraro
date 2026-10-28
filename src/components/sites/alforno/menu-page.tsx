import "@fontsource/creepster/400.css";
import "@fontsource/im-fell-english/400.css";
import "./alforno.css";

import Image from "next/image";
import { BrewingBox } from "./brewing-box";
import { categoryIcons } from "./category-icons";
import { HauntLayer } from "./haunt-layer";
import { KarraroLogo } from "./karraro-logo";
import { MenuFooter } from "./menu-footer";
import { menuCategories } from "./menu-data";
import { PortalReveal } from "./portal-reveal";
import { SpookyLink } from "./spooky-link";
import { Cobweb, JackOLantern, Spider } from "./spooky-symbols";

const spiders = ["ak-spider-1", "ak-spider-2"];

export function MenuPage() {
  return (
    <div className="ak-page">
      <div className="ak-bg" aria-hidden="true" />
      <div className="ak-photo" aria-hidden="true">
        <Image src="/sites/alforno/karraro-photo.jpg" alt="" fill priority sizes="100vw" />
      </div>
      <HauntLayer />

      <main className="page-main">
        <Cobweb className="ak-web ak-web-left" />
        <Cobweb className="ak-web ak-web-right" />
        {spiders.map((name) => (
          <div key={name} className={`ak-spider ${name}`} aria-hidden="true">
            <Spider className="ak-spider-svg" />
          </div>
        ))}

        <div className="container">
          <div className="logo">
            <KarraroLogo className="ak-logo" />
          </div>
          <div className="subtitle">
            <JackOLantern className="ak-pumpkin" />
            <b>Your Gourmet Experience</b>
            <JackOLantern className="ak-pumpkin" />
          </div>
          <nav className="menu-options" aria-label="Menu categories">
            {menuCategories
              .filter((category) => !category.hidden)
              .map((category) => {
                const Icon = categoryIcons[category.id];
                const label = (
                  <h2>
                    <Icon className="ak-category-icon" aria-hidden="true" />
                    <span>{category.title}</span>
                  </h2>
                );
                return category.slug ? (
                  <SpookyLink key={category.id} href={`/${category.slug}`} className="menu-box">
                    {label}
                  </SpookyLink>
                ) : (
                  <BrewingBox key={category.id} title={category.title}>
                    {label}
                  </BrewingBox>
                );
              })}
          </nav>
        </div>
      </main>

      <MenuFooter />
      <PortalReveal />
    </div>
  );
}
