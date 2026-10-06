import { BusinessWebsite } from '../types';
import { site80Config } from '../config/site80Config';

export interface ClubHeroSlide {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  imageUrl: string;
}

export interface ClubEvent {
  id: string;
  slug: string;
  title: string;
  dayShort: string;
  dateStr: string;
  fullDate: string;
  genre: string;
  description: string;
  imageUrl: string;
  time: string;
  entryRule: string;
}

export interface PostEventAlbum {
  id: string;
  dateShort: string;
  title: string;
  photoCount: number;
  imageUrl: string;
  photos: string[];
}

export interface MediaPhoto {
  id: string;
  title: string;
  category: 'parties' | 'ambience' | 'vip' | 'mixology' | 'djs';
  imageUrl: string;
  date: string;
}

export interface ClubVideo {
  id: string;
  title: string;
  subtext: string;
  duration: string;
  date: string;
  videoUrl: string;
  posterUrl: string;
}

// 1. HERO SLIDER DATA
export const HERO_SLIDES: ClubHeroSlide[] = [
  {
    id: 'slide-1',
    title: 'WHERE MONOCHROME MEETS HIGH VOLTAGE',
    subtitle: "Delhi's Iconic Nightlife Institution at The Suryaa",
    tagline: 'CLUB NOIR BLANC',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1920&q=80'
  },
  {
    id: 'slide-2',
    title: 'GLAMOUR, MUSIC & BESPOKE ENERGY',
    subtitle: 'State-of-the-Art Acoustic Engineering & High-Energy Crowds',
    tagline: 'THE WEEKEND RITUAL',
    imageUrl: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1920&q=80'
  },
  {
    id: 'slide-3',
    title: 'ELEVATE YOUR NIGHTS TO PURE ART',
    subtitle: 'VIP Mezzanine Suites, Prestige Bottle Fanfare & Private Stewards',
    tagline: 'RESERVED ACCESS',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1920&q=80'
  }
];

// 2. UPCOMING EVENTS (Matches Reference Format)
export const UPCOMING_EVENTS: ClubEvent[] = [
  {
    id: 'evt-1',
    slug: 'glam-n-gala-saturday',
    title: 'Glam N Gala Saturday',
    dayShort: 'Thu',
    dateStr: '14/March',
    fullDate: 'Thursday, 14 March 2026',
    genre: 'Best of Commercial',
    description: 'High-octane commercial anthems, glittering strobe choreography, and celebratory champagne parades.',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    time: '9:00 PM Onwards',
    entryRule: 'Couples & Females on Guestlist till 11:30 PM'
  },
  {
    id: 'evt-2',
    slug: 'vogue-cult-night-friday',
    title: 'Vogue Cult Night Friday',
    dayShort: 'Wed',
    dateStr: '13/March',
    fullDate: 'Wednesday, 13 March 2026',
    genre: 'Best of Commercial & House',
    description: 'A tribute to cutting-edge runway fashion, melodic house rhythms, and chic cosmopolitan nightlife.',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    time: '9:00 PM Onwards',
    entryRule: 'Free flow craft shooters for ladies till midnight'
  },
  {
    id: 'evt-3',
    slug: 'gats-cool-wednesday',
    title: "Gat's Cool Wednesday",
    dayShort: 'Mon',
    dateStr: '11/March',
    fullDate: 'Monday, 11 March 2026',
    genre: 'Best of Commercial',
    description: 'Mid-week release with deep grooves, signature molecular cocktails, and relaxed upscale lounges.',
    imageUrl: 'https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?auto=format&fit=crop&w=1200&q=80',
    time: '9:00 PM Onwards',
    entryRule: 'Table reservations enjoy 20% redeemable credit'
  },
  {
    id: 'evt-4',
    slug: 'pre-holi-social',
    title: 'Pre-Holi Social',
    dayShort: 'Fri',
    dateStr: '08/March',
    fullDate: 'Friday, 08 March 2026',
    genre: 'Best of Commercial & Desi Mashups',
    description: 'Electrifying festive euphoria blending commercial dance floor hits with high-octane live dhol accompaniment.',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    time: '9:00 PM Onwards',
    entryRule: 'Special group table packages available'
  },
  {
    id: 'evt-5',
    slug: 'midnight-ecstasy-saturday',
    title: 'Midnight Ecstasy Saturday',
    dayShort: 'Sat',
    dateStr: '16/March',
    fullDate: 'Saturday, 16 March 2026',
    genre: 'Big Room EDM & International Hits',
    description: 'Peak weekend energy with headline guest DJ sets, CO2 jet blast cannons, and wall-to-wall dance floor euphoria.',
    imageUrl: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1200&q=80',
    time: '9:30 PM Onwards',
    entryRule: 'Strictly prior reservation & couple entry'
  },
  {
    id: 'evt-6',
    slug: 'sensational-sunday-sundowner',
    title: 'Sensational Sunday Supperclub',
    dayShort: 'Sun',
    dateStr: '17/March',
    fullDate: 'Sunday, 17 March 2026',
    genre: 'Bollywood & Punjabi Beats',
    description: 'End the weekend on a grand high with India’s favorite party anthems and gourmet tapas dining.',
    imageUrl: 'https://images.unsplash.com/photo-1578736641330-3155e606cd40?auto=format&fit=crop&w=1200&q=80',
    time: '9:00 PM Onwards',
    entryRule: 'Complimentary VIP check-in before 11 PM'
  }
];

