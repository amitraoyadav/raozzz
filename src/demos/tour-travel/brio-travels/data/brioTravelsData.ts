import { BrioTourPackage, BrioVehicle, BrioBlogPost, BrioTestimonial } from './types';
import { DOMESTIC_PACKAGES } from './domesticPackages';
import { INTERNATIONAL_PACKAGES } from './internationalPackages';

export * from './types';
export * from './domesticPackages';
export * from './internationalPackages';

// 8 Distinct Most Popular Tours
export const POPULAR_TOURS: BrioTourPackage[] = [
  {
    id: 'pop-golden-triangle',
    slug: 'golden-triangle',
    title: 'Golden Triangle Classic Heritage Tour',
    subtitle: 'Delhi, Agra & Jaipur 5-Day Signature Royal Circuit',
    category: 'domestic',
    duration: '4 Nights / 5 Days',
    nights: 4,
    days: 5,
    startingPrice: 14999,
    originalPrice: 19999,
    rating: 5.0,
    reviewsCount: 680,
    coverImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'India’s most celebrated cultural journey linking the imperial capital Delhi, the monument of love Taj Mahal in Agra, and the pink fortresses of Jaipur.',
    highlights: ['Sunrise Taj Mahal & Agra Fort', 'Amber Fort with elephant/jeep ride in Jaipur', 'Hawa Mahal & City Palace', 'Chauffeur driven AC cab throughout'],
    inclusions: ['4 Nights 4-star hotel stay', 'Daily breakfast', 'Dedicated private car from Delhi', 'Guide services at monuments'],
    exclusions: ['Monument entrance fees', 'Lunch & dinner'],
    itinerary: DOMESTIC_PACKAGES.find(p => p.slug === 'golden-triangle')?.itinerary || []
  },
  {
    id: 'pop-kashmir-paradise',
    slug: 'kashmir',
    title: 'Kashmir Valley & Gulmarg Snow Meadows',
    subtitle: 'Srinagar Dal Lake Houseboat, Gondola & Pahalgam Lidder River',
    category: 'domestic',
    duration: '5 Nights / 6 Days',
    nights: 5,
    days: 6,
    startingPrice: 19499,
    originalPrice: 25999,
    rating: 5.0,
    reviewsCount: 890,
    coverImage: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80'],
    overview: 'Stay in carved cedar houseboats on Dal Lake, ride the Apharwat peak Gondola in Gulmarg, and stroll through saffron fields in Pahalgam.',
    highlights: ['Dal Lake Shikara ride & Houseboat night', 'Gulmarg snow Gondola cable car', 'Betaab Valley & Aru Valley in Pahalgam', 'Mughal Gardens in Srinagar'],
    inclusions: ['4N hotel + 1N luxury houseboat', 'Daily breakfast & dinner', 'Private non-sharing cab', 'Shikara cruise on Dal Lake'],
    exclusions: ['Gondola tickets', 'Pahalgam local union cabs'],
    itinerary: DOMESTIC_PACKAGES.find(p => p.slug === 'kashmir')?.itinerary || []
  },
  {
    id: 'pop-kerala-backwaters',
    slug: 'kerala',
    title: 'Exotic Kerala Backwaters & Tea Hills',
    subtitle: 'Munnar Mist Valleys, Thekkady Spices & Alleppey Houseboat',
    category: 'domestic',
    duration: '5 Nights / 6 Days',
    nights: 5,
    days: 6,
    startingPrice: 18999,
    originalPrice: 24999,
    rating: 4.9,
    reviewsCount: 620,
    coverImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80'],
    overview: 'Discover God’s Own Country with tea plantations in Munnar, wildlife in Periyar, and an overnight private houseboat cruise through Alleppey lagoons.',
    highlights: ['Private AC Houseboat overnight in Alleppey', 'Munnar Eravikulam National Park & tea museum', 'Periyar wildlife boat safari in Thekkady', 'Traditional Kerala banana leaf meals'],
    inclusions: ['4N resort + 1N luxury houseboat', 'All meals on houseboat + breakfast at hotels', 'Private AC vehicle from Cochin'],
    exclusions: ['Airfare to Cochin', 'Kathakali show tickets'],
    itinerary: DOMESTIC_PACKAGES.find(p => p.slug === 'kerala')?.itinerary || []
  },
  {
    id: 'pop-himachal-odyssey',
    slug: 'himachal-pradesh',
    title: 'Magical Himachal Odyssey (Shimla & Manali)',
    subtitle: 'Solang Valley Adventure, Atal Tunnel Lahaul & Kufri Pine Hills',
    category: 'domestic',
    duration: '5 Nights / 6 Days',
    nights: 5,
    days: 6,
    startingPrice: 15999,
    originalPrice: 20999,
    rating: 4.9,
    reviewsCount: 740,
    coverImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80'],
    overview: 'The definitive Himalayan holiday covering colonial Shimla, thrilling river rafting in Kullu, snow sports at Solang, and Atal Tunnel into Lahaul.',
    highlights: ['Solang Valley snow activities & paragliding', 'Atal Tunnel crossing to Sissu', 'Hadimba Temple & Vashisht hot springs', 'Kufri pine woods & Mall Road Ridge'],
    inclusions: ['5 Nights hotel stays (2N Shimla + 3N Manali)', 'Daily breakfast & dinner', 'Private AC cab from Delhi NCR'],
    exclusions: ['Rohtang pass taxi', 'Adventure equipment charges'],
    itinerary: DOMESTIC_PACKAGES.find(p => p.slug === 'himachal-pradesh')?.itinerary || []
  },
  {
    id: 'pop-rajasthan-royal',
    slug: 'rajasthan',
    title: 'Royal Rajasthan Heritage Circuit',
    subtitle: 'Jaipur Pink City, Jodhpur Blue Fort & Udaipur Lake Palaces',
    category: 'domestic',
    duration: '6 Nights / 7 Days',
    nights: 6,
    days: 7,
    startingPrice: 22499,
    originalPrice: 28999,
    rating: 5.0,
    reviewsCount: 710,
    coverImage: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80'],
    overview: 'The grandeur of princely India. Discover the mirror palace of Amber, towering Mehrangarh Fort in Jodhpur, and boat rides on Lake Pichola in Udaipur.',
    highlights: ['Amber Fort & Hawa Mahal in Jaipur', 'Mehrangarh Fort & Jaswant Thada in Jodhpur', 'Lake Pichola sunset boat ride in Udaipur', 'City Palace & Sahelion ki Bari'],
    inclusions: ['6 Nights in royal heritage hotels', 'Daily breakfast & dinner', 'Dedicated private AC sedan/SUV'],
    exclusions: ['Boat ride tickets in Udaipur', 'Monument entry fees'],
    itinerary: DOMESTIC_PACKAGES.find(p => p.slug === 'rajasthan')?.itinerary || []
  },
  {
    id: 'pop-andaman-island',
    slug: 'andaman',
    title: 'Enchanting Andaman Islands & Havelock Beach',
    subtitle: 'Radhanagar White Sand Beach, Cellular Jail & Neil Coral Bridge',
    category: 'domestic',
    duration: '5 Nights / 6 Days',
    nights: 5,
    days: 6,
    startingPrice: 24999,
    originalPrice: 31999,
    rating: 4.9,
    reviewsCount: 420,
    coverImage: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80'],
    overview: 'Turquoise waters and pristine beaches. Cruise on luxury catamarans to Havelock and Neil islands, witness stunning sunsets, and snorkel with corals.',
    highlights: ['Radhanagar Beach (Asia’s Best Beach)', 'Cellular Jail light & sound show', 'Makruzz / Nautika high-speed cruise transfers', 'Elephant Beach snorkeling excursion'],
    inclusions: ['5 Nights premium hotel/resort stay', 'Daily breakfast & dinner', 'Inter-island ferry tickets', 'Airport transfers & island cab'],
    exclusions: ['Airfare to Port Blair', 'Scuba diving & water sports'],
    itinerary: DOMESTIC_PACKAGES.find(p => p.slug === 'andaman')?.itinerary || []
  },
  {
    id: 'pop-dubai-extravaganza',
    slug: 'dubai',
    title: 'Dazzling Dubai & Abu Dhabi Extravaganza',
    subtitle: 'Burj Khalifa 124th Floor, 4x4 Desert Safari & Sheikh Zayed Mosque',
    category: 'international',
    duration: '4 Nights / 5 Days',
    nights: 4,
    days: 5,
    startingPrice: 39999,
    originalPrice: 49999,
    rating: 5.0,
    reviewsCount: 780,
    coverImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80'],
    overview: 'Futuristic luxury in the desert. Stand on top of the world at Burj Khalifa, cruise Dubai Marina, conquer sand dunes in a 4x4, and tour Abu Dhabi’s Grand Mosque.',
    highlights: ['Burj Khalifa 124th floor observation deck', '4x4 Desert Safari with BBQ dinner & belly dance', 'Dubai Marina Luxury Dhow Cruise', 'Abu Dhabi Sheikh Zayed Grand Mosque tour'],
    inclusions: ['4 Nights in 4-star city hotel', 'Daily breakfast & dinner', 'UAE Tourist Visa & OK to Board', 'All tours in AC coach'],
    exclusions: ['Tourism Dirham fee', 'Optional museum tickets'],
    itinerary: INTERNATIONAL_PACKAGES.find(p => p.slug === 'dubai')?.itinerary || []
  },
  {
    id: 'pop-bali-paradise',
    slug: 'indonesia-bali',
    title: 'Tropical Bali Paradise & Nusa Penida Escape',
    subtitle: 'Private Pool Villa in Ubud, Kelingking Beach & Uluwatu Sunset',
    category: 'international',
    duration: '5 Nights / 6 Days',
    nights: 5,
    days: 6,
    startingPrice: 34499,
    originalPrice: 43999,
    rating: 5.0,
    reviewsCount: 650,
    coverImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80'],
    overview: 'The Island of the Gods. Experience Bali jungle swings, lush emerald rice terraces, Uluwatu sunset temple with Kecak dance, and private pool villa luxury in Ubud.',
    highlights: ['2 Nights in Luxury Private Pool Villa in Ubud', 'West Nusa Penida Day Tour with speedboat', 'Iconic Bali Jungle Swing & rice terraces', 'Uluwatu Clifftop Temple & Kecak dance'],
    inclusions: ['3N Kuta + 2N Ubud Private Pool Villa', 'Daily breakfast & Indian dinners', 'Nusa Penida speedboat tickets', 'Private vehicle for all transfers'],
    exclusions: ['Airfare to Bali', 'Indonesia Visa on Arrival ($35)'],
    itinerary: INTERNATIONAL_PACKAGES.find(p => p.slug === 'indonesia-bali')?.itinerary || []
  }
];

