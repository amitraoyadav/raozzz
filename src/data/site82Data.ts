import { BusinessWebsite } from '../types';
import { site82Config } from '../config/site82Config';

export interface WealthProperty {
  id: string;
  slug: string;
  name: string;
  developer: string;
  developerLogo?: string;
  city: string;
  citySlug: string;
  location: string;
  priceFormatted: string;
  priceValue: number; // in Lakhs
  pricePerSqFt?: string;
  projectType: 'Commercial' | 'Residential' | 'Luxury' | 'Plots';
  category: 'ready-to-move' | 'affordable' | 'mid-range' | 'luxury';
  configuration: string;
  bedrooms: number[];
  bathrooms?: number;
  areaSqFt: string;
  status: 'Ready to Move' | 'Under Construction' | 'New Launch';
  possessionDate: string;
  reraNumber: string;
  images: string[];
  videoUrl?: string;
  isFeatured: boolean;
  isProjectOfTheMonth?: boolean;
  isReraCompliant: boolean;
  rating: number;
  reviewCount: number;
  description: string;
  amenities: string[];
  locationHighlights: string[];
  floorPlans?: {
    name: string;
    size: string;
    price: string;
  }[];
}

export interface ClientReview {
  id: string;
  name: string;
  relativeDate: string;
  avatarUrl: string;
  rating: number;
  comment: string;
  verifiedSource: 'Google Business Review' | 'Verified Buyer';
  reviewLink: string;
}

export interface PartnerDeveloper {
  id: string;
  name: string;
  category: string;
  projectsCount: string;
  experienceYears: string;
  logoUrl?: string;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Vastu Guide' | 'Home & Interiors' | 'Legal & Documentation Guide' | 'City & Local Living Guides' | "India's Luxury Real Estate";
  categorySlug: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
  excerpt: string;
  content: string[];
  tags: string[];
}

export interface RealEstateEvent {
  id: string;
  slug: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  image: string;
  description: string;
  highlights: string[];
  isUpcoming: boolean;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  source: string;
  category: string;
  image: string;
  excerpt: string;
  content: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Investment' | 'RERA' | 'Buying Process';
}

// 1. CITIES LIST
export const CITIES_LIST = [
  { id: 'all', name: 'All Cities', slug: 'all' },
  { id: 'noida', name: 'Noida', slug: 'properties-in-noida' },
  { id: 'greater-noida', name: 'Greater Noida', slug: 'properties-in-greater-noida' },
  { id: 'yamuna-expressway', name: 'Yamuna Expressway', slug: 'properties-in-yamuna-expressway' },
  { id: 'ayodhya', name: 'Ayodhya', slug: 'properties-in-ayodhya' },
  { id: 'ghaziabad', name: 'Ghaziabad', slug: 'properties-in-ghaziabad' },
  { id: 'lucknow', name: 'Lucknow', slug: 'properties-in-lucknow' },
  { id: 'moradabad', name: 'Moradabad', slug: 'properties-in-moradabad' },
  { id: 'gurugram', name: 'Gurugram', slug: 'properties-in-gurugram' },
  { id: 'delhi', name: 'Delhi NCR', slug: 'properties-in-delhi' }
];

