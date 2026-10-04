import { BusinessWebsite } from '../types';

export interface DestinationItem {
  id: string;
  slug: string;
  name: string;
  stateOrCountry: string;
  tagline: string;
  description: string;
  coverImage: string;
  galleryImages: string[];
  vibe: 'Palatial & Royal' | 'Beachfront & Coastal' | 'Backwaters & Nature' | 'Jungle & Mountain' | 'Tropical Island';
  avgGuestCount: string;
  estBudgetRange: string;
  bestSeason: string;
  venues: {
    name: string;
    type: string;
    capacity: string;
    highlight: string;
    image: string;
  }[];
  itinerary: {
    day: string;
    title: string;
    events: string[];
  }[];
  costHighlights: string[];
}

export interface WeddingService {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  image: string;
  deliverables: string[];
  process: string[];
}

export interface RealWeddingStory {
  id: string;
  coupleNames: string;
  destination: string;
  venue: string;
  date: string;
  guestCount: string;
  coverImage: string;
  photos: string[];
  story: string;
  theme: string;
  highlights: string[];
}

export interface TestimonialItem {
  id: string;
  couple: string;
  cityOrCountry: string;
  weddingLocation: string;
  date: string;
  rating: number;
  review: string;
  avatar: string;
  photo: string;
}

export interface BlogItem {
  id: string;
  slug: string;
  title: string;
  category: 'Cost Guide' | 'Venues' | 'Trends' | 'Planning Tips';
  author: string;
  date: string;
  readTime: string;
  image: string;
  summary: string;
  content: string[];
}

export interface FaqItem {
  q: string;
  a: string;
  category: 'General' | 'Budget & Fee' | 'Destinations' | 'Vendors & Logistics';
}

export const DEVDAS_CONFIG = {
  brandName: 'Devdas Wedding',
  shortBrand: 'Devdas',
  legalName: 'Devdas Wedding Planners & Event Management Pvt. Ltd.',
  tagline: 'Luxury Destination Wedding Planners in India & Worldwide',
  subTagline: 'Bespoke celebrations in Rajasthan Palaces, Goa Beaches, Kerala Backwaters & Jim Corbett Resorts',
  phonePrimary: '+91 98108 55430',
  phoneDisplay: '+91 98108 55430',
  phoneSecondary: '+91 99100 64455',
  whatsapp: '+919810855430',
  whatsappDisplay: '+91 98108 55430',
  email: 'weddings@devdaswedding.in',
  corporateEmail: 'contact@devdaswedding.in',
  establishedYear: '2015',
  socialLinks: {
    instagram: 'https://instagram.com/devdaswedding',
    facebook: 'https://facebook.com/devdaswedding',
    youtube: 'https://youtube.com/devdaswedding',
  },
  stats: {
    weddingsExecuted: '280+',
    destinationsCovered: '24+',
    nriCouplesServed: '110+',
    avgRating: '4.9/5',
    vendorNetwork: '450+',
    onSiteCoordinators: '35+',
  },
  offices: [
    {
      city: 'New Delhi & Gurgaon',
      type: 'Headquarters & Creative Studio',
      address: 'Suite 408, DLF Corporate Greens, Sector 74A, Southern Peripheral Road, Gurgaon, NCR 122004',
      phone: '+91 98108 55430',
      hours: 'Mon - Sat: 10:00 AM - 7:30 PM',
    },
    {
      city: 'Kolkata',
      type: 'Eastern Regional Studio',
      address: 'Plot 14, Block CF, Sector 1, Salt Lake City, Bidhannagar, Kolkata, West Bengal 700064',
      phone: '+91 99100 64455',
      hours: 'Mon - Sat: 10:30 AM - 7:00 PM',
    },
    {
      city: 'Jaipur & Udaipur',
      type: 'Rajasthan On-Ground Operations Desk',
      address: 'Heritage Wing, C-Scheme, Ashok Nagar, Jaipur, Rajasthan 302001',
      phone: '+91 98108 55430',
      hours: 'Open 7 Days during Wedding Season',
    },
    {
      city: 'Goa',
      type: 'Coastal Events Branch',
      address: 'Villa 3, Candolim Beach Road, North Goa, Goa 403515',
      phone: '+91 99100 64455',
      hours: 'Mon - Sun: 9:30 AM - 8:00 PM',
    },
  ],
};

