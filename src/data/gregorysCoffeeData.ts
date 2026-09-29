import { BusinessWebsite } from '../types';

export interface GregorysMenuItem {
  id: string;
  name: string;
  category: 'Specialty Cold Brew' | 'Espresso & Coffee' | 'Matcha & Botanicals' | 'Scratch Food & Bakery';
  description: string;
  priceUsd: number;
  priceInr: number;
  imageUrl: string;
  isVegan?: boolean;
  isGlutenFree?: boolean;
  popular?: boolean;
  calories?: string;
  tags?: string[];
}

export interface GregorysProduct {
  id: string;
  title: string;
  category: 'Packaged Coffee' | 'Merch & Drinkware' | 'Gift Cards';
  priceUsd: number;
  priceInr: number;
  imageUrl: string;
  description: string;
  inStock: boolean;
}

export interface GregorysLocation {
  id: string;
  name: string;
  neighborhood: string;
  city: string;
  state: 'NY' | 'NJ' | 'DC' | 'CT' | 'FL';
  address: string;
  hours: string;
  phone: string;
  hasOrderAhead: boolean;
}

export const GREGORYS_MENU: GregorysMenuItem[] = [
  // Specialty Cold Brews
  {
    id: 'greg-hall-oats',
    name: 'Hall & Oats Cold Brew',
    category: 'Specialty Cold Brew',
    description: 'Our signature slow-steeped cold brew infused with organic oat milk, real vanilla bean syrup, and a dusted cinnamon top. Sweet, creamy, and dairy-free.',
    priceUsd: 6.25,
    priceInr: 625,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0455/6141/files/gregorys-location-img.png',
    popular: true,
    isVegan: true,
    calories: '160 kcal',
    tags: ['Best Seller', 'Plant Based']
  },
  {
    id: 'greg-honey-badger',
    name: 'Honey Badger Cold Brew',
    category: 'Specialty Cold Brew',
    description: 'Rich cold brew shaken with organic almond milk and pure raw wildflower honey. Naturally sweet and refreshing.',
    priceUsd: 6.25,
    priceInr: 625,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0455/6141/files/gregorys-location-img.png',
    popular: true,
    calories: '170 kcal',
    tags: ['Dairy Free']
  },
  {
    id: 'greg-nu-brew',
    name: 'Nu Brew Cold Brew',
    category: 'Specialty Cold Brew',
    description: 'Double strength cold brew layered with velvety melted Nutella hazelnut chocolate and whole or oat milk.',
    priceUsd: 6.45,
    priceInr: 645,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0455/6141/files/gregorys-location-img.png',
    calories: '240 kcal',
    tags: ['Decadent']
  },
  {
    id: 'greg-salted-caramel-cb',
    name: 'Salted Caramel Cold Brew',
    category: 'Specialty Cold Brew',
    description: 'Crisp cold brew crowned with fluffy salted caramel cold foam and sea salt flakes.',
    priceUsd: 6.15,
    priceInr: 615,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0455/6141/files/gregorys-location-img.png',
    popular: true,
    calories: '180 kcal'
  },

  // Espresso & Coffee
  {
    id: 'greg-night-vision-latte',
    name: 'Night Vision Latte',
    category: 'Espresso & Coffee',
    description: 'Our proprietary Night Vision espresso blend with notes of dark chocolate, orange zest, and sweet plum, paired with silky steamed milk.',
    priceUsd: 5.65,
    priceInr: 565,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0455/6141/files/gregorys-location-img.png',
    popular: true,
    calories: '200 kcal'
  },
  {
    id: 'greg-cardamama-latte',
    name: 'Carda’mama Spiced Latte',
    category: 'Espresso & Coffee',
    description: 'Freshly ground cardamom spice infused with double espresso, brown sugar syrup, and warm oat milk.',
    priceUsd: 6.25,
    priceInr: 625,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0455/6141/files/gregorys-location-img.png',
    isVegan: true,
    calories: '190 kcal'
  },
  {
    id: 'greg-cortado',
    name: 'G-Style Cortado',
    category: 'Espresso & Coffee',
    description: 'Equal parts Night Vision espresso and warm velvety micro-foam in a 4.5 oz glass. The barista’s pick.',
    priceUsd: 4.85,
    priceInr: 485,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0455/6141/files/gregorys-location-img.png',
    calories: '80 kcal'
  },
  {
    id: 'greg-house-drip',
    name: 'Greg’s House Batch Brew',
    category: 'Espresso & Coffee',
    description: 'Brewed fresh every 30 minutes from our washed Colombia & Ethiopia roast. Balanced, bright, and endlessly drinkable.',
    priceUsd: 3.45,
    priceInr: 345,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0455/6141/files/gregorys-location-img.png',
    calories: '5 kcal'
  },

  // Matcha & Botanicals
  {
    id: 'greg-iced-matcha',
    name: 'Ceremonial Iced Matcha Latte',
    category: 'Matcha & Botanicals',
    description: 'Shade-grown Uji ceremonial grade matcha whisked to order with oat milk and a touch of agave.',
    priceUsd: 6.25,
    priceInr: 625,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0455/6141/files/gregorys-location-img.png',
    popular: true,
    isVegan: true,
    calories: '140 kcal'
  },
  {
    id: 'greg-blue-biotic',
    name: 'Blue Biotic Botanical Refresher',
    category: 'Matcha & Botanicals',
    description: 'Sparkling blue spirulina, green coffee energy, yuzu lemon, and organic prebiotics over crushed ice.',
    priceUsd: 5.75,
    priceInr: 575,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0455/6141/files/gregorys-location-img.png',
    isVegan: true,
    calories: '90 kcal'
  },

  // Scratch Food & Bakery
  {
    id: 'greg-avocado-toast',
    name: 'Artisan Avocado Toast',
    category: 'Scratch Food & Bakery',
    description: 'Thick sourdough toast, mashed hass avocado, cherry tomatoes, radish slivers, everything bagel spice, and chili oil drizzle.',
    priceUsd: 8.95,
    priceInr: 895,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0455/6141/files/gregorys-location-img.png',
    popular: true,
    isVegan: true,
    calories: '340 kcal'
  },
  {
    id: 'greg-bacon-egg-croissant',
    name: 'Bacon, Egg & Cheddar Croissant',
    category: 'Scratch Food & Bakery',
    description: 'Applewood smoked bacon, scrambled cage-free egg, and melted sharp white cheddar on our house-baked butter croissant.',
    priceUsd: 7.95,
    priceInr: 795,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0455/6141/files/gregorys-location-img.png',
    popular: true,
    calories: '480 kcal'
  },
  {
    id: 'greg-vegan-wrap',
    name: 'Vegan Deluxe Breakfast Wrap',
    category: 'Scratch Food & Bakery',
    description: 'Just Egg scramble, Beyond breakfast sausage, chipotle cashew cheese, and spinach rolled in a toasted whole wheat wrap.',
    priceUsd: 8.45,
    priceInr: 845,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0455/6141/files/gregorys-location-img.png',
    isVegan: true,
    calories: '410 kcal'
  },
  {
    id: 'greg-pumpkin-scone',
    name: 'Glazed Spiced Pumpkin Scone',
    category: 'Scratch Food & Bakery',
    description: 'Baked fresh every morning in NYC with nutmeg, cloves, pumpkin puree, and sweet cinnamon glaze.',
    priceUsd: 4.25,
    priceInr: 425,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0455/6141/files/gregorys-location-img.png',
    calories: '360 kcal'
  }
];

