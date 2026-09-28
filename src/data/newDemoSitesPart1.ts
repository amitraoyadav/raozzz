import { BusinessWebsite } from '../types';

export const NEW_DEMO_SITES_PART1: BusinessWebsite[] = [
  // 1. CA / Tax Consultant
  {
    id: 'rk-aggarwal-ca-associates',
    slug: 'rk-aggarwal-ca-associates',
    businessName: 'R.K. Aggarwal & Associates Chartered Accountants',
    category: 'ca_tax',
    templateId: 'ca-precision',
    tagline: 'Tax Planning, GST Compliance, Corporate Audit & Wealth Structuring',
    description: 'Serving over 850+ SMEs, startups, and salaried professionals across Delhi NCR for 18 years. We handle end-to-end Income Tax Return (ITR) filing, GST registration & appeals, statutory company audits, ROC compliances, and capital gains advisory with zero notice stress.',
    ownerName: 'CA Rajesh Aggarwal (FCA, DISA)',
    phone: '+91 98112 45890',
    whatsapp: '+91 98112 45890',
    email: 'contact@rkaggarwalca.in',
    address: 'Suite 408, Mercantile House, K.G. Marg, Connaught Place, New Delhi 110001',
    city: 'New Delhi',
    mapsUrl: 'https://maps.google.com/?q=Connaught+Place+New+Delhi',
    openingHours: 'Mon - Sat: 9:30 AM – 7:30 PM (Sun by Appointment)',
    logoUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#0F2042',
    secondaryColor: '#C5A059',
    fontFamily: 'Cinzel, Georgia, serif',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Book Tax Consultation Slot',
    specialBadge: 'ICAI Peer-Reviewed Practice',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'Firm Profile', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Advisory Packages', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Services & Fee Schedule', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Chambers & Certificates', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Consultation Hours', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Book Consultation', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'ca-off-1',
        title: 'New Startup Incorporation + GST Combo',
        description: 'Complete Pvt Ltd incorporation, 2 DSCs, DIN, PAN, TAN, and free GST registration at ₹6,999 all-inclusive.',
        discountPercent: 30,
        couponCode: 'STARTUP2026',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'ca-s-1',
        name: 'Individual Salaried ITR Filing (Old vs New Regime)',
        description: 'Form 16 computation, capital gains, home loan deductions, and 100% tax optimization audit.',
        price: 1500,
        discountPrice: 1199,
        category: 'Tax Filing & Assessment',
        isAvailable: true,
        unit: 'per return',
        doctorQualification: 'FCA, B.Com (Hons) SRCC',
        doctorExperience: '18+ Years Experience',
        doctorOpdTimings: 'Mon-Sat: 10 AM - 7 PM'
      },
      {
        id: 'ca-s-2',
        name: 'GST Monthly Filing & Reconciliation (GSTR-1 & 3B)',
        description: '2B matching, input tax credit optimization, e-invoice generation, and annual GSTR-9 prep.',
        price: 3500,
        discountPrice: 2999,
        category: 'GST & Indirect Taxes',
        isAvailable: true,
        unit: 'per month'
      },
      {
        id: 'ca-s-3',
        name: 'Private Limited Company Incorporation & Compliance',
        description: 'SPICe+ filing, MoA/AoA drafting, bank account opening support, and MCA annual filing setup.',
        price: 8500,
        discountPrice: 6999,
        category: 'Corporate Legal & ROC',
        isAvailable: true,
        unit: 'turnkey package'
      },
      {
        id: 'ca-s-4',
        name: 'Income Tax Scrutiny & Notice Representation',
        description: 'Faceless assessment response, legal submission drafting under Section 148/143(2), and hearing support.',
        price: 7500,
        category: 'Appeals & Litigation',
        isAvailable: true,
        unit: 'per case review'
      }
    ],
    gallery: [
      { id: 'ca-g-1', title: 'Consultation Conference Chamber', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80' },
      { id: 'ca-g-2', title: 'CP Mercantile House Office', category: 'exterior', imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 2. Lawyer / Advocate
  {
    id: 'chambers-vikram-malhotra-advocate',
    slug: 'chambers-vikram-malhotra-advocate',
    businessName: 'Chambers of Adv. Vikram Malhotra & Associates',
    category: 'lawyer',
    templateId: 'lawyer-heritage',
    tagline: 'High Court & NCLT Litigation, Property Dispute & Corporate Advisory',
    description: 'Premier litigation and corporate counsel practice with appearances across the Delhi High Court, Supreme Court of India, District Courts, and NCLT. Specializing in commercial contracts, property title verification, builder-buyer RERA disputes, matrimonial mediation, and civil recovery.',
    ownerName: 'Adv. Vikram Malhotra (LL.M., Bar Council D/1429)',
    phone: '+91 98101 88472',
    whatsapp: '+91 98101 88472',
    email: 'counsel@malhotrachambers.com',
    address: 'Chamber 214, Lawyers Block, High Court of Delhi, Sher Shah Road, New Delhi 110503',
    city: 'New Delhi',
    mapsUrl: 'https://maps.google.com/?q=Delhi+High+Court',
    openingHours: 'Mon - Fri: 10:00 AM – 7:30 PM (Sat Consultation at South Extn)',
    logoUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#351219',
    secondaryColor: '#C99700',
    fontFamily: 'Prata, serif',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Schedule Legal Consultation',
    specialBadge: 'Supreme Court & High Court Counsel',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'Chambers Profile', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Consultation Retainers', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Practice Areas & Consultations', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Chambers & Law Library', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Chamber Hours', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Schedule Consultation', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'law-off-1',
        title: 'Complete Property Due Diligence & Search Report',
        description: '30-year sub-registrar title search, encumbrance verification, and formal legal vetting memo for ₹7,500.',
        discountPercent: 25,
        couponCode: 'LEGAL2026',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'law-s-1',
        name: 'In-Chamber 45-Min Legal Advisory Session',
        description: 'In-depth case evaluation, legal precedent review, statutory notice drafting strategy, and action roadmap.',
        price: 2500,
        discountPrice: 2000,
        category: 'Advisory & Strategy',
        isAvailable: true,
        unit: 'per 45 mins',
        doctorQualification: 'LL.B. (Campus Law Centre), LL.M.',
        doctorExperience: '16+ Years at Delhi Bar',
        doctorOpdTimings: 'Mon-Sat: 4 PM - 7:30 PM'
      },
      {
        id: 'law-s-2',
        name: 'Property Title Verification & Search Report (30 Yrs)',
        description: 'Vetting of registry documents, conveyance deeds, mutation records, and non-encumbrance certificate.',
        price: 9500,
        discountPrice: 7500,
        category: 'Real Estate & Property',
        isAvailable: true,
        unit: 'per property'
      },
      {
        id: 'law-s-3',
        name: 'Legal Notice Drafting & Reply (Demand/Cheque Bounce/Breach)',
        description: 'Formulation of formal legal notice with statutory Annexures under Section 138 NI Act or breach of contract.',
        price: 4500,
        discountPrice: 3500,
        category: 'Litigation & Notices',
        isAvailable: true,
        unit: 'per notice'
      },
      {
        id: 'law-s-4',
        name: 'Commercial Contract Drafting & NDA Review',
        description: 'Employment agreements, master services agreement (MSA), shareholder pacts, and vendor risk mitigation.',
        price: 6000,
        category: 'Corporate Contracts',
        isAvailable: true,
        unit: 'per agreement'
      }
    ],
    gallery: [
      { id: 'law-g-1', title: 'Chamber Law Library & Conference', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 3. Interior Designer
  {
    id: 'auraspace-luxury-interiors',
    slug: 'auraspace-luxury-interiors',
    businessName: 'AuraSpace Luxury Living & Interiors',
    category: 'interior_design',
    templateId: 'interior-atelier',
    tagline: 'Turnkey Luxury Residential Interiors, Bespoke Modular & 3D Walkthroughs',
    description: 'Boutique interior architecture firm executing 3BHK, 4BHK apartments, penthouses, and modern builder floors in Golf Course Road, DLF Phase 5, and South Delhi. From Italian marble installation and concealed acoustic lighting to custom German-hinged modular kitchens.',
    ownerName: 'Ar. Tanya & Karan Mehra',
    phone: '+91 99990 12845',
    whatsapp: '+91 99990 12845',
    email: 'design@auraspaceinteriors.com',
    address: 'Studio 14, 2nd Floor, South Point Mall, Golf Course Road, Gurugram 122002',
    city: 'Gurugram',
    mapsUrl: 'https://maps.google.com/?q=Golf+Course+Road+Gurugram',
    openingHours: 'Tue - Sun: 10:30 AM – 8:00 PM (Monday Closed)',
    logoUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#23201D',
    secondaryColor: '#B08968',
    fontFamily: 'Italiana, serif',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Book Site Design Consultation',
    specialBadge: '10-Year Modular Warranty',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'Design Philosophy', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Turnkey Packages', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Modular & Interior Collections', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Completed Penthouses', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Studio Timings', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Book Design Session', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'int-off-1',
        title: 'Free 3D Architectural VR Walkthrough',
        description: 'Book full apartment interior turnkey and receive photorealistic 3D VR renders & moodboards worth ₹35,000 complimentary.',
        discountPercent: 100,
        couponCode: 'VRFREE',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'int-s-1',
        name: 'Turnkey Complete 3BHK Luxury Interior Package',
        description: 'False ceiling with warm COB lighting, acrylic modular kitchen, 3 wardrobes, TV consoles, and wall trims.',
        price: 1250000,
        discountPrice: 1099000,
        category: 'Full Home Turnkey',
        isAvailable: true,
        unit: 'turnkey flat'
      },
      {
        id: 'int-s-2',
        name: 'German Soft-Close Modular Kitchen (Marine Ply + Acrylic)',
        description: 'Hettich/Hafele hardware, quartz countertop, tandem drawers, pantry pull-out unit, and anti-scratch shutters.',
        price: 280000,
        discountPrice: 245000,
        category: 'Modular Kitchens',
        isAvailable: true,
        unit: 'up to 12 running ft'
      },
      {
        id: 'int-s-3',
        name: 'Master Suite Wardrobe with Fluted Glass & Profiling',
        description: 'Floor-to-ceiling sliding wardrobe, sensor LED profile strips, drawer organizers, and tinted toughened glass.',
        price: 145000,
        discountPrice: 125000,
        category: 'Bespoke Wardrobes',
        isAvailable: true,
        unit: 'per 8x9 ft unit'
      }
    ],
    gallery: [
      { id: 'int-g-1', title: 'Minimalist Dining & Living Lounge', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 4. Architect
  {
    id: 'studio-vistara-architects',
    slug: 'studio-vistara-architects',
    businessName: 'Studio Vistara Architectural Design',
    category: 'architect',
    templateId: 'architect-minimal',
    tagline: 'Sustainable Residential Villas, Commercial Spaces & Structural Engineering',
    description: 'Council of Architecture (COA) certified firm crafting bioclimatic luxury farmhouses, modern villas, and commercial retail elevations. We offer full master planning, municipal sanction drawings, structural stability vetting, and MEP services.',
    ownerName: 'Ar. Ananya Sen (B.Arch SPA Delhi, IIA)',
    phone: '+91 98205 66712',
    whatsapp: '+91 98205 66712',
    email: 'info@studiovistara.in',
    address: 'Plot 42, Knowledge Park III, Greater Noida, UP 201308',
    city: 'Noida',
    mapsUrl: 'https://maps.google.com/?q=Knowledge+Park+Greater+Noida',
    openingHours: 'Mon - Fri: 9:00 AM – 6:30 PM (Sat Site Visits)',
    logoUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#181C24',
    secondaryColor: '#00A3C4',
    fontFamily: 'Syne, sans-serif',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Schedule Architectural Review',
    specialBadge: 'COA Registered Practice',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'Firm Vision', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Consultancy Fees', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Design Services & Scope', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Villa Elevations', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Studio Hours', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Book Site Review', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'arc-off-1',
        title: 'Villa Conceptual 2D Plans & Elevation Preview',
        description: 'Complete floor zoning, setback analysis, and 3D concept facade preview at flat ₹15,000.',
        discountPercent: 35,
        couponCode: 'VISTARA26',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'arc-s-1',
        name: 'Turnkey Architectural Villa Design & Working Drawings',
        description: 'Complete structural drawings, MEP plumbing/electrical schematics, and site supervision visits.',
        price: 85,
        discountPrice: 70,
        category: 'Residential Architecture',
        isAvailable: true,
        unit: 'per sq ft built-up'
      },
      {
        id: 'arc-s-2',
        name: 'Municipal Sanction & Building Plan Approval Filing',
        description: 'Byelaw compliance check, authority blueprint submission, and sanction coordination.',
        price: 35000,
        category: 'Authority Sanctions',
        isAvailable: true,
        unit: 'per sanction set'
      }
    ],
    gallery: [
      { id: 'arc-g-1', title: 'Modern Cantilever Villa Facade', category: 'exterior', imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 5. Banquet Hall
  {
    id: 'the-grand-rajwada-palace',
    slug: 'the-grand-rajwada-palace',
    businessName: 'The Grand Rajwada Palace & Banquet',
    category: 'banquet_hall',
    templateId: 'banquet-regal',
    tagline: 'Regal Wedding Celebrations, 1,500+ Guest Capacity & Royal Courtyards',
    description: 'Delhi NCR’s premier luxury wedding destination featuring 3 pillarless air-conditioned banquet halls, lush landscaped green lawns, 18 luxury guest rooms, in-house master chefs, and valet parking for 400 cars.',
    ownerName: 'Kunwar Mahendra Singh & Family',
    phone: '+91 98118 77654',
    whatsapp: '+91 98118 77654',
    email: 'celebrate@grandrajwada.com',
    address: 'Main Rohtak Road, Opp. Metro Pillar 420, Punjabi Bagh, New Delhi 110026',
    city: 'New Delhi',
    mapsUrl: 'https://maps.google.com/?q=Punjabi+Bagh+New+Delhi',
    openingHours: 'Mon - Sun: 10:00 AM – 11:30 PM',
    logoUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#590B22',
    secondaryColor: '#D4AF37',
    fontFamily: 'Playfair Display, serif',
    bookingType: 'reservation_party',
    bookingCtaLabel: 'Reserve Banquet & Wedding Date',
    specialBadge: 'Pillarless AC Ballrooms',
    status: 'published',
    pricingPlanId: 'premium',
    amountPaid: 1999,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'Palace Overview', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Wedding Packages', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Halls, Catering & Lawn Menu', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Grand Wedding Decor', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Viewing Hours', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Book Date & Food Tasting', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'bq-off-1',
        title: 'Complimentary Honeymoon Suite & DJ Setup',
        description: 'Book wedding hall for 400+ guests and get complimentary bridal suite, 2 luxury rooms, and certified sound-DJ setup worth ₹75,000.',
        discountPercent: 15,
        couponCode: 'SHAHI26',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'bq-s-1',
        name: 'Royal Shahi Wedding Plate (Pure Veg - 60+ Delicacies)',
        description: 'Chaat counters, live Italian pasta, Dal Makhani, Paneer Lababdar, Amritsari Kulcha, and 8 hot desserts.',
        price: 1850,
        discountPrice: 1650,
        category: 'Catering Packages',
        isAvailable: true,
        unit: 'per plate'
      },
      {
        id: 'bq-s-2',
        name: 'Grand Darbar Ballroom (800 Guest Capacity)',
        description: 'Centralized cooling, crystal Belgian chandeliers, LED stage wall, and royal bridal entry pathway.',
        price: 250000,
        discountPrice: 210000,
        category: 'Hall Rental',
        isAvailable: true,
        unit: 'per day slot'
      },
      {
        id: 'bq-s-3',
        name: 'Emerald Lawn (1,200 Guest Capacity Open-Air)',
        description: 'Lush manicured grass, fairy-light tree canopy, grand mandap space, and dedicated buffet courts.',
        price: 320000,
        discountPrice: 280000,
        category: 'Lawn Rental',
        isAvailable: true,
        unit: 'per evening'
      }
    ],
    gallery: [
      { id: 'bq-g-1', title: 'Grand Chandelier Ballroom', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80' },
      { id: 'bq-g-2', title: 'Royal Stage Floral Setup', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 6. Packers & Movers
  {
    id: 'safemove-express-packers',
    slug: 'safemove-express-packers',
    businessName: 'SafeMove Express Packers & Movers',
    category: 'packers_movers',
    templateId: 'movers-pro',
    tagline: 'Zero-Damage Relocation, 5-Layer Bubble Packing & All-India GPS Tracking',
    description: 'IBA approved moving company operating across Delhi NCR, Mumbai, Bengaluru, and Pune. We provide 5-layer corrugated packing, dismantle & reassemble of beds/wardrobes, climate-controlled container trucks, and 100% transit insurance.',
    ownerName: 'Sunil Sharma & Team',
    phone: '+91 98114 99201',
    whatsapp: '+91 98114 99201',
    email: 'dispatch@safemoveexpress.in',
    address: 'Warehouse 8, Transport Nagar, Sector 10A, Gurugram, Haryana 122001',
    city: 'Gurugram',
    mapsUrl: 'https://maps.google.com/?q=Sector+10A+Gurugram',
    openingHours: 'Mon - Sun: 24x7 Operations & Support',
    logoUrl: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#10223D',
    secondaryColor: '#F95738',
    fontFamily: 'Space Grotesk, sans-serif',
    bookingType: 'pickup_drop',
    bookingCtaLabel: 'Book Doorstep Move Survey',
    specialBadge: 'Zero Damage Guarantee & IBA Approved',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'Why SafeMove', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Move Discounts', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Shifting Tariffs & Estimates', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Packing Standards', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Operating Network', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Schedule Doorstep Survey', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'pm-off-1',
        title: 'Free 20 Carton Boxes + Mattress Protector',
        description: 'Book 2BHK/3BHK house shifting this week and get 20 premium double-walled cartons and waterproof mattress wraps free.',
        discountPercent: 10,
        couponCode: 'MOVE10',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'pm-s-1',
        name: 'Local 2BHK Home Shifting (Within City)',
        description: 'Complete packing, loading, dedicated closed container truck, unloading, and furniture reassembly.',
        price: 8500,
        discountPrice: 7499,
        category: 'Local Shifting',
        isAvailable: true,
        unit: 'complete shifting'
      },
      {
        id: 'pm-s-2',
        name: 'Local 3BHK / Villa Complete Relocation',
        description: 'Heavy duty bubble wrap for electronics, kitchen crockery crates, 6-man professional crew, and placement.',
        price: 13500,
        discountPrice: 11999,
        category: 'Local Shifting',
        isAvailable: true,
        unit: 'complete shifting'
      },
      {
        id: 'pm-s-3',
        name: 'Intercity Car Transport (Closed Hydraulic Car Carrier)',
        description: 'Doorstep vehicle pickup, tire lock securing, full insurance coverage, and live GPS location link.',
        price: 14000,
        discountPrice: 12500,
        category: 'Vehicle Transport',
        isAvailable: true,
        unit: 'per car (Delhi-Mumbai)'
      }
    ],
    gallery: [
      { id: 'pm-g-1', title: 'Corrugated Box Packing Station', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 7. AC / Appliance Repair
  {
    id: 'coolbreeze-ac-doctor',
    slug: 'coolbreeze-ac-doctor',
    businessName: 'CoolBreeze 24x7 AC Doctor & Appliance Care',
    category: 'ac_repair',
    templateId: 'acrepair-rapid',
    tagline: 'Jet-Pump Foam AC Servicing, Gas Refill & 90-Day Repair Guarantee',
    description: 'Certified HVAC technicians providing 60-minute doorstep service across Gurugram, Delhi, and Noida. Specializing in Daikin, Voltas, LG, Mitsubishi, and Hitachi split/inverter ACs, PCB circuit board repairs, compressor overhaul, and copper piping.',
    ownerName: 'Er. Imran Khan & Team',
    phone: '+91 98116 23049',
    whatsapp: '+91 98116 23049',
    email: 'service@coolbreezeac.in',
    address: 'Shop 18, Block B, Sushant Lok 1, Gurugram, Haryana 122009',
    city: 'Gurugram',
    mapsUrl: 'https://maps.google.com/?q=Sushant+Lok+Gurugram',
    openingHours: 'Mon - Sun: 7:00 AM – 11:00 PM (Emergency Dispatch Active)',
    logoUrl: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#092540',
    secondaryColor: '#0284C7',
    fontFamily: 'Space Grotesk, sans-serif',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Book AC Technician Visit',
    specialBadge: '60-Min Doorstep Dispatch',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'Why CoolBreeze', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Summer Service Deals', isEnabled: true, order: 2 },
      { id: 'menu', title: 'AC Service & Repair Rates', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Service Tools & Van', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Coverage Areas', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Book Technician', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'ac-off-1',
        title: 'Deep Foam Jet AC Power Wash Combo',
        description: 'Complete indoor + outdoor unit jet wash, blower cleaning, drain tray flush, and gas pressure check for ₹499.',
        discountPercent: 40,
        couponCode: 'CHILL499',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'ac-s-1',
        name: 'High-Pressure Jet Foam AC Servicing (Split AC)',
        description: 'Indoor deep chemical coil foam cleaning with jacket cover, outdoor condenser wash, filter sanitize, and gas leak check.',
        price: 799,
        discountPrice: 499,
        category: 'Servicing & Cleaning',
        isAvailable: true,
        unit: 'per AC unit'
      },
      {
        id: 'ac-s-2',
        name: '100% Pure R32 / R410A Refrigerant Gas Top-Up',
        description: 'Complete nitrogen pressure test, brazing of pinhole leaks, vacuuming with gauge, and genuine gas refill.',
        price: 2400,
        discountPrice: 1999,
        category: 'Gas Charging',
        isAvailable: true,
        unit: 'complete charge'
      },
      {
        id: 'ac-s-3',
        name: 'Inverter AC Motherboard / PCB Circuit Repair',
        description: 'Microcontroller diagnostic, capacitor swap, and 90-day written guarantee on replaced parts.',
        price: 1800,
        discountPrice: 1450,
        category: 'PCB & Electronics',
        isAvailable: true,
        unit: 'per repair'
      }
    ],
    gallery: [
      { id: 'ac-g-1', title: 'High Pressure AC Jet Cleaning', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 8. CCTV / Security Installer
  {
    id: 'secureeye-cctv-systems',
    slug: 'secureeye-cctv-systems',
    businessName: 'SecureEye Smart CCTV & Surveillance Systems',
    category: 'cctv_security',
    templateId: 'cctv-guard',
    tagline: '4K ColorVu CCTV, AI Smart Intrusion Detection & Mobile Live View',
    description: 'Government certified electronic surveillance installer for factories, residential societies, retail shops, and villas. Authorized dealer for Hikvision, CP PLUS, and Dahua. We provide full wiring, NVR setup, night color vision, and lifetime mobile viewing.',
    ownerName: 'Vikas Chawla',
    phone: '+91 98103 44512',
    whatsapp: '+91 98103 44512',
    email: 'sales@secureeyecctv.in',
    address: 'SCF 32, Ground Floor, Old Judicial Complex, Civil Lines, Gurugram 122001',
    city: 'Gurugram',
    mapsUrl: 'https://maps.google.com/?q=Civil+Lines+Gurugram',
    openingHours: 'Mon - Sat: 9:30 AM – 8:30 PM (Emergency Camera Support 24x7)',
    logoUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#0F131D',
    secondaryColor: '#F59E0B',
    fontFamily: 'Space Grotesk, sans-serif',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Book Free Security Site Survey',
    specialBadge: 'Hikvision & CP PLUS Certified Partner',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'Security Authority', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Turnkey Packages', isEnabled: true, order: 2 },
      { id: 'menu', title: 'CCTV Kits & Access Systems', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Completed Installations', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Installation Hours', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Book Free Site Survey', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'cctv-off-1',
        title: 'Full Home 4-Camera HD Night Vision Kit Installed',
        description: '4 CP PLUS Full HD cameras, 4-Channel DVR, 1TB Seagate Surveillance Hard Disk, power supply, and free cable installation at ₹11,999.',
        discountPercent: 20,
        couponCode: 'EYE4HOME',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'cctv-s-1',
        name: 'CP PLUS 4-Camera Complete Smart Home Kit (with 1TB HDD)',
        description: '2 Bullet outdoor waterproof cameras + 2 Dome indoor cameras, mic audio recording, and Android/iOS app setup.',
        price: 14500,
        discountPrice: 11999,
        category: 'CCTV Package Kits',
        isAvailable: true,
        unit: '4-camera turnkey kit'
      },
      {
        id: 'cctv-s-2',
        name: 'Hikvision 4K ColorVu 24x7 Full Color Night Vision Camera',
        description: 'Ultra HD 5MP sensor, warm supplementary LED lighting, license plate clarity up to 30 meters.',
        price: 3600,
        discountPrice: 2850,
        category: 'Camera Units',
        isAvailable: true,
        unit: 'per camera'
      },
      {
        id: 'cctv-s-3',
        name: 'Biometric Fingerprint + RFID + WiFi Time Attendance Machine',
        description: 'Optical fingerprint scanner, battery backup, automatic salary slip generation software, and cloud report sync.',
        price: 6500,
        discountPrice: 5200,
        category: 'Biometrics & Access',
        isAvailable: true,
        unit: 'per machine'
      }
    ],
    gallery: [
      { id: 'cctv-g-1', title: 'Surveillance Control Console', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 9. Veterinary Clinic
  {
    id: 'happytails-vet-hospital',
    slug: 'happytails-vet-hospital',
    businessName: 'HappyTails 24x7 Pet Hospital & Veterinary Clinic',
    category: 'vet_clinic',
    templateId: 'vet-care',
    tagline: 'Compassionate Pet Care, Digital X-Ray, In-House Blood Lab & Surgery',
    description: 'Modern multispeciality veterinary clinic offering gentle canine, feline, and avian healthcare. Equipped with clean surgical theaters, digital DR X-ray, in-house hematology analyzer, tick fever treatment, vaccination drives, and sterile pet boarding.',
    ownerName: 'Dr. Siddharth Rao (BVSc & AH, MVSc Surgery)',
    phone: '+91 98115 77123',
    whatsapp: '+91 98115 77123',
    email: 'care@happytailspet.in',
    address: 'Plot 77, Huda Market, Sector 23, Gurugram, Haryana 122017',
    city: 'Gurugram',
    mapsUrl: 'https://maps.google.com/?q=Sector+23+Gurugram',
    openingHours: 'Mon - Sun: 8:30 AM – 9:30 PM (24x7 Emergency Vet On Call)',
    logoUrl: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#153E32',
    secondaryColor: '#F97316',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Book Pet OPD & Vaccination',
    specialBadge: '24x7 Vet Emergency & Surgical Suite',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'About Clinic', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Wellness Plans', isEnabled: true, order: 2 },
      { id: 'menu', title: 'OPD, Vaccine & Lab Charges', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Happy Patients & Clinic', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Doctor Timings', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Book OPD Slot', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'vet-off-1',
        title: 'Puppy & Kitten 1st Year Vaccine Bundle',
        description: 'DHPPiL 9-in-1, Anti-Rabies, Deworming syrup, and health milestone passport for ₹1,799.',
        discountPercent: 25,
        couponCode: 'PAWCARE',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'vet-s-1',
        name: 'Comprehensive Pet Health Checkup & Consultation',
        description: 'Weight monitoring, dental examination, eye/ear otoscopic inspection, heart auscultation, and diet chart.',
        price: 600,
        discountPrice: 450,
        category: 'OPD & Consultations',
        isAvailable: true,
        unit: 'per consultation',
        doctorQualification: 'BVSc & AH, MVSc (IVRI)',
        doctorExperience: '14+ Yrs Veterinary Surgeon',
        doctorOpdTimings: 'Mon-Sun: 9 AM - 2 PM, 5 PM - 9 PM'
      },
      {
        id: 'vet-s-2',
        name: 'Nobivac 9-in-1 (DHPPiL) Annual Canine Booster',
        description: 'Protection against Parvovirus, Distemper, Hepatitis, Parainfluenza, and Leptospirosis with digital reminder.',
        price: 950,
        discountPrice: 850,
        category: 'Vaccinations',
        isAvailable: true,
        unit: 'per shot'
      },
      {
        id: 'vet-s-3',
        name: 'Pet Complete Blood Count (CBC) + Serum Biochemistry',
        description: 'In-house automated lab results in 20 minutes for fever, liver function, and kidney markers.',
        price: 1400,
        discountPrice: 1200,
        category: 'Diagnostic Lab',
        isAvailable: true,
        unit: 'per test panel'
      }
    ],
    gallery: [
      { id: 'vet-g-1', title: 'Golden Retriever Health Check', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 10. Preschool / Daycare
  {
    id: 'little-sprouts-preschool',
    slug: 'little-sprouts-preschool',
    businessName: 'Little Sprouts Montessori Preschool & Daycare',
    category: 'preschool_daycare',
    templateId: 'preschool-playful',
    tagline: 'Joyful Early Discovery, CCTV Parent Live Streaming & 1:6 Teacher Ratio',
    description: 'Safe and nurturing early childhood haven for children aged 10 months to 6 years. Featuring child-safe wooden Montessori apparatus, dedicated splash pool, sand pit, live CCTV mobile app for parents, nutritious organic meals cooked on-site, and phonics immersion.',
    ownerName: 'Mrs. Neha Kapoor (M.Ed, Early Years Director)',
    phone: '+91 98110 99881',
    whatsapp: '+91 98110 99881',
    email: 'admissions@littlesproutspreschool.in',
    address: 'Villa 12, Nirvana Country, Sector 50, Gurugram, Haryana 122018',
    city: 'Gurugram',
    mapsUrl: 'https://maps.google.com/?q=Nirvana+Country+Gurugram',
    openingHours: 'Mon - Fri: 8:00 AM – 7:00 PM (Saturday Activity Club: 9 AM - 1 PM)',
    logoUrl: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#6B3A0E',
    secondaryColor: '#F59E0B',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Schedule Campus Tour & Trial',
    specialBadge: '100% Live CCTV Parent Access',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'Our Campus', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Admission Offers', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Programs & Daycare Fee Structure', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Play Areas & Learning Bays', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Program Timings', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Book Campus Tour', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'ps-off-1',
        title: 'Zero Admission Fee + Free Learning Kit',
        description: 'Enroll your child for academic term 2026-27 and save flat ₹15,000 on one-time admission registration fee.',
        discountPercent: 100,
        couponCode: 'SPROUT26',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'ps-s-1',
        name: 'Toddler Playgroup & Nursery Program (Age 1.5 - 3.5 Yrs)',
        description: 'Sensory play, gross motor coordination, Jolly Phonics sounds, storytelling, and music movement (9 AM - 12:30 PM).',
        price: 7500,
        discountPrice: 6500,
        category: 'Preschool Programs',
        isAvailable: true,
        unit: 'per month'
      },
      {
        id: 'ps-s-2',
        name: 'Full-Day Daycare & Creche (8:00 AM – 7:00 PM)',
        description: 'Hot lunch and evening snacks, temperature-controlled nap suites, homework support, and continuous CCTV feed.',
        price: 12000,
        discountPrice: 10500,
        category: 'Daycare & Creche',
        isAvailable: true,
        unit: 'per month'
      }
    ],
    gallery: [
      { id: 'ps-g-1', title: 'Montessori Wooden Learning Bay', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 11. Astrologer / Pooja Services
  {
    id: 'pandit-ramesh-shastri-jyotish',
    slug: 'pandit-ramesh-shastri-jyotish',
    businessName: 'Pandit Ramesh Shastri Vedic Jyotish & Pooja Kendra',
    category: 'astrologer_pooja',
    templateId: 'jyotish-vedic',
    tagline: 'Accurate Kundali Predictions, Griha Pravesh & Shanti Havan Pooja',
    description: 'Varanasi Sanskrit University educated Vedic astrologer with 28+ years of shastriya experience. Offering precise birth chart (Janam Kundali) analysis, career & business horoscope, matchmaking (Gun Milan), Navagraha Shanti, and authentic Vedic rituals at your home.',
    ownerName: 'Acharya Pandit Ramesh Shastri (Jyotish Acharya)',
    phone: '+91 98108 55432',
    whatsapp: '+91 98108 55432',
    email: 'shastriji@vedicjyotishkendra.in',
    address: 'Mandir Complex, B-Block, Janakpuri, New Delhi 110058',
    city: 'New Delhi',
    mapsUrl: 'https://maps.google.com/?q=Janakpuri+New+Delhi',
    openingHours: 'Mon - Sun: 8:00 AM – 8:30 PM',
    logoUrl: 'https://images.unsplash.com/photo-1609137144820-22e6cf4ff8be?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1609137144820-22e6cf4ff8be?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#451020',
    secondaryColor: '#D97706',
    fontFamily: 'Playfair Display, serif',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Book Kundali & Pooja Slot',
    specialBadge: '28+ Yrs Authentic Shastriya Guidance',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'About Acharya Ji', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Consultation Dakshina', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Astrology & Pooja Services', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Pooja Samagri & Hawan', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Auspicious Muhurat Hours', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Book Consultation', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'astro-off-1',
        title: 'Marriage Kundali Gun Milan + Remedy Report',
        description: 'Detailed 36-guna matching, Manglik dosha analysis, and gemstone recommendations for ₹1,100.',
        discountPercent: 30,
        couponCode: 'MILAN26',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'astro-s-1',
        name: 'Detailed Janam Kundali Analysis & Future Prediction',
        description: 'Dasha analysis, career trajectory, financial prospects, health indicators, and simple Vedic remedies.',
        price: 2100,
        discountPrice: 1500,
        category: 'Astrology Consultations',
        isAvailable: true,
        unit: 'per horoscope'
      },
      {
        id: 'astro-s-2',
        name: 'Complete Griha Pravesh & Vastu Shanti Havan Pooja',
        description: 'Conducted by 2 Vedic pandits including pure cow ghee, havan samagri, Kalash Sthapana, and Navagraha invocation.',
        price: 7500,
        discountPrice: 6100,
        category: 'Home Poojas',
        isAvailable: true,
        unit: 'turnkey pooja with samagri'
      }
    ],
    gallery: [
      { id: 'astro-g-1', title: 'Vedic Havan Kund Ceremony', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1609137144820-22e6cf4ff8be?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 12. Music / Dance / Art Class
  {
    id: 'sangeet-kala-kendra-academy',
    slug: 'sangeet-kala-kendra-academy',
    businessName: 'Sangeet Kala Kendra Music & Fine Arts Academy',
    category: 'arts_academy',
    templateId: 'arts-studio',
    tagline: 'Classical Guitar, Keyboard, Kathak, Vocal Riyaz & Fine Art Certification',
    description: 'Affiliated with Prayag Sangeet Samiti, Allahabad and Trinity College London. We mentor over 400 students across acoustic guitar, Western keyboard, Hindustani classical vocals, Kathak, Bollywood dance, and water/oil painting.',
    ownerName: 'Guru Alok Sanyal & Team',
    phone: '+91 98104 22319',
    whatsapp: '+91 98104 22319',
    email: 'learn@sangeetkalakendra.in',
    address: 'A-22, 1st Floor, Main Market, Hauz Khas, New Delhi 110016',
    city: 'New Delhi',
    mapsUrl: 'https://maps.google.com/?q=Hauz+Khas+New+Delhi',
    openingHours: 'Mon - Sat: 11:00 AM – 8:30 PM (Sunday Special Masterclasses)',
    logoUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#1B1C38',
    secondaryColor: '#E11D48',
    fontFamily: 'Playfair Display, serif',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Book Free Demo Music / Art Class',
    specialBadge: 'Trinity & Prayag Certified Board',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'About Academy', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Trial Classes', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Courses & Fee Schedule', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Studio & Student Recitals', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Batch Schedule', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Book Free Trial Class', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'art-off-1',
        title: '1-Week Free Trial Class (Guitar / Keyboard / Kathak)',
        description: 'Book a zero-commitment trial class with certified music gurus and instruments provided in studio.',
        discountPercent: 100,
        couponCode: 'FREEMUSIC',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'art-s-1',
        name: 'Acoustic Guitar Mastery (Beginner to Intermediate)',
        description: 'Chords, fingerpicking, tabs, rhythm strumming, and stage performance preparation (8 classes/month).',
        price: 3200,
        discountPrice: 2800,
        category: 'Instrumental Music',
        isAvailable: true,
        unit: 'per month'
      },
      {
        id: 'art-s-2',
        name: 'Kathak Classical Dance Certification (Prayag Samiti Syllabus)',
        description: 'Tatkar footwork, hastaks, abhinaya, taal rhythm, and annual board certification exams.',
        price: 3000,
        discountPrice: 2600,
        category: 'Classical Dance',
        isAvailable: true,
        unit: 'per month'
      }
    ],
    gallery: [
      { id: 'art-g-1', title: 'Acoustic Guitar Studio Jam', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 13. Car / Bike Showroom
  {
    id: 'apex-motors-showroom',
    slug: 'apex-motors-showroom',
    businessName: 'Apex Motors Premium Cars & Superbikes',
    category: 'auto_showroom',
    templateId: 'showroom-velocity',
    tagline: 'Multi-Brand Luxury Cars, Certified Pre-Owned & Instant 100% On-Road Finance',
    description: 'Premier automobile hub showcasing certified luxury sedans, SUVs, and high-performance motorcycles. Every vehicle passes a rigorous 180-point German diagnostic inspection with genuine service history, zero meter tampering, and 1-year warranty.',
    ownerName: 'Sameer Singhania',
    phone: '+91 99991 33456',
    whatsapp: '+91 99991 33456',
    email: 'sales@apexmotorsdelhi.com',
    address: 'Showroom 4-6, MG Road, Near Sikanderpur Metro Station, Gurugram 122002',
    city: 'Gurugram',
    mapsUrl: 'https://maps.google.com/?q=MG+Road+Gurugram',
    openingHours: 'Mon - Sun: 10:00 AM – 8:30 PM',
    logoUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#0D1117',
    secondaryColor: '#EF4444',
    fontFamily: 'Space Grotesk, sans-serif',
    bookingType: 'whatsapp_order',
    bookingCtaLabel: 'Get On-Road Price & Test Drive',
    specialBadge: '180-Point Certified Guarantee',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'Showroom Experience', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Finance Deals', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Featured Cars & Superbikes', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Showroom Floor', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Visit Hours', isEnabled: true, order: 5 },
      { id: 'contact', title: 'WhatsApp Vehicle Enquiry', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'auto-off-1',
        title: 'Zero Down Payment + 1-Yr Free Comprehensive Insurance',
        description: 'Take delivery within 48 hours with spot bank loan sanction at 8.65% interest rate.',
        discountPercent: 15,
        couponCode: 'APEXDRIVE',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'auto-s-1',
        name: 'BMW 3 Series 330i M-Sport (2022 Certified, 24,000 KM)',
        description: 'Sunroof, ambient lighting, Live Cockpit Professional, zero accident record, single owner with BSI package.',
        price: 3650000,
        discountPrice: 3490000,
        category: 'Sedans & Coupes',
        isAvailable: true,
        unit: 'on-road verified price'
      },
      {
        id: 'auto-s-2',
        name: 'Toyota Fortuner 4x4 AT Diesel (2023, 19,000 KM)',
        description: 'Pearl white, 4x4 automatic terrain response, leather interior, touch screen navigation, and VIP number.',
        price: 3950000,
        discountPrice: 3790000,
        category: 'Luxury SUVs',
        isAvailable: true,
        unit: 'on-road verified price'
      }
    ],
    gallery: [
      { id: 'auto-g-1', title: 'Apex Motors Luxury Car Lounge', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 14. Solar Panel Installer
  {
    id: 'suryashakti-solar-systems',
    slug: 'suryashakti-solar-systems',
    businessName: 'SuryaShakti Rooftop Solar Energy Systems',
    category: 'solar_installer',
    templateId: 'solar-clean',
    tagline: 'Zero Electricity Bills, MNRE Govt Subsidy & 25-Year Panel Warranty',
    description: 'Government approved channel partner installing on-grid and hybrid rooftop solar power plants for homes, housing societies, factories, and schools. We manage end-to-end net-metering approvals, DISCOM paperwork, and direct bank subsidy disbursement.',
    ownerName: 'Er. Pradeep Chauhan (MNRE Certified Engineer)',
    phone: '+91 98117 88902',
    whatsapp: '+91 98117 88902',
    email: 'connect@suryashaktisolar.in',
    address: 'Plot 104, Sector 6, IMT Manesar, Gurugram, Haryana 122050',
    city: 'Gurugram',
    mapsUrl: 'https://maps.google.com/?q=IMT+Manesar+Gurugram',
    openingHours: 'Mon - Sat: 9:00 AM – 7:00 PM',
    logoUrl: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#0B2433',
    secondaryColor: '#EAB308',
    fontFamily: 'Space Grotesk, sans-serif',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Book Free Solar Survey',
    specialBadge: 'MNRE Certified & 25-Yr Warranty',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'Why Go Solar', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Govt PM Surya Ghar Subsidy', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Solar Rooftop Packages', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Completed Rooftops', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Survey Hours', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Schedule Free Rooftop Survey', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'sol-off-1',
        title: 'PM Surya Ghar Muft Bijli Yojana ₹78,000 Direct Subsidy',
        description: 'Get flat ₹78,000 Central Government subsidy credited directly into your bank account on 3kW systems.',
        discountPercent: 35,
        couponCode: 'SUBSIDY26',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'sol-s-1',
        name: '3kW On-Grid Rooftop Solar Plant (550W TopCon Bifacial Panels)',
        description: 'Generates 360-400 units/month, reduces bill by ₹3,500/month, includes net meter and aluminium mounting structure.',
        price: 185000,
        discountPrice: 145000,
        category: 'Residential Solar Plants',
        isAvailable: true,
        unit: 'turnkey installation'
      },
      {
        id: 'sol-s-2',
        name: '5kW Premium High-Efficiency Solar Plant with Smart WiFi Inverter',
        description: 'Generates 650-700 units/month, powers 2 Split ACs comfortably, live smartphone generation monitoring app.',
        price: 295000,
        discountPrice: 245000,
        category: 'Residential Solar Plants',
        isAvailable: true,
        unit: 'turnkey installation'
      }
    ],
    gallery: [
      { id: 'sol-g-1', title: 'Rooftop Monocrystalline Solar Array', category: 'exterior', imageUrl: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=800&q=80' }
    ]
  }
];
