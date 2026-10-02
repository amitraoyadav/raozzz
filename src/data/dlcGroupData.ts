import { BusinessWebsite } from '../types';

export interface DLCProperty {
  id: string;
  title: string;
  slug: string;
  developer: string;
  category: 'Residential' | 'Commercial' | 'Farm House' | 'Plots' | 'Luxury';
  subCategory?: string;
  location: string;
  locality: string;
  city: 'Delhi' | 'Gurugram' | 'Noida' | 'Jewar' | 'Sohna';
  area: string;
  size: string;
  price: string;
  priceValue?: number; // approx in INR for sorting
  bhk?: string;
  status: 'Ready to Move' | 'Under Construction' | 'Newly Launched' | 'Pre-Launch' | 'Ready for Plantation & Construction';
  possessionDate: string;
  reraId: string;
  featuredImage: string;
  gallery: string[];
  description: string;
  highlights: string[];
  amenities: string[];
  latitude?: number;
  longitude?: number;
  isFeatured: boolean;
  brochureUrl?: string;
}

export interface DLCTeamMember {
  name: string;
  role: string;
  avatar: string;
  experience: string;
  specialization: string;
}

export interface DLCTestimonial {
  id: string;
  name: string;
  avatar: string;
  role: string;
  location: string;
  propertyName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface DLCFaq {
  question: string;
  answer: string;
  category: 'General' | 'Registration' | 'Loans' | 'Investment';
}

export interface DLCBlog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  readTime: string;
  tags: string[];
  content: string[];
}

export interface DLCLocality {
  name: string;
  zone: 'South Delhi' | 'Dwarka & West Delhi' | 'Gurugram' | 'Noida & Yamuna Expressway';
  avgPriceSqFt: string;
  annualGrowth: string;
  rentalYield: string;
  description: string;
  topProjects: string[];
}

export const DLC_CONTACT = {
  name: 'DLC Group',
  legalName: 'Delhi Land & Constructions LLP',
  tagline: 'Real Estate Advisory Company Delhi NCR',
  phone: '+91 81004 81006',
  phoneRaw: '918100481006',
  email: 'Info@dlcgroup.in',
  reraNumber: 'DLRERA2025A0128',
  address: 'Level 12, Two Horizon Center, Golf Course Road, DLF Phase 5, Gurugram & Barakhamba Road, Connaught Place, New Delhi',
  registeredOffice: 'Delhi Land & Constructions LLP, New Delhi, India',
  hours: 'Mon - Sun: 9:30 AM - 7:30 PM',
  social: {
    facebook: 'https://www.facebook.com/dlcgroupofficial',
    instagram: 'https://www.instagram.com/dlcgroupofficial/',
    linkedin: 'https://www.linkedin.com/company/delhi-land-and-constructions-llp',
    twitter: 'https://x.com/dlcgroupoffl',
    youtube: 'https://www.youtube.com/@DLCGroupRealEstate'
  }
};

