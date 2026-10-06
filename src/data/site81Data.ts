import { BusinessWebsite } from '../types';
import { site81Config } from '../config/site81Config';

export interface PropertyListing {
  id: string;
  slug: string;
  title: string;
  priceUsd: number;
  listingType: 'sale' | 'rent' | 'new_development';
  propertyType: 'Villa' | 'Penthouse' | 'Château' | 'Private Island' | 'Waterfront Estate' | 'Alpine Chalet' | 'Modernist Mansion';
  country: string;
  countryCode: string;
  city: string;
  region: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  interiorSizeSqFt: number;
  interiorSizeSqM: number;
  lotSizeAcres?: number;
  yearBuilt: number;
  isFeatured: boolean;
  hasVideo: boolean;
  isDirectFromDeveloper: boolean;
  images: string[];
  videoUrl?: string;
  description: string;
  features: string[];
  broker: {
    name: string;
    agency: string;
    photoUrl: string;
    phone: string;
    email: string;
    isVerified: boolean;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface GlobalDestination {
  id: string;
  name: string;
  type: 'country' | 'city' | 'region';
  country: string;
  listingCount: number;
  imageUrl: string;
  description: string;
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Market Trends' | 'Architecture & Design' | 'Super-Prime Living' | 'Destination Spotlight';
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  imageUrl: string;
  excerpt: string;
  content: string[];
}

export interface LuxuryCategoryBlock {
  id: string;
  name: string;
  tagline: string;
  listingCount: string;
  imageUrl: string;
  slug: string;
}

// 1. PROPERTY LISTINGS DATA (18 Ultra-Prime International Estates)
export const LUXURY_PROPERTIES: PropertyListing[] = [
  {
    id: 'prop-1',
    slug: 'the-bel-air-promontory-estate',
    title: 'The Bel-Air Promontory Estate',
    priceUsd: 68000000,
    listingType: 'sale',
    propertyType: 'Modernist Mansion',
    country: 'United States',
    countryCode: 'US',
    city: 'Los Angeles',
    region: 'California',
    address: '10771 Bellagio Road, Bel-Air',
    bedrooms: 8,
    bathrooms: 12,
    interiorSizeSqFt: 24500,
    interiorSizeSqM: 2276,
    lotSizeAcres: 2.4,
    yearBuilt: 2023,
    isFeatured: true,
    hasVideo: true,
    isDirectFromDeveloper: false,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80'
    ],
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    description: 'Commanding unmatched 300-degree vistas stretching from Downtown Los Angeles to the Pacific Ocean, this architectural tour-de-force redefines California modernist living. Hand-poured board-formed concrete, cantilevered bronze glass pavilions, dual infinity-edge swimming pools, a 2,000-bottle subterranean wine cellar, and a commercial-grade screening lounge curate an extraordinary lifestyle.',
    features: [
      'Dual Heated Infinity Pools',
      'Subterranean 2,000-Bottle Wine Vault',
      'Dolby Atmos Screening Theater (18 Seats)',
      'Wellness Spa & Steam Suite',
      'Automobile Gallery for 10 Vehicles',
      'Guarded Private Motor Court',
      'Smart Creston Home Automation',
      'Commercial Catering Kitchen'
    ],
    broker: {
      name: 'Julian Vance-Moreau',
      agency: 'Valtierra Private Client Group Beverly Hills',
      photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      phone: '+1 (310) 925-8811',
      email: 'julian.vm@valtierra.luxury',
      isVerified: true
    },
    coordinates: { lat: 34.0837, lng: -118.4467 }
  },
  {
    id: 'prop-2',
    slug: 'villa-palazzo-di-luna-saint-tropez',
    title: 'Villa Palazzo di Luna',
    priceUsd: 49500000,
    listingType: 'sale',
    propertyType: 'Waterfront Estate',
    country: 'France',
    countryCode: 'FR',
    city: 'Saint-Tropez',
    region: 'French Riviera',
    address: 'Les Parcs de Saint-Tropez, Côte d’Azur',
    bedrooms: 7,
    bathrooms: 9,
    interiorSizeSqFt: 11800,
    interiorSizeSqM: 1096,
    lotSizeAcres: 1.8,
    yearBuilt: 2022,
    isFeatured: true,
    hasVideo: true,
    isDirectFromDeveloper: false,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80'
    ],
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    description: 'Set within the ultra-exclusive gated domain of Les Parcs de Saint-Tropez, Villa Palazzo di Luna provides direct private maritime access, a deep-water yacht mooring jetty, and lush Mediterranean gardens dotted with centuries-old stone pines. Custom limestone finishes, sea-facing shaded pergolas, and an Olympic-length heated saltwater pool make this a premier French Riviera sanctuary.',
    features: [
      'Private Yacht Jetty & Mooring',
      'Direct Private Beachfront Access',
      'Olympic Heated Saltwater Pool',
      'Independent Staff Lodge & Security Quarters',
      'Al-Fresco Summer Kitchen & Wood Oven',
      'Helipad Clearance Zone',
      'Security Patrol 24/7'
    ],
    broker: {
      name: 'Hélène de Montmirail',
      agency: 'Valtierra Côte d’Azur & Monaco',
      photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      phone: '+33 4 94 97 12 34',
      email: 'helene.montmirail@valtierra.luxury',
      isVerified: true
    },
    coordinates: { lat: 43.2727, lng: 6.6406 }
  },
  {
    id: 'prop-3',
    slug: 'the-sky-duplex-penthouse-one-hyde-park',
    title: 'The Sky Duplex Penthouse',
    priceUsd: 82000000,
    listingType: 'sale',
    propertyType: 'Penthouse',
    country: 'United Kingdom',
    countryCode: 'GB',
    city: 'London',
    region: 'Knightsbridge',
    address: 'One Hyde Park, 100 Knightsbridge',
    bedrooms: 5,
    bathrooms: 7,
    interiorSizeSqFt: 9200,
    interiorSizeSqM: 855,
    yearBuilt: 2020,
    isFeatured: true,
    hasVideo: false,
    isDirectFromDeveloper: false,
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80'
    ],
    description: 'Occupying the crown of London’s most celebrated residential address, this duplex penthouse gazes uninterrupted over the verdant canopy of Hyde Park and the Knightsbridge skyline. Serviced directly by the Mandarin Oriental Hotel with 24-hour room service, private sommelier access, bulletproof glass, and an iris-recognition private elevator.',
    features: [
      'Unobstructed Hyde Park Panoramas',
      'Serviced by Mandarin Oriental Hotel',
      'Private High-Speed Direct Elevator',
      'Ballistic Grade Security Glass',
      'Private 21m Swimming Pool & Squash Court',
      'Three Underground Valet Parking Bays',
      'Concierge & Butler Service 24/7'
    ],
    broker: {
      name: 'Lord Edward Sterling-Cole',
      agency: 'Valtierra Prime Central London',
      photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      phone: '+44 20 7946 0912',
      email: 'edward.sterling@valtierra.luxury',
      isVerified: true
    },
    coordinates: { lat: 51.502, lng: -0.1609 }
  },
  {
    id: 'prop-4',
    slug: 'the-royal-palm-mansion-dubai',
    title: 'The Royal Palm Beachfront Villa',
    priceUsd: 55000000,
    listingType: 'sale',
    propertyType: 'Waterfront Estate',
    country: 'United Arab Emirates',
    countryCode: 'AE',
    city: 'Dubai',
    region: 'Palm Jumeirah',
    address: 'Billionaires’ Row, Frond G, Palm Jumeirah',
    bedrooms: 6,
    bathrooms: 8,
    interiorSizeSqFt: 16500,
    interiorSizeSqM: 1533,
    lotSizeAcres: 0.65,
    yearBuilt: 2024,
    isFeatured: true,
    hasVideo: true,
    isDirectFromDeveloper: true,
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80'
    ],
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: 'A masterpiece of ultra-prime Arabian Gulf architecture on Palm Jumeirah’s prestigious Frond G. Offering 120 feet of private white sand beach frontage facing the iconic Atlantis The Royal skyline. Designed with custom Italian bookmatched statuario marble, Minotti furnishings, a rooftop infinity lounge, and underground supercar vault.',
    features: [
      '120 Ft Private White-Sand Beach Frontage',
      'Rooftop Sunset Lounge with Jacuzzi',
      'Underground Hydraulic Supercar Gallery',
      'Private Spa with Turkish Hammam & Cryo',
      'Fully Furnished by Giorgetti & Minotti',
      'Private Yacht Mooring Buoy',
      'Bespoke Bang & Olufsen Integrated Audio'
    ],
    broker: {
      name: 'Tariq Al-Mansoor',
      agency: 'Valtierra Middle East Headquarters DIFC',
      photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      phone: '+971 4 312 9000',
      email: 'tariq.almansoor@valtierra.luxury',
      isVerified: true
    },
    coordinates: { lat: 25.1189, lng: 55.139 }
  },
  {
    id: 'prop-5',
    slug: 'chateau-de-la-riviere-bordeaux',
    title: 'Château de la Haute Rivière & Vineyard',
    priceUsd: 38000000,
    listingType: 'sale',
    propertyType: 'Château',
    country: 'France',
    countryCode: 'FR',
    city: 'Bordeaux',
    region: 'Aquitaine',
    address: 'Grand Cru Appellation, Saint-Émilion',
    bedrooms: 12,
    bathrooms: 14,
    interiorSizeSqFt: 18000,
    interiorSizeSqM: 1672,
    lotSizeAcres: 110,
    yearBuilt: 1785,
    isFeatured: false,
    hasVideo: false,
    isDirectFromDeveloper: false,
    images: [
      'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80'
    ],
    description: 'An illustrious 18th-century classified heritage estate with 85 acres of producing Grand Cru vineyards in Saint-Émilion. Features classical French formal parterre gardens, vaulted limestone cellars storing over 100,000 bottles, a fully modern gravity-fed winemaking facility, and an equestrian barn.',
    features: [
      '85 Acres of Commercial Grand Cru Vineyard',
      'Gravity-Fed Modern Winemaking Facility',
      'Limestone Barrel Cellars (100k Bottles)',
      'Historic 18th-Century Parterre Gardens',
      'Heated Outdoor Swimming Pool & Orangery',
      'Private Helipad & Hangar',
      'Restored Guest Cottages & Stables'
    ],
    broker: {
      name: 'Claire de Bourbon-Parme',
      agency: 'Valtierra Vineyard & Heritage Estates Paris',
      photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
      phone: '+33 5 57 24 00 00',
      email: 'claire.bourbon@valtierra.luxury',
      isVerified: true
    },
    coordinates: { lat: 44.8967, lng: -0.1558 }
  },
  {
    id: 'prop-6',
    slug: 'villa-bellagio-lake-como',
    title: 'Villa Bellagio Waterfront Palace',
    priceUsd: 42000000,
    listingType: 'sale',
    propertyType: 'Waterfront Estate',
    country: 'Italy',
    countryCode: 'IT',
    city: 'Lake Como',
    region: 'Lombardy',
    address: 'Via Statale 14, Tremezzo',
    bedrooms: 9,
    bathrooms: 11,
    interiorSizeSqFt: 14200,
    interiorSizeSqM: 1319,
    lotSizeAcres: 3.2,
    yearBuilt: 1892,
    isFeatured: true,
    hasVideo: true,
    isDirectFromDeveloper: false,
    images: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80'
    ],
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    description: 'Refined Belle Époque waterfront villa situated on the western shore of Lake Como with direct boat access, private Riva boat boathouse, and botanical gardens designed in 1895. Frescoed ceilings by renowned Italian masters, Venetian terrazzo flooring, and private swimming pool perched over the lake.',
    features: [
      'Private Riva Boat House with Electric Hoist',
      'Direct Lake Access & Deep Water Dock',
      'Heritage Botanical Gardens with Rare Cypresses',
      'Original 19th-Century Restored Frescoes',
      'Infinity Pool Floating Over Lake Surface',
      'Guest Villa & Staff Accommodation',
      'Private Wine Cellar & Tasting Salon'
    ],
    broker: {
      name: 'Matteo Visconti di Modrone',
      agency: 'Valtierra Italy Prestige Milan',
      photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
      phone: '+39 02 8909 3321',
      email: 'matteo.visconti@valtierra.luxury',
      isVerified: true
    },
    coordinates: { lat: 45.9865, lng: 9.224 }
  },
  {
    id: 'prop-7',
    slug: 'chalet-zermatt-peak-switzerland',
    title: 'Chalet Matterhorn Majesty',
    priceUsd: 31000000,
    listingType: 'sale',
    propertyType: 'Alpine Chalet',
    country: 'Switzerland',
    countryCode: 'CH',
    city: 'Zermatt',
    region: 'Valais',
    address: 'Triftweg 28, 3920 Zermatt',
    bedrooms: 6,
    bathrooms: 7,
    interiorSizeSqFt: 8400,
    interiorSizeSqM: 780,
    yearBuilt: 2021,
    isFeatured: false,
    hasVideo: true,
    isDirectFromDeveloper: false,
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80'
    ],
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    description: 'An architectural jewel set into the granite cliffside of Zermatt, framing dramatic head-on views of the iconic Matterhorn. Features a private funicular lift, indoor/outdoor heated hydrotherapy pool, private Finnish pine sauna, and ski-in/ski-out access via private elevator.',
    features: [
      'Direct Unobstructed Matterhorn Views',
      'Ski-In / Ski-Out with Private Gear Locker',
      'Indoor/Outdoor Heated Jet Pool',
      'Private Mountain Funicular Access',
      'Full Spa Suite, Steam & Massage Room',
      'Double-Height Living Salon with Granite Hearth',
      'Geothermal Eco-Certified Heating'
    ],
    broker: {
      name: 'Beatrix von Graffenried',
      agency: 'Valtierra Alpine Estates Geneva',
      photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      phone: '+41 22 819 9000',
      email: 'beatrix.graffenried@valtierra.luxury',
      isVerified: true
    },
    coordinates: { lat: 45.9765, lng: 7.7491 }
  },
  {
    id: 'prop-8',
    slug: 'villa-son-vida-mallorca',
    title: 'Villa Sol de Mallorca',
    priceUsd: 26500000,
    listingType: 'sale',
    propertyType: 'Villa',
    country: 'Spain',
    countryCode: 'ES',
    city: 'Mallorca',
    region: 'Balearic Islands',
    address: 'Son Vida Golf, Palma de Mallorca',
    bedrooms: 6,
    bathrooms: 8,
    interiorSizeSqFt: 10500,
    interiorSizeSqM: 975,
    lotSizeAcres: 0.9,
    yearBuilt: 2023,
    isFeatured: false,
    hasVideo: false,
    isDirectFromDeveloper: true,
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80'
    ],
    description: 'Contemporary organic villa overlooking the Bay of Palma and the Son Vida fairways. Features travertine marble facades, floating wooden staircases, an expansive cantilevered terrace with a 25-meter infinity pool, and integrated subterranean spa.',
    features: [
      'Sweeping Bay of Palma Views',
      'Son Vida Championship Golf Access',
      '25-Meter Heated Infinity Lap Pool',
      'Underground Spa with Cold Plunge & Sauna',
      'Rooftop Stargazing Deck & Firepit',
      'Home Cinema & Entertainment Lounge',
      'Automated Solar Shading & Climate'
    ],
    broker: {
      name: 'Carlos Mendoza y Soto',
      agency: 'Valtierra Balearics Palma',
      photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      phone: '+34 971 700 890',
      email: 'carlos.mendoza@valtierra.luxury',
      isVerified: true
    },
    coordinates: { lat: 39.5973, lng: 2.6052 }
  },
  {
    id: 'prop-9',
    slug: 'isla-del-mar-private-island-bahamas',
    title: 'Isla Serena Private Island',
    priceUsd: 75000000,
    listingType: 'sale',
    propertyType: 'Private Island',
    country: 'Bahamas',
    countryCode: 'BS',
    city: 'Exumas',
    region: 'Caribbean',
    address: 'Exuma Cays, Bahamas',
    bedrooms: 10,
    bathrooms: 12,
    interiorSizeSqFt: 15000,
    interiorSizeSqM: 1393,
    lotSizeAcres: 48,
    yearBuilt: 2021,
    isFeatured: true,
    hasVideo: true,
    isDirectFromDeveloper: false,
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80'
    ],
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: 'A 48-acre freehold private tropical sanctuary in the turquoise heart of the Exumas. Complete with a private FAA-certified 3,200 ft runway, deep-water mega-yacht marina accommodating vessels up to 200 ft, six pristine white-sand beaches, and self-sufficient solar microgrid with desalinization plant.',
    features: [
      'Private 3,200 Ft Paved Airstrip',
      'Deep-Water Mega-Yacht Marina (200 Ft Capacity)',
      'Six Virgin White Sand Beaches',
      '100% Off-Grid Solar & Desalination Infrastructure',
      'Master Pavilion + 5 Independent Guest Cottages',
      'Fleet of Jet Skis, Catamarans & Tenders Included',
      'Full Island Staff Quarters for 16 Crew'
    ],
    broker: {
      name: 'Julian Vance-Moreau',
      agency: 'Valtierra Private Client Group Miami',
      photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      phone: '+1 (305) 555-8290',
      email: 'islands@valtierra.luxury',
      isVerified: true
    },
    coordinates: { lat: 24.5211, lng: -76.6212 }
  },
  {
    id: 'prop-10',
    slug: 'the-tribeca-glass-tower-penthouse',
    title: 'The Tribeca Sky Sanctuary',
    priceUsd: 45000000,
    listingType: 'sale',
    propertyType: 'Penthouse',
    country: 'United States',
    countryCode: 'US',
    city: 'New York',
    region: 'New York',
    address: '56 Leonard Street, Tribeca',
    bedrooms: 5,
    bathrooms: 6,
    interiorSizeSqFt: 7800,
    interiorSizeSqM: 725,
    yearBuilt: 2019,
    isFeatured: false,
    hasVideo: false,
    isDirectFromDeveloper: false,
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80'
    ],
    description: 'Designed by Pritzker Prize-winning architects Herzog & de Meuron, this full-floor penthouse features 14-foot ceiling heights, four private cantilevered terraces framing 360-degree views of Manhattan, private elevator vestibule, and customized sculptural glass stairwell.',
    features: [
      'Four Cantilevered Outdoor Terraces (1,800 Sq Ft)',
      '14-Foot Ceiling Heights Throughout',
      'Private Keyed Elevator Access',
      '75-Ft Lap Pool with Sundeck & Hot Tub',
      'Private Screening Room & Dining Salon',
      'Doorman, Concierge & On-Site Parking',
      'Wood-Burning Sculptural Fireplaces'
    ],
    broker: {
      name: 'Victoria Vance',
      agency: 'Valtierra Manhattan Flagship',
      photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      phone: '+1 (212) 800-8800',
      email: 'victoria.vance@valtierra.luxury',
      isVerified: true
    },
    coordinates: { lat: 40.7176, lng: -74.0064 }
  },
  {
    id: 'prop-11',
    slug: 'villa-aegean-horizon-mykonos',
    title: 'Villa Aegean Horizon',
    priceUsd: 19800000,
    listingType: 'sale',
    propertyType: 'Villa',
    country: 'Greece',
    countryCode: 'GR',
    city: 'Mykonos',
    region: 'Cyclades',
    address: 'Aleomandra Waterfront, Mykonos',
    bedrooms: 8,
    bathrooms: 10,
    interiorSizeSqFt: 9600,
    interiorSizeSqM: 891,
    lotSizeAcres: 1.2,
    yearBuilt: 2023,
    isFeatured: false,
    hasVideo: true,
    isDirectFromDeveloper: false,
    images: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80'
    ],
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    description: 'Chic whitewashed Cycladic cliffside estate looking directly towards Delos Island sunset. Features sea-level sunset cocktail bar, two heated infinity swimming pools, wind-protected dining verandas, and private path to secluded rocky cove.',
    features: [
      'Direct Sunset Orientation Facing Delos',
      'Two Heated Infinity Swimming Pools',
      'Private Path to Secluded Sea Access',
      'Outdoor Cinema with Pergola Seating',
      'Underground Wellness Spa & Steam Suite',
      'Private Helicopter Touchdown Zone',
      'Separate Staff & Security Quarters'
    ],
    broker: {
      name: 'Nikos Karagiannis',
      agency: 'Valtierra Greece & Aegean Athens',
      photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      phone: '+30 210 361 4500',
      email: 'nikos.karagiannis@valtierra.luxury',
      isVerified: true
    },
    coordinates: { lat: 37.4255, lng: 25.3188 }
  },
  {
    id: 'prop-12',
    slug: 'shibuya-sky-villa-tokyo',
    title: 'The Aoyama Residence',
    priceUsd: 28500000,
    listingType: 'sale',
    propertyType: 'Modernist Mansion',
    country: 'Japan',
    countryCode: 'JP',
    city: 'Tokyo',
    region: 'Minato-ku',
    address: 'Minami-Aoyama 5-Chome, Minato',
    bedrooms: 4,
    bathrooms: 5,
    interiorSizeSqFt: 6200,
    interiorSizeSqM: 576,
    yearBuilt: 2024,
    isFeatured: false,
    hasVideo: false,
    isDirectFromDeveloper: true,
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80'
    ],
    description: 'An ultra-rare detached residential freehold in prime Minami-Aoyama. Handcrafted from Hinoki cedar, dark slate, and floor-to-ceiling glass. Features a private Japanese dry stone karesansui garden courtyard, subterranean tea ceremony pavilion, and automated underground car elevator.',
    features: [
      'Freehold Land in Premier Minami-Aoyama',
      'Interior Karesansui Zen Courtyard',
      'Subterranean Chashitsu (Tea Ceremony Room)',
      'Automated Sub-surface Two-Car Turntable Lift',
      'Handcrafted Hinoki Cedar Onsen Soaking Tub',
      'Seismic Base-Isolation Engineering',
      'Miele MasterCool Gourmet Kitchen'
    ],
    broker: {
      name: 'Kenji Takahashi',
      agency: 'Valtierra Asia Pacific Tokyo',
      photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      phone: '+81 3 5555 0192',
      email: 'kenji.takahashi@valtierra.luxury',
      isVerified: true
    },
    coordinates: { lat: 35.6631, lng: 139.7154 }
  }
];