export const GREGORYS_PRODUCTS: GregorysProduct[] = [
  {
    id: 'greg-prod-slow-jam',
    title: 'Slow Jam - Decaf Blend',
    category: 'Packaged Coffee',
    priceUsd: 17.50,
    priceInr: 1750,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0455/6141/files/slow-jam-decaf-blend-gregorys-834760.jpg?v=1740202855',
    description: 'Swiss Water processed decaf with honey sweetness, toasted hazelnut, and dark cacao. Drink anytime without jitters.',
    inStock: true
  },
  {
    id: 'greg-prod-fellow-mug',
    title: 'Black Fellow Carter Everywhere Mug',
    category: 'Merch & Drinkware',
    priceUsd: 35.00,
    priceInr: 3500,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0455/6141/files/black-fellow-mug-gregorys-coffee-166551.png?v=1763150665',
    description: 'Custom matte black Fellow Carter Move Mug featuring the iconic Gregorys glasses logo. Ceramic interior prevents flavor transfer.',
    inStock: true
  },
  {
    id: 'greg-prod-beanie',
    title: 'Gregorys BEANie',
    category: 'Merch & Drinkware',
    priceUsd: 28.00,
    priceInr: 2800,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0455/6141/files/gregorys-beanie-gregorys-coffee-6079166.png?v=1763937413',
    description: 'Ribbed knit cuff beanie with embroidered white glasses emblem. Essential NYC cold brew gear.',
    inStock: true
  },
  {
    id: 'greg-prod-snapback',
    title: 'Espresso Snapback Hat',
    category: 'Merch & Drinkware',
    priceUsd: 32.00,
    priceInr: 3200,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0455/6141/files/espresso-snapback-gregorys-coffee-886699.png?v=1733323917',
    description: 'Structured 6-panel flat brim snapback with tonal embroidered branding.',
    inStock: true
  },
  {
    id: 'greg-prod-corkcicle',
    title: 'Corkcicle BIG Cup (30 oz)',
    category: 'Merch & Drinkware',
    priceUsd: 38.00,
    priceInr: 3800,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0455/6141/files/corkcicle-big-cup-gregorys-coffee-867071.png?v=1748537196',
    description: 'Triple-insulated stainless steel tumbler with spill-proof straw lid and comfortable grip handle.',
    inStock: true
  },
  {
    id: 'greg-prod-miir-tumbler',
    title: 'Gregorys MiiR Tumbler (16 oz)',
    category: 'Merch & Drinkware',
    priceUsd: 30.00,
    priceInr: 3000,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0455/6141/files/gregorys-miir-tumbler-gregorys-coffee-291400.png?v=1724126411',
    description: 'Sleek double-wall tumbler fitting standard car cup holders. Give Code printed on bottom supports clean water projects.',
    inStock: true
  },
  {
    id: 'greg-prod-gift-card',
    title: 'Gregorys Coffee Digital Gift Card',
    category: 'Gift Cards',
    priceUsd: 25.00,
    priceInr: 2500,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0455/6141/files/gregorys-gift-card-gregorys-coffee-2144650.png?v=1763606034',
    description: 'Instant coffee credit for mobile order-ahead or in-store across all 87+ locations.',
    inStock: true
  }
];

