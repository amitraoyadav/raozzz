/**
 * Comprehensive Data Models & Datasets for SITE #78 — CLUB SECTION
 * THE KENSINGTON CLUB — NEW DELHI
 * Inspired by Panchshila Club architecture & offerings
 */

export interface ClubHeroSlide {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  ctaText: string;
  targetView: string;
  targetFacilitySlug?: string;
}

export interface ClubFacility {
  id: string;
  slug: string;
  name: string;
  shortTagline: string;
  description: string;
  longOverview: string;
  image: string;
  galleryImages: string[];
  timings: string;
  dressCode: string;
  rules: string[];
  highlights: string[];
  capacityOrSpecs?: string;
  bookingAllowed: boolean;
}

export interface CommitteeMember {
  id: string;
  name: string;
  role: string;
  category: 'office_bearer' | 'executive_member' | 'sub_committee';
  subCommittee?: string;
  bio: string;
  tenure: string;
  avatarText: string;
}

export interface DownloadForm {
  id: string;
  code: string;
  title: string;
  category: 'membership' | 'banquet' | 'sports' | 'general';
  description: string;
  fileSize: string;
  updatedDate: string;
  feeInr?: number;
}

export interface AffiliatedClub {
  id: string;
  name: string;
  city: string;
  stateOrCountry: string;
  type: 'Domestic' | 'International';
  region: 'North India' | 'West India' | 'South India' | 'East India' | 'Overseas';
  address: string;
  phone: string;
  email: string;
  facilitiesAvailable: string[];
  introCardRequired: boolean;
}

export interface ClubTender {
  id: string;
  tenderNo: string;
  title: string;
  category: 'civil_infra' | 'catering_fb' | 'electrical_it' | 'horticulture' | 'sports';
  publishDate: string;
  closingDate: string;
  openingDate: string;
  emdAmountInr: string;
  tenderFeeInr: string;
  description: string;
  status: 'Open' | 'Under Evaluation' | 'Closed';
  documentSize: string;
}

export interface ClubCareerOpening {
  id: string;
  title: string;
  department: 'Food & Beverage' | 'Sports & Athletics' | 'Front Office' | 'Banquets' | 'Finance';
  experienceRequired: string;
  type: 'Full-time' | 'Contract';
  location: 'Kensington Club, South Delhi';
  description: string;
  responsibilities: string[];
  qualifications: string[];
}

export interface ClubCalendarEvent {
  id: string;
  title: string;
  category: 'Cultural' | 'Dining Festival' | 'Sports Tournament' | 'Member Special';
  date: string;
  timing: string;
  venue: string;
  coverImage: string;
  description: string;
  entryTerms: string;
}

/* =========================================================================
   1. HERO SLIDES (Multi-slide carousel matching Panchshila structure)
   ========================================================================= */

export const CLUB_HERO_SLIDES: ClubHeroSlide[] = [
  {
    id: 'slide-1',
    title: 'Welcome to The Kensington Club',
    subtitle: 'An oasis of greenery, distinction, and timeless camaraderie in the heart of South Delhi.',
    badge: 'ESTABLISHED 1972 · SOUTH DELHI',
    image: '/assets/site78club/hero_club_main.jpg',
    ctaText: 'Explore The Club',
    targetView: 'about'
  },
  {
    id: 'slide-2',
    title: 'Freshness Baked Daily',
    subtitle: 'The Club Bakery & Patisserie serves freshly stone-baked sourdough, French pastries, and artisanal roast coffees.',
    badge: 'CONFECTIONERY & LOUNGE',
    image: '/assets/site78club/hero_bakery_patisserie.jpg',
    ctaText: 'Discover Outlets',
    targetView: 'facilities',
    targetFacilitySlug: 'outlets'
  },
  {
    id: 'slide-3',
    title: 'Bringing Class to Cuisine',
    subtitle: 'Our 90-cover dining hall presents authentic Awadhi kebabs, Continental roasts, coastal seafood, and Pan-Asian delights.',
    badge: 'SIGNATURE DINING',
    image: '/assets/site78club/hero_fine_dining.jpg',
    ctaText: 'View Dining',
    targetView: 'facilities',
    targetFacilitySlug: 'dining'
  },
  {
    id: 'slide-4',
    title: 'For the Sports Enthusiast in You',
    subtitle: 'Olympic swimming pool, four floodlit red clay tennis courts, hardwood squash and indoor badminton courts.',
    badge: 'CHAMPIONSHIP SPORTS',
    image: '/assets/site78club/hero_sports_complex.jpg',
    ctaText: 'Sports Academies',
    targetView: 'facilities',
    targetFacilitySlug: 'sports'
  },
  {
    id: 'slide-5',
    title: 'An Oasis of Greenery & Sunshine',
    subtitle: 'Expansive rolling South Delhi lawns where members gather under warm winter sunshine and breezy summer canopies.',
    badge: 'HERITAGE LAWNS',
    image: '/assets/site78club/hero_lush_lawns.jpg',
    ctaText: 'View Club Lawns',
    targetView: 'facilities',
    targetFacilitySlug: 'events'
  },
  {
    id: 'slide-6',
    title: 'The Vintage Oak Bar & Speakeasy',
    subtitle: 'Handcrafted single malts, reserve vintage wines, and classic cocktail conversations in rich wood-paneled elegance.',
    badge: 'MEMBER BARS',
    image: '/assets/site78club/hero_vintage_bar.jpg',
    ctaText: 'Explore Bars',
    targetView: 'facilities',
    targetFacilitySlug: 'bars'
  },
  {
    id: 'slide-7',
    title: 'Poolside Terrace & Open-Air Café',
    subtitle: 'Chilled smoothies, stone-baked pizzas, and poolside snacks under vibrant parasols overlooking crystal azure waters.',
    badge: 'ALFRESCO CAFÉ',
    image: '/assets/site78club/hero_poolside_cafe.jpg',
    ctaText: 'View Poolside',
    targetView: 'facilities',
    targetFacilitySlug: 'lounges'
  },
  {
    id: 'slide-8',
    title: 'Grand Celebrations & Milestone Banquets',
    subtitle: 'Impeccable venues for wedding receptions, anniversary banquets, book launches, and corporate roundtables.',
    badge: 'EVENTS & BANQUETS',
    image: '/assets/site78club/hero_banquet_lawn.jpg',
    ctaText: 'Book a Banquet',
    targetView: 'facilities',
    targetFacilitySlug: 'meetings'
  }
];

