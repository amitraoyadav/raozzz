import { BusinessWebsite } from '../types';
import { site77Config } from '../config/site77Config';

export interface ClubEvent {
  id: string;
  slug: string;
  title: string;
  artist: string;
  artistTitle: string;
  artistBio: string;
  genre: string;
  date: string; // e.g. "Friday, 10 Oct 2026"
  dayOfWeek: string;
  time: string; // e.g. "10:00 PM onwards"
  image: string;
  category: 'this-weekend' | 'international' | 'bollywood' | 'sundowner' | 'techno';
  status: 'upcoming' | 'sold-out' | 'past';
  entryPriceFemale: number;
  entryPriceCouple: number;
  entryPriceStag: number;
  vipTableStartPrice: number;
  description: string;
  highlights: string[];
  dressCode: string;
  isFeatured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'dance-floor' | 'vip-lounge' | 'djs-artists' | 'mixology' | 'lasers';
  imageUrl: string;
  caption: string;
}

export interface ClubPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  metric: string;
  image: string;
  bullets: string[];
}

export interface ClubBlog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string[];
  tags: string[];
}

export interface ClubFaq {
  question: string;
  answer: string;
  category: 'booking' | 'dress-code' | 'entry' | 'vip' | 'general';
}

export interface FranchiseTier {
  cityTier: string;
  targetCities: string[];
  carpetArea: string;
  investmentRange: string;
  paybackPeriod: string;
  expectedEbitda: string;
}

