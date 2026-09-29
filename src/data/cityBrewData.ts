import { BusinessWebsite } from '../types';

export interface CityBrewMenuItem {
  id: string;
  name: string;
  category: 'Featured' | 'Coffee & Espresso' | 'Blended' | 'Tea & Refreshers' | 'Baked Goods' | 'Savory' | 'Catering';
  description: string;
  priceUsd: number;
  priceInr: number;
  imageUrl: string;
  popular?: boolean;
  calories?: string;
  tempOptions?: ('Hot' | 'Iced' | 'Blended')[];
  allergens?: string[];
}

export interface CityBrewLocation {
  id: string;
  name: string;
  city: string;
  state: 'Montana' | 'Wyoming' | 'North Dakota' | 'South Dakota';
  address: string;
  hours: string;
  phone: string;
  hasDriveThru: boolean;
  hasIndoorSeating: boolean;
  orderUrl?: string;
}

export interface CityBrewShopItem {
  id: string;
  name: string;
  category: 'Coffee Beans' | 'Merch & Tumblers' | 'Gift Cards';
  roast?: 'Light' | 'Medium' | 'Dark' | 'Espresso';
  description: string;
  priceUsd: number;
  priceInr: number;
  imageUrl: string;
  weightOrSize?: string;
  inStock: boolean;
}