export const DESTINATIONS_DATA: DestinationItem[] = [
  {
    id: 'dest-rajasthan-jaipur',
    slug: 'jaipur-rajasthan',
    name: 'Jaipur, Rajasthan',
    stateOrCountry: 'Rajasthan',
    tagline: 'The Pink City of Royal Palaces, Majestic Forts & Regal Celebrations',
    description: 'From Samode Palace to Rambagh and Jai Mahal, Jaipur offers majestic heritage architecture, vibrant royal hospitality, traditional camel/elephant baraat processions, and desert palace splendor.',
    coverImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    ],
    vibe: 'Palatial & Royal',
    avgGuestCount: '100 - 350 Guests',
    estBudgetRange: '₹45 Lacs - ₹1.2 Cr (2 Nights / 100 Guests)',
    bestSeason: 'October to March',
    venues: [
      {
        name: 'The Taj Rambagh Palace',
        type: 'Heritage Palace Hotel',
        capacity: '500+ Guests',
        highlight: 'Historical ballroom, sprawling manicured Mughal gardens & royal butler service',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Samode Palace & Haveli',
        type: '16th Century Fort Palace',
        capacity: '250 Guests',
        highlight: 'Intricate Sheesh Mahal mirror halls and grand courtyard courtyards',
        image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Chomu Palace Heritage Hotel',
        type: 'Historic Rajput Palace',
        capacity: '300 Guests',
        highlight: '300-year-old fortified palace with picturesque courtyard for pheras',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
      },
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Royal Welcome, Mehndi by the Pool & Gala Sangeet',
        events: [
          'Traditional Dhol, Nagada & Rose Petal welcome at palace gates',
          'Sun-kissed Rajasthani Leheriya Carnival with bangle makers & folk singers',
          'Evening Royal Sangeet with multi-tiered illuminated stage and celebrity DJ',
        ],
      },
      {
        day: 'Day 2',
        title: 'Haldi Holi, Grand Elephant Baraat & Palace Courtyard Pheras',
        events: [
          'Morning Marigold Flower Shower Haldi with dholak players',
          'Sunset Grand Royal Baraat with vintage cars and royal torchbearers',
          'Vedic Pheras at illuminated lotus pool mandap followed by royal banquet',
        ],
      },
    ],
    costHighlights: [
      'Palace Rooms: ₹18,000 - ₹38,000 / room / night (including breakfast & taxes)',
      'Grand Royal Decor: ₹14 Lacs - ₹28 Lacs for 4 ceremonies',
      'Traditional Folk Artistes & Production: ₹4.5 Lacs - ₹8 Lacs',
    ],
  },
  {
    id: 'dest-rajasthan-udaipur',
    slug: 'udaipur-rajasthan',
    name: 'Udaipur, Rajasthan',
    stateOrCountry: 'Rajasthan',
    tagline: 'The Venice of the East — Serene Lakes, Floating Palaces & Timeless Romance',
    description: 'Lake Pichola reflections, jagged Aravalli ranges, and marble fairy-tale palaces make Udaipur one of the world’s most coveted wedding settings for intimate royal ceremonies.',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    ],
    vibe: 'Palatial & Royal',
    avgGuestCount: '80 - 250 Guests',
    estBudgetRange: '₹55 Lacs - ₹1.8 Cr (2 Nights / 100 Guests)',
    bestSeason: 'September to March',
    venues: [
      {
        name: 'The Oberoi Udaivilas',
        type: 'Luxury Lake Palace Resort',
        capacity: '300 Guests',
        highlight: 'Interlocking reflection domes, lakeside promenades, gold leaf frescoes',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Taj Lake Palace',
        type: 'Floating Marble Island Palace',
        capacity: '150 Guests',
        highlight: '18th-century floating palace accessible solely by royal boat',
        image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'The Leela Palace Udaipur',
        type: 'Lakeside Modern Royal Palace',
        capacity: '200 Guests',
        highlight: 'Stunning sunset amphitheatre facing City Palace and Lake Pichola',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
      },
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival via Royal Boats & Twilight Welcome Soirée',
        events: [
          'Chauffeured lake ferry cruise with traditional Shehnai serenades',
          'Lakeside candlelit Sufi & Gazal night with artisanal Rajasthani feasts',
        ],
      },
      {
        day: 'Day 2',
        title: 'Sunlit Poolside Carnival & Pichola Sunset Mandap',
        events: [
          'Vibrant Carnival & Mehndi on palace lawns with traditional puppets',
          'Boat Baraat across Lake Pichola arriving at illuminated floating mandap',
          'Post-wedding fireworks display echoing across the Aravalli hills',
        ],
      },
    ],
    costHighlights: [
      'Lakefront Luxury Rooms: ₹22,000 - ₹55,000 / room / night',
      'Lakefront Phera Decor & Jetty Boat Transfers: ₹18 Lacs - ₹35 Lacs',
      'Heritage Lighting & Pyrotechnics: ₹6 Lacs - ₹12 Lacs',
    ],
  },
  {
    id: 'dest-goa-beach',
    slug: 'goa-beach-weddings',
    name: 'Goa Coastal Shores',
    stateOrCountry: 'Goa',
    tagline: 'Barefoot Luxury, Golden Sand Vows & Coastal Sundowner Magic',
    description: 'Whether North Goa’s vibrant beach clubs or South Goa’s secluded 5-star private lawns, Goa offers relaxed luxury, tropical floral arches, and ocean breeze celebrations under swaying palms.',
    coverImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    ],
    vibe: 'Beachfront & Coastal',
    avgGuestCount: '100 - 250 Guests',
    estBudgetRange: '₹30 Lacs - ₹65 Lacs (2 Nights / 100 Guests)',
    bestSeason: 'November to April (Monsoon: Jun-Aug off-season 25% savings)',
    venues: [
      {
        name: 'The Leela Goa (Cavelossim)',
        type: 'South Goa Beachfront Estate',
        capacity: '400 Guests',
        highlight: '75 acres of lagoon gardens, private beach access, Portuguese heritage decor',
        image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Taj Exotica Resort & Spa (Benaulim)',
        type: '5-Star Mediterranean Oceanfront',
        capacity: '350 Guests',
        highlight: 'Sprawling oceanfront lawns right next to the Arabian Sea surf',
        image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Alila Diwa Goa (Majorda)',
        type: 'Boutique Contemporary Resort',
        capacity: '250 Guests',
        highlight: 'Paddy field infinity pool backdrop and tropical al fresco courtyards',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
      },
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Tropical Sundowner Welcome & Neon Retro Sangeet',
        events: [
          'Coconut water and coastal tapas welcome on the beach lawn',
          'Barefoot sunset cocktails with acoustic musicians',
          'High-energy Bollywood Neon Sangeet with open-air sound and cocktail bar',
        ],
      },
      {
        day: 'Day 2',
        title: 'Pool Foam Party, Golden Hour Beach Pheras & Gala Dinner',
        events: [
          'Tropical floral Haldi with water sprays and live DJ',
          'Sunset beach vows with rustic bamboo floral arch against breaking waves',
          'Seaside gala dinner under fairy-light canopy with coastal seafood BBQ',
        ],
      },
    ],
    costHighlights: [
      '4-5 Star Beach Resort: ₹12,000 - ₹25,000 / room / night',
      'Beachside Coastal Decor (Bohemian Floral & Fairy Lights): ₹10 Lacs - ₹18 Lacs',
      'Sound, DJ & Beach Permits: ₹3.5 Lacs - ₹6 Lacs',
    ],
  },
  {
    id: 'dest-kerala-backwaters',
    slug: 'kerala-backwaters-beach',
    name: 'Kerala Backwaters & Hills',
    stateOrCountry: 'Kerala',
    tagline: 'God’s Own Country — Serene Lagoons, Houseboats & Coconut Grove Vows',
    description: 'Exchange sacred vows amidst tranquil backwaters of Alleppey, beach cliffs of Kovalam, or tea plantation hills of Munnar with authentic Kerala sadhya feasts and traditional brass lamp rituals.',
    coverImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    ],
    vibe: 'Backwaters & Nature',
    avgGuestCount: '60 - 200 Guests',
    estBudgetRange: '₹28 Lacs - ₹52 Lacs (2 Nights / 100 Guests)',
    bestSeason: 'September to March',
    venues: [
      {
        name: 'Kumarakom Lake Resort',
        type: 'Heritage Backwater Resort',
        capacity: '200 Guests',
        highlight: 'Traditional Kerala wood-crafted villas, lotus canals, and private houseboats',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'The Raviz Kovalam',
        type: 'Cliff-Top Beach Resort',
        capacity: '350 Guests',
        highlight: 'Panoramic cliff viewpoints over Arabian Sea with private cove lawns',
        image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80',
      },
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Houseboat Lagoon Cruise & Traditional Chenda Melam Soirée',
        events: [
          'Afternoon houseboat cruise through Alleppey backwater palms',
          'Evening welcome with 15-artiste Chenda Melam drum ensemble and Kathakali',
        ],
      },
      {
        day: 'Day 2',
        title: 'Ayurvedic Haldi & Coconut Grove Mandap Ceremony',
        events: [
          'Organic turmeric & sandalwood Haldi ritual with fresh jasmine garlands',
          'Waterfront mandap decorated with brass vilakku lamps, marigolds and banana stalks',
          'Traditional Grand Kerala Sadhya served on fresh banana leaves',
        ],
      },
    ],
    costHighlights: [
      'Resort Accommodation: ₹11,000 - ₹22,000 / room / night',
      'Backwater Decor & Boat Transfers: ₹8 Lacs - ₹15 Lacs',
      'Traditional Cultural Troupe: ₹2 Lacs - ₹4 Lacs',
    ],
  },
  {
    id: 'dest-jim-corbett',
    slug: 'jim-corbett-himalayas',
    name: 'Jim Corbett & Nainital Foothills',
    stateOrCountry: 'Uttarakhand',
    tagline: 'Riverfront Wild Elegance, Forest Resorts & Mountain Serenity',
    description: 'Escape city hustle for pristine riverbanks of Kosi, sal forest canopies, and jungle luxury lodges. A 5-hour drive from Delhi/NCR offering intimate wilderness weddings under starry skies.',
    coverImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    ],
    vibe: 'Jungle & Mountain',
    avgGuestCount: '100 - 300 Guests',
    estBudgetRange: '₹26 Lacs - ₹45 Lacs (2 Nights / 100 Guests)',
    bestSeason: 'October to May',
    venues: [
      {
        name: 'The Riverview Retreat (Kosi River)',
        type: 'Riverfront Forest Resort',
        capacity: '350 Guests',
        highlight: 'Pebble riverbank lawns, mountain backdrop, wooden chalet cottages',
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Namah Resort Jim Corbett',
        type: 'Luxury Wilderness Property',
        capacity: '250 Guests',
        highlight: 'Overlooking Sitabani forest reserve with expansive lush lawns',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      },
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Forest Welcome, Jeep Safari & Campfire Sangeet',
        events: [
          'Eco-friendly bamboo & wood welcome with local Pahadi sweets',
          'Private afternoon open-jeep forest safari experience for wedding guests',
          'Riverfront bonfire acoustic musical night with barbecue skewers',
        ],
      },
      {
        day: 'Day 2',
        title: 'Botanical Haldi & Kosi Riverbank Sunset Pheras',
        events: [
          'Riverside marigold floral splash Haldi by the gushing Kosi waters',
          'Mountain-facing mandap with wild pampas grass, local pine cones and white orchids',
          'Fairy-light illuminated reception with starry mountain sky views',
        ],
      },
    ],
    costHighlights: [
      'Forest Resort Rooms: ₹9,000 - ₹18,000 / room / night',
      'Rustic Forest Decor & Riverbank Stage: ₹7.5 Lacs - ₹14 Lacs',
      'Guest Shuttles from Delhi/NCR: ₹2.5 Lacs - ₹4.5 Lacs',
    ],
  },
  {
    id: 'dest-thailand-international',
    slug: 'thailand-hua-hin-phuket',
    name: 'Thailand (Hua Hin & Phuket)',
    stateOrCountry: 'International',
    tagline: 'World-Class Hospitality, Exotic Beaches & Luxury Indian Weddings Abroad',
    description: 'Thailand offers exceptional value where a luxury 5-star beachfront wedding often costs comparable to top Indian properties, complete with Indian catering chefs, legal documentation, and tropical vibes.',
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    ],
    vibe: 'Tropical Island',
    avgGuestCount: '80 - 200 Guests',
    estBudgetRange: '₹40 Lacs - ₹80 Lacs (2 Nights / 100 Guests)',
    bestSeason: 'November to April',
    venues: [
      {
        name: 'Sofitel Hua Hin Beach Resort',
        type: 'Colonial 5-Star Beachfront',
        capacity: '300 Guests',
        highlight: 'Experienced in authentic Indian weddings, certified Indian chefs, private beach access',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'JW Marriott Phuket Resort & Spa',
        type: 'Tropical Luxury Oceanfront',
        capacity: '400 Guests',
        highlight: 'Mai Khao beach sunset lawns, dedicated event ballrooms and luxury spa',
        image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80',
      },
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Airport Escorts from Bangkok/Phuket & Tropical Beach Welcome',
        events: [
          'VIP immigration fast-track and luxury coach transfer to Hua Hin/Phuket',
          'Thai-Indian fusion beach party with fire dancers and tropical cocktails',
        ],
      },
      {
        day: 'Day 2',
        title: 'Pool Foam Haldi, Beachfront Baraat & Sunset Mandap',
        events: [
          'Tropical floral pool party with water guns and live dhol players',
          'Vintage open-air beach buggy Baraat along the Andaman coast',
          'Stunning glass mandap over infinity pool with ocean horizon backdrop',
        ],
      },
    ],
    costHighlights: [
      '5-Star Beach Resort: 5,500 - 9,500 THB / room / night',
      'Full Indian Decor & Sound Setup: 400,000 - 800,000 THB',
      'Indian Master Chef Delegation & Spices: 250,000 THB',
    ],
  },
];

