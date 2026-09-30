import { BusinessWebsite } from '../types';

export interface HomeSalonService {
  id: string;
  name: string;
  category: string;
  subCategory?: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercent: number;
  durationMinutes: number;
  rating: number;
  reviewsCount: number;
  imageUrl: string;
  shortDescription: string;
  details: string[];
  isBestseller?: boolean;
  isPopular?: boolean;
  packageIncludes?: string[];
}

export interface HomeSalonCategory {
  id: string;
  name: string;
  slug: string;
  icon: string;
  badge?: string;
  description: string;
}

export const HOME_SALON_CATEGORIES: HomeSalonCategory[] = [
  { id: 'all', name: 'All Services', slug: 'all', icon: '✨', description: 'Complete doorstep salon & spa catalog' },
  { id: 'packages-deals', name: 'Packages & Deals', slug: 'packages-deals', icon: '🎁', badge: 'Up to 55% OFF', description: 'Curated value combos for hair, skin & waxing' },
  { id: 'facial', name: 'Facial', slug: 'facial', icon: '💆‍♀️', badge: 'Top Rated', description: 'Hydrating, brightening & anti-aging facials' },
  { id: 'waxing', name: 'Waxing', slug: 'waxing', icon: '🍯', badge: 'Painless Rica', description: 'Hygienic strip & peel-off waxing for full body' },
  { id: 'mani-pedi', name: 'Mani & Pedi', slug: 'mani-pedi', icon: '💅', description: 'Spa manicures, pedicures & paraffin care' },
  { id: 'hair-care', name: 'Hair Care', slug: 'hair-care', icon: '💇‍♀️', description: 'L\'Oréal hair spa, keratin, color & blowouts' },
  { id: 'body-polishing', name: 'Body Polishing', slug: 'body-polishing', icon: '✨', description: 'Full body exfoliations, polishing & glowing packs' },
  { id: 'nail-art', name: 'Nail Art', slug: 'nail-art', icon: '💎', description: 'Gel overlays, extensions & trendy nail artistry' },
  { id: 'clean-up', name: 'Clean Up', slug: 'clean-up', icon: '🫧', description: 'Quick deep cleansing & blackhead extraction' },
  { id: 'bleach', name: 'Bleach', slug: 'bleach', icon: '🌟', description: 'Gold, diamond & oxy bleach for instant glow' },
  { id: 'de-tan', name: 'De-Tan', slug: 'de-tan', icon: '☀️', badge: 'Sun Tan Fix', description: 'Raaga & Sara natural de-tan treatments' },
  { id: 'body-massage', name: 'Body Massage', slug: 'body-massage', icon: '🌸', description: 'Swedish, deep tissue & aromatherapy massages for women' },
  { id: 'pre-bridal', name: 'Pre Bridal', slug: 'pre-bridal', icon: '👰‍♀️', badge: 'Custom Combos', description: 'Complete bridal transformation packages' },
];

