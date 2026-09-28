import { BusinessWebsite } from '../types';

export const DEMO_SITES_PART4: BusinessWebsite[] = [
  // 33. Construction Site & Building Materials E-Commerce (Inspired by ConstructionKart.in)
  {
    id: 'constructionkart-materials-direct',
    slug: 'constructionkart-materials-direct',
    businessName: 'ConstructionKart Bharat Nirman Direct',
    category: 'construction',
    templateId: 'construction-kart',
    tagline: 'Direct Building Materials E-Commerce: Cement, TMT Steel, Red Bricks, Sand & Heavy Supplies',
    description: 'Inspired by ConstructionKart.in. India’s premier digital contractor and builder supply platform. Direct factory wholesale pricing, on-site dump truck delivery within 24-48 hours, verified mill test certificates, and GST tax invoice on UltraTech Cement, Tata Tiscon TMT rebars, kiln-baked red clay bricks, M-sand, Dr. Fixit waterproofing, and heavy demolition power tools.',
    ownerName: 'Vikram Choudhary (Civil Supply Director)',
    phone: '+91 98112 34567',
    whatsapp: '+91 98112 34567',
    email: 'orders@constructionkart.in',
    address: 'Warehouse Hub 4, National Highway 48, Industrial Logistic Park, Gurugram, Haryana 122004',
    city: 'Delhi NCR · Gurugram · Faridabad · Manesar',
    mapsUrl: 'https://maps.google.com/?q=National+Highway+48+Gurugram',
    openingHours: 'Mon - Sat: 6:00 AM – 9:00 PM (Heavy Truck Site Dispatch 24x7)',
    logoUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#181E29',
    secondaryColor: '#F59E0B',
    fontFamily: 'Space Grotesk, sans-serif',
    bookingType: 'whatsapp_order',
    bookingCtaLabel: 'Request Truck Dispatch & Bulk RFQ',
    specialBadge: '🏗️ Wholesale E-Commerce · 24-48hr Site Delivery (ConstructionKart Inspired)',
    siteTypeTag: 'Heavy Building Materials E-Commerce (ConstructionKart Inspired)',
    dribbbleInspiration: 'ConstructionKart.in B2B Contractor Store & Heavy Material Logistics',
    tradeModel: 'Direct WhatsApp Truck Dispatch / Contractor Wholesale RFQ',
    deliveryRadius: 'Delhi NCR, Haryana, Rajasthan border (Heavy Transit)',
    status: 'published',
    pricingPlanId: 'premium',
    amountPaid: 1999,
    paymentStatus: 'paid',
    createdAt: '2026-03-20T08:00:00Z',
    updatedAt: '2026-03-27T02:00:00Z',
    sections: [
      { id: 'about', title: 'Why Bharat Nirman Direct', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Bulk Contractor Tier Pricing', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Live Building Materials Catalog & Rates', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Stock Yards, Rebars & Site Delivery', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Dispatch Timings & Truck Fleet Specs', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Immediate Site RFQ & Delivery Booking', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'ck-off-1',
        title: 'Full Truckload Cement Mega Discount (₹25/bag off)',
        description: 'Flat ₹25 per bag discount on full trailer loads (600+ bags) of UltraTech or ACC OPC-53 cement with free site offloading.',
        discountPercent: 12,
        couponCode: 'TRUCKLOAD53',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      },
      {
        id: 'ck-off-2',
        title: 'TMT Steel Bundle Free Crane Unloading',
        description: 'Orders of 5 tonnes and above receive free hydraulic crane unloading at your construction foundation.',
        discountPercent: 8,
        couponCode: 'STEELCRANE',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'ck-1',
        name: 'UltraTech Super Premium Cement (50kg Bag - OPC 53 Grade)',
        description: 'Engineered micro-fine particle cement for high early strength, rapid slab casting, and crack resistance. Factory fresh with test report.',
        price: 385,
        discountPrice: 360,
        category: 'Cement & Binding Agents',
        isAvailable: true,
        isFeatured: true,
        unit: 'per 50kg bag',
        productBadge: 'BIS Certified'
      },
      {
        id: 'ck-2',
        name: 'Tata Tiscon 550D High-Ductility TMT Rebar (12mm / 16mm Bundle)',
        description: 'Earthquake-resistant Fe 550D thermo-mechanically treated steel rebar with superior rib pattern. Comes with Tata hologram.',
        price: 62500,
        discountPrice: 59800,
        category: 'TMT Steel & Structural Iron',
        isAvailable: true,
        isFeatured: true,
        unit: 'per Metric Tonne (MT)',
        productBadge: 'Fe 550D Grade'
      },
      {
        id: 'ck-3',
        name: 'First-Class Kiln-Baked Red Clay Bricks (Pallet of 1,000 Pcs)',
        description: 'Machine-pressed uniform red bricks with crushing strength exceeding 10.5 N/mm². Zero efflorescence and sharp edges.',
        price: 7800,
        discountPrice: 7400,
        category: 'Bricks & Masonry Blocks',
        isAvailable: true,
        isFeatured: true,
        unit: 'per 1,000 bricks',
        productBadge: 'Grade 1 Red Brick'
      },
      {
        id: 'ck-4',
        name: 'M-Sand (Manufactured Sand for Plaster & Concrete - 10 Wheeler Dumper)',
        description: 'Double-washed, cubical particle sand conforming to IS 383 Zone II. Eliminates silt and voids in concrete slabs.',
        price: 19500,
        discountPrice: 18500,
        category: 'Sand & Crushed Aggregates',
        isAvailable: true,
        isFeatured: true,
        unit: 'per 400 CFT Dumper',
        productBadge: 'IS 383 Zone II'
      },
      {
        id: 'ck-5',
        name: 'Dr. Fixit Pidiproof LW+ Integral Waterproofing Compound (20L Drum)',
        description: 'Heavy integral liquid waterproofing admixture for concrete and plaster work. Drastically minimizes capillary absorption.',
        price: 2450,
        discountPrice: 2150,
        category: 'Chemicals & Waterproofing',
        isAvailable: true,
        unit: 'per 20L Drum',
        productBadge: 'Heavy Duty'
      },
      {
        id: 'ck-6',
        name: 'Bosch Professional GSH 11 E Heavy Demolition Hammer Drill (1500W)',
        description: '16.8 Joules impact energy, SDS Max toolholder, robust metal housing for continuous high-impact slab breaking.',
        price: 18900,
        discountPrice: 16999,
        category: 'Power Tools & Equipment',
        isAvailable: true,
        isFeatured: true,
        unit: 'per unit with carrying case',
        productBadge: '1-Year Warranty'
      },
      {
        id: 'ck-7',
        name: 'Blue Metal Crushed Stone Aggregates 20mm (1 Brass / 100 CFT)',
        description: 'Clean angular granite stones machine-crushed and sieved for standard RCC beam and column casting.',
        price: 3600,
        category: 'Sand & Crushed Aggregates',
        isAvailable: true,
        unit: 'per Brass (100 CFT)',
        productBadge: 'Granite Grade'
      },
      {
        id: 'ck-8',
        name: 'Asian Paints Apex Ultima Exterior Emulsion Weatherproof (20L Drum)',
        description: 'Advanced silicone polymer exterior wall paint resisting dust, heavy tropical monsoon rain, and UV fading for 7 years.',
        price: 6200,
        discountPrice: 5600,
        category: 'Paints & Finishing Supplies',
        isAvailable: true,
        unit: 'per 20 Litre Drum',
        productBadge: '7-Yr Warranty'
      }
    ],
    gallery: [
      { id: 'ckg-1', title: 'TMT Steel Bundles in Logistics Yard', category: 'products', imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80' },
      { id: 'ckg-2', title: 'Dump Truck Fleet Ready for 24-hr Dispatch', category: 'facilities', imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80' },
      { id: 'ckg-3', title: 'UltraTech & ACC Pallet Storage', category: 'products', imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 34. Botanica Greenhouse & Specialty Pour-Over Cafe (Dribbble Nordic Botanical style)
  {
    id: 'botanica-greenhouse-cafe',
    slug: 'botanica-greenhouse-cafe',
    businessName: 'Botanica Greenhouse & Specialty Pour-Over Cafe',
    category: 'cafe',
    templateId: 'cafe-modern',
    tagline: 'Nordic Minimalist Botanical Courtyard Cafe & Single-Origin Pour-Overs',
    description: 'Inspired by award-winning Nordic botanical cafe concepts on Dribbble. An indoor glasshouse conservatory surrounded by fiddle-leaf figs, monstera vines, and soft natural skylights. Specializing in single-origin pour-overs (V60, Kalita Wave, Aeropress), ceremonial Uji matcha lattes, and vegan pistachio pastry.',
    ownerName: 'Astrid & Aarav (Head Baristas)',
    phone: '+91 98231 11223',
    whatsapp: '+91 98231 11223',
    email: 'bloom@botanicacafe.in',
    address: 'Conservatory Villa 12, Indiranagar 100 Feet Road, Bengaluru, Karnataka 560038',
    city: 'Bengaluru (Indiranagar)',
    mapsUrl: 'https://maps.google.com/?q=100+Feet+Road+Indiranagar+Bengaluru',
    openingHours: 'Tue - Sun: 8:00 AM – 9:00 PM (Monday Roasting Cleanse)',
    logoUrl: 'https://images.unsplash.com/photo-1445116572660-23842988c889?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#2D4739',
    secondaryColor: '#D97757',
    fontFamily: 'Fraunces, Georgia, serif',
    bookingType: 'reservation_party',
    bookingCtaLabel: 'Reserve Courtyard Table',
    specialBadge: '🌿 Dribbble Design Pick · Nordic Botanical Courtyard',
    siteTypeTag: 'Minimalist Nordic Botanical Cafe',
    dribbbleInspiration: 'Dribbble Trending: Nordic Glasshouse & Botanical Courtyard',
    tradeModel: 'Courtyard Table Reservation & Slow Pour-Over Counter',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-22T10:00:00Z',
    updatedAt: '2026-03-27T02:00:00Z',
    sections: [
      { id: 'about', title: 'The Botanical Glasshouse Concept', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Morning Light Brew Combos', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Estate Pour-Overs & Plant-Based Bakes', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Conservatory Skylights & Lush Plants', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Quiet Hours & Brew Sessions', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Table Reservation & Bean Subscriptions', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'bot-off-1',
        title: 'Morning Mindfulness Brew (Flat 20% Off)',
        description: '20% off all manual pour-overs and warm pistachio loaves before 11:00 AM on weekdays.',
        discountPercent: 20,
        couponCode: 'BOTANIC20',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'bot-1',
        name: 'Ethiopian Yirgacheffe Jasmine V60 Pour-Over',
        description: 'Washed heirloom Arabica with fragrant bergamot aroma, candied peach notes, and clean floral jasmine tea body.',
        price: 280,
        discountPrice: 240,
        category: 'Manual Pour-Overs',
        isAvailable: true,
        isVeg: true,
        isFeatured: true
      },
      {
        id: 'bot-2',
        name: 'Ceremonial Uji Matcha Latte with Oat Milk',
        description: 'First harvest stone-ground green tea whisked with bamboo chasen and lightly steamed gluten-free oat milk.',
        price: 290,
        category: 'Ceremonial Teas & Matchas',
        isAvailable: true,
        isVeg: true,
        isFeatured: true
      },
      {
        id: 'bot-3',
        name: 'Rose Water & Iranian Pistachio Country Loaf',
        description: 'Moist slow-fermented almond tea bread glazed with wild rose reduction and crushed emerald pistachios.',
        price: 220,
        category: 'Plant-Based Pastry',
        isAvailable: true,
        isVeg: true,
        isFeatured: true
      },
      {
        id: 'bot-4',
        name: 'Smashed Hass Avocado & Whipped Ricotta Sourdough',
        description: 'Thick country sourdough toast, crushed Hass avocado, sheep milk ricotta, toasted pepitas, and cold-pressed chili oil.',
        price: 340,
        category: 'Brunch Plates',
        isAvailable: true,
        isVeg: true,
        isFeatured: true
      },
      {
        id: 'bot-5',
        name: 'Kyoto 12-Hour Slow Drip Cold Brew',
        description: 'Gravity-extracted drop-by-drop through ice water using Dutch glass towers. Extremely smooth with notes of cacao and ripe cherry.',
        price: 270,
        category: 'Manual Pour-Overs',
        isAvailable: true,
        isVeg: true
      }
    ],
    gallery: [
      { id: 'botg-1', title: 'Lush Botanical Skylight Seating', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80' },
      { id: 'botg-2', title: 'V60 Pour-Over Dripper in Action', category: 'products', imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 35. The Vinyl Attic & Jazz Kissa Coffee Bar (Dribbble Japanese Kissa style)
  {
    id: 'vinyl-attic-jazz-cafe',
    slug: 'vinyl-attic-jazz-cafe',
    businessName: 'The Vinyl Attic & Jazz Kissa Coffee Bar',
    category: 'cafe',
    templateId: 'cafe-modern',
    tagline: 'Japanese Audiophile Hi-Fi Listening Lounge, Siphon Coffee & Rare Vinyl',
    description: 'Inspired by Tokyo’s legendary vintage Jazz Kissaten culture and Dribbble dark-mode retro editorial layouts. Analog McIntosh vacuum tube amplifiers, Klipsch heritage horn speakers, Japanese siphon vacuum coffee brewing, and 2,500+ curated original jazz vinyl pressings.',
    ownerName: 'Kenji & Vikram (Sound & Coffee Curators)',
    phone: '+91 98334 55667',
    whatsapp: '+91 98334 55667',
    email: 'hifi@vinylattic.in',
    address: 'Mezzanine Floor, 44 Pali Hill, Near Olive Bar, Bandra West, Mumbai, Maharashtra 400050',
    city: 'Mumbai (Bandra West)',
    mapsUrl: 'https://maps.google.com/?q=Pali+Hill+Bandra+West+Mumbai',
    openingHours: 'Wed - Mon: 11:00 AM – Midnight (Tuesday Quiet Vinyl Maintenance)',
    logoUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#221C16',
    secondaryColor: '#E08D3C',
    fontFamily: 'Playfair Display, serif',
    bookingType: 'reservation_party',
    bookingCtaLabel: 'Reserve Audiophile Listening Booth',
    specialBadge: '🎷 Dribbble Design Pick · Japanese Jazz Kissa & Siphon Bar',
    siteTypeTag: 'Audiophile Jazz Kissa & Hi-Fi Listening Bar',
    dribbbleInspiration: 'Dribbble Trending: Retro Japanese Jazz Kissa & Dark Aesthetic',
    tradeModel: 'Listening Booth Booking & Siphon Coffee Counter',
    status: 'published',
    pricingPlanId: 'premium',
    amountPaid: 1999,
    paymentStatus: 'paid',
    createdAt: '2026-03-21T11:00:00Z',
    updatedAt: '2026-03-27T02:00:00Z',
    sections: [
      { id: 'about', title: 'The Analog Sound & Coffee Philosophy', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Vinyl Session & Siphon Tasting Flights', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Siphon Brews, Cold Drips & Japanese Sandos', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Tube Amps, Vinyl Wall & Amber Glow', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Vinyl Listening Schedules & Rules', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Private Listening Booth Reservations', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'va-off-1',
        title: 'Blue Note Evening Special (Complimentary Basque Slice)',
        description: 'Order any siphon pot and reserve a listening booth after 8 PM to enjoy a complimentary slice of matcha basque cheesecake.',
        discountPercent: 25,
        couponCode: 'BLUENOTE',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'va-1',
        name: 'Siphon Vacuum Pot Single Origin Dark Roast',
        description: 'Brewed over halogen beam burner in glass globes. Clean, intense, heavy chocolate finish with velvety mouthfeel.',
        price: 310,
        discountPrice: 280,
        category: 'Siphon Bar',
        isAvailable: true,
        isVeg: true,
        isFeatured: true
      },
      {
        id: 'va-2',
        name: 'Kyoto Cold Drip over Hand-Carved Ice Sphere',
        description: 'Dark-roasted Sumatra Mandheling brewed 16 hours, poured tableside over a crystal-clear hand-carved ice sphere.',
        price: 320,
        category: 'Siphon Bar',
        isAvailable: true,
        isVeg: true,
        isFeatured: true
      },
      {
        id: 'va-3',
        name: 'Japanese Matcha Basque Burnt Cheesecake',
        description: 'Deeply caramelized dark top with an oozing Uji ceremonial matcha cream cheese center.',
        price: 290,
        category: 'Kissaten Bakes',
        isAvailable: true,
        isVeg: true,
        isFeatured: true
      },
      {
        id: 'va-4',
        name: 'Tamago Sando (Fluffy Japanese Egg Salad Brioche)',
        description: 'Toasted Hokkaido milk bread stuffed with velvety whipped dashi eggs, Kewpie mayo, and chives.',
        price: 280,
        category: 'Sandos & Tapas',
        isAvailable: true,
        isVeg: true,
        isFeatured: true
      },
      {
        id: 'va-5',
        name: 'Smoked Shiso & Yuzu Sparkling Tonic',
        description: 'House smoked Japanese shiso leaves with sparkling citrus tonic and wild forest honey.',
        price: 260,
        category: 'Specialty Beverages',
        isAvailable: true,
        isVeg: true
      }
    ],
    gallery: [
      { id: 'vag-1', title: 'Vintage Vinyl Stacks & Tube Soundbar', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80' },
      { id: 'vag-2', title: 'Siphon Halogen Beam Counter', category: 'products', imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 36. Neon Grind Cyber Cafe & Creative Co-Working Hub (Dribbble Cyber Tech style)
  {
    id: 'neon-grind-coworking-cafe',
    slug: 'neon-grind-coworking-cafe',
    businessName: 'Neon Grind Cyber Cafe & Creative Co-Working Hub',
    category: 'cafe',
    templateId: 'cafe-modern',
    tagline: 'Next-Gen Co-Working Lounge, 1Gbps Fiber Wi-Fi & Nitro Cold Brews on Tap',
    description: 'Inspired by modern tech and cyber cafe concepts on Dribbble. Soundproof podcast booths, Herman Miller ergonomic chairs, ultra-fast 1Gbps fiber internet, and nitro cold brews running on draft kegs. Built for founders, freelance developers, and creative nomads.',
    ownerName: 'Devansh & Tanvi (Co-Founders)',
    phone: '+91 98450 88990',
    whatsapp: '+91 98450 88990',
    email: 'terminal@neongrind.io',
    address: 'Cyber Hub Tower B, DLF Cyber City, Sector 24, Gurugram, Haryana 122002',
    city: 'Gurugram (Cyber City)',
    mapsUrl: 'https://maps.google.com/?q=DLF+Cyber+City+Gurugram',
    openingHours: 'Mon - Sun: 7:00 AM – Midnight (24/7 Access for Passholders)',
    logoUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#131722',
    secondaryColor: '#00F0FF',
    fontFamily: 'Space Grotesk, sans-serif',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Book Ergonomic Desk / Pod',
    specialBadge: '⚡ Dribbble Design Pick · 1Gbps Co-Working & Nitro Tap',
    siteTypeTag: 'Tech Co-Working & Nitro Taproom Cafe',
    dribbbleInspiration: 'Dribbble Trending: Cyberpunk & Modern Tech Co-Working Cafe',
    tradeModel: 'Desk Pod Booking & WhatsApp Fast Refills',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-23T09:00:00Z',
    updatedAt: '2026-03-27T02:00:00Z',
    sections: [
      { id: 'about', title: 'Engineered for Flow State & Speed', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Day Pass & Team Bundle Perks', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Draft Nitro Brews, Smoothies & Clean Eats', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Ergonomic Pods, Dual-Displays & Lounge', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Sprint Hours & Networking Meetups', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Day Pass Booking & Team Pod Inquiries', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'ng-off-1',
        title: 'Founder First Day Pass Flat ₹399',
        description: 'Includes full day ergonomic desk seating, 1Gbps high-speed Wi-Fi, unlimited sparkling water, and 2 nitro cold brews.',
        discountPercent: 30,
        couponCode: 'HACKPASS',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'ng-1',
        name: 'Nitro Cold Brew on Draft (Double Charged)',
        description: 'Nitrogen-infused cold-steeped Arabica with Guinness-like creamy cascade head and zero dairy. Natural chocolate sweetness.',
        price: 240,
        discountPrice: 210,
        category: 'Draft Taps',
        isAvailable: true,
        isVeg: true,
        isFeatured: true
      },
      {
        id: 'ng-2',
        name: '1-Day All-Access Co-Working Pass + 2 Craft Coffees',
        description: 'Uncapped high-speed fiber internet, private phone booth access, ergonomic chair, and two artisan beverages.',
        price: 499,
        discountPrice: 399,
        category: 'Co-Working Access Passes',
        isAvailable: true,
        isFeatured: true
      },
      {
        id: 'ng-3',
        name: 'Wild Blueberry & Protein Acai Power Bowl',
        description: 'Organic acai blended with almond butter, hemp seeds, toasted coconut flakes, and raw local honey.',
        price: 320,
        category: 'Focus Food & Fuel',
        isAvailable: true,
        isVeg: true,
        isFeatured: true
      },
      {
        id: 'ng-4',
        name: 'Truffle Edamame & Guacamole Sourdough Toast',
        description: 'Whole grain sourdough topped with smashed edamame, Hass avocado guacamole, microgreens, and white truffle essence.',
        price: 350,
        category: 'Focus Food & Fuel',
        isAvailable: true,
        isVeg: true
      },
      {
        id: 'ng-5',
        name: 'Cascara Electrolyte Sparkling Tonic',
        description: 'Sun-dried coffee cherry cascara brewed cold with pink Himalayan salt, citrus, and natural carbonation.',
        price: 210,
        category: 'Draft Taps',
        isAvailable: true,
        isVeg: true
      }
    ],
    gallery: [
      { id: 'ngg-1', title: 'Workstations with High-Speed Fiber', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80' },
      { id: 'ngg-2', title: 'Nitro Cold Brew On Draft', category: 'products', imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 37. Maison de Sucre French Creperie & Viennoiserie Cafe (Dribbble European Luxury style)
  {
    id: 'maison-sucre-french-cafe',
    slug: 'maison-sucre-french-cafe',
    businessName: 'Maison de Sucre French Creperie & Viennoiserie Cafe',
    category: 'cafe',
    templateId: 'cafe-modern',
    tagline: 'Artisanal Parisian Bakery, 72-Hour Laminated Pastries & Brittany Galettes',
    description: 'Inspired by refined French patisserie layouts on Dribbble with Cormorant Garamond typography. Carrara marble counters, polished brass trim, and authentic Breton buckwheat savory galettes. Serving 70% Valrhona hot French chocolate, flaky pain au chocolat, and Parisian high tea.',
    ownerName: 'Chef Camille & Rohan',
    phone: '+91 98119 22334',
    whatsapp: '+91 98119 22334',
    email: 'bonjour@maisonsucre.in',
    address: 'Chanakyapuri Diplomatic Enclave, Malcha Marg, New Delhi 110021',
    city: 'New Delhi (Malcha Marg)',
    mapsUrl: 'https://maps.google.com/?q=Malcha+Marg+Chanakyapuri+New+Delhi',
    openingHours: 'Tue - Sun: 8:30 AM – 10:30 PM (Fresh Croissants Out at 8:30 AM & 4:00 PM)',
    logoUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#1A2849',
    secondaryColor: '#D4AF37',
    fontFamily: 'Cormorant Garamond, Georgia, serif',
    bookingType: 'reservation_party',
    bookingCtaLabel: 'Reserve Parisian Bistro Table',
    specialBadge: '🥐 Dribbble Design Pick · Parisian Patisserie & Galettes',
    siteTypeTag: 'Parisian Viennoiserie & Creperie',
    dribbbleInspiration: 'Dribbble Trending: Luxury French Patisserie & Editorial Chic',
    tradeModel: 'Table Reservation & Box Delivery on WhatsApp',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-24T10:00:00Z',
    updatedAt: '2026-03-27T02:00:00Z',
    sections: [
      { id: 'about', title: 'The French Viennoiserie Tradition', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Afternoon Tea & Pastry Box Bundles', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Laminated Pastries, Galettes & Valrhona Chocolate', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Marble Bistro, Laminated Layers & Tea Salon', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Fresh Bake Batches & Tea Hours', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Bistro Reservations & Gift Box Orders', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'ms-off-1',
        title: 'Parisian Breakfast Duet Flat 20% Off',
        description: 'Order any Breton Galette and receive 20% off on Valrhona Hot French Chocolate every morning between 8:30 AM and 11:30 AM.',
        discountPercent: 20,
        couponCode: 'PARIS20',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'ms-1',
        name: 'Classic Paris-Brest with Hazelnut Praline Mousseline',
        description: 'Choux pastry ring crowned with toasted flaked almonds and filled with rich caramelized Piedmont hazelnut praline cream.',
        price: 320,
        discountPrice: 290,
        category: 'French Viennoiserie',
        isAvailable: true,
        isVeg: true,
        isFeatured: true
      },
      {
        id: 'ms-2',
        name: 'Brittany Buckwheat Galette Complète (Emmental & Farm Egg)',
        description: 'Crisp gluten-free buckwheat crepe folded with melted Swiss Emmental cheese, sunny-side farm egg, and fresh garden herbs.',
        price: 420,
        category: 'Savoury Galettes',
        isAvailable: true,
        isFeatured: true
      },
      {
        id: 'ms-3',
        name: 'Valrhona 70% Dark Thick French Hot Chocolate',
        description: 'Slow-simmered whole milk and heavy cream with melted French Guanaja chocolate discs, served with chantilly cream.',
        price: 280,
        discountPrice: 250,
        category: 'Chocolat Chaud & Coffee',
        isAvailable: true,
        isVeg: true,
        isFeatured: true
      },
      {
        id: 'ms-4',
        name: 'Kouign-Amann Salted Brittany Butter Pastry',
        description: 'Caramelized layered butter cake with crispy golden crystallized sugar crust and meltingly tender interior.',
        price: 210,
        category: 'French Viennoiserie',
        isAvailable: true,
        isVeg: true
      },
      {
        id: 'ms-5',
        name: 'Norwegian Smoked Salmon & Crème Fraîche Crepe',
        description: 'Delicate wheat crepe rolled with cold-smoked Norwegian salmon, dill cream, capers, and lemon zest.',
        price: 460,
        category: 'Savoury Galettes',
        isAvailable: true,
        isFeatured: true
      }
    ],
    gallery: [
      { id: 'msg-1', title: 'Marble Bistro & High Tea Room', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80' },
      { id: 'msg-2', title: 'Golden Laminated Pastries', category: 'products', imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 38. BrewCraft Cold Brew Micro-Taproom & Roastery (Dribbble Industrial Craft style)
  {
    id: 'brewcraft-taproom-cafe',
    slug: 'brewcraft-taproom-cafe',
    businessName: 'BrewCraft Cold Brew Micro-Taproom & Roastery',
    category: 'cafe',
    templateId: 'cafe-modern',
    tagline: 'Industrial Warehouse Taproom: 8 Cold Brews on Tap & Bean Tasting Flights',
    description: 'Inspired by industrial craft taproom aesthetics on Dribbble. Exposed steel beams, polished concrete bar, and European stainless steel pressure taps serving 8 rotating micro-lot cold brews. Offers coffee tasting paddle flights, cascara tonics, and wood-fired bagel sandwiches.',
    ownerName: 'Samir & Kshitij (Brewmasters)',
    phone: '+91 98200 44556',
    whatsapp: '+91 98200 44556',
    email: 'kegs@brewcrafttaproom.in',
    address: 'Warehouse Shed 7, Mathuradas Mill Compound, Lower Parel, Mumbai, Maharashtra 400013',
    city: 'Mumbai (Lower Parel)',
    mapsUrl: 'https://maps.google.com/?q=Lower+Parel+Mathuradas+Mill+Mumbai',
    openingHours: 'Mon - Sun: 9:00 AM – 11:00 PM (Live Taproom Sessions Daily)',
    logoUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#1E2022',
    secondaryColor: '#C86432',
    fontFamily: 'Space Grotesk, sans-serif',
    bookingType: 'reservation_party',
    bookingCtaLabel: 'Reserve Taproom Tasting Flight',
    specialBadge: '🍺 Dribbble Design Pick · 8 Nitro Taps & Tasting Flights',
    siteTypeTag: 'Industrial Roastery Taproom & Micro-Roastery',
    dribbbleInspiration: 'Dribbble Trending: Industrial Taproom & Micro-Roastery',
    tradeModel: 'Taproom Tasting Flight & Bean Bag Dispatch',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-25T11:00:00Z',
    updatedAt: '2026-03-27T02:00:00Z',
    sections: [
      { id: 'about', title: 'The Cold Keg Pressure System', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Tap Flight & Roastery Combos', isEnabled: true, order: 2 },
      { id: 'menu', title: 'On-Tap Cold Brews, Sliders & Wood-Fired Bagels', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Keg Cold Room, Steel Taps & Warehouse Bar', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Roasting Hours & Fresh Keg Tappings', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Flight Reservations & Cold Keg Delivery', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'bc-off-1',
        title: 'Taproom Flight Paddle 20% Off Weekdays',
        description: 'Experience 4 rotating cold brew micro-lots with tasting notes at 20% discount between 3 PM and 7 PM.',
        discountPercent: 20,
        couponCode: 'TAPFLIGHT',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'bc-1',
        name: '4-Glass Cold Brew Tasting Flight Paddle',
        description: 'Curated 100ml tasting glasses of Nitro Cold Brew, Cascara Tonic, Bourbon Barrel Aged Brew, and Monsooned Malabar.',
        price: 360,
        discountPrice: 310,
        category: 'Tasting Flights & Taps',
        isAvailable: true,
        isVeg: true,
        isFeatured: true
      },
      {
        id: 'bc-2',
        name: 'Nitro Cascara & Blood Orange Spritz',
        description: 'Sparkling cascara cold brew infused with organic blood orange juice and poured with creamy micro-nitrogen foam.',
        price: 240,
        category: 'Tasting Flights & Taps',
        isAvailable: true,
        isVeg: true,
        isFeatured: true
      },
      {
        id: 'bc-3',
        name: 'Jalapeno Cheddar Wood-Fired Toasted Bagel',
        description: 'New York style boiled and wood-fired bagel with charred jalapeno cream cheese, pickled onions, and smoked sea salt.',
        price: 280,
        category: 'Taproom Bites & Bagels',
        isAvailable: true,
        isVeg: true,
        isFeatured: true
      },
      {
        id: 'bc-4',
        name: 'Whole Bean Single Origin Tin (Chikmagalur Red Honey - 250g)',
        description: 'Anaerobic slow-dried Arabica beans roasted medium-light for notes of ripe plum, brown sugar, and dark chocolate.',
        price: 550,
        category: 'Roastery Retail Tins',
        isAvailable: true,
        isVeg: true,
        isFeatured: true
      },
      {
        id: 'bc-5',
        name: 'Smoked Barbecue Pulled Jackfruit Sliders (2 Pcs)',
        description: 'Slow-smoked jackfruit tossed in hickory espresso BBQ reduction inside warm brioche slider buns with purple slaw.',
        price: 340,
        category: 'Taproom Bites & Bagels',
        isAvailable: true,
        isVeg: true
      }
    ],
    gallery: [
      { id: 'bcg-1', title: 'Industrial Warehouse Taproom Bar', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80' },
      { id: 'bcg-2', title: 'Stainless Steel Cold Brew Taps', category: 'facilities', imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80' }
    ]
  },

  // 39. The Petal & Pour Floral Tea Atelier & Cafe (Dribbble Botanical Flower Shop style)
  {
    id: 'petal-pour-floral-cafe',
    slug: 'petal-pour-floral-cafe',
    businessName: 'The Petal & Pour Floral Tea Atelier & Cafe',
    category: 'cafe',
    templateId: 'cafe-modern',
    tagline: 'Living Floral Boutique & Handcrafted Blossom Teas in a Sunlit Courtyard',
    description: 'Inspired by viral flower-shop-cafe concepts on Dribbble. A hybrid floristry studio where guests sip whole-leaf silver-needle white tea infused with dried jasmine, rose petals, and lavender honey while florist artisans craft custom fresh flower bouquets beside them.',
    ownerName: 'Ananya & Shreya (Florists & Tea Sommeliers)',
    phone: '+91 98199 77889',
    whatsapp: '+91 98199 77889',
    email: 'petals@petalpour.in',
    address: 'Boutique Courtyard 8, Jubilee Hills Road No. 36, Hyderabad, Telangana 500033',
    city: 'Hyderabad (Jubilee Hills)',
    mapsUrl: 'https://maps.google.com/?q=Jubilee+Hills+Road+36+Hyderabad',
    openingHours: 'Mon - Sun: 9:00 AM – 9:30 PM (Fresh Flower Drops Daily at 9:00 AM)',
    logoUrl: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#592D3E',
    secondaryColor: '#E89D4F',
    fontFamily: 'Fraunces, Georgia, serif',
    bookingType: 'reservation_party',
    bookingCtaLabel: 'Book High Tea Tier & Flower Bouquet',
    specialBadge: '🌸 Dribbble Design Pick · Floral Atelier & High Tea',
    siteTypeTag: 'Floral Boutique & High Tea Atelier',
    dribbbleInspiration: 'Dribbble Trending: Floral Studio & High Tea Salon',
    tradeModel: 'High Tea Tier Booking & Flower Delivery on WhatsApp',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-26T09:00:00Z',
    updatedAt: '2026-03-27T02:00:00Z',
    sections: [
      { id: 'about', title: 'Where Petals Meet Blossom Teas', isEnabled: true, order: 1 },
      { id: 'offers', title: 'High Tea & Flower Bouquet Bundles', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Blooming Flower Teas, Scones & Floral Desserts', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Living Flower Wall & Sunlit Tea Tables', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Flower Workshop & High Tea Slots', isEnabled: true, order: 5 },
      { id: 'contact', title: 'High Tea Reservations & Bouquet Delivery', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'pp-off-1',
        title: 'Floral Afternoon High Tea Flat ₹150 Off',
        description: 'Book a two-person afternoon high tea stand and receive ₹150 off on any custom wrapped flower bouquet.',
        discountPercent: 18,
        couponCode: 'BLOSSOM150',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      {
        id: 'pp-1',
        name: 'Royal English Afternoon High Tea Tier for Two',
        description: 'Three-tiered stand featuring warm rose-water scones with clotted cream, cucumber mint finger sandwiches, and lavender macarons.',
        price: 850,
        discountPrice: 750,
        category: 'High Tea Tiers',
        isAvailable: true,
        isVeg: true,
        isFeatured: true
      },
      {
        id: 'pp-2',
        name: 'Blooming Dragon Well Jasmine Tea Sphere',
        description: 'Hand-tied green tea sphere that unfurls in a clear glass teapot into a towering pink globe amaranth and jasmine blossom.',
        price: 240,
        category: 'Blossom Teas & Infusions',
        isAvailable: true,
        isVeg: true,
        isFeatured: true
      },
      {
        id: 'pp-3',
        name: 'Rose Water, Saffron & Pistachio Tea Cake',
        description: 'Fluffy sponge soaked in Kashmiri saffron milk and wild Persian rose water, garnished with edible rose petals.',
        price: 220,
        category: 'Floral Patisserie',
        isAvailable: true,
        isVeg: true,
        isFeatured: true
      },
      {
        id: 'pp-4',
        name: 'Lavender Honey Iced Oat Milk Latte',
        description: 'Cold-brewed Arabica infused with French culinary lavender syrup, organic forest honey, and creamy oat milk.',
        price: 260,
        category: 'Floral Patisserie',
        isAvailable: true,
        isVeg: true,
        isFeatured: true
      },
      {
        id: 'pp-5',
        name: 'Fresh Peony & Hydrangea Hand-Tied Gift Bouquet',
        description: 'Handcrafted bouquet wrapped in Korean matte paper with imported Dutch peonies, hydrangeas, eucalyptus, and satin ribbon.',
        price: 1200,
        discountPrice: 1050,
        category: 'Fresh Flower Bouquets',
        isAvailable: true,
        isFeatured: true
      }
    ],
    gallery: [
      { id: 'ppg-1', title: 'Sunlit Living Flower Wall Courtyard', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80' },
      { id: 'ppg-2', title: 'High Tea Tier & Flower Workshop', category: 'products', imageUrl: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80' }
    ]
  }
];
