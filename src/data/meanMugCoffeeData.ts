import { BusinessWebsite } from '../types';

export interface MeanMugItem {
  id: string;
  name: string;
  category: 'House Roasted Coffee' | 'Espresso & Specialties' | 'Scratch Bakery' | 'Breakfast & Lunch Kitchen';
  description: string;
  priceUsd: number;
  priceInr: number;
  imageUrl: string;
  popular?: boolean;
  isVeg?: boolean;
}

export const MEAN_MUG_ITEMS: MeanMugItem[] = [
  // House Roasted Coffee
  {
    id: 'mm-house-blend',
    name: 'Mean Mug Signature House Roast',
    category: 'House Roasted Coffee',
    description: 'Our daily Chattanooga favorite. Medium roast blend of Colombian and Ethiopian beans with milk chocolate, roasted almond, and clean citrus notes.',
    priceUsd: 16.00,
    priceInr: 1600,
    imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80',
    popular: true,
    isVeg: true
  },
  {
    id: 'mm-lookout-espresso',
    name: 'Lookout Mountain Espresso',
    category: 'House Roasted Coffee',
    description: 'Dark, velvety roast with dense crema, dark cocoa nibs, and caramelized molasses.',
    priceUsd: 17.00,
    priceInr: 1700,
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    popular: true,
    isVeg: true
  },
  // Espresso & Specialties
  {
    id: 'mm-honey-cinnamon-latte',
    name: 'Tennessee Honey Cinnamon Latte',
    category: 'Espresso & Specialties',
    description: 'Double espresso, local Tennessee clover honey, ground Saigon cinnamon, and silky whole milk.',
    priceUsd: 5.75,
    priceInr: 575,
    imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80',
    popular: true,
    isVeg: true
  },
  {
    id: 'mm-cardamom-vanilla-cortado',
    name: 'Cardamom Vanilla Cortado',
    category: 'Espresso & Specialties',
    description: 'Equal parts double shot espresso and steamed milk with house-simmered cardamom pod syrup.',
    priceUsd: 4.75,
    priceInr: 475,
    imageUrl: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80',
    isVeg: true
  },
  // Scratch Bakery
  {
    id: 'mm-scratch-cinnamon-roll',
    name: 'Giant Scratch Cinnamon Roll',
    category: 'Scratch Bakery',
    description: 'Baked fresh every morning from hand-rolled brioche dough, filled with brown sugar cinnamon and smothered in warm cream cheese frosting.',
    priceUsd: 5.50,
    priceInr: 550,
    imageUrl: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80',
    popular: true,
    isVeg: true
  },
  {
    id: 'mm-quiche-of-day',
    name: 'Daily House Quiche & Greens',
    category: 'Scratch Bakery',
    description: 'Flaky handmade butter pastry crust filled with farm eggs, aged Gruyère, baby spinach, and roasted leeks. Served with mixed greens.',
    priceUsd: 9.50,
    priceInr: 950,
    imageUrl: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80',
    popular: true,
    isVeg: true
  },
  // Breakfast & Lunch Kitchen
  {
    id: 'mm-breakfast-burrito',
    name: 'Southside Artisan Breakfast Burrito',
    category: 'Breakfast & Lunch Kitchen',
    description: 'Scrambled eggs, smoked cheddar, seasoned black beans, crispy roasted potatoes, house salsa verde, and avocado in a toasted tortilla.',
    priceUsd: 10.50,
    priceInr: 1050,
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
    popular: true,
    isVeg: true
  },
  {
    id: 'mm-bagel-sandwich',
    name: 'Everything Bagel Breakfast Stack',
    category: 'Breakfast & Lunch Kitchen',
    description: 'Toasted house-made everything bagel, fried egg, thick-cut bacon, sharp cheddar, and chipotle aioli.',
    priceUsd: 9.00,
    priceInr: 900,
    imageUrl: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80',
    isVeg: false
  }
];

export const MEAN_MUG_LOCATIONS = [
  {
    name: 'Southside (Original Flagship)',
    address: '114 W Main St, Chattanooga, TN 37408',
    hours: 'Mon - Sun: 7:00 AM – 4:00 PM',
    phone: '(423) 825-4206'
  },
  {
    name: 'Northshore Cafe',
    address: '205 Manufacturers Rd, Chattanooga, TN 37405',
    hours: 'Mon - Sun: 7:00 AM – 4:00 PM',
    phone: '(423) 531-8722'
  },
  {
    name: 'Fort Oglethorpe Roastery',
    address: '1388 Battlefield Pkwy, Fort Oglethorpe, GA 30742',
    hours: 'Mon - Sat: 6:30 AM – 5:00 PM',
    phone: '(706) 861-4600'
  }
];

export const MEAN_MUG_WEBSITE: BusinessWebsite = {
  id: 'site-mean-mug',
  slug: 'mean-mug',
  templateId: 'mean-mug',
  businessName: 'BREW & BLOOM',
  category: 'Micro-Roaster & Scratch Bakery — Chattanooga TN',
  tagline: 'In-House Small Batch Roasters & Scratch Kitchen',
  city: 'Chattanooga',
  address: '114 W Main St, Chattanooga, TN 37408, United States',
  phone: '+1 423-825-4206',
  whatsapp: '+14238254206',
  email: 'hello@brewbloom.in',
  mapsUrl: 'https://maps.google.com/?q=Mean+Mug+Coffeehouse+Chattanooga',
  openingHours: 'Mon - Sun: 7:00 AM – 4:00 PM',
  logoUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=200&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#4a3525',
  secondaryColor: '#d4a373',
  fontFamily: 'Inter',
  bookingType: 'table_reservation',
  bookingCtaLabel: 'Order Ahead for Pickup',
  specialBadge: 'In-House Roastery & Scratch Bakery',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 1999,
  paymentStatus: 'paid',
  createdAt: '2026-02-18T08:00:00.000Z',
  updatedAt: '2026-09-29T14:30:00.000Z',
  sections: [
    { id: 'hero', title: 'Community Coffeehouse & Bakery', isEnabled: true, order: 1 },
    { id: 'roastery', title: 'Our In-House Coffee Roasts', isEnabled: true, order: 2 },
    { id: 'bakery', title: 'Scratch Baked Morning Pastries', isEnabled: true, order: 3 },
    { id: 'kitchen', title: 'Breakfast & Lunch Fare', isEnabled: true, order: 4 },
    { id: 'locations', title: 'Chattanooga & Fort Oglethorpe Stores', isEnabled: true, order: 5 }
  ],
  items: MEAN_MUG_ITEMS.map(i => ({
    id: i.id,
    name: i.name,
    description: i.description,
    price: i.priceInr,
    category: i.category,
    imageUrl: i.imageUrl,
    isVeg: !!i.isVeg,
    popular: !!i.popular,
    badge: i.category
  })),
  offers: [
    {
      id: 'offer-mm-morning',
      title: 'Roll & Coffee Morning Special',
      discount: 'Cinnamon Roll + Drip at $8.50',
      code: 'MEANMUGGIN',
      description: 'Get our famous giant scratch cinnamon roll paired with a mug of House Blend drip coffee.',
      validTill: '31 Dec 2026',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'gal-mm-1',
      imageUrl: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80',
      title: 'Scratch Baked Morning Rolls',
      category: 'bakery'
    }
  ]
};
