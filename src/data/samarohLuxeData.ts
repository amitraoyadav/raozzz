/**
 * Central Data & Configuration for SAMAROH LUXE
 * Website #69 in RaoSitez Catalog
 * Inspired by modern full-stack wedding decor & celebration platforms (Meragi-style info architecture)
 */

import { BusinessWebsite } from '../types';

export const SAMAROH_CONFIG = {
  SITE_NAME: 'SAMAROH LUXE',
  DISPLAY_NAME: 'Samaroh Luxe',
  LEGAL_NAME: 'Samaroh Luxe Event Design & Wedding Experiences Pvt. Ltd.',
  TAGLINE: 'Modern Wedding Decor & Celebration Experiences, Made Effortless',
  SUB_TAGLINE: 'India’s premier tech-enabled wedding styling platform. 3D renders before your big day, direct in-house production, and transparent pricing.',
  DESCRIPTION: 'Samaroh Luxe is India’s leading modern wedding decor and turnkey event planning platform. Operating across Bengaluru, Hyderabad, Delhi NCR, Goa, Chennai, and Mumbai with in-house floral and carpentry fabrication, 3D visualization, and single-point event directors.',
  PHONE: '+91 98800 69069',
  PHONE_DISPLAY: '+91 98800 69069',
  WHATSAPP: '+919880069069',
  WHATSAPP_NUMBER: '+919880069069',
  WHATSAPP_DISPLAY: '+91 98800 69069',
  EMAIL: 'celebrate@samarohluxe.com',
  ADDRESS: 'Design Pavilion, 100ft Road, Indiranagar, Bengaluru, Karnataka 560038',
  CITIES: [
    { id: 'bengaluru', name: 'Bengaluru', studio: '100ft Road, Indiranagar', phone: '+91 98800 69069', isPrimary: true },
    { id: 'hyderabad', name: 'Hyderabad', studio: 'Road No. 36, Jubilee Hills', phone: '+91 98800 69070', isPrimary: false },
    { id: 'delhi-ncr', name: 'Delhi NCR', studio: 'Golf Course Road, Gurugram', phone: '+91 98800 69071', isPrimary: false },
    { id: 'goa', name: 'Goa', studio: 'Chogm Road, Porvorim', phone: '+91 98800 69072', isPrimary: false },
    { id: 'chennai', name: 'Chennai', studio: 'Khader Nawaz Khan Rd, Nungambakkam', phone: '+91 98800 69073', isPrimary: false },
    { id: 'mumbai', name: 'Mumbai', studio: 'Linking Road, Bandra West', phone: '+91 98800 69074', isPrimary: false }
  ],
  INSTAGRAM: 'https://instagram.com/samarohluxe',
  FACEBOOK: 'https://facebook.com/samarohluxe',
  PINTEREST: 'https://pinterest.com/samarohluxe',
  YOUTUBE: 'https://youtube.com/@samarohluxe',
  FOUNDED_YEAR: 2018,
  EVENTS_DELIVERED: '1,450+',
  RATING: '4.94 / 5.0',
  VERIFIED_REVIEWS: '820+',
  WAREHOUSE_SQFT: '45,000+ Sq. Ft. In-House Production'
};

export interface DecorThemePackage {
  id: string;
  slug: string;
  title: string;
  category: 'mandap' | 'reception' | 'sangeet' | 'haldi' | 'mehendi' | 'all_inclusive';
  categoryLabel: string;
  tagline: string;
  priceStartingFrom: number;
  priceFormatted: string;
  idealFor: string;
  primaryImage: string;
  galleryImages: string[];
  vibe: string;
  highlights: string[];
  inclusions: {
    area: string;
    description: string;
  }[];
  customizationOptions: string[];
  renderTimeDays: number;
}

export interface ServiceOffering {
  id: string;
  slug: string;
  title: string;
  iconName: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  coverImage: string;
  deliverables: string[];
  pricingRange: string;
  whyChooseUs: string;
}

export interface RealCelebration {
  id: string;
  slug: string;
  coupleName: string;
  celebrationType: string;
  city: string;
  venueName: string;
  coverImage: string;
  galleryImages: string[];
  vibe: string;
  story: string;
  keyDecorElements: string[];
  testimonial: {
    quote: string;
    author: string;
    relation: string;
  };
}

export interface StyledVenueItem {
  id: string;
  name: string;
  city: string;
  area: string;
  venueType: string;
  coverImage: string;
  weddingsStyledCount: number;
  popularSpaces: string[];
  curfewAndSpecs: string;
  recommendedTheme: string;
}

export interface DecorQuizOption {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  costWeight: number;
}

