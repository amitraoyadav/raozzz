import { BusinessWebsite } from '../types';

export interface RubansProduct {
  id: string;
  sku: string;
  name: string;
  category: string; // e.g. 'Jewellery Set', 'Earrings', 'Bangles & Bracelets', 'Rings', 'Necklace & Chains', 'Hair Accessory', 'Bags & Clutches'
  collectionType: 'demi-fine' | 'ethnic' | 'western' | '925-silver' | 'all';
  craft: 'Kundan' | 'American Diamond' | 'Temple' | 'Oxidised' | 'Beaded' | 'Gold Plated' | 'Enamel' | 'Pearl' | 'Rose Gold';
  price: number;
  originalPrice: number;
  discountPercent: number;
  offerPrice25Off: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  secondaryImageUrl?: string;
  galleryImages: string[];
  ribbonBadge?: string; // 'B1G1 Free' | 'Sale' | 'Bestseller'
  inStock: boolean;
  description: string;
  metal: string;
  stone: string;
  plating: string;
  dimensions?: string;
  careInstructions?: string;
}

export interface RubansCategory {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  itemCount: string;
  isPopular?: boolean;
}

export interface RubansStore {
  id: string;
  name: string;
  city: string;
  mall: string;
  address: string;
  pincode: string;
  phone: string;
  hours: string;
  imageUrl: string;
  mapsUrl: string;
}

