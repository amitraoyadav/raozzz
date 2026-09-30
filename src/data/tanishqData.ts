import { BusinessWebsite } from '../types';

export interface TanishqProduct {
  id: string;
  sku: string;
  name: string;
  category: 'earrings' | 'rings' | 'pendants' | 'mangalsutra' | 'chains' | 'nosepins' | 'necklaces' | 'bangles' | 'bracelets' | 'coins';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  metal: '22k_yellow_gold' | '18k_yellow_gold' | '18k_rose_gold' | '18k_white_gold' | 'platinum';
  metalLabel: string;
  karatage: '22K' | '18K' | '950 Platinum' | '24K';
  grossWeightGrams: number;
  diamondWeightCarat?: number;
  diamondClarity?: 'VVS1-EF' | 'VVS-GH' | 'SI2-GH' | 'Polki' | 'Solitaire';
  gender: 'women' | 'men' | 'unisex' | 'kids';
  occasion: 'wedding' | 'daily' | 'festive' | 'evening' | 'workwear' | 'auspicious';
  collection: 'Rivaah' | 'Alekhya' | 'Dharohar' | 'Mia' | 'String It' | 'Dor' | 'GlamDays' | 'Classic';
  regionalTradition?: 'Bengali' | 'Bihari' | 'Gujarati' | 'Kannada' | 'Marathi' | 'Odia' | 'Punjabi' | 'Tamil' | 'Telugu' | 'UP';
  badge?: string;
  imageUrl: string;
  hoverImageUrl: string;
  description: string;
  dimensions?: string;
  isBestseller?: boolean;
  isNewArrival?: boolean;
  isUnder50K?: boolean;
}

export interface TanishqCollection {
  id: string;
  name: string;
  tagline: string;
  description: string;
  imageUrl: string;
  itemCount: number;
  themeColor: string;
}

export interface RegionalBrideInfo {
  region: string;
  title: string;
  description: string;
  signatureJewellery: string[];
  imageUrl: string;
}

export interface TanishqStoreLocation {
  id: string;
  name: string;
  city: string;
  address: string;
  pincode: string;
  phone: string;
  timings: string;
  hasKaratmeter: boolean;
  hasValet: boolean;
  hasRivaahLounge: boolean;
}

