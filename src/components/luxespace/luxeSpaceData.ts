export interface LuxeSpacePackage {
  id: string;
  name: string;
  subtitle: string;
  idealFor: string;
  startingPrice: string;
  guestCapacity: string;
  hoursIncluded: string;
  features: string[];
}

export interface LuxeSpaceCelebrationType {
  id: string;
  title: string;
  counter: string;
  description: string;
  highlights: string[];
  image: string;
}

export interface LuxeSpaceExperienceTier {
  counter: string;
  title: string;
  description: string;
  details: string[];
}

export interface LuxeSpaceFaq {
  question: string;
  answer: string;
}

export interface LuxeSpaceGalleryItem {
  id: string;
  title: string;
  category: 'all' | 'weddings' | 'receptions' | 'architectural' | 'cocktail_lounge';
  imageUrl: string;
  caption: string;
}

export const LUXESPACE_PACKAGES: LuxeSpacePackage[] = [
  {
    id: 'refined-wedding',
    name: 'The Refined Wedding',
    subtitle: 'Ceremony, Cocktail Hour & Seated Dinner Reception',
    idealFor: 'Full-day luxury weddings for up to 150 seated guests',
    startingPrice: '$6,500',
    guestCapacity: 'Up to 150 Seated with Dance Floor',
    hoursIncluded: '12 Hours Exclusive Access (Includes 4-hr Prep + 6-hr Event + 2-hr Breakdown)',
    features: [
      'Exclusive private venue buyout with complete privacy',
      'Luxury bridal dressing suite with hair/makeup stations & private restroom',
      'Groom prep lounge with beverage fridge and lounge seating',
      'Modern black banquet tables and elegant velvet/matte black modern chairs',
      'Signature marble feature wall with custom ambient backlighting',
      'Full architectural mood lighting system (programmable to your wedding palette)',
      'Sculptural brass ring chandeliers with dimming controls',
      'Complete table & chair setup according to your custom floor plan',
      'Post-event breakdown, trash removal, and comprehensive cleaning',
      'Dedicated on-site venue operations liaison throughout your event',
      'Open vendor policy: bring licensed & insured caterers and bartenders',
      'Dual bar setup areas with commercial refrigeration & prep prep sink'
    ]
  },
  {
    id: 'architectural-soiree',
    name: 'The Architectural Soirée',
    subtitle: 'Milestone Celebrations, Rehearsal Dinners & Evening Galas',
    idealFor: 'Birthdays, anniversaries, corporate galas & chic cocktail receptions',
    startingPrice: '$4,200',
    guestCapacity: 'Up to 200 Cocktail Style / 120 Seated',
    hoursIncluded: '8 Hours Access (2-hr Prep + 5-hr Event + 1-hr Breakdown)',
    features: [
      'Full access to main gallery, marble feature wall, and cocktail lounge',
      'Customizable LED ambient perimeter wash and chandelier dimming',
      'High-top cocktail tables and plush velvet lounge vignette setups',
      'Built-in commercial audio system with wireless microphone & Bluetooth DJ patch',
      'Custom floor plan arrangement by venue team prior to arrival',
      'Post-event janitorial cleaning and facility maintenance',
      'Outside food and beverage flexibility with licensed bartender',
      'Dedicated on-site facility host for seamless logistics'
    ]
  },
  {
    id: 'intimate-gathering',
    name: 'Intimate Gathering / Shower',
    subtitle: 'Baby Showers, Bridal Luncheons & Micro-Weddings',
    idealFor: 'Daytime celebrations and boutique private gatherings',
    startingPrice: '$2,800',
    guestCapacity: 'Up to 80 Guests Seated',
    hoursIncluded: '5 Hours Access (1-hr Prep + 3.5-hr Event + 0.5-hr Breakdown)',
    features: [
      'Natural daylight streaming through expansive frosted architectural windows',
      'Chic round or banquet table configurations with modern chairs',
      'Bridal suite access for host preparation and gift staging',
      'Complete pre-event setup and post-event breakdown',
      'Bluetooth audio streaming for ambient playlist',
      'Complimentary on-site guest parking in private lot',
      'Signature vendor referrals for balloon installations & floral design'
    ]
  }
];