// 1. UPCOMING & PAST EVENTS DATA
export const EVENTS_DATA: ClubEvent[] = [
  {
    id: 'evt-1',
    slug: 'astral-frequency-dj-nikhil-chinapa',
    title: 'ASTRAL FREQUENCY: Nikhil Chinapa Live',
    artist: 'Nikhil Chinapa',
    artistTitle: 'India’s Pioneer of Electronic Dance Music & Submerge Founder',
    artistBio: 'The visionary pioneer who transformed Indian dance music culture. Nikhil brings his legendary energetic, progressive house and techno set with signature mind-bending transitions.',
    genre: 'Progressive House & Melodic Techno',
    date: 'Saturday, 10 Oct 2026',
    dayOfWeek: 'SATURDAY',
    time: '10:00 PM – 4:30 AM',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    category: 'this-weekend',
    status: 'upcoming',
    entryPriceFemale: 1500,
    entryPriceCouple: 3000,
    entryPriceStag: 4500,
    vipTableStartPrice: 25000,
    description: 'Prepare for an extraordinary night of hypnotic beats and visual ecstasy as electronic music titan Nikhil Chinapa takes over Nocturna’s 360° Void Acoustic soundscape.',
    highlights: ['360° Void Acoustic Sound System tuned to 138 BPM', 'Synchronized 120-beam kinetic laser show', 'CO2 jets and confetti drops', 'Mezzanine VIP bottle packages'],
    dressCode: 'Glamorous Nightclub Chic & High Fashion Clubwear',
    isFeatured: true
  },
  {
    id: 'evt-2',
    slug: 'amsterdam-after-dark-mark-sixma',
    title: 'AMSTERDAM AFTER DARK: Mark Sixma',
    artist: 'Mark Sixma (Armada Music)',
    artistTitle: 'Dutch Trance & Big Room Superstar / ASOT Resident',
    artistBio: 'Direct from Amsterdam and the main stages of Tomorrowland and Ultra Music Festival, Armada Music’s heavyweight producer brings his festival-scale anthems to Goa’s intimate luxury floor.',
    genre: 'Big Room & Peak-Time Trance',
    date: 'Friday, 16 Oct 2026',
    dayOfWeek: 'FRIDAY',
    time: '10:30 PM – 4:30 AM',
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1200&q=80',
    category: 'international',
    status: 'upcoming',
    entryPriceFemale: 2000,
    entryPriceCouple: 4000,
    entryPriceStag: 6000,
    vipTableStartPrice: 35000,
    description: 'Experience international festival energy in Goa’s most opulent club setting. High-octane Dutch basslines, laser grids, and an international crowd.',
    highlights: ['International Armada Music showcase', 'Laser mapping synchronized to Sixma live set', 'Complimentary Champagne tasting for VIP Mezzanine', 'Stage-side tables available'],
    dressCode: 'Ultra Chic & Smart Evening Clubwear',
    isFeatured: true
  },
  {
    id: 'evt-3',
    slug: 'bollywood-regal-dj-chetas',
    title: 'BOLLYWOOD BLING: DJ Chetas World Tour',
    artist: 'DJ Chetas',
    artistTitle: 'DJ Mag World #33 & India’s #1 Bollywood Mashup King',
    artistBio: 'The undisputable king of Bollywood dance music. With over 2 billion views and record-breaking stadium sellouts, Chetas brings high-energy desi beats mixed with festival-grade drops.',
    genre: 'Bollywood Dance Music & Commercial Hits',
    date: 'Saturday, 24 Oct 2026',
    dayOfWeek: 'SATURDAY',
    time: '9:30 PM – 4:30 AM',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    category: 'bollywood',
    status: 'upcoming',
    entryPriceFemale: 2500,
    entryPriceCouple: 5000,
    entryPriceStag: 7500,
    vipTableStartPrice: 40000,
    description: 'Goa’s grandest Bollywood extravaganza! Celebrities, high-flying tourists, and India’s premier socialites gather for a roof-raising celebration of Bollywood mashups.',
    highlights: ['Multi-percussion Dhol live synergy', 'Visual LED walls streaming custom 4K Chetas visuals', 'Sparkler bottle service in all VIP booths', 'VIP Red Carpet entry'],
    dressCode: 'Glamorous Evening Elegance / Sharp Desi Fusion',
    isFeatured: true
  },
  {
    id: 'evt-4',
    slug: 'waterfront-sundowner-afro-caribbean',
    title: 'WATERFRONT SUNDOWNER TO MIDNIGHT: Afro Beats & Amapiano',
    artist: 'DJ Kwame & Resident Collective',
    artistTitle: 'International Afro-House Curator & London Resident',
    artistBio: 'Starting on our open-air waterfront deck overlooking Baga Creek at golden hour sunset, evolving into a roaring late-night tribal groove under the stars.',
    genre: 'Afro-House, Deep Tech & Amapiano',
    date: 'Sunday, 18 Oct 2026',
    dayOfWeek: 'SUNDAY',
    time: '6:30 PM – 3:30 AM',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    category: 'sundowner',
    status: 'upcoming',
    entryPriceFemale: 1000,
    entryPriceCouple: 2000,
    entryPriceStag: 3000,
    vipTableStartPrice: 20000,
    description: 'Baga Creek’s premier golden hour ritual. Watch the sun dip into the Goan horizon with artisanal tropical cocktails before the indoor lasers roar to life.',
    highlights: ['Sunset golden hour cocktail hour', 'Open-air waterfront cabana reservations', 'Live saxophone & African percussionists', 'Seamless transition to indoor main room at 10 PM'],
    dressCode: 'Resort Chic & Bohemian Luxury',
    isFeatured: false
  },
  {
    id: 'evt-5',
    slug: 'dark-matter-techno-sessions',
    title: 'DARK MATTER: Berlin Underground Showcase',
    artist: 'Klaudia Gawlas & Techno Guild',
    artistTitle: 'Berghain & Awakenings Headline Artist',
    artistBio: 'A night strictly curated for authentic underground connoisseurs. Relentless, hypnotic, driving industrial and melodic techno on our pure acoustic Void array.',
    genre: 'Industrial & Raw Peak-Time Techno',
    date: 'Thursday, 22 Oct 2026',
    dayOfWeek: 'THURSDAY',
    time: '11:00 PM – 4:30 AM',
    image: 'https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?auto=format&fit=crop&w=1200&q=80',
    category: 'techno',
    status: 'upcoming',
    entryPriceFemale: 1500,
    entryPriceCouple: 2500,
    entryPriceStag: 3500,
    vipTableStartPrice: 25000,
    description: 'Zero commercial filler. Pure audio immersion with minimalist laser beams cutting through a fog-soaked dance floor.',
    highlights: ['Pure Void Acoustics low-frequency sub bass arrays', 'Monochromatic red laser matrix', 'No mobile recording encouragement on center floor', 'Late night artist curfew extension'],
    dressCode: 'All Black Chic / Cyberpunk Clubwear',
    isFeatured: false
  },
  {
    id: 'evt-6',
    slug: 'halloween-phantom-gala',
    title: 'PHANTOM OF NOCTURNA: Halloween Grand Gala',
    artist: 'Lost Frequencies Tribute & All-Star Residents',
    artistTitle: 'Full Theatrical Nightclub Takeover',
    artistBio: 'Goa’s most extravagant annual Halloween gala with immersive haunted theatrical set designs, aerial acrobats, and costumed masquerade luxury.',
    genre: 'Commercial EDM & Deep House Melodies',
    date: 'Saturday, 31 Oct 2026',
    dayOfWeek: 'SATURDAY',
    time: '9:00 PM – 5:00 AM',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80',
    category: 'this-weekend',
    status: 'upcoming',
    entryPriceFemale: 2500,
    entryPriceCouple: 5000,
    entryPriceStag: 7000,
    vipTableStartPrice: 45000,
    description: 'Transformative immersive set design throughout our 25,000 sq ft arena. Custom Halloween cocktails, aerial performers suspended from the ceiling, and ₹5,00,000 in prizes for best masquerade.',
    highlights: ['₹5,00,000 Best Dressed Champagne Privilege', 'Suspended aerialists and fire performers', 'Theatrical haunted maze entrance', 'All VIP booths decorated with private candelabras'],
    dressCode: 'High-Fashion Masquerade & Couture Halloween Attire',
    isFeatured: true
  }
];