// 2. PROPERTY LISTINGS (12 RERA-approved Indian projects)
export const WEALTH_PROPERTIES: WealthProperty[] = [
  {
    id: 'prop-1',
    slug: 'orion-one-32-noida',
    name: 'Orion One 32',
    developer: 'Orion Infratech',
    city: 'Noida',
    citySlug: 'properties-in-noida',
    location: 'Sector 132, Noida Expressway',
    priceFormatted: '₹ 1.41 Cr* Onwards',
    priceValue: 141,
    pricePerSqFt: '₹ 11,500/sq.ft',
    projectType: 'Commercial',
    category: 'luxury',
    configuration: 'Business Suites | Retail Shops | Office Spaces | Food Court',
    bedrooms: [1],
    bathrooms: 1,
    areaSqFt: '650 - 2,800 sq.ft',
    status: 'Under Construction',
    possessionDate: 'December 2026',
    reraNumber: 'UPRERAPRJ960554',
    isFeatured: true,
    isProjectOfTheMonth: true,
    isReraCompliant: true,
    rating: 4.9,
    reviewCount: 142,
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80'
    ],
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    description: 'Orion One 32 is a futuristic commercial business hub situated right on the Noida-Greater Noida Expressway. Spread across 10 acres, it integrates LEED-certified Grade A office towers, multi-tier retail boulevards, fine-dining restaurants, and luxury serviced suites. Ideal for institutional investors seeking 9-11% rental yield.',
    amenities: [
      'Grade A Double-Glazed Glass Facade',
      'High-Street Retail Boulevard',
      '5-Star Hospitality Business Club',
      'Electric Vehicle Fast-Charging Bays',
      'High-Speed Schindler Destination Elevators',
      'Multi-Level Basement Parking (2,000+ Cars)',
      '100% Power Backup with Dual Feeders'
    ],
    locationHighlights: [
      'Zero distance to Noida-Greater Noida Expressway',
      '10 minutes to Sector 137 Aqua Line Metro Station',
      '20 minutes to DND Flyway & South Delhi',
      '35 minutes to upcoming Noida International Airport (Jewar)',
      'Surrounded by IT majors like Oracle, Adobe, and TCS'
    ],
    floorPlans: [
      { name: 'Executive Retail Shop', size: '450 sq.ft', price: '₹ 1.41 Cr' },
      { name: 'Corporate Business Suite', size: '850 sq.ft', price: '₹ 2.15 Cr' },
      { name: 'Anchor Store / Food Court', size: '1,400 sq.ft', price: '₹ 3.80 Cr' }
    ]
  },
  {
    id: 'prop-2',
    slug: 'migsun-alpha-central-greater-noida',
    name: 'Migsun Alpha Central',
    developer: 'Migsun Group',
    city: 'Greater Noida',
    citySlug: 'properties-in-greater-noida',
    location: 'Alpha II, Greater Noida',
    priceFormatted: '₹ 43.23 Lakh* Onwards',
    priceValue: 43.23,
    pricePerSqFt: '₹ 8,900/sq.ft',
    projectType: 'Commercial',
    category: 'affordable',
    configuration: 'Retail Shop | Food Court | Studio Apartment | Business Suites',
    bedrooms: [1],
    bathrooms: 1,
    areaSqFt: '280 - 1,200 sq.ft',
    status: 'Under Construction',
    possessionDate: 'March 2027',
    reraNumber: 'UPRERAPRJ17634',
    isFeatured: true,
    isReraCompliant: true,
    rating: 4.8,
    reviewCount: 98,
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Migsun Alpha Central is situated in the prime commercial epicentre of Alpha 2, Greater Noida. Boasting open double-height retail shops, a buzzing gourmet food court, and high-yielding lockable studio apartments, it represents the ideal low-ticket entry into NCR commercial real estate.',
    amenities: [
      'Double Height Glass Frontage Shops',
      'Dedicated Entertainment & Gaming Zone',
      'Multi-Cuisine Open Air Food Court',
      '24x7 High Security with AI Surveillance',
      'Uninterrupted Dual Source Power Backup'
    ],
    locationHighlights: [
      'Opposite Alpha 1 Metro Station (Aqua Line)',
      '5 minutes to Pari Chowk Greater Noida',
      'Adjacent to dense high-income residential sectors',
      'Direct connectivity to Yamuna Expressway'
    ]
  },
  {
    id: 'prop-3',
    slug: 'omaxe-kaushambi-ghaziabad',
    name: 'Omaxe Kaushambi',
    developer: 'Omaxe Limited',
    city: 'Ghaziabad',
    citySlug: 'properties-in-ghaziabad',
    location: 'Near Anand Vihar ISBT, Kaushambi',
    priceFormatted: '₹ 50.00 Lakh* Onwards',
    priceValue: 50,
    pricePerSqFt: '₹ 9,500/sq.ft',
    projectType: 'Commercial',
    category: 'mid-range',
    configuration: 'Commercial Retail | Corporate Office Space | Multiplex',
    bedrooms: [1],
    bathrooms: 1,
    areaSqFt: '350 - 1,800 sq.ft',
    status: 'Ready to Move',
    possessionDate: 'Ready for Fit-outs',
    reraNumber: 'UPRERAPRJ88219',
    isFeatured: true,
    isReraCompliant: true,
    rating: 4.7,
    reviewCount: 76,
    images: [
      'https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Omaxe Kaushambi is a landmark commercial infrastructure development next to Delhi’s Anand Vihar transit hub. With seamless multi-modal connectivity via Metro Blue/Pink Line, Railway Station, and ISBT, it receives footfalls exceeding 200,000 visitors daily.',
    amenities: [
      'Direct Skywalk to Anand Vihar Metro Station',
      'Centrally Air-Conditioned Retail Galleria',
      'Multi-Level Automated Car Parking',
      'Modern High-Velocity Fire Fighting Systems'
    ],
    locationHighlights: [
      '0 km from Delhi-UP Border',
      '2 minutes to Anand Vihar Inter-State Bus Terminal',
      '15 minutes to Connaught Place Central Delhi'
    ]
  },
  {
    id: 'prop-4',
    slug: 'samrajya-ayodhya',
    name: 'Samrajya Ayodhya',
    developer: 'The House of Abhinandan Lodha / Samrajya',
    city: 'Ayodhya',
    citySlug: 'properties-in-ayodhya',
    location: 'Plot No. 309 & 328, VIP Road, Village Bagh Bijaisi',
    priceFormatted: '₹ 65.00 Lakh* Onwards',
    priceValue: 65,
    pricePerSqFt: '₹ 7,800/sq.ft',
    projectType: 'Commercial',
    category: 'luxury',
    configuration: 'Serviced Studio Apartments | Retail Shops | Food Court',
    bedrooms: [1],
    bathrooms: 1,
    areaSqFt: '420 - 950 sq.ft',
    status: 'New Launch',
    possessionDate: 'December 2027',
    reraNumber: 'UPRERAPRJ44912',
    isFeatured: true,
    isReraCompliant: true,
    rating: 4.9,
    reviewCount: 110,
    images: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A prestigious hospitality and boutique commercial retreat situated near the sacred Saryu riverfront and Ram Janmabhoomi Temple corridor in Ayodhya. Fully furnished hotel-grade suites managed by 5-star branded operators with guaranteed rental returns.',
    amenities: [
      'Vedic Architectural Harmonization (100% Vastu Compliant)',
      'Branded 5-Star Hospitality Concierge & Housekeeping',
      'Rooftop Spiritual Observation Deck',
      'Vegetarian Gourmet Fine Dining'
    ],
    locationHighlights: [
      '8 minutes to Shri Ram Janmabhoomi Mandir',
      '12 minutes to Maharishi Valmiki International Airport Ayodhya',
      'Direct connectivity to Lucknow-Gorakhpur National Highway'
    ]
  },
  {
    id: 'prop-5',
    slug: 'godrej-woods-sector-43-noida',
    name: 'Godrej Woods',
    developer: 'Godrej Properties',
    city: 'Noida',
    citySlug: 'properties-in-noida',
    location: 'Sector 43, Central Noida',
    priceFormatted: '₹ 2.85 Cr* Onwards',
    priceValue: 285,
    pricePerSqFt: '₹ 14,200/sq.ft',
    projectType: 'Residential',
    category: 'luxury',
    configuration: '3 BHK | 4 BHK | 5 BHK Forest Theme Residences',
    bedrooms: [3, 4, 5],
    bathrooms: 4,
    areaSqFt: '2,088 - 3,750 sq.ft',
    status: 'Under Construction',
    possessionDate: 'March 2026',
    reraNumber: 'UPRERAPRJ704730',
    isFeatured: true,
    isReraCompliant: true,
    rating: 4.9,
    reviewCount: 230,
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    description: 'Godrej Woods brings the tranquility of evergreen forests to the heart of Noida. Boasting 1,100+ native trees, an elevated glass skywalk, resort-style infinity pools, and ultra-spacious wrap-around verandas overlooking the Noida Golf Course.',
    amenities: [
      'Dense 600-meter Urban Forest with Natural Stream',
      'Signature Clubhouse with Temperature-Controlled Lap Pool',
      'Dedicated Personal Fitness Studio & Turkish Hamam Spa',
      '3-Tier Security with Facial Recognition Access',
      'Children’s Treehouse & Organic Herbal Herbarium'
    ],
    locationHighlights: [
      'Next to Noida Golf Course Sector 38',
      '3 minutes to Noida City Centre & Botanical Garden Metro',
      '12 minutes to South Delhi via DND Expressway',
      'Surrounded by top schools like Amity and Lotus Valley'
    ]
  },
  {
    id: 'prop-6',
    slug: 'ats-destinaire-greater-noida-west',
    name: 'ATS Destinaire',
    developer: 'ATS Group',
    city: 'Greater Noida',
    citySlug: 'properties-in-greater-noida',
    location: 'Sector 1, Greater Noida West',
    priceFormatted: '₹ 1.65 Cr* Onwards',
    priceValue: 165,
    pricePerSqFt: '₹ 8,400/sq.ft',
    projectType: 'Residential',
    category: 'mid-range',
    configuration: '3 BHK + Servant | 4 BHK Premium Apartments',
    bedrooms: [3, 4],
    bathrooms: 3,
    areaSqFt: '1,900 - 2,550 sq.ft',
    status: 'Ready to Move',
    possessionDate: 'Immediate Possession',
    reraNumber: 'UPRERAPRJ417134',
    isFeatured: true,
    isReraCompliant: true,
    rating: 4.8,
    reviewCount: 164,
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'ATS Destinaire represents classic Spanish architecture with only 2 apartments per floor, ensuring unparalleled privacy and natural ventilation. Located on the 130-meter wide expressway in Greater Noida West with direct access to central Noida.',
    amenities: [
      'Only 2 Apartments per Floor for Maximum Privacy',
      'Grand Spanish-Themed Clubhouse & Squash Courts',
      'Lush Central Greens Covering 80% of Land Parcel',
      'Tennis, Badminton, and Basketball Arenas'
    ],
    locationHighlights: [
      'Directly on 130m Expressway',
      '5 minutes to FNG Corridor',
      '10 minutes to Sector 76 Metro Station Noida'
    ]
  },
  {
    id: 'prop-7',
    slug: 'eldeco-live-by-the-greens-sector-150',
    name: 'Eldeco Live by the Greens',
    developer: 'Eldeco Group',
    city: 'Noida',
    citySlug: 'properties-in-noida',
    location: 'Sector 150, Sports City Noida',
    priceFormatted: '₹ 1.25 Cr* Onwards',
    priceValue: 125,
    pricePerSqFt: '₹ 9,200/sq.ft',
    projectType: 'Residential',
    category: 'mid-range',
    configuration: '2 BHK | 3 BHK Resort Residences',
    bedrooms: [2, 3],
    bathrooms: 2,
    areaSqFt: '1,155 - 1,405 sq.ft',
    status: 'Ready to Move',
    possessionDate: 'Ready for Possession',
    reraNumber: 'UPRERAPRJ15172',
    isFeatured: true,
    isReraCompliant: true,
    rating: 4.8,
    reviewCount: 88,
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Located in Noida’s greenest precinct Sector 150 (Sports City), Eldeco Live by the Greens is enveloped by 80% open recreational grounds, cricket stadium access, and Olympic-grade sporting infrastructure.',
    amenities: [
      'Cricket Academy & Grass Pitch',
      'Swimming Pool with Kids Splash Deck',
      'Clubhouse with Indoor Games & Library',
      'Yoga & Meditation Lawn in Bamboo Groves'
    ],
    locationHighlights: [
      'Sector 150: Lowest density sector in NCR',
      'Immediate access to Yamuna Expressway & Noida Expressway',
      '20 minutes to Jewar International Airport'
    ]
  },
  {
    id: 'prop-8',
    slug: 'ace-starlit-sector-152-noida',
    name: 'ACE Starlit',
    developer: 'ACE Group',
    city: 'Noida',
    citySlug: 'properties-in-noida',
    location: 'Sector 152, Noida Expressway',
    priceFormatted: '₹ 1.95 Cr* Onwards',
    priceValue: 195,
    pricePerSqFt: '₹ 11,000/sq.ft',
    projectType: 'Residential',
    category: 'luxury',
    configuration: '2 BHK | 3 BHK Starlit Homes',
    bedrooms: [2, 3],
    bathrooms: 3,
    areaSqFt: '1,350 - 1,775 sq.ft',
    status: 'Under Construction',
    possessionDate: 'December 2026',
    reraNumber: 'UPRERAPRJ677297',
    isFeatured: false,
    isReraCompliant: true,
    rating: 4.9,
    reviewCount: 92,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'ACE Starlit is an architectural marvel featuring iconic curved glass balconies that offer panoramic views of the adjacent international cricket stadium and lush sports corridors.',
    amenities: [
      'Signature Marquee Clubhouse',
      'Rooftop Stargazing Deck & Telescope Lounge',
      'Jogging Track with Reflexology Pathways',
      'State-of-the-Art Gymnasium & Pilates Studio'
    ],
    locationHighlights: [
      'Direct on Noida-Greater Noida Expressway',
      'Opposite proposed International Sports Arena',
      'Proximity to upcoming corporate headquarters'
    ]
  },
  {
    id: 'prop-9',
    slug: 'm3m-the-cullinan-sector-94-noida',
    name: 'M3M The Cullinan',
    developer: 'M3M India',
    city: 'Noida',
    citySlug: 'properties-in-noida',
    location: 'Sector 94, Zero Km from South Delhi',
    priceFormatted: '₹ 6.50 Cr* Onwards',
    priceValue: 650,
    pricePerSqFt: '₹ 18,500/sq.ft',
    projectType: 'Luxury',
    category: 'luxury',
    configuration: '3 BHK | 4 BHK | 5 BHK Ultra-Luxury Sky Mansions',
    bedrooms: [3, 4, 5],
    bathrooms: 5,
    areaSqFt: '3,200 - 5,800 sq.ft',
    status: 'Under Construction',
    possessionDate: 'June 2028',
    reraNumber: 'UPRERAPRJ442214',
    isFeatured: true,
    isReraCompliant: true,
    rating: 5.0,
    reviewCount: 310,
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'M3M The Cullinan is North India’s most opulent mixed-use development, standing proud at zero distance from South Delhi. Spread across 13 acres, featuring 100,000 sq.ft clubhouse luxury, high-street luxury retail, and private lift lobbies.',
    amenities: [
      '100,000 sq.ft Palace-Themed Clubhouse',
      'Private High-Speed Elevator with Direct In-Foyer Access',
      'Helipad Clearance Zone',
      'Infinity Sky Pool Overlooking Yamuna River',
      'Concierge Services by Quintessentially'
    ],
    locationHighlights: [
      '0 km from Kalindi Kunj & South Delhi',
      '1 minute to Okhla Bird Sanctuary Metro Station',
      '15 minutes to Connaught Place Central Delhi'
    ]
  },
  {
    id: 'prop-10',
    slug: 'prestige-city-indrapuram-ghaziabad',
    name: 'The Prestige City Indirapuram',
    developer: 'Prestige Group',
    city: 'Ghaziabad',
    citySlug: 'properties-in-ghaziabad',
    location: 'Indirapuram Extension, Ghaziabad',
    priceFormatted: '₹ 1.80 Cr* Onwards',
    priceValue: 180,
    pricePerSqFt: '₹ 10,200/sq.ft',
    projectType: 'Residential',
    category: 'mid-range',
    configuration: '2 BHK | 3 BHK | 4 BHK Integrated Township',
    bedrooms: [2, 3, 4],
    bathrooms: 3,
    areaSqFt: '1,420 - 2,450 sq.ft',
    status: 'New Launch',
    possessionDate: 'March 2028',
    reraNumber: 'UPRERAPRJ99381',
    isFeatured: true,
    isReraCompliant: true,
    rating: 4.8,
    reviewCount: 75,
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'South India’s premier developer Prestige Group brings its iconic integrated mega-township to Indirapuram. Featuring a high-street mall, international school, healthcare centre, and verdant landscaped parks.',
    amenities: [
      'Integrated Mega Township with Retail Mall',
      'Olympic-Sized 50m Swimming Pool',
      '50,000 sq.ft Grand Clubhouse',
      'Badminton, Squash & Table Tennis Courts'
    ],
    locationHighlights: [
      'Direct access to Delhi-Meerut Expressway',
      '10 minutes to Vaishali Metro Station',
      '15 minutes to Akshardham Temple Delhi'
    ]
  },
  {
    id: 'prop-11',
    slug: 'experion-elements-sector-45-noida',
    name: 'Experion Elements',
    developer: 'Experion Developers (Singapore Temasek Backed)',
    city: 'Noida',
    citySlug: 'properties-in-noida',
    location: 'Sector 45, Central Noida',
    priceFormatted: '₹ 4.80 Cr* Onwards',
    priceValue: 480,
    pricePerSqFt: '₹ 15,500/sq.ft',
    projectType: 'Luxury',
    category: 'luxury',
    configuration: '3 BHK | 4 BHK Ultra-Prime Condominiums',
    bedrooms: [3, 4],
    bathrooms: 4,
    areaSqFt: '2,900 - 3,650 sq.ft',
    status: 'Under Construction',
    possessionDate: 'August 2027',
    reraNumber: 'UPRERAPRJ22910',
    isFeatured: false,
    isReraCompliant: true,
    rating: 4.9,
    reviewCount: 65,
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Backed by Temasek Holdings Singapore, Experion Elements in Sector 45 Noida offers sustainable luxury living with GRIHA 5-star green certification, active air purification, and low-density towers.',
    amenities: [
      'EV Charging at Every Parking Slot',
      'Centralized Treated Fresh Air (TFA) Filtration',
      'Double Height Grand Lobby with Water Cascade',
      'Private Temperature-Controlled Plunge Pools'
    ],
    locationHighlights: [
      '5 minutes to Amity University & Sector 44',
      '10 minutes to South Delhi via DND Flyway',
      'Adjacent to Sector 45 Metro station'
    ]
  },
  {
    id: 'prop-12',
    slug: 'gaur-yamuna-city-plots-expressway',
    name: 'Gaur Yamuna City Residential Plots',
    developer: 'Gaursons India',
    city: 'Yamuna Expressway',
    citySlug: 'properties-in-yamuna-expressway',
    location: 'Sector 19, Yamuna Expressway',
    priceFormatted: '₹ 75.00 Lakh* Onwards',
    priceValue: 75,
    pricePerSqFt: '₹ 6,500/sq.yd',
    projectType: 'Plots',
    category: 'affordable',
    configuration: '120 sq.yd | 150 sq.yd | 200 sq.yd Freehold Plots',
    bedrooms: [0],
    areaSqFt: '1,080 - 1,800 sq.ft',
    status: 'Ready to Move',
    possessionDate: 'Ready for Registry',
    reraNumber: 'UPRERAPRJ7214',
    isFeatured: true,
    isReraCompliant: true,
    rating: 4.7,
    reviewCount: 195,
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A 250-acre integrated township right on the Yamuna Expressway, situated 15 minutes before the upcoming Jewar International Airport and the International Film City. Features a huge lake and 108-feet tall Lord Krishna statue.',
    amenities: [
      'Gated Township with 24x7 Security Surveillance',
      'Wide 18m and 24m Internal Blacktop Roads',
      'Underground Cabling, Water Supply, and Sewage',
      'Township School, Hospital, and Commercial Plaza'
    ],
    locationHighlights: [
      '15 minutes to upcoming Jewar International Airport',
      'Opposite Buddh International Circuit (F1 Track)',
      'Adjacent to Eastern Peripheral Expressway interchange'
    ]
  }
];

