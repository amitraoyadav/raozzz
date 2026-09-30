import { BusinessWebsite } from '../types';

export interface CaptureTrip {
  id: string;
  title: string;
  subtitle: string;
  category: 'spiti' | 'meghalaya' | 'kashmir' | 'ladakh' | 'himachal' | 'international' | 'weekend';
  categoryLabel: string;
  duration: string;
  pickupDrop: string;
  startingPrice: number;
  originalPrice: number;
  discountBadge?: string;
  rating: number;
  reviewsCount: number;
  badge: string;
  imageUrl: string;
  upcomingDates: string[];
  inclusionsSummary: string;
  overview: string;
  highlights: string[];
  itinerary: Array<{
    day: number;
    title: string;
    description: string;
  }>;
}

export const CAPTURE_TRIPS: CaptureTrip[] = [
  {
    id: 'spiti-winter-expedition',
    title: 'Spiti Valley Winter Whiteout Expedition',
    subtitle: 'High Altitude Winter Odyssey across Frozen Lakes, Key Monastery & Kaza',
    category: 'spiti',
    categoryLabel: 'Spiti Valley',
    duration: '8 Days / 7 Nights',
    pickupDrop: 'Ex-Delhi (Via Shimla Route)',
    startingPrice: 24999,
    originalPrice: 29999,
    discountBadge: '₹5,000 OFF',
    rating: 4.95,
    reviewsCount: 680,
    badge: 'Best Seller',
    imageUrl: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1000&q=80',
    upcomingDates: ['15 Oct - 22 Oct', '22 Oct - 29 Oct', '05 Nov - 12 Nov', '19 Nov - 26 Nov'],
    inclusionsSummary: 'Homestays with Bukhari Heating + 4x4 Bolero/Force + Breakfast & Dinner + Trip Captain + Oxygen Cylinder',
    overview: 'Enter a surreal winter wonderland where time stands still. Traverse frozen waterfalls in Kinnaur, send postcards from the world’s highest post office in Hikkim (14,567 ft), and sit quietly with chanting monks at the 1,000-year-old Key Monastery.',
    highlights: [
      'Postcards from Hikkim — the highest post office in the world',
      'Key Monastery fortress perched on a cliff at 13,668 ft',
      'Stay in traditional Spitian mud-brick homestays with warm Bukhari heaters',
      'Chicham Bridge — Asia’s highest suspension bridge over a 1,000 ft gorge',
      'Fossil village of Langza with colossal Buddha statue watching over the valley',
      'Verified local Spiti 4x4 snow drivers and high-energy Trip Captain'
    ],
    itinerary: [
      { day: 1, title: 'Delhi to Shimla / Narkanda', description: 'Depart from Delhi in evening by AC Volvo/Tempo. Reach Narkanda apple orchards by morning.' },
      { day: 2, title: 'Narkanda to Kalpa (Kinnaur)', description: 'Drive along the ferocious Sutlej River through Kinnaur Gate. Witness sunset over Kinner Kailash peak.' },
      { day: 3, title: 'Kalpa to Kaza via Nako & Tabo', description: 'Cross Khab confluence where Spiti meets Sutlej. Visit 1,000-year-old Tabo Monastery, the Ajanta of the Himalayas.' },
      { day: 4, title: 'Kaza Local: Key Monastery & Kibber', description: 'Ascend to the breathtaking Key Gompa. Explore Kibber wildlife sanctuary, home to Himalayan blue sheep and snow leopards.' },
      { day: 5, title: 'Hikkim, Komic & Langza High Villages', description: 'Send letters at Hikkim. Visit Komic, world’s highest motorable village, and photograph the Langza Buddha.' },
      { day: 6, title: 'Kaza to Chicham Bridge & Dhankar', description: 'Walk across the vertigo-inducing Chicham Bridge. Sunset at the cliffside Dhankar Gompa.' },
      { day: 7, title: 'Kaza to Kalpa / Sangla', description: 'Downhill drive through winter landscapes with music sessions and bonfire dinner.' },
      { day: 8, title: 'Return Journey to Delhi', description: 'Drive through Shimla and arrive in Delhi by late evening with lifetime memories and new friends.' }
    ]
  },
  {
    id: 'meghalaya-backpacking',
    title: 'Meghalaya: Abode of Clouds & Living Roots',
    subtitle: 'Cherrapunji Waterfalls, Double Decker Root Bridge Trek & Crystal Clear Umngot',
    category: 'meghalaya',
    categoryLabel: 'Meghalaya',
    duration: '6 Days / 5 Nights',
    pickupDrop: 'Ex-Guwahati Airport',
    startingPrice: 22999,
    originalPrice: 27999,
    discountBadge: 'Trending',
    rating: 4.98,
    reviewsCount: 820,
    badge: 'Community Favorite',
    imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80',
    upcomingDates: ['10 Oct - 15 Oct', '18 Oct - 23 Oct', '01 Nov - 06 Nov', '15 Nov - 20 Nov'],
    inclusionsSummary: 'Boutique Cottages + Private Tempo + Breakfast & Dinner + Certified Trek Guides + Cliff Jumping Gears',
    overview: 'Dive into turquoise natural pools, hike through lush subtropical rainforests, and cross 500-year-old living root bridges hand-woven by the Khasi tribe. Glide on the transparent waters of Dawki and camp under starlit skies on the Bangladesh border.',
    highlights: [
      'Trek to the iconic Double Decker Living Root Bridge in Nongriat',
      'Cliff jumping & swimming in the natural azure pool of Rainbow Falls',
      'Transparent boat ride on river Umngot in Dawki where boats seem to float on air',
      'Stand beside the roar of Nohkalikai Falls — India’s tallest plunge waterfall (1,115 ft)',
      'Explore Mawlynnong — Asia’s cleanest village with bamboo skywalks',
      'Live acoustic music and barbecue evenings by riverside campsites'
    ],
    itinerary: [
      { day: 1, title: 'Guwahati to Shillong Scotland of the East', description: 'Pickup at Guwahati Airport. Stop at picturesque Umiam Lake. Check-in to boutique hotel in Shillong. Evening stroll at Police Bazar.' },
      { day: 2, title: 'Shillong to Cherrapunji (Sohra)', description: 'Drive through misty canyons. Visit Elephant Falls, Wei Sawdong 3-tier cascade, and majestic Nohkalikai Falls.' },
      { day: 3, title: 'The Great Double Decker Root Bridge & Rainbow Falls Trek', description: 'Descend 3,500 stairs into lush Nongriat village. Cross living root suspension bridges. Swim in crystal natural pools of Rainbow Falls.' },
      { day: 4, title: 'Cherrapunji to Mawlynnong & Dawki Border', description: 'Visit Mawlynnong cleanest village. Proceed to Dawki. Experience river boating on glass-clear Umngot River. Riverside bonfire & glamping.' },
      { day: 5, title: 'Dawki to Jowai Krang Suri Waterfalls', description: 'Drive to Jaintia hills. Swim in turquoise waters of Krang Suri with life jackets. Return to Shillong for farewell party.' },
      { day: 6, title: 'Shillong to Guwahati Airport', description: 'Breakfast with friends, group photos, and airport drop by 3:00 PM.' }
    ]
  },
  {
    id: 'kashmir-autumn-paradise',
    title: 'Kashmir: Autumn Gold & Dal Lake Glamping',
    subtitle: 'Srinagar Shikara Nights, Gulmarg Gondola Ride & Pahalgam Valley of Shepherds',
    category: 'kashmir',
    categoryLabel: 'Kashmir',
    duration: '6 Days / 5 Nights',
    pickupDrop: 'Ex-Srinagar Airport',
    startingPrice: 19999,
    originalPrice: 24999,
    discountBadge: '₹5,000 OFF',
    rating: 4.93,
    reviewsCount: 740,
    badge: 'Solo Friendly',
    imageUrl: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1000&q=80',
    upcomingDates: ['14 Oct - 19 Oct', '21 Oct - 26 Oct', '04 Nov - 09 Nov', '18 Nov - 23 Nov'],
    inclusionsSummary: 'Houseboat on Dal Lake + 4★ Boutique Hotels + Breakfast & Dinner + Shikara Cruise + Private AC Transport',
    overview: 'Witness golden Chinar leaves drifting over Mughal waterways, sip piping hot saffron Kahwa inside a hand-carved cedar houseboat, and ride the highest cable car in Asia to the snowdrifts of Apharwat Peak in Gulmarg.',
    highlights: [
      '1 Night in Deluxe Heritage Houseboat on Dal Lake with private Shikara ride',
      'Gulmarg Gondola Ride ascending above 13,000 ft into snowfields',
      'Pahalgam Valley: Betaab Valley, Aru Valley & riverside stroll along Lidder River',
      'Authentic Kashmiri Wazwan tasting with vegetarian and non-vegetarian feasts',
      'Bonfire nights and group games led by experienced friendly Trip Captain'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Srinagar & Dal Lake Shikara Ride', description: 'Meet your group at Srinagar Airport. Check in to Dal Lake Houseboat. Sunset Shikara ride through floating vegetable markets and Char Chinar.' },
      { day: 2, title: 'Srinagar to Gulmarg Meadow of Flowers', description: 'Drive to Gulmarg. Take the world-famous Gondola Cable Car to Phase 1 & Phase 2. Snow activities and pine forest hikes.' },
      { day: 3, title: 'Gulmarg to Pahalgam via Saffron Fields', description: 'Drive through Pampore saffron farms and Avantipura ruins. Check-in to riverside resort in Pahalgam.' },
      { day: 4, title: 'Pahalgam Betaab Valley & Chandanwari', description: 'Explore scenic valleys framed by towering Himalayan peaks. Evening cafe hopping and Kashmiri folk music.' },
      { day: 5, title: 'Pahalgam to Srinagar & Mughal Heritage', description: 'Return to Srinagar. Explore Shalimar Bagh and Nishat Bagh gardens. Shopping for Pashmina shawls and walnuts in Old City.' },
      { day: 6, title: 'Srinagar Departure', description: 'Breakfast, farewell hugs, and transfer to Srinagar Airport for flights back home.' }
    ]
  },
  {
    id: 'ladakh-pangong-nubra',
    title: 'Leh Ladakh: The Great Himalayan Road Trip',
    subtitle: 'Nubra Valley Sand Dunes, Double Humped Camels, Khardung La & Pangong Tso',
    category: 'ladakh',
    categoryLabel: 'Ladakh',
    duration: '7 Days / 6 Nights',
    pickupDrop: 'Ex-Leh Airport',
    startingPrice: 28999,
    originalPrice: 34999,
    discountBadge: 'Top Rated',
    rating: 4.97,
    reviewsCount: 910,
    badge: 'Bucket List',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
    upcomingDates: ['10 Oct - 16 Oct', '17 Oct - 23 Oct', '01 Nov - 07 Nov'],
    inclusionsSummary: 'Swiss Tents at Pangong + Oxygen Support + AC Tempo/Innova + Inner Line Permits + Stargazing Session',
    overview: 'The definitive high-altitude Himalayan road trip. Drive over Khardung La at 17,982 ft, ride Bactrian camels across the cold desert dunes of Hunder in Nubra Valley, and watch the shades of Pangong Tso change from aquamarine to cobalt blue.',
    highlights: [
      'Overnight glamping in Swiss luxury tents right on the shore of Pangong Tso',
      'Drive across Khardung La Pass — one of the highest motorable roads on Earth',
      'ATV quad biking & double-humped camel safari at Hunder Sand Dunes in Nubra',
      'Magnetic Hill gravity-defying phenomenon & Sangam confluence of Indus and Zanskar',
      'Milky Way stargazing under zero-pollution crystal clear Ladakh skies'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Leh & Acclimatization', description: 'Land at Leh Kushok Bakula Airport. Complete rest to acclimatize. Evening orientation walk to Shanti Stupa.' },
      { day: 2, title: 'Leh Sham Valley & Magnetic Hill', description: 'Visit Hall of Fame military museum, Magnetic Hill, Gurudwara Pathar Sahib, and Indus-Zanskar Sangam.' },
      { day: 3, title: 'Leh to Nubra Valley via Khardung La Pass (17,982 ft)', description: 'Conquer the legendary pass. Descend into Nubra Valley. Diskit Monastery 106 ft Buddha statue and Hunder sand dunes camel safari.' },
      { day: 4, title: 'Nubra Valley to Pangong Tso via Shyok River', description: 'Scenic off-road drive along Shyok River. First sight of the legendary turquoise Pangong Tso lake. Stargazing campfire.' },
      { day: 5, title: 'Pangong Tso Sunrise to Leh via Chang La (17,590 ft)', description: 'Watch the sunrise colors over Pangong. Drive back across Chang La. Visit Thiksey Monastery, replica of Potala Palace.' },
      { day: 6, title: 'Leh Cafe Culture & Farewell Dinner', description: 'Free day for cafe hopping in Leh market, German bakeries, and Tibetan souvenir shopping. Gala farewell dinner.' },
      { day: 7, title: 'Leh Airport Departure', description: 'Morning transfer to Leh Airport with mountain memories and an unforgettable group bond.' }
    ]
  },
  {
    id: 'vietnam-explorer',
    title: 'Vietnam: Hanoi, Halong Bay Cruise, Da Nang & Hoi An',
    subtitle: 'Overnight Luxury Cruise in Halong Bay, Golden Hands Bridge & Lantern City',
    category: 'international',
    categoryLabel: 'International Group Trip',
    duration: '7 Days / 6 Nights',
    pickupDrop: 'Ex-Hanoi / Drop Da Nang',
    startingPrice: 48999,
    originalPrice: 56999,
    discountBadge: 'International',
    rating: 4.96,
    reviewsCount: 450,
    badge: 'Global Community',
    imageUrl: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=80',
    upcomingDates: ['15 Oct - 21 Oct', '12 Nov - 18 Nov', '03 Dec - 09 Dec', '24 Dec - 30 Dec'],
    inclusionsSummary: '4★ City Hotels + 5★ Halong Bay Cruise + Domestic Vietnam Flight + Visa Guidance + English Speaking Guide',
    overview: 'From the bustling French colonial alleyways of Hanoi Old Quarter to the mystical limestone karsts of UNESCO Halong Bay. Walk on the viral Golden Bridge held by colossal stone hands in Ba Na Hills and stroll through glowing paper lantern streets in Hoi An.',
    highlights: [
      'Overnight cruise on 5-star luxury ship in Halong Bay with kayaking in sea caves',
      'Walk across the colossal Golden Bridge held up by giant stone hands in Da Nang',
      'Hoi An ancient lantern town night boat ride and street food exploration',
      'Train Street coffee experience in Hanoi as train passes inches away',
      'Curated Indian friendly and authentic Vietnamese culinary experiences'
    ],
    itinerary: [
      { day: 1, title: 'Welcome to Hanoi Old Quarter', description: 'Arrive at Noi Bai International Airport Hanoi. Transfer to hotel. Evening orientation walk around Hoan Kiem Lake.' },
      { day: 2, title: 'Hanoi City & Train Street Cafe', description: 'Visit Temple of Literature, Tran Quoc Pagoda, and the famous Hanoi Train Street for Vietnamese Egg Coffee.' },
      { day: 3, title: 'Hanoi to Halong Bay 5-Star Cruise', description: 'Drive to marina. Board luxury overnight ship. Cruise through thousands of emerald limestone islands. Kayaking, sunset party, and squid fishing.' },
      { day: 4, title: 'Halong Bay Sunrise – Fly to Da Nang', description: 'Morning Tai Chi on sundeck. Visit Surprise Cave. Transfer to airport for short domestic flight to coastal Da Nang.' },
      { day: 5, title: 'Ba Na Hills & Iconic Golden Bridge', description: 'Ascend cable car to Ba Na Hills French village. Photograph the world-famous Golden Bridge held by stone hands.' },
      { day: 6, title: 'Da Nang to Hoi An Ancient Lantern Town', description: 'Drive to UNESCO heritage town Hoi An. Ride basket boats in coconut jungle. Evening release floating paper lanterns on Hoai River.' },
      { day: 7, title: 'Da Nang International Departure', description: 'Transfer to Da Nang International Airport for your flight back home.' }
    ]
  },
  {
    id: 'bali-island-odyssey',
    title: 'Bali: Island of Gods, Waterfalls & Nusa Penida',
    subtitle: 'Ubud Rice Terraces, Mount Batur Sunrise Trek, Kelingking Beach & Beach Clubs',
    category: 'international',
    categoryLabel: 'International Group Trip',
    duration: '7 Days / 6 Nights',
    pickupDrop: 'Ex-Denpasar Bali Airport (DPS)',
    startingPrice: 42999,
    originalPrice: 49999,
    discountBadge: '₹7,000 OFF',
    rating: 4.94,
    reviewsCount: 530,
    badge: 'Beach & Vibe',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80',
    upcomingDates: ['18 Oct - 24 Oct', '08 Nov - 14 Nov', '22 Nov - 28 Nov', '20 Dec - 26 Dec'],
    inclusionsSummary: 'Boutique Ubud Villas + Seminyak Resort + Nusa Penida Speedboat + Mount Batur 4x4 Jeep + Breakfast Daily',
    overview: 'Swing above cascading emerald rice terraces in Tegalalang, stand on the razor-sharp cliffs of Kelingking T-Rex Beach in Nusa Penida, watch the sunrise over volcanic caldera clouds in a 4x4 Jeep, and party at world-class Seminyak beach clubs.',
    highlights: [
      'Speedboat day trip to Nusa Penida: Kelingking T-Rex Beach, Broken Beach & Angel’s Billabong',
      'Mount Batur Sunrise in 4x4 open-top retro Jeeps overlooking volcanic lakes',
      'Tegalalang Rice Terraces and giant Bali jungle swing photo session',
      'Tegenungan and Tibumana jungle waterfalls swimming',
      'Sunset at famous Canggu / Seminyak beach clubs with pool beds'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Bali & Ubud Villa Check-in', description: 'Meet and greet at Denpasar Airport. Transfer to luxury villa in Ubud surrounded by tropical jungle. Welcome cocktail.' },
      { day: 2, title: 'Ubud Waterfalls & Jungle Swings', description: 'Visit Tibumana Waterfall. Test your adrenaline on the giant Aloha Bali jungle swing over rice paddies. Monkey Forest walk.' },
      { day: 3, title: 'Mount Batur Sunrise 4x4 Jeep Expedition', description: 'Early morning 4x4 Jeep tour to Mount Batur volcanic plateau for epic sunrise over the clouds. Relax in natural hot springs.' },
      { day: 4, title: 'Speedboat to Nusa Penida Island', description: 'Fast boat to Nusa Penida. Visit the jaw-dropping Kelingking T-Rex viewpoint, Broken Beach, and natural infinity pool at Angel’s Billabong.' },
      { day: 5, title: 'Ubud to Seminyak & Sunset Beach Bar', description: 'Transfer to trendy Seminyak. Check-in to coastal resort. Evening sunset and beats at Finns Beach Club or Potato Head.' },
      { day: 6, title: 'Tanah Lot Sunset Temple & Shopping', description: 'Visit the sea temple of Tanah Lot perched on an offshore rock. Balinese souvenir and handicraft market shopping in Seminyak.' },
      { day: 7, title: 'Departure from Bali', description: 'Morning pool relaxation, cafe brunch, and transfer to Denpasar Airport for departure.' }
    ]
  },
  {
    id: 'kedarnath-yatra-trek',
    title: 'Kedarnath Dham: Sacred Himalayan Pilgrimage & Tungnath',
    subtitle: '16 Km Himalayan Trek to 11th Jyotirlinga, Chopta Meadows & Chandrashila Peak',
    category: 'himachal',
    categoryLabel: 'Uttarakhand / Trekking',
    duration: '5 Days / 4 Nights',
    pickupDrop: 'Ex-Delhi / Haridwar',
    startingPrice: 11999,
    originalPrice: 15999,
    discountBadge: 'Devotional',
    rating: 4.96,
    reviewsCount: 790,
    badge: 'Spiritual Trek',
    imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80',
    upcomingDates: ['12 Oct - 16 Oct', '19 Oct - 23 Oct', '26 Oct - 30 Oct', '02 Nov - 06 Nov'],
    inclusionsSummary: 'Hotels in Guptkashi/Sonprayag + Camp near Kedarnath Temple + AC Tempo + Breakfast & Dinner + Trek Guides',
    overview: 'Embark on the soul-stirring Himalayan trek to the sacred Kedarnath temple located at 11,755 ft surrounded by snow-covered peaks. Stand in reverence before Lord Shiva’s ancient stone shrine and experience the highest Shiva temple in the world at Tungnath.',
    highlights: [
      'Darshan and evening aarti ceremony at the holy Kedarnath Temple',
      'Trek to Tungnath (12,073 ft) — highest temple of Lord Shiva on Earth',
      'Panoramic 360° summit views of Nanda Devi and Trishul peaks from Chandrashila',
      'Scenic drive through Devprayag — holy confluence of Alaknanda & Bhagirathi',
      'Safe group trekking led by certified wilderness mountain leaders'
    ],
    itinerary: [
      { day: 1, title: 'Delhi / Haridwar to Guptkashi', description: 'Morning drive along holy Ganga and Mandakini rivers. View Devprayag confluence. Evening check-in at Guptkashi.' },
      { day: 2, title: 'Guptkashi to Sonprayag & Trek to Kedarnath Temple', description: 'Early morning start from Gaurikund. 16 km scenic trek along Mandakini gorge to Kedarnath. Check-in to temple camp. Attend evening aarti.' },
      { day: 3, title: 'Kedarnath Morning Darshan & Downhill to Guptkashi', description: 'Early morning sacred darshan inside stone sanctum sanctorum. Downhill trek to Gaurikund and drive back to Guptkashi.' },
      { day: 4, title: 'Chopta Meadows & Tungnath Chandrashila Trek', description: 'Drive to Chopta Mini Switzerland. Trek to Tungnath temple and optional summit hike to Chandrashila (13,000 ft). Overnight camp in Chopta.' },
      { day: 5, title: 'Chopta to Rishikesh & Return to Delhi', description: 'Scenic drive through Rishikesh. Ganga aarti at Triveni Ghat. Arrive in Delhi by late night.' }
    ]
  },
  {
    id: 'middle-age-rajasthan',
    title: 'Middle Age Special (35–50 Yrs): Royal Rajasthan Retreat',
    subtitle: 'Jaipur Heritage, Jodhpur Blue City, Jaisalmer Desert Glamping with Mature Like-Minded Peers',
    category: 'weekend',
    categoryLabel: 'Middle Age (35–50 Yrs)',
    duration: '6 Days / 5 Nights',
    pickupDrop: 'Ex-Delhi / Jaipur',
    startingPrice: 26999,
    originalPrice: 32999,
    discountBadge: 'Age 35-50',
    rating: 4.97,
    reviewsCount: 390,
    badge: '35–50 Special',
    imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80',
    upcomingDates: ['18 Oct - 23 Oct', '08 Nov - 13 Nov', '22 Nov - 27 Nov', '13 Dec - 18 Dec'],
    inclusionsSummary: 'Heritage Havelis & 4★ Resorts + Swiss Desert Tents + Premium AC Tempo/Innova + No-Rush Itinerary + Trip Host',
    overview: 'Capture A Trip’s dedicated series designed specifically for travelers aged 35 to 50. Travel comfortably with peers in your life stage with relaxed pacing, gourmet dining, curated heritage stays, and soulful conversations under desert stars.',
    highlights: [
      'Travel exclusively with like-minded individuals in the 35–50 age bracket',
      'Overnight Swiss tent glamping in Thar Desert with private sundowner & Rajasthani folk artists',
      'Stay in restored heritage havelis and boutique luxury resorts with zero-rush morning departures',
      'Private guided visits to Amber Fort, Mehrangarh Fort, and Patwon Ki Haveli',
      'Curated dinner experiences and comfortable premium transport throughout'
    ],
    itinerary: [
      { day: 1, title: 'Welcome to Jaipur Pink City', description: 'Meet your group in Jaipur. Check in to heritage resort. Welcome tea and relaxed evening visit to Nahargarh Fort sunset view.' },
      { day: 2, title: 'Amber Fort & Royal City Palace', description: 'Morning guided walk through Amber Fort. Visit City Palace and Jantar Mantar observatory. High tea at heritage courtyard.' },
      { day: 3, title: 'Jaipur to Jodhpur (The Blue City)', description: 'Scenic drive through Rajasthan countryside. Visit the majestic Mehrangarh Fort. Stroll through blue houses and clock tower bazaars.' },
      { day: 4, title: 'Jodhpur to Jaisalmer Sam Sand Dunes', description: 'Drive to Jaisalmer Thar Desert. Check in to luxury Swiss desert camp. Sunset camel safari, folk dance performance, and gala dinner.' },
      { day: 5, title: 'Jaisalmer Golden Living Fort & Havelis', description: 'Explore the inhabited Golden Fort of Jaisalmer and intricately carved Patwon Ki Haveli. Evening at Gadisar Lake.' },
      { day: 6, title: 'Departure from Jaisalmer / Jodhpur', description: 'Breakfast, farewell hugs with your group, and transfer to Jaisalmer/Jodhpur airport.' }
    ]
  }
];

