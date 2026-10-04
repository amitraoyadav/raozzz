import { BusinessWebsite } from '../types';

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  category: 'kitchen' | 'bedroom' | 'living-room' | 'dining-room' | 'decorative-units' | 'kids-room';
  title: string;
  tagline: string;
  shortDesc: string;
  overview: string;
  coverImage: string;
  galleryImages: string[];
  styles: { name: string; desc: string; image: string }[];
  materialsAndFinishes: string[];
  hardwareBrands: string[];
  keyFeatures: string[];
  faqs: { q: string; a: string }[];
}

export interface PackageOffer {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  originalPrice: string;
  offerPrice: string;
  savings: string;
  idealFor: string;
  tag: string;
  coverImage: string;
  inclusions: string[];
  specifications: { label: string; value: string }[];
}

export interface ProjectShowcase {
  id: string;
  title: string;
  propertyType: string;
  designStyle: string;
  city: string;
  areaSqFt: string;
  duration: string;
  coverImage: string;
  images: string[];
  description: string;
  highlights: string[];
}

export interface ShowroomLocation {
  id: string;
  city: string;
  state: string;
  area: string;
  branchName: string;
  address: string;
  landmark: string;
  phone: string;
  email: string;
  hours: string;
  showroomSize: string;
  features: string[];
  displaySuites: string[];
  image: string;
}

export interface ClientReview {
  id: string;
  clientName: string;
  city: string;
  propertyType: string;
  packageTaken: string;
  rating: number;
  date: string;
  review: string;
  avatar: string;
  projectPhoto: string;
  videoUrl?: string;
}

export interface BlogItem {
  id: string;
  slug: string;
  title: string;
  category: 'Kitchen' | 'Bedroom' | 'Living' | 'Budget Guide' | 'Design Trends';
  author: string;
  date: string;
  readTime: string;
  image: string;
  summary: string;
  content: string[];
  tags: string[];
}

export const LIVINTO_CONFIG = {
  brandName: 'Livinto Home Interiors',
  shortBrand: 'Livinto',
  legalName: 'Livinto Home Interiors & Modular Infrastructure Pvt. Ltd.',
  tagline: 'Custom-Made Contemporary Home Interiors & Modular Living',
  helpline: '1800-425-6677',
  helplineDisplay: '1800 425 6677',
  whatsapp: '+917306335132',
  whatsappDisplay: '+91 73063 35132',
  email: 'care@livintointeriors.com',
  workingHours: 'Mon - Sun: 9:30 AM - 8:00 PM',
  stats: {
    experienceYears: '22+',
    homesDelivered: '16,000+',
    deliveryDays: '40 Working Days',
    warrantyYears: '10 Years Warranty',
    factoryArea: '350,000 Sq. Ft.',
    monthlyCapacity: '300+ Projects',
    showroomsCount: '29 Showrooms',
    workforce: '1,700+ Professionals',
  },
  cities: [
    'Bengaluru',
    'Delhi NCR',
    'Gurugram',
    'Noida',
    'Mumbai',
    'Navi Mumbai',
    'Pune',
    'Hyderabad',
    'Chennai',
    'Coimbatore',
    'Kochi',
    'Trivandrum',
    'Calicut',
    'Ahmedabad',
    'Mangaluru',
    'Mysuru',
  ],
};

