import { BusinessWebsite } from '../types';

export interface ItdcPackage {
  id: string;
  title: string;
  subtitle: string;
  category: 'heritage' | 'buddhist' | 'pilgrimage' | 'luxury-train';
  categoryLabel: string;
  duration: string;
  nights: number;
  days: number;
  startingPrice: number;
  rating: number;
  reviewsCount: number;
  overview: string;
  highlights: string[];
  destinationsCovered: string[];
  inclusions: string[];
  exclusions: string[];
  imageUrl: string;
  itinerary: Array<{
    day: number;
    title: string;
    description: string;
    stayCity: string;
  }>;
}

export const ITDC_PACKAGES: ItdcPackage[] = [
  {
    id: 'itdc-buddhist-circuit-8d',
    title: 'The Sacred Buddhist Circuit Pilgrimage',
    subtitle: 'Following the Footsteps of Lord Buddha – Delhi to Lumbini & Sarnath',
    category: 'buddhist',
    categoryLabel: 'Buddhist Heritage',
    duration: '8 Days / 7 Nights',
    nights: 7,
    days: 8,
    startingPrice: 38500,
    rating: 4.97,
    reviewsCount: 430,
    overview: 'Curated by ITDC Ashok Travels under the aegis of the Ministry of Tourism. A transformative spiritual journey across the holy sites where Siddhartha Gautama attained enlightenment, gave his first sermon, and achieved Mahaparinirvana.',
    highlights: [
      'Bodhgaya: Mahabodhi Temple UNESCO site & meditation under sacred Bodhi Tree',
      'Sarnath (Varanasi): Dhamek Stupa where Buddha gave his first sermon',
      'Varanasi: Evening Ganga Aarti ceremony at Dashashwamedh Ghat',
      'Rajgir & Nalanda: Gridhakuta Peak (Vulture’s Peak) & ancient Nalanda University ruins',
      'Kushinagar: Rambhar Stupa and Mahaparinirvana Temple reclining Buddha',
      'Lumbini (Nepal border): Maya Devi Temple markstone of Buddha’s birthplace'
    ],
    destinationsCovered: ['Delhi', 'Varanasi', 'Sarnath', 'Bodhgaya', 'Rajgir', 'Nalanda', 'Vaishali', 'Kushinagar', 'Lumbini'],
    inclusions: [
      '7 Nights accommodation in ITDC Ashok Group & approved Buddhist circuit hotels',
      'Daily breakfast, lunch, and dinner throughout',
      'Dedicated AC luxury coach with experienced pilgrimage guide',
      'All monument entries, border crossings, and VIP prayer darshan permits'
    ],
    exclusions: ['International airfare to Delhi', 'Personal donations / offerings at monasteries'],
    imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Delhi & Fly to Varanasi',
        description: 'Board flight from Delhi to Varanasi. Transfer to hotel. Evening witness the majestic Ganga Aarti ceremony performed by priests with brass lamps at Dashashwamedh Ghat.',
        stayCity: 'Varanasi'
      },
      {
        day: 2,
        title: 'Sunrise Ganges Boat Ride – Sarnath – Bodhgaya',
        description: 'Dawn boat ride on river Ganges. Visit Sarnath Deer Park and Dhamek Stupa where Buddha turned the Wheel of Law. Drive to Bodhgaya (5 hrs).',
        stayCity: 'Bodhgaya'
      },
      {
        day: 3,
        title: 'Sacred Bodhgaya & Mahabodhi Temple',
        description: 'Full day devotional meditation at Mahabodhi Temple complex and the Vajrasana (Diamond Throne) beneath the Bodhi Tree. Visit Japanese, Thai, and Bhutanese monasteries.',
        stayCity: 'Bodhgaya'
      },
      {
        day: 4,
        title: 'Bodhgaya – Rajgir – Nalanda – Patna',
        description: 'Ascend Gridhakuta Peak via aerial ropeway in Rajgir. Visit Nalanda University archaeological ruins, the premier monastic seat of learning from 5th century CE. Overnight in Patna.',
        stayCity: 'Patna'
      },
      {
        day: 5,
        title: 'Patna – Vaishali – Kushinagar',
        description: 'Drive via Vaishali, site of the Second Buddhist Council and Ashoka Pillar. Arrive at Kushinagar, site of Buddha’s final Mahaparinirvana.',
        stayCity: 'Kushinagar'
      },
      {
        day: 6,
        title: 'Kushinagar to Lumbini (Birthplace of Buddha)',
        description: 'Pay homage at the Reclining Buddha statue and Rambhar Stupa. Cross Indo-Nepal border into Lumbini. Visit sacred Maya Devi Temple and Ashokan pillar.',
        stayCity: 'Lumbini'
      },
      {
        day: 7,
        title: 'Lumbini – Sravasti',
        description: 'Drive to Sravasti (Jetavana Monastery), where Lord Buddha spent 24 monsoon retreats and performed the Twin Miracle. Visit Anathapindika Stupa.',
        stayCity: 'Sravasti'
      },
      {
        day: 8,
        title: 'Sravasti to Lucknow & Return to Delhi',
        description: 'Drive to Lucknow Airport (3 hrs) for afternoon flight back to New Delhi. Pilgrimage concludes.',
        stayCity: 'Return to Delhi'
      }
    ]
  },
  {
    id: 'itdc-golden-triangle-royal',
    title: 'Incredible India Heritage Golden Triangle',
    subtitle: 'Delhi – Agra – Fatehpur Sikri – Jaipur with Ashok Hospitality',
    category: 'heritage',
    categoryLabel: 'Heritage Circuit',
    duration: '6 Days / 5 Nights',
    nights: 5,
    days: 6,
    startingPrice: 24500,
    rating: 4.93,
    reviewsCount: 680,
    overview: 'Experience the national hospitality of India Tourism Development Corporation. Includes stays at premium properties, authorized national storytellers, and priority monument entries across the legendary heritage axis.',
    highlights: [
      'Taj Mahal sunrise exploration with Senior Archaeological Survey certified guide',
      'Agra Fort & Akbar’s mausoleum at Sikandra',
      'Amber Fort with royal elephant escort and private Sheesh Mahal access',
      'National Museum and Rashtrapati Bhavan private precinct tour in New Delhi',
      'Special dinner at ITDC Samavar Restaurant'
    ],
    destinationsCovered: ['Delhi', 'Agra', 'Fatehpur Sikri', 'Jaipur'],
    inclusions: [
      '5 Nights accommodation in ITDC Ashok / Heritage hotels',
      'Breakfast and 3-course dinners included daily',
      'Executive Chauffeur driven AC luxury vehicle throughout',
      'All monument tickets and guide fees pre-arranged'
    ],
    exclusions: ['Airfare/train fare to Delhi', 'Personal laundry and tips'],
    imageUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=80',
    itinerary: [
      {
        day: 1,
        title: 'Capital Welcome & Historic Delhi',
        description: 'Welcome reception at The Ashok Hotel, Chanakyapuri. Visit Qutub Minar and Humayun’s Tomb. Drive along Central Vista.',
        stayCity: 'New Delhi'
      },
      {
        day: 2,
        title: 'Delhi to Agra & Agra Fort',
        description: 'Executive drive via Yamuna Expressway. Check-in at Agra hotel. Guided exploration of Agra Fort and sunset over the Taj from Mehtab Bagh.',
        stayCity: 'Agra'
      },
      {
        day: 3,
        title: 'Taj Mahal at Sunrise – Fatehpur Sikri – Jaipur',
        description: 'Mesmerizing dawn tour of Taj Mahal. Drive to Jaipur stopping at Emperor Akbar’s Fatehpur Sikri and Buland Darwaza.',
        stayCity: 'Jaipur'
      },
      {
        day: 4,
        title: 'Royal Jaipur Citadel & Jantar Mantar',
        description: 'Ascend to Amber Fort, visit Jal Mahal, City Palace, and Jantar Mantar UNESCO astronomical observatory.',
        stayCity: 'Jaipur'
      },
      {
        day: 5,
        title: 'Crafts of Rajasthan & Nahargarh Sunset',
        description: 'Visit traditional gem-cutting, blue pottery, and textile ateliers. Sunset tea at Nahargarh Fort.',
        stayCity: 'Jaipur'
      },
      {
        day: 6,
        title: 'Jaipur to Delhi & Official Departure',
        description: 'Return drive to New Delhi. Drop at IGI Airport or New Delhi Railway Station.',
        stayCity: 'Return Home'
      }
    ]
  },
  {
    id: 'itdc-palace-on-wheels',
    title: 'Palace on Wheels: Regal Rail Journey',
    subtitle: '7 Nights Luxury Train Voyage Across Royal Rajasthan',
    category: 'luxury-train',
    categoryLabel: 'Luxury Rail Tours',
    duration: '8 Days / 7 Nights',
    nights: 7,
    days: 8,
    startingPrice: 385000,
    rating: 4.99,
    reviewsCount: 310,
    overview: 'Ashok Travels & Tours is an official ticketing partner for the world’s premier luxury train. Travel like a maharaja in a private saloon cabin equipped with personal attendants (khitmatgars), dining cars, and royal off-train excursions.',
    highlights: [
      '7 Nights aboard the world-renowned Palace on Wheels in Deluxe Saloon',
      'All meals, off-train excursions, and monument entries included',
      'Itinerary: Delhi – Jaipur – Ranthambore – Chittorgarh – Udaipur – Jaisalmer – Jodhpur – Bharatpur – Agra – Delhi',
      'Jeep Safari in Ranthambore National Park tiger reserve',
      'Gala royal reception with Shehnai and garlands at every station'
    ],
    destinationsCovered: ['Delhi', 'Jaipur', 'Ranthambore', 'Chittorgarh', 'Udaipur', 'Jaisalmer', 'Jodhpur', 'Bharatpur', 'Agra'],
    inclusions: [
      'Accommodation in air-conditioned deluxe cabins with en-suite bathrooms',
      'All meals on board and during off-train palace excursions',
      'All sightseeing tours in private AC coaches with English speaking guides',
      'Entrance fees, camel rides in Jaisalmer, and jungle safaris'
    ],
    exclusions: ['Alcoholic beverages, spa services on board, gratuities'],
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80',
    itinerary: [
      {
        day: 1,
        title: 'Boarding at Safdarjung Railway Station, New Delhi',
        description: 'Check-in and traditional ceremonial welcome at Safdarjung station. Train departs for Jaipur.',
        stayCity: 'Onboard Palace on Wheels'
      },
      {
        day: 2,
        title: 'Jaipur – The Pink City',
        description: 'Royal breakfast on board. Excursion to Amber Fort, Hawa Mahal, and City Palace. Lunch at a heritage palace hotel.',
        stayCity: 'Onboard Palace on Wheels'
      },
      {
        day: 3,
        title: 'Ranthambore Tiger Sanctuary & Chittorgarh Fort',
        description: 'Early morning game drive in Ranthambore National Park. Afternoon visit to the massive battlements of Chittorgarh Fort.',
        stayCity: 'Onboard Palace on Wheels'
      },
      {
        day: 4,
        title: 'Udaipur – City of Lakes',
        description: 'Explore City Palace, Jagdish Temple, and cruise on serene Lake Pichola.',
        stayCity: 'Onboard Palace on Wheels'
      },
      {
        day: 5,
        title: 'Jaisalmer – The Golden Citadel',
        description: 'Visit Jaisalmer Fort, Patwon Ki Haveli, and evening camel ride at Sam Sand Dunes with sunset champagne.',
        stayCity: 'Onboard Palace on Wheels'
      },
      {
        day: 6,
        title: 'Jodhpur – The Sun City',
        description: 'Tour Mehrangarh Fort, Jaswant Thada, and Umaid Bhawan Palace Museum.',
        stayCity: 'Onboard Palace on Wheels'
      },
      {
        day: 7,
        title: 'Bharatpur Bird Sanctuary & Agra Taj Mahal',
        description: 'Morning bird watching at Keoladeo Ghana National Park. Afternoon visit to the Taj Mahal and Agra Fort.',
        stayCity: 'Onboard Palace on Wheels'
      },
      {
        day: 8,
        title: 'Return to New Delhi Safdarjung Station',
        description: 'Breakfast on board as the train pulls into Safdarjung Railway Station. Journey concludes.',
        stayCity: 'Delhi'
      }
    ]
  }
];

