import { TemplateDefinition, BusinessCategory, BookingPatternType } from '../types';

export const TEMPLATES: TemplateDefinition[] = [
  // 1. Kirana / Super Mart
  {
    id: 'kirana-clean',
    name: 'Super Mart & Essentials Store',
    category: 'kirana',
    description: 'High-density grocery grid, daily staples catalog, delivery radius banner, and WhatsApp list ordering.',
    style: 'Fresh Retail',
    thumbnail: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80',
    themeColor: '#15803d',
    accentColor: '#16a34a',
    fontFamily: 'Plus Jakarta Sans',
    vibe: 'Daily Mart'
  },
  // 2. Mobile Repair
  {
    id: 'repair-tech',
    name: 'Tech Clinic & Gadget Repair',
    category: 'repair',
    description: 'Clean tech cyan and slate with device drop-off form, ticket tracking, and repair price list.',
    style: 'Modern Tech',
    thumbnail: 'https://images.unsplash.com/photo-1597740985671-2a8a3b80532e?auto=format&fit=crop&w=600&q=80',
    themeColor: '#0284c7',
    accentColor: '#0ea5e9',
    fontFamily: 'Plus Jakarta Sans',
    vibe: 'Gadget Care'
  },
  // 3. Mithai & Sweet Shop
  {
    id: 'sweets-royal',
    name: 'Royal Heritage Mithai & Farsan',
    category: 'sweets',
    description: 'Warm gold and deep maroon with festive gift boxes, per kg weights, and wedding bulk orders.',
    style: 'Royal Traditional',
    thumbnail: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80',
    themeColor: '#831843',
    accentColor: '#d97706',
    fontFamily: 'Playfair Display',
    vibe: 'Festive Confection'
  },
  // 4. Dry Cleaners & Laundry
  {
    id: 'laundry-fresh',
    name: 'Fresh Linen & Eco Dry Cleaners',
    category: 'laundry',
    description: 'Clean airy teal and mint with doorstep pickup scheduling, time-slot selector, and garment tracker.',
    style: 'Eco Crisp',
    thumbnail: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=600&q=80',
    themeColor: '#0f766e',
    accentColor: '#14b8a6',
    fontFamily: 'DM Sans',
    vibe: 'Linen Care'
  },
  // 5. Dhaba & Indian Restaurant
  {
    id: 'restaurant-dhaba',
    name: 'Highway Dhaba & Family Dine',
    category: 'restaurant',
    description: 'Earthy terracotta, clay oven specials, table reservation with party size, and veg/non-veg menus.',
    style: 'Warm Heritage',
    thumbnail: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80',
    themeColor: '#9a3412',
    accentColor: '#ea580c',
    fontFamily: 'Plus Jakarta Sans',
    vibe: 'Desi Zaika'
  },
  // 6. Electrician
  {
    id: 'electrician-bold',
    name: '24x7 Electricals & Home Wiring',
    category: 'electrician',
    description: 'High-contrast safety amber and slate with transparent visit charges, urgent dispatch, and area map.',
    style: 'Industrial Pro',
    thumbnail: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80',
    themeColor: '#1e293b',
    accentColor: '#f59e0b',
    fontFamily: 'Plus Jakarta Sans',
    vibe: 'Rapid Fix'
  },
  // 7. Plumber
  {
    id: 'plumber-pro',
    name: 'SafePlumb 24hr Emergency Care',
    category: 'plumber',
    description: 'Emergency badges, one-tap hotline, sanitary rate card, and pipe leak visit booking.',
    style: 'Clean Utility',
    thumbnail: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80',
    themeColor: '#0369a1',
    accentColor: '#38bdf8',
    fontFamily: 'Plus Jakarta Sans',
    vibe: 'Rapid Sanitary'
  },
  // 8. Tailor & Boutique
  {
    id: 'tailor-couture',
    name: 'Bespoke Tailoring & Designer Studio',
    category: 'tailor',
    description: 'Elegant plum and gold with measurement slot booking, alteration turnaround, and stitching rates.',
    style: 'Bespoke Atelier',
    thumbnail: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=600&q=80',
    themeColor: '#581c87',
    accentColor: '#c084fc',
    fontFamily: 'Playfair Display',
    vibe: 'Couture Needle'
  },
  // 9. Pharmacy & Chemist
  {
    id: 'pharmacy-trust',
    name: 'Sanjivani 24hr Chemist & Care',
    category: 'pharmacy',
    description: 'Medical green with WhatsApp prescription button, night service badge, and home delivery.',
    style: 'Clinical Healthcare',
    thumbnail: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=600&q=80',
    themeColor: '#047857',
    accentColor: '#10b981',
    fontFamily: 'Plus Jakarta Sans',
    vibe: 'Life Care'
  },
  // 10. Tuition & Coaching
  {
    id: 'coaching-clean',
    name: 'Premier Coaching & Test Series',
    category: 'coaching',
    description: 'Academic blue with batch schedules, faculty credentials, fee structures, and free demo booking.',
    style: 'Prestigious Academic',
    thumbnail: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80',
    themeColor: '#1e3a8a',
    accentColor: '#2563eb',
    fontFamily: 'Plus Jakarta Sans',
    vibe: 'Success Academy'
  },
  // 11. Driving School
  {
    id: 'driving-pro',
    name: 'Motor Driving School & RTO Clinic',
    category: 'driving',
    description: 'Speedway orange and navy with license courses, simulator info, and morning/evening slot bookings.',
    style: 'Dynamic Automotive',
    thumbnail: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=600&q=80',
    themeColor: '#c2410c',
    accentColor: '#f97316',
    fontFamily: 'Plus Jakarta Sans',
    vibe: 'Road Master'
  },
  // 12. Photography Studio
  {
    id: 'photo-cinematic',
    name: 'Cinematic Wedding & Portrait Studio',
    category: 'photography',
    description: 'Monochrome darkroom elegance with portfolio lightbox and wedding date availability checker.',
    style: 'Editorial Dark',
    thumbnail: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=80',
    themeColor: '#111827',
    accentColor: '#e5e7eb',
    fontFamily: 'Playfair Display',
    vibe: 'Visual Poetry'
  },
  // 13. Event Planner & Decorator
  {
    id: 'events-royal',
    name: 'Royal Celebrations & Wedding Decor',
    category: 'events',
    description: 'Festive champagne and magenta with event packages, theme photos, and guest count inquiry.',
    style: 'Festive Luxury',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
    themeColor: '#701a75',
    accentColor: '#d946ef',
    fontFamily: 'Playfair Display',
    vibe: 'Utsav Grand'
  },
  // 14. Pet Grooming & Shop
  {
    id: 'pets-cozy',
    name: 'Pet Wellness & Grooming Spa',
    category: 'pets',
    description: 'Friendly goldenrod and emerald with grooming packages by pet weight and boarding enquiry.',
    style: 'Playful Warm',
    thumbnail: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=600&q=80',
    themeColor: '#b45309',
    accentColor: '#f59e0b',
    fontFamily: 'DM Sans',
    vibe: 'Paws & Purrs'
  },
  // 15. Locksmith & Key Maker
  {
    id: 'locksmith-urgent',
    name: '24hr Emergency Locksmith & Keys',
    category: 'locksmith',
    description: 'High visibility crimson and black with instant emergency call button and computerized key pricing.',
    style: 'Emergency Rapid',
    thumbnail: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80',
    themeColor: '#991b1b',
    accentColor: '#ef4444',
    fontFamily: 'Plus Jakarta Sans',
    vibe: 'Lock & Safety'
  },
  // 16. Computer & Laptop Repair
  {
    id: 'computer-tech',
    name: 'Chipset Laptop Lab & Refurb Mart',
    category: 'computer',
    description: 'Silicon blue and slate with motherboard diagnosis, upgrade price chart, and refurbished laptop catalog.',
    style: 'Pro Hardware',
    thumbnail: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80',
    themeColor: '#1e3a8a',
    accentColor: '#38bdf8',
    fontFamily: 'Plus Jakarta Sans',
    vibe: 'Silicon Lab'
  },
  // 17. Hardware & Paints
  {
    id: 'hardware-tools',
    name: 'Industrial Hardware & Asian Paints',
    category: 'hardware',
    description: 'Steel grey and vermilion with power tools, plumbing fixtures, paint tints, and bulk quotation.',
    style: 'Heavy Duty',
    thumbnail: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=600&q=80',
    themeColor: '#334155',
    accentColor: '#f97316',
    fontFamily: 'Plus Jakarta Sans',
    vibe: 'Build Solid'
  },
  // 18. Furniture Studio
  {
    id: 'furniture-teak',
    name: 'Solid Teak & Sheesham Living',
    category: 'furniture',
    description: 'Rich walnut and brass with custom sofa dining catalogs, wood finish guides, and bespoke quotes.',
    style: 'Artisan Wood',
    thumbnail: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
    themeColor: '#451a03',
    accentColor: '#b45309',
    fontFamily: 'Playfair Display',
    vibe: 'Heritage Living'
  },
  // 19. Bakery & Cakes
  {
    id: 'cafe-minimal',
    name: 'Artisan Bakes & Custom Cakes',
    category: 'bakery',
    description: 'Warm cocoa and pastel cream with daily fresh bread, custom tiered cake designer, and delivery slots.',
    style: 'Artisan Oven',
    thumbnail: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    themeColor: '#78350f',
    accentColor: '#f59e0b',
    fontFamily: 'DM Sans',
    vibe: 'Sweet Aroma'
  },
  // 20. Ice Cream & Gelato
  {
    id: 'icecream-fresh',
    name: 'Fresh Fruit Ice Cream & Gelateria',
    category: 'icecream',
    description: 'Vibrant berry and waffle tones with seasonal fruit flavors, sundae tubs, and birthday party packs.',
    style: 'Chilled Sweet',
    thumbnail: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=600&q=80',
    themeColor: '#be185d',
    accentColor: '#f43f5e',
    fontFamily: 'Plus Jakarta Sans',
    vibe: 'Pure Indulgence'
  },
  // 21. Car Wash & Auto Spa
  {
    id: 'carwash-gloss',
    name: 'Gloss Detailing & High-Pressure Wash',
    category: 'carwash',
    description: 'Automotive gunmetal and electric blue with vehicle size package tiers and slot reservations.',
    style: 'Precision Auto',
    thumbnail: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=600&q=80',
    themeColor: '#0f172a',
    accentColor: '#38bdf8',
    fontFamily: 'Plus Jakarta Sans',
    vibe: 'Mirror Shine'
  },
  // 22. Gym & Fitness
  {
    id: 'gym-bold',
    name: 'IronPeak Strength & CrossFit Arena',
    category: 'gym',
    description: 'Obsidian and crimson with gym membership pricing, coach bios, and free trial workout pass.',
    style: 'Aggressive Athletic',
    thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80',
    themeColor: '#09090b',
    accentColor: '#e11d48',
    fontFamily: 'Plus Jakarta Sans',
    vibe: 'Torch Limits'
  },
  // 23. Real Estate Broker
  {
    id: 'realty-prime',
    name: 'Prime Spaces Property Advisory',
    category: 'realestate',
    description: 'Navy and polished brass with residential/commercial listings, locality insights, and site tour booking.',
    style: 'Corporate Trust',
    thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
    themeColor: '#1e3a8a',
    accentColor: '#eab308',
    fontFamily: 'Plus Jakarta Sans',
    vibe: 'Prime Realty'
  },
  // 24. Travel & Holiday Planner
  {
    id: 'travel-voyage',
    name: 'Himalayan Escapes & Tour Planners',
    category: 'travel',
    description: 'Sky blue and alpine green with curated domestic & international itineraries and custom quote booking.',
    style: 'Wanderlust Crisp',
    thumbnail: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80',
    themeColor: '#0369a1',
    accentColor: '#06b6d4',
    fontFamily: 'Plus Jakarta Sans',
    vibe: 'Discover India'
  },
  // 25. Tiffin & Meal Service
  {
    id: 'tiffin-homely',
    name: 'Pure Desi Ghar Ka Tiffin & Catering',
    category: 'tiffin',
    description: 'Homely saffron and olive green with weekly rotating menus, office lunch delivery, and trial tiffin.',
    style: 'Home Hearth',
    thumbnail: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    themeColor: '#b45309',
    accentColor: '#15803d',
    fontFamily: 'Plus Jakarta Sans',
    vibe: 'Maa Ke Haath Ka'
  },
  // 26. Florist & Flower Studio
  {
    id: 'florist-blossom',
    name: 'Blossom Express Exotic Florals',
    category: 'florist',
    description: 'Blush rose and sage green with flower bouquets, midnight anniversary delivery, and sympathy wreaths.',
    style: 'Botanical Chic',
    thumbnail: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=600&q=80',
    themeColor: '#be123c',
    accentColor: '#f43f5e',
    fontFamily: 'Playfair Display',
    vibe: 'Fresh Petals'
  },
  // 27. Printing & Xerox
  {
    id: 'printing-speed',
    name: 'PrintPoint Color Press & Xerox Hub',
    category: 'printing',
    description: 'Cyan, magenta, yellow, black matrix with instant "WhatsApp your PDF file" button and per-page rates.',
    style: 'Modern Print Hub',
    thumbnail: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=600&q=80',
    themeColor: '#0284c7',
    accentColor: '#ec4899',
    fontFamily: 'Plus Jakarta Sans',
    vibe: 'Print Fast'
  },
  // Standard Clinic
  {
    id: 'clinic-modern',
    name: 'Modern Dental & Healthcare Clinic',
    category: 'clinic',
    description: 'Clinical cyan and white with specialist doctor credentials, OPD hours, and painless dental pricing.',
    style: 'Clinical Clean',
    thumbnail: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80',
    themeColor: '#0369a1',
    accentColor: '#0284c7',
    fontFamily: 'Plus Jakarta Sans',
    vibe: 'Specialist Care'
  },
  // Standard Salon
  {
    id: 'salon-luxury',
    name: 'Luxury Salon, Spa & Bridal Lounge',
    category: 'salon',
    description: 'Velvet magenta and gold with bridal makeovers, balayage, and salon time-rate cards.',
    style: 'Luxury Glamour',
    thumbnail: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80',
    themeColor: '#831843',
    accentColor: '#ec4899',
    fontFamily: 'Playfair Display',
    vibe: 'Bridal & Glow'
  },
  // Standard Retail Saree
  {
    id: 'retail-boutique',
    name: 'Handloom Saree & Bridal Boutique',
    category: 'retail',
    description: 'Royal purple and gold showcasing pure silks, designer lehengas, and WhatsApp video shopping.',
    style: 'Editorial Chic',
    thumbnail: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80',
    themeColor: '#4c1d95',
    accentColor: '#8b5cf6',
    fontFamily: 'Playfair Display',
    vibe: 'Designer Silk'
  },
  // Standard Cafe
  {
    id: 'cafe-modern',
    name: 'Artisan Coffee Roasters & Bakery',
    category: 'cafe',
    description: 'Warm espresso and amber with pour-over coffee, fresh sourdough, and courtyard dining.',
    style: 'Warm & Artisanal',
    thumbnail: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80',
    themeColor: '#78350f',
    accentColor: '#d97706',
    fontFamily: 'Plus Jakarta Sans',
    vibe: 'Modern Bistro'
  },
  // Construction & Building Materials E-Commerce
  {
    id: 'construction-kart',
    name: 'ConstructionKart Building Materials E-Commerce',
    category: 'construction',
    description: 'Industrial heavy slate and safety amber with wholesale contractor RFQ, bulk truck delivery, and cement/steel pricing.',
    style: 'Industrial Heavy Duty',
    thumbnail: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=600&q=80',
    themeColor: '#181E29',
    accentColor: '#F59E0B',
    fontFamily: 'Space Grotesk',
    vibe: 'Contractor E-Commerce'
  }
];

