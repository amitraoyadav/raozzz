import { BusinessWebsite } from '../types';

export interface RaozyBusinessConfig {
  siteName: string;
  brandMark: string;
  tagline: string;
  subTagline: string;
  establishedYear: number;
  rating: number;
  reviewCount: number;
  weddingsPlannedTotal: number;
  annualCap: number; // 60 weddings cap
  largestWeddingManaged: string; // ₹28.5 Cr
  fastestTurnaround: string; // 15 Days
  citiesActive: number;
  phone: string;
  phoneDisplay: string;
  email: string;
  whatsapp: string;
  whatsappDisplay: string;
  headquarters: {
    title: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    landmark: string;
  };
  studios: {
    city: string;
    title: string;
    address: string;
    phone: string;
    isFlagship?: boolean;
  }[];
  socialLinks: {
    instagram: string;
    pinterest: string;
    youtube: string;
    linkedin: string;
    facebook: string;
  };
  ctas: {
    primary: string;
    secondary: string;
    whatsapp: string;
    call: string;
  };
}

export const RAOZY_CONFIG: RaozyBusinessConfig = {
  siteName: 'RAOZY WEDDING PLANNER',
  brandMark: 'RWP',
  tagline: 'India’s Premier Bespoke Wedding Planning & In-House Decor Atelier',
  subTagline: 'Intentionally Capped at 60 Weddings Annually — Dedicated Director, Single Accountable Crew, 100% In-House Production & Transparent Fees.',
  establishedYear: 2014,
  rating: 4.98,
  reviewCount: 420,
  weddingsPlannedTotal: 580,
  annualCap: 60,
  largestWeddingManaged: '₹28.5 Crore',
  fastestTurnaround: '15 Days Seamless Execution',
  citiesActive: 14,
  phone: '+91 98118 71071',
  phoneDisplay: '+91 98118 71071',
  email: 'concierge@raozyweddings.com',
  whatsapp: '+919811871071',
  whatsappDisplay: '+91 98118 71071',
  headquarters: {
    title: 'Raozy Wedding Atelier & Design Loft',
    address: 'Atelier 71, Horizon Boulevard, DLF Phase 5, Golf Course Road',
    city: 'Gurugram',
    state: 'Delhi NCR',
    pincode: '122002',
    landmark: 'Opposite DLF Cybercity & Golf Course Extension'
  },
  studios: [
    {
      city: 'Delhi NCR (Headquarters)',
      title: 'Flagship Atelier & Fabrication Studio',
      address: 'Atelier 71, DLF Phase 5, Golf Course Road, Gurugram, Delhi NCR 122002',
      phone: '+91 98118 71071',
      isFlagship: true
    },
    {
      city: 'South Delhi Design Loft',
      title: 'Design Lounge & Floral Lab',
      address: 'The Dhan Mill Compound, 100 Feet Road, Chattarpur, New Delhi 110074',
      phone: '+91 98118 71072'
    },
    {
      city: 'Udaipur Operations Desk',
      title: 'Lake Promenade Concierge',
      address: 'Lake City Promenade, Near Swaroop Sagar, Udaipur, Rajasthan 313001',
      phone: '+91 98118 71073'
    },
    {
      city: 'Jaipur Heritage Studio',
      title: 'Royal Events Studio',
      address: 'Civil Lines, Jacob Road, Jaipur, Rajasthan 302006',
      phone: '+91 98118 71074'
    },
    {
      city: 'Goa Coastal Concierge',
      title: 'Beachside Experience Office',
      address: 'Candolim Beach Road, Fort Aguada Area, North Goa 403515',
      phone: '+91 98118 71075'
    },
    {
      city: 'Dubai International Liaison',
      title: 'Middle East Destination Desk',
      address: 'Level 14, Boulevard Plaza Tower 1, Downtown Dubai, UAE',
      phone: '+971 50 812 7171'
    }
  ],
  socialLinks: {
    instagram: 'https://instagram.com/raozyweddings',
    pinterest: 'https://pinterest.com/raozyweddings',
    youtube: 'https://youtube.com/@raozyweddings',
    linkedin: 'https://linkedin.com/company/raozy-wedding-planner',
    facebook: 'https://facebook.com/raozyweddings'
  },
  ctas: {
    primary: 'Check Date Availability',
    secondary: 'Explore 60-Weddings Lookbook',
    whatsapp: 'Chat on WhatsApp',
    call: 'Call Senior Director'
  }
};

export interface LookbookItem {
  id: string;
  title: string;
  category: 'mandap' | 'sangeet' | 'haldi' | 'mehendi' | 'reception' | 'destination';
  categoryLabel: string;
  image: string;
  galleryImages: string[];
  theme: string;
  destination: string;
  venueName: string;
  description: string;
  palette: string[];
  elements: string[];
  inHouseHighlights: string[];
  estProductionTime: string;
}

