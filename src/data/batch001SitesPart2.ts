import { BusinessWebsite } from '../types';
import { ReferenceDesignBlueprint } from '../types/referenceDesign';
import { BatchReferenceItem } from '../types/batch';

// Reference 11: SNA Bakehouse (Home Baker)
const b11: ReferenceDesignBlueprint = {
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
    alignment: 'center',
    height: 'standard',
    overlayDarkness: 0.1,
    showBadges: true,
    highlightPill: '100% Eggless Custom Celebration Cakes'
  },
  palette: {
    baseBg: '#faf5ff',
    surfaceBg: '#ffffff',
    textColor: '#581c87',
    bodyTextColor: '#3b0764',
    accentColor: '#9333ea',
    secondaryAccent: '#ec4899'
  },
  typography: {
    headlineFont: 'Playfair Display, serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Playfair Display + Inter'
  },
  catalog: {
    style: 'visual-cards',
    columns: 2,
    showPriceBadge: true,
    cardCornerRadius: 'rounded-2xl'
  },
  sections: [
    { id: 's-hero', type: 'hero', title: 'Artisanal Home Bakehouse', variant: 'minimal-editorial', order: 1, isEnabled: true },
    { id: 's-portfolio', type: 'catalog', title: 'Custom Designer Cakes', variant: 'visual-cards', order: 2, isEnabled: true },
    { id: 's-process', type: 'timeline', title: 'How to Order Custom Cakes', variant: 'timeline', order: 3, isEnabled: true },
    { id: 's-consult', type: 'booking-banner', title: 'Schedule Cake Consultation', variant: 'consultation_quote', order: 4, isEnabled: true }
  ],
  footer: {
    style: 'brand-centered',
    showNewsletter: false,
    showWorkingHours: true
  },
  vibeTag: 'Intimate Bespoke Cake Studio'
};