// 3. PARTNER DEVELOPERS
export const PARTNER_DEVELOPERS: PartnerDeveloper[] = [
  { id: 'dev-1', name: 'M3M Group', category: 'Luxury Commercial & High-End Living', projectsCount: '38+ Projects', experienceYears: '25+ Years' },
  { id: 'dev-2', name: 'Eldeco Group', category: 'Townships & Green Residential', projectsCount: '65+ Projects', experienceYears: '45+ Years' },
  { id: 'dev-3', name: 'Smart World', category: 'Contemporary Lifestyle Condos', projectsCount: '15+ Projects', experienceYears: '10+ Years' },
  { id: 'dev-4', name: 'ACE Group', category: 'Iconic NCR Architecture', projectsCount: '28+ Projects', experienceYears: '18+ Years' },
  { id: 'dev-5', name: 'Migsun Group', category: 'High-Footfall Commercial & Retail', projectsCount: '40+ Projects', experienceYears: '22+ Years' },
  { id: 'dev-6', name: 'Orion Infratech', category: 'Institutional Grade Business Parks', projectsCount: '12+ Projects', experienceYears: '15+ Years' },
  { id: 'dev-7', name: 'County Group', category: 'Super-Luxury Penthouses', projectsCount: '18+ Projects', experienceYears: '30+ Years' },
  { id: 'dev-8', name: 'Experion', category: 'Temasek Singapore Backed Developments', projectsCount: '14+ Projects', experienceYears: '16+ Years' },
  { id: 'dev-9', name: 'Great Value Realty', category: 'Value-First Residential Suites', projectsCount: '20+ Projects', experienceYears: '20+ Years' },
  { id: 'dev-10', name: 'Sobha Realty', category: 'German Engineering & Construction', projectsCount: '110+ Projects', experienceYears: '35+ Years' },
  { id: 'dev-11', name: 'Dasnac Group', category: 'Boutique Central Noida Condos', projectsCount: '15+ Projects', experienceYears: '24+ Years' },
  { id: 'dev-12', name: 'DLF', category: 'India’s Largest Real Estate Developer', projectsCount: '180+ Projects', experienceYears: '75+ Years' },
  { id: 'dev-13', name: 'L&T Realty', category: 'Engineering-Driven Infrastructure', projectsCount: '45+ Projects', experienceYears: '80+ Years' },
  { id: 'dev-14', name: 'ATS Group', category: 'Classic Spanish Greens & Privacy', projectsCount: '52+ Projects', experienceYears: '26+ Years' },
  { id: 'dev-15', name: 'Prestige Group', category: 'Integrated Smart Cities', projectsCount: '250+ Projects', experienceYears: '38+ Years' },
  { id: 'dev-16', name: 'Godrej Properties', category: 'Forest-Themed Sustainable Sanctuaries', projectsCount: '95+ Projects', experienceYears: '125+ Years' },
  { id: 'dev-17', name: 'Max Estates', category: 'Workplaces & Wellbeing Living', projectsCount: '10+ Projects', experienceYears: '12+ Years' },
  { id: 'dev-18', name: 'Purvanchal Group', category: 'High-Rise Residences across UP', projectsCount: '30+ Projects', experienceYears: '28+ Years' },
  { id: 'dev-19', name: 'Gulshan Homz', category: 'Ultra-Luxury Hospitality Living', projectsCount: '25+ Projects', experienceYears: '30+ Years' },
  { id: 'dev-20', name: 'ABA Corp', category: 'Cleopatra & Orange County Living', projectsCount: '16+ Projects', experienceYears: '20+ Years' }
];

