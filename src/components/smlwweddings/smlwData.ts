export interface SMLWVenue {
  id: string;
  name: string;
  slug: string;
  city: string;
  country: string;
  category: 'Luxury' | 'Palace' | 'Beachfront' | 'Heritage' | 'Hilltop';
  guestMax: number;
  areasCount: number;
  priceStartingLakhs: number;
  featuredImage: string;
  rating: number;
  reviewsCount: number;
  description: string;
  highlights: string[];
  domestic: boolean;
}

export interface SMLWDestination {
  id: string;
  name: string;
  slug: string;
  country: string;
  type: 'domestic' | 'international';
  image: string;
  venuesCount: number;
  tagline: string;
  description: string;
}

export interface SMLWWeddingType {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  recommendedDestinations: string[];
}

export interface SMLWTestimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  location?: string;
  rating: number;
}

export interface SMLWVideo {
  id: string;
  title: string;
  couple: string;
  location: string;
  thumbnail: string;
  youtubeId: string;
  duration: string;
}

export interface SMLWService {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  deliverables: string[];
}

export interface SMLWFAQ {
  question: string;
  answer: string;
}

export const SMLW_DOMESTIC_DESTINATIONS: SMLWDestination[] = [
  {
    id: 'dest-delhi',
    name: 'Delhi NCR',
    slug: 'delhi',
    country: 'India',
    type: 'domestic',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&auto=format&fit=crop&q=80',
    venuesCount: 85,
    tagline: 'Capital Grandeur, Royal Farmhouses & Iconic Palaces',
    description: 'From sprawling Chattarpur and Kapashera farmhouses to 5-star palatial ballrooms in Lutyens Delhi and Gurugram, Delhi NCR offers grand scale and royal hospitality.'
  },
  {
    id: 'dest-jaipur',
    name: 'Jaipur',
    slug: 'jaipur',
    country: 'India',
    type: 'domestic',
    image: 'https://images.unsplash.com/photo-1609137144822-4467571f5ce0?w=800&auto=format&fit=crop&q=80',
    venuesCount: 65,
    tagline: 'The Pink City of Maharajas & Fort Weddings',
    description: 'Immerse your guests in centuries of regal heritage at Rambagh Palace, Jai Mahal, and historic hilltop havelis adorned in marigold and royal fireworks.'
  },
  {
    id: 'dest-udaipur',
    name: 'Udaipur',
    slug: 'udaipur',
    country: 'India',
    type: 'domestic',
    image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?w=800&auto=format&fit=crop&q=80',
    venuesCount: 50,
    tagline: 'City of Lakes & Floating Fairytale Palaces',
    description: 'Lake Pichola’s glittering waters, Jagmandir Island, and The Oberoi Udaivilas offer India’s most celebrated romantic backdrop for celebrity and royal weddings.'
  },
  {
    id: 'dest-goa',
    name: 'Goa',
    slug: 'goa',
    country: 'India',
    type: 'domestic',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80',
    venuesCount: 75,
    tagline: 'Sun-Kissed Golden Sands & Sunset Beach Mandaps',
    description: 'Exchange vows with the Arabian Sea lapping at your feet, followed by vibrant barefoot sangeet carnivals and luxury seaside resort hospitality.'
  },
  {
    id: 'dest-mumbai',
    name: 'Mumbai',
    slug: 'mumbai',
    country: 'India',
    type: 'domestic',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&auto=format&fit=crop&q=80',
    venuesCount: 60,
    tagline: 'Glamour, Arabian Sea Harbors & Luxury 5-Stars',
    description: 'High-society luxury weddings overlooking Marine Drive, Juhu beachfronts, and majestic banquet ballrooms with celebrity chef dining.'
  },
  {
    id: 'dest-bangalore',
    name: 'Bengaluru',
    slug: 'bengaluru',
    country: 'India',
    type: 'domestic',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&auto=format&fit=crop&q=80',
    venuesCount: 45,
    tagline: 'Garden City Luxury Resorts & Heritage Mansions',
    description: 'Bespoke courtyard celebrations, lush Palace grounds, and world-class luxury retreat hotels amidst Bangalore’s temperate weather.'
  },
  {
    id: 'dest-mussoorie',
    name: 'Mussoorie / Dehradun',
    slug: 'mussoorie',
    country: 'India',
    type: 'domestic',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&auto=format&fit=crop&q=80',
    venuesCount: 30,
    tagline: 'Misty Himalayan Peaks & Romantic Pine Groves',
    description: 'Say “I Do” surrounded by clouds, mountain vistas, crisp pine-scented air, and heritage colonial hillside estates in the Queen of the Hills.'
  }
];

