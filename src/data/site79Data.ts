import { BusinessWebsite } from '../types';
import { site79Config } from '../config/site79Config';

export interface ElysiumEvent {
  id: string;
  slug: string;
  day: string;
  dateStr: string;
  name: string;
  subheading: string;
  time: string;
  genre: string;
  artist: string;
  perksHeading: string;
  perks: string[];
  image: string;
  tag?: string;
  description: string;
  tableStartPrice: number;
}

export interface SpecialOffer {
  id: string;
  title: string;
  badge?: string;
  discountHighlight?: string;
  discountSubtitle?: string;
  description: string;
  perks: string[];
  ctaText: string;
  ctaAction: 'guestlist' | 'table' | 'mvp-pass' | 'midnight-checkin';
  isHighlighted?: boolean;
}

export interface ClubExperiencePoint {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  image: string;
}

export interface WhatWeOfferSlide {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface AwardItem {
  id: string;
  title: string;
  category: string;
  badgeText: string;
  image: string;
  year: string;
}

export interface WeekendVideoItem {
  id: string;
  title: string;
  subtext: string;
  videoUrl?: string;
  posterUrl: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'ambience' | 'vip-lounge' | 'djs' | 'cocktails' | 'crowd';
  imageUrl: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'cocktails' | 'champagne' | 'spirits' | 'tapas' | 'sheesha';
  price: number;
  description: string;
  isSignature?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

// 1. WEEKLY LINEUP
export const WEEKLY_LINEUP_EVENTS: ElysiumEvent[] = [
  {
    id: 'evt-wed',
    slug: 'wav-ctrl-wednesday',
    day: 'WEDNESDAY',
    dateStr: 'Every Wednesday',
    name: 'WAV {{CTRL}}',
    subheading: 'Signature Melodic Techno • Progressive Resonance • Midnight Dance',
    time: '11:30 PM Onwards',
    genre: 'Melodic Techno & Deep Progressive',
    artist: 'Resident Masterminds & Deep Tech Collective',
    perksHeading: 'Wednesday Perks',
    perks: ['20% Discount on Tables', 'Complimentary Guestlist for Couples & Females', 'Exclusive Drink Inclusions'],
    image: 'https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?auto=format&fit=crop&w=1200&q=80',
    tag: 'Mid-Week Underground',
    description: 'Immerse your senses in hypnotic audio waves. Minimalist amber laser beams slice through sub-zero cryo fog as deep melodic basslines move the room.',
    tableStartPrice: 20000
  },
  {
    id: 'evt-thu',
    slug: 'empress-royale-thursday',
    day: 'THURSDAY',
    dateStr: 'Every Thursday',
    name: 'EMPRESS & ROYALE',
    subheading: 'Elite Ladies Night • Free Flow Sparkling Wine • High Fashion Anthems',
    time: '11:00 PM Onwards',
    genre: 'Commercial Hits, Afrobeats & House',
    artist: 'DJ Anika & Guest Percussionists',
    perksHeading: 'Thursday Privileges',
    perks: ['Complimentary Free Flow Cocktails & Wine for Ladies till 12:30 AM', 'Dedicated Red Carpet Valet', 'Special Mezzanine Bottle Deals'],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    tag: 'Ladies Glamour Night',
    description: 'The capital’s most celebrated ladies night. Glamorous fashionistas and trendsetters gather for sparkling cocktails and high-energy club anthems.',
    tableStartPrice: 25000
  },
  {
    id: 'evt-fri',
    slug: 'illuminate-delhi-friday',
    day: 'FRIDAY',
    dateStr: 'Every Friday',
    name: 'ILLUMINATE FRIDAY',
    subheading: 'High-Voltage Commercial • Big-Room Drops • 3D Kinetic Lasers',
    time: '10:30 PM Onwards',
    genre: 'Big Room EDM, Commercial Top 40 & Electro',
    artist: 'Headline International Guest DJs',
    perksHeading: 'Friday Superclub Perks',
    perks: ['120-Beam Kinetic Light Synchrony', 'Cryo CO2 Jet Cannons Eruption', 'Priority VIP Skip-the-Line Entry'],
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    tag: 'Peak-Weekend Energy',
    description: 'Kickstart the weekend with uninhibited festival-scale power. Roaring sub-bass, celebratory sparkler parades, and a pulsating packed dance floor.',
    tableStartPrice: 30000
  },
  {
    id: 'evt-sat',
    slug: 'starlight-ecstasy-saturday',
    day: 'SATURDAY',
    dateStr: 'Every Saturday',
    name: 'STARLIGHT ECSTASY',
    subheading: 'Flagship Superclub Showcase • Celebrity Performances • Royal Tables',
    time: '10:30 PM Onwards',
    genre: 'Peak-Time Club Anthems & Star Mashups',
    artist: 'Star Celebrity DJs & International Guest Artists',
    perksHeading: 'Saturday Elite Perks',
    perks: ['Celebrity DJ Headliner', 'Complimentary Champagne tasting for VIP Mezzanine', 'Stage-Side VVIP Booth with Private Butler'],
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1200&q=80',
    tag: 'Flagship Saturday',
    description: 'The defining night of New Delhi nightlife. Where titans of industry, luxury jet-setters, and nightlife connoisseurs experience nightclub perfection.',
    tableStartPrice: 40000
  },
  {
    id: 'evt-sun',
    slug: 'supperclub-sundowner-sunday',
    day: 'SUNDAY',
    dateStr: 'Every Sunday',
    name: 'DESI SUNDAY SUPPERCLUB',
    subheading: 'Bollywood Mashup Festival • Desi Dhol Synergy • Late Night Bash',
    time: '11:00 PM Onwards',
    genre: 'Bollywood Dance Music & Punjabi Bass',
    artist: 'India’s Top Bollywood Mashup Artists & Live Dhol Players',
    perksHeading: 'Sunday Celebration',
    perks: ['Live Dhol Fusion Synergy', 'Special Group Booking Discounts', 'Herbal Sheesha Lounge Packages'],
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    tag: 'Bollywood Extravaganza',
    description: 'Roof-raising desi anthems, synchronized live dhol beats, and euphoric celebration to cap off the weekend in grand royal style.',
    tableStartPrice: 25000
  }
];

// 2. SPECIAL OFFERS
export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'offer-guestlist',
    title: "Elysium Guest List",
    description: 'what you get :',
    perks: [
      'Complimentary entry for Couples & Females',
      'All-night entry — arrive anytime before 2:00 AM',
      'Complimentary drinks, shots & munches till wee hours',
      'Dedicated fast-track priority lane',
      'Preferred and Priority Access',
      'Get priority event & artist updates'
    ],
    ctaText: 'Join Guestlist',
    ctaAction: 'guestlist',
    isHighlighted: true
  },
  {
    id: 'offer-vip-table',
    title: 'VIP Table Booking',
    badge: 'Limited Online Privilege',
    discountHighlight: '20%',
    discountSubtitle: 'OFF',
    description: 'On all table bookings • All days',
    perks: [
      'Exclusive for website guests',
      'Book before the club opens',
      '100% redeemable credit against F&B',
      'Private security & dedicated butler steward'
    ],
    ctaText: 'Book Now',
    ctaAction: 'table',
    isHighlighted: false
  },
  {
    id: 'offer-mvp-pass',
    title: 'MVP Weekly Pass',
    badge: 'Maximum Value',
    description: 'Double the value, double the experience.',
    perks: [
      'You Pay ₹2,000 → You Get ₹4,000 Redeemable Credit',
      'VIP2 Lounge Access privilege',
      'Personalised Butler Service on request',
      'Valid on any operating night Wednesday through Sunday'
    ],
    ctaText: 'Book Now',
    ctaAction: 'mvp-pass',
    isHighlighted: false
  },
  {
    id: 'offer-midnight-checkin',
    title: 'Midnight Check-In',
    badge: 'Group Privilege',
    description: 'Walk-In as group of 6 People — And unlock Premium Entry',
    perks: [
      'Get Premium Herbal Sheesha (Worth ₹5K complimentary)',
      'Group registrations get dedicated priority check-in',
      'Instant entry confirmation with fast-track digital pass',
      'Available for ₹2,000 all-inclusive'
    ],
    ctaText: 'Get It Just For ₹2K',
    ctaAction: 'midnight-checkin',
    isHighlighted: false
  }
];