// 2. LUXURY MOSAIC GALLERY DATA
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Central Dance Arena & Kinetic Ceiling',
    category: 'dance-floor',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    caption: 'Dynamic 3D kinetic lighting rings undulating over 1,500 dancers on the main floor.'
  },
  {
    id: 'gal-2',
    title: 'Diamond Mezzanine VIP Booths',
    category: 'vip-lounge',
    imageUrl: 'https://images.unsplash.com/photo-1578736641330-3155e606cd40?auto=format&fit=crop&w=1200&q=80',
    caption: 'Elevated velvet seating with private bouncers, Dom Pérignon buckets and panoramic arena sightlines.'
  },
  {
    id: 'gal-3',
    title: 'Main Stage International Headline DJ Live',
    category: 'djs-artists',
    imageUrl: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1200&q=80',
    caption: 'Armada & Spinnin’ Records headline artists commanding Goa’s most intense nightclub crowd.'
  },
  {
    id: 'gal-4',
    title: 'The Golden Alchemist Molecular Bar',
    category: 'mixology',
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80',
    caption: 'Smoky, botanical and edible gold-infused cocktails crafted by award-winning global flair bartenders.'
  },
  {
    id: 'gal-5',
    title: 'Laser Matrix Beam Show',
    category: 'lasers',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    caption: 'High-power Kvant emerald and gold laser arrays synchronizing precisely to the bass drops.'
  },
  {
    id: 'gal-6',
    title: 'Goa’s Most Glamorous Nightlife Crowd',
    category: 'dance-floor',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    caption: 'Celebrities, global jet-setters, and nightlife lovers celebrating until the early morning hours.'
  },
  {
    id: 'gal-7',
    title: 'Stage-Side VVIP Booth with Dom Pérignon',
    category: 'vip-lounge',
    imageUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
    caption: 'Exclusive backstage access and bottle sparkler ceremonial service for elite patrons.'
  },
  {
    id: 'gal-8',
    title: 'Cryo CO2 Cannons & Pyro Eruption',
    category: 'lasers',
    imageUrl: 'https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?auto=format&fit=crop&w=1200&q=80',
    caption: 'Sub-zero cryo fog blasts dropping the room temperature 10°C during peak climax drops.'
  },
  {
    id: 'gal-9',
    title: 'Signature Smoked Rosemary Old Fashioned',
    category: 'mixology',
    imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80',
    caption: 'Handcrafted single cask bourbon rested with oak smoke and 24-karat gold leaf garnish.'
  }
];