export const DLC_PROPERTIES: DLCProperty[] = [
  {
    id: 'dlc-prop-1',
    title: 'ROF Pravasa',
    slug: 'rof-pravasa-sec-88a-gurugram',
    developer: 'ROF Group',
    category: 'Residential',
    subCategory: 'Luxury High-Rise Floors & Apartments',
    location: 'Sector 88A, Dwarka Expressway, Gurugram',
    locality: 'Sector 88A',
    city: 'Gurugram',
    area: '1,848 - 2,744 sq.ft.',
    size: '3 & 4 BHK Luxury Residences',
    price: '₹ 2.25 Cr*',
    priceValue: 22500000,
    bhk: '3 BHK, 4 BHK',
    status: 'Under Construction',
    possessionDate: 'Dec 2026',
    reraId: 'HRERA-PKL-GGM-1245-2023',
    featuredImage: '/assets/dlcgroup/rof-pravasa.webp',
    gallery: [
      '/assets/dlcgroup/rof-pravasa.webp',
      '/assets/dlcgroup/slide-1.webp',
      '/assets/dlcgroup/hero-banner.webp'
    ],
    description: 'ROF Pravasa in Sector 88A Gurugram is a benchmark in contemporary luxury living along the bustling Dwarka Expressway corridor. Offering spacious 3 and 4 BHK low-density luxury floors with private basement lounges, expansive terraces, modular European kitchens, and high-end clubhouse amenities.',
    highlights: [
      'Direct connectivity to Dwarka Expressway & CPR',
      'Exclusive Pravasa Club with Olympic length swimming pool',
      'Private lift access to every floor',
      'Dedicated basement storage & home office suites',
      '80% landscaped green open spaces'
    ],
    amenities: [
      'Clubhouse',
      'Swimming Pool',
      'Gymnasium',
      'Tennis Court',
      '24/7 Multi-tier Security',
      'EV Charging Bays',
      'Jogging Track',
      'Kids Play Area'
    ],
    latitude: 28.435,
    longitude: 76.962,
    isFeatured: true
  },
  {
    id: 'dlc-prop-2',
    title: 'Tarc Kailasa',
    slug: 'tarc-kailasa-kirti-nagar-delhi',
    developer: 'TARC Limited',
    category: 'Luxury',
    subCategory: 'Ultra-Luxury High-Rise Residences',
    location: 'Kirti Nagar, Central West Delhi, New Delhi',
    locality: 'Kirti Nagar',
    city: 'Delhi',
    area: '3,440 - 4,240 sq.ft.',
    size: '3.5 & 4.5 BHK Experiential Homes',
    price: '₹ 9.50 Cr*',
    priceValue: 95000000,
    bhk: '3.5 BHK, 4.5 BHK',
    status: 'Newly Launched',
    possessionDate: '2028',
    reraId: 'DLRERA2024A0008',
    featuredImage: '/assets/dlcgroup/tarc-kailasa.webp',
    gallery: [
      '/assets/dlcgroup/tarc-kailasa.webp',
      '/assets/dlcgroup/slide-2.webp',
      '/assets/dlcgroup/hero-banner.webp'
    ],
    description: 'Tarc Kailasa is Central West Delhi’s most iconic ultra-luxury development. Rising across high-rise residential towers designed by world-renowned architects, each residence features 12-foot clear ceiling heights, wrap-around viewing decks, private elevator lobbies, and unmatched views across Delhi’s skyline.',
    highlights: [
      'Prime central location in Kirti Nagar with seamless Connaught Place connectivity',
      'Private elevator vestibules for each apartment',
      'Grand 7-star clubhouse managed by luxury hospitality partners',
      'Triple-height arrival entrance lobbies',
      'Heated indoor swimming pool & wellness sanctuary'
    ],
    amenities: [
      'Sky Lounge',
      'Temperature Controlled Pool',
      'Private Cigar & Wine Room',
      'Concierge Services',
      'Squash Courts',
      'Fine Dining Restaurant on-site',
      'Spa & Sauna Suites'
    ],
    latitude: 28.652,
    longitude: 77.143,
    isFeatured: true
  },
  {
    id: 'dlc-prop-3',
    title: 'Omaxe Dwarka Mall',
    slug: 'omaxe-dwarka-mall-sector-19b-delhi',
    developer: 'Omaxe Group',
    category: 'Commercial',
    subCategory: 'High-Street Retail, Food Courts & Multiplex',
    location: 'Sector 19B, Dwarka, New Delhi',
    locality: 'Sector 19B Dwarka',
    city: 'Delhi',
    area: '250 - 3,500 sq.ft.',
    size: 'Retail Shops, Anchor Stores & Dining Spaces',
    price: '₹ 45.00 Lakhs*',
    priceValue: 4500000,
    status: 'Under Construction',
    possessionDate: '2026',
    reraId: 'DLRERA2023P0019',
    featuredImage: '/assets/dlcgroup/omaxe-dwarka.webp',
    gallery: [
      '/assets/dlcgroup/omaxe-dwarka.webp',
      '/assets/dlcgroup/slide-3.webp'
    ],
    description: 'Omaxe Dwarka in Sector 19B is the crown jewel commercial destination of West Delhi, integrated with Delhi’s largest international sports complex and 30,000-seater stadium. Featuring double-height high-street retail, premium hypermarkets, multiplexes, rooftop dining, and world-class sports retail.',
    highlights: [
      'Adjoining Delhi’s flagship 50-acre International Sports Arena',
      'Catchment of over 1.5 million affluent residents in Dwarka & West Delhi',
      'Direct connection to Dwarka Sector 10 and Sector 11 metro stations',
      'Guaranteed leasing assistance with leading retail and F&B brands',
      'Attractive 12% rental yield potential with flexible payment plans'
    ],
    amenities: [
      'Multi-level Car Parking for 3,000+ Cars',
      'Central Air Conditioning',
      '100% Power Backup',
      'High-Speed Escalators',
      'Outdoor Boulevard Cafes',
      'Integrated Sports Arena Access'
    ],
    latitude: 28.583,
    longitude: 77.045,
    isFeatured: true
  },
  {
    id: 'dlc-prop-4',
    title: 'Sobha City',
    slug: 'sobha-city-sector-108-dwarka-expressway',
    developer: 'Sobha Limited',
    category: 'Residential',
    subCategory: '39-Acre Urban Park Luxury Residences',
    location: 'Sector 108, Dwarka Expressway, Gurugram',
    locality: 'Sector 108',
    city: 'Gurugram',
    area: '1,381 - 2,072 sq.ft.',
    size: '2 & 3 BHK Premium Residences',
    price: '₹ 1.95 Cr*',
    priceValue: 19500000,
    bhk: '2 BHK, 3 BHK',
    status: 'Ready to Move',
    possessionDate: 'Immediate',
    reraId: 'HRERA-PKL-GGM-112-2018',
    featuredImage: '/assets/dlcgroup/sobha-city.webp',
    gallery: [
      '/assets/dlcgroup/sobha-city.webp',
      '/assets/dlcgroup/slide-1.webp'
    ],
    description: 'Sobha City is one of the largest self-contained urban park residences in Delhi NCR, sprawled across 39 acres with 8.5 acres of contiguous green spaces. Flanked by Delhi on one side and Dwarka Expressway on the other, it boasts two oval-shaped clubhouses totaling 40,000 sq.ft.',
    highlights: [
      'Only 15 minutes drive from Indira Gandhi International Airport (IGI)',
      'Two full-fledged clubhouses with half-acre water body',
      'Unobstructed views over protected green Delhi ridge reserve',
      'Olympic-sized swimming pool plus heated all-weather indoor pool',
      'Built with Sobha signature German precast construction technology'
    ],
    amenities: [
      'Two Grand Clubhouses',
      'Half-Acre Resort Lake',
      'Cricket Ground with Natural Turf',
      'Full Tennis & Badminton Courts',
      'Yoga & Aerobics Studio',
      '3-Tier Access Controlled Security'
    ],
    latitude: 28.528,
    longitude: 77.012,
    isFeatured: true
  },
  {
    id: 'dlc-prop-5',
    title: 'RPS Sargam Farmlands',
    slug: 'rps-sargam-farmlands-delhi-mumbai-expressway',
    developer: 'RPS Group & DLC Alliances',
    category: 'Farm House',
    subCategory: 'Gated Organic Agro & Luxury Farmlands',
    location: 'Naugaon, Delhi-Mumbai Expressway Corridor',
    locality: 'Naugaon Expressway',
    city: 'Delhi',
    area: '1 Acre - 5 Acres',
    size: '4,840 sq.yds+ Clear Title Farmland',
    price: '₹ 65.00 Lakhs / Acre*',
    priceValue: 6500000,
    status: 'Ready for Plantation & Construction',
    possessionDate: 'Immediate Registry & Mutation',
    reraId: 'Verified Agro-Estate Freehold',
    featuredImage: '/assets/dlcgroup/rps-sargam.jpg',
    gallery: [
      '/assets/dlcgroup/rps-sargam.jpg',
      '/assets/dlcgroup/rps-sargam-slide.webp'
    ],
    description: 'RPS Sargam Farmland is an exclusive weekend retreat and organic farm lifestyle estate located along the Delhi-Mumbai Expressway corridor. Designed for nature enthusiasts, organic farming, and second home luxury retreats with wide 40-foot macadam roads, solar perimeter fencing, and sweet groundwater.',
    highlights: [
      'Direct connectivity via Delhi-Mumbai Expressway (45 minutes from Gurugram)',
      '100% freehold land with clean title, individual registry & immediate mutation',
      'Gated community with 24/7 security patrol and CCTV monitoring',
      'Pre-installed drip irrigation, sweet ground water, and horticulture support',
      'High capital appreciation driven by the industrial corridor expansion'
    ],
    amenities: [
      'Gated Security & Boom Barriers',
      'Wide Internal Plantation Roads',
      'Sweet Water Borewells & Drip Lines',
      'Organic Farm Management Support',
      'Clubhouse & Weekend Guest Gazebos',
      'Solar Street Lighting'
    ],
    latitude: 27.915,
    longitude: 76.852,
    isFeatured: true
  },
  {
    id: 'dlc-prop-6',
    title: 'Yamuna Authority Residential Plots',
    slug: 'yamuna-authority-plots-sector-18-20',
    developer: 'Yamuna Expressway Industrial Development Authority (YEIDA)',
    category: 'Plots',
    subCategory: 'Authority Allotted Freehold Residential Plots',
    location: 'Sector 18 & 20, Yamuna Expressway, Near Jewar Airport',
    locality: 'Yamuna Expressway',
    city: 'Jewar',
    area: '300 - 4,000 sq.meters (358 - 4,780 sq.yds)',
    size: '300m, 500m, 1000m, 2000m, 4000m Plots',
    price: '₹ 1.20 Cr*',
    priceValue: 12000000,
    status: 'Ready to Move',
    possessionDate: 'Ready for Registry',
    reraId: 'YEIDA Authority Approved Freehold',
    featuredImage: '/assets/dlcgroup/yamuna-plots.jpg',
    gallery: [
      '/assets/dlcgroup/yamuna-plots.jpg',
      '/assets/dlcgroup/rps-new-goa.webp'
    ],
    description: 'Premium authority-allotted residential plots in Sector 18 and Sector 20 on Yamuna Expressway, situated right in the epicenter of the upcoming Noida International Airport at Jewar, the proposed Olympic City, and International Film City. Fully developed sectors with underground cabling, wide asphalt avenues, and landscaped parks.',
    highlights: [
      'Only 10 minutes from Noida International Airport (Jewar)',
      'Authority freehold land with guaranteed clear title and bank loan facility',
      'Adjacent to Eastern Peripheral Expressway & F1 Buddh International Circuit',
      'Sectors with 45m and 60m wide internal sector avenues',
      'Exponential appreciation prospect driven by global aerospace and logistic hubs'
    ],
    amenities: [
      'Underground Electrical Cabling',
      'Authority Piped Water Supply',
      'Wide Sector Roads & Green Belts',
      'Designated School & Hospital Plots',
      'Rainwater Harvesting Infrastructure'
    ],
    latitude: 28.245,
    longitude: 77.585,
    isFeatured: true
  },
  {
    id: 'dlc-prop-7',
    title: 'Da-Foreste Luxury Farmlands',
    slug: 'da-foreste-farm-house-in-jewar',
    developer: 'DLC Premium Advisory Group',
    category: 'Farm House',
    subCategory: 'Boutique Farmhouse Estates Near Jewar Airport',
    location: 'Jewar Aerocity Corridor, Yamuna Expressway',
    locality: 'Jewar Airport Corridor',
    city: 'Jewar',
    area: '1,200 - 4,800 sq.yds',
    size: 'Quarter-Acre & Half-Acre Farm Plots',
    price: '₹ 1.85 Cr*',
    priceValue: 18500000,
    status: 'Newly Launched',
    possessionDate: 'Dec 2025',
    reraId: 'Reg-Certified Farmland Reserve',
    featuredImage: '/assets/dlcgroup/da-foreste.jpg',
    gallery: [
      '/assets/dlcgroup/da-foreste.jpg',
      '/assets/dlcgroup/slide-3.webp'
    ],
    description: 'Da-Foreste is a bespoke farmhouse community crafted for visionary HNIs seeking calm countryside sanctuaries coupled with the staggering investment tailwinds of the Jewar International Airport corridor. Each plot includes fruit orchard landscaping, private gated boundary, and smart solar-ready utilities.',
    highlights: [
      'Located 12 km from the passenger terminal of Jewar International Airport',
      'Boutique equestrian club and recreational community lake',
      'Individual boundary fencing and customized landscaping support',
      'High groundwater table with fertile organic topsoil',
      'Clear registered titles with round-the-clock security surveillance'
    ],
    amenities: [
      'Clubhouse with Infinity Pool',
      'Horse Riding Trails',
      'Organic Farming Guidance',
      'Solar Street Lighting',
      '24/7 Security Patrol',
      'Community Dining Pavilion'
    ],
    latitude: 28.182,
    longitude: 77.541,
    isFeatured: false
  },
  {
    id: 'dlc-prop-8',
    title: 'ROF Insignia Park',
    slug: 'rof-insignia-park-sector-93-gurugram',
    developer: 'ROF Group',
    category: 'Residential',
    subCategory: 'DDJAY Premium Plotted Colony & Floors',
    location: 'Sector 93, New Gurugram',
    locality: 'Sector 93',
    city: 'Gurugram',
    area: '120 - 180 sq.yds (Plots) / 1,450 sq.ft. (Floors)',
    size: '3 BHK Independent Luxury Floors',
    price: '₹ 1.35 Cr*',
    priceValue: 13500000,
    bhk: '3 BHK',
    status: 'Ready to Move',
    possessionDate: 'Immediate',
    reraId: 'HRERA-PKL-GGM-148-2021',
    featuredImage: '/assets/dlcgroup/rof-insignia.webp',
    gallery: [
      '/assets/dlcgroup/rof-insignia.webp',
      '/assets/dlcgroup/slide-2.webp'
    ],
    description: 'ROF Insignia Park is a premium Deen Dayal Jan Awas Yojna (DDJAY) gated township offering independent builder floors and freehold residential plots. Nestled in Sector 93 Gurugram, it offers low-density tranquil living with quick access to NH-48 and Dwarka Expressway.',
    highlights: [
      'Gated community with stilt + 4 floor building sanction',
      'Separate registry and terrace rights for individual floors',
      'Immediate access to Multi-Utility Corridor and Cloverleaf flyover',
      'Zero maintenance lifestyle with dedicated car park per floor',
      'Bank approved with up to 80% home loan from SBI and HDFC'
    ],
    amenities: [
      'Township Community Hall',
      'Children Play Zone',
      'Landscaped Central Park',
      'CCTV Surveillance Network',
      'Badminton Court',
      'Intercom Connectivity'
    ],
    latitude: 28.411,
    longitude: 76.924,
    isFeatured: false
  },
  {
    id: 'dlc-prop-9',
    title: 'SCO Courtyard 37D',
    slug: 'sco-courtyard-37d-gurugram',
    developer: 'Signature Global / DLC Alliances',
    category: 'Commercial',
    subCategory: 'Shop-Cum-Office (SCO) Commercial Plots',
    location: 'Sector 37D, Dwarka Expressway, Gurugram',
    locality: 'Sector 37D',
    city: 'Gurugram',
    area: '75 - 150 sq.yds',
    size: 'Basement + Ground + 4 Floors Commercial Plots',
    price: '₹ 2.80 Cr*',
    priceValue: 28000000,
    status: 'Under Construction',
    possessionDate: 'Mid 2026',
    reraId: 'HRERA-PKL-GGM-1640-2022',
    featuredImage: '/assets/dlcgroup/sco-courtyard.webp',
    gallery: [
      '/assets/dlcgroup/sco-courtyard.webp',
      '/assets/dlcgroup/slide-3.webp'
    ],
    description: 'SCO Courtyard 37D represents the ultimate high-return commercial plot asset on Dwarka Expressway. Designed under the Haryana Commercial SCO Policy, allowing construction of Basement + Ground + 4 Floors with 100% floor area ratio (FAR). Ideal for bank branches, fine dine restaurants, corporate offices, and boutique clinics.',
    highlights: [
      'Direct frontage on 60-meter wide sector road facing Dwarka Expressway',
      'Surrounded by over 25,000 premium residential apartments',
      'Dual frontage with ample surface parking for customer ease',
      'Freedom to build and customize your commercial building',
      'High rental yield potential of 8% to 11% upon completion'
    ],
    amenities: [
      'Power Infrastructure Ready',
      'Ample Surface & Visitor Parking',
      '24/7 Security Patrol',
      'Paved Pedestrian Walkways',
      'Underground Drainage & Fiber Optic'
    ],
    latitude: 28.455,
    longitude: 76.974,
    isFeatured: false
  },
  {
    id: 'dlc-prop-10',
    title: 'Surajkund Luxury Farmhouse Estate',
    slug: 'luxury-farm-house-surajkund-sohna',
    developer: 'DLC Heritage Farmlands',
    category: 'Farm House',
    subCategory: 'Aravalli Valley Gated Farmlands',
    location: 'Surajkund Road, Sohna Valley, Delhi NCR',
    locality: 'Surajkund / Sohna',
    city: 'Sohna',
    area: '1.5 Acres - 3.5 Acres',
    size: 'Bespoke Luxury Country Villa Estates',
    price: '₹ 3.50 Cr*',
    priceValue: 35000000,
    status: 'Ready to Move',
    possessionDate: 'Immediate Registry',
    reraId: 'Freehold Heritage Sanctioned',
    featuredImage: '/assets/dlcgroup/farmhouse-sohna.jpg',
    gallery: [
      '/assets/dlcgroup/farmhouse-sohna.jpg',
      '/assets/dlcgroup/slide-1.webp'
    ],
    description: 'Spectacular secluded private farm villas nestled in the scenic foothills of the ancient Aravalli hills on Surajkund - Sohna corridor. Unpolluted fresh mountain air, mature teak and neem foliage, natural rocky contours, and total tranquility just 25 minutes from South Delhi and Golf Course Extension Road.',
    highlights: [
      'Unmatched panoramic vistas of the protected Aravalli biodiversity range',
      'Zero smog zone with pristine natural environment and birdsong',
      'Private swimming pool and manicured party lawns for weekend getaways',
      'Clean freehold titles with boundary walls and electricity connection in place',
      'Private security booth and staff quarter accommodations'
    ],
    amenities: [
      'Private Infinity Swimming Pool',
      'Solar Powered Perimeter',
      'Natural Stone Gazebo & BBQ Pit',
      'Organic Vegetable Gardens',
      'Caretaker Cottage on-site',
      'Sweet Water Aquifer'
    ],
    latitude: 28.324,
    longitude: 77.102,
    isFeatured: false
  }
];

