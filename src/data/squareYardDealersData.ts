import { BusinessWebsite } from '../types';

export interface PropertyItem {
  id: string;
  slug: string;
  title: string;
  location: string;
  locality: string;
  city: string;
  listingType: 'buy' | 'rent';
  propertyCategory: 'residential' | 'commercial' | 'land';
  propertyType:
    | 'Apartment'
    | 'Builder Floor'
    | 'Villa'
    | 'Independent House'
    | 'Penthouse'
    | 'Plot'
    | 'Office Space'
    | 'Shop'
    | 'Showroom'
    | 'Warehouse'
    | 'Co-working Space'
    | 'PG';
  price: number; // in INR
  priceDisplay: string;
  pricePerSqFt?: string;
  area: number; // sq ft
  areaUnit: string;
  bedrooms: number;
  bathrooms: number;
  balconies?: number;
  furnishing: 'Furnished' | 'Semi-Furnished' | 'Unfurnished';
  possessionStatus: 'Ready To Move' | 'Under Construction' | 'Immediate';
  postedBy: 'Owner' | 'Property Dealer' | 'Builder';
  dealerName?: string;
  dealerPhone?: string;
  verified: boolean;
  featured?: boolean;
  hotDeal?: boolean;
  facing?: 'North' | 'East' | 'North-East' | 'West' | 'South';
  floor?: string;
  totalFloors?: number;
  parking?: 'Covered' | 'Open' | '1 Covered' | '2 Covered' | '3 Covered' | '4 Covered' | 'None' | string;
  amenities: string[];
  description: string;
  images: string[];
  nearbyLandmarks: string[];
  projectSlug?: string;
  projectName?: string;
  createdDate: string;
}

export interface RealEstateProject {
  id: string;
  slug: string;
  name: string;
  developer: string;
  city: string;
  locality: string;
  locationDetails: string;
  status: 'New Launch' | 'Under Construction' | 'Ready to Move';
  category: 'Trending' | 'New Launch' | 'Ready to Move' | 'Under Construction' | 'Premium' | 'Affordable';
  priceRange: string;
  startingPrice: number;
  configurations: string[];
  areaRange: string;
  totalUnits?: number;
  possessionDate: string;
  bannerImage: string;
  galleryImages: string[];
  description: string;
  amenities: string[];
  locationAdvantages: string[];
  reraId?: string;
}

export interface PropertyDealer {
  id: string;
  name: string;
  agencyName: string;
  photoUrl: string;
  experienceYears: number;
  city: string;
  areasServed: string[];
  specialisation: 'Residential Sale' | 'Luxury Villas' | 'Commercial & Office' | 'Rentals & Leases' | 'All Segments';
  activeListingsCount: number;
  rating: number;
  reviewsCount: number;
  verified: boolean;
  phone: string;
  whatsapp: string;
  email: string;
  about: string;
}

export interface RealEstateArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Buying Guide' | 'Selling Guide' | 'Rental Guide' | 'Investment' | 'Home Loans' | 'Legal & Documentation';
  readTime: string;
  publishedDate: string;
  author: string;
  image: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
}

// Brand Configurations
export const BRAND_NAME = 'SQUARE YARD DEALERS';
export const BRAND_DISPLAY = 'Square Yard Dealers';
export const BRAND_TAGLINE = 'Property Discovery & Real-Estate Advisory Made Simpler';

export const PHONE_NUMBER = '+91 95137 02626';
export const EMAIL_ADDRESS = 'connect@squareyarddealers.com';
export const WHATSAPP_NUMBER = '919513702626';
export const OFFICE_ADDRESS = 'Tower A, 5th Floor, Golf Course Extension Road, Sector 65, Gurugram, Haryana - 122102, India';

// Currency Formatting Helper
export const formatIndianCurrency = (amount: number): string => {
  if (amount >= 10000000) {
    const cr = amount / 10000000;
    return `₹ ${cr.toFixed(2).replace(/\.00$/, '')} Cr`;
  }
  if (amount >= 100000) {
    const lac = amount / 100000;
    return `₹ ${lac.toFixed(2).replace(/\.00$/, '')} Lac`;
  }
  return `₹ ${amount.toLocaleString('en-IN')}`;
};

// EXACT 7 CATEGORIES URLs as requested by prompt
export const RESTAURANT_URL = '#restaurant';
export const SALON_URL = '#salon';
export const CAFE_URL = '#cafe';
export const JEWELLERY_URL = '#jewellery';
export const GYM_URL = '#gym';
export const LOANS_URL = '#loans';
export const REAL_ESTATE_URL = '#real-estate';

export interface GlobalCategoryItem {
  id: string;
  name: string;
  displayName: string;
  url: string;
  iconName: 'utensils' | 'scissors' | 'coffee' | 'gem' | 'dumbbell' | 'landmark' | 'building';
  description: string;
  isActive?: boolean;
}

// The EXACT 7 Categories
export const GLOBAL_SEVEN_CATEGORIES: GlobalCategoryItem[] = [
  {
    id: 'restaurant',
    name: 'RESTAURANT',
    displayName: 'Restaurant',
    url: RESTAURANT_URL,
    iconName: 'utensils',
    description: 'Fine dining, restaurants, food chains & cloud kitchens'
  },
  {
    id: 'salon',
    name: 'SALON',
    displayName: 'Salon & Spa',
    url: SALON_URL,
    iconName: 'scissors',
    description: 'Luxury salons, beauty studios & aesthetic clinics'
  },
  {
    id: 'cafe',
    name: 'CAFE',
    displayName: 'Cafe & Roastery',
    url: CAFE_URL,
    iconName: 'coffee',
    description: 'Artisanal roasters, specialty cafes & urban bakeries'
  },
  {
    id: 'jewellery',
    name: 'JEWELLERY',
    displayName: 'Jewellery',
    url: JEWELLERY_URL,
    iconName: 'gem',
    description: 'Fine gold, diamond jewellery, polki & bridal collections'
  },
  {
    id: 'gym',
    name: 'GYM',
    displayName: 'Gym & Fitness',
    url: GYM_URL,
    iconName: 'dumbbell',
    description: 'Fitness centers, premium gyms, crossfit & wellness'
  },
  {
    id: 'loans',
    name: 'LOANS',
    displayName: 'Loans & Finance',
    url: LOANS_URL,
    iconName: 'landmark',
    description: 'Financial assistance, loan facilitator & credit advisory'
  },
  {
    id: 'real-estate',
    name: 'REAL ESTATE',
    displayName: 'Real Estate',
    url: REAL_ESTATE_URL,
    iconName: 'building',
    description: 'Square Yard Dealers — Indian property discovery & marketplace',
    isActive: true
  }
];

