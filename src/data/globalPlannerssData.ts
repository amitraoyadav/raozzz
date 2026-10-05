import { BusinessWebsite } from '../types';
import { globalPlannerssConfig } from '../config/globalPlannerssConfig';

export interface WeddingStory {
  id: string;
  slug: string;
  couple: string;
  destination: string;
  venue: string;
  monogram: string;
  palette: string[];
  coverImage: string;
  gallery: string[];
  excerpt: string;
  story: string;
  guestCount: number;
  duration: string;
  highlights: string[];
}

export const GLOBAL_WEDDINGS: WeddingStory[] = [
  {
    id: 'w-1',
    slug: 'jaya-nikunj',
    couple: 'Jaya & Nikunj',
    destination: 'Udaipur, Rajasthan',
    venue: 'The Oberoi Udaivilas',
    monogram: 'J&N',
    palette: ['#2B2A28', '#B08D57', '#FAF7F2'],
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80'
    ],
    excerpt: 'A lakeside Mewar celebration with hand-sculpted white florals and an ethereal mandap floating over water.',
    story: 'From chartered guest arrivals to a midnight Sufi performance overlooking Lake Pichola, Global Plannerss carried every detail so both families were present for every emotion.',
    guestCount: 280,
    duration: '3 Days',
    highlights: ['360-degree floating lotus mandap', 'Private royal boat procession', 'L-Acoustics midnight acoustic stage']
  },
  {
    id: 'w-2',
    slug: 'vrinda-kovid',
    couple: 'Vrinda & Kovid',
    destination: 'W Goa',
    venue: 'Vagator Cliffside Lawns, W Goa',
    monogram: 'V&K',
    palette: ['#3A2F2A', '#C5A572', '#EAE0D5'],
    coverImage: 'https://images.unsplash.com/photo-1519225424982-8406f5223e7b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519225424982-8406f5223e7b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80'
    ],
    excerpt: 'High-octane cliffside nuptials in North Goa, blending bohemian pastel Haldi drapes with a late-night rock festival vibe.',
    story: 'Engineered with reinforced wind-stable structures on the Vagator cliffs, coordinating 45 airport transfers and managing a surprise flash mob seamlessly.',
    guestCount: 240,
    duration: '3 Days',
    highlights: ['Wind-anchored oceanfront canopy', 'Artisanal cold-pressed coconut bar', 'Silent disco after-party']
  },
  {
    id: 'w-3',
    slug: 'rhea-mark',
    couple: 'Rhea & Mark',
    destination: 'W Goa',
    venue: 'W Goa Rockpool & Great Room',
    monogram: 'R&M',
    palette: ['#2B2A28', '#9C7B4E', '#F5F0E8'],
    coverImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80'
    ],
    excerpt: 'An intercultural Indian-British wedding with Vedic rituals at dusk followed by an international jazz gala.',
    story: 'Seamlessly managed international guest concierge for 110 guests arriving from London and Sydney, ensuring dietary customization and personal airport liaisons.',
    guestCount: 210,
    duration: '3 Days',
    highlights: ['Bilingual ceremony audio headsets', 'Heritage Jaipuri brass decor accents', 'Live 8-piece British jazz band']
  },
  {
    id: 'w-4',
    slug: 'prachi-subham',
    couple: 'Prachi & Subham',
    destination: 'ITC Grand Goa',
    venue: 'Arossim Beach Lawns & Sal Ballroom',
    monogram: 'P&S',
    palette: ['#3A2F2A', '#C5A572', '#FFFDD0'],
    coverImage: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=80'
    ],
    excerpt: 'Sun-drenched marigold Haldi in the village square followed by royal sunset phere on white sands.',
    story: 'Full-service management of 320 guests, customized welcome gifts, curated live chat support on WhatsApp, and on-ground luggage concierge.',
    guestCount: 320,
    duration: '3 Days',
    highlights: ['2,500 kg fresh local marigolds', 'Private beachfront fireworks display', 'Midnight street food carnival']
  },
  {
    id: 'w-5',
    slug: 'caithlin-abhas',
    couple: 'Caithlin & Abhas',
    destination: 'ITC Grand Goa',
    venue: 'Seaside Pavilion, South Goa',
    monogram: 'C&A',
    palette: ['#33302B', '#B89B6E', '#F8F6F0'],
    coverImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80'
    ],
    excerpt: 'An intimate coastal sanctuary celebration focused on heartfelt vows, farm-to-table culinary dining, and starlight acoustic serenades.',
    story: 'Created an intimate mood with warm filament lighting, zero waste floral arrangements, and zero stress for the families.',
    guestCount: 160,
    duration: '2 Days',
    highlights: ['100% sustainable organic foliage', 'Acoustic violin entrance', 'Custom luggage tag welcome suites']
  },
  {
    id: 'w-6',
    slug: 'shimul-rahul',
    couple: 'Shimul & Rahul',
    destination: 'Fairmont Jaipur',
    venue: 'Grand Ballroom & Courtyard, Jaipur',
    monogram: 'S&R',
    palette: ['#2B2A28', '#B08D57', '#FAFAFA'],
    coverImage: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80'
    ],
    excerpt: 'Monumental royal fortress celebration with beaten gold jali arches, live Shehnai players, and 400 dinner guests.',
    story: 'Orchestrated complex timeline across 5 ceremonies in 48 hours without a single delay in the auspicious muhurat vows.',
    guestCount: 410,
    duration: '2 Days',
    highlights: ['Royal elephant welcome procession', '48 faceted crystal chandeliers', 'Celebrity Sufi vocalist performance']
  }
];