export const CITY_BREW_MENU: CityBrewMenuItem[] = [
  // Featured
  {
    id: 'cb-montana-morning',
    name: 'Montana Morning Latte',
    category: 'Featured',
    description: 'Our signature espresso drink featuring rich white chocolate and sweet caramel pecan, blended with our famous Cool River espresso and velvety steamed milk.',
    priceUsd: 5.75,
    priceInr: 575,
    imageUrl: 'https://citybrew.com/wp-content/uploads/2024/06/cbrw-cupicon-black.webp',
    popular: true,
    calories: '380 - 520 kcal',
    tempOptions: ['Hot', 'Iced', 'Blended']
  },
  {
    id: 'cb-406-latte',
    name: '406 Latte',
    category: 'Featured',
    description: 'Named after Montana’s legendary area code. White chocolate combined with rich sweetened condensed milk and freshly pulled dark espresso.',
    priceUsd: 5.85,
    priceInr: 585,
    imageUrl: 'https://citybrew.com/wp-content/uploads/2024/06/cbrw-cupicon-black.webp',
    popular: true,
    calories: '410 - 540 kcal',
    tempOptions: ['Hot', 'Iced', 'Blended']
  },
  {
    id: 'cb-grizzly-granita',
    name: 'Grizzly Granita',
    category: 'Featured',
    description: 'A Mountain West classic. Smooth coffee frappe swirled with rich dark chocolate, creamy peanut butter, and finished with whipped cream and chocolate drizzle.',
    priceUsd: 6.25,
    priceInr: 625,
    imageUrl: 'https://citybrew.com/wp-content/uploads/2024/06/cbrw-cupicon-black.webp',
    popular: true,
    calories: '490 - 680 kcal',
    tempOptions: ['Blended']
  },
  {
    id: 'cb-montana-lemonade',
    name: 'Montana Huckleberry Lemonade',
    category: 'Featured',
    description: 'Crisp tart lemonade infused with wild Montana mountain huckleberry syrup and served over cracked ice. Refreshing and vibrant.',
    priceUsd: 4.95,
    priceInr: 495,
    imageUrl: 'https://citybrew.com/wp-content/uploads/2024/06/cbrw-cupicon-black.webp',
    calories: '180 kcal',
    tempOptions: ['Iced']
  },

  // Coffee & Espresso
  {
    id: 'cb-bianco',
    name: 'Bianco Latte',
    category: 'Coffee & Espresso',
    description: 'A decadent latte made with a dash of heavy cream, pure cane sugar syrup, and double shots of Cool River espresso.',
    priceUsd: 5.65,
    priceInr: 565,
    imageUrl: 'https://citybrew.com/wp-content/uploads/2024/06/cbrw-cupicon-black.webp',
    tempOptions: ['Hot', 'Iced']
  },
  {
    id: 'cb-campfire-mocha',
    name: 'Campfire Mocha',
    category: 'Coffee & Espresso',
    description: 'Rich dark chocolate mocha with toasted marshmallow syrup, graham cracker sprinkle, and fluffy whipped cream.',
    priceUsd: 5.95,
    priceInr: 595,
    imageUrl: 'https://citybrew.com/wp-content/uploads/2024/06/cbrw-cupicon-black.webp',
    popular: true,
    tempOptions: ['Hot', 'Iced', 'Blended']
  },
  {
    id: 'cb-sweet-cream-cold-brew',
    name: 'Vanilla Sweet Cream Cold Brew',
    category: 'Coffee & Espresso',
    description: 'Steeped for 20 hours in Billings for ultra-low acidity, topped with house-made vanilla sweet cream that cascades through the coffee.',
    priceUsd: 5.25,
    priceInr: 525,
    imageUrl: 'https://citybrew.com/wp-content/uploads/2024/06/cbrw-cupicon-black.webp',
    popular: true,
    tempOptions: ['Iced']
  },
  {
    id: 'cb-house-drip',
    name: 'Freshly Roasted Drip Coffee',
    category: 'Coffee & Espresso',
    description: 'Brewed fresh every 30 minutes from our top 2% specialty Arabica beans. Choice of Montana Morning (Medium) or French Roast (Dark).',
    priceUsd: 3.25,
    priceInr: 325,
    imageUrl: 'https://citybrew.com/wp-content/uploads/2024/06/cbrw-cupicon-black.webp',
    tempOptions: ['Hot']
  },

  // Blended
  {
    id: 'cb-caramel-creme-frappe',
    name: 'Caramel Crème Frappe',
    category: 'Blended',
    description: 'Vanilla bean frappe swirled with toasted marshmallow and rich caramel drizzle, finished with whipped cream and gold sugar.',
    priceUsd: 6.15,
    priceInr: 615,
    imageUrl: 'https://citybrew.com/wp-content/uploads/2024/06/cbrw-cupicon-black.webp',
    tempOptions: ['Blended']
  },
  {
    id: 'cb-strawberry-matcha-blended',
    name: 'Strawberry Matcha Blended',
    category: 'Blended',
    description: 'Japanese ceremonial grade green tea matcha blended with real strawberry puree and sweet cream.',
    priceUsd: 6.35,
    priceInr: 635,
    imageUrl: 'https://citybrew.com/wp-content/uploads/2024/06/cbrw-cupicon-black.webp',
    tempOptions: ['Blended']
  },
  {
    id: 'cb-wildberry-smoothie',
    name: 'Big Sky Wildberry Real Fruit Smoothie',
    category: 'Blended',
    description: '100% real crushed blackberries, blueberries, and raspberries blended smooth with non-fat vanilla yogurt or oat milk.',
    priceUsd: 5.95,
    priceInr: 595,
    imageUrl: 'https://citybrew.com/wp-content/uploads/2024/06/cbrw-cupicon-black.webp',
    tempOptions: ['Blended']
  },

  // Tea & Refreshers
  {
    id: 'cb-glacier-chai',
    name: 'Glacier Chai Tea Latte',
    category: 'Tea & Refreshers',
    description: 'Spiced Indian black tea infused with ginger, cardamom, cinnamon, and melted creamy white chocolate.',
    priceUsd: 5.45,
    priceInr: 545,
    imageUrl: 'https://citybrew.com/wp-content/uploads/2024/06/cbrw-cupicon-black.webp',
    tempOptions: ['Hot', 'Iced']
  },
  {
    id: 'cb-london-fog',
    name: 'Big Sky London Fog',
    category: 'Tea & Refreshers',
    description: 'Organic Earl Grey whole leaf tea steeped with pure vanilla bean syrup and topped with thick steamed milk foam.',
    priceUsd: 4.85,
    priceInr: 485,
    imageUrl: 'https://citybrew.com/wp-content/uploads/2024/06/cbrw-cupicon-black.webp',
    tempOptions: ['Hot']
  },
  {
    id: 'cb-blue-raspberry-charger',
    name: 'Blue Raspberry Plant-Based Charger',
    category: 'Tea & Refreshers',
    description: 'Botanical energy drink powered by green coffee extract, lotus flower, and tart blue raspberry served sparkling over ice.',
    priceUsd: 5.35,
    priceInr: 535,
    imageUrl: 'https://citybrew.com/wp-content/uploads/2024/06/cbrw-cupicon-black.webp',
    tempOptions: ['Iced']
  },

  // Baked Goods
  {
    id: 'cb-blueberry-monkey-muffin',
    name: 'Blueberry Monkey Muffin',
    category: 'Baked Goods',
    description: 'Jumbo gourmet muffin packed with wild mountain blueberries, cinnamon brown sugar streusel crumble, and cream cheese filling.',
    priceUsd: 4.25,
    priceInr: 425,
    imageUrl: 'https://citybrew.com/wp-content/uploads/2024/11/97_bread_muffin_box_4e3a7205-750x420-1-768x430.webp',
    popular: true
  },
  {
    id: 'cb-pumpkin-caramel-muffin',
    name: 'Pumpkin Caramel Cream Muffin',
    category: 'Baked Goods',
    description: 'Seasonal spiced pumpkin muffin with sweet caramel cream center and candied pumpkin seed crust.',
    priceUsd: 4.35,
    priceInr: 435,
    imageUrl: 'https://citybrew.com/wp-content/uploads/2024/11/97_bread_muffin_box_4e3a7205-750x420-1-768x430.webp'
  },
  {
    id: 'cb-cinnamon-scone',
    name: 'Cinnamon Chip Scone',
    category: 'Baked Goods',
    description: 'Buttery flaky bakery scone studded with melted cinnamon drops and topped with sweet powdered glaze.',
    priceUsd: 3.95,
    priceInr: 395,
    imageUrl: 'https://citybrew.com/wp-content/uploads/2024/11/97_bread_muffin_box_4e3a7205-750x420-1-768x430.webp'
  },
  {
    id: 'cb-caramel-pecan-roll',
    name: 'Caramel Pecan Giant Cinnamon Roll',
    category: 'Baked Goods',
    description: 'Warm pull-apart brioche roll swirled with Korintje cinnamon, drenched in buttery caramel sauce and toasted Montana pecans.',
    priceUsd: 4.95,
    priceInr: 495,
    imageUrl: 'https://citybrew.com/wp-content/uploads/2024/11/97_bread_muffin_box_4e3a7205-750x420-1-768x430.webp',
    popular: true
  },

  // Savory
  {
    id: 'cb-ham-swiss-croissant',
    name: 'Ham & Swiss Bakery Croissant',
    category: 'Savory',
    description: 'Thick smoked ham, aged Swiss cheese, and fluffy eggs served warm on a toasted European butter croissant.',
    priceUsd: 6.85,
    priceInr: 685,
    imageUrl: 'https://citybrew.com/wp-content/uploads/2024/06/cbrw-cupicon-black.webp',
    popular: true
  },
  {
    id: 'cb-double-stack-pretzel',
    name: 'Double Stack Pretzel Sandwich',
    category: 'Savory',
    description: 'Applewood smoked bacon, breakfast sausage patty, cheddar cheese, and folded egg on a soft salted Bavarian pretzel bun.',
    priceUsd: 7.25,
    priceInr: 725,
    imageUrl: 'https://citybrew.com/wp-content/uploads/2024/06/cbrw-cupicon-black.webp',
    popular: true
  },
  {
    id: 'cb-ciabatta-bacon-gouda',
    name: 'Ciabatta Bacon & Smoked Gouda',
    category: 'Savory',
    description: 'Crispy bacon, molten smoked gouda, egg frittata, and herb aioli pressed on artisan ciabatta bread.',
    priceUsd: 6.95,
    priceInr: 695,
    imageUrl: 'https://citybrew.com/wp-content/uploads/2024/06/cbrw-cupicon-black.webp'
  },
  {
    id: 'cb-egg-bites',
    name: 'Bacon & Gruyere Sous-Vide Egg Bites',
    category: 'Savory',
    description: 'Gluten-free velvety egg bites cooked sous-vide with crispy bacon, gruyere cheese, and green onions. High protein.',
    priceUsd: 5.75,
    priceInr: 575,
    imageUrl: 'https://citybrew.com/wp-content/uploads/2024/06/cbrw-cupicon-black.webp'
  },

  // Catering
  {
    id: 'cb-togo-pot-96oz',
    name: '96 oz Fresh Coffee To-Go Pot',
    category: 'Catering',
    description: 'Insulated cardboard beverage box keeping 96 oz (approx 8-10 cups) of Montana Morning or Dark Roast piping hot for 2 hours. Includes cups, lids, cream, and sugars.',
    priceUsd: 24.50,
    priceInr: 2450,
    imageUrl: 'https://citybrew.com/wp-content/uploads/2024/08/togo-pot-md-768x430.webp',
    popular: true
  },
  {
    id: 'cb-hot-chocolate-togo',
    name: '96 oz Hot Chocolate To-Go Pot',
    category: 'Catering',
    description: 'Decadent steaming hot chocolate made with Dutch cocoa and sweet milk. Perfect for ski trips, early morning meetings, and events.',
    priceUsd: 26.50,
    priceInr: 2650,
    imageUrl: 'https://citybrew.com/wp-content/uploads/2024/08/togo-pot-md-768x430.webp'
  },
  {
    id: 'cb-bread-muffin-box',
    name: 'Assorted Bread & Muffin Box (12 Pack)',
    category: 'Catering',
    description: 'Chef’s assortment of fresh-baked blueberry monkey muffins, pumpkin caramel cream muffins, sliced banana bread, and cinnamon scones.',
    priceUsd: 38.00,
    priceInr: 3800,
    imageUrl: 'https://citybrew.com/wp-content/uploads/2024/11/97_bread_muffin_box_4e3a7205-750x420-1-768x430.webp'
  }
];

