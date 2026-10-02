import { BusinessWebsite } from '../types';

export interface WeddingVenue {
  id: string;
  name: string;
  slug: string;
  city: 'bengaluru' | 'delhi' | 'mumbai' | 'goa' | 'noida' | 'gurugram' | 'jaipur' | 'udaipur';
  cityName: string;
  type: 'Resort' | 'Palace' | 'Banquet Hall' | 'Farmhouse' | 'Lawn' | 'Hotel';
  locality: string;
  address: string;
  vegPrice: number;
  nonVegPrice: number;
  capacityMin: number;
  capacityMax: number;
  roomsCount: number;
  rating: number;
  reviewsCount: number;
  featuredImage: string;
  galleryImages: string[];
  amenities: string[];
  badge?: string;
  description: string;
  highlights: string[];
}

export interface WeddingService {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  image: string;
  startingPrice: string;
  deliverables: string[];
  features: string[];
}

export interface DecorTheme {
  id: string;
  title: string;
  category: 'mandap' | 'reception' | 'mehendi' | 'sangeet' | 'haldi' | 'entrance';
  style: string;
  image: string;
  priceRange: string;
  description: string;
  elements: string[];
}

export interface PhotographyPackage {
  id: string;
  title: string;
  tier: 'Essential' | 'Signature' | 'Royal Cinematic';
  price: string;
  days: string;
  team: string;
  deliverables: string[];
  popular?: boolean;
}

export interface WeddingIdea {
  id: string;
  title: string;
  category: 'sarees' | 'pre-wedding-shoot' | 'jewellery' | 'venue-ideas' | 'photoshoot-poses' | 'groom-dresses' | 'bridal-lehengas';
  categoryLabel: string;
  image: string;
  likesCount: number;
  tags: string[];
  description: string;
}

export interface ClientReview {
  id: string;
  coupleName: string;
  city: string;
  venueName: string;
  weddingDate: string;
  rating: number;
  reviewText: string;
  image: string;
  tags: string[];
}

export interface FAQItem {
  q: string;
  a: string;
  category: 'general' | 'venues' | 'pricing' | 'services';
}

export const RAOZ_WEDDINGS_CONTACT = {
  name: 'RAOZ WEDDINGS',
  tagline: "India's Premier Wedding Planning & Venue Discovery Platform",
  phone: '+91 98765 24000',
  supportPhone: '080-69248000',
  phoneRaw: '919876524000',
  email: 'weddings@raozweddings.com',
  supportEmail: 'support@raozweddings.com',
  corporateOffice: 'Raoz Wedding House, 100 Feet Road, Indiranagar, Bengaluru, Karnataka 560038',
  delhiOffice: 'Raoz Landmark, DLF Cyber City, Phase II, Gurugram, Delhi NCR 122002',
  callingHours: '9:00 AM - 8:30 PM (All 7 Days)',
  stats: {
    executedWeddings: '1,200+',
    verifiedVenues: '2,500+',
    supplierNetwork: '2,000+',
    googleRating: '4.9/5',
    citiesActive: '8+ Major Cities'
  }
};

export const WEDDING_CITIES = [
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    state: 'Karnataka',
    venuesCount: 320,
    tagline: 'Garden City Celebrations & Heritage Luxury Resorts',
    image: '/assets/raozweddings/venue-1.webp',
    popularLocalities: ['Kanakapura Road', 'Yelahanka', 'Sarjapur', 'Whitefield', 'Hebbal']
  },
  {
    id: 'delhi',
    name: 'Delhi NCR',
    state: 'Delhi',
    venuesCount: 450,
    tagline: 'Grand Farmhouses, Sprawling Lawns & 5-Star Ballrooms',
    image: '/assets/raozweddings/venue-2.webp',
    popularLocalities: ['Chattarpur', 'NH-8', 'MG Road', 'Kapashere', 'Civil Lines']
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    venuesCount: 290,
    tagline: 'Coastal Luxury, Iconic Sea-Facing Venues & Heritage Ballrooms',
    image: '/assets/raozweddings/venue-3.webp',
    popularLocalities: ['Juhu', 'Bandra', 'Colaba', 'Andheri East', 'Powai']
  },
  {
    id: 'goa',
    name: 'Goa',
    state: 'Goa',
    venuesCount: 180,
    tagline: 'Breathtaking Beachside Sunsets & Portuguese Heritage Estates',
    image: '/assets/raozweddings/venue-4.webp',
    popularLocalities: ['Calangute', 'Morjim', 'Cavelossim', 'Candolim', 'Bambolim']
  },
  {
    id: 'noida',
    name: 'Noida',
    state: 'Uttar Pradesh',
    venuesCount: 210,
    tagline: 'Contemporary Banquet Palaces & Express Highway Resorts',
    image: '/assets/raozweddings/venue-5.webp',
    popularLocalities: ['Sector 62', 'Expressway', 'Sector 18', 'Greater Noida West']
  },
  {
    id: 'gurugram',
    name: 'Gurugram',
    state: 'Haryana',
    venuesCount: 240,
    tagline: 'Luxury Golf Resorts, Modern Boutique Enclaves & Heritage Retreats',
    image: '/assets/raozweddings/venue-6.webp',
    popularLocalities: ['Sohna Road', 'Golf Course Extn', 'Manesar', 'Sector 29']
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    venuesCount: 260,
    tagline: 'Majestic Royal Palaces, Fort Haveli Buyouts & Regal Splendour',
    image: '/assets/raozweddings/venue-7.webp',
    popularLocalities: ['Kukas', 'Amer Road', 'Tonk Road', 'C-Scheme', 'Bani Park']
  },
  {
    id: 'udaipur',
    name: 'Udaipur',
    state: 'Rajasthan',
    venuesCount: 170,
    tagline: 'Lake City Romance, Island Palaces & Aravali Mountain Vistas',
    image: '/assets/raozweddings/venue-8.webp',
    popularLocalities: ['Lake Pichola', 'Fateh Sagar', 'Badi Lake', 'Aravali Hills']
  }
];

