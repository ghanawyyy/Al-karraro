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
// "Alforno" in dish names was renamed to "Al Karraro".
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
];

export function getCategoryMenu(slug: string) {
  return categoryMenus.find((menu) => menu.slug === slug);
}