export const CITY_BREW_LOCATIONS: CityBrewLocation[] = [
  {
    id: 'loc-billings-grand',
    name: 'Grand Avenue (Across from West Park)',
    city: 'Billings',
    state: 'Montana',
    address: '1640 Grand Ave, Billings, MT 59102',
    hours: 'Mon–Sat 5:30 AM – 7:00 PM, Sun 6:00 AM – 6:00 PM',
    phone: '(406) 259-9944',
    hasDriveThru: true,
    hasIndoorSeating: true
  },
  {
    id: 'loc-billings-shiloh',
    name: 'Shiloh Crossing (Near Kohl’s)',
    city: 'Billings',
    state: 'Montana',
    address: '1008 Shiloh Crossing Blvd, Billings, MT 59106',
    hours: 'Mon–Sat 5:30 AM – 8:00 PM, Sun 6:00 AM – 7:00 PM',
    phone: '(406) 651-8822',
    hasDriveThru: true,
    hasIndoorSeating: true
  },
  {
    id: 'loc-bozeman-7th',
    name: 'North 7th Avenue',
    city: 'Bozeman',
    state: 'Montana',
    address: '1520 N 7th Ave, Bozeman, MT 59715',
    hours: 'Daily 5:30 AM – 7:00 PM',
    phone: '(406) 587-4321',
    hasDriveThru: true,
    hasIndoorSeating: true
  },
  {
    id: 'loc-missoula-brooks',
    name: 'Brooks & Reserve Street',
    city: 'Missoula',
    state: 'Montana',
    address: '2600 Brooks St, Missoula, MT 59801',
    hours: 'Mon–Sat 5:30 AM – 8:00 PM, Sun 6:00 AM – 7:00 PM',
    phone: '(406) 541-2739',
    hasDriveThru: true,
    hasIndoorSeating: true
  },
  {
    id: 'loc-helena-montana',
    name: 'North Montana Avenue',
    city: 'Helena',
    state: 'Montana',
    address: '2900 N Montana Ave, Helena, MT 59601',
    hours: 'Daily 5:30 AM – 7:00 PM',
    phone: '(406) 449-3311',
    hasDriveThru: true,
    hasIndoorSeating: true
  },
  {
    id: 'loc-great-falls-10th',
    name: '10th Avenue South',
    city: 'Great Falls',
    state: 'Montana',
    address: '1410 10th Ave S, Great Falls, MT 59405',
    hours: 'Daily 5:30 AM – 7:30 PM',
    phone: '(406) 727-5500',
    hasDriveThru: true,
    hasIndoorSeating: true
  },
  {
    id: 'loc-kalispell-heritage',
    name: 'Sunset Blvd & Heritage Way',
    city: 'Kalispell',
    state: 'Montana',
    address: '120 Heritage Way, Kalispell, MT 59901',
    hours: 'Daily 5:30 AM – 7:00 PM',
    phone: '(406) 752-9090',
    hasDriveThru: true,
    hasIndoorSeating: true
  },
  {
    id: 'loc-cody-wyoming',
    name: 'Yellowstone Ave',
    city: 'Cody',
    state: 'Wyoming',
    address: '1831 17th St, Cody, WY 82414',
    hours: 'Daily 6:00 AM – 6:00 PM',
    phone: '(307) 587-1998',
    hasDriveThru: true,
    hasIndoorSeating: true
  }
];

