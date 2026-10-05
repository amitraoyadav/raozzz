import { siteConfig } from '../config/siteConfig';
import { BusinessWebsite } from '../types';

export interface DestinationItem {
  id: string;
  slug: string;
  name: string;
  stateOrRegion: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  coverImage: string;
  galleryImages: string[];
  vibe: 'Palatial & Royal' | 'Beachfront & Coastal' | 'Backwaters & Nature' | 'Jungle & Mountain' | 'Heritage & Modern';
  avgGuestCount: string;
  estBudgetRange: string;
  bestSeason: string;
  climateInfo: string;
  airportAccess: string;
  venuesCount: number;
  highlightVenues: {
    name: string;
    type: string;
    capacity: string;
    rooms: string;
    highlight: string;
    image: string;
  }[];
  itinerary: {
    day: string;
    title: string;
    events: string[];
  }[];
  keyConsiderations: string[];
}

export interface VenueItem {
  id: string;
  slug: string;
  name: string;
  destination: string;
  destinationSlug: string;
  propertyType: 'Palace Hotel' | 'Fort Resort' | 'Beach Resort' | 'Heritage Haveli' | 'Luxury Estate' | 'Backwater Retreat';
  image: string;
  galleryImages: string[];
  capacity: string;
  guestRooms: number;
  lawnsAndHalls: string[];
  priceTier: '₹₹₹ (Premium)' | '₹₹₹₹ (Luxury)' | '₹₹₹₹₹ (Ultra Luxury)';
  startingPriceNote: string;
  highlights: string[];
  description: string;
  cateringPolicy: string;
  alcoholPolicy: string;
  musicCurfew: string;
  bestSuitedFor: string;
}

export interface WeddingServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  deliverables: string[];
  processSteps: string[];
  whyUs: string;
}

export interface WeddingPackageItem {
  id: string;
  name: string;
  subtitle: string;
  tag: string;
  idealFor: string;
  guestBracket: string;
  estimatedBudget: string;
  duration: string;
  image: string;
  inclusions: string[];
  popularAddons: string[];
  recommendedDestinations: string[];
}

export interface RealWeddingStory {
  id: string;
  slug: string;
  coupleNames: string;
  destination: string;
  venue: string;
  weddingDate: string;
  guestCount: string;
  coverImage: string;
  photos: string[];
  story: string;
  theme: string;
  highlights: string[];
}

export interface GalleryPhotoItem {
  id: string;
  title: string;
  category: 'Mandap' | 'Sangeet' | 'Mehendi' | 'Haldi' | 'Reception' | 'Decor' | 'Couple';
  location: string;
  imageUrl: string;
  aspect: 'square' | 'portrait' | 'landscape';
}

export interface BlogItem {
  id: string;
  slug: string;
  title: string;
  category: 'Cost Guides' | 'Venues & Palaces' | 'Planning Advice' | 'Destination Insights';
  author: string;
  date: string;
  readTime: string;
  coverImage: string;
  summary: string;
  keyPoints: string[];
  contentParagraphs: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'General' | 'Budgets & Fees' | 'Destinations & Venues' | 'Vendors & Logistics';
}

export interface TestimonialItem {
  id: string;
  couple: string;
  location: string;
  weddingVenue: string;
  date: string;
  rating: number;
  review: string;
  avatar: string;
  highlightPhoto: string;
}