// 2. TOP GLOBAL DESTINATIONS
export const TOP_DESTINATIONS: GlobalDestination[] = [
  {
    id: 'dest-usa',
    name: 'United States',
    type: 'country',
    country: 'United States',
    listingCount: 4820,
    imageUrl: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=800&q=80',
    description: 'Beverly Hills estates, Manhattan trophy penthouses, Miami waterfront sanctuaries, and Aspen alpine chalets.'
  },
  {
    id: 'dest-france',
    name: 'France',
    type: 'country',
    country: 'France',
    listingCount: 3150,
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    description: 'French Riviera waterfront villas, historic Bordeaux châteaux, and grand Parisian Haussmannian apartments.'
  },
  {
    id: 'dest-italy',
    name: 'Italy',
    type: 'country',
    country: 'Italy',
    listingCount: 2940,
    imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
    description: 'Lake Como Belle Époque villas, Tuscan country estates, Amalfi cliffside retreats, and Milanese penthouses.'
  },
  {
    id: 'dest-spain',
    name: 'Spain',
    type: 'country',
    country: 'Spain',
    listingCount: 2680,
    imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80',
    description: 'Mallorcan fincas, Marbella Golden Mile mansions, Ibiza clifftop villas, and Madrid luxury residences.'
  },
  {
    id: 'dest-uk',
    name: 'United Kingdom',
    type: 'country',
    country: 'United Kingdom',
    listingCount: 1890,
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
    description: 'Mayfair townhouses, Knightsbridge penthouses, Cotswolds historic manors, and Surrey golf estates.'
  },
  {
    id: 'dest-uae',
    name: 'United Arab Emirates',
    type: 'country',
    country: 'United Arab Emirates',
    listingCount: 1640,
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    description: 'Palm Jumeirah beachfront mansions, Emirates Hills palaces, and Downtown Dubai skyline penthouses.'
  },
  {
    id: 'dest-switzerland',
    name: 'Switzerland',
    type: 'country',
    country: 'Switzerland',
    listingCount: 1120,
    imageUrl: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    description: 'Geneva lakeside estates, Zermatt & St. Moritz ski chalets, and Zurich Goldcoast properties.'
  },
  {
    id: 'dest-greece',
    name: 'Greece',
    type: 'country',
    country: 'Greece',
    listingCount: 980,
    imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
    description: 'Mykonos sunset villas, Santorini cliffside homes, and Athens Riviera waterfront developments.'
  }
];