export const CITY_BREW_SHOP_PRODUCTS: CityBrewShopItem[] = [
  {
    id: 'shop-montana-morning',
    name: 'Montana Morning Signature Roast',
    category: 'Coffee Beans',
    roast: 'Medium',
    description: 'Our top-selling blend roasted in Billings. Notes of sweet cocoa, roasted almond, and smooth caramel finish. The quintessential Mountain West cup.',
    priceUsd: 15.99,
    priceInr: 1599,
    imageUrl: 'https://citybrew.com/wp-content/uploads/2024/08/cbrw-road-map-icons-2024-supporting-regular-version-10-copy-wht.webp',
    weightOrSize: '12 oz (340g)',
    inStock: true
  },
  {
    id: 'shop-cool-river-espresso',
    name: 'Cool River Espresso Blend',
    category: 'Coffee Beans',
    roast: 'Espresso',
    description: 'The foundation of all our lattes and mochas. Dense golden crema, rich baker’s chocolate, and sweet hazelnut aromatics.',
    priceUsd: 15.99,
    priceInr: 1599,
    imageUrl: 'https://citybrew.com/wp-content/uploads/2024/08/cbrw-road-map-icons-2024-supporting-regular-version-10-copy-wht.webp',
    weightOrSize: '12 oz (340g)',
    inStock: true
  },
  {
    id: 'shop-yellowstone-dark',
    name: 'Yellowstone Dark French Roast',
    category: 'Coffee Beans',
    roast: 'Dark',
    description: 'Smoky, bold, and unapologetically rich with toasted cedar, dark molasses, and bittersweet chocolate flavors.',
    priceUsd: 16.49,
    priceInr: 1649,
    imageUrl: 'https://citybrew.com/wp-content/uploads/2024/08/cbrw-road-map-icons-2024-supporting-regular-version-10-copy-wht.webp',
    weightOrSize: '12 oz (340g)',
    inStock: true
  },
  {
    id: 'shop-tumbler-20oz',
    name: 'Mountain West Insulated 20oz Tumbler',
    category: 'Merch & Tumblers',
    description: 'Double-wall vacuum insulated stainless steel tumbler featuring the iconic laser-etched City Brew logo. Keeps drinks hot for 8 hours or cold for 18 hours.',
    priceUsd: 24.99,
    priceInr: 2499,
    imageUrl: 'https://citybrew.com/wp-content/uploads/2024/06/cbrw-cupicon-black.webp',
    weightOrSize: '20 oz',
    inStock: true
  },
  {
    id: 'shop-gift-card',
    name: 'City Brew Digital Gift Card',
    category: 'Gift Cards',
    description: 'Deliver instant coffee cheer! Redeemable on the City Brew mobile app, online shop, and at any of our Montana & Wyoming drive-thru locations.',
    priceUsd: 25.00,
    priceInr: 2500,
    imageUrl: 'https://citybrew.com/wp-content/uploads/2024/06/cbrw-2024-logos_horizontal_altcolor.webp',
    weightOrSize: '$25 / $50 / $100',
    inStock: true
  }
];

