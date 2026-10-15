/**
 * Veda Masala - Product, Category & Recipe Catalog
 * Handcrafted Indian Spices & Artisanal Masalas
 */

export const PRODUCTS = [
  {
    id: 'turmeric-powder',
    name: 'Turmeric Powder',
    hindiName: 'Salem Haldi',
    category: 'everyday-spices',
    categoryName: 'Everyday Spices',
    shortDescription: 'Golden Lakadong turmeric with naturally high curcumin content and deep earthy aroma.',
    fullDescription: 'Harvested from fertile mountain soils and slowly ground to preserve essential volatile oils. Our Salem Turmeric Powder offers a rich golden color, subtle peppery warmth, and an unmistakably fresh aroma that enlivens dals, curries, and warm golden lattes.',
    aromaNotes: ['Earthy', 'Peppery Warmth', 'Woody Floral'],
    origin: 'Lakadong, Meghalaya',
    curcuminContent: '5.6% Curcumin',
    isBestseller: true,
    badge: 'Bestseller',
    imageUrl: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=80',
    fallbackIcon: 'spice',
    cookingTip: 'Bloom in warm ghee or cold-pressed mustard oil for 15 seconds to unlock its fat-soluble golden antioxidants.',
    weights: [
      { size: '100g', price: 95, originalPrice: 120 },
      { size: '250g', price: 215, originalPrice: 260 },
      { size: '500g', price: 395, originalPrice: 480 }
    ],
    rating: 4.9,
    reviewCount: 312
  },
  {
    id: 'red-chili-powder',
    name: 'Red Chili Powder',
    hindiName: 'Mathania Lal Mirch',
    category: 'everyday-spices',
    categoryName: 'Everyday Spices',
    shortDescription: 'Sun-dried Mathania chillies ground for vibrant crimson color and balanced culinary heat.',
    fullDescription: 'A harmonious blend of sun-cured Rajasthan Mathania chillies for vibrant natural color and fiery Guntur chillies for crisp heat. Free from synthetic coloring or added oils, delivering clean, lingering warmth to gravies and marinades.',
    aromaNotes: ['Smoky Sweet', 'Crisp Heat', 'Fruity Undertones'],
    origin: 'Mathania, Rajasthan',
    curcuminContent: 'Heat Index: Medium-High',
    isBestseller: true,
    badge: 'Bestseller',
    imageUrl: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80',
    fallbackIcon: 'flame',
    cookingTip: 'Add alongside tomatoes or yogurt base to impart radiant crimson color without scorching the chili seeds.',
    weights: [
      { size: '100g', price: 110, originalPrice: 135 },
      { size: '250g', price: 245, originalPrice: 290 },
      { size: '500g', price: 460, originalPrice: 540 }
    ],
    rating: 4.8,
    reviewCount: 428
  },
  {
    id: 'coriander-powder',
    name: 'Coriander Powder',
    hindiName: 'Ramganj Dhaniya',
    category: 'everyday-spices',
    categoryName: 'Everyday Spices',
    shortDescription: 'Cold-milled green coriander seeds brimming with refreshing citrus and sweet herbal notes.',
    fullDescription: 'Selected from premium winter harvests in Madhya Pradesh. We slow-grind the plump whole seeds at controlled cool temperatures so the fragrant essential oils remain trapped in every grain, yielding thick, luscious curry gravies.',
    aromaNotes: ['Bright Citrus', 'Sweet Herbaceous', 'Nutty'],
    origin: 'Kumbhraj, Madhya Pradesh',
    curcuminContent: 'Aroma: Intense Herbal',
    isBestseller: false,
    badge: 'Cold Milled',
    imageUrl: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=900&q=80',
    fallbackIcon: 'spice',
    cookingTip: 'Form a paste with a splash of water and ginger-garlic before adding to hot oil for uniform flavor dispersion.',
    weights: [
      { size: '100g', price: 85, originalPrice: 105 },
      { size: '250g', price: 195, originalPrice: 235 },
      { size: '500g', price: 360, originalPrice: 420 }
    ],
    rating: 4.9,
    reviewCount: 194
  },
  {
    id: 'cumin-seeds',
    name: 'Cumin Seeds',
    hindiName: 'Shahi Jeera',
    category: 'whole-spices',
    categoryName: 'Whole Spices',
    shortDescription: 'Sun-cured whole cumin seeds boasting deep aromatic oils and sharp, earthy crunch.',
    fullDescription: 'Unpolished and meticulously hand-sieved to remove stalks and grit. When crackled in hot oil or ghee, these dense cumin seeds release a distinct nutty aroma that defines the soul of authentic Indian tadka.',
    aromaNotes: ['Intense Earthy', 'Toasted Nut', 'Warm Pungency'],
    origin: 'Unjha, Gujarat',
    curcuminContent: 'Aroma: Premium Essential Oils',
    isBestseller: true,
    badge: 'Bestseller',
    imageUrl: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=900&q=80',
    fallbackIcon: 'spice',
    cookingTip: 'Dry toast in an ungreased cast iron skillet on gentle heat until fragrant, then coarsely crush with a rolling pin.',
    weights: [
      { size: '100g', price: 125, originalPrice: 150 },
      { size: '250g', price: 285, originalPrice: 340 },
      { size: '500g', price: 530, originalPrice: 620 }
    ],
    rating: 5.0,
    reviewCount: 512
  },
  {
    id: 'garam-masala',
    name: 'Garam Masala',
    hindiName: 'Shahi Garam Masala',
    category: 'signature-masalas',
    categoryName: 'Signature Masalas',
    shortDescription: '14-spice slow-roasted royal blend with green cardamom, mace, cinnamon, and cloves.',
    fullDescription: 'An heirloom family formulation inspired by royal Mughal and Awadhi royal kitchens. Whole spices are individually dry-roasted to their unique aromatic peak before being blended into an intricate finishing spice that elevates simple curries into culinary masterpieces.',
    aromaNotes: ['Sweet Cardamom', 'Woody Cinnamon', 'Rich Clove & Mace'],
    origin: 'Heritage Old Delhi Recipe',
    curcuminContent: '14 Whole Spices Blend',
    isBestseller: true,
    badge: 'Bestseller',
    imageUrl: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=900&q=80',
    fallbackIcon: 'spice',
    cookingTip: 'Sprinkle 1/2 teaspoon during the final 2 minutes of simmering to preserve the delicate floral top notes.',
    weights: [
      { size: '100g', price: 140, originalPrice: 175 },
      { size: '250g', price: 320, originalPrice: 390 },
      { size: '500g', price: 590, originalPrice: 710 }
    ],
    rating: 4.9,
    reviewCount: 680
  },
  {
    id: 'kitchen-king-masala',
    name: 'Kitchen King Masala',
    hindiName: 'Rasoi Sartaj',
    category: 'signature-masalas',
    categoryName: 'Signature Masalas',
    shortDescription: 'The versatile all-purpose curry blend balancing toasted fenugreek, coriander, and warm spices.',
    fullDescription: 'The crown jewel of Indian home cooking. A balanced multi-spice harmony that combines roasted coriander, kasuri methi, dry mango powder, nutmeg, and black pepper. Perfect for paneer dishes, mixed vegetable curries, and North Indian gravies.',
    aromaNotes: ['Toasted Fenugreek', 'Tangy Amchur', 'Warm Savory'],
    origin: 'Northern Culinary Craft',
    curcuminContent: 'All-Purpose Master Blend',
    isBestseller: false,
    badge: 'Chef Favorite',
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=80',
    fallbackIcon: 'spice',
    cookingTip: 'Stir directly into tomato-onion gravy when the oil begins to separate from the pan edges.',
    weights: [
      { size: '100g', price: 130, originalPrice: 160 },
      { size: '250g', price: 295, originalPrice: 350 },
      { size: '500g', price: 550, originalPrice: 650 }
    ],
    rating: 4.8,
    reviewCount: 247
  }
];