// Top Indian Real Estate Hubs
export interface CityInfo {
  id: string;
  name: string;
  slug: string;
  state: string;
  tagline: string;
  avgBuyRate: string;
  avgRentRate: string;
  popularLocalities: string[];
  activePropertiesCount: number;
  imageUrl: string;
}

export const POPULAR_CITIES: CityInfo[] = [
  {
    id: 'gurgaon',
    name: 'Gurgaon',
    slug: 'gurgaon-real-estate',
    state: 'Haryana',
    tagline: 'Millennium City & Corporate Cyber Hub',
    avgBuyRate: '₹ 15,100 / sq.ft',
    avgRentRate: '₹ 38,000 / mo',
    popularLocalities: ['Golf Course Road', 'Golf Course Ext.', 'Dwarka Expressway', 'Sohna Road', 'New Gurgaon', 'Sector 65', 'Sector 57'],
    activePropertiesCount: 16087,
    imageUrl: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'delhi',
    name: 'Delhi',
    slug: 'delhi-real-estate',
    state: 'Delhi NCR',
    tagline: 'National Capital with Heritage & Modern Enclaves',
    avgBuyRate: '₹ 18,200 / sq.ft',
    avgRentRate: '₹ 35,000 / mo',
    popularLocalities: ['Dwarka', 'Vasant Kunj', 'Saket', 'Greater Kailash', 'Rohini', 'Pitampura', 'Lajpat Nagar', 'Janakpuri'],
    activePropertiesCount: 14210,
    imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'noida',
    name: 'Noida',
    slug: 'noida-real-estate',
    state: 'Uttar Pradesh',
    tagline: 'Planned Infrastructure & High-Growth Corridors',
    avgBuyRate: '₹ 12,650 / sq.ft',
    avgRentRate: '₹ 28,000 / mo',
    popularLocalities: ['Noida Expressway', 'Sector 150', 'Sector 137', 'Sector 75', 'Sector 62', 'Sector 128', 'Greater Noida West'],
    activePropertiesCount: 12500,
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    slug: 'mumbai-real-estate',
    state: 'Maharashtra',
    tagline: 'Financial Capital with Coastal & Skyline Living',
    avgBuyRate: '₹ 37,700 / sq.ft',
    avgRentRate: '₹ 55,000 / mo',
    popularLocalities: ['Andheri West', 'Bandra West', 'Worli', 'Juhu', 'Goregaon East', 'Kandivali East', 'Powai', 'Malad West'],
    activePropertiesCount: 18450,
    imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'bangalore',
    name: 'Bangalore',
    slug: 'bangalore-real-estate',
    state: 'Karnataka',
    tagline: 'Silicon Valley with Tech Parks & Lush Living',
    avgBuyRate: '₹ 12,400 / sq.ft',
    avgRentRate: '₹ 32,000 / mo',
    popularLocalities: ['Whitefield', 'Sarjapur Road', 'Bellandur', 'Hebbal', 'Indiranagar', 'Electronic City', 'Devanahalli'],
    activePropertiesCount: 15300,
    imageUrl: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pune',
    name: 'Pune',
    slug: 'pune-real-estate',
    state: 'Maharashtra',
    tagline: 'Cultural, Academic & Vibrant IT Magnet',
    avgBuyRate: '₹ 13,550 / sq.ft',
    avgRentRate: '₹ 26,000 / mo',
    popularLocalities: ['Hinjewadi', 'Baner', 'Wakad', 'Kharadi', 'Viman Nagar', 'Kalyani Nagar', 'Balewadi'],
    activePropertiesCount: 9800,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    slug: 'hyderabad-real-estate',
    state: 'Telangana',
    tagline: 'Cyberabad & Genome Valley with Wide Expressways',
    avgBuyRate: '₹ 9,400 / sq.ft',
    avgRentRate: '₹ 25,000 / mo',
    popularLocalities: ['Gachibowli', 'Hitec City', 'Kondapur', 'Kokapet', 'Tellapur', 'Madhapur', 'Banjara Hills'],
    activePropertiesCount: 8900,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'thane',
    name: 'Thane',
    slug: 'thane-real-estate',
    state: 'Maharashtra',
    tagline: 'City of Lakes with Rapid Metro Expansion',
    avgBuyRate: '₹ 16,000 / sq.ft',
    avgRentRate: '₹ 27,000 / mo',
    popularLocalities: ['Ghodbunder Road', 'Majiwada', 'Vasant Vihar', 'Kolshet Road', 'Hiranandani Estate', 'Pokhran Road'],
    activePropertiesCount: 6200,
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80'
  }
];

