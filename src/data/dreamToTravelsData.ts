import { BusinessWebsite } from '../types';

export interface TourPackage {
  id: string;
  title: string;
  subtitle: string;
  category: 'golden-triangle' | 'himachal' | 'rajasthan' | 'uttarakhand' | 'kashmir-ladakh' | 'honeymoon' | 'day-tours';
  categoryLabel: string;
  duration: string;
  nights: number;
  days: number;
  pickupDrop: string;
  startingPrice: number;
  originalPrice: number;
  discountBadge: string;
  rating: number;
  reviewsCount: number;
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
    meals: string;
  }>;
}

export interface RentalVehicle {
  id: string;
  name: string;
  type: 'sedan' | 'suv' | 'tempo' | 'luxury';
  typeLabel: string;
  seatingCapacity: string;
  luggageCapacity: string;
  airConditioned: boolean;
  ratePerKm: number;
  local8hr80kmRate: number;
  outstationMinKmPerDay: number;
  imageUrl: string;
  fuelType: string;
  idealFor: string;
  features: string[];
}

export interface TravelDestination {
  id: string;
  name: string;
  state: string;
  tagline: string;
  imageUrl: string;
  topAttractions: string[];
  tourCount: number;
}

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'golden-triangle-5d',
    title: 'Classic Golden Triangle Tour',
    subtitle: 'Delhi – Agra – Fatehpur Sikri – Jaipur Cultural Odyssey',
    category: 'golden-triangle',
    categoryLabel: 'Golden Triangle',
    duration: '5 Days / 4 Nights',
    nights: 4,
    days: 5,
    pickupDrop: 'Delhi Airport / Railway Station',
    startingPrice: 14999,
    originalPrice: 19999,
    discountBadge: '25% OFF',
    rating: 4.9,
    reviewsCount: 384,
    overview: 'Experience northern India’s legendary heritage circuit. Marvel at the immortal Taj Mahal at sunrise, traverse Mughal monuments in Old Delhi, and explore Jaipur’s pink sandstone forts with private AC transport and verified local storytellers.',
    highlights: [
      'Sunrise guided visit to the UNESCO World Heritage Taj Mahal',
      'Private elephant / jeep ride ascent to majestic Amber Fort in Jaipur',
      'Tour Qutub Minar, Humayun’s Tomb, and India Gate in New Delhi',
      'Ghost city excursion of Fatehpur Sikri and Buland Darwaza',
      'Dedicated AC chauffeur throughout the entire 5-day journey'
    ],
    destinationsCovered: ['Delhi', 'Agra', 'Fatehpur Sikri', 'Jaipur'],
    inclusions: [
      '4 Nights 3/4-Star Heritage Hotel Accommodation',
      'Daily Buffet Breakfast at all hotels',
      'Private Sanitized AC Sedan / Innova with fuel & tolls included',
      'English / Multi-lingual Govt. approved tour guides at monuments',
      'Complimentary packaged drinking water & WiFi in vehicle'
    ],
    exclusions: [
      'Monument entrance tickets (can be bundled upon request)',
      'Lunches, dinners, and personal expenses',
      'Tips to driver and guides'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Delhi & Heritage City Tour',
        description: 'Meet and greet at Delhi airport or railway station. Check into your hotel. Afternoon sightseeing of India Gate, Parliament House, Rashtrapati Bhavan, and Qutub Minar. Evening walk through Connaught Place.',
        stayCity: 'Delhi',
        meals: 'Breakfast (from Day 2)'
      },
      {
        day: 2,
        title: 'Delhi to Agra & Agra Fort Sunset',
        description: 'Morning drive to Agra via Yamuna Expressway (approx. 3.5 hrs). Check into your Agra hotel. Post-lunch visit to the massive red sandstone Agra Fort. Sunset view of the Taj Mahal from Mehtab Bagh gardens across Yamuna River.',
        stayCity: 'Agra',
        meals: 'Buffet Breakfast'
      },
      {
        day: 3,
        title: 'Sunrise Taj Mahal & Drive to Jaipur via Fatehpur Sikri',
        description: 'Early morning sunrise visit to the Taj Mahal. Return to hotel for breakfast. Check out and drive to the Pink City of Jaipur. En route stop at Emperor Akbar’s abandoned capital Fatehpur Sikri. Evening arrival in Jaipur.',
        stayCity: 'Jaipur',
        meals: 'Buffet Breakfast'
      },
      {
        day: 4,
        title: 'Full Day Royal Jaipur Forts & Palaces',
        description: 'Morning excursion to Amber Fort. Photo stop at the picturesque Jal Mahal water palace. Afternoon visit to City Palace, Jantar Mantar observatory, and the honeycomb facade of Hawa Mahal. Shop for hand-block prints and gems in Bapu Bazaar.',
        stayCity: 'Jaipur',
        meals: 'Buffet Breakfast'
      },
      {
        day: 5,
        title: 'Jaipur to Delhi Departure',
        description: 'After leisurely breakfast, drive back to Delhi via NH48 (approx. 5 hrs). Timely drop-off at Delhi airport or railway station for your onward journey with unforgettable memories.',
        stayCity: 'Departure',
        meals: 'Buffet Breakfast'
      }
    ]
  },
  {
    id: 'himachal-shimla-manali-6d',
    title: 'Himachal Paradise: Shimla & Manali Tour',
    subtitle: 'Pine Valleys, Kufri Snow View, Solang Adventure & Rohtang Pass',
    category: 'himachal',
    categoryLabel: 'Himachal Tours',
    duration: '6 Days / 5 Nights',
    nights: 5,
    days: 6,
    pickupDrop: 'Delhi / Chandigarh Pickup & Drop',
    startingPrice: 16499,
    originalPrice: 22000,
    discountBadge: '25% OFF',
    rating: 4.8,
    reviewsCount: 412,
    overview: 'Escape to the cool Himalayan breezes. Explore the colonial charm of Shimla’s Mall Road and Ridge, followed by the adventure valley of Manali with Solang Valley paragliding and Beas river scenery.',
    highlights: [
      'Stroll along Shimla Ridge, Christ Church & Kufri Himalayan nature park',
      'Thrilling excursion to Solang Valley (snow activities & paragliding)',
      'Visit Hadimba Devi Temple, Vashisht Hot Springs & Old Manali cafes',
      'Scenic drive through Kullu valley with river rafting photo stops',
      'Comfortable mountain-tested private AC vehicle with seasoned hill driver'
    ],
    destinationsCovered: ['Shimla', 'Kufri', 'Kullu', 'Manali', 'Solang Valley'],
    inclusions: [
      '2 Nights in Shimla + 3 Nights in Manali (3-Star Deluxe Hotel)',
      'Daily Buffet Breakfast and Dinner (MAP Plan)',
      'Dedicated AC Sedan / Innova for complete transfers & sightseeing',
      'All toll taxes, parking charges, hill driver allowance included',
      '24/7 On-trip support manager'
    ],
    exclusions: [
      'Rohtang Pass green permit / local taxi fees (direct payment)',
      'Adventure activity tickets (paragliding, zorbing, rafting)',
      'Items of personal nature'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Delhi / Chandigarh to Shimla Drive',
        description: 'Morning pickup from Delhi/Chandigarh and picturesque hill drive to Shimla (approx. 7 hrs from Delhi). Check into hotel. Evening free to stroll Mall Road and Lakkar Bazaar.',
        stayCity: 'Shimla',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Shimla & Kufri Sightseeing',
        description: 'Breakfast followed by excursion to Kufri. Enjoy horse riding and view Himalayan snow peaks. Later explore Jakhoo Temple, Christ Church, and The Ridge in Shimla.',
        stayCity: 'Shimla',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 3,
        title: 'Shimla to Manali via Kullu Valley',
        description: 'Scenic drive to Manali along the gushing Beas River. En route pass Pandoh Dam, Sundernagar Lake, and Kullu Shawl weaving factory. Check into hotel in Manali.',
        stayCity: 'Manali',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 4,
        title: 'Manali Local Sightseeing & Old Manali',
        description: 'Explore the ancient wooden Hadimba Devi Temple amidst cedar forests, Manu Temple, Tibetan Monastery, and sulfur hot springs of Vashisht. Evening at leisure on Mall Road.',
        stayCity: 'Manali',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 5,
        title: 'Solang Valley & Atal Tunnel Excursion',
        description: 'Full day adventure trip to Solang Valley. Enjoy ropeway rides, zorbing, and mountain biking. Drive through the historic engineering marvel Atal Tunnel to Sissu.',
        stayCity: 'Manali',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 6,
        title: 'Manali to Delhi / Chandigarh Drop',
        description: 'After breakfast, check out from hotel and drive back to Chandigarh or Delhi for your scheduled flight or train return.',
        stayCity: 'Departure',
        meals: 'Breakfast'
      }
    ]
  },
  {
    id: 'rajasthan-heritage-7d',
    title: 'Royal Rajasthan Heritage & Desert Forts',
    subtitle: 'Jaipur – Jodhpur Blue City – Udaipur City of Lakes',
    category: 'rajasthan',
    categoryLabel: 'Rajasthan Tours',
    duration: '7 Days / 6 Nights',
    nights: 6,
    days: 7,
    pickupDrop: 'Jaipur Pickup / Udaipur Drop',
    startingPrice: 22999,
    originalPrice: 29999,
    discountBadge: '23% OFF',
    rating: 4.9,
    reviewsCount: 295,
    overview: 'Discover the opulence of Rajput royalty. From the amber ramparts of Jaipur to the cliffside Mehrangarh Fort in Jodhpur and tranquil boat rides on Lake Pichola in Udaipur.',
    highlights: [
      'Jaipur Pink City palaces, Amber Fort, and Jantar Mantar',
      'Mehrangarh Fort and Jaswant Thada marble cenotaph in Jodhpur',
      'Scenic stop at Ranakpur Marble Jain Temples with 1,444 intricate pillars',
      'Sunset boat cruise on Lake Pichola facing the majestic City Palace',
      'Heritage haveli stays with traditional folk dance & musical evenings'
    ],
    destinationsCovered: ['Jaipur', 'Pushkar', 'Jodhpur', 'Ranakpur', 'Udaipur'],
    inclusions: [
      '6 Nights Deluxe Heritage Hotel Accommodation',
      'Daily Royal Buffet Breakfast',
      'Private AC vehicle for all transfers, inter-city travel & local sightseeing',
      'Boat cruise ticket on Lake Pichola in Udaipur',
      'Driver allowances, state road permits, toll taxes, and parking'
    ],
    exclusions: [
      'Monument and fort entry tickets',
      'Personal expenses, camel safari tips, lunch/dinner'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=800&q=80'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Jaipur – The Pink City',
        description: 'Warm traditional Rajasthani welcome at Jaipur Airport. Hotel check-in. Evening visit to Birla Temple and Chokhi Dhani ethnic village.',
        stayCity: 'Jaipur',
        meals: 'Breakfast (from Day 2)'
      },
      {
        day: 2,
        title: 'Royal Jaipur Forts & Palaces',
        description: 'Full day sightseeing of Amber Fort, Hawa Mahal, City Palace, and Jantar Mantar. Experience authentic Jaipuri lassi and gemstone markets.',
        stayCity: 'Jaipur',
        meals: 'Buffet Breakfast'
      },
      {
        day: 3,
        title: 'Jaipur to Jodhpur via Holy Pushkar',
        description: 'Morning drive to Jodhpur. En route visit Brahma Temple and sacred Sarovar lake in Pushkar. Arrive in Jodhpur by late afternoon.',
        stayCity: 'Jodhpur',
        meals: 'Buffet Breakfast'
      },
      {
        day: 4,
        title: 'Jodhpur Blue City & Mehrangarh Fort',
        description: 'Explore Mehrangarh Fort towering 400 feet above the blue city, Jaswant Thada, and Umaid Bhawan Palace museum. Wander through Clock Tower market.',
        stayCity: 'Jodhpur',
        meals: 'Buffet Breakfast'
      },
      {
        day: 5,
        title: 'Jodhpur to Udaipur via Ranakpur',
        description: 'Picturesque drive through the Aravalli hills to Udaipur. Visit the renowned 15th-century marble Jain Temple at Ranakpur. Check into lakeside hotel.',
        stayCity: 'Udaipur',
        meals: 'Buffet Breakfast'
      },
      {
        day: 6,
        title: 'Udaipur City Palace & Lake Pichola Cruise',
        description: 'Visit the sprawling Udaipur City Palace complex, Jagdish Temple, and Saheliyon-ki-Bari maiden gardens. Sunset boat ride on Lake Pichola.',
        stayCity: 'Udaipur',
        meals: 'Buffet Breakfast'
      },
      {
        day: 7,
        title: 'Udaipur Departure',
        description: 'After breakfast, transfer to Udaipur Airport or railway station for your onward return flight.',
        stayCity: 'Departure',
        meals: 'Buffet Breakfast'
      }
    ]
  },
  {
    id: 'uttarakhand-devbhoomi-5d',
    title: 'Devbhoomi Uttarakhand: Rishikesh, Haridwar & Mussoorie',
    subtitle: 'Holy Ganga Aarti, Himalayan Waterfalls & Queen of Hills',
    category: 'uttarakhand',
    categoryLabel: 'Uttarakhand Tours',
    duration: '5 Days / 4 Nights',
    nights: 4,
    days: 5,
    pickupDrop: 'Delhi / Dehradun Pickup & Drop',
    startingPrice: 12999,
    originalPrice: 16500,
    discountBadge: '21% OFF',
    rating: 4.8,
    reviewsCount: 220,
    overview: 'A spiritually enriching and mountain-rejuvenating journey. Witness the soul-stirring Ganga Aarti at Har Ki Pauri, explore yoga ashrams in Rishikesh, and gaze at Doon Valley from Mussoorie’s scenic ridges.',
    highlights: [
      'Ganga Aarti at Triveni Ghat and Har Ki Pauri',
      'Walk across iconic Laxman Jhula and Ram Jhula suspension bridges',
      'Mussoorie Kempty Falls, Gun Hill point, and Mall Road promenade',
      'Optional White Water River Rafting on the Ganges',
      'Private hill-compliant vehicle with experienced local driver'
    ],
    destinationsCovered: ['Haridwar', 'Rishikesh', 'Dehradun', 'Mussoorie'],
    inclusions: [
      '2 Nights in Rishikesh + 2 Nights in Mussoorie',
      'Daily Buffet Breakfast at hotels',
      'Private AC Sedan / Innova throughout the tour',
      'All tolls, state borders, parking, and driver allowances'
    ],
    exclusions: [
      'River rafting and adventure sports tickets',
      'Cable car ropeway tickets in Mussoorie'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Delhi to Haridwar & Evening Ganga Aarti',
        description: 'Morning pickup from Delhi and smooth drive to Haridwar. Check in. In the evening, witness the famous Ganga Aarti at Har Ki Pauri.',
        stayCity: 'Haridwar / Rishikesh',
        meals: 'None'
      },
      {
        day: 2,
        title: 'Rishikesh Ashram & Adventure Exploration',
        description: 'Visit Beatles Ashram, Laxman Jhula, Ram Jhula, and Parmarth Niketan. Enjoy optional white water rafting on the Ganges.',
        stayCity: 'Rishikesh',
        meals: 'Buffet Breakfast'
      },
      {
        day: 3,
        title: 'Rishikesh to Mussoorie via Dehradun',
        description: 'Drive up to the Queen of Hills, Mussoorie. Pass through Dehradun. Visit Robber’s Cave. Evening check-in at Mussoorie hotel.',
        stayCity: 'Mussoorie',
        meals: 'Buffet Breakfast'
      },
      {
        day: 4,
        title: 'Mussoorie Sightseeing & Kempty Falls',
        description: 'Full day exploring Kempty Falls, Company Garden, Cloud’s End, and Gun Hill. Stroll Mall Road for Tibetan handicrafts and warm bakery treats.',
        stayCity: 'Mussoorie',
        meals: 'Buffet Breakfast'
      },
      {
        day: 5,
        title: 'Mussoorie to Delhi Return',
        description: 'After breakfast, drive back down to Dehradun or Delhi for scheduled flight/train departure.',
        stayCity: 'Departure',
        meals: 'Buffet Breakfast'
      }
    ]
  },
  {
    id: 'leh-ladakh-adventure-7d',
    title: 'Mystical Leh Ladakh: High Passes & Pangong Lake',
    subtitle: 'Khardung La, Nubra Sand Dunes, Double-Humped Camels & Pangong Tso',
    category: 'kashmir-ladakh',
    categoryLabel: 'Ladakh Expeditions',
    duration: '7 Days / 6 Nights',
    nights: 6,
    days: 7,
    pickupDrop: 'Leh Airport Pickup & Drop',
    startingPrice: 28500,
    originalPrice: 35000,
    discountBadge: '18% OFF',
    rating: 5.0,
    reviewsCount: 310,
    overview: 'The ultimate high-altitude road trip. Traverse Khardung La (one of the world’s highest motorable roads), sleep in luxury Swiss tents under starry skies at Pangong Lake, and explore ancient Tibetan Buddhist monasteries.',
    highlights: [
      'Pangong Tso Lake overnight stay in deluxe camps by turquoise waters',
      'Drive across world-renowned Khardung La Pass (17,582 ft)',
      'Nubra Valley Hunder white sand dunes and Bactrian camel safari',
      'Magnetic Hill gravity-defying experience and Sangam of Indus & Zanskar',
      'Thiksey, Hemis, and Shey Palace monastery tours'
    ],
    destinationsCovered: ['Leh', 'Sham Valley', 'Nubra Valley', 'Diskit', 'Pangong Lake'],
    inclusions: [
      '6 Nights Deluxe Accommodation (Hotels & Lake Camps)',
      'Daily Buffet Breakfast and Dinner',
      'Non-AC SUV (Innova / Scorpio) suitable for high terrain',
      'Inner Line Permits & Wildlife Protection Fees',
      'Emergency Oxygen Cylinder in vehicle for safety'
    ],
    exclusions: [
      'Flight tickets to/from Leh',
      'Camel ride, river rafting, and monastery entrance fees'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Leh & Acclimatization',
        description: 'Arrive at Kushok Bakula Rimpochee Airport Leh (11,500 ft). Complete rest day to acclimatize to high altitude. Evening gentle walk to Leh Market and Shanti Stupa.',
        stayCity: 'Leh',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Leh to Sham Valley Excursion',
        description: 'Visit Hall of Fame war museum, Magnetic Hill, Gurudwara Pathar Sahib, and the dramatic confluence (Sangam) of Indus and Zanskar rivers.',
        stayCity: 'Leh',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 3,
        title: 'Leh to Nubra Valley via Khardung La',
        description: 'Drive across iconic Khardung La Pass (17,582 ft). Descend into the breathtaking Nubra Valley. Visit Diskit Monastery with colossal Maitreya Buddha. Camel ride at Hunder dunes.',
        stayCity: 'Nubra Valley',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 4,
        title: 'Nubra Valley to Pangong Lake via Shyok River',
        description: 'Scenic high-altitude off-road drive along the Shyok River to Pangong Tso Lake. Check into deluxe lakeview camp. Watch changing sunset hues across the lake.',
        stayCity: 'Pangong Tso',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 5,
        title: 'Pangong Lake to Leh via Chang La Pass',
        description: 'Early morning sunrise by the lake. Drive back to Leh crossing Chang La Pass (17,590 ft). En route visit Thiksey Monastery and Shey Palace.',
        stayCity: 'Leh',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 6,
        title: 'Leh Monastery & Local Souvenir Shopping',
        description: 'Leisure day to explore Hemis Monastery, Stok Palace Museum, and shop for authentic pashmina shawls and dried apricots in Leh bazaar.',
        stayCity: 'Leh',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 7,
        title: 'Departure from Leh',
        description: 'Transfer to Leh Airport with cherished Himalayan memories.',
        stayCity: 'Departure',
        meals: 'Breakfast'
      }
    ]
  },
  {
    id: 'kashmir-paradise-6d',
    title: 'Magical Kashmir: Dal Lake & Snow Meadows',
    subtitle: 'Srinagar Houseboat – Gulmarg Gondola – Pahalgam Valley of Shepherds',
    category: 'kashmir-ladakh',
    categoryLabel: 'Kashmir Tours',
    duration: '6 Days / 5 Nights',
    nights: 5,
    days: 6,
    pickupDrop: 'Srinagar Airport Pickup & Drop',
    startingPrice: 24999,
    originalPrice: 32000,
    discountBadge: '22% OFF',
    rating: 4.9,
    reviewsCount: 360,
    overview: 'Experience heaven on earth. Stay in a carved cedarwood heritage houseboat on Dal Lake, ride the world’s highest cable car in Gulmarg, and walk through pine-scented meadows along the Lidder River in Pahalgam.',
    highlights: [
      '1 Night in a luxury traditional Kashmiri houseboat on Dal Lake',
      'Complimentary romantic 1-Hour Shikara ride at sunset',
      'Phase 1 & Phase 2 Gondola ride in snow-clad Gulmarg',
      'Betaab Valley, Aru Valley, and Chandanwari tour in Pahalgam',
      'Mughal gardens of Nishat Bagh, Shalimar Bagh, and Chashme Shahi'
    ],
    destinationsCovered: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Dal Lake'],
    inclusions: [
      '4 Nights Deluxe Hotel + 1 Night Heritage Houseboat',
      'Daily Breakfast and Dinner',
      'Private AC Sedan / Innova throughout the tour',
      '1-Hour Shikara ride on Dal Lake',
      'All toll, fuel, parking, and driver allowances'
    ],
    exclusions: [
      'Gondola cable car tickets in Gulmarg',
      'Pony rides or union cab in Pahalgam'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Srinagar & Dal Lake Shikara',
        description: 'Pickup from Srinagar Airport and transfer to hotel / houseboat. Afternoon romantic Shikara boat ride on Dal Lake visiting Char Chinar and floating gardens.',
        stayCity: 'Srinagar',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Srinagar to Gulmarg Meadow of Flowers',
        description: 'Excursion to Gulmarg. Ride the famous Gulmarg Gondola cable car to Apharwat Peak for panoramic snow views. Return to Srinagar in evening.',
        stayCity: 'Srinagar',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 3,
        title: 'Srinagar to Pahalgam Valley of Shepherds',
        description: 'Drive through saffron fields of Pampore and pine forests to Pahalgam. Check into hotel beside the roaring Lidder River.',
        stayCity: 'Pahalgam',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 4,
        title: 'Pahalgam Valley Exploration & Return to Srinagar',
        description: 'Visit scenic Betaab Valley, Aru Valley, and Baisaran meadow. Drive back to Srinagar in the late afternoon and check into luxury houseboat.',
        stayCity: 'Dal Lake Houseboat',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 5,
        title: 'Srinagar Mughal Gardens & Old City',
        description: 'Explore Mughal Gardens: Shalimar Bagh, Nishat Bagh, and Cheshmashahi. Visit Shankaracharya Temple and shop for dry fruits, saffron, and pashmina.',
        stayCity: 'Srinagar',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 6,
        title: 'Srinagar Departure',
        description: 'After breakfast, transfer to Srinagar Airport for your return flight with heartwarming memories of Kashmir.',
        stayCity: 'Departure',
        meals: 'Breakfast'
      }
    ]
  },
  {
    id: 'honeymoon-special-manali-6d',
    title: 'Himalayan Romance: Honeymoon Special in Shimla & Manali',
    subtitle: 'Candlelight Dinners, Flower Bed Decoration & Private Mountain Chauffeur',
    category: 'honeymoon',
    categoryLabel: 'Honeymoon Special',
    duration: '6 Days / 5 Nights',
    nights: 5,
    days: 6,
    pickupDrop: 'Delhi / Chandigarh Pickup & Drop',
    startingPrice: 21999,
    originalPrice: 28000,
    discountBadge: '22% OFF',
    rating: 5.0,
    reviewsCount: 188,
    overview: 'A dreamy romantic getaway crafted especially for newlyweds. Includes cozy fireplace rooms, flower bed decor, celebratory cake, romantic candlelight dinners, and a dedicated private chauffeur.',
    highlights: [
      'Flower bed decoration & honeymoon celebration cake on arrival night',
      'Exclusive candlelight dinner with personalized menu',
      'Daily morning badam-kesar milk or tea service',
      'Private AC Swift Dzire / Innova with courteous, respectful chauffeur',
      'Snow photography in Solang Valley & apple orchard walks'
    ],
    destinationsCovered: ['Shimla', 'Kufri', 'Kullu', 'Manali', 'Solang Valley'],
    inclusions: [
      '2 Nights in Shimla + 3 Nights in Manali (4-Star Honeymoon Suite)',
      'Daily Breakfast and Gourmet Dinner',
      '1 Night Candlelight Dinner + Cake + Flower Bed Decor',
      'Private dedicated vehicle throughout the trip',
      '24/7 dedicated concierge assistance'
    ],
    exclusions: [
      'Adventure activity tickets',
      'Personal laundry and telephone charges'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Delhi to Shimla Scenic Mountain Drive',
        description: 'Private chauffeur pickup from Delhi and romantic hill drive to Shimla. Welcome drink and flower petal welcome at hotel.',
        stayCity: 'Shimla',
        meals: 'Romantic Dinner'
      },
      {
        day: 2,
        title: 'Shimla & Kufri Couple Excursion',
        description: 'Excursion to Kufri pine trails. Evening stroll holding hands on Mall Road and Christ Church square.',
        stayCity: 'Shimla',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 3,
        title: 'Shimla to Manali via Kullu Valley',
        description: 'Drive along the Beas River to Manali. Check into your deluxe honeymoon suite. Special evening with flower bed decor and celebration cake.',
        stayCity: 'Manali',
        meals: 'Breakfast, Cake & Dinner'
      },
      {
        day: 4,
        title: 'Manali Local Spots & Candlelight Dinner',
        description: 'Visit Hadimba Temple and Vashisht Village. Afternoon couples leisure. Evening exclusive candlelight dinner.',
        stayCity: 'Manali',
        meals: 'Breakfast & Candlelight Dinner'
      },
      {
        day: 5,
        title: 'Solang Valley Snow Romance',
        description: 'Full day trip to Solang Valley snow point. Enjoy cable car rides and picturesque photo sessions.',
        stayCity: 'Manali',
        meals: 'Breakfast & Dinner'
      },
      {
        day: 6,
        title: 'Manali to Delhi Return',
        description: 'After leisurely breakfast, drive back to Delhi for scheduled return.',
        stayCity: 'Departure',
        meals: 'Breakfast'
      }
    ]
  },
  {
    id: 'same-day-agra-taj-mahal',
    title: 'Same-Day Superfast Agra & Taj Mahal Sunrise Tour',
    subtitle: 'Private AC Chauffeur from Delhi – Taj Mahal – Agra Fort – Express Return',
    category: 'day-tours',
    categoryLabel: 'Day Tours',
    duration: '1 Day (12 to 14 Hours)',
    nights: 0,
    days: 1,
    pickupDrop: 'Doorstep Pickup & Drop Anywhere in Delhi NCR',
    startingPrice: 3499,
    originalPrice: 4800,
    discountBadge: '27% OFF',
    rating: 4.9,
    reviewsCount: 520,
    overview: 'The fastest, most hassle-free way to visit the Taj Mahal from Delhi. Early morning departure via the Yamuna Expressway in your private AC car, guided exploration with a licensed historian, and return to Delhi by evening.',
    highlights: [
      'Early morning sunrise tour avoiding monument crowds and midday heat',
      'Private licensed archaeological guide at Taj Mahal and Agra Fort',
      'Hassle-free skip-the-line pre-arranged ticket assistance',
      'Gourmet buffet lunch stop at 5-star hotel in Agra',
      'Doorstep pickup and drop from any hotel/airport in Delhi NCR'
    ],
    destinationsCovered: ['Delhi', 'Yamuna Expressway', 'Agra', 'Taj Mahal', 'Agra Fort'],
    inclusions: [
      'Private AC Sedan (Dzire / Etios) or Innova with professional chauffeur',
      'All toll taxes, parking charges, and Yamuna Expressway state permit',
      'English / foreign language licensed guide assistance in Agra',
      'Bottled mineral water throughout journey'
    ],
    exclusions: [
      'Taj Mahal monument entrance fee (₹50 for Indian / ₹1100 for Foreigner)',
      'Lunch (can be added for ₹600/person)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Delhi to Agra Same-Day Itinerary',
        description: '06:00 AM pickup from your residence or hotel in Delhi/Gurgaon/Noida. Smooth drive on Yamuna Expressway (3.5 hrs). 09:30 AM arrival in Agra and meet your private guide. Tour the Taj Mahal (approx. 2 hrs). 12:30 PM lunch break. 02:00 PM explore Agra Fort and marble inlay craftsmanship. 04:30 PM drive back to Delhi. 08:30 PM arrival and drop-off at your location.',
        stayCity: 'Same Day Tour',
        meals: 'Bottled Water'
      }
    ]
  }
];

