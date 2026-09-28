import { BusinessWebsite } from '../types';

export const DEMO_SITES_PART2: BusinessWebsite[] = [
  // 10. Tuition centre / coaching institute
  {
    id: 'achievers-neet-academy',
    slug: 'achievers-neet-academy',
    businessName: 'Achievers Science & NEET Institute',
    category: 'coaching',
    templateId: 'coaching-clean',
    tagline: 'Top AIR Results in NEET & JEE. Renowned Kota Faculty & Comprehensive Test Series',
    description: 'Delhi NCR’s premier coaching institute dedicated to medical and engineering aspirants. Featuring small batch sizes (max 35 students), daily practice papers (DPP), doubt-clearing sessions till 9 PM, and personal student mentorship.',
    ownerName: 'Prof. S.K. Bansal (Ex-Kota HOD)',
    phone: '+91 97110 55443',
    whatsapp: '+91 97110 55443',
    email: 'admissions@achieversprep.edu.in',
    address: 'B-34, Commercial Complex, Near Janakpuri West Metro Gate 2, New Delhi 110058',
    city: 'New Delhi',
    mapsUrl: 'https://maps.google.com/?q=Janakpuri+West+Metro+Station',
    openingHours: 'Mon - Sun: 8:00 AM – 8:30 PM',
    logoUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#1e3a8a',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Book Free Demo Class',
    specialBadge: 'AIR 42 & AIR 88 in NEET 2025',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-10T10:00:00Z',
    updatedAt: '2026-03-24T18:00:00Z',
    sections: [
      { id: 'about', title: 'Why Choose Achievers', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Scholarship Admission Test (SAT)', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Classroom Batches & Fees', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Classrooms & Library', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Counseling Desk Hours', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Book Demo Class', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'coaching-off-1',
        title: 'Up to 90% Scholarship via ASAT Exam',
        description: 'Appear in our weekly Sunday aptitude exam and qualify for merit-based tuition fee waiver.',
        discountPercent: 90,
        couponCode: 'ASAT2026',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'c-1', name: 'NEET 2-Year Integrated Classroom Program (Class 11 & 12)', description: 'Complete syllabus coverage for Physics, Chemistry & Biology. Includes 120+ chapter-wise mock tests.', price: 85000, discountPrice: 74999, category: 'Medical (NEET)', isAvailable: true, unit: 'Annual Course' },
      { id: 'c-2', name: 'JEE Main & Advanced 1-Year Dropper Batch', description: 'Intensive problem-solving sessions, past 15-year questions analysis, and all-India test series.', price: 65000, discountPrice: 58000, category: 'Engineering (JEE)', isAvailable: true, unit: 'Annual Course' },
      { id: 'c-3', name: 'Class 9th & 10th Foundation Olympiad Batch', description: 'Building deep analytical thinking for NTSE, PRMO, and early competitive edge in Science & Math.', price: 38000, category: 'Foundation 9-10', isAvailable: true, unit: 'Annual Course' }
    ],
    gallery: [
      { id: 'cg-1', title: 'AC Smart Classrooms with Digital Boards', category: 'facilities', imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  // 11. Driving school
  {
    id: 'maruti-expert-driving-school',
    slug: 'maruti-expert-driving-school',
    businessName: 'Expert Motor Driving School & RTO Clinic',
    category: 'driving',
    templateId: 'driving-pro',
    tagline: 'Dual-Control Cars, Govt. Certified Instructors & Guaranteed RTO License Assistance',
    description: 'Learn confident, defensive city driving in Gurugram. We offer flexible 6 AM to 8 PM batches in Swift, WagonR, and i20 with dual-brake control, parallel parking simulator practice, and door-to-door pickup.',
    ownerName: 'Kuldeep Yadav (Ex-Army Driving Instructor)',
    phone: '+91 98116 78901',
    whatsapp: '+91 98116 78901',
    email: 'info@expertdrivingschool.in',
    address: 'SCO 8, Opposite Huda Market, Sector 23, Gurugram, Haryana 122017',
    city: 'Gurugram',
    mapsUrl: 'https://maps.google.com/?q=Sector+23+Gurugram',
    openingHours: 'Mon - Sun: 6:00 AM – 8:00 PM',
    logoUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#c2410c',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Book Driving Slot',
    specialBadge: 'Doorstep Pickup & Drop for Training',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-11T09:00:00Z',
    updatedAt: '2026-03-24T16:00:00Z',
    sections: [
      { id: 'about', title: 'Our Training Fleet', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Ladies Special Batch', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Driving Packages & Fees', isEnabled: true, order: 3 },
      { id: 'timings', title: 'Batch Slots', isEnabled: true, order: 4 },
      { id: 'contact', title: 'Book Driving Slot', isEnabled: true, order: 5 }
    ],
    offers: [
      {
        id: 'drv-off-1',
        title: 'Ladies Morning Slot 15% Off',
        description: 'Special female instructor dedicated batches between 9 AM and 12 PM with doorstep pickup.',
        discountPercent: 15,
        couponCode: 'WOMENDRIVE',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'dr-1', name: 'Comprehensive 4-Wheeler Car Driving Course (21 Days)', description: 'Daily 30 mins 1-on-1 practical driving on highways and city traffic + simulator theory.', price: 5500, discountPrice: 4800, category: 'Four Wheeler', isAvailable: true, duration: '21 Days' },
      { id: 'dr-2', name: 'Crash Course for Beginners (10 Days Intensive)', description: '60 mins daily driving covering night driving, reverse parking, and steep slope hill control.', price: 4200, category: 'Four Wheeler', isAvailable: true, duration: '10 Days' },
      { id: 'dr-3', name: 'Permanent Driving License (DL) Documentation & RTO Test Prep', description: 'Learner license filing, slot booking, mock driving test, and documentation assistance.', price: 2200, discountPrice: 1850, category: 'RTO License', isAvailable: true }
    ],
    gallery: [
      { id: 'drg-1', title: 'Dual-Control Training Fleet', category: 'facilities', imageUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  // 12. Photography / videography studio
  {
    id: 'drishti-wedding-photography',
    slug: 'drishti-wedding-photography',
    businessName: 'Drishti Cinematic Wedding Studio',
    category: 'photography',
    templateId: 'photo-cinematic',
    tagline: 'Timeless Candid Weddings, Pre-Wedding Films & High-Fashion Portraits',
    description: 'Award-winning visual storytellers capturing love stories across Jaipur, Udaipur, Delhi, and Goa. Equipped with Sony FX3 cinema cameras, aerial 4K drones, and cinematic color-grading editors who turn wedding moments into heirloom cinema.',
    ownerName: 'Arjun & Maya Shekhawat',
    phone: '+91 98280 56789',
    whatsapp: '+91 98280 56789',
    email: 'films@drishtistudio.in',
    address: 'Studio 4, Heritage Arcade, C-Scheme, Jaipur, Rajasthan 302001',
    city: 'Jaipur',
    mapsUrl: 'https://maps.google.com/?q=C-Scheme+Jaipur',
    openingHours: 'Mon - Sun: 10:00 AM – 8:00 PM',
    logoUrl: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#111827',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Check Date Availability',
    specialBadge: 'Worldwide Destination Weddings',
    status: 'published',
    pricingPlanId: 'premium',
    amountPaid: 1999,
    paymentStatus: 'paid',
    createdAt: '2026-03-12T11:00:00Z',
    updatedAt: '2026-03-24T18:30:00Z',
    sections: [
      { id: 'about', title: 'Our Cinematic Vision', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Early Bird Wedding Waiver', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Wedding & Film Packages', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Candid Portfolio', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Consultation Hours', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Check Date Availability', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'photo-off-1',
        title: 'Complimentary Pre-Wedding Drone Shoot',
        description: 'Book a 2-day wedding package 45 days in advance and receive a free 4K aerial pre-wedding teaser video.',
        discountPercent: 100,
        couponCode: 'DRONEFREE',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'ph-1', name: 'Grand 2-Day Wedding Cinema & Candid Photo Package', description: 'Includes 2 candid photographers, 2 cinematographers, drone, 150-page leather album, and 45-min documentary film.', price: 145000, discountPrice: 125000, category: 'Wedding Packages', isAvailable: true, unit: 'Complete Event' },
      { id: 'ph-2', name: 'Palace Pre-Wedding Cinematic Shoot (Jaipur / Udaipur)', description: 'Full day shoot at heritage fort with 3 costume changes, hair-makeup artist, and 3-minute teaser.', price: 45000, discountPrice: 38000, category: 'Pre-Wedding', isAvailable: true, unit: '1 Day Shoot' },
      { id: 'ph-3', name: 'Studio Maternity & Newborn Baby Portraits', description: 'Warm heated studio lighting, creative props, newborn wrap styling, and 25 edited retouched frames.', price: 18000, category: 'Portraits', isAvailable: true, unit: 'Session' }
    ],
    gallery: [
      { id: 'phg-1', title: 'Royal Heritage Jaimala at Dusk', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  // 13. Event planner / decorator
  {
    id: 'utsav-events-decorations',
    slug: 'utsav-events-decorations',
    businessName: 'Utsav Royal Weddings & Corporate Decor',
    category: 'events',
    templateId: 'events-royal',
    tagline: 'Bespoke Mandap Styling, Fairy-Light Canopies & Flawless Event Management',
    description: 'Transforming banquets, farmhouses, and outdoor lawns into enchanting wonderlands. From Haldi-Mehendi marigold floral setups to royal mirror mandaps and live DJ sound lighting rigs across Delhi NCR.',
    ownerName: 'Kunal Malhotra & Divya Bhatia',
    phone: '+91 99990 65432',
    whatsapp: '+91 99990 65432',
    email: 'cheers@utsavevents.in',
    address: 'Plot 55, Sector 29, City Centre, Gurugram, Haryana 122002',
    city: 'Gurugram',
    mapsUrl: 'https://maps.google.com/?q=Sector+29+Gurugram',
    openingHours: 'Mon - Sun: 10:00 AM – 9:00 PM',
    logoUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#701a75',
    bookingType: 'reservation_party',
    bookingCtaLabel: 'Enquire Event Date',
    specialBadge: '500+ Luxury Events Completed',
    status: 'published',
    pricingPlanId: 'premium',
    amountPaid: 1999,
    paymentStatus: 'paid',
    createdAt: '2026-03-13T10:00:00Z',
    updatedAt: '2026-03-24T17:00:00Z',
    sections: [
      { id: 'about', title: 'Our Event Artistry', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Seasonal Event Bundles', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Decoration Packages', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Stage & Mandap Gallery', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Desk Hours', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Event Date Consultation', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'evt-off-1',
        title: 'Free Mehendi Photobooth Decor',
        description: 'Book complete wedding decor and receive a free neon sign & floral photobooth setup.',
        discountPercent: 100,
        couponCode: 'FREEBOOTH',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'ev-1', name: 'Grand Royal Glass Mandap with Fresh Floral Arches', description: 'Crystal chandeliers, imported carnations, tuberoses, and brass havan kund setup.', price: 85000, discountPrice: 72000, category: 'Wedding Mandap', isAvailable: true, unit: 'Complete Setup' },
      { id: 'ev-2', name: 'Vibrant Haldi & Mehendi Marigold Canopy Setup', description: 'Yellow-orange drape cabanas, Rajasthani umbrellas, cane jhula, and brass urli flower floating.', price: 35000, discountPrice: 29999, category: 'Pre-Wedding Decor', isAvailable: true, unit: 'Setup' },
      { id: 'ev-3', name: 'Cocktail & Sangeet LED Wall & Concert Truss Lighting', description: 'Sharp beam moving heads, hazers, CO2 jets, and synchronized sound reinforcement.', price: 55000, category: 'Lighting & Sound', isAvailable: true, unit: 'Night Setup' }
    ],
    gallery: [
      { id: 'evg-1', title: 'Floral Mandap by the Lawn', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  // 14. Pet grooming / pet shop
  {
    id: 'tails-whiskers-pet-spa',
    slug: 'tails-whiskers-pet-spa',
    businessName: 'Tails & Whiskers Pet Spa & Vet Clinic',
    category: 'pets',
    templateId: 'pets-cozy',
    tagline: 'Gentle Hydrotherapy Baths, Breed Styling, Anti-Tick Washes & Boarding',
    description: 'Bandra West’s favorite pet grooming salon and wellness sanctuary. Hypoallergenic organic shampoos, de-shedding treatments, veterinary consultation, and clean air-conditioned daycare suites with webcam access.',
    ownerName: 'Dr. Rhea Miranda (BVSc & AH)',
    phone: '+91 99205 67890',
    whatsapp: '+91 99205 67890',
    email: 'woof@tailswhiskers.in',
    address: 'Shop 2, Pali Hill Road, Near Gold’s Gym, Bandra West, Mumbai, Maharashtra 400050',
    city: 'Mumbai',
    mapsUrl: 'https://maps.google.com/?q=Pali+Hill+Bandra+West+Mumbai',
    openingHours: 'Tue - Sun: 9:30 AM – 7:30 PM | Monday Closed',
    logoUrl: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#b45309',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Book Pet Grooming Slot',
    specialBadge: 'Certified Fear-Free Groomers',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-14T09:00:00Z',
    updatedAt: '2026-03-24T15:30:00Z',
    sections: [
      { id: 'about', title: 'Why Pets Love Us', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Spa Packages', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Grooming Services & Rate Card', isEnabled: true, order: 3 },
      { id: 'timings', title: 'Salon Timings', isEnabled: true, order: 4 },
      { id: 'contact', title: 'Book Pet Slot', isEnabled: true, order: 5 }
    ],
    offers: [
      {
        id: 'pet-off-1',
        title: 'Puppy First Spa Package 25% Off',
        description: 'Gentle introductory bath, paw pad massage, ear cleansing, and nail clipping for puppies under 6 months.',
        discountPercent: 25,
        couponCode: 'PUPPYSPA',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'pt-1', name: 'Full Grooming & Styling Package (Medium/Large Dogs)', description: 'Warm water oatmeal bath, anti-flea dip, full breed haircut, ear flush, and teeth brushing.', price: 1800, discountPrice: 1550, category: 'Dog Grooming', isAvailable: true, duration: '90 Mins' },
      { id: 'pt-2', name: 'Cat De-shedding & Sanitizing Waterless Spa', description: 'Stress-free feline coat conditioning, furminator undercoat removal, and gentle claw manicure.', price: 1400, category: 'Cat Grooming', isAvailable: true, duration: '60 Mins' },
      { id: 'pt-3', name: 'Veterinary Checkup & Annual Vaccination (7-in-1)', description: 'Thorough health screening, weight check, Nobivac DHPPiL vaccine, and digital medical record.', price: 1200, category: 'Veterinary Clinic', isAvailable: true, duration: '20 Mins' }
    ],
    gallery: [
      { id: 'ptg-1', title: 'Ergonomic Hydrotherapy Bath Tub', category: 'facilities', imageUrl: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  // 15. Locksmith / key maker
  {
    id: 'master-key-emergency-locksmith',
    slug: 'master-key-emergency-locksmith',
    businessName: 'MasterKey 24hr Emergency Locksmith & Keys',
    category: 'locksmith',
    templateId: 'locksmith-urgent',
    tagline: 'Locked Out of Home or Car? Doorstep Assistance in 20 Mins · Computerized Duplicate Keys',
    description: 'Delhi NCR’s trusted emergency key locksmith. Laser computerized key cutting, transponder car key programming, Godrej door lock repairs, digital keypad lock installation, and safe locker unlocking without damage.',
    ownerName: 'Pawan Kumar & Sons',
    phone: '+91 98114 56789',
    whatsapp: '+91 98114 56789',
    email: 'emergency@masterkeydelhi.in',
    address: 'Shop 7, Main Market, Connaught Place, New Delhi 110001',
    city: 'New Delhi',
    mapsUrl: 'https://maps.google.com/?q=Connaught+Place+Delhi',
    openingHours: '24 Hours · 7 Days a Week (Emergency Dispatch)',
    logoUrl: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#991b1b',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Call 24x7 Locksmith',
    specialBadge: 'Arrives in 20 Minutes (24x7)',
    status: 'published',
    pricingPlanId: 'starter',
    amountPaid: 999,
    paymentStatus: 'paid',
    createdAt: '2026-03-15T08:00:00Z',
    updatedAt: '2026-03-24T11:00:00Z',
    sections: [
      { id: 'about', title: 'Why Trust MasterKey', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Lock Bundles', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Emergency Services & Key Rates', isEnabled: true, order: 3 },
      { id: 'timings', title: '24hr Service Guarantee', isEnabled: true, order: 4 },
      { id: 'contact', title: 'Request Immediate Locksmith', isEnabled: true, order: 5 }
    ],
    offers: [
      {
        id: 'lock-off-1',
        title: 'Buy 2 Duplicate Keys, Get 3rd Free',
        description: 'Applicable on all high-security dimple and laser computerized keys cut in-shop.',
        discountPercent: 33,
        couponCode: 'KEYS3FOR2',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'lk-1', name: 'Emergency Door Unlock (Locked Out of House)', description: 'Damage-free lock picking by verified background-checked locksmith. ID proof required.', price: 500, category: 'Emergency Services', isAvailable: true, duration: '20 Mins' },
      { id: 'lk-2', name: 'Car Door Unlock & Smart Key Transponder Programming', description: 'Decoding immobilizer chip for Maruti, Hyundai, Honda, Tata, Toyota vehicles on-site.', price: 2500, discountPrice: 2199, category: 'Automotive Locksmith', isAvailable: true, duration: '45 Mins' },
      { id: 'lk-3', name: 'Computerized Laser Dimple Key Duplication (Pair)', description: 'Precision CNC milled brass key copy tested with 100% smooth turning guarantee.', price: 300, category: 'Key Making', isAvailable: true, duration: '10 Mins' },
      { id: 'lk-4', name: 'Godrej / Yale Smart Fingerprint Digital Lock Installation', description: 'Mortise hole routing, alignment, biometric fingerprint and PIN code calibration.', price: 1499, category: 'Smart Locks', isAvailable: true, duration: '60 Mins' }
    ],
    gallery: [
      { id: 'lkg-1', title: 'Computerized Laser Key Cutting Lathe', category: 'facilities', imageUrl: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  // 16. Computer/laptop repair & sales
  {
    id: 'chipset-laptop-care',
    slug: 'chipset-laptop-care',
    businessName: 'ChipSet Laptop Solutions & Refurbished Mart',
    category: 'computer',
    templateId: 'computer-tech',
    tagline: 'Motherboard IC Level Repairs, SSD/RAM Upgrades & Certified Dell / ThinkPad Laptops',
    description: 'Bengaluru’s premier computer repair center in SP Road & Koramangala. Solving blue screens, broken laptop hinges, water spill motherboards, and offering corporate-lease refurbished laptops with 1-year replacement warranty.',
    ownerName: 'Santosh Kumar & K.R. Murthy',
    phone: '+91 98455 12345',
    whatsapp: '+91 98455 12345',
    email: 'support@chipsetcare.in',
    address: 'Shop 14, First Floor, SP Road Computer Market, Bengaluru, Karnataka 560002',
    city: 'Bengaluru',
    mapsUrl: 'https://maps.google.com/?q=SP+Road+Bengaluru',
    openingHours: 'Mon - Sat: 10:30 AM – 8:30 PM | Sunday Closed',
    logoUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#1e3a8a',
    bookingType: 'pickup_drop',
    bookingCtaLabel: 'Book Laptop Diagnostic',
    specialBadge: 'Free Problem Diagnosis & Estimate',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-16T10:00:00Z',
    updatedAt: '2026-03-24T17:30:00Z',
    sections: [
      { id: 'about', title: 'Why ChipSet Lab', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Upgrade Combos', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Repairs & Refurbished Laptops', isEnabled: true, order: 3 },
      { id: 'timings', title: 'Lab Hours', isEnabled: true, order: 4 },
      { id: 'contact', title: 'Book Diagnostic Drop-off', isEnabled: true, order: 5 }
    ],
    offers: [
      {
        id: 'cmp-off-1',
        title: 'Superfast SSD Speed Boost Combo @ ₹2,499',
        description: 'Includes 512GB NVMe SSD + OS clone + thermal paste re-application + interior fan dust clean.',
        discountPercent: 20,
        couponCode: 'SSDSPEED',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'cp-1', name: 'Laptop Motherboard Chip-Level Repair & No-Power Fix', description: 'BGA reballing, power MOSFET replacement, capacitor shorting resolution with 90-day warranty.', price: 2500, discountPrice: 2199, category: 'Hardware Repair', isAvailable: true, duration: '24 Hours' },
      { id: 'cp-2', name: 'Laptop Broken Hinge & Body Fabrication', description: 'Metal brass insert reinforcement restoring smooth screen opening without cracking plastic bezel.', price: 1200, category: 'Physical Repair', isAvailable: true, duration: '4 Hours' },
      { id: 'cp-3', name: 'Refurbished ThinkPad T490 (Core i5 8th Gen / 16GB / 512GB SSD)', description: 'Military grade durable laptop, backlit keyboard, FHD display, 1-Year store replacement warranty.', price: 24500, discountPrice: 22000, category: 'Refurbished Laptops', isAvailable: true, unit: '1 Unit' }
    ],
    gallery: [
      { id: 'cpg-1', title: 'BGA Infrared Rework Machine', category: 'facilities', imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  // 17. Hardware / paint shop
  {
    id: 'bharat-hardware-paints',
    slug: 'bharat-hardware-paints',
    businessName: 'Bharat Hardware, Sanitary & Asian Paints Mart',
    category: 'hardware',
    templateId: 'hardware-tools',
    tagline: 'Asian Paints Colour World, Bosch Power Tools & Astral CPVC Plumbing Depot',
    description: 'Wholesale and retail distributor of architectural hardware, decorative door handles, waterproof primers, emulsions, and sanitary fixtures. Send your contractor requirement list for wholesale bulk quotations.',
    ownerName: 'Vinod & Saurabh Gupta',
    phone: '+91 98108 90123',
    whatsapp: '+91 98108 90123',
    email: 'sales@bharathardware.in',
    address: 'Shop 5-8, Timber Market, Ring Road, Kirti Nagar, New Delhi 110015',
    city: 'New Delhi',
    mapsUrl: 'https://maps.google.com/?q=Kirti+Nagar+Timber+Market',
    openingHours: 'Mon - Sat: 9:30 AM – 8:00 PM | Sunday Closed',
    logoUrl: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#334155',
    bookingType: 'whatsapp_order',
    bookingCtaLabel: 'Send Requirement List',
    specialBadge: 'Authorised Asian Paints Tinting Center',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-17T09:00:00Z',
    updatedAt: '2026-03-24T16:00:00Z',
    sections: [
      { id: 'about', title: 'About Depot', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Contractor Discounts', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Hardware & Paint Catalog', isEnabled: true, order: 3 },
      { id: 'timings', title: 'Store Timings', isEnabled: true, order: 4 },
      { id: 'contact', title: 'Request Bulk Quotation', isEnabled: true, order: 5 }
    ],
    offers: [
      {
        id: 'hard-off-1',
        title: 'Paint Project Flat 12% Bulk Rebate',
        description: 'Orders above 50 litres of Asian Paints Apex Ultima or Royale receive 12% cash discount.',
        discountPercent: 12,
        couponCode: 'PAINTBULK',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'hd-1', name: 'Asian Paints Apex Ultima Exterior Emulsion (20 Litres)', description: 'Advanced anti-algae silicone formula with 7-year comprehensive weather performance warranty.', price: 6800, discountPrice: 6150, category: 'Paints & Wall Primer', isAvailable: true, unit: '20L Bucket' },
      { id: 'hd-2', name: 'Bosch GSB 500W Impact Drill Machine Kit with 100 Accessories', description: 'Dual mode hammer drill with bits, claw hammer, pliers, and adjustable wrench in carry box.', price: 3499, discountPrice: 3199, category: 'Power Tools', isAvailable: true, unit: '1 Kit' },
      { id: 'hd-3', name: 'Godrej Stainless Steel Heavy Door Handle Set (Pair)', description: 'Grade 304 satin steel handles with matching mortise lock body and 3 computer dimple keys.', price: 1850, category: 'Door Fittings', isAvailable: true, unit: '1 Set' }
    ],
    gallery: [
      { id: 'hdg-1', title: 'Computerized Paint Colour Tinting Machine', category: 'facilities', imageUrl: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  // 18. Furniture shop
  {
    id: 'shekhawati-teak-furniture',
    slug: 'shekhawati-teak-furniture',
    businessName: 'Shekhawati Teak & Sheesham Furniture Studio',
    category: 'furniture',
    templateId: 'furniture-teak',
    tagline: '100% Solid Indian Hardwood, Hand-Carved Dining Sets & Bespoke Wardrobes',
    description: 'Direct manufacturer of seasoned Sheesham and CP Teak furniture with lifetime termite resistance. Custom upholstered sofa sectionals, hydraulic king beds, and 8-seater dining tables crafted by ancestral Rajasthani carpenters.',
    ownerName: 'Bhanwar Singh & Mahendra Rathore',
    phone: '+91 98292 34567',
    whatsapp: '+91 98292 34567',
    email: 'teak@shekhawatifurniture.in',
    address: 'Furniture Block, Near Metro Pillar 112, Kirti Nagar, New Delhi 110015',
    city: 'New Delhi',
    mapsUrl: 'https://maps.google.com/?q=Kirti+Nagar+Furniture+Block',
    openingHours: 'Mon - Sun: 11:00 AM – 8:30 PM',
    logoUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#451a03',
    bookingType: 'whatsapp_order',
    bookingCtaLabel: 'Enquire Custom Furniture',
    specialBadge: 'Lifetime Termite Resistance Guarantee',
    status: 'published',
    pricingPlanId: 'premium',
    amountPaid: 1999,
    paymentStatus: 'paid',
    createdAt: '2026-03-18T11:00:00Z',
    updatedAt: '2026-03-24T18:00:00Z',
    sections: [
      { id: 'about', title: 'Our Woodcraft Story', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Showroom Clearance Deals', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Furniture Catalog', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Showroom Tour', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Visit Hours', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Bespoke Order Consultation', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'fur-off-1',
        title: 'Dining Set Combo: Free 6 Chairs Cushions',
        description: 'Buy any 6-seater solid Sheesham wood dining table and receive complimentary stain-proof fabric cushions.',
        discountPercent: 100,
        couponCode: 'DININGCOMBO',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'fr-1', name: 'Solid Sheesham Wood King Bed with Hydraulic Storage', description: 'Crafted from 100% seasoned Indian rosewood with heavy-gauge German hydraulic lift mechanism.', price: 38500, discountPrice: 34999, category: 'Beds & Bedroom', isAvailable: true, unit: 'King Size' },
      { id: 'fr-2', name: '6-Seater Royal Dining Table Set with High-Back Chairs', description: 'Walnut honey finish dining table with 6 hand-carved ergonomic lumbar support chairs.', price: 42000, discountPrice: 37500, category: 'Dining Sets', isAvailable: true, unit: '7 Piece Set' },
      { id: 'fr-3', name: 'L-Shaped Sectional Sofa (Italian Velvet Fabric)', description: 'High-density 40-density foam cushioning with pocket springs and 5 matching bolster throw pillows.', price: 48000, discountPrice: 42999, category: 'Living Room', isAvailable: true, unit: '6 Seater' }
    ],
    gallery: [
      { id: 'frg-1', title: 'Handcrafted Sheesham Dining Sets', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80' }
    ]
  }
];