export interface ArcFunction {
  id: string;
  name: string;
  tagline: string;
  photoCount: string;
  image: string;
  description: string;
}

export const WEDDING_ARC_FUNCTIONS: ArcFunction[] = [
  {
    id: 'haldi',
    name: 'Haldi',
    tagline: 'Morning turmeric, marigold and mischief — the day laughter sets the tone.',
    photoCount: '353 real photos →',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80',
    description: 'Fresh marigolds, organic turmeric, brass Urli vessels, and lively sunshine revelry.'
  },
  {
    id: 'mehendi',
    name: 'Mehendi',
    tagline: 'An afternoon that smells of henna and sounds like family.',
    photoCount: '535 real photos →',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80',
    description: 'Bohemian pastel canopies, artisanal bangle makers, and interactive cocktail bars.'
  },
  {
    id: 'sangeet',
    name: 'Sangeet',
    tagline: 'The night the two families become one audience — and one cast.',
    photoCount: '307 real photos →',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    description: 'Concert-grade L-Acoustics sound, LED video tunnels, and high-energy choreography.'
  },
  {
    id: 'wedding',
    name: 'Wedding',
    tagline: 'The pheras. Everything we do exists so this hour feels effortless.',
    photoCount: '634 real photos →',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    description: 'Sacred mandap architecture, pristine tuberose garlands, and tranquil sacred vows.'
  },
  {
    id: 'reception',
    name: 'Reception',
    tagline: 'The first dinner of a new family, dressed for the photographs you’ll keep.',
    photoCount: '382 real photos →',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
    description: 'Black-tie glamour, crystal chandelier ceilings, and fine culinary banqueting.'
  }
];

export interface ValuePillar {
  title: string;
  description: string;
}

export const VALUE_PILLARS: ValuePillar[] = [
  {
    title: 'Sixty a year',
    description: 'We cap at 60 weddings a year — never more.'
  },
  {
    title: 'Transparent fees',
    description: 'Planning collections from ₹2.5L, published.'
  },
  {
    title: 'In-house decor',
    description: 'Design and production by our own team.'
  },
  {
    title: 'Guest hospitality',
    description: 'Every guest carried, door to door.'
  },
  {
    title: 'Four cities',
    description: 'Delhi NCR · Goa · Udaipur · Dubai.'
  },
  {
    title: 'One team',
    description: 'Every function, one accountable crew.'
  }
];

export interface MorningStep {
  time: string;
  family: string;
  team: string;
}

export const MORNING_TIMELINE: MorningStep[] = [
  {
    time: '5:30 AM',
    family: 'Still asleep.',
    team: 'Setup crew briefed. Décor team already on site. First walkthroughs done.'
  },
  {
    time: '7:00 AM',
    family: 'Hair and makeup begins.',
    team: 'All florals signed off and in position. First airport pickups underway.'
  },
  {
    time: '9:00 AM',
    family: 'Breakfast together — the last quiet meal before it all begins.',
    team: 'Guest welcome desk open. Hospitality team in place. Room queries handled before they’re asked.'
  },
  {
    time: '11:30 AM',
    family: 'Getting dressed. Final fittings. Photographs.',
    team: 'Full venue walkthrough complete. Every vendor confirmed. Priest on his way.'
  },
  {
    time: '2:00 PM',
    family: 'Family moments. The ones you’ll remember forever.',
    team: 'Baraat route confirmed. Guest transfers coordinating. Timeline locked.'
  },
  {
    time: '5:00 PM',
    family: 'You walk in.',
    team: 'We step back.'
  }
];

export interface VideoShort {
  id: string;
  title: string;
  thumb: string;
  duration: string;
  views: string;
  videoUrl?: string;
}

