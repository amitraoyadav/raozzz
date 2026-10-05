import { BusinessWebsite } from '../types';

export interface UtsavBusinessConfig {
  siteName: string;
  brandMark: string;
  tagline: string;
  subTagline: string;
  establishedYear: number;
  rating: number;
  reviewCount: number;
  weddingsPlanned: number;
  citiesPresent: number;
  phone: string;
  phoneRaw: string;
  whatsappNumber: string;
  whatsappLink: string;
  email: string;
  bookingEmail: string;
  headquarters: string;
  workingHours: string;
  socials: {
    instagram: string;
    pinterest: string;
    youtube: string;
    facebook: string;
    linkedin: string;
  };
  cities: {
    id: string;
    name: string;
    tag: string;
    studioAddress: string;
    phone: string;
    popularVenuesCount: number;
    weddingsHosted: number;
    featuredImage: string;
  }[];
  guarantees: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const UTSAV_BUSINESS_CONFIG: UtsavBusinessConfig = {
  siteName: 'UTSAV LUXE',
  brandMark: 'UTSAV',
  tagline: "India's Modern Full-Stack Wedding Planning & Experiential Decor Platform",
  subTagline: 'Bespoke 3D Decor Design, Vetted Luxury Venues, Gourmet Banqueting & Flawless On-Ground Execution',
  establishedYear: 2021,
  rating: 4.94,
  reviewCount: 1850,
  weddingsPlanned: 3200,
  citiesPresent: 8,
  phone: '+91 98200 45890',
  phoneRaw: '919820045890',
  whatsappNumber: '+91 98200 45890',
  whatsappLink: 'https://wa.me/919820045890?text=Hi%20Utsav%20Luxe%20Team%2C%20I%20would%20like%20to%20plan%20my%20wedding%20and%20get%20a%20free%20consultation.',
  email: 'hello@utsavluxe.com',
  bookingEmail: 'weddings@utsavluxe.com',
  headquarters: 'Indiranagar Flagship Studio, 100 Ft Road, Bengaluru, Karnataka 560038',
  workingHours: 'Mon - Sun: 9:30 AM – 9:00 PM (IST)',
  socials: {
    instagram: 'https://instagram.com/utsavluxe',
    pinterest: 'https://pinterest.com/utsavluxe',
    youtube: 'https://youtube.com/@utsavluxe',
    facebook: 'https://facebook.com/utsavluxe',
    linkedin: 'https://linkedin.com/company/utsavluxe'
  },
  cities: [
    {
      id: 'bengaluru',
      name: 'Bengaluru',
      tag: 'Flagship Studio & Experience Center',
      studioAddress: '42, 100 Ft Road, Indiranagar, Bengaluru 560038',
      phone: '+91 80 4718 9001',
      popularVenuesCount: 48,
      weddingsHosted: 1240,
      featuredImage: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'delhi-ncr',
      name: 'Delhi NCR',
      tag: 'Mehrauli Heritage & Farmhouse Hub',
      studioAddress: 'Kalka Das Marg, Near Qutub Minar, Mehrauli, New Delhi 110030',
      phone: '+91 11 4987 6500',
      popularVenuesCount: 65,
      weddingsHosted: 890,
      featuredImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'mumbai',
      name: 'Mumbai',
      tag: 'Bandra Coastal Design Studio',
      studioAddress: 'Waterfield Road, Bandra West, Mumbai 400050',
      phone: '+91 22 6620 4400',
      popularVenuesCount: 42,
      weddingsHosted: 540,
      featuredImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'hyderabad',
      name: 'Hyderabad',
      tag: 'Jubilee Hills Experience Lounge',
      studioAddress: 'Road No. 36, Jubilee Hills, Hyderabad 500033',
      phone: '+91 40 2314 5500',
      popularVenuesCount: 38,
      weddingsHosted: 360,
      featuredImage: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'jaipur',
      name: 'Jaipur',
      tag: 'Palace & Royal Destination Office',
      studioAddress: 'Civil Lines, Near Raj Bhawan, Jaipur 302006',
      phone: '+91 141 222 4589',
      popularVenuesCount: 52,
      weddingsHosted: 430,
      featuredImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'goa',
      name: 'Goa',
      tag: 'Beachfront & Coastal Villa Hub',
      studioAddress: 'Fort Aguada Road, Candolim, Goa 403515',
      phone: '+91 832 248 9010',
      popularVenuesCount: 34,
      weddingsHosted: 310,
      featuredImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'udaipur',
      name: 'Udaipur',
      tag: 'Lakeside Palace Destination Desk',
      studioAddress: 'Haridas Ji Ki Magri, Lake Pichola Road, Udaipur 313001',
      phone: '+91 294 243 1180',
      popularVenuesCount: 28,
      weddingsHosted: 220,
      featuredImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'chennai',
      name: 'Chennai',
      tag: 'ECR Coastal & Temple Wedding Lounge',
      studioAddress: 'East Coast Road, Neelankarai, Chennai 600115',
      phone: '+91 44 2449 8800',
      popularVenuesCount: 26,
      weddingsHosted: 170,
      featuredImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80'
    }
  ],
  guarantees: [
    {
      title: 'Photorealistic 3D Renders Before Build',
      description: 'See exactly what your mandap, entrance tunnel, and stage will look like before paying for fabrication.',
      icon: 'Cube'
    },
    {
      title: '100% Itemized Transparent Pricing',
      description: 'Zero hidden agency markups or vendor kickbacks. Every flower bunch, truss line, and light fixture is billed transparently.',
      icon: 'ShieldCheck'
    },
    {
      title: 'In-House Production & Floral Warehouses',
      description: 'Direct procurement from Holland, Bangalore & Kolkata flower farms guarantees pristine fresh bloom quality at 25% lower cost.',
      icon: 'Sparkles'
    },
    {
      title: 'Dedicated Lead Planner & 14-Member Squad',
      description: 'Your single point of contact from day 1, backed by logistics coordinators, shadow planners for bride/groom, and floor managers.',
      icon: 'Users'
    }
  ]
};

export interface UtsavServiceCategory {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  startingPrice: string;
  priceNote: string;
  features: string[];
  subServices: {
    title: string;
    description: string;
    image: string;
    turnaround: string;
  }[];
  whatsIncluded: string[];
}

export const UTSAV_SERVICE_CATEGORIES: UtsavServiceCategory[] = [
  {
    id: 'decor-design',
    slug: 'wedding-decor-design',
    name: 'Experiential Decor & Scenography',
    tagline: 'Hyper-personalized theme concepts brought to life with photorealistic 3D visualization',
    description: 'From monumental royal mandaps draped in fragrant tuberose to neon-lit ethereal bohemian sangeet stages, our in-house architects and floral designers sculpt breathtaking environments.',
    heroImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    startingPrice: '₹2.5 Lakhs per event',
    priceNote: 'Scalable for intimate 100-guest gatherings to 2,000+ guest grand royal galas',
    features: [
      'Photorealistic 3D Renders & Lighting Simulation',
      'Direct Farm Floral Procurement (Zero Middlemen)',
      'Custom Structural Fabrication & Stage Architecture',
      'Artisanal Furniture, Linen, & Designer Cutlery Hire',
      'Kinetic & Intelligent Stage Lighting Systems',
      'Eco-Conscious & Sustainable Decor Alternatives'
    ],
    subServices: [
      {
        title: 'Sacred Mandap Design',
        description: 'Vedic circular mandaps, floating floral dome structures, glass water pavilions, and royal four-pillar heritage mandaps.',
        image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=600&q=80',
        turnaround: '3D Render in 48 Hours'
      },
      {
        title: 'Sangeet & Cocktail Stages',
        description: 'Concert-grade kinetic LED backdrops, crystal chandelier canopies, disco installations, and neon lounge zones.',
        image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80',
        turnaround: 'Custom 3D CAD blueprints'
      },
      {
        title: 'Haldi & Mehendi Canopies',
        description: 'Sunburst marigold cascades, Rajasthani hand-painted pottery, floral swings, pom-pom bohemian tents, and Turkish rugs.',
        image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80',
        turnaround: 'Modular pre-fab setups'
      },
      {
        title: 'Grand Entrance & Pathways',
        description: 'Cascading rajnigandha curtains, antique brass urulis with floating tea-lights, mirror tunnels, and floral archways.',
        image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80',
        turnaround: 'On-site trial runs'
      }
    ],
    whatsIncluded: [
      'Site inspection & laser measurement recce',
      'Interactive 3D moodboards & material sample palette box',
      'Floral selection trial at local floral studio',
      'Full setup 6 hours prior to event start',
      'Dedicated decor supervisor & repair crew on standby during celebrations',
      'Responsible teardown and post-event floral composting'
    ]
  },
  {
    id: 'full-planning',
    slug: 'turnkey-wedding-planning',
    name: 'Turnkey Wedding Planning & Management',
    tagline: 'End-to-end orchestration so you and your families can celebrate completely stress-free',
    description: 'We handle every minute detail: budget optimization, vendor contract negotiations, 48-page event master timelines, bridal shadow team, guest hospitality, RSVP tracking, and day-of execution.',
    heroImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    startingPrice: '₹1.8 Lakhs complete management',
    priceNote: 'Flat transparent fee model or percentage milestone-based',
    features: [
      'Comprehensive Wedding Master Timeline (Minute-by-minute)',
      'Vendor Procurement, Contract Audits & Rate Negotiations',
      'Guest RSVP Tracking & Airport Transfer Logistics',
      'Bride & Groom Personal Shadow Managers',
      'Hamper Assembly, Room Drop & Welcome Kit Delivery',
      'License & Permissions Acquisition (Music curfew, PPL, Police)'
    ],
    subServices: [
      {
        title: 'Budget Structuring & Fiscal Control',
        description: 'Detailed category allocations, escrow payments, and expense tracking dashboard updated in real-time.',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
        turnaround: 'Live Cloud Dashboard'
      },
      {
        title: 'Hospitality & Guest Concierge',
        description: 'Airport hospitality desks, luxury luggage tags, coordinated fleet transfers, and round-the-clock helpdesk.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
        turnaround: '24/7 WhatsApp concierge'
      },
      {
        title: 'Day-of Show Running',
        description: 'Walkie-talkie equipped operations leads ensuring baraat starts on time, mahurat isn’t missed, and buffet is piping hot.',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
        turnaround: '14-member on-ground squad'
      },
      {
        title: 'Vendor Ecosystem Management',
        description: 'Strict vendor SLA enforcement, sound checks, makeup artist scheduling, and backstage coordination.',
        image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80',
        turnaround: '30+ vetted vendor partners'
      }
    ],
    whatsIncluded: [
      'Assigned Senior Wedding Director with 8+ years experience',
      'Bi-weekly virtual syncs & monthly in-person tastings/recces',
      'Access to Utsav Luxe Couple Mobile Portal',
      'Full rehearsal direction for Sangeet & Pheras',
      'Emergency bridal kit on hand (stain removers, sewing, medication)',
      'Final vendor billing reconciliation & settlement support'
    ]
  },
  {
    id: 'venues-stays',
    slug: 'curated-venues-resorts',
    name: 'Curated Venues & Destination Stays',
    tagline: 'Preferred rate bookings at 300+ palatial resorts, boutique heritage properties & luxury estates',
    description: 'Skip weeks of phone calls and negotiation headaches. We secure verified venue buyouts, guaranteed room blocks, waived corkage, and flexible cancellation terms.',
    heroImage: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
    startingPrice: 'Exclusive Club Rates',
    priceNote: 'Direct wholesale rates with up to 22% room block savings',
    features: [
      '300+ Pre-negotiated Luxury Hotels & Palaces across India',
      'Accompanied Site Recce with Our Venue Strategist',
      'Full Property Buyout Coordination (Private Estates)',
      'Clear Outdoor Curfew & Sound Regulation Briefings',
      'Guaranteed Complimentary Upgrades for Bride & Groom Family',
      'Pre-checked Kitchen & Banquet Capacity Certifications'
    ],
    subServices: [
      {
        title: 'Heritage Palaces & Havelis',
        description: 'Udaipur, Jaipur & Jodhpur royal properties with authentic Rajputana courtyards and royal terraces.',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80',
        turnaround: 'Palace Buyouts & Suites'
      },
      {
        title: 'Coastal & Beachfront Resorts',
        description: 'Private Goa beachfront lawns, Arabian sea clifftops, and Kerala backwater coconut grove estates.',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80',
        turnaround: 'Sunset ceremony licenses'
      },
      {
        title: 'Boutique City Farmhouses & Lawns',
        description: 'Manicured green acreage in Delhi NCR, Bangalore and Hyderabad with glasshouse banquet spaces.',
        image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=600&q=80',
        turnaround: 'Capacity for 2,500+ guests'
      },
      {
        title: 'Luxury 5-Star Ballrooms',
        description: 'Pillarless high-ceiling ballrooms at The Leela, Taj, Oberoi, and Marriott with dedicated pre-function lawns.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
        turnaround: 'Guaranteed block rates'
      }
    ],
    whatsIncluded: [
      'Comparative venue cost matrix with transparent tax analysis',
      'Free chauffeur-driven 1-day venue inspection tour',
      'Direct contract between couple and venue management',
      'Special room allocation software for easy guest room tagging',
      'F&B minimum spend negotiation and menu upgrade perks'
    ]
  },
  {
    id: 'photography-films',
    slug: 'candid-photography-cinematography',
    name: 'Candid Photography & Cinema',
    tagline: 'Editorial-grade visual storytelling capturing real laughter, tears, and high-energy celebration',
    description: 'Award-winning cinematographers and candid masters who shoot like high-fashion documentary directors. Expect stunning colors, true skin tones, 4K drone vistas, and same-day teaser edits.',
    heroImage: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80',
    startingPrice: '₹1.5 Lakhs per day',
    priceNote: 'Includes both cinematic film and candid still master crews',
    features: [
      'Top-Tier Sony Cinema Line FX6/FX3 & Leica Cameras',
      'Licensed 4K Aerial Drone Coverage',
      'Same-Day Sangeet/Wedding Teaser for Socials (Within 12 Hours)',
      'Custom Bound Handcrafted Leather Flush-Mount Albums',
      'Traditional Family Portrait Crews (Zero Missed Elders)',
      'Unrestricted Raw Footage Delivery on High-Speed SSD'
    ],
    subServices: [
      {
        title: 'Cinematic Wedding Films',
        description: '5-7 minute emotive wedding highlights set to custom sound engineering, plus full-length 40-minute documentary.',
        image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=80',
        turnaround: 'Teaser in 24 hrs, Film in 21 days'
      },
      {
        title: 'Editorial Candid Stills',
        description: 'Unposed, magazine-cover moments that capture raw intimacy, joyful tears, and energetic dance floor mania.',
        image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80',
        turnaround: 'Color graded in 14 days'
      },
      {
        title: 'Pre-Wedding Destination Shoots',
        description: 'Artistic 2-day concept shoots in Ladakh, Udaipur, Hampi, or private European villa aesthetics.',
        image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80',
        turnaround: 'Storyboarding & wardrobe guide'
      },
      {
        title: 'Interactive 360° Photobooth & Glamcam',
        description: 'Slow-motion video spinner with instant AirDrop/QR sharing and personalized animated digital frames.',
        image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80',
        turnaround: 'Live at event'
      }
    ],
    whatsIncluded: [
      'Pre-wedding creative brief consultation with Director of Photography',
      'Multi-angle audio recording for vows and speeches',
      'Online password-protected cloud gallery for seamless family sharing',
      'Two handcrafted archival 40-page photobooks for parents',
      'Personalized Instagram Reels & Shorts vertical cuts'
    ]
  },
  {
    id: 'catering-mixology',
    slug: 'gourmet-catering-mixology',
    name: 'Gourmet Catering & Mixology',
    tagline: 'Sensory dining journeys curated with celebrity chefs, royal khansamas & flair mixologists',
    description: 'Elevate your wedding from standard buffet lines to an interactive culinary festival. Authentic regional specialties, artisanal woodfired ovens, nitro chaat bars, and handcrafted botanic cocktails.',
    heroImage: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
    startingPrice: '₹1,400 to ₹3,500 per plate',
    priceNote: 'Custom menus with unlimited live counters and bespoke bar setups',
    features: [
      'Chef Tasting Sessions with 20+ Signature Dishes',
      'Multi-Regional Indian Speciality Chefs (Awadhi, Chettinad, Marwari)',
      'Molecular & Artisanal Cocktail Bar Stations',
      'Late-Night Street Food & Midnight Snack Shacks',
      'Dietary Specializations: Strict Jain, Vegan, Gluten-Free',
      'Luxury Bone China, Gold-Plated Cutlery & Table Linen'
    ],
    subServices: [
      {
        title: 'Royal Awadhi & Mughlai Dawat',
        description: 'Slow-cooked Dum Biryanis, melt-in-mouth Galouti kebabs on Sheermal, and saffron-infused gravies.',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
        turnaround: 'Traditional copper deghs'
      },
      {
        title: 'Global Live Kitchens',
        description: 'Hand-rolled sushi counters, Neapolitan sourdough pizza oven, Mexican taco carts, and dim sum steamers.',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
        turnaround: 'Live chef action'
      },
      {
        title: 'Botanical Craft Cocktail Bar',
        description: 'Custom bride & groom signature drinks, smoked whiskey carts, edible flower garnishes, and craft gin bars.',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80',
        turnaround: 'Flair bartenders & ice stamps'
      },
      {
        title: 'Artisanal Dessert & Mithai Studio',
        description: 'Live jalebi caviar, baked rasgulla tarts, French macaron pyramids, and bespoke wedding cake sculpting.',
        image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=600&q=80',
        turnaround: 'Custom flavor design'
      }
    ],
    whatsIncluded: [
      'Private 8-course tasting session for 6 family members',
      'Menu styling and curated printed table menus',
      'Experienced uniformed waitstaff at 1:10 guest ratio',
      'Hygiene certification and temperature-controlled transport',
      'Leftover food donation partnership with local food rescue NGO'
    ]
  },
  {
    id: 'entertainment-artists',
    slug: 'wedding-entertainment-artists',
    name: 'Celebrity Artists & Entertainment',
    tagline: 'World-class musical performances, headline DJs & vibrant cultural experiences',
    description: 'Keep your guests spellbound across every ceremony. From royal Rajasthani Manganiyar welcome musicians to electrifying Bollywood celebrity DJs and fire performers for the after-party.',
    heroImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    startingPrice: '₹75,000 per performance',
    priceNote: 'Direct artist booking rates with zero agency markups',
    features: [
      'Direct Artist Booking Roster (DJs, Sufi Bands, Standup Comedians)',
      'Concert-Spec Line Array Sound (L-Acoustics, JBL VTX)',
      'Professional Sangeet Choreographers with Remote Video Tutorials',
      'Dynamic Emcees fluent in Hindi, English, Gujarati, Telugu, Tamil',
      'Cold Pyrotechnics, CO2 Cannons & Confetti Blasters',
      'Traditional Cultural Performers (Dholis, Shehnai Maestros, Folk Dancers)'
    ],
    subServices: [
      {
        title: 'Headline Sangeet Live Bands',
        description: 'High-energy fusion, Sufi-rock, and contemporary pop bands that keep the dance floor packed until dawn.',
        image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80',
        turnaround: 'Full rider technical setup'
      },
      {
        title: 'Celebrity Wedding DJs',
        description: 'Elite club and Bollywood DJs with seamless genre mixing and custom visual sync on LED walls.',
        image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80',
        turnaround: 'Personalized playlist curation'
      },
      {
        title: 'Royal Folk & Acoustic Troupes',
        description: 'Soulful Shehnai duos for pheras, Punjabi Bhangra squads for baraat, and classical sitar-tabla ensembles.',
        image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
        turnaround: 'Authentic regional attire'
      },
      {
        title: 'Interactive Guest Experiences',
        description: 'Custom perfume creation bars, live caricature sketchers, tarot readers, and personalized glass bangle makers.',
        image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80',
        turnaround: 'All supplies & booths included'
      }
    ],
    whatsIncluded: [
      'Comprehensive sound engineer & lighting programmer on console',
      'Artist logistics, flights, 5-star green room & rider management',
      'Police, PPL, IPRS, and NOVEX music licensing clearance',
      'Synchronized SFX: dry ice clouds for bridal entry, sparkular machines',
      'Sound check completion 2 hours prior to guest arrival'
    ]
  }
];

export interface LookbookItem {
  id: string;
  title: string;
  category: 'mandap' | 'sangeet' | 'haldi' | 'mehendi' | 'reception' | 'entry' | 'dining';
  categoryLabel: string;
  vibe: 'royal_heritage' | 'pastel_bloom' | 'modern_bohemian' | 'celestial_glamour' | 'tropical_coastal' | 'minimalist_luxury';
  vibeLabel: string;
  image: string;
  gallery: string[];
  locationTag: string;
  colorPalette: string[];
  priceTier: '₹₹ (Smart Elegance)' | '₹₹₹ (Premium Luxe)' | '₹₹₹₹ (Royal Bespoke)';
  estimatedCost: string;
  guestCapacity: string;
  highlights: string[];
  description: string;
}

export const UTSAV_LOOKBOOK_ITEMS: LookbookItem[] = [
  {
    id: 'lb-royal-mandap-rajputana',
    title: 'The Crimson & Gold Sheesh Mahal Mandap',
    category: 'mandap',
    categoryLabel: 'Sacred Mandap',
    vibe: 'royal_heritage',
    vibeLabel: 'Royal Heritage',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80'
    ],
    locationTag: 'Fairmont, Jaipur / Taj Falaknuma',
    colorPalette: ['#800020', '#D4AF37', '#FFFDD0', '#E5A93C'],
    priceTier: '₹₹₹₹ (Royal Bespoke)',
    estimatedCost: '₹5,50,000 – ₹9,00,000',
    guestCapacity: '300 – 1,200 Guests',
    highlights: ['Hand-carved jharokhas', '4,000 kg imported red roses', 'Cascading crystal chandeliers', 'Raised mirror aisle'],
    description: 'Inspired by the grand courtyards of Mewar and Amer Fort. Features intricate gold-leaf arches, hand-cut glass mirror inlays that reflect flickering candlelight, and a grand 16-foot vaulted floral canopy.'
  },
  {
    id: 'lb-pastel-glasshouse-mandap',
    title: 'Ethereal Glasshouse & Hydrangea Water Mandap',
    category: 'mandap',
    categoryLabel: 'Sacred Mandap',
    vibe: 'pastel_bloom',
    vibeLabel: 'Pastel Bloom',
    image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80'
    ],
    locationTag: 'The Leela Palace, Bengaluru / Alila Diwa, Goa',
    colorPalette: ['#FAD2E1', '#E2ECE9', '#BEE1E6', '#FFF'],
    priceTier: '₹₹₹ (Premium Luxe)',
    estimatedCost: '₹4,20,000 – ₹7,50,000',
    guestCapacity: '200 – 600 Guests',
    highlights: ['Floating acrylic platform on water', 'Dutch blush hydrangeas', 'Delicate wisteria drops', 'Ambient sunset backlight'],
    description: 'Designed for couples who adore modern European elegance blended with sacred Vedic rituals. A transparent glass platform rests over water with floating lotus blossoms and pastel blooms.'
  },
  {
    id: 'lb-celestial-sangeet-glam',
    title: 'Neon Starlight Amphitheater & Kinetic Stage',
    category: 'sangeet',
    categoryLabel: 'Sangeet Stage',
    vibe: 'celestial_glamour',
    vibeLabel: 'Celestial Glamour',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80'
    ],
    locationTag: 'Taj Exotica, Goa / JW Marriott, Bengaluru',
    colorPalette: ['#0B132B', '#1C2541', '#5BC0BE', '#6FFFE9'],
    priceTier: '₹₹₹₹ (Royal Bespoke)',
    estimatedCost: '₹6,00,000 – ₹11,00,000',
    guestCapacity: '400 – 1,500 Guests',
    highlights: ['30-ft curved P2.6 LED screen', 'Kinetic light balls with DMX control', 'Custom neon dance floor', 'Cold pyro sync'],
    description: 'A stadium-caliber concert experience. Custom 3D visuals reacting in real-time to music beats, flanked by floating mirror arches and elevated VIP lounges with custom velvet banquettes.'
  },
  {
    id: 'lb-sunburst-marigold-haldi',
    title: 'Boho Marigold Sunshine & Brass Uruli Haldi',
    category: 'haldi',
    categoryLabel: 'Haldi & Chooda',
    vibe: 'modern_bohemian',
    vibeLabel: 'Modern Bohemian',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80'
    ],
    locationTag: 'Poolside / Heritage Lawn',
    colorPalette: ['#FFAA00', '#FF7700', '#FFE600', '#F3ECE4'],
    priceTier: '₹₹ (Smart Elegance)',
    estimatedCost: '₹2,50,000 – ₹4,20,000',
    guestCapacity: '100 – 350 Guests',
    highlights: ['Giant flower swing with yellow marigolds', 'Oversized antique brass Urulis', 'Organic petal shower guns', 'Block-printed cabanas'],
    description: 'A burst of pure joy and vibrant sunshine. Includes woven rattan seating, brass bells ringing in the breeze, vibrant gulal stations, and flower-filled plunge urulis for the bride and groom.'
  },
  {
    id: 'lb-tropical-coastal-mehendi',
    title: 'Tropical Cane, Pampas & Citrus Bloom Mehendi',
    category: 'mehendi',
    categoryLabel: 'Mehendi Carnival',
    vibe: 'tropical_coastal',
    vibeLabel: 'Tropical Coastal',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80'
    ],
    locationTag: 'Goa Clifftop / Kovalam Beach',
    colorPalette: ['#E07A5F', '#3D405B', '#81B29A', '#F2CC8F'],
    priceTier: '₹₹₹ (Premium Luxe)',
    estimatedCost: '₹3,50,000 – ₹5,80,000',
    guestCapacity: '150 – 400 Guests',
    highlights: ['Custom wicker cabanas', 'Pampas grass cloud installations', 'Citrus & lime table scapes', 'Acoustic live stage'],
    description: 'Breezy boho-chic celebration with open-weave macramé backdrops, fresh fruit crates, and personalized straw sun-hat giveaways for your guests.'
  },
  {
    id: 'lb-fairytale-ballroom-reception',
    title: 'The Gilded Mirrored Forest Reception Gala',
    category: 'reception',
    categoryLabel: 'Grand Reception',
    vibe: 'minimalist_luxury',
    vibeLabel: 'Minimalist Luxury',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80'
    ],
    locationTag: 'ITC Grand Chola / The Oberoi, Gurgaon',
    colorPalette: ['#0A0A0A', '#E5E5E5', '#C5A059', '#3A3A3C'],
    priceTier: '₹₹₹₹ (Royal Bespoke)',
    estimatedCost: '₹5,00,000 – ₹9,50,000',
    guestCapacity: '350 – 1,500 Guests',
    highlights: ['500 tapered ivory candles', 'Monochrome floral arches', 'Smoked mirror dining tables', 'Custom 8-tier champagne tower'],
    description: 'Black-tie glamour meets botanical poetry. Sleek architectural clean lines, mirrored tables reflecting soft candlelight, and white orchids cascading from dramatic elevated pergolas.'
  },
  {
    id: 'lb-monumental-tunnel-entrance',
    title: 'The Rajnigandha & Diya Tunnel Passage',
    category: 'entry',
    categoryLabel: 'Grand Entrance',
    vibe: 'royal_heritage',
    vibeLabel: 'Royal Heritage',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80'
    ],
    locationTag: 'Palace Gateways & Grand Lawns',
    colorPalette: ['#D4AF37', '#FFF', '#8A1C14'],
    priceTier: '₹₹₹ (Premium Luxe)',
    estimatedCost: '₹3,20,000 – ₹5,50,000',
    guestCapacity: 'All Guest Influx',
    highlights: ['80-foot long aromatic tunnel', '10,000 strung fresh rajnigandha strings', 'Warm brass oil lamps', 'Live Shehnai alcoves'],
    description: 'Create an unforgettable first impression. Guests walk through a shaded corridor of scented Indian florals with gentle water fountains and flute melodies guiding them toward the celebrations.'
  },
  {
    id: 'lb-candlelit-banquet-tablescape',
    title: 'Royal Mughal Dining Tablescape & Fine Cutlery',
    category: 'dining',
    categoryLabel: 'Banqueting & Tablescapes',
    vibe: 'pastel_bloom',
    vibeLabel: 'Pastel Bloom',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80'
    ],
    locationTag: 'Indoor Ballrooms & Outdoor Courtyards',
    colorPalette: ['#C5A059', '#F4F1DE', '#3D405B'],
    priceTier: '₹₹ (Smart Elegance)',
    estimatedCost: '₹1,80,000 – ₹3,50,000',
    guestCapacity: '200 – 800 Seated Guests',
    highlights: ['Fine crystal stemware', 'Hand-stitched linen napkins with monogram', 'Low floral centerpieces (eye-level friendly)', 'Personalized placecards'],
    description: 'Ensure your guests dine like royalty. Intelligently scaled floral runners so table conversations flow effortlessly across intimate candlelit tables.'
  }
];

