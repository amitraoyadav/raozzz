import { BusinessWebsite } from '../types';

export interface BeautyBerryProduct {
  id: string;
  title: string;
  handle: string;
  category: 'lips' | 'eye' | 'face' | 'hair' | 'nails' | 'skin-care' | 'combo' | 'accessories' | 'bestseller' | 'sale' | 'new-launch';
  categoryLabel: string;
  subCategory?: string;
  subCategoryLabel?: string;
  price: number;
  compareAtPrice?: number;
  discountPercent?: number;
  rating: number;
  reviewsCount: number;
  isBestseller?: boolean;
  isNewLaunch?: boolean;
  isSoldOut?: boolean;
  badge?: string;
  images: string[];
  variants: {
    id: string;
    name: string;
    colorHex: string;
    inStock: boolean;
    image?: string;
  }[];
  description: string;
  features?: string[];
  howToUse?: string;
  ingredients?: string;
}

export interface BeautyBerryBlogArticle {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  content: string[];
}

export const BEAUTY_BERRY_PRODUCTS: BeautyBerryProduct[] = [
  // 1. BESTSELLERS
  {
    id: 'bb-prod-mascara-turbo',
    title: 'Beauty Berry Twin Turbo Dual Application Mascara',
    handle: 'beauty-berry-twin-turbo-dual-application-mascara',
    category: 'eye',
    categoryLabel: 'EYE',
    subCategory: 'mascara',
    subCategoryLabel: 'Mascara',
    price: 223,
    compareAtPrice: 279,
    discountPercent: 20,
    rating: 4.81,
    reviewsCount: 216,
    isBestseller: true,
    isNewLaunch: false,
    badge: 'BESTSELLER',
    images: [
      'https://www.beautyberry.co.in/cdn/shop/files/01_f9560437-6c66-447b-9aef-32439420364b.jpg?v=1747220319&width=720',
      'https://www.beautyberry.co.in/cdn/shop/files/02_6f494e20-501c-46a5-ad6a-72e514128745.jpg?v=1747220319&width=720'
    ],
    variants: [
      { id: 'v-mascara-black', name: 'Intense Jet Black', colorHex: '#101010', inStock: true }
    ],
    description: 'Transform your lashes with Beauty Berry Twin Turbo Dual Application Mascara! Engineered with an innovative dual-wand mechanism: Wand 1 delivers extreme length and feather-light separation, while Wand 2 pumps up dramatic volume and intense curve without clumping. Smudge-proof and sweat-resistant formula lasts up to 24 hours.',
    features: [
      'Innovative 2-in-1 Dual Application Wand',
      'Intense carbon black pigment for rich finish',
      'Smudge-proof, flake-proof, and waterproof wear',
      'Infused with Vitamin E and Castor Oil to condition lashes'
    ],
    howToUse: 'Step 1: Twist out Wand 1 for definition, comb through from roots to tips. Step 2: Twist Wand 2 to deposit dramatic volume and curl.',
    ingredients: 'Aqua, Copernicia Cerifera (Carnauba) Wax, Beeswax, Stearic Acid, Tocopherol (Vitamin E), Ricinus Communis (Castor) Seed Oil, CI 77499.'
  },
  {
    id: 'bb-prod-lipstick-soft-matte',
    title: 'Beauty Berry Soft & Matte Moisturizing & Velvet Lipstick',
    handle: 'beauty-berry-soft-matte-moisturizing-velvet-lipstick',
    category: 'lips',
    categoryLabel: 'LIPS',
    subCategory: 'lipstick',
    subCategoryLabel: 'Lipstick',
    price: 199,
    compareAtPrice: 249,
    discountPercent: 20,
    rating: 4.67,
    reviewsCount: 12,
    isBestseller: true,
    isNewLaunch: false,
    badge: 'BESTSELLER',
    images: [
      'https://www.beautyberry.co.in/cdn/shop/files/01_c27f83f4-e52c-4377-a04a-43c127b82fe8.jpg?v=1744263359&width=720',
      'https://www.beautyberry.co.in/cdn/shop/files/Shade-1.jpg?v=1744263359&width=720'
    ],
    variants: [
      { id: 'v-soft-01', name: '01 Rose Nude', colorHex: '#b25d64', inStock: true },
      { id: 'v-soft-02', name: '02 Berry Crush', colorHex: '#93283f', inStock: true },
      { id: 'v-soft-03', name: '03 Warm Mocha', colorHex: '#7f4437', inStock: true },
      { id: 'v-soft-04', name: '04 Cherry Crimson', colorHex: '#b01e2c', inStock: true }
    ],
    description: 'Experience pure velvet luxury on your lips! Beauty Berry Soft & Matte Moisturizing Lipstick delivers a cloud-like matte texture enriched with Shea Butter, Jojoba Oil, and Vitamin E to lock in hydration while delivering intense non-drying color payoff in a single swipe.',
    features: [
      'Velvety weightless soft-matte finish',
      'Non-drying, ultra-hydrating formula with Shea Butter',
      'High pigment concentration with 8-hour transfer resistance',
      'Paraben-free and cruelty-free formulation'
    ],
    howToUse: 'Glide directly across top and bottom lips starting from Cupid’s bow outward. Layer for heightened intensity.',
    ingredients: 'Dimethicone, Caprylic/Capric Triglyceride, Butyrospermum Parkii (Shea) Butter, Simmondsia Chinensis (Jojoba) Seed Oil, Tocopheryl Acetate, CI 77891, CI 15850.'
  },
  {
    id: 'bb-prod-nail-insta-dry',
    title: 'Beauty Berry Insta Dry Nail Lacquer',
    handle: 'beauty-berry-insta-dry-nail-lacquer',
    category: 'nails',
    categoryLabel: 'NAILS',
    subCategory: 'nail-paint',
    subCategoryLabel: 'Nail Paint',
    price: 179,
    compareAtPrice: 199,
    discountPercent: 10,
    rating: 5.0,
    reviewsCount: 48,
    isBestseller: true,
    isNewLaunch: false,
    badge: 'BESTSELLER',
    images: [
      'https://www.beautyberry.co.in/cdn/shop/files/01_d702faf2-6baa-404e-a7d9-ff1579793531.jpg?v=1744454162&width=720',
      'https://www.beautyberry.co.in/cdn/shop/files/02_d6eb32e9-c5d7-4090-b7a9-454662ffa2f5.jpg?v=1744454162&width=720'
    ],
    variants: [
      { id: 'v-nail-coral', name: 'Coral Pop', colorHex: '#e86d63', inStock: true },
      { id: 'v-nail-pastel', name: 'Pastel Lilac', colorHex: '#bda6d4', inStock: true },
      { id: 'v-nail-ruby', name: 'Ruby Glaze', colorHex: '#991122', inStock: true },
      { id: 'v-nail-nude', name: 'Almond Nude', colorHex: '#d8b9a2', inStock: true }
    ],
    description: 'Get salon-worthy gel-shine manicure in just 60 seconds! Beauty Berry Insta Dry Nail Lacquer features rapid-setting polymer technology for streak-free, chip-resistant coverage with a high-gloss gel finish that lasts up to 7 days.',
    features: [
      '60-second ultra-fast drying speed',
      'High-gloss plumping gel finish without UV lamp',
      'Chip-resistant wide flat applicator brush',
      'Toxin-free, 10-Free chemical safety'
    ],
    howToUse: 'Apply 1 thin coat on clean nails, let dry for 60 seconds, then apply second coat for rich opaque coverage.',
    ingredients: 'Butyl Acetate, Ethyl Acetate, Nitrocellulose, Acetyl Tributyl Citrate, Isopropyl Alcohol, Stearalkonium Bentonite.'
  },
  {
    id: 'bb-prod-lip-crayon-poppins',
    title: 'Beauty Berry Poppins Matte Lip Crayon',
    handle: 'beauty-berry-poppins-matte-lip-crayon',
    category: 'lips',
    categoryLabel: 'LIPS',
    subCategory: 'lipstick',
    subCategoryLabel: 'Lip Crayon',
    price: 251,
    compareAtPrice: 279,
    discountPercent: 10,
    rating: 4.88,
    reviewsCount: 168,
    isBestseller: true,
    isNewLaunch: false,
    badge: 'BESTSELLER',
    images: [
      'https://www.beautyberry.co.in/cdn/shop/files/01CRANBERRY_OpenWithSwtach.jpg?v=1736151648&width=720',
      'https://www.beautyberry.co.in/cdn/shop/files/01CRANBERRY_Close.jpg?v=1736151648&width=720'
    ],
    variants: [
      { id: 'v-pop-cranberry', name: '01 Cranberry Pop', colorHex: '#942239', inStock: true },
      { id: 'v-pop-peach', name: '02 Peachy Keen', colorHex: '#c96a5b', inStock: true },
      { id: 'v-pop-ruby', name: '03 Scarlet Red', colorHex: '#aa1927', inStock: true },
      { id: 'v-pop-toffee', name: '04 Toffee Cream', colorHex: '#8e4b3e', inStock: true }
    ],
    description: 'The viral Beauty Berry Poppins Matte Lip Crayon! Combines the precision of a lip liner with the rich, creamy coverage of a luxury lipstick. Retractable crayon design glides effortlessly across lips for all-day comfortable matte wear.',
    features: [
      'Precision crayon tip for sharp lining & full filling',
      'Weightless hydrating formulation with Argan Oil',
      '12-hour fade-resistant matte color',
      'No sharpener needed – easy twist-up mechanism'
    ],
    howToUse: 'Outline lips with the precision tip, then fill in the center with smooth, even strokes.',
    ingredients: 'Ricinus Communis Seed Oil, Polyethylene, Euphorbia Cerifera (Candelilla) Wax, Argania Spinosa (Argan) Kernel Oil, CI 77491, CI 15850.'
  },

  // 2. NEW LAUNCHES
  {
    id: 'bb-prod-concealer-true-tone',
    title: 'Beauty Berry True Tone Concealer Palette',
    handle: 'bb-true-tone-concealer-palette',
    category: 'face',
    categoryLabel: 'FACE',
    subCategory: 'concealer',
    subCategoryLabel: 'Concealer',
    price: 224,
    compareAtPrice: 249,
    discountPercent: 10,
    rating: 4.75,
    reviewsCount: 18,
    isBestseller: false,
    isNewLaunch: true,
    badge: '-10% OFF',
    images: [
      'https://www.beautyberry.co.in/cdn/shop/files/Artboard_1_6f0dd4f8-7f50-4863-824f-4f6c352bcaf3.jpg?v=1783147157&width=720',
      'https://www.beautyberry.co.in/cdn/shop/files/Artboard_2_copy_1d20c877-d1dd-4ea2-88f0-dd0d3778520f.jpg?v=1783147191&width=720'
    ],
    variants: [
      { id: 'v-palette-fair-medium', name: '6-in-1 Fair to Medium Palette', colorHex: '#d8ab87', inStock: true }
    ],
    description: 'Master correction, concealment and contouring in one compact palette! Beauty Berry True Tone Concealer Palette offers 6 blendable, buildable shades designed specifically for Indian skin tones. Smooth creamy consistency covers dark circles, pigmentation, redness and blemishes effortlessly.',
    features: [
      '6 versatile shades: Green (redness), Orange (dark circles), plus 4 skin tones',
      'Crease-proof waterproof creamy texture',
      'Enriched with hydrating squalane',
      'Ideal for highlighting and facial contouring'
    ],
    howToUse: 'Dab orange corrector over dark circles, green over acne spots. Apply matching skin shade and blend with damp sponge or brush.',
    ingredients: 'Caprylic/Capric Triglyceride, Ethylhexyl Palmitate, Cera Microcristallina, Squalane, Mica, CI 77891, CI 77492, CI 77288.'
  },
  {
    id: 'bb-prod-brush-set',
    title: 'Face & Eyes Brush Set (10 Pcs)',
    handle: 'face-eyes-brush-set',
    category: 'accessories',
    categoryLabel: 'ACCESSORIES',
    subCategory: 'brushes',
    subCategoryLabel: 'Brushes',
    price: 629,
    compareAtPrice: 699,
    discountPercent: 10,
    rating: 4.97,
    reviewsCount: 33,
    isBestseller: false,
    isNewLaunch: true,
    badge: '-10% OFF',
    images: [
      'https://www.beautyberry.co.in/cdn/shop/files/Artboard1_bd3f7784-52f3-4dc8-8592-d74a957e3799.png?v=1766400674&width=720',
      'https://www.beautyberry.co.in/cdn/shop/files/Artboard2_ad61793a-fb56-4ad3-b62c-62bce94701a6.png?v=1766400674&width=720'
    ],
    variants: [
      { id: 'v-brush-teal', name: '10-Piece Teal & Rose Gold Set', colorHex: '#71dbd4', inStock: true }
    ],
    description: 'Pro-level application at your fingertips! The 10-piece Beauty Berry Face & Eyes Brush Set includes all the essential tools for flawless foundation buffing, contouring, blush, eyeshadow blending, and precision brow work. Crafted with ultra-soft, 100% cruelty-free synthetic fibers that won’t shed.',
    features: [
      '10 Essential makeup brushes with ergonomic wooden handles',
      'Dense velvety synthetic bristles that absorb minimal product',
      'Rose gold metal ferrules for long-lasting durability',
      'Comes with chic protective travel pouch'
    ],
    howToUse: 'Use large fluffy brushes for powder and bronzer, flat tapered brushes for foundation, and fine dome brushes for eye blending.',
    ingredients: '100% Cruelty-Free Synthetic Taklon Fibers, Aluminum Ferrule, Solid Birchwood Handle.'
  },
  {
    id: 'bb-prod-eyeliner-lash-line',
    title: 'Lash Line Waterproof Eyeliner',
    handle: 'waterproof-eyeliner',
    category: 'eye',
    categoryLabel: 'EYE',
    subCategory: 'eyeliner',
    subCategoryLabel: 'Eyeliners',
    price: 224,
    compareAtPrice: 249,
    discountPercent: 10,
    rating: 4.8,
    reviewsCount: 22,
    isBestseller: false,
    isNewLaunch: true,
    isSoldOut: true,
    badge: 'Sold out',
    images: [
      'https://www.beautyberry.co.in/cdn/shop/files/01_1.png?v=1765359914&width=720',
      'https://www.beautyberry.co.in/cdn/shop/files/02_1.png?v=1765359914&width=720'
    ],
    variants: [
      { id: 'v-liner-black', name: 'Pitch Black 01', colorHex: '#000000', inStock: false }
    ],
    description: 'Create razor-sharp wings in seconds with Beauty Berry Lash Line Waterproof Eyeliner. Features an ultra-fine 0.1mm micro-felt tip that glides without skipping. Quick-drying waterproof polymer formulation guarantees 24-hour smudge-proof intensity.',
    features: [
      '0.1mm flexible precision felt-tip pen',
      'Matte pitch black payoff in one effortless stroke',
      'Waterproof, sweat-proof, and humidity-resistant',
      'Ophthalmologist tested, safe for contact lens wearers'
    ],
    howToUse: 'Shake well. Glide the tip along the lash line from inner corner outward. Flick up at outer edge for a winged look.',
    ingredients: 'Aqua, Acrylates Copolymer, Carbon Black (CI 77266), Propylene Glycol, Phenoxyethanol.'
  },
  {
    id: 'bb-prod-mascara-drama-queen',
    title: 'Drama Queen Waterproof Mascara',
    handle: 'waterproof-mascara',
    category: 'eye',
    categoryLabel: 'EYE',
    subCategory: 'mascara',
    subCategoryLabel: 'Mascara',
    price: 224,
    compareAtPrice: 249,
    discountPercent: 10,
    rating: 4.85,
    reviewsCount: 31,
    isBestseller: false,
    isNewLaunch: true,
    isSoldOut: true,
    badge: 'Sold out',
    images: [
      'https://www.beautyberry.co.in/cdn/shop/files/01.png?v=1765359344&width=720',
      'https://www.beautyberry.co.in/cdn/shop/files/02.png?v=1765359344&width=720'
    ],
    variants: [
      { id: 'v-drama-black', name: 'Midnight Black', colorHex: '#000000', inStock: false }
    ],
    description: 'Turn on the drama with Beauty Berry Drama Queen Waterproof Mascara! Formulated with lash-lengthening fibers and volumizing waxes that lift every single lash from root to tip for a false-lash effect that withstands tears, sweat, and rain.',
    features: [
      'Curved hourglass brush lifts and fans out lashes',
      'Smudge-proof waterproof formula for all-day hold',
      'No clumping or flaking throughout the day',
      'Easy removal with oil-based cleanser'
    ],
    howToUse: 'Wiggle brush at the base of lashes and sweep up toward tips. Apply 2-3 coats before formula sets.',
    ingredients: 'Isododecane, Cera Alba, Polybutene, Copernicia Cerifera Wax, Iron Oxides (CI 77499).'
  },

  // 3. MORE CORE REFERENCE CATALOGUE
  {
    id: 'bb-prod-sunscreen-vit-c',
    title: 'Vitamin C Sunscreen SPF 50 PA+++ (50g)',
    handle: 'vitamin-c-sunscreen-spf-50-pa',
    category: 'skin-care',
    categoryLabel: 'SKIN CARE',
    subCategory: 'sunscreen',
    subCategoryLabel: 'Sunscreen',
    price: 349,
    compareAtPrice: 399,
    discountPercent: 12,
    rating: 4.92,
    reviewsCount: 89,
    isBestseller: true,
    isNewLaunch: false,
    badge: 'HOT DEAL',
    images: [
      'https://www.beautyberry.co.in/cdn/shop/files/S-02_suncream_banner_new_Size.jpg?v=1759562265&width=720',
      'https://www.beautyberry.co.in/cdn/shop/files/Mobile_Size_Banner_S-02_f05183e1-d233-447c-a584-4a68947ff8d2.jpg?v=1769238210&width=720'
    ],
    variants: [
      { id: 'v-sun-50g', name: '50g Tube with Pump', colorHex: '#fcd34d', inStock: true }
    ],
    description: 'Shield your skin from damaging UVA/UVB rays with Beauty Berry Vitamin C Sunscreen SPF 50 PA+++. Lightweight, zero white-cast, non-greasy gel cream formula enriched with active Vitamin C and Niacinamide to brighten hyperpigmentation while protecting against sun damage.',
    features: [
      'Broad spectrum SPF 50 PA+++ UVA/UVB defense',
      'Infused with Vitamin C & Niacinamide for instant glow',
      '100% zero white cast on all Indian skin tones',
      'Water & sweat resistant for outdoor activities'
    ],
    howToUse: 'Apply liberally on face and neck 15 minutes before sun exposure. Reapply every 2 hours or after swimming.',
    ingredients: 'Aqua, Octinoxate, Niacinamide, Ethylhexyl Salicylate, Ascorbic Acid (Vitamin C), Aloe Barbadensis Leaf Juice.'
  },
  {
    id: 'bb-prod-illuminati-base',
    title: 'Beauty Berry Illuminati Base Primer & Highlighter',
    handle: 'beauty-berry-illuminati-base',
    category: 'face',
    categoryLabel: 'FACE',
    subCategory: 'primer',
    subCategoryLabel: 'Primer',
    price: 399,
    compareAtPrice: 499,
    discountPercent: 20,
    rating: 4.89,
    reviewsCount: 54,
    isBestseller: true,
    isNewLaunch: false,
    badge: 'REEL TRENDING',
    images: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=720&q=80',
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=720&q=80'
    ],
    variants: [
      { id: 'v-illumi-gold', name: 'Golden Glow', colorHex: '#e5c07b', inStock: true },
      { id: 'v-illumi-rose', name: 'Rose Quartz', colorHex: '#e0a4a6', inStock: true }
    ],
    description: 'Get that lit-from-within glass skin look! Beauty Berry Illuminati Base acts as a moisturizing makeup primer and liquid illuminator. Wear alone for radiant dewy bare skin, mix with foundation, or dab on high points of face as a glowing highlighter.',
    features: [
      'Micro-pearl particles for luminous glass skin finish',
      'Blurs pores and fine lines while extending makeup wear',
      'Non-sticky, lightweight fluid consistency',
      'Hyaluronic acid moisture-locking complex'
    ],
    howToUse: 'Smooth 1-2 pumps over moisturized face before foundation, or tap onto cheekbones and bridge of nose.',
    ingredients: 'Water, Cyclopentasiloxane, Mica, Dimethicone, Glycerin, Sodium Hyaluronate, Pearl Powder.'
  },
  {
    id: 'bb-prod-foundation-booster',
    title: 'Beauty Berry Beauty Booster Liquid Foundation',
    handle: 'beauty-berry-beauty-booster-foundation',
    category: 'face',
    categoryLabel: 'FACE',
    subCategory: 'foundation',
    subCategoryLabel: 'Foundation',
    price: 299,
    compareAtPrice: 349,
    discountPercent: 14,
    rating: 4.79,
    reviewsCount: 76,
    isBestseller: true,
    isNewLaunch: false,
    badge: 'BESTSELLER',
    images: [
      'https://images.unsplash.com/photo-1590156546946-ce55a12a6a5d?auto=format&fit=crop&w=720&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=720&q=80'
    ],
    variants: [
      { id: 'v-fnd-ivory', name: '01 Ivory Glow', colorHex: '#f3d3be', inStock: true },
      { id: 'v-fnd-natural', name: '02 Natural Beige', colorHex: '#e4b693', inStock: true },
      { id: 'v-fnd-warm', name: '03 Warm Sand', colorHex: '#cf986d', inStock: true },
      { id: 'v-fnd-honey', name: '04 Rich Honey', colorHex: '#b2754c', inStock: true }
    ],
    description: 'Weightless medium-to-full buildable coverage foundation with a natural skin-like satin finish. Water-resistant formula blurs blemishes, pores and uneven skin tone for up to 16 hours without oxidizing or caking.',
    features: [
      'Satin semi-matte finish that mimics real skin',
      'Oil-control formula with SPF 20 sun defense',
      'Breathable, lightweight serum-like texture',
      'Shades calibrated specifically for Indian undertones'
    ],
    howToUse: 'Pump onto back of hand, dot across forehead, cheeks and chin. Blend outwards with a damp beauty sponge.',
    ingredients: 'Water, Titanium Dioxide, Isododecane, Dimethicone, Silica, Niacinamide, Tocopherol.'
  },
  {
    id: 'bb-prod-lip-gloss-shine',
    title: 'Beauty Berry Glass Shine Plumping Lip Gloss',
    handle: 'beauty-berry-glass-shine-lip-gloss',
    category: 'lips',
    categoryLabel: 'LIPS',
    subCategory: 'lip-gloss',
    subCategoryLabel: 'Lips Gloss',
    price: 189,
    compareAtPrice: 219,
    discountPercent: 14,
    rating: 4.83,
    reviewsCount: 92,
    isBestseller: false,
    isNewLaunch: false,
    badge: 'NEW SHADES',
    images: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=720&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=720&q=80'
    ],
    variants: [
      { id: 'v-gloss-clear', name: '01 Crystal Clear', colorHex: '#f8fafc', inStock: true },
      { id: 'v-gloss-pink', name: '02 Berry Shimmer', colorHex: '#ec4899', inStock: true },
      { id: 'v-gloss-caramel', name: '03 Caramel Nude', colorHex: '#d97706', inStock: true }
    ],
    description: 'High-shine, mirror-like gloss with non-sticky comfort! Formulated with Peptides and Vitamin E to visibly plump lip contours while drenching lips in glassy shine and delicious vanilla berry aroma.',
    features: [
      'Ultra-glossy non-sticky cushion formula',
      'Visibly plumps fine lines for fuller looking lips',
      'Enriched with Coconut Oil and Vitamin E',
      'Oversized applicator delivers perfect amount in one swipe'
    ],
    howToUse: 'Swipe alone on bare lips for juicy glass shine, or layer over your favorite Beauty Berry lipstick.',
    ingredients: 'Polybutene, Mineral Oil, Silica Dimethyl Silylate, Fragrance, Tocopherol, Mica.'
  },
  {
    id: 'bb-prod-eyeshadow-palette',
    title: 'Beauty Berry 18-Color Sunset Desert Eyeshadow Palette',
    handle: 'beauty-berry-18-color-eyeshadow-palette',
    category: 'eye',
    categoryLabel: 'EYE',
    subCategory: 'eyeshadow',
    subCategoryLabel: 'Eyeshadow',
    price: 449,
    compareAtPrice: 499,
    discountPercent: 10,
    rating: 4.91,
    reviewsCount: 65,
    isBestseller: false,
    isNewLaunch: false,
    badge: '18 SHADES',
    images: [
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=720&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=720&q=80'
    ],
    variants: [
      { id: 'v-eye-18', name: '18 Sunset Palette', colorHex: '#c2410c', inStock: true }
    ],
    description: '18 ultra-pigmented shades featuring velvety mattes, metallic foils, duochromes, and pressed glitters. From soft everyday neutrals to dramatic festive sunset tones, this palette gives endless eye looks with seamless blendability.',
    features: [
      '18 Richly pigmented matte, shimmer, and glitter shades',
      'Velvety butter-soft texture with minimal fallout',
      'Long-wearing crease-resistant formula',
      'Built-in full-size vanity mirror'
    ],
    howToUse: 'Sweep neutral matte shade onto crease, press shimmer on eyelid center, and deepen outer corner with dark shade.',
    ingredients: 'Talc, Mica, Magnesium Stearate, Polyethylene, Mineral Oil, Dimethicone, CI 77491, CI 77891.'
  },
  {
    id: 'bb-prod-kohl-kajal',
    title: 'Beauty Berry Intense Matte Kohl & Kajal Pencil',
    handle: 'beauty-berry-kohl-kajal',
    category: 'eye',
    categoryLabel: 'EYE',
    subCategory: 'kohl-kajal',
    subCategoryLabel: 'Kohl & kajal',
    price: 149,
    compareAtPrice: 179,
    discountPercent: 16,
    rating: 4.88,
    reviewsCount: 140,
    isBestseller: true,
    isNewLaunch: false,
    badge: 'WATERPROOF',
    images: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=720&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=720&q=80'
    ],
    variants: [
      { id: 'v-kajal-black', name: 'Zesty Coal Black', colorHex: '#000000', inStock: true }
    ],
    description: 'Enriched with organic almond oil and chamomile extract, Beauty Berry Intense Kohl Kajal delivers intense jet-black pigment in one stroke. Safe for waterline application, smudge-proof, and waterproof up to 16 hours.',
    features: [
      'Glides effortlessly without tugging delicate eye area',
      'Waterproof & sweatproof – zero smudging or raccoon eyes',
      'Infused with Almond Oil and Chamomile to soothe eyes',
      'Suitable for sensitive eyes and contact lens wearers'
    ],
    howToUse: 'Glide along inner waterline and upper lash line. Use smudger for a smoky eye effect.',
    ingredients: 'Cyclopentasiloxane, Trimethylsiloxysilicate, Euphorbia Cerifera Wax, Prunus Amygdalus Dulcis (Sweet Almond) Oil, CI 77499.'
  },
  {
    id: 'bb-prod-hair-dryer',
    title: 'Beauty Berry Professional Ionic Hair Dryer 2000W',
    handle: 'beauty-berry-hair-dryer',
    category: 'hair',
    categoryLabel: 'HAIR',
    subCategory: 'hair-dryer',
    subCategoryLabel: 'Hair Dryer',
    price: 999,
    compareAtPrice: 1299,
    discountPercent: 23,
    rating: 4.76,
    reviewsCount: 29,
    isBestseller: false,
    isNewLaunch: false,
    badge: 'SALON GRADE',
    images: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=720&q=80',
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=720&q=80'
    ],
    variants: [
      { id: 'v-dryer-black-teal', name: 'Teal & Black 2000W', colorHex: '#71dbd4', inStock: true }
    ],
    description: 'Salon blow-dry in the comfort of your home! Powered by a 2000W high-velocity AC motor with negative ion conditioning technology to dry hair 50% faster while reducing frizz and locking in brilliant shine.',
    features: [
      '2000W powerful motor with 3 heat and 2 speed settings',
      'Cool shot button to lock styles in place',
      'Negative ion technology neutralizes static and frizz',
      'Includes precision concentrator nozzle and diffuser'
    ],
    howToUse: 'Towel dry hair, select desired heat/speed setting, section hair and dry from roots to tips. Finish with cool shot.',
    ingredients: 'High-Impact Polycarbonate, Tourmaline Ceramic Heating Core, Pure Copper Wire Motor.'
  },
  {
    id: 'bb-prod-bridal-kit',
    title: 'Beauty Berry All-In-One Complete Makeup Kit Combo',
    handle: 'beauty-berry-all-in-one-makeup-kit',
    category: 'combo',
    categoryLabel: 'COMBO',
    subCategory: 'makeup-kits',
    subCategoryLabel: 'Makeup Kits',
    price: 1199,
    compareAtPrice: 1499,
    discountPercent: 20,
    rating: 4.95,
    reviewsCount: 88,
    isBestseller: true,
    isNewLaunch: false,
    badge: 'SUPER VALUE COMBO',
    images: [
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=720&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=720&q=80'
    ],
    variants: [
      { id: 'v-kit-box', name: 'Complete 8-Piece Makeup Box', colorHex: '#71dbd4', inStock: true }
    ],
    description: 'The ultimate all-in-one beauty package! Contains 8 of Beauty Berry’s top-rated products: Foundation, Concealer Palette, Soft Matte Lipstick, Poppins Lip Crayon, Twin Turbo Mascara, Waterproof Eyeliner, Nail Lacquer, and Compact Powder with vanity box.',
    features: [
      'Includes 8 full-size bestselling makeup essentials',
      'Curated shades suitable for Indian skin tones',
      'Huge savings compared to buying individual products',
      'Comes in a gorgeous branded gift box'
    ],
    howToUse: 'Complete step-by-step makeover guide included inside the kit box.',
    ingredients: 'Complete kit containing foundation, concealer, lipsticks, mascara, eyeliner, nail lacquer, and compact.'
  }
];