export const SMLW_INTERNATIONAL_DESTINATIONS: SMLWDestination[] = [
  {
    id: 'dest-thailand',
    name: 'Thailand (Phuket & Hua Hin)',
    slug: 'thailand',
    country: 'Thailand',
    type: 'international',
    image: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&auto=format&fit=crop&q=80',
    venuesCount: 40,
    tagline: 'Pristine Andaman Coasts & World-Renowned Hospitality',
    description: 'India’s favorite international wedding haven: private white-sand beach coves, dramatic clifftop infinity pools, and lavish Indian catering support.'
  },
  {
    id: 'dest-dubai',
    name: 'Dubai & UAE',
    slug: 'dubai',
    country: 'United Arab Emirates',
    type: 'international',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop&q=80',
    venuesCount: 50,
    tagline: 'Ultra-Luxury Skylines, Desert Dunes & Island Resorts',
    description: 'Host unmatched opulence at Palm Jumeirah beach resorts, private desert royal fortress banquets, and futuristic luxury hotels with 2-hour flight connectivity.'
  },
  {
    id: 'dest-bali',
    name: 'Bali (Indonesia)',
    slug: 'bali',
    country: 'Indonesia',
    type: 'international',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop&q=80',
    venuesCount: 35,
    tagline: 'Tropical Cliff-Edge Water Temples & Lush Jungles',
    description: 'Unforgettable Uluwatu clifftop water-stage mandaps, sacred jungle river valleys in Ubud, and romantic candlelit beachfront celebrations.'
  },
  {
    id: 'dest-malaysia',
    name: 'Malaysia (Langkawi)',
    slug: 'malaysia',
    country: 'Malaysia',
    type: 'international',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&auto=format&fit=crop&q=80',
    venuesCount: 25,
    tagline: 'Emerald Rainforests & Secluded Island Coves',
    description: 'Spectacular luxury beachfront retreats framed by million-year-old rainforests, calm turquoise waters, and seamless luxury guest transfers.'
  },
  {
    id: 'dest-italy',
    name: 'Italy (Lake Como & Tuscany)',
    slug: 'italy',
    country: 'Italy',
    type: 'international',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&auto=format&fit=crop&q=80',
    venuesCount: 20,
    tagline: 'Renaissance Villas, Cypress Hills & Lakefront Glamour',
    description: 'The pinnacle of global romantic grandeur: historic Roman estates, rolling Chianti vineyards, and lakeside Riva boat arrivals.'
  },
  {
    id: 'dest-greece',
    name: 'Greece (Santorini & Athens)',
    slug: 'greece',
    country: 'Greece',
    type: 'international',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&auto=format&fit=crop&q=80',
    venuesCount: 18,
    tagline: 'Whitewashed Calderas, Cobalt Domes & Aegean Sunsets',
    description: 'Iconic clifftop amphitheaters, panoramic sunset vistas over the Aegean Sea, and bespoke European fine dining for intimate destination weddings.'
  }
];