export interface RealWeddingStory {
  id: string;
  slug: string;
  coupleNames: string;
  tagline: string;
  city: string;
  venueName: string;
  guestCount: number;
  eventsCount: number;
  theme: string;
  budgetRange: string;
  coverImage: string;
  gallery: string[];
  quote: string;
  quoteAuthor: string;
  storyHighlights: string[];
  breakdown: {
    decor: string;
    planning: string;
    photography: string;
    entertainment: string;
  };
}

export const UTSAV_REAL_WEDDINGS: RealWeddingStory[] = [
  {
    id: 'rw-ananya-kabir',
    slug: 'ananya-and-kabir-leela-palace-bengaluru',
    coupleNames: 'Ananya & Kabir',
    tagline: '3-Day Regal Botanical Celebration in Bengaluru',
    city: 'Bengaluru',
    venueName: 'The Leela Palace, Bengaluru',
    guestCount: 450,
    eventsCount: 4,
    theme: 'Royal Rajputana Grandeur meets Modern Pastel Romance',
    budgetRange: '₹38 Lakhs (Total Decor & Planning)',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80'
    ],
    quote: "UTSAV LUXE turned what felt like an impossible logistical puzzle into the smoothest, most visually mesmerizing weekend of our lives. The 3D render of the water mandap looked identical to the real setup on our wedding day!",
    quoteAuthor: 'Ananya (Bride), Bangalore Tech Entrepreneur',
    storyHighlights: [
      'Circular glass mandap built directly over the palace reflecting pool',
      '30-piece live Sufi symphony for the sundowner cocktail',
      'Minute-by-minute timeline coordination for 120 outstation guests arriving from 6 countries'
    ],
    breakdown: {
      decor: '₹22,00,000 (4 functions, 14,000+ blooms)',
      planning: '₹4,50,000 (Turnkey management & bridal shadow squad)',
      photography: '₹5,50,000 (Full 4-crew cinema + same-day teaser)',
      entertainment: '₹6,00,000 (Live Sufi band + Bollywood DJ)'
    }
  },
  {
    id: 'rw-riya-siddharth',
    slug: 'riya-and-siddharth-alila-diwa-goa',
    coupleNames: 'Riya & Siddharth',
    tagline: 'Bohemian Sunset Pheras & Neon Beach Sangeet in South Goa',
    city: 'Goa',
    venueName: 'Alila Diwa, South Goa',
    guestCount: 260,
    eventsCount: 3,
    theme: 'Coastal Minimalist Bohemian & Neon Tropical Nights',
    budgetRange: '₹26 Lakhs (Decor, Production & Stays Support)',
    coverImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80'
    ],
    quote: "Zero stress. That’s the honest truth. From hotel room tagging to negotiating the sound permit extension till 1 AM with Goa authorities, Utsav Luxe handled everything like seasoned pros.",
    quoteAuthor: 'Siddharth (Groom), Creative Director',
    storyHighlights: [
      'Sunset pheras overlooking emerald paddy fields with acoustic saxophone',
      'Eco-friendly decor using dried pampas, cane furniture, and local seasonal palms',
      'Custom beach bar with signature coconut-rum infusions'
    ],
    breakdown: {
      decor: '₹14,50,000 (Sunset mandap, pool haldi & neon sangeet)',
      planning: '₹3,80,000 (Logistics, airport transfers & coordination)',
      photography: '₹4,20,000 (Drone cinematography & candid stills)',
      entertainment: '₹3,50,000 (Saxophonist, beach DJ & acoustic ensemble)'
    }
  },
  {
    id: 'rw-tanvi-aditya',
    slug: 'tanvi-and-aditya-fairmont-jaipur',
    coupleNames: 'Tanvi & Aditya',
    tagline: 'Grand Rajputana Palace Takeover with Elephant Baraat in Jaipur',
    city: 'Jaipur',
    venueName: 'Fairmont Jaipur, Kukas',
    guestCount: 650,
    eventsCount: 5,
    theme: 'Mughal Courtyard & Royal Rajasthani Splendor',
    budgetRange: '₹62 Lakhs (End-to-End Production & Decor)',
    coverImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80'
    ],
    quote: "Our families were blown away by the precision. When you have 650 high-profile guests, timing is everything. Utsav Luxe had 16 walkie-talkie crew members on site. Flawless execution.",
    quoteAuthor: 'Mr. R. K. Singhania (Father of the Bride)',
    storyHighlights: [
      '20-foot tall Sheesh Mahal mandap with 10,000 hand-pinned tuberoses',
      'Elephant baraat with traditional Nagada and royal horse cavalry',
      'Midnight fireworks show synchronized to live shehnai'
    ],
    breakdown: {
      decor: '₹36,00,000 (5 lavish events + structural trussing)',
      planning: '₹8,00,000 (Full VIP protocol, security & 18-member operations squad)',
      photography: '₹7,50,000 (6-member editorial team & crane cameras)',
      entertainment: '₹10,50,000 (Headliner celebrity singer + royal Manganiyars)'
    }
  }
];

