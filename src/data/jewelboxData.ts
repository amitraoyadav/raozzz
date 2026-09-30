import { BusinessWebsite } from '../types';

export interface JewelboxProduct {
  id: string;
  sku: string;
  name: string;
  category: 'rings' | 'bracelets' | 'earrings' | 'pendants' | 'solitaires' | 'mangalsutra' | 'mens' | 'necklaces' | 'nosepins';
  categoryLabel: string;
  price: number;
  originalPrice: number;
  minedPriceEquivalent: number;
  diamondCarat: number;
  diamondShape: 'Round' | 'Oval' | 'Emerald' | 'Princess' | 'Pear' | 'Cushion' | 'Marquise';
  diamondClarity: 'VVS-VS' | 'VVS1' | 'VS1' | 'VVS2';
  diamondColor: 'E-F' | 'D-E' | 'F-G';
  diamondCut: 'Ideal' | 'Excellent';
  metalPurity: '14K' | '18K';
  availableMetals: ('yellow_gold' | 'rose_gold' | 'white_gold')[];
  defaultMetal: 'yellow_gold' | 'rose_gold' | 'white_gold';
  grossWeightGrams: number;
  gender: 'women' | 'men' | 'unisex';
  occasion: 'everyday' | 'engagement' | 'wedding' | 'anniversary' | 'gifting' | 'workwear';
  collection: 'Engagement' | 'Solitaire Luxe' | 'Shark Tank Signature' | 'Gifts Under 25K' | 'Workwear Minimal' | 'Festive Glam' | 'Men of Jewelbox';
  badge?: string;
  isReadyToShip: boolean;
  isBestseller?: boolean;
  isNewArrival?: boolean;
  isUnder25K?: boolean;
  imageUrl: string;
  hoverImageUrl: string;
  galleryImages: string[];
  description: string;
  dimensions?: string;
  sizes?: number[];
  rating: number;
  reviewsCount: number;
}

export interface JewelboxCollection {
  id: string;
  name: string;
  tagline: string;
  description: string;
  imageUrl: string;
  itemCount: number;
  filterCategory?: string;
  filterCollection?: string;
}

export interface JewelboxStore {
  id: string;
  city: string;
  name: string;
  address: string;
  pincode: string;
  phone: string;
  timings: string;
  mapQuery: string;
}

export interface JewelboxReview {
  id: string;
  author: string;
  city: string;
  rating: number;
  productName: string;
  date: string;
  comment: string;
  verified: boolean;
}