export const DLC_KEY_STATS = [
  {
    value: '5,000+',
    label: 'Registered Network Agents',
    description: 'Regulated under Real Estate Regulatory Authorities across Delhi & Haryana.'
  },
  {
    value: '₹ 5,000 Cr+',
    label: 'Annual Transaction Volume',
    description: 'Over 60% in prime residential and 40% in high-yield commercial spaces.'
  },
  {
    value: '10% p.a.',
    label: 'Agent Network Growth',
    description: 'Consistent annual expansion matching Delhi NCR housing demand.'
  },
  {
    value: '30%+',
    label: 'Luxury & Affordable Deals',
    description: 'Expertise bridging ultra-luxury (>₹2 Cr) and affordable (<₹50 Lakhs).'
  },
  {
    value: '1 - 2%',
    label: 'Transparent Brokerage',
    description: 'Fair, regulated and crystal-clear fees with zero hidden markups.'
  },
  {
    value: '70%',
    label: 'Corporate & NRI Clients',
    description: 'Serving IT executives, MNC leaders, and global NRI property investors.'
  }
];

export const DLC_ADVANTAGES = [
  {
    title: 'Deep Local Market Mastery',
    description: 'Real estate agents in Delhi must know every nuance from circle rates to master plan bylaws. Our advisors possess micro-market insights into South Delhi colonies, Dwarka sub-city, and Dwarka Expressway.',
    icon: 'map'
  },
  {
    title: 'Rigorous 30-Year Legal Due Diligence',
    description: 'Every transaction is scrutinized by our in-house property advocates, verifying the 30-year chain of title, DDA/DTCP sanctioned building plans, municipal encumbrances, and RERA compliance.',
    icon: 'shield-check'
  },
  {
    title: 'Exclusive Off-Market & Pre-Launch Inventory',
    description: 'Our extensive relationships with tier-1 developers (Godrej, Sobha, Omaxe, Tarc, ROF) grant our buyers priority access to exclusive unreleased units and pre-launch prices before public listing.',
    icon: 'sparkles'
  },
  {
    title: 'Master Negotiation & Best Price Assurance',
    description: 'We represent your best financial interest, negotiating directly with developers and individual sellers to secure the lowest price per square foot with flexible payment plans.',
    icon: 'handshake'
  },
  {
    title: 'Comprehensive Sub-Registrar & Registry Escort',
    description: 'From drafting ATS (Agreement to Sell), stamp duty calculation, biometric scheduling at Delhi sub-registrar offices, to physical handover and possession receipt.',
    icon: 'file-text'
  },
  {
    title: 'Tailored NRI & Corporate Advisory Desk',
    description: 'End-to-end guidance for Non-Resident Indians and corporate executives, managing FEMA guidelines, NRE/NRO banking, power of attorney (POA) execution, and rental management.',
    icon: 'globe'
  }
];

