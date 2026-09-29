import { BusinessWebsite } from '../types';

export interface BlueTokaiProduct {
  id: string;
  name: string;
  estate: string;
  region: string;
  altitude: string;
  process: string;
  roastLevel: 'Light' | 'Medium' | 'Medium-Dark' | 'Dark';
  tastingNotes: string[];
  priceInr: number;
  imageUrl: string;
  category: 'Single Estate' | 'Signature Blends' | 'Easy Pour Bags' | 'Cold Brew' | 'Merchandise';
  recommendedFor: string;
}

export const BLUE_TOKAI_PRODUCTS: BlueTokaiProduct[] = [
  {
    id: 'bt-attikan-estate',
    name: 'Attikan Estate',
    estate: 'Attikan Estate, Biligiriranga Hills',
    region: 'Karnataka',
    altitude: '1,650m - 1,800m',
    process: 'Washed Arabica',
    roastLevel: 'Medium-Dark',
    tastingNotes: ['Dark Chocolate', 'Figs', 'Roasted Almonds'],
    priceInr: 580,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0738/1409/files/1-Kolli-Berri-_Front_1.jpg?v=1714986770',
    category: 'Single Estate',
    recommendedFor: 'Moka Pot, French Press, South Indian Filter'
  },
  {
    id: 'bt-dhak-blend',
    name: 'Dhak Blend',
    estate: 'Multi-Estate Micro-lot blend',
    region: 'Chikmagalur & Shevaroys',
    altitude: '1,400m',
    process: 'Pulp Sun-Dried & Washed',
    roastLevel: 'Dark',
    tastingNotes: ['Cacao Nibs', 'Caramelized Walnut', 'Black Cherry'],
    priceInr: 540,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0738/1409/files/Card_01_7.jpg?v=1790055944',
    category: 'Signature Blends',
    recommendedFor: 'Espresso, Latte, Aeropress'
  },
  {
    id: 'bt-silver-oak',
    name: 'Silver Oak Blend',
    estate: 'Kalledevarapura & Harley Estate',
    region: 'Karnataka',
    altitude: '1,350m',
    process: 'Washed & Natural',
    roastLevel: 'Medium',
    tastingNotes: ['Honey', 'Hazelnut', 'Mild Citrus'],
    priceInr: 560,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0738/1409/files/PS_Lot_4_Terroir_Culture_Listing.png?v=1789990899',
    category: 'Signature Blends',
    recommendedFor: 'Pour Over V60, Chemex, Drip Coffee'
  },
  {
    id: 'bt-whiskey-barrel',
    name: 'Baarbara Estate — Whiskey Barrel Aged',
    estate: 'Baarbara Estate, Baba Budan Giri',
    region: 'Chikmagalur',
    altitude: '1,500m',
    process: 'Aged 45 Days in Oak Whiskey Barrels',
    roastLevel: 'Medium',
    tastingNotes: ['Oak Wood', 'Vanilla', 'Bourbon Caramel'],
    priceInr: 1250,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0738/1409/files/1_6.jpg?v=1787560255',
    category: 'Single Estate',
    recommendedFor: 'Pour Over, Cold Brew, French Press'
  },
  {
    id: 'bt-easy-pour-assorted',
    name: 'Easy Pour Drip Bags (Box of 10)',
    estate: 'Assorted Estates Selection',
    region: 'South India',
    altitude: '1,400m - 1,700m',
    process: 'Nitro-Flushed Freshly Ground',
    roastLevel: 'Medium',
    tastingNotes: ['Chocolate', 'Dried Fruits', 'Caramel'],
    priceInr: 500,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0738/1409/files/Subscription-3_delivery_5d2f82cd-37e5-41bd-a67d-c3515102cbea.jpg?v=1751875044',
    category: 'Easy Pour Bags',
    recommendedFor: 'Instant Hot Water Pour, Travel, Office'
  },
  {
    id: 'bt-cold-brew-blend',
    name: 'Cold Brew Filter Packs (Pack of 5)',
    estate: 'Ratnagiri Estate',
    region: 'Karnataka',
    altitude: '1,400m',
    process: 'Coarse Ground Steeping Pouches',
    roastLevel: 'Medium-Dark',
    tastingNotes: ['Molasses', 'Toffee', 'Smooth Cocoa'],
    priceInr: 600,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0738/1409/files/final.png?v=1788875724',
    category: 'Cold Brew',
    recommendedFor: 'Overnight Cold Brew Pitcher'
  }
];

