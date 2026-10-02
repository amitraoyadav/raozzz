import { BusinessWebsite } from '../types';
import { SMLW_VENUES } from '../components/smlwweddings/smlwData';

export const SMLW_WEDDINGS_WEBSITE: BusinessWebsite = {
  id: 'site-smlw-weddings-56',
  slug: 'smlwindia',
  businessName: 'SHUBH MUHURAT LUXURY WEDDINGS (SMLW)',
  category: 'wedding' as any,
  templateId: 'luxury_wedding_portal',
  tagline: 'Best Destination Wedding Planners in Delhi, NCR & Pan-India',
  description: 'Shubh Muhurat Luxury Weddings (SMLW) is India’s premier Destination Wedding Planning & Luxury Venue discovery company. Specializing in royal palace weddings in Jaipur & Udaipur, sunset beach ceremonies in Goa & Thailand, and grand farmhouses across Delhi NCR.',
  ownerName: 'Shubh Muhurat Luxury Weddings India Pvt. Ltd.',
  phone: '+91 97174 30005',
  whatsapp: '+919717430005',
  email: 'smlwindia@gmail.com',
  address: 'Connaught Place / Barakhamba Road, New Delhi, India – 110001',
  city: 'Delhi NCR, Jaipur, Udaipur, Goa, Mumbai, Thailand, Dubai',
  mapsUrl: 'https://maps.google.com/?q=Connaught+Place+New+Delhi',
  openingHours: 'Mon - Sun: 9:00 AM - 9:00 PM (24x7 Concierge Hotline: +91 97174 30005)',
  primaryColor: '#d2cd48',
  secondaryColor: '#121318',
  logoUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&auto=format&fit=crop&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600&auto=format&fit=crop&q=80',
  bookingType: 'consultation_quote',
  bookingCtaLabel: 'Check Real-Time Availability',
  specialBadge: 'Site #56 · Wedding Category',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 89999,
  paymentStatus: 'paid',
  sections: [
    { id: 'hero', title: 'Royal Venue for Your Special Day', isEnabled: true, order: 1 },
    { id: 'search', title: 'Real-Time Venue Search Bar', isEnabled: true, order: 2 },
    { id: 'locations', title: 'Domestic & International Locations', isEnabled: true, order: 3 },
    { id: 'venues', title: 'Curated Luxury Venues', isEnabled: true, order: 4 },
    { id: 'types', title: 'Types of Luxury Weddings', isEnabled: true, order: 5 },
    { id: 'international', title: 'Global Wedding Destinations', isEnabled: true, order: 6 },
    { id: 'services', title: 'Services We Provide', isEnabled: true, order: 7 },
    { id: 'videos', title: 'Real Wedding Cinematic Videos', isEnabled: true, order: 8 },
    { id: 'testimonials', title: 'Celebrity & Client Testimonials', isEnabled: true, order: 9 },
    { id: 'faqs', title: 'Frequently Asked Questions', isEnabled: true, order: 10 }
  ],
  offers: [
    {
      id: 'offer-smlw-early',
      title: 'Free Destination Site Inspection Trip',
      description: 'Book your 2026/2027 wedding with SMLW and receive a complimentary 2-night recce stay at selected partner palace resorts.',
      discountPercent: 10,
      couponCode: 'SMLWRECCE',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'sg-1',
      title: 'Grand Palace Varmala Stage',
      category: 'exterior',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'sg-2',
      title: 'Sunset Beachfront Wedding at W Goa',
      category: 'exterior',
      imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'sg-3',
      title: 'The Oberoi Udaivilas Lakefront Mandap',
      category: 'exterior',
      imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'sg-4',
      title: 'Royal Baraat Carriage Procession',
      category: 'events',
      imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80'
    }
  ],
  items: SMLW_VENUES.map((v) => ({
    id: v.id,
    name: v.name,
    description: v.description,
    price: v.priceStartingLakhs * 100000,
    discountPrice: v.priceStartingLakhs * 100000,
    category: v.city,
    imageUrl: v.featuredImage,
    isAvailable: true,
    badge: `${v.category} · ${v.guestMax} Guests`
  }))
};