export const SMLW_VENUES: SMLWVenue[] = [
  {
    id: 'venue-leela-delhi',
    name: 'The Leela Palace, New Delhi',
    slug: 'the-leela-palace-new-delhi',
    city: 'Delhi NCR',
    country: 'India',
    category: 'Luxury',
    guestMax: 500,
    areasCount: 5,
    priceStartingLakhs: 35,
    featuredImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80',
    rating: 4.9,
    reviewsCount: 142,
    description: 'Diplomatic Enclave landmark boasting hand-woven Murano glass chandeliers, royal Rajput-Mughal architectural motifs, gold-leaf ceilings, and immaculate ballroom banquets.',
    highlights: ['Grand Ballroom with Private Pre-Function Foyer', 'Rooftop Infinity Pool for Sangeet Cocktails', 'Master Chefs from Jamavar for Royal Banqueting', 'Dedicated 24/7 Butler Service for Bridal Entourage'],
    domestic: true
  },
  {
    id: 'venue-westin-goa',
    name: 'The Westin Goa',
    slug: 'the-westin-goa',
    city: 'Goa',
    country: 'India',
    category: 'Beachfront',
    guestMax: 300,
    areasCount: 5,
    priceStartingLakhs: 28,
    featuredImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80',
    rating: 4.8,
    reviewsCount: 118,
    description: 'Serene coastal paradise near Anjuna with lush emerald lawns, tropical outdoor gazebos, and luxury suites tailored for 3-day destination beach weddings.',
    highlights: ['Private Sunset Lawn overlooking Beachfront', 'Outdoor Cabana Poolside Cocktail Arena', 'Bespoke Seafood & Coastal Fusion Menus', 'Sound-Curfew Exempt Indoor Afterparty Lounge'],
    domestic: true
  },
  {
    id: 'venue-udaivilas',
    name: 'The Oberoi Udaivilas, Udaipur',
    slug: 'the-oberoi-udaivilas-udaipur',
    city: 'Udaipur',
    country: 'India',
    category: 'Palace',
    guestMax: 350,
    areasCount: 30,
    priceStartingLakhs: 65,
    featuredImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80',
    rating: 5.0,
    reviewsCount: 220,
    description: 'Voted World’s Best Hotel repeatedly. Sprawled over 50 acres on the banks of Lake Pichola with interconnecting reflection pools, Mewar domes, and private boat baraat arrivals.',
    highlights: ['Private Boat Jetty for Majestic Groom Baraat', 'Domed Promontory overlooking Lake Palace', 'Peacock Lawns with 200-Year-Old Banyan Trees', 'Unrivaled Oberoi Royal Hospitality Protocol'],
    domestic: true
  },
  {
    id: 'venue-amarvilas',
    name: 'The Oberoi Amarvilas, Agra',
    slug: 'the-oberoi-amarvilas-agra',
    city: 'Agra',
    country: 'India',
    category: 'Palace',
    guestMax: 300,
    areasCount: 9,
    priceStartingLakhs: 45,
    featuredImage: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&auto=format&fit=crop&q=80',
    rating: 4.9,
    reviewsCount: 135,
    description: 'Located just 600 meters from the Taj Mahal. Every room and terrace enjoys an unobstructed view of the Monument of Love, framed by Mughal terraced lawns, fountains, and stone colonnades.',
    highlights: ['Direct Unobstructed Taj Mahal Sunset Views', 'Mughal Water Terraces & Torchlit Courtyards', 'Royal Buggy Transfers to Taj Monument', 'Grand Kohinoor Ballroom with Crystal Sconces'],
    domestic: true
  },
  {
    id: 'venue-taj-malabar',
    name: 'Taj Malabar Resort & Spa, Kochi',
    slug: 'taj-malabar-resort-spa-kochi',
    city: 'Kochi, Kerala',
    country: 'India',
    category: 'Beachfront',
    guestMax: 300,
    areasCount: 6,
    priceStartingLakhs: 25,
    featuredImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=80',
    rating: 4.8,
    reviewsCount: 94,
    description: 'Historic British-colonial island property on Willingdon Island overlooking Cochin harbor with passing luxury ships, dolphin bays, and coconut-palm shores.',
    highlights: ['Sunset Yacht Cruise Sangeet Transfers', 'Harbor-Facing Green Lawns under Starry Skies', 'Traditional Kerala Sadhya & Seafood Coastal Spread', 'Jiva Ayurvedic Spa Rituals for Bride & Groom'],
    domestic: true
  },
  {
    id: 'venue-taj-falaknuma',
    name: 'Taj Falaknuma Palace, Hyderabad',
    slug: 'taj-falaknuma-palace-hyderabad',
    city: 'Hyderabad',
    country: 'India',
    category: 'Palace',
    guestMax: 200,
    areasCount: 32,
    priceStartingLakhs: 75,
    featuredImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80',
    rating: 5.0,
    reviewsCount: 160,
    description: 'The former palace of the Nizam of Hyderabad, perched 2,000 feet above the city. Features horse-drawn carriages, rose-petal showers, Italian marble staircases, and 101-seat dining hall.',
    highlights: ['Grand Horse-Drawn Royal Carriage Procession', '101-Seater World’s Longest Dining Table', 'Gol Bungalow Clifftop Terrace for Varmala', 'Authentic Hyderabadi Royal Nizami Feasts'],
    domestic: true
  },
  {
    id: 'venue-rambagh-jaipur',
    name: 'Rambagh Palace, Jaipur',
    slug: 'rambagh-palace-jaipur',
    city: 'Jaipur',
    country: 'India',
    category: 'Heritage',
    guestMax: 600,
    areasCount: 47,
    priceStartingLakhs: 80,
    featuredImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800&auto=format&fit=crop&q=80',
    rating: 5.0,
    reviewsCount: 310,
    description: 'The Jewel of Jaipur. The former residence of the Maharaja of Jaipur, featuring 47 acres of Mughal gardens, dancing peacocks, and hand-carved marble jalis.',
    highlights: ['Elephant & Camel Royal Guard of Honor', 'Jaigarh & Oriental Lawns for 600+ Guests', 'Vintage Rolls-Royce Transfers for the Couple', 'Historical Suvarna Mahal Royal Dining'],
    domestic: true
  },
  {
    id: 'venue-grand-hyatt-dubai',
    name: 'Grand Hyatt Dubai & Palm Retreats',
    slug: 'grand-hyatt-dubai',
    city: 'Dubai',
    country: 'UAE',
    category: 'Luxury',
    guestMax: 800,
    areasCount: 12,
    priceStartingLakhs: 55,
    featuredImage: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&auto=format&fit=crop&q=80',
    rating: 4.9,
    reviewsCount: 175,
    description: 'Opulent Arabian Gulf beachfront resort with pillarless mega-ballrooms, private palm gardens, and certified master Indian wedding culinary squads.',
    highlights: ['Baniyas Pillarless Ballroom for 800 Guests', 'Beachfront Mandap overlooking Dubai Marina Skyline', 'Zero-Duty Shopping & VIP Airport Group Escorts', 'Multi-day Sangeet & Afterparty Sound Licensing'],
    domestic: false
  }
];

