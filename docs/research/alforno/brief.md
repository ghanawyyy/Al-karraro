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

Menu data for these pages lives in `src/components/sites/alforno/category-menus.ts` (extracted from the
saved snapshots; every tab's item count matches the source's `data-count`). Kids,
Suc'ara Coffee Shop and Cigar Lounge are not cloned yet and show a "still brewing" toast.

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

## Added navigation
- Category rail under each banner (scrolls on phones, wraps on wide screens) and previous/next links
  under each price list (`category-nav.tsx`); both use the tap transition.

## Motion
- Tap a category: pumpkin pops at the tap point, bats scatter, a witch swoops across, a portal closes
  over the screen and the pumpkin moves to the center (`spooky-link.tsx`).
- Next page: the pumpkin bursts and the portal opens (`portal-reveal.tsx`).
- Ambient: witch crossing the moon, phasing ghosts with glowing eyes, candle-lit jack-o'-lanterns,
  two soft lightning flashes every 11s (`haunt-layer.tsx`, `haunt.css`).
- `prefers-reduced-motion` turns off all of it and links navigate immediately.

## Known gaps
- Kids, Suc'ara Coffee Shop and Cigar Lounge still need their saved pages.
- The real Drinks banner photo still needs to be saved and swapped in.
- The Lore webfont (`LORE-Regular.ttf`) was not in the snapshot; IM Fell English stands in.