// 3. EIGHT SIGNATURE CLUB PILLARS
export const CLUB_PILLARS: ClubPillar[] = [
  {
    id: 'sound',
    title: 'Precision Void Acoustics Sound',
    subtitle: 'Acoustic Engineering at Peak Mastery',
    description: 'Engineered in the UK, Nocturna features India’s most sophisticated Void Acoustics sound rig delivering crisp sonic fidelity without harmonic distortion.',
    icon: 'Volume2',
    metric: '140 dB Clean Output',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
    bullets: ['360° dispersion wave-guides', 'Dedicated sub-bass pressure zones', 'Studio-grade digital acoustic calibration']
  },
  {
    id: 'lighting',
    title: '3D Kinetic Laser & Beam Matrix',
    subtitle: 'Visual Architecture That Pulses With Music',
    description: 'Over 120 intelligent moving heads, pixel-mapped ceiling trusses, and synchronized laser arrays produce an otherworldly sensory vortex.',
    icon: 'Zap',
    metric: '120+ Kinetic Lights',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    bullets: ['Custom kinetic motorized light fixtures', 'Ultra-fast Kvant RGB laser modules', 'Integrated cryo and cold-pyro safety rigs']
  },
  {
    id: 'djs',
    title: 'World-Class DJ Roster',
    subtitle: 'The World’s Greatest Decksmen Live',
    description: 'From Tomorrowland headliners and Armada icons to India’s undisputed Bollywood and hip-hop pioneers, every night at Nocturna brings an exceptional lineup.',
    icon: 'Radio',
    metric: '50+ Headline Shows Yearly',
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=800&q=80',
    bullets: ['Global resident DJ rotation', 'International guest artist weekends', 'Full technical rider Pioneer CDJ-3000 setups']
  },
  {
    id: 'mixology',
    title: 'Molecular Mixology & Champagne Bar',
    subtitle: 'Artisanal Chemistry in Every Crystal Coupe',
    description: 'Curated by international flair champions, our 60-foot glowing backlit bar showcases vintage Champagnes, rare single malts, and molecular liquid nitrogen cocktails.',
    icon: 'Wine',
    metric: '180+ Premium Spirits',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    bullets: ['Dom Pérignon, Armand de Brignac & Cristal stocks', 'Smoked infusion botanical elixirs', 'Signature 24K edible gold cocktail collection']
  },
  {
    id: 'vip',
    title: 'White-Glove VIP Hospitality',
    subtitle: 'Discretion, Elegance & Royalty-Tier Service',
    description: 'Experience bespoke nightlife hospitality with private security details, dedicated butler steward teams, and discreet private entrances for distinguished guests.',
    icon: 'Crown',
    metric: '1:1 VIP Steward Ratio',
    image: 'https://images.unsplash.com/photo-1578736641330-3155e606cd40?auto=format&fit=crop&w=800&q=80',
    bullets: ['Private bouncer stationed at VIP Mezzanine', 'Bottle sparkler ceremonial service', 'Discreet back-channel VIP valet arrival']
  },
  {
    id: 'waterfront',
    title: 'Baga Creek Waterfront Deck',
    subtitle: 'Goan Coastal Splendor Under The Stars',
    description: 'Step directly from the electric dance arena out onto our moonlit wooden promenade overlooking Baga Creek for gentle sea breezes and artisanal shisha.',
    icon: 'Waves',
    metric: '8,000 Sq. Ft. Open-Air Deck',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    bullets: ['Open-air riverfront breeze lounge', 'Exclusive sundowner sunset tables', 'Premium herbal shisha and cigar lounge']
  }
];

