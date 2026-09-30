import { BusinessWebsite } from '../types';

export interface BenneItem {
  id: string;
  name: string;
  category: 'Authentic Benne Dosas' | 'Traditional Tiffin & Snacks' | 'South Indian Filter Kaapi' | 'Chutneys & Podi Jars';
  description: string;
  priceInr: number;
  imageUrl: string;
  popular?: boolean;
  isVegetarian: boolean;
  badge?: string;
}

export const BENNE_ITEMS: BenneItem[] = [
  {
    id: 'benne-classic-dosa',
    name: 'Davangere Classic Benne Dosa',
    category: 'Authentic Benne Dosas',
    description: 'Thick, golden-crisp on the outside and airy soft inside, roasted on cast-iron tava with generous dollops of fresh churned white butter (benne). Served with spicy potato palya and coconut chutney.',
    priceInr: 160,
    imageUrl: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
    popular: true,
    isVegetarian: true,
    badge: 'House Specialty'
  },
  {
    id: 'benne-podi-ghee-dosa',
    name: 'Guntur Spicy Podi Benne Dosa',
    category: 'Authentic Benne Dosas',
    description: 'Smothered with fiery roasted lentil gunpowder (podi) and freshly churned butter. Ultra-fragrant, spicy, and decadently crispy.',
    priceInr: 180,
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    popular: true,
    isVegetarian: true,
    badge: 'Best Seller'
  },
  {
    id: 'benne-open-butter-masala',
    name: 'Davangere Open Butter Masala Dosa',
    category: 'Authentic Benne Dosas',
    description: 'Served open face with aromatic mashed potato bhaji, red garlic chutney spread, and a melting block of artisanal white butter on top.',
    priceInr: 190,
    imageUrl: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true
  },
  {
    id: 'benne-thatte-idli',
    name: 'Steamed Thatte Idli with Ghee & Podi (2 pcs)',
    category: 'Traditional Tiffin & Snacks',
    description: 'Plate-sized fluffy steamed rice cakes drenched in melted pure cow ghee and signature spicy gun powder. Served with fresh coconut chutney.',
    priceInr: 130,
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    popular: true,
    isVegetarian: true
  },
  {
    id: 'benne-mangalore-buns',
    name: 'Sweet Mangalore Banana Buns (2 pcs)',
    category: 'Traditional Tiffin & Snacks',
    description: 'Golden, deep-fried sweet fluffy puris made from fermented banana dough and mild cumin. Served with spicy coconut chutney.',
    priceInr: 120,
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    popular: true,
    isVegetarian: true,
    badge: 'Coastal Classic'
  },
  {
    id: 'benne-medu-vada',
    name: 'Crispy Medu Vada (2 pcs)',
    category: 'Traditional Tiffin & Snacks',
    description: 'Deep-fried golden lentil donuts with crunchy exterior and pillowy center, tempered with crushed pepper, ginger, and curry leaves.',
    priceInr: 110,
    imageUrl: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true
  },
  {
    id: 'benne-filter-kaapi',
    name: 'Heritage Chikmagalur Filter Kaapi',
    category: 'South Indian Filter Kaapi',
    description: 'Decoction extracted from dark-roasted Peaberry & Plantation A beans with 15% chicory, frothed high into a traditional brass dabara tumbler with piping whole milk.',
    priceInr: 80,
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    popular: true,
    isVegetarian: true,
    badge: 'Brass Tumbler'
  },
  {
    id: 'benne-jaggery-kaapi',
    name: 'Organic Bella (Jaggery) Filter Kaapi',
    category: 'South Indian Filter Kaapi',
    description: 'Traditional slow-filtered coffee sweetened with earthy unrefined organic palm jaggery. Rich, caramel notes with zero refined sugar.',
    priceInr: 95,
    imageUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true
  },
  {
    id: 'benne-podi-jar',
    name: 'Grandma’s Roasted Gunpowder Podi (250g Jar)',
    category: 'Chutneys & Podi Jars',
    description: 'Stone-pounded spicy dry chutney powder roasted with chana dal, urad dal, Byadgi chillies, curry leaves, and asafoetida.',
    priceInr: 220,
    imageUrl: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true
  }
];

export const BENNE_WEBSITE: BusinessWebsite = {
  id: 'site-benne',
  slug: 'benne',
  templateId: 'benne',
  businessName: 'MAKKHAN HERITAGE BENNE KAAPI & DOSA',
  category: 'cafe',
  tagline: 'Authentic Davangere Benne Dosas, Thatte Idlis & Brass Tumbler Filter Kaapi in Bandra Mumbai',
  description: 'Bandra West’s beloved retro South Indian cafe bringing authentic Davangere white-butter dosas, Mangalore banana buns, and rich Chikmagalur filter kaapi to Mumbai food lovers.',
  ownerName: 'Makkhan Heritage Foods',
  phone: '+91 98205 11044',
  whatsapp: '+919820511044',
  email: 'vanakkam@makkhanbenne.in',
  address: 'Shop No. 1, 16th Road, Near Pali Village, Bandra West, Mumbai, Maharashtra 400050',
  city: 'Mumbai',
  mapsUrl: 'https://maps.google.com/?q=Benne+Dosa+Bandra+West+Mumbai',
  openingHours: 'Tue - Sun: 7:00 AM – 11:00 PM (Closed Mondays)',
  logoUrl: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=200&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#854d0e',
  secondaryColor: '#ca8a04',
  fontFamily: 'Fraunces',
  bookingType: 'table_reservation',
  bookingCtaLabel: 'Order Hot Dosa / Kaapi',
  specialBadge: 'Bandra West, Mumbai',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 1999,
  paymentStatus: 'paid',
  items: BENNE_ITEMS.map(i => ({
    id: i.id,
    name: i.name,
    description: i.description,
    price: i.priceInr,
    category: i.category,
    imageUrl: i.imageUrl,
    popular: !!i.popular,
    isVeg: true,
    badge: i.badge || i.category
  })),
  offers: [
    {
      id: 'benne-breakfast-combo',
      title: 'Benne Dosa + Filter Kaapi Combo',
      discount: '₹40 Off',
      code: 'BENNEKAAPI',
      description: 'Order any Davangere Benne Dosa with our signature brass tumbler Filter Kaapi and save ₹40 on morning orders.',
      validTill: '31 Dec 2026',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'gal-benne-1',
      title: 'Melting White Butter on Hot Davangere Tava',
      category: 'food',
      imageUrl: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gal-benne-2',
      title: 'Frothy Filter Kaapi in Traditional Brass Dabara',
      category: 'coffee',
      imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gal-benne-3',
      title: 'Pali Hill Bandra Cafe Ambience',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
    }
  ],
  sections: [
    { id: 'hero', title: 'Davangere Benne Magic in Bandra', isEnabled: true, order: 1 },
    { id: 'menu', title: 'Crisp Dosas, Thatte Idlis & Kaapi', isEnabled: true, order: 2 },
    { id: 'location', title: 'Pali Village, Bandra West', isEnabled: true, order: 3 },
    { id: 'story', title: 'The Davangere White Butter Secret', isEnabled: true, order: 4 }
  ]
};