// 3. POST EVENT ALBUMS (Exact match to reference loop grid)
export const POST_EVENT_ALBUMS: PostEventAlbum[] = [
  {
    id: 'album-1',
    dateShort: '04/Mar',
    title: 'En Vogue Wednesday',
    photoCount: 71,
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    photos: [
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'album-2',
    dateShort: '13/Mar',
    title: 'Friday Night',
    photoCount: 57,
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    photos: [
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'album-3',
    dateShort: '12/Mar',
    title: 'Global Village Thursday',
    photoCount: 36,
    imageUrl: 'https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?auto=format&fit=crop&w=800&q=80',
    photos: [
      'https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'album-4',
    dateShort: '28/Feb',
    title: 'A Popping Affair',
    photoCount: 72,
    imageUrl: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=800&q=80',
    photos: [
      'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578736641330-3155e606cd40?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'album-5',
    dateShort: '26/Jan',
    title: 'En-Vogue Wednesday',
    photoCount: 50,
    imageUrl: 'https://images.unsplash.com/photo-1578736641330-3155e606cd40?auto=format&fit=crop&w=800&q=80',
    photos: [
      'https://images.unsplash.com/photo-1578736641330-3155e606cd40?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'album-6',
    dateShort: '22/Feb',
    title: 'Glam & Gala Saturday',
    photoCount: 58,
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    photos: [
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'album-7',
    dateShort: '21/Feb',
    title: 'Friday Night Fever',
    photoCount: 61,
    imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    photos: [
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'album-8',
    dateShort: '19/Feb',
    title: 'En Vogue Wednesday',
    photoCount: 51,
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    photos: [
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'album-9',
    dateShort: '18/Feb',
    title: 'Tuesday Vibes',
    photoCount: 50,
    imageUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
    photos: [
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'album-10',
    dateShort: '15/Feb',
    title: "Glam 'n' Gala Saturday",
    photoCount: 45,
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    photos: [
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'album-11',
    dateShort: '14/Feb',
    title: "Hits 'n' Misses Valentines",
    photoCount: 58,
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    photos: [
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'album-12',
    dateShort: '13/Feb',
    title: "Crosses 'n' Hearts",
    photoCount: 101,
    imageUrl: 'https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?auto=format&fit=crop&w=800&q=80',
    photos: [
      'https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];

// 4. MEDIA GALLERY PHOTOS
export const MEDIA_GALLERY: MediaPhoto[] = [
  {
    id: 'med-1',
    title: 'Central Kinetic Dance Floor',
    category: 'ambience',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    date: 'March 2026'
  },
  {
    id: 'med-2',
    title: 'VIP Mezzanine Champagne Lounge',
    category: 'vip',
    imageUrl: 'https://images.unsplash.com/photo-1578736641330-3155e606cd40?auto=format&fit=crop&w=1200&q=80',
    date: 'March 2026'
  },
  {
    id: 'med-3',
    title: 'Resident DJ Deck in Full Flow',
    category: 'djs',
    imageUrl: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1200&q=80',
    date: 'March 2026'
  },
  {
    id: 'med-4',
    title: 'Liquid Nitrogen Smoked Old Fashioned',
    category: 'mixology',
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80',
    date: 'February 2026'
  },
  {
    id: 'med-5',
    title: 'Weekend Celebration Parades',
    category: 'parties',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    date: 'February 2026'
  },
  {
    id: 'med-6',
    title: 'Gold Laser Horizon Sweep',
    category: 'ambience',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    date: 'February 2026'
  },
  {
    id: 'med-7',
    title: 'Ace of Spades VIP Fanfare',
    category: 'vip',
    imageUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
    date: 'January 2026'
  },
  {
    id: 'med-8',
    title: 'Crowd Hands Raised to Peak Drops',
    category: 'parties',
    imageUrl: 'https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?auto=format&fit=crop&w=1200&q=80',
    date: 'January 2026'
  }
];

// 5. VIDEOS DATA
export const CLUB_VIDEOS: ClubVideo[] = [
  {
    id: 'vid-1',
    title: 'Club Noir Blanc — Saturday Night Aftermovie',
    subtext: 'Relive the high-octane energy and 120-beam laser show',
    duration: '02:45',
    date: 'March 2026',
    videoUrl: 'https://static.priveenewdelhi.com/files/bf47e3174111f6e0cacfbf596dab2bb8.webm',
    posterUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'vid-2',
    title: 'En Vogue Wednesdays — Ladies Night Special',
    subtext: 'Free flow craft cocktails, high fashion & melodic beats',
    duration: '01:50',
    date: 'February 2026',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'vid-3',
    title: 'Pre-Holi Countdown — Desi Bass Explosion',
    subtext: 'Live dhol synergy and roof-raising club remixes',
    duration: '03:10',
    date: 'March 2026',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'vid-4',
    title: 'VIP Mezzanine Experience — Bottle Parades',
    subtext: 'Dom Pérignon sparklers and white-glove table service',
    duration: '02:15',
    date: 'January 2026',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1578736641330-3155e606cd40?auto=format&fit=crop&w=1200&q=80'
  }
];

// 6. ABOUT CLUB PILLARS
export const ABOUT_PILLARS = [
  {
    title: 'The Monochrome Philosophy',
    desc: 'Inspired by timeless high fashion and bold contrasts, Club Noir Blanc pairs deep obsidian architectural textures with striking illumination and gold flourishes.',
    icon: 'Layers'
  },
  {
    title: 'Acoustic Sound Architecture',
    desc: 'Pioneering precision Void Acoustics installations designed to deliver powerful, chest-thumping sub-bass while maintaining complete vocal and acoustic clarity.',
    icon: 'Volume2'
  },
  {
    title: 'VIP Hospitality & Privacy',
    desc: 'Dedicated private booths, private security detail, discreet bottle service, and seamless valet drop-off at The Suryaa Hotel entrance.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Curated World-Class Artists',
    desc: 'A storied track record of hosting international festival headliners, top Indian Bollywood remix artists, and high-energy live percussionists.',
    icon: 'Disc'
  }
];

// 7. WEBSITE OBJECT FOR APPLET CATALOG
export const SITE_80_WEBSITE: BusinessWebsite = {
  id: 'site-80-club-bw',
  businessName: site80Config.BRAND_NAME,
  templateId: 'club_bw_80',
  category: 'bar',
  slug: '80-club-bw',
  tagline: site80Config.TAGLINE,
  description: `${site80Config.BRAND_NAME} is Delhi's iconic luxury nightclub at The Suryaa Hotel in New Friends Colony. Recreating the monochrome high-energy nightlife experience inspired by Club BW.`,
  ownerName: 'Executive Directorate',
  city: 'Delhi',
  address: site80Config.LOCATION,
  phone: site80Config.PHONE,
  whatsapp: site80Config.WHATSAPP,
  email: site80Config.EMAIL,
  mapsUrl: site80Config.MAPS_URL,
  openingHours: site80Config.OPENING_HOURS,
  bookingType: 'reservation_party',
  bookingCtaLabel: 'Reserve a Table',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 4999,
  paymentStatus: 'paid',
  coverUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=80',
  logoUrl: '/images/logo.svg',
  primaryColor: site80Config.COLORS.goldAccent,
  secondaryColor: site80Config.COLORS.bgDark,
  fontFamily: 'Alegreya Sans, sans-serif',
  sections: [
    { id: 'hero-slides', title: 'Full-Width Hero Slider', isEnabled: true, order: 1 },
    { id: 'upcoming-tabs', title: 'Upcoming Events & Virtual Walk-Through', isEnabled: true, order: 2 },
    { id: 'post-event-grid', title: 'Post Event Photo Albums', isEnabled: true, order: 3 },
    { id: 'footer', title: 'Expandable Hours Footer', isEnabled: true, order: 4 }
  ],
  gallery: MEDIA_GALLERY.map((g) => ({
    id: g.id,
    title: g.title,
    category: g.category,
    imageUrl: g.imageUrl
  })),
  offers: [
    {
      id: 'bw-table-offer',
      title: '20% Redeemable Table Credit',
      description: 'Book online and enjoy 20% value-add credit towards your food and champagne bill.',
      couponCode: 'NOIRBLANC20',
      discountPercent: 20,
      validTill: '2026-12-31'
    },
    {
      id: 'bw-ladies-night',
      title: 'En Vogue Free Flow Drinks',
      description: 'Single ladies enjoy complimentary signature martinis & shooters till midnight on Wednesdays.',
      couponCode: 'ENVOGUE',
      discountPercent: 100,
      validTill: '2026-12-31'
    }
  ],
  items: [
    {
      id: 'item-dom-perignon',
      name: 'Dom Pérignon Vintage Champagne',
      description: 'Prestige champagne bottle served with sparkler fanfare and chilled crystal flutes.',
      price: 48000,
      category: 'Champagne & Sparklers',
      imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
      isAvailable: true
    },
    {
      id: 'item-smoked-old-fashioned',
      name: 'Liquid Nitrogen Smoked Old Fashioned',
      description: 'Small batch bourbon, aromatic bitters, charred orange peel, smoking applewood mist.',
      price: 1850,
      category: 'Cocktails',
      imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
      isAvailable: true
    },
    {
      id: 'item-truffle-sliders',
      name: 'Black Truffle Gourmet Sliders',
      description: 'Brioche buns, aged cheddar, caramelized shallots, microgreens, and herb fries.',
      price: 1450,
      category: 'Tapas & Dining',
      imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      isAvailable: true
    }
  ],
  createdAt: '2026-10-05T00:00:00.000Z',
  updatedAt: '2026-10-05T00:00:00.000Z'
};

export default SITE_80_WEBSITE;
