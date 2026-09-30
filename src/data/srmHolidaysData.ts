import { BusinessWebsite } from '../types';

export interface SrmTourPackage {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  nights: number;
  days: number;
  startingPriceCabOnly: number;
  startingPriceCabHotel: number;
  carIncluded: string;
  rating: number;
  reviewsCount: number;
  category: 'golden-triangle' | 'rajasthan' | 'himachal' | 'uttarakhand' | 'same-day';
  categoryLabel: string;
  overview: string;
  highlights: string[];
  destinationsCovered: string[];
  inclusions: string[];
  exclusions: string[];
  imageUrl: string;
  galleryImages: string[];
  itinerary: Array<{
    day: number;
    title: string;
    description: string;
    stayCity: string;
  }>;
}

export interface SrmFleetItem {
  id: string;
  name: string;
  category: 'sedan' | 'suv' | 'tempo' | 'luxury';
  categoryLabel: string;
  seating: string;
  luggage: string;
  perKmRate: number;
  local8hr80km: number;
  outstationMinKm: number;
  driverAllowancePerDay: number;
  features: string[];
  imageUrl: string;
  popularFor: string;
}

export const SRM_PACKAGES: SrmTourPackage[] = [
  {
    id: 'srm-same-day-agra',
    title: 'Same Day Agra Tour from Delhi by Car',
    subtitle: 'Private AC Chauffeur Drive via Yamuna Expressway – Taj Mahal & Agra Fort',
    duration: '1 Day (12-14 Hours)',
    nights: 0,
    days: 1,
    startingPriceCabOnly: 4999,
    startingPriceCabHotel: 4999,
    carIncluded: 'AC Sedan (Dzire / Etios) or Innova Crysta upgrade',
    rating: 4.94,
    reviewsCount: 1120,
    category: 'same-day',
    categoryLabel: 'Same Day Tours',
    overview: 'Experience the crown jewel of India in utmost comfort. Our private chauffeur picks you up from your Delhi NCR hotel or IGI airport at 6:00 AM, drives via the Yamuna Expressway, provides skip-the-line assistance at the Taj Mahal with an approved monument guide, and returns you safely the same evening.',
    highlights: [
      'Early morning departure via 6-lane Yamuna Expressway',
      'Guided visit to the breathtaking Taj Mahal at peaceful morning hours',
      'Tour of the colossal Agra Fort and Jahangiri Mahal',
      'Lunch break at 5-star / multi-cuisine courtyard restaurant in Agra',
      'Sunset view of Taj Mahal from Mehtab Bagh across the river',
      'Return drop-off anywhere in Delhi, Noida, or Gurugram by 8:30 PM'
    ],
    destinationsCovered: ['Delhi', 'Yamuna Expressway', 'Agra'],
    inclusions: [
      'Private sanitized AC Sedan / Innova car for full day',
      'Experienced English / Hindi speaking chauffeur with verified commercial badge',
      'All toll taxes, state road taxes, parking, and fuel included',
      'Govt. approved licensed tour guide in Agra',
      'Packaged cold mineral water in cab'
    ],
    exclusions: ['Monument entrance tickets (can be pre-booked)', 'Lunch expenses', 'Driver tip'],
    imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Delhi to Agra & Back in Style',
        description: '06:00 AM: Hotel pickup anywhere in Delhi NCR. 09:30 AM: Arrive in Agra and meet your private licensed guide. 10:00 AM: Visit the immortal Taj Mahal, exploring Mughal calligraphy and pietra dura marble inlays. 12:30 PM: Relish a sumptuous buffet lunch. 02:00 PM: Explore Agra Fort, where Shah Jahan spent his final years. 03:30 PM: Visit Mehtab Bagh for a scenic sunset photo angle. 04:30 PM: Depart Agra via Yamuna Expressway. 08:30 PM: Drop at your Delhi home, hotel, or airport.',
        stayCity: 'Return to Delhi NCR'
      }
    ]
  },
  {
    id: 'srm-golden-triangle-4d',
    title: '4-Day Delhi Agra Jaipur Tour',
    subtitle: 'Classic 3-City Cultural Road Odyssey with Chauffeur',
    duration: '4 Days / 3 Nights',
    nights: 3,
    days: 4,
    startingPriceCabOnly: 12499,
    startingPriceCabHotel: 18999,
    carIncluded: 'AC Swift Dzire / Toyota Etios (Innova Crysta +₹5,000)',
    rating: 4.92,
    reviewsCount: 780,
    category: 'golden-triangle',
    categoryLabel: 'Golden Triangle',
    overview: 'Our most popular multi-day road tour. Covers Delhi capital landmarks, the Taj Mahal & Agra Fort, the red sandstone ghost city of Fatehpur Sikri, and the royal pink palaces and Amber Fort of Jaipur with flexible pacing.',
    highlights: [
      'Delhi: Qutub Minar, India Gate & President House drive-through',
      'Agra: Sunrise Taj Mahal visit & Red Fort guided tour',
      'Fatehpur Sikri: Buland Darwaza & Salim Chishti Dargah',
      'Jaipur: Amber Fort jeep ride, Jal Mahal, City Palace & Hawa Mahal',
      'Choose between Cab-Only (book own hotels) or Cab + 3/4-Star Hotels'
    ],
    destinationsCovered: ['Delhi', 'Agra', 'Fatehpur Sikri', 'Jaipur'],
    inclusions: [
      'Entire surface journey by private dedicated AC vehicle',
      'Chauffeur fuel, interstate permit, toll taxes, and driver allowance',
      '3 Nights Hotel stay with daily breakfast (if Cab + Hotel chosen)',
      'Local city guides at Agra and Jaipur monuments'
    ],
    exclusions: ['Monument entrance fees', 'Meals other than specified breakfast', 'Personal items'],
    imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Delhi Sightseeing & Drive to Agra',
        description: 'Morning pickup from Delhi. Half-day Delhi tour covering Qutub Minar and India Gate. Afternoon drive to Agra via Yamuna Expressway. Evening check-in at Agra hotel and leisure.',
        stayCity: 'Agra'
      },
      {
        day: 2,
        title: 'Sunrise Taj Mahal – Fatehpur Sikri – Jaipur',
        description: 'Early morning sunrise tour of Taj Mahal. Return to hotel for breakfast. Visit Agra Fort. Drive to Jaipur with stop at UNESCO site Fatehpur Sikri. Evening check-in in Jaipur.',
        stayCity: 'Jaipur'
      },
      {
        day: 3,
        title: 'Full Day Royal Pink City Jaipur',
        description: 'Visit the imposing hilltop Amber Fort. Photo stop at Jal Mahal water palace. Tour the astronomical Jantar Mantar and Maharaja’s City Palace Museum. Stroll through Bapu Bazaar.',
        stayCity: 'Jaipur'
      },
      {
        day: 4,
        title: 'Hawa Mahal Photo Stop & Drive to Delhi',
        description: 'Morning photo visit to the iconic honeycomb facade of Hawa Mahal. Scenic drive back to Delhi via Delhi-Jaipur Expressway. Drop at Delhi Airport / Railway Station.',
        stayCity: 'Return to Delhi'
      }
    ]
  },
  {
    id: 'srm-rajasthan-grand-7d',
    title: '7-Day Royal Rajasthan Heritage Road Trip',
    subtitle: 'Jaipur – Jodhpur Blue City – Jaisalmer Thar Desert Camp – Udaipur Lakes',
    duration: '7 Days / 6 Nights',
    nights: 6,
    days: 7,
    startingPriceCabOnly: 24999,
    startingPriceCabHotel: 38999,
    carIncluded: 'AC Sedan / Innova Crysta with desert experienced chauffeur',
    rating: 4.96,
    reviewsCount: 560,
    category: 'rajasthan',
    categoryLabel: 'Rajasthan Tours',
    overview: 'An unforgettable royal expedition across the Thar Desert. Stay overnight in luxury Swiss desert tents at Sam Sand Dunes, ride camels across golden ripples at sunset, and explore Rajasthan’s impregnable citadels.',
    highlights: [
      'Jaipur Pink City palaces and Amber Fort',
      'Jodhpur Mehrangarh Fort towering 400 ft above the Blue City',
      'Overnight Swiss tent glamping in Jaisalmer Sam Dunes with folk dance and campfire',
      'Jaisalmer Golden Living Fort and ornate Patwon Ki Haveli',
      'Udaipur City Palace overlooking Lake Pichola and boat cruise'
    ],
    destinationsCovered: ['Jaipur', 'Jodhpur', 'Jaisalmer', 'Sam Sand Dunes', 'Udaipur'],
    inclusions: [
      'Entire road journey with dedicated commercial AC vehicle',
      '1 Night Luxury Desert Camp in Jaisalmer with Camel Safari & Rajasthani Folk Show',
      '5 Nights in 3/4-Star Heritage Haveli Hotels with daily breakfast',
      'Interstate road permits, tolls, and chauffeur night allowances'
    ],
    exclusions: ['Monument entrance fees and camera charges', 'Boat ride ticket at Lake Pichola'],
    imageUrl: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Delhi to Jaipur Pink City',
        description: 'Morning pickup in Delhi. Drive to Jaipur (4.5 hrs). Check-in and afternoon visit to Birla Mandir and Chokhi Dhani ethnic resort.',
        stayCity: 'Jaipur'
      },
      {
        day: 2,
        title: 'Jaipur Forts and Palaces',
        description: 'Visit Amber Fort with elephant/jeep ride, Jal Mahal, City Palace, Jantar Mantar, and Hawa Mahal.',
        stayCity: 'Jaipur'
      },
      {
        day: 3,
        title: 'Jaipur to Jodhpur (The Blue City)',
        description: 'Drive to Jodhpur (5.5 hrs). Visit the mighty Mehrangarh Fort, Jaswant Thada white marble memorial, and clock tower market.',
        stayCity: 'Jodhpur'
      },
      {
        day: 4,
        title: 'Jodhpur to Jaisalmer & Thar Desert Camp',
        description: 'Drive across desert highways to Jaisalmer (5 hrs). Transfer to Sam Sand Dunes desert camp. Sunset camel safari, evening folk music, Kalbeliya dance and buffet dinner.',
        stayCity: 'Jaisalmer (Desert Camp)'
      },
      {
        day: 5,
        title: 'Jaisalmer Living Fort to Jodhpur / Ranakpur',
        description: 'Morning exploration of Jaisalmer Golden Fort, carved Jain Temples, and Patwon Ki Haveli. Drive towards Ranakpur marble Jain temple.',
        stayCity: 'Ranakpur / Udaipur'
      },
      {
        day: 6,
        title: 'Romantic Udaipur Venice of the East',
        description: 'Full day sightseeing of Udaipur. Tour City Palace, Jagdish Temple, Saheliyon Ki Bari gardens, and evening sunset boat ride on Lake Pichola.',
        stayCity: 'Udaipur'
      },
      {
        day: 7,
        title: 'Udaipur Departure or Drive to Delhi/Jaipur',
        description: 'Transfer to Udaipur Airport or drive back with our chauffeur. Tour concludes with fond memories.',
        stayCity: 'Return Home'
      }
    ]
  },
  {
    id: 'srm-himachal-5d',
    title: '5-Day Shimla & Manali Mountain Escape',
    subtitle: 'Mall Road – Solang Valley Adventure – Rohtang Pass – Kufri',
    duration: '5 Days / 4 Nights',
    nights: 4,
    days: 5,
    startingPriceCabOnly: 16999,
    startingPriceCabHotel: 26999,
    carIncluded: 'AC Sedan / Innova with mountain driving certified chauffeur',
    rating: 4.89,
    reviewsCount: 640,
    category: 'himachal',
    categoryLabel: 'Himachal Tours',
    overview: 'Breathe crisp Himalayan pine air, marvel at snow peaks in Solang Valley, walk the colonial Mall Road in Shimla, and explore Hadimba Temple in Manali with private sanitised car service.',
    highlights: [
      'Shimla: British colonial Ridge, Christ Church & Jakhu Temple',
      'Kufri: Snow viewpoints and Himalayan Nature Park',
      'Manali: Hadimba Temple, Vashisht Hot Springs & Tibetan Monastery',
      'Solang Valley: Paragliding, zorbing & snow sports',
      'Kullu: River rafting on Beas River & authentic shawl weaving centers'
    ],
    destinationsCovered: ['Delhi', 'Shimla', 'Kufri', 'Kullu', 'Manali', 'Solang Valley'],
    inclusions: [
      'Dedicated AC car from Delhi pickup to Delhi drop (heating available in hills)',
      'All toll taxes, Himachal Green Tax, parking, and driver allowances',
      '4 Nights Hotel stay (2N Shimla + 2N Manali) with daily breakfast & dinner (if Cab+Hotel chosen)'
    ],
    exclusions: ['Rohtang Pass NGT permit taxi fee', 'Adventure activities (paragliding, rafting)'],
    imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Delhi to Shimla Queen of Hills',
        description: 'Morning pickup from Delhi. Scenic drive via Pinjore and Parwanoo timber trail into Himachal hills (7 hrs). Evening check-in at Shimla hotel. Stroll on Mall Road and Ridge.',
        stayCity: 'Shimla'
      },
      {
        day: 2,
        title: 'Shimla & Kufri Snow View',
        description: 'Full day excursion to Kufri. Enjoy pony rides to Mahasu Peak and panoramic Himalayan mountain vistas. Return to Shimla for Christ Church and Lakkar Bazaar.',
        stayCity: 'Shimla'
      },
      {
        day: 3,
        title: 'Shimla to Manali via Kullu Valley',
        description: 'Drive along the Beas River to Manali (7-8 hrs). En-route stop at Kullu for river rafting and Angora shawl shopping. Arrive in Manali and relax.',
        stayCity: 'Manali'
      },
      {
        day: 4,
        title: 'Solang Valley Snow Point & Manali Local',
        description: 'Visit Solang Valley for thrilling adventure activities and snow views. Afternoon visit to the 450-year-old wooden Hadimba Devi Temple and hot sulfur springs at Vashisht.',
        stayCity: 'Manali'
      },
      {
        day: 5,
        title: 'Manali to Delhi Return Drive',
        description: 'Depart Manali after early breakfast. Scenic downhill drive through Mandi and Chandigarh back to Delhi. Drop at Delhi Airport / Railway station by late evening.',
        stayCity: 'Return to Delhi'
      }
    ]
  }
];