export const SMLW_WEDDING_TYPES: SMLWWeddingType[] = [
  {
    id: 'type-fort',
    title: 'Fort Wedding',
    subtitle: 'Century-Old Ramparts & Royal Feasts',
    image: 'https://images.unsplash.com/photo-1609137144822-4467571f5ce0?w=800&auto=format&fit=crop&q=80',
    description: 'Celebrate your love in regal style at a historic fort. Imagine exchanging vows in a centuries-old fortress, surrounded by ancient Rajputana architecture, torchlit ramparts, and panoramic canyon views.',
    recommendedDestinations: ['Jaipur (Nahargarh & Jaigarh)', 'Alwar (Neemrana Fort)', 'Jodhpur (Mehrangarh Area)', 'Gwalior']
  },
  {
    id: 'type-hills',
    title: 'Hills Wedding',
    subtitle: 'Mountain Panoramas & Pine Whispers',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&auto=format&fit=crop&q=80',
    description: 'Picture saying your vows amidst breathtaking Himalayan mountain views, misty valleys, and lush pine greenery. A serene, intimate, and romantic celebration tailored to your dreams.',
    recommendedDestinations: ['Mussoorie', 'Shimla', 'Kasauli', 'Dehradun Valley', 'Manali']
  },
  {
    id: 'type-beach',
    title: 'Beach Wedding',
    subtitle: 'Sunset Mandap with Golden Ocean Sands',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80',
    description: 'Imagine saying “I do” with the ocean waves as your backdrop and gentle sand beneath your feet. We bring dream coastal celebrations to life with personalized floral mandaps and beachfront sangeet carnivals.',
    recommendedDestinations: ['Goa (North & South)', 'Phuket (Thailand)', 'Hua Hin', 'Bali (Indonesia)', 'Kovalam']
  },
  {
    id: 'type-backwater',
    title: 'Backwater Wedding',
    subtitle: 'Emerald Lagoons & Decorated Houseboats',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=80',
    description: 'Book stunning destination backwater venues in God’s Own Country. Glide on floral-draped luxury kettuvallam houseboats across tranquil waterways surrounded by swaying coconut palms.',
    recommendedDestinations: ['Kumarakom', 'Alleppey', 'Kochi Harbor', 'Bekal']
  },
  {
    id: 'type-cruise',
    title: 'Cruise Wedding',
    subtitle: 'High-Seas Luxury & Endless Ocean Horizon',
    image: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&auto=format&fit=crop&q=80',
    description: 'Sail into your happily-ever-after aboard luxury private cruise liners. Stunning open ocean seascapes, onboard ballrooms, casino nights, and cherished memories for a lifetime.',
    recommendedDestinations: ['Mumbai to Goa Liner', 'Singapore-Malaysia Cruise', 'Dubai Marina Yacht Fleet', 'Mediterranean Cruise']
  },
  {
    id: 'type-palace',
    title: 'Palace Wedding',
    subtitle: 'Mewar Domes, Royal Courts & Peacocks',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80',
    description: 'The pinnacle of global wedding luxury. Walk down aisles paved in Italian marble, receive rose-petal showers from palace battlements, and dine like royalty under chandeliers.',
    recommendedDestinations: ['Udaipur (Udaivilas / City Palace)', 'Jaipur (Rambagh Palace)', 'Jodhpur (Umaid Bhawan)', 'Hyderabad (Falaknuma)']
  }
];

