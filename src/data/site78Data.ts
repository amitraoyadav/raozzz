/**
 * Data definitions for SITE #78
 * AURELIA GOA — LUXURY BEACH RESORT & BANQUET
 */

export interface RoomItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  subtitle: string;
  areaSqFt: number;
  maxGuests: number;
  extraGuestsAllowed: number;
  bedType: string;
  pricePerNightInr: number;
  strikePriceInr: number;
  bannerImage: string;
  galleryImages: string[];
  description: string;
  longDescription: string;
  features: string[];
  keyHighlights: {
    pool: string;
    shower: string;
    view: string;
    space: string;
  };
}

export interface AmenityItem {
  id: string;
  title: string;
  category: 'pool_outdoor' | 'bedding' | 'beverage_dining' | 'bathroom' | 'technology' | 'convenience';
  icon: string;
  description: string;
  badge?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface GuidePlace {
  id: string;
  title: string;
  location: string;
  categorySlug: string;
  image: string;
  description: string;
  highlights: string[];
  timing?: string;
  bestFor?: string;
}

export interface GuideCategory {
  slug: string;
  navTitle: string;
  pageTitle: string;
  heroSubtitle: string;
  description: string;
  coverImage: string;
  places: GuidePlace[];
}

export interface EventServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  capacity: string;
  features: string[];
  idealFor: string;
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
}

export interface TestimonialItem {
  id: string;
  guestName: string;
  location: string;
  stayDate: string;
  roomType: string;
  rating: number;
  comment: string;
  avatar?: string;
}

/* =========================================================================
   1. ROOMS DATA
   ========================================================================= */

export const ROOMS_DATA: RoomItem[] = [
  {
    id: 'deluxe-double-room',
    slug: 'deluxe-double-room-with-private-pool',
    name: 'Deluxe Double Room With Private Pool',
    tagline: 'Your Private Sanctuary of Calm & Unhurried Luxury',
    subtitle: 'Boutique Room with Personal Plunge Pool & Tropical Open Shower',
    areaSqFt: 420,
    maxGuests: 2,
    extraGuestsAllowed: 1,
    bedType: 'King Size Ultra-Plush Bed with Egyptian Cotton Linens',
    pricePerNightInr: 16500,
    strikePriceInr: 22000,
    bannerImage: '/assets/site78/banner-7.webp',
    galleryImages: [
      '/assets/site78/35.webp',
      '/assets/site78/36.webp',
      '/assets/site78/37.webp',
      '/assets/site78/38.webp',
      '/assets/site78/4.webp',
      '/assets/site78/about-6-1.webp',
      '/assets/site78/about-7-1.webp'
    ],
    description: 'Experience luxury and comfort in our Deluxe Double Room, featuring a private plunge pool, open-air rainforest shower, and elegant neutral interiors designed for a serene couple getaway.',
    longDescription: 'Curated for travelers who value calm, understated elegance, and intimate privacy. Designed with warm earth tones, hand-cast terrazzo, soft linens, and bespoke wooden fittings, this 420 sq. ft. room opens onto your secluded private courtyard with a crystalline plunge pool and sun deck.',
    features: [
      'Private Plunge Pool (Filtered Freshwater)',
      'Balinese-style Open-Air Rain Shower',
      'Teakwood Sunbeds with Custom Cushions',
      'Smart 55" 4K TV with Netflix & Streaming',
      'Italian Capsule Espresso Machine',
      'Gourmet Minibar with Artisanal Goan Snacks',
      'High-Speed Wi-Fi (300 Mbps Dedicated)',
      'Digital Safe & Bespoke Linen Wardrobe',
      'Handcrafted Organic Botanical Toiletries',
      '24/7 Butler & In-Room Dining Service'
    ],
    keyHighlights: {
      pool: 'Private 10ft Plunge Pool with Ambient Underwater Lights',
      shower: 'Open-Air Tropical Courtyard Shower surrounded by palms',
      view: 'Enclosed Private Courtyard & Fragrant Frangipani Garden',
      space: '420 SQ.FT total indoor & outdoor living sanctuary'
    }
  },
  {
    id: 'two-bedroom-suite',
    slug: 'two-bedroom-premium-suite',
    name: 'Two Bedroom Premium Suite',
    tagline: 'Private Pool & Lush Botanical Garden',
    subtitle: 'Spacious Family & Group Haven with Master En-Suites & Living Salon',
    areaSqFt: 780,
    maxGuests: 4,
    extraGuestsAllowed: 2,
    bedType: 'Two King Size Master Beds with Premium Memory Mattresses',
    pricePerNightInr: 28500,
    strikePriceInr: 38000,
    bannerImage: '/assets/site78/banner-8.webp',
    galleryImages: [
      '/assets/site78/60.webp',
      '/assets/site78/61.webp',
      '/assets/site78/62.webp',
      '/assets/site78/63.webp',
      '/assets/site78/64.webp',
      '/assets/site78/65.webp',
      '/assets/site78/66.webp',
      '/assets/site78/67.webp'
    ],
    description: 'Extra space and luxury with the comfort of a large living room and a spacious two-bedroom en suite featuring a private pool, open shower, and private landscaped garden.',
    longDescription: 'The pinnacle of coastal boutique luxury in North Goa. Spanning an expansive 780 sq. ft., this palatial suite offers two independently appointed master bedrooms, each with its own en-suite bathroom, linked by a stylish central salon. Glass pocket doors glide away to reveal your expansive private plunge pool and tropical sun terrace.',
    features: [
      'Large Private Plunge Pool & Sun Deck',
      'Private Landscaped Frangipani & Palm Garden',
      'Two Independent King Master Bedrooms',
      'Two En-suite Luxury Marble & Terrazzo Bathrooms',
      'Central Living Salon with Plush Designer Lounge',
      'Double Open-Air Rainforest Showers',
      'Premium Espresso Coffee Station & Tea Bar',
      'Two 55" Smart TVs with International Channels',
      'Full Minibar & Cocktail Mixing Kit',
      'Personal Dedicated Concierge for Island & Sightseeing Tours'
    ],
    keyHighlights: {
      pool: 'Expanded Private Pool with Deck Loungers & In-Pool Seating',
      shower: 'Dual Open Tropical Showers + Luxury En-Suite Vanities',
      view: 'Private Gated Garden & Coconut Grove Sunset Vista',
      space: '780 SQ.FT Luxurious Indoor-Outdoor Living Area'
    }
  }
];

/* =========================================================================
   2. EXCLUSIVE AMENITIES
   ========================================================================= */