export const RAOZY_LOOKBOOK_ITEMS: LookbookItem[] = [
  {
    id: 'look-1',
    title: 'The Floating Lotus Glass Mandap',
    category: 'mandap',
    categoryLabel: 'Sacred Mandap',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=80'
    ],
    theme: 'Ethereal Water-Mirror Royalty',
    destination: 'Udaipur, Rajasthan',
    venueName: 'The Oberoi Udaivilas Lakefront',
    description: 'A 360-degree acrylic mirrored pontoon floating on Pichola water, flanked by 12,000 Dutch hydrangeas and white cascading tuberose strings, lit by warm sub-surface LED fiber optics.',
    palette: ['#F7F3EE', '#DFC082', '#6B5738', '#EAE0D5'],
    elements: ['Reflective acrylic flooring', '12,000 fresh Dutch hydrangeas', 'Brass hanging bells & Urli lamps', 'Concealed smoke haze vents'],
    inHouseHighlights: ['Welded in-house pontoon framework', 'Direct floral import from Holland & Bengaluru', 'Zero sound echo acoustic dampening'],
    estProductionTime: '18 Hours Setup'
  },
  {
    id: 'look-2',
    title: 'Moorish Sufi Night with Golden Arches',
    category: 'sangeet',
    categoryLabel: 'Sangeet & Cocktail',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80'
    ],
    theme: 'Gilded Moroccan Romance & Acoustic Grandeur',
    destination: 'Jaipur, Rajasthan',
    venueName: 'Fairmont Jaipur Grand Ballroom Lawn',
    description: 'A nocturnal celebration set beneath 14 hand-carved Moorish jali arches clad in beaten champagne leaf, illuminated by over 300 amber glass lanterns and crystal teardrop chandeliers.',
    palette: ['#0F172A', '#D97706', '#DFBE78', '#451A03'],
    elements: ['Hand-crafted Moorish filigree portals', 'Concealed beam moving heads & pixel bars', 'Tiered velvet cabana seating', 'Acoustic concert stage for Bollywood Sufi artist'],
    inHouseHighlights: ['Fabricated in Gurugram atelier', 'Line-array L-Acoustics sound system engineering', 'Custom velvet banquettes from our furniture warehouse'],
    estProductionTime: '24 Hours Setup'
  },
  {
    id: 'look-3',
    title: 'Yellow Ombré Marigold Cascades',
    category: 'haldi',
    categoryLabel: 'Joyful Haldi',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519225424982-8406f5223e7b?auto=format&fit=crop&w=1200&q=80'
    ],
    theme: 'Sunny Sunshine Sunshine & Traditional Marigold Bliss',
    destination: 'South Goa',
    venueName: 'Alila Diwa Coastal Courtyard',
    description: 'A 40-foot tunnel of fragrant marigold strings ranging from deep saffron to pale lemon yellow, with central brass Urli tubs for organic turmeric scrubs and cold-pressed floral splash showers.',
    palette: ['#F59E0B', '#FBBF24', '#FEF3C7', '#10B981'],
    elements: ['2,500 kg fresh marigold blooms', 'Antique 5-foot brass Urli vessel', 'Custom-printed yellow chevron floor prints', 'Artisan tender coconut and gola bar'],
    inHouseHighlights: ['Direct farm sourcing within 24 hours of cutting', '100% organic natural dye floral petals', 'Waterproof turf and quick-drain floor channels'],
    estProductionTime: '12 Hours Setup'
  },
  {
    id: 'look-4',
    title: 'Boho Chic Mehendi Carnival & Bangle Bazaar',
    category: 'mehendi',
    categoryLabel: 'Mehendi Carnival',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80'
    ],
    theme: 'Pastel Dreamscape with Rajasthani Folk Touches',
    destination: 'Delhi NCR / Gurugram',
    venueName: 'The Roseate New Delhi Lawn',
    description: 'Whimsical macramé canopies, blush pink and sage green voiles, personalized lac bangle artisans from Jaipur, live puppet theater, and interactive perfume-making bar for wedding guests.',
    palette: ['#EC4899', '#F43F5E', '#10B981', '#FEE2E2'],
    elements: ['Handwoven jute & macramé swings', 'Interactive Jaipuri lacquer bangle stall', 'Custom cold pressed juice station', 'Pampas grass & pastel rose centerpieces'],
    inHouseHighlights: ['Handcrafted props by our artisan team', 'Custom floral print canopies printed in Gurugram', 'Live interactive activity coordinators'],
    estProductionTime: '16 Hours Setup'
  },
  {
    id: 'look-5',
    title: 'Crystal Chandelier & Mirrored Runway Reception',
    category: 'reception',
    categoryLabel: 'Black-Tie Reception',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'
    ],
    theme: 'Hollywood Glamour meets Royal Opulence',
    destination: 'Dubai / Downtown',
    venueName: 'Armani Hotel Dubai Ballroom & Terrace',
    description: 'Suspended ceiling of 48 faceted crystal chandeliers enveloped by cascading white Phalaenopsis orchids, a 60-foot seamless gloss black acrylic runway, and custom mirrored DJ amphitheater.',
    palette: ['#0A0A0A', '#FFFFFF', '#D4AF37', '#71717A'],
    elements: ['48 crystal chandeliers with dimmable DMX controls', 'High-gloss acrylic dance floor with monogram engraving', '6,000 Dutch orchids & white Avalanche roses', 'Cascading dry ice champagne pyramid'],
    inHouseHighlights: ['Structural overhead rigging by certified engineers', 'Custom CNC stage facade manufactured in-house', 'Precision mood-lighting scene programming'],
    estProductionTime: '26 Hours Setup'
  },
  {
    id: 'look-6',
    title: 'The Forest Riverside Vows in Corbett',
    category: 'destination',
    categoryLabel: 'Wilderness Destination',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519225424982-8406f5223e7b?auto=format&fit=crop&w=1200&q=80'
    ],
    theme: 'Woodland Elegance & Riverbed Romance',
    destination: 'Jim Corbett, Uttarakhand',
    venueName: 'The Riverview Wilderness Retreat',
    description: 'Organic reclaimed cedar wood pergolas, wild foliage, fairy-lit Sal forest canopy, and river stone accents creating a magical vows setting alongside the Kosi river at dusk.',
    palette: ['#1C1917', '#15803D', '#B45309', '#FEF3C7'],
    elements: ['Eco-conscious natural foliage installation', 'Bespoke cane and wicker lounge setups', 'Warm amber filament Edison bulb clouds', 'River pebble candle walkways'],
    inHouseHighlights: ['Zero-plastic sustainable decor policy', 'Local artisan craft integration', 'Silent battery power generators for zero noise disturbance'],
    estProductionTime: '14 Hours Setup'
  },
  {
    id: 'look-7',
    title: 'The Royal Haveli Courtyard Mandap',
    category: 'mandap',
    categoryLabel: 'Sacred Mandap',
    image: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80'
    ],
    theme: 'Heritage Red Sandstone & Genda Royalty',
    destination: 'Jaipur, Rajasthan',
    venueName: 'Samode Palace Courtyard',
    description: 'Four monumental sandstone jharokha pillars wrapped in crimson velvet ribbons, 8,000 royal crimson roses, hand-pounded brass thalis, and Vedic Havana pit with chimney exhaust extraction.',
    palette: ['#991B1B', '#D97706', '#78350F', '#FEF08A'],
    elements: ['Custom CNC sandstone look pillars', 'Smokeless concealed havan exhaust system', 'Real brass sitar & flute stage surround', 'Petal shower air-cannons'],
    inHouseHighlights: ['Fabricated in Gurugram atelier', 'Patented smokeless havana enclosure', 'Strict heritage property protection protocols'],
    estProductionTime: '20 Hours Setup'
  },
  {
    id: 'look-8',
    title: 'Neon Cyberpunk Sangeet Rave',
    category: 'sangeet',
    categoryLabel: 'Sangeet & Cocktail',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80'
    ],
    theme: 'Ultra-Modern Concert Energy & Immersive Video Mapping',
    destination: 'Delhi NCR / Gurugram',
    venueName: 'The Leela Ambience Grand Ballroom',
    description: '360-degree curved P2.5 LED video walls, kinetic triangle light fixtures moving on motorized winches, custom acrylic bar with programmable LED liquid counters, and laser harp entrance.',
    palette: ['#09090B', '#8B5CF6', '#EC4899', '#06B6D4'],
    elements: ['120 sq meters P2.5 high-refresh LED wall', '36 kinetic LED motion winches', 'Cold spark pyro machines & CO2 jets', 'Concert-grade Allen & Heath audio console'],
    inHouseHighlights: ['In-house 3D motion graphics animations created for couple', 'Certified laser safety operators', 'Zero sound leakage acoustic management'],
    estProductionTime: '28 Hours Setup'
  }
];