// 3. WHY CHOOSE / CLUB EXPERIENCE POINTS
export const WHY_CHOOSE_EXPERIENCES: ClubExperiencePoint[] = [
  {
    id: 'ambience',
    title: 'The Ambience',
    shortDesc: 'Opulent décor, mood-driven lighting & refined intimate layout.',
    longDesc: "Elysium's signature ambience blends opulent midnight-and-gold décor, mood-driven lighting, and a refined intimate layout to create the perfect nightlife setting. Every corner of our Connaught Place venue — from the plush VIP lounges to the high-energy dance floor — is designed to elevate your night into something truly unforgettable.",
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'djs',
    title: 'World-Class DJs',
    shortDesc: 'Masters of the mix, setting the pulse of the night.',
    longDesc: "From Tomorrowland headliners and Armada icons to India's most celebrated Bollywood mashup producers, our Pioneer CDJ-3000 setups and precision Void Acoustics sound deliver crisp, zero-distortion power that keeps the floor moving past 4:00 AM.",
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'theme-nights',
    title: 'Exclusive Theme Nights',
    shortDesc: "Immersive nights you won't find anywhere else.",
    longDesc: "From our signature WAV {{CTRL}} underground techno Wednesdays and Empress Royale ladies nights to weekend Starlight blowouts, every evening features distinct production, customized lighting choreography, and special cocktail menus.",
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'event-planning',
    title: 'Event Planning',
    shortDesc: 'Your vision, our flawless execution.',
    longDesc: "Host milestone birthdays, bachelor and bachelorette parties, and corporate celebrations with complete VIP exclusivity. Our team coordinates personalized cake ceremonies, sparkler bottle trains, custom LED greetings, and private security details.",
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'artist-gallery',
    title: 'Artist Gallery',
    shortDesc: 'Luxury, privacy, and dedicated service.',
    longDesc: "A storied history of hosting global music royalty, Bollywood icons, and high-profile celebrities. Enjoy exclusive mezzanine suites, private backstage access, and white-glove discreet service from your dedicated steward.",
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80'
  }
];