export const AMENITIES_DATA: AmenityItem[] = [
  {
    id: 'plunge-pool',
    title: 'Private Plunge Pool',
    category: 'pool_outdoor',
    icon: 'Waves',
    description: 'Every room and suite boasts an individual temperature-moderated private plunge pool for serene morning swims and sunset relaxation.',
    badge: 'Signature Feature'
  },
  {
    id: 'outdoor-shower',
    title: 'Open-Air Tropical Shower',
    category: 'bathroom',
    icon: 'Droplets',
    description: 'Bask under Goa skies with high-pressure rainforest shower heads surrounded by lush tropical greenery and basalt stone.',
    badge: 'Boutique Design'
  },
  {
    id: 'sunbeds',
    title: 'Sunbeds with Mattress',
    category: 'pool_outdoor',
    icon: 'Sun',
    description: 'Custom-crafted teakwood loungers with weatherproof plush mattresses and sun-drying linen towels on your private deck.'
  },
  {
    id: 'premium-bed',
    title: 'Premium Bed, Mattress & Linen',
    category: 'bedding',
    icon: 'BedDouble',
    description: 'Orthopedic custom-built mattresses, 400-thread-count pure Egyptian cotton bed linen, and feather-soft microfibre pillows.'
  },
  {
    id: 'coffee-machine',
    title: 'Coffee Machine & Artisanal Brews',
    category: 'beverage_dining',
    icon: 'Coffee',
    description: 'In-room Italian espresso capsule machine paired with single-estate Indian arabica beans and organic tea selections.'
  },
  {
    id: 'minibar',
    title: 'Curated Gourmet Minibar',
    category: 'beverage_dining',
    icon: 'Wine',
    description: 'Stocked with chilled coconut water, craft tonics, local artisanal chocolates, savory bites, and fine beverages.'
  },
  {
    id: 'electric-kettle',
    title: 'Electric Kettle & Herbal Infusions',
    category: 'beverage_dining',
    icon: 'CupSoda',
    description: 'Temperature-controlled rapid kettle with complimentary artisanal herbal infusions, green teas, and chamomile blends.'
  },
  {
    id: 'premium-toiletries',
    title: 'Organic Botanical Toiletries',
    category: 'bathroom',
    icon: 'Sparkles',
    description: 'Eco-conscious personal care amenities scented with native lemongrass, sweet orange, and sandalwood essential oils.'
  },
  {
    id: 'smart-tv',
    title: 'Smart 4K Television',
    category: 'technology',
    icon: 'Tv',
    description: 'Ultra-thin wall-mounted 55" 4K Smart TVs with integrated Netflix, Prime Video, YouTube, and Apple AirPlay connectivity.'
  },
  {
    id: 'free-wifi',
    title: 'High-Speed Fiber Wi-Fi',
    category: 'technology',
    icon: 'Wifi',
    description: 'Enterprise-grade 300 Mbps symmetric optical fiber connectivity seamless across guest rooms, pools, and gardens.'
  },
  {
    id: 'digital-safe',
    title: 'Digital In-Room Safe',
    category: 'convenience',
    icon: 'ShieldCheck',
    description: 'Laptop-compatible digital electronic motorized safe with custom guest PIN access for complete peace of mind.'
  },
  {
    id: 'hair-dryer',
    title: 'Ionic Hair Dryer',
    category: 'bathroom',
    icon: 'Wind',
    description: 'Professional high-torque salon-grade ionic hair dryer with cool shot and styling concentrator attachments.'
  },
  {
    id: 'iron-board',
    title: 'Iron & Full Ironing Board',
    category: 'convenience',
    icon: 'Shirt',
    description: 'Steam iron with precision ceramic soleplate and adjustable height padded ironing board stored inside your wardrobe.'
  },
  {
    id: 'full-mirror',
    title: 'Full-Length Dressing Mirror',
    category: 'convenience',
    icon: 'Maximize2',
    description: 'Floor-to-ceiling brass-trimmed architectural mirror with warm ambient backlit vanity illumination.'
  },
  {
    id: 'en-suite-bath',
    title: 'En-Suite Designer Bathroom',
    category: 'bathroom',
    icon: 'Bath',
    description: 'Spacious terrazzo bathrooms with dual basins, copper accents, backlit mirrors, and separate water closet.'
  },
  {
    id: 'air-conditioner',
    title: 'Dual Climate Inverter AC',
    category: 'convenience',
    icon: 'Thermometer',
    description: 'Whisper-quiet Daikin energy-saving inverter climate control with gentle air diffusion for restful sleep.'
  }
];

/* =========================================================================
   3. TRUST STATISTICS
   ========================================================================= */

export const RESORT_STATS = [
  { value: '100%', label: 'Rooms with Private Pools', sublabel: 'Exclusive plunge pool for every guest room' },
  { value: '50m', label: 'Walk to Morjim Beach', sublabel: 'Direct access to peaceful golden sands' },
  { value: '4.95', label: 'Guest Review Score', sublabel: 'Verified rating across global hospitality portals' },
  { value: '24/7', label: 'Butler & Concierge Care', sublabel: 'Personalized attention around the clock' }
];

/* =========================================================================
   4. WELLNESS & RECREATION
   ========================================================================= */

export const WELLNESS_ITEMS = [
  {
    id: 'beach-access',
    title: 'Direct Beach Access',
    subtitle: 'Golden Morjim Coastline',
    description: 'Just a 60-second gentle stroll past coastal palms brings you to the quietest stretch of Morjim Beach, renowned for nesting Olive Ridley turtles and breathtaking Arabian Sea sunsets.',
    image: '/assets/site78/about-6-1.webp'
  },
  {
    id: 'spa-treatments',
    title: 'Spa & Ayurvedic Treatments',
    subtitle: 'Holistic Body Revitalization',
    description: 'Indulge in restorative massages, warm herb poultice therapy, organic coconut oil scrubs, and rejuvenating sound baths guided by certified coastal wellness practitioners.',
    image: '/assets/site78/about-7-1.webp'
  },
  {
    id: 'surfing',
    title: 'Surfing & Coastal Adventure',
    subtitle: 'Gentle Swells & Water Sports',
    description: 'Morjim is celebrated as India’s premier gentle surf beach. Join our certified surf coaches for sunrise beginner clinics, paddleboarding, and coastal kayak expeditions.',
    image: '/assets/site78/68.webp'
  }
];

/* =========================================================================
   5. SIGNATURE FEATURES
   ========================================================================= */

export const SIGNATURE_FEATURES = [
  {
    title: 'The Ocean Breeze',
    subtitle: 'Where Nature Dictates The Pace',
    description: 'Feel the rhythmic coastal winds from the Arabian Sea, cooling the verandas and carrying the therapeutic scent of salty sea spray and flowering bougainvillea.',
    image: '/assets/site78/banner-9.webp'
  },
  {
    title: 'Beachfront Dining Resto Bar',
    subtitle: 'Fresh Catch & Molecular Mixology',
    description: 'Savor line-caught red snapper, fragrant crab rechado, hand-rolled pastas, and botanical gin cocktails on our shaded open-air wooden deck under whispering palm trees.',
    image: '/assets/site78/69.webp'
  }
];

