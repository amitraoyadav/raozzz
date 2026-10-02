import { BusinessWebsite } from '../types';

export const LAWLINKS_WEBSITE: BusinessWebsite = {
  id: 'site-lawlinks-61',
  slug: 'lawlinks',
  businessName: 'Law Links',
  category: 'lawyer',
  templateId: 'legal_advocates_consultants',
  tagline: 'Advocates & Legal Consultants',
  description: 'Law Links is a premier boutique law firm in New Delhi and Bengaluru providing broad-ranging litigation, arbitration, dispute resolution, mediation, and transactional advisory services across India with over 500 reported Supreme Court judgments.',
  ownerName: 'Ms. Lalit Mohini Bhat, Mr. Naveen R. Nath & Ms. Hetu Arora Sethi',
  phone: '011-43017435',
  whatsapp: '+911143017435',
  email: 'mail@lawlinksoffice.com',
  address: 'C-47 (LGF), Nizamuddin East',
  city: 'New Delhi',
  mapsUrl: 'https://maps.google.com/?q=Nizamuddin+East+New+Delhi',
  openingHours: 'Mon - Sat: 9:30 AM - 7:30 PM',
  primaryColor: '#03A9F5',
  secondaryColor: '#1a2332',
  logoUrl: '/assets/lawlinks/logo.png',
  coverUrl: '/assets/lawlinks/banner4.png',
  bookingType: 'consultation_quote',
  bookingCtaLabel: 'Request Legal Consultation',
  specialBadge: 'Site #61 · Advocates & Legal Consultants',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 0,
  paymentStatus: 'paid',
  sections: [
    { id: 'about', title: 'About Law Links', isEnabled: true, order: 1 },
    { id: 'practice-areas', title: 'Practice Areas & Forums', isEnabled: true, order: 2 },
    { id: 'industry-sectors', title: '32 Industry Sectors', isEnabled: true, order: 3 },
    { id: 'team', title: 'Seasoned Advocates & Partners', isEnabled: true, order: 4 },
    { id: 'clients', title: 'Key Corporate & Institutional Clients', isEnabled: true, order: 5 },
    { id: 'publications', title: 'Legal Publications & Research', isEnabled: true, order: 6 },
    { id: 'gallery', title: 'Photo & Video Gallery', isEnabled: true, order: 7 },
    { id: 'career', title: 'Internships & Careers', isEnabled: true, order: 8 },
    { id: 'contact', title: 'Delhi & Bengaluru Offices', isEnabled: true, order: 9 }
  ],
  offers: [
    {
      id: 'offer-pre-litigation-advisory',
      title: 'Pre-Litigation & Arbitration Case Assessment',
      description: 'Comprehensive risk and dispute assessment before proceeding to High Courts or Supreme Court.',
      discountPercent: 0,
      couponCode: 'LAWLINKS2026',
      isActive: true
    }
  ],
  items: [
    {
      id: 'item-litigation',
      name: 'Supreme Court & High Court Litigation',
      description: 'Representation in civil, criminal, constitutional, and service matters with 500+ reported Supreme Court judgments.',
      price: 0,
      category: 'Practice Areas',
      isAvailable: true,
      isFeatured: true,
      badge: 'Core Practice'
    },
    {
      id: 'item-arbitration',
      name: 'Domestic & International Commercial Arbitration',
      description: 'Pre-dispute negotiations, Section 9/11/34 petitions, award enforcement, and arbitrator appointments.',
      price: 0,
      category: 'Practice Areas',
      isAvailable: true,
      isFeatured: true,
      badge: 'High Stakes'
    },
    {
      id: 'item-mediation',
      name: 'Dispute Resolution - Mediation & Conciliation',
      description: 'Over 500 conducted mediations with 70% success rate, pioneer in Online Dispute Resolution (ODR).',
      price: 0,
      category: 'Practice Areas',
      isAvailable: true,
      isFeatured: true,
      badge: 'ADR'
    },
    {
      id: 'item-corporate',
      name: 'Transactional & Corporate Advisory',
      description: 'Company secretarial, corporate governance, commercial contract drafting, mergers & acquisitions, and compliance.',
      price: 0,
      category: 'Corporate Advisory',
      isAvailable: true,
      isFeatured: true,
      badge: 'Advisory'
    },
    {
      id: 'item-specialization',
      name: 'Specialization in Public Law & Industry Regulations',
      description: 'Land acquisition, electricity, competition, insolvency (IBC), intellectual property, and environmental law.',
      price: 0,
      category: 'Specialization',
      isAvailable: true,
      isFeatured: true,
      badge: 'Regulatory'
    }
  ],
  gallery: [
    {
      id: 'g-ll-1',
      title: 'Supreme Court Briefing Session',
      category: 'Conferences',
      imageUrl: '/assets/lawlinks/photo-1.jpg'
    },
    {
      id: 'g-ll-2',
      title: 'Arbitration Hearing Panel',
      category: 'Arbitration',
      imageUrl: '/assets/lawlinks/photo-2.jpg'
    },
    {
      id: 'g-ll-3',
      title: 'High Court Legal Consultations',
      category: 'Team',
      imageUrl: '/assets/lawlinks/photo-3.jpg'
    },
    {
      id: 'g-ll-4',
      title: 'Law Links Office Library',
      category: 'Office',
      imageUrl: '/assets/lawlinks/photo-4.jpg'
    }
  ]
};