export const JEWELBOX_PRODUCTS: JewelboxProduct[] = [
  // 1. RINGS - Solitaires & Bands
  {
    id: 'jb-rng-01',
    sku: 'JB-RNG-SOL-101',
    name: 'Eternal Radiance 1.00 Carat Solitaire Ring',
    category: 'rings',
    categoryLabel: 'Rings',
    price: 48900,
    originalPrice: 62000,
    minedPriceEquivalent: 175000,
    diamondCarat: 1.0,
    diamondShape: 'Round',
    diamondClarity: 'VVS-VS',
    diamondColor: 'E-F',
    diamondCut: 'Ideal',
    metalPurity: '18K',
    availableMetals: ['yellow_gold', 'rose_gold', 'white_gold'],
    defaultMetal: 'rose_gold',
    grossWeightGrams: 3.2,
    gender: 'women',
    occasion: 'engagement',
    collection: 'Engagement',
    badge: 'Shark Tank Deal',
    isReadyToShip: true,
    isBestseller: true,
    isUnder25K: false,
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A breathtaking 1.00 Ct round brilliant lab-grown diamond set in an elegant 4-prong basket with a tapered knife-edge comfort-fit shank in 18K BIS Hallmarked gold. Certified by IGI.',
    dimensions: 'Center Diamond: 6.5 mm | Band Width: 1.9 mm',
    sizes: [9, 10, 11, 12, 13, 14, 15, 16, 17],
    rating: 4.9,
    reviewsCount: 124
  },
  {
    id: 'jb-rng-02',
    sku: 'JB-RNG-OVL-102',
    name: 'Serenade Oval Solitaire Hidden Halo Ring',
    category: 'rings',
    categoryLabel: 'Rings',
    price: 54500,
    originalPrice: 68000,
    minedPriceEquivalent: 195000,
    diamondCarat: 1.25,
    diamondShape: 'Oval',
    diamondClarity: 'VVS-VS',
    diamondColor: 'E-F',
    diamondCut: 'Excellent',
    metalPurity: '18K',
    availableMetals: ['yellow_gold', 'rose_gold', 'white_gold'],
    defaultMetal: 'yellow_gold',
    grossWeightGrams: 3.45,
    gender: 'women',
    occasion: 'engagement',
    collection: 'Solitaire Luxe',
    badge: 'Trending Design',
    isReadyToShip: true,
    isBestseller: true,
    isUnder25K: false,
    imageUrl: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'An elongated 1.25 Ct oval lab-grown diamond embraced by an exquisite hidden halo of micro-pave diamonds underneath the gallery.',
    dimensions: 'Center Diamond: 8.5 x 6.0 mm | Band: 1.8 mm',
    sizes: [10, 11, 12, 13, 14, 15, 16],
    rating: 5.0,
    reviewsCount: 88
  },
  {
    id: 'jb-rng-03',
    sku: 'JB-RNG-ETN-103',
    name: 'Infinity Spark Full Eternity Diamond Band',
    category: 'rings',
    categoryLabel: 'Rings',
    price: 36800,
    originalPrice: 45000,
    minedPriceEquivalent: 110000,
    diamondCarat: 0.85,
    diamondShape: 'Round',
    diamondClarity: 'VVS-VS',
    diamondColor: 'E-F',
    diamondCut: 'Ideal',
    metalPurity: '14K',
    availableMetals: ['yellow_gold', 'rose_gold', 'white_gold'],
    defaultMetal: 'white_gold',
    grossWeightGrams: 2.9,
    gender: 'women',
    occasion: 'anniversary',
    collection: 'Workwear Minimal',
    badge: 'Lifetime Sparkle',
    isReadyToShip: false,
    isBestseller: false,
    isNewArrival: true,
    isUnder25K: false,
    imageUrl: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Continuous unbroken circle of shimmering round brilliant lab diamonds shared-prong set in solid 14K hallmarked gold.',
    dimensions: 'Band Width: 2.2 mm | 24 Lab Diamonds',
    sizes: [10, 12, 14, 16],
    rating: 4.8,
    reviewsCount: 63
  },
  {
    id: 'jb-rng-04',
    sku: 'JB-RNG-DLY-104',
    name: 'Aura Twisted Pave Delicate Diamond Ring',
    category: 'rings',
    categoryLabel: 'Rings',
    price: 19800,
    originalPrice: 24500,
    minedPriceEquivalent: 68000,
    diamondCarat: 0.30,
    diamondShape: 'Round',
    diamondClarity: 'VVS-VS',
    diamondColor: 'E-F',
    diamondCut: 'Excellent',
    metalPurity: '14K',
    availableMetals: ['yellow_gold', 'rose_gold', 'white_gold'],
    defaultMetal: 'rose_gold',
    grossWeightGrams: 1.95,
    gender: 'women',
    occasion: 'workwear',
    collection: 'Gifts Under 25K',
    badge: 'Under ₹20K',
    isReadyToShip: true,
    isBestseller: true,
    isUnder25K: true,
    imageUrl: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'An intertwining dual-ribbon bypass band where one strand gleams in high-polish gold and the other is encrusted with lab-grown diamond pave.',
    dimensions: 'Width: 3.5 mm at center | Band: 1.5 mm',
    sizes: [9, 10, 11, 12, 13, 14, 15],
    rating: 4.9,
    reviewsCount: 91
  },

  // 2. BRACELETS
  {
    id: 'jb-brc-01',
    sku: 'JB-BRC-TNS-201',
    name: 'Royale 3.00 Carat Classic Diamond Tennis Bracelet',
    category: 'bracelets',
    categoryLabel: 'Bracelets',
    price: 89000,
    originalPrice: 115000,
    minedPriceEquivalent: 320000,
    diamondCarat: 3.0,
    diamondShape: 'Round',
    diamondClarity: 'VVS-VS',
    diamondColor: 'E-F',
    diamondCut: 'Ideal',
    metalPurity: '14K',
    availableMetals: ['yellow_gold', 'rose_gold', 'white_gold'],
    defaultMetal: 'white_gold',
    grossWeightGrams: 8.8,
    gender: 'women',
    occasion: 'wedding',
    collection: 'Solitaire Luxe',
    badge: 'Conscious Luxury Icon',
    isReadyToShip: true,
    isBestseller: true,
    isUnder25K: false,
    imageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=800&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'The definitive luxury essential. 55 precision-matched round brilliant lab-grown diamonds set in a secure double-latch 4-prong link tennis bracelet.',
    dimensions: 'Length: 7.0 inches (17.8 cm) | 55 Lab Diamonds',
    rating: 5.0,
    reviewsCount: 76
  },
  {
    id: 'jb-brc-02',
    sku: 'JB-BRC-BLO-202',
    name: 'Celeste Adjustable Slider Diamond Bolo Bracelet',
    category: 'bracelets',
    categoryLabel: 'Bracelets',
    price: 24500,
    originalPrice: 29900,
    minedPriceEquivalent: 78000,
    diamondCarat: 0.45,
    diamondShape: 'Round',
    diamondClarity: 'VVS-VS',
    diamondColor: 'E-F',
    diamondCut: 'Excellent',
    metalPurity: '14K',
    availableMetals: ['yellow_gold', 'rose_gold', 'white_gold'],
    defaultMetal: 'rose_gold',
    grossWeightGrams: 3.1,
    gender: 'women',
    occasion: 'everyday',
    collection: 'Gifts Under 25K',
    badge: 'One Size Fits All',
    isReadyToShip: true,
    isBestseller: true,
    isUnder25K: true,
    imageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Bar station featuring 9 graduated brilliant lab diamonds connected to a Venetian box chain with an adjustable silicone-grip gold slider ball.',
    dimensions: 'Adjustable up to 9.0 inches | Bar length: 32 mm',
    rating: 4.9,
    reviewsCount: 110
  },

  // 3. EARRINGS
  {
    id: 'jb-err-01',
    sku: 'JB-ERR-SOL-301',
    name: 'Sparkle Starlight 1.00 ctw Solitaire Stud Earrings',
    category: 'earrings',
    categoryLabel: 'Earrings',
    price: 34900,
    originalPrice: 42000,
    minedPriceEquivalent: 120000,
    diamondCarat: 1.0,
    diamondShape: 'Round',
    diamondClarity: 'VVS-VS',
    diamondColor: 'E-F',
    diamondCut: 'Ideal',
    metalPurity: '18K',
    availableMetals: ['yellow_gold', 'rose_gold', 'white_gold'],
    defaultMetal: 'yellow_gold',
    grossWeightGrams: 2.1,
    gender: 'women',
    occasion: 'everyday',
    collection: 'Solitaire Luxe',
    badge: 'All-Time #1 Bestseller',
    isReadyToShip: true,
    isBestseller: true,
    isUnder25K: false,
    imageUrl: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'
    ],
    description: '0.50 Ct per ear (1.00 ctw total) certified lab diamond studs in classic 4-prong martini basket settings with threaded screw-backs for utmost security.',
    dimensions: 'Diamond diameter: 5.1 mm each | 1.00 total carats',
    rating: 4.95,
    reviewsCount: 230
  },
  {
    id: 'jb-err-02',
    sku: 'JB-ERR-HUG-302',
    name: 'Lumina Petite Diamond Huggie Hoops',
    category: 'earrings',
    categoryLabel: 'Earrings',
    price: 18500,
    originalPrice: 22000,
    minedPriceEquivalent: 55000,
    diamondCarat: 0.28,
    diamondShape: 'Round',
    diamondClarity: 'VVS-VS',
    diamondColor: 'E-F',
    diamondCut: 'Excellent',
    metalPurity: '14K',
    availableMetals: ['yellow_gold', 'rose_gold', 'white_gold'],
    defaultMetal: 'rose_gold',
    grossWeightGrams: 2.3,
    gender: 'women',
    occasion: 'workwear',
    collection: 'Workwear Minimal',
    badge: 'Under ₹20K',
    isReadyToShip: true,
    isBestseller: true,
    isUnder25K: true,
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Perfect for 24/7 wear and stack styling. Snug click-latch huggie hoops adorned with a row of 14 scintillating lab diamonds.',
    dimensions: 'Outer Diameter: 12.5 mm | Inner Diameter: 9.5 mm',
    rating: 4.88,
    reviewsCount: 145
  },
  {
    id: 'jb-err-03',
    sku: 'JB-ERR-EMR-303',
    name: 'Empress Emerald Cut Diamond Drop Earrings',
    category: 'earrings',
    categoryLabel: 'Earrings',
    price: 49500,
    originalPrice: 62000,
    minedPriceEquivalent: 165000,
    diamondCarat: 1.4,
    diamondShape: 'Emerald',
    diamondClarity: 'VVS-VS',
    diamondColor: 'E-F',
    diamondCut: 'Excellent',
    metalPurity: '18K',
    availableMetals: ['yellow_gold', 'rose_gold', 'white_gold'],
    defaultMetal: 'white_gold',
    grossWeightGrams: 3.8,
    gender: 'women',
    occasion: 'anniversary',
    collection: 'Festive Glam',
    badge: 'Art Deco Glamour',
    isReadyToShip: false,
    isBestseller: false,
    isNewArrival: true,
    isUnder25K: false,
    imageUrl: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=800&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Captivating step-cut emerald lab-grown diamonds suspended from delicate pave studs, imparting vintage red-carpet sophistication.',
    dimensions: 'Drop Length: 28 mm | Emerald Size: 6 x 4 mm each',
    rating: 4.9,
    reviewsCount: 39
  },

  // 4. PENDANTS
  {
    id: 'jb-pnd-01',
    sku: 'JB-PND-SOL-401',
    name: 'Solitaire Floating Diamond Pendant with Chain',
    category: 'pendants',
    categoryLabel: 'Pendants',
    price: 28900,
    originalPrice: 35000,
    minedPriceEquivalent: 92000,
    diamondCarat: 0.75,
    diamondShape: 'Round',
    diamondClarity: 'VVS-VS',
    diamondColor: 'E-F',
    diamondCut: 'Ideal',
    metalPurity: '14K',
    availableMetals: ['yellow_gold', 'rose_gold', 'white_gold'],
    defaultMetal: 'yellow_gold',
    grossWeightGrams: 2.6,
    gender: 'women',
    occasion: 'everyday',
    collection: 'Solitaire Luxe',
    badge: 'Includes 18" Gold Chain',
    isReadyToShip: true,
    isBestseller: true,
    isUnder25K: false,
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A 0.75 Ct brilliant round lab diamond suspended gracefully from a concealed bail on a complimentary 18-inch 14K hallmarked gold cable chain.',
    dimensions: 'Pendant: 7.2 mm | Chain: 18 inches with 16" loop',
    rating: 4.92,
    reviewsCount: 168
  },
  {
    id: 'jb-pnd-02',
    sku: 'JB-PND-HRT-402',
    name: 'Amore Pave Diamond Heart Pendant',
    category: 'pendants',
    categoryLabel: 'Pendants',
    price: 19500,
    originalPrice: 24000,
    minedPriceEquivalent: 65000,
    diamondCarat: 0.35,
    diamondShape: 'Round',
    diamondClarity: 'VVS-VS',
    diamondColor: 'E-F',
    diamondCut: 'Excellent',
    metalPurity: '14K',
    availableMetals: ['yellow_gold', 'rose_gold', 'white_gold'],
    defaultMetal: 'rose_gold',
    grossWeightGrams: 2.2,
    gender: 'women',
    occasion: 'gifting',
    collection: 'Gifts Under 25K',
    badge: 'Best Romantic Gift',
    isReadyToShip: true,
    isBestseller: true,
    isUnder25K: true,
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'An open heart motif lined with 18 lab-grown round diamonds in luminous 14K rose gold. Includes 16-18" adjustable cable chain.',
    dimensions: 'Height: 14 mm | Width: 13 mm',
    rating: 4.85,
    reviewsCount: 112
  },

  // 5. SOLITAIRES
  {
    id: 'jb-sol-01',
    sku: 'JB-SOL-200-501',
    name: 'The Crown 2.00 Carat Certified Lab Solitaire Ring',
    category: 'solitaires',
    categoryLabel: 'Solitaires',
    price: 98000,
    originalPrice: 125000,
    minedPriceEquivalent: 450000,
    diamondCarat: 2.0,
    diamondShape: 'Round',
    diamondClarity: 'VVS1',
    diamondColor: 'E-F',
    diamondCut: 'Ideal',
    metalPurity: '18K',
    availableMetals: ['yellow_gold', 'rose_gold', 'white_gold'],
    defaultMetal: 'white_gold',
    grossWeightGrams: 4.1,
    gender: 'women',
    occasion: 'engagement',
    collection: 'Solitaire Luxe',
    badge: '2.00 Carat Showstopper · Save ₹3.5 Lakh',
    isReadyToShip: true,
    isBestseller: true,
    isUnder25K: false,
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Grandeur in conscious luxury. A massive 2.00 Carat VVS clarity IGI certified round brilliant lab diamond mounted in a platinum-tipped 6-prong head on an 18K solid gold band.',
    dimensions: 'Diamond: 8.1 mm | Shank: 2.3 mm',
    sizes: [10, 11, 12, 13, 14, 15, 16, 17, 18],
    rating: 5.0,
    reviewsCount: 47
  },
  {
    id: 'jb-sol-02',
    sku: 'JB-SOL-PRN-502',
    name: 'Regal Princess Cut 1.50 Carat Solitaire Ring',
    category: 'solitaires',
    categoryLabel: 'Solitaires',
    price: 68500,
    originalPrice: 84000,
    minedPriceEquivalent: 260000,
    diamondCarat: 1.5,
    diamondShape: 'Princess',
    diamondClarity: 'VVS-VS',
    diamondColor: 'E-F',
    diamondCut: 'Ideal',
    metalPurity: '18K',
    availableMetals: ['yellow_gold', 'rose_gold', 'white_gold'],
    defaultMetal: 'yellow_gold',
    grossWeightGrams: 3.6,
    gender: 'women',
    occasion: 'engagement',
    collection: 'Solitaire Luxe',
    badge: 'Sharp Chevron Prongs',
    isReadyToShip: true,
    isBestseller: false,
    isUnder25K: false,
    imageUrl: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Square modified brilliant 1.50 Ct princess cut lab diamond secured with protective V-tip corner prongs in 18K hallmarked yellow gold.',
    dimensions: 'Size: 6.5 x 6.5 mm | Band: 2.0 mm',
    sizes: [11, 12, 13, 14, 15, 16],
    rating: 4.9,
    reviewsCount: 38
  },

  // 6. MANGALSUTRA
  {
    id: 'jb-mng-01',
    sku: 'JB-MNG-SOL-601',
    name: 'Sutra Modern Minimalist Solitaire Mangalsutra',
    category: 'mangalsutra',
    categoryLabel: 'Mangalsutra',
    price: 32000,
    originalPrice: 39000,
    minedPriceEquivalent: 98000,
    diamondCarat: 0.50,
    diamondShape: 'Round',
    diamondClarity: 'VVS-VS',
    diamondColor: 'E-F',
    diamondCut: 'Ideal',
    metalPurity: '18K',
    availableMetals: ['yellow_gold', 'rose_gold'],
    defaultMetal: 'yellow_gold',
    grossWeightGrams: 3.2,
    gender: 'women',
    occasion: 'everyday',
    collection: 'Shark Tank Signature',
    badge: 'Shark Tank Favorite',
    isReadyToShip: true,
    isBestseller: true,
    isUnder25K: false,
    imageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Redefining sacred tradition for the modern working woman. A single 0.50 Ct certified lab solitaire diamond nestled amidst delicate black bead accents on an 18K yellow gold chain.',
    dimensions: 'Length: 16-18 inches adjustable | Center Diamond: 5.0 mm',
    rating: 4.96,
    reviewsCount: 154
  },
  {
    id: 'jb-mng-02',
    sku: 'JB-MNG-INF-602',
    name: 'Ananta Infinity Diamond Mangalsutra Bracelet',
    category: 'mangalsutra',
    categoryLabel: 'Mangalsutra',
    price: 22800,
    originalPrice: 27500,
    minedPriceEquivalent: 68000,
    diamondCarat: 0.32,
    diamondShape: 'Round',
    diamondClarity: 'VVS-VS',
    diamondColor: 'E-F',
    diamondCut: 'Excellent',
    metalPurity: '14K',
    availableMetals: ['yellow_gold', 'rose_gold'],
    defaultMetal: 'yellow_gold',
    grossWeightGrams: 2.8,
    gender: 'women',
    occasion: 'workwear',
    collection: 'Gifts Under 25K',
    badge: 'Wear on Wrist',
    isReadyToShip: true,
    isBestseller: true,
    isUnder25K: true,
    imageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=800&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A contemporary mangalsutra bracelet designed to sit comfortably on your wrist beside your smartwatch. Infinity loop encrusted with lab diamonds and authentic auspicious black beads.',
    dimensions: 'Length: 6.5 to 7.5 inches adjustable',
    rating: 4.9,
    reviewsCount: 82
  },

  // 7. MEN'S JEWELLERY
  {
    id: 'jb-men-01',
    sku: 'JB-MEN-RNG-701',
    name: 'Titanium-Edge Men’s Lab Diamond Solitaire Band',
    category: 'mens',
    categoryLabel: "Men's Jewellery",
    price: 42000,
    originalPrice: 52000,
    minedPriceEquivalent: 135000,
    diamondCarat: 0.60,
    diamondShape: 'Round',
    diamondClarity: 'VVS-VS',
    diamondColor: 'E-F',
    diamondCut: 'Ideal',
    metalPurity: '18K',
    availableMetals: ['yellow_gold', 'rose_gold', 'white_gold'],
    defaultMetal: 'yellow_gold',
    grossWeightGrams: 6.8,
    gender: 'men',
    occasion: 'wedding',
    collection: 'Men of Jewelbox',
    badge: 'Brushed Matte Finish',
    isReadyToShip: true,
    isBestseller: true,
    isUnder25K: false,
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Substantial 6.8-gram solid 18K gold band featuring a flush bezel-set 0.60 Ct lab diamond solitaire flanked by satin-brushed finish and beveled mirror edges.',
    dimensions: 'Band Width: 6.0 mm | Weight: 6.8 grams',
    sizes: [18, 19, 20, 21, 22, 23, 24],
    rating: 4.88,
    reviewsCount: 71
  },
  {
    id: 'jb-men-02',
    sku: 'JB-MEN-SGN-702',
    name: 'Ares Geometric Diamond Signet Ring',
    category: 'mens',
    categoryLabel: "Men's Jewellery",
    price: 46500,
    originalPrice: 58000,
    minedPriceEquivalent: 148000,
    diamondCarat: 0.70,
    diamondShape: 'Princess',
    diamondClarity: 'VVS-VS',
    diamondColor: 'E-F',
    diamondCut: 'Excellent',
    metalPurity: '14K',
    availableMetals: ['yellow_gold', 'rose_gold', 'white_gold'],
    defaultMetal: 'white_gold',
    grossWeightGrams: 7.2,
    gender: 'men',
    occasion: 'everyday',
    collection: 'Men of Jewelbox',
    badge: 'Bold Signet',
    isReadyToShip: false,
    isBestseller: false,
    isNewArrival: true,
    isUnder25K: false,
    imageUrl: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A bold, masculine square-top signet ring inset with a tension-set princess cut lab diamond, flanked by grooved architectural shoulders.',
    dimensions: 'Top Plate: 10 x 10 mm | Weight: ~7.2g',
    sizes: [19, 20, 21, 22, 23, 24],
    rating: 4.95,
    reviewsCount: 43
  },

  // 8. NECKLACES
  {
    id: 'jb-nck-01',
    sku: 'JB-NCK-TNS-801',
    name: 'Starlight 5.00 Carat Graduated Diamond Tennis Necklace',
    category: 'necklaces',
    categoryLabel: 'Necklaces',
    price: 145000,
    originalPrice: 185000,
    minedPriceEquivalent: 550000,
    diamondCarat: 5.0,
    diamondShape: 'Round',
    diamondClarity: 'VVS-VS',
    diamondColor: 'E-F',
    diamondCut: 'Ideal',
    metalPurity: '18K',
    availableMetals: ['yellow_gold', 'rose_gold', 'white_gold'],
    defaultMetal: 'white_gold',
    grossWeightGrams: 16.5,
    gender: 'women',
    occasion: 'wedding',
    collection: 'Festive Glam',
    badge: 'Signature Masterpiece',
    isReadyToShip: false,
    isBestseller: true,
    isUnder25K: false,
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'An ethereal rivière collar featuring 120 hand-selected graduated lab-grown diamonds leading down to a grand center diamond.',
    dimensions: 'Length: 16.5 inches | 120 Lab Diamonds',
    rating: 5.0,
    reviewsCount: 29
  },

  // 9. NOSEPINS
  {
    id: 'jb-nsp-01',
    sku: 'JB-NSP-SOL-901',
    name: 'Tara Solitaire 0.15 Carat Diamond Nosepin',
    category: 'nosepins',
    categoryLabel: 'Nosepins',
    price: 8500,
    originalPrice: 11000,
    minedPriceEquivalent: 28000,
    diamondCarat: 0.15,
    diamondShape: 'Round',
    diamondClarity: 'VVS-VS',
    diamondColor: 'E-F',
    diamondCut: 'Ideal',
    metalPurity: '18K',
    availableMetals: ['yellow_gold', 'white_gold'],
    defaultMetal: 'yellow_gold',
    grossWeightGrams: 0.55,
    gender: 'women',
    occasion: 'everyday',
    collection: 'Gifts Under 25K',
    badge: 'Under ₹10K · Screw / Wire Back',
    isReadyToShip: true,
    isBestseller: true,
    isUnder25K: true,
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A brilliant 0.15 Ct round lab diamond set in a 4-prong low-profile setting in 18K solid gold. Available in classic wire twist or screw post.',
    dimensions: 'Diamond diameter: 3.4 mm',
    rating: 4.94,
    reviewsCount: 188
  }
];

