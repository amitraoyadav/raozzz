import { BusinessWebsite } from '../types';

export interface BBQItem {
  id: string;
  name: string;
  category: 'Live Table Skewers' | 'Starters & Crispies' | 'Main Course Buffet' | 'Kulfi Nation & Desserts';
  description: string;
  priceInr: number;
  imageUrl: string;
  isVeg: boolean;
  popular?: boolean;
  badge?: string;
}

export const BBQ_ITEMS: BBQItem[] = [
  {
    id: 'bbq-skewer-chicken-tikka',
    name: 'Angara Murgh Tikka Skewers',
    category: 'Live Table Skewers',
    description: 'Juicy chicken chunks marinated in spicy Kashmiri deghi mirch and mustard oil, roasted live on your personal table grill.',
    priceInr: 899,
    imageUrl: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    isVeg: false,
    popular: true,
    badge: 'Live Grill'
  },
  {
    id: 'bbq-skewer-paneer-tikka',
    name: 'Peshawari Paneer Tikka Skewers',
    category: 'Live Table Skewers',
    description: 'Tender cottage cheese cubes marinated in spiced hung yogurt, bell peppers, and carom seeds, sizzling over charcoal.',
    priceInr: 799,
    imageUrl: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    popular: true,
    badge: 'Live Grill'
  },
  {
    id: 'bbq-cajun-potato',
    name: 'Crispy Cajun Spiced Baby Potatoes',
    category: 'Starters & Crispies',
    description: 'Crispy pressed baby potatoes drenched in creamy spiced cajun mayo dressing, sprinkled with fresh spring onions.',
    priceInr: 349,
    imageUrl: 'https://images.unsplash.com/photo-1518013034458-30b0ee243591?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    popular: true,
    badge: 'Fan Favorite'
  },
  {
    id: 'bbq-crispy-corn',
    name: 'Golden Crispy American Corn',
    category: 'Starters & Crispies',
    description: 'Batter fried sweet corn kernels tossed with chopped chillies, chaat masala, lemon juice, and coriander leaves.',
    priceInr: 329,
    imageUrl: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    popular: true
  },
  {
    id: 'bbq-mutton-biryani',
    name: 'Dum Pukht Mutton Biryani',
    category: 'Main Course Buffet',
    description: 'Long-grain aged basmati rice cooked on slow dum with succulent mutton pieces, brown onions, mint, and whole spices.',
    priceInr: 599,
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    isVeg: false,
    popular: true
  },
  {
    id: 'bbq-dal-makhani',
    name: 'Signature 24-Hour Dal Makhani',
    category: 'Main Course Buffet',
    description: 'Black urad lentils slow-simmered overnight over charcoal with churned butter and sweet cream.',
    priceInr: 389,
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    isVeg: true
  },
  {
    id: 'bbq-kulfi-platter',
    name: 'Kulfi Nation Dip & Twist Platter (4 Mini Cones)',
    category: 'Kulfi Nation & Desserts',
    description: 'Assorted artisan kulfis: Malai, Kesar Pista, Paan, and Belgian Chocolate with rose syrup, falooda, and crushed nuts.',
    priceInr: 299,
    imageUrl: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    popular: true,
    badge: 'Live Kulfi Bar'
  }
];

export const BARBEQUE_NATION_WEBSITE: BusinessWebsite = {
  id: 'site-barbeque-nation',
  slug: 'barbeque-nation',
  templateId: 'barbeque-nation',
  businessName: 'GRILL NATION & LIVE SKEWERS',
  category: 'restaurant',
  tagline: 'Pioneer of the Live On-Table Charcoal Grill & Celebratory Unlimited Buffets',
  description: 'Experience India’s favorite live table-grill dining with unlimited sizzling skewers, lavish multi-cuisine main course buffets, and the famous Live Kulfi Nation.',
  ownerName: 'Grill Nation Hospitality Group',
  phone: '+91 80 6902 8722',
  whatsapp: '+918069028722',
  email: 'reservations@grillnation.in',
  address: 'Indiranagar 100ft Road, Bengaluru, Karnataka 560038',
  city: 'Bengaluru',
  mapsUrl: 'https://maps.google.com/?q=Barbeque+Nation+Indiranagar+Bangalore',
  openingHours: 'Lunch: 12:00 PM – 3:30 PM · Dinner: 7:00 PM – 11:30 PM',
  logoUrl: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=200&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#b91c1c',
  secondaryColor: '#f59e0b',
  fontFamily: 'Inter',
  bookingType: 'table_reservation',
  bookingCtaLabel: 'Reserve Buffet Table',
  specialBadge: 'Unlimited Live Grill',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 1999,
  paymentStatus: 'paid',
  items: BBQ_ITEMS.map(i => ({
    id: i.id,
    name: i.name,
    description: i.description,
    price: i.priceInr,
    category: i.category,
    imageUrl: i.imageUrl,
    popular: !!i.popular,
    isVeg: i.isVeg,
    badge: i.badge || i.category
  })),
  offers: [
    {
      id: 'bbq-early-bird',
      title: 'Early Bird Unlimited Buffet',
      discount: '₹150 Off Per Person',
      code: 'EARLYGRILL',
      description: 'Book your dinner table between 7:00 PM and 7:30 PM to enjoy ₹150 off per buffet ticket.',
      validTill: '31 Dec 2026',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'gal-bbq-1',
      title: 'Sizzling Charcoal Table Grill with Marinade Brush',
      category: 'facilities',
      imageUrl: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gal-bbq-2',
      title: 'Live Kulfi Nation Dipping Station',
      category: 'food',
      imageUrl: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=800&q=80'
    }
  ],
  sections: [
    { id: 'hero', title: 'Live Charcoal Table Grill', isEnabled: true, order: 1 },
    { id: 'menu', title: 'Unlimited Skewers & Buffet', isEnabled: true, order: 2 },
    { id: 'reserve', title: 'Buffet Table Booking', isEnabled: true, order: 3 },
    { id: 'kulfi', title: 'Kulfi Nation Bar', isEnabled: true, order: 4 }
  ]
};