/* =========================================================================
   6. SUSTAINABILITY INITIATIVES
   ========================================================================= */

export const SUSTAINABILITY_PILLARS = [
  {
    title: '100% Solar-Assisted Water & Energy',
    description: 'High-efficiency rooftop solar thermal heaters power all guest room water supplies, slashing carbon footprint while guaranteeing endless hot water.'
  },
  {
    title: 'Zero Single-Use Plastic Policy',
    description: 'All water is filtered via advanced in-house reverse osmosis and served in sterilized embossed glass carafes. Toiletries use biodegradable bamboo and stone.'
  },
  {
    title: 'Hyper-Local Organic Sourcing',
    description: 'Produce is sourced directly from organic farmers in Pernem and fishermen in Morjim village, ensuring farm-to-table freshness and uplifting our Goan community.'
  },
  {
    title: 'Rainwater Harvesting & Native Flora',
    description: 'Deep percolation sub-surface aquifers recharge groundwater reserves throughout the monsoon, feeding over 80 species of native coastal palms and flora.'
  }
];

/* =========================================================================
   7. EVENTS & CELEBRATIONS
   ========================================================================= */

export const EVENTS_DATA: EventServiceItem[] = [
  {
    id: 'weddings-engagements',
    title: 'Weddings & Engagements',
    tagline: 'Dream Beachfront Destination Weddings',
    description: 'Celebrate life’s most profound milestone against a backdrop of golden sands, amber sunsets, and twinkling fairy lights. From beach mandaps to lavish reception dinners with gourmet coastal banquets.',
    image: '/assets/site78/60.webp',
    capacity: 'Up to 250 Guests',
    features: ['Beachfront Mandap Setup', 'Curated Chef Banquet Menus', 'Sound & Atmospheric Lighting', 'Dedicated Wedding Planner'],
    idealFor: 'Destination weddings, ring ceremonies, sangeet sundowners, bridal showers'
  },
  {
    id: 'pool-parties',
    title: 'Pool Parties & Sundowners',
    tagline: 'Vibrant & Stylish Poolside Celebrations',
    description: 'Host lively, chic daytime or evening pool gatherings featuring chilled sangrias, gourmet sliders, live acoustic saxophonists, and ambient floating floral arrangements.',
    image: '/assets/site78/61.webp',
    capacity: '20 to 120 Guests',
    features: ['Private Plunge Pool Access', 'Signature Cocktail Bar', 'Live DJ / Acoustic Saxophone', 'Custom Pool Decor'],
    idealFor: 'Bachelorette parties, birthday sundowners, reunion weekends'
  },
  {
    id: 'corporate-functions',
    title: 'Corporate Functions & Leadership Retreats',
    tagline: 'Productive Work Meets Coastal Rejuvenation',
    description: 'From executive strategy off-sites to brand milestones, enjoy a refined and discreet coastal atmosphere equipped with audiovisual tech, high-speed fiber, and tailored banquet lunches.',
    image: '/assets/site78/62.webp',
    capacity: '15 to 80 Delegates',
    features: ['High-Speed Fiber Wi-Fi & AV Screens', 'Executive Coffee Break Stations', 'Private Dining Salons', 'Team Building Beach Activities'],
    idealFor: 'Annual board meetings, leadership retreats, startup summits'
  },
  {
    id: 'fashion-shows',
    title: 'Fashion Shows & Brand Launches',
    tagline: 'Refined Runway & Editorial Showcase',
    description: 'Experience high-glamour events hosted within our minimalist tropical architecture, complete with custom wooden runway buildouts, backstage green rooms, and press lounges.',
    image: '/assets/site78/63.webp',
    capacity: '50 to 180 Guests',
    features: ['Raised Deck Runway', 'Backstage Styling Suite', 'Professional Stage Lighting', 'Press & Media Hospitality'],
    idealFor: 'Designer collections, resort-wear launches, luxury brand previews'
  },
  {
    id: 'elite-kitty-parties',
    title: 'Elite Kitty Parties & High Teas',
    tagline: 'Sophisticated High Tea & Luxe Gatherings',
    description: 'Curated afternoons with artisanal scones, Goan poee sliders, sparkling prosecco, bespoke floral decor, and private plunge pool relaxation for upscale social circles.',
    image: '/assets/site78/64.webp',
    capacity: '10 to 45 Guests',
    features: ['Artisanal Pastry & High Tea Tier', 'Custom Floral Table Settings', 'Cocktail & Mocktail Station', 'Dedicated Service Butler'],
    idealFor: 'Ladies high teas, monthly kitty gatherings, milestones'
  },
  {
    id: 'romantic-dinners',
    title: 'Intimate Candlelit Dinners',
    tagline: 'Private Gazebo & Sea View Romance',
    description: 'An unforgettable 5-course private dinner set under the stars with feet in the sand or on your private pool terrace, complete with champagne on ice, fresh roses, and personal chef service.',
    image: '/assets/site78/65.webp',
    capacity: '2 to 10 Guests',
    features: ['Custom 5-Course Chef Menu', 'Chilled Vintage Champagne', 'Personal Butler Service', 'Violin / Guitar Serenade'],
    idealFor: 'Anniversary surprises, marriage proposals, intimate birthdays'
  }
];

/* =========================================================================
   8. GOA GUIDE (ALL 9 CATEGORIES)
   ========================================================================= */