export const HOME_SALON_SERVICES: HomeSalonService[] = [
  // Packages & Deals
  {
    id: 'pkg-head-to-toe',
    name: 'Head to Toe Radiance Combo',
    category: 'packages-deals',
    originalPrice: 3499,
    discountedPrice: 1699,
    discountPercent: 51,
    durationMinutes: 120,
    rating: 4.9,
    reviewsCount: 1420,
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80',
    shortDescription: 'Our #1 bestselling package: O3+ Glow Facial + Full Honey Waxing + Classic Mani-Pedi + Threading.',
    details: ['O3+ Whitening & Glow Facial (60 mins)', 'Full Arms + Full Legs + Underarms Waxing', 'Classic Manicure & Pedicure with cuticle care', 'Eyebrow shaping + Upper lip threading', 'Single-use sterilized kit used for every client'],
    isBestseller: true,
    packageIncludes: ['O3+ Whitening Facial', 'Full Honey Waxing', 'Classic Pedicure', 'Classic Manicure', 'Threading']
  },
  {
    id: 'pkg-glow-and-shine',
    name: 'Instant Glow Party Ready Pack',
    category: 'packages-deals',
    originalPrice: 2499,
    discountedPrice: 1199,
    discountPercent: 52,
    durationMinutes: 90,
    rating: 4.8,
    reviewsCount: 890,
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=80',
    shortDescription: 'Cheryl\'s Tan Clear Facial + Chocolate Wax + De-Tan Face Pack for luminous party skin.',
    details: ['Cheryl\'s Tan Clear Skin Facial', 'Full Arms & Half Legs Chocolate Wax', 'Face & Neck De-Tan Herbal Mask', 'Includes relaxing face and shoulder massage'],
    isPopular: true,
    packageIncludes: ['Cheryl\'s Facial', 'Chocolate Waxing', 'De-Tan Mask']
  },
  {
    id: 'pkg-rica-wax-combo',
    name: 'Painless Italian Rica Waxing Combo',
    category: 'packages-deals',
    originalPrice: 2200,
    discountedPrice: 1299,
    discountPercent: 41,
    durationMinutes: 60,
    rating: 4.9,
    reviewsCount: 2130,
    imageUrl: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=700&q=80',
    shortDescription: 'Full Arms + Full Legs + Underarms with authentic Italian Rica wax (Zero Colophony).',
    details: ['100% Authentic Rica White Chocolate Wax', 'No burning, no redness, less painful', 'Includes pre-wax gel & post-wax soothing oil', 'Single-use wooden spatulas & disposable bed sheet'],
    isBestseller: true
  },
  {
    id: 'pkg-deluxe-spa-weekend',
    name: 'Deluxe Weekend Reset Spa Package',
    category: 'packages-deals',
    originalPrice: 4200,
    discountedPrice: 2199,
    discountPercent: 48,
    durationMinutes: 150,
    rating: 4.9,
    reviewsCount: 650,
    imageUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=700&q=80',
    shortDescription: 'L\'Oréal Hair Spa + Crystal Pedicure + Raaga Facial + 30-min Back & Shoulder Massage.',
    details: ['L\'Oréal Professional Deep Nourishing Hair Spa with scalp steam', 'Crystal Jelly Spa Pedicure with scrub and massage', 'Raaga Platinum Radiance Facial', '30-minute stress-buster Back Massage'],
    packageIncludes: ['Hair Spa', 'Crystal Pedicure', 'Radiance Facial', 'Back Massage']
  },

  // Facial
  {
    id: 'fac-o3-whitening',
    name: 'O3+ Whitening & Brightening Facial',
    category: 'facial',
    originalPrice: 2499,
    discountedPrice: 1499,
    discountPercent: 40,
    durationMinutes: 65,
    rating: 4.9,
    reviewsCount: 3100,
    imageUrl: 'https://images.unsplash.com/photo-1512290900672-1f4142f3ea7b?auto=format&fit=crop&w=700&q=80',
    shortDescription: 'India\'s most loved whitening facial for pigmentation, uneven skin tone, and deep hydration.',
    details: ['7-step mono-dose sealed kit opened in front of you', 'Glycolic deep cleansing & oxygen infusion', 'Whitening peel-off rubber mask', 'Lymphatic face & neck massage with jade roller finish'],
    isBestseller: true
  },
  {
    id: 'fac-hydra-glow',
    name: 'Hydra Glow Anti-Oxidant Facial',
    category: 'facial',
    originalPrice: 2800,
    discountedPrice: 1799,
    discountPercent: 36,
    durationMinutes: 70,
    rating: 4.8,
    reviewsCount: 1450,
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80',
    shortDescription: 'Intense hyaluronic moisture boost for dry, tired and pollution-affected Mumbai skin.',
    details: ['Deep pore ultrasonic cavitation cleansing', 'Pure Hyaluronic acid + Vitamin E serum infusion', 'Cold globes soothing cryo-massage', 'Locks moisture for up to 14 days']
  },
  {
    id: 'fac-cheryls-tan-clear',
    name: 'Cheryl\'s Cosmeceuticals Tan Clear Facial',
    category: 'facial',
    originalPrice: 1800,
    discountedPrice: 1099,
    discountPercent: 39,
    durationMinutes: 50,
    rating: 4.7,
    reviewsCount: 920,
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=80',
    shortDescription: 'Scientifically calibrated formula to remove Mumbai sun tan and restore natural skin brightness.',
    details: ['Enzymatic skin exfoliation', 'Botanical lightening active complex', 'Cooling marine algae pack', 'Protects against UV damage']
  },
  {
    id: 'fac-vlcc-gold-glow',
    name: 'VLCC 24K Pure Gold Glow Facial',
    category: 'facial',
    originalPrice: 1999,
    discountedPrice: 1199,
    discountPercent: 40,
    durationMinutes: 55,
    rating: 4.8,
    reviewsCount: 780,
    imageUrl: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=700&q=80',
    shortDescription: 'Traditional 24k gold leaf bhasma therapy for firming, radiance, and festive bridal glow.',
    details: ['Gold scrub with natural extracts', 'Gold nourishing peel & gel massage', 'Gold dust peel-off mask', 'Immediate luminous radiance']
  },

  // Waxing
  {
    id: 'wax-full-body-rica',
    name: 'Full Body Rica Waxing (Excluding Bikini)',
    category: 'waxing',
    originalPrice: 2999,
    discountedPrice: 1799,
    discountPercent: 40,
    durationMinutes: 75,
    rating: 4.9,
    reviewsCount: 1890,
    imageUrl: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=700&q=80',
    shortDescription: 'Full Arms + Full Legs + Underarms + Front & Back with gentle Italian Rica wax.',
    details: ['Rica White Chocolate & Aloe Vera wax', 'Single-use cartridge & wooden sticks', 'Non-sticky, leaves skin velvet smooth', 'Includes Rica soothing post-epil oil application'],
    isBestseller: true
  },
  {
    id: 'wax-bikini-brazilian',
    name: 'Bikini / Brazilian Wax (Rica Peel-Off)',
    category: 'waxing',
    originalPrice: 1400,
    discountedPrice: 899,
    discountPercent: 36,
    durationMinutes: 30,
    rating: 4.9,
    reviewsCount: 2450,
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=700&q=80',
    shortDescription: 'Hygienic stripless Rica peel-off wax performed by senior certified female technicians with utmost privacy.',
    details: ['Zero colophony stripless hard wax', 'Medical-grade disposable gloves & sanitization', 'Gentle on intimate sensitive areas', '100% discreet and private']
  },
  {
    id: 'wax-arms-legs-honey',
    name: 'Full Arms + Full Legs Honey Waxing',
    category: 'waxing',
    originalPrice: 1100,
    discountedPrice: 649,
    discountPercent: 41,
    durationMinutes: 45,
    rating: 4.7,
    reviewsCount: 1650,
    imageUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=700&q=80',
    shortDescription: 'Everyday budget-friendly smooth waxing with natural honey wax and underarms included.',
    details: ['Pure herbal honey wax', 'Removes dead skin and fine hair', 'Sanitized equipment', 'Free Underarms waxing included']
  },

  // Mani & Pedi
  {
    id: 'mp-crystal-spa-pedicure',
    name: 'Crystal Jelly Spa Pedicure',
    category: 'mani-pedi',
    originalPrice: 1200,
    discountedPrice: 699,
    discountPercent: 42,
    durationMinutes: 50,
    rating: 4.9,
    reviewsCount: 1120,
    imageUrl: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=700&q=80',
    shortDescription: 'Warm jelly crystal soak that softens cracked heels, exfoliates calluses, and deeply relieves tired feet.',
    details: ['Aromatherapy jelly crystal soak', 'Callus heel rasping & cuticle cleaning', 'Walnut scrub & cooling mint mask', '15-minute foot reflexology pressure point massage', 'Nail shaping & polish of your choice'],
    isBestseller: true
  },
  {
    id: 'mp-deluxe-mani-pedi-duo',
    name: 'Deluxe Spa Manicure & Pedicure Duo',
    category: 'mani-pedi',
    originalPrice: 1800,
    discountedPrice: 1099,
    discountPercent: 39,
    durationMinutes: 75,
    rating: 4.8,
    reviewsCount: 1840,
    imageUrl: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=700&q=80',
    shortDescription: 'Complete hand & foot rejuvenation with milk bath soak, dead skin peel, and hydrating butter wrap.',
    details: ['Deep cuticle trim & nail shaping', 'Rose petal & milk soak', 'Hydrating shea butter massage', 'Sealed disposable buffer & filer kit included']
  },
  {
    id: 'mp-paraffin-wax-dip',
    name: 'Warm Paraffin Wax Treatment (Hands & Feet)',
    category: 'mani-pedi',
    originalPrice: 1400,
    discountedPrice: 799,
    discountPercent: 43,
    durationMinutes: 40,
    rating: 4.8,
    reviewsCount: 420,
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80',
    shortDescription: 'Deep thermal paraffin soak that melts away joint stiffness and restores dry cracked skin.',
    details: ['Warm therapeutic cosmetic paraffin dip', 'Deep thermal heat lock with cotton booties', 'Instant velvety baby-soft skin', 'Great for arthritis and dry winter skin']
  },

  // Hair Care
  {
    id: 'hair-loreal-spa',
    name: 'L\'Oréal Professionnel Deep Nourishing Hair Spa',
    category: 'hair-care',
    originalPrice: 1800,
    discountedPrice: 999,
    discountPercent: 45,
    durationMinutes: 60,
    rating: 4.9,
    reviewsCount: 2200,
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=700&q=80',
    shortDescription: 'Salon-grade L\'Oréal cream bath with concentrate ampoule, portable steam, and relaxing 25-min massage.',
    details: ['Diagnosis of hair damage & dryness', 'L\'Oréal Hair Spa cream bath application', 'Portable ultrasonic hair steam machine', 'Aromatherapy scalp, neck and shoulder massage', 'Serum infusion & professional blow-dry finish'],
    isBestseller: true
  },
  {
    id: 'hair-color-root-touchup',
    name: 'L\'Oréal Majirel Grey Coverage Root Touch-Up',
    category: 'hair-care',
    originalPrice: 1500,
    discountedPrice: 899,
    discountPercent: 40,
    durationMinutes: 50,
    rating: 4.8,
    reviewsCount: 1320,
    imageUrl: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=700&q=80',
    shortDescription: 'Ammonia-free 100% grey hair coverage with natural shine and long-lasting hair luster.',
    details: ['Authentic L\'Oréal Majirel / Inoa tube opened on site', 'Up to 2 inches of root coverage', 'Post-color conditioning wash & basic blowdry', 'No stain on ears or forehead']
  },
  {
    id: 'hair-keratin-botox',
    name: 'Brazilian Hair Botox & Frizz-Free Treatment',
    category: 'hair-care',
    originalPrice: 4500,
    discountedPrice: 2799,
    discountPercent: 38,
    durationMinutes: 120,
    rating: 4.9,
    reviewsCount: 540,
    imageUrl: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=700&q=80',
    shortDescription: 'Deep protein reconstruction that tames humidity-induced frizz common in coastal Mumbai.',
    details: ['Keratin & Collagen protein bond building', 'Removes 90% frizz while preserving natural bounce', 'Titanium iron heat sealing at optimal temperature', 'Lasts up to 3 to 4 months with proper care']
  },

  // Body Polishing
  {
    id: 'bp-full-body-glow',
    name: 'Full Body Exfoliating Polishing & Glow Wrap',
    category: 'body-polishing',
    originalPrice: 3500,
    discountedPrice: 1999,
    discountPercent: 43,
    durationMinutes: 90,
    rating: 4.9,
    reviewsCount: 680,
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80',
    shortDescription: 'Luxurious walnut & apricot body scrub followed by a brightening clay pack and satin oil finish.',
    details: ['30-min full body invigorating dry scrub', 'Removes dead skin cells, strawberry legs and bumps', 'Whitening mud body wrap with thermal foil', 'Warm towel wipe & nourishing body butter hydration']
  },
  {
    id: 'bp-back-shine',
    name: 'Back Polishing & Acne De-Tan Treatment',
    category: 'body-polishing',
    originalPrice: 1500,
    discountedPrice: 899,
    discountPercent: 40,
    durationMinutes: 40,
    rating: 4.7,
    reviewsCount: 390,
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=700&q=80',
    shortDescription: 'Special treatment for backless dress prep, removes back acne marks, blackheads and sun tanning.',
    details: ['Steaming & back deep cleansing', 'Salicylic acid exfoliation', 'De-tan clarifying herbal mask', 'Smooth, glowing back ready for weddings or parties']
  },

  // Nail Art
  {
    id: 'nail-gel-polish',
    name: 'Gel Nail Polish Overlay (Hands or Feet)',
    category: 'nail-art',
    originalPrice: 1200,
    discountedPrice: 699,
    discountPercent: 42,
    durationMinutes: 45,
    rating: 4.8,
    reviewsCount: 890,
    imageUrl: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=700&q=80',
    shortDescription: 'Chip-resistant high gloss UV/LED gel polish that stays flawless for up to 3 weeks.',
    details: ['Cuticle preparation & nail buffing', 'Base coat + 2 coats of premium gel color + top coat', 'UV LED curing lamp included', 'Over 120 trendy shades to choose from'],
    isPopular: true
  },
  {
    id: 'nail-french-extensions',
    name: 'Gel Extensions with French Tips / Chrome Finish',
    category: 'nail-art',
    originalPrice: 2500,
    discountedPrice: 1599,
    discountPercent: 36,
    durationMinutes: 90,
    rating: 4.9,
    reviewsCount: 460,
    imageUrl: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=700&q=80',
    shortDescription: 'Full set of lightweight gel nail tips with elegant French ombre or mirror chrome shine.',
    details: ['Sculpted gel tip extensions custom sized', 'Nail apex reinforcement for durability', 'French design or chrome powder glaze', 'Gentle removal instructions provided']
  },

  // Clean Up
  {
    id: 'cln-fruit-cleanup',
    name: 'Nature\'s Fruit Extract Refreshing Clean-Up',
    category: 'clean-up',
    originalPrice: 850,
    discountedPrice: 499,
    discountPercent: 41,
    durationMinutes: 35,
    rating: 4.7,
    reviewsCount: 1520,
    imageUrl: 'https://images.unsplash.com/photo-1512290900672-1f4142f3ea7b?auto=format&fit=crop&w=700&q=80',
    shortDescription: 'Quick 35-minute skin pick-me-up with papaya and citrus enzymes to clear pores and sebum.',
    details: ['Cleansing lotion & herbal scrub', 'Gentle blackhead & whitehead extraction', 'Soothing fruit hydration pack', 'Light day cream application with SPF']
  },
  {
    id: 'cln-detan-cleanup',
    name: 'Raaga De-Tan Purifying Clean-Up',
    category: 'clean-up',
    originalPrice: 1100,
    discountedPrice: 649,
    discountPercent: 41,
    durationMinutes: 40,
    rating: 4.8,
    reviewsCount: 980,
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=80',
    shortDescription: 'Kojic acid and milk cream clean-up designed to clear stubborn skin discoloration quickly.',
    details: ['Deep pore cleanser', 'Steaming with botanical exfoliant', 'Raaga active de-tan pack', 'Refreshes exhausted skin after Mumbai traffic']
  },

  // Bleach
  {
    id: 'blc-oxy-glow',
    name: 'Oxy Bleach for Face & Neck',
    category: 'bleach',
    originalPrice: 650,
    discountedPrice: 399,
    discountPercent: 39,
    durationMinutes: 25,
    rating: 4.6,
    reviewsCount: 1100,
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=80',
    shortDescription: 'Oxygen-infused formula that lightens facial hair to match your skin tone without stinging.',
    details: ['Patch test conducted before application', 'Zero ammonia irritation', 'Face, neck and ears covered', 'Immediate fair, uniform complexion']
  },
  {
    id: 'blc-gold-bleach',
    name: 'Gold Radiance Face & Body Bleach',
    category: 'bleach',
    originalPrice: 850,
    discountedPrice: 499,
    discountPercent: 41,
    durationMinutes: 30,
    rating: 4.7,
    reviewsCount: 750,
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80',
    shortDescription: 'Enriched with colloidal gold and saffron to impart an incandescent golden glow for special events.',
    details: ['Pre-bleach skin calming cream', 'Gold bleach activator blend', 'Post-bleach saffron cooling lotion', 'Perfect before weddings and festivals']
  },

  // De-Tan
  {
    id: 'dt-raaga-full-body',
    name: 'Raaga Full Body Herbal De-Tan Pack',
    category: 'de-tan',
    originalPrice: 2200,
    discountedPrice: 1299,
    discountPercent: 41,
    durationMinutes: 60,
    rating: 4.9,
    reviewsCount: 840,
    imageUrl: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=700&q=80',
    shortDescription: 'Milk protein and honey de-tan formulation for full arms, full legs, neck, and back.',
    details: ['100% natural kojic and lactic actives', 'Non-drying cream wash formula', 'Washes off Mumbai beach and commute tanning', 'Safe for all melanin-rich skin types']
  },
  {
    id: 'dt-face-neck-sara',
    name: 'Sara D-Tan Instant Radiance Mask (Face & Neck)',
    category: 'de-tan',
    originalPrice: 700,
    discountedPrice: 399,
    discountPercent: 43,
    durationMinutes: 25,
    rating: 4.8,
    reviewsCount: 1650,
    imageUrl: 'https://images.unsplash.com/photo-1512290900672-1f4142f3ea7b?auto=format&fit=crop&w=700&q=80',
    shortDescription: 'Quick targeted tan reversal with eucalyptus and peppermint cooling extracts.',
    details: ['Cleanses deep pores', 'Calms sun irritation and redness', 'No bleaching chemicals', 'Visibly clears tan in 20 minutes']
  },

  // Body Massage
  {
    id: 'msg-swedish-relaxing',
    name: 'Full Body Swedish Aromatherapy Massage',
    category: 'body-massage',
    originalPrice: 2600,
    discountedPrice: 1499,
    discountPercent: 42,
    durationMinutes: 60,
    rating: 4.9,
    reviewsCount: 1980,
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=700&q=80',
    shortDescription: 'Gentle long gliding strokes using pure cold-pressed almond & lavender oils to melt away stress.',
    details: ['Only trained and certified female masseuses for female clients', 'Disposable spa mattress cover and hygiene pack provided', 'Pressure adjusted to your personal comfort', 'Relieves chronic muscle stiffness, headache and fatigue'],
    isBestseller: true
  },
  {
    id: 'msg-deep-tissue-pain-relief',
    name: 'Deep Tissue & Potli Pain Relief Massage',
    category: 'body-massage',
    originalPrice: 3200,
    discountedPrice: 1899,
    discountPercent: 41,
    durationMinutes: 75,
    rating: 4.9,
    reviewsCount: 920,
    imageUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=700&q=80',
    shortDescription: 'Firm trigger-point therapy combined with warm Ayurvedic herbal potli stamps for deep relief.',
    details: ['Targets lower back ache, stiff neck and shoulders', 'Warm herbal potli infused with eucalyptus & camphor', 'Promotes blood circulation & lymphatic drainage', 'Leaves you completely rejuvenated and energized']
  },

  // Pre Bridal
  {
    id: 'pbr-silver-package',
    name: 'Pre-Bridal Radiance Silver Package (1 Day)',
    category: 'pre-bridal',
    originalPrice: 6500,
    discountedPrice: 3499,
    discountPercent: 46,
    durationMinutes: 180,
    rating: 4.9,
    reviewsCount: 420,
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80',
    shortDescription: 'Essential 1-day bridal prep: O3+ Bridal Facial + Full Rica Waxing + Deluxe Mani-Pedi + Full Body Bleach.',
    details: ['O3+ Bridal Glow Diamond Facial with collagen mask', 'Full Body Italian Rica Waxing with Bikini', 'Deluxe Spa Manicure & Pedicure with paraffin dip', 'Full Body De-Tan or Gold Bleach', 'Threading (Eyebrows, Upper Lip, Forehead, Chin)'],
    isPopular: true,
    packageIncludes: ['O3+ Bridal Facial', 'Full Body Rica Wax', 'Spa Mani-Pedi', 'Full Body Bleach/De-Tan', 'Threading']
  },
  {
    id: 'pbr-platinum-couture',
    name: 'Pre-Bridal Royal Platinum Package (2 Sessions)',
    category: 'pre-bridal',
    originalPrice: 12500,
    discountedPrice: 6499,
    discountPercent: 48,
    durationMinutes: 300,
    rating: 5.0,
    reviewsCount: 310,
    imageUrl: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=700&q=80',
    shortDescription: 'The ultimate luxury bride pampering across 2 home visits by our Master Bridal Stylist.',
    details: ['Session 1 (5 days before wedding): Full Body Polishing, L\'Oréal Hair Spa, Swedish Aromatherapy Massage', 'Session 2 (2 days before wedding): O3+ Diamond Bridal Facial, Full Rica Waxing with Brazilian, Crystal Jelly Mani-Pedi', 'Gel Nail Polish with Bridal Art', 'Complimentary Groom voucher worth ₹1,000'],
    isBestseller: true,
    packageIncludes: ['2 Home Visits', 'Full Body Polishing', 'Bridal Facial', 'Full Rica Waxing', 'Crystal Mani-Pedi', 'Hair Spa', 'Gel Nail Art']
  }
];

