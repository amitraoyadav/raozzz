export interface BodycraftService {
  id: string;
  name: string;
  category: 'salon' | 'clinic' | 'spa' | 'bridal';
  subCategory: string;
  description: string;
  duration: string;
  startingPrice: number;
  badge?: string;
  benefits: string[];
  imageUrl: string;
}

export interface BodycraftDoctor {
  id: string;
  name: string;
  qualification: string;
  designation: string;
  experience: string;
  specialization: string;
  city: string;
  bio: string;
}

export interface BodycraftOutlet {
  id: string;
  city: 'Bengaluru' | 'Mumbai' | 'Gurugram' | 'Chennai';
  name: string;
  type: 'Salon & Spa + Clinic' | 'Skin Clinic' | 'Salon & Spa';
  address: string;
  phone: string;
  hours: string;
  landmark: string;
}

export interface BodycraftOffer {
  id: string;
  title: string;
  discount: string;
  category: 'clinic' | 'salon' | 'spa' | 'bridal';
  description: string;
  code: string;
  validity: string;
}

export interface BodycraftReview {
  id: string;
  guestName: string;
  city: string;
  outlet: string;
  service: string;
  rating: number;
  review: string;
  date: string;
}

export const BODYCRAFT_SERVICES: BodycraftService[] = [
  // 1. SALON SERVICES
  {
    id: 'bc-haircut-blowout',
    name: 'Bespoke Precision Haircut & Styling',
    category: 'salon',
    subCategory: 'Hair',
    description: 'Personalized face-contour haircut with shampoo, customized masque conditioning, and blow-dry styling by Bodycraft Creative Directors.',
    duration: '60 mins',
    startingPrice: 950,
    badge: 'Bestseller',
    benefits: ['Face-shape consultation', 'Tension-release scalp wash', 'Signature blowout finish'],
    imageUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bc-kerastase-ritual',
    name: 'Kérastase Fusio-Dose & Chronologiste Caviar Ritual',
    category: 'salon',
    subCategory: 'Hair Rituals',
    description: 'Bespoke Parisian hair transformation combining customized concentrated boosters with deep scalp detox and regenerative caviar pearl infusion.',
    duration: '75 mins',
    startingPrice: 2800,
    badge: 'Luxury Paris Ritual',
    benefits: ['Instant 72h anti-frizz', 'Scalp nourishment & shine', 'Custom cocktail for your hair needs'],
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bc-balayage-color',
    name: 'Seamless Balayage & French Gloss Colouring',
    category: 'salon',
    subCategory: 'Hair Color',
    description: 'Dimensional free-hand hair contouring using ammonia-free L\'Oréal Professionnel Inoa and French gloss toner for sun-kissed reflection.',
    duration: '150 mins',
    startingPrice: 4800,
    badge: 'Trending',
    benefits: ['Zero ammonia damage', 'Natural root grow-out', 'High-gloss diamond finish'],
    imageUrl: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bc-botox-nanoplastia',
    name: 'Botox Hair Therapy & Nanoplastia Smoothing',
    category: 'salon',
    subCategory: 'Hair Treatments',
    description: 'Formaldehyde-free intensive restructuring treatment that repairs porous hair cuticles, seals split ends, and eliminates frizz for up to 5 months.',
    duration: '180 mins',
    startingPrice: 7500,
    badge: 'Signature',
    benefits: ['90% frizz reduction', 'Glass-like softness', 'Formaldehyde-free safe formula'],
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bc-spa-mani-pedi',
    name: 'Signature Paraffin & Milk-Honey Mani-Pedi',
    category: 'salon',
    subCategory: 'Hands & Feet',
    description: 'Therapeutic exfoliating scrub, warm milk soak, hot paraffin wax cocoon, soothing pressure point massage, and OPI high-shine polish.',
    duration: '90 mins',
    startingPrice: 1650,
    badge: 'Pamper Special',
    benefits: ['Heels crack repair', 'Cuticle nourishment', 'Long-lasting chip-free polish'],
    imageUrl: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=700&q=80'
  },

  // 2. SKIN CLINIC (DOCTOR-LED)
  {
    id: 'bc-hydrafacial-md',
    name: 'HydraFacial MD Elite (US-FDA 4-Step Vortex)',
    category: 'clinic',
    subCategory: 'Medi-Facials',
    description: 'Patented vortex-fusion technology that deep cleanses, extracts painless blackheads, and infuses antioxidant peptides and hyaluronic acid serums.',
    duration: '60 mins',
    startingPrice: 6500,
    badge: 'Doctor Led · US-FDA',
    benefits: ['Zero downtime glass glow', 'Immediate blackhead vacuum extraction', 'Hydration boost with peptides'],
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bc-laser-hair-reduction',
    name: 'Painless Triple-Wavelength Laser Hair Reduction',
    category: 'clinic',
    subCategory: 'Laser Treatments',
    description: 'Gold-standard US-FDA approved diode and Alexandrite laser with ICE-cooling tip for safe, painless, permanent hair reduction on Indian skin tones.',
    duration: '45 mins',
    startingPrice: 3500,
    badge: 'Permanent Smoothness',
    benefits: ['Cooling tip pain-free technology', 'Customized for Indian Fitzpatrick skin', 'Performed under Dermatologist supervision'],
    imageUrl: 'https://images.unsplash.com/photo-1512290900672-1f417f5bc655?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bc-coolsculpting-onda',
    name: 'CoolSculpting & Onda Coolwaves Body Contouring',
    category: 'clinic',
    subCategory: 'Slimming & Contouring',
    description: 'Non-invasive cryolipolysis and smart microwave frequency that freezes and permanently destroys stubborn fat cells on abdomen, flanks, and thighs.',
    duration: '75 mins',
    startingPrice: 18500,
    badge: 'Non-Surgical Slimming',
    benefits: ['Up to 25% fat layer reduction', 'No surgery or anesthesia', 'Simultaneous skin tightening'],
    imageUrl: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bc-antiageing-botox-fillers',
    name: 'Allergan Botox & Juvederm Dermal Fillers',
    category: 'clinic',
    subCategory: 'Anti-Ageing Injectables',
    description: 'Natural facial harmonization performed exclusively by senior board-certified aesthetic physicians to smooth crows feet, forehead lines, and restore lip volume.',
    duration: '45 mins',
    startingPrice: 16000,
    badge: 'Board-Certified Doctors',
    benefits: ['Natural facial expression preservation', 'Instant contour and volume restore', 'US-FDA approved Allergan formulations'],
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bc-chemical-peels',
    name: 'Dermatological Chemical Peels & Melasma Correction',
    category: 'clinic',
    subCategory: 'Clinical Peels',
    description: 'Targeted medical-grade exfoliating peels (Ferulic, Mandelic, Yellow Peel) prescribed by dermatologists to treat stubborn acne, hyperpigmentation, and sun damage.',
    duration: '40 mins',
    startingPrice: 3200,
    badge: 'Acne & Pigmentation',
    benefits: ['Fades dark spots and sun tan', 'Controls active sebum & breakouts', 'Promotes cellular skin renewal'],
    imageUrl: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=700&q=80'
  },

  // 3. SPA & WELLNESS
  {
    id: 'bc-balinese-massage',
    name: 'Authentic Balinese Aromatherapy Massage',
    category: 'spa',
    subCategory: 'Body Massages',
    description: 'Traditional Indonesian holistic therapy combining gentle palm pressure, acupressure, skin rolling, and essential flower oils to restore energy balance.',
    duration: '60 / 90 mins',
    startingPrice: 3200,
    badge: 'Deep Relaxation',
    benefits: ['Releases mental stress & tension', 'Improves blood circulation', 'Aromatherapeutic healing essential oils'],
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bc-deep-tissue',
    name: 'Deep Tissue Muscle Recovery Therapy',
    category: 'spa',
    subCategory: 'Body Massages',
    description: 'Intense slow strokes and firm thumb pressure targeting chronic muscular knots, stiff neck, lower back aches, and athletic fatigue.',
    duration: '60 / 90 mins',
    startingPrice: 3500,
    badge: 'Therapeutic',
    benefits: ['Targets stubborn deep muscle knots', 'Post-workout athletic relief', 'Eases cervical & posture strain'],
    imageUrl: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bc-body-polishing-scrub',
    name: 'Warm Chocolate & Sea Salt Body Polishing',
    category: 'spa',
    subCategory: 'Body Scrubs & Wraps',
    description: 'Full-body antioxidant scrub followed by a warm cocoa cream cocoon and soothing Vichy steam shower to reveal baby-soft, glowing skin.',
    duration: '75 mins',
    startingPrice: 3100,
    badge: 'Sensory Delight',
    benefits: ['Sloughs off dead keratin cells', 'Rich in natural cocoa flavonoids', 'Leaves skin radiant and hydrated'],
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80'
  },

  // 4. BRIDAL STUDIO
  {
    id: 'bc-bridal-royal-package',
    name: 'The Royal Bride 60-Day Skin, Hair & Body Journey',
    category: 'bridal',
    subCategory: 'Curated Regimens',
    description: 'Comprehensive holistic bride transformation curated by senior dermatologists and master stylists: 3 HydraFacials, hair spa rituals, full body polishing, and trial makeup.',
    duration: 'Multi-Session 60 Days',
    startingPrice: 35000,
    badge: 'Bridal Signature',
    benefits: ['Doctor-led bridal skin plan', 'Pre-wedding stress-buster spa sessions', 'Complimentary trial makeup consultation'],
    imageUrl: 'https://images.unsplash.com/photo-1595475207225-428b62bda831?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bc-bridal-hd-makeup',
    name: 'Signature HD & Airbrush Bridal Makeup',
    category: 'bridal',
    subCategory: 'Wedding Day Artistry',
    description: 'Flawless 16-hour sweat-proof bridal makeover using premium luxury cosmetics (Dior, MAC, Charlotte Tilbury, NARS) with bespoke floral hair design and saree draping.',
    duration: '180 mins',
    startingPrice: 18500,
    badge: 'Camera Ready',
    benefits: ['16-hour waterproof HD longevity', 'Includes custom hair jewelry placement', 'Designer dupatta & saree draping included'],
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bc-mens-grooming',
    name: 'Men’s Executive Haircut & Beard Architecture',
    category: 'salon',
    subCategory: 'Men’s Grooming',
    description: 'Precision scissor and clipper contouring, hot towel charcoal beard wash, razor detailing, and organic beard oil treatment.',
    duration: '50 mins',
    startingPrice: 850,
    badge: 'Men’s Choice',
    benefits: ['Precision clipper fade & scissor work', 'Hot towel beard softening therapy', 'Styling consultation for facial structure'],
    imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bc-kids-haircut',
    name: 'Junior Stylist Cut & Fun Braid (Boys & Girls)',
    category: 'salon',
    subCategory: 'Kids Styling',
    description: 'Patience-first fun haircut for children with gentle tear-free botanical shampoos, cute styling, and a reward treat.',
    duration: '40 mins',
    startingPrice: 650,
    badge: 'Gentle Care',
    benefits: ['100% tear-free gentle botanicals', 'Specially trained patient stylists', 'Fun styling and braid options'],
    imageUrl: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bc-morpheus8-rf',
    name: 'Morpheus8 RF Fractional Collagen Remodeling',
    category: 'clinic',
    subCategory: 'Advanced Clinical Tech',
    description: 'Gold-coated microneedling combined with radiofrequency energy that penetrates deep into subdermal tissue to lift jowls, tighten neck, and erase acne scars.',
    duration: '90 mins',
    startingPrice: 22000,
    badge: 'US-FDA Breakthrough',
    benefits: ['Non-surgical skin tightening & lifting', 'Stimulates deep elastin & collagen', 'Performed under medical doctor supervision'],
    imageUrl: 'https://images.unsplash.com/photo-1512290900672-1f417f5bc655?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bc-gfc-hair-regrowth',
    name: 'GFC (Growth Factor Concentrate) Hair Restoration',
    category: 'clinic',
    subCategory: 'Trichology & Hair Loss',
    description: 'Next-generation autologous growth factor therapy that extracts concentrated regenerative factors to awaken dormant hair follicles and stop shedding.',
    duration: '60 mins',
    startingPrice: 8500,
    badge: 'Clinical Trichology',
    benefits: ['Zero cell contamination advanced kit', 'Noticeable reduction in hair fall in 3 sessions', 'High concentration of PDGF and VEGF growth factors'],
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bc-swedish-massage',
    name: 'Classic Swedish Therapeutic Full Body Massage',
    category: 'spa',
    subCategory: 'Body Massages',
    description: 'Gentle yet invigorating long gliding strokes with warm almond oils to improve oxygen flow in blood, ease circulation, and banish fatigue.',
    duration: '60 / 90 mins',
    startingPrice: 2650,
    badge: 'Spa Classic',
    benefits: ['Gentle stress relief and muscle relaxation', 'Boosts lymphatic lymphatic drainage', 'Restores natural restful sleep patterns'],
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bc-pure-gold-spa',
    name: 'Pure Gold Indulgence Luxury Spa Ritual',
    category: 'spa',
    subCategory: 'Luxury Rituals',
    description: '24K gold dust exfoliating scrub, golden collagen wrap, full-body restorative massage, and gold peptide glow facial for the ultimate pampering.',
    duration: '120 mins',
    startingPrice: 5980,
    badge: 'Opulent Luxury',
    benefits: ['24-Karat bio-gold micro-particles', 'Cellular radiance and hydration lock', 'Complete head-to-toe sensory experience'],
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bc-groom-regime',
    name: 'The Distinguished Groom 30-Day Radiance Kit',
    category: 'bridal',
    subCategory: 'Groom Grooming',
    description: 'Complete pre-wedding grooming regimen for the modern groom: HydraFacial glow, skin de-tan therapy, scalp detox, haircut, and beard detailing.',
    duration: 'Multi-Session 30 Days',
    startingPrice: 16500,
    badge: 'Groom Special',
    benefits: ['Camera-ready matte wedding skin', 'Sharp beard architecture and haircut', 'Relaxes pre-wedding stress'],
    imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=700&q=80'
  }
];