// 4. CLIENT REVIEWS
export const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: 'rev-1',
    name: 'Prashant Bhati',
    relativeDate: '1 year ago',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'Great atmosphere and genuine advice being given by advisors here. They value your money and give the best advice regarding real estate. Helped me finalize my 4 BHK at Godrej Woods with complete RERA transparency.',
    verifiedSource: 'Google Business Review',
    reviewLink: 'https://maps.google.com'
  },
  {
    id: 'rev-2',
    name: 'Anmol Roy',
    relativeDate: '1 year ago',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'I had a very smooth experience with Wealth Nexus. The team was professional, responsive, and guided me properly at every stage, from shortlisting the commercial project to documentation. What I really appreciated was zero brokerage and timely registry assistance.',
    verifiedSource: 'Google Business Review',
    reviewLink: 'https://maps.google.com'
  },
  {
    id: 'rev-3',
    name: 'Hariom Sharma',
    relativeDate: '1 year ago',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'I consulted them for commercial retail investment on the Noida Expressway, and the guidance was practical and well-researched. They explained the ROI pros and cons clearly. Appreciate their professionalism and deep market knowledge.',
    verifiedSource: 'Google Business Review',
    reviewLink: 'https://maps.google.com'
  },
  {
    id: 'rev-4',
    name: 'Dhananjay Pandey',
    relativeDate: '1 month ago',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'As a first time home buyer I was quite confused with all the builder claims, but their team made the entire property buying process seamless. They provided honest comparative pricing, site visit logistics, and legal vetting.',
    verifiedSource: 'Google Business Review',
    reviewLink: 'https://maps.google.com'
  }
];

