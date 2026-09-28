import { BusinessWebsite } from '../types';
import { ReferenceDesignBlueprint } from '../types/referenceDesign';
import { BatchReferenceItem } from '../types/batch';

const createBatchSite = (base: any): BusinessWebsite => ({
  mapsUrl: 'https://maps.google.com',
  bookingCtaLabel: base.ctaText || 'Order on WhatsApp',
  offers: [],
  gallery: [],
  sections: [
    { id: 'sec-hero', title: 'Home', isEnabled: true, order: 1 },
    { id: 'sec-catalog', title: 'Menu & Services', isEnabled: true, order: 2 },
    { id: 'sec-booking', title: 'Book / Order', isEnabled: true, order: 3 }
  ],
  status: 'published' as const,
  pricingPlanId: 'professional' as const,
  amountPaid: 1499,
  paymentStatus: 'paid' as const,
  createdAt: '2026-09-28T16:00:00Z',
  updatedAt: '2026-09-28T16:00:00Z',
  ...base
});

// Reference 1: Madras Central Cafe (Restaurant)
const b1: ReferenceDesignBlueprint = {
  layoutArchetype: 'bold-artisan',
  contentWidth: 'max-w-6xl',
  header: {
    navStyle: 'solid-compact',
    showTopBar: true,
    isSticky: true,
    ctaVariant: 'dual-cta'
  },
  hero: {
    archetype: 'split-hero-booking',
    alignment: 'split',
    height: 'standard',
    overlayDarkness: 0.35,
    showBadges: true,
    highlightPill: 'Authentic Filter Coffee & Ghee Roast'
  },
  palette: {
    baseBg: '#1f1610',
    surfaceBg: '#fefce8',
    textColor: '#fef08a',
    bodyTextColor: '#292524',
    accentColor: '#b45309',
    secondaryAccent: '#dc2626'
  },
  typography: {
    headlineFont: 'Fraunces, serif',
    bodyFont: 'DM Sans, sans-serif',
    fontPairingLabel: 'Fraunces + DM Sans'
  },
  catalog: {
    style: 'grid-cards',
    columns: 3,
    showPriceBadge: true,
    cardCornerRadius: 'rounded-xl'
  },
  sections: [
    { id: 's-hero', type: 'hero', title: 'South Indian Tradition', variant: 'split-hero-booking', order: 1, isEnabled: true },
    { id: 's-story', type: 'brand-story', title: 'Our Heritage Recipe', variant: 'artisan-heritage', order: 2, isEnabled: true },
    { id: 's-menu', type: 'catalog', title: 'Breakfast & Tiffin Specials', variant: 'grid-cards', order: 3, isEnabled: true },
    { id: 's-booking', type: 'booking-banner', title: 'Reserve Family Table', variant: 'table_reservation', order: 4, isEnabled: true },
    { id: 's-map', type: 'location-map', title: 'Visit Our Branch', variant: 'full-map', order: 5, isEnabled: true }
  ],
  footer: {
    style: 'multi-column-rich',
    showNewsletter: false,
    showWorkingHours: true
  },
  vibeTag: 'Authentic South Indian Heritage'
};

