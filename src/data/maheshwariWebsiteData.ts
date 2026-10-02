import { BusinessWebsite } from '../types';

export const MAHESHWARI_WEBSITE: BusinessWebsite = {
  id: 'site-maheshwari-62',
  slug: 'maheshwari',
  businessName: 'Maheshwari & Co.',
  category: 'lawyer',
  templateId: 'legal_advocates_consultants',
  tagline: 'Leading Full Service Law Firm in Delhi, India',
  description: 'Maheshwari & Co. is an acclaimed full-service law firm with offices in New Delhi and Mumbai, and an associate presence in New York. Providing market-leading advocacy in Corporate & Commercial, Litigation, Arbitration, Intellectual Property, Energy & Infrastructure, and TMT.',
  ownerName: 'Mr. Vipul Maheshwari & Partners',
  phone: '+91 9643106874',
  whatsapp: '+919643106874',
  email: 'info@maheshwariandco.com',
  address: 'B 7/1, Safdarjung Enclave Extension',
  city: 'New Delhi',
  mapsUrl: 'https://maps.google.com/?q=Safdarjung+Enclave+Extension+New+Delhi+110029',
  openingHours: 'Mon - Sat: 9:00 AM - 7:30 PM',
  primaryColor: '#8B1E2B',
  secondaryColor: '#1F242C',
  logoUrl: '/assets/maheshwari/logo-1.png',
  coverUrl: '/assets/maheshwari/Corporate-Commercial-1.jpg',
  bookingType: 'consultation_quote',
  bookingCtaLabel: 'Request Legal Consultation',
  specialBadge: 'Site #62 · Premier Full Service Law Firm',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 0,
  paymentStatus: 'paid',
  sections: [
    { id: 'about', title: 'About Maheshwari & Co.', isEnabled: true, order: 1 },
    { id: 'practice-areas', title: '11 Core Practice Areas', isEnabled: true, order: 2 },
    { id: 'attorneys', title: 'Partners & Legal Experts', isEnabled: true, order: 3 },
    { id: 'awards', title: 'Awards & Accolades', isEnabled: true, order: 4 },
    { id: 'insights', title: 'Legal Updates & Publications', isEnabled: true, order: 5 },
    { id: 'testimonials', title: 'Client Endorsements', isEnabled: true, order: 6 },
    { id: 'gallery', title: 'Chambers & Event Gallery', isEnabled: true, order: 7 },
    { id: 'careers', title: 'Join Our Team', isEnabled: true, order: 8 },
    { id: 'contact', title: 'Delhi, Mumbai & Global Offices', isEnabled: true, order: 9 }
  ],
  offers: [
    {
      id: 'offer-maheshwari-consultation',
      title: 'Corporate & Dispute Resolution Strategic Consultation',
      description: 'Senior partner evaluation of cross-border transactions, high-stakes litigation, or DPDP compliance.',
      discountPercent: 0,
      couponCode: 'MAHESHWARI2026',
      isActive: true
    }
  ],
  items: [
    {
      id: 'item-m-corp',
      name: 'Corporate & Commercial M&A Advisory',
      description: 'End-to-end legal structuring for mergers, private equity fundraises, and cross-border commercial pacts.',
      price: 0,
      category: 'Practice Areas',
      isAvailable: true,
      isFeatured: true,
      badge: 'Tier-1 Rated'
    },
    {
      id: 'item-m-lit',
      name: 'Supreme Court & High Court Advocacy',
      description: 'Seasoned trial and appellate advocacy across commercial courts, High Courts, and the Supreme Court of India.',
      price: 0,
      category: 'Practice Areas',
      isAvailable: true,
      isFeatured: true,
      badge: 'Benchmark Ranked'
    },
    {
      id: 'item-m-arb',
      name: 'Domestic & International Commercial Arbitration',
      description: 'Representation under UNCITRAL, SIAC, LCIA, and ICC rules for infrastructure and cross-border commercial claims.',
      price: 0,
      category: 'Practice Areas',
      isAvailable: true,
      isFeatured: true,
      badge: 'Global ADR'
    },
    {
      id: 'item-m-ip',
      name: 'Intellectual Property Protection & Enforcement',
      description: 'Patents, trademarks, copyright prosecution, anti-counterfeiting raids, and cross-border brand defense.',
      price: 0,
      category: 'Practice Areas',
      isAvailable: true,
      isFeatured: true,
      badge: 'IP Leader'
    },
    {
      id: 'item-m-tmt',
      name: 'Technology, Media & DPDP Data Privacy',
      description: 'Full statutory compliance with the Digital Personal Data Protection Act 2023, cyber incident protocols, and IT laws.',
      price: 0,
      category: 'Practice Areas',
      isAvailable: true,
      isFeatured: true,
      badge: 'AsiaLaw Ranked'
    },
    {
      id: 'item-m-energy',
      name: 'Energy, Solar & Green Hydrogen Mission',
      description: 'Power purchase agreements, EPC contracts, environmental clearances, and concessions for renewable infrastructure.',
      price: 0,
      category: 'Practice Areas',
      isAvailable: true,
      isFeatured: true,
      badge: 'Infrastructure'
    }
  ],
  gallery: [
    {
      id: 'g-m-1',
      title: 'Maheshwari & Co. Headquarters & Research Chambers',
      category: 'Office',
      imageUrl: '/assets/maheshwari/Corporate-Commercial-1.jpg'
    },
    {
      id: 'g-m-2',
      title: 'Managing Partner Chambers - Safdarjung Enclave',
      category: 'Office',
      imageUrl: '/assets/maheshwari/18-555x600.jpg'
    },
    {
      id: 'g-m-3',
      title: 'Book Launch Event at India International Centre (IIC)',
      category: 'Events',
      imageUrl: '/assets/maheshwari/Litigation.jpg'
    },
    {
      id: 'g-m-4',
      title: 'Clean EDGE Tech Mission - Bilateral Energy Roundtable',
      category: 'Roundtables',
      imageUrl: '/assets/maheshwari/Sports-Entertainment.png'
    },
    {
      id: 'g-m-5',
      title: 'Platina, Bandra Kurla Complex (BKC) Mumbai Chambers',
      category: 'Office',
      imageUrl: '/assets/maheshwari/Intellectual-Property-.jpg'
    }
  ]
};
