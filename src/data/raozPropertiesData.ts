import { BusinessWebsite } from '../types';

export interface RaozProperty {
  id: string;
  title: string;
  slug: string;
  propertyType: 'Builder Floor' | 'Flats' | 'Residential Plots' | 'Office Space' | 'SCO Plot' | 'Shop' | 'Farmhouse Land' | 'Apartment / Flat';
  category: 'Residential' | 'Commercial' | 'Plots' | 'Farmhouse';
  location: string;
  locality: string;
  city: 'Faridabad' | 'Delhi NCR' | 'Ballabhgarh' | 'Kosi Kalan' | 'Vrindavan';
  price: string;
  priceValue: number;
  area: string;
  bedrooms?: number;
  bathrooms?: number;
  status: 'Ready to Move' | 'Under Construction' | 'Immediate Registry' | 'Just Listed';
  isFeatured: boolean;
  featuredImage: string;
  gallery: string[];
  description: string;
  features: string[];
  emiAvailable: boolean;
  emiDetails?: string;
  address: string;
  metaTitle: string;
  metaDesc: string;
}

export interface RaozTestimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
  comment: string;
  propertyPurchased: string;
}

export interface RaozBlog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  readTime: string;
  content: string[];
  category: string;
}

export interface RaozProject {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  location: string;
  startingPrice: string;
  plotSizes: string;
  highlights: string[];
  image: string;
  description: string;
}

export const RAOZ_CONTACT = {
  name: 'RAOZ PROPERTIES',
  tagline: 'Plots / Property in Delhi NCR | Verified Real Estate',
  phone: '+91 96509 27984',
  phoneAlt: '+91 99999 99999',
  phoneRaw: '919650927984',
  email: 'info@raozproperties.com',
  address: 'Commercial Hub, Neharpar, Greater Faridabad, Haryana 121002 & Delhi NCR',
  branchOffices: [
    'Main Office: Neharpar, Greater Faridabad, Haryana 121002',
    'Ballabhgarh Office: Near Sikri Industrial Corridor, Mathura Road, Faridabad',
    'Kosi Kalan Branch: SSDR Township, NH-19, Kosi Kalan, UP'
  ],
  hours: 'Monday - Sunday: 9:00 AM - 7:30 PM (Free Site Visits 7 Days a Week)',
  social: {
    instagram: 'https://instagram.com/raozproperties',
    youtube: 'https://youtube.com/@raozproperties',
    facebook: 'https://facebook.com/raozproperties'
  }
};

export const RAOZ_KEY_PILLARS = [
  {
    title: 'Verified & Legal Properties',
    description: 'We provide verified, legally approved properties for a safe, secure, and hassle-free ownership experience with clear land title deeds.',
    icon: 'shield-check'
  },
  {
    title: 'Best Dealers in Delhi/NCR',
    description: 'Get the best property deals in Delhi/NCR and Faridabad with verified listings, direct builder terms, and complete end-to-end support.',
    icon: 'award'
  },
  {
    title: 'Trusted by 700+ Clients',
    description: 'Trusted by over 700+ happy clients and families for verified, affordable, and transparent property transactions across NCR.',
    icon: 'users'
  },
  {
    title: 'Easy Interest-Free EMIs',
    description: 'Own your residential or commercial plot with convenient interest-free EMIs. Easy, flexible payments with zero extra cost guaranteed.',
    icon: 'percent'
  }
];

export const RAOZ_STATS = [
  { value: '700+', label: 'Happy Customers', description: 'Satisfied buyers and investors across Delhi NCR' },
  { value: '150+', label: 'Projects Done', description: 'Delivered plotted townships, floors and commercial units' },
  { value: '500+', label: 'Families Settled', description: 'Living happily in our verified homes and communities' },
  { value: '12+', label: 'Years Experience', description: 'Trusted real estate advisory and land development' }
];