export const SAMAROH_PACKAGES: DecorThemePackage[] = [
  {
    id: 'pkg-royal-rajwada',
    slug: 'the-royal-rajwada-mandap',
    title: 'The Royal Rajwada Floral Mandap',
    category: 'mandap',
    categoryLabel: 'Muhurtham & Mandap',
    tagline: 'Timeless temple architecture draped in cascading marigolds, tuberoses & antique brass urulis',
    priceStartingFrom: 349000,
    priceFormatted: '₹3.49 Lakhs',
    idealFor: 'Traditional South Indian & North Indian Palace or Lawn Muhurthams (200-800 Guests)',
    primaryImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80'
    ],
    vibe: 'Regal, Sacred, Fragrant & Culturally Immersive',
    highlights: [
      'Hand-carved wooden pillar pillars with brass kalash tops',
      '1,200+ kg of farm-fresh marigolds, mogra & Dutch red roses',
      'Elevated mandap stage (24x24 ft) with plush red/gold aisle carpet',
      'Flanking diya walls with 500+ smokeless wax brass oil lamps',
      'Complete priest havan setup & brass pooja samagri pedestals'
    ],
    inclusions: [
      { area: 'Sacred Mandap Structure', description: '4-pillar 24ft arched gazebo with floral canopy and brass hangings' },
      { area: 'Bridal Grand Walkway', description: '60ft velvet carpeted aisle with 12 handcrafted brass floral pillars' },
      { area: 'Welcome Archway', description: 'Traditional Toran floral archway with custom couple brass monogram' },
      { area: 'Stage Lighting', description: 'Warm 2800K architectural spotlights, warm halogen washes & priest focal pin-spots' }
    ],
    customizationOptions: ['White mogra swap', 'Lotus pond water-body surround', 'Live temple Shehnai/Nadaswaram setup'],
    renderTimeDays: 2
  },
  {
    id: 'pkg-celestial-glasshouse',
    slug: 'the-celestial-glasshouse-reception',
    title: 'The Celestial Glasshouse Reception',
    category: 'reception',
    categoryLabel: 'Grand Reception',
    tagline: 'Mirrored backdrops, suspended crystal chandeliers, Italian eucalyptus & blush peony clouds',
    priceStartingFrom: 425000,
    priceFormatted: '₹4.25 Lakhs',
    idealFor: 'Luxury 5-Star Ballroom or Starlit Lawn Receptions (300-1,000 Guests)',
    primaryImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80'
    ],
    vibe: 'Modern Romance, High Glamour & Haute Couture Floral Art',
    highlights: [
      '36ft seamless smoked mirror stage backdrop with cascading white wisteria',
      '6 vintage Bohemian crystal chandeliers suspended from trussing',
      'Geometric champagne gold arches with hydrangeas, orchids & gypsophila',
      'Mirror-top couple sofa riser with bespoke velvet tufted seating',
      'Tunnel entrance with 1,000 fairy lights and curved photo memory wall'
    ],
    inclusions: [
      { area: 'Main Stage Scenography', description: '36x16 ft stage with mirror panelling, floral hedges & floating crystal globes' },
      { area: 'Entrance Tunnel Experience', description: '50ft tunnel with cascading micro-lights and aromatic white florals' },
      { area: 'VIP Table Styling', description: '10 mirrored round table centerpieces with tall candelabras and printed menu cards' },
      { area: 'Cold Pyros & Low Fog', description: 'Safety-certified couple entry stage effects with 6 cold pyro sparklers' }
    ],
    customizationOptions: ['Black-tie monochrome theme', 'Neon LED couple surname marquee', 'Floral monogram photo-wall'],
    renderTimeDays: 2
  },
  {
    id: 'pkg-neon-disco-sangeet',
    slug: 'the-neon-glam-sangeet-stage',
    title: 'The Neon Glam Rock Sangeet Stage',
    category: 'sangeet',
    categoryLabel: 'Sangeet & Cocktail',
    tagline: 'Concert-grade LED wall, kinetic lighting, disco mirror balls, and vibrant velvet cocktail lounges',
    priceStartingFrom: 375000,
    priceFormatted: '₹3.75 Lakhs',
    idealFor: 'High-Energy Dance Nights, Bollywood Sangeets & Afterparties (200-600 Guests)',
    primaryImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80'
    ],
    vibe: 'Electric, Vibrant, Party-Ready & Cinematic',
    highlights: [
      'P3 30x12 ft high-res LED backdrop displaying customized couple visuals',
      '24 moving beam moving heads, profile pars & dynamic hazers',
      'Glossy acrylic dance floor (24x24 ft) with monogram vinyl wrap',
      '20ft illuminated cocktail bar counter with bar shelving and cocktail signage',
      'Quirky Bollywood prop photobooth with customized neon signs'
    ],
    inclusions: [
      { area: 'Performance Dance Stage', description: 'Reinforced 32x24 ft stage engineered for large family choreography' },
      { area: 'Kinetic Lighting Rig', description: 'Truss mounted moving beams, warm floods and computerized DMX console' },
      { area: 'Cocktail Bar & Lounge', description: 'Chesterfield leather loungers, high cocktail tables & illuminated bar backdrop' },
      { area: 'DJ Console Enclosure', description: 'Custom branded DJ booth with LED strip contouring' }
    ],
    customizationOptions: ['CO2 blast jets for dance finale', 'Silent disco after-party headsets', 'Mirror ball ceiling drop'],
    renderTimeDays: 2
  },
  {
    id: 'pkg-genda-sunshine-haldi',
    slug: 'the-sunshine-genda-brass-haldi',
    title: 'The Sunshine Genda & Brass Haldi',
    category: 'haldi',
    categoryLabel: 'Haldi & Chooda',
    tagline: 'Handcrafted bell metal urlis, bright yellow genda marigold canopies, cane furniture & floral showers',
    priceStartingFrom: 185000,
    priceFormatted: '₹1.85 Lakhs',
    idealFor: 'Joyful Day Lawn, Courtyard, or Poolside Haldi Functions (100-300 Guests)',
    primaryImage: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80'
    ],
    vibe: 'Sun-Drenched, Cheerful, Organic & Instagram-Loved',
    highlights: [
      'Large 5ft polished brass urli for couple seated floral bath ceremony',
      '400 kg of fresh orange & yellow marigolds arranged in ombre cascades',
      'Handwoven cane sofa sets, low diwans and printed Rajasthani cushions',
      'Floral shower arrangement with rose petals for couple blessings',
      'Traditional puppet and umbrella photo backdrop with cycle rickshaw prop'
    ],
    inclusions: [
      { area: 'Urli Ceremony Stage', description: 'Elevated wooden deck, 5ft brass urli, petal baskets & flower arch' },
      { area: 'Guest Seating Lounge', description: '6 cane seating clusters with colorful genda cushion accents' },
      { area: 'Interactive Photo Corner', description: 'Vintage bicycle with flower baskets and customized couple hashtag' },
      { area: 'Organic Haldi & Petal Station', description: 'Brass bowls with organic kasturi haldi, rose water & chandan pastes' }
    ],
    customizationOptions: ['Pool floaters & marigold water rangolis', 'Sunglass cart giveaway counter', 'Live dholak & folk singers'],
    renderTimeDays: 1
  },
  {
    id: 'pkg-boho-moroccan-mehendi',
    slug: 'the-boho-moroccan-garden-mehendi',
    title: 'The Bohemian Moroccan Garden Mehendi',
    category: 'mehendi',
    categoryLabel: 'Mehendi & Sangeet',
    tagline: 'Pampas grass plumes, dreamcatchers, macramé arches, kilim rugs & pastel floral teepees',
    priceStartingFrom: 220000,
    priceFormatted: '₹2.20 Lakhs',
    idealFor: 'Relaxed Outdoor Day Lawn & Poolside Mehendi Gatherings (100-350 Guests)',
    primaryImage: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80'
    ],
    vibe: 'Earthy, Free-Spirited, Chic & Cozy',
    highlights: [
      'Macramé triangular bridal teepee with peach roses, eucalyptus & pampas',
      'Low Moroccan wooden tables with floor cushions and Turkish kilim rugs',
      'Dedicated Henna artist cabanas with shade umbrellas and soft bolsters',
      'Bangle, parandi, and ittar gifting bar for attending guests',
      'Cane pendant lighting fixtures with warm filament amber bulbs'
    ],
    inclusions: [
      { area: 'Bridal Mehendi Gazebo', description: 'Custom bohemian floral teepee with velvet seating for comfortable henna application' },
      { area: 'Guest Floor Lounges', description: '4 Moroccan floor seating setups with colorful floor cushions & low brass tables' },
      { area: 'Live Henna Studio Desks', description: '6 shaded artist chairs with footrests and task lighting' },
      { area: 'Favors & Gifting Boutique', description: 'Wooden rustic shelving unit styled with flower garlands for wedding favors' }
    ],
    customizationOptions: ['Live sugarcane juice / coconut cart', 'Customised footwear giveaway basket', 'Dreamcatcher photo wall'],
    renderTimeDays: 1
  },
  {
    id: 'pkg-3day-turnkey-experience',
    slug: 'the-complete-3day-celebration-buyout',
    title: 'The 3-Day Turnkey Celebration Package',
    category: 'all_inclusive',
    categoryLabel: 'All-Inclusive 3-Day',
    tagline: 'Full wedding decor suite: Haldi, Mehendi, Sangeet, Muhurtham & Reception with dedicated production team',
    priceStartingFrom: 990000,
    priceFormatted: '₹9.90 Lakhs',
    idealFor: 'Complete Destination or City Hotel Weddings (200-500 Guests, 4 Functions)',
    primaryImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80'
    ],
    vibe: 'Comprehensive, Seamless, Unmatched Value & Dedicated Event Director',
    highlights: [
      'Includes decor for all 4 primary ceremonies (Haldi, Mehendi, Sangeet, Muhurtham/Reception)',
      'Dedicated Senior Production Manager on-site 48 hours prior',
      '3D photo-realistic spatial renders for every venue layout',
      'In-house floral sourcing directly from Ooty, Bangalore & Holland flower markets',
      'Zero vendor hassle: audio-visual, staging, lighting and decor bundled into one transparent invoice'
    ],
    inclusions: [
      { area: 'Function 1: Sunshine Haldi', description: 'Complete brass urli, marigold decor, cane seating & photo props' },
      { area: 'Function 2: Garden Mehendi', description: 'Boho floral teepee, henna artist stations, kilim rugs & floral favors' },
      { area: 'Function 3: Glam Rock Sangeet', description: 'Full concert LED wall, dance stage, intelligent lighting & lounge bar' },
      { area: 'Function 4: Royal Muhurtham', description: 'Sacred architectural mandap, 60ft floral walkway, diya walls & havan stage' }
    ],
    customizationOptions: ['Reception stage upgrade', 'Special celebrity artist tech rider management', 'Complimentary floral jewelry suite'],
    renderTimeDays: 3
  }
];

