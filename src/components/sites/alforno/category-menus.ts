import type { MenuCategoryId } from "./menu-data";

export interface MenuItem {
  title: string;
  price?: string;
  description?: string;
}

export interface MenuTab {
  id: string;
  label: string;
  items: MenuItem[];
}

export interface CategoryMenu {
  slug: string;
  categoryId: MenuCategoryId;
  title: string;
  banner: string;
  defaultTab: string;
  tabs: MenuTab[];
}

// Extracted from saved snapshots of alfornogourmet.com/menu/<slug>/ (2026-10-28).
// Tab order, labels, item order and wording are the source's; "8.50$" was normalized to "$8.50" and
// "Alforno" in dish names was renamed to "Al Karraro"; all-caps tab labels were title-cased; bare
// prices ("10") got "$" and ".00"; Kids opens on its first tab (its source default has no items).
export const categoryMenus: CategoryMenu[] = [
  {
    slug: "breakfast",
    categoryId: "breakfast",
    title: "Breakfast",
    banner: "/sites/alforno/banners/breakfast.jpg",
    defaultTab: "oven-classics",
    tabs: [
      {
        id: "oven-classics",
        label: "Oven Classics",
        items: [
          { title: "Soujouk & Cheese", price: "$8.50" },
          { title: "Zaatar", price: "$2.00" },
          { title: "Cheese", price: "$5.00" },
          { title: "Cheese Mix", price: "$6.00", description: "Akkawi & Mozzarella" },
          { title: "Doubled Cheese & Zaatar", price: "$7.50" },
          { title: "Cocktail Zaatar & Cheese", price: "$4.00" },
          { title: "Soujouk & Cheese", price: "$8.50" },
          { title: "Turkey & Cheese", price: "$7.50" },
          { title: "Mouhamara & Cheese", price: "$4.50" },
          { title: "Halloumi", price: "$5.50" },
          { title: "Spinach Pie Large", price: "$3.50" },
          { title: "Keshek", price: "$3.50" },
          { title: "Vegetables & Cheese", price: "$4.00" },
          { title: "Mix Mortadelle", price: "$4.00" },
          { title: "Mortadelle & Cheese", price: "$5.00" },
          { title: "Kafta & Cheese", price: "$8.00" },
          { title: "Lahme Baajin", price: "$6.00" },
          { title: "Kafta", price: "$7.00" },
          { title: "Labneh", price: "$3.50" },
          { title: "Labneh & Thyme", price: "$4.00" },
          { title: "Add On Dough – Keto", price: "$2.75" },
          { title: "Add On Dough – Oats", price: "$1.50" },
          { title: "Add On Dough – Protein", price: "$1.50" },
          { title: "kashkawan", price: "$5.50" },
        ],
      },
      {
        id: "kaak-aasroune",
        label: "Kaak Aasroune",
        items: [
          { title: "Kaak Picon Small", price: "$2.50" },
          { title: "Kaak Halloumi Small", price: "$3.00" },
          {
            title: "Kaak Four Cheese",
            price: "$7.50",
            description: "A blend of halloumi and akkawi cheeses",
          },
          {
            title: "Kaak Turkey & Cheese Small",
            price: "$3.50",
            description: "kaak filled with smoked turkey and cheese",
          },
          { title: "Kaak Picon Large", price: "$5.00" },
          { title: "Kaak Halloumi Large", price: "$6.50" },
          { title: "Kaak Akkawi Small", price: "$3.00" },
          { title: "Kaak Akkawi Large", price: "$6.50" },
          { title: "Kaak Kashkaval Small", price: "$3.00" },
          { title: "Kaak Kashkaval Large", price: "$6.50" },
          {
            title: "Kaak Turkey & Cheese Large",
            price: "$6.50",
            description: "kaak filled with smoked turkey and cheese",
          },
          { title: "Extra Mayo- free", price: "$0.00" },
          { title: "Extra Cheese", price: "$2.00" },
        ],
      },
      {
        id: "french-bakery-favorites",
        label: "French Bakery Favorites",
        items: [
          {
            title: "Croissant",
            description: "Nature, Thyme, Cheese, Chocolate, Almond, Pistachio, Berries & Cream, Choco Amande",
          },
          {
            title: "Salmon Croissant",
            price: "$15.00",
            description: "Croissant filled with smoked salmon, cream cheese, fresh dill, Avocado, and capers.",
          },
          {
            title: "Turkey & Cheese Croissant",
            price: "$12.00",
            description: "Smoked turkey, Emmental cheese, fresh rucola, and a hint of  Ranch sauce.",
          },
          {
            title: "Scrambled Eggs Croissants",
            price: "$9.50",
            description: "Croissant stuffed with creamy scrambled eggs, Emmental topped with chives and herbs",
          },
          { title: "Croissant Nature", price: "$2.00" },
          { title: "Croissant Thyme", price: "$2.50" },
          { title: "Croissant Cheese", price: "$3.00" },
          { title: "Croissant Chocolate", price: "$3.00" },
          { title: "Croissant Choco Amande", price: "$5.00" },
          { title: "Croissant Almond", price: "$4.00" },
          { title: "Croissant Pistachio", price: "$5.00" },
        ],
      },
      {
        id: "viennoiserie",
        label: "Viennoiserie",
        items: [
          {
            title: "Chausson Mixed Berries",
            price: "$5.00",
            description: "Buttery pastry filled with a sweet berry.",
          },
          {
            title: "Chausson Chocolate",
            price: "$4.00",
            description: "Classic French pastry pocket with a rich chocolate filling",
          },
          {
            title: "Raisin Danish",
            price: "$3.00",
            description: "Classic swirl pastry dotted with juicy raisins",
          },
          {
            title: "Strawberry",
            price: "$4.00",
            description: "Strawberry compote swirled into a classic Danish",
          },
        ],
      },
      {
        id: "authentic-morning-mezzas",
        label: "Authentic Morning Mezzas",
        items: [
          {
            title: "Labneh Baladiye",
            price: "$4.50",
            description: "served with a drizzle of olive oil cucumber, cherry tomato, olives and mint leaves.",
          },
          {
            title: "Labneh Goat",
            price: "$8.00",
            description: "served with olive oil and fresh mint and cherry tomatoes",
          },
          {
            title: "Labneh bil Khaltah",
            price: "$6.00",
            description: "Labneh topped with a mix of walnuts, olives, tomatoes, and spring onion",
          },
          {
            title: "Kishik Bil Khalta",
            price: "$4.50",
            description: "Kishik with mixed walnuts, capsicum, onion, cherry tomato served cold",
          },
          {
            title: "Grilled Halloumi",
            price: "$7.50",
            description: "served hot, topped with olive oil, fresh mint and cherry tomato.",
          },
          { title: "Hummus", price: "$6.00" },
          {
            title: "Hummus Bil Lahme",
            price: "$11.00",
            description: "Hummus topped with spiced ground beef, almonds, finished with a drizzle of olive oil , paprika , and almonds.",
          },
          {
            title: "Hommos bil Kawarma",
            price: "$12.00",
            description: "Creamy hummus topped with lamb Kawarma and almonds",
          },
          { title: "Makdous Plate", price: "$5.00" },
          { title: "Vegetable Plate", price: "$3.00" },
        ],
      },
      {
        id: "farm-fresh-eggs-cooked-to-your-way",
        label: "Farm-Fresh Eggs Cooked to Your Way",
        items: [
          {
            title: "Sunny Side Up",
            price: "$4.00",
            description: "served with side salad and drizzle of lemon sauce",
          },
          { title: "Omelet", price: "$5.00", description: "Classic omelet with your choice of cheese" },
          {
            title: "Eggs bi Kawarma",
            price: "$10.50",
            description: "Eggs cooked with savory lamb Kawarma for an authentic Lebanese flavor",
          },
          {
            title: "Eggs with Soujouk",
            price: "$8.00",
            description: "Eggs with spicy Lebanese beef sausage",
          },
        ],
      },
      {
        id: "lebanese-specialties",
        label: "Lebanese Specialties",
        items: [
          { title: "Foul", price: "$6.50" },
          { title: "Balila", price: "$6.50" },
          {
            title: "Fatet Hummus",
            price: "$9.50",
            description: "chickpeas, crispy bread, yogurt, and tahini, finished with a buttery almonds topping.",
          },
          {
            title: "Fatet Batenjen",
            price: "$10.00",
            description: "Baked eggplant, chickpeas, yogurt, and crispy bread, layered and topped with almonds",
          },
          {
            title: "Fatet Al Karraro bil Karaz",
            price: "$15.00",
            description: "Beef Tenderloin, Chickpeas, crispy bread, yogurt, and tahini, drizzled with tangy cherry sauce, and finished with toasted almonds.",
          },
          { title: "Mousabaha", price: "$7.00" },
          { title: "Malisiye", price: "$8.50" },
          {
            title: "served with vegetable plate, for foul, balila, mousabaha, malisiye, all types of fatteh.",
          },
        ],
      },
      {
        id: "sourdough",
        label: "Sourdough",
        items: [
          {
            title: "Sourdough Zaatar Manakish",
            price: "$3.50",
            description: "Authentic zaatar blend mixed with virgin olive oil, topped with labneh over our Sourdough base and baked to golden perfection",
          },
          {
            title: "Sourdough Cheese Manakish",
            price: "$5.00",
            description: "Melted akkawi cheese top on our sourdough, finished with a touch of sesame seeds, creamy, and irresistible",
          },
          {
            title: "Sourdough Mixed Cheese Manakish",
            price: "$7.00",
            description: "A blend of akkawi, halloumi, kashkaval, and mozzarella cheeses, melted together over our signature sourdough for the ultimate cheesy experience",
          },
          {
            title: "Sourdough Turkey & Cheese Manakish",
            price: "$8.00",
            description: "Smoked turkey breast paired with mozzarella cheese, baked on our rustic sourdough base. A satisfying twist on a classic melt.",
          },
          {
            title: "Sourdough Eggs with Kawarma Manakish",
            price: "$8.50",
            description: "Eggs and savory kawarma layered on sourdough full of tradition",
          },
          {
            title: "Sourdough Karishe & Honey Manakish",
            price: "$6.00",
            description: "Fresh Lebanese karishe cheese baked on sourdough, then drizzled with pure honey and a sprinkle of walnuts. A sweet and tangy morning treat",
          },
          {
            title: "served with vegetable plate, for all types of Sourdough Manakish except the karishe one.",
          },
        ],
      },
      {
        id: "knefe",
        label: "Knefe",
        items: [
          { title: "Knefe Bil Jebne – Kaake", price: "$5.50" },
        ],
      },
      {
        id: "lebanese-deli-sandwich",
        label: "Lebanese Deli Sandwich",
        items: [
          {
            title: "Labne Makdous",
            price: "$3.00",
            description: "Labneh with traditional makdous eggplant, fresh mint, drizzled with olive oil in tannour or markouk bread",
          },
          {
            title: "Labne with Vegetables",
            price: "$3.25",
            description: "Labneh with fresh tomatoes, cucumbers, mint, olives and olive oil.",
          },
          {
            title: "Halloum with Vegetables",
            price: "$4.50",
            description: "Halloum cheese with tomatoes, cucumbers, olive paste and olive oil.",
          },
          {
            title: "Kashkawan Cheese Sandwich",
            price: "$4.50",
            description: "Kashkawan cheese with tomatoes, cucumbers, and olives.",
          },
          {
            title: "Halloum & Kashkawan Cheese Sandwich",
            price: "$6.00",
            description: "Duo of halloum and kashkawan cheeses fresh vegetables and olive oil.",
          },
          {
            title: "Bulgari Cheese Sandwich",
            price: "$4.00",
            description: "Bulgari cheese, tomatoes, cucumbers, and fresh mint, finished with olive oil.",
          },
          {
            title: "Turkey and Cheese",
            price: "$6.00",
            description: "Sliced smoked turkey with your choice of cheese, tomato, lettuce, and pickles on your favorite bread. (choices of Mozzarella or Kashkawan)",
          },
        ],
      },
    ],
  },
  {
    slug: "salads-mezza",
    categoryId: "salads-mezza",
    title: "Salads & Mezza",
    banner: "/sites/alforno/banners/salads-mezza.jpg",
    defaultTab: "salads",
    tabs: [
      {
        id: "salads",
        label: "International & Lebanese Salad Creations",
        items: [
          { title: "Fattouch", price: "$8.00" },
          { title: "Tabbouleh", price: "$6.00" },
          {
            title: "Rocket Salad",
            price: "$11.00",
            description: "Fresh rocca mixed with beetroot, belghari cheese, walnut and lemon dressing",
          },
          {
            title: "Caesar Salad",
            price: "$9.00",
            description: "Add chicken 3.5$- Add shrimp 5.5$\nGrilled chicken breast over crisp lettuce, topped with parmesan, crunchy croutons, and classic Caesar dressing.",
          },
          {
            title: "Shrimp & Quinoa Symphony",
            price: "$14.00",
            description: "Tricolor quinoa, shrimp, cherry tomatoes, avocado, capsicum, walnuts, pomegranate, arugula, lemon honey vinaigrette",
          },
          {
            title: "Smoked Salmon Citrus Garden",
            price: "$20.00",
            description: "Mixed greens, smoked salmon, avocado, orange segment, citrus dressing.",
          },
        ],
      },
      {
        id: "cold-mezza",
        label: "Classic Cold Appetizers",
        items: [
          { title: "Hummus", price: "$6.50" },
          { title: "Moutabal", price: "$6.50" },
          { title: "Muhammara", price: "$9.00" },
          { title: "Hindbeh bil Zet", price: "$8.00" },
          { title: "Grape Leaves", price: "$8.00" },
        ],
      },
      {
        id: "hot-mezza",
        label: "Savory Hot Appetizers",
        items: [
          { title: "Hummus bil Lahme", price: "$12.00" },
          { title: "Hummus bil Kawarma", price: "$12.00" },
          { title: "Batata Harra", price: "$7.00" },
          { title: "French Fries", price: "$5.00" },
          { title: "Fried Halloumi with Fig", price: "$8.00" },
          { title: "Makanek", price: "$11.00" },
          { title: "Sujuk", price: "$11.00" },
          { title: "Ras Asfour bil Karaz", price: "$16.00" },
          { title: "Ras Asfour Mtafa bi Hamoud", price: "$14.00" },
          { title: "Mousakhan Chicken (5pcs)", price: "$8.00" },
          { title: "Spinach Fatayer (5pcs)", price: "$4.50" },
          { title: "Rakakat Cheese (5pcs)", price: "$8.00" },
          { title: "Kibbeh Lahme (5pcs)", price: "$9.00" },
          { title: "Signature Batata Harra", price: "$8.50" },
          { title: "Hummus Shawarma Chicken", price: "$10.50" },
          { title: "Hummus Shawarma Beef", price: "$12.00" },
          { title: "Sambousik Meat(5 pcs)", price: "$8.00" },
        ],
      },
    ],
  },
  {
    slug: "burgers-sandwiches",
    categoryId: "burgers-sandwiches",
    title: "Burgers & Sandwiches",
    banner: "/sites/alforno/banners/burgers-sandwiches.jpg",
    defaultTab: "beef-burgers",
    tabs: [
      {
        id: "appetizers",
        label: "Appetizers",
        items: [
          {
            title: "Mozzarella Bricks",
            price: "$6.50",
            description: "Crunchy on the outside and melty inside, these mozzarella cheese sticks are served with a Honey mustard sauce.",
          },
          {
            title: "Chicken Popcorn",
            price: "$7.00",
            description: "Tender, golden-fried chicken popcorn served with your choice of ketchup or honey mustard",
          },
          {
            title: "Chicken Tenders",
            price: "$8.00",
            description: "Crispy, golden chicken tenders served with fries and your choice of ketchup or Honey mustard dipping sauce.",
          },
          {
            title: "Fritto Misto",
            price: "$15.00",
            description: "A crispy medley of fried calamari and zucchini, served with tartar and marinara sauces for dipping.",
          },
          {
            title: "Plain Nachos",
            price: "$10.00",
            description: "Crispy fried nachos accompanied by fresh salsa, and creamy sour cream.",
          },
          {
            title: "Cheese Nachos",
            price: "$13.00",
            description: "Golden fried nachos topped with a blend of three cheeses, served with salsa and sour cream.",
          },
          {
            title: "Shared Bites Platter (perfect for sharing)",
            price: "$18.00",
            description: "An assortment of curly fries, crispy chicken\ntenders, mozzarella sticks, and cheesy nachos,\nserved with sour cream, sweet chili mayo,\nhoney mustard dip, and ketchup",
          },
        ],
      },
      {
        id: "beef-burgers",
        label: "Beef Burgers",
        items: [
          {
            title: "Lebanese Burger Sandwich",
            price: "$7.50",
            description: "Classic beef burger with coleslaw, grilled onion, pickles, ketchup, mustard on a brioche bun.  Platter available for $12.50",
          },
          {
            title: "Original Burger Sandwich",
            price: "$8.50",
            description: "Beef patty with crisp lettuce, tomato, onion, dill pickles, and Al Karraro sauce, served in a soft brioche bun Platter available for $13.50",
          },
          {
            title: "Cheese Burger Sandwich",
            price: "$9.50",
            description: "Chargrilled beef patty with cheddar cheese, tomato, onion, dill pickles, and Al Karraro sauce in a brioche bun.  Platter available for $14.50",
          },
          {
            title: "Mozzarella Beef Burger Sandwich",
            price: "$10.00",
            description: "Beef patty topped with a crispy breaded mozzarella patty, lettuce, tomato, pickles, onion, and Al Karraro sauce in a brioche bun Platter available for $15.50",
          },
          {
            title: "Swiss Cheese Burger Sandwich",
            price: "$10.50",
            description: "Beef patty layered with Swiss cheese, sautéed mushrooms, caramelized onions, and Swiss sauce in a brioche bun. Platter available for $15.50",
          },
          {
            title: "Beef Bacon Burger Sandwich",
            price: "$10.50",
            description: "Chargrilled beef patty, crispy beef bacon, lettuce, caramelized onion, dill pickles, and Al Karraro sauce in a brioche bun Platter available for $15.50",
          },
          { title: "All Beef & chicken Burger platters served with fries" },
        ],
      },
      {
        id: "chicken-burgers",
        label: "Chicken Burgers",
        items: [
          { title: "All Beef & chicken Burger platters served with fries" },
          {
            title: "Grilled Chicken Burger Sandwich",
            price: "$8.50",
            description: "Grilled chicken breast with cheddar cheese, dill pickles, lettuce, tomato, and aioli sauce in a brioche bun.\n\n Platter available for $13.50",
          },
          {
            title: "Zinger Burger Sandwich",
            price: "$8.5",
            description: "Deep-fried crispy chicken filet, lettuce, dill pickles, cheddar cheese, and ranch sauce in a brioche bun  Platter available for $13.50",
          },
          {
            title: "Spicy Zinger Burger Sandwich",
            price: "$8.50",
            description: "Spicy crispy fried chicken filet, with lettuce, dill pickles, and cheddar cheese in a brioche bun.. Platter available for $13.50",
          },
          {
            title: "Mozzarella Chicken Burger",
            price: "$10.00",
            description: "Grilled chicken breast with a crispy breaded mozzarella patty, dill pickles, lettuce, aioli sauce in a brioche bun. Platter available for $15.00",
          },
        ],
      },
      {
        id: "signature-sandwich-creations",
        label: "Signature Sandwich Creations",
        items: [
          {
            title: "Cheesy Steak",
            price: "$16.00",
            description: "Grilled sirloin steak, mushroom, caramelized onions, Emmental cheese, and homemade steak sauce in fresh baguette. Served with a side house salad and French fries",
          },
          {
            title: "Real Chicken",
            price: "$15.00",
            description: "Juicy grilled chicken breast, Emmental cheese, sautéed mushrooms, fresh rucola, and a spicy aioli sauce serve in fresh baguette. Served with a side house salad and French fries.",
          },
          {
            title: "Fajitas Chicken",
            price: "$12.50",
            description: "Grilled chicken breast with onions, bell peppers, mushrooms, mozzarella cheese, and avocado mayo sauce packed in tortilla wrap or submarine for a Tex-Mex twist. Served with a side house salad and French fries.",
          },
          {
            title: "Shawarma Chicken Markouk Platter",
            price: "$14.00",
            description: "Chicken shawarma in markouk bread, served as a platter. Accompanied by pickles, garlic dip, and crispy French fries.",
          },
          {
            title: "Chicken Rotisserie Markouk Platter",
            price: "$12.50",
            description: "Rotisserie chicken in markouk bread, served as a platter. Accompanied by pickles, garlic dip, and crispy French fries.",
          },
        ],
      },
      {
        id: "irresistible-loaded-classic-fries",
        label: "Irresistible Loaded & Classic Fries",
        items: [
          { title: "French Fries", price: "$5.00" },
          { title: "Cheesy Fries", price: "$6.00" },
          { title: "Curly Fries", price: "$6.00" },
          { title: "Loaded Crispy Chicken Fries", price: "$9.00" },
          { title: "Loaded Beef Fries", price: "$10.00" },
        ],
      },
    ],
  },
  {
    slug: "3al-lebnene",
    categoryId: "grill-shawarma",
    title: "Grill, Shawarma & More",
    banner: "/sites/alforno/banners/3al-lebnene.jpg",
    defaultTab: "rotisserie-chicken-selections",
    tabs: [
      {
        id: "rotisserie-chicken-selections",
        label: "Rotisserie Chicken Selections",
        items: [
          {
            title: "Whole Rotisserie Chicken",
            price: "$18.00",
            description: "Marinated and roasted to golden perfection. Served with garlic sauce and pickles.",
          },
          {
            title: "Half Rotisserie Chicken",
            price: "$10.00",
            description: "Juicy, slow-roasted half chicken. Served with garlic sauce and pickles.",
          },
          {
            title: "Whole Rotisserie Chicken",
            price: "$22.00",
            description: "Whole roasted chicken, served with smoked rice and dakous sauce.",
          },
          {
            title: "Whole Rotisserie Buttery Chicken",
            price: "$22.00",
            description: "Whole roasted chicken, finished with fresh herbs , butter sauce served with crispy potato balls",
          },
          {
            title: "Side – Potato Lover",
            price: "$4.00",
            description: "Crispy potato, garlic sauce, special house sauce & pickles.",
          },
          { title: "Side – Rice Plate", price: "$5.00", description: "Smoked basmati rice & dakous sauce" },
          { title: "Half Rotisserie with Rice", price: "$12.00" },
        ],
      },
      {
        id: "crispy-chicken-selection",
        label: "Crispy Chicken Selection",
        items: [
          {
            title: "Regular or Spicy Golden Crispy Chicken Meal (5 pcs)",
            price: "$12.00",
            description: "Five pieces of golden, crunchy fried chicken, available regular or spicy. Served with fries, Coleslaw, pickles, one dip and soft bun.",
          },
          {
            title: "Regular or Spicy Broasted Chicken (8 pcs)",
            price: "$24.00",
            description: "Eight pieces of classic broasted chicken, available regular or spicy. Served with fries, garlic sauce, pickles, two dips and soft buns.",
          },
          {
            title: "Regular or Spicy Broasted Chicken (4 pcs)",
            price: "$12.00",
            description: "Four pieces of classic broasted chicken, available regular or spicy. Served with fries, garlic sauce, pickles, one dip and soft bun.",
          },
          { title: "Side – Fries", price: "$3.00", description: "Crispy and golden, the perfect companion." },
          { title: "Side – Pickles", price: "$0.50", description: "Crunchy, tangy, and refreshing." },
          { title: "Side – Garlic Sauce", price: "$1.00", description: "Creamy and tangy Lebanese classic." },
          { title: "Side – Melted Cheddar Cheese", price: "$1.00" },
          {
            title: "Side – Sweet Chili Mayo",
            price: "$1.00",
            description: "A perfect balance of sweetness and heat.",
          },
          { title: "Side – BBQ Sauce", price: "$1.00", description: "Smoky with a backyard BBQ vibe." },
          { title: "Side – Special House Sauce", price: "$1.00", description: "Bold with a lively kick." },
        ],
      },
      {
        id: "shawarma-express",
        label: "Shawarma Express",
        items: [
          {
            title: "Shawarma Chicken Sandwich",
            price: "$5.00",
            description: "Marinated chicken shawarma wrapped in fresh pita with garlic sauce, pickles, and fries",
          },
          {
            title: "Shawarma Chicken Platter",
            price: "$13.00",
            description: "Sliced chicken shawarma served with fries, garlic sauce, pickles, and bread",
          },
          {
            title: "Shawarma Beef Sandwich",
            price: "$6.00",
            description: "Tender beef shawarma, onions, tomatoes, pickles, and tahina sauce, wrapped in pita bread",
          },
          {
            title: "Shawarma Beef Platter",
            price: "$15.00",
            description: "Juicy beef shawarma served with fries, tahina sauce, pickles, and bread",
          },
          {
            title: "Shawarma Shaker Chicken",
            price: "$8.00",
            description: "Chicken shawarma tossed with shredded lettuce, mekti pickles, garlic sauce, and crispy potato chips.",
          },
          {
            title: "Shawarma Shaker Beef",
            price: "$11.00",
            description: "Beef shawarma with shredded lettuce, bewaz onions, mekti pickles, tomato sauce, tahina sauce, and crispy potato chips.",
          },
          {
            title: "Shawarma Beef Markouk",
            price: "$14.00",
            description: "Beef shawarma in markouk bread , served in a platter. Accompanied by pickles, tarator dip, and French fries.",
          },
        ],
      },
      {
        id: "main-course",
        label: "Main Course",
        items: [
          {
            title: "Grilled Beef Filet Tenderloin",
            price: "$22.00",
            description: "Grilled Beef fillet, served with your choice of mushroom or pepper sauce, accompanied by mashed potatoes, carrots, zucchini, and broccoli.",
          },
          {
            title: "Grilled Entrecôte (Beef)",
            price: "$18.00",
            description: "Grilled entrecôte steak, paired with mashed potatoes, carrots, broccoli, zucchini, and your choice of mushroom or pepper sauce.",
          },
          {
            title: "Ribeye Wagyu MB6 (Beef)",
            price: "$ 75.00",
            description: "premium marbled cut,grilled to perfection\nCreamy truffle mashed potatoes, sautéed string beans, garlic-butter sautéed mushrooms, and cherry tomato confit. Finished with your choice of mushroom sauce or pepper sauce.",
          },
          {
            title: "Grilled Chicken Breast",
            price: "$16.00",
            description: "Grilled chicken breast served potato balls, sweet corn, carrots, string beans, and a creamy mustard sauce.",
          },
          {
            title: "Grilled Taouk Platter",
            price: "$15.00",
            description: "Grilled chicken Taouk, served with garlic paste, pickles, and crispy French fries",
          },
          { title: "served with your choice of pepper or creamy mushroom sauce." },
        ],
      },
      {
        id: "soup",
        label: "Soup",
        items: [
          { title: "Pumpkin Soup" },
          { title: "Mushroom Soup" },
          { title: "Lentil Soup" },
          { title: "Vegetable Soup" },
          { title: "Tomato Soup" },
          { title: "Onion Soup" },
        ],
      },
    ],
  },
  {
    slug: "daily-dish",
    categoryId: "daily-dish",
    title: "Daily Dish",
    banner: "/sites/alforno/banners/daily-dish.jpg",
    defaultTab: "daily-lebanese-home-kitchen",
    tabs: [
      {
        id: "daily-lebanese-home-kitchen",
        label: "Daily Lebanese Home Kitchen",
        items: [
          {
            title: "Kebbe & Shish Barak",
            price: "$14.00",
            description: "Classic Lebanese kibbeh served with savory shish barak in a tangy yogurt sauce",
          },
          {
            title: "Koussa & Vine Leaves with Lamb Cutlets",
            price: "$18.00",
            description: "Grape leaves stuffed with rice and spices, slow-cooked with juicy lamb cutlets",
          },
          {
            title: "Oriental Chicken with Rice",
            price: "$14.00",
            description: "Seasoned chicken on aromatic Lebanese rice with toasted nuts",
          },
          {
            title: "Oriental Lamb with Rice",
            price: "$16.00",
            description: "Seasoned Lamb on aromatic Lebanese rice with toasted nuts",
          },
          {
            title: "Fish Siyadieh",
            price: "$22.00",
            description: "Lebanese-style spiced rice with fish fillets,caramelized onions, and a side of gravy and Tajin sauce",
          },
        ],
      },
      {
        id: "monday",
        label: "Monday",
        items: [
          {
            title: "Chicken Oven Potato",
            price: "$13.00",
            description: "Juicy chicken baked with golden potatoes and aromatic spices, served with vermicelli rice.",
          },
        ],
      },
      {
        id: "tuesday",
        label: "Tuesday",
        items: [
          {
            title: "Chicken Moughrabieh",
            price: "$13.00",
            description: "Traditional Lebanese moughrabieh with spiced chicken, chickpeas, and aromatic broth",
          },
        ],
      },
      {
        id: "wednesday",
        label: "Wednesday",
        items: [
          {
            title: "Roast Beef with Potato Purée & Sautéed Vegetables",
            price: "$15.00",
            description: "Oven-roasted beef slices served with potato purée and seasonal sautéed vegetables",
          },
        ],
      },
      {
        id: "thursday",
        label: "Thursday",
        items: [
          {
            title: "Malfouf Mehche with Laban",
            price: "$14.00",
            description: "Cabbage leaves stu ed with rice and meat, cooked in a tangy sauce, served with minted yogurt.",
          },
        ],
      },
      {
        id: "friday",
        label: "Friday",
        items: [
          {
            title: "Beef Stroganoff",
            price: "$16.00",
            description: "Tender beef strips simmered in a creamy mushroom cêpe sauce, served with rice or mashed potatoes.",
          },
        ],
      },
      {
        id: "saturday",
        label: "Saturday",
        items: [
          {
            title: "Chicken Creamy Pesto",
            price: "$14.00",
            description: "Grilled chicken breast topped with creamy pesto, accompanied by potato purée and sautéed vegetables",
          },
        ],
      },
      {
        id: "sunday",
        label: "Sunday",
        items: [
          {
            title: "Kebbe Bil Saniye with Laban & Cucumber",
            price: "$14.00",
            description: "Baked ground meat and bulgur pie, served with yogurt and cucumber salad",
          },
        ],
      },
    ],
  },
  {
    slug: "italian",
    categoryId: "italian",
    title: "Italian",
    banner: "/sites/alforno/banners/italian.jpg",
    defaultTab: "pizza",
    tabs: [
      {
        id: "pizza",
        label: "Wood-Fired Pizza",
        items: [
          {
            title: "Margherita",
            price: "$12.00",
            description: "Classic Neapolitan with tomato sauce, mozzarella, and fresh basil leaves.",
          },
          {
            title: "Pepperoni",
            price: "$14.00",
            description: "Zesty tomato sauce, mozzarella, and layers of beef pepperoni.",
          },
          {
            title: "Truffle Mushroom Pizza",
            price: "$18.00",
            description: "Aromatic truffle oil, mushrooms, mozzarella, and wild rucola topped with parmesan crust.",
          },
          {
            title: "Four Cheese Pizza",
            price: "$16.00",
            description: "A rich blend of mozzarella, gorgonzola, parmesan, and ricotta cheeses melted on golden dough.",
          },
          {
            title: "Veggie Garden Pizza",
            price: "$14.00",
            description: "A colorful mix of bell peppers, Zucchini, Eggplant, Mushroom, and cherry tomatoes over a tomato-mozzarella base.",
          },
          {
            title: "Seafood Pizza",
            price: "$18.00",
            description: "Shrimp, calamari, and mussels, fresh parsley, and mozzarella on a tomato sauce base topped with anchovy",
          },
          {
            title: "Quattro Stagioni Pizza",
            price: "$16.00",
            description: "Smoked turkey, mushrooms, artichokes, sundried tomato and olives",
          },
        ],
      },
      {
        id: "pasta-italian",
        label: "Pasta",
        items: [
          {
            title: "Spaghetti Pomodoro Basil",
            price: "$10.00",
            description: "Tomato sauce with fresh basil and olive oil.",
          },
          {
            title: "Penne Arrabbiata",
            price: "$10.00",
            description: "Pasta in a spicy tomato sauce with chili, garlic, and a sprinkle of fresh parsley",
          },
          {
            title: "Fettuccine Alfredo",
            price: "$13.00",
            description: "Fettuccine tossed in creamy Alfredo sauce and parmesan. Optional add-ons: grilled chicken 3.5$ or shrimp 5.5$",
          },
          {
            title: "Pesto Pasta with Grilled Vegetables",
            price: "$14.00",
            description: "Tri-color Pasta tossed in a basil pesto with a medley of grilled seasonal vegetables",
          },
          {
            title: "Seafood Pasta n Bisque Sauce",
            price: "$16.00",
            description: "Shrimp, calamari, and mussels in a creamy bisque sauce, served over pasta.",
          },
          {
            title: "Parmigiana di Melanzane (Eggplant Parmigiana)",
            price: "$10.00",
            description: "Eggplant layered with tomato sauce and melted mozzarella, finished with olive oil and herbs",
          },
        ],
      },
    ],
  },
  {
    slug: "sushi",
    categoryId: "sushi",
    title: "Sushi",
    banner: "/sites/alforno/banners/sushi.jpg",
    defaultTab: "starters",
    tabs: [
      {
        id: "starters",
        label: "Starters",
        items: [
          { title: "Edamame", price: "$5.00" },
          {
            title: "Marinated Salmon",
            price: "$18.00",
            description: "salmon, mix sesame, jalapeno, namuro sauce",
          },
          { title: "Dynamite Shrimp / 5pcs", price: "$9.50" },
        ],
      },
      {
        id: "salads-sushi-2",
        label: "Salads",
        items: [
          {
            title: "Crispy Salmon Salad",
            price: "$22.00",
            description: "Salmon, crispy , exotic sauce, shredded nori",
          },
          {
            title: "Spicy Salmon Salad",
            price: "$24.00",
            description: "Salmon, avocado, spicy sauce, orange tobiko, shredded nori",
          },
          {
            title: "Sensation Salmon Salad",
            price: "$21.00",
            description: "Salmon , Mix Sesame , Marinated sauce",
          },
          {
            title: "Crab Salad",
            price: "$9.00",
            description: "Crab sticks, lollo rosso, carrots, cucumber, orange tobiko",
          },
        ],
      },
      {
        id: "sashimi",
        label: "Sashimi (3 pcs)",
        items: [
          { title: "Salmon Sashimi", price: "$8.00" },
          { title: "Crab Sashimi", price: "$3.00" },
          { title: "Tuna Sashimi", price: "$8.00" },
          { title: "Shrimp Sashimi", price: "$4.00" },
        ],
      },
      {
        id: "sushi-2-pcs",
        label: "Sushi (2 pcs)",
        items: [
          { title: "Salmon", price: "$5.00" },
          { title: "Crab", price: "$3.00" },
          { title: "Avocado", price: "$3.00" },
          { title: "Tuna", price: "$5.00" },
          { title: "Shrimp", price: "$4.00" },
          { title: "SALMON HARMONY", price: "$18.00" },
          { title: "SunBurst", price: "$17.00" },
          { title: "skyeight", price: "$16.00" },
          { title: "zengarden", price: "$14.00" },
        ],
      },
      {
        id: "hoso-3-pcs",
        label: "Hoso (3 pcs)",
        items: [
          { title: "Salmon", price: "$5.00" },
          { title: "Tuna", price: "$4.5" },
          { title: "Crab", price: "$3.00" },
          { title: "Avocado", price: "$3.00" },
        ],
      },
      {
        id: "urakami-4-pcs",
        label: "Urakami (4 pcs)",
        items: [
          {
            title: "Crispy Phila Shrimp",
            price: "$7.50",
            description: "Spicy salmon avocado, crispy topping shrimp and philadelphia, mix sesam",
          },
          {
            title: "Crispy California",
            price: "$5.00",
            description: "Crab stick, cucumber, avocado, crispy",
          },
          { title: "Crispy Crazy", price: "$6.00", description: "Crab mix, crispy, crab mix topping" },
          {
            title: "Crispy Crazy Salmon",
            price: "$9.00",
            description: "Salmon, avocado, crispy wrap, topping crazy mix",
          },
          {
            title: "Crispy Special Mango",
            price: "$7.50",
            description: "Mango, crab sticks, salmon, crispy",
          },
          {
            title: "Crispy Volcano",
            price: "$9.00",
            description: "Tuna, avocado, crispy, spicy tuna and avo topping",
          },
          { title: "Salmon Sesame", price: "$7.00", description: "Salmon, avocado" },
          { title: "California Sesame", price: "$5.00", description: "Crab stick, cucumber, avocado" },
          { title: "Crazy Sesame", price: "$5.55", description: "Crab mix, sesame seed, crab mix topping" },
          {
            title: "Crazy California Sesame",
            price: "$5.00",
            description: "Crab stick, cucumber, avocado, crazy mix topping",
          },
          { title: "Salmon Tobiko", price: "$10.00", description: "Salmon, cheese, avocado, orange tobiko" },
          { title: "Crazy Tobiko", price: "$6.00", description: "Wrap tobico, Crab mix, topping crazy mix" },
          { title: "Shrimp Tobiko", price: "$7.00", description: "Shrimp, avocado, tobiko" },
        ],
      },
      {
        id: "special-urakami-4-pcs",
        label: "Special Urakami (4 pcs)",
        items: [
          {
            title: "Special Salmon",
            price: "$11.00",
            description: "Salmon, avocado, spicy sauce wrap salmon, avocado",
          },
          {
            title: "Triple Mango Roll",
            price: "$11.00",
            description: "Salmon, cheese,wrap crab, salmon, mango,orange tobiko, white sauce",
          },
          {
            title: "Black Ô-sake",
            price: "$9.50",
            description: "Rice, crispy, salmon, cream cheese, black tobiko, mango, crab mix, light teriyaki",
          },
          {
            title: "Double Tuna",
            price: "$8.00",
            description: "Tuna, avocado, wrap tuna jalapeno, sweet chili sauce",
          },
          { title: "Salmon Tuna Roll", price: "$9.00", description: "Salmon, avocado, wrap salmon, tuna" },
          { title: "Double Shrimp", price: "$7.50", description: "Spicy shrimp, wrap shrimp & avocado" },
          {
            title: "Duo Maki",
            price: "$9.00",
            description: "Salmon wrap, Crab mix, salmon topping, mango, light teriyaki",
          },
          {
            title: "Sweet Maki",
            price: "$9.00",
            description: "Wrap Salmon, carrots, avocado, crabsticks, topping salmon, mango, teriyaki sauce",
          },
          {
            title: "Spicy Crazy Extreme",
            price: "$6.50",
            description: "Crab mix, Avcado ,togarashi, mix sesame , spicy sauce",
          },
          {
            title: "Spicy Salmon Extreme",
            price: "$7.00",
            description: "Salmon, Avcado ,togarashi, mix sesame , spicy sauce",
          },
          {
            title: "Tempura Special Roll",
            price: "$8.50",
            description: "Shrimp tempura, avocado, wrap avocado, sauce",
          },
          {
            title: "Caramelized Salmon",
            price: "$8.00",
            description: "Salmon, Cucumber, Chives, Crispy, Spicy Sauce",
          },
          {
            title: "Fusion Shrimps",
            price: "$7.00",
            description: "Shrimp, mango, avocado, crispy, caramel sauce",
          },
          {
            title: "Ô-sake Touch",
            price: "$10.50",
            description: "tempura shrimp, Salmon, tuna, avocado, cucumber, chives, orange tobiko, mix sesame, spicy sauce",
          },
        ],
      },
      {
        id: "naked-4-pcs",
        label: "Naked (4 pcs)",
        items: [
          { title: "Cotton Roll", price: "$7.00", description: "Salmon, cheese, avocado" },
          {
            title: "Naked Philadelphia",
            price: "$8.00",
            description: "Salmon, cheese, avocado, orange tobiko",
          },
          { title: "Naked Crispy Shrimp", price: "$5.00", description: "Shrimp, cucumber, avocado, crispy" },
          { title: "Fuji Roll", price: "$7.50", description: "Salmon, avocado, sesame seeds" },
        ],
      },
      {
        id: "dragons-8-pcs",
        label: "Dragons (8 pcs)",
        items: [
          {
            title: "Seasonal Dragon",
            price: "$13.50",
            description: "Shrimp tempura, avocado, mango, wrap mango / avocado, teryaki, orange tobiko, white sauce",
          },
        ],
      },
      {
        id: "temaki",
        label: "Temaki",
        items: [
          { title: "Shrimp", price: "$5.50", description: "Shrimp tempura, avocado, spicy shrimp" },
          { title: "Salmon", price: "$8.50", description: "Salmon, white sauce, Mix sesame" },
          { title: "Spicy Tuna", price: "$8.50", description: "Spicy tuna, avocado" },
          { title: "Crab", price: "$5.50", description: "Crab mix, breaded crabstick, avocado, white sauce" },
          { title: "Spicy Salmon", price: "$8.50", description: "Spicy salmon, Mix sesame" },
        ],
      },
      {
        id: "burritos",
        label: "Burritos",
        items: [
          {
            title: "Crazy Burrito",
            price: "$11.00",
            description: "Crab mix, breaded crab, lollo rosso, crispy, orange tobiko, avocado, cucumber, caramel sauce",
          },
          {
            title: "Spicy Salmon Burrito",
            price: "$17.00",
            description: "Salmon, spicy shrimp, crispy, orange tobiko, avocado, lollo rosso, spicy sauce",
          },
          {
            title: "Spicy Shrimp Burrito",
            price: "$15.00",
            description: "Tobiko, spicy sauce, shrimp tempura, spicy shrimp, carrots, crispy, avocado, lollo rosso",
          },
          {
            title: "Spicy Tuna Burrito",
            price: "$20.00",
            description: "Rice, nori, tuna, tobiko, cheese, cucumber, avocado carrots, jalapeño, tortilla, lollo rosso, spicy sauce",
          },
        ],
      },
      {
        id: "sets",
        label: "Sets",
        items: [
          {
            title: "Mix Set / 16 pcs",
            price: "$21.00",
            description: "Crispy crazy, sesame california, tobiko salmon, tempura special roll",
          },
          {
            title: "Cooked Through Set / 20 pcs",
            price: "$21.00",
            description: "Tempura special roll, crispy crazy, crispy phila shrimp, sesame california, double shrimp",
          },
          {
            title: "Salmon Addict Set / 24 pcs",
            price: "$49.00",
            description: "Salmon sashimi, sushi salmon, hoso salmon, tobiko salmon, crispy salmon crazy, triple mango, special salmon",
          },
          {
            title: "Duo Set / 25 pcs",
            price: "$44.00",
            description: "Sashimi salmon, sushi shrimp, sesame crazy, tobiko salmon tartar, duo maki, double shrimp, tempura special roll",
          },
          {
            title: "Sharing Set / 35 pcs",
            price: "$55.00",
            description: "Salmon sushi, shrimp sushi, hoso crab, crispy crazy, sesame california, naked phila, tempura special roll, triple mango, double tuna, special salmon",
          },
          {
            title: "The Ô-Sake Set / 50 pcs",
            price: "$70.00",
            description: "Sashimi salmon, sushi salmon, hoso salmon, sushi crab, crispy crazy, crispy california, crispy phila shrimp, sesame salmon, tempura special roll, special salmon, sweet maki, double shrimp, crispy volcano, sesame crazy california",
          },
          {
            title: "The OMG Set / 80 pcs",
            price: "$129.00",
            description: "Sashimi salmon *2, sushi salmon, sushi shrimp, hoso salmon, hoso avocado, crispy crazy, crispy california, crispy salmon crazy, crispy phila shrimp, sesame crazy california, sesame salmon, tobiko salmon, tobiko crazy, duo maki, tempura special roll, salmon tuna roll, triple mango, unagi roll, shrimp double, cotton roll, fuji roll",
          },
          { title: "FLYING BOAT / 20PCS", price: "$23.00" },
        ],
      },
    ],
  },
  {
    slug: "dessert",
    categoryId: "dessert",
    title: "Dessert",
    banner: "/sites/alforno/banners/dessert.jpg",
    defaultTab: "cold-dessert",
    tabs: [
      {
        id: "cold-dessert",
        label: "Cold Dessert",
        items: [
          { title: "Moufataka", price: "$4.00", description: "The Beiruti traditional dessert" },
          {
            title: "Saint Sebastian Pisatchio",
            price: "$7.50",
            description: "Caramelized crust, creamy center, optional toppings.",
          },
          {
            title: "Double Chocolate Tart Framboise",
            price: "$8.00",
            description: "Dark chocolate ganache, framboise glaze, butter crust.",
          },
          {
            title: "Tiramisu",
            price: "$8.50",
            description: "Espresso-soaked ladyfingers, mascarpone, cocoa.",
          },
          { title: "Dolce Cake (Tre Lèchée) – Lotus", price: "$7.00" },
          {
            title: "Dolce Cake (Tre Lèchée) – Pistachio",
            price: "$9.00",
            description: "Ultra-smooth caramel-pistachio sponge with a thick glaze.",
          },
          {
            title: "Saint Sebastian Basque Cheesecake",
            price: "$6.00",
            description: "(Chocolate, Caramel, or Red Fruit) | Caramelized crust, creamy center, optional toppings.",
          },
        ],
      },
      {
        id: "warm-dessert",
        label: "Warm Dessert",
        items: [
          { title: "Fondant au Chocolate", price: "$9.00", description: "Served with vanilla ice cream" },
          {
            title: "Cookie Dough with Belgian Chocolate",
            price: "$10.00",
            description: "Warm cookie dough center, Belgian chocolate.",
          },
          {
            title: "Warm Brownie with Ice Cream",
            price: "$10.00",
            description: "Fudgy brownie, hot, with vanilla ice cream.",
          },
          {
            title: "Pain perdu",
            price: "$12.50",
            description: "French toast, golden and custardy, served with a scoop of ice cream.",
          },
        ],
      },
      {
        id: "ice-cream-dessert",
        label: "Ice Cream",
        items: [
          { title: "Passion Scoop", price: "$2.20" },
          { title: "Chocolate", price: "$2.20" },
          { title: "Mango", price: "$ 2.20" },
          { title: "Vanille", price: "$2.20" },
          { title: "Lotus", price: "$2.20" },
          { title: "Bubble", price: "$2.20" },
          { title: "Strawberry", price: "$ 2.20" },
          { title: "Pistachio", price: "$3.30" },
          { title: "Dark chocolate", price: "$3.30" },
        ],
      },
    ],
  },
  {
    slug: "drinks",
    categoryId: "drinks",
    title: "Drinks",
    banner: "/sites/alforno/banners/drinks.jpg",
    defaultTab: "soft-drinks-water",
    tabs: [
      {
        id: "soft-drinks-water",
        label: "Soft Drinks & Water",
        items: [
          { title: "Water Small", price: "$1.50" },
          { title: "Water Large", price: "$2.50" },
          { title: "St Pellegrino 330 ML", price: "$3.50" },
          { title: "St Pellegrino 750 ML", price: "$5.00" },
          { title: "Pepsi", price: "$2.50" },
          { title: "Diet Pepsi", price: "$2.50" },
          { title: "7up", price: "$2.50" },
          { title: "Diet 7up", price: "$2.50" },
          { title: "Mirinda", price: "$2.50" },
          { title: "Energy Drink", price: "$4.50" },
        ],
      },
      {
        id: "fresh-juices",
        label: "Fresh Juices",
        items: [
          { title: "Orange", price: "$3.50" },
          { title: "Lemonade", price: "$3.00" },
          { title: "Frozen Lemonade", price: "$5.00", description: "Minted Or Regular" },
          { title: "Strawberry", price: "$4.00" },
          { title: "Cocktail", price: "$4.00", description: "Strawberry, Banana, Milk" },
          { title: "Mango", price: "$4.50" },
          { title: "Pomegranate", price: "$5.50" },
        ],
      },
      {
        id: "mocktails-drinks",
        label: "Mocktails",
        items: [
          { title: "Passion Fruit Mojito", price: "$4.50" },
          { title: "Classic Lime Mojito", price: "$4.50" },
          { title: "Wild Berries Cooler", price: "$4.50" },
          { title: "Hibiscus Iced Tea", price: "$4.50" },
          { title: "Lemon Iced Tea", price: "$4.50" },
          { title: "Peach Iced Tea", price: "$4.50" },
        ],
      },
      {
        id: "milkshakes-drinks",
        label: "Milkshakes",
        items: [
          { title: "Classics", price: "$7.00", description: "Vanilla, Chocolate, Strawberry" },
          { title: "Cookies & Cream Shake", price: "$7.00" },
          { title: "Lotus Salted Caramel", price: "$6.00" },
          { title: "Bubbly", price: "$6.00" },
          { title: "Power Mix", price: "$6.00" },
        ],
      },
      {
        id: "cold-coffee-2",
        label: "Cold Coffee",
        items: [
          { title: "Classic Frappé", price: "$5.00", description: "Original, Mocha, Caramel, White" },
          { title: "Toffee Nut Frappé", price: "$5.00" },
          { title: "Mocha Tiramisu", price: "$5.00" },
          { title: "Iced Mocha", price: "$5.00" },
          { title: "Iced latte", price: "$5.00" },
          { title: "Iced Matcha", price: "$5.00" },
          { title: "Machiatto", price: "$5.00" },
        ],
      },
      {
        id: "smoothies-drinks",
        label: "Smoothies",
        items: [
          { title: "Classic Mongo", price: "$7.00" },
          { title: "Mango Passion", price: "$8.00" },
          { title: "Strawberry Lychee", price: "$7.00" },
          { title: "Forest Fruits", price: "$7.00" },
          { title: "Classic Strawberry", price: "$6.00" },
        ],
      },
      {
        id: "hot-beverages",
        label: "Hot Beverages",
        items: [
          { title: "Espresso", price: "$2.50" },
          { title: "Turkish Coffee", price: "$2.50" },
          { title: "Americano", price: "$4.00" },
          { title: "Doppio", price: "$3.50", description: "Double Espresso" },
          { title: "Cappuccino", price: "$4.50" },
          { title: "Latte", price: "$4.00" },
          { title: "Flat White", price: "$4.00" },
          { title: "Spanish Latte", price: "$5.00" },
          { title: "Caramel Macchiato", price: "$5.00" },
          { title: "Hot Chocolate", price: "$5.50" },
          { title: "Hot Matcha", price: "$5.50" },
          {
            title: "White Coffee",
            price: "$2.50",
            description: "add on extra flavor, add syrup, sugar free syrup, extra espresso shot",
          },
          { title: "Tea Selection", price: "$2.20" },
          { title: "Espresso Decaf", price: "$3.00" },
          { title: "Add Vanilla Syrup", price: "$1.00" },
          { title: "Add Hazelnut Syrup", price: "$1.00" },
          { title: "Add Caramel Syrup", price: "$1.00" },
          { title: "Add Sugar Free Vanilla Syrup", price: "$1.00" },
          { title: "Add Sugar Free Caramel Syrup", price: "$1.00" },
          { title: "Extra Espresso Shot", price: "$1.50" },
          { title: "Extra Milk", price: "$1.50" },
          { title: "Extra Oat Milk", price: "$2.50" },
          { title: "Extra Soya Milk", price: "$2.50" },
          { title: "Extra Almond Milk", price: "$2.50" },
          { title: "Longo", price: "$2.50" },
          { title: "Pumpkin Latte", price: "$6.00" },
          { title: "Toffee Nut Latte", price: "$6.00" },
        ],
      },
      {
        id: "affogato-al-caffe",
        label: "Affogato Al Caffè",
        items: [
          { title: "Vanilla Espresso Affogato", price: "$5.50" },
          { title: "Pistachio Espresso Affogato", price: "$8.00" },
          { title: "Caramel Espresso Affogato", price: "$6.50" },
        ],
      },
    ],
  },
  {
    slug: "shisha",
    categoryId: "shisha",
    title: "Shisha",
    banner: "/sites/alforno/banners/shisha.jpg",
    defaultTab: "shisha",
    tabs: [
      {
        id: "shisha",
        label: "Shisha",
        items: [
          { title: "Moassal Flavor", price: "$12.00" },
          { title: "Ajami", price: "$12.00" },
          { title: "Extra Change Head", price: "$6.00" },
          { title: "Extra Hose", price: "$2.00" },
        ],
      },
    ],
  },
  {
    slug: "kids",
    categoryId: "kids",
    title: "Kids",
    banner: "/sites/alforno/banners/kids.jpg",
    defaultTab: "pasta",
    tabs: [
      {
        id: "pasta",
        label: "Pasta",
        items: [
          {
            title: "Mini Spaghetti Pomodoro",
            price: "$6.00",
            description: "Spaghetti in a homemade tomato sauce Add grilled chicken or shrimp for extra yum!",
          },
          {
            title: "Mini Fettuccine Alfredo",
            price: "$7.50",
            description: "Fettuccine in a creamy Alfredo sauce",
          },
          { title: "Add grilled chicken or shrimp for extra yum!" },
        ],
      },
      {
        id: "burgers-chicken",
        label: "Burgers & Chicken",
        items: [
          {
            title: "Mini Classic Burger",
            price: "$7.00",
            description: "2 Beef sliders with lettuce, tomato, and Al Karraro sauce on a mini brioche bun. Served with fries.",
          },
          {
            title: "Mini Cheese Burger",
            price: "$8.00",
            description: "2 Beef sliders topped with cheddar cheese, pickles, and Al Karraro sauce on a mini brioche bun. Served with fries.",
          },
          {
            title: "Mini Grilled Chicken Burger",
            price: "$8.00",
            description: "2 Tender grilled chicken breast with cheddar cheese, lettuce, and aioli sauce on a mini brioche bun. Served with fries.",
          },
          { title: "The Duo Mini Burgers", price: "$8.00" },
        ],
      },
      {
        id: "beverages",
        label: "Beverages",
        items: [
          { title: "Fresh Juice" },
          { title: "Water" },
        ],
      },
    ],
  },
  {
    slug: "cigar-lounge",
    categoryId: "cigar-lounge",
    title: "Cigar Lounge",
    banner: "/sites/alforno/banners/cigar-lounge.jpg",
    defaultTab: "cold-starters",
    tabs: [
      {
        id: "cold-starters",
        label: "Cold Starters & Salads",
        items: [
          {
            title: "Crab Salad",
            price: "$9.00",
            description: "Crab sticks, Lolo rosso, carrots, cucumber, orange tobiko",
          },
          {
            title: "Crispy Salmon Salad",
            price: "$18.50",
            description: "Salmon, Crispy, Exotic sauce, shredded nori",
          },
          {
            title: "Black Burrata",
            price: "$20.00",
            description: "Black burrata, served on a bed of mixed cherry tomatoes—rich, creamy, and beautifully fresh.",
          },
          {
            title: "Bresaola & Cheese Tortellini",
            price: "$15.00",
            description: "Italian bresaola thin slices filled with ricotta, goat cheese and Parmesan served with arugula, drizzling with extra virgin olive oil and black pepper",
          },
          {
            title: "Mediterranean Mezza Platter",
            price: "$12.00",
            description: "A selection of Mediterranean favorites: hommos, moutabal, grape leaves, mini kibbe, mini cheese rolls, and mini sambousik.",
          },
        ],
      },
      {
        id: "warm-bites",
        label: "Warm Bites",
        items: [
          {
            title: "Chicken Florentine Vol-au-Vent",
            price: "$10.00",
            description: "Puff pastry filled with creamy spinach chicken, topped with Parmesan and sundried tomato.",
          },
          {
            title: "Chicken Satay Skewers",
            price: "$10.00",
            description: "Grilled marinated chicken with spicy aromatic peanut sauce.",
          },
          {
            title: "Beef Shawarma Pita Slider",
            price: "$10.00",
            description: "Tender spiced beef shawarma in a mini pita, topped with traditional tarator sauce and bewaz.",
          },
          {
            title: "Chicken Shawarma Pita Slider",
            price: "$8.00",
            description: "Marinated chicken shawarma, wrapped in a soft mini pita with our house-made spicy garlic sauce.",
          },
          {
            title: "Mini Gourmet Beef Sliders",
            price: "$14.00",
            description: "3 sliders (original, truffle mayo, cheesy) in brioche buns.",
          },
          { title: "Edamame", price: "$5.00" },
          {
            title: "Cheese Balls",
            price: "$8.00",
            description: "Crunchy on the outside and melty inside, served on Carozza sauce",
          },
          {
            title: "Arancini Cêpe",
            price: "$12.00",
            description: "Golden bites stuffed with mushroom cêpe, served with mayo-truffle dipping sauce.",
          },
        ],
      },
      {
        id: "cigar-lounge-beverages",
        label: "Beverages",
        items: [
          { title: "Small Still Water", price: "$1.50" },
          { title: "Large Still Water", price: "$2.50" },
          { title: "Small Sparkling Water", price: "$3.50" },
          { title: "Pepsi", price: "$2.50" },
          { title: "Diet Pepsi", price: "$2.50" },
          { title: "Pepsi Zero", price: "$2.50" },
          { title: "7UP", price: "$2.50" },
          { title: "Lemonade", price: "$6.00" },
          { title: "Diet 7UP", price: "$2.50" },
          { title: "Mirinda", price: "$2.50" },
          { title: "Virgin Bloody Mary", price: "$7.00" },
          { title: "Jamaica", price: "$7.00" },
          { title: "Virgin Mojito", price: "$4.50" },
          { title: "Orange", price: "$6.00" },
          { title: "Peach Lemonade", price: "$7.00" },
          { title: "Mango", price: "$7.00" },
          { title: "Peach Iced Tea", price: "$4.50" },
          { title: "Strawberry", price: "$6.50" },
          { title: "Fresh Cocktail Juice", price: "$5.00" },
          { title: "Pomegranate", price: "$8.00" },
          { title: "Espresso", price: "$2.50" },
          { title: "Decaffeinated Espresso", price: "$3.00" },
          { title: "Doppio", price: "$3.50" },
          { title: "Turkish Coffee", price: "$3.00" },
          { title: "Espresso Macchiato", price: "$3.00" },
          { title: "Lungo", price: "$2.50" },
          { title: "Americano", price: "$4.00" },
          { title: "Flat White", price: "$4.00" },
          { title: "Cappuccino", price: "$4.50" },
          { title: "Café Latte", price: "$4.00" },
          { title: "Ristretto", price: "$2.50" },
          { title: "Spanish Latte", price: "$5.00" },
          { title: "White Coffee", price: "$2.50" },
          { title: "V60 Pour Over", price: "$8.00" },
          { title: "French Press Coffee", price: "$6.00" },
          { title: "Hot Chocolate", price: "$5.50" },
          { title: "Iced Latte", price: "$5.00" },
          { title: "Iced Vanilla Rose Latte", price: "$7.00" },
          { title: "Iced Pistachio Latte", price: "$8.00" },
          { title: "Fresh Ginger Tea", price: "$6.00" },
          {
            title: "Selection of Signature Teas & Premium Infusions",
            price: "$7.00",
            description: "(Please refer to our dedicated Tea & Infusion Menu.)",
          },
          { title: "Blueberry Banana", price: "$8.00" },
          { title: "Hibiscus Iced Tea", price: "$4.50" },
          { title: "Pumpkin Latte", price: "$6.00" },
          { title: "Toffee Nut Latte", price: "$6.00" },
        ],
      },
      {
        id: "cigar-french-bakery-favorites",
        label: "French Bakery Favorites",
        items: [
          { title: "Nature", price: "$2.00" },
          { title: "Thyme", price: "$2.50" },
          { title: "Cheese", price: "$3.00" },
          { title: "Chocolate", price: "$3.00" },
          { title: "Almond", price: "$4.00" },
          { title: "Pistachio", price: "$5.00" },
          { title: "Choco Amande", price: "$5.00" },
        ],
      },
      {
        id: "cigar-artisan-croissants",
        label: "Artisan Croissants",
        items: [
          {
            title: "Salmon Croissant",
            price: "$13.00",
            description: "Croissant filled with smoked salmon, cream cheese, fresh dill, avocado, and capers.",
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
      {
        id: "cigar-tartines",
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
          {
            title: "Brie Sandwich",
            price: "$10.00",
            description: "Brioche with brie, glazed onion, mushroom; side of side salad.",
          },
        ],
      },
      {
        id: "cigar-sourdough-breakfast-selection",
        label: "Sourdough Breakfast Selection",
        items: [
          {
            title: "Sourdough Zaatar Manakish",
            price: "$3.50",
            description: "Authentic zaatar blend mixed with virgin olive oil, topped with labneh over our Sourdough base and baked to golden perfection..",
          },
          {
            title: "Sourdough Cheese Manakish",
            price: "$5.00",
            description: "Melted akkawi cheese top on our sourdough, finished with a touch of sesame seeds, creamy, and irresistible.",
          },
          {
            title: "Sourdough Mixed Cheese Manakish",
            price: "$7.00",
            description: "A blend of akkawi, halloumi, kashkaval, and mozzarella cheeses, melted together over our signature sourdough for the ultimate cheesy experience.",
          },
          {
            title: "Sourdough Turkey & Cheese Manakish",
            price: "$8.00",
            description: "Smoked turkey breast paired with akkawi cheese, baked on our rustic sourdough base. A satisfying twist on a classic melt.",
          },
          {
            title: "Sourdough Eggs with Kawarma Manakish",
            price: "$8.50",
            description: "Eggs and savory kawarma layered on sourdough full of tradition.",
          },
          {
            title: "Sourdough Karishe & Honey Manakish",
            price: "$6.00",
            description: "Fresh Lebanese karishe cheese baked on sourdough, then drizzled with pure honey and a sprinkle of walnuts. A sweet and tangy morning treat.",
          },
          {
            title: "All our manakish are made with 100% natural sourdough and the freshest local ingredients.",
          },
        ],
      },
      {
        id: "cigar-sandwiches",
        label: "Sandwiches",
        items: [
          {
            title: "Beef & Cheddar Melt Sandwich",
            price: "$13.00",
            description: "Tenderloin beef Steak, Emmental & cheddar, glazed onion, Chipotle mayo on sweet bread; shoestring potatoes.",
          },
          {
            title: "Smoked Salmon & Herb",
            price: "$17.00",
            description: "Batard bread, smoked salmon, avocado, cream cheese, capers, fresh herbs, citrus scent.",
          },
          {
            title: "Truffle Chicken Supreme",
            price: "$15.00",
            description: "Grilled chicken with mushrooms and truffle provolone; wild arugula; shoestring potatoes.",
          },
          {
            title: "Tuna Avocado",
            price: "$10.00",
            description: "Tuna with avocado, iceberg, sun-dried tomatoes on multigrain ciabatta; served with mixed arugula salad.",
          },
        ],
      },
      {
        id: "cigar-selection-menu",
        label: "Cigar Selection Menu",
        items: [
          { title: "SAN LOTANO REQIEM HABANO ROBUSTO", price: "$13.00" },
          { title: "AJF N.W PURO ESP. ROBUSTO", price: "$15.00" },
          { title: "HR MILLESIME H6", price: "$15.00" },
          { title: "COHIBA WHITE CLUB", price: "$32.00" },
          { title: "M.C OPEN MINI", price: "$11.00" },
          { title: "PLASENCIA ALMA FUERTE NESTOR IV", price: "$26.00" },
          { title: "PLASENCIA RESERVA ORIGINAL CORTES", price: "$13.00" },
          { title: "HDM SERIES EPIC NO. 1", price: "$37.00" },
          { title: "HDM SERIES EPICURE NO. 2", price: "$35.00" },
          { title: "MONTECRISTO NO. 2", price: "$48.00" },
          { title: "PARTAGAS D NO. 4", price: "$42.00" },
          { title: "PARTAGAS D NO. 6", price: "$28.00" },
          { title: "PARTAGAS P NO. 2", price: "$45.00" },
          { title: "PLASENCIA RESERVA ORIGINAL ROBUSTO", price: "$13.00" },
        ],
      },
    ],
  },
];

export function getCategoryMenu(slug: string) {
  return categoryMenus.find((menu) => menu.slug === slug);
}