export interface RealWeddingStory {
  id: string;
  coupleNames: string;
  tagline: string;
  destination: string;
  venue: string;
  dates: string;
  guestCount: number;
  functionsCount: number;
  highlightTheme: string;
  coverImage: string;
  gallery: string[];
  story: string;
  challengesOvercome: string;
  clientQuote: string;
  clientRole: string;
  servicesProvided: string[];
  decorBudgetTier: string;
  videoUrl?: string;
}

export const RAOZY_REAL_WEDDINGS: RealWeddingStory[] = [
  {
    id: 'wedding-1',
    coupleNames: 'Avani & Siddharth Singhania',
    tagline: 'A 3-Day Royal Citadel Buyout with 100% In-House Production',
    destination: 'Udaipur, Rajasthan',
    venue: 'Taj Fateh Prakash Palace & Jagmandir Island',
    dates: 'December 2024 · 3 Days',
    guestCount: 380,
    functionsCount: 5,
    highlightTheme: 'Heritage Splendor & Floating Mandap Vows',
    coverImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Avani and Siddharth wanted their 380 international and domestic guests to experience the grandeur of historic Mewar without the stress of disjointed vendors. Raozy took complete ownership from chartered airport transfers to an iconic floating mandap on Lake Pichola.',
    challengesOvercome: 'Transporting 4,000 kgs of steel structural fabrication and delicate imported florals onto Jagmandir island using 12 synchronized wooden boats during tight 4-hour heritage authority windows.',
    clientQuote: 'Raozy gave us absolute peace of mind. Knowing that our wedding director had planned only 4 weddings that month—and was physically present by our side—made all the difference. Our guests still talk about the Jagmandir boat procession!',
    clientRole: 'Avani (Bride) & Mr. Singhania (Father of Bride)',
    servicesProvided: [
      'Turnkey Wedding Direction',
      'In-House Structural Pontoon & Mandap Fabrication',
      'Charter Flight Coordination & Udaipur Airport Concierge',
      '380-Guest Hotel Room Allocation & Luggage Tagging',
      'Artist Curation (Harshdeep Kaur Live & International DJ)'
    ],
    decorBudgetTier: '₹45 Lakhs Decor Production'
  },
  {
    id: 'wedding-2',
    coupleNames: 'Meera & Kabir Oberoi',
    tagline: 'Sun-Drenched Coastal Nuptials & Boho Sunset Celebration',
    destination: 'South Goa',
    venue: 'The Leela Goa Beachfront Lawns',
    dates: 'November 2024 · 3 Days',
    guestCount: 220,
    functionsCount: 4,
    highlightTheme: 'Pastel Seaside Charm & Sundowner Rave',
    coverImage: 'https://images.unsplash.com/photo-1519225424982-8406f5223e7b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519225424982-8406f5223e7b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'An intimate destination wedding where coastal breezes met luxury elegance. The Haldi by the lagoon featured natural marigolds and organic tender coconut waters, while the sunset phere took place under an ivory driftwood mandap right on the golden sands of Mobor Beach.',
    challengesOvercome: 'Managing high coastal humidity and sudden November high-tide wind shifts. Raozy engineered concealed ground anchors into the beach sand to keep the 22-foot floral canopy rock-steady.',
    clientQuote: 'Unlike standard planners who send junior freelancers on event day, Raozy had their core 18-member Gurugram production squad in Goa a full 48 hours early. Every second ran like clockwork.',
    clientRole: 'Kabir & Meera Oberoi',
    servicesProvided: [
      'Full Planning & Beachfront Permissions',
      'Custom Wind-Resistant Mandap Engineering',
      'Airport Luxury Coach Fleet & Welcome Desks',
      'Mixology & Custom Coconut Bar Curation',
      'Beachside Silent Headphone After-Party'
    ],
    decorBudgetTier: '₹28 Lakhs Decor Production'
  },
  {
    id: 'wedding-3',
    coupleNames: 'Rhea & Dr. Dhruv Kapur',
    tagline: '15-Day Emergency Takeover: A Grand 800-Guest Farmhouse Extravaganza',
    destination: 'Delhi NCR / Gurugram',
    venue: 'Tivoli Grand Luxury Farmhouse, Chattarpur',
    dates: 'January 2025 · 2 Days',
    guestCount: 850,
    functionsCount: 3,
    highlightTheme: 'Crystal Grandeur & Gilded Persian Courtyards',
    coverImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'When Rhea and Dhruv’s original agency defaulted 16 days before their 850-guest celebration, Raozy activated our rapid-response protocol. Leveraging our in-house Gurugram fabrication factory and floral cold chain, we mobilized 65 artisans and delivered a stunning 2-day wedding.',
    challengesOvercome: 'Sourcing 18,000 fresh blooms, constructing a 60-foot royal entrance tunnel, and coordinating parking logistics for 350 VIP luxury cars with only 15 days of preparation.',
    clientQuote: 'Raozy literally saved our family’s biggest milestone. They stepped in with calm confidence, transparent cost sheets, and delivered a production that looked like it took 6 months to engineer.',
    clientRole: 'Dr. Kapur (Groom)',
    servicesProvided: [
      '15-Day Emergency Turnkey Takeover',
      'In-House Structural Fabrication & Floral Cold Storage',
      'Valet & Traffic Management for 350 Luxury Cars',
      'Gourmet Catering Coordination with 18 Live Counters',
      'Live Orchestra & Bollywood DJ Coordination'
    ],
    decorBudgetTier: '₹52 Lakhs Decor Production'
  }
];