export const PRODUCT_CATEGORIES_DATA: ProductItem[] = [
  {
    id: 'prod-kitchen',
    slug: 'kitchen',
    category: 'kitchen',
    name: 'Modular Kitchens',
    title: 'Custom-Crafted Modular Kitchens',
    tagline: 'Precision Ergonomics, Boiling Waterproof Core & Imported German Hardware',
    shortDesc: 'Designed to Indian cooking habits with heat, oil & water resistance. Customized layouts engineered with German CNC machinery.',
    overview: 'At Livinto, our modular kitchens are crafted exclusively with boiling-waterproof (BWP 710 grade) plywood and fitted with world-class Austrian and German soft-close fittings from Blum and Hafele. Whether an Island, L-Shape, U-Shape, or Parallel kitchen, every cabinet is manufactured to millimeter precision.',
    coverImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80',
    ],
    styles: [
      {
        name: 'Island Kitchen',
        desc: 'Spacious central workstation with breakfast counter, integrated hob, and hanging pendant lights.',
        image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'L-Shaped Modular Kitchen',
        desc: 'Ideal for open-plan contemporary apartments, maximizing the golden kitchen work triangle.',
        image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Parallel / Galley Kitchen',
        desc: 'Dual opposite countertops providing the most efficient prep and wet-cleaning separation.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'U-Shaped Kitchen',
        desc: 'Maximum counter space and floor-to-ceiling pantry pull-outs for avid cooking families.',
        image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=600&q=80',
      },
    ],
    materialsAndFinishes: [
      'Marine Grade IS 710 Boiling Waterproof (BWP) Plywood',
      'Anti-Scratch High-Gloss & Matte Acrylic Shutter Finishes',
      'Lacquered Toughened Glass with Anodized Aluminum Edge Profile',
      'PU (Polyurethane) Seamless High-Gloss Metallic Coat',
      'Quartz Countertops with Zero Porosity & Stain Resistance',
    ],
    hardwareBrands: ['Blum (Austria)', 'Hafele (Germany)', 'Hettich (Germany)', 'Kesseböhmer'],
    keyFeatures: [
      'Corner magic carousels & S-carousels for zero dead space',
      'Hydraulic bi-fold overhead lift-up shutters with soft-close motion',
      'Deep tandem drawer boxes tested for 50,000 pull-push cycles (60kg load)',
      'Integrated under-cabinet LED sensor lighting and cutlery organizers',
    ],
    faqs: [
      { q: 'What plywood is used for the kitchen cabinets?', a: 'We strictly use 100% boiling-waterproof (BWP IS:710) Gurjan/hardwood marine plywood for all base and wet-area carcass cabinets to guarantee zero warping or swelling.' },
      { q: 'How long does modular kitchen installation take?', a: 'Since components are pre-machined with German CNC precision in our factory, on-site dry installation at your home takes merely 3 to 5 working days.' },
      { q: 'What is the warranty coverage?', a: 'Every modular kitchen comes with an authentic 10-year comprehensive warranty on plywood carcass and lifetime mechanical warranty on hardware hinges and channels.' },
    ],
  },
  {
    id: 'prod-bedroom',
    slug: 'bedroom',
    category: 'bedroom',
    name: 'Bedroom Interiors',
    title: 'Serene & Ergonomic Bedroom Spaces',
    tagline: 'Custom Wardrobes, Bedsteads, Dressing Consoles & Architectural Bed-Backs',
    shortDesc: 'Floor-to-ceiling sliding wardrobes, ambient headboards, and space-saving storage designed for restful living.',
    overview: 'The bedroom is your personal sanctuary. Livinto creates bespoke master and guest bedrooms that blend acoustic tranquility with intelligent storage: floor-to-ceiling sliding wardrobes, walk-in closets with sensor illumination, custom bedframes with hydraulic lift storage, and designer dressing consoles.',
    coverImage: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
    ],
    styles: [
      {
        name: 'Master Bedroom Suite',
        desc: 'King-size hydraulic storage bed, fluted acoustic paneling, and an adjoining walk-in closet.',
        image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Minimalist Modern Bedroom',
        desc: 'Clean lines, floating side tables, and handleless touch-to-open wardrobe shutters.',
        image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Floor-to-Ceiling Wardrobes',
        desc: 'Heavy-duty soft-close sliding doors with smoked glass, internal watch drawers, and LED hanger rails.',
        image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=600&q=80',
      },
    ],
    materialsAndFinishes: [
      'Commercial MR / BWR Grade Engineered Hardwood Ply',
      'Textured Fabric Laminates and Suede Leather Touch Finishes',
      'Smoked Glass and Tinted Mirror Profiles',
      'Acoustic Charcoal Paneling and Natural Oak Veneers',
    ],
    hardwareBrands: ['Hettich SlideLine', 'Hafele Slido', 'Blum Tip-On'],
    keyFeatures: [
      'Padded headboards with built-in reading spotlights & USB ports',
      'Hydraulic gas-lift bedframes with dust-sealed storage compartments',
      'Concealed vanity dressing mirrors with warm 3000K ring illumination',
      'Dedicated jewelry, belt, and accessory organizer trays',
    ],
    faqs: [
      { q: 'Can wardrobes be built up to the ceiling height?', a: 'Yes! Our modular wardrobes are custom-built to match your exact room ceiling height up to 10 feet, preventing any dusty top gap.' },
      { q: 'Do sliding wardrobes derail over time?', a: 'We exclusively use top-hung heavy-duty aluminum track systems with anti-jump safety stoppers and soft-close dampers guaranteed for over 15 years.' },
    ],
  },
  {
    id: 'prod-living',
    slug: 'living-room',
    category: 'living-room',
    name: 'Living Room Interiors',
    title: 'Statement Living Spaces & TV Entertainment Walls',
    tagline: 'Architectural Wall Panelling, Floating Consoles, False Ceiling & Ambient Lighting',
    shortDesc: 'A captivating first impression with fluted panels, marble veneer backdrops, and acoustic false ceilings.',
    overview: 'Your living room is where your family gathers and guests are received. Livinto designs striking entertainment walls with floating storage, hidden cable management, fluted louvers, integrated mood lighting, and modern false ceiling layouts.',
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    ],
    styles: [
      {
        name: 'Contemporary TV Entertainment Unit',
        desc: 'Fluted wood panelling, marble veneer feature wall, and floating console with concealed wiring.',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Open-Concept Living & Lounge',
        desc: 'Seamless partition dividers, display vitrines with warm spot lighting, and geometric false ceilings.',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
      },
    ],
    materialsAndFinishes: [
      'Italian Statuario Marble Veneer Sheets',
      'Fluted WPC & Charcoal Acoustic Louvers',
      'PU Matte Finish & Natural Teak Wood Veneers',
      'Toughened Tinted Glass Display Shelving',
    ],
    hardwareBrands: ['Hafele Loox LED', 'Hettich Push-to-Open', 'Blum Soft-Close'],
    keyFeatures: [
      '100% concealed wire conduits for soundbars, gaming consoles, and streaming units',
      'Dimmable dual-color temperature LED cove lighting for cinematic ambience',
      'Display vitrines with UV-bonded tempered glass and magnetic closures',
    ],
    faqs: [
      { q: 'Can you hide all television and soundbar wires?', a: 'Yes! Every TV unit features engineered concealed raceways behind the panelling so no wires or power strips are ever visible.' },
    ],
  },
  {
    id: 'prod-dining',
    slug: 'dining-room',
    category: 'dining-room',
    name: 'Dining Room Interiors',
    title: 'Elegant Dining Units & Crockery Consoles',
    tagline: 'Custom Dining Tables, Display Consoles, Ambient Lighting & Bar Lounges',
    shortDesc: 'Curated dining areas with glass crockery cabinets, serving counters, and warm intimate lighting.',
    overview: 'From family breakfasts to celebratory dinners, our dining room designs combine functionality and sophistication. We create built-in crockery units with internal glassware illumination, compact bar counters, and dining tables finished in sintered stone or solid wood.',
    coverImage: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    ],
    styles: [
      {
        name: 'Modern Crockery Display Unit',
        desc: 'Clear glass shutters, mirrored backings, and warm internal spotlights to exhibit fine dinnerware.',
        image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Dining Console & Bar Counter',
        desc: 'Integrated wine rack, stemware hanging rail, and quartz serving ledge for entertaining.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      },
    ],
    materialsAndFinishes: ['BWR Grade Hardwood Plywood', 'Sintered Stone Countertops', 'Fluted Glass Doors'],
    hardwareBrands: ['Hafele Hinges', 'Blum Soft-Close Drawers'],
    keyFeatures: ['Fitted stemware racks and bottle racks', 'Soft-touch velvet-lined cutlery drawer inserts'],
    faqs: [
      { q: 'Can the crockery unit match the kitchen finish?', a: 'Yes! We coordinate color palettes and laminate/acrylic textures between open kitchen and dining spaces for visual continuity.' },
    ],
  },
  {
    id: 'prod-decorative',
    slug: 'decorative-units',
    category: 'decorative-units',
    name: 'Decorative Units & Mandir',
    title: 'Artisan Decorative Units & Foyer Enhancements',
    tagline: 'Foyer Shoe Storage, Laser-Cut Partition Screens, Pooja Units & Display Niches',
    shortDesc: 'Bespoke entryways, spiritual pooja sanctuaries, and custom room dividers that elevate home aesthetics.',
    overview: 'Decorative accents define the character of a home. We design welcoming foyer consoles with concealed shoe storage and seating, CNC-cut jali partition screens that separate spaces without blocking light, and sacred pooja mandir units with brass inlays and LED backlighting.',
    coverImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    ],
    styles: [
      {
        name: 'Grand Foyer Console & Seating',
        desc: 'Full-length mirror, upholstered shoe bench, and concealed storage with louvred ventilation.',
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Sacred Pooja Room Unit',
        desc: 'Intricate CNC backlit jaali, brass bell hooks, storage drawers for prayer essentials, and warm illumination.',
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80',
      },
    ],
    materialsAndFinishes: ['Teak Wood Beading', 'Corian Backlit Panels', 'Laser Cut Metal Screens'],
    hardwareBrands: ['Hafele Hinges', 'Hettich Hydraulic Hinges'],
    keyFeatures: ['Ventilated louvers for shoe storage', 'Warm spiritual glow lighting in mandir cabinets'],
    faqs: [
      { q: 'Are pooja units customizable to Vastu guidelines?', a: 'Yes! Our design consultants ensure East/North-East orientation, appropriate counter heights, and sacred proportions.' },
    ],
  },
  {
    id: 'prod-kids',
    slug: 'kids-room',
    category: 'kids-room',
    name: 'Kids Room Interiors',
    title: 'Vibrant, Safe & Adaptable Kids Spaces',
    tagline: 'Bunk Beds, Ergonomic Study Desks, Play Storage & Anti-Pinch Safety Features',
    shortDesc: 'Designed to grow with your child: scratch-resistant finishes, safe rounded corners, and organized study zones.',
    overview: 'A child’s room must inspire creativity, focus during study, and peaceful sleep. Livinto crafts joyful children’s rooms equipped with modular study desks with cable grommets, playful bunk or trundle beds, open bookshelf displays, and child-safe hardware with rounded edges.',
    coverImage: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
    ],
    styles: [
      {
        name: 'Study & Sleep Pod System',
        desc: 'Integrated elevated bed with study workstation, pin-up cork board, and book shelving underneath.',
        image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=80',
      },
    ],
    materialsAndFinishes: ['Low-VOC Child-Safe Laminates', 'Anti-Bacterial Surface Films', 'Soft Foam Edge Banding'],
    hardwareBrands: ['Blum Soft-Close (Anti-Pinch)'],
    keyFeatures: ['Rounded corners on all tabletops and beds', 'Easy-to-clean scratch and marker-resistant laminate surfaces'],
    faqs: [
      { q: 'Is the material safe for small children?', a: 'Yes, we exclusively use E1/E0 certified low-emission non-toxic boards with zero harmful formaldehyde odors.' },
    ],
  },
];