export const SAMAROH_SERVICES: ServiceOffering[] = [
  {
    id: 'srv-decor-design',
    slug: 'wedding-decor-design',
    title: 'Wedding & Event Decor Design',
    iconName: 'Palette',
    tagline: 'Custom 3D concept creation, floral scenography, and bespoke stage architecture',
    shortDesc: 'From intimate Haldi backdrops to palatial glasshouse Mandaps, our in-house designers and craftsmen build unforgettable visual worlds.',
    fullDesc: 'Unlike traditional event planners who subcontract decor to local third-party tent houses with high markups, Samaroh Luxe operates its own 45,000+ sq. ft. fabrication and floral warehouses. We create custom mockups and 3D architectural renders of your specific venue spaces before you confirm, giving you 100% visual certainty.',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Custom 3D spatial renders & moodboards',
      'Architectural Mandap & Stage fabrication',
      'Exotic & local flower procurement from wholesale markets',
      'Theme photobooths, walkway arches & entrance installations',
      'Ambient, architectural & pin-spot lighting design',
      'Bespoke signage, stationery & welcome easels'
    ],
    pricingRange: 'Packages from ₹1.85L to ₹15L+',
    whyChooseUs: 'Zero middleman markups. Own fabrication units and direct floral mandi sourcing ensure 20-30% more floral volume for your budget.'
  },
  {
    id: 'srv-destination-planning',
    slug: 'destination-wedding-management',
    title: 'Destination Wedding Management',
    iconName: 'Compass',
    tagline: 'Turnkey planning across Goa, Udaipur, Jaipur, Coorg, Chikmagalur & Jim Corbett',
    shortDesc: 'Effortless multi-day destination wedding execution with hotel negotiations, guest logistics, and venue clearances.',
    fullDesc: 'Planning a destination wedding requires intense coordination across airport fleet logistics, guest hospitality, CRZ beach permits, municipal loud-music licenses, and hotel room inventory. Our on-ground destination directors take full responsibility for supplier contracts, guest check-ins, and timelines.',
    coverImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Venue reconnaissance tours & contract negotiations',
      'Guest airport transfer logistics & luggage coordination',
      'Hotel room blocking & welcome hamper placements',
      'Legal permits, police NOCs & music licenses',
      'Shadow managers assigned to Bride & Groom families',
      'Complete run-of-show minute-by-minute execution'
    ],
    pricingRange: 'Turnkey coordination from ₹2.5L to ₹10L management fee',
    whyChooseUs: 'GM-level partnership contracts across 120+ luxury resorts in India, securing free lawn waivers and discounted room rates.'
  },
  {
    id: 'srv-photography-films',
    slug: 'cinematic-photography-films',
    title: 'Cinematic Photography & Films',
    iconName: 'Camera',
    tagline: 'Emotion-driven candid captures, drone cinematography & same-day teaser edits',
    shortDesc: 'Award-winning visual storytellers capturing the intimate glances, joyful tears, and high-energy dance movements of your wedding.',
    fullDesc: 'We believe wedding photography should feel like high-fashion cinematic cinema, not stiff staged posing. Our collective of candid wedding photographers and documentary filmmakers use cinema-grade cameras, subtle ambient lighting, and non-intrusive storytelling techniques.',
    coverImage: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Traditional & candid photography coverage',
      '4K drone aerial cinematography',
      '3-5 minute high-energy cinematic teaser film',
      '20-30 minute full wedding documentary film',
      'Color-graded high-res digital gallery (800-1500 images)',
      'Handcrafted Italian leather-bound coffee table album'
    ],
    pricingRange: '₹1.5L to ₹6.5L per multi-day celebration',
    whyChooseUs: 'Our cinematography team works in complete harmony with our lighting designers to ensure zero dark shadows and perfect skin tones on stage.'
  },
  {
    id: 'srv-entertainment-sound',
    slug: 'artists-sound-entertainment',
    title: 'Artists, DJs & Sound Engineering',
    iconName: 'Music',
    tagline: 'Top celebrity DJs, live Sufi bands, anchors, choreography & concert line arrays',
    shortDesc: 'Curated entertainment rosters that keep your dance floor packed until the early morning hours.',
    fullDesc: 'Entertainment makes or breaks a wedding celebration. From soulful live flute and violin melodies during morning phera rituals to high-octane Bollywood DJs, Punjabi dhol players, and celebrity singers for your Sangeet night, we curate, audition, and manage the technical riders.',
    coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Celebrity and club DJs with verified playlists',
      'Live acoustic, Sufi, and fusion band bookings',
      'Charismatic bilingual wedding emcees and anchors',
      'Bespoke family sangeet choreography sessions (in-person & online)',
      'JBL / L-Acoustics line array sound systems tuned for venue acoustics',
      'Special effects: CO2 cryo jets, low-lying fog & confetti bursts'
    ],
    pricingRange: 'Custom artist budgets from ₹50,000 to ₹15L+',
    whyChooseUs: 'All audio and lighting technicians are in-house, ensuring zero sound feedback glitches or mic dropouts during emotional speeches.'
  },
  {
    id: 'srv-bridal-hmua',
    slug: 'bridal-styling-hmua',
    title: 'Bridal HMUA & Styling Concierge',
    iconName: 'Sparkles',
    tagline: 'High-definition airbrush makeup, saree draping artists & bridal trousseau consultations',
    shortDesc: 'Flawless, glowing bridal looks tailored to your personal aesthetic, outfits, and lighting.',
    fullDesc: 'Our bridal beauty artists understand the nuances of high-definition digital cameras and stage lighting. We provide bespoke trials, skin prep timelines, luxury international makeup kits (Dior, Charlotte Tilbury, NARS, MAC), and expert saree draping for all ceremonies.',
    coverImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Bridal HD / Airbrush makeup with trial session',
      'Hairstyling with fresh floral accents & extensions',
      'Professional saree & lehenga pleat draping',
      'Groom grooming & styling assistance',
      'Family makeup stations for mother, sisters & bridesmaids',
      'Touch-up artist on standby through the ceremony'
    ],
    pricingRange: '₹25,000 to ₹1.2L per function package',
    whyChooseUs: 'Punctual, hygienic, luxury-certified makeup artists who travel directly to your hotel suite or green room.'
  },
  {
    id: 'srv-catering-curation',
    slug: 'gourmet-catering-bar',
    title: 'Gourmet Catering & Bar Styling',
    iconName: 'Utensils',
    tagline: 'Signature culinary concepts, live regional stations & craft cocktail bars',
    shortDesc: 'Exquisite banqueting menus designed with celebrated culinary chefs and molecular bar masters.',
    fullDesc: 'Food is the soul of Indian hospitality. We curate tasting sessions, craft bespoke multi-regional menus (Awadhi, Chettinad, Marwari, Pan-Asian, Italian Woodfire), design live interactive food stations, and engineer custom cocktail menus named after the couple’s love story.',
    coverImage: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Curated food tasting sessions with master caterers',
      'Customized menu design & live counter thematic staging',
      'Signature cocktail menu curation & mixologist staff',
      'Artisan dessert bars, live waffle & churro stations',
      'Hygienic HACCP-certified food production standards',
      'Late-night snack trucks for after-party hunger'
    ],
    pricingRange: 'From ₹1,200 to ₹4,500 per plate',
    whyChooseUs: 'Carefully vetted kitchen partners with dedicated separate vegetarian and non-vegetarian banquet preparations.'
  }
];

