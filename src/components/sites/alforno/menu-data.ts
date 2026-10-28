export type MenuCategoryId =
  | "breakfast"
  | "salads-mezza"
  | "burgers-sandwiches"
  | "grill-shawarma"
  | "daily-dish"
  | "italian"
  | "sushi"
  | "dessert"
  | "kids"
  | "drinks"
  | "shisha"
  | "take-away-only"
  | "sucara-coffee-shop"
  | "cigar-lounge";

export interface MenuCategory {
  id: MenuCategoryId;
  title: string;
  /** Path of the cloned category page, when it exists (source: alfornogourmet.com/menu/<slug>/). */
  slug?: string;
  /** The live site hides this box with `.menu-box[onclick*="take-away-only"] { display: none }`. */
  hidden?: boolean;
}

// Order and labels copied from alfornogourmet.com/menu/ (saved 2026-10-28).
export const menuCategories: MenuCategory[] = [
  { id: "breakfast", title: "Breakfast", slug: "breakfast" },
  { id: "salads-mezza", title: "Salads & Mezza", slug: "salads-mezza" },
  { id: "burgers-sandwiches", title: "Burgers & Sandwiches", slug: "burgers-sandwiches" },
  { id: "grill-shawarma", title: "Grill, Shawarma & More", slug: "3al-lebnene" },
  { id: "daily-dish", title: "Daily Dish", slug: "daily-dish" },
  { id: "italian", title: "Italian", slug: "italian" },
  { id: "sushi", title: "Sushi", slug: "sushi" },
  { id: "dessert", title: "Dessert", slug: "dessert" },
  { id: "kids", title: "Kids" },
  { id: "drinks", title: "Drinks", slug: "drinks" },
  { id: "shisha", title: "Shisha", slug: "shisha" },
  { id: "take-away-only", title: "Take Away Only", hidden: true },
  { id: "sucara-coffee-shop", title: "Suc'ara Coffee Shop" },
  { id: "cigar-lounge", title: "Cigar Lounge" },
];

export const branches = [
  { name: ".KHALDEH.", address: "Al Oumara Bldg . Khaldeh Main Road" },
  { name: ".VERDUN.", address: "Rachid Karame Street . Verdun Road" },
];

export const appStoreUrl = "https://marketing.suppy.app/?cp=25Z17C15T54B05Z";
