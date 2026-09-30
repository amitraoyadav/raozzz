import { BusinessWebsite } from '../types';

export const TOUR_TRAVEL_2_WEBSITE: BusinessWebsite = {
  id: 'tour-travel-2',
  slug: 'tour-travel-2',
  businessName: 'VenturePulse Holidays',
  category: 'travel',
  templateId: 'modern',
  tagline: 'Custom Holiday Packages, Curated Stays & 24/7 On-Ground Support',
  description: 'Premier tour and travel agency offering handcrafted domestic & international holiday packages across Sikkim, Himachal, Kashmir, Andaman, Kerala, Spiti, Bhutan, Ladakh, Thailand, Uttarakhand, and Rajasthan.',
  ownerName: 'VenturePulse Travel Desk',
  phone: '+91-00000-00000',
  whatsapp: '+91-00000-00000',
  email: 'hello@example.com',
  address: 'Suite 402, Himalayan Heights, Connaught Circus, New Delhi, India',
  city: 'New Delhi',
  mapsUrl: 'https://maps.google.com',
  openingHours: 'Mon - Sun: 24/7 Customer Support',
  logoUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=200&q=80',
  coverUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
  primaryColor: '#0A192F',
  secondaryColor: '#FF6B35',
  fontFamily: 'Inter',
  bookingType: 'general',
  bookingCtaLabel: 'View Demo',
  specialBadge: '40,000+ Travelers',
  referenceSiteId: 'tour-travel-2',
  referenceSiteName: 'VenturePulse Holidays',
  referenceSiteUrl: 'https://realitytoursandtravel.com/delhi/',
  referenceFeatures: 'High-converting tour operator portal with regional carousels, seasonal calendar filter, theme explorer, transparent day-by-day itineraries, and instant quote inquiry.',
  designSignature: {
    palette: {
      baseBg: '#0A192F',
      surfaceBg: '#ffffff',
      textColor: '#ffffff',
      bodyTextColor: '#1E293B',
      accentColor: '#FF6B35',
      secondaryAccent: '#F97316'
    },
    typography: {
      headlineFont: 'Plus Jakarta Sans, sans-serif',
      bodyFont: 'Inter, sans-serif',
      fontPairingLabel: 'Plus Jakarta Sans + Inter'
    },
    layoutArchetype: 'bold-editorial',
    heroArchetype: 'split-form',
    navStyle: 'solid-compact',
    catalogStyle: 'grid-cards',
    bookingStyle: 'general',
    vibeTag: 'Tour & Travel'
  },
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 1999,
  paymentStatus: 'paid',
  createdAt: '2026-09-30T00:00:00.000Z',
  updatedAt: '2026-09-30T00:00:00.000Z',
  sections: [
    { id: 'hero', title: 'Home', isEnabled: true, order: 1 },
    { id: 'packages', title: 'Top Holiday Packages', isEnabled: true, order: 2 },
    { id: 'destinations', title: 'Popular Destinations', isEnabled: true, order: 3 },
    { id: 'themes', title: 'Travel Themes', isEnabled: true, order: 4 },
    { id: 'seasons', title: 'Seasonal Picks', isEnabled: true, order: 5 },
    { id: 'blogs', title: 'Travel Stories & Blogs', isEnabled: true, order: 6 },
    { id: 'contact', title: 'Contact Us', isEnabled: true, order: 7 }
  ],
  items: [
    {
      id: 'item-tt2-1',
      name: 'Gangtok & High Altitude North Sikkim Odyssey',
      description: 'Witness snow-dusted Himalayan passes, glacial lakes, and rhododendron sanctuaries across Gangtok, Lachen, and Lachung.',
      price: 18499,
      discountPrice: 22999,
      category: 'Sikkim',
      isAvailable: true,
      imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'item-tt2-2',
      name: 'Shimla, Kullu & Manali Solang Snow Valley Tour',
      description: 'Colonial ridge walks in Shimla combined with snowy adventure sports in Solang Valley and ancient pine forests of Manali.',
      price: 13999,
      discountPrice: 17999,
      category: 'Himachal',
      isAvailable: true,
      imageUrl: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'item-tt2-3',
      name: 'Paradise on Earth: Srinagar, Gulmarg & Pahalgam',
      description: 'Stay in a luxury carved cedar houseboat on Dal Lake, ride the world’s second highest gondola in Gulmarg, and walk Betaab Valley.',
      price: 19999,
      discountPrice: 24999,
      category: 'Kashmir',
      isAvailable: true,
      imageUrl: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'item-tt2-4',
      name: 'Andaman Tropical Dream: Port Blair, Havelock & Neil Island',
      description: 'White powdery sand at Radhanagar Beach, scuba diving at Elephant Beach, and natural coral bridges of Neil Island.',
      price: 23999,
      discountPrice: 29999,
      category: 'Andaman',
      isAvailable: true,
      imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'item-tt2-5',
      name: 'Spiti Valley Grand High-Altitude Road Trip Circuit',
      description: 'Conquer the complete loop: Kalpa apple orchards, thousand-year-old Tabo Monastery, Key Gompa, and crescent moon Chandratal Lake.',
      price: 24999,
      discountPrice: 31999,
      category: 'Spiti',
      isAvailable: true,
      imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'
    }
  ],
  offers: [],
  gallery: []
};
