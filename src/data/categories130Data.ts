import { BookingPatternType } from '../types';

export interface ReferenceSite {
  id: string;
  name: string;
  url: string;
  features: string;
  designSignature: {
    palette: {
      baseBg: string;
      surfaceBg: string;
      textColor: string;
      bodyTextColor: string;
      accentColor: string;
      secondaryAccent: string;
    };
    typography: {
      headlineFont: string;
      bodyFont: string;
      fontPairingLabel: string;
    };
    layoutArchetype: 'bold-editorial' | 'clean-catalog' | 'luxury-minimal' | 'dense-commercial' | 'artisan-warm' | 'high-tech-dark' | 'split-hero-booking';
    heroArchetype: 'cinematic-overlay' | 'split-form' | 'product-showcase' | 'badge-card' | 'interactive-booking' | 'split-hero-booking';
    navStyle: 'floating-glass' | 'solid-compact' | 'split-centered' | 'action-heavy';
    catalogStyle: 'grid-cards' | 'dense-table' | 'visual-cards' | 'categorized-accordion';
    bookingStyle: BookingPatternType;
    vibeTag: string;
  };
}

export interface CategoryReferenceItem {
  id: string;
  categoryName: string;
  group: string;
  industry: string;
  featuresToStudy: string;
  references: [ReferenceSite, ReferenceSite, ReferenceSite];
}