// Authentic Rubans demo product catalog directly reflecting uploaded HTML items & bestsellers
export const RUBANS_PRODUCTS: RubansProduct[] = [
  {
    id: 'prod-re02ns406761',
    sku: 'RE02NS406761',
    name: 'Elegant Red Gold Plated Short Necklace Set',
    category: 'Jewellery Set',
    collectionType: 'ethnic',
    craft: 'Kundan',
    price: 1149,
    originalPrice: 3475,
    discountPercent: 66,
    offerPrice25Off: 862,
    rating: 4.0,
    reviewCount: 142,
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=80',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=700&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'
    ],
    ribbonBadge: 'B1G1 Free',
    inStock: true,
    description: 'A dazzling festive short necklace set crafted with hand-set red and white Kundan stones on a radiant gold-plated base. Features a matching pair of drop earrings.',
    metal: 'Brass / Copper Alloy',
    stone: 'Faceted Kundan & Synthetic Ruby',
    plating: '22K Micro Gold Plated',
    dimensions: 'Necklace Length: 22 cm, Earrings: 4.5 cm x 2 cm',
    careInstructions: 'Avoid direct contact with perfume, water, and sweat. Store in an airtight pouch.'
  },
  {
    id: 'prod-re10ed409365',
    sku: 'RE10ED409365',
    name: 'Royal Green & Black Statement Earrings',
    category: 'Earrings',
    collectionType: 'ethnic',
    craft: 'Enamel',
    price: 1249,
    originalPrice: 2125,
    discountPercent: 41,
    offerPrice25Off: 937,
    rating: 4.0,
    reviewCount: 98,
    imageUrl: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=700&q=80',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'
    ],
    ribbonBadge: 'B1G1 Free',
    inStock: true,
    description: '24K gold-plated statement drop earrings with fine black meenakari enamel, sea green centerpiece stones, and shimmering cubic zirconia accents.',
    metal: 'High Grade Brass',
    stone: 'Sea Green Stone & CZ Accents',
    plating: '24K Micron Gold Plated',
    dimensions: 'Length: 6 cm, Width: 3.2 cm',
    careInstructions: 'Wipe with a clean cotton swab after every wear.'
  },
  {
    id: 'prod-re10b409315',
    sku: 'RE10B409315',
    name: 'Rubans Set of 2 24K Gold-Plated Divine Lakshmi Temple Bangles with Ruby & Emerald Stones',
    category: 'Bangles & Bracelets',
    collectionType: 'ethnic',
    craft: 'Temple',
    price: 1299,
    originalPrice: 2569,
    discountPercent: 49,
    offerPrice25Off: 974,
    rating: 3.4,
    reviewCount: 84,
    imageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=700&q=80',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=700&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80'
    ],
    ribbonBadge: 'B1G1 Free',
    inStock: true,
    description: 'Heritage temple bangles featuring embossed Goddess Lakshmi motifs bordered with alternating cabochon ruby and emerald red-green stones in an antique matte gold finish.',
    metal: 'Temple Brass Core',
    stone: 'Kempu Ruby & Emerald Cabochons',
    plating: '24K Antique Temple Gold Finish',
    dimensions: 'Sizes Available: 2.4, 2.6, 2.8',
    careInstructions: 'Keep away from moisture and chemical sprays.'
  },
  {
    id: 'prod-re14v407515',
    sku: 'RE14V407515',
    name: 'American Diamond Zirconia Studded Bracelet',
    category: 'Bangles & Bracelets',
    collectionType: 'western',
    craft: 'American Diamond',
    price: 1249,
    originalPrice: 2429,
    discountPercent: 48,
    offerPrice25Off: 937,
    rating: 4.3,
    reviewCount: 219,
    imageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=700&q=80',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
    ],
    ribbonBadge: 'B1G1 Free',
    inStock: true,
    description: 'Chic rose-gold plated flexible bangle-style bracelet studded with prong-set AAA+ Grade American Diamond zirconia stones.',
    metal: 'Environmental Zinc Alloy',
    stone: 'AAA Cubic Zirconia',
    plating: 'Rose Gold Electroplated',
    dimensions: 'Circumference: 17.5 cm (Fits wrists up to 6.8 inches)',
    careInstructions: 'Store in soft velvet pouch provided.'
  },
  {
    id: 'prod-re10ns408568',
    sku: 'RE10NS408568',
    name: 'Tribal Magic Green & Red Necklace Set',
    category: 'Jewellery Set',
    collectionType: 'ethnic',
    craft: 'Oxidised',
    price: 1299,
    originalPrice: 2569,
    discountPercent: 49,
    offerPrice25Off: 974,
    rating: 2.7,
    reviewCount: 65,
    imageUrl: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=700&q=80',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=700&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=800&q=80'
    ],
    ribbonBadge: 'B1G1 Free',
    inStock: true,
    description: 'Oxidised antique gold-plated tribal necklace set featuring artisanal ghungroo dome accents, earthy red & green stones, and matching statement jhumkas.',
    metal: 'German Silver & Brass Base',
    stone: 'Tribal Resin Cabochon & Beads',
    plating: 'Antique Silver-Gold Dual Tone',
    dimensions: 'Collar Choker: 20 cm, Jhumka Length: 5.5 cm',
    careInstructions: 'Gently wipe with dry microfiber cloth.'
  },
  {
    id: 'prod-re02bw408245',
    sku: 'RE02BW408245',
    name: 'Dazzling Kundan Pearl Hair Brooch',
    category: 'Hair Accessory',
    collectionType: 'ethnic',
    craft: 'Kundan',
    price: 1249,
    originalPrice: 2875,
    discountPercent: 56,
    offerPrice25Off: 937,
    rating: 3.8,
    reviewCount: 77,
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=700&q=80',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80'
    ],
    ribbonBadge: 'B1G1 Free',
    inStock: true,
    description: '22K gold-plated Kundan and pearl beaded handcrafted bridal hair brooch clip with cascading miniature jhumka detail. Perfect for weddings and festive hairdos.',
    metal: 'Cast Brass',
    stone: 'White Kundan & Cluster Seed Pearls',
    plating: '22K Yellow Gold Plating',
    dimensions: 'Length: 10 cm, Width: 4.5 cm',
    careInstructions: 'Fasten gently without bending clip mechanism.'
  },
  {
    id: 'prod-re57b402835',
    sku: 'RE57B402835',
    name: 'Rubans Set of 6 Gold Plated Pearl & Stone Studded Traditional Handcrafted Bangles',
    category: 'Bangles & Bracelets',
    collectionType: 'ethnic',
    craft: 'Pearl',
    price: 1149,
    originalPrice: 2663,
    discountPercent: 56,
    offerPrice25Off: 862,
    rating: 4.4,
    reviewCount: 312,
    imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=700&q=80',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=700&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=800&q=80'
    ],
    ribbonBadge: 'B1G1 Free',
    inStock: true,
    description: 'A grand stack of 6 handcrafted bangles embellished with micro-pearl beading, sparkling stones, and delicate traditional Indian filigree work.',
    metal: 'Brass Alloy',
    stone: 'Faux Basra Pearls & Glass Stones',
    plating: '18K Yellow Gold Dip',
    dimensions: 'Sizes Available: 2.4, 2.6, 2.8',
    careInstructions: 'Clean with damp cloth and dry immediately.'
  },
  {
    id: 'prod-re10ps408487',
    sku: 'RE10PS408487',
    name: 'American Diamond Zirconia Necklace Set',
    category: 'Jewellery Set',
    collectionType: 'demi-fine',
    craft: 'American Diamond',
    price: 1099,
    originalPrice: 1998,
    discountPercent: 44,
    offerPrice25Off: 824,
    rating: 4.8,
    reviewCount: 167,
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=80',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
    ],
    ribbonBadge: 'B1G1 Free',
    inStock: true,
    description: 'Rhodium-plated modern collar necklace lined with precision brilliant-cut American Diamond stones. Includes dainty stud drop earrings.',
    metal: 'Nickel-free Copper Base',
    stone: 'Top Grade Cubic Zirconia',
    plating: 'Silver-Rhodium Flash Plated',
    dimensions: 'Necklace Length: 38 cm + 5 cm extension',
    careInstructions: 'Avoid spraying perfume or hairspray near jewelry.'
  },
  {
    id: 'prod-demi-combo-1',
    sku: 'RE10CS406692',
    name: 'Modernist Waterproof Snake Chain & Stud Combo',
    category: 'Combo',
    collectionType: 'demi-fine',
    craft: 'Gold Plated',
    price: 999,
    originalPrice: 2200,
    discountPercent: 55,
    offerPrice25Off: 749,
    rating: 4.9,
    reviewCount: 340,
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
    ],
    ribbonBadge: 'Bestseller',
    inStock: true,
    description: '18K gold PVD plated anti-tarnish stainless steel daily-wear combo. Complete waterproof guarantee for daily showers and gym workouts.',
    metal: '316L Surgical Stainless Steel',
    stone: 'White CZ Solitaire',
    plating: '18K PVD Real Gold Plating',
    dimensions: 'Chain: 45 cm, Studs: 6 mm',
    careInstructions: '100% waterproof and sweatproof. Safe for swimming.'
  },
  {
    id: 'prod-925-ring-1',
    sku: 'RE13R404703',
    name: '925 Sterling Silver Solitaire Halo Ring',
    category: 'Rings',
    collectionType: '925-silver',
    craft: 'American Diamond',
    price: 1499,
    originalPrice: 3200,
    discountPercent: 53,
    offerPrice25Off: 1124,
    rating: 4.7,
    reviewCount: 185,
    imageUrl: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=700&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80'
    ],
    ribbonBadge: 'B1G1 Free',
    inStock: true,
    description: 'Hallmarked 925 Pure Sterling Silver ring crowned with an authentic round brilliant simulated diamond center with pavé halo.',
    metal: '925 Pure Sterling Silver (Hallmarked)',
    stone: 'Signity Star Zirconia',
    plating: 'Pure Platinum Dipped',
    dimensions: 'Adjustable size / Free size',
    careInstructions: 'Use provided silver polish cloth to maintain lustrous shine.'
  },
  {
    id: 'prod-bag-potli-1',
    sku: 'RE10B407627',
    name: 'Handcrafted Zardozi Pearl Velvet Bridal Potli',
    category: 'Bags & Clutches',
    collectionType: 'ethnic',
    craft: 'Beaded',
    price: 1399,
    originalPrice: 2899,
    discountPercent: 52,
    offerPrice25Off: 1049,
    rating: 4.6,
    reviewCount: 92,
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=700&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
    ],
    ribbonBadge: 'B1G1 Free',
    inStock: true,
    description: 'Luxurious raw silk velvet bridal potli bag adorned with intricate metallic zardozi needlework, mother-of-pearl beads, and braided drawstring tasselled handles.',
    metal: 'Brass Chain Strap & Tassels',
    stone: 'Seed Pearls & Mirror Work',
    plating: 'Antique Gold Toned',
    dimensions: 'Height: 22 cm, Diameter: 18 cm',
    careInstructions: 'Dry clean only. Store in tissue paper.'
  },
  {
    id: 'prod-western-choker-1',
    sku: 'RW30N414164',
    name: 'Serenity Zircon Stone Silver-Tone Western Choker',
    category: 'Necklace & Chains',
    collectionType: 'western',
    craft: 'American Diamond',
    price: 899,
    originalPrice: 1999,
    discountPercent: 55,
    offerPrice25Off: 674,
    rating: 4.5,
    reviewCount: 110,
    imageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=700&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=800&q=80'
    ],
    ribbonBadge: 'Sale',
    inStock: true,
    description: 'A striking statement western party choker shimmering with geometric brilliant zircons and diamond-cut crystals on silver-tone alloy.',
    metal: 'Lead & Cadmium-Free Alloy',
    stone: 'Faceted Marquise & Round Zircon',
    plating: 'Silver Rhodium Plating',
    dimensions: 'Length: 32 cm + 8 cm extension chain',
    careInstructions: 'Wipe dry with clean cloth after use.'
  }
];