// -------------------------------------------------------------
// DESTINATIONS
// -------------------------------------------------------------
export const PSR_DESTINATIONS: DestinationItem[] = [
  {
    id: 'dest-udaipur',
    slug: 'udaipur',
    name: 'Udaipur',
    stateOrRegion: 'Rajasthan',
    tagline: 'The City of Lakes & Majestic Royal Romance',
    shortDesc: 'World-renowned island palaces, shimmering lake vistas, and majestic Aravali hilltops make Udaipur the pinnacle of royal destination weddings.',
    fullDesc: 'Often celebrated as the Venice of the East, Udaipur offers fairy-tale palatial venues overlooking Lake Pichola and Fateh Sagar. With private royal boat arrivals for the baraat, centuries-old marble courtyards for the pheras, and dramatic palace illuminations for the reception, Udaipur creates an everlasting royal impression.',
    coverImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=800&q=80'
    ],
    vibe: 'Palatial & Royal',
    avgGuestCount: '150 - 350 Guests',
    estBudgetRange: '₹45 Lakhs - ₹2.5 Crores+',
    bestSeason: 'October to March (Pleasant 18°C - 28°C)',
    climateInfo: 'Winter months bring crisp evenings and sunny days, ideal for outdoor lawns and lakeside courtyards.',
    airportAccess: 'Maharana Pratap Airport (UDR) — 35 mins from prime palace zone',
    venuesCount: 22,
    highlightVenues: [
      {
        name: 'The Leela Palace Udaipur',
        type: 'Ultra Luxury Palace Hotel',
        capacity: '400 Guests',
        rooms: '80 Rooms',
        highlight: 'Private fairy-tale boat transfers across Lake Pichola and royal lakeside mandap lawns.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Jagmandir Island Palace',
        type: 'Historic Island Fortress',
        capacity: '600 Guests',
        rooms: 'Grand Suites',
        highlight: 'An exclusive 17th-century island surrounded by water, perfect for monumental sangeet and pheras.',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Fateh Garh Heritage Fort',
        type: 'Hilltop Heritage Sanctuary',
        capacity: '300 Guests',
        rooms: '51 Heritage Rooms',
        highlight: 'Dramatic 360-degree panoramic views of Lake Pichola and the Aravali mountain range.',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80'
      }
    ],
    itinerary: [
      { day: 'Day 01', title: 'Royal Welcome & Sundowner Mehendi', events: ['Traditional Dhol & Aarti Welcome', 'Lakeside Mehendi Carnival', 'Evening Rajasthani Qawwali Night'] },
      { day: 'Day 02', title: 'Joyful Haldi & Grand Sangeet', events: ['Phoolon Ki Haldi with Marigold Decor', 'High-energy Sangeet with Celebrity DJ', 'Late-night After-Party'] },
      { day: 'Day 03', title: 'Royal Baraat, Pheras & Reception', events: ['Vintage Car & Elephant Baraat', 'Sunset Mandap Ceremony by the Lake', 'Black Tie Gala Dinner & Fireworks'] }
    ],
    keyConsiderations: [
      'Early booking is critical (9-12 months prior) due to high peak season palace demand.',
      'Sound restrictions mandate indoor after-parties after 10:00 PM per local heritage zone rules.',
      'Logistics require boat jetty coordination and dedicated luggage handling teams.'
    ]
  },
  {
    id: 'dest-jaipur',
    slug: 'jaipur',
    name: 'Jaipur',
    stateOrRegion: 'Rajasthan',
    tagline: 'The Pink City of Fortresses & Imperial Grandeur',
    shortDesc: 'Palaces with soaring cupolas, grand courtyards, and unmatched hospitality suited for grand celebratory weddings of up to 1,000+ guests.',
    fullDesc: 'Jaipur, the regal capital of Rajasthan, combines majestic heritage architecture with seamless connectivity from Delhi NCR and international gateways. From iconic royal palace hotels like Rambagh Palace to secluded palace forts on the highway, Jaipur offers opulent venues equipped for grand baraat processions and opulent wedding feasts.',
    coverImage: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519225438848-771bf6132046?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80'
    ],
    vibe: 'Palatial & Royal',
    avgGuestCount: '200 - 800 Guests',
    estBudgetRange: '₹35 Lakhs - ₹2 Crores+',
    bestSeason: 'October to mid-April',
    climateInfo: 'Clear skies, mild winter days (22°C) and cool royal evenings perfect for fire-lit courtyards.',
    airportAccess: 'Jaipur International Airport (JAI) — 20 mins from city center',
    venuesCount: 28,
    highlightVenues: [
      {
        name: 'Rambagh Palace Jaipur',
        type: 'Former Residence of the Maharaja',
        capacity: '500 Guests',
        rooms: '78 Luxury Suites',
        highlight: 'Historic Mughal gardens, marble cupolas, and peacocks strolling through manicured lawns.',
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Fairmont Jaipur',
        type: 'Mughal-Rajput Palace Resort',
        capacity: '1,000 Guests',
        rooms: '245 Rooms',
        highlight: 'Expansive banquet capacity, soaring fort walls, and grand procession courtyard.',
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Jai Mahal Palace',
        type: 'Indo-Saracenic Heritage Marvel',
        capacity: '600 Guests',
        rooms: '100 Rooms',
        highlight: '18 acres of landscaped Mughal gardens set in the heart of the city.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
      }
    ],
    itinerary: [
      { day: 'Day 01', title: 'Padharo Mhare Des Welcome & Sufi Soiree', events: ['Nagada & Rose Petal Shower', 'Mela-themed Mehendi Bazaar', 'Sham-e-Sufi Dinner under lanterns'] },
      { day: 'Day 02', title: 'Carnival Haldi & The Grand Bollywood Sangeet', events: ['Genda Phool Poolside Haldi', 'Choreographed Family Sangeet Performances', 'Live Band & DJ'] },
      { day: 'Day 03', title: 'Maharaja Baraat, Pheras & Royal Reception', events: ['Vintage Rolls-Royce & Camel Escort Baraat', 'Grand Palace Courtyard Mandap', 'Royal Feast with 100+ delicacies'] }
    ],
    keyConsiderations: [
      'Huge variety of 5-star inventory allows flexible room blocks and smooth vendor transport.',
      'Excellent road access from Delhi via the Delhi-Mumbai Expressway (under 3.5 hours).',
      'Rich local artisan ecosystem for authentic Rajasthani decor, silver cutlery, and folk performers.'
    ]
  },
  {
    id: 'dest-goa',
    slug: 'goa',
    name: 'Goa',
    stateOrRegion: 'Goa',
    tagline: 'Sun-Drenched Shores, Bohemian Luxury & Beachfront Vows',
    shortDesc: 'Golden sands, azure Arabian Sea horizons, and breezy luxury resorts offering unforgettable beachside mandaps and all-night after-parties.',
    fullDesc: 'Goa transforms the destination wedding into an unforgettable tropical holiday for your guests. From tranquil South Goa beachfront 5-star properties with private white-sand stretches to energetic North Goa boutique villas, Goa delivers barefoot elegance, sundowner cocktails, and relaxed celebrations.',
    coverImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=800&q=80'
    ],
    vibe: 'Beachfront & Coastal',
    avgGuestCount: '100 - 300 Guests',
    estBudgetRange: '₹30 Lakhs - ₹1.8 Crores+',
    bestSeason: 'November to March (Dry, breezy, 24°C - 30°C)',
    climateInfo: 'Warm tropical sunshine tempered by gentle sea breezes, ideal for sunset ceremonies on the sand.',
    airportAccess: 'Dabolim Airport (GOI) or Manohar International Airport (GOX / Mopa)',
    venuesCount: 24,
    highlightVenues: [
      {
        name: 'The Leela Goa (Cavelossim)',
        type: 'Lagoon & Beach Luxury Resort',
        capacity: '500 Guests',
        rooms: '206 Rooms',
        highlight: '75 acres of lush lagoons, private Mobor beach access, and expansive coconut grove lawns.',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Taj Exotica Resort & Spa (Benaulim)',
        type: 'Mediterranean Style Beachfront Resort',
        capacity: '400 Guests',
        rooms: '140 Rooms',
        highlight: 'Direct pristine beach frontage, private villas with plunge pools, and seaside sunset lawns.',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Alila Diwa Goa (Majorda)',
        type: 'Contemporary Goan Sanctuary',
        capacity: '350 Guests',
        rooms: '153 Rooms',
        highlight: 'Infinity pool overlooking paddy fields and a grand courtyard for open-air sangeet.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
      }
    ],
    itinerary: [
      { day: 'Day 01', title: 'Sundowner Welcome & Bohemian White Party', events: ['Tropical Coconut Welcome', 'Sunset Beach Cocktail Party', 'Acoustic Percussionists & Fire Dancers'] },
      { day: 'Day 02', title: 'Raindance Haldi & Glitz Sangeet', events: ['Poolside Haldi with Organic Flowers & Foam', 'Glamorous Sangeet with LED Dancefloor', 'Late Night Beachfront Silent Disco'] },
      { day: 'Day 03', title: 'Beachside Baraat, Sunset Vows & Gala', events: ['Convertible Open Jeep Baraat', 'Mandap on the Sand during Golden Hour Sunset', 'Seafood Grill BBQ & Champagne Toast'] }
    ],
    keyConsiderations: [
      'Beach setup permissions require Coastal Regulation Zone (CRZ) clearances (which PSR handles end-to-end).',
      'Outdoor music is permitted until 10:00 PM; indoor club venues or silent discos continue late.',
      'Ideal for couples seeking relaxed festive vibes with resort-style buyout experiences.'
    ]
  },
  {
    id: 'dest-jodhpur',
    slug: 'jodhpur',
    name: 'Jodhpur',
    stateOrRegion: 'Rajasthan',
    tagline: 'The Blue City of Majestic Sandstone Citadels',
    shortDesc: 'Golden yellow sandstone palaces, towering Mehrangarh Fort backdrops, and timeless Marwari royal elegance.',
    fullDesc: 'Dominating the Thar Desert edge, Jodhpur represents raw imperial grandeur. Anchored by the monumental Umaid Bhawan Palace and medieval hill fortresses, Jodhpur is the destination of choice for high-profile couples demanding unparalleled architectural spectacle and heritage authenticity.',
    coverImage: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80'
    ],
    vibe: 'Palatial & Royal',
    avgGuestCount: '150 - 450 Guests',
    estBudgetRange: '₹40 Lakhs - ₹3 Crores+',
    bestSeason: 'October to March (Mild sunny days, cool starry desert nights)',
    climateInfo: 'Dry desert climate with crisp starry nights that amplify outdoor torch-lit royal banquets.',
    airportAccess: 'Jodhpur Airport (JDH) — 15 mins from primary heritage district',
    venuesCount: 16,
    highlightVenues: [
      {
        name: 'Umaid Bhawan Palace Jodhpur',
        type: 'Living Royal Palace',
        capacity: '500 Guests',
        rooms: '70 Art Deco Palace Suites',
        highlight: 'The grandest private royal residence in the world, clad in golden Chittar sandstone.',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Ajit Bhawan Palace Resort',
        type: 'Indias First Heritage Hotel',
        capacity: '350 Guests',
        rooms: '81 Heritage Rooms',
        highlight: 'Authentic royal haveli charm, lush lawns, and antique vintage car collection.',
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Welcomhotel by ITC Hotels, Jodhpur',
        type: 'Oasis Luxury Resort',
        capacity: '600 Guests',
        rooms: '98 Rooms',
        highlight: 'Expansive desert-edge lawns with modern luxury amenities and banqueting infrastructure.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
      }
    ],
    itinerary: [
      { day: 'Day 01', title: 'Marwar Welcome & Desert Dunes Soiree', events: ['Royal Horn & Horseman Salute', 'Folk Langa-Manganiyar Welcome', 'Thar Desert Glamping Dinner'] },
      { day: 'Day 02', title: 'Courtyard Mehendi & Citadel Sangeet', events: ['Vibrant Rajasthani Mehendi with Leheriya Turbans', 'Grand Sangeet under Fort Shadows', 'DJ & Royal Feast'] },
      { day: 'Day 03', title: 'Royal Baraat, Palace Pheras & Gala', events: ['Elephant & Bagpiper Led Baraat', 'Baradari Sunset Pheras', 'Imperial Candlelit Banquet & Fireworks'] }
    ],
    keyConsiderations: [
      'Palatial exclusivity delivers unmatched privacy and photographic drama.',
      'Advance room blocking is vital as boutique heritage properties have limited key inventory.',
      'Desert-inspired catering (Dal Baati Churma, Laal Maas, Ker Sangri) adds unforgettable culinary flair.'
    ]
  },
  {
    id: 'dest-kerala',
    slug: 'kerala',
    name: 'Kerala',
    stateOrRegion: 'Kerala',
    tagline: 'God’s Own Country: Tranquil Backwaters & Lush Groves',
    shortDesc: 'Traditional houseboats, emerald palm canopies, serene backwater lagoons, and cliffside beach resorts.',
    fullDesc: 'For couples dreaming of a soulful, serene, and culturally authentic celebration, Kerala offers an enchanting tapestry. Imagine guests arriving on decorated wooden houseboats, exchange of vows amidst gentle backwater breezes in Kumarakom or Kovalam, accompanied by traditional Panchavadyam temple drummers and feast served on fresh banana leaves.',
    coverImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80'
    ],
    vibe: 'Backwaters & Nature',
    avgGuestCount: '80 - 250 Guests',
    estBudgetRange: '₹25 Lakhs - ₹1.4 Crores+',
    bestSeason: 'September to March (Crisp tropical climate)',
    climateInfo: 'Post-monsoon lushness with gentle temperatures (23°C - 31°C) and calming water breezes.',
    airportAccess: 'Cochin International Airport (COK) or Trivandrum (TRV)',
    venuesCount: 18,
    highlightVenues: [
      {
        name: 'Kumarakom Lake Resort',
        type: 'Heritage Backwater Retreat',
        capacity: '300 Guests',
        rooms: '65 Traditional Villas',
        highlight: 'Voted among top luxury resorts; picturesque meandering swimming pool and private lake jetty.',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'The Leela Kovalam, a Raviz Hotel',
        type: 'Cliffside Beachfront Resort',
        capacity: '400 Guests',
        rooms: '188 Rooms',
        highlight: 'Spectacular cliff-top venue overlooking the Arabian Sea with panoramic coastal sunset views.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Grand Hyatt Kochi Bolgatty',
        type: 'Waterfront Urban Resort',
        capacity: '1,200 Guests',
        rooms: '264 Rooms',
        highlight: 'Monumental convention and lawn spaces right on the scenic Vembanad Lake waterfront.',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80'
      }
    ],
    itinerary: [
      { day: 'Day 01', title: 'Houseboat Welcome & Kathakali Night', events: ['Tender Coconut & Jasmine Garland Welcome', 'Sunset Backwater Houseboat Cruise', 'Live Kathakali & Mohiniyattam Performance'] },
      { day: 'Day 02', title: 'Kerala Sadhya Mehendi & Tropical Sangeet', events: ['Traditional Banana Leaf Sadhya', 'Poolside Coconut-Themed Mehendi', 'Illuminated Waterfront Lawn Sangeet'] },
      { day: 'Day 03', title: 'Panchavadyam Baraat & Sunset Water Mandap', events: ['Percussion Drummer Baraat', 'Floating Mandap on Lake Edge', 'Coastal Seafood & Fusion Reception Dinner'] }
    ],
    keyConsiderations: [
      'Supreme choice for intimate, mindful, eco-luxury destination celebrations.',
      'Houseboats offer unique pre-wedding photo opportunities and cocktail cruises.',
      'Seamless transit from Cochin Airport with highway access to backwater belts.'
    ]
  },
  {
    id: 'dest-delhi-ncr',
    slug: 'delhi-ncr',
    name: 'Delhi NCR & Aravali',
    stateOrRegion: 'National Capital Region',
    tagline: 'Regal Farmsteads, Forts & Seamless Global Connectivity',
    shortDesc: 'Palatial havelis, luxury golf resorts, and expansive farmhouses delivering 5-star grandeur without travel hurdles for international guests.',
    fullDesc: 'Delhi NCR brings together the unmatched luxury of world-class 5-star hotel chains, expansive 15-acre private farmhouses in Chattarpur, and historical Aravali hill forts like Neemrana. With direct international flights from every global hub, Delhi NCR is the prime destination wedding hub for couples with guests arriving from across the world.',
    coverImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
    ],
    vibe: 'Heritage & Modern',
    avgGuestCount: '250 - 1,200 Guests',
    estBudgetRange: '₹35 Lakhs - ₹2.5 Crores+',
    bestSeason: 'October to March',
    climateInfo: 'Pleasant autumn and winter climate, ideal for open-air farmhouse marquees and lawn banquets.',
    airportAccess: 'Indira Gandhi International Airport (DEL) — within 20 - 45 mins of venues',
    venuesCount: 35,
    highlightVenues: [
      {
        name: 'The Oberoi Sukhvilas / Gurgaon',
        type: 'Ultra Luxury Forest & Spa Resort',
        capacity: '400 Guests',
        rooms: '86 Rooms & Luxury Tents',
        highlight: 'Palatial architecture, reflective fountains, and world-class culinary finesse.',
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'ITC Grand Bharat (Gurugram/Aravali)',
        type: 'All-Suite Retreat & Golf Sanctuary',
        capacity: '550 Guests',
        rooms: '104 Luxury Suites & Villas',
        highlight: 'Set across 300 acres of Aravali hills; 27-hole Jack Nicklaus signature golf course.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Heritage Village Resort & Spa (Manesar)',
        type: 'Rajasthani Haveli Resort',
        capacity: '500 Guests',
        rooms: '154 Rooms',
        highlight: 'Haveli-inspired palace architecture right off NH-8 with sprawling party lawns.',
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80'
      }
    ],
    itinerary: [
      { day: 'Day 01', title: 'Grand Welcome & Carnival Mehendi', events: ['Champagne & Dhol Reception', 'Moroccan-themed Poolside Mehendi', 'Sufi Lounge & Live Barbecue'] },
      { day: 'Day 02', title: 'Haldi Holi & High-Octane Sangeet', events: ['Phoolon Ki Haldi with Organic Petals', 'Choreographed Family Performances & DJ', 'Midnight Dessert Parlour'] },
      { day: 'Day 03', title: 'Royal Baraat, Sunset Vows & Grand Reception', events: ['Grand Horse & Brass Band Baraat', 'Custom Glass Mandap over Reflective Pool', 'Lavish Multi-Cuisine Feast with 150+ items'] }
    ],
    keyConsiderations: [
      'Unsurpassed logistics: closest airport proximity for NRI families and pan-India guests.',
      'Extensive options for massive 500+ to 1,500+ guest weddings without accommodation bottlenecks.',
      'Access to India’s most acclaimed celebrity chefs, makeup artists, and Bollywood artists.'
    ]
  },
  {
    id: 'dest-agra',
    slug: 'agra',
    name: 'Agra',
    stateOrRegion: 'Uttar Pradesh',
    tagline: 'City of Eternal Love with Taj Mahal Horizons',
    shortDesc: 'Say "I do" in the city built on love, with world-class palace resorts offering views of the Taj Mahal.',
    fullDesc: 'There is no setting more romantic on earth than the city of the Taj Mahal. Agra offers majestic Mughal-inspired hotel properties with expansive lush lawns, hand-carved jharokhas, and water bodies reflecting eternal romance. Located just 2.5 hours from Delhi via the Yamuna Expressway.',
    coverImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
    ],
    vibe: 'Palatial & Royal',
    avgGuestCount: '150 - 400 Guests',
    estBudgetRange: '₹35 Lakhs - ₹1.7 Crores+',
    bestSeason: 'October to March',
    climateInfo: 'Cool winters with crisp sunny days that highlight the marble monuments and gardens.',
    airportAccess: 'Kheria Airport (AGR) or 2.5 hrs smooth drive via Yamuna Expressway from Delhi Airport (DEL)',
    venuesCount: 12,
    highlightVenues: [
      {
        name: 'The Oberoi Amarvilas Agra',
        type: 'Ultra Luxury Mughal Resort',
        capacity: '250 Guests',
        rooms: '102 Luxury Suites',
        highlight: 'Every room and courtyard captures an uninterrupted view of the iconic Taj Mahal.',
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'ITC Mughal, a Luxury Collection Hotel',
        type: 'Mughal Architecture Resort',
        capacity: '600 Guests',
        rooms: '233 Rooms',
        highlight: 'Winner of Aga Khan Award for Architecture; sprawling 35-acre heritage gardens.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
      }
    ],
    itinerary: [
      { day: 'Day 01', title: 'Mughal Welcome & Jharokha Mehendi', events: ['Ittar & Rose Water Sprinkling Welcome', 'Traditional Ittar & Zardozi Themed Mehendi', 'Sham-e-Mehfil with Ghazals'] },
      { day: 'Day 02', title: 'Royal Haldi & Grand Sangeet', events: ['Floral Haldi by the fountains', 'Dazzling Sangeet with Mughal Arch Scenography', 'After-Party with DJ'] },
      { day: 'Day 03', title: 'Royal Baraat, Sunset Pheras & Reception', events: ['Royal Horse-drawn Chariot Baraat', 'Carved Marble Canopy Mandap', 'Royal Awadhi & Mughlai Banquet'] }
    ],
    keyConsiderations: [
      'Unsurpassed emotional connection for romantic love stories and symbolic vows.',
      'Superb proximity to Delhi for quick weekend travel for working professionals and families.',
      'Authentic Mughlai gastronomy (Dum Biryanis, kebabs, Petha assortments) curated by master Khansamas.'
    ]
  },
  {
    id: 'dest-jim-corbett',
    slug: 'jim-corbett',
    name: 'Jim Corbett & Nainital Foothills',
    stateOrRegion: 'Uttarakhand',
    tagline: 'Wilderness Elegance & Riverside Mountain Romance',
    shortDesc: 'River Kosi bank resorts, dense Sal forest canopies, and open-air riverside lawns for nature-loving couples.',
    fullDesc: 'Just 5 hours drive from Delhi NCR, Jim Corbett National Park provides a breath of pristine mountain air, majestic wilderness, and luxury riverside resorts. Celebrate with bonfires under millions of stars, riverside sundowner cocktails, and open-air lawn ceremonies surrounded by nature.',
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80'
    ],
    vibe: 'Jungle & Mountain',
    avgGuestCount: '100 - 300 Guests',
    estBudgetRange: '₹22 Lakhs - ₹1.1 Crores+',
    bestSeason: 'October to May (Pleasant Himalayan foothills)',
    climateInfo: 'Crisp mountain air with daytime sunshine and cozy evening chill perfect for outdoor firepits.',
    airportAccess: 'Pantnagar Airport (PGH) — 1.5 hrs, or 5 hrs drive from Delhi Airport (DEL)',
    venuesCount: 14,
    highlightVenues: [
      {
        name: 'Taj Corbett Resort & Spa',
        type: 'Riverside Wilderness Luxury Resort',
        capacity: '350 Guests',
        rooms: '61 Rooms & Cottages',
        highlight: 'Nestled on the banks of River Kosi with dense foliage and mountain vistas.',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Namah Resort Jim Corbett',
        type: 'Kosi Riverfront Resort',
        capacity: '300 Guests',
        rooms: '50 Luxury Cottages',
        highlight: 'Direct panoramic views of the riverbed and Sitabani reserve hills.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
      }
    ],
    itinerary: [
      { day: 'Day 01', title: 'Mountain Welcome & Bonfire Barbecue', events: ['Pahari Folk Song Welcome', 'Rustic Woodsy Mehendi', 'Riverside Bonfire & Acoustic Jamming'] },
      { day: 'Day 02', title: 'Jungle Safari, Haldi & Sangeet', events: ['Morning Jeep Safari for guests', 'Floral Haldi by the River Stream', 'Glitz Sangeet under Fairy Lights'] },
      { day: 'Day 03', title: 'Riverside Baraat, Sunset Vows & Feast', events: ['Open Gypsy Baraat Procession', 'Rustic Wooden Mandap on Riverbank', 'Celebratory Forest Feast & Lantern Release'] }
    ],
    keyConsiderations: [
      'High guest engagement: wildlife safari excursions and riverside leisure keep everyone energized.',
      'Sound restrictions near national park boundaries are strictly managed with indoor banquets after hours.',
      'Exceptional value compared to Rajasthan palaces with equal photographic charm.'
    ]
  }
];