export const SMLW_SERVICES: SMLWService[] = [
  {
    id: 'srv-planning',
    title: 'Destination Wedding Planning',
    shortDesc: 'End-to-end wedding design, budgeting, venue contracting, and timeline orchestration.',
    fullDesc: 'From selecting the dream destination to managing guest RSVPs, charter flights, room blocks, and minute-by-minute day-of-event execution.',
    icon: 'Compass',
    deliverables: ['Destination Feasibility & Site Inspection Trips', 'Negotiated Venue & Room-Block Contracts', 'Comprehensive Master Budget Tracking', 'Master Production Rundown & Call Sheets']
  },
  {
    id: 'srv-decor',
    title: 'Wedding Design & Décor',
    shortDesc: 'Bespoke mandaps, stage thematic architecture, lighting design, and floral styling.',
    fullDesc: '3D spatial renders transformed into reality. Exquisite floral sourcing, architectural trussing, mood lighting, and curated tablescapes.',
    icon: 'Sparkles',
    deliverables: ['Custom 3D Concept Renders & Moodboards', 'Architectural Mandap & Sangeet Stages', 'Imported & Indigenous Fresh Floral Curation', 'Intelligent Lighting & Spatial Soundscapes']
  },
  {
    id: 'srv-hospitality',
    title: 'Hospitality & Guest Management',
    shortDesc: 'White-glove airport greetings, bespoke luggage tags, RSVP tracking, and hotel concierges.',
    fullDesc: 'Your guests are treated like royalty. Dedicated hospitality desks at airports and hotels, customized welcome hampers, and 24/7 guest helpline support.',
    icon: 'HeartHandshake',
    deliverables: ['VIP Airport & Railway Welcome Desks', 'Branded Welcome Hampers & Itinerary Booklets', 'Digital RSVP & Dietary Preference App', '24x7 In-Hotel Guest Helpdesk & Concierge']
  },
  {
    id: 'srv-entertainment',
    title: 'Entertainment & Artist Management',
    shortDesc: 'Top Bollywood playback singers, live Sufi bands, celebrity DJs, and international performers.',
    fullDesc: 'Direct curation and backstage management of leading musical talent, choreographers for couple sangeets, and world-class stage acts.',
    icon: 'Music',
    deliverables: ['Bollywood Celebrity & A-List Artist Bookings', 'Live Sufi, Folk & Symphony Orchestras', 'Celebrity Sangeet Choreographers', 'Spectacular Pyro, Cold-Sparks & Aerial Acts']
  },
  {
    id: 'srv-production',
    title: 'Wedding Production & Technical Services',
    shortDesc: 'State-of-the-art concert-grade trussing, Line Array audio, high-definition LED walls, and pyrotechnics.',
    fullDesc: 'Flawless technical precision. Acoustic modeling, backup power generation, fire-safety compliance, and weatherproof structures.',
    icon: 'ShieldCheck',
    deliverables: ['Concert-Grade Line Array Sound Systems', 'Custom Curved P3 & P2 LED Visual Walls', 'Licensed Cold-Spark & Fog Special Effects', 'Redundant Silent Diesel Power Generation']
  },
  {
    id: 'srv-logistics',
    title: 'Vendor & Event Management',
    shortDesc: 'Master coordination across catering, bridal makeup, wedding cinema, and government licenses.',
    fullDesc: 'One unified point of accountability. We audit and manage all 30+ wedding vendors, ensure dietary compliance, and handle police, excise, and music permissions.',
    icon: 'Clock',
    deliverables: ['Music & Excise License Procurement (PPL/IPRS)', 'Catering & Menu Tasting Audits', 'Bridal Stylist & Photography Liaison', 'Post-Event Inventory & Reconciliation']
  }
];

