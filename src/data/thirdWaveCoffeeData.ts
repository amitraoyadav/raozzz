import { BusinessWebsite } from '../types';

export interface ThirdWaveProduct {
  id: string;
  name: string;
  category: 'Whole Beans' | 'Easy Coffee Bags' | 'Signature Drinks' | 'Artisan Bakery' | 'Merchandise';
  roast: 'Light' | 'Medium' | 'Medium Dark' | 'Dark';
  tastingNotes: string;
  priceInr: number;
  imageUrl: string;
  popular?: boolean;
}

export const THIRD_WAVE_PRODUCTS: ThirdWaveProduct[] = [
  {
    id: 'twc-el-diablo',
    name: 'El Diablo Blend',
    category: 'Whole Beans',
    roast: 'Dark',
    tastingNotes: 'Dark chocolate, toasted walnut, smoky sweetness',
    priceInr: 550,
    imageUrl: 'https://cdn.shopify.com/s/files/1/1834/9395/files/1080x1080DiwaliClassic.jpg?v=1789296183',
    popular: true
  },
  {
    id: 'twc-monsoon-malabar',
    name: 'Monsoon Malabar AA',
    category: 'Whole Beans',
    roast: 'Medium Dark',
    tastingNotes: 'Earthy spice, tobacco leaf, muted acidity',
    priceInr: 580,
    imageUrl: 'https://cdn.shopify.com/s/files/1/1834/9395/files/WEBSITE_ECB_MM_IMAGES_2026_2048x2048-07.jpg?v=1771479865',
    popular: true
  },
  {
    id: 'twc-vienna-roast',
    name: 'Vienna Roast Easy Coffee Bags (Box of 10)',
    category: 'Easy Coffee Bags',
    roast: 'Dark',
    tastingNotes: 'Caramelized sugar, dark cocoa, robust body',
    priceInr: 500,
    imageUrl: 'https://cdn.shopify.com/s/files/1/1834/9395/files/WEBSITE_ECB_VR_IMAGES_2026_2048x2048-11.jpg?v=1771479918'
  },
  {
    id: 'twc-single-origin-ecb',
    name: 'Single Origin Easy Coffee Bags (Box of 10)',
    category: 'Easy Coffee Bags',
    roast: 'Medium',
    tastingNotes: 'Citrus zest, honey sweetness, stone fruit',
    priceInr: 500,
    imageUrl: 'https://cdn.shopify.com/s/files/1/1834/9395/files/WEBSITE_ECB_SO_IMAGES_2026_2048x2048-09.jpg?v=1771479904',
    popular: true
  },
  {
    id: 'twc-sea-salt-mocha',
    name: 'Sea Salt Mocha (Cold / Hot)',
    category: 'Signature Drinks',
    roast: 'Medium Dark',
    tastingNotes: 'Single origin espresso, dark chocolate ganache, Himalayan pink salt, frothed milk',
    priceInr: 320,
    imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80',
    popular: true
  },
  {
    id: 'twc-orange-zest-mocha',
    name: 'Orange Zest Mocha Frappe',
    category: 'Signature Drinks',
    roast: 'Medium Dark',
    tastingNotes: 'Candied orange peel infused chocolate, double espresso, blended with cream',
    priceInr: 340,
    imageUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'twc-banana-walnut',
    name: 'Warm Banana Walnut Tea Cake',
    category: 'Artisan Bakery',
    roast: 'Medium',
    tastingNotes: 'Ripe Cavendish bananas, toasted California walnuts, cinnamon glaze',
    priceInr: 220,
    imageUrl: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80',
    popular: true
  },
  {
    id: 'twc-ceramic-tiger',
    name: 'Ceramic Tiger Handcrafted Mug',
    category: 'Merchandise',
    roast: 'Medium',
    tastingNotes: 'Hand-thrown 350ml stoneware ceramic mug with embossed coffee blossom motif',
    priceInr: 622,
    imageUrl: 'https://cdn.shopify.com/s/files/1/1834/9395/files/Ceramic_Tiger_Mug_bb8f6fe7-1b17-4fd0-b812-321a481b8091.jpg?v=1730806890'
  }
];

export const THIRD_WAVE_WEBSITE: BusinessWebsite = {
  id: 'site-third-wave',
  slug: 'third-wave',
  templateId: 'third-wave',
  businessName: 'BREW & BLOOM',
  category: '100% Arabica Roastery & Contemporary Cafes',
  tagline: 'India’s Favorite 100% Arabica Specialty Coffee Roasters',
  city: 'Bengaluru',
  address: '80 Feet Road, 4th Block, Koramangala, Bengaluru, Karnataka 560034',
  phone: '+91 80 4710 8822',
  whatsapp: '+918047108822',
  email: 'feedback@brewbloom.in',
  mapsUrl: 'https://maps.google.com/?q=Third+Wave+Coffee+Koramangala',
  openingHours: 'Mon - Sun: 7:00 AM – 1:00 AM',
  logoUrl: 'https://cdn.shopify.com/s/files/1/1834/9395/files/1080x1080DiwaliClassic.jpg?v=1789296183',
  coverUrl: 'https://cdn.shopify.com/s/files/1/1834/9395/files/WEBSITE_ECB_MM_IMAGES_2026_2048x2048-07.jpg?v=1771479865',
  primaryColor: '#c86d3b',
  secondaryColor: '#1c1917',
  fontFamily: 'Inter',
  bookingType: 'table_reservation',
  bookingCtaLabel: 'Order on App / Pickup',
  specialBadge: '100% Arabica Specialty',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 1999,
  paymentStatus: 'paid',
  createdAt: '2026-02-18T08:00:00.000Z',
  updatedAt: '2026-09-29T14:30:00.000Z',
  sections: [
    { id: 'hero', title: 'See Coffee Differently', isEnabled: true, order: 1 },
    { id: 'coffee', title: '100% Arabica Whole Beans & Bags', isEnabled: true, order: 2 },
    { id: 'cafe-menu', title: 'Handcrafted Beverages & Bakery', isEnabled: true, order: 3 },
    { id: 'locations', title: 'Over 100+ Cafes Nationwide', isEnabled: true, order: 4 },
    { id: 'app', title: 'Third Wave Rewards App', isEnabled: true, order: 5 }
  ],
  items: THIRD_WAVE_PRODUCTS.map(i => ({
    id: i.id,
    name: i.name,
    description: i.tastingNotes,
    price: i.priceInr,
    category: i.category,
    imageUrl: i.imageUrl,
    isVeg: true,
    popular: !!i.popular,
    badge: i.roast
  })),
  offers: [
    {
      id: 'offer-twc-app',
      title: 'First App Order Benefit',
      discount: 'Flat ₹100 Off',
      code: 'WAVE100',
      description: 'Get Flat ₹100 Off on your first order of fresh beans or easy coffee bags.',
      validTill: '31 Dec 2026',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'gal-twc-1',
      imageUrl: 'https://cdn.shopify.com/s/files/1/1834/9395/files/WEBSITE_ECB_MM_IMAGES_2026_2048x2048-07.jpg?v=1771479865',
      title: 'Monsoon Malabar Easy Coffee Bags',
      category: 'coffee'
    }
  ]
};
