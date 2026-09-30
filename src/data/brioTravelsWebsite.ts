import { BusinessWebsite } from '../types';
import { POPULAR_TOURS } from '../demos/tour-travel/brio-travels/data/brioTravelsData';

export const BRIO_TRAVELS_WEBSITE: BusinessWebsite = {
  id: 'brio-travels',
  slug: 'brio-travels',
  businessName: 'Brio Travels (Demo)',
  category: 'tour_travel' as any,
  templateId: 'brio-travels',
  tagline: 'Best Travel Agency in Delhi · 4.9k Happy Travellers · Domestic & Global Holidays',
  description: 'Delhi-based tour & travel agency specializing in 30 domestic circuits, 15 international vacations, honeymoon pool villas, same-day Agra Taj Mahal tours, and chauffeur car rentals.',
  ownerName: 'Brio Travels Delhi',
  phone: '+91-00000-00000',
  whatsapp: '+91-00000-00000',
  email: 'info@example.com',
  address: 'Connaught Place, Inner Circle, New Delhi - 110001',
  city: 'New Delhi',
  mapsUrl: 'https://maps.google.com/?q=Connaught+Place+New+Delhi',
  openingHours: 'Mon - Sat: 10:00 AM – 7:00 PM',
  coverUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#0D9488',
  secondaryColor: '#F97316',
  fontFamily: 'Poppins',
  bookingType: 'appointment_consult' as any,
  bookingCtaLabel: 'View Demo',
  specialBadge: 'New Demo',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 9999,
  paymentStatus: 'paid',
  offers: [
    {
      id: 'brio-offer-1',
      title: 'Flat 15% Early Bird Discount',
      description: 'Book your domestic or international holiday package 30 days in advance.',
      discountPercent: 15,
      couponCode: 'BRIO15',
      startDate: '2026-01-01',
      endDate: '2026-12-31',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'bg-1',
      imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
      title: 'Taj Mahal Sunrise Tour',
      category: 'Heritage'
    },
    {
      id: 'bg-2',
      imageUrl: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80',
      title: 'Kashmir Houseboats & Gulmarg',
      category: 'Hills'
    },
    {
      id: 'bg-3',
      imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
      title: 'Dubai Luxury Desert Safari',
      category: 'International'
    }
  ],
  items: POPULAR_TOURS.map(pkg => ({
    id: pkg.id,
    name: pkg.title,
    description: pkg.subtitle,
    price: pkg.startingPrice,
    discountPrice: pkg.startingPrice,
    category: pkg.category === 'domestic' ? 'Domestic Tours' : 'International Tours',
    isAvailable: true,
    badge: pkg.duration,
    imageUrl: pkg.coverImage
  })),
  sections: [
    { id: 'hero', title: 'Home', isEnabled: true, order: 1 },
    { id: 'about', title: 'About Us', isEnabled: true, order: 2 },
    { id: 'domestic', title: 'Domestic Tours (30)', isEnabled: true, order: 3 },
    { id: 'international', title: 'International Tours (15)', isEnabled: true, order: 4 },
    { id: 'honeymoon', title: 'Honeymoon Packages', isEnabled: true, order: 5 },
    { id: 'taj-mahal', title: 'Taj Mahal Same Day', isEnabled: true, order: 6 },
    { id: 'rentals', title: 'Car Rentals', isEnabled: true, order: 7 },
    { id: 'contact', title: 'Contact Desk', isEnabled: true, order: 8 }
  ],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
