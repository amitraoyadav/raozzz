import { PACKAGES_PART1 } from './packagesPart1';
import { PACKAGES_PART2 } from './packagesPart2';
import { PACKAGES_PART3 } from './packagesPart3';
import {
  TravelPackage,
  DestinationChip,
  CountryCard,
  ThemeItem,
  SeasonDestination,
  PlaceToExplore,
  MostVisitedPlace,
  BlogPost,
  RegionInfo
} from './types';

export const ALL_PACKAGES: TravelPackage[] = [
  ...PACKAGES_PART1,
  ...PACKAGES_PART2,
  ...PACKAGES_PART3
];

export const REGIONS: Array<TravelPackage['region']> = [
  'Sikkim',
  'Himachal',
  'Kashmir',
  'Andaman',
  'Kerala',
  'Spiti',
  'Bhutan',
  'Leh Ladakh',
  'Thailand',
  'Uttarakhand',
  'Rajasthan'
];

export const DESTINATION_CHIPS: DestinationChip[] = [
  // Domestic Popular
  { id: 'dc-andaman', name: 'Andaman', type: 'popular', regionSlug: 'andaman', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80', tourCount: 18, startPrice: 14499 },
  { id: 'dc-darjeeling', name: 'Darjeeling', type: 'popular', regionSlug: 'sikkim', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80', tourCount: 14, startPrice: 12499 },
  { id: 'dc-gangtok', name: 'Gangtok', type: 'popular', regionSlug: 'sikkim', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=400&q=80', tourCount: 16, startPrice: 14999 },
  { id: 'dc-shimla-manali', name: 'Shimla-Manali', type: 'popular', regionSlug: 'himachal', image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=400&q=80', tourCount: 22, startPrice: 10999 },
  { id: 'dc-kashmir', name: 'Kashmir', type: 'popular', regionSlug: 'kashmir', image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=400&q=80', tourCount: 20, startPrice: 16999 },
  { id: 'dc-kerala', name: 'Kerala', type: 'popular', regionSlug: 'kerala', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=400&q=80', tourCount: 24, startPrice: 11999 },

  // International
  { id: 'dc-bhutan', name: 'Bhutan', type: 'international', regionSlug: 'bhutan', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80', tourCount: 12, startPrice: 34999 },
  { id: 'dc-thailand', name: 'Thailand', type: 'international', regionSlug: 'thailand', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=400&q=80', tourCount: 15, startPrice: 21999 },
  { id: 'dc-bali', name: 'Bali', type: 'international', regionSlug: 'thailand', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&q=80', tourCount: 11, startPrice: 39999 },
  { id: 'dc-maldives', name: 'Maldives', type: 'international', regionSlug: 'andaman', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=400&q=80', tourCount: 8, startPrice: 49999 },

  // Trending
  { id: 'dc-sikkim', name: 'Sikkim', type: 'trending', regionSlug: 'sikkim', image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=400&q=80', tourCount: 19, startPrice: 12499 },
  { id: 'dc-ladakh', name: 'Leh Ladakh', type: 'trending', regionSlug: 'leh-ladakh', image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=400&q=80', tourCount: 25, startPrice: 14999 },
  { id: 'dc-lakshadweep', name: 'Lakshadweep', type: 'trending', regionSlug: 'kerala', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80', tourCount: 6, startPrice: 28999 },
  { id: 'dc-uttarakhand', name: 'Uttarakhand', type: 'trending', regionSlug: 'uttarakhand', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80', tourCount: 21, startPrice: 9499 },
  { id: 'dc-spiti', name: 'Spiti', type: 'trending', regionSlug: 'spiti', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', tourCount: 14, startPrice: 16999 }
];

export const COUNTRY_CARDS: CountryCard[] = [
  { id: 'cc-india', country: 'India', flag: '🇮🇳', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80', packageCount: 45, startingPrice: 8999, tagline: 'Snowy peaks, tropical lagoons, imperial forts & sacred rivers' },
  { id: 'cc-bhutan', country: 'Bhutan', flag: '🇧🇹', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80', packageCount: 8, startingPrice: 34999, tagline: 'Land of the Thunder Dragon and Gross National Happiness' },
  { id: 'cc-thailand', country: 'Thailand', flag: '🇹🇭', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80', packageCount: 12, startingPrice: 21999, tagline: 'Golden Buddhist temples, tropical islands & sizzling street food' },
  { id: 'cc-indonesia', country: 'Indonesia / Bali', flag: '🇮🇩', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80', packageCount: 7, startingPrice: 38999, tagline: 'Clifftop temples, lush jungle waterfalls & surf beaches' },
  { id: 'cc-maldives', country: 'Maldives', flag: '🇲🇻', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80', packageCount: 6, startingPrice: 48999, tagline: 'Overwater luxury bungalows & private coral atoll reefs' }
];

export const THEMES: ThemeItem[] = [
  { id: 'th-honeymoon', name: 'Honeymoon', icon: 'Heart', destinationCount: 18, image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80', description: 'Candlelit beach dinners, private pool villas & misty mountain chalets' },
  { id: 'th-friends', name: 'Friends/Group', icon: 'Users', destinationCount: 22, image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', description: 'Biker road trips, desert safaris, river rafting & party islands' },
  { id: 'th-adventure', name: 'Adventure', icon: 'Compass', destinationCount: 16, image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80', description: 'High-altitude passes, scuba coral diving, trekking & ski slopes' },
  { id: 'th-nature', name: 'Nature', icon: 'Trees', destinationCount: 24, image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80', description: 'National parks, tiger safaris, glacial lakes & pine forest walks' },
  { id: 'th-solo', name: 'Solo', icon: 'User', destinationCount: 14, image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80', description: 'Spiritual monasteries, hostel circuits & peaceful offbeat escapes' },
  { id: 'th-family', name: 'Family', icon: 'Smile', destinationCount: 26, image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=600&q=80', description: 'Child-friendly sightseeing, houseboats, cable cars & heritage forts' }
];

export const MONTHLY_SEASON_PICKS: Record<string, SeasonDestination[]> = {
  Jan: [
    { id: 's-jan-1', name: 'Gulmarg & Srinagar', region: 'Kashmir', image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=600&q=80', startPrice: 19999, bestFor: 'Heavy snowfall, skiing & frozen Dal Lake', weather: '-2°C to 7°C' },
    { id: 's-jan-2', name: 'Havelock & Neil', region: 'Andaman', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80', startPrice: 23999, bestFor: 'Sunny turquoise sea & scuba diving', weather: '22°C to 29°C' },
    { id: 's-jan-3', name: 'Jaisalmer & Thar Desert', region: 'Rajasthan', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80', startPrice: 11999, bestFor: 'Pleasant desert days & dune camping', weather: '10°C to 24°C' }
  ],
  Feb: [
    { id: 's-feb-1', name: 'Munnar & Alleppey', region: 'Kerala', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80', startPrice: 17999, bestFor: 'Crisp green tea hills & calm backwaters', weather: '18°C to 28°C' },
    { id: 's-feb-2', name: 'Phuket & Krabi', region: 'Thailand', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80', startPrice: 38999, bestFor: 'Peak dry season with calm sailing waters', weather: '24°C to 32°C' },
    { id: 's-feb-3', name: 'Jaipur & Udaipur', region: 'Rajasthan', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80', startPrice: 22999, bestFor: 'Sunny royal palace sightseeing', weather: '14°C to 27°C' }
  ],
  Mar: [
    { id: 's-mar-1', name: 'Gangtok & Pelling', region: 'Sikkim', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80', startPrice: 14999, bestFor: 'Rhododendron blossoms & clear mountain peaks', weather: '10°C to 19°C' },
    { id: 's-mar-2', name: 'Rishikesh Ganga Rapids', region: 'Uttarakhand', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80', startPrice: 9499, bestFor: 'Spring rafting & International Yoga Festival', weather: '16°C to 30°C' },
    { id: 's-mar-3', name: 'Paro & Punakha', region: 'Bhutan', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80', startPrice: 34999, bestFor: 'Tiger’s Nest pilgrimage & Paro Tsechu dance', weather: '8°C to 18°C' }
  ],
  Apr: [
    { id: 's-apr-1', name: 'Pahalgam & Srinagar', region: 'Kashmir', image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=600&q=80', startPrice: 19999, bestFor: 'Asia’s largest Indira Gandhi Tulip Garden', weather: '10°C to 22°C' },
    { id: 's-apr-2', name: 'Shimla & Manali', region: 'Himachal', image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80', startPrice: 13999, bestFor: 'Apple orchard blooms & Solang snow', weather: '12°C to 25°C' },
    { id: 's-apr-3', name: 'Koh Samui', region: 'Thailand', image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80', startPrice: 44999, bestFor: 'Songkran Thai water festival & beach calm', weather: '26°C to 34°C' }
  ],
  May: [
    { id: 's-may-1', name: 'Leh & Nubra Valley', region: 'Leh Ladakh', image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=80', startPrice: 21999, bestFor: 'High passes reopening & clear sky drives', weather: '6°C to 19°C' },
    { id: 's-may-2', name: 'Chopta Tungnath', region: 'Uttarakhand', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80', startPrice: 17499, bestFor: 'Tungnath Temple opening & alpine meadow hike', weather: '11°C to 21°C' },
    { id: 's-may-3', name: 'Dharamshala & Dalhousie', region: 'Himachal', image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=600&q=80', startPrice: 12999, bestFor: 'Summer escape from plains & cedar walks', weather: '15°C to 27°C' }
  ],
  Jun: [
    { id: 's-jun-1', name: 'Kaza & Chandratal Lake', region: 'Spiti', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', startPrice: 24999, bestFor: 'Kunzum Pass clear & crescent lake camping', weather: '8°C to 22°C' },
    { id: 's-jun-2', name: 'Pangong Tso & Khardung La', region: 'Leh Ladakh', image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80', startPrice: 21999, bestFor: 'Peak motorcycle highway expedition', weather: '10°C to 24°C' },
    { id: 's-jun-3', name: 'Thimphu & Dochula', region: 'Bhutan', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80', startPrice: 34999, bestFor: 'Lush green valleys & summer mountain breeze', weather: '14°C to 24°C' }
  ],
  Jul: [
    { id: 's-jul-1', name: 'Valley of Flowers', region: 'Uttarakhand', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', startPrice: 19999, bestFor: 'Carpet of 500 wild alpine blossoms in bloom', weather: '13°C to 20°C' },
    { id: 's-jul-2', name: 'Kashmir Great Lakes', region: 'Kashmir', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80', startPrice: 24999, bestFor: 'Glacial lakes melting with turquoise ice floes', weather: '12°C to 22°C' },
    { id: 's-jul-3', name: 'Pin Valley & Mudh', region: 'Spiti', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80', startPrice: 16999, bestFor: 'Rain-shadow cold desert sunny skies', weather: '10°C to 25°C' }
  ],
  Aug: [
    { id: 's-aug-1', name: 'Zanskar & Leh Ladakh', region: 'Leh Ladakh', image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=80', startPrice: 21999, bestFor: 'Rain-free trans-Himalayan high plateau', weather: '11°C to 25°C' },
    { id: 's-aug-2', name: 'Wayanad Monsoon Green', region: 'Kerala', image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80', startPrice: 11999, bestFor: 'Ayurvedic monsoon treatments & surging falls', weather: '22°C to 27°C' },
    { id: 's-aug-3', name: 'Gurez Valley Frontier', region: 'Kashmir', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', startPrice: 17999, bestFor: 'Emerald Kishanganga river & wildflower banks', weather: '14°C to 23°C' }
  ],
  Sep: [
    { id: 's-sep-1', name: 'Ziro & Sikkim High Pass', region: 'Sikkim', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80', startPrice: 18499, bestFor: 'Autumn post-monsoon crystal Kanchenjunga views', weather: '13°C to 22°C' },
    { id: 's-sep-2', name: 'Spiti Valley Stargazing', region: 'Spiti', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', startPrice: 21999, bestFor: 'Golden barley fields & dark crystal Milky Way', weather: '5°C to 18°C' },
    { id: 's-sep-3', name: 'Jim Corbett & Nainital', region: 'Uttarakhand', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80', startPrice: 14999, bestFor: 'Fresh post-monsoon greenery & clear lake sails', weather: '15°C to 26°C' }
  ],
  Oct: [
    { id: 's-oct-1', name: 'Bhutan Black-Necked Cranes', region: 'Bhutan', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80', startPrice: 39999, bestFor: 'Crisp blue autumn skies & Phobjikha cranes', weather: '10°C to 21°C' },
    { id: 's-oct-2', name: 'Ranthambore Tiger Park', region: 'Rajasthan', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80', startPrice: 18499, bestFor: 'National park opening after monsoon', weather: '18°C to 32°C' },
    { id: 's-oct-3', name: 'Kasol & Jibhi', region: 'Himachal', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80', startPrice: 9999, bestFor: 'Golden autumn leaves & trout stream cafes', weather: '11°C to 22°C' }
  ],
  Nov: [
    { id: 's-nov-1', name: 'Andaman Radhanagar Beach', region: 'Andaman', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80', startPrice: 23999, bestFor: 'Ideal sea visibility for scuba diving', weather: '23°C to 30°C' },
    { id: 's-nov-2', name: 'Pushkar Camel Fair', region: 'Rajasthan', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80', startPrice: 13999, bestFor: 'World-famous colorful desert livestock carnival', weather: '15°C to 29°C' },
    { id: 's-nov-3', name: 'Chiang Mai Lanterns', region: 'Thailand', image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=600&q=80', startPrice: 28999, bestFor: 'Yi Peng floating sky lantern festival', weather: '20°C to 30°C' }
  ],
  Dec: [
    { id: 's-dec-1', name: 'Manali & Solang Snow', region: 'Himachal', image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80', startPrice: 13999, bestFor: 'Christmas & New Year snow holiday', weather: '-3°C to 10°C' },
    { id: 's-dec-2', name: 'Alleppey & Fort Kochi', region: 'Kerala', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80', startPrice: 17999, bestFor: 'Cochin Carnival & backwater celebrations', weather: '22°C to 31°C' },
    { id: 's-dec-3', name: 'Auli Ski Slopes', region: 'Uttarakhand', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80', startPrice: 17499, bestFor: 'First snowfalls and glistening ski runs', weather: '-2°C to 8°C' }
  ]
};

export const PLACES_TO_EXPLORE: PlaceToExplore[] = [
  { id: 'pe-1', name: 'Yumthang Valley', region: 'Sikkim', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80', tourCount: 8, startPrice: 18499 },
  { id: 'pe-2', name: 'Solang Valley', region: 'Himachal', image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80', tourCount: 12, startPrice: 13999 },
  { id: 'pe-3', name: 'Gulmarg Gondola', region: 'Kashmir', image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=600&q=80', tourCount: 15, startPrice: 19999 },
  { id: 'pe-4', name: 'Radhanagar Beach', region: 'Andaman', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80', tourCount: 10, startPrice: 23999 },
  { id: 'pe-5', name: 'Vembanad Houseboats', region: 'Kerala', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80', tourCount: 14, startPrice: 17999 },
  { id: 'pe-6', name: 'Chandratal Crescent Lake', region: 'Spiti', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', tourCount: 9, startPrice: 24999 },
  { id: 'pe-7', name: 'Tiger’s Nest Taktsang', region: 'Bhutan', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80', tourCount: 6, startPrice: 34999 },
  { id: 'pe-8', name: 'Pangong Tso Blue Waters', region: 'Leh Ladakh', image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=80', tourCount: 16, startPrice: 21999 }
];

export const MOST_VISITED_PLACES: MostVisitedPlace[] = [
  {
    region: 'Sikkim',
    places: [
      { name: 'Tsomgo Glacial Lake (12,310 ft)', tag: 'Alpine Lake' },
      { name: 'Gurudongmar Sacred Waters (17,800 ft)', tag: 'Holy Site' },
      { name: 'Pelling Glass Skywalk & Chenrezig', tag: 'Architectural Wonder' },
      { name: 'Yumthang Valley of Rhododendrons', tag: 'Flora Sanctuary' },
      { name: 'Rumtek Monastery Dharma Chakra', tag: 'Tibetan Heritage' }
    ]
  },
  {
    region: 'Himachal',
    places: [
      { name: 'Atal Tunnel Rohtang Highway', tag: 'Engineering Marvel' },
      { name: 'Solang Valley Snow Sports Hub', tag: 'Adventure Hub' },
      { name: 'Khajjiar Mini Switzerland Meadow', tag: 'Natural Grassland' },
      { name: 'McLeod Ganj Dalai Lama Temple', tag: 'Spiritual Center' },
      { name: 'Jalori Pass & Serolsar Pine Forest', tag: 'Trekking Pass' }
    ]
  },
  {
    region: 'Kashmir',
    places: [
      { name: 'Dal Lake Royal Cedar Houseboats', tag: 'Heritage Stay' },
      { name: 'Gulmarg Apharwat Peak Gondola', tag: 'Ski Resort' },
      { name: 'Pahalgam Betaab Valley & Lidder', tag: 'Movie Landscape' },
      { name: 'Thajiwas Golden Glacier in Sonmarg', tag: 'Glacier Field' },
      { name: 'Dawar Habba Khatoon Pyramid Peak', tag: 'Offbeat Border' }
    ]
  },
  {
    region: 'Andaman',
    places: [
      { name: 'Radhanagar Beach No. 7 Havelock', tag: 'Asia’s Best Beach' },
      { name: 'Elephant Beach Coral Snorkel Bay', tag: 'Water Sports' },
      { name: 'Natural Coral Bridge Neil Island', tag: 'Geological Arch' },
      { name: 'Baratang Island Limestone Caverns', tag: 'Mangrove Safari' },
      { name: 'Ross & Smith Connecting Sandbar', tag: 'Twin Island' }
    ]
  },
  {
    region: 'Kerala',
    places: [
      { name: 'Alleppey Kettuvallam Canals', tag: 'Backwater Icon' },
      { name: 'Eravikulam Nilgiri Tahr National Park', tag: 'Wildlife Crest' },
      { name: 'Periyar Tiger Sanctuary Lake', tag: 'Jungle Safari' },
      { name: 'Varkala Red Laterite Cliffs', tag: 'Arabian Sea' },
      { name: 'Edakkal Neolithic Rock Caves', tag: 'Prehistoric Art' }
    ]
  },
  {
    region: 'Spiti',
    places: [
      { name: 'Key Gompa 1,000-Year Castle Monastery', tag: 'Monastic Marvel' },
      { name: 'Chandratal Crescent Moon Lake (14,100 ft)', tag: 'Glacial Tarn' },
      { name: 'Hikkim World’s Highest Post Office', tag: 'Postal Record' },
      { name: 'Chicham Gorge Highest Suspension Bridge', tag: 'Canyon Bridge' },
      { name: 'Tabo Monastery Ajanta of the Himalayas', tag: 'Ancient Murals' }
    ]
  },
  {
    region: 'Bhutan',
    places: [
      { name: 'Paro Taktsang Cliff Tiger’s Nest', tag: 'Sacred Pilgrimage' },
      { name: 'Punakha Dzong Palace of Great Bliss', tag: 'Riverside Fortress' },
      { name: 'Dochula Pass 108 Memorial Chortens', tag: 'Panoramic Pass' },
      { name: 'Buddha Dordenma Bronze Colossus', tag: 'Capital Monument' },
      { name: 'Phobjikha Valley Crane Sanctuary', tag: 'Glacial Bowl' }
    ]
  },
  {
    region: 'Leh Ladakh',
    places: [
      { name: 'Pangong Tso 134 km Color Changing Lake', tag: 'Endorheic Lake' },
      { name: 'Hunder White Sand Dunes & Camel Safari', tag: 'Cold Desert' },
      { name: 'Khardung La Pass 17,982 ft Gateway', tag: 'High Altitude' },
      { name: 'Turtuk Balti Border Hamlet', tag: 'Cultural Enclave' },
      { name: 'Tso Moriri High Changthang Plateau', tag: 'Sapphire Waters' }
    ]
  },
  {
    region: 'Thailand',
    places: [
      { name: 'Maya Bay & Phi Phi Leh Emerald Lagoon', tag: 'Tropical Lagoon' },
      { name: 'Wat Arun Temple of Dawn Riverside', tag: 'Khmer Spire' },
      { name: 'Krabi Phra Nang Cave Beach Karsts', tag: 'Limestone Cliffs' },
      { name: 'Ang Thong 42 Islands Marine Park', tag: 'Sea Kayaking' },
      { name: 'Chiang Mai Wat Phra That Doi Suthep', tag: 'Golden Chedi' }
    ]
  },
  {
    region: 'Uttarakhand',
    places: [
      { name: 'Tungnath Highest Shiva Temple (12,073 ft)', tag: 'Panch Kedar' },
      { name: 'UNESCO Valley of Flowers Botanical Park', tag: 'Floral Wonderland' },
      { name: 'Auli Snow Slopes facing Nanda Devi', tag: 'Ski Meadow' },
      { name: 'Rishikesh Shivpuri White Water Rapids', tag: 'Rafting Capital' },
      { name: 'Jim Corbett National Park Tiger Zones', tag: 'Wildlife Reserve' }
    ]
  },
  {
    region: 'Rajasthan',
    places: [
      { name: 'Amber Palace Sandstone Fort & Sheesh Mahal', tag: 'UNESCO Fortress' },
      { name: 'Mehrangarh Fort 400 ft Clifftop Ramparts', tag: 'Blue City Citadel' },
      { name: 'Lake Pichola Jag Mandir Island Palace', tag: 'Venice of the East' },
      { name: 'Sam Sand Dunes Thar Desert Sunset', tag: 'Camel Safari' },
      { name: 'Kumbhalgarh 36 km Great Wall Fortress', tag: 'Hill Fort' }
    ]
  }
];

export const COUNTERS = {
  happyCustomers: '45,000+',
  toursCompleted: '12,800+',
  tourExperts: '85+',
  destinations: '120+'
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'bp-1',
    slug: 'spiti-vs-ladakh-which-himalayan-road-trip-is-right-for-you',
    title: 'Spiti vs Ladakh: How to Pick Your High-Altitude Himalayan Road Trip',
    date: 'Sep 24, 2026',
    readTime: '6 min read',
    author: 'Vikramaditya Rawat, Senior Mountain Specialist',
    summary: 'A detailed breakdown of road conditions, acclimatization timelines, budget, and terrain comparing Ladakh’s sapphire lakes with Spiti’s raw raw desert hamlets.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    content: [
      'Both Leh-Ladakh and Spiti Valley represent the crown jewels of trans-Himalayan adventure. However, despite sharing Tibetan Buddhist heritage and high-altitude desert topography, the travel experience in both regions differs dramatically.',
      'Ladakh offers established luxury glamping, wider tarmac roads, domestic flight connectivity directly into Leh (11,500 ft), and famous landmarks like Pangong Tso and Khardung La. It is ideal for families, first-time high-altitude travelers, and luxury road trippers.',
      'Spiti, on the other hand, is a rugged, off-the-grid adventure. Accessible only by grueling overland mountain roads from Shimla or Manali, it requires crossing high passes like Kunzum La and staying in rustic village homestays. Spiti rewards the intrepid explorer with thousand-year-old untouched Gompas and virtually zero commercial crowds.',
      'For altitude acclimatization: in Ladakh, flying into Leh requires a mandatory 48-hour rest period. In Spiti, taking the classic Shimla-Kinnaur route allows gradual, natural altitude gain over 3 days, reducing the risk of Acute Mountain Sickness (AMS).'
    ],
    tableData: {
      headers: ['Factor', 'Leh Ladakh', 'Spiti Valley'],
      rows: [
        ['Access Method', 'Direct flights to Leh + Manali/Srinagar Highway', 'Overland only via Shimla or Manali'],
        ['Average Elevation', '11,000 ft to 17,980 ft', '10,000 ft to 15,000 ft'],
        ['Ideal Trip Duration', '6 to 8 Days', '7 to 10 Days'],
        ['Accommodation Style', 'Boutique 4-star hotels & luxury camps', 'Traditional rustic homestays & guesthouses'],
        ['Best Months', 'May to October', 'June to October (or Winter Jan-Mar for Snow Leopard)'],
        ['Starting Budget', '₹21,999 per traveler', '₹16,999 per traveler']
      ]
    },
    faqs: [
      {
        question: 'Do I need a special inner line permit for both?',
        answer: 'Yes, both Ladakh (Nubra, Pangong, Tso Moriri) and Spiti (Nako, Tabo, Kaza) require Inner Line Permits. VenturePulse Holidays arranges all verified permits in advance.'
      },
      {
        question: 'Which one is better for photography?',
        answer: 'Both are world-class. Ladakh is renowned for reflective lake panoramas, whereas Spiti offers exceptional Bortle Class 1 dark night skies for Milky Way astrophotography.'
      }
    ]
  },
  {
    id: 'bp-2',
    slug: 'andaman-scuba-diving-guide-best-reefs-and-seasons',
    title: 'The Ultimate Andaman Scuba Diving Guide: Best Reefs, Depths & Seasons',
    date: 'Sep 18, 2026',
    readTime: '5 min read',
    author: 'Ananya Deshmukh, Marine Biologist & PADI Divemaster',
    summary: 'Discover Havelock Island’s richest underwater dive sites: Dixon’s Pinnacle, The Wall, and Elephant Beach for vibrant coral biodiversity.',
    image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=800&q=80',
    content: [
      'The Andaman archipelago in the Bay of Bengal houses India’s most pristine fringing coral reefs. With water visibility frequently exceeding 25 to 30 meters between October and May, divers encounter hawksbill sea turtles, manta rays, reef sharks, and schools of barracuda.',
      'For beginners, Nemo Reef at Havelock and Bharatpur Beach at Neil Island offer sheltered, shallow coral gardens with gentle currents. Non-swimmers can easily partake in Discover Scuba Diving (DSD) with one-on-one divemaster supervision.',
      'Advanced certified divers should target Dixon’s Pinnacle—a submerged pinnacle rising from 35 meters up to 18 meters covered in soft barrel sponges—and Johnny’s Gorge, famed for sightings of white-tip reef sharks and giant trevallies.',
      'Night diving in Havelock is another transformative experience: kicking your fins activates bioluminescent dinoflagellates, creating glowing trails in the dark tropical water.'
    ],
    tableData: {
      headers: ['Dive Site', 'Island', 'Depth Range', 'Marine Life Highlights'],
      rows: [
        ['Nemo Reef', 'Havelock (Swaraj Dweep)', '5m – 12m', 'Clownfish, sea anemones, parrotfish'],
        ['Elephant Beach', 'Havelock', '6m – 15m', 'Staghorn corals, blue-spotted rays'],
        ['Dixon’s Pinnacle', 'Havelock (Open Sea)', '18m – 35m', 'Manta rays, barracudas, soft corals'],
        ['Bharatpur Reef', 'Neil Island (Shaheed Dweep)', '8m – 18m', 'Brain corals, lionfish, moray eels']
      ]
    },
    faqs: [
      {
        question: 'Can non-swimmers do scuba diving in Andaman?',
        answer: 'Yes! PADI Discover Scuba Diving programs are specifically designed for beginners and non-swimmers with dedicated instructors accompanying you every second.'
      },
      {
        question: 'How long must I wait between diving and flying home?',
        answer: 'Standard international diving safety mandates a minimum 18 to 24 hour surface interval before boarding an airplane to prevent decompression sickness.'
      }
    ]
  },
  {
    id: 'bp-3',
    slug: 'kashmir-houseboat-etiquette-and-dal-lake-secrets',
    title: 'Kashmir Houseboat Etiquette & Secrets of Dal Lake Living',
    date: 'Sep 12, 2026',
    readTime: '4 min read',
    author: 'Farooq Mir, Heritage Host & Storyteller',
    summary: 'From hand-carved deodar wood ceilings to floating flower vendors at 5:00 AM, here is how to enjoy authentic Kashmiri hospitality.',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80',
    content: [
      'Moored along the willow-fringed banks of Dal Lake and Nigeen Lake, Kashmiri houseboats were originally conceptualized in the late 19th century by British civil servants who were prohibited by the Dogra Maharajas from purchasing land in the valley.',
      'Crafted from fragrant, water-resistant Deodar (cedar) timber, these floating palaces feature Khatamband wooden ceilings, hand-knotted silk carpets, and intricately carved walnut furniture.',
      'To experience the lake at its most magical, wake up before dawn for a private Shikara ride to the floating vegetable market. Here, local vendors on canoes barter fresh lotus stems, water chestnuts, and saffron flowers in peaceful Kashmiri dialect.',
      'A warm samovar of Kahwa—brewed green tea infused with saffron strands, crushed green cardamom, cinnamon, and slivered almonds—welcomes you each afternoon as mist settles over the surrounding Zabarwan hills.'
    ],
    tableData: {
      headers: ['Experience', 'Best Time of Day', 'What to Expect'],
      rows: [
        ['Floating Vegetable Market', '5:00 AM – 7:00 AM', 'Authentic barter trade between canoe farmers'],
        ['Afternoon Tea on Front Deck', '4:00 PM – 5:30 PM', 'Steaming saffron Kahwa & walnut cookies'],
        ['Sunset Shikara Ride', '5:30 PM – 6:45 PM', 'Golden reflections of Shankaracharya hill'],
        ['Wazwan Hearth Dinner', '8:00 PM – 9:30 PM', 'Rogan Josh, Gushtaba & fragrant saffron rice']
      ]
    },
    faqs: [
      {
        question: 'Are Kashmiri houseboats heated during winter?',
        answer: 'Yes, luxury houseboats feature central heating or traditional wood-burning Bukhari stoves to keep the cedar suites cozy even when Dal Lake freezes.'
      },
      {
        question: 'What is the difference between Dal Lake and Nigeen Lake?',
        answer: 'Dal Lake is larger and more vibrant with busy Shikara traffic and shops, while Nigeen Lake is calmer, quieter, and surrounded by stately willow groves.'
      }
    ]
  }
];

export const REGION_INFO_MAP: Record<string, RegionInfo> = {
  sikkim: {
    name: 'Sikkim',
    slug: 'sikkim',
    heroImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=80',
    tagline: 'Kingdom of Kanchenjunga & Mystical Glacial Lakes',
    description: 'India’s first 100% organic state nestled in the Eastern Himalayas, home to sacred high-altitude lakes, ancient Buddhist gompas, and lush rhododendron valleys.',
    bestSeason: 'March to May & October to December',
    idealDuration: '5 to 7 Days',
    topAttractions: ['Tsomgo Lake & Baba Mandir', 'Yumthang Valley of Flowers', 'Gurudongmar Lake', 'Pelling Glass Skywalk', 'Rumtek Monastery'],
    faqs: [
      { question: 'What permits are required for North Sikkim?', answer: 'Special Protected Area Permits (PAP) are mandatory for Lachen, Lachung, Gurudongmar, and Tsomgo-Nathula. We arrange all permits seamlessly with passport/voter ID.' },
      { question: 'Is oxygen support needed in North Sikkim?', answer: 'Gurudongmar is at 17,800 ft. We provide supplemental oxygen cylinders in our 4x4 vehicles for safety and peace of mind.' }
    ]
  },
  himachal: {
    name: 'Himachal',
    slug: 'himachal',
    heroImage: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1600&q=80',
    tagline: 'Land of Gods, Snowy Solang Slopes & Cedar Woods',
    description: 'From the colonial Ridge of Shimla to snow adventure valleys of Manali and Tibetan monasteries of McLeod Ganj, Himachal is India’s favorite hill holiday.',
    bestSeason: 'Year-round (Summer: Apr-Jun, Snow: Dec-Feb)',
    idealDuration: '5 to 7 Days',
    topAttractions: ['Solang Valley & Atal Tunnel', 'Kufri & Mall Road Shimla', 'Khajjiar Mini Switzerland', 'Dalai Lama Temple McLeod Ganj', 'Hadimba Temple Manali'],
    faqs: [
      { question: 'When is the best time for snowfall in Manali?', answer: 'Mid-December through late February offers the highest probability of heavy snowfall in Solang, Gulaba, and Sissu.' },
      { question: 'Can we visit Rohtang Pass?', answer: 'Yes, Rohtang Pass is open from mid-May to November subject to National Green Tribunal (NGT) permits, which we facilitate.' }
    ]
  },
  kashmir: {
    name: 'Kashmir',
    slug: 'kashmir',
    heroImage: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1600&q=80',
    tagline: 'Heaven on Earth: Dal Lake Houseboats & Alpine Slopes',
    description: 'Emerald pine valleys, floating Shikaras on Dal Lake, world-class ski slopes in Gulmarg, and riverside meadows in Pahalgam.',
    bestSeason: 'April to October (Spring/Summer) & Dec to Feb (Snow)',
    idealDuration: '5 to 7 Days',
    topAttractions: ['Dal Lake & Nigeen Lake Houseboats', 'Gulmarg Gondola Phase 1 & 2', 'Betaab & Aru Valleys Pahalgam', 'Sonmarg Thajiwas Glacier', 'Shalimar & Nishat Mughal Gardens'],
    faqs: [
      { question: 'Is Kashmir safe for families and solo women?', answer: 'Yes, Kashmir has a welcoming hospitality culture. Our private vehicles and hand-picked certified hotels ensure complete safety and comfort.' },
      { question: 'How do I book the Gulmarg Gondola?', answer: 'Gulmarg Gondola tickets are booked through the J&K cable car portal. We coordinate and book Phase 1 and Phase 2 passes well in advance for our guests.' }
    ]
  },
  andaman: {
    name: 'Andaman',
    slug: 'andaman',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80',
    tagline: 'Turquoise Waters, Powdery Sands & Living Coral Atolls',
    description: 'White sandy beaches, vibrant coral reefs, high-speed catamaran island hopping, and historic Cellular Jail in the tropical Bay of Bengal.',
    bestSeason: 'October to May',
    idealDuration: '5 to 7 Days',
    topAttractions: ['Radhanagar Beach No. 7 Havelock', 'Elephant Beach Snorkeling', 'Neil Island Natural Bridge', 'Cellular Jail Light & Sound', 'Baratang Limestone Caves'],
    faqs: [
      { question: 'How do we travel between Port Blair and Havelock?', answer: 'We include premium luxury catamaran cruises like Makruzz, Nautika, or Green Ocean with reserved seats.' },
      { question: 'Do Indian citizens require a passport for Andaman?', answer: 'No passport is needed for Indian nationals; any valid government photo ID (Aadhaar, Voter ID, Driving License) is sufficient.' }
    ]
  },
  kerala: {
    name: 'Kerala',
    slug: 'kerala',
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80',
    tagline: 'God’s Own Country: Backwaters, Mist & Spice Highlands',
    description: 'Glide on authentic thatched houseboats in Alleppey, wander through endless tea estates in Munnar, and rejuvenate with authentic Ayurvedic wellness.',
    bestSeason: 'September to March',
    idealDuration: '5 to 7 Days',
    topAttractions: ['Alleppey Houseboat Canals', 'Munnar Tea Estates & Eravikulam', 'Thekkady Periyar Wildlife Reserve', 'Fort Kochi Chinese Fishing Nets', 'Varkala Cliff Beach'],
    faqs: [
      { question: 'What is included in the houseboat experience?', answer: 'Our private houseboats include an exclusive captain, chef, and guide, with all meals (traditional Kerala lunch, evening snacks, dinner, and breakfast).' },
      { question: 'Is Kerala family-friendly?', answer: 'Kerala is one of India’s top family destinations with gentle backwaters, wildlife sanctuaries, and comfortable hill resorts.' }
    ]
  },
  spiti: {
    name: 'Spiti',
    slug: 'spiti',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    tagline: 'The Middle Land: 1,000-Year Gompas & High Cold Deserts',
    description: 'Crescent lakes, ancient Buddhist fortress monasteries, world’s highest post offices, and unpolluted starry night skies in the high trans-Himalayas.',
    bestSeason: 'June to October (Winter Snow Leopard: Jan-Mar)',
    idealDuration: '7 to 9 Days',
    topAttractions: ['Key Monastery Fortress', 'Chandratal Crescent Moon Lake', 'Hikkim Highest Post Office', 'Pin Valley National Park', 'Dhankar Cliff Monastery'],
    faqs: [
      { question: 'Which route is better: via Shimla or Manali?', answer: 'The Shimla route offers gradual altitude acclimatization. The Manali route via Atal Tunnel and Kunzum Pass is faster once open in June.' },
      { question: 'What are the accommodations like in Spiti?', answer: 'We utilize clean, cozy traditional homestays and boutique guesthouses with warm blankets and authentic home-cooked meals.' }
    ]
  },
  bhutan: {
    name: 'Bhutan',
    slug: 'bhutan',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80',
    tagline: 'Land of the Thunder Dragon & Gross National Happiness',
    description: 'Ancient cliffside monasteries, forested mountain passes with 108 stupas, colorful mask dance festivals, and pristine Himalayan ecology.',
    bestSeason: 'March to May & September to November',
    idealDuration: '5 to 7 Days',
    topAttractions: ['Tiger’s Nest (Taktsang) Monastery', 'Punakha Dzong & Suspension Bridge', 'Dochula Pass 108 Chortens', 'Buddha Dordenma Thimphu', 'Phobjikha Glacial Valley'],
    faqs: [
      { question: 'What is the Bhutan Sustainable Development Fee (SDF)?', answer: 'Bhutan levies an SDF (approx ₹1,200 per night for Indian nationals). Our packages manage and include all SDF and permit logistics.' },
      { question: 'How hard is the Tiger’s Nest hike?', answer: 'The hike takes 4-5 hours round trip through pine woods. Horse ride options are available for the first half of the ascent.' }
    ]
  },
  'leh-ladakh': {
    name: 'Leh Ladakh',
    slug: 'leh-ladakh',
    heroImage: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1600&q=80',
    tagline: 'Land of High Passes, Blue Lakes & Camel Dunes',
    description: 'Cross the world’s highest motorable roads, ride double-humped camels on cold desert sand dunes in Nubra, and gaze at the blue waters of Pangong Tso.',
    bestSeason: 'May to October',
    idealDuration: '6 to 8 Days',
    topAttractions: ['Pangong Tso Lake', 'Hunder Sand Dunes & Bactrian Camels', 'Khardung La Pass (17,982 ft)', 'Diskit Monastery & Buddha Statue', 'Magnetic Hill & Sangam Confluence'],
    faqs: [
      { question: 'How do I prevent Acute Mountain Sickness (AMS) in Leh?', answer: 'Rest completely on Day 1. Drink plenty of water and ginger tea. All our vehicles carry medical oxygen cylinders for safety.' },
      { question: 'Can I do a motorcycle road trip to Ladakh?', answer: 'Yes! We provide Royal Enfield Himalayan motorcycles with mechanic backup vans, spare parts, and fuel packages.' }
    ]
  },
  thailand: {
    name: 'Thailand',
    slug: 'thailand',
    heroImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1600&q=80',
    tagline: 'Golden Temples, Limestone Karsts & Tropical Island Bliss',
    description: 'Vibrant floating markets in Bangkok, dramatic limestone islands in Krabi, and crystal-clear waters of Maya Bay and Phi Phi in Phuket.',
    bestSeason: 'November to April',
    idealDuration: '6 to 8 Days',
    topAttractions: ['Phi Phi Islands & Maya Bay', 'Krabi 4 Islands & Phra Nang Cave', 'Bangkok Grand Palace & Wat Arun', 'Chao Phraya Dinner Cruise', 'Coral Island Pattaya'],
    faqs: [
      { question: 'Do Indian tourists get visa on arrival / visa free in Thailand?', answer: 'Thailand offers visa exemption / visa on arrival for Indian passport holders with 30-day stays. We provide full entry guidance.' },
      { question: 'Are vegetarian and Indian meals easily available?', answer: 'Yes! Indian restaurants and vegetarian options are widely available in Bangkok, Phuket, Pattaya, and Krabi.' }
    ]
  },
  uttarakhand: {
    name: 'Uttarakhand',
    slug: 'uttarakhand',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80',
    tagline: 'Devbhoomi: Sacred Ganga Ghats, Tiger Jungles & Alpine Summits',
    description: 'Raft down white-water rapids in Rishikesh, spot Bengal tigers in Jim Corbett, sail on Naini Lake, and trek to high-altitude Shiva temples in Chopta.',
    bestSeason: 'Year-round (Rafting: Sep-Jun, Wildlife: Nov-Jun, Skiing: Dec-Feb)',
    idealDuration: '4 to 6 Days',
    topAttractions: ['Rishikesh White Water Rafting & Ganga Aarti', 'Jim Corbett Tiger Safari', 'Nainital Lakes & Mall Road', 'Chopta Tungnath & Chandrashila', 'Auli Ski Slopes & Ropeway'],
    faqs: [
      { question: 'Is river rafting safe in Rishikesh?', answer: 'Yes, we use certified IRF river guides with life jackets, helmets, and accompanying safety kayaks on all rapid sections.' },
      { question: 'How early should I book Corbett Tiger Safari?', answer: 'Corbett core zone safaris (Bijrani/Dhikala) open 45 days in advance and should be booked early to secure permits.' }
    ]
  },
  rajasthan: {
    name: 'Rajasthan',
    slug: 'rajasthan',
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80',
    tagline: 'Land of Kings: Golden Sands, Hilltop Forts & Lake Palaces',
    description: 'Pink City palaces in Jaipur, towering ramparts of Mehrangarh in Jodhpur, rolling camel sand dunes in Jaisalmer, and romantic lakes in Udaipur.',
    bestSeason: 'October to March',
    idealDuration: '6 to 8 Days',
    topAttractions: ['Amber Fort & Hawa Mahal Jaipur', 'Mehrangarh Fort Jodhpur', 'Lake Pichola & City Palace Udaipur', 'Sam Sand Dunes Jaisalmer', 'Ranthambore Tiger Reserve'],
    faqs: [
      { question: 'What is included in the Jaisalmer desert camp?', answer: 'Our desert camp package includes a camel sunset safari, welcome tikka, evening Kalbelia folk dance with bonfire, and traditional Rajasthani buffet dinner.' },
      { question: 'What is the best way to travel across Rajasthan cities?', answer: 'We provide dedicated private AC vehicles (Sedan or Innova Crysta) with professional, experienced local chauffeurs.' }
    ]
  }
};