const s11: BusinessWebsite = {
  id: 'site-ref-011',
  slug: 'sna-bakehouse',
  businessName: 'SNA Bakehouse',
  category: 'home_baker',
  templateId: 'minimal',
  referenceId: 'REF_011_SNA_BAKEHOUSE',
  tagline: 'Handcrafted Tiered Wedding Cakes & French Macarons',
  description: 'Boutique home-based studio specializing in 100% eggless gourmet birthday cakes, delicate macarons, and floral tier wedding masterpieces.',
  ownerName: 'Sneha Agarwal',
  phone: '+91 99200 77889',
  whatsapp: '+91 99200 77889',
  email: 'orders@snabakehouse.com',
  address: 'Indiranagar 100ft Road, Bengaluru',
  city: 'Bengaluru',
  openingHours: 'Tue-Sun: 10:00 AM - 7:00 PM (By Appointment)',
  bookingType: 'consultation_quote',
  ctaText: 'WhatsApp for Custom Cake',
  designTokens: {
    primaryColor: '#9333ea',
    secondaryColor: '#ec4899',
    backgroundColor: '#faf5ff',
    textColor: '#3b0764',
    fontFamily: 'Playfair Display, serif',
    headingFont: 'Playfair Display, serif'
  },
  blueprint: b11,
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
    { id: 'sna-1', name: 'Lavender & Wild Berry 2-Tier Cake (2kg)', price: 2400, category: 'Wedding Cakes', image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=600&auto=format&fit=crop', description: 'Fresh edible lavender sponge with blackberry coulis and Swiss meringue buttercream.', badge: 'Custom' },
    { id: 'sna-2', name: 'Box of 8 Pastel French Macarons', price: 680, category: 'Dessert Boxes', image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=600&auto=format&fit=crop', description: 'Pistachio, Salted Caramel, Rose Petal, and Dark Chocolate Ganache.' }
  ]
};

// Reference 12: Vanilla Miel Patisserie (Home Baker - Manual Ref 2)
const b12: ReferenceDesignBlueprint = {
  layoutArchetype: 'luxury-minimal',
  contentWidth: 'max-w-6xl',
  header: {
    navStyle: 'minimal-transparent',
    showTopBar: false,
    isSticky: true,
    ctaVariant: 'button'
  },
  hero: {
    archetype: 'cinematic-overlay',
    alignment: 'center',
    height: 'screen',
    overlayDarkness: 0.35,
    showBadges: true,
    highlightPill: 'Haute Pâtisserie & Dessert Sculptures'
  },
  palette: {
    baseBg: '#171717',
    surfaceBg: '#ffffff',
    textColor: '#f5f5f4',
    bodyTextColor: '#262626',
    accentColor: '#eab308',
    secondaryAccent: '#a1a1aa'
  },
  typography: {
    headlineFont: 'Outfit, sans-serif',
    bodyFont: 'Plus Jakarta Sans, sans-serif',
    fontPairingLabel: 'Outfit + Plus Jakarta'
  },
  catalog: {
    style: 'visual-cards',
    columns: 3,
    showPriceBadge: true,
    cardCornerRadius: 'rounded-xl'
  },
  sections: [
    { id: 's-hero', type: 'hero', title: 'Haute Pâtisserie Collection', variant: 'cinematic-overlay', order: 1, isEnabled: true },
    { id: 's-menu', type: 'catalog', title: 'Limited Daily Creations', variant: 'visual-cards', order: 2, isEnabled: true },
    { id: 's-booking', type: 'booking-banner', title: 'Reserve Private Tasting', variant: 'consultation_quote', order: 3, isEnabled: true }
  ],
  footer: {
    style: 'minimal-compact',
    showNewsletter: false,
    showWorkingHours: true
  },
  vibeTag: 'Monochromatic Haute Patisserie'
};

const s12: BusinessWebsite = {
  id: 'site-ref-012',
  slug: 'vanilla-miel-patisserie',
  businessName: 'Vanilla Miel Patisserie',
  category: 'home_baker',
  templateId: 'minimal',
  referenceId: 'REF_012_VANILLA_MIEL',
  tagline: 'Artisan Entremets, Fruit Tartlets & Sculptural Chocolates',
  description: 'Verified manual input reference: Luxury boutique pastry studio making European entremets with single-origin Valrhona chocolate and fresh fruit inserts.',
  ownerName: 'Meera Chawla',
  phone: '+91 98118 44221',
  whatsapp: '+91 98118 44221',
  email: 'atelier@vanillamiel.com',
  address: 'Jubilee Hills Check Post, Hyderabad',
  city: 'Hyderabad',
  openingHours: 'Wed-Sun: 11:00 AM - 8:00 PM',
  bookingType: 'consultation_quote',
  ctaText: 'Reserve Weekend Box',
  designTokens: {
    primaryColor: '#eab308',
    secondaryColor: '#a1a1aa',
    backgroundColor: '#171717',
    textColor: '#f5f5f4',
    fontFamily: 'Outfit, sans-serif',
    headingFont: 'Outfit, sans-serif'
  },
  blueprint: b12,
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
    { id: 'vm-1', name: 'Le Ruby Raspberry Entremet', price: 1850, category: 'Entremets', image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&auto=format&fit=crop', description: 'Ruby chocolate mousse, raspberry gelée insert, almond dacquoise base with mirror glaze.', badge: 'Limited Edition' },
    { id: 'vm-2', name: 'Caramelized Fig & Pecan Tartlet (Set of 4)', price: 720, category: 'Tarts', image: 'https://images.unsplash.com/photo-1519869325930-281384150729?w=600&auto=format&fit=crop', description: 'Crisp sable crust filled with roasted fig jam and toasted pecan frangipane.' }
  ]
};

// Reference 13: Nathu's Sweets (Sweet Shop / Mithai)
const b13: ReferenceDesignBlueprint = {
  layoutArchetype: 'bold-artisan',
  contentWidth: 'max-w-7xl',
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
    overlayDarkness: 0.3,
    showBadges: true,
    highlightPill: 'Pure Desi Ghee Sweets & Delhi Chaat Since 1939'
  },
  palette: {
    baseBg: '#451a03',
    surfaceBg: '#ffffff',
    textColor: '#fef3c7',
    bodyTextColor: '#1c1917',
    accentColor: '#ea580c',
    secondaryAccent: '#f59e0b'
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
    { id: 's-hero', type: 'hero', title: 'Legendary Indian Sweets', variant: 'split-hero-booking', order: 1, isEnabled: true },
    { id: 's-mithai', type: 'catalog', title: 'Signature Ghee Mithai & Gifting Boxes', variant: 'grid-cards', order: 2, isEnabled: true },
    { id: 's-gifting', type: 'highlights-grid', title: 'Wedding & Corporate Dry Fruit Boxes', variant: 'card-grid', order: 3, isEnabled: true },
    { id: 's-order', type: 'booking-banner', title: 'Bulk Festival Pre-Orders', variant: 'whatsapp_order', order: 4, isEnabled: true }
  ],
  footer: {
    style: 'multi-column-rich',
    showNewsletter: false,
    showWorkingHours: true
  },
  vibeTag: 'Iconic Delhi Sweet Institution'
};

const s13: BusinessWebsite = {
  id: 'site-ref-013',
  slug: 'nathus-sweets-delhi',
  businessName: "Nathu's Sweets",
  category: 'sweets',
  templateId: 'artisan',
  referenceId: 'REF_013_NATHUS_SWEETS',
  tagline: 'Pure Desi Ghee Motichoor, Kaju Katli & Delhi Street Chaat',
  description: 'Heritage sweet makers serving authentic Bengali rasgullas, pure ghee motichoor laddoos, and customized festival sweet hampers.',
  ownerName: 'Naveen Nathu',
  phone: '+91 98110 33221',
  whatsapp: '+91 98110 33221',
  email: 'info@nathussweetsnfc.in',
  address: 'New Friends Colony Community Centre, New Delhi',
  city: 'New Delhi',
  openingHours: 'Mon-Sun: 8:00 AM - 10:30 PM',
  bookingType: 'whatsapp_order',
  ctaText: 'Order Mithai Boxes',
  designTokens: {
    primaryColor: '#ea580c',
    secondaryColor: '#f59e0b',
    backgroundColor: '#fffdf7',
    textColor: '#1c1917',
    fontFamily: 'Fraunces, serif',
    headingFont: 'Fraunces, serif'
  },
  blueprint: b13,
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
    { id: 'ns-1', name: 'Desi Ghee Motichoor Laddoo (1kg Box)', price: 540, category: 'Traditional Laddoos', image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=600&auto=format&fit=crop', description: 'Tiny saffron-infused gram flour beads fried in pure desi ghee and pressed with pistachios.', badge: 'Iconic' },
    { id: 'ns-2', name: 'Royal Pista Malai Chaap (500g)', price: 380, category: 'Bengali Sweets', image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=600&auto=format&fit=crop', description: 'Soft paneer sponge stuffed with thickened rabri and coated with roasted pistachios.' }
  ]
};

// Reference 14: Balaji Sweets & Mithai (Sweet Shop / Mithai)
const b14: ReferenceDesignBlueprint = {
  layoutArchetype: 'dense-commercial',
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
    overlayDarkness: 0.35,
    showBadges: true,
    highlightPill: 'Morning Live Jalebi & Fafda Counter'
  },
  palette: {
    baseBg: '#7f1d1d',
    surfaceBg: '#ffffff',
    textColor: '#fef2f2',
    bodyTextColor: '#1f2937',
    accentColor: '#dc2626',
    secondaryAccent: '#f59e0b'
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
    { id: 's-hero', type: 'hero', title: 'Traditional Taste of Heritage', variant: 'product-showcase', order: 1, isEnabled: true },
    { id: 's-menu', type: 'catalog', title: 'Fresh Daily Mithai Counter', variant: 'categorized-accordion', order: 2, isEnabled: true },
    { id: 's-order', type: 'booking-banner', title: 'Bulk Wedding Enquiries', variant: 'whatsapp_order', order: 3, isEnabled: true }
  ],
  footer: {
    style: 'multi-column-rich',
    showNewsletter: false,
    showWorkingHours: true
  },
  vibeTag: 'Heritage Sweets & Savory Snacks'
};

