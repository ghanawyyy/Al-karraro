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
  | "cukarra-coffee-shop"
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
  { id: "kids", title: "Kids", slug: "kids" },
  { id: "drinks", title: "Drinks", slug: "drinks" },
  { id: "shisha", title: "Shisha", slug: "shisha" },
  { id: "take-away-only", title: "Take Away Only", hidden: true },
  { id: "cukarra-coffee-shop", title: "Cukarra Coffee Shop", slug: "cukarra" },
  { id: "cigar-lounge", title: "Cigar Lounge", slug: "cigar-lounge" },
];

export const branches = [
  { name: ".KHALDEH.", address: "Al Oumara Bldg . Khaldeh Main Road" },
  { name: ".VERDUN.", address: "Rachid Karame Street . Verdun Road" },
];

export const appStoreUrl = "https://marketing.suppy.app/?cp=25Z17C15T54B05Z";

// Replaces the source's WhatsApp "81 233 331" and hotline "1656".
export const whatsappNumber = "+961 81 732 183";
export const whatsappUrl = "https://wa.me/96181732183";
export const hotline = "STFU";

// Replaces the source's "Copyright© Worldfood 2026"; also signs the "ghanawyyy × Al Karraro" collab line.
export const owner = "ghanawyyy";