export const RAOZ_PROPERTIES: RaozProperty[] = [
  {
    id: 'prop-raoz-1',
    title: 'Residential Property for Sale in Faridabad',
    slug: 'residential-property-for-sale-in-faridabad',
    propertyType: 'Builder Floor',
    category: 'Residential',
    location: 'Neharpar, Greater Faridabad, Haryana',
    locality: 'Neharpar',
    city: 'Faridabad',
    price: '₹ 1.25 Cr',
    priceValue: 12500000,
    area: '1,850 sq.ft.',
    bedrooms: 3,
    bathrooms: 3,
    status: 'Ready to Move',
    isFeatured: true,
    featuredImage: '/assets/raozproperties/builder-floor-1.webp',
    gallery: [
      '/assets/raozproperties/builder-floor-1.webp',
      '/assets/raozproperties/hero-banner.jpg',
      '/assets/raozproperties/flats-faridabad.webp'
    ],
    description: 'Spacious 3 BHK luxury builder floor located in the prime sector of Neharpar, Greater Faridabad. Designed with modern architecture, premium Italian marble flooring, modular kitchen with chimney, wide balconies, dedicated covered car parking, and 24/7 security. Proximity to renowned schools, hospitals, and Metro connectivity.',
    features: [
      '100% Freehold Property with Registry',
      'Bank Loan approved up to 80% with leading banks',
      'Spacious 1,850 sq.ft. carpet layout',
      'Modular kitchen with German hardware',
      'Wide 40-foot front road with green plantation'
    ],
    emiAvailable: true,
    emiDetails: 'EMI starting from ₹ 89,500/month with bank loan assistance',
    address: 'Sector 82 / Neharpar Corridor, Faridabad, Haryana 121002',
    metaTitle: 'Residential Property for Sale in Faridabad | RAOZ PROPERTIES',
    metaDesc: 'Verified 3 BHK residential builder floor in Neharpar Faridabad with modern amenities, loan facility, and clear title registry.'
  },
  {
    id: 'prop-raoz-2',
    title: 'Commercial Property for Sale in Faridabad',
    slug: 'commercial-property-for-sale-in-faridabad',
    propertyType: 'SCO Plot',
    category: 'Commercial',
    location: 'Neharpar Commercial Hub, Faridabad, Haryana',
    locality: 'Neharpar Commercial Belt',
    city: 'Faridabad',
    price: '₹ 50.00 Lakhs',
    priceValue: 5000000,
    area: '500 sq.ft.',
    bathrooms: 1,
    status: 'Just Listed',
    isFeatured: true,
    featuredImage: '/assets/raozproperties/commercial-faridabad.webp',
    gallery: [
      '/assets/raozproperties/commercial-faridabad.webp',
      '/assets/raozproperties/hero-banner.jpg'
    ],
    description: 'High-ROI commercial retail shop / SCO office space in Faridabad’s booming Neharpar commercial zone. Exceptional frontage on the main arterial road, guaranteed footfall from surrounding high-density residential towers, and tremendous lease rental yield potential of 9% to 12% annually.',
    features: [
      'High footfall commercial high-street location',
      'Ideal for retail stores, branded clinics, and corporate offices',
      'Ample surface & multi-level visitor parking',
      '100% power backup and 24/7 CCTV surveillance',
      'Immediate possession with clear commercial title'
    ],
    emiAvailable: true,
    emiDetails: 'Flexible payment plan with attractive rental return options',
    address: 'Commercial Sector Avenue, Neharpar, Faridabad, Haryana',
    metaTitle: 'Commercial Property for Sale in Faridabad | RAOZ PROPERTIES',
    metaDesc: 'Commercial shops, SCO plots, and retail spaces in Greater Faridabad offering high rental yield and fast capital appreciation.'
  },
  {
    id: 'prop-raoz-3',
    title: 'Ready to Move Flats in Faridabad',
    slug: 'ready-to-move-flats-faridabad',
    propertyType: 'Apartment / Flat',
    category: 'Residential',
    location: 'Neharpar, Faridabad, Haryana',
    locality: 'Neharpar Prime Sector',
    city: 'Faridabad',
    price: '₹ 75.00 Lakhs',
    priceValue: 7500000,
    area: '1,450 sq.ft.',
    bedrooms: 4,
    bathrooms: 3,
    status: 'Ready to Move',
    isFeatured: true,
    featuredImage: '/assets/raozproperties/flats-faridabad.webp',
    gallery: [
      '/assets/raozproperties/flats-faridabad.webp',
      '/assets/raozproperties/hero-banner.jpg'
    ],
    description: 'Ready-to-move-in 4 BHK apartments in Faridabad are exactly what you need if you want instant occupancy without construction delays or GST liabilities. Gated multi-storey residential community featuring clubhouse, swimming pool, landscaped parks, children play zones, and dedicated parking.',
    features: [
      'Zero GST liability (Ready to Move with Occupation Certificate)',
      'Spacious 4 Bedrooms with 3 contemporary bathrooms',
      'High-speed automatic elevators with power backup',
      'Clubhouse with gymnasium and indoor games',
      'Near Delhi-Mumbai Expressway link & Bata Chowk Metro'
    ],
    emiAvailable: true,
    emiDetails: 'Approved by SBI, HDFC & ICICI with competitive home loan rates',
    address: 'Sector 75-76 Corridor, Neharpar, Faridabad, Haryana',
    metaTitle: 'Ready to Move Flats in Faridabad | RAOZ PROPERTIES',
    metaDesc: 'Buy ready to move 3 & 4 BHK luxury flats in Greater Faridabad with clubhouse, security, and immediate handover.'
  },
  {
    id: 'prop-raoz-4',
    title: '3/4 BHK Builder Floor in Faridabad',
    slug: '3-4-bhk-builder-floor-in-faridabad',
    propertyType: 'Builder Floor',
    category: 'Residential',
    location: 'Faridabad, Neharpar, Haryana',
    locality: 'Sector 7 / Sector 82',
    city: 'Faridabad',
    price: '₹ 1.50 Cr',
    priceValue: 15000000,
    area: '1,850 sq.ft.',
    bedrooms: 4,
    bathrooms: 3,
    status: 'Ready to Move',
    isFeatured: true,
    featuredImage: '/assets/raozproperties/builder-floor-1.webp',
    gallery: [
      '/assets/raozproperties/builder-floor-1.webp',
      '/assets/raozproperties/hero-banner.jpg'
    ],
    description: 'Searching for the perfect 3/4 BHK Builder Floor in Faridabad? Discover ultimate independence with stilt + 4 floor architectural layout, private elevator access directly to your floor, individual terrace rights, separate water storage, and branded electrical fittings.',
    features: [
      'Private stilt parking with EV charging provision',
      'Individual terrace rights with gazebo area',
      'Designer false ceilings with warm LED ambient lighting',
      'Complete legal scrutiny with 30-year chain of title',
      'Peaceful wide-avenue residential neighborhood'
    ],
    emiAvailable: true,
    emiDetails: 'Up to 80% financing available with transparent processing',
    address: 'Sector 7 / Neharpar Prime Enclave, Faridabad, Haryana',
    metaTitle: '3/4 BHK Builder Floor in Faridabad | RAOZ PROPERTIES',
    metaDesc: 'Explore premium independent builder floors in Faridabad with private lift, stilt parking, and freehold registry.'
  },
  {
    id: 'prop-raoz-5',
    title: 'Green Valley Sikri-1 Residential Plots',
    slug: 'residential-plots-in-sikri-ballabhgarh',
    propertyType: 'Residential Plots',
    category: 'Plots',
    location: 'Sikri, Ballabhgarh, Mathura Road, Faridabad',
    locality: 'Sikri Corridor',
    city: 'Ballabhgarh',
    price: '₹ 16,000 / sq.yd',
    priceValue: 1600000,
    area: '60 - 250 sq.yards',
    status: 'Immediate Registry',
    isFeatured: true,
    featuredImage: '/assets/raozproperties/plot-sikri-1.webp',
    gallery: [
      '/assets/raozproperties/plot-sikri-1.webp',
      '/assets/raozproperties/hero-banner.jpg'
    ],
    description: 'Green Valley Sikri-1 offers high-value residential plots right on Mathura Road / Delhi-Agra Highway corridor in Sikri, Ballabhgarh. Clear title freehold land with immediate registry and mutation, sweet underground water, 30-foot wide internal concrete roads, electricity poles, and 100% boundary wall security.',
    features: [
      'Rate starting at just ₹ 16,000 per sq.yard',
      'Interest-free EMI option available (Pay in easy installments)',
      'Immediate registry and mutation in buyer’s name',
      'Gated plotted community with sweet groundwater',
      'Direct connectivity to Delhi-Mumbai Expressway junction'
    ],
    emiAvailable: true,
    emiDetails: 'Zero-Interest EMI Plan: 30% Down Payment & balance in 12-24 equal monthly installments!',
    address: 'Green Valley Sikri-1, Near Sikri Flyover, Mathura Road, Ballabhgarh, Faridabad',
    metaTitle: 'Residential Plots in Sikri Ballabhgarh @ ₹16,000/yd | RAOZ PROPERTIES',
    metaDesc: 'Freehold residential plots in Sikri Ballabhgarh with interest-free EMI, immediate registry, and rapid capital appreciation.'
  },
  {
    id: 'prop-raoz-6',
    title: 'SSDR Kosi-Kalan Highway Plots',
    slug: 'premium-plots-in-kosikalan',
    propertyType: 'Residential Plots',
    category: 'Plots',
    location: 'NH-19 / Delhi-Agra Highway, Kosi Kalan',
    locality: 'Kosi Kalan Highway Belt',
    city: 'Kosi Kalan',
    price: '₹ 12,000 / sq.yd',
    priceValue: 1200000,
    area: '80 - 500 sq.yards',
    status: 'Immediate Registry',
    isFeatured: true,
    featuredImage: '/assets/raozproperties/plot-sikri-1.webp',
    gallery: [
      '/assets/raozproperties/plot-sikri-1.webp',
      '/assets/raozproperties/hero-banner.jpg'
    ],
    description: 'SSDR Kosi-Kalan is an expansive gated plotted township strategically positioned on National Highway 19, just 30 minutes from Mathura and Vrindavan. Excellent investment for retirement homes, residential construction, and long-term capital preservation with zero risk.',
    features: [
      'Extremely affordable pricing at ₹ 12,000 per sq.yard',
      'Interest-free flexible installment scheme',
      'Wide commercial & residential entrance boulevard',
      'Streetlights, drainage, and security checkpoint ready',
      'Direct connectivity to upcoming Jewar International Airport link'
    ],
    emiAvailable: true,
    emiDetails: 'Pay 25% booking amount, balance in easy interest-free EMIs',
    address: 'SSDR Township, NH-19, Kosi Kalan, UP / Delhi NCR Corridor',
    metaTitle: 'Premium Plots in Kosikalan @ ₹12,000/yd | RAOZ PROPERTIES',
    metaDesc: 'Verified residential & commercial plots in Kosi Kalan near Mathura Vrindavan highway with easy EMI and clear registry.'
  },
  {
    id: 'prop-raoz-7',
    title: 'Farmhouse Land & Country Retreats in Faridabad',
    slug: 'farmhouse-land-in-faridabad',
    propertyType: 'Farmhouse Land',
    category: 'Farmhouse',
    location: 'Surajkund & Aravalli Foothills, Faridabad',
    locality: 'Aravalli Valley Belt',
    city: 'Faridabad',
    price: '₹ 1.80 Cr*',
    priceValue: 18000000,
    area: '1 Acre - 3 Acres',
    status: 'Ready to Move',
    isFeatured: false,
    featuredImage: '/assets/raozproperties/hero-banner.jpg',
    gallery: [
      '/assets/raozproperties/hero-banner.jpg',
      '/assets/raozproperties/plot-sikri-1.webp'
    ],
    description: 'Lush green gated agricultural farmhouses and second-home countryside retreats situated in the scenic Aravalli foothills of Faridabad. Features fertile organic soil, sweet aquifer water, private gated boundary, wide plantation lanes, and tranquility just 20 minutes from South Delhi.',
    features: [
      'Gated community with 24/7 security & caretaker support',
      'Clear registered agricultural freehold title',
      'High capital appreciation driven by eco-tourism demand',
      'Zero pollution green belt zone',
      'Electricity connection and borewell installed'
    ],
    emiAvailable: false,
    address: 'Aravalli Retreat Corridor, Faridabad, Haryana',
    metaTitle: 'Farmhouse Land in Faridabad | RAOZ PROPERTIES',
    metaDesc: 'Buy luxury farmhouse land in Faridabad with fertile soil, sweet water, and scenic mountain views near Delhi.'
  }
];