// -------------------------------------------------------------
// VENUES
// -------------------------------------------------------------
export const PSR_VENUES: VenueItem[] = [
  {
    id: 'ven-leela-udaipur',
    slug: 'the-leela-palace-udaipur',
    name: 'The Leela Palace Udaipur',
    destination: 'Udaipur, Rajasthan',
    destinationSlug: 'udaipur',
    propertyType: 'Palace Hotel',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80'
    ],
    capacity: 'Up to 400 Guests',
    guestRooms: 80,
    lawnsAndHalls: ['Outer Courtyard (250 pax)', 'Guava Garden (400 pax)', 'Marwar Hall (150 pax)', 'Lakeside Terrace (180 pax)'],
    priceTier: '₹₹₹₹₹ (Ultra Luxury)',
    startingPriceNote: 'Enquire for bespoke palace buyout packages (Typically ₹75L - ₹1.5 Cr+ for 2 nights)',
    highlights: ['Private Boat Arrival across Lake Pichola', 'Direct City Palace Panorama', 'Butler Service for Every Guest', 'Heated Outdoor Pool'],
    description: 'The pinnacle of luxury in Udaipur. Set on the serene banks of Lake Pichola, The Leela Palace evokes the grandeur of Mewar heritage with gold-leaf accents, handcrafted tapestries, and serene water courtyards.',
    cateringPolicy: 'Strictly in-house 5-star culinary mastery with custom royal thali & global counters',
    alcoholPolicy: 'In-house licensed bar; outside alcohol allowed with corkage / permit',
    musicCurfew: 'Outdoor sound up to 10:00 PM; indoor ballroom till 03:00 AM',
    bestSuitedFor: 'Regal fairy-tale weddings, high-profile NRI celebrations, and intimate luxury ceremonies.'
  },
  {
    id: 'ven-rambagh-jaipur',
    slug: 'rambagh-palace-jaipur',
    name: 'Rambagh Palace Jaipur (Taj)',
    destination: 'Jaipur, Rajasthan',
    destinationSlug: 'jaipur',
    propertyType: 'Palace Hotel',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
    ],
    capacity: 'Up to 600 Guests',
    guestRooms: 78,
    lawnsAndHalls: ['Jaigarh Lawn (600 pax)', 'Panghat Lawn (350 pax)', 'Mubarak Mahal (180 pax)', 'Khasa Courtyard (200 pax)'],
    priceTier: '₹₹₹₹₹ (Ultra Luxury)',
    startingPriceNote: 'Custom royal quote upon request (₹80L - ₹2 Cr+ for comprehensive 2-3 night celebrations)',
    highlights: ['Former Residence of the Maharaja of Jaipur', 'Peacock Gardens & Marble Cupolas', 'Elephant Polo & Royal Vintage Fleet', 'World-Ranked Luxury Hotel'],
    description: 'Known as the "Jewel of Jaipur", Rambagh Palace showcases the finest traditions of Rajput hospitality. Walk in the footsteps of kings across 47 acres of landscaped gardens, ornate sandstone arches, and intricately carved jali screens.',
    cateringPolicy: 'Signature royal Rajasthani banquet curated by Taj master chefs; live specialized gourmet stations',
    alcoholPolicy: 'Full hotel bar operations; state excise permits arranged by PSR team',
    musicCurfew: 'Outdoor acoustic music till 10:00 PM; air-conditioned banquet halls till late',
    bestSuitedFor: 'Grand imperial royal weddings with traditional elephant processions and VIP guests.'
  },
  {
    id: 'ven-leela-goa',
    slug: 'the-leela-goa-cavelossim',
    name: 'The Leela Goa (Cavelossim)',
    destination: 'Goa (South Goa)',
    destinationSlug: 'goa',
    propertyType: 'Beach Resort',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80'
    ],
    capacity: 'Up to 500 Guests',
    guestRooms: 206,
    lawnsAndHalls: ['Beachfront Ocean Lawn (500 pax)', 'Aparanta Grand Ballroom (300 pax)', 'Lagoon Terrace (200 pax)', 'Coconut Grove Lawn (350 pax)'],
    priceTier: '₹₹₹₹ (Luxury)',
    startingPriceNote: 'Packages from ₹45L - ₹1.2 Cr+ based on seasonal dates & guest room block',
    highlights: ['Direct Pristine White Sand Beachfront', '75 Acres with Natural Lagoons & Golf Course', 'Private Pool Villas', 'Water Sports & Luxury Yacht Hire'],
    description: 'Blends Portuguese architecture with Southern Indian temple motifs across 75 acres of tropical paradise. With secluded beachfront access on Mobor Beach, it is South Goa’s undisputed crown jewel for luxury wedding celebrations.',
    cateringPolicy: 'Global culinary brigade offering Coastal Goan, Continental, North Indian, and specialized Jain kitchens',
    alcoholPolicy: 'Flexible beverage packages; licensed beach shack bars',
    musicCurfew: 'Beachfront till 10:00 PM; Aparanta Ballroom till dawn',
    bestSuitedFor: 'Sunset beach mandap ceremonies, bohemian chic welcome sundowners, and resort holiday weddings.'
  },
  {
    id: 'ven-umaid-bhawan-jodhpur',
    slug: 'umaid-bhawan-palace-jodhpur',
    name: 'Umaid Bhawan Palace Jodhpur',
    destination: 'Jodhpur, Rajasthan',
    destinationSlug: 'jodhpur',
    propertyType: 'Palace Hotel',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
    ],
    capacity: 'Up to 500 Guests',
    guestRooms: 70,
    lawnsAndHalls: ['Baradari Lawns (500 pax)', 'Marwar Hall (250 pax)', 'Central Dome Rotunda (150 pax)'],
    priceTier: '₹₹₹₹₹ (Ultra Luxury)',
    startingPriceNote: 'Exclusive royal buyout pricing upon consultation (₹1 Cr - ₹3 Cr+)',
    highlights: ['World’s Sixth Largest Private Residence', 'Built of Golden Chittar Sandstone', 'Subterranean Zodiac Pool', 'Art Deco Opulence'],
    description: 'Perched high above the Blue City of Jodhpur, Umaid Bhawan Palace has hosted the world’s most celebrated royal weddings and celebrity unions. Its colossal 105-foot cupola and palatial lawns provide an awe-inspiring stage.',
    cateringPolicy: 'Royal Rajasthani banquet curated with secret palace recipes; silver plate dining service',
    alcoholPolicy: 'Premium global liquor portfolio managed by palace sommeliers',
    musicCurfew: 'Outdoor lawn till 10:00 PM; royal ballroom till late',
    bestSuitedFor: 'Billionaire, celebrity, and high-net-worth royal unions requiring fortress-level privacy.'
  },
  {
    id: 'ven-fairmont-jaipur',
    slug: 'fairmont-jaipur-amer',
    name: 'Fairmont Jaipur (Kukas)',
    destination: 'Jaipur, Rajasthan',
    destinationSlug: 'jaipur',
    propertyType: 'Fort Resort',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80'
    ],
    capacity: 'Up to 1,000 Guests',
    guestRooms: 245,
    lawnsAndHalls: ['Grand Ballroom (800 pax)', 'Aviary Lawn (1,000 pax)', 'Aishbagh Courtyard (400 pax)', 'Rooftop Gazebo (150 pax)'],
    priceTier: '₹₹₹₹ (Luxury)',
    startingPriceNote: 'Wedding packages from ₹40L - ₹1 Cr+ depending on room blocks & catering selections',
    highlights: ['Massive 245-Room Capacity for Large Guest Lists', 'Mughal Architecture with Grand Ramparts', 'Dedicated Baraat Courtyard with Falconry', 'Spa & Rooftop Helipad'],
    description: 'Nestled amidst the rugged Aravali hills, Fairmont Jaipur was explicitly designed to accommodate monumental Indian destination weddings without compromising on palace grandeur or guest room availability.',
    cateringPolicy: 'Flexible culinary teams with dedicated Marwari, Punjabi, Gujarati & Pan-Asian specialty kitchens',
    alcoholPolicy: 'All bar formats supported; cocktail mixologist packages available',
    musicCurfew: 'Courtyard music till 10:00 PM; massive pillar-less ballroom till early morning',
    bestSuitedFor: 'Grand Indian weddings with 400 - 800+ guests seeking a cohesive single-property buyout.'
  },
  {
    id: 'ven-kumarakom-kerala',
    slug: 'kumarakom-lake-resort-kerala',
    name: 'Kumarakom Lake Resort',
    destination: 'Kumarakom, Kerala',
    destinationSlug: 'kerala',
    propertyType: 'Backwater Retreat',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80'
    ],
    capacity: 'Up to 300 Guests',
    guestRooms: 65,
    lawnsAndHalls: ['Lakeside Coconut Lawn (300 pax)', 'Heritage Poolside (180 pax)', 'Ayurmana Banquet (150 pax)'],
    priceTier: '₹₹₹₹ (Luxury)',
    startingPriceNote: 'Packages from ₹32L - ₹85L+ for comprehensive backwater buyout experience',
    highlights: ['Meandering Heritage Swimming Pool', 'Private Lake Jetty & Luxury Houseboats', 'Ayurvedic Wellness Spa', 'Traditional Kerala Architecture'],
    description: 'Consistently ranked among Asia’s finest resorts, Kumarakom Lake Resort recreates 16th-century Kerala manas (traditional homes) transplanted along the shores of serene Lake Vembanad.',
    cateringPolicy: 'Coastal Kerala feasts, traditional banana-leaf Sadhyas, alongside North Indian & Continental selections',
    alcoholPolicy: 'Beer, wine, and full bar licenses in designated banquet zones',
    musicCurfew: 'Outdoor serenades till 10:00 PM; cozy indoor banquets later',
    bestSuitedFor: 'Serene, intimate, nature-infused destination weddings with wellness and boat cruise activities.'
  },
  {
    id: 'ven-itc-grand-bharat',
    slug: 'itc-grand-bharat-gurugram',
    name: 'ITC Grand Bharat (Gurugram / Aravali)',
    destination: 'Delhi NCR & Aravali',
    destinationSlug: 'delhi-ncr',
    propertyType: 'Luxury Estate',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
    ],
    capacity: 'Up to 550 Guests',
    guestRooms: 104,
    lawnsAndHalls: ['Shatranj Lawn (500 pax)', 'Prithviraj Ballroom (350 pax)', 'Ghat Stepwell Courtyard (250 pax)'],
    priceTier: '₹₹₹₹₹ (Ultra Luxury)',
    startingPriceNote: 'Custom luxury quotes from ₹55L - ₹1.4 Cr+ for all-suite wedding buyouts',
    highlights: ['300 Acres of Untamed Aravali Foothills', '104 All-Suite Luxury Accommodation', 'Jack Nicklaus 27-Hole Golf Course', 'Inspired by Chola, Mughal & Adalaj Architecture'],
    description: 'An oasis of luxury just 45 minutes from New Delhi International Airport. ITC Grand Bharat pays tribute to 5,000 years of Indian architecture, providing royal stepwell mandaps and palatial ballrooms with unrivaled convenience.',
    cateringPolicy: 'Legendary ITC culinary legacy: Bukhara kebabs, Dum Pukht royal biryanis, and global fine dining',
    alcoholPolicy: 'Full hotel bar operations with curated global cocktail programs',
    musicCurfew: 'Outdoor lawns till 10:00 PM; sound-insulated ballrooms till 04:00 AM',
    bestSuitedFor: 'Couples wanting destination-style palace retreat luxury with zero outstation travel friction.'
  },
  {
    id: 'ven-taj-corbett',
    slug: 'taj-corbett-resort-spa',
    name: 'Taj Corbett Resort & Spa (Uttarakhand)',
    destination: 'Jim Corbett & Foothills',
    destinationSlug: 'jim-corbett',
    propertyType: 'Forest Resort' as any,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80'
    ],
    capacity: 'Up to 350 Guests',
    guestRooms: 61,
    lawnsAndHalls: ['Riverside Kosi Lawn (350 pax)', 'Jim’s Den Ballroom (180 pax)', 'Poolside Deck (150 pax)'],
    priceTier: '₹₹₹ (Premium)',
    startingPriceNote: 'Attractive forest wedding buyouts from ₹25L - ₹65L+ across 2 nights',
    highlights: ['Situated on the banks of River Kosi', 'Surrounded by ancient Sal and Mango groves', 'Wildlife Safari Escapades for Guests', 'Himalayan Mountain Breeze'],
    description: 'Escape the city rush into the tranquil wilderness of Jim Corbett. Taj Corbett offers thatched cottage luxury, candle-lit pebble riverbanks, and woodsy fairy-light decor that turns your wedding into a rejuvenating holiday.',
    cateringPolicy: 'Delicious Kumaoni local delicacies, tandoori grills, and lavish multi-course North Indian buffets',
    alcoholPolicy: 'Fully licensed resort bar and bonfire cocktail stations',
    musicCurfew: 'Outdoor sound till 10:00 PM due to forest proximity; banquet celebrations continue inside',
    bestSuitedFor: 'Nature lovers, intimate destination weddings, and relaxed three-day resort takeovers.'
  }
];