// Rich Sample Properties Catalog (Buy, Rent, Commercial, Plots, Luxury)
export const SAMPLE_PROPERTIES: PropertyItem[] = [
  {
    id: 'prop-1',
    slug: 'luxury-4bhk-penthouse-golf-course-road-gurgaon',
    title: '4 BHK Ultra Luxury Penthouse with Golf Views',
    location: 'Sector 54, Golf Course Road, Gurgaon',
    locality: 'Golf Course Road',
    city: 'Gurgaon',
    listingType: 'buy',
    propertyCategory: 'residential',
    propertyType: 'Penthouse',
    price: 68500000,
    priceDisplay: '₹ 6.85 Cr',
    pricePerSqFt: '₹ 19,500 / sq.ft',
    area: 3512,
    areaUnit: 'sq.ft',
    bedrooms: 4,
    bathrooms: 5,
    balconies: 3,
    furnishing: 'Furnished',
    possessionStatus: 'Ready To Move',
    postedBy: 'Property Dealer',
    dealerName: 'Rajesh Malhotra & Associates',
    dealerPhone: '+91 95137 02626',
    verified: true,
    featured: true,
    hotDeal: true,
    facing: 'North-East',
    floor: '28th of 30',
    totalFloors: 30,
    parking: '2 Covered',
    amenities: ['Infinity Swimming Pool', 'Private Elevator', 'Golf Course View', 'Gymnasium', 'Concierge Service', '100% Power Backup', 'Smart Home Automation'],
    description: 'An architectural masterpiece offering uninterrupted green views of the Aravalli hills and the prestigious Golf Course. Features double-height living areas, Italian marble flooring, and private viewing terrace.',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80'
    ],
    nearbyLandmarks: ['Sector 54 Rapid Metro (400m)', 'One Horizon Center (1.2 km)', 'Fortis Memorial Hospital (4.5 km)'],
    createdDate: '2026-09-15'
  },
  {
    id: 'prop-2',
    slug: 'modern-3bhk-apartment-dwarka-expressway-gurgaon',
    title: '3 BHK High-Rise Apartment in Gated Community',
    location: 'Sector 37D, Dwarka Expressway, Gurgaon',
    locality: 'Dwarka Expressway',
    city: 'Gurgaon',
    listingType: 'buy',
    propertyCategory: 'residential',
    propertyType: 'Apartment',
    price: 18500000,
    priceDisplay: '₹ 1.85 Cr',
    pricePerSqFt: '₹ 10,277 / sq.ft',
    area: 1800,
    areaUnit: 'sq.ft',
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    furnishing: 'Semi-Furnished',
    possessionStatus: 'Ready To Move',
    postedBy: 'Owner',
    verified: true,
    featured: true,
    facing: 'East',
    floor: '14th of 24',
    totalFloors: 24,
    parking: 'Covered',
    amenities: ['Clubhouse', 'Children Play Area', 'Jogging Track', 'Tennis Court', 'CCTV Security', 'EV Charging Station'],
    description: 'Spacious, well-ventilated 3 BHK apartment in a premium high-rise society right on Dwarka Expressway. Modular kitchen with branded fittings and modular wardrobes included.',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80'
    ],
    nearbyLandmarks: ['Dwarka Expressway Toll (2 km)', 'IGI Airport Terminal 3 (18 mins)', 'DPS Gurgaon (3 km)'],
    createdDate: '2026-09-20'
  },
  {
    id: 'prop-3',
    slug: 'spacious-3bhk-builder-floor-dwarka-sector-12-delhi',
    title: '3 BHK Builder Floor with Terrace & Lift',
    location: 'Sector 12, Dwarka, New Delhi',
    locality: 'Dwarka',
    city: 'Delhi',
    listingType: 'buy',
    propertyCategory: 'residential',
    propertyType: 'Builder Floor',
    price: 14500000,
    priceDisplay: '₹ 1.45 Cr',
    pricePerSqFt: '₹ 11,600 / sq.ft',
    area: 1250,
    areaUnit: 'sq.ft',
    bedrooms: 3,
    bathrooms: 2,
    balconies: 2,
    furnishing: 'Semi-Furnished',
    possessionStatus: 'Ready To Move',
    postedBy: 'Property Dealer',
    dealerName: 'Dwarka Property Hub',
    dealerPhone: '+91 95137 02626',
    verified: true,
    facing: 'North',
    floor: '2nd of 4',
    totalFloors: 4,
    parking: 'Covered',
    amenities: ['Stilt Parking', 'Otis Passenger Lift', 'Gated Colony', 'Individual Water Tank', 'Modular Kitchen'],
    description: 'Newly constructed freehold builder floor with clear title deeds and bank loan pre-approved. Walking distance from Delhi Metro station and prominent neighborhood market.',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80'
    ],
    nearbyLandmarks: ['Sector 12 Metro Station (350m)', 'Venkateshwar Hospital (1 km)', 'City Centre Mall (800m)'],
    createdDate: '2026-09-18'
  },
  {
    id: 'prop-4',
    slug: 'fully-furnished-2bhk-flat-for-rent-powai-mumbai',
    title: '2 BHK Lake-Facing Furnished Apartment on Rent',
    location: 'Hiranandani Gardens, Powai, Mumbai',
    locality: 'Powai',
    city: 'Mumbai',
    listingType: 'rent',
    propertyCategory: 'residential',
    propertyType: 'Apartment',
    price: 68000,
    priceDisplay: '₹ 68,000 / mo',
    pricePerSqFt: '₹ 68 / sq.ft/mo',
    area: 1000,
    areaUnit: 'sq.ft',
    bedrooms: 2,
    bathrooms: 2,
    balconies: 1,
    furnishing: 'Furnished',
    possessionStatus: 'Immediate',
    postedBy: 'Property Dealer',
    dealerName: 'Mumbai Coastal Properties',
    dealerPhone: '+91 95137 02626',
    verified: true,
    featured: true,
    facing: 'East',
    floor: '18th of 25',
    totalFloors: 25,
    parking: '1 Covered',
    amenities: ['Lake View', 'Clubhouse & Pool', 'Central AC', 'Piped Gas', 'Intercom & Security', '24x7 Water'],
    description: 'Immaculately maintained fully furnished home in upscale Hiranandani Powai. Equipped with double-door refrigerator, automatic washing machine, 55-inch Smart TV, and ergonomic workstations.',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1000&q=80'
    ],
    nearbyLandmarks: ['Powai Lake Promenade (300m)', 'Galleria Shopping Arcade (500m)', 'IIT Bombay (1.5 km)'],
    createdDate: '2026-09-22'
  },
  {
    id: 'prop-5',
    slug: 'prime-commercial-office-space-whitefield-bangalore',
    title: 'Grade-A Plug & Play Commercial Office Space',
    location: 'EPIP Zone, Whitefield, Bangalore',
    locality: 'Whitefield',
    city: 'Bangalore',
    listingType: 'rent',
    propertyCategory: 'commercial',
    propertyType: 'Office Space',
    price: 185000,
    priceDisplay: '₹ 1.85 Lakh / mo',
    pricePerSqFt: '₹ 74 / sq.ft/mo',
    area: 2500,
    areaUnit: 'sq.ft',
    bedrooms: 0,
    bathrooms: 4,
    furnishing: 'Furnished',
    possessionStatus: 'Immediate',
    postedBy: 'Property Dealer',
    dealerName: 'Silicon Valley Commercial Realty',
    dealerPhone: '+91 95137 02626',
    verified: true,
    featured: true,
    floor: '4th of 8',
    totalFloors: 8,
    parking: '4 Covered',
    amenities: ['50 Workstations', '2 Conference Rooms', 'Server Room with UPS', 'Pantry & Cafeteria', 'High-Speed Elevators', 'Access Card Entry'],
    description: 'Furnished corporate workspace ready for software and consulting firms. Centrally air-conditioned with 100% DG power backup and high-speed fiber internet backbone.',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80'
    ],
    nearbyLandmarks: ['ITPL (800m)', 'Whitefield Metro Station (600m)', 'Nexus Shantiniketan (1.2 km)'],
    createdDate: '2026-09-25'
  },
  {
    id: 'prop-6',
    slug: '4bhk-independent-luxury-villa-sarjapur-road-bangalore',
    title: '4 BHK Luxury Independent Villa with Private Garden',
    location: 'Sarjapur Road, Bangalore',
    locality: 'Sarjapur Road',
    city: 'Bangalore',
    listingType: 'buy',
    propertyCategory: 'residential',
    propertyType: 'Villa',
    price: 34500000,
    priceDisplay: '₹ 3.45 Cr',
    pricePerSqFt: '₹ 10,781 / sq.ft',
    area: 3200,
    areaUnit: 'sq.ft',
    bedrooms: 4,
    bathrooms: 5,
    balconies: 3,
    furnishing: 'Semi-Furnished',
    possessionStatus: 'Ready To Move',
    postedBy: 'Property Dealer',
    verified: true,
    hotDeal: true,
    facing: 'North-East',
    floor: 'Ground + 1 + Terrace',
    totalFloors: 2,
    parking: '2 Covered',
    amenities: ['Private Lawn', 'Clubhouse & Olympic Pool', 'Terrace Pergola', 'Solar Water Heating', 'Squash Court', '24x7 Security'],
    description: 'Bespoke European-style villa within an expansive 50-acre gated villa sanctuary. Features high ceilings, skylights, private landscaped backyard, and Italian marble flooring.',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'
    ],
    nearbyLandmarks: ['Greenwood High School (2.5 km)', 'Wipro Corporate Office (5 km)', 'Columbia Asia Hospital (6 km)'],
    createdDate: '2026-09-12'
  },
  {
    id: 'prop-7',
    slug: 'residential-plot-noida-sector-150',
    title: 'Gated Residential Villa Plot in Sports City',
    location: 'Sector 150, Noida Expressway, Noida',
    locality: 'Sector 150',
    city: 'Noida',
    listingType: 'buy',
    propertyCategory: 'land',
    propertyType: 'Plot',
    price: 16500000,
    priceDisplay: '₹ 1.65 Cr',
    pricePerSqFt: '₹ 8,250 / sq.yd',
    area: 200,
    areaUnit: 'sq.yd',
    bedrooms: 0,
    bathrooms: 0,
    furnishing: 'Unfurnished',
    possessionStatus: 'Ready To Move',
    postedBy: 'Owner',
    verified: true,
    facing: 'North',
    amenities: ['Underground Cabling', 'Wide 60ft Wide Roads', 'Park Facing', 'Gated Perimeter', 'Water & Electricity Connection Ready'],
    description: 'Prime residential plot situated in NCR\'s greenest sector (over 70% green cover). Ideal for building a custom luxury bungalow with stilt plus four floors permission.',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80'
    ],
    nearbyLandmarks: ['Noida-Greater Noida Expressway (1 km)', 'Sector 148 Aqua Metro (2.2 km)', 'Shaheed Bhagat Singh Park (500m)'],
    createdDate: '2026-09-10'
  },
  {
    id: 'prop-8',
    slug: 'retail-shop-hinjewadi-phase-1-pune',
    title: 'High Street Double-Height Retail Commercial Shop',
    location: 'Hinjewadi Phase 1, Pune',
    locality: 'Hinjewadi',
    city: 'Pune',
    listingType: 'buy',
    propertyCategory: 'commercial',
    propertyType: 'Shop',
    price: 9200000,
    priceDisplay: '₹ 92.00 Lakh',
    pricePerSqFt: '₹ 15,333 / sq.ft',
    area: 600,
    areaUnit: 'sq.ft',
    bedrooms: 0,
    bathrooms: 1,
    furnishing: 'Unfurnished',
    possessionStatus: 'Ready To Move',
    postedBy: 'Property Dealer',
    dealerName: 'Pune IT Corridor Properties',
    dealerPhone: '+91 95137 02626',
    verified: true,
    floor: 'Ground Floor',
    totalFloors: 4,
    parking: 'Open',
    amenities: ['Road Facing Frontage', '20ft Double Ceiling Height', 'High Footfall IT Hub', 'Dedicated Signage Area', 'Power Backup'],
    description: 'Ground floor retail unit surrounded by software majors and luxury residential towers. Excellent rental yield potential (anticipated 7.5% - 8.2% annual ROI).',
    images: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1000&q=80'
    ],
    nearbyLandmarks: ['Infosys Campus Phase 1 (400m)', 'Wipro Technologies (700m)', 'Courtyard by Marriott (1 km)'],
    createdDate: '2026-09-24'
  }
];