// 4. BLOGS & NIGHTLIFE JOURNAL
export const BLOGS_DATA: ClubBlog[] = [
  {
    id: 'blog-1',
    slug: 'ultimate-guide-luxury-nightlife-north-goa',
    title: 'The Ultimate Insider Guide to Luxury Nightlife in North Goa (2026 Edition)',
    excerpt: 'How North Goa evolved into India’s undisputed capital of high-end nightlife, VIP table reservations, and world-class artist showcases.',
    author: 'Vikramaditya Roy',
    authorRole: 'Nightlife Editor & Culture Critic',
    date: '28 Sep 2026',
    readTime: '6 min read',
    category: 'Nightlife Guide',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    tags: ['Goa Nightlife', 'VIP Tables', 'Luxury Travel'],
    content: [
      'North Goa has long been synonymous with beach shacks and sunset trance, but the last five years have witnessed a radical, ultra-luxurious transformation. Modern clubbers no longer settle for dusty outdoor speakers and lukewarm beer; they demand architectural acoustic precision, international mixology, and world-class guest DJ rosters.',
      'Venues like Nocturna have spearheaded this revolution, anchoring multi-level 25,000 square foot venues along Baga Creek. Here, Funktion-One and Void Acoustics sound rigs are calibrated with millimeter accuracy to ensure crystal-clear treble and thumping sub-bass that moves your body without ear fatigue.',
      'When planning an elite evening in Goa, timing and table selection are paramount. Arriving before 11:00 PM guarantees seamless door screening and access to the best prime mezzanine booths. Always reserve your table in advance during holiday weekends to ensure priority valet and champagne welcome ceremonies.'
    ]
  },
  {
    id: 'blog-2',
    slug: 'acoustics-mastery-void-sound-experience',
    title: 'Behind the Decks: The Science of Void Acoustics & 3D Lighting Design',
    excerpt: 'An exclusive look behind the sound engineering, low-frequency dispersion, and kinetic lighting rigs that make Nocturna’s dance floor unforgettable.',
    author: 'Elena Vance',
    authorRole: 'Chief Sound & Production Architect',
    date: '15 Sep 2026',
    readTime: '5 min read',
    category: 'Behind The Scenes',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    tags: ['Sound Engineering', 'Void Acoustics', 'Lighting Design'],
    content: [
      'A great nightclub is not defined merely by its bottle menu or headline names—it lives and dies by its acoustics. At Nocturna, our sound design was conceptualized alongside UK acoustic engineers to eliminate standing sound waves and room flutter.',
      'Our central ceiling is outfitted with custom kinetic rings capable of lowering and angling in direct real-time synchronization with the DJ’s MIDI output. When the breakdown arrives, the ceiling descends into an intimate cocoon of warm gold; as the bass drops, it erupts into blinding strobes and cold CO2.',
      'The result is a fully immersive sensory escape where you do not simply hear the music—you inhabit it physically through pristine audio reproduction.'
    ]
  },
  {
    id: 'blog-3',
    slug: 'vip-table-etiquette-dress-code-guide',
    title: 'The Art of the VIP Table: Etiquette, Dress Code & Celebration Tips',
    excerpt: 'Everything you need to know about dressing for Goa’s premier luxury nightclub, stag policies, and getting the most out of your VIP mezzanine booth.',
    author: 'Armaan Singhania',
    authorRole: 'Head of VIP Concierge Services',
    date: '02 Sep 2026',
    readTime: '4 min read',
    category: 'VIP Etiquette',
    image: 'https://images.unsplash.com/photo-1578736641330-3155e606cd40?auto=format&fit=crop&w=1200&q=80',
    tags: ['VIP Service', 'Dress Code', 'Celebrations'],
    content: [
      'At Nocturna, our dress code is strictly Glamorous Chic. Gentlemen are encouraged to wear well-tailored shirts, blazer jackets or designer clubwear with closed footwear. Beach shorts, athletic sportswear, and flip-flops are strictly turned away at the door.',
      'When hosting a milestone birthday, bachelor party, or corporate celebration at a VIP Mezzanine or Stage-side Table, inform our concierge 24 hours prior. This allows our team to customize your champagne sparkler parade, assign your dedicated butler steward, and coordinate private security.',
      'Our dedicated concierge team is available round-the-clock via WhatsApp to assist with bespoke bottle curation, personalized cakes, and seamless luxury transport pickups across North and South Goa.'
    ]
  }
];

