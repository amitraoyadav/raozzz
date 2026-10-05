import { BusinessWebsite } from '../types';
import { site74Config } from '../config/site74Config';

export interface DestinationItem {
  id: string;
  slug: string;
  name: string;
  stateCountry: string;
  category: 'beach' | 'royal' | 'mountain' | 'city' | 'international' | 'honeymoon';
  heroImage: string;
  tagline: string;
  description: string;
  bestSeason: string;
  airportInfo: string;
  weatherOverview: string;
  venueCount: number;
  capacityRange: string;
  startingPrice: string;
  featuredVenues: {
    id: string;
    name: string;
    type: string;
    capacity: string;
    roomsCount: number;
    indoorSqFt: string;
    outdoorLawnSqFt: string;
    image: string;
    highlights: string[];
    priceRange: string;
  }[];
  culinaryHighlights: string[];
  plannerTips: string[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  features: string[];
  deliverables: string[];
  quote: string;
}

export interface OfferItem {
  id: string;
  title: string;
  destination: string;
  badge: string;
  validTill: string;
  image: string;
  description: string;
  inclusions: string[];
  terms: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Ceremony' | 'Mandap' | 'Reception' | 'Sangeet' | 'Decor' | 'Portraits' | 'Mehendi';
  destination: string;
  imageUrl: string;
  caption: string;
}

export interface HoneymoonItem {
  id: string;
  title: string;
  destination: string;
  image: string;
  tagline: string;
  highlights: string[];
  packageNights: string;
}

// ----------------------------------------------------
// 1. DESTINATIONS DATA
// ----------------------------------------------------
export const DESTINATION_CATEGORIES = [
  { id: 'all', name: 'All Destinations', count: 18 },
  { id: 'beach', name: 'Beachfront Sanctuaries', count: 4 },
  { id: 'royal', name: 'Palaces & Heritage', count: 5 },
  { id: 'mountain', name: 'Mountain & Hill Resorts', count: 3 },
  { id: 'city', name: 'Metropolitan Ballrooms', count: 4 },
  { id: 'international', name: 'International Luxury', count: 2 }
];

export const DESTINATIONS_DATA: DestinationItem[] = [
  {
    id: 'dest-goa',
    slug: 'goa',
    name: 'Goa',
    stateCountry: 'India',
    category: 'beach',
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=80',
    tagline: 'Sun-drenched coastal lawns & breezy sunset mandaps',
    description: 'Immerse your guests in the golden shores of South and North Goa. From expansive private beachfront lawns bordered by swaying palms to Portuguese-inspired architectural courtyards, Goa provides an unforgettable setting for barefoot luxury vows.',
    bestSeason: 'October to April (Pleasant coastal breezes and clear skies)',
    airportInfo: 'Dabolim Airport (GOI) & Manohar International Mopa (GOX) · 45-min private transfer',
    weatherOverview: 'Warm tropical sunshine with cool evening sea winds. Sunset timing averages 6:15 PM – 6:45 PM.',
    venueCount: 6,
    capacityRange: '150 – 900 Guests',
    startingPrice: '₹35 Lakhs+ (Banquet & 2-Night Stay Package)',
    featuredVenues: [
      {
        id: 'venue-goa-1',
        name: 'The Grandeur Beach Resort & Spa, Cavelossim',
        type: '5-Star Oceanfront Resort',
        capacity: 'Up to 750 Guests',
        roomsCount: 206,
        indoorSqFt: '12,000 sq.ft Pillarless Ballroom',
        outdoorLawnSqFt: '45,000 sq.ft Beachside Lawn',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        highlights: ['Private beach access for sunset baraat', 'Multiple lagoon-side cocktail decks', 'Dedicated soundproof afterparty lounge till 4 AM'],
        priceRange: '₹40L – ₹1.2 Cr'
      },
      {
        id: 'venue-goa-2',
        name: 'Grandeur Heritage Estate & Cliffs, Vagator',
        type: 'Boutique Luxury Cliffside Estate',
        capacity: 'Up to 350 Guests',
        roomsCount: 88,
        indoorSqFt: '6,500 sq.ft Banquet Hall',
        outdoorLawnSqFt: '25,000 sq.ft Cliff Edge Sunset Deck',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
        highlights: ['Panoramic Arabian Sea views from every vantage', 'Cascading infinity pools for sundowner mehendi', 'Private villa buyouts'],
        priceRange: '₹30L – ₹80L'
      }
    ],
    culinaryHighlights: ['Goan seafood grills & live Portuguese barbecue', 'Global coastal Mediterranean stations', 'Dedicated satvik and pure-vegetarian live kitchens'],
    plannerTips: ['Hold sunset ceremonies starting at 4:45 PM to capture the golden hour illumination over the sea.', 'Outdoor sound restrictions apply after 10:00 PM; move afterparties into the indoor soundproof club ballrooms.']
  },
  {
    id: 'dest-jaipur',
    slug: 'jaipur',
    name: 'Jaipur',
    stateCountry: 'Rajasthan, India',
    category: 'royal',
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80',
    tagline: 'Regal Rajputana grandeur, carved sandstone courtyards & royal processions',
    description: 'The Pink City evokes the romance of imperial dynasties. Celebrate amidst magnificent arches, hand-carved jali stone pavilions, torchlit courtyards with royal nagada drummers, and sprawling palatial lawns.',
    bestSeason: 'October to March (Pleasant royal winter warmth, cool evenings)',
    airportInfo: 'Jaipur International Airport (JAI) · 25-min chauffeured drive',
    weatherOverview: 'Crisp sunny winter afternoons (22°C) transitioning to magical star-lit evenings (11°C). Ideal for royal velvet attire.',
    venueCount: 8,
    capacityRange: '200 – 1,500 Guests',
    startingPrice: '₹55 Lakhs+ (Royal Celebration Package)',
    featuredVenues: [
      {
        id: 'venue-jaipur-1',
        name: 'The Grandeur Palace & Fortress, Kukas',
        type: 'Imperial Heritage Palace Resort',
        capacity: 'Up to 1,200 Guests',
        roomsCount: 245,
        indoorSqFt: '18,500 sq.ft Royal Durbar Hall',
        outdoorLawnSqFt: '60,000 sq.ft Fort Amphitheatre & Gardens',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
        highlights: ['Elephant & royal cavalry arrival courtyard', 'Authentic Mughal gardens with cascading fountains', 'Hand-painted fresco suites'],
        priceRange: '₹65L – ₹2 Cr'
      },
      {
        id: 'venue-jaipur-2',
        name: 'Grandeur Haveli Retreat, Mansarovar',
        type: 'Royal Rajputana Boutique Resort',
        capacity: 'Up to 500 Guests',
        roomsCount: 110,
        indoorSqFt: '8,000 sq.ft Crystal Hall',
        outdoorLawnSqFt: '30,000 sq.ft Poolside Courtyard',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
        highlights: ['Centuries of Shekhawati artisan craftwork', 'Stunning diya lighting niches across stone facades', 'Intimate royal buyout feel'],
        priceRange: '₹35L – ₹90L'
      }
    ],
    culinaryHighlights: ['Traditional Daal Baati Churma & Royal Ker Sangri', 'Live street chaat bazaar from Johari Bazaar master chefs', 'Bespoke international fusion banquet courses'],
    plannerTips: ['Book winter muhurat dates 10–12 months in advance as palace inventory is in high global demand.', 'Plan a grand baraat through the main fortress archway accompanied by royal trumpeters and vintage convertibles.']
  },
  {
    id: 'dest-udaipur',
    slug: 'udaipur',
    name: 'Udaipur',
    stateCountry: 'Rajasthan, India',
    category: 'royal',
    heroImage: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=1600&q=80',
    tagline: 'The Venice of the East · Shimmering lakes & floating palace terraces',
    description: 'Nowhere on earth rivals Udaipur for floating romantic splendor. With Lake Pichola reflecting ancient marble ramparts, boat arrivals for guests, and candlelit pavilions glowing against the water, your wedding becomes a living fairytale.',
    bestSeason: 'September to March (Crisp skies, sparkling lake surfaces)',
    airportInfo: 'Maharana Pratap Airport (UDR) · 35-min private transfer',
    weatherOverview: 'Delightful daytime weather (20°C–25°C) and cool breeze off the lakes at night. Zero humidity.',
    venueCount: 5,
    capacityRange: '100 – 600 Guests',
    startingPrice: '₹70 Lakhs+ (Luxury Lake Palace Celebration)',
    featuredVenues: [
      {
        id: 'venue-udaipur-1',
        name: 'The Grandeur Lake Palace, Lake Pichola',
        type: 'Floating Marble Island Palace',
        capacity: 'Up to 400 Guests',
        roomsCount: 85,
        indoorSqFt: '7,000 sq.ft Royal Mirror Gallery',
        outdoorLawnSqFt: '28,000 sq.ft Lakefront Promenade',
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        highlights: ['Exclusive royal barge arrival for bride and groom', 'Unmatched 360-degree views of City Palace and Jag Mandir', 'White marble architecture dating to 1746'],
        priceRange: '₹80L – ₹2.5 Cr'
      }
    ],
    culinaryHighlights: ['Mewari royal recipes handed down through generations', 'Silver thali formal imperial dinners', 'Champagne breakfast cruise on royal shikaras'],
    plannerTips: ['Coordinate guest boat transfer intervals so arrivals flow smoothly with rose water greetings at the pier.', 'Mandap set over the lake terrace with reflection lighting produces extraordinary photography.']
  },
  {
    id: 'dest-mussoorie',
    slug: 'mussoorie',
    name: 'Mussoorie & Himalayas',
    stateCountry: 'Uttarakhand, India',
    category: 'mountain',
    heroImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=80',
    tagline: 'Misty pine ridges, Doon Valley panoramas & cool mountain air',
    description: 'Elevate your union into the clouds. Nestled among ancient oak and deodar groves with the majestic Garhwal Himalayan range as your backdrop, our mountain resorts deliver enchanting intimacy and crisp natural elegance.',
    bestSeason: 'March to June (Summer blooms) & September to November (Crisp autumn peaks)',
    airportInfo: 'Jolly Grant Airport Dehradun (DED) · 90-min scenic mountain drive',
    weatherOverview: 'Refreshing 15°C–22°C during summer days; crisp 8°C–14°C in autumn. Clean mountain ozone.',
    venueCount: 4,
    capacityRange: '100 – 450 Guests',
    startingPrice: '₹40 Lakhs+ (Resort Buyout & High Altitude Weddings)',
    featuredVenues: [
      {
        id: 'venue-mussoorie-1',
        name: 'The Grandeur Himalayan Ridge Resort, Mussoorie',
        type: 'Luxury Mountain Sanctuary',
        capacity: 'Up to 400 Guests',
        roomsCount: 115,
        indoorSqFt: '9,000 sq.ft Cedar Ballroom',
        outdoorLawnSqFt: '35,000 sq.ft Valley View Terrace',
        image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80',
        highlights: ['Unobstructed 180° view of snowcapped Himalayan peaks', 'Outdoor bonfire amphitheatre for acoustic sangeet nights', 'Heated infinity pools overlooking the valley'],
        priceRange: '₹45L – ₹1 Cr'
      }
    ],
    culinaryHighlights: ['Pahari organic artisanal courses with local mountain honey', 'Live tandoori grills around crackling woodfires', 'Mulled wine & hot chocolate bar for evening receptions'],
    plannerTips: ['Provide pashmina stoles in guest welcome hampers for open-air evening ceremonies.', 'Mid-afternoon ceremonies maximize warmth and daylight across the surrounding valley ridges.']
  },
  {
    id: 'dest-mumbai',
    slug: 'mumbai',
    name: 'Mumbai',
    stateCountry: 'Maharashtra, India',
    category: 'city',
    heroImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1600&q=80',
    tagline: 'Arabian Sea horizons, glamorous skyline ballrooms & celebrity flair',
    description: 'For couples seeking high-voltage glamour, impeccable city logistics, and breathtaking seaside sunsets, Mumbai stands unmatched. Experience pillarless mega-ballrooms with cutting-edge production alongside tranquil sea terraces.',
    bestSeason: 'November to February (Mild winter pleasant coastal weather)',
    airportInfo: 'Chhatrapati Shivaji Maharaj International Airport (BOM) · 15-30 min transfer',
    weatherOverview: 'Pleasant winter temperatures (18°C–28°C) with dry coastal breezes.',
    venueCount: 7,
    capacityRange: '250 – 2,000 Guests',
    startingPrice: '₹45 Lakhs+ (Luxury Metropolitan Celebration)',
    featuredVenues: [
      {
        id: 'venue-mumbai-1',
        name: 'The Grandeur Seafront Hotel & Convention Centre, Juhu',
        type: 'Flagship 5-Star Urban Resort',
        capacity: 'Up to 1,500 Guests',
        roomsCount: 350,
        indoorSqFt: '24,000 sq.ft Grand Ballroom (Pillarless)',
        outdoorLawnSqFt: '40,000 sq.ft Arabian Sea Lawn',
        image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80',
        highlights: ['Front row sunset views over Juhu Beach', 'Dedicated separate VIP entrance and drive-in porch', 'Helipad on premises for VIP arrivals'],
        priceRange: '₹60L – ₹1.8 Cr'
      }
    ],
    culinaryHighlights: ['Global gourmet tasting menus designed by Michelin-starred guest chefs', 'Late-night Mumbai street food stations (Pav Bhaji, Baida Roti, Kulfi)', 'Signature mixology bar with artisanal botanical infusions'],
    plannerTips: ['Superb international and domestic flight connectivity makes Mumbai the most accessible hub for NRI and global guests.', 'Take advantage of our 24,000 sq.ft pillarless ballroom for massive LED concert-style sangeet stages.']
  },
  {
    id: 'dest-dubai',
    slug: 'dubai',
    name: 'Dubai & Arabian Desert',
    stateCountry: 'United Arab Emirates',
    category: 'international',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80',
    tagline: 'Futuristic skylines, private golden dune buyouts & luxury island resorts',
    description: 'An international celebration just three hours from India. Combine royal desert dune sundowners with ultra-luxury beachfront ballrooms on Palm Jumeirah, backed by world-class infrastructure and seamless global transit.',
    bestSeason: 'November to March (Flawless desert sunshine, cool nights)',
    airportInfo: 'Dubai International Airport (DXB) · 20-min chauffeured transfer',
    weatherOverview: 'Warm daytime sun (24°C) with crisp, clear desert evenings (16°C). Ideal outdoor weather.',
    venueCount: 4,
    capacityRange: '150 – 800 Guests',
    startingPrice: 'AED 150,000+ / ₹35 Lakhs+ (Bespoke Overseas Package)',
    featuredVenues: [
      {
        id: 'venue-dubai-1',
        name: 'The Grandeur Palm Resort & Beach Club, Dubai',
        type: 'Ultra-Luxury Island Resort',
        capacity: 'Up to 700 Guests',
        roomsCount: 220,
        indoorSqFt: '14,000 sq.ft Crystal Ballroom',
        outdoorLawnSqFt: '30,000 sq.ft Skyline Beachfront Terrace',
        image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=80',
        highlights: ['Dramatic views of the Dubai Marina skyline across the water', 'Private yacht charter dock for baraat arrival', 'Exclusive midnight beach party clearance'],
        priceRange: 'AED 200,000 – AED 600,000'
      }
    ],
    culinaryHighlights: ['Middle Eastern live mezze & whole roasted lamb ouzi', 'Live sushi and teppanyaki live counters', 'Authentic Indian regional banquet master stations'],
    plannerTips: ['Visa-on-arrival and multi-daily flights from all Indian metros ensure 95%+ RSVP turnout for international celebrations.', 'Host your Sangeet under the stars in a private luxury desert dune camp with falconry, fire dancers, and oud music.']
  }
];

// ----------------------------------------------------
// 2. SIGNATURE SERVICES
// ----------------------------------------------------
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'serv-planning',
    slug: 'wedding-planning',
    title: 'Turnkey Wedding Planning & Concierge',
    subtitle: 'From initial moodboard to the final farewell, executed with seamless precision',
    description: 'Our dedicated Wedding Specialists act as your personal orchestrators. We harmonize venue contracts, vendor riders, ceremony rituals, family coordinate schedules, and guest hospitality into one serene, stress-free experience.',
    heroImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Dedicated Senior Wedding Concierge assigned to each family',
      'Minute-by-minute master production run sheet across all events',
      'Vendor negotiation, contracts management & rider verification',
      '24/7 on-ground crisis management and protocol teams'
    ],
    deliverables: [
      'Comprehensive 3D Spatial Master Layouts',
      'Detailed Multi-Day Event Schedule Books',
      'Real-Time Family & Vendor Communication Hubs'
    ],
    quote: '"We don’t just coordinate timelines; we safeguard your peace of mind so you can celebrate fully."'
  },
  {
    id: 'serv-cuisine',
    slug: 'cuisine-banqueting',
    title: 'Master Culinary & Banqueting Artistry',
    subtitle: 'Epicurean journeys honoring heritage recipes, regional authenticity, and global innovation',
    description: 'Food is the sacred heartbeat of an Indian celebration. Our Executive Chefs collaborate with royal Maharajs, regional master cooks, and international pastry artists to craft personalized multi-course feasts tailored to your community traditions.',
    heroImage: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Completely separate, dedicated vegetarian & Jain banquet kitchens',
      'Live interactive theatrical food stations (Chaat, Tandoor, Dim Sum, Mezze)',
      'Customized cocktail mixology menus matching bridal aesthetic themes',
      'Midnight recovery bites and early-morning breakfast buffets for pheras'
    ],
    deliverables: [
      'Pre-Wedding Private Tasting Sessions with Executive Chef',
      'Dietary Allergy & Preference Matrix for 100% of Guests',
      'Signature Custom Monogram Cocktails & Artisan Dessert Tables'
    ],
    quote: '"Every bite is a celebration of family pride and hospitality."'
  },
  {
    id: 'serv-decor',
    slug: 'decor-lighting',
    title: 'Designer Décor & Architectural Lighting',
    subtitle: 'Transforming ballrooms and oceanfront lawns into cinematic, emotional sanctuaries',
    description: 'In collaboration with India’s leading floral architects and set designers, we construct custom mandaps, dramatic crystal chandelier ceilings, candlelit loggias, and bespoke stage installations that capture your personal love story.',
    heroImage: 'https://images.unsplash.com/photo-1519225424982-8406f5223e7b?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Full 3D CAD Virtual Pre-Renders before physical fabrication',
      'Direct farm-sourced exotic florals (Dutch hydrangeas, French roses, Indian marigolds)',
      'Intelligent concert lighting, laser mapping, and safe indoor fireworks',
      'Custom artisan furniture, luxury silks, and bespoke printed stationery'
    ],
    deliverables: [
      'Complete Spatial Elevation Blueprint & Render Portfolio',
      'Sample Tablescape & Floral Mockup Display',
      'Sustainable Eco-Friendly Floral Disposal & Composting Protocol'
    ],
    quote: '"We design spaces that make your breath catch the moment you walk through the doors."'
  },
  {
    id: 'serv-wellness',
    slug: 'bridal-spa-wellness',
    title: 'Bridal Suite, Spa & Wellness Preparation',
    subtitle: 'Holistic rejuvenation, private glam lounges, and Ayurvedic pre-wedding therapies',
    description: 'Weddings should energize you, not drain you. Our world-renowned luxury spas curate multi-day rejuvenation rituals for the bride, groom, and immediate families, ensuring glowing vitality and serene tranquility.',
    heroImage: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Pre-wedding detox, aromatherapy, and traditional Ayurvedic Abhyanga',
      'Private soundproof Bridal Glam Suites with dedicated hair & makeup mirrors',
      'Couple massage journeys before and after the wedding day',
      'Hydration, fresh fruit, and champagne service directly to bridal dressing rooms'
    ],
    deliverables: [
      'Personalized 3-Day Spa & Bridal Treatment Schedule',
      'Dedicated Bridal Attendant & Wardrobe Steaming Specialist',
      'Post-Wedding Couples Rejuvenation Bath Ritual'
    ],
    quote: '"Calm serenity is the ultimate bridal radiance."'
  },
  {
    id: 'serv-guest',
    slug: 'guest-experience-transfers',
    title: 'Guest Concierge & Seamless Hospitality',
    subtitle: 'From airport arrivals to parting gifts, every guest is treated like royalty',
    description: 'Your guests have journeyed far to witness your vows. Our dedicated hospitality team manages chauffeured airport pickups, luggage check-ins, custom welcome hampers, room allocations, and daily concierge desks.',
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Dedicated airport arrival counters with personalized signage and cold towels',
      'Luggage tagging & direct delivery to guest rooms before check-in',
      '24/7 on-site hospitality desk in hotel lobby with WhatsApp hotline',
      'Curated welcome hampers featuring artisanal local delicacies and itineraries'
    ],
    deliverables: [
      'Comprehensive Flight Arrival & Departure Shuttle Manifest',
      'Bespoke Hotel Room Welcome Itinerary Booklets',
      'Express VIP Group Check-In Counter Protocols'
    ],
    quote: '"The mark of a truly great wedding is when your guests talk about how cared-for they felt for years to come."'
  },
  {
    id: 'serv-entertainment',
    slug: 'entertainment-production',
    title: 'Celebrity Artists & Production Management',
    subtitle: 'Live acoustic sundowners, Bollywood celebrity performers, and high-energy afterparties',
    description: 'We orchestrate complete entertainment programming across every celebration. From soulful Sufi nights and acoustic pheras to celebrity Bollywood live acts and world-class international DJs with concert-grade sound.',
    heroImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Direct celebrity & artist management without unnecessary agency markups',
      'Concert-grade L-Acoustics sound engineering & intelligent kinetic lighting',
      'Custom choreography teams for family sangeet rehearsals and stage entry',
      'Royal baraat management: vintage cars, elephant protocol, and brass bands'
    ],
    deliverables: [
      'Full Artist Technical Riders & Backstage Coordination',
      'Choreography Music Editing & Video Rehearsal Guides',
      'Day-of Sound Engineer & Master of Ceremonies Briefing'
    ],
    quote: '"Music that elevates rituals and turns celebrations into unforgettable memories."'
  }
];