/* =========================================================================
   2. FACILITIES DATA (All 8 core facilities matching reference)
   ========================================================================= */

export const CLUB_FACILITIES: ClubFacility[] = [
  {
    id: 'fac-1',
    slug: 'dining',
    name: 'Fine Dining & Pavilion Restaurant',
    shortTagline: '90-cover air-conditioned multi-cuisine family restaurant & garden pavilion',
    description: 'A celebrated dining institution in South Delhi offering heirloom Indian recipes, Continental grill classics, and fresh Asian stir-fries.',
    longOverview: 'The Pavilion Restaurant at The Kensington Club is an enduring favourite across generations. Supervised by seasoned Master Chefs, the kitchen celebrates culinary heritage with slow-cooked Dal Kensington, Galouti Kebabs, Herb-Crusted Scottish Salmon, and wood-fired thin crust pizzas. With dedicated family tables, private alcoves for celebratory dinners, and daily lunch buffets.',
    image: '/assets/site78club/fac_dining.jpg',
    galleryImages: [
      '/assets/site78club/fac_dining.jpg',
      '/assets/site78club/hero_fine_dining.jpg',
      '/assets/site78club/hero_bakery_patisserie.jpg'
    ],
    timings: 'Lunch: 12:30 PM – 03:30 PM | Dinner: 07:30 PM – 11:00 PM',
    dressCode: 'Smart Casuals (Collared shirts, footwear mandatory; beachwear and round-neck sleeveless tees not permitted)',
    rules: [
      'Prior table reservation recommended on weekends and festival evenings.',
      'Guest fee applicable for non-member accompanied guests.',
      'Mobile phones must strictly be kept on silent mode inside the dining hall.'
    ],
    highlights: [
      'Authentic North Indian & Awadhi tandoor kitchen',
      'Continental grill & artisanal pizza oven',
      'Sunday Champagne brunch on the terrace',
      'Strict quality checks with farm-fresh organic produce'
    ],
    capacityOrSpecs: '90 Covers indoor + 45 Covers veranda seating',
    bookingAllowed: true
  },
  {
    id: 'fac-2',
    slug: 'bars',
    name: 'The Vintage Oak Bar & Cocktail Lounge',
    shortTagline: 'Polished teakwood bar with curated global spirits, fine wines & single malts',
    description: 'An intimate, sophisticated haven reserved for members seeking stimulating intellectual conversation, premium spirits, and vintage hospitality.',
    longOverview: 'Lined with dark colonial oak paneling, Chesterfield leather armchairs, and archival club sporting memorabilia, The Vintage Oak Bar is the social epicenter of the Club. Our sommeliers curate rare single malts, small-batch gins, international craft beers, and bespoke cocktail concoctions paired with gourmet bar platters.',
    image: '/assets/site78club/fac_bars.jpg',
    galleryImages: [
      '/assets/site78club/fac_bars.jpg',
      '/assets/site78club/hero_vintage_bar.jpg',
      '/assets/site78club/hero_fine_dining.jpg'
    ],
    timings: 'Daily: 12:00 PM – 03:00 PM & 06:30 PM – 11:00 PM',
    dressCode: 'Formal or Smart Casuals (Sandals/slippers and shorts strictly prohibited after 07:00 PM)',
    rules: [
      'Entry restricted to persons 21 years of age and above.',
      'Guests must be accompanied by a member and signed in at the door register.',
      'Maximum 4 guests permitted per member on Friday and Saturday evenings.'
    ],
    highlights: [
      'Extensive cellar of over 120 single malts and world whiskeys',
      'Curated cocktail menu with in-house infusions',
      'Live acoustic jazz & saxophone performances on Friday nights',
      'Temperature-controlled cigar humidor lounge'
    ],
    capacityOrSpecs: '65 Seats indoor + 30 Seats private terrace',
    bookingAllowed: false
  },
  {
    id: 'fac-3',
    slug: 'sports',
    name: 'Championship Sports & Athletics Complex',
    shortTagline: 'Olympic pool, clay tennis courts, squash, badminton & high-performance gym',
    description: 'A comprehensive sporting ecosystem with professional coaches, tournament-grade infrastructure, and fitness academies for all ages.',
    longOverview: 'Sports form the heartbeat of The Kensington Club. Our athletic complex boasts a 50-meter Olympic swimming pool with heating capabilities, four ITF-standard red clay floodlit tennis courts, three glass-backed wooden squash courts, four synthetic indoor badminton courts, and an air-conditioned Technogym cardio & strength studio.',
    image: '/assets/site78club/fac_sports.jpg',
    galleryImages: [
      '/assets/site78club/fac_sports.jpg',
      '/assets/site78club/hero_sports_complex.jpg',
      '/assets/site78club/hero_poolside_cafe.jpg'
    ],
    timings: 'Morning: 06:00 AM – 10:00 AM | Evening: 04:30 PM – 09:30 PM',
    dressCode: 'Sporting attire: Non-marking shoes for indoor courts, standard swimming trunks/costumes for pool',
    rules: [
      'Court reservations can be made 48 hours in advance via Member Portal or Reception.',
      'Shower mandatory before entering the swimming pool.',
      'Coaching available for children and adults through certified NIS instructors.'
    ],
    highlights: [
      '50m Heated Olympic Swimming Pool with dedicated lanes',
      '4 Floodlit Clay Tennis Courts with tournament spectator stands',
      'Fully equipped fitness centre with personal trainers & physiotherapist',
      'Steam, sauna, and chilled plunge tubs in locker rooms'
    ],
    capacityOrSpecs: 'Multi-sport complex catering to 400+ daily athletic visits',
    bookingAllowed: true
  },
  {
    id: 'fac-4',
    slug: 'meetings',
    name: 'Executive Boardrooms & Conference Suites',
    shortTagline: 'Discreet meeting spaces equipped with 4K AV, video conferencing & banquet service',
    description: 'High-level corporate meeting spaces, boardroom chambers, and private discussion suites designed for business leaders and diplomats.',
    longOverview: 'For corporate board meetings, arbitration sessions, shareholder reviews, and private strategy conclaves, The Kensington Club offers acoustically isolated conference suites. Equipped with 85-inch 4K collaborative displays, secure fiber Wi-Fi, motorized projection blinds, and butler catering service.',
    image: '/assets/site78club/fac_meetings.jpg',
    galleryImages: [
      '/assets/site78club/fac_meetings.jpg',
      '/assets/site78club/fac_lounges.jpg',
      '/assets/site78club/about_committee.jpg'
    ],
    timings: '08:00 AM – 10:00 PM (Prior Booking Mandatory)',
    dressCode: 'Formal or Business Casual',
    rules: [
      'Bookings must be sponsored by a club member.',
      'Catering packages (High Tea, Working Executive Lunch) pre-arranged with Banquet team.',
      'External banner display within club premises strictly restricted.'
    ],
    highlights: [
      'Chamber Boardroom: Seating 24 executives around solid mahogany table',
      'Governor Suite: Flexible conference configuration for up to 60 delegates',
      'Polycom 4K Video Conferencing & high-speed dedicated leased line',
      'All-day artisanal tea, Nespresso coffee, and chef-curated working menus'
    ],
    capacityOrSpecs: 'Chamber Room (24 pax), Governor Suite (60 pax), Chancellor Hall (120 pax)',
    bookingAllowed: true
  },
  {
    id: 'fac-5',
    slug: 'events',
    name: 'Celebrations, Festivals & Social Galas',
    shortTagline: 'Lush green lawns and amphitheatre hosting cultural evenings, Holi, Diwali & New Year',
    description: 'Vibrant club traditions including weekly Tombola, live musical programs, gourmet food festivals, seasonal fetes, and milestone family celebrations.',
    longOverview: 'The Kensington Club is famed across Delhi for its spirited social calendar. In winter, the manicured Central Lawns host warm afternoon family buffets and live musical soirees. Annual landmark gatherings such as the Diwali Mela, the Christmas Carnival, the grand Black-Tie New Year’s Eve Ball, and the colorful spring Holi Milan bring together members in joyous friendship.',
    image: '/assets/site78club/fac_events.jpg',
    galleryImages: [
      '/assets/site78club/fac_events.jpg',
      '/assets/site78club/hero_banquet_lawn.jpg',
      '/assets/site78club/hero_lush_lawns.jpg'
    ],
    timings: 'Event specific (Regular Sunday Lawn Sessions: 11:30 AM – 04:00 PM)',
    dressCode: 'Festival attire / Smart Casuals / Black Tie for Annual Galas',
    rules: [
      'Member smart card verification mandatory at entrance for ticketed club events.',
      'Guest passes must be obtained prior to major annual galas.',
      'Valet parking service operational during all major club gatherings.'
    ],
    highlights: [
      'Weekly Sunday Tombola with exciting prizes and live snacks',
      'Grand Diwali Mela with artisan stalls and cultural dance performances',
      'Winter Lawn Barbecues with live tandoor and acoustic music',
      'Amphitheatre for theatrical plays, literary talks, and musical recitals'
    ],
    capacityOrSpecs: 'Central Lawn: 800+ guests | Pavilion Amphitheatre: 250 guests',
    bookingAllowed: true
  },
  {
    id: 'fac-6',
    slug: 'outlets',
    name: 'Club Outlets & Boutique Services',
    shortTagline: 'In-house patisserie, pro sports shop, grooming salon, and library book depot',
    description: 'Convenient premium retail and lifestyle services tailored specifically for the everyday needs of club members and their households.',
    longOverview: 'To make every visit effortlessly fulfilling, The Kensington Club houses specialized on-site outlets. Our renowned Pastry Shop bakes fresh artisan bread, customized celebration cakes, and savory pies. The Pro Sports Boutique stocks Wilson tennis racquets, Speedo swimwear, and club apparel.',
    image: '/assets/site78club/fac_outlets.jpg',
    galleryImages: [
      '/assets/site78club/fac_outlets.jpg',
      '/assets/site78club/hero_bakery_patisserie.jpg',
      '/assets/site78club/fac_dining.jpg'
    ],
    timings: '10:00 AM – 09:00 PM (Daily)',
    dressCode: 'Casuals welcome',
    rules: [
      'All purchases can be billed directly to member club account or paid via UPI/Card.',
      'Special cake orders require 24 hours advance intimation.'
    ],
    highlights: [
      'Kensington Patisserie: Classic black forest, cheesecake, tea cakes & daily sourdough',
      'Club Pro Shop: Equipment stringing, tennis balls, and athletic gear',
      'Men & Ladies Grooming Parlour: Professional hair stylists and wellness therapies',
      'Dry Cleaning & Tailoring drop-off service'
    ],
    capacityOrSpecs: '4 Dedicated lifestyle outlets within the club arcade',
    bookingAllowed: false
  },
  {
    id: 'fac-7',
    slug: 'lounges',
    name: 'Member Lounges, Card Room & Library',
    shortTagline: 'Quiet reading chambers, championship bridge room, and open-air sunset terrace',
    description: 'Sanctuaries of quiet reflection, intellectual stimulation, and traditional club pastimes including tournament bridge and billiards.',
    longOverview: 'For members seeking tranquility away from the buzz of the city, our private lounges provide an unhurried retreat. The Reading Room is stocked with leading national and international dailies, period journals, and over 10,000 literary titles. The Card Room hosts daily bridge and rummy tables with attentive pantry service.',
    image: '/assets/site78club/fac_lounges.jpg',
    galleryImages: [
      '/assets/site78club/fac_lounges.jpg',
      '/assets/site78club/about_heritage.jpg',
      '/assets/site78club/hero_poolside_cafe.jpg'
    ],
    timings: '09:00 AM – 10:30 PM (Daily)',
    dressCode: 'Decent Casuals / Semi-formals',
    rules: [
      'Absolute silence observed in the Library and Reading Chambers.',
      'Card Room operates strictly according to Club By-laws; commercial stakes barred.',
      'Refreshment pantry service available on order.'
    ],
    highlights: [
      'Curated Library with historical archives, rare fiction, and periodicals',
      'Air-conditioned 12-table Bridge & Rummy salon',
      'Two century-old English Snooker & Billiards tables with championship baize',
      'Sunset Terrace overlooking the sports greens'
    ],
    capacityOrSpecs: 'Accommodates 150+ members across 4 distinct lounge zones',
    bookingAllowed: false
  },
  {
    id: 'fac-8',
    slug: 'kids-play-area',
    name: "Children's Greens & Family Recreation Area",
    shortTagline: 'Safety-certified soft playgrounds, sand pits, splash fountains & teen gaming zone',
    description: 'A joyful and secure open-air play environment where the younger generation can run free under parent supervision while adults unwind.',
    longOverview: 'Adjoining the Winter Lawns, our Children’s Play Park offers modern, shock-absorbent safety rubberized surfacing, swings, jungle gyms, slides, and shaded sand play areas. Attendants ensure a welcoming, clean, and safe space, while parents can enjoy tea and snacks from the adjacent lawn café.',
    image: '/assets/site78club/fac_kids.jpg',
    galleryImages: [
      '/assets/site78club/fac_kids.jpg',
      '/assets/site78club/hero_lush_lawns.jpg',
      '/assets/site78club/hero_poolside_cafe.jpg'
    ],
    timings: '07:00 AM – 08:30 PM (Daily)',
    dressCode: 'Playwear / Casuals',
    rules: [
      'Children below 8 years must be accompanied by a parent or authorized guardian.',
      'Footwear not allowed on the soft-foam padded equipment.',
      'Birthday party bookings on the play lawns require prior approval from Management.'
    ],
    highlights: [
      'European safety-certified non-toxic play apparatus',
      'Enclosed rubberized flooring to prevent injury',
      'Toddler splash water pad during summer months',
      'Special children’s menu available from the Poolside Café'
    ],
    capacityOrSpecs: 'Expansive 8,000 sq.ft. enclosed play greens',
    bookingAllowed: true
  }
];

