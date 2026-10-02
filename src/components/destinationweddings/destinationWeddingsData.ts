export interface DWRegion {
  id: string;
  name: string;
  slug: string;
  country: string;
  subdestinations: string[];
  guideTitle: string;
  guideUrl: string;
  image: string;
  description: string;
  resortsCount: number;
}

export interface DWResort {
  id: string;
  name: string;
  slug: string;
  location: string;
  country: string;
  category: 'All-Inclusive' | 'Luxury Villa' | 'Adults-Only' | 'Family-Friendly';
  brand: string;
  image: string;
  startingPrice: string;
  rating: number;
  reviewsCount: number;
  highlight: string;
  perks: string[];
}

export interface DWExclusiveOffer {
  id: string;
  title: string;
  badge: string;
  image: string;
  description: string;
  details: string[];
  ctaUrl: string;
  resortBrand: string;
}

export interface DWRealWedding {
  id: string;
  couple: string;
  location: string;
  country: string;
  resort: string;
  image: string;
  storySnippet: string;
  specialist: string;
}

export interface DWTestimonial {
  id: string;
  author: string;
  platform: 'The Knot' | 'Google Reviews' | 'TrustPilot' | 'WeddingWire';
  logo: string;
  quote: string;
  destination: string;
  specialist: string;
}

export interface DWFAQ {
  question: string;
  answer: string;
}

export const DW_REGIONS: DWRegion[] = [
  {
    id: 'mexico',
    name: 'Mexico',
    slug: 'mexico',
    country: 'Mexico',
    subdestinations: ['Cancun', 'Riviera Maya', 'Los Cabos', 'Puerto Vallarta', 'Tulum', 'Cozumel', 'Riviera Nayarit'],
    guideTitle: 'The Ultimate Guide to Destination Weddings in Mexico',
    guideUrl: '/weddings/mexico-weddings-guide',
    image: 'https://images.unsplash.com/photo-1512815046277-7fc6032d8442?w=800&auto=format&fit=crop&q=80',
    description: 'Ancient Mayan ruins, powdery white Caribbean sand, world-renowned culinary excellence, and all-inclusive luxury.',
    resortsCount: 145
  },
  {
    id: 'dominican-republic',
    name: 'Dominican Republic',
    slug: 'dominican-republic',
    country: 'Dominican Republic',
    subdestinations: ['Punta Cana', 'Cap Cana', 'La Romana', 'Puerto Plata', 'Samana', 'Santo Domingo', 'Juan Dolio'],
    guideTitle: 'The Ultimate Guide to Destination Weddings in the Dominican Republic',
    guideUrl: '/weddings/dominican-republic-weddings-guide',
    image: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?w=800&auto=format&fit=crop&q=80',
    description: 'Pristine palm-lined shores, turquoise waters, championship golf courses, and iconic beachfront gazebos.',
    resortsCount: 92
  },
  {
    id: 'bahamas',
    name: 'Bahamas',
    slug: 'bahamas',
    country: 'Bahamas',
    subdestinations: ['Nassau', 'Paradise Island', 'Grand Bahama Island', 'Exuma', 'Andros', 'Harbour Island', 'The Out Islands'],
    guideTitle: 'Romantic Bahamas Destination Weddings Guide',
    guideUrl: '/weddings/bahamas-weddings-guide',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&auto=format&fit=crop&q=80',
    description: 'Crystal-clear sapphire waters, pink-sand beaches, and world-class luxury resorts just a short flight from Florida.',
    resortsCount: 48
  },
  {
    id: 'central-america',
    name: 'Central America',
    slug: 'central-america',
    country: 'Central America',
    subdestinations: ['Belize', 'Costa Rica', 'Panama'],
    guideTitle: 'Eco-Luxury Rainforest & Oceanfront Weddings Guide',
    guideUrl: '/weddings/central-america-weddings-guide',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80',
    description: 'Lush tropical rainforests, panoramic volcanic vistas, exotic wildlife, and secluded Pacific and Caribbean beaches.',
    resortsCount: 36
  },
  {
    id: 'caribbean',
    name: 'Other Caribbean',
    slug: 'caribbean',
    country: 'Caribbean',
    subdestinations: ['Aruba', 'Curacao', 'St. Lucia', 'St. Martin / St. Maarten', 'Turks & Caicos', 'U.S. Virgin Islands'],
    guideTitle: 'The Ultimate Guide to Caribbean Destination Weddings',
    guideUrl: '/weddings/caribbean-weddings-guide',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80',
    description: 'One Happy Island in Aruba, dramatic Pitons in St. Lucia, and world-class white sand in Turks & Caicos.',
    resortsCount: 65
  },
  {
    id: 'jamaica',
    name: 'Jamaica',
    slug: 'jamaica',
    country: 'Jamaica',
    subdestinations: ['Montego Bay', 'Negril', 'Ocho Rios', 'Runaway Bay', 'Treasure Beach', 'Westmoreland'],
    guideTitle: 'Jamaica Destination Weddings Guide: Culture, Beaches & Romance',
    guideUrl: '/weddings/jamaica-destination-weddings-guide',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&auto=format&fit=crop&q=80',
    description: 'Reggae rhythms, dramatic Seven Mile Beach sunsets, cliffside gazebos, and authentic island hospitality.',
    resortsCount: 78
  },
  {
    id: 'hawaii',
    name: 'Hawaii',
    slug: 'hawaii',
    country: 'United States',
    subdestinations: ['Big Island', 'Kauai', 'Lana\'i', 'Maui', 'Oahu', 'Waikiki'],
    guideTitle: 'Aloha Romance: Hawaii Destination Wedding Packages',
    guideUrl: '/weddings/hawaii-weddings-guide',
    image: 'https://images.unsplash.com/photo-1505852679233-d9fd70aff568?w=800&auto=format&fit=crop&q=80',
    description: 'Dramatic volcanic cliffs, fragrant orchid leis, traditional luau feasts, and Pacific oceanfront sunsets without a passport requirement.',
    resortsCount: 42
  },
  {
    id: 'cuba',
    name: 'Cuba',
    slug: 'cuba',
    country: 'Cuba',
    subdestinations: ['Cayo Coco', 'Cayo Santa Maria', 'Havana', 'Holguin', 'Varadero'],
    guideTitle: 'Authentic Caribbean Charm: Cuba Wedding Guide',
    guideUrl: '/weddings/cuba-weddings-guide',
    image: 'https://images.unsplash.com/photo-1503756234508-e32369269deb?w=800&auto=format&fit=crop&q=80',
    description: 'Vintage colonial architecture in Havana, turquoise waters in Varadero, and lively Latin salsa celebrations.',
    resortsCount: 30
  }
];

