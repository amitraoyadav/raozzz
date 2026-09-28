import { BusinessWebsite } from '../types';

export const NEW_DEMO_SITES_PART3: BusinessWebsite[] = [
  // 29. Cycle Shop & Repair
  {
    id: 'pedalpro-cycle-workshop',
    slug: 'pedalpro-cycle-workshop',
    businessName: 'PedalPro Cycle Store & Master Workshop',
    category: 'cycle_repair',
    templateId: 'cycle-kinetic',
    tagline: 'Shimano Certified Mechanics, Premium MTBs & Doorstep Bicycle Servicing',
    description: 'Premier cycling boutique and overhaul workshop in Delhi NCR. Authorized dealer for Trek, Giant, Scott, and Firefox. We offer comprehensive overhaul servicing, hydraulic disc brake bleeding, gear tuning, puncture-proof tubeless conversion, and free doorstep bike pickup.',
    ownerName: 'Rohan Banerjee (Brevet Randonneur)',
    phone: '+91 98116 88401',
    whatsapp: '+91 98116 88401',
    email: 'service@pedalprocycles.in',
    address: 'Shop 5, Sector 49, Sohna Road, Gurugram, Haryana 122018',
    city: 'Gurugram',
    mapsUrl: 'https://maps.google.com/?q=Sohna+Road+Gurugram',
    openingHours: 'Tue - Sun: 7:30 AM – 8:30 PM (Monday Closed)',
    logoUrl: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#14232B',
    secondaryColor: '#84CC16',
    fontFamily: 'Space Grotesk, sans-serif',
    bookingType: 'pickup_drop',
    bookingCtaLabel: 'Schedule Cycle Overhaul Pickup',
    specialBadge: 'Free Doorstep Cycle Pickup & Drop',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'The Workshop', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Service Packs', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Bicycle Service Menu & Sales', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Workshop Bays', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Operating Hours', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Book Overhaul Pickup', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'cy-off-1',
        title: 'Master Overhaul Service Package 25% Off',
        description: 'Complete degreasing, ultrasonic chain wash, hub greasing, wheel truing, and brake tune-up for ₹899.',
        discountPercent: 25,
        couponCode: 'TUNEUP26',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'cy-s-1',
        name: 'Master Bicycle Overhaul & Degreasing Service',
        description: 'Complete strip down, ultrasonic drivetrain bath, bottom bracket & headset repacking, and laser wheel truing.',
        price: 1200,
        discountPrice: 899,
        category: 'Workshop Servicing',
        isAvailable: true,
        unit: 'per cycle'
      },
      {
        id: 'cy-s-2',
        name: 'Firefox Target 29D Alloy 21-Speed Mountain Bike',
        description: 'Lightweight aluminium alloy frame, Shimano Tourney gears, front zoom suspension fork, and mechanical disc brakes.',
        price: 21500,
        discountPrice: 18999,
        category: 'New Bicycles',
        isAvailable: true,
        unit: 'ready to ride'
      }
    ],
    gallery: [
      { id: 'cy-g-1', title: 'PedalPro Park Tool Repair Stand Workshop', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 30. Auto Garage / Mechanic
  {
    id: 'grand-auto-works-garage',
    slug: 'grand-auto-works-garage',
    businessName: 'Grand Auto Works Multi-Brand Garage',
    category: 'auto_garage',
    templateId: 'garage-turbo',
    tagline: 'German Diagnostic Scanning, Paint Booth & 6-Month Service Warranty',
    description: 'State-of-the-art multi-brand automobile workshop for Maruti, Hyundai, Honda, Tata, Mahindra, Toyota, and German vehicles. Equipped with 6 hydraulic bays, Launch OBD2 computer scanners, dust-free paint booth, 3D laser wheel alignment, and genuine OEM parts.',
    ownerName: 'Harvinder & Kuldeep Singh',
    phone: '+91 98115 99341',
    whatsapp: '+91 98115 99341',
    email: 'service@grandautoworks.in',
    address: 'Plot 88, Auto Market, Sector 18, Gurugram, Haryana 122008',
    city: 'Gurugram',
    mapsUrl: 'https://maps.google.com/?q=Sector+18+Gurugram',
    openingHours: 'Mon - Sun: 8:30 AM – 8:00 PM',
    logoUrl: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#131418',
    secondaryColor: '#F59E0B',
    fontFamily: 'Space Grotesk, sans-serif',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Book Car Service & Inspection',
    specialBadge: '6-Month Warranty on All Parts & Labor',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'About Workshop', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Service Packages', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Periodic Maintenance & Rates', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Hydraulic Bays', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Slot Hours', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Book Car Service', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'gar-off-1',
        title: 'Comprehensive Periodic Car Service + Free Foam Wash',
        description: 'Engine oil replacement (Castrol/Mobil 1), oil filter, air filter cleaning, brake servicing, and 45-point health checkup at ₹2,799.',
        discountPercent: 30,
        couponCode: 'CARCARE26',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'gar-s-1',
        name: 'Standard Periodic Maintenance Service (Hatchback/Sedan)',
        description: 'Synthetic engine oil change, oil filter renewal, spark plug clean, coolant top-up, battery health report, and underbody inspection.',
        price: 3800,
        discountPrice: 2799,
        category: 'Periodic Maintenance',
        isAvailable: true,
        unit: 'per car service'
      },
      {
        id: 'gar-s-2',
        name: 'Bavarian Oven Baked Panel Painting & Dent Removal',
        description: 'Computerized paint shade matching, primer filler, anti-rust coat, and clear coat lacquer with 2-year warranty against fading.',
        price: 2600,
        discountPrice: 2199,
        category: 'Dent & Paint',
        isAvailable: true,
        unit: 'per panel'
      }
    ],
    gallery: [
      { id: 'gar-g-1', title: 'Grand Auto Works Hydraulic Service Bay', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 31. Vehicle Scrapping / RC Surrender Service
  {
    id: 'greenscrap-vehicle-deregistration',
    slug: 'greenscrap-vehicle-deregistration',
    businessName: 'GreenScrap RTO Vehicle Scrapping & RC Surrender',
    category: 'vehicle_scrapping',
    templateId: 'scrapping-eco',
    tagline: 'Authorized Certificate of Deposit (CoD), Instant Bank Payment & Free Towing',
    description: 'Registered Vehicle Scrapping Facility (RVSF) under the National Vehicle Scrappage Policy. We handle legally compliant scrapping of 10-year diesel and 15-year petrol vehicles with official RTO Vahan portal deregistration, Certificate of Deposit (CoD) for road tax discounts, and free flatbed towing.',
    ownerName: 'Rajesh Mittal & Team',
    phone: '+91 98114 11029',
    whatsapp: '+91 98114 11029',
    email: 'support@greenscrap.in',
    address: 'Facility Yard 19, Mayapuri Industrial Area Phase II, New Delhi 110064',
    city: 'New Delhi',
    mapsUrl: 'https://maps.google.com/?q=Mayapuri+Phase+2+New+Delhi',
    openingHours: 'Mon - Sat: 9:00 AM – 7:00 PM',
    logoUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#1B291D',
    secondaryColor: '#CA8A04',
    fontFamily: 'Space Grotesk, sans-serif',
    bookingType: 'pickup_drop',
    bookingCtaLabel: 'Get Scrap Value & Free Towing Pickup',
    specialBadge: 'Govt MoRTH Authorized RVSF Facility',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'Official RVSF Yard', isEnabled: true, order: 1 },
      { id: 'offers', title: 'New Car Tax Incentives', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Scrap Valuation & RC Process', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Scrapping Facility', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Pickup Timings', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Request Scrap Quote', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'vs-off-1',
        title: 'Up to 25% Road Tax Discount on New Car with Certificate of Deposit',
        description: 'Surrender your old vehicle and receive official Certificate of Deposit eligible for up to 25% road tax rebate on new car purchase.',
        discountPercent: 25,
        couponCode: 'SCRAP26',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'vs-s-1',
        name: 'End-of-Life Car Scrapping & Complete RTO RC Deregistration',
        description: 'Chassis plate cutting, metal weight assessment, instant NEFT bank transfer, official Vahan deregistration, and CoD certificate.',
        price: 35000,
        discountPrice: 42000,
        category: 'Car Scrapping',
        isAvailable: true,
        unit: 'average payout based on metal weight'
      },
      {
        id: 'vs-s-2',
        name: 'Free Hydraulic Flatbed Doorstep Towing (Delhi NCR)',
        description: 'Safe non-running vehicle pickup from your parking slot directly to authorized yard with video handover.',
        price: 0,
        category: 'Doorstep Pickup',
        isAvailable: true,
        unit: 'complimentary with scrap booking'
      }
    ],
    gallery: [
      { id: 'vs-g-1', title: 'MoRTH Certified Vehicle Dismantling Yard', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 32. Cab / Taxi Rental
  {
    id: 'royalmiles-cabs-rental',
    slug: 'royalmiles-cabs-rental',
    businessName: 'RoyalMiles Outstation Cabs & Airport Taxi',
    category: 'cab_taxi_rental',
    templateId: 'cabs-fleet',
    tagline: 'All-Inclusive Outstation Cabs, Airport Transfers & Verified Chauffeurs',
    description: 'Reliable 24x7 cab rental service across Delhi, Jaipur, Agra, Chandigarh, and Dehradun. Clean sanitised fleet of Toyota Innova Crysta, Maruti Dzire, Ertiga, and Urbania with transparent per-KM billing, zero toll hidden charges, and uniformed professional drivers.',
    ownerName: 'Gurpreet Singh',
    phone: '+91 98110 55678',
    whatsapp: '+91 98110 55678',
    email: 'booking@royalmilescabs.in',
    address: 'Near IGI Airport Terminal 3, Mahipalpur, New Delhi 110037',
    city: 'New Delhi',
    mapsUrl: 'https://maps.google.com/?q=Mahipalpur+New+Delhi',
    openingHours: 'Mon - Sun: 24x7 Booking & Fleet Operations',
    logoUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#111417',
    secondaryColor: '#EAB308',
    fontFamily: 'Space Grotesk, sans-serif',
    bookingType: 'reservation_party',
    bookingCtaLabel: 'Reserve Outstation Cab / Airport Taxi',
    specialBadge: 'Guaranteed On-Time or Free Ride',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'Why RoyalMiles', isEnabled: true, order: 1 },
      { id: 'offers', title: 'One-Way Deals', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Outstation Fleet & Per KM Rates', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Our Luxury Fleet', isEnabled: true, order: 4 },
      { id: 'timings', title: '24x7 Availability', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Instant Cab Reservation', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'cb-off-1',
        title: 'One-Way Delhi to Jaipur / Agra Fixed Flat Fare',
        description: 'Clean Dzire AC sedan one-way drop with toll, state tax, and driver allowance included for ₹3,499.',
        discountPercent: 15,
        couponCode: 'HIGHWAY26',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'cb-s-1',
        name: 'Toyota Innova Crysta Luxury 7-Seater Outstation Roundtrip',
        description: 'Captain seats, rear dual AC, push back comfort, mineral water bottles, and experienced highway chauffeur.',
        price: 18,
        discountPrice: 16,
        category: 'Outstation Fleet',
        isAvailable: true,
        unit: 'per KM (min 250 KM/day)'
      },
      {
        id: 'cb-s-2',
        name: 'Delhi IGI Airport (T3/T1) Doorstep Transfer in Sedan',
        description: 'Punctual doorstep pickup, boot space for 3 large suitcases, and live driver tracking link.',
        price: 1200,
        discountPrice: 999,
        category: 'Airport Transfers',
        isAvailable: true,
        unit: 'per drop (within 30 KM)'
      }
    ],
    gallery: [
      { id: 'cb-g-1', title: 'Pristine White Toyota Innova Fleet', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 33. Physiotherapy Clinic
  {
    id: 'activespine-physiotherapy-clinic',
    slug: 'activespine-physiotherapy-clinic',
    businessName: 'ActiveSpine Physiotherapy & Sports Rehab',
    category: 'physiotherapy',
    templateId: 'physio-vital',
    tagline: 'Back & Neck Pain Relief, Chiropractic Decompression & Sports Injury Rehab',
    description: 'Evidence-based physical therapy and rehabilitation centre. Specializing in slip disc sciatica decompression, frozen shoulder mobilization, post-ACL knee rehabilitation, dry needling, cupping therapy, and stroke neuro-rehabilitation.',
    ownerName: 'Dr. Shruti Nair (MPT Ortho, MIAP)',
    phone: '+91 98117 00412',
    whatsapp: '+91 98117 00412',
    email: 'care@activespineclinic.in',
    address: 'Clinic 103, Eros City Square, Rosewood City, Sector 49, Gurugram 122018',
    city: 'Gurugram',
    mapsUrl: 'https://maps.google.com/?q=Sector+49+Gurugram',
    openingHours: 'Mon - Sat: 8:00 AM – 8:00 PM (Home Visits Available)',
    logoUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#063B3F',
    secondaryColor: '#F43F5E',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Book Physiotherapy Session',
    specialBadge: 'Certified Chiropractic & Dry Needling',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'Rehab Philosophy', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Package Sessions', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Therapies & Treatment Rates', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Clinic Equipment', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Therapy Timings', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Book Session', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'pt-off-1',
        title: 'Spine & Posture Assessment + 1st Therapy Session',
        description: 'Complete digital postural spine scan, muscle tension mapping, and initial pain-relief therapy for ₹499.',
        discountPercent: 50,
        couponCode: 'RELIEF26',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'pt-s-1',
        name: 'Advanced Spine Decompression & Manual Joint Therapy',
        description: 'Triton computerized lumbar/cervical traction, IFT electrotherapy, ultrasonic healing, and core strengthening exercises.',
        price: 1000,
        discountPrice: 750,
        category: 'Spine & Joint Care',
        isAvailable: true,
        unit: 'per 45-min session',
        doctorQualification: 'MPT (Ortho), Certified Chiropractic',
        doctorExperience: '12+ Yrs Clinical Experience',
        doctorOpdTimings: 'Mon-Sat: 8 AM - 1 PM, 4 PM - 8 PM'
      },
      {
        id: 'pt-s-2',
        name: 'Dry Needling & Myofascial Trigger Point Release',
        description: 'Fine needle muscular trigger stimulation for chronic fibromyalgia, trap tightness, and sports stiffness.',
        price: 1200,
        discountPrice: 950,
        category: 'Sports & Myofascial',
        isAvailable: true,
        unit: 'per session'
      }
    ],
    gallery: [
      { id: 'pt-g-1', title: 'Advanced Spine Physical Therapy Suite', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 34. Musical Instrument Shop
  {
    id: 'sursangeet-instruments',
    slug: 'sursangeet-instruments',
    businessName: 'SurSangeet Guitars & Classical Instruments',
    category: 'musical_instruments',
    templateId: 'sursangeet-sound',
    tagline: 'Yamaha Guitars, Teakwood Harmoniums, Tablas & Electronic Keyboards',
    description: 'Renowned instrument boutique catering to music students, stage artists, and devotional singers. Stocking authentic Yamaha, Fender, Ibanez, and Roland synthesizers alongside handcrafted Calcutta harmoniums, brass sitars, and tuned bayan tablas.',
    ownerName: 'Subhashish Mondal',
    phone: '+91 98113 44091',
    whatsapp: '+91 98113 44091',
    email: 'info@sursangeet.in',
    address: 'Shop 15, Nai Sarak, Chandni Chowk, Delhi 110006',
    city: 'New Delhi',
    mapsUrl: 'https://maps.google.com/?q=Nai+Sarak+Chandni+Chowk',
    openingHours: 'Mon - Sat: 11:00 AM – 8:00 PM (Sunday Closed)',
    logoUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#341A11',
    secondaryColor: '#D97706',
    fontFamily: 'Playfair Display, serif',
    bookingType: 'whatsapp_order',
    bookingCtaLabel: 'WhatsApp Instrument Enquiry',
    specialBadge: 'Free Padded Bag + Digital Clip-On Tuner',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'Musical Heritage', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Student Combos', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Guitars, Keyboards & Classical Instruments', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Instruments Vault', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Studio Hours', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Enquire on WhatsApp', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'mu-off-1',
        title: 'Free Padded Gig Bag + Capo + 3 Picks with Yamaha Guitar',
        description: 'Purchase any acoustic or classical guitar and receive a high-grade foam padded carry bag, metal capo, and picks free.',
        discountPercent: 100,
        couponCode: 'ACOUSTIC',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'mu-s-1',
        name: 'Yamaha F280 Acoustic Dreadnought Guitar (Natural Finish)',
        description: 'Spruce top, rosewood fingerboard, smooth chrome tuners, rich bass resonance, ideal for learners and performers.',
        price: 8990,
        discountPrice: 7890,
        category: 'Acoustic Guitars',
        isAvailable: true,
        unit: 'with free accessories'
      },
      {
        id: 'mu-s-2',
        name: 'Teakwood 3.25 Octave Double-Reed Scale Change Harmonium',
        description: 'Seasoned Burma teak wood, 9 stops, German style brass reeds, bellows with multifold leather, sweet melodious sustain.',
        price: 18500,
        discountPrice: 15900,
        category: 'Indian Classical',
        isAvailable: true,
        unit: 'in travel box'
      }
    ],
    gallery: [
      { id: 'mu-g-1', title: 'Crafted Rosewood Guitars Display', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 35. Bookshop / Library
  {
    id: 'kitabghar-readers-haven',
    slug: 'kitabghar-readers-haven',
    businessName: 'KitabGhar Readers Haven & Library',
    category: 'bookshop_library',
    templateId: 'books-vintage',
    tagline: 'Bestselling Literature, NCERT & Competitive Exams & Cozy Reading Lounge',
    description: 'An independent literary sanctuary and lending library in Delhi. Stocking over 25,000 titles across contemporary fiction, philosophy, Indian history, UPSC/IIT-JEE competitive guides, children’s illustrated picture books, and rare vintage first editions with artisanal filter coffee.',
    ownerName: 'Prof. Alok & Meenakshi Joshi',
    phone: '+91 98114 99120',
    whatsapp: '+91 98114 99120',
    email: 'reader@kitabgharbooks.in',
    address: 'Shop 8-9, Regal Building, Outer Circle, Connaught Place, New Delhi 110001',
    city: 'New Delhi',
    mapsUrl: 'https://maps.google.com/?q=Regal+Building+Connaught+Place',
    openingHours: 'Mon - Sun: 10:30 AM – 9:00 PM',
    logoUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1507842229450-7907e5c5c640?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#311F17',
    secondaryColor: '#DC2626',
    fontFamily: 'Fraunces, Georgia, serif',
    bookingType: 'whatsapp_order',
    bookingCtaLabel: 'Order Books on WhatsApp',
    specialBadge: 'Over 25,000 Curated Titles',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'The Literary Haven', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Membership Perks', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Curated Books & Library Memberships', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Wooden Book Stacks', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Reading Hours', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Order on WhatsApp', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'bk-off-1',
        title: 'Monthly Unlimited Lending Library Membership at ₹499',
        description: 'Borrow 3 books at a time with zero late fines, doorstep book swaps, and access to our quiet reading room with WiFi.',
        discountPercent: 30,
        couponCode: 'READMORE',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'bk-s-1',
        name: 'The Great Indian Classics Collector Edition Hardcover Set (5 Books)',
        description: 'Includes Tagore, Premchand, R.K. Narayan, and Sadat Hasan Manto in embossed cloth-bound gift presentation.',
        price: 2499,
        discountPrice: 1999,
        category: 'Collector Boxsets',
        isAvailable: true,
        unit: '5-book boxset'
      },
      {
        id: 'bk-s-2',
        name: 'Annual Scholar Library Membership (Home Book Delivery)',
        description: 'Unlimited reading access, access to digital database, monthly author book clubs, and free coffee during visits.',
        price: 5400,
        discountPrice: 4499,
        category: 'Library Memberships',
        isAvailable: true,
        unit: 'per year'
      }
    ],
    gallery: [
      { id: 'bk-g-1', title: 'Floor to Ceiling Wooden Bookcases', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1507842229450-7907e5c5c640?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 36. Curtain & Upholstery Shop
  {
    id: 'royaldrape-curtains-upholstery',
    slug: 'royaldrape-curtains-upholstery',
    businessName: 'Royal Drape Curtains & Sofa Upholstery',
    category: 'curtain_upholstery',
    templateId: 'drape-luxury',
    tagline: 'Motorized Roller Blinds, Velvet Drapes, Sofa Refurbishing & Free Doorstep Measurement',
    description: 'Bespoke soft furnishing atelier catering to luxury homes and apartments. Featuring imported blackout fabrics, sheer linens, motorized remote-operated blinds, and high-density foam sofa re-upholstery with free catalog presentation at your home.',
    ownerName: 'Rajeev & Kamal Sethi',
    phone: '+91 98115 33902',
    whatsapp: '+91 98115 33902',
    email: 'drapes@royaldrapefurnishings.in',
    address: 'Shop 22, Furniture & Furnishing Market, Amar Colony, Lajpat Nagar IV, New Delhi 110024',
    city: 'New Delhi',
    mapsUrl: 'https://maps.google.com/?q=Amar+Colony+Lajpat+Nagar',
    openingHours: 'Mon - Sun: 10:30 AM – 8:30 PM',
    logoUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#21242C',
    secondaryColor: '#D97706',
    fontFamily: 'Playfair Display, serif',
    bookingType: 'whatsapp_order',
    bookingCtaLabel: 'Order Fabric Swatches on WhatsApp',
    specialBadge: 'Free Doorstep Measurement & Swatches',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'About Royal Drape', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Window Packages', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Curtains, Blinds & Sofa Fabrics', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Completed Drapery', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Consultation Hours', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Order Swatches on WhatsApp', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'dr-off-1',
        title: 'Free Premium Stitching with Every 5-Meter Fabric Order',
        description: 'Choose from our luxury velvet or linen collections and get American pleat stitching and eyelets complimentary.',
        discountPercent: 100,
        couponCode: 'DRAPEFREE',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'dr-s-1',
        name: '100% Thermal Blackout Heavy Velvet Curtain (Floor to Ceiling)',
        description: 'Blocks 99% light, provides acoustic sound insulation, pre-stitched with reinforced brass eyelets.',
        price: 1850,
        discountPrice: 1450,
        category: 'Custom Curtains',
        isAvailable: true,
        unit: 'per 9-ft panel'
      },
      {
        id: 'dr-s-2',
        name: 'Motorized Zebra Day & Night Roller Blind (Remote Controlled)',
        description: 'Dual fabric layers for variable light filtering, whisper-quiet Somfy motor, and smart home Alexa compatibility.',
        price: 280,
        discountPrice: 235,
        category: 'Motorized Blinds',
        isAvailable: true,
        unit: 'per sq ft'
      }
    ],
    gallery: [
      { id: 'dr-g-1', title: 'Pleated Velvet Living Room Curtains', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 37. Nursery / Plant Shop
  {
    id: 'greenhaven-exotic-nursery',
    slug: 'greenhaven-exotic-nursery',
    businessName: 'GreenHaven Exotic Plants & Bonsai Nursery',
    category: 'plant_nursery',
    templateId: 'nursery-flora',
    tagline: 'Air-Purifying Indoor Plants, Japanese Bonsai, Ceramic Planters & Garden Setup',
    description: 'Lush 2-acre botanical nursery in Delhi NCR offering acclimatized indoor air-purifying plants, 15-year-old Ficus bonsai, vertical garden installation, flowering bougainvillea, organic vermicompost, and handcrafted ceramic pots with free plant health advice.',
    ownerName: 'Virendra & Shailesh Yadav',
    phone: '+91 98114 66723',
    whatsapp: '+91 98114 66723',
    email: 'hello@greenhavennursery.in',
    address: 'Near Sector 54 Metro Station, Golf Course Road, Gurugram 122002',
    city: 'Gurugram',
    mapsUrl: 'https://maps.google.com/?q=Sector+54+Gurugram',
    openingHours: 'Mon - Sun: 7:00 AM – 7:30 PM',
    logoUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#0D311F',
    secondaryColor: '#EA580C',
    fontFamily: 'Fraunces, Georgia, serif',
    bookingType: 'whatsapp_order',
    bookingCtaLabel: 'Order Plants & Pots on WhatsApp',
    specialBadge: 'Free Healthy Plant Replacement Policy',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'Our Botanical Sanctuary', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Balcony Green Bundles', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Indoor Plants, Bonsai & Pots', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Greenhouse Nursery', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Nursery Hours', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Order on WhatsApp', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'pl-off-1',
        title: 'Top 4 NASA Air-Purifying Indoor Plants Set in Ceramic Pots',
        description: 'Snake Plant, ZZ Plant, Money Plant, and Peace Lily in pastel ceramic pots for ₹1,299.',
        discountPercent: 35,
        couponCode: 'GREENHOME',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'pl-s-1',
        name: 'Zamioculcas Zamiifolia (ZZ Plant) in Minimalist Ceramic Planter',
        description: 'Virtually indestructible low-light plant that purifies volatile toxins. Water only once every 3 weeks.',
        price: 650,
        discountPrice: 499,
        category: 'Indoor Foliage',
        isAvailable: true,
        unit: 'with ceramic pot'
      },
      {
        id: 'pl-s-2',
        name: '12-Year-Old Ficus Microcarpa Tiger Bark Bonsai in Clay Tray',
        description: 'Exposed aerial roots, miniature canopy foliage, planted in an authentic glazed ceramic bonsai tray.',
        price: 3200,
        discountPrice: 2750,
        category: 'Exotic Bonsai',
        isAvailable: true,
        unit: 'specimen bonsai'
      }
    ],
    gallery: [
      { id: 'pl-g-1', title: 'Greenhouse Indoor Plants Aisle', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 38. Bridal Makeup Artist
  {
    id: 'noor-bridal-makeup-studio',
    slug: 'noor-bridal-makeup-studio',
    businessName: 'Noor Bridal Makeup & Luxury Hair Lounge',
    category: 'bridal_makeup',
    templateId: 'bridal-glow',
    tagline: 'HD Airbrush Bridal Makeup, Glass Skin Glow & Designer Draping',
    description: 'Celebrity bridal makeup artist with over 12 years of experience. We use exclusively Charlotte Tilbury, Huda Beauty, MAC, and Dior. Offering flawless long-lasting HD airbrush makeovers, royal hair extensions, flower jewelry styling, and luxury dupatta draping for destination weddings.',
    ownerName: 'Simran Noor (Certified by Mario Dedivanovic)',
    phone: '+91 98111 23490',
    whatsapp: '+91 98111 23490',
    email: 'bookings@noorbridalmakeup.in',
    address: 'Studio 4, South Extension Part I, Main Market, New Delhi 110049',
    city: 'New Delhi',
    mapsUrl: 'https://maps.google.com/?q=South+Extension+Part+1+New+Delhi',
    openingHours: 'Mon - Sun: 9:00 AM – 8:30 PM (Destination Travel Pan-India)',
    logoUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#3F0E23',
    secondaryColor: '#E0A96D',
    fontFamily: 'Playfair Display, serif',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Book Bridal Makeup Trial Slot',
    specialBadge: '100% Luxury International Vanity',
    status: 'published',
    pricingPlanId: 'premium',
    amountPaid: 1999,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'The Artist', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Wedding Packages', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Bridal & Party Makeover Tariffs', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Real Brides', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Studio Timings', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Book Makeup Slot', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'br-off-1',
        title: 'Complete 3-Function Bridal Package (Cocktail + Mehendi + Wedding)',
        description: 'Book all 3 functions and receive complimentary mother-of-the-bride HD party makeup worth ₹15,000.',
        discountPercent: 20,
        couponCode: 'BRIDALGLOW',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'br-s-1',
        name: 'Signature HD Airbrush Wedding Day Bridal Makeover',
        description: 'Temptu silicone airbrush, mink eyelashes, designer bun hair styling with fresh flowers, jewelry placement, and dupatta draping.',
        price: 32000,
        discountPrice: 27999,
        category: 'Bridal Makeovers',
        isAvailable: true,
        unit: 'turnkey makeover'
      },
      {
        id: 'br-s-2',
        name: 'Engagement & Cocktail Ultra HD Glow Makeover',
        description: 'Flawless glass skin complexion, soft smoky eye glam, international lashes, Hollywood waves or textured braid.',
        price: 18000,
        discountPrice: 14999,
        category: 'Pre-Wedding Functions',
        isAvailable: true,
        unit: 'per function'
      }
    ],
    gallery: [
      { id: 'br-g-1', title: 'Royal Indian Bridal Makeover & Jewelry', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 39. Cold Storage / Warehouse Rental
  {
    id: 'arcticvault-cold-storage',
    slug: 'arcticvault-cold-storage',
    businessName: 'ArcticVault Cold Storage & Logistics',
    category: 'cold_storage_warehouse',
    templateId: 'coldstorage-pro',
    tagline: 'Multi-Chamber Temperature (-25°C to +15°C), 24x7 Genset & FSSAI Certified',
    description: 'Commercial multi-commodity cold chain and palletized warehousing park along Western Peripheral Expressway (KMP). Dedicated chambers for pharmaceuticals, fresh fruits & vegetables, dairy butter, frozen seafood, and chocolate with computerized real-time data loggers.',
    ownerName: 'Vikas & Naveen Goyal',
    phone: '+91 98113 77890',
    whatsapp: '+91 98113 77890',
    email: 'leases@arcticvaultlogistics.in',
    address: 'Warehouse Complex 14, KMP Expressway Logistics Hub, Kundli-Manesar, Haryana 122503',
    city: 'Delhi NCR',
    mapsUrl: 'https://maps.google.com/?q=Manesar+Logistics+Hub',
    openingHours: 'Mon - Sun: 24x7 Inbound & Outbound Docks',
    logoUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#091C34',
    secondaryColor: '#00B4D8',
    fontFamily: 'Space Grotesk, sans-serif',
    bookingType: 'reservation_party',
    bookingCtaLabel: 'Book Cold Chamber Pallet Space',
    specialBadge: '100% 24x7 Power Backup & FSSAI Licensed',
    status: 'published',
    pricingPlanId: 'premium',
    amountPaid: 1999,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'Warehouse Infrastructure', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Pallet Volume Leases', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Chamber Capacities & Tariffs', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Cold Chamber Bays', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Loading Docks', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Enquire Warehouse Space', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'cs-off-1',
        title: 'Long-Term Contract 15% Pallet Discount',
        description: 'Book 50+ pallet positions for annual storage and get dedicated dock loading slots + 15% discount.',
        discountPercent: 15,
        couponCode: 'COLDCHAIN26',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'cs-s-1',
        name: 'Chilled Storage Chamber Pallet Position (+2°C to +8°C)',
        description: 'Ideal for pharmaceuticals, vaccines, imported chocolates, and dairy products. 24x7 temperature telematics.',
        price: 950,
        discountPrice: 820,
        category: 'Chilled Pallets',
        isAvailable: true,
        unit: 'per pallet position / month'
      },
      {
        id: 'cs-s-2',
        name: 'Deep Freeze Chamber Pallet Position (-18°C to -25°C)',
        description: 'Blast freezer access, heavy duty reach truck handling, for frozen green peas, butter, meat, and ice cream.',
        price: 1350,
        discountPrice: 1190,
        category: 'Frozen Storage',
        isAvailable: true,
        unit: 'per pallet position / month'
      }
    ],
    gallery: [
      { id: 'cs-g-1', title: 'Sub-Zero Palletized Racks & Forklift', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 40. School Van / Transport Service
  {
    id: 'safevan-school-transport',
    slug: 'safevan-school-transport',
    businessName: 'SafeVan School Transport Services',
    category: 'school_transport',
    templateId: 'schoolvan-safety',
    tagline: 'GPS Live Tracking for Parents, Female Attendants & RTO Yellow Cabs',
    description: 'Certified school transport service operating for over 14 years serving DPS, GD Goenka, Pathways, and Heritage schools in Gurugram and South Delhi. Every AC van features live smartphone GPS route tracking, speed governors, CCTV cameras, and background-verified drivers.',
    ownerName: 'Devender & Surender Bhati',
    phone: '+91 98114 88320',
    whatsapp: '+91 98114 88320',
    email: 'admin@safevanschools.in',
    address: 'Depot 6, Sector 46, Near Amity International School, Gurugram 122003',
    city: 'Gurugram',
    mapsUrl: 'https://maps.google.com/?q=Sector+46+Gurugram',
    openingHours: 'Mon - Fri: 6:00 AM – 6:30 PM (Sat Office: 9 AM - 2 PM)',
    logoUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#18181B',
    secondaryColor: '#EAB308',
    fontFamily: 'Space Grotesk, sans-serif',
    bookingType: 'reservation_party',
    bookingCtaLabel: 'Reserve School Van Seat & Route',
    specialBadge: 'Live Parent GPS App & Female Attendant',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'Child Safety First', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Term Booking Discounts', isEnabled: true, order: 2 },
      { id: 'menu', title: 'School Routes & Van Fares', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'School Fleet & Safety Bars', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Route Timing Windows', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Register Child Route', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'van-off-1',
        title: 'Sibling Discount 15% on Annual Fee',
        description: 'Enroll two children from the same family on any Gurugram school route and save 15% on the second seat.',
        discountPercent: 15,
        couponCode: 'SIBLING15',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'van-s-1',
        name: 'Door-to-School Daily Commute (AC Van with GPS + Female Attendant)',
        description: 'Morning pickup from doorstep, drop to school gate, afternoon return drop with live notification to parent phone.',
        price: 3800,
        discountPrice: 3200,
        category: 'School Commute',
        isAvailable: true,
        unit: 'per month / child'
      }
    ],
    gallery: [
      { id: 'van-g-1', title: 'Yellow School Transport Van Fleet', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 41. Dance & Fitness Academy
  {
    id: 'rhythmx-dance-academy',
    slug: 'rhythmx-dance-academy',
    businessName: 'RhythmX Dance & Zumba Fitness Academy',
    category: 'dance_fitness',
    templateId: 'dance-vibe',
    tagline: 'High-Energy Bollywood, Hip-Hop, Salsa & Certified Zumba Weight Loss',
    description: 'Sprawling 3,000 sq ft sprung-wood mirror dance studio with soundproofing and club lighting. Certified instructors teach beginner to pro batches in Bollywood freestyle, hip-hop locking, contemporary jazz, and licensed morning Zumba cardio.',
    ownerName: 'Choreographer Kabir Roy & Team',
    phone: '+91 98112 88710',
    whatsapp: '+91 98112 88710',
    email: 'dance@rhythmxdance.in',
    address: '3rd Floor, Central Arcade, DLF Phase 2, Gurugram 122002',
    city: 'Gurugram',
    mapsUrl: 'https://maps.google.com/?q=DLF+Phase+2+Gurugram',
    openingHours: 'Mon - Sun: 6:30 AM – 9:00 PM',
    logoUrl: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#1F0B38',
    secondaryColor: '#FF007F',
    fontFamily: 'Syne, sans-serif',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Book Free Dance Trial Session',
    specialBadge: 'Certified Licensed Zumba Instructors',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'Studio Energy', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Pass Specials', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Batches & Dance Plans', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Studio Jam', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Batch Schedule', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Book Free Trial', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'dn-off-1',
        title: 'Free 2-Day Trial Pass for Zumba or Hip-Hop',
        description: 'Experience high energy Bollywood choreography and cardio fitness with zero commitment.',
        discountPercent: 100,
        couponCode: 'DANCEPASS',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'dn-s-1',
        name: 'Zumba Morning Cardio & Weight Loss Batch (Mon-Wed-Fri)',
        description: 'Burn up to 600 calories per session, high energy Latin beats, core training, and personal body fat monitoring.',
        price: 3500,
        discountPrice: 2800,
        category: 'Fitness & Zumba',
        isAvailable: true,
        unit: 'per month (12 sessions)'
      },
      {
        id: 'dn-s-2',
        name: 'Bollywood Freestyle & Urban Hip-Hop Choreography Batch',
        description: 'Trending tracks, footwork routines, body isolation, and performance video shoot at the end of each month.',
        price: 3200,
        discountPrice: 2600,
        category: 'Choreography Batches',
        isAvailable: true,
        unit: 'per month (8 sessions)'
      }
    ],
    gallery: [
      { id: 'dn-g-1', title: 'RhythmX Mirrored Dance Studio Floor', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 42. Pathology Lab
  {
    id: 'pulsecare-diagnostic-lab',
    slug: 'pulsecare-diagnostic-lab',
    businessName: 'PulseCare Diagnostic Lab & Pathology Collection',
    category: 'pathology_lab',
    templateId: 'pathology-precision',
    tagline: 'NABL Accredited Testing, Free Doorstep Blood Collection & 6-Hour WhatsApp Reports',
    description: 'Premier clinical diagnostics and pathology laboratory network. Equipped with Roche Cobas automated analyzers, fully barcode-tracked vacutainers, free home blood sample collection by certified phlebotomists, and instant digital report delivery.',
    ownerName: 'Dr. Vivek Saxena (MD Pathology, AIIMS)',
    phone: '+91 98115 11984',
    whatsapp: '+91 98115 11984',
    email: 'reports@pulsecarediagnostics.in',
    address: 'SCO 28, Ground Floor, Old Delhi Road, Sector 14, Gurugram 122001',
    city: 'Gurugram',
    mapsUrl: 'https://maps.google.com/?q=Sector+14+Old+Delhi+Road+Gurugram',
    openingHours: 'Mon - Sun: 6:30 AM – 9:00 PM (Home Sample Collection 6:30 AM - 12 PM)',
    logoUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#082E59',
    secondaryColor: '#EF4444',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Book Doorstep Sample Collection',
    specialBadge: 'NABL Accredited & 6-Hour WhatsApp Reports',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'Diagnostic Accuracy', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Full Body Health Packages', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Blood Tests & Health Checkups', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Automated Lab Analyzers', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Collection Hours', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Book Home Collection', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'lab-off-1',
        title: 'Full Body Comprehensive Health Checkup (85 Parameters) at ₹999',
        description: 'Complete Hemogram (CBC), Lipid Profile, Liver Function (LFT), Kidney Function (KFT), Thyroid (TSH), Blood Sugar & HbA1c with free home collection.',
        discountPercent: 60,
        couponCode: 'FITINDIA',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'lab-s-1',
        name: 'Comprehensive Platinum Health Checkup (85 Blood Markers)',
        description: 'CBC, Lipid profile, Liver LFT, Kidney KFT, HbA1c, Vitamin D3, Vitamin B12, Thyroid TSH, and Urine examination.',
        price: 2499,
        discountPrice: 999,
        category: 'Full Body Checkups',
        isAvailable: true,
        unit: 'includes free home collection',
        doctorQualification: 'MD (Pathology) AIIMS',
        doctorExperience: '19+ Yrs Diagnostic Practice',
        doctorOpdTimings: 'Mon-Sun: 6:30 AM - 12 PM (Home Visits)'
      },
      {
        id: 'lab-s-2',
        name: 'Vitamin D (25-OH) & Vitamin B12 Duo Panel',
        description: 'Quantitative chemiluminescent immunoassay for bone density, nerve health, and fatigue evaluation with 6-hour report.',
        price: 1400,
        discountPrice: 799,
        category: 'Vitamins & Immunity',
        isAvailable: true,
        unit: 'per test panel'
      }
    ],
    gallery: [
      { id: 'lab-g-1', title: 'Automated Roche Cobas Clinical Analyzer', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80' }
    ]
  }
];
