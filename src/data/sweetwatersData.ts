import { BusinessWebsite } from '../types';

export interface SweetwatersItem {
  id: string;
  name: string;
  category: 'Signature Teas & Elixirs' | 'Global Espresso & Brews' | 'Ice Dragon Frappes' | 'Fresh Pastries & Savory Bites' | 'Catering & Coffee Boxes';
  description: string;
  priceUsd: number;
  priceInr: number;
  imageUrl: string;
  popular?: boolean;
  isVegetarian?: boolean;
  badge?: string;
}

export interface SweetwatersLocation {
  name: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  hours: string;
}

export const SWEETWATERS_LOCATIONS: SweetwatersLocation[] = [
  {
    name: 'Washington Street Historic Flagship',
    city: 'Ann Arbor',
    state: 'Michigan',
    address: '123 W Washington St, Ann Arbor, MI 48104',
    phone: '(734) 769-2331',
    hours: 'Mon–Sat: 6:00 AM – 9:00 PM · Sun: 7:00 AM – 8:00 PM'
  },
  {
    name: 'Plymouth Green Cafe',
    city: 'Ann Arbor',
    state: 'Michigan',
    address: '3393 Plymouth Rd, Ann Arbor, MI 48105',
    phone: '(734) 327-0808',
    hours: 'Mon–Fri: 6:30 AM – 8:00 PM · Sat–Sun: 7:00 AM – 8:00 PM'
  },
  {
    name: 'Smithsonian District Cafe',
    city: 'Columbus',
    state: 'Ohio',
    address: '150 S High St, Columbus, OH 43215',
    phone: '(614) 929-5500',
    hours: 'Daily: 7:00 AM – 7:00 PM'
  }
];

export const SWEETWATERS_ITEMS: SweetwatersItem[] = [
  {
    id: 'sw-dragon-eye',
    name: 'The Legendary Dragon Eye',
    category: 'Global Espresso & Brews',
    description: 'Our iconic house-blend dark roast brewed strong, sweetened with creamy sweetened condensed milk, and crowned with a bold shot of espresso.',
    priceUsd: 5.75,
    priceInr: 575,
    imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
    popular: true,
    badge: 'Original 1993'
  },
  {
    id: 'sw-ginger-lemon-tea',
    name: 'Real Ginger Lemon Tea',
    category: 'Signature Teas & Elixirs',
    description: 'Freshly minced ginger root slow-steeped with whole lemon slices and wildflower honey. Warming, zesty, immune-boosting, and 100% natural.',
    priceUsd: 5.25,
    priceInr: 525,
    imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    popular: true,
    badge: 'Fan Favorite'
  },
  {
    id: 'sw-matcha-latte',
    name: 'Imperial Ceremonial Matcha Latte',
    category: 'Signature Teas & Elixirs',
    description: 'First-harvest Japanese stone-ground Uji matcha whisked with warm vanilla and textured oat milk for an emerald energizing lift.',
    priceUsd: 6.25,
    priceInr: 625,
    imageUrl: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'sw-french-vietnamese-au-lait',
    name: 'French Vietnamese Cafe Au Lait',
    category: 'Global Espresso & Brews',
    description: 'French dark roast dripped over thick sweet condensed milk, served iced or piping hot with a velvety sweet finish.',
    priceUsd: 5.50,
    priceInr: 550,
    imageUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sw-strawberry-bliss-dragon',
    name: 'Strawberry Bliss Ice Dragon',
    category: 'Ice Dragon Frappes',
    description: 'Frozen blended cream frappe with real Oregon strawberry puree, Madagascar vanilla, and pillowy whipped cream swirl.',
    priceUsd: 6.50,
    priceInr: 650,
    imageUrl: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'sw-caramel-ice-dragon',
    name: 'Caramel Macchiato Ice Dragon',
    category: 'Ice Dragon Frappes',
    description: 'Blended espresso, rich sea-salt butter caramel, and cold milk topped with dark caramel drizzle.',
    priceUsd: 6.75,
    priceInr: 675,
    imageUrl: 'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sw-almond-croissant',
    name: 'Toasted Almond Frangipane Croissant',
    category: 'Fresh Pastries & Savory Bites',
    description: 'Flaky double-baked butter pastry filled with sweet almond frangipane cream, dusted with powdered sugar and toasted sliced almonds.',
    priceUsd: 4.95,
    priceInr: 495,
    imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    popular: true,
    isVegetarian: true
  },
  {
    id: 'sw-coffee-traveler',
    name: 'Coffee Traveler Box (Serves 10-12)',
    category: 'Catering & Coffee Boxes',
    description: '96 oz insulated box of freshly brewed house dark or medium roast with cups, lids, sugars, and organic half-and-half.',
    priceUsd: 26.00,
    priceInr: 2600,
    imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80'
  }
];

