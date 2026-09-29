import { BusinessWebsite } from '../types';

export interface OnyxProduct {
  id: string;
  name: string;
  category: 'Single Origins' | 'Signature Blends' | 'Echelon Reserve' | 'Subscriptions';
  origin: string;
  producer: string;
  process: string;
  elevation: string;
  roastLevel: 'Light' | 'Medium-Light' | 'Medium' | 'Medium-Dark';
  scaScore: number;
  fobPricePaid: string; // e.g. "$4.85 / lb (240% above fair trade)"
  priceEur: number;
  priceInr: number;
  tastingNotes: string[];
  description: string;
  imageUrl: string;
  weight: string;
  inStock: boolean;
}

export interface OnyxBrewMethod {
  id: string;
  name: string;
  ratio: string;
  dose: string;
  water: string;
  temp: string;
  time: string;
  grind: string;
  notes: string;
}

export const ONYX_PRODUCTS: OnyxProduct[] = [
  {
    id: 'onyx-southern-weather',
    name: 'Southern Weather',
    category: 'Signature Blends',
    origin: 'Colombia & Ethiopia',
    producer: 'Various Smallholders (Huila & Yirgacheffe)',
    process: 'Washed & Natural Blend',
    elevation: '1,600 – 2,000 MASL',
    roastLevel: 'Medium-Light',
    scaScore: 88,
    fobPricePaid: '$4.90 / lb (220% above C-Market)',
    priceEur: 16.50,
    priceInr: 1650,
    tastingNotes: ['Milk Chocolate', 'Plum', 'Candied Walnuts', 'Juicy Citrus'],
    description: 'Our flagship blend. Strikes the delicate balance between modern juicy fruit acidity and traditional sweet chocolate body. Incredible as both pour-over and sweet modern espresso.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/1707/3261/files/el-salvador_749e2350-27dd-4640-b433-e28a7892db8e.webp?v=1788530294',
    weight: '250g / 10oz',
    inStock: true
  },
  {
    id: 'onyx-monarch',
    name: 'Monarch',
    category: 'Signature Blends',
    origin: 'Guatemala & Ethiopia',
    producer: 'Huehuetenango & Guji Smallholders',
    process: 'Washed & Natural',
    elevation: '1,700 – 2,100 MASL',
    roastLevel: 'Medium',
    scaScore: 87.5,
    fobPricePaid: '$4.75 / lb (210% above C-Market)',
    priceEur: 16.50,
    priceInr: 1650,
    tastingNotes: ['Dark Chocolate', 'Molasses', 'Dried Berries', 'Thick Crema'],
    description: 'Developed specifically to punch through milk with luxurious chocolate and syrup notes while retaining complexity as a straight espresso shot.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/1707/3261/files/kenya_86738ee2-426d-4fbb-b3f0-a939ec9fa107.webp?v=1788529946',
    weight: '250g / 10oz',
    inStock: true
  },
  {
    id: 'onyx-tropical-weather',
    name: 'Tropical Weather',
    category: 'Signature Blends',
    origin: 'Ethiopia & Costa Rica',
    producer: 'Gedeb & Tarrazu Microlots',
    process: 'Natural & Honey Processed',
    elevation: '1,800 – 2,200 MASL',
    roastLevel: 'Light',
    scaScore: 89,
    fobPricePaid: '$5.80 / lb (280% above C-Market)',
    priceEur: 18.50,
    priceInr: 1850,
    tastingNotes: ['Mango', 'Peach Tea', 'Jasmine Blossom', 'Sweet Melon'],
    description: 'An aromatic celebration of fruit-forward coffee processing. Bursting with ripe stone fruit, tropical passionfruit aromatics, and floral tea sweetness.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/1707/3261/files/el-salvador_749e2350-27dd-4640-b433-e28a7892db8e.webp?v=1788530294',
    weight: '250g / 10oz',
    inStock: true
  },
  {
    id: 'onyx-geometry',
    name: 'Geometry',
    category: 'Signature Blends',
    origin: 'Ethiopia & Colombia',
    producer: 'Washed Yirgacheffe & Nariño',
    process: 'Double Washed',
    elevation: '1,900 – 2,150 MASL',
    roastLevel: 'Light',
    scaScore: 88.5,
    fobPricePaid: '$5.20 / lb (245% above C-Market)',
    priceEur: 17.50,
    priceInr: 1750,
    tastingNotes: ['Sweet Berries', 'Wildflower Honey', 'Silky Body', 'Earl Grey'],
    description: 'The golden ratio of washed coffees. Clean, crisp, and linear with sparkling lemon verbena and delicate honey finish.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/1707/3261/files/kenya_86738ee2-426d-4fbb-b3f0-a939ec9fa107.webp?v=1788529946',
    weight: '250g / 10oz',
    inStock: true
  },
  {
    id: 'onyx-kenya-kamunyaka',
    name: 'Kenya Kamunyaka AA',
    category: 'Single Origins',
    origin: 'Embu, Kenya',
    producer: 'Kamunyaka Factory Smallholders',
    process: 'Traditional Double Washed & Soaked',
    elevation: '1,750 MASL',
    roastLevel: 'Light',
    scaScore: 89.5,
    fobPricePaid: '$7.50 / lb (350% above C-Market)',
    priceEur: 21.00,
    priceInr: 2100,
    tastingNotes: ['Blackcurrant', 'Grapefruit', 'Cane Sugar', 'Hibiscus'],
    description: 'A classic high-scoring Kenyan AA with brilliant phosphoric acidity and dense, jammy blackberry aromatics.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/1707/3261/files/kenya_86738ee2-426d-4fbb-b3f0-a939ec9fa107.webp?v=1788529946',
    weight: '250g / 10oz',
    inStock: true
  },
  {
    id: 'onyx-el-salvador-santa-rosa',
    name: 'El Salvador Santa Rosa Honey',
    category: 'Single Origins',
    origin: 'Chalatenango, El Salvador',
    producer: 'J.A. Hernandez & Family',
    process: 'Yellow Honey Processed',
    elevation: '1,600 MASL',
    roastLevel: 'Medium-Light',
    scaScore: 88.5,
    fobPricePaid: '$6.10 / lb (290% above C-Market)',
    priceEur: 19.50,
    priceInr: 1950,
    tastingNotes: ['Apricot Jam', 'Orange Blossom', 'Caramelized Honey'],
    description: 'Pulp dried with remaining mucilage under shade parabolic beds for deep sweetness and rounded floral balance.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/1707/3261/files/el-salvador_749e2350-27dd-4640-b433-e28a7892db8e.webp?v=1788530294',
    weight: '250g / 10oz',
    inStock: true
  },
  {
    id: 'onyx-panama-iris-gesha',
    name: 'Panama Iris Estate Ascension Gesha',
    category: 'Echelon Reserve',
    origin: 'Boquete, Panama',
    producer: 'Iris Estate (Echelon Collective)',
    process: 'Cold Anaerobic Slow Fermentation',
    elevation: '1,900 – 2,100 MASL',
    roastLevel: 'Light',
    scaScore: 92.5,
    fobPricePaid: '$48.00 / lb (Reserve Lot Auction)',
    priceEur: 89.95,
    priceInr: 8990,
    tastingNotes: ['Bergamot', 'Star Jasmine', 'White Peach', 'Champagne Finish'],
    description: 'Part of our ultra-exclusive Echelon collection. Hand-picked Geisha varietal showcasing the pinnacle of modern competition-grade coffee aromatics.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/1707/3261/files/echelon_15bf0a10-59fd-40c1-ba5e-09bb5ae24c1d.webp?v=1789155726',
    weight: '150g Luxury Box',
    inStock: true
  },
  {
    id: 'onyx-roaster-choice-sub',
    name: 'Roaster’s Choice Onyx EU Subscription',
    category: 'Subscriptions',
    origin: 'Curated Global Microlots',
    producer: 'Onyx Roasting Collective',
    process: 'Seasonal Rotations',
    elevation: 'Various',
    roastLevel: 'Light',
    scaScore: 89,
    fobPricePaid: 'Transparent Farm Gate Verified',
    priceEur: 32.00,
    priceInr: 3200,
    tastingNotes: ['Bi-Weekly or Monthly Curations', 'Exclusive Unreleased Microlots', 'Free EU & Global Shipping'],
    description: 'Never settle for good enough. Receive our head roaster’s favorite seasonal lots freshly roasted in Europe with comprehensive cupping sheets.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/1707/3261/files/el-salvador_749e2350-27dd-4640-b433-e28a7892db8e.webp?v=1788530294',
    weight: '2x 250g Monthly',
    inStock: true
  }
];