/* =========================================================================
   3. MANAGEMENT COMMITTEE
   ========================================================================= */

export const MANAGEMENT_COMMITTEE: CommitteeMember[] = [
  {
    id: 'mc-1',
    name: 'Justice (Retd.) Manmohan Sharma',
    role: 'President',
    category: 'office_bearer',
    bio: 'Former High Court Judge and Senior Advocate. Longstanding club member committed to upholding institutional transparency and constitutional heritage.',
    tenure: '2025 – 2027',
    avatarText: 'MS'
  },
  {
    id: 'mc-2',
    name: 'Air Marshal (Retd.) Arvind Bakshi, PVSM, AVSM',
    role: 'Vice President',
    category: 'office_bearer',
    bio: 'Distinguished veteran of the Indian Air Force. Leads the Sports, Security & Grounds infrastructure modernizations.',
    tenure: '2025 – 2027',
    avatarText: 'AB'
  },
  {
    id: 'mc-3',
    name: 'Vikramjit Singh Kohli, FCA',
    role: 'Honorary Secretary',
    category: 'office_bearer',
    bio: 'Senior Chartered Accountant and corporate advisor. Spearheading digital membership systems, reciprocal club expansion, and F&B revamps.',
    tenure: '2025 – 2027',
    avatarText: 'VK'
  },
  {
    id: 'mc-4',
    name: 'Deepak Chawla',
    role: 'Honorary Treasurer',
    category: 'office_bearer',
    bio: 'Investment banker with 30 years in international wealth management. Oversees club financial reserves, statutory audits, and fiscal stewardship.',
    tenure: '2025 – 2027',
    avatarText: 'DC'
  },
  {
    id: 'mc-5',
    name: 'Dr. Radhika Sen',
    role: 'Chairperson — Food & Beverage Committee',
    category: 'executive_member',
    subCommittee: 'Food & Beverage',
    bio: 'Gastronomy enthusiast and hospitality consultant. Focused on elevating culinary standards, kitchen hygiene certifications, and cellar curation.',
    tenure: '2025 – 2027',
    avatarText: 'RS'
  },
  {
    id: 'mc-6',
    name: 'Sanjay Ahluwalia',
    role: 'Chairperson — Sports, Tennis & Aquatic Academy',
    category: 'executive_member',
    subCommittee: 'Sports & Swimming',
    bio: 'Former national tennis player. Mentors the junior sports scholarship program and oversaw the Olympic pool temperature-moderation project.',
    tenure: '2025 – 2027',
    avatarText: 'SA'
  },
  {
    id: 'mc-7',
    name: 'Meenakshi Sundaram',
    role: 'Chairperson — Cultural & Entertainment Committee',
    category: 'executive_member',
    subCommittee: 'Events & Culture',
    bio: 'Art curator and cultural organizer. Curates the club musical evenings, literary conclaves, and annual landmark festival celebrations.',
    tenure: '2025 – 2027',
    avatarText: 'MS'
  },
  {
    id: 'mc-8',
    name: 'Col. (Retd.) R. S. Rathore',
    role: 'Chairperson — Works, Building & Horticulture Committee',
    category: 'executive_member',
    subCommittee: 'Infrastructure & Lawns',
    bio: 'Civil engineer and environmentalist. Responsible for maintaining the club’s lush tree cover, solar plant, and heritage facade.',
    tenure: '2025 – 2027',
    avatarText: 'RR'
  }
];

