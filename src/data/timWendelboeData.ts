import { BusinessWebsite } from '../types';

export interface TimWendelboeProduct {
  id: string;
  name: string;
  category: 'Filter Coffee' | 'Espresso Coffee' | 'Subscriptions' | 'Equipment' | 'Tastings';
  origin: string;
  producer: string;
  varietal: string;
  process: string;
  harvest: string;
  altitude: string;
  priceNok: number;
  priceInr: number;
  tastingNotes: string[];
  description: string;
  imageUrl: string;
  roastStyle: 'Light Nordic Filter' | 'Light Nordic Espresso' | 'Omni Roast';
  weight: string;
  inStock: boolean;
}

export interface TimWendelboeBrewGuide {
  id: string;
  title: string;
  device: string;
  coffeeGrams: number;
  waterGrams: number;
  ratio: string;
  waterTemp: string;
  grindSize: string;
  brewTime: string;
  steps: string[];
  tips: string;
}

export interface TimWendelboeFarm {
  id: string;
  farmName: string;
  country: string;
  region: string;
  producer: string;
  partnerSince: number;
  altitude: string;
  varietals: string[];
  story: string;
  imageUrl: string;
}

export const TIM_WENDELBOE_PRODUCTS: TimWendelboeProduct[] = [
  {
    id: 'tw-caballero-catuai',
    name: 'Caballero Catuaí Filter',
    category: 'Filter Coffee',
    origin: 'Marcala, Honduras',
    producer: 'Marysabel Caballero & Moises Herrera',
    varietal: 'Red Catuaí',
    process: 'Washed',
    harvest: 'March 2026',
    altitude: '1,600 MASL',
    priceNok: 227,
    priceInr: 1750,
    tastingNotes: ['Sweet Plum', 'Red Apple', 'Milk Chocolate', 'Cane Sugar'],
    description: 'A benchmark washed Honduran coffee from our close friends Marysabel and Moises. Exceptionally sweet, clean, and balanced with juicy red fruit and milk chocolate finish.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0738/6113/6597/files/Catuai-Filter-Webshop.webp?v=1790257975',
    roastStyle: 'Light Nordic Filter',
    weight: '250g',
    inStock: true
  },
  {
    id: 'tw-tamana-colombia',
    name: 'Finca Tamana Variedad Colombia Espresso',
    category: 'Espresso Coffee',
    origin: 'Huila, Colombia',
    producer: 'Elias Roa',
    varietal: 'Variedad Colombia',
    process: 'Washed, 24h Dry Fermentation',
    harvest: 'January 2026',
    altitude: '1,650 – 1,750 MASL',
    priceNok: 227,
    priceInr: 1750,
    tastingNotes: ['Caramel', 'Orange Blossom', 'Stone Fruit', 'Creamy Body'],
    description: 'Our ongoing agronomy and soil project with Elias Roa in El Pital, Huila. Roasted specifically for sweet, floral espresso shots with lingering panela sweetness.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0738/6113/6597/files/FincaTamanaColombiaEspresso-WEBSHOP.webp?v=1785750909',
    roastStyle: 'Light Nordic Espresso',
    weight: '250g',
    inStock: true
  },
  {
    id: 'tw-pirineos-pacamara',
    name: 'Los Pirineos Pacamara Filter',
    category: 'Filter Coffee',
    origin: 'Usulután, El Salvador',
    producer: 'Diego Baraona',
    varietal: 'Pacamara',
    process: 'Washed',
    harvest: 'February 2026',
    altitude: '1,500 MASL',
    priceNok: 225,
    priceInr: 1720,
    tastingNotes: ['Pink Grapefruit', 'Bergamot', 'Apricot', 'Jasmine'],
    description: 'A stellar Pacamara lot from the legendary Los Pirineos farm perched on the Tecapa volcano. Vibrant citric acidity paired with intense white floral perfumes.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0738/6113/6597/files/LosPirineosPacamaraFilter-WEBSHOP_4585f953-a12d-4790-8286-ae71d423e898.webp?v=1785757614',
    roastStyle: 'Light Nordic Filter',
    weight: '250g',
    inStock: true
  },
  {
    id: 'tw-karinga-kenya',
    name: 'Karinga AA Kenya Filter',
    category: 'Filter Coffee',
    origin: 'Kiambu, Kenya',
    producer: 'Karinga Coffee Factory Smallholders',
    varietal: 'SL28 & SL34',
    process: 'Washed, Soaked in Clean Mountain Water',
    harvest: 'December 2025 / January 2026',
    altitude: '1,800 MASL',
    priceNok: 245,
    priceInr: 1880,
    tastingNotes: ['Blackcurrant', 'Red Rhubarb', 'Hibiscus', 'Sparkling Lime'],
    description: 'The archetype of classic Kenyan terroir. High phosphoric sparkling acidity, bursting blackcurrant and red berry notes with complex floral sweetness.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0738/6113/6597/files/Filter.png?v=1776323028',
    roastStyle: 'Light Nordic Filter',
    weight: '250g',
    inStock: true
  },
  {
    id: 'tw-echemo-ethiopia',
    name: 'Echemo Organic Ethiopia Filter',
    category: 'Filter Coffee',
    origin: 'Jimma / Agaro, Ethiopia',
    producer: 'Mustefa Abakeno',
    varietal: 'Heirloom / 74110 & 74112',
    process: 'Washed Organic',
    harvest: 'January 2026',
    altitude: '2,000 MASL',
    priceNok: 235,
    priceInr: 1800,
    tastingNotes: ['Peach Iced Tea', 'Jasmine Blossom', 'Meyer Lemon', 'Honey'],
    description: 'Grown under pristine native forest canopies in Western Ethiopia. Silky tea-like delicacy with fragrant honeysuckle and ripe white peach notes.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0738/6113/6597/files/Catuai-Filter-Webshop.webp?v=1790257975',
    roastStyle: 'Light Nordic Filter',
    weight: '250g',
    inStock: true
  },
  {
    id: 'tw-sub-2bags',
    name: 'Nordic Monthly Coffee Subscription (2 Bags)',
    category: 'Subscriptions',
    origin: 'Curated Monthly Origins',
    producer: 'Various Partner Estates',
    varietal: 'Seasonal Microlots',
    process: 'Washed & Naturals',
    harvest: 'Peak Seasonal Pickings',
    altitude: '1,500 – 2,100 MASL',
    priceNok: 410,
    priceInr: 3150,
    tastingNotes: ['Curated Monthly Selections', 'Freshly Roasted & Shipped', 'Origin Story Cards Included'],
    description: 'Receive 2 fresh 250g bags of our favorite current seasonal roasts directly to your door every month. Free international and domestic shipping available.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0738/6113/6597/files/hjemme-tim-w-14_1_36371c63-bf93-4d8f-84e8-ef4e52a914bf.jpg?v=1763640526',
    roastStyle: 'Light Nordic Filter',
    weight: '2x 250g (Monthly)',
    inStock: true
  },
  {
    id: 'tw-wilfa-uniform',
    name: 'Wilfa Uniform Precision Grinder',
    category: 'Equipment',
    origin: 'Designed in Norway',
    producer: 'Wilfa & Tim Wendelboe',
    varietal: '58mm Wide Stainless Steel Flat Burrs',
    process: '41 Precision Step Settings',
    harvest: '2026 Model',
    altitude: 'N/A',
    priceNok: 3499,
    priceInr: 26900,
    tastingNotes: ['Ultra-Uniform Particle Distribution', 'Integrated Scale Lid', 'Low RPM Motor'],
    description: 'Co-developed with Tim Wendelboe. Wide 58mm Italian flat burrs deliver cafe-quality extraction clarity for filter, pour-over, and home espresso.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0738/6113/6597/files/Filter.png?v=1776323028',
    roastStyle: 'Omni Roast',
    weight: '3.5 kg',
    inStock: true
  },
  {
    id: 'tw-aeropress-original',
    name: 'AeroPress Original Coffee Maker',
    category: 'Equipment',
    origin: 'Palo Alto, USA',
    producer: 'AeroPress Inc.',
    varietal: 'BPA-Free Polypropylene',
    process: 'Rapid Full-Immersion Pressure',
    harvest: 'Latest Edition',
    altitude: 'N/A',
    priceNok: 499,
    priceInr: 3850,
    tastingNotes: ['World Barista Champion Method', 'Clean Sweet Extraction', 'Portable & Indestructible'],
    description: 'The brew tool used to win the World Barista Championship. Simple, consistent, and highlights delicate floral and fruit acids in Nordic light roasts.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0738/6113/6597/files/Catuai-Filter-Webshop.webp?v=1790257975',
    roastStyle: 'Omni Roast',
    weight: '350g',
    inStock: true
  }
];