// Sample Real Estate Projects (Matching Reference Projects Section)
export const SAMPLE_PROJECTS: RealEstateProject[] = [
  {
    id: 'proj-1',
    slug: 'kalpataru-vian-andheri-west-mumbai',
    name: 'Kalpataru Vian',
    developer: 'Kalpataru Limited',
    city: 'Mumbai',
    locality: 'Andheri West',
    locationDetails: 'Lokhandwala Complex, Andheri West, Mumbai',
    status: 'New Launch',
    category: 'Trending',
    priceRange: '₹ 5.05 Cr to ₹ 9.63 Cr',
    startingPrice: 50500000,
    configurations: ['2 BHK', '3 BHK', '4 BHK'],
    areaRange: '890 - 2,150 sq.ft',
    totalUnits: 420,
    possessionDate: 'Dec 2029',
    bannerImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'An iconic residential landmark rising gracefully in Lokhandwala, Andheri West. Kalpataru Vian introduces sky residences with panoramic views of the city and sea, crafted for discerning urban families.',
    amenities: ['Sky Lounge', 'Temperature-Controlled Swimming Pool', 'Wellness Spa', 'Automated Basement Parking', 'Squash & Badminton Courts', 'Landscaped Podium Gardens'],
    locationAdvantages: ['5 mins from Infinity Mall', '8 mins from Versova Metro', '15 mins from Juhu Beach', 'Direct Western Express Highway link'],
    reraId: 'P51800054321'
  },
  {
    id: 'proj-2',
    slug: 'eldeco-terra-and-sol-sector-80-gurgaon',
    name: 'Eldeco Terra & Sol',
    developer: 'Eldeco Infrastructure & Properties',
    city: 'Gurgaon',
    locality: 'Sector 80',
    locationDetails: 'Sector 80, Foothills of Aravallis, New Gurgaon',
    status: 'New Launch',
    category: 'Premium',
    priceRange: '₹ 3.23 Cr to ₹ 3.67 Cr',
    startingPrice: 32300000,
    configurations: ['3 Beds', '3.5 BHK'],
    areaRange: '2,150 - 2,450 sq.ft',
    totalUnits: 224,
    possessionDate: 'Mar 2029',
    bannerImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Low-density sanctuary set against the backdrop of the Aravalli hills. Enjoy resort-style living with dual clubhouse experiences, tree-lined boulevards, and sprawling open recreational spaces.',
    amenities: ['Resort Club & Heated Pool', 'Private Amphitheatre', 'Tennis & Pickleball Courts', 'Organic Herb Garden', 'Multi-tier 24x7 Security'],
    locationAdvantages: ['Direct connectivity to NH-48', '10 mins to Dwarka Expressway', 'Close to Karma Lakelands Golf Club'],
    reraId: 'RC/REP/HARERA/GGM/782/2026'
  },
  {
    id: 'proj-3',
    slug: 'godrej-regent-park-sarjapur-bangalore',
    name: 'Godrej Regent Park',
    developer: 'Godrej Properties',
    city: 'Bangalore',
    locality: 'Sarjapur',
    locationDetails: 'Kada Agrahara, Sarjapur, Bangalore',
    status: 'New Launch',
    category: 'Affordable',
    priceRange: '₹ 1.23 Cr to ₹ 1.85 Cr',
    startingPrice: 12300000,
    configurations: ['2 BHK', '3 BHK'],
    areaRange: '1,120 - 1,650 sq.ft',
    totalUnits: 650,
    possessionDate: 'Jun 2028',
    bannerImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Thoughtfully planned residential community with 80% open greens and signature forest trails. Designed around natural light, fresh air circulation, and comprehensive community amenities.',
    amenities: ['Lush Forest Walkways', 'Grand Clubhouse', 'Co-working Pods', 'Cricket Practice Pitch', 'Skating Rink', 'Senior Citizens Pavilion'],
    locationAdvantages: ['Close to RGA Tech Park', 'Nearby Oakridge International School', '15 mins from Outer Ring Road'],
    reraId: 'PRM/KA/RERA/1251/308/PR/240502'
  },
  {
    id: 'proj-4',
    slug: 'm3m-the-line-sector-72-noida',
    name: 'M3M The Line',
    developer: 'M3M India',
    city: 'Noida',
    locality: 'Sector 72',
    locationDetails: 'Sector 72, Central Noida',
    status: 'Under Construction',
    category: 'Trending',
    priceRange: '₹ 96.40 L to ₹ 1.72 Cr',
    startingPrice: 9640000,
    configurations: ['Studio Suites', '1 BHK Serviced', 'Retail Outlets'],
    areaRange: '560 - 1,150 sq.ft',
    totalUnits: 510,
    possessionDate: 'Dec 2027',
    bannerImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'A revolutionary mixed-use development bringing together luxury studio serviced suites and high-street retail promenades at the central crossroads of Noida.',
    amenities: ['Rooftop Infinity Deck', 'High-Street Retail Boulevard', 'Fine Dining Restaurants', 'Concierge & Housekeeping Facility', '24x7 Valet'],
    locationAdvantages: ['Right beside Sector 51 & 52 Interchange Metro Station', '10 mins from Noida Expressway', '15 mins from Sector 18 Market'],
    reraId: 'UPRERAPRJ24628'
  }
];