export const DW_RESORTS: DWResort[] = [
  {
    id: 'resort-dreams-riviera',
    name: 'Dreams Riviera Cancun Resort & Spa',
    slug: 'dreams-riviera-cancun-resort-spa',
    location: 'Riviera Maya',
    country: 'Mexico',
    category: 'All-Inclusive',
    brand: 'Dreams Resorts & Spas',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80',
    startingPrice: '$1,499 package',
    rating: 4.9,
    reviewsCount: 312,
    highlight: 'Octagonal oceanfront gazebo & Unlimited-Luxury® privileges',
    perks: ['Free room upgrades for wedding couple', 'Private cocktail hour with hors d\'oeuvres', 'Late checkout & spa hydrotherapy passes']
  },
  {
    id: 'resort-hard-rock-pc',
    name: 'Hard Rock Hotel & Casino Punta Cana',
    slug: 'hard-rock-hotel-casino-punta-cana',
    location: 'Punta Cana',
    country: 'Dominican Republic',
    category: 'All-Inclusive',
    brand: 'Hard Rock Hotels All-Inclusive',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80',
    startingPrice: '$2,000 package',
    rating: 4.8,
    reviewsCount: 428,
    highlight: 'Colin Cowie designed wedding collections & vibrant nightlife',
    perks: ['Complimentary wedding package available', 'Up to $1,800 resort credit per room', 'Private beach reception with live music options']
  },
  {
    id: 'resort-majestic-elegance',
    name: 'Majestic Elegance Costa Mujeres',
    slug: 'majestic-elegance-costa-mujeres',
    location: 'Costa Mujeres, Cancun',
    country: 'Mexico',
    category: 'All-Inclusive',
    brand: 'Majestic Resorts',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80',
    startingPrice: '$1,250 package',
    rating: 4.9,
    reviewsCount: 260,
    highlight: 'Sky wedding rooftop gazebo & adults-only Elegance Club section',
    perks: ['Free anniversary nights included', 'Personal butler service for the couple', 'VIP airport transfers for wedding group']
  },
  {
    id: 'resort-moon-palace-jamaica',
    name: 'Moon Palace Jamaica',
    slug: 'moon-palace-jamaica',
    location: 'Ocho Rios',
    country: 'Jamaica',
    category: 'All-Inclusive',
    brand: 'Palace Resorts',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&auto=format&fit=crop&q=80',
    startingPrice: '$1,800 package',
    rating: 4.9,
    reviewsCount: 345,
    highlight: 'Over-water chapel & 700-foot private Caribbean beach',
    perks: ['Free wedding package with 14 room nights booked', 'Unlimited gourmet dining & premium spirits', 'FlowRider® surf simulator for guests']
  },
  {
    id: 'resort-secrets-playa-blanca',
    name: 'Secrets Playa Blanca Costa Mujeres',
    slug: 'secrets-playa-blanca-costa-mujeres',
    location: 'Costa Mujeres',
    country: 'Mexico',
    category: 'Adults-Only',
    brand: 'Secrets Resorts & Spas',
    image: 'https://images.unsplash.com/photo-1512815046277-7fc6032d8442?w=800&auto=format&fit=crop&q=80',
    startingPrice: '$2,499 package',
    rating: 5.0,
    reviewsCount: 185,
    highlight: 'Secluded beachfront infinity pools & ultra-luxury adult ambiance',
    perks: ['24-hour room service & in-suite hydrotub', 'Exclusive bridal suite with dedicated hair & makeup stations', 'Sunset catamaran cruise for group']
  },
  {
    id: 'resort-el-dorado-royale',
    name: 'El Dorado Royale, by Karisma',
    slug: 'el-dorado-royale',
    location: 'Riviera Maya',
    country: 'Mexico',
    category: 'Adults-Only',
    brand: 'El Dorado Resorts',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80',
    startingPrice: '$1,500 package',
    rating: 4.8,
    reviewsCount: 290,
    highlight: 'Gourmet Inclusive® dining with greenhouse-grown fresh ingredients',
    perks: ['Sky Wedding package on rooftop gazebo', 'Private beachfront candlelight dinner for two', 'Champagne breakfast in bed']
  },
  {
    id: 'resort-iberostar-cancun',
    name: 'Iberostar Selection Cancun',
    slug: 'iberostar-selection-cancun',
    location: 'Cancun Hotel Zone',
    country: 'Mexico',
    category: 'Family-Friendly',
    brand: 'Iberostar Hotels & Resorts',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop&q=80',
    startingPrice: '$1,199 package',
    rating: 4.7,
    reviewsCount: 220,
    highlight: 'Championship 18-hole golf course & direct Caribbean beachfront',
    perks: ['Star Camp kids program for family guests', 'Customizable wedding decor packages', 'Complimentary room category upgrades']
  },
  {
    id: 'resort-casa-bellamar',
    name: 'Casa Bellamar Luxury Villa',
    slug: 'casa-bellamar',
    location: 'East Cape, Los Cabos',
    country: 'Mexico',
    category: 'Luxury Villa',
    brand: 'Luxury Villas Collection',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80',
    startingPrice: '$8,500 / night',
    rating: 5.0,
    reviewsCount: 68,
    highlight: '100% private solar-powered estate on secluded Sea of Cortez beach',
    perks: ['Private executive chef, butler & housekeeping staff', 'Capacity for up to 150 event guests', 'Zero noise curfew for afterparties']
  }
];