export const SERVICES_DATA: WeddingService[] = [
  {
    id: 'serv-destination-scouting',
    slug: 'venue-scouting-recce',
    title: 'Destination & Venue Scouting',
    shortDesc: 'Curating palace, beach and forest properties, organizing recce trips, and negotiating group room contracts with maximum complimentary perks.',
    fullDesc: 'We match your wedding vision, guest demographics, accessibility constraints, and budget with vetted 4-star and 5-star properties across India and abroad. We handle recce itineraries, tariff negotiations, complimentary suite upgrades, and strict contract terms.',
    icon: 'Building2',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      'Customized 15-property comparison grid with real room & banquet tariffs',
      'Organized 2-day on-ground Recce Trip with our senior planner',
      'Contract negotiation for best banquet pricing & alcohol corkage waiver',
      'Room block allocations, rooming list management & attrition protection',
    ],
    process: [
      'Initial Vision & Guest Count Consultation',
      'Shortlist of 5 Vetted Properties Matching Your Budget',
      'Guided On-Ground Recce with General Managers & Chefs',
      'Contract Finalization & Safe Escrow Payment Schedules',
    ],
  },
  {
    id: 'serv-decor-styling',
    slug: 'theme-decor-floral-design',
    title: 'Theme Decor & Spatial Design',
    shortDesc: 'Architectural 2D/3D floor layouts, customized mandap concepts, ambient lighting, and bespoke floral installations.',
    fullDesc: 'No two Devdas weddings look the same. Our in-house Nuptial Artistes conceptualize unique thematic palettes for each function—from royal palace mirror-work to tropical beach driftwood arches and vibrant neon sangeet arenas.',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      '3D photorealistic render of your Mandap, Sangeet Stage & Entrance arches',
      'Itemized bill of decor materials (structural trussing, florals, drapes, lighting)',
      'Customized bridal entry concept, couple seating thrones & photo booths',
      'Complete safety-compliant electrical load management and green generator backup',
    ],
    process: [
      'Moodboard & Color Palette Creation',
      'Physical Swatch & Floral Mockup Presentation',
      'Technical Production Drawing Approval with Venue Engineering',
      'Onsite 36-hour Prior Build Supervision by Devdas Production Leads',
    ],
  },
  {
    id: 'serv-hospitality-logistics',
    slug: 'guest-hospitality-logistics',
    title: 'Guest Hospitality & Airport Logistics',
    shortDesc: 'Airport welcome desks, luxury bus shuttles, luggage tagging, customized room hampers, and dedicated guest concierge desks.',
    fullDesc: 'The guest experience makes a destination wedding truly memorable. We provide uniformed hospitable team members at arrival airports and train stations, manage fleet transfers, coordinate room check-ins without lobby lines, and maintain a 24/7 hospitality desk.',
    icon: 'Car',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      'Flight and train travel tracker for every arriving guest',
      'Welcome desks at airport arrivals with cold towels and refreshments',
      'Luxury 45-seater AC coaches and executive sedans on standby',
      'Pre-keyed room check-in packets, personalized luggage tags and welcome hampers',
      '24/7 Hospitality desk in hotel lobby with doctor-on-call and grooming coordination',
    ],
    process: [
      'Digital Guest RSVP Portal & Itinerary Dispatch',
      'Fleet Booking & Local Driver Route Briefings',
      'Baggage Delivery to Rooms Before Guest Entry',
      'Round-the-Clock Onsite Assistance Desk',
    ],
  },
  {
    id: 'serv-entertainment-artistes',
    slug: 'entertainment-artist-booking',
    title: 'Entertainment & Artiste Management',
    shortDesc: 'Booking celebrity performers, top wedding DJs, folk troupes, live acoustic bands, anchors, and sangeet choreography.',
    fullDesc: 'We curate entertainment that keeps guests energized from sunrise to past midnight. From royal Rajasthani Manganiyar singers and Sufi qawwals to high-octane club DJs, Russian violinists, and professional emcees who know how to engage Indian families.',
    icon: 'Music',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      'Direct artiste booking without middlemen agency markups',
      'Full technical riders (line array sound, stage lighting, backline gear)',
      'Sangeet choreography consultation & family rehearsal coordination',
      'Local folk musicians, Shehnai players, and royal Baraat brass bands',
    ],
    process: [
      'Musical Taste & Audience Preference Profiling',
      'Artiste Availability Check & Fixed Contract Securing',
      'Sound Check & Rehearsal Schedule Execution',
      'Live Event Show-Running & Stage Management',
    ],
  },
  {
    id: 'serv-photography-films',
    slug: 'photography-cinematography',
    title: 'Photography & Cinematic Films',
    shortDesc: 'Direct curation of top candid photographers, traditional documentary teams, drone cinematographers, and same-day teaser editors.',
    fullDesc: 'Wedding memories last a lifetime. We collaborate with premier Indian and international wedding photographers who capture natural emotions, unposed candid laughter, intricate jewelry details, and cinematic short films with color grading.',
    icon: 'Camera',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      'Candid & traditional photography coverage for all ceremonies',
      '4K Drone aerial coverage (subject to local aviation permissions)',
      'Cinematic 3-5 minute wedding trailer & 25-40 minute documentary film',
      'Handcrafted Italian leather-bound printed wedding photo albums',
      'Same-day social media reel delivery for instant sharing',
    ],
    process: [
      'Visual Style Selection (Editorial, Candid, Moody, Golden-Hour)',
      'Shot List Preparation (Mandatory Family Groups & Couple Portraits)',
      'Onsite Dedicated Photo Crew Management',
      'Post-Production & Album Color Correction Review',
    ],
  },
  {
    id: 'serv-catering-consulting',
    slug: 'catering-menu-curation',
    title: 'Catering & Culinary Curation',
    shortDesc: 'Curating cross-cultural multi-cuisine menus, live counter concepts, dessert ateliers, and professional mixologists.',
    fullDesc: 'Food is the cornerstone of every Indian celebration. We work alongside executive hotel chefs to curate authentic regional cuisines—from Marwari Dal Baati Churma and Ker Sangri to Kerala Appams, coastal seafood grills, and European dessert stations.',
    icon: 'Utensils',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      'Comprehensive menu planning for 4 to 6 distinct wedding events',
      'Dietary restriction management (Jain, Vegan, Gluten-Free, Halal)',
      'Signature cocktail menu curation with artisanal mixologists',
      'Food tasting session arrangements and chef briefing sessions',
    ],
    process: [
      'Regional Taste Profiling of Bride & Groom Families',
      'Chef Tasting Session at Venue 4 Weeks Prior',
      'Food Presentation & Live Counter Layout Design',
      'On-Ground Banquet Temperature & Service Quality Audit',
    ],
  },
];