export const MUMBAI_LOCALITIES = [
  'Bandra West & East',
  'Andheri West (Lokhandwala, Oshiwara)',
  'Andheri East (Chakala, Marol)',
  'Juhu & Vile Parle',
  'Powai & Hiranandani Gardens',
  'South Mumbai (Colaba, Nariman Point, Marine Drive)',
  'Dadar, Prabhadevi & Worli',
  'Lower Parel & Mahalakshmi',
  'Santacruz & Khar',
  'Goregaon & Malad West',
  'Kandivali & Borivali West',
  'Ghatkopar & Chembur',
  'Mulund & Bhandup',
  'Thane West (Ghodbunder, Majiwada)',
  'Navi Mumbai (Vashi, Nerul, Belapur, Kharghar)'
];

export const AVAILABLE_CITIES = [
  { name: 'Mumbai', isCurrent: true, areasCount: 45 },
  { name: 'Thane', isCurrent: false, areasCount: 18 },
  { name: 'Navi Mumbai', isCurrent: false, areasCount: 22 },
  { name: 'Pune', isCurrent: false, areasCount: 34 },
  { name: 'Bengaluru', isCurrent: false, areasCount: 50 },
  { name: 'Delhi NCR', isCurrent: false, areasCount: 65 },
  { name: 'Hyderabad', isCurrent: false, areasCount: 28 }
];