// Honeymoon Packages
export const HONEYMOON_PACKAGES: BrioTourPackage[] = [
  {
    id: 'hm-maldives',
    slug: 'maldives-honeymoon',
    title: 'Romantic Maldives Overwater Villa Honeymoon',
    subtitle: 'Turquoise Lagoon, Candlelight Beach Dinner & Sunset Dolphin Cruise',
    category: 'honeymoon',
    duration: '3 Nights / 4 Days',
    nights: 3,
    days: 4,
    startingPrice: 54999,
    originalPrice: 69999,
    rating: 5.0,
    reviewsCount: 380,
    coverImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80'],
    overview: 'The ultimate romantic getaway for newlyweds. Wake up in a luxury villa perched over the turquoise sea, enjoy a private 4-course candlelight dinner on the beach, and embark on a romantic sunset dolphin spotting cruise.',
    highlights: ['Overwater Villa with private sun deck & ladder into ocean', 'Private 4-course Candlelight Dinner on beach with cake & wine', 'Romantic Sunset Dolphin Cruise for couples', 'Couples massage & spa voucher included'],
    inclusions: ['3 Nights in 5-star island resort (Water Villa guaranteed)', 'All meals (Breakfast, Lunch & Dinner)', 'Speedboat transfers to/from Male Airport', 'Honeymoon bed decoration & honeymoon cake'],
    exclusions: ['Flights to Male', 'Water sports charges'],
    itinerary: [
      { day: 1, title: 'Arrival Male & Resort Welcome', description: 'Scenic speedboat transfer to resort. Special flower garland welcome, check into Water Villa, relax by private deck.', stayCity: 'Maldives Overwater Villa', meals: 'Dinner' },
      { day: 2, title: 'Lagoon Swimming & Couples Spa', description: 'Breakfast with ocean view. Couples spa session and complimentary paddleboarding in lagoon.', stayCity: 'Maldives Overwater Villa', meals: 'Breakfast, Lunch & Dinner' },
      { day: 3, title: 'Sunset Dolphin Cruise & Candlelight Dinner', description: 'Afternoon private sunset cruise. Evening private candlelight dinner setup on the beach under the stars.', stayCity: 'Maldives Overwater Villa', meals: 'Breakfast, Lunch & Dinner' },
      { day: 4, title: 'Floating Breakfast & Departure', description: 'Romantic floating breakfast in pool, check-out and speedboat transfer to airport.', stayCity: 'Return Home', meals: 'Breakfast' }
    ]
  },
  {
    id: 'hm-bali',
    slug: 'bali-honeymoon',
    title: 'Magical Bali Romantic Pool Villa Honeymoon',
    subtitle: 'Private Pool Villa, Flower Bath, Jungle Swing & Uluwatu Sunset',
    category: 'honeymoon',
    duration: '5 Nights / 6 Days',
    nights: 5,
    days: 6,
    startingPrice: 38999,
    originalPrice: 48999,
    rating: 5.0,
    reviewsCount: 420,
    coverImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80'],
    overview: 'Celebrate your love amidst tropical rainforests, pristine beaches, and exotic private pool villas. Includes romantic flower petal bath, couple tandem jungle swing, and sunset dinner overlooking Jimbaran Bay.',
    highlights: ['Ubud Private Pool Villa with floating breakfast', 'Romantic Rose Petal Bath & couples Balinese massage', 'Tandem Jungle Swing photo session', 'Candlelight seafood dinner at Jimbaran Beach'],
    inclusions: ['5 Nights accommodation with private pool villa', 'Daily breakfast & dinners', 'Honeymoon cake & bed flower decor', 'All private sightseeing in AC car'],
    exclusions: ['Airfare to Bali', 'Visa on Arrival ($35)'],
    itinerary: [
      { day: 1, title: 'Arrival Bali & Flower Welcome', description: 'Arrive Denpasar, transfer to villa, traditional flower garland welcome & welcome drinks.', stayCity: 'Seminyak Villa', meals: 'Dinner' },
      { day: 2, title: 'Uluwatu Temple & Jimbaran Sunset Dinner', description: 'Visit Uluwatu clifftop temple, Kecak dance, candlelight dinner on Jimbaran beach.', stayCity: 'Seminyak Villa', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Transfer to Ubud Jungle Villa & Bali Swing', description: 'Transfer to Ubud private pool villa. Tandem swing photo shoot and rice terraces.', stayCity: 'Ubud Private Pool Villa', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Kintamani Volcano & Couples Spa', description: 'Scenic drive to Mt. Batur viewpoint, 2-hour luxury Balinese couples massage with flower bath.', stayCity: 'Ubud Private Pool Villa', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Nusa Penida Island Day Excursion', description: 'Speedboat to Nusa Penida, photo shoot at Kelingking T-Rex beach and crystal bay.', stayCity: 'Ubud Private Pool Villa', meals: 'Breakfast & Dinner' },
      { day: 6, title: 'Floating Breakfast & Departure', description: 'Floating breakfast in pool, souvenir shopping, drop at airport.', stayCity: 'Return Home', meals: 'Breakfast' }
    ]
  },
  {
    id: 'hm-kashmir',
    slug: 'kashmir-honeymoon',
    title: 'Heavenly Kashmir Honeymoon Odyssey',
    subtitle: 'Dal Lake Houseboat, Gulmarg Snow Peaks & Pahalgam Lidder Stroll',
    category: 'honeymoon',
    duration: '5 Nights / 6 Days',
    nights: 5,
    days: 6,
    startingPrice: 22999,
    originalPrice: 28999,
    rating: 4.9,
    reviewsCount: 390,
    coverImage: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80'],
    overview: 'The classic Indian romantic paradise. Cozy up in a carved cedar houseboat with warm Bukhari heaters, cruise Dal Lake under the evening twilight in a decorated Shikara, and touch snow in Gulmarg.',
    highlights: ['Decorated private Shikara ride with Kashmiri Kahwa', 'Stay in Luxury Heritage Houseboat on Dal Lake', 'Romantic snow walk in Gulmarg', 'Special honeymoon cake & candlelit dinner'],
    inclusions: ['4N hotel + 1N luxury houseboat', 'Daily breakfast & dinner with honeymoon cake', 'Dedicated private cab for all transfers', 'Shikara ride on Dal Lake'],
    exclusions: ['Gondola cable car tickets', 'Pony rides'],
    itinerary: [
      { day: 1, title: 'Arrival Srinagar & Romantic Shikara', description: 'Pickup Srinagar airport, check into luxury houseboat, decorated evening Shikara ride on Dal Lake.', stayCity: 'Srinagar Houseboat', meals: 'Dinner' },
      { day: 2, title: 'Gulmarg Snow Excursion', description: 'Drive to Gulmarg, Gondola cable car ride to Apharwat peak, snow photography.', stayCity: 'Srinagar', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Srinagar to Pahalgam Valley of Shepherds', description: 'Drive through saffron fields, check in to resort in Pahalgam by Lidder river.', stayCity: 'Pahalgam', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Betaab & Aru Valley Romantic Stroll', description: 'Visit scenic Bollywood film locations in Betaab valley and pine woods of Aru.', stayCity: 'Pahalgam', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Return to Srinagar & Mughal Gardens', description: 'Nishat Bagh, Shalimar Bagh, Shankaracharya Temple, evening shopping.', stayCity: 'Srinagar', meals: 'Breakfast & Dinner' },
      { day: 6, title: 'Departure from Srinagar', description: 'Breakfast, drop at Srinagar airport with wonderful memories.', stayCity: 'Return Home', meals: 'Breakfast' }
    ]
  }
];

// Taj Mahal Special Page Tour
export const TAJ_MAHAL_SPECIAL: BrioTourPackage = {
  id: 'taj-mahal-express',
  slug: 'taj-mahal-tour',
  title: 'Same Day Express Taj Mahal Tour from Delhi',
  subtitle: 'Private AC Luxury Car via Yamuna Expressway with Skip-the-Line Guide',
  category: 'taj-mahal',
  duration: 'Same Day (12 to 14 Hours)',
  nights: 0,
  days: 1,
  startingPrice: 3499,
  originalPrice: 4999,
  rating: 5.0,
  reviewsCount: 940,
  coverImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
  galleryImages: [
    'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80'
  ],
  overview: 'The most popular day excursion from Delhi. Depart comfortably in a private chauffeur-driven AC car via the 6-lane Yamuna Expressway. Experience the Taj Mahal at sunrise or daytime, explore the massive red sandstone Agra Fort, and visit Mehtab Bagh with an authorized English/Hindi tour guide.',
  highlights: [
    'Private pickup and drop-off from any hotel or airport in Delhi NCR',
    'Skip-the-line assistance and authorized expert monument guide',
    'Comprehensive walking tour inside Taj Mahal & imperial Agra Fort',
    'Sunset vantage point from Mehtab Bagh overlooking Yamuna River',
    'Visit authentic marble inlay craftsman workshops to observe traditional Pietra Dura technique'
  ],
  inclusions: [
    'Chauffeur-driven private AC Sedan (Dzire) or SUV (Innova)',
    'All expressway tolls, state road taxes, parking fees & fuel charges',
    'Government authorized English or Hindi speaking professional guide',
    'Bottled mineral water during the journey'
  ],
  exclusions: [
    'Monument entrance tickets (can be pre-booked online or on arrival)',
    'Buffet lunch at 5-star hotel (optional add-on at ₹800/person)',
    'Personal tips and gratuities'
  ],
  itinerary: [
    { day: 1, title: '6:00 AM — Pickup from Delhi NCR', description: 'Early morning pickup in private AC vehicle from your hotel or home in Delhi, Noida, or Gurgaon. Drive to Agra via the Yamuna Expressway (approx 3 hours).', stayCity: 'Transit', meals: 'Bottled Water' },
    { day: 1, title: '9:30 AM — Arrival in Agra & Taj Mahal Tour', description: 'Meet your government-approved guide and enter the majestic Taj Mahal. Spend 2.5 hours marveling at white marble architecture, calligraphy, and gardens.', stayCity: 'Agra', meals: 'None' },
    { day: 1, title: '12:30 PM — Lunch Break at 5-Star Hotel', description: 'Enjoy an authentic Mughlai or multicuisine buffet lunch at an air-conditioned luxury restaurant or hotel in Agra.', stayCity: 'Agra', meals: 'Lunch (optional)' },
    { day: 1, title: '1:45 PM — Agra Fort Imperial Tour', description: 'Visit the 16th-century Mughal fortress of Agra Fort, exploring Diwan-i-Aam, Diwan-i-Khas, and the balcony where Shah Jahan gazed at the Taj Mahal.', stayCity: 'Agra', meals: 'None' },
    { day: 1, title: '3:30 PM — Mehtab Bagh Sunset Vantage & Marble Workshop', description: 'Visit Mehtab Bagh garden across the Yamuna for sunset photography. Observe local artisans creating marble inlay handicrafts.', stayCity: 'Agra', meals: 'None' },
    { day: 1, title: '5:00 PM — Return Drive to Delhi', description: 'Depart Agra and drive back to Delhi NCR via the expressway. Drop-off at your hotel, home, or airport by 8:30 PM.', stayCity: 'Delhi', meals: 'None' }
  ]
};

// Car Rentals Fleet
export const CAR_RENTALS: BrioVehicle[] = [
  {
    id: 'swift-dzire',
    name: 'Maruti Suzuki Swift Dzire',
    type: 'Sedan (Economy)',
    seats: '4 Passengers + 1 Chauffeur',
    ac: 'Powerful Climate Control AC',
    luggage: '2 Large + 2 Small Bags',
    ratePerKm: '₹11 / km',
    dailyRate: '₹2,200 / day (8h / 80km)',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80',
    features: ['Yellow Commercial Plate', 'Verified Uniformed Driver', 'Fastag Enabled', 'Bottled Water & First Aid', 'GPS Live Tracking']
  },
  {
    id: 'innova-crysta',
    name: 'Toyota Innova Crysta',
    type: 'Premium SUV',
    seats: '6 to 7 Passengers + 1 Chauffeur',
    ac: 'Dual Zone Rear Roof AC Vents',
    luggage: '4 Large + 3 Small Bags',
    ratePerKm: '₹17 / km',
    dailyRate: '₹3,500 / day (8h / 80km)',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80',
    features: ['Reclining Captain Seats', 'Push-back Seating', 'Huge Boot Space', 'USB Mobile Charging at Every Row', 'Smooth Hill Suspension']
  },
  {
    id: 'tempo-traveller',
    name: 'Force Tempo Traveller (12 / 16 / 26 Seater)',
    type: 'Luxury Tourist Mini Coach',
    seats: '12, 16 or 26 Seater Options',
    ac: 'Heavy Duty Roof AC Ducting',
    luggage: 'Dedicated Rear Luggage Trunk + Overhead Carrier',
    ratePerKm: '₹24 / km',
    dailyRate: '₹5,500 / day (8h / 80km)',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80',
    features: ['2x1 Pushback Leatherette Seats', 'LED TV & Music System', 'Spacious Center Aisle', 'Hill Driving Certified Driver', 'Air Suspension']
  },
  {
    id: 'luxury-cars',
    name: 'Mercedes-Benz & Audi Luxury Fleet',
    type: 'Executive Luxury Sedan',
    seats: '4 Passengers + 1 Executive Chauffeur',
    ac: 'Multi-Zone Automatic Climate Control',
    luggage: '3 Large Bags',
    ratePerKm: '₹45 / km',
    dailyRate: '₹9,000 / day (8h / 80km)',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80',
    features: ['Premium Leather Upholstery', 'Quiet Noise-Insulated Cabin', 'Complimentary Beverages & Wi-Fi', 'English Speaking Professional Driver', 'VIP Delegations & Weddings']
  }
];

// 8 Reason to Choose Us Tiles
export const REASONS_TO_CHOOSE: Array<{
  id: string;
  iconName: string;
  title: string;
  desc: string;
}> = [
  { id: '1', iconName: 'Star', title: 'Best Reviews', desc: 'Over 4,900+ verified 5-star Google & TripAdvisor traveller reviews across India.' },
  { id: '2', iconName: 'CreditCard', title: 'No Cost EMI Facility', desc: 'Flexible 0% interest monthly instalment options on domestic & international holidays.' },
  { id: '3', iconName: 'Award', title: 'ISO 9001:2015 Certified', desc: 'Internationally accredited quality management standards for every tour itinerary.' },
  { id: '4', iconName: 'ShieldCheck', title: 'Verified Drivers', desc: 'Police-verified, hill-trained, courteous chauffeurs with sanitized commercial fleet.' },
  { id: '5', iconName: 'Hotel', title: 'Verified Hotels', desc: 'Personally audited 3-star, 4-star & luxury resorts with prime location guarantees.' },
  { id: '6', iconName: 'CalendarCheck', title: 'Well Planned Itineraries', desc: 'Optimal pacing without rush, designed by destination specialists with 12+ years expertise.' },
  { id: '7', iconName: 'BadgePercent', title: 'Lowest Price Challenge', desc: 'Transparent pricing with direct vendor contracting — we match or beat genuine quotes.' },
  { id: '8', iconName: 'Headphones', title: '24x7 Call & WhatsApp Support', desc: 'Round-the-clock dedicated trip coordinator available throughout your journey.' }
];

// Client Testimonials
export const TESTIMONIALS: BrioTestimonial[] = [
  {
    id: 't-1',
    name: 'Rajesh & Sunita Mehra',
    location: 'Rohini, New Delhi',
    tour: 'Kashmir Paradise Tour (5N/6D)',
    rating: 5,
    comment: 'Brio Travels organized our 25th anniversary trip to Kashmir flawlessly. The houseboat on Dal Lake was magical, and our driver Farooq bhai was like family. 10/10 service!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    date: 'February 2026'
  },
  {
    id: 't-2',
    name: 'Pooja Bhatia & Friends',
    location: 'Gurugram, Haryana',
    tour: 'Dubai Extravaganza with Desert Safari',
    rating: 5,
    comment: 'Everything from visa approval in 48 hours to Burj Khalifa tickets and 4x4 desert safari was on point. No hidden charges. The best travel agency in Delhi NCR!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    date: 'January 2026'
  },
  {
    id: 't-3',
    name: 'Vikramaditya Sengupta',
    location: 'Noida Sector 62',
    tour: 'Chardham Yatra by Luxury Bus',
    rating: 5,
    comment: 'Booked Chardham for my elderly parents. Brio Travels arranged clean hotels, priority darshan guidance, and pure vegetarian food throughout. Truly grateful.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    date: 'December 2025'
  },
  {
    id: 't-4',
    name: 'Ananya & Sahil Kapoor',
    location: 'Vasant Kunj, New Delhi',
    tour: 'Bali Romantic Private Pool Villa',
    rating: 5,
    comment: 'Our honeymoon in Ubud and Nusa Penida was straight out of Instagram. Floating breakfast, romantic flower bath, and private driver. Thank you Brio Travels!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    date: 'March 2026'
  }
];

// Blog Posts
export const BLOG_POSTS: BrioBlogPost[] = [
  {
    id: 'blog-1',
    slug: 'hidden-gems-himachal-2026',
    title: 'Top 10 Hidden Gems in Himachal Pradesh to Visit in 2026',
    date: 'March 14, 2026',
    readTime: '6 min read',
    author: 'Travel Desk, Brio Travels',
    summary: 'Beyond the crowded alleys of Mall Road, Himachal hides serene alpine hamlets like Jibhi, Shoja, Chitkul, and Barot Valley waiting to be explored.',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
    content: [
      'While Shimla and Manali remain beloved favorites, travellers seeking peace and pristine nature are discovering Himachal’s quieter treasures.',
      '1. Jibhi & Tirthan Valley: Renowned for traditional wooden cottages, crystal-clear trout rivers, and lush cedar trails leading to Serolsar Lake.',
      '2. Chitkul: The last inhabited village near the Indo-Tibet border along the Baspa River, famous for wooden temples and organic apple orchards.',
      '3. Barot Valley: A pristine paradise for anglers and campers, surrounded by evergreen deodar forests and mountain streams.',
      'Travel Tip: Best visited between March and June for blooming orchards, and December to February for powdery snowfall.'
    ]
  },
  {
    id: 'blog-2',
    slug: 'international-trip-planning-guide-delhi',
    title: 'Complete Guide to Planning Your First International Trip from Delhi',
    date: 'February 28, 2026',
    readTime: '8 min read',
    author: 'Sunil Sharma, Senior Visa Consultant',
    summary: 'A step-by-step checklist on passport validity, hassle-free visa processing for Thailand, Dubai & Bali, forex cards, and budget optimization.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    content: [
      'Planning your first trip abroad can feel overwhelming, but with the right preparation it is seamless and exciting.',
      'Step 1: Check Passport Validity. Ensure your passport has at least 6 months validity from your travel date and 2 blank pages.',
      'Step 2: Choose Visa-Friendly Destinations. Countries like Thailand, Malaysia, Bali (Indonesia), and Dubai offer rapid eVisa or Visa-on-Arrival for Indian passport holders.',
      'Step 3: Forex & Payments. Carry a zero-forex-markup card along with a small amount of local currency cash for street stalls and taxis.',
      'Step 4: International SIM vs eSIM. Pre-activating an eSIM or purchasing a local tourist SIM at the arrival airport ensures instant navigation and WhatsApp connectivity.'
    ]
  },
  {
    id: 'blog-3',
    slug: 'best-time-to-visit-taj-mahal',
    title: 'Best Time to Visit the Taj Mahal: Sunrise, Sunset & Night Viewing Tips',
    date: 'January 19, 2026',
    readTime: '5 min read',
    author: 'Amit Verma, Agra Tour Specialist',
    summary: 'Unlock the best photography angles, beat the tourist crowds, and discover why an early 5:30 AM departure from Delhi makes all the difference.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
    content: [
      'The Taj Mahal changes color throughout the day — from soft blushing pink at sunrise to brilliant milky white in the afternoon sun and golden bronze at twilight.',
      'Why Sunrise is Best: The monument gates open 30 minutes before sunrise. Arriving early means minimal crowds, gentle morning light, and misty reflections in the central fountain pools.',
      'Yamuna Expressway Timing: Leaving Delhi NCR between 5:30 AM and 6:00 AM ensures you reach Agra in under 3 hours with minimal traffic.',
      'Important Note: The Taj Mahal remains closed every Friday for general visitors. Plan your trip between Saturday and Thursday for the best experience.'
    ]
  }
];

// Experience Gallery Photos
export const EXPERIENCE_GALLERY = [
  { id: '1', title: 'Taj Mahal Sunrise Grandeur', location: 'Agra, Uttar Pradesh', category: 'Heritage', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80' },
  { id: '2', title: 'Dal Lake Traditional Houseboat', location: 'Srinagar, Kashmir', category: 'Domestic', image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80' },
  { id: '3', title: 'Emerald Munnar Tea Estates', location: 'Munnar, Kerala', category: 'Nature', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80' },
  { id: '4', title: 'Burj Khalifa & Downtown Dubai', location: 'Dubai, UAE', category: 'International', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80' },
  { id: '5', title: 'Pangong Tso Alpine Blue Lake', location: 'Ladakh, India', category: 'Adventure', image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80' },
  { id: '6', title: 'Overwater Lagoon Villas', location: 'Male, Maldives', category: 'International', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80' },
  { id: '7', title: 'Amber Fort Royal Ramparts', location: 'Jaipur, Rajasthan', category: 'Heritage', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80' },
  { id: '8', title: 'Swiss Alpine Peaks & Glaciers', location: 'Interlaken, Switzerland', category: 'International', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80' }
];

export const EXPERIENCE_VIDEOS = [
  { id: 'v-1', title: 'Kashmir in Winter — Snow in Gulmarg & Dal Lake Shikara', duration: '3:45', views: '14.2K views', thumbnail: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80' },
  { id: 'v-2', title: 'Dubai Desert Safari Dune Bashing & Luxury Marina Cruise', duration: '4:12', views: '28.6K views', thumbnail: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80' },
  { id: 'v-3', title: 'Same Day Agra Tour — Taj Mahal Sunrise Experience', duration: '2:50', views: '19.8K views', thumbnail: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80' },
  { id: 'v-4', title: 'Bali Honeymoon Diary — Ubud Villa & Nusa Penida Cliffs', duration: '5:20', views: '32.1K views', thumbnail: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80' }
];
