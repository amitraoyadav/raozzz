import { BusinessWebsite } from '../types';

export interface BengaliItem {
  id: string;
  name: string;
  category: 'Calcutta Starters & Fries' | 'Steamed & Mustard Fish' | 'Nawabi Curries & Kosha' | 'Kolkata Biryani & Breads' | 'Mishti & Desserts';
  description: string;
  priceInr: number;
  imageUrl: string;
  isVeg: boolean;
  popular?: boolean;
  badge?: string;
  spiceLevel?: 'Mild' | 'Medium' | 'Kolkata Hot';
}

export const OH_CALCUTTA_ITEMS: BengaliItem[] = [
  {
    id: 'oc-bhapa-ilish',
    name: 'Bhapa Ilish (Steamed Hilsa in Shorshe)',
    category: 'Steamed & Mustard Fish',
    description: 'Iconic Bengali river queen Hilsa fish fillet gently steamed in a stone-ground piquant paste of yellow & black mustard, fiery green chillies, and cold-pressed mustard oil.',
    priceInr: 975,
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    isVeg: false,
    popular: true,
    badge: 'Colonial Masterpiece',
    spiceLevel: 'Kolkata Hot'
  },
  {
    id: 'oc-kosha-mangsho',
    name: 'Puraton Kolkatar Kosha Mangsho',
    category: 'Nawabi Curries & Kosha',
    description: 'Tender baby mutton braised for hours with caramelised sweet red onions, whole garam masala, ginger juliennes, and dark roasted spices until rich, thick, and velvety.',
    priceInr: 795,
    imageUrl: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80',
    isVeg: false,
    popular: true,
    badge: 'Kolkata Legend',
    spiceLevel: 'Medium'
  },
  {
    id: 'oc-daab-chingri',
    name: 'Daab Chingri (Jumbo Prawns in Green Coconut)',
    category: 'Steamed & Mustard Fish',
    description: 'Tiger sea prawns gently poached inside a tender young green coconut (daab) with coconut cream, five-spice panch phoron, and a touch of mustard.',
    priceInr: 895,
    imageUrl: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80',
    isVeg: false,
    popular: true,
    badge: 'Chef Signature'
  },
  {
    id: 'oc-bhetki-gondhoraj',
    name: 'Gondhoraj Bhetki Paturi',
    category: 'Calcutta Starters & Fries',
    description: 'Kolkata Calcutta Bhetki fish wrapped in fresh smoked banana leaf slathered with freshly squeezed aromatic Gondhoraj lime, mustard, and green chili paste.',
    priceInr: 685,
    imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    isVeg: false,
    popular: true
  },
  {
    id: 'oc-mochar-chop',
    name: 'Mochar Chop (Banana Blossom Croquettes)',
    category: 'Calcutta Starters & Fries',
    description: 'Finely minced spiced banana blossom florets and sweet potato crumbed in crisp toasted breadcrumbs, served with Kasundi mustard dip.',
    priceInr: 395,
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    badge: 'Vegetarian Heritage'
  },
  {
    id: 'oc-chhanar-dalna',
    name: 'Chhanar Dalna (Fresh Cottage Cheese Dumplings)',
    category: 'Nawabi Curries & Kosha',
    description: 'Melt-in-mouth homemade chhana cottage cheese koftas simmered in a light golden cumin, ginger, and green cardamom gravy with diced potatoes.',
    priceInr: 495,
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    isVeg: true
  },
  {
    id: 'oc-kolkata-biryani',
    name: 'Nawabi Kolkata Mutton Biryani (with Aloo & Egg)',
    category: 'Kolkata Biryani & Breads',
    description: 'Fragrant long-grain aged Basmati rice dum-cooked with tender Awadhi mutton, saffron milk, kewra water, sweet browned onions, and the quintessential spiced melting Kolkata potato.',
    priceInr: 695,
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    isVeg: false,
    popular: true,
    badge: 'Awadhi-Kolkata Blend'
  },
  {
    id: 'oc-luchi-platter',
    name: 'Fluffy Golden Bengali Luchis (4 pcs)',
    category: 'Kolkata Biryani & Breads',
    description: 'Deep-fried piping hot maida breads, puffed golden and crisp, the classic accompaniment to Kosha Mangsho or Chholar Dal.',
    priceInr: 195,
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    isVeg: true
  },
  {
    id: 'oc-mishti-doi',
    name: 'Earthen Pot Baked Mishti Doi',
    category: 'Mishti & Desserts',
    description: 'Slow-caramelised creamy milk cultured in natural porous terracotta clay pots with natural unrefined date palm jaggery (nolen gur).',
    priceInr: 245,
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    popular: true,
    badge: 'Sweet Confection'
  },
  {
    id: 'oc-nolen-gur-icecream',
    name: 'Artisan Nolen Gur Ice Cream',
    category: 'Mishti & Desserts',
    description: 'Handcrafted rich churned dairy ice cream swirled with liquid golden winter date palm jaggery from Nadia district.',
    priceInr: 295,
    imageUrl: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    badge: 'Winter Jaggery Special'
  }
];