export const TANISHQ_PRODUCTS: TanishqProduct[] = [
  // 1. EARRINGS
  {
    id: 'tan-err-01',
    sku: '511118JAFAA00',
    name: 'Glorious Filigree 22K Gold Jhumkas',
    category: 'earrings',
    categoryLabel: 'Earrings',
    price: 68450,
    originalPrice: 72900,
    metal: '22k_yellow_gold',
    metalLabel: '22 Karat Yellow Gold',
    karatage: '22K',
    grossWeightGrams: 9.85,
    gender: 'women',
    occasion: 'festive',
    collection: 'Classic',
    badge: 'Bestseller',
    imageUrl: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=700&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80',
    description: 'Intricately handcrafted 22KT gold traditional dome jhumkas featuring delicate filigree drops and floral ear studs. Certified BIS Hallmarked.',
    dimensions: 'Height: 42 mm | Width: 20 mm',
    isBestseller: true,
    isUnder50K: false
  },
  {
    id: 'tan-err-02',
    sku: '50D3B2SDBAAA02',
    name: 'Sparkling Solitaire Petal Diamond Studs',
    category: 'earrings',
    categoryLabel: 'Earrings',
    price: 38900,
    originalPrice: 42000,
    metal: '18k_yellow_gold',
    metalLabel: '18 Karat Yellow Gold',
    karatage: '18K',
    grossWeightGrams: 3.12,
    diamondWeightCarat: 0.35,
    diamondClarity: 'VVS-GH',
    gender: 'women',
    occasion: 'daily',
    collection: 'Mia',
    badge: 'Under ₹50K',
    imageUrl: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=700&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80',
    description: 'Elegantly micro-set brilliant cut diamonds in a modern floral blossom motif. Perfect for everyday professional and casual wear.',
    dimensions: 'Height: 11 mm | Width: 11 mm',
    isBestseller: true,
    isUnder50K: true
  },
  {
    id: 'tan-err-03',
    sku: '513220JEAAA09',
    name: 'Rivaah Royal Kundan & Ruby Chandbali Earrings',
    category: 'earrings',
    categoryLabel: 'Earrings',
    price: 112500,
    metal: '22k_yellow_gold',
    metalLabel: '22 Karat Yellow Gold',
    karatage: '22K',
    grossWeightGrams: 16.4,
    gender: 'women',
    occasion: 'wedding',
    collection: 'Rivaah',
    regionalTradition: 'UP',
    badge: 'Rivaah Bridal',
    imageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=700&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=700&q=80',
    description: 'Opulent crescent chandbali earrings embellished with uncut polki glass stones, Burma rubies, and seed pearl clusters.',
    dimensions: 'Height: 56 mm | Width: 32 mm',
    isBestseller: false,
    isUnder50K: false
  },

  // 2. FINGER RINGS
  {
    id: 'tan-rng-01',
    sku: '50D2D1FAAAA02',
    name: 'Eternity Bloom Solitaire Diamond Ring',
    category: 'rings',
    categoryLabel: 'Finger Rings',
    price: 49500,
    originalPrice: 54000,
    metal: '18k_rose_gold',
    metalLabel: '18 Karat Rose Gold',
    karatage: '18K',
    grossWeightGrams: 2.85,
    diamondWeightCarat: 0.42,
    diamondClarity: 'VVS1-EF',
    gender: 'women',
    occasion: 'daily',
    collection: 'Mia',
    badge: 'Under ₹50K',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=700&q=80',
    description: 'Certified round brilliant diamond solitaire crowned with delicate rose gold petal prongs. Tanishq certificate of authenticity included.',
    dimensions: 'Ring Size: 12-16 (Adjustable on request)',
    isBestseller: true,
    isUnder50K: true
  },
  {
    id: 'tan-rng-02',
    sku: '510118FAAAA00',
    name: 'Majestic Royal Peacock 22K Gold Cocktail Ring',
    category: 'rings',
    categoryLabel: 'Finger Rings',
    price: 64200,
    metal: '22k_yellow_gold',
    metalLabel: '22 Karat Yellow Gold',
    karatage: '22K',
    grossWeightGrams: 8.9,
    gender: 'women',
    occasion: 'festive',
    collection: 'Dharohar',
    regionalTradition: 'Rajasthani' as any,
    badge: 'Heritage Craft',
    imageUrl: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=700&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80',
    description: 'Statement handcrafted ring inspired by royal Rajputana motifs with turquoise meenakari enameling and antique matte gold finish.',
    dimensions: 'Diameter: 24 mm statement face',
    isBestseller: false,
    isUnder50K: false
  },
  {
    id: 'tan-rng-03',
    sku: '501118FAMAAA01',
    name: 'Classic Gents 22K Gold Signet Ring',
    category: 'rings',
    categoryLabel: 'Finger Rings',
    price: 46800,
    metal: '22k_yellow_gold',
    metalLabel: '22 Karat Yellow Gold',
    karatage: '22K',
    grossWeightGrams: 6.7,
    gender: 'men',
    occasion: 'daily',
    collection: 'Classic',
    badge: 'Under ₹50K',
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80',
    description: 'Sophisticated men\'s gold ring with brushed satin central panel and polished beveled edges. Designed for enduring comfort.',
    dimensions: 'Ring Size: 18-24',
    isBestseller: true,
    isUnder50K: true
  },

  // 3. PENDANTS & CHAINS
  {
    id: 'tan-pnd-01',
    sku: '50D1D2PAAAA00',
    name: 'Infinity Constellation Diamond Pendant',
    category: 'pendants',
    categoryLabel: 'Pendants',
    price: 24900,
    originalPrice: 28000,
    metal: '18k_yellow_gold',
    metalLabel: '18 Karat Yellow Gold',
    karatage: '18K',
    grossWeightGrams: 1.85,
    diamondWeightCarat: 0.22,
    diamondClarity: 'SI2-GH',
    gender: 'women',
    occasion: 'daily',
    collection: 'Mia',
    badge: 'Under ₹50K',
    imageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=700&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=700&q=80',
    description: 'Slender gold chain loop suspending a radiant pavé diamond infinity knot. Ideal gift for anniversaries and birthdays.',
    dimensions: 'Height: 18 mm | Width: 9 mm',
    isBestseller: true,
    isUnder50K: true
  },
  {
    id: 'tan-chn-01',
    sku: '511118NAAAA00',
    name: 'Traditional 22K Gold Rope Chain (20 Inch)',
    category: 'chains',
    categoryLabel: 'Chains',
    price: 84500,
    metal: '22k_yellow_gold',
    metalLabel: '22 Karat Yellow Gold',
    karatage: '22K',
    grossWeightGrams: 12.1,
    gender: 'unisex',
    occasion: 'daily',
    collection: 'Classic',
    badge: '100% Hallmarked',
    imageUrl: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=700&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=700&q=80',
    description: 'Solid link hand-twined 22 karat gold rope chain with sturdy S-hook clasp. Comfortable for round-the-clock wear.',
    dimensions: 'Length: 50.8 cm (20 inches) | Thickness: 2.2 mm',
    isBestseller: true,
    isUnder50K: false
  },

  // 4. MANGALSUTRA
  {
    id: 'tan-mgl-01',
    sku: '512019MAAAA00',
    name: 'Dor Contemporary Solitaire Diamond Mangalsutra',
    category: 'mangalsutra',
    categoryLabel: 'Mangalsutra',
    price: 48500,
    originalPrice: 52000,
    metal: '18k_yellow_gold',
    metalLabel: '18 Karat Yellow Gold',
    karatage: '18K',
    grossWeightGrams: 3.4,
    diamondWeightCarat: 0.32,
    diamondClarity: 'VVS-GH',
    gender: 'women',
    occasion: 'daily',
    collection: 'Dor',
    badge: 'Under ₹50K',
    imageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=700&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=700&q=80',
    description: 'A modern symbol of lifelong love. Double-line auspicious black onyx beads gracefully anchored by a halo diamond pendant in 18KT gold.',
    dimensions: 'Length: 42 cm with 5 cm adjuster',
    isBestseller: true,
    isUnder50K: true
  },
  {
    id: 'tan-mgl-02',
    sku: '510118MAAAA02',
    name: 'Rivaah Traditional Vati 22K Gold Mangalsutra',
    category: 'mangalsutra',
    categoryLabel: 'Mangalsutra',
    price: 135000,
    metal: '22k_yellow_gold',
    metalLabel: '22 Karat Yellow Gold',
    karatage: '22K',
    grossWeightGrams: 19.8,
    gender: 'women',
    occasion: 'wedding',
    collection: 'Rivaah',
    regionalTradition: 'Marathi',
    badge: 'Rivaah Bridal',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=700&q=80',
    description: 'Sacred twin gold Vati cups suspended from an auspicious gold and black bead string with Kolhapuri chain links and auspicious coral beads.',
    dimensions: 'Length: 76 cm (30 inches)',
    isBestseller: false,
    isUnder50K: false
  },

  // 5. BANGLES & BRACELETS
  {
    id: 'tan-bgl-01',
    sku: '511118BAAAA00',
    name: 'Pair of Royal Filigree 22K Gold Kadas',
    category: 'bangles',
    categoryLabel: 'Bangles',
    price: 189000,
    metal: '22k_yellow_gold',
    metalLabel: '22 Karat Yellow Gold',
    karatage: '22K',
    grossWeightGrams: 27.5,
    gender: 'women',
    occasion: 'wedding',
    collection: 'Rivaah',
    regionalTradition: 'Bengali',
    badge: 'Heirloom Pair',
    imageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=700&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80',
    description: 'Set of two intricately textured 22K gold openable kadas with screw-pin safety locks and floral relief carving. Heritage wedding essential.',
    dimensions: 'Sizes: 2.4, 2.6, 2.8',
    isBestseller: true,
    isUnder50K: false
  },
  {
    id: 'tan-brc-01',
    sku: '50D1D2BAAAA00',
    name: 'Tennis Sparkle Diamond Flexible Bracelet',
    category: 'bracelets',
    categoryLabel: 'Bracelets',
    price: 98000,
    originalPrice: 105000,
    metal: '18k_white_gold',
    metalLabel: '18 Karat White Gold',
    karatage: '18K',
    grossWeightGrams: 8.6,
    diamondWeightCarat: 1.15,
    diamondClarity: 'VVS-GH',
    gender: 'women',
    occasion: 'evening',
    collection: 'Classic',
    badge: 'Luxury Diamond',
    imageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=700&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=700&q=80',
    description: 'A seamless stream of brilliant round diamonds prong-set in lustrous 18KT white gold with double security tongue lock.',
    dimensions: 'Length: 17.8 cm (7 inches)',
    isBestseller: true,
    isUnder50K: false
  },

  // 6. NECKLACES & SETS
  {
    id: 'tan-nck-01',
    sku: '513020NCAAA00',
    name: 'Rivaah Grand Temple Choker Necklace Set',
    category: 'necklaces',
    categoryLabel: 'Necklaces & Sets',
    price: 345000,
    metal: '22k_yellow_gold',
    metalLabel: '22 Karat Yellow Gold',
    karatage: '22K',
    grossWeightGrams: 48.6,
    gender: 'women',
    occasion: 'wedding',
    collection: 'Rivaah',
    regionalTradition: 'Tamil',
    badge: 'Rivaah Signature Set',
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=700&q=80',
    description: 'Exquisite 22K yellow gold temple bridal choker accompanied by matching grand jhumkas. Displays Goddess Lakshmi medallion with rubies and emeralds.',
    dimensions: 'Adjustable dori chord, choker drop: 65 mm',
    isBestseller: true,
    isUnder50K: false
  },
  {
    id: 'tan-nck-02',
    sku: '50D3B2NCAAA01',
    name: 'Starlight Waterfall Diamond Cascade Necklace',
    category: 'necklaces',
    categoryLabel: 'Necklaces & Sets',
    price: 495000,
    metal: '18k_white_gold',
    metalLabel: '18 Karat White Gold',
    karatage: '18K',
    grossWeightGrams: 32.4,
    diamondWeightCarat: 4.8,
    diamondClarity: 'VVS1-EF',
    gender: 'women',
    occasion: 'wedding',
    collection: 'Alekhya',
    badge: 'Masterpiece',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=700&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=80',
    description: 'Spectacular red carpet necklace showcasing tiers of pear and marquise diamonds flowing in an effortless river of light.',
    dimensions: 'Collar circumference: 40 cm with safety clasp',
    isBestseller: false,
    isUnder50K: false
  },

  // 7. NOSE PINS
  {
    id: 'tan-nsp-01',
    sku: '50D1D2SNAAA00',
    name: 'Sparkle Solitaire Diamond Nose Pin (Screw/Wire)',
    category: 'nosepins',
    categoryLabel: 'Nose Pins',
    price: 8900,
    originalPrice: 10500,
    metal: '18k_yellow_gold',
    metalLabel: '18 Karat Yellow Gold',
    karatage: '18K',
    grossWeightGrams: 0.65,
    diamondWeightCarat: 0.08,
    diamondClarity: 'VVS-GH',
    gender: 'women',
    occasion: 'daily',
    collection: 'Mia',
    badge: 'Under ₹50K',
    imageUrl: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=700&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=700&q=80',
    description: 'Dainty certified round brilliant diamond nose pin in smooth bezel setting. Available in twist-wire or screw backing.',
    dimensions: 'Diamond diameter: 2.8 mm',
    isBestseller: true,
    isUnder50K: true
  },

  // 8. AUSPICIOUS GOLD COINS
  {
    id: 'tan-con-01',
    sku: '519999CAAAA01',
    name: '24K Goddess Lakshmi & Lord Ganesha 5 Gram Gold Coin',
    category: 'coins',
    categoryLabel: 'Gold Coins',
    price: 39500,
    metal: '22k_yellow_gold', // 24K pure 999.9
    metalLabel: '24 Karat 999.9 Pure Gold',
    karatage: '24K',
    grossWeightGrams: 5.0,
    gender: 'unisex',
    occasion: 'auspicious',
    collection: 'Classic',
    badge: '24K 999.9 Purity',
    imageUrl: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=700&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=700&q=80',
    description: 'Tamper-evident CertiCard packaged 24 Karat 999.9 purity fine gold coin. Features auspicious Lakshmi and Ganesha blessings on front, Tata trust hallmark on reverse.',
    dimensions: 'Weight: 5.00 grams | Purity: 99.99%',
    isBestseller: true,
    isUnder50K: true
  },
  {
    id: 'tan-con-02',
    sku: '519999CAAAA02',
    name: '24K Kalpavriksha Tree of Life 10 Gram Gold Bar',
    category: 'coins',
    categoryLabel: 'Gold Coins',
    price: 78500,
    metal: '22k_yellow_gold',
    metalLabel: '24 Karat 999.9 Pure Gold',
    karatage: '24K',
    grossWeightGrams: 10.0,
    gender: 'unisex',
    occasion: 'auspicious',
    collection: 'Classic',
    badge: '24K 999.9 Purity',
    imageUrl: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=700&q=80',
    hoverImageUrl: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=700&q=80',
    description: 'Swiss precision minted 10g bullion ingot stamped with the sacred Kalpavriksha wish-granting tree and Tanishq guarantee.',
    dimensions: 'Weight: 10.00 grams | Purity: 99.99%',
    isBestseller: false,
    isUnder50K: false
  }
];