export const FEATURED_SHORTS: VideoShort[] = [
  {
    id: 'fGT4iuSfN8s',
    title: 'This Blue & Yellow Haldi Decor Is Dreamy 😍',
    thumb: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=400&q=80',
    duration: '0:58',
    views: '142K'
  },
  {
    id: 'yyhWSyc1bx8',
    title: 'The Sangeet Night ✨🎶 Vintage Glamour',
    thumb: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=400&q=80',
    duration: '1:00',
    views: '98K'
  },
  {
    id: 'IUJ-ii4OPNM',
    title: 'Games, Colors & Chaos | Haldi Carnival',
    thumb: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=400&q=80',
    duration: '0:45',
    views: '84K'
  },
  {
    id: '1F0c0r7pL-w',
    title: 'Ombré Pink & Orange Haldi Decor Goals',
    thumb: 'https://images.unsplash.com/photo-1519225424982-8406f5223e7b?auto=format&fit=crop&w=400&q=80',
    duration: '0:52',
    views: '115K'
  },
  {
    id: 'UJ4kBzSYcCE',
    title: 'Haldi Decor You Deserve 💛🌼 Marigold Curtain',
    thumb: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=400&q=80',
    duration: '0:49',
    views: '76K'
  },
  {
    id: '_iTb8h4LRY0',
    title: 'Sunshine, Marigolds & Scalloped Umbrellas 🧡☀️',
    thumb: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=400&q=80',
    duration: '0:55',
    views: '62K'
  },
  {
    id: 'mMAhX1Qc_X8',
    title: 'Aditi & Aakash Royal Palace Wedding Highlight',
    thumb: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80',
    duration: '1:00',
    views: '210K'
  },
  {
    id: 'vO_QysIhAf4',
    title: 'Cocktail Party Decor | Fairy Tale Wisteria Lounge',
    thumb: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=400&q=80',
    duration: '0:59',
    views: '130K'
  }
];

export interface FaqItem {
  q: string;
  a: string;
}

export const GLOBAL_FAQS: FaqItem[] = [
  {
    q: 'What is GLOBAL PLANNERSS?',
    a: 'A luxury wedding planning and hospitality company based in Gurugram, Delhi NCR, founded in 2016. We plan and carry weddings end to end, so your family can be fully present.'
  },
  {
    q: 'Where do you plan weddings?',
    a: 'Across Delhi NCR from our Gurugram base, and as destination weddings in Goa, Udaipur, Jaipur, Rishikesh, Dubai and beyond. We have carried 220+ destination weddings.'
  },
  {
    q: 'How many weddings do you take on?',
    a: '60 a year, never more. Every wedding is run by our 24-person full-time team, not a freelancer network assembled per event.'
  },
  {
    q: 'Do you only plan destination weddings?',
    a: 'No. We plan city weddings in Delhi NCR too. Destination weddings are where one accountable team matters most: rooms, travel and several days of functions.'
  },
  {
    q: 'How do we start?',
    a: 'Share your date, city and guest count through our enquiry form or WhatsApp. A Senior Planner replies with date availability and an initial budget range within 30 minutes.'
  },
  {
    q: 'What does a wedding planner cost with you?',
    a: 'Our planning collections are published and 100% transparent, from ₹2,50,000 + GST. Most weddings we plan sit between ₹40L and ₹2Cr+ in total investment.'
  }
];

export interface SearchEntry {
  t: string; // title
  u: string; // url / internal identifier
  k: 'page' | 'decor' | 'venue' | 'guide' | 'tool' | 'journal';
  a?: string; // alias keywords
}

export const SEARCH_INDEX: SearchEntry[] = [
  { t: 'The Decor Library', u: 'decor', k: 'page' },
  { t: 'Our Weddings', u: 'weddings', k: 'page' },
  { t: 'What We Do & Services', u: 'services', k: 'page' },
  { t: 'Free Planning Tools', u: 'resources', k: 'page' },
  { t: 'Wedding Cost Calculator', u: 'calculator', k: 'page' },
  { t: 'Find Your Wedding Vibe (Quiz)', u: 'quiz', k: 'page' },
  { t: 'Our Story & Philosophy', u: 'story', k: 'page' },
  { t: 'Contact & Check Dates', u: 'contact', k: 'page' },
  { t: 'Haldi Decor & Swings', u: 'decor-haldi', k: 'decor', a: 'turmeric marigold ubtan yellow pithi' },
  { t: 'Mehendi Carnivals & Canopies', u: 'decor-mehendi', k: 'decor', a: 'henna bohemian pastel bangles' },
  { t: 'Sangeet Stage & Lighting', u: 'decor-sangeet', k: 'decor', a: 'dance concert trussing audio dj' },
  { t: 'Sacred Mandaps & Phere', u: 'decor-wedding', k: 'decor', a: 'mandap lotus water royal phera vedi' },
  { t: 'Black-Tie Reception & Ballroom', u: 'decor-reception', k: 'decor', a: 'cocktail gala dinner chandeliers' },
  { t: 'W Goa Beachfront Nuptials', u: 'venue-w-goa', k: 'venue' },
  { t: 'ITC Grand Goa Coastal Resot', u: 'venue-itc-goa', k: 'venue' },
  { t: 'The Leela Jaipur Fort Vows', u: 'venue-leela-jaipur', k: 'venue' },
  { t: 'The Oberoi Udaivilas Lake Pichola', u: 'venue-udaivilas', k: 'venue' },
  { t: 'Hindu Wedding Muhurats 2026–27', u: 'muhurats', k: 'tool' },
  { t: '10 Questions to Ask Any Planner Checklist', u: 'checklist', k: 'tool' },
  { t: 'Interactive Wedding Budget Split Guide', u: 'budget-guide', k: 'tool' },
  { t: 'Emergency 15-Day Wedding Takeover Protocol', u: 'emergency-takeover', k: 'guide' }
];