export const TIM_WENDELBOE_BREW_GUIDES: TimWendelboeBrewGuide[] = [
  {
    id: 'guide-aeropress',
    title: 'The World Barista Champion AeroPress Method',
    device: 'AeroPress (Standard Position)',
    coffeeGrams: 14,
    waterGrams: 200,
    ratio: '1:14.3',
    waterTemp: '96°C / 205°F',
    grindSize: 'Medium-Fine (like fine sea salt)',
    brewTime: '1 minute 45 seconds',
    steps: [
      'Rinse paper filter with hot water to remove paper taste and pre-heat the chamber.',
      'Assemble AeroPress upright directly on top of a warm ceramic server.',
      'Add 14g freshly ground light roast coffee and shake gently to level the bed.',
      'Start timer. Pour 200g of 96°C water aggressively over the coffee in under 15 seconds.',
      'Stir gently back-and-forth 3 times with the paddle to ensure complete saturation.',
      'Place plunger slightly in top to create a vacuum seal; prevents coffee from dripping through.',
      'At 1:00, remove plunger, stir gently 3 times, replace plunger.',
      'At 1:15, press down steadily with light forearm pressure for 30 seconds. Stop when hissing starts.'
    ],
    tips: 'Use soft water with low minerality (50-80 ppm TDS) for maximum floral transparency.'
  },
  {
    id: 'guide-v60',
    title: 'Hario V60 Precision Pour-Over',
    device: 'Hario V60 02 (Ceramic or Plastic)',
    coffeeGrams: 20,
    waterGrams: 320,
    ratio: '1:16',
    waterTemp: '97°C / 206°F',
    grindSize: 'Medium (like coarse table salt)',
    brewTime: '3 minutes 15 seconds',
    steps: [
      'Fold filter paper seam, place into V60 cone, and rinse thoroughly with boiling water.',
      'Add 20g ground coffee, make a small central indentation, and zero your digital scale.',
      'Start timer. Pour 60g water in concentric circles from center outwards for the bloom.',
      'Swirl brewer gently twice to ensure all grounds are saturated. Let bloom until 0:45.',
      'At 0:45, pour slowly in steady spirals up to 200g by 1:30.',
      'At 1:45, pour the final installment up to 320g total weight.',
      'Give one final gentle swirl and let gravity draw down through the flat, uniform bed.'
    ],
    tips: 'Do not pour on the paper walls. Focus water flow on the dark slurry center.'
  },
  {
    id: 'guide-french-press',
    title: 'Clean Nordic French Press / Immersion',
    device: 'Glass French Press (8-Cup)',
    coffeeGrams: 30,
    waterGrams: 500,
    ratio: '1:16.6',
    waterTemp: '98°C',
    grindSize: 'Medium-Coarse',
    brewTime: '8 minutes (No Plunge Method)',
    steps: [
      'Add 30g coffee to preheated press pot.',
      'Pour 500g boiling water violently to create a turbulent crust. Do not stir.',
      'Let sit undisturbed for 4 minutes.',
      'At 4 minutes, use two spoons to break the crust and skim away the white foam and floating particles.',
      'Let sit undisturbed for another 4 minutes so heavy fines settle to the very bottom.',
      'Insert plunger just below the spout as a strainer. Pour slowly without pressing all the way down.'
    ],
    tips: 'Skimming the foam removes bitterness and produces an astonishingly clean, juicy cup.'
  }
];