export const BODYCRAFT_DOCTORS: BodycraftDoctor[] = [
  {
    id: 'doc-mikki',
    name: 'Dr. Mikki Singh',
    qualification: 'MBBS, MD Dermatology (Gold Medalist)',
    designation: 'Head of Clinical Dermatology',
    experience: '16+ Years Experience',
    specialization: 'Aesthetic Injectables, Anti-Ageing, Laser Technologies',
    city: 'Bengaluru (Sadashivanagar / Indiranagar)',
    bio: 'Pioneer of non-invasive facial harmonization and laser therapies in South India with thousands of successful aesthetic procedures.'
  },
  {
    id: 'doc-swetha',
    name: 'Dr. Swetha Prasad',
    qualification: 'MBBS, DVD, Fellowship in Aesthetic Medicine',
    designation: 'Senior Cosmetic Dermatologist',
    experience: '12+ Years Experience',
    specialization: 'HydraFacial Protocols, Pigmentation & Melasma, Chemical Peels',
    city: 'Bengaluru (Jayanagar / Koramangala)',
    bio: 'Dedicated to evidence-based skincare protocols combining clinical treatments with holistic homecare regimens.'
  },
  {
    id: 'doc-rajiv',
    name: 'Dr. Rajiv Menon',
    qualification: 'MBBS, MS, Fellowship in Body Contouring',
    designation: 'Aesthetic Physician & Slimming Specialist',
    experience: '10+ Years Experience',
    specialization: 'CoolSculpting, Onda Coolwaves, Non-Surgical Body Sculpting',
    city: 'Mumbai (Bandra West / Kemps Corner)',
    bio: 'Expert in non-surgical cryolipolysis and fat loss technologies, helping patients achieve defined contours without downtime.'
  },
  {
    id: 'doc-ananya',
    name: 'Dr. Ananya Sen',
    qualification: 'MBBS, MD, Fellow of International Society of Hair Restoration',
    designation: 'Clinical Trichologist & Hair Expert',
    experience: '11+ Years Experience',
    specialization: 'GFC / PRP Therapy, Hair Thinning, Scalp Detoxification',
    city: 'Gurugram (Golf Course Road)',
    bio: 'Renowned hair restoration physician specializing in non-surgical hair regrowth therapies and scalp microbiome health.'
  }
];

