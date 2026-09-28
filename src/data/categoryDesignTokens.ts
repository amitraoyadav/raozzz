/**
 * Distinctive design tokens per business category:
 * Provides base colors, accents, font pairings, and image art-direction
 * to avoid generic pastel/SaaS templates.
 */

export interface CategoryToken {
  category: string;
  name: string;
  baseBg: string;           // Hero/Primary background
  surfaceBg: string;        // Card/Panel fill
  textColor: string;        // Primary readable text on base
  bodyTextColor: string;    // Body copy text
  accentColor: string;      // Key accent (used sparingly)
  secondaryAccent: string;  // Supporting highlight
  headlineFont: string;     // Display / Title typeface
  bodyFont: string;         // Clean functional typeface
  fontPairingLabel: string;
  imageDirection: string;
  taglineVibe: string;
}

export const CATEGORY_TOKENS: Record<string, CategoryToken> = {
  // 1. Café & Coffee Roasters
  cafe: {
    category: 'cafe',
    name: 'Café & Roastery',
    baseBg: '#3D2B1F',         // Espresso
    surfaceBg: '#FBF7F2',
    textColor: '#F5E6D3',      // Cream
    bodyTextColor: '#2B1E16',
    accentColor: '#C08552',    // Copper
    secondaryAccent: '#8C5D36',
    headlineFont: 'Fraunces, Georgia, serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Fraunces + Inter',
    imageDirection: 'Close-up steam/pour shots, roasted beans & artisanal sourdough',
    taglineVibe: 'Warm & Artisanal'
  },
  bakery: {
    category: 'bakery',
    name: 'Artisan Bakery & Cake Shop',
    baseBg: '#3D2B1F',         // Espresso base
    surfaceBg: '#FFFDF9',
    textColor: '#F5E6D3',      // Cream
    bodyTextColor: '#32231B',
    accentColor: '#C08552',    // Copper
    secondaryAccent: '#DDA15E',
    headlineFont: 'Fraunces, Georgia, serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Fraunces + Inter',
    imageDirection: 'Freshly baked sourdough, flour dusting, warm morning light',
    taglineVibe: 'Fresh Oven Aromas'
  },

  // 2. Sweet shop (mithai)
  sweets: {
    category: 'sweets',
    name: 'Mithai & Sweet Shop',
    baseBg: '#6B1E2E',         // Deep Maroon
    surfaceBg: '#FFFDF9',
    textColor: '#FFF8EE',      // Ivory
    bodyTextColor: '#3E101A',
    accentColor: '#D4A94E',    // Gold
    secondaryAccent: '#9A2B42',
    headlineFont: 'Playfair Display, serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Playfair Display + Inter',
    imageDirection: 'Overhead mithai gift box flat-lays, warm gold lighting, silver vark details',
    taglineVibe: 'Royal Shahi Heritage'
  },

  // 3. Dry cleaning & Laundry
  laundry: {
    category: 'laundry',
    name: 'Dry Cleaning & Laundry',
    baseBg: '#1F5F5B',         // Slate Teal
    surfaceBg: '#F9FBFB',
    textColor: '#FFFFFF',      // White
    bodyTextColor: '#153F3D',
    accentColor: '#EDE6D6',    // Sand
    secondaryAccent: '#2F8580',
    headlineFont: 'Space Grotesk, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Space Grotesk + Inter',
    imageDirection: 'Folded crisp linens, steam pressing flat-lays, eco garment care',
    taglineVibe: 'Crisp Linen Studio'
  },

  // 4. Mobile & Computer Repair
  repair: {
    category: 'repair',
    name: 'Mobile & Tablet Repair',
    baseBg: '#1A1D29',         // Graphite
    surfaceBg: '#FFFFFF',
    textColor: '#E4E7EC',      // Silver
    bodyTextColor: '#1A1D29',
    accentColor: '#3B82F6',    // Electric Blue
    secondaryAccent: '#94A3B8',
    headlineFont: 'Space Grotesk, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Space Grotesk + Inter',
    imageDirection: 'Device macro shots, precision screwdrivers, microscope chip repair',
    taglineVibe: 'Silicon Diagnostics'
  },
  computer: {
    category: 'computer',
    name: 'Laptop & PC Repair / Sales',
    baseBg: '#1A1D29',         // Graphite
    surfaceBg: '#FFFFFF',
    textColor: '#E4E7EC',      // Silver
    bodyTextColor: '#1A1D29',
    accentColor: '#3B82F6',    // Electric Blue
    secondaryAccent: '#60A5FA',
    headlineFont: 'Space Grotesk, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Space Grotesk + Inter',
    imageDirection: 'Chipset rework stations, clean desktop setups, thermal paste application',
    taglineVibe: 'Hardware Precision'
  },

  // 5. Restaurant / Dhaba
  restaurant: {
    category: 'restaurant',
    name: 'Restaurant & Dhaba',
    baseBg: '#A9432D',         // Terracotta
    surfaceBg: '#FFFDFB',
    textColor: '#FFF7ED',      // Warm Ivory
    bodyTextColor: '#241F1C',  // Charcoal
    accentColor: '#E0A526',    // Mustard
    secondaryAccent: '#7C2D12',
    headlineFont: 'Fraunces, Georgia, serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Fraunces + Inter',
    imageDirection: 'Authentic plated thalis, sizzling clay tandoor, warm tungsten dining light',
    taglineVibe: 'Desi Clay Zaika'
  },
  tiffin: {
    category: 'tiffin',
    name: 'Ghar Ka Tiffin & Meal Service',
    baseBg: '#A9432D',         // Terracotta
    surfaceBg: '#FFFDFB',
    textColor: '#FFF7ED',
    bodyTextColor: '#241F1C',
    accentColor: '#E0A526',    // Mustard
    secondaryAccent: '#C2573F',
    headlineFont: 'Fraunces, Georgia, serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Fraunces + Inter',
    imageDirection: 'Stainless steel tiffin tiers, fresh chapatis with ghee, homely dal',
    taglineVibe: 'Homely Hearth'
  },

  // 6. Salon & Spa
  salon: {
    category: 'salon',
    name: 'Salon, Spa & Beauty Lounge',
    baseBg: '#4A2545',         // Deep Plum
    surfaceBg: '#FFFBF9',
    textColor: '#EFD9D3',      // Blush
    bodyTextColor: '#31172E',
    accentColor: '#EFD9D3',    // Blush
    secondaryAccent: '#D4A373',
    headlineFont: 'Cormorant Garamond, Georgia, serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Cormorant Garamond + Inter',
    imageDirection: 'Macro texture shots of botanical oils, manicured hands, gentle salon mirrors',
    taglineVibe: 'Sensory Sanctuary'
  },

  // 7. Gym & Fitness
  gym: {
    category: 'gym',
    name: 'Gym, CrossFit & Yoga Studio',
    baseBg: '#111214',         // Jet
    surfaceBg: '#181A1D',
    textColor: '#FFFFFF',
    bodyTextColor: '#E2E8F0',
    accentColor: '#C6F135',    // High-voltage Lime (used sparingly)
    secondaryAccent: '#8A8F98',// Steel
    headlineFont: 'Space Grotesk, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Space Grotesk (Bold) + Inter',
    imageDirection: 'Dynamic athletic motion, chalked barbell knurling, high-contrast workout sweat',
    taglineVibe: 'Uncompromising Iron'
  },

  // 8. Clinic & Dental Care
  clinic: {
    category: 'clinic',
    name: 'Doctor Clinic & Dental Care',
    baseBg: '#2C5F8A',         // Clinical Blue
    surfaceBg: '#FFFFFF',
    textColor: '#FFFFFF',
    bodyTextColor: '#1E3A5F',
    accentColor: '#F1F3F5',    // Soft Grey
    secondaryAccent: '#4B88BD',
    headlineFont: 'Inter, sans-serif', // Single family, weight contrast
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Inter + Inter (Weight Contrast)',
    imageDirection: 'Spotless clinical suites, dental scanner technology, friendly consultation desk',
    taglineVibe: 'Evidence-Based Care'
  },
  pharmacy: {
    category: 'pharmacy',
    name: 'Chemist & Medical Store',
    baseBg: '#2C5F8A',         // Clinical Blue
    surfaceBg: '#FFFFFF',
    textColor: '#FFFFFF',
    bodyTextColor: '#1E3A5F',
    accentColor: '#F1F3F5',
    secondaryAccent: '#38A169',
    headlineFont: 'Inter, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Inter + Inter (Weight Contrast)',
    imageDirection: 'Organized medicine bays, cold-storage vaccines, prescription counter',
    taglineVibe: '24x7 Healthcare Pillar'
  },

  // 9. General store / Kirana
  kirana: {
    category: 'kirana',
    name: 'Kirana & Super Mart',
    baseBg: '#3F6B4A',         // Warm Green
    surfaceBg: '#FBF6EC',      // Cream
    textColor: '#FFFFFF',
    bodyTextColor: '#233827',
    accentColor: '#B5502E',    // Rust
    secondaryAccent: '#D97706',
    headlineFont: 'Inter, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Inter + Inter (Weight Contrast)',
    imageDirection: 'Wooden crates of spices, stacked grain sacks, everyday honest neighborhood shop',
    taglineVibe: 'Neighborhood Mart'
  },
  hardware: {
    category: 'hardware',
    name: 'Hardware & Paint Shop',
    baseBg: '#3F6B4A',         // Warm Green
    surfaceBg: '#FBF6EC',      // Cream
    textColor: '#FFFFFF',
    bodyTextColor: '#233827',
    accentColor: '#B5502E',    // Rust
    secondaryAccent: '#E2E8F0',
    headlineFont: 'Space Grotesk, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Space Grotesk + Inter',
    imageDirection: 'Brass fittings, paint color swatches, sturdy hand tools',
    taglineVibe: 'Builder Grade'
  },
  construction: {
    category: 'construction',
    name: 'Construction & Building Materials E-Commerce',
    baseBg: '#181E29',         // Deep Heavy Industrial Slate
    surfaceBg: '#F8FAFC',      // Crisp Off-White
    textColor: '#F8FAFC',
    bodyTextColor: '#0F172A',
    accentColor: '#F59E0B',    // Heavy Duty Safety Amber
    secondaryAccent: '#EA580C',// High-Vis Industrial Orange
    headlineFont: 'Space Grotesk, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Space Grotesk + Inter',
    imageDirection: 'TMT steel rebar bundles, pallets of UltraTech cement, red clay brick stacks, heavy site dumpers',
    taglineVibe: 'Wholesale Contractor Direct'
  },

  // 42 Extended Categories
  ca_tax: {
    category: 'ca_tax',
    name: 'Chartered Accountant & Tax Advisory',
    baseBg: '#0F2042',
    surfaceBg: '#F4F7FC',
    textColor: '#F1F5F9',
    bodyTextColor: '#0F172A',
    accentColor: '#C5A059',
    secondaryAccent: '#1E3A8A',
    headlineFont: 'Cinzel, Georgia, serif',
    bodyFont: 'Plus Jakarta Sans, sans-serif',
    fontPairingLabel: 'Cinzel + Plus Jakarta Sans',
    imageDirection: 'Audit files, balance sheets, calculator, corporate boardroom',
    taglineVibe: 'Integrity & Financial Precision'
  },
  lawyer: {
    category: 'lawyer',
    name: 'Advocate & Legal Chambers',
    baseBg: '#351219',
    surfaceBg: '#FAF7F2',
    textColor: '#FAF7F2',
    bodyTextColor: '#2B0E14',
    accentColor: '#C99700',
    secondaryAccent: '#591C2B',
    headlineFont: 'Prata, serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Prata + Inter',
    imageDirection: 'Law books, scales of justice, advocate robes, mahogany desk',
    taglineVibe: 'Steadfast Legal Defense'
  },
  interior_design: {
    category: 'interior_design',
    name: 'Luxury Interior Design Studio',
    baseBg: '#23201D',
    surfaceBg: '#F9F8F5',
    textColor: '#F5EBE1',
    bodyTextColor: '#2A2421',
    accentColor: '#B08968',
    secondaryAccent: '#7F5539',
    headlineFont: 'Italiana, serif',
    bodyFont: 'Plus Jakarta Sans, sans-serif',
    fontPairingLabel: 'Italiana + Plus Jakarta Sans',
    imageDirection: 'Bespoke living rooms, mood boards, marble textures, architectural lighting',
    taglineVibe: 'Curated Living Spaces'
  },
  architect: {
    category: 'architect',
    name: 'Architectural Studio & Structural Design',
    baseBg: '#181C24',
    surfaceBg: '#F3F6FA',
    textColor: '#F1F5F9',
    bodyTextColor: '#111827',
    accentColor: '#00A3C4',
    secondaryAccent: '#3B82F6',
    headlineFont: 'Syne, sans-serif',
    bodyFont: 'Plus Jakarta Sans, sans-serif',
    fontPairingLabel: 'Syne + Plus Jakarta Sans',
    imageDirection: 'Blueprint schematics, 3D architectural elevations, concrete minimalism',
    taglineVibe: 'Built for Generations'
  },
  banquet_hall: {
    category: 'banquet_hall',
    name: 'Grand Palace Banquet & Convention',
    baseBg: '#590B22',
    surfaceBg: '#FFFBF5',
    textColor: '#FFF8EE',
    bodyTextColor: '#3E0818',
    accentColor: '#D4AF37',
    secondaryAccent: '#E53E3E',
    headlineFont: 'Playfair Display, serif',
    bodyFont: 'Plus Jakarta Sans, sans-serif',
    fontPairingLabel: 'Playfair Display + Plus Jakarta Sans',
    imageDirection: 'Chandelier ballroom, grand wedding stage, floral mandap, banquet buffet',
    taglineVibe: 'Royal Celebrations'
  },
  packers_movers: {
    category: 'packers_movers',
    name: 'SafeMove Packers & Movers',
    baseBg: '#10223D',
    surfaceBg: '#FFF9F5',
    textColor: '#FFFFFF',
    bodyTextColor: '#0F172A',
    accentColor: '#F95738',
    secondaryAccent: '#F4A261',
    headlineFont: 'Space Grotesk, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Space Grotesk + Inter',
    imageDirection: 'Sealed corrugated boxes, bubble wrap packing, GPS container trucks',
    taglineVibe: 'Zero Damage Guarantee'
  },
  ac_repair: {
    category: 'ac_repair',
    name: 'AC & Appliance Doctor 24x7',
    baseBg: '#092540',
    surfaceBg: '#F0F9FF',
    textColor: '#E0F2FE',
    bodyTextColor: '#0C4A6E',
    accentColor: '#0284C7',
    secondaryAccent: '#06B6D4',
    headlineFont: 'Space Grotesk, sans-serif',
    bodyFont: 'Plus Jakarta Sans, sans-serif',
    fontPairingLabel: 'Space Grotesk + Plus Jakarta Sans',
    imageDirection: 'Split AC indoor coil cleaning, manifold gauge pressure test, copper flaring',
    taglineVibe: 'Instant Cooling Relief'
  },
  cctv_security: {
    category: 'cctv_security',
    name: 'Smart CCTV & Security Systems',
    baseBg: '#0F131D',
    surfaceBg: '#F8FAFC',
    textColor: '#E2E8F0',
    bodyTextColor: '#0F172A',
    accentColor: '#F59E0B',
    secondaryAccent: '#10B981',
    headlineFont: 'Space Grotesk, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Space Grotesk + Inter',
    imageDirection: '4K dome camera, multi-screen video wall, optical zoom lens, biometric access',
    taglineVibe: 'Unbroken Vigilance'
  },
  vet_clinic: {
    category: 'vet_clinic',
    name: 'Veterinary Clinic & Animal Care',
    baseBg: '#153E32',
    surfaceBg: '#F5FAF7',
    textColor: '#ECFDF5',
    bodyTextColor: '#064E3B',
    accentColor: '#F97316',
    secondaryAccent: '#10B981',
    headlineFont: 'Plus Jakarta Sans, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Plus Jakarta Sans + Inter',
    imageDirection: 'Golden retriever exam, gentle stethoscope checkup, cat vaccination',
    taglineVibe: 'Compassionate Pet Healing'
  },
  preschool_daycare: {
    category: 'preschool_daycare',
    name: 'Early Years Preschool & Daycare',
    baseBg: '#6B3A0E',
    surfaceBg: '#FFFDF5',
    textColor: '#FEF3C7',
    bodyTextColor: '#451A03',
    accentColor: '#F59E0B',
    secondaryAccent: '#10B981',
    headlineFont: 'Plus Jakarta Sans, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Plus Jakarta Sans + Inter',
    imageDirection: 'Montessori wooden blocks, sunny classroom, kids circle time',
    taglineVibe: 'Joyful Early Discovery'
  },
  astrologer_pooja: {
    category: 'astrologer_pooja',
    name: 'Vedic Astrology & Pooja Services',
    baseBg: '#451020',
    surfaceBg: '#FFF9F0',
    textColor: '#FEF3C7',
    bodyTextColor: '#380D1A',
    accentColor: '#D97706',
    secondaryAccent: '#DC2626',
    headlineFont: 'Playfair Display, serif',
    bodyFont: 'Plus Jakarta Sans, sans-serif',
    fontPairingLabel: 'Playfair Display + Plus Jakarta Sans',
    imageDirection: 'Brass pooja thali, diya flame, Vedic horoscope chart, rudraksha mala',
    taglineVibe: 'Vedic Blessings & Destiny'
  },
  arts_academy: {
    category: 'arts_academy',
    name: 'Music, Dance & Fine Arts Academy',
    baseBg: '#1B1C38',
    surfaceBg: '#FAF8F5',
    textColor: '#F1F0FF',
    bodyTextColor: '#1E1B4B',
    accentColor: '#E11D48',
    secondaryAccent: '#818CF8',
    headlineFont: 'Playfair Display, serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Playfair Display + Inter',
    imageDirection: 'Classical sitar strings, Kathak ghungroo, oil painting canvas',
    taglineVibe: 'Soulful Creative Expression'
  },
  auto_showroom: {
    category: 'auto_showroom',
    name: 'Premium Car & Bike Showroom',
    baseBg: '#0D1117',
    surfaceBg: '#F3F4F6',
    textColor: '#F9FAFB',
    bodyTextColor: '#111827',
    accentColor: '#EF4444',
    secondaryAccent: '#3B82F6',
    headlineFont: 'Space Grotesk, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Space Grotesk + Inter',
    imageDirection: 'Spotlight on ceramic coated car hood, alloy wheels, leather steering',
    taglineVibe: 'Thrilling Drives Direct'
  },
  solar_installer: {
    category: 'solar_installer',
    name: 'Solar Panel & Rooftop Systems',
    baseBg: '#0B2433',
    surfaceBg: '#F8FAFC',
    textColor: '#F0F9FF',
    bodyTextColor: '#0F172A',
    accentColor: '#EAB308',
    secondaryAccent: '#10B981',
    headlineFont: 'Space Grotesk, sans-serif',
    bodyFont: 'Plus Jakarta Sans, sans-serif',
    fontPairingLabel: 'Space Grotesk + Plus Jakarta Sans',
    imageDirection: 'Monocrystalline solar panels under sun, net-metering inverter, rooftop team',
    taglineVibe: 'Zero Electricity Bills'
  },
  painting_contractor: {
    category: 'painting_contractor',
    name: 'Master Home Painting Contractor',
    baseBg: '#16233B',
    surfaceBg: '#FCFCFD',
    textColor: '#F1F5F9',
    bodyTextColor: '#0F172A',
    accentColor: '#FF6B4A',
    secondaryAccent: '#6366F1',
    headlineFont: 'Plus Jakarta Sans, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Plus Jakarta Sans + Inter',
    imageDirection: 'Royale luxury emulsion sheen, stenciled textured accent wall, mechanized sanding',
    taglineVibe: 'Flawless Color Magic'
  },
  jewellery_shop: {
    category: 'jewellery_shop',
    name: 'Heritage Gold & Diamond Jewellers',
    baseBg: '#092B1D',
    surfaceBg: '#FFFDF7',
    textColor: '#FFFBEA',
    bodyTextColor: '#062417',
    accentColor: '#D4AF37',
    secondaryAccent: '#B45309',
    headlineFont: 'Playfair Display, serif',
    bodyFont: 'Plus Jakarta Sans, sans-serif',
    fontPairingLabel: 'Playfair Display + Plus Jakarta Sans',
    imageDirection: 'Hallmarked 22K gold necklace, uncut polki choker, solitaire diamond sparkles',
    taglineVibe: 'Timeless Shahi Elegance'
  },
  optical_shop: {
    category: 'optical_shop',
    name: 'Precision Vision & Optical Frames',
    baseBg: '#08253B',
    surfaceBg: '#F8FAFC',
    textColor: '#F0F9FF',
    bodyTextColor: '#0F172A',
    accentColor: '#0EA5E9',
    secondaryAccent: '#065F46',
    headlineFont: 'Plus Jakarta Sans, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Plus Jakarta Sans + Inter',
    imageDirection: 'Acetate titanium frames, computerized eye refraction autorefractor',
    taglineVibe: 'Crystal Clear Sight'
  },
  ro_water_purifier: {
    category: 'ro_water_purifier',
    name: 'PureDrop RO & Water Purifier Service',
    baseBg: '#06353D',
    surfaceBg: '#F0FDF4',
    textColor: '#ECFEFF',
    bodyTextColor: '#083344',
    accentColor: '#06B6D4',
    secondaryAccent: '#10B981',
    headlineFont: 'Plus Jakarta Sans, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Plus Jakarta Sans + Inter',
    imageDirection: 'Pure splash of water, multi-stage RO membrane filter, copper alkaline dispenser',
    taglineVibe: '100% Mineral Hydration'
  },
  pest_control: {
    category: 'pest_control',
    name: 'ShieldSafe Herbal Pest Control',
    baseBg: '#1B3322',
    surfaceBg: '#F9FAF7',
    textColor: '#F0FDF4',
    bodyTextColor: '#14532D',
    accentColor: '#DC2626',
    secondaryAccent: '#16A34A',
    headlineFont: 'Space Grotesk, sans-serif',
    bodyFont: 'Plus Jakarta Sans, sans-serif',
    fontPairingLabel: 'Space Grotesk + Plus Jakarta Sans',
    imageDirection: 'Gel baiting application in modular kitchen, ultrasonic pest repeller, safe odorless misting',
    taglineVibe: 'Pest-Free Living'
  },
  courier_delivery: {
    category: 'courier_delivery',
    name: 'FastTrack Cargo & Courier Service',
    baseBg: '#0A1E36',
    surfaceBg: '#F8FAFC',
    textColor: '#FFFFFF',
    bodyTextColor: '#0F172A',
    accentColor: '#E11D48',
    secondaryAccent: '#2563EB',
    headlineFont: 'Space Grotesk, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Space Grotesk + Inter',
    imageDirection: 'Barcode scanned parcels, delivery dispatch sorting dock, electric cargo scooter',
    taglineVibe: 'Lightning Doorstep Delivery'
  },
  home_baker: {
    category: 'home_baker',
    name: 'Whisk & Sugar Artisan Home Bakery',
    baseBg: '#431728',
    surfaceBg: '#FFFDF9',
    textColor: '#FFF1F2',
    bodyTextColor: '#4C0519',
    accentColor: '#F43F5E',
    secondaryAccent: '#D97706',
    headlineFont: 'Fraunces, Georgia, serif',
    bodyFont: 'Plus Jakarta Sans, sans-serif',
    fontPairingLabel: 'Fraunces + Plus Jakarta Sans',
    imageDirection: 'Bento birthday cake piping, fresh strawberry tart, artisanal brownies',
    taglineVibe: 'Handcrafted With Love'
  },
  notary_legal: {
    category: 'notary_legal',
    name: 'Apex Legal Typing & Notary',
    baseBg: '#162238',
    surfaceBg: '#F9FAFB',
    textColor: '#F1F5F9',
    bodyTextColor: '#0F172A',
    accentColor: '#B91C1C',
    secondaryAccent: '#3B82F6',
    headlineFont: 'Playfair Display, serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Playfair Display + Inter',
    imageDirection: 'E-stamp certificate, red wax seal, advocate notary stamp, legal document file',
    taglineVibe: 'Authorized & Legally Sound'
  },
  insurance_agent: {
    category: 'insurance_agent',
    name: 'ShieldSure Life & Health Insurance',
    baseBg: '#0B2D4A',
    surfaceBg: '#F8FAFC',
    textColor: '#FFFFFF',
    bodyTextColor: '#0F172A',
    accentColor: '#F59E0B',
    secondaryAccent: '#2563EB',
    headlineFont: 'Plus Jakarta Sans, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Plus Jakarta Sans + Inter',
    imageDirection: 'Multi-generation family, cashless health card, umbrella shielding finance',
    taglineVibe: 'Guaranteed Financial Protection'
  },
  loan_dsa: {
    category: 'loan_dsa',
    name: 'Bharat DSA Loan & Mortgage Advisory',
    baseBg: '#083324',
    surfaceBg: '#F7FCF9',
    textColor: '#ECFDF5',
    bodyTextColor: '#064E3B',
    accentColor: '#EAB308',
    secondaryAccent: '#059669',
    headlineFont: 'Space Grotesk, sans-serif',
    bodyFont: 'Plus Jakarta Sans, sans-serif',
    fontPairingLabel: 'Space Grotesk + Plus Jakarta Sans',
    imageDirection: 'Home loan sanction letter, new house keys, digital loan calculator',
    taglineVibe: 'Lowest Interest Approvals'
  },
  telecom_recharge: {
    category: 'telecom_recharge',
    name: 'ConnectPlus Mobile Recharge & SIM Store',
    baseBg: '#2E0854',
    surfaceBg: '#FAF5FF',
    textColor: '#FAF5FF',
    bodyTextColor: '#3B0764',
    accentColor: '#E11D48',
    secondaryAccent: '#9333EA',
    headlineFont: 'Space Grotesk, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Space Grotesk + Inter',
    imageDirection: '5G SIM cards, smartphone accessories, digital UPI scanner, fast top-up portal',
    taglineVibe: 'Always Connected'
  },
  gift_stationery: {
    category: 'gift_stationery',
    name: 'CraftWorld Stationery & Gift Emporium',
    baseBg: '#36241D',
    surfaceBg: '#FFFDF7',
    textColor: '#FFFBEA',
    bodyTextColor: '#291811',
    accentColor: '#EA580C',
    secondaryAccent: '#059669',
    headlineFont: 'Plus Jakarta Sans, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Plus Jakarta Sans + Inter',
    imageDirection: 'Handmade leather journals, calligraphy pens, aesthetic gift wrapping',
    taglineVibe: 'Pens, Paper & Smiles'
  },
  toy_shop: {
    category: 'toy_shop',
    name: 'ToyLand Planet & Kids Games',
    baseBg: '#1E1B4B',
    surfaceBg: '#FFFDF2',
    textColor: '#FEF08A',
    bodyTextColor: '#1E1B4B',
    accentColor: '#F59E0B',
    secondaryAccent: '#EC4899',
    headlineFont: 'Plus Jakarta Sans, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Plus Jakarta Sans + Inter',
    imageDirection: 'LEGO building blocks, remote control monster truck, plush teddy bears',
    taglineVibe: 'Infinite Childhood Smiles'
  },
  sports_shop: {
    category: 'sports_shop',
    name: 'Champion Sports & Athletic Gear',
    baseBg: '#0F172A',
    surfaceBg: '#F8FAFC',
    textColor: '#FFFFFF',
    bodyTextColor: '#020617',
    accentColor: '#10B981',
    secondaryAccent: '#EF4444',
    headlineFont: 'Space Grotesk, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Space Grotesk + Inter',
    imageDirection: 'English willow cricket bats, Yonex badminton racquets, leather footballs',
    taglineVibe: 'Play Like A Legend'
  },
  cycle_repair: {
    category: 'cycle_repair',
    name: 'CycleCraft Pro Sales & Repair Workshop',
    baseBg: '#14232B',
    surfaceBg: '#F0F9FF',
    textColor: '#F0F9FF',
    bodyTextColor: '#082F49',
    accentColor: '#84CC16',
    secondaryAccent: '#0284C7',
    headlineFont: 'Space Grotesk, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Space Grotesk + Inter',
    imageDirection: 'Shimano gear derailleur tuning, hydraulic disc brakes, lightweight hybrid bicycle',
    taglineVibe: 'Smooth Pedaling Precision'
  },
  auto_garage: {
    category: 'auto_garage',
    name: 'Grand Auto Works Multi-Brand Garage',
    baseBg: '#131418',
    surfaceBg: '#F9FAFB',
    textColor: '#FFFFFF',
    bodyTextColor: '#111827',
    accentColor: '#F59E0B',
    secondaryAccent: '#DC2626',
    headlineFont: 'Space Grotesk, sans-serif',
    bodyFont: 'Plus Jakarta Sans, sans-serif',
    fontPairingLabel: 'Space Grotesk + Plus Jakarta Sans',
    imageDirection: 'Car hoisted on hydraulic lift, synthetic oil flush, engine scanner tablet',
    taglineVibe: 'Master Mechanic Reliability'
  },
  vehicle_scrapping: {
    category: 'vehicle_scrapping',
    name: 'GreenScrap RTO Vehicle Scrapping & RC Surrender',
    baseBg: '#1B291D',
    surfaceBg: '#F7FAF8',
    textColor: '#ECFDF5',
    bodyTextColor: '#064E3B',
    accentColor: '#CA8A04',
    secondaryAccent: '#16A34A',
    headlineFont: 'Space Grotesk, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Space Grotesk + Inter',
    imageDirection: 'RTO authorized scrapping yard, flatbed tow truck, certificate of deposit',
    taglineVibe: 'Hassle-Free RC Deregistration'
  },
  cab_taxi_rental: {
    category: 'cab_taxi_rental',
    name: 'RoyalMiles Outstation Cabs & Airport Taxi',
    baseBg: '#111417',
    surfaceBg: '#FFFDF2',
    textColor: '#FEF08A',
    bodyTextColor: '#18181B',
    accentColor: '#EAB308',
    secondaryAccent: '#2563EB',
    headlineFont: 'Space Grotesk, sans-serif',
    bodyFont: 'Plus Jakarta Sans, sans-serif',
    fontPairingLabel: 'Space Grotesk + Plus Jakarta Sans',
    imageDirection: 'Pristine white Innova Crysta, highway toll plaza, professional chauffeur',
    taglineVibe: 'Safe & Timely Travel'
  },
  physiotherapy: {
    category: 'physiotherapy',
    name: 'ActiveSpine Physiotherapy & Sports Rehab',
    baseBg: '#063B3F',
    surfaceBg: '#F0FDF4',
    textColor: '#ECFEFF',
    bodyTextColor: '#083344',
    accentColor: '#F43F5E',
    secondaryAccent: '#0D9488',
    headlineFont: 'Plus Jakarta Sans, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Plus Jakarta Sans + Inter',
    imageDirection: 'Spine decompression traction, therapeutic ultrasound, resistance band exercises',
    taglineVibe: 'Restore Natural Pain-Free Movement'
  },
  musical_instruments: {
    category: 'musical_instruments',
    name: 'SurSangeet Guitars & Classical Instruments',
    baseBg: '#341A11',
    surfaceBg: '#FFFDF7',
    textColor: '#FFFBEA',
    bodyTextColor: '#27120B',
    accentColor: '#D97706',
    secondaryAccent: '#B45309',
    headlineFont: 'Playfair Display, serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Playfair Display + Inter',
    imageDirection: 'Acoustic rosewood guitar, teakwood harmonium brass reeds, polished violin',
    taglineVibe: 'Pure Harmonious Tones'
  },
  bookshop_library: {
    category: 'bookshop_library',
    name: 'KitabGhar Readers Haven & Library',
    baseBg: '#311F17',
    surfaceBg: '#FFFDF5',
    textColor: '#FEF3C7',
    bodyTextColor: '#2B170E',
    accentColor: '#DC2626',
    secondaryAccent: '#D97706',
    headlineFont: 'Fraunces, Georgia, serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Fraunces + Inter',
    imageDirection: 'Floor to ceiling wooden bookshelves, cozy reading chair, bestselling novels',
    taglineVibe: 'Where Stories Live'
  },
  curtain_upholstery: {
    category: 'curtain_upholstery',
    name: 'Royal Drape Curtains & Sofa Upholstery',
    baseBg: '#21242C',
    surfaceBg: '#F9F8F6',
    textColor: '#F1F5F9',
    bodyTextColor: '#1E293B',
    accentColor: '#D97706',
    secondaryAccent: '#9333EA',
    headlineFont: 'Playfair Display, serif',
    bodyFont: 'Plus Jakarta Sans, sans-serif',
    fontPairingLabel: 'Playfair Display + Plus Jakarta Sans',
    imageDirection: 'Heavy velvet pleat curtains, motorized sheer blinds, fabric sofa swatches',
    taglineVibe: 'Dressed in Luxury'
  },
  plant_nursery: {
    category: 'plant_nursery',
    name: 'GreenHaven Exotic Plants & Bonsai Nursery',
    baseBg: '#0D311F',
    surfaceBg: '#F6FAF7',
    textColor: '#ECFDF5',
    bodyTextColor: '#064E3B',
    accentColor: '#EA580C',
    secondaryAccent: '#16A34A',
    headlineFont: 'Fraunces, Georgia, serif',
    bodyFont: 'Plus Jakarta Sans, sans-serif',
    fontPairingLabel: 'Fraunces + Plus Jakarta Sans',
    imageDirection: 'Fiddle leaf fig, Japanese ficus bonsai, glazed ceramic planters',
    taglineVibe: 'Living Green Elegance'
  },
  bridal_makeup: {
    category: 'bridal_makeup',
    name: 'Noor Bridal Makeup & Luxury Hair Lounge',
    baseBg: '#3F0E23',
    surfaceBg: '#FFF5F8',
    textColor: '#FFF1F2',
    bodyTextColor: '#4C0519',
    accentColor: '#E0A96D',
    secondaryAccent: '#F43F5E',
    headlineFont: 'Playfair Display, serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Playfair Display + Inter',
    imageDirection: 'Airbrush makeup artist at work, Indian bridal jewelry & lehenga makeover',
    taglineVibe: 'Radiant Wedding Glow'
  },
  cold_storage_warehouse: {
    category: 'cold_storage_warehouse',
    name: 'ArcticVault Cold Storage & Logistics',
    baseBg: '#091C34',
    surfaceBg: '#F0F9FF',
    textColor: '#F0F9FF',
    bodyTextColor: '#0C4A6E',
    accentColor: '#00B4D8',
    secondaryAccent: '#0284C7',
    headlineFont: 'Space Grotesk, sans-serif',
    bodyFont: 'Plus Jakarta Sans, sans-serif',
    fontPairingLabel: 'Space Grotesk + Plus Jakarta Sans',
    imageDirection: 'Palletized cartons in chilled chamber, industrial evaporator fans',
    taglineVibe: 'Uncompromised Cold Chain'
  },
  school_transport: {
    category: 'school_transport',
    name: 'SafeVan School Transport Services',
    baseBg: '#18181B',
    surfaceBg: '#FEFCE8',
    textColor: '#FEF08A',
    bodyTextColor: '#18181B',
    accentColor: '#EAB308',
    secondaryAccent: '#0284C7',
    headlineFont: 'Space Grotesk, sans-serif',
    bodyFont: 'Plus Jakarta Sans, sans-serif',
    fontPairingLabel: 'Space Grotesk + Plus Jakarta Sans',
    imageDirection: 'Yellow school van with safety bars, female attendant assisting child, live GPS',
    taglineVibe: 'Child Safety First'
  },
  dance_fitness: {
    category: 'dance_fitness',
    name: 'RhythmX Dance & Zumba Fitness Academy',
    baseBg: '#1F0B38',
    surfaceBg: '#FAF5FF',
    textColor: '#FDF4FF',
    bodyTextColor: '#3B0764',
    accentColor: '#FF007F',
    secondaryAccent: '#7928CA',
    headlineFont: 'Syne, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Syne + Inter',
    imageDirection: 'Mirror dance studio, energetic Zumba leaps, Bollywood choreography practice',
    taglineVibe: 'Move With Passion'
  },
  pathology_lab: {
    category: 'pathology_lab',
    name: 'PulseCare Diagnostic Lab & Pathology',
    baseBg: '#082E59',
    surfaceBg: '#F0F7FF',
    textColor: '#FFFFFF',
    bodyTextColor: '#0F172A',
    accentColor: '#EF4444',
    secondaryAccent: '#0284C7',
    headlineFont: 'Plus Jakarta Sans, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Plus Jakarta Sans + Inter',
    imageDirection: 'Automated blood analyzer, vacutainer collection tubes, phlebotomist in sterile gloves',
    taglineVibe: 'Accurate & Caring Diagnostics'
  },
  gaming_cafe: {
    category: 'gaming_cafe',
    name: 'Gaming Café & PS5/VR Lounge',
    baseBg: '#0D0B1F',
    surfaceBg: '#F5F3FF',
    textColor: '#EDE9FE',
    bodyTextColor: '#1E1B4B',
    accentColor: '#7C3AED',
    secondaryAccent: '#06B6D4',
    headlineFont: 'Space Grotesk, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Space Grotesk + Inter',
    imageDirection: 'Neon illuminated PS5 Pro pods, Fanatec racing wheel rigs, curved gaming screens',
    taglineVibe: 'Next-Gen Competitive Play'
  },
  escape_room: {
    category: 'escape_room',
    name: 'Escape Room & Mystery Games',
    baseBg: '#1C0C16',
    surfaceBg: '#FFF1F2',
    textColor: '#FFE4E6',
    bodyTextColor: '#4C0519',
    accentColor: '#831843',
    secondaryAccent: '#F59E0B',
    headlineFont: 'Cinzel, Georgia, serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Cinzel + Inter',
    imageDirection: 'Atmospheric escape vault, ultraviolet secret codes, antique lock mechanisms',
    taglineVibe: 'Cryptic Cinematic Thrill'
  },
  tattoo_studio: {
    category: 'tattoo_studio',
    name: 'Tattoo & Piercing Studio',
    baseBg: '#0A0B10',
    surfaceBg: '#F8FAFC',
    textColor: '#F1F5F9',
    bodyTextColor: '#0F172A',
    accentColor: '#F43F5E',
    secondaryAccent: '#94A3B8',
    headlineFont: 'Cinzel, Georgia, serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Cinzel + Inter',
    imageDirection: 'Sterile tattoo machine, fine-line floral script, fresh sleeve ink portrait',
    taglineVibe: 'Living Canvas Artistry'
  },
  home_tutor: {
    category: 'home_tutor',
    name: 'Home Tutor & Private Educator',
    baseBg: '#0F172A',
    surfaceBg: '#F8FAFC',
    textColor: '#F8FAFC',
    bodyTextColor: '#0F172A',
    accentColor: '#1E3A8A',
    secondaryAccent: '#0D9488',
    headlineFont: 'Inter, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Inter + Inter',
    imageDirection: 'Focused student derivation notebook, graph papers, geometry set and textbook',
    taglineVibe: '1-on-1 Academic Excellence'
  },
  drone_service: {
    category: 'drone_service',
    name: 'Drone & Aerial Photography',
    baseBg: '#082F49',
    surfaceBg: '#F0F9FF',
    textColor: '#E0F2FE',
    bodyTextColor: '#0C4A6E',
    accentColor: '#0284C7',
    secondaryAccent: '#F97316',
    headlineFont: 'Space Grotesk, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Space Grotesk + Inter',
    imageDirection: 'DJI drone propellers spinning, aerial skyline panorama, 4K camera gimbal closeup',
    taglineVibe: 'Cinematic High Elevation'
  },
  organic_farm: {
    category: 'organic_farm',
    name: 'Organic Farm & Veg Box',
    baseBg: '#143521',
    surfaceBg: '#F0FDF4',
    textColor: '#DCFCE7',
    bodyTextColor: '#14532D',
    accentColor: '#15803D',
    secondaryAccent: '#CA8A04',
    headlineFont: 'Fraunces, Georgia, serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Fraunces + Inter',
    imageDirection: 'Dewy heirloom vegetables, rustic wooden harvest crate, glass jar of pure golden ghee',
    taglineVibe: 'Pesticide-Free Earth Harvest'
  },
  coworking_space: {
    category: 'coworking_space',
    name: 'Co-Working Space & Hot Desks',
    baseBg: '#092625',
    surfaceBg: '#F0FDFA',
    textColor: '#CCFBF1',
    bodyTextColor: '#134E4A',
    accentColor: '#0F766E',
    secondaryAccent: '#F59E0B',
    headlineFont: 'Inter, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Inter + Inter',
    imageDirection: 'Sunlit modern open desk row, glass meeting room, founder enjoying pour-over espresso',
    taglineVibe: 'High-Impact Focused Collaboration'
  },
  party_rental: {
    category: 'party_rental',
    name: 'Party & Event Rental',
    baseBg: '#331407',
    surfaceBg: '#FFF7ED',
    textColor: '#FFEDD5',
    bodyTextColor: '#7C2D12',
    accentColor: '#C2410C',
    secondaryAccent: '#EAB308',
    headlineFont: 'Playfair Display, Georgia, serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Playfair Display + Inter',
    imageDirection: 'Concert stage trussing, array sound speakers, royal gold sofa and velvet chiavari chairs',
    taglineVibe: 'Grand Festive Production'
  },
  corporate_gifting: {
    category: 'corporate_gifting',
    name: 'Corporate Gifting Supplier',
    baseBg: '#2C0D2E',
    surfaceBg: '#FDF4FF',
    textColor: '#FAE8FF',
    bodyTextColor: '#581C87',
    accentColor: '#701A75',
    secondaryAccent: '#D97706',
    headlineFont: 'Playfair Display, Georgia, serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Playfair Display + Inter',
    imageDirection: 'Laser-engraved brass jars, satin ribbon gift box, executive bamboo desk kit',
    taglineVibe: 'Prestige Corporate Token'
  },
  handicraft_store: {
    category: 'handicraft_store',
    name: 'Handicraft & Artisan Store',
    baseBg: '#3B180E',
    surfaceBg: '#FFF7ED',
    textColor: '#FFEDD5',
    bodyTextColor: '#7C2D12',
    accentColor: '#9A3412',
    secondaryAccent: '#0284C7',
    headlineFont: 'Fraunces, Georgia, serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Fraunces + Inter',
    imageDirection: 'GI-tagged Jaipur blue pottery vases, hand-block dyed cotton quilts, artisan brass diya',
    taglineVibe: 'Authentic Indian Artisan Heritage'
  },
  rooftop_cafe: {
    category: 'rooftop_cafe',
    name: 'Rooftop & Terrace Café',
    baseBg: '#18162F',
    surfaceBg: '#FAF5FF',
    textColor: '#F3E8FF',
    bodyTextColor: '#3B0764',
    accentColor: '#C2410C',
    secondaryAccent: '#4F46E5',
    headlineFont: 'Fraunces, Georgia, serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Fraunces + Inter',
    imageDirection: 'Twilight open terrace, cable bridge lake view, artisanal woodfired sourdough pizza slice',
    taglineVibe: 'Skyline Sunset Reverie'
  },
  office_tiffin: {
    category: 'office_tiffin',
    name: 'B2B Office Tiffin Service',
    baseBg: '#331504',
    surfaceBg: '#FFF7ED',
    textColor: '#FFEDD5',
    bodyTextColor: '#7C2D12',
    accentColor: '#EA580C',
    secondaryAccent: '#16A34A',
    headlineFont: 'Inter, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Inter + Inter',
    imageDirection: 'Hot stainless steel thermal meal boxes, ghee phulkas, fresh salad and dal tadka',
    taglineVibe: 'Punctual Homestyle Corporate Meals'
  }
};

