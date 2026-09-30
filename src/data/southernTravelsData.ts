import { BusinessWebsite } from '../types';

export interface SouthernTourPackage {
  id: string;
  title: string;
  subtitle: string;
  category: 'domestic' | 'international' | 'day-tour' | 'pilgrimage';
  categoryLabel: string;
  duration: string;
  nights: number;
  days: number;
  startingPrice: number;
  originalPrice: number;
  departureCity: string;
  rating: number;
  reviewsCount: number;
  overview: string;
  highlights: string[];
  destinationsCovered: string[];
  inclusions: string[];
  exclusions: string[];
  imageUrl: string;
  galleryImages: string[];
  departureDates: string[];
  itinerary: Array<{
    day: number;
    title: string;
    description: string;
    stayCity: string;
    meals: string;
  }>;
}

export const SOUTHERN_PACKAGES: SouthernTourPackage[] = [
  {
    id: 'delhi-sightseeing-1d',
    title: 'Delhi City Explorer Tour',
    subtitle: '1-Day Grand Capital Sightseeing with Guide & AC Coach',
    category: 'day-tour',
    categoryLabel: 'Delhi Local Tours',
    duration: '1 Day',
    nights: 0,
    days: 1,
    startingPrice: 999,
    originalPrice: 1499,
    departureCity: 'New Delhi (Brandstore Connaught Place)',
    rating: 4.9,
    reviewsCount: 1420,
    overview: 'The signature daily Delhi tour operating continuously for over 50 years. Visit the historic monuments of Old and New Delhi with a government-approved tour guide, sanitized AC coach, and pre-arranged monument queue assistance.',
    highlights: [
      'Lotus Temple (Bahai House of Worship)',
      'UNESCO World Heritage Qutub Minar complex',
      'Drive past Rashtrapati Bhavan, Parliament House & India Gate',
      'Historic Red Fort & Rajghat Memorial of Mahatma Gandhi',
      'Air-conditioned 2x2 luxury coach with professional English/Hindi guide'
    ],
    destinationsCovered: ['Old Delhi', 'New Delhi', 'Connaught Place'],
    inclusions: [
      'AC Luxury Coach transportation with professional driver',
      'Services of certified English & Hindi speaking guide',
      'All toll taxes, parking, and driver allowances',
      'Complimentary packaged drinking water'
    ],
    exclusions: [
      'Monument entrance tickets',
      'Lunch and snacks at approved food court',
      'Personal expenses & camera fees'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1592635196078-9fe3d54f2377?auto=format&fit=crop&w=800&q=80'
    ],
    departureDates: ['Daily Departures at 8:30 AM'],
    itinerary: [
      {
        day: 1,
        title: 'Full Day Capital Heritage & Modern Landmarks',
        description: 'Morning boarding at Southern Travels Brandstore (Connaught Place). Proceed to Lotus Temple for quiet reflection. Head to Qutub Minar, the 73-meter minaret built in 1193. Panoramic drive along Rajpath passing India Gate, Parliament House, and Rashtrapati Bhavan. Stop for lunch at Janpath. Afternoon visit to Gandhi Smriti and Rajghat. End the day with a view of the majestic Red Fort and drop back at Connaught Place by 6:00 PM.',
        stayCity: 'New Delhi',
        meals: 'Bottled Mineral Water included'
      }
    ]
  },
  {
    id: 'golden-triangle-southern-6d',
    title: 'Splendors of Golden Triangle',
    subtitle: 'Delhi – Agra – Fatehpur Sikri – Jaipur – New Delhi',
    category: 'domestic',
    categoryLabel: 'Domestic Tour Packages',
    duration: '6 Days / 5 Nights',
    nights: 5,
    days: 6,
    startingPrice: 18999,
    originalPrice: 24999,
    departureCity: 'New Delhi Brandstore',
    rating: 4.95,
    reviewsCount: 890,
    overview: 'Our flagship North India tour connecting three iconic heritage cities. Marvel at the Taj Mahal at dawn, explore the Mughal Citadel in Agra, and immerse yourself in the royal pink palaces and Amber Fort of Jaipur.',
    highlights: [
      'Sunrise visit to the iconic Taj Mahal with private guide',
      'Jeep/Elephant ascent to Amber Fort in Jaipur',
      'Agra Fort, Itmad-ud-Daulah, and ghost city of Fatehpur Sikri',
      'City Palace, Jantar Mantar observatory, and Hawa Mahal photo stop',
      '5 Nights stay in handpicked 4-star heritage & luxury hotels'
    ],
    destinationsCovered: ['Delhi', 'Agra', 'Fatehpur Sikri', 'Jaipur'],
    inclusions: [
      '5 Nights accommodation in 4-Star hotels with daily breakfast',
      'Private AC Sedan / Innova vehicle throughout with all tolls and permits',
      'Authorized multi-lingual local monument guides',
      'Chokhi Dhani ethnic Rajasthani cultural dinner experience in Jaipur'
    ],
    exclusions: ['Airfare/train fare to Delhi', 'Monument entry tickets', 'Lunches & personal shopping'],
    imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80'
    ],
    departureDates: ['Every Tuesday & Saturday', 'Custom dates on request'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Delhi & Heritage Highlights',
        description: 'Welcome greeting at New Delhi airport/railway station by Southern Travels chauffeur. Check-in to hotel. Afternoon tour of Qutub Minar and drive past India Gate. Evening welcome briefing at Connaught Place Brandstore.',
        stayCity: 'Delhi',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Delhi to Agra via Yamuna Expressway & Agra Fort',
        description: 'Smooth morning drive on Yamuna Expressway (3.5 hrs). Check-in at Agra hotel. Afternoon guided exploration of Agra Fort and sunset view of Taj Mahal from Mehtab Bagh across the Yamuna River.',
        stayCity: 'Agra',
        meals: 'Breakfast'
      },
      {
        day: 3,
        title: 'Sunrise at Taj Mahal – Fatehpur Sikri – Jaipur',
        description: 'Early morning mesmerizing sunrise tour of the Taj Mahal. Return to hotel for breakfast. Drive towards Jaipur with an en-route stop at Emperor Akbar’s abandoned red sandstone capital, Fatehpur Sikri.',
        stayCity: 'Jaipur',
        meals: 'Breakfast'
      },
      {
        day: 4,
        title: 'Royal Jaipur Citadel & Palaces',
        description: 'Full day sightseeing of Jaipur. Ascend Amber Fort on elephant back/jeep. Visit Jal Mahal, City Palace complex, and the astronomical Jantar Mantar. Evening visit to Johari Bazaar.',
        stayCity: 'Jaipur',
        meals: 'Breakfast & Rajasthani Dinner'
      },
      {
        day: 5,
        title: 'Nahargarh Fort Panorama & Cultural Crafts',
        description: 'Morning visit to Nahargarh Fort overlooking the Pink City. Afternoon visit to traditional block printing and blue pottery artisans in Sanganer.',
        stayCity: 'Jaipur',
        meals: 'Breakfast'
      },
      {
        day: 6,
        title: 'Jaipur to New Delhi & Tour Conclusion',
        description: 'Leisurely breakfast and drive back to New Delhi via the new expressway (4 hours). Drop-off at New Delhi Brandstore / Airport for onward flight.',
        stayCity: 'Return Home',
        meals: 'Breakfast'
      }
    ]
  },
  {
    id: 'kashmir-paradise-6d',
    title: 'Kashmir: Paradise on Earth',
    subtitle: 'Srinagar – Gulmarg – Pahalgam – Sonamarg – Dal Lake Houseboat',
    category: 'domestic',
    categoryLabel: 'Domestic Tour Packages',
    duration: '6 Days / 5 Nights',
    nights: 5,
    days: 6,
    startingPrice: 22999,
    originalPrice: 29999,
    departureCity: 'Ex Srinagar (Delhi Connections Available)',
    rating: 4.92,
    reviewsCount: 670,
    overview: 'Glide through misty waters on a traditional Shikara, stay in an intricately carved cedarwood Dal Lake Houseboat, and ascend the snowfields of Gulmarg via the world’s second-highest cable car.',
    highlights: [
      '1 Night in Deluxe Heritage Houseboat on Dal Lake with Shikara ride',
      'Gondola Cable Car ride to Phase 1 & 2 in snow-clad Gulmarg',
      'Pahalgam Valley of Shepherds, Betaab Valley & Aru Valley excursion',
      'Mughal Gardens: Shalimar Bagh, Nishat Bagh & Chashme Shahi',
      'Dedicated private heating-equipped vehicle throughout'
    ],
    destinationsCovered: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Sonamarg'],
    inclusions: [
      '4 Nights Hotel + 1 Night Super Deluxe Houseboat',
      'Daily Breakfast and Gourmet Kashmiri Wazwan / Indian Dinner',
      '1 Hour complimentary Shikara ride on Dal Lake',
      'All surface transport by sanitized private Scorpio / Innova'
    ],
    exclusions: ['Airfare to Srinagar', 'Gondola tickets', 'Pony / horse rides in Pahalgam'],
    imageUrl: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
    ],
    departureDates: ['Departures every Monday, Thursday & Sunday'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Srinagar & Dal Lake Shikara',
        description: 'Meet and greet at Srinagar Airport. Transfer to Dal Lake Houseboat. Relax with Kashmiri Kahwa. Evening romantic Shikara boat ride across floating gardens and Char Chinar.',
        stayCity: 'Srinagar (Houseboat)',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Srinagar to Gulmarg Meadow of Flowers',
        description: 'Drive to Gulmarg (2 hrs). Board the famous Gulmarg Gondola taking you above 13,000 ft to Apharwat Peak. Experience snow sledding and pine valley vistas.',
        stayCity: 'Gulmarg',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 3,
        title: 'Gulmarg to Pahalgam Valley of Shepherds',
        description: 'Scenic transfer along saffron fields of Pampore and walnut orchards to Pahalgam. Check-in along the Lidder River. Stroll around local pine forest trails.',
        stayCity: 'Pahalgam',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 4,
        title: 'Betaab Valley & Chandanwari Exploration',
        description: 'Visit Betaab Valley, Aru Valley, and Chandanwari, the starting point of Amarnath Yatra. Relax beside rushing glacier-fed streams.',
        stayCity: 'Pahalgam',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 5,
        title: 'Pahalgam to Srinagar & Mughal Gardens',
        description: 'Return to Srinagar. Visit the world-famous Nishat Bagh (Garden of Pleasure) and Shalimar Bagh (Abode of Love) built by Mughal Emperor Jahangir. Explore Old City copperware bazaars.',
        stayCity: 'Srinagar',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 6,
        title: 'Departure from Srinagar',
        description: 'After breakfast, transfer to Srinagar Airport with sweet memories of the valley.',
        stayCity: 'Return Home',
        meals: 'Breakfast'
      }
    ]
  },
  {
    id: 'europe-discovery-11d',
    title: 'Glimpse of Europe Grand Tour',
    subtitle: 'France – Switzerland – Italy – Vatican City – 11 Days Escorted Group',
    category: 'international',
    categoryLabel: 'International Holiday Packages',
    duration: '11 Days / 10 Nights',
    nights: 10,
    days: 11,
    startingPrice: 189999,
    originalPrice: 225000,
    departureCity: 'Ex New Delhi IGI Airport (Flights Included)',
    rating: 4.96,
    reviewsCount: 520,
    overview: 'Southern Travels most celebrated international group journey. Led by an experienced Indian Tour Manager, featuring delicious hot Indian meals prepared by our onboard culinary chefs across Europe.',
    highlights: [
      'Paris: Eiffel Tower Level 2 ascent & romantic Seine River cruise',
      'Switzerland: Mount Titlis revolving Rotair cable car with Glacier Cave',
      'Lucerne: Lion Monument, Chapel Bridge, and Lake Lucerne cruise',
      'Venice: Private vaporetto boat ride to St. Mark’s Square & Murano glass demo',
      'Rome & Vatican City: St. Peter’s Basilica, Colosseum exterior & Trevi Fountain',
      'Daily freshly prepared Indian vegetarian & non-vegetarian dinners'
    ],
    destinationsCovered: ['Paris', 'Zurich', 'Lucerne', 'Mount Titlis', 'Innsbruck', 'Venice', 'Florence', 'Rome', 'Vatican City'],
    inclusions: [
      'Round-trip international flights from New Delhi on premier airlines',
      '10 Nights in 4-Star hotels with continental breakfast',
      'Daily Indian Lunches and Dinners by Southern Travels traveling chefs',
      'All transfers in long-distance Euro 6 Mercedes/Setra luxury coach',
      'Experienced Indian Tour Manager assisting from Delhi airport to finish',
      'Schengen Visa guidance and international travel insurance'
    ],
    exclusions: ['Schengen visa stamping fee payable at VFS', 'Porterage and personal tips'],
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80'
    ],
    departureDates: ['Fixed Group Departures: 10th & 24th of each month'],
    itinerary: [
      {
        day: 1,
        title: 'New Delhi to Paris – The City of Lights',
        description: 'Board your flight from New Delhi IGI Airport. Land at Paris Charles de Gaulle. Warm reception by Southern Travels Tour Director. Evening romantic cruise on the River Seine.',
        stayCity: 'Paris',
        meals: 'Indian Dinner'
      },
      {
        day: 2,
        title: 'Paris City Tour & Eiffel Tower 2nd Floor',
        description: 'Ascend to the 2nd Floor of Eiffel Tower for panoramic city vistas. City tour including Arc de Triomphe, Champs-Élysées, Place de la Concorde, and Louvre exterior.',
        stayCity: 'Paris',
        meals: 'Breakfast, Lunch & Indian Dinner'
      },
      {
        day: 3,
        title: 'Paris to Central Switzerland Scenic Drive',
        description: 'Scenic coach drive past the Burgundy wine country into the majestic Swiss Confederation. Check-in to alpine hotel.',
        stayCity: 'Central Switzerland',
        meals: 'Breakfast, Lunch & Indian Dinner'
      },
      {
        day: 4,
        title: 'Mount Titlis Snow Mountain & Lucerne',
        description: 'World’s first revolving cable car, Titlis Rotair. Experience the Glacier Cave and Cliff Walk at 10,000 ft. Afternoon orientation tour of Lucerne with Chapel Bridge and Lion Monument.',
        stayCity: 'Central Switzerland',
        meals: 'Breakfast, Lunch at Titlis & Dinner'
      },
      {
        day: 5,
        title: 'Rhine Falls – Liechtenstein – Innsbruck',
        description: 'View Europe’s largest plain waterfall, the Rhine Falls. Drive through the Principality of Liechtenstein to Innsbruck, Austria. Visit Golden Roof and Swarovski Crystal Worlds.',
        stayCity: 'Innsbruck',
        meals: 'Breakfast, Lunch & Indian Dinner'
      },
      {
        day: 6,
        title: 'Innsbruck to Floating City of Venice',
        description: 'Cross the Brenner Pass into Italy. Board private water taxi to St. Mark’s Square in Venice. See Doge’s Palace and Bridge of Sighs.',
        stayCity: 'Padua / Venice',
        meals: 'Breakfast, Lunch & Indian Dinner'
      },
      {
        day: 7,
        title: 'Venice to Florence & Leaning Tower of Pisa',
        description: 'Visit Pisa to marvel at the Miracle Square and the world-famous Leaning Tower. Proceed to Florence, the cradle of the Renaissance.',
        stayCity: 'Tuscany / Arezzo',
        meals: 'Breakfast, Lunch & Indian Dinner'
      },
      {
        day: 8,
        title: 'Imperial Rome & Vatican City',
        description: 'Guided tour of the Vatican, including St. Peter’s Basilica. See the Colosseum exterior, Roman Forum, and toss a coin in the Trevi Fountain.',
        stayCity: 'Rome',
        meals: 'Breakfast, Lunch & Indian Dinner'
      },
      {
        day: 9,
        title: 'Rome Leisure & Departure Preparations',
        description: 'Enjoy free time for Italian leather shopping and espresso in Piazza Navona. Farewell gala dinner with wine.',
        stayCity: 'Rome',
        meals: 'Breakfast & Gala Dinner'
      },
      {
        day: 10,
        title: 'Rome Fiumicino to New Delhi',
        description: 'Transfer to Rome Airport for flight back to New Delhi.',
        stayCity: 'Flight',
        meals: 'Breakfast'
      },
      {
        day: 11,
        title: 'Arrival in New Delhi',
        description: 'Touch down at New Delhi IGI Airport with cherished memories of your grand European journey.',
        stayCity: 'Home',
        meals: 'In-Flight'
      }
    ]
  },
  {
    id: 'dubai-abu-dhabi-6d',
    title: 'Best of Dubai & Abu Dhabi with Desert Safari',
    subtitle: 'Burj Khalifa 124th Floor – Desert Safari with BBQ – BAPS Hindu Mandir',
    category: 'international',
    categoryLabel: 'International Holiday Packages',
    duration: '6 Days / 5 Nights',
    nights: 5,
    days: 6,
    startingPrice: 58999,
    originalPrice: 72000,
    departureCity: 'New Delhi Direct Flights',
    rating: 4.9,
    reviewsCount: 810,
    overview: 'From glittering hyper-modern skylines to thrilling desert dunes and the monumental BAPS Hindu Temple in Abu Dhabi. Complete with 5-star desert safari and dhow cruise.',
    highlights: [
      'Burj Khalifa 124th & 125th Floor Observatory entry at non-prime hours',
      '4x4 Dune Bashing Desert Safari with Belly Dance & Tanoura BBQ dinner',
      'Marina Dhow Cruise with international buffet dinner',
      'Abu Dhabi full day tour: Sheikh Zayed Grand Mosque & BAPS Hindu Mandir',
      'Miracle Garden & Global Village seasonal passes included'
    ],
    destinationsCovered: ['Dubai', 'Abu Dhabi', 'Sharjah'],
    inclusions: [
      'Direct return flights from New Delhi with 30kg baggage',
      '5 Nights in 4-Star deluxe Dubai city hotel with daily breakfast',
      'UAE Tourist Visa and COVID/Travel insurance',
      'All tours and sightseeing in luxury AC coaches with Indian guide'
    ],
    exclusions: ['Dubai Tourism Dirham fee ($4/night)', 'Personal shopping and optional water sports'],
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80'
    ],
    departureDates: ['Departures every Wednesday and Saturday from Delhi'],
    itinerary: [
      {
        day: 1,
        title: 'New Delhi to Dubai & Marina Dhow Cruise',
        description: 'Fly from Delhi to Dubai. Private airport transfer to hotel. Evening luxury Marina Dhow Cruise with buffet dining and Tanoura dance performance.',
        stayCity: 'Dubai',
        meals: 'Dinner on Cruise'
      },
      {
        day: 2,
        title: 'Dubai City Tour & Burj Khalifa Observatory',
        description: 'Half-day city tour covering Dubai Frame, Palm Jumeirah photo stop at Atlantis, and Dubai Mall. Ascend to Burj Khalifa 124th floor for 360-degree vistas.',
        stayCity: 'Dubai',
        meals: 'Breakfast'
      },
      {
        day: 3,
        title: 'Thrilling 4x4 Desert Safari & Bedouin Camp',
        description: 'Morning at leisure. Afternoon 4x4 Land Cruiser pickup for dune bashing in red desert dunes. Sunset photography, camel rides, henna painting, and BBQ buffet with fire show.',
        stayCity: 'Dubai',
        meals: 'Breakfast & BBQ Dinner'
      },
      {
        day: 4,
        title: 'Abu Dhabi Grand Tour & BAPS Hindu Mandir',
        description: 'Full day excursion to UAE capital. Marvel at Sheikh Zayed Grand Mosque with pure white marble domes. Visit the newly consecrated stone BAPS Hindu Mandir. Drive past Emirates Palace.',
        stayCity: 'Dubai',
        meals: 'Breakfast'
      },
      {
        day: 5,
        title: 'Miracle Garden & Global Village',
        description: 'Visit the world’s largest natural flower garden with 150 million blooms. Evening visit to Global Village exploring pavilions from 90+ countries.',
        stayCity: 'Dubai',
        meals: 'Breakfast'
      },
      {
        day: 6,
        title: 'Departure to New Delhi',
        description: 'Morning duty-free shopping at Deira Gold Souk. Afternoon transfer to Dubai Airport for return flight to Delhi.',
        stayCity: 'Return Home',
        meals: 'Breakfast'
      }
    ]
  },
  {
    id: 'south-india-kerala-7d',
    title: 'Kerala: God’s Own Country Experience',
    subtitle: 'Cochin – Munnar Tea Gardens – Thekkady Wildlife – Alleppey Backwaters Houseboat',
    category: 'domestic',
    categoryLabel: 'Domestic Tour Packages',
    duration: '7 Days / 6 Nights',
    nights: 6,
    days: 7,
    startingPrice: 19999,
    originalPrice: 26500,
    departureCity: 'Ex Cochin (Flight connectivity from Delhi)',
    rating: 4.88,
    reviewsCount: 740,
    overview: 'Inhale fresh cardamom and tea-scented mountain air in Munnar, spot elephants at Periyar Lake sanctuary, and drift along tranquil palm-fringed backwaters aboard a luxury thatched Kettuvallam houseboat.',
    highlights: [
      '2 Nights in Munnar mist hills with tea plantation visit & factory tour',
      'Thekkady spice plantation tour & Kathakali classical dance show',
      'Private 1-Night cruise on traditional thatched Alleppey Houseboat',
      'Historic Cochin Jewish Synagogue, Dutch Palace & Chinese Fishing Nets',
      'Authentic Kerala Sadya meals served on banana leaf'
    ],
    destinationsCovered: ['Cochin', 'Munnar', 'Thekkady', 'Alleppey Backwaters'],
    inclusions: [
      '5 Nights Deluxe Hotels + 1 Night Private AC Houseboat',
      'All meals on Houseboat (Lunch, Evening Snack, Dinner, Breakfast)',
      'Dedicated AC Sedan / Innova throughout with fuel and driver bhatta',
      'Spice plantation guided walk with botanist'
    ],
    exclusions: ['Airfare to Cochin', 'Boat safari ticket at Periyar', 'Ayurvedic massage sessions'],
    imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80'
    ],
    departureDates: ['Departures every Wednesday & Saturday'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Cochin & Drive to Munnar Hills',
        description: 'Meet Southern Travels escort at Cochin Airport. Drive through Cheeyappara and Valara waterfalls to Munnar (4 hrs). Check in at hill resort.',
        stayCity: 'Munnar',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Munnar Tea Estates & Eravikulam National Park',
        description: 'Morning visit to Eravikulam National Park, home of the endangered Nilgiri Tahr mountain goat. Visit Tata Tea Museum and Mattupetty Dam.',
        stayCity: 'Munnar',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 3,
        title: 'Munnar to Thekkady (Periyar Wildlife)',
        description: 'Drive along the Western Ghats to Thekkady. Afternoon guided spice plantation walk smelling cardamom, clove, cinnamon, and pepper vines. Evening Kathakali performance.',
        stayCity: 'Thekkady',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 4,
        title: 'Thekkady to Alleppey Houseboat Backwaters',
        description: 'Drive to Alleppey jetty. Board your private luxury houseboat at 12:00 PM. Cruise through canals, paddy fields, and lagoons with freshly caught fish/vegetarian delicacies cooked onboard.',
        stayCity: 'Alleppey (Houseboat)',
        meals: 'Breakfast, Lunch & Dinner'
      },
      {
        day: 5,
        title: 'Alleppey to Cochin Heritage',
        description: 'Disembark after breakfast. Drive to Fort Cochin. See Chinese Fishing Nets, St. Francis Church (Vasco da Gama’s burial site), and Jew Town spice markets.',
        stayCity: 'Cochin',
        meals: 'Breakfast'
      },
      {
        day: 6,
        title: 'Cherai Beach & Sunset Leisure',
        description: 'Excursion to Cherai Beach where backwaters meet the Arabian Sea. Enjoy dolphin spotting and coastal seafood.',
        stayCity: 'Cochin',
        meals: 'Breakfast'
      },
      {
        day: 7,
        title: 'Departure from Cochin',
        description: 'Transfer to Cochin International Airport for flight to Delhi or onward home.',
        stayCity: 'Return Home',
        meals: 'Breakfast'
      }
    ]
  }
];

