import { BusinessWebsite } from '../types';

export interface GreenberrysItem {
  id: string;
  name: string;
  category: 'Craft Roasted Beans' | 'Nitro & Cold Brew' | 'Signature Lattes & Teas' | 'Bakery & Breakfast';
  description: string;
  priceUsd: number;
  priceInr: number;
  imageUrl: string;
  roast?: string;
  popular?: boolean;
}

export const GREENBERRYS_ITEMS: GreenberrysItem[] = [
  // Craft Roasted Beans
  {
    id: 'gb-monticello-blend',
    name: 'Monticello Blend',
    category: 'Craft Roasted Beans',
    description: 'Our historic Charlottesville flagship blend. Medium roast combining Central and South American beans with notes of toasted pecan, sweet citrus, and milk chocolate.',
    priceUsd: 16.95,
    priceInr: 1695,
    imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80',
    roast: 'Medium',
    popular: true
  },
  {
    id: 'gb-shenandoah-dark',
    name: 'Shenandoah Dark Roast',
    category: 'Craft Roasted Beans',
    description: 'Deep, smoky, and full-bodied roasted Arabica inspired by the Blue Ridge Mountains. Robust dark cocoa and caramelized brown sugar notes.',
    priceUsd: 17.50,
    priceInr: 1750,
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    roast: 'Dark',
    popular: true
  },
  {
    id: 'gb-ethiopian-yirgacheffe',
    name: 'Ethiopian Yirgacheffe Single Origin',
    category: 'Craft Roasted Beans',
    description: 'Washed heirloom Arabica with delicate jasmine floral aromas, bergamot citrus, and honey nectar sweetness.',
    priceUsd: 18.95,
    priceInr: 1895,
    imageUrl: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=600&q=80',
    roast: 'Light-Medium'
  },
  // Nitro & Cold Brew
  {
    id: 'gb-nitro-cold-brew',
    name: 'Signature Nitro Cold Brew',
    category: 'Nitro & Cold Brew',
    description: 'Steeped for 20 hours and infused with food-grade nitrogen on draft for a creamy, Guinness-style head without any added dairy.',
    priceUsd: 5.75,
    priceInr: 575,
    imageUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80',
    popular: true
  },
  {
    id: 'gb-bourbon-cold-brew',
    name: 'Vanilla Bourbon Draft Cold Brew',
    category: 'Nitro & Cold Brew',
    description: 'Nitro cold brew infused with organic Madagascar vanilla and Kentucky oak barrel aroma syrup.',
    priceUsd: 6.25,
    priceInr: 625,
    imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80'
  },
  // Signature Lattes & Teas
  {
    id: 'gb-honey-lavender-latte',
    name: 'Honey Lavender Macchiato',
    category: 'Signature Lattes & Teas',
    description: 'Espresso poured over clover honey, culinary lavender blossoms, and velvety steamed oat milk.',
    priceUsd: 6.00,
    priceInr: 600,
    imageUrl: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80',
    popular: true
  },
  // Bakery & Breakfast
  {
    id: 'gb-blueberry-scone',
    name: 'Fresh Baked Virginia Blueberry Scone',
    category: 'Bakery & Breakfast',
    description: 'Traditional scratch buttermilk scone loaded with wild mountain blueberries and sweet vanilla royal glaze.',
    priceUsd: 4.50,
    priceInr: 450,
    imageUrl: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80',
    popular: true
  },
  {
    id: 'gb-egg-bacon-croissant',
    name: 'Smoked Bacon & Cheddar Croissant',
    category: 'Bakery & Breakfast',
    description: 'Applewood smoked bacon, sharp white cheddar, and fluffy folded farm egg on a flaky French butter croissant.',
    priceUsd: 8.50,
    priceInr: 850,
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80'
  }
];

export const GREENBERRYS_WEBSITE: BusinessWebsite = {
  id: 'site-greenberrys',
  slug: 'greenberrys',
  templateId: 'greenberrys',
  businessName: 'BREW & BLOOM',
  category: "Craft Coffee Roasters — Charlottesville VA",
  tagline: "Charlottesville's Premier Coffee Shop & Small-Batch Roastery Since 1992",
  city: 'Charlottesville',
  address: '107 Elliewood Ave, Charlottesville, VA 22903, United States',
  phone: '+1 434-984-4808',
  whatsapp: '+14349844808',
  email: 'coffee@brewbloom.in',
  mapsUrl: 'https://maps.google.com/?q=Greenberrys+Coffee+Charlottesville+VA',
  openingHours: 'Mon - Sun: 6:30 AM – 7:00 PM',
  logoUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=200&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#1d3557',
  secondaryColor: '#e63946',
  fontFamily: 'Inter',
  bookingType: 'table_reservation',
  bookingCtaLabel: 'Order Ahead for Pickup',
  specialBadge: 'Roasting in Virginia Since 1992',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 1999,
  paymentStatus: 'paid',
  createdAt: '2026-02-18T08:00:00.000Z',
  updatedAt: '2026-09-29T14:30:00.000Z',
  sections: [
    { id: 'hero', title: 'Charlottesville Heritage Roasting', isEnabled: true, order: 1 },
    { id: 'coffee', title: 'Our Small-Batch Coffees', isEnabled: true, order: 2 },
    { id: 'nitro', title: 'Nitro Cold Brew on Tap', isEnabled: true, order: 3 },
    { id: 'story', title: 'Our 1992 Virginia Story', isEnabled: true, order: 4 },
    { id: 'locations', title: 'Visit Our Neighborhood Cafes', isEnabled: true, order: 5 }
  ],
  items: GREENBERRYS_ITEMS.map(i => ({
    id: i.id,
    name: i.name,
    description: i.description,
    price: i.priceInr,
    category: i.category,
    imageUrl: i.imageUrl,
    isVeg: !i.description.toLowerCase().includes('bacon'),
    popular: !!i.popular,
    badge: i.roast || i.category
  })),
  offers: [
    {
      id: 'offer-gb-beans',
      title: 'Whole Bean Loyalty Perk',
      discount: 'Buy 2 Bags, Get Free 16oz Cold Brew',
      code: 'MONTICELLO',
      description: 'Purchase any two bags of small-batch roasted beans and receive a free signature Nitro cold brew.',
      validTill: '31 Dec 2026',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'gal-gb-1',
      imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
      title: 'Shenandoah Dark Roast Beans',
      category: 'coffee'
    }
  ]
};
