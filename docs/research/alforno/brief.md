# Al Forno Gourmet menu → "Al Karraro" Halloween edition

## Source
- URL: https://alfornogourmet.com/menu/ (page title "AL FORNO GOURMET - VERDUN")
- The host was blocked by the build session's network policy, so the clone was built from a
  Chrome "Save as MHTML" snapshot of the page, saved 2026-10-28.
- Reference screenshots: `docs/design-references/alforno/`.

## Route map
| Source | Local | Files |
| --- | --- | --- |
| `/menu/` | `/` | `src/app/page.tsx`, `menu-page.tsx` |
| `/menu/breakfast/` | `/breakfast` | `src/app/[category]/page.tsx`, `category-page.tsx`, `menu-tabs.tsx` |
| `/menu/salads-mezza/` | `/salads-mezza` | same |
| `/menu/burgers-sandwiches/` | `/burgers-sandwiches` | same |
| `/menu/3al-lebnene/` (home box "Grill, Shawarma & More") | `/3al-lebnene` | same |
| `/menu/daily-dish/` | `/daily-dish` | same |
| `/menu/italian/` | `/italian` | same |
| `/menu/sushi/` | `/sushi` | same |
| `/menu/dessert/` | `/dessert` | same |
| `/menu/drinks/` | `/drinks` | same |
| `/menu/shisha/` | `/shisha` | same |
| `/menu/kids/` | `/kids` | same |
| `/menu/cigar-lounge/` | `/cigar-lounge` | same |
| `/menu/sucara/` | `/cukarra` (`/sucara` redirects) | `src/app/cukarra/page.tsx`, `cukarra-page.tsx`, `cukarra.css` |
| `/menu/sucara/<section>/` (food-bites, salads, sushi, viennoiserie, cakes, beverages, frisco-swirls, ice-cream) | `/cukarra/<section>` | `src/app/cukarra/[section]/page.tsx`, `cukarra-section-page.tsx`, `cukarra-menus.ts` |

Menu data lives in `category-menus.ts` (12 categories, 68 tabs) and `cukarra-menus.ts` (8 Cukarra
sections), extracted from the saved snapshots; every tab's item count matches what the source shows.
Every box on the menu and on the Cukarra page now opens a cloned page.

## Page structure (source)
1. Logo `Al-Forno-logo-website.png` (501×160, shown at 175px wide)
2. Subtitle "Your Gourmet Experience" — Helvetica bold, 2em / 1.5em ≤768 / 1.2em ≤480, letter-spacing 3px, line-height 28px
3. 14 category boxes, 12px gap — 2px border, 3px radius, padding 14px 30px (12/25 ≤768, 12/20 ≤480),
   h2 in Lore 1.4em, line-height 48px, letter-spacing 2px. Hover: translateY(-3px) + shadow.
   "Take Away Only" is hidden on the live site by `.menu-box[onclick*="take-away-only"] { display: none }`.
4. Footer `.af-menu-footer` — app badges (suppy.app link), Khaldeh + Verdun branches, WhatsApp 81 233 331,
   hotline 1656, "Copyright© Worldfood 2026". 3-column grid, stacks ≤1100px.
- Container width: 272px <480, 432px ≥480, 720px ≥768, 960px ≥1024, 1200px ≥1280.
- Background: `bg-scaled.jpeg` (green watercolor waves), cover, fixed.

## Requested customizations
| Request | Implementation |
| --- | --- |
| Greens → Halloween colors | Box/text green `rgb(44,52,36)` → pumpkin `#e8721c` / bone `#f3e3c3`; footer green `rgb(38,50,31)` → night `#160b1f`; background waves gradient-mapped to pumpkin/witch-purple/night (`public/sites/alforno/bg-halloween.jpg`, original kept as `bg-original.jpeg`). Brand greens inside the WhatsApp and Google Play logos were left alone. |
| Spooky symbols | Cobwebs, dangling spiders, flying bats, floating ghosts, moon, jack-o'-lanterns beside the subtitle, dripping footer edge (`spooky-symbols.tsx`). Animations stop under `prefers-reduced-motion`. |
| Title Al Forno → Al Karraro | Logo redrawn as SVG badge in the original shape (`karraro-logo.tsx`); page title "AL KARRARO GOURMET - VERDUN". |
| User photo at 35% | `public/sites/alforno/karraro-photo.jpg`, fixed full-screen layer at `opacity: 0.35`. |
| Icon per category | Lucide icons; custom cigar (Cigar Lounge) and hookah (Shisha) icons in `category-icons.tsx`. |