export const DW_TOP_LOCATIONS = [
  {
    id: 'loc-riviera-maya',
    name: 'Riviera Maya',
    country: 'Mexico',
    slug: 'riviera-maya',
    image: 'https://images.unsplash.com/photo-1512815046277-7fc6032d8442?w=800&auto=format&fit=crop&q=80',
    description: 'A pristine stretch of Caribbean coastline, home to preserved ancient Mayan ruins and luxury all-inclusive resorts.'
  },
  {
    id: 'loc-punta-cana',
    name: 'Punta Cana',
    country: 'Dominican Republic',
    slug: 'punta-cana',
    image: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?w=800&auto=format&fit=crop&q=80',
    description: 'A popular Caribbean hotspot with scenic beaches, turquoise water, coconut groves and vibrant all-inclusive backdrops.'
  },
  {
    id: 'loc-cancun',
    name: 'Cancun',
    country: 'Mexico',
    slug: 'cancun',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop&q=80',
    description: 'A customer favorite with powdery white-sand beaches, easy flight connections and legendary nightlife.'
  },
  {
    id: 'loc-montego-bay',
    name: 'Montego Bay',
    country: 'Jamaica',
    slug: 'montego-bay',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&auto=format&fit=crop&q=80',
    description: 'Popular tourism hub with modern resorts, championship golf courses, reggae vibes and white-sand beaches.'
  },
  {
    id: 'loc-cabo',
    name: 'Cabo San Lucas',
    country: 'Mexico',
    slug: 'cabo-san-lucas',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80',
    description: 'West-coast Pacific gem surrounded by dramatic desert bluffs, mountains, and the iconic Land\'s End Arch.'
  },
  {
    id: 'loc-costa-rica',
    name: 'Costa Rica',
    country: 'Central America',
    slug: 'costa-rica',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80',
    description: 'A lush jungle ecosystem with unique beaches, volcanic mountain backdrops, and peaceful eco-luxury romance.'
  },
  {
    id: 'loc-aruba',
    name: 'Aruba',
    country: 'Caribbean',
    slug: 'aruba',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80',
    description: 'One Happy Island outside the hurricane belt, famous for year-round warm breezes and pristine Eagle Beach sands.'
  }
];