export const DLC_SERVICES = [
  {
    id: 'residential',
    title: 'Residential Property Advisory',
    description: 'From affordable modern apartments in Gurugram to ultra-luxury penthouses in Central West Delhi and builder floors in South Delhi. We curate properties matching your budget and lifestyle.',
    icon: 'home',
    badge: 'Popular'
  },
  {
    id: 'commercial',
    title: 'Commercial Retail & Office Spaces',
    description: 'High-street retail shops, multiplex units, food court investments, and Grade-A office spaces in Aerocity, Connaught Place, Omaxe Dwarka, and Cyber City yielding 8% to 12% rental returns.',
    icon: 'building',
    badge: 'High ROI'
  },
  {
    id: 'farmhouses',
    title: 'Farmhouses & Countryside Estates',
    description: 'Scenic farmhouses and gated agricultural estates across Naugaon (Delhi-Mumbai Expressway), Surajkund, Sohna Valley, and Jewar Airport corridor for private weekend living and wealth preservation.',
    icon: 'trees',
    badge: 'Luxury'
  },
  {
    id: 'plots',
    title: 'Authority Plots & Land Investments',
    description: 'Yamuna Expressway Authority (YEIDA) plots, DDA freehold plots, and DDJAY plotted colonies in New Gurugram offering clear titles, capital appreciation, and full bank financing.',
    icon: 'layout-grid',
    badge: 'High Growth'
  },
  {
    id: 'land-pooling',
    title: 'Delhi Land Pooling Policy Advisory',
    description: 'Strategic advisory on DDA Land Pooling zones (Zone L, Zone P-II) for early-stage investors seeking high-multiple land appreciation as urban Delhi master plan unfolds.',
    icon: 'layers',
    badge: 'Strategic'
  },
  {
    id: 'legal-valuation',
    title: 'Property Valuation & Legal Title Search',
    description: 'Institutional-grade valuation for market rate estimation, capital gains tax computation, probate clearance, and 30-year sub-registrar legal title chain scrutiny.',
    icon: 'scale',
    badge: '100% Verified'
  }
];