export const LUXESPACE_CELEBRATIONS: LuxeSpaceCelebrationType[] = [
  {
    id: 'birthdays',
    title: 'BIRTHDAYS',
    counter: '01',
    description: 'Milestone birthday celebrations with custom lighting, bespoke cocktail lounge setups, and energetic dance floor energy.',
    highlights: ['30th, 40th, 50th Milestone Soirées', 'DJ booth stage & dance floor zones', 'Champagne wall installations'],
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'baby-showers',
    title: 'BABY SHOWERS',
    counter: '02',
    description: 'Elegant, warm gatherings tailored for welcoming new life in elevated style with delicate florals, pastel wash lights, and dessert displays.',
    highlights: ['Natural frosted window lighting', 'Plush lounge seating for the mother-to-be', 'Seamless catering and dessert stations'],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'milestones',
    title: 'MILESTONES',
    counter: '03',
    description: 'Anniversaries, engagement parties, vow renewals, and private family dinners crafted with extraordinary care and architectural prestige.',
    highlights: ['Intimate candlelit seated dining', 'Curated AV for sentimental photo retrospectives', 'Custom bar fronts with signature cocktail service'],
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&auto=format&fit=crop&q=80'
  }
];

export const LUXESPACE_EXPERIENCE_TIERS: LuxeSpaceExperienceTier[] = [
  {
    counter: '01',
    title: 'THE LUXESPACE EXPERIENCE',
    description: 'Our holistic approach to crafting unforgettable luxury events with dedicated venue management and personalized care.',
    details: [
      'Comprehensive walk-through planning sessions with our venue director',
      'Direct coordination with your event planner, caterer, and floral team',
      'Private client portal for floor plan mapping and vendor insurance submissions'
    ]
  },
  {
    counter: '02',
    title: 'SIGNATURE STYLING',
    description: 'Elevated architectural design, intentional drapery, and customizable ambient light scenes that elevate every photo.',
    details: [
      'Dramatic black exposed industrial ceilings paired with polished concrete floors',
      'Floor-to-ceiling bookmatched marble accent wall creating a stunning focal backdrop',
      'Multi-zoned RGBW mood lighting system adjusting seamlessly from ceremony to party'
    ]
  },
  {
    counter: '03',
    title: 'THE DETAILS',
    description: 'The subtle finishing touches—custom bar fronts, marble accents, and brass fixtures that set the tone.',
    details: [
      'Sculptural geometric brass ring chandeliers suspended overhead',
      'Architectural frosted privacy glass filtering soft, flattering diffused daylight',
      'Contemporary matte black hardware and polished brass accents throughout'
    ]
  },
  {
    counter: '04',
    title: 'ELEVATED ADDITIONS',
    description: 'Enhancements including premium AV systems, outdoor terrace fire pits, and champagne towers.',
    details: [
      'Bespoke champagne tower rental & sparkling crystal glassware',
      'High-definition laser projection for monograms, video tributes & brand logos',
      'Upgraded velvet lounge vignettes in emerald, noir, and ivory tones'
    ]
  },
  {
    counter: '05',
    title: 'SERVICE',
    description: 'Seamless execution from start to finish with dedicated venue liaisons on hand during your event.',
    details: [
      'On-site facility manager ensuring lighting, temperature, and restroom cleanliness',
      'Dedicated security personnel available for evening and VIP private receptions',
      'Pre-event table & chair positioning completed before your vendor load-in window'
    ]
  },
  {
    counter: '06',
    title: 'SIGNATURE CATALOG',
    description: 'Access to our exclusive high-end inventory of tables, velvet lounge furniture, cocktail fixtures, and decor.',
    details: [
      '60-inch round banquet tables, 8-foot rectangular feast tables, and cocktail high-tops',
      '150 sleek black modern dining chairs with ergonomic comfort',
      'Custom rolling bar counters and back-bar display shelving'
    ]
  }
];