export const RENTAL_VEHICLES: RentalVehicle[] = [
  {
    id: 'innova-crysta',
    name: 'Toyota Innova Crysta',
    type: 'suv',
    typeLabel: 'Premium MPV',
    seatingCapacity: '6 + 1 Chauffeur / 7 + 1',
    luggageCapacity: '4 Large Bags + 2 Small',
    airConditioned: true,
    ratePerKm: 18,
    local8hr80kmRate: 3200,
    outstationMinKmPerDay: 250,
    imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    fuelType: 'Diesel',
    idealFor: 'Family Vacations, Golden Triangle Tours, Airport Transfers & Executive Groups',
    features: [
      'Captain Recliner Seats with Center Armrests',
      'Dual Zone Rear AC Vents with Climate Control',
      'USB Mobile Charging at Every Row',
      'Smooth Highway Suspension for Long Mountain Journeys',
      'Clean Sanitized Cabin with Bottled Water & Tissue Box'
    ]
  },
  {
    id: 'swift-dzire',
    name: 'Maruti Suzuki Swift Dzire',
    type: 'sedan',
    typeLabel: 'Compact AC Sedan',
    seatingCapacity: '4 + 1 Chauffeur',
    luggageCapacity: '2 Large Bags + 2 Handbags',
    airConditioned: true,
    ratePerKm: 12,
    local8hr80kmRate: 2200,
    outstationMinKmPerDay: 250,
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    fuelType: 'CNG / Petrol',
    idealFor: 'Couples, Small Families, Same-Day Agra Tours & Local Delhi Sightseeing',
    features: [
      'Plush Cushioned Seats with Ample Legroom',
      'Powerful Front & Rear AC Cooling',
      'Bluetooth Music Connectivity',
      'High Mileage & Cost-Effective Outstation Rates',
      'Courteous Uniformed Professional Driver'
    ]
  },
  {
    id: 'tempo-traveller-12',
    name: 'Force Luxury Tempo Traveller (12-Seater)',
    type: 'tempo',
    typeLabel: 'Executive Group Van',
    seatingCapacity: '12 + 1 Chauffeur',
    luggageCapacity: '10 Medium Bags in Rear Trunk',
    airConditioned: true,
    ratePerKm: 26,
    local8hr80kmRate: 5500,
    outstationMinKmPerDay: 300,
    imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80',
    fuelType: 'Diesel',
    idealFor: 'Corporate Teams, Extended Families, Pilgrimage Groups & Wedding Caravans',
    features: [
      '2x1 Pushback Maharaja Leather Recliner Seats',
      'Roof-Mounted Individual AC Louvers',
      'LED TV Screen & Premium Surround Audio System',
      'Large Tinted Windows for Panoramic Mountain Sightseeing',
      'Spacious Center Aisle for Effortless Movement'
    ]
  },
  {
    id: 'tempo-traveller-17',
    name: 'Force Tempo Traveller (17 & 26 Seater)',
    type: 'tempo',
    typeLabel: 'Heavy Group Coach',
    seatingCapacity: '17 to 26 Passengers',
    luggageCapacity: 'Roof Carrier + Spacious Boot',
    airConditioned: true,
    ratePerKm: 32,
    local8hr80kmRate: 6800,
    outstationMinKmPerDay: 300,
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    fuelType: 'Diesel',
    idealFor: 'School / College Expeditions, Destination Wedding Guests & Large Tours',
    features: [
      'Full Coach Heavy AC Cooling',
      'High-Grade First Aid Kit & GPS Live Tracking',
      'Comfortable Headrests & Reading Lights',
      'Experienced Senior Hill-Route Certified Drivers'
    ]
  },
  {
    id: 'toyota-fortuner-luxury',
    name: 'Toyota Fortuner 4x4 Luxury',
    type: 'luxury',
    typeLabel: 'VIP Luxury SUV',
    seatingCapacity: '6 + 1 Chauffeur',
    luggageCapacity: '4 Large Bags',
    airConditioned: true,
    ratePerKm: 38,
    local8hr80kmRate: 7500,
    outstationMinKmPerDay: 250,
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    fuelType: 'Diesel',
    idealFor: 'VIP Delegations, Diplomatic Convoys, High-Terrain Himalayan Expeditions',
    features: [
      'All-Wheel Drive Terrain Command for Ladakh & Snow Passes',
      'Full Black Leather Interior & Sunroof',
      'Ultra-Quiet Acoustic Insulation',
      'Suitcase Assist & Uniformed Chauffeur'
    ]
  }
];

