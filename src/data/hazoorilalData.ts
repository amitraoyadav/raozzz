import { BusinessWebsite } from '../types';

export interface HazoorilalProduct {
  id: string;
  sku: string;
  name: string;
  category: 'high_jewellery' | 'gold' | 'diamond' | 'polki' | 'mens' | 'engagement';
  subCategory: string;
  price?: number;
  priceOnRequest: boolean;
  metal: '18K White Gold' | '18K Yellow Gold' | '18K Rose Gold' | '22K Gold' | 'Platinum';
  gemstones: string;
  diamondCarat?: string;
  imageUrl: string;
  hoverImageUrl?: string;
  galleryImages: string[];
  description: string;
  badge?: string;
  isNewArrival?: boolean;
  isBestseller?: boolean;
  isHighJewellery?: boolean;
}

export interface HazoorilalIcon {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
  description: string;
  featuredJewel: string;
}

export interface HazoorilalBride {
  id: string;
  title: string;
  subtitle: string;
  videoUrl?: string;
  imageUrl: string;
  details: string;
}

export interface HazoorilalStore {
  id: string;
  name: string;
  badge?: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  timings: string;
  imageUrl: string;
}

export const HAZOORILAL_STORES: HazoorilalStore[] = [
  {
    id: 'store-gk1',
    name: 'Flagship Store — Greater Kailash Part I',
    badge: 'Flagship Store',
    address: 'M-44, M-Block Market, Greater Kailash Part I',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110048',
    phone: '+91 11 4173 4567 / +91 98112 23344',
    timings: 'Mon - Sun: 11:00 AM – 7:30 PM (Tuesday Closed)',
    imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'store-gurugram',
    name: 'Gurugram Store — Golf Avenue 42',
    address: 'Urban Estate Shop No. 4-5, Golf Avenue 42, Sector 42',
    city: 'Gurugram',
    state: 'Haryana',
    pincode: '122002',
    phone: '+91 124 456 7890 / +91 98112 23344',
    timings: 'Mon - Sun: 11:00 AM – 8:00 PM',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'store-emporio',
    name: 'DLF Emporio Luxury Mall',
    badge: 'Luxury Salon',
    address: '305, 2nd Floor, DLF Emporio, Nelson Mandela Marg, Vasant Kunj',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110070',
    phone: '+91 11 4609 8234 / +91 98112 23344',
    timings: 'Mon - Sun: 11:00 AM – 8:30 PM',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'store-itc',
    name: 'ITC Maurya Luxury Collection',
    address: 'Shopping Arcade, ITC Maurya, Diplomatic Enclave, Chanakyapuri',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110021',
    phone: '+91 11 2611 1234 / +91 98112 23344',
    timings: 'Mon - Sun: 10:30 AM – 8:00 PM',
    imageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80'
  }
];

export const HAZOORILAL_ICONS: HazoorilalIcon[] = [
  {
    id: 'icon-aishwarya',
    name: 'Aishwarya Rai Bachchan',
    title: 'Miss World, Padma Shri, Actress',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    description: 'Adorned in custom Hazoorilal diamond and Zambian emerald high jewellery for red-carpet appearances and prestigious global galas.',
    featuredJewel: 'Bespoke Emerald & Diamond Cascade Choker'
  },
  {
    id: 'icon-kriti',
    name: 'Kriti Sanon',
    title: 'National Award-Winning Actress',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    description: 'Styling statement polki and uncut diamond cocktail pieces, capturing modern glamour rooted in timeless royal heritage.',
    featuredJewel: 'Syndicate Polki Chandbali Earrings'
  },
  {
    id: 'icon-nora',
    name: 'Nora Fatehi',
    title: 'Global Artist & Performer',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    description: 'Shining in Hazoorilal diamond neckpieces with rare fancy cut diamonds and radiant Colombian emerald teardrops.',
    featuredJewel: 'High Jewellery Solitaire Rivière Necklace'
  },
  {
    id: 'icon-tripti',
    name: 'Tripti Dimri',
    title: 'Acclaimed Actress',
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    description: 'Exuding ethereal elegance wearing the iconic Eden-Roc diamond collar necklace and matching micro-pavé earrings.',
    featuredJewel: 'Eden-Roc Collection Diamond Suite'
  },
  {
    id: 'icon-ananya',
    name: 'Ananya Panday',
    title: 'Youth Icon & Actress',
    imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80',
    description: 'Wearing contemporary layered diamond necklaces and stackable diamond tennis bracelets from Hazoorilal Fine Jewellery.',
    featuredJewel: 'Layered Diamond Tennis Choker'
  },
  {
    id: 'icon-diana',
    name: 'Diana Penty',
    title: 'Model & Actress',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    description: 'Regal presence enhanced by multi-tiered Hazoorilal bridal polki sets at signature couture fashion weeks.',
    featuredJewel: 'Royal Polki & Basra Pearl Haaram'
  }
];