export const SWEETWATERS_WEBSITE: BusinessWebsite = {
  id: 'site-sweetwaters',
  slug: 'sweetwaters',
  templateId: 'sweetwaters',
  businessName: 'CLEARWATERS GLOBAL TEA & COFFEE',
  category: 'cafe',
  tagline: 'Globally Inspired Real Teas, Dragon Eye Coffees & Cozy Neighborhood Spaces',
  description: 'Founded in 1993, Clearwaters blends global tea cultures with classic American roastery comfort, famous for fresh Ginger Lemon Tea, Dragon Eye iced coffees, and Ice Dragons.',
  ownerName: 'Clearwaters Coffee Group',
  phone: '(734) 769-2331',
  whatsapp: '17347692331',
  email: 'hello@clearwaterscafe.com',
  address: '123 W Washington St, Ann Arbor, MI 48104, United States',
  city: 'Ann Arbor',
  mapsUrl: 'https://maps.google.com/?q=Sweetwaters+Coffee+Tea+Ann+Arbor',
  openingHours: 'Mon - Sat: 6:00 AM – 9:00 PM · Sun: 7:00 AM – 8:00 PM',
  logoUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=200&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#0369a1',
  secondaryColor: '#f59e0b',
  fontFamily: 'Inter',
  bookingType: 'table_reservation',
  bookingCtaLabel: 'Order Drinks Ahead',
  specialBadge: 'Globally Inspired Since 1993',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 1999,
  paymentStatus: 'paid',
  items: SWEETWATERS_ITEMS.map(i => ({
    id: i.id,
    name: i.name,
    description: i.description,
    price: i.priceInr,
    category: i.category,
    imageUrl: i.imageUrl,
    popular: !!i.popular,
    isVeg: !!i.isVegetarian,
    badge: i.badge || i.category
  })),
  offers: [
    {
      id: 'sw-dragon-deal',
      title: 'Free Size Upgrade on Dragon Eye',
      discount: 'Size Upgrade',
      code: 'DRAGONEYE',
      description: 'Order any regular Dragon Eye or Ginger Lemon Tea and get upgraded to large on weekday mornings.',
      validTill: '31 Dec 2026',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'gal-sw-1',
      title: 'Fresh Ginger Lemon Tea Brew Pot',
      category: 'products',
      imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gal-sw-2',
      title: 'The Legendary Dragon Eye with Condensed Milk',
      category: 'food',
      imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gal-sw-3',
      title: 'Ann Arbor Washington St Cafe Hearth',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80'
    }
  ],
  sections: [
    { id: 'hero', title: 'Globally Inspired Tea & Coffee', isEnabled: true, order: 1 },
    { id: 'menu', title: 'Signature Drinks & Teas', isEnabled: true, order: 2 },
    { id: 'locations', title: 'Neighborhood Cafes', isEnabled: true, order: 3 },
    { id: 'story', title: 'Our 1993 Heritage', isEnabled: true, order: 4 }
  ]
};