// ----------------------------------------------------
// 3. CURATED SPECIAL OFFERS
// ----------------------------------------------------
export const OFFERS_DATA: OfferItem[] = [
  {
    id: 'offer-royal-jaipur',
    title: 'The Imperial Heritage Palace Experience',
    destination: 'Jaipur & Udaipur',
    badge: 'Seasonal Privilege',
    validTill: 'Valid for bookings made by 31 Dec 2026',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80',
    description: 'Book your royal destination wedding at any of our heritage palaces to receive complimentary bridal presidential suite upgrades, custom welcome hampers, and a private royal shikara boat cruise.',
    inclusions: [
      'Upgrade to Presidential Suite for Bride & Groom for 3 nights',
      'Complimentary welcome cocktail bar for the Sangeet evening (up to 200 guests)',
      'Pre-wedding bridal spa journey for the bride and mother of the bride',
      'Double Grandeur Luxury Reward Points for worldwide honeymoon stays'
    ],
    terms: 'Applicable for wedding bookings of 80 rooms or more. Blackout dates apply on select auspicious muhurat dates.'
  },
  {
    id: 'offer-goa-beach',
    title: 'Coastal Sunset Wedding Bliss Package',
    destination: 'Goa',
    badge: 'Complimentary Inclusions',
    validTill: 'Valid for celebrations hosted through May 2027',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80',
    description: 'Celebrate by the Arabian Sea with our signature coastal banquet privileges, including a complimentary sundowner beach shack party and dedicated airport fleet transfers.',
    inclusions: [
      'Complimentary Beach Barbecue & Sundowner Cocktails for up to 150 guests',
      'Round-trip AC coach transfers from airport for all resident guests',
      'Complimentary 4-tier designer wedding cake by our master pastry chef',
      'Late checkout privilege for wedding party till 4:00 PM'
    ],
    terms: 'Valid on 2-night minimum buyout or room block of 60 rooms at Grandeur Goa properties.'
  },
  {
    id: 'offer-metro-mumbai',
    title: 'The Grand Metropolitan Ballroom Celebration',
    destination: 'Mumbai & Bengaluru',
    badge: 'Production Credit',
    validTill: 'Valid throughout 2026',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1000&q=80',
    description: 'Elevate your city gala with an exclusive ₹2,50,000 credit toward architectural lighting and audio-visual production, alongside a dedicated master sommelier service.',
    inclusions: [
      '₹2.5 Lakhs production & lighting subsidy applied to master banquet bill',
      'Dedicated Champagne bar during cocktail hour with crystal glassware',
      'Two complimentary hospitality suites for bridal glam and prep',
      'Complimentary anniversary stay voucher for 2 nights at any Grandeur resort'
    ],
    terms: 'Requires banquet spend of ₹25 Lakhs or more at our flagship city hotels.'
  },
  {
    id: 'offer-himalayan-mist',
    title: 'Himalayan Ridge Romantic Sanctuary Buyout',
    destination: 'Mussoorie',
    badge: 'Exclusive Buyout',
    validTill: 'Valid for Spring & Autumn 2026',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1000&q=80',
    description: 'Experience absolute privacy with a complete mountain resort buyout. Includes outdoor bonfires, cedar forest pheras, and all-inclusive mountain gourmet feasts.',
    inclusions: [
      'Full private sanctuary buyout with zero non-wedding guests on property',
      'Daily curated mountain activities: forest walks, yoga & sunrise breakfasts',
      'Complimentary live acoustic trio for outdoor high-altitude sangeet night',
      'Luxury pashmina shawls for all wedding attendees as parting favors'
    ],
    terms: 'Minimum 75 rooms for 2 nights buyout commitment.'
  }
];