export const WEDDING_VENUES_DATA: WeddingVenue[] = [
  // Bengaluru
  {
    id: 'v-blr-1',
    name: 'Amita Rasa',
    slug: 'amita-rasa-bengaluru',
    city: 'bengaluru',
    cityName: 'Bengaluru',
    type: 'Resort',
    locality: 'Nandi Hills Road, Bengaluru',
    address: 'Near Nandi Foothills, Devanahalli Taluk, Bengaluru North, Karnataka',
    vegPrice: 1800,
    nonVegPrice: 2200,
    capacityMin: 200,
    capacityMax: 1500,
    roomsCount: 45,
    rating: 4.9,
    reviewsCount: 124,
    featuredImage: '/assets/raozweddings/venue-1.webp',
    galleryImages: [
      '/assets/raozweddings/venue-1.webp',
      '/assets/raozweddings/venue-9.webp',
      '/assets/raozweddings/venue-17.webp'
    ],
    amenities: ['Lush Mountain View Lawns', 'Glass Pavilion', 'Bridal Dressing Villas', 'Valet Parking', 'Swimming Pool', 'In-house Decor Allowed'],
    badge: 'Trending Heritage Pick',
    description: 'Surrounded by the serene Nandi Hills, Amita Rasa features stone architecture, sweeping green amphitheaters, and modern luxury suites crafted specifically for dream destination weddings.',
    highlights: ['Majestic mountain backdrop for sunset varmala', 'Bespoke open-to-sky Kalyana Mantapa', 'Spacious 45 suite rooms for staying guests']
  },
  {
    id: 'v-blr-2',
    name: 'The Tamarind Tree',
    slug: 'the-tamarind-tree-bengaluru',
    city: 'bengaluru',
    cityName: 'Bengaluru',
    type: 'Resort',
    locality: 'Kanakapura Road, Bengaluru',
    address: '88, Avalahalli, Kanakapura Road, Bengaluru, Karnataka 560062',
    vegPrice: 2200,
    nonVegPrice: 2500,
    capacityMin: 150,
    capacityMax: 1000,
    roomsCount: 30,
    rating: 4.8,
    reviewsCount: 186,
    featuredImage: '/assets/raozweddings/venue-2.webp',
    galleryImages: [
      '/assets/raozweddings/venue-2.webp',
      '/assets/raozweddings/venue-10.webp',
      '/assets/raozweddings/venue-18.webp'
    ],
    amenities: ['Natural Pond Mandap', 'Antique Courtyards', 'Heritage Pavilions', 'AC Banquet Hall', 'Bridal Suite', 'Parking for 300 Cars'],
    badge: 'Popular Antique Oasis',
    description: 'An enchanting heirloom property filled with century-old trees, heritage doorways, courtyards, and a lotus pond that creates an unforgettable fairytale backdrop.',
    highlights: ['Iconic natural pond floating mandap', 'Handcrafted traditional wood-carved pavilions', 'Exclusive single-wedding buyout policy']
  },
  {
    id: 'v-blr-3',
    name: 'Temple Tree Leisure',
    slug: 'temple-tree-leisure-bengaluru',
    city: 'bengaluru',
    cityName: 'Bengaluru',
    type: 'Lawn',
    locality: 'Bellandur, Bengaluru',
    address: 'Behind Cessna Business Park, Bellandur, Bengaluru, Karnataka 560103',
    vegPrice: 1500,
    nonVegPrice: 1900,
    capacityMin: 250,
    capacityMax: 1200,
    roomsCount: 18,
    rating: 4.7,
    reviewsCount: 92,
    featuredImage: '/assets/raozweddings/venue-3.webp',
    galleryImages: [
      '/assets/raozweddings/venue-3.webp',
      '/assets/raozweddings/venue-11.webp'
    ],
    amenities: ['Eco-Luxury Open Lawns', 'Thatched Roof Pavilions', 'Bridal Salons', 'Ample Parking', 'Sound System Included'],
    badge: 'Eco-Luxury Choice',
    description: 'Eco-friendly thatched-roof architecture combined with lush sprawling lawns right in the heart of East Bengaluru, perfect for green, breezy celebrations.',
    highlights: ['Natural ventilation open structures', 'Central city convenience with resort feel', 'Multi-level banquet lawns for mehendi and sangeet']
  },
  {
    id: 'v-blr-4',
    name: 'The Woodrose Club',
    slug: 'the-woodrose-club-bengaluru',
    city: 'bengaluru',
    cityName: 'Bengaluru',
    type: 'Hotel',
    locality: 'JP Nagar 7th Phase, Bengaluru',
    address: 'Brigade Millennium Campus, JP Nagar 7th Phase, Bengaluru 560078',
    vegPrice: 1200,
    nonVegPrice: 1500,
    capacityMin: 100,
    capacityMax: 600,
    roomsCount: 25,
    rating: 4.6,
    reviewsCount: 74,
    featuredImage: '/assets/raozweddings/venue-4.webp',
    galleryImages: ['/assets/raozweddings/venue-4.webp'],
    amenities: ['AC Banquet Hall', 'Poolside Deck', 'Executive Guest Rooms', 'In-house Catering', 'Valet Parking'],
    badge: 'Best Value Under ₹1,500',
    description: 'A stylish club hotel set within peaceful landscaped gardens offering sophisticated banquet halls, open poolside party decks, and award-winning dining.',
    highlights: ['Transparent per-plate package', 'Poolside cocktail party zone', 'Full in-house hospitality team']
  },

  // Delhi NCR
  {
    id: 'v-del-1',
    name: 'Amaanta Farms',
    slug: 'amaanta-farms-delhi',
    city: 'delhi',
    cityName: 'Delhi NCR',
    type: 'Farmhouse',
    locality: 'Bijwasan Road, Kapashera, New Delhi',
    address: '68-69, Bijwasan Rd, Kapas Hera, New Delhi, Delhi 110037',
    vegPrice: 2800,
    nonVegPrice: 3200,
    capacityMin: 300,
    capacityMax: 2000,
    roomsCount: 20,
    rating: 4.9,
    reviewsCount: 210,
    featuredImage: '/assets/raozweddings/venue-5.webp',
    galleryImages: [
      '/assets/raozweddings/venue-5.webp',
      '/assets/raozweddings/venue-13.webp',
      '/assets/raozweddings/venue-21.webp'
    ],
    amenities: ['Regal Glasshouse Ballroom', 'Grand Sprawling Lawn', 'VIP Valet with 500+ Car Bays', 'State-of-art Lighting', 'Luxury Dressing Suites'],
    badge: 'Celebrity Wedding Favorite',
    description: 'Spread over 12 acres of manicured greens with a temperature-controlled French glasshouse and water bodies, Amaanta is the epitome of high-fashion Delhi weddings.',
    highlights: ['Grand European-style glasshouse ballroom', 'Dedicated baarat pathway and royal porch', 'Customizable multi-cuisine catering infrastructure']
  },
  {
    id: 'v-del-2',
    name: 'Calista Resort',
    slug: 'calista-resort-delhi',
    city: 'delhi',
    cityName: 'Delhi NCR',
    type: 'Resort',
    locality: 'NH-8, Kapashera, New Delhi',
    address: 'Old NH-8, Kapashera, New Delhi, Delhi 110037',
    vegPrice: 2100,
    nonVegPrice: 2400,
    capacityMin: 200,
    capacityMax: 1200,
    roomsCount: 35,
    rating: 4.7,
    reviewsCount: 160,
    featuredImage: '/assets/raozweddings/venue-6.webp',
    galleryImages: [
      '/assets/raozweddings/venue-6.webp',
      '/assets/raozweddings/venue-14.webp'
    ],
    amenities: ['Mayfair & Victoria Lawns', 'Grand Ballroom', 'Stay Accommodation', 'Swimming Pool', 'Multi-Cuisine Master Chefs'],
    badge: 'Top Rated on NH-8',
    description: 'Offering five exquisite indoor and outdoor venues on the Delhi-Gurugram highway with premium rooms, curated culinary setups, and grand stage lighting.',
    highlights: ['Walking distance from Delhi border', 'Flexible multi-day wedding packages', 'Exceptional continental and Indian live counters']
  },
  {
    id: 'v-del-3',
    name: 'The Tivoli Grand Resort Hotel',
    slug: 'the-tivoli-grand-resort-delhi',
    city: 'delhi',
    cityName: 'Delhi NCR',
    type: 'Hotel',
    locality: 'GT Karnal Road, New Delhi',
    address: 'Opposite Sai Baba Mandir, GT Karnal Road, Alipur, Delhi 110036',
    vegPrice: 1900,
    nonVegPrice: 2300,
    capacityMin: 250,
    capacityMax: 2500,
    roomsCount: 60,
    rating: 4.6,
    reviewsCount: 145,
    featuredImage: '/assets/raozweddings/venue-7.webp',
    galleryImages: ['/assets/raozweddings/venue-7.webp'],
    amenities: ['Massive Banquet Halls', 'Royal Lawn', '60 Luxury Rooms', 'Bridal Suites', 'Helipad Access', 'Valet Parking'],
    badge: 'Mega Capacity 2500+',
    description: 'A benchmark in North Delhi hospitality, Tivoli Grand boasts majestic chandeliers, carpeted ballrooms, and immense lawns capable of hosting grand Indian weddings.',
    highlights: ['Ideal for large 1,000+ guest weddings', '60 hotel rooms for destination guest stay', 'Covered weather-proof grand stages']
  },

  // Mumbai
  {
    id: 'v-mum-1',
    name: 'Goldfinch Hotel Mumbai',
    slug: 'goldfinch-hotel-mumbai',
    city: 'mumbai',
    cityName: 'Mumbai',
    type: 'Hotel',
    locality: 'Andheri East, Mumbai',
    address: 'Plot No. 34/21, Central Road, MIDC, Andheri East, Mumbai, Maharashtra 400093',
    vegPrice: 1650,
    nonVegPrice: 1950,
    capacityMin: 150,
    capacityMax: 800,
    roomsCount: 94,
    rating: 4.8,
    reviewsCount: 130,
    featuredImage: '/assets/raozweddings/venue-8.webp',
    galleryImages: [
      '/assets/raozweddings/venue-8.webp',
      '/assets/raozweddings/venue-16.webp'
    ],
    amenities: ['Senso & Baywatch Ballrooms', 'Rooftop Lounge', '94 Designer Rooms', 'Signature Coastal & Pan-Asian Catering', 'Airport Proximity'],
    badge: 'Boutique 4-Star Luxury',
    description: 'A chic 4-star boutique hotel near Mumbai International Airport featuring pillarless ballrooms, open sky terraces, and acclaimed coastal catering.',
    highlights: ['Just 10 mins from T2 International Airport', 'Pillarless ballroom with high ceilings', 'Curated cocktail rooftop zone']
  },
  {
    id: 'v-mum-2',
    name: 'Chaitanya Convention Centre',
    slug: 'chaitanya-convention-centre-mumbai',
    city: 'mumbai',
    cityName: 'Mumbai',
    type: 'Banquet Hall',
    locality: 'Dadar West, Mumbai',
    address: 'Near Siddhivinayak Temple, Dadar West, Mumbai 400028',
    vegPrice: 1200,
    nonVegPrice: 1500,
    capacityMin: 100,
    capacityMax: 700,
    roomsCount: 12,
    rating: 4.6,
    reviewsCount: 88,
    featuredImage: '/assets/raozweddings/venue-9.webp',
    galleryImages: ['/assets/raozweddings/venue-9.webp'],
    amenities: ['Central Mumbai Location', 'Central Air Conditioning', 'Pure Veg Kitchen Option', 'Changing Rooms', 'Valet Facility'],
    badge: 'Central Mumbai Landmark',
    description: 'Conveniently situated in Dadar near Siddhivinayak, offering modern acoustics, flexible hall partitions, and traditional Maharashtrian & Gujarati menus.',
    highlights: ['Walking distance from Dadar railway station', 'Separate pure-veg dining hall', 'Budget-friendly central city rates']
  },

  // Goa
  {
    id: 'v-goa-1',
    name: 'Riva Beach Resort',
    slug: 'riva-beach-resort-goa',
    city: 'goa',
    cityName: 'Goa',
    type: 'Resort',
    locality: 'Mandrem Beach, North Goa',
    address: 'Mandrem Beach, Pernem, North Goa, Goa 403527',
    vegPrice: 2200,
    nonVegPrice: 2600,
    capacityMin: 100,
    capacityMax: 800,
    roomsCount: 110,
    rating: 4.9,
    reviewsCount: 240,
    featuredImage: '/assets/raozweddings/venue-10.webp',
    galleryImages: [
      '/assets/raozweddings/venue-10.webp',
      '/assets/raozweddings/venue-18.webp',
      '/assets/raozweddings/venue-26.webp'
    ],
    amenities: ['Direct White Sand Beach Access', 'River & Sea Meeting Point', 'Beachfront Mandap Lawn', '110 Luxury Cottages & Suites', 'Beach Shack Lounge'],
    badge: 'Top Beach Destination',
    description: 'Nestled on the pristine white sands of Mandrem Beach, Riva offers stunning Arabian Sea views, a private beach lawn, and romantic sunset vows right by the waves.',
    highlights: ['Barefoot beach wedding ceremonies allowed', 'Riverside cottages for guest stay', 'Live seafood barbecue and Goan cocktails']
  },
  {
    id: 'v-goa-2',
    name: 'Resort De Coracao by the Sea',
    slug: 'resort-de-coracao-goa',
    city: 'goa',
    cityName: 'Goa',
    type: 'Resort',
    locality: 'Calangute, North Goa',
    address: 'Naika Vaddo, Calangute, Goa 403516',
    vegPrice: 1800,
    nonVegPrice: 2100,
    capacityMin: 80,
    capacityMax: 450,
    roomsCount: 75,
    rating: 4.7,
    reviewsCount: 115,
    featuredImage: '/assets/raozweddings/venue-11.webp',
    galleryImages: ['/assets/raozweddings/venue-11.webp'],
    amenities: ['Poolside Deck', 'Indoor Banquet', 'Spa & Wellness', '75 Air-Conditioned Rooms', 'DJ Setup Permitted'],
    badge: 'High Value Beach Venue',
    description: 'A vibrant 4-star resort in bustling Calangute combining Portuguese architectural touches, poolside sundowners, and top-tier hospitality.',
    highlights: ['Vibrant pool party for haldi/mehendi', 'Proximity to popular North Goa attractions', 'Full resort buyout packages']
  },

  // Noida
  {
    id: 'v-noi-1',
    name: 'The White Palace',
    slug: 'the-white-palace-noida',
    city: 'noida',
    cityName: 'Noida',
    type: 'Banquet Hall',
    locality: 'Sector 62, Noida',
    address: 'Near Fortis Hospital, Sector 62, Noida, Uttar Pradesh 201301',
    vegPrice: 1400,
    nonVegPrice: 1700,
    capacityMin: 200,
    capacityMax: 1200,
    roomsCount: 15,
    rating: 4.7,
    reviewsCount: 95,
    featuredImage: '/assets/raozweddings/venue-12.webp',
    galleryImages: ['/assets/raozweddings/venue-12.webp'],
    amenities: ['All-White Palace Architecture', 'Air Conditioned Grand Hall', 'Green Lawn Attachment', 'Bridal Dressing Suite', 'Ample Parking'],
    badge: 'Popular Noida Ballroom',
    description: 'Inspired by neoclassical European architecture with stark white columns, grand arches, and glittering crystal fixtures for memorable wedding receptions.',
    highlights: ['Photogenic white palace facade', 'Seamless indoor-outdoor layout', 'Direct access from Noida Electronic City Metro']
  },
  {
    id: 'v-noi-2',
    name: 'Nagori Farms & Banquet',
    slug: 'nagori-farms-noida',
    city: 'noida',
    cityName: 'Noida',
    type: 'Farmhouse',
    locality: 'Noida Expressway, Sector 135, Noida',
    address: 'Near Wazidpur, Sector 135, Noida, Uttar Pradesh 201304',
    vegPrice: 1300,
    nonVegPrice: 1600,
    capacityMin: 250,
    capacityMax: 1800,
    roomsCount: 10,
    rating: 4.6,
    reviewsCount: 78,
    featuredImage: '/assets/raozweddings/venue-13.webp',
    galleryImages: ['/assets/raozweddings/venue-13.webp'],
    amenities: ['Expansive Open Lawn', 'Covered Waterproof Dining Shed', 'DJ Stage', 'Valet Parking for 400 Vehicles', 'Lush Tree Line'],
    badge: 'Expressway Farmhouse',
    description: 'A spacious farmhouse venue located on the expressway offering vast green lawns, private tree-lined drives, and customizable theme sets.',
    highlights: ['Zero city congestion on expressway', 'Massive stage setups supported', 'Ideal for big fat Indian sangeets']
  },

  // Gurugram
  {
    id: 'v-gur-1',
    name: 'Heritage Village Resort & Spa',
    slug: 'heritage-village-resort-gurugram',
    city: 'gurugram',
    cityName: 'Gurugram',
    type: 'Resort',
    locality: 'NH-8, Manesar, Gurugram',
    address: 'NH-8, Manesar, Gurugram, Haryana 122051',
    vegPrice: 2800,
    nonVegPrice: 3200,
    capacityMin: 150,
    capacityMax: 1500,
    roomsCount: 154,
    rating: 4.9,
    reviewsCount: 310,
    featuredImage: '/assets/raozweddings/venue-14.webp',
    galleryImages: [
      '/assets/raozweddings/venue-14.webp',
      '/assets/raozweddings/venue-22.webp',
      '/assets/raozweddings/venue-30.webp'
    ],
    amenities: ['Rajasthani Haveli Architecture', 'Central Amphitheatre', '154 Luxurious Rooms', 'Poolside Sundowner Deck', 'Aruna Spa'],
    badge: 'Heritage Luxury Icon',
    description: 'A breathtaking Rajasthani haveli-style fortress resort offering grand courtyards, stone arches, multiple banqueting lawns, and royal royal elephant welcomes.',
    highlights: ['Destination wedding feel 30 mins from airport', '154 rooms for hosting the entire wedding party', 'Authentic palace facade with night illumination']
  },
  {
    id: 'v-gur-2',
    name: 'ITC Grand Bharat, A Luxury Collection',
    slug: 'itc-grand-bharat-gurugram',
    city: 'gurugram',
    cityName: 'Gurugram',
    type: 'Palace',
    locality: 'Hasanpur, Tauru, Gurugram',
    address: 'P.O. Hasanpur, Tauru, Gurugram, Haryana 122105',
    vegPrice: 4500,
    nonVegPrice: 5200,
    capacityMin: 100,
    capacityMax: 900,
    roomsCount: 104,
    rating: 4.9,
    reviewsCount: 195,
    featuredImage: '/assets/raozweddings/venue-15.webp',
    galleryImages: ['/assets/raozweddings/venue-15.webp'],
    amenities: ['104 Ultra-Luxury Pavilion Villas', '27-Hole Jack Nicklaus Golf Course', 'Kaya Kalp Royal Spa', 'Private Pools', 'Helipad'],
    badge: 'Ultra-Luxury 5-Star',
    description: 'An architectural tribute to India’s golden heritage featuring grand domes, stepped stone wells, reflective pools, and world-class luxury villas.',
    highlights: ['Unmatched ultra-luxury culinary standards', 'Private presidential and royal villa suites', 'Exclusive high-society destination ceremonies']
  },

  // Jaipur
  {
    id: 'v-jai-1',
    name: 'Rambagh Palace - The Jewel of Jaipur',
    slug: 'rambagh-palace-jaipur',
    city: 'jaipur',
    cityName: 'Jaipur',
    type: 'Palace',
    locality: 'Bhawani Singh Road, Jaipur',
    address: 'Bhawani Singh Rd, Rambagh, Jaipur, Rajasthan 302005',
    vegPrice: 4800,
    nonVegPrice: 5500,
    capacityMin: 150,
    capacityMax: 1500,
    roomsCount: 78,
    rating: 5.0,
    reviewsCount: 420,
    featuredImage: '/assets/raozweddings/venue-16.webp',
    galleryImages: [
      '/assets/raozweddings/venue-16.webp',
      '/assets/raozweddings/venue-24.webp'
    ],
    amenities: ['Former Residence of the Maharaja of Jaipur', '47 Acres of Ornamental Mughal Gardens', 'Peacock Garden Lawn', 'Royal Buggy & Camel Welcome', '78 Heritage Suites'],
    badge: 'World #1 Luxury Palace',
    description: 'The former residence of Maharaja Sawai Man Singh II, Rambagh Palace is globally celebrated for royal Rajput pageantry, marble lattice corridors, and fairy-tale garden lawns.',
    highlights: ['Ranked World’s Best Hotel by Tripadvisor', 'Authentic royal elephant & shehnai welcome', 'Historic Mughal garden lawns for 1000+ guests']
  },
  {
    id: 'v-jai-2',
    name: 'Mundota Fort and Palace',
    slug: 'mundota-palace-jaipur',
    city: 'jaipur',
    cityName: 'Jaipur',
    type: 'Palace',
    locality: 'Mundota, Jaipur',
    address: 'Village Mundota, Kalwar Road, Jaipur, Rajasthan 303706',
    vegPrice: 3200,
    nonVegPrice: 3800,
    capacityMin: 100,
    capacityMax: 1000,
    roomsCount: 50,
    rating: 4.9,
    reviewsCount: 150,
    featuredImage: '/assets/raozweddings/venue-17.webp',
    galleryImages: ['/assets/raozweddings/venue-17.webp'],
    amenities: ['500-Year-Old Hilltop Fort', 'Polo Grounds', 'Heritage Swimming Pool', 'Pillarless Durbar Hall', 'Starlight Terrace'],
    badge: 'Polo & Fort Heritage',
    description: 'A 500-year-old fort and palace featuring India’s only private polo ground, hilltop watchtowers, hand-carved stone pillars, and open-air battlements.',
    highlights: ['Spectacular hilltop sangeet setting', 'Private polo match entertainment for guests', 'Heritage fort illumination at twilight']
  },

  // Udaipur
  {
    id: 'v-uda-1',
    name: 'Fateh Garh - Heritage Renaissance Resort',
    slug: 'fateh-garh-udaipur',
    city: 'udaipur',
    cityName: 'Udaipur',
    type: 'Palace',
    locality: 'Sisarma, Udaipur',
    address: 'Sisarma, Udaipur, Rajasthan 313031',
    vegPrice: 3500,
    nonVegPrice: 4000,
    capacityMin: 100,
    capacityMax: 700,
    roomsCount: 58,
    rating: 4.9,
    reviewsCount: 220,
    featuredImage: '/assets/raozweddings/venue-18.webp',
    galleryImages: [
      '/assets/raozweddings/venue-18.webp',
      '/assets/raozweddings/venue-26.webp'
    ],
    amenities: ['Panoramic Lake & Hilltop Views', 'Heritage Museum Onsite', 'Two Infinity Pools', 'Vintage Car Fleet', 'Dariyan Lawn'],
    badge: 'Hilltop Lake Palace',
    description: 'Perched on the crest of the Aravali range overlooking Lake Pichola, Fateh Garh is a pioneer in sustainable heritage conservation and royal destination weddings.',
    highlights: ['360-degree panoramic sunset views', 'Vintage royal car baarat procession', 'Infinity pool deck for mehendi parties']
  },
  {
    id: 'v-uda-2',
    name: 'Aurika, Udaipur - Luxury by Lemon Tree',
    slug: 'aurika-udaipur',
    city: 'udaipur',
    cityName: 'Udaipur',
    type: 'Resort',
    locality: 'Kala Rohi, Rani Road, Udaipur',
    address: '01, Kala Rohi, Rani Rd, Udaipur, Rajasthan 313001',
    vegPrice: 2900,
    nonVegPrice: 3400,
    capacityMin: 120,
    capacityMax: 800,
    roomsCount: 139,
    rating: 4.8,
    reviewsCount: 180,
    featuredImage: '/assets/raozweddings/venue-19.webp',
    galleryImages: ['/assets/raozweddings/venue-19.webp'],
    amenities: ['Grand Ekaara Ballroom', 'Kalyan Open Lawn', '139 Grand Rooms & Suites', 'Spa & Salon', 'Pet Friendly'],
    badge: 'Modern Royal Retreat',
    description: 'Spanning across 5 acres of undulating hilltops with palatial architecture, courtyards, mirror mosaics, and state-of-the-art ballroom technology.',
    highlights: ['Pillarless grand ballroom with 20ft ceiling', '139 guest rooms ideal for full buyout', 'Curated royal Rajasthani banquet feast']
  }
];

