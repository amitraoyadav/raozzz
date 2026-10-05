/**
 * Centralized Configuration for SITE #74
 * Grandeur Luxury Weddings & Resorts (Inspired by Marriott India Weddings UX/UI architecture)
 * Easy to update brand name, contacts, logos, colors, and endpoints in one place.
 */

export const site74Config = {
  // Brand Configuration
  BRAND_NAME: 'GRANDEUR WEDDINGS & RESORTS',
  PLACEHOLDER_BRAND: 'SITE #74',
  WORDMARK: 'GRANDEUR',
  TAGLINE: 'Where Everlasting Vows Meet Timeless Hospitality',
  SUBTITLE: 'Luxury Palaces, Beachfronts & Iconic City Destinations',
  ESTABLISHED: '2026',
  
  // Contact & Concierge
  PHONE: '+91 98210 74074',
  PHONE_DISPLAY: '+91 98210 74074',
  TOLL_FREE: '1800 740 7474',
  EMAIL: 'concierge@grandeurweddings74.com',
  PLANNING_EMAIL: 'planning@grandeurweddings74.com',
  WHATSAPP: '+919821074074',
  WHATSAPP_DISPLAY: '+91 98210 74074',
  ADDRESS: 'Grandeur Hospitality Headquarters, Luxury Pavilion, Aerocity, New Delhi 110037',
  REGIONAL_HUBS: 'Delhi NCR · Mumbai · Jaipur · Udaipur · Goa · Bengaluru · Kochi · Dubai',

  // Social Links
  INSTAGRAM: 'https://instagram.com/grandeurweddings74',
  FACEBOOK: 'https://facebook.com/grandeurweddings74',
  YOUTUBE: 'https://youtube.com/@grandeurweddings74',
  PINTEREST: 'https://pinterest.com/grandeurweddings74',

  // Visual Theme Tokens
  COLORS: {
    primary: '#C5A059',       // Royal Champagne Gold
    primaryDark: '#9E7D3B',   // Deep Antique Gold
    primaryLight: '#F3E8D0',  // Soft Champagne Wash
    secondary: '#141210',     // Deep Obsidian Slate
    accent: '#8C6D37',        // Warm Bronze
    surface: '#FDFCF9',       // Ivory Porcelain Canvas
    surfaceCard: '#FFFFFF',   // Pure Clean Card
    border: '#E8E1D5',        // Subtle Warm Hairline Border
    textMuted: '#786F63'      // Muted Warm Charcoal
  },

  // Key Statistics
  STATS: [
    { value: '45+', label: 'Luxury Resorts & Palaces' },
    { value: '1,200+', label: 'Celebrations Hosted' },
    { value: '18', label: 'Iconic Destinations' },
    { value: '100%', label: 'In-House Bespoke Execution' }
  ],

  // Form API Endpoint Placeholder (centralized for backend swap)
  API_ENDPOINTS: {
    planningInquiry: '/api/site74/planning-inquiry',
    callbackRequest: '/api/site74/callback-request',
    newsletter: '/api/site74/newsletter'
  }
};

export default site74Config;