export interface UtsavVenueItem {
  id: string;
  name: string;
  city: string;
  citySlug: string;
  type: string;
  image: string;
  capacity: string;
  roomsCount: number;
  startingPlatePrice: string;
  highlights: string[];
  description: string;
}

export const UTSAV_CURATED_VENUES: UtsavVenueItem[] = [
  {
    id: 'venue-leela-bengaluru',
    name: 'The Leela Palace Bengaluru',
    city: 'Bengaluru',
    citySlug: 'bengaluru',
    type: 'Ultra Luxury Heritage Palace',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    capacity: '800 Guests',
    roomsCount: 357,
    startingPlatePrice: '₹3,500 + taxes',
    highlights: ['Grand Ballroom with royal chandeliers', 'Outdoor lagoon lawns', 'Archival copper domes'],
    description: 'Palatial architecture set amidst seven acres of lush tropical gardens and lagoons right in central Bangalore.'
  },
  {
    id: 'venue-fairmont-jaipur',
    name: 'Fairmont Jaipur',
    city: 'Jaipur',
    citySlug: 'jaipur',
    type: 'Mughal & Rajput Fortress',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
    capacity: '1,200 Guests',
    roomsCount: 245,
    startingPlatePrice: '₹3,800 + taxes',
    highlights: ['Pillarless grand ballroom', 'Courtyard of mirrors (Charbagh)', 'Dramatic Aravali backdrop'],
    description: 'Tucked away in the Aravali hills, this modern fortress blends traditional Rajasthani luxury with world-class hospitality.'
  },
  {
    id: 'venue-alila-goa',
    name: 'Alila Diwa Goa',
    city: 'Goa',
    citySlug: 'goa',
    type: 'Boutique Coastal Resort',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
    capacity: '450 Guests',
    roomsCount: 153,
    startingPlatePrice: '₹2,800 + taxes',
    highlights: ['Infinity pool overlooking paddy fields', 'Banyan tree courtyard for pheras', 'Private beach shuttle'],
    description: 'A serene haven in South Goa offering contemporary Goan architecture with open teak wood verandahs.'
  },
  {
    id: 'venue-taj-falaknuma',
    name: 'Taj Falaknuma Palace',
    city: 'Hyderabad',
    citySlug: 'hyderabad',
    type: 'Historic Hilltop Royal Palace',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80',
    capacity: '500 Guests',
    roomsCount: 60,
    startingPlatePrice: '₹5,500 + taxes',
    highlights: ['101-seat dining table', 'Horse-drawn carriage entry', '360° views of Hyderabad city'],
    description: 'Perched 2,000 feet above Hyderabad, the palace of the Nizams offers pure unadulterated royal opulence.'
  },
  {
    id: 'venue-oberoi-gurgaon',
    name: 'The Oberoi Gurgaon',
    city: 'Delhi NCR',
    citySlug: 'delhi-ncr',
    type: 'Contemporary Luxury Glasshouse',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
    capacity: '1,000 Guests',
    roomsCount: 202,
    startingPlatePrice: '₹4,000 + taxes',
    highlights: ['Massive water bodies & reflecting pools', 'Ultra-modern banquet ceilings', 'Floor-to-ceiling glass architecture'],
    description: 'An architectural marvel in Delhi NCR with sprawling aquatic lawns and pristine minimalist luxury.'
  },
  {
    id: 'venue-taj-lands-end',
    name: 'Taj Lands End Bandra',
    city: 'Mumbai',
    citySlug: 'mumbai',
    type: 'Coastal Sea-Facing Ballroom',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80',
    capacity: '1,200 Guests',
    roomsCount: 493,
    startingPlatePrice: '₹3,600 + taxes',
    highlights: ['Arabian Sea sunset lawn', 'Bandra-Worli Sea Link panorama', 'Celebrity-grade security management'],
    description: 'Unmatched coastal views in the heart of Mumbai, providing a grand seaside backdrop for your celebrations.'
  }
];