export const BODYCRAFT_OUTLETS: BodycraftOutlet[] = [
  // BENGALURU
  {
    id: 'out-indiranagar',
    city: 'Bengaluru',
    name: 'Indiranagar Flagship Salon, Spa & Clinic',
    type: 'Salon & Spa + Clinic',
    address: '1st Cross, 13th Main Road, Opposite New Horizon School, HAL 2nd Stage, Indiranagar, Bengaluru - 560038',
    phone: '080 4689 6001 / +91 95133 93601',
    hours: 'Mon – Sun: 9:00 AM – 9:00 PM',
    landmark: 'Opposite New Horizon School'
  },
  {
    id: 'out-sadashivanagar',
    city: 'Bengaluru',
    name: 'Sadashivanagar Clinic & Salon',
    type: 'Salon & Spa + Clinic',
    address: '403, 13th Cross, 8th Main, Opposite Food World, Sadashivanagar, Bengaluru - 560080',
    phone: '080 4689 6002 / +91 95133 93602',
    hours: 'Mon – Sun: 9:00 AM – 9:00 PM',
    landmark: 'Near Sankey Tank'
  },
  {
    id: 'out-jayanagar',
    city: 'Bengaluru',
    name: 'Jayanagar 4th Block Hub',
    type: 'Salon & Spa + Clinic',
    address: 'No. 32, 9th Main Road, 4th Block, Jayanagar, Bengaluru - 560011',
    phone: '080 4689 6003 / +91 95133 93603',
    hours: 'Mon – Sun: 9:00 AM – 9:00 PM',
    landmark: 'Near Cool Joint'
  },
  {
    id: 'out-whitefield',
    city: 'Bengaluru',
    name: 'Whitefield Prestige Ozone Outlet',
    type: 'Salon & Spa',
    address: 'Shop No. 32, ND Nath Armadale, Whitefield Road, Prestige Ozone, Bengaluru - 560066',
    phone: '080 4689 6004 / +91 95133 93604',
    hours: 'Mon – Sun: 9:30 AM – 9:00 PM',
    landmark: 'Prestige Ozone Main Entrance'
  },
  {
    id: 'out-koramangala',
    city: 'Bengaluru',
    name: 'Koramangala 4th Block Boutique',
    type: 'Salon & Spa + Clinic',
    address: 'No. 120, 80 Feet Road, 4th Block, Koramangala, Bengaluru - 560034',
    phone: '080 4689 6005 / +91 95133 93605',
    hours: 'Mon – Sun: 9:00 AM – 9:00 PM',
    landmark: 'Near Maharaja Signal'
  },
  {
    id: 'out-lavelle',
    city: 'Bengaluru',
    name: 'Lavelle Road Luxury Center',
    type: 'Salon & Spa + Clinic',
    address: '1st Floor, Above Smoke House Deli, Lavelle Road, Bengaluru - 560001',
    phone: '080 4689 6006 / +91 95133 93606',
    hours: 'Mon – Sun: 9:00 AM – 9:00 PM',
    landmark: 'Near UB City'
  },

  // MUMBAI
  {
    id: 'out-bandra',
    city: 'Mumbai',
    name: 'Bandra West Flagship Center',
    type: 'Salon & Spa + Clinic',
    address: 'Ground & 1st Floor, Silver Pearl, Junction of Waterfield Road & Turner Road, Bandra (West), Mumbai - 400050',
    phone: '022 4689 6010 / +91 95133 93610',
    hours: 'Mon – Sun: 9:30 AM – 9:00 PM',
    landmark: 'Opposite China Gate Restaurant'
  },
  {
    id: 'out-kemps',
    city: 'Mumbai',
    name: 'Kemps Corner Luxury Clinic & Salon',
    type: 'Skin Clinic',
    address: 'Chinoy Mansion, Ground Floor, Bhulabhai Desai Road, Kemps Corner, Mumbai - 400036',
    phone: '022 4689 6011 / +91 95133 93611',
    hours: 'Mon – Sun: 9:30 AM – 8:30 PM',
    landmark: 'Near Kemps Corner Flyover'
  },

  // GURUGRAM
  {
    id: 'out-gurugram-golf',
    city: 'Gurugram',
    name: 'Golf Course Road Flagship Hub',
    type: 'Salon & Spa + Clinic',
    address: 'Ground Floor, Central Plaza Mall, Golf Course Road, Sector 42, Gurugram, Haryana - 122002',
    phone: '0124 4689 6020 / +91 95133 93620',
    hours: 'Mon – Sun: 9:00 AM – 9:00 PM',
    landmark: 'Sector 42 Rapid Metro'
  },

  // CHENNAI
  {
    id: 'out-chennai-knk',
    city: 'Chennai',
    name: 'Nungambakkam KNK Road Flagship',
    type: 'Salon & Spa + Clinic',
    address: 'No. 18/2, Khader Nawaz Khan Road, Nungambakkam, Chennai, Tamil Nadu - 600006',
    phone: '044 4689 6030 / +91 95133 93630',
    hours: 'Mon – Sun: 9:00 AM – 9:00 PM',
    landmark: 'Opposite Starbucks KNK Road'
  }
];