// 5. FAQS
export const WEALTH_FAQS: FAQItem[] = [
  {
    question: 'Who is the best real estate consultant in Noida and NCR?',
    answer: 'Wealth Nexus is recognized as one of the top real estate consultancies with 14+ years of industry experience, trusted by 15M+ satisfied clients across Noida, Greater Noida, Yamuna Expressway, and Lucknow. We specialize in verified, RERA-approved residential, commercial, and luxury developments with zero buyer brokerage.',
    category: 'General'
  },
  {
    question: 'What makes Wealth Nexus different from conventional property brokers?',
    answer: 'Unlike traditional brokers who push single projects, we operate as investment fiduciaries. We provide algorithmic ROI analysis, 100% RERA compliance verification, free escorted site visits, complete legal documentation vetting, home loan syndication with leading banks, and post-possession leasing support.',
    category: 'General'
  },
  {
    question: 'How does Wealth Nexus verify that a project is RERA-compliant?',
    answer: 'Our dedicated legal team conducts a thorough 7-point audit on the respective state RERA portal (UP RERA, Delhi RERA, Haryana RERA). We inspect the builder title deeds, encumbrance certificates, layout sanction approvals, land ownership status, completion timelines, and escrow account compliance before listing any property.',
    category: 'RERA'
  },
  {
    question: 'Why should I invest in Noida, Greater Noida, and Yamuna Expressway now?',
    answer: 'Noida and the Yamuna Expressway corridor represent North India’s fastest-growing growth engine, spurred by the upcoming Noida International Airport (Jewar), the International Film City, the 165 km Yamuna Expressway, the FNG corridor, and multi-billion-dollar investments by global data centres and electronics conglomerates.',
    category: 'Investment'
  },
  {
    question: 'What are the consultancy charges or brokerage fees for buyers?',
    answer: 'Wealth Nexus charges ZERO brokerage from buyers for all primary developer bookings and newly launched projects. Our advisory, property tours, paperwork assistance, and bank loan coordination are completely complimentary for purchasers.',
    category: 'Buying Process'
  },
  {
    question: 'Can Wealth Nexus assist with home loan approval and banking?',
    answer: 'Yes. We have direct institutional tie-ups with SBI, HDFC Bank, ICICI Bank, Axis Bank, and leading NBFCs. We facilitate on-spot pre-approvals, competitive interest rates, doorstep documentation pickup, and quick loan sanctioning for your property acquisition.',
    category: 'Buying Process'
  }
];