// 15 Categories from uploaded HTML Shop By Category
export const RUBANS_CATEGORIES: RubansCategory[] = [
  {
    id: 'cat-jewellery-set',
    name: 'Jewellery Set',
    slug: 'jewellery-set',
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=300&q=80',
    itemCount: '1,300+ styles',
    isPopular: true
  },
  {
    id: 'cat-earrings',
    name: 'Earrings',
    slug: 'earrings',
    imageUrl: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=300&q=80',
    itemCount: '1,400+ styles',
    isPopular: true
  },
  {
    id: 'cat-necklace-chains',
    name: 'Necklace & Chains',
    slug: 'necklace-and-chains',
    imageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=300&q=80',
    itemCount: '497 styles',
    isPopular: true
  },
  {
    id: 'cat-bangles-bracelets',
    name: 'Bangles & Bracelets',
    slug: 'bangles-and-bracelets',
    imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=300&q=80',
    itemCount: '652 styles',
    isPopular: true
  },
  {
    id: 'cat-rings',
    name: 'Rings',
    slug: 'rings',
    imageUrl: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=300&q=80',
    itemCount: '271 styles',
    isPopular: true
  },
  {
    id: 'cat-head-jewellery',
    name: 'Head Jewellery',
    slug: 'head-jewellery',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=300&q=80',
    itemCount: '234 styles'
  },
  {
    id: 'cat-bags-clutches',
    name: 'Bags & Clutches',
    slug: 'bags-and-clutches',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=300&q=80',
    itemCount: '103 styles'
  },
  {
    id: 'cat-mangalsutra',
    name: 'Mangalsutra',
    slug: 'mangalsutra',
    imageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=300&q=80',
    itemCount: '148 styles'
  },
  {
    id: 'cat-anklets',
    name: 'Anklets',
    slug: 'anklets',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=300&q=80',
    itemCount: '68 styles'
  },
  {
    id: 'cat-combos',
    name: 'Combo Sets',
    slug: 'combo',
    imageUrl: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=300&q=80',
    itemCount: '89 styles'
  }
];