export const RAOZ_PROJECTS: RaozProject[] = [
  {
    id: 'proj-1',
    name: 'Green Valley Sikri-1',
    slug: 'plots-in-sikri-ballabhgarh',
    tagline: 'Best Plotted Community on Mathura Road Highway',
    location: 'Sikri, Ballabhgarh, Faridabad',
    startingPrice: '₹ 16,000 / sq.yd',
    plotSizes: '60, 100, 150 & 200 sq.yds',
    highlights: [
      'Interest-free EMIs up to 24 months',
      'Immediate registry and possession',
      'Sweet ground water with wide concrete roads',
      '10 minutes from Ballabhgarh Metro Station'
    ],
    image: '/assets/raozproperties/plot-sikri-1.webp',
    description: 'Green Valley Sikri-1 is our flagship residential plotted project along the bustling industrial and residential corridor of Mathura Road. Designed for families wanting to build their independent home with zero loan interest burdens.'
  },
  {
    id: 'proj-2',
    name: 'SSDR Kosi-Kalan Township',
    slug: 'property-dealers-in-kosikalan',
    tagline: 'Gated Residential Township on NH-19',
    location: 'Kosi Kalan, NH-19, Delhi-Agra Highway',
    startingPrice: '₹ 12,000 / sq.yd',
    plotSizes: '80, 120, 250 & 500 sq.yds',
    highlights: [
      'Affordable freehold plots with clear registry',
      'Direct highway frontage with wide approach avenues',
      'Rapidly developing corridor near Mathura & Vrindavan',
      'High growth investment opportunity'
    ],
    image: '/assets/raozproperties/hero-banner.jpg',
    description: 'SSDR Kosi-Kalan brings planned urban living to the sacred Braj region. Fully demarcated plots with underground cabling and lush green community parks.'
  },
  {
    id: 'proj-3',
    name: 'Faridabad Luxury Builder Floors Hub',
    slug: 'buy-flats-and-builder-floors-in-faridabad',
    tagline: 'Independent 3 & 4 BHK Stilt+4 Living',
    location: 'Neharpar & Sector 7, Faridabad',
    startingPrice: '₹ 1.25 Cr*',
    plotSizes: '1,850 - 2,250 sq.ft.',
    highlights: [
      'Private lift access to individual floor',
      'Terrace rights with separate water storage',
      'Stilt parking with automated entrance gate',
      '100% verified legal papers'
    ],
    image: '/assets/raozproperties/builder-floor-1.webp',
    description: 'Our luxury builder floor collection in Greater Faridabad combines privacy, spacious floor plans, and elite community living with zero shared maintenance hassles.'
  }
];