export const GREGORYS_LOCATIONS: GregorysLocation[] = [
  {
    id: 'greg-loc-wall-st',
    name: '100 Wall Street',
    neighborhood: 'Financial District',
    city: 'New York',
    state: 'NY',
    address: '100 Wall St, New York, NY 10005',
    hours: 'Mon–Fri 6:30 AM – 6:00 PM, Sat–Sun 7:30 AM – 5:00 PM',
    phone: '(212) 785-5020',
    hasOrderAhead: true
  },
  {
    id: 'greg-loc-midtown-5th',
    name: '327 5th Avenue (Empire State)',
    neighborhood: 'Midtown Manhattan',
    city: 'New York',
    state: 'NY',
    address: '327 5th Ave, New York, NY 10016',
    hours: 'Daily 6:30 AM – 7:00 PM',
    phone: '(212) 683-1188',
    hasOrderAhead: true
  },
  {
    id: 'greg-loc-grand-central',
    name: '874 6th Avenue',
    neighborhood: 'Herald Square / Midtown',
    city: 'New York',
    state: 'NY',
    address: '874 6th Ave, New York, NY 10001',
    hours: 'Mon–Fri 6:00 AM – 7:30 PM, Sat–Sun 7:00 AM – 6:30 PM',
    phone: '(212) 725-7200',
    hasOrderAhead: true
  },
  {
    id: 'greg-loc-brooklyn-court',
    name: '16 Court Street',
    neighborhood: 'Brooklyn Heights',
    city: 'Brooklyn',
    state: 'NY',
    address: '16 Court St, Brooklyn, NY 11241',
    hours: 'Daily 7:00 AM – 6:00 PM',
    phone: '(718) 522-1200',
    hasOrderAhead: true
  },
  {
    id: 'greg-loc-jersey-city',
    name: '525 Washington Blvd (Newport)',
    neighborhood: 'Downtown Newport',
    city: 'Jersey City',
    state: 'NJ',
    address: '525 Washington Blvd, Jersey City, NJ 07310',
    hours: 'Mon–Fri 6:30 AM – 7:00 PM, Sat–Sun 7:30 AM – 6:00 PM',
    phone: '(201) 626-4444',
    hasOrderAhead: true
  },
  {
    id: 'greg-loc-dc-conn',
    name: '1000 Connecticut Ave NW',
    neighborhood: 'Farragut Square',
    city: 'Washington',
    state: 'DC',
    address: '1000 Connecticut Ave NW, Washington, DC 20036',
    hours: 'Mon–Fri 7:00 AM – 5:00 PM, Sat 8:00 AM – 4:00 PM',
    phone: '(202) 833-2200',
    hasOrderAhead: true
  }
];