export const HOME_SALON_PROMOS = [
  {
    code: 'MUMBAI50',
    title: 'Flat 50% OFF First Booking',
    description: 'Use code MUMBAI50 on combos above ₹1499. Valid exclusively across Mumbai, Thane & Navi Mumbai.',
    discount: '50% OFF'
  },
  {
    code: 'GLOW200',
    title: 'Instant ₹200 Cashback',
    description: 'Applicable on any facial or hair spa booked for this weekend.',
    discount: '₹200 OFF'
  },
  {
    code: 'BRIDE1000',
    title: '₹1,000 OFF Pre-Bridal',
    description: 'Special discount on all Silver & Platinum pre-bridal bookings.',
    discount: '₹1,000 OFF'
  }
];

export const HOME_SALON_SAFETY_POINTS = [
  {
    icon: '🛡️',
    title: '100% Sealed Mono-Dose Kits',
    description: 'Products are sealed at the factory in single-use sachets and unsealed right before your eyes. Zero refilling or dilution.'
  },
  {
    icon: '👩‍💼',
    title: 'Background-Verified Beauticians',
    description: '100% women beauticians with police verification, government ID checks, and minimum 5 years of top-salon experience.'
  },
  {
    icon: '✨',
    title: 'Mess-Free Post-Service Cleanup',
    description: 'We bring our own disposable sheets, bins, and towels. Your home is left completely spotless after the session.'
  },
  {
    icon: '🌡️',
    title: 'Daily Health & Sanitization Checks',
    description: 'Strict thermal logging, sanitized equipment, alcohol sprays, and PPE aprons for every single appointment.'
  }
];