export const BLUE_TOKAI_CAFES = [
  {
    city: 'New Delhi / NCR',
    count: 28,
    keyLocations: ['Said-ul-Ajaib, Saket', 'Khan Market', 'Vasant Vihar', 'Cyber Hub Gurgaon', 'Galleria Market']
  },
  {
    city: 'Mumbai',
    count: 22,
    keyLocations: ['Bandra West (Pali Hill)', 'Kala Ghoda, Fort', 'Versova', 'Lower Parel', 'Juhu']
  },
  {
    city: 'Bengaluru',
    count: 24,
    keyLocations: ['Indiranagar 100ft Rd', 'Koramangala 4th Block', 'Lavelle Road', 'Whitefield', 'Sadashivanagar']
  },
  {
    city: 'Kolkata',
    count: 8,
    keyLocations: ['Park Street', 'Hindustan Park, Gariahat', 'Salt Lake Sector V', 'Alipore']
  },
  {
    city: 'Hyderabad',
    count: 10,
    keyLocations: ['Jubilee Hills Road 36', 'Banjara Hills', 'Gachibowli', 'Hitec City']
  }
];

export const BLUE_TOKAI_WEBSITE: BusinessWebsite = {
  id: 'site-blue-tokai',
  slug: 'blue-tokai',
  templateId: 'blue-tokai',
  businessName: 'BREW & BLOOM',
  category: 'Single Estate Indian Specialty Coffee',
  tagline: 'Fresh Single Estate 100% Arabica Indian Coffee Beans',
  city: 'New Delhi',
  address: 'Plot No. 1, Said-ul-Ajaib, Lane 3, Westend Marg, New Delhi 110030',
  phone: '+91 98211 26015',
  whatsapp: '+919821126015',
  email: 'getcoffee@brewbloom.in',
  mapsUrl: 'https://maps.google.com/?q=Blue+Tokai+Coffee+Saidulajab',
  openingHours: 'Mon - Sun: 7:30 AM – 10:30 PM',
  logoUrl: 'https://cdn.shopify.com/s/files/1/0738/1409/files/Card_01_7.jpg?v=1790055944',
  coverUrl: 'https://cdn.shopify.com/s/files/1/0738/1409/files/1-Kolli-Berri-_Front_1.jpg?v=1714986770',
  primaryColor: '#002B49',
  secondaryColor: '#C86D3B',
  fontFamily: 'Inter',
  bookingType: 'table_reservation',
  bookingCtaLabel: 'Order Fresh Roasted Coffee',
  specialBadge: 'Farm to Cup Indian Specialty',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 1999,
  paymentStatus: 'paid',
  createdAt: '2026-02-18T08:00:00.000Z',
  updatedAt: '2026-09-29T14:30:00.000Z',
  sections: [
    { id: 'hero', title: 'Farm to Cup Single Estate Coffee', isEnabled: true, order: 1 },
    { id: 'coffee', title: 'Single Estate Harvests', isEnabled: true, order: 2 },
    { id: 'subscriptions', title: 'Roastery Subscriptions', isEnabled: true, order: 3 },
    { id: 'cafes', title: 'Our Cafes & Roasteries', isEnabled: true, order: 4 },
    { id: 'brewing', title: 'Brewing Guides', isEnabled: true, order: 5 }
  ],
  items: BLUE_TOKAI_PRODUCTS.map(i => ({
    id: i.id,
    name: i.name,
    description: `${i.estate} — ${i.roastLevel} Roast. Notes of ${i.tastingNotes.join(', ')}.`,
    price: i.priceInr,
    category: i.category,
    imageUrl: i.imageUrl,
    isVeg: true,
    popular: i.roastLevel === 'Medium-Dark',
    badge: `${i.roastLevel} Roast`
  })),
  offers: [
    {
      id: 'offer-bt-sub',
      title: 'Roastery Subscription Discount',
      discount: '15% Off Ongoing Subscriptions',
      code: 'FRESHROAST15',
      description: 'Subscribe to bi-weekly single estate dispatches and save 15% on every bag with free nationwide shipping.',
      validTill: '31 Dec 2026',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'gal-bt-1',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0738/1409/files/1-Kolli-Berri-_Front_1.jpg?v=1714986770',
      title: 'Single Estate Freshly Roasted Beans',
      category: 'coffee'
    }
  ]
};
