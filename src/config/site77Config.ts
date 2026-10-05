/**
 * Centralized Configuration for SITE #77
 * NOCTURNA LUXURY NIGHTCLUB & WATERFRONT LOUNGE — GOA
 * Inspired by Hammerzz Club Goa architecture & luxury nightlife experience
 */

export const site77Config = {
  // Brand Configuration
  BRAND_NAME: 'NOCTURNA',
  LEGAL_NAME: 'Nocturna Luxury Nightlife & Hospitality Private Limited',
  TAGLINE: 'Where The Night Transcends Reality',
  SUBTITLE: 'Goa’s Premier Luxury Nightclub & Waterfront Ultra Lounge',
  WORDMARK: 'NOCTURNA GOA',
  FOUNDED_YEAR: '2021',

  // Contact Information
  PHONE: '+919823107777',
  PHONE_DISPLAY: '+91 98231 07777',
  TOLL_FREE: '1800 212 7777',
  WHATSAPP: '+919823107777',
  WHATSAPP_DISPLAY: '+91 98231 07777',
  WHATSAPP_DEFAULT_MSG: 'Hello Nocturna Concierge, I would like to reserve a VIP table for tonight.',
  EMAIL: 'vip@nocturnaclubgoa.com',
  BOOKINGS_EMAIL: 'reservations@nocturnaclubgoa.com',
  FRANCHISE_EMAIL: 'franchise@nocturnaclubgoa.com',

  // Location & Hours
  ADDRESS: 'Atelier 77, Waterfront Promenade, Baga Creek Road, Arpora, North Goa, Goa 403516',
  CITY: 'North Goa',
  STATE: 'Goa',
  PINCODE: '403516',
  COUNTRY: 'India',
  MAPS_URL: 'https://maps.google.com/?q=Baga+Creek+Road+Arpora+Goa',
  LANDMARK: 'Overlooking Baga Creek & Arpora Waterfront',
  OPENING_HOURS: 'Mon – Sun: 9:00 PM – 4:30 AM IST (Open 365 Nights)',

  // Social Links
  INSTAGRAM: 'https://instagram.com/nocturnaclubgoa',
  FACEBOOK: 'https://facebook.com/nocturnaclubgoa',
  YOUTUBE: 'https://youtube.com/@nocturnaclubgoa',
  SPOTIFY: 'https://spotify.com/artist/nocturnasessions',
  WEBSITE_URL: 'https://nocturnaclubgoa.com',

  // Design Palette (High-end Luxury Nightlife)
  COLORS: {
    bgDark: '#07080A',
    bgCard: '#0F1115',
    bgElevated: '#161920',
    goldPrimary: '#D4AF37',
    goldBright: '#F3E5AB',
    goldMuted: '#997D2D',
    champagne: '#E6CA65',
    charcoal: '#1A1C22',
    borderGold: 'rgba(212, 175, 55, 0.25)',
    borderDark: 'rgba(255, 255, 255, 0.08)',
    textPrimary: '#FFFFFF',
    textSecondary: '#9CA3AF',
    neonPurple: '#9333EA',
    neonBlue: '#2563EB',
    neonAmber: '#F59E0B'
  },

  // Fonts
  FONTS: {
    heading: 'Cormorant Garamond, serif',
    body: 'Inter, sans-serif',
    mono: 'Space Grotesk, monospace'
  },

  // Club Key Specifications
  STATS: [
    { value: '25,000+', label: 'Sq. Ft. Nightlife Arena' },
    { value: '360°', label: 'Void Acoustic Sound System' },
    { value: '120+', label: 'Kinetic Beam Lights' },
    { value: '50+', label: 'International Resident Artists' },
    { value: '4.9★', label: '12,000+ Clubber Reviews' }
  ],

  // VIP Table Categories
  TABLE_TIERS: [
    {
      id: 'table-dancefloor',
      name: 'Dance Floor High Table',
      capacity: 'Up to 4 Guests',
      minSpend: 15000,
      minSpendFormatted: '₹15,000',
      description: 'Right in the heart of the electric dance floor with high-energy proximity to the main DJ stage.',
      features: ['Dedicated table steward', 'Express VIP security entry', '1 Premium bottle credit', 'Unlimited mixers']
    },
    {
      id: 'table-mezzanine',
      name: 'Diamond VIP Mezzanine',
      capacity: 'Up to 8 Guests',
      minSpend: 35000,
      minSpendFormatted: '₹35,000',
      description: 'Elevated luxury mezzanine overlooking the entire crowd and 3D kinetic lighting spectacle.',
      features: ['Plush velvet curved booth', 'Private bouncer stationed at staircase', 'Dedicated mixologist', 'Complimentary Champagne Welcome Bottle', 'Gourmet tapas service']
    },
    {
      id: 'table-stage',
      name: 'Stage-Side DJ Booth Table',
      capacity: 'Up to 10 Guests',
      minSpend: 75000,
      minSpendFormatted: '₹75,000',
      description: 'The ultimate power table located adjacent to the guest headline DJ with exclusive stage access.',
      features: ['Personal butler & security detail', 'Direct DJ booth interaction', 'Dom Pérignon & Grey Goose included', 'Private valet pickup', 'Custom celebration sparkler show']
    },
    {
      id: 'table-waterfront',
      name: 'Royal Waterfront Cabana',
      capacity: 'Up to 15 Guests',
      minSpend: 100000,
      minSpendFormatted: '₹1,00,000',
      description: 'Private open-air riverfront luxury cabana with private bar, hookah lounge and ambient moonlight breeze.',
      features: ['Exclusive open-air waterfront deck', 'Personal celebrity chef curation', 'Unlimited premium spirits & single malts', 'Private bathroom suite', 'Bespoke fireworks/sparkler display']
    }
  ],

  // Age & Dress Code Policy
  POLICIES: {
    minimumAge: 21,
    dressCode: 'Glamorous Chic & Smart Casuals strictly enforced. Collared shirts or stylish clubwear for gentlemen. Closed shoes mandatory. No slippers, beachwear, athletic shorts, or sleeveless undershirts.',
    stagsPolicy: 'Single gentlemen admitted strictly subject to prior management screening or accompanied by couples.',
    idMandatory: 'Government-issued photo identification (Passport, Driving License, Voter ID, Aadhaar) required at door inspection.'
  }
};
