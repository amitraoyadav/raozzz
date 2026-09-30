import { BusinessWebsite } from '../types';

export interface TravelArtBus {
  id: string;
  name: string;
  seatingCapacity: number;
  category: 'mini' | 'mid' | 'large' | 'volvo';
  categoryLabel: string;
  seatingLayout: string;
  ratePerKm: number;
  local8hr80km: number;
  outstationMinKm: number;
  driverAllowancePerDay: number;
  features: string[];
  idealFor: string;
  imageUrl: string;
}

export interface TravelArtTourRoute {
  id: string;
  title: string;
  destination: string;
  duration: string;
  distanceKm: number;
  recommendedCoach: string;
  estimatedPrice: number;
  overview: string;
  highlights: string[];
  imageUrl: string;
}

export const TRAVEL_ART_FLEET: TravelArtBus[] = [
  {
    id: 'bus-12s',
    name: '12-Seater Luxury Mini Traveller',
    seatingCapacity: 12,
    category: 'mini',
    categoryLabel: 'Mini Coach',
    seatingLayout: '1x1 / 2x1 Pushback Leather Recliners',
    ratePerKm: 24,
    local8hr80km: 3800,
    outstationMinKm: 250,
    driverAllowancePerDay: 500,
    features: ['High-Roof Walk-in Interior', 'Individual AC Vents', 'Aux/Bluetooth Sound System', 'Generous Legroom', 'Sanitized Cabin'],
    idealFor: 'Intimate family getaways, airport VIP transfers, and golf outings',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bus-16s',
    name: '16-Seater Deluxe Mini Coach',
    seatingCapacity: 16,
    category: 'mini',
    categoryLabel: 'Mini Coach',
    seatingLayout: '2x1 Luxury Ergonomic Pushback Seats',
    ratePerKm: 26,
    local8hr80km: 4200,
    outstationMinKm: 250,
    driverAllowancePerDay: 500,
    features: ['Deep Luggage Boot', 'Curtains & Tinted Glass', 'Microphone for Tour Guide', 'Emergency Exit & Fire Extinguisher'],
    idealFor: 'Small wedding parties, client site inspections, and school competitions',
    imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bus-20s',
    name: '20-Seater Executive Coach',
    seatingCapacity: 20,
    category: 'mini',
    categoryLabel: 'Executive Coach',
    seatingLayout: '2x1 Wide Reclining Seats with Armrests',
    ratePerKm: 28,
    local8hr80km: 4600,
    outstationMinKm: 250,
    driverAllowancePerDay: 600,
    features: ['Dual AC Compressor', 'LED Reading Lamps', 'Overhead Luggage Racks', 'Smooth Air Brakes'],
    idealFor: 'Corporate team retreats, Delhi to Agra day trips, and sports teams',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bus-27s',
    name: '27-Seater Deluxe Tourist Bus',
    seatingCapacity: 27,
    category: 'mid',
    categoryLabel: 'Mid-Size Luxury Bus',
    seatingLayout: '2x2 Premium Pushback Recliners',
    ratePerKm: 34,
    local8hr80km: 5500,
    outstationMinKm: 250,
    driverAllowancePerDay: 600,
    features: ['Large Panoramic Glass Windows', 'Digital Audio/Video System', 'Rear Underbelly Luggage Hold', 'First Aid Kit & Chauffeur Attendant'],
    idealFor: 'Destination wedding guest convoys, college industrial visits, and pilgrimage groups',
    imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bus-35s',
    name: '35-Seater Ultra-Deluxe Bus',
    seatingCapacity: 35,
    category: 'mid',
    categoryLabel: 'Mid-Size Luxury Bus',
    seatingLayout: '2x2 High-Back Plush Seats with Footrests',
    ratePerKm: 38,
    local8hr80km: 6500,
    outstationMinKm: 250,
    driverAllowancePerDay: 700,
    features: ['Dual LCD Screens', 'Powerful Roof-Mounted AC', 'Spacious Center Aisle', 'GPS Live Route Tracking'],
    idealFor: 'Major wedding transfers, corporate annual day shuttles, and inter-city religious yatras',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bus-45s-volvo',
    name: '45-Seater Multi-Axle Volvo B11R Luxury Coach',
    seatingCapacity: 45,
    category: 'volvo',
    categoryLabel: 'Multi-Axle Luxury Volvo',
    seatingLayout: '2x2 Ultra-Comfortable 140° Recliners',
    ratePerKm: 55,
    local8hr80km: 10500,
    outstationMinKm: 250,
    driverAllowancePerDay: 800,
    features: ['Electronic Air Suspension for Zero-Vibration Ride', 'Individual Reading Lights & USB Chargers', 'Massive Underfloor Baggage Compartments (100+ Suitcases)', 'Onboard Emergency Chauffeur Intercom', 'Chilled Mineral Water Box'],
    idealFor: 'Elite royal destination weddings, international delegation transport, and long-distance luxury interstate tours',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bus-50s',
    name: '49/50-Seater Super-Deluxe AC Coach',
    seatingCapacity: 50,
    category: 'large',
    categoryLabel: 'Large Tourist Coach',
    seatingLayout: '2x2 Ergonomic Pushback Seating',
    ratePerKm: 48,
    local8hr80km: 8500,
    outstationMinKm: 250,
    driverAllowancePerDay: 750,
    features: ['50 Full Adult Passenger Capacity', 'Dual Microphones for Announcements', 'Heavy-Duty Mountain Cooling', 'Speed Governor & Emergency Windows'],
    idealFor: 'School excursions, mass corporate employee commutes, and political/cultural delegations',
    imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80'
  }
];

