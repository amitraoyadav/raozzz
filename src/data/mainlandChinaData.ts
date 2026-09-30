import { BusinessWebsite } from '../types';

export interface ChineseItem {
  id: string;
  name: string;
  category: 'Imperial Dim Sum' | 'Soups & Appetizers' | 'Sichuan & Cantonese Mains' | 'Claypots, Rice & Wok Noodles' | 'Asian Desserts';
  description: string;
  priceInr: number;
  imageUrl: string;
  isVeg: boolean;
  popular?: boolean;
  spiceLevel?: 'Mild' | 'Medium' | 'Fiery Sichuan';
  badge?: string;
}

export const MAINLAND_CHINA_ITEMS: ChineseItem[] = [
  {
    id: 'mc-siu-mai',
    name: 'Steamed Prawn & Water Chestnut Siu Mai (4 pcs)',
    category: 'Imperial Dim Sum',
    description: 'Open-topped translucent dumplings hand-pleated with wild sea prawns and crunchy water chestnuts, garnished with flying fish roe.',
    priceInr: 495,
    imageUrl: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80',
    isVeg: false,
    popular: true,
    badge: 'Chef Masterpiece'
  },
  {
    id: 'mc-edamame-truffle-dimsum',
    name: 'Edamame & White Truffle Crystal Dumpling (4 pcs)',
    category: 'Imperial Dim Sum',
    description: 'Silky crystal potato starch skin packed with mashed edamame beans and perfumed with Italian white truffle oil.',
    priceInr: 465,
    imageUrl: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    popular: true,
    badge: 'Vegetarian Delicacy'
  },
  {
    id: 'mc-eight-treasure-soup',
    name: 'Eight Treasure Sweet Corn & Chicken Soup',
    category: 'Soups & Appetizers',
    description: 'Velvety golden sweet corn soup simmered with eight classic Cantonese treasures: shredded chicken, black mushrooms, water chestnuts, and baby corn.',
    priceInr: 345,
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    isVeg: false
  },
  {
    id: 'mc-tsing-hoi-chicken',
    name: 'General Tsing Hoi Chili Chicken',
    category: 'Sichuan & Cantonese Mains',
    description: 'Crisp chicken morsels tossed in fiery dark wok sauce with dry whole red chillies, fermented soy paste, cashews, and scallions.',
    priceInr: 585,
    imageUrl: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80',
    isVeg: false,
    popular: true,
    spiceLevel: 'Fiery Sichuan',
    badge: 'All-Time Legend'
  },
  {
    id: 'mc-mapo-tofu',
    name: 'Authentic Sichuan Peppercorn Mapo Tofu',
    category: 'Sichuan & Cantonese Mains',
    description: 'Silken bean curd cubes bathed in spicy fermented broad bean paste (doubanjiang) with tongue-numbing red Sichuan peppercorns.',
    priceInr: 495,
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    spiceLevel: 'Fiery Sichuan'
  },
  {
    id: 'mc-panfried-noodles',
    name: 'Cantonese Pan-Fried Crispy Noodles with Vegetables',
    category: 'Claypots, Rice & Wok Noodles',
    description: 'Crispy bird-nest egg noodles crowned with a rich white garlic gravy of bok choy, shiitake mushrooms, and lotus stem.',
    priceInr: 475,
    imageUrl: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    popular: true
  },
  {
    id: 'mc-honey-noodles-icecream',
    name: 'Crispy Honey Tossed Noodles with Vanilla Ice Cream',
    category: 'Asian Desserts',
    description: 'Hot crisp fried wonton noodles glazed with sweet blossom honey and toasted sesame seeds, served with cold Madagascar vanilla gelato.',
    priceInr: 325,
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    badge: 'Sweet Finale'
  }
];

export const MAINLAND_CHINA_WEBSITE: BusinessWebsite = {
  id: 'site-mainland-china',
  slug: 'mainland-china',
  templateId: 'mainland-china',
  businessName: 'DYNASTY IMPERIAL CHINESE CUISINE',
  category: 'restaurant',
  tagline: 'Authentic Cantonese Dim Sum & Masterful Sichuan Claypots',
  description: 'Speciality Chinese fine dining bringing hand-pleated crystal dim sum, Tsing Hoi wok classics, and authentic Sichuan peppercorn gastronomy to life.',
  ownerName: 'Speciality Restaurants Ltd.',
  phone: '+91 33 2283 7777',
  whatsapp: '+913322837777',
  email: 'reservations@dynastychinese.in',
  address: 'Park Street, Kolkata, West Bengal 700016',
  city: 'Kolkata',
  mapsUrl: 'https://maps.google.com/?q=Mainland+China+Park+Street+Kolkata',
  openingHours: 'Lunch: 12:30 PM – 3:30 PM · Dinner: 7:00 PM – 11:30 PM',
  logoUrl: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=200&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#881337',
  secondaryColor: '#d97706',
  fontFamily: 'Fraunces',
  bookingType: 'table_reservation',
  bookingCtaLabel: 'Reserve Chinese Dining Table',
  specialBadge: 'Cantonese & Sichuan Masters',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 1999,
  paymentStatus: 'paid',
  items: MAINLAND_CHINA_ITEMS.map(i => ({
    id: i.id,
    name: i.name,
    description: i.description,
    price: i.priceInr,
    category: i.category,
    imageUrl: i.imageUrl,
    popular: !!i.popular,
    isVeg: i.isVeg,
    badge: i.badge || i.spiceLevel
  })),
  offers: [
    {
      id: 'mc-dimsum-lunch',
      title: 'Unlimited Dim Sum Lunch Feast',
      discount: '₹200 Off',
      code: 'DIMSUMLOVE',
      description: 'Enjoy unlimited crystal dim sums, jasmine green tea, and Hakka noodles during weekday lunch hours.',
      validTill: '31 Dec 2026',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'gal-mc-1',
      title: 'Bamboo Steamer Basket Dim Sum Trolley',
      category: 'food',
      imageUrl: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gal-mc-2',
      title: 'Imperial Jade Fine Dining Hall',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
    }
  ],
  sections: [
    { id: 'hero', title: 'Cantonese & Sichuan Mastery', isEnabled: true, order: 1 },
    { id: 'dimsum', title: 'Imperial Dim Sum Basket', isEnabled: true, order: 2 },
    { id: 'mains', title: 'Wok Specialties & Claypots', isEnabled: true, order: 3 },
    { id: 'reserve', title: 'Table Reservation', isEnabled: true, order: 4 }
  ]
};