export const BODYCRAFT_OFFERS: BodycraftOffer[] = [
  {
    id: 'off-doctor-trial',
    title: 'First-Time Doctor Consultation @ ₹499',
    discount: 'Free with any clinic procedure',
    category: 'clinic',
    description: 'Comprehensive 3D computerized skin & scalp diagnostic scan with a senior dermatologist. Consultation fee 100% credited against your treatment.',
    code: 'DOCGLOW',
    validity: 'Ongoing 2026'
  },
  {
    id: 'off-hydrafacial-combo',
    title: 'HydraFacial MD + Laser Hair Reduction Combo',
    discount: 'Flat 35% Off',
    category: 'clinic',
    description: 'Combine a 4-step HydraFacial MD Elite session with Underarm or Bikini laser hair reduction trial. Valid across Bengaluru, Mumbai & Gurugram clinics.',
    code: 'GLOWCOMBO35',
    validity: 'Valid till 30 April 2026'
  },
  {
    id: 'off-weekday-spa',
    title: 'Weekday Spa Bliss: Mon–Thu Rejuvenation',
    discount: 'Flat 20% Off',
    category: 'spa',
    description: 'Escape midday work stress with 20% off on all 60 & 90-minute Balinese Aromatherapy and Deep Tissue body therapies between 11 AM – 5 PM.',
    code: 'BLISS20',
    validity: 'Mon to Thu Slots'
  },
  {
    id: 'off-bridal-masterclass',
    title: 'Royal Bridal Trial Consultation Pass',
    discount: 'Complimentary Styling Trial',
    category: 'bridal',
    description: 'Book your pre-bridal package and receive a free half-face HD airbrush trial and customized dermatology skin roadmap from our clinical team.',
    code: 'ROYALBRIDE',
    validity: 'Wedding Season 2026'
  }
];