export const SRM_FLEET: SrmFleetItem[] = [
  {
    id: 'fleet-dzire',
    name: 'Maruti Swift Dzire',
    category: 'sedan',
    categoryLabel: 'Economy Sedan',
    seating: '4 Passengers + 1 Chauffeur',
    luggage: '2 Medium Bags + 2 Handbags',
    perKmRate: 11,
    local8hr80km: 1600,
    outstationMinKm: 250,
    driverAllowancePerDay: 400,
    features: ['Split AC', 'Music System with Aux/Bluetooth', 'Clean Seat Covers', 'GPS Tracking', 'Mobile Charging Ports'],
    imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    popularFor: 'Budget couples, airport drops, and Same Day Agra Tours'
  },
  {
    id: 'fleet-etios',
    name: 'Toyota Etios',
    category: 'sedan',
    categoryLabel: 'Spacious Sedan',
    seating: '4 Passengers + 1 Chauffeur',
    luggage: '3 Large Suitcases + Handbags (595L Boot)',
    perKmRate: 11.5,
    local8hr80km: 1700,
    outstationMinKm: 250,
    driverAllowancePerDay: 400,
    features: ['Extra Legroom', 'Massive Boot Space', 'Powerful Chilling AC', 'First Aid Kit', 'Emergency SOS'],
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    popularFor: 'Outstation Golden Triangle trips with heavy luggage'
  },
  {
    id: 'fleet-innova-crysta',
    name: 'Toyota Innova Crysta',
    category: 'suv',
    categoryLabel: 'Premium SUV',
    seating: '6 or 7 Passengers + 1 Chauffeur',
    luggage: '4 Large Suitcases + 3 Handbags',
    perKmRate: 18,
    local8hr80km: 2800,
    outstationMinKm: 250,
    driverAllowancePerDay: 500,
    features: ['Captain Recliner Seats', 'Dual Zone Climate Control AC', 'Smooth Suspension for Highways & Hills', 'Cup Holders & USB Ports at Each Row'],
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    popularFor: 'Family vacations, corporate executives, and Rajasthan & Himachal hill circuits'
  },
  {
    id: 'fleet-ertiga',
    name: 'Maruti Ertiga',
    category: 'suv',
    categoryLabel: 'Compact MPV',
    seating: '5-6 Passengers + 1 Chauffeur',
    luggage: '3 Medium Bags',
    perKmRate: 14,
    local8hr80km: 2200,
    outstationMinKm: 250,
    driverAllowancePerDay: 450,
    features: ['Economical 6-Seater', 'Rear AC Vents', 'Foldable Seats', 'Smooth City Drive'],
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    popularFor: 'Small families seeking affordable SUV comfort'
  },
  {
    id: 'fleet-tempo-9s',
    name: '9-Seater Luxury Tempo Traveller',
    category: 'tempo',
    categoryLabel: 'Luxury Mini Van',
    seating: '9 Passengers + 1 Chauffeur',
    luggage: 'Dedicated Rear Luggage Boot (9-10 Bags)',
    perKmRate: 22,
    local8hr80km: 3500,
    outstationMinKm: 250,
    driverAllowancePerDay: 600,
    features: ['1x1 Luxury Reclining Pushback Seats', 'Individual AC Vents', 'LED TV & Sound System', 'Spacious Center Aisle'],
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    popularFor: 'VIP small groups, pilgrimage tours, and intimate family reunions'
  },
  {
    id: 'fleet-tempo-12s',
    name: '12-Seater AC Tempo Traveller',
    category: 'tempo',
    categoryLabel: 'Group Tempo Traveller',
    seating: '12 Passengers + 1 Chauffeur',
    luggage: 'Rear Boot + Rooftop Carrier',
    perKmRate: 24,
    local8hr80km: 3800,
    outstationMinKm: 250,
    driverAllowancePerDay: 600,
    features: ['2x1 Pushback Seats', 'Individual Reading Lamps', 'Air Suspension on Select Models', 'Curtains on Windows'],
    imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80',
    popularFor: 'Delhi to Agra, Jaipur & Haridwar group weekend trips'
  },
  {
    id: 'fleet-tempo-16s',
    name: '16-Seater Force Tempo Traveller',
    category: 'tempo',
    categoryLabel: 'Medium Group Coach',
    seating: '16 Passengers + 1 Chauffeur',
    luggage: 'Deep Luggage Hold',
    perKmRate: 26,
    local8hr80km: 4200,
    outstationMinKm: 250,
    driverAllowancePerDay: 600,
    features: ['High-Roof Walk-in Interior', 'Substantial Headroom', 'Powerful Heavy-Duty AC', 'Icebox Facility on Request'],
    imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80',
    popularFor: 'Office outings, student trips, and extended family Chardham yatras'
  },
  {
    id: 'fleet-tempo-maharaja',
    name: 'Maharaja 1x1 Luxury Tempo Traveller',
    category: 'luxury',
    categoryLabel: 'Super Luxury Coach',
    seating: '9 or 10 Maharaja Recliners',
    luggage: 'Executive Luggage Hold',
    perKmRate: 30,
    local8hr80km: 4800,
    outstationMinKm: 250,
    driverAllowancePerDay: 700,
    features: ['Imported Sofa Recliners with Calf Support', 'Mood Ambient Ceiling Lighting', '24-Inch Smart TV with OTT', 'Onboard Charging at Every Seat', 'Wood-Finish Interior Accents'],
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    popularFor: 'Destination weddings, celebrity escorts, and supreme highway luxury'
  }
];