export const CATEGORIES = [
  {
    id: 'everyday-spices',
    name: 'Everyday Spices',
    count: '3 Products',
    tagline: 'The daily culinary foundation',
    description: 'Pristine single-origin staples milled at low temperatures for everyday home cooking.',
    imageUrl: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=700&q=80',
    badge: 'Daily Essentials'
  },
  {
    id: 'signature-masalas',
    name: 'Signature Masalas',
    count: '2 Products',
    tagline: 'Heirloom blended secrets',
    description: 'Complex spice compositions slowly roasted over wood embers and stone ground.',
    imageUrl: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=700&q=80',
    badge: 'Artisanal Blends'
  },
  {
    id: 'whole-spices',
    name: 'Whole Spices',
    count: '1 Product',
    tagline: 'Uncrushed aromatic jewels',
    description: 'Sun-dried whole seeds, pods, and barks brimming with volatile aromatic oils.',
    imageUrl: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=700&q=80',
    badge: 'Whole & Pure'
  },
  {
    id: 'regional-blends',
    name: 'Regional Blends',
    count: 'Coming Soon',
    tagline: 'India’s regional heritage',
    description: 'Authentic spice profiles celebrating Malabari, Chettinad, Kolhapuri, and Kashmiri traditions.',
    imageUrl: 'https://images.unsplash.com/photo-1596040033282-be260ec69485?auto=format&fit=crop&w=700&q=80',
    badge: 'Regional Craft'
  }
];