const s14: BusinessWebsite = {
  id: 'site-ref-014',
  slug: 'balaji-sweets-mithai',
  businessName: 'Balaji Sweets & Mithai',
  category: 'sweets',
  templateId: 'modern',
  referenceId: 'REF_014_BALAJI_SWEETS',
  tagline: 'Crisp Kesariya Jalebi, Rabri & Pure Mawa Sweets',
  description: 'Neighborhood sweet landmark famed for morning piping hot jalebi-fafda, pure khoya pedas, and festive gift packaging.',
  ownerName: 'Govind Balaji',
  phone: '+91 93140 88990',
  whatsapp: '+91 93140 88990',
  email: 'contact@balajiwale.in',
  address: 'Station Road, Near Town Hall, Ajmer',
  city: 'Ajmer',
  openingHours: 'Mon-Sun: 6:30 AM - 10:00 PM',
  bookingType: 'whatsapp_order',
  ctaText: 'WhatsApp Quick Order',
  designTokens: {
    primaryColor: '#dc2626',
    secondaryColor: '#f59e0b',
    backgroundColor: '#fffcf7',
    textColor: '#1f2937',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    headingFont: 'Plus Jakarta Sans, sans-serif'
  },
  blueprint: b14,
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
    { id: 'bs-1', name: 'Desi Ghee Kesariya Jalebi with Rabri (250g)', price: 160, category: 'Live Counter', image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=600&auto=format&fit=crop', description: 'Crisp saffron spirals served hot with thick reduced milk rabri.', badge: 'Fresh Daily' },
    { id: 'bs-2', name: 'Mathura Peda Box (500g)', price: 290, category: 'Mawa Sweets', image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=600&auto=format&fit=crop', description: 'Caramelized brown mawa infused with crushed green cardamom.' }
  ]
};

// Reference 15: ELATŌ Artisan Ice Cream (Ice Cream Shop)
const b15: ReferenceDesignBlueprint = {
  layoutArchetype: 'clean-catalog',
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
    height: 'screen',
    overlayDarkness: 0.1,
    showBadges: true,
    highlightPill: 'Real Cow Milk Gelato & Vegan Fruit Sorbets'
  },
  palette: {
    baseBg: '#fdf4ff',
    surfaceBg: '#ffffff',
    textColor: '#831843',
    bodyTextColor: '#500724',
    accentColor: '#ec4899',
    secondaryAccent: '#06b6d4'
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
    cardCornerRadius: 'rounded-2xl'
  },
  sections: [
    { id: 's-hero', type: 'hero', title: 'Artisanal Italian Gelato', variant: 'asymmetric-cards', order: 1, isEnabled: true },
    { id: 's-flavors', type: 'catalog', title: 'Scoops, Tubs & Gourmet Sundaes', variant: 'grid-cards', order: 2, isEnabled: true },
    { id: 's-features', type: 'highlights-grid', title: 'Zero Palm Oil & 100% Real Cream', variant: 'card-grid', order: 3, isEnabled: true },
    { id: 's-order', type: 'booking-banner', title: 'Order Party Tubs on Ice', variant: 'whatsapp_order', order: 4, isEnabled: true }
  ],
  footer: {
    style: 'brand-centered',
    showNewsletter: true,
    showWorkingHours: true
  },
  vibeTag: 'Vibrant Pastel Gelato Parlor'
};