export const ONYX_BREW_METHODS: OnyxBrewMethod[] = [
  {
    id: 'onyx-kalita-wave',
    name: 'Kalita Wave 185 (Flat-Bottom)',
    ratio: '1:16',
    dose: '25g Coffee',
    water: '400g Water',
    temp: '96°C / 205°F',
    time: '3:30 Total Brew',
    grind: 'Medium (Baratza 18 / Comandante 24 clicks)',
    notes: 'Pour 50g bloom and wait 45s. Four continuous 100g pulses in steady gentle spirals for sweet, even extraction.'
  },
  {
    id: 'onyx-espresso',
    name: 'Modern Specialty Espresso',
    ratio: '1:2.2',
    dose: '19.5g Coffee in VST Basket',
    water: '43g Out',
    temp: '93.5°C / 200°F',
    time: '26 – 29 seconds',
    grind: 'Fine Espresso',
    notes: 'Pre-infusion 5 seconds at 3 bar, ramping to 8.5 bar. Produces velvety tactile syrup with sparkling fruit clarity.'
  },
  {
    id: 'onyx-v60',
    name: 'Hario V60 Single Cup',
    ratio: '1:16.6',
    dose: '15g Coffee',
    water: '250g Water',
    temp: '97°C',
    time: '2:45 Total Brew',
    grind: 'Medium-Fine',
    notes: '45g bloom for 40s. Single long continuous center pour keeping water level 1 inch above coffee bed.'
  }
];

