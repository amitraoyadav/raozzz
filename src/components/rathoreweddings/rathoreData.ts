export interface RathoreService {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  deliverables: string[];
}

export interface RathoreFlipService {
  id: string;
  title: string;
  frontImage: string;
  description: string;
}

export interface RathoreFeaturedWedding {
  id: string;
  couple: string;
  venue: string;
  location: string;
  image: string;
  story: string;
  highlight: string;
}

export interface RathoreTestimonial {
  id: string;
  name: string;
  role: string;
  wedding: string;
  quote: string;
  image: string;
}

export interface RathorePortfolioItem {
  id: string;
  title: string;
  category: 'decor' | 'mandap' | 'varmala' | 'reception' | 'destination';
  image: string;
  caption: string;
}

export interface RathoreProcessStep {
  step: number;
  title: string;
  description: string;
  image: string;
}

export interface RathoreStyle {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface RathoreFAQ {
  question: string;
  answer: string;
}

export interface RathoreBlog {
  id: string;
  title: string;
  slug: string;
  date: string;
  image: string;
  summary: string;
}

export const RATHORE_SERVICES: RathoreService[] = [
  {
    id: 'srv-1',
    title: 'Wedding Planning',
    slug: 'wedding-planning',
    shortDesc: 'Comprehensive budget planning, concept design, timelines, and day-of orchestration.',
    fullDesc: 'We take care of the initial concept and budget planning to on-the-day coordination. Whether your guest list is 30 or more than 1,500, Rathore Weddings ensures every moment runs flawlessly.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80',
    deliverables: ['Detailed Master Timeline Creation', '360° Budget Tracking & Cost Optimization', 'Escorted Site Inspections', 'On-Site Production Directors']
  },
  {
    id: 'srv-2',
    title: 'Venue Selection',
    slug: 'venue-selection',
    shortDesc: 'Strong relationships with 50+ prestigious 5-star hotels, palaces, and beach resorts.',
    fullDesc: 'We negotiate the best institutional rates and room blocks with top luxury hospitality chains including Oberoi, ITC, Taj, and Leela so our couples get maximum value for their investment.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80',
    deliverables: ['Palace & Heritage Haveli Audits', 'Zero-Brokerage Venue Contracts', 'Group Room Block Negotiating', 'Banquet Capacity & Curfew Licensing']
  },
  {
    id: 'srv-3',
    title: 'Decor & Designing',
    slug: 'decor-designing',
    shortDesc: 'Bespoke themes: Antique, Rustic, Vintage, Royal Rajputana, and Seaside Luxury.',
    fullDesc: 'From intimate floral installations to grand glass-mandaps and concert-style amphitheaters, our in-house decor designers transform blank lawns into living fairytales.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop&q=80',
    deliverables: ['3D Spatial Layout Renders', 'Custom Trussing & Crystal Chandeliers', 'Imported Floral Mandap Architectures', 'Thematic Photo Booths & Table Settings']
  },
  {
    id: 'srv-4',
    title: 'Vendor Management',
    slug: 'vendor-management',
    shortDesc: 'Curating, vetting, and managing top tier photographers, caterers, and artists.',
    fullDesc: 'We coordinate with reliable, tested wedding partners, ensuring zero miscommunication, strict delivery timelines, and pristine execution for every ceremonial requirement.',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&auto=format&fit=crop&q=80',
    deliverables: ['Vendor Contract Due Diligence', 'Deliverable & Payment Milestones', 'Technical Rider Coordination', 'Backup Vendor Contingencies']
  },
  {
    id: 'srv-5',
    title: 'Ritual Management',
    slug: 'ritual-management',
    shortDesc: 'Expert guidance for authentic Vedic, Anand Karaj, Bengali, South Indian, and multi-cultural ceremonies.',
    fullDesc: 'Our ritual specialists curate learned pandits, traditional samagri, customized puja setups, and cultural guides ensuring ancient rituals are celebrated with pure reverence.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&auto=format&fit=crop&q=80',
    deliverables: ['Learned Vedic Pandits & Granthi Ji', 'Bespoke Puja Samagri Hampers', 'Havan Kund Fire Safety Protocols', 'Multilingual Ritual Narration for Guests']
  },
  {
    id: 'srv-6',
    title: 'Entertainment & Artist',
    slug: 'entertainment',
    shortDesc: 'A-list Bollywood singers, live Sufi bands, celebrity DJs, and thematic choreographers.',
    fullDesc: 'We curate entertainment that elevates your wedding ambiance and keeps guests enthralled until dawn with concert-level sound, light choreography, and stage effects.',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800&auto=format&fit=crop&q=80',
    deliverables: ['Bollywood & Indie Artist Procurement', 'Live Symphony & Sufi Ensembles', 'Sangeet Choreography Camps', 'Cold Pyro & Fog Special Effects']
  },
  {
    id: 'srv-7',
    title: 'Trousseau, Gifting & Shopping',
    slug: 'trousseau-gifting',
    shortDesc: 'Designer trousseau packing, personalized luxury hampers, and curated shopping tours.',
    fullDesc: 'We curate bespoke favors, handcrafted packaging, bridal shopping itineraries in Chandni Chowk, Shahpur Jat, and DLF Emporio, and international shipment handling.',
    image: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?w=800&auto=format&fit=crop&q=80',
    deliverables: ['Designer Trousseau Trays & Ribbons', 'Artisanal Return Gift Hampers', 'Bridal Personal Stylist Accompaniment', 'Customized Fragrance & Sweet Boxes']
  },
  {
    id: 'srv-8',
    title: 'Hospitality & Logistics',
    slug: 'hospitality-logistic',
    shortDesc: 'Airport VIP desks, luxury fleet transfers, seamless room check-ins, and 24x7 helpdesks.',
    fullDesc: 'From the moment guests touch down until their final departure, our uniform concierges handle luggage tags, personalized room keys, and round-the-clock transport with warmth.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80',
    deliverables: ['Airport Greeting & Luggage Chaperones', 'Fleet Coordination (Mercedes, Innova, Coaches)', 'Digital Room Allocation Systems', '24x7 In-Hotel Helpdesk Concierge']
  },
  {
    id: 'srv-9',
    title: 'Food and Beverage',
    slug: 'food-beverages',
    shortDesc: 'Michelin-grade multi-cuisine menus, live culinary theaters, and molecular mocktail bars.',
    fullDesc: 'We collaborate with renowned culinary masters to craft unforgettable gastronomic journeys featuring regional Indian specialties, gourmet international stations, and midnight snacks.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&auto=format&fit=crop&q=80',
    deliverables: ['Curated Food Tasting Sessions', 'Interactive Live Food Theaters', 'Master Mixologists & Custom Cocktail Menus', 'Late-Night Sangeet Munchies Counters']
  },
  {
    id: 'srv-10',
    title: 'Photography & Videography',
    slug: 'wedding-photography-videography',
    shortDesc: 'Connecting you with India’s foremost candid cinematographers and editorial photographers.',
    fullDesc: 'We capture every raw emotion, tears of joy, and electrifying dance moves in 4K cinematic films and heirloom wedding coffee table albums that last for generations.',
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&auto=format&fit=crop&q=80',
    deliverables: ['Cinematic Teaser & Feature Film (4K)', 'Drone Aerial Videography', 'Same-Day Edit Reels for Instagram', 'Handcrafted Fine Art Wedding Albums']
  },
  {
    id: 'srv-11',
    title: 'Makeup Artists',
    slug: 'make-up-artist',
    shortDesc: 'Elite celebrity bridal makeup artists, hair stylists, and grooming for the family.',
    fullDesc: 'We schedule makeup trials, look consultations for every ceremony, and manage vanity suites so the bride and groom radiate effortless elegance throughout the festivities.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&auto=format&fit=crop&q=80',
    deliverables: ['HD & Airbrush Bridal Makeup Trials', 'Signature Draping & Hair Styling', 'Bridal Party & Family Glam Squads', 'On-Call Touch-Up Artists for Varmala']
  },
  {
    id: 'srv-12',
    title: 'Wedding Stationery',
    slug: 'wedding-stationary',
    shortDesc: 'Custom wax-sealed invitations, interactive wedding apps, and overnight wedding newspapers.',
    fullDesc: 'Make a striking first impression with custom gold-foiled stationery, itinerary scrolls, luggage tags, and our famous overnight wedding morning newspaper!',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80',
    deliverables: ['Custom Box Invitations & Wax Seals', 'Personalized Wedding Morning Newspaper', 'Digital Interactive RSVP Website & App', 'Gold-Embossed Keycard Sleeves & Menus']
  }
];

export const RATHORE_FLIP_SERVICES: RathoreFlipService[] = [
  {
    id: 'flip-1',
    title: 'Wedding Planning',
    frontImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80',
    description: 'We are considered one of the best wedding planners in Delhi who take care of the initial concept and budget planning to on-the-day coordination. Whether your guest list is 30 or more than 1,500, Rathore Weddings ensures every moment runs flawlessly.'
  },
  {
    id: 'flip-2',
    title: 'Venue Selection',
    frontImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&auto=format&fit=crop&q=80',
    description: 'Rathore Weddings has strong partnerships with more than 50 prestigious wedding venues across India. As a leading wedding planner in Delhi, we negotiate the best rates so our clients get maximum value for their budget.'
  },
  {
    id: 'flip-3',
    title: 'Luxury Wedding Decor',
    frontImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&auto=format&fit=crop&q=80',
    description: 'Our team creates premium and personalized setups. We offer Antique, Rustic, Vintage, Beach, and Royal themes. From delicate floral installations to grand stage arrangements, every element is crafted to perfection.'
  },
  {
    id: 'flip-4',
    title: 'Destination Wedding Planning',
    frontImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&auto=format&fit=crop&q=80',
    description: 'Whether you desire a destination wedding in India or abroad, our team manages venue scouting, guest travel, accommodation blocks, and local vendor coordination in Goa, Jaipur, Udaipur, Dubai, and Jim Corbett.'
  },
  {
    id: 'flip-5',
    title: 'Catering & Food Management',
    frontImage: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&auto=format&fit=crop&q=80',
    description: 'You will love our catering and culinary management. We work with the country’s finest master chefs to curate multi-cuisine menus, live interactive counters, and fine-dining banqueting that delight every guest.'
  },
  {
    id: 'flip-6',
    title: 'Entertainment & Artist Management',
    frontImage: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&auto=format&fit=crop&q=80',
    description: 'Rathore Weddings curates entertainment that elevates your wedding ambiance and keeps everyone dancing through the night with Bollywood performers, live Sufi bands, classical maestros, and celebrity DJs.'
  },
  {
    id: 'flip-7',
    title: 'Photography & Videography',
    frontImage: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&auto=format&fit=crop&q=80',
    description: 'As a leading luxury wedding planner, we connect you with Delhi’s most reputable photographers and cinematographers to catch every tender emotion. We ensure your memories last a lifetime in ravishing detail.'
  },
  {
    id: 'flip-8',
    title: 'Makeup Artists & Trousseau',
    frontImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&auto=format&fit=crop&q=80',
    description: 'We bring you the best network of celebrity bridal makeup artists in Delhi for a stunning bridal glow. Our team also provides bespoke gifting assistance, trousseau packing, and personalized shopping support.'
  },
  {
    id: 'flip-9',
    title: 'Wedding Stationery',
    frontImage: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop&q=80',
    description: 'Make a striking first impression with customized invitations, place cards, embossed menus, and personalized wedding morning newspapers that tell your unique love story.'
  },
  {
    id: 'flip-10',
    title: 'Guest & Hospitality Management',
    frontImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=80',
    description: 'Rathore Weddings is renowned for its white-glove hospitality. From airport arrivals to room allocations, check-ins, and late-night guest needs, we ensure every attendee feels celebrated and comfortable.'
  }
];

export const RATHORE_FEATURED_WEDDINGS: RathoreFeaturedWedding[] = [
  {
    id: 'fw-1',
    couple: 'Prateek & Tushika',
    venue: 'ITC Grand Bharat',
    location: 'Gurugram, NCR',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80',
    story: 'A royal palatial celebration with a 1,000-guest sangeet amphitheater and torchlit varmala across royal reflection pools.',
    highlight: 'Palatial Glass Mandap'
  },
  {
    id: 'fw-2',
    couple: 'Naman & Kitika',
    venue: 'Fairmont Jaipur',
    location: 'Jaipur, Rajasthan',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80',
    story: 'An imperial Rajputana extravaganza with royal elephant salutes, sufi dervish performances, and 100,000 marigold garlands.',
    highlight: 'Heritage Rajputana Theme'
  },
  {
    id: 'fw-3',
    couple: 'Taru & Rahul',
    venue: 'The Oberoi Amarvilas',
    location: 'Agra',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop&q=80',
    story: 'Sunset vows framed directly by the silhouette of the Taj Mahal, followed by a champagne banquet under Swarovski crystal chandeliers.',
    highlight: 'Taj Mahal Sunset Mandap'
  },
  {
    id: 'fw-4',
    couple: 'Akshita & Krushna',
    venue: 'W Goa Beach Resort',
    location: 'Vagator, Goa',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80',
    story: 'A three-day coastal festival featuring a neon sundowner carnival, bohemian floral arches, and an oceanfront pheras mandap.',
    highlight: 'Seaside Sunset Pheras'
  },
  {
    id: 'fw-5',
    couple: 'Raghav & Apoorva',
    venue: 'The Leela Palace',
    location: 'New Delhi',
    image: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?w=800&auto=format&fit=crop&q=80',
    story: 'Timeless high-society luxury wedding attended by corporate dignitaries, featuring live culinary masters from Jamavar.',
    highlight: 'Opulent Grand Ballroom'
  },
  {
    id: 'fw-6',
    couple: 'Vaibhav & Shirley',
    venue: 'JW Marriott Mussoorie',
    location: 'Mussoorie, Uttarakhand',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&auto=format&fit=crop&q=80',
    story: 'Intimate Himalayan mountain celebration surrounded by pine trees, mist, bonfire acoustic melodies, and bespoke shawls for guests.',
    highlight: 'Misty Pine Grove Mandap'
  }
];

export const RATHORE_TESTIMONIALS: RathoreTestimonial[] = [
  {
    id: 't-1',
    name: 'Anuj Vadehra',
    role: 'Groom',
    wedding: 'Anuj weds Sonali',
    quote: "The arrangements done by Rathore Weddings were excellent. The team is amazing. All of our guests enjoyed thoroughly in all the events. Starting from hospitality, decorations, arrangements to the entire management of the events, we had no complaints. My guests from the corporate sector appreciated the management and it was a one-of-a-kind event for them. They made the entire event flawless and memorable. I'm really very happy.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 't-2',
    name: 'Aastha Gogia',
    role: 'Bride Sister',
    wedding: 'Chandani weds Manuh',
    quote: "Words will fall short in describing how grateful I am to each & every member of the Rathore team for doing such an incredible job at my dream wedding in Ludhiana. The vision, the planning, and the execution was spot on. They understand your personal inclination real quick and with immense patience. They amazed us with the 'WOW' factor at every event!",
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 't-3',
    name: 'Chaahat Kohli',
    role: 'Bride',
    wedding: 'Chaahat weds Manjeev',
    quote: "What makes a special day more special is the decorations. So we got in touch with Rathore Weddings and they planned all the decor. Undoubtedly, this team did the best work one can wish for! They added so much color and beauty to the entire venue. Everything was drop-dead gorgeous!",
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 't-4',
    name: 'Megha Bansal',
    role: 'Bride',
    wedding: 'Megha weds Jitender',
    quote: "Choosing Rathore Weddings as my planner was the best decision ever. They will become your family. They are worth every single penny. My family thoroughly enjoyed the wedding just because they took all our tensions and headaches away!",
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 't-5',
    name: 'Sneh & Jiten',
    role: 'Bride & Groom',
    wedding: 'Sneh weds Jiten',
    quote: "The fact that we could manage this wedding at ITC Grand Bharat in just 10 days was all because of the Rathore Weddings team. We were able to enjoy our wedding to the fullest without any lapse. Everyone in the team is very responsible and reliable.",
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 't-6',
    name: 'Poonam Kapoor',
    role: "Bride's Mother",
    wedding: 'Tanvi weds Saurabh',
    quote: "I’m thankful to you guys for arranging such a flawless event. Your cooperation was well put up. You guys are so welcoming and understanding that all of you were like my extended family. All of you became like daughters to me by the end of the wedding.",
    image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 't-7',
    name: 'Arjun Mehta',
    role: 'Groom Uncle',
    wedding: 'Ashish weds Alicia',
    quote: "Rathore Weddings organized my nephew's wedding at the Oberoi Gurgaon. They were very professional, organized, executed plans seamlessly, and assisted us with all vendors as per instructions. Thank you for making it magical!",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 't-8',
    name: 'Ashwani Kumar',
    role: 'Family Guest',
    wedding: 'Tanvi weds Saurabh',
    quote: "The kind of arrangements Rathore Weddings did was out of the box. When we woke up in the morning we got a newspaper that had all the highlights and candid moments of the event from the previous night! I was awestruck how they could make such a beautiful thing overnight!",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80'
  }
];

export const RATHORE_PORTFOLIO: RathorePortfolioItem[] = [
  {
    id: 'port-1',
    title: 'The Celestial Glass Mandap',
    category: 'mandap',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80',
    caption: 'Water-stage mandap with 10,000 hanging Dutch hydrangeas and crystal chandeliers.'
  },
  {
    id: 'port-2',
    title: 'Royal Rampart Varmala',
    category: 'varmala',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80',
    caption: 'Majestic couple varmala exchange on heritage Mewar palace battlements.'
  },
  {
    id: 'port-3',
    title: 'Fairytale Twilight Sangeet',
    category: 'decor',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop&q=80',
    caption: 'Curved LED backdrop, fairy-light canopy, and interactive musical amphitheater.'
  },
  {
    id: 'port-4',
    title: 'Sunset Beach Pheras',
    category: 'destination',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80',
    caption: 'Golden sand beachside mandap overlooking the Arabian Sea in North Goa.'
  },
  {
    id: 'port-5',
    title: 'Imperial Grand Reception',
    category: 'reception',
    image: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?w=800&auto=format&fit=crop&q=80',
    caption: 'Regal mirrored banquet tables with French candelabras and custom floral runners.'
  },
  {
    id: 'port-6',
    title: 'Mehendi Carnival Extravaganza',
    category: 'decor',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&auto=format&fit=crop&q=80',
    caption: 'Vibrant yellow and fuchsia day carnival with Rajasthani puppet arches and brass swings.'
  },
  {
    id: 'port-7',
    title: 'Floral Floral Lotus Tunnel',
    category: 'decor',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80',
    caption: 'Illuminated 60-foot guest welcoming tunnel draped in jasmine and tuberoses.'
  },
  {
    id: 'port-8',
    title: 'Himalayan Mountain Vows',
    category: 'destination',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&auto=format&fit=crop&q=80',
    caption: 'Intimate cliffside vows surrounded by misty pine forests in Mussoorie.'
  }
];

export const RATHORE_PROCESS: RathoreProcessStep[] = [
  {
    step: 1,
    title: 'Consultation',
    description: 'Rathore Weddings begins by thoroughly understanding your vision, budget, traditions, and preferences to build a bespoke concept reflecting your unique story.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&auto=format&fit=crop&q=80'
  },
  {
    step: 2,
    title: 'Budget Planning',
    description: 'We prepare an itemized financial roadmap ensuring strategic resource allocation, eliminating hidden costs and maximizing elegance within your desired spending.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=500&auto=format&fit=crop&q=80'
  },
  {
    step: 3,
    title: 'Venue Selection',
    description: 'We guide you across 50+ prestigious palaces, heritage havelis, and luxury resorts across Delhi, Rajasthan, and Goa, negotiating institutional tariffs.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&auto=format&fit=crop&q=80'
  },
  {
    step: 4,
    title: 'Theme & Decor',
    description: 'Our in-house creative directors design 3D spatial renders and moodboards, curating florals, mood lighting, and bespoke mandap architecture.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&auto=format&fit=crop&q=80'
  },
  {
    step: 5,
    title: 'Vendor Management',
    description: 'From celebrity master caterers and photographers to choreographers and makeup artists, we vet and coordinate all trusted stakeholders.',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=500&auto=format&fit=crop&q=80'
  },
  {
    step: 6,
    title: 'Guest Management',
    description: 'We handle airport VIP escorts, luxury fleets, digital RSVPs, room allocations, welcome hampers, and 24x7 in-hotel concierge desks.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop&q=80'
  },
  {
    step: 7,
    title: 'Event Execution',
    description: 'Our experienced on-site production teams run each function with clockwork precision, following detailed cue sheets and rehearsal protocols.',
    image: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?w=500&auto=format&fit=crop&q=80'
  },
  {
    step: 8,
    title: 'Wedding Coordination',
    description: 'On your wedding day, our directors oversee every minute detail, handling last-minute requirements so you and your family enjoy stress-free celebration.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=500&auto=format&fit=crop&q=80'
  }
];

export const RATHORE_STYLES: RathoreStyle[] = [
  {
    id: 'style-1',
    title: 'Luxury Weddings',
    description: 'World-class decor, lavish architectural settings, celebrity entertainment, and Michelin-grade dining at leading 5-star properties including Oberoi, ITC, Leela, and Taj.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'style-2',
    title: 'Intimate & Small Weddings',
    description: 'A smaller guest list does not mean smaller magic. We deliver high personalization, heartfelt details, and bespoke hospitality for groups of 30 to 100 cherished guests.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'style-3',
    title: 'Destination Weddings',
    description: 'From historic Rajputana forts in Jaipur and Udaipur to sunset beaches in Goa and tropical coves in Thailand and Dubai, we craft once-in-a-lifetime getaways.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'style-4',
    title: 'Multi-Cultural Weddings',
    description: 'Orchestrating harmonious weddings that blend Punjabi, Hindu, Bengali, South Indian, and Christian customs into seamless multi-day celebrations.',
    image: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'style-5',
    title: 'Corporate & Social Events',
    description: 'Beyond weddings, we design milestone anniversaries, sangeet spectacles, and elite corporate gala celebrations with equal passion and technical prowess.',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800&auto=format&fit=crop&q=80'
  }
];

export const RATHORE_FAQS: RathoreFAQ[] = [
  {
    question: 'How early should I book a wedding planner in Delhi?',
    answer: 'We recommend booking your wedding planner at least 6 to 12 months before your target wedding date. The earlier you book, the greater the choice of premier luxury venues and high-demand master vendors.'
  },
  {
    question: 'Can Rathore Weddings manage a wedding in 10 days or less?',
    answer: 'Yes! Our team has successfully planned and executed full destination weddings in as little as 10 days. Our 15+ years of verified palace relationships and immediate inventory access make rapid-turnaround luxury weddings completely seamless.'
  },
  {
    question: 'Does your company handle all vendors, or do I need to find them separately?',
    answer: 'We are a full-service wedding planning company. Rathore Weddings manages decor, venue contracting, photography, catering, entertainment, hair & makeup, logistics, and hospitality under one unified umbrella.'
  },
  {
    question: 'How much does a luxury wedding planner cost in Delhi?',
    answer: 'Wedding planning fees in Delhi typically range based on event scale, guest count, and destination complexity. At Rathore Weddings, we provide transparent fixed-fee or percentage models tailored to every budget with zero hidden vendor markups.'
  },
  {
    question: 'What types of weddings does Rathore Weddings specialise in?',
    answer: 'We specialise in destination weddings, royal palace weddings, multi-cultural fusions, themed celebrations (Antique, Rustic, Vintage, Seaside), and curated intimate ceremonies across India and overseas.'
  }
];

export const RATHORE_BLOGS: RathoreBlog[] = [
  {
    id: 'b-1',
    title: 'Best Wedding Planners in Haryana: Palaces, Farmhouses & Grand Venues',
    slug: 'wedding-planner-in-haryana',
    date: 'September 28, 2026',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80',
    summary: 'A curated guide to selecting royal farmhouses and luxury golf resorts across Gurugram, Manesar, and Karnal.'
  },
  {
    id: 'b-2',
    title: 'Best Wedding Planners in Pune: Heritage Forts & Vineyard Celebrations',
    slug: 'wedding-planners-in-pune',
    date: 'September 7, 2026',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&auto=format&fit=crop&q=80',
    summary: 'Explore Sahyadri hill resorts, historical Maratha forts, and vineyard sangeet venues for destination couples.'
  },
  {
    id: 'b-3',
    title: 'Best Wedding Planners in Varanasi: Sacred Ghats & Regal Heritage',
    slug: 'wedding-planners-in-varanasi',
    date: 'September 7, 2026',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&auto=format&fit=crop&q=80',
    summary: 'How to plan spiritual yet lavish Ganga ghat weddings, royal boat baraats, and traditional Banarasi silk setups.'
  }
];

export const RATHORE_CLIENT_LOGOS = [
  { name: 'Taj Hotels & Palaces', logo: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=200&auto=format&fit=crop&q=80' },
  { name: 'The Oberoi Group', logo: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&auto=format&fit=crop&q=80' },
  { name: 'ITC Hotels & Luxury Collection', logo: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=200&auto=format&fit=crop&q=80' },
  { name: 'The Leela Palaces', logo: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?w=200&auto=format&fit=crop&q=80' },
  { name: 'JW Marriott', logo: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=200&auto=format&fit=crop&q=80' },
  { name: 'WedMeGood Gold Partner', logo: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=200&auto=format&fit=crop&q=80' }
];