export const POPULAR_DESTINATIONS: TravelDestination[] = [
  {
    id: 'delhi-ncr',
    name: 'Delhi NCR',
    state: 'National Capital Territory',
    tagline: 'Centuries of Dynasties, Vibrant Bazaars & Modern Heritage',
    imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80',
    topAttractions: ['India Gate', 'Qutub Minar', 'Red Fort', 'Humayun’s Tomb', 'Lotus Temple'],
    tourCount: 6
  },
  {
    id: 'agra-taj-mahal',
    name: 'Agra',
    state: 'Uttar Pradesh',
    tagline: 'Home of the World’s Greatest Monument to Eternal Love',
    imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80',
    topAttractions: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri', 'Mehtab Bagh', 'Itmad-ud-Daulah'],
    tourCount: 8
  },
  {
    id: 'jaipur-rajasthan',
    name: 'Jaipur',
    state: 'Rajasthan',
    tagline: 'The Pink City of Fortresses, Palaces & Royal Splendor',
    imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80',
    topAttractions: ['Amber Fort', 'Hawa Mahal', 'City Palace', 'Jal Mahal', 'Nahargarh Fort'],
    tourCount: 7
  },
  {
    id: 'himachal-pradesh',
    name: 'Shimla & Manali',
    state: 'Himachal Pradesh',
    tagline: 'Pristine Snow Peaks, Deodar Woods & Adventure Valleys',
    imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80',
    topAttractions: ['Solang Valley', 'The Ridge', 'Kufri', 'Atal Tunnel', 'Hadimba Temple'],
    tourCount: 5
  },
  {
    id: 'kashmir-valley',
    name: 'Kashmir Valley',
    state: 'Jammu & Kashmir',
    tagline: 'Paradise on Earth with Houseboats, Meadows & Gondolas',
    imageUrl: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=600&q=80',
    topAttractions: ['Dal Lake', 'Gulmarg Apharwat', 'Betaab Valley', 'Pahalgam', 'Mughal Gardens'],
    tourCount: 4
  },
  {
    id: 'leh-ladakh',
    name: 'Leh Ladakh',
    state: 'Ladakh (UT)',
    tagline: 'Land of High Mountain Passes, Monasteries & Azure Lakes',
    imageUrl: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=600&q=80',
    topAttractions: ['Pangong Tso', 'Khardung La', 'Nubra Valley', 'Magnetic Hill', 'Diskit'],
    tourCount: 4
  }
];

