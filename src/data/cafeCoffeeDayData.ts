import { BusinessWebsite } from '../types';

export interface CCDMenuItem {
  id: string;
  name: string;
  category: 'Hot Coffees' | 'Cold Frappes & Chillers' | 'Sandwiches & Savories' | 'Desserts & Sizzlers' | 'Coffee Powders';
  description: string;
  priceInr: number;
  imageUrl: string;
  popular?: boolean;
  isVeg: boolean;
}

export const CCD_MENU: CCDMenuItem[] = [
  // Hot Coffees
  {
    id: 'ccd-classic-cappuccino',
    name: 'Classic Cappuccino',
    category: 'Hot Coffees',
    description: 'Dark roasted signature espresso crowned with a velvety layer of dense steamed milk microfoam and cocoa dust.',
    priceInr: 195,
    imageUrl: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80',
    popular: true,
    isVeg: true
  },
  {
    id: 'ccd-devils-own',
    name: "The Devil's Own",
    category: 'Cold Frappes & Chillers',
    description: 'Iconic blended cold coffee layered with rich chocolate fudge sauce, whipped cream, and chocolate brownie crumble.',
    priceInr: 275,
    imageUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80',
    popular: true,
    isVeg: true
  },
  {
    id: 'ccd-kaapi-nirvana',
    name: 'Kaapi Nirvana',
    category: 'Cold Frappes & Chillers',
    description: 'Sweet, chilled South Indian filter coffee blend with Caribbean coconut syrup and vanilla ice cream.',
    priceInr: 250,
    imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80',
    popular: true,
    isVeg: true
  },
  {
    id: 'ccd-caramel-frappe',
    name: 'Caramel Crunch Frappe',
    category: 'Cold Frappes & Chillers',
    description: 'Creamy iced espresso frappe infused with salted caramel and crunchy butterscotch nuggets.',
    priceInr: 260,
    imageUrl: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
    isVeg: true
  },
  // Sandwiches & Savories
  {
    id: 'ccd-tandoori-paneer',
    name: 'Tandoori Paneer Sandwich',
    category: 'Sandwiches & Savories',
    description: 'Spiced cottage cheese tikka cubes with mint chutney, crisp bell peppers, and melted cheese in grilled panini bread.',
    priceInr: 230,
    imageUrl: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80',
    popular: true,
    isVeg: true
  },
  {
    id: 'ccd-smoked-chicken',
    name: 'Smoked Chicken Sandwich',
    category: 'Sandwiches & Savories',
    description: 'Tender hickory-smoked shredded chicken, honey mustard glaze, and gouda cheese in toasted rustic bread.',
    priceInr: 260,
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
    popular: true,
    isVeg: false
  },
  {
    id: 'ccd-chilli-cheese-toast',
    name: 'Chilli Cheese Garlic Toasties',
    category: 'Sandwiches & Savories',
    description: 'Crispy golden French loaf rounds topped with melted mozzarella, chopped green chillies, garlic butter, and herbs.',
    priceInr: 185,
    imageUrl: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80',
    isVeg: true
  },
  // Desserts & Sizzlers
  {
    id: 'ccd-sizzling-brownie',
    name: 'Sizzling Chocolate Brownie',
    category: 'Desserts & Sizzlers',
    description: 'Warm Dutch chocolate fudge brownie on a sizzling iron skillet, topped with Madagascar vanilla ice cream and hot chocolate lava.',
    priceInr: 265,
    imageUrl: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80',
    popular: true,
    isVeg: true
  },
  {
    id: 'ccd-roast-powder',
    name: 'Dark Forest Roasted Arabica Beans (500g)',
    category: 'Coffee Powders',
    description: 'Hand-picked beans from our own Chikmagalur plantations, slow roasted to deep aromatic perfection.',
    priceInr: 450,
    imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80',
    isVeg: true
  }
];

export const CCD_WEBSITE: BusinessWebsite = {
  id: 'site-cafe-coffee-day',
  slug: 'cafe-coffee-day',
  templateId: 'cafe-coffee-day',
  businessName: 'BREW & BLOOM',
  category: 'Indian Heritage Cafe & Coffee Icon',
  tagline: 'A Lot Can Happen Over Coffee — Since 1996',
  city: 'Bengaluru',
  address: '23/2, Coffee Day Square, Vittal Mallya Road, Bengaluru, Karnataka 560001',
  phone: '+91 80 4001 5000',
  whatsapp: '+918040015000',
  email: 'customercare@brewbloom.in',
  mapsUrl: 'https://maps.google.com/?q=Cafe+Coffee+Day+Square+Bangalore',
  openingHours: 'Mon - Sun: 8:00 AM – 12:00 AM',
  logoUrl: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=200&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#960E18',
  secondaryColor: '#301934',
  fontFamily: 'Inter',
  bookingType: 'table_reservation',
  bookingCtaLabel: 'Locate Nearest Cafe',
  specialBadge: 'India’s Favorite Coffee Hangout',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 1999,
  paymentStatus: 'paid',
  createdAt: '2026-02-18T08:00:00.000Z',
  updatedAt: '2026-09-29T14:30:00.000Z',
  sections: [
    { id: 'hero', title: 'A Lot Can Happen Over Coffee', isEnabled: true, order: 1 },
    { id: 'menu', title: 'Beverages & Eats Menu', isEnabled: true, order: 2 },
    { id: 'locations', title: '900+ Cafes Across India', isEnabled: true, order: 3 },
    { id: 'beans', title: 'Plantation to Cup Coffee', isEnabled: true, order: 4 },
    { id: 'franchise', title: 'Partner & Corporate Vending', isEnabled: true, order: 5 }
  ],
  items: CCD_MENU.map(i => ({
    id: i.id,
    name: i.name,
    description: i.description,
    price: i.priceInr,
    category: i.category,
    imageUrl: i.imageUrl,
    isVeg: i.isVeg,
    popular: !!i.popular,
    badge: i.category
  })),
  offers: [
    {
      id: 'offer-ccd-combo',
      title: 'Cafe Hangout Combo',
      discount: 'Classic Cappuccino + Brownie at ₹349',
      code: 'ALOTCANHAPPEN',
      description: 'Pair any hot classic coffee with a warm sizzling brownie and enjoy your hangout moments.',
      validTill: '31 Dec 2026',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'gal-ccd-1',
      imageUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80',
      title: "The Devil's Own Frappe",
      category: 'coffee'
    }
  ]
};
