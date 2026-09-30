import { BusinessWebsite } from '../types';
import { VEENA_PACKAGES } from './veenaWorldData';

export const VEENA_WORLD_WEBSITE: BusinessWebsite = {
  id: 'veena-world',
  slug: 'veena-world',
  businessName: 'Veena World',
  category: 'tour_travel' as any,
  templateId: 'veena-world',
  tagline: 'Travel, Explore, Celebrate Life — India & World Escorted Group Tours',
  description: 'India’s premier travel and tour operator founded by Veena Patil. Offering all-inclusive domestic & international holiday packages, Women’s Special, Senior’s Special, and custom holidays with caring tour managers and Indian meals.',
  ownerName: 'Veena Patil & Sudhir Patil',
  phone: '1800 22 7979',
  whatsapp: '+91 88799 72222',
  email: 'travel@veenaworld.com',
  address: 'Neelkanth Corporate Park, 4th Floor, Kirol Road, Vidyavihar (West)',
  city: 'Mumbai',
  mapsUrl: 'https://maps.google.com/?q=Veena+World+Vidyavihar+Mumbai',
  openingHours: 'Mon - Sun: 9:00 AM – 9:00 PM IST',
  coverUrl: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#0F2C59',
  secondaryColor: '#FDB813',
  fontFamily: 'Inter',
  bookingType: 'appointment_consult' as any,
  bookingCtaLabel: 'Book Tour Package',
  specialBadge: '10 Lakh+ Happy Guests',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 24999,
  paymentStatus: 'paid',
  offers: [
    {
      id: 'vw-early-bird',
      title: 'Summer 2026 Early Bird Special',
      description: 'Save up to ₹15,000 per family on Europe & Kashmir confirmed bookings.',
      discountPercent: 15,
      couponCode: 'CELEBRATE15',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'vw-gal-1',
      title: 'Kashmir Dal Lake Houseboat',
      category: 'exterior',
      imageUrl: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'vw-gal-2',
      title: 'Switzerland Mt Titlis Snow Peaks',
      category: 'exterior',
      imageUrl: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'vw-gal-3',
      title: 'Dubai Downtown & Burj Khalifa',
      category: 'exterior',
      imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'vw-gal-4',
      title: 'Rajasthan Royal Heritage Palace',
      category: 'exterior',
      imageUrl: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80'
    }
  ],
  items: VEENA_PACKAGES.map(pkg => ({
    id: pkg.id,
    name: pkg.title,
    description: `${pkg.durationDays}D / ${pkg.durationNights}N — ${pkg.route}`,
    price: pkg.priceInr,
    discountPrice: pkg.originalPriceInr || pkg.priceInr,
    category: pkg.category === 'india' ? 'Incredible India Tours' : 'World Tour Packages',
    isAvailable: true,
    badge: pkg.badge || `${pkg.durationDays} Days`
  })),
  sections: [
    { id: 'hero', title: 'Home & Search', isEnabled: true, order: 1 },
    { id: 'speciality', title: 'Speciality Tours', isEnabled: true, order: 2 },
    { id: 'destinations', title: 'Top Destinations', isEnabled: true, order: 3 },
    { id: 'packages', title: 'Tour Packages', isEnabled: true, order: 4 },
    { id: 'why-us', title: 'Why Veena World', isEnabled: true, order: 5 },
    { id: 'reviews', title: 'Travel Stories', isEnabled: true, order: 6 },
    { id: 'contact', title: 'Offices & Support', isEnabled: true, order: 7 }
  ],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