export const SAMAROH_REAL_WEDDINGS: RealCelebration[] = [
  {
    id: 'real-1',
    slug: 'tanvi-and-kabeer-bengaluru',
    coupleName: 'Tanvi & Kabeer',
    celebrationType: 'South Indian & Punjabi Fusion Wedding',
    city: 'Bengaluru',
    venueName: 'The Tamarind Tree, Kanakapura Road',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80'
    ],
    vibe: 'Temple Brass, Botanical Greenery & Sunset Fairy Lights',
    story: 'Tanvi from Bengaluru and Kabeer from Chandigarh wanted a three-day celebration celebrating both South Indian temple grandeur and a wild Punjabi Sangeet. Samaroh Luxe transformed The Tamarind Tree with a floating lotus mandap and an electric LED neon sangeet courtyard.',
    keyDecorElements: ['Floating lotus pool mandap', 'Overhanging brass temple bells', 'Bespoke cold-sparkler couple walkway', 'Moroccan day-mehendi cabanas'],
    testimonial: {
      quote: 'Seeing the 3D render 2 months before was reassuring, but seeing the real venue look even better than the 3D render blew our minds. Every single guest asked who our decor team was!',
      author: 'Tanvi Rao (Bride)',
      relation: 'Celebration at Tamarind Tree Bengaluru'
    }
  },
  {
    id: 'real-2',
    slug: 'ananya-and-dev-goa',
    coupleName: 'Ananya & Dev',
    celebrationType: 'Coastal Beachfront Destination Wedding',
    city: 'Goa',
    venueName: 'Alila Diwa & Gonsua Beach, South Goa',
    coverImage: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=80'
    ],
    vibe: 'Bohemian Coastal Chic, Driftwood & White Hydrangeas',
    story: '180 guests flew into South Goa for a 48-hour oceanfront festival. We constructed a circular driftwood mandap against the Arabian Sea sunset and orchestrated an open-air silent disco afterparty under the coconut palms.',
    keyDecorElements: ['Circular sunset beach mandap', 'Driftwood & pampas walkway', 'Silent disco after-party canopy', 'Personalized coconut water cart'],
    testimonial: {
      quote: 'Planning Goa from Singapore felt impossible until Samaroh Luxe took over. They handled beach permits, police sound curfews, and created the most magical sunset wedding.',
      author: 'Devendra Patel (Groom)',
      relation: 'Destination Wedding in South Goa'
    }
  },
  {
    id: 'real-3',
    slug: 'shruti-and-aditya-hyderabad',
    coupleName: 'Shruti & Aditya',
    celebrationType: 'Nizami Grandeur & Modern Mirror Sangeet',
    city: 'Hyderabad',
    venueName: 'Taj Falaknuma Palace & Boulder Hills',
    coverImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80'
    ],
    vibe: 'Royal Mughal Motifs, Mirror Pillars & Cascading Mogra',
    story: 'A magnificent heritage celebration combining royal Hyderabadi hospitality with a high-fashion crystal glasshouse reception. Over 2,000 kg of fresh jasmine and tuberoses created an intoxicating fragrance across the palace terraces.',
    keyDecorElements: ['Mirror mosaic reception backdrop', 'Mughal jaali floral screens', '20ft crystal chandelier cluster', 'Live Sufi Mehfil seating lounge'],
    testimonial: {
      quote: 'Samaroh Luxe gave us total pricing transparency. We had exact itemized costs for flowers, lighting, and stage setups with zero last-minute escalation.',
      author: 'Dr. K. S. Reddy (Father of the Bride)',
      relation: 'Palace Wedding in Hyderabad'
    }
  }
];