export const RAOZ_TESTIMONIALS: RaozTestimonial[] = [
  {
    id: 'test-1',
    name: 'Rajesh Sharma',
    role: 'Central Govt Employee',
    location: 'Ballabhgarh, Faridabad',
    avatar: '/assets/raozproperties/testimonial-1.webp',
    rating: 5,
    comment: 'Bought a residential plot in Sikri through RAOZ PROPERTIES. The interest-free EMI scheme allowed me to purchase the land without any bank interest burdens. Transparent dealing and immediate registry!',
    propertyPurchased: 'Green Valley Sikri-1 Plot (120 sq.yds)'
  },
  {
    id: 'test-2',
    name: 'Sunita Aggarwal',
    role: 'Educationist & Homeowner',
    location: 'Neharpar, Faridabad',
    avatar: '/assets/raozproperties/testimonial-2.webp',
    rating: 5,
    comment: 'Perfect experience with RAOZ PROPERTIES for our builder floor purchase. Got a 100% legally verified floor within my budget. Their staff accompanied us on multiple site visits patiently.',
    propertyPurchased: '3 BHK Builder Floor Sector 82'
  },
  {
    id: 'test-3',
    name: 'Vikram Chaudhary',
    role: 'Industrial Unit Owner',
    location: 'Mathura Road Corridor',
    avatar: '/assets/raozproperties/testimonial-4.webp',
    rating: 5,
    comment: 'Seamlessly completed my Kosi Kalan land investment. RAOZ PROPERTIES ensures zero hidden fees, accurate boundary demarcation, and swift mutation with local authorities.',
    propertyPurchased: 'SSDR Kosi-Kalan Highway Plot'
  },
  {
    id: 'test-4',
    name: 'Meenakshi Verma',
    role: 'IT Project Lead',
    location: 'Greater Faridabad',
    avatar: '/assets/raozproperties/testimonial-5.webp',
    rating: 5,
    comment: 'Found a ready-to-move apartment in Neharpar with RAOZ PROPERTIES. Honest guidance, immediate possession, and complete support with sub-registrar deed execution.',
    propertyPurchased: 'Ready to Move 4 BHK Flat'
  },
  {
    id: 'test-5',
    name: 'Deepak Yadav',
    role: 'Business Consultant',
    location: 'Delhi NCR',
    avatar: '/assets/raozproperties/testimonial-6.webp',
    rating: 5,
    comment: 'Found a luxury farmhouse retreat via RAOZ PROPERTIES. Outstanding commercial and residential property management services in Delhi NCR. Truly trustworthy experts.',
    propertyPurchased: 'Surajkund Valley Farmhouse'
  },
  {
    id: 'test-6',
    name: 'Anil Kumar',
    role: 'Retired Armed Forces',
    location: 'Faridabad',
    avatar: '/assets/raozproperties/testimonial-7.webp',
    rating: 5,
    comment: 'RAOZ PROPERTIES assisted me with commercial retail space in Faridabad. Genuine advice, quick paperwork, and excellent rental return prospects. 10/10 recommendation.',
    propertyPurchased: 'SCO Commercial Retail Shop'
  }
];