export const TIM_WENDELBOE_FARMS: TimWendelboeFarm[] = [
  {
    id: 'farm-tamana',
    farmName: 'Finca Tamana',
    country: 'Colombia',
    region: 'El Pital, Huila',
    producer: 'Elias Roa',
    partnerSince: 2011,
    altitude: '1,650 – 1,750 MASL',
    varietals: ['Variedad Colombia', 'Castillo', 'Pink Bourbon', 'Geisha'],
    story: 'Our longest-running partnership. Over 15 years, we restructured the farm picking protocols, installed raised drying beds, eliminated herbicides, and developed proprietary biological compost to rebuild soil microbiology.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0738/6113/6597/files/lab-1.jpg?v=1776171521'
  },
  {
    id: 'farm-caballero',
    farmName: 'Finca El Puente & Caballero Estates',
    country: 'Honduras',
    region: 'Marcala, Chinacla',
    producer: 'Marysabel Caballero & Moises Herrera',
    partnerSince: 2008,
    altitude: '1,600 MASL',
    varietals: ['Red Catuaí', 'Geisha', 'Java', 'Batian'],
    story: 'Marysabel and Moises are legendary producers. Their farms feature dense shade canopies, pristine spring-fed washing channels, and meticulous raised African drying beds producing world-champion coffees.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0738/6113/6597/files/hjemme-tim-w-14_1_36371c63-bf93-4d8f-84e8-ef4e52a914bf.jpg?v=1763640526'
  },
  {
    id: 'farm-pirineos',
    farmName: 'Los Pirineos',
    country: 'El Salvador',
    region: 'Usulután, Tecapa Volcano',
    producer: 'Diego Baraona',
    partnerSince: 2012,
    altitude: '1,500 MASL',
    varietals: ['Pacamara', 'Bourbon Elite', 'Orange Bourbon'],
    story: 'Perched on the cloud-shrouded peak of the Tecapa volcano. The cold mountain winds and unique volcanic microclimate produce dense cherries with unmatched phosphoric citric acidity.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0738/6113/6597/files/Filter.png?v=1776323028'
  }
];