export interface RaozyService {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  image: string;
  deliverables: string[];
  keyStats: string;
  inHouseDifference: string;
}

export const RAOZY_SERVICES: RaozyService[] = [
  {
    id: 'srv-1',
    slug: 'turnkey-planning',
    title: 'Turnkey Wedding Planning & Direction',
    shortDesc: 'End-to-end stewardship from concept creation and budget architecture to day-of stage choreography.',
    longDesc: 'From the moment you confirm your wedding date, a dedicated Senior Wedding Director becomes your single point of contact. We run your celebration with military precision and luxury finesse, managing over 200 operational touchpoints while you enjoy your milestone with family.',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      'Dedicated Senior Wedding Director & 18-member operations squad',
      'Minute-by-minute day-of timeline and cue sheets',
      'Master budget sheet with 100% open-book wholesale costing',
      'Vendor negotiation and contract vetting with zero kickbacks',
      'Legal permits, music licenses (PPL/IPRS), and municipal clearances',
      'Bridal shadow & personal concierge throughout wedding week'
    ],
    keyStats: 'Capped at 60 Weddings / Year for Uncompromising Quality',
    inHouseDifference: 'You work with full-time company directors—never outsourced freelancers or interns.'
  },
  {
    id: 'srv-2',
    slug: 'decor-production',
    title: 'In-House Decor Design & Production Atelier',
    shortDesc: 'Custom 3D CAD renders, welding, carpentry, imported floristry, and lighting rigging created in our own studio.',
    longDesc: 'Unlike wedding planners who merely broker decor to third-party tent houses, Raozy owns a 25,000 sq.ft. fabrication atelier in Gurugram. We build custom mandaps, chandeliers, lounges, and stages in-house—ensuring photorealistic 3D renders translate 1:1 into reality with zero middleman markups.',
    icon: 'Palette',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      'Photorealistic 3D CAD renders and scale walkthroughs before fabrication',
      'Direct farm-to-mandap floral cold-chain (Holland, Bengaluru, Kolkata)',
      'Custom welding, wood carpentry, and CNC decorative carving',
      'Extensive in-house luxury furniture library (Chesterfields, velvet, cane)',
      'Concert-grade intelligent lighting, haze effects, and power distribution',
      'Full sample mock-up display at our Gurugram atelier before event day'
    ],
    keyStats: '25,000 Sq.Ft. Production Atelier & 65+ In-House Artisans',
    inHouseDifference: 'Zero broker markup. 30-40% greater visual grandeur for the exact same budget.'
  },
  {
    id: 'srv-3',
    slug: 'venue-scouting',
    title: 'Curated Venue Scouting & Direct Negotiations',
    shortDesc: 'Palace buyouts, luxury beachfront resorts, and secluded heritage havelis secured at insider GM-tier rates.',
    longDesc: 'Choosing the right canvas is 60% of your wedding’s success. We analyze over 140 luxury venues across India and the Middle East, conducting physical technical recces, evaluating kitchen capacities, music curfews, and negotiating preferential room buyout rates directly with General Managers.',
    icon: 'MapPin',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      'Comprehensive venue comparison matrices with real hidden costs analyzed',
      'Negotiation of room buyout rates, complimentary upgrades, and F&B minimums',
      'Technical site audits: electrical load, crane access, drone & sound curfew rules',
      'Guaranteed waiver or deep discounts on outside vendor royalty fees',
      'Direct GM-level liaison for smooth check-ins and banquet coordination'
    ],
    keyStats: 'Average Client Savings of ₹12–18 Lakhs on Venue & Room Tariffs',
    inHouseDifference: 'We do not accept commission from venues; all negotiated savings are passed directly to you.'
  },
  {
    id: 'srv-4',
    slug: 'hospitality-logistics',
    title: 'VIP Guest Hospitality & Ground Fleet Logistics',
    shortDesc: 'White-glove airport reception desks, custom WhatsApp RSVP bots, luggage tagging, and luxury transfers.',
    longDesc: 'Your guests’ journey starts the moment they land. Raozy manages dedicated airport arrival lounges, luxury bus and Mercedes fleet transfers, coordinated room key handovers, bespoke welcome hampers, and a 24/7 guest helpline to attend to every aunt, uncle, and VIP dignitary.',
    icon: 'Users',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      'Uniformed airport arrival teams with personalized signage',
      'GPS-tracked luxury car fleet, SUV escorts, and AC Volvo transfers',
      'Express pre-keyed room check-in with personalized guest itineraries',
      'Bespoke room hamper curation and unpacking assistance',
      'Dedicated 24/7 WhatsApp Hospitality Concierge for guest queries',
      'Special elderly assistance, wheelchair escorts, and childcare desk'
    ],
    keyStats: 'Over 45,000 Wedding Guests Hosted with 99.8% On-Time Transfer Rate',
    inHouseDifference: 'Single accountable transport coordinator with real-time flight tracking software.'
  },
  {
    id: 'srv-5',
    slug: 'entertainment-artists',
    title: 'Entertainment, Celebrity & Artist Curation',
    shortDesc: 'Bollywood playback singers, Sufi ensembles, international DJs, folk dancers, and symphony orchestras.',
    longDesc: 'We curate unforgettable musical memories. From a serene morning Shehnai player at the palace steps to a high-octane 3-hour performance by leading Bollywood playback singers and international DJs, we handle rider negotiations, backstage greenrooms, and sound engineering.',
    icon: 'Music',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      'Direct celebrity & artist management with transparent booking riders',
      'L-Acoustics & Meyer Sound concert acoustic engineering',
      'Custom choreography direction for couple & family sangeet',
      'Anchor, Emcee, and Stand-Up comedian curation',
      'Traditional Rajasthani folk, Dhol players, and bridal entry acts',
      'Greenroom hospitality, private airport security, and backstage protocol'
    ],
    keyStats: '180+ Live Concerts & Celebrity Performances Engineered',
    inHouseDifference: 'Direct artist contracts with no middleman agent inflation.'
  },
  {
    id: 'srv-6',
    slug: 'culinary-direction',
    title: 'F&B Curation & Culinary Menu Architecture',
    shortDesc: 'Food tastings, master chef partnerships, signature cocktail alchemy, and midnight snack counters.',
    longDesc: 'Food is the soul of any Indian wedding. We collaborate with India’s foremost master chefs and caterers to design bespoke culinary journeys—balancing regional authentic delicacies, global interactive live stations, artisanal mixology, and late-night comfort street food.',
    icon: 'Utensils',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      'Multi-course menu tasting coordination and chef briefing sessions',
      'Dietary alignment (100% Jain, Vegan, Gluten-free specialized counters)',
      'Molecular mixology and bespoke His & Hers signature cocktails',
      'Street food carnival concepts (Chandni Chowk, Amritsari Kulcha, Khao San)',
      'Midnight Maggie and paratha carts for after-party dancers',
      'Tableware, silver cloches, and luxury presentation audits'
    ],
    keyStats: 'Curated over 600 bespoke banquets with zero food wastage protocols',
    inHouseDifference: 'Independent culinary auditors ensuring food hygiene, temperature, and taste consistency.'
  },
  {
    id: 'srv-7',
    slug: 'day-of-coordination',
    title: 'Minute-by-Minute Stage Choreography & Cueing',
    shortDesc: 'Walkie-talkie communication, backstage stage managers, bridal shadows, and crisis prevention.',
    longDesc: 'On the wedding day, you should be laughing, dancing, and soaking in love—not answering phone calls about misplaced garland sets or delayed baraat horses. Our walkie-talkie crew coordinates every cue with stopwatch accuracy.',
    icon: 'Clock',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      'Baraat assembly, brass band coordination, and vintage car management',
      'Bridal entry timing, pyro fountains, and cold-spark synchronization',
      'Varmala stage cueing with coordinated musical swelling and drone footage',
      'Havana samagri, pandit ji liaison, and auspicious muhurat adherence',
      'Family group photo stage management with call-out lists',
      'Full post-event inventory check and luggage transfer to couple suite'
    ],
    keyStats: '100% On-Time Muhurat Vows Record Across 580 Weddings',
    inHouseDifference: 'Walkie-talkie equipped squad with designated shadow for Bride, Groom, and Parents.'
  },
  {
    id: 'srv-8',
    slug: 'emergency-takeover',
    title: 'Rapid-Response 15-Day Emergency Takeovers',
    shortDesc: 'Immediate rescue protocol when previous planners falter or wedding timelines are compressed.',
    longDesc: 'If your existing wedding agency is failing to deliver, budgets are ballooning uncontrollably, or family commitments require moving your wedding date up by months, Raozy has the proven firepower to take over, stabilize the ship, and execute within as little as 15 days.',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      '48-hour emergency audit of existing contracts and payments',
      'Immediate deployment of in-house Gurugram fabrication and decor assets',
      'Direct hotel GM intervention to resolve blocked dates or disputed bills',
      'Rapid vendor reassignment from our vetted, reliable inner circle',
      'Re-stabilized master timeline with daily evening milestone briefings'
    ],
    keyStats: 'Fastest Recorded Wedding Planned & Executed: Exactly 15 Days',
    inHouseDifference: 'Because we own our fabrication and equipment, we do not depend on external market availability.'
  }
];

