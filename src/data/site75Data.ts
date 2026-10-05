import { BusinessWebsite } from '../types';
import { site75Config } from '../config/site75Config';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  features: string[];
  deliverables: string[];
  highlightQuote: string;
}

export interface DestinationItem {
  id: string;
  slug: string;
  name: string;
  country: string;
  region: 'India' | 'International';
  tagline: string;
  description: string;
  heroImage: string;
  bestSeason: string;
  airportHub: string;
  averageGuestRange: string;
  featuredVenues: {
    name: string;
    style: string;
    capacity: string;
    image: string;
  }[];
  signatureHighlights: string[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  couple: string;
  location: string;
  category: 'Palaces' | 'Beachfront' | 'International' | 'Modern Luxe' | 'Intimate';
  heroImage: string;
  tagline: string;
  description: string;
  conceptPalette: string[];
  guestCount: number;
  functionsCount: number;
  highlights: string[];
  ceremonies: {
    name: string;
    theme: string;
    description: string;
  }[];
  galleryImages: string[];
}

export interface ExperienceItem {
  id: string;
  slug: string;
  title: string;
  sanskritName: string;
  tagline: string;
  description: string;
  image: string;
  vibes: string[];
  typicalTiming: string;
  keyElements: string[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Mandap' | 'Decor' | 'Ceremony' | 'Reception' | 'Portraits' | 'Sangeet' | 'Haldi';
  destination: string;
  imageUrl: string;
  caption: string;
}

export interface TestimonialItem {
  id: string;
  couple: string;
  event: string;
  location: string;
  year: string;
  quote: string;
  image: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

// ----------------------------------------------------
// 1. SERVICES DATA
// ----------------------------------------------------
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'turnkey-planning',
    slug: 'turnkey-wedding-planning',
    title: 'Turnkey Wedding Planning & Direction',
    subtitle: 'From the First Vision Board to the Final Fireworks',
    description: 'We shoulder complete executive leadership of your wedding celebration. Our white-glove atelier model ensures seamless timeline orchestration, budget transparency, supplier curation, and flawless on-ground show-running across all ceremonial days.',
    heroImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80',
    features: [
      'Comprehensive 12-Month Master Milestones & Production Schedule',
      '100% Transparent Open-Book Commercials & Contract Negotiations',
      'Dedicated Show Director & Red-Carpet Floor Marshals',
      'VIP Protocol, Private Air Charter & Security Coordination'
    ],
    deliverables: [
      'Digital Production Run-Sheets with Minute-by-Minute Cues',
      'Bi-Weekly Creative Status Decks & 3D Spatial Renders',
      'On-Ground 24-Person Executive Control Operations Cell'
    ],
    highlightQuote: 'We do not simply coordinate events; we engineer unforgettable emotional masterpieces with military precision and poetic grace.'
  },
  {
    id: 'destination-planning',
    slug: 'destination-weddings-worldwide',
    title: 'Destination Wedding Architecture',
    subtitle: 'Across Royal Indian Palaces & Iconic Global Sanctuaries',
    description: 'Specializing in ultra-luxury multi-day destination weddings. From private island buyouts in the Maldives and cliffside villas on the Amalfi Coast to heritage Rajputana forts in Udaipur and Jaipur, our global relationships unlock unparalleled venue access.',
    heroImage: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1600&q=80',
    features: [
      'Private Estate & Heritage Palace Buyouts Across 18 Countries',
      'International Customs, Cargo & Specialized Decor Freight Shipping',
      'Dedicated Multilingual Guest Travel Desks & Visa Concierge',
      'Cross-Border Legal Marriage Documentation Advisory'
    ],
    deliverables: [
      'Custom Mobile Guest Itinerary Portal & Live Shuttle Flight Tracker',
      'Curated Destination Discovery Guides & Welcome Hampers',
      'Regional Masterchef Collaboration & Authentic Regional Sourcing'
    ],
    highlightQuote: 'Transporting your family to a breathtaking destination transforms a celebration into a shared epoch of lifelong memories.'
  },
  {
    id: 'scenography-decor',
    slug: 'scenography-wedding-decor',
    title: 'Bespoke Scenography & Décor Design',
    subtitle: 'Couture Spatial Installations & Architectural Lighting',
    description: 'Our in-house design atelier conceptualizes every celebration from scratch. We build hyper-realistic 3D CAD renders before fabricating custom mirror-floors, floating floral mandaps, kinetic crystal chandeliers, and atmospheric architectural illumination.',
    heroImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=80',
    features: [
      'Photorealistic 3D CAD Walkthroughs & Virtual Reality Previews',
      'Exotic Floristry Curated Fresh from Holland, Kenya & South India',
      'Custom Sculptural Mandaps, Draped Pavilions & Floral Ceilings',
      'Concert-Grade Intelligent Stage Lighting & Kinetic Trussing'
    ],
    deliverables: [
      'Bespoke Fabric Swatches & Physical Table Mockup Showcases',
      'Zero-Template Original Spatial Blueprints for Every Function',
      'Eco-Conscious Zero-Plastic Floral Disposal & Composting Systems'
    ],
    highlightQuote: 'Every archway, petal, and candle is placed with deliberate artistic purpose to create breathtaking cinematic wonder.'
  },
  {
    id: 'styling-trousseau',
    slug: 'wedding-styling-couture-trousseau',
    title: 'Couture Styling & Bridal Trousseau',
    subtitle: 'Harmonious Visual Language for the Couple & Inner Circle',
    description: 'Curating the visual harmony of your celebration. Our fashion stylists collaborate with premier Indian and international couture ateliers (Sabyasachi, Manish Malhotra, Tarun Tahiliani, Gaurav Gupta, Elie Saab) to ensure cohesive color paletting for every occasion.',
    heroImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=80',
    features: [
      'Private VIP Couture Fittings & Bespoke Color Matching Consultations',
      'Cohesive Color Theming for the Bridal Party & Immediate Family',
      'Bridal Jewelry Concierge (Heritage Polki, Emeralds & Diamonds)',
      'Hair, Makeup & Draping Master Artists from Bollywood & High Fashion'
    ],
    deliverables: [
      'Personalized Lookbooks for all 5 Ceremonial Functions',
      'Dedicated Personal Dressers & Steamers On-Site Throughout the Wedding',
      'Bridal Suite Emergency Wardrobe Care Kits'
    ],
    highlightQuote: 'When fashion, jewelry, and scenography speak the same chromatic language, the resulting photography is timelessly iconic.'
  },
  {
    id: 'entertainment-artists',
    slug: 'celebrity-artist-entertainment',
    title: 'Celebrity Booking & Global Entertainment',
    subtitle: 'World-Class Live Acts, DJs & Curated Symphony Orchestras',
    description: 'Elevating celebrations into unforgettable stadium-level spectacles. We directly contract leading playback singers, international percussionists, Bollywood icons, Sufi ensembles, and global festival DJs with world-standard acoustic riders.',
    heroImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=80',
    features: [
      'Direct Artist Contracting with Zero Intermediary Inflations',
      'L-Acoustics & Meyer Sound Concert Audio Architecture',
      'Custom Choreography & Visual Pre-Visualizer for Sangeet Performances',
      'Live Percussionists, Aerialists & Broadway-Standard Interactive Acts'
    ],
    deliverables: [
      'Full Artist Hospitality, Green Room Logistics & Rehearsal Run-Times',
      'Pyrotechnic, Cold-Pyro & Confetti Safety Compliant Shows',
      'Seamless Live-Stream Broadcast in 4K HDR for Global Attendees'
    ],
    highlightQuote: 'A great party is etched in the senses through rhythm, sound, and electrifying live energy that keeps the dance floor packed until dawn.'
  },
  {
    id: 'hospitality-logistics',
    slug: 'luxury-guest-hospitality-logistics',
    title: 'Royal Hospitality & Guest Logistics',
    subtitle: 'From Airport Tarmacs to Personalized Suite Amenities',
    description: 'True Indian hospitality is an art form. We treat every single guest like visiting royalty with dedicated private chauffeurs, swift luggage tagging, multilingual hotel check-ins, custom gifting suites, and 24-hour concierge helpdesks.',
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80',
    features: [
      'Dedicated Chauffeur Fleets with Bottled Water, Mints & Wi-Fi',
      'VIP Tarmac Meet-and-Assist at Major International Airports',
      'Luggage Tracking with Digital Barcoded Tags from Terminal to Bedside',
      'Personalized Morning-After Recovery Hampers & High-Tea Lounges'
    ],
    deliverables: [
      'Dedicated 24/7 Digital Concierge Hotline for Room Transfers & Requests',
      'Allergy, Dietary & Child-Care Dedicated Coordinator',
      'Custom Curated Welcome Hampers with Artisanal Regional Keepsakes'
    ],
    highlightQuote: 'When your guests feel effortlessly pampered and cared for, the entire atmosphere vibrates with genuine celebration and gratitude.'
  },
  {
    id: 'ceremonial-experiences',
    slug: 'sacred-ceremonial-direction',
    title: 'Sacred Ceremonial Curations',
    subtitle: 'Vedic Sanctity Infused with Poetic Splendor',
    description: 'Deep reverence for timeless traditions. We coordinate Vedic scholars and priests who explain each vow in English and Hindi, complemented by live sitar-flute symphonies, hand-rolled organic incense, and fragrant fresh flower showers.',
    heroImage: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1600&q=80',
    features: [
      'Bilingual Vedic Acharyas Explaining Sacred Shlokas & Significance',
      'Sacred Sitar, Santoor & Carnatic Live Morning Raagas',
      '100% Organic, Chemical-Free Rose, Jasmine & Marigold Petal Showers',
      'Custom Printed Ceremony Programs for Modern & International Guests'
    ],
    deliverables: [
      'Custom Designed Puja Hampers & Samagri Sourced from Varanasi',
      'Intimate Seating Plans Ensuring Grandparents & Elders Prime Front Rows',
      'Seamless Sacred Timing Alignment with Astrological Muhurat'
    ],
    highlightQuote: 'Honoring ancient heritage while ensuring the ceremony resonates deeply with modern sensibilities and universal love.'
  },
  {
    id: 'culinary-direction',
    slug: 'gastronomy-curation-masterchefs',
    title: 'Gastronomy Direction & Mixology',
    subtitle: 'Michelin-Standard Menus & Bespoke Sensory Bars',
    description: 'Food is the sacred soul of every celebration. We partner with India’s foremost master chefs and international culinary directors to design hyper-customized tasting menus, theatrical live stations, artisanal midnight munchies, and couture cocktail mixology.',
    heroImage: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1600&q=80',
    features: [
      'Celebrated Regional Masterchefs Flown in for Authentic Flavors',
      'Theatrical Live Cooking Pavilions: Truffle Pastas, Charcoal Grills & Chaat',
      'Artisanal Bar Mixology with Personalized Couple Signature Cocktails',
      'Late-Night Gourmet Sliders, Bao Buns & Masala Chai Food Carts'
    ],
    deliverables: [
      'Multi-Course Food & Wine Tasting Sessions with Custom Printed Menus',
      'Comprehensive Strict Dietary, Jain, Halal & Allergen Protocols',
      'Couture Tableware: Vintage Silver, Limoges Porcelain & Fine Crystal'
    ],
    highlightQuote: 'A culinary journey where every bite awakens nostalgia, delights international palates, and sparks joyful conversation.'
  }
];

// ----------------------------------------------------
// 2. DESTINATIONS DATA
// ----------------------------------------------------
export const DESTINATIONS_DATA: DestinationItem[] = [
  {
    id: 'dest-udaipur',
    slug: 'udaipur',
    name: 'Udaipur, Rajasthan',
    country: 'India',
    region: 'India',
    tagline: 'The City of Floating Palaces & Shimmering Waters',
    description: 'The pinnacle of royal Indian romance. Floating palace hotels flanked by the Aravali hills, marble courtyards lit by tens of thousands of floating brass diyas, and boat arrivals that evoke ancient Rajput royalty.',
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80',
    bestSeason: 'October to March (Crisp evenings & clear skies)',
    airportHub: 'Maharana Pratap Airport (UDR) · 40 mins from lake properties',
    averageGuestRange: '150 - 650 Guests',
    featuredVenues: [
      { name: 'Jagmandir Island Palace', style: 'Historic Floating Island Palace', capacity: '700 Guests', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80' },
      { name: 'The Leela Palace Lake Pichola', style: 'Modern Regal Waterfront Sanctuary', capacity: '350 Guests', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80' },
      { name: 'Taj Lake Palace', style: 'White Marble Heritage Floating Jewel', capacity: '150 Guests', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80' }
    ],
    signatureHighlights: [
      'Private Royal Boat Motorcades Across Lake Pichola with Traditional Nagada Drummers',
      'Fireworks Illumination Synchronized Above the Lake with Fort Projections',
      'Heritage Sheesh Mahal (Palace of Mirrors) Private Sangeet Settings'
    ]
  },
  {
    id: 'dest-jaipur',
    slug: 'jaipur',
    name: 'Jaipur, Rajasthan',
    country: 'India',
    region: 'India',
    tagline: 'Grand Fortresses, Regal Polo Lawns & Pink Sandstone',
    description: 'Regal extravagance on an epic scale. Jaipur offers sprawling palace gardens, royal polo grounds, grand elephant and horse-drawn baraats, and palatial ballrooms steeped in centuries of princely splendor.',
    heroImage: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1600&q=80',
    bestSeason: 'October to April',
    airportHub: 'Jaipur International Airport (JAI) · 30 mins to city palaces',
    averageGuestRange: '250 - 1,200 Guests',
    featuredVenues: [
      { name: 'Rambagh Palace', style: 'Former Residence of the Maharaja of Jaipur', capacity: '1,000 Guests', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80' },
      { name: 'Fairmont Jaipur', style: 'Grand Mughal & Rajput Inspired Fortress', capacity: '1,200 Guests', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80' },
      { name: 'Jai Mahal Palace', style: 'Indo-Saracenic Heritage Amidst 18 Acres of Lawns', capacity: '800 Guests', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80' }
    ],
    signatureHighlights: [
      'Royal Vintage Rolls-Royce & Regal Equestrian Baraat Processions',
      'Illuminated Step-Wells (Baori) for Sunset Candlelit Haldi Soirees',
      'Traditional Kalbelia Dancers & Grand Rajasthani Royal Guard of Honor'
    ]
  },
  {
    id: 'dest-goa',
    slug: 'goa',
    name: 'Goa (North & South)',
    country: 'India',
    region: 'India',
    tagline: 'Sun-Drenched Coastal Lawns & Golden Hour Mandaps',
    description: 'Barefoot luxury reimagined with haute elegance. Private beaches, sprawling coconut groves, Portuguese heritage chapels, and coastal sundowner sangeets under twinkling fairy-light canopies.',
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=80',
    bestSeason: 'November to April (Balmy breezes and zero monsoon rain)',
    airportHub: 'Dabolim Airport (GOI) or Mopa Airport (GOX)',
    averageGuestRange: '150 - 500 Guests',
    featuredVenues: [
      { name: 'Taj Exotica Resort & Spa', style: 'Mediterranean Coastal Sanctuary in Benaulim', capacity: '600 Guests', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80' },
      { name: 'W Goa, Vagator', style: 'High-Fashion Vibrant Oceanfront Haven', capacity: '450 Guests', image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80' },
      { name: 'The St. Regis Goa Resort', style: 'Lagoon & Beach Sprawling Estate in Cavelossim', capacity: '750 Guests', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80' }
    ],
    signatureHighlights: [
      'Sunset Beachfront Mandap with the Arabian Sea Crashing Against the Shore',
      'Bohemian Tropic Haldi on Poolside Lawns with Live Percussionists',
      'All-Night Open-Air Coastal After-Parties with Fire Performers'
    ]
  },
  {
    id: 'dest-dubai',
    slug: 'dubai-uae',
    name: 'Dubai & Abu Dhabi, UAE',
    country: 'United Arab Emirates',
    region: 'International',
    tagline: 'Desert Dunes, Private Palaces & Ultra-Glamour Skylines',
    description: 'Where cosmopolitan grandeur meets Arabian desert mystique. Opulent ballroom chandeliers, helicopter bride arrivals, private desert dunes lit by thousands of torches, and world-class luxury standards.',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80',
    bestSeason: 'November to March',
    airportHub: 'Dubai International (DXB) / Al Maktoum (DWC)',
    averageGuestRange: '200 - 800 Guests',
    featuredVenues: [
      { name: 'Atlantis The Royal, Palm Jumeirah', style: 'Ultra-Luxury Modern Architectural Icon', capacity: '750 Guests', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80' },
      { name: 'Emirates Palace Mandarin Oriental, Abu Dhabi', style: 'Opulent Gilded Palace with Private Marina', capacity: '1,500 Guests', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80' },
      { name: 'Bab Al Shams Desert Resort', style: 'Authentic Luxury Fortress Surrounded by Dunes', capacity: '500 Guests', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80' }
    ],
    signatureHighlights: [
      'Exclusive Private Desert Oasis Sangeet with Falconry & Bedouin Lounges',
      'Yacht Cruises on the Arabian Gulf for Sunset Welcome Cocktails',
      'Laser & Drone Shows Synchronized with Couple Initials Over the Skyline'
    ]
  },
  {
    id: 'dest-lake-como',
    slug: 'lake-como-italy',
    name: 'Lake Como & Tuscany, Italy',
    country: 'Italy',
    region: 'International',
    tagline: 'Neoclassical Lakeside Villas & Cypress-Lined Hills',
    description: 'The epitome of Old World European sophistication. Historic aristocratic villas rising from deep blue alpine waters, private vintage Riva speedboat entrances, and Michelin-star Italian banquets paired with authentic Indian masterchefs.',
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80',
    bestSeason: 'May to October',
    airportHub: 'Milan Malpensa (MXP) · 50 mins to lake shores',
    averageGuestRange: '80 - 250 Guests',
    featuredVenues: [
      { name: 'Villa d’Este, Cernobbio', style: 'Renaissance Aristocratic Waterfront Palace', capacity: '250 Guests', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80' },
      { name: 'Villa Erba, Lake Como', style: 'Grand 19th Century Exhibition Villa & Gardens', capacity: '450 Guests', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80' },
      { name: 'Castello di Casole, Tuscany', style: 'Historic Hilltop Castle Amidst Vineyards', capacity: '180 Guests', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80' }
    ],
    signatureHighlights: [
      'Vintage Mahogany Riva Speedboat Grand Baraat on Lake Como',
      'Al-Fresco Imperial Table Dinners Under Illuminated 200-Year-Old Olive Groves',
      'Italian Gelato Carts & Live Truffle Making Next to Regional Indian Curries'
    ]
  },
  {
    id: 'dest-bali',
    slug: 'bali-indonesia',
    name: 'Bali & Nusa Dua, Indonesia',
    country: 'Indonesia',
    region: 'International',
    tagline: 'Dramatic Cliffside Ocean Vows & Tropical Temples',
    description: 'Dramatic limestone clifftops towering over the azure Indian Ocean. Clifftop glass water-stage mandaps, fragrant frangipani installations, traditional Balinese flower girls, and ultra-chic private cliff villas.',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80',
    bestSeason: 'April to October',
    airportHub: 'Ngurah Rai International Airport (DPS) in Denpasar',
    averageGuestRange: '100 - 400 Guests',
    featuredVenues: [
      { name: 'The Mulia Resort, Nusa Dua', style: 'Grand Waterfront Resort with Beachfront Chapel', capacity: '600 Guests', image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80' },
      { name: 'Bulgari Resort Bali, Uluwatu', style: 'Secluded Clifftop Luxury Villa Estate', capacity: '150 Guests', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80' },
      { name: 'Six Senses Uluwatu', style: 'Breathtaking 180° Panoramic Indian Ocean Cliffs', capacity: '300 Guests', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80' }
    ],
    signatureHighlights: [
      'Glass-Floor Mandap Suspended Over Clifftop Infinity Pool with Ocean Horizon',
      'Balinese Kecak Dance Fusion Ceremony at Golden Sunset',
      'Helicopter Floral Petal Drop Over the Newlyweds during Pheras'
    ]
  },
  {
    id: 'dest-mumbai',
    slug: 'mumbai-maharashtra',
    name: 'Mumbai, Maharashtra',
    country: 'India',
    region: 'India',
    tagline: 'Metropolitan High-Glamour, Seafront Promenades & High Society',
    description: 'The heartbeat of Indian luxury and Bollywood glamour. High-ceilinged ballroom galas, Arabian Sea facing terraces at Apollo Bunder, and seamless access to India’s most coveted wedding artists and fashion houses.',
    heroImage: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1600&q=80',
    bestSeason: 'November to February',
    airportHub: 'Chhatrapati Shivaji Maharaj International (BOM)',
    averageGuestRange: '300 - 1,500 Guests',
    featuredVenues: [
      { name: 'The Taj Mahal Palace & Tower', style: 'Historic Seafront Landmark Opposite Gateway of India', capacity: '800 Guests', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80' },
      { name: 'Jio World Convention Centre', style: 'Massive Modern High-Tech Ballrooms with Diamond Chandeliers', capacity: '2,500 Guests', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80' },
      { name: 'The St. Regis Mumbai, Lower Parel', style: 'Contemporary Luxury Tower Ballrooms', capacity: '650 Guests', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80' }
    ],
    signatureHighlights: [
      'Sunset Pre-Wedding Cruise Charters departing from Gateway of India',
      'High-Security Private Red-Carpet Arrivals for Celebrity Attendees',
      'After-Hour Speakeasy Pop-Up Lounges with Top International Mixologists'
    ]
  },
  {
    id: 'dest-jodhpur',
    slug: 'jodhpur-rajasthan',
    name: 'Jodhpur, Rajasthan',
    country: 'India',
    region: 'India',
    tagline: 'The Blue City & The Majestic Golden Sandstone Citadel',
    description: 'Monumental desert royalty. Home to Umaid Bhawan Palace, one of the world’s largest private royal residences, and the imposing Mehrangarh Fort towering above the desert sands.',
    heroImage: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1600&q=80',
    bestSeason: 'October to March',
    airportHub: 'Jodhpur Civil Airport (JDH)',
    averageGuestRange: '200 - 600 Guests',
    featuredVenues: [
      { name: 'Umaid Bhawan Palace', style: 'Art Deco & Rajput Monumental Royal Palace', capacity: '600 Guests', image: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=800&q=80' },
      { name: 'Mehrangarh Fort', style: 'Historic 15th Century Clifftop Fortress Courtyards', capacity: '750 Guests', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80' }
    ],
    signatureHighlights: [
      'Gala Sangeet Inside the Fort Ramparts with Flaming Torch Lit Ramparts',
      'Art-Deco Royal Banquet in the Maharaja’s Historic Private Dining Rooms',
      'Traditional Manganiyar Desert Folk Musicians Welcoming Guests at Airport Tarmac'
    ]
  }
];

// ----------------------------------------------------
// 3. FEATURED REAL WEDDINGS / CASE STUDIES
// ----------------------------------------------------
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-mewar-royalty',
    slug: 'the-mewar-palace-celebration',
    title: 'A Royal Rajputana Symphony',
    couple: 'Rhea & Ananya',
    location: 'Jagmandir Island Palace, Udaipur',
    category: 'Palaces',
    heroImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80',
    tagline: 'Three Days of Royal Heritage, 100,000 Floating Diyas & An Island Mandap',
    description: 'For Rhea and Ananya, we orchestrated a dream three-day wedding on Lake Pichola. A red-velvet themed royal welcome dinner at City Palace, a high-octane Bollywood sangeet with custom kinetic stage, and a floating floral mandap bathed in the soft glow of 100,000 brass oil lamps.',
    conceptPalette: ['#800020', '#D4AF37', '#1E293B', '#FAF8F5'],
    guestCount: 420,
    functionsCount: 5,
    highlights: [
      'Floating Island Mandap Crafted from 15,000 White Tuberoses and Mogra',
      'Vintage Boat Procession for 400 Guests with Royal Musicians on Waters',
      '40-Foot Kinetic LED Stage with Concert Sound for Sangeet Night'
    ],
    ceremonies: [
      { name: 'The Royal Welcome Soiree', theme: 'Heritage Velvet & Champagne', description: 'Courtyard cocktail gala greeted by traditional Mewar royal buglers and folk vocalists.' },
      { name: 'The Sunlit Haldi', theme: 'Marigold Yellow & Cane Terraces', description: 'Terraced poolside celebration with brass pots and organic floral Holi.' },
      { name: 'Sangeet Under the Stars', theme: 'Emerald & Mirror Glitz', description: 'Headline performances by leading playback artists and custom 3D projection mapping.' },
      { name: 'The Sacred Pheras', theme: 'Floating Mogra Sanctum', description: 'Sunset pheras overlooking Lake Pichola with sacred Vedic chants.' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'proj-lake-como-romance',
    slug: 'sunset-riviera-vows-como',
    title: 'Italian Riviera & Indian Grandeur',
    couple: 'Natasha & Dev',
    location: 'Villa Erba, Lake Como, Italy',
    category: 'International',
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80',
    tagline: 'Bridging Neoclassical Aristocracy with Centuries-Old Indian Traditions',
    description: 'An ethereal gathering of 220 international guests across Lake Como. The groom arrived on a vintage mahogany Riva speedboat, while the bride walked down a mirrored aisle floating above the lake surface framed by antique Italian urns bursting with blush peonies.',
    conceptPalette: ['#C5A059', '#F1E8DB', '#3A4D39', '#FFFFFF'],
    guestCount: 220,
    functionsCount: 4,
    highlights: [
      'Water-Surface Mirror Aisle with Reflection of Surrounding Alpine Mountains',
      'Italian Michelin-Starred Kitchen Collaborating with Delhi Master Halwai',
      'Gala Reception Inside the 19th Century Painted Fresco Ballroom'
    ],
    ceremonies: [
      { name: 'Lakeside Welcome Cocktail', theme: 'Italian Spritz & Sitar Fusion', description: 'Sunset cocktails overlooking Villa Balbianello with live acoustic jazz and sitar.' },
      { name: 'Mehendi in the Gardens', theme: 'Citrus & Amalfi Tiles', description: 'Hand-painted ceramics, lemon trees, and fragrant henna under the Italian sun.' },
      { name: 'The Grand Pheras', theme: 'Blush Peonies & Antique Stone', description: 'Sacred fire ceremony facing the serene blue waters of Lake Como.' },
      { name: 'The Black-Tie Gala', theme: 'Crystal Chandeliers & Velvet', description: 'Formal Italian seated banquet followed by fireworks over the lake.' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'proj-goa-coastal-luxe',
    slug: 'barefoot-boheme-south-goa',
    title: 'Barefoot Bohème & Ocean Serenade',
    couple: 'Alisha & Kabir',
    location: 'The St. Regis Goa Resort, Cavelossim',
    category: 'Beachfront',
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=80',
    tagline: 'Warm Sand, Pampas Grass Mandaps & Sun-Kissed Celebrations',
    description: 'A relaxed yet ultra-luxurious 3-day coastal extravaganza. Featuring a bohemian poolside haldi with coconut leaf cabanas, a sunset beach mandap framed by dried florals and wild orchids, and an electrifying neon beach rave.',
    conceptPalette: ['#E2B714', '#D97706', '#0284C7', '#FAF5FF'],
    guestCount: 350,
    functionsCount: 4,
    highlights: [
      'Sunset Mandap Set Up Directly on the High Tide Shoreline',
      'Vintage Beach Buggy Baraat with Dhol Players Playing in Surf',
      'Live Seafood Grills and Coconut Water Cocktails'
    ],
    ceremonies: [
      { name: 'Sundowner Welcome Party', theme: 'Bohème Chic & Sangria', description: 'Acoustic beach guitarists and barefoot sunset mingling.' },
      { name: 'Poolside Splash Haldi', theme: 'Turmeric Yellow & Aqua', description: 'Foam canon, water guns, and organic marigold confetti.' },
      { name: 'Oceanfront Sunset Pheras', theme: 'Pampas Grass & Orchids', description: 'Sacred vows taken as the golden sun dipped into the Arabian sea.' },
      { name: 'Neon Beach After-Party', theme: 'Cosmic Jungle & Deep House', description: 'All-night party with international techno DJ under the stars.' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'proj-dubai-opulence',
    slug: 'the-palace-mirage-dubai',
    title: 'The Desert Mirage & Royal Ballroom',
    couple: 'Simran & Karan',
    location: 'Atlantis The Royal & Bab Al Shams, Dubai',
    category: 'Modern Luxe',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80',
    tagline: 'Golden Dunes, Crystal Canopies & Futuristic Middle Eastern Glamour',
    description: 'A 500-guest spectacular bridging old Bedouin hospitality with cutting-edge Dubai glamour. Guests were transported by private convoys into deep dunes for a candlelit Sangeet before celebrating the Grand Reception in an opulent glass ballroom.',
    conceptPalette: ['#D4AF37', '#0A0A0A', '#991B1B', '#F8FAFC'],
    guestCount: 520,
    functionsCount: 5,
    highlights: [
      'Dune Sangeet Arena with 80-Foot Falcon Screen Projection',
      'Custom Drone Light Show Forming Bride and Groom Initials in the Sky',
      '30-Tier Custom Cake with Edible 24K Gold Leaf Accents'
    ],
    ceremonies: [
      { name: 'Skyline Terrace Cocktails', theme: 'Black Tie & High Skyline', description: 'Overlooking Palm Jumeirah with saxophone players and caviar bars.' },
      { name: 'The Desert Sangeet', theme: 'Arabian Nights Modernized', description: 'Torch-lit desert camp with fire dancers, oud players, and Bollywood stars.' },
      { name: 'Royal Pheras', theme: 'Glass Lotus Temple', description: 'Floating mandap surrounded by dancing fountains.' },
      { name: 'The Imperial Reception', theme: 'Couture Crystal & Mirrored Floors', description: '5-course formal dinner with symphony orchestra.' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];

// ----------------------------------------------------
// 4. WEDDING EXPERIENCES JOURNEY
// ----------------------------------------------------
export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: 'exp-haldi',
    slug: 'sun-drenched-haldi',
    title: 'The Sun-Drenched Haldi',
    sanskritName: 'Peethi / Ubtan',
    tagline: 'Joyous Auspicious Turmeric Baths & Organic Flower Showers',
    description: 'An explosion of golden warmth and laughter. Surrounded by marigold canopies, terracotta pots, artisanal lassi stations, and live folk percussion, family members lovingly bless the couple with scented herbal turmeric paste.',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80',
    vibes: ['Sunlit Lawn', 'Marigold Glow', 'Organic Turmeric', 'Joyful Chaos'],
    typicalTiming: 'Morning / Early Afternoon (10:30 AM - 2:00 PM)',
    keyElements: [
      'Custom Carved Urli Basins Filled with Rose Water & Lotus Blossoms',
      'Live Rajasthani Ghoomar or Punjabi Dhol Troupes',
      'Organic Herbals: Saffron, Sandalwood & Wild Himalayan Turmeric'
    ]
  },
  {
    id: 'exp-mehendi',
    slug: 'bohemian-floral-mehendi',
    title: 'The Bohemian Floral Mehendi',
    sanskritName: 'Mehendi Utsav',
    tagline: 'Artisanal Henna Intricacies, Scented Cocktails & High Fashion',
    description: 'An intimate afternoon soiree where artistry takes center stage. Master henna artisans weave the love story into the bride’s palms while guests sip gin infusions and browse custom gifting boutiques.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    vibes: ['Boho Luxury', 'Intricate Henna', 'Artisanal Gin Bar', 'Chic Daywear'],
    typicalTiming: 'Afternoon Sundowner (3:00 PM - 7:00 PM)',
    keyElements: [
      'Master Bridal Henna Artists Sourced from Mumbai & Jaipur',
      'Custom Bangle & Jutti Gifting Ateliers for Visiting Guests',
      'Shaded Cane Daybeds Draped in Raw Silk & Fresh Tuberoses'
    ]
  },
  {
    id: 'exp-sangeet',
    slug: 'stadium-glamour-sangeet',
    title: 'The High-Octane Sangeet',
    sanskritName: 'Sangeet & Raas',
    tagline: 'Stadium-Scale Sound, Synchronized Choreography & Celebrity Artists',
    description: 'The defining party of Indian weddings. Kinetic LED stages, concert sound, hilarious and heartwarming family performances, and headline appearances by chart-topping playback musicians.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    vibes: ['Electric Energy', 'Kinetic Lighting', 'Bollywood Glamour', 'All-Night Dance'],
    typicalTiming: 'Night (8:00 PM - 3:00 AM)',
    keyElements: [
      'Stage Pre-Visualization & Professional Bollywood Dance Choreographers',
      'Concert-Grade Intelligent Moving Heads & Cold Spark Pyro Effects',
      'Cocktail Mixology Stations Keeping Energy High All Night'
    ]
  },
  {
    id: 'exp-baraat',
    slug: 'regal-baraat-procession',
    title: 'The Majestic Baraat Procession',
    sanskritName: 'Var Yatra',
    tagline: 'Equestrian Splendor, Royal Brass Bands & High Spirits',
    description: 'The groom’s triumphant procession. Whether riding a regal Marwari stallion, a vintage open-top Rolls Royce, or arriving by luxury speedboat, the energy of hundreds of loved ones dancing to booming brass bands is unmatched.',
    image: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=80',
    vibes: ['Royal Spectacle', 'Pounding Dhols', 'Turban Safas', 'Electric Excitement'],
    typicalTiming: 'Late Afternoon (4:00 PM - 6:00 PM)',
    keyElements: [
      'Regal Turban (Safa) Tying Stylists for Hundreds of Gents',
      'Multi-Piece Traditional Brass Band & Roaming Dhol Trio',
      'Customized Mobile Refreshment Carts with Cold Towels & Mocktails'
    ]
  },
  {
    id: 'exp-pheras',
    slug: 'sacred-mandap-pheras',
    title: 'The Sacred Pheras',
    sanskritName: 'Kanyadaan & Saptapadi',
    tagline: 'Seven Eternal Vows in a Sanctum of Vedic Reverence',
    description: 'The emotional pinnacle of the union. Under an architectural floral mandap, surrounded by loved ones, the sacred fire witnesses seven eternal promises of love, loyalty, and companionship.',
    image: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=80',
    vibes: ['Sacred Stillness', 'Scented Fire', 'Floral Canopy', 'Emotional Vows'],
    typicalTiming: 'Sunset / Twilight Muhurat (6:00 PM - 8:30 PM)',
    keyElements: [
      'Bilingual Vedic Scholars Narrating the Deep Meaning of the 7 Vows',
      'Fresh Mogra, Lotus & Rose Petal Showering Cones for Every Guest',
      'Live Classical Sitar & Santoor Weaving Gentle Meditative Melodies'
    ]
  },
  {
    id: 'exp-reception',
    slug: 'haute-black-tie-reception',
    title: 'The Grand Black-Tie Reception',
    sanskritName: 'Samarpan',
    tagline: 'Black-Tie Opulence, Michelin Gastronomy & Heartfelt Toasts',
    description: 'The formal coronation of the new union. Dramatic floral ceiling installations, champagne pyramids, five-course seated banquets, and touching speeches from lifelong friends and parents.',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
    vibes: ['Haute Couture', 'Champagne Towers', 'Gourmet Banquet', 'Grand Entrance'],
    typicalTiming: 'Evening (8:30 PM - Late)',
    keyElements: [
      'Architectural Photo-Call Installation for Iconic Family Portraits',
      'Symphony String Quartet Playing Modern Love Anthems',
      'Curated Plated Gastronomy by International Celebrity Chefs'
    ]
  }
];

// ----------------------------------------------------
// 5. INSPIRATION GALLERY PHOTOS
// ----------------------------------------------------
export const GALLERY_DATA: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Floating White Mogra Mandap Over Lake Pichola',
    category: 'Mandap',
    destination: 'Udaipur, Rajasthan',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    caption: '15,000 fragrant white tuberoses and lotus stems floating above the lake surface at dusk.'
  },
  {
    id: 'gal-2',
    title: 'Imperial Banquet with Crystal Chandeliers & Gold Rim Glassware',
    category: 'Decor',
    destination: 'Villa Erba, Lake Como',
    imageUrl: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
    caption: 'Hand-cut crystal candelabras and lush English garden roses lining a 120-foot imperial table.'
  },
  {
    id: 'gal-3',
    title: 'Sunset Barefoot Beachfront Pheras with Pampas Arches',
    category: 'Ceremony',
    destination: 'South Goa Resort',
    imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    caption: 'Golden hour coastal mandap adorned with organic dried florals and wild sea breeze.'
  },
  {
    id: 'gal-4',
    title: 'Kinetic Neon Stage with Concert Audio Production',
    category: 'Sangeet',
    destination: 'Dubai Desert Arena',
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    caption: 'Concert-grade intelligent lighting, 4K LED screens, and moving trussing for a high-octane Sangeet.'
  },
  {
    id: 'gal-5',
    title: 'The Royal Couple Portrait on Jodhpur Palace Ramparts',
    category: 'Portraits',
    destination: 'Umaid Bhawan, Jodhpur',
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    caption: 'Couture Sabyasachi bridal ensemble framed by majestic golden sandstone arches.'
  },
  {
    id: 'gal-6',
    title: 'Sunlit Poolside Terrace Haldi with Organic Marigold Cascades',
    category: 'Haldi',
    destination: 'Jaipur Palace Gardens',
    imageUrl: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80',
    caption: 'Brass urli basins, saffron pastes, and custom sunshine-yellow canopies.'
  },
  {
    id: 'gal-7',
    title: 'Gilded Ballroom Grand Reception with 30-Foot Floral Ceilings',
    category: 'Reception',
    destination: 'The St. Regis Mumbai',
    imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    caption: 'Overhanging wisteria chandeliers and champagne mirrors for a high-society Mumbai reception.'
  },
  {
    id: 'gal-8',
    title: 'Glass Reflection Mandap Suspended Over Clifftop Pool',
    category: 'Mandap',
    destination: 'Uluwatu, Bali',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    caption: 'Mirrored platform blending seamlessly into the Indian Ocean horizon.'
  },
  {
    id: 'gal-9',
    title: 'Candlelit Baori Stepwell Sangeet Soiree',
    category: 'Decor',
    destination: 'Alsisar Haveli, Rajasthan',
    imageUrl: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=80',
    caption: 'Over 5,000 hand-poured wax hurricane candles illuminating historic stepped stone terraces.'
  },
  {
    id: 'gal-10',
    title: 'Intimate Vows in Italian Renaissance Garden',
    category: 'Ceremony',
    destination: 'Lake Como, Italy',
    imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    caption: 'Bespoke floral arbor crafted from Italian gardenia, olive foliage, and French hydrangeas.'
  },
  {
    id: 'gal-11',
    title: 'Emotional Kanyadaan Moment Under Velvet Drapes',
    category: 'Ceremony',
    destination: 'Rambagh Palace, Jaipur',
    imageUrl: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=80',
    caption: 'A tender emotional exchange bathed in warm amber ceremonial firelight.'
  },
  {
    id: 'gal-12',
    title: 'Couture Groom Styling with Emerald Necklaces & Zardozi Sherwani',
    category: 'Portraits',
    destination: 'Mumbai Atelier',
    imageUrl: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=80',
    caption: 'Bespoke hand-embroidered raw silk sherwani accessorized with certified Zambian emeralds.'
  }
];

// ----------------------------------------------------
// 6. TESTIMONIALS
// ----------------------------------------------------
export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    couple: 'Rhea & Ananya Singhania',
    event: '3-Day Palace Wedding',
    location: 'Jagmandir Island, Udaipur',
    year: '2025',
    quote: 'Aura Luxe delivered beyond what we thought was humanly possible. Coordinating 400 international guests across Lake Pichola with zero hitches was pure wizardry. The floating mandap was so beautiful our guests literally wept.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    rating: 5
  },
  {
    id: 'test-2',
    couple: 'Natasha & Dev Kapur',
    event: 'Lake Como Destination Wedding',
    location: 'Villa Erba, Italy',
    year: '2025',
    quote: 'Planning an Indian wedding in Italy felt daunting until Aarav and Meera took over. From getting the vintage Riva boats cleared to flying in regional spice chefs, every single second was straight out of an Italian art film.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    rating: 5
  },
  {
    id: 'test-3',
    couple: 'Alisha & Kabir Oberoi',
    event: 'Beachfront Luxe Celebration',
    location: 'The St. Regis, Goa',
    year: '2024',
    quote: 'The level of design detail is astonishing. They did not use a single template; our beach mandap was custom fabricated and the neon after-party felt like Tomorrowland. Completely stress-free from day one.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    rating: 5
  },
  {
    id: 'test-4',
    couple: 'Simran & Karan Sethi',
    event: 'Desert Oasis & Skyline Gala',
    location: 'Atlantis The Royal, Dubai',
    year: '2024',
    quote: 'Their relationships with international artists and top venue directors saved us millions and gave us access that no other agency could provide. The drone show alone will be talked about in our family for decades.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80',
    rating: 5
  }
];

// ----------------------------------------------------
// 7. FAQS
// ----------------------------------------------------
export const FAQS_DATA: FaqItem[] = [
  {
    question: 'How far in advance should we engage Aura Luxe for our wedding?',
    answer: 'For flagship destination weddings (Udaipur, Lake Como, Dubai, Jaipur), we recommend reaching out 9 to 14 months in advance to secure premier venue buyouts and prime astrological dates. However, our turnkey production atelier has successfully orchestrated bespoke celebrations within 4 months.',
    category: 'Planning Timeline'
  },
  {
    question: 'How do you structure your fees and vendor contracts?',
    answer: 'We operate with 100% open-book transparency. We charge a flat professional atelier management and design direction fee. All third-party venue, decor production, artist, and hospitality contracts are passed directly to you at actuals with zero hidden markups or kickbacks.',
    category: 'Commercials'
  },
  {
    question: 'Do you design and produce decor in-house, or outsource it?',
    answer: 'Our in-house scenography studio handles 100% of the creative direction, 3D CAD modeling, and floral curation. We have our own master fabrication teams and floral procurement pipelines in Mumbai, Delhi, and Rajasthan, giving us total quality control.',
    category: 'Design & Décor'
  },
  {
    question: 'How do you handle guest logistics for international destination weddings?',
    answer: 'We establish a bespoke Digital Concierge Desk for your wedding. Our dedicated team handles flight coordination, airport meet-and-greet, luxury vehicle transfers, luggage delivery straight to suites, room allocation, and on-site hospitality lounges throughout the celebration.',
    category: 'Guest Hospitality'
  },
  {
    question: 'How many weddings does Aura Luxe take per calendar year?',
    answer: 'To guarantee the undivided focus of our creative directors and senior show producers, we strictly cap our atelier to 18 bespoke weddings per year worldwide. This ensures you receive personal, round-the-clock white-glove executive attention.',
    category: 'Atelier Capacity'
  },
  {
    question: 'Can you work with our family’s pre-selected pandits or priests?',
    answer: 'Absolutely. We seamlessly collaborate with your family’s trusted Acharyas and Astrologers to coordinate exact auspicious Muhurat timings, puja samagri arrangements, and stage setups while ensuring the ceremony remains engaging and comfortable for all attendees.',
    category: 'Ceremonials'
  }
];

// ----------------------------------------------------
// 8. BUSINESS WEBSITE OBJECT FOR THE CATALOG
// ----------------------------------------------------
export const SITE_75_WEBSITE: BusinessWebsite = {
  id: 'site-75-aura-luxe',
  businessName: site75Config.BRAND_NAME,
  templateId: 'luxury_wedding_atelier_75',
  category: 'destination_weddings',
  slug: '75-aura-luxe',
  tagline: site75Config.TAGLINE,
  description: 'India and worldwide premier luxury wedding planning atelier. Inspired by Bon Evento architecture with bespoke scenography, turnkey destination management, celebrity bookings, and haute couture celebrations across Udaipur, Jaipur, Lake Como, Dubai, and Goa.',
  ownerName: site75Config.FOUNDERS,
  city: 'Mumbai, New Delhi & Worldwide',
  address: site75Config.ADDRESS,
  phone: site75Config.PHONE,
  whatsapp: site75Config.WHATSAPP,
  email: site75Config.EMAIL,
  mapsUrl: 'https://maps.google.com/?q=High+Street+Phoenix+Lower+Parel+Mumbai',
  openingHours: 'Mon-Sun: 24/7 Global Wedding Concierge Desks',
  bookingType: 'consultation_quote',
  bookingCtaLabel: 'Start Planning Your Celebration',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 2999,
  paymentStatus: 'paid',
  primaryColor: site75Config.COLORS.primaryGold,
  secondaryColor: site75Config.COLORS.bgDark,
  coverUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80',
  items: [],
  sections: [
    { id: 'hero', title: 'Everlasting Haute Couture', isEnabled: true, order: 1 },
    { id: 'about', title: 'The Atelier Philosophy', isEnabled: true, order: 2 },
    { id: 'services', title: 'Signature Pillars', isEnabled: true, order: 3 },
    { id: 'destinations', title: 'Curated Sanctuaries', isEnabled: true, order: 4 },
    { id: 'portfolio', title: 'Real Wedding Celebrations', isEnabled: true, order: 5 },
    { id: 'experiences', title: 'The Ceremonial Journey', isEnabled: true, order: 6 },
    { id: 'gallery', title: 'Inspiration Gallery', isEnabled: true, order: 7 },
    { id: 'testimonials', title: 'Client Acclaim', isEnabled: true, order: 8 },
    { id: 'planning', title: 'Multi-Step Event Concierge', isEnabled: true, order: 9 },
    { id: 'faq', title: 'Frequently Asked Questions', isEnabled: true, order: 10 }
  ],
  gallery: GALLERY_DATA.map(p => ({
    id: p.id,
    title: p.title,
    category: 'events',
    imageUrl: p.imageUrl
  })),
  offers: [
    {
      id: 'offer-1',
      title: 'Complimentary Lake Como Riva Speedboat Experience',
      description: 'Exclusive for international destination bookings confirmed 9 months in advance.',
      discountPercent: 15,
      validTill: '2026-12-31'
    }
  ],
  createdAt: '2026-04-01T00:00:00Z',
  updatedAt: '2026-10-05T00:00:00Z'
};

export default SITE_75_WEBSITE;