export const DLC_TESTIMONIALS: DLCTestimonial[] = [
  {
    id: 'rev-1',
    name: 'Abhijit',
    avatar: '/assets/dlcgroup/avatar-abhijit.webp',
    role: 'Vice President, Fintech MNC',
    location: 'Sector 88A, Gurugram',
    propertyName: 'ROF Pravasa 4 BHK Luxury Floor',
    rating: 5,
    comment: 'DLC Group guided me through every detail of purchasing my home at ROF Pravasa. Their knowledge of Dwarka Expressway connectivity and realistic possession timelines saved me from deceptive developer claims. Completely transparent and dependable!',
    date: 'February 2026'
  },
  {
    id: 'rev-2',
    name: 'Karuna Kapoor',
    avatar: '/assets/dlcgroup/avatar-karuna.webp',
    role: 'Senior Architect & Design Consultant',
    location: 'Sector 19B, Dwarka',
    propertyName: 'Omaxe Dwarka Commercial Retail',
    rating: 5,
    comment: 'I wanted a high-yielding commercial asset with guaranteed footfall. DLC team introduced me to Omaxe Dwarka adjoining the international stadium. The paperwork and developer negotiation were flawless. Already seeing solid capital appreciation!',
    date: 'January 2026'
  },
  {
    id: 'rev-3',
    name: 'Rakesh Verma',
    avatar: '/assets/dlcgroup/avatar-rakesh.webp',
    role: 'Retired Air Force Group Captain',
    location: 'Surajkund - Sohna Corridor',
    propertyName: 'Aravalli Foothills Farm Retreat',
    rating: 5,
    comment: 'Buying agricultural or farmhouse land around Delhi can be risky due to title ambiguity. DLC Group conducted a rigorous 30-year registry search and got the mutation completed in record time. Today our family enjoys a pristine weekend haven.',
    date: 'March 2026'
  },
  {
    id: 'rev-4',
    name: 'Naveen Goel',
    avatar: '/assets/dlcgroup/avatar-naveen.webp',
    role: 'Industrialist & Angel Investor',
    location: 'Kirti Nagar, Delhi',
    propertyName: 'Tarc Kailasa 4.5 BHK High-Rise',
    rating: 5,
    comment: 'The luxury advisory team at DLC is unmatched in Central and West Delhi. They secured an exclusive pre-launch allotment for me at Tarc Kailasa with bespoke payment schedules. Their professionalism rivals global private wealth desks.',
    date: 'December 2025'
  },
  {
    id: 'rev-5',
    name: 'Priyanka Chaudhary',
    avatar: '/assets/dlcgroup/avatar-priyanka.webp',
    role: 'IT Director & First-time Buyer',
    location: 'Sector 108, Gurugram',
    propertyName: 'Sobha City 3 BHK Residence',
    rating: 5,
    comment: 'As a woman buyer purchasing property independently, DLC made the stamp duty rebate process crystal clear (saving 2% on Delhi-NCR circle rates) and helped fast-track my SBI home loan at 8.35%. A stellar real estate consultancy.',
    date: 'November 2025'
  },
  {
    id: 'rev-6',
    name: 'Rahul Soni',
    avatar: '/assets/dlcgroup/avatar-rahul.webp',
    role: 'NRI Businessman (Dubai / UAE)',
    location: 'Yamuna Expressway',
    propertyName: 'Sector 20 YEIDA Authority Plots',
    rating: 5,
    comment: 'Managing Indian property investments from the UAE used to give me anxiety until I met DLC Group. From NRE wire procedures to remote sub-registrar power of attorney, they handled everything seamlessly. Top-tier real estate consultants!',
    date: 'September 2025'
  }
];