export const ONYX_WEBSITE: BusinessWebsite = {
  id: 'brew-bloom-onyx',
  slug: 'brew-bloom-onyx',
  businessName: 'BREW & BLOOM — Avant-Garde Roastery (Onyx Coffee Lab EU Inspiration)',
  category: 'cafe',
  templateId: 'onyx-coffee',
  tagline: 'Never Settle For Good Enough · Specialty Coffee Roasters',
  description: 'High-luxury specialty coffee roaster and collective. Award-winning single origins, avant-garde processing, 100% price transparency, and European roastery.',
  ownerName: 'Andrea & Jon Allen / BREW & BLOOM',
  phone: '+31 20 894 3400',
  whatsapp: '31208943400',
  email: 'support@onyxcoffeelab.eu',
  address: 'Keizersgracht 482, 1016 GD Amsterdam, Netherlands',
  city: 'Amsterdam',
  state: 'North Holland',
  mapsUrl: 'https://maps.google.com/?q=Onyx+Coffee+Lab+Amsterdam',
  openingHours: 'Mon–Sun 8:00 AM – 7:00 PM',
  logoUrl: 'https://cdn.shopify.com/s/files/1/1707/3261/files/el-salvador_749e2350-27dd-4640-b433-e28a7892db8e.webp?v=1788530294',
  coverUrl: 'https://cdn.shopify.com/s/files/1/1707/3261/files/echelon_15bf0a10-59fd-40c1-ba5e-09bb5ae24c1d.webp?v=1789155726',
  primaryColor: '#0a0a0a',
  secondaryColor: '#c5a059',
  fontFamily: 'Space Grotesk',
  bookingType: 'table_reservation',
  bookingCtaLabel: 'Book Tasting Flight',
  specialBadge: 'Never Settle For Good Enough',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 1999,
  paymentStatus: 'paid',
  createdAt: '2026-02-15T08:00:00.000Z',
  updatedAt: '2026-09-29T14:00:00.000Z',
  sections: [
    { id: 'hero', title: 'Never Settle For Good Enough Manifesto', isEnabled: true, order: 1 },
    { id: 'blends', title: 'Signature Blends & Single Origins', isEnabled: true, order: 2 },
    { id: 'transparency', title: 'Radical Farm Gate Transparency', isEnabled: true, order: 3 },
    { id: 'quiz', title: 'Find My Roast Palate Quiz', isEnabled: true, order: 4 },
    { id: 'brew-guides', title: 'Extraction Science & Brew Guides', isEnabled: true, order: 5 },
    { id: 'collective', title: 'European Roasting Collective', isEnabled: true, order: 6 }
  ],
  items: ONYX_PRODUCTS.map(p => ({
    id: p.id,
    name: p.name,
    description: p.description,
    price: p.priceInr,
    category: p.category,
    imageUrl: p.imageUrl,
    isVeg: true,
    popular: true,
    badge: `SCA ${p.scaScore}`
  })),
  offers: [
    {
      id: 'offer-onyx-welcome',
      title: 'Free EU Shipping on 2+ Bags',
      discount: 'Complimentary Express Courier',
      code: 'NEVERSETTLE',
      description: 'Order 2 or more bags of specialty coffee and enjoy free courier dispatch.',
      validTill: '31 Dec 2026',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'gal-onyx-1',
      imageUrl: 'https://cdn.shopify.com/s/files/1/1707/3261/files/echelon_15bf0a10-59fd-40c1-ba5e-09bb5ae24c1d.webp?v=1789155726',
      title: 'Echelon Series Luxury Packaging',
      category: 'products'
    },
    {
      id: 'gal-onyx-2',
      imageUrl: 'https://cdn.shopify.com/s/files/1/1707/3261/files/kenya_86738ee2-426d-4fbb-b3f0-a939ec9fa107.webp?v=1788529946',
      title: 'European Roastery & Sensory Lab',
      category: 'interior'
    }
  ]
};

