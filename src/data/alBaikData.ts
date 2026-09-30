import { BusinessWebsite } from '../types';

export interface AlBaikItem {
  id: string;
  name: string;
  category: 'Broasted Chicken Meals' | 'Seafood Delights' | 'Chicken Fillet & Sandwiches' | 'Sides & Legendary Garlic Sauce' | 'Desserts & Ice Cream';
  description: string;
  priceSar: number;
  priceInr: number;
  imageUrl: string;
  isVeg: boolean;
  popular?: boolean;
  badge?: string;
  spiceLevel?: 'Regular' | 'Spicy';
}

export const AL_BAIK_ITEMS: AlBaikItem[] = [
  {
    id: 'ab-4pc-chicken-spicy',
    name: '4pc Broasted Chicken Meal (Spicy / Regular)',
    category: 'Broasted Chicken Meals',
    description: 'Four pieces of crispy, golden deep-pressure fried tender chicken pressure-cooked with 18 secret herbs, served with golden fries, warm soft bun, and 2 tubs of iconic Garlic Sauce.',
    priceSar: 18.5,
    priceInr: 410,
    imageUrl: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80',
    isVeg: false,
    popular: true,
    badge: 'Worldwide Legend',
    spiceLevel: 'Spicy'
  },
  {
    id: 'ab-8pc-chicken-meal',
    name: '8pc Broasted Family Chicken Feast',
    category: 'Broasted Chicken Meals',
    description: 'Eight pieces of sizzling crunchy broasted chicken, 2 large fries, 2 signature fresh buns, and 4 legendary garlic sauces.',
    priceSar: 35.0,
    priceInr: 780,
    imageUrl: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',
    isVeg: false,
    popular: true,
    badge: 'Family Size'
  },
  {
    id: 'ab-jumbo-shrimp-meal',
    name: '10pc Jumbo Broasted Shrimp Meal',
    category: 'Seafood Delights',
    description: 'Ten plump jumbo sea prawns breaded in crispy spiced crust, served with golden fries, fresh bun, and signature Albaik cocktail dipping sauce.',
    priceSar: 26.5,
    priceInr: 590,
    imageUrl: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80',
    isVeg: false,
    popular: true,
    badge: 'Ocean Crisp'
  },
  {
    id: 'ab-fillet-nugget-meal',
    name: '10pc Crispy Chicken Fillet Nuggets',
    category: 'Chicken Fillet & Sandwiches',
    description: 'Bite-sized pure 100% white chicken breast nuggets wrapped in crunchy crust, with fries, bun, and choice of garlic or sweet BBQ sauce.',
    priceSar: 16.0,
    priceInr: 360,
    imageUrl: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80',
    isVeg: false,
    popular: true
  },
  {
    id: 'ab-falafel-sandwich',
    name: 'Albaik Arabic Spiced Falafel Sandwich',
    category: 'Chicken Fillet & Sandwiches',
    description: 'Crispy ground chickpea falafel patties tucked inside soft Arabic pita bread with creamy tahina, shredded lettuce, tomatoes, and pickle chips.',
    priceSar: 7.5,
    priceInr: 170,
    imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    badge: 'Vegetarian Choice'
  },
  {
    id: 'ab-garlic-sauce-extra',
    name: 'Legendary Albaik Secret Garlic Sauce (Trio Tub)',
    category: 'Sides & Legendary Garlic Sauce',
    description: 'The world-famous creamy whipped garlic dip that made Al Baik legendary. Smooth, punchy, and irresistible with broasted chicken and fries.',
    priceSar: 4.5,
    priceInr: 100,
    imageUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    popular: true,
    badge: 'Secret Recipe'
  },
  {
    id: 'ab-golden-fries-large',
    name: 'Super Crisp Golden French Fries (Large)',
    category: 'Sides & Legendary Garlic Sauce',
    description: 'Golden cut Idaho potatoes double-fried to crunchy perfection, sprinkled with signature seasoned salt.',
    priceSar: 7.0,
    priceInr: 160,
    imageUrl: 'https://images.unsplash.com/photo-1518013034458-30b0ee243591?auto=format&fit=crop&w=800&q=80',
    isVeg: true
  },
  {
    id: 'ab-soft-serve-icecream',
    name: 'Albaik Soft Serve Sundae with Chocolate Syrup',
    category: 'Desserts & Ice Cream',
    description: 'Creamy cold soft serve vanilla ice cream topped with rich Belgian chocolate drizzle or strawberry coulis.',
    priceSar: 4.0,
    priceInr: 90,
    imageUrl: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=800&q=80',
    isVeg: true
  }
];

export const AL_BAIK_WEBSITE: BusinessWebsite = {
  id: 'site-al-baik',
  slug: 'al-baik',
  templateId: 'al-baik',
  businessName: 'ALBAIK CRISPY BROASTED CHICKEN & SAUCES',
  category: 'restaurant',
  tagline: 'The World’s Favorite Pressure-Fried Broasted Chicken & Legendary Garlic Sauce Since 1974',
  description: 'Born in Jeddah in 1974, ALBAIK has captivated millions of travelers and food lovers globally with its pressure-broasted golden crispy chicken, seafood baskets, and signature secret garlic sauce.',
  ownerName: 'ALBAIK Food Systems Co.',
  phone: '+966 800 244 2245',
  whatsapp: '9668002442245',
  email: 'feedback@albaik.com',
  address: 'Old Airport Road, Al Sharafeyah, Jeddah 23218, Saudi Arabia',
  city: 'Jeddah',
  mapsUrl: 'https://maps.google.com/?q=Al+Baik+Jeddah+Saudi+Arabia',
  openingHours: 'Mon - Sun: 10:00 AM – 2:00 AM (Late Night)',
  logoUrl: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=200&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#dc2626',
  secondaryColor: '#facc15',
  fontFamily: 'Space Grotesk',
  bookingType: 'table_reservation',
  bookingCtaLabel: 'Order Broasted Meal Now',
  specialBadge: 'Legendary Broasted Since 1974',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 1999,
  paymentStatus: 'paid',
  items: AL_BAIK_ITEMS.map(i => ({
    id: i.id,
    name: i.name,
    description: i.description,
    price: i.priceInr,
    category: i.category,
    imageUrl: i.imageUrl,
    popular: !!i.popular,
    isVeg: i.isVeg,
    badge: i.badge
  })),
  offers: [
    {
      id: 'ab-combo-offer',
      title: 'Free Extra Garlic Sauce & Fries Upgrade',
      discount: 'Combo Deal',
      code: 'ALBAIKLOVE',
      description: 'Order any 8pc Broasted Chicken or Jumbo Shrimp meal and get free large fries upgrade and 2 extra garlic tubs.',
      validTill: '31 Dec 2026',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'gal-ab-1',
      title: 'Sizzling Golden Pressure Broasted Chicken Platter',
      category: 'food',
      imageUrl: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gal-ab-2',
      title: 'High-Energy Crisp Fast-Casual Ordering Hall',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
    }
  ],
  sections: [
    { id: 'hero', title: 'World Famous Pressure Broasted Chicken', isEnabled: true, order: 1 },
    { id: 'chicken', title: 'Broasted Chicken & Jumbo Shrimp', isEnabled: true, order: 2 },
    { id: 'sauce', title: 'Legendary Secret Garlic Sauce', isEnabled: true, order: 3 },
    { id: 'order', title: 'Speedy Express Ordering', isEnabled: true, order: 4 }
  ]
};
