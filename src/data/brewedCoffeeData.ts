import { BusinessWebsite } from '../types';

export interface BrewedMenuItem {
  id: string;
  name: string;
  category: 'Coffee & Espresso' | 'Frozen Drinks & Smoothies' | 'Breakfast & Bakery' | 'Lunch & Paninis' | 'Cocktails & Spirits';
  description: string;
  priceUsd: number;
  priceInr: number;
  imageUrl: string;
  popular?: boolean;
}

export interface BrewedLocation {
  id: string;
  name: string;
  town: string;
  address: string;
  phone: string;
  hours: string;
  hasDriveThru?: boolean;
  hasPatio?: boolean;
}

export const BREWED_MENU: BrewedMenuItem[] = [
  // Coffee & Espresso
  {
    id: 'brw-frozen-awakening',
    name: 'The Frozen Awakening',
    category: 'Frozen Drinks & Smoothies',
    description: 'Our world-famous blended iced espresso frappe with rich dark mocha, caramel swirl, and thick whipped cream.',
    priceUsd: 6.25,
    priceInr: 625,
    imageUrl: 'https://brewedcoffeeshop.com/wp-content/uploads/2026/09/big_cup-1000x1024.jpg',
    popular: true
  },
  {
    id: 'brw-caramel-macchiato',
    name: 'Caramel Cloud Macchiato',
    category: 'Coffee & Espresso',
    description: 'Freshly steamed milk marked with bold espresso shots and layered with vanilla bean and buttery caramel drizzle.',
    priceUsd: 5.75,
    priceInr: 575,
    imageUrl: 'https://brewedcoffeeshop.com/wp-content/uploads/2026/09/big_cup-1000x1024.jpg',
    popular: true
  },
  {
    id: 'brw-nitro-cold-brew',
    name: 'Nitro Cold Brew on Tap',
    category: 'Coffee & Espresso',
    description: 'Slow-steeped for 24 hours in Rhode Island, infused with micro-nitrogen bubbles for a velvety cascading head.',
    priceUsd: 5.50,
    priceInr: 550,
    imageUrl: 'https://brewedcoffeeshop.com/wp-content/uploads/2026/09/big_cup-1000x1024.jpg',
    popular: true
  },
  {
    id: 'brw-house-drip',
    name: 'Brewed Signature House Roast',
    category: 'Coffee & Espresso',
    description: 'Freshly ground and brewed continuously throughout the morning. Medium body with notes of toasted walnut and milk chocolate.',
    priceUsd: 3.25,
    priceInr: 325,
    imageUrl: 'https://brewedcoffeeshop.com/wp-content/uploads/2026/09/big_cup-1000x1024.jpg'
  },

  // Breakfast & Bakery
  {
    id: 'brw-cranston-ciabatta',
    name: 'Rhode Island Breakfast Ciabatta',
    category: 'Breakfast & Bakery',
    description: 'Thick applewood smoked bacon, scrambled farm eggs, and sharp Vermont cheddar pressed hot on toasted rosemary ciabatta.',
    priceUsd: 7.95,
    priceInr: 795,
    imageUrl: 'https://brewedcoffeeshop.com/wp-content/uploads/2026/09/big_cup-1000x1024.jpg',
    popular: true
  },
  {
    id: 'brw-spinach-feta-croissant',
    name: 'Spinach & Greek Feta Pastry',
    category: 'Breakfast & Bakery',
    description: 'Flaky baked butter croissant dough layered with sautéed baby spinach, dill, and authentic crumbled feta.',
    priceUsd: 5.25,
    priceInr: 525,
    imageUrl: 'https://brewedcoffeeshop.com/wp-content/uploads/2026/09/big_cup-1000x1024.jpg'
  },
  {
    id: 'brw-jumbo-blueberry-muffin',
    name: 'Jumbo Maine Blueberry Muffin',
    category: 'Breakfast & Bakery',
    description: 'Freshly baked daily with plump native blueberries and crunchy cinnamon sugar crumb topping.',
    priceUsd: 4.25,
    priceInr: 425,
    imageUrl: 'https://brewedcoffeeshop.com/wp-content/uploads/2026/09/big_cup-1000x1024.jpg'
  },

  // Lunch & Paninis
  {
    id: 'brw-chicken-pesto-panini',
    name: 'Tuscan Chicken Pesto Panini',
    category: 'Lunch & Paninis',
    description: 'Grilled chicken breast, basil pesto, fresh mozzarella, and sun-dried tomatoes pressed crispy on sourdough.',
    priceUsd: 11.50,
    priceInr: 1150,
    imageUrl: 'https://brewedcoffeeshop.com/wp-content/uploads/2026/09/big_cup-1000x1024.jpg',
    popular: true
  },
  {
    id: 'brw-turkey-club-wrap',
    name: 'Roasted Turkey Club Wrap',
    category: 'Lunch & Paninis',
    description: 'Sliced oven-roasted turkey, crisp bacon, avocado, romaine, and garlic herb mayo in a spinach tortilla.',
    priceUsd: 10.95,
    priceInr: 1095,
    imageUrl: 'https://brewedcoffeeshop.com/wp-content/uploads/2026/09/big_cup-1000x1024.jpg'
  },

  // Cocktails & Spirits
  {
    id: 'brw-baileys-latte',
    name: 'Spiked Bailey’s Irish Cream Latte',
    category: 'Cocktails & Spirits',
    description: 'Authentic Bailey’s Irish Cream liqueur, double espresso shots, and steamed whole milk dusted with cocoa.',
    priceUsd: 12.00,
    priceInr: 1200,
    imageUrl: 'https://brewedcoffeeshop.com/wp-content/uploads/2026/09/big_cup-1000x1024.jpg',
    popular: true
  },
  {
    id: 'brw-espresso-martini',
    name: 'Brewed Signature Espresso Martini',
    category: 'Cocktails & Spirits',
    description: 'Tito’s Handmade Vodka, Kahlúa, freshly brewed espresso, and simple syrup shaken until velvety.',
    priceUsd: 13.50,
    priceInr: 1350,
    imageUrl: 'https://brewedcoffeeshop.com/wp-content/uploads/2026/09/big_cup-1000x1024.jpg'
  }
];