export const WEDDING_SERVICES_DATA: WeddingService[] = [
  {
    id: 's-planning',
    title: 'Full Wedding Planning & Management',
    slug: 'wedding-planning-management',
    shortDesc: 'End-to-end wedding planning from budgeting, itinerary, supplier coordination to on-day execution.',
    fullDesc: 'Our dedicated wedding planners take care of every minute detail from Day 1 to your final vidai. We manage schedules, vendor contracts, RSVP hospitality, and production so your family enjoys every moment stress-free.',
    icon: 'CalendarHeart',
    image: '/assets/raozweddings/step1.webp',
    startingPrice: '₹1,50,000',
    deliverables: [
      'Dedicated Senior Wedding Planner & 6-member Day Coordination Team',
      'Master Wedding Timeline & Detailed Day-wise Itinerary',
      'Comprehensive Budget Allocation & Expense Tracking Sheet',
      'Vendor Contract Negotiation & Milestone Payment Management',
      '24/7 RSVP & Guest Concierge Desk Support'
    ],
    features: ['Zero Brokerage on Venues', '100% Transparent Billing', 'Custom Bride & Groom Mobile Itinerary App']
  },
  {
    id: 's-venue',
    title: 'Wedding Venue Booking & Deals',
    slug: 'wedding-venues-booking',
    shortDesc: 'Guaranteed lowest venue prices across 2,500+ verified hotels, palaces, banquets, and resorts in India.',
    fullDesc: 'Leverage our bulk buying power across India’s best hotels and private estates. We get you complimentary room upgrades, waived corkage fees, discounted per-plate pricing, and our Price Beat Guarantee.',
    icon: 'Building2',
    image: '/assets/raozweddings/venue-1.webp',
    startingPrice: 'FREE Consultation',
    deliverables: [
      'Curated shortlist of 5-8 verified venues matching your exact dates and budget',
      'Complimentary VIP Site Visits with dedicated Venue Manager',
      'Guaranteed 10-25% price savings off direct venue rates',
      'Written legal check of all venue licenses, sound curfew, and liquor rules',
      'Free negotiation on external vendor royalties and kitchen charges'
    ],
    features: ['Price Beat Guarantee', 'No Hidden Fees', 'Dedicated Venue Concierge']
  },
  {
    id: 's-decor',
    title: 'Wedding Decor & Theme Design',
    slug: 'wedding-decor-theme-design',
    shortDesc: 'Bespoke stage, mandap, floral pathways, mood lighting, and experiential concept designs.',
    fullDesc: 'From romantic pastel floral mandaps to opulent royal palace sets, our in-house production team turns raw venue spaces into breathtaking visual masterpieces.',
    icon: 'Sparkles',
    image: '/assets/raozweddings/mandap.webp',
    startingPrice: '₹2,00,000',
    deliverables: [
      '3D Visual Renders & Moodboards for all wedding functions',
      'Designer Kalyana Mandap / Stage with fresh exotic florals',
      'Grand Illuminated Entrance Tunnel & Photo Booth Installations',
      'Ambient Intelligent LED Uplighting & Fairylight Canopies',
      'Dining Tablescape Design, Printed Menu Cards & Floral Centerpieces'
    ],
    features: ['3D Pre-visualization', 'Eco-friendly Options', 'In-house Fabrication Workshop']
  },
  {
    id: 's-photo',
    title: 'Wedding Photography & Cinematography',
    slug: 'wedding-photography-cinematography',
    shortDesc: 'Candid storytelling, cinematic 4K films, drone perspectives, and luxury heirloom photobooks.',
    fullDesc: 'Our award-winning photographers and cinematographers capture genuine emotions, candid laughter, and grand rituals with artistic flair and cinematic cameras.',
    icon: 'Camera',
    image: '/assets/raozweddings/idea-2.webp',
    startingPrice: '₹1,25,000',
    deliverables: [
      'Team of 2 Candid Photographers + 2 Traditional Photographers + 2 Cinematographers',
      'Aerial 4K Drone Footage of Venue, Baarat, and Varmala',
      '3-5 Minute Cinematic Wedding Teaser Trailer within 7 Days',
      '20-30 Minute Full Cinematic Wedding Film with Customized Soundtrack',
      '2 Premium Leather-Bound Flush-Mount Hardcover Albums (300+ Pages)'
    ],
    features: ['Same-Week Social Reels', 'Unlimited High-Res Digital Photos', 'Pre-Wedding Shoot Included']
  },
  {
    id: 's-catering',
    title: 'Gourmet Catering & Live Food Theatre',
    slug: 'wedding-catering-menus',
    shortDesc: 'Curated menus crafted by masterchefs with live counters, regional delicacies, and artisan desserts.',
    fullDesc: 'Elevate your wedding feast with mouth-watering regional Indian recipes, global live stations (Italian wood-fired, Mexican, Sushi bar), and theatrical dessert displays.',
    icon: 'UtensilsCrossed',
    image: '/assets/raozweddings/hotel-taj.webp',
    startingPrice: '₹1,200 / Plate',
    deliverables: [
      'Tailored menu curation with tasting session for 6 family members',
      'Dedicated live food theatre & interactive street food carts',
      'Trained uniformed hospitality waitstaff and beverage sommeliers',
      'Artisanal dessert spread with live nitrogen ice creams and jalebis',
      'Certified hygiene standards with food temperature control'
    ],
    features: ['Complimentary Pre-tasting', 'Special Diet & Jain Counters', 'Eco-friendly Bone-China Crockery']
  },
  {
    id: 's-hospitality',
    title: 'Guest Hospitality, Logistics & RSVP',
    slug: 'wedding-hospitality-logistics',
    shortDesc: 'Airport pickups, luxury fleet management, welcome hampers, room allocations, and guest assistance.',
    fullDesc: 'Make every outstation guest feel pampered from the moment they step off the flight. We manage luxury fleet transfers, custom luggage tagging, welcome drink ceremonies, and hotel check-in desks.',
    icon: 'HeartHandshake',
    image: '/assets/raozweddings/step3.webp',
    startingPrice: '₹75,000',
    deliverables: [
      'Airport & Railway station reception desk with guest greeting team',
      'Luxury sedan and coach fleet management with live GPS tracking',
      'Personalized room hampers, itinerary cards, and welcome notes',
      'Dedicated 24/7 hospitality desk in the hotel lobby',
      'Luggage movement coordination and room check-in management'
    ],
    features: ['Real-Time WhatsApp Guest Bot', 'Customized Welcome Kits', 'Dedicated Luggage Runners']
  }
];