export const TANISHQ_COLLECTIONS: TanishqCollection[] = [
  {
    id: 'rivaah',
    name: 'Rivaah by Tanishq',
    tagline: 'A Jewel for Every Bride Across India',
    description: 'Tailored bridal trousseaus for 10 regional communities. Handcrafted chokers, harams, and heirloom kadas blessed by age-old customs.',
    imageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=800&q=80',
    itemCount: 420,
    themeColor: '#832729'
  },
  {
    id: 'mia',
    name: 'Mia by Tanishq',
    tagline: 'Fine Jewellery for Everyday Work & Play',
    description: 'Lightweight 14K & 18K gold embellished with brilliant diamonds. Modern, stackable, and effortlessly stylish.',
    imageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
    itemCount: 280,
    themeColor: '#E06D53'
  },
  {
    id: 'alekhya',
    name: 'Alekhya Collection',
    tagline: 'Indian Miniature Art Revived in Polki & Gold',
    description: 'Inspired by Pichwai paintings and Mughal frescoes. Featuring hand-enamelled meenakari and uncut diamond polkis.',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    itemCount: 95,
    themeColor: '#1B4D3E'
  },
  {
    id: 'dharohar',
    name: 'Dharohar Heritage',
    tagline: 'Timeless Royal Jewels Reimagined',
    description: 'Centuries-old Nakashi craftsmanship, temple bas-reliefs, and antique matte textures passed down through royal dynasties.',
    imageUrl: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
    itemCount: 130,
    themeColor: '#C59B27'
  },
  {
    id: 'dor',
    name: 'Dor Modern Mangalsutras',
    tagline: 'A Sacred Bond, Everyday Elegance',
    description: 'Reimagining the auspicious black bead mangalsutra with diamond solitaires, charms, and convertible chains for the contemporary woman.',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    itemCount: 65,
    themeColor: '#2B2B2B'
  }
];

