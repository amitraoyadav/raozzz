import { BusinessWebsite } from '../types';

export interface NandosItem {
  id: string;
  name: string;
  category: 'Flame-Grilled PERi-PERi Chicken' | 'Espetadas & Sharing Platters' | 'PERi Burgers, Pitas & Wraps' | 'Sides & Bottomless Drinks';
  description: string;
  priceInr: number;
  imageUrl: string;
  isVeg: boolean;
  popular?: boolean;
  spiceHeat?: 'Plainish' | 'Lemon & Herb' | 'Medium' | 'Hot' | 'Extra Hot';
  badge?: string;
}

export const NANDOS_ITEMS: NandosItem[] = [
  {
    id: 'nandos-half-chicken',
    name: 'Half Flame-Grilled PERi-PERi Chicken',
    category: 'Flame-Grilled PERi-PERi Chicken',
    description: 'Fresh chicken marinated for 24 hours in African Bird’s Eye Chilli, flame-grilled to order with your choice of PERi-PERi basting spice.',
    priceInr: 495,
    imageUrl: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80',
    isVeg: false,
    popular: true,
    spiceHeat: 'Hot',
    badge: 'Signature Dish'
  },
  {
    id: 'nandos-full-chicken',
    name: 'Full Flame-Grilled PERi-PERi Chicken',
    category: 'Flame-Grilled PERi-PERi Chicken',
    description: 'Whole chicken flame-grilled over open fire, basted with Lemon & Herb or Extra Hot chilli glaze, cut into quarters for sharing.',
    priceInr: 895,
    imageUrl: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',
    isVeg: false,
    popular: true,
    spiceHeat: 'Medium'
  },
  {
    id: 'nandos-espetada-carnival',
    name: 'Espetada Carnival Skewer',
    category: 'Espetadas & Sharing Platters',
    description: 'Tender chicken thighs skewered with sweet bell peppers and red onions, hanging suspended over your choice of two regular sides with garlic butter drizzle.',
    priceInr: 695,
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    isVeg: false,
    popular: true,
    badge: 'Showstopper'
  },
  {
    id: 'nandos-peri-chips',
    name: 'PERi-PERi Salted Chips',
    category: 'Sides & Bottomless Drinks',
    description: 'Crispy skin-on potato fries dusted generously with our secret fiery PERi-PERi seasoning salt.',
    priceInr: 195,
    imageUrl: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    popular: true
  },
  {
    id: 'nandos-chicken-pita',
    name: 'Flame-Grilled Chicken Breast Pita',
    category: 'PERi Burgers, Pitas & Wraps',
    description: 'Tender basted chicken breast, crisp lettuce, tomato slices, and tangy PERi-naise mayo tucked in a toasted Lebanese pita.',
    priceInr: 345,
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    isVeg: false
  },
  {
    id: 'nandos-paneer-burger',
    name: 'PERi-PERi Grilled Paneer Burger',
    category: 'PERi Burgers, Pitas & Wraps',
    description: 'Thick cut slab of cottage cheese marinated in African bird’s eye chilli, flame-grilled and served in a toasted brioche bun with crispy slaw.',
    priceInr: 325,
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    badge: 'Veg Hero'
  },
  {
    id: 'nandos-bottomless-soft-drink',
    name: 'Bottomless Coca-Cola Fountain Cup',
    category: 'Sides & Bottomless Drinks',
    description: 'Unlimited self-serve refills from our ice fountain: Coca-Cola, Sprite, Fanta, and Diet Coke.',
    priceInr: 165,
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    isVeg: true
  }
];

export const NANDOS_WEBSITE: BusinessWebsite = {
  id: 'site-nandos',
  slug: 'nandos',
  templateId: 'nandos',
  businessName: 'FUEGO FLAME-GRILLED PERI-PERI',
  category: 'restaurant',
  tagline: 'Afro-Portuguese 24-Hour Marinated Flame-Grilled Chicken & Signature Heat Bastings',
  description: 'Home of the legendary flame-grilled chicken infused with African Bird’s Eye Chilli (PERi-PERi). Choose your heat, order table skewers, and enjoy bottomless drinks.',
  ownerName: 'Fuego International Hospitality',
  phone: '+91 11 4105 5000',
  whatsapp: '+911141055000',
  email: 'peri@fuegogrill.in',
  address: 'Cyber Hub, DLF Phase 2, Gurugram, Haryana 122002',
  city: 'Gurugram',
  mapsUrl: 'https://maps.google.com/?q=Nandos+Cyber+Hub+Gurgaon',
  openingHours: 'Mon - Sun: 11:30 AM – 11:30 PM',
  logoUrl: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=200&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#000000',
  secondaryColor: '#dc2626',
  fontFamily: 'Space Grotesk',
  bookingType: 'table_reservation',
  bookingCtaLabel: 'Order PERi-PERi Chicken',
  specialBadge: 'Afro-Portuguese Flame Grill',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 1999,
  paymentStatus: 'paid',
  items: NANDOS_ITEMS.map(i => ({
    id: i.id,
    name: i.name,
    description: i.description,
    price: i.priceInr,
    category: i.category,
    imageUrl: i.imageUrl,
    popular: !!i.popular,
    isVeg: i.isVeg,
    badge: i.badge || i.spiceHeat
  })),
  offers: [
    {
      id: 'nandos-meal-deal',
      title: 'Half Chicken + 2 Sides Platter',
      discount: '₹120 Off',
      code: 'FUEGOMEAL',
      description: 'Order any Half Flame-Grilled Chicken with 2 regular sides (PERi chips & spicy rice) and save ₹120.',
      validTill: '31 Dec 2026',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'gal-nan-1',
      title: 'Flame Basting on Open Fire Grill',
      category: 'facilities',
      imageUrl: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gal-nan-2',
      title: 'The Famous Hanging Espetada Skewer',
      category: 'food',
      imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
    }
  ],
  sections: [
    { id: 'hero', title: 'Afro-Portuguese Flame Grill', isEnabled: true, order: 1 },
    { id: 'heatscale', title: 'The PERi-ometer Heat Scale', isEnabled: true, order: 2 },
    { id: 'menu', title: 'Chicken, Espetadas & Burgers', isEnabled: true, order: 3 },
    { id: 'story', title: 'The African Bird’s Eye Chilli Story', isEnabled: true, order: 4 }
  ]
};