export const PACKAGE_OFFERS_DATA: PackageOffer[] = [
  {
    id: 'pack-essential-2bhk',
    slug: 'essential',
    name: 'Everything ESSENTIAL',
    subtitle: 'Essential Woodwork for 2BHK',
    originalPrice: '8.85',
    offerPrice: '6.37',
    savings: 'Save ₹2.48 Lac',
    idealFor: 'Compact 2BHK Apartments (650 - 950 Sq. Ft.)',
    tag: 'Best Value Package',
    coverImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    inclusions: [
      'Modular Kitchen in Boiling Waterproof (BWP) Marine Ply with Hettich Soft-Close',
      'Master Bedroom: 3-Door Hinged Wardrobe (7ft x 4ft) with Dressing Mirror',
      'Guest Bedroom: 2-Door Wardrobe (7ft x 3ft) with Internal Drawers',
      'Living Room: Wall-Mounted Floating TV Unit with Cable Concealer',
      'Dining Room: 4-Seater Dining Table Framework with Laminate Finish',
      '100% German Hardware & 10-Year Warranty Card Included',
    ],
    specifications: [
      { label: 'Carcass Material', value: 'BWP 710 Grade Hardwood Plywood' },
      { label: 'Shutter Finish', value: '0.8mm Matte / Gloss Laminate' },
      { label: 'Hardware', value: 'Hettich / Hafele Soft-Close Hinges' },
      { label: 'Timeline', value: '40 Working Days Delivery' },
    ],
  },
  {
    id: 'pack-eleganza-3bhk',
    slug: 'eleganza',
    name: 'ELEGANZA',
    subtitle: 'Detailed Woodwork for 3BHK',
    originalPrice: '15.84',
    offerPrice: '11.41',
    savings: 'Save ₹4.43 Lac',
    idealFor: 'Spacious 3BHK Homes (1,100 - 1,600 Sq. Ft.)',
    tag: 'Most Popular Choice',
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    inclusions: [
      'L-Shape / Parallel Modular Kitchen with High-Gloss Acrylic Finish & Tall Pantry Unit',
      'Master Bedroom: 8ft Floor-to-Ceiling Sliding Wardrobe with Smoked Glass Panel',
      'Bedroom 2: 3-Door Wardrobe with Integrated Study Desk & Bookshelf',
      'Bedroom 3: 3-Door Wardrobe with Full-Length Dressing Unit',
      'Living Room: Statement TV Unit with Fluted Wood Panel Accent',
      'Dining Room: 6ft Wall-Mounted Crockery Console with Glass Vitrine',
      'Entrance Foyer: Decorative Shoe Storage Console with Seat Cushion',
    ],
    specifications: [
      { label: 'Carcass Material', value: 'BWP 710 Marine Ply + BWR Plywood' },
      { label: 'Shutter Finish', value: '1mm Anti-Fingerprint Acrylic & Suede Laminates' },
      { label: 'Hardware', value: 'Blum Tandembox Drawers + Hafele Hinges' },
      { label: 'Warranty', value: '10 Years Comprehensive + Lifetime Hardware' },
    ],
  },
  {
    id: 'pack-eleganza-plus-3bhk',
    slug: 'eleganza-plus',
    name: 'ELEGANZA Plus',
    subtitle: 'Woodwork & Beautifications for 3BHK',
    originalPrice: '24.03',
    offerPrice: '16.82',
    savings: 'Save ₹7.21 Lac',
    idealFor: 'Premium Luxury 3BHK / 4BHK (1,500 - 2,200 Sq. Ft.)',
    tag: 'Turnkey Luxury',
    coverImage: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
    inclusions: [
      'Kitchen Island / Open Kitchen with Sintered Stone Counter & Blum Aventos Lift-Ups',
      'Gypsum False Ceiling across Living, Dining & 3 Bedrooms with Philips COB Lights',
      'Master Bedroom: Walk-In Wardrobe with Tinted Aluminum Profiles & Sensor LED Strip',
      'Bedrooms 2 & 3: Floor-to-Ceiling Lacquered Glass Sliding Wardrobes',
      'Architectural Fluted Charcoal Paneling & Italian Statuario Marble Accent Wall',
      'Dining Room: Bar Unit with Wine Glass Holder & Hanging Pendant Luminaire',
      'Full Home Paint Repaint with Premium Asian Paints Royale Luxury Emulsion',
    ],
    specifications: [
      { label: 'Finishes', value: 'Imported Acrylic, Fluted Wood, Lacquered Glass' },
      { label: 'Ceiling & Electrical', value: 'Saint-Gobain Gypsum + Philips LED Coves' },
      { label: 'Hardware', value: '100% Blum (Austria) Heavy-Duty Systems' },
      { label: 'Execution', value: 'Dedicated Project Manager on Site' },
    ],
  },
];