// 5. FRANCHISE & EXPANSION TIERS
export const FRANCHISE_TIERS: FranchiseTier[] = [
  {
    cityTier: 'Tier 1 Metro Arena',
    targetCities: ['Mumbai (Lower Parel/BKC)', 'Delhi NCR (Gurugram Golf Course Rd)', 'Bengaluru (Indiranagar/Koramangala)'],
    carpetArea: '18,000 – 30,000 Sq. Ft.',
    investmentRange: '₹18 Cr – ₹28 Cr',
    paybackPeriod: '16 – 22 Months',
    expectedEbitda: '32% – 38%'
  },
  {
    cityTier: 'Global Destination Outpost',
    targetCities: ['Dubai (Downtown / Marina)', 'Bangkok (Thonglor)', 'London (Mayfair)'],
    carpetArea: '15,000 – 25,000 Sq. Ft.',
    investmentRange: '$3.5M – $5.5M USD',
    paybackPeriod: '18 – 24 Months',
    expectedEbitda: '35% – 42%'
  },
  {
    cityTier: 'Tier 2 High-Growth Capitals',
    targetCities: ['Hyderabad (Jubilee Hills)', 'Pune (Koregaon Park)', 'Chandigarh (Sector 26)'],
    carpetArea: '12,000 – 18,000 Sq. Ft.',
    investmentRange: '₹10 Cr – ₹16 Cr',
    paybackPeriod: '14 – 18 Months',
    expectedEbitda: '30% – 36%'
  }
];

// 6. FREQUENTLY ASKED QUESTIONS
export const FAQS_DATA: ClubFaq[] = [
  {
    question: 'What is the dress code at Nocturna?',
    answer: 'Glamorous Chic & Smart Evening Wear is strictly enforced. Gentlemen are required to wear collared shirts or designer clubwear with closed shoes. Slippers, beach shorts, trackpants, and athletic tank tops are strictly prohibited.',
    category: 'dress-code'
  },
  {
    question: 'What are the club operating hours and entry timings?',
    answer: 'Nocturna operates 365 nights a year from 9:00 PM to 4:30 AM IST. Our open-air Waterfront Sundowner deck opens at 6:30 PM on weekends.',
    category: 'entry'
  },
  {
    question: 'What is the stag entry and screening policy?',
    answer: 'Single gentlemen (stags) are permitted strictly subject to prior management screening, VIP table reservations, or when accompanied by couples. Door management reserves absolute right of admission.',
    category: 'entry'
  },
  {
    question: 'How do VIP Table Reservations work?',
    answer: 'VIP Tables (Dance Floor, Mezzanine, Stage-Side, and Waterfront Cabana) carry a minimum spend commitment that is 100% redeemable against food, vintage champagnes, and premium spirits. A 50% deposit confirms your table.',
    category: 'booking'
  },
  {
    question: 'Is valet parking available?',
    answer: 'Yes, complimentary premium valet parking is provided for all patrons directly at our main waterfront gate with high-security surveillance.',
    category: 'general'
  },
  {
    question: 'Can I host private birthday parties, bachelor trips, or corporate events?',
    answer: 'Absolutely. We specialize in private bachelor/bachelorette bashes, anniversary milestones, and brand product launches with custom LED branding, dedicated butler stewards, sparkler ceremonial shows, and custom cakes.',
    category: 'vip'
  },
  {
    question: 'What is the cancellation and refund policy for reserved tables?',
    answer: 'Cancellations notified at least 24 hours prior to the event date receive a full credit note or date reschedule valid for 6 months. Same-day cancellations forfeit the table deposit.',
    category: 'booking'
  }
];

// 7. VERIFIED REVIEWS & CELEBRITY ACCLAIM
export const TESTIMONIALS_DATA = [
  {
    id: 'rev-1',
    name: 'Kabir & Rhea Singhal',
    city: 'New Delhi',
    occasion: '30th Birthday VIP Mezzanine',
    quote: 'Nocturna is in an entirely different league from any other club in Goa. The Void sound system is crystal clear with zero ear-ringing the next day, and our private steward treated our group like royalty. The champagne sparkler entrance was unforgettable!',
    rating: 5,
    date: 'October 2026'
  },
  {
    id: 'rev-2',
    name: 'Devraj Oberoi',
    city: 'Mumbai',
    occasion: 'Bachelor Celebration Trip',
    quote: 'We booked the Stage-Side VIP booth for 12 of us during Mark Sixma’s set. Standing right next to the DJ booth with ice buckets of Dom Pérignon and cold cryo smoke shooting over the crowd was pure euphoria.',
    rating: 5,
    date: 'September 2026'
  },
  {
    id: 'rev-3',
    name: 'Sonia & Ananya Kapoor',
    city: 'Bengaluru',
    occasion: 'Girls Weekend Night Out',
    quote: 'The security is world-class, the crowd is super stylish, and the molecular cocktails taste sublime. The open-air waterfront deck overlooking Baga Creek was the perfect breather between dance sets.',
    rating: 5,
    date: 'August 2026'
  }
];

