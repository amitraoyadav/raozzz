import { BusinessWebsite } from '../types';

export interface KrishnaProduct {
  id: string;
  sku: string;
  name: string;
  category: 'gold' | 'diamond' | 'kundan' | 'polki' | 'silver' | 'bridal' | 'coins';
  subCategory: string;
  price?: number; // undefined means "Price On Request"
  priceOnRequest?: boolean;
  metal: '22K Gold' | '18K Gold' | '14K Gold' | '24K Gold' | '92.5 Silver' | '99.9 Silver';
  purity: string;
  grossWeightGrams?: number;
  netWeightGrams?: number;
  gemstones?: string;
  imageUrl: string;
  hoverImageUrl?: string;
  galleryImages: string[];
  description: string;
  badge?: string;
  isNewArrival?: boolean;
  isBestseller?: boolean;
  eventTag?: 'wedding' | 'engagement' | 'festival' | 'half_saree';
}

export interface KrishnaCategoryItem {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  count: number;
}

export interface KrishnaBlogArticle {
  id: string;
  title: string;
  slug: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: string;
}

export const GOLD_RATE_TODAY = {
  gold22kPerGram: 6855,
  gold24kPerGram: 7478,
  gold18kPerGram: 5608,
  silverPerGram: 94.50,
  silverPer10Gram: 945,
  updatedDate: 'October 2026',
  city: 'Hyderabad (Jubilee Hills)'
};

export const KRISHNA_CATEGORIES_GOLD: KrishnaCategoryItem[] = [
  {
    id: 'gold-long-necklace',
    name: 'LONG NECKLACE',
    slug: 'gold-long-necklace',
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    count: 48
  },
  {
    id: 'gold-short-necklace',
    name: 'SHORT NECKLACE',
    slug: 'gold-short-necklace',
    imageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
    count: 64
  },
  {
    id: 'gold-vaddanam',
    name: 'VADDANAM',
    slug: 'gold-vaddanam',
    imageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=800&q=80',
    count: 26
  },
  {
    id: 'gold-earrings',
    name: 'EARRINGS',
    slug: 'gold-earrings',
    imageUrl: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
    count: 112
  },
  {
    id: 'gold-bangles',
    name: 'BANGLES',
    slug: 'gold-bangles',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    count: 85
  },
  {
    id: 'gold-necklace-set',
    name: 'GOLD NECKLACE SET',
    slug: 'gold-necklace-set',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    count: 42
  },
  {
    id: 'gold-rings',
    name: 'RINGS',
    slug: 'gold-rings',
    imageUrl: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
    count: 73
  },
  {
    id: 'gold-choker',
    name: 'CHOKER',
    slug: 'gold-choker',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    count: 34
  },
  {
    id: 'gold-mangalsutra',
    name: 'MANGALSUTRA',
    slug: 'gold-mangalsutra',
    imageUrl: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80',
    count: 39
  }
];

export const KRISHNA_CATEGORIES_DIAMOND: KrishnaCategoryItem[] = [
  {
    id: 'dia-long-necklace',
    name: 'LONG NECKLACE',
    slug: 'diamond-long-necklace',
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    count: 38
  },
  {
    id: 'dia-short-necklace',
    name: 'SHORT NECKLACE',
    slug: 'diamond-short-necklace',
    imageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
    count: 52
  },
  {
    id: 'dia-choker',
    name: 'CHOKER',
    slug: 'diamond-choker',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    count: 29
  },
  {
    id: 'dia-vaddanam',
    name: 'VADDANAM',
    slug: 'diamond-vaddanam',
    imageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=800&q=80',
    count: 18
  },
  {
    id: 'dia-earrings',
    name: 'EARRINGS',
    slug: 'diamond-earrings',
    imageUrl: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
    count: 94
  },
  {
    id: 'dia-bangle-bracelet',
    name: 'BANGLE / BRACELET',
    slug: 'diamond-bracelets',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    count: 67
  },
  {
    id: 'dia-mangalsutra',
    name: 'MANGALSUTRA',
    slug: 'diamond-mangalsutra',
    imageUrl: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80',
    count: 31
  },
  {
    id: 'dia-rings',
    name: 'RINGS',
    slug: 'diamond-rings',
    imageUrl: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
    count: 88
  },
  {
    id: 'dia-necklace-set',
    name: 'NECKLACE SET',
    slug: 'diamond-necklace-set',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    count: 45
  },
  {
    id: 'dia-chains',
    name: 'CHAINS',
    slug: 'diamond-chains',
    imageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
    count: 35
  },
  {
    id: 'dia-bajuband',
    name: 'BAJUBAND',
    slug: 'diamond-bajuband',
    imageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=800&q=80',
    count: 14
  },
  {
    id: 'dia-pendant',
    name: 'PENDANT',
    slug: 'diamond-pendants',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    count: 56
  }
];