export const HOME_SALON_REVIEWS = [
  {
    id: 'rev-1',
    author: 'Priyanka Sawant',
    locality: 'Bandra West, Mumbai',
    rating: 5,
    date: '3 days ago',
    service: 'Head to Toe Radiance Combo',
    comment: 'I was skeptical about home salon services until I tried Home Salon. Neeta arrived on dot with her trolley, laid down clean disposable sheets, and did an exceptional O3+ facial and Rica waxing. Saved me 3 hours of Mumbai traffic!'
  },
  {
    id: 'rev-2',
    author: 'Ananya Deshmukh',
    locality: 'Powai, Mumbai',
    rating: 5,
    date: '1 week ago',
    service: 'L\'Oréal Hair Spa & Crystal Pedicure',
    comment: 'The crystal pedicure is out of this world! My cracked heels felt completely smooth. The beautician was gentle, extremely courteous, and left my bathroom tidy. 10/10 recommendation.'
  },
  {
    id: 'rev-3',
    author: 'Sneha Kulkarni',
    locality: 'Juhu, Mumbai',
    rating: 5,
    date: '2 weeks ago',
    service: 'Pre-Bridal Platinum Package',
    comment: 'Booked their 2-session pre-bridal package before my wedding at Sea Princess. The bridal glow lasted through all 3 days of ceremonies! Worth every rupee compared to luxury salons charging ₹30,000.'
  },
  {
    id: 'rev-4',
    author: 'Ruchita Shah',
    locality: 'Andheri West, Mumbai',
    rating: 5,
    date: '3 weeks ago',
    service: 'Painless Italian Rica Waxing Combo',
    comment: 'Zero pain compared to regular salon waxing! The Rica wax they use is authentic Italian chocolate wax. No burns or sticky residue at all. So convenient with my 8-month-old baby at home.'
  }
];

