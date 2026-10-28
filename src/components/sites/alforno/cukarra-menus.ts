import type { MenuTab } from "./category-menus";

export interface CukarraSection {
  slug: string;
  title: string;
  defaultTab: string;
  tabs: MenuTab[];
}

// Extracted from saved snapshots of alfornogourmet.com/menu/sucara/<slug>/ (2026-10-28). Prices are stored
// as bare numbers with a CSS "$" suffix there ("4", "7.5", "4,5"); they are written out as "$4.00" here.
// "Alforno Specialties" was renamed; pages without filters (or opening on "all") start on their first list.
export const cukarraSections: CukarraSection[] = [
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
  {
    slug: "beverages",
    title: "Beverages",
    defaultTab: "soft-drinks",
    tabs: [
      {
        id: "soft-drinks",
        label: "Soft Drinks",
        items: [
          { title: "Water Small", price: "$1.50" },
          { title: "St Pellegrino 330 ML", price: "$3.50" },
          { title: "Pepsi", price: "$2.50" },
          { title: "Energy Drink", price: "$4.50" },
          { title: "Mirinda", price: "$2.50" },
          { title: "Diet 7up", price: "$2.50" },
          { title: "7up", price: "$2.50" },
          { title: "Diet Pepsi", price: "$2.50" },
        ],
      },
      {
        id: "juices",
        label: "Juices",
        items: [
          { title: "Lemonade", price: "$3.00" },
          { title: "Strawberry", price: "$4.00" },
          { title: "Cocktail", price: "$4.00", description: "Strawberry, Banana, Milk" },
          { title: "Mango", price: "$4.50" },
          { title: "Pomegrenate", price: "$5.50" },
          { title: "Orange", price: "$3.50" },
          { title: "Frozen lemonade", price: "$5.00" },
        ],
      },
      {
        id: "mocktails",
        label: "Mocktails",
        items: [
          { title: "Hibiscus Iced Tea", price: "$4.50" },
          { title: "Lemon Iced Tea", price: "$4.50" },
          { title: "Peach Iced Tea", price: "$4.50" },
        ],
      },
      {
        id: "smoothies",
        label: "Smoothies",
        items: [
          { title: "Classic Mango", price: "$7.00" },
          { title: "Classic Strawberry", price: "$6.00" },
          { title: "Mango Passion", price: "$8.00" },
          { title: "Strawberry Lychee", price: "$7.00" },
          { title: "Forest Fruits", price: "$7.00" },
        ],
      },
      {
        id: "milkshakes",
        label: "Milkshakes",
        items: [
          { title: "Classics Vanilla", price: "$7.00" },
          { title: "Classics Chocolate", price: "$7.00" },
          { title: "Classics Strawberry", price: "$7.00" },
          { title: "Lotus Salted Caramel", price: "$6.00" },
        ],
      },
      {
        id: "cold-coffee",
        label: "Cold Coffee",
        items: [
          { title: "Classic Frappé Original", price: "$5.00" },
          { title: "Classic Frappé Mocha", price: "$5.00" },
          { title: "Classic Frappé Caramel", price: "$5.00" },
          { title: "Classic Frappé White", price: "$5.00" },
          { title: "Mocha Tiramisu", price: "$6.00" },
          { title: "Iced Mocha", price: "$5.00" },
          { title: "Iced Latte", price: "$5.00" },
          { title: "Iced Matcha", price: "$5.00" },
          { title: "Iced Spanish Latte", price: "$5.00" },
          { title: "White Mocha", price: "$5.00" },
          { title: "Macchiato", price: "$5.00" },
          { title: "Toffee Nut Frappé", price: "$5.00" },
        ],
      },
      {
        id: "hot-coffee",
        label: "Hot Coffee",
        items: [
          { title: "Espresso", price: "$2.50" },
          { title: "Espresso Decaf", price: "$3.00" },
          { title: "Doppio (Double Espresso)", price: "$3.50" },
          { title: "Americano", price: "$4.00" },
          { title: "Cappuccino", price: "$4.50" },
          { title: "Latte", price: "$4.00" },
          { title: "Flat White", price: "$4.00" },
          { title: "Spanish Latte", price: "$5.00" },
          { title: "Caramel Macchiato", price: "$5.00" },
          { title: "Hot Chocolate", price: "$5.50" },
          { title: "Hot Matcha", price: "$5.50" },
          { title: "Tea Selection", price: "$2.20" },
          { title: "White Coffee", price: "$2.50" },
          { title: "Add On", description: "extra flavor, add syrup, sugar free syrup, extra espresso shot" },
          { title: "Macchiato", price: "$5.00" },
          { title: "White Mocha", price: "$5.00" },
          { title: "Pumpkin Latte", price: "$6.00" },
          { title: "Toffee Nut Latte", price: "$6.00" },
        ],
      },
      {
        id: "affogato",
        label: "Affogato",
        items: [
          { title: "Vanilla Espresso Affogato", price: "$5.50" },
          { title: "Caramel Espresso Affogato", price: "$6.50" },
        ],
      },
      {
        id: "add-on-extra-flavors",
        label: "Add On Extra Flavors",
        items: [
          { title: "Add Vanilla Syrup", price: "$1.00" },
          { title: "Add Hazelnut Syrup", price: "$1.00" },
          { title: "Add Caramel Syrup", price: "$1.00" },
          { title: "Sugar Free Vanilla Syrup", price: "$1.00" },
          { title: "Sugar Free Caramel Syrup", price: "$1.00" },
          { title: "Extra Espresso Shot", price: "$1.50" },
          { title: "Extra Milk", price: "$1.50" },
          { title: "Extra Oat Milk", price: "$2.50" },
          { title: "Extra Soya Milk", price: "$2.50" },
          { title: "Extra Almond Milk", price: "$2.50" },
        ],
      },
    ],
  },
  {
    slug: "frisco-swirls",
    title: "Frisco & Swirls",
    defaultTab: "frisco",
    tabs: [
      {
        id: "frisco",
        label: "Frisco",
        items: [
          { title: "Strawberry Mint – 250 ml", price: "$3.00" },
          { title: "Lemonade – 250 ml", price: "$3.00" },
          { title: "Cola – 250 ml", price: "$3.00" },
          { title: "Mango Passion Fruit – 250 ml", price: "$3.00" },
          { title: "Passion Fruit – 250 ml", price: "$3.00" },
          { title: "Strawberry Lychee – 250 ml", price: "$3.00" },
          { title: "Sweet Melon – 250 ml", price: "$3.00" },
          { title: "Watermelon – 250 ml", price: "$3.00" },
        ],
      },
      {
        id: "sluches-fresh-fruits",
        label: "Sluches Fresh Fruits",
        items: [
          { title: "Mango Passion – 250 ml", price: "$4.00" },
          { title: "Strawberry – 250 ml", price: "$4.00" },
        ],
      },
      {
        id: "swirls",
        label: "Swirls",
        items: [
          { title: "Matcha Swirl – 250 ml", price: "$4.50" },
          { title: "Toffee Nut Swirl – 250 ml", price: "$4.50" },
          { title: "Cookies & Cream Swirl – 250 ml", price: "$4.50" },
        ],
      },
    ],
  },
  {
    slug: "ice-cream",
    title: "Ice Cream",
    defaultTab: "all",
    tabs: [
      {
        id: "all",
        label: "Ice Cream",
        items: [
          { title: "Ice Cream 1 Scoop", price: "$2.09" },
          { title: "Pistachio Ice Cream 1 Scoop", price: "$3.30" },
          { title: "Lemon Glacée", price: "$6.60", description: "sugar free jars" },
          { title: "Passion Fruit Glacée", price: "$6.60", description: "sugar free jars" },
          { title: "Pink Grapefruit Glacée", price: "$6.60", description: "sugar free jars" },
          { title: "Dark Chocolate Glacée", price: "$6.60", description: "sugar free jars" },
          { title: "Vanilla Glacée", price: "$6.60", description: "sugar free jars" },
          { title: "Watermelon Glacée", price: "$6.60", description: "sugar free jars" },
        ],
      },
    ],
  },
];

export function getCukarraSection(slug: string) {
  return cukarraSections.find((section) => section.slug === slug);
}
