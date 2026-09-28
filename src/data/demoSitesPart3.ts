import { BusinessWebsite } from '../types';

export const DEMO_SITES_PART3: BusinessWebsite[] = [
  // 19. Bakery
  {
    id: 'the-roastery-cafe',
    slug: 'the-roastery-cafe',
    businessName: 'Roastery Heritage Coffee House & Roasters',
    category: 'cafe',
    templateId: 'cafe-modern',
    tagline: 'Multi-City Specialty Coffee Roastery Across 5 Cities: Hyderabad · Kolkata · Noida · Lucknow · Jaipur',
    description: 'Inspired by India’s pioneering farm-to-cup specialty coffee roaster. Famous for flagship heritage courtyards in Banjara Hills (Hyderabad), Hindustan Park (Kolkata), Sector 144 (Noida), Gomti Nagar (Lucknow), and C Scheme (Jaipur). Roasting estate Arabica directly from Chikmagalur and Coorg on European drum roasters. Known for our signature Cranberry Coffee, Nitro Cold Brew, Cascara, and fresh sourdough bakes.',
    ownerName: 'Nishant & Master Roasters Team',
    phone: '+91 98765 43210',
    whatsapp: '+91 98765 43210',
    email: 'hello@roasterycoffeehouse.in',
    address: 'Flagship Branches: Banjara Hills (Hyderabad) · Hindustan Park (Kolkata) · Sector 144 (Noida) · Gomti Nagar (Lucknow) · C Scheme (Jaipur)',
    city: 'Hyderabad · Kolkata · Noida · Lucknow · Jaipur',
    mapsUrl: 'https://maps.google.com/?q=Roastery+Coffee+House',
    openingHours: 'Mon - Sun: 7:30 AM – 11:30 PM (All 5 City Branches)',
    logoUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#3D2B1F',
    bookingType: 'whatsapp_order',
    bookingCtaLabel: 'Order Coffee & Roasted Beans',
    specialBadge: '🏛️ Multi-City Flagship · 5 Cities: Hyderabad · Kolkata · Noida · Lucknow · Jaipur',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-01T10:00:00Z',
    updatedAt: '2026-03-26T18:00:00Z',
    sections: [
      { id: 'about', title: 'The 5-City Flagship Roastery Story', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Daily Brew Specials', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Estate Brews, Beans & Artisanal Bakes', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Heritage Courtyards Across Cities', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Branch Hours & Locations', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Bean Orders & Table Booking', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'bake-off-1',
        title: 'Happy Hours Flat 20% Off',
        description: '20% off on all manual pour-overs, nitro cold brews, and cascara on weekdays 4 PM – 7 PM across all 5 city branches.',
        discountPercent: 20,
        couponCode: 'ROAST20',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'bk-1', name: 'Chikmagalur Pour-Over (Estate Reserve)', description: 'Hand-dripped single origin Arabica with delicate citrus notes, jasmine aroma, and a clean caramel finish.', price: 250, discountPrice: 220, category: 'Manual Brews', isAvailable: true, isVeg: true, isFeatured: true },
      { id: 'bk-2', name: 'Signature Cranberry Iced Cold Brew', description: 'Our famous house cold brew steeped 18 hours, infused with tart cranberry reduction and sparkling citrus.', price: 290, category: 'Cold Brews', isAvailable: true, isVeg: true, isFeatured: true },
      { id: 'bk-3', name: 'Monsooned Malabar Aeropress Brew', description: 'Rich, low-acidity cup with dark chocolate notes and heavy body brewed via Aeropress chamber.', price: 260, category: 'Manual Brews', isAvailable: true, isVeg: true },
      { id: 'bk-4', name: 'Cascara Sun-Dried Coffee Cherry Fizz', description: 'Antioxidant-rich cascara tea brewed from coffee husk with fizzy soda, citrus and fresh mint.', price: 230, category: 'Specialty Beverages', isAvailable: true, isVeg: true },
      { id: 'bk-5', name: 'Cold Brew Affogato with Vanilla Gelato', description: 'Double shot of concentrated cold brew poured over two scoops of Madagascar vanilla bean gelato.', price: 280, category: 'Cold Brews', isAvailable: true, isVeg: true, isFeatured: true },
      { id: 'bk-6', name: 'French Butter Almond Croissant', description: 'Flaky 72-layer laminated butter pastry filled with rich almond frangipane and toasted flakes.', price: 220, category: 'Artisanal Bakes', isAvailable: true, isVeg: true, isFeatured: true },
      { id: 'bk-7', name: 'Wild Mushroom Sourdough Melt & Truffle Toast', description: 'Toasted country sourdough topped with sautéed thyme mushrooms, melted cheddar, and truffle drizzle.', price: 340, category: 'Artisanal Bakes', isAvailable: true, isVeg: true },
      { id: 'bk-8', name: 'Blueberry Basque Burnt Cheesecake', description: 'Caramelized crust with ultra-creamy center served with wild blueberry compote.', price: 290, category: 'Artisanal Bakes', isAvailable: true, isVeg: true }
    ],
    gallery: [
      { id: 'bkg-1', title: 'Hyderabad Banjara Hills Courtyard', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80' },
      { id: 'bkg-2', title: 'Kolkata Hindustan Park Heritage Villa', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80' },
      { id: 'bkg-3', title: 'European Drum Roaster in Action', category: 'facilities', imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  // 20. Ice cream parlour / dessert shop
  {
    id: 'natural-scoop-gelato',
    slug: 'natural-scoop-gelato',
    businessName: 'Natural Scoop Fresh Fruit Ice Creams',
    category: 'icecream',
    templateId: 'icecream-fresh',
    tagline: '100% Real Fresh Fruits, Pure Buffalo Milk & Zero Artificial Preservatives',
    description: 'Mumbai’s beloved artisanal ice cream parlor in Juhu. Crafted using hand-scooped real seasonal fruits like Sitaphal, Alphonso Mango, Tender Coconut, and Roasted Almond. Party tubs packed with dry ice for 4-hour travel freshness.',
    ownerName: 'Sunil & Rakesh Kamath',
    phone: '+91 98204 56789',
    whatsapp: '+91 98204 56789',
    email: 'yummy@naturalscoop.in',
    address: 'Shop 3, Juhu Tara Road, Near Sea Princess Hotel, Juhu, Mumbai, Maharashtra 400049',
    city: 'Mumbai',
    mapsUrl: 'https://maps.google.com/?q=Juhu+Tara+Road+Mumbai',
    openingHours: 'Mon - Sun: 11:00 AM – 1:00 AM (Late Night Service)',
    logoUrl: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#be185d',
    bookingType: 'whatsapp_order',
    bookingCtaLabel: 'Order Party Ice Cream Tub',
    specialBadge: 'Open Till 1 AM Daily',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-19T10:00:00Z',
    updatedAt: '2026-03-24T18:00:00Z',
    sections: [
      { id: 'about', title: 'Our Fruit Secrets', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Family Tub Combos', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Fresh Fruit Flavors & Tubs', isEnabled: true, order: 3 },
      { id: 'timings', title: 'Parlour Hours', isEnabled: true, order: 4 },
      { id: 'contact', title: 'Order Tubs on WhatsApp', isEnabled: true, order: 5 }
    ],
    offers: [
      {
        id: 'ice-off-1',
        title: 'Buy 2 Half-Kg Tubs, Get 1 Single Scoop Free',
        description: 'Choose any two seasonal fruit tubs and receive a complimentary waffle cone scoop.',
        discountPercent: 20,
        couponCode: 'SCOOPCOMBO',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'ic-1', name: 'Fresh Sitaphal (Custard Apple) Ice Cream Tub (500g)', description: 'Chunky real seeded custard apple pulp churned into fresh dairy cream.', price: 340, discountPrice: 300, category: 'Seasonal Fruits', isAvailable: true, unit: '500g Tub', isVeg: true },
      { id: 'ic-2', name: 'Tender Coconut with Malai Bits (500g Tub)', description: 'Refreshing natural tender coconut water and tender coconut flesh.', price: 320, category: 'Seasonal Fruits', isAvailable: true, unit: '500g Tub', isVeg: true },
      { id: 'ic-3', name: 'Roasted Almond Crunch Sundae in Chocolate Waffle', description: 'Caramelized roasted almonds folded in rich Madagascar vanilla with hot fudge sauce.', price: 180, category: 'Sundaes & Cones', isAvailable: true, unit: '1 Serve', isVeg: true }
    ],
    gallery: [
      { id: 'icg-1', title: 'Fresh Seasonal Fruit Display', category: 'food', imageUrl: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  // 21. Car wash / auto detailing
  {
    id: 'glossworx-car-spa',
    slug: 'glossworx-car-spa',
    businessName: 'GlossWorx Car Detailing & Foam Wash',
    category: 'carwash',
    templateId: 'carwash-gloss',
    tagline: 'pH-Neutral Snow Foam Wash, 9H Ceramic Coating & Interior Steam Disinfection',
    description: 'High-end automobile aesthetic lab in Sector 57 Gurugram. We pamper hatchbacks, sedans, and luxury SUVs with touchless high-pressure water jets, Meguiar’s clay bar paint decontamination, and leather conditioning.',
    ownerName: 'Jaspreet Singh & Aditya Rana',
    phone: '+91 99112 87654',
    whatsapp: '+91 99112 87654',
    email: 'detailing@glossworx.in',
    address: 'Plot 10, Auto Hub, Hong Kong Bazaar Road, Sector 57, Gurugram, Haryana 122003',
    city: 'Gurugram',
    mapsUrl: 'https://maps.google.com/?q=Sector+57+Gurugram',
    openingHours: 'Mon - Sun: 8:00 AM – 8:00 PM',
    logoUrl: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#0f172a',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Book Car Detailing Slot',
    specialBadge: 'Free Customer Lounge with Wi-Fi',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-20T10:00:00Z',
    updatedAt: '2026-03-24T18:00:00Z',
    sections: [
      { id: 'about', title: 'Our Detailing Philosophy', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Monthly Wash Pass', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Wash Packages & Rates', isEnabled: true, order: 3 },
      { id: 'timings', title: 'Operating Slots', isEnabled: true, order: 4 },
      { id: 'contact', title: 'Book Bay Appointment', isEnabled: true, order: 5 }
    ],
    offers: [
      {
        id: 'cw-off-1',
        title: 'Deep Interior Steam Wash 20% Off',
        description: 'Complete ceiling, fabric upholstery, carpet, and AC duct ozone bacterial disinfection.',
        discountPercent: 20,
        couponCode: 'CLEANCAR20',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'cw-1', name: 'Gloss Deluxe Snow Foam Exterior & Interior Vacuum', description: 'Underbody high-pressure blast, 3-bucket grit guard foam wash, tyre dresser, and dashboard UV polish.', price: 650, discountPrice: 550, category: 'Washing Packages', isAvailable: true, duration: '45 Mins' },
      { id: 'cw-2', name: 'Interior Deep Cleaning & Leather Conditioning Spa', description: 'Wet extraction shampooing for seats and floor mats, ozone cabin odor eliminator, trunk clean.', price: 1800, discountPrice: 1499, category: 'Interior Detailing', isAvailable: true, duration: '90 Mins' },
      { id: 'cw-3', name: 'German 9H Ceramic Coating (3-Year Warranty)', description: '3-stage paint scratch correction, swirl mark removal, dual coat nano-ceramic hydrophobic shield.', price: 14999, discountPrice: 12500, category: 'Paint Protection', isAvailable: true, duration: '24 Hours' }
    ],
    gallery: [
      { id: 'cwg-1', title: 'Snow Foam Wash Bay', category: 'facilities', imageUrl: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  // 22. Gym / fitness studio, yoga centre
  {
    id: 'ironpeak-fitness',
    slug: 'ironpeak-fitness',
    businessName: 'IronPeak Fitness & CrossFit Arena',
    category: 'gym',
    templateId: 'gym-bold',
    tagline: 'Sculpt Strength. Torch Limits. Certified Olympic Coaching & Functional Turf',
    description: 'South Bengaluru’s premier strength and conditioning arena. Featuring 6,000 sq.ft of imported Rogue equipment, Olympic lifting platforms, certified coaches, dedicated turf sprint tracks, and steam shower facilities.',
    ownerName: 'Vikram Choudhary',
    phone: '+91 99887 65432',
    whatsapp: '+91 99887 65432',
    email: 'coach@ironpeakfitness.in',
    address: '4th Floor, Apex Tower, 80 Feet Road, 4th Block, Koramangala, Bengaluru, Karnataka 560034',
    city: 'Bengaluru',
    mapsUrl: 'https://maps.google.com/?q=Koramangala+4th+Block',
    openingHours: 'Mon - Sat: 5:30 AM - 10:30 PM | Sun: 7:00 AM - 1:00 PM',
    logoUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#09090b',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Claim 1-Day Trial Pass',
    specialBadge: 'Free 1-Day Trial Pass for New Athletes',
    status: 'published',
    pricingPlanId: 'starter',
    amountPaid: 999,
    paymentStatus: 'paid',
    createdAt: '2026-03-12T16:00:00Z',
    updatedAt: '2026-03-24T18:00:00Z',
    sections: [
      { id: 'about', title: 'Why Train at IronPeak', isEnabled: true, order: 1 },
      { id: 'offers', title: 'New Member Passes', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Membership Tiers & Personal Training', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Equipment & Athlete Arena', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Floor Timings & Batches', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Claim 1-Day Free Trial Pass', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'gym-off-1',
        title: 'Free 3-Day All-Access Pass',
        description: 'New members get free access to the gym floor, steam room, and 1 group HIIT functional session.',
        discountPercent: 100,
        couponCode: 'TRYIRON',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'g-1', name: 'Annual Unlimited All-Access Membership', description: 'Full gym floor access, locker access, steam bath sessions, complimentary monthly body composition analysis.', price: 18000, discountPrice: 14999, category: 'Gym Memberships', isAvailable: true, unit: '12 Months' },
      { id: 'g-2', name: '1-on-1 Personal Training (12 Sessions)', description: 'Customized biomechanics coaching, strength progression tracking, and tailored meal planning with coach Vikram.', price: 9000, discountPrice: 7999, category: 'Personal Training', isAvailable: true, unit: '12 Sessions' }
    ],
    gallery: [
      { id: 'gg-1', title: 'Olympic Weightlifting Platforms', category: 'facilities', imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  // 23. Real estate agent / broker
  {
    id: 'prime-spaces-realty',
    slug: 'prime-spaces-realty',
    businessName: 'Prime Spaces NCR Real Estate Advisors',
    category: 'realestate',
    templateId: 'realty-prime',
    tagline: 'RERA-Registered Luxury Homes, High-ROI Commercial Floors & Free Site Visits',
    description: 'Gurugram & Golf Course Extension Road property consultancy with 16 years of market authority. Zero brokerage on fresh developer inventory from DLF, M3M, Godrej, and SmartWorld. Free air-conditioned cab for verified site tours.',
    ownerName: 'Vikas Batra & Ankur Jain',
    phone: '+91 99100 89012',
    whatsapp: '+91 99100 89012',
    email: 'info@primespaces.in',
    address: 'Office 402, Time Tower, Main MG Road, Gurugram, Haryana 122002',
    city: 'Gurugram',
    mapsUrl: 'https://maps.google.com/?q=MG+Road+Gurugram',
    openingHours: 'Mon - Sun: 9:30 AM – 7:30 PM',
    logoUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#1e3a8a',
    bookingType: 'reservation_party',
    bookingCtaLabel: 'Book Free Property Visit',
    specialBadge: 'RERA Regd. Agent: HRERA-PKL-REA-451',
    status: 'published',
    pricingPlanId: 'premium',
    amountPaid: 1999,
    paymentStatus: 'paid',
    createdAt: '2026-03-21T10:00:00Z',
    updatedAt: '2026-03-24T18:00:00Z',
    sections: [
      { id: 'about', title: 'Why Prime Spaces', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Exclusive Pre-Launch Deals', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Featured Properties & Floor Plans', isEnabled: true, order: 3 },
      { id: 'timings', title: 'Office Timings', isEnabled: true, order: 4 },
      { id: 'contact', title: 'Book Free Site Tour', isEnabled: true, order: 5 }
    ],
    offers: [
      {
        id: 'prop-off-1',
        title: 'Zero Brokerage on Luxury Developer Inventory',
        description: 'Direct builder pricing with flexible 20:80 payment plans on newly launched luxury high-rises.',
        discountPercent: 100,
        couponCode: 'ZEROBROKER',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'pr-1', name: 'Ultra-Luxury 3 BHK + Servant (2,250 Sq.Ft) - Golf Course Ext.', description: 'VRV air conditioning, Italian marble flooring, 3 car parkings, 50,000 sq.ft clubhouse.', price: 27500000, discountPrice: 26000000, category: 'Residential High-Rise', isAvailable: true, unit: 'Sale Price' },
      { id: 'pr-2', name: 'High-Street Retail Shop on Ground Floor (500 Sq.Ft)', description: 'Double height 18ft retail shop on prime 150m wide Dwarka Expressway with 8.5% lease guarantee.', price: 11000000, category: 'Commercial Investments', isAvailable: true, unit: 'Sale Price' }
    ],
    gallery: [
      { id: 'prg-1', title: 'Clubhouse Infinity Pool View', category: 'facilities', imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  // 24. Travel agent / tour operator
  {
    id: 'himalayan-escapes-travels',
    slug: 'himalayan-escapes-travels',
    businessName: 'Himalayan Escapes & Holiday Planners',
    category: 'travel',
    templateId: 'travel-voyage',
    tagline: 'Customized Spiti Valley Expeditions, Kashmir Houseboats & Goa Beach Retreats',
    description: 'IATA-certified holiday curator crafting unforgettable family, honeymoon, and biker road trips across Himachal, Ladakh, Kerala backwaters, and Dubai. Handpicked 4-star boutique hotels, verified local drivers, and 24x7 trip support.',
    ownerName: 'Rohit Negi & Tenzin Dorjee',
    phone: '+91 98160 12345',
    whatsapp: '+91 98160 12345',
    email: 'travel@himalayanescapes.in',
    address: 'The Mall Road, Near Town Hall, Shimla, Himachal Pradesh 171001',
    city: 'Shimla',
    mapsUrl: 'https://maps.google.com/?q=Mall+Road+Shimla',
    openingHours: 'Mon - Sun: 9:00 AM – 9:00 PM',
    logoUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#0369a1',
    bookingType: 'reservation_party',
    bookingCtaLabel: 'Request Holiday Itinerary',
    specialBadge: '100% Customized Private Cab Itineraries',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-22T08:00:00Z',
    updatedAt: '2026-03-24T18:00:00Z',
    sections: [
      { id: 'about', title: 'Why Tour With Us', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Summer Holiday Discounts', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Trending Holiday Packages', isEnabled: true, order: 3 },
      { id: 'timings', title: 'Trip Desk Hours', isEnabled: true, order: 4 },
      { id: 'contact', title: 'Request Custom Quote', isEnabled: true, order: 5 }
    ],
    offers: [
      {
        id: 'trv-off-1',
        title: 'Honeymoon Special: Complimentary Candlelight Dinner',
        description: 'Includes floral room decor, honeymoon cake, and riverside private candlelight dinner in Manali.',
        discountPercent: 100,
        couponCode: 'HONEYMOONFREE',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'tv-1', name: 'Scenic Himachal Explorer (6N/7D Shimla-Manali-Solang)', description: 'Private Innova for all transfers, 4-star mountain view rooms, daily breakfast & dinner, snow point permits.', price: 34500, discountPrice: 29999, category: 'Himachal Packages', isAvailable: true, unit: 'per Couple' },
      { id: 'tv-2', name: 'Kashmir Paradise Tour (5N/6D Srinagar-Gulmarg-Pahalgam)', description: 'Includes 1 night luxury Dal Lake houseboat, Shikara ride, Gondola Phase-1 tickets, and private heated sedan.', price: 42000, discountPrice: 37500, category: 'Kashmir Packages', isAvailable: true, unit: 'per Couple' }
    ],
    gallery: [
      { id: 'tvg-1', title: 'Snow Mountain Panoramas at Solang', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  // 25. Tiffin service / cloud kitchen
  {
    id: 'annapurna-ghar-ka-tiffin',
    slug: 'annapurna-ghar-ka-tiffin',
    businessName: 'Annapurna Pure Veg Ghar Ka Tiffin',
    category: 'tiffin',
    templateId: 'tiffin-homely',
    tagline: 'Homestyle Pure Veg Meals, Low Oil & Spices, Fresh Phulkas Delivered Daily',
    description: 'Nutritious, mother-cooked wholesome daily meals for corporate professionals and students in Hinjewadi, Pune. Prepared with fresh market vegetables, cold-pressed sunflower oil, zero soda, and sealed thermal hot-pots.',
    ownerName: 'Sunita & Shrikant Deshpande',
    phone: '+91 98230 45678',
    whatsapp: '+91 98230 45678',
    email: 'khana@annapurnatiffin.in',
    address: 'Near Phase 1 Wipro Circle, Hinjewadi, Pune, Maharashtra 411057',
    city: 'Pune',
    mapsUrl: 'https://maps.google.com/?q=Hinjewadi+Phase+1+Pune',
    openingHours: 'Lunch: 11:30 AM – 2:30 PM | Dinner: 7:00 PM – 10:00 PM',
    logoUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#b45309',
    bookingType: 'reservation_party',
    bookingCtaLabel: 'Subscribe Tiffin Plan',
    specialBadge: 'Try 1-Day Trial Tiffin @ ₹99',
    deliveryRadius: 'Hinjewadi Phase 1, 2 & 3 Tech Parks',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-23T08:00:00Z',
    updatedAt: '2026-03-24T18:00:00Z',
    sections: [
      { id: 'about', title: 'Our Homestyle Kitchen', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Trial Tiffin & Subscription', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Weekly Tiffin Plans & Rates', isEnabled: true, order: 3 },
      { id: 'timings', title: 'Meal Delivery Hours', isEnabled: true, order: 4 },
      { id: 'contact', title: 'Start Tiffin Subscription', isEnabled: true, order: 5 }
    ],
    offers: [
      {
        id: 'tif-off-1',
        title: 'Monthly Subscription 10% Off',
        description: 'Subscribe to our 30-day Lunch + Dinner plan and enjoy 10% waiver + free Sunday sweet.',
        discountPercent: 10,
        couponCode: 'DESH10',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'tf-1', name: 'Standard Deluxe Veg Meal (Daily Lunch / Dinner)', description: '4 Ghee Phulkas + 1 Dal Tadka + 1 Dry Sabzi + 1 Paneer Gravy + Steamed Rice + Salad & Pickle.', price: 120, discountPrice: 105, category: 'Daily Meals', isAvailable: true, unit: 'per Meal', isVeg: true },
      { id: 'tf-2', name: 'Monthly Lunch Subscription (26 Days Mon-Sat)', description: 'Freshly packed thermal steel dabba delivered directly to your office desk before 1:00 PM.', price: 2999, discountPrice: 2699, category: 'Subscription Plans', isAvailable: true, unit: 'per Month', isVeg: true },
      { id: 'tf-3', name: '1-Day Trial Tasting Tiffin (Complete Meal)', description: 'Experience our homely taste and low-oil cooking before committing to a monthly subscription.', price: 99, category: 'Trial Pass', isAvailable: true, unit: '1 Meal', isVeg: true }
    ],
    gallery: [
      { id: 'tfg-1', title: 'Fresh Desi Ghee Phulkas on Tava', category: 'food', imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  // 26. Florist
  {
    id: 'blossom-express-florist',
    slug: 'blossom-express-florist',
    businessName: 'Blossom Express Exotic Florals',
    category: 'florist',
    templateId: 'florist-blossom',
    tagline: 'Fresh Farm Orchids, Dutch Roses & Midnight Surprise Bouquet Delivery',
    description: 'Artisanal flower boutique in South Extension, Delhi. From velvet red rose bouquets and Asiatic lilies to elegant sympathy wreaths and car wedding decorations. Fresh blooms sourced daily from Bangalore flower auctions.',
    ownerName: 'Kavita Chawla & Sunny Mehta',
    phone: '+91 98113 45678',
    whatsapp: '+91 98113 45678',
    email: 'hello@blossomexpress.in',
    address: 'Shop 9, Main Market, South Extension Part II, New Delhi 110049',
    city: 'New Delhi',
    mapsUrl: 'https://maps.google.com/?q=South+Extension+II+Delhi',
    openingHours: 'Mon - Sun: 8:00 AM – 10:30 PM (Midnight Delivery Active)',
    logoUrl: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#be123c',
    bookingType: 'whatsapp_order',
    bookingCtaLabel: 'Order Flower Bouquet',
    specialBadge: 'Same-Day & Midnight Delivery',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-24T09:00:00Z',
    updatedAt: '2026-03-24T18:00:00Z',
    sections: [
      { id: 'about', title: 'Our Floral Craft', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Birthday Bundles', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Bouquets & Arrangements', isEnabled: true, order: 3 },
      { id: 'timings', title: 'Delivery Timings', isEnabled: true, order: 4 },
      { id: 'contact', title: 'Order Bouquet on WhatsApp', isEnabled: true, order: 5 }
    ],
    offers: [
      {
        id: 'flr-off-1',
        title: 'Free Greeting Card & Ribbon Styling',
        description: 'Every bouquet comes with custom hand-written message card and luxury satin bow.',
        discountPercent: 100,
        couponCode: 'WITHLOVE',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'fl-1', name: 'Royal Crimson Bunch (30 Dutch Red Roses)', description: 'Long-stem premium roses hand-tied in matte black craft wrap with Gypsophila fillers.', price: 1299, discountPrice: 1099, category: 'Rose Bouquets', isAvailable: true, unit: '30 Stems' },
      { id: 'fl-2', name: 'Purple Orchid & Asiatic White Lily Glass Vase', description: 'Exotic Dendrobium orchids and fragrant oriental lilies arranged in a modern cylindrical vase.', price: 1650, discountPrice: 1450, category: 'Vase Arrangements', isAvailable: true, unit: '1 Arrangement' }
    ],
    gallery: [
      { id: 'flg-1', title: 'Fresh Rose Bouquets in Boutique', category: 'food', imageUrl: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  // 27. Printing / Xerox / stationery shop
  {
    id: 'print-point-xerox',
    slug: 'print-point-xerox',
    businessName: 'PrintPoint Digital Press & Xerox Hub',
    category: 'printing',
    templateId: 'printing-speed',
    tagline: 'Send PDF on WhatsApp · Ready for Pickup in 10 Mins · High-Volume Laser Xerox & Spiral Binding',
    description: 'North Campus & Mukherjee Nagar’s student printing destination. High-speed Xerox at ₹0.75/page, color laser printing, architectural blueprint plotting, project thesis hardcover binding, and visiting card offset printing.',
    ownerName: 'Manoj & Ritesh Bansal',
    phone: '+91 98115 67891',
    whatsapp: '+91 98115 67891',
    email: 'print@printpointdelhi.in',
    address: 'Shop 12, Student Center, Near Batra Cinema, Mukherjee Nagar, Delhi 110009',
    city: 'Delhi',
    mapsUrl: 'https://maps.google.com/?q=Mukherjee+Nagar+Delhi',
    openingHours: 'Mon - Sun: 8:00 AM – 11:00 PM',
    logoUrl: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1589330694653-dad6ef49ab6e?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#0284c7',
    bookingType: 'whatsapp_order',
    bookingCtaLabel: 'Send File for Printing',
    specialBadge: 'High-Volume Xerox @ ₹0.75 / Page',
    status: 'published',
    pricingPlanId: 'starter',
    amountPaid: 999,
    paymentStatus: 'paid',
    createdAt: '2026-03-24T10:00:00Z',
    updatedAt: '2026-03-24T18:00:00Z',
    sections: [
      { id: 'about', title: 'Our Speed Guarantee', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Student Printing Packs', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Printing & Binding Rates', isEnabled: true, order: 3 },
      { id: 'timings', title: 'Shop Hours', isEnabled: true, order: 4 },
      { id: 'contact', title: 'WhatsApp PDF Document', isEnabled: true, order: 5 }
    ],
    offers: [
      {
        id: 'prt-off-1',
        title: 'Project Thesis Hardcover Golden Emboss 20% Off',
        description: 'Get gold foil engraved hardcover binding for college dissertation reports with free ribbon bookmark.',
        discountPercent: 20,
        couponCode: 'THESIS20',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'xp-1', name: 'High-Speed B&W Xerox / Laser Print (75 GSM JK Paper)', description: 'Crisp 1200 DPI double-sided xerox for study material, notes, and legal documents.', price: 1, discountPrice: 0.75, category: 'Xerox & Black/White', isAvailable: true, unit: 'per Page' },
      { id: 'xp-2', name: 'Digital Full Color Laser Print (300 GSM Art Card)', description: 'Photo-grade glossy laser color prints for brochures, project cover pages, certificates.', price: 10, discountPrice: 8, category: 'Color Printing', isAvailable: true, unit: 'per Page' },
      { id: 'xp-3', name: 'Heavy-Duty Spiral / Coil Binding with Clear Plastic Cover', description: 'Durable unbreakable plastic spiral binding with 350 micron frosted front and back sheet.', price: 40, category: 'Binding & Finishing', isAvailable: true, unit: 'per Book' }
    ],
    gallery: [
      { id: 'xpg-1', title: 'Canon High-Speed Digital Press Production', category: 'facilities', imageUrl: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  // Existing Clinic
  {
    id: 'dr-sharma-dental',
    slug: 'dr-sharma-dental',
    businessName: 'Dr. Sharma Dental & Implant Clinic',
    category: 'clinic',
    templateId: 'clinic-modern',
    tagline: 'Painless Dentistry, Digital Smile Designing & Implant Center',
    description: 'Providing world-class, hygienic dental care to families in Gurugram for over 14 years. Led by Dr. Rohit Sharma (MDS, Prosthodontics & Oral Implantology), our clinic features state-of-the-art 3D intraoral scanners and pain-free laser procedures.',
    ownerName: 'Dr. Rohit Sharma, MDS',
    phone: '+91 98112 34567',
    whatsapp: '+91 98112 34567',
    email: 'care@drsharmadental.com',
    address: 'SCO 28, First Floor, Above HDFC Bank, Main Market, Sector 14, Gurugram, Haryana 122001',
    city: 'Gurugram',
    mapsUrl: 'https://maps.google.com/?q=Sector+14+Market+Gurugram',
    openingHours: 'Mon - Sat: 10:00 AM - 2:00 PM, 5:00 PM - 8:30 PM',
    logoUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#0369a1',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Book OPD Appointment',
    specialBadge: '14+ Yrs Experienced MDS Specialists',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-05T09:00:00Z',
    updatedAt: '2026-03-24T18:00:00Z',
    sections: [
      { id: 'about', title: 'About Clinic', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Health Packages', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Doctors & Treatments', isEnabled: true, order: 3 },
      { id: 'timings', title: 'OPD Hours', isEnabled: true, order: 4 },
      { id: 'contact', title: 'Book Doctor Appointment', isEnabled: true, order: 5 }
    ],
    offers: [
      {
        id: 'dental-off-1',
        title: 'Comprehensive Dental Health Checkup @ ₹199',
        description: 'Includes full digital X-ray (RVG), complete oral checkup, and specialist consultation.',
        discountPercent: 60,
        couponCode: 'SMILE199',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'd-1', name: 'Dr. Rohit Sharma (MDS)', description: 'Chief Dental Surgeon, Certified Implantologist (Fellow ICOI, USA).', price: 500, category: 'Doctor Profile', doctorQualification: 'BDS, MDS (Prosthodontics & Implantology)', doctorExperience: '14+ Years Clinical Experience', doctorOpdTimings: 'Mon - Sat: 10:00 AM – 2:00 PM, 5:00 PM – 8:30 PM', isAvailable: true, isFeatured: true },
      { id: 'd-2', name: 'Digital Dental Checkup & Consultation', description: 'Detailed oral cavity inspection using intra-oral camera and diagnosis report.', price: 500, discountPrice: 199, category: 'Treatments & Services', isAvailable: true }
    ],
    gallery: [
      { id: 'dg-1', title: 'Ergonomic Dental Operatory', category: 'facilities', imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  // Existing Salon
  {
    id: 'glow-glamour-salon',
    slug: 'glow-glamour-salon',
    businessName: 'Glow & Glamour Luxury Salon & Spa',
    category: 'salon',
    templateId: 'salon-luxury',
    tagline: 'Bridal Makeovers, Precision Hair Craft & Organic Skin Therapies',
    description: 'Step into an oasis of relaxation in Mumbai’s bustling Bandra. Glow & Glamour offers bespoke hair styling, French balayage, hydra facials, and couture bridal makeovers using premium international brands.',
    ownerName: 'Pooja Kapoor & Farhan Shaikh',
    phone: '+91 99201 23456',
    whatsapp: '+91 99201 23456',
    email: 'bookings@glowglamoursalon.com',
    address: 'Ground Floor, Villa Marina, Turner Road, Bandra West, Mumbai, Maharashtra 400050',
    city: 'Mumbai',
    mapsUrl: 'https://maps.google.com/?q=Turner+Road+Bandra+West+Mumbai',
    openingHours: 'Mon - Sun: 10:00 AM – 9:00 PM',
    logoUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#831843',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Book Beauty Slot',
    specialBadge: 'Kérastase & Olaplex Partner Salon',
    status: 'published',
    pricingPlanId: 'premium',
    amountPaid: 1999,
    paymentStatus: 'paid',
    createdAt: '2026-03-08T12:00:00Z',
    updatedAt: '2026-03-24T18:00:00Z',
    sections: [
      { id: 'about', title: 'The Salon Experience', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Monthly Pamper Packages', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Services & Rate Card', isEnabled: true, order: 3 },
      { id: 'timings', title: 'Salon Hours', isEnabled: true, order: 4 },
      { id: 'contact', title: 'Reserve Appointment Slot', isEnabled: true, order: 5 }
    ],
    offers: [
      {
        id: 'salon-off-1',
        title: 'Complete Bridal Glow Pre-Booking 20% Off',
        description: 'Book your bridal makeup & skin regime 30 days in advance and enjoy a flat 20% privilege waiver.',
        discountPercent: 20,
        couponCode: 'BRIDALGLOW',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 's-1', name: '7-Step Hydra Facial & Collagen Infusion', description: 'Deep pore vacuum extraction, fruit peel, hyaluronic acid booster, and cold hammer cryo-lift.', price: 3499, discountPrice: 2799, duration: '60 Mins', category: 'Skin & Facials', isAvailable: true, isFeatured: true },
      { id: 's-2', name: 'French Balayage & Gloss Toner', description: 'Freehand sun-kissed caramel ribbons hand-painted seamlessly for a soft, natural grow-out.', price: 5999, duration: '180 Mins', category: 'Hair Styling', isAvailable: true }
    ],
    gallery: [
      { id: 'sg-1', title: 'VIP Styling Stations', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  // Existing Boutique
  {
    id: 'rajdhani-ethnic-wear',
    slug: 'rajdhani-ethnic-wear',
    businessName: 'Rajdhani Sarees & Bridal Boutique',
    category: 'retail',
    templateId: 'retail-boutique',
    tagline: 'Handwoven Banarasi Silks, Designer Lehengas & Festive Ensembles',
    description: 'Serving four generations of Indian brides with authentic handloom heritage. From genuine Kanjeevaram and pure Banarasi Katan silks to bespoke bridal lehengas with zardozi embroidery.',
    ownerName: 'Rameshwar Lal & Sons',
    phone: '+91 98100 87654',
    whatsapp: '+91 98100 87654',
    email: 'orders@rajdhanisarees.com',
    address: 'Shop 114-116, Katra Neel, Main Chandni Chowk Road, Old Delhi, Delhi 110006',
    city: 'Delhi',
    mapsUrl: 'https://maps.google.com/?q=Katra+Neel+Chandni+Chowk',
    openingHours: 'Mon - Sat: 11:00 AM – 8:30 PM | Sunday Closed',
    logoUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#4c1d95',
    bookingType: 'whatsapp_order',
    bookingCtaLabel: 'WhatsApp Video Shopping',
    specialBadge: 'Silk Mark Certified Pure Silks',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-10T14:00:00Z',
    updatedAt: '2026-03-24T18:00:00Z',
    sections: [
      { id: 'about', title: 'Our Handloom Heritage', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Festive Offers', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Curated Wedding Collection', isEnabled: true, order: 3 },
      { id: 'timings', title: 'Store Timings', isEnabled: true, order: 4 },
      { id: 'contact', title: 'Video Shopping Enquiry', isEnabled: true, order: 5 }
    ],
    offers: [
      {
        id: 'ret-off-1',
        title: 'Wedding Season Discount 15% Off',
        description: 'Enjoy 15% off on all pure silk sarees when you purchase 3 or more trousseau pieces.',
        discountPercent: 15,
        couponCode: 'VIVAH15',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'r-1', name: 'Pure Katan Silk Banarasi Saree (Royal Crimson)', description: 'Woven with gold and silver zari in intricate kadwa boota motifs. Certified Silk Mark label.', price: 18500, discountPrice: 15999, category: 'Banarasi Silks', productBadge: 'Handloom Pure Silk', isAvailable: true, isFeatured: true },
      { id: 'r-2', name: 'Heritage Velvet Bridal Lehenga with Zari Embroidery', description: 'Deep maroon micro-velvet kalis adorned with hand-embroidered dabka and sequins.', price: 45000, discountPrice: 38500, category: 'Bridal Lehengas', productBadge: 'Couture Masterpiece', isAvailable: true, isFeatured: true }
    ],
    gallery: [
      { id: 'rg-1', title: 'Heritage Chandni Chowk Showroom', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  // OpenHouse Cafe Inspired (Café / Restaurant / Lounge)
  {
    id: 'openhouse-bistro-lounge',
    slug: 'openhouse-bistro-lounge',
    businessName: 'OpenHouse Bistro & Urban Lounge',
    category: 'restaurant',
    templateId: 'restaurant-dhaba',
    tagline: 'Iconic CP Rooftop Lounge, Live Acoustics, Wood-Fired Pizzas & Craft Platters',
    description: 'Inspired by Connaught Place’s landmark Openhouse Cafe. High-energy acoustic evenings, colonial courtyard arches, brick-oven Neapolitan pizzas, steaming dim sum platters, and craft mocktails. The go-to destination for weekend celebrations, terrace dining, and team lunches in Central Delhi.',
    ownerName: 'Vikram & Sahil Mehra',
    phone: '+91 98112 44556',
    whatsapp: '+91 98112 44556',
    email: 'events@openhouselounge.in',
    address: 'C-37, Inner Circle, Connaught Place, Opposite Odeon Cinema, New Delhi 110001',
    city: 'New Delhi (Connaught Place)',
    mapsUrl: 'https://maps.google.com/?q=Connaught+Place+New+Delhi',
    openingHours: 'Mon - Sun: 12:00 PM – 1:00 AM (Late Night Kitchen)',
    logoUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#A9432D',
    bookingType: 'reservation_party',
    bookingCtaLabel: 'Reserve Dining Table',
    specialBadge: '🎸 Connaught Place Landmark · Rooftop Lounge & Live Acoustics',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-05T12:00:00Z',
    updatedAt: '2026-03-26T18:00:00Z',
    sections: [
      { id: 'about', title: 'The OpenHouse Vibe', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Live Events & Offers', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Bistro & Lounge Menu', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'CP Terrace & Lounge', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Hours & Happy Hours', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Table Reservation', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'oh-off-1',
        title: 'Sundowner Special 20% Off',
        description: 'Flat 20% discount on food platters & mocktails between 3:00 PM and 7:00 PM on weekdays.',
        discountPercent: 20,
        couponCode: 'SUNDOWN20',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'oh-1', name: 'Truffle Mushroom Neapolitan Wood-Fired Pizza', description: 'Hand-stretched sourdough crust with wild porcini mushrooms, Fior di Latte mozzarella, and white truffle oil drizzle.', price: 545, discountPrice: 495, category: 'Wood-Fired Pizzas', isAvailable: true, isVeg: true, isFeatured: true },
      { id: 'oh-2', name: 'Crystal Edamame & Water Chestnut Dim Sum Platter', description: 'Translucent steamed dumplings with bird eye chili dip and scallion sesame soy.', price: 460, discountPrice: 420, category: 'Dim Sums & Starters', isAvailable: true, isVeg: true, isFeatured: true },
      { id: 'oh-3', name: 'Dahi Ke Sholay with Mint Garlic Chutney', description: 'Crisp hung curd rolls flavored with green chilies, coriander, and royal cumin.', price: 395, category: 'Tapas & Starters', isAvailable: true, isVeg: true },
      { id: 'oh-4', name: 'Smoked Sunset Virgin Sangria Carafe', description: 'Fresh seasonal pomegranates, green apples, citrus slices steeped in spiced grape reduction.', price: 320, category: 'Mocktails & Brews', isAvailable: true, isVeg: true, isFeatured: true },
      { id: 'oh-5', name: 'Dal OpenHouse (Slow Cooked 24hr Makhani)', description: 'Simmered overnight on slow charcoal flame with pure white churned butter and Kasuri methi.', price: 440, category: 'Main Course', isAvailable: true, isVeg: true }
    ],
    gallery: [
      { id: 'ohg-1', title: 'Colonial Arched Terrace Dining', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80' },
      { id: 'ohg-2', title: 'Live Acoustic Stage', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  // Swagmee Inspired (Salon at Home & Women's Beauty Parlour)
  {
    id: 'swagglam-salon-at-home',
    slug: 'swagglam-salon-at-home',
    businessName: 'SwagGlam Salon at Home & Bridal Studio',
    category: 'salon',
    templateId: 'salon-luxury',
    tagline: 'Premium Doorstep Salon & Bridal Makeovers Across Delhi NCR',
    description: 'Inspired by India’s top doorstep beauty innovator Swagmee. Enjoy 100% hygienic, single-use monodose kits delivered to your doorstep by verified, background-checked female beauticians. From pain-free RICA Brazilian waxing, O3+ diamond glow facials, and anti-frizz hair spas to pre-bridal packages and HD party makeovers.',
    ownerName: 'Pooja Sharma & Certified Beauticians Team',
    phone: '+91 98711 88990',
    whatsapp: '+91 98711 88990',
    email: 'care@swagglam.in',
    address: 'Serving Doorsteps in Noida, Greater Noida, Gurugram, South Delhi, Ghaziabad & Faridabad',
    city: 'Delhi NCR (Doorstep)',
    mapsUrl: 'https://maps.google.com/?q=Noida+Sector+62',
    openingHours: 'Mon - Sun: 8:00 AM – 8:00 PM (Doorstep Appointments)',
    logoUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=200&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
    primaryColor: '#4A2545',
    bookingType: 'appointment_slot',
    bookingCtaLabel: 'Book Doorstep Beautician',
    specialBadge: '💅 Doorstep in 60 Mins · 100% Monodose Kits (Delhi NCR)',
    status: 'published',
    pricingPlanId: 'professional',
    amountPaid: 1499,
    paymentStatus: 'paid',
    createdAt: '2026-03-08T09:00:00Z',
    updatedAt: '2026-03-26T18:00:00Z',
    sections: [
      { id: 'about', title: 'Why Salon at Home', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Home Pamper Packages', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Services & Monodose Rate Card', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Client Makeovers & Kits', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Slot Timings & Service Area', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Book Appointment', isEnabled: true, order: 6 }
    ],
    offers: [
      {
        id: 'sg-off-1',
        title: 'Head-to-Toe Pamper Pack Flat ₹999',
        description: 'Full arms RICA waxing + Full legs + O3+ D-Tan cleanup + Threading at just ₹999.',
        discountPercent: 35,
        couponCode: 'PAMPER999',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        isActive: true
      }
    ],
    items: [
      { id: 'sg-1', name: 'O3+ Bridal Shine & Diamond Glow Facial (Monodose Kit)', description: 'Single-use sealed O3+ kit with whitening serum, micro-dermabrasion scrub, and rubber mask. 75 mins.', price: 1850, discountPrice: 1499, category: 'Facials & Cleanups', isAvailable: true, isFeatured: true },
      { id: 'sg-2', name: 'Full Body RICA White Chocolate Waxing (Pain-Free)', description: 'Imported Italian colophony-free wax suitable for sensitive skin. Full arms, full legs, underarms & stomach line.', price: 1600, discountPrice: 1299, category: 'Waxing & Threading', isAvailable: true, isFeatured: true },
      { id: 'sg-3', name: 'L’Oréal Professionnel Mythic Oil Hair Spa with Steam', description: 'Deep nourishing argan oil massage, ozone steam treatment, and anti-frizz blowdry at your home.', price: 950, discountPrice: 799, category: 'Hair Care & Spa', isAvailable: true, isFeatured: true },
      { id: 'sg-4', name: 'Crystal Luxury Pedicure & Manicure with Paraffin Dip', description: 'Herbal foot soak, callous removal, sea salt scrub, cuticle therapy, and heated paraffin wax mask.', price: 850, category: 'Mani-Pedi Care', isAvailable: true },
      { id: 'sg-5', name: 'HD Engagement / Bridal Party Makeup by Senior Artist', description: 'High-definition airbrush look, MAC/Huda Beauty products, eyelashes, hair styling & saree draping.', price: 4500, discountPrice: 3800, category: 'Bridal & Party Looks', isAvailable: true, isFeatured: true }
    ],
    gallery: [
      { id: 'sgg-1', title: 'Sealed Single-Use Monodose Kits', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80' },
      { id: 'sgg-2', title: 'Bridal Makeover at Home', category: 'interior', imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80' }
    ]
  }
];