export const CAPTURE_REVIEWS = [
  {
    id: 'rev-1',
    name: 'Ananya Sharma',
    city: 'Bengaluru',
    trip: 'Spiti Valley Winter Expedition',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    date: 'February 2026',
    comment: 'As a solo female traveler, I was initially anxious about going to -15°C Spiti. But Capture A Trip’s captain Nitin made everyone feel like a close-knit family from day 1! The homestays were warm, the 4x4 drivers were true masters of snow, and I made friends for life. Best trip ever!'
  },
  {
    id: 'rev-2',
    name: 'Rohan Mehra',
    city: 'Mumbai',
    trip: 'Meghalaya Living Roots & Waterfalls',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    date: 'January 2026',
    comment: 'Hands down the most well-managed group trip I have taken. Trekking to the Double Decker Root Bridge and swimming in Rainbow Falls was surreal. The energy, music sessions around bonfires, and genuine camaraderie set Capture A Trip apart.'
  },
  {
    id: 'rev-3',
    name: 'Priyanka Sen',
    city: 'Delhi NCR',
    trip: 'Vietnam Explorer',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    date: 'December 2025',
    comment: 'Halong Bay cruise was pure luxury! Our trip captain handled everything from airport logistics to vegetarian meal requests seamlessly. Traveling with people our own age made exploring Hanoi and Hoi An so much fun.'
  },
  {
    id: 'rev-4',
    name: 'Vikramaditya Rao',
    city: 'Hyderabad',
    trip: 'Middle Age Special (35–50 Yrs) Rajasthan',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    date: 'November 2025',
    comment: 'The 35–50 age category was exactly what I needed. Relaxed mornings, incredible heritage hotels, zero rushed schedules, and great conversations with mature, accomplished fellow travelers. Thank you Capture A Trip!'
  }
];