export const KRISHNA_CATEGORIES_KUNDAN: KrishnaCategoryItem[] = [
  {
    id: 'kun-short-necklace',
    name: 'SHORT NECKLACE',
    slug: 'kundan-short-necklace',
    imageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
    count: 41
  },
  {
    id: 'kun-choker',
    name: 'CHOKER',
    slug: 'kundan-chokers',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    count: 32
  },
  {
    id: 'kun-long-necklace',
    name: 'LONG NECKLACE',
    slug: 'kundan-long-necklace',
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    count: 36
  },
  {
    id: 'kun-vaddanam',
    name: 'VADDANAM',
    slug: 'kundan-vaddanam',
    imageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=800&q=80',
    count: 19
  },
  {
    id: 'kun-earrings',
    name: 'EARRINGS',
    slug: 'kundan-earrings',
    imageUrl: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
    count: 62
  },
  {
    id: 'kun-bangle',
    name: 'BANGLE',
    slug: 'kundan-bangles',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    count: 44
  },
  {
    id: 'kun-necklace-set',
    name: 'NECKLACE SET',
    slug: 'kundan-necklace-set',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    count: 49
  },
  {
    id: 'kun-maang-tikka',
    name: 'MAANG TIKKA',
    slug: 'kundan-mangtika',
    imageUrl: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
    count: 28
  }
];

export const KRISHNA_CATEGORIES_POLKI: KrishnaCategoryItem[] = [
  {
    id: 'polki-short-necklace',
    name: 'SHORT NECKLACE',
    slug: 'polki-short-necklace',
    imageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
    count: 43
  },
  {
    id: 'polki-necklace-set',
    name: 'POLKI NECKLACE SET',
    slug: 'polki-necklace-set',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    count: 51
  },
  {
    id: 'polki-earrings',
    name: 'EARRINGS',
    slug: 'polki-earrings',
    imageUrl: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
    count: 67
  },
  {
    id: 'polki-long-necklace',
    name: 'LONG NECKLACE',
    slug: 'polki-long-necklaces',
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    count: 37
  },
  {
    id: 'polki-choker',
    name: 'CHOKER',
    slug: 'polki-choker',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    count: 25
  },
  {
    id: 'polki-rings',
    name: 'RINGS',
    slug: 'polki-rings',
    imageUrl: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
    count: 39
  },
  {
    id: 'polki-vaddanam',
    name: 'VADDANAM',
    slug: 'polki-vaddanam',
    imageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=800&q=80',
    count: 17
  },
  {
    id: 'polki-bangle',
    name: 'BANGLE',
    slug: 'polki-bangles',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    count: 48
  },
  {
    id: 'polki-pendant',
    name: 'PENDANT',
    slug: 'polki-pendants',
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    count: 30
  }
];

export const KRISHNA_CATEGORIES_SILVER: KrishnaCategoryItem[] = [
  {
    id: 'sil-varalakshmi',
    name: 'VARALAKSHMI FACE',
    slug: 'varalakshmi-face',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    count: 22
  },
  {
    id: 'sil-pooja',
    name: 'POOJA ITEMS',
    slug: 'silver-pooja-items',
    imageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=800&q=80',
    count: 76
  },
  {
    id: 'sil-idols',
    name: 'GOD IDOLS',
    slug: 'silver-god-idols',
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    count: 58
  },
  {
    id: 'sil-luxury',
    name: 'LUXURY ITEMS',
    slug: 'silver-luxury-items',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    count: 33
  },
  {
    id: 'sil-dinner',
    name: 'DINNER SETS',
    slug: 'silver-dinner-sets',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    count: 24
  },
  {
    id: 'sil-coins',
    name: 'COINS',
    slug: 'silver-coins',
    imageUrl: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
    count: 40
  }
];