// 4. "WHAT WE OFFER" SLIDER CARDS
export const WHAT_WE_OFFER_SLIDES: WhatWeOfferSlide[] = [
  {
    id: 'offer-1',
    title: 'Friendly Staff',
    description: 'Hospitality that feels personal — every time you visit.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'offer-2',
    title: 'Amazing Menu',
    description: 'A curated culinary experience crafted to elevate your night.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'offer-3',
    title: 'Private Lounge',
    description: 'Your space, your vibe — luxury seating for unforgettable moments.',
    image: 'https://images.unsplash.com/photo-1578736641330-3155e606cd40?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'offer-4',
    title: 'Guest List Access',
    description: 'Skip the hassle with seamless guest list reservations for a smooth arrival.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'offer-5',
    title: '20% Off Table Bookings',
    description: 'Reserve your table through website and unlock exclusive savings on premium seating.',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'offer-6',
    title: 'Sheesha for Groups',
    description: 'Book a Midnight Check-In for six and enjoy a complimentary premium Herbal Sheesha.',
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'offer-7',
    title: 'Fast Track Entry',
    description: 'Bypass long queues with priority check-in and get straight to the celebration.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'offer-8',
    title: 'All Night Access',
    description: 'Exclusive for website guests — enjoy entry and privileges throughout the night.',
    image: 'https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?auto=format&fit=crop&w=1000&q=80'
  }
];