export const JEWELBOX_COLLECTIONS: JewelboxCollection[] = [
  {
    id: 'engagement',
    name: 'Engagement & Solitaires',
    tagline: 'Say Yes with 100% Real Lab-Grown Diamonds',
    description: 'Celebrate forever with bigger, brighter, conflict-free solitaire rings crafted in BIS hallmarked gold.',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    itemCount: 14,
    filterCategory: 'rings',
    filterCollection: 'Engagement'
  },
  {
    id: 'solitaire-luxe',
    name: 'Solitaire Luxe Collection',
    tagline: 'From 1.00 to 3.00 Carats of Pure Fire',
    description: 'Certified Type IIa diamonds with highest optical brilliance at 70% less than mined diamonds.',
    imageUrl: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
    itemCount: 18,
    filterCategory: 'solitaires',
    filterCollection: 'Solitaire Luxe'
  },
  {
    id: 'shark-tank',
    name: 'Shark Tank India Signature',
    tagline: 'Featured on Shark Tank India S3 · All 5 Sharks Made Offers!',
    description: 'The viral designs that wowed the Sharks. Iconic modern mangalsutras, solitaire rings, and daily diamond essentials.',
    imageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
    itemCount: 12,
    filterCollection: 'Shark Tank Signature'
  },
  {
    id: 'under-25k',
    name: 'Gifts Under ₹25,000',
    tagline: 'Real Diamond Luxury Within Everyone’s Reach',
    description: 'Earrings, pendants, and eternity bands crafted in genuine gold and certified diamonds under ₹25K.',
    imageUrl: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=80',
    itemCount: 16,
    filterCollection: 'Gifts Under 25K'
  },
  {
    id: 'workwear',
    name: 'Workwear & Daily Minimalist',
    tagline: 'Lightweight Diamonds for Your 9-to-5 and Beyond',
    description: 'Sophisticated, snag-free diamond huggies, bands, and delicate chains designed for everyday elegance.',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    itemCount: 15,
    filterCollection: 'Workwear Minimal'
  },
  {
    id: 'mens-jewellery',
    name: 'Men of Jewelbox',
    tagline: 'Architectural Diamond Bands & Signet Rings',
    description: 'Substantial gold weights, brushed textures, and bold lab diamond accents created for discerning men.',
    imageUrl: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80',
    itemCount: 8,
    filterCategory: 'mens',
    filterCollection: 'Men of Jewelbox'
  }
];