export const GREGORYS_WEBSITE: BusinessWebsite = {
  id: 'brew-bloom-gregorys',
  slug: 'brew-bloom-gregorys',
  businessName: 'BREW & BLOOM — Fast Specialty Coffee (Gregorys Coffee NYC Inspiration)',
  category: 'cafe',
  templateId: 'gregorys-coffee',
  tagline: 'See Coffee Differently · High-Speed Specialty Coffee & Scratch Baking',
  description: 'NYC specialty coffee pioneer founded by Gregory Zamfotis. High-speed espresso bars, world-class cold brew like Hall & Oats, fresh scratch bakery, and dairy-free milk alternatives always free.',
  ownerName: 'Gregory Zamfotis / BREW & BLOOM',
  phone: '(917) 383-0636',
  whatsapp: '19173830636',
  email: 'info@gregoryscoffee.com',
  address: '327 5th Ave, New York, NY 10016, USA',
  city: 'New York',
  state: 'New York',
  mapsUrl: 'https://maps.google.com/?q=Gregorys+Coffee+New+York',
  openingHours: 'Mon–Fri 6:30 AM – 7:00 PM, Sat–Sun 7:00 AM – 6:30 PM',
  logoUrl: 'https://cdn.shopify.com/s/files/1/0455/6141/files/gregorys-location-img.png',
  coverUrl: 'https://cdn.shopify.com/s/files/1/0455/6141/files/gregorys-location-img.png',
  primaryColor: '#111111',
  secondaryColor: '#e11d48',
  fontFamily: 'Inter',
  bookingType: 'table_reservation',
  bookingCtaLabel: 'Order Ahead',
  specialBadge: 'See Coffee Differently',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 1999,
  paymentStatus: 'paid',
  createdAt: '2026-02-18T08:00:00.000Z',
  updatedAt: '2026-09-29T14:00:00.000Z',
  sections: [
    { id: 'hero', title: 'See Coffee Differently', isEnabled: true, order: 1 },
    { id: 'cold-brew', title: 'Signature Cold Brew Creations', isEnabled: true, order: 2 },
    { id: 'app', title: 'G-Family App & Rewards', isEnabled: true, order: 3 },
    { id: 'scratch-food', title: 'Fresh Scratch Bakery & Breakfast', isEnabled: true, order: 4 },
    { id: 'locations', title: 'NYC & National Espresso Bars', isEnabled: true, order: 5 },
    { id: 'story', title: 'The Gregorys Story', isEnabled: true, order: 6 }
  ],
  items: GREGORYS_MENU.map(i => ({
    id: i.id,
    name: i.name,
    description: i.description,
    price: i.priceInr,
    category: i.category,
    imageUrl: i.imageUrl,
    isVeg: !!i.isVegan,
    popular: !!i.popular,
    badge: i.category
  })),
  offers: [
    {
      id: 'offer-greg-app',
      title: '$5 Off Your First In-App Order',
      discount: '$5 Credit',
      code: 'GFAMILY5',
      description: 'Download the Gregorys app and receive $5 credit toward any drink or scratch baked item.',
      validTill: '31 Dec 2026',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'gal-greg-1',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0455/6141/files/black-fellow-mug-gregorys-coffee-166551.png?v=1763150665',
      title: 'Black Fellow Everywhere Mug',
      category: 'products'
    },
    {
      id: 'gal-greg-2',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0455/6141/files/gregorys-location-img.png',
      title: 'Manhattan Espresso Bar & Cold Brew Station',
      category: 'interior'
    }
  ]
};
