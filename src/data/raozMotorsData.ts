import { BusinessWebsite } from '../types';
import { ALL_COMMERCIAL_VEHICLES } from '../components/raozmotors/vehicleData';

export const RAOZ_MOTORS_WEBSITE: BusinessWebsite = {
  id: 'site-raoz-motors-56',
  slug: 'raoz-motors',
  businessName: 'RAOZ MOTORS COMMERCIAL VEHICLES',
  category: 'commercial_vehicles' as any,
  templateId: 'commercial_vehicles_portal',
  tagline: 'Driving India’s Commercial Growth · Trucks, Buses & Special Applications',
  description: 'Official Raoz Motors commercial vehicles portal. Explore BS6 Phase 2 trucks, Sartaj, Samrat, Supreme, school buses, executive coaches, ambulances and nationwide 3S dealer network.',
  ownerName: 'Raoz Motors Commercial Vehicles (India) Ltd.',
  phone: '1800-419-7269',
  whatsapp: '+919876543210',
  email: 'corporate@raozmotors.com',
  address: 'Plot No. 15, Industrial Area Phase II, Mohali / Plant: Asron, Punjab',
  city: 'Mohali / Asron (Punjab)',
  mapsUrl: 'https://maps.google.com/?q=Asron+Punjab+Commercial+Vehicles',
  openingHours: 'Mon - Sat: 9:00 AM - 7:30 PM (24x7 Roadside Assistance: 1800-419-7269)',
  primaryColor: '#f59e0b',
  secondaryColor: '#171a21',
  logoUrl: '/assets/raozmotors/truck_sartaj_5252.jpg',
  coverUrl: '/assets/raozmotors/hero_fleet_highway.jpg',
  bookingType: 'consultation_quote',
  bookingCtaLabel: 'Request Fleet Quotation',
  specialBadge: 'Site #56 · Commercial Vehicles Category',
  status: 'published',
  pricingPlanId: 'premium',
  amountPaid: 99999,
  paymentStatus: 'paid',
  sections: [
    { id: 'hero', title: 'Driving India Commercial Growth', isEnabled: true, order: 1 },
    { id: 'search-widget', title: 'Search My Vehicle', isEnabled: true, order: 2 },
    { id: 'showcase', title: 'Commercial Vehicle Catalog', isEnabled: true, order: 3 },
    { id: 'saarthi', title: 'SML Saarthi 3.0 Telematics', isEnabled: true, order: 4 },
    { id: 'dealers', title: 'Nationwide 3S Dealerships', isEnabled: true, order: 5 },
    { id: 'manufacturing', title: 'Asron Manufacturing Plant & Heritage', isEnabled: true, order: 6 },
    { id: 'tco', title: 'Fleet Mileage & TCO Estimator', isEnabled: true, order: 7 }
  ],
  offers: [
    {
      id: 'offer-fleet-discount',
      title: 'Fleet Volume Concession: Up to 6% Additional Subsidy',
      description: 'Institutional fleet purchase bonus on 5+ units of Sartaj or Samrat trucks.',
      discountPercent: 6,
      couponCode: 'FLEETBOOST',
      isActive: true
    }
  ],
  gallery: [
    {
      id: 'g-1',
      title: 'Next-Gen Sartaj & Samrat Commercial Fleet',
      category: 'trucks',
      imageUrl: '/assets/raozmotors/truck_samrat_gs.jpg'
    },
    {
      id: 'g-2',
      title: 'AIS 063 Certified SafeKids School Transit',
      category: 'buses',
      imageUrl: '/assets/raozmotors/bus_school_saathi.jpg'
    },
    {
      id: 'g-3',
      title: 'LifeLine ACLS Advanced Cardiac Mobile ICU',
      category: 'special',
      imageUrl: '/assets/raozmotors/special_ambulance_acls.jpg'
    },
    {
      id: 'g-4',
      title: 'State-of-the-Art Asron Manufacturing Facility',
      category: 'facilities',
      imageUrl: '/assets/raozmotors/plant_manufacturing_asron.jpg'
    }
  ],
  items: ALL_COMMERCIAL_VEHICLES.map(v => ({
    id: v.id,
    name: v.name,
    description: v.tagline,
    price: parseFloat(v.startingPrice.replace(/[^0-9.]/g, '')) * 100000 || 1500000,
    discountPrice: parseFloat(v.startingPrice.replace(/[^0-9.]/g, '')) * 100000 || 1500000,
    category: v.category,
    imageUrl: v.image,
    isAvailable: true,
    badge: v.subCategoryLabel
  }))
};