// 5. AWARDS DATA
export const AWARDS_DATA: AwardItem[] = [
  {
    id: 'award-1',
    title: 'Times Nightlife',
    category: 'Excellence',
    badgeText: 'Times Nightlife Award',
    image: '/assets/lawlinks/brnl.png',
    year: '2025 – 2026'
  },
  {
    id: 'award-2',
    title: 'Industry Recognition',
    category: 'Industry',
    badgeText: 'INCA Nightclub of the Year',
    image: '/assets/lawlinks/container.png',
    year: '2024 – 2025'
  }
];

// 6. NIGHTLIFE MOMENTS (WEEKENDS VIDEOS)
export const WEEKEND_MOMENTS = [
  {
    id: 'moment-1',
    title: 'Elysium Prime Saturdays',
    category: 'Midnight Peak Set',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    tag: '138 BPM Drops'
  },
  {
    id: 'moment-2',
    title: 'Dom Pérignon Sparkler Train',
    category: 'VIP Celebration',
    image: 'https://images.unsplash.com/photo-1578736641330-3155e606cd40?auto=format&fit=crop&w=800&q=80',
    tag: 'Mezzanine Suite'
  },
  {
    id: 'moment-3',
    title: 'WAV {{CTRL}} Underground Pulse',
    category: 'Wednesday Ritual',
    image: 'https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?auto=format&fit=crop&w=800&q=80',
    tag: 'Laser Matrix'
  },
  {
    id: 'moment-4',
    title: 'Empress Glamour Night',
    category: 'Thursday Royale',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    tag: 'Free Flow Bubbles'
  }
];

// 7. PHOTO GALLERY
export const PHOTO_GALLERY: GalleryPhoto[] = [
  {
    id: 'pg-1',
    title: 'Central Dance Arena with Kinetic Rings',
    category: 'ambience',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'pg-2',
    title: 'Royal VIP Mezzanine Lounges',
    category: 'vip-lounge',
    imageUrl: 'https://images.unsplash.com/photo-1578736641330-3155e606cd40?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'pg-3',
    title: 'Laser Matrix & Cryo Jets Eruption',
    category: 'ambience',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'pg-4',
    title: 'Molecular Craft Mixology',
    category: 'cocktails',
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'pg-5',
    title: 'High-Energy Dancers & Celebrities',
    category: 'crowd',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'pg-6',
    title: 'International Headline DJ Live on Deck',
    category: 'djs',
    imageUrl: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'pg-7',
    title: 'Gold Smoked Old Fashioned Cocktail',
    category: 'cocktails',
    imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'pg-8',
    title: 'Private Champagne Sparkler Ceremony',
    category: 'vip-lounge',
    imageUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80'
  }
];