export const TIM_WENDELBOE_WEBSITE: BusinessWebsite = {
  id: 'brew-bloom-tim-wendelboe',
  slug: 'brew-bloom-tim-wendelboe',
  businessName: 'BREW & BLOOM — Nordic Roastery (Tim Wendelboe Inspiration)',
  category: 'cafe',
  templateId: 'tim-wendelboe',
  tagline: 'World Barista Champion Nordic Specialty Coffee Roastery',
  description: 'Specialty coffee roastery, espresso bar, and coffee school based on Nordic light roasting philosophy. Direct trade partnerships with Finca Tamana and Caballero Estates.',
  ownerName: 'Tim Wendelboe / BREW & BLOOM',
  phone: '+47 400 04 062',
  whatsapp: '4740004062',
  email: 'post@timwendelboe.no',
  address: 'Gruners gate 1, 0552 Oslo, Norway',
  city: 'Oslo',
  state: 'Oslo',
  mapsUrl: 'https://maps.google.com/?q=Tim+Wendelboe+Gruners+gate+1+Oslo',
  openingHours: 'Mon–Fri 8:30 AM – 6:00 PM, Sat–Sun 9:00 AM – 5:00 PM',
  logoUrl: 'https://cdn.shopify.com/s/files/1/0738/6113/6597/files/Catuai-Filter-Webshop.webp?v=1790257975',
  coverUrl: 'https://cdn.shopify.com/s/files/1/0738/6113/6597/files/hjemme-tim-w-14_1_36371c63-bf93-4d8f-84e8-ef4e52a914bf.jpg?v=1763640526',
  primaryColor: '#1a1a1a',
  secondaryColor: '#b91c1c',
  fontFamily: 'Inter',
  bookingType: 'table_reservation',
  bookingCtaLabel: 'Book Cupping Class',
  specialBadge: 'Nordic Light Roast',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 1999,
  paymentStatus: 'paid',
  createdAt: '2026-02-01T08:00:00.000Z',
  updatedAt: '2026-09-29T14:00:00.000Z',
  sections: [
    { id: 'hero', title: 'Nordic Roastery & Espresso Bar', isEnabled: true, order: 1 },
    { id: 'fresh-roasts', title: 'Current Seasonal Microlots', isEnabled: true, order: 2 },
    { id: 'subscriptions', title: 'Monthly Coffee Subscriptions', isEnabled: true, order: 3 },
    { id: 'brew-guides', title: 'AeroPress & V60 Brew Guides', isEnabled: true, order: 4 },
    { id: 'farm-transparency', title: 'Direct Trade Farm Partnerships', isEnabled: true, order: 5 },
    { id: 'espresso-bar', title: 'Grünerløkka Espresso Bar & Tastings', isEnabled: true, order: 6 }
  ],
  items: TIM_WENDELBOE_PRODUCTS.map(p => ({
    id: p.id,
    name: p.name,
    description: p.description,
    price: p.priceInr,
    category: p.category,
    imageUrl: p.imageUrl,
    isVeg: true,
    popular: true,
    badge: p.roastStyle.split(' ')[0]
  })),
  offers: [
    {
      id: 'offer-tw-welcome',
      title: 'Free Worldwide Shipping on Subscriptions',
      discount: 'Complimentary Nordic Dispatch',
      code: 'NORDICLIGHT',
      description: 'Subscribe to 2 or more bags per month and receive complimentary tracked shipping.',
      validTill: '31 Dec 2026',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'gal-tw-1',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0738/6113/6597/files/hjemme-tim-w-14_1_36371c63-bf93-4d8f-84e8-ef4e52a914bf.jpg?v=1763640526',
      title: 'Nordic Roastery in Oslo',
      category: 'interior'
    },
    {
      id: 'gal-tw-2',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0738/6113/6597/files/lab-1.jpg?v=1776171521',
      title: 'Cupping Lab & Sensory Classroom',
      category: 'events'
    }
  ]
};