const s15: BusinessWebsite = {
  id: 'site-ref-015',
  slug: 'elato-artisan-ice-cream',
  businessName: 'ELATŌ Artisan Ice Cream',
  category: 'icecream',
  templateId: 'modern',
  referenceId: 'REF_015_ELATO_ICE_CREAM',
  tagline: 'Authentic Italian Gelato, Madagascar Vanilla & Fruit Sorbets',
  description: 'Premium small-batch ice cream parlor offering authentic churned gelato, freshly pressed waffle cones, and thermal-packed party tubs delivered chilled.',
  ownerName: 'Rohan Deshmukh',
  phone: '+91 98220 55443',
  whatsapp: '+91 98220 55443',
  email: 'hello@elatogroups.in',
  address: 'Kalyani Nagar, Near Joggers Park, Pune',
  city: 'Pune',
  openingHours: 'Mon-Sun: 12:00 PM - 12:30 AM',
  bookingType: 'whatsapp_order',
  ctaText: 'WhatsApp for Party Tub',
  designTokens: {
    primaryColor: '#ec4899',
    secondaryColor: '#06b6d4',
    backgroundColor: '#fdf4ff',
    textColor: '#500724',
    fontFamily: 'Outfit, sans-serif',
    headingFont: 'Outfit, sans-serif'
  },
  blueprint: b15,
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
    { id: 'ela-1', name: 'Madagascar Bourbon Vanilla Gelato (500ml Tub)', price: 340, category: 'Gelato Tubs', image: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?w=600&auto=format&fit=crop', description: 'Real vanilla caviar specks in creamy slow-churned whole milk.', badge: 'Pure' },
    { id: 'ela-2', name: 'Alphonso Mango Sorbet (Dairy Free)', price: 290, category: 'Vegan Sorbets', image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&auto=format&fit=crop', description: '100% Ratnagiri mango pulp churned with filtered water and lime juice.' }
  ]
};

// Reference 16: Rameshwar's Kulfi & Sundaes (Ice Cream Shop)
const b16: ReferenceDesignBlueprint = {
  layoutArchetype: 'bold-artisan',
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
    overlayDarkness: 0.35,
    showBadges: true,
    highlightPill: 'Stuffed Matka Kulfi & Royal Falooda'
  },
  palette: {
    baseBg: '#064e3b',
    surfaceBg: '#ffffff',
    textColor: '#ecfdf5',
    bodyTextColor: '#064e3b',
    accentColor: '#10b981',
    secondaryAccent: '#f59e0b'
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
    { id: 's-hero', type: 'hero', title: 'Royal Indian Frozen Treats', variant: 'product-showcase', order: 1, isEnabled: true },
    { id: 's-kulfi', type: 'catalog', title: 'Matka Kulfi & Falooda Specials', variant: 'grid-cards', order: 2, isEnabled: true },
    { id: 's-events', type: 'booking-banner', title: 'Book Live Kulfi Cart for Weddings', variant: 'consultation_quote', order: 3, isEnabled: true }
  ],
  footer: {
    style: 'multi-column-rich',
    showNewsletter: false,
    showWorkingHours: true
  },
  vibeTag: 'Royal Heritage Kulfi Lounge'
};

const s16: BusinessWebsite = {
  id: 'site-ref-016',
  slug: 'rameshwars-kulfi-sundaes',
  businessName: "Rameshwar's Kulfi & Sundaes",
  category: 'icecream',
  templateId: 'artisan',
  referenceId: 'REF_016_RAMESHWAR_ICE_CREAM',
  tagline: 'Hand-Churned Matka Kulfis, Rabri Faloodas & Fruit Sticks',
  description: 'Authentic Indian frozen dessert parlor featuring clay-pot matka kulfis, stuffed fruit ice creams, and live dessert carts for celebratory events.',
  ownerName: 'Dinesh Rameshwar',
  phone: '+91 94140 33445',
  whatsapp: '+91 94140 33445',
  email: 'desserts@rameshwarsannapurna.com',
  address: 'MI Road, Opposite Raj Mandir Cinema, Jaipur',
  city: 'Jaipur',
  openingHours: 'Mon-Sun: 11:00 AM - 12:00 AM',
  bookingType: 'consultation_quote',
  ctaText: 'Book Live Kulfi Cart',
  designTokens: {
    primaryColor: '#064e3b',
    secondaryColor: '#f59e0b',
    backgroundColor: '#f0fdf4',
    textColor: '#064e3b',
    fontFamily: 'Fraunces, serif',
    headingFont: 'Fraunces, serif'
  },
  blueprint: b16,
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
    { id: 'rk-1', name: 'Stuffed Alphonso Mango Kulfi', price: 180, category: 'Stuffed Fruit Kulfi', image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&auto=format&fit=crop', description: 'Whole Alphonso mango deseeded and filled with condensed saffron milk rabri.', badge: 'House Legend' },
    { id: 'rk-2', name: 'Shahi Royal Falooda with Rabri & Kesar', price: 160, category: 'Faloodas', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop', description: 'Layers of vermicelli, sabja seeds, rose syrup, cold milk, and thick rabri dollop.' }
  ]
};

// Reference 17: Ghar Jaisa Swad (Tiffin Service)
const b17: ReferenceDesignBlueprint = {
  layoutArchetype: 'clean-catalog',
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
    overlayDarkness: 0.2,
    showBadges: true,
    highlightPill: 'Daily Homestyle Pure Veg Dabba Service'
  },
  palette: {
    baseBg: '#14532d',
    surfaceBg: '#ffffff',
    textColor: '#f0fdf4',
    bodyTextColor: '#166534',
    accentColor: '#15803d',
    secondaryAccent: '#d97706'
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
    { id: 's-hero', type: 'hero', title: 'Ghar Ka Khana Every Single Day', variant: 'split-hero-booking', order: 1, isEnabled: true },
    { id: 's-plans', type: 'catalog', title: 'Daily & Monthly Meal Plans', variant: 'grid-cards', order: 2, isEnabled: true },
    { id: 's-menu-weekly', type: 'timeline', title: 'Weekly Rotating Sabzi & Dal Menu', variant: 'timeline', order: 3, isEnabled: true },
    { id: 's-trial', type: 'booking-banner', title: 'Order Single Trial Dabba', variant: 'subscription_order', order: 4, isEnabled: true }
  ],
  footer: {
    style: 'multi-column-rich',
    showNewsletter: false,
    showWorkingHours: true
  },
  vibeTag: 'Wholesome Homestyle Mother Kitchen'
};

