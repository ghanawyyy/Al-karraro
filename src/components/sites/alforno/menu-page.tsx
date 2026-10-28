import "@fontsource/creepster/400.css";
import "@fontsource/im-fell-english/400.css";
import "./alforno.css";

import Image from "next/image";
import { categoryIcons } from "./category-icons";
import { KarraroLogo } from "./karraro-logo";
import { MenuFooter } from "./menu-footer";
import { menuCategories } from "./menu-data";
import { Bat, Cobweb, Ghost, JackOLantern, Spider } from "./spooky-symbols";

const bats = ["ak-bat-1", "ak-bat-2", "ak-bat-3", "ak-bat-4"];
const spiders = ["ak-spider-1", "ak-spider-2"];

export function MenuPage() {
  return (
    <div className="ak-page">
      <div className="ak-bg" aria-hidden="true" />
      <div className="ak-photo" aria-hidden="true">
        <Image src="/sites/alforno/karraro-photo.jpg" alt="" fill priority sizes="100vw" />
      </div>

      <div className="ak-haunt" aria-hidden="true">
        <div className="ak-moon" />
        {bats.map((name) => (
          <div key={name} className={`ak-bat ${name}`}>
            <Bat className="ak-bat-svg" />
          </div>
        ))}
        <Ghost className="ak-ghost ak-ghost-left" />
        <Ghost className="ak-ghost ak-ghost-right" />
      </div>

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
          <div className="menu-options">
            {menuCategories
              .filter((category) => !category.hidden)
              .map((category) => {
                const Icon = categoryIcons[category.id];
                return (
                  <div key={category.id} className="menu-box">
                    <h2>
                      <Icon className="ak-category-icon" aria-hidden="true" />
                      <span>{category.title}</span>
                    </h2>
                  </div>
                );
              })}
          </div>
        </div>
      </main>

      <MenuFooter />
    </div>
  );
}