export const ITDC_TRAVELS_WEBSITE: BusinessWebsite = {
  id: 'itdc-travels',
  slug: 'itdc-travels',
  businessName: 'Ashok Travels & Tours (ITDC)',
  category: 'tour_travel' as any,
  templateId: 'itdc-travels',
  tagline: 'Official Travel Arm of India Tourism Development Corporation · Govt. of India Enterprise',
  description: 'Ashok Travels & Tours (ATT), the travel division of ITDC under the Ministry of Tourism, is India’s foremost government-owned tour operator. Official Travel Partner of Team India at the Paris Olympics, offering domestic & international ticketing, heritage circuits, luxury coaches, and institutional MICE services.',
  ownerName: 'India Tourism Development Corporation (ITDC)',
  phone: '+91 11 2430 7535',
  whatsapp: '+91 98110 55220',
  email: 'attairtickets@itdc.co.in',
  address: 'Scope Complex, Core 8, 6th Floor, 7 Lodhi Road & The Ashok Hotel, Chanakyapuri',
  city: 'New Delhi',
  mapsUrl: 'https://maps.google.com/?q=ITDC+Scope+Complex+Lodhi+Road+New+Delhi',
  openingHours: 'Mon - Fri: 9:30 AM – 6:00 PM (Emergency Flight Support 24x7)',
  coverUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#0F2850',
  secondaryColor: '#C59B27',
  fontFamily: 'Inter',
  bookingType: 'appointment_consult' as any,
  bookingCtaLabel: 'Official Booking Enquiry',
  specialBadge: 'Govt. of India Enterprise',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 19999,
  paymentStatus: 'paid',
  offers: [],
  gallery: [],
  items: ITDC_PACKAGES.map(pkg => ({
    id: pkg.id,
    name: pkg.title,
    description: pkg.subtitle,
    price: pkg.startingPrice,
    discountPrice: pkg.startingPrice,
    category: pkg.categoryLabel,
    isAvailable: true,
    badge: pkg.duration
  })),
  sections: [
    { id: 'hero', title: 'Portal Home', isEnabled: true, order: 1 },
    { id: 'mandate', title: 'Official Mandate', isEnabled: true, order: 2 },
    { id: 'packages', title: 'Curated Heritage Tours', isEnabled: true, order: 3 },
    { id: 'services', title: 'Air Ticketing & MICE', isEnabled: true, order: 4 },
    { id: 'transport', title: 'Ashok Transport Fleet', isEnabled: true, order: 5 },
    { id: 'contact', title: 'Government & Public Desks', isEnabled: true, order: 6 }
  ],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
