import { BusinessWebsite } from '../types';

export const NEW_DEMO_SITES_PART2: BusinessWebsite[] = [
  // 15. Home Painting Contractor
  {
    id: 'royale-wall-art-painters',
    slug: 'royale-wall-art-painters',
    businessName: 'Royale Wall Art Home Painting Contractors',
    category: 'painting_contractor',
    templateId: 'painting-vibrant',
    tagline: 'Dustless Machine Sanding, Asian Paints Royale & 1-Day Express Painting',
    description: 'Premier home painting and texture design specialists in Delhi NCR. Authorized Asian Paints, Berger, and Dulux applicator team using German Festool dustless vacuum sanders, moisture meters, tape masking protection, and 5-year anti-peeling warranty.',
    ownerName: 'Manoj Yadav & Team',
    phone: '+91 98119 44321',
    whatsapp: '+91 98119 44321',
    email: 'quote@royalewallart.in',
    address: 'Shop 24, Galleria Market, DLF Phase 4, Gurugram 122009',
    city: 'Gurugram',
    mapsUrl: 'https://maps.google.com/?q=Galleria+Market+Gurugram',
    openingHours: 'Mon - Sun: 8:00 AM – 8:00 PM',
    logoUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#16233B',
    secondaryColor: '#FF6B4A',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Book Free Color Measurement',
    specialBadge: 'Dust-Free Machine Painting',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'Why Choose Us', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Painting Packages', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Per Sq Ft Rates & Textures', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Living Room Walls', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Measurement Slots', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Book Free Laser Measurement', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'pnt-off-1',
        title: 'Free Textured Accent Wall with Full Home Painting',
        description: 'Book 3BHK repaint and get one designer metallic stencil or stacco texture wall worth ₹12,000 completely free.',
        discountPercent: 100,
        couponCode: 'WALLART26',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'pnt-s-1',
        name: 'Asian Paints Royale Luxury Emulsion (Smooth Sheen & Washable)',
        description: '2 coats primer + 2 coats acrylic putty with machine sanding + 2 coats Royale Teflon finish.',
        price: 24,
        discountPrice: 19,
        category: 'Interior Emulsion',
        isAvailable: true,
        unit: 'per sq ft'
      },
      {
        id: 'pnt-s-2',
        name: 'Waterproofing Damp-Proof PU Treatment (Anti-Seepage)',
        description: 'Injection grouting, fiber mesh elastomeric waterproofing membrane with 8-year anti-damp warranty.',
        price: 45,
        discountPrice: 38,
        category: 'Waterproofing & Treatment',
        isAvailable: true,
        unit: 'per sq ft'
      }
    ],
    gallery: [
      { id: 'pnt-g-1', title: 'Royale Luxury Sheen Living Room', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 16. Jewellery Shop
  {
    id: 'shree-radhey-jewellers',
    slug: 'shree-radhey-jewellers',
    businessName: 'Shree Radhey Jewellers & Diamond Solitaires',
    category: 'jewellery_shop',
    templateId: 'jewellery-heritage',
    tagline: '100% BIS 916 Hallmarked Gold, IGI Certified Diamonds & Polki Sets',
    description: 'Heritage jewellery house operating for over 45 years in Chandni Chowk and South Extension. Renowned for authentic handcrafted Kundan Meena, antique temple jewellery, lightweight 18K daily wear gold, and bridal diamond choker sets with transparent making charges.',
    ownerName: 'Gaurav & Alok Verma',
    phone: '+91 98111 88992',
    whatsapp: '+91 98111 88992',
    email: 'care@shreeradheyjewellers.com',
    address: 'E-18, South Extension Part II Market, New Delhi 110049',
    city: 'New Delhi',
    mapsUrl: 'https://maps.google.com/?q=South+Extension+New+Delhi',
    openingHours: 'Mon - Sun: 11:00 AM – 8:30 PM (Tuesday Closed)',
    logoUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#092B1D',
    secondaryColor: '#D4AF37',
    fontFamily: 'Playfair Display, serif',
    bookingType: 'whatsapp_order',
    bookingCtaLabel: 'WhatsApp Gold & Jewellery Enquiry',
    specialBadge: '100% BIS 916 HUID Hallmarked',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'Our Heritage', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Festival Gold Offers', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Bridal Collections & Daily Wear', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Handcrafted Showcase', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Showroom Hours', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Enquire on WhatsApp', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'jew-off-1',
        title: 'Flat 50% Off on Making Charges on Diamond Jewellery',
        description: 'Celebrate your special moments with IGI certified diamonds and flat 50% discount on making charges.',
        discountPercent: 50,
        couponCode: 'DIAMOND50',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'jew-s-1',
        name: '22K Hallmarked Antique Heritage Bridal Necklace Set',
        description: 'Intricate filigree work with natural rubies, emerald drops, matching jhumkis, and 100% HUID certificate.',
        price: 285000,
        discountPrice: 268000,
        category: 'Bridal Gold Sets',
        isAvailable: true,
        unit: 'complete set (approx 38g)'
      },
      {
        id: 'jew-s-2',
        name: 'IGI Certified Solitaire Diamond Engagement Ring (0.75 Carat)',
        description: 'VVS1 clarity, E-color diamond set in 18K white gold with laser inscription and official certificate.',
        price: 145000,
        discountPrice: 129000,
        category: 'Diamond Rings & Solitaires',
        isAvailable: true,
        unit: 'per piece'
      }
    ],
    gallery: [
      { id: 'jew-g-1', title: '22K Gold Bridal Choker Collection', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 17. Optical Shop
  {
    id: 'visioncraft-opticals',
    slug: 'visioncraft-opticals',
    businessName: 'VisionCraft Optical Lounge & Eye Clinic',
    category: 'optical_shop',
    templateId: 'optical-modern',
    tagline: 'Computerized Zero-Error Eye Testing, Blue-Cut Lenses & Designer Frames',
    description: 'Authorized dispensing opticians featuring Ray-Ban, Vogue, Tommy Hilfiger, and lightweight titanium frames. In-house Japanese automated Nidek lens edging lab delivers single-vision and progressive spectacles within 2 hours.',
    ownerName: 'Dr. Nitin Sethi (Optometrist, FIACLE)',
    phone: '+91 98115 66023',
    whatsapp: '+91 98115 66023',
    email: 'care@visioncraftoptics.in',
    address: 'Shop 10, Central Plaza, Golf Course Road, Sector 53, Gurugram 122002',
    city: 'Gurugram',
    mapsUrl: 'https://maps.google.com/?q=Golf+Course+Road+Sector+53+Gurugram',
    openingHours: 'Mon - Sun: 10:00 AM – 9:00 PM',
    logoUrl: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#08253B',
    secondaryColor: '#0EA5E9',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    bookingType: 'whatsapp_order',
    bookingCtaLabel: 'Order Spectacles on WhatsApp',
    specialBadge: 'Free Computerized Eye Testing',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'About VisionCraft', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Buy 1 Get 1 Offers', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Frames, Sunglasses & Lenses', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Optical Gallery', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Eye Test Hours', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Order on WhatsApp', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'opt-off-1',
        title: 'Buy 1 Frame Get 2nd Complete Pair Free',
        description: 'Select any designer frame and get a second frame with anti-glare lenses absolutely free.',
        discountPercent: 50,
        couponCode: 'BOGO2026',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'opt-s-1',
        name: 'Ultra-Light Titanium Eyeglass Frame with Anti-Glare Blue-Cut Lens',
        description: 'Zero screen fatigue for IT professionals, featherweight flexible titanium frame with 1-year breakage warranty.',
        price: 3200,
        discountPrice: 2199,
        category: 'Complete Spectacles',
        isAvailable: true,
        unit: 'complete pair'
      },
      {
        id: 'opt-s-2',
        name: 'Essilor Crizal Digital Progressive Varifocal Lenses',
        description: 'Smooth seamless distance, intermediate computer, and reading zones without unsightly lines.',
        price: 6500,
        discountPrice: 5200,
        category: 'Premium Optical Lenses',
        isAvailable: true,
        unit: 'per pair of lenses'
      }
    ],
    gallery: [
      { id: 'opt-g-1', title: 'Designer Eyewear Display Bay', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 18. RO / Water Purifier Service
  {
    id: 'aquapure-ro-services',
    slug: 'aquapure-ro-services',
    businessName: 'AquaPure RO & Alkaline Purifier Services',
    category: 'ro_water_purifier',
    templateId: 'aquapure-water',
    tagline: 'Doorstep Filter Replacement, Membrane Change & 100% TDS Testing',
    description: 'Specialist water purifier technician team servicing Kent, Aquaguard, Pureit, Livpure, and commercial RO plants. We use only original Dow Filmtec membranes, certified food-grade coconut carbon filters, and copper-alkaline enrichment cartridges.',
    ownerName: 'Sanjay Rawat & Team',
    phone: '+91 98114 77810',
    whatsapp: '+91 98114 77810',
    email: 'support@aquapurero.in',
    address: 'Shop 8, Basement, Sector 4 Market, Vaishali, Ghaziabad, UP 201010',
    city: 'Noida',
    mapsUrl: 'https://maps.google.com/?q=Vaishali+Ghaziabad',
    openingHours: 'Mon - Sun: 8:00 AM – 9:00 PM',
    logoUrl: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1527066579998-dbbae57f45ce?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#06353D',
    secondaryColor: '#06B6D4',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Book RO Service / Filter Change',
    specialBadge: 'Original Filmtec Membrane & Free TDS Check',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'Why Pure Water Matters', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Annual Maintenance (AMC)', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Service Rates & Cartridges', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Filter Parts & Work', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Technician Slots', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Book RO Visit', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'ro-off-1',
        title: 'Complete Annual AMC Pack (3 Free Services + All Filters Included)',
        description: 'Zero repair charges for 1 full year including sediment, carbon, and RO membrane replacement at ₹1,999.',
        discountPercent: 35,
        couponCode: 'AMC2026',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'ro-s-1',
        name: 'Complete RO Periodic Service + Filter Flushing',
        description: 'Sediment cleaning, carbon inspection, pump pressure test, pipeline sanitization, and digital TDS check.',
        price: 499,
        discountPrice: 299,
        category: 'Routine Servicing',
        isAvailable: true,
        unit: 'per visit'
      },
      {
        id: 'ro-s-2',
        name: 'Original 80 GPD RO Membrane Replacement (Filmtec/Vontron)',
        description: 'Removes dissolved salts, heavy metals, arsenic, and bacteria. Restores sweet natural taste with 1-year guarantee.',
        price: 1800,
        discountPrice: 1450,
        category: 'Filter Replacements',
        isAvailable: true,
        unit: 'with installation'
      }
    ],
    gallery: [
      { id: 'ro-g-1', title: 'Pure Water Multi-Stage Filtration', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1527066579998-dbbae57f45ce?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 19. Pest Control
  {
    id: 'pestshield-herbal-control',
    slug: 'pestshield-herbal-control',
    businessName: 'ShieldSafe Herbal & Odorless Pest Control',
    category: 'pest_control',
    templateId: 'pest-eco',
    tagline: '100% Odorless Herbal Gel, Anti-Termite Drilling & 1-Year Warranty',
    description: 'Government licensed pest management agency using Bayer and Syngenta herbal formulations. Safe for infants, pregnant women, and pets. Specializing in cockroach gel baiting, pre & post-construction termite piping, bedbug thermal eradication, and mosquito fogging.',
    ownerName: 'Deepak Deshmukh',
    phone: '+91 98113 55102',
    whatsapp: '+91 98113 55102',
    email: 'care@shieldsafepest.in',
    address: 'Shop 14, Commercial Market, Sector 14, Gurugram, Haryana 122001',
    city: 'Gurugram',
    mapsUrl: 'https://maps.google.com/?q=Sector+14+Gurugram',
    openingHours: 'Mon - Sun: 7:30 AM – 9:00 PM',
    logoUrl: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#1B3322',
    secondaryColor: '#DC2626',
    fontFamily: 'Space Grotesk, sans-serif',
    bookingType: 'whatsapp_order',
    bookingCtaLabel: 'Book Odorless Pest Treatment',
    specialBadge: '100% Odorless & Safe for Babies/Pets',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'Certified Safe Pest Control', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Home Warranties', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Pest Eradication Tariffs', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Treatment Safety Standards', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Service Schedule', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Book on WhatsApp', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'pst-off-1',
        title: 'Full Home Cockroach + Ant Herbal Gel (1-Yr Warranty)',
        description: 'Complete 2BHK/3BHK kitchen and drainage point treatment with 2 free checkup visits at ₹1,199.',
        discountPercent: 40,
        couponCode: 'SAFEHOME',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'pst-s-1',
        name: 'Herbal Odorless Cockroach Gel Treatment (2BHK/3BHK)',
        description: 'No need to empty kitchen cabinets, Bayer Maxforce gel dots placed in hinges and electricals, safe and odorless.',
        price: 1600,
        discountPrice: 1199,
        category: 'Kitchen Cockroach Control',
        isAvailable: true,
        unit: 'complete flat'
      },
      {
        id: 'pst-s-2',
        name: 'Drill-Fill-Seal Termite Barrier Protection (5-Year Guarantee)',
        description: 'Sub-floor drill injection at 1-foot intervals along skirting using Premise chemical, sealing with color match.',
        price: 6500,
        discountPrice: 5200,
        category: 'Termite Protection',
        isAvailable: true,
        unit: 'up to 1,500 sq ft'
      }
    ],
    gallery: [
      { id: 'pst-g-1', title: 'Clean Herbal Kitchen Treatment', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 20. Courier / Delivery Service
  {
    id: 'fasttrack-express-courier',
    slug: 'fasttrack-express-courier',
    businessName: 'FastTrack Cargo & Express Courier Service',
    category: 'courier_delivery',
    templateId: 'courier-swift',
    tagline: 'Same-Day Local Delivery, All-India Air Cargo & International DHL/FedEx Booking',
    description: 'Authorized courier hub partnered with Blue Dart, DTDC, DHL, and FedEx. We handle urgent document delivery, heavy commercial shipments, ecommerce returns, and international medicines/dry food parcels with free doorstep pickup and real-time tracking.',
    ownerName: 'Manish Chawla',
    phone: '+91 98112 00983',
    whatsapp: '+91 98112 00983',
    email: 'dispatch@fasttrackcouriers.in',
    address: 'UG-12, Somdutt Chamber II, Bhikaji Cama Place, New Delhi 110066',
    city: 'New Delhi',
    mapsUrl: 'https://maps.google.com/?q=Bhikaji+Cama+Place+New+Delhi',
    openingHours: 'Mon - Sat: 9:00 AM – 9:00 PM (Sunday Express Despatch: 10 AM - 4 PM)',
    logoUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#0A1E36',
    secondaryColor: '#E11D48',
    fontFamily: 'Space Grotesk, sans-serif',
    bookingType: 'pickup_drop',
    bookingCtaLabel: 'Schedule Doorstep Parcel Pickup',
    specialBadge: 'Free Doorstep Parcel Pickup',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'Logistics Network', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Corporate Rates', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Tariff Cards & Destinations', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Dispatch Hub', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Cutoff Times', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Schedule Pickup', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'cr-off-1',
        title: 'Flat 20% Off on International Parcels (USA/UK/Canada)',
        description: 'Send homemade sweets, medicines, and clothing to NRI families with fast customs clearance.',
        discountPercent: 20,
        couponCode: 'GLOBAL20',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'cr-s-1',
        name: 'Domestic Priority Air Express (Next-Day Metro Delivery)',
        description: 'Guaranteed 24-hour delivery to Mumbai, Bengaluru, Chennai, Hyderabad, and Kolkata with SMS tracking.',
        price: 180,
        discountPrice: 140,
        category: 'Domestic Express',
        isAvailable: true,
        unit: 'first 500g'
      },
      {
        id: 'cr-s-2',
        name: 'International Express Courier (USA, UK & Europe in 3-5 Days)',
        description: 'Doorstep pickup, commercial invoice preparation, customs documentation, and DHL tracking included.',
        price: 1850,
        discountPrice: 1550,
        category: 'International Shipping',
        isAvailable: true,
        unit: 'per 1 Kg'
      }
    ],
    gallery: [
      { id: 'cr-g-1', title: 'Automated Dispatch Sorting Floor', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 21. Home Baker
  {
    id: 'sweetwhisk-artisan-bakes',
    slug: 'sweetwhisk-artisan-bakes',
    businessName: 'SweetWhisk Studio Artisan Home Bakes',
    category: 'home_baker',
    templateId: 'baker-delight',
    tagline: '100% Eggless Custom Theme Cakes, Fudgy Brownies & Bento Cakes',
    description: 'Passionate boutique home bakery in DLF Phase 2 crafting artisanal celebration cakes with Belgian chocolate, New Zealand butter, and fresh fruit compotes. Zero premixes, zero artificial preservatives. Specializing in Korean bento cakes, tiers for weddings, and dessert tables.',
    ownerName: 'Chef Pooja Mathur (Le Cordon Bleu Trained)',
    phone: '+91 98118 12309',
    whatsapp: '+91 98118 12309',
    email: 'orders@sweetwhiskstudio.in',
    address: 'B-14/6, DLF Phase 2, Gurugram, Haryana 122002',
    city: 'Gurugram',
    mapsUrl: 'https://maps.google.com/?q=DLF+Phase+2+Gurugram',
    openingHours: 'Mon - Sun: 9:00 AM – 9:00 PM (Pre-orders 24h prior)',
    logoUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#431728',
    secondaryColor: '#F43F5E',
    fontFamily: 'Fraunces, Georgia, serif',
    bookingType: 'whatsapp_order',
    bookingCtaLabel: 'Pre-Order Custom Theme Cake',
    specialBadge: '100% Eggless & Belgian Chocolate',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'The Bake Studio', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Party Bundles', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Artisan Cakes, Brownies & Tarts', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Cake Gallery', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Order Lead Times', isEnabled: true, order: 5 },
      { id: 'contact', title: 'WhatsApp Cake Customization', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'bk-off-1',
        title: 'Free Box of 4 Belgian Chocolate Walnut Brownies',
        description: 'Order any designer cake above 1.5 Kg and receive a complimentary box of warm artisan brownies.',
        discountPercent: 100,
        couponCode: 'SWEETTREAT',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'bk-s-1',
        name: 'Signature Belgian Dark Chocolate Truffle Cake (100% Eggless)',
        description: 'Moist dark cocoa sponge layered with 54% Callebaut ganache and crunchy hazelnut praline.',
        price: 1300,
        discountPrice: 1150,
        category: 'Signature Cakes',
        isAvailable: true,
        unit: 'per 1 Kg'
      },
      {
        id: 'bk-s-2',
        name: 'Vintage Korean Bento Cake (Custom Name & Illustration)',
        description: 'Cute mini pastel birthday cake packed in eco-friendly sugarcane bento box with wooden fork and candle.',
        price: 550,
        discountPrice: 480,
        category: 'Bento Mini Cakes',
        isAvailable: true,
        unit: 'per 350g box'
      }
    ],
    gallery: [
      { id: 'bk-g-1', title: 'Artisanal Chocolate Celebration Cake', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 22. Notary / Legal Typing Service
  {
    id: 'apex-notary-documentation',
    slug: 'apex-notary-documentation',
    businessName: 'Apex Legal Typing & Notary Services',
    category: 'notary_legal',
    templateId: 'notary-court',
    tagline: 'Instant E-Stamp Paper, Rent Agreement, Affidavit & Attestation',
    description: 'Government authorized legal documentation center right outside the sub-registrar complex. We prepare registered rent agreements, indemnity bonds, name change gazette affidavits, power of attorney (PoA), and notary attestations within 20 minutes.',
    ownerName: 'Satish Chandra Sharma (Advocate & Notary Public)',
    phone: '+91 98114 33281',
    whatsapp: '+91 98114 33281',
    email: 'notary@apexlegaldocs.in',
    address: 'Cabin 18, Mini Secretariat Court Complex, Sector 12, Gurugram 122001',
    city: 'Gurugram',
    mapsUrl: 'https://maps.google.com/?q=Sector+12+Mini+Secretariat+Gurugram',
    openingHours: 'Mon - Sat: 9:30 AM – 6:30 PM',
    logoUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#162238',
    secondaryColor: '#B91C1C',
    fontFamily: 'Playfair Display, serif',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Book Notary & Stamp Paper Slot',
    specialBadge: 'Govt Authorized E-Stamp & Notary',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'Official Documentation', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Combo Documents', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Stamp Papers & Affidavits', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Office & Seals', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Desk Hours', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Draft Agreement Online', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'not-off-1',
        title: 'Doorstep Registered Rent Agreement & Biometrics',
        description: 'Complete e-stamping, legal draft, and biometric verification delivered to your home for ₹1,499.',
        discountPercent: 25,
        couponCode: 'STAMP26',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'not-s-1',
        name: 'Residential Lease / Rent Agreement (11-Month Legal Draft)',
        description: 'E-stamp paper generation, legal terms drafting, landlord-tenant clauses, and Notary public stamp.',
        price: 750,
        discountPrice: 599,
        category: 'Lease & Agreements',
        isAvailable: true,
        unit: 'with e-stamp paper'
      },
      {
        id: 'not-s-2',
        name: 'General Affidavit / Name Change / Address Proof Attestation',
        description: 'Drafted on official stamp paper with red wax seal, advocate registration stamp, and entry register log.',
        price: 450,
        discountPrice: 350,
        category: 'Affidavits',
        isAvailable: true,
        unit: 'per affidavit'
      }
    ],
    gallery: [
      { id: 'not-g-1', title: 'Official Notary Chamber Desk', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 23. Insurance Agent
  {
    id: 'shieldsure-insurance-kendra',
    slug: 'shieldsure-insurance-kendra',
    businessName: 'ShieldSure Life & Health Insurance Advisory',
    category: 'insurance_agent',
    templateId: 'insurance-trust',
    tagline: '99.2% Claim Settlement, 10,000+ Cashless Hospitals & Zero Hidden Clauses',
    description: 'IRDAI licensed insurance consultancy guiding families and businesses for 15+ years. Authorized advisor for HDFC ERGO, Star Health, Care Health, LIC of India, and Tata AIG. We assist in claims filing, hospital cashless pre-approvals, and portability without losing benefits.',
    ownerName: 'Ashok Bhasin (MDRT, IRDAI Reg. 84210)',
    phone: '+91 98115 88912',
    whatsapp: '+91 98115 88912',
    email: 'advisor@shieldsureinsurance.in',
    address: 'Cabin 202, JMD Regent Square, MG Road, Gurugram 122002',
    city: 'Gurugram',
    mapsUrl: 'https://maps.google.com/?q=MG+Road+Gurugram',
    openingHours: 'Mon - Sat: 9:00 AM – 7:30 PM (24x7 Claim Support Helpline)',
    logoUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#0B2D4A',
    secondaryColor: '#F59E0B',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Book Free Policy Review Meeting',
    specialBadge: '100% Dedicated Claim Settlement Desk',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'Why ShieldSure', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Top Rated Plans', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Health, Life & Motor Insurance', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Our Advisors', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Consultation Hours', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Schedule Free Policy Audit', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'ins-off-1',
        title: 'Free Existing Policy Audit & Claim Risk Check',
        description: 'Bring your current health or life policy for a 100% free audit on waiting periods, room-rent caps, and copay exclusions.',
        discountPercent: 100,
        couponCode: 'AUDITFREE',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'ins-s-1',
        name: '₹1 Crore Comprehensive Family Health Insurance Plan',
        description: 'Zero room rent capping, pre & post hospitalization, organ donor cover, and 24x7 cashless hospital admission.',
        price: 18500,
        discountPrice: 15999,
        category: 'Health Insurance',
        isAvailable: true,
        unit: 'per year (2 Adults + 2 Kids)'
      },
      {
        id: 'ins-s-2',
        name: 'Term Life Insurance (₹2 Crore Pure Protection Cover)',
        description: 'Financial security for your family until age 75 with critical illness rider and tax savings under 80C.',
        price: 14000,
        discountPrice: 11999,
        category: 'Term Life Plans',
        isAvailable: true,
        unit: 'per year premium'
      }
    ],
    gallery: [
      { id: 'ins-g-1', title: 'Client Financial Planning Lounge', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 24. Loan / DSA Agent
  {
    id: 'bharat-dsa-loans',
    slug: 'bharat-dsa-loans',
    businessName: 'Bharat DSA Loan & Mortgage Advisory',
    category: 'loan_dsa',
    templateId: 'loan-capital',
    tagline: 'Home Loans from 8.35%, Loan Against Property & Fast Sanctions',
    description: 'Direct Selling Agent (DSA) partnered with HDFC Bank, SBI, ICICI Bank, Axis Bank, and leading NBFCs. We specialize in fast home loan approvals, balance transfers at lower interest rates, business collateral loans, and loans against commercial property.',
    ownerName: 'Vipin Narang (Senior DSA Partner)',
    phone: '+91 98111 66720',
    whatsapp: '+91 98111 66720',
    email: 'apply@bharatdsaloans.in',
    address: 'Office 310, Suncity Success Tower, Golf Course Extension Road, Gurugram 122018',
    city: 'Gurugram',
    mapsUrl: 'https://maps.google.com/?q=Golf+Course+Extension+Gurugram',
    openingHours: 'Mon - Sat: 9:30 AM – 7:00 PM',
    logoUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#083324',
    secondaryColor: '#EAB308',
    fontFamily: 'Space Grotesk, sans-serif',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Check Loan Eligibility & KYC',
    specialBadge: 'SBI, HDFC & ICICI Official Direct DSA',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'Why Borrow With Us', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Current Interest Rates', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Loan Products & EMI Matrix', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'DSA Office', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Eligibility Check Hours', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Check Free Loan Eligibility', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'ln-off-1',
        title: 'Zero Processing Fee Home Loan Balance Transfer',
        description: 'Switch your existing high-interest loan to SBI or HDFC at 8.35% with zero processing fee and top-up facility.',
        discountPercent: 100,
        couponCode: 'SWITCH26',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'ln-s-1',
        name: 'Home Loan (New Purchase / Resale / Construction)',
        description: 'Sanction up to 90% of property cost, tenure up to 30 years, lowest interest rates starting from 8.35% p.a.',
        price: 0,
        category: 'Home Loans',
        isAvailable: true,
        unit: 'free doorstep file processing'
      },
      {
        id: 'ln-s-2',
        name: 'Loan Against Property (LAP) for Business Expansion',
        description: 'Unlock cash against your residential or commercial property up to ₹10 Crores with fast title clearance.',
        price: 0,
        category: 'Mortgage & LAP',
        isAvailable: true,
        unit: 'free doorstep file processing'
      }
    ],
    gallery: [
      { id: 'ln-g-1', title: 'Home Loan Documentation Lounge', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 25. Mobile Recharge & Telecom Shop
  {
    id: 'connectplus-telecom-mart',
    slug: 'connectplus-telecom-mart',
    businessName: 'ConnectPlus Mobile Recharge & SIM Store',
    category: 'telecom_recharge',
    templateId: 'telecom-pulse',
    tagline: 'Instant 5G SIM Activation, MNP Porting & Fast All-Network Recharges',
    description: 'Neighborhood one-stop digital telecom store. Authorized Jio, Airtel, and Vodafone Idea (Vi) retailer. We offer instant paperless biometric SIM activation, fancy VIP mobile numbers, DTH recharge packs, fast USB-C cables, and tempered glass installation.',
    ownerName: 'Mohit Gupta',
    phone: '+91 98115 12044',
    whatsapp: '+91 98115 12044',
    email: 'recharge@connectplustelecom.in',
    address: 'Shop 4, Main Market, Sector 15, Faridabad, Haryana 121007',
    city: 'Delhi NCR',
    mapsUrl: 'https://maps.google.com/?q=Sector+15+Faridabad',
    openingHours: 'Mon - Sun: 8:00 AM – 10:00 PM',
    logoUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02543?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#2E0854',
    secondaryColor: '#E11D48',
    fontFamily: 'Space Grotesk, sans-serif',
    bookingType: 'whatsapp_order',
    bookingCtaLabel: 'Instant Recharge on WhatsApp',
    specialBadge: '5-Minute Biometric SIM Activation',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'About Store', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Recharge Cashback', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Packs & SIM Services', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Store Counter', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Store Timings', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Recharge on WhatsApp', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'tel-off-1',
        title: 'Free 5G SIM with 84-Day Unlimited 5G Data Pack',
        description: 'Port your number (MNP) to Jio or Airtel and get free SIM card + 1.5GB/day data for 84 days.',
        discountPercent: 100,
        couponCode: 'PORT5G',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'tel-s-1',
        name: 'Airtel / Jio 84-Day Truly Unlimited 5G Plan (1.5GB/Day + Unlimited Calls)',
        description: 'Free national roaming, 100 SMS/day, and unlimited high-speed 5G connectivity.',
        price: 859,
        category: 'Prepaid Plans',
        isAvailable: true,
        unit: '84-day pack'
      },
      {
        id: 'tel-s-2',
        name: 'Doorstep MNP Mobile Number Porting & Biometric Verification',
        description: 'Keep your existing number while switching networks with instant doorstep Aadhaar verification.',
        price: 150,
        discountPrice: 0,
        category: 'SIM Services',
        isAvailable: true,
        unit: 'per porting request'
      }
    ],
    gallery: [
      { id: 'tel-g-1', title: 'ConnectPlus Mobile Retail Counter', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 26. Gift & Stationery Shop
  {
    id: 'creativekraft-stationery',
    slug: 'creativekraft-stationery',
    businessName: 'CreativeKraft Stationery & Gift Emporium',
    category: 'gift_stationery',
    templateId: 'stationery-paper',
    tagline: 'Art Supplies, School Books, Custom Printing & Corporate Gift Hampers',
    description: 'Premier stationery and gifting destination stocking Staedtler, Faber-Castell, Parker, and luxury handcrafted paper journals. We provide customized corporate branding pens, return gift wrapping, school textbooks, and premium fountain pen inks.',
    ownerName: 'Harish & Ritu Ahuja',
    phone: '+91 98114 44590',
    whatsapp: '+91 98114 44590',
    email: 'sales@creativekraftstationery.in',
    address: 'Shop 11, Shankar Market, Connaught Place, New Delhi 110001',
    city: 'New Delhi',
    mapsUrl: 'https://maps.google.com/?q=Shankar+Market+Connaught+Place',
    openingHours: 'Mon - Sat: 10:00 AM – 8:30 PM (Sunday Open in Season)',
    logoUrl: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#36241D',
    secondaryColor: '#EA580C',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    bookingType: 'whatsapp_order',
    bookingCtaLabel: 'WhatsApp Gift & Stationery List',
    specialBadge: 'Custom Name Engraving Available',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'The Stationery Haven', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Bulk Deals', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Art & Corporate Gift Catalog', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Shelves & Notebooks', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Visit Hours', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Order on WhatsApp', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'st-off-1',
        title: 'Free Custom Name Laser Engraving on Parker Pens',
        description: 'Order any premium pen or leather journal and get your name or company logo laser engraved free.',
        discountPercent: 100,
        couponCode: 'ENGRAVE26',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'st-s-1',
        name: 'Handcrafted Genuine Leather Journal (Vintage Antique Deckle Edge)',
        description: '240 pages of tree-free cotton handmade paper suitable for fountain pens and watercolor sketching.',
        price: 950,
        discountPrice: 799,
        category: 'Artisan Journals',
        isAvailable: true,
        unit: 'per journal'
      },
      {
        id: 'st-s-2',
        name: 'Parker Jotter Special Edition Ballpoint Pen in Gift Box',
        description: 'Iconic stainless steel body with signature arrow clip and smooth Quinkflow ink cartridge.',
        price: 575,
        discountPrice: 499,
        category: 'Luxury Pens',
        isAvailable: true,
        unit: 'in presentation box'
      }
    ],
    gallery: [
      { id: 'st-g-1', title: 'Leather Journals & Stationery Display', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 27. Toy Shop
  {
    id: 'toywonderland-planet',
    slug: 'toywonderland-planet',
    businessName: 'ToyWonderland Kids Games & Toys',
    category: 'toy_shop',
    templateId: 'toys-wonder',
    tagline: 'ISI Certified Safe Toys, LEGO, Die-Cast Cars & Birthday Return Gifts',
    description: 'The happiest toy megastore for toddlers, kids, and collectors. Featuring official LEGO building kits, Hot Wheels tracks, STEM robotics sets, soft plushies, Nerf blasters, and indoor ride-on electric cars with free gift wrapping.',
    ownerName: 'Vandana & Rahul Grover',
    phone: '+91 98112 55901',
    whatsapp: '+91 98112 55901',
    email: 'care@toywonderland.in',
    address: 'Shop 102, 1st Floor, Ambience Mall, NH-8, Gurugram 122002',
    city: 'Gurugram',
    mapsUrl: 'https://maps.google.com/?q=Ambience+Mall+Gurugram',
    openingHours: 'Mon - Sun: 10:30 AM – 9:30 PM',
    logoUrl: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#1E1B4B',
    secondaryColor: '#F59E0B',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    bookingType: 'whatsapp_order',
    bookingCtaLabel: 'Order Toys & Birthday Gifts',
    specialBadge: '100% Non-Toxic ISI Certified',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'Welcome to Wonderland', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Birthday Deals', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Toys & Board Games Catalog', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Toy Aisles', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Store Timings', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Order on WhatsApp', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'toy-off-1',
        title: 'Free Luxury Gift Wrapping + Birthday Greeting Card',
        description: 'Order any toy above ₹999 and get designer gift wrapping and customized birthday pop-up card free.',
        discountPercent: 100,
        couponCode: 'KIDSFUN',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'toy-s-1',
        name: 'LEGO City High-Speed Rescue Police Helicopter Set (212 Pcs)',
        description: 'Detailed cockpit, spinning rotors, 3 minifigures, and easy step-by-step building instruction booklet.',
        price: 1999,
        discountPrice: 1749,
        category: 'Building Blocks & LEGO',
        isAvailable: true,
        unit: 'per box'
      },
      {
        id: 'toy-s-2',
        name: 'Rechargeable 4WD High-Speed Rock Crawler Monster Truck',
        description: 'Heavy duty all-terrain shock absorbers, 2.4GHz remote control, and USB rechargeable battery pack.',
        price: 1650,
        discountPrice: 1399,
        category: 'Remote Control Cars',
        isAvailable: true,
        unit: 'complete kit'
      }
    ],
    gallery: [
      { id: 'toy-g-1', title: 'Colorful Toy Aisles & LEGO Display', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 28. Sports Goods Shop
  {
    id: 'strikezone-sports-cricket',
    slug: 'strikezone-sports-cricket',
    businessName: 'StrikeZone Sports & Cricket Emporium',
    category: 'sports_shop',
    templateId: 'sports-kinetic',
    tagline: 'Grade 1 English Willow Bats, Yonex Racquets & Free Machine Bat Knocking',
    description: 'Premier sports equipment showroom catering to academy players, club cricketers, and badminton enthusiasts. Authorized retailer for SG, SS TON, MRF, Yonex, Cosco, and Nivia with specialized bat oiling, toe-guard fixing, and electronic stringing.',
    ownerName: 'Manpreet Singh (Ex-State Ranji Player)',
    phone: '+91 98118 77012',
    whatsapp: '+91 98118 77012',
    email: 'shop@strikezonesports.in',
    address: 'Shop 2, DDA Sports Complex Road, Pitampura, New Delhi 110034',
    city: 'New Delhi',
    mapsUrl: 'https://maps.google.com/?q=Pitampura+New+Delhi',
    openingHours: 'Mon - Sun: 9:30 AM – 9:00 PM',
    logoUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#0F172A',
    secondaryColor: '#10B981',
    fontFamily: 'Space Grotesk, sans-serif',
    bookingType: 'whatsapp_order',
    bookingCtaLabel: 'Order Sports Gear on WhatsApp',
    specialBadge: 'Free Automated Machine Bat Knocking',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'Player Heritage', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Academy Discounts', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Cricket, Badminton & Fitness Gear', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Bat Vault', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Showroom Timings', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Order on WhatsApp', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'sp-off-1',
        title: 'Free 15,000-Stroke Machine Knocking + Extratec Sheet',
        description: 'Purchase any English Willow bat and get professional automated machine knocking worth ₹1,200 complimentary.',
        discountPercent: 100,
        couponCode: 'KNOCKFREE',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'sp-s-1',
        name: 'SG Savage Edition Grade 1 English Willow Cricket Bat',
        description: 'Thick 40mm edges, balanced ping, 7-9 straight grains, with chevron grip and padded full bat cover.',
        price: 14500,
        discountPrice: 12200,
        category: 'Cricket Bats',
        isAvailable: true,
        unit: 'per bat'
      },
      {
        id: 'sp-s-2',
        name: 'Yonex Astrox 88D Pro Graphite Badminton Racquet',
        description: 'Rotational generator system, extra slim shaft, pre-strung with Yonex BG-65 Ti string at 26 lbs tension.',
        price: 11990,
        discountPrice: 9990,
        category: 'Badminton Racquets',
        isAvailable: true,
        unit: 'per racquet'
      }
    ],
    gallery: [
      { id: 'sp-g-1', title: 'StrikeZone English Willow Cricket Bat Vault', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80' }
    ]
  }
];
