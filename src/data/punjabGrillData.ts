import { BusinessWebsite } from '../types';

export interface PunjabiItem {
  id: string;
  name: string;
  category: 'Frontier Kebabs & Tandoor' | 'Royal Shahi Curries' | 'Slow-Simmered Dal & Rice' | 'Tandoori Naans & Kulchas' | 'Shahi Desserts';
  description: string;
  priceInr: number;
  imageUrl: string;
  isVeg: boolean;
  popular?: boolean;
  badge?: string;
}

export const PUNJAB_GRILL_ITEMS: PunjabiItem[] = [
  {
    id: 'pg-salmon-tikka',
    name: 'Norwegian Salmon Tikka',
    category: 'Frontier Kebabs & Tandoor',
    description: 'Fresh Norwegian salmon steaks marinated with royal dill leaves, mustard cress, kasoori methi, and fennel, charred over charcoal.',
    priceInr: 1295,
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    isVeg: false,
    popular: true,
    badge: 'Royal Masterpiece'
  },
  {
    id: 'pg-raunaqeen-seekhan',
    name: 'Raunaqeen Seekhan (Lamb Gilafi)',
    category: 'Frontier Kebabs & Tandoor',
    description: 'Hand-pounded tender spring lamb mince infused with mint, royal saffron, and mace, wrapped in crisp bell peppers and roasted on skewers.',
    priceInr: 895,
    imageUrl: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    isVeg: false,
    popular: true,
    badge: 'Frontier Legend'
  },
  {
    id: 'pg-dahi-kebab',
    name: 'Kurkuri Dahi ke Kebab',
    category: 'Frontier Kebabs & Tandoor',
    description: 'Crisp golden rolls filled with creamy hung curd, roasted crushed coriander seeds, pomegranate kernels, and green chilies.',
    priceInr: 595,
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    popular: true,
    badge: 'Vegetarian Gem'
  },
  {
    id: 'pg-butter-chicken',
    name: 'Murgh Makhani 1947 (Butter Chicken)',
    category: 'Royal Shahi Curries',
    description: 'Charcoal-grilled tandoori chicken pieces simmered in silky slow-cooked plum tomato gravy enriched with fresh churned white makkhan and sun-dried kasoori methi.',
    priceInr: 795,
    imageUrl: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80',
    isVeg: false,
    popular: true,
    badge: 'Signature Dish'
  },
  {
    id: 'pg-dal-punjab-grill',
    name: 'Dal Punjab Grill (Slow Cooked 24 Hours)',
    category: 'Slow-Simmered Dal & Rice',
    description: 'Whole black urad lentils and kidney beans simmered overnight over slow charcoal embers with ripe tomatoes, cream, and pure country ghee.',
    priceInr: 575,
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    popular: true,
    badge: '24-Hour Simmer'
  },
  {
    id: 'pg-tarkash-gosht',
    name: 'Dum Ki Nalli Gosht (Slow Braised Lamb Shanks)',
    category: 'Royal Shahi Curries',
    description: 'Tender baby lamb shanks braised in sealed earthenware handi with caramelized brown onions, vetiver grass, saffron, and marrow essence.',
    priceInr: 925,
    imageUrl: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80',
    isVeg: false,
    badge: 'Shahi Handi'
  },
  {
    id: 'pg-kadhai-paneer',
    name: 'Malai Paneer Sirka Pyaaz',
    category: 'Royal Shahi Curries',
    description: 'Fresh farm artisanal cottage cheese cubes tossed with pounded coriander seeds, dry red chillies, crunchy bell peppers, and ruby shallots.',
    priceInr: 645,
    imageUrl: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80',
    isVeg: true
  },
  {
    id: 'pg-chur-chur-naan',
    name: 'Amritsari Chur Chur Naan Platter',
    category: 'Tandoori Naans & Kulchas',
    description: 'Multi-layered flaky bread stuffed with spiced potato and crushed paneer, crushed with melted desi ghee and served with mint chutney.',
    priceInr: 295,
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    isVeg: true
  },
  {
    id: 'pg-kesar-phirni',
    name: 'Shahi Kesar Pista Phirni',
    category: 'Shahi Desserts',
    description: 'Silky ground basmati rice pudding infused with Kashmiri saffron threads, cardamom powder, and crushed slivered green pistachios.',
    priceInr: 325,
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    popular: true
  }
];

export const PUNJAB_GRILL_WEBSITE: BusinessWebsite = {
  id: 'site-punjab-grill',
  slug: 'punjab-grill',
  templateId: 'punjab-grill',
  businessName: 'ROYAL PUNJAB GRILL & FRONTIER CUISINE',
  category: 'restaurant',
  tagline: 'Gourmet Frontier, Royal Tandoor & North-Western Haute Cuisine',
  description: 'Taking culinary inspiration from the erstwhile undivided Punjab and Northwest Frontier Province, Punjab Grill presents aristocratic gastronomy, clay oven masterpieces, and royal hospitality.',
  ownerName: 'Lite Bite Foods Hospitality',
  phone: '+91 11 4151 5151',
  whatsapp: '+911141515151',
  email: 'concierge@royalpunjabgrill.in',
  address: 'Ambience Mall, Vasant Kunj, New Delhi 110070',
  city: 'New Delhi',
  mapsUrl: 'https://maps.google.com/?q=Punjab+Grill+Ambience+Mall+Vasant+Kunj',
  openingHours: 'Mon - Sun: 12:00 PM – 11:30 PM',
  logoUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=200&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#78350f',
  secondaryColor: '#f59e0b',
  fontFamily: 'Fraunces',
  bookingType: 'table_reservation',
  bookingCtaLabel: 'Reserve Royal Dining Table',
  specialBadge: 'Aristocratic Frontier Cuisine',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 1999,
  paymentStatus: 'paid',
  items: PUNJAB_GRILL_ITEMS.map(i => ({
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
      id: 'pg-royal-feast',
      title: 'Four-Course Maharaja Tasting Menu',
      discount: '₹300 Off',
      code: 'MAHARAJA',
      description: 'Exclusive 4-course banquet including Salmon Tikka, Murgh Makhani, Dal Punjab Grill, Chur Chur Naan, and Kesar Phirni.',
      validTill: '31 Dec 2026',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'gal-pg-1',
      title: 'Charcoal Tandoori Skewers and Live Flame Grill',
      category: 'food',
      imageUrl: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gal-pg-2',
      title: 'Regal Amber Lit Fine Dining Hall',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
    }
  ],
  sections: [
    { id: 'hero', title: 'Royal Punjab & Frontier Gastronomy', isEnabled: true, order: 1 },
    { id: 'kebabs', title: 'Clay Oven Kebabs & Tikka', isEnabled: true, order: 2 },
    { id: 'curries', title: 'Aristocratic Curries & Slow Dal', isEnabled: true, order: 3 },
    { id: 'reserve', title: 'Table Reservation', isEnabled: true, order: 4 }
  ]
};