export const REGIONAL_BRIDES: RegionalBrideInfo[] = [
  {
    region: 'Bengali',
    title: 'The Bengali Bride · Bodhu',
    description: 'Adorned in classic Mukut crown, Paati Haar, Kaan Bala, Shakha Pola bangles, and delicate gold Tikli on the forehead.',
    signatureJewellery: ['Mukut Filigree Crown', 'Paati Haar Choker', 'Kaan Bala Earrings', 'Ratnachur Hand Ornament', 'Shakha Pola Gold Trims'],
    imageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=600&q=80'
  },
  {
    region: 'Tamil',
    title: 'The Tamil Bride · Manappen',
    description: 'Crowned in grand Temple jewellery: Nethi Chutti maang tikka, peacock Vanki armlets, Kaasu Malai coin necklaces, and Ottiyanam waist belt.',
    signatureJewellery: ['Kaasu Malai Gold Necklace', 'Vanki Armlet', 'Nethi Chutti Maang Tikka', 'Ottiyanam Gold Belt', 'Jimikki Earrings'],
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80'
  },
  {
    region: 'Marathi',
    title: 'The Marathi Bride · Navari',
    description: 'Draped in Paithani silk, adorned with the sacred Kolhapuri Saaj, braided Thushi choker, pearl Bugadi, and crescent Nath.',
    signatureJewellery: ['Kolhapuri Saaj 21 Leaf Necklace', 'Thushi Gold Choker', 'Motyanchi Nath (Pearl Nose Ring)', 'Bakuli Haar', 'Bugadi Ear Clip'],
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80'
  },
  {
    region: 'Gujarati',
    title: 'The Gujarati Bride · Kanyadaan',
    description: 'Regal Panetar silk with intricate Kundan Kanthi, cascading Damini forehead chain, gold Chandan Haar, and ivory Chooda.',
    signatureJewellery: ['Kundan Kanthi Choker', 'Damini Matha Patti', 'Chandan Haar', 'Kada & Bajuband', 'Pokhraj Ring'],
    imageUrl: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80'
  },
  {
    region: 'Punjabi',
    title: 'The Punjabi Bride · Soni Kudi',
    description: 'Gleaming red Chooda and golden Kalire drops, paired with grand uncut Polki choker, Passa hair ornament, and oversized Nath.',
    signatureJewellery: ['Golden Hanging Kalire', 'Polki Bridal Choker', 'Pasa & Maang Tikka', 'Nath with Gold String', 'Chooda Gold Bangles'],
    imageUrl: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=80'
  },
  {
    region: 'Telugu',
    title: 'The Telugu Bride · Pellikuthuru',
    description: 'Traditional Kanjeevaram elegance with Kasulaperu coin chains, Papidi Billa maang tikka, sculpted Vaddanam gold waistbelt, and Guttapusalu.',
    signatureJewellery: ['Guttapusalu Pearl Necklace', 'Vaddanam Waist Belt', 'Papidi Billa Tikka', 'Kasulaperu Long Chain', 'Aravanki Armband'],
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80'
  }
];

