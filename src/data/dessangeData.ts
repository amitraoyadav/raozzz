import { BusinessWebsite } from '../types';

export interface DessangeService {
  id: string;
  name: string;
  category: 'haircut' | 'balayage' | 'treatments' | 'makeup' | 'skincare' | 'manipedi';
  categoryLabel: string;
  description: string;
  duration: string;
  startingPrice: number;
  badge?: string;
  keyFeatures: string[];
  imageUrl: string;
}

export interface DessangeStylist {
  id: string;
  name: string;
  title: string;
  location: string;
  specialty: string;
  experience: string;
  bio: string;
  imageUrl: string;
}

export interface DessangeLocation {
  id: string;
  name: string;
  neighborhood: string;
  address: string;
  landmark: string;
  phoneNumbers: string[];
  email: string;
  hours: string;
  googleMapsUrl: string;
  imageUrl: string;
  valetParking: boolean;
}

export interface DessangeReview {
  id: string;
  clientName: string;
  location: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
}

export const DESSANGE_SERVICES: DessangeService[] = [
  // 1. HAIRCUT & STYLING
  {
    id: 'des-haircut-director',
    name: 'French Precision Contour Haircut — Creative Director',
    category: 'haircut',
    categoryLabel: 'Haircut & Styling',
    description: 'The legendary Dessange French dry contour technique designed to accentuate facial bone structure. Includes personalized texture diagnosis, Kérastase luxury shampoo, scalp massage, and custom Parisian blowout finish.',
    duration: '60 mins',
    startingPrice: 2500,
    badge: 'Paris Signature',
    keyFeatures: [
      'Facial morphology & hair-growth pattern analysis',
      'Relaxing scalp bath with Kérastase Bain Nutritive',
      'Effortless grow-out retention for 10-12 weeks'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'des-haircut-senior',
    name: 'Bespoke Haircut & Styling — Senior Stylist',
    category: 'haircut',
    categoryLabel: 'Haircut & Styling',
    description: 'Precision cut tailored to your personal aesthetic and lifestyle by our Paris-certified Senior Stylists. Includes detoxifying wash, conditioning masque, and signature salon blowout.',
    duration: '45 mins',
    startingPrice: 1800,
    badge: 'Bestseller',
    keyFeatures: [
      'Expert stylist consultation',
      'Invigorating wash and tailored treatment',
      'Volumizing French blowout finish'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'des-blowout-parisian',
    name: 'Dessange Signature Parisian Glamour Blowout',
    category: 'haircut',
    categoryLabel: 'Haircut & Styling',
    description: 'Light, natural, moving bounce inspired by red-carpet styling at the Cannes Film Festival. Clean root lift with silky radiant length that lasts up to 72 hours.',
    duration: '45 mins',
    startingPrice: 1200,
    keyFeatures: [
      'Deep cleansing shampoo & light smoothing serum',
      'Thermal defense shield against humidity',
      'Natural Parisian movement without stiffness'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80'
  },

  // 2. CALIFORNIAN BALAYAGE & HAIR COLOR
  {
    id: 'des-balayage-californien',
    name: 'The Inimitable Dessange Californian Balayage',
    category: 'balayage',
    categoryLabel: 'Californian Balayage & Color',
    description: 'Invented by Jacques Dessange in Paris: the world-renowned freehand balayage applied with cotton pads rather than harsh aluminum foil. Mimics natural sun-kissed reflection with seamlessly graduated roots and luminous highlights.',
    duration: '150 mins',
    startingPrice: 6500,
    badge: 'Cannes Icon',
    keyFeatures: [
      'Pioneered cotton-pad freehand painting',
      'Zero harsh demarcation lines upon regrowth',
      'Personalized gloss toner for diamond reflection'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'des-french-gloss',
    name: 'French Glossing & Tone Enhancement',
    category: 'balayage',
    categoryLabel: 'Californian Balayage & Color',
    description: 'Dual-action colour refresh combining ammonia-free permanent root color with an ultra-glossy translucent acidic glaze on lengths and ends to revive dull faded hair.',
    duration: '75 mins',
    startingPrice: 3800,
    badge: 'High Gloss',
    keyFeatures: [
      'Ammonia-free gentle oil formula',
      'Corrects brassy warm undertones',
      'Adds mirror-like shine and silky smoothness'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'des-inoa-global',
    name: 'L\'Oréal Inoa Ammonia-Free Global Colour',
    category: 'balayage',
    categoryLabel: 'Californian Balayage & Color',
    description: 'Revolutionary oil delivery system that deposits rich, velvety color while preserving hair fiber integrity and optimum scalp comfort. 100% white hair coverage with luminous multi-tonal depth.',
    duration: '90 mins',
    startingPrice: 4200,
    keyFeatures: [
      'ODS2 oil-based technology with zero ammonia odor',
      'Hydrates hair fiber for up to 6 weeks',
      'Complete, even coverage from roots to tips'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80'
  },

  // 3. HAIR TREATMENTS & RITUALS
  {
    id: 'des-kerastase-caviar',
    name: 'Kérastase Chronologiste Caviar Ritual',
    category: 'treatments',
    categoryLabel: 'Hair Spa & Treatments',
    description: 'The master luxury hair youth revitalizer. Enriched with Abyssine and concentrated mimetic caviar pearls crushed freshly at your chair to regenerate scalp and restore magnificent velvety hair fiber.',
    duration: '75 mins',
    startingPrice: 3500,
    badge: 'Luxury Caviar',
    keyFeatures: [
      'Freshly crushed caviar pearl infusion',
      'Deep scalp purification and hydration',
      'Leaves hair 400% shinier with lasting fragrance'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1512290900672-1f4142f3ea7b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'des-olaplex-rebonding',
    name: 'Olaplex Molecular Bond Multiplier Therapy',
    category: 'treatments',
    categoryLabel: 'Hair Spa & Treatments',
    description: 'Patented single-active ingredient bis-aminopropyl diglycol dimaleate that permanently reconnects broken disulfide sulfur bonds caused by bleaching, thermal styling, and chemical treatments.',
    duration: '60 mins',
    startingPrice: 2800,
    keyFeatures: [
      'Multiplies broken disulfide bonds inside hair cortex',
      'Drastically reduces split ends and breakage',
      'Essential shield before or after balayage'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'des-cysteine-tanino',
    name: 'Cysteine Curl Softening & Tanino Protein Treatment',
    category: 'treatments',
    categoryLabel: 'Hair Spa & Treatments',
    description: 'Formaldehyde-free organic smoothing based on natural tree tannins and natural cystine amino acids. Tames stubborn Mumbai frizz, softens unruly texture, and cuts blow-dry time in half for up to 4 months.',
    duration: '180 mins',
    startingPrice: 7500,
    badge: 'Frizz-Free 4 Mo',
    keyFeatures: [
      '100% formaldehyde-free botanical taninoplasty',
      'Maintains natural bounce without flat pin-straight look',
      'Immunity against Mumbai monsoon humidity'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80'
  },

  // 4. SKIN CARE & FACIALS
  {
    id: 'des-huiles-terres-precieuses',
    name: 'Dessange Signature Huiles & Terres Précieuses Facial',
    category: 'skincare',
    categoryLabel: 'Skin Care & Facials',
    description: 'Parisian ancestral ritual combining precious essential botanical oils with micronized mineral earth clays. Custom-blended to draw out environmental pollution, soothe micro-inflammation, and awaken porcelain skin glow.',
    duration: '75 mins',
    startingPrice: 4200,
    badge: 'Paris Couture',
    keyFeatures: [
      'Rare earth clays: White Kaolin, Green Illite & Pink Montmorillonite',
      'Lymphatic drainage acupressure massage',
      'Immediate porcelain clarity and refined pores'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'des-marine-ritual-facial',
    name: 'Exclusive Marine Ritual Facial for Stressed Skin',
    category: 'skincare',
    categoryLabel: 'Skin Care & Facials',
    description: 'Infused with mineral-dense Breton seaweed concentrates and oceanic algae to detoxify tired urban skin, replenish trace marine minerals, and restore deep intercellular hydration.',
    duration: '60 mins',
    startingPrice: 3200,
    badge: 'Detoxifying',
    keyFeatures: [
      'Deep ultrasonic pore cavitation',
      'Marine collagen sheet mask with cryo-globe cooling',
      'Relieves dullness caused by Mumbai pollution'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'des-anti-aging-renewal',
    name: 'Anti-Aging Cellular Renewal Facial',
    category: 'skincare',
    categoryLabel: 'Skin Care & Facials',
    description: 'Advanced peptide and plant stem cell stimulation combined with Japanese lifting massage techniques to sculpt jawline contours, smooth fine lines, and boost endogenous collagen.',
    duration: '75 mins',
    startingPrice: 4500,
    keyFeatures: [
      'Non-invasive micro-current lifting stimulation',
      'High-potency hyaluronic & matrixyl complex',
      'Firms facial contours and plumps crow\'s feet'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1512290900672-1f4142f3ea7b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'des-purity-facial',
    name: 'Purity Ritual Balancing Facial',
    category: 'skincare',
    categoryLabel: 'Skin Care & Facials',
    description: 'Gentle salicylic and botanical fruit enzyme purification that unclogs congested pores, regulates sebum excess, and soothes sensitive skin without post-treatment redness.',
    duration: '45 mins',
    startingPrice: 2200,
    keyFeatures: [
      'Aromatherapeutic warm towel compress',
      'Painless manual extraction with tea-tree calm wrap',
      'Mattifying velvet botanical veil'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80'
  },

  // 5. MAKE UP & BRIDAL
  {
    id: 'des-makeup-cannes',
    name: 'Red Carpet & Cocktail Party Make-Up',
    category: 'makeup',
    categoryLabel: 'Make Up & Haute Couture',
    description: 'Bespoke red-carpet makeup inspired by our artists backstage at the Cannes Film Festival. Flawless airbrush complexion, luminous eye couture, and featherlight HD setting.',
    duration: '60 mins',
    startingPrice: 4500,
    badge: 'Cannes Red Carpet',
    keyFeatures: [
      'Premium international cosmetics: Dior, Chanel, Charlotte Tilbury',
      'Includes individual silk eyelash application',
      'Smudge-proof, camera-ready 16-hour endurance'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'des-bridal-couture',
    name: 'Haute Couture Bridal Transformation',
    category: 'makeup',
    categoryLabel: 'Make Up & Haute Couture',
    description: 'Comprehensive royal bridal luxury: personalized consultation, pre-wedding skin preparation, HD bridal makeup, bespoke hairstyling with floral pinning, and master saree/dupatta draping.',
    duration: '180 mins',
    startingPrice: 18000,
    badge: 'Masterpiece',
    keyFeatures: [
      'Complete customized bridal styling with accessories placement',
      'Artisanal Saree / Lehenga dupatta draping by specialists',
      'Includes luxury touch-up kit for wedding reception'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'des-saree-draping',
    name: 'Artisanal Saree Draping & Pleating',
    category: 'makeup',
    categoryLabel: 'Make Up & Haute Couture',
    description: 'Flawless traditional and contemporary saree draping: Gujarati, Bengali, Nauvari, Mermaid, and Royal Mumtaz styles pinned with microscopic precision.',
    duration: '30 mins',
    startingPrice: 1200,
    keyFeatures: [
      'Pinless comfort technique that stays secure',
      'Perfect pleat alignment tailored to client height',
      'Ironing and pre-pleating service included'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80'
  },

  // 6. MANI-PEDI & NAIL ART
  {
    id: 'des-nutri-royale-manicure',
    name: 'Dessange Signature Nutri Royale Manicure',
    category: 'manipedi',
    categoryLabel: 'Manicure & Pedicure',
    description: 'Royal hand revival with warm sweet almond oil soak, volcanic sugar cane exfoliation, botanical paraffin mask wrap, and relaxing acupressure arm massage.',
    duration: '60 mins',
    startingPrice: 1200,
    badge: 'Paris Essential',
    keyFeatures: [
      'Warm sweet almond and orange blossom soak',
      'Deep cuticle softening and organic buffing',
      'Paraffin moisture cocoon with heated mitts'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'des-balinese-pedicure',
    name: 'Dessange Signature Balinese Warm Pedicure',
    category: 'manipedi',
    categoryLabel: 'Manicure & Pedicure',
    description: 'Foot ritual featuring warm volcanic basalt stones, Dead Sea salt detox soak, invigorating mint exfoliation, cracked heel botanical smoothing, and long calf massage.',
    duration: '75 mins',
    startingPrice: 1500,
    badge: 'Client Favorite',
    keyFeatures: [
      'Warm volcanic basalt stone reflexology',
      'Eucalyptus & Dead Sea mineral bath',
      'Callus smoothing with organic shea butter balm'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'des-french-gel-mani',
    name: 'Classic Parisian French Manicure with Gel Polish',
    category: 'manipedi',
    categoryLabel: 'Manicure & Pedicure',
    description: 'Timeless sheer milky pink base with razor-sharp white smile line, cured under UV/LED for 3 weeks of chip-free, ultra-glossy elegance.',
    duration: '60 mins',
    startingPrice: 1400,
    keyFeatures: [
      'Ultra-precise smile line application',
      'Zero chipping or peeling for up to 21 days',
      'Nourishing cuticle oil finish'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80'
  }
];

export const DESSANGE_STYLISTS: DessangeStylist[] = [
  {
    id: 'stylist-jean-pierre',
    name: 'Jean-Pierre Laurent',
    title: 'Creative Artistic Director (Paris & Mumbai)',
    location: 'Bandra West Flagship',
    specialty: 'French Contour Haircuts & Cannes Red Carpet Styling',
    experience: '18 Years Experience',
    bio: 'Trained at the prestigious Dessange Paris Academy on Avenue Montaigne. Stylist to international cinema stars at the Cannes Film Festival for 11 consecutive seasons.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'stylist-ananya-sharma',
    name: 'Ananya Sharma',
    title: 'Master Balayage Color Director',
    location: 'Lower Parel Palladium',
    specialty: 'The Inimitable Californian Balayage & French Glossing',
    experience: '12 Years Experience',
    bio: 'Recognized as one of India’s foremost balayage authorities. Certified in Paris in freehand brush and cotton-pad painting techniques for dimensional sun-kissed reflection.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'stylist-camille-rousseau',
    name: 'Camille Rousseau',
    title: 'Lead Paris Aesthetician & Spa Director',
    location: 'Kemp\'s Corner Flagship',
    specialty: 'Huiles & Terres Précieuses & Advanced Marine Facials',
    experience: '14 Years Experience',
    bio: 'Specialist in Parisian high-performance skincare rituals, anti-aging lymphatic facial acupressure, and custom mineral clay therapies.',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'stylist-rohit-mehta',
    name: 'Rohit Mehta',
    title: 'Senior Hair Stylist & Kérastase Ambassador',
    location: 'Bandra West Flagship',
    specialty: 'Precision Texture Cuts, Caviar Rituals & Men\'s Grooming',
    experience: '9 Years Experience',
    bio: 'Dedicated to effortless French luxury haircuts and bespoke Kérastase chronologiste treatments tailored for Mumbai\'s humid climate.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
  }
];

export const DESSANGE_LOCATIONS: DessangeLocation[] = [
  {
    id: 'loc-bandra',
    name: 'DESSANGE Paris — Bandra West',
    neighborhood: 'Bandra West (Turner Road)',
    address: '190, Savanna Court, Turner Road, near Rolex Showroom, Bandra West, Mumbai, Maharashtra 400050',
    landmark: 'Near Rolex Showroom & Waterfield Road Crossing',
    phoneNumbers: ['+91 73043 08957', '+91 91522 44214'],
    email: 'admin@dessangemumbai.com',
    hours: '10:00 AM – 8:00 PM (Monday – Sunday)',
    googleMapsUrl: 'https://maps.google.com/?q=Dessange+Paris+Bandra+Mumbai',
    imageUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=900&q=80',
    valetParking: true
  },
  {
    id: 'loc-kemps-corner',
    name: 'DESSANGE Paris — Kemp\'s Corner',
    neighborhood: 'South Mumbai (Cumballa Hill)',
    address: 'Chinoy Mansion, 162, Warden Road, opposite St. Stephen Church, beside Gangar Eyenation, Kemps Corner, Cumballa Hill, Mumbai, Maharashtra 400036',
    landmark: 'Opposite St. Stephen Church & Beside Gangar Eyenation',
    phoneNumbers: ['+91 73043 38957', '+91 93242 50369'],
    email: 'admin@dessangemumbai.com',
    hours: '10:00 AM – 9:00 PM (Monday – Sunday)',
    googleMapsUrl: 'https://maps.google.com/?q=Dessange+Kemps+Corner+Mumbai',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80',
    valetParking: true
  },
  {
    id: 'loc-lower-parel',
    name: 'DESSANGE Paris — Lower Parel (Palladium)',
    neighborhood: 'Lower Parel (High Street Phoenix)',
    address: 'Unit No. S-39, Rise - II, 2nd Floor, Opp PVR Cinema, Palladium Mall, 462, Senapati Bapat Marg, Lower Parel, Mumbai, Maharashtra 400013',
    landmark: '2nd Floor, Palladium Mall, Opposite PVR Inox Cinema',
    phoneNumbers: ['+91 90043 30073', '+91 90043 30074'],
    email: 'palladium@dessangemumbai.com',
    hours: '10:00 AM – 10:00 PM (Monday – Sunday)',
    googleMapsUrl: 'https://maps.google.com/?q=Dessange+Palladium+Lower+Parel+Mumbai',
    imageUrl: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&q=80',
    valetParking: true
  }
];

export const DESSANGE_REVIEWS: DessangeReview[] = [
  {
    id: 'rev-1',
    clientName: 'Natasha Poonawalla',
    location: 'Kemp\'s Corner Flagship',
    service: 'Californian Balayage & Kérastase Chronologiste',
    rating: 5,
    comment: 'The only salon in Mumbai that gets French balayage exactly right! Jean-Pierre and Ananya understand subtlety, grace, and hair health. Truly feels like being on Avenue Montaigne in Paris.',
    date: '2 weeks ago'
  },
  {
    id: 'rev-2',
    clientName: 'Kareena Kapoor Khan (Styling Patron)',
    location: 'Bandra West Flagship',
    service: 'Precision French Contour Cut & Blowout',
    rating: 5,
    comment: 'Dessange has been my absolute go-to for haircuts before film promotions and red carpets. The texture and movement they create stay effortless even after washing at home.',
    date: '1 month ago'
  },
  {
    id: 'rev-3',
    clientName: 'Rhea Chakraborty',
    location: 'Lower Parel Palladium',
    service: 'Huiles & Terres Précieuses Facial & French Mani',
    rating: 5,
    comment: 'The mineral clay facial completely transformed my skin after a hectic shoot schedule. Serene ambiance, exquisite coffee, and flawless Parisian service standards.',
    date: '3 weeks ago'
  }
];

export const DESSANGE_MUMBAI_WEBSITE: BusinessWebsite = {
  id: 'dessange-mumbai',
  slug: 'dessange-mumbai',
  businessName: 'DESSANGE Mumbai',
  category: 'salon' as any, // Reuse existing Salon category
  templateId: 'dessange-mumbai',
  tagline: 'Haute Coiffure Française · Parisian Luxury Beauty & Californian Balayage',
  description: 'Official Beauty Partner of the Cannes Film Festival since 1958. Experience Parisian elegance, signature Californian Balayage, bespoke Kérastase caviar hair rituals, and luxury spa aesthetics across Bandra, Kemp\'s Corner, and Lower Parel.',
  ownerName: 'DESSANGE Paris (Mumbai Flagships)',
  phone: '+91 73043 08957',
  whatsapp: '+91 73043 08957',
  email: 'admin@dessangemumbai.com',
  address: 'Savanna Court, Turner Road, Bandra West & Palladium Lower Parel',
  city: 'Mumbai',
  mapsUrl: 'https://maps.google.com/?q=Dessange+Paris+Bandra+Mumbai',
  openingHours: 'Mon - Sun: 10:00 AM – 9:00 PM IST',
  coverUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#141414',
  secondaryColor: '#C5A880',
  fontFamily: 'Playfair Display, serif',
  bookingType: 'appointment_slot' as any,
  bookingCtaLabel: 'View Demo',
  specialBadge: 'Official Beauty Partner · Cannes Film Festival',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 29999,
  paymentStatus: 'paid',
  sections: [
    { id: 'about', title: 'The House of Dessange', isEnabled: true, order: 1 },
    { id: 'offers', title: 'Privilege Invitations', isEnabled: true, order: 2 },
    { id: 'menu', title: 'Haute Coiffure & Spa Menu', isEnabled: true, order: 3 },
    { id: 'gallery', title: 'Parisian Sanctuaries', isEnabled: true, order: 4 },
    { id: 'timings', title: 'Mumbai Locations & Hours', isEnabled: true, order: 5 },
    { id: 'contact', title: 'Concierge & Reservations', isEnabled: true, order: 6 }
  ],
  offers: [
    {
      id: 'des-offer-welcome',
      title: 'First Visit Parisian Privilege',
      description: 'Enjoy 20% privilege savings on your first Californian Balayage or French Haircut when reserving online.',
      discountPercent: 20,
      couponCode: 'PARIS20',
      isActive: true
    },
    {
      id: 'des-offer-caviar',
      title: 'Complimentary Kérastase Scalp Diagnosis',
      description: 'Receive a complimentary 3D computerized scalp & hair analysis with every Chronologiste Caviar ritual.',
      discountPercent: 15,
      couponCode: 'CAVIAR15',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'des-gal-1',
      title: 'Bandra West Flagship White Marble Sanctuary',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'des-gal-2',
      title: 'The Inimitable Californian Balayage Station',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'des-gal-3',
      title: 'Kérastase Caviar Hair Spa & Scalp Bath Suite',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'des-gal-4',
      title: 'Huiles & Terres Précieuses Skincare Suite',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80'
    }
  ],
  items: [
    {
      id: 'item-des-balayage',
      name: 'The Inimitable Dessange Californian Balayage',
      category: 'Hair Color',
      price: 6500,
      description: 'Pioneered in Paris using cotton pads for seamless sun-kissed reflection and zero harsh regrowth lines.',
      isAvailable: true,
      badge: 'Cannes Icon'
    },
    {
      id: 'item-des-french-haircut',
      name: 'French Precision Contour Haircut & Blowout',
      category: 'Haircut',
      price: 2500,
      description: 'Dry contour cutting customized to facial morphology, includes Kérastase wash and Parisian blowout.',
      isAvailable: true,
      badge: 'Paris Signature'
    },
    {
      id: 'item-des-caviar-ritual',
      name: 'Kérastase Chronologiste Caviar Hair Spa',
      category: 'Hair Treatments',
      price: 3500,
      description: 'Crushed mimetic caviar pearl infusion with Abyssine for ultimate youth regeneration and 400% shine.',
      isAvailable: true,
      badge: 'Luxury Caviar'
    },
    {
      id: 'item-des-precieuses-facial',
      name: 'Dessange Signature Huiles & Terres Précieuses Facial',
      category: 'Skin Care',
      price: 4200,
      description: 'Rare botanical oils and micronized mineral earth clays for deep urban detox and porcelain radiance.',
      isAvailable: true,
      badge: 'Paris Couture'
    },
    {
      id: 'item-des-balinese-pedi',
      name: 'Dessange Balinese Warm Stone Pedicure',
      category: 'Mani-Pedi',
      price: 1500,
      description: 'Hot basalt stone reflexology, Dead Sea salt foot soak, and organic shea butter smoothing.',
      isAvailable: true
    }
  ]
};