export const HOME_SALON_FAQS = [
  {
    question: 'How do you maintain safety & hygiene at my home in Mumbai?',
    answer: 'Every Home Salon technician brings a pre-sterilized equipment kit, disposable bed cover sheets, mono-dose sealed cosmetic pouches (which are cut open in front of you), sanitized stainless steel tools, and disposable aprons. All technicians undergo police background verification.'
  },
  {
    question: 'What do I need to provide to the beautician?',
    answer: 'Very little! Just a clean chair, a small table or flat surface for her tools, access to a standard electrical socket (for waxing heaters or facial steamers), and warm water for pedicures or cleanups. We carry everything else including disposable towels and trash bags.'
  },
  {
    question: 'Are there any extra travel charges in Mumbai, Thane or Navi Mumbai?',
    answer: 'No! There are zero hidden travel charges. The price you see on the screen is inclusive of taxes, technician travel, and all single-use kit charges for minimum booking orders above ₹500.'
  },
  {
    question: 'What if I need to reschedule or cancel my booking?',
    answer: 'We offer free cancellation and 1-click rescheduling up to 2 hours before your scheduled appointment time with no cancellation penalties.'
  },
  {
    question: 'Can I choose a female beautician?',
    answer: 'Yes, 100% of our salon and beauty professionals are female experts catering exclusively to women and their families.'
  }
];