const s1: BusinessWebsite = {
  id: 'site-ref-001',
  slug: 'madras-central-cafe',
  businessName: 'Madras Central Cafe',
  category: 'restaurant',
  templateId: 'artisan',
  referenceId: 'REF_001_MADRAS_CENTRAL',
  tagline: 'Crispy Ghee Podi Dosas, Idlis & Degree Filter Coffee',
  description: 'Authentic heritage South Indian restaurant serving traditional brass-filter coffee, crisp dosas, and banana-leaf weekend thalis.',
  ownerName: 'S. Ramanathan',
  phone: '+91 98401 23456',
  whatsapp: '+91 98401 23456',
  email: 'orders@madrascentralcafe.com',
  address: '14/2 Gandhi Bazaar Main Road, Bengaluru',
  city: 'Bengaluru',
  openingHours: 'Mon-Sun: 6:30 AM - 10:30 PM',
  bookingType: 'table_reservation',
  ctaText: 'Reserve Table / Order',
  designTokens: {
    primaryColor: '#b45309',
    secondaryColor: '#dc2626',
    backgroundColor: '#fffdfa',
    textColor: '#1c1917',
    fontFamily: 'Fraunces, serif',
    headingFont: 'Fraunces, serif'
  },
  blueprint: b1,
  mapsUrl: 'https://maps.google.com',
  bookingCtaLabel: 'Order on WhatsApp',
  offers: [],
  gallery: [],
  sections: [
    { id: 'sec-hero', title: 'Home', isEnabled: true, order: 1 },
    { id: 'sec-menu', title: 'Menu & Services', isEnabled: true, order: 2 },
    { id: 'sec-contact', title: 'Contact & Location', isEnabled: true, order: 3 }
  ],
  status: 'published' as const,
  pricingPlanId: 'professional' as const,
  amountPaid: 1499,
  paymentStatus: 'paid' as const,
  createdAt: '2026-09-28T16:00:00Z',
  updatedAt: '2026-09-28T16:00:00Z',
  items: [
    { id: 'mcc-1', name: 'Special Ghee Podi Masala Dosa', price: 140, category: 'Dosa Specials', image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&auto=format&fit=crop', description: 'Crisp golden crepe roasted in pure cow ghee with homemade gun powder spice and potato bhaji.', badge: 'Bestseller' },
    { id: 'mcc-2', name: 'Degree Filter Coffee (Brass Tumbler)', price: 45, category: 'Beverages', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop', description: 'Chikmagalur dark roast decoction frothed with fresh milk in traditional brass dabarah.', badge: 'Must Try' },
    { id: 'mcc-3', name: 'Steamed Button Ghee Sambar Idli (14 pcs)', price: 110, category: 'Tiffin', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop', description: 'Mini idlis submerged in piping hot shallot sambar with melted ghee drizzle.' }
  ]
};

// Reference 2: Maa Restaurant & Sweets
const b2: ReferenceDesignBlueprint = {
  layoutArchetype: 'dense-commercial',
  contentWidth: 'max-w-7xl',
  header: {
    navStyle: 'action-heavy',
    showTopBar: true,
    isSticky: true,
    ctaVariant: 'dual-cta'
  },
  hero: {
    archetype: 'cinematic-overlay',
    alignment: 'center',
    height: 'standard',
    overlayDarkness: 0.5,
    showBadges: true,
    highlightPill: 'Pure Desi Ghee Sweets & North Indian Thalis'
  },
  palette: {
    baseBg: '#2c1204',
    surfaceBg: '#ffffff',
    textColor: '#ffedd5',
    bodyTextColor: '#1f2937',
    accentColor: '#c2410c',
    secondaryAccent: '#eab308'
  },
  typography: {
    headlineFont: 'Plus Jakarta Sans, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Plus Jakarta Sans + Inter'
  },
  catalog: {
    style: 'categorized-accordion',
    columns: 3,
    showPriceBadge: true,
    cardCornerRadius: 'rounded-xl'
  },
  sections: [
    { id: 's-hero', type: 'hero', title: 'Royal Indian Dining', variant: 'cinematic-overlay', order: 1, isEnabled: true },
    { id: 's-menu', type: 'catalog', title: 'Dining & Sweets Counter', variant: 'categorized-accordion', order: 2, isEnabled: true },
    { id: 's-catering', type: 'custom-features', title: 'Family Catering & Bulk Mithai', variant: 'feature-grid', order: 3, isEnabled: true },
    { id: 's-booking', type: 'booking-banner', title: 'Book Thali & Tables', variant: 'table_reservation', order: 4, isEnabled: true }
  ],
  footer: {
    style: 'multi-column-rich',
    showNewsletter: false,
    showWorkingHours: true
  },
  vibeTag: 'Rich Family Dining & Mithai Emporium'
};

const s2: BusinessWebsite = {
  id: 'site-ref-002',
  slug: 'maa-restaurant-sweets',
  businessName: 'Maa Restaurant & Sweets',
  category: 'restaurant',
  templateId: 'modern',
  referenceId: 'REF_002_MAA_RESTAURANT',
  tagline: 'Pure Veg Royal Feast & Traditional Desi Ghee Mithai',
  description: 'Grand family vegetarian dining serving authentic North Indian thalis, paneer specialties, and festive sweet boxes.',
  ownerName: 'Manoj Sharma',
  phone: '+91 98100 87654',
  whatsapp: '+91 98100 87654',
  email: 'contact@maarestaurant.in',
  address: 'Civil Lines, Near Clock Tower, Jaipur',
  city: 'Jaipur',
  openingHours: 'Mon-Sun: 8:00 AM - 11:00 PM',
  bookingType: 'table_reservation',
  ctaText: 'Book Table / Order Mithai',
  designTokens: {
    primaryColor: '#c2410c',
    secondaryColor: '#f59e0b',
    backgroundColor: '#fffcf7',
    textColor: '#1f2937',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    headingFont: 'Plus Jakarta Sans, sans-serif'
  },
  blueprint: b2,
  mapsUrl: 'https://maps.google.com',
  bookingCtaLabel: 'Order on WhatsApp',
  offers: [],
  gallery: [],
  sections: [
    { id: 'sec-hero', title: 'Home', isEnabled: true, order: 1 },
    { id: 'sec-menu', title: 'Menu & Services', isEnabled: true, order: 2 },
    { id: 'sec-contact', title: 'Contact & Location', isEnabled: true, order: 3 }
  ],
  status: 'published' as const,
  pricingPlanId: 'professional' as const,
  amountPaid: 1499,
  paymentStatus: 'paid' as const,
  createdAt: '2026-09-28T16:00:00Z',
  updatedAt: '2026-09-28T16:00:00Z',
  items: [
    { id: 'mrs-1', name: 'Special Maharaja Royal Thali', price: 299, category: 'Thali Meals', image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop', description: '2 Paneer Sabzis, Dal Makhani, 4 Butter Phulkas, Jeera Pulao, Raita, Gulab Jamun & Papad.', badge: 'House Special' },
    { id: 'mrs-2', name: 'Pure Desi Ghee Kaju Katli (500g)', price: 520, category: 'Sweets', image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=600&auto=format&fit=crop', description: 'Authentic diamond cut cashew fudge crafted in pure bilona ghee with silver vark.', badge: 'Festive Box' }
  ]
};

// Reference 3: Cafe Nook (Cafe)
const b3: ReferenceDesignBlueprint = {
  layoutArchetype: 'luxury-minimal',
  contentWidth: 'max-w-5xl',
  header: {
    navStyle: 'floating-glass',
    showTopBar: false,
    isSticky: true,
    ctaVariant: 'whatsapp-pill'
  },
  hero: {
    archetype: 'minimal-editorial',
    alignment: 'left',
    height: 'screen',
    overlayDarkness: 0.25,
    showBadges: true,
    highlightPill: 'Artisanal Roastery & Quiet Work Nook'
  },
  palette: {
    baseBg: '#1c1917',
    surfaceBg: '#fcfaf8',
    textColor: '#fafaf9',
    bodyTextColor: '#292524',
    accentColor: '#d97706',
    secondaryAccent: '#78716c'
  },
  typography: {
    headlineFont: 'Space Grotesk, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Space Grotesk + Inter'
  },
  catalog: {
    style: 'visual-cards',
    columns: 2,
    showPriceBadge: true,
    cardCornerRadius: 'rounded-2xl'
  },
  sections: [
    { id: 's-hero', type: 'hero', title: 'Slow Brews & Good Words', variant: 'minimal-editorial', order: 1, isEnabled: true },
    { id: 's-brews', type: 'catalog', title: 'Single-Origin Coffee Bar', variant: 'visual-cards', order: 2, isEnabled: true },
    { id: 's-gallery', type: 'gallery', title: 'The Ambiance & Work Nook', variant: 'masonry', order: 3, isEnabled: true },
    { id: 's-reserve', type: 'booking-banner', title: 'Reserve Work Corner', variant: 'table_reservation', order: 4, isEnabled: true }
  ],
  footer: {
    style: 'brand-centered',
    showNewsletter: true,
    showWorkingHours: true
  },
  vibeTag: 'Specialty Artisan Cafe & Slow Living'
};

const s3: BusinessWebsite = {
  id: 'site-ref-003',
  slug: 'cafe-nook',
  businessName: 'Cafe Nook',
  category: 'cafe',
  templateId: 'minimal',
  referenceId: 'REF_003_CAFE_NOOK',
  tagline: 'Single Origin Pour-Overs, Sourdough Bakes & Quiet Nooks',
  description: 'Minimalist neighborhood specialty coffee house with high-speed WiFi, library corner, and pour-over brewing bar.',
  ownerName: 'Tanvi Mehta',
  phone: '+91 98200 44556',
  whatsapp: '+91 98200 44556',
  email: 'hello@cafenook.in',
  address: 'Bandra West, Hill Road, Mumbai',
  city: 'Mumbai',
  openingHours: 'Mon-Sun: 7:30 AM - 10:00 PM',
  bookingType: 'table_reservation',
  ctaText: 'WhatsApp for Table / Coffee Bag',
  designTokens: {
    primaryColor: '#d97706',
    secondaryColor: '#78716c',
    backgroundColor: '#faf8f5',
    textColor: '#1c1917',
    fontFamily: 'Space Grotesk, sans-serif',
    headingFont: 'Space Grotesk, sans-serif'
  },
  blueprint: b3,
  mapsUrl: 'https://maps.google.com',
  bookingCtaLabel: 'Order on WhatsApp',
  offers: [],
  gallery: [],
  sections: [
    { id: 'sec-hero', title: 'Home', isEnabled: true, order: 1 },
    { id: 'sec-menu', title: 'Menu & Services', isEnabled: true, order: 2 },
    { id: 'sec-contact', title: 'Contact & Location', isEnabled: true, order: 3 }
  ],
  status: 'published' as const,
  pricingPlanId: 'professional' as const,
  amountPaid: 1499,
  paymentStatus: 'paid' as const,
  createdAt: '2026-09-28T16:00:00Z',
  updatedAt: '2026-09-28T16:00:00Z',
  items: [
    { id: 'cn-1', name: 'Estate Pour-Over V60', price: 210, category: 'Brew Bar', image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600&auto=format&fit=crop', description: 'Light roast Arabica from Araku Valley with notes of berry and caramelized honey.', badge: 'Specialty' },
    { id: 'cn-2', name: 'Avocado Tartine on Sourdough', price: 280, category: 'Kitchen', image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=600&auto=format&fit=crop', description: 'Stoneground artisan sourdough with Hass avocado mash, microgreens, and chili crunch.' }
  ]
};

// Reference 4: Gateway Cafe (Cafe)
const b4: ReferenceDesignBlueprint = {
  layoutArchetype: 'clean-catalog',
  contentWidth: 'max-w-6xl',
  header: {
    navStyle: 'solid-compact',
    showTopBar: true,
    isSticky: true,
    ctaVariant: 'button'
  },
  hero: {
    archetype: 'product-showcase',
    alignment: 'center',
    height: 'compact',
    overlayDarkness: 0.3,
    showBadges: true,
    highlightPill: 'Scenic Open Terrace & Gourmet Brunch'
  },
  palette: {
    baseBg: '#0f2922',
    surfaceBg: '#ffffff',
    textColor: '#e6fffa',
    bodyTextColor: '#134e4a',
    accentColor: '#059669',
    secondaryAccent: '#14b8a6'
  },
  typography: {
    headlineFont: 'Outfit, sans-serif',
    bodyFont: 'Plus Jakarta Sans, sans-serif',
    fontPairingLabel: 'Outfit + Plus Jakarta'
  },
  catalog: {
    style: 'grid-cards',
    columns: 3,
    showPriceBadge: true,
    cardCornerRadius: 'rounded-xl'
  },
  sections: [
    { id: 's-hero', type: 'hero', title: 'Gateway Terrace Dining', variant: 'product-showcase', order: 1, isEnabled: true },
    { id: 's-menu', type: 'catalog', title: 'Continental & Coffee Selections', variant: 'grid-cards', order: 2, isEnabled: true },
    { id: 's-terrace', type: 'highlights-grid', title: 'Open Sky Seating & Scenic Deck', variant: 'card-grid', order: 3, isEnabled: true },
    { id: 's-reserve', type: 'booking-banner', title: 'Book Sunset Table', variant: 'table_reservation', order: 4, isEnabled: true }
  ],
  footer: {
    style: 'minimal-compact',
    showNewsletter: false,
    showWorkingHours: true
  },
  vibeTag: 'Scenic Outdoor Garden Cafe'
};

const s4: BusinessWebsite = {
  id: 'site-ref-004',
  slug: 'gateway-cafe',
  businessName: 'Gateway Cafe',
  category: 'cafe',
  templateId: 'modern',
  referenceId: 'REF_004_GATEWAY_CAFE',
  tagline: 'Terrace Garden Brunch, Artisanal Sandwiches & Cold Brews',
  description: 'Lush open-air garden cafe overlooking landmark views, serving European-style brunch, wood-pressed coffees, and gelato sundaes.',
  ownerName: 'Vikram Joshi',
  phone: '+91 99300 11223',
  whatsapp: '+91 99300 11223',
  email: 'gatewaycafe.in@gmail.com',
  address: 'Seafront Promenade, Apollo Bandar, Colaba, Mumbai',
  city: 'Mumbai',
  openingHours: 'Mon-Sun: 8:00 AM - 11:30 PM',
  bookingType: 'table_reservation',
  ctaText: 'Book Terrace Table',
  designTokens: {
    primaryColor: '#059669',
    secondaryColor: '#14b8a6',
    backgroundColor: '#f0fdf4',
    textColor: '#134e4a',
    fontFamily: 'Outfit, sans-serif',
    headingFont: 'Outfit, sans-serif'
  },
  blueprint: b4,
  mapsUrl: 'https://maps.google.com',
  bookingCtaLabel: 'Order on WhatsApp',
  offers: [],
  gallery: [],
  sections: [
    { id: 'sec-hero', title: 'Home', isEnabled: true, order: 1 },
    { id: 'sec-menu', title: 'Menu & Services', isEnabled: true, order: 2 },
    { id: 'sec-contact', title: 'Contact & Location', isEnabled: true, order: 3 }
  ],
  status: 'published' as const,
  pricingPlanId: 'professional' as const,
  amountPaid: 1499,
  paymentStatus: 'paid' as const,
  createdAt: '2026-09-28T16:00:00Z',
  updatedAt: '2026-09-28T16:00:00Z',
  items: [
    { id: 'gc-1', name: 'Cold Brew Nitro Tonic', price: 230, category: 'Beverages', image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop', description: 'Slow-steeped 18hr cold brew charged with nitrogen and citrus twist.', badge: 'Signature' },
    { id: 'gc-2', name: 'Truffle Mushroom Bruschetta', price: 290, category: 'Brunch', image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600&auto=format&fit=crop', description: 'Toasted baguette with wild mushroom ragout, thyme, and aged parmesan.' }
  ]
};

// Reference 5: Kaffiiaa (Rooftop Cafe)
const b5: ReferenceDesignBlueprint = {
  layoutArchetype: 'split-hero-booking',
  contentWidth: 'max-w-6xl',
  header: {
    navStyle: 'floating-glass',
    showTopBar: true,
    isSticky: true,
    ctaVariant: 'dual-cta'
  },
  hero: {
    archetype: 'cinematic-overlay',
    alignment: 'left',
    height: 'screen',
    overlayDarkness: 0.45,
    showBadges: true,
    highlightPill: 'Noida Skyline Sunset & Live Acoustics'
  },
  palette: {
    baseBg: '#0f172a',
    surfaceBg: '#ffffff',
    textColor: '#f8fafc',
    bodyTextColor: '#1e293b',
    accentColor: '#f59e0b',
    secondaryAccent: '#6366f1'
  },
  typography: {
    headlineFont: 'Playfair Display, serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Playfair Display + Inter'
  },
  catalog: {
    style: 'visual-cards',
    columns: 3,
    showPriceBadge: true,
    cardCornerRadius: 'rounded-2xl'
  },
  sections: [
    { id: 's-hero', type: 'hero', title: 'Skyline Dining Above Noida', variant: 'cinematic-overlay', order: 1, isEnabled: true },
    { id: 's-booking', type: 'booking-banner', title: 'Reserve Skyline Cabana', variant: 'table_reservation', order: 2, isEnabled: true },
    { id: 's-menu', type: 'catalog', title: 'Mocktails & Fusion Platters', variant: 'visual-cards', order: 3, isEnabled: true },
    { id: 's-events', type: 'timeline', title: 'Live Weekend Gig Schedule', variant: 'timeline', order: 4, isEnabled: true }
  ],
  footer: {
    style: 'multi-column-rich',
    showNewsletter: false,
    showWorkingHours: true
  },
  vibeTag: 'Romantic Sunset Rooftop Lounge'
};

const s5: BusinessWebsite = {
  id: 'site-ref-005',
  slug: 'kaffiiaa-rooftop-cafe',
  businessName: 'Kaffiiaa Rooftop Cafe',
  category: 'cafe',
  templateId: 'modern',
  referenceId: 'REF_005_KAFFIIAA',
  tagline: 'Sunset Skylines, Live Music & Artisan Italian Mocktails',
  description: 'Noida premier rooftop lounge featuring open-sky dining, fairy-lit cabanas, wood-fired pizza ovens, and live acoustic music sessions.',
  ownerName: 'Kunal Malhotra',
  phone: '+91 99102 33445',
  whatsapp: '+91 99102 33445',
  email: 'reservations@kaffiiaa.in',
  address: 'G-50, 6th Floor Rooftop, Sector 18, Noida',
  city: 'Noida',
  openingHours: 'Mon-Sun: 12:00 PM - 1:00 AM',
  bookingType: 'table_reservation',
  ctaText: 'Book Rooftop Table',
  designTokens: {
    primaryColor: '#f59e0b',
    secondaryColor: '#6366f1',
    backgroundColor: '#0f172a',
    textColor: '#f8fafc',
    fontFamily: 'Playfair Display, serif',
    headingFont: 'Playfair Display, serif'
  },
  blueprint: b5,
  mapsUrl: 'https://maps.google.com',
  bookingCtaLabel: 'Order on WhatsApp',
  offers: [],
  gallery: [],
  sections: [
    { id: 'sec-hero', title: 'Home', isEnabled: true, order: 1 },
    { id: 'sec-menu', title: 'Menu & Services', isEnabled: true, order: 2 },
    { id: 'sec-contact', title: 'Contact & Location', isEnabled: true, order: 3 }
  ],
  status: 'published' as const,
  pricingPlanId: 'professional' as const,
  amountPaid: 1499,
  paymentStatus: 'paid' as const,
  createdAt: '2026-09-28T16:00:00Z',
  updatedAt: '2026-09-28T16:00:00Z',
  items: [
    { id: 'kaf-1', name: 'Smoked Jalapeno Thin Crust Pizza', price: 420, category: 'Wood Fired Pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop', description: 'Fresh bocconcini, charred peppers, and basil on house-fermented dough.', badge: 'Chef Special' },
    { id: 'kaf-2', name: 'Sunset Peach & Rosemary Spritz', price: 260, category: 'Beverages', image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop', description: 'Sparkling peach puree infused with fresh rosemary sprig and tonic.', badge: 'Rooftop Best' }
  ]
};

// Reference 6: Campanella (Rooftop Cafe)
const b6: ReferenceDesignBlueprint = {
  layoutArchetype: 'luxury-minimal',
  contentWidth: 'max-w-6xl',
  header: {
    navStyle: 'split-centered',
    showTopBar: false,
    isSticky: true,
    ctaVariant: 'button'
  },
  hero: {
    archetype: 'cinematic-overlay',
    alignment: 'center',
    height: 'screen',
    overlayDarkness: 0.4,
    showBadges: true,
    highlightPill: 'Italian Sunset Terrace & Neapolitan Crusts'
  },
  palette: {
    baseBg: '#1c1917',
    surfaceBg: '#ffffff',
    textColor: '#f5f5f4',
    bodyTextColor: '#292524',
    accentColor: '#ea580c',
    secondaryAccent: '#ca8a04'
  },
  typography: {
    headlineFont: 'Cinzel, serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Cinzel + Inter'
  },
  catalog: {
    style: 'grid-cards',
    columns: 3,
    showPriceBadge: true,
    cardCornerRadius: 'rounded-xl'
  },
  sections: [
    { id: 's-hero', type: 'hero', title: 'The Italian Sky Bistro', variant: 'cinematic-overlay', order: 1, isEnabled: true },
    { id: 's-dishes', type: 'catalog', title: 'Antipasti & Pasta Artigianale', variant: 'grid-cards', order: 2, isEnabled: true },
    { id: 's-seating', type: 'highlights-grid', title: '360° Open View Cabanas', variant: 'card-grid', order: 3, isEnabled: true },
    { id: 's-reserve', type: 'booking-banner', title: 'Book VIP Skyline Table', variant: 'table_reservation', order: 4, isEnabled: true }
  ],
  footer: {
    style: 'brand-centered',
    showNewsletter: false,
    showWorkingHours: true
  },
  vibeTag: 'Mediterranean Rooftop Sanctuary'
};

const s6: BusinessWebsite = {
  id: 'site-ref-006',
  slug: 'campanella-rooftop',
  businessName: 'Campanella Rooftop Bistro',
  category: 'cafe',
  templateId: 'minimal',
  referenceId: 'REF_006_CAMPANELLA',
  tagline: 'Neapolitan Wood-Fired Pizzas & Panoramic Sunset Dining',
  description: 'Chic European rooftop restaurant celebrating authentic Campania flavors, handmade burrata, and candle-lit terrace seating.',
  ownerName: 'Andrea & Raghav',
  phone: '+91 98711 55667',
  whatsapp: '+91 98711 55667',
  email: 'ciao@campanella.in',
  address: 'Rooftop Level, Galleria Square, Gurugram',
  city: 'Gurugram',
  openingHours: 'Tue-Sun: 1:00 PM - 12:00 AM',
  bookingType: 'table_reservation',
  ctaText: 'Reserve Skyline Cabana',
  designTokens: {
    primaryColor: '#ea580c',
    secondaryColor: '#ca8a04',
    backgroundColor: '#1c1917',
    textColor: '#f5f5f4',
    fontFamily: 'Cinzel, serif',
    headingFont: 'Cinzel, serif'
  },
  blueprint: b6,
  mapsUrl: 'https://maps.google.com',
  bookingCtaLabel: 'Order on WhatsApp',
  offers: [],
  gallery: [],
  sections: [
    { id: 'sec-hero', title: 'Home', isEnabled: true, order: 1 },
    { id: 'sec-menu', title: 'Menu & Services', isEnabled: true, order: 2 },
    { id: 'sec-contact', title: 'Contact & Location', isEnabled: true, order: 3 }
  ],
  status: 'published' as const,
  pricingPlanId: 'professional' as const,
  amountPaid: 1499,
  paymentStatus: 'paid' as const,
  createdAt: '2026-09-28T16:00:00Z',
  updatedAt: '2026-09-28T16:00:00Z',
  items: [
    { id: 'cmp-1', name: 'Burrata Pugliese & Pesto', price: 490, category: 'Antipasti', image: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985b?w=600&auto=format&fit=crop', description: 'Fresh Italian burrata on bed of heirloom cherry tomatoes with Genovese basil drizzle.', badge: 'Imported' },
    { id: 'cmp-2', name: 'Campanella Quattro Formaggi', price: 540, category: 'Wood Fired Pizza', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&auto=format&fit=crop', description: 'Gorgonzola, fontina, fresh mozzarella, and parmigiano on blistered crust.' }
  ]
};

// Reference 7: Social Connect Cafe (Gaming Cafe)
const b7: ReferenceDesignBlueprint = {
  layoutArchetype: 'high-tech-dark',
  contentWidth: 'max-w-7xl',
  header: {
    navStyle: 'floating-glass',
    showTopBar: true,
    isSticky: true,
    ctaVariant: 'dual-cta'
  },
  hero: {
    archetype: 'badge-card',
    alignment: 'left',
    height: 'screen',
    overlayDarkness: 0.6,
    showBadges: true,
    highlightPill: '240Hz RTX 4080 Gaming & PS5 Lounge'
  },
  palette: {
    baseBg: '#09090b',
    surfaceBg: '#18181b',
    textColor: '#fafafa',
    bodyTextColor: '#e4e4e7',
    accentColor: '#6366f1',
    secondaryAccent: '#06b6d4'
  },
  typography: {
    headlineFont: 'Space Grotesk, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Space Grotesk + Inter'
  },
  catalog: {
    style: 'dense-table',
    columns: 3,
    showPriceBadge: true,
    cardCornerRadius: 'rounded-xl'
  },
  sections: [
    { id: 's-hero', type: 'hero', title: 'Next-Gen Esports & Lounge', variant: 'badge-card', order: 1, isEnabled: true },
    { id: 's-rates', type: 'catalog', title: 'Hourly Gaming Passes & PS5 Booths', variant: 'dense-table', order: 2, isEnabled: true },
    { id: 's-tournaments', type: 'timeline', title: 'Weekend Esports Tournaments', variant: 'timeline', order: 3, isEnabled: true },
    { id: 's-booking', type: 'booking-banner', title: 'Book PC / Console Station', variant: 'slot_booking', order: 4, isEnabled: true }
  ],
  footer: {
    style: 'action-banner',
    showNewsletter: false,
    showWorkingHours: true
  },
  vibeTag: 'Cyberpunk Esports Arena'
};

const s7: BusinessWebsite = {
  id: 'site-ref-007',
  slug: 'social-connect-gaming-cafe',
  businessName: 'Social Connect Gaming Cafe',
  category: 'cafe',
  templateId: 'modern',
  referenceId: 'REF_007_SOCIAL_CONNECT',
  tagline: 'RTX 4080 Rigs, PS5 Pro Lounges & Esports Tournament Hub',
  description: 'Premier gaming lounge featuring 30+ 240Hz gaming rigs, PS5 private booths, gaming snacks, energy smoothies, and weekly LAN tourneys.',
  ownerName: 'Sameer Sen',
  phone: '+91 97112 00998',
  whatsapp: '+91 97112 00998',
  email: 'play@socialconnectcafe.com',
  address: 'Near Delhi University North Campus, Delhi',
  city: 'Delhi',
  openingHours: 'Mon-Sun: 10:00 AM - 2:00 AM (Late Night)',
  bookingType: 'slot_booking',
  ctaText: 'Book PC / PS5 Slot',
  designTokens: {
    primaryColor: '#6366f1',
    secondaryColor: '#06b6d4',
    backgroundColor: '#09090b',
    textColor: '#fafafa',
    fontFamily: 'Space Grotesk, sans-serif',
    headingFont: 'Space Grotesk, sans-serif'
  },
  blueprint: b7,
  mapsUrl: 'https://maps.google.com',
  bookingCtaLabel: 'Order on WhatsApp',
  offers: [],
  gallery: [],
  sections: [
    { id: 'sec-hero', title: 'Home', isEnabled: true, order: 1 },
    { id: 'sec-menu', title: 'Menu & Services', isEnabled: true, order: 2 },
    { id: 'sec-contact', title: 'Contact & Location', isEnabled: true, order: 3 }
  ],
  status: 'published' as const,
  pricingPlanId: 'professional' as const,
  amountPaid: 1499,
  paymentStatus: 'paid' as const,
  createdAt: '2026-09-28T16:00:00Z',
  updatedAt: '2026-09-28T16:00:00Z',
  items: [
    { id: 'sc-1', name: 'VIP RTX 4080 Rig (Hourly Pass)', price: 120, category: 'PC Gaming', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop', description: '240Hz 2K curved monitor, mechanical keyboard, wireless mouse, ergonomic chair.', badge: 'Popular' },
    { id: 'sc-2', name: 'PS5 4K Console Lounge (2 Players / Hr)', price: 180, category: 'Console Lounge', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop', description: '65-inch OLED display, dual DualSense haptic controllers, FC 24, Tekken 8.', badge: 'Co-op' }
  ]
};

// Reference 8: Respawn Gaming Lounge (Gaming Cafe - Manual Ref 2)
const b8: ReferenceDesignBlueprint = {
  layoutArchetype: 'high-tech-dark',
  contentWidth: 'max-w-7xl',
  header: {
    navStyle: 'solid-compact',
    showTopBar: true,
    isSticky: true,
    ctaVariant: 'button'
  },
  hero: {
    archetype: 'cinematic-overlay',
    alignment: 'center',
    height: 'standard',
    overlayDarkness: 0.5,
    showBadges: true,
    highlightPill: 'VR Motion Simulators & Esports Scrims'
  },
  palette: {
    baseBg: '#18181b',
    surfaceBg: '#27272a',
    textColor: '#ffffff',
    bodyTextColor: '#e4e4e7',
    accentColor: '#e11d48',
    secondaryAccent: '#f43f5e'
  },
  typography: {
    headlineFont: 'Outfit, sans-serif',
    bodyFont: 'Plus Jakarta Sans, sans-serif',
    fontPairingLabel: 'Outfit + Plus Jakarta'
  },
  catalog: {
    style: 'grid-cards',
    columns: 3,
    showPriceBadge: true,
    cardCornerRadius: 'rounded-xl'
  },
  sections: [
    { id: 's-hero', type: 'hero', title: 'VR & Pro Esports Arena', variant: 'cinematic-overlay', order: 1, isEnabled: true },
    { id: 's-rates', type: 'catalog', title: 'Station Passes & Packages', variant: 'grid-cards', order: 2, isEnabled: true },
    { id: 's-booking', type: 'booking-banner', title: 'Reserve VR Pod', variant: 'slot_booking', order: 3, isEnabled: true }
  ],
  footer: {
    style: 'minimal-compact',
    showNewsletter: false,
    showWorkingHours: true
  },
  vibeTag: 'Carbon Fiber Esports & VR Arcade'
};

const s8: BusinessWebsite = {
  id: 'site-ref-008',
  slug: 'respawn-gaming-arena',
  businessName: 'Respawn Gaming Arena',
  category: 'cafe',
  templateId: 'modern',
  referenceId: 'REF_008_RESPAWN_GAMING',
  tagline: 'VR Motion Pods, High-FPS Competitive Battle Stations & Food Combos',
  description: 'Verified manual input reference: High-energy esports arena featuring Oculus VR pods, racing simulators, student discount hours, and LAN setups.',
  ownerName: 'Rohit Kulkarni',
  phone: '+91 98800 66778',
  whatsapp: '+91 98800 66778',
  email: 'arena@respawngaming.in',
  address: 'Koramangala 5th Block, Bengaluru',
  city: 'Bengaluru',
  openingHours: 'Mon-Sun: 11:00 AM - 1:00 AM',
  bookingType: 'slot_booking',
  ctaText: 'Book VR / Gaming Pod',
  designTokens: {
    primaryColor: '#e11d48',
    secondaryColor: '#f43f5e',
    backgroundColor: '#18181b',
    textColor: '#ffffff',
    fontFamily: 'Outfit, sans-serif',
    headingFont: 'Outfit, sans-serif'
  },
  blueprint: b8,
  mapsUrl: 'https://maps.google.com',
  bookingCtaLabel: 'Order on WhatsApp',
  offers: [],
  gallery: [],
  sections: [
    { id: 'sec-hero', title: 'Home', isEnabled: true, order: 1 },
    { id: 'sec-menu', title: 'Menu & Services', isEnabled: true, order: 2 },
    { id: 'sec-contact', title: 'Contact & Location', isEnabled: true, order: 3 }
  ],
  status: 'published' as const,
  pricingPlanId: 'professional' as const,
  amountPaid: 1499,
  paymentStatus: 'paid' as const,
  createdAt: '2026-09-28T16:00:00Z',
  updatedAt: '2026-09-28T16:00:00Z',
  items: [
    { id: 'rsp-1', name: 'VR Racing Simulator Pod (30 Mins)', price: 250, category: 'VR Experience', image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&auto=format&fit=crop', description: 'Force-feedback steering, pedal box, and full motion roll cage for F1 & Assetto Corsa.', badge: 'Immersive' },
    { id: 'rsp-2', name: 'Student 5-Hour Day Pass', price: 399, category: 'Passes', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop', description: 'Valid weekdays between 11 AM - 5 PM on standard tournament rigs.' }
  ]
};

// Reference 9: Honey & Dough (Bakery)
const b9: ReferenceDesignBlueprint = {
  layoutArchetype: 'editorial-magazine',
  contentWidth: 'max-w-6xl',
  header: {
    navStyle: 'floating-glass',
    showTopBar: true,
    isSticky: true,
    ctaVariant: 'dual-cta'
  },
  hero: {
    archetype: 'asymmetric-cards',
    alignment: 'left',
    height: 'standard',
    overlayDarkness: 0.15,
    showBadges: true,
    highlightPill: 'Artisan Sourdough, Macarons & Wedding Cakes'
  },
  palette: {
    baseBg: '#fffbeb',
    surfaceBg: '#ffffff',
    textColor: '#292524',
    bodyTextColor: '#44403c',
    accentColor: '#d97706',
    secondaryAccent: '#b45309'
  },
  typography: {
    headlineFont: 'Fraunces, serif',
    bodyFont: 'DM Sans, sans-serif',
    fontPairingLabel: 'Fraunces + DM Sans'
  },
  catalog: {
    style: 'grid-cards',
    columns: 3,
    showPriceBadge: true,
    cardCornerRadius: 'rounded-2xl'
  },
  sections: [
    { id: 's-hero', type: 'hero', title: 'French Patisserie & Bakery', variant: 'asymmetric-cards', order: 1, isEnabled: true },
    { id: 's-bakes', type: 'catalog', title: 'Cakes, Breads & Desserts', variant: 'grid-cards', order: 2, isEnabled: true },
    { id: 's-custom', type: 'custom-features', title: 'Bespoke Celebration Cakes', variant: 'feature-grid', order: 3, isEnabled: true },
    { id: 's-order', type: 'booking-banner', title: 'Custom Cake Enquiry', variant: 'consultation_quote', order: 4, isEnabled: true }
  ],
  footer: {
    style: 'multi-column-rich',
    showNewsletter: true,
    showWorkingHours: true
  },
  vibeTag: 'Parisian Chic Patisserie'
};

const s9: BusinessWebsite = {
  id: 'site-ref-009',
  slug: 'honey-and-dough',
  businessName: 'Honey & Dough',
  category: 'bakery',
  templateId: 'artisan',
  referenceId: 'REF_009_HONEY_DOUGH',
  tagline: 'Artisanal Bakes, Handcrafted Cakes & Gourmet Hampers',
  description: 'French-inspired patisserie and cafe chain renowned for freshly baked sourdough, Belgian chocolate truffles, and bespoke celebratory cakes.',
  ownerName: 'Ayesha & Kabir',
  phone: '+91 99990 12345',
  whatsapp: '+91 99990 12345',
  email: 'info@honeyanddough.in',
  address: 'Defence Colony Main Market, New Delhi',
  city: 'New Delhi',
  openingHours: 'Mon-Sun: 8:00 AM - 11:00 PM',
  bookingType: 'consultation_quote',
  ctaText: 'Order Cake / WhatsApp',
  designTokens: {
    primaryColor: '#d97706',
    secondaryColor: '#b45309',
    backgroundColor: '#fffcf5',
    textColor: '#292524',
    fontFamily: 'Fraunces, serif',
    headingFont: 'Fraunces, serif'
  },
  blueprint: b9,
  mapsUrl: 'https://maps.google.com',
  bookingCtaLabel: 'Order on WhatsApp',
  offers: [],
  gallery: [],
  sections: [
    { id: 'sec-hero', title: 'Home', isEnabled: true, order: 1 },
    { id: 'sec-menu', title: 'Menu & Services', isEnabled: true, order: 2 },
    { id: 'sec-contact', title: 'Contact & Location', isEnabled: true, order: 3 }
  ],
  status: 'published' as const,
  pricingPlanId: 'professional' as const,
  amountPaid: 1499,
  paymentStatus: 'paid' as const,
  createdAt: '2026-09-28T16:00:00Z',
  updatedAt: '2026-09-28T16:00:00Z',
  items: [
    { id: 'hnd-1', name: 'Belgian Dark Chocolate Truffle Cake (1kg)', price: 950, category: 'Cakes', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop', description: 'Rich 70% Callebaut ganache layers with moist cocoa sponge.', badge: 'Signature' },
    { id: 'hnd-2', name: 'French Butter Croissant (Pack of 2)', price: 180, category: 'Viennoiserie', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&auto=format&fit=crop', description: 'Flaky 27-layer laminated dough baked fresh every morning at 7 AM.' }
  ]
};

// Reference 10: Rameshwar's Annapurna (Bakery)
const b10: ReferenceDesignBlueprint = {
  layoutArchetype: 'clean-catalog',
  contentWidth: 'max-w-6xl',
  header: {
    navStyle: 'solid-compact',
    showTopBar: true,
    isSticky: true,
    ctaVariant: 'dual-cta'
  },
  hero: {
    archetype: 'product-showcase',
    alignment: 'center',
    height: 'compact',
    overlayDarkness: 0.3,
    showBadges: true,
    highlightPill: 'Heritage Bakery, Biscuits & Rusks'
  },
  palette: {
    baseBg: '#1e3a2f',
    surfaceBg: '#ffffff',
    textColor: '#fef3c7',
    bodyTextColor: '#27272a',
    accentColor: '#d97706',
    secondaryAccent: '#059669'
  },
  typography: {
    headlineFont: 'Plus Jakarta Sans, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Plus Jakarta Sans + Inter'
  },
  catalog: {
    style: 'grid-cards',
    columns: 3,
    showPriceBadge: true,
    cardCornerRadius: 'rounded-xl'
  },
  sections: [
    { id: 's-hero', type: 'hero', title: 'Traditional Indian Bakery', variant: 'product-showcase', order: 1, isEnabled: true },
    { id: 's-catalog', type: 'catalog', title: 'Rusks, Cookies & Dry Cakes', variant: 'grid-cards', order: 2, isEnabled: true },
    { id: 's-wholesale', type: 'booking-banner', title: 'Bulk Party Orders', variant: 'whatsapp_order', order: 3, isEnabled: true }
  ],
  footer: {
    style: 'multi-column-rich',
    showNewsletter: false,
    showWorkingHours: true
  },
  vibeTag: 'Traditional Indian Confectionery'
};

const s10: BusinessWebsite = {
  id: 'site-ref-010',
  slug: 'rameshwars-annapurna-bakery',
  businessName: "Rameshwar's Annapurna Bakery",
  category: 'bakery',
  templateId: 'modern',
  referenceId: 'REF_010_RAMESHWAR_ANNAPURNA',
  tagline: 'Pure Desi Ghee Rusks, Cashew Cookies & Mawa Cakes',
  description: 'Heritage city bakery baking crunchy tea rusks, fruit biscuits, eggless plum cakes, and savory party snacks since 1982.',
  ownerName: 'Rameshwar Dayal',
  phone: '+91 94140 22334',
  whatsapp: '+91 94140 22334',
  email: 'sales@rameshwarsannapurna.com',
  address: 'Johari Bazaar, Near Hawa Mahal, Jaipur',
  city: 'Jaipur',
  openingHours: 'Mon-Sun: 7:00 AM - 10:00 PM',
  bookingType: 'whatsapp_order',
  ctaText: 'WhatsApp Quick Order',
  designTokens: {
    primaryColor: '#1e3a2f',
    secondaryColor: '#d97706',
    backgroundColor: '#fffdfa',
    textColor: '#27272a',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    headingFont: 'Plus Jakarta Sans, sans-serif'
  },
  blueprint: b10,
  mapsUrl: 'https://maps.google.com',
  bookingCtaLabel: 'Order on WhatsApp',
  offers: [],
  gallery: [],
  sections: [
    { id: 'sec-hero', title: 'Home', isEnabled: true, order: 1 },
    { id: 'sec-menu', title: 'Menu & Services', isEnabled: true, order: 2 },
    { id: 'sec-contact', title: 'Contact & Location', isEnabled: true, order: 3 }
  ],
  status: 'published' as const,
  pricingPlanId: 'professional' as const,
  amountPaid: 1499,
  paymentStatus: 'paid' as const,
  createdAt: '2026-09-28T16:00:00Z',
  updatedAt: '2026-09-28T16:00:00Z',
  items: [
    { id: 'ra-1', name: 'Special Elaichi Milk Rusk (400g Box)', price: 95, category: 'Rusks', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop', description: 'Double baked with cardamom and fresh milk for the ultimate chai dip.', badge: 'Bestseller' },
    { id: 'ra-2', name: 'Mawa Dry Fruit Cake (500g)', price: 280, category: 'Cakes', image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=600&auto=format&fit=crop', description: 'Dense rich tea-time cake loaded with chopped pistachios and almonds.' }
  ]
};

export const BATCH_001_REFERENCES_PART1: BatchReferenceItem[] = [
  {
    referenceId: 'REF_001_MADRAS_CENTRAL',
    categoryNo: 1,
    categoryId: 'restaurant',
    categoryName: 'Restaurant',
    referenceWebsiteName: 'Madras Central Cafe',
    originalReferenceUrl: 'https://madrascentralcafe.com/',
    inspectionStatus: 'inspected',
    inspectionNotes: 'Verified live site: brass filter coffee aesthetic, dosa showcase, table reservation CTA.',
    implementationStatus: 'implemented',
    previewStatus: 'ready',
    publishStatus: 'active',
    desktopScreenshot: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&auto=format&fit=crop',
    mobileScreenshot: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&auto=format&fit=crop',
    blueprint: b1,
    website: s1
  },
  {
    referenceId: 'REF_002_MAA_RESTAURANT',
    categoryNo: 1,
    categoryId: 'restaurant',
    categoryName: 'Restaurant',
    referenceWebsiteName: 'Maa Restaurant & Sweets',
    originalReferenceUrl: 'https://maarestaurant.in/',
    inspectionStatus: 'inspected',
    inspectionNotes: 'Dual restaurant & sweets counter with Jaipur heritage color palette and thali specials.',
    implementationStatus: 'implemented',
    previewStatus: 'ready',
    publishStatus: 'active',
    desktopScreenshot: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&auto=format&fit=crop',
    mobileScreenshot: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop',
    blueprint: b2,
    website: s2
  },
  {
    referenceId: 'REF_003_CAFE_NOOK',
    categoryNo: 2,
    categoryId: 'cafe',
    categoryName: 'Cafe',
    referenceWebsiteName: 'Cafe Nook',
    originalReferenceUrl: 'https://cafenook.in/',
    inspectionStatus: 'inspected',
    inspectionNotes: 'Specialty coffee roastery with cozy ambiance, pour-over bar, and reading corner.',
    implementationStatus: 'implemented',
    previewStatus: 'ready',
    publishStatus: 'active',
    desktopScreenshot: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=800&auto=format&fit=crop',
    mobileScreenshot: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=400&auto=format&fit=crop',
    blueprint: b3,
    website: s3
  },
  {
    referenceId: 'REF_004_GATEWAY_CAFE',
    categoryNo: 2,
    categoryId: 'cafe',
    categoryName: 'Cafe',
    referenceWebsiteName: 'Gateway Cafe',
    originalReferenceUrl: 'https://www.gatewaycafe.in/',
    inspectionStatus: 'inspected',
    inspectionNotes: 'Scenic terrace deck cafe with European brunch, cold brew nitro, and sunset bookings.',
    implementationStatus: 'implemented',
    previewStatus: 'ready',
    publishStatus: 'active',
    desktopScreenshot: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=800&auto=format&fit=crop',
    mobileScreenshot: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&auto=format&fit=crop',
    blueprint: b4,
    website: s4
  },
  {
    referenceId: 'REF_005_KAFFIIAA',
    categoryNo: 3,
    categoryId: 'cafe',
    categoryName: 'Rooftop Cafe',
    referenceWebsiteName: 'Kaffiiaa',
    originalReferenceUrl: 'https://www.kaffiiaa.in/',
    inspectionStatus: 'inspected',
    inspectionNotes: 'Noida rooftop lounge with sunset view, Italian mocktails, and live acoustic music sessions.',
    implementationStatus: 'implemented',
    previewStatus: 'ready',
    publishStatus: 'active',
    desktopScreenshot: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop',
    mobileScreenshot: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&auto=format&fit=crop',
    blueprint: b5,
    website: s5
  },
  {
    referenceId: 'REF_006_CAMPANELLA',
    categoryNo: 3,
    categoryId: 'cafe',
    categoryName: 'Rooftop Cafe',
    referenceWebsiteName: 'Campanella',
    originalReferenceUrl: 'https://campanella.in/',
    inspectionStatus: 'inspected',
    inspectionNotes: 'Italian sky bistro with Neapolitan wood-fired pizzas, burrata, and 360-degree skyline cabanas.',
    implementationStatus: 'implemented',
    previewStatus: 'ready',
    publishStatus: 'active',
    desktopScreenshot: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&auto=format&fit=crop',
    mobileScreenshot: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985b?w=400&auto=format&fit=crop',
    blueprint: b6,
    website: s6
  },
  {
    referenceId: 'REF_007_SOCIAL_CONNECT',
    categoryNo: 4,
    categoryId: 'cafe',
    categoryName: 'Gaming Cafe',
    referenceWebsiteName: 'Social Connect Cafe',
    originalReferenceUrl: 'https://socialconnectcafe.com/',
    inspectionStatus: 'inspected',
    inspectionNotes: 'High-tech cyberpunk esports lounge with RTX 4080 rigs, PS5 lounges, and tournament brackets.',
    implementationStatus: 'implemented',
    previewStatus: 'ready',
    publishStatus: 'active',
    desktopScreenshot: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop',
    mobileScreenshot: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&auto=format&fit=crop',
    blueprint: b7,
    website: s7
  },
  {
    referenceId: 'REF_008_RESPAWN_GAMING',
    categoryNo: 4,
    categoryId: 'cafe',
    categoryName: 'Gaming Cafe',
    referenceWebsiteName: 'Respawn Gaming Arena',
    originalReferenceUrl: 'https://socialconnectcafe.com/gaming',
    inspectionStatus: 'manual_required',
    inspectionNotes: 'Manual verified reference: VR motion racing simulator, student gamer day passes, esports scrims.',
    implementationStatus: 'implemented',
    previewStatus: 'ready',
    publishStatus: 'active',
    desktopScreenshot: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&auto=format&fit=crop',
    mobileScreenshot: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&auto=format&fit=crop',
    blueprint: b8,
    website: s8
  },
  {
    referenceId: 'REF_009_HONEY_DOUGH',
    categoryNo: 5,
    categoryId: 'bakery',
    categoryName: 'Bakery',
    referenceWebsiteName: 'Honey & Dough',
    originalReferenceUrl: 'https://www.honeyanddough.in/',
    inspectionStatus: 'inspected',
    inspectionNotes: 'Parisian patisserie with sourdough loaves, Belgian chocolate cakes, and bespoke celebration orders.',
    implementationStatus: 'implemented',
    previewStatus: 'ready',
    publishStatus: 'active',
    desktopScreenshot: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop',
    mobileScreenshot: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&auto=format&fit=crop',
    blueprint: b9,
    website: s9
  },
  {
    referenceId: 'REF_010_RAMESHWAR_ANNAPURNA',
    categoryNo: 5,
    categoryId: 'bakery',
    categoryName: 'Bakery',
    referenceWebsiteName: "Rameshwar's Annapurna",
    originalReferenceUrl: 'https://www.rameshwarsannapurna.com/',
    inspectionStatus: 'inspected',
    inspectionNotes: 'Heritage Indian bakery with milk rusks, cashew biscuits, dry mawa cakes, and bulk party supply.',
    implementationStatus: 'implemented',
    previewStatus: 'ready',
    publishStatus: 'active',
    desktopScreenshot: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop',
    mobileScreenshot: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=400&auto=format&fit=crop',
    blueprint: b10,
    website: s10
  }
];