export const REAL_WEDDINGS_DATA: RealWeddingStory[] = [
  {
    id: 'rw-1',
    coupleNames: 'Rohan & Ananya',
    destination: 'Udaipur, Rajasthan',
    venue: 'The Oberoi Udaivilas & Jagmandir Island',
    date: 'February 2026',
    guestCount: '160 Guests',
    coverImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    photos: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    ],
    story: 'Rohan (from London) and Ananya (from Mumbai) dreamed of a fairy-tale lakeside palace wedding. Over 3 days, Devdas Wedding orchestrated 5 distinct celebrations, concluding with an illuminated lotus mandap floating upon Lake Pichola.',
    theme: 'Royal Mewar Heritage in Rose Gold & Ivory',
    highlights: [
      'Boat procession across Lake Pichola for 160 guests',
      'Live Shehnai and Rajasthani puppet artists at welcome lunch',
      'Zero sound restriction violations with silent disco after-party',
    ],
  },
  {
    id: 'rw-2',
    coupleNames: 'Vikram & Natasha',
    destination: 'South Goa',
    venue: 'The Leela Goa (Cavelossim Beach)',
    date: 'January 2026',
    guestCount: '120 Guests',
    coverImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    photos: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    ],
    story: 'A relaxed coastal wedding blending Punjabi energy with Goan beach chic. Guests enjoyed barefoot sunset vows under a driftwood bougainvillea arch, followed by a fire-dance beach carnival.',
    theme: 'Coastal Bohème & Tropical Sunsets',
    highlights: [
      'Sunset pheras on private beach right at low tide',
      'Cocktail hour with artisanal gin and live saxophonist',
      'Full guest transfer fleet from Dabolim Airport handled seamlessly',
    ],
  },
  {
    id: 'rw-3',
    coupleNames: 'Siddharth & Meera',
    destination: 'Jim Corbett, Uttarakhand',
    venue: 'The Riverview Retreat (Kosi Riverbank)',
    date: 'November 2025',
    guestCount: '180 Guests',
    coverImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    photos: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    ],
    story: 'Nature lovers Siddharth and Meera wanted a mountain riverside celebration just a quick drive from Delhi. Devdas designed an organic botanical wedding using local Uttarakhand pine cones, marigolds, and riverbed stone mandap pillars.',
    theme: 'Wilderness Romance & Mountain Woods',
    highlights: [
      'Morning jeep safari organized for 120 guests across Corbett jungle',
      'Riverbank bonfire sangeet with Pahadi folk dancers',
      'Zero plastic decor policy with earthen clay kulhads',
    ],
  },
  {
    id: 'rw-4',
    coupleNames: 'Kabir & Priyanka',
    destination: 'Hua Hin, Thailand',
    venue: 'Sofitel Hua Hin Beach Resort',
    date: 'March 2026',
    guestCount: '130 Guests',
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    photos: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    ],
    story: 'An international celebration bringing families from Delhi and Singapore together. Devdas managed visa assistance, fast-track Bangkok airport transit, and authentic Indian catering by master chefs flown in.',
    theme: 'Tropical Andaman Glamour',
    highlights: [
      'Seamless VIP Bangkok airport transit and luxury coaches',
      'Open-air infinity pool glass mandap facing the ocean',
      'Authentic Punjabi tandoori delicacies prepared by certified Indian chefs in Thailand',
    ],
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    couple: 'Rohan & Ananya Singhania',
    cityOrCountry: 'London, UK / Mumbai',
    weddingLocation: 'Udaipur Palace Wedding (160 Guests)',
    date: 'February 2026',
    rating: 5,
    review: 'Planning a destination wedding in Udaipur while living in London felt daunting until we partnered with Devdas Wedding. Their transparent planning fee model meant no hidden vendor markups. Debarati and the team treated us like family, and the floating Jagmandir mandap took our guests’ breath away.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    photo: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'test-2',
    couple: 'Vikram & Natasha D’Souza',
    cityOrCountry: 'Dubai, UAE',
    weddingLocation: 'The Leela Goa Beachfront (120 Guests)',
    date: 'January 2026',
    rating: 5,
    review: 'Every single guest from Dubai, Canada, and Delhi praised the airport coordination and beach setup. The Devdas team was on-ground 48 hours prior, handling sound permits and beach tides. We did not have to worry about a single detail during our pheras.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    photo: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'test-3',
    couple: 'Dr. Siddharth & Meera Joshi',
    cityOrCountry: 'New Delhi',
    weddingLocation: 'The Riverview Retreat, Jim Corbett (180 Guests)',
    date: 'November 2025',
    rating: 5,
    review: 'The Jim Corbett mountain wedding was perfection. Devdas managed bus convoys from Delhi, room allocations without any hotel lobby waiting, and an unbelievable riverside bonfire sangeet. Highly recommend their bespoke services to any couple looking for genuine luxury.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    photo: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'test-4',
    couple: 'Kabir & Priyanka Thapar',
    cityOrCountry: 'Singapore / New Delhi',
    weddingLocation: 'Hua Hin, Thailand (130 Guests)',
    date: 'March 2026',
    rating: 5,
    review: 'Organizing an international Indian wedding in Thailand requires planners with real overseas experience. Devdas handled Thai immigration, resort negotiation, and made sure my grandmother got her morning Masala Chai exactly on time. Flawless execution!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    photo: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
  },
];