export const SAMAROH_STYLED_VENUES: StyledVenueItem[] = [
  {
    id: 'ven-1',
    name: 'The Tamarind Tree',
    city: 'Bengaluru',
    area: 'Kanakapura Road',
    venueType: 'Heritage Courtyard & Open Lawn',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    weddingsStyledCount: 42,
    popularSpaces: ['Natural Water Pond Mandap', 'Sheesh Mahal Courtyard', 'Banyan Tree Lawn'],
    curfewAndSpecs: 'Music curfew 10:00 PM; In-house kitchen facilities available',
    recommendedTheme: 'The Royal Rajwada with Antique Bell Metal'
  },
  {
    id: 'ven-2',
    name: 'Temple Tree Leisure',
    city: 'Bengaluru',
    area: 'Panathur / Marathahalli',
    venueType: 'Eco-Luxury Thatched Pavilions',
    coverImage: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=800&q=80',
    weddingsStyledCount: 36,
    popularSpaces: ['Central Sunken Lawn', 'Open-Air Amphitheatre', 'Dining Pavilion'],
    curfewAndSpecs: 'Sound limit 9:30 PM outside; Indoor banquet till 12:30 AM',
    recommendedTheme: 'Boho Garden & Tropical Foliage'
  },
  {
    id: 'ven-3',
    name: 'Taj West End',
    city: 'Bengaluru',
    area: 'Race Course Road',
    venueType: 'Colonial 5-Star Heritage Estate',
    coverImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    weddingsStyledCount: 29,
    popularSpaces: ['The Grand Ballroom', 'Prince of Wales Lawn', 'Blue Verandah'],
    curfewAndSpecs: '10:00 PM on lawns; AC ballrooms open till late',
    recommendedTheme: 'The Celestial Glasshouse Reception'
  },
  {
    id: 'ven-4',
    name: 'Alila Diwa Goa',
    city: 'Goa',
    area: 'Majorda / South Goa',
    venueType: 'Luxury Coastal Resort & Paddy Views',
    coverImage: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80',
    weddingsStyledCount: 22,
    popularSpaces: ['Infinity Pool Deck', 'Banyan Lawn', 'Udhyan Lawn'],
    curfewAndSpecs: 'CRZ sound permits handled directly by Samaroh Luxe',
    recommendedTheme: 'Sunset Beachfront Boho Chic'
  },
  {
    id: 'ven-5',
    name: 'Boulder Hills Golf & Country Club',
    city: 'Hyderabad',
    area: 'Gachibowli',
    venueType: 'Expansive Golf Greens & Glass Clubhouse',
    coverImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    weddingsStyledCount: 31,
    popularSpaces: ['Fairway Greens Lawn', 'Glasshouse Pavilion', 'Pool Terrace'],
    curfewAndSpecs: 'Capacity for up to 2,500 guests with vast parking',
    recommendedTheme: 'Neon Glam Rock Sangeet Stage'
  },
  {
    id: 'ven-6',
    name: 'ITC Grand Bharat',
    city: 'Delhi NCR',
    area: 'Gurugram / Mewat',
    venueType: 'Palatial 5-Star Retreat & Courtyards',
    coverImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    weddingsStyledCount: 19,
    popularSpaces: ['Yamasthalam Amphitheatre', 'Prithvi Lawn', 'Chhatris Poolside'],
    curfewAndSpecs: 'Luxury retreat suited for complete resort buyouts',
    recommendedTheme: 'The 3-Day Turnkey Celebration Package'
  }
];