export const TANISHQ_LIVE_GOLD_RATES = {
  date: 'Today, Live Market Update',
  source: 'Tanishq Verified Bullion Rate',
  cities: [
    { city: 'Mumbai', rate22k: 6780, rate24k: 7395, change: '+₹15' },
    { city: 'Delhi NCR', rate22k: 6795, rate24k: 7410, change: '+₹20' },
    { city: 'Bengaluru', rate22k: 6785, rate24k: 7400, change: '+₹15' },
    { city: 'Chennai', rate22k: 6810, rate24k: 7430, change: '+₹25' },
    { city: 'Kolkata', rate22k: 6780, rate24k: 7395, change: '+₹15' },
    { city: 'Hyderabad', rate22k: 6785, rate24k: 7400, change: '+₹15' },
    { city: 'Pune', rate22k: 6780, rate24k: 7395, change: '+₹15' },
    { city: 'Ahmedabad', rate22k: 6790, rate24k: 7405, change: '+₹10' }
  ]
};

export const TANISHQ_STORES: TanishqStoreLocation[] = [
  {
    id: 'store-mum-andheri',
    name: 'Tanishq Showroom · Andheri West',
    city: 'Mumbai',
    address: 'SV Road, Near Andheri Station & Shoppers Stop, Andheri West, Mumbai',
    pincode: '400058',
    phone: '+91 22 2628 9911',
    timings: '10:30 AM – 8:30 PM (All 7 Days)',
    hasKaratmeter: true,
    hasValet: true,
    hasRivaahLounge: true
  },
  {
    id: 'store-mum-bandra',
    name: 'Tanishq Flagship Boutique · Bandra West',
    city: 'Mumbai',
    address: 'Plot 328, Linking Road, Near National College, Bandra West, Mumbai',
    pincode: '400050',
    phone: '+91 22 2640 4422',
    timings: '10:30 AM – 9:00 PM (All 7 Days)',
    hasKaratmeter: true,
    hasValet: true,
    hasRivaahLounge: true
  },
  {
    id: 'store-del-cp',
    name: 'Tanishq Connaught Place Flagship',
    city: 'Delhi NCR',
    address: 'F-Block, Inner Circle, Connaught Place, New Delhi',
    pincode: '110001',
    phone: '+91 11 2332 5566',
    timings: '10:30 AM – 8:00 PM (All 7 Days)',
    hasKaratmeter: true,
    hasValet: false,
    hasRivaahLounge: true
  },
  {
    id: 'store-del-gk',
    name: 'Tanishq Boutique · Greater Kailash 1',
    city: 'Delhi NCR',
    address: 'M-Block Market, GK 1, New Delhi',
    pincode: '110048',
    phone: '+91 11 4163 1188',
    timings: '10:30 AM – 8:30 PM (All 7 Days)',
    hasKaratmeter: true,
    hasValet: true,
    hasRivaahLounge: true
  },
  {
    id: 'store-blr-mg',
    name: 'Tanishq Boutique · MG Road',
    city: 'Bengaluru',
    address: 'Safina Plaza / MG Road, Commercial Street Junction, Bengaluru',
    pincode: '560001',
    phone: '+91 80 2559 8833',
    timings: '10:30 AM – 8:30 PM (All 7 Days)',
    hasKaratmeter: true,
    hasValet: true,
    hasRivaahLounge: true
  },
  {
    id: 'store-kol-park',
    name: 'Tanishq Showroom · Park Street',
    city: 'Kolkata',
    address: 'Camac Street & Park Street Crossing, Kolkata',
    pincode: '700016',
    phone: '+91 33 2287 4411',
    timings: '10:30 AM – 8:00 PM (All 7 Days)',
    hasKaratmeter: true,
    hasValet: false,
    hasRivaahLounge: true
  }
];