export const GLOBAL_DESTINATIONS = TOP_DESTINATIONS;

// 3. THE JOURNAL ARTICLES
export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'art-1',
    slug: 'the-rise-of-private-island-sanctuaries',
    title: 'The Rise of Off-Grid Private Island Sanctuaries in the Caribbean',
    subtitle: 'How billionaire buyers are investing in self-sustaining islands with private airstrips and clean microgrids',
    category: 'Super-Prime Living',
    author: 'Alistair Montgomery',
    authorRole: 'Senior Luxury Market Analyst',
    date: 'March 18, 2026',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Over the last twenty-four months, ultra-high-net-worth acquisitions have shifted toward complete autonomy: private FAA-certified airstrips, solar-hydrogen microgrids, and deep-water docks.',
    content: [
      'The modern definition of luxury has moved beyond mere gold leaf and high-thread-count sheets toward something far rarer: absolute privacy, self-sovereignty, and uncompromised environmental connection.',
      'In the Bahamian Exumas and the British Virgin Islands, transactions above $50 million are increasingly driven by owners seeking turnkey off-grid capabilities. Desalination plants producing 10,000 gallons of potable water daily, solar-plus-storage microgrids with zero diesel emissions, and satellite mesh communication arrays are now baseline expectations.',
      'The ability to touch down on a private 3,000-foot runway in a Pilatus PC-24, step directly onto a catamaran tender, and arrive at a fully staffed island residence in under ten minutes represents the ultimate convenience for the global jet-set.'
    ]
  },
  {
    id: 'art-2',
    slug: 'architectural-modernism-in-bel-air',
    title: 'Minimalist Engineering: Inside the New Architectural Wave of Bel-Air',
    subtitle: 'Cantilevered glass, floating limestone staircases, and subterranean car galleries in Southern California',
    category: 'Architecture & Design',
    author: 'Elena Ross-Chavez',
    authorRole: 'Architecture Editor',
    date: 'March 12, 2026',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Los Angeles trophy homes are eschewing faux-classical ornament in favor of radical Japanese-inspired minimalism, raw board-formed concrete, and invisible thermal glazing.',
    content: [
      'When contemporary titans of technology and venture capital seek residences in the hills of Bel-Air and Beverly Hills, they demand an environment of serene architectural discipline.',
      'Firms like SAOTA and Olson Kundig are answering this call by blending raw natural stone, sustainably harvested cedar, and motor-driven structural glass panels that disappear completely into pocket walls.',
      'The result is a lifestyle where the division between interior and exterior dissolves into ambient light, cool canyon air, and panoramic city-to-ocean vistas.'
    ]
  },
  {
    id: 'art-3',
    slug: 'lake-como-belle-epoque-renaissance',
    title: 'Belle Époque Restorations: The Enduring Allure of Lake Como',
    subtitle: 'Why 19th-century Italian lakeside palazzos remain the safest store of aesthetic capital in Europe',
    category: 'Destination Spotlight',
    author: 'Federico Baldi',
    authorRole: 'European Heritage Correspondent',
    date: 'March 04, 2026',
    readTime: '7 min read',
    imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'With strict heritage zoning that precludes new construction along the waterline, historic villas with private Riva boathouses command premiums exceeding €40,000 per square meter.',
    content: [
      'Lake Como has enchanted emperors, poets, and statesmen since Roman antiquity, but its contemporary real estate market is tighter than at any point in modern memory.',
      'Stringent conservation laws across Lombardy mandate that existing neoclassical and Belle Époque facades cannot be substantially modified. Consequently, any available waterfront estate represents an irreplaceable heirloom asset.',
      'Restorations that discreetly incorporate high-velocity fiber internet, geothermal lake-source heat exchangers, and covert security details while preserving century-old frescoes represent the pinnacle of European preservation.'
    ]
  }
];

