/**
 * Centralized Configuration for SITE #76
 * ARANYA EARTH — Premium Natural Clothing & Mindful Living
 * Reference: Complete high-end ecommerce structure adapted from slow handcrafted ethos
 */

export const site76Config = {
  // Brand Configuration
  SITE_NAME: 'Site #76',
  BRAND_NAME: 'ARANYA EARTH',
  LEGAL_NAME: 'Aranya Earth Handloom & Natural Apparel Private Limited',
  WORDMARK: 'ARANYA',
  TAGLINE: 'Conscious Slow Clothing Crafted from Organic Cotton, Pure Linen, Hemp & Plant Dyes',
  SUBTITLE: 'Artisanal Natural Fashion · Timeless Earth-Dyed Silhouettes',
  FOUNDER: 'Devika & Kabir Varma',
  FOUNDER_ROLE: 'Textile Conservators & Creative Directors',
  ESTABLISHED: '2018',

  // Contact & Concierge Hotlines
  PHONE: '+91 98108 76076',
  PHONE_DISPLAY: '+91 98108 76076',
  TOLL_FREE: '1800 760 7676',
  EMAIL: 'concierge@aranyaearth.com',
  ORDERS_EMAIL: 'orders@aranyaearth.com',
  WHATSAPP: '+919810876076',
  WHATSAPP_DISPLAY: '+91 98108 76076',
  WHATSAPP_DEFAULT_MSG: 'Hello Aranya Earth Concierge, I would like assistance with selecting natural handloom garments and sizing.',

  // Physical Ateliers & Design Studios
  ADDRESS: 'The Khadi Courtyard, Studio 76, Mehrauli Heritage Precinct, Near Qutub Minar, New Delhi 110030, India',
  REGIONAL_ATELIERS: 'New Delhi · Mumbai · Bengaluru · Jaipur · Kochi',

  // Social Channels
  INSTAGRAM: 'https://instagram.com/aranyaearth',
  FACEBOOK: 'https://facebook.com/aranyaearth',
  PINTEREST: 'https://pinterest.com/aranyaearth',
  YOUTUBE: 'https://youtube.com/@aranyaearth',
  WEBSITE_URL: 'https://aranyaearth.com',

  // Visual Theme Tokens (Premium Earthy & Minimal Fashion Palette)
  COLORS: {
    ivory: '#FDFBF7',         // Warm off-white canvas
    beige: '#F5EFEB',         // Soft linen tone
    sand: '#EAE2D7',          // Subtle structural tint
    sandDark: '#D5C7B5',      // Hairline borders
    terracotta: '#C16A52',    // Clay & madder root accent
    terracottaDark: '#9C4C36',
    sage: '#98A391',          // Dried herbal green
    sageDark: '#6E7C65',
    olive: '#586737',         // Earthy forest olive
    forest: '#263422',        // Deep botanical green
    naturalBrown: '#544133',  // Raw bark & earth
    charcoal: '#1E1F21',      // Premium soft charcoal text
    mutedText: '#6F736D',     // Secondary prose
    borderLight: '#E8E1D5',   // Gentle divider line
    badgeBg: '#F1ECE3'
  },

  // Fonts Configuration
  FONTS: {
    heading: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
    body: "'Inter', 'Plus Jakarta Sans', system-ui, sans-serif",
    mono: "'Space Mono', monospace"
  },

  // Key Statistics & Certifications
  STATS: [
    { value: '100%', label: 'Natural Plant & Mineral Fibers' },
    { value: '1,200+', label: 'Artisan Weavers Supported' },
    { value: '0%', label: 'Synthetic Polyester or Microplastics' },
    { value: 'GOTS', label: 'Certified Organic Processing' }
  ],

  // Free Shipping Threshold & Currency
  CURRENCY_SYMBOL: '₹',
  FREE_SHIPPING_THRESHOLD: 2499,
  DEFAULT_SHIPPING_FEE: 150,

  // Discount Coupons
  AVAILABLE_COUPONS: [
    { code: 'EARTH10', discountPercent: 10, minSpend: 1999, description: '10% off on your conscious wardrobe update' },
    { code: 'FIRSTBUY', discountPercent: 15, minSpend: 2999, description: '15% welcome treat for first-time natural seekers' },
    { code: 'SLOWFASHION', discountPercent: 20, minSpend: 6999, description: 'Flat 20% off on slow artisanal orders above ₹6,999' }
  ]
};

export default site76Config;