export const GOA_GUIDE_CATEGORIES: GuideCategory[] = [
  {
    slug: 'activities-to-do-in-goa',
    navTitle: 'Activities To Do',
    pageTitle: 'Top Things To Do In North Goa',
    heroSubtitle: 'Thrilling ocean adventures, river cruises & wildlife explorations near Morjim',
    description: 'Discover coastal excursions curated by Aurelia Concierge, from tranquil dolphin pods in the Arabian Sea to paragliding over Keri cliffs and tranquil kayak trails through mangrove backwaters.',
    coverImage: '/assets/site78/66.webp',
    places: [
      {
        id: 'act-1',
        title: 'Dolphin Safari Trip',
        location: 'Mandrem, Coco & Sinquerim Waters',
        categorySlug: 'activities-to-do-in-goa',
        image: '/assets/site78/66.webp',
        description: 'Morning boat ride across Morjim and Coco coastal waters to spot playful Indo-Pacific humpback dolphins surfacing gracefully alongside traditional wooden catamarans.',
        highlights: ['Early Morning 7:30 AM Trips', 'Dolphin Sighting Guarantee', 'Life Jackets & Guides Included'],
        timing: '7:30 AM – 10:30 AM',
        bestFor: 'Couples & Families'
      },
      {
        id: 'act-2',
        title: 'Scuba Diving & Watersports',
        location: 'Keri Beach & Grand Island',
        categorySlug: 'activities-to-do-in-goa',
        image: '/assets/site78/67.webp',
        description: 'PADI-certified diving instructors take you through vibrant coral gardens teeming with tropical reef fish, paired with parasailing, jet-skiing, and banana boat rides.',
        highlights: ['PADI Certified Instructors', 'Underwater HD Video Included', 'Complete Gear Provided'],
        timing: '8:00 AM – 2:00 PM',
        bestFor: 'Adventure Seekers'
      },
      {
        id: 'act-3',
        title: 'Paragliding & Paramotors',
        location: 'Keri Cliffs & Mandrem Sands',
        categorySlug: 'activities-to-do-in-goa',
        image: '/assets/site78/68.webp',
        description: 'Soar 1,000 feet above the coastline on a motorized paramotor flight, capturing panoramic aerial vistas of Morjim, Mandrem, and the Chapora River estuary.',
        highlights: ['Tandem Flight with Master Pilot', 'Aerial GoPro Video Footage', 'Sunset Flights Available'],
        timing: '4:00 PM – 6:30 PM',
        bestFor: 'Adrenaline Enthusiasts'
      },
      {
        id: 'act-4',
        title: 'Backwater Mangrove Kayaking',
        location: 'Chapora River & Colva Creeks',
        categorySlug: 'activities-to-do-in-goa',
        image: '/assets/site78/69.webp',
        description: 'Paddle through serene canopy-covered tidal creeks where kingfishers dart and peaceful Goan fishing hamlets dot the riverbanks away from commercial crowds.',
        highlights: ['Sit-on-Top Kayaks', 'Eco-Nature Certified Guide', 'Birdwatching Focus'],
        timing: '6:30 AM – 9:00 AM',
        bestFor: 'Nature Lovers'
      },
      {
        id: 'act-5',
        title: 'Bungee Jumping Facility',
        location: 'Bicholim Highlands',
        categorySlug: 'activities-to-do-in-goa',
        image: '/assets/site78/70.webp',
        description: 'India’s most scenic 55-meter cantilever bungee jump over a crystal-clear quarry lake, engineered to Australian & New Zealand safety standards.',
        highlights: ['55 Meter Pure Freefall', 'International Safety Certifications', 'Souvenir Certificate & T-Shirt'],
        timing: '9:00 AM – 5:00 PM',
        bestFor: 'Thrill Seekers'
      },
      {
        id: 'act-6',
        title: 'Private Yacht Charter',
        location: 'Mandovi River & Panjim Bay',
        categorySlug: 'activities-to-do-in-goa',
        image: '/assets/site78/71.webp',
        description: 'Charter a luxury 42ft catamaran or yacht for private sundowners, champagne cruises, and family celebrations cruising along Goa’s historic riverways.',
        highlights: ['Private Crew & Captain', 'Complimentary Champagne & Finger Food', 'Bluetooth Sound System'],
        timing: 'Custom Hourly Slots',
        bestFor: 'VIP Celebrations'
      }
    ]
  },
  {
    slug: 'trending-cafes-in-goa',
    navTitle: 'Trending Cafés',
    pageTitle: 'Best Cafés In North Goa Near Beach',
    heroSubtitle: 'Artisanal roasteries, sourdough bakeries & bohemian jungle brunch spots',
    description: 'North Goa boasts India’s most creative specialty coffee and organic cafe culture. From sourdough bakeries in Anjuna to secret courtyard brunch spots in Assagao.',
    coverImage: '/assets/site78/72.webp',
    places: [
      {
        id: 'cafe-1',
        title: 'Garden of Dreams',
        location: 'Arambol',
        categorySlug: 'trending-cafes-in-goa',
        image: '/assets/site78/72.webp',
        description: 'Enchanting open-air botanical garden cafe with sprawling banyan trees, hammock seating, smoothie bowls, raw vegan treats, and live evening acoustic sessions.',
        highlights: ['Organic Vegan Smoothie Bowls', 'Secret Zen Garden Seating', 'Cold Brew & Matcha Bar']
      },
      {
        id: 'cafe-2',
        title: 'Baba Au Rhum',
        location: 'Anjuna',
        categorySlug: 'trending-cafes-in-goa',
        image: '/assets/site78/73.webp',
        description: 'Iconic French bakery cafe set amidst paddy fields. World-famous for wood-fired pizzas, butter croissants, eggs benedict, and energetic weekend brunch crowds.',
        highlights: ['Artisan French Sourdough & Croissants', 'Paddy Field Views', 'Craft Draft Beers']
      },
      {
        id: 'cafe-3',
        title: 'Babka Goa',
        location: 'Anjuna',
        categorySlug: 'trending-cafes-in-goa',
        image: '/assets/site78/60.webp',
        description: 'A contemporary European patisserie and specialty coffee roastery famous for its chocolate babka loaves, cheesecakes, and aeropress brews.',
        highlights: ['Famous Chocolate Babka', 'Third-Wave Coffee', 'Chic Minimalist Interiors']
      },
      {
        id: 'cafe-4',
        title: 'Eva Cafe',
        location: 'Anjuna Clifftop',
        categorySlug: 'trending-cafes-in-goa',
        image: '/assets/site78/61.webp',
        description: 'Whitewashed Greek island aesthetic cafe perched on sea rocks overlooking the Arabian Sea waves. Perfect for sunset iced lattes and shakshuka.',
        highlights: ['Mykonos-style Whitewashed Decor', 'Unobstructed Ocean View', 'Freshly Pressed Juices']
      },
      {
        id: 'cafe-5',
        title: 'Mojigao',
        location: 'Assagao',
        categorySlug: 'trending-cafes-in-goa',
        image: '/assets/site78/62.webp',
        description: 'Sprawling jungle sanctuary cafe tucked into the Assagao hills with wooden decks, Mediterranean mezze platters, pour-overs, and daily yoga classes.',
        highlights: ['Assagao Forest Sanctuary', 'Mediterranean Mezze & Hummus', 'Specialty Matcha & Single Origin']
      },
      {
        id: 'cafe-6',
        title: 'Artjuna Cafe',
        location: 'Anjuna',
        categorySlug: 'trending-cafes-in-goa',
        image: '/assets/site78/63.webp',
        description: 'A vibrant lifestyle garden cafe inside a Portuguese villa courtyard featuring healthy Mediterranean food, fresh falafel, lifestyle boutique, and art events.',
        highlights: ['Portuguese Villa Courtyard', 'Falafel & Tahini Platters', 'Lifestyle & Jewelry Boutique']
      }
    ]
  },
  {
    slug: 'casino-in-goa-land',
    navTitle: 'Casino (Land)',
    pageTitle: 'Best Casinos In North Goa On Land',
    heroSubtitle: 'Luxury on-shore gaming, VIP roulette, blackjack & fine dining lounges',
    description: 'Experience top-tier on-shore gaming with live electronic roulette, blackjack, baccarat, and slot machines inside world-class hotel resorts in North Goa and Panjim.',
    coverImage: '/assets/site78/64.webp',
    places: [
      {
        id: 'c-land-1',
        title: 'Casino Strike by Big Daddy',
        location: 'Grand Hyatt, Bambolim',
        categorySlug: 'casino-in-goa-land',
        image: '/assets/site78/64.webp',
        description: 'India’s largest on-land casino offering multi-cuisine fine dining, live performance stages, VIP high-roller lounges, and hundreds of gaming tables.',
        highlights: ['Over 100 Electronic Gaming Terminals', 'VIP Diamond Room', 'Gourmet Buffet & Premium Bar']
      },
      {
        id: 'c-land-2',
        title: 'Casino Palms',
        location: 'La Calypso, Baga',
        categorySlug: 'casino-in-goa-land',
        image: '/assets/site78/65.webp',
        description: 'Energetic seaside on-shore casino on the Baga stretch featuring electronic blackjack, roulette, slot games, and late-night cocktail service.',
        highlights: ['Close to Baga Nightlife', 'Casual Gaming Vibe', 'Complimentary Drinks with Chips']
      },
      {
        id: 'c-land-3',
        title: 'Casino Rio',
        location: 'Resort Rio, Arpora',
        categorySlug: 'casino-in-goa-land',
        image: '/assets/site78/66.webp',
        description: 'Set along the banks of the Arpora River, Casino Rio provides a relaxed yet upscale environment for casual gaming enthusiasts and resort guests.',
        highlights: ['Scenic Riverfront Setting', 'Friendly Dealers & Floor Staff', 'Integrated Resort Amenities']
      },
      {
        id: 'c-land-4',
        title: 'Chances Casino',
        location: 'Vainguinim Valley, Dona Paula',
        categorySlug: 'casino-in-goa-land',
        image: '/assets/site78/67.webp',
        description: 'One of Goa’s oldest and most prestigious heritage land casinos, known for disciplined gaming, quiet VIP tables, and traditional service.',
        highlights: ['Heritage Boutique Prestige', 'High Table Stakes', 'Classy Old-World Charm']
      }
    ]
  },
  {
    slug: 'casino-in-goa-floating',
    navTitle: 'Casino (Floating)',
    pageTitle: 'Best Floating Casinos In Goa (Cruise Ships)',
    heroSubtitle: 'Magnificent offshore luxury cruise liners on the shimmering Mandovi River',
    description: 'Goa’s offshore floating casinos are legendary luxury vessels moored along the Mandovi River in Panjim, featuring 24/7 gaming, international dancers, and celebrity DJ performances.',
    coverImage: '/assets/site78/68.webp',
    places: [
      {
        id: 'c-float-1',
        title: 'Deltin Royale',
        location: 'Mandovi River, Panjim',
        categorySlug: 'casino-in-goa-floating',
        image: '/assets/site78/68.webp',
        description: 'Asia’s largest luxury floating gaming vessel, spanning 40,000 sq. ft. across five expansive decks with 120 gaming tables, Vegas restaurant, and whisky lounge.',
        highlights: ['5 Decks of Luxury Gaming', 'Dedicated Poker Room & Royale Club', 'Live International Broadway Acts']
      },
      {
        id: 'c-float-2',
        title: 'Big Daddy Casino',
        location: 'Mandovi River, Panjim',
        categorySlug: 'casino-in-goa-floating',
        image: '/assets/site78/69.webp',
        description: 'A 72-meter grand offshore cruise ship with glamourous rooftop helicopter pad, open-air sun deck parties, 110 tables, and multi-deck dining.',
        highlights: ['VIP High-Limit Salon', 'Rooftop Helipad Sundowner Deck', 'Michelin-inspired Buffet']
      },
      {
        id: 'c-float-3',
        title: 'Majestic Pride Casino',
        location: 'Mandovi River, Panjim',
        categorySlug: 'casino-in-goa-floating',
        image: '/assets/site78/70.webp',
        description: 'Renowned for energetic Indian & Western gaming tables, live Bollywood dance revues, unlimited premium cocktails, and family dining sections.',
        highlights: ['Lively Bollywood Stage Shows', 'Beginner-Friendly Tables', 'Kids Play Zone on Lower Deck']
      },
      {
        id: 'c-float-4',
        title: 'Deltin JAQK',
        location: 'Mandovi River, Panjim',
        categorySlug: 'casino-in-goa-floating',
        image: '/assets/site78/71.webp',
        description: 'A premier cruise gaming ship with 350 gaming positions, learner tables for newcomers, exquisite pan-Asian cuisine, and signature VIP hospitality.',
        highlights: ['Special Learner Gaming Tables', 'Exclusive Pan-Asian Restaurant', 'VIP Suite Accommodations']
      }
    ]
  },
  {
    slug: 'authentic-goan-local-restaurant',
    navTitle: 'Authentic Local Food',
    pageTitle: 'Authentic Goan Local Restaurants & Seafood Shacks',
    heroSubtitle: 'Centuries-old recipes, aromatic rechado masala, crab xec xec & fish thalis',
    description: 'Taste the genuine soul of Goa through heritage tavern kitchens, coastal fisher-family dining rooms, and coconut-curry recipes passed down through generations.',
    coverImage: '/assets/site78/72.webp',
    places: [
      {
        id: 'rest-1',
        title: 'Vinayak Family Restaurant',
        location: 'Assagao',
        categorySlug: 'authentic-goan-local-restaurant',
        image: '/assets/site78/72.webp',
        description: 'Loved by locals and travelers alike, overlooking green paddy fields in Assagao. Renowned for its legendary crispy kingfish fry and crab xec xec thali.',
        highlights: ['Famous Kingfish Rava Fry', 'Paddy Field Breeze', 'Authentic Goan Sol Kadhi']
      },
      {
        id: 'rest-2',
        title: 'Anand Seafood Bar & Restaurant',
        location: 'Anjuna',
        categorySlug: 'authentic-goan-local-restaurant',
        image: '/assets/site78/73.webp',
        description: 'A no-frills, high-flavor coastal seafood institution serving line-caught pomfret, butter garlic squids, prawn rechado, and spicy Goan pork vindaloo.',
        highlights: ['Fresh Catch of the Day Counter', 'Prawn Rechado Masala', 'Unmatched Local Flavour']
      },
      {
        id: 'rest-3',
        title: 'Bhumiputra Seafood Bar',
        location: 'Pernem (Near Morjim)',
        categorySlug: 'authentic-goan-local-restaurant',
        image: '/assets/site78/60.webp',
        description: 'A hyper-local gem close to Aurelia Resort in Pernem serving authentic home-ground spice curries, tisryo (clams) sukhem, and rice bhakri.',
        highlights: ['5 Minutes from Morjim Beach', 'Clams Sukhem Special', 'Traditional Claypot Cooking']
      },
      {
        id: 'rest-4',
        title: 'Ritz Classic',
        location: 'Panjim City',
        categorySlug: 'authentic-goan-local-restaurant',
        image: '/assets/site78/61.webp',
        description: 'Panjim’s benchmark Goan seafood temple since 1978. Famous for its gargantuan fish curry thali with clams, fried fish, prawn kismur, and kokum kadhi.',
        highlights: ['Over 45 Years of Heritage', 'The Gold Standard Fish Thali', 'Central Panjim Landmark']
      }
    ]
  },
  {
    slug: 'famous-party-places-in-goa',
    navTitle: 'Famous Party Places',
    pageTitle: 'Best Party Places & Iconic Nightclubs In Goa',
    heroSubtitle: 'Legendary clifftop sunset sundowners, open-air amphitheatres & VIP clubs',
    description: 'When night descends on the North coast, Goa transforms into India’s nightlife capital with world-class international DJs, clifftop sunset venues, and energetic waterfront dance floors.',
    coverImage: '/assets/site78/62.webp',
    places: [
      {
        id: 'party-1',
        title: 'Thalassa Greek Taverna & Lounge',
        location: 'Siolim Waterfront',
        categorySlug: 'famous-party-places-in-goa',
        image: '/assets/site78/62.webp',
        description: 'Iconic Greek sunset open-air dining and party sanctuary on the Chapora waterfront. Celebrated for Greek fire dancers, sirtaki music, and star-studded crowds.',
        highlights: ['Riverfront Sunset Panorama', 'Greek Fire & Sirtaki Performances', 'Celebrity Favorite']
      },
      {
        id: 'party-2',
        title: 'Hammerzz Nightclub & Lounge',
        location: 'Baga Creek Promenade, Arpora',
        categorySlug: 'famous-party-places-in-goa',
        image: '/assets/site78/63.webp',
        description: 'Goa’s premier indoor luxury nightlife arena featuring world-class Void Acoustics sound, kinetic laser grids, VIP mezzanine tables, and international headliner DJs.',
        highlights: ['Void Acoustics Sound System', 'Mezzanine VIP Lounges', 'Open Till 4:30 AM Every Night']
      },
      {
        id: 'party-3',
        title: 'Purple Martini at Sunset Point',
        location: 'Anjuna Clifftop',
        categorySlug: 'famous-party-places-in-goa',
        image: '/assets/site78/64.webp',
        description: 'Famous clifftop sunset lounge overlooking the crashing waves of Anjuna with live saxophone, signature purple martinis, and uplifting sunset deep house sessions.',
        highlights: ['Unrivalled Sunset View', 'Live Saxophone & Percussion', 'Signature Exotic Cocktails']
      },
      {
        id: 'party-4',
        title: 'Club Cubana',
        location: 'Arpora Hilltop',
        categorySlug: 'famous-party-places-in-goa',
        image: '/assets/site78/65.webp',
        description: 'The famed "Nightclub in the Sky" spread across tiered hill terraces with a swimming pool, multiple music arenas, and panoramic vistas of North Goa.',
        highlights: ['Hilltop Open-Air Terraces', 'All-Inclusive Bar Pricing', 'Iconic Goa Landmark']
      }
    ]
  },
  {
    slug: 'south-goa-sightseeing-a',
    navTitle: 'South Goa Sightseeing',
    pageTitle: 'South Goa Sightseeing Places Guide',
    heroSubtitle: 'UNESCO world heritage cathedrals, Dudhsagar waterfalls & spice plantations',
    description: 'Explore the serene heritage charm of South Goa with 450-year-old Portuguese basilicas, organic spice estates, tranquil beaches, and cascading waterfalls in the Western Ghats.',
    coverImage: '/assets/site78/66.webp',
    places: [
      {
        id: 'sg-1',
        title: 'Basilica of Bom Jesus',
        location: 'Old Goa (UNESCO World Heritage)',
        categorySlug: 'south-goa-sightseeing-a',
        image: '/assets/site78/66.webp',
        description: 'A 16th-century baroque masterpiece holding the sacred relics of St. Francis Xavier, featuring ornate gilded altars and hand-carved basalt stonework.',
        highlights: ['UNESCO World Heritage Site', 'Relics of St. Francis Xavier', '16th Century Baroque Architecture']
      },
      {
        id: 'sg-2',
        title: 'Dudhsagar Waterfalls',
        location: 'Bhagwan Mahavir Wildlife Sanctuary',
        categorySlug: 'south-goa-sightseeing-a',
        image: '/assets/site78/67.webp',
        description: 'A majestic four-tiered waterfall cascading 310 meters down the Western Ghats mountain face, resembling a roaring sea of white milk amidst dense teak forest.',
        highlights: ['310 Meter Four-Tiered Cascade', 'Jeep Jungle Safari Ride', 'Freshwater Natural Plunge Pools']
      },
      {
        id: 'sg-3',
        title: 'Sahakari Spice Plantation',
        location: 'Ponda',
        categorySlug: 'south-goa-sightseeing-a',
        image: '/assets/site78/68.webp',
        description: 'Stroll through lush 130-acre aromatic spice groves of cardamom, vanilla, nutmeg, and black pepper, culminating in an authentic Goan buffet on banana leaves.',
        highlights: ['Guided Botanical Spice Walk', 'Traditional Banana Leaf Lunch', 'Artisanal Spices & Cashew Feni Tasting']
      },
      {
        id: 'sg-4',
        title: 'Dona Paula Viewpoint',
        location: 'Near Panjim',
        categorySlug: 'south-goa-sightseeing-a',
        image: '/assets/site78/69.webp',
        description: 'Historic coastal promenade overlooking the confluence of the Zuari and Mandovi rivers with panoramic sea views and romantic colonial folklore.',
        highlights: ['Zuari & Mandovi Estuary Confluence', 'Historic Jetty & Statues', 'Sunset Sea Breeze']
      }
    ]
  },
  {
    slug: 'north-goa-sightseeing',
    navTitle: 'North Goa Sightseeing',
    pageTitle: 'North Goa Sightseeing Guide & Top Landmarks',
    heroSubtitle: 'Historic 17th-century coastal forts, Portuguese churches & vibrant seaside points',
    description: 'From 400-year-old Portuguese stone fortresses guarding the coastline to panoramic clifftops and charming whitewashed churches tucked amidst coconut palms.',
    coverImage: '/assets/site78/70.webp',
    places: [
      {
        id: 'ng-1',
        title: 'Fort Aguada & Lighthouse',
        location: 'Candolim & Sinquerim Clifftop',
        categorySlug: 'north-goa-sightseeing',
        image: '/assets/site78/70.webp',
        description: 'A formidable 17th-century Portuguese coastal fortress with a four-storey lighthouse, sweeping 360-degree ocean views, and preserved stone moats.',
        highlights: ['1612 Portuguese Fort Construction', 'Ancient 4-Storey Lighthouse', 'Sweeping Sea Panorama']
      },
      {
        id: 'ng-2',
        title: 'Chapora Fort (Dil Chahta Hai Fort)',
        location: 'Vagator Hills (15 mins from Morjim)',
        categorySlug: 'north-goa-sightseeing',
        image: '/assets/site78/71.webp',
        description: 'Perched on high red-laterite bluffs overlooking Morjim Beach and Chapora estuary. The quintessential sunset viewpoint immortalized in modern Indian cinema.',
        highlights: ['Overlooks Morjim & Vagator Beaches', 'Dramatic Red Laterite Ramparts', 'Unmatched Golden Hour Vistas']
      },
      {
        id: 'ng-3',
        title: 'Mae De Deus Church',
        location: 'Saligao',
        categorySlug: 'north-goa-sightseeing',
        image: '/assets/site78/72.webp',
        description: 'A striking neo-Gothic whitewashed church built in 1873, resembling a fairytale castle with majestic spires rising dramatically out of surrounding green fields.',
        highlights: ['Neo-Gothic Architectural Spire', 'Stunning Evening Illumination', 'Peaceful Village Setting']
      },
      {
        id: 'ng-4',
        title: 'Fort Tiracol',
        location: 'Tiracol River Estuary',
        categorySlug: 'north-goa-sightseeing',
        image: '/assets/site78/73.webp',
        description: 'A secluded historical clifftop outpost at the northern tip of Goa reached via scenic river ferry, offering dramatic vistas of the open ocean.',
        highlights: ['North Goa Heritage Frontier', 'Picturesque River Ferry Crossing', 'Quiet Historical Church on Grounds']
      }
    ]
  },
  {
    slug: 'instagrammable-places',
    navTitle: 'Instagrammable Places',
    pageTitle: 'Most Instagrammable Places In Goa',
    heroSubtitle: 'Aesthetic pastel lanes, coconut tree avenues & iconic vintage architecture',
    description: 'Capture postcard-perfect memories for your feed at Goa’s most picturesque aesthetic corners, from candy-colored Latin quarters to sun-dappled palm tunnels.',
    coverImage: '/assets/site78/60.webp',
    places: [
      {
        id: 'insta-1',
        title: 'The Iconic Parra Coconut Road',
        location: 'Parra Village',
        categorySlug: 'instagrammable-places',
        image: '/assets/site78/60.webp',
        description: 'The world-famous scenic country lane lined on both sides with towering coconut palms and emerald watermelon fields, featured in Bollywood blockbusters.',
        highlights: ['Iconic Symmetrical Palm Canopy', 'Best Photographed at Sunrise', 'Surrounded by Quiet Paddy Fields']
      },
      {
        id: 'insta-2',
        title: 'Fontainhas Latin Quarter',
        location: 'Panjim Heritage District',
        categorySlug: 'instagrammable-places',
        image: '/assets/site78/61.webp',
        description: 'Vibrant narrow cobblestone alleys framed by ochre, indigo, and terracotta Portuguese colonial townhouses, wrought-iron balconies, and cute bakeries.',
        highlights: ['Pastel Colored Colonial Homes', 'Heritage Azulejo Ceramic Tiles', 'Chic Art Cafes & Bakeries']
      },
      {
        id: 'insta-3',
        title: 'Immaculate Conception Church',
        location: 'Church Square, Panjim',
        categorySlug: 'instagrammable-places',
        image: '/assets/site78/62.webp',
        description: 'The iconic gleaming pure-white zigzag baroque staircase and bell tower soaring over the central municipal garden of Panjim city.',
        highlights: ['Gleaming White Baroque Staircase', 'Historic 1609 Church Bells', 'Cinematic Photo Angles']
      },
      {
        id: 'insta-4',
        title: 'Museum of Goa (MOG)',
        location: 'Pilerne Industrial Estate',
        categorySlug: 'instagrammable-places',
        image: '/assets/site78/63.webp',
        description: 'An avant-garde contemporary art space created by artist Subodh Kerkar, celebrated for large-scale outdoor seashell sculptures and modern installations.',
        highlights: ['Contemporary Art Installations', 'Outdoor Sculpture Garden', 'Thought-Provoking Modern Exhibitions']
      }
    ]
  }
];

