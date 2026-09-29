import { BusinessWebsite } from '../types';

export interface RevivalMenuItem {
  id: string;
  name: string;
  category: 'Breakfast Sandwiches' | 'Toasts & Grain Bowls' | 'Artisan Coffee & Matcha' | 'Catering Crates';
  description: string;
  priceUsd: number;
  priceInr: number;
  imageUrl: string;
  popular?: boolean;
  isVeg?: boolean;
}

export const REVIVAL_MENU: RevivalMenuItem[] = [
  // Breakfast Sandwiches
  {
    id: 'rev-the-brekkie',
    name: 'The Brekkie on House English Muffin',
    category: 'Breakfast Sandwiches',
    description: 'Soft scrambled pasture eggs, aged sharp cheddar, applewood smoked bacon, and herb mayo on a scratch-griddled house English muffin.',
    priceUsd: 11.50,
    priceInr: 1150,
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
    popular: true,
    isVeg: false
  },
  {
    id: 'rev-halloumi-egg',
    name: 'Seared Halloumi & Egg Sandwich',
    category: 'Breakfast Sandwiches',
    description: 'Crispy Cypriot halloumi cheese, fried egg, dressed baby arugula, pickled red onions, and hot pepper jam on house brioche.',
    priceUsd: 12.00,
    priceInr: 1200,
    imageUrl: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80',
    popular: true,
    isVeg: true
  },
  // Toasts & Grain Bowls
  {
    id: 'rev-crema-toast',
    name: 'Famous Crema Toast',
    category: 'Toasts & Grain Bowls',
    description: 'Thick cut toasted brioche with whipped mascarpone ricotta, seasonal berry compote, toasted pistachios, and raw wildflower honey.',
    priceUsd: 10.50,
    priceInr: 1050,
    imageUrl: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80',
    popular: true,
    isVeg: true
  },
  {
    id: 'rev-ancient-grain-bowl',
    name: 'Green Goddess Ancient Grain Bowl',
    category: 'Toasts & Grain Bowls',
    description: 'Warm farro, quinoa, shaved Brussels sprouts, pickled cucumbers, avocado, herb green goddess tahini dressing, and six-minute egg.',
    priceUsd: 14.50,
    priceInr: 1450,
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
    isVeg: true
  },
  // Artisan Coffee & Matcha
  {
    id: 'rev-maple-latte',
    name: 'New England Spiced Maple Latte',
    category: 'Artisan Coffee & Matcha',
    description: 'Double espresso with pure Vermont dark amber maple syrup, freshly ground nutmeg, and steamed oat milk.',
    priceUsd: 6.25,
    priceInr: 625,
    imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80',
    popular: true,
    isVeg: true
  },
  {
    id: 'rev-ceremonial-matcha',
    name: 'Uji Ceremonial Matcha Latte',
    category: 'Artisan Coffee & Matcha',
    description: 'Stone-ground first harvest Kyoto matcha whisked smooth with vanilla bean syrup and velvety oat milk.',
    priceUsd: 6.50,
    priceInr: 650,
    imageUrl: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80',
    isVeg: true
  },
  // Catering Crates
  {
    id: 'rev-pastry-crate',
    name: 'Morning Bakery Pastry Crate (Serves 12)',
    category: 'Catering Crates',
    description: 'Assorted house-baked croissants, blueberry scones, cinnamon brioche buns, and gluten-free morning glory muffins.',
    priceUsd: 55.00,
    priceInr: 5500,
    imageUrl: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80',
    popular: true,
    isVeg: true
  }
];

export const REVIVAL_LOCATIONS = [
  {
    name: 'Alewife Cambridge (Flagship)',
    address: '125 Cambridgepark Dr, Cambridge, MA 02140',
    hours: 'Mon - Fri: 7:00 AM – 4:00 PM · Sat - Sun: 8:00 AM – 3:00 PM',
    phone: '(617) 665-5899'
  },
  {
    name: 'Davis Square Somerville',
    address: '24 Holland St, Somerville, MA 02144',
    hours: 'Mon - Sun: 7:30 AM – 3:30 PM',
    phone: '(617) 764-5544'
  },
  {
    name: 'Newbury Street Boston',
    address: '103 Newbury St, Boston, MA 02116',
    hours: 'Mon - Sun: 7:00 AM – 5:00 PM',
    phone: '(617) 536-0033'
  }
];

export const REVIVAL_WEBSITE: BusinessWebsite = {
  id: 'site-revival-cafe',
  slug: 'revival-cafe',
  templateId: 'revival-cafe',
  businessName: 'BREW & BLOOM',
  category: 'Modern Community Kitchen & Cafe — Boston MA',
  tagline: 'Scratch Sandwiches, Brioche Toasts & Craft Coffee in Boston & Cambridge',
  city: 'Cambridge',
  address: '125 Cambridgepark Dr, Cambridge, MA 02140, United States',
  phone: '+1 617-665-5899',
  whatsapp: '+16176655899',
  email: 'hello@brewbloom.in',
  mapsUrl: 'https://maps.google.com/?q=Revival+Cafe+Kitchen+Cambridge',
  openingHours: 'Mon - Fri: 7:00 AM – 4:00 PM · Sat - Sun: 8:00 AM – 3:00 PM',
  logoUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=200&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#2c3e50',
  secondaryColor: '#f39c12',
  fontFamily: 'Inter',
  bookingType: 'table_reservation',
  bookingCtaLabel: 'Order Online / Catering',
  specialBadge: 'Boston & Cambridge Community Kitchen',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 1999,
  paymentStatus: 'paid',
  createdAt: '2026-02-18T08:00:00.000Z',
  updatedAt: '2026-09-29T14:30:00.000Z',
  sections: [
    { id: 'hero', title: 'Food & Coffee Made With Intention', isEnabled: true, order: 1 },
    { id: 'sandwiches', title: 'House English Muffin Sandwiches', isEnabled: true, order: 2 },
    { id: 'bowls', title: 'Toasts & Seasonal Bowls', isEnabled: true, order: 3 },
    { id: 'catering', title: 'Office Catering & Events', isEnabled: true, order: 4 },
    { id: 'locations', title: 'Cambridge, Somerville & Boston Cafes', isEnabled: true, order: 5 }
  ],
  items: REVIVAL_MENU.map(i => ({
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
      id: 'offer-rev-catering',
      title: 'Corporate Catering Welcome',
      discount: '10% Off First Office Order',
      code: 'REVIVALOFFICE',
      description: 'Enjoy 10% off your first office morning pastry crate or sandwich platter for 10+ team members.',
      validTill: '31 Dec 2026',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'gal-rev-1',
      imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
      title: 'The Brekkie on House English Muffin',
      category: 'sandwiches'
    }
  ]
};
