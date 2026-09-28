import { BusinessWebsite } from '../types';

export const DEMO_SITES_PART1: BusinessWebsite[] = [
  // 1. General store / kirana (big format)
  {
    id: 'shree-ganesh-super-mart',
    slug: 'shree-ganesh-super-mart',
    businessName: 'Shree Ganesh Super Mart & Kirana',
    category: 'kirana',
    templateId: 'kirana-clean',
    tagline: 'Daily Fresh Staples, Branded Groceries & Doorstep Delivery in 30 Mins',
    description: 'Serving over 2,500 families in Sector 45 Gurugram. From Aashirvaad Shudh Chakki Atta and Fortune Cold Pressed Mustard Oil to fresh spices and household toiletries, send your handwritten grocery list on WhatsApp for direct packing and billing.',
    ownerName: 'Ganesh & Mohanlal Agrawal',
    phone: '+91 98110 12345',
    whatsapp: '+91 98110 12345',
    email: 'order@shreeganeshmart.in',
    address: 'Shop 12-14, D-Block Market, Sector 45, Gurugram, Haryana 122003',
    city: 'Gurugram',
    mapsUrl: 'https://maps.google.com/?q=Sector+45+Gurugram',
    openingHours: 'Mon - Sun: 7:00 AM – 10:30 PM',
    logoUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#15803d',
    bookingType: 'whatsapp_order',
    bookingCtaLabel: 'WhatsApp Grocery List',
    deliveryRadius: 'Free Delivery within 3 KM (Min. ₹499)',
    specialBadge: 'Free Delivery in 30 Mins',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-03-25T10:00:00Z',
    sections: [
      { id: 'about', title: 'About Store', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Daily Deals', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Essential Grocery Catalog', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Store Shelves', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Timings & Delivery Radius', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Order on WhatsApp', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'mart-off-1',
        title: 'Monthly Ration Pack 10% Off',
        description: 'Order monthly ration above ₹3,000 and get flat 10% discount + free 1kg Tata Salt packet.',
        discountPercent: 10,
        couponCode: 'RATION10',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'km-1', name: 'Aashirvaad Shudh Chakki Atta (10 Kg)', description: '100% whole wheat grain with natural bran, zero maida.', price: 460, discountPrice: 425, category: 'Atta & Flours', isAvailable: true, unit: '10 Kg Bag' },
      { id: 'km-2', name: 'Fortune Kachi Ghani Mustard Oil (1 Litre)', description: 'Cold pressed pure mustard oil with high pungency and omega-3.', price: 165, discountPrice: 149, category: 'Oils & Ghee', isAvailable: true, unit: '1 Litre Pouch' },
      { id: 'km-3', name: 'India Gate Basmati Rice Classic (5 Kg)', description: 'Aged long-grain royal basmati rice with sweet natural aroma.', price: 580, discountPrice: 520, category: 'Rice & Pulses', isAvailable: true, unit: '5 Kg Bag' },
      { id: 'km-4', name: 'Tata Sampann Unpolished Toor Dal (1 Kg)', description: 'Rich in dietary fiber and natural protein, unpolished grains.', price: 185, discountPrice: 170, category: 'Rice & Pulses', isAvailable: true, unit: '1 Kg Pack' }
    ],
    gallery: [
      { id: 'kg-1', title: 'Grains & Pulses Aisles', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  // 2. Mobile phone repair shop
  {
    id: 'quickfix-mobile-repair',
    slug: 'quickfix-mobile-repair',
    businessName: 'QuickFix Mobile & Tablet Care',
    category: 'repair',
    templateId: 'repair-tech',
    tagline: 'Certified Chip-Level Repairs, Original Displays & 90-Day Warranty',
    description: 'Delhi NCR’s premier smartphone repair lab. Specializing in iPhone OLED screens, Samsung foldable glass, water damage chip cleaning, battery swap in 20 minutes, and motherboard diagnostics with European laser rework stations.',
    ownerName: 'Deepak Verma & Team',
    phone: '+91 99102 33445',
    whatsapp: '+91 99102 33445',
    email: 'support@quickfixcare.in',
    address: 'Shop 21, First Floor, Madhuban Complex, Near Metro Gate 1, Nehru Place, New Delhi 110019',
    city: 'New Delhi',
    mapsUrl: 'https://maps.google.com/?q=Nehru+Place+New+Delhi',
    openingHours: 'Mon - Sat: 10:30 AM – 8:30 PM | Sun: 11 AM - 5 PM',
    logoUrl: 'https://images.unsplash.com/photo-1597740985671-2a8a3b80532e?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#0284c7',
    bookingType: 'pickup_drop',
    bookingCtaLabel: 'Book Device Pickup / Drop',
    specialBadge: '90-Day Repair Warranty',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-02T10:00:00Z',
    updatedAt: '2026-03-24T12:00:00Z',
    sections: [
      { id: 'about', title: 'Why QuickFix', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Repair Warranty & Offers', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Repair Price Estimates', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Lab & Workstations', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Lab Hours & Location', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Book Device Drop-off', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'rep-off-1',
        title: 'Free Tempered Glass with Screen Replacement',
        description: 'Get free 9D Gorilla Tempered Glass installation with any iPhone or Android screen swap.',
        discountPercent: 100,
        couponCode: 'GLASSPROTECT',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'mr-1', name: 'iPhone Original OLED Display Replacement', description: 'TrueTone active, oleophobic coated original grade glass with 6-month touch warranty.', price: 4500, discountPrice: 3899, category: 'Screen Repair', isAvailable: true, duration: '25 Mins' },
      { id: 'mr-2', name: 'High-Capacity Battery Replacement (CE Certified)', description: '100% battery health restore, fast charging protection, 1-year guarantee.', price: 1800, discountPrice: 1499, category: 'Battery Swap', isAvailable: true, duration: '20 Mins' },
      { id: 'mr-3', name: 'Water Damage Ultrasonic Chemical Clean & Dry', description: 'Micro-soldering inspection, corroded resistor replacement, and IC reballing.', price: 1200, category: 'Motherboard', isAvailable: true, duration: '2 Hours' },
      { id: 'mr-4', name: 'Charging Port & Microphone Flex Repair', description: 'Resolves loose Type-C/Lightning connector and low mic call quality issues.', price: 850, category: 'Hardware Ports', isAvailable: true, duration: '30 Mins' }
    ],
    gallery: [
      { id: 'mrg-1', title: 'ESD-Safe Motherboard Soldering Bench', category: 'facilities', imageUrl: 'https://images.unsplash.com/photo-1597740985671-2a8a3b80532e?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  // 3. Sweet shop (mithai)
  {
    id: 'kanhaiya-sweets-farsan',
    slug: 'kanhaiya-sweets-farsan',
    businessName: 'Kanhaiya Sweets & Royal Farsan',
    category: 'sweets',
    templateId: 'sweets-royal',
    tagline: 'Pure Desi Ghee Confections, Bengali Rasgulla & Festive Gift Hampers Since 1974',
    description: 'Handcrafted authentic Indian sweets made with 100% pure A2 Gir cow ghee and farm-fresh mawa. Renowned for our melting Kaju Katli, saffron Motichoor Ladoos, and crunchy Gujarati snacks. Custom wedding and corporate gifting boxes with worldwide shipping.',
    ownerName: 'Shri Radheshyam Sharma & Sons',
    phone: '+91 98290 87654',
    whatsapp: '+91 98290 87654',
    email: 'orders@kanhaiyasweets.in',
    address: 'Johari Bazaar, Near Hawa Mahal, Pink City, Jaipur, Rajasthan 302003',
    city: 'Jaipur',
    mapsUrl: 'https://maps.google.com/?q=Johari+Bazaar+Jaipur',
    openingHours: 'Mon - Sun: 8:00 AM – 10:30 PM',
    logoUrl: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#831843',
    bookingType: 'whatsapp_order',
    bookingCtaLabel: 'Pre-Order Mithai Box',
    specialBadge: '100% Pure Desi Ghee',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-03T11:00:00Z',
    updatedAt: '2026-03-24T14:00:00Z',
    sections: [
      { id: 'about', title: 'Our Heritage', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Festive Boxes & Offers', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Sweets & Farsan Menu', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Mithai Counter', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Shop Hours', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Wedding & Bulk Inquiry', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'swt-off-1',
        title: 'Wedding Trousseau Hampers 15% Off',
        description: 'Special customized velvet gift boxes for bulk wedding orders above 25 boxes.',
        discountPercent: 15,
        couponCode: 'SHUBH15',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'sw-1', name: 'Royal Kaju Katli (Goa Cashews)', description: 'Diamond cut thin cashewnut slices with pure silver vark and mild green cardamom.', price: 950, discountPrice: 890, category: 'Cashew & Dry Fruit', isAvailable: true, unit: 'per Kg', isVeg: true },
      { id: 'sw-2', name: 'Pure Desi Ghee Motichoor Ladoo', description: 'Fine besan pearls fried in churned ghee, soaked in saffron syrup, garnished with melon seeds.', price: 620, discountPrice: 580, category: 'Traditional Desi Ghee', isAvailable: true, unit: 'per Kg', isVeg: true },
      { id: 'sw-3', name: 'Kesar Pista Malai Ghewar (Jaipuri Special)', description: 'Honeycomb porous sweet disc soaked in rabri, topped with slivered almonds and saffron threads.', price: 850, category: 'Traditional Desi Ghee', isAvailable: true, unit: 'per Kg', isVeg: true },
      { id: 'sw-4', name: 'Special Gujarati Farsan Mixture', description: 'Crunchy sev, cornflakes, fried peanuts, cashews, and raisins tossed with mild hing seasoning.', price: 380, category: 'Namkeen & Farsan', isAvailable: true, unit: 'per Kg', isVeg: true }
    ],
    gallery: [
      { id: 'swg-1', title: 'Fresh Ghee Motichoor Ladoos', category: 'food', imageUrl: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  // 4. Dry cleaning / laundry shop
  {
    id: 'spin-sparkle-laundry',
    slug: 'spin-sparkle-laundry',
    businessName: 'Spin & Sparkle Premium Dry Cleaners',
    category: 'laundry',
    templateId: 'laundry-fresh',
    tagline: 'Eco-Friendly Hydrocarbon Dry Cleaning & Free Doorstep Pickup in 2 Hours',
    description: 'Advanced European fabric care for luxury garments, bridal lehengas, woolens, silk sarees, and duvet blankets. We use zero-carcinogen gentle solvents that protect garment fibers and colors with crisp steam pressing and sanitization.',
    ownerName: 'Vikram & Aarti Solanki',
    phone: '+91 97200 45678',
    whatsapp: '+91 97200 45678',
    email: 'care@spinsparkle.in',
    address: 'SCO 15, Ground Floor, D-Market, Sector 18, Noida, Uttar Pradesh 201301',
    city: 'Noida',
    mapsUrl: 'https://maps.google.com/?q=Sector+18+Noida',
    openingHours: 'Mon - Sun: 8:00 AM – 9:00 PM',
    logoUrl: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#0f766e',
    bookingType: 'pickup_drop',
    bookingCtaLabel: 'Schedule Free Pickup',
    specialBadge: 'Free Doorstep Pickup',
    deliveryRadius: 'Noida & Greater Noida Expressway',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-04T09:00:00Z',
    updatedAt: '2026-03-24T16:00:00Z',
    sections: [
      { id: 'about', title: 'Fabric Technology', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Monthly Laundry Pass', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Dry Cleaning Price List', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Steam Unit', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Pickup Slots', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Book Doorstep Pickup', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'dry-off-1',
        title: 'First Pickup 20% Off',
        description: 'Get flat 20% off on your first dry cleaning order above 5 garments with complimentary hanger packaging.',
        discountPercent: 20,
        couponCode: 'SPARKLE20',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'ld-1', name: 'Men’s 2-Piece Suit Dry Clean & Steam Form Press', description: 'Collar lapel shaping, stain treatment, crease preservation on contoured hangers.', price: 380, discountPrice: 320, category: 'Formal Wear', isAvailable: true, unit: 'per Suit' },
      { id: 'ld-2', name: 'Silk Saree & Zari Border Delicate Care', description: 'Zero-water hydrocarbon cleaning preserving delicate silver/gold embroidery luster.', price: 290, discountPrice: 250, category: 'Ethnic Wear', isAvailable: true, unit: 'per Saree' },
      { id: 'ld-3', name: 'Bridal Heavy Lehenga Clean & Preservation Box', description: 'Multi-layer organza, net, and cancan stain removal with museum acid-free packaging.', price: 1400, discountPrice: 1199, category: 'Couture Wedding', isAvailable: true, unit: 'per Outfit' },
      { id: 'ld-4', name: 'Double Bed Winter Quilt / Comforter Sanitization', description: 'Anti-microbial wash, allergen dust extraction, and vacuum compression packing.', price: 450, category: 'Home Linen', isAvailable: true, unit: 'per Comforter' }
    ],
    gallery: [
      { id: 'ldg-1', title: 'Italian Steam Finishing Stations', category: 'facilities', imageUrl: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  // 5. Nearby restaurant (dhaba / full service)
  {
    id: 'punjab-zaika-dhaba',
    slug: 'punjab-zaika-dhaba',
    businessName: 'Punjab Zaika Highway Dhaba & Family Dine',
    category: 'restaurant',
    templateId: 'restaurant-dhaba',
    tagline: 'Authentic Charcoal Tandoori Breads, Slow-Cooked Dal Makhani & Royal Thalis',
    description: 'Experience true roadside grand Punjabi hospitality with air-conditioned family dine-in seating and open charpai lawns. Famous for 14-hour slow coal-simmered Dal Makhani, clay-oven tandoori chicken, Amritsari kulchas, and chilled malai lassi in clay kulhads.',
    ownerName: 'Sardar Manjit Singh Sodhi',
    phone: '+91 98721 34567',
    whatsapp: '+91 98721 34567',
    email: 'zaika@punjabzaika.in',
    address: 'Mile 48, GT Karnal Road, Near Murthal Toll Plaza, Sonipat, Haryana 131039',
    city: 'Murthal',
    mapsUrl: 'https://maps.google.com/?q=Murthal+GT+Road',
    openingHours: 'Open 24 Hours · 7 Days a Week',
    logoUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#9a3412',
    bookingType: 'reservation_party',
    bookingCtaLabel: 'Reserve Dining Table',
    specialBadge: 'Open 24x7 with AC Family Halls',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-05T12:00:00Z',
    updatedAt: '2026-03-24T18:00:00Z',
    sections: [
      { id: 'about', title: 'Our Tandoor Heritage', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Family Combos', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Food & Beverage Menu', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Dhaba Ambiance', isEnabled: true, order: 4 },
      { id: 'timings', title: '24hr Hours & Highway Map', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Table Booking & Delivery', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'res-off-1',
        title: 'Highway Traveler Feast Combo @ ₹599',
        description: 'Dal Makhani + Paneer Butter Masala + 4 Tandoori Rotis + 2 Chilled Kulhad Lassi.',
        discountPercent: 25,
        couponCode: 'FEAST599',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'pz-1', name: 'Dal Makhani (Slow-Cooked 14 Hours)', description: 'Black lentils and kidney beans simmered overnight with fresh white butter, tomato puree, and cream.', price: 280, discountPrice: 240, category: 'Main Course (Veg)', isAvailable: true, isVeg: true, isFeatured: true },
      { id: 'pz-2', name: 'Amritsari Stuffed Chur Chur Naan Thali', description: 'Flaky potato-paneer stuffed naan crushed with desi ghee, served with pindi chole and raita.', price: 290, category: 'Thalis & Specials', isAvailable: true, isVeg: true, isFeatured: true },
      { id: 'pz-3', name: 'Bhatti Da Murgh (Smoked Tandoori Chicken)', description: 'Spring chicken marinated in hung curd, Kashmiri deghi mirch, and mustard oil, roasted on coal embers.', price: 420, discountPrice: 380, category: 'Tandoor Kebabs', isAvailable: true, isVeg: false },
      { id: 'pz-4', name: 'Grand Peda Kulhad Lassi with Malai Layer', description: 'Thick churned sweet curd laced with cardamom and topped with a whole rabri peda.', price: 110, category: 'Beverages', isAvailable: true, isVeg: true }
    ],
    gallery: [
      { id: 'pzg-1', title: 'Outdoor Courtyard & Charpai Seating', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  // 6. Electrician / handyman
  {
    id: 'sharma-electricals-service',
    slug: 'sharma-electricals-service',
    businessName: 'Sharma 24x7 Electricals & Home Repair',
    category: 'electrician',
    templateId: 'electrician-bold',
    tagline: 'Licensed Wiremen, Short Circuit Emergency & Home Inverter Repair within 45 Mins',
    description: 'Govt. certified electrical contractor serving South & Central Delhi. From MCB tripping and ceiling fan rewinding to heavy load wiring, inverter/UPS battery installation, and smart modular switchboards.',
    ownerName: 'Sunil Sharma (Licensed Contractor)',
    phone: '+91 98118 76543',
    whatsapp: '+91 98118 76543',
    email: 'service@sharmaelectricals.in',
    address: 'Shop 4, Main Market, Malviya Nagar, New Delhi 110017',
    city: 'New Delhi',
    mapsUrl: 'https://maps.google.com/?q=Malviya+Nagar+Delhi',
    openingHours: 'Mon - Sun: 7:00 AM – 11:00 PM (Emergency Callout 24hr)',
    logoUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#1e293b',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Book Electrician Visit',
    specialBadge: 'Visit within 45 Minutes',
    status: 'published',
    pricingPlanId: 'starter',
    amountPaid: 999,
    paymentStatus: 'paid',
    createdAt: '2026-03-06T08:30:00Z',
    updatedAt: '2026-03-23T11:00:00Z',
    sections: [
      { id: 'about', title: 'Why Choose Sunil', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Inspection Rates', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Service Rates & Callout Charges', isEnabled: true, order: 3 },
      { id: 'timings', title: 'Working Hours', isEnabled: true, order: 4 },
      { id: 'contact', title: 'Book Electrician Visit', isEnabled: true, order: 5 }
    ],
    offers: [
      {
        id: 'elec-off-1',
        title: 'Full Home Electrical Health Audit @ ₹399',
        description: 'Complete inspection of MCB panel, grounding/earthing check, voltage fluctuation test.',
        discountPercent: 30,
        couponCode: 'SAFETYAUDIT',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'el-1', name: 'General Electrical Inspection & Visiting Charge', description: 'Technician visit to locate short circuits, sparking switches, or fuse failure.', price: 199, category: 'Callout Charges', isAvailable: true, duration: '30 Mins' },
      { id: 'el-2', name: 'Ceiling Fan Installation / Uninstallation', description: 'Assembly with safety downrod and speed capacitor connection test.', price: 250, category: 'Fan & Appliances', isAvailable: true, duration: '25 Mins' },
      { id: 'el-3', name: 'MCB Change & Distribution Box Rewiring', description: 'Replacement of burnt miniature circuit breakers with Havells / Schneider MCB.', price: 450, category: 'Switchboard & Panel', isAvailable: true, duration: '40 Mins' },
      { id: 'el-4', name: 'Inverter + Tubular Battery Setup & Cabling', description: 'Complete AC/DC bypass wiring connection for uninterrupted backup power.', price: 850, category: 'Power Backup', isAvailable: true, duration: '60 Mins' }
    ],
    gallery: [
      { id: 'elg-1', title: 'Modular Switchboard Installation', category: 'facilities', imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  // 7. Plumber
  {
    id: 'delhi-quick-plumber',
    slug: 'delhi-quick-plumber',
    businessName: 'Delhi SafePlumb & 24hr Sanitary Solutions',
    category: 'plumber',
    templateId: 'plumber-pro',
    tagline: 'Rapid Pipe Leak Repair, Water Tank Cleaning & Motor Pump Overhaul',
    description: 'Emergency plumbing specialist available round the clock. Transparent rates, certified plumbers equipped with motorized drain snakes, thermal leak detection cameras, and genuine brass fitting replacements.',
    ownerName: 'Rameshwar Jha & Sons',
    phone: '+91 98105 67890',
    whatsapp: '+91 98105 67890',
    email: 'care@safeplumb.in',
    address: 'K-22, Lajpat Nagar II, New Delhi 110024',
    city: 'New Delhi',
    mapsUrl: 'https://maps.google.com/?q=Lajpat+Nagar+II+Delhi',
    openingHours: '24x7 Emergency Service Available',
    logoUrl: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#0369a1',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Book Emergency Plumber',
    specialBadge: '24x7 Emergency Response',
    status: 'published',
    pricingPlanId: 'starter',
    amountPaid: 999,
    paymentStatus: 'paid',
    createdAt: '2026-03-07T07:30:00Z',
    updatedAt: '2026-03-24T10:00:00Z',
    sections: [
      { id: 'about', title: 'Why SafePlumb', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Tank Cleaning Deals', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Plumbing Price List', isEnabled: true, order: 3 },
      { id: 'timings', title: '24x7 Response', isEnabled: true, order: 4 },
      { id: 'contact', title: 'Book Plumber Visit', isEnabled: true, order: 5 }
    ],
    offers: [
      {
        id: 'plumb-off-1',
        title: 'Overhead Water Tank Deep Sterilization @ ₹499',
        description: 'High-pressure mechanized cleaning, sludge suction, and UV anti-bacterial spray for 1000L tanks.',
        discountPercent: 40,
        couponCode: 'CLEANTANK',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'pl-1', name: 'Plumber Diagnostic Visit & Leak Inspection', description: 'Thorough checking of concealed wall pipes, tap drips, and water meter leakage.', price: 199, category: 'Callout Charges', isAvailable: true, duration: '30 Mins' },
      { id: 'pl-2', name: 'Kitchen Sink / Bathroom Drain Unblocking', description: 'Motorized drain auger cleaning resolving stubborn grease and hair blockages.', price: 450, discountPrice: 380, category: 'Drainage', isAvailable: true, duration: '40 Mins' },
      { id: 'pl-3', name: 'Water Tap, Diverter & Shower Valve Repair', description: 'Replacement of ceramic cartridge, spindle, or washer with zero drip warranty.', price: 250, category: 'Sanitary Fittings', isAvailable: true, duration: '20 Mins' },
      { id: 'pl-4', name: 'Water Booster Pump & Submersible Motor Repair', description: 'Impeller cleaning, mechanical seal change, and electrical capacitor replacement.', price: 750, category: 'Pumps & Motors', isAvailable: true, duration: '60 Mins' }
    ],
    gallery: [
      { id: 'plg-1', title: 'Sanitary Brass Fittings Installation', category: 'facilities', imageUrl: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  // 8. Tailor / boutique stitching
  {
    id: 'zari-thread-boutique-tailors',
    slug: 'zari-thread-boutique-tailors',
    businessName: 'Zari & Thread Couture Tailoring Studio',
    category: 'tailor',
    templateId: 'tailor-couture',
    tagline: 'Perfect Silhouette Blouses, Designer Kurtis & Custom Bridal Lehenga Fitting',
    description: 'Master tailor masterji with 22 years of bespoke Indian stitching craft. We offer door-to-door measurement visits, customized necklines, padding, dori tassels, and express 48-hour festive delivery guarantee.',
    ownerName: 'Master Mohammed Aslam & Sabiha Khan',
    phone: '+91 98202 34567',
    whatsapp: '+91 98202 34567',
    email: 'couture@zarithread.in',
    address: 'Shop 18, Lokhandwala Market, Andheri West, Mumbai, Maharashtra 400053',
    city: 'Mumbai',
    mapsUrl: 'https://maps.google.com/?q=Lokhandwala+Market+Mumbai',
    openingHours: 'Mon - Sat: 11:00 AM – 9:00 PM | Sun: By Appointment',
    logoUrl: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#581c87',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Book Measurement Slot',
    specialBadge: 'Express 48hr Stitching Option',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-08T10:00:00Z',
    updatedAt: '2026-03-24T14:30:00Z',
    sections: [
      { id: 'about', title: 'Our Masterji Craft', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Festive Stitching Packs', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Stitching & Alteration Price List', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Past Designs', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Studio Timings', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Book Measurement Slot', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'tail-off-1',
        title: '3 Blouses Combo Stitching @ ₹1,999',
        description: 'Includes premium canvas lining, padded cups, and custom latkan tassels.',
        discountPercent: 20,
        couponCode: 'BLOUSE3',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'tl-1', name: 'Designer Padded Saree Blouse with Custom Back Neck', description: 'Princess cut or katori style with reinforced piping and seamless stitching.', price: 850, discountPrice: 750, category: 'Blouse Stitching', isAvailable: true, duration: '4 Days' },
      { id: 'tl-2', name: 'Anarkali / Straight Kurti with Pant & Dupatta Border', description: 'Clean French seam stitching, matching pocket insertion, and side slits finish.', price: 1100, discountPrice: 950, category: 'Suit Sets', isAvailable: true, duration: '5 Days' },
      { id: 'tl-3', name: 'Bridal Lehenga Waist Fitting & Cancan Insertion', description: 'Double cancan skirt stiffening, waist alteration, and invisible zipper replacement.', price: 1800, category: 'Bridal Alteration', isAvailable: true, duration: '3 Days' },
      { id: 'tl-4', name: 'Pant / Jean Waist & Hemming Alteration', description: 'Machine chain-stitch shortening preserving original wash hem look.', price: 150, category: 'Quick Alterations', isAvailable: true, duration: 'Same Day' }
    ],
    gallery: [
      { id: 'tlg-1', title: 'Designer Back Neck Blouses', category: 'products', imageUrl: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  // 9. Pharmacy / medical store
  {
    id: 'sanjivani-medical-store',
    slug: 'sanjivani-medical-store',
    businessName: 'Sanjivani Chemist & 24hr Pharmacy',
    category: 'pharmacy',
    templateId: 'pharmacy-trust',
    tagline: '100% Genuine Branded Medicines, Baby Essentials & 24x7 Night Counter',
    description: 'Licensed retail chemist serving residential colonies in Kothrud, Pune. Send your doctor’s prescription directly on WhatsApp for prompt verification, packing, and free doorstep delivery in 20 minutes.',
    ownerName: 'Kailash Kadam (Registered Pharmacist)',
    phone: '+91 98220 12345',
    whatsapp: '+91 98220 12345',
    email: 'care@sanjivanimedicare.in',
    address: 'Shop 3-4, Shanti Heights, Paud Road, Kothrud, Pune, Maharashtra 411038',
    city: 'Pune',
    mapsUrl: 'https://maps.google.com/?q=Kothrud+Pune',
    openingHours: '24 Hours Open · 365 Days a Year',
    logoUrl: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1586015555751-63c25b3e2182?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#047857',
    bookingType: 'whatsapp_order',
    bookingCtaLabel: 'WhatsApp Prescription',
    specialBadge: '24x7 Open Night Counter',
    deliveryRadius: 'Free Delivery within 4 KM in Pune',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-09T09:00:00Z',
    updatedAt: '2026-03-24T17:00:00Z',
    sections: [
      { id: 'about', title: 'About Chemist', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Monthly Medicine Discounts', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Healthcare & Wellness Essentials', isEnabled: true, order: 3 },
      { id: 'timings', title: '24hr Store Hours', isEnabled: true, order: 4 },
      { id: 'contact', title: 'Upload Prescription on WhatsApp', isEnabled: true, order: 5 }
    ],
    offers: [
      {
        id: 'med-off-1',
        title: 'Chronic Medicines Flat 15% Off',
        description: 'Get 15% discount on monthly repeat prescriptions for BP, Diabetes, and Thyroid medicines.',
        discountPercent: 15,
        couponCode: 'CHRONIC15',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'ph-1', name: 'Accu-Chek Active Blood Glucose Monitor Kit', description: 'Includes 10 test strips, lancing device, and 5-second fast digital reading meter.', price: 1499, discountPrice: 1199, category: 'Medical Devices', isAvailable: true, unit: '1 Box' },
      { id: 'ph-2', name: 'Omron Automatic Digital Blood Pressure Monitor', description: 'IntelliSense technology, memory storage for 30 readings, hypertension indicator.', price: 2350, discountPrice: 1899, category: 'Medical Devices', isAvailable: true, unit: '1 Unit' },
      { id: 'ph-3', name: 'Ensure Diabetes Care Nutritional Drink (400g Vanilla)', description: 'Scientifically designed nutrition with slow-release energy system for diabetic adults.', price: 820, discountPrice: 740, category: 'Health Nutrition', isAvailable: true, unit: '400g Tin' },
      { id: 'ph-4', name: 'Volini Pain Relief Spray (100g Maxx)', description: 'Instant relief from joint pain, back sprain, and muscle stiffness.', price: 260, discountPrice: 220, category: 'First Aid & Pain', isAvailable: true, unit: '100g Spray' }
    ],
    gallery: [
      { id: 'phg-1', title: 'Temperature Controlled Medicine Storage', category: 'facilities', imageUrl: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=800&q=80' }
    ]
  }
];
