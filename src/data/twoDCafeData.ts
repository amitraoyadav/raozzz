import { BusinessWebsite } from '../types';

export interface TwoDMenuItem {
  id: string;
  name: string;
  category: 'Comic Cakes & Bakes' | 'Handcrafted Coffees' | 'Boba & Bubble Teas' | 'Artisanal Sandwiches & Savories' | 'Sketchbook Shakes';
  description: string;
  priceInr: number;
  imageUrl: string;
  popular?: boolean;
  isVegetarian?: boolean;
}

export interface TwoDFaq {
  question: string;
  answer: string;
}

export const TWOD_MENU: TwoDMenuItem[] = [
  // Comic Cakes & Bakes
  {
    id: 'twod-comic-cheesecake',
    name: '2D Comic Outline Cheesecake',
    category: 'Comic Cakes & Bakes',
    description: 'Iconic monochrome illustrated slice with rich New York style baked cream cheese and crisp chocolate hand-drawn cartoon outlines.',
    priceInr: 340,
    imageUrl: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80',
    popular: true,
    isVegetarian: true
  },
  {
    id: 'twod-bubble-waffle',
    name: 'Sketchbook Bubble Waffle',
    category: 'Comic Cakes & Bakes',
    description: 'Warm Hong Kong egg puff waffle with Madagascar vanilla gelato, toasted marshmallow, dark chocolate drizzle, and hand-drawn wafer toppers.',
    priceInr: 380,
    imageUrl: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80',
    popular: true,
    isVegetarian: true
  },
  {
    id: 'twod-tiramisu-jar',
    name: 'Monochrome Tiramisu Pot',
    category: 'Comic Cakes & Bakes',
    description: 'Espresso-soaked ladyfingers, velvety mascarpone cream, Belgian cocoa dusting with signature stencil art.',
    priceInr: 320,
    imageUrl: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80',
    isVegetarian: true
  },
  // Handcrafted Coffees
  {
    id: 'twod-charcoal-latte',
    name: 'Signature Charcoal Monochrome Latte',
    category: 'Handcrafted Coffees',
    description: 'Activated charcoal infused with single estate espresso and silky microfoam, creating a stunning high-contrast black-and-white drink.',
    priceInr: 290,
    imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80',
    popular: true,
    isVegetarian: true
  },
  {
    id: 'twod-spanish-latte',
    name: 'Sketchbook Spanish Iced Latte',
    category: 'Handcrafted Coffees',
    description: 'Double shot of dark roast Arabica poured over sweetened condensed milk and cold textured whole milk.',
    priceInr: 280,
    imageUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80',
    isVegetarian: true
  },
  {
    id: 'twod-caramel-cappuccino',
    name: 'Salted Caramel Comic Cappuccino',
    category: 'Handcrafted Coffees',
    description: 'Velvety espresso with Himalayan salted caramel, dense microfoam, and cartoon sketch dusting.',
    priceInr: 260,
    imageUrl: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80',
    isVegetarian: true
  },
  // Boba & Bubble Teas
  {
    id: 'twod-brown-sugar-boba',
    name: 'Tiger Brown Sugar Boba Milk',
    category: 'Boba & Bubble Teas',
    description: 'Chewy warm tapioca pearls coated in caramelized brown sugar syrup with iced farm-fresh milk and cream foam.',
    priceInr: 310,
    imageUrl: 'https://images.unsplash.com/photo-1558857563-b37cf2cb7a7d?auto=format&fit=crop&w=600&q=80',
    popular: true,
    isVegetarian: true
  },
  {
    id: 'twod-taro-bubble-tea',
    name: 'Lavender Taro Milk Tea with Popping Boba',
    category: 'Boba & Bubble Teas',
    description: 'Creamy aromatic taro root infused black tea served chilled with mango popping juice pearls.',
    priceInr: 320,
    imageUrl: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=600&q=80',
    isVegetarian: true
  },
  // Artisanal Sandwiches & Savories
  {
    id: 'twod-truffle-melt',
    name: 'Artisan Truffle Mushroom Panini',
    category: 'Artisanal Sandwiches & Savories',
    description: 'Sautéed wild mushrooms, white truffle oil, melted mozzarella and cheddar on rustic charcoal sourdough bread.',
    priceInr: 360,
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
    popular: true,
    isVegetarian: true
  },
  {
    id: 'twod-pesto-paneer',
    name: 'Sundried Tomato & Pesto Panini',
    category: 'Artisanal Sandwiches & Savories',
    description: 'Herbed cottage cheese paneer cubes, Genovese basil pesto, kalamata olives, and baby spinach pressed golden.',
    priceInr: 340,
    imageUrl: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80',
    isVegetarian: true
  },
  // Sketchbook Shakes
  {
    id: 'twod-cookies-cream',
    name: 'Monochrome Cookies & Cream Shake',
    category: 'Sketchbook Shakes',
    description: 'Blended Oreo cookies, vanilla bean gelato, dark chocolate border rim, topped with 2D sketched cookie sandwich.',
    priceInr: 330,
    imageUrl: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
    isVegetarian: true
  }
];