// ----------------------------------------------------
// 4. INSPIRATION GALLERY
// ----------------------------------------------------
export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Floating Island Mandap under Crimson Sunset',
    category: 'Mandap',
    destination: 'Lake Pichola, Udaipur',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    caption: 'Suspended water pavilion draped in pastel hydrangeas and fresh tuberoses at dusk.'
  },
  {
    id: 'gal-2',
    title: 'Regal Fortress Sangeet with Kinetic Light Canopies',
    category: 'Sangeet',
    destination: 'The Grandeur Palace, Jaipur',
    imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    caption: 'Over 5,000 candles and crystal chandeliers lighting an ancient sandstone fortress courtyard.'
  },
  {
    id: 'gal-3',
    title: 'Oceanfront Beach Canopy & Tropical Marigolds',
    category: 'Ceremony',
    destination: 'Cavelossim Beach, Goa',
    imageUrl: 'https://images.unsplash.com/photo-1519225424982-8406f5223e7b?auto=format&fit=crop&w=1200&q=80',
    caption: 'Barefoot seaside wedding vows framed by driftwood arches and pastel floral clouds.'
  },
  {
    id: 'gal-4',
    title: 'Royal Groom Baraat with Vintage Convertibles & Cavalry',
    category: 'Portraits',
    destination: 'Amer Road, Jaipur',
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    caption: 'A regal royal procession with silver umbrellas, trumpeters, and traditional Rajput dancers.'
  },
  {
    id: 'gal-5',
    title: 'Imperial Banquet Tables under Fragrant Pergolas',
    category: 'Reception',
    destination: 'Palm Jumeirah, Dubai',
    imageUrl: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
    caption: 'Mirror top imperial tables dressed with hand-cut crystal, gold flatware, and French garden roses.'
  },
  {
    id: 'gal-6',
    title: 'Yellow Marigold Swings & Poolside Sundowner Mehendi',
    category: 'Mehendi',
    destination: 'South Goa Resort',
    imageUrl: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80',
    caption: 'Joyful sun-drenched mehendi celebration with bohemian cane seating, fresh coconut bars, and live percussion.'
  },
  {
    id: 'gal-7',
    title: 'Mountain Ridge Pheras Surrounded by Pine Mist',
    category: 'Ceremony',
    destination: 'Mussoorie Ridge',
    imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    caption: 'Sacred fire ceremony held at 6,500 feet elevation as golden mountain light bathes the valley.'
  },
  {
    id: 'gal-8',
    title: 'Pillarless Mega-Ballroom Reception Gala',
    category: 'Decor',
    destination: 'Mumbai Grand Ballroom',
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    caption: 'State-of-the-art concert production with curved LED stage backdrops and hanging floral ceilings.'
  },
  {
    id: 'gal-9',
    title: 'Bridal Portrait in Hand-Embroidered Zardozi Lehenga',
    category: 'Portraits',
    destination: 'Royal Haveli Suites, Udaipur',
    imageUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
    caption: 'Natural window shadows dancing over gold embroidery and heirloom polki jewellery in the bridal chambers.'
  }
];