export const SMLW_TESTIMONIALS: SMLWTestimonial[] = [
  {
    id: 'test-arjun',
    quote: "I absolutely loved working with Shubh Muhurat Luxury Weddings for our distinct theme. You have such a great ability to turn thoughts and ideas into a reality. When I first decided to have the services I was a little bit worried about planning it from Mumbai and arriving into Delhi the week before, however your team's communication and organization couldn't have been better and felt so relieved to be in such capable hands with literally nothing to worry about! Thank you so much! Lots of love.",
    name: 'Arjun Rampal',
    role: 'Film Actor',
    location: 'Mumbai / Delhi',
    rating: 5
  },
  {
    id: 'test-geetika',
    quote: "We had the most incredible day! So grateful to everyone who played a part! So a big thanks to you for calming me down and helping me make decisions! Best wedding planner ever! Lucky couples that get your full services. It was a holistic gratification as you aptly catered to fantastic Décor, Entertainment, Catering and hospitality!",
    name: 'Ms Geetika Wahal',
    role: 'Bollywood Screenwriter (Ramleela & Toilet: Ek Prem Katha)',
    location: 'Mumbai',
    rating: 5
  },
  {
    id: 'test-suman',
    quote: "Dearest Shubh Muhurat, We love what you do! You’re very good at it. Thank you so much for all your tireless work leading up to our wedding and during. So much fun! The wedding was amazing, one we will cherish forever. A surprise-free, seamless experience! You were a huge part of our special moments.",
    name: 'Mr. Suman Bindal',
    role: 'Managing Director, Vimal Diamonds Group',
    location: 'New Delhi',
    rating: 5
  },
  {
    id: 'test-vivek',
    quote: "Thank you seems so inadequate for the amazing job you did at NiteshKunj, Gurgaon. It was really phenomenal to receive one-stop solutions: Wedding Venue, Catering, Décor, Hospitality and Entertainment. You had everything running like clockwork and I didn’t have to worry about a thing.",
    name: 'Vivek Chaudhry',
    role: 'IAS Officer',
    location: 'Gurugram',
    rating: 5
  },
  {
    id: 'test-pilot',
    quote: "Congratulations on running such a successful wedding. Everything went perfectly – Theme was brilliant, the music great, and the decor spectacular. 325 guests, all were thoroughly impressed. Your positive spirit throughout the whole preparation period set a tone which melted away tension.",
    name: 'Capt. Kamalkant',
    role: 'Senior Commander / Pilot, International Airlines',
    location: 'Delhi NCR',
    rating: 5
  },
  {
    id: 'test-yasmin',
    quote: "It’s not very often that you come across a team who blows you away in terms of what they can deliver. For us, this was exactly the case with SMLW. A quick video consultation later, I knew I had found the right team for our Dubai & Udaipur wedding. It was faultless!",
    name: 'Yasmin Haque',
    role: 'Private Client',
    location: 'Dubai, UAE',
    rating: 5
  }
];