## Category pages (source)
- Header: `Banners*.jpg` (1920×974) with the Al Forno logo and the category name baked into the photo.
- Sub-category filters (`.menu-filter .filter`, `data-default-filter`), then one price list per filter:
  title chip + dotted leader + price chip, optional ingredients line. Burgers opens on "Beef Burgers".
- Shisha has no sub-category filters; its banner is an abstract green pattern without logo or title.
- Drinks' banner (`Banners7.jpg`, set by `.page-id-13300 .page-header` CSS) was not in the saved file.
  Stand-ins for both: the Shisha pattern gradient-mapped (orange/purple for Shisha, blood-red/purple
  for Drinks) with the badge and a Gloria Hallelujah title in the banners' hand-lettered style.
- Rebuilt with: banners graded orange/purple, the old logo covered by the Al Karraro badge, small
  napkin/box logos blurred (`public/sites/alforno/banners/`); tabs as an accessible tablist; items in
  1/2/3 columns (the source uses a single 30%-wide column); no photo layer on category pages.

## Suc'ara (different design on the source)
- Its own landing: lilac petal pattern, Suc'ara wordmark, eight filled boxes, no footer.
- Rebuilt 1:1 in layout (box geometry matches at 1440 and 390) with the pattern mapped to night purple,
  the wordmark in bone with a pumpkin apostrophe, purple boxes with pumpkin icons, and Questrial for
  ITC Avant Garde. Originals kept in `public/sites/alforno/cukarra/sucara-*-original.*`.

## Rebrand: Suc'ara → Cukarra (requested)
- Every visible "Suc'ara" is now "Cukarra"; routes moved to `/cukarra` with permanent redirects from `/sucara`.
- The wordmark and the round badge are SVGs (`cukarra-brand.tsx`): "CUKARRA / Artisan Confections" in Cinzel
  with a pumpkin "C", and a script "C" (Pinyon Script) inside a slowly spinning "taking sweet moments to
  another level" ring. Source PNGs stay in `public/sites/alforno/cukarra/sucara-*-original.*`.
- Extra motion on Cukarra pages: bats circling the wordmark/badge, a glowing wordmark, a flickering "C",
  cobwebs and dangling spiders, and fog drifting through the section banner. Drifting fog banks were also
  added to the shared scenery on every page.

## Suc'ara (Cukarra) sections
- Source: petal-pattern header (`sucara-logo-web-banner…jpg`), the 100px "S" emblem, filters and a lilac
  price list in ITC Avant Garde; the site footer is hidden on these pages (so it is left out here too).
- Rebuilt with the pattern in night purple, the emblem ring in bone with a pumpkin "S", lilac chips and
  pumpkin prices in Questrial, a Suc'ara section rail and previous/next links, and "Back to Suc'ara".
- Prices are bare numbers with a CSS "$" in the source; written as "$4.00". "Alforno Specialties" was renamed.
- All eight sections are cloned (177 items). Beverages' "Add On" entry has no price on the source; one
  Frisco price was written "4,5".

## Contact details (requested changes, every page with the footer)
- WhatsApp mark recolored pumpkin/ink, number "+961 81 732 183" linked to wa.me; hotline "STFU".

## Added navigation
- Category rail under each banner (scrolls on phones, wraps on wide screens) and previous/next links
  under each price list (`category-nav.tsx`); both use the tap transition.

## Added conveniences
- A floating jack-o'-lantern "back to top" button appears after 700px of scrolling on category and
  Cukarra section pages; switching tabs glides the list into view when a long tab list pushed it below
  the fold.

## Motion
- Tap a category: pumpkin pops at the tap point, bats scatter, a witch swoops across, a portal closes
  over the screen and the pumpkin moves to the center (`spooky-link.tsx`).
- Next page: the pumpkin bursts and the portal opens (`portal-reveal.tsx`).
- Section tabs: a ghostly fog wisp and five bats sweep the list (rightward for a later tab, leftward
  for an earlier one) while the items rise out of the fog (`menu-tabs.tsx`, `.ak-sweep*`).
- Ambient: witch crossing the moon, phasing ghosts with glowing eyes, candle-lit jack-o'-lanterns,
  two soft lightning flashes every 11s (`haunt-layer.tsx`, `haunt.css`).
- `prefers-reduced-motion` turns off all of it and links navigate immediately.

## Known gaps
- Kids and Cigar Lounge reuse Shisha's plain banner pattern on the source; they get their own palettes here.
- The real Drinks banner photo still needs to be saved and swapped in.
- The Lore webfont (`LORE-Regular.ttf`) was not in the snapshot; IM Fell English stands in.