// 8. FAQS LIST
export const FAQS_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Are male stags allowed at Elysium?',
    answer: 'Male stag entry depends on the date, scheduled headline artist, and venue policy. Some nights restrict stags or allow them strictly with prior table confirmation or couple accompaniment — please check directly with our team on WhatsApp before you arrive.'
  },
  {
    id: 'faq-2',
    question: 'What does prepaid redeemable cover charge mean?',
    answer: 'It means you prepay an amount online or at the entrance, and the exact same value becomes 100% redeemable at the bar and restaurant for food & beverages. It is not an entry penalty — it is spendable credit inside the club on your booking date.'
  },
  {
    id: 'faq-3',
    question: 'What are Walk-ins on the Elysium website?',
    answer: 'Walk-ins on our website are a prepaid entry reservation designed to help you skip the queue and receive prioritized door access (subject to club dress code and venue capacity on that date).'
  },
  {
    id: 'faq-4',
    question: "What are Elysium's club timings?",
    answer: 'Elysium operates late night Wednesday through Sunday from 10:30 PM to 5:00 AM IST. Doors open at 11:30 PM, with peak party hours starting after 1:00 AM.'
  },
  {
    id: 'faq-5',
    question: 'What are the current offers at Elysium?',
    answer: 'Popular offers include our 20% Online VIP Table Booking Discount, Complimentary Guestlist for Couples & Females, the MVP Weekly Pass (Pay ₹2K, Get ₹4K), and the Midnight Check-in for groups of six with complimentary ₹5K Herbal Sheesha.'
  },
  {
    id: 'faq-6',
    question: 'What is complimentary entry?',
    answer: 'Complimentary entry means entry at no ticket cost for eligible guests and groups on select dates (subject to venue policy). For example, eligible couples and female guests on our Guestlist enjoy complimentary entry before 12:30 AM.'
  },
  {
    id: 'faq-7',
    question: 'Can I celebrate a birthday party at Elysium?',
    answer: 'Yes — Elysium regularly hosts elite birthday parties and milestone celebrations with dedicated VIP booths, custom LED greeting messages, sparkler bottle service, and celebratory cakes. Share your group size with our concierge for a customized package.'
  },
  {
    id: 'faq-8',
    question: 'Why should I book online instead of walking in?',
    answer: 'Online booking guarantees priority check-in, unlocks exclusive website savings (such as flat 20% off table reservations), provides an instant QR access pass, and eliminates uncertainty on high-demand sold-out weekend nights.'
  }
];

// 9. MENU ITEMS
export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm-1',
    name: 'Gold Smoked Old Fashioned',
    category: 'cocktails',
    price: 1850,
    description: 'Single barrel bourbon rested with applewood smoke, orange bitters, and 24K edible gold flakes.',
    isSignature: true
  },
  {
    id: 'm-2',
    name: 'Delhi Ecstasy (Signature)',
    category: 'cocktails',
    price: 1650,
    description: 'Vodka infused with wild Himalayan berries, elderflower liqueur, and sparkling prosecco float.',
    isSignature: true
  },
  {
    id: 'm-3',
    name: 'Crimson Velvet Martini',
    category: 'cocktails',
    price: 1750,
    description: 'Belvedere vodka, ruby pomegranate reduction, lime zest, and liquid nitrogen chill.',
    isSignature: true
  },
  {
    id: 'm-4',
    name: 'Dom Pérignon Luminous Brut',
    category: 'champagne',
    price: 48000,
    description: 'Vintage Champagne served in illuminated bottle with sparkler ceremonial parade.',
    isSignature: true
  },
  {
    id: 'm-5',
    name: 'Armand de Brignac (Ace of Spades)',
    category: 'champagne',
    price: 75000,
    description: 'Prestige gold bottle cuvée with full VIP fanfare and dedicated ice pedestal.',
    isSignature: true
  },
  {
    id: 'm-6',
    name: 'The Macallan 18 Years Double Cask',
    category: 'spirits',
    price: 42000,
    description: 'Exquisite Speyside single malt whisky rested in European sherry oak.',
    isSignature: false
  },
  {
    id: 'm-7',
    name: 'Truffle & Edamame Dim Sum (6 pcs)',
    category: 'tapas',
    price: 1150,
    description: 'Steamed crystal wrappers filled with crushed edamame and black summer truffle oil.',
    isSignature: true
  },
  {
    id: 'm-8',
    name: '24K Gold Glazed Chicken Sliders (3 pcs)',
    category: 'tapas',
    price: 1350,
    description: 'Charcoal brioche buns, smoked chipotle glaze, aged cheddar, and edible gold garnish.',
    isSignature: true
  },
  {
    id: 'm-9',
    name: 'Crispy Softshell Crab Tempura',
    category: 'tapas',
    price: 1450,
    description: 'Lightly fried softshell crab with spicy tobanjan emulsion and microgreens.',
    isSignature: false
  },
  {
    id: 'm-10',
    name: 'Imperial Paan Ras Sheesha',
    category: 'sheesha',
    price: 3500,
    description: 'Premium tobacco-free herbal shisha infused with Calcutta betel leaf and sweet spices.',
    isSignature: true
  },
  {
    id: 'm-11',
    name: 'Spiced Citrus Mint Sheesha',
    category: 'sheesha',
    price: 3200,
    description: 'Fresh blood orange and crushed spearmint blend with chilled ice pipe base.',
    isSignature: false
  }
];