// Circular category icon buttons shown on top of the hero in HTML
export const RUBANS_CIRCULAR_COLLECTIONS = [
  { name: 'NEW LAUNCHES', slug: 'new-launches', tag: 'Fresh Arrivals' },
  { name: 'BEST SELLERS', slug: 'best-sellers', tag: 'Top Rated' },
  { name: 'DEMI-FINE', slug: 'demi-fine', tag: 'Waterproof 18K' },
  { name: 'ETHNIC', slug: 'ethnic', tag: 'Royal Heirlooms' },
  { name: 'WESTERN', slug: 'western', tag: 'Chic Styles' },
  { name: '925 SILVER', slug: '925-silver', tag: 'Pure Silver' }
];

// Handpicked For You sections from uploaded HTML
export const RUBANS_HANDPICKED = [
  {
    id: 'hp-demi-fine',
    title: 'Demi Fine',
    slug: 'demi-fine',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80',
    badge: '18K Anti-Tarnish'
  },
  {
    id: 'hp-oxidised',
    title: 'Oxidised',
    slug: 'oxidised',
    imageUrl: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=600&q=80',
    badge: 'German Silver & Kempu'
  },
  {
    id: 'hp-kundan',
    title: 'Kundan',
    slug: 'kundan',
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
    badge: 'Royal Jadau Art'
  },
  {
    id: 'hp-temple',
    title: 'Temple',
    slug: 'temple',
    imageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=600&q=80',
    badge: 'Goddess Lakshmi Idols'
  },
  {
    id: 'hp-beaded',
    title: 'Beaded',
    slug: 'beaded',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80',
    badge: 'Hand-strung Pearls'
  },
  {
    id: 'hp-gold-plated',
    title: 'Gold Plated',
    slug: 'gold-plated',
    imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80',
    badge: '22K Micro Dip'
  }
];