export const DESIGN_AND_BUILD_STEPS = [
  {
    step: '01',
    title: 'Consultation & Discovery',
    subtitle: 'Meet our interior designer at our showroom or virtually',
    description: 'We discuss your floor plan, family lifestyle, storage necessities, aesthetic taste (Scandinavian, Minimalist, Classic Contemporary), and budget.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
  },
  {
    step: '02',
    title: 'Space Planning & 3D Visualization',
    subtitle: 'Photorealistic 3D renders before a single nail is hammered',
    description: 'Our certified interior designers create millimeter-accurate 3D walkthroughs showing exact laminate colors, lighting temperatures, and furniture layouts for your approval.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80',
  },
  {
    step: '03',
    title: 'Material & Hardware Selection',
    subtitle: 'Touch and feel finishes at our experiential showrooms',
    description: 'Finalize your choice of BWP marine plywood, high-gloss acrylics, sintered stones, and Blum/Hafele soft-close systems with transparent quotation breakdowns.',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80',
  },
  {
    step: '04',
    title: 'Robotic CNC Factory Production',
    subtitle: 'Mechanized manufacturing at our 350,000 sq ft facility',
    description: 'No noisy, dusty carpentry at your home. Panels are precision cut, drilled with 32mm system holes, and edge-banded on German Homag machines under controlled conditions.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
  },
  {
    step: '05',
    title: 'Material Delivery & Assembly',
    subtitle: 'Flat-packed delivery in padded protective wrapping',
    description: 'Pre-machined modules arrive at your home and are assembled cleanly by trained company technicians in just 10 to 14 days without disturbance to neighbors.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
  },
  {
    step: '06',
    title: 'Quality Audit & Handover in 40 Days',
    subtitle: '150-point inspection and 10-Year Warranty Card',
    description: 'Our quality assurance team audits alignment, drawer gliding, edge sealing, and lighting before handing over keys and issuing your 10-Year Warranty certificate.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80',
  },
];