export const SAMAROH_FAQS = [
  {
    question: 'How is Samaroh Luxe different from traditional wedding decorators and planners?',
    answer: 'Traditional wedding planners subcontract decor to third-party tent and flower vendors, adding a 20-30% middleman markup without quality control. Samaroh Luxe is a vertically integrated design company: we own our 45,000 sq. ft. fabrication warehouses, employ full-time carpenters, welders, and floral artists, and create custom 3D photo-realistic spatial renders before you pay a deposit. You get fixed itemized quotes, zero hidden vendor markups, and guaranteed delivery.'
  },
  {
    question: 'When should we book our wedding decor and planning team?',
    answer: 'We recommend booking 3 to 6 months in advance for peak wedding auspicious dates (November through March). However, because we manage our own in-house fabrication teams across Bengaluru, Hyderabad, Delhi NCR, and Goa, our creative studio can execute rush bookings within 14-21 days subject to date availability.'
  },
  {
    question: 'Do you provide 3D design renders before the event?',
    answer: 'Yes! Every customized wedding booking includes photo-realistic 3D walkthrough renders tailored to your exact venue floor-plan. You will see the mandap dimensions, stage lighting, walkway floral density, and table centerpieces in full color before any fabrication starts.'
  },
  {
    question: 'Can we customize the ready theme packages?',
    answer: 'Absolutely. Every package in our lookbook serves as a curated base. You can swap flower species (e.g., marigold to white mogra or Dutch roses), alter backdrop dimensions, add neon typography, upgrade audio-visuals, or combine elements from different themes. Our pricing is itemized so you see exact price adjustments in real time.'
  },
  {
    question: 'What is your payment schedule?',
    answer: 'We follow a transparent 4-stage milestone structure: 20% booking advance to block dates and initiate 3D renders; 40% on 3D design sign-off and material procurement; 30% 7 days prior to the event upon fabrication completion; and the final 10% on the event day prior to ceremony handover.'
  },
  {
    question: 'Do you handle venue permissions, electricity generators, and sound licenses?',
    answer: 'Yes. Our production team conducts a detailed technical recce of your venue to assess power loads, DG generator requirements, rigging points, and load-in timings. For destination cities like Goa, we assist with required local police sound permissions, CRZ clearances, and copyright music licenses (PPL/IPRS).'
  }
];