/* =========================================================================
   4. DOWNLOAD FORMS (Matching Download Forms section)
   ========================================================================= */

export const CLUB_DOWNLOAD_FORMS: DownloadForm[] = [
  {
    id: 'form-1',
    code: 'KC-ADM-01',
    title: 'Permanent Membership Application Dossier',
    category: 'membership',
    description: 'Comprehensive application form for Individual, Life, and Tenure membership nominations along with proposer and seconder guidelines.',
    fileSize: '1.4 MB PDF',
    updatedDate: 'Jan 2026',
    feeInr: 2500
  },
  {
    id: 'form-2',
    code: 'KC-REC-02',
    title: 'Reciprocal Club Introduction Card Request',
    category: 'membership',
    description: 'Official letter of introduction and temporary guest pass issuance for members traveling and visiting affiliated clubs across India and overseas.',
    fileSize: '420 KB PDF',
    updatedDate: 'Feb 2026'
  },
  {
    id: 'form-3',
    code: 'KC-BNQ-03',
    title: 'Banquet & Lawn Booking Agreement',
    category: 'banquet',
    description: 'Requisition contract, terms & conditions, sound restrictions, deposit schedule, and catering norms for hosting private functions on club grounds.',
    fileSize: '890 KB PDF',
    updatedDate: 'Mar 2026'
  },
  {
    id: 'form-4',
    code: 'KC-SPT-04',
    title: 'Sports Academy & Coaching Enrollment Form',
    category: 'sports',
    description: 'Registration form for swimming, tennis, squash, and badminton coaching batches conducted by NIS certified academy trainers.',
    fileSize: '560 KB PDF',
    updatedDate: 'Jan 2026'
  },
  {
    id: 'form-5',
    code: 'KC-DEP-05',
    title: 'Dependent Smart Card & Spouse Pass Application',
    category: 'membership',
    description: 'Form for issuing digital access cards to spouses and dependent children (up to 25 years of age) with photo verification.',
    fileSize: '380 KB PDF',
    updatedDate: 'Jan 2026'
  },
  {
    id: 'form-6',
    code: 'KC-VEH-06',
    title: 'Vehicle RFID Parking Sticker Requisition',
    category: 'general',
    description: 'Registration of member-owned automobiles for automated boom-barrier access at Club gates and multi-level parking lot.',
    fileSize: '310 KB PDF',
    updatedDate: 'Dec 2025'
  },
  {
    id: 'form-7',
    code: 'KC-LCK-07',
    title: 'Sports Locker Allotment & Renewal Form',
    category: 'sports',
    description: 'Application for locker allocation in Gentlemen and Ladies changing pavilions with annual maintenance tariff schedule.',
    fileSize: '290 KB PDF',
    updatedDate: 'Nov 2025'
  },
  {
    id: 'form-8',
    code: 'KC-CHG-08',
    title: 'Change of Communication Address / Contact Details',
    category: 'general',
    description: 'Intimation form for updating residential address, official email, phone number, and billing dispatch preferences.',
    fileSize: '240 KB PDF',
    updatedDate: 'Jan 2026'
  }
];