// ----------------------------------------------------
// 5. HONEYMOON SANCTUARIES
// ----------------------------------------------------
export const HONEYMOON_DATA: HoneymoonItem[] = [
  {
    id: 'hm-1',
    title: 'Private Cliffside Pool Villa Escape',
    destination: 'Goa Coastal Cliffs',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Private infinity plunge pool over the sea, champagne breakfasts in bed & couple spa journeys.',
    highlights: ['Personal villa host & 24/7 private dining', 'Sunset catamaran cruise for two with sommelier pairings', 'In-villa soundproof cinema lounge'],
    packageNights: '4 Nights / 5 Days Luxury Retreat'
  },
  {
    id: 'hm-2',
    title: 'Royal Heritage Haveli Sanctuary',
    destination: 'Udaipur Lakeside',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Private shikara cruises on Lake Pichola, royal antique bathtubs filled with rose water, and candlelit dinners on royal ramparts.',
    highlights: ['Exclusive historical suite overlooking the illuminated City Palace', 'Ayurvedic Marma couple massage therapy', 'Private classical sitar & flute serenade during dinner'],
    packageNights: '3 Nights / 4 Days Regal Honeymoon'
  },
  {
    id: 'hm-3',
    title: 'Himalayan Pine Forest Mountain Lodge',
    destination: 'Mussoorie Heights',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Crackling cedar stone fireplaces, mist rising over pine forests, and high-altitude infinity baths.',
    highlights: ['Glass-walled chalet suites with private heated whirlpools', 'Chef’s table private dinners under Himalayan night skies', 'Guided sunrise trek with gourmet champagne picnic'],
    packageNights: '3 Nights / 4 Days Mountain Hideaway'
  }
];