export const HAZOORILAL_BRIDES: HazoorilalBride[] = [
  {
    id: 'bride-tanya',
    title: 'Tanya Narang',
    subtitle: 'Mehendi & Sangeet Splendor',
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    details: 'Embraces the bold mathapatti and choker set handcrafted in cabochon emeralds and syndicate uncut polki diamonds.'
  },
  {
    id: 'bride-meera',
    title: 'Hazoorilal x Meera Sakhrani',
    subtitle: 'Bridal Couture Edition',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    details: 'Exquisite bridal look featuring a multi-strand diamond guttapusalu choker, matching jhumkas, and a royal nath.'
  },
  {
    id: 'bride-eman',
    title: 'Eman & Shayan',
    subtitle: 'Wedding Ceremony Heirloom',
    imageUrl: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=800&q=80',
    details: 'Intricate polki bridal choker paired with an heirloom seven-string pearl and emerald necklace.'
  }
];

export const HAZOORILAL_PRODUCTS: HazoorilalProduct[] = [
  {
    id: 'hzl-hj-01',
    sku: 'HZL-HJ-NCK-01',
    name: 'Eden-Roc Pear & Marquise Diamond High Jewellery Necklace',
    category: 'high_jewellery',
    subCategory: 'Necklaces',
    priceOnRequest: true,
    metal: '18K White Gold',
    gemstones: 'D-F Color VVS Diamonds, 32.40 Ctw',
    diamondCarat: '32.40 Ctw',
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A tour de force from the Eden-Roc Collection. Features perfectly calibrated pear-cut and marquise diamonds flowing into a dramatic graduated cascade, crafted with invisible links for maximum movement.',
    badge: 'Eden-Roc Collection',
    isNewArrival: true,
    isHighJewellery: true
  },
  {
    id: 'hzl-hj-02',
    sku: 'HZL-HJ-ERR-02',
    name: 'Colombian Emerald & Diamond Chandelier High Jewellery Earrings',
    category: 'high_jewellery',
    subCategory: 'Earrings',
    priceOnRequest: true,
    metal: '18K White Gold',
    gemstones: 'Vivid Green Colombian Emeralds 14.80 Ctw, Brilliant Diamonds 8.20 Ctw',
    diamondCarat: '8.20 Ctw',
    imageUrl: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Monumental chandelier drops featuring matched vivid green Muzo Colombian emerald teardrops suspended from intricate geometric diamond constellations.',
    badge: 'High Jewellery',
    isNewArrival: true,
    isHighJewellery: true
  },
  {
    id: 'hzl-hj-03',
    sku: 'HZL-HJ-RNG-03',
    name: 'The Empress 5.00 Carat Radiant-Cut Solitaire Ring with Tapered Baguettes',
    category: 'high_jewellery',
    subCategory: 'Rings',
    priceOnRequest: true,
    metal: 'Platinum',
    gemstones: '5.02 Ct Radiant Diamond (D/VVS1), Flanking Tapered Baguettes',
    diamondCarat: '5.62 Ctw',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'An exceptional 5-carat D-colour flawless radiant solitaire mounted in solid 950 platinum with custom-cut trapezoidal side diamonds.',
    badge: 'Masterpiece Solitaire',
    isNewArrival: true,
    isHighJewellery: true
  },
  {
    id: 'hzl-dia-04',
    sku: 'HZL-DIA-ST-04',
    name: 'Millefiori Multi-Row Diamond Collar Choker Suite',
    category: 'diamond',
    subCategory: 'Necklace Sets',
    price: 3850000,
    priceOnRequest: false,
    metal: '18K White Gold',
    gemstones: '18.50 Ctw Round Brilliant & Baguette Diamonds',
    diamondCarat: '18.50 Ctw',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Intricately flexible multi-row diamond collar with matching drop earrings from the acclaimed Millefiori collection.',
    isBestseller: true
  },
  {
    id: 'hzl-dia-05',
    sku: 'HZL-DIA-ETR-05',
    name: 'Eternal Continuum Emerald-Cut Diamond Eternity Ring',
    category: 'engagement',
    subCategory: 'Eternity Rings',
    price: 920000,
    priceOnRequest: false,
    metal: 'Platinum',
    gemstones: '18 Matched Emerald-Cut Diamonds, 6.30 Ctw',
    diamondCarat: '6.30 Ctw',
    imageUrl: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Shared-prong continuous eternity band featuring 18 laboratory-matched emerald-cut diamonds of E color and VVS clarity in 950 platinum.',
    badge: 'Signature Band',
    isNewArrival: true
  },
  {
    id: 'hzl-polki-06',
    sku: 'HZL-PLK-NK-06',
    name: 'Hazoorilal Royal Syndicate Polki Bridal Haaram with Zambian Emeralds',
    category: 'polki',
    subCategory: 'Necklace Sets',
    priceOnRequest: true,
    metal: '22K Gold',
    gemstones: 'Syndicate Polki, Tumbled Emerald Drops, Basra Pearls',
    imageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Grand royal Indian wedding haaram set in 22K yellow gold with open-polki setting, lustrous Zambian emerald melon beads, and cluster pearls.',
    badge: 'Bridal Heritage',
    isNewArrival: true
  },
  {
    id: 'hzl-polki-07',
    sku: 'HZL-PLK-CHB-07',
    name: 'Heritage Crescent Polki Chandbali Earrings with Natural Pearls',
    category: 'polki',
    subCategory: 'Earrings',
    price: 1450000,
    priceOnRequest: false,
    metal: '22K Gold',
    gemstones: 'Uncut Polki Diamonds, Natural Basra Pearls, Ruby Cabochons',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Crescent moon heritage chandbali earrings with delicate meenakari enamel work on the reverse and natural freshwater seed pearl bunches.',
    isBestseller: true
  },
  {
    id: 'hzl-gold-08',
    sku: 'HZL-GLD-SET-08',
    name: 'Sculpted 22K Gold Filigree Collar Necklace & Jhumkas',
    category: 'gold',
    subCategory: 'Necklace Sets',
    price: 1875000,
    priceOnRequest: false,
    metal: '22K Gold',
    gemstones: 'Fine Hand-Carved 22K Solid Gold',
    imageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Exquisitely hand-hammered 22K gold bridal necklace set inspired by Mughal court jewellery, hallmarked with BIS HUID identification.',
    badge: 'Heritage 22K'
  },
  {
    id: 'hzl-gold-09',
    sku: 'HZL-GLD-KADA-09',
    name: '22K Gold Handcrafted Fluted Kada Bangles (Pair)',
    category: 'gold',
    subCategory: 'Bangles',
    price: 1120000,
    priceOnRequest: false,
    metal: '22K Gold',
    gemstones: 'Solid 22K Yellow Gold (112g Pair)',
    imageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Substantial fluted solid gold kada bangles engineered with precision screw clasps for everyday royal presence.',
    isBestseller: true
  },
  {
    id: 'hzl-men-10',
    sku: 'HZL-MEN-CUF-10',
    name: 'Bespoke Diamond & Onyx Architectural Cufflinks',
    category: 'mens',
    subCategory: 'Cufflinks',
    price: 365000,
    priceOnRequest: false,
    metal: '18K White Gold',
    gemstones: 'Natural Black Onyx & Round Brilliant Diamonds (1.40 Ctw)',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Geometric 18K white gold cufflinks set with high-polish natural black onyx plaques and micro-pavé diamond borders.',
    badge: "Men's Collection"
  },
  {
    id: 'hzl-men-11',
    sku: 'HZL-MEN-KADA-11',
    name: "Men's 18K Gold & Pavé Diamond Solid Kada Bracelet",
    category: 'mens',
    subCategory: 'Bracelets/Kada',
    price: 840000,
    priceOnRequest: false,
    metal: '18K Yellow Gold',
    gemstones: 'Round Brilliant Diamonds (2.20 Ctw)',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Imposing solid 18K gold kada for men with a central channel of bezel-set natural diamonds.',
    badge: "Men's Collection"
  },
  {
    id: 'hzl-eng-12',
    sku: 'HZL-ENG-RNG-12',
    name: 'The Versailles Oval Solitaire with Hidden Diamond Halo',
    category: 'engagement',
    subCategory: 'Engagement Rings',
    price: 1650000,
    priceOnRequest: false,
    metal: 'Platinum',
    gemstones: '2.50 Ct Oval Brilliant Diamond (F/VVS2), Hidden Halo',
    diamondCarat: '2.85 Ctw',
    imageUrl: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A romantic oval solitaire held in four platinum claws with an intimate secret halo of pavé diamonds visible only from profile view.',
    badge: 'Engagement Favorite',
    isNewArrival: true
  }
];