export const CATEGORIES_130_DATA: CategoryReferenceItem[] = [
  {
    id: 'kirana',
    categoryName: "Kirana & Super Mart",
    group: "Retail & Grocery",
    industry: "Daily Staples & FMCG",
    featuresToStudy: "High-density staple grid, monthly ration pack calculator, delivery radius banner, WhatsApp list order drawer",
    references: [
      {
        id: 'kirana-ref-1',
        name: "Blinkit Daily Mart",
        url: "https://blinkit.com",
        features: "High contrast green badges, 10-minute delivery promises, sticky category slider",
        designSignature: {
          palette: { baseBg: '#0f381e', surfaceBg: '#f8faf9', textColor: '#f2fcf5', bodyTextColor: '#27272a', accentColor: '#16a34a', secondaryAccent: '#facc15' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Superfast Delivery"
        }
      },
      {
        id: 'kirana-ref-2',
        name: "Nature Basket Organics",
        url: "https://naturesbasket.co.in",
        features: "Gourmet serif accents, curated artisan cheese/produce hampers",
        designSignature: {
          palette: { baseBg: '#1e3a2f', surfaceBg: '#fffdfa', textColor: '#fef3c7', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#059669' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Gourmet Organic"
        }
      },
      {
        id: 'kirana-ref-3',
        name: "DMart Ready Catalog",
        url: "https://dmart.in",
        features: "Deep discount strikethrough prices, wholesale savings callouts",
        designSignature: {
          palette: { baseBg: '#134e4a', surfaceBg: '#ffffff', textColor: '#f0fdfa', bodyTextColor: '#27272a', accentColor: '#0d9488', secondaryAccent: '#ef4444' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Wholesale Savings"
        }
      }
    ]
  },
  {
    id: 'cafe',
    categoryName: "Artisan Café & Roastery",
    group: "Food & Dining",
    industry: "Hospitality & Beverage",
    featuresToStudy: "Pour-over origin guides, bean tasting notes, table reservation time picker, artisanal pastry gallery",
    references: [
      {
        id: 'cafe-ref-1',
        name: "Blue Tokai Coffee Roasters",
        url: "https://bluetokaicoffee.com",
        features: "Minimalist roast profile cards, grind-size selectors, aesthetic cafe interior photography",
        designSignature: {
          palette: { baseBg: '#2a201b', surfaceBg: '#faf6f0', textColor: '#f5e6d3', bodyTextColor: '#27272a', accentColor: '#c08552', secondaryAccent: '#8c5d36' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Fraunces + Inter' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Specialty Roastery"
        }
      },
      {
        id: 'cafe-ref-2',
        name: "Third Wave Coffee",
        url: "https://thirdwavecoffeeroasters.com",
        features: "Modern vibrant orange highlights, mobile quick-order app banner, loyalty bean rewards",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#ffffff', textColor: '#fafafa', bodyTextColor: '#27272a', accentColor: '#f97316', secondaryAccent: '#ea580c' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'bold-editorial',
          heroArchetype: 'split-form',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Urban Pulse"
        }
      },
      {
        id: 'cafe-ref-3',
        name: "Starbucks Reserve India",
        url: "https://starbucks.in",
        features: "Deep reserve charcoal with warm bronze gradients, rare single-origin stories",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f9fafb', textColor: '#f3f4f6', bodyTextColor: '#27272a', accentColor: '#d4af37', secondaryAccent: '#047857' },
          typography: { headlineFont: 'Playfair Display, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Playfair Display + DM Sans' },
          layoutArchetype: 'luxury-minimal',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'reservation_party',
          vibeTag: "Reserve Elegance"
        }
      }
    ]
  },
  {
    id: 'sweets',
    categoryName: "Mithai & Sweet Shop",
    group: "Food & Dining",
    industry: "Confectionery & Traditional Sweets",
    featuresToStudy: "Festive gift tin customizer, per-kg weight selection, desi ghee purity certification badge, wedding bulk order enquiry",
    references: [
      {
        id: 'sweets-ref-1',
        name: "Anand Sweets & Savouries",
        url: "https://anandsweets.in",
        features: "Royal maroon & antique gold, curated corporate gifting hampers, heritage royal typography",
        designSignature: {
          palette: { baseBg: '#6b1e2e', surfaceBg: '#fffdf9', textColor: '#fff8ee', bodyTextColor: '#27272a', accentColor: '#d4a94e', secondaryAccent: '#9a2b42' },
          typography: { headlineFont: 'Playfair Display, serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Playfair Display + Inter' },
          layoutArchetype: 'luxury-minimal',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Royal Shahi Heritage"
        }
      },
      {
        id: 'sweets-ref-2',
        name: "Haldiram’s Heritage Portal",
        url: "https://haldirams.com",
        features: "Vibrant celebratory orange and red, nationwide sweet delivery banner, combo pack specials",
        designSignature: {
          palette: { baseBg: '#7f1d1d', surfaceBg: '#ffffff', textColor: '#fef2f2', bodyTextColor: '#27272a', accentColor: '#ea580c', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Festive Delight"
        }
      },
      {
        id: 'sweets-ref-3',
        name: "Bikanervala Sweets & Snacks",
        url: "https://bikanervala.com",
        features: "Pure ghee badge indicators, seasonal festival countdowns, custom wedding dry fruit boxes",
        designSignature: {
          palette: { baseBg: '#450a0a', surfaceBg: '#fefce8', textColor: '#fef08a', bodyTextColor: '#27272a', accentColor: '#eab308', secondaryAccent: '#b91c1c' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'split-form',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Desi Pure Ghee"
        }
      }
    ]
  },
  {
    id: 'restaurant',
    categoryName: "Restaurant & Highway Dhaba",
    group: "Food & Dining",
    industry: "Dining & Hospitality",
    featuresToStudy: "Live table booking time slots, digital food menu with dietary tags (Jain, Vegan, Non-Veg), party hall reservation",
    references: [
      {
        id: 'restaurant-ref-1',
        name: "Punjab Grill Fine Dining",
        url: "https://punjabgrill.in",
        features: "Warm charcoal & burnished copper, chef signature tandoori showcases, wine pairing menus",
        designSignature: {
          palette: { baseBg: '#1c1917', surfaceBg: '#292524', textColor: '#f5f5f4', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#b45309' },
          typography: { headlineFont: 'Playfair Display, serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Playfair Display + Inter' },
          layoutArchetype: 'luxury-minimal',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'reservation_party',
          vibeTag: "Royal Tandoor"
        }
      },
      {
        id: 'restaurant-ref-2',
        name: "Gulshan Dhaba Murthal",
        url: "https://gulshandhabamurthal.com",
        features: "Rustic highway hospitality, paratha butter toppings, live 24/7 highway traveler tracker",
        designSignature: {
          palette: { baseBg: '#3f1a04', surfaceBg: '#fffbeb', textColor: '#fef3c7', bodyTextColor: '#27272a', accentColor: '#f59e0b', secondaryAccent: '#ea580c' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Plus Jakarta Sans, sans-serif', fontPairingLabel: 'Space Grotesk + Plus Jakarta Sans' },
          layoutArchetype: 'bold-editorial',
          heroArchetype: 'split-form',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'reservation_party',
          vibeTag: "Highway Zaika"
        }
      },
      {
        id: 'restaurant-ref-3',
        name: "Farzi Cafe Modern Indian",
        url: "https://farzicafe.com",
        features: "High-energy nightlife amber, molecular gastronomy culinary teaser, DJ night event reservation",
        designSignature: {
          palette: { baseBg: '#09090b', surfaceBg: '#18181b', textColor: '#f4f4f5', bodyTextColor: '#27272a', accentColor: '#fbbf24', secondaryAccent: '#ef4444' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'high-tech-dark',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'reservation_party',
          vibeTag: "Gourmet Molecular"
        }
      }
    ]
  },
  {
    id: 'laundry',
    categoryName: "Dry Cleaning & Laundry",
    group: "Services & Trades",
    industry: "Garment & Fabric Care",
    featuresToStudy: "Free doorstep pickup scheduler, garment price list by fabric, live order tracking stage, eco-steam badge",
    references: [
      {
        id: 'laundry-ref-1',
        name: "UClean Laundromat",
        url: "https://uclean.com",
        features: "Vibrant clean cyan & yellow, per-kilo wash & fold pricing, nearest outlet store locator",
        designSignature: {
          palette: { baseBg: '#0e7490', surfaceBg: '#ecfeff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#facc15', secondaryAccent: '#06b6d4' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'pickup_drop',
          vibeTag: "Crisp Speed"
        }
      },
      {
        id: 'laundry-ref-2',
        name: "Pressto Fabric Spa",
        url: "https://presstoindia.com",
        features: "Premium European textile care, luxury silk saree preservation, handbag & shoe restoration rates",
        designSignature: {
          palette: { baseBg: '#1f5f5b', surfaceBg: '#f9fbfb', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ede6d6', secondaryAccent: '#2f8580' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'luxury-minimal',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'pickup_drop',
          vibeTag: "Eco Fabric Spa"
        }
      },
      {
        id: 'laundry-ref-3',
        name: "Tumbledry White Wash",
        url: "https://tumbledry.in",
        features: "Zero-bleach badge, woolmark certified garment care, express 24-hour return toggle",
        designSignature: {
          palette: { baseBg: '#1e3a8a', surfaceBg: '#ffffff', textColor: '#eff6ff', bodyTextColor: '#27272a', accentColor: '#38bdf8', secondaryAccent: '#2563eb' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + DM Sans' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'split-hero-booking',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'pickup_drop',
          vibeTag: "Pure Whites"
        }
      }
    ]
  },
  {
    id: 'repair',
    categoryName: "Mobile & Tablet Repair",
    group: "Services & Trades",
    industry: "Consumer Electronics & Hardware",
    featuresToStudy: "Device brand & issue diagnostic selector, instant transparent quote, doorstep technician booking, 6-month warranty badge",
    references: [
      {
        id: 'repair-ref-1',
        name: "Cashify Repair Lab",
        url: "https://cashify.in/repair",
        features: "Screen/battery/mic dropdown matrix, instant pricing calculator, doorstep 30-min repair promise",
        designSignature: {
          palette: { baseBg: '#1a1d29', surfaceBg: '#ffffff', textColor: '#e4e7ec', bodyTextColor: '#27272a', accentColor: '#3b82f6', secondaryAccent: '#94a3b8' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'high-tech-dark',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'pickup_drop',
          vibeTag: "Express Hardware Care"
        }
      },
      {
        id: 'repair-ref-2',
        name: "ShatterFix Screen Specialists",
        url: "https://shatterfix.com",
        features: "OEM genuine parts guarantee, pan-India courier repair tracker, water damage diagnostic guide",
        designSignature: {
          palette: { baseBg: '#090d16', surfaceBg: '#131b2e', textColor: '#f8fafc', bodyTextColor: '#27272a', accentColor: '#06b6d4', secondaryAccent: '#3b82f6' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'pickup_drop',
          vibeTag: "OEM Precision"
        }
      },
      {
        id: 'repair-ref-3',
        name: "Buzzmeeh Doorstep Fix",
        url: "https://buzzmeeh.com",
        features: "Standby phone provided badge, on-site technician photo credentials, cashless post-repair billing",
        designSignature: {
          palette: { baseBg: '#1e1e24', surfaceBg: '#fffef9', textColor: '#f3f4f6', bodyTextColor: '#27272a', accentColor: '#f59e0b', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Space Grotesk + DM Sans' },
          layoutArchetype: 'bold-editorial',
          heroArchetype: 'split-form',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'pickup_drop',
          vibeTag: "Rapid Onsite"
        }
      }
    ]
  },
  {
    id: 'salon',
    categoryName: "Luxury Salon & Bridal Spa",
    group: "Health & Beauty",
    industry: "Beauty & Personal Care",
    featuresToStudy: "Stylist specialist selector, bridal makeover portfolio lightbox, service duration and rate card, WhatsApp appointment booking",
    references: [
      {
        id: 'salon-ref-1',
        name: "Geetanjali Salon Flagship",
        url: "https://geetanjalisalon.com",
        features: "Monochrome charcoal luxury with rose gold accents, celebrity makeover lookbooks",
        designSignature: {
          palette: { baseBg: '#1c1917', surfaceBg: '#fffaf5', textColor: '#fdf4ea', bodyTextColor: '#27272a', accentColor: '#f43f5e', secondaryAccent: '#fb7185' },
          typography: { headlineFont: 'Playfair Display, serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Playfair Display + Inter' },
          layoutArchetype: 'luxury-minimal',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Celebrity Glamour"
        }
      },
      {
        id: 'salon-ref-2',
        name: "Enrich Beauty Lounge",
        url: "https://enrichbeauty.com",
        features: "Clean fresh blush & teal, hair balayage color charts, kerastase treatment menus with pricing",
        designSignature: {
          palette: { baseBg: '#831843', surfaceBg: '#fff5f7', textColor: '#fff1f2', bodyTextColor: '#27272a', accentColor: '#f472b6', secondaryAccent: '#fbbf24' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'split-form',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Blush & Glow"
        }
      },
      {
        id: 'salon-ref-3',
        name: "Urban Company Salon at Home",
        url: "https://urbancompany.com",
        features: "Single-use sealed hygiene kit badge, transparent service duration minutes, top-rated aesthetician badges",
        designSignature: {
          palette: { baseBg: '#1e293b', surfaceBg: '#ffffff', textColor: '#f8fafc', bodyTextColor: '#27272a', accentColor: '#7c3aed', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-hero-booking',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'appointment_slot',
          vibeTag: "Doorstep Hygiene"
        }
      }
    ]
  },
  {
    id: 'clinic',
    categoryName: "Doctor Clinic & Dental Care",
    group: "Healthcare",
    industry: "Medical & Dental Services",
    featuresToStudy: "Doctor degrees/MCI registration badges, painless treatment FAQs, OPD timings table, WhatsApp prescription consultation",
    references: [
      {
        id: 'clinic-ref-1',
        name: "Clove Dental Clinics",
        url: "https://clovedental.in",
        features: "Clinical cyan & clean white, 10x safety sterilization badge, 0% EMI dental implant pricing cards",
        designSignature: {
          palette: { baseBg: '#0f4c5c', surfaceBg: '#f0fdfa', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#38bdf8', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Sterilized Modern Care"
        }
      },
      {
        id: 'clinic-ref-2',
        name: "Apollo Clinic Multispeciality",
        url: "https://apolloclinic.com",
        features: "Senior specialist doctor credentials, comprehensive health checkup packages, online lab report download",
        designSignature: {
          palette: { baseBg: '#0c4a6e', surfaceBg: '#ffffff', textColor: '#f0f9ff', bodyTextColor: '#27272a', accentColor: '#0284c7', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Space Grotesk + DM Sans' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'badge-card',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Trusted Health Portal"
        }
      },
      {
        id: 'clinic-ref-3',
        name: "Dr. Agarwal’s Eye Hospital",
        url: "https://dragarwal.com",
        features: "Blade-free LASIK treatment calculator, cataract surgery recovery timeline, patient video testimonials",
        designSignature: {
          palette: { baseBg: '#1e3a8a', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#3b82f6', secondaryAccent: '#60a5fa' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Fraunces + Inter' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'appointment_slot',
          vibeTag: "Advanced Vision"
        }
      }
    ]
  },
  {
    id: 'gym',
    categoryName: "Gym, CrossFit & Yoga Studio",
    group: "Health & Beauty",
    industry: "Fitness & Physical Training",
    featuresToStudy: "Free 1-day trial pass form, equipment photo tour, trainer certification profiles, monthly/annual membership plans",
    references: [
      {
        id: 'gym-ref-1',
        name: "Cult.fit Fitness Studio",
        url: "https://cult.fit",
        features: "High contrast dark athletic slate with electric volt green, group workout class schedule, calorie burn metrics",
        designSignature: {
          palette: { baseBg: '#171923', surfaceBg: '#232733', textColor: '#f7fafc', bodyTextColor: '#27272a', accentColor: '#c6f135', secondaryAccent: '#a0aec0' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'high-tech-dark',
          heroArchetype: 'split-hero-booking',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Athletic Electric"
        }
      },
      {
        id: 'gym-ref-2',
        name: "Gold’s Gym India",
        url: "https://goldsgym.in",
        features: "Iconic black & gold powerhouse styling, bodybuilding transformation before-after gallery, heavy dumbbell tour",
        designSignature: {
          palette: { baseBg: '#121212', surfaceBg: '#1e1e1e', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#eab308', secondaryAccent: '#ca8a04' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + DM Sans' },
          layoutArchetype: 'bold-editorial',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Powerhouse Gold"
        }
      },
      {
        id: 'gym-ref-3',
        name: "Anytime Fitness 24/7",
        url: "https://anytimefitness.co.in",
        features: "24/7 key-fob access guarantee, supportive friendly community culture, global reciprocity club map",
        designSignature: {
          palette: { baseBg: '#3b0764', surfaceBg: '#faf5ff', textColor: '#f3e8ff', bodyTextColor: '#27272a', accentColor: '#a855f7', secondaryAccent: '#38bdf8' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'appointment_slot',
          vibeTag: "24/7 Wellness"
        }
      }
    ]
  },
  {
    id: 'realestate',
    categoryName: "Real Estate Broker & Advisory",
    group: "Professional Services",
    industry: "Real Estate & Properties",
    featuresToStudy: "RERA verification badge, 3BHK/Villa price sliders, interactive EMI calculator, free AC car site visit booking",
    references: [
      {
        id: 'realestate-ref-1',
        name: "Square Yards Luxury Homes",
        url: "https://squareyards.com",
        features: "Deep navy & coral orange, floor plan downloads, builder track record score, verified RERA registration numbers",
        designSignature: {
          palette: { baseBg: '#14162b', surfaceBg: '#ffffff', textColor: '#fafaf8', bodyTextColor: '#27272a', accentColor: '#ff6b4a', secondaryAccent: '#4338ca' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Fraunces + Inter' },
          layoutArchetype: 'bold-editorial',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'reservation_party',
          vibeTag: "Prime Luxury Portals"
        }
      },
      {
        id: 'realestate-ref-2',
        name: "99acres Verified Listings",
        url: "https://99acres.com",
        features: "High density neighborhood amenity scores, metro distance markers, resale price trends graph",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#f8fafc', textColor: '#f1f5f9', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'product-showcase',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'reservation_party',
          vibeTag: "Verified Direct"
        }
      },
      {
        id: 'realestate-ref-3',
        name: "Sotheby’s International Realty India",
        url: "https://sothebysrealty.com",
        features: "Editorial gold & black architectural photography, high-net-worth farmhouses & penthouses",
        designSignature: {
          palette: { baseBg: '#0a0a0a', surfaceBg: '#171717', textColor: '#f5f5f5', bodyTextColor: '#27272a', accentColor: '#d4af37', secondaryAccent: '#525252' },
          typography: { headlineFont: 'Playfair Display, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Playfair Display + DM Sans' },
          layoutArchetype: 'luxury-minimal',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'reservation_party',
          vibeTag: "Ultra Luxury Estates"
        }
      }
    ]
  },
  {
    id: 'coaching',
    categoryName: "Tuition & Coaching Institute",
    group: "Education & Coaching",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "AIR top rankers, batch schedules, scholarship tests",
    references: [
      {
        id: 'coaching-ref-1',
        name: "Allen Career Institute",
        url: "https://allen.ac.in",
        features: "Flagship Allen Career Institute design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'coaching-ref-2',
        name: "PhysicsWallah",
        url: "https://pw.live",
        features: "Artisan bespoke PhysicsWallah layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'coaching-ref-3',
        name: "FIITJEE",
        url: "https://fiitjee.com",
        features: "Rapid high-volume FIITJEE layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'hotel',
    categoryName: "Hotel, Resort & Luxury Stays",
    group: "Events & Hospitality",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Room amenity comparison table, suite walkthrough, check-in calendar",
    references: [
      {
        id: 'hotel-ref-1',
        name: "Taj Hotels & Palaces",
        url: "https://tajhotels.com",
        features: "Flagship Taj Hotels & Palaces design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'hotel-ref-2',
        name: "Lemon Tree Premier",
        url: "https://lemontreehotels.com",
        features: "Artisan bespoke Lemon Tree Premier layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'hotel-ref-3',
        name: "Zostel Hostels",
        url: "https://zostel.com",
        features: "Rapid high-volume Zostel Hostels layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'ca_tax',
    categoryName: "CA, GST & Tax Consultant",
    group: "Professional Services",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "ITR filing checklist, GST compliance due dates, company registration",
    references: [
      {
        id: 'ca_tax-ref-1',
        name: "ClearTax Corporate",
        url: "https://cleartax.in",
        features: "Flagship ClearTax Corporate design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'ca_tax-ref-2',
        name: "IndiaFilings Business",
        url: "https://indiafilings.com",
        features: "Artisan bespoke IndiaFilings Business layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'ca_tax-ref-3',
        name: "Vakilsearch Tax",
        url: "https://vakilsearch.com",
        features: "Rapid high-volume Vakilsearch Tax layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'lawyer',
    categoryName: "Advocate & Legal Chambers",
    group: "Professional Services",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Bar council credentials, high court practice areas, confidential consult",
    references: [
      {
        id: 'lawyer-ref-1',
        name: "Shardul Amarchand",
        url: "https://amsshardul.com",
        features: "Flagship Shardul Amarchand design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'lawyer-ref-2',
        name: "AZB & Partners",
        url: "https://azbpartners.com",
        features: "Artisan bespoke AZB & Partners layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'lawyer-ref-3',
        name: "LawRato Advocates",
        url: "https://lawrato.com",
        features: "Rapid high-volume LawRato Advocates layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'interior_design',
    categoryName: "Interior Designer & Studio",
    group: "Professional Services",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "3D walkthrough video renders, per-sqft cost estimation calculator, finish moodboards",
    references: [
      {
        id: 'interior_design-ref-1',
        name: "Livspace Interiors",
        url: "https://livspace.com",
        features: "Flagship Livspace Interiors design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'interior_design-ref-2',
        name: "Bonito Designs",
        url: "https://bonito-designs.com",
        features: "Artisan bespoke Bonito Designs layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'interior_design-ref-3',
        name: "HomeLane 3D",
        url: "https://homelane.com",
        features: "Rapid high-volume HomeLane 3D layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'packers_movers',
    categoryName: "Packers & Movers Logistics",
    group: "Services & Trades",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Inter-city moving cost calculator, bubble wrap guarantee, live GPS truck tracking",
    references: [
      {
        id: 'packers_movers-ref-1',
        name: "Agarwal Packers DRS",
        url: "https://agarwalpackers.com",
        features: "Flagship Agarwal Packers DRS design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'packers_movers-ref-2',
        name: "Porter Mini Trucks",
        url: "https://porter.in",
        features: "Artisan bespoke Porter Mini Trucks layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'packers_movers-ref-3',
        name: "NoBroker Packers",
        url: "https://nobroker.in",
        features: "Rapid high-volume NoBroker Packers layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'ac_repair',
    categoryName: "AC & Appliance Repair",
    group: "Services & Trades",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Jet pump service rates, gas charging price table, 90-day warranty badge",
    references: [
      {
        id: 'ac_repair-ref-1',
        name: "Urban Company AC Foam Jet",
        url: "https://urbancompany.com",
        features: "Flagship Urban Company AC Foam Jet design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'ac_repair-ref-2',
        name: "Voltas Authorised Service",
        url: "https://myvoltas.com",
        features: "Artisan bespoke Voltas Authorised Service layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'ac_repair-ref-3',
        name: "Onsitego Appliance Shield",
        url: "https://onsitego.com",
        features: "Rapid high-volume Onsitego Appliance Shield layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'jewellery_shop',
    categoryName: "Fine Jewellery & Gold Studio",
    group: "Retail & Wholesale",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "BIS Hallmark 916 purity badge, daily gold rate ticker per gram, virtual try-on",
    references: [
      {
        id: 'jewellery_shop-ref-1',
        name: "Tanishq Flagship",
        url: "https://tanishq.co.in",
        features: "Flagship Tanishq Flagship design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'jewellery_shop-ref-2',
        name: "CaratLane Modern Diamond",
        url: "https://caratlane.com",
        features: "Artisan bespoke CaratLane Modern Diamond layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'jewellery_shop-ref-3',
        name: "Malabar Gold & Diamonds",
        url: "https://malabargoldanddiamonds.com",
        features: "Rapid high-volume Malabar Gold & Diamonds layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'solar_installer',
    categoryName: "Rooftop Solar Panel Installer",
    group: "Services & Trades",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Electricity bill savings calculator, MNRE government subsidy guide, 25-yr warranty",
    references: [
      {
        id: 'solar_installer-ref-1',
        name: "Tata Power Solar",
        url: "https://tatapowersolar.com",
        features: "Flagship Tata Power Solar design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'solar_installer-ref-2',
        name: "Loom Solar High-Tech",
        url: "https://loomsolar.com",
        features: "Artisan bespoke Loom Solar High-Tech layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'solar_installer-ref-3',
        name: "Freyr Energy Solar",
        url: "https://freyrenergy.com",
        features: "Rapid high-volume Freyr Energy Solar layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'carwash',
    categoryName: "Car Wash & Auto Detailing",
    group: "Automotive & Transport",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Ceramic 9H coating warranty years, foam wash multi-step process, doorstep van",
    references: [
      {
        id: 'carwash-ref-1',
        name: "The Detailing Mafia",
        url: "https://thedetailingmafia.com",
        features: "Flagship The Detailing Mafia design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'carwash-ref-2',
        name: "3M Car Care Center",
        url: "https://carcarestores.3mindia.in",
        features: "Artisan bespoke 3M Car Care Center layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'carwash-ref-3',
        name: "Speed Car Wash India",
        url: "https://speedcarwash.com",
        features: "Rapid high-volume Speed Car Wash India layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'vehicle_scrapping',
    categoryName: "Authorized Vehicle Scrapping Facility",
    group: "Automotive & Transport",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Instant scrap value calculator, free towing pickup, government COD certificate",
    references: [
      {
        id: 'vehicle_scrapping-ref-1',
        name: "CERO Motors Mahindra",
        url: "https://ceromoto.com",
        features: "Flagship CERO Motors Mahindra design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'vehicle_scrapping-ref-2',
        name: "Tata Re.Wi.Re Scrapping",
        url: "https://tatamotors.com",
        features: "Artisan bespoke Tata Re.Wi.Re Scrapping layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'vehicle_scrapping-ref-3',
        name: "ScrapYard India",
        url: "https://scrapyard.in",
        features: "Rapid high-volume ScrapYard India layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'gaming_cafe',
    categoryName: "PS5 Gaming Café & VR Lounge",
    group: "Specialized & Modern",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Hourly console rate cards, 240Hz monitor specs, eSports tournament schedule",
    references: [
      {
        id: 'gaming_cafe-ref-1',
        name: "LXG eSports Arena",
        url: "https://lxgindia.com",
        features: "Flagship LXG eSports Arena design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'gaming_cafe-ref-2',
        name: "PlayStation Lounge",
        url: "https://playstation.com",
        features: "Artisan bespoke PlayStation Lounge layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'gaming_cafe-ref-3',
        name: "Smaaash VR Gaming",
        url: "https://smaaash.in",
        features: "Rapid high-volume Smaaash VR Gaming layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'drone_service',
    categoryName: "Drone Shoot & Aerial Cinematography",
    group: "Specialized & Modern",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "DGCA licensed pilot badges, 4K ProRes showreels, survey & wedding shoot packages",
    references: [
      {
        id: 'drone_service-ref-1',
        name: "Skylark Drones Survey",
        url: "https://skylarkdrones.com",
        features: "Flagship Skylark Drones Survey design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'drone_service-ref-2',
        name: "DJI Aerial Creators India",
        url: "https://dji.com",
        features: "Artisan bespoke DJI Aerial Creators India layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'drone_service-ref-3',
        name: "Garuda Aerospace Events",
        url: "https://garudaaerospace.com",
        features: "Rapid high-volume Garuda Aerospace Events layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'coworking_space',
    categoryName: "Co-Working Space & Hot Desks",
    group: "Specialized & Modern",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Free 1-day hot desk pass form, meeting room credits, high-speed fiber internet",
    references: [
      {
        id: 'coworking_space-ref-1',
        name: "WeWork India Collaborative",
        url: "https://wework.co.in",
        features: "Flagship WeWork India Collaborative design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'coworking_space-ref-2',
        name: "Awfis Space Solutions",
        url: "https://awfis.com",
        features: "Artisan bespoke Awfis Space Solutions layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'coworking_space-ref-3',
        name: "Innov8 Coworking OYO",
        url: "https://innov8.work",
        features: "Rapid high-volume Innov8 Coworking OYO layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'organic_farm',
    categoryName: "Organic Farm & Veg Box",
    group: "Retail & Grocery",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Weekly harvest veggie box subscription, zero-chemical lab test reports, farm tour",
    references: [
      {
        id: 'organic_farm-ref-1',
        name: "First Agro Zero Pesticide",
        url: "https://firstagro.com",
        features: "Flagship First Agro Zero Pesticide design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'organic_farm-ref-2',
        name: "Country Delight Fresh",
        url: "https://countrydelight.in",
        features: "Artisan bespoke Country Delight Fresh layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'organic_farm-ref-3',
        name: "Two Brothers Organic Farms",
        url: "https://twobrothersindiashop.com",
        features: "Rapid high-volume Two Brothers Organic Farms layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'handicraft_store',
    categoryName: "Handicrafts & Artisan Crafts",
    group: "Retail & Wholesale",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Artisan GI tags, handcrafted brassware, international shipping calculator",
    references: [
      {
        id: 'handicraft_store-ref-1',
        name: "Jaypore Artisan Collective",
        url: "https://jaypore.com",
        features: "Flagship Jaypore Artisan Collective design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'handicraft_store-ref-2',
        name: "Fabindia Indigenous Crafts",
        url: "https://fabindia.com",
        features: "Artisan bespoke Fabindia Indigenous Crafts layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'handicraft_store-ref-3',
        name: "Okhai Rural Women Artisans",
        url: "https://okhai.org",
        features: "Rapid high-volume Okhai Rural Women Artisans layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'rooftop_cafe',
    categoryName: "Rooftop & Sunset Lounge",
    group: "Food & Dining",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Sunset golden-hour table reservation slots, mocktail menu, live acoustic band",
    references: [
      {
        id: 'rooftop_cafe-ref-1',
        name: "Aer Four Seasons Mumbai",
        url: "https://fourseasons.com",
        features: "Flagship Aer Four Seasons Mumbai design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'rooftop_cafe-ref-2',
        name: "Social Offline Rooftop",
        url: "https://socialoffline.in",
        features: "Artisan bespoke Social Offline Rooftop layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'rooftop_cafe-ref-3',
        name: "Kaficko Bohemian Terrace",
        url: "https://kaficko.in",
        features: "Rapid high-volume Kaficko Bohemian Terrace layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'office_tiffin',
    categoryName: "B2B Corporate Meal & Office Tiffin",
    group: "Food & Dining",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Weekly 5-day meal plan menu, thermal insulated containers, corporate GST billing",
    references: [
      {
        id: 'office_tiffin-ref-1',
        name: "Box8 Desi Meals Corporate",
        url: "https://box8.in",
        features: "Flagship Box8 Desi Meals Corporate design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'office_tiffin-ref-2',
        name: "HungerBox Tech Cafeteria",
        url: "https://hungerbox.com",
        features: "Artisan bespoke HungerBox Tech Cafeteria layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'office_tiffin-ref-3',
        name: "Ghar Ka Khana B2B Tiffins",
        url: "https://gharkakhana.in",
        features: "Rapid high-volume Ghar Ka Khana B2B Tiffins layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'electrician',
    categoryName: "Electrician & Home Wiring",
    group: "Services & Trades",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Fixed visiting charge, MCB circuit diagnosis, emergency 30-min callout",
    references: [
      {
        id: 'electrician-ref-1',
        name: "Urban Company Electrician",
        url: "https://urbancompany.com",
        features: "Flagship Urban Company Electrician design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'electrician-ref-2',
        name: "Havells Authorized Electricals",
        url: "https://havells.com",
        features: "Artisan bespoke Havells Authorized Electricals layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'electrician-ref-3',
        name: "Mr Right Electrical Care",
        url: "https://mrright.in",
        features: "Rapid high-volume Mr Right Electrical Care layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'plumber',
    categoryName: "Plumber & Sanitaryware",
    group: "Services & Trades",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Motor/leakage diagnosis, tap replacement rates, water tank cleaning combos",
    references: [
      {
        id: 'plumber-ref-1',
        name: "Jaquar Care Services",
        url: "https://jaquar.com",
        features: "Flagship Jaquar Care Services design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'plumber-ref-2',
        name: "Urban Company Plumbing",
        url: "https://urbancompany.com",
        features: "Artisan bespoke Urban Company Plumbing layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'plumber-ref-3',
        name: "Housejoy Emergency Plumber",
        url: "https://housejoy.in",
        features: "Rapid high-volume Housejoy Emergency Plumber layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'tailor',
    categoryName: "Tailor & Boutique Stitching",
    group: "Services & Trades",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Doorstep measurement master visit, designer blouse neckline catalog, 48-hr turnaround",
    references: [
      {
        id: 'tailor-ref-1',
        name: "Binks Doorstep Stitching",
        url: "https://getbinks.com",
        features: "Flagship Binks Doorstep Stitching design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'tailor-ref-2',
        name: "Raymond Custom Tailoring",
        url: "https://raymond.in",
        features: "Artisan bespoke Raymond Custom Tailoring layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'tailor-ref-3',
        name: "Needles & Thimbles Online",
        url: "https://needlesnthimbles.com",
        features: "Rapid high-volume Needles & Thimbles Online layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'pharmacy',
    categoryName: "Chemist & Medical Store",
    group: "Healthcare",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "WhatsApp prescription upload, flat 20% medicine discount banner, chronic refills",
    references: [
      {
        id: 'pharmacy-ref-1',
        name: "Apollo Pharmacy Online",
        url: "https://apollopharmacy.in",
        features: "Flagship Apollo Pharmacy Online design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'pharmacy-ref-2',
        name: "Tata 1mg Health Store",
        url: "https://1mg.com",
        features: "Artisan bespoke Tata 1mg Health Store layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'pharmacy-ref-3',
        name: "Netmeds Daily Chemist",
        url: "https://netmeds.com",
        features: "Rapid high-volume Netmeds Daily Chemist layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'driving',
    categoryName: "Motor Driving School",
    group: "Education & Coaching",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Dual-control car fleet, RTO driving license processing, morning/evening slots",
    references: [
      {
        id: 'driving-ref-1',
        name: "Maruti Suzuki Driving School",
        url: "https://marutisuzukidrivingschool.com",
        features: "Flagship Maruti Suzuki Driving School design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'driving-ref-2',
        name: "IDTR Driving Institute",
        url: "https://idtrindia.com",
        features: "Artisan bespoke IDTR Driving Institute layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'driving-ref-3',
        name: "New Star Motor Driving",
        url: "https://newstardriving.com",
        features: "Rapid high-volume New Star Motor Driving layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'photography',
    categoryName: "Wedding & Portrait Photography",
    group: "Events & Hospitality",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Wedding cinematic teaser video player, date availability calendar, candid albums",
    references: [
      {
        id: 'photography-ref-1',
        name: "Stories by Joseph Radhik",
        url: "https://stories.josephradhik.com",
        features: "Flagship Stories by Joseph Radhik design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'photography-ref-2',
        name: "WeddingNama Visual Stories",
        url: "https://weddingnama.com",
        features: "Artisan bespoke WeddingNama Visual Stories layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'photography-ref-3',
        name: "The Wedding Story",
        url: "https://theweddingstory.com",
        features: "Rapid high-volume The Wedding Story layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'events',
    categoryName: "Event Planner & Decorator",
    group: "Events & Hospitality",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Theme decoration lightbox, guest capacity budgeting, DJ & sound setup bundles",
    references: [
      {
        id: 'events-ref-1',
        name: "WedMeGood Event Planners",
        url: "https://wedmegood.com",
        features: "Flagship WedMeGood Event Planners design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'events-ref-2',
        name: "Wizcraft Global Entertainment",
        url: "https://wizcraftworld.com",
        features: "Artisan bespoke Wizcraft Global Entertainment layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'events-ref-3',
        name: "FNP Weddings & Events",
        url: "https://fnpweddings.com",
        features: "Rapid high-volume FNP Weddings & Events layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'pets',
    categoryName: "Pet Grooming & Vet Care",
    group: "Healthcare",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Dog breed grooming package breakdown, rabies vaccination tracker, flea bath",
    references: [
      {
        id: 'pets-ref-1',
        name: "Heads Up For Tails Spa",
        url: "https://headsupfortails.com",
        features: "Flagship Heads Up For Tails Spa design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'pets-ref-2',
        name: "Supertails Doorstep Vet",
        url: "https://supertails.com",
        features: "Artisan bespoke Supertails Doorstep Vet layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'pets-ref-3',
        name: "Cessna Lifeline Pet Hospital",
        url: "https://cessnalifeline.com",
        features: "Rapid high-volume Cessna Lifeline Pet Hospital layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'locksmith',
    categoryName: "24hr Emergency Locksmith",
    group: "Services & Trades",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "20-min emergency arrival countdown, car key programming, digital smart lock",
    references: [
      {
        id: 'locksmith-ref-1',
        name: "Godrej Locking Solutions",
        url: "https://godrejlocks.com",
        features: "Flagship Godrej Locking Solutions design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'locksmith-ref-2',
        name: "Yale Smart Lock Hub",
        url: "https://yalehome.com",
        features: "Artisan bespoke Yale Smart Lock Hub layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'locksmith-ref-3',
        name: "Express 24x7 Locksmith India",
        url: "https://247locksmith.in",
        features: "Rapid high-volume Express 24x7 Locksmith India layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'computer',
    categoryName: "Laptop & Computer Repair",
    group: "Services & Trades",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Motherboard chip-level diagnosis, SSD & RAM upgrade speed, refurbished MacBooks",
    references: [
      {
        id: 'computer-ref-1',
        name: "iFixit India Apple Repair",
        url: "https://ifixit.com",
        features: "Flagship iFixit India Apple Repair design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'computer-ref-2',
        name: "Nehru Place Hardware Hub",
        url: "https://nehruplaceit.com",
        features: "Artisan bespoke Nehru Place Hardware Hub layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'computer-ref-3',
        name: "Dell Authorized Support",
        url: "https://dell.com",
        features: "Rapid high-volume Dell Authorized Support layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'hardware',
    categoryName: "Hardware & Industrial Paints",
    group: "Retail & Wholesale",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Asian Paints swatch book, Bosch power tools warranty, bulk contractor quotation",
    references: [
      {
        id: 'hardware-ref-1',
        name: "Asian Paints Colour Idea",
        url: "https://asianpaints.com",
        features: "Flagship Asian Paints Colour Idea design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'hardware-ref-2',
        name: "Bosch Power Tools Pro",
        url: "https://bosch-pt.co.in",
        features: "Artisan bespoke Bosch Power Tools Pro layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'hardware-ref-3',
        name: "Kajaria Hardware & Fittings",
        url: "https://kajariaceramics.com",
        features: "Rapid high-volume Kajaria Hardware & Fittings layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'furniture',
    categoryName: "Solid Teak & Sheesham Furniture",
    group: "Retail & Wholesale",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Natural wood grain finish selector, custom dining table dimensions, lifetime termite warranty",
    references: [
      {
        id: 'furniture-ref-1',
        name: "WoodenStreet Custom Sheesham",
        url: "https://woodenstreet.com",
        features: "Flagship WoodenStreet Custom Sheesham design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'furniture-ref-2',
        name: "Pepperfry Studio Experience",
        url: "https://pepperfry.com",
        features: "Artisan bespoke Pepperfry Studio Experience layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'furniture-ref-3',
        name: "Godrej Interio Ergonomic",
        url: "https://godrejinterio.com",
        features: "Rapid high-volume Godrej Interio Ergonomic layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'bakery',
    categoryName: "Artisan Bakery & Cake Studio",
    group: "Food & Dining",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Custom tiered birthday cake designer, eggless/gluten-free filters, sourdough alerts",
    references: [
      {
        id: 'bakery-ref-1',
        name: "Theobroma Patisserie",
        url: "https://theobroma.in",
        features: "Flagship Theobroma Patisserie design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'bakery-ref-2',
        name: "Bakingo Midnight Delivery",
        url: "https://bakingo.com",
        features: "Artisan bespoke Bakingo Midnight Delivery layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'bakery-ref-3',
        name: "Le15 Patisserie Pooja Dhingra",
        url: "https://le15.com",
        features: "Rapid high-volume Le15 Patisserie Pooja Dhingra layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'icecream',
    categoryName: "Ice Cream Parlour & Gelato",
    group: "Food & Dining",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "100% real dairy & fresh fruit guarantee, party tub scoops selector, cold stone counter",
    references: [
      {
        id: 'icecream-ref-1',
        name: "Naturals Ice Cream",
        url: "https://naturalicecreams.in",
        features: "Flagship Naturals Ice Cream design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'icecream-ref-2',
        name: "Baskin Robbins 31 Flavours",
        url: "https://baskinrobbinsindia.com",
        features: "Artisan bespoke Baskin Robbins 31 Flavours layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'icecream-ref-3',
        name: "Milano Ice Cream Gelateria",
        url: "https://milanogelato.in",
        features: "Rapid high-volume Milano Ice Cream Gelateria layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'travel',
    categoryName: "Tour Operator & Holiday Planner",
    group: "Events & Hospitality",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Day-by-day itinerary accordion, per-person all-inclusive package pricing, visa assistance",
    references: [
      {
        id: 'travel-ref-1',
        name: "MakeMyTrip Holiday Packages",
        url: "https://makemytrip.com",
        features: "Flagship MakeMyTrip Holiday Packages design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'travel-ref-2',
        name: "SOTC India World Travel",
        url: "https://sotc.in",
        features: "Artisan bespoke SOTC India World Travel layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'travel-ref-3',
        name: "Thrillophilia Curated Escapes",
        url: "https://thrillophilia.com",
        features: "Rapid high-volume Thrillophilia Curated Escapes layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'tiffin',
    categoryName: "Ghar Ka Tiffin & Meal Service",
    group: "Food & Dining",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "7-day daily changing menu schedule, pure wheat rotis, 3-day trial pack booking",
    references: [
      {
        id: 'tiffin-ref-1',
        name: "Maa Ki Rasoi Homemade Meals",
        url: "https://maakirasoi.in",
        features: "Flagship Maa Ki Rasoi Homemade Meals design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'tiffin-ref-2',
        name: "EatFit Everyday Healthy Meals",
        url: "https://eatfit.in",
        features: "Artisan bespoke EatFit Everyday Healthy Meals layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'tiffin-ref-3',
        name: "Mumbai Dabbawala Heritage",
        url: "https://mumbaidabbawala.in",
        features: "Rapid high-volume Mumbai Dabbawala Heritage layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'florist',
    categoryName: "Florist & Flower Studio",
    group: "Retail & Wholesale",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Same-day 2-hour floral delivery guarantee, fresh morning roses, anniversary midnight delivery",
    references: [
      {
        id: 'florist-ref-1',
        name: "Ferns N Petals (FNP)",
        url: "https://fnp.com",
        features: "Flagship Ferns N Petals (FNP) design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'florist-ref-2',
        name: "Interflora India Luxury Flowers",
        url: "https://interflora.in",
        features: "Artisan bespoke Interflora India Luxury Flowers layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'florist-ref-3',
        name: "FlowerAura Express Delivery",
        url: "https://floweraura.com",
        features: "Rapid high-volume FlowerAura Express Delivery layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'printing',
    categoryName: "Printing Press & Digital Xerox",
    group: "Services & Trades",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Direct PDF file upload via WhatsApp, visiting card gsm chart, per-page Xerox price slab",
    references: [
      {
        id: 'printing-ref-1',
        name: "Printland Corporate Stationery",
        url: "https://printland.in",
        features: "Flagship Printland Corporate Stationery design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'printing-ref-2',
        name: "Vistaprint India",
        url: "https://vistaprint.in",
        features: "Artisan bespoke Vistaprint India layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'printing-ref-3',
        name: "Printo Instant Digital Hub",
        url: "https://printo.in",
        features: "Rapid high-volume Printo Instant Digital Hub layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'construction',
    categoryName: "Construction & Building Materials",
    group: "Industrial & B2B",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "TMT 550D rebar per-ton rates, cement brand price list, full truckload delivery radius",
    references: [
      {
        id: 'construction-ref-1',
        name: "Infra.Market B2B Building",
        url: "https://infra.market",
        features: "Flagship Infra.Market B2B Building design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'construction-ref-2',
        name: "UltraTech Cement Authorized Dealer",
        url: "https://ultratechcement.com",
        features: "Artisan bespoke UltraTech Cement Authorized Dealer layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'construction-ref-3',
        name: "Tata Tiscon Superlinks Portal",
        url: "https://tatatiscon.co.in",
        features: "Rapid high-volume Tata Tiscon Superlinks Portal layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'architect',
    categoryName: "Architect & Structural Studio",
    group: "Professional Services",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Floor plans, 3D structural CAD blueprints, municipal approval track record",
    references: [
      {
        id: 'architect-ref-1',
        name: "Hafeez Contractor Studio",
        url: "https://hafeezcontractor.com",
        features: "Flagship Hafeez Contractor Studio design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'architect-ref-2',
        name: "Morphogenesis Design",
        url: "https://morphogenesis.org",
        features: "Artisan bespoke Morphogenesis Design layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'architect-ref-3',
        name: "Edifice Consultants",
        url: "https://edifice.co.in",
        features: "Rapid high-volume Edifice Consultants layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'banquet_hall',
    categoryName: "Banquet Hall & Marriage Palace",
    group: "Events & Hospitality",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Crystal hall capacity, catering packages per plate, valet parking",
    references: [
      {
        id: 'banquet_hall-ref-1',
        name: "Tivoli Grand Resort & Banquets",
        url: "https://tivoligrand.com",
        features: "Flagship Tivoli Grand Resort & Banquets design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'banquet_hall-ref-2',
        name: "Crowne Plaza Banqueting",
        url: "https://ihg.com",
        features: "Artisan bespoke Crowne Plaza Banqueting layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'banquet_hall-ref-3',
        name: "Chhatarpur Central Mandap",
        url: "https://chhatarpurcentral.com",
        features: "Rapid high-volume Chhatarpur Central Mandap layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'cctv_security',
    categoryName: "CCTV & Security Installer",
    group: "Services & Trades",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Hikvision 4K IP cameras, night vision infrared range, mobile live viewing setup",
    references: [
      {
        id: 'cctv_security-ref-1',
        name: "CP PLUS Security World",
        url: "https://cpplusworld.com",
        features: "Flagship CP PLUS Security World design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'cctv_security-ref-2',
        name: "Hikvision India Certified Hub",
        url: "https://hikvisionindia.com",
        features: "Artisan bespoke Hikvision India Certified Hub layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'cctv_security-ref-3',
        name: "Zicom Electronic Security",
        url: "https://zicom.com",
        features: "Rapid high-volume Zicom Electronic Security layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'vet_clinic',
    categoryName: "Veterinary Clinic & Pet Hospital",
    group: "Healthcare",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Emergency puppy vaccination schedule, dental scaling, surgical theatre credentials",
    references: [
      {
        id: 'vet_clinic-ref-1',
        name: "Max Vets Hospital 24/7",
        url: "https://maxvets.com",
        features: "Flagship Max Vets Hospital 24/7 design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'vet_clinic-ref-2',
        name: "DCC Animal Hospital",
        url: "https://dccpets.com",
        features: "Artisan bespoke DCC Animal Hospital layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'vet_clinic-ref-3',
        name: "Crown Vet Clinic",
        url: "https://crownvet.com",
        features: "Rapid high-volume Crown Vet Clinic layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'preschool_daycare',
    categoryName: "Preschool & Daycare",
    group: "Education & Coaching",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Live CCTV streaming access for parents, play-way curriculum, daily nutrition schedule",
    references: [
      {
        id: 'preschool_daycare-ref-1',
        name: "EuroKids International Preschool",
        url: "https://eurokidsindia.com",
        features: "Flagship EuroKids International Preschool design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'preschool_daycare-ref-2',
        name: "Kangaroo Kids Global Pre-School",
        url: "https://kangarookids.in",
        features: "Artisan bespoke Kangaroo Kids Global Pre-School layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'preschool_daycare-ref-3',
        name: "Kidzee Early Childhood Care",
        url: "https://kidzee.com",
        features: "Rapid high-volume Kidzee Early Childhood Care layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'astrologer_pooja',
    categoryName: "Vedic Astrologer & Pooja Services",
    group: "Professional Services",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Birth chart (Kundali) matching, gemstones recommendation, certified pandit booking",
    references: [
      {
        id: 'astrologer_pooja-ref-1',
        name: "Astrotalk Online Consultations",
        url: "https://astrotalk.com",
        features: "Flagship Astrotalk Online Consultations design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'astrologer_pooja-ref-2',
        name: "GaneshaSpeaks Astrological Insights",
        url: "https://ganeshaspeaks.com",
        features: "Artisan bespoke GaneshaSpeaks Astrological Insights layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'astrologer_pooja-ref-3',
        name: "Shri Pandit Ji Pooja Services",
        url: "https://shripanditji.com",
        features: "Rapid high-volume Shri Pandit Ji Pooja Services layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'arts_academy',
    categoryName: "Performing Arts & Music Academy",
    group: "Education & Coaching",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Guitar, keyboard & Hindustani vocal slots, Trinity College London certification",
    references: [
      {
        id: 'arts_academy-ref-1',
        name: "Furtados School of Music",
        url: "https://fsm.net.in",
        features: "Flagship Furtados School of Music design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'arts_academy-ref-2',
        name: "Shiamak Davar Dance Academy",
        url: "https://shiamak.com",
        features: "Artisan bespoke Shiamak Davar Dance Academy layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'arts_academy-ref-3',
        name: "Swirl Music India",
        url: "https://swirlmusic.in",
        features: "Rapid high-volume Swirl Music India layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'auto_showroom',
    categoryName: "Car & Bike Showroom",
    group: "Automotive & Transport",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "On-road price calculator with RTO/Insurance breakdown, instant test drive booking",
    references: [
      {
        id: 'auto_showroom-ref-1',
        name: "Maruti Suzuki ARENA Showroom",
        url: "https://marutisuzuki.com",
        features: "Flagship Maruti Suzuki ARENA Showroom design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'auto_showroom-ref-2',
        name: "Royal Enfield Motorcycle Studio",
        url: "https://royalenfield.com",
        features: "Artisan bespoke Royal Enfield Motorcycle Studio layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'auto_showroom-ref-3',
        name: "Tata Motors Passenger Vehicles",
        url: "https://tatamotors.com",
        features: "Rapid high-volume Tata Motors Passenger Vehicles layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'painting_contractor',
    categoryName: "Painting Contractor & Wall Stylist",
    group: "Services & Trades",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Free on-site laser wall measurement, Asian Paints Royale warranty, dust-free sanding",
    references: [
      {
        id: 'painting_contractor-ref-1',
        name: "Asian Paints Safe Painting",
        url: "https://asianpaints.com",
        features: "Flagship Asian Paints Safe Painting design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'painting_contractor-ref-2',
        name: "Berger Express Painting",
        url: "https://bergerpaints.com",
        features: "Artisan bespoke Berger Express Painting layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'painting_contractor-ref-3',
        name: "Nerolac Impressions Home Care",
        url: "https://nerolac.com",
        features: "Rapid high-volume Nerolac Impressions Home Care layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'optical_shop',
    categoryName: "Optical Shop & Eye Care",
    group: "Healthcare",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Computerized eye testing chair, anti-glare blue-cut lenses, designer frame collection",
    references: [
      {
        id: 'optical_shop-ref-1',
        name: "Lenskart Eyewear Studio",
        url: "https://lenskart.com",
        features: "Flagship Lenskart Eyewear Studio design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'optical_shop-ref-2',
        name: "Titan Eyeplus Vision Center",
        url: "https://titaneyeplus.com",
        features: "Artisan bespoke Titan Eyeplus Vision Center layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'optical_shop-ref-3',
        name: "Ray-Ban India Flagship",
        url: "https://ray-ban.com",
        features: "Rapid high-volume Ray-Ban India Flagship layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'ro_water_purifier',
    categoryName: "RO & Water Purifier Service",
    group: "Services & Trades",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "TDS water quality check, RO membrane replacement price list, annual AMC packages",
    references: [
      {
        id: 'ro_water_purifier-ref-1',
        name: "Kent RO Systems Care",
        url: "https://kent.co.in",
        features: "Flagship Kent RO Systems Care design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'ro_water_purifier-ref-2',
        name: "Aquaguard Eureka Forbes Hub",
        url: "https://eurekaforbes.com",
        features: "Artisan bespoke Aquaguard Eureka Forbes Hub layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'ro_water_purifier-ref-3',
        name: "Urban Company RO Repair",
        url: "https://urbancompany.com",
        features: "Rapid high-volume Urban Company RO Repair layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'pest_control',
    categoryName: "Eco-friendly Pest Control",
    group: "Services & Trades",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Odorless herbal gel for cockroaches, safe chemicals, 1-year termite warranty",
    references: [
      {
        id: 'pest_control-ref-1',
        name: "HiCare Eco Pest Control",
        url: "https://hicare.in",
        features: "Flagship HiCare Eco Pest Control design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'pest_control-ref-2',
        name: "Rentokil PCI Pest Specialists",
        url: "https://rentokil-pestcontrolindia.com",
        features: "Artisan bespoke Rentokil PCI Pest Specialists layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'pest_control-ref-3',
        name: "Urban Company Pest Control",
        url: "https://urbancompany.com",
        features: "Rapid high-volume Urban Company Pest Control layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'courier_delivery',
    categoryName: "Domestic & Cargo Courier",
    group: "Services & Trades",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Pin-code serviceability checker, per-kg rate calculator, international parcel docs",
    references: [
      {
        id: 'courier_delivery-ref-1',
        name: "DTDC Express Parcel",
        url: "https://dtdc.in",
        features: "Flagship DTDC Express Parcel design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'courier_delivery-ref-2',
        name: "Blue Dart Aviation Courier",
        url: "https://bluedart.com",
        features: "Artisan bespoke Blue Dart Aviation Courier layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'courier_delivery-ref-3',
        name: "Shiprocket D2C Logistics",
        url: "https://shiprocket.in",
        features: "Rapid high-volume Shiprocket D2C Logistics layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'home_baker',
    categoryName: "Home Baker & Custom Cakes",
    group: "Food & Dining",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Fondant theme cake design customizer, eggless bakes, fresh fruit compote fillings",
    references: [
      {
        id: 'home_baker-ref-1',
        name: "Sweet Obsessions Custom Bakes",
        url: "https://sweetobsessions.in",
        features: "Flagship Sweet Obsessions Custom Bakes design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'home_baker-ref-2',
        name: "Love & Cheesecake Mumbai",
        url: "https://loveandcheesecake.com",
        features: "Artisan bespoke Love & Cheesecake Mumbai layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'home_baker-ref-3',
        name: "Warm Oven Fresh Bakes",
        url: "https://warmoven.in",
        features: "Rapid high-volume Warm Oven Fresh Bakes layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'notary_legal',
    categoryName: "Notary & Legal Documentation",
    group: "Professional Services",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Affidavit drafting, rent agreement e-stamping, power of attorney attestation",
    references: [
      {
        id: 'notary_legal-ref-1',
        name: "e-Drafter Legal Agreements",
        url: "https://e-drafter.in",
        features: "Flagship e-Drafter Legal Agreements design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'notary_legal-ref-2',
        name: "Doqfy Documentation Portal",
        url: "https://doqfy.in",
        features: "Artisan bespoke Doqfy Documentation Portal layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'notary_legal-ref-3',
        name: "LegalKart Document Drafting",
        url: "https://legalkart.com",
        features: "Rapid high-volume LegalKart Document Drafting layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'insurance_agent',
    categoryName: "Insurance Advisor & Agent",
    group: "Professional Services",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Term insurance 1-Cr coverage comparison, cashless hospital network, instant renewal",
    references: [
      {
        id: 'insurance_agent-ref-1',
        name: "Policybazaar Insurance Hub",
        url: "https://policybazaar.com",
        features: "Flagship Policybazaar Insurance Hub design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'insurance_agent-ref-2',
        name: "HDFC ERGO General Insurance",
        url: "https://hdfcergo.com",
        features: "Artisan bespoke HDFC ERGO General Insurance layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'insurance_agent-ref-3',
        name: "Ditto Insurance Advisory",
        url: "https://joinditto.com",
        features: "Rapid high-volume Ditto Insurance Advisory layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'loan_dsa',
    categoryName: "Loan & DSA Finance Consultant",
    group: "Professional Services",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Home loan lowest interest rate calculator, CIBIL score assistance, bank sanction",
    references: [
      {
        id: 'loan_dsa-ref-1',
        name: "Paisabazaar Credit Portal",
        url: "https://paisabazaar.com",
        features: "Flagship Paisabazaar Credit Portal design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'loan_dsa-ref-2',
        name: "BankBazaar Finance Hub",
        url: "https://bankbazaar.com",
        features: "Artisan bespoke BankBazaar Finance Hub layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'loan_dsa-ref-3',
        name: "Andromeda Loans India DSA",
        url: "https://andromedaloans.com",
        features: "Rapid high-volume Andromeda Loans India DSA layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'telecom_recharge',
    categoryName: "Mobile Recharge & Electronics",
    group: "Retail & Wholesale",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Fastag recharge, DTH monthly combo plans, mobile screen guard & fast charger catalog",
    references: [
      {
        id: 'telecom_recharge-ref-1',
        name: "Jio Digital Life Services",
        url: "https://jio.com",
        features: "Flagship Jio Digital Life Services design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'telecom_recharge-ref-2',
        name: "Airtel Digital Recharge Portal",
        url: "https://airtel.in",
        features: "Artisan bespoke Airtel Digital Recharge Portal layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'telecom_recharge-ref-3',
        name: "Paytm Mobile Payments",
        url: "https://paytm.com",
        features: "Rapid high-volume Paytm Mobile Payments layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'gift_stationery',
    categoryName: "Gift Shop & Fancy Stationery",
    group: "Retail & Wholesale",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Personalized laser-engraved pens, corporate welcome kits, imported journaling pens",
    references: [
      {
        id: 'gift_stationery-ref-1',
        name: "Archies Online Gift Gallery",
        url: "https://archiesonline.com",
        features: "Flagship Archies Online Gift Gallery design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'gift_stationery-ref-2',
        name: "Scooboo Imported Stationery",
        url: "https://scooboo.in",
        features: "Artisan bespoke Scooboo Imported Stationery layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'gift_stationery-ref-3',
        name: "Origin One Minimalist Goods",
        url: "https://originone.in",
        features: "Rapid high-volume Origin One Minimalist Goods layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'toy_shop',
    categoryName: "Toy Store & Kids Wonderland",
    group: "Retail & Wholesale",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Age-wise toy filter, remote-control cars, certified non-toxic wooden puzzle toys",
    references: [
      {
        id: 'toy_shop-ref-1',
        name: "Hamleys Finest Toy Shop",
        url: "https://hamleys.in",
        features: "Flagship Hamleys Finest Toy Shop design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'toy_shop-ref-2',
        name: "FirstCry Toys & Learning Sets",
        url: "https://firstcry.com",
        features: "Artisan bespoke FirstCry Toys & Learning Sets layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'toy_shop-ref-3',
        name: "Shumee Wooden Eco Toys",
        url: "https://shumee.in",
        features: "Rapid high-volume Shumee Wooden Eco Toys layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'sports_shop',
    categoryName: "Sports Goods & Fitness Gear",
    group: "Retail & Wholesale",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "English Willow cricket bat grading, badminton racket stringing tension, gym gear",
    references: [
      {
        id: 'sports_shop-ref-1',
        name: "Decathlon Sports Megastore",
        url: "https://decathlon.in",
        features: "Flagship Decathlon Sports Megastore design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'sports_shop-ref-2',
        name: "SG Cricket Equipment Portal",
        url: "https://sgcricket.com",
        features: "Artisan bespoke SG Cricket Equipment Portal layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'sports_shop-ref-3',
        name: "Yonex Badminton Experience",
        url: "https://yonex.com",
        features: "Rapid high-volume Yonex Badminton Experience layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'cycle_repair',
    categoryName: "Bicycle Sales & Pro Overhaul",
    group: "Automotive & Transport",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Geared MTB & road bike tune-up package, hydraulic disc brake bleeding, pickup van",
    references: [
      {
        id: 'cycle_repair-ref-1',
        name: "Firefox Bikes Store",
        url: "https://firefoxbikes.com",
        features: "Flagship Firefox Bikes Store design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'cycle_repair-ref-2',
        name: "Track & Trail Cycling Hub",
        url: "https://trackandtrail.in",
        features: "Artisan bespoke Track & Trail Cycling Hub layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'cycle_repair-ref-3',
        name: "ChooseMyBicycle Doorstep Service",
        url: "https://choosemybicycle.com",
        features: "Rapid high-volume ChooseMyBicycle Doorstep Service layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'auto_garage',
    categoryName: "Multi-car Auto Garage & Mechanic",
    group: "Automotive & Transport",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "OBD scanner error diagnosis, synthetic engine oil flush combo, cashless accidental claim",
    references: [
      {
        id: 'auto_garage-ref-1',
        name: "GoMechanic Multi-Brand Workshops",
        url: "https://gomechanic.in",
        features: "Flagship GoMechanic Multi-Brand Workshops design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'auto_garage-ref-2',
        name: "Pitstop Car Service & Maintenance",
        url: "https://getpitstop.com",
        features: "Artisan bespoke Pitstop Car Service & Maintenance layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'auto_garage-ref-3',
        name: "Bosch Car Service Network",
        url: "https://boschcarservice.com",
        features: "Rapid high-volume Bosch Car Service Network layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'cab_taxi_rental',
    categoryName: "Cab Rental & Airport Taxi Service",
    group: "Automotive & Transport",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Outstation one-way drop fares, verified chauffeur, Dzire/Ertiga/Innova Crysta choices",
    references: [
      {
        id: 'cab_taxi_rental-ref-1',
        name: "Savaari Outstation Car Rentals",
        url: "https://savaari.com",
        features: "Flagship Savaari Outstation Car Rentals design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'cab_taxi_rental-ref-2',
        name: "MakeMyTrip Outstation Cabs",
        url: "https://makemytrip.com",
        features: "Artisan bespoke MakeMyTrip Outstation Cabs layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'cab_taxi_rental-ref-3',
        name: "Avis Luxury Chauffeur Drive",
        url: "https://avis.co.in",
        features: "Rapid high-volume Avis Luxury Chauffeur Drive layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'physiotherapy',
    categoryName: "Physiotherapy & Ortho Rehab",
    group: "Healthcare",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Slip disc & sciatica pain relief therapy, post-knee replacement walking rehab",
    references: [
      {
        id: 'physiotherapy-ref-1',
        name: "QI Spine Clinic Specialized Rehab",
        url: "https://qispine.com",
        features: "Flagship QI Spine Clinic Specialized Rehab design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'physiotherapy-ref-2',
        name: "Portea Home Physiotherapy Care",
        url: "https://portea.com",
        features: "Artisan bespoke Portea Home Physiotherapy Care layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'physiotherapy-ref-3',
        name: "HealthActive Sports & Joint Rehab",
        url: "https://healthactive.in",
        features: "Rapid high-volume HealthActive Sports & Joint Rehab layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'musical_instruments',
    categoryName: "Musical Instrument Shop",
    group: "Retail & Wholesale",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Acoustic guitar action setup guarantee, digital keyboard demo, Yamaha warranty",
    references: [
      {
        id: 'musical_instruments-ref-1',
        name: "Bajaao Pro Audio & Guitars",
        url: "https://bajaao.com",
        features: "Flagship Bajaao Pro Audio & Guitars design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'musical_instruments-ref-2',
        name: "Furtados Music Since 1865",
        url: "https://furtadosonline.com",
        features: "Artisan bespoke Furtados Music Since 1865 layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'musical_instruments-ref-3',
        name: "Yamaha Music India Studio",
        url: "https://yamahamusicindia.com",
        features: "Rapid high-volume Yamaha Music India Studio layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'bookshop_library',
    categoryName: "Bookstore & Lending Library",
    group: "Retail & Wholesale",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "New bestseller book recommendations, rare vintage regional titles, reading lounge",
    references: [
      {
        id: 'bookshop_library-ref-1',
        name: "Bahrisons Booksellers 1953",
        url: "https://booksatbahri.com",
        features: "Flagship Bahrisons Booksellers 1953 design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'bookshop_library-ref-2',
        name: "Crossword Bookstores",
        url: "https://crossword.in",
        features: "Artisan bespoke Crossword Bookstores layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'bookshop_library-ref-3',
        name: "Kitab Khana Heritage Mumbai",
        url: "https://kitabkhana.in",
        features: "Rapid high-volume Kitab Khana Heritage Mumbai layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'curtain_upholstery',
    categoryName: "Curtains, Blinds & Upholstery",
    group: "Services & Trades",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Motorized remote-control blinds, blackout fabric swatches, sofa re-upholstery foam",
    references: [
      {
        id: 'curtain_upholstery-ref-1',
        name: "D’Decor Home Fabrics",
        url: "https://ddecor.com",
        features: "Flagship D’Decor Home Fabrics design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'curtain_upholstery-ref-2',
        name: "Swayam India Home Linen",
        url: "https://swayamindia.com",
        features: "Artisan bespoke Swayam India Home Linen layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'curtain_upholstery-ref-3',
        name: "Hunter Douglas Window Coverings",
        url: "https://hunterdouglas.in",
        features: "Rapid high-volume Hunter Douglas Window Coverings layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'plant_nursery',
    categoryName: "Plant Nursery & Exotic Flora",
    group: "Retail & Wholesale",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Air-purifying snake plants, ceramic self-watering planters, organic soil mix",
    references: [
      {
        id: 'plant_nursery-ref-1',
        name: "Ugaoo Urban Garden Store",
        url: "https://ugaoo.com",
        features: "Flagship Ugaoo Urban Garden Store design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'plant_nursery-ref-2',
        name: "Nurserylive Green Planet",
        url: "https://nurserylive.com",
        features: "Artisan bespoke Nurserylive Green Planet layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'plant_nursery-ref-3',
        name: "MyBageecha Rare Exotics",
        url: "https://mybageecha.com",
        features: "Rapid high-volume MyBageecha Rare Exotics layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'bridal_makeup',
    categoryName: "Celebrity Bridal Makeup Artist",
    group: "Health & Beauty",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Airbrush HD makeup longevity, luxury vanity products, pre-wedding trial slot",
    references: [
      {
        id: 'bridal_makeup-ref-1',
        name: "Meenakshi Dutt Makeovers",
        url: "https://meenakshiduttmakeovers.com",
        features: "Flagship Meenakshi Dutt Makeovers design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'bridal_makeup-ref-2',
        name: "Parul Garg Bridal Artistry",
        url: "https://parulgargmakeup.com",
        features: "Artisan bespoke Parul Garg Bridal Artistry layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'bridal_makeup-ref-3',
        name: "Ojas Rajani Celebrity Stylist",
        url: "https://ojasrajani.com",
        features: "Rapid high-volume Ojas Rajani Celebrity Stylist layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'cold_storage_warehouse',
    categoryName: "Cold Storage & Agro Warehousing",
    group: "Industrial & B2B",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Controlled atmosphere chambers, potato/apple pallet capacity, 24/7 DG power backup",
    references: [
      {
        id: 'cold_storage_warehouse-ref-1',
        name: "Snowman Logistics Cold Chain",
        url: "https://snowman.in",
        features: "Flagship Snowman Logistics Cold Chain design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'cold_storage_warehouse-ref-2',
        name: "Gubba Cold Storage Heritage",
        url: "https://gubbacoldstorage.com",
        features: "Artisan bespoke Gubba Cold Storage Heritage layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'cold_storage_warehouse-ref-3',
        name: "Coldman Logistics Enterprise",
        url: "https://coldman.in",
        features: "Rapid high-volume Coldman Logistics Enterprise layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'school_transport',
    categoryName: "Safe School Van Transport",
    group: "Automotive & Transport",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "GPS speed governor, female attendant on board, parent mobile app live stop alerts",
    references: [
      {
        id: 'school_transport-ref-1',
        name: "SchoolBus India Safe Rides",
        url: "https://schoolbusindia.com",
        features: "Flagship SchoolBus India Safe Rides design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'school_transport-ref-2',
        name: "ZipGo Student Shuttle Network",
        url: "https://zipgo.in",
        features: "Artisan bespoke ZipGo Student Shuttle Network layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'school_transport-ref-3',
        name: "Gurukool School Transit Care",
        url: "https://gurukooltransport.com",
        features: "Rapid high-volume Gurukool School Transit Care layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'dance_fitness',
    categoryName: "Zumba, Aerobics & Dance Studio",
    group: "Health & Beauty",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Calorie burning Zumba party sessions, Bollywood cardio batches, free trial class pass",
    references: [
      {
        id: 'dance_fitness-ref-1',
        name: "Cult Dance Fitness Cure.fit",
        url: "https://cult.fit",
        features: "Flagship Cult Dance Fitness Cure.fit design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'dance_fitness-ref-2',
        name: "Zumba Fitness India Official",
        url: "https://zumba.com",
        features: "Artisan bespoke Zumba Fitness India Official layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'dance_fitness-ref-3',
        name: "BollyBeats Fitness Studio",
        url: "https://bollybeatsfitness.com",
        features: "Rapid high-volume BollyBeats Fitness Studio layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'pathology_lab',
    categoryName: "Pathology Lab & Diagnostic Center",
    group: "Healthcare",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Free home sample blood collection, 6-hr digital report on WhatsApp, NABL gold seal",
    references: [
      {
        id: 'pathology_lab-ref-1',
        name: "Dr Lal PathLabs Diagnostics",
        url: "https://lalpathlabs.com",
        features: "Flagship Dr Lal PathLabs Diagnostics design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'pathology_lab-ref-2',
        name: "Thyrocare Preventive Health",
        url: "https://thyrocare.com",
        features: "Artisan bespoke Thyrocare Preventive Health layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'pathology_lab-ref-3',
        name: "Metropolis Healthcare Care",
        url: "https://metropolisindia.com",
        features: "Rapid high-volume Metropolis Healthcare Care layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'escape_room',
    categoryName: "Mystery Escape Room Adventures",
    group: "Specialized & Modern",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Live 60-min escape challenges, spooky haunted castle vs bank heist themes",
    references: [
      {
        id: 'escape_room-ref-1',
        name: "Mystery Rooms India",
        url: "https://mysteryrooms.in",
        features: "Flagship Mystery Rooms India design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'escape_room-ref-2',
        name: "The Hidden Hour Adventures",
        url: "https://thehiddenhour.com",
        features: "Artisan bespoke The Hidden Hour Adventures layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'escape_room-ref-3',
        name: "Breakout Real Escape Games",
        url: "https://breakout.in",
        features: "Rapid high-volume Breakout Real Escape Games layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'tattoo_studio',
    categoryName: "Custom Tattoo & Piercing Studio",
    group: "Health & Beauty",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Single-use sterilized needle disposal guarantee, custom tattoo sketch design consult",
    references: [
      {
        id: 'tattoo_studio-ref-1',
        name: "Aliens Tattoo Studio Flagship",
        url: "https://alienstattoo.com",
        features: "Flagship Aliens Tattoo Studio Flagship design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'tattoo_studio-ref-2',
        name: "Devil’z Tattooz Delhi",
        url: "https://tattoosnewdelhi.com",
        features: "Artisan bespoke Devil’z Tattooz Delhi layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'tattoo_studio-ref-3',
        name: "BodyCanvas Ink & Piercing",
        url: "https://bodycanvas.in",
        features: "Rapid high-volume BodyCanvas Ink & Piercing layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'home_tutor',
    categoryName: "Private Home Tutor Network",
    group: "Education & Coaching",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "CBSE/ICSE board specialist tutors, 1-on-1 free demo class at home, monthly tests",
    references: [
      {
        id: 'home_tutor-ref-1',
        name: "LearnPick Verified Tutors",
        url: "https://learnpick.in",
        features: "Flagship LearnPick Verified Tutors design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'home_tutor-ref-2',
        name: "UrbanPro Tutoring Network",
        url: "https://urbanpro.com",
        features: "Artisan bespoke UrbanPro Tutoring Network layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'home_tutor-ref-3',
        name: "HomeTutors Hub India",
        url: "https://hometutorshub.com",
        features: "Rapid high-volume HomeTutors Hub India layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'party_rental',
    categoryName: "Tent, Sound & Party Rental",
    group: "Events & Hospitality",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Waterproof German tents, JBL line array concert sound system, wedding chafing dishes",
    references: [
      {
        id: 'party_rental-ref-1',
        name: "Modern Tent & Event Infra",
        url: "https://moderntent.in",
        features: "Flagship Modern Tent & Event Infra design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'party_rental-ref-2',
        name: "SoundCraft Pro Audio Hire",
        url: "https://soundcrafthire.com",
        features: "Artisan bespoke SoundCraft Pro Audio Hire layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'party_rental-ref-3',
        name: "Celebration Rental Hub",
        url: "https://celebrationrentals.in",
        features: "Rapid high-volume Celebration Rental Hub layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'corporate_gifting',
    categoryName: "Corporate Gifting & Hampers",
    group: "Retail & Wholesale",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Custom logo embossing, premium dry fruit and tech gadget hampers, bulk GST invoicing",
    references: [
      {
        id: 'corporate_gifting-ref-1',
        name: "Printstop Corporate Merchandise",
        url: "https://printstop.co.in",
        features: "Flagship Printstop Corporate Merchandise design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'corporate_gifting-ref-2',
        name: "The Gift Affair Luxury Boxes",
        url: "https://thegiftaffair.in",
        features: "Artisan bespoke The Gift Affair Luxury Boxes layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'corporate_gifting-ref-3',
        name: "Consortium Gifts B2B Portal",
        url: "https://consortiumgifts.com",
        features: "Rapid high-volume Consortium Gifts B2B Portal layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'microbrewery',
    categoryName: "Microbrewery & Craft Beer Pub",
    group: "Food & Dining",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Live craft beer on tap (IPA, Hefeweizen, Stout), brewery tour, sourdough pizzas",
    references: [
      {
        id: 'microbrewery-ref-1',
        name: "Toit Brewpub Bangalore",
        url: "https://toit.in",
        features: "Flagship Toit Brewpub Bangalore design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'microbrewery-ref-2',
        name: "Arbor Brewing Company ABC",
        url: "https://arborbrewing.com",
        features: "Artisan bespoke Arbor Brewing Company ABC layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'microbrewery-ref-3',
        name: "Geist Craft Brewing Co",
        url: "https://geist.in",
        features: "Rapid high-volume Geist Craft Brewing Co layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'pan_asian_dining',
    categoryName: "Fine Dining Pan-Asian & Sushi",
    group: "Food & Dining",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Fresh salmon sashimi & California rolls, steaming dim sum baskets, robata grill",
    references: [
      {
        id: 'pan_asian_dining-ref-1',
        name: "Mamagoto Asian Gastro Pub",
        url: "https://mamagoto.in",
        features: "Flagship Mamagoto Asian Gastro Pub design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'pan_asian_dining-ref-2',
        name: "Pa Pa Ya Molecular Asian",
        url: "https://papaya.in",
        features: "Artisan bespoke Pa Pa Ya Molecular Asian layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'pan_asian_dining-ref-3',
        name: "Yauatcha Dim Sum Teahouse",
        url: "https://yauatcha.com",
        features: "Rapid high-volume Yauatcha Dim Sum Teahouse layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'cloud_kitchen',
    categoryName: "Cloud Kitchen Delivery Hub",
    group: "Food & Dining",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Individual earthen handi dum biryani, 30-min hot sealed delivery, combo offers",
    references: [
      {
        id: 'cloud_kitchen-ref-1',
        name: "Rebel Foods Behrouz Biryani",
        url: "https://behrouzbiryani.com",
        features: "Flagship Rebel Foods Behrouz Biryani design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'cloud_kitchen-ref-2',
        name: "Faasos Everyday Food Wrap",
        url: "https://faasos.com",
        features: "Artisan bespoke Faasos Everyday Food Wrap layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'cloud_kitchen-ref-3',
        name: "Biryani By Kilo (BBK)",
        url: "https://biryanibykilo.com",
        features: "Rapid high-volume Biryani By Kilo (BBK) layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'south_indian_tiffin',
    categoryName: "Authentic South Indian Tiffin Room",
    group: "Food & Dining",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Pure ghee crispy benne dosa, steaming filter coffee in dabarah, coconut chutneys",
    references: [
      {
        id: 'south_indian_tiffin-ref-1',
        name: "MTR 1924 Mavalli Tiffin Room",
        url: "https://mtr1924.com",
        features: "Flagship MTR 1924 Mavalli Tiffin Room design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'south_indian_tiffin-ref-2',
        name: "Vidyarthi Bhavan Masala Dosa",
        url: "https://vidyarthibhavan.in",
        features: "Artisan bespoke Vidyarthi Bhavan Masala Dosa layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'south_indian_tiffin-ref-3',
        name: "Saravana Bhavan Global",
        url: "https://saravanabhavan.com",
        features: "Rapid high-volume Saravana Bhavan Global layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'bbq_smokehouse',
    categoryName: "Barbeque & Smokehouse Grill",
    group: "Food & Dining",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Live charcoal grill embedded in dining table, unlimited buffet skewer spreads",
    references: [
      {
        id: 'bbq_smokehouse-ref-1',
        name: "Barbeque Nation Buffet",
        url: "https://barbequenation.com",
        features: "Flagship Barbeque Nation Buffet design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'bbq_smokehouse-ref-2',
        name: "Absolute Barbecues AB’s",
        url: "https://absolutebarbecues.com",
        features: "Artisan bespoke Absolute Barbecues AB’s layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'bbq_smokehouse-ref-3',
        name: "The Black Pearl Pirate Theme",
        url: "https://theblackpearl.in",
        features: "Rapid high-volume The Black Pearl Pirate Theme layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'juice_smoothie_bar',
    categoryName: "Organic Cold-Pressed Juice Bar",
    group: "Food & Dining",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "100% cold-pressed zero-sugar detox juices, high-protein whey smoothies, acai bowls",
    references: [
      {
        id: 'juice_smoothie_bar-ref-1',
        name: "Raw Pressery Cold Pressed",
        url: "https://rawpressery.com",
        features: "Flagship Raw Pressery Cold Pressed design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'juice_smoothie_bar-ref-2',
        name: "Juice Lounge Smoothie Bar",
        url: "https://juicelounge.in",
        features: "Artisan bespoke Juice Lounge Smoothie Bar layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'juice_smoothie_bar-ref-3',
        name: "Drunken Monkey Smoothie Bar",
        url: "https://thedrunkenmonkey.com",
        features: "Rapid high-volume Drunken Monkey Smoothie Bar layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'heritage_homestay',
    categoryName: "Heritage Homestay & Haveli",
    group: "Events & Hospitality",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Centuries-old Rajput fresco arches, courtyard folk dance evenings, vintage royal beds",
    references: [
      {
        id: 'heritage_homestay-ref-1',
        name: "Neemrana Non-Hotel Heritage",
        url: "https://neemranahotels.com",
        features: "Flagship Neemrana Non-Hotel Heritage design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'heritage_homestay-ref-2',
        name: "Samode Haveli Jaipur",
        url: "https://samode.com",
        features: "Artisan bespoke Samode Haveli Jaipur layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'heritage_homestay-ref-3',
        name: "WelcomHeritage Palaces",
        url: "https://welcomheritagehotels.in",
        features: "Rapid high-volume WelcomHeritage Palaces layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'wellness_resort',
    categoryName: "Luxury Ayurveda & Wellness Retreat",
    group: "Events & Hospitality",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Ayurvedic doctor pulse diagnosis, daily hatha yoga, organic farm detox cuisine",
    references: [
      {
        id: 'wellness_resort-ref-1',
        name: "Ananda in the Himalayas",
        url: "https://anandaspa.com",
        features: "Flagship Ananda in the Himalayas design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'wellness_resort-ref-2',
        name: "Soukya Holistic Health Centre",
        url: "https://soukya.com",
        features: "Artisan bespoke Soukya Holistic Health Centre layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'wellness_resort-ref-3',
        name: "Vana Munjal Wellness Estate",
        url: "https://vana.co.in",
        features: "Rapid high-volume Vana Munjal Wellness Estate layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'budget_hotel',
    categoryName: "Budget Business Hotel & Suites",
    group: "Events & Hospitality",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Guaranteed spotlessly clean linen, high-speed Wi-Fi, working desk, free breakfast",
    references: [
      {
        id: 'budget_hotel-ref-1',
        name: "FabHotels Budget Stays",
        url: "https://fabhotels.com",
        features: "Flagship FabHotels Budget Stays design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'budget_hotel-ref-2',
        name: "Treebo Trend Business Stays",
        url: "https://treebo.com",
        features: "Artisan bespoke Treebo Trend Business Stays layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'budget_hotel-ref-3',
        name: "Bloom Hotels Clean Sleep",
        url: "https://bloomhotels.com",
        features: "Rapid high-volume Bloom Hotels Clean Sleep layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'dermatology_clinic',
    categoryName: "Dermatology & Aesthetic Skin Clinic",
    group: "Healthcare",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Laser hair removal packages, chemical peel acne scar treatments, US-FDA lasers",
    references: [
      {
        id: 'dermatology_clinic-ref-1',
        name: "Kaya Skin Clinic Experts",
        url: "https://kaya.in",
        features: "Flagship Kaya Skin Clinic Experts design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'dermatology_clinic-ref-2',
        name: "Oliva Skin & Hair Clinic",
        url: "https://olivaclinic.com",
        features: "Artisan bespoke Oliva Skin & Hair Clinic layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'dermatology_clinic-ref-3',
        name: "Dr Batra’s Derma Care",
        url: "https://drbatras.com",
        features: "Rapid high-volume Dr Batra’s Derma Care layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'ayurveda_spa',
    categoryName: "Ayurvedic Panchakarma & Spa",
    group: "Healthcare",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Authentic Shirodhara medicated warm oil therapy, Abhyanga synchronized massage",
    references: [
      {
        id: 'ayurveda_spa-ref-1',
        name: "Kottakkal Arya Vaidya Sala",
        url: "https://aryavaidyasala.com",
        features: "Flagship Kottakkal Arya Vaidya Sala design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'ayurveda_spa-ref-2',
        name: "Kairali Ayurvedic Healing Village",
        url: "https://kairali.com",
        features: "Artisan bespoke Kairali Ayurvedic Healing Village layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'ayurveda_spa-ref-3',
        name: "Patanjali Yogpeeth Wellness",
        url: "https://patanjali.org",
        features: "Rapid high-volume Patanjali Yogpeeth Wellness layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'eye_hospital',
    categoryName: "Eye Hospital & Laser Vision Care",
    group: "Healthcare",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Painless Contoura Vision laser, robotic cataract surgery, cornea specialist team",
    references: [
      {
        id: 'eye_hospital-ref-1',
        name: "Sankara Nethralaya Chennai",
        url: "https://sankaranethralaya.org",
        features: "Flagship Sankara Nethralaya Chennai design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'eye_hospital-ref-2',
        name: "Centre for Sight Laser Eye Care",
        url: "https://centreforsight.net",
        features: "Artisan bespoke Centre for Sight Laser Eye Care layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'eye_hospital-ref-3',
        name: "Eye-Q Super Speciality Hospital",
        url: "https://eyeqindia.com",
        features: "Rapid high-volume Eye-Q Super Speciality Hospital layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'home_nursing',
    categoryName: "Home Nursing & Elderly Attendant",
    group: "Healthcare",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Bedridden patient ICU setup at home, tracheostomy & injection nurse visit slots",
    references: [
      {
        id: 'home_nursing-ref-1',
        name: "Portea Medical Home Nursing",
        url: "https://portea.com",
        features: "Flagship Portea Medical Home Nursing design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'home_nursing-ref-2',
        name: "Care24 Verified Elderly Care",
        url: "https://care24.co.in",
        features: "Artisan bespoke Care24 Verified Elderly Care layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'home_nursing-ref-3',
        name: "Apollo Homecare Medical Care",
        url: "https://apollohomecare.com",
        features: "Rapid high-volume Apollo Homecare Medical Care layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'dialysis_center',
    categoryName: "Dialysis & Nephrology Daycare",
    group: "Healthcare",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Zero-infection dialysis guarantee, single-use dialyzer sets, nephrologist on duty",
    references: [
      {
        id: 'dialysis_center-ref-1',
        name: "NephroPlus Dialysis Centers",
        url: "https://nephroplus.com",
        features: "Flagship NephroPlus Dialysis Centers design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'dialysis_center-ref-2',
        name: "Apex Kidney Care Center",
        url: "https://apexkidneycare.com",
        features: "Artisan bespoke Apex Kidney Care Center layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'dialysis_center-ref-3',
        name: "Fortis Nephrology Daycare",
        url: "https://fortishealthcare.com",
        features: "Rapid high-volume Fortis Nephrology Daycare layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'yoga_ashram',
    categoryName: "Classical Yoga & Meditation Ashram",
    group: "Health & Beauty",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Hatha yoga teacher training certifications, inner engineering, pranayama classes",
    references: [
      {
        id: 'yoga_ashram-ref-1',
        name: "Isha Yoga Centre Foundation",
        url: "https://isha.sadhguru.org",
        features: "Flagship Isha Yoga Centre Foundation design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'yoga_ashram-ref-2',
        name: "The Yoga Institute Santacruz",
        url: "https://theyogainstitute.org",
        features: "Artisan bespoke The Yoga Institute Santacruz layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'yoga_ashram-ref-3',
        name: "Art of Living International Ashram",
        url: "https://artofliving.org",
        features: "Rapid high-volume Art of Living International Ashram layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'pilates_studio',
    categoryName: "Pilates & Reformer Core Studio",
    group: "Health & Beauty",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Cadillac & reformer machine private slots, postpartum pelvic core rehab, flexibility",
    references: [
      {
        id: 'pilates_studio-ref-1',
        name: "The Pilates Studio by Namrata Purohit",
        url: "https://namratapurohit.com",
        features: "Flagship The Pilates Studio by Namrata Purohit design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'pilates_studio-ref-2',
        name: "Yasmin Karachiwala Body Image",
        url: "https://bodyimage.in",
        features: "Artisan bespoke Yasmin Karachiwala Body Image layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'pilates_studio-ref-3',
        name: "Pilates Altitude Studio",
        url: "https://pilatesaltitude.com",
        features: "Rapid high-volume Pilates Altitude Studio layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'martial_arts',
    categoryName: "Martial Arts, Karate & MMA Academy",
    group: "Health & Beauty",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Black belt certified instructors, women self defense workshops, sparring mats",
    references: [
      {
        id: 'martial_arts-ref-1',
        name: "Krav Maga India Self Defense",
        url: "https://kravmagaindia.in",
        features: "Flagship Krav Maga India Self Defense design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'martial_arts-ref-2',
        name: "Ultimate Karate Club India",
        url: "https://ultimatekarate.in",
        features: "Artisan bespoke Ultimate Karate Club India layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'martial_arts-ref-3',
        name: "KOOH Sports Boxing & MMA",
        url: "https://koohsports.com",
        features: "Rapid high-volume KOOH Sports Boxing & MMA layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'swimming_academy',
    categoryName: "Swimming Academy & Heated Pools",
    group: "Health & Beauty",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Olympic-sized temperature controlled heated pools, toddler water baby classes",
    references: [
      {
        id: 'swimming_academy-ref-1',
        name: "Nisha Millet Swimming Academy",
        url: "https://nishamillet.com",
        features: "Flagship Nisha Millet Swimming Academy design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'swimming_academy-ref-2',
        name: "Dolphin Aquatics National Center",
        url: "https://dolphinaquatics.in",
        features: "Artisan bespoke Dolphin Aquatics National Center layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'swimming_academy-ref-3',
        name: "Michael Phelps Swimming India",
        url: "https://michaelphelpsswimming.in",
        features: "Rapid high-volume Michael Phelps Swimming India layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'badminton_arena',
    categoryName: "Badminton & Pickleball Sports Complex",
    group: "Health & Beauty",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "BWF approved synthetic wooden courts, hourly floodlight court booking, coaching camps",
    references: [
      {
        id: 'badminton_arena-ref-1',
        name: "Pullela Gopichand Badminton Academy",
        url: "https://pgba.in",
        features: "Flagship Pullela Gopichand Badminton Academy design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'badminton_arena-ref-2',
        name: "Padukone-Dravid Sports Excellence",
        url: "https://csebangalore.com",
        features: "Artisan bespoke Padukone-Dravid Sports Excellence layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'badminton_arena-ref-3',
        name: "Hudle Turf & Court Booking",
        url: "https://hudle.in",
        features: "Rapid high-volume Hudle Turf & Court Booking layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'footwear_store',
    categoryName: "Handcrafted Leather Footwear Store",
    group: "Retail & Wholesale",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Genuine leather formal oxfords, Goodyear welted construction, orthopedic cushion soles",
    references: [
      {
        id: 'footwear_store-ref-1',
        name: "Bata India Heritage Footwear",
        url: "https://bata.in",
        features: "Flagship Bata India Heritage Footwear design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'footwear_store-ref-2',
        name: "Metro Shoes Studio Collection",
        url: "https://metroshoes.com",
        features: "Artisan bespoke Metro Shoes Studio Collection layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'footwear_store-ref-3',
        name: "Woodland Outdoor Adventure Gear",
        url: "https://woodlandworldwide.com",
        features: "Rapid high-volume Woodland Outdoor Adventure Gear layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'luggage_travel',
    categoryName: "Luggage, Trolley & Backpack Hub",
    group: "Retail & Wholesale",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Unbreakable polycarbonate spinner luggage, TSA combination locks, 5-year warranty",
    references: [
      {
        id: 'luggage_travel-ref-1',
        name: "VIP Bags Travel Gear",
        url: "https://vipbags.com",
        features: "Flagship VIP Bags Travel Gear design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'luggage_travel-ref-2',
        name: "American Tourister India",
        url: "https://americantourister.in",
        features: "Artisan bespoke American Tourister India layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'luggage_travel-ref-3',
        name: "Mokobara Modern Design Luggage",
        url: "https://mokobara.com",
        features: "Rapid high-volume Mokobara Modern Design Luggage layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'bespoke_suiting',
    categoryName: "Men's Bespoke Suiting & Sherwani",
    group: "Retail & Wholesale",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Royal groom sherwanis with hand zardozi work, Italian super 150s wool tuxedos",
    references: [
      {
        id: 'bespoke_suiting-ref-1',
        name: "Manyavar Mohey Celebration Wear",
        url: "https://manyavar.com",
        features: "Flagship Manyavar Mohey Celebration Wear design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'bespoke_suiting-ref-2',
        name: "Raymond Made to Measure",
        url: "https://raymond.in",
        features: "Artisan bespoke Raymond Made to Measure layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'bespoke_suiting-ref-3',
        name: "Kalyan Jewellers Groom Collection",
        url: "https://kalyanjewellers.net",
        features: "Rapid high-volume Kalyan Jewellers Groom Collection layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'kids_apparel',
    categoryName: "Kids Fashion & Newborn Baby Care",
    group: "Retail & Wholesale",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "100% organic combed cotton onesies, festive ethnic wear for boys & girls, soft shoes",
    references: [
      {
        id: 'kids_apparel-ref-1',
        name: "Hopscotch Kids Curated Fashion",
        url: "https://hopscotch.in",
        features: "Flagship Hopscotch Kids Curated Fashion design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'kids_apparel-ref-2',
        name: "Mothercare India Newborns",
        url: "https://mothercare.in",
        features: "Artisan bespoke Mothercare India Newborns layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'kids_apparel-ref-3',
        name: "Gini & Jony Youth Brand",
        url: "https://ginijony.com",
        features: "Rapid high-volume Gini & Jony Youth Brand layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'watch_repair',
    categoryName: "Luxury Watch Boutique & Horology Repair",
    group: "Retail & Wholesale",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Swiss automatic watch service, ultrasonic case polishing, battery & water seal pressure testing",
    references: [
      {
        id: 'watch_repair-ref-1',
        name: "Ethos Watch Boutiques",
        url: "https://ethoswatches.com",
        features: "Flagship Ethos Watch Boutiques design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'watch_repair-ref-2',
        name: "Titan World Watch Studio",
        url: "https://titanworld.com",
        features: "Artisan bespoke Titan World Watch Studio layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'watch_repair-ref-3',
        name: "Helios Watch Stores",
        url: "https://helioswatchstore.com",
        features: "Rapid high-volume Helios Watch Stores layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'modular_kitchen',
    categoryName: "Modular Kitchen & Wardrobe Experience",
    group: "Professional Services",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Marine ply BWR waterproof cabinets, soft-close Blum hinges, quartz counter slabs",
    references: [
      {
        id: 'modular_kitchen-ref-1',
        name: "Sleek Kitchens by Asian Paints",
        url: "https://sleekworld.com",
        features: "Flagship Sleek Kitchens by Asian Paints design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'modular_kitchen-ref-2',
        name: "Godrej Interio Kitchens",
        url: "https://godrejinterio.com",
        features: "Artisan bespoke Godrej Interio Kitchens layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'modular_kitchen-ref-3',
        name: "Häfele Studio Design Centre",
        url: "https://hafeleindia.com",
        features: "Rapid high-volume Häfele Studio Design Centre layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'marble_granite',
    categoryName: "Italian Marble & Imported Granite",
    group: "Industrial & B2B",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Statuario & Michael Angelo imported slabs, book-matched floor layout, per-sqft pricing",
    references: [
      {
        id: 'marble_granite-ref-1',
        name: "A-Class Marble International",
        url: "https://aclassmarble.co.in",
        features: "Flagship A-Class Marble International design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'marble_granite-ref-2',
        name: "Classic Marble Company CMC",
        url: "https://classicmarble.com",
        features: "Artisan bespoke Classic Marble Company CMC layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'marble_granite-ref-3',
        name: "R K Marble Kishangarh",
        url: "https://rkmarble.com",
        features: "Rapid high-volume R K Marble Kishangarh layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'smart_home_lighting',
    categoryName: "Architectural Lighting & Smart Automation",
    group: "Services & Trades",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Scene automation, dimmable LED magnetic track lights, voice assistant control compatibility",
    references: [
      {
        id: 'smart_home_lighting-ref-1',
        name: "Philips Hue Smart Lighting India",
        url: "https://philips-hue.com",
        features: "Flagship Philips Hue Smart Lighting India design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'smart_home_lighting-ref-2',
        name: "Wipro Smart Home Lighting",
        url: "https://wiproconsumerandlighting.com",
        features: "Artisan bespoke Wipro Smart Home Lighting layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'smart_home_lighting-ref-3',
        name: "Lutron Luxury Architectural Lighting",
        url: "https://lutron.com",
        features: "Rapid high-volume Lutron Luxury Architectural Lighting layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'glass_fabrication',
    categoryName: "Toughened Glass & Aluminium Fabricator",
    group: "Industrial & B2B",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Soundproof double-glazed UPVC windows, frameless shower glass cubicles, sliding glass partitions",
    references: [
      {
        id: 'glass_fabrication-ref-1',
        name: "Saint-Gobain Glass India",
        url: "https://saint-gobain-glass-india.com",
        features: "Flagship Saint-Gobain Glass India design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'glass_fabrication-ref-2',
        name: "Asahi India Glass (AIS)",
        url: "https://aisglass.com",
        features: "Artisan bespoke Asahi India Glass (AIS) layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'glass_fabrication-ref-3',
        name: "Fenesta UPVC Windows & Doors",
        url: "https://fenesta.com",
        features: "Rapid high-volume Fenesta UPVC Windows & Doors layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'roofing_tensile',
    categoryName: "Roofing Sheds & Tensile Canopy",
    group: "Industrial & B2B",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Galvalume color-coated industrial shed sheets, waterproof car parking tensile fabrics",
    references: [
      {
        id: 'roofing_tensile-ref-1',
        name: "Tata Bluescope Steel Roofing",
        url: "https://tatabluescopesteel.com",
        features: "Flagship Tata Bluescope Steel Roofing design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'roofing_tensile-ref-2',
        name: "Jindal Aluminium Roofing Sheets",
        url: "https://jindalaluminium.com",
        features: "Artisan bespoke Jindal Aluminium Roofing Sheets layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'roofing_tensile-ref-3',
        name: "Tensile Structure India Hub",
        url: "https://tensilestructuresindia.com",
        features: "Rapid high-volume Tensile Structure India Hub layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'waterproofing',
    categoryName: "Terrace Waterproofing & Epoxy Injection",
    group: "Services & Trades",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "No-break terrace waterproofing with 10-year warranty, polyurethane crack injection",
    references: [
      {
        id: 'waterproofing-ref-1',
        name: "Dr. Fixit Pidilite Waterproofing",
        url: "https://drfixit.co.in",
        features: "Flagship Dr. Fixit Pidilite Waterproofing design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'waterproofing-ref-2',
        name: "Fosroc Construction Chemicals",
        url: "https://fosroc.com",
        features: "Artisan bespoke Fosroc Construction Chemicals layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'waterproofing-ref-3',
        name: "Roff Tile Adhesives & Waterproofing",
        url: "https://roff.in",
        features: "Rapid high-volume Roff Tile Adhesives & Waterproofing layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'deep_cleaning',
    categoryName: "Residential Deep Cleaning & Sanitization",
    group: "Services & Trades",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Single-disc machine scrubbing, vacuum sofa shampooing, bathroom descaling treatment",
    references: [
      {
        id: 'deep_cleaning-ref-1',
        name: "Urban Company Full Home Cleaning",
        url: "https://urbancompany.com",
        features: "Flagship Urban Company Full Home Cleaning design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'deep_cleaning-ref-2',
        name: "Hicare Home Sanitization Experts",
        url: "https://hicare.in",
        features: "Artisan bespoke Hicare Home Sanitization Experts layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'deep_cleaning-ref-3',
        name: "Bro4u Home Deep Cleaning",
        url: "https://bro4u.com",
        features: "Rapid high-volume Bro4u Home Deep Cleaning layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'domestic_help_agency',
    categoryName: "Maid, Cook & Baby Care Bureau",
    group: "Services & Trades",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Police background verification documents, 3 free maid replacements guarantee",
    references: [
      {
        id: 'domestic_help_agency-ref-1',
        name: "BookMyBai Verified Domestic Help",
        url: "https://bookmybai.com",
        features: "Flagship BookMyBai Verified Domestic Help design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'domestic_help_agency-ref-2',
        name: "Broomees Trusted Home Helpers",
        url: "https://broomees.com",
        features: "Artisan bespoke Broomees Trusted Home Helpers layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'domestic_help_agency-ref-3',
        name: "Helper4U Direct Sourcing",
        url: "https://helper4u.in",
        features: "Rapid high-volume Helper4U Direct Sourcing layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'scrap_recycling',
    categoryName: "Industrial Scrap & Metal Recycling",
    group: "Industrial & B2B",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Digital weighing scale at doorstep, live copper/brass/paper scrap rate chart per kg",
    references: [
      {
        id: 'scrap_recycling-ref-1',
        name: "Metso Outotec Metal Recycling",
        url: "https://mogroup.com",
        features: "Flagship Metso Outotec Metal Recycling design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'scrap_recycling-ref-2',
        name: "Kabadiwalla Connect Waste Hub",
        url: "https://kabadiwallaconnect.in",
        features: "Artisan bespoke Kabadiwalla Connect Waste Hub layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'scrap_recycling-ref-3',
        name: "The Kabadiwala Online Scrap Pickup",
        url: "https://thekabadiwala.com",
        features: "Rapid high-volume The Kabadiwala Online Scrap Pickup layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'generator_rental',
    categoryName: "Silent Diesel Generator (DG) Rental",
    group: "Industrial & B2B",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "15 kVA to 500 kVA acoustic silent canopy DG sets, fuel supply & operator included",
    references: [
      {
        id: 'generator_rental-ref-1',
        name: "Cummins India Power Generation",
        url: "https://cummins.com",
        features: "Flagship Cummins India Power Generation design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'generator_rental-ref-2',
        name: "Kirloskar Oil Engines KOEL Green",
        url: "https://kirloskaroilengines.com",
        features: "Artisan bespoke Kirloskar Oil Engines KOEL Green layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'generator_rental-ref-3',
        name: "Sudhir Power Rental Generators",
        url: "https://sudhirpower.com",
        features: "Rapid high-volume Sudhir Power Rental Generators layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'borewell_drilling',
    categoryName: "Borewell Drilling & Submersible Pumps",
    group: "Services & Trades",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "High pressure sensor drilling rigs (up to 1200 ft), water vein ground scanning",
    references: [
      {
        id: 'borewell_drilling-ref-1',
        name: "CRI Pumps Agricultural & Home",
        url: "https://crigroups.com",
        features: "Flagship CRI Pumps Agricultural & Home design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'borewell_drilling-ref-2',
        name: "Kirloskar Brothers Submersible",
        url: "https://kirloskarpumps.com",
        features: "Artisan bespoke Kirloskar Brothers Submersible layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'borewell_drilling-ref-3',
        name: "Texmo Taro Submersible Borewell",
        url: "https://taropumps.com",
        features: "Rapid high-volume Texmo Taro Submersible Borewell layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'crane_rental',
    categoryName: "Hydraulic Mobile Crane & JCB Earthmover",
    group: "Industrial & B2B",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Hourly & monthly equipment rental, certified crane operators, 10-ton to 100-ton capacity",
    references: [
      {
        id: 'crane_rental-ref-1',
        name: "ACE Action Construction Equipment",
        url: "https://ace-cranes.com",
        features: "Flagship ACE Action Construction Equipment design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'crane_rental-ref-2',
        name: "JCB India Construction Machines",
        url: "https://jcb.com",
        features: "Artisan bespoke JCB India Construction Machines layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'crane_rental-ref-3',
        name: "Escorts Construction Cranes",
        url: "https://escortsgroup.com",
        features: "Rapid high-volume Escorts Construction Cranes layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'commercial_refrigeration',
    categoryName: "Commercial Kitchen & Cold Room Equipment",
    group: "Industrial & B2B",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Visicooler showcase refrigerators, stainless steel deep freezers, saladette counters",
    references: [
      {
        id: 'commercial_refrigeration-ref-1',
        name: "Blue Star Commercial Refrigeration",
        url: "https://bluestarindia.com",
        features: "Flagship Blue Star Commercial Refrigeration design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'commercial_refrigeration-ref-2',
        name: "Voltas Commercial Coolers",
        url: "https://myvoltas.com",
        features: "Artisan bespoke Voltas Commercial Coolers layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'commercial_refrigeration-ref-3',
        name: "Western Refrigeration Coolers",
        url: "https://western-equipments.com",
        features: "Rapid high-volume Western Refrigeration Coolers layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'industrial_uniforms',
    categoryName: "Corporate Uniforms & Safety Workwear",
    group: "Industrial & B2B",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Flame-retardant industrial coveralls, high-visibility reflector vests, company logo embroidery",
    references: [
      {
        id: 'industrial_uniforms-ref-1',
        name: "Karam Safety PPE & Workwear",
        url: "https://karam.in",
        features: "Flagship Karam Safety PPE & Workwear design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'industrial_uniforms-ref-2',
        name: "Uniform Junction School & Work",
        url: "https://uniformjunction.com",
        features: "Artisan bespoke Uniform Junction School & Work layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'industrial_uniforms-ref-3',
        name: "Atlas Uniforms Industrial Apparel",
        url: "https://atlasuniforms.com",
        features: "Rapid high-volume Atlas Uniforms Industrial Apparel layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'rubber_stamps',
    categoryName: "Laser Rubber Stamps & Metal Nameplates",
    group: "Services & Trades",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Computerized self-inking flash stamps (15-min pickup), laser engraved brass nameplates",
    references: [
      {
        id: 'rubber_stamps-ref-1',
        name: "Trodat Stamps India Official",
        url: "https://trodat.in",
        features: "Flagship Trodat Stamps India Official design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'rubber_stamps-ref-2',
        name: "Colop Self Inking Stamps",
        url: "https://colop.com",
        features: "Artisan bespoke Colop Self Inking Stamps layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'rubber_stamps-ref-3',
        name: "Stampit Instant Rubber Stamps",
        url: "https://stampit.in",
        features: "Rapid high-volume Stampit Instant Rubber Stamps layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'sound_production',
    categoryName: "Audio Recording & Voiceover Studio",
    group: "Specialized & Modern",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Acoustically isolated vocal booth, Neumann U87 microphones, Dolby Atmos 7.1.4 mixing",
    references: [
      {
        id: 'sound_production-ref-1',
        name: "YRF Studios Audio Recording",
        url: "https://yashrajfilms.com",
        features: "Flagship YRF Studios Audio Recording design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'sound_production-ref-2',
        name: "T-Series Audio Mixing Lab",
        url: "https://tseries.com",
        features: "Artisan bespoke T-Series Audio Mixing Lab layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'sound_production-ref-3',
        name: "Island City Studios Mumbai",
        url: "https://islandcitystudios.com",
        features: "Rapid high-volume Island City Studios Mumbai layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'digital_marketing',
    categoryName: "Digital Marketing, Meta & Google Ads Agency",
    group: "Professional Services",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "High ROI performance ad campaigns, SEO ranking audits, viral short-form video production",
    references: [
      {
        id: 'digital_marketing-ref-1',
        name: "Schbang Integrated Solutions",
        url: "https://schbang.com",
        features: "Flagship Schbang Integrated Solutions design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'digital_marketing-ref-2',
        name: "Dentsu Webchutney Digital",
        url: "https://dentsu.com",
        features: "Artisan bespoke Dentsu Webchutney Digital layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'digital_marketing-ref-3',
        name: "FoxyMoron Digital Creative Agency",
        url: "https://foxymoron.in",
        features: "Rapid high-volume FoxyMoron Digital Creative Agency layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'matrimonial_matchmaking',
    categoryName: "Premium Matrimonial & Matchmaking Bureau",
    group: "Professional Services",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Background verified horoscope verified profiles, personalized relationship managers",
    references: [
      {
        id: 'matrimonial_matchmaking-ref-1',
        name: "Shaadi.com Verified Matchmaking",
        url: "https://shaadi.com",
        features: "Flagship Shaadi.com Verified Matchmaking design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'matrimonial_matchmaking-ref-2',
        name: "BharatMatrimony Elite Service",
        url: "https://bharatmatrimony.com",
        features: "Artisan bespoke BharatMatrimony Elite Service layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'matrimonial_matchmaking-ref-3',
        name: "Vows for Eternity Global Bespoke",
        url: "https://vowsforeternity.com",
        features: "Rapid high-volume Vows for Eternity Global Bespoke layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'coliving_pg',
    categoryName: "Luxury Co-Living & Executive PG",
    group: "Specialized & Modern",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Fully furnished private rooms with Wi-Fi, daily housekeeping, 3-time chef meals, zero brokerage",
    references: [
      {
        id: 'coliving_pg-ref-1',
        name: "Stanza Living Student & Pro",
        url: "https://stanzaliving.com",
        features: "Flagship Stanza Living Student & Pro design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'coliving_pg-ref-2',
        name: "Zolo Stays Co-living Spaces",
        url: "https://zolostays.com",
        features: "Artisan bespoke Zolo Stays Co-living Spaces layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'coliving_pg-ref-3',
        name: "HelloWorld Co-living Hub",
        url: "https://helloworld.co.in",
        features: "Rapid high-volume HelloWorld Co-living Hub layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
  {
    id: 'study_abroad_consultancy',
    categoryName: "Study Abroad & Global Visa Consultancy",
    group: "Education & Coaching",
    industry: "Indian Commerce & Industry",
    featuresToStudy: "Free profile evaluation, university shortlist for US/UK/Canada, visa interview mock trials",
    references: [
      {
        id: 'study_abroad_consultancy-ref-1',
        name: "IDP Education IELTS & Universities",
        url: "https://idp.com",
        features: "Flagship IDP Education IELTS & Universities design layout",
        designSignature: {
          palette: { baseBg: '#0f172a', surfaceBg: '#ffffff', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
          typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
          layoutArchetype: 'clean-catalog',
          heroArchetype: 'split-form',
          navStyle: 'solid-compact',
          catalogStyle: 'grid-cards',
          bookingStyle: 'whatsapp_order',
          vibeTag: "Industry Leader"
        }
      },
      {
        id: 'study_abroad_consultancy-ref-2',
        name: "Leverage Edu Study Abroad Portal",
        url: "https://leverageedu.com",
        features: "Artisan bespoke Leverage Edu Study Abroad Portal layout",
        designSignature: {
          palette: { baseBg: '#18181b', surfaceBg: '#fdfbf7', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#d97706', secondaryAccent: '#0ea5e9' },
          typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
          layoutArchetype: 'artisan-warm',
          heroArchetype: 'cinematic-overlay',
          navStyle: 'floating-glass',
          catalogStyle: 'visual-cards',
          bookingStyle: 'appointment_slot',
          vibeTag: "Artisanal Studio"
        }
      },
      {
        id: 'study_abroad_consultancy-ref-3',
        name: "Yocket Study Abroad Community",
        url: "https://yocket.com",
        features: "Rapid high-volume Yocket Study Abroad Community layout",
        designSignature: {
          palette: { baseBg: '#111827', surfaceBg: '#f8fafc', textColor: '#ffffff', bodyTextColor: '#27272a', accentColor: '#ef4444', secondaryAccent: '#f59e0b' },
          typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
          layoutArchetype: 'dense-commercial',
          heroArchetype: 'product-showcase',
          navStyle: 'action-heavy',
          catalogStyle: 'dense-table',
          bookingStyle: 'whatsapp_order',
          vibeTag: "High Volume Direct"
        }
      }
    ]
  },
];

export const getCategoryReferences = (categoryId: string): CategoryReferenceItem | undefined => {
  if (!categoryId) return undefined;
  const clean = categoryId.toLowerCase().trim().replace(/[-_]/g, ' ');
  const cleanId = categoryId.toLowerCase().trim().replace(/\s+/g, '_');
  
  const direct = CATEGORIES_130_DATA.find(c => c.id === categoryId || c.id === cleanId);
  if (direct) return direct;

  const byName = CATEGORIES_130_DATA.find(c => c.categoryName.toLowerCase() === clean);
  if (byName) return byName;

  const partial = CATEGORIES_130_DATA.find(c => 
    c.id.toLowerCase().includes(cleanId) ||
    cleanId.includes(c.id.toLowerCase()) ||
    c.categoryName.toLowerCase().includes(clean) ||
    clean.includes(c.categoryName.toLowerCase())
  );
  return partial || CATEGORIES_130_DATA[0];
};

export const getReferenceSiteById = (refId: string): { reference: ReferenceSite; category: CategoryReferenceItem } | undefined => {
  for (const cat of CATEGORIES_130_DATA) {
    const found = cat.references.find(r => r.id === refId);
    if (found) {
      return { reference: found, category: cat };
    }
  }
  return undefined;
};

export const parseReferenceCsv = (csvText: string): CategoryReferenceItem[] => {
  const lines = csvText.split(/\r?\n/).filter(l => l.trim().length > 0);
  if (lines.length < 2) return [];

  const parseLine = (text: string): string[] => {
    const result = [];
    let cur = '';
    let inQuotes = false;
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        result.push(cur.trim());
        cur = '';
      } else {
        cur += char;
      }
    }
    result.push(cur.trim());
    return result;
  };

  const headers = parseLine(lines[0]).map(h => h.toLowerCase().replace(/[^a-z0-9]/g, ''));
  const catIdx = headers.findIndex(h => h.includes('category') || h.includes('business'));
  const ref1NameIdx = headers.findIndex(h => h.includes('reference1') && (h.includes('name') || !h.includes('url')));
  const ref1UrlIdx = headers.findIndex(h => h.includes('reference1') && h.includes('url'));
  const ref2NameIdx = headers.findIndex(h => h.includes('reference2') && (h.includes('name') || !h.includes('url')));
  const ref2UrlIdx = headers.findIndex(h => h.includes('reference2') && h.includes('url'));
  const ref3NameIdx = headers.findIndex(h => h.includes('reference3') && (h.includes('name') || !h.includes('url')));
  const ref3UrlIdx = headers.findIndex(h => h.includes('reference3') && h.includes('url'));
  const featuresIdx = headers.findIndex(h => h.includes('feature') || h.includes('study'));

  const parsedItems: CategoryReferenceItem[] = [];

  for (let i = 1; i < lines.length; i++) {
    const cols = parseLine(lines[i]);
    if (cols.length === 0 || !cols[0]) continue;

    const rawCategoryName = (catIdx >= 0 ? cols[catIdx] : cols[0]) || `Category ${i}`;
    const slug = rawCategoryName.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/(^_|_$)/g, '');

    const ref1Name = (ref1NameIdx >= 0 ? cols[ref1NameIdx] : cols[1]) || `${rawCategoryName} Ref 1`;
    const ref1Url = (ref1UrlIdx >= 0 ? cols[ref1UrlIdx] : cols[2]) || `https://${slug}-ref1.com`;
    const ref2Name = (ref2NameIdx >= 0 ? cols[ref2NameIdx] : cols[3]) || `${rawCategoryName} Ref 2`;
    const ref2Url = (ref2UrlIdx >= 0 ? cols[ref2UrlIdx] : cols[4]) || `https://${slug}-ref2.com`;
    const ref3Name = (ref3NameIdx >= 0 ? cols[ref3NameIdx] : cols[5]) || `${rawCategoryName} Ref 3`;
    const ref3Url = (ref3UrlIdx >= 0 ? cols[ref3UrlIdx] : cols[6]) || `https://${slug}-ref3.com`;
    const features = (featuresIdx >= 0 ? cols[featuresIdx] : cols[7]) || 'Distinct visual header, conversion booking flow, pricing matrix';

    const existing = CATEGORIES_130_DATA.find(c => c.id === slug || c.categoryName.toLowerCase() === rawCategoryName.toLowerCase());

    const item: CategoryReferenceItem = {
      id: slug,
      categoryName: rawCategoryName,
      group: existing?.group || 'Indian Commerce & Services',
      industry: existing?.industry || rawCategoryName,
      featuresToStudy: features,
      references: [
        {
          id: `${slug}-ref-1`,
          name: ref1Name,
          url: ref1Url.startsWith('http') ? ref1Url : `https://${ref1Url}`,
          features: existing?.references[0]?.features || 'Flagship reference design layout with premium lead capture',
          designSignature: existing?.references[0]?.designSignature || {
            palette: { baseBg: '#1e293b', surfaceBg: '#ffffff', textColor: '#f8fafc', bodyTextColor: '#0f172a', accentColor: '#2563eb', secondaryAccent: '#10b981' },
            typography: { headlineFont: 'Plus Jakarta Sans, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Plus Jakarta Sans + Inter' },
            layoutArchetype: 'clean-catalog',
            heroArchetype: 'split-form',
            navStyle: 'solid-compact',
            catalogStyle: 'grid-cards',
            bookingStyle: 'whatsapp_order',
            vibeTag: 'Industry Flagship'
          }
        },
        {
          id: `${slug}-ref-2`,
          name: ref2Name,
          url: ref2Url.startsWith('http') ? ref2Url : `https://${ref2Url}`,
          features: existing?.references[1]?.features || 'Alternative boutique high-end signature styling',
          designSignature: existing?.references[1]?.designSignature || {
            palette: { baseBg: '#14162b', surfaceBg: '#fefaf6', textColor: '#ffffff', bodyTextColor: '#2b2d2f', accentColor: '#d97706', secondaryAccent: '#4f46e5' },
            typography: { headlineFont: 'Fraunces, Georgia, serif', bodyFont: 'DM Sans, sans-serif', fontPairingLabel: 'Fraunces + DM Sans' },
            layoutArchetype: 'artisan-warm',
            heroArchetype: 'cinematic-overlay',
            navStyle: 'floating-glass',
            catalogStyle: 'visual-cards',
            bookingStyle: 'appointment_slot',
            vibeTag: 'Artisanal Boutique'
          }
        },
        {
          id: `${slug}-ref-3`,
          name: ref3Name,
          url: ref3Url.startsWith('http') ? ref3Url : `https://${ref3Url}`,
          features: existing?.references[2]?.features || 'High-volume commercial rapid-conversion catalog',
          designSignature: existing?.references[2]?.designSignature || {
            palette: { baseBg: '#090d16', surfaceBg: '#131b2e', textColor: '#f8fafc', bodyTextColor: '#cbd5e1', accentColor: '#f97316', secondaryAccent: '#3b82f6' },
            typography: { headlineFont: 'Space Grotesk, sans-serif', bodyFont: 'Inter, sans-serif', fontPairingLabel: 'Space Grotesk + Inter' },
            layoutArchetype: 'bold-editorial',
            heroArchetype: 'product-showcase',
            navStyle: 'action-heavy',
            catalogStyle: 'dense-table',
            bookingStyle: 'whatsapp_order',
            vibeTag: 'High Velocity'
          }
        }
      ]
    };
    parsedItems.push(item);
  }

  return parsedItems;
};

export const exportReferenceCsv = (items: CategoryReferenceItem[]): string => {
  const headers = [
    'Category',
    'Industry Group',
    'Features to Study',
    'Reference 1 Name',
    'Reference 1 URL',
    'Reference 2 Name',
    'Reference 2 URL',
    'Reference 3 Name',
    'Reference 3 URL'
  ];

  const escapeCol = (val: string): string => {
    if (val.includes(',') || val.includes('"') || val.includes('\n')) {
      return `"${val.replace(/"/g, '""')}"`;
    }
    return val;
  };

  const rows = items.map(item => [
    escapeCol(item.categoryName),
    escapeCol(item.group),
    escapeCol(item.featuresToStudy),
    escapeCol(item.references[0]?.name || ''),
    escapeCol(item.references[0]?.url || ''),
    escapeCol(item.references[1]?.name || ''),
    escapeCol(item.references[1]?.url || ''),
    escapeCol(item.references[2]?.name || ''),
    escapeCol(item.references[2]?.url || '')
  ].join(','));

  return [headers.join(','), ...rows].join('\n');
};