// -------------------------------------------------------------
// WEDDING PLANNING SERVICES (11 SERVICES)
// -------------------------------------------------------------
export const PSR_SERVICES: WeddingServiceItem[] = [
  {
    id: 'srv-venue-selection',
    slug: 'venue-selection',
    title: 'Venue Selection & Negotiations',
    shortDesc: 'Curating the ideal palace, beachfront, or heritage resort matched to your vision, with privileged bulk rates and contract protection.',
    fullDesc: 'Choosing the right venue determines 70% of your wedding’s success and budget. With 12+ years of on-ground relationships across India’s premier heritage hotels and luxury chains (Taj, Oberoi, Leela, ITC, Marriott, Fairmont), we scout hidden gems, verify ground realities, negotiate bulk room allocations, and safeguard your deposit with ironclad contracts.',
    iconName: 'Building2',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      'Comprehensive comparative analysis of 5-8 shortlisted properties with real cost projections',
      'Assisted recce and site visits with dedicated senior venue scout',
      'Contract negotiation: room rates, food & beverage minimums, lawn hire fees, and corkage waiver',
      'Verification of local noise curfews, liquor permits, and backup indoor rain contingency halls',
      'Blocking room inventories and managing complex buyout agreements'
    ],
    processSteps: [
      'Discovery Consultation to understand guest count, desired vibe, dates & target budget',
      'Presentation of curated venue dossier with transparent rate sheets',
      'Guided site inspection trip with tasting session and mock layout walk-through',
      'Final legal agreement review, signature, and payment calendar schedule'
    ],
    whyUs: 'Our direct GM-level relationships save our clients an average of 15% - 22% on published rack rates and secure complimentary suite upgrades.'
  },
  {
    id: 'srv-wedding-planning',
    slug: 'wedding-planning',
    title: 'Full-Service Wedding Planning',
    shortDesc: 'End-to-end master planning, milestone tracking, budget allocation, and dedicated wedding director from day one to the farewell.',
    fullDesc: 'A luxury destination wedding is a 300-moving-part production. We act as your chief of staff, financial controller, and creative director. We structure your entire timeline, balance line-item budgets, draft master run sheets, and ensure both families experience zero stress from engagement to the bidai.',
    iconName: 'CalendarCheck2',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      'Dedicated Senior Wedding Planner and Lead Shadow Coordinator for the Bride & Groom',
      'Dynamic cloud-based budget tracker with real-time expenditure variance alerts',
      'Master Event Run-of-Show detailing every cue down to 5-minute increments',
      'Statutory licensing (PPL, IPRS, NOVEX music rights, excise permissions, fire NOC)',
      'Regular weekly video progress reviews and collaborative family planning sessions'
    ],
    processSteps: [
      'Strategic 12-Month / 6-Month Roadmap & Milestones Definition',
      'Budget Architecture: Allocating funds scientifically across 18 distinct categories',
      'Vendor Procurement & Cross-functional Briefing Meetings',
      'On-site Production Command Center Setup 48 hours prior to guest arrival'
    ],
    whyUs: 'Over 380+ executed destination weddings with 0% missed cues and seamless contingency mitigation.'
  },
  {
    id: 'srv-decor-design',
    slug: 'decor-and-design',
    title: 'Decor, Scenography & Floral Design',
    shortDesc: 'Immersive spatial designs, custom-sculpted mandaps, cinematic lighting, and thematic scenography tailored to each celebration.',
    fullDesc: 'We don’t believe in recycled catalogue decor. Our in-house scenographers, architects, and floral stylists create bespoke visual narratives. From suspended botanical mandaps over shimmering water bodies to opulent crystal chandeliers for the Sangeet and organic marigold Phoolon Ki Haldi sets, every venue space is transformed into high art.',
    iconName: 'Palette',
    image: 'https://images.unsplash.com/photo-1519225438848-771bf6132046?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      'Custom 3D walkthrough renders and moodboards for all 4-6 wedding functions',
      'Architectural lighting design (moving heads, architectural washes, pinspots, fairy canopies)',
      'Exotic floral sourcing (Dutch roses, hydrangeas, orchids, and local jasmine garlands)',
      'Custom furniture curation, stage backdrops, entrance arches, and photo installation walls',
      'Signage, printed stationery, monogrammed napkins, and personalized linen detailing'
    ],
    processSteps: [
      'Creative Conceptualization Workshop with couple (Pinterest boards, personal stories)',
      '3D CAD Layouts showing precise venue dimensions, sightlines & camera angles',
      'Physical Mock-Up Review (centerpiece sample, linen swatches, charger plates)',
      'Turnkey On-Site Fabrication with our dedicated 80-member production crew'
    ],
    whyUs: 'In-house production warehouse and direct floral farm imports ensure jaw-dropping luxury aesthetics without exorbitant middleman markups.'
  },
  {
    id: 'srv-hospitality',
    slug: 'hospitality-guest-management',
    title: 'Hospitality & Guest Concierge',
    shortDesc: 'White-glove guest reception, dedicated airport greeting desks, luggage escort, personalized welcome hampers, and room allocations.',
    fullDesc: 'At a destination wedding, your guests are your VIPs. Our hospitality concierge acts as a seamless extension of your family warmth. We run branded welcome desks at the airport/train station, coordinate luxury fleet pickups, manage seamless hotel check-in keys without lobby queues, and staff 24/7 hospitality desks.',
    iconName: 'HeartHandshake',
    image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      'Dedicated airport & railway reception desks with branded signboards and cold towels',
      'Express pre-keyed room check-in packets with customized itineraries & room keys',
      'Design, curation, and room delivery of luxury welcome hampers and emergency kits',
      '24/7 Hospitality Lounge Desk in hotel lobby for guest requests, iron, salon, and taxis',
      'RSVP management, WhatsApp interactive concierge chatbot, and dietary preference mapping'
    ],
    processSteps: [
      'Guest Roster Ingestion & Flight Schedule Categorization in central portal',
      'Rooming Matrix Optimization (family clusters, elderly ground-floor preference)',
      'Welcome Gift Delivery prior to guest arrival into their designated rooms',
      'Day-and-night guest assistance and personalized departure coordination'
    ],
    whyUs: 'Your relatives enjoy the wedding as honoured guests rather than running around managing room keys and luggage.'
  },
  {
    id: 'srv-catering',
    slug: 'catering-menu-curation',
    title: 'Catering & Culinary Experiences',
    shortDesc: 'Curating world-class menus, master chefs, authentic regional food gallerias, live experiential stations, and late-night comfort bites.',
    fullDesc: 'Food is the soul of any celebration. We collaborate with celebrated royal khansamas, award-winning regional halwais, and five-star executive chefs to design diverse gastronomic journeys. From a traditional 56-bhog royal dinner to interactive Japanese Robata grills, Neapolitan wood-fired pizza ovens, and 2:00 AM slider bars.',
    iconName: 'UtensilsCrossed',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      'Menu curation balancing regional authenticity (Rajasthani, Awadhi, Gujarati, Punjabi) with global flair',
      'Dedicated food tasting sessions and portion control advisory',
      'Sourcing of specialized caterers and external sweet-makers (Mithai artisans)',
      'Interactive food station styling: Nitrogen ice cream bars, artisanal cheese grazing tables',
      'Beverage management: signature bride-and-groom cocktails, flair bartenders, and glassware audit'
    ],
    processSteps: [
      'Dietary & Cultural Preference Assessment (Pure Vegetarian, Jain, Vegan, Halal)',
      'Drafting function-specific menus preventing repetitive dishes across 3 days',
      'Tasting and presentation trial at the host venue',
      'Live kitchen monitoring and service pacing during wedding banquets'
    ],
    whyUs: 'Zero delays in food refills, temperature-controlled gourmet presentation, and memorable culinary storytelling.'
  },
  {
    id: 'srv-photography',
    slug: 'photography-cinematography',
    title: 'Photography & Cinematic Films',
    shortDesc: 'Curating India’s leading visual storytellers to capture timeless emotions, drone aerials, and same-day teaser edits.',
    fullDesc: 'Your wedding memories outlive everything else. We partner with India’s top wedding photographers and cinematographers who capture raw emotions unobtrusively. We ensure shot-list discipline, direct golden-hour portrait sessions, and coordinate same-day teaser edits to share with friends and family.',
    iconName: 'Camera',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      'Curation of top documentary photographers and cinematic video directors',
      'Comprehensive shot list planning covering family elders, candid moments, and ritual details',
      'Drone aerial cinematography (subject to venue airspace clearances)',
      'Next-day social media teaser video (Reel format) and high-res highlight reel',
      'Archival heirloom albums, raw footage archival, and private digital delivery cloud'
    ],
    processSteps: [
      'Style matching: editorial, documentary, or classic cinematic romance',
      'Pre-wedding location scouting for dramatic backdrop portraiture',
      'Lighting and audio synchronization with stage and mandap production teams',
      'Post-production delivery timeline tracking and album design approval'
    ],
    whyUs: 'We coordinate the photographers with the schedule so you aren’t kept away from your guests for hours of posing.'
  },
  {
    id: 'srv-entertainment',
    slug: 'entertainment-and-artists',
    title: 'Entertainment & Celebrity Artists',
    shortDesc: 'Booking top Bollywood vocalists, Sufi singers, celebrity DJs, international choreographers, and immersive cultural performers.',
    fullDesc: 'From soulful morning flute serenades to an earth-shaking celebrity live performance at your Sangeet, entertainment sets the heartbeat of the celebration. We handle artist procurement, technical riders, sound engineering, backstage hospitality, and international performer logistics with absolute professionalism.',
    iconName: 'Music',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      'Procurement of celebrity singers, live bands, Sufi ensembles, and top wedding DJs',
      'Folk cultural artists (Kachhi Ghodi, Rajasthani Ghoomar dancers, fire performers, percussionists)',
      'Sangeet choreography: virtual rehearsal scheduling, music track edits, and visual graphics',
      'Anchor / Emcee curation for engaging ceremony flow',
      'Technical rider execution (L-Acoustics / JBL line arrays, grandMA lighting consoles, LED screens)'
    ],
    processSteps: [
      'Musical direction consultation matching couple tastes (Sufi, Bollywood, EDM, Retro, Jazz)',
      'Artist date lock, contract signing, and commercial negotiation',
      'Audio-visual tech rehearsal 6 hours before showtime',
      'Live stage management, artist cueing, and seamless set transitions'
    ],
    whyUs: 'Direct artist connections without multi-tier agency commissions ensure authentic pricing and zero rider surprises.'
  },
  {
    id: 'srv-logistics',
    slug: 'logistics-and-transfers',
    title: 'Logistics, Fleet & Travel Desk',
    shortDesc: 'Luxury fleet management, charter flights, luggage transit, intra-venue golf carts, and seamless outstation transfers.',
    fullDesc: 'Moving hundreds of guests across airports, resorts, and heritage venues requires military-grade logistics. We manage a fleet of luxury sedans, Innova Crystas, Mercedes coaches, vintage wedding cars for the baraat, and intra-property golf buggies with GPS tracking and radio-linked drivers.',
    iconName: 'Car',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      'Dedicated Travel Desk operating 24 hours during the wedding dates',
      'Luxury vehicle fleet (Sedans, SUVs, Coaches, Vintage Rolls-Royce/Open Convertibles)',
      'Luggage tracking tags and dedicated porters ensuring bags reach correct rooms swiftly',
      'Golf cart buggy operations for elderly guests across large palace grounds',
      'Charter flights, helicopter rentals, and private train carriage arrangements upon request'
    ],
    processSteps: [
      'Master Travel Matrix compilation from RSVP responses',
      'Route optimization avoiding local city congestion and toll bottlenecks',
      'Driver briefing on hospitality etiquette, uniforms, and radio comms',
      'Live dispatch monitoring through our event control center'
    ],
    whyUs: 'No guest left waiting at an airport terminal or stuck trying to hail a local cab in an unfamiliar city.'
  },
  {
    id: 'srv-vendor-mgmt',
    slug: 'vendor-management',
    title: 'Vendor Coordination & Governance',
    shortDesc: 'Single point of contact for 20+ specialized vendors, guaranteeing timeline compliance, quality audits, and transparent billing.',
    fullDesc: 'Instead of dealing with 25 separate suppliers, you communicate with one accountable partner. We manage makeup artists, mehendi artists, safa bandhers, florists, fabricators, pyrotechnicians, and sound engineers, ensuring everyone delivers exactly what was contracted.',
    iconName: 'Users',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      'Comprehensive vendor selection across 20+ specialty categories',
      'Commercial terms negotiation and milestone-based contract issuance',
      'On-site load-in schedules, pass management, and technical supervision',
      'Quality assurance checks before client inspection',
      'Final reconciliation of deliveries against agreed scopes'
    ],
    processSteps: [
      'Vendor shortlisting based on couple’s aesthetic and budget criteria',
      'Vendor alignment meeting and master schedule distribution',
      'On-site arrival checks and milestone sign-offs',
      'Dispute resolution and prompt milestone payment release'
    ],
    whyUs: 'Complete transparency: all vendor invoices and contracts are open-book with zero hidden kickbacks.'
  },
  {
    id: 'srv-day-of-coordination',
    slug: 'day-of-coordination',
    title: 'Day-of Event Orchestration',
    shortDesc: 'A 25-member on-ground shadow crew running backstage cues, ritual coordination, emergency kits, and seamless transitions.',
    fullDesc: 'When the wedding day arrives, your only role is to celebrate and look radiant. Our multi-tiered on-ground team takes over. We shadow the bride and groom, coordinate the pandit and ritual samagri, cue the baraat band, coordinate entry fireworks, and ensure every guest is looked after.',
    iconName: 'Clock',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      'Personal shadow coordinators dedicated to Bride, Groom, and both sets of parents',
      'Panditji ritual coordination, samagri verification, and havan safety management',
      'Cueing of entries, special effects (cold pyros, dry ice clouds, floral cannons)',
      'Real-time crisis kit (safety pins, sewing kits, stain removers, medical kit, steamers)',
      'Midnight gift and lifafa safe storage and handover to designated family member'
    ],
    processSteps: [
      'Final dry-run walkthrough with family 24 hours prior',
      'Radio-channel crew deployment across all zones (Lobby, Bridal suite, Banquet, Lawn)',
      'Live execution of the 5-minute Master Timeline',
      'Graceful pack-down, vendor sign-offs, and room checkout management'
    ],
    whyUs: 'Flawless execution that allows families to soak in every joyful second without checking their watches.'
  },
  {
    id: 'srv-pre-wedding',
    slug: 'pre-wedding-celebrations',
    title: 'Pre-Wedding & Roka Celebrations',
    shortDesc: 'Curating bespoke proposal setups, intimate Roka ceremonies, engagement soirees, and destination bachelor/bachelorette trips.',
    fullDesc: 'The journey to the mandap begins months earlier. We curate romantic clifftop or palace proposals, heritage haveli Roka celebrations, and exclusive international or coastal bachelor/bachelorette getaways. Every milestone leading up to the grand wedding is celebrated with equal elegance.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80',
    deliverables: [
      'Secret proposal staging with violinists, candlelit pavilions, and hidden photographers',
      'Intimate Roka and Ring Ceremony planning for 50 - 150 close guests',
      'Destination bachelorette/bachelor trip planning (Goa villas, Dubai luxury suites, Phuket yachts)',
      'Thematic pre-wedding couple photoshoots with vintage wardrobe and heritage backdrops',
      'Digital interactive save-the-date invites and wedding website design'
    ],
    processSteps: [
      'Visioning session for the pre-wedding milestone',
      'Venue booking and exclusive access permits',
      'Decor and experiential elements execution',
      'Capturing cinematic pre-wedding memories'
    ],
    whyUs: 'Builds momentum and excitement for the main destination wedding while celebrating your personal love story.'
  }
];