export const BODYCRAFT_REVIEWS: BodycraftReview[] = [
  {
    id: 'rev-1',
    guestName: 'Kavita Chawla',
    city: 'Bengaluru',
    outlet: 'Indiranagar Flagship',
    service: 'HydraFacial MD Elite + Kérastase Ritual',
    rating: 5,
    review: 'Bodycraft has been my beauty sanctuary for 8 years. What sets them apart is having real dermatologists right next to master hair stylists. The HydraFacial transformed my stubborn open pores in 1 session, and Nikhil’s haircut was perfection.',
    date: '14 Feb 2026'
  },
  {
    id: 'rev-2',
    guestName: 'Rohit Shenoy',
    city: 'Mumbai',
    outlet: 'Bandra West Center',
    service: 'Deep Tissue Recovery Massage & Beard Styling',
    rating: 5,
    review: 'Exceptional hygiene and world-class therapists. The deep tissue therapy relieved 6 months of desk posture pain. Very quiet, clean private suites and high-end aesthetic throughout.',
    date: '28 Jan 2026'
  },
  {
    id: 'rev-3',
    guestName: 'Dr. Neha Mathur',
    city: 'Gurugram',
    outlet: 'Golf Course Road Hub',
    service: 'CoolSculpting & Triple Wavelength Laser',
    rating: 5,
    review: 'As a physician myself, I am very critical of clinic hygiene and safety protocols. Bodycraft’s US-FDA laser machine and Dr. Ananya’s thorough pre-procedure guidance gave me complete confidence. Incredible results.',
    date: '19 Mar 2026'
  }
];

