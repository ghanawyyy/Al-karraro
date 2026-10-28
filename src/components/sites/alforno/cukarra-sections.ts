import type { LucideIcon } from "lucide-react";
import { CakeSlice, Coffee, Croissant, Fish, IceCreamBowl, IceCreamCone, Salad, Sandwich } from "lucide-react";
import type { NavLink } from "./category-nav";

// Order and labels copied from alfornogourmet.com/menu/sucara/ (saved 2026-10-28).
// `slug` is set once that section's page is cloned (source: /menu/sucara/<slug>/).
export const cukarraLanding: { title: string; icon: LucideIcon; slug?: string }[] = [
  { title: "Food Bites", icon: Sandwich, slug: "food-bites" },
  { title: "Salads", icon: Salad, slug: "salads" },
  { title: "Sushi", icon: Fish, slug: "sushi" },
  { title: "Viennoiserie", icon: Croissant, slug: "viennoiserie" },
  { title: "Cakes", icon: CakeSlice, slug: "cakes" },
  { title: "Beverages", icon: Coffee },
  { title: "Frisco & Swirls", icon: IceCreamBowl },
  { title: "Ice Cream", icon: IceCreamCone },
];

export const cukarraLinks: NavLink[] = cukarraLanding
  .filter((section) => section.slug)
  .map((section) => ({ href: `/cukarra/${section.slug}`, title: section.title, icon: section.icon }));