export const TRAVEL_ART_ROUTES: TravelArtTourRoute[] = [
  {
    id: 'route-agra',
    title: 'Delhi to Agra Taj Mahal Expressway Tour',
    destination: 'Agra & Fatehpur Sikri',
    duration: 'Same Day / 2 Days',
    distanceKm: 480,
    recommendedCoach: '20 to 45 Seater AC Coach',
    estimatedPrice: 16500,
    overview: 'Smooth cruising on the 6-lane Yamuna Expressway. Perfect for large corporate teams or wedding parties visiting the Taj Mahal, Agra Fort, and Mehtab Bagh with scheduled lunch stops.',
    highlights: ['Non-stop Yamuna Expressway transit', 'Designated tourist bus parking at Shilpgram Agra', 'Full day air-conditioned comfort'],
    imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'route-jaipur',
    title: 'Delhi to Jaipur Pink City Royal Corridor',
    destination: 'Jaipur, Amber & Chokhi Dhani',
    duration: '2 to 3 Days',
    distanceKm: 560,
    recommendedCoach: '27 to 45 Seater Volvo Coach',
    estimatedPrice: 24500,
    overview: 'A scenic highway journey to the capital of Rajasthan. Enjoy smooth rides on the new Delhi-Mumbai Expressway directly reaching the foothills of Amber Fort.',
    highlights: ['Delhi-Dausa-Jaipur Expressway run', 'Capacity for heavy wedding luggage & trousseau', 'Experienced highway captains'],
    imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'route-corbett',
    title: 'Delhi to Jim Corbett National Park Wilderness Tour',
    destination: 'Ramnagar & Corbett Tiger Reserve',
    duration: '3 Days / 2 Nights',
    distanceKm: 520,
    recommendedCoach: '20 or 27 Seater Coach',
    estimatedPrice: 22000,
    overview: 'Travel together in a single coach to India’s oldest national park. Forest resort drop-offs with ample space for luggage and sports gear.',
    highlights: ['Moradabad bypass expressway', 'Direct resort parking access', 'Comfortable recliner seats for 6-hr journey'],
    imageUrl: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'route-haridwar-rishikesh',
    title: 'Delhi to Haridwar & Rishikesh Holy Ganga Pilgrimage',
    destination: 'Har Ki Pauri, Laxman Jhula & Tapovan',
    duration: '2 Days / 1 Night',
    distanceKm: 490,
    recommendedCoach: '27, 35 or 50 Seater Coach',
    estimatedPrice: 19500,
    overview: 'Ideal for community religious groups, elderly pilgrims, and yoga ashram retreats. Direct parking near Haridwar bypass with clean onboard facilities.',
    highlights: ['Meerut Expressway smooth transit', 'Special elder-friendly low step entry', 'Microphone onboard for bhajans and announcements'],
    imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
  }
];

export const TRAVEL_ART_WEBSITE: BusinessWebsite = {
  id: 'travel-art',
  slug: 'travel-art',
  businessName: 'Travel Art Company',
  category: 'tour_travel' as any,
  templateId: 'travel-art',
  tagline: 'Premier Luxury AC Bus & Coach Rentals in Delhi NCR · Initiative by Sagar Tours & Travels',
  description: 'Travel Art Company provides sanitized, luxury 12 to 50-seater AC buses and Volvo coaches for destination weddings, corporate commute, school excursions, tourist sightseeing, and outstation trips across India with 24/7 dedicated dispatch.',
  ownerName: 'Travel Art Company (Sagar Tours & Travels)',
  phone: '+91 98711 22944',
  whatsapp: '+91 98711 22944',
  email: 'info@travelartcompany.com',
  address: 'Travel Art Hub, Sector 29, Gurugram & Connaught Place Central Hub',
  city: 'Delhi NCR',
  mapsUrl: 'https://maps.google.com/?q=Travel+Art+Company+Sagar+Tours+Delhi+NCR',
  openingHours: '24 Hours / 7 Days Active Emergency Fleet Dispatch',
  coverUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
  primaryColor: '#DC2626',
  secondaryColor: '#1F2937',
  fontFamily: 'Inter',
  bookingType: 'appointment_consult' as any,
  bookingCtaLabel: 'Get Instant Bus Quote',
  specialBadge: 'Luxury Bus Fleet 12-50 Seater',
  status: 'published',
  pricingPlanId: 'professional',
  amountPaid: 6999,
  paymentStatus: 'paid',
  offers: [],
  gallery: [],
  items: TRAVEL_ART_FLEET.map(bus => ({
    id: bus.id,
    name: bus.name,
    description: `${bus.seatingCapacity} Seater · ${bus.seatingLayout} · ₹${bus.ratePerKm}/km`,
    price: bus.local8hr80km,
    discountPrice: bus.local8hr80km,
    category: bus.categoryLabel,
    isAvailable: true,
    badge: `${bus.seatingCapacity} Seats`
  })),
  sections: [
    { id: 'hero', title: 'Home', isEnabled: true, order: 1 },
    { id: 'fleet', title: 'Luxury Bus Fleet', isEnabled: true, order: 2 },
    { id: 'services', title: 'Rental Services', isEnabled: true, order: 3 },
    { id: 'calculator', title: 'Fare Calculator', isEnabled: true, order: 4 },
    { id: 'routes', title: 'Popular Tour Routes', isEnabled: true, order: 5 },
    { id: 'about', title: 'About Us', isEnabled: true, order: 6 },
    { id: 'contact', title: 'Contact & 24/7 Dispatch', isEnabled: true, order: 7 }
  ],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