export const JEWELBOX_STORES: JewelboxStore[] = [
  {
    id: 'jb-store-mumbai',
    city: 'Mumbai',
    name: 'Jewelbox Flagship Experience Store, Bandra',
    address: 'Shop 4, Ground Floor, Kenilworth Mall, Linking Road, Bandra West',
    pincode: '400050',
    phone: '+91 98200 45678',
    timings: '11:00 AM – 8:30 PM (Open all 7 days)',
    mapQuery: 'Jewelbox+Bandra+Mumbai'
  },
  {
    id: 'jb-store-blr',
    city: 'Bangalore',
    name: 'Jewelbox Indiranagar Lounge',
    address: '777/A, 100 Feet Road, HAL 2nd Stage, Indiranagar',
    pincode: '560038',
    phone: '+91 80 4123 7890',
    timings: '11:00 AM – 9:00 PM (Open all 7 days)',
    mapQuery: 'Jewelbox+Indiranagar+Bangalore'
  },
  {
    id: 'jb-store-delhi',
    city: 'Delhi NCR',
    name: 'Jewelbox DLF Galleria, Gurugram',
    address: 'SF-62, 1st Floor, Galleria Market, DLF Phase IV, Gurugram',
    pincode: '122009',
    phone: '+91 124 456 7890',
    timings: '11:00 AM – 8:30 PM (Tuesday – Sunday)',
    mapQuery: 'Jewelbox+Galleria+Gurugram'
  },
  {
    id: 'jb-store-kolkata',
    city: 'Kolkata',
    name: 'Jewelbox Camac Street Boutique',
    address: '22 Camac Street, Ground Floor, Next to Pantaloons',
    pincode: '700016',
    phone: '+91 33 2287 4321',
    timings: '10:30 AM – 8:00 PM (Open all 7 days)',
    mapQuery: 'Jewelbox+Camac+Street+Kolkata'
  },
  {
    id: 'jb-store-hyd',
    city: 'Hyderabad',
    name: 'Jewelbox Jubilee Hills Studio',
    address: 'Plot 482, Road No. 36, Jubilee Hills',
    pincode: '500033',
    phone: '+91 40 6789 1234',
    timings: '11:00 AM – 8:30 PM (Open all 7 days)',
    mapQuery: 'Jewelbox+Jubilee+Hills+Hyderabad'
  }
];

