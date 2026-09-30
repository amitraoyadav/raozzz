export interface VeenaPackage {
  id: string;
  tourCode: string;
  title: string;
  category: 'india' | 'world';
  region: string;
  specialityType?: 'women' | 'senior' | 'honeymoon' | 'family' | 'jubilee';
  durationDays: number;
  durationNights: number;
  route: string;
  priceInr: number;
  originalPriceInr?: number;
  emiStartsFromInr: number;
  rating: number;
  reviewsCount: number;
  badge?: string;
  imageUrl: string;
  destinationSummary: string;
  departureDates: string[];
  departureCities: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    meals: string;
  }[];
}

export interface DestinationHighlight {
  id: string;
  name: string;
  countryOrState: string;
  toursCount: number;
  startingPriceInr: number;
  imageUrl: string;
  tag: string;
  category: 'india' | 'world';
}

export interface VeenaReview {
  id: string;
  guestName: string;
  city: string;
  tourTaken: string;
  rating: number;
  date: string;
  reviewText: string;
  tourManagerName: string;
}

export const VEENA_PACKAGES: VeenaPackage[] = [
  // INDIA TOURS
  {
    id: 'vw-kashmir-heavenly',
    tourCode: 'IND-KAS-01',
    title: 'Heavenly Kashmir with Gulmarg Gondola & Houseboat',
    category: 'india',
    region: 'Himalayas & Kashmir',
    specialityType: 'family',
    durationDays: 7,
    durationNights: 6,
    route: 'Srinagar 3N · Gulmarg 1N · Pahalgam 2N',
    priceInr: 44500,
    originalPriceInr: 49900,
    emiStartsFromInr: 3708,
    rating: 4.9,
    reviewsCount: 1420,
    badge: 'Best Seller',
    imageUrl: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80',
    destinationSummary: 'Explore scenic Dal lake on a Shikara, stay in luxury heritage pine houseboats, ascend to Kongdoori via Gulmarg Gondola, and stroll through Pahalgam saffron valleys with dedicated Indian Chef serving pure veg and Jain delicacies.',
    departureDates: ['12 Apr 2026', '19 Apr 2026', '26 Apr 2026', '03 May 2026', '10 May 2026'],
    departureCities: ['Mumbai', 'Pune', 'Delhi NCR', 'Ahmedabad', 'Bengaluru'],
    inclusions: [
      'Return Airfare (Economy Class)',
      'Deluxe 4-Star Hotels & Deluxe Super Houseboat',
      'All Meals Included: Daily Breakfast, Lunch & Dinner (Special Jain / Pure Veg kitchen with Veena World Chef)',
      'AC Coach Transportation with experienced driver',
      'Phase 1 Gondola Ride in Gulmarg ticket included',
      '1 Hour Sunset Shikara Ride on Dal Lake',
      'Dedicated Veena World Professional Tour Manager from start to finish',
      'Travel Insurance for all travelers up to 70 years',
      'Complimentary Veena World Travel Kit & Duffle Bag'
    ],
    exclusions: [
      'Phase 2 Gulmarg Gondola tickets (subject to snow & weather)',
      'Personal expenses (laundry, camera fees, pony rides in Pahalgam)',
      'Any item not specified in inclusions'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Srinagar — Welcome Shikara Ride',
        description: 'Arrive at Srinagar Sheikh-ul-Alam Airport. Greeted by our caring Tour Manager. Check in to your charming lakefront houseboat. Evening romantic Shikara ride across Dal Lake and floating markets.',
        meals: 'Lunch, Evening Tea & Snacks, Dinner'
      },
      {
        day: 2,
        title: 'Srinagar to Gulmarg — Meadow of Flowers',
        description: 'Drive along scenic alpine roads lined with Chinar trees to Gulmarg (2,730m). Take the world-famous Gulmarg Gondola cable car up to Kongdoori station. Enjoy snow activities and panoramic Himalayan peaks.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 3,
        title: 'Gulmarg to Pahalgam — Valley of Shepherds',
        description: 'Proceed towards Pahalgam. Enroute visit the fragrant saffron fields of Pampore and historic Awantipora ruins. Check in to luxury riverside resort along the Lidder River.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 4,
        title: 'Pahalgam Sightseeing — Betaab & Aru Valleys',
        description: 'Full day excursion to Betaab Valley, named after the Bollywood movie, and picturesque Aru Valley surrounded by pine-forested mountains. Enjoy a special hot Kashmiri Kahwa tea break.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 5,
        title: 'Pahalgam to Srinagar — Mughal Gardens & Shankaracharya',
        description: 'Return to Srinagar. Visit the breathtaking Mughal terraced gardens: Shalimar Bagh, Nishat Bagh, and the ancient hilltop Shankaracharya Temple offering bird-eye city views.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 6,
        title: 'Day Excursion to Sonamarg — Meadow of Gold',
        description: 'Spectacular excursion to Sonamarg, gateway to Ladakh. Marvel at Thajiwas Glacier and roaring Sindh River rapids. Evening gala farewell celebration with regional music and gifts.',
        meals: 'Breakfast, Lunch, Gala Dinner'
      },
      {
        day: 7,
        title: 'Departure from Srinagar — Cherished Memories',
        description: 'After breakfast, transfer to Srinagar Airport with sweet memories of paradise on earth with fellow travelers and your Tour Manager.',
        meals: 'Breakfast'
      }
    ]
  },
  {
    id: 'vw-himachal-delight',
    tourCode: 'IND-HIM-02',
    title: 'Himachal Splendour: Shimla, Manali & Solang Valley',
    category: 'india',
    region: 'Himalayas & Kashmir',
    specialityType: 'family',
    durationDays: 8,
    durationNights: 7,
    route: 'Chandigarh 1N · Shimla 2N · Manali 3N · Chandigarh 1N',
    priceInr: 39500,
    originalPriceInr: 44000,
    emiStartsFromInr: 3290,
    rating: 4.8,
    reviewsCount: 1890,
    badge: 'Popular Family Tour',
    imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
    destinationSummary: 'Cross roaring Beas river, stroll down Shimla Mall Road and Christ Church, explore apple orchards in Manali, and experience thrilling snow games in Solang Valley with warm hospitality.',
    departureDates: ['10 Apr 2026', '17 Apr 2026', '24 Apr 2026', '01 May 2026', '08 May 2026'],
    departureCities: ['Mumbai', 'Pune', 'Ahmedabad', 'Delhi NCR', 'Surat'],
    inclusions: [
      'Return Airfare or AC Volvo Train connector as per itinerary',
      'Deluxe 4-Star Mountain View Resorts in Shimla and Manali',
      'All Meals: Breakfast, Lunch, Dinner with Veena World Traveling Chef team',
      'Exclusive AC Coach for group touring throughout Himachal',
      'Solang Valley adventure point visit and Atal Tunnel crossing',
      'Shimla Mall Road walking tour and Kufri Fun World',
      'Caring Tour Manager accompanying from Chandigarh'
    ],
    exclusions: [
      'Paragliding, Zorbing, and River Rafting tickets (available directly)',
      'Any monument camera fees or porterage'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival Chandigarh to Shimla',
        description: 'Arrive at Chandigarh Airport/Station. Scenic drive through the Shivalik hills to British colonial summer capital Shimla. Evening at leisure.',
        meals: 'Lunch, Dinner'
      },
      {
        day: 2,
        title: 'Shimla & Kufri Excursion',
        description: 'Excursion to Kufri, Himachal premier snow sports destination. Stroll on the Ridge, visit Christ Church, and shop along bustling Mall Road.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 3,
        title: 'Shimla to Manali via Kullu Valley',
        description: 'Scenic journey through Pandoh Dam, Hanogi Mata Temple, and Kullu Shawl weaving centers. Arrive in Manali surrounded by soaring pine peaks.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 4,
        title: 'Solang Valley & Atal Tunnel Marvel',
        description: 'Full day adventure in Solang Valley. Drive through the historic engineering marvel Atal Tunnel to Sissu in Lahaul Valley.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 5,
        title: 'Manali Local Sightseeing',
        description: 'Visit the 450-year-old wooden pagoda Hadimba Devi Temple, Vashisht Hot Sulphur Springs, and Tibetan Monastery. Free time for shopping.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 6,
        title: 'Manali to Chandigarh',
        description: 'Drive back down to the planned city of Chandigarh. Check in to hotel and unwind with a special gala dinner.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 7,
        title: 'Chandigarh City Tour',
        description: 'Visit the world-acclaimed Rock Garden crafted by Nek Chand and scenic Sukhna Lake. Return to hotel.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 8,
        title: 'Departure from Chandigarh',
        description: 'Transfer to Chandigarh Airport/Railway Station for your flight back home.',
        meals: 'Breakfast'
      }
    ]
  },
  {
    id: 'vw-rajasthan-royal',
    tourCode: 'IND-RAJ-03',
    title: 'Padharo Mhare Des: Royal Rajasthan Heritage Circuit',
    category: 'india',
    region: 'West & Heritage',
    specialityType: 'senior',
    durationDays: 9,
    durationNights: 8,
    route: 'Jaipur 2N · Bikaner 1N · Jaisalmer 2N · Jodhpur 1N · Udaipur 2N',
    priceInr: 49800,
    originalPriceInr: 56000,
    emiStartsFromInr: 4150,
    rating: 4.9,
    reviewsCount: 1650,
    badge: "Senior's Special Friendly",
    imageUrl: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80',
    destinationSummary: 'Live like royalty across Amber Fort, golden Sam Sand Dunes with sunset camel safari, Mehrangarh Fort, and Lake Pichola boat ride with comfortable pacing and caring tour managers.',
    departureDates: ['05 Apr 2026', '15 Apr 2026', '25 Apr 2026', '02 May 2026'],
    departureCities: ['Mumbai', 'Pune', 'Delhi NCR', 'Nagpur', 'Bengaluru'],
    inclusions: [
      'Return Airfare to Jaipur / from Udaipur',
      'Heritage 4-Star Palatial Hotels & Luxury Swiss Desert Tents in Jaisalmer',
      'Authentic Rajasthani & Multicuisine Meals (Dal Baati Churma, Gatte ki Sabzi, Jain options)',
      'Desert Camel Safari & Kalbeliya folk dance gala evening under the stars',
      'Private boat cruise on Lake Pichola in Udaipur',
      'Sightseeing tickets for Amber Fort, Mehrangarh Fort, City Palace',
      'Veena World Dedicated Tour Manager & Medical Assistance Kit'
    ],
    exclusions: ['Optional Jeep dune bashing in Sam', 'Personal shopping'],
    itinerary: [
      { day: 1, title: 'Arrival in Pink City Jaipur', description: 'Arrive in Jaipur, greeted with traditional marigold garland welcome. Evening visit to Birla Temple.', meals: 'Lunch, Dinner' },
      { day: 2, title: 'Jaipur Royal Forts & City Palace', description: 'Explore majestic Amber Fort, Hawa Mahal photo stop, City Palace, and Jantar Mantar observatory.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 3, title: 'Jaipur to Bikaner — Junagarh Fort', description: 'Drive to Bikaner. Tour the impregnable Junagarh Fort and unique National Camel Breeding Farm.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 4, title: 'Bikaner to Jaisalmer Golden Sand Dunes', description: 'Arrive in the Golden City. Check in to luxury desert camp at Sam Sand Dunes. Enjoy camel safari and folk dance show.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 5, title: 'Jaisalmer Golden Fort & Patwon Ki Haveli', description: 'Tour the living Golden Fort (Sonar Kila), intricately carved Patwon Ki Haveli, and Gadisar Lake.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 6, title: 'Jaisalmer to Jodhpur Blue City', description: 'Drive to Sun City Jodhpur. Scale towering Mehrangarh Fort and Jaswant Thada marble cenotaph.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 7, title: 'Jodhpur to Udaipur via Ranakpur', description: 'Drive to City of Lakes Udaipur. Enroute visit the 1,444 uniquely carved marble pillars of Ranakpur Jain Temple.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 8, title: 'Udaipur City Palace & Lake Pichola Cruise', description: 'Visit Udaipur Grand City Palace museum, Saheliyon Ki Bari fountains, and sunset boat ride on Lake Pichola.', meals: 'Breakfast, Lunch, Gala Dinner' },
      { day: 9, title: 'Departure from Udaipur', description: 'Transfer to Udaipur Maharana Pratap Airport with regal memories.', meals: 'Breakfast' }
    ]
  },
  {
    id: 'vw-kerala-gods-own',
    tourCode: 'IND-KER-04',
    title: 'Gods Own Country: Munnar, Thekkady & Alleppey Backwaters',
    category: 'india',
    region: 'South India',
    specialityType: 'women',
    durationDays: 7,
    durationNights: 6,
    route: 'Cochin 1N · Munnar 2N · Thekkady 1N · Alleppey 1N · Kovalam 1N',
    priceInr: 36800,
    originalPriceInr: 41500,
    emiStartsFromInr: 3066,
    rating: 4.9,
    reviewsCount: 2110,
    badge: "Women's Special Available",
    imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    destinationSummary: 'Lush green velvet tea plantations of Munnar, aromatic spice plantations in Periyar, traditional Kathakali & Kalaripayattu shows, and a peaceful backwater cruise in Alleppey.',
    departureDates: ['08 Apr 2026', '16 Apr 2026', '23 Apr 2026', '30 Apr 2026', '07 May 2026'],
    departureCities: ['Mumbai', 'Pune', 'Delhi NCR', 'Ahmedabad', 'Hyderabad', 'Bengaluru'],
    inclusions: [
      'Return Airfare to Cochin / from Trivandrum',
      'Deluxe 4-Star Forest & Tea Garden Resorts',
      'Traditional Kerala Alleppey Deluxe Houseboat Backwater Cruise',
      'All Meals Included with South Indian & North Indian vegetarian/Jain spreads',
      'Spice Plantation Guided Tour with tasting session',
      'Live Kathakali dance and Kalaripayattu martial arts show ticket',
      'Veena World Dedicated Tour Manager with 24x7 caring support'
    ],
    exclusions: ['Ayurvedic massage therapies (available directly at verified resort spa)', 'Personal items'],
    itinerary: [
      { day: 1, title: 'Arrival in Cochin — Gateway to Kerala', description: 'Arrive in historic port city Cochin. See Chinese Fishing Nets, St. Francis Church, and Jewish Synagogue.', meals: 'Lunch, Dinner' },
      { day: 2, title: 'Cochin to Munnar Tea Country', description: 'Scenic hill climb past Cheeyappara and Valara waterfalls. Arrive in misty Munnar surrounded by rolling tea gardens.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 3, title: 'Munnar Tea Museum & Eravikulam National Park', description: 'Spot the endangered Nilgiri Tahr at Eravikulam, visit Tata Tea Museum, and take photos at Echo Point & Mattupetty Dam.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 4, title: 'Munnar to Thekkady Wild Spice Haven', description: 'Drive to Thekkady. Tour organic cardamom and pepper plantations. Evening witness vibrant live Kathakali and martial arts performance.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 5, title: 'Thekkady to Alleppey Houseboat Backwaters', description: 'Drive to Venice of the East Alleppey. Board deluxe houseboats gliding through palm-fringed canals and emerald paddy fields.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 6, title: 'Alleppey to Kovalam Beach Resort', description: 'Drive to world-famous crescent beaches of Kovalam. Unwind by the Arabian Sea, visit Lighthouse Beach, and enjoy gala dinner.', meals: 'Breakfast, Lunch, Gala Dinner' },
      { day: 7, title: 'Departure from Trivandrum', description: 'Visit historic Padmanabhaswamy Temple before heading to Trivandrum Airport for flight home.', meals: 'Breakfast' }
    ]
  },
  {
    id: 'vw-andaman-island',
    tourCode: 'IND-AND-05',
    title: 'Exotic Andaman: Port Blair, Havelock Island & Radhanagar Beach',
    category: 'india',
    region: 'Island & Coastal',
    specialityType: 'honeymoon',
    durationDays: 6,
    durationNights: 5,
    route: 'Port Blair 2N · Havelock Island 2N · Neil Island 1N',
    priceInr: 43500,
    originalPriceInr: 49000,
    emiStartsFromInr: 3625,
    rating: 4.8,
    reviewsCount: 1240,
    badge: 'Honeymoon Favorite',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    destinationSummary: 'Walk upon Asia finest Radhanagar Beach, take Makruzz luxury catamaran cruise, witness moving Cellular Jail Light & Sound Show, and snorkel through coral reefs at Elephant Beach.',
    departureDates: ['11 Apr 2026', '18 Apr 2026', '25 Apr 2026', '02 May 2026'],
    departureCities: ['Mumbai', 'Pune', 'Delhi NCR', 'Kolkata', 'Chennai'],
    inclusions: [
      'Return Airfare to Port Blair',
      'Makruzz / Nautika High-Speed AC Cruise transfers between Islands',
      'Beachside 4-Star Resorts on Havelock and Neil Islands',
      'All Meals with delicious seafood & authentic Indian vegetarian/Jain cuisine',
      'Cellular Jail historic tour & Light and Sound show entry',
      'Elephant Beach speedboat trip with complimentary snorkeling session',
      'Dedicated Veena World Tour Manager accompanying group'
    ],
    exclusions: ['Scuba diving & Sea walking fees', 'Camera permits'],
    itinerary: [
      { day: 1, title: 'Arrival Port Blair — Cellular Jail Light & Sound', description: 'Arrive at Veer Savarkar Airport Port Blair. Visit Cellular Jail National Memorial and attend the emotive Sound & Light show.', meals: 'Lunch, Dinner' },
      { day: 2, title: 'Port Blair to Havelock on High-Speed Catamaran', description: 'Board luxury Makruzz catamaran to Havelock. Check in to beachfront resort. Visit Asia No. 1 Radhanagar Beach at sunset.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 3, title: 'Havelock Island — Elephant Beach Snorkeling', description: 'Speedboat ride to Elephant Beach. Marvel at live coral reefs and tropical marine life with snorkeling.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 4, title: 'Havelock to Neil Island (Shaheed Dweep)', description: 'Cruise to Neil Island. Visit Bharatpur Beach, natural limestone rock bridge, and Laxmanpur Beach sunset.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 5, title: 'Neil Island to Port Blair', description: 'Return cruise to Port Blair. Visit Sagarika Emporium for pearl jewelry and local coconut shell handicrafts. Gala farewell dinner.', meals: 'Breakfast, Lunch, Gala Dinner' },
      { day: 6, title: 'Departure from Port Blair', description: 'Transfer to Port Blair Airport for flight back with sun-kissed island memories.', meals: 'Breakfast' }
    ]
  },
  {
    id: 'vw-ladakh-high-passes',
    tourCode: 'IND-LAD-06',
    title: 'Land of High Passes: Leh Ladakh, Nubra Valley & Pangong Lake',
    category: 'india',
    region: 'Himalayas & Kashmir',
    specialityType: 'family',
    durationDays: 8,
    durationNights: 7,
    route: 'Leh 3N · Nubra Valley 2N · Pangong Lake 1N · Leh 1N',
    priceInr: 52000,
    originalPriceInr: 58500,
    emiStartsFromInr: 4333,
    rating: 4.9,
    reviewsCount: 1530,
    badge: 'Adventure & Wonder',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    destinationSummary: 'Cross Khardung La at 17,982 ft (world highest motorable pass), ride double-humped Bactrian camels on white sand dunes in Hunder, and watch changing turquoise shades of Pangong Tso.',
    departureDates: ['10 May 2026', '17 May 2026', '24 May 2026', '31 May 2026'],
    departureCities: ['Mumbai', 'Delhi NCR', 'Pune', 'Ahmedabad', 'Bengaluru'],
    inclusions: [
      'Return Airfare to Leh Kushok Bakula Rimpochee Airport',
      'Deluxe heated hotel rooms in Leh & Deluxe Alpine camps in Nubra and Pangong',
      'All Meals with hot, nourishing multicuisine and comforting soups',
      'Oxygen cylinder equipped luxury tempo traveller/SUV with certified mountain driver',
      'Inner Line permits and Wildlife conservation fees included',
      'Experienced Tour Manager with altitude acclimatization protocols'
    ],
    exclusions: ['Camel safari charges at Hunder', 'Personal medical emergencies beyond first-aid'],
    itinerary: [
      { day: 1, title: 'Arrival in Leh — Complete Rest & Acclimatization', description: 'Fly into Leh (11,500 ft). Transfer to hotel. Mandatory rest day for altitude acclimatization with hot soup and light meals.', meals: 'Lunch, Dinner' },
      { day: 2, title: 'Leh Local — Shanti Stupa, Hall of Fame & Market', description: 'Visit Shanti Stupa built by Japanese monks, Indian Army Hall of Fame museum, and Leh Main Bazaar.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 3, title: 'Leh to Nubra Valley via Khardung La Pass (17,982 ft)', description: 'Spectacular drive over world-famous Khardung La. Descend into Nubra Valley and ride Bactrian double-humped camels at Hunder dunes.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 4, title: 'Turtuk Village Excursion (Balti Culture)', description: 'Scenic drive to Turtuk, India northernmost village opened to tourists. Experience unique Balti culture and apricot orchards.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 5, title: 'Nubra Valley to Pangong Tso via Shyok River', description: 'Drive along Shyok River to world-famous Pangong Lake (14,270 ft). Stare in wonder as the lake shifts from deep navy to turquoise.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 6, title: 'Pangong Lake Sunrise to Leh via Chang La', description: 'Witness glorious sunrise over Pangong. Return to Leh crossing Chang La pass (17,590 ft). Visit Thiksey Monastery.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 7, title: 'Leh — Magnetic Hill & Indus-Zanskar Sangam', description: 'Visit the defying-gravity Magnetic Hill, Gurudwara Pathar Sahib, and dramatic confluence of Indus and Zanskar rivers. Gala farewell.', meals: 'Breakfast, Lunch, Gala Dinner' },
      { day: 8, title: 'Departure from Leh', description: 'Transfer to Leh Airport with awe-inspiring memories of the Trans-Himalayas.', meals: 'Breakfast' }
    ]
  },

  // WORLD TOURS
  {
    id: 'vw-swiss-paris-magic',
    tourCode: 'WLD-EUR-01',
    title: 'Highlights of Switzerland & Paris with Mt Titlis & Eiffel Tower',
    category: 'world',
    region: 'Europe',
    specialityType: 'family',
    durationDays: 8,
    durationNights: 7,
    route: 'Zurich 1N · Lucerne 2N · Interlaken 1N · Paris 3N',
    priceInr: 228000,
    originalPriceInr: 249000,
    emiStartsFromInr: 19000,
    rating: 4.9,
    reviewsCount: 3200,
    badge: 'Europe Best Seller',
    imageUrl: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=800&q=80',
    destinationSummary: 'Ride Rotair revolving cable car to Mt Titlis snow glacier, cruise Lake Lucerne, ascend Eiffel Tower 3rd Level in Paris, and cruise down the River Seine with Indian food and Bollywood landmarks.',
    departureDates: ['15 Apr 2026', '25 Apr 2026', '05 May 2026', '15 May 2026', '25 May 2026'],
    departureCities: ['Mumbai', 'Delhi NCR', 'Bengaluru', 'Ahmedabad', 'Hyderabad'],
    inclusions: [
      'Return International Airfare (Full Service Carrier with baggage)',
      'Schengen Visa assistance & comprehensive international travel insurance',
      'Centrally located 4-Star Premium Hotels throughout Europe',
      'All Meals: Daily Buffet Breakfast, Lunch & Dinner by Indian traveling kitchen / verified Indian restaurants',
      'Mt Titlis with Rotair Revolving Cable Car & Ice Flyer chairlift',
      'Eiffel Tower Level 3 summit ticket included',
      'Illuminated Seine River Sightseeing Cruise in Paris',
      'High-Speed TGV Train from Switzerland to Paris',
      'Dedicated Veena World Experienced Hindi/English Tour Manager'
    ],
    exclusions: ['Optional Lido / Moulin Rouge Cabaret show in Paris', 'Personal shopping'],
    itinerary: [
      { day: 1, title: 'Arrival in Zurich, Switzerland', description: 'Board international flight to Zurich. Welcomed by your Tour Manager. Orientation drive of financial capital and check in to hotel.', meals: 'Dinner' },
      { day: 2, title: 'Rhine Falls & Lucerne City Tour', description: 'Visit Europe largest waterfall Rhine Falls with boat ride. Stroll Chapel Bridge and Lion Monument in picturesque Lucerne.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 3, title: 'Mount Titlis Snow Mountain & Rotair', description: 'Ascend 10,000 ft Mt Titlis on world first revolving Rotair cable car. Experience Ice Flyer, Glacier cave, and Cliff Walk.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 4, title: 'Interlaken & Jungfrau Top of Europe Option', description: 'Visit scenic Bollywood shooting hub Interlaken nestled between Lakes Thun and Brienz. View the mighty Eiger, Monch, and Jungfrau peaks.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 5, title: 'High-Speed TGV Train to Romantic Paris', description: 'Board high-speed TGV bullet train to Paris, France. Evening panoramic illuminated Seine River Cruise witnessing glittering monuments.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 6, title: 'Paris City Tour & Eiffel Tower Summit (3rd Level)', description: 'Ascend to the top 3rd Level of the Eiffel Tower for panoramic vistas of Paris. Drive past Arc de Triomphe, Champs-Elysees, and Louvre pyramid.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 7, title: 'Palace of Versailles or Disneyland Option', description: 'Visit the lavish Hall of Mirrors at Palace of Versailles or spend day at Disneyland Paris. Evening gala dinner celebration.', meals: 'Breakfast, Lunch, Gala Dinner' },
      { day: 8, title: 'Departure from Paris Charles de Gaulle', description: 'Transfer to Paris CDG Airport for your flight back home carrying joyful memories of Europe.', meals: 'Breakfast' }
    ]
  },
  {
    id: 'vw-grand-europe-wonder',
    tourCode: 'WLD-EUR-02',
    title: 'Grand Europe Odyssey: 7 Countries in 14 Unforgettable Days',
    category: 'world',
    region: 'Europe',
    specialityType: 'senior',
    durationDays: 14,
    durationNights: 13,
    route: 'London 2N · Paris 3N · Brussels/Amsterdam 2N · Germany 1N · Swiss 3N · Austria 1N · Italy 1N',
    priceInr: 345000,
    originalPriceInr: 380000,
    emiStartsFromInr: 28750,
    rating: 4.9,
    reviewsCount: 2840,
    badge: 'Flagship World Tour',
    imageUrl: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',
    destinationSummary: 'The ultimate European pilgrimage: London Eye, Madame Tussauds, Eurostar underwater train, Paris Eiffel Tower, Amsterdam Keukenhof tulip gardens, Rhine Valley, Swiss Alps, and Venice Gondola ride.',
    departureDates: ['18 Apr 2026', '02 May 2026', '16 May 2026', '30 May 2026'],
    departureCities: ['Mumbai', 'Delhi NCR', 'Pune', 'Ahmedabad', 'Bengaluru'],
    inclusions: [
      'Return Airfare, UK & Schengen Visa Processing Support',
      'Eurostar Bullet Train underwater tunnel transit (London to Paris)',
      '4-Star Premium Hotels across 7 European Nations',
      'All 3 Meals Every Day: Indian Breakfast, Hot Indian Lunch, Indian Dinner',
      'Venice private motorboat & Gondola ride included',
      'Mt Titlis revolving cable car & Rhine Falls boat ride',
      'Eiffel Tower Level 3 summit and London Eye flight ticket',
      '2 Dedicated Tour Managers with doctor-on-call insurance backing'
    ],
    exclusions: ['City taxes paid at hotel check-in', 'Souvenirs'],
    itinerary: [
      { day: 1, title: 'Arrival in London, UK', description: 'Arrive in British capital London. Check in to luxury suburban hotel. Warm Indian welcome dinner.', meals: 'Dinner' },
      { day: 2, title: 'London Sightseeing — Big Ben, London Eye & Madame Tussauds', description: 'See Westminster Abbey, Buckingham Palace, ride giant London Eye capsule, and meet world stars at Madame Tussauds.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 3, title: 'Eurostar to Paris — City of Lights', description: 'Speed through the English Channel Tunnel aboard Eurostar to Paris. Evening illuminated Seine River Cruise.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 4, title: 'Paris — Eiffel Tower Summit & City Highlights', description: 'Climb Eiffel Tower 3rd Level summit. Tour Champs-Elysees, Place de la Concorde, and Notre Dame square.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 5, title: 'Paris to Brussels (Belgium) & Amsterdam (Netherlands)', description: 'Drive past Grand Place & Atomium in Brussels. Enter Netherlands for canal cruise in picturesque Amsterdam.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 6, title: 'Keukenhof Tulip Gardens & Zaanse Schans Windmills', description: 'Marvel at millions of blooming tulips at Keukenhof Gardens. Visit traditional cheese farm and wooden clog craftsmen.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 7, title: 'Germany — Cologne Cathedral & Black Forest', description: 'Visit towering Gothic Cologne Cathedral and drive along scenic Rhine river to Black Forest clockmakers.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 8, title: 'Rhine Falls to Central Switzerland', description: 'Feel spray of Rhine Falls, Europe largest waterfall. Arrive in storybook Switzerland.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 9, title: 'Mt Titlis Snow Mountain & Lucerne', description: 'Ascend Mt Titlis in Rotair revolving cable car. Explore wooden Chapel Bridge and Swiss chocolate shops in Lucerne.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 10, title: 'Liechtenstein to Innsbruck, Austria', description: 'Drive through tiny principality Liechtenstein to Innsbruck. Visit Golden Roof and Swarovski Crystal World museum.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 11, title: 'Innsbruck to Floating City Venice, Italy', description: 'Cross dramatic Brenner Pass into Italy. Private motorboat to St. Mark Square. Iconic romantic Venetian Gondola ride.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 12, title: 'Pisa Leaning Tower & Florence', description: 'Photograph the gravity-defying Leaning Tower of Pisa in Miracle Square. Walking tour of Renaissance Florence.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 13, title: 'Eternal City Rome & Vatican City', description: 'Tour Colosseum exterior, Trevi Fountain coin toss, and St. Peter Basilica in Vatican City. Grand Gala Farewell Dinner.', meals: 'Breakfast, Lunch, Gala Dinner' },
      { day: 14, title: 'Departure from Rome Fiumicino', description: 'Transfer to Rome Airport for flight back to India with a lifetime of memories.', meals: 'Breakfast' }
    ]
  },
  {
    id: 'vw-dubai-extravaganza',
    tourCode: 'WLD-DXB-03',
    title: 'Dazzling Dubai & Abu Dhabi with Desert Safari & Burj Khalifa',
    category: 'world',
    region: 'Middle East',
    specialityType: 'family',
    durationDays: 6,
    durationNights: 5,
    route: 'Dubai 4N · Abu Dhabi Day Excursion',
    priceInr: 68500,
    originalPriceInr: 77000,
    emiStartsFromInr: 5708,
    rating: 4.9,
    reviewsCount: 4120,
    badge: 'Popular Family Getaway',
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    destinationSummary: 'Stand on top of the world at Burj Khalifa 124th floor, enjoy thrilling 4x4 dune bashing desert safari with belly dancing and BBQ dinner, explore Sheikh Zayed Grand Mosque, and shop at Gold Souk.',
    departureDates: ['07 Apr 2026', '14 Apr 2026', '21 Apr 2026', '28 Apr 2026', '05 May 2026'],
    departureCities: ['Mumbai', 'Delhi NCR', 'Pune', 'Ahmedabad', 'Bengaluru', 'Chennai'],
    inclusions: [
      'Return Airfare with Emirates / Flydubai / Air India',
      'UAE Tourist Visa & OK to Board processing',
      'Luxury 4-Star Downtown Dubai Hotel with swimming pool',
      'All Meals Included with pure veg & Jain choices at Indian restaurants',
      'Burj Khalifa 124th Floor observation deck entry during non-peak hours',
      '4x4 Land Cruiser Desert Safari with dune bashing, camel ride, Tanoura dance & BBQ dinner',
      'Marina Dhow Cruise dinner with live music',
      'Full Day Abu Dhabi tour with Sheikh Zayed Grand Mosque entry',
      'Veena World Dedicated Tour Manager with 24x7 guest support'
    ],
    exclusions: ['Tourism Dirham tax paid at hotel checkout (approx AED 15/night)', 'Personal shopping at malls'],
    itinerary: [
      { day: 1, title: 'Arrival in Dubai & Marina Dhow Cruise', description: 'Fly into glittering Dubai. Check in to hotel. Evening romantic Dhow Cruise along illuminated Dubai Marina with dinner.', meals: 'Lunch, Dinner' },
      { day: 2, title: 'Dubai City Tour & Burj Khalifa (124th Floor)', description: 'Photo stop at Burj Al Arab and Palm Jumeirah Atlantis. Visit Dubai Mall, watch fountain show, and zoom up Burj Khalifa 124th floor.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 3, title: 'Miracle Garden & 4x4 Desert Safari Gala', description: 'Visit millions of floral blooms at Dubai Miracle Garden. Afternoon 4x4 dune bashing in red desert sands, sandboarding, and Arabic BBQ feast.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 4, title: 'Full Day Abu Dhabi Grand Mosque & Ferrari World Photo', description: 'Drive to UAE capital Abu Dhabi. Marvel at pristine white marble Sheikh Zayed Grand Mosque, visit BAPS Hindu Mandir, and photo stop at Ferrari World.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 5, title: 'Gold Souk, Spice Souk & Museum of the Future', description: 'Experience traditional Abra water taxi ride across Dubai Creek to Gold & Spice Souks. Photo stop at architectural marvel Museum of the Future.', meals: 'Breakfast, Lunch, Gala Dinner' },
      { day: 6, title: 'Departure from Dubai', description: 'Final souvenir shopping at airport duty free before boarding flight back home.', meals: 'Breakfast' }
    ]
  },
  {
    id: 'vw-singapore-malaysia',
    tourCode: 'WLD-SEA-04',
    title: 'Spectacular Singapore & Malaysia with Sentosa & Genting',
    category: 'world',
    region: 'South East Asia',
    specialityType: 'family',
    durationDays: 7,
    durationNights: 6,
    route: 'Singapore 3N · Kuala Lumpur 2N · Genting Highlands 1N',
    priceInr: 89500,
    originalPriceInr: 99000,
    emiStartsFromInr: 7458,
    rating: 4.8,
    reviewsCount: 2310,
    badge: 'Kids & Family Favorite',
    imageUrl: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
    destinationSummary: 'Explore futuristic Gardens by the Bay, ride cable car to Sentosa Island, visit Universal Studios, climb Batu Caves rainbow steps in Malaysia, and ride cable car to mountain casino resort Genting Highlands.',
    departureDates: ['12 Apr 2026', '19 Apr 2026', '26 Apr 2026', '03 May 2026'],
    departureCities: ['Mumbai', 'Delhi NCR', 'Pune', 'Bengaluru', 'Chennai', 'Kolkata'],
    inclusions: [
      'Return Airfare to Singapore / from Kuala Lumpur',
      'Singapore & Malaysia Tourist Visas assistance',
      '4-Star Premium Hotels in Singapore, Kuala Lumpur, and Genting',
      'All Meals Included with delicious hot Indian vegetarian and Jain options',
      'Universal Studios Singapore full day pass included',
      'Sentosa Island cable car, Wings of Time laser light show & S.E.A. Aquarium',
      'Gardens by the Bay Flower Dome & Supertree Grove',
      'Batu Caves Murugan Temple & Genting Skyway Cable Car',
      'Veena World Dedicated Tour Manager accompanying throughout'
    ],
    exclusions: ['Universal Studios express pass', 'Personal shopping'],
    itinerary: [
      { day: 1, title: 'Arrival in Singapore — Night Safari', description: 'Fly into Changi Airport. Transfer to hotel. Evening visit to world first nocturnal zoo, the Singapore Night Safari on a tram.', meals: 'Lunch, Dinner' },
      { day: 2, title: 'Universal Studios Singapore Full Day Thrills', description: 'Spend full day experiencing Transformers, Battlestar Galactica rollercoasters, Jurassic Park rapids, and Minion Land.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 3, title: 'City Tour, Gardens by the Bay & Sentosa', description: 'Photo stop at iconic Merlion Park. Visit climate-controlled Flower Dome at Gardens by the Bay. Afternoon Sentosa Island with Wings of Time show.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 4, title: 'Singapore to Kuala Lumpur (Malaysia)', description: 'Comfortable cross-border coach drive to Malaysian capital Kuala Lumpur. Evening photo stop at illuminated 88-storey Petronas Twin Towers.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 5, title: 'Kuala Lumpur to Genting Highlands via Batu Caves', description: 'Climb 272 rainbow steps of Batu Caves with 140 ft golden Lord Murugan statue. Board Genting Skyway cable car to mountain resort.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 6, title: 'Genting Highlands to Kuala Lumpur City', description: 'Enjoy Genting SkyWorlds theme park or casino. Return to Kuala Lumpur for shopping at Bukit Bintang. Gala dinner.', meals: 'Breakfast, Lunch, Gala Dinner' },
      { day: 7, title: 'Departure from Kuala Lumpur International Airport', description: 'Transfer to KLIA for flight home with cherished memories of the Orient.', meals: 'Breakfast' }
    ]
  },
  {
    id: 'vw-japan-cherry-blossom',
    tourCode: 'WLD-JAP-05',
    title: 'Simply Japan: Tokyo, Mount Fuji, Kyoto & Bullet Train Shinkansen',
    category: 'world',
    region: 'Far East Asia',
    specialityType: 'senior',
    durationDays: 8,
    durationNights: 7,
    route: 'Tokyo 3N · Mt Fuji 1N · Kyoto 2N · Osaka 1N',
    priceInr: 285000,
    originalPriceInr: 310000,
    emiStartsFromInr: 23750,
    rating: 4.9,
    reviewsCount: 980,
    badge: "Senior's & Culture Special",
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    destinationSummary: 'Ascend Mt Fuji 5th Station, cruise Lake Ashi on a pirate ship, ride Shinkansen Bullet Train at 300 km/h, walk through thousands of vermilion Torii gates at Fushimi Inari in Kyoto, and taste Indian meals in Japan.',
    departureDates: ['06 Apr 2026', '16 Apr 2026', '26 Apr 2026', '06 May 2026'],
    departureCities: ['Mumbai', 'Delhi NCR', 'Bengaluru'],
    inclusions: [
      'Return Airfare with All Nippon Airways / Japan Airlines',
      'Japan Tourist Visa processing support',
      '4-Star Premium Hotels throughout Tokyo, Fuji resort, Kyoto, and Osaka',
      'All Meals Included: Daily Japanese buffet breakfast, Indian Lunch & Indian Dinner',
      'Shinkansen Bullet Train Experience ticket included',
      'Mt Fuji 5th Station visit and Hakone Lake Ashi pirate boat cruise',
      'Kyoto Golden Pavilion (Kinkaku-ji) & Fushimi Inari Shrine entry',
      'Veena World Dedicated Tour Manager accompanying from India'
    ],
    exclusions: ['Luggage forwarding excess bags', 'Personal shopping'],
    itinerary: [
      { day: 1, title: 'Arrival in Tokyo, Japan', description: 'Fly into Tokyo Haneda/Narita. Welcomed by Tour Manager. Check in to Tokyo hotel. Warm welcome dinner.', meals: 'Dinner' },
      { day: 2, title: 'Tokyo City Highlights — Asakusa Sensoji & Shibuya Crossing', description: 'Visit Tokyo oldest Buddhist temple Sensoji, Nakamise shopping street, photo stop at Tokyo Skytree, and experience world busiest Shibuya pedestrian crossing.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 3, title: 'Tokyo Imperial Palace & Odaiba Island', description: 'Stroll around Nijubashi bridge at Imperial Palace gardens. Explore modern Odaiba bay with giant Gundam robot and Rainbow Bridge views.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 4, title: 'Mount Fuji 5th Station & Hakone Cruise', description: 'Drive up sacred Mount Fuji 5th Station (2,300m) for panoramic vistas. Cruise picturesque Lake Ashi and take Hakone Ropeway.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 5, title: 'Bullet Train Shinkansen to Ancient Kyoto', description: 'Experience the exhilarating 300 km/h Shinkansen Bullet Train journey to cultural capital Kyoto. Visit the gleaming Golden Pavilion Kinkaku-ji.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 6, title: 'Kyoto — Fushimi Inari Shrine & Arashiyama Bamboo Grove', description: 'Walk through thousands of vibrant orange Torii gates at Fushimi Inari Taisha. Stroll through the towering, soothing stalks of Arashiyama Bamboo Forest.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 7, title: 'Kyoto to Osaka — Osaka Castle & Dotonbori', description: 'Drive to food capital Osaka. Tour historic Osaka Castle museum and stroll neon-lit Dotonbori canal. Gala Farewell Dinner with Japanese sweet treats.', meals: 'Breakfast, Lunch, Gala Dinner' },
      { day: 8, title: 'Departure from Osaka Kansai Airport', description: 'Transfer to Kansai International Airport for flight home carrying profound respect for Japanese culture and hospitality.', meals: 'Breakfast' }
    ]
  },
  {
    id: 'vw-vietnam-cambodia',
    tourCode: 'WLD-VIC-06',
    title: 'Wonders of Vietnam & Cambodia: Halong Bay Cruise & Angkor Wat',
    category: 'world',
    region: 'South East Asia',
    specialityType: 'family',
    durationDays: 9,
    durationNights: 8,
    route: 'Hanoi 2N · Halong Bay Cruise 1N · Da Nang 2N · Siem Reap 3N',
    priceInr: 124500,
    originalPriceInr: 139000,
    emiStartsFromInr: 10375,
    rating: 4.9,
    reviewsCount: 1180,
    badge: 'Trending International Tour',
    imageUrl: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
    destinationSummary: 'Overnight luxury junk cruise through emerald karst waters of Halong Bay, walk the famous Golden Hand Bridge at Ba Na Hills in Da Nang, and witness sunrise over ancient Angkor Wat temple complex in Cambodia.',
    departureDates: ['10 Apr 2026', '20 Apr 2026', '30 Apr 2026', '10 May 2026'],
    departureCities: ['Mumbai', 'Delhi NCR', 'Pune', 'Ahmedabad', 'Bengaluru'],
    inclusions: [
      'Return Airfare & Internal flights (Hanoi to Da Nang, Da Nang to Siem Reap)',
      'E-Visa processing support for Vietnam & Cambodia',
      '4-Star & 5-Star Hotels plus 5-Star Luxury Overnight Cruise in Halong Bay',
      'All Meals with dedicated Indian Vegetarian/Jain cuisine selections',
      'Ba Na Hills cable car & Golden Bridge entry included',
      'Angkor Wat, Bayon & Ta Prohm (Tomb Raider) temple passes included',
      'Dedicated Veena World Tour Manager'
    ],
    exclusions: ['Optional boat ride at Tonle Sap', 'Personal tips'],
    itinerary: [
      { day: 1, title: 'Arrival in Hanoi, Vietnam', description: 'Fly into historic Hanoi. Check in to hotel. Evening water puppet show and cyclo rickshaw tour of Old Quarter.', meals: 'Lunch, Dinner' },
      { day: 2, title: 'Hanoi City Tour & Ho Chi Minh Mausoleum', description: 'Visit One Pillar Pagoda, Temple of Literature (Vietnam first university), and peaceful Hoan Kiem Lake.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 3, title: 'Hanoi to Halong Bay 5-Star Overnight Cruise', description: 'Drive to UNESCO World Heritage Halong Bay. Board luxury wooden ship. Sail past limestone karst islands, kayak in emerald caves.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 4, title: 'Halong Bay Sunrise & Fly to Da Nang', description: 'Morning Tai Chi on sundeck and explore Sung Sot Surprise Cave. Disembark and take short flight to coastal resort Da Nang.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 5, title: 'Ba Na Hills & World-Famous Golden Hand Bridge', description: 'Ascend world longest single-wire cable car to Ba Na Hills. Walk across the colossal stone Hands holding the Golden Bridge in the clouds.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 6, title: 'Da Nang to Siem Reap, Cambodia', description: 'Fly to Siem Reap, gateway to ancient Khmer empire. Evening visit to vibrant Pub Street and Night Market.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 7, title: 'Angkor Wat Sunrise & Ancient Temples', description: 'Witness unforgettable golden sunrise over Angkor Wat towers. Explore Bayon 216 smiling stone faces and tree-strangled Ta Prohm temple.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 8, title: 'Banteay Srei & Cambodian Cultural Gala', description: 'Visit intricately carved pink sandstone Banteay Srei temple. Evening royal Apsara dance performance with gala farewell banquet.', meals: 'Breakfast, Lunch, Gala Dinner' },
      { day: 9, title: 'Departure from Siem Reap', description: 'Transfer to airport for flight home with magical memories of Indochina.', meals: 'Breakfast' }
    ]
  }
];

export const TOP_DESTINATIONS: DestinationHighlight[] = [
  {
    id: 'dest-kashmir',
    name: 'Kashmir',
    countryOrState: 'India',
    toursCount: 18,
    startingPriceInr: 34500,
    imageUrl: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=600&q=80',
    tag: 'Paradise on Earth',
    category: 'india'
  },
  {
    id: 'dest-switzerland',
    name: 'Switzerland',
    countryOrState: 'Europe',
    toursCount: 24,
    startingPriceInr: 198000,
    imageUrl: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=600&q=80',
    tag: 'Alps & Glaciers',
    category: 'world'
  },
  {
    id: 'dest-himachal',
    name: 'Himachal Pradesh',
    countryOrState: 'India',
    toursCount: 22,
    startingPriceInr: 29500,
    imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80',
    tag: 'Snow & Valleys',
    category: 'india'
  },
  {
    id: 'dest-dubai',
    name: 'Dubai & UAE',
    countryOrState: 'Middle East',
    toursCount: 16,
    startingPriceInr: 58000,
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80',
    tag: 'Luxury & Safari',
    category: 'world'
  },
  {
    id: 'dest-rajasthan',
    name: 'Rajasthan',
    countryOrState: 'India',
    toursCount: 26,
    startingPriceInr: 32000,
    imageUrl: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=600&q=80',
    tag: 'Royal Heritage',
    category: 'india'
  },
  {
    id: 'dest-japan',
    name: 'Japan',
    countryOrState: 'Far East',
    toursCount: 12,
    startingPriceInr: 245000,
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80',
    tag: 'Cherry Blossoms',
    category: 'world'
  },
  {
    id: 'dest-kerala',
    name: 'Kerala',
    countryOrState: 'India',
    toursCount: 20,
    startingPriceInr: 28500,
    imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80',
    tag: 'Backwaters & Tea',
    category: 'india'
  },
  {
    id: 'dest-singapore',
    name: 'Singapore & Malaysia',
    countryOrState: 'South East Asia',
    toursCount: 15,
    startingPriceInr: 78000,
    imageUrl: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=80',
    tag: 'Futuristic Wonder',
    category: 'world'
  }
];

export const SPECIALITY_TOUR_TYPES = [
  {
    id: 'women',
    title: "Women's Special",
    subtitle: 'Safe, fun & carefree vacations only for women travelers with all-women groups and caring tour managers.',
    icon: '🌸',
    color: '#E91E63',
    bgColor: '#FCE4EC',
    sampleTours: ['Thailand Women Special', 'Kashmir Women Special', 'Rajasthan Royals for Women', 'Dubai Shopping Special']
  },
  {
    id: 'senior',
    title: "Senior's Special",
    subtitle: 'Relaxed itineraries, elevator hotels, gentle pacing, medical support, and guaranteed room partner for solo seniors.',
    icon: '👴',
    color: '#00897B',
    bgColor: '#E0F2F1',
    sampleTours: ['Japan Senior Special', 'Europe Easy Paced for Seniors', 'Char Dham Senior Yatra', 'Nepal Senior Pilgrimage']
  },
  {
    id: 'honeymoon',
    title: 'Honeymoon Special',
    subtitle: 'Romantic candlelight dinners, luxury scenic villas, private transfers, and bespoke keepsakes for newlyweds.',
    icon: '💍',
    color: '#D81B60',
    bgColor: '#FCE4EC',
    sampleTours: ['Switzerland Honeymoon', 'Bali Luxury Private Pool Villas', 'Maldives Overwater Bunglow', 'Kashmir Romantic Shikara']
  },
  {
    id: 'family',
    title: 'Family Group Tours',
    subtitle: 'Cherished bonding holidays where all generations travel together with wholesome Indian meals and fun activities.',
    icon: '👨‍👩‍👧‍👦',
    color: '#1E88E5',
    bgColor: '#E3F2FD',
    sampleTours: ['Grand Europe Wonder', 'Himachal Delight', 'Dubai & Abu Dhabi', 'Singapore Universal Studios']
  },
  {
    id: 'jubilee',
    title: 'Jubilee & Celebrations',
    subtitle: 'Celebrate 25th or 50th anniversaries, milestones, and reunions with custom celebratory cake cutting and photography.',
    icon: '🎉',
    color: '#FB8C00',
    bgColor: '#FFF3E0',
    sampleTours: ['Royal Palace Anniversary Tour', 'Paris Eiffel Romance', 'Kerala Backwater Retreat', 'Goa Beach Celebration']
  }
];

export const VEENA_REVIEWS: VeenaReview[] = [
  {
    id: 'rev-1',
    guestName: 'Suresh & Sunita Deshmukh',
    city: 'Dadar, Mumbai',
    tourTaken: 'Highlights of Switzerland & Paris (May 2025)',
    rating: 5,
    date: '18 Jun 2025',
    reviewText: 'This was our 4th tour with Veena World and they continue to exceed expectations. Ascending Mt Titlis with our Tour Manager Nikhil was effortless. What amazed us was getting hot Gujarati Khichdi and Jain subzi right in the middle of Switzerland! 100% recommended for every family.',
    tourManagerName: 'Nikhil Kulkarni'
  },
  {
    id: 'rev-2',
    guestName: 'Anuradha Joshi',
    city: 'Kothrud, Pune',
    tourTaken: "Women's Special Kashmir Paradise",
    rating: 5,
    date: '24 Sep 2025',
    reviewText: 'Traveling solo on the Women’s Special was the most liberating experience of my life. I made 22 new sisters on this tour. From the Shikara songs in Dal Lake to the snow fights in Gulmarg, everything was orchestrated safely and with immense joy.',
    tourManagerName: 'Priyanka Sawant'
  },
  {
    id: 'rev-3',
    guestName: 'Mahesh & Rekha Agarwal',
    city: 'Vasant Vihar, New Delhi',
    tourTaken: 'Dazzling Dubai & Abu Dhabi Family Tour',
    rating: 5,
    date: '12 Jan 2026',
    reviewText: 'Traveling with elderly parents and two energetic teenage boys is usually stressful, but Veena World’s planning made it smooth as silk. The Abu Dhabi Grand Mosque and the Desert Safari were memories our family will treasure forever.',
    tourManagerName: 'Rahul Sharma'
  },
  {
    id: 'rev-4',
    guestName: 'Dr. Prabhakar Rao',
    city: 'Malleshwaram, Bengaluru',
    tourTaken: "Senior's Special Japan Cherry Blossom",
    rating: 5,
    date: '02 Apr 2025',
    reviewText: 'As 72-year-old seniors traveling internationally, safety and pacing are everything. Our Tour Manager ensured room partner allocation, luggage handling, wheelchair assistance at train stations, and familiar food. Simply world class service.',
    tourManagerName: 'Amol Shinde'
  }
];

export const TRUST_PILLARS = [
  {
    stat: '10,00,000+',
    label: 'Happy Guests',
    desc: 'Over 10 Lakh tourists have celebrated life with Veena World across all 7 continents.'
  },
  {
    stat: '100%',
    label: 'Guaranteed Departures',
    desc: 'Once your tour is confirmed, you travel. No last-minute cancellations or uncertainty.'
  },
  {
    stat: '1,200+',
    label: 'Dedicated Tour Managers',
    desc: 'Passionate, caring travel companions with you from boarding to safe return home.'
  },
  {
    stat: 'All Meals',
    label: 'Indian Chef On Tour',
    desc: 'Freshly prepared pure vegetarian, Jain, and non-veg options on international & domestic trips.'
  },
  {
    stat: '100+ Hubs',
    label: 'Pan-India Presence',
    desc: 'Flagship sales offices and travel agents across Maharashtra, Gujarat, Delhi, Karnataka & more.'
  },
  {
    stat: '0 Hidden Fees',
    label: 'All-Inclusive Pricing',
    desc: 'Airfare, hotels, all meals, sightseeing, tour manager, and taxes transparently included.'
  }
];

export const DEPARTURE_CITIES = [
  'All Cities',
  'Mumbai',
  'Pune',
  'Delhi NCR',
  'Ahmedabad',
  'Bengaluru',
  'Hyderabad',
  'Kolkata',
  'Nagpur',
  'Surat',
  'Thane',
  'Nashik'
];

export const DEPARTURE_MONTHS = [
  'All Months',
  'April 2026',
  'May 2026 (Summer Special)',
  'June 2026',
  'July 2026 (Monsoon Magic)',
  'August 2026',
  'September 2026',
  'October 2026 (Diwali Tours)',
  'November 2026',
  'December 2026 (Christmas & New Year)'
];

export interface VeenaBranch {
  id: string;
  city: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  timings: string;
  isHeadquarters?: boolean;
}

export const VEENA_BRANCHES: VeenaBranch[] = [
  {
    id: 'hq-vidyavihar',
    city: 'Mumbai',
    name: 'Veena World Corporate Office',
    address: 'Neelkanth Corporate Park, 4th Floor, Kirol Road, Vidyavihar (West), Mumbai 400086',
    phone: '1800 22 7979 / 022 6835 7979',
    email: 'travel@veenaworld.com',
    timings: 'Mon - Sun: 9:00 AM – 9:00 PM',
    isHeadquarters: true
  },
  {
    id: 'mumbai-dadar',
    city: 'Mumbai',
    name: 'Dadar West Sales Office',
    address: 'Sharda Cinema Compound, Naigaon Cross Road, Dadar (East), Mumbai 400014',
    phone: '022 6835 7901',
    email: 'dadar@veenaworld.com',
    timings: 'Mon - Sun: 9:30 AM – 8:30 PM'
  },
  {
    id: 'mumbai-borivali',
    city: 'Mumbai',
    name: 'Borivali West Travel Lounge',
    address: 'Shop No. 4, Ground Floor, Sai Leela Building, SV Road, Borivali (West), Mumbai 400092',
    phone: '022 6835 7905',
    email: 'borivali@veenaworld.com',
    timings: 'Mon - Sun: 9:30 AM – 8:30 PM'
  },
  {
    id: 'mumbai-thane',
    city: 'Thane',
    name: 'Thane West Flagship Hub',
    address: 'Shop 1 & 2, High Street Mall, Kapurbawdi Junction, Thane (West) 400607',
    phone: '022 6835 7910',
    email: 'thane@veenaworld.com',
    timings: 'Mon - Sun: 9:30 AM – 8:30 PM'
  },
  {
    id: 'pune-fcroad',
    city: 'Pune',
    name: 'Pune FC Road Flagship Lounge',
    address: 'CTS 1205/1/1, Shirole Heights, Fergusson College Road, Shivajinagar, Pune 411004',
    phone: '020 6835 7979',
    email: 'pune@veenaworld.com',
    timings: 'Mon - Sun: 9:30 AM – 8:30 PM'
  },
  {
    id: 'pune-kothrud',
    city: 'Pune',
    name: 'Kothrud Sales Lounge',
    address: 'Shop No. 3, Mayur Colony, Near Dashbhuja Ganpati, Kothrud, Pune 411038',
    phone: '020 6835 7915',
    email: 'kothrud@veenaworld.com',
    timings: 'Mon - Sun: 9:30 AM – 8:30 PM'
  },
  {
    id: 'delhi-cp',
    city: 'Delhi NCR',
    name: 'Connaught Place Travel Desk',
    address: 'Outer Circle, P-Block, Near Statesman House, Connaught Place, New Delhi 110001',
    phone: '011 6835 7979',
    email: 'delhi@veenaworld.com',
    timings: 'Mon - Sun: 9:30 AM – 8:00 PM'
  },
  {
    id: 'ahmedabad-cg',
    city: 'Ahmedabad',
    name: 'C.G. Road Sales Hub',
    address: 'Shop No. 102, 1st Floor, Zodiac Square, Opposite Gurudwara, C.G. Road, Ahmedabad 380009',
    phone: '079 6835 7979',
    email: 'ahmedabad@veenaworld.com',
    timings: 'Mon - Sun: 9:30 AM – 8:30 PM'
  },
  {
    id: 'bengaluru-jayanagar',
    city: 'Bengaluru',
    name: 'Jayanagar 4th Block Hub',
    address: '11th Main Road, 4th Block, Near Cool Joint, Jayanagar, Bengaluru 560011',
    phone: '080 6835 7979',
    email: 'bengaluru@veenaworld.com',
    timings: 'Mon - Sun: 9:30 AM – 8:00 PM'
  }
];

export interface VeenaFaq {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const VEENA_FAQS: VeenaFaq[] = [
  {
    id: 'faq-1',
    category: 'Booking & Departure',
    question: 'What does "100% Guaranteed Departures" mean?',
    answer: 'At Veena World, once you book a confirmed departure date, your tour will definitely operate as scheduled. Unlike many operators who cancel groups when bookings are light, Veena World guarantees that your holiday plans will never be disrupted.'
  },
  {
    id: 'faq-2',
    category: 'Food & Meals',
    question: 'How are meals managed on international tours? Can I get Jain or Pure Veg food?',
    answer: 'Food is one of Veena World’s greatest hallmarks! On all European and long-haul group tours, we travel with dedicated Indian chefs or dine at handpicked authentic Indian restaurants. Fresh hot Breakfast, Lunch, and Dinner are provided daily. We cater extensively to Jain (no onion, no garlic, no root vegetables), Swaminarayan, and Pure Vegetarian dietary preferences.'
  },
  {
    id: 'faq-3',
    category: 'Tour Managers',
    question: 'Who will accompany us on tour?',
    answer: 'Every Veena World group tour is escorted from the boarding airport to the return flight by one of our highly trained, courteous, and knowledgeable Tour Managers. They manage hotel check-ins, coach logistics, sightseeing guidance, and medical assistance, making seniors, children, and first-time travelers feel entirely at home.'
  },
  {
    id: 'faq-4',
    category: 'Speciality Tours',
    question: 'I am a solo senior traveler. Can I join Senior’s Special tours?',
    answer: 'Absolutely! Our Senior’s Special tours feature a unique "Room Partner Guarantee" — if you travel solo, we match you with a fellow senior traveler of the same gender so you do not have to pay hefty single-occupancy surcharges. Our itineraries are relaxed, include elevator-accessible hotels, and prioritize medical safety.'
  },
  {
    id: 'faq-5',
    category: 'Payments & EMI',
    question: 'Are EMI payment options available for holiday packages?',
    answer: 'Yes! Veena World has partnered with leading Indian banks (HDFC, ICICI, SBI, Axis, Kotak) and credit card networks to offer low-cost 3, 6, 9, and 12-month easy EMI schemes. You can lock in current package prices and pay conveniently over time.'
  },
  {
    id: 'faq-6',
    category: 'Visas & Insurance',
    question: 'Do you provide Visa assistance and Travel Insurance?',
    answer: 'Yes, comprehensive international travel insurance (covering medical emergencies, baggage loss, and trip delays up to 70 years of age) is included in all our international tour prices. Our in-house Visa facilitation desk assists with Schengen, US, UK, Japan, and Singapore visa documentation and appointment scheduling.'
  }
];

export interface VeenaOffer {
  id: string;
  code: string;
  title: string;
  discount: string;
  description: string;
  validTill: string;
  category: 'summer' | 'women' | 'senior' | 'international';
  badge: string;
}

export const VEENA_OFFERS: VeenaOffer[] = [
  {
    id: 'off-summer-bonanza',
    code: 'SUMMER2026',
    title: 'Summer Holiday Family Bonanza',
    discount: 'Save up to ₹15,000 / family',
    description: 'Book any Europe, Switzerland, Kashmir, or Himachal departure for May-June 2026 and get an instant cash discount + free travel kit.',
    validTill: '30 Apr 2026',
    category: 'summer',
    badge: 'Trending Mega Offer'
  },
  {
    id: 'off-women-special',
    code: 'CELEBRATEWOMEN',
    title: 'Women’s Special Complimentary Perks',
    discount: 'Free Photoshoot & Gala Dinner',
    description: 'Every traveler on our all-women escorted tours receives a complimentary professional holiday photoshoot album and gala night celebration.',
    validTill: '15 May 2026',
    category: 'women',
    badge: 'Exclusive'
  },
  {
    id: 'off-senior-saver',
    code: 'SENIORCARE',
    title: 'Senior Citizen Companion Discount',
    discount: 'Flat ₹5,000 Off per couple',
    description: 'Applicable across all Senior’s Special pilgrimages, Japan Cherry Blossom, and Europe Leisure tours with guaranteed room partner option.',
    validTill: '31 May 2026',
    category: 'senior',
    badge: 'Senior Citizens'
  },
  {
    id: 'off-zero-cancel',
    code: 'FLEXIPROTECT',
    title: 'Zero Cancellation Fee Guarantee',
    discount: '100% Date Rescheduling',
    description: 'Change your travel date up to 30 days before departure with zero administrative rescheduling penalty on select domestic tours.',
    validTill: 'Ongoing 2026',
    category: 'international',
    badge: 'Flexi Shield'
  }
];