export const DECOR_THEMES_DATA: DecorTheme[] = [
  {
    id: 'd-1',
    title: 'The Royal Sheesh Mahal Mandap',
    category: 'mandap',
    style: 'Royal Rajasthani',
    image: '/assets/raozweddings/mandap.webp',
    priceRange: '₹3,50,000 - ₹6,00,000',
    description: 'Intricate silver-foiled archways, hanging crystal strands, Belgian mirror mosaics, and thousands of scented red Dutch roses.',
    elements: ['Mirror mosaic carved pillars', 'Red velvet upholstery', 'Floating lotus diyas', 'Brass samai lamps']
  },
  {
    id: 'd-2',
    title: 'Pastel Floral Dreamland',
    category: 'mandap',
    style: 'Contemporary Romantic',
    image: '/assets/raozweddings/idea-1.webp',
    priceRange: '₹2,50,000 - ₹4,50,000',
    description: 'Blush pink hydrangeas, baby’s breath clouds, white wisteria canopies, and soft golden fairy lighting for a dreamy sunset pheras.',
    elements: ['White wooden pergola', 'Hydrangea and peony clusters', 'Fairy light ceiling', 'Pastel chiffon drapery']
  },
  {
    id: 'd-3',
    title: 'Bohemian Sunset Beach Vows',
    category: 'mandap',
    style: 'Boho Coastal',
    image: '/assets/raozweddings/venue-10.webp',
    priceRange: '₹2,00,000 - ₹3,80,000',
    description: 'Natural driftwood arches, macrame hangings, dried pampas grass plumes, and terracotta pots set against the azure ocean waves.',
    elements: ['Driftwood arches', 'Pampas grass & dried palms', 'Macrame backdrop', 'Rattan lanterns on sand']
  },
  {
    id: 'd-4',
    title: 'The Great Gatsby Black & Gold Sangeet',
    category: 'sangeet',
    style: 'Glamour & High Energy',
    image: '/assets/raozweddings/idea-3.webp',
    priceRange: '₹4,00,000 - ₹7,50,000',
    description: 'Massive P3 LED screens, moving intelligent beam lights, black gloss dancefloor, and golden art-deco stage facades.',
    elements: ['40ft concert stage', 'Dynamic pixel lighting', 'Glittering photo tunnel', 'LED wristbands for crowd']
  },
  {
    id: 'd-5',
    title: 'Marigold Sunshine Carnival (Haldi / Mehendi)',
    category: 'haldi',
    style: 'Vibrant Traditional',
    image: '/assets/raozweddings/idea-4.webp',
    priceRange: '₹1,50,000 - ₹3,00,000',
    description: 'Cascading strings of yellow and orange marigolds, colorful Rajasthani umbrellas, brass urli tubs for haldi showers, and fun selfie corners.',
    elements: ['Brass urli with flower petals', 'Colorful printed kites & tassels', 'Floral swing for couple', 'Customized haldi photo props']
  }
];

