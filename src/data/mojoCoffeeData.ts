import { BusinessWebsite } from '../types';

export interface MojoItem {
  id: string;
  name: string;
  category: 'Slow Drip & Cold Brew' | 'Espresso & Handcrafted Lattes' | 'New Orleans Heritage Specialties' | 'Fresh Bakes & Breakfast' | 'Whole Bean Coffee Bags';
  description: string;
  priceUsd: number;
  priceInr: number;
  imageUrl: string;
  popular?: boolean;
  isVegetarian?: boolean;
  badge?: string;
}

export interface MojoLocation {
  name: string;
  neighborhood: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  vibe: string;
}

export const MOJO_LOCATIONS: MojoLocation[] = [
  {
    name: 'Magazine Street Flagship',
    neighborhood: 'Lower Garden District',
    address: '1500 Magazine St, New Orleans, LA 70130',
    city: 'New Orleans, LA',
    phone: '(504) 525-2244',
    hours: 'Daily: 7:00 AM – 7:00 PM',
    vibe: 'Original quirky corner house with porch seating, vibrant local artwork, and continuous Kyoto slow-drip towers.'
  },
  {
    name: 'Freret Street Roastery',
    neighborhood: 'Uptown / University',
    address: '4700 Freret St, New Orleans, LA 70115',
    city: 'New Orleans, LA',
    phone: '(504) 872-0255',
    hours: 'Daily: 6:30 AM – 6:00 PM',
    vibe: 'Sunlit modern cafe with live small-batch roaster, espresso flights, and outdoor courtyard.'
  }
];

export const MOJO_ITEMS: MojoItem[] = [
  {
    id: 'mojo-kyoto-cold-drip',
    name: 'Slow-Drip Kyoto Cold Brew',
    category: 'Slow Drip & Cold Brew',
    description: '12-hour single-drop extraction through our Japanese glass tower. Exceptionally silky, notes of bittersweet chocolate, black currant, and cognac without bitterness.',
    priceUsd: 6.25,
    priceInr: 625,
    imageUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
    popular: true,
    badge: 'Signature NOLA'
  },
  {
    id: 'mojo-chicory-au-lait',
    name: 'Roasted Chicory Cafe Au Lait',
    category: 'New Orleans Heritage Specialties',
    description: 'Dark-roasted coffee blended with caramelized French chicory, poured half-and-half with steamed whole milk or sweet oat milk.',
    priceUsd: 5.25,
    priceInr: 525,
    imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
    popular: true,
    badge: 'Historic Classic'
  },
  {
    id: 'mojo-lavender-honey-latte',
    name: 'Wild Lavender & Honeycomb Latte',
    category: 'Espresso & Handcrafted Lattes',
    description: 'Double shot of house-roasted espresso, organic French lavender reduction, Louisiana raw honeycomb syrup, microfoamed oat milk.',
    priceUsd: 6.50,
    priceInr: 650,
    imageUrl: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'mojo-cortado',
    name: 'The Magazine Cortado',
    category: 'Espresso & Handcrafted Lattes',
    description: 'Equal parts velvet ristretto espresso and silky warm milk in a 4oz Gibraltar glass. Pure balance and roast clarity.',
    priceUsd: 4.75,
    priceInr: 475,
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mojo-beignets-plate',
    name: 'Crescent City Powdered Sugar Beignets (3 pcs)',
    category: 'Fresh Bakes & Breakfast',
    description: 'Golden fried choux puffs tossed in an avalanche of powdered cane sugar. Warm, airy, and served fresh from the fryer.',
    priceUsd: 6.50,
    priceInr: 650,
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    popular: true,
    isVegetarian: true,
    badge: 'Fresh Daily'
  },
  {
    id: 'mojo-breakfast-biscuit',
    name: 'Buttermilk Cheddar Biscuit & Andouille',
    category: 'Fresh Bakes & Breakfast',
    description: 'Flaky scratch-baked southern buttermilk biscuit, grilled local andouille sausage patty, folded egg, and sharp cheddar.',
    priceUsd: 8.50,
    priceInr: 850,
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'mojo-beans-dark-roast',
    name: 'Bayou Blend Dark Roast (12 oz)',
    category: 'Whole Bean Coffee Bags',
    description: 'Our iconic blend of Central American and Sumatra beans roasted for rich smokiness, dark cocoa, and molasses sweetness.',
    priceUsd: 18.00,
    priceInr: 1800,
    imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mojo-beans-single-origin',
    name: 'Ethiopia Yirgacheffe Washed (12 oz)',
    category: 'Whole Bean Coffee Bags',
    description: 'High-altitude heirloom varietal; fragrant bergamot, lemon curd, and floral jasmine with a bright, crisp finish.',
    priceUsd: 21.00,
    priceInr: 2100,
    imageUrl: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=800&q=80'
  }
];

export const MOJO_WEBSITE: BusinessWebsite = {
  id: 'site-mojo-coffee',
  slug: 'mojo-coffee',
  templateId: 'mojo-coffee',
  businessName: 'MYSTIC MOJO COFFEEHOUSE',
  category: 'cafe',
  tagline: 'Authentic Kyoto Cold Drip, Chicory Espresso & New Orleans Neighborhood Soul',
  description: 'Iconic New Orleans roastery and neighborhood sanctuary with locations on Magazine Street and Freret Street, celebrated for 12-hour cold drip coffee, fresh beignets, and vibrant community.',
  ownerName: 'Mojo Roasters Hospitality',
  phone: '(504) 525-2244',
  whatsapp: '15045252244',
  email: 'coffee@mysticmojo.com',
  address: '1500 Magazine St, New Orleans, LA 70130, United States',
  city: 'New Orleans',
  mapsUrl: 'https://maps.google.com/?q=Mojo+Coffee+House+Magazine+St+New+Orleans',
  openingHours: 'Mon - Sun: 7:00 AM – 7:00 PM',
  logoUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=200&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#78350f',
  secondaryColor: '#f59e0b',
  fontFamily: 'Space Grotesk',
  bookingType: 'table_reservation',
  bookingCtaLabel: 'Order Coffee Ahead',
  specialBadge: 'Magazine & Freret NOLA',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 1999,
  paymentStatus: 'paid',
  items: MOJO_ITEMS.map(i => ({
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
      id: 'mojo-morning-beignet',
      title: 'Coffee & Fresh Beignet Combo',
      discount: '15% Off',
      code: 'BEIGNETNOLA',
      description: 'Enjoy 15% off when you order any Kyoto Cold Drip or Chicory Au Lait with a 3-pack of warm powdered sugar beignets.',
      validTill: '31 Dec 2026',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'gal-mojo-1',
      title: 'Kyoto Slow-Drip Towers at Magazine St',
      category: 'facilities',
      imageUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gal-mojo-2',
      title: 'Powdered Sugar Beignets & Cafe Au Lait',
      category: 'food',
      imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gal-mojo-3',
      title: 'Small Batch In-House Roasting Drum',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80'
    }
  ],
  sections: [
    { id: 'hero', title: 'New Orleans Coffee Sanctuary', isEnabled: true, order: 1 },
    { id: 'menu', title: 'Coffee, Drips & Beignets', isEnabled: true, order: 2 },
    { id: 'locations', title: 'Magazine St & Freret St', isEnabled: true, order: 3 },
    { id: 'roastery', title: 'Small Batch Roasting', isEnabled: true, order: 4 }
  ]
};