// Physical stores locator
export const RUBANS_STORES: RubansStore[] = [
  {
    id: 'store-blr-indiranagar',
    name: 'Rubans Flagship Store — Indiranagar',
    city: 'Bengaluru',
    mall: '100ft Road Flagship',
    address: 'No. 777/A, 100 Feet Road, HAL 2nd Stage, Indiranagar',
    pincode: '560038',
    phone: '+91 80 5055 6004',
    hours: '10:30 AM – 9:00 PM (All 7 Days)',
    imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
    mapsUrl: 'https://maps.google.com/?q=Rubans+Indiranagar+Bangalore'
  },
  {
    id: 'store-blr-phoenix',
    name: 'Rubans — Phoenix Marketcity',
    city: 'Bengaluru',
    mall: 'Phoenix Marketcity Mall',
    address: 'Ground Floor, Unit G-42, Whitefield Main Road, Mahadevapura',
    pincode: '560048',
    phone: '+91 80 5055 6004',
    hours: '11:00 AM – 9:30 PM (All 7 Days)',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    mapsUrl: 'https://maps.google.com/?q=Rubans+Phoenix+Marketcity+Bangalore'
  },
  {
    id: 'store-mumbai-bandra',
    name: 'Rubans — Bandra West',
    city: 'Mumbai',
    mall: 'Linking Road Fashion Hub',
    address: 'Shop 4, Linking Road, Khar West, Next to Khar Telephone Exchange',
    pincode: '400052',
    phone: '+91 80 5055 6004',
    hours: '11:00 AM – 9:30 PM (All 7 Days)',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    mapsUrl: 'https://maps.google.com/?q=Rubans+Linking+Road+Mumbai'
  },
  {
    id: 'store-delhi-gk',
    name: 'Rubans — Greater Kailash Part 1',
    city: 'New Delhi',
    mall: 'M Block Market',
    address: 'M-22, M-Block Market, Greater Kailash 1',
    pincode: '110048',
    phone: '+91 80 5055 6004',
    hours: '10:30 AM – 8:30 PM (Tuesday Closed)',
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    mapsUrl: 'https://maps.google.com/?q=Rubans+GK1+Delhi'
  }
];

