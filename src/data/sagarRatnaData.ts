import { BusinessWebsite } from '../types';

export interface SagarRatnaItem {
  id: string;
  name: string;
  category: 'Crispy Signature Dosas' | 'Steamed Idlis & Vadas' | 'South Indian Thalis & Meals' | 'Uttapams & Ravas' | 'Filter Kaapi & Desserts';
  description: string;
  priceInr: number;
  imageUrl: string;
  isVeg: boolean;
  popular?: boolean;
  badge?: string;
}

export const SAGAR_RATNA_ITEMS: SagarRatnaItem[] = [
  {
    id: 'sr-ghee-roast-dosa',
    name: 'Special Ghee Roast Masala Dosa',
    category: 'Crispy Signature Dosas',
    description: 'Golden paper-thin fermented rice and lentil crepe crisped in fragrant desi ghee, stuffed with seasoned tempered potato masala, served with 3 signature coconut chutneys and hot drumstick sambar.',
    priceInr: 245,
    imageUrl: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    popular: true,
    badge: 'Legendary Crisp'
  },
  {
    id: 'sr-mysore-masala',
    name: 'Mysore Masala Dosa',
    category: 'Crispy Signature Dosas',
    description: 'Crisp crepe lined on the inside with fiery red chili-garlic and roasted dal chutney, wrapped over spiced mashed potato filling.',
    priceInr: 235,
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    popular: true,
    badge: 'Spicy Mysore Chutney'
  },
  {
    id: 'sr-rava-onion-masala',
    name: 'Rava Onion Masala Dosa',
    category: 'Uttapams & Ravas',
    description: 'Extremely lace-like crisp semolina crepe sprinkled with caramelized diced onions, green chillies, crushed peppercorns, and cumin seeds.',
    priceInr: 260,
    imageUrl: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    popular: true
  },
  {
    id: 'sr-medu-vada',
    name: 'Crispy Medu Vada (2 pcs)',
    category: 'Steamed Idlis & Vadas',
    description: 'Fluffy inside and golden crisp outside urad dal doughnut fritters spiced with ginger, curry leaves, and black peppercorns.',
    priceInr: 165,
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    popular: true
  },
  {
    id: 'sr-sagar-thali',
    name: 'Sagar Ratna Executive South Indian Thali',
    category: 'South Indian Thalis & Meals',
    description: 'Authentic South Indian feast: Kootu, Poriyal, Sambar, Rasam, Curd, Steamed Rice, 2 Puris, Appalam, Pickle, and Sweet Kesari Bath.',
    priceInr: 320,
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    popular: true,
    badge: 'Wholesome Vegetarian'
  },
  {
    id: 'sr-dahi-vada',
    name: 'South Indian Dahi Vada',
    category: 'Steamed Idlis & Vadas',
    description: 'Soft lentil dumplings soaked in chilled whipped yogurt, seasoned with tempered mustard seeds, fresh curry leaves, and red chili powder.',
    priceInr: 180,
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    isVeg: true
  },
  {
    id: 'sr-filter-kaapi',
    name: 'Madras Filter Kaapi (Brass Davarah Tumbler)',
    category: 'Filter Kaapi & Desserts',
    description: 'Dark-roasted Chikmagalur coffee beans brewed through a traditional brass filter, frothed with boiled full-fat milk and raw sugar.',
    priceInr: 95,
    imageUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    popular: true,
    badge: 'Iconic Brew'
  },
  {
    id: 'sr-badam-halwa',
    name: 'Royal Melt-in-Mouth Badam Halwa',
    category: 'Filter Kaapi & Desserts',
    description: 'Pure ground almond paste cooked slowly in rich desi ghee with saffron strands and whole green cardamoms.',
    priceInr: 175,
    imageUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
    isVeg: true
  }
];

export const SAGAR_RATNA_WEBSITE: BusinessWebsite = {
  id: 'site-sagar-ratna',
  slug: 'sagar-ratna',
  templateId: 'sagar-ratna',
  businessName: 'SAGAR RATNA PURE VEGETARIAN SOUTH INDIAN',
  category: 'restaurant',
  tagline: 'Authentic South Indian Pure Vegetarian Dining, Ghee Roast Dosas & Filter Kaapi Since 1991',
  description: 'Renowned as North and Central India’s standard of pure vegetarian South Indian culinary excellence, Sagar Ratna serves hot piping dosas, traditional sambars, rasam, and authentic tumbler filter coffee.',
  ownerName: 'Sagar Ratna Restaurants Pvt. Ltd.',
  phone: '+91 11 2410 7444',
  whatsapp: '+911124107444',
  email: 'hospitality@sagarratna.in',
  address: 'Hotel Ashok Yatri Niwas, Ashoka Road, New Delhi 110001',
  city: 'New Delhi',
  mapsUrl: 'https://maps.google.com/?q=Sagar+Ratna+Ashoka+Road+New+Delhi',
  openingHours: 'Mon - Sun: 8:00 AM – 11:00 PM',
  logoUrl: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=200&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#14532d',
  secondaryColor: '#ca8a04',
  fontFamily: 'Inter',
  bookingType: 'table_reservation',
  bookingCtaLabel: 'Reserve South Indian Dining Table',
  specialBadge: 'Pure Veg Excellence Since 1991',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 1999,
  paymentStatus: 'paid',
  items: SAGAR_RATNA_ITEMS.map(i => ({
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
      id: 'sr-breakfast-special',
      title: 'South Indian Morning Tiffin 20% Off',
      discount: '20% Off',
      code: 'TIFFIN20',
      description: 'Enjoy 20% discount on all Dosas, Vadas, and Filter Coffee ordered between 8:00 AM and 11:00 AM.',
      validTill: '31 Dec 2026',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'gal-sr-1',
      title: 'Crispy Butter Roast Dosa with Coconut and Tomato Chutneys',
      category: 'food',
      imageUrl: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gal-sr-2',
      title: 'Traditional Calming Vegetarian Dining Space',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
    }
  ],
  sections: [
    { id: 'hero', title: 'South Indian Pure Vegetarian Sanctuary', isEnabled: true, order: 1 },
    { id: 'dosas', title: 'Crispy Signature Tiffin Dosas', isEnabled: true, order: 2 },
    { id: 'thali', title: 'Grand South Indian Banana Leaf Thali', isEnabled: true, order: 3 },
    { id: 'reserve', title: 'Table Reservation & Takeaway', isEnabled: true, order: 4 }
  ]
};