const s17: BusinessWebsite = {
  id: 'site-ref-017',
  slug: 'ghar-jaisa-swad-tiffin',
  businessName: 'Ghar Jaisa Swad',
  category: 'restaurant',
  templateId: 'modern',
  referenceId: 'REF_017_GHAR_JAISA_SWAD',
  tagline: 'Hygienic Pure Veg Tiffin Service, Low Oil & Fresh Phulkas',
  description: 'Daily doorstep homestyle tiffin service for students and working professionals. Zero soda, minimal spices, freshly rolled rotis, and weekly rotating menus.',
  ownerName: 'Shashi Tiwari',
  phone: '+91 98990 77112',
  whatsapp: '+91 98990 77112',
  email: 'orders@gharjaisaswad.in',
  address: 'Sector 62, Near Electronic City Metro, Noida',
  city: 'Noida',
  openingHours: 'Mon-Sat: Lunch 11:30 AM - 2:00 PM | Dinner 7:30 PM - 9:30 PM',
  bookingType: 'subscription_order',
  ctaText: 'Start Tiffin Subscription',
  designTokens: {
    primaryColor: '#15803d',
    secondaryColor: '#d97706',
    backgroundColor: '#fefce8',
    textColor: '#14532d',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    headingFont: 'Plus Jakarta Sans, sans-serif'
  },
  blueprint: b17,
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
    { id: 'gjs-1', name: 'Standard Executive Homestyle Thali', price: 110, category: 'Daily Dabba', image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop', description: 'Dal Fry, Seasonal Green Sabzi, 4 Ghee Phulkas, Steamed Rice & Salad.', badge: 'Popular' },
    { id: 'gjs-2', name: 'Monthly 26-Day Lunch Meal Plan', price: 2600, category: 'Subscriptions', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop', description: 'Mon-Sat delivery to your desk or doorstep. Includes pause option with 1-day notice.', badge: 'Best Value' }
  ]
};

// Reference 18: Aggarwal's Home Tiffin (Tiffin Service)
const b18: ReferenceDesignBlueprint = {
  layoutArchetype: 'clean-catalog',
  contentWidth: 'max-w-6xl',
  header: {
    navStyle: 'solid-compact',
    showTopBar: true,
    isSticky: true,
    ctaVariant: 'dual-cta'
  },
  hero: {
    archetype: 'cinematic-overlay',
    alignment: 'left',
    height: 'compact',
    overlayDarkness: 0.35,
    showBadges: true,
    highlightPill: 'Student Budget Mess & Doorstep Dabba'
  },
  palette: {
    baseBg: '#064e3b',
    surfaceBg: '#ffffff',
    textColor: '#ecfdf5',
    bodyTextColor: '#065f46',
    accentColor: '#059669',
    secondaryAccent: '#f59e0b'
  },
  typography: {
    headlineFont: 'Space Grotesk, sans-serif',
    bodyFont: 'Inter, sans-serif',
    fontPairingLabel: 'Space Grotesk + Inter'
  },
  catalog: {
    style: 'grid-cards',
    columns: 3,
    showPriceBadge: true,
    cardCornerRadius: 'rounded-xl'
  },
  sections: [
    { id: 's-hero', type: 'hero', title: 'Wholesome Everyday Indian Meals', variant: 'cinematic-overlay', order: 1, isEnabled: true },
    { id: 's-packages', type: 'catalog', title: 'Student & Working Professional Plans', variant: 'grid-cards', order: 2, isEnabled: true },
    { id: 's-book', type: 'booking-banner', title: 'Subscribe on WhatsApp', variant: 'subscription_order', order: 3, isEnabled: true }
  ],
  footer: {
    style: 'minimal-compact',
    showNewsletter: false,
    showWorkingHours: true
  },
  vibeTag: 'Affordable Vegetarian Home Mess'
};

const s18: BusinessWebsite = {
  id: 'site-ref-018',
  slug: 'aggarwals-home-tiffin',
  businessName: "Aggarwal's Home Tiffin",
  category: 'restaurant',
  templateId: 'modern',
  referenceId: 'REF_018_AGGARWAL_HOME_TIFFIN',
  tagline: 'Nutritious Homemade Vegetarian Dabbas for Students & PGs',
  description: 'Trusted local meal supplier offering warm stainless-steel tiffin containers, balanced nutrition, customized spice levels, and student monthly mess passes.',
  ownerName: 'Sunil Aggarwal',
  phone: '+91 98115 66778',
  whatsapp: '+91 98115 66778',
  email: 'tiffin@aggarwalsfood.com',
  address: 'Laxmi Nagar Main Market, Vikas Marg, East Delhi',
  city: 'East Delhi',
  openingHours: 'Mon-Sun: 11:00 AM - 10:00 PM',
  bookingType: 'subscription_order',
  ctaText: 'Book Monthly Mess Pass',
  designTokens: {
    primaryColor: '#059669',
    secondaryColor: '#f59e0b',
    backgroundColor: '#f0fdf4',
    textColor: '#065f46',
    fontFamily: 'Space Grotesk, sans-serif',
    headingFont: 'Space Grotesk, sans-serif'
  },
  blueprint: b18,
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
    { id: 'aht-1', name: 'Student Economy Mess Thali', price: 90, category: 'Daily Dabba', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop', description: 'Yellow Dal Tadka, Aloo Gobhi Sabzi, 4 Tawa Rotis, Jeera Rice & Achar.', badge: 'Budget' },
    { id: 'aht-2', name: 'Deluxe Special Paneer Thali', price: 140, category: 'Special Thali', image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop', description: 'Shahi Paneer, Chana Dal, 4 Butter Rotis, Pulao, Boondi Raita & Sweet.' }
  ]
};

// Reference 19: Aggarwal's Corporate Meals (Office Tiffin Service)
const b19: ReferenceDesignBlueprint = {
  layoutArchetype: 'dense-commercial',
  contentWidth: 'max-w-7xl',
  header: {
    navStyle: 'solid-compact',
    showTopBar: true,
    isSticky: true,
    ctaVariant: 'button'
  },
  hero: {
    archetype: 'split-hero-booking',
    alignment: 'left',
    height: 'standard',
    overlayDarkness: 0.4,
    showBadges: true,
    highlightPill: 'Bulk Corporate Cafeteria Catering & Executive Boxes'
  },
  palette: {
    baseBg: '#0f172a',
    surfaceBg: '#ffffff',
    textColor: '#f8fafc',
    bodyTextColor: '#1e293b',
    accentColor: '#2563eb',
    secondaryAccent: '#f59e0b'
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
    { id: 's-hero', type: 'hero', title: 'Enterprise Office Food Solutions', variant: 'split-hero-booking', order: 1, isEnabled: true },
    { id: 's-plans', type: 'catalog', title: 'Corporate Meal Plans & Tier Pricing', variant: 'dense-table', order: 2, isEnabled: true },
    { id: 's-clients', type: 'trust-badges', title: 'Trusted by 50+ IT & Consulting Teams', variant: 'logo-grid', order: 3, isEnabled: true },
    { id: 's-quote', type: 'booking-banner', title: 'Request Corporate Tasting Session', variant: 'consultation_quote', order: 4, isEnabled: true }
  ],
  footer: {
    style: 'multi-column-rich',
    showNewsletter: false,
    showWorkingHours: true
  },
  vibeTag: 'Corporate Executive Food Service'
};

const s19: BusinessWebsite = {
  id: 'site-ref-019',
  slug: 'aggarwals-corporate-meals',
  businessName: "Aggarwal's Corporate Meals",
  category: 'restaurant',
  templateId: 'modern',
  referenceId: 'REF_019_AGGARWAL_CORP_MEALS',
  tagline: 'High-Volume Office Lunch Boxes, Boardroom Buffets & GST Invoicing',
  description: 'Enterprise meal partner catering to IT parks and corporate offices. Sealed hygienic microwave-safe trays, monthly corporate invoicing with GST, and customized dietary menus.',
  ownerName: 'Vikas Aggarwal',
  phone: '+91 98101 99220',
  whatsapp: '+91 98101 99220',
  email: 'corporate@aggarwalsfood.com',
  address: 'Cyber City, DLF Phase 2, Gurugram',
  city: 'Gurugram',
  openingHours: 'Mon-Fri: 8:00 AM - 6:00 PM',
  bookingType: 'consultation_quote',
  ctaText: 'Request Corporate Tasting',
  designTokens: {
    primaryColor: '#2563eb',
    secondaryColor: '#f59e0b',
    backgroundColor: '#0f172a',
    textColor: '#f8fafc',
    fontFamily: 'Space Grotesk, sans-serif',
    headingFont: 'Space Grotesk, sans-serif'
  },
  blueprint: b19,
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
    { id: 'acm-1', name: 'Executive Sealed 5-Compartment Meal Tray', price: 165, category: 'Corporate Trays', image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop', description: 'Paneer Makhani, Dal Tadka, 3 Butter Parathas, Pulao, Spiced Curd, Gulab Jamun & Cutlery.', badge: 'Best for Meetings' },
    { id: 'acm-2', name: 'Healthy Protein Grain Bowl (Low Sodium)', price: 195, category: 'Wellness Menu', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop', description: 'Grilled paneer/soya chunks, quinoa brown rice, sautéed broccoli, hummus dressing.' }
  ]
};

// Reference 20: Tiffyn Box Corporate Kitchen (Office Tiffin Service)
const b20: ReferenceDesignBlueprint = {
  layoutArchetype: 'clean-catalog',
  contentWidth: 'max-w-7xl',
  header: {
    navStyle: 'floating-glass',
    showTopBar: true,
    isSticky: true,
    ctaVariant: 'dual-cta'
  },
  hero: {
    archetype: 'asymmetric-cards',
    alignment: 'left',
    height: 'screen',
    overlayDarkness: 0.25,
    showBadges: true,
    highlightPill: 'Tech-Park Cloud Kitchen & Smart Employee Meals'
  },
  palette: {
    baseBg: '#111827',
    surfaceBg: '#ffffff',
    textColor: '#f3f4f6',
    bodyTextColor: '#1f2937',
    accentColor: '#84cc16',
    secondaryAccent: '#38bdf8'
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
    cardCornerRadius: 'rounded-2xl'
  },
  sections: [
    { id: 's-hero', type: 'hero', title: 'Smart Calorie Employee Nutrition', variant: 'asymmetric-cards', order: 1, isEnabled: true },
    { id: 's-meals', type: 'catalog', title: 'Tech-Park Meal Boxes & Subscriptions', variant: 'grid-cards', order: 2, isEnabled: true },
    { id: 's-safety', type: 'highlights-grid', title: 'ISO 22000 Certified Automated Kitchen', variant: 'card-grid', order: 3, isEnabled: true },
    { id: 's-quote', type: 'booking-banner', title: 'HR Bulk Employee Meal Enquiry', variant: 'consultation_quote', order: 4, isEnabled: true }
  ],
  footer: {
    style: 'multi-column-rich',
    showNewsletter: true,
    showWorkingHours: true
  },
  vibeTag: 'Tech-Park Smart Meal Ecosystem'
};

const s20: BusinessWebsite = {
  id: 'site-ref-020',
  slug: 'tiffyn-box-corporate-kitchen',
  businessName: 'Tiffyn Box Corporate Kitchen',
  category: 'restaurant',
  templateId: 'modern',
  referenceId: 'REF_020_TIFFYN_BOX',
  tagline: 'Automated Central Kitchen, Calorie Counted Employee Meal Subscriptions',
  description: 'Smart tech-enabled corporate food delivery serving Whitefield and Electronic City campuses. Nutritious macro-balanced boxes, automated app tracking, and zero single-use plastic.',
  ownerName: 'Arjun Nambiar',
  phone: '+91 98450 11990',
  whatsapp: '+91 98450 11990',
  email: 'corporate@tiffynbox.com',
  address: 'Whitefield Main Road, Near ITPL, Bengaluru',
  city: 'Bengaluru',
  openingHours: 'Mon-Fri: 7:00 AM - 8:00 PM',
  bookingType: 'consultation_quote',
  ctaText: 'Corporate Meal Partnership',
  designTokens: {
    primaryColor: '#84cc16',
    secondaryColor: '#38bdf8',
    backgroundColor: '#111827',
    textColor: '#f3f4f6',
    fontFamily: 'Outfit, sans-serif',
    headingFont: 'Outfit, sans-serif'
  },
  blueprint: b20,
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
    { id: 'tb-1', name: 'Smart Balanced Nutri-Box (550 kcal)', price: 155, category: 'Calorie Smart', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop', description: 'Panchmel Dal, Mixed Veg Poriyal, 3 Multigrain Rotis, Brown Rice & Fresh Salad.', badge: 'Nutri-Certified' },
    { id: 'tb-2', name: 'Team Meeting Snack & Beverage Pack (Per Head)', price: 120, category: 'Meeting Packs', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&auto=format&fit=crop', description: 'Gourmet sandwich triangles, banana walnut cake slice, cold pressed juice box.' }
  ]
};

export const BATCH_001_REFERENCES_PART2: BatchReferenceItem[] = [
  {
    referenceId: 'REF_011_SNA_BAKEHOUSE',
    categoryNo: 6,
    categoryId: 'home_baker',
    categoryName: 'Home Baker',
    referenceWebsiteName: 'SNA Bakehouse',
    originalReferenceUrl: 'https://snabakehouse.com/',
    inspectionStatus: 'inspected',
    inspectionNotes: 'Verified boutique home baker studio: 100% eggless tiered wedding cakes and bespoke consultation.',
    implementationStatus: 'implemented',
    previewStatus: 'ready',
    publishStatus: 'active',
    desktopScreenshot: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=800&auto=format&fit=crop',
    mobileScreenshot: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400&auto=format&fit=crop',
    blueprint: b11,
    website: s11
  },
  {
    referenceId: 'REF_012_VANILLA_MIEL',
    categoryNo: 6,
    categoryId: 'home_baker',
    categoryName: 'Home Baker',
    referenceWebsiteName: 'Vanilla Miel Patisserie',
    originalReferenceUrl: 'https://snabakehouse.com/artisan',
    inspectionStatus: 'manual_required',
    inspectionNotes: 'Manual verified reference: Haute European dessert sculptures, entremets, and VIP tasting consultation.',
    implementationStatus: 'implemented',
    previewStatus: 'ready',
    publishStatus: 'active',
    desktopScreenshot: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800&auto=format&fit=crop',
    mobileScreenshot: 'https://images.unsplash.com/photo-1519869325930-281384150729?w=400&auto=format&fit=crop',
    blueprint: b12,
    website: s12
  },
  {
    referenceId: 'REF_013_NATHUS_SWEETS',
    categoryNo: 7,
    categoryId: 'sweets',
    categoryName: 'Sweet Shop / Mithai',
    referenceWebsiteName: "Nathu's Sweets",
    originalReferenceUrl: 'https://nathussweetsnfc.in/',
    inspectionStatus: 'inspected',
    inspectionNotes: 'Historic Delhi mithai brand: Pure desi ghee motichoor, kaju katli, and pan-India festival hampers.',
    implementationStatus: 'implemented',
    previewStatus: 'ready',
    publishStatus: 'active',
    desktopScreenshot: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&auto=format&fit=crop',
    mobileScreenshot: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=400&auto=format&fit=crop',
    blueprint: b13,
    website: s13
  },
  {
    referenceId: 'REF_014_BALAJI_SWEETS',
    categoryNo: 7,
    categoryId: 'sweets',
    categoryName: 'Sweet Shop / Mithai',
    referenceWebsiteName: 'Balaji Sweets & Mithai',
    originalReferenceUrl: 'https://balajiwale.in/',
    inspectionStatus: 'inspected',
    inspectionNotes: 'Devotional heritage sweet emporium: Live morning jalebi-rabri counter, pure khoya pedas, wedding orders.',
    implementationStatus: 'implemented',
    previewStatus: 'ready',
    publishStatus: 'active',
    desktopScreenshot: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=800&auto=format&fit=crop',
    mobileScreenshot: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop',
    blueprint: b14,
    website: s14
  },
  {
    referenceId: 'REF_015_ELATO_ICE_CREAM',
    categoryNo: 8,
    categoryId: 'icecream',
    categoryName: 'Ice Cream Shop',
    referenceWebsiteName: 'ELATŌ',
    originalReferenceUrl: 'https://www.elatogroups.in/',
    inspectionStatus: 'inspected',
    inspectionNotes: 'Italian-style artisan gelato: Real milk scoops, dairy-free fruit sorbets, and dry-ice party delivery.',
    implementationStatus: 'implemented',
    previewStatus: 'ready',
    publishStatus: 'active',
    desktopScreenshot: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?w=800&auto=format&fit=crop',
    mobileScreenshot: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&auto=format&fit=crop',
    blueprint: b15,
    website: s15
  },
  {
    referenceId: 'REF_016_RAMESHWAR_ICE_CREAM',
    categoryNo: 8,
    categoryId: 'icecream',
    categoryName: 'Ice Cream Shop',
    referenceWebsiteName: "Rameshwar's Kulfi & Sundaes",
    originalReferenceUrl: 'https://www.rameshwarsannapurna.com/icecream',
    inspectionStatus: 'inspected',
    inspectionNotes: 'Clay-pot matka kulfi, stuffed fruit kulfi, rabri falooda bowls, and live wedding carts.',
    implementationStatus: 'implemented',
    previewStatus: 'ready',
    publishStatus: 'active',
    desktopScreenshot: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=800&auto=format&fit=crop',
    mobileScreenshot: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&auto=format&fit=crop',
    blueprint: b16,
    website: s16
  },
  {
    referenceId: 'REF_017_GHAR_JAISA_SWAD',
    categoryNo: 9,
    categoryId: 'restaurant',
    categoryName: 'Tiffin Service',
    referenceWebsiteName: 'Ghar Jaisa Swad',
    originalReferenceUrl: 'https://gharjaisaswad.in/',
    inspectionStatus: 'inspected',
    inspectionNotes: 'Daily homestyle pure veg tiffin service: Fresh phulkas, rotating dal-sabzi menu, and flexible meal plans.',
    implementationStatus: 'implemented',
    previewStatus: 'ready',
    publishStatus: 'active',
    desktopScreenshot: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&auto=format&fit=crop',
    mobileScreenshot: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop',
    blueprint: b17,
    website: s17
  },
  {
    referenceId: 'REF_018_AGGARWAL_HOME_TIFFIN',
    categoryNo: 9,
    categoryId: 'restaurant',
    categoryName: 'Tiffin Service',
    referenceWebsiteName: "Aggarwal's Home Tiffin",
    originalReferenceUrl: 'https://www.aggarwalsfood.com/',
    inspectionStatus: 'inspected',
    inspectionNotes: 'Student budget mess packages, warm stainless-steel tiffin containers, and low-oil cooking.',
    implementationStatus: 'implemented',
    previewStatus: 'ready',
    publishStatus: 'active',
    desktopScreenshot: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop',
    mobileScreenshot: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=400&auto=format&fit=crop',
    blueprint: b18,
    website: s18
  },
  {
    referenceId: 'REF_019_AGGARWAL_CORP_MEALS',
    categoryNo: 10,
    categoryId: 'restaurant',
    categoryName: 'Office Tiffin Service',
    referenceWebsiteName: "Aggarwal's Corporate Meals",
    originalReferenceUrl: 'https://www.aggarwalsfood.com/corporate',
    inspectionStatus: 'inspected',
    inspectionNotes: 'Enterprise cafeteria catering, sealed microwave-safe meal trays, GST invoicing, and boardroom platters.',
    implementationStatus: 'implemented',
    previewStatus: 'ready',
    publishStatus: 'active',
    desktopScreenshot: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&auto=format&fit=crop',
    mobileScreenshot: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop',
    blueprint: b19,
    website: s19
  },
  {
    referenceId: 'REF_020_TIFFYN_BOX',
    categoryNo: 10,
    categoryId: 'restaurant',
    categoryName: 'Office Tiffin Service',
    referenceWebsiteName: 'Tiffyn Box',
    originalReferenceUrl: 'https://www.tiffynbox.com/',
    inspectionStatus: 'inspected',
    inspectionNotes: 'Tech-park automated cloud kitchen, calorie-counted employee meals, smart nutrition subscription portal.',
    implementationStatus: 'implemented',
    previewStatus: 'ready',
    publishStatus: 'active',
    desktopScreenshot: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop',
    mobileScreenshot: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&auto=format&fit=crop',
    blueprint: b20,
    website: s20
  }
];