/* =========================================================================
   9. FAQS (8 DETAILED REAL FAQS)
   ========================================================================= */

export const FAQS_DATA: FaqItem[] = [
  {
    question: 'Is early check-in and late check-out possible?',
    answer: 'Standard check-in time is from 2:00 PM, and check-out time is until 11:00 AM. Early check-in and late check-out can be arranged subject to room availability on your arrival day. If you require guaranteed early morning access, we recommend reserving from the prior night.'
  },
  {
    question: 'Do you provide an extra bed and mattress?',
    answer: 'Yes. Our resort offers premium extra rollaway beds with plush orthopedic mattresses and luxury linen upon request for additional guests, applicable with nominal supplementary charges.'
  },
  {
    question: 'Is Aurelia Goa a pet-friendly resort?',
    answer: 'Yes, our resort is pet-friendly in designated outdoor tropical garden and terrace zones. However, for hygiene and luxury comfort standards, pets are not permitted inside guest room bedrooms or overnight on private pool decks.'
  },
  {
    question: 'Are taxis and airport transfers available from the property?',
    answer: 'Absolutely. Our 24/7 concierge team will be delighted to coordinate private airport transfers to/from MOPA International Airport (35 mins) or Dabolim Airport (70 mins), as well as dedicated chauffeur-driven AC vehicles for sightseeing and nightlife trips across Goa.'
  },
  {
    question: 'Can outside visitors visit guests in their rooms?',
    answer: 'As per our hotel security, privacy, and safety regulations, registered outside visitors are welcome to meet guests in our reception lounge, restaurant, and beachfront resto-bar. However, visitors are not permitted into guest room suites without advance front-desk registration and government ID verification.'
  },
  {
    question: 'Is there a private pool for each room?',
    answer: 'Yes! Every room and suite at Aurelia Goa features an exclusive personal freshwater plunge pool located in your private enclosed courtyard or garden. You enjoy 100% complete privacy for swimming and sunbathing.'
  },
  {
    question: 'Can you arrange customized room decorations and fresh flowers before check-in?',
    answer: 'Certainly! As part of our bespoke Celebration Services, our guest relations team is delighted to prepare romantic bed florals, balloon styling, celebratory champagne, artisan cakes, and candlelight dinners prior to your arrival. Please notify our concierge at least 24 hours in advance.'
  },
  {
    question: 'Which is the nearest airport to Aurelia Resort Goa?',
    answer: 'The nearest airport is the new Manohar International Airport in MOPA (GOX), located approximately 32 km away (approx. 35 minutes via highway). Dabolim Airport (GOI) in South Goa is approximately 54 km away (approx. 70 minutes).'
  }
];