export const DW_EXCLUSIVE_OFFERS: DWExclusiveOffer[] = [
  {
    id: 'offer-2500-off',
    title: 'Up to $2,500 Off',
    badge: 'Limited Time Savings',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80',
    description: 'Enjoy major wedding savings at over 200 all-inclusive resorts throughout Mexico and the Caribbean when booking your group through All In One Destination Weddings.',
    details: [
      '$500 to $2,500 instant booking credit applied directly to your group invoice',
      'Valid on participating resort chains across Cancun, Riviera Maya, Punta Cana & Jamaica',
      'Combine with resort-direct complimentary cocktail parties and room upgrades'
    ],
    ctaUrl: '/exclusive-offers/major-wedding-savings',
    resortBrand: 'All-Inclusive Partner Resorts'
  },
  {
    id: 'offer-free-sky-wedding',
    title: 'Free Sky Wedding Package in Paradise',
    badge: 'Karisma Hotels & Resorts',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80',
    description: 'Receive a FREE Sky Wedding Package elevated atop a panoramic rooftop gazebo overlooking the Caribbean Sea, PLUS one free room upgrade for the wedding couple.',
    details: [
      'Elevated rooftop ceremony venue with panoramic ocean views',
      'Personal wedding coordinator and ceremony sound system',
      'Complimentary honeymoon dinner on the beach and romantic in-suite amenities'
    ],
    ctaUrl: '/exclusive-offers/karisma-hotels-resorts-free-sky-wedding',
    resortBrand: 'Karisma Hotels & Resorts'
  },
  {
    id: 'offer-free-anniversary',
    title: 'Free Anniversary Stay at Majestic',
    badge: 'Majestic Resorts Offer',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80',
    description: 'Enjoy free nights towards your first anniversary stay in paradise, valued at up to $5,000! Valid when hosting your celebration at Majestic Resorts Costa Mujeres or Punta Cana.',
    details: [
      'Up to 7 complimentary nights for your first-year wedding anniversary return',
      'Champagne and fruit platter upon anniversary check-in',
      '20% discount on couples spa massage treatments'
    ],
    ctaUrl: '/exclusive-offers/majestic-resorts-wedding-offer',
    resortBrand: 'Majestic Resorts'
  }
];

