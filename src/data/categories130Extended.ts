import { CategoryReferenceItem } from './categories130Data';

// Generates high quality, realistic Indian reference sites with distinct signatures
export const createRefSite = (
  catSlug: string,
  num: 1 | 2 | 3,
  name: string,
  domain: string,
  features: string,
  vibe: string,
  baseBg: string,
  surfaceBg: string,
  textColor: string,
  accentColor: string,
  secondaryAccent: string,
  headlineFont: string,
  bodyFont: string,
  layoutArchetype: 'bold-editorial' | 'clean-catalog' | 'luxury-minimal' | 'dense-commercial' | 'artisan-warm' | 'high-tech-dark' | 'split-hero-booking',
  heroArchetype: 'cinematic-overlay' | 'split-form' | 'product-showcase' | 'badge-card' | 'interactive-booking' | 'split-hero-booking',
  bookingStyle: any
) => ({
  id: `${catSlug}-ref-${num}`,
  name,
  url: `https://${domain}`,
  features,
  designSignature: {
    palette: {
      baseBg,
      surfaceBg,
      textColor,
      bodyTextColor: baseBg === '#ffffff' ? '#1f2937' : '#27272a',
      accentColor,
      secondaryAccent
    },
    typography: {
      headlineFont,
      bodyFont,
      fontPairingLabel: `${headlineFont.split(',')[0]} + ${bodyFont.split(',')[0]}`
    },
    layoutArchetype,
    heroArchetype,
    navStyle: num === 1 ? ('solid-compact' as const) : num === 2 ? ('floating-glass' as const) : ('action-heavy' as const),
    catalogStyle: num === 1 ? ('grid-cards' as const) : num === 2 ? ('visual-cards' as const) : ('dense-table' as const),
    bookingStyle,
    vibeTag: vibe
  }
});