// 6. BLOGS & GUIDES
export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'blog-1',
    slug: 'vastu-shastra-guide-for-homebuyers',
    title: 'Complete Vastu Shastra Guide for Modern High-Rise Apartments: Room-by-Room Directions',
    category: 'Vastu Guide',
    categorySlug: 'vastu-guide',
    author: 'Acharya V. K. Shastri',
    date: 'March 15, 2026',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'How to harmonize ancient Vedic spatial science with modern multi-storey apartments. Key guidelines for the main entrance (Ishan cone), kitchen (Agni cone), and master bedroom orientation.',
    content: [
      'Vastu Shastra is the ancient Indian architectural science that balances the five cosmic elements (Pancha Bhoota) — Earth, Water, Fire, Air, and Space. When purchasing an apartment in a high-rise, buyers often wonder if Vastu principles can still be applied effectively.',
      'The Main Entrance (North-East or North): The energy of your home enters through the front door. North, North-East, and East-facing doors are considered auspicious for wealth, peace, and career progression.',
      'The Kitchen (South-East): The South-East direction represents Fire (Agni). Cooking while facing East is believed to bring positive vitality and health to family members.',
      'Master Bedroom (South-West): The South-West represents Earth (Prithvi), providing stability, leadership, and sound sleep. Avoid master bedrooms in the North-East corner.'
    ],
    tags: ['Vastu', 'Home Buying', 'Vedic Architecture', 'Interior Energy']
  },
  {
    id: 'blog-2',
    slug: 'home-interiors-trends-ncr-apartments',
    title: 'Top Interior Design Trends for Luxury NCR Apartments: Quiet Luxury & Warm Minimalism',
    category: 'Home & Interiors',
    categorySlug: 'home-interior',
    author: 'Kavita Chawla',
    date: 'February 28, 2026',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'Explore how top interior architects are turning NCR luxury condominiums into serene, clutter-free sanctuaries using fluted travertine, bespoke wood veneer, and invisible acoustic treatments.',
    content: [
      'The era of ostentatious gold mouldings has given way to understated elegance. Discerning NCR homeowners are adopting quiet luxury — prioritizing authentic craftsmanship, textured limewash walls, and integrated smart home illumination.',
      'Hidden Storage Solutions: Seamless floor-to-ceiling cabinetry that blends into wall panelling creates continuous visual harmony while keeping clutter completely concealed.',
      'Biophilic Balconies: With extensive balconies in Sector 150 and Expressway projects, residents are crafting vertical micro-gardens, misting systems, and wooden deck tiles for outdoor serenity.'
    ],
    tags: ['Interiors', 'Luxury Design', 'Living Room Decor', 'Minimalism']
  },
  {
    id: 'blog-3',
    slug: 'rera-legal-documentation-checklist-india',
    title: 'Homebuyer Legal Checklist: 7 Essential Documents Every Buyer Must Verify Before Booking',
    category: 'Legal & Documentation Guide',
    categorySlug: 'legal-documentation-guide',
    author: 'Advocate Rajesh Mehrotra',
    date: 'February 12, 2026',
    readTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'Protect your hard-earned capital. Learn how to verify the RERA Registration Number, Title Search Report, Encumbrance Certificate, Allotment Letter, and Builder-Buyer Agreement clauses.',
    content: [
      'Buying property is one of the most substantial financial commitments in an individual’s life. Even after the landmark Real Estate (Regulation and Development) Act 2016, vigilance is paramount.',
      '1. RERA Project Registration: Always confirm the project status on the state portal (e.g. up-rera.in). Verify whether the phase you are buying is explicitly included.',
      '2. Title Search Report (30 Years): Ensure the developer possesses clear, marketable, and unencumbered freehold or leased title to the land parcel.',
      '3. Encumbrance Certificate (Form 15): Confirms that the property is free from unpaid mortgages, legal disputes, and court attachments.',
      '4. Builder-Buyer Agreement (BBA): Review delay penalty clauses, carpet area measurements, and payment plan schedules carefully before signing.'
    ],
    tags: ['RERA', 'Legal Guide', 'Property Documents', 'Registry']
  },
  {
    id: 'blog-4',
    slug: 'city-living-guide-noida-sector-150-sports-city',
    title: 'Why Noida Sector 150 is the Ultimate Residential & NRI Investment Destination in 2026',
    category: 'City & Local Living Guides',
    categorySlug: 'city-local-living-guide',
    author: 'Sanjay Aggarwal',
    date: 'January 20, 2026',
    readTime: '7 min read',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'Known as the Green Lung of Noida, Sector 150 boasts 80% green coverage, underground cabling, multi-sports complexes, and 20-minute signal-free access to Jewar International Airport.',
    content: [
      'Sector 150 Noida has emerged as the crown jewel of NCR residential real estate. Unlike high-density urban clusters, Sector 150 was master-planned under strict low-density zoning regulations.',
      'Infrastructure Highlights: Connected by the Noida-Greater Noida Expressway and the Yamuna Expressway, Sector 150 enjoys seamless accessibility to Delhi, Greater Noida, and the forthcoming Jewar International Airport.',
      'Social Ecosystem: World-class healthcare institutions, international schools like DPS and Genesis Global, and expansive cricket stadiums create a premier community for modern families.'
    ],
    tags: ['Sector 150', 'Noida Real Estate', 'Jewar Airport', 'City Guide']
  },
  {
    id: 'blog-5',
    slug: 'indias-super-luxury-real-estate-trends',
    title: 'The Rise of Billionaire Row in NCR: Inside 10,000 Sq.Ft Sky Mansions & Branded Condos',
    category: "India's Luxury Real Estate",
    categorySlug: 'luxury-real-estate',
    author: 'Vikramaditya Oberoi',
    date: 'January 05, 2026',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'How high-net-worth entrepreneurs, C-suite executives, and startup founders are driving demand for 10-crore+ residences featuring private elevators, temperature-controlled plunge pools, and concierge clubs.',
    content: [
      'India’s super-prime real estate segment has witnessed unprecedented velocity over the past 24 months. Projects along Sector 94 Noida, Golf Course Road Gurugram, and Central Delhi are redefining architectural luxury.',
      'Key Amenities in Demand: Private high-speed elevator banks opening directly into home foyers, double-height cantilevered terraces, VRV air conditioning with HEPA air filters, and EV fast-chargers at every dedicated parking slot.'
    ],
    tags: ['Luxury Real Estate', 'Sky Mansions', 'HNW Investments', 'Penthouses']
  }
];