export interface UtsavPackagePlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  tagline: string;
  priceDisplay: string;
  estimatedBudget: string;
  guestRange: string;
  eventFunctions: string;
  features: string[];
  decorScope: string;
  planningScope: string;
  idealFor: string;
}

export const UTSAV_PACKAGE_PLANS: UtsavPackagePlan[] = [
  {
    id: 'pkg-elegance',
    name: 'Elegance Essential',
    tagline: 'Refined aesthetic decor & day-of coordination for modern celebrations',
    priceDisplay: '₹4.5 Lakhs*',
    estimatedBudget: 'Decor & Production: ₹3.5L – ₹6.5L',
    guestRange: '100 – 300 Guests',
    eventFunctions: '2-3 Ceremonies (Haldi, Sangeet & Pheras)',
    decorScope: 'Floral sacred mandap, photogenic stage backdrop, ambient LED trussing & entrance archway',
    planningScope: 'Day-of coordination squad (4 members), timeline enforcement & vendor management',
    idealFor: 'Intimate city weddings, boutique lawn parties & pre-wedding celebrations',
    features: [
      'Interactive 3D decor render preview',
      'Fresh seasonal floral styling (roses, marigolds, carnations)',
      'Ambient warm lighting & focus stage spotlights',
      'Printed signage & welcome easels',
      'Day-of timeline coordinator on site',
      'Free 1-hour consultation with Senior Stylist'
    ]
  },
  {
    id: 'pkg-grandeur',
    name: 'Luxe Grandeur',
    badge: 'MOST POPULAR',
    isPopular: true,
    tagline: 'Complete turnkey experiential decor, hospitality & full wedding planning',
    priceDisplay: '₹9.8 Lakhs*',
    estimatedBudget: 'Decor & Production: ₹8.5L – ₹16L',
    guestRange: '250 – 700 Guests',
    eventFunctions: '3-4 Ceremonies (Haldi/Mehendi, Sangeet, Wedding & Reception)',
    decorScope: 'Custom designed 16-ft architectural mandap, concert-spec Sangeet stage with LED walls, themed furniture & tablescapes',
    planningScope: 'Full 3-month turnkey planning: budget tracking, vendor negotiation, bridal shadow & guest hospitality desk',
    idealFor: 'Couples desiring high-impact visual design and completely stress-free families',
    features: [
      'Photorealistic 3D CAD walk-through of all venues',
      'Imported blooms: Dutch hydrangeas, baby’s breath & orchids',
      'Concert sound & intelligent moving beam light show',
      'Dedicated Bride & Groom Shadow Assistants',
      'Airport transfer dispatch & luggage tracking desk',
      'Custom couple monograms, cocktail menus & room hampers',
      'Free venue recce & negotiation assistance'
    ]
  },
  {
    id: 'pkg-royal-destination',
    name: 'Royal Heritage / Destination',
    badge: 'ALL-INCLUSIVE',
    tagline: 'Monumental palace or beachfront takeover with ultra-luxury curation',
    priceDisplay: '₹21 Lakhs*',
    estimatedBudget: 'Decor & Production: ₹18L – ₹40L+',
    guestRange: '300 – 1,500+ Guests',
    eventFunctions: 'Full 3-Day Wedding Extravaganza (5-6 functions)',
    decorScope: 'Massive scale structural build: glass water mandaps, chandelier forests, custom tunnels & VIP lounges',
    planningScope: 'Complete 6-month turnkey concierge: chartered fleet, VIP protocol, government permissions & 16-member team',
    idealFor: 'Destination weddings in Rajasthan, Goa, Kerala or multi-thousand guest city galas',
    features: [
      'Unrestricted 3D render revisions until 100% perfection',
      'Direct farm floral imports with zero volume limits',
      'Pyrotechnics, cold sparkulars, heavy smoke & CO2 cannons',
      'Full 16-member on-ground operations squad on walkie-talkies',
      'Guest hospitality management across multiple 5-star hotel blocks',
      'Personalized couple mobile web portal for RSVP & itineraries',
      'Complete rehearsal direction with Sangeet choreographers'
    ]
  }
];