export const KRISHNA_SHOP_EVENTS = [
  {
    id: 'engagement',
    title: 'Engagement',
    subtitle: 'Solitaire rings & diamond chokers to seal your forever',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    tag: 'Diamond & Solitaire'
  },
  {
    id: 'festival',
    title: 'Festival',
    subtitle: 'Kempu nakshi, kasulaperu & gold coins for auspicious times',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    tag: '22K Festive Gold'
  },
  {
    id: 'wedding',
    title: 'Wedding',
    subtitle: 'Grand guttapusalu haram, polki choker & nakshi vaddanam',
    imageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
    tag: 'Bridal Heritage'
  },
  {
    id: 'half-saree',
    title: 'Half Saree',
    subtitle: 'Youthful temple jewellery sets, lightweight waistbelts & jhumkas',
    imageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=800&q=80',
    tag: 'Langa Voni Sets'
  }
];

export const KRISHNA_PRODUCTS: KrishnaProduct[] = [
  {
    id: 'kj-prod-01',
    sku: 'KJ-VANKI-01',
    name: 'Gold Vanki Armlet with Ruby, Emerald, CZ & Pearl Drops',
    category: 'gold',
    subCategory: 'Vaddanam & Vanki',
    priceOnRequest: true,
    metal: '22K Gold',
    purity: '916 BIS Hallmarked',
    grossWeightGrams: 42.6,
    gemstones: 'Burmese Ruby, Zambian Emerald, South Sea Pearl Drops',
    imageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A masterpiece of traditional Deccan artistry. Crafted in 22K yellow gold with divine peacock and floral engraving, enriched with natural rubies, emerald cabochons, and shimmering rice pearl tassels.',
    badge: 'Heritage Masterpiece',
    isNewArrival: true,
    eventTag: 'wedding'
  },
  {
    id: 'kj-prod-02',
    sku: 'KJ-RNG-02',
    name: 'Antique Gold Nakshi Ring with Emerald, Ruby & Kundan',
    category: 'gold',
    subCategory: 'Rings',
    price: 135208,
    metal: '22K Gold',
    purity: '916 BIS Hallmarked',
    grossWeightGrams: 14.8,
    gemstones: 'Natural Emerald Centre, Untreated Ruby, Uncut Kundan',
    imageUrl: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Timeless elegance in an antique gold nakshi cocktail ring. Hand-carved floral border with a luminous teardrop emerald center stone set in kundan bezel.',
    isNewArrival: true,
    isBestseller: true,
    eventTag: 'festival'
  },
  {
    id: 'kj-prod-03',
    sku: 'KJ-KANTI-03',
    name: 'Antique Gold Lakshmi Kanti Necklace with Ruby, Kundan & Pearls',
    category: 'gold',
    subCategory: 'Short Necklaces',
    priceOnRequest: true,
    metal: '22K Gold',
    purity: '916 BIS Hallmarked',
    grossWeightGrams: 68.4,
    gemstones: 'Goddess Lakshmi Nakshi Motif, Emerald Beads, Pearls',
    imageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A royal Deccan collar kanti featuring Goddess Lakshmi seated on a lotus pedestal, flanked by divine elephants and peacocks with dangling pearl bunches.',
    badge: 'Temple Collection',
    isNewArrival: true,
    eventTag: 'wedding'
  },
  {
    id: 'kj-prod-04',
    sku: 'KJ-JHK-04',
    name: 'Antique Gold Emerald Peacock Ear Cuff Jhumkas with Pearl Drops',
    category: 'gold',
    subCategory: 'Earrings',
    priceOnRequest: true,
    metal: '22K Gold',
    purity: '916 BIS Hallmarked',
    grossWeightGrams: 32.5,
    gemstones: 'Cabochon Emeralds, Natural Rubies, Pearl Hangings',
    imageUrl: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Grand South Indian peacock ear-cuff extension transitioning into double-dome antique jhumkas with fine pearl clusters.',
    isNewArrival: true,
    eventTag: 'half_saree'
  },
  {
    id: 'kj-prod-05',
    sku: 'KJ-RNG-05',
    name: 'Antique Gold Emerald Bead Cocktail Ring with Peacock Motif',
    category: 'gold',
    subCategory: 'Rings',
    price: 126606,
    metal: '22K Gold',
    purity: '916 BIS Hallmarked',
    grossWeightGrams: 13.9,
    gemstones: 'Zambian Emerald Bead, Kemp Stones',
    imageUrl: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Stunning cocktail ring featuring sculpted peacock feathers embracing a radiant tumble emerald bead.',
    isNewArrival: true
  },
  {
    id: 'kj-prod-06',
    sku: 'KJ-KADA-06',
    name: 'Antique Gold Paisley Nakshi Kada Bangles Pair',
    category: 'gold',
    subCategory: 'Bangles',
    priceOnRequest: true,
    metal: '22K Gold',
    purity: '916 BIS Hallmarked',
    grossWeightGrams: 84.2,
    gemstones: 'Fine Nakshi Workmanship with Screw Clasp',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Pair of heavy temple kada bangles sculpted with continuous mango paisley motifs and floral crests.',
    isNewArrival: true,
    eventTag: 'wedding'
  },
  {
    id: 'kj-prod-07',
    sku: 'KJ-KASU-07',
    name: 'Antique Gold Kasulaperu Necklace with Ruby Floral Pendant',
    category: 'gold',
    subCategory: 'Long Necklace',
    priceOnRequest: true,
    metal: '22K Gold',
    purity: '916 BIS Hallmarked',
    grossWeightGrams: 96.0,
    gemstones: 'Goddess Lakshmi Coins, Kemp Rubies, Pearl Drops',
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'The definitive bridal heirloom of Andhra & Telangana. Double-layered Kasulaperu coin chain anchored with an opulent flower pendant.',
    badge: 'Deccan Classic',
    isNewArrival: true,
    eventTag: 'wedding'
  },
  {
    id: 'kj-prod-08',
    sku: 'KJ-DIA-08',
    name: 'Diamond Emerald Ring | Emerald-Cut Halo Ring in Yellow Gold',
    category: 'diamond',
    subCategory: 'Rings',
    price: 114561,
    metal: '18K Gold',
    purity: '18K BIS Hallmarked',
    grossWeightGrams: 5.4,
    gemstones: '1.20 Ct Lab/Mined Diamond Halo, 1.50 Ct Emerald Cut Center',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Sophisticated halo statement ring with radiant brilliant-cut diamonds framing a vibrant emerald cut gem.',
    isNewArrival: true,
    eventTag: 'engagement'
  },
  {
    id: 'kj-prod-09',
    sku: 'KJ-DIA-09',
    name: 'Diamond Emerald Cocktail Ring | Floral Halo Statement Ring in Gold',
    category: 'diamond',
    subCategory: 'Rings',
    price: 240724,
    metal: '18K Gold',
    purity: '18K BIS Hallmarked',
    grossWeightGrams: 8.9,
    gemstones: 'VVS-EF Diamonds 1.85 Ctw, Fine Colombian Emerald',
    imageUrl: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Floral petal halo statement ring crafted with precision round and marquise diamonds surrounding a central emerald.',
    isNewArrival: true
  },
  {
    id: 'kj-prod-10',
    sku: 'KJ-DIA-10',
    name: 'Diamond Emerald Bridal Choker Necklace | Grand Guttapusalu-Style Choker',
    category: 'diamond',
    subCategory: 'Chokers',
    priceOnRequest: true,
    metal: '18K Gold',
    purity: '18K BIS Hallmarked',
    grossWeightGrams: 92.4,
    gemstones: '8.40 Ctw Diamonds, Emerald Drops, South Sea Pearls',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Breathtaking bridal guttapusalu style choker with tiers of certified diamonds, carved emerald beads, and cascading natural seed pearls.',
    badge: 'Signature Bridal',
    isNewArrival: true,
    eventTag: 'wedding'
  },
  {
    id: 'kj-prod-11',
    sku: 'KJ-SIL-11',
    name: 'Pure Silver 92.5 Varalakshmi Face with Intricate Crown & Jewels',
    category: 'silver',
    subCategory: 'Varalakshmi Face',
    price: 18500,
    metal: '92.5 Silver',
    purity: '92.5 Sterling Silver',
    grossWeightGrams: 165.0,
    gemstones: 'Semi-precious Ruby and Emerald Eye accents',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Sacred Varalakshmi Vratham Devi face handcrafted in pure 92.5 silver with embossed Kireetam (crown), nose ring, and mangalsutra detailing.',
    isNewArrival: true,
    eventTag: 'festival'
  },
  {
    id: 'kj-prod-12',
    sku: 'KJ-COIN-12',
    name: '10 Grams Gold Coin 24K (999 Purity) with Lakshmi Motif',
    category: 'coins',
    subCategory: 'Coins',
    price: 166493,
    metal: '24K Gold',
    purity: '999 Pure 24 Karat',
    grossWeightGrams: 10.0,
    imageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'BIS Hallmarked tamper-proof blister pack 10 grams 24 Karat gold coin embossed with Goddess Lakshmi seated on a lotus.',
    badge: '999 Purity Certified',
    isNewArrival: true,
    isBestseller: true
  },
  {
    id: 'kj-prod-13',
    sku: 'KJ-POLKI-13',
    name: '14K Gold Polki Navratna Stones Chandelier Earrings',
    category: 'polki',
    subCategory: 'Earrings',
    price: 203345,
    metal: '14K Gold',
    purity: '14K BIS Hallmarked',
    grossWeightGrams: 24.5,
    gemstones: 'Uncut Syndicate Polki, Nine Auspicious Planetary Gems',
    imageUrl: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Royal polki chandelier earrings showcasing uncut diamond slices surrounded by authentic Navratna stones and Basra pearl drops.',
    isNewArrival: true
  },
  {
    id: 'kj-prod-14',
    sku: 'KJ-POLKI-14',
    name: '14K Gold Polki Emerald Hanging Earrings',
    category: 'polki',
    subCategory: 'Earrings',
    price: 437688,
    metal: '14K Gold',
    purity: '14K BIS Hallmarked',
    grossWeightGrams: 38.2,
    gemstones: 'Open Polki Setting, Zambian Emerald Drops',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Opulent Mughal-inspired polki ear drops featuring fine open-back setting and carved emerald melon beads.',
    isNewArrival: true,
    eventTag: 'wedding'
  },
  {
    id: 'kj-prod-15',
    sku: 'KJ-PEN-15',
    name: '18 Karat Gold Chain with Capricorn Diamond Pendant',
    category: 'diamond',
    subCategory: 'Chains',
    price: 97208,
    metal: '18K Gold',
    purity: '18K BIS Hallmarked',
    grossWeightGrams: 8.2,
    gemstones: '0.45 Ctw Brilliant Cut Diamonds',
    imageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Modern zodiac luxury in 18K yellow gold with celestial diamond star setting and accompanying gold chain.',
    isNewArrival: true
  },
  {
    id: 'kj-prod-16',
    sku: 'KJ-PEN-16',
    name: '18 Karat Gold Butterfly Diamond Pendant',
    category: 'diamond',
    subCategory: 'Pendants',
    price: 75294,
    metal: '18K Gold',
    purity: '18K BIS Hallmarked',
    grossWeightGrams: 6.5,
    gemstones: '0.38 Ctw Round Diamonds',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Delicate openwork fluttering butterfly pendant studded with pavé-set round diamonds.',
    isNewArrival: true
  }
];