export const RING_SIZE_GUIDE = [
  { size: 6, innerDiameterMm: 14.6, circumferenceMm: 45.9 },
  { size: 8, innerDiameterMm: 15.3, circumferenceMm: 48.0 },
  { size: 10, innerDiameterMm: 15.9, circumferenceMm: 50.0 },
  { size: 12, innerDiameterMm: 16.5, circumferenceMm: 51.9 },
  { size: 14, innerDiameterMm: 17.2, circumferenceMm: 54.0 },
  { size: 16, innerDiameterMm: 17.8, circumferenceMm: 56.0 },
  { size: 18, innerDiameterMm: 18.5, circumferenceMm: 58.1 },
  { size: 20, innerDiameterMm: 19.1, circumferenceMm: 60.1 },
  { size: 22, innerDiameterMm: 19.7, circumferenceMm: 62.0 },
  { size: 24, innerDiameterMm: 20.4, circumferenceMm: 64.1 }
];

export const JEWELLERY_CARE_TIPS = [
  {
    title: 'Proper Storage',
    description: 'Always store your gold and diamond jewellery in separate velvet-lined pouches or original Tanishq boxes to prevent scratches between gemstones.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Chemical & Perfume Protection',
    description: 'Apply perfumes, hairsprays, lotions, and cosmetics at least 10 minutes before wearing your jewellery. Chemicals in perfumes degrade polki lacquer and gold luster.',
    icon: 'Sparkles'
  },
  {
    title: 'Cleaning at Home',
    description: 'Lukewarm water with a few drops of mild baby shampoo. Gently brush with an ultra-soft toothbrush, rinse in clean water, and pat dry with lint-free microfiber.',
    icon: 'Droplets'
  },
  {
    title: 'Free In-Store Ultrasonic Spa',
    description: 'Visit any Tanishq showroom nationwide for complimentary ultrasonic deep cleaning, prong inspection, and Karatmeter purity verification.',
    icon: 'Award'
  }
];