export const PHOTOGRAPHY_PACKAGES_DATA: PhotographyPackage[] = [
  {
    id: 'p-1',
    title: 'Silver Classic Coverage',
    tier: 'Essential',
    price: '₹1,25,000',
    days: '2 Days (3 Functions)',
    team: '1 Candid + 1 Traditional Photographer + 1 Cinematographer',
    deliverables: [
      '500+ Retouched High-Resolution Photographs',
      '3-Minute Wedding Highlight Music Video',
      'Full 40-Minute Documentary Edit of Rituals',
      '1 Premium 40-Page Photobook Album',
      'Online Cloud Gallery with 1-Year Access'
    ]
  },
  {
    id: 'p-2',
    title: 'Gold Signature Experience',
    tier: 'Signature',
    price: '₹2,40,000',
    days: '3 Days (All Functions)',
    team: '2 Candid + 2 Traditional Photographers + 2 Cinematographers + 1 Drone Pilot',
    popular: true,
    deliverables: [
      '1,200+ Master Retouched Photographs',
      'Complimentary Destination Pre-Wedding Shoot',
      '4K Cinematic Wedding Film with Custom Voiceovers',
      'Same-Day Sangeet Reel for Instagram within 24 Hours',
      '2 Master Flush-Mount Hardcover Leather Albums',
      'All Raw Video Footage in 1TB Solid State Drive'
    ]
  },
  {
    id: 'p-3',
    title: 'Royal Heritage Cinema',
    tier: 'Royal Cinematic',
    price: '₹4,50,000',
    days: '4 Days (Destination Wedding)',
    team: 'Senior Celebrity Lead Photographers + Full 8-Member Cinema Crew',
    deliverables: [
      'Unlimited High-Resolution Retouched Photographs',
      '3-Day Pre-Wedding Editorial Shoot with Drone',
      'Full Bollywood-Grade 4K Movie with Original Score',
      'Daily 60-Second Viral Social Media Reels during Wedding',
      '4 Handcrafted Italian Velvet Heirloom Albums for Parents & Couple',
      'Personalized Wooden Collector Box with Laser Engraved Glass USB'
    ]
  }
];