export const SRM_HOLIDAYS_WEBSITE: BusinessWebsite = {
  id: 'srm-holidays',
  slug: 'srm-holidays',
  businessName: 'SRM Holidays',
  category: 'tour_travel' as any,
  templateId: 'srm-holidays',
  tagline: 'Delhi’s Leading Tour Packages & Luxury Tempo Traveller / Car Rental Specialists',
  description: 'SRM Holidays Pvt Ltd offers customized North India tour packages, Same Day Agra trips from Delhi, Golden Triangle tours, and rental fleets of Swift Dzire, Innova Crysta, and 9 to 26-seater luxury Tempo Travellers with verified chauffeurs since 2016.',
  ownerName: 'SRM Holidays Private Limited',
  phone: '+91 98101 44789',
  whatsapp: '+91 98101 44789',
  email: 'info@srmholidays.in',
  address: 'Shop No. 12, Commercial Complex, Saraswati Marg, Karol Bagh & Mahipalpur near IGI Airport',
  city: 'New Delhi',
  mapsUrl: 'https://maps.google.com/?q=SRM+Holidays+Karol+Bagh+New+Delhi',
  openingHours: '24 Hours / 7 Days Active Booking Desk',
  coverUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#1E3A8A',
  secondaryColor: '#FF6B00',
  fontFamily: 'Inter',
  bookingType: 'appointment_consult' as any,
  bookingCtaLabel: 'Book Cab / Tour Package',
  specialBadge: 'Verified Fleet Since 2016',
  status: 'published',
  pricingPlanId: 'professional',
  amountPaid: 4999,
  paymentStatus: 'paid',
  offers: [],
  gallery: [],
  items: [
    ...SRM_PACKAGES.map(p => ({
      id: p.id,
      name: p.title,
      description: p.subtitle,
      price: p.startingPriceCabOnly,
      discountPrice: p.startingPriceCabHotel,
      category: p.categoryLabel,
      isAvailable: true,
      badge: p.duration
    })),
    ...SRM_FLEET.map(f => ({
      id: f.id,
      name: f.name,
      description: `${f.seating} · ₹${f.perKmRate}/km or ₹${f.local8hr80km} (8hr/80km)`,
      price: f.local8hr80km,
      discountPrice: f.local8hr80km,
      category: 'Fleet & Car Rentals',
      isAvailable: true,
      badge: f.categoryLabel
    }))
  ],
  sections: [
    { id: 'hero', title: 'Home', isEnabled: true, order: 1 },
    { id: 'packages', title: 'Tour Packages', isEnabled: true, order: 2 },
    { id: 'fleet', title: 'Fleet & Tempo Travellers', isEnabled: true, order: 3 },
    { id: 'calculator', title: 'Fare Calculator', isEnabled: true, order: 4 },
    { id: 'about', title: 'About Us', isEnabled: true, order: 5 },
    { id: 'contact', title: 'Contact & Booking', isEnabled: true, order: 6 }
  ],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