export const TANISHQ_WEBSITE: BusinessWebsite = {
  id: 'tanishq',
  slug: 'tanishq',
  businessName: 'Tanishq',
  category: 'jewellery' as any,
  templateId: 'tanishq',
  tagline: 'India’s Most Trusted Jeweller · A TATA Enterprise',
  description: 'Official Tanishq Jewellery store experience. Explore BIS Hallmarked 22K & 18K gold jewellery, certified diamond solitaires, Rivaah bridal collections, modern Mia everyday wear, and 24K pure bullion coins with complete transparent billing and zero-loss gold exchange.',
  ownerName: 'Titan Company Limited (A TATA Enterprise)',
  phone: '1800 266 0123',
  whatsapp: '+91 80026 60123',
  email: 'customercare@tanishq.co.in',
  address: 'Tanishq Flagship, Linking Road, Bandra West, Mumbai & Nationwide 450+ Stores',
  city: 'Mumbai',
  mapsUrl: 'https://maps.google.com/?q=Tanishq+Bandra+Mumbai',
  openingHours: 'Mon - Sun: 10:30 AM – 8:30 PM IST',
  coverUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#832729', // Tanishq Burgundy
  secondaryColor: '#C59B27', // Royal Gold
  fontFamily: 'Playfair Display, serif',
  bookingType: 'appointment_slot' as any,
  bookingCtaLabel: 'View Demo',
  specialBadge: 'A TATA Enterprise · 100% BIS Hallmarked',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 49999,
  paymentStatus: 'paid',
  sections: [
    { id: 'about', title: 'The House of Tanishq', isEnabled: true, order: 1 },
    { id: 'offers', title: 'Promotional Offers & Festivals', isEnabled: true, order: 2 },
    { id: 'menu', title: 'Jewellery Catalogue', isEnabled: true, order: 3 },
    { id: 'gallery', title: 'Collections & Rivaah', isEnabled: true, order: 4 },
    { id: 'timings', title: 'Store Locations & Gold Rates', isEnabled: true, order: 5 },
    { id: 'contact', title: 'Concierge & Store Booking', isEnabled: true, order: 6 }
  ],
  offers: [
    {
      id: 'tan-offer-akshaya',
      title: 'Akshaya Tritiya Gold Making Discount',
      description: 'Up to 25% off on making charges of 22K gold & diamond jewellery. Plus 100% value on old gold exchange.',
      discountPercent: 25,
      couponCode: 'TATA25',
      isActive: true
    },
    {
      id: 'tan-offer-solitaire',
      title: 'Solitaire Festival Privilege',
      description: 'Complimentary 24K gold coin on purchase of diamond solitaires of 0.50 carat and above.',
      discountPercent: 10,
      couponCode: 'SOLITAIRE',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'tan-gal-1',
      title: 'Rivaah Bridal Gold & Polki Choker Suite',
      category: 'wedding',
      imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'tan-gal-2',
      title: 'Certified Solitaire Diamond Rings & Studs',
      category: 'diamonds',
      imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'tan-gal-3',
      title: 'Handcrafted Antique Filigree 22K Gold Kadas',
      category: 'gold',
      imageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'tan-gal-4',
      title: 'Mia Modern Lightweight Diamond Workwear',
      category: 'daily',
      imageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80'
    }
  ],
  items: [
    {
      id: 'item-tan-jhumka',
      name: 'Glorious Filigree 22K Gold Jhumkas',
      category: 'Earrings',
      price: 68450,
      description: 'Intricately handcrafted 22KT gold traditional dome jhumkas featuring delicate filigree drops.',
      isAvailable: true,
      badge: 'Bestseller'
    },
    {
      id: 'item-tan-solitaire-ring',
      name: 'Eternity Bloom Solitaire Diamond Ring',
      category: 'Finger Rings',
      price: 49500,
      description: 'Certified round brilliant diamond solitaire in 18KT rose gold. BIS Hallmarked.',
      isAvailable: true,
      badge: 'Under ₹50K'
    },
    {
      id: 'item-tan-mangalsutra',
      name: 'Dor Contemporary Solitaire Mangalsutra',
      category: 'Mangalsutra',
      price: 48500,
      description: 'Double-line auspicious black beads with diamond solitaire pendant in 18KT gold.',
      isAvailable: true,
      badge: 'Dor Signature'
    },
    {
      id: 'item-tan-rivaah-choker',
      name: 'Rivaah Grand Temple Choker Necklace Set',
      category: 'Necklaces & Sets',
      price: 345000,
      description: '22K yellow gold temple bridal choker with matching grand jhumkas and Goddess Lakshmi motif.',
      isAvailable: true,
      badge: 'Rivaah Bridal'
    },
    {
      id: 'item-tan-gold-coin',
      name: '24K Lakshmi Ganesha 5g Gold Coin',
      category: 'Gold Coins',
      price: 39500,
      description: '999.9 pure fine gold coin in tamper-proof certicard blister pack.',
      isAvailable: true,
      badge: '24K 999.9 Purity'
    }
  ]
};