export interface DestinationHub {
  id: string;
  name: string;
  state: string;
  tagline: string;
  image: string;
  avgBudget: string;
  bestMonths: string;
  vettedVenuesCount: number;
  highlightVenues: string[];
  signatureExperience: string;
  vibe?: string;
}

export const RAOZY_DESTINATIONS: DestinationHub[] = [
  {
    id: 'dest-delhi',
    name: 'Gurugram & Delhi NCR',
    state: 'Delhi NCR',
    tagline: 'Sprawling Farmhouses, Grand 5-Star Ballrooms & Heritage Havelis',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
    avgBudget: '₹35L – ₹1.8 Cr',
    bestMonths: 'October to March',
    vettedVenuesCount: 38,
    highlightVenues: ['The Roseate New Delhi', 'ITC Grand Bharat Gurugram', 'The Leela Ambience', 'Tivoli Grand Chattarpur'],
    signatureExperience: 'High-production multi-day farmhouse sangeets with concert trussing and celebrity artists.'
  },
  {
    id: 'dest-udaipur',
    name: 'Udaipur, Lake City',
    state: 'Rajasthan',
    tagline: 'Floating Island Palaces, Royal Courtyards & Pichola Sunsets',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    avgBudget: '₹60L – ₹3.5 Cr',
    bestMonths: 'September to March',
    vettedVenuesCount: 22,
    highlightVenues: ['The Oberoi Udaivilas', 'Taj Fateh Prakash', 'Jagmandir Island Palace', 'The Leela Palace Udaipur'],
    signatureExperience: 'Royal boat processions with traditional Mewari buglers and floating lake mandaps.'
  },
  {
    id: 'dest-jaipur',
    name: 'Jaipur, The Pink City',
    state: 'Rajasthan',
    tagline: 'Monumental Forts, Gilded Ballrooms & Regal Elephant Welcomes',
    image: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=800&q=80',
    avgBudget: '₹50L – ₹2.5 Cr',
    bestMonths: 'October to March',
    vettedVenuesCount: 28,
    highlightVenues: ['Fairmont Jaipur', 'Rambagh Palace', 'Samode Palace', 'Jai Mahal Palace'],
    signatureExperience: 'Grand torch-lit fort ramparts with royal nagada drums and Sufi acoustic courtyards.'
  },
  {
    id: 'dest-goa',
    name: 'Goa Coastal Shores',
    state: 'Goa',
    tagline: 'Sunset Beach Lawns, Portuguese Villas & Sundowner Raves',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
    avgBudget: '₹40L – ₹1.9 Cr',
    bestMonths: 'November to April',
    vettedVenuesCount: 26,
    highlightVenues: ['The Leela Goa (Mobor Beach)', 'Alila Diwa South Goa', 'Taj Exotica Benaulim', 'W Goa Vagator'],
    signatureExperience: 'Barefoot sunset vows on private white sand, followed by silent disco after-parties.'
  },
  {
    id: 'dest-corbett',
    name: 'Jim Corbett & Wilderness',
    state: 'Uttarakhand',
    tagline: 'Riverside Clearings, Sal Forest Lodges & Bohemian Firesides',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80',
    avgBudget: '₹30L – ₹1.2 Cr',
    bestMonths: 'October to May',
    vettedVenuesCount: 16,
    highlightVenues: ['Namah Resort Jim Corbett', 'The Riverview Retreat', 'Taj Corbett Resort & Spa', 'Aahana Resort'],
    signatureExperience: 'Wilderness bonfire sangeets with acoustic folk guitars and river-pebble candle aisles.'
  },
  {
    id: 'dest-dubai',
    name: 'Dubai & UAE',
    state: 'International',
    tagline: 'Skyline Grandeur, Desert Dunes & Ultra-Luxury Ballrooms',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    avgBudget: 'AED 350K – 2M (₹80L – ₹4.5 Cr)',
    bestMonths: 'November to March',
    vettedVenuesCount: 18,
    highlightVenues: ['Armani Hotel Dubai', 'Atlantis The Palm', 'Emirates Palace Abu Dhabi', 'Ritz-Carlton Dubai Beach'],
    signatureExperience: 'Futuristic LED tunnel entrances with desert safari pre-parties and fountain backdrop vows.'
  }
];