export interface UtsavFaqItem {
  question: string;
  answer: string;
  category: string;
}

export const UTSAV_FAQS: UtsavFaqItem[] = [
  {
    category: 'Planning & Process',
    question: 'How does UTSAV LUXE differ from traditional wedding planners and local tent decorators?',
    answer: 'Traditional decorators show outdated phone pictures and quote lump-sum prices with surprise last-minute add-ons. UTSAV LUXE operates as a tech-enabled modern platform: we create photorealistic 3D renders of your exact venue before you sign, provide 100% line-item transparent billings, and manufacture custom decor in our own production hubs. Plus, you get an elite, walkie-talkie equipped operations team that keeps your wedding running to the exact minute.'
  },
  {
    category: 'Planning & Process',
    question: 'Can we book only Decor & Design, or do we have to take Full Turnkey Planning?',
    answer: 'You have complete flexibility! You can hire us strictly for Experiential Decor & Scenography, strictly for Turnkey Planning & Guest Management, or for our end-to-end full stack service. We integrate seamlessly with any venue-mandated vendors or external photographers you may have already hired.'
  },
  {
    category: 'Budget & Pricing',
    question: 'What is your fee structure? Are there any hidden agency markups or kickbacks?',
    answer: 'We have a strict Zero-Hidden-Kickbacks policy. Our turnkey planning is billed either as a transparent flat professional fee or a transparent milestone-based structure. For decor, you receive itemized cost sheets detailing flower varieties, trussing footage, and light counts. Any vendor discounts we negotiate with luxury hotels or artists are passed 100% directly to you.'
  },
  {
    category: '3D Design & Lookbook',
    question: 'How early will we see the 3D designs of our mandap and stage?',
    answer: 'Within 5-7 business days of our initial creative briefing and venue site recce, our architectural 3D team generates high-resolution renders and a 360-degree digital walkthrough. You can tweak color palettes, floral densities, and lighting until it matches your exact aesthetic vision.'
  },
  {
    category: 'Destinations & Cities',
    question: 'Which cities and destination wedding locations do you cover?',
    answer: 'We have permanent operational studios in Bengaluru, Delhi NCR, Mumbai, Hyderabad, and Jaipur, along with seasonal destination hubs in Goa, Udaipur, and Chennai. We also regularly execute destination weddings in Jim Corbett, Mussoorie, Kerala backwaters, and international destinations like Thailand and Dubai.'
  },
  {
    category: 'Vendors & Operations',
    question: 'How do you handle day-of emergencies or bad weather for outdoor ceremonies?',
    answer: 'Every outdoor wedding has an established Plan B weather protocol (waterproof transparent German canopy structures, secondary indoor banquet holding rooms, and rapid-dry turf systems). Our on-ground crew carries medical supplies, industrial steam irons, wardrobe repair kits, and backup power generators on standby.'
  },
  {
    category: 'Booking & Timelines',
    question: 'How many months in advance should we start planning with UTSAV LUXE?',
    answer: 'We recommend booking 4 to 8 months in advance, especially for popular auspicious dates (Sawa dates) between October and March. However, our modular in-house fabrication and experienced team have successfully executed stunning luxury weddings on just 30 days’ notice.'
  }
];