export const DLC_LOCALITIES: DLCLocality[] = [
  {
    name: 'South Delhi (Saket, GK, Vasant Kunj)',
    zone: 'South Delhi',
    avgPriceSqFt: '₹ 22,000 - ₹ 45,000 / sq.ft.',
    annualGrowth: '9.4% YoY',
    rentalYield: '2.8% - 3.5%',
    description: 'The golden triangle of Delhi luxury living. Freehold builder floors, upscale colonies, mature green parks, proximity to top diplomatic and hospital hubs.',
    topProjects: ['Panchsheel Enclave Floors', 'Vasant Kunj Luxury DDA', 'Greater Kailash II Builder Floors']
  },
  {
    name: 'Dwarka Sub-City & Expressway Corridor',
    zone: 'Dwarka & West Delhi',
    avgPriceSqFt: '₹ 11,500 - ₹ 19,000 / sq.ft.',
    annualGrowth: '14.8% YoY',
    rentalYield: '3.8% - 4.5%',
    description: 'Asia’s largest planned residential sub-city. Boasts 29 metro stations, IGI Airport proximity, Bharat Vandana Park, Yashobhoomi Convention Centre, and the 8-lane elevated expressway.',
    topProjects: ['Omaxe Dwarka Mall 19B', 'ROF Pravasa 88A', 'Sobha City 108', 'Smartworld One DXP 113']
  },
  {
    name: 'Central & West Delhi (Kirti Nagar, Punjabi Bagh)',
    zone: 'Dwarka & West Delhi',
    avgPriceSqFt: '₹ 18,000 - ₹ 32,000 / sq.ft.',
    annualGrowth: '11.2% YoY',
    rentalYield: '3.2% - 3.9%',
    description: 'High net worth trading and business hub undergoing a vertical luxury renaissance with branded high-rise towers and integrated clubhouses.',
    topProjects: ['Tarc Kailasa Kirti Nagar', 'DLF Midtown Shivaji Marg', 'Punjabi Bagh Independent Mansions']
  },
  {
    name: 'Gurugram (Golf Course Road & New Gurgaon)',
    zone: 'Gurugram',
    avgPriceSqFt: '₹ 14,000 - ₹ 38,000 / sq.ft.',
    annualGrowth: '16.5% YoY',
    rentalYield: '4.2% - 5.1%',
    description: 'The millennium city corporate powerhouse housing Fortune 500 headquarters, luxury high-rises, golf estates, and world-class retail.',
    topProjects: ['Elan The Presidential', 'Godrej Meridien 106', 'SCO Courtyard 37D', 'ROF Insignia Park']
  },
  {
    name: 'Noida & Yamuna Expressway (Jewar Airport Hub)',
    zone: 'Noida & Yamuna Expressway',
    avgPriceSqFt: '₹ 6,500 - ₹ 12,000 / sq.ft.',
    annualGrowth: '21.0% YoY',
    rentalYield: '4.5% - 5.8%',
    description: 'The highest appreciating infrastructure corridor in North India anchored by Noida International Airport at Jewar, Formula 1 circuit, and International Film City.',
    topProjects: ['Yamuna Authority Plots Sector 18 & 20', 'Da-Foreste Jewar Farmlands', 'Noida Expressway IT Hubs']
  }
];