export const JEWELBOX_REVIEWS: JewelboxReview[] = [
  {
    id: 'rev-1',
    author: 'Pooja & Rohan Mehra',
    city: 'Mumbai',
    rating: 5,
    productName: 'Eternal Radiance 1.00 Ct Solitaire Ring',
    date: 'February 2026',
    comment: 'We saw Jewelbox on Shark Tank and decided to visit the Bandra store. We got a 1.00 Carat IGI certified solitaire ring in 18K rose gold for under ₹50,000! A mined diamond of identical specs was quoted at ₹1.8 Lakh at traditional jewellers. The sparkle is unbelievable.',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Ananya Deshmukh',
    city: 'Bangalore',
    rating: 5,
    productName: 'Sutra Modern Minimalist Solitaire Mangalsutra',
    date: 'January 2026',
    comment: 'I love how modern and sleek this mangalsutra is. I can wear it every single day to my tech job without feeling weighed down by heavy gold. The 0.50 ct solitaire catches light in every video call. Plus the lifetime exchange guarantee gives complete peace of mind.',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Vikramaditya Rao',
    city: 'Delhi NCR',
    rating: 5,
    productName: 'Titanium-Edge Men’s Diamond Band',
    date: 'March 2026',
    comment: 'Most male rings in India are clumsy and bulky. Jewelbox nailed the brushed matte finish and the flush solitaire setting. The delivery was fast, packaging was super luxurious, and the IGI cert came right in the box.',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Sneha Chawla',
    city: 'Kolkata',
    rating: 5,
    productName: 'Royale 3.00 ctw Diamond Tennis Bracelet',
    date: 'January 2026',
    comment: 'Owning a real diamond tennis bracelet was always a lifelong dream. Mined ones cost 3 to 4 lakhs. With Jewelbox lab-grown diamonds, I got an authentic 3.00 carat tennis bracelet for ₹89,000. It passed the diamond tester immediately at my local goldsmith!',
    verified: true
  }
];