/* =========================================================================
   10. NEWS & INSIGHTS / BLOGS
   ========================================================================= */

export const BLOGS_DATA: BlogPostItem[] = [
  {
    id: 'blog-1',
    slug: 'best-photoshoot-places-in-goa',
    title: 'Top 7 Most Aesthetic Photoshoot Places in North Goa for Couples',
    category: 'Travel & Photography',
    date: 'February 12, 2026',
    readTime: '6 min read',
    image: '/assets/site78/60.webp',
    excerpt: 'From golden hour on quiet Morjim sands to the colorful cobblestones of Fontainhas, discover North Goa’s most cinematic locations for editorial pre-wedding and vacation shoots.',
    content: [
      'North Goa is an unmatched visual dreamscape where Portuguese colonial pastels meet tropical swaying coconut groves and dramatic red laterite cliffs.',
      '1. Morjim Beach at Low Tide: Unlike commercial tourist beaches, Morjim offers wide flat sand reflecting the sunset like a mirror.',
      '2. Parra Palm Avenue: The famous coconut tree tunnel is best visited at 7:00 AM when soft morning fog filters through the trees.',
      '3. Aurelia Private Pool Verandas: Take advantage of your private plunge pool and open tropical shower for intimate, editorial morning lifestyle shots.'
    ]
  },
  {
    id: 'blog-2',
    slug: 'north-goa-itinerary-for-3-days',
    title: 'The Ultimate 3-Day Curated Luxury Itinerary for North Goa',
    category: 'Goa Travel',
    date: 'January 28, 2026',
    readTime: '8 min read',
    image: '/assets/site78/61.webp',
    excerpt: 'How to spend 72 hours balancing tranquil beachfront relaxation, third-wave coffee brunches, historic fort sunsets, and vibrant waterfront dining.',
    content: [
      'Day 1: Arrival & Coastal Unwinding. Land at MOPA airport, arrive at Aurelia Resort in 35 minutes, dive into your private plunge pool, and head for a sunset stroll on Morjim Beach.',
      'Day 2: Heritage & Fine Dining. Morning French pastries in Assagao, browse boutique design stores, visit Chapora Fort, and reserve an evening beachfront dinner table.',
      'Day 3: Wellness & Ocean Cruise. Sunrise yoga on the deck, Ayurvedic massage at the spa, and an afternoon private catamaran charter along the Mandovi River.'
    ]
  },
  {
    id: 'blog-3',
    slug: 'places-to-visit-near-morjim-beach',
    title: 'Hidden Coastal Spots & Cafes to Visit Around Morjim Beach',
    category: 'Local Secrets',
    date: 'January 14, 2026',
    readTime: '5 min read',
    image: '/assets/site78/62.webp',
    excerpt: 'Explore the serene northern coastal belt: Mandrem river creeks, Ashwem designer shacks, and secret sunset vantage points near our resort.',
    content: [
      'Morjim and its adjoining neighbors Mandrem and Ashwem form the "Golden Triangle" of high-end, calm North Goa.',
      'Olive Ridley Turtle Nesting Sites: Morjim is home to protected nesting sands where nature conservationists safeguard turtle hatchlings.',
      'Artisanal Beach Shacks: Savor fresh burrata, wood-fired sourdough, and coconut water under eco-friendly thatch roofs.'
    ]
  },
  {
    id: 'blog-4',
    slug: 'best-luxury-resort-in-north-goa',
    title: 'Why Private Pool Rooms Are Redefining Modern Luxury Stays in Goa',
    category: 'Luxury Hospitality',
    date: 'December 20, 2025',
    readTime: '7 min read',
    image: '/assets/site78/63.webp',
    excerpt: 'The shift from massive commercial 500-room hotel chains to intimate boutique resorts where every guest room has its own secluded plunge pool.',
    content: [
      'Modern luxury travelers no longer want crowded shared hotel pools where lounge chairs are reserved with towels at 6:00 AM.',
      'At Aurelia Goa, true luxury is stepping straight from your king bed into your personal crystalline pool in total seclusion.'
    ]
  }
];

