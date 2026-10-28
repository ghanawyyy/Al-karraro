import type { MenuTab } from "./category-menus";

export interface SucaraSection {
  slug: string;
  title: string;
  defaultTab: string;
  tabs: MenuTab[];
}

// Extracted from saved snapshots of alfornogourmet.com/menu/sucara/<slug>/ (2026-10-28). Prices are stored
// as bare numbers with a CSS "$" suffix there ("4", "7.5"); they are written out as "$4.00" here.
// "Alforno Specialties" was renamed; pages without filters (or opening on "all") start on their first list.
export const sucaraSections: SucaraSection[] = [
  {
    slug: "food-bites",
    title: "Food Bites",
    defaultTab: "tartines",
    tabs: [
      {
        id: "tartines",
        label: "Tartines",
        items: [
          {
            title: "Labneh Tartine",
            price: "$6.00",
            description: "Pain de mie, labneh mixed with pesto, cherry tomato, cucumber, olives, fresh mint.",
          },
          {
            title: "Halloumi Pesto Tartine",
            price: "$10.00",
            description: "Ciabatta cereal, pesto spread, halloumi cheese, sundried tomato, wild rocket.",
          },
        ],
      },
      {
        id: "sandwiches",
        label: "Sandwiches",
        items: [
          {
            title: "Smoked Salmon & Herb Tartine",
            price: "$17.00",
            description: "Batard bread, smoked salmon, avocado, cream cheese, capers, fresh herbs, citrus scent.",
          },
          {
            title: "Tuna Avocado",
            price: "$10.00",
            description: "Tuna with avocado, iceberg, sun-dried tomatoes on multigrain ciabatta; served with mixed arugula salad.",
          },
          {
            title: "Brie Sandwich",
            price: "$10.00",
            description: "Brioche with brie, glazed onion, mushroom; side of side salad.",
          },
          {
            title: "Truffle Chicken Supreme",
            price: "$11.00",
            description: "Grilled chicken with mushrooms and truffle provolone; wild arugula; shoestring potatoes.",
          },
          {
            title: "Beef & Cheddar Melt Sandwich",
            price: "$13.00",
            description: "Tenderloin beef Steak, Emmental & cheddar, glazed onion, Chipotle mayo on sweet bread; shoestring potatoes.",
          },
        ],
      },
      {
        id: "savory-croissants",
        label: "Savory Croissants",
        items: [
          {
            title: "Salmon Croissant",
            price: "$13.00",
            description: "Croissant filled with smoked salmon, cream cheese, fresh dill, avocado, and capers",
          },
          {
            title: "Turkey & Cheese Croissant",
            price: "$10.00",
            description: "Smoked turkey, Emmental cheese, fresh rucola, and a hint of ranch dip.",
          },
          {
            title: "Scrambled Eggs Croissants",
            price: "$7.50",
            description: "Croissant stuffed with creamy scrambled eggs, Emmental topped with chives and herbs",
          },
        ],
      },
    ],
  },
  {
    slug: "salads",
    title: "Salads",
    defaultTab: "all",
    tabs: [
      {
        id: "all",
        label: "Salads",
        items: [
          {
            title: "Caesar Salad",
            price: "$9.00",
            description: "Grilled chicken breast over crisp lettuce, topped with parmesan, crunchy croutons, and classic Caesar dressing.  Add chicken $3.50 | Add shrimp $5.50",
          },
          {
            title: "Rocket Salad",
            price: "$11.00",
            description: "Fresh Rocca mixed with beetroot, belghari cheese, walnut and Lemon dressing.",
          },
          {
            title: "Shrimp & Quinoa Symphony",
            price: "$14.00",
            description: "Tricolor quinoa, shrimp, cherry tomatoes, avocado, capsicum, walnuts, pomegranate, arugula, lemon honey vinaigrette.",
          },
          {
            title: "Smoked Salmon Citrus Garden",
            price: "$20.00",
            description: "Mixed greens, smoked salmon, avocado, orange segment, citrus dressing.",
          },
        ],
      },
    ],
  },
  {
    slug: "sushi",
    title: "Sushi",
    defaultTab: "appetizers-sushi",
    tabs: [
      {
        id: "appetizers-sushi",
        label: "Appetizers",
        items: [
          { title: "Edamame", price: "$5.00" },
          { title: "Crab Salad", price: "$9.00" },
        ],
      },
      {
        id: "sushi-sets",
        label: "Sushi Sets",
        items: [
          { title: "Orange Rush Set – 8 pcs", price: "$13.00", description: "Flying Salmon, tobiko crazy." },
          {
            title: "Fusion Royale Set – 12 pcs",
            price: "$18.00",
            description: "Flying avocado, Tobiko Shrimp, Sesame salmon",
          },
          {
            title: "Sushi Mosaic set – 16 pcs",
            price: "$20.00",
            description: "Crispy crazy, Sesame California, Tobiko salmon, Tempura special roll",
          },
        ],
      },
    ],
  },
  {
    slug: "viennoiserie",
    title: "Viennoiserie",
    defaultTab: "chaussons",
    tabs: [
      {
        id: "chaussons",
        label: "Chaussons",
        items: [
          { title: "Chaussons Berries", price: "$3.85" },
          { title: "Chaussons Chocolate", price: "$2.75" },
          { title: "Chaussons Fruits", price: "$2.75" },
        ],
      },
      {
        id: "croissant",
        label: "Croissant",
        items: [
          { title: "Croissant Nature", price: "$2.00" },
          { title: "Croissant Thyme", price: "$2.50" },
          { title: "Croissant Cheese", price: "$3.00" },
          { title: "Croissant Chocolate", price: "$3.00" },
          { title: "Croissant Almond", price: "$4.00" },
          { title: "Croissant Pistachio", price: "$5.00" },
          { title: "Croissant Brown Plain", price: "$2.42" },
          { title: "Croissant Brown Thyme", price: "$2.42" },
          { title: "Croissant Brown cheese", price: "$3.08" },
        ],
      },
      {
        id: "alforno-specialties",
        label: "Al Karraro Specialties",
        items: [
          { title: "Cruffin", price: "$2.42" },
          { title: "Croissant With Cookies", price: "$2.42" },
          { title: "Croissant Choco Almond", price: "$3.63" },
          { title: "Double Almond Croissant", price: "$4.18" },
          { title: "Croissant Choco Hazelnut", price: "$4.40" },
          { title: "Double Hazelnut Croissant", price: "$4.18" },
          { title: "Croissant Double Cheese", price: "$2.64" },
          { title: "Croissant Kunafa Pistachio", price: "$4.84" },
          { title: "Maritozzi Lotus", price: "$2.42" },
          { title: "Maritozzi Oreo", price: "$2.42" },
          { title: "Maritozzi with Cream", price: "$2.42" },
          { title: "Maritozzi Pistachio", price: "$3.30" },
          { title: "Supreme Croissant Plain", price: "$2.30" },
          { title: "Supreme Choco Almond", price: "$3.30" },
          { title: "Supreme Chocolate", price: "$3.30" },
        ],
      },
      {
        id: "donuts",
        label: "Donuts",
        items: [
          { title: "Donuts Plain", price: "$1.82" },
          { title: "Donuts Blueberry", price: "$2.42" },
          { title: "Donuts Chocolate", price: "$2.42" },
          { title: "Donuts Stuffed Creme Patissiere", price: "$2.42" },
          { title: "Donuts Stuffed Lotus", price: "$2.42" },
          { title: "Donuts Stuffed Oreo", price: "$2.42" },
        ],
      },
    ],
  },
  {
    slug: "cakes",
    title: "Cakes",
    defaultTab: "all",
    tabs: [
      {
        id: "all",
        label: "Cakes",
        items: [
          { title: "Baba Au Rhum", price: "$4.00" },
          { title: "Creme Brulee", price: "$5.00" },
          { title: "Fondant au Chocolat", price: "$4.20" },
          { title: "Fudge Chocolate", price: "$4.00" },
          { title: "Lazy Cake", price: "$4.00" },
          { title: "Mageuve", price: "$4.00" },
          { title: "Opera Cake", price: "$4.00" },
          { title: "Oreo Cake", price: "$4.00" },
          { title: "Fraisier", price: "$4.00" },
          { title: "Honey Cake", price: "$4.00" },
          { title: "Lotus Cake", price: "$4.00" },
          { title: "Mille Feuille Moderne", price: "$4.00" },
          { title: "Montebello", price: "$4.00" },
          { title: "Red Velvet", price: "$4.00" },
          { title: "Swiss Roll", price: "$4.00" },
          { title: "Macaron Assorted by pc", price: "$1.32" },
          { title: "Cheese Cake", price: "$4.00" },
          { title: "Cheese Cake Lotus", price: "$4.00" },
          { title: "Cheese Cake Oreo", price: "$4.00" },
          { title: "Cheese Cake San Sebastian", price: "$4.20" },
          { title: "Cortina Chocolate Cake", price: "$4.00" },
          { title: "Cortina Vanilla Cake", price: "$4.00" },
          { title: "Eclair Caramel", price: "$3.50" },
          { title: "Eclair Chocolat", price: "$3.50" },
          { title: "Eclair Fraise", price: "$3.50" },
          { title: "Eclair Pistachio", price: "$4.00" },
          { title: "Eclair Vanille", price: "$3.50" },
          { title: "Foret Blanche", price: "$4.00" },
          { title: "Foret Noire", price: "$4.00" },
          { title: "Tarte Exotique", price: "$4.00" },
          { title: "Tarte Fraises", price: "$4.00" },
          { title: "Tarte Mangue", price: "$4.00" },
          { title: "Tiramisu Cup", price: "$4.00" },
          { title: "Trois Chocolat Cup", price: "$4.00" },
          { title: "Tarte Exotique", price: "$4.00" },
        ],
      },
    ],
  },
];

export function getSucaraSection(slug: string) {
  return sucaraSections.find((section) => section.slug === slug);
}