// -------------------------------------------------------------
// PACKAGES (TRANSPARENT LUXURY TIERS)
// -------------------------------------------------------------
export const PSR_PACKAGES: WeddingPackageItem[] = [
  {
    id: 'pkg-royal-rajputana',
    name: 'The Royal Rajputana Grandeur',
    subtitle: 'Monumental Palace Experience in Udaipur, Jaipur or Jodhpur',
    tag: 'MOST POPULAR PALATIAL',
    idealFor: 'Couples dreaming of authentic Maharaja-style royalty with elephants, vintage cars, and candlelit courtyards.',
    guestBracket: '200 - 350 Guests',
    estimatedBudget: '₹75 Lakhs - ₹1.8 Crores*',
    duration: '3 Days / 2 Nights',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    inclusions: [
      'Complete Venue Scouting & Exclusive Palace Hotel Negotiation',
      'Dedicated 18-Member On-Ground Production & Hospitality Crew',
      'Bespoke Thematic Decor for 4 Functions: Mehendi, Sangeet, Haldi & Pheras',
      'Royal Procession: Decorated elephants/camels, royal brass band, and vintage car for groom',
      'Sound & Light Production: Concert-grade audio, grandMA light consoles, LED visual walls',
      'Hospitality Desk at Airport & Hotel with welcome kits and room escort porters',
      'Full statutory licenses (PPL, IPRS, excise and local permissions)',
      'Shadow Coordinator for the Bride and Groom throughout all days'
    ],
    popularAddons: [
      'Celebrity Bollywood Singer or Sufi Ensemble for Sangeet Night',
      'Lake boat fleet transfers with royal torchbearers',
      'Grand Aerial Fireworks display synchronized to entry music'
    ],
    recommendedDestinations: ['Udaipur', 'Jaipur', 'Jodhpur']
  },
  {
    id: 'pkg-azure-coastal',
    name: 'Azure Coastal Beach Bliss',
    subtitle: 'Barefoot Luxury & Sunset Vows in Tropical South Goa or Kerala',
    tag: 'SIGNATURE COASTAL',
    idealFor: 'Couples wanting a breezy, celebratory festival feel with sundowners, white parties, and golden-hour sunset vows.',
    guestBracket: '120 - 250 Guests',
    estimatedBudget: '₹45 Lakhs - ₹1.1 Crores*',
    duration: '3 Days / 2 Nights',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
    inclusions: [
      'Beach Resort Negotiation & Private Beachfront Lawn Clearance',
      'CRZ Environmental Approvals & Local Beach Police / Panchayat Clearances',
      'Bohemian White Sundowner Styling with macramé, fairy lights & acoustic stage',
      'Raindance / Foam Haldi Party setup with organic flower petals',
      'Sunset Mandap on the sand with driftwood & tropical floral canopy',
      'Silent Disco Headphone System for beach after-parties past 10:00 PM',
      'Airport luxury coach transfers to resort for all arriving flights',
      'Personalized beach totes, custom coconut welcome bar & sun-care kits'
    ],
    popularAddons: [
      'Luxury Sunset Catamaran or Yacht Cruise for bridal party',
      'International Percussionist & Fire Acrobat performances',
      'Artisanal Gin Bar with flair mixologists'
    ],
    recommendedDestinations: ['Goa (South Goa / North Goa)', 'Kerala (Kovalam / Kochi)']
  },
  {
    id: 'pkg-heritage-haveli',
    name: 'Heritage Haveli & Boutique Fort',
    subtitle: 'Intimate Royal Charm with Exclusive 100% Property Buyout',
    tag: 'BEST VALUE LUXURY',
    idealFor: 'Families wanting total privacy where every single room in a historic fort or haveli belongs to their guests.',
    guestBracket: '80 - 180 Guests',
    estimatedBudget: '₹35 Lakhs - ₹75 Lakhs*',
    duration: '2 Days / 2 Nights',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    inclusions: [
      'Complete Property Buyout of a curated 40-70 room heritage fort/haveli',
      'Full-board catering with authentic regional royal menus & local halwais',
      'Traditional Rajasthani Mela Mehendi setup with puppet shows & folk dancers',
      'Courtyard Sangeet with antique brass lanterns and marigold garlands',
      'Baradari Mandap styling with handloom fabrics and temple bells',
      'Full End-to-End Vendor Management & run-of-show orchestration',
      'Complete guest hospitality and room allocation logistics'
    ],
    popularAddons: [
      'Antique vintage car baraat procession',
      'Live Qawwali ensemble in courtyard under torchlight',
      'Customized block-print welcome robes for all guests'
    ],
    recommendedDestinations: ['Jaipur (Kukas/Samode)', 'Udaipur (Fateh Garh)', 'Jodhpur (Ajit Bhawan)']
  },
  {
    id: 'pkg-wilderness-romance',
    name: 'Wilderness Mist & Riverside Elegance',
    subtitle: 'Nature-Immersed Celebrations in Jim Corbett or Mussoorie Foothills',
    tag: 'NATURE RETREAT',
    idealFor: 'Couples wanting fresh mountain breeze, riverside lawns, bonfires, and a tranquil escape from urban chaos.',
    guestBracket: '100 - 220 Guests',
    estimatedBudget: '₹28 Lakhs - ₹65 Lakhs*',
    duration: '3 Days / 2 Nights',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    inclusions: [
      'Luxury Riverside / Foothill Resort Negotiation & Room Block Booking',
      'Woodsy Rustic Chic Styling with fairy light canopies, barrels & botanical arches',
      'Riverside Bonfire Barbecue Night with acoustic live indie musicians',
      'Floral Haldi by the natural river stream with local marigolds',
      'Open-air riverside lawn Mandap framed by forest hills',
      'Guest Jeep Safari coordination in the national park',
      'Fleet transit from Delhi NCR or nearest airport with luggage management'
    ],
    popularAddons: [
      'Lantern release ceremony under the mountain stars',
      'Live Pahari folk acoustic performances',
      'Organic wellness tea and spa hamper for each guest cottage'
    ],
    recommendedDestinations: ['Jim Corbett', 'Mussoorie Foothills', 'Rishikesh Riverfront']
  },
  {
    id: 'pkg-delhi-ncr-regalia',
    name: 'Metropolitan Capital Regalia',
    subtitle: 'Palatial Farmhouses & 5-Star Luxury Suites in Delhi NCR',
    tag: 'HIGH CAPACITY',
    idealFor: 'Grand celebrations with 400 - 1,000+ local and global guests demanding zero travel friction.',
    guestBracket: '350 - 1,000+ Guests',
    estimatedBudget: '₹50 Lakhs - ₹1.5 Crores*',
    duration: '2 Days / 2 Nights',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
    inclusions: [
      'Scouting & Securing 10-Acre Luxury Farmhouses or 5-Star Hotel Retreats',
      'Massive Structure Fabrication: German hanger marquees, glass pavilions, and grand entrances',
      'Gourmet Catering Coordination with Delhi’s foremost culinary stalwarts',
      'High-Impact Bollywood Sangeet with massive 40-foot LED stage and moving-head trussing',
      'Valet Parking Management for 300+ cars with security command center',
      'Full Statutory Permissions and Fire NOC compliances'
    ],
    popularAddons: [
      'Top-billed Bollywood playback singer live performance',
      'Custom Ice Sculpture Bar & Global Mixologist Lounge',
      'Helicopter floral shower during Varmala ceremony'
    ],
    recommendedDestinations: ['Delhi NCR (Chattarpur/NH8)', 'Gurugram Aravalis']
  }
];