export const CATEGORY_INFO: Record<string, { label: string; icon: string; defaultBooking: BookingPatternType; defaultCta: string }> = {
  kirana: { label: 'Kirana & Super Mart', icon: 'ShoppingBag', defaultBooking: 'whatsapp_order', defaultCta: 'WhatsApp Grocery List' },
  repair: { label: 'Mobile & Tablet Repair', icon: 'Smartphone', defaultBooking: 'pickup_drop', defaultCta: 'Book Device Drop-off' },
  sweets: { label: 'Mithai & Sweet Shop', icon: 'Cake', defaultBooking: 'whatsapp_order', defaultCta: 'Pre-Order Sweets Box' },
  laundry: { label: 'Dry Cleaning & Laundry', icon: 'Sparkles', defaultBooking: 'pickup_drop', defaultCta: 'Schedule Free Pickup' },
  restaurant: { label: 'Restaurant & Dhaba', icon: 'Utensils', defaultBooking: 'reservation_party', defaultCta: 'Reserve Dining Table' },
  electrician: { label: 'Electrician & Handyman', icon: 'Zap', defaultBooking: 'appointment_slot', defaultCta: 'Book Electrician Visit' },
  plumber: { label: 'Plumber & Sanitary', icon: 'Wrench', defaultBooking: 'appointment_slot', defaultCta: 'Book Plumber Visit' },
  tailor: { label: 'Tailor & Boutique Stitching', icon: 'Scissors', defaultBooking: 'appointment_slot', defaultCta: 'Book Measurement Slot' },
  pharmacy: { label: 'Chemist & Medical Store', icon: 'Shield', defaultBooking: 'whatsapp_order', defaultCta: 'WhatsApp Prescription' },
  coaching: { label: 'Tuition & Coaching Institute', icon: 'GraduationCap', defaultBooking: 'appointment_slot', defaultCta: 'Book Free Demo Class' },
  driving: { label: 'Motor Driving School', icon: 'Navigation', defaultBooking: 'appointment_slot', defaultCta: 'Book Driving Slot' },
  photography: { label: 'Photography & Wedding Studio', icon: 'Camera', defaultBooking: 'appointment_slot', defaultCta: 'Check Date Availability' },
  events: { label: 'Event Planner & Decorator', icon: 'PartyPopper', defaultBooking: 'reservation_party', defaultCta: 'Enquire Event Date' },
  pets: { label: 'Pet Grooming & Vet Care', icon: 'HeartHandshake', defaultBooking: 'appointment_slot', defaultCta: 'Book Pet Grooming Slot' },
  locksmith: { label: '24hr Emergency Locksmith', icon: 'Key', defaultBooking: 'appointment_slot', defaultCta: 'Call Emergency Locksmith' },
  computer: { label: 'Laptop & PC Repair / Sales', icon: 'Monitor', defaultBooking: 'pickup_drop', defaultCta: 'Book Laptop Diagnostic' },
  hardware: { label: 'Hardware & Paint Shop', icon: 'Hammer', defaultBooking: 'whatsapp_order', defaultCta: 'Send Requirement List' },
  furniture: { label: 'Furniture Studio & Carpentry', icon: 'Armchair', defaultBooking: 'whatsapp_order', defaultCta: 'Enquire Custom Furniture' },
  bakery: { label: 'Artisan Bakery & Cake Shop', icon: 'Cake', defaultBooking: 'whatsapp_order', defaultCta: 'Order Custom Cake' },
  icecream: { label: 'Ice Cream Parlour & Desserts', icon: 'IceCream', defaultBooking: 'whatsapp_order', defaultCta: 'Order Party Ice Cream Tub' },
  carwash: { label: 'Car Wash & Auto Detailing', icon: 'Car', defaultBooking: 'appointment_slot', defaultCta: 'Book Car Detailing Slot' },
  gym: { label: 'Gym, CrossFit & Yoga Studio', icon: 'Dumbbell', defaultBooking: 'appointment_slot', defaultCta: 'Claim 1-Day Trial Pass' },
  hotel: { label: 'Hotel, Resort & Luxury Stays', icon: 'Building', defaultBooking: 'reservation_party', defaultCta: 'Book Room & Suite' },
  realestate: { label: 'Real Estate Agent / Broker', icon: 'Building', defaultBooking: 'reservation_party', defaultCta: 'Book Free Property Visit' },
  travel: { label: 'Tour Operator & Holiday Planner', icon: 'Plane', defaultBooking: 'reservation_party', defaultCta: 'Request Holiday Itinerary' },
  tiffin: { label: 'Ghar Ka Tiffin & Meal Service', icon: 'UtensilsCrossed', defaultBooking: 'reservation_party', defaultCta: 'Subscribe Tiffin Plan' },
  florist: { label: 'Florist & Fresh Flower Studio', icon: 'Flower2', defaultBooking: 'whatsapp_order', defaultCta: 'Order Flower Bouquet' },
  printing: { label: 'Printing, Xerox & Stationery', icon: 'Printer', defaultBooking: 'whatsapp_order', defaultCta: 'Send File for Printing' },
  clinic: { label: 'Doctor Clinic & Dental Care', icon: 'Stethoscope', defaultBooking: 'appointment_slot', defaultCta: 'Book OPD Appointment' },
  salon: { label: 'Salon, Spa & Beauty Lounge', icon: 'Scissors', defaultBooking: 'appointment_slot', defaultCta: 'Book Beauty Slot' },
  retail: { label: 'Boutique & Retail Shop', icon: 'ShoppingBag', defaultBooking: 'whatsapp_order', defaultCta: 'WhatsApp Video Shopping' },
  cafe: { label: 'Café & Roastery', icon: 'Coffee', defaultBooking: 'whatsapp_order', defaultCta: 'Order Coffee & Bakes' },
  construction: { label: 'Construction & Building Materials E-Commerce', icon: 'Truck', defaultBooking: 'whatsapp_order', defaultCta: 'Order Materials on WhatsApp' },
  // 42 Extended Categories:
  ca_tax: { label: 'CA & Tax Consultant', icon: 'FileText', defaultBooking: 'appointment_slot', defaultCta: 'Book Tax Consultation Slot' },
  lawyer: { label: 'Lawyer & Legal Chambers', icon: 'Scale', defaultBooking: 'appointment_slot', defaultCta: 'Schedule Legal Consultation' },
  interior_design: { label: 'Interior Designer & Studio', icon: 'Palette', defaultBooking: 'appointment_slot', defaultCta: 'Book Site Design Consultation' },
  architect: { label: 'Architect & Structural Studio', icon: 'Compass', defaultBooking: 'appointment_slot', defaultCta: 'Schedule Architectural Review' },
  banquet_hall: { label: 'Banquet Hall & Marriage Palace', icon: 'Castle', defaultBooking: 'reservation_party', defaultCta: 'Reserve Banquet & Wedding Date' },
  packers_movers: { label: 'Packers & Movers', icon: 'Truck', defaultBooking: 'pickup_drop', defaultCta: 'Book Doorstep Move Survey' },
  ac_repair: { label: 'AC & Appliance Repair', icon: 'Wind', defaultBooking: 'appointment_slot', defaultCta: 'Book AC Technician Visit' },
  cctv_security: { label: 'CCTV & Security Installer', icon: 'Video', defaultBooking: 'appointment_slot', defaultCta: 'Book Free Security Site Survey' },
  vet_clinic: { label: 'Veterinary Clinic & Pet Hospital', icon: 'Heart', defaultBooking: 'appointment_slot', defaultCta: 'Book Pet OPD & Vaccination' },
  preschool_daycare: { label: 'Preschool & Daycare', icon: 'Smile', defaultBooking: 'appointment_slot', defaultCta: 'Schedule Campus Tour & Trial' },
  astrologer_pooja: { label: 'Astrologer & Pooja Services', icon: 'Sparkles', defaultBooking: 'appointment_slot', defaultCta: 'Book Kundali & Pooja Slot' },
  arts_academy: { label: 'Music, Dance & Art Academy', icon: 'Music', defaultBooking: 'appointment_slot', defaultCta: 'Book Free Demo Class' },
  auto_showroom: { label: 'Car & Bike Showroom', icon: 'Car', defaultBooking: 'whatsapp_order', defaultCta: 'Get On-Road Price & Test Drive' },
  solar_installer: { label: 'Solar Panel Installer', icon: 'Sun', defaultBooking: 'appointment_slot', defaultCta: 'Book Free Solar Survey' },
  painting_contractor: { label: 'Home Painting Contractor', icon: 'Paintbrush', defaultBooking: 'appointment_slot', defaultCta: 'Book Free Color Measurement' },
  jewellery_shop: { label: 'Jewellery Shop & Gold Studio', icon: 'Gem', defaultBooking: 'whatsapp_order', defaultCta: 'WhatsApp Gold & Jewellery Enquiry' },
  optical_shop: { label: 'Optical Shop & Eye Care', icon: 'Glasses', defaultBooking: 'whatsapp_order', defaultCta: 'Order Spectacles on WhatsApp' },
  ro_water_purifier: { label: 'RO & Water Purifier Service', icon: 'Droplets', defaultBooking: 'appointment_slot', defaultCta: 'Book RO Service / Filter Change' },
  pest_control: { label: 'Pest Control Services', icon: 'Bug', defaultBooking: 'whatsapp_order', defaultCta: 'Book Odorless Pest Treatment' },
  courier_delivery: { label: 'Courier & Delivery Service', icon: 'Package', defaultBooking: 'pickup_drop', defaultCta: 'Schedule Doorstep Parcel Pickup' },
  home_baker: { label: 'Home Baker & Custom Cakes', icon: 'Cake', defaultBooking: 'whatsapp_order', defaultCta: 'Pre-Order Custom Theme Cake' },
  notary_legal: { label: 'Notary & Legal Typing Service', icon: 'FileCheck', defaultBooking: 'appointment_slot', defaultCta: 'Book Notary & Stamp Paper Slot' },
  insurance_agent: { label: 'Insurance Agent & Advisor', icon: 'ShieldCheck', defaultBooking: 'appointment_slot', defaultCta: 'Book Free Policy Review Meeting' },
  loan_dsa: { label: 'Loan & DSA Agent', icon: 'Landmark', defaultBooking: 'appointment_slot', defaultCta: 'Check Loan Eligibility & KYC' },
  telecom_recharge: { label: 'Mobile Recharge & Telecom Shop', icon: 'Radio', defaultBooking: 'whatsapp_order', defaultCta: 'Instant Recharge on WhatsApp' },
  gift_stationery: { label: 'Gift & Stationery Shop', icon: 'Gift', defaultBooking: 'whatsapp_order', defaultCta: 'WhatsApp Gift & Stationery List' },
  toy_shop: { label: 'Toy Shop & Games Planet', icon: 'Gamepad2', defaultBooking: 'whatsapp_order', defaultCta: 'Order Toys & Birthday Gifts' },
  sports_shop: { label: 'Sports Goods Shop', icon: 'Trophy', defaultBooking: 'whatsapp_order', defaultCta: 'Order Sports Gear on WhatsApp' },
  cycle_repair: { label: 'Cycle Shop & Repair', icon: 'Bike', defaultBooking: 'pickup_drop', defaultCta: 'Schedule Cycle Overhaul Pickup' },
  auto_garage: { label: 'Auto Garage & Car Mechanic', icon: 'Wrench', defaultBooking: 'appointment_slot', defaultCta: 'Book Car Service & Inspection' },
  vehicle_scrapping: { label: 'Vehicle Scrapping & RC Surrender', icon: 'Recycle', defaultBooking: 'pickup_drop', defaultCta: 'Get Scrap Value & Free Towing Pickup' },
  cab_taxi_rental: { label: 'Cab & Taxi Rental', icon: 'Navigation', defaultBooking: 'reservation_party', defaultCta: 'Reserve Outstation Cab / Airport Taxi' },
  physiotherapy: { label: 'Physiotherapy & Rehab Clinic', icon: 'Activity', defaultBooking: 'appointment_slot', defaultCta: 'Book Physiotherapy Session' },
  musical_instruments: { label: 'Musical Instrument Shop', icon: 'Music', defaultBooking: 'whatsapp_order', defaultCta: 'WhatsApp Instrument Enquiry' },
  bookshop_library: { label: 'Bookshop & Reading Library', icon: 'Library', defaultBooking: 'whatsapp_order', defaultCta: 'Order Books on WhatsApp' },
  curtain_upholstery: { label: 'Curtain & Upholstery Studio', icon: 'Layers', defaultBooking: 'whatsapp_order', defaultCta: 'Order Fabric Swatches on WhatsApp' },
  plant_nursery: { label: 'Nursery & Exotic Plant Shop', icon: 'Flower2', defaultBooking: 'whatsapp_order', defaultCta: 'Order Plants & Pots on WhatsApp' },
  bridal_makeup: { label: 'Bridal Makeup Artist & Studio', icon: 'Sparkles', defaultBooking: 'appointment_slot', defaultCta: 'Book Bridal Makeup Trial Slot' },
  cold_storage_warehouse: { label: 'Cold Storage & Warehouse Rental', icon: 'Warehouse', defaultBooking: 'reservation_party', defaultCta: 'Book Cold Chamber Pallet Space' },
  school_transport: { label: 'School Van & Transport Service', icon: 'Bus', defaultBooking: 'reservation_party', defaultCta: 'Reserve School Van Seat & Route' },
  dance_fitness: { label: 'Dance Academy & Zumba Studio', icon: 'Zap', defaultBooking: 'appointment_slot', defaultCta: 'Book Free Dance Trial Session' },
  pathology_lab: { label: 'Diagnostic Lab & Blood Collection', icon: 'HeartHandshake', defaultBooking: 'appointment_slot', defaultCta: 'Book Doorstep Sample Collection' },
  // 12 New Categories:
  gaming_cafe: { label: 'Gaming Café & PS5/VR Lounge', icon: 'Gamepad2', defaultBooking: 'appointment_slot', defaultCta: 'Book Console / VR Slot' },
  escape_room: { label: 'Escape Room & Mystery Games', icon: 'Key', defaultBooking: 'reservation_party', defaultCta: 'Reserve Escape Room Slot' },
  tattoo_studio: { label: 'Tattoo & Piercing Studio', icon: 'Sparkles', defaultBooking: 'appointment_slot', defaultCta: 'Book Tattoo Consultation' },
  home_tutor: { label: 'Home Tutor & Private Educator', icon: 'GraduationCap', defaultBooking: 'appointment_slot', defaultCta: 'Book Free 45-Min Demo Class' },
  drone_service: { label: 'Drone & Aerial Photography', icon: 'Camera', defaultBooking: 'appointment_slot', defaultCta: 'Book Drone Shoot Slot' },
  organic_farm: { label: 'Organic Farm & Veg Box', icon: 'Sprout', defaultBooking: 'whatsapp_order', defaultCta: 'Order Weekly Veg Box on WhatsApp' },
  coworking_space: { label: 'Co-Working Space & Hot Desks', icon: 'Building2', defaultBooking: 'reservation_party', defaultCta: 'Book 1-Day Free Trial Pass' },
  party_rental: { label: 'Party & Event Rental', icon: 'PartyPopper', defaultBooking: 'reservation_party', defaultCta: 'Reserve Event Equipment & Date' },
  corporate_gifting: { label: 'Corporate Gifting Supplier', icon: 'Gift', defaultBooking: 'whatsapp_order', defaultCta: 'Get Instant Bulk Quotation on WhatsApp' },
  handicraft_store: { label: 'Handicraft & Artisan Store', icon: 'Palette', defaultBooking: 'whatsapp_order', defaultCta: 'Buy Artisan Crafts on WhatsApp' },
  rooftop_cafe: { label: 'Rooftop & Terrace Café', icon: 'Coffee', defaultBooking: 'reservation_party', defaultCta: 'Reserve Sunset Rooftop Table' },
  office_tiffin: { label: 'B2B Office Tiffin Service', icon: 'UtensilsCrossed', defaultBooking: 'whatsapp_order', defaultCta: 'Book 5-Day Corporate Meal Trial' }
};