export const RECIPES = [
  {
    id: 'paneer-tikka',
    name: 'Paneer Tikka',
    subtitle: 'Smoky tandoori marinated cottage cheese',
    prepTime: '30 Mins',
    cookTime: '15 Mins',
    servings: '4 Servings',
    difficulty: 'Easy',
    spiceFeatured: 'Garam Masala & Red Chili Powder',
    imageUrl: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=80',
    summary: 'Fresh malai paneer cubes marinated in hung curd, Mathania red chili, crushed coriander, and our royal Garam Masala, roasted until delicately charred.',
    ingredients: [
      '400g fresh paneer (cottage cheese), cut into 1.5-inch cubes',
      '1 large bell pepper and 1 red onion, cubed',
      '1 cup hung curd or thick Greek yogurt',
      '1 tbsp ginger-garlic paste',
      '1.5 tsp Veda Red Chili Powder',
      '1 tsp Veda Garam Masala',
      '1 tsp Veda Turmeric Powder',
      '1 tbsp roasted gram flour (besan)',
      '1 tbsp cold-pressed mustard oil',
      '1 tsp chaat masala and fresh lemon juice for finishing'
    ],
    instructions: [
      'Whisk hung curd with mustard oil, roasted besan, ginger-garlic paste, Veda Red Chili Powder, Turmeric, and Garam Masala until silken smooth.',
      'Gently fold in paneer cubes, bell peppers, and onions, ensuring even coating. Marinate at room temperature for 30 minutes.',
      'Thread paneer and vegetables onto skewers. Sear in a hot grill pan or bake at 220°C (425°F) for 12–15 minutes until edges are blistered and charred.',
      'Baste with melted ghee during the final 2 minutes. Dust with chaat masala and serve piping hot with fresh mint chutney.'
    ]
  },
  {
    id: 'chole-masala',
    name: 'Chole Masala',
    subtitle: 'Classic Amritsari spiced chickpeas',
    prepTime: '45 Mins',
    cookTime: '30 Mins',
    servings: '4–6 Servings',
    difficulty: 'Intermediate',
    spiceFeatured: 'Kitchen King & Coriander Powder',
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80',
    summary: 'Plump Kabuli chickpeas steeped in aromatic whole spices, simmered in a tangy tomato-onion masala infused with slow-milled coriander and Kitchen King.',
    ingredients: [
      '2 cups Kabuli chana (chickpeas), soaked overnight',
      '1 black tea bag & 1 black cardamom for boiling broth',
      '2 medium onions, finely minced',
      '3 ripe tomatoes, pureed',
      '1 tbsp ginger juliennes & 2 green chilies slit',
      '1.5 tbsp Veda Kitchen King Masala',
      '1 tbsp Veda Coriander Powder',
      '1/2 tsp Veda Red Chili Powder',
      '1 tsp Veda Cumin Seeds (Jeera)',
      '2 tbsp pure desi ghee'
    ],
    instructions: [
      'Pressure cook soaked chickpeas with black tea bag, black cardamom, and salt for 5-6 whistles until melt-in-the-mouth tender. Discard tea bag.',
      'In a thick-bottomed kadai, heat ghee and crackle Veda Cumin Seeds. Add onions and sauté on medium heat until golden brown.',
      'Add ginger-garlic paste, followed by pureed tomatoes, Veda Coriander Powder, Red Chili, and Kitchen King Masala. Cook until oil glimmers on the surface.',
      'Add boiled chickpeas along with their broth. Mash a few chickpeas to thicken the gravy and simmer gently for 15 minutes.',
      'Finish with ginger juliennes, freshly chopped cilantro, and a drizzle of hot ghee tadka. Pair with puffed bhature or steamed basmati rice.'
    ]
  },
  {
    id: 'vegetable-biryani',
    name: 'Vegetable Biryani',
    subtitle: 'Fragrant Awadhi royal dum biryani',
    prepTime: '50 Mins',
    cookTime: '35 Mins',
    servings: '6 Servings',
    difficulty: 'Masterclass',
    spiceFeatured: 'Garam Masala & Cumin Seeds',
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=900&q=80',
    summary: 'Aromatic aged basmati rice layered with seasonal garden vegetables, infused with whole spices, saffron milk, fresh mint, and fragrant royal Garam Masala.',
    ingredients: [
      '2 cups aged long-grain Basmati rice, soaked for 30 minutes',
      '2.5 cups mixed diced vegetables (carrots, green beans, cauliflower, green peas)',
      '1/2 cup fried golden onions (birista)',
      '1/3 cup warm milk with saffron strands',
      '1 tsp Veda Cumin Seeds (Jeera)',
      '1.5 tsp Veda Garam Masala',
      '1/2 tsp Veda Turmeric Powder',
      '1/4 cup fresh mint leaves & cilantro, torn',
      '3 tbsp pure ghee & kewra water splash'
    ],
    instructions: [
      'Parboil soaked basmati rice in salted water with whole green cardamom and cloves until 70% cooked. Drain and spread gently on a wide platter.',
      'In a heavy-bottomed handi, warm ghee, temper Veda Cumin Seeds, and sauté vegetables with yogurt, Veda Turmeric, and 1 tsp Garam Masala until tender-crisp.',
      'Layer the seasoned vegetables at the bottom. Top with parboiled rice, fried onions, mint leaves, saffron milk, and remaining Veda Garam Masala.',
      'Seal handi rim with dough or foil. Cover with tight lid and cook on dum (gentle heat over an iron tawa) for 20 minutes.',
      'Rest sealed pot for 10 minutes before gently fluffing rice from bottom to top. Serve hot with cucumber mint raita.'
    ]
  }
];

export const BRAND_VALUES = [
  {
    id: 'rich-aroma',
    title: 'Rich Aroma',
    description: 'Essential oils preserved through low-temperature slow stone grinding.',
    icon: 'flame'
  },
  {
    id: 'authentic-flavor',
    title: 'Authentic Flavor',
    description: 'Time-tested regional recipes perfected over generations of culinary tradition.',
    icon: 'spark'
  },
  {
    id: 'carefully-selected-ingredients',
    title: 'Carefully Selected Ingredients',
    description: 'Ethically sourced single-origin harvests from India’s finest spice terroirs.',
    icon: 'leaf'
  },
  {
    id: 'packed-with-care',
    title: 'Packed with Care',
    description: 'Aroma-lock nitrogen packaging that keeps every pinch fresh and potent.',
    icon: 'package'
  }
];