/* =========================================================================
   11. TESTIMONIALS DATA
   ========================================================================= */

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't-1',
    guestName: 'Ananya & Vikram Singhania',
    location: 'Mumbai',
    stayDate: 'Stayed in Deluxe Double Room · Jan 2026',
    roomType: 'Deluxe Double Room With Private Pool',
    rating: 5,
    comment: 'The private plunge pool was the highlight of our anniversary! Having complete privacy just 60 seconds from Morjim Beach was heaven. The open-air rainforest shower and the in-room espresso machine made every morning magical.'
  },
  {
    id: 't-2',
    guestName: 'Dr. Rohan Mehra & Family',
    location: 'New Delhi',
    stayDate: 'Stayed in Two Bedroom Suite · Feb 2026',
    roomType: 'Two Bedroom Premium Suite',
    rating: 5,
    comment: 'We booked the Two Bedroom Suite for a family getaway with our kids. The 780 sq. ft. space gave us ample room to relax, and having our private garden and pool kept the children endlessly happy. The chef prepared spectacular coastal seafood.'
  },
  {
    id: 't-3',
    guestName: 'Sophie & Marc Lefevre',
    location: 'Paris, France',
    stayDate: 'Stayed 6 Nights · Dec 2025',
    roomType: 'Deluxe Double Room With Private Pool',
    rating: 5,
    comment: 'A true boutique masterpiece in North Goa. Quiet, refined, sustainably minded, and far from the noise of Baga. The staff handled our airport transfers, dolphin safari, and rental scooter seamlessly. We will certainly return.'
  }
];