// 4. FEATURED LUXURY CATEGORY BLOCKS
export const LUXURY_CATEGORIES: LuxuryCategoryBlock[] = [
  {
    id: 'cat-re',
    name: 'Real Estate',
    tagline: 'Villas, Penthouses, Private Islands & Historic Estates',
    listingCount: '24,500+ Listings',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    slug: 'real-estate'
  },
  {
    id: 'cat-cars',
    name: 'Supercars & Classics',
    tagline: 'Bugatti, Ferrari, Pagani, Koenigsegg & Heritage Collectibles',
    listingCount: '8,200+ Vehicles',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    slug: 'cars'
  },
  {
    id: 'cat-yachts',
    name: 'Superyachts',
    tagline: 'Lürssen, Feadship, Benetti & Heesen Motor Yachts',
    listingCount: '3,400+ Vessels',
    imageUrl: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=800&q=80',
    slug: 'yachts'
  },
  {
    id: 'cat-jets',
    name: 'Private Aviation',
    tagline: 'Gulfstream, Bombardier Global, Dassault Falcon & Helicopters',
    listingCount: '1,150+ Aircraft',
    imageUrl: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=800&q=80',
    slug: 'jets'
  }
];

// 5. WEBSITE OBJECT FOR CATALOG AND APPLET STATE
export const SITE_81_WEBSITE: BusinessWebsite = {
  id: 'site-81-luxury-real-estate',
  businessName: site81Config.BRAND_NAME,
  templateId: 'james_edition_marketplace_81',
  category: 'realestate',
  slug: '81-luxury-real-estate',
  tagline: site81Config.TAGLINE,
  description: `${site81Config.BRAND_NAME} is the world’s premier luxury real estate marketplace inspired by JamesEdition. Discover ultra-prime estates, penthouses, private islands, and luxury assets with global brokerage syndication.`,
  ownerName: 'Valtierra Private Client Directorate',
  city: 'Global / New York / Paris',
  address: site81Config.GLOBAL_HEADQUARTERS,
  phone: site81Config.PHONE,
  whatsapp: site81Config.WHATSAPP,
  email: site81Config.EMAIL,
  mapsUrl: 'https://maps.google.com/?q=767+Fifth+Avenue+New+York+NY',
  openingHours: 'Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59',
  bookingType: 'consultation_quote',
  bookingCtaLabel: 'Schedule Private Viewing',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 4999,
  paymentStatus: 'paid',
  coverUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
  logoUrl: '/images/logo.svg',
  primaryColor: site81Config.COLORS.textPrimary,
  secondaryColor: site81Config.COLORS.goldAccent,
  fontFamily: 'Newsreader, serif',
  sections: [
    { id: 'hero-discovery', title: 'Marketplace Hero & Search Discovery', isEnabled: true, order: 1 },
    { id: 'featured-properties', title: 'Curated Super-Prime Properties', isEnabled: true, order: 2 },
    { id: 'top-destinations', title: 'Top Global Countries & Cities', isEnabled: true, order: 3 },
    { id: 'categories', title: 'Luxury Asset Classes (Yachts, Jets, Cars)', isEnabled: true, order: 4 },
    { id: 'journal', title: 'The Journal Editorial Showcase', isEnabled: true, order: 5 },
    { id: 'seller-concierge', title: 'Private Client Concierge & Broker Portal', isEnabled: true, order: 6 },
    { id: 'footer', title: 'Marketplace Footer', isEnabled: true, order: 7 }
  ],
  gallery: LUXURY_PROPERTIES.map((p) => ({
    id: p.id,
    title: p.title,
    category: p.propertyType,
    imageUrl: p.images[0]
  })),
  offers: [
    {
      id: 'offer-vip-acquisition',
      title: 'Private Client Acquisition Concierge',
      description: 'Discreet off-market property acquisition representation with zero buyer search fees.',
      couponCode: 'VALTIERRAVIP',
      discountPercent: 10,
      validTill: '2026-12-31'
    }
  ],
  items: LUXURY_PROPERTIES.map((p) => ({
    id: p.id,
    name: p.title,
    description: `${p.propertyType} in ${p.city}, ${p.country}. ${p.bedrooms} Beds, ${p.bathrooms} Baths, ${p.interiorSizeSqFt.toLocaleString()} sq.ft.`,
    price: p.priceUsd,
    category: p.propertyType,
    imageUrl: p.images[0],
    isAvailable: true
  })),
  createdAt: '2026-10-05T00:00:00.000Z',
  updatedAt: '2026-10-05T00:00:00.000Z'
};

export default SITE_81_WEBSITE;