export interface OnyxFaq {
  category: 'EU Shipping & Customs' | 'Transparency & Pricing' | 'Roasting & Quality' | 'Subscriptions';
  question: string;
  answer: string;
}

export const ONYX_FAQS: OnyxFaq[] = [
  {
    category: 'EU Shipping & Customs',
    question: 'Where are EU orders roasted and dispatched from?',
    answer: 'All European orders are roasted and fulfilled directly from our European roastery facility in Amsterdam, Netherlands. This means zero import duties, no customs delays, and rapid 1-3 day delivery across the EU and UK via DPD and DHL Express.'
  },
  {
    category: 'Transparency & Pricing',
    question: 'What is FOB price and why do you publish it?',
    answer: 'Free On Board (FOB) is the actual price paid to farmers and export partners at origin port before ocean freight. We publish 100% transparent pricing data on every coffee bag—routinely paying between 200% and 400% above the commodity C-market price to guarantee generational farmer viability.'
  },
  {
    category: 'Roasting & Quality',
    question: 'What is your roast philosophy and grading standard?',
    answer: 'We roast on custom Loring S35 Kestrel convection roasters to produce unparalleled sugar browning without imparting conductive burn marks. We strictly cup and purchase coffees scoring 87+ on the SCA 100-point scale.'
  },
  {
    category: 'Subscriptions',
    question: 'How flexible is the Onyx EU Coffee Subscription?',
    answer: 'You can choose between Roaster’s Choice Single Origin, Signature Blends, or our rare Echelon Series. Shipments can be scheduled every 1, 2, 3, or 4 weeks. You can swap coffees, pause, or cancel at any moment with a single click in your customer portal.'
  }
];

export interface OnyxStoryChapter {
  id: string;
  title: string;
  subtitle: string;
  text: string;
  statLabel: string;
  statValue: string;
}

export const ONYX_STORY_CHAPTERS: OnyxStoryChapter[] = [
  {
    id: 'manifesto',
    title: 'Never Settle For Good Enough',
    subtitle: 'Our Foundational Standard',
    text: 'Onyx Coffee Lab was born from a refusal to accept average coffee. We believe coffee is culinary art: agricultural terroir, botanical taxonomy, and chemistry synthesized in a cup. We travel thousands of miles every harvest season to cup tables alongside our producer partners.',
    statLabel: 'Average SCA Cup Score',
    statValue: '88.5+'
  },
  {
    id: 'transparency',
    title: 'Radical Farm Gate Transparency',
    subtitle: 'Truth in Every Dollar Paid',
    text: 'While the specialty industry frequently conceals financial transactions behind vague labels, Onyx publishes every metric: FOB price paid, fair trade premium percentages, green cost, logistics, and lot size. When farmers prosper, coffee quality ascends.',
    statLabel: 'Above Commodity C-Price',
    statValue: '250%+'
  },
  {
    id: 'competition',
    title: 'World Barista Champions',
    subtitle: 'Relentless Competitive Mastery',
    text: 'Our baristas and educators have won multiple World Barista Championships and US Roaster Championships. We bring the exact championship extraction recipes, refractometer standards, and water chemistry to our customer community.',
    statLabel: 'National & Global Titles',
    statValue: '14 Podiums'
  }
];

export interface OnyxEducationTopic {
  title: string;
  badge: string;
  description: string;
  takeaways: string[];
}

export const ONYX_EDUCATION_TOPICS: OnyxEducationTopic[] = [
  {
    title: 'Total Dissolved Solids & Extraction Yield',
    badge: 'Extraction Science',
    description: 'Mastering the golden 18–22% extraction yield window. Learn how grind particle distribution, contact time, and water turbulence interact to prevent bitter over-extraction or sour under-extraction.',
    takeaways: ['Measure TDS with optical refractometers', 'Optimal target: 1.25% – 1.45% beverage strength', 'Adjust grind size before altering dose']
  },
  {
    title: 'Anaerobic & Carbonic Maceration Processing',
    badge: 'Fermentation Science',
    description: 'Sealing ripe coffee cherries in stainless steel tanks under positive carbon dioxide pressure creates lactic acid dominance, resulting in intense cinnamon, tropical fruit, and stone fruit flavour compounds.',
    takeaways: ['Controlled pH and temperature monitoring', 'Extended 72-120 hour fermentations', 'Elevated sweetness and wild aromatics']
  },
  {
    title: 'Water Mineralization for Specialty Coffee',
    badge: 'Water Chemistry',
    description: 'Magnesium ions extract delicate fruit aromatics and florals, while calcium extracts heavy cream and chocolate sugars. Bicarbonate buffers balance perceived malic and citric acidity.',
    takeaways: ['Use 100-120 mg/L total hardness', 'Target 40-50 mg/L alkalinity buffer', 'Avoid distilled water without remineralization']
  }
];