export const KRISHNA_JOURNAL_ARTICLES: KrishnaBlogArticle[] = [
  {
    id: 'kj-art-01',
    title: "How to Choose a Muhurtham Set: A South Indian Bride's Guide to Reading a Bridal Collection",
    slug: 'how-to-choose-muhurtham-set-bridal-jewellery',
    author: 'Vaishali Bhramaramba, Jewellery Designer at Krishna Jewellers',
    date: 'October 2026',
    readTime: '6 min read',
    category: 'Bridal Guide',
    excerpt: 'To choose an authentic Muhurtham set, learn how to balance the weight of the haaram with the choker, understand the significance of nakshi temple carvings, and layer regional heirloom motifs.',
    content: `A South Indian wedding is a sacred journey celebrated through rituals, auspicious moments, and heirloom jewellery that lasts generations. 

The Muhurtham set forms the soul of a Telugu and South Indian bride's ensemble. It traditionally comprises four essential tiers:
1. The Choker or Kanti: Sitting snugly at the hollow of the neck, framing the face.
2. The Short Kasulaperu or Guttapusalu: Adding texture with coin or pearl bunch detailing.
3. The Long Haaram or Mango Mala: Extending to the navel, symbolizing divine protection and prosperity.
4. The Vaddanam (Waistbelt): Sculpted with Goddess Lakshmi or Gajalakshmi to cinch the Kanjeevaram silk saree.

When visiting our Jubilee Hills bridal lounge or joining our Video Call Shopping, our master craftsmen advise brides to start with their saree's zari tone—choosing between antique matte gold, rich yellow gold, or uncut polki diamonds.`,
    imageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kj-art-02',
    title: 'Gold Necklace Designs: Short, Long, Choker & Haram Explained',
    slug: 'gold-necklace-designs-short-long-choker-haram-explained',
    author: 'Vaishali Bhramaramba, Jewellery Designer at Krishna Jewellers',
    date: 'September 2026',
    readTime: '5 min read',
    category: 'Design Heritage',
    excerpt: 'The four main gold necklace designs differ by length, weight and ceremony. A choker rests above the collarbone, a short necklace at the collar, while a haram falls to the chest.',
    content: `Understanding necklace proportions is key to curating a balanced bridal or festive look. 

- The Choker (12 - 14 inches): Designed to sit closely around the neck, highlighting regal bone structure.
- The Princess / Short Necklace (16 - 18 inches): The most versatile piece, sitting right on the collarbone.
- The Matinee / Medium Haaram (20 - 24 inches): Often adorned with pendant medallions and floral kemp stones.
- The Royal Haaram (28 - 36 inches): A grand statement piece carrying 60 to 120 grams of 22K gold, often passed down as family treasures.

Every piece at Krishna Jewellers is crafted in BIS Hallmarked 22 Karat gold with verifiable HUID identification.`,
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kj-art-03',
    title: 'Jewellery Craftsmanship: The Secret Behind Making an Heirloom from the Deccan',
    slug: 'jewellery-craftsmanship-the-secret-behind-making-an-heirloom-from-the-deccan',
    author: 'Krishna Jewellers Master Craftsmen',
    date: 'August 2026',
    readTime: '7 min read',
    category: 'Craftsmanship',
    excerpt: 'A temple necklace is not cast in a cold mould. It is raised by hand out of sheet gold, hammered from the reverse using ancient repoussé techniques refined over four decades.',
    content: `The Deccan plateau has nurtured some of the world's most intricate goldsmithing traditions for centuries. At Krishna Jewellers, our artisans in Hyderabad continue this sacred craft without shortcuts.

Nakshi Work: The goldsmith fills hollow gold forms with natural tree lac (gondh) and uses miniature chisels to engrave microscopic features on deities, peacocks, and floral creepers. Once completed, the lac is melted away, leaving lightweight yet dimensional sculptures.

Polki Jadau Setting: Pure 24K gold foil (daak) is tucked underneath uncut diamonds to create an inner luminous glow, sealed with pure gold kundan ribbons.`,
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kj-art-04',
    title: '24K vs 22K vs 18K vs 14K Gold: The Complete Purity Guide',
    slug: '24k-vs-22k-vs-18k-vs-14k-gold-the-complete-purity-guide',
    author: 'Krishna Jewellers Advisory',
    date: 'July 2026',
    readTime: '4 min read',
    category: 'Buyer Guide',
    excerpt: 'Understand what 24K, 22K, 18K and 14K gold actually mean — how each karat differs in purity, tensile strength and suitability for stone setting.',
    content: `Karatage refers to the fraction of pure gold per 24 parts:

- 24 Karat (99.9% pure): Too malleable for intricate jewellery, ideal for investment gold coins and pure gold bars.
- 22 Karat (91.6% pure): The Indian gold standard for bridal and temple jewellery.
- 18 Karat (75.0% pure): Stronger alloy with copper and silver, optimal for setting prong-held diamonds and everyday rings.
- 14 Karat (58.5% pure): Ideal for delicate millennial and polki jewellery requiring robust structural durability.`,
    imageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=800&q=80'
  }
];