export const EXTENDED_110_CATEGORIES: CategoryReferenceItem[] = [
  {
    id: 'electrician',
    categoryName: 'Electrician & Home Wiring',
    group: 'Services & Trades',
    industry: 'Home Maintenance',
    featuresToStudy: 'Fixed visiting inspection charge (₹199), safety circuit breaker diagnosis, emergency 30-min visit callout',
    references: [
      createRefSite('electrician', 1, 'Urban Company Electrician', 'urbancompany.com/electricians', 'Standardized rate card for fan/MCB/switchboard, background-verified technicians', 'Rapid Verified', '#0f172a', '#ffffff', '#ffffff', '#3b82f6', '#10b981', 'Plus Jakarta Sans, sans-serif', 'Inter, sans-serif', 'clean-catalog', 'split-form', 'appointment_slot'),
      createRefSite('electrician', 2, 'Havells Authorized Electricals', 'havells.com/service', 'Genuine copper wire & MCB installation, warranty stamp certification', 'Safety First', '#1e293b', '#f8fafc', '#ffffff', '#ef4444', '#f59e0b', 'Space Grotesk, sans-serif', 'DM Sans, sans-serif', 'dense-commercial', 'badge-card', 'appointment_slot'),
      createRefSite('electrician', 3, 'Mr Right Electrical Care', 'mrright.in/electrician', 'Transparent billing, post-service cleanup guarantee, instant WhatsApp call', 'Emergency Rapid', '#111827', '#fffbeb', '#fafafa', '#f59e0b', '#3b82f6', 'Space Grotesk, sans-serif', 'Inter, sans-serif', 'bold-editorial', 'split-hero-booking', 'appointment_slot')
    ]
  },
  {
    id: 'plumber',
    categoryName: 'Plumber & Sanitaryware',
    group: 'Services & Trades',
    industry: 'Sanitary & Plumbing Services',
    featuresToStudy: 'Motor/pipeline leakage diagnosis, tap & flush cistern replacement rates, water tank cleaning combos',
    references: [
      createRefSite('plumber', 1, 'Jaquar Care Services', 'jaquar.com/service', 'Luxury bathroom fixture replacement, genuine spare cartridge warranty', 'Luxury Sanitary', '#0a0a0a', '#ffffff', '#ffffff', '#0284c7', '#d4af37', 'Playfair Display, serif', 'Inter, sans-serif', 'luxury-minimal', 'cinematic-overlay', 'appointment_slot'),
      createRefSite('plumber', 2, 'Urban Company Plumbing', 'urbancompany.com/plumbers', '₹149 minimum inspection fee, motor fitting & geyser connection fixed rates', 'Direct Transparent', '#0f172a', '#f8fafc', '#ffffff', '#0ea5e9', '#10b981', 'Plus Jakarta Sans, sans-serif', 'Inter, sans-serif', 'clean-catalog', 'split-form', 'appointment_slot'),
      createRefSite('plumber', 3, 'Housejoy Emergency Plumber', 'housejoy.in/plumbing', 'Submersible pump repair, water heater descaling, 30-day service warranty', 'Rapid Action', '#1e1b4b', '#f0fdf4', '#f5f3ff', '#10b981', '#6366f1', 'Space Grotesk, sans-serif', 'DM Sans, sans-serif', 'bold-editorial', 'split-hero-booking', 'appointment_slot')
    ]
  },
  {
    id: 'tailor',
    categoryName: 'Tailor & Boutique Stitching',
    group: 'Services & Trades',
    industry: 'Apparel & Custom Tailoring',
    featuresToStudy: 'Doorstep measurement master visit, designer blouse neckline catalog, express 48-hr stitching turnaround',
    references: [
      createRefSite('tailor', 1, 'Binks Doorstep Stitching', 'getbinks.com', 'WhatsApp sketch consultation, fabric doorstep pickup, guaranteed perfect fit', 'Couture Ease', '#2c1810', '#fffaf5', '#faedcd', '#d4a373', '#bc6c25', 'Fraunces, Georgia, serif', 'DM Sans, sans-serif', 'artisan-warm', 'split-hero-booking', 'appointment_slot'),
      createRefSite('tailor', 2, 'Raymond Custom Tailoring', 'raymond.in/custom-tailoring', 'Bespoke men suit crafting, Italian wool fabric swatches, master cutter credentials', 'Gentleman Heritage', '#18181b', '#ffffff', '#ffffff', '#d4af37', '#71717a', 'Playfair Display, serif', 'Inter, sans-serif', 'luxury-minimal', 'cinematic-overlay', 'appointment_slot'),
      createRefSite('tailor', 3, 'Needles & Thimbles Online', 'needlesnthimbles.com', 'Online dress material alteration, bridal lehenga fitting, transparent price list', 'Modern Tailor', '#1e293b', '#faf5ff', '#ffffff', '#ec4899', '#8b5cf6', 'Plus Jakarta Sans, sans-serif', 'Inter, sans-serif', 'clean-catalog', 'split-form', 'appointment_slot')
    ]
  },
  {
    id: 'pharmacy',
    categoryName: 'Chemist & Medical Store',
    group: 'Healthcare',
    industry: 'Pharmaceuticals & OTC Medicine',
    featuresToStudy: 'WhatsApp prescription upload, flat 15%-20% medicine discount banner, chronic medicine refill reminder',
    references: [
      createRefSite('pharmacy', 1, 'Apollo Pharmacy Online', 'apollopharmacy.in', 'Genuine medicine guarantee, 2-hour doorstep delivery, diabetic care store', 'Apollo Trust', '#0f4c5c', '#ffffff', '#ffffff', '#0284c7', '#10b981', 'Plus Jakarta Sans, sans-serif', 'Inter, sans-serif', 'clean-catalog', 'split-form', 'whatsapp_order'),
      createRefSite('pharmacy', 2, 'Tata 1mg Health Store', '1mg.com', 'Lab tests at home, generic medicine alternative suggestions, verified pharmacist check', 'Evidence Health', '#1e293b', '#f8fafc', '#ffffff', '#ef4444', '#06b6d4', 'Space Grotesk, sans-serif', 'Inter, sans-serif', 'dense-commercial', 'product-showcase', 'whatsapp_order'),
      createRefSite('pharmacy', 3, 'Netmeds Daily Chemist', 'netmeds.com', 'Ayurvedic & wellness discounts, doctor consultation on call, monthly subscription', 'Wellness Refill', '#064e3b', '#ecfdf5', '#ecfdf5', '#10b981', '#f59e0b', 'Fraunces, Georgia, serif', 'DM Sans, sans-serif', 'artisan-warm', 'cinematic-overlay', 'whatsapp_order')
    ]
  },
  {
    id: 'driving',
    categoryName: 'Motor Driving School',
    group: 'Education & Coaching',
    industry: 'Driver Training & RTO Licensing',
    featuresToStudy: 'Dual-control car fleet (Swift, Baleno, i10), RTO driving license processing, morning/evening slot timings',
    references: [
      createRefSite('driving', 1, 'Maruti Suzuki Driving School', 'marutisuzukidrivingschool.com', 'Simulated virtual cockpit training, certified defensive driving syllabus, lady instructors', 'Maruti Quality', '#0e3868', '#ffffff', '#eef6ff', '#2563eb', '#f59e0b', 'Plus Jakarta Sans, sans-serif', 'Inter, sans-serif', 'clean-catalog', 'split-form', 'appointment_slot'),
      createRefSite('driving', 2, 'Institute of Driver Training (IDTR)', 'idtrindia.com', 'Hazard perception tracks, heavy commercial vs LMV licenses, government curriculum', 'Authorised Standards', '#0f172a', '#f8fafc', '#ffffff', '#10b981', '#3b82f6', 'Space Grotesk, sans-serif', 'Inter, sans-serif', 'dense-commercial', 'badge-card', 'appointment_slot'),
      createRefSite('driving', 3, 'New Star Motor Driving School', 'newstardriving.com', 'Doorstep pickup for sessions, permanent license test mock trial, weekend crash course', 'Fast-Track Passing', '#18181b', '#fffbeb', '#fafafa', '#f59e0b', '#ef4444', 'Space Grotesk, sans-serif', 'DM Sans, sans-serif', 'bold-editorial', 'split-hero-booking', 'appointment_slot')
    ]
  },
  {
    id: 'photography',
    categoryName: 'Wedding & Portrait Photography',
    group: 'Events & Hospitality',
    industry: 'Media & Visual Arts',
    featuresToStudy: 'Wedding cinematic teaser video player, date availability inquiry calendar, candid vs traditional package pricing',
    references: [
      createRefSite('photography', 1, 'Stories by Joseph Radhik', 'stories.josephradhik.com', 'Ultra-luxury bridal monochrome & vibrant color harmony, celebrity wedding portfolio', 'Celebrity Bridal', '#0a0a0a', '#141414', '#f5f5f5', '#d4af37', '#e5e5e5', 'Playfair Display, serif', 'Inter, sans-serif', 'luxury-minimal', 'cinematic-overlay', 'appointment_slot'),
      createRefSite('photography', 2, 'WeddingNama Visual Stories', 'weddingnama.com', 'Destination wedding films, drone cinematography reels, couple pre-shoot gallery', 'Cinematic Romance', '#1c1917', '#292524', '#f5f5f4', '#e11d48', '#fb7185', 'Fraunces, Georgia, serif', 'DM Sans, sans-serif', 'artisan-warm', 'product-showcase', 'appointment_slot'),
      createRefSite('photography', 3, 'The Wedding Story', 'theweddingstory.com', 'Emotional royal heirloom photo albums, 3-day wedding package inclusions, instant WhatsApp date inquiry', 'Royal Heritage', '#18181b', '#ffffff', '#ffffff', '#d97706', '#4f46e5', 'Space Grotesk, sans-serif', 'Inter, sans-serif', 'bold-editorial', 'split-hero-booking', 'appointment_slot')
    ]
  },
  {
    id: 'events',
    categoryName: 'Event Planner & Decorator',
    group: 'Events & Hospitality',
    industry: 'Event Management & Wedding Decor',
    featuresToStudy: 'Theme decoration lightbox (Sangeet, Haldi, Corporate), guest capacity budgeting, DJ & sound setup bundles',
    references: [
      createRefSite('events', 1, 'WedMeGood Event Planners', 'wedmegood.com', 'Verified vendor budget calculator, photogenic floral mandap galleries, couple reviews', 'Wedding Marketplace', '#701a75', '#fffdfa', '#ffffff', '#ec4899', '#f59e0b', 'Playfair Display, serif', 'Inter, sans-serif', 'luxury-minimal', 'cinematic-overlay', 'reservation_party'),
      createRefSite('events', 2, 'Wizcraft Global Entertainment', 'wizcraftworld.com', 'Large scale stadium & corporate gala events, celebrity stage design, brand launches', 'Spectacular Grandeur', '#0f172a', '#1e293b', '#ffffff', '#38bdf8', '#a855f7', 'Space Grotesk, sans-serif', 'Inter, sans-serif', 'high-tech-dark', 'product-showcase', 'reservation_party'),
      createRefSite('events', 3, 'FNP Weddings & Events', 'fnpweddings.com', 'Exotic international floral arrangements, luxury banquet decor packages, customized themes', 'Floral Grandeur', '#1f2421', '#faf9f6', '#ffffff', '#10b981', '#d4af37', 'Fraunces, Georgia, serif', 'DM Sans, sans-serif', 'artisan-warm', 'split-hero-booking', 'reservation_party')
    ]
  },
  {
    id: 'pets',
    categoryName: 'Pet Grooming & Vet Care',
    group: 'Healthcare',
    industry: 'Veterinary & Pet Wellness',
    featuresToStudy: 'Dog breed grooming package breakdown, rabies/DHPP vaccination tracker, organic flea bath treatments',
    references: [
      createRefSite('pets', 1, 'Heads Up For Tails Spa', 'headsupfortails.com', 'Organic pet shampoo treatments, breed specific de-shedding packages, spa salon photos', 'Pawsome Luxury', '#451a03', '#fffbeb', '#fef3c7', '#d97706', '#ca8a04', 'Fraunces, Georgia, serif', 'DM Sans, sans-serif', 'artisan-warm', 'cinematic-overlay', 'appointment_slot'),
      createRefSite('pets', 2, 'Supertails Doorstep Vet & Food', 'supertails.com', 'Telehealth video vet consultations, same-day royal canin kibble delivery, vaccination reminders', 'Modern Pet Care', '#0f172a', '#ffffff', '#ffffff', '#f97316', '#10b981', 'Plus Jakarta Sans, sans-serif', 'Inter, sans-serif', 'clean-catalog', 'split-form', 'appointment_slot'),
      createRefSite('pets', 3, 'Cessna Lifeline 24/7 Pet Hospital', 'cessnalifeline.com', 'Emergency pet ICU & surgery suite, canine blood bank, ultrasound diagnostics', 'Critical Vet Care', '#0e3868', '#f8fafc', '#ffffff', '#0284c7', '#ef4444', 'Space Grotesk, sans-serif', 'Inter, sans-serif', 'dense-commercial', 'badge-card', 'appointment_slot')
    ]
  },
  {
    id: 'locksmith',
    categoryName: '24hr Emergency Locksmith',
    group: 'Services & Trades',
    industry: 'Security & Access Solutions',
    featuresToStudy: '20-min emergency doorstep arrival countdown, computerized car key programming, digital smart lock installation',
    references: [
      createRefSite('locksmith', 1, 'Godrej Locking Solutions', 'godrejlocks.com', 'Biometric fingerprint deadbolts, brass mortise locks, key replacement support', 'Godrej Security', '#18181b', '#ffffff', '#ffffff', '#dc2626', '#f59e0b', 'Plus Jakarta Sans, sans-serif', 'Inter, sans-serif', 'clean-catalog', 'split-form', 'appointment_slot'),
      createRefSite('locksmith', 2, 'Yale Smart Lock Hub', 'yalehome.com/in', 'Mobile phone Bluetooth unlock, tamper alarm sensors, smart home integration rates', 'Smart Access', '#090d16', '#111827', '#f8fafc', '#facc15', '#38bdf8', 'Space Grotesk, sans-serif', 'Inter, sans-serif', 'high-tech-dark', 'product-showcase', 'appointment_slot'),
      createRefSite('locksmith', 3, 'Express 24x7 Locksmith India', '247locksmith.in', 'Instant SOS call button, lock opening without damage guarantee, laser duplicate keys', 'Emergency Rescue', '#7f1d1d', '#fff1f2', '#fef2f2', '#ef4444', '#f59e0b', 'Space Grotesk, sans-serif', 'DM Sans, sans-serif', 'bold-editorial', 'split-hero-booking', 'appointment_slot')
    ]
  },
  {
    id: 'computer',
    categoryName: 'Laptop & Computer Repair',
    group: 'Services & Trades',
    industry: 'IT Hardware & Support',
    featuresToStudy: 'Motherboard chip-level diagnosis, SSD & RAM upgrade speed comparison, refurbished MacBook inventory',
    references: [
      createRefSite('computer', 1, 'iFixit India Apple Repair', 'ifixit.com', 'Apple Silicon diagnostics, battery health replacement cycles, schematic micro-soldering', 'Hardware Precision', '#0f172a', '#1e293b', '#ffffff', '#0284c7', '#10b981', 'Space Grotesk, sans-serif', 'Inter, sans-serif', 'high-tech-dark', 'split-form', 'pickup_drop'),
      createRefSite('computer', 2, 'Nehru Place Hardware Hub', 'nehruplaceit.com', 'Custom gaming desktop PC builder with live wattage/FPS benchmark calculator', 'Tech Heavyweight', '#111827', '#ffffff', '#ffffff', '#f97316', '#2563eb', 'Plus Jakarta Sans, sans-serif', 'Inter, sans-serif', 'clean-catalog', 'product-showcase', 'pickup_drop'),
      createRefSite('computer', 3, 'Dell Authorized Support Clinic', 'dell.com/support/in', 'Onsite engineer warranty tickets, genuine OEM battery replacements, data recovery guarantee', 'Enterprise Grade', '#0e3868', '#f8fafc', '#ffffff', '#0076ce', '#f59e0b', 'Space Grotesk, sans-serif', 'DM Sans, sans-serif', 'dense-commercial', 'badge-card', 'pickup_drop')
    ]
  },
  {
    id: 'hardware',
    categoryName: 'Hardware & Industrial Paints',
    group: 'Retail & Wholesale',
    industry: 'Building Hardware & Tools',
    featuresToStudy: 'Asian Paints color code swatch book, Bosch power tools warranty, bulk contractor quotation WhatsApp drawer',
    references: [
      createRefSite('hardware', 1, 'Asian Paints Colour Idea Store', 'asianpaints.com', 'Visualizer tool for interior walls, Royale luxury emulsion vs exterior apex rates', 'Colour Authority', '#3b0764', '#faf5ff', '#ffffff', '#f59e0b', '#e11d48', 'Fraunces, Georgia, serif', 'Inter, sans-serif', 'artisan-warm', 'cinematic-overlay', 'whatsapp_order'),
      createRefSite('hardware', 2, 'Bosch Power Tools Pro', 'bosch-pt.co.in', 'Cordless drills, angle grinders, demo request form, safety gear checklist', 'Heavy Duty Pro', '#111827', '#ffffff', '#ffffff', '#dc2626', '#0284c7', 'Space Grotesk, sans-serif', 'Inter, sans-serif', 'dense-commercial', 'product-showcase', 'whatsapp_order'),
      createRefSite('hardware', 3, 'Kajaria Hardware & Fittings', 'kajariaceramics.com', 'Heavy brass door handles, stainless steel hinges, kitchen baskets catalog', 'Architectural Brass', '#18181b', '#fffbeb', '#fafafa', '#d4af37', '#71717a', 'Playfair Display, serif', 'DM Sans, sans-serif', 'luxury-minimal', 'split-hero-booking', 'whatsapp_order')
    ]
  },
  {
    id: 'furniture',
    categoryName: 'Solid Teak & Sheesham Furniture',
    group: 'Retail & Wholesale',
    industry: 'Home Furnishing & Woodcraft',
    featuresToStudy: 'Natural wood grain finish selector (Honey, Walnut, Teak), custom dining table dimensions, lifetime termite warranty',
    references: [
      createRefSite('furniture', 1, 'WoodenStreet Custom Sheesham', 'woodenstreet.com', 'Solid sheesham wood sofa sets, fabric customization swatches, free home delivery & assembly', 'Artisan Woodcraft', '#3f1a04', '#fffbeb', '#fef3c7', '#d97706', '#ca8a04', 'Fraunces, Georgia, serif', 'Inter, sans-serif', 'artisan-warm', 'cinematic-overlay', 'whatsapp_order'),
      createRefSite('furniture', 2, 'Pepperfry Studio Experience', 'pepperfry.com', 'Virtual AR room placement, interior consultant appointment booking, wedding furniture sets', 'Contemporary Home', '#18181b', '#ffffff', '#ffffff', '#f97316', '#2563eb', 'Plus Jakarta Sans, sans-serif', 'Inter, sans-serif', 'clean-catalog', 'split-form', 'whatsapp_order'),
      createRefSite('furniture', 3, 'Godrej Interio Ergonomic Living', 'godrejinterio.com', 'Health-first spine support recliners, modular wardrobes, green certification', 'Precision Comfort', '#0f172a', '#f8fafc', '#ffffff', '#dc2626', '#10b981', 'Space Grotesk, sans-serif', 'DM Sans, sans-serif', 'dense-commercial', 'badge-card', 'whatsapp_order')
    ]
  },
  {
    id: 'bakery',
    categoryName: 'Artisan Bakery & Cake Studio',
    group: 'Food & Dining',
    industry: 'Bakery & Patisserie',
    featuresToStudy: 'Custom tiered birthday cake designer, eggless/gluten-free filters, daily fresh sourdough bread morning alerts',
    references: [
      createRefSite('bakery', 1, 'Theobroma Patisserie', 'theobroma.in', 'Iconic brownies, warm chocolate chip cookies, seasonal fruit tarts, online celebration order', 'Brownie Capital', '#3f1a04', '#fdfbf7', '#fef3c7', '#d4a373', '#e11d48', 'Playfair Display, serif', 'Inter, sans-serif', 'artisan-warm', 'cinematic-overlay', 'whatsapp_order'),
      createRefSite('bakery', 2, 'Bakingo Midnight Delivery', 'bakingo.com', 'Midnight 12 AM doorstep cake delivery, photo pinata cakes, live delivery slot selector', 'Celebration Speed', '#18181b', '#ffffff', '#ffffff', '#f43f5e', '#facc15', 'Plus Jakarta Sans, sans-serif', 'Inter, sans-serif', 'clean-catalog', 'split-form', 'whatsapp_order'),
      createRefSite('bakery', 3, 'Le15 Patisserie by Pooja Dhingra', 'le15.com', 'French macarons, premium packaged hot chocolate mixes, pastel Paris aesthetic', 'Parisian Chic', '#831843', '#fff5f7', '#fff1f2', '#ec4899', '#f59e0b', 'Fraunces, Georgia, serif', 'DM Sans, sans-serif', 'luxury-minimal', 'product-showcase', 'whatsapp_order')
    ]
  },
  {
    id: 'icecream',
    categoryName: 'Ice Cream Parlour & Gelato',
    group: 'Food & Dining',
    industry: 'Desserts & Frozen Treats',
    featuresToStudy: '100% real dairy & fresh fruit guarantee, party tub scoops selector, cold stone mix-in counter showcase',
    references: [
      createRefSite('icecream', 1, 'Naturals Ice Cream', 'naturalicecreams.in', 'Real Sitaphal, Alphonso Mango, and Tender Coconut seasonal fruit calendars, 3-ingredient purity', 'Pure Fruit Fresh', '#14532d', '#f0fdf4', '#f0fdf4', '#22c55e', '#f59e0b', 'Fraunces, Georgia, serif', 'Inter, sans-serif', 'artisan-warm', 'cinematic-overlay', 'whatsapp_order'),
      createRefSite('icecream', 2, 'Baskin Robbins 31 Flavours', 'baskinrobbinsindia.com', 'Monthly new flavour scoops, ice cream cakes, dry ice 45-min transit guarantee', 'Fun & Celebration', '#1e1b4b', '#ffffff', '#ffffff', '#ec4899', '#0284c7', 'Plus Jakarta Sans, sans-serif', 'Inter, sans-serif', 'clean-catalog', 'split-form', 'whatsapp_order'),
      createRefSite('icecream', 3, 'Milano Ice Cream Gelateria', 'milanogelato.in', 'Authentic Italian artisanal churned gelato, sugar-free sorbets, waffle cone aroma', 'Italian Craft', '#27272a', '#fafafa', '#fafafa', '#e11d48', '#d4af37', 'Playfair Display, serif', 'DM Sans, sans-serif', 'luxury-minimal', 'product-showcase', 'whatsapp_order')
    ]
  },
  {
    id: 'travel',
    categoryName: 'Tour Operator & Holiday Planner',
    group: 'Events & Hospitality',
    industry: 'Travel & Tourism',
    featuresToStudy: 'Day-by-day itinerary accordion with hotel photos, per-person all-inclusive package pricing, visa assistance badge',
    references: [
      createRefSite('travel', 1, 'MakeMyTrip Holiday Packages', 'makemytrip.com/holidays', 'Kashmir, Kerala, and Europe customized tours, flight+hotel combo discounts', 'Holiday Giant', '#0f172a', '#ffffff', '#ffffff', '#ef4444', '#0ea5e9', 'Plus Jakarta Sans, sans-serif', 'Inter, sans-serif', 'clean-catalog', 'split-form', 'reservation_party'),
      createRefSite('travel', 2, 'SOTC India World Travel', 'sOTC.in', 'Senior citizen curated tours, Indian pure-veg chef on European tours, group departures', 'Trusted Escorted', '#1e3a8a', '#f8fafc', '#ffffff', '#f59e0b', '#2563eb', 'Space Grotesk, sans-serif', 'Inter, sans-serif', 'dense-commercial', 'badge-card', 'reservation_party'),
      createRefSite('travel', 3, 'Thrillophilia Curated Escapes', 'thrillophilia.com', 'Adventure Ladakh biking expeditions, luxury desert glamping, instant itinerary WhatsApp download', 'Adventure Escape', '#18181b', '#fffbeb', '#fafafa', '#f97316', '#10b981', 'Fraunces, Georgia, serif', 'DM Sans, sans-serif', 'artisan-warm', 'cinematic-overlay', 'reservation_party')
    ]
  },
  {
    id: 'tiffin',
    categoryName: 'Ghar Ka Tiffin & Meal Service',
    group: 'Food & Dining',
    industry: 'Food Delivery & Homestyle Meals',
    featuresToStudy: '7-day daily changing menu schedule, pure wheat rotis with zero soda guarantee, 3-day trial pack booking',
    references: [
      createRefSite('tiffin', 1, 'Maa Ki Rasoi Homemade Meals', 'maakirasoi.in', 'Mother homestyle recipes, low-oil diabetic friendly sabzi, student & bachelor discounts', 'Homestyle Care', '#451a03', '#fffbeb', '#fef3c7', '#d97706', '#ca8a04', 'Fraunces, Georgia, serif', 'Inter, sans-serif', 'artisan-warm', 'cinematic-overlay', 'whatsapp_order'),
      createRefSite('tiffin', 2, 'EatFit Everyday Healthy Meals', 'eatfit.in', 'Calorie counted thalis, unpolished brown rice combos, contactless delivery insulated bags', 'Nutritious Modern', '#0f172a', '#ffffff', '#ffffff', '#10b981', '#6366f1', 'Plus Jakarta Sans, sans-serif', 'Inter, sans-serif', 'clean-catalog', 'split-form', 'whatsapp_order'),
      createRefSite('tiffin', 3, 'Mumbai Dabbawala Heritage Service', 'mumbaidabbawala.in', 'Six-sigma precision delivery, stainless steel multi-tier tiffin, weekly billing', 'Legendary Heritage', '#18181b', '#fafafa', '#fafafa', '#ea580c', '#facc15', 'Space Grotesk, sans-serif', 'DM Sans, sans-serif', 'bold-editorial', 'split-hero-booking', 'whatsapp_order')
    ]
  },
  {
    id: 'florist',
    categoryName: 'Florist & Flower Studio',
    group: 'Retail & Wholesale',
    industry: 'Floriculture & Gifting',
    featuresToStudy: 'Same-day 2-hour floral delivery guarantee, fresh morning rose bouquets, anniversary midnight delivery option',
    references: [
      createRefSite('florist', 1, 'Ferns N Petals (FNP)', 'fnp.com', 'Express floral delivery with greeting cards, exotic Dutch orchids, birthday hampers', 'Floral Giant', '#064e3b', '#ffffff', '#ffffff', '#10b981', '#f59e0b', 'Playfair Display, serif', 'Inter, sans-serif', 'luxury-minimal', 'cinematic-overlay', 'whatsapp_order'),
      createRefSite('florist', 2, 'Interflora India Luxury Flowers', 'interflora.in', 'Handcrafted European designer bouquets, hand-tied satin ribbons, bespoke floral installations', 'European Chic', '#18181b', '#fdfbf7', '#fafafa', '#f43f5e', '#d4af37', 'Fraunces, Georgia, serif', 'DM Sans, sans-serif', 'artisan-warm', 'product-showcase', 'whatsapp_order'),
      createRefSite('florist', 3, 'FlowerAura Express Delivery', 'floweraura.com', 'Sub-₹499 cheerful arrangements, indoor air-purifying plants with ceramic pots, WhatsApp order', 'Cheerful Budget', '#1e1b4b', '#fdf4ff', '#ffffff', '#d946ef', '#06b6d4', 'Plus Jakarta Sans, sans-serif', 'Inter, sans-serif', 'clean-catalog', 'split-form', 'whatsapp_order')
    ]
  },
  {
    id: 'printing',
    categoryName: 'Printing Press & Digital Xerox',
    group: 'Services & Trades',
    industry: 'Commercial Printing & Stationery',
    featuresToStudy: 'Direct PDF file upload via WhatsApp, visiting card gsm thickness chart (350gsm matte/gloss), per-page Xerox price slab',
    references: [
      createRefSite('printing', 1, 'Printland Corporate Stationery', 'printland.in', 'Customized company letterheads, lanyards, metal visiting cards, bulk price discount tiers', 'Corporate Print', '#0f172a', '#ffffff', '#ffffff', '#0284c7', '#f59e0b', 'Space Grotesk, sans-serif', 'Inter, sans-serif', 'clean-catalog', 'split-form', 'whatsapp_order'),
      createRefSite('printing', 2, 'Vistaprint India', 'vistaprint.in', 'Free online template designer, high-resolution UV print badges, door-to-door delivery', 'Design & Print', '#111827', '#f8fafc', '#ffffff', '#2563eb', '#10b981', 'Plus Jakarta Sans, sans-serif', 'Inter, sans-serif', 'dense-commercial', 'product-showcase', 'whatsapp_order'),
      createRefSite('printing', 3, 'Printo Instant Digital Hub', 'printo.in', 'Same-day walk-in printing, architectural blueprint CAD plotting, acrylic signboards', 'Express Hub', '#18181b', '#fffbeb', '#fafafa', '#ef4444', '#3b82f6', 'Space Grotesk, sans-serif', 'DM Sans, sans-serif', 'bold-editorial', 'split-hero-booking', 'whatsapp_order')
    ]
  },
  {
    id: 'construction',
    categoryName: 'Construction & Building Materials',
    group: 'Industrial & B2B',
    industry: 'Civil Construction & Hardware',
    featuresToStudy: 'TMT 550D rebar per-ton rates, cement brand price list (UltraTech, Ambuja), full truckload delivery radius',
    references: [
      createRefSite('construction', 1, 'Infra.Market B2B Building Store', 'infra.market', 'Quality lab tested concrete aggregates, direct contractor credit lines, bulk tanker delivery', 'B2B Scale', '#181e29', '#f8fafc', '#ffffff', '#f59e0b', '#3b82f6', 'Space Grotesk, sans-serif', 'Inter, sans-serif', 'high-tech-dark', 'split-form', 'whatsapp_order'),
      createRefSite('construction', 2, 'UltraTech Cement Authorized Dealer', 'ultratechcement.com', 'Home building expert advice, concrete strength calculators, moisture barrier solutions', 'Number One Cement', '#0e3868', '#ffffff', '#ffffff', '#f59e0b', '#ef4444', 'Plus Jakarta Sans, sans-serif', 'Inter, sans-serif', 'dense-commercial', 'badge-card', 'whatsapp_order'),
      createRefSite('construction', 3, 'Tata Tiscon Superlinks Portal', 'tatatiscon.co.in', 'Earthquake-resistant steel rebars, green pro certified bars, transparent bill of materials', 'Tata Steel Strength', '#0f172a', '#ffffff', '#ffffff', '#0284c7', '#10b981', 'Space Grotesk, sans-serif', 'DM Sans, sans-serif', 'clean-catalog', 'product-showcase', 'whatsapp_order')
    ]
  }
];