export const BODYCRAFT_TRUST_PILLARS = [
  {
    stat: '25+ Years',
    title: 'Heritage of Trust',
    desc: 'Founded in 1997, pioneering India’s first holistic hybrid clinic and salon experience.'
  },
  {
    stat: '30+ Outlets',
    title: 'Metropolitan Presence',
    desc: 'Flagship centers across Bengaluru, Mumbai, Gurugram, and Chennai.'
  },
  {
    stat: '600+ Masters',
    title: 'Certified Doctors & Stylists',
    desc: 'Board-certified dermatologists, aesthetic doctors, and Vidal Sassoon-trained hair artists.'
  },
  {
    stat: 'US-FDA Approved',
    title: 'Clinical Gold Standard',
    desc: 'Cutting-edge medical equipment including HydraFacial MD, CoolSculpting, and triple-wavelength lasers.'
  }
];

export interface BodycraftLeader {
  name: string;
  role: string;
  experience: string;
  bio: string;
  avatar: string;
}

export const BODYCRAFT_LEADERSHIP: BodycraftLeader[] = [
  {
    name: 'Manjul Gupta',
    role: 'Founder & Managing Director',
    experience: '30+ Years in Beauty & Cosmetology',
    bio: 'Pioneered Bodycraft in 1997 with a singular vision: bringing world-standard personal care, uncompromised hygiene, and bespoke styling to Indian women. Her philosophy of continuous education led to the creation of Bodycraft Academy.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Sahil Gupta',
    role: 'Chief Executive Officer',
    experience: '15+ Years in Retail & Healthcare Strategy',
    bio: 'Architected the expansion of Bodycraft from Bengaluru to Mumbai, Gurugram, and Chennai, scaling the brand into India’s first comprehensive hybrid clinic-salon network with over 30 luxury centers.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Swati Gupta',
    role: 'Creative Director (Hair & Makeup)',
    experience: '18+ Years International Hair Artistry',
    bio: 'Vidal Sassoon and Toni&Guy alumnus, Swati directs the creative curriculum for all Bodycraft salons, training 400+ stylists in bespoke face-contour haircutting and French balayage glossing.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Dr. Mikki Singh',
    role: 'Medical Director & Chief Dermatologist',
    experience: '16+ Years Clinical Dermatology',
    bio: 'Gold-medalist dermatologist spearheading Bodycraft Skin Clinic. She curates US-FDA approved technologies, oversees clinical safety protocols, and trains the dermatology physician faculty.',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80'
  }
];