// Sample Property Dealers / Agents
export const SAMPLE_DEALERS: PropertyDealer[] = [
  {
    id: 'agent-1',
    name: 'Rajesh Malhotra',
    agencyName: 'Malhotra Realty Advisory',
    photoUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    experienceYears: 14,
    city: 'Gurgaon',
    areasServed: ['Golf Course Road', 'Dwarka Expressway', 'Sohna Road', 'DLF Phase 1-5'],
    specialisation: 'All Segments',
    activeListingsCount: 48,
    rating: 4.9,
    reviewsCount: 112,
    verified: true,
    phone: PHONE_NUMBER,
    whatsapp: WHATSAPP_NUMBER,
    email: EMAIL_ADDRESS,
    about: 'Specialising in luxury residential apartments, premium penthouses and high-yield commercial assets across Gurugram and Dwarka Expressway.'
  },
  {
    id: 'agent-2',
    name: 'Pooja Deshmukh',
    agencyName: 'Prime Mumbai Properties',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    experienceYears: 9,
    city: 'Mumbai',
    areasServed: ['Andheri West', 'Bandra', 'Powai', 'Worli'],
    specialisation: 'Residential Sale',
    activeListingsCount: 36,
    rating: 4.8,
    reviewsCount: 84,
    verified: true,
    phone: PHONE_NUMBER,
    whatsapp: WHATSAPP_NUMBER,
    email: EMAIL_ADDRESS,
    about: 'Helping homebuyers navigate Western Suburbs and South Mumbai transactions with end-to-end documentation assistance and transparent valuations.'
  },
  {
    id: 'agent-3',
    name: 'Vikramaditya Rao',
    agencyName: 'Bangalore Tech Realty',
    photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    experienceYears: 12,
    city: 'Bangalore',
    areasServed: ['Whitefield', 'Sarjapur Road', 'Hebbal', 'Indiranagar'],
    specialisation: 'Luxury Villas',
    activeListingsCount: 52,
    rating: 4.9,
    reviewsCount: 96,
    verified: true,
    phone: PHONE_NUMBER,
    whatsapp: WHATSAPP_NUMBER,
    email: EMAIL_ADDRESS,
    about: 'Trusted advisory for senior tech leaders, NRIs, and investors seeking gated community villas and premium high-rise apartments in Bengaluru.'
  },
  {
    id: 'agent-4',
    name: 'Sunil Aggarwal',
    agencyName: 'Delhi Capital Associates',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    experienceYears: 18,
    city: 'Delhi',
    areasServed: ['Dwarka', 'Vasant Kunj', 'Rohini', 'South Delhi'],
    specialisation: 'Residential Sale',
    activeListingsCount: 42,
    rating: 4.9,
    reviewsCount: 130,
    verified: true,
    phone: PHONE_NUMBER,
    whatsapp: WHATSAPP_NUMBER,
    email: EMAIL_ADDRESS,
    about: 'Expert in DDA flats, approved builder floors, and freehold plots across Delhi NCR with deep registry and title search expertise.'
  }
];