export const TRAVEL_TESTIMONIALS = [
  {
    id: 't-1',
    author: 'Rajesh & Meenakshi Sharma',
    city: 'Mumbai',
    tourTaken: 'Golden Triangle 5D Tour',
    vehicle: 'Toyota Innova Crysta',
    rating: 5,
    comment: 'Exceptional service from DreamScape Travels! Chauffeur Mr. Satish was extremely polite, punctual, and safe on the highway. Taj Mahal sunrise was smoothly coordinated without waiting in queues. 10/10 recommended for families!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-2',
    author: 'David & Sarah Jenkins',
    city: 'London, UK',
    tourTaken: 'Rajasthan Heritage 7D Odyssey',
    vehicle: 'Toyota Fortuner',
    rating: 5,
    comment: 'Our first trip to India could not have been better. Clean AC car every morning with cold water bottles, spotless hotels, and knowledgeable local guides in Jaipur and Udaipur. Transparent pricing with zero surprise charges.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-3',
    author: 'Amitabh Sengupta',
    city: 'Kolkata',
    tourTaken: 'Himachal Paradise: Shimla & Manali',
    vehicle: 'Force Tempo Traveller 12-Seater',
    rating: 5,
    comment: 'Booked a 12-seater Tempo Traveller for an 8-person family vacation to Manali and Solang. The driver knew every curve of the hill roads and was very accommodating with elderly family members.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];

export const DREAM_TRAVELS_WEBSITE: BusinessWebsite = {
  id: 'site-dream-travels',
  slug: 'dream-travels',
  businessName: 'DreamScape Tours & Travels',
  tagline: "India's Premier Tour & Car Rental Operator Since 2004",
  category: 'travel',
  templateId: 'travel-agency',
  description: 'Specializing in customized India tour packages including Golden Triangle, Himachal, Rajasthan, Kashmir, Leh Ladakh, and honeymoon specials. Offering verified sanitized AC car rentals (Innova Crysta, Swift Dzire, Tempo Traveller) with experienced chauffeurs and 24/7 travel desk support.',
  ownerName: 'Virender Rawat & Team',
  phone: '+91 98110 54321',
  whatsapp: '+91 98110 54321',
  email: 'bookings@dreamscapetravels.in',
  address: 'Shop 14, Ground Floor, Scindia House, Connaught Place & IGI Airport T3 Terminal Service Desk',
  city: 'New Delhi',
  mapsUrl: 'https://maps.google.com/?q=Connaught+Place+New+Delhi',
  openingHours: 'Mon - Sun: 24 Hours Travel Desk & Fleet Dispatch',
  coverUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=80',
  logoUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=200&q=80',
  primaryColor: '#0F2C59',
  secondaryColor: '#F59E0B',
  fontFamily: 'Plus Jakarta Sans',
  bookingType: 'whatsapp_order',
  bookingCtaLabel: 'Get Instant Tour Quote',
  specialBadge: 'Govt Approved Tour Operator',
  referenceSiteId: 'dreamtotravels',
  referenceSiteName: 'Dream To Travels',
  referenceSiteUrl: 'https://www.dreamtotravels.com/',
  referenceFeatures: 'India tour packages, Golden Triangle, Himachal, Rajasthan, Uttarakhand, Leh Ladakh, Kashmir, honeymoon specials, Innova Crysta & Tempo Traveller car rentals, inquiry form & online itinerary planning.',
  designSignature: {
    palette: {
      primaryColor: '#0F2C59',
      accentColor: '#F59E0B',
      secondaryAccent: '#0284C7',
      backgroundColor: '#F8FAFC',
      surfaceColor: '#FFFFFF',
      textColor: '#0F172A',
      mutedText: '#475569',
      borderTone: '#E2E8F0',
      heroOverlay: 'linear-gradient(180deg, rgba(15,44,89,0.85) 0%, rgba(15,44,89,0.7) 100%)'
    },
    typography: {
      headlineFont: "'Plus Jakarta Sans', sans-serif",
      bodyFont: "'Inter', sans-serif",
      accentFont: "'Fraunces', serif"
    },
    navigationStyle: 'sticky_top_search_bar',
    bookingStyle: 'whatsapp_order',
    vibeTag: 'Heritage & Modern Travel Desk'
  },
  status: 'published',
  pricingPlanId: 'professional',
  amountPaid: 1499,
  paymentStatus: 'paid',
  createdAt: '2024-03-01T00:00:00.000Z',
  updatedAt: new Date().toISOString(),
  sections: [
    { id: 'hero', title: 'Home & Tour Finder', isEnabled: true, order: 1 },
    { id: 'packages', title: 'India Tour Packages', isEnabled: true, order: 2 },
    { id: 'rentals', title: 'Car Rentals & Fleet', isEnabled: true, order: 3 },
    { id: 'destinations', title: 'Top Destinations', isEnabled: true, order: 4 },
    { id: 'about', title: 'About Our Legacy', isEnabled: true, order: 5 },
    { id: 'reviews', title: 'Traveler Reviews', isEnabled: true, order: 6 },
    { id: 'inquiry', title: 'Inquiry & Booking', isEnabled: true, order: 7 }
  ],
  offers: [
    {
      id: 'offer-1',
      title: 'Golden Triangle Early Bird Special',
      description: 'Book 30 days in advance and get flat 20% discount plus free sunrise Taj Mahal entry guide assistance.',
      discountPercent: 20,
      couponCode: 'DREAM20',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'gal-1',
      title: 'Taj Mahal Sunrise Monument View',
      category: 'exterior',
      imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gal-2',
      title: 'Agra Fort Red Sandstone Ramparts',
      category: 'exterior',
      imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gal-3',
      title: 'Himalayan Snow Valleys in Himachal',
      category: 'facilities',
      imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gal-4',
      title: 'Royal Amber Fort Jaipur',
      category: 'exterior',
      imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80'
    }
  ],
  items: [
    {
      id: 'tour-item-1',
      name: 'Golden Triangle Classic Tour (5D/4N)',
      description: 'Delhi, Agra Taj Mahal, Fatehpur Sikri, and Jaipur Pink City with private AC Innova and verified guides.',
      price: 14999,
      discountPrice: 19999,
      category: 'Tour Packages',
      imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80',
      isAvailable: true
    },
    {
      id: 'tour-item-2',
      name: 'Himachal Paradise: Shimla & Manali (6D/5N)',
      description: 'Pine valleys, Kufri snow views, Solang valley adventure and Hadimba temple in Manali.',
      price: 16499,
      discountPrice: 22000,
      category: 'Tour Packages',
      imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80',
      isAvailable: true
    },
    {
      id: 'rental-item-1',
      name: 'Toyota Innova Crysta Rental',
      description: '6+1 Seater luxury MPV with dual AC vents, captain seats, and experienced outstation driver.',
      price: 3200,
      discountPrice: 3800,
      category: 'Car Rentals',
      imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80',
      isAvailable: true
    },
    {
      id: 'rental-item-2',
      name: 'Maruti Swift Dzire Sedan',
      description: '4+1 AC Sedan ideal for couples and same-day Agra or city tours at ₹12/km.',
      price: 2200,
      discountPrice: 2600,
      category: 'Car Rentals',
      imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80',
      isAvailable: true
    },
    {
      id: 'rental-item-3',
      name: 'Force Tempo Traveller 12-Seater',
      description: 'Maharaja pushback seats, individual AC, LED TV, and ample luggage space for group journeys.',
      price: 5500,
      discountPrice: 6500,
      category: 'Car Rentals',
      imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=80',
      isAvailable: true
    }
  ]
};