/* =========================================================================
   5. AFFILIATED CLUBS DATA (Domestic & International reciprocal network)
   ========================================================================= */

export const AFFILIATED_CLUBS: AffiliatedClub[] = [
  // Domestic - West India
  {
    id: 'aff-1',
    name: 'Bombay Gymkhana',
    city: 'Mumbai',
    stateOrCountry: 'Maharashtra',
    type: 'Domestic',
    region: 'West India',
    address: 'Mahatma Gandhi Road, Fort, Mumbai 400001',
    phone: '+91 22 2207 0311',
    email: 'secretary@bombaygymkhana.com',
    facilitiesAvailable: ['Dining', 'Bar', 'Tennis', 'Squash', 'Gym', 'Cricket Ground'],
    introCardRequired: true
  },
  {
    id: 'aff-2',
    name: 'Cricket Club of India (CCI)',
    city: 'Mumbai',
    stateOrCountry: 'Maharashtra',
    type: 'Domestic',
    region: 'West India',
    address: 'Brabourne Stadium, Dinshaw Vacha Road, Churchgate, Mumbai 400020',
    phone: '+91 22 6659 4321',
    email: 'info@cciclub.in',
    facilitiesAvailable: ['Swimming Pool', 'Guest Rooms', 'Fine Dining', 'Billiards', 'Tennis'],
    introCardRequired: true
  },
  {
    id: 'aff-3',
    name: 'Poona Club Ltd.',
    city: 'Pune',
    stateOrCountry: 'Maharashtra',
    type: 'Domestic',
    region: 'West India',
    address: '6 Bund Garden Road, Pune 411001',
    phone: '+91 20 2636 0083',
    email: 'contact@poonaclubltd.com',
    facilitiesAvailable: ['Golf Course', 'Tennis', 'Bar', 'Guest Rooms', 'Swimming'],
    introCardRequired: true
  },
  // Domestic - South India
  {
    id: 'aff-4',
    name: 'Bangalore Club',
    city: 'Bengaluru',
    stateOrCountry: 'Karnataka',
    type: 'Domestic',
    region: 'South India',
    address: '10 Field Marshal K.M. Cariappa Road, Bengaluru 560025',
    phone: '+91 80 6612 5000',
    email: 'secretary@bangaloreclub.com',
    facilitiesAvailable: ['Heritage Bar', 'Library', 'Squash', 'Guest Cottages', 'Dining'],
    introCardRequired: true
  },
  {
    id: 'aff-5',
    name: 'Bowring Institute',
    city: 'Bengaluru',
    stateOrCountry: 'Karnataka',
    type: 'Domestic',
    region: 'South India',
    address: '19 St. Mark\'s Road, Bengaluru 560001',
    phone: '+91 80 2221 4453',
    email: 'info@bowringinstitute.in',
    facilitiesAvailable: ['Tennis', 'Badminton', 'Billiards', 'Dining', 'Bar'],
    introCardRequired: true
  },
  {
    id: 'aff-6',
    name: 'Madras Gymkhana Club',
    city: 'Chennai',
    stateOrCountry: 'Tamil Nadu',
    type: 'Domestic',
    region: 'South India',
    address: 'The Island, Anna Salai, Chennai 600002',
    phone: '+91 44 2536 8160',
    email: 'mgc@madrasgymkhana.com',
    facilitiesAvailable: ['Golf Course', 'Tennis', 'Swimming', 'Guest Suites', 'Dining'],
    introCardRequired: true
  },
  {
    id: 'aff-7',
    name: 'Secunderabad Club',
    city: 'Hyderabad',
    stateOrCountry: 'Telangana',
    type: 'Domestic',
    region: 'South India',
    address: 'Picket Road, Secunderabad 500003',
    phone: '+91 40 2780 4840',
    email: 'secunderabadclub@gmail.com',
    facilitiesAvailable: ['Colonial Dining', 'Bar', 'Squash', 'Swimming Pool', 'Lawns'],
    introCardRequired: true
  },
  // Domestic - East India
  {
    id: 'aff-8',
    name: 'Calcutta Club Ltd.',
    city: 'Kolkata',
    stateOrCountry: 'West Bengal',
    type: 'Domestic',
    region: 'East India',
    address: '241 Acharya Jagadish Chandra Bose Road, Kolkata 700020',
    phone: '+91 33 2223 0331',
    email: 'calcuttaclub@calcuttaclub.com',
    facilitiesAvailable: ['Heritage Library', 'Bakery', 'Tennis', 'Guest Rooms', 'Billiards'],
    introCardRequired: true
  },
  {
    id: 'aff-9',
    name: 'Bengal Club',
    city: 'Kolkata',
    stateOrCountry: 'West Bengal',
    type: 'Domestic',
    region: 'East India',
    address: '1/1 Russell Street, Park Street Area, Kolkata 700071',
    phone: '+91 33 2229 8651',
    email: 'bengalclub@bengalclub.org',
    facilitiesAvailable: ['Fine Dining', 'Whiskey Lounge', 'Boardrooms', 'Guest Suites'],
    introCardRequired: true
  },
  // Domestic - North India
  {
    id: 'aff-10',
    name: 'Chandigarh Club Ltd.',
    city: 'Chandigarh',
    stateOrCountry: 'Punjab / Chandigarh',
    type: 'Domestic',
    region: 'North India',
    address: 'Sector 1, Chandigarh 160001',
    phone: '+91 172 274 0144',
    email: 'info@chandigarhclubltd.com',
    facilitiesAvailable: ['Tennis', 'Badminton', 'Swimming Pool', 'Lawns', 'Bar'],
    introCardRequired: true
  },
  {
    id: 'aff-11',
    name: 'Jaipur Club',
    city: 'Jaipur',
    stateOrCountry: 'Rajasthan',
    type: 'Domestic',
    region: 'North India',
    address: 'Jacob Road, Civil Lines, Jaipur 302006',
    phone: '+91 141 222 4225',
    email: 'jaipurclub@gmail.com',
    facilitiesAvailable: ['Heritage Lawns', 'Squash', 'Dining', 'Bar', 'Guest Rooms'],
    introCardRequired: true
  },
  {
    id: 'aff-12',
    name: 'Goa Golf & Country Club',
    city: 'Panaji',
    stateOrCountry: 'Goa',
    type: 'Domestic',
    region: 'West India',
    address: 'Dona Paula, Miramar Beachfront, Goa 403004',
    phone: '+91 832 245 6112',
    email: 'hospitality@goagolfclub.in',
    facilitiesAvailable: ['Beach Club', 'Waterfront Dining', 'Golf Range', 'Bar', 'Pool'],
    introCardRequired: true
  },
  // International
  {
    id: 'aff-13',
    name: 'The Lansdowne Club',
    city: 'London',
    stateOrCountry: 'United Kingdom',
    type: 'International',
    region: 'Overseas',
    address: '9 Fitzmaurice Place, Mayfair, London W1J 5JD, UK',
    phone: '+44 20 7629 7200',
    email: 'reception@lansdowneclub.com',
    facilitiesAvailable: ['Fencing Room', 'Swimming Pool', 'Mayfair Dining', 'Guest Suites'],
    introCardRequired: true
  },
  {
    id: 'aff-14',
    name: 'The Tanglin Club',
    city: 'Singapore',
    stateOrCountry: 'Singapore',
    type: 'International',
    region: 'Overseas',
    address: '5 Stevens Road, Singapore 257814',
    phone: '+65 6622 0555',
    email: 'front_office@tanglinclub.org.sg',
    facilitiesAvailable: ['Squash', 'Billiards', 'Gourmet Cellar', 'Spa', 'Card Room'],
    introCardRequired: true
  },
  {
    id: 'aff-15',
    name: 'Dubai Country Club / Creek Golf Club',
    city: 'Dubai',
    stateOrCountry: 'United Arab Emirates',
    type: 'International',
    region: 'Overseas',
    address: 'Dubai Creek Resort, Port Saeed, Dubai, UAE',
    phone: '+971 4 295 6000',
    email: 'info@dubaicreekresort.com',
    facilitiesAvailable: ['Championship Golf', 'Marina Dining', 'Infinity Pool', 'Gym'],
    introCardRequired: true
  },
  {
    id: 'aff-16',
    name: 'Colombo Swimming Club',
    city: 'Colombo',
    stateOrCountry: 'Sri Lanka',
    type: 'International',
    region: 'Overseas',
    address: '148 Galle Road, Colombo 03, Sri Lanka',
    phone: '+94 11 242 1645',
    email: 'info@colomboswimmingclub.org',
    facilitiesAvailable: ['Seafront Pool', 'Dining', 'Bar', 'Badminton', 'Squash'],
    introCardRequired: true
  }
];