// Real Estate Tools Cards
export const REAL_ESTATE_TOOLS = [
  {
    id: 'tool-val',
    slug: 'property-valuation',
    title: 'Property Valuation Tool',
    description: 'Get an instant data-backed price estimate for buying, selling, or evaluating properties in your micro-market.',
    icon: 'TrendingUp',
    route: '/property-valuation',
    ctaText: 'Check Valuation'
  },
  {
    id: 'tool-emi',
    slug: 'emi-calculator',
    title: 'Home Loan EMI Calculator',
    description: 'Plan your monthly repayments, compare interest rates, and test loan tenure options before making an offer.',
    icon: 'Calculator',
    route: '/calculator',
    ctaText: 'Calculate EMI'
  },
  {
    id: 'tool-tracker',
    slug: 'rate-tracker',
    title: 'Property Rate Tracker',
    description: 'Track quarter-on-quarter capital appreciation and rental yield trends across 500+ Indian localities.',
    icon: 'LineChart',
    route: '/tools',
    ctaText: 'Explore Trends'
  },
  {
    id: 'tool-budget',
    slug: 'budget-planner',
    title: 'Home Buyer Budget Planner',
    description: 'Determine your realistic home purchase budget based on down payment, monthly income, and existing liabilities.',
    icon: 'Wallet',
    route: '/tools',
    ctaText: 'Plan Budget'
  },
  {
    id: 'tool-rent-buy',
    slug: 'rent-vs-buy',
    title: 'Rent vs Buy Calculator',
    description: 'Compare the long-term wealth creation and financial impact of continuing to rent versus owning your home.',
    icon: 'Scale',
    route: '/tools',
    ctaText: 'Compare Now'
  },
  {
    id: 'tool-vastu',
    slug: 'vastu-tool',
    title: 'Vastu Direction Analyzer',
    description: 'Evaluate property layout, entrance direction, and kitchen alignment according to traditional Vastu principles.',
    icon: 'Compass',
    route: '/tools',
    ctaText: 'Analyze Vastu'
  }
];

// Why Choose Us (6 Pillars)
export const WHY_CHOOSE_US_POINTS = [
  {
    title: 'Verified Property Information',
    description: 'We prioritize listings with clear physical verification, authentic photography, and accurate square footage metrics.'
  },
  {
    title: 'Professional Property Assistance',
    description: 'Experienced local property dealers and advisors provide genuine, unbiased guidance without misleading high-pressure tactics.'
  },
  {
    title: 'Wide Property Categories',
    description: 'From affordable apartments and builder floors to commercial office suites and luxury villas across major metro centers.'
  },
  {
    title: 'Local Market Knowledge',
    description: 'Micro-market price insights, upcoming infrastructure updates (Metro, Expressways), and neighborhood liveability ratings.'
  },
  {
    title: 'Transparent Communication',
    description: 'Direct owner and verified agent contacts with upfront disclosures regarding maintenance, registration, and legal status.'
  },
  {
    title: 'End-to-End Assistance',
    description: 'Guidance from your initial search and physical site inspection to loan facilitation and agreement documentation.'
  }
];

// Our Real Estate Services (10 Services)
export const REAL_ESTATE_SERVICES = [
  { id: 's-1', title: 'Property Buying', description: 'Assistance in discovering, evaluating, and negotiating residential properties with vetted sellers.' },
  { id: 's-2', title: 'Property Selling', description: 'List your property to reach thousands of genuine active buyers with verified marketing exposure.' },
  { id: 's-3', title: 'Property Rental', description: 'Find verified rental flats, independent houses, or corporate leases across prime localities.' },
  { id: 's-4', title: 'New Real Estate Projects', description: 'Exclusive access to newly launched developer projects, booking privileges, and pre-launch prices.' },
  { id: 's-5', title: 'Resale Properties', description: 'Curated ready-to-move secondary market inventory with clear title documentation.' },
  { id: 's-6', title: 'Commercial Real Estate', description: 'Office spaces, retail shops, showrooms, and industrial warehouses for investment and business use.' },
  { id: 's-7', title: 'Property Valuation', description: 'Analytical market estimation based on recent circle rates and actual registry transactions.' },
  { id: 's-8', title: 'Home Loan Assistance', description: 'Assistance exploring competitive home financing and pre-approval through lending institutions.' },
  { id: 's-9', title: 'Property Management', description: 'Assistance for NRIs and outstation owners in tenant onboarding, rent collection, and inspections.' },
  { id: 's-10', title: 'Documentation Assistance', description: 'Guidance on sale deeds, encumbrance certificates, society NOCs, and stamp duty registration.' }
];

