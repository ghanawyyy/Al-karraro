import type { LucideIcon, LucideProps } from "lucide-react";
import {
  CakeSlice,
  Candy,
  Coffee,
  CookingPot,
  Drumstick,
  EggFried,
  Fish,
  Hamburger,
  Martini,
  Pizza,
  Salad,
  ShoppingBag,
} from "lucide-react";
import type { ComponentType } from "react";
import type { MenuCategoryId } from "./menu-data";

type IconProps = Pick<LucideProps, "className" | "aria-hidden">;

// Lucide has no cigar or hookah, so these follow its 24px grid and 2px round strokes.
function CigarIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 13h15.5a2 2 0 0 1 0 4H3z" />
      <path d="M6 13v4" />
      <path d="M13 13v4" />
      <path d="M15.5 13v4" />
      <path d="M4 10c1-1 1-2 0-3s-1-2 0-3" />
      <path d="M8 10c1-1 1-2 0-3" />
    </svg>
  );
}

function HookahIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M10 2h4l-.5 3h-3z" />
      <path d="M8.5 7h7" />
      <path d="M12 7v8" />
      <path d="M10 15h4l2.2 2.4a2.8 2.8 0 0 1-2 4.6H9.8a2.8 2.8 0 0 1-2-4.6z" />
      <path d="M14 11c3.5 0 6 1 6 4.5V20" />
      <path d="M18.5 20h3" />
    </svg>
  );
}

export const categoryIcons: Record<MenuCategoryId, LucideIcon | ComponentType<IconProps>> = {
  breakfast: EggFried,
  "salads-mezza": Salad,
  "burgers-sandwiches": Hamburger,
  "grill-shawarma": Drumstick,
  "daily-dish": CookingPot,
  italian: Pizza,
  sushi: Fish,
  dessert: CakeSlice,
  kids: Candy,
  drinks: Martini,
  shisha: HookahIcon,
  "take-away-only": ShoppingBag,
  "sucara-coffee-shop": Coffee,
  "cigar-lounge": CigarIcon,
};