export const TWOD_FAQS: TwoDFaq[] = [
  {
    question: 'What is the 2D Cafe concept?',
    answer: '2D Cafe is an illusionary cafe where every wall, chair, table, floor, and fixture is hand-drawn in monochrome comic-book sketch style. Stepping inside feels like stepping right into the pages of a graphic novel or sketchbook.'
  },
  {
    question: 'Where can I visit 2D Cafe?',
    answer: 'Our flagship studio is located in Connaught Place (CP), New Delhi, with partner franchise outlets in Bengaluru and Mumbai.'
  },
  {
    question: 'How can I apply for a franchise?',
    answer: 'We offer full-turnkey FOCO and FOFO franchise models including complete architectural sketchbook wall art illustration, barista training, and kitchen setup. Fill out the franchise form on this page.'
  }
];

export const TWOD_WEBSITE: BusinessWebsite = {
  id: 'site-2d-cafe',
  slug: '2d-cafe',
  templateId: '2d-cafe',
  businessName: 'BREW & BLOOM',
  category: '2D Sketchbook & Comic Cafe',
  tagline: 'The Sketchbook of Flavours — Step Inside the Graphic Novel',
  city: 'New Delhi',
  address: 'Block M, Outer Circle, Connaught Place, New Delhi, Delhi 110001',
  phone: '+91 98112 00022',
  whatsapp: '+919811200022',
  email: 'hello@brewbloom.in',
  mapsUrl: 'https://maps.google.com/?q=2D+Cafe+Connaught+Place+Delhi',
  openingHours: 'Mon - Sun: 11:00 AM – 11:00 PM',
  logoUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=200&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#0c0c0c',
  secondaryColor: '#b8965a',
  fontFamily: 'Playfair Display',
  bookingType: 'table_reservation',
  bookingCtaLabel: 'Reserve a Sketch Table',
  specialBadge: 'India’s 1st 2D Illusion Cafe',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 1999,
  paymentStatus: 'paid',
  createdAt: '2026-02-15T08:00:00.000Z',
  updatedAt: '2026-09-29T14:30:00.000Z',
  sections: [
    { id: 'hero', title: 'Step Inside the Sketchbook', isEnabled: true, order: 1 },
    { id: 'menu', title: 'The Sketchbook Menu', isEnabled: true, order: 2 },
    { id: 'franchise', title: 'Own a 2D Cafe', isEnabled: true, order: 3 },
    { id: 'faq', title: 'Frequently Asked Questions', isEnabled: true, order: 4 },
    { id: 'contact', title: 'Visit Us & Bookings', isEnabled: true, order: 5 }
  ],
  items: TWOD_MENU.map(i => ({
    id: i.id,
    name: i.name,
    description: i.description,
    price: i.priceInr,
    category: i.category,
    imageUrl: i.imageUrl,
    isVeg: !!i.isVegetarian,
    popular: !!i.popular,
    badge: i.category
  })),
  offers: [
    {
      id: 'offer-twod-comic',
      title: 'Comic Duo Special',
      discount: '20% Off Sweet + Savory',
      code: 'COMIC20',
      description: 'Order any 2D Panini with a Comic Outline Cheesecake and save 20% on your table order.',
      validTill: '31 Dec 2026',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'gal-twod-1',
      imageUrl: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80',
      title: '2D Comic Outline Cheesecake',
      category: 'food'
    },
    {
      id: 'gal-twod-2',
      imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80',
      title: 'Charcoal High-Contrast Latte',
      category: 'coffee'
    }
  ]
};