export const WEDDING_IDEAS_DATA: WeddingIdea[] = [
  {
    id: 'idea-1',
    title: 'Timeless Kanjeevaram Silk with Antique Temple Borders',
    category: 'sarees',
    categoryLabel: 'Sarees',
    image: '/assets/raozweddings/idea-1.webp',
    likesCount: 1420,
    tags: ['Traditional', 'South Indian', 'Kanjeevaram', 'Gold Zari'],
    description: 'Rich crimson and mustard pure mulberry silk sarees with heavy gold zari borders, inspired by ancient temple carvings of Thanjavur.'
  },
  {
    id: 'idea-2',
    title: 'Heritage Fort Pre-Wedding Silhouette at Twilight',
    category: 'pre-wedding-shoot',
    categoryLabel: 'Pre-Wedding Shoot',
    image: '/assets/raozweddings/idea-2.webp',
    likesCount: 2310,
    tags: ['PreWedding', 'Jaipur', 'Royal Fort', 'Golden Hour'],
    description: 'Dramatic lighting capturing the royal couple amidst stone archways and candlelit jharokhas of Rajasthan forts at dusk.'
  },
  {
    id: 'idea-3',
    title: 'Polki Diamond & Uncut Emerald Choker Set',
    category: 'jewellery',
    categoryLabel: 'Jewellery',
    image: '/assets/raozweddings/idea-3.webp',
    likesCount: 1890,
    tags: ['Polki', 'Emeralds', 'Bridal Jewellery', 'Heirloom'],
    description: 'Statement multi-strand uncut diamond necklace paired with Colombian emerald drops, matching jhumkas, and royal maang tikka.'
  },
  {
    id: 'idea-4',
    title: 'Lakeside Mandap with Floating Mirror Runway',
    category: 'venue-ideas',
    categoryLabel: 'Venue Ideas',
    image: '/assets/raozweddings/mandap.webp',
    likesCount: 3100,
    tags: ['Lake Wedding', 'Udaipur', 'Glass Runway', 'Mandap Design'],
    description: 'A glass-top reflection walkway over the lake leading to an illuminated marble mandap encircled by fragrant tuberoses and lotus blooms.'
  },
  {
    id: 'idea-5',
    title: 'Candid Varmala Shower Moments',
    category: 'photoshoot-poses',
    categoryLabel: 'Photoshoot Poses',
    image: '/assets/raozweddings/venue-1.webp',
    likesCount: 1650,
    tags: ['Varmala', 'Candid', 'Cold Pyros', 'Petals'],
    description: 'Capturing joyful smiles when flower petal showers erupt simultaneously with low-fog pyrotechnics as the couple exchanges garlands.'
  },
  {
    id: 'idea-6',
    title: 'Ivory & Gold Raw Silk Royal Sherwani',
    category: 'groom-dresses',
    categoryLabel: 'Groom Dresses',
    image: '/assets/raozweddings/idea-2.webp',
    likesCount: 980,
    tags: ['Groom Wear', 'Sherwani', 'Silk', 'Embroidered'],
    description: 'Tailored ivory Banarasi raw silk sherwani featuring micro-zardozi handwork, matched with a peach tissue stole and pearl kalgi.'
  },
  {
    id: 'idea-7',
    title: 'Ruby Velvet Bridal Lehenga with Double Dupatta Drape',
    category: 'bridal-lehengas',
    categoryLabel: 'Bridal Lehengas',
    image: '/assets/raozweddings/idea-1.webp',
    likesCount: 4210,
    tags: ['Bridal Lehenga', 'Velvet', 'Double Dupatta', 'Zardozi'],
    description: 'Deep crimson velvet lehenga intricately hand-embroidered with dabka, sequins, and pearls, accompanied by a sheer organza veil.'
  }
];