export const BREWED_LOCATIONS: BrewedLocation[] = [
  {
    id: 'brw-cranston',
    name: 'Cranston Location',
    town: 'Cranston, RI',
    address: '1200 Pontiac Ave, Cranston, RI 02920',
    phone: '(401) 275-0200',
    hours: 'Mon–Sat 6:00 AM – 9:00 PM, Sun 7:00 AM – 8:00 PM',
    hasDriveThru: true,
    hasPatio: true
  },
  {
    id: 'brw-warwick',
    name: 'Warwick Location',
    town: 'Warwick, RI',
    address: '1316 Bald Hill Rd, Warwick, RI 02886',
    phone: '(401) 822-2253',
    hours: 'Mon–Sat 6:00 AM – 9:00 PM, Sun 7:00 AM – 8:00 PM',
    hasDriveThru: true,
    hasPatio: true
  },
  {
    id: 'brw-cherry-hill',
    name: 'Cherry Hill Location (Johnston)',
    town: 'Johnston, RI',
    address: 'Cherry Hill Rd, Johnston, RI 02919',
    phone: '(401) 949-0020',
    hours: 'Daily 6:30 AM – 8:00 PM',
    hasDriveThru: true
  }
];

export const BREWED_WEBSITE: BusinessWebsite = {
  id: 'brew-bloom-brewed',
  slug: 'brew-bloom-brewed',
  businessName: 'BREW & BLOOM — Premier Coffee Experience (Brewed Awakenings Recreation)',
  category: 'cafe',
  templateId: 'brewed-coffee',
  tagline: 'Rhode Island’s Premier Coffee House, Paninis & Cocktails',
  description: 'Family-owned Rhode Island coffee institution since 1996. Serving signature Frozen Awakenings, hand-crafted espresso, breakfast paninis, and artisanal cocktails across Cranston, Warwick, and Johnston.',
  ownerName: 'David & Natalie Levesque / BREW & BLOOM',
  phone: '(401) 275-0200',
  whatsapp: '14012750200',
  email: 'info@brewedcoffeeshop.com',
  address: '1200 Pontiac Ave, Cranston, RI 02920, USA',
  city: 'Cranston',
  state: 'Rhode Island',
  mapsUrl: 'https://maps.google.com/?q=Brewed+Awakenings+Cranston+RI',
  openingHours: 'Mon–Sat 6:00 AM – 9:00 PM, Sun 7:00 AM – 8:00 PM',
  logoUrl: 'https://brewedcoffeeshop.com/wp-content/uploads/2024/03/logo-horz.png',
  coverUrl: 'https://brewedcoffeeshop.com/wp-content/uploads/2026/09/big_cup-1000x1024.jpg',
  primaryColor: '#3c2415',
  secondaryColor: '#c07d3b',
  fontFamily: 'Inter',
  bookingType: 'table_reservation',
  bookingCtaLabel: 'Order Ahead',
  specialBadge: 'Rhode Island Since 1996',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 1999,
  paymentStatus: 'paid',
  createdAt: '2026-02-22T08:00:00.000Z',
  updatedAt: '2026-09-29T14:30:00.000Z',
  sections: [
    { id: 'hero', title: 'Rhode Island Premier Coffee Experience', isEnabled: true, order: 1 },
    { id: 'menu', title: 'Handcrafted Espresso & Paninis', isEnabled: true, order: 2 },
    { id: 'locations', title: 'Cranston, Warwick & Johnston Drive-Thrus', isEnabled: true, order: 3 },
    { id: 'liquor', title: 'Cocktails & Spiked Coffee', isEnabled: true, order: 4 },
    { id: 'catering', title: 'Meeting Catering & Coffee Boxes', isEnabled: true, order: 5 }
  ],
  items: BREWED_MENU.map(i => ({
    id: i.id,
    name: i.name,
    description: i.description,
    price: i.priceInr,
    category: i.category,
    imageUrl: i.imageUrl,
    isVeg: !i.description.toLowerCase().includes('bacon') && !i.description.toLowerCase().includes('chicken') && !i.description.toLowerCase().includes('turkey'),
    popular: !!i.popular,
    badge: i.category
  })),
  offers: [
    {
      id: 'offer-brw-drive-thru',
      title: 'Morning Pastry + Coffee Combo',
      discount: '15% Off Combo',
      code: 'AWAKENINGS15',
      description: 'Enjoy 15% off when you pair any fresh baked muffin or breakfast panini with a large iced coffee.',
      validTill: '31 Dec 2026',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'gal-brw-1',
      imageUrl: 'https://brewedcoffeeshop.com/wp-content/uploads/2026/09/big_cup-1000x1024.jpg',
      title: 'The Signature Frozen Awakening Frappe',
      category: 'products'
    }
  ]
};