export const KRISHNA_SHOWROOM_STORES = [
  {
    id: 'jubilee-hills',
    name: 'Jubilee Hills Flagship Showroom',
    address: 'Ground Floor, 8-2-293/82/A/1222, Road No 36, Jubilee Hills',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500033',
    phone: '+91 84990 11111 / 93965 41651',
    timings: 'Mon - Sun: 10:30 AM – 8:30 PM',
    isFlagship: true
  },
  {
    id: 'kokapet',
    name: 'Kokapet Experience Center',
    address: 'Near Golden Mile Road, Financial District Gateway, Kokapet',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500075',
    phone: '+91 84990 11111',
    timings: 'Mon - Sun: 11:00 AM – 8:00 PM',
    isFlagship: false
  },
  {
    id: 'visakhapatnam',
    name: 'Visakhapatnam Exhibition Lounge',
    address: 'VIP Road, CBM Compound, Waltair Uplands',
    city: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    pincode: '530003',
    phone: '+91 84990 11111',
    timings: 'Mon - Sun: 10:30 AM – 8:00 PM',
    isFlagship: false
  },
  {
    id: 'bangalore',
    name: 'Bangalore Private Client Suite',
    address: 'Lavelle Road, Near UB City',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560001',
    phone: '+91 84990 11111',
    timings: 'By Appointment Only',
    isFlagship: false
  }
];