export const BEAUTY_BERRY_BLOGS: BeautyBerryBlogArticle[] = [
  {
    id: 'blog-1',
    slug: 'how-to-apply-sunscreen-on-face',
    title: 'How to Apply Sunscreen on Face',
    author: 'Beauty Berry Cosmetics',
    date: 'February 24, 2026',
    image: 'https://www.beautyberry.co.in/cdn/shop/articles/s-2_Blog_1_1.jpg?v=1772103335&width=800',
    excerpt: 'Sunscreen is the undisputed holy grail of any skincare routine. Discover the two-finger rule, when to reapply over makeup, and why SPF 50 PA+++ is non-negotiable under Indian sun.',
    content: [
      'Sunscreen is the most vital step in your skincare routine. Without proper sun protection, all other serums and moisturizers cannot work effectively.',
      'The Two-Finger Rule: Squeeze two full strips of sunscreen along the length of your pointer and middle finger. This measures approximately 1/4 teaspoon, the clinically verified amount required for full facial and neck protection.',
      'Always apply sunscreen 15-20 minutes before stepping outdoors so chemical filters can bond to skin. Reapply every 2 hours if outdoors, sweating, or after swimming.',
      'Beauty Berry Vitamin C Sunscreen SPF 50 PA+++ provides broad spectrum protection while giving an instant non-greasy glow with zero white cast.'
    ]
  },
  {
    id: 'blog-2',
    slug: 'difference-between-bb-cream-and-cc-cream',
    title: 'Difference Between BB Cream and CC Cream',
    author: 'Beauty Berry Cosmetics',
    date: 'February 21, 2026',
    image: 'https://www.beautyberry.co.in/cdn/shop/articles/ChatGPT_Image_Feb_21_2026_12_33_01_PM.png?v=1771664722&width=800',
    excerpt: 'Confused between BB Cream (Blemish Balm) and CC Cream (Color Correcting)? Here is your definitive guide to texture, coverage, skin types, and everyday makeup styling.',
    content: [
      'Both BB and CC creams are versatile hybrids between skincare and makeup, but their formulation objectives differ substantially.',
      'BB Cream (Blemish Balm): Focuses on hydration, light tint, and nourishment. Perfect for dry to normal skin desiring a fresh no-makeup makeup look.',
      'CC Cream (Color Correcting): Designed to neutralize redness, dark spots, and discoloration. Slightly lighter consistency with a semi-matte finish ideal for oily and combination skin.',
      'Choose BB cream for everyday dewy errands, and CC cream when you need redness correction before foundation.'
    ]
  },
  {
    id: 'blog-3',
    slug: 'valentines-day-makeup-looks',
    title: 'Valentines Day Makeup Looks for Beginners - No Makeup Makeup Look',
    author: 'Beauty Berry Cosmetics',
    date: 'February 13, 2026',
    image: 'https://www.beautyberry.co.in/cdn/shop/articles/valentine.jpg?v=1771323084&width=800',
    excerpt: 'Master the effortless romantic glow with soft-focus skin, fluttery defined lashes, and a flushed berry lip stain in under 10 minutes.',
    content: [
      'The modern romantic look is all about fresh, radiant skin and soft romantic tints rather than heavy caked layers.',
      'Step 1: Prep with Beauty Berry Illuminati Base for a luminous candle-lit foundation glow.',
      'Step 2: Feather your brows and coat lashes with Twin Turbo Mascara for wide-awake romantic eyes.',
      'Step 3: Dab Poppins Lip Crayon in Cranberry Pop on the center of lips and blend outwards with your fingertip for that bitten petal stain.'
    ]
  },
  {
    id: 'blog-4',
    slug: 'types-of-foundation-coverage',
    title: 'Foundation Coverage Levels with Beauty Berry Foundation Picks for Each Type',
    author: 'Beauty Berry Cosmetics',
    date: 'January 18, 2026',
    image: 'https://www.beautyberry.co.in/cdn/shop/articles/HG-06_Banner_Blog_1_d3951192-fd1b-467a-990b-5ea27348c43e.jpg?v=1768887087&width=800',
    excerpt: 'Sheer, medium, full, or buildable? Find the right foundation finish for Indian climates, humidity, and your unique skin undertone.',
    content: [
      'Choosing the right foundation coverage can make or break your makeup look. Understanding sheer, medium, and full coverage allows you to adapt to daily office wear or bridal celebrations.',
      'Sheer Coverage: Evens out tone while letting natural skin and freckles show through. Best for everyday college or gym wear.',
      'Medium Buildable: Blurs pigmentation while maintaining a lightweight feel. Beauty Berry Beauty Booster Foundation is our customer favorite in this category.',
      'Full Coverage: Hides all blemishes, scars, and tattoos for photoshoot-ready perfection.'
    ]
  }
];

