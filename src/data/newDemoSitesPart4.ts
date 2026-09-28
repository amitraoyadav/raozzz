import { BusinessWebsite } from '../types';

export const NEW_DEMO_SITES_PART4: BusinessWebsite[] = [
  // 1. Gaming Café & PS5/VR Lounge
  {
    id: 'respawn-gaming-lounge',
    slug: 'respawn-gaming-lounge',
    businessName: 'Respawn Arena PS5 & VR Lounge',
    category: 'gaming_cafe',
    templateId: 'gaming-dark',
    tagline: 'High-FPS 4K PS5 Pro Pods, HTC Vive VR Arenas & Midnight LAN Battles',
    description: 'Bangalore’s top-tier next-gen gaming destination. Equipped with 12 Sony PS5 Pro stations on 65" 144Hz OLED screens, triple-monitor Fanatec racing simulators, wireless HTC Vive Cosmos VR bays, gigabit fiber connection, and gourmet gamer snacks served right to your booth.',
    ownerName: 'Karthik Menon & Rohan Roy',
    phone: '+91 98450 77123',
    whatsapp: '+91 98450 77123',
    email: 'play@respawngl.in',
    address: '2nd Floor, 100ft Road, Opposite Toit, Indiranagar, Bangalore 560038',
    city: 'Bangalore',
    mapsUrl: 'https://maps.google.com/?q=100ft+Road+Indiranagar+Bangalore',
    openingHours: 'Mon - Sun: 11:00 AM – 2:00 AM',
    logoUrl: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#7c3aed',
    secondaryColor: '#06b6d4',
    fontFamily: 'Space Grotesk',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Book Console / VR Slot',
    specialBadge: '4K 144Hz OLED · Gigabit Fiber',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-24T10:00:00Z',
    updatedAt: '2026-03-27T12:00:00Z',
    sections: [
      { id: 'about', title: 'The Arena Experience', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Midnight Pass & Combos', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Hourly Rates & Food Menu', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Arena & Sim Rig Tour', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Opening Timings', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Reserve Your Pod', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'gm-off-1',
        title: 'Unlimited 4-Hour Night Owl Pass (10 PM - 2 AM)',
        description: 'Includes unlimited PS5 Pro gameplay, 1 Red Bull or Iced Coffee, and loaded cheese nachos.',
        discountPercent: 35,
        couponCode: 'NIGHTOWL',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'gm-1', name: 'PS5 Pro 4K 120Hz Solo Pod (Per Hour)', description: 'Private reclining couch, DualSense Edge controller, 65" LG C3 OLED, library of 80+ top AAA titles (GTA V, EA FC 26, Spiderman 2).', price: 200, discountPrice: 180, category: 'Console Stations', isAvailable: true, unit: 'per hour' },
      { id: 'gm-2', name: 'Fanatec F1 Direct-Drive Sim Racing Rig', description: 'Force-feedback steering base, load-cell hydraulic pedals, Sparco racing bucket seat, triple curved 32" screens on Assetto Corsa & F1.', price: 350, category: 'Racing Simulators', isAvailable: true, unit: 'per hour' },
      { id: 'gm-3', name: 'HTC Vive Pro 2 Room-Scale VR Bay', description: '360-degree wireless motion tracking with Beat Saber, Half-Life Alyx, and Superhot VR with staff assistance.', price: 400, category: 'VR Experience', isAvailable: true, unit: 'per 45 mins' },
      { id: 'gm-4', name: 'Peri-Peri Crinkle Fries & Monster Shake Combo', description: 'Double crispy potato fries with in-house spicy dust and Oreo hazelnut thickshake.', price: 280, category: 'Gamer Bites', isAvailable: true }
    ],
    gallery: [
      { id: 'gmg-1', title: 'Neon Lit PS5 Stations', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80' },
      { id: 'gmg-2', title: 'Pro Direct Drive Sim Rig', category: 'facilities', imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 2. Escape Room & Mystery Games
  {
    id: 'enigma-vault-escape',
    slug: 'enigma-vault-escape',
    businessName: 'Enigma Vault Live Escape Rooms',
    category: 'escape_room',
    templateId: 'escape-mystery',
    tagline: '60 Minutes. Cryptic Clues. Can Your Squad Crack the Vault & Escape?',
    description: 'Delhi NCR’s most immersive live mystery adventure rooms. Step into cinematic movie-set style chambers featuring automated electronic locks, UV hidden ink riddles, motion sensors, and thrilling story-driven puzzles designed for college squads, birthday celebrations, and corporate team building.',
    ownerName: 'Devika Singhania & Tarun Kaul',
    phone: '+91 98110 33881',
    whatsapp: '+91 98110 33881',
    email: 'clues@enigmavault.in',
    address: '3rd Floor, Hauz Khas Village Main Road, New Delhi 110016',
    city: 'Delhi',
    mapsUrl: 'https://maps.google.com/?q=Hauz+Khas+Village+New+Delhi',
    openingHours: 'Mon - Sun: 11:30 AM – 10:00 PM',
    logoUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#831843',
    secondaryColor: '#f59e0b',
    fontFamily: 'Cinzel',
    bookingType: 'reservation_party',
    bookingCtaLabel: 'Reserve Escape Room Slot',
    specialBadge: '4 Interactive Rooms · 98% 5-Star Reviews',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-24T11:00:00Z',
    updatedAt: '2026-03-27T12:00:00Z',
    sections: [
      { id: 'about', title: 'The Escape Challenge', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Squad Discounts', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Mystery Chambers & Difficulty', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Chamber Sets & Hall of Fame', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Game Slots', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Book Room Time Slot', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'esc-off-1',
        title: 'College Squad Pass (Min 5 Players)',
        description: 'Flat 20% off on all weekday slots before 5 PM with valid student ID cards.',
        discountPercent: 20,
        couponCode: 'STUDENT20',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'esc-1', name: 'The Kohinoor Royal Heist (Difficulty: 4/5)', description: 'Infiltrate the secure British museum vault and swap the legendary diamond before the laser alarms engage in 60 mins. Ideal for 2-6 players.', price: 799, discountPrice: 699, category: 'Heist Themes', isAvailable: true, unit: 'per player' },
      { id: 'esc-2', name: 'Curse of the Bhangarh Fort (Difficulty: 5/5)', description: 'Spooky paranormal mystery chamber with chilling soundscapes, hidden passageways, and ancient Sanskrit riddle ciphers.', price: 899, category: 'Horror & Mystery', isAvailable: true, unit: 'per player' },
      { id: 'esc-3', name: 'Cold War Bunker Sabotage (Difficulty: 3.5/5)', description: 'High-tech military command room with analog switchboards, morse code decoders, and a missile countdown timer.', price: 749, category: 'Espionage', isAvailable: true, unit: 'per player' }
    ],
    gallery: [
      { id: 'escg-1', title: 'Vault Safe Mechanism Room', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 3. Tattoo & Piercing Studio
  {
    id: 'soulink-tattoo-mumbai',
    slug: 'soulink-tattoo-mumbai',
    businessName: 'SoulInk Custom Tattoo & Piercing Studio',
    category: 'tattoo_studio',
    templateId: 'tattoo-ink',
    tagline: 'Hyper-Realistic Portraits, Fine-Line Minimalist Ink & 100% Sterile Medical-Grade Hygiene',
    description: 'Mumbai’s acclaimed bespoke tattoo studio located in Pali Hill, Bandra. Led by international award-winning artists specializing in fine-line micro tattoos, Japanese Irezumi, geometric mandalas, and realistic cover-ups. Every needle is 100% single-use EO-gas sterilized with medical-grade vegan inks.',
    ownerName: 'Kabir Vohra & Maya D’Souza',
    phone: '+91 98200 44910',
    whatsapp: '+91 98200 44910',
    email: 'ink@soulink.in',
    address: 'Shop 4, Silver Beach Arcade, Near Pali Naka, Bandra West, Mumbai 400050',
    city: 'Mumbai',
    mapsUrl: 'https://maps.google.com/?q=Pali+Naka+Bandra+West+Mumbai',
    openingHours: 'Tue - Sun: 12:00 PM – 9:00 PM (Mondays Closed)',
    logoUrl: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#0f172a',
    secondaryColor: '#f43f5e',
    fontFamily: 'Cinzel',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Book Tattoo Consultation',
    specialBadge: 'Award Winning · Medical Grade Sterile',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-24T12:00:00Z',
    updatedAt: '2026-03-27T12:00:00Z',
    sections: [
      { id: 'about', title: 'Our Tattoo Philosophy', isEnabled: true, order: 1 },
      { id: 'offers', title: 'First-Timer Consultation Offer', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Tattoo Styles & Piercings', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Recent Client Artwork', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Studio Timings', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Book Design Consultation', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'tat-off-1',
        title: 'Free 30-Min Custom Sketch & Sizing Consultation',
        description: 'Sit 1-on-1 with our master artists to render your concept on Procreate before needles touch skin.',
        discountPercent: 100,
        couponCode: 'CONSULTFREE',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'tat-1', name: 'Fine-Line Minimalist / Script Tattoo (Up to 2x2 inch)', description: 'Crisp single-needle precision work ideal for wrist, collarbone, and ankle typography or delicate botanicals.', price: 2500, discountPrice: 2200, category: 'Fine-Line Art', isAvailable: true, unit: 'starting at' },
      { id: 'tat-2', name: 'Custom Geometric Mandala / Forearm Sleeve (Per Hour)', description: 'Intricate dotwork, sacred geometry, and high-contrast black & grey shading with custom stenciling.', price: 3500, category: 'Custom Work', isAvailable: true, unit: 'per hour' },
      { id: 'tat-3', name: 'Titanium Helix / Tragus Ear Piercing with Jewellery', description: 'Needle pierce with implant-grade ASTM F-136 titanium labret stud. Includes sterile aftercare saline spray.', price: 1200, category: 'Sterile Piercing', isAvailable: true, unit: 'per piercing' }
    ],
    gallery: [
      { id: 'tatg-1', title: 'Fine-Line Botanical Forearm Ink', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=800&q=80' },
      { id: 'tatg-2', title: 'Geometric Sacred Mandala Sleeve', category: 'products', imageUrl: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 4. Home Tutor (Individual)
  {
    id: 'pradeep-verma-home-tutor',
    slug: 'pradeep-verma-home-tutor',
    businessName: 'Pradeep Verma Math & Physics Home Tutoring',
    category: 'home_tutor',
    templateId: 'tutor-academic',
    tagline: 'CBSE & ICSE Class 9th to 12th Board & Competitive Foundation · 1-on-1 Personalized Doorstep Tuition',
    description: 'Gold medalist M.Sc Physics with 14 years of teaching excellence across South Delhi and Gurugram. Proven methodology focusing on core NCERT conceptual clarity, step-by-step calculus derivation, past 10 years board paper solving, and guaranteed 90%+ board score turnaround.',
    ownerName: 'Pradeep Verma (M.Sc, B.Ed)',
    phone: '+91 98101 88234',
    whatsapp: '+91 98101 88234',
    email: 'pradeep.verma.tuitions@gmail.com',
    address: 'E-42, South Extension Part 2, New Delhi 110049',
    city: 'Delhi',
    mapsUrl: 'https://maps.google.com/?q=South+Extension+Part+2+New+Delhi',
    openingHours: 'Mon - Sat: 3:30 PM – 9:00 PM (Sun: Mock Test Batches)',
    logoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#1e3a8a',
    secondaryColor: '#0d9488',
    fontFamily: 'Inter',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Book Free 45-Min Demo Class',
    specialBadge: 'Ex-DPS Faculty · 14 Yrs Experience · 94% Avg Score',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-24T13:00:00Z',
    updatedAt: '2026-03-27T12:00:00Z',
    sections: [
      { id: 'about', title: 'Why Choose Pradeep Sir', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Free Diagnostic Demo', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Subject Modules & Monthly Plans', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Student Board Results', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Available Slot Timings', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Schedule Free Home Demo', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'tut-off-1',
        title: 'Complimentary Diagnostic Evaluation Class (45 mins)',
        description: 'Assessment of current formula retention, weak topics analysis, and 3-month score improvement roadmap.',
        discountPercent: 100,
        couponCode: 'DEMOFREE',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'tut-1', name: 'Class 12th Physics CBSE Board Intensive (1-on-1 Doorstep)', description: 'Electrostatics, Optics, Semiconductor devices, derivations practice, and weekly chapter-wise objective + subjective tests.', price: 12000, discountPrice: 10500, category: 'Class 12 Boards', isAvailable: true, unit: 'per month (3 sessions/wk)' },
      { id: 'tut-2', name: 'Class 11th Mathematics Foundation & Calculus', description: 'Sets, Trigonometric functions, Limits & Derivatives, Binomial theorem. Conceptual bridge for JEE aspirants.', price: 10000, category: 'Class 11 Foundation', isAvailable: true, unit: 'per month (3 sessions/wk)' },
      { id: 'tut-3', name: 'Class 10th Math & Science Combined Crash Course', description: 'Comprehensive coverage of Board sample papers with formula cheat sheets and doubt solving.', price: 8500, category: 'Class 10 Boards', isAvailable: true, unit: 'per month' }
    ],
    gallery: [
      { id: 'tutg-1', title: 'One-on-One Physics Derivation Session', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 5. Drone & Aerial Photography
  {
    id: 'aeroshots-drone-hyderabad',
    slug: 'aeroshots-drone-hyderabad',
    businessName: 'AeroShots Commercial Drone & FPV Services',
    category: 'drone_service',
    templateId: 'drone-aerial',
    tagline: 'DGCA-Certified Pilots · 4K 60FPS Cinematic Flythroughs, Real Estate & Industrial Survey',
    description: 'Hyderabad’s premier licensed UAV aerial production company. Equipped with DJI Inspire 3 full-frame cinema drones, agile custom indoor FPV quads, and RTK topographic mapping sensors. Serving commercial developers, mega weddings, industrial solar farms, and cinema ads across Telangana & Andhra.',
    ownerName: 'Venkatesh Rao & Akhil Goud',
    phone: '+91 99890 23114',
    whatsapp: '+91 99890 23114',
    email: 'shoots@aeroshots.in',
    address: 'Suite 204, Cyber Towers Road, Hitec City, Hyderabad 500081',
    city: 'Hyderabad',
    mapsUrl: 'https://maps.google.com/?q=Hitec+City+Cyber+Towers+Hyderabad',
    openingHours: 'Mon - Sun: 7:00 AM – 8:00 PM',
    logoUrl: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#0284c7',
    secondaryColor: '#f97316',
    fontFamily: 'Space Grotesk',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Book Drone Shoot Slot',
    specialBadge: 'DGCA Certified · 4K ProRes · ₹2 Cr Liability Insured',
    status: 'published',
    pricingPlanId: 'premium',
    amountPaid: 1999,
    paymentStatus: 'paid',
    createdAt: '2026-03-24T14:00:00Z',
    updatedAt: '2026-03-27T12:00:00Z',
    sections: [
      { id: 'about', title: 'Aerial Fleet & Tech', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Package Combos', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Services & Hourly Shoot Rates', isEnabled: true, order: 3 },
      { id: 'gallery', title: '4K Aerial Showreel Portfolio', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Operational Hours', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Request Drone Quote & Availability', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'drn-off-1',
        title: 'Real Estate Developer 3-Tower Showcase Combo',
        description: 'Includes 4K dusk aerials, 360-degree interactive skyline panorama, and raw ProRes footage on SSD.',
        discountPercent: 25,
        couponCode: 'AERIALDEV',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'drn-1', name: 'High-Rise Real Estate & Villa Aerial Shoot (Half-Day)', description: 'Up to 4 hours flight time, 4K 60FPS video clips, 48MP HDR photos, color graded teaser reel for Instagram & YouTube.', price: 18000, discountPrice: 15500, category: 'Real Estate Drone', isAvailable: true, unit: 'per half-day shoot' },
      { id: 'drn-2', name: 'Indoor FPV Flythrough Tour for Cafés / Offices', description: 'Ultra-safe guarded CineWhoop quad navigating through doorways, bars, and desks with seamless one-take edit.', price: 22000, category: 'FPV One-Take', isAvailable: true, unit: 'per project' },
      { id: 'drn-3', name: 'Grand Destination Wedding Drone Coverage (2 Days)', description: 'Bride & groom royal entry, baraat procession, fireworks dusk overview with dual pilots for zero missed moments.', price: 35000, category: 'Weddings', isAvailable: true, unit: '2-day package' }
    ],
    gallery: [
      { id: 'drng-1', title: 'Hitec City High-Rise Sunset Flyover', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 6. Organic / Farm Produce Store (Weekly Veg Box Subscription)
  {
    id: 'vritti-organics-farmbox',
    slug: 'vritti-organics-farmbox',
    businessName: 'Vritti Organics Farm & Weekly Veg Box',
    category: 'organic_farm',
    templateId: 'farm-fresh',
    tagline: 'Harvested at 5 AM, Delivered by 10 AM · 100% Pesticide-Free Heirloom Vegetables & Desi Gir Cow A2 Milk',
    description: 'Family-owned 22-acre certified natural farm in Doddaballapur delivering crisp farm-to-table vegetable baskets, cold-pressed oils, raw wild forest honey, and unpasteurized A2 Vedic Gir cow milk to over 850 households across Bangalore every Tuesday and Friday morning.',
    ownerName: 'Suresh & Ananya Hegde',
    phone: '+91 97400 66551',
    whatsapp: '+91 97400 66551',
    email: 'harvest@vrittifarms.in',
    address: 'Whitefield Main Road, Near Hope Farm Junction, Bangalore 560066',
    city: 'Bangalore',
    mapsUrl: 'https://maps.google.com/?q=Hope+Farm+Whitefield+Bangalore',
    openingHours: 'Mon - Sun: 7:00 AM – 8:30 PM (Harvest Delivery: Tue & Fri)',
    logoUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#15803d',
    secondaryColor: '#ca8a04',
    fontFamily: 'Fraunces',
    bookingType: 'whatsapp_order',
    bookingCtaLabel: 'Order Weekly Veg Box on WhatsApp',
    specialBadge: 'NPOP Certified Organic · Zero Chemical Pesticides',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-24T15:00:00Z',
    updatedAt: '2026-03-27T12:00:00Z',
    sections: [
      { id: 'about', title: 'Our Regenerative Farm', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Monthly Subscription Deals', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Harvest Boxes & Farm Pantry', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Morning Harvest Photo Gallery', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Delivery Days & Schedule', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Start WhatsApp Subscription', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'farm-off-1',
        title: 'First Month Veg Box Trial (4 Weekly Deliveries)',
        description: 'Subscribe for a 4-week family basket and receive 1 litre pure A2 Gir Cow Ghee complimentary.',
        discountPercent: 20,
        couponCode: 'ORGANICGHEE',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'v-1', name: 'Weekly Family Veg Harvest Box (8.5 kg, 12 Varieties)', description: 'Crisp spinach, desi carrots, country tomatoes, lady finger, cucumbers, beans, ginger, coriander, and native gourds. Freshly harvested.', price: 750, discountPrice: 680, category: 'Veg Subscription Boxes', isAvailable: true, unit: 'per week' },
      { id: 'v-2', name: 'A2 Vedic Bilona Gir Cow Ghee (500ml Glass Jar)', description: 'Prepared in earthen pots from curd churned with wooden bilona according to traditional Vedic methods.', price: 1450, category: 'A2 Dairy & Ghee', isAvailable: true, unit: 'per 500ml jar' },
      { id: 'v-3', name: 'Hydroponic Salad Box (500g Assorted Exotic Greens)', description: 'Romaine lettuce, cherry tomatoes, baby rocket arugula, and butterhead leaves grown without soil or chemicals.', price: 299, category: 'Hydroponics & Salads', isAvailable: true, unit: 'per box' }
    ],
    gallery: [
      { id: 'vg-1', title: 'Fresh Harvest Wooden Crates', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 7. Co-Working Space & Hot Desks
  {
    id: 'synergy-hub-coworking-pune',
    slug: 'synergy-hub-coworking-pune',
    businessName: 'Synergy Hub Co-Working & Private Cabins',
    category: 'coworking_space',
    templateId: 'cowork-modern',
    tagline: 'Ergonomic Herman Miller Seating, 500 Mbps Dual Fiber & Vibrant Founder Community in Baner',
    description: 'Pune’s top collaborative workspace for tech founders, remote engineers, and creative agencies. Featuring quiet focus zones, acoustic soundproof podcast booths, 12-person boardroom with 4K teleconferencing, unlimited artisanal Blue Tokai coffee, and pet-friendly open green terrace.',
    ownerName: 'Amitabh Joshi & Sneha Kulkarni',
    phone: '+91 98900 11982',
    whatsapp: '+91 98900 11982',
    email: 'desk@synergyhub.in',
    address: 'Synergy Tower, 4th & 5th Floor, Main Baner Road, Pune 411045',
    city: 'Pune',
    mapsUrl: 'https://maps.google.com/?q=Baner+Road+Pune',
    openingHours: '24/7 Access for Members (Reception: 8:30 AM – 8:30 PM)',
    logoUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#0f766e',
    secondaryColor: '#f59e0b',
    fontFamily: 'Inter',
    bookingType: 'reservation_party',
    bookingCtaLabel: 'Book 1-Day Free Trial Pass',
    specialBadge: '500 Mbps Backup Fiber · Herman Miller · 24x7 AC',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-24T16:00:00Z',
    updatedAt: '2026-03-27T12:00:00Z',
    sections: [
      { id: 'about', title: 'Why Founders Choose Synergy', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Startup Team Passes', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Day Passes, Desks & Private Suites', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Workspace & Terrace Tour', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Facility Hours', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Reserve Workspace Visit', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'cw-off-1',
        title: 'Free 1-Day Hot Desk Trial for First-Time Visitors',
        description: 'Experience high-speed wifi, unlimited craft espresso, and soundproof calling pods at zero cost.',
        discountPercent: 100,
        couponCode: 'WORKFREE',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'cw-1', name: 'Flexible Hot Desk Day Pass', description: 'Full-day access to open flex seating, 500 Mbps internet, phone booths, printer credits, and artisanal coffee.', price: 499, discountPrice: 399, category: 'Day Passes', isAvailable: true, unit: 'per day' },
      { id: 'cw-2', name: 'Dedicated Fixed Desk with Lockable Pedestal', description: 'Personal ergonomic desk with Herman Miller chair, 24/7 biometric access, locker storage, and ₹2,000 monthly meeting credits.', price: 7500, category: 'Monthly Memberships', isAvailable: true, unit: 'per seat / month' },
      { id: 'cw-3', name: '4-Seater Private Glass Cabin Suite', description: 'Fully furnished acoustic soundproof cabin, dedicated LAN lines, company logo display on door, 24/7 climate control.', price: 28000, category: 'Private Cabins', isAvailable: true, unit: 'per cabin / month' }
    ],
    gallery: [
      { id: 'cwg-1', title: 'Open Sunlit Flex Workstations', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 8. Party & Event Rental
  {
    id: 'utsav-event-rentals-jaipur',
    slug: 'utsav-event-rentals-jaipur',
    businessName: 'Utsav Sound & Royal Event Equipment Rentals',
    category: 'party_rental',
    templateId: 'event-rental-jaipur',
    tagline: 'JBL VRX Line Array Systems, Truss Staging, Fairy Lights & Velvet Royal Wedding Seating',
    description: 'Jaipur’s trusted equipment supplier for royal heritage weddings, corporate conclaves, Sangeet nights, and birthday parties. We supply certified JBL sound systems, wireless Shure microphones, haze smoke machines, LED video walls, Shamiana tents, and maharaja sofa seating with on-site technician support.',
    ownerName: 'Mahesh Sharma & Rajat Goyal',
    phone: '+91 94140 22771',
    whatsapp: '+91 94140 22771',
    email: 'rentals@utsavevents.in',
    address: 'Plot 18, Tonk Road, Near Glass Factory, Jaipur 302015',
    city: 'Jaipur',
    mapsUrl: 'https://maps.google.com/?q=Tonk+Road+Jaipur',
    openingHours: 'Mon - Sun: 9:00 AM – 9:00 PM',
    logoUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#c2410c',
    secondaryColor: '#eab308',
    fontFamily: 'Playfair Display',
    bookingType: 'reservation_party',
    bookingCtaLabel: 'Reserve Event Equipment & Date',
    specialBadge: 'JBL Pro Audio · On-Site Sound Engineer Included',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-24T17:00:00Z',
    updatedAt: '2026-03-27T12:00:00Z',
    sections: [
      { id: 'about', title: 'Why Event Planners Trust Us', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Wedding Sangeet Combo Deals', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Sound, Lights & Seating Inventory', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Previous Event Setups', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Booking Timings', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Check Event Date Availability', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'rent-off-1',
        title: 'Sangeet DJ Sound & Intelligent Moving Head Lights Combo',
        description: 'Complete 4-top JBL system, 2 subwoofers, 8 beam moving lights, and wireless mics with on-site technician.',
        discountPercent: 15,
        couponCode: 'SANGEET15',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'rt-1', name: 'JBL 5,000W Pro Audio DJ Setup with Subs', description: 'Dual 18" subwoofers, 4 mid-high tops, Yamaha 16-channel digital mixer, and Shure GLXD wireless mics.', price: 12000, discountPrice: 10500, category: 'Sound Systems', isAvailable: true, unit: 'per day rental' },
      { id: 'rt-2', name: 'High-Definition P3 LED Video Wall (12ft x 8ft)', description: 'Seamless high-brightness visual backdrop for wedding stage, corporate presentations, and live camera relay.', price: 18000, category: 'Visual & LED Walls', isAvailable: true, unit: 'per day rental' },
      { id: 'rt-3', name: 'Royal Gold Maharaja Sofa Set & 50 Chiavari Chairs', description: 'Antique gold carved double couple sofa with velvet cushioning and 50 gold Chiavari dining chairs.', price: 9500, category: 'Wedding Furniture', isAvailable: true, unit: 'per day' }
    ],
    gallery: [
      { id: 'rtg-1', title: 'Stage Concert Lighting & Truss Setup', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 9. Corporate Gifting Supplier
  {
    id: 'parampara-corporate-gifting',
    slug: 'parampara-corporate-gifting',
    businessName: 'Parampara Bespoke Corporate Gifting',
    category: 'corporate_gifting',
    templateId: 'gifting-luxury',
    tagline: 'Custom Branded Executive Hampers, Eco-Friendly Bamboo Desk Kits & Premium Brass Mithai Boxes',
    description: 'Mumbai’s trusted corporate gifting house with 11 years of enterprise delivery. Catering to Fortune 500 firms, IT multinationals, and financial institutions across India with tailored onboarding kits, festive Diwali hampers, luxury Swiss pens, and laser-engraved brass souvenirs with custom company branding.',
    ownerName: 'Sunil & Shilpa Agarwal',
    phone: '+91 98201 55662',
    whatsapp: '+91 98201 55662',
    email: 'orders@paramparagifts.in',
    address: 'Unit 12, Lower Parel Business Park, Senapati Bapat Marg, Mumbai 400013',
    city: 'Mumbai',
    mapsUrl: 'https://maps.google.com/?q=Lower+Parel+Mumbai',
    openingHours: 'Mon - Sat: 10:00 AM – 7:30 PM (Sun by Appointment)',
    logoUrl: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#701a75',
    secondaryColor: '#d97706',
    fontFamily: 'Playfair Display',
    bookingType: 'whatsapp_order',
    bookingCtaLabel: 'Get Instant Bulk Quotation on WhatsApp',
    specialBadge: 'PAN-India Delivery · Custom Logo Laser Engraving',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-24T18:00:00Z',
    updatedAt: '2026-03-27T12:00:00Z',
    sections: [
      { id: 'about', title: 'Crafted for Brand Elegance', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Volume Tier Pricing', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Curated Hampers & Catalog', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Packaging & Custom Branding', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Showroom Hours', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Request Sample Box on WhatsApp', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'gift-off-1',
        title: 'Bulk Corporate Discount (100+ Units)',
        description: 'Complimentary UV logo printing, custom foil gift message card, and free doorstep delivery in Mumbai & Pune.',
        discountPercent: 18,
        couponCode: 'CORP100',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'gf-1', name: 'The Royal Heritage Brass Hamper', description: 'Handcrafted pure brass dry fruit jar pair, Kashmiri saffron (1g), roasted California almonds, and brass tea-light diya.', price: 1650, discountPrice: 1450, category: 'Festive Hampers', isAvailable: true, unit: 'per hamper (min 20)' },
      { id: 'gf-2', name: 'Sustainable Eco-Warrior Welcome Desk Kit', description: 'Recycled bamboo flask with temperature display, wheat-straw pen, plantable seed diary, and canvas tote bag with company logo.', price: 890, category: 'Employee Onboarding', isAvailable: true, unit: 'per kit (min 25)' },
      { id: 'gf-3', name: 'Executive Leatherette Tech Portfolio Bag', description: 'Premium padded 15.6" laptop sleeve, 10,000mAh magnetic wireless power bank, and metallic rollerball pen in magnetic gift box.', price: 2100, category: 'Executive Gifts', isAvailable: true, unit: 'per set (min 15)' }
    ],
    gallery: [
      { id: 'gfg-1', title: 'Curated Brass Festive Gift Box', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 10. Handicraft & Artisan Store
  {
    id: 'hastkala-heritage-jaipur',
    slug: 'hastkala-heritage-jaipur',
    businessName: 'Hastkala Heritage Artisan Loom & Pottery',
    category: 'handicraft_store',
    templateId: 'artisan-rajasthan',
    tagline: 'Authentic GI-Tagged Jaipur Blue Pottery, Sanganeri Hand-Block Razais & Brass Bell Lamps',
    description: 'A tribute to 300 years of Rajasthani master artisan heritage in C-Scheme, Jaipur. We work directly with over 40 rural artisan families in Sanganer and Bagru without middlemen. Every ceramic vase, hand-block dyed quilt, and embossed brass lantern tells an ancient story of handcrafted patience.',
    ownerName: 'Govind & Sunita Rathore',
    phone: '+91 94140 88299',
    whatsapp: '+91 94140 88299',
    email: 'crafts@hastkalaheritage.in',
    address: 'B-14, Sahdev Marg, C-Scheme, Jaipur 302005',
    city: 'Jaipur',
    mapsUrl: 'https://maps.google.com/?q=C-Scheme+Jaipur',
    openingHours: 'Mon - Sun: 10:00 AM – 8:30 PM',
    logoUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#9a3412',
    secondaryColor: '#0284c7',
    fontFamily: 'Fraunces',
    bookingType: 'whatsapp_order',
    bookingCtaLabel: 'Buy Artisan Crafts on WhatsApp',
    specialBadge: '100% Handcrafted · Direct Artisan Fair Trade',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-24T19:00:00Z',
    updatedAt: '2026-03-27T12:00:00Z',
    sections: [
      { id: 'about', title: 'The Artisan Legacy', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Fair Trade Specials', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Pottery, Textiles & Brass Decor', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Atelier Workshop Photos', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Store Timings', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Order on WhatsApp with Video Call', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'craft-off-1',
        title: 'Jaipur Heritage Textile Gift Box with Free Shipping',
        description: 'Pair of pure mulmul hand-block printed dohars with matching cushion covers packaged in a handloom pouch.',
        discountPercent: 15,
        couponCode: 'ARTISAN15',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'cr-1', name: 'Handcrafted Jaipur Blue Pottery Floral Urn Vase (12")', description: 'Glazed with natural quartz stone, multani mitti, and cobalt blue dye. Fired in traditional clay kiln.', price: 1850, discountPrice: 1600, category: 'Jaipur Blue Pottery', isAvailable: true, unit: 'per piece' },
      { id: 'cr-2', name: 'Sanganeri Pure Mulmul Cotton Reversible Quilt (Jaipuri Razai)', description: 'Lightweight pure carded cotton batting hand-stitched inside ultra-soft vegetable-dyed block print fabric.', price: 2400, category: 'Handloom Textiles', isAvailable: true, unit: 'per double razai' },
      { id: 'cr-3', name: 'Dhokra Tribal Brass Hanging Bell Diya (Mor Pankh Motif)', description: 'Lost-wax casting technique from Bastar brass smiths. Polished with natural mustard oil sheen.', price: 1250, category: 'Brass & Bell Metal', isAvailable: true, unit: 'per piece' }
    ],
    gallery: [
      { id: 'crg-1', title: 'Intricate Hand-Painted Blue Pottery Vases', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 11. Rooftop & Terrace Café
  {
    id: 'skyline-terrace-hyderabad',
    slug: 'skyline-terrace-hyderabad',
    businessName: 'Skyline Terrace Sunset Café & Grills',
    category: 'rooftop_cafe',
    templateId: 'rooftop-breeze',
    tagline: 'Panoramic Durgam Cheruvu Lake Views, Neapolitan Wood-Fired Sourdough & Sunset Sangrias',
    description: 'Hyderabad’s premier open-air rooftop sanctuary perched 8 floors above Jubilee Hills. Offering 180-degree sunset views of the illuminated cable bridge, live indie acoustic performances under string lights, artisanal fermented sourdough pizzas, and hand-brewed specialty roasts.',
    ownerName: 'Chaitanya Reddy & Natasha Varma',
    phone: '+91 99660 77811',
    whatsapp: '+91 99660 77811',
    email: 'sunset@skylineterrace.in',
    address: '8th Floor Rooftop, Plot 42, Road No. 36, Jubilee Hills, Hyderabad 500033',
    city: 'Hyderabad',
    mapsUrl: 'https://maps.google.com/?q=Road+No+36+Jubilee+Hills+Hyderabad',
    openingHours: 'Mon - Sun: 4:30 PM – 1:00 AM (Sunset Hour: 5:30 PM - 7:00 PM)',
    logoUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#c2410c',
    secondaryColor: '#4f46e5',
    fontFamily: 'Fraunces',
    bookingType: 'reservation_party',
    bookingCtaLabel: 'Reserve Sunset Rooftop Table',
    specialBadge: 'Lakefront Sunset View · Woodfired Pizzas · Live Acoustic',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-24T20:00:00Z',
    updatedAt: '2026-03-27T12:00:00Z',
    sections: [
      { id: 'about', title: 'The Sunset Ambiance', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Sunset Hour Combos', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Woodfired Pizzas & Mocktails', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Night Deck & Lake Vistas', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Rooftop Hours', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Book Lake-View Table', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'sky-off-1',
        title: 'Sunset Couples High-Deck Table (5:30 PM - 7:30 PM)',
        description: 'Includes 1 choice of 12" artisanal Neapolitan pizza, 2 fruit mocktails, and chocolate fudge skillet.',
        discountPercent: 20,
        couponCode: 'SUNSET20',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'sk-1', name: 'Truffle Burrata & Sun-Dried Tomato Woodfired Pizza (12")', description: 'Fresh Buffalo burrata from Bangalore, 48-hour fermented sourdough, San Marzano tomato sauce, truffle oil drizzle.', price: 620, discountPrice: 560, category: 'Woodfired Neapolitan', isAvailable: true, isVeg: true },
      { id: 'sk-2', name: 'Grilled Peri-Peri Tiger Prawn Skewers', description: 'Fresh Bay of Bengal tiger prawns char-grilled on rooftop open coals with cilantro garlic dip.', price: 580, category: 'Charcoal Grills', isAvailable: true },
      { id: 'sk-3', name: 'Blueberry Lavender Smoked Mocktail Cooler', description: 'Fresh muddled berries, organic French lavender syrup, sparkling tonic water, served in a smoking oakwood glass.', price: 320, category: 'Signature Beverages', isAvailable: true }
    ],
    gallery: [
      { id: 'skg-1', title: 'Sunset Over the Lake from the High Deck', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 12. B2B Office Tiffin Service
  {
    id: 'dabbawala-express-corporate',
    slug: 'dabbawala-express-corporate',
    businessName: 'Dabbawala Express B2B Corporate Lunch Service',
    category: 'office_tiffin',
    templateId: 'corporate-meal',
    tagline: 'Homestyle Hot Lunch Tiffins Delivered to Tech Parks Across BKC, Lower Parel & Andheri',
    description: 'Mumbai’s corporate meal partner feeding over 1,200 tech professionals and banking executives daily. Crafted in state-of-the-art FSSAI-audited central cloud kitchens using low-oil traditional Indian recipes, organic multigrain rotis, desi ghee dal tadka, and eco-friendly leakproof hot insulated containers.',
    ownerName: 'Sanjay Jadhav & Nitin Sawant',
    phone: '+91 98205 33419',
    whatsapp: '+91 98205 33419',
    email: 'corporate@dabbawalaexpress.in',
    address: 'Gala 105, Marol Industrial Area, Andheri East, Mumbai 400059',
    city: 'Mumbai',
    mapsUrl: 'https://maps.google.com/?q=Marol+Andheri+East+Mumbai',
    openingHours: 'Mon - Fri: 8:00 AM – 4:00 PM (Lunch Delivery: 12:00 PM - 1:30 PM)',
    logoUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#ea580c',
    secondaryColor: '#16a34a',
    fontFamily: 'Inter',
    bookingType: 'whatsapp_order',
    bookingCtaLabel: 'Book 5-Day Corporate Meal Trial',
    specialBadge: 'FSSAI Certified · Low Oil & Salt · 100% On-Time Delivery Guarantee',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-24T21:00:00Z',
    updatedAt: '2026-03-27T12:00:00Z',
    sections: [
      { id: 'about', title: 'Clean Kitchen Standards', isEnabled: true, order: 1 },
      { id: 'offers', title: '5-Day Corporate Trial', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Weekly Rotating Lunch Plans', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Kitchen Hygiene & Tiffin Boxes', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Delivery Windows', isEnabled: true, order: 5 },
      { id: 'contact', title: 'WhatsApp Corporate Account Desk', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'tif-off-1',
        title: '5-Day Office Trial Pass (Free 1-Day Test)',
        description: 'Taste the quality with no long-term contract. Pay for 4 days, get day 5 free with sweet gulab jamun.',
        discountPercent: 20,
        couponCode: 'OFFICETRIAL',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'tf-1', name: 'Executive Homestyle Thali Tiffin (Daily Rotating)', description: '4 phulkas with ghee, seasonal sabzi, paneer / dal makhani, fragrant jeera rice, salad & curd. Packaged in hot insulated thermal container.', price: 160, discountPrice: 140, category: 'Daily Meal Boxes', isAvailable: true, isVeg: true, unit: 'per lunch tiffin' },
      { id: 'tf-2', name: 'High-Protein Fitness Meal Bowl (45g Protein)', description: 'Charcoal grilled chicken breast (or herbed paneer), sauteed broccoli, bell peppers, boiled quinoa, and mint lemon dressing.', price: 220, category: 'Healthy & Fitness', isAvailable: true, unit: 'per bowl' },
      { id: 'tf-3', name: 'Monthly Corporate Desk Subscription (22 Working Days)', description: 'Guaranteed delivery before 1:00 PM, monthly GST invoice billing, with flexible skip-a-day pause option.', price: 3080, discountPrice: 2800, category: 'Monthly Plans', isAvailable: true, unit: 'monthly plan' }
    ],
    gallery: [
      { id: 'tfg-1', title: 'Stainless Steel Insulated Lunch Tiffins', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80' }
    ]
  }
];