// ----------------------------------------------------
// 6. FREQUENTLY ASKED QUESTIONS
// ----------------------------------------------------
export const FAQS_SITE74 = [
  {
    question: 'How far in advance should we start planning our destination wedding with Grandeur?',
    answer: 'We recommend initiating venue selection and date reservations 9 to 14 months in advance, especially if you desire high-demand auspicious muhurat dates in Jaipur, Udaipur, or Goa. However, our dedicated in-house production team has also successfully executed bespoke celebrations within 90 days.'
  },
  {
    question: 'Does Grandeur provide complete turnkey wedding coordination or just venue space?',
    answer: 'Grandeur provides both complete turnkey wedding solutions and flexible venue-only packages. Our specialized wedding teams can manage the entire ecosystem — including bespoke catering, floral and stage décor, sound/light production, artist management, guest airport logistics, and wedding rituals.'
  },
  {
    question: 'Can we bring our own specialized wedding decorators and caterers?',
    answer: 'Yes! While our in-house master chefs and design ateliers deliver world-class executions, we gladly partner with external empanelled designers, event planners, and Maharajs (pure vegetarian/Jain specialists) upon review of safety protocols and operational riders.'
  },
  {
    question: 'How do you handle guest room allocations and airport transfers for destination weddings?',
    answer: 'Our dedicated Guest Experience team sets up a private airport concierge desk at destination arrival terminals, coordinates air-conditioned Mercedes coach fleets, and manages pre-keyed express check-ins so your guests never wait in hotel lobby queues.'
  },
  {
    question: 'Are soundproof afterparty spaces available for late-night celebrations?',
    answer: 'Absolutely. While local state environmental laws enforce outdoor lawn sound restrictions after 10:00 PM, all of our flagship resorts feature soundproof banquet halls, private underground lounges, and club venues equipped for high-energy dancing until 4:00 AM.'
  },
  {
    question: 'What is the booking deposit and cancellation policy?',
    answer: 'A formal reservation deposit confirms your exclusive dates and room block. We offer staggered milestone payment schedules aligned with planning deliverables, with transparent contingency clauses for date postponements or natural weather occurrences.'
  }
];

