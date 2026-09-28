import { BusinessWebsite, PricingPlan, LeadEnquiry } from '../types';


export const DEFAULT_PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Website',
    price: 999,
    description: 'Perfect for small local shops, kiosks, and home-based service providers needing an online card & menu.',
    popular: false,
    timeline: 'Delivered in 24 Hours',
    features: [
      'Single-page modern responsive website',
      'Mobile-first layout with sticky Call & WhatsApp buttons',
      'Up to 15 products / services with prices in ₹',
      'Direct WhatsApp click-to-order button',
      'Direct Call Now button',
      'Google Maps location embed & directions',
      'Free high-speed cloud hosting (1 Year)',
      'Digital QR Code for shop counter & cards'
    ]
  },
  {
    id: 'professional',
    name: 'Professional Website',
    price: 1499,
    popular: true,
    description: 'Best for cafes, clinics, salons, laundries, and established stores wanting high mobile conversion.',
    timeline: 'Delivered in 48 Hours',
    features: [
      'Multi-section custom themed business website',
      'Category-specific booking engine (Pickup, Slot, Order, Table)',
      'Up to 40 items/services with categories, units & photos',
      'Doctor OPD timings or Salon service durations',
      'Promotional offers & discount countdowns',
      'Interactive photo gallery (interior, exterior, products)',
      'Instant Lead & Appointment booking form',
      'Google Maps directions & business hours widget',
      'Free high-speed cloud hosting (1 Year)',
      'Print-ready high-res QR code standee file'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Website',
    price: 1999,
    popular: false,
    description: 'For premium studios, multi-speciality clinics, fitness gyms, and ambitious Indian businesses.',
    timeline: 'Delivered in 3 Days',
    features: [
      'Comprehensive custom branded portal',
      'Unlimited products / services / menu items',
      'Custom domain connection support (e.g. yourbrand.in)',
      'Custom section order & toggle control',
      'Multiple doctor / trainer / stylist profiles',
      'Automated WhatsApp enquiry lead forwarding',
      'PWA support: Add to Home Screen as mobile app',
      'LocalBusiness Schema.org JSON-LD structured data',
      'Free high-speed cloud hosting (1 Year)',
      'Priority ongoing maintenance & price updates'
    ]
  }
];

// Active website catalog completely reset to 0 demo websites
// Clean canvas for building fresh websites from scratch
export const DEFAULT_WEBSITES: BusinessWebsite[] = [];

export const INITIAL_LEADS: LeadEnquiry[] = [];