export const HAZOORILAL_FAQS = [
  {
    q: 'How can I book a private consultation at Hazoorilal Jewellers?',
    a: 'You can book an exclusive appointment at any of our four showrooms (Greater Kailash I Flagship, Gurugram, DLF Emporio, or ITC Maurya) through our online Appointment booking form or by speaking with our concierge team at +91 98112 23344. Private viewing suites are curated with your preferred jewellery pieces prior to your arrival.'
  },
  {
    q: 'What certifications accompany Hazoorilal diamond and polki jewellery?',
    a: 'Every diamond solitaire and high jewellery piece is independently certified by premier international gemological laboratories including GIA (Gemological Institute of America) or IGI. All gold jewellery is 100% BIS Hallmarked 22K (916) or 18K (750) with unique laser HUID traceability.'
  },
  {
    q: 'Does Hazoorilal offer bespoke custom jewellery design services?',
    a: 'Yes, bespoke design is the very foundation of Hazoorilal by Sandeep Narang since 1952. Under the personal curation of Mr. Sandeep Narang, our master designers work directly with you to conceptualize, sketch, and handcraft one-of-a-kind wedding heirlooms, redesign family jewels, or source rare international stones.'
  },
  {
    q: 'What is your lifetime exchange and care policy?',
    a: 'We provide lifelong cleaning, maintenance, prong inspection, and polish services for all Hazoorilal creations. We also offer transparent lifetime exchange and buyback privileges based on prevailing bullion and certified diamond rates.'
  },
  {
    q: 'Do you offer fully insured international shipping for overseas clients?',
    a: 'Yes. We cater to clients worldwide across USA, UK, Canada, UAE, and Singapore with door-to-door, fully insured priority transport through trusted security logistics carriers (Brinks / Sequel / Malca-Amit).'
  }
];