export const KRISHNA_JEWELLERS_WEBSITE: BusinessWebsite = {
  id: 'krishna-jewellers',
  slug: 'krishna-jewellers',
  businessName: 'Krishna Jewellers',
  category: 'jewellery' as any,
  templateId: 'krishna-jewellers',
  tagline: 'Hyderabad’s Renowned Heritage Jewellers Since 1983 · Gold, Diamond, Kundan & Polki',
  description: 'Handcrafted gold, diamond, kundan and polki jewellery from Krishna Jewellers, Hyderabad. BIS hallmarked, family-run since 1983. Renowned across Telangana, Andhra Pradesh and worldwide for authentic temple nakshi, guttapusalu harams, bridal vaddanams, and private video call shopping.',
  ownerName: 'Krishna Jewellers Pearls and Gems Pvt Ltd',
  phone: '+91 84990 11111',
  whatsapp: '+91 84990 11111',
  email: 'customercare@krishnajewellers.com',
  address: 'Ground Floor, 8-2-293/82/A/1222, Road No 36, Jubilee Hills, Hyderabad, Telangana 500033',
  city: 'Hyderabad',
  mapsUrl: 'https://maps.google.com/?q=Krishna+Jewellers+Pearls+and+Gems+Jubilee+Hills+Hyderabad',
  openingHours: 'Mon - Sun: 10:30 AM – 8:30 PM IST',
  coverUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#543E3A', // Rich Deep Bronze Burgundy
  secondaryColor: '#C99A5C', // Royal Gold Accent
  fontFamily: 'Cinzel, serif',
  bookingType: 'appointment_slot' as any,
  bookingCtaLabel: 'View Demo',
  specialBadge: 'Established 1983 · BIS Hallmarked Heritage',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 49999,
  paymentStatus: 'paid',
  sections: [
    { id: 'gold', title: 'Gold Jewellery', isEnabled: true, order: 1 },
    { id: 'diamond', title: 'Diamond Jewellery', isEnabled: true, order: 2 },
    { id: 'kundan', title: 'Kundan Jewellery', isEnabled: true, order: 3 },
    { id: 'polki', title: 'Polki Jewellery', isEnabled: true, order: 4 },
    { id: 'silver', title: 'Silver Articles', isEnabled: true, order: 5 },
    { id: 'bridal', title: 'Bridal Jewellery', isEnabled: true, order: 6 },
    { id: 'events', title: 'Shop by Events', isEnabled: true, order: 7 },
    { id: 'videocall', title: 'Video Call Shopping', isEnabled: true, order: 8 },
    { id: 'house', title: 'The House of Krishna', isEnabled: true, order: 9 },
    { id: 'newarrivals', title: 'New Arrivals', isEnabled: true, order: 10 },
    { id: 'journal', title: 'The Krishna Journal', isEnabled: true, order: 11 }
  ],
  offers: [
    {
      id: 'kj-offer-shubha',
      title: 'Shubhalagnam Bridal Jewellery Privilege',
      description: 'Zero making charges on select 22K antique gold temple sets for registered brides.',
      discountPercent: 10,
      couponCode: 'SHUBHA2026',
      isActive: true
    },
    {
      id: 'kj-offer-silver',
      title: 'Complimentary Silver Coin on Diamond Orders',
      description: 'Receive a certified 999 purity Silver Coin on every diamond jewellery purchase above ₹50,000.',
      discountPercent: 5,
      couponCode: 'SILVERGIFT',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'kj-gal-1',
      title: '22K Antique Nakshi Temple Haram and Guttapusalu Choker',
      category: 'gold',
      imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'kj-gal-2',
      title: 'Deccan Polki Jadau Waistbelt (Vaddanam) with Goddess Lakshmi',
      category: 'polki',
      imageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'kj-gal-3',
      title: 'Certified Diamond Emerald Cocktail Rings & Jhumkas',
      category: 'diamond',
      imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'kj-gal-4',
      title: 'Pure Silver 92.5 Embossed God Idols & Pooja Articles',
      category: 'silver',
      imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'
    }
  ],
  items: [
    {
      id: 'item-kj-nakshi-ring',
      name: 'Antique Gold Nakshi Ring with Emerald, Ruby & Kundan',
      category: 'Rings',
      price: 135208,
      description: 'Handcrafted in 22K solid gold with divine flower and peacock engraving.',
      isAvailable: true,
      badge: 'Bestseller'
    },
    {
      id: 'item-kj-dia-ring',
      name: 'Emerald-Cut Halo Engagement Ring in 18K Gold',
      category: 'Rings',
      price: 114561,
      description: '1.50 Ct emerald cut center stone with brilliant diamond halo.',
      isAvailable: true,
      badge: 'Solitaire'
    },
    {
      id: 'item-kj-gold-coin',
      name: '10 Grams Gold Coin 24K (999 Purity)',
      category: 'Coins',
      price: 166493,
      description: 'Certified 999 purity gold coin with Goddess Lakshmi emblem in security blister.',
      isAvailable: true,
      badge: '24K 999 Purity'
    },
    {
      id: 'item-kj-polki-earrings',
      name: '14K Gold Polki Navratna Chandelier Earrings',
      category: 'Earrings',
      price: 203345,
      description: 'Uncut polki diamonds set with nine auspicious planetary gems.',
      isAvailable: true,
      badge: 'Royal Heirloom'
    },
    {
      id: 'item-kj-silver-face',
      name: 'Pure Silver 92.5 Varalakshmi Face',
      category: 'Silver',
      price: 18500,
      description: 'Traditional embossed Devi face for sacred poojas and festive vrathams.',
      isAvailable: true,
      badge: 'Pooja Sacred'
    }
  ]
};