export interface TimWendelboeFaq {
  question: string;
  answer: string;
  category: 'Roasting & Philosophy' | 'Brewing & Water' | 'Subscriptions & Shipping' | 'Espresso Bar';
}

export const TIM_WENDELBOE_FAQS: TimWendelboeFaq[] = [
  {
    category: 'Roasting & Philosophy',
    question: 'How light do you roast your coffee?',
    answer: 'We roast very light by traditional standards, but always fully developed to the core. Our goal is to preserve the volatile organic aromatics and fruit acids inherent in the coffee seed, rather than creating roast flavours such as ash, smoke, and burnt caramel.'
  },
  {
    category: 'Roasting & Philosophy',
    question: 'How long should I rest the coffee before drinking?',
    answer: 'For filter coffee brewed via AeroPress or V60, we recommend resting the beans for 7 to 14 days after roasting. For espresso, rest for 14 to 24 days. Light-roasted dense beans degas slower and reveal far greater floral clarity once the residual carbon dioxide has dissipated.'
  },
  {
    category: 'Brewing & Water',
    question: 'What water composition do you recommend?',
    answer: 'Water is 98.5% of your filter brew. We strongly recommend soft, clean water with 50-80 ppm total dissolved solids (TDS), low buffer capacity (alkalinity 20-30 mg/L CaCO3), and neutral pH (6.8-7.0) at 94-96°C. Hard tap water will mute delicate floral and fruity notes.'
  },
  {
    category: 'Brewing & Water',
    question: 'How should I store my whole bean coffee?',
    answer: 'Keep the coffee in its original foil bag with the one-way degassing valve, sealed tightly at room temperature away from direct sunlight, moisture, and cooking aromas. Do not refrigerate opened bags. If freezing, vacuum seal unopened bags in individual doses.'
  },
  {
    category: 'Subscriptions & Shipping',
    question: 'How does the monthly subscription dispatch work?',
    answer: 'Subscription coffees are roasted fresh in Oslo on the first and third Tuesdays of every month and dispatched globally via DHL Express or Norwegian Posten within 24 hours. You can adjust bag count, grind preference, or pause your delivery anytime through your account.'
  },
  {
    category: 'Espresso Bar',
    question: 'Can I visit the espresso bar and cupping lab in Oslo?',
    answer: 'Yes! Our roastery and espresso bar is located at Grüners gate 1 in Oslo. We serve seasonal pour-overs, single-origin espresso flights, cascara infusions, and host private sensory cupping classes every Saturday morning.'
  }
];