export const CLIENT_REVIEWS_DATA: ClientReview[] = [
  {
    id: 'rev-1',
    coupleName: 'Ananya & Siddharth',
    city: 'Bengaluru',
    venueName: 'Amita Rasa, Nandi Hills',
    weddingDate: 'January 2026',
    rating: 5,
    reviewText: 'RAOZ WEDDINGS made our destination wedding beyond magical. From finding Amita Rasa at an unbeatable rate to coordinating our 350 outstation guests with zero hiccups, their team was exceptional. Every guest praised the decor and hospitality!',
    image: '/assets/raozweddings/venue-1.webp',
    tags: ['Destination Wedding', 'Venue Booking', 'Full Planning']
  },
  {
    id: 'rev-2',
    coupleName: 'Dr. Meera & Rohan Verma',
    city: 'Delhi NCR',
    venueName: 'Amaanta Farms, New Delhi',
    weddingDate: 'December 2025',
    rating: 5,
    reviewText: 'The Price Beat Guarantee is 100% genuine! We had a direct quotation from Amaanta, and RAOZ WEDDINGS not only beat the price by ₹2.5 Lakhs but also included complimentary luxury bridal dressing suites and audio production. Super professional!',
    image: '/assets/raozweddings/venue-5.webp',
    tags: ['Price Beat Winner', 'Farmhouse Wedding', 'Decor & Lighting']
  },
  {
    id: 'rev-3',
    coupleName: 'Natasha & Kabir Mehta',
    city: 'Goa',
    venueName: 'Riva Beach Resort, Mandrem',
    weddingDate: 'February 2026',
    rating: 5,
    reviewText: 'Getting married on the beach was our lifelong dream. RAOZ WEDDINGS handled the entire resort buyout, legal beach permits, and sunset mandap design with flawless precision. Our wedding video looks like a full cinematic Bollywood movie!',
    image: '/assets/raozweddings/venue-10.webp',
    tags: ['Beach Wedding', 'Photography & Cinema', 'Guest Logistics']
  },
  {
    id: 'rev-4',
    coupleName: 'Priyanka & Arjun Rathore',
    city: 'Jaipur',
    venueName: 'Rambagh Palace, Jaipur',
    weddingDate: 'November 2025',
    rating: 5,
    reviewText: 'Planning a high-profile Jaipur royal wedding while living in London felt impossible until we partnered with RAOZ WEDDINGS. Their 3D renders were exact, the food tastings were seamless, and their on-ground team managed everything with poise.',
    image: '/assets/raozweddings/venue-16.webp',
    tags: ['Royal Palace', 'NRI Wedding', 'Bespoke Production']
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    q: 'Do you offer customizable wedding planning packages to suit different budgets?',
    a: 'Yes, absolutely. We believe no two weddings are alike. While we have structured packages starting from ₹1,50,000 for day-of coordination to ₹15 Lakhs+ for grand multi-day destination buyouts, every single service can be customized to match your family’s exact requirements, guest count, and vision.',
    category: 'general'
  },
  {
    q: 'What is the RAOZ WEDDINGS Price Beat Challenge?',
    a: 'We have direct bulk relationships with over 2,500 hotels and venues across India. If you have an official, comparable written quotation from any authorized venue or decorator, we guarantee to beat their final pricing by 5% to 10% or offer complimentary premium upgrades worth up to ₹50,000.',
    category: 'pricing'
  },
  {
    q: 'How far in advance should we book our wedding venue and planner?',
    a: 'For popular wedding dates during the auspicious saaya season (October to March) and peak destination cities like Goa, Udaipur, and Jaipur, we strongly recommend booking your venue 6 to 9 months in advance. However, our team frequently executes fabulous weddings planned within 30 to 45 days as well.',
    category: 'venues'
  },
  {
    q: 'Do you manage destination weddings for outstation and NRI couples?',
    a: 'Yes! Over 45% of our weddings are destination events. We offer dedicated virtual video walkthroughs, 3D floor plans, digital contract signing, and complete logistics for families based in the US, UK, Canada, UAE, and Singapore.',
    category: 'services'
  },
  {
    q: 'Can we bring our own decorators or caterers to the venue?',
    a: 'Depending on the venue chosen, policies vary. We negotiate with venues to waive or minimize outside vendor royalties wherever you desire. Our in-house decor and catering teams provide transparent costing with zero surprise additions.',
    category: 'services'
  },
  {
    q: 'How does the 0% Interest Wedding Payment Plan (EMI) work?',
    a: 'We partner with leading financial institutions to offer flexible 3, 6, and 12-month wedding EMI options. Pre-approval takes less than 15 minutes online with minimal documentation, allowing you to secure dream venues without straining upfront liquidity.',
    category: 'pricing'
  }
];

