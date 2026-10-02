import { BusinessWebsite } from '../types';
import { LUXESPACE_PACKAGES, LUXESPACE_GALLERY } from '../components/luxespace/luxeSpaceData';

export const LUXESPACE_WEBSITE: BusinessWebsite = {
  id: 'site-luxespace-htx-59',
  slug: 'luxespace-htx',
  businessName: 'LUXESPACE HTX',
  category: 'wedding' as any,
  templateId: 'luxury_event_venue',
  tagline: 'Designed for the Refined | Modern Houston Event & Wedding Venue',
  description: 'A refined setting for life’s most meaningful celebrations. LuxeSpace is a modern Houston event venue accommodating up to 150 guests, thoughtfully designed for weddings, milestone celebrations, showers, and private gatherings.',
  ownerName: 'LuxeSpace HTX Event Venue LLC',
  phone: '(713) 555-0192',
  whatsapp: '+17135550192',
  email: 'info@luxespacehtx.com',
  address: 'Houston, Texas (HTX)',
  city: 'Houston, Texas',
  mapsUrl: 'https://maps.google.com/?q=Houston+Texas',
  openingHours: 'Mon - Sun: 9:00 AM - 10:00 PM (Private Tours By Appointment)',
  primaryColor: '#c5a059',
  secondaryColor: '#0e0d0b',
  logoUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&auto=format&fit=crop&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1600&auto=format&fit=crop&q=80',
  bookingType: 'consultation_quote',
  bookingCtaLabel: 'Book a Private Tour',
  specialBadge: 'Site #59 · Wedding Category',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 95000,
  paymentStatus: 'paid',
  sections: [
    { id: 'hero', title: 'Designed for the Refined', isEnabled: true, order: 1 },
    { id: 'the-venue', title: 'The Venue & Architectural Details', isEnabled: true, order: 2 },
    { id: 'weddings', title: 'Weddings & Celebrations', isEnabled: true, order: 3 },
    { id: 'packages', title: 'Transparent Rental Packages', isEnabled: true, order: 4 },
    { id: 'celebrations', title: 'Birthdays, Showers & Milestones', isEnabled: true, order: 5 },
    { id: 'experience', title: 'The LuxeSpace Experience', isEnabled: true, order: 6 },
    { id: 'gallery', title: 'Curated Venue Gallery', isEnabled: true, order: 7 },
    { id: 'faqs', title: 'Frequently Asked Questions', isEnabled: true, order: 8 }
  ],
  offers: [
    {
      id: 'offer-luxespace-tour',
      title: 'Complimentary 48-Hour Date Hold',
      description: 'Book your private walkthrough today and enjoy a complimentary 48-hour date hold with our HoneyBook portal.',
      discountPercent: 10,
      couponCode: 'LUXETOUR2026',
      isActive: true
    }
  ],
  items: LUXESPACE_PACKAGES.map((pkg) => ({
    id: pkg.id,
    name: pkg.name,
    description: pkg.subtitle + ' — ' + pkg.idealFor,
    price: parseInt(pkg.startingPrice.replace(/[^0-9]/g, ''), 10) || 5000,
    category: 'Wedding Packages',
    isAvailable: true,
    isFeatured: true,
    badge: pkg.guestCapacity,
    specifications: pkg.features.join(' • ')
  })),
  gallery: LUXESPACE_GALLERY.map((g) => ({
    id: g.id,
    title: g.title,
    category: 'interior',
    imageUrl: g.imageUrl
  }))
};