export const RAOZ_FAQS = [
  {
    question: 'What types of properties and services does RAOZ PROPERTIES offer?',
    answer: 'RAOZ PROPERTIES specializes in residential plots, independent builder floors, ready-to-move flats, commercial SCO shops, and luxury farmhouses across Greater Faridabad, Ballabhgarh, Sikri, Kosi Kalan, and Delhi NCR. We handle end-to-end legal title verification, chauffeured site visits, registry execution, and interest-free EMI schemes.'
  },
  {
    question: 'How does the interest-free EMI scheme work for plots?',
    answer: 'For our plotted projects such as Green Valley Sikri-1 and SSDR Kosi-Kalan, buyers can book their plot with a 25% to 30% initial down payment, and pay the remaining balance in 12 to 24 equal monthly installments with zero interest and zero processing fees. Physical possession and registry are initiated smoothly upon plan milestones.'
  },
  {
    question: 'Are all properties legally verified and eligible for bank loans?',
    answer: 'Yes, 100% of our residential builder floors and apartments are verified with a 30-year chain of title, sanctioned building approvals, and approved by leading nationalized and private banks (SBI, HDFC, ICICI, PNB) with home loans available up to 80% of property cost.'
  },
  {
    question: 'Do you provide free site visits for buyers?',
    answer: 'Absolutely! We provide free, chauffeur-accompanied site visits 7 days a week from anywhere in Delhi NCR. Our dedicated property executives will pick you up, showcase the site, explain boundary demarcation, and provide complete documentation walkthroughs.'
  },
  {
    question: 'Why is Greater Faridabad & Neharpar considered the best investment hub in NCR?',
    answer: 'With the direct connectivity of the Delhi-Mumbai Expressway, the 6-lane bypass road, FNG Expressway, upcoming Jewar Airport link, and operational Metro lines, Faridabad offers the highest value-to-appreciation ratio in Delhi NCR with significantly lower entry prices than Gurugram or Noida.'
  },
  {
    question: 'What documents are required to register a property with RAOZ PROPERTIES?',
    answer: 'Buyers need their Aadhaar card, PAN card, passport-sized photographs, and bank payment instruments. Our in-house legal team drafts the Agreement to Sell, manages e-Stamping, and schedules your sub-registrar biometric appointment seamlessly.'
  }
];