export const SHOWROOMS_DATA: ShowroomLocation[] = [
  {
    id: 'loc-bengaluru-hsr',
    city: 'Bengaluru',
    state: 'Karnataka',
    area: 'HSR Layout',
    branchName: 'HSR Layout Flagship Showroom',
    address: 'No. 428, 27th Main Road, Sector 1, HSR Layout, Bengaluru, Karnataka 560102',
    landmark: 'Opposite NIFT Campus, Near Agara Flyover',
    phone: '+91 97447 56666',
    email: 'hsr.blr@livintointeriors.com',
    hours: 'Mon - Sun: 9:30 AM - 8:00 PM',
    showroomSize: '6,500 Sq. Ft.',
    features: ['Live Working Modular Kitchens', 'Walk-in Wardrobe Experience Room', 'Free Valet Parking', 'VR 3D Walkthrough Suite'],
    displaySuites: ['Island Acrylic Kitchen', 'Eleganza Master Bedroom', 'Fluted TV Console', 'Bar Lounge'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'loc-bengaluru-whitefield',
    city: 'Bengaluru',
    state: 'Karnataka',
    area: 'Whitefield',
    branchName: 'Whitefield Prestige Lounge',
    address: 'Level 2, Forum Shantiniketan Commercial Wing, Whitefield Main Road, Bengaluru 560066',
    landmark: 'Adjacent to ITPL Main Gate',
    phone: '+91 94976 02222',
    email: 'whitefield@livintointeriors.com',
    hours: 'Mon - Sun: 10:00 AM - 8:30 PM',
    showroomSize: '5,000 Sq. Ft.',
    features: ['Apartment Interior Packages Showcase', 'Material Swatch Library', 'Dedicated Design Consultants'],
    displaySuites: ['Parallel Kitchen', 'Compact 2BHK Layout', 'Pooja Unit'],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'loc-delhi-ncr',
    city: 'Delhi NCR',
    state: 'Delhi',
    area: 'South Extension',
    branchName: 'South Extension Experiential Showroom',
    address: 'D-24, Main Ring Road, South Extension Part II, New Delhi 110049',
    landmark: 'Near AIIMS & Metro Gate 2',
    phone: '+91 81119 68888',
    email: 'delhi@livintointeriors.com',
    hours: 'Mon - Sun: 10:00 AM - 8:00 PM',
    showroomSize: '7,000 Sq. Ft.',
    features: ['Luxury Penthouse Suite Display', 'German Hardware Experience Bar', 'Valet Parking'],
    displaySuites: ['Luxury Sintered Stone Kitchen', 'Royal Master Suite', 'Acoustic Theatre Living Room'],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'loc-gurugram',
    city: 'Gurugram',
    state: 'Haryana',
    area: 'Golf Course Extension Road',
    branchName: 'Gurugram M3M Experiential Studio',
    address: 'Shop 104-107, M3M Corner Walk, Sector 74, Golf Course Extension Road, Gurugram 122004',
    landmark: 'Near St. Xavier’s High School',
    phone: '+91 81119 68888',
    email: 'gurgaon@livintointeriors.com',
    hours: 'Mon - Sun: 10:00 AM - 8:00 PM',
    showroomSize: '5,500 Sq. Ft.',
    features: ['Villa Interior Models', 'Floor-to-Ceiling Wardrobe Gallery', 'Kids Study Hub'],
    displaySuites: ['U-Shaped Island Kitchen', 'Master Walk-In Closet', 'Designer Foyer'],
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'loc-noida',
    city: 'Noida',
    state: 'Uttar Pradesh',
    area: 'Sector 4',
    branchName: 'Noida Design Center',
    address: 'C-12, Sector 4, Noida, Uttar Pradesh 201301',
    landmark: 'Near Sector 16 Metro Station',
    phone: '+91 81119 78888',
    email: 'noida@livintointeriors.com',
    hours: 'Mon - Sun: 9:30 AM - 7:30 PM',
    showroomSize: '4,800 Sq. Ft.',
    features: ['High-Rise Apartment Specialists', 'Budget Estimate Desk', 'Laminate vs Acrylic Samples'],
    displaySuites: ['L-Shape Kitchen', 'Eleganza 3BHK Suite', 'Mandir Unit'],
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'loc-mumbai',
    city: 'Mumbai',
    state: 'Maharashtra',
    area: 'Andheri East',
    branchName: 'Andheri East Central Showroom',
    address: 'Ground Floor, Akruti Star, Central Road, MIDC, Andheri East, Mumbai 400093',
    landmark: 'Opposite SEEPZ Gate No. 1',
    phone: '+91 90722 45555',
    email: 'mumbai@livintointeriors.com',
    hours: 'Mon - Sun: 9:30 AM - 8:00 PM',
    showroomSize: '6,200 Sq. Ft.',
    features: ['Space Optimization for Mumbai Flats', 'Sliding Wardrobes Zone', 'Valet Parking'],
    displaySuites: ['Compact Island Kitchen', 'Concealed Hydraulic Bed', 'Partition Screen'],
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'loc-pune',
    city: 'Pune',
    state: 'Maharashtra',
    area: 'Hinjawadi',
    branchName: 'Hinjawadi IT Hub Showroom',
    address: 'Phase 1, High Street Mall, Hinjawadi, Pune, Maharashtra 411057',
    landmark: 'Near Cognizant Campus',
    phone: '+91 93834 53333',
    email: 'pune@livintointeriors.com',
    hours: 'Mon - Sun: 9:30 AM - 8:00 PM',
    showroomSize: '5,000 Sq. Ft.',
    features: ['Tech Professional Home Interior Packages', 'Fast-Track Handover Desk'],
    displaySuites: ['Parallel Modular Kitchen', 'Master Bedroom Set', 'Dining Console'],
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'loc-hyderabad',
    city: 'Hyderabad',
    state: 'Telangana',
    area: 'Banjara Hills',
    branchName: 'Banjara Hills Experiential Center',
    address: 'Road No. 12, Banjara Hills, Hyderabad, Telangana 500034',
    landmark: 'Near City Centre Mall',
    phone: '+91 94950 87777',
    email: 'hyderabad@livintointeriors.com',
    hours: 'Mon - Sun: 10:00 AM - 8:00 PM',
    showroomSize: '7,500 Sq. Ft.',
    features: ['Luxury Villa Interiors Suite', 'Blum Dynamic Space Certified', 'Valet Parking'],
    displaySuites: ['Grand Acrylic Island Kitchen', 'Walk-in Closet', 'Home Theatre Wall'],
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'loc-chennai',
    city: 'Chennai',
    state: 'Tamil Nadu',
    area: 'Anna Nagar',
    branchName: 'Anna Nagar Design Studio',
    address: 'Plot 104, 2nd Avenue, Anna Nagar, Chennai, Tamil Nadu 600040',
    landmark: 'Near Roundtana Signal',
    phone: '+91 75590 03333',
    email: 'chennai@livintointeriors.com',
    hours: 'Mon - Sun: 9:30 AM - 8:00 PM',
    showroomSize: '5,800 Sq. Ft.',
    features: ['Traditional & Contemporary Fusion Models', 'Crockery & Pooja Units Display'],
    displaySuites: ['U-Shaped Modular Kitchen', 'Teak Accent Bedroom', 'Pooja Mandir'],
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'loc-kochi',
    city: 'Kochi',
    state: 'Kerala',
    area: 'Vyttila',
    branchName: 'Vyttila Central Showroom',
    address: 'NH 66 Bypass, Near Vyttila Mobility Hub, Kochi, Kerala 682019',
    landmark: 'Adjacent to Metro Station',
    phone: '+91 95672 31111',
    email: 'kochi@livintointeriors.com',
    hours: 'Mon - Sun: 9:30 AM - 8:00 PM',
    showroomSize: '8,000 Sq. Ft.',
    features: ['Original Kerala Showroom', 'Extensive Woodcraft Showcase', 'Architectural Consultation'],
    displaySuites: ['Full 3BHK Home Replica', 'Modern Kitchen with Breakfast Bar', 'Foyer Design'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
];

export const CLIENT_TESTIMONIALS_DATA: ClientReview[] = [
  {
    id: 'rev-1',
    clientName: 'Arjun & Deepa Nair',
    city: 'Bengaluru (HSR Layout)',
    propertyType: '3BHK at Prestige Falcon City',
    packageTaken: 'Eleganza Plus Package',
    rating: 5,
    date: 'August 2026',
    review: 'From initial 3D drawings to final handover on the 38th working day, Livinto was professional and transparent. The modular kitchen with Blum tandem drawers is an absolute delight to cook in. Zero hidden costs.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    projectPhoto: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'rev-2',
    clientName: 'Vikram & Sunita Malhotra',
    city: 'Gurugram (Golf Course Extn)',
    propertyType: '4BHK at DLF The Crest',
    packageTaken: 'Custom Luxury Turnkey',
    rating: 5,
    date: 'September 2026',
    review: 'We wanted a clean Scandinavian aesthetic without dusty on-site carpentry. Because everything was manufactured in their German-equipped factory, installation took just 9 days! Flawless edge-banding and finish.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    projectPhoto: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'rev-3',
    clientName: 'Karthik & Sneha Iyer',
    city: 'Mumbai (Andheri East)',
    propertyType: '2BHK at Oberoi Splendor',
    packageTaken: 'Everything Essential Package',
    rating: 5,
    date: 'July 2026',
    review: 'Living in Mumbai means every square inch counts. Livinto’s design consultant created a hydraulic bed, concealed shoe cabinet, and L-shaped kitchen that doubled our storage without feeling cramped.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    projectPhoto: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'rev-4',
    clientName: 'Dr. Radhakrishnan & Family',
    city: 'Hyderabad (Gachibowli)',
    propertyType: 'Independent Villa at Jubilee Hills',
    packageTaken: 'Villa Royale Full Furnishing',
    rating: 5,
    date: 'August 2026',
    review: 'Our 4,500 sq ft villa needed custom woodwork across 5 bedrooms, kitchen island, and a bespoke pooja mandir. The 10-year warranty gives total peace of mind. Excellent project management by Livinto team.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    projectPhoto: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
  },
];

export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    category: 'kitchen',
    title: 'Island Acrylic Kitchen in Pearl White & Champagne Gold',
    desc: 'BWP marine plywood core with quartz countertops and soft-close pullout pantry.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-2',
    category: 'bedroom',
    title: 'Minimalist Master Bedroom with Sliding Tinted Glass Wardrobe',
    desc: 'Floor-to-ceiling wardrobe with integrated sensor illumination and hydraulic storage bed.',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-3',
    category: 'living',
    title: 'Contemporary TV Entertainment Wall with Charcoal Louvers',
    desc: 'Fluted acoustic paneling with floating console and hidden wire conduits.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-4',
    category: 'dining',
    title: 'Modern Dining Space with Built-In Glass Crockery Console',
    desc: 'Integrated stemware holders, warm backlighting, and 6-seater dining table.',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-5',
    category: 'decorative',
    title: 'Architectural Foyer with Mirror Console & Bench',
    desc: 'Concealed shoe rack with cushioned bench and brass accent mirrors.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-6',
    category: 'kids',
    title: 'Dual Study & Bunk Bed System for Sibling Bedroom',
    desc: 'Ergonomic study desks with rounded corners and non-toxic scratch-resistant finishes.',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-7',
    category: 'kitchen',
    title: 'Parallel Modular Kitchen in Suede Slate Grey',
    desc: 'Optimum galley layout with corner carousels and anti-fingerprint acrylic finish.',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-8',
    category: 'wardrobes',
    title: 'Walk-In Wardrobe Suite with Island Jewelry Drawer',
    desc: 'Full-height smoked glass sliding wardrobes with ambient LED vertical rails.',
    image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-9',
    category: 'living',
    title: 'Open Living & Foyer with Laser-Cut CNC Partition',
    desc: 'Geometric room divider preserving daylight while separating dining and living zones.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
  },
];

export const BLOG_POSTS_DATA: BlogItem[] = [
  {
    id: 'blog-1',
    slug: 'factory-manufactured-vs-carpentry',
    title: 'Why Factory-Manufactured Modular Interiors Offer Superior Durability Over Traditional Carpentry',
    category: 'Design Trends',
    author: 'Sunil Thomas, Lead Industrial Designer',
    date: 'October 01, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    summary: 'Discover how computer-controlled German edge-banding, dust-free pressing, and calibrated 32mm system boring eliminate the bubbling, warping, and uneven gaps common in manual carpentry.',
    content: [
      'For decades, homeowners endured months of sawdust, loud hammering, and unpredictable carpentry costs inside their apartments. Traditional manual carpentry relies heavily on hand-glued laminates and manual trimming, leading to moisture seepage and peeling edges within a few years.',
      'In contrast, factory-manufactured modular interiors utilize polyurethane hot-melt adhesive edge-banding applied at 200°C under 6 bars of mechanical pressure. This forms a hermetically sealed barrier that prevents moisture penetration even in humid coastal cities.',
      'Furthermore, CNC beam saws cut boards to a tolerance of 0.1mm, ensuring doors align with laser-straight margins and Blum/Hafele soft-close hinges operate smoothly for decades.',
    ],
    tags: ['Modular Furniture', 'Plywood Quality', 'Factory Precision'],
  },
  {
    id: 'blog-2',
    slug: 'how-to-plan-3bhk-interior-budget',
    title: 'How to Plan Your 3BHK Home Interior Budget in India: A Realistic 2026 Guide',
    category: 'Budget Guide',
    author: 'Meera Namboodiri, Senior Interior Architect',
    date: 'September 24, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    summary: 'A transparent line-by-line financial breakdown for 3BHK woodwork, modular kitchen, electrical lighting, and false ceiling costs without unexpected overruns.',
    content: [
      'Furnishing a newly handed-over 3BHK apartment typically requires balancing core necessities (kitchen, wardrobes, storage) with aesthetic elements (false ceilings, wall paneling, designer lighting).',
      'At Livinto, our standardized Eleganza package bundles 100% of essential woodwork—from full acrylic kitchen to 3 custom wardrobes and TV entertainment units—starting at ₹11.41 Lac with zero hidden delivery or assembly charges.',
      'We advise homeowners to allocate 60% of budget to heavy-use functional woodwork (kitchen and master wardrobes), 25% to living area focal points, and 15% to atmospheric lighting and curtains.',
    ],
    tags: ['Budget Planning', '3BHK Interiors', 'Package Pricing'],
  },
  {
    id: 'blog-3',
    slug: 'sliding-wardrobe-vs-hinged-wardrobe',
    title: 'Sliding Wardrobes vs Hinged Wardrobes: Which One Suits Your Bedroom?',
    category: 'Bedroom',
    author: 'Rohan Deshmukh, Space Planner',
    date: 'September 15, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
    summary: 'Analyze walking clearances, accessibility, interior lighting, and visual sleekness to choose the ideal wardrobe mechanism for your master or guest bedroom.',
    content: [
      'Sliding wardrobes are the quintessential solution for urban apartments where clearance between the bed and closet is under 3 feet. Because the shutters slide laterally on heavy-duty tracks, they consume zero floor swing space.',
      'Hinged wardrobes, on the other hand, provide 100% simultaneous visibility of your entire wardrobe contents and allow hooks or accessory organizers on the inside faces of doors.',
      'Our recommendation: Choose sliding wardrobes with soft-close dampening for bedrooms with compact clearances, and elegant floor-to-ceiling hinged doors for spacious master dressing suites.',
    ],
    tags: ['Wardrobes', 'Bedroom Design', 'Space Optimization'],
  },
  {
    id: 'blog-4',
    slug: 'small-apartment-maximizing-carpet-area',
    title: '10 Clever Ways to Maximize Low Carpet Area in Metropolitan Apartments',
    category: 'Design Trends',
    author: 'Anjali Verma, Principal Designer',
    date: 'September 08, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    summary: 'Turn compact 2BHK and 3BHK flats into breezy, clutter-free sanctuaries using hydraulic furniture, vertical storage, and visual glass dividers.',
    content: [
      'In cities like Mumbai, Bengaluru, and Delhi NCR, high property costs mean homeowners must utilize every cubic foot of volume rather than just square feet of floor.',
      'Wall-hung TV consoles eliminate floor-standing clutter, while hydraulic gas-lift bedframes provide cavernous storage for winter blankets and suitcases without extra cupboards.',
      'Utilizing fluted glass or slimline metal partitions allows natural sunlight to filter between the foyer, dining, and living zones, creating an illusion of expansive open-plan luxury.',
    ],
    tags: ['Small Spaces', 'Space Saving', 'Urban Living'],
  },
];

export const GENERAL_FAQS = [
  {
    q: 'How does Livinto achieve project completion in 40 working days?',
    a: 'Because our 350,000 sq ft mechanized factory operates state-of-the-art German CNC machinery, 90% of your furniture is cut, drilled, edge-banded, and quality-tested before arriving at your apartment. On-site work is strictly dry assembly, eliminating delays caused by manual labor, weather, or contractor absenteeism.',
  },
  {
    q: 'What is covered under the 10-Year Comprehensive Warranty?',
    a: 'Our 10-Year Warranty covers the structural integrity of all BWP and BWR plywood carcass units against delamination, termite attacks, and manufacturing defects. Furthermore, all Blum and Hafele hinges, drawer runners, and lift-up mechanisms carry lifetime functional replacement warranties.',
  },
  {
    q: 'Can we customize dimensions and laminate colors, or are packages fixed?',
    a: 'Every single piece of furniture at Livinto is 100% customized to the exact millimeter dimensions of your floor plan. Our package offers are transparent price baselines that include customized layouts, colors, and hardware tailored to your personal aesthetic.',
  },
  {
    q: 'What quality of plywood and core materials do you use?',
    a: 'We strictly use IS 710 certified Boiling Waterproof (BWP) marine plywood for all modular kitchens and wet areas, and IS 303 Boiling Water Resistant (BWR) engineered hardwood ply for wardrobes and living consoles. We never substitute particle board in structural carcasses.',
  },
  {
    q: 'Do you offer flexible zero-cost EMI payment plans?',
    a: 'Yes! We have official partnerships with HDFC Bank, ICICI Bank, Axis Bank, and Bajaj Finserv to provide convenient 6, 9, and 12-month zero-cost EMI plans on all comprehensive home interior packages.',
  },
  {
    q: 'Can I visit a showroom near me to touch and feel the materials?',
    a: 'Absolutely! We have 29 company-owned direct experiential showrooms across Bengaluru, Delhi NCR, Gurugram, Noida, Mumbai, Pune, Hyderabad, Chennai, Kochi, Coimbatore, Ahmedabad, and other major cities. Every showroom features full-scale live working kitchens and bedroom suites.',
  },
];

// Raozsite Website Catalog Entry for Livinto Home Interiors
export const LIVINTO_WEBSITE: BusinessWebsite = {
  id: 'site-livinto-67',
  slug: '67-livinto-interiors',
  businessName: 'Livinto Home Interiors',
  category: 'interior_design',
  templateId: 'home_interiors_modular_portal',
  tagline: 'Custom-Made Contemporary Home Interiors & Modular Living',
  description:
    'A high-fidelity interior design website featuring customized home interiors, modular kitchens, bedrooms, living spaces, 40-day delivery timeline, 350,000 sq ft factory, 15+ city showrooms, and consultation booking.',
  ownerName: 'Livinto Home Interiors & Modular Infrastructure Pvt. Ltd.',
  phone: LIVINTO_CONFIG.helpline,
  whatsapp: LIVINTO_CONFIG.whatsapp,
  email: LIVINTO_CONFIG.email,
  address: 'No. 428, 27th Main Road, Sector 1, HSR Layout, Bengaluru, Karnataka 560102',
  city: 'Bengaluru',
  mapsUrl: 'https://maps.google.com/?q=HSR+Layout+Bengaluru+Livinto+Interiors',
  openingHours: LIVINTO_CONFIG.workingHours,
  primaryColor: '#814882',
  secondaryColor: '#C5A059',
  logoUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=200&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
  bookingType: 'consultation_quote',
  bookingCtaLabel: 'View Project',
  specialBadge: 'Project #67 · Premium Home Interiors & Execution',
  status: 'published',
  pricingPlanId: 'professional',
  amountPaid: 0,
  paymentStatus: 'paid',
  sections: [
    { id: 'top-bar', title: 'Showroom Cities & Call Desk Strip', isEnabled: true, order: 1 },
    { id: 'navbar', title: 'Main Navigation & Multi-Tier Dropdowns', isEnabled: true, order: 2 },
    { id: 'hero', title: 'Architectural Hero Carousel', isEnabled: true, order: 3 },
    { id: 'stats', title: 'Company Trust Metrics & Guarantees', isEnabled: true, order: 4 },
    { id: 'offers', title: 'Package Offers (Essential, Eleganza, Eleganza Plus)', isEnabled: true, order: 5 },
    { id: 'about', title: 'Contemporary Home Interior Designers Intro', isEnabled: true, order: 6 },
    { id: 'what-we-do', title: 'What We Do - 6 Core Living Categories', isEnabled: true, order: 7 },
    { id: 'process', title: 'Project Completion in 40 Working Days Stepper', isEnabled: true, order: 8 },
    { id: 'custom-made', title: 'Custom-Made Home Interiors Narrative', isEnabled: true, order: 9 },
    { id: 'testimonials', title: '16,000+ Satisfied Customers Slider & Video', isEnabled: true, order: 10 },
    { id: 'factory', title: '350,000 Sq Ft German Automated Factory', isEnabled: true, order: 11 },
    { id: 'gallery', title: 'Filterable Interior Design Gallery & Lightbox', isEnabled: true, order: 12 },
    { id: 'locations', title: 'Company Direct Showrooms Across 15+ Cities', isEnabled: true, order: 13 },
    { id: 'blogs', title: 'Latest Interior Design Insights & Guides', isEnabled: true, order: 14 },
    { id: 'faqs', title: 'Frequently Asked Questions & Warranty Info', isEnabled: true, order: 15 },
    { id: 'footer', title: 'Comprehensive Multi-Column Showrooms Footer', isEnabled: true, order: 16 },
  ],
  offers: [
    {
      id: 'offer-livinto-essential',
      title: 'Everything ESSENTIAL 2BHK Woodwork',
      description: 'Complete 2BHK modular kitchen, 2 custom wardrobes & TV console.',
      discountPercent: 28,
      couponCode: 'ESSENTIAL28',
      isActive: true,
    },
    {
      id: 'offer-livinto-eleganza',
      title: 'ELEGANZA 3BHK Detailed Woodwork',
      description: 'L-shape acrylic kitchen, 3 custom wardrobes, crockery unit & fluted TV wall.',
      discountPercent: 28,
      couponCode: 'ELEGANZA28',
      isActive: true,
    },
  ],
  gallery: [
    {
      id: 'gal-livinto-1',
      title: 'Island Acrylic Modular Kitchen',
      category: 'facilities',
      imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'gal-livinto-2',
      title: 'Contemporary TV Entertainment Lounge',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'gal-livinto-3',
      title: 'Master Bedroom with Sliding Wardrobes',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
    },
  ],
  items: [
    {
      id: 'item-kitchen-modular',
      name: 'Custom BWP Modular Kitchen',
      description: 'Boiling waterproof marine ply with Blum soft-close fittings and acrylic shutters.',
      price: 195000,
      category: 'Kitchen',
      isAvailable: true,
      isFeatured: true,
      badge: 'Popular',
    },
    {
      id: 'item-wardrobe-sliding',
      name: 'Floor-to-Ceiling Sliding Wardrobe (8x7 ft)',
      description: 'Heavy duty aluminum sliding tracks with anti-jump stoppers and internal drawer sets.',
      price: 85000,
      category: 'Bedroom',
      isAvailable: true,
      isFeatured: true,
      badge: 'Bestseller',
    },
    {
      id: 'item-living-tv-unit',
      name: 'Fluted Acoustic TV Entertainment Console',
      description: 'Wall panelling with floating console, quartz ledge and concealed raceways.',
      price: 55000,
      category: 'Living Room',
      isAvailable: true,
      isFeatured: true,
      badge: 'Trending',
    },
  ],
};

export const PROJECTS_SHOWCASE_DATA: ProjectShowcase[] = [
  {
    id: 'proj-1',
    title: 'Prestige Falcon City 3BHK Contemporary Interior',
    propertyType: '3BHK Apartment',
    designStyle: 'Contemporary Scandinavian',
    city: 'Bengaluru',
    areaSqFt: '1,820 Sq. Ft.',
    duration: '38 Days',
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'A complete contemporary interior overhaul featuring an island acrylic modular kitchen, fluted TV acoustic wall with floating marble console, and floor-to-ceiling sliding wardrobes in all 3 bedrooms.',
    highlights: ['Boiling Waterproof Acrylic Kitchen', 'Blum Soft-Close Hardware', 'Concealed LED Strip Lighting', 'Custom Hydraulic Bed'],
  },
  {
    id: 'proj-2',
    title: 'Oberoi Splendor 2BHK Space-Optimized Urban Home',
    propertyType: '2BHK Apartment',
    designStyle: 'Minimalist Japandi',
    city: 'Mumbai',
    areaSqFt: '1,150 Sq. Ft.',
    duration: '36 Days',
    coverImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Smart urban apartment design maximizing carpet area with dual-purpose living furniture, concealed foyer shoe seating, and compact parallel modular kitchen.',
    highlights: ['Compact Parallel Kitchen', 'Floor-to-Ceiling Wardrobes', 'Wall-Hung TV Console', 'Concealed Wire Raceways'],
  },
  {
    id: 'proj-3',
    title: 'DLF The Crest 4BHK Luxury Turnkey Residence',
    propertyType: '4BHK Luxury Villa',
    designStyle: 'Modern Neoclassical',
    city: 'Gurugram',
    areaSqFt: '3,800 Sq. Ft.',
    duration: '40 Days',
    coverImage: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Opulent home design with tinted profile glass wardrobes, quartz island with bar counter, imported veneer wall panelling, and customized study room.',
    highlights: ['Tinted Glass Walk-In Closet', 'Quartz Breakfast Island', 'Acoustic Theatre Panelling', 'Bespoke Pooja Mandir'],
  },
  {
    id: 'proj-4',
    title: 'Jubilee Hills 5BHK Independent Luxury Villa',
    propertyType: '5BHK Villa',
    designStyle: 'Contemporary Luxury',
    city: 'Hyderabad',
    areaSqFt: '4,500 Sq. Ft.',
    duration: '40 Days',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Turnkey villa execution encompassing high-gloss acrylic modular kitchen, walk-in closets in 4 bedrooms, double-height foyer panelling, and outdoor bar.',
    highlights: ['Double Height Wall Panelling', 'Walk-In Wardrobes', 'Island Quartz Kitchen', 'CNC Jali Temple Suite'],
  },
  {
    id: 'proj-5',
    title: 'Sobha City 3BHK Waterfront Suite',
    propertyType: '3BHK Apartment',
    designStyle: 'Coastal Contemporary',
    city: 'Kochi',
    areaSqFt: '2,100 Sq. Ft.',
    duration: '37 Days',
    coverImage: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Serene coastal home interior with marine ply cabinetry resistant to humidity, light oak wood tones, and integrated bar counter overlooking the river.',
    highlights: ['100% Boiling Waterproof Ply', 'Teak & Oak Veneer Accents', 'Stemware Crockery Unit', 'Smart Sensor Wardrobes'],
  },
];

export const CLIENT_REVIEWS_DATA = CLIENT_TESTIMONIALS_DATA;
export const BLOGS_DATA = BLOG_POSTS_DATA;
export const FAQS_DATA = GENERAL_FAQS;