export const BLOG_POSTS_DATA: BlogItem[] = [
  {
    id: 'blog-1',
    slug: 'cost-of-destination-wedding-in-rajasthan',
    title: 'How Much Does a Destination Wedding in Rajasthan Really Cost? (2026 Guide)',
    category: 'Cost Guide',
    author: 'Debarati Chowdhury, Lead Nuptial Artiste',
    date: 'September 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    summary: 'A realistic line-item breakdown of room tariffs, palace banquet charges, heritage decor costs, and logistical expenses for a 2-night royal wedding in Jaipur, Udaipur, or Jodhpur.',
    content: [
      'A destination wedding in Rajasthan is an iconic dream for couples across the globe. However, budget planning requires clarity between palace venue tariffs, mandatory meal plans, and production costs.',
      'For a standard 100-guest, 2-night wedding at a 4-star to 5-star heritage property in Jaipur or Udaipur, the total investment typically spans between ₹45 Lacs to ₹95 Lacs.',
      'Rooms usually consume 45% of the total budget (₹15,000 - ₹30,000 per room per night including breakfast and dinner). Decor and thematic production accounts for roughly 25-30% (₹12 Lacs to ₹25 Lacs across Mehndi, Sangeet, and Pheras). Logistics, photography, DJ, and professional planner fees make up the remainder.',
      'Booking during off-peak windows (such as early October, late February, or mid-March) can yield up to 20-25% savings on room tariffs while maintaining sublime weather.',
    ],
  },
  {
    id: 'blog-2',
    slug: 'goa-beach-wedding-planning-timeline',
    title: 'Planning a Barefoot Luxury Beach Wedding in Goa: Peak Season vs Off-Season',
    category: 'Planning Tips',
    author: 'Mamata Chowdhury, Co-Founder & Financial Advisor',
    date: 'August 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    summary: 'Discover key differences between South Goa private resorts and North Goa lively beaches, coastal weather windows, and beach permission regulations.',
    content: [
      'Goa offers two distinct wedding personalities: South Goa (Cavelossim, Benaulim, Majorda) features quiet luxury beachfronts, private manicured lawns, and 5-star secluded properties. North Goa (Candolim, Morjim) caters to high-energy party crowds and vibrant beach clubs.',
      'Peak season runs from November through February when humidity is low and sea breezes are gentle. For couples seeking value, the shoulder months of October, March, and April offer significant room discounts while preserving glorious sunset backdrops.',
      'Always ensure your wedding planner secures official CRZ (Coastal Regulation Zone) and local panchayat sound permissions well in advance to prevent any midnight music interruptions.',
    ],
  },
  {
    id: 'blog-3',
    slug: 'jim-corbett-destination-wedding-budget-guide',
    title: 'Why Jim Corbett is Emerging as the Top Nature Destination Wedding Hub near Delhi',
    category: 'Venues',
    author: 'Devdas Editorial Panel',
    date: 'July 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    summary: 'Just a 5-hour scenic drive from the National Capital Region, Jim Corbett riverfront properties provide mountain tranquility and forest elegance at exceptional value.',
    content: [
      'Couples based in Delhi, Gurgaon, and Noida are increasingly choosing Jim Corbett over traditional hotel ballrooms. Situated along the pristine Kosi river with sal tree canopies and Himalayan foothills, it offers a complete escape without the hassle of commercial flight bookings.',
      'A 100-guest, 2-night riverfront wedding in Jim Corbett can comfortably be executed between ₹26 Lacs to ₹45 Lacs—offering 30-40% savings compared to royal Rajasthan properties.',
      'Guests can enjoy open-top morning jeep safaris, riverside sundowners with guitarists, and pheras under starlit Himalayan skies.',
    ],
  },
];

