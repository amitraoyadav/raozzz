import { BusinessWebsite } from '../types';

export const SAVEWEB2ZIP_WEBSITE: BusinessWebsite = {
  id: 'site-saveweb2zip-60',
  slug: 'saveweb2zip',
  businessName: 'SAVEWEB2ZIP',
  category: 'web_tools' as any,
  templateId: 'website_downloader_tool',
  tagline: 'Save Web to ZIP | Website Copier Online Tool',
  description: 'SaveWeb2ZIP allows you to download a landing page, full website, or any page to a ZIP archive with all HTML, CSS, JavaScript, images, and fonts completely for free.',
  ownerName: 'SaveWeb2ZIP Tools Group',
  phone: '+1 800 555-0199',
  whatsapp: '+18005550199',
  email: 'support@saveweb2zip.com',
  address: 'Global Web Utility Cloud Service',
  city: 'Online / Worldwide',
  mapsUrl: 'https://maps.google.com/?q=Online+Cloud+Service',
  openingHours: '24/7 Automated Web Archiving',
  primaryColor: '#f5df4d',
  secondaryColor: '#000000',
  logoUrl: '/images/logo.svg',
  coverUrl: '/images/main-backgound.png',
  bookingType: 'consultation_quote',
  bookingCtaLabel: 'Save Website to ZIP',
  specialBadge: 'Site #60 · Web Tools / Utilities',
  status: 'published',
  pricingPlanId: 'free',
  amountPaid: 0,
  paymentStatus: 'paid',
  sections: [
    { id: 'downloader', title: 'Save a Website to ZIP', isEnabled: true, order: 1 },
    { id: 'options', title: 'Asset Renaming & Structure Preservation', isEnabled: true, order: 2 },
    { id: 'preferences', title: 'Downloading all website files to archive', isEnabled: true, order: 3 },
    { id: 'telegram', title: 'Telegram Web Copier Bot', isEnabled: true, order: 4 },
    { id: 'faq', title: 'Frequently Asked Questions', isEnabled: true, order: 5 }
  ],
  offers: [
    {
      id: 'offer-free-unlimited',
      title: '100% Free Unlimited Website Archiving',
      description: 'Download full HTML, CSS, JS, images, and fonts with no subscription required.',
      discountPercent: 100,
      couponCode: 'FREEWEB2ZIP',
      isActive: true
    }
  ],
  items: [
    {
      id: 'item-html',
      name: 'HTML Document Extraction',
      description: 'Crawls and packages complete clean HTML structure with rewritten local resource paths.',
      price: 0,
      category: 'Core Archiving',
      isAvailable: true,
      isFeatured: true,
      badge: 'Free'
    },
    {
      id: 'item-css-js',
      name: 'CSS & JavaScript Bundling',
      description: 'Extracts all stylesheets, inline styling, external scripts, and JavaScript assets.',
      price: 0,
      category: 'Code Assets',
      isAvailable: true,
      isFeatured: true,
      badge: 'Free'
    },
    {
      id: 'item-images',
      name: 'Images & Media Downloader',
      description: 'Saves SVG icons, PNG, JPEG, WebP, and AVIF graphics into a local image repository.',
      price: 0,
      category: 'Media Assets',
      isAvailable: true,
      isFeatured: true,
      badge: 'Free'
    },
    {
      id: 'item-fonts',
      name: 'Font Family Packaging',
      description: 'Detects and downloads web fonts (WOFF, WOFF2, TTF, EOT) for faithful offline rendering.',
      price: 0,
      category: 'Typography',
      isAvailable: true,
      isFeatured: true,
      badge: 'Free'
    }
  ],
  gallery: [
    {
      id: 'g-sw-1',
      title: 'HTML Structure Card',
      category: 'features',
      imageUrl: '/images/html.png'
    },
    {
      id: 'g-sw-2',
      title: 'CSS & JavaScript Card',
      category: 'features',
      imageUrl: '/images/cssjavascript.png'
    },
    {
      id: 'g-sw-3',
      title: 'Images Card',
      category: 'features',
      imageUrl: '/images/images.png'
    },
    {
      id: 'g-sw-4',
      title: 'Fonts Card',
      category: 'features',
      imageUrl: '/images/fonts.png'
    }
  ]
};