export const RAOZ_WEDDINGS_WEBSITE: BusinessWebsite = {
  id: 'raoz-weddings',
  businessName: 'RAOZ WEDDINGS',
  category: 'services', // matches wedding & services in core platform
  slug: 'raoz-weddings',
  templateId: 'template-wedding-portal',
  tagline: "India's Premier Wedding Planning & Venue Discovery Platform",
  description: 'RAOZ WEDDINGS is your trusted partner for end-to-end wedding planning, verified venue bookings across Bengaluru, Delhi, Mumbai, Goa, Jaipur & Udaipur, bespoke stage & mandap decor, cinematic photography, and guaranteed price savings.',
  ownerName: 'RAOZ WEDDINGS Private Limited',
  phone: RAOZ_WEDDINGS_CONTACT.phone,
  whatsapp: RAOZ_WEDDINGS_CONTACT.phoneRaw,
  email: RAOZ_WEDDINGS_CONTACT.email,
  address: RAOZ_WEDDINGS_CONTACT.corporateOffice,
  city: 'Bengaluru, Delhi NCR, Mumbai, Goa, Jaipur, Udaipur & Pan-India',
  mapsUrl: 'https://maps.google.com/?q=Indiranagar+Bengaluru',
  openingHours: 'Mon - Sun: 9:00 AM - 8:30 PM (Consultations 24/7)',
  primaryColor: '#9A2157', // Signature Wine / Royal Fuchsia
  secondaryColor: '#D97706', // Imperial Gold
  logoUrl: '/assets/raozweddings/logo.webp',
  coverUrl: '/assets/raozweddings/hero-bg.webp',
  fontFamily: 'Plus Jakarta Sans, sans-serif',
  bookingType: 'consultation_quote',
  bookingCtaLabel: 'Start My Wedding Planning',
  specialBadge: 'Site #55 · Wedding Category',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 89999,
  paymentStatus: 'paid',
  sections: [
    { id: 'hero', title: 'Find Your Dream Wedding Venue & Team', isEnabled: true, order: 1 },
    { id: 'cities', title: 'Top Destination Cities', isEnabled: true, order: 2 },
    { id: 'venues', title: 'Curated Wedding Venues', isEnabled: true, order: 3 },
    { id: 'services', title: 'End-to-End Wedding Services', isEnabled: true, order: 4 },
    { id: 'decor', title: 'Designer Stage & Mandap Themes', isEnabled: true, order: 5 },
    { id: 'photography', title: 'Photography & Cinema Packages', isEnabled: true, order: 6 },
    { id: 'ideabook', title: 'Wedding Ideabook & Inspiration', isEnabled: true, order: 7 },
    { id: 'price-beat', title: 'Price Beat Challenge & Guarantee', isEnabled: true, order: 8 },
    { id: 'reviews', title: 'Real Couple Experiences & Reviews', isEnabled: true, order: 9 },
    { id: 'faqs', title: 'Frequently Asked Questions', isEnabled: true, order: 10 }
  ],
  offers: [
    {
      id: 'offer-price-beat',
      title: 'Price Beat Guarantee: Up to 10% Extra Savings',
      description: 'Show us any genuine quotation from an authorized venue and we will beat it or grant ₹50,000 decor credit.',
      discountPercent: 10,
      couponCode: 'PRICEBEAT10',
      isActive: true
    },
    {
      id: 'offer-early-bird',
      title: 'Free Drone Shoot with Wedding Photography',
      description: 'Book your 2-day wedding photography package and get complimentary 4K aerial drone coverage worth ₹35,000.',
      discountPercent: 15,
      couponCode: 'DRONEGIFT',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'gal-1',
      title: 'Grand Palace Varmala Stage',
      category: 'mandap',
      imageUrl: '/assets/raozweddings/mandap.webp'
    },
    {
      id: 'gal-2',
      title: 'Sunset Beachfront Wedding at Riva Goa',
      category: 'venues',
      imageUrl: '/assets/raozweddings/venue-10.webp'
    },
    {
      id: 'gal-3',
      title: 'Pastel Dream Mandap in Bengaluru',
      category: 'mandap',
      imageUrl: '/assets/raozweddings/idea-1.webp'
    },
    {
      id: 'gal-4',
      title: 'Royal Heritage Shoot at Mundota Palace',
      category: 'photography',
      imageUrl: '/assets/raozweddings/idea-2.webp'
    }
  ],
  items: WEDDING_VENUES_DATA.map(v => ({
    id: v.id,
    name: v.name,
    description: v.description,
    price: v.vegPrice,
    discountPrice: v.vegPrice,
    category: v.city,
    imageUrl: v.featuredImage,
    isAvailable: true,
    badge: v.badge
  }))
};
