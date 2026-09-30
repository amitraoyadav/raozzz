import { BusinessWebsite } from '../types';

export interface BikanervalaItem {
  id: string;
  name: string;
  category: 'Royal Mithai & Sweets' | 'Delhi Street Chaat' | 'North Indian Meals & Thalis' | 'Bikaneri Namkeen & Snacks' | 'Beverages & Kulfi';
  description: string;
  priceInr: number;
  imageUrl: string;
  isVeg: boolean;
  popular?: boolean;
  badge?: string;
}

export const BIKANERVALA_ITEMS: BikanervalaItem[] = [
  {
    id: 'bv-raj-kachori',
    name: 'Special Bikanervala Raj Kachori',
    category: 'Delhi Street Chaat',
    description: 'Crisp giant golden puff shell packed with boiled potatoes, sprouted moong, spiced bhallas, chilled sweet curd, tangy tamarind saunth, mint chutney, and sev pomegranate.',
    priceInr: 185,
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    popular: true,
    badge: 'King of Chaats'
  },
  {
    id: 'bv-chhole-bhature',
    name: 'Delhi Style Chhole Bhature (2 pcs)',
    category: 'North Indian Meals & Thalis',
    description: 'Two fluffy balloon-puffed bhaturas served with spicy dark Amritsari pindi chhole, pickled amla, spiced green chillies, and fresh onion rings.',
    priceInr: 220,
    imageUrl: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    popular: true,
    badge: 'All-Day Favorite'
  },
  {
    id: 'bv-kaju-katli',
    name: 'Royal Diamond Kaju Katli (500g Box)',
    category: 'Royal Mithai & Sweets',
    description: 'Handcrafted diamond lozenges made from pure ground Goan cashew paste and natural sugar syrup, adorned with edible pure silver vark.',
    priceInr: 580,
    imageUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    popular: true,
    badge: 'Bestseller Sweet'
  },
  {
    id: 'bv-deluxe-thali',
    name: 'Bikanervala Royal Executive Thali',
    category: 'North Indian Meals & Thalis',
    description: 'Complete wholesome meal: Shahi Paneer, Dal Makhani, Mixed Seasonal Veg, Jeera Rice, 2 Tandoori Roti / Lachha Paratha, Raita, Salad, Papad, and Gulab Jamun.',
    priceInr: 340,
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    popular: true,
    badge: 'Complete Feast'
  },
  {
    id: 'bv-bikaneri-bhujia',
    name: 'Original Bikaneri Bhujia (400g Pouch)',
    category: 'Bikaneri Namkeen & Snacks',
    description: 'Crispy spicy strands crafted using traditional Rajasthani moth dal flour, besan, black pepper, and fragrant royal hing since 1905.',
    priceInr: 160,
    imageUrl: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    popular: true,
    badge: 'Heritage 1905 Recipe'
  },
  {
    id: 'bv-gulab-jamun',
    name: 'Desi Ghee Hot Gulab Jamun (2 pcs)',
    category: 'Royal Mithai & Sweets',
    description: 'Golden fried pure khoya dumplings soaked in fragrant green cardamom and saffron scented sugar syrup.',
    priceInr: 95,
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    popular: true
  },
  {
    id: 'bv-dhokla-platter',
    name: 'Khaman Dhokla & Khandvi Duo',
    category: 'Delhi Street Chaat',
    description: 'Spongy steamed yellow gram flour cakes tempered with mustard seeds and curry leaves, paired with rolled spiced gram flour khandvi bites.',
    priceInr: 140,
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    isVeg: true
  },
  {
    id: 'bv-kesar-pista-kulfi',
    name: 'Matka Kesar Pista Falooda Kulfi',
    category: 'Beverages & Kulfi',
    description: 'Dense slow-simmered rabri kulfi sliced and topped with chilled cornstarch falooda noodles, rose syrup, and roasted pistachios.',
    priceInr: 160,
    imageUrl: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=800&q=80',
    isVeg: true
  }
];

export const BIKANERVALA_WEBSITE: BusinessWebsite = {
  id: 'site-bikanervala',
  slug: 'bikanervala',
  templateId: 'bikanervala',
  businessName: 'BIKANERVALA ROYAL SWEETS & CHAAT',
  category: 'restaurant',
  tagline: 'Traditional Bikaneri Mithai, Authentic Delhi Street Chaat & Vegetarian Thalis Since 1905',
  description: 'Spanning more than a century of royal Indian sweetmaking, Bikanervala is India’s cherished destination for pure desi ghee sweets, iconic Raj Kachori chaats, crispy namkeens, and lavish family thalis.',
  ownerName: 'Bikanervala Foods Pvt. Ltd.',
  phone: '+91 11 4700 0000',
  whatsapp: '+911147000000',
  email: 'orders@bikanervala.in',
  address: 'Connaught Place, Radial Road 2, New Delhi 110001',
  city: 'New Delhi',
  mapsUrl: 'https://maps.google.com/?q=Bikanervala+Connaught+Place+New+Delhi',
  openingHours: 'Mon - Sun: 8:00 AM – 11:00 PM',
  logoUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=200&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#b91c1c',
  secondaryColor: '#f59e0b',
  fontFamily: 'Inter',
  bookingType: 'table_reservation',
  bookingCtaLabel: 'Order Sweets & Snacks',
  specialBadge: 'Pure Desi Ghee Since 1905',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 1999,
  paymentStatus: 'paid',
  items: BIKANERVALA_ITEMS.map(i => ({
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
      id: 'bv-festive-sweets',
      title: 'Festive Sweet Box 15% Savings',
      discount: '15% Off',
      code: 'MITHAI15',
      description: 'Order any 1kg assortment of Kaju Katli, Motichoor Ladoo, or Rasgullas and receive instant 15% discount.',
      validTill: '31 Dec 2026',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'gal-bv-1',
      title: 'Golden Indian Sweets and Kaju Katli Display',
      category: 'food',
      imageUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gal-bv-2',
      title: 'Vibrant Delhi Street Food & Chaat Station',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
    }
  ],
  sections: [
    { id: 'hero', title: 'Centenary Sweet & Chaat Heritage', isEnabled: true, order: 1 },
    { id: 'chaat', title: 'Legendary Raj Kachori & Street Food', isEnabled: true, order: 2 },
    { id: 'sweets', title: 'Royal Pure Ghee Mithai Box', isEnabled: true, order: 3 },
    { id: 'order', title: 'Quick Online Ordering & Takeaway', isEnabled: true, order: 4 }
  ]
};