// 10. BUSINESS WEBSITE OBJECT FOR THE CATALOG
export const SITE_79_WEBSITE: BusinessWebsite = {
  id: 'site-79-elysium-club',
  businessName: site79Config.BRAND_NAME,
  templateId: 'luxury_nightclub_79',
  category: 'bar',
  slug: '79-elysium-club',
  tagline: site79Config.TAGLINE,
  description: `${site79Config.BRAND_NAME} is Delhi's premier luxury nightclub and ultra-lounge located in Connaught Place. Recreating the iconic high-octane luxury nightlife experience with 360° Void Acoustics sound, kinetic laser chandeliers, VIP mezzanine tables, and international guest DJs.`,
  ownerName: 'Executive Directorate',
  city: 'Delhi',
  address: site79Config.LOCATION,
  phone: site79Config.PHONE,
  whatsapp: site79Config.WHATSAPP,
  email: site79Config.EMAIL,
  mapsUrl: site79Config.MAPS_URL,
  openingHours: site79Config.OPENING_HOURS,
  bookingType: 'reservation_party',
  bookingCtaLabel: 'Reserve a Table',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 4999,
  paymentStatus: 'paid',
  coverUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=80',
  logoUrl: '/images/logo.svg',
  primaryColor: site79Config.COLORS.goldPrimary,
  secondaryColor: site79Config.COLORS.bgDark,
  fontFamily: site79Config.FONTS.heading,
  sections: [
    { id: 'hero', title: 'Cinematic Nightclub Video Arena', isEnabled: true, order: 1 },
    { id: 'ticker', title: 'Venue Entry Policy Ticker', isEnabled: true, order: 2 },
    { id: 'lineup', title: 'Weekly Lineup & Events', isEnabled: true, order: 3 },
    { id: 'offers', title: 'Exclusive Special Offers', isEnabled: true, order: 4 },
    { id: 'why-choose', title: 'Why Choose Elysium', isEnabled: true, order: 5 },
    { id: 'what-we-offer', title: 'What We Offer Highlights', isEnabled: true, order: 6 },
    { id: 'awards', title: 'Hall of Fame & Awards', isEnabled: true, order: 7 },
    { id: 'walkin', title: 'Walk In. Own The Night.', isEnabled: true, order: 8 },
    { id: 'comparison', title: 'Online vs Offline Entry', isEnabled: true, order: 9 },
    { id: 'weekends', title: 'Thrilling Weekends Moments', isEnabled: true, order: 10 },
    { id: 'energy-gallery', title: 'Experience The Energy Media Grid', isEnabled: true, order: 11 },
    { id: 'faq', title: 'Frequently Asked Questions', isEnabled: true, order: 12 },
    { id: 'contact', title: 'Concierge & Location', isEnabled: true, order: 13 }
  ],
  gallery: PHOTO_GALLERY.map(g => ({
    id: g.id,
    title: g.title,
    category: g.category,
    imageUrl: g.imageUrl
  })),
  offers: SPECIAL_OFFERS.map(o => ({
    id: o.id,
    title: o.title,
    description: o.description,
    couponCode: o.id === 'offer-vip-table' ? 'ELYSIUM20' : 'GUESTLISTVIP',
    discountPercent: o.id === 'offer-vip-table' ? 20 : 15,
    validTill: '2026-12-31'
  })),
  items: MENU_ITEMS.map(m => ({
    id: m.id,
    name: m.name,
    description: m.description,
    price: m.price,
    category: m.category,
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    isAvailable: true
  })),
  createdAt: '2026-10-05T00:00:00.000Z',
  updatedAt: '2026-10-05T00:00:00.000Z'
};

export default SITE_79_WEBSITE;
