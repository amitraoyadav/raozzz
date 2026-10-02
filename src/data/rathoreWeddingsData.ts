import { BusinessWebsite } from '../types';
import { RATHORE_SERVICES, RATHORE_PORTFOLIO } from '../components/rathoreweddings/rathoreData';

export const RATHORE_WEDDINGS_WEBSITE: BusinessWebsite = {
  id: 'site-rathore-weddings-57',
  slug: 'rathore-weddings',
  businessName: 'RATHORE WEDDINGS',
  category: 'wedding_event_planning' as any,
  templateId: 'luxury_event_planning',
  tagline: 'Best Wedding Planners in Delhi · Luxury Destination Weddings & Decor',
  description: 'Rathore Weddings creates luxury weddings, royal destination celebrations, bespoke decor, and unforgettable experiences across Delhi NCR, Jaipur, Udaipur, Goa, and overseas.',
  ownerName: 'Rathore Weddings Private Limited',
  phone: '+91-9810196863',
  whatsapp: '+919810196863',
  email: 'info@rathoreweddings.in',
  address: 'B-29, Geetanjali Enclave Near Aurobindo College, New Delhi-110017',
  city: 'Delhi NCR, Jaipur, Udaipur, Goa, Mussoorie',
  mapsUrl: 'https://maps.google.com/?q=Geetanjali+Enclave+New+Delhi',
  openingHours: 'Mon - Sun: 9:00 AM - 8:30 PM (Consultations 24x7)',
  primaryColor: '#FFD481',
  secondaryColor: '#121319',
  logoUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&auto=format&fit=crop&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600&auto=format&fit=crop&q=80',
  bookingType: 'consultation_quote',
  bookingCtaLabel: 'Book a Free Consultation',
  specialBadge: 'Site #57 · Wedding & Event Planning Category',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 89999,
  paymentStatus: 'paid',
  sections: [
    { id: 'hero', title: 'Where Love Becomes a Celebration', isEnabled: true, order: 1 },
    { id: 'services', title: 'Our Complete Wedding Planning Services', isEnabled: true, order: 2 },
    { id: 'ceremony', title: 'Wedding Ceremony', isEnabled: true, order: 3 },
    { id: 'featured', title: 'Featured Weddings', isEnabled: true, order: 4 },
    { id: 'testimonials', title: 'What Our Clients Are Saying', isEnabled: true, order: 5 },
    { id: 'portfolio', title: 'Our Amazing Work', isEnabled: true, order: 6 },
    { id: 'inquiry', title: 'Make an Inquiry', isEnabled: true, order: 7 },
    { id: 'about', title: 'About Rathore Weddings', isEnabled: true, order: 8 },
    { id: 'styles', title: 'Wedding Styles We Bring to Life', isEnabled: true, order: 9 },
    { id: 'process', title: 'Our Wedding Management Process', isEnabled: true, order: 10 },
    { id: 'why-us', title: 'Why Choose Rathore Weddings?', isEnabled: true, order: 11 },
    { id: 'faqs', title: 'Frequently Asked Questions', isEnabled: true, order: 12 },
    { id: 'blogs', title: 'Our Latest Blogs', isEnabled: true, order: 13 }
  ],
  offers: [
    {
      id: 'offer-rw-consult',
      title: 'Complimentary Wedding Feasibility & Budget Plan',
      description: 'Book your 2026/2027 wedding with Rathore Weddings and receive a comprehensive 3D concept deck and venue feasibility study.',
      discountPercent: 10,
      couponCode: 'RATHOREROYAL',
      isActive: true
    }
  ],
  gallery: RATHORE_PORTFOLIO.map((p) => ({
    id: p.id,
    title: p.title,
    category: p.category,
    imageUrl: p.image
  })),
  items: RATHORE_SERVICES.map((s) => ({
    id: s.id,
    name: s.title,
    description: s.shortDesc,
    price: 150000,
    discountPrice: 150000,
    category: 'Wedding Planning',
    imageUrl: s.image,
    isAvailable: true,
    badge: 'Core Service'
  }))
};
