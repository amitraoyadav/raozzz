import { BusinessWebsite } from '../types';
import { DW_RESORTS, DW_EXCLUSIVE_OFFERS } from '../components/destinationweddings/destinationWeddingsData';

export const ALL_IN_ONE_DESTINATION_WEDDINGS_WEBSITE: BusinessWebsite = {
  id: 'site-all-in-one-destination-weddings-58',
  slug: 'all-in-one-destination-weddings',
  businessName: 'ALL IN ONE DESTINATION WEDDINGS',
  category: 'destination_weddings' as any,
  templateId: 'destination_wedding_portal',
  tagline: 'Destination Wedding Packages, Venues, Planning | All In One Destination Weddings',
  description: 'Stress-free destination wedding planning at your fingertips. Book your dream celebration with an expert Certified Destination Wedding Specialist at 100% no cost to you.',
  ownerName: 'All In One Destination Weddings Travel Group',
  phone: '416-532-4949',
  whatsapp: '+14165324949',
  email: 'weddings@destinationweddings.com',
  address: '545 King Street West, Toronto, ON M5V1M1',
  city: 'Cancun, Riviera Maya, Punta Cana, Jamaica, Los Cabos, Bahamas, Hawaii',
  mapsUrl: 'https://maps.google.com/?q=545+King+Street+West+Toronto',
  openingHours: 'Mon - Sun: 8:00 AM - 10:00 PM EST (24/7 Specialist Support)',
  primaryColor: '#b3275a',
  secondaryColor: '#1b1e24',
  logoUrl: 'https://assets.milestoneinternet.com/destination-weddings-travel-group/siteimages/destinationweddings-com-brand-logo.svg',
  coverUrl: 'https://assets.milestoneinternet.com/cdn-cgi/image/width=1380,height=625,f=auto/destination-weddings-travel-group/homepage-hero-2.jpg?cropW=7836&cropH=3549',
  bookingType: 'consultation_quote',
  bookingCtaLabel: 'Get Started (Free Consultation)',
  specialBadge: 'Site #58 · Destination Weddings Category',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 99999,
  paymentStatus: 'paid',
  sections: [
    { id: 'hero', title: 'Let Our Experts Help Plan Your Perfect Destination Wedding', isEnabled: true, order: 1 },
    { id: 'usps', title: '100% Free Service & Award-Winning Specialists', isEnabled: true, order: 2 },
    { id: 'how-it-works', title: 'We Make It as Easy as Saying I Do', isEnabled: true, order: 3 },
    { id: 'destinations', title: 'Top Destination Wedding Locations', isEnabled: true, order: 4 },
    { id: 'offers', title: 'Savings You Won\'t Find Anywhere Else', isEnabled: true, order: 5 },
    { id: 'testimonials', title: 'Couples Love Our Certified Specialists', isEnabled: true, order: 6 },
    { id: 'real-weddings', title: 'Real Couples, Real Weddings', isEnabled: true, order: 7 },
    { id: 'faqs', title: 'Wedding Planning FAQs', isEnabled: true, order: 8 },
    { id: 'cta-bottom', title: 'Over 30,000 Personalized Celebrations Planned', isEnabled: true, order: 9 }
  ],
  offers: DW_EXCLUSIVE_OFFERS.map((o) => ({
    id: o.id,
    title: o.title,
    description: o.description,
    discountPercent: 15,
    couponCode: 'DESTWED2026',
    isActive: true
  })),
  gallery: [
    {
      id: 'dwg-1',
      title: 'Oceanfront Glass Gazebo',
      category: 'exterior',
      imageUrl: 'https://assets.milestoneinternet.com/cdn-cgi/image/width=1380,height=625,f=auto/destination-weddings-travel-group/homepage-hero-2.jpg?cropW=7836&cropH=3549'
    },
    {
      id: 'dwg-2',
      title: 'Sunset Beachfront Reception',
      category: 'exterior',
      imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'dwg-3',
      title: 'Punta Cana Palm Beach Mandap',
      category: 'exterior',
      imageUrl: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?w=800&auto=format&fit=crop&q=80'
    }
  ],
  items: DW_RESORTS.map((r) => ({
    id: r.id,
    name: r.name,
    description: r.highlight,
    price: 9850,
    discountPrice: 9850,
    category: r.location,
    imageUrl: r.image,
    isAvailable: true,
    badge: `${r.category} · ${r.startingPrice}`
  }))
};