export const BEAUTY_BERRY_WEBSITE: BusinessWebsite = {
  id: 'beauty-berry',
  slug: 'beauty-berry',
  businessName: 'Beauty Berry',
  category: 'beauty_cosmetics' as any,
  templateId: 'beauty-berry',
  tagline: 'Buy Beauty and Cosmetics Products Online · Premier Makeup Brand',
  description: 'Official Beauty Berry beauty store. Delivering top-tier makeup essentials including Lipsticks, Eyeliner, Foundation, Concealer Palettes, and Eyelashes, addressing diverse makeup demands with free delivery above Rs. 499 and 10% instant prepaid discounts.',
  ownerName: 'Beauty Berry Cosmetics Pvt. Ltd.',
  phone: '+91 98711 23456',
  whatsapp: '+91 98711 23456',
  email: 'care@beautyberry.co.in',
  address: 'Beauty Berry Corporate Center, D-Block, Netaji Subhash Place, Pitampura, New Delhi, Delhi 110034',
  city: 'New Delhi',
  mapsUrl: 'https://maps.google.com/?q=Beauty+Berry+Cosmetics+Delhi',
  openingHours: 'Mon - Sun: 10:00 AM – 8:00 PM IST',
  coverUrl: 'https://www.beautyberry.co.in/cdn/shop/files/M-2_banner_Gif_New_Size.gif?v=1776503219&width=1600',
  primaryColor: '#71DBD4', // Beauty Berry signature turquoise/teal
  secondaryColor: '#000000',
  fontFamily: 'Montserrat, sans-serif',
  bookingType: 'whatsapp_order' as any,
  bookingCtaLabel: 'View Demo',
  specialBadge: 'Free Delivery Above ₹499 · 10% Instant Prepaid Off',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 49999,
  paymentStatus: 'paid',
  sections: [
    { id: 'hero', title: 'Featured Launches', isEnabled: true, order: 1 },
    { id: 'bestsellers', title: 'Best Sellers', isEnabled: true, order: 2 },
    { id: 'offers', title: 'Deals & Discounts', isEnabled: true, order: 3 },
    { id: 'new_launches', title: 'New Launches', isEnabled: true, order: 4 },
    { id: 'reels', title: 'Shop By Product', isEnabled: true, order: 5 },
    { id: 'blog', title: 'Beauty Tips & Articles', isEnabled: true, order: 6 },
    { id: 'newsletter', title: 'Newsletter', isEnabled: true, order: 7 }
  ],
  offers: [
    {
      id: 'bb-offer-free-delivery',
      title: 'Free Delivery On All Orders Above Rs. 499/-',
      description: 'Shop over ₹499 and enjoy 100% free delivery across India.',
      discountPercent: 0,
      couponCode: 'FREESHIP499',
      isActive: true
    },
    {
      id: 'bb-offer-prepaid-discount',
      title: '10% Instant Discount On All Prepaid Orders',
      description: 'Pay via UPI, Cards, or NetBanking to get instant 10% off at checkout.',
      discountPercent: 10,
      couponCode: 'PREPAID10',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'bb-gal-1',
      title: 'Twin Turbo Dual Wand Mascara',
      category: 'eye',
      imageUrl: 'https://www.beautyberry.co.in/cdn/shop/files/01_f9560437-6c66-447b-9aef-32439420364b.jpg?v=1747220319&width=720'
    },
    {
      id: 'bb-gal-2',
      title: 'Soft & Matte Velvet Lipstick Shades',
      category: 'lips',
      imageUrl: 'https://www.beautyberry.co.in/cdn/shop/files/01_c27f83f4-e52c-4377-a04a-43c127b82fe8.jpg?v=1744263359&width=720'
    },
    {
      id: 'bb-gal-3',
      title: 'Insta Dry 60-Second Nail Lacquers',
      category: 'nails',
      imageUrl: 'https://www.beautyberry.co.in/cdn/shop/files/01_d702faf2-6baa-404e-a7d9-ff1579793531.jpg?v=1744454162&width=720'
    },
    {
      id: 'bb-gal-4',
      title: 'Face & Eyes 10-Piece Luxury Brush Set',
      category: 'accessories',
      imageUrl: 'https://www.beautyberry.co.in/cdn/shop/files/Artboard1_bd3f7784-52f3-4dc8-8592-d74a957e3799.png?v=1766400674&width=720'
    }
  ],
  items: [
    {
      id: 'item-bb-mascara',
      name: 'Beauty Berry Twin Turbo Dual Application Mascara',
      category: 'Eye',
      price: 223,
      description: '2-in-1 dual application wand mascara for extreme length, volume and curl. Long lasting smudge-proof formula.',
      isAvailable: true,
      badge: 'Bestseller'
    },
    {
      id: 'item-bb-lipstick',
      name: 'Beauty Berry Soft & Matte Moisturizing Lipstick',
      category: 'Lips',
      price: 199,
      description: 'Velvet soft matte lipstick enriched with Shea Butter & Jojoba Oil for 8-hour hydration.',
      isAvailable: true,
      badge: 'Bestseller'
    },
    {
      id: 'item-bb-nail',
      name: 'Beauty Berry Insta Dry Nail Lacquer',
      category: 'Nails',
      price: 179,
      description: '60-second fast drying gel shine nail polish in high-pigment chip-resistant formula.',
      isAvailable: true,
      badge: 'Bestseller'
    },
    {
      id: 'item-bb-crayon',
      name: 'Beauty Berry Poppins Matte Lip Crayon',
      category: 'Lips',
      price: 251,
      description: 'Precision lip liner and matte lipstick in one retractable crayon with Argan Oil.',
      isAvailable: true,
      badge: '-10% Off'
    },
    {
      id: 'item-bb-concealer',
      name: 'Beauty Berry True Tone Concealer Palette',
      category: 'Face',
      price: 224,
      description: '6-in-1 corrective, concealing, and contouring palette with creamy buildable texture.',
      isAvailable: true,
      badge: 'New Launch'
    }
  ]
};