export interface UtsavReviewItem {
  id: string;
  author: string;
  relation: string;
  city: string;
  rating: number;
  date: string;
  avatar: string;
  title: string;
  text: string;
  venueName: string;
}

export const UTSAV_REVIEWS: UtsavReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Pooja & Rohan Mehra',
    relation: 'Bride & Groom',
    city: 'Bengaluru',
    rating: 5,
    date: 'February 2026',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    title: 'The 3D Renders Matched Reality Down to the Flower Petal!',
    text: 'We were nervous because we were planning our Bangalore wedding while living in London. The Utsav Luxe team set up virtual 3D walkthroughs of our Sangeet stage at The Leela Palace. When we walked into the ballroom on our wedding evening, it was literally our 3D render come to life. The guests couldn’t stop talking about the floral water mandap!',
    venueName: 'The Leela Palace Bengaluru'
  },
  {
    id: 'rev-2',
    author: 'Col. Vikramaditya Rathore',
    relation: 'Father of the Bride',
    city: 'Jaipur',
    rating: 5,
    date: 'January 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    title: 'Flawless Military-Grade Precision at Fairmont Jaipur',
    text: 'Being an army veteran, punctuality and disciplined logistics matter deeply to me. Utsav Luxe assigned a 14-person squad with walkie-talkies. The baraat started at 4:30 PM sharp, pheras completed inside the mahurat window, and dinner was served hot to 600 people without a single hitch. Worth every rupee.',
    venueName: 'Fairmont Jaipur'
  },
  {
    id: 'rev-3',
    author: 'Natasha & Dev Sharma',
    relation: 'Bride & Groom',
    city: 'Goa',
    rating: 5,
    date: 'December 2025',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    title: 'The Best Sunset Beachfront Wedding in South Goa',
    text: 'Their transparency is unmatched. Other planners we spoke with gave arbitrary lump sums. Utsav Luxe showed us the exact cost of each truss, light, and pampas bundle. They saved us almost 18% on our room block at Alila Diwa too. Thank you for making our celebration magical!',
    venueName: 'Alila Diwa South Goa'
  },
  {
    id: 'rev-4',
    author: 'Dr. Shalini & Dr. Akhil Reddy',
    relation: 'Bride & Groom',
    city: 'Hyderabad',
    rating: 5,
    date: 'November 2025',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    title: 'Elegance, Warmth & Complete Peace of Mind',
    text: 'As busy doctors, we simply didn’t have the bandwidth to interview 50 different florists and sound technicians. Utsav Luxe was our single trusted point of contact. Our bridal shadow team made sure Shalini had water, touch-up makeup, and snacks throughout the 8-hour ceremony. Extraordinary care.',
    venueName: 'Taj Falaknuma Palace Hyderabad'
  }
];