export const JEWELBOX_FAQS = [
  {
    q: 'Are Jewelbox lab-grown diamonds 100% REAL diamonds?',
    a: 'YES, unconditionally! Lab-grown diamonds are 100% real diamonds. They are made of pure carbon crystallized in an isometric cubic system. They possess identical chemical, physical, and optical properties as mined diamonds. Even a master gemologist or advanced thermal diamond pen cannot distinguish them because they ARE identical diamonds. The only difference is their origin: grown above ground in plasma reactors rather than mined from deep underground.'
  },
  {
    q: 'Do Jewelbox diamonds come with independent certification?',
    a: 'Every piece of Jewelbox diamond jewellery above 0.20 carat comes with an independent certification from world-renowned gemological laboratories such as IGI (International Gemological Institute) or SGL. Each diamond has its unique certificate number micro-inscribed via laser on its girdle.'
  },
  {
    q: 'What gold purity does Jewelbox use?',
    a: 'All our jewellery is meticulously handcrafted in solid 14 Karat (58.5% pure) or 18 Karat (75.0% pure) gold. Every single piece bears the official Government of India BIS (Bureau of Indian Standards) Hallmark stamp along with the 6-digit HUID code.'
  },
  {
    q: 'What is Jewelbox’s Exchange & Buyback Policy?',
    a: 'We offer an industry-leading Lifetime Exchange & Buyback policy on all purchases. Enjoy 80% exchange value towards any new Jewelbox design and 70% cash buyback value against current prevailing rates, providing full liquidity and long-term trust.'
  },
  {
    q: 'How fast is delivery and is shipping insured?',
    a: 'We provide 100% FREE fully insured shipping across all 28,000+ pincodes in India. "Ready to Ship" designs dispatch within 24-48 hours and deliver within 2-4 business days via secure transit partners (BlueDart / Sequel / BVC Logistics). Custom crafted pieces dispatch within 7-10 days.'
  },
  {
    q: 'Can I visit a store to try designs before buying?',
    a: 'Yes! We have flagship experience stores in Mumbai (Bandra), Bangalore (Indiranagar), Delhi NCR (Gurugram), Kolkata (Camac St), and Hyderabad (Jubilee Hills). You can also book a private video consultation directly from the website.'
  }
];

