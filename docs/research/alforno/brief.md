# Al Forno Gourmet menu → "Al Karraro" Halloween edition

## Source
- URL: https://alfornogourmet.com/menu/ (page title "AL FORNO GOURMET - VERDUN")
- The host was blocked by the build session's network policy, so the clone was built from a
  Chrome "Save as MHTML" snapshot of the page, saved 2026-10-28.
- Reference screenshots: `docs/design-references/alforno/`.

## Route map
| Source | Local | Files |
| --- | --- | --- |
| `/menu/` | `/` | `src/app/page.tsx`, `src/components/sites/alforno/*` |

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

## Known gaps
- Category boxes do not navigate: the saved snapshot strips their `onclick` targets, and the category
  pages could not be fetched.
- The Lore webfont (`LORE-Regular.ttf`) was not in the snapshot; IM Fell English stands in.