// 7. REAL ESTATE EVENTS
export const REAL_ESTATE_EVENTS: RealEstateEvent[] = [
  {
    id: 'evt-1',
    slug: 'ncr-mega-property-expo-2026',
    title: 'NCR Mega Property Expo & Investor Summit 2026',
    date: 'April 18 - 19, 2026',
    time: '10:00 AM – 7:00 PM IST',
    venue: 'India Expo Centre & Mart, Greater Noida',
    city: 'Greater Noida',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80',
    description: 'North India’s largest real estate exposition bringing together 50+ premier RERA-registered developers, institutional investment funds, and top home loan bankers under one roof.',
    highlights: [
      'Exclusive on-spot launch discounts up to ₹ 10 Lakhs',
      'Zero booking cancellation fees for attendees',
      'Panel discussions on Jewar Airport infrastructure impact',
      'Instant bank loan sanction counters with lowest interest rates'
    ],
    isUpcoming: true
  },
  {
    id: 'evt-2',
    slug: 'nri-global-wealth-summit-dubai',
    title: 'NRI India Real Estate Conclave — Dubai Edition',
    date: 'May 08 - 09, 2026',
    time: '11:00 AM – 8:00 PM GST',
    venue: 'Grand Hyatt Convention Center, Dubai, UAE',
    city: 'Dubai / NCR Portfolios',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    description: 'An exclusive cross-border investment forum for Non-Resident Indians seeking high rental yield commercial and residential assets in NCR, Ayodhya, and Tier-1 Indian corridors.',
    highlights: [
      'Tax & FEMA advisory by chartered accountants',
      'Guaranteed pre-leased commercial assets with 9% ROI',
      'Virtual walkthroughs of prime Sector 150 & Expressway projects'
    ],
    isUpcoming: true
  },
  {
    id: 'evt-3',
    slug: 'ayodhya-commercial-investment-meet',
    title: 'Ayodhya Corridor Retail & Hospitality Investor Forum',
    date: 'March 22, 2026',
    time: '2:00 PM – 6:00 PM IST',
    venue: 'Hotel Clarks Avadh, Lucknow',
    city: 'Lucknow',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80',
    description: 'A focused roundtable analyzing commercial hospitality demand, temple corridor footfalls, and boutique retail opportunities in emerging Ayodhya real estate.',
    highlights: [
      'Keynote by urban planning consultants',
      'Presentation of Samrajya Ayodhya studio suites',
      'Private networking high-tea'
    ],
    isUpcoming: false
  }
];

