/**
 * Centralized Configuration for SITE #78
 * AURELIA GOA — LUXURY BEACH RESORT & BANQUET
 * Ditto recreation of Anemos Goa (anemosgoa.com)
 * Luxury Beachfront Resort with Private Pool Rooms & Event Banquets in Morjim, North Goa
 */

export const site78Config = {
  // Brand Identity
  BRAND_NAME: 'AURELIA GOA',
  LEGAL_NAME: 'Aurelia Luxury Beach Resort & Banquets Private Limited',
  TAGLINE: 'Where the Wind Whispers & Time Stands Still',
  SUBTITLE: 'Best Luxury Beach Resort & Banquets in North Goa',
  WORDMARK: 'AURELIA',
  SUB_WORDMARK: 'BEACH RESORT · MORJIM · GOA',
  ESTABLISHED_YEAR: '2024',

  // Contact Information
  PHONE_ROOMS: '+91 89568 41401',
  PHONE_ROOMS_RAW: '+918956841401',
  PHONE_RESTAURANT: '+91 89569 57302',
  PHONE_RESTAURANT_RAW: '+918956957302',
  PHONE_EVENTS: '+91 89568 41405',
  PHONE_EVENTS_RAW: '+918956841405',
  
  WHATSAPP: '+918956841401',
  WHATSAPP_DISPLAY: '+91 89568 41401',
  WHATSAPP_DEFAULT_MSG: 'Hello Aurelia Goa Concierge, I would like to enquire about room reservations and luxury stays.',
  WHATSAPP_EVENTS_MSG: 'Hello Aurelia Goa Events Team, I would like to enquire about hosting a wedding / celebration banquet at your resort.',

  EMAIL_RESERVATIONS: 'reservations@aureliagoaresort.com',
  EMAIL_GENERAL: 'info@aureliagoaresort.com',
  EMAIL_EVENTS: 'events@aureliagoaresort.com',

  // Location & Timings
  ADDRESS_LINE: '127/1 Vithaldas Waddo, Morjim Beachfront',
  DISTRICT: 'Pernem, North Goa',
  PINCODE: '403512',
  STATE: 'Goa',
  COUNTRY: 'India',
  FULL_ADDRESS: '127/1 Vithaldas Waddo, Morjim Beachfront, Pernem, North Goa 403512, India',
  LANDMARK: 'Direct Access to Morjim Beach, North Goa',
  NEAREST_AIRPORT: 'Manohar International Airport MOPA (GOX) — 32 km / 35 mins',
  DABOLIM_AIRPORT: 'Dabolim Airport (GOI) — 54 km / 70 mins',

  CHECK_IN_TIME: '02:00 PM',
  CHECK_OUT_TIME: '11:00 AM',

  // Google Maps Embed & Link
  MAPS_EMBED_URL: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.485145719335!2d73.72591637584742!3d15.637894084988636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfe9e2b1e2a5ab%3A0xb5b7db1c3b1a2e3f!2sMorjim%20Beach!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  MAPS_DIRECTIONS_URL: 'https://maps.google.com/?q=Morjim+Beach+North+Goa',

  // Social Links
  INSTAGRAM: 'https://instagram.com/aureliagoaresort',
  FACEBOOK: 'https://facebook.com/aureliagoaresort',
  YOUTUBE: 'https://youtube.com/@aureliagoaresort',
  TRIPADVISOR: 'https://tripadvisor.com/Hotel_Review-Morjim_Goa',

  // Theme Design Tokens (Matches Anemos Taaza theme exactly)
  COLORS: {
    primary: '#747157',         // Olive Sage Khaki
    primaryDark: '#56543e',     // Deep olive
    primaryLight: '#8f8b6e',    // Light sage
    secondary: '#222222',       // Rich charcoal black
    accent: '#B99D75',          // Warm brass / champagne sand gold
    accentHover: '#cbb28d',     // Lighter gold
    tertiary: '#F3EEE7',        // Warm linen sand cream
    tertiaryDark: '#e7dfd4',    // Darker cream
    bodyBg: '#FFFFFF',          // Pure white
    bodyText: '#1C1C1C',        // Soft charcoal text
    mutedText: '#6B6858',       // Warm muted grey
    borderColor: '#E5DFD7',     // Soft sand border
    borderGold: '#D8C7B0',      // Soft champagne border
    darkCardBg: '#181818',      // Elegant dark background
  },

  // Typography
  FONTS: {
    heading: "'Cormorant', 'Cormorant Garamond', Georgia, serif",
    body: "'Jost', system-ui, -apple-system, sans-serif",
    accent: "'Cormorant', serif"
  }
};