export const SOUTHERN_TRAVELS_WEBSITE: BusinessWebsite = {
  id: 'southern-travels',
  slug: 'southern-travels',
  businessName: 'Southern Travels',
  category: 'tour_travel' as any,
  templateId: 'southern-travels',
  tagline: 'India’s Most Trusted Travel Brand Since 1970 · Over 1,500 Domestic & Global Tours',
  description: 'Southern Travels New Delhi Brandstore provides premium domestic and international holiday packages, daily Delhi city tours, customized itineraries, luxury coach charters, and flight ticketing with 50+ years of award-winning legacy.',
  ownerName: 'Southern Travels India Pvt Ltd',
  phone: '+91 11 4353 2000',
  whatsapp: '+91 98765 11001',
  email: 'delhi@southerntravelsindia.com',
  address: 'Southern Travels Brandstore, Scindia House, Janpath, Connaught Place',
  city: 'New Delhi',
  mapsUrl: 'https://maps.google.com/?q=Southern+Travels+Brandstore+Connaught+Place+New+Delhi',
  openingHours: 'Mon - Sun: 8:00 AM – 9:00 PM (24x7 Helpline Active)',
  coverUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#0B2545',
  secondaryColor: '#E67E22',
  fontFamily: 'Inter',
  bookingType: 'appointment_consult' as any,
  bookingCtaLabel: 'Enquire / Book Tour',
  specialBadge: '50+ Years Brandstore',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 9999,
  paymentStatus: 'paid',
  offers: [],
  gallery: [],
  items: SOUTHERN_PACKAGES.map(pkg => ({
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
    { id: 'hero', title: 'Home', isEnabled: true, order: 1 },
    { id: 'brandstore', title: 'Delhi Brandstore', isEnabled: true, order: 2 },
    { id: 'packages', title: 'Holiday Packages', isEnabled: true, order: 3 },
    { id: 'services', title: 'Travel Services', isEnabled: true, order: 4 },
    { id: 'legacy', title: 'About & Legacy', isEnabled: true, order: 5 },
    { id: 'contact', title: 'Contact & Branch', isEnabled: true, order: 6 }
  ],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