import { BusinessWebsite } from '../types';

export const BODYCRAFT_WEBSITE: BusinessWebsite = {
  id: 'bodycraft',
  slug: 'bodycraft',
  businessName: 'Bodycraft',
  category: 'salon' as any,
  templateId: 'bodycraft',
  tagline: "India's First Hybrid Clinic-Salon · Salon Care Backed by Dermatology Expertise",
  description: 'Bodycraft offers a complete spectrum of luxury salon care, doctor-led clinical aesthetics (US-FDA HydraFacial MD, Painless Diode Lasers, CoolSculpting), and restorative spa therapies across 30+ centers in Bengaluru, Mumbai, Gurugram, and Chennai since 1997.',
  ownerName: 'Manjul Gupta & Sahil Gupta',
  phone: '080 4689 6000',
  whatsapp: '+91 95133 93636',
  email: 'customercare@bodycraft.co.in',
  address: 'Indiranagar Flagship, 1st Cross, HAL 2nd Stage, Indiranagar',
  city: 'Bengaluru',
  mapsUrl: 'https://maps.google.com/?q=Bodycraft+Salon+Indiranagar+Bengaluru',
  openingHours: 'Mon - Sun: 9:00 AM – 9:00 PM IST',
  coverUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#121212',
  secondaryColor: '#C5A880',
  fontFamily: 'Inter',
  bookingType: 'appointment_consult' as any,
  bookingCtaLabel: 'View Demo',
  specialBadge: '30+ Luxury Outlets · Since 1997',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 24999,
  paymentStatus: 'paid',
  sections: [
    { id: 'about', title: 'About Us', isEnabled: true, order: 1 },
    { id: 'offers', title: 'Special Offers', isEnabled: true, order: 2 },
    { id: 'menu', title: 'Products & Services', isEnabled: true, order: 3 },
    { id: 'gallery', title: 'Photo Gallery', isEnabled: true, order: 4 },
    { id: 'timings', title: 'Hours & Location', isEnabled: true, order: 5 },
    { id: 'contact', title: 'Booking & Enquiries', isEnabled: true, order: 6 }
  ],
  offers: [
    {
      id: 'bc-first-visit',
      title: 'First Salon Visit Privilege',
      description: 'Flat 30% OFF on Haircuts, Balayage Color & Skin Clean-Ups.',
      discountPercent: 30,
      couponCode: 'FIRST30',
      isActive: true
    },
    {
      id: 'bc-clinic-special',
      title: 'Free Doctor Skin Diagnostic & 20% Off Clinic',
      description: 'Computerized 3D analysis + 20% savings on 1st HydraFacial or Laser.',
      discountPercent: 20,
      couponCode: 'CLINIC20',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'bc-gal-1',
      title: 'Indiranagar Flagship Sanctuary Lounge',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'bc-gal-2',
      title: 'US-FDA Clinical Dermatology Suite',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'bc-gal-3',
      title: 'Balinese Aromatherapy Spa Suite',
      category: 'interior',
      imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80'
    }
  ],
  items: [
    {
      id: 'item-haircut',
      name: 'Bespoke Precision Haircut & Styling',
      category: 'Salon',
      price: 950,
      description: 'Face contour consultation, wash, masque condition, and blowout finish.',
      isAvailable: true
    },
    {
      id: 'item-hydrafacial',
      name: 'HydraFacial MD Elite (US-FDA 4-Step Vortex)',
      category: 'Clinic',
      price: 6500,
      description: 'Medical-grade vortex extraction, antioxidant infusion, zero downtime glow.',
      isAvailable: true
    },
    {
      id: 'item-balinese',
      name: 'Authentic Balinese Aromatherapy Massage',
      category: 'Spa',
      price: 3200,
      description: '60-min tension release with essential flower oils and warm herbal compresses.',
      isAvailable: true
    }
  ]
};