export interface ClientReview {
  id: string;
  clientNames: string;
  relation: string;
  city: string;
  venue: string;
  rating: number;
  date: string;
  quote: string;
  avatar: string;
}

export const RAOZY_REVIEWS: ClientReview[] = [
  {
    id: 'rev-1',
    clientNames: 'Ananya & Raghav Singhal',
    relation: 'Bride & Groom',
    city: 'Delhi NCR',
    venue: 'ITC Grand Bharat, Gurugram',
    rating: 5,
    date: 'February 2025',
    quote: 'The 60-weddings cap is not a marketing gimmick—it is the entire secret to why Raozy is the finest wedding planner in India. Our Senior Director, Tanvi, knew every family member by name and handled every detail as if it were her own sister’s wedding.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-2',
    clientNames: 'Col. Vikramaditya Rathore',
    relation: 'Father of the Bride',
    city: 'Jaipur',
    venue: 'Fairmont Jaipur',
    rating: 5,
    date: 'December 2024',
    quote: 'As an army officer, I demand precision and financial transparency. Raozy presented an itemized line-by-line budget before a single rupee was paid. Not a single hidden markup. Their in-house decor production saved us upwards of ₹15 Lakhs.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-3',
    clientNames: 'Dr. Tanya & Varun Sethi',
    relation: 'Bride & Groom (NRI from London)',
    city: 'Goa',
    venue: 'The Leela Goa, Mobor Beach',
    rating: 5,
    date: 'January 2025',
    quote: 'Planning a destination wedding in India from London felt daunting until we spoke with Raozy. Their 3D CAD renders were so detailed we could preview every flower petal months ahead. When we walked into the Sangeet lawn, reality surpassed the render!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-4',
    clientNames: 'Deepak & Sunita Goenka',
    relation: 'Parents of the Groom',
    city: 'Udaipur',
    venue: 'Jagmandir Island Palace, Udaipur',
    rating: 5,
    date: 'November 2024',
    quote: 'The logistical masterclass Raozy executed for our 400 guests across Lake Pichola was breath-taking. They chartered boats, handled high-tide wind shifts, and curated an unforgettable Sufi night. Truly the gold standard of Indian luxury weddings.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const RAOZY_FAQS: FaqItem[] = [
  {
    category: 'Philosophy & Exclusivity',
    question: 'Why does Raozy strictly cap its bookings at 60 weddings per year?',
    answer: 'Most large event agencies take on 200–300 weddings annually, treating weddings like assembly line factories and delegating senior clients to junior freelancers. At Raozy, we believe true luxury requires intimacy and undivided attention. By capping ourselves at 60 weddings, every couple is personally stewarded by a founding Director and our core Gurugram production squad.'
  },
  {
    category: 'Decor & Production',
    question: 'How does your in-house fabrication atelier save us money?',
    answer: 'Traditional planners outsource stage construction, metal trussing, props, and furniture to commercial tent houses, adding 20% to 35% broker commissions. Raozy owns its 25,000 sq.ft. fabrication atelier in Gurugram, equipped with metal welding bays, carpentry workshops, a massive luxury furniture library, and a floral cold storage unit. You receive wholesale artisan pricing and photorealistic 3D renders that we build ourselves.'
  },
  {
    category: 'Billing & Transparency',
    question: 'How do you charge, and are there any hidden commissions or kickbacks?',
    answer: 'We operate on a 100% open-book management model. We charge a flat, transparent professional planning fee based on your event scale and scope. All venue bookings, caterers, hotel rooms, and external artists are billed directly to you at negotiated wholesale contract prices without a single rupee of kickbacks or markups.'
  },
  {
    category: 'Timeline & Planning',
    question: 'How early should we book our wedding with Raozy?',
    answer: 'Because of our strict 60-wedding cap, dates during peak winter muhurats (November to February) typically fill up 6 to 9 months in advance. However, because we maintain our own in-house fabrication squad and direct resources, we also retain dedicated emergency bandwidth to execute rapid-response takeovers in as little as 15 to 30 days.'
  },
  {
    category: 'Destinations',
    question: 'Can you plan weddings outside of Delhi NCR?',
    answer: 'Yes! While our headquarters and primary fabrication atelier are located in Gurugram (Delhi NCR), over 65% of the celebrations we manage are luxury destination weddings across Udaipur, Jaipur, Goa, Jim Corbett, Mussoorie, Kerala, and international hubs like Dubai and Abu Dhabi. We deploy our advance operations crew 48 hours prior to guest arrival.'
  },
  {
    category: 'Hospitality & RSVPs',
    question: 'How do you handle guest hospitality and airport transfers?',
    answer: 'We deploy uniformed guest concierges with personalized iPads and signage at every arrival terminal. We coordinate flight tracking, luggage tag delivery directly to guest suites, bespoke room welcome hampers, personalized event schedules, and a 24/7 dedicated guest helpline on WhatsApp.'
  }
];

// Legacy business config alias for raozy components
export const RAOZY_BUSINESS_CONFIG = {
  ...RAOZY_CONFIG,
  name: RAOZY_CONFIG.siteName,
  yearsOfExcellence: 11,
  decorWarehouses: '25,000 Sq.Ft.',
  destinationsCovered: 14,
  weddingsDelivered: 580,
  clientSatisfaction: '99.4%',
  phoneRaw: RAOZY_CONFIG.phone.replace(/\s+/g, ''),
  whatsappLink: `https://wa.me/${RAOZY_CONFIG.whatsapp}`
};

export interface DecorLibraryItem {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  image: string;
  gallery: string[];
  theme: string;
  venueName: string;
  destination: string;
  description: string;
  colorPalette: string[];
  palette: string[];
  elements: string[];
  keyElements: string[];
  coupleTag?: string;
  venueTag?: string;
  inHouseDifference: string;
  setupHours: number;
  estPrice: string;
}

export const RAOZY_DECOR_LIBRARY: DecorLibraryItem[] = RAOZY_LOOKBOOK_ITEMS.map((item, idx) => ({
  id: item.id,
  title: item.title,
  category: item.category,
  categoryLabel: item.categoryLabel,
  image: item.image,
  gallery: item.galleryImages,
  theme: item.theme,
  venueName: item.venueName,
  destination: item.destination,
  description: item.description,
  colorPalette: item.palette,
  palette: item.palette,
  elements: item.elements,
  keyElements: item.elements,
  coupleTag: 'Signature Look',
  venueTag: item.venueName,
  inHouseDifference: item.inHouseHighlights.join(' · '),
  setupHours: 18 + idx * 2,
  estPrice: '₹4.5L – ₹18L'
}));

export interface WeddingFilmItem {
  id: string;
  title: string;
  couple?: string;
  coupleNames: string;
  destination: string;
  venueName: string;
  duration: string;
  thumbnail: string;
  category: string;
  summary: string;
  description?: string;
  theme?: string;
  videoUrl?: string;
}

export const RAOZY_WEDDING_FILMS: WeddingFilmItem[] = [
  {
    id: 'film-1',
    title: 'A Royal Odyssey on Lake Pichola',
    couple: 'Avani & Siddharth',
    coupleNames: 'Avani & Siddharth Singhania',
    destination: 'Udaipur, Rajasthan',
    venueName: 'Taj Fateh Prakash & Jagmandir Island',
    duration: '4:20',
    thumbnail: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    category: 'Palace Wedding',
    summary: 'A 360-degree floating lotus mandap and private boat processions across Lake Pichola.',
    description: 'A 360-degree floating lotus mandap and private boat processions across Lake Pichola.',
    theme: 'Royal Palace Grandeur'
  },
  {
    id: 'film-2',
    title: 'Sunset Coastal Nuptials',
    couple: 'Meera & Kabir',
    coupleNames: 'Meera & Kabir Oberoi',
    destination: 'South Goa',
    venueName: 'The Leela Goa Beachfront',
    duration: '3:45',
    thumbnail: 'https://images.unsplash.com/photo-1519225424982-8406f5223e7b?auto=format&fit=crop&w=800&q=80',
    category: 'Beachfront Nuptials',
    summary: 'Barefoot seaside phere under an ivory driftwood mandap on Mobor Beach.',
    description: 'Barefoot seaside phere under an ivory driftwood mandap on Mobor Beach.',
    theme: 'Bohemian Coastal Chic'
  },
  {
    id: 'film-3',
    title: 'The 15-Day Takeover Extravaganza',
    couple: 'Rhea & Dr. Dhruv',
    coupleNames: 'Rhea & Dr. Dhruv Kapur',
    destination: 'Gurugram / Delhi NCR',
    venueName: 'Tivoli Grand Luxury Farmhouse',
    duration: '5:10',
    thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    category: 'Farmhouse Gala',
    summary: 'An 850-guest celebration rescued and executed with military precision in 15 days.',
    description: 'An 850-guest celebration rescued and executed with military precision in 15 days.',
    theme: 'Crystal Grandeur'
  }
];

// BusinessWebsite representation for RaozSite directory
export const RAOZY_WEDDING_WEBSITE: BusinessWebsite = {
  id: 'raozy-wedding-planner',
  businessName: 'RAOZY WEDDING PLANNER',
  templateId: 'destination_weddings_luxury',
  category: 'destination_weddings',
  slug: '71-raozy-wedding-planner',
  tagline: 'India’s Premier Bespoke Wedding Planning & In-House Decor Atelier',
  description: 'Luxury wedding planning company intentionally capped at 60 weddings a year. In-house 25,000 sq.ft. fabrication atelier, 3D CAD renders, 100% open-book transparent fees, and turnkey destination wedding management across Delhi NCR, Udaipur, Jaipur, Goa, Corbett, and Dubai.',
  ownerName: 'Founding Directors',
  city: 'Gurugram',
  address: 'Atelier 71, Horizon Boulevard, DLF Phase 5, Golf Course Road, Gurugram, Delhi NCR 122002',
  phone: '+91 98118 71071',
  whatsapp: '+919811871071',
  email: 'concierge@raozyweddings.com',
  mapsUrl: 'https://maps.google.com/?q=DLF+Phase+5+Golf+Course+Road+Gurugram',
  openingHours: 'Mon-Sun: 09:30 AM – 09:00 PM (IST) · 24/7 On-Ground Wedding Concierge',
  bookingType: 'consultation_quote',
  bookingCtaLabel: 'Check Date Availability',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 1999,
  paymentStatus: 'paid',
  primaryColor: '#DFC082',
  secondaryColor: '#171410',
  items: [],
  sections: [
    { id: 'hero', title: 'Curated 60 Weddings', isEnabled: true, order: 1 },
    { id: 'manifesto', title: 'Philosophy & Manifesto', isEnabled: true, order: 2 },
    { id: 'services', title: 'Full Capabilities', isEnabled: true, order: 3 },
    { id: 'portfolio', title: 'Lookbook', isEnabled: true, order: 4 },
    { id: 'atelier', title: 'In-House 25k Atelier', isEnabled: true, order: 5 },
    { id: 'calculator', title: 'Cost Estimator', isEnabled: true, order: 6 },
    { id: 'destinations', title: 'Destination Hubs', isEnabled: true, order: 7 },
    { id: 'stories', title: 'Real Stories', isEnabled: true, order: 8 },
    { id: 'reviews', title: 'Client Reviews', isEnabled: true, order: 9 },
    { id: 'faq', title: 'FAQ', isEnabled: true, order: 10 },
    { id: 'contact', title: 'Reserve Dates', isEnabled: true, order: 11 }
  ],
  gallery: [
    {
      id: 'gal-raozy-1',
      title: 'Floating Lotus Glass Mandap, Lake Pichola',
      category: 'events',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'gal-raozy-2',
      title: 'Moorish Sufi Night with Gilded Arches, Fairmont Jaipur',
      category: 'events',
      imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'gal-raozy-3',
      title: 'Yellow Ombré Marigold Cascades Haldi, South Goa',
      category: 'events',
      imageUrl: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'gal-raozy-4',
      title: 'Boho Chic Mehendi Carnival, The Roseate Delhi',
      category: 'events',
      imageUrl: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'gal-raozy-5',
      title: 'Crystal Chandelier Runway Reception, Armani Dubai',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'gal-raozy-6',
      title: 'Forest Riverside Vows, Jim Corbett',
      category: 'exterior',
      imageUrl: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80'
    }
  ],
  offers: [
    {
      id: 'off-raozy-3d',
      title: 'Complimentary 3D CAD Virtual Blueprint',
      description: 'Book your wedding date review this week to receive a complimentary scale 3D render of your sacred mandap.',
      discountPercent: 100,
      validTill: '2026-12-31'
    }
  ],
  createdAt: '2026-01-15T00:00:00Z',
  updatedAt: '2026-10-04T00:00:00Z'
};