// 8. BUSINESS WEBSITE OBJECT FOR THE CATALOG
export const SITE_77_WEBSITE: BusinessWebsite = {
  id: 'site-77-nocturna-club',
  businessName: site77Config.BRAND_NAME,
  templateId: 'luxury_nightclub_77',
  category: 'bar',
  slug: '77-nocturna-club',
  tagline: site77Config.TAGLINE,
  description: `${site77Config.BRAND_NAME} is Goa’s premier luxury nightclub and waterfront ultra-lounge. Inspired by Hammerzz Club architecture, featuring 25,000 sq. ft. of sensory luxury, 360° Void Acoustics sound, 120-beam kinetic laser rigs, diamond VIP mezzanine tables, and international guest DJs.`,
  ownerName: 'Executive Directorate',
  city: 'North Goa',
  address: site77Config.ADDRESS,
  phone: site77Config.PHONE,
  whatsapp: site77Config.WHATSAPP,
  email: site77Config.EMAIL,
  mapsUrl: site77Config.MAPS_URL,
  openingHours: site77Config.OPENING_HOURS,
  bookingType: 'reservation_party',
  bookingCtaLabel: 'Reserve VIP Table',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 4999,
  paymentStatus: 'paid',
  coverUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=80',
  logoUrl: '/images/logo.svg',
  primaryColor: site77Config.COLORS.goldPrimary,
  secondaryColor: site77Config.COLORS.bgDark,
  fontFamily: site77Config.FONTS.heading,
  sections: [
    { id: 'hero', title: 'Cinematic Nightlife Arena', isEnabled: true, order: 1 },
    { id: 'intro', title: 'The Nocturna Identity', isEnabled: true, order: 2 },
    { id: 'experience', title: 'Pillars of Sound & Light', isEnabled: true, order: 3 },
    { id: 'events', title: 'Upcoming Headline Events', isEnabled: true, order: 4 },
    { id: 'tables', title: 'VIP Mezzanine & Table Tiers', isEnabled: true, order: 5 },
    { id: 'gallery', title: 'Visual Mosaic & Lightbox', isEnabled: true, order: 6 },
    { id: 'booking', title: 'Interactive Table Reservation', isEnabled: true, order: 7 },
    { id: 'franchise', title: 'Franchise & Business Opportunities', isEnabled: true, order: 8 },
    { id: 'blogs', title: 'Nightlife Journal', isEnabled: true, order: 9 },
    { id: 'contact', title: 'Venue Location & Concierge', isEnabled: true, order: 10 }
  ],
  gallery: GALLERY_ITEMS.map(g => ({
    id: g.id,
    title: g.title,
    category: 'events',
    imageUrl: g.imageUrl
  })),
  offers: [
    {
      id: 'offer-vip-welcome',
      title: 'Complimentary Moët & Chandon Champagne Bottle',
      description: 'Exclusive for Diamond Mezzanine and Stage-side table reservations booked 7 days in advance.',
      couponCode: 'NOCTURNAVIP',
      discountPercent: 15,
      validTill: '2026-12-31'
    }
  ],
  items: EVENTS_DATA.map(e => ({
    id: e.id,
    name: e.title,
    description: `${e.artist} Live at Nocturna Goa. ${e.genre}. ${e.time}.`,
    price: e.entryPriceCouple,
    discountPrice: e.entryPriceFemale,
    category: e.genre,
    imageUrl: e.image,
    isAvailable: e.status === 'upcoming'
  })),
  createdAt: '2026-10-05T00:00:00.000Z',
  updatedAt: '2026-10-05T00:00:00.000Z'
};

export default SITE_77_WEBSITE;