export const RAOZ_BLOGS: RaozBlog[] = [
  {
    id: 'blog-1',
    title: 'Differences between Residential And Commercial Property: Which is Better? (A Practical Guide)',
    slug: 'differences-between-residential-and-commercial-property',
    excerpt: 'Navigating the decision between residential stability and commercial rental returns. Learn how rental yields, capital growth, and tenant covenants differ across Delhi NCR.',
    date: 'March 2026',
    author: 'RAOZ PROPERTIES Research Desk',
    image: '/assets/raozproperties/commercial-faridabad.webp',
    readTime: '6 min read',
    category: 'Investment Strategy',
    content: [
      'When planning a real estate portfolio in Delhi NCR, choosing between residential homes and commercial assets is one of the most critical financial decisions.',
      'Commercial properties generally deliver higher rental yields of 8% to 11% compared to 2.5% to 4% for residential homes. However, residential properties offer lower vacancy risks and simpler bank financing.',
      'RAOZ PROPERTIES advises a balanced allocation: secure your primary residence with clear title builder floors first, then reinvest surplus liquidity into high-footfall SCO commercial plots.'
    ]
  },
  {
    id: 'blog-2',
    title: 'What is the Difference Between a Flat and an Apartment? (The Complete Guide)',
    slug: 'difference-between-flat-and-apartment',
    excerpt: 'Understanding architectural nomenclature, maintenance responsibilities, and resale dynamics between independent builder floors and society apartments in Faridabad.',
    date: 'February 2026',
    author: 'Pramod Rao, Senior Property Consultant',
    image: '/assets/raozproperties/flats-faridabad.webp',
    readTime: '5 min read',
    category: 'Buyer Guide',
    content: [
      'While the terms "flat" and "apartment" are frequently used interchangeably in India, builder floors offer low-density independent living with exclusive terrace rights and zero society maintenance overheads.',
      'Society apartments in high-rise towers provide extensive lifestyle clubhouses, swimming pools, and 3-tier security, making them popular with nuclear families.',
      'Explore both options at RAOZ PROPERTIES to see which fits your family lifestyle and monthly budget best.'
    ]
  },
  {
    id: 'blog-3',
    title: 'Residential vs Commercial Property Investment in India: Where Is the Highest ROI in 2026?',
    slug: 'residential-vs-commercial-highest-roi-2026',
    excerpt: 'An in-depth analysis of infrastructure tailwinds: Delhi-Mumbai Expressway, Jewar Airport Corridor, and Mathura Road expansion driving exponential wealth.',
    date: 'January 2026',
    author: 'RAOZ PROPERTIES Market Desk',
    image: '/assets/raozproperties/plot-sikri-1.webp',
    readTime: '7 min read',
    category: 'Market Trends',
    content: [
      'Infrastructure projects like the Delhi-Mumbai Expressway have slashed transit times, turning Sikri, Ballabhgarh, and Neharpar into goldmines for early-stage land and commercial investors.',
      'Plotted land developments like Green Valley Sikri-1 and SSDR Kosi-Kalan offer land ownership at affordable ticket sizes with zero depreciation, outperforming traditional bank fixed deposits and gold.'
    ]
  }
];