export const LUXESPACE_FAQS: LuxeSpaceFaq[] = [
  {
    question: 'How Far In Advance Should I Book?',
    answer: 'We recommend booking 6 to 12 months in advance for weekend weddings and peak season galas (October through May in Houston) to secure your preferred date. For weekday celebrations, baby showers, and intimate private events, 2 to 4 months in advance is usually sufficient.'
  },
  {
    question: 'What Is Included In The Venue Rental Package?',
    answer: 'Every rental includes private exclusive use of the venue, our full inventory of banquet tables, high-top cocktail tables, and 150 sleek modern black dining chairs. Complete setup of tables/chairs according to your custom floor plan, post-event breakdown and professional cleaning, full access to our architectural mood lighting system, and dedicated on-site venue staff throughout your celebration.'
  },
  {
    question: 'What Is The Maximum Guest Capacity At LuxeSpace HTX?',
    answer: 'LuxeSpace HTX comfortably accommodates up to 150 guests for a seated banquet dinner with a dedicated dance floor and DJ setup. For cocktail-style receptions, networking galas, or brand activations where seating is mixed with high-top cocktail tables, the venue accommodates up to 200 guests.'
  },
  {
    question: 'Can I Bring My Own Outside Caterers & Vendors?',
    answer: 'Yes! We pride ourselves on flexibility. We welcome licensed and insured outside caterers, private chefs, floral designers, DJs, live musicians, and event stylists. All alcohol must be served by a TABC-certified bartender. We also provide couples with our curated Signature Houston Vendor Guide upon booking.'
  },
  {
    question: 'Is Setup And Cleanup Included In The Venue Rental?',
    answer: 'Yes. Our venue team handles complete table and chair arrangement according to your approved floor plan before your rental window begins. At the conclusion of your event, our staff performs all breakdown, trash removal, and thorough deep-cleaning, leaving you free to enjoy your celebration.'
  },
  {
    question: 'Where Are You Located And Is Parking Available?',
    answer: 'LuxeSpace HTX is conveniently located in Houston, Texas with immediate highway accessibility. We provide ample dedicated on-site parking for all your wedding guests and vendors, with optional valet parking arrangements available for grand events.'
  },
  {
    question: 'What Are The Audio/Visual & Lighting Capabilities?',
    answer: 'Our space is outfitted with architectural ring chandeliers, customizable perimeter wall-wash lighting capable of millions of color blends, and a high-fidelity distributed sound system with wireless handheld microphones for vows, toasts, and background music.'
  }
];

export const LUXESPACE_GALLERY: LuxeSpaceGalleryItem[] = [
  {
    id: 'lux-1',
    title: 'Architectural Marble Feature Wall',
    category: 'architectural',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1000&auto=format&fit=crop&q=80',
    caption: 'Dramatic bookmatched marble backdrop framed by architectural ambient downlighting.'
  },
  {
    id: 'lux-2',
    title: 'Candlelit Wedding Reception Table',
    category: 'weddings',
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1000&auto=format&fit=crop&q=80',
    caption: '150-guest seated banquet arrangement with modern black chairs and gold flatware.'
  },
  {
    id: 'lux-3',
    title: 'Sculptural Ring Chandeliers & Moody Lighting',
    category: 'architectural',
    imageUrl: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1000&auto=format&fit=crop&q=80',
    caption: 'Customizable warm amber and deep violet illumination across exposed black ceiling beams.'
  },
  {
    id: 'lux-4',
    title: 'Cocktail Lounge & Champagne Bar',
    category: 'cocktail_lounge',
    imageUrl: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=1000&auto=format&fit=crop&q=80',
    caption: 'Custom geometric bar front with brass accents, velvet barstools, and cocktail high-tops.'
  },
  {
    id: 'lux-5',
    title: 'Intimate Ceremony Aisle Setup',
    category: 'weddings',
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1000&auto=format&fit=crop&q=80',
    caption: 'Frosted window backdrop diffusing natural Houston sunlight for an ethereal ceremony aisle.'
  },
  {
    id: 'lux-6',
    title: 'Milestone Celebration Dance Floor',
    category: 'receptions',
    imageUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1000&auto=format&fit=crop&q=80',
    caption: 'High-energy evening celebration with custom lighting scenes and polished concrete floor.'
  }
];
