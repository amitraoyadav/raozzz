import { BusinessWebsite } from '../types';

export interface MrIdliItem {
  id: string;
  name: string;
  category: 'Innovative Steamed Idlis' | 'Crispy Tiffin Dosas' | 'Fusion South Indian' | 'Beverages & Filter Kaapi' | 'Traditional Sweets';
  description: string;
  priceInr: number;
  imageUrl: string;
  isVeg: boolean;
  popular?: boolean;
  badge?: string;
}

export const MR_IDLI_ITEMS: MrIdliItem[] = [
  {
    id: 'mi-button-sambar-idli',
    name: '14 Button Ghee Sambar Mini Idlis',
    category: 'Innovative Steamed Idlis',
    description: 'Fourteen bite-sized steamed rice idlis submerged in a piping hot bowl of aromatic Madras drumstick sambar, crowned with a dollop of pure desi ghee and fresh cilantro.',
    priceInr: 155,
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    popular: true,
    badge: '100% Steamed Healthy'
  },
  {
    id: 'mi-podi-tossed-idli',
    name: 'Guntur Spicy Podi Tossed Idlis (4 pcs)',
    category: 'Innovative Steamed Idlis',
    description: 'Steamed fluffy idli cubes sautéed in roasted aromatic Guntur red chili gun-powder podi and melted ghee, served with creamy coconut chutney.',
    priceInr: 175,
    imageUrl: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    popular: true,
    badge: 'Chef Favorite'
  },
  {
    id: 'mi-schezwan-idli-fry',
    name: 'Wok Tossed Indo-Chinese Schezwan Idli',
    category: 'Fusion South Indian',
    description: 'Crisp-edged idli slices tossed in a high-flame wok with crunchy bell peppers, spring onions, garlic, and fiery Schezwan chili sauce.',
    priceInr: 185,
    imageUrl: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    popular: true,
    badge: 'Fusion Special'
  },
  {
    id: 'mi-kanchipuram-idli',
    name: 'Traditional Kanchipuram Pepper Idli (2 pcs)',
    category: 'Innovative Steamed Idlis',
    description: 'Authentic temple-style idlis spiced with crushed black pepper, cumin seeds, dried ginger powder, curry leaves, and cashews, steamed in banana leaf cups.',
    priceInr: 165,
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    isVeg: true
  },
  {
    id: 'mi-mysore-ghee-dosa',
    name: 'Mysore Ghee Roast Masala Dosa',
    category: 'Crispy Tiffin Dosas',
    description: 'Extra-crisp golden dosa smeared with red garlic-lentil paste and filled with mildly spiced potato sabzi, served with 3 chutneys.',
    priceInr: 195,
    imageUrl: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    popular: true
  },
  {
    id: 'mi-idli-burger',
    name: 'The Original Mr. Idli Steamed Burger',
    category: 'Fusion South Indian',
    description: 'Two soft steamed idli buns sandwiching a crispy spiced vegetable cutlet, sliced cucumber, tomatoes, and tangy coconut-mint mayo.',
    priceInr: 145,
    imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    badge: 'Patent Recipe'
  },
  {
    id: 'mi-madras-filter-coffee',
    name: 'Traditional Kumbakonam Degree Coffee',
    category: 'Beverages & Filter Kaapi',
    description: 'Pure chicory-blended South Indian filter decoction frothed high with thick farm cow milk in traditional brass tumbler.',
    priceInr: 85,
    imageUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    popular: true
  },
  {
    id: 'mi-rava-kesari',
    name: 'Pineapple Ghee Rava Kesari Bath',
    category: 'Traditional Sweets',
    description: 'Melt-in-mouth semolina halwa cooked in pure desi ghee with juicy pineapple bits, saffron, roasted cashews, and golden raisins.',
    priceInr: 110,
    imageUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
    isVeg: true
  }
];

export const MR_IDLI_WEBSITE: BusinessWebsite = {
  id: 'site-mr-idli',
  slug: 'mr-idli',
  templateId: 'mr-idli',
  businessName: 'MR. IDLI HEALTHY STEAMED SOUTH INDIAN',
  category: 'restaurant',
  tagline: '100+ Innovative Steamed Idli Creations, Crispy Dosas & Modern South Indian Fast Dining',
  description: 'Global South Indian dining franchise celebrated for reinventing the humble idli with more than 100 wholesome steamed creations, zero-oil healthy alternatives, fusion idli burgers, and authentic Kumbakonam degree kaapi.',
  ownerName: 'Mr. Idli Express Hospitality',
  phone: '+91 80 4123 9999',
  whatsapp: '+918041239999',
  email: 'franchise@mridli.in',
  address: 'Indiranagar 12th Main Road, Bengaluru, Karnataka 560038',
  city: 'Bengaluru',
  mapsUrl: 'https://maps.google.com/?q=Mr+Idli+Indiranagar+Bangalore',
  openingHours: 'Mon - Sun: 7:00 AM – 10:30 PM',
  logoUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=200&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#15803d',
  secondaryColor: '#ea580c',
  fontFamily: 'Space Grotesk',
  bookingType: 'table_reservation',
  bookingCtaLabel: 'Order Fresh Idli & Dosa',
  specialBadge: '100+ Steamed Creations',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 1999,
  paymentStatus: 'paid',
  items: MR_IDLI_ITEMS.map(i => ({
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
      id: 'mi-breakfast-combo',
      title: 'Steamed Idli + Degree Kaapi ₹199 Combo',
      discount: 'Special Combo',
      code: 'IDLIKIBAT',
      description: 'Choice of Button Sambar Idli or Guntur Podi Idli served with hot Kumbakonam Filter Coffee for just ₹199.',
      validTill: '31 Dec 2026',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'gal-mi-1',
      title: 'Steaming Hot Mini Button Idlis in Fresh Lentil Sambar',
      category: 'food',
      imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gal-mi-2',
      title: 'Modern Eco-Friendly Fast Casual South Indian Cafe',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
    }
  ],
  sections: [
    { id: 'hero', title: '100+ Steamed Healthy Idli Delights', isEnabled: true, order: 1 },
    { id: 'idlis', title: 'Signature Button & Podi Idlis', isEnabled: true, order: 2 },
    { id: 'dosas', title: 'Golden Tiffin Dosas & Kaapi', isEnabled: true, order: 3 },
    { id: 'order', title: 'Quick Takeaway & Catering', isEnabled: true, order: 4 }
  ]
};