// ----------------------------------------------------
// 7. BUSINESS WEBSITE OBJECT FOR PLATFORM INTEGRATION
// ----------------------------------------------------
export const SITE_74_WEBSITE: BusinessWebsite = {
  id: 'site-74-grandeur-weddings',
  businessName: site74Config.BRAND_NAME,
  templateId: 'luxury_palace_destination_74',
  category: 'destination_weddings',
  slug: '74-grandeur-weddings',
  tagline: site74Config.TAGLINE,
  description: 'India’s premier luxury wedding and resort hospitality brand. From royal Rajputana palaces and coastal beachfront sanctuaries to glamorous metropolitan ballrooms and mountain ridge sanctuaries.',
  ownerName: 'Grandeur Luxury Hospitality Board',
  city: 'New Delhi, Mumbai & Worldwide',
  address: site74Config.ADDRESS,
  phone: site74Config.PHONE,
  whatsapp: site74Config.WHATSAPP,
  email: site74Config.EMAIL,
  mapsUrl: 'https://maps.google.com/?q=Aerocity+New+Delhi',
  openingHours: 'Mon-Sun: 24/7 Global Wedding Concierge Desks',
  bookingType: 'consultation_quote',
  bookingCtaLabel: 'Start Planning Your Wedding',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 2499,
  paymentStatus: 'paid',
  primaryColor: site74Config.COLORS.primary,
  secondaryColor: site74Config.COLORS.secondary,
  coverUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80',
  items: [],
  sections: [
    { id: 'hero', title: 'Everlasting Vows', isEnabled: true, order: 1 },
    { id: 'destinations', title: 'Curated Destinations', isEnabled: true, order: 2 },
    { id: 'experiences', title: 'Wedding Experiences', isEnabled: true, order: 3 },
    { id: 'services', title: 'Signature Services', isEnabled: true, order: 4 },
    { id: 'offers', title: 'Curated Wedding Offers', isEnabled: true, order: 5 },
    { id: 'gallery', title: 'Inspiration Gallery', isEnabled: true, order: 6 },
    { id: 'honeymoon', title: 'Honeymoon Escapes', isEnabled: true, order: 7 },
    { id: 'planning', title: 'Start Planning Experience', isEnabled: true, order: 8 },
    { id: 'faq', title: 'Frequently Asked Questions', isEnabled: true, order: 9 }
  ],
  gallery: GALLERY_PHOTOS.map(p => ({
    id: p.id,
    title: p.title,
    category: 'events',
    imageUrl: p.imageUrl
  })),
  offers: OFFERS_DATA.map(o => ({
    id: o.id,
    title: o.title,
    description: o.description,
    discountPercent: 15,
    validTill: o.validTill
  })),
  createdAt: '2026-03-15T00:00:00Z',
  updatedAt: '2026-10-05T00:00:00Z'
};