export const DLC_FAQS: DLCFaq[] = [
  {
    category: 'General',
    question: 'What are the current real estate trends in Delhi?',
    answer: 'Delhi’s real estate market is vibrant, with steady demand in both residential and commercial sectors. Prime areas like South Delhi, Lutyens Delhi, and Central West Delhi have retained immense capital value, while developing regions around Dwarka Expressway, New Gurgaon, and the Yamuna Expressway corridor are emerging as the highest-growth investment choices.'
  },
  {
    category: 'General',
    question: 'What are the most popular locations for buying residential property in Delhi?',
    answer: 'Popular residential areas include South Delhi (such as Saket, Greater Kailash, Vasant Kunj), Dwarka, Rohini, and newly developed master communities along Dwarka Expressway. For luxury high-rises, Kirti Nagar and Shivaji Marg are premier choices. For affordable and plotted options, areas like Uttam Nagar, Najafgarh, and Yamuna Expressway authority sectors are in high demand.'
  },
  {
    category: 'Registration',
    question: 'How is the property registration process conducted in Delhi?',
    answer: 'The registration process in Delhi involves several statutory steps: preparing and verifying the Agreement to Sell, paying the requisite stamp duty via online e-Stamping portal, obtaining the final Sale Deed, and scheduling an appointment at the local Sub-Registrar office. Both buyer and seller (or their authorized POAs) must appear with two witnesses for biometric fingerprinting, photograph verification, and registry execution.'
  },
  {
    category: 'Registration',
    question: 'How much does property registration cost in Delhi?',
    answer: 'The registration fee in Delhi is 1% of the property’s registered circle rate or consideration amount (whichever is higher). Stamp duty is 5% for male buyers, 3% for female buyers (reflecting a 2% government incentive for women), and 4% for joint ownership (male + female). A nominal ₹100 pasting fee applies.'
  },
  {
    category: 'Loans',
    question: 'What tax benefits are available on home loans for Delhi properties?',
    answer: 'Home loan borrowers in Delhi can claim tax deductions up to ₹1.5 lakh on principal repayment under Section 80C and up to ₹2 lakh on interest payments under Section 24(b) of the Income Tax Act. First-time home buyers purchasing affordable homes can claim an additional ₹1.5 lakh deduction on interest under Section 80EEA, bringing total potential annual tax deductions to ₹5 lakh.'
  },
  {
    category: 'Investment',
    question: 'Is Delhi a good location for commercial property investment?',
    answer: 'Yes, Delhi has premier commercial hubs like Connaught Place, Saket District Centre, Omaxe Dwarka Sector 19B, and Aerocity that generate attractive commercial yields of 8% to 11%. Furthermore, emerging SCO (Shop-Cum-Office) corridors along Dwarka Expressway and Yamuna Expressway offer substantial dual benefits of regular lease income and rapid land appreciation.'
  },
  {
    category: 'Investment',
    question: 'What is DLC Group’s RERA registration number and advisory fee?',
    answer: 'DLC Group (Delhi Land & Constructions LLP) is registered under RERA with registration number DLRERA2025A0128. Our advisory services for primary developer bookings are completely free for buyers (zero brokerage), while standard secondary market resale and documentation services follow a transparent 1% to 2% standard brokerage with no hidden costs.'
  }
];