// -------------------------------------------------------------
// REAL WEDDING STORIES / PORTFOLIO
// -------------------------------------------------------------
export const PSR_REAL_WEDDINGS: RealWeddingStory[] = [
  {
    id: 'rw-ananya-rohit',
    slug: 'ananya-and-rohit-udaipur',
    coupleNames: 'Ananya & Rohit',
    destination: 'Udaipur, Rajasthan',
    venue: 'The Leela Palace & Jagmandir Island Palace',
    weddingDate: 'December 2025',
    guestCount: '280 Guests',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    photos: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=800&q=80'
    ],
    story: 'Rohit, a tech entrepreneur from San Francisco, and Ananya, an architect from London, wanted an authentic Mewar royal experience for their 280 guests arriving from four continents. PSR Venture Weddings managed a complete 3-day royal buyout including private boat flotillas, a Sufi night under the stars, and a breathtaking sunset mandap floating on the edges of Lake Pichola.',
    theme: 'Mewar Royal Splendour & Floating Water Lilies',
    highlights: [
      'Flotilla of 14 royal boats ferrying guests across Lake Pichola for the Jagmandir Sangeet',
      'Mandap adorned with 25,000 fresh tuberoses and peach roses overlooking City Palace',
      'Midnight fireworks display perfectly synchronized to the couple’s entrance'
    ]
  },
  {
    id: 'rw-tarun-priya',
    slug: 'tarun-and-priya-goa',
    coupleNames: 'Priya & Tarun',
    destination: 'Goa (Cavelossim)',
    venue: 'The Leela Goa Resort',
    weddingDate: 'November 2025',
    guestCount: '220 Guests',
    coverImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    photos: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80'
    ],
    story: 'Priya and Tarun wanted their wedding to feel like an unforgettable tropical music and food festival. We designed a Boho Chic White Party on the beach, an electric Poolside Haldi with flower showers, and an open-air sunset mandap on Mobor Beach with acoustic guitarists strumming as they exchanged vows.',
    theme: 'Bohemian Coastal Elegance & Sunset Pastels',
    highlights: [
      'Sunset Mandap constructed entirely of natural driftwood, pampas grass, and white orchids',
      'Silent Disco on the beach continuing until 4:00 AM under a canopy of fairy lights',
      'Custom Goan feni and artisanal cocktail bar featuring locally sourced botanicals'
    ]
  },
  {
    id: 'rw-sid-meera',
    slug: 'sid-and-meera-jaipur',
    coupleNames: 'Meera & Siddharth',
    destination: 'Jaipur, Rajasthan',
    venue: 'Fairmont Jaipur & Kukas Palace Grounds',
    weddingDate: 'January 2026',
    guestCount: '520 Guests',
    coverImage: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80',
    photos: [
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80'
    ],
    story: 'A magnificent 520-guest celebration spanning two royal properties in Jaipur. Sid’s baraat was a spectacle of 4 vintage cars, decorated horses, and a 21-piece brass band. Meera arrived on a royal palki carried by her brothers to an amphitheater mandap surrounded by 5,000 floating diyas.',
    theme: 'Imperial Mughal Regalia & Marigold Reverie',
    highlights: [
      'Massive 40-foot Sangeet concert stage with live performance by a leading Bollywood vocalist',
      'Authentic Rajasthani Mela Mehendi with custom lacquer bangle makers and turban artists',
      'Flawless coordination of 120 luxury fleet vehicles across 4 days'
    ]
  },
  {
    id: 'rw-kabir-rhea',
    slug: 'kabir-and-rhea-kerala',
    coupleNames: 'Rhea & Kabir',
    destination: 'Kerala (Kumarakom)',
    venue: 'Kumarakom Lake Resort',
    weddingDate: 'February 2026',
    guestCount: '160 Guests',
    coverImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    photos: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80'
    ],
    story: 'An eco-luxury celebration focused on nature, mindfulness, and rich cultural heritage. Guests arrived on traditional wooden houseboats, participated in a traditional Kerala Sadhya banquet on banana leaves, and witnessed the vows on an open water deck with 16 Panchavadyam drummers.',
    theme: 'Tropical Emerald & Backwater Serenity',
    highlights: [
      'Zero single-use plastic wedding with seed-paper invites and locally woven cotton decor',
      'Houseboat cocktail cruise at golden hour across Lake Vembanad',
      'Water-stage mandap lit with brass Nilavilakku oil lamps'
    ]
  }
];