export const CAPTURE_A_TRIP_WEBSITE: BusinessWebsite = {
  id: 'capture-a-trip',
  slug: 'capture-a-trip',
  businessName: 'Capture A Trip',
  category: 'tour_travel' as any,
  templateId: 'capture-a-trip',
  tagline: "India's Fastest Growing Community Travel Company · Curated Group Trips & Solo Travel",
  description: 'Capture A Trip organizes curated group tours, backpacking expeditions, Himalayan treks, and international trips for young professionals, solo travelers, and age 35–50 adventurers. Over 50,000 travelers and 4.9★ rating on Google.',
  ownerName: 'Capture A Trip Private Limited (Founder: Nitin Khanna)',
  phone: '+91 97116 11211',
  whatsapp: '+91 76784 10001',
  email: 'info@captureatrip.com',
  address: 'Capture A Trip, D-132, Sector 63, Noida, Uttar Pradesh - 201301',
  city: 'Noida (Delhi NCR)',
  mapsUrl: 'https://maps.google.com/?q=Capture+A+Trip+D-132+Sector+63+Noida',
  openingHours: 'Mon - Sun: 9:00 AM – 9:00 PM (24/7 Helpline Active)',
  coverUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#FFAE00',
  secondaryColor: '#121212',
  fontFamily: 'Inter',
  bookingType: 'appointment_consult' as any,
  bookingCtaLabel: 'Book Group Trip',
  specialBadge: 'Community Travel #1',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 9999,
  paymentStatus: 'paid',
  offers: [],
  gallery: [],
  items: CAPTURE_TRIPS.map(trip => ({
    id: trip.id,
    name: trip.title,
    description: trip.subtitle,
    price: trip.startingPrice,
    discountPrice: trip.startingPrice,
    category: trip.categoryLabel,
    isAvailable: true,
    badge: trip.duration
  })),
  sections: [
    { id: 'hero', title: 'Home', isEnabled: true, order: 1 },
    { id: 'trips', title: 'Upcoming Group Trips', isEnabled: true, order: 2 },
    { id: 'why', title: 'Why Capture A Trip', isEnabled: true, order: 3 },
    { id: 'middle-age', title: 'Middle Age (35-50)', isEnabled: true, order: 4 },
    { id: 'reviews', title: 'Traveler Stories', isEnabled: true, order: 5 },
    { id: 'contact', title: 'Custom Trip Plan', isEnabled: true, order: 6 }
  ],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