/* =========================================================================
   6. TENDERS DATA
   ========================================================================= */

export const CLUB_TENDERS: ClubTender[] = [
  {
    id: 'tender-1',
    tenderNo: 'KC/TNDR/2026/04',
    title: 'Upgradation and Resurfacing of Red Clay Tennis Courts (Courts 1 to 4)',
    category: 'sports',
    publishDate: '28th September 2026',
    closingDate: '24th October 2026 (03:00 PM)',
    openingDate: '26th October 2026 (04:00 PM)',
    emdAmountInr: '₹ 1,50,000 /-',
    tenderFeeInr: '₹ 2,500 /-',
    description: 'Sealed item-rate tenders invited from experienced specialized sports infrastructure contractors for laser leveling, drainage re-engineering, French crushed brick top dressing, and net post replacements.',
    status: 'Open',
    documentSize: '1.8 MB PDF'
  },
  {
    id: 'tender-2',
    tenderNo: 'KC/TNDR/2026/05',
    title: 'Comprehensive Annual Maintenance Contract for Kitchen Cold Rooms & Bakery Chiller Plant',
    category: 'catering_fb',
    publishDate: '01st October 2026',
    closingDate: '28th October 2026 (03:00 PM)',
    openingDate: '30th October 2026 (11:00 AM)',
    emdAmountInr: '₹ 75,000 /-',
    tenderFeeInr: '₹ 1,500 /-',
    description: 'Contract for round-the-clock maintenance, refrigerant top-up, compressor overhauling, and preventative servicing of industrial walk-in deep freezers across main restaurant and bakery kitchens.',
    status: 'Open',
    documentSize: '950 KB PDF'
  },
  {
    id: 'tender-3',
    tenderNo: 'KC/TNDR/2026/06',
    title: 'Horticulture Maintenance, Lawn Care & Seasonal Flower Bed Plantation for Winter 2026–27',
    category: 'horticulture',
    publishDate: '05th October 2026',
    closingDate: '05th November 2026 (04:00 PM)',
    openingDate: '07th November 2026 (12:00 Noon)',
    emdAmountInr: '₹ 1,00,000 /-',
    tenderFeeInr: '₹ 2,000 /-',
    description: 'Supply of winter petunias, marigolds, chrysanthemums, vermicompost, automatic sprinkler servicing, and regular grass de-weeding and rolling across 3 acres of club gardens.',
    status: 'Open',
    documentSize: '1.2 MB PDF'
  },
  {
    id: 'tender-4',
    tenderNo: 'KC/TNDR/2026/02',
    title: 'Supply and Installation of 125 kWp Rooftop Solar PV System on Sports Pavilion',
    category: 'electrical_it',
    publishDate: '15th August 2026',
    closingDate: '15th September 2026',
    openingDate: '18th September 2026',
    emdAmountInr: '₹ 2,00,000 /-',
    tenderFeeInr: '₹ 3,000 /-',
    description: 'Turnkey design, net metering liaison with BSES, solar panel mounting, and grid-tied inverters installation on the covered sports pavilion roof.',
    status: 'Under Evaluation',
    documentSize: '2.4 MB PDF'
  },
  {
    id: 'tender-5',
    tenderNo: 'KC/TNDR/2026/01',
    title: 'Interior Renovation & Teakwood Polishing of Main Vintage Oak Bar Room',
    category: 'civil_infra',
    publishDate: '10th July 2026',
    closingDate: '10th August 2026',
    openingDate: '12th August 2026',
    emdAmountInr: '₹ 1,20,000 /-',
    tenderFeeInr: '₹ 2,000 /-',
    description: 'Wood sanding, PU matte lacquer coating, leather upholstery reupholstering, and energy-efficient warm LED back-lighting overhaul.',
    status: 'Closed',
    documentSize: '1.5 MB PDF'
  }
];