export const BLOGS_DATA: BlogItem[] = BLOG_POSTS_DATA;

export const FAQS_DATA: FaqItem[] = [
  {
    q: 'How does Devdas Wedding charge for its wedding planning services?',
    a: 'We operate strictly on a professional planning and coordination fee model starting from ₹4 Lacs for turnkey destination weddings. We do NOT earn commissions or markups from hotel room blocks, caterers, or vendors. All discounts negotiated with hotels and decorators are passed directly 100% to the couple.',
    category: 'Budget & Fee',
  },
  {
    q: 'What is included in your Turnkey Destination Wedding Planning service?',
    a: 'Our turnkey service covers the entire journey: venue scouting, contract and room tariff negotiations, recce accompaniment, theme decor conceptualization, 3D floor plans, guest logistics from airport arrival to departure, luggage tagging, hospitality concierge desks, vendor hiring (photo, video, makeup, sound, DJ), and comprehensive on-ground show-running with 12 to 20 uniformed coordinators.',
    category: 'General',
  },
  {
    q: 'Do you offer services for couples living overseas (NRIs / Expats)?',
    a: 'Yes, over 40% of our couples reside in the UK, USA, Canada, UAE, Singapore, and Australia. We manage the entire planning process remotely through regular Zoom / Google Meet sessions, digital shared planning binders, 3D walkthroughs, and WhatsApp group updates. We also coordinate international travel logistics, guest visas, and airport transfers seamlessly.',
    category: 'General',
  },
  {
    q: 'How early should we start planning our destination wedding?',
    a: 'For popular wedding dates (Aabujh Muhurats in November, December, January, and February), we recommend initiating venue scouting 9 to 12 months in advance to lock prime palace or beach resort dates before tariffs escalate. For monsoon or summer weddings, 5 to 7 months is typically sufficient.',
    category: 'General',
  },
  {
    q: 'Can you help us organize an on-ground Recce Trip before finalizing the venue?',
    a: 'Absolutely. Once we establish your budget and vision, we curate a focused 2-day on-ground Recce Trip. A senior Devdas wedding planner accompanies you to inspect banquet lawns, guest rooms, bridal suites, and kitchen facilities, and introduces you to the hotel’s executive team.',
    category: 'Destinations',
  },
  {
    q: 'What is the estimated starting budget for a 100-guest destination wedding in India?',
    a: 'A 2-night destination wedding for 100 guests typically ranges from ₹26-38 Lacs in Jim Corbett or Nainital, ₹30-55 Lacs in Goa, ₹28-48 Lacs in Kerala, and ₹45-85 Lacs in Rajasthan palace hotels. Our interactive cost estimator gives you a realistic line-by-line budget forecast instantly.',
    category: 'Budget & Fee',
  },
];