export const DW_REAL_WEDDINGS: DWRealWedding[] = [
  {
    id: 'rw-abby-jesse',
    couple: 'Abby & Jesse',
    location: 'Punta Cana',
    country: 'Dominican Republic',
    resort: 'Hard Rock Hotel & Casino Punta Cana',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80',
    storySnippet: 'An unforgettable 85-guest oceanfront celebration complete with fireworks over the water and barefoot dancing under the stars.',
    specialist: 'Lisa Harrison, Certified Specialist'
  },
  {
    id: 'rw-stevie-morgan',
    couple: 'Stevie & Morgan',
    location: 'Runaway Bay',
    country: 'Jamaica',
    resort: 'Jewel Paradise Cove Beach Resort',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&auto=format&fit=crop&q=80',
    storySnippet: 'Surrounded by lush Jamaican flora and gentle Caribbean breezes, this intimate 40-guest celebration felt like private paradise.',
    specialist: 'Marcus Vance, Certified Specialist'
  },
  {
    id: 'rw-melissa-edwin',
    couple: 'Melissa & Edwin',
    location: 'Punta Cana',
    country: 'Dominican Republic',
    resort: 'Dreams Macao Beach Punta Cana',
    image: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?w=800&auto=format&fit=crop&q=80',
    storySnippet: 'A romantic ceremony under a draped wooden arbor, followed by a candlelit pool deck reception with local Caribbean cuisine.',
    specialist: 'Amanda Torres, Certified Specialist'
  },
  {
    id: 'rw-kayla-marissa',
    couple: 'Kayla & Marissa',
    location: 'Riviera Maya',
    country: 'Mexico',
    resort: 'Secrets Akumal Riviera Maya',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop&q=80',
    storySnippet: 'A sunset vows ceremony right on the sand with green turtle sightings and a stunning beachfront cocktail hour with live mariachis.',
    specialist: 'Sarah Jenkins, Certified Specialist'
  },
  {
    id: 'rw-stephany-faisal',
    couple: 'Stephany & Faisal',
    location: 'Guanacaste',
    country: 'Costa Rica',
    resort: 'Dreams Las Mareas Costa Rica',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80',
    storySnippet: 'A lush jungle-meets-beach celebration blending multicultural traditions, exotic local florals, and a poolside fire-dancer finale.',
    specialist: 'Elena Rostova, Certified Specialist'
  },
  {
    id: 'rw-chantelle-isaiah',
    couple: 'Chantelle & Isaiah',
    location: 'Riviera Maya',
    country: 'Mexico',
    resort: 'El Dorado Seaside Suites',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80',
    storySnippet: '65 friends and family flew down for a 4-day all-inclusive vacation. The ceremony was perched on an open-air palapa jetty.',
    specialist: 'Tracy Espina, Certified Specialist'
  }
];

export const DW_TESTIMONIALS: DWTestimonial[] = [
  {
    id: 't-stacey',
    author: 'Stacey H',
    platform: 'The Knot',
    logo: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=100&auto=format&fit=crop&q=80',
    quote: "All In One Destination Weddings was the biggest help in creating the most magical experience for us and all of our guests traveling to Mexico. Our Specialist was always very responsive and available for any and all questions. With her help and guidance, we found the most amazing location for our destination wedding.",
    destination: 'Riviera Maya, Mexico',
    specialist: 'Tracy Espina'
  },
  {
    id: 't-kimberlee',
    author: 'Kimberlee K',
    platform: 'Google Reviews',
    logo: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?w=100&auto=format&fit=crop&q=80',
    quote: "We had such a great experience with Destination Weddings! Our Specialist really listened to what we wanted in a resort and it didn't disappoint!! Everything from booking our travel to planning out every detail of the wedding was so easy. Our wedding was perfect and all of our guests had an absolute blast!",
    destination: 'Punta Cana, Dominican Republic',
    specialist: 'Lisa Harrison'
  },
  {
    id: 't-paige',
    author: 'Paige B',
    platform: 'TrustPilot',
    logo: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=100&auto=format&fit=crop&q=80',
    quote: "Our Specialist was a huge help in planning our destination wedding in Mexico and getting all of our guests to the resort. Having this resource to help field questions about the logistics and booking process was a huge help and allowed us to focus our energy on planning the other wedding details.",
    destination: 'Cancun, Mexico',
    specialist: 'Marcus Vance'
  },
  {
    id: 't-peter',
    author: 'Peter M',
    platform: 'WeddingWire',
    logo: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=100&auto=format&fit=crop&q=80',
    quote: "Using Destination Weddings was the best decision and experience. We got an amazing package that covered six events over six days. Our wedding was spectacular and our family and friends have the best memories because Destination Weddings welcomed, listened, and helped us find an amazing venue.",
    destination: 'Montego Bay, Jamaica',
    specialist: 'Sarah Jenkins'
  }
];