export const GLOBAL_PLANNERSS_WEBSITE: BusinessWebsite = {
  id: 'global-plannerss',
  businessName: 'GLOBAL PLANNERSS',
  templateId: 'luxury_wedding_atelier_72',
  category: 'destination_weddings',
  slug: '72-global-plannerss',
  tagline: 'We Carry Weddings · Luxury Wedding Planners',
  description: 'Luxury wedding planning company intentionally capped at 60 weddings a year. Published transparent fees, in-house decor production, and end-to-end guest hospitality across Delhi NCR, Goa, Udaipur, and Dubai.',
  ownerName: 'Global Plannerss Directors',
  city: 'Gurugram',
  address: 'Suite 72, Centrum Plaza, Golf Course Road, Gurugram, Delhi NCR 122002',
  phone: '+91 98210 72072',
  whatsapp: '+919821072072',
  email: 'concierge@globalplannerss.com',
  mapsUrl: 'https://maps.google.com/?q=Centrum+Plaza+Golf+Course+Road+Gurugram',
  openingHours: 'Mon-Sun: 09:30 AM – 08:30 PM (IST) · 24/7 On-Ground Concierge',
  bookingType: 'consultation_quote',
  bookingCtaLabel: 'Check Date Availability',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 1999,
  paymentStatus: 'paid',
  primaryColor: '#C19A4B',
  secondaryColor: '#171410',
  items: [],
  sections: [
    { id: 'hero', title: 'We Carry Weddings', isEnabled: true, order: 1 },
    { id: 'trust', title: 'Trusted By Couples', isEnabled: true, order: 2 },
    { id: 'values', title: 'Why Global Plannerss', isEnabled: true, order: 3 },
    { id: 'arc', title: 'The Wedding Arc', isEnabled: true, order: 4 },
    { id: 'manifesto', title: 'Manifesto', isEnabled: true, order: 5 },
    { id: 'portfolio', title: 'Selected Celebrations', isEnabled: true, order: 6 },
    { id: 'numbers', title: 'By The Numbers', isEnabled: true, order: 7 },
    { id: 'services', title: 'What We Do', isEnabled: true, order: 8 },
    { id: 'morning', title: 'The Morning Of Your Wedding', isEnabled: true, order: 9 },
    { id: 'destinations', title: 'Destinations', isEnabled: true, order: 10 },
    { id: 'planning', title: 'Free Planning Tools', isEnabled: true, order: 11 },
    { id: 'founder', title: 'Founder Note', isEnabled: true, order: 12 },
    { id: 'films', title: 'Featured Wedding Films', isEnabled: true, order: 13 },
    { id: 'testimonials', title: 'What Families Say', isEnabled: true, order: 14 },
    { id: 'faq', title: 'Questions Families Ask First', isEnabled: true, order: 15 },
    { id: 'contact', title: 'Reach Us', isEnabled: true, order: 16 }
  ],
  gallery: [
    {
      id: 'gal-gp-1',
      title: 'Water Pavilion Mandap with Hydrangeas, Udaipur',
      category: 'events',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'gal-gp-2',
      title: 'Sunset Beachfront Canopy, W Goa',
      category: 'events',
      imageUrl: 'https://images.unsplash.com/photo-1519225424982-8406f5223e7b?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'gal-gp-3',
      title: 'Moroccan Archways Sangeet Night, Jaipur',
      category: 'events',
      imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'gal-gp-4',
      title: 'Yellow Marigold Haldi Swings, South Goa',
      category: 'events',
      imageUrl: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'gal-gp-5',
      title: 'Crystal Chandelier Runway Reception, Dubai',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80'
    }
  ],
  offers: [
    {
      id: 'off-gp-3d',
      title: 'Complimentary 3D Scale Decor Model & Recce',
      description: 'Confirm your wedding planning date review to receive an itemized wholesale cost matrix and 3D concept blueprint.',
      discountPercent: 100,
      validTill: '2026-12-31'
    }
  ],
  createdAt: '2026-02-01T00:00:00Z',
  updatedAt: '2026-10-04T00:00:00Z'
};