export const OH_CALCUTTA_WEBSITE: BusinessWebsite = {
  id: 'site-oh-calcutta',
  slug: 'oh-calcutta',
  templateId: 'oh-calcutta',
  businessName: 'CALCUTTA HERITAGE BENGALI GASTRONOMY',
  category: 'restaurant',
  tagline: 'Preserving 300 Years of Calcutta Nawabi, Colonial & Zamindari Culinary Treasures',
  description: 'Speciality Restaurants acclaimed fine dining institution celebrating authentic Bengali cuisine: fragrant Bhapa Ilish, slow-braised Kosha Mangsho, Daab Chingri, and artisanal clay pot Mishti Doi.',
  ownerName: 'Speciality Restaurants Ltd.',
  phone: '+91 33 2283 7171',
  whatsapp: '+913322837171',
  email: 'reservations@calcuttaheritage.in',
  address: 'Forum Mall, 10/3 Elgin Road, Kolkata, West Bengal 700020',
  city: 'Kolkata',
  mapsUrl: 'https://maps.google.com/?q=Oh+Calcutta+Forum+Mall+Kolkata',
  openingHours: 'Lunch: 12:30 PM – 3:30 PM · Dinner: 7:00 PM – 11:30 PM',
  logoUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=200&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#581c87',
  secondaryColor: '#d97706',
  fontFamily: 'Fraunces',
  bookingType: 'table_reservation',
  bookingCtaLabel: 'Reserve Bengali Feast Table',
  specialBadge: 'Zamindari & Nawabi Heritage',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 1999,
  paymentStatus: 'paid',
  items: OH_CALCUTTA_ITEMS.map(i => ({
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
      id: 'oc-zamindari-thali',
      title: 'Grand Zamindari Lunch Thali',
      discount: '₹250 Off',
      code: 'BENGALITHALI',
      description: 'Lavish weekday lunch comprising 12 courses including Bhetki Paturi, Kosha Mangsho, Luchis, and Mishti Doi.',
      validTill: '31 Dec 2026',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'gal-oc-1',
      title: 'Steamed Hilsa in Kasundi Mustard Gravy',
      category: 'food',
      imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gal-oc-2',
      title: 'Heritage British-Bengal Mahogany Dining Hall',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
    }
  ],
  sections: [
    { id: 'hero', title: 'Calcutta 300 Years Gastronomy', isEnabled: true, order: 1 },
    { id: 'seafood', title: 'Mustard Fish & Bay Prawns', isEnabled: true, order: 2 },
    { id: 'curries', title: 'Slow-Cooked Kosha Mangsho', isEnabled: true, order: 3 },
    { id: 'reserve', title: 'Table Reservation', isEnabled: true, order: 4 }
  ]
};