export const DLC_BLOGS: DLCBlog[] = [
  {
    id: 'blog-1',
    title: 'Trusted Real Estate Consultant for Dwarka Expressway Helping Property Buyers',
    slug: 'trusted-real-estate-consultant-dwarka-expressway',
    excerpt: 'Dwarka Expressway has transitioned into India’s most technologically advanced 8-lane urban corridor. Here is how expert advisory safeguards your capital while maximizing appreciation.',
    author: 'DLC Editorial Desk',
    date: 'March 2026',
    image: '/assets/dlcgroup/blog-dwarka.webp',
    readTime: '6 min read',
    tags: ['Dwarka Expressway', 'Gurugram', 'Buyer Guide', 'RERA'],
    content: [
      'The completion of the elevated Dwarka Expressway has slashed travel times between IGI Airport, South-West Delhi, and Gurugram cyber hubs to under 20 minutes.',
      'However, navigating over 70 active residential and commercial projects requires deep scrutiny of developer balance sheets, past delivery track records, and RERA milestones.',
      'DLC Group provides end-to-end site comparisons, pricing benchmarks, and structural inspections so buyers make informed, secure decisions.'
    ]
  },
  {
    id: 'blog-2',
    title: 'Flats in Gurgaon for Sale Ready to Move | Complete Buyer’s Guide 2026',
    slug: 'flats-in-gurgaon-ready-to-move-guide',
    excerpt: 'Ready-to-move-in apartments eliminate construction delays and GST liabilities. Discover top-rated ready societies along Dwarka Expressway and Golf Course Extension.',
    author: 'Sanjay Sharma, Head of Research',
    date: 'February 2026',
    image: '/assets/dlcgroup/blog-gurgaon.webp',
    readTime: '8 min read',
    tags: ['Ready to Move', 'Gurgaon Housing', 'GST Savings', 'Home Loans'],
    content: [
      'Buying a ready-to-move home saves you up to 5% GST that is otherwise applicable on under-construction flats, while providing instant occupancy and rental savings.',
      'Key ready projects such as Sobha City (Sector 108), ROF Insignia Park (Sector 93), and Godrej Meridien offer ready clubhouses, occupancy certificates (OC), and registry readiness.',
      'Always inspect the Occupation Certificate issued by DTCP Haryana before releasing final disbursement to ensure the building complies with sanctioned fire and safety bylaws.'
    ]
  }
];

export const DLC_GROUP_WEBSITE: BusinessWebsite = {
  id: 'dlc-group',
  businessName: 'DLC Group',
  category: 'realestate',
  slug: 'dlc-group',
  templateId: 'template-realestate-dlc-group',
  tagline: 'Best Real Estate Agents in Delhi | Real Estate Advisory Company',
  description: 'DLC Group (Delhi Land & Constructions LLP) is a premier Real Estate Investment and Development Advisory Company in Delhi NCR. With over 100+ seasoned professionals and RERA Registration DLRERA2025A0128, we specialize in luxury residential flats, commercial properties, gated farmlands, authority plots, and 100% legally scrutinized property investments.',
  ownerName: 'DLC Group Leadership',
  phone: DLC_CONTACT.phone,
  whatsapp: DLC_CONTACT.phoneRaw,
  email: DLC_CONTACT.email,
  address: DLC_CONTACT.address,
  city: 'Delhi NCR',
  mapsUrl: 'https://maps.google.com/?q=Two+Horizon+Center+Golf+Course+Road+Gurugram',
  openingHours: DLC_CONTACT.hours,
  primaryColor: '#0a192f', // Deep DLC Executive Navy
  secondaryColor: '#c5a25d', // Royal Champagne Gold
  logoUrl: '/assets/dlcgroup/logo.png',
  coverUrl: '/assets/dlcgroup/hero-banner.webp',
  fontFamily: 'Plus Jakarta Sans, sans-serif',
  bookingType: 'consultation_quote',
  bookingCtaLabel: 'Enquire Now',
  specialBadge: 'Site #51 · Real Estate Agents in Delhi',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 49999,
  paymentStatus: 'paid',
  sections: [
    { id: 'hero', title: 'Real Estate Agents in Delhi', isEnabled: true, order: 1 },
    { id: 'stats', title: 'Key Real Estate Stats', isEnabled: true, order: 2 },
    { id: 'about', title: 'Best Real Estate Agents in Delhi', isEnabled: true, order: 3 },
    { id: 'advantages', title: 'Advantages and Traits', isEnabled: true, order: 4 },
    { id: 'properties', title: 'Featured All Projects', isEnabled: true, order: 5 },
    { id: 'services', title: 'Real Estate Services', isEnabled: true, order: 6 },
    { id: 'calculator', title: 'Stamp Duty & EMI Calculator', isEnabled: true, order: 7 },
    { id: 'appointment', title: 'Make An Appointment', isEnabled: true, order: 8 },
    { id: 'localities', title: 'Delhi NCR Localities Guide', isEnabled: true, order: 9 },
    { id: 'testimonials', title: 'Client Reviews', isEnabled: true, order: 10 },
    { id: 'faq', title: 'Frequently Asked Questions', isEnabled: true, order: 11 },
    { id: 'blogs', title: 'Latest Real Estate Insights', isEnabled: true, order: 12 },
    { id: 'contact', title: 'Contact & Advisory Desk', isEnabled: true, order: 13 }
  ],
  offers: [
    {
      id: 'dlc-offer-1',
      title: 'Free Accompanied Site Visits',
      description: 'Zero consultation or chauffeured vehicle charges for project walkthroughs across Delhi NCR.',
      discountPercent: 100,
      couponCode: 'DLCVISIT',
      isActive: true
    },
    {
      id: 'dlc-offer-2',
      title: 'Complimentary Legal Due Diligence',
      description: '30-year sub-registrar title search & encumbrance review included with every certified deal.',
      discountPercent: 100,
      couponCode: 'DLCTITLE',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'dlc-gal-1',
      title: 'Real Estate Agent in Delhi Slide 1',
      category: 'exterior',
      imageUrl: '/assets/dlcgroup/slide-1.webp'
    },
    {
      id: 'dlc-gal-2',
      title: 'Real Estate Agent in Delhi Slide 2',
      category: 'exterior',
      imageUrl: '/assets/dlcgroup/slide-2.webp'
    },
    {
      id: 'dlc-gal-3',
      title: 'Real Estate Agent in Delhi Slide 3',
      category: 'exterior',
      imageUrl: '/assets/dlcgroup/slide-3.webp'
    }
  ],
  items: []
};