export const RUBANS_WEBSITE: BusinessWebsite = {
  id: 'rubans',
  slug: 'rubans',
  businessName: 'Rubans',
  category: 'jewellery' as any,
  templateId: 'rubans',
  tagline: 'Online Shopping For Fashion, Imitation, Artificial Jewellery - Rubans',
  description: 'Experience the epitome of style with designer fashion and gold plated jewellery. Explore a stunning collection that complements your personality.',
  ownerName: 'Rubans Accessories Pvt Ltd',
  phone: '+91 80 5055 6004',
  whatsapp: '+91 80 5055 6004',
  email: 'help@rubans.com',
  address: 'No. 777/A, 100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru – 560038',
  city: 'Bengaluru',
  mapsUrl: 'https://maps.google.com/?q=Rubans+Accessories+Indiranagar+Bangalore',
  openingHours: 'Mon - Sun: 10:30 AM – 9:00 PM',
  coverUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#47080C',
  secondaryColor: '#FBBC93',
  fontFamily: 'Lato, sans-serif',
  bookingType: 'appointment_slot' as any,
  bookingCtaLabel: 'View Demo',
  specialBadge: 'Buy 1 Get 1 Free | Site Wide',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 49999,
  paymentStatus: 'paid',
  sections: [
    { id: 'announcement', title: 'Buy 1 Get 1 Free | Site Wide', isEnabled: true, order: 1 },
    { id: 'countdown', title: 'B1G1 Sale Countdown', isEnabled: true, order: 2 },
    { id: 'hero', title: 'Festive Edit Main Slideshow', isEnabled: true, order: 3 },
    { id: 'circular_categories', title: 'New Launches & Bestsellers', isEnabled: true, order: 4 },
    { id: 'handpicked', title: 'Handpicked For You', isEnabled: true, order: 5 },
    { id: 'bestsellers', title: 'Our Best Sellers', isEnabled: true, order: 6 },
    { id: 'shoppable_looks', title: 'Shop the Look', isEnabled: true, order: 7 },
    { id: 'stores', title: 'Store Locator', isEnabled: true, order: 8 },
    { id: 'footer', title: 'Rubans Care & Newsletter', isEnabled: true, order: 9 }
  ],
  offers: [
    {
      id: 'rubans-b1g1',
      title: 'Buy 1 Get 1 FREE Site Wide',
      description: 'Add any 2 items to your cart, get the cheapest one 100% free automatically at checkout!',
      discountPercent: 50,
      couponCode: 'B1G1FREE',
      isActive: true
    },
    {
      id: 'rubans-free-shipping',
      title: 'Free Shipping Above ₹999',
      description: 'All domestic orders over ₹999 ship free across 24,000+ Indian pincodes.',
      discountPercent: 10,
      couponCode: 'FREESHIP',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'rb-g-1',
      title: 'Festive Kundan Choker',
      category: 'ethnic',
      imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'rb-g-2',
      title: 'Temple Lakshmi Bangles',
      category: 'temple',
      imageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'rb-g-3',
      title: 'American Diamond Studded Bracelet',
      category: 'western',
      imageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80'
    }
  ],
  items: [
    {
      id: 'item-rb-necklace',
      name: 'Elegant Red Gold Plated Short Necklace Set',
      category: 'Jewellery Set',
      price: 1149,
      description: 'Handcrafted Kundan necklace with drop earrings and adjustable cord.',
      isAvailable: true,
      badge: 'B1G1 Free'
    },
    {
      id: 'item-rb-bangles',
      name: 'Set of 2 24K Gold-Plated Divine Lakshmi Temple Bangles',
      category: 'Bangles',
      price: 1299,
      description: 'Embossed Goddess Lakshmi motifs with ruby and emerald accents.',
      isAvailable: true,
      badge: 'B1G1 Free'
    }
  ]
};