/* =========================================================================
   7. CAREERS DATA
   ========================================================================= */

export const CLUB_CAREERS: ClubCareerOpening[] = [
  {
    id: 'job-1',
    title: 'Assistant Food & Beverage Manager',
    department: 'Food & Beverage',
    experienceRequired: '5 – 8 years in luxury 5-star hotels or prestigious private clubs',
    type: 'Full-time',
    location: 'Kensington Club, South Delhi',
    description: 'Responsible for managing floor operations across Pavilion Restaurant, The Oak Bar, and Poolside Café, maintaining impeccable member satisfaction standards.',
    responsibilities: [
      'Supervise dining room captains, stewards, and bar staff across all shifts.',
      'Enforce strict food hygiene protocols (FSSAI) and inventory controls.',
      'Coordinate personalized VIP table requirements for senior club members.',
      'Collaborate with Executive Chef on menu updates, food festival promotions, and member feedback.'
    ],
    qualifications: [
      'Degree in Hotel Management from a premier institute (IHM or equivalent).',
      'Pleasing personality, fluent communication in English & Hindi, and high emotional intelligence.',
      'Strong knowledge of wine service, billing POS software, and cost-containment.'
    ]
  },
  {
    id: 'job-2',
    title: 'Head Tennis Coach & Academy Pro',
    department: 'Sports & Athletics',
    experienceRequired: '6+ years coaching state / national junior players',
    type: 'Full-time',
    location: 'Kensington Club, South Delhi',
    description: 'Lead the Kensington Junior & Adult Tennis Academy across 4 red clay floodlit courts, conducting group coaching clinics and tournament match-play.',
    responsibilities: [
      'Design structured curriculum for beginner, intermediate, and competitive junior batches.',
      'Organize annual club ranking tournaments, inter-club fixtures, and parent-child doubles.',
      'Oversee court maintenance, ball machines, and tennis pro shop equipment advice.',
      'Conduct private high-performance stroke-play coaching for club members.'
    ],
    qualifications: [
      'NIS / ITF Level 2 or PTR Certified Tennis Professional.',
      'Past ranking in National Men’s / Junior Circuit preferred.',
      'Patient, motivating demeanor with children and adult amateur enthusiasts.'
    ]
  },
  {
    id: 'job-3',
    title: 'Senior Banquet & Event Sales Coordinator',
    department: 'Banquets',
    experienceRequired: '4 – 7 years in luxury banquet sales and event operations',
    type: 'Full-time',
    location: 'Kensington Club, South Delhi',
    description: 'Drive banquet and lawn bookings for member milestone celebrations, wedding receptions, book launches, and corporate meetings.',
    responsibilities: [
      'Handle member event enquiries, conduct site inspections, and finalize tailored catering proposals.',
      'Coordinate with florists, acoustic sound engineers, and decorators ensuring compliance with club bylaws.',
      'Oversee event execution on the day of function ensuring seamless hospitality.',
      'Manage billing settlements, security deposits, and guest feedback.'
    ],
    qualifications: [
      'Graduate in Event Management or Hospitality.',
      'Proven track record in high-value social catering sales in Delhi NCR.',
      'Excellent negotiation, organizational, and crisis-management skills.'
    ]
  },
  {
    id: 'job-4',
    title: 'Member Relations Executive (Front Desk Concierge)',
    department: 'Front Office',
    experienceRequired: '2 – 4 years in luxury guest relations or aviation hospitality',
    type: 'Full-time',
    location: 'Kensington Club, South Delhi',
    description: 'The primary welcoming face of the Club, attending to member inquiries, guest passes, reciprocal introduction cards, and dining reservations.',
    responsibilities: [
      'Warmly greet members and their families upon arrival in the Main Foyer.',
      'Process membership form handovers, vehicle RFID tags, and smart card top-ups.',
      'Handle incoming phone calls, booking requests, and affiliated club affiliations.',
      'Maintain an updated daily guest log and address member feedback promptly.'
    ],
    qualifications: [
      'Bachelor’s degree with polished grooming and diction.',
      'Warm, hospitable temperament with high discretion and problem-solving agility.',
      'Proficiency in MS Office and Club Management ERP systems.'
    ]
  }
];