export const SMLW_VIDEOS: SMLWVideo[] = [
  {
    id: 'vid-1',
    title: 'Royal Mewar Palace Extravaganza',
    couple: 'Anuj & Parul',
    location: 'The Leela Palace, New Delhi',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80',
    youtubeId: 'RAY3VdByb_s',
    duration: '4:20'
  },
  {
    id: 'vid-2',
    title: 'Fairytale Sunset Vows on Lake Pichola',
    couple: 'Mihir & Ami',
    location: 'The Oberoi Udaivilas, Udaipur',
    thumbnail: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop&q=80',
    youtubeId: '6Di1X27NHrQ',
    duration: '5:45'
  },
  {
    id: 'vid-3',
    title: 'Barefoot Beach Sangeet Carnival',
    couple: 'Natalia & Utsav',
    location: 'W Goa Beachfront, Goa',
    thumbnail: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&auto=format&fit=crop&q=80',
    youtubeId: 'ObIKGT8MlUs',
    duration: '3:50'
  },
  {
    id: 'vid-4',
    title: 'Tropical Clifftop Love Story',
    couple: 'Jassie & Kelle',
    location: 'Rayavadee Krabi, Thailand',
    thumbnail: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800&auto=format&fit=crop&q=80',
    youtubeId: 'CICJuM-F6GY',
    duration: '6:10'
  },
  {
    id: 'vid-5',
    title: 'Rajputana Heritage Grandeur',
    couple: 'Mayur & Juhi',
    location: 'Rambagh Palace, Jaipur',
    thumbnail: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?w=800&auto=format&fit=crop&q=80',
    youtubeId: 'S-gXG03_thM',
    duration: '4:55'
  },
  {
    id: 'vid-6',
    title: 'Misty Himalayan Haldi & Mehendi',
    couple: "Isha's Haldi Carnival",
    location: 'JW Marriott Walnut Grove, Mussoorie',
    thumbnail: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&auto=format&fit=crop&q=80',
    youtubeId: 'zNwcRptiec0',
    duration: '3:30'
  }
];