export const PACKAGES_DATA = [
  {
    id: 'pkg-turnkey-full',
    name: 'Turnkey Destination Planning & Execution',
    subtitle: 'End-to-End Stress-Free Management from First Sketch to Final Farewell',
    badge: 'Most Popular',
    fee: 'From ₹4.5 Lacs',
    idealFor: 'Couples planning destination weddings in Rajasthan, Goa, Kerala, Corbett, or International venues',
    inclusions: [
      'Venue Scouting, Recce Accompaniment & Contract Negotiation',
      'Theme Decor & Spatial Design (3D Mandap & Sangeet Stage Renders)',
      'Guest Logistics: Flight tracking, airport welcome desks, luxury shuttles',
      'Hospitality Desk: 24/7 lobby concierge, rooming list & key pack management',
      'Artiste & DJ Booking without vendor commission markups',
      '12 to 20 Onsite Coordinators on-ground throughout all ceremonies',
      'Complete vendor coordination (Photo, Video, Makeup, Mehendi, Pandit)',
      'Detailed minute-to-minute run sheets and wedding day timeline management',
    ],
  },
  {
    id: 'pkg-partial-planning',
    name: 'Partial Planning & On-Ground Production',
    subtitle: 'For Couples Who Have Booked Their Venue But Need Expert Decor & Show-Running',
    badge: 'Design & Logistics',
    fee: 'From ₹3.0 Lacs',
    idealFor: 'Couples with finalized hotel contracts who need decor styling, vendor management & event execution',
    inclusions: [
      'Theme Decor Conceptualization & Technical Production Drawings',
      'Decorator Sourcing, Material Auditing & Onsite Fabrication Supervision',
      'Sound, Lighting & DJ Setup Management (Sound clearance & licensing)',
      'Onsite Coordination Team (8 to 12 members) during wedding days',
      'Baraat, Varmala & Phera ceremony show-running',
      'Vendor management and timeline adherence on event days',
    ],
  },
  {
    id: 'pkg-consultation-diy',
    name: 'Destination Wedding Consulting & Advisory',
    subtitle: 'Expert Professional Direction for DIY Couples',
    badge: 'Advisory Package',
    fee: 'From ₹75,000',
    idealFor: 'Couples wanting professional guidance, budget classification, and vendor shortlists without onsite management',
    inclusions: [
      'Four 90-minute 1-on-1 strategy sessions with Lead Nuptial Artiste',
      'Curated 10-property venue comparison grid with negotiated rates',
      'Master Budget Sheet & Line-Item Cost Allocation Model',
      'Vetted vendor contact list (Photographers, Makeup Artists, Decorators)',
      'Master Planning Checklist & Ceremony Protocol Templates',
    ],
  },
];

