/**
 * Centralized Configuration for SITE #75
 * AURA LUXE WEDDINGS (Inspired by Bon Evento Architecture & Luxury Wedding Planners)
 * Complete brand system allows updating all branding, contacts, colors, and endpoints in one place.
 */

export const site75Config = {
  // Brand Configuration
  SITE_NAME: 'Site #75',
  BRAND_NAME: 'AURA LUXE WEDDINGS',
  LEGAL_NAME: 'Aura Luxe Wedding Atelier Private Limited',
  WORDMARK: 'AURA LUXE',
  TAGLINE: 'Bespoke Haute Couture Weddings & Destination Celebrations Worldwide',
  SUBTITLE: 'Luxury Wedding Planning, Scenography & Experiential Production',
  FOUNDERS: 'Aarav & Meera Singhania',
  FOUNDERS_ROLE: 'Creative Directors & Principal Scenographers',
  ESTABLISHED: '2016',

  // Contact & Concierge Hotlines (Original Site #75 details)
  PHONE: '+91 98200 75075',
  PHONE_DISPLAY: '+91 98200 75075',
  TOLL_FREE: '1800 750 7575',
  EMAIL: 'concierge@auraluxeweddings.com',
  PLANNING_EMAIL: 'planning@auraluxeweddings.com',
  WHATSAPP: '+919820075075',
  WHATSAPP_DISPLAY: '+91 98200 75075',
  WHATSAPP_DEFAULT_MSG: 'Hello Aura Luxe Concierge, I would like to inquire about planning a bespoke luxury wedding celebration.',

  // Physical Headquarters & Regional Salons
  ADDRESS: 'The Palladium Atelier, 12th Floor, High Street Phoenix & Juhu Tara Road, Mumbai, Maharashtra 400013, India',
  REGIONAL_ATELIERS: 'Mumbai · New Delhi · Udaipur · Goa · Dubai · Lake Como',

  // Social Channels
  INSTAGRAM: 'https://instagram.com/auraluxeweddings',
  FACEBOOK: 'https://facebook.com/auraluxeweddings',
  YOUTUBE: 'https://youtube.com/@auraluxeweddings',
  PINTEREST: 'https://pinterest.com/auraluxeweddings',
  LINKEDIN: 'https://linkedin.com/company/aura-luxe-weddings',
  WEBSITE_URL: 'https://auraluxeweddings.com',

  // Visual Theme Tokens (Luxury Editorial Dark & Gold Atmosphere)
  COLORS: {
    bgDark: '#080B12',          // Deepest Obsidian Night
    bgDarkSecondary: '#0E131F', // Midnight Navy Slate
    bgCardDark: '#131A29',      // Elevated Midnight Card
    primaryGold: '#D4AF37',     // Royal Champagne Gold
    primaryGoldLight: '#E8CA65',// Radiant Soft Gold
    accentBronze: '#B8860B',    // Warm Burnished Bronze
    borderDark: '#20293D',      // Subtle Hairline Dark Border
    textLight: '#F5F5F7',       // Pure Crisp Text
    textMuted: '#94A3B8',       // Refined Slate Muted Text
    surfaceLight: '#FAF8F5',    // Warm Ivory for Light Accents
    surfaceCardLight: '#FFFFFF',// Pristine Card Canvas
    borderLight: '#E8E1D5'      // Soft Sand Hairline Border
  },

  // Fonts Configuration
  FONTS: {
    heading: "'Cormorant Garamond', 'Playfair Display', serif",
    body: "'Outfit', 'Inter', sans-serif",
    accent: "'Cormorant Garamond', serif"
  },

  // Key Statistics
  STATS: [
    { value: '450+', label: 'Bespoke Celebrations' },
    { value: '18+', label: 'Global Destinations' },
    { value: '100%', label: 'Turnkey In-House Production' },
    { value: '4.99★', label: 'Client Acclaim' }
  ],

  // Centralized Form Endpoint Configuration (Easy swap to production backend)
  FORM_ENDPOINT: '/api/site75/planning-inquiry',
  CALLBACK_ENDPOINT: '/api/site75/callback-request',
  NEWSLETTER_ENDPOINT: '/api/site75/newsletter-subscribe'
};

export default site75Config;