export const SMLW_FAQS: SMLWFAQ[] = [
  {
    question: 'Why do I need a professional Destination Wedding Planner?',
    answer: 'A destination wedding involves managing venue negotiations in unfamiliar locations, group travel logistics for hundreds of guests, multi-state or international vendor curation, local government sound and liquor permits, and seamless minute-by-minute execution. SMLW brings 15+ years of verified palace and luxury hotel relationships, saving you up to 25% on venue costs while giving your family total peace of mind to enjoy the celebration.'
  },
  {
    question: 'How much does your wedding planning service cost?',
    answer: 'Our professional planning fee is tailored to the scale, destination, and guest size of your wedding. We operate with 100% financial transparency: hotel contracts and vendor quotes are directly shared with zero hidden markups. We frequently save our clients more than our fee through our preferred institutional partner rates.'
  },
  {
    question: 'What is included in SMLW’s end-to-end wedding planning services?',
    answer: 'Our comprehensive scope includes: (1) Destination & Venue shortlisting with escorted site inspections, (2) Customized 3D decor concept designs and floral styling, (3) Hospitality & guest RSVP management including airport pickups, (4) Food & beverage curation with master chef tastings, (5) A-list celebrity and artist bookings, (6) Technical production and licensing, and (7) Dedicated onsite wedding directors for the entire 3 days.'
  },
  {
    question: 'What are the key benefits of hosting a Destination Wedding?',
    answer: 'Destination weddings turn a rushed one-evening reception into an unforgettable 3-day holiday where both families genuinely bond. You get picturesque backdrops for life-long photographs (palaces, beaches, or hill valleys), intimate quality time with cherished loved ones, and often lower total guest count with elevated per-guest luxury experience.'
  },
  {
    question: 'Do you offer customizable wedding packages?',
    answer: 'Yes! Every couple has a distinct vision. Whether you require full turnkey planning from day one, bespoke decor styling only, or specific coordination for an international destination like Thailand or Dubai, we tailor our involvement to your exact requirements.'
  },
  {
    question: 'Can you assist with managing and optimizing our wedding budget?',
    answer: 'Budget engineering is our cornerstone. We establish a realistic master budget spreadsheet on day one, allocate percentages across venue, food, decor, and entertainment, identify high-impact cost optimizations, and audit vendor invoices to ensure you never face unexpected budget blowouts.'
  },
  {
    question: 'How many team members from SMLW will be present on-site?',
    answer: 'For a 200–300 guest luxury destination wedding, we deploy a team of 15 to 25 dedicated professionals on-site. This includes specialized directors for: Guest Logistics & Airport Transfers, Bridal Shadow & VIP Entourage, Decor & Technical Quality Control, and Banquet & Timeline Coordination.'
  },
  {
    question: 'How do you handle rainy or inclement weather on the wedding day?',
    answer: 'We prepare Plan-B protocols for every outdoor event. When designing outdoor mandaps or lawn sangeets, we simultaneously secure an approved indoor banquet or waterproof German canopy infrastructure. Our technical teams monitor Doppler weather forecasts hourly and can execute seamless relocations in under 90 minutes without disrupting the event flow.'
  },
  {
    question: 'What happens if there are last-minute emergencies or changes on the wedding day?',
    answer: 'With hundreds of successful luxury weddings executed, our directors are trained for every contingency. We maintain redundant sound systems, backup generators, emergency bridal wardrobe kits, on-call doctors, and trusted vendor networks in every key destination city across India and abroad.'
  }
];

export const SMLW_COUPLES = [
  { name: 'Anuj & Parul', venue: 'The Leela Palace, New Delhi', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80' },
  { name: 'Ankita & Shashank', venue: 'Rambagh Palace, Jaipur', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop&q=80' },
  { name: 'Nikita & Sankalp', venue: 'The Oberoi Udaivilas, Udaipur', image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&auto=format&fit=crop&q=80' },
  { name: 'Natalia & Utsav', venue: 'W Goa Seaside Resort', image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&auto=format&fit=crop&q=80' },
  { name: 'Sneha & Prateek', venue: 'Taj Falaknuma Palace, Hyderabad', image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800&auto=format&fit=crop&q=80' },
  { name: 'Emma & Ben', venue: 'Rayavadee Krabi Beach, Thailand', image: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?w=800&auto=format&fit=crop&q=80' }
];

export const SMLW_PARTNERS = [
  { name: 'Tourism Authority of Thailand', logo: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=200&auto=format&fit=crop&q=80' },
  { name: 'Rajasthan Tourism', logo: 'https://images.unsplash.com/photo-1609137144822-4467571f5ce0?w=200&auto=format&fit=crop&q=80' },
  { name: 'Goa Tourism Development Corp', logo: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=200&auto=format&fit=crop&q=80' },
  { name: 'Dubai Department of Economy & Tourism', logo: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=200&auto=format&fit=crop&q=80' },
  { name: 'Abu Dhabi Tourism & Culture Authority', logo: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=200&auto=format&fit=crop&q=80' },
  { name: 'Kerala Tourism (God’s Own Country)', logo: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=200&auto=format&fit=crop&q=80' },
  { name: 'Singapore Tourism Board', logo: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=200&auto=format&fit=crop&q=80' },
  { name: 'International Wedding Awards (IWA)', logo: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=200&auto=format&fit=crop&q=80' }
];