export const HAZOORILAL_WEBSITE: BusinessWebsite = {
  id: 'hazoorilal-jewellers',
  slug: 'hazoorilal-jewellers',
  businessName: 'Hazoorilal Jewellers',
  category: 'jewellery' as any,
  templateId: 'hazoorilal-jewellers',
  tagline: 'By Sandeep Narang · Where Brilliance is Bespoke · Since 1952',
  description: 'Hazoorilal Jewellers by Sandeep Narang is one of India’s most revered luxury jewellery houses. Established in 1952, renowned for high jewellery, bespoke bridal heirlooms, certified diamonds, and royal polki collections across Delhi NCR and international red carpets.',
  ownerName: 'Hazoorilal Jewellers by Sandeep Narang',
  phone: '+91 11 4173 4567',
  whatsapp: '+91 98112 23344',
  email: 'info@hazoorilaljewellers.com',
  address: 'M-44, M-Block Market, Greater Kailash Part I, New Delhi – 110048',
  city: 'New Delhi',
  mapsUrl: 'https://maps.google.com/?q=Hazoorilal+Jewellers+GK+1+New+Delhi',
  openingHours: 'Mon - Sun: 11:00 AM – 7:30 PM (Tuesday Closed)',
  coverUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#000000',
  secondaryColor: '#FBBC93',
  fontFamily: 'Chronicle Display Roman, serif',
  bookingType: 'appointment_slot' as any,
  bookingCtaLabel: 'View Demo',
  specialBadge: 'Since 1952 · High Jewellery by Sandeep Narang',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 49999,
  paymentStatus: 'paid',
  sections: [
    { id: 'hero', title: 'Where Brilliance is Bespoke', isEnabled: true, order: 1 },
    { id: 'edenroc', title: 'Eden-Roc Collection', isEnabled: true, order: 2 },
    { id: 'highjewellery', title: 'High Jewellery', isEnabled: true, order: 3 },
    { id: 'privatepreview', title: 'Private Preview & Appointment', isEnabled: true, order: 4 },
    { id: 'newarrivals', title: 'New Arrivals', isEnabled: true, order: 5 },
    { id: 'brides', title: 'Hazoorilal Brides', isEnabled: true, order: 6 },
    { id: 'icons', title: 'Adorned by Icons', isEnabled: true, order: 7 },
    { id: 'house', title: 'House of Hazoorilal', isEnabled: true, order: 8 },
    { id: 'stores', title: 'Our Stores', isEnabled: true, order: 9 }
  ],
  offers: [
    {
      id: 'hzl-offer-appointment',
      title: 'Private Viewing Suite Privilege',
      description: 'Book your personal appointment with senior jewellery consultants at our GK-1 Flagship or DLF Emporio salon.',
      discountPercent: 10,
      couponCode: 'HAZOORILAL1952',
      isActive: true
    },
    {
      id: 'hzl-offer-bespoke',
      title: 'Bespoke Bridal Consultation',
      description: 'Exclusive consultation with Sandeep Narang design atelier for custom royal bridal sets.',
      discountPercent: 5,
      couponCode: 'BESPOKEBRIDE',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'hzl-gal-1',
      title: 'Eden-Roc High Jewellery Pear-Cut Diamond Suite',
      category: 'high_jewellery',
      imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'hzl-gal-2',
      title: 'Muzp Colombian Emerald & Diamond Chandelier Drops',
      category: 'high_jewellery',
      imageUrl: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'hzl-gal-3',
      title: 'Royal Syndicate Polki Guttapusalu Bridal Haaram',
      category: 'polki',
      imageUrl: 'https://images.unsplash.com/photo-1611591475855-3331b268565b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'hzl-gal-4',
      title: 'Solitaire Engagement Rings in 950 Platinum',
      category: 'engagement',
      imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
    }
  ],
  items: [
    {
      id: 'item-hzl-eden-roc',
      name: 'Eden-Roc Diamond High Jewellery Necklace',
      category: 'High Jewellery',
      price: 9500000,
      description: 'A monument of bespoke diamond artistry featuring 32.40 Ctw D-F/VVS diamonds.',
      isAvailable: true,
      badge: 'Bespoke Masterpiece'
    },
    {
      id: 'item-hzl-emerald-earrings',
      name: 'Colombian Emerald Chandelier Earrings',
      category: 'High Jewellery',
      price: 4800000,
      description: 'Handcrafted with 14.80 Ctw Muzo emeralds and brilliant white diamonds.',
      isAvailable: true,
      badge: 'Collector Edition'
    },
    {
      id: 'item-hzl-polki-haaram',
      name: 'Royal Syndicate Polki Bridal Haaram',
      category: 'Polki',
      price: 6200000,
      description: '22K yellow gold uncut diamond necklace with emerald drops and Basra pearls.',
      isAvailable: true,
      badge: 'Bridal Heirloom'
    },
    {
      id: 'item-hzl-solitaire-ring',
      name: '5.00 Carat Radiant Diamond Solitaire Ring',
      category: 'Engagement',
      price: 12500000,
      description: 'GIA certified 5.02 Ct radiant diamond mounted in solid 950 platinum.',
      isAvailable: true,
      badge: 'Solitaire Classic'
    }
  ]
};