// BusinessWebsite definition conforming to RaozSite types
export const UTSAV_LUXE_WEBSITE: BusinessWebsite = {
  id: 'site-69',
  userId: 'usr-utsav-luxe',
  slug: '69-utsav-luxe',
  businessName: 'UTSAV LUXE',
  category: 'wedding_event_planning',
  templateId: 'tpl-destination-wedding',
  tagline: "India's Modern Full-Stack Wedding Planning & Experiential Decor Platform",
  description: 'Tech-driven 3D decor design, curated luxury palace & coastal venues, concert-spec entertainment, gourmet catering and turnkey day-of coordination across Bengaluru, Delhi, Mumbai, Hyderabad, Jaipur & Goa.',
  ownerName: 'Utsav Luxe Directorate',
  phone: '+91 98200 45890',
  whatsapp: '+91 98200 45890',
  email: 'hello@utsavluxe.com',
  address: 'Indiranagar Flagship Studio, 100 Ft Road, Bengaluru, Karnataka 560038',
  city: 'Bengaluru & Pan-India',
  mapsUrl: 'https://maps.google.com/?q=100+Ft+Road+Indiranagar+Bengaluru',
  openingHours: 'Mon - Sun: 9:30 AM – 9:00 PM',
  logoUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=150&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80',
  primaryColor: '#E05A47',
  secondaryColor: '#D4AF37',
  status: 'published',
  bookingType: 'consultation_quote',
  bookingCtaLabel: 'View Project #69',
  specialBadge: 'Project #69 · Tech-Driven Wedding & Decor Platform',
  pricingPlanId: 'premium',
  amountPaid: 0,
  paymentStatus: 'paid',
  sections: [
    { id: 'hero', title: 'Cinematic 3D Video Hero & Estimator Widget', isEnabled: true, order: 1 },
    { id: 'services', title: 'Full-Stack Wedding Services & Capabilities', isEnabled: true, order: 2 },
    { id: 'calculator', title: 'Interactive Real-Time Wedding Cost Calculator', isEnabled: true, order: 3 },
    { id: 'lookbook', title: 'The 3D Wedding Design Lookbook & CAD Blueprints', isEnabled: true, order: 4 },
    { id: 'why-choose-us', title: 'Head-to-Head Comparison vs Traditional Planners', isEnabled: true, order: 5 },
    { id: 'process', title: '4-Phase Architectural Planning Journey', isEnabled: true, order: 6 },
    { id: 'real-weddings', title: 'Celebrated Real Wedding Stories & Case Studies', isEnabled: true, order: 7 },
    { id: 'venues', title: 'Curated 5-Star Palaces & Coastal Venues', isEnabled: true, order: 8 },
    { id: 'packages', title: 'Transparent Packages & Custom Scale Tiers', isEnabled: true, order: 9 },
    { id: 'testimonials', title: 'Verified Couple & Family Reviews (4.94★)', isEnabled: true, order: 10 },
    { id: 'faqs', title: 'Comprehensive Planning & Fee FAQs', isEnabled: true, order: 11 },
    { id: 'contact', title: 'Lead Generation & Private Recce Booking', isEnabled: true, order: 12 }
  ],
  items: [
    {
      id: 'itm-utsav-1',
      name: 'Experiential Decor & Scenography',
      description: 'Custom 3D CAD renders, sacred mandaps, floral archways, kinetic Sangeet stages and designer lighting.',
      price: 250000,
      category: 'Decor & Production',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
      isAvailable: true,
      popular: true,
      unit: 'per event'
    },
    {
      id: 'itm-utsav-2',
      name: 'Turnkey Wedding Planning & Management',
      description: '48-page master timeline, vendor contract audits, RSVP tracking, bridal shadow and 14-member operations squad.',
      price: 180000,
      category: 'Planning & Concierge',
      imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80',
      isAvailable: true,
      popular: true,
      unit: 'complete wedding'
    },
    {
      id: 'itm-utsav-3',
      name: 'Curated Venues & Palace Buyouts',
      description: 'Exclusive wholesale rates and guaranteed room blocks at 300+ palatial resorts, beach estates & heritage hotels.',
      price: 500000,
      category: 'Venues & Stays',
      imageUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80',
      isAvailable: true,
      popular: true,
      unit: 'preferred booking'
    },
    {
      id: 'itm-utsav-4',
      name: 'Editorial Candid Photography & Cinema',
      description: 'Documentary candid masters, 4K licensed aerial drone cinematography, and same-day social media teaser cut.',
      price: 150000,
      category: 'Photography & Films',
      imageUrl: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80',
      isAvailable: true,
      popular: true,
      unit: 'per day'
    },
    {
      id: 'itm-utsav-5',
      name: 'Gourmet Catering & Molecular Mixology',
      description: 'Regional Indian royal banquets, live international action stations, artisanal cocktail bars and chef tasting tables.',
      price: 1800,
      category: 'Food & Banqueting',
      imageUrl: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80',
      isAvailable: true,
      popular: true,
      unit: 'per plate'
    },
    {
      id: 'itm-utsav-6',
      name: 'Headline Artists & Sangeet Entertainment',
      description: 'Celebrity DJs, live Sufi bands, royal Rajasthani folk ensembles, cold pyrotechnics and stage choreography.',
      price: 75000,
      category: 'Entertainment',
      imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80',
      isAvailable: true,
      popular: false,
      unit: 'per performance'
    }
  ],
  gallery: [
    {
      id: 'gal-utsav-1',
      title: 'Water Pavilion Mandap with Hydrangeas, Bengaluru',
      category: 'events',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'gal-utsav-2',
      title: 'Pastel Garden Glasshouse Mandap, Goa',
      category: 'events',
      imageUrl: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'gal-utsav-3',
      title: 'Neon Starlight Kinetic Concert Stage, Jaipur',
      category: 'facilities',
      imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'gal-utsav-4',
      title: 'Sunburst Boho Marigold Swing Haldi, Udaipur',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'gal-utsav-5',
      title: 'Tropical Beachfront Pampas Canopy, South Goa',
      category: 'events',
      imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'gal-utsav-6',
      title: 'Mirrored Gala Ballroom Reception, Hyderabad',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80'
    }
  ],
  offers: [
    {
      id: 'off-free-3d',
      title: 'Complimentary 3D Venue Walkthrough & Recce',
      description: 'Book your wedding consultation this week and receive a complimentary 3D photorealistic render of your sacred mandap.',
      discountPercent: 100,
      validTill: '2026-12-31'
    }
  ],
  createdAt: '2026-01-15T00:00:00Z',
  updatedAt: '2026-10-04T00:00:00Z'
};

export const ALL_UTSAV_WEBSITES: BusinessWebsite[] = [UTSAV_LUXE_WEBSITE];