// How Square Yard Dealers Works (5 Steps)
export const HOW_IT_WORKS_STEPS = [
  { step: '01', title: 'Tell Us What You Need', description: 'Select your preferred city, locality, budget range, and property configuration (BHK/Commercial).' },
  { step: '02', title: 'Explore Matching Properties', description: 'Browse verified listings with high-resolution photos, detailed floor plans, and pricing benchmarks.' },
  { step: '03', title: 'Connect With a Dealer', description: 'Speak directly with the property owner or certified local property dealer for authentic information.' },
  { step: '04', title: 'Schedule a Visit', description: 'Book a convenient in-person or virtual property tour to inspect the neighborhood and amenities.' },
  { step: '05', title: 'Complete the Transaction', description: 'Receive assistance through legal verification, loan approval, and final registry paperwork.' }
];

// 10 Detailed Real Estate FAQs
export const REAL_ESTATE_FAQS = [
  {
    question: 'How do I search and find a property on Square Yard Dealers?',
    answer: 'You can use our powerful property search bar on the homepage. Filter by Buy or Rent, choose your preferred city and locality, select your budget range and required BHK configuration. Click "Search Properties" to view curated, matching listings with verified details.'
  },
  {
    question: 'Can I search properties by specific locality or landmark?',
    answer: 'Yes! Our discovery engine supports locality-based searches across all major cities (e.g. Dwarka or Vasant Kunj in Delhi, Golf Course Road in Gurgaon, Powai in Mumbai, Whitefield in Bangalore). You can also discover trending neighborhood corridors in our Locality section.'
  },
  {
    question: 'Can I list my own property for sale or rent?',
    answer: 'Absolutely. Click "List Your Property" or "Post Property" in the top navigation. Enter your property specifications, photos, expected price, and contact information. Your listing is verified and made discoverable to thousands of active buyers and tenants.'
  },
  {
    question: 'How can I sell my property quickly?',
    answer: 'To sell faster: (1) Price your property realistically using our Property Valuation tool, (2) Upload high-quality, well-lit photos of every room and balcony, (3) Keep title documents (Sale Deed, Electricity Bill, Society NOC) handy, and (4) Connect with our local partner property dealers.'
  },
  {
    question: 'Can I rent out my property to verified tenants?',
    answer: 'Yes. You can list your apartment, builder floor, or commercial shop under the Rent category. You can specify tenant preferences (family/bachelor), lease tenure, security deposit, and furnishing status.'
  },
  {
    question: 'How do I schedule a site visit for a property or project?',
    answer: 'On any property or project details page, click "Schedule Site Visit". Select your preferred date and time slot. The listing dealer or representative will confirm the appointment and provide exact navigation directions.'
  },
  {
    question: 'What property types are available on Square Yard Dealers?',
    answer: 'We cover Residential (Apartments, Builder Floors, Luxury Villas, Independent Houses, Penthouses, Plots) and Commercial (Office Spaces, Retail High-Street Shops, Showrooms, Warehouses, Co-working Spaces).'
  },
  {
    question: 'Can I find commercial properties and retail shops for investment?',
    answer: 'Yes! We have a dedicated Commercial property filter covering bare-shell and fully furnished office spaces, road-facing retail shops, and high-street investment units with attractive expected rental yields.'
  },
  {
    question: 'How does the online Property Valuation tool work?',
    answer: 'Our valuation tool estimates property value based on locality historical transactions, property type, age of construction, floor, and current prevailing asking rates. Please note that online valuation is an indicative estimate and does not replace a government-approved valuer\'s appraisal.'
  },
  {
    question: 'Can I get home loan assistance through Square Yard Dealers?',
    answer: 'Yes. We provide an interactive EMI calculator to simulate monthly installments and connect interested applicants with institutional banking partners to explore home loan eligibility, interest rates, and loan sanction.'
  }
];