/* =========================================================================
   8. CLUB CALENDAR & LATEST NOTICES
   ========================================================================= */

export const CLUB_EVENTS: ClubCalendarEvent[] = [
  {
    id: 'event-1',
    title: 'Sunday Winter Lawn Barbecue & Live Jazz',
    category: 'Dining Festival',
    date: 'Sunday, 18th October 2026',
    timing: '12:30 PM – 04:00 PM',
    venue: 'Central Lawns & Pavilion',
    coverImage: '/assets/site78club/hero_lush_lawns.jpg',
    description: 'Savor slow-smoked ribs, herb lamb chops, paneer shashlik, and craft sangrias in the golden afternoon sunshine with live quartet music.',
    entryTerms: 'Open to Members & accompanied guests · Special Buffet Tariff applicable'
  },
  {
    id: 'event-2',
    title: 'Grand Diwali Mela & Handcraft Exhibition',
    category: 'Cultural',
    date: 'Saturday, 24th October 2026',
    timing: '04:00 PM – 10:30 PM',
    venue: 'Central Lawns & Amphitheatre',
    coverImage: '/assets/site78club/fac_events.jpg',
    description: 'Delhi’s most anticipated festive gathering featuring designer ethnic couture, diya craft stalls, festive sweets, rides for kids, and evening cultural fireworks.',
    entryTerms: 'Member Smart Card entry · Guest passes available at Reception desk'
  },
  {
    id: 'event-3',
    title: 'All-India Inter-Club Tennis Invitational',
    category: 'Sports Tournament',
    date: 'Friday – Sunday, 06th – 08th November 2026',
    timing: '08:00 AM – 06:00 PM',
    venue: 'Championship Red Clay Courts (1 to 4)',
    coverImage: '/assets/site78club/fac_sports.jpg',
    description: 'Teams from Bombay Gymkhana, Bangalore Club, Calcutta Club, and Madras Gymkhana compete for the coveted Kensington Gold Trophy.',
    entryTerms: 'Free entry for members and families to cheer courtside'
  },
  {
    id: 'event-4',
    title: 'The Annual Black-Tie New Year’s Eve Ball',
    category: 'Member Special',
    date: 'Thursday, 31st December 2026',
    timing: '08:30 PM onwards',
    venue: 'Main Pavilion Hall & Central Lawn Canopy',
    coverImage: '/assets/site78club/hero_banquet_lawn.jpg',
    description: 'Celebrate the arrival of 2027 in resplendent luxury with an 8-course gala dinner, champagne toasts, international live dance troupe, and countdown.',
    entryTerms: 'Strictly Black Tie / Tuxedo / Formal Sherwani · Advance table registration required'
  }
];

/* =========================================================================
   9. EXTRA SERVICES (Matching Reference Infoboxes)
   ========================================================================= */

export const CLUB_EXTRA_SERVICES = [
  {
    id: 'svc-1',
    title: 'Distraction-Free Workspaces',
    description: 'Dedicated quiet study chambers, ergonomic desks, and private phone pods for members conducting remote business.'
  },
  {
    id: 'svc-2',
    title: 'High-Speed Fiber Connectivity',
    description: 'Seamless club-wide dual-band Wi-Fi coverage across reading rooms, lawns, dining verandas, and meeting chambers.'
  },
  {
    id: 'svc-3',
    title: 'Vibrant Community & Social Calendar',
    description: 'Over 60 signature cultural, literary, and culinary events held annually fostering lifelong bonds among families.'
  },
  {
    id: 'svc-4',
    title: '24/7 Monitored Access & Security',
    description: 'Smart RFID boom barriers, CCTV surveillance, and discrete security personnel safeguarding member peace of mind.'
  },
  {
    id: 'svc-5',
    title: 'Luxurious Member Guest Suites',
    description: '8 boutique colonial guest rooms for visiting outstation guests and members of affiliated reciprocal clubs.'
  },
  {
    id: 'svc-6',
    title: 'Daily Housekeeping & Valeting',
    description: 'Spotless hygiene standards, continuous lawn manicuring, sanitized changing rooms, and complimentary valet parking.'
  }
];

/* =========================================================================
   10. MOCK MEMBER DATA FOR INTERACTIVE LOGIN PORTAL
   ========================================================================= */

export const MOCK_MEMBER_ACCOUNT = {
  memberId: 'MEM-1972-884',
  memberName: 'Col. Rajiv & Ananya Malhotra',
  membershipType: 'Permanent Life Member (Est. 1998)',
  status: 'Active · Good Standing',
  currentBalanceInr: -4250, // Positive indicates credit, negative indicates due
  unbilledSpendsInr: 2840,
  recentBills: [
    { invoiceNo: 'INV-2026-09-001', month: 'September 2026', amount: 8450, status: 'Paid', date: '30 Sep 2026' },
    { invoiceNo: 'INV-2026-08-001', month: 'August 2026', amount: 6220, status: 'Paid', date: '31 Aug 2026' },
    { invoiceNo: 'INV-2026-07-001', month: 'July 2026', amount: 9150, status: 'Paid', date: '31 Jul 2026' }
  ],
  courtBookings: [
    { sport: 'Tennis Court 2 (Clay)', date: 'Tomorrow, 07:00 AM – 08:00 AM', status: 'Confirmed' },
    { sport: 'Squash Court 1', date: 'Saturday, 05:30 PM – 06:15 PM', status: 'Confirmed' }
  ],
  smartCardsIssued: 3
};