export const HOME_SALON_WEBSITE: BusinessWebsite = {
  id: 'home-salon',
  slug: 'home-salon',
  businessName: 'Home Salon',
  category: 'salon' as any,
  templateId: 'home-salon',
  tagline: 'Professional Salon & Spa at Home in Mumbai · Clean, Hygienic & Verified Beauticians',
  description: 'Home Salon delivers India\'s finest salon and spa treatments directly to your doorstep in Mumbai. Experience sealed mono-dose kits, painless Rica waxing, O3+ facials, L\'Oréal hair care, and relaxing body massages by verified senior female beauticians without stepping into Mumbai traffic.',
  ownerName: 'Home Salon Services Pvt Ltd',
  phone: '+91 91360 36036',
  whatsapp: '+91 91360 36036',
  email: 'care@homesalon.in',
  address: 'Mumbai Operations Hub, Link Road, Andheri West',
  city: 'Mumbai',
  mapsUrl: 'https://maps.google.com/?q=Home+Salon+Mumbai',
  openingHours: 'Mon - Sun: 8:00 AM – 8:00 PM IST',
  coverUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#E91E63',
  secondaryColor: '#FFD700',
  fontFamily: 'Inter',
  bookingType: 'appointment_consult' as any,
  bookingCtaLabel: 'View Demo',
  specialBadge: 'Doorstep Salon · Mumbai 45+ Localities',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 24999,
  paymentStatus: 'paid',
  sections: [
    { id: 'packages', title: 'Packages & Deals', isEnabled: true, order: 1 },
    { id: 'services', title: 'Doorstep Services', isEnabled: true, order: 2 },
    { id: 'safety', title: 'Safety & Hygiene Pledge', isEnabled: true, order: 3 },
    { id: 'reviews', title: 'Mumbai Customer Reviews', isEnabled: true, order: 4 },
    { id: 'faq', title: 'Frequently Asked Questions', isEnabled: true, order: 5 },
    { id: 'areas', title: 'Mumbai Localities Served', isEnabled: true, order: 6 }
  ],
  offers: [
    {
      id: 'hs-first-50',
      title: 'Flat 50% OFF First Booking',
      description: 'Use code MUMBAI50 on combos above ₹1499. Valid exclusively across Mumbai, Thane & Navi Mumbai.',
      discountPercent: 50,
      couponCode: 'MUMBAI50',
      isActive: true
    },
    {
      id: 'hs-weekend-reset',
      title: 'Weekend Spa Special',
      description: 'Get free O3+ eye treatment with any facial or hair spa booked for Saturday/Sunday.',
      discountPercent: 25,
      couponCode: 'GLOW200',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'hs-gal-1',
      title: 'Hygienic Home Setup with Disposable Sheets',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'hs-gal-2',
      title: 'O3+ Luxury Facial Therapy at Home',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1512290900672-1f4142f3ea7b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'hs-gal-3',
      title: 'Painless Rica Italian Chocolate Waxing',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'hs-gal-4',
      title: 'Crystal Jelly Spa Pedicure & Foot Reflexology',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80'
    }
  ],
  items: [
    {
      id: 'item-hs-1',
      name: 'Head to Toe Radiance Combo',
      category: 'Packages & Deals',
      price: 1699,
      description: 'O3+ Glow Facial + Full Honey Waxing + Classic Mani-Pedi + Threading at your doorstep.',
      isAvailable: true
    },
    {
      id: 'item-hs-2',
      name: 'O3+ Whitening & Brightening Facial',
      category: 'Facial',
      price: 1499,
      description: '7-step mono-dose sealed kit opened in front of you for deep pigmentation removal.',
      isAvailable: true
    },
    {
      id: 'item-hs-3',
      name: 'Painless Italian Rica Waxing Combo',
      category: 'Waxing',
      price: 1299,
      description: 'Full Arms + Full Legs + Underarms with authentic Italian Rica wax.',
      isAvailable: true
    },
    {
      id: 'item-hs-4',
      name: 'Crystal Jelly Spa Pedicure',
      category: 'Mani & Pedi',
      price: 699,
      description: 'Warm jelly crystal soak that softens cracked heels and relieves tired feet.',
      isAvailable: true
    },
    {
      id: 'item-hs-5',
      name: 'L\'Oréal Professionnel Hair Spa',
      category: 'Hair Care',
      price: 999,
      description: 'Deep nourishing hair spa with scalp steam and 25-min shoulder massage.',
      isAvailable: true
    }
  ]
};