// Original Real Estate Insights & Blog Articles
export const REAL_ESTATE_BLOG_ARTICLES: RealEstateArticle[] = [
  {
    id: 'blog-1',
    slug: 'things-to-check-before-buying-a-property',
    title: 'Things to Check Before Buying a Property in India: Complete Due Diligence Checklist',
    category: 'Buying Guide',
    readTime: '6 min read',
    publishedDate: 'Sep 24, 2026',
    author: 'Editorial Advisory Team',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    summary: 'Essential title deed verifications, encumbrance certificates, RERA approvals, and hidden charges to inspect before paying a booking token.',
    content: [
      'Purchasing real estate is often the most significant financial decision of a lifetime. A smooth transaction requires meticulous legal, structural, and financial due diligence.',
      'Always verify that the developer holds a valid RERA registration number and clear land ownership title. Inspect the Mother Deed for a chain of title extending back at least 30 years to verify ownership authenticity.',
      'Check the Encumbrance Certificate (EC) to ensure there are no existing mortgages or legal claims on the property. Additionally, inspect the approved building plan from the local municipal corporation to prevent unauthorized construction risks.'
    ],
    keyTakeaways: [
      'Verify 30-year chain of title deeds and Encumbrance Certificate',
      'Confirm RERA registration and sanctioned municipal layout plans',
      'Budget for stamp duty, registration, and recurring society maintenance fees'
    ]
  },
  {
    id: 'blog-2',
    slug: 'how-to-compare-two-residential-projects',
    title: 'How to Compare Two Residential Projects: Location, Density, and Carpet Area Explained',
    category: 'Investment',
    readTime: '5 min read',
    publishedDate: 'Sep 18, 2026',
    author: 'Market Research Desk',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    summary: 'A structured framework to evaluate competing real estate projects on carpet area efficiency, floor-to-ceiling height, and developer delivery track record.',
    content: [
      'Homebuyers frequently find themselves torn between two appealing projects in the same neighborhood. Comparing them purely on the brochure rate per square foot can lead to misleading conclusions.',
      'Focus on the Carpet Area ratio—the actual usable net floor space—rather than the super built-up area. Compare project density: fewer units per acre means less crowding at elevators, clubhouses, and visitor parking.',
      'Evaluate micro-connectivity: a project 500 meters closer to a metro station or expressway interchange can save 200 hours of commuting time each year.'
    ],
    keyTakeaways: [
      'Always calculate price on RERA carpet area rather than super area',
      'Assess project density (units per acre) and open green space ratio',
      'Inspect actual proximity to metro stations, schools, and hospitals'
    ]
  },
  {
    id: 'blog-3',
    slug: 'buying-vs-renting-what-should-you-consider',
    title: 'Buying vs Renting: How to Make the Right Financial & Lifestyle Choice',
    category: 'Rental Guide',
    readTime: '7 min read',
    publishedDate: 'Sep 10, 2026',
    author: 'Financial Advisory Desk',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80',
    summary: 'Evaluating rental yields versus home loan EMIs, capital appreciation potential, and lifestyle flexibility in India\'s prime metropolitan cities.',
    content: [
      'The age-old debate between renting and buying depends on your career mobility, financial liquidity, and family timeline.',
      'If your monthly EMI is within 30-40% of your household disposable income and you intend to live in the city for over 7 years, buying builds substantial equity and provides psychological stability.',
      'Conversely, renting offers agility for young professionals whose career trajectory may require relocation across cities, allowing them to invest their savings in diversified liquid instruments.'
    ],
    keyTakeaways: [
      'Compare rental yield (typically 3-4% residential) against loan interest rates',
      'Factor in non-recoverable costs: property tax, maintenance, and insurance',
      'Buy when you plan to settle for 7+ years in a stable micro-market'
    ]
  },
  {
    id: 'blog-4',
    slug: 'important-documents-to-check-before-property-purchase',
    title: 'Important Legal Documents to Check Before Closing a Property Purchase in India',
    category: 'Legal & Documentation',
    readTime: '6 min read',
    publishedDate: 'Aug 28, 2026',
    author: 'Legal Cell',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    summary: 'A detailed walkthrough of Title Deeds, Commencement Certificates, Occupancy Certificates (OC), and Khata certificates.',
    content: [
      'Never execute a sale deed without verifying the Occupancy Certificate (OC) issued by the local civic authority. An OC confirms the building was constructed in compliance with building codes and is legally fit for habitation.',
      'For resale properties, verify the latest property tax payment receipts and obtain an official No Objection Certificate (NOC) from the Resident Welfare Association (RWA) or housing cooperative society.',
      'Ensure the seller has original title documents or an authorized certified bank closure certificate if a previous mortgage existed.'
    ],
    keyTakeaways: [
      'Never take possession without an official Occupancy Certificate (OC)',
      'Ensure Khata or Municipal mutation is transferred in the owner\'s name',
      'Obtain an RWA No Dues certificate before paying the final balance'
    ]
  }
];

// Mandatory Legal Disclaimer
export const MANDATORY_LEGAL_DISCLAIMER =
  'Square Yard Dealers is an independent real-estate and property assistance platform. Property availability, pricing, specifications, possession timelines, photographs, and other information may change and should be independently verified before making any transaction. Final transactions are subject to applicable agreements, documentation, legal due diligence, and applicable state RERA laws. Square Yard Dealers does not guarantee property appreciation, rental returns, or transaction closure.';

// Exported BusinessWebsite model for platform catalog
export const SQUARE_YARD_DEALERS_WEBSITE: BusinessWebsite = {
  id: 'square-yard-dealers',
  slug: 'square-yard-dealers',
  businessName: 'Square Yard Dealers',
  category: 'realestate' as any,
  templateId: 'template-realestate-marketplace',
  tagline: 'Property Discovery & Real-Estate Advisory Made Simpler',
  description: 'Premier Indian real-estate marketplace and advisory platform helping customers buy, rent, sell, and discover verified residential, commercial, and project properties across major cities.',
  ownerName: 'Square Yard Dealers Advisory',
  phone: PHONE_NUMBER,
  whatsapp: WHATSAPP_NUMBER,
  email: EMAIL_ADDRESS,
  address: OFFICE_ADDRESS,
  city: 'Delhi NCR',
  mapsUrl: 'https://maps.google.com',
  openingHours: 'Mon - Sun: 9:00 AM - 8:00 PM',
  secondaryColor: '#0f172a',
  logoUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=200&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#1e40af',
  fontFamily: 'Inter, sans-serif',
  bookingType: 'consultation_quote',
  bookingCtaLabel: 'List Your Property',
  specialBadge: 'Website #50 · Real Estate Marketplace Active',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 49999,
  paymentStatus: 'paid',
  sections: [
    { id: 'hero', title: 'Find Your Perfect Property', isEnabled: true, order: 1 },
    { id: 'search', title: 'Property Search & Discovery', isEnabled: true, order: 2 },
    { id: 'featured', title: 'Featured Real Estate Projects', isEnabled: true, order: 3 },
    { id: 'cities', title: 'Explore Real Estate in Popular Cities', isEnabled: true, order: 4 },
    { id: 'services', title: 'Our Real Estate Services', isEnabled: true, order: 5 },
    { id: 'tools', title: 'Real Estate Tools & Calculators', isEnabled: true, order: 6 },
    { id: 'agents', title: 'Connect With Property Dealers', isEnabled: true, order: 7 },
    { id: 'faq', title: 'Frequently Asked Questions', isEnabled: true, order: 8 }
  ],
  offers: [
    {
      id: 'syd-offer-1',
      title: 'Free Property Listing for Owners',
      description: 'Post your residential or commercial property for rent or sale with zero upfront platform charges.',
      discountPercent: 100,
      couponCode: 'LISTFREE',
      isActive: true
    }
  ],
  gallery: [],
  items: []
};