export const RAOZ_PROPERTIES_WEBSITE: BusinessWebsite = {
  id: 'raoz-properties',
  businessName: 'RAOZ PROPERTIES',
  category: 'realestate',
  slug: 'raoz-properties',
  templateId: 'template-realestate-raoz-properties',
  tagline: 'Plots / Property in Delhi NCR | Verified Real Estate',
  description: 'RAOZ PROPERTIES is your trusted real estate advisory and development partner for residential plots, independent builder floors, ready-to-move flats, commercial SCO shops, and luxury farmhouses across Greater Faridabad, Sikri, Kosi Kalan, and Delhi NCR. 100% legal title guarantee with interest-free EMI options.',
  ownerName: 'RAOZ PROPERTIES Leadership',
  phone: RAOZ_CONTACT.phone,
  whatsapp: RAOZ_CONTACT.phoneRaw,
  email: RAOZ_CONTACT.email,
  address: RAOZ_CONTACT.address,
  city: 'Faridabad, Delhi NCR',
  mapsUrl: 'https://maps.google.com/?q=Neharpar+Faridabad+Haryana',
  openingHours: RAOZ_CONTACT.hours,
  primaryColor: '#1e3a8a', // Deep Royal Blue
  secondaryColor: '#f59e0b', // Vibrant Gold Accent
  logoUrl: '/assets/raozproperties/logo.png',
  coverUrl: '/assets/raozproperties/hero-banner.jpg',
  fontFamily: 'Plus Jakarta Sans, sans-serif',
  bookingType: 'consultation_quote',
  bookingCtaLabel: 'Schedule Site Visit',
  specialBadge: 'Site #52 · Real Estate Delhi NCR',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 49999,
  paymentStatus: 'paid',
  sections: [
    { id: 'hero', title: 'Find Your Dream Property in Delhi NCR', isEnabled: true, order: 1 },
    { id: 'search', title: 'Property Search & Filters', isEnabled: true, order: 2 },
    { id: 'pillars', title: 'Why Choose RAOZ PROPERTIES', isEnabled: true, order: 3 },
    { id: 'about', title: 'About Our Company', isEnabled: true, order: 4 },
    { id: 'listings', title: 'Our Latest Listings', isEnabled: true, order: 5 },
    { id: 'projects', title: 'Featured Plotted Projects', isEnabled: true, order: 6 },
    { id: 'calculator', title: 'Interest-Free EMI Calculator', isEnabled: true, order: 7 },
    { id: 'process', title: 'Our Simple Process', isEnabled: true, order: 8 },
    { id: 'testimonials', title: 'See Our Happy Families', isEnabled: true, order: 9 },
    { id: 'stats', title: 'Lovely Customers & Numbers', isEnabled: true, order: 10 },
    { id: 'faq', title: 'Frequently Asked Questions', isEnabled: true, order: 11 },
    { id: 'blogs', title: 'Our Latest News & Guides', isEnabled: true, order: 12 },
    { id: 'contact', title: 'Get in Touch with Our Experts', isEnabled: true, order: 13 }
  ],
  offers: [
    {
      id: 'raoz-off-1',
      title: 'Free Accompanied Car Site Visit',
      description: 'Zero consultation or car escort charges for plot & floor walkthroughs across Faridabad and Delhi NCR.',
      discountPercent: 100,
      couponCode: 'RAOZVISIT',
      isActive: true
    },
    {
      id: 'raoz-off-2',
      title: 'Zero Interest EMI on Land Plots',
      description: 'Pay 30% booking amount and balance in 12 to 24 equal monthly installments with zero extra cost.',
      discountPercent: 100,
      couponCode: 'ZEROEMI',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'raoz-gal-1',
      title: 'Modern Residential Architecture',
      category: 'exterior',
      imageUrl: '/assets/raozproperties/hero-banner.jpg'
    },
    {
      id: 'raoz-gal-2',
      title: 'Green Valley Sikri Plotted Township',
      category: 'facilities',
      imageUrl: '/assets/raozproperties/plot-sikri-1.webp'
    },
    {
      id: 'raoz-gal-3',
      title: 'Luxury Builder Floors Neharpar',
      category: 'interior',
      imageUrl: '/assets/raozproperties/builder-floor-1.webp'
    }
  ],
  items: []
};