export const DW_FAQS: DWFAQ[] = [
  {
    question: 'What is included in a destination wedding package?',
    answer: 'Most destination wedding packages include a ceremony venue, officiant, basic décor, a wedding cake, and a champagne toast. Many all inclusive resorts also offer upgraded packages that include photography, reception dinners, floral arrangements, and spa treatments for the couple. Your Certified Destination Wedding Specialist can help you compare packages across resorts to find the right fit.'
  },
  {
    question: 'How much does a destination wedding cost?',
    answer: 'The cost of a destination wedding can vary widely depending on the resort, guest count, and package tier. Based on real data from our couples, the average destination wedding costs $9,850 at an all inclusive resort — significantly less than the $36,000 average for a traditional wedding. And your guests get a vacation out of it, too!'
  },
  {
    question: 'How do destination weddings work?',
    answer: 'Destination weddings combine your wedding and travel into one seamless experience. You choose a location and resort, along with a wedding package that bundles key elements like the ceremony, venue, officiant and décor into one price.\n\nFrom there, you work with a Destination Wedding Specialist (like ours) who helps you select the right destination and resort, secure your date and room block and coordinate travel for you and your guests. The resort\'s on-site wedding team then handles the final details and day-of execution so everything comes together smoothly.'
  },
  {
    question: 'Do guests pay for their own travel to a destination wedding?',
    answer: 'Yes, guests typically cover their own flights and accommodations. The couple pays for the wedding celebration itself. Many resorts offer group rates and perks, such as complimentary rooms when a minimum number of guests book, making the trip more affordable for everyone.'
  },
  {
    question: 'Do I need a travel agent for a destination wedding?',
    answer: 'A Certified Destination Wedding Specialist takes the guesswork out of planning. They help you compare resorts and packages, coordinate group travel, manage room blocks, and handle logistics so you can focus on enjoying the experience. It\'s a 100% free service with no added cost to you.'
  },
  {
    question: 'How does planning a destination wedding with All In One Destination Weddings work?',
    answer: 'Planning starts with a free consultation with a Certified Destination Wedding Specialist who helps you choose the right destination, venue, and resort based on your vision, budget, and guest count. They guide you through key decisions, assist with legal requirements, secure your wedding date and room block, and coordinate travel for you and your guests.\n\nYour Specialist also serves as your main point of contact, working directly with the resort\'s on-site wedding planner to handle the details and keep everything on track. From start to finish, you have the support of a dedicated expert.'
  },
  {
    question: 'How do I get a quote for my destination wedding?',
    answer: 'Pricing depends on your destination, resort, travel dates, group size and the type of wedding package you choose.\n\nTo get a quote that truly matches your vision, simply fill out our quick wedding planning form. From there, a Certified Destination Wedding Specialist will reach out to learn more about what you\'re looking for. After a short discussion, they\'ll create a personalized quote tailored just to you, completely free and with no obligation to book.'
  },
  {
    question: 'I was invited to a destination wedding. How do I find the details?',
    answer: 'If you were invited to a wedding booked through our platform, visit our Guest Resources page and use the Find a Wedding tool. You\'ll need the couple\'s last name and the wedding passcode they provided. Once you\'re in, you can read their love story, learn about the destination and resort, request a room, and contact the couple\'s Specialist.'
  }
];

export const DW_SEASONS = [
  'Fall 2026',
  'Winter 2026-27',
  'Spring 2027',
  'Summer 2027',
  'Fall 2027',
  'Winter 2027-28',
  'Spring 2028',
  'Summer 2028',
  'Fall 2028',
  'Winter 2028',
  'Spring 2029',
  'Summer 2029',
  'Fall 2029'
];

export const DW_GUEST_COUNTS = [
  'Just the two of us',
  'Small and Intimate (1-24 guests)',
  'A Happy Medium (25-49 guests)',
  'Large Group (50-99 guests)',
  'A Grand Affair (100+ guests)'
];