export const DEVDAS_WEBSITE: BusinessWebsite = {
  id: 'site-devdas-68',
  slug: '68-devdas-wedding',
  templateId: 'luxury_destination_wedding_portal',
  businessName: DEVDAS_CONFIG.brandName,
  tagline: DEVDAS_CONFIG.tagline,
  description: 'Premier luxury destination wedding planner in India and worldwide. Bespoke celebrations across royal Rajasthan palaces, Goa beach shores, Kerala backwaters, and Jim Corbett wilderness lodges.',
  category: 'wedding_event_planning',
  ownerName: 'Debarati & Mamata Chowdhury (Founders & Nuptial Artistes)',
  phone: DEVDAS_CONFIG.phonePrimary,
  whatsapp: DEVDAS_CONFIG.whatsapp,
  email: DEVDAS_CONFIG.email,
  address: DEVDAS_CONFIG.offices[0].address,
  city: 'New Delhi & Gurgaon',
  mapsUrl: 'https://maps.google.com/?q=DLF+Corporate+Greens+Gurgaon',
  openingHours: 'Mon - Sun: 9:30 AM - 8:00 PM',
  primaryColor: '#7A1C30',
  secondaryColor: '#D4AF37',
  logoUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=200&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
  bookingType: 'consultation_quote',
  bookingCtaLabel: 'View Project',
  specialBadge: 'Project #68 · Luxury Destination Wedding Planners',
  status: 'published',
  pricingPlanId: 'professional',
  amountPaid: 0,
  paymentStatus: 'paid',
  sections: [
    { id: 'top-bar', title: 'Contact Strip & Regional Offices', isEnabled: true, order: 1 },
    { id: 'navbar', title: 'Main Navigation & Destinations Mega Menu', isEnabled: true, order: 2 },
    { id: 'hero', title: 'Grand Royal Wedding Slide Carousel', isEnabled: true, order: 3 },
    { id: 'intro', title: 'Why Devdas Wedding Narrative & Values', isEnabled: true, order: 4 },
    { id: 'destinations', title: 'Top Wedding Destinations Showcase', isEnabled: true, order: 5 },
    { id: 'services', title: 'Turnkey Wedding Planning Services', isEnabled: true, order: 6 },
    { id: 'calculator', title: 'Interactive Destination Wedding Cost Estimator', isEnabled: true, order: 7 },
    { id: 'packages', title: 'Transparent Planning Fees & Packages', isEnabled: true, order: 8 },
    { id: 'gallery', title: 'Real Weddings & Decor Photo Lightbox', isEnabled: true, order: 9 },
    { id: 'testimonials', title: 'Client Reviews & Couple Experiences', isEnabled: true, order: 10 },
    { id: 'team', title: 'Nuptial Artistes & Creative Leadership', isEnabled: true, order: 11 },
    { id: 'blog', title: 'Wedding Guides & Cost Breakdowns', isEnabled: true, order: 12 },
    { id: 'faq', title: 'Frequently Asked Questions', isEnabled: true, order: 13 },
    { id: 'inquiry', title: 'Consultation Booking Form', isEnabled: true, order: 14 },
    { id: 'footer', title: 'Multi-Column Footnotes & Offices', isEnabled: true, order: 15 },
  ],
  offers: [
    {
      id: 'offer-early-bird',
      title: 'Complimentary Wedding Recce Accompaniment',
      description: 'Book our turnkey planning service for winter 2026-27 and receive a 2-day on-ground venue recce with our lead planner complimentary.',
      discountPercent: 15,
      couponCode: 'RECCE2026',
      isActive: true,
    },
  ],
  gallery: [
    {
      id: 'gal-devdas-1',
      title: 'Udaipur Lotus Pond Floating Mandap',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'gal-devdas-2',
      title: 'Sunset Goa Beachfront Vows',
      category: 'facilities',
      imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'gal-devdas-3',
      title: 'Jaipur Samode Palace Heritage Baraat',
      category: 'team',
      imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    },
  ],
  items: [
    {
      id: 'item-turnkey-planning',
      name: 'Turnkey Destination Wedding Planning',
      description: 'Complete 360-degree planning, venue contracting, decor production & onsite coordination.',
      price: 450000,
      category: 'Packages',
      isAvailable: true,
      isFeatured: true,
      badge: 'Popular',
    },
    {
      id: 'item-decor-styling',
      name: 'Bespoke Theme Decor & Floral Design',
      description: '3D spatial design, mandap architecture, floral installations & sangeet stage build.',
      price: 300000,
      category: 'Design',
      isAvailable: true,
      isFeatured: true,
      badge: 'Signature',
    },
  ],
};