/**
 * Returns the matching CategoryToken or falls back to a clean, domain-appropriate default.
 */
export function getCategoryToken(category: string): CategoryToken {
  if (CATEGORY_TOKENS[category]) {
    return CATEGORY_TOKENS[category];
  }

  // Sensible default mapping for secondary categories
  switch (category) {
    case 'tailor':
    case 'boutique':
    case 'retail':
      return {
        category,
        name: 'Bespoke Atelier & Boutique',
        baseBg: '#4A2545',
        surfaceBg: '#FFFBF9',
        textColor: '#EFD9D3',
        bodyTextColor: '#31172E',
        accentColor: '#D4A94E',
        secondaryAccent: '#DDA15E',
        headlineFont: 'Cormorant Garamond, Georgia, serif',
        bodyFont: 'Inter, sans-serif',
        fontPairingLabel: 'Cormorant Garamond + Inter',
        imageDirection: 'Raw silk textures, tailor chalk marks, brass shears',
        taglineVibe: 'Couture Needle'
      };
    case 'photography':
      return {
        category,
        name: 'Photography Studio',
        baseBg: '#14162B',
        surfaceBg: '#FAFAF8',
        textColor: '#FAFAF8',
        bodyTextColor: '#14162B',
        accentColor: '#FF6B4A',
        secondaryAccent: '#8A8F98',
        headlineFont: 'Fraunces, Georgia, serif',
        bodyFont: 'Inter, sans-serif',
        fontPairingLabel: 'Fraunces + Inter',
        imageDirection: 'Darkroom prints, Hasselblad lenses, natural lighting portraits',
        taglineVibe: 'Visual Poetry'
      };
    case 'electrician':
    case 'plumber':
    case 'locksmith':
      return {
        category,
        name: 'Home Services & Repairs',
        baseBg: '#1A1D29',
        surfaceBg: '#FFFFFF',
        textColor: '#E4E7EC',
        bodyTextColor: '#1A1D29',
        accentColor: '#3B82F6',
        secondaryAccent: '#E0A526',
        headlineFont: 'Space Grotesk, sans-serif',
        bodyFont: 'Inter, sans-serif',
        fontPairingLabel: 'Space Grotesk + Inter',
        imageDirection: 'Safety gloves, multimeters, copper pipe joins',
        taglineVibe: 'Precision Utility'
      };
    default:
      return {
        category,
        name: 'Small Business',
        baseBg: '#14162B',
        surfaceBg: '#FAFAF8',
        textColor: '#FAFAF8',
        bodyTextColor: '#14162B',
        accentColor: '#4338CA',
        secondaryAccent: '#FF6B4A',
        headlineFont: 'Fraunces, Georgia, serif',
        bodyFont: 'Inter, sans-serif',
        fontPairingLabel: 'Fraunces + Inter',
        imageDirection: 'Authentic Indian storefronts and honest product displays',
        taglineVibe: 'Local Business Pride'
      };
  }
}