// -------------------------------------------------------------
// GALLERY ITEMS (FILTERABLE WITH LIGHTBOX)
// -------------------------------------------------------------
export const PSR_GALLERY: GalleryPhotoItem[] = [
  { id: 'g-1', title: 'Lake Pichola Floating Mandap', category: 'Mandap', location: 'The Leela Palace, Udaipur', imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80', aspect: 'portrait' },
  { id: 'g-2', title: 'Sunset Coastal Vows on Golden Sands', category: 'Mandap', location: 'Cavelossim Beach, Goa', imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80', aspect: 'landscape' },
  { id: 'g-3', title: 'Dazzling Sangeet Concert Arena', category: 'Sangeet', location: 'Fairmont Jaipur', imageUrl: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=80', aspect: 'landscape' },
  { id: 'g-4', title: 'Marigold Phoolon Ki Haldi Celebration', category: 'Haldi', location: 'Rambagh Palace, Jaipur', imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80', aspect: 'portrait' },
  { id: 'g-5', title: 'Bohemian Floral Swing Mehendi', category: 'Mehendi', location: 'Taj Exotica, Goa', imageUrl: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80', aspect: 'square' },
  { id: 'g-6', title: 'Royal Black-Tie Gala Reception', category: 'Reception', location: 'Umaid Bhawan Palace, Jodhpur', imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80', aspect: 'landscape' },
  { id: 'g-7', title: 'Crystal Chandelier Forest Scenography', category: 'Decor', location: 'ITC Grand Bharat, Gurugram', imageUrl: 'https://images.unsplash.com/photo-1519225438848-771bf6132046?auto=format&fit=crop&w=900&q=80', aspect: 'portrait' },
  { id: 'g-8', title: 'Royal Couple Golden Hour Portrait', category: 'Couple', location: 'Jagmandir Island Palace, Udaipur', imageUrl: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=900&q=80', aspect: 'portrait' },
  { id: 'g-9', title: 'Carved Sandstone Baradari Mandap', category: 'Mandap', location: 'Ajit Bhawan, Jodhpur', imageUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=900&q=80', aspect: 'landscape' },
  { id: 'g-10', title: 'High-Energy Bollywood Dance Performance', category: 'Sangeet', location: 'The Leela Goa', imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80', aspect: 'square' },
  { id: 'g-11', title: 'Joyful Petal Shower on the Bride', category: 'Haldi', location: 'Kumarakom Lake Resort, Kerala', imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80', aspect: 'portrait' },
  { id: 'g-12', title: 'Moroccan Lantern Lounge Decor', category: 'Decor', location: 'Fateh Garh, Udaipur', imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80', aspect: 'landscape' },
  { id: 'g-13', title: 'Varmala by the Lake under Fireworks', category: 'Couple', location: 'The Oberoi Udaivilas, Udaipur', imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80', aspect: 'landscape' },
  { id: 'g-14', title: 'Intricate Bridal Henna Detailing', category: 'Mehendi', location: 'Jai Mahal Palace, Jaipur', imageUrl: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=900&q=80', aspect: 'portrait' },
  { id: 'g-15', title: 'Riverside Wilderness Mandap', category: 'Mandap', location: 'Taj Corbett Resort', imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80', aspect: 'landscape' }
];

// -------------------------------------------------------------
// BLOG & WEDDING INSIGHTS
// -------------------------------------------------------------
export const PSR_BLOG: BlogItem[] = [
  {
    id: 'blog-udaipur-cost-2026',
    slug: 'destination-wedding-cost-in-udaipur-2026-breakdown',
    title: 'How Much Does a Destination Wedding in Udaipur Cost in 2026? Complete Line-Item Breakdown',
    category: 'Cost Guides',
    author: 'Priya Sharma (Senior Wedding Director)',
    date: 'February 2026',
    readTime: '8 min read',
    coverImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80',
    summary: 'A transparent financial breakdown of hosting 150 to 300 guests in Udaipur’s top 5-star palace hotels, including room rates, catering, lake boat logistics, and decor costs.',
    keyPoints: [
      'Average budget for 200 guests across 2 nights ranges from ₹65 Lakhs to ₹1.8 Crores',
      'Lake Pichola boat logistics and heritage jetty permits require planning 6 months ahead',
      'Booking during shoulder months (October or February-March) can yield 20% hotel room discounts'
    ],
    contentParagraphs: [
      'Udaipur remains the dream destination for couples across India, the UK, the US, and Dubai. However, calculating the actual cost requires looking beyond raw room rates. A luxury destination wedding involves three core pillars: Accommodation & Hospitality, Food & Beverage, and Production & Decor.',
      'For a 200-guest wedding at a 5-star heritage property (such as The Leela Palace, Udaivilas, or Fateh Garh), room blocks typically command ₹22,000 to ₹45,000 per room per night. With 100 rooms over 2 nights, accommodation accounts for ₹45L - ₹90L. F&B for 4 meal functions averages ₹3,500 - ₹5,500 per plate plus statutory taxes.',
      'Decor and production in Udaipur is elevated by the palatial architecture itself. Rather than building artificial sets, PSR Venture Weddings focuses on architectural illumination, floral canopies, and reflective water installations, saving our clients substantial fabrication expenses.'
    ]
  },
  {
    id: 'blog-goa-beach-wedding-guide',
    slug: 'goa-beach-wedding-planning-guide-permits-and-venues',
    title: 'Planning a Goa Beach Wedding: Legal CRZ Clearances, Best Seasons & Top 7 Resorts',
    category: 'Venues & Palaces',
    author: 'Rohan Mehra (Head of Coastal Operations)',
    date: 'January 2026',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80',
    summary: 'Everything couples need to know about getting married on Goa’s pristine beaches: coastal environmental clearances, noise curfews, and South vs. North Goa venue choices.',
    keyPoints: [
      'CRZ (Coastal Regulation Zone) clearances are mandatory for any physical structure on the sand',
      'South Goa offers pristine wide beaches and unhurried luxury; North Goa provides high-energy nightlife',
      'Silent disco systems allow after-parties to continue till dawn without violating environmental laws'
    ],
    contentParagraphs: [
      'Getting married with the sound of breaking waves and the sunset dipping into the Arabian Sea is pure poetry. However, Goa requires strict adherence to environmental regulations.',
      'Every beach mandap or gazebo erected on the sand must have approvals from the local Panchayat, Coastal Zone Management Authority, and local police. At PSR Venture Weddings, we maintain permanent liaison desks in Goa, securing all statutory permits seamlessly as part of our core service.',
      'We also counsel couples on the choice between South and North Goa. South Goa (Cavelossim, Benaulim, Majorda) is ideal for sprawling 5-star resort takeovers where guests stay together in one tranquil enclave. North Goa suits younger couples wanting bohemian villa clusters and immediate access to trendy beach clubs.'
    ]
  },
  {
    id: 'blog-jaipur-palace-venues-comparison',
    slug: 'top-palace-venues-in-jaipur-comparison-for-destination-weddings',
    title: 'Jaipur Palace Wedding Venues Compared: Rambagh vs. Fairmont vs. Jai Mahal',
    category: 'Venues & Palaces',
    author: 'Vikramaditya Rathore (Heritage Scout)',
    date: 'March 2026',
    readTime: '7 min read',
    coverImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80',
    summary: 'An objective architectural and operational analysis of Jaipur’s three most iconic wedding venues to help you match guest count, budget, and aesthetic vision.',
    keyPoints: [
      'Rambagh Palace offers unmatched royal lineage for intimate celebrations up to 400 guests',
      'Fairmont Jaipur is the undisputed king of high-capacity logistics for 500 - 1,000+ guest weddings',
      'Jai Mahal Palace blends prime central city location with 18 acres of Mughal pleasure gardens'
    ],
    contentParagraphs: [
      'Jaipur is the undisputed wedding capital of India, but no two palace hotels cater to the same guest profile. Knowing their operational nuances ensures your celebration flows effortlessly.',
      'If your guest list is under 350 and your priority is walking through authentic halls once trodden by Maharajas, Rambagh Palace is in a class of its own. Its Peacock Gardens and Panghat lawns deliver historic intimacy.',
      'Conversely, for couples hosting 500 to 1,000 guests, Fairmont Jaipur provides 245 guest rooms on-site, a monumental pillar-less ballroom, and expansive outdoor ramparts that prevent the logistical headache of splitting guests across multiple hotels.'
    ]
  },
  {
    id: 'blog-guest-hospitality-mastery',
    slug: 'how-to-manage-200-destination-wedding-guests-without-stress',
    title: 'Guest Hospitality Blueprint: How to Host 200+ Outstation Guests Seamlessly',
    category: 'Planning Advice',
    author: 'Neha Kapoor (VP of Guest Experiences)',
    date: 'February 2026',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=900&q=80',
    summary: 'How professional hospitality desks, WhatsApp concierge bots, pre-keyed room packets, and luggage escorts create a 5-star experience for your friends and family.',
    keyPoints: [
      'Eliminate lobby queues with pre-encoded room key packets handed directly upon arrival',
      'Deploy WhatsApp bots for instant answering of salon timings, dress codes, and shuttle schedules',
      'Always have a dedicated shadow coordinator for both sets of parents to handle their immediate needs'
    ],
    contentParagraphs: [
      'The number one regret of couples who plan their own destination wedding is that their parents spent the entire weekend running around managing room assignments, missing luggage, and transport complaints rather than enjoying the festivities.',
      'Our hospitality protocol begins 30 days before the wedding with interactive digital RSVPs. When guests land at the airport, our uniformed concierge greets them with personalized placards, cold towels, and luxury coaches.',
      'By the time guests arrive at the hotel, check-in is already complete. They simply receive their welcome pack and proceed straight to their rooms where their luggage is already waiting.'
    ]
  }
];

// -------------------------------------------------------------
// TESTIMONIALS
// -------------------------------------------------------------
export const PSR_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    couple: 'Ananya & Rohit Singhal',
    location: 'San Francisco & London',
    weddingVenue: 'The Leela Palace & Jagmandir, Udaipur',
    date: 'December 2025',
    rating: 5,
    review: 'Planning an Udaipur palace wedding while living in California seemed terrifying until we met the PSR Venture Weddings team. They handled everything: the boat flotillas, the hotel negotiations, the multi-course tastings, and the unbelievable mandap decor. Our 280 guests still say it was the greatest wedding they have ever attended!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    highlightPhoto: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 't-2',
    couple: 'Priya & Tarun Deshmukh',
    location: 'Mumbai',
    weddingVenue: 'The Leela Goa, Cavelossim Beach',
    date: 'November 2025',
    rating: 5,
    review: 'PSR Venture Weddings gave us our dream barefoot luxury beach wedding in South Goa. They secured every CRZ clearance for our beach mandap, organized a silent disco that ran until 4:30 AM, and took care of every guest like family. Their transparency with vendor costs saved us at least ₹15 Lakhs.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    highlightPhoto: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 't-3',
    couple: 'Meera & Siddharth Goenka',
    location: 'Delhi NCR',
    weddingVenue: 'Fairmont Jaipur',
    date: 'January 2026',
    rating: 5,
    review: 'We had 520 guests coming in from all over the world, which required military-level precision. PSR managed a fleet of 100+ cars, choreographed a jaw-dropping Bollywood sangeet with celebrity performers, and curated 4 distinct regional menus that had guests raving. Flawless execution from start to finish!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    highlightPhoto: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 't-4',
    couple: 'Rhea & Dr. Kabir Nambiar',
    location: 'Dubai & Bengaluru',
    weddingVenue: 'Kumarakom Lake Resort, Kerala',
    date: 'February 2026',
    rating: 5,
    review: 'Our Kerala backwater wedding was peaceful, soulful, and deeply romantic. PSR coordinated houseboats for our guests, crafted an organic floral mandap overlooking the lake, and respected all cultural traditions. Best decision we made was trusting PSR Venture Weddings.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    highlightPhoto: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80'
  }
];

// -------------------------------------------------------------
// FAQS
// -------------------------------------------------------------
export const PSR_FAQS: FaqItem[] = [
  {
    category: 'General',
    question: 'How early should we start planning our destination wedding with PSR?',
    answer: 'We recommend initiating the venue scouting process 9 to 12 months in advance, especially if you have your heart set on peak winter dates (November to February) in royal Rajasthan or beachfront Goa. Premier palace properties like Rambagh Palace or The Leela Udaipur often book out 10-14 months ahead. However, for shorter timeframes (4-6 months), our team has successfully orchestrated full luxury weddings by leveraging our network of preferred partner properties.'
  },
  {
    category: 'Budgets & Fees',
    question: 'What is your fee structure? Do you charge a flat fee or a percentage?',
    answer: 'We operate on a 100% transparent, flat professional management fee model based on the complexity, duration, guest count, and destination of the celebration. We DO NOT take hidden vendor markups or commissions. All vendor contracts, hotel invoices, and production bills are open-book and paid directly by you at negotiated wholesale rates, saving our clients an estimated 15% - 22% overall.'
  },
  {
    category: 'Budgets & Fees',
    question: 'Can you work within different budget brackets?',
    answer: 'Yes. While our primary focus is premium and luxury destination weddings, our comprehensive package tiers range from boutique heritage haveli buyouts starting around ₹30-35 Lakhs for 100 guests up to multi-crore royal palace extravaganzas for 500+ guests. During our initial consultation, we provide an honest, line-item budget feasibility analysis so you know exactly what is achievable.'
  },
  {
    category: 'Destinations & Venues',
    question: 'Which destinations across India and abroad does PSR Venture Weddings cover?',
    answer: 'Our core domestic hubs include Rajasthan (Udaipur, Jaipur, Jodhpur, Pushkar, Jaisalmer), Goa (South & North), Kerala (Kumarakom, Kovalam, Kochi), Delhi NCR & Aravali Hills, Agra, and Uttarakhand (Jim Corbett, Mussoorie, Rishikesh). We also manage international destination celebrations in Dubai, Bahrain, Thailand (Phuket/Hua Hin), and Bali.'
  },
  {
    category: 'Destinations & Venues',
    question: 'Can you manage venue negotiations and room block buyouts?',
    answer: 'Absolutely. Venue scouting and contract negotiation is one of our greatest strengths. Having booked over 380+ destination weddings, our General Manager-level relationships with hotel chains (Taj, Oberoi, Leela, ITC, Marriott, Fairmont, Hyatt) allow us to secure privileged room rates, complimentary suite upgrades, waived lawn rental fees, and flexible cancellation clauses.'
  },
  {
    category: 'Vendors & Logistics',
    question: 'Can we bring our own photographers, makeup artists, or family pandit?',
    answer: '100% yes! We encourage personal preferences. We seamlessly integrate your chosen family vendors into our master schedule and ensure they receive proper technical riders, meal boxes, and dressing suites. For areas where you do not have preferred vendors, we provide curated options from our verified elite roster.'
  },
  {
    category: 'Vendors & Logistics',
    question: 'How do you handle guest arrivals, luggage, and transfers?',
    answer: 'We deploy a dedicated 24-hour Hospitality & Travel Desk. We track every guest flight in real-time, staff branded greeting desks at the airport/train station, coordinate luxury chauffeur-driven coaches, handle luggage tags so bags go directly to rooms, and manage express room check-ins without lobby waits.'
  },
  {
    category: 'General',
    question: 'How many team members will be present on-site during our wedding days?',
    answer: 'Depending on your guest count and event scale, we deploy a team of 15 to 30+ full-time coordinators on-site. This includes dedicated personal shadow coordinators for the Bride, Groom, and parents, a logistics dispatcher, backstage stage manager, pandit/ritual coordinator, hospitality desk executives, and senior production supervisors.'
  }
];

// -------------------------------------------------------------
// BUDGET CALCULATOR BENCHMARKS
// -------------------------------------------------------------
export const BUDGET_BENCHMARKS = {
  destinations: {
    udaipur: { multiplier: 1.35, minTier: 45, label: 'Udaipur (Palatial Luxury)' },
    jaipur: { multiplier: 1.25, minTier: 40, label: 'Jaipur (Royal Heritage)' },
    goa: { multiplier: 1.15, minTier: 35, label: 'Goa (Beachfront & Coastal)' },
    jodhpur: { multiplier: 1.30, minTier: 40, label: 'Jodhpur (Imperial Fortress)' },
    kerala: { multiplier: 1.10, minTier: 30, label: 'Kerala (Backwaters & Nature)' },
    'delhi-ncr': { multiplier: 1.20, minTier: 38, label: 'Delhi NCR (Grand Retreats)' },
    'jim-corbett': { multiplier: 0.95, minTier: 25, label: 'Jim Corbett (Wilderness)' },
    agra: { multiplier: 1.15, minTier: 35, label: 'Agra (Taj Romance)' }
  },
  tiers: {
    regal: {
      name: 'Regal Palatial (5-Star Palace / Luxury Resort)',
      roomRate: 28000,
      foodPerPlatePerFunction: 4500,
      decorPerFunction: 800000,
      soundAndLight: 1200000,
      entertainment: 1000000,
      photography: 800000,
      hospitalityAndLogistics: 600000
    },
    luxury: {
      name: 'Luxury Classic (5-Star Resort / Heritage Haveli)',
      roomRate: 18000,
      foodPerPlatePerFunction: 3200,
      decorPerFunction: 500000,
      soundAndLight: 700000,
      entertainment: 600000,
      photography: 500000,
      hospitalityAndLogistics: 400000
    },
    intimate: {
      name: 'Boutique Heritage (Chic Resort / Boutique Fort)',
      roomRate: 12000,
      foodPerPlatePerFunction: 2400,
      decorPerFunction: 320000,
      soundAndLight: 450000,
      entertainment: 350000,
      photography: 350000,
      hospitalityAndLogistics: 250000
    }
  }
};

export const PSR_VENTURE_WEDDINGS_WEBSITE: BusinessWebsite = {
  id: 'site-psr-venture-weddings-70',
  slug: '70-psr-venture-weddings',
  templateId: 'luxury_destination_wedding_portal',
  businessName: siteConfig.SITE_NAME,
  tagline: siteConfig.TAGLINE,
  description: siteConfig.SITE_DESCRIPTION,
  category: 'wedding_event_planning',
  ownerName: 'PS Weddings Directorate',
  phone: siteConfig.PHONE,
  whatsapp: siteConfig.WHATSAPP,
  email: siteConfig.EMAIL,
  address: siteConfig.ADDRESS,
  city: 'Gurugram & Delhi NCR',
  mapsUrl: 'https://maps.google.com/?q=One+Horizon+Center+Golf+Course+Road+Gurgaon',
  openingHours: 'Mon - Sun: 10:00 AM - 8:00 PM',
  primaryColor: '#7A1B28',
  secondaryColor: '#DFBE78',
  logoUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=200&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
  bookingType: 'consultation_quote',
  bookingCtaLabel: 'View Project #70',
  specialBadge: 'Project #70 · Luxury Destination Weddings & Venues',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 0,
  paymentStatus: 'paid',
  sections: [
    { id: 'top-bar', title: 'Top Announcement & Contact Desks', isEnabled: true, order: 1 },
    { id: 'navbar', title: 'Luxury Navigation & Mobile Drawer', isEnabled: true, order: 2 },
    { id: 'hero', title: 'Editorial Hero & Quick Destination Search', isEnabled: true, order: 3 },
    { id: 'destinations', title: 'Curated Destinations Showcase', isEnabled: true, order: 4 },
    { id: 'venues', title: 'Verified Palace & Resort Venues Directory', isEnabled: true, order: 5 },
    { id: 'services', title: '11 Turnkey Planning Services', isEnabled: true, order: 6 },
    { id: 'experience', title: 'The 6-Stage Planning Journey', isEnabled: true, order: 7 },
    { id: 'packages', title: 'Transparent Luxury Packages', isEnabled: true, order: 8 },
    { id: 'portfolio', title: 'Real Weddings & Ceremony Gallery', isEnabled: true, order: 9 },
    { id: 'calculator', title: 'Interactive Budget Estimator Tool', isEnabled: true, order: 10 },
    { id: 'blog', title: 'Destination Wedding Insights & Cost Guides', isEnabled: true, order: 11 },
    { id: 'faq', title: 'Comprehensive Wedding FAQs', isEnabled: true, order: 12 },
    { id: 'consultation', title: 'Lead Capture & WhatsApp Sync', isEnabled: true, order: 13 },
    { id: 'footer', title: 'Luxury Brand Footer & Regional Studios', isEnabled: true, order: 14 }
  ],
  items: [
    {
      id: 'itm-psr-1',
      name: 'Udaipur Royal Palace Wedding Package',
      description: 'Comprehensive 3-day royal buyout experience on Lake Pichola with boat transfers, floral mandap & Sufi sangeet.',
      price: 7500000,
      category: 'Palace Weddings',
      isAvailable: true,
      imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'itm-psr-2',
      name: 'South Goa Beachfront Vows Package',
      description: 'Private 5-star beachfront lawn buyout with CRZ clearances, sunset beach mandap & silent disco after-party.',
      price: 4500000,
      category: 'Coastal Weddings',
      isAvailable: true,
      imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'itm-psr-3',
      name: 'Jaipur Heritage Fort Buyout Package',
      description: 'Exclusive buyout of a 40-70 room heritage fort/haveli with royal Rajasthani banquet and elephant baraat.',
      price: 3500000,
      category: 'Heritage Havelis',
      isAvailable: true,
      imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'itm-psr-4',
      name: 'Venue Scouting & Contract Negotiation Service',
      description: 'Assisted recces, GM-level room rate negotiation, lawn fee waivers, and contract legal protection.',
      price: 150000,
      category: 'Planning Services',
      isAvailable: true,
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
    }
  ],
  offers: [
    {
      id: 'off-early-bird-2026',
      title: 'Complimentary 2-Day Destination Recce',
      description: 'Book our turnkey wedding planning for 2026/27 celebrations and receive assisted on-ground venue site inspections with our lead planner complimentary.',
      discountPercent: 15,
      couponCode: 'ROYALRECCE26',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'gal-psr-1',
      title: 'Lake Palace Floating Mandap, Udaipur',
      category: 'events',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'gal-psr-2',
      title: 'Beachfront Sunset Vows, South Goa',
      category: 'events',
      imageUrl: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'gal-psr-3',
      title: 'Heritage Fort Courtyard Banquet, Jaipur',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'gal-psr-4',
      title: 'Backwaters Sunset Cruise Reception, Kerala',
      category: 'facilities',
      imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80'
    }
  ]
};