export const JEWELBOX_WEBSITE: BusinessWebsite = {
  id: 'jewelbox',
  slug: 'jewelbox',
  businessName: 'Jewelbox',
  category: 'jewellery' as any,
  templateId: 'jewelbox',
  tagline: 'Conscious Luxury · India’s Leading Lab-Grown Diamond Brand',
  description: 'Official Jewelbox fine jewellery store experience. Discover 100% real, IGI-certified lab-grown diamond jewellery set in BIS Hallmarked 14K & 18K gold. Featured on Shark Tank India Season 3 (offers from all 5 Sharks). Enjoy ethical, sustainable luxury with up to 70% savings compared to mined diamonds.',
  ownerName: 'Jewelbox Luxury Brands Pvt Ltd (Shark Tank India S3)',
  phone: '+91 98200 45678',
  whatsapp: '+91 98200 45678',
  email: 'care@jewelbox.co.in',
  address: 'Jewelbox Flagship Store, Linking Road, Bandra West, Mumbai & Flagships Nationwide',
  city: 'Mumbai',
  mapsUrl: 'https://maps.google.com/?q=Jewelbox+Bandra+Mumbai',
  openingHours: 'Mon - Sun: 11:00 AM – 8:30 PM IST',
  coverUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#0F2C24', // Deep Emerald Conscious Green
  secondaryColor: '#D4AF37', // Fine Warm Gold
  fontFamily: 'Playfair Display, serif',
  bookingType: 'appointment_slot' as any,
  bookingCtaLabel: 'View Demo',
  specialBadge: 'Shark Tank India S3 Featured · 100% Real Diamonds',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 49999,
  paymentStatus: 'paid',
  sections: [
    { id: 'about', title: 'Why Lab-Grown Diamonds', isEnabled: true, order: 1 },
    { id: 'offers', title: 'Offers & Shark Tank Specials', isEnabled: true, order: 2 },
    { id: 'menu', title: 'Diamond Jewellery Catalogue', isEnabled: true, order: 3 },
    { id: 'gallery', title: 'Collections & Solitaires', isEnabled: true, order: 4 },
    { id: 'timings', title: 'Store Locations & Experience Lounges', isEnabled: true, order: 5 },
    { id: 'contact', title: 'Virtual Styling & In-Store Appointments', isEnabled: true, order: 6 }
  ],
  offers: [
    {
      id: 'jb-offer-shark',
      title: 'Shark Tank Celebration Extra 10% Off',
      description: 'Use coupon code SHARK10 for an additional 10% off on your first lab diamond order + Free Silver Coin.',
      discountPercent: 10,
      couponCode: 'SHARK10',
      isActive: true
    },
    {
      id: 'jb-offer-solitaire',
      title: 'Flat ₹2,000 Off on Solitaires',
      description: 'Apply JEWEL2000 on any solitaire purchase of 1.00 Carat or higher.',
      discountPercent: 5,
      couponCode: 'JEWEL2000',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'jb-gal-1',
      title: '1.00 Ct Solitaire Rings in 18K Rose Gold',
      category: 'rings',
      imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'jb-gal-2',
      title: 'Certified Lab-Grown Oval Solitaires with Hidden Halo',
      category: 'solitaires',
      imageUrl: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'jb-gal-3',
      title: 'Royale 3.00 ctw Diamond Tennis Bracelets',
      category: 'bracelets',
      imageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'jb-gal-4',
      title: 'Minimalist Sutra Solitaire Mangalsutras for Workwear',
      category: 'mangalsutra',
      imageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80'
    }
  ],
  items: [
    {
      id: 'item-jb-ring-solitaire',
      name: 'Eternal Radiance 1.00 Carat Solitaire Ring',
      category: 'Rings',
      price: 48900,
      description: '1.00 Ct round brilliant lab diamond in 18K BIS hallmarked gold. IGI certified.',
      isAvailable: true,
      badge: 'Shark Tank Deal'
    },
    {
      id: 'item-jb-tennis-bracelet',
      name: 'Royale 3.00 Carat Diamond Tennis Bracelet',
      category: 'Bracelets',
      price: 89000,
      description: '55 matched lab diamonds in 14K gold double-latch link bracelet. Save 72% vs mined.',
      isAvailable: true,
      badge: 'Bestseller'
    },
    {
      id: 'item-jb-stud-earrings',
      name: 'Sparkle Starlight 1.00 ctw Solitaire Stud Earrings',
      category: 'Earrings',
      price: 34900,
      description: '1.00 carat total weight certified lab diamond studs in 4-prong 18K gold baskets.',
      isAvailable: true,
      badge: 'All-Time #1'
    },
    {
      id: 'item-jb-mangalsutra',
      name: 'Sutra Modern Minimalist Solitaire Mangalsutra',
      category: 'Mangalsutra',
      price: 32000,
      description: 'Sacred black beads with 0.50 Ct solitaire in 18K gold. Designed for daily office wear.',
      isAvailable: true,
      badge: 'Shark Tank Favorite'
    },
    {
      id: 'item-jb-pendant',
      name: 'Solitaire Floating Diamond Pendant with Chain',
      category: 'Pendants',
      price: 28900,
      description: '0.75 Ct brilliant round lab diamond on an included 18-inch 14K gold chain.',
      isAvailable: true,
      badge: 'Free Gold Chain'
    }
  ]
};