// 8. REAL ESTATE NEWS
export const REAL_ESTATE_NEWS: NewsItem[] = [
  {
    id: 'news-1',
    slug: 'jewar-airport-commercial-boom-expressway',
    title: 'Noida International Airport Jewar Enters Final Operational Phase: Property Values Surge 24% Along Expressway',
    date: 'March 24, 2026',
    source: 'Financial Express Realty',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'With commercial test flights completed at Noida International Airport (Jewar), real estate demand along the 165 km Yamuna Expressway and Greater Noida has reached a historic peak.',
    content: [
      'The commencement of flight testing at Jewar Airport has transformed Yamuna Expressway from a speculative corridor into North India’s premier investment powerhouse.',
      'According to recent registry data, institutional grade commercial office absorption and luxury residential plot demand have witnessed capital appreciation exceeding 24% year-on-year.'
    ]
  },
  {
    id: 'news-2',
    slug: 'up-rera-digital-portal-transparency-update',
    title: 'UP RERA Mandates Real-Time Digital Construction Milestones on Builder Dashboards',
    date: 'March 18, 2026',
    source: 'ET Realty',
    category: 'Regulations',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'In a major win for home purchasers, the Uttar Pradesh Real Estate Regulatory Authority has mandated quarterly video and photo construction updates for all ongoing projects.',
    content: [
      'The regulatory body noted that quarterly progress uploads with geo-tagged images will ensure that developers adhere strictly to promised possession dates or face automated escrow freezes.'
    ]
  },
  {
    id: 'news-3',
    slug: 'delhi-ncr-luxury-apartments-highest-sales',
    title: 'Delhi-NCR Leads India in ₹ 4 Cr+ Luxury Home Sales During Q1 2026',
    date: 'March 10, 2026',
    source: 'LiveMint Real Estate',
    category: 'Market Trends',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'Driven by high-earning corporate leadership and startup founders, Delhi-NCR accounted for 34% of all ultra-luxury residential sales across India’s top seven cities.',
    content: [
      'Noida Sector 94, Sector 150, and Gurugram Golf Course Extension have captured the lion’s share of large 3,000+ sq.ft residential purchases with strong preference for low-density green communities.'
    ]
  }
];

// 9. WEBSITE OBJECT FOR CATALOG AND APPLET STATE
export const SITE_82_WEBSITE: BusinessWebsite = {
  id: 'site-82-wealth-clinic',
  businessName: site82Config.BRAND_NAME,
  templateId: 'wealth_clinic_consultancy_82',
  category: 'real_estate',
  slug: '82-wealth-clinic',
  tagline: site82Config.TAGLINE,
  description: `${site82Config.BRAND_NAME} is India’s premier real estate consultancy and property discovery platform inspired by Wealth Clinic. Explore verified RERA-approved residential, commercial, luxury, and investment properties across Noida, Greater Noida, Yamuna Expressway, and Delhi NCR.`,
  ownerName: 'Wealth Nexus Directorate',
  city: 'Noida / Delhi NCR',
  address: site82Config.HEAD_OFFICE,
  phone: site82Config.PHONE,
  whatsapp: site82Config.WHATSAPP,
  email: site82Config.EMAIL,
  mapsUrl: 'https://maps.google.com/?q=Express+Trade+Tower+2+Sector+132+Noida',
  openingHours: 'Mo,Tu,We,Th,Fr,Sa 09:30-19:30',
  bookingType: 'consultation_quote',
  bookingCtaLabel: 'Book Free Consultation',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 4999,
  paymentStatus: 'paid',
  coverUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
  logoUrl: '/images/logo.svg',
  primaryColor: site82Config.COLORS.orangePrimary,
  secondaryColor: site82Config.COLORS.navyText,
  fontFamily: 'Inter, sans-serif',
  sections: [
    { id: 'hero-search', title: 'Hero & Floating Search Panel', isEnabled: true, order: 1 },
    { id: 'trust-metrics', title: '14+ Years Trust & Customer Metrics', isEnabled: true, order: 2 },
    { id: 'city-discovery', title: 'City Tabs & RERA Property Grid', isEnabled: true, order: 3 },
    { id: 'partner-developers', title: 'Partner Developers Marquee', isEnabled: true, order: 4 },
    { id: 'property-categories', title: 'Find Right Property (Ready, Affordable, Luxury)', isEnabled: true, order: 5 },
    { id: 'why-choose-us', title: 'Why Choose Wealth Nexus (6 Pillars)', isEnabled: true, order: 6 },
    { id: 'client-reviews', title: 'Verified Google Business Reviews', isEnabled: true, order: 7 },
    { id: 'faqs', title: 'Frequently Asked Questions', isEnabled: true, order: 8 },
    { id: 'footer-rera', title: 'Full Footer with State RERA Badges', isEnabled: true, order: 9 }
  ],
  gallery: WEALTH_PROPERTIES.map((p) => ({
    id: p.id,
    title: p.name,
    category: p.projectType,
    imageUrl: p.images[0]
  })),
  offers: [
    {
      id: 'offer-site-visit',
      title: 'Complimentary Escorted Site Visit & Cab',
      description: 'Book your weekend project tour with free doorstep AC cab pickup and zero broker consultation fee.',
      couponCode: 'NEXUSVISIT',
      discountPercent: 100,
      validTill: '2026-12-31'
    }
  ],
  items: WEALTH_PROPERTIES.map((p) => ({
    id: p.id,
    name: p.name,
    description: `${p.projectType} in ${p.location}, ${p.city}. ${p.configuration}. RERA: ${p.reraNumber}`,
    price: p.priceValue * 100000,
    category: p.projectType,
    imageUrl: p.images[0],
    isAvailable: true
  })),
  createdAt: '2026-10-05T00:00:00.000Z',
  updatedAt: '2026-10-05T00:00:00.000Z'
};

export default SITE_82_WEBSITE;
