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

import { BATCH_001_WEBSITES } from './batchSystem';

// Active catalog strictly contains the 20 reference website implementations of the active batch (Batch 001).
// Legacy 80 demo websites are safely archived in ARCHIVED_LEGACY_CATALOG.
export const DEFAULT_WEBSITES: BusinessWebsite[] = BATCH_001_WEBSITES;

export const INITIAL_LEADS: LeadEnquiry[] = [
  {
    id: 'lead-1',
    websiteSlug: 'shree-ganesh-super-mart',
    businessName: 'Shree Ganesh Super Mart & Kirana',
    customerName: 'Suman Gupta',
    customerPhone: '+91 98110 54321',
    customerEmail: 'suman.g@gmail.com',
    message: 'Need 10kg Aashirvaad Atta, 5kg Fortune Oil, 2 packets Tata Salt. Please pack and deliver to Tower 4, Flat 602.',
    serviceRequested: 'WhatsApp Grocery List Order',
    bookingType: 'whatsapp_order',
    status: 'new',
    createdAt: '2026-03-25T11:45:00Z'
  },
  {
    id: 'lead-2',
    websiteSlug: 'quickfix-mobile-repair',
    businessName: 'QuickFix Mobile & Tablet Care',
    customerName: 'Rahul Verma',
    customerPhone: '+91 98991 22334',
    customerEmail: 'rahul.verma@outlook.com',
    message: 'iPhone 13 screen cracked after drop. Touch working partially. Need pickup from DLF Phase 3.',
    serviceRequested: 'Screen Replacement',
    deviceBrandModel: 'Apple iPhone 13 (Midnight Blue)',
    pickupAddress: 'DLF Phase 3, Cyber City, Gurugram',
    ticketNumber: 'QF-8492',
    bookingType: 'pickup_drop',
    status: 'contacted',
    createdAt: '2026-03-24T15:20:00Z'
  },
  {
    id: 'lead-3',
    websiteSlug: 'spin-sparkle-laundry',
    businessName: 'Spin & Sparkle Premium Dry Cleaners',
    customerName: 'Megha Singhal',
    customerPhone: '+91 98104 99887',
    customerEmail: 'megha.s@gmail.com',
    message: 'Need pickup for 3 silk sarees, 2 men blazers, and 1 double quilt.',
    serviceRequested: 'Dry Cleaning Doorstep Pickup',
    preferredDate: '2026-03-27',
    preferredTime: 'Morning (10 AM - 1 PM)',
    pickupAddress: 'Sector 50, Mahagun Maestro, Noida',
    bookingType: 'pickup_drop',
    status: 'converted',
    createdAt: '2026-03-23T09:15:00Z'
  },
  {
    id: 'lead-4',
    websiteSlug: 'punjab-zaika-dhaba',
    businessName: 'Punjab Zaika Highway Dhaba & Family Dine',
    customerName: 'Harpreet Singh',
    customerPhone: '+91 98760 11223',
    message: 'Reserving family table for 6 adults and 2 kids this Saturday evening around 8 PM.',
    serviceRequested: 'Table Reservation',
    preferredDate: '2026-03-28',
    preferredTime: '8:00 PM',
    partySize: 8,
    bookingType: 'reservation_party',
    status: 'new',
    createdAt: '2026-03-25T16:30:00Z'
  }
];