export const SAMAROH_LUXE_WEBSITE: BusinessWebsite = {
  id: 'site-samaroh-luxe-69',
  slug: '69-samaroh-luxe',
  templateId: 'modern_event_styling_platform',
  businessName: SAMAROH_CONFIG.SITE_NAME,
  tagline: SAMAROH_CONFIG.TAGLINE,
  description: SAMAROH_CONFIG.DESCRIPTION,
  category: 'wedding_event_planning',
  ownerName: 'Samaroh Luxe Design Directorate',
  phone: SAMAROH_CONFIG.PHONE,
  whatsapp: SAMAROH_CONFIG.WHATSAPP,
  email: SAMAROH_CONFIG.EMAIL,
  address: SAMAROH_CONFIG.ADDRESS,
  city: 'Bengaluru, Hyderabad, Goa & Delhi NCR',
  mapsUrl: 'https://maps.google.com/?q=Indiranagar+100ft+Road+Bengaluru',
  openingHours: 'Mon - Sun: 9:30 AM - 8:30 PM',
  primaryColor: '#E06D53',
  secondaryColor: '#D4AF37',
  logoUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=200&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
  bookingType: 'consultation_quote',
  bookingCtaLabel: 'View Project #69',
  specialBadge: 'Project #69 · Modern Wedding Decor & Experience Platform',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 0,
  paymentStatus: 'paid',
  sections: [
    { id: 'top-bar', title: 'Top City Switcher & Hotline', isEnabled: true, order: 1 },
    { id: 'navbar', title: 'Modern Clean Navigation & Consultation Trigger', isEnabled: true, order: 2 },
    { id: 'hero', title: 'Editorial Video/Photo Hero with Fast Quote Bar', isEnabled: true, order: 3 },
    { id: 'categories', title: 'Celebration Categories & Decor Lookbooks', isEnabled: true, order: 4 },
    { id: 'why-us', title: 'The Modern In-House Advantage & 3D Tech', isEnabled: true, order: 5 },
    { id: 'packages', title: 'Curated Ready Theme Packages with Pricing', isEnabled: true, order: 6 },
    { id: 'calculator', title: 'Interactive Decor Estimator & Style Selector', isEnabled: true, order: 7 },
    { id: 'services', title: '6 Turnkey Wedding Services', isEnabled: true, order: 8 },
    { id: 'real-weddings', title: 'Real Celebrations & Video Stories', isEnabled: true, order: 9 },
    { id: 'venues', title: 'Iconic Styled Venues Directory', isEnabled: true, order: 10 },
    { id: 'process', title: '4-Step Seamless Production Workflow', isEnabled: true, order: 11 },
    { id: 'faqs', title: 'Client Transparency FAQs', isEnabled: true, order: 12 },
    { id: 'consultation', title: 'Multi-Step Consultation Flow & WhatsApp Sync', isEnabled: true, order: 13 },
    { id: 'footer', title: 'Studio Locations, Legal & Contact Desks', isEnabled: true, order: 14 }
  ],
  items: [
    {
      id: 'itm-sam-1',
      name: 'The Royal Rajwada Floral Mandap Decor',
      description: 'Handcrafted wooden mandap, 1200kg fresh marigolds & mogra, 60ft velvet aisle & brass diya walls.',
      price: 349000,
      category: 'Mandap Decor',
      isAvailable: true,
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'itm-sam-2',
      name: 'The Celestial Glasshouse Reception Stage',
      description: '36ft smoked mirror backdrop, 6 Bohemian crystal chandeliers & Italian eucalyptus floral clouds.',
      price: 425000,
      category: 'Reception Decor',
      isAvailable: true,
      imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'itm-sam-3',
      name: 'Sunshine Genda & Brass Haldi Setup',
      description: '5ft authentic bell metal urli, 400kg ombre marigolds, cane lounges & petal shower baskets.',
      price: 185000,
      category: 'Haldi Decor',
      isAvailable: true,
      imageUrl: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'itm-sam-4',
      name: 'Neon Glam Rock Sangeet Dance Stage',
      description: 'P3 concert LED screen, 24 moving heads, glossy dance floor & illuminated cocktail lounge bar.',
      price: 375000,
      category: 'Sangeet Decor',
      isAvailable: true,
      imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80'
    }
  ],
  offers: [
    {
      id: 'off-early-samaroh',
      title: 'Complimentary 3D Spatial Walkthrough Render',
      description: 'Book your wedding decor consultation this month and receive a bespoke 3D virtual walkthrough of your wedding stage and mandap complimentary.',
      discountPercent: 10,
      couponCode: 'SAMAROH3D',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'gal-sam-1',
      title: 'Royal Lotus Pool Mandap, The Tamarind Tree',
      category: 'events',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'gal-sam-2',
      title: 'Mirrored Glasshouse Reception, Taj West End',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'gal-sam-3',
      title: 'Sunset Beachfront Boho Ceremony, South Goa',
      category: 'events',
      imageUrl: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'gal-sam-4',
      title: 'Electric Sangeet Concert Stage, Hyderabad',
      category: 'events',
      imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80'
    }
  ]
};