export const CITY_BREW_WEBSITE: BusinessWebsite = {
  id: 'brew-bloom-city-brew',
  slug: 'brew-bloom-city-brew',
  businessName: 'BREW & BLOOM — Mountain West Coffee (City Brew Inspiration)',
  category: 'cafe',
  templateId: 'city-brew',
  tagline: 'Born and Roasted in Montana · Serving the Mountain West Since 1998',
  description: 'Specialty coffee roaster and drive-thru leader across Montana, Wyoming, and the Dakotas. Sourcing the top 2% of beans globally and serving signature favorites like the Montana Morning Latte.',
  ownerName: 'City Brew Coffee Roasters / BREW & BLOOM',
  phone: '(406) 259-9944',
  whatsapp: '14062599944',
  email: 'info@citybrew.com',
  address: '1640 Grand Ave, Billings, MT 59102, USA',
  city: 'Billings',
  state: 'Montana',
  mapsUrl: 'https://maps.google.com/?q=City+Brew+Coffee+Billings+MT',
  openingHours: 'Mon–Sat 5:30 AM – 7:30 PM, Sun 6:00 AM – 6:30 PM',
  logoUrl: 'https://citybrew.com/wp-content/uploads/2024/06/cbrw-2024-logos_horizontal_altcolor.webp',
  coverUrl: 'https://citybrew.com/wp-content/uploads/2024/08/togo-pot-md-768x430.webp',
  primaryColor: '#1b4332',
  secondaryColor: '#c28b38',
  fontFamily: 'Inter',
  bookingType: 'table_reservation',
  bookingCtaLabel: 'Order Ahead',
  specialBadge: 'Mountain West Since 1998',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 1999,
  paymentStatus: 'paid',
  createdAt: '2026-02-10T08:00:00.000Z',
  updatedAt: '2026-09-29T14:00:00.000Z',
  sections: [
    { id: 'hero', title: 'Mountain West Heritage', isEnabled: true, order: 1 },
    { id: 'menu', title: 'Discover Our Delicious Menu', isEnabled: true, order: 2 },
    { id: 'app', title: 'Order Ahead with our Mobile App', isEnabled: true, order: 3 },
    { id: 'perks', title: 'City Brew Perks Rewards', isEnabled: true, order: 4 },
    { id: 'locations', title: 'Find a Drive-Thru Near You', isEnabled: true, order: 5 },
    { id: 'story', title: 'Born and Roasted in Montana', isEnabled: true, order: 6 }
  ],
  items: CITY_BREW_MENU.map(i => ({
    id: i.id,
    name: i.name,
    description: i.description,
    price: i.priceInr,
    category: i.category,
    imageUrl: i.imageUrl,
    isVeg: !i.description.toLowerCase().includes('bacon') && !i.description.toLowerCase().includes('ham'),
    popular: !!i.popular,
    badge: i.category
  })),
  offers: [
    {
      id: 'offer-cb-perks',
      title: 'Double Points on Tuesdays with Perks App',
      discount: 'Double Rewards',
      code: 'MOUNTAINPERKS',
      description: 'Earn 4 points for every $1 spent every Tuesday when ordering through the City Brew mobile app.',
      validTill: '31 Dec 2026',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'gal-cb-1',
      imageUrl: 'https://citybrew.com/wp-content/uploads/2024/08/togo-pot-md-768x430.webp',
      title: 'Fresh Coffee To-Go Pots & Meeting Packs',
      category: 'products'
    },
    {
      id: 'gal-cb-2',
      imageUrl: 'https://citybrew.com/wp-content/uploads/2024/11/97_bread_muffin_box_4e3a7205-750x420-1-768x430.webp',
      title: 'Artisan Bakery Box & Cinnamon Pastries',
      category: 'interior'
    }
  ]
};
