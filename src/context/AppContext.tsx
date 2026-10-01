import React, { createContext, useContext, useState, useEffect } from 'react';
import { BusinessWebsite, LeadEnquiry, PricingPlan, DiscountLead, WebsiteRequest } from '../types';
import { DEFAULT_WEBSITES, DEFAULT_PRICING_PLANS, INITIAL_LEADS } from '../data/defaultSites';

export type AppView =
  | 'home'
  | 'admin'
  | 'site'
  | 'builder'
  | 'dashboard'
  | 'wizard'
  | 'editor'
  | 'demo-websites'
  | 'pricing'
  | 'case-studies'
  | 'testimonials'
  | 'blog'
  | 'refer-and-earn'
  | 'faq'
  | 'contact'
  | 'city'
  | 'properties'
  | 'sweet-coffee'
  | 'brew-bloom'
  | 'tim-wendelboe'
  | 'onyx'
  | 'city-brew'
  | 'gregorys'
  | 'veena-world'
  | 'enrich'
  | 'bodycraft'
  | 'home-salon'
  | 'dessange-mumbai'
  | 'tanishq'
  | 'jewelbox'
  | 'beauty-berry'
  | 'golds-gym'
  | 'fitpass'
  | 'krishna-jewellers'
  | 'hazoorilal-jewellers';

import { TWOD_WEBSITE } from '../data/twoDCafeData';
import { BLUE_TOKAI_WEBSITE } from '../data/blueTokaiData';
import { THIRD_WAVE_WEBSITE } from '../data/thirdWaveCoffeeData';
import { CCD_WEBSITE } from '../data/cafeCoffeeDayData';
import { SWEET_COFFEE_WEBSITE } from '../data/sweetCoffeeData';
import { TIM_WENDELBOE_WEBSITE } from '../data/timWendelboeData';
import { ONYX_WEBSITE } from '../data/onyxCoffeeData';
import { CITY_BREW_WEBSITE } from '../data/cityBrewData';
import { GREGORYS_WEBSITE } from '../data/gregorysCoffeeData';
import { RUBYS_WEBSITE } from '../data/rubysCafeData';
import { BREWED_WEBSITE } from '../data/brewedCoffeeData';
import { GREENBERRYS_WEBSITE } from '../data/greenberrysData';
import { MEAN_MUG_WEBSITE } from '../data/meanMugCoffeeData';
import { REVIVAL_WEBSITE } from '../data/revivalCafeData';
import { BREW_BLOOM_WEBSITE } from '../data/brewBloomData';
import { AMERICAN_PROVISIONS_WEBSITE } from '../data/americanProvisionsData';
import { MOJO_WEBSITE } from '../data/mojoCoffeeData';
import { SWEETWATERS_WEBSITE } from '../data/sweetwatersData';
import { BENNE_WEBSITE } from '../data/benneData';
import { BARBEQUE_NATION_WEBSITE } from '../data/barbequeNationData';
import { NANDOS_WEBSITE } from '../data/nandosData';
import { MAINLAND_CHINA_WEBSITE } from '../data/mainlandChinaData';
import { OH_CALCUTTA_WEBSITE } from '../data/ohCalcuttaData';
import { PUNJAB_GRILL_WEBSITE } from '../data/punjabGrillData';
import { BIKANERVALA_WEBSITE } from '../data/bikanervalaData';
import { SAGAR_RATNA_WEBSITE } from '../data/sagarRatnaData';
import { KARIMS_WEBSITE } from '../data/karimsData';
import { AL_BAIK_WEBSITE } from '../data/alBaikData';
import { MR_IDLI_WEBSITE } from '../data/mrIdliData';
import { DREAM_TRAVELS_WEBSITE } from '../data/dreamToTravelsData';
import { SOUTHERN_TRAVELS_WEBSITE } from '../data/southernTravelsData';
import { SRM_HOLIDAYS_WEBSITE } from '../data/srmHolidaysData';
import { ITDC_TRAVELS_WEBSITE } from '../data/itdcTravelsData';
import { TRAVEL_ART_WEBSITE } from '../data/travelArtData';
import { BRIO_TRAVELS_WEBSITE } from '../data/brioTravelsWebsite';
import { TOUR_TRAVEL_2_WEBSITE } from '../data/tourTravel2Website';
import { BODYCRAFT_WEBSITE } from '../data/bodycraftData';
import { HOME_SALON_WEBSITE } from '../data/homeSalonData';
import { DESSANGE_MUMBAI_WEBSITE } from '../data/dessangeData';
import { TANISHQ_WEBSITE } from '../data/tanishqData';
import { JEWELBOX_WEBSITE } from '../data/jewelboxData';
import { BEAUTY_BERRY_WEBSITE } from '../data/beautyBerryData';
import { GOLDS_GYM_WEBSITE } from '../data/goldsGymData';
import { FITPASS_WEBSITE } from '../data/fitpassData';
import { KRISHNA_JEWELLERS_WEBSITE } from '../data/krishnaJewellersData';
import { HAZOORILAL_WEBSITE } from '../data/hazoorilalData';

export const ALL_CAFE_WEBSITES: BusinessWebsite[] = [
  TWOD_WEBSITE,
  BLUE_TOKAI_WEBSITE,
  THIRD_WAVE_WEBSITE,
  CCD_WEBSITE,
  SWEET_COFFEE_WEBSITE,
  TIM_WENDELBOE_WEBSITE,
  ONYX_WEBSITE,
  CITY_BREW_WEBSITE,
  GREGORYS_WEBSITE,
  RUBYS_WEBSITE,
  BREWED_WEBSITE,
  GREENBERRYS_WEBSITE,
  MEAN_MUG_WEBSITE,
  REVIVAL_WEBSITE,
  BREW_BLOOM_WEBSITE,
  AMERICAN_PROVISIONS_WEBSITE,
  MOJO_WEBSITE,
  SWEETWATERS_WEBSITE,
  BENNE_WEBSITE
];

export const ALL_RESTAURANT_WEBSITES: BusinessWebsite[] = [
  BARBEQUE_NATION_WEBSITE,
  NANDOS_WEBSITE,
  MAINLAND_CHINA_WEBSITE,
  OH_CALCUTTA_WEBSITE,
  PUNJAB_GRILL_WEBSITE,
  BIKANERVALA_WEBSITE,
  SAGAR_RATNA_WEBSITE,
  KARIMS_WEBSITE,
  AL_BAIK_WEBSITE,
  MR_IDLI_WEBSITE
];

export const ALL_TRAVEL_WEBSITES: BusinessWebsite[] = [
  TOUR_TRAVEL_2_WEBSITE,
  BRIO_TRAVELS_WEBSITE,
  DREAM_TRAVELS_WEBSITE,
  SOUTHERN_TRAVELS_WEBSITE,
  SRM_HOLIDAYS_WEBSITE,
  ITDC_TRAVELS_WEBSITE,
  TRAVEL_ART_WEBSITE
];

export const ALL_SALON_WEBSITES: BusinessWebsite[] = [
  BODYCRAFT_WEBSITE,
  HOME_SALON_WEBSITE,
  DESSANGE_MUMBAI_WEBSITE
];

export const ALL_JEWELLERY_WEBSITES: BusinessWebsite[] = [
  TANISHQ_WEBSITE,
  JEWELBOX_WEBSITE,
  KRISHNA_JEWELLERS_WEBSITE,
  HAZOORILAL_WEBSITE
];

export const ALL_BEAUTY_COSMETICS_WEBSITES: BusinessWebsite[] = [
  BEAUTY_BERRY_WEBSITE
];

export const ALL_GYM_FITNESS_WEBSITES: BusinessWebsite[] = [
  GOLDS_GYM_WEBSITE,
  FITPASS_WEBSITE
];

export const ALL_46_COLLECTION_WEBSITES: BusinessWebsite[] = [
  ...ALL_CAFE_WEBSITES,
  ...ALL_RESTAURANT_WEBSITES,
  ...ALL_TRAVEL_WEBSITES,
  ...ALL_SALON_WEBSITES,
  ...ALL_JEWELLERY_WEBSITES,
  ...ALL_BEAUTY_COSMETICS_WEBSITES,
  ...ALL_GYM_FITNESS_WEBSITES
];

export const ALL_45_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_46_COLLECTION_WEBSITES;

export const ALL_44_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_45_COLLECTION_WEBSITES;

export const ALL_43_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_44_COLLECTION_WEBSITES;
export const ALL_42_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_44_COLLECTION_WEBSITES;
export const ALL_41_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_44_COLLECTION_WEBSITES;
export const ALL_40_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_44_COLLECTION_WEBSITES;

export const ALL_39_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_40_COLLECTION_WEBSITES;
export const ALL_38_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_40_COLLECTION_WEBSITES;
export const ALL_37_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_40_COLLECTION_WEBSITES;
export const ALL_36_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_40_COLLECTION_WEBSITES;
export const ALL_34_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_40_COLLECTION_WEBSITES;
export const ALL_30_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_40_COLLECTION_WEBSITES;
export const ALL_29_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_40_COLLECTION_WEBSITES;

export const ALL_15_REFERENCE_WEBSITES: BusinessWebsite[] = ALL_CAFE_WEBSITES.slice(0, 15);
import { CATEGORY_INFO } from '../data/templateDefs';
import {
  CATEGORIES_130_DATA,
  CategoryReferenceItem,
  ReferenceSite,
  parseReferenceCsv,
  exportReferenceCsv,
  getCategoryReferences
} from '../data/categories130Data';
import {
  auth,
  db,
  googleProvider,
  handleFirestoreError,
  OperationType
} from '../firebase';
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import {
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  deleteDoc,
  onSnapshot,
  query,
  where
} from 'firebase/firestore';
import {
  initializeFirestoreCollections,
  DEFAULT_USER_SETTINGS,
  FirestoreInitStatus
} from '../services/firestoreInit';

export const normalizeBusinessSite = (site?: Partial<BusinessWebsite> | null): BusinessWebsite => {
  const safeSite = (site && typeof site === 'object') ? site : {};
  const category = (safeSite.category || 'cafe') as BusinessWebsite['category'];
  const catMeta = (CATEGORY_INFO && CATEGORY_INFO[category]) ? CATEGORY_INFO[category] : (CATEGORY_INFO?.cafe || {
    id: 'cafe',
    name: 'Cafe & Restaurant',
    icon: 'Utensils',
    description: 'Food & beverage',
    defaultBooking: 'table_reservation',
    defaultCta: 'Book a Table'
  });
  const defaultBooking = catMeta?.defaultBooking || 'general';
  const defaultCta = catMeta?.defaultCta || 'Enquire on WhatsApp';

  const rawAddress = typeof safeSite.address === 'string' && safeSite.address.trim() 
    ? safeSite.address.trim() 
    : 'Market Road, Local Area, India';
  let derivedCity = typeof safeSite.city === 'string' && safeSite.city.trim() ? safeSite.city.trim() : '';
  if (!derivedCity) {
    try {
      if (typeof rawAddress === 'string' && rawAddress.includes(',')) {
        const parts = rawAddress.split(',');
        derivedCity = (parts[parts.length - 2] || parts[0] || 'Local Area').trim();
      } else if (typeof rawAddress === 'string') {
        derivedCity = rawAddress.trim();
      }
    } catch {
      derivedCity = 'Local Area';
    }
  }

  return {
    id: safeSite.id || `site-${Date.now()}`,
    slug: safeSite.slug || 'business-site',
    businessName: safeSite.businessName || 'Business Website',
    category,
    templateId: safeSite.templateId || 'modern',
    tagline: safeSite.tagline || 'Quality Products & Services',
    description: safeSite.description || 'Welcome to our official business website.',
    ownerName: safeSite.ownerName || 'Business Owner',
    phone: safeSite.phone || '+91 98765 43210',
    whatsapp: safeSite.whatsapp || safeSite.phone || '+91 98765 43210',
    email: safeSite.email || 'hello@business.in',
    address: rawAddress,
    city: derivedCity || 'Local Area',
    mapsUrl: safeSite.mapsUrl || 'https://maps.google.com',
    openingHours: safeSite.openingHours || 'Mon - Sun: 9:00 AM – 9:00 PM',
    logoUrl: safeSite.logoUrl,
    coverUrl: safeSite.coverUrl,
    primaryColor: safeSite.primaryColor || '#4f46e5',
    secondaryColor: safeSite.secondaryColor || '#6366f1',
    fontFamily: safeSite.fontFamily || 'Plus Jakarta Sans',
    bookingType: safeSite.bookingType || defaultBooking,
    bookingCtaLabel: safeSite.bookingCtaLabel || defaultCta,
    specialBadge: safeSite.specialBadge,
    referenceSiteId: safeSite.referenceSiteId,
    referenceSiteName: safeSite.referenceSiteName,
    referenceSiteUrl: safeSite.referenceSiteUrl,
    referenceFeatures: safeSite.referenceFeatures,
    designSignature: safeSite.designSignature,
    status: safeSite.status || 'published',
    pricingPlanId: safeSite.pricingPlanId || 'professional',
    amountPaid: safeSite.amountPaid ?? 1499,
    paymentStatus: safeSite.paymentStatus || 'paid',
    createdAt: safeSite.createdAt || new Date().toISOString(),
    updatedAt: safeSite.updatedAt || new Date().toISOString(),
    sections: Array.isArray(safeSite.sections) && safeSite.sections.length > 0 ? safeSite.sections : [
      { id: 'about', title: 'About Us', isEnabled: true, order: 1 },
      { id: 'offers', title: 'Special Offers', isEnabled: true, order: 2 },
      { id: 'menu', title: 'Products & Services', isEnabled: true, order: 3 },
      { id: 'gallery', title: 'Photo Gallery', isEnabled: true, order: 4 },
      { id: 'timings', title: 'Hours & Location', isEnabled: true, order: 5 },
      { id: 'contact', title: 'Booking & Enquiries', isEnabled: true, order: 6 },
    ],
    items: Array.isArray(safeSite.items) ? safeSite.items : [],
    offers: Array.isArray(safeSite.offers) ? safeSite.offers : [],
    gallery: Array.isArray(safeSite.gallery) ? safeSite.gallery : [],
  };
};

interface AppContextType {
  websites: BusinessWebsite[];
  pricingPlans: PricingPlan[];
  leads: LeadEnquiry[];
  userSettings: typeof DEFAULT_USER_SETTINGS;
  user: User | null;
  isAdminAuthenticated: boolean;
  isFirebaseConnected: boolean;
  activeView: AppView;
  activeSiteSlug: string | null;
  activeCitySlug: string;
  setActiveCitySlug: (city: string) => void;
  discountLeads: DiscountLead[];
  demoCategoryFilter: string | null;
  setDemoCategoryFilter: (cat: string | null) => void;
  referenceCategoryFilter: 'all' | 'cafes' | 'restaurants' | 'travel' | 'salon' | 'jewellery' | 'beauty_cosmetics' | 'gym_fitness';
  setReferenceCategoryFilter: (filter: 'all' | 'cafes' | 'restaurants' | 'travel' | 'salon' | 'jewellery' | 'beauty_cosmetics' | 'gym_fitness') => void;
  categoryPickerOpen: boolean;
  setCategoryPickerOpen: (open: boolean) => void;
  openCategoryPicker: () => void;
  builderEditSiteId: string | null;
  activeEditorSiteId: string | null;
  previewMode: 'desktop' | 'tablet' | 'mobile';
  setActiveView: (view: AppView, slug?: string | null) => void;
  setBuilderEditSiteId: (id: string | null) => void;
  setActiveEditorSiteId: (id: string | null) => void;
  setPreviewMode: (mode: 'desktop' | 'tablet' | 'mobile') => void;
  loginAdminWithGoogle: () => Promise<void>;
  loginDemoAdmin: () => void;
  logoutAdmin: () => Promise<void>;
  createWebsite: (site: BusinessWebsite) => Promise<void>;
  updateWebsite: (id: string, updates: Partial<BusinessWebsite>) => Promise<void>;
  deleteWebsite: (id: string) => Promise<void>;
  duplicateWebsite: (id: string) => Promise<void>;
  publishWebsite: (id: string) => Promise<void>;
  unpublishWebsite: (id: string) => Promise<void>;
  archiveWebsite: (id: string) => Promise<void>;
  submitLead: (lead: Omit<LeadEnquiry, 'id' | 'createdAt'>) => Promise<void>;
  updateLeadStatus: (id: string, status: LeadEnquiry['status']) => Promise<void>;
  updatePricingPlan: (plan: PricingPlan) => Promise<void>;
  updateUserSettings: (settings: Partial<typeof DEFAULT_USER_SETTINGS>) => Promise<void>;
  syncFirestore: (force?: boolean) => Promise<FirestoreInitStatus>;
  getWebsiteBySlug: (slug: string) => BusinessWebsite | undefined;
  categoryReferences: CategoryReferenceItem[];
  importReferencesFromCsv: (csvText: string) => { count: number; error?: string };
  updateCategoryReference: (catId: string, updates: Partial<CategoryReferenceItem>) => Promise<void>;
  resetReferencesToDefault: () => Promise<void>;
  getCategoryReference: (catId: string) => CategoryReferenceItem | undefined;
  revenueMetrics: {
    totalRevenue: number;
    monthlyRevenue: number;
    totalPaidWebsites: number;
    pendingRevenue: number;
  };
  websiteRequests: WebsiteRequest[];
  submitWebsiteRequest: (req: Omit<WebsiteRequest, 'id' | 'status' | 'createdAt'>) => Promise<WebsiteRequest>;
  updateWebsiteRequestStatus: (id: string, status: WebsiteRequest['status']) => Promise<void>;
  resetDemoCatalog: () => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY_SITES = 'raositez_websites_v2';
const LOCAL_STORAGE_KEY_LEADS = 'raositez_leads_v2';
const LOCAL_STORAGE_KEY_PLANS = 'raositez_plans_v2';
const LOCAL_STORAGE_KEY_DEMO_ADMIN = 'raositez_demo_admin';

const RESET_CATALOG_STORAGE_KEY = 'raositez_clean_slate_catalog_v5';

export const isLegacyDemoSite = (site: any): boolean => {
  if (!site) return true;
  const slug = String(site.slug || site.id || '').toLowerCase();
  if (slug.startsWith('demo-') || slug.startsWith('preview-') || slug.startsWith('legacy-') || slug.startsWith('sample-')) return true;
  const legacyDemoSlugs = [
    'the-roastery-cafe', 'openhouse-bistro-lounge', 'swagglam-salon-at-home',
    'apex-fitness-gym', 'city-pet-clinic', 'fresh-harvest-organic-retail',
    'sharma-sweet-corner', 'elite-bridal-studio', 'metro-dental-implant-clinic',
    'zenith-crossfit-mma', 'heritage-jewellers-silver', 'bright-minds-neet-academy'
  ];
  return legacyDemoSlugs.includes(slug);
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [websites, setWebsites] = useState<BusinessWebsite[]>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY_SITES);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const cleaned = parsed
            .filter((s: unknown): s is Partial<BusinessWebsite> => Boolean(s && typeof s === 'object' && !isLegacyDemoSite(s)))
            .map(s => normalizeBusinessSite(s));
          const canonical = [...ALL_46_COLLECTION_WEBSITES];
          const custom = cleaned.filter(s => !canonical.some(c => c.slug === s.slug || c.id === s.id));
          return [...canonical, ...custom];
        }
      }
    } catch (e) {
      console.warn('Could not parse stored websites', e);
    }
    return ALL_46_COLLECTION_WEBSITES;
  });

  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY_PLANS);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn('Could not parse stored plans', e);
    }
    return DEFAULT_PRICING_PLANS;
  });

  const [leads, setLeads] = useState<LeadEnquiry[]>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY_LEADS);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn('Could not parse stored leads', e);
    }
    return INITIAL_LEADS;
  });

  const [userSettings, setUserSettings] = useState<typeof DEFAULT_USER_SETTINGS>(() => {
    try {
      const stored = localStorage.getItem('raositez_settings_v2');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Could not parse stored settings', e);
    }
    return DEFAULT_USER_SETTINGS;
  });

  const [categoryReferences, setCategoryReferences] = useState<CategoryReferenceItem[]>(() => {
    try {
      const stored = localStorage.getItem('raositez_130_references_v1');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn('Could not parse stored references', e);
    }
    return CATEGORIES_130_DATA;
  });

  const [websiteRequests, setWebsiteRequests] = useState<WebsiteRequest[]>(() => {
    try {
      const stored = localStorage.getItem('raositez_website_requests_v1');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn('Could not parse stored website requests', e);
    }
    return [
      {
        id: 'wr-1',
        businessName: 'Shree Krishna Sweets & Snacks',
        category: 'sweets',
        ownerName: 'Gopal Krishna Agarwal',
        phone: '+91 98101 22334',
        city: 'Jaipur',
        notes: 'Need online pure ghee sweets catalog, gift hamper booking, and WhatsApp delivery button.',
        status: 'New',
        createdAt: new Date(Date.now() - 3600000 * 3).toISOString()
      },
      {
        id: 'wr-2',
        businessName: 'Apex Multi-Speciality Dental Clinic',
        category: 'clinic',
        ownerName: 'Dr. Vivek Sharma (BDS, MDS)',
        phone: '+91 98200 88990',
        city: 'Gurugram',
        notes: 'Doctors profile, OPD timings, treatment fee structure, patient appointment booking form.',
        status: 'New',
        createdAt: new Date(Date.now() - 3600000 * 8).toISOString()
      }
    ];
  });

  const [user, setUser] = useState<User | null>(null);
  const [demoAdmin, setDemoAdmin] = useState<boolean>(() => {
    return localStorage.getItem(LOCAL_STORAGE_KEY_DEMO_ADMIN) === 'true';
  });
  const [isFirebaseConnected, setIsFirebaseConnected] = useState<boolean>(false);

  // App routing state
  const [activeView, setActiveViewInternal] = useState<AppView>('home');
  const [activeSiteSlug, setActiveSiteSlug] = useState<string | null>(null);
  const [activeCitySlug, setActiveCitySlug] = useState<string>('delhi');
  const [demoCategoryFilter, setDemoCategoryFilter] = useState<string | null>(null);
  const [referenceCategoryFilter, setReferenceCategoryFilter] = useState<'all' | 'cafes' | 'restaurants' | 'travel' | 'salon' | 'jewellery' | 'beauty_cosmetics' | 'gym_fitness'>('all');
  const [categoryPickerOpen, setCategoryPickerOpen] = useState<boolean>(false);
  const openCategoryPicker = () => setCategoryPickerOpen(true);
  const [builderEditSiteId, setBuilderEditSiteId] = useState<string | null>(null);
  const [activeEditorSiteId, setActiveEditorSiteId] = useState<string | null>(null);
  const [previewMode, setPreviewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const [discountLeads, setDiscountLeads] = useState<DiscountLead[]>(() => {
    try {
      const stored = localStorage.getItem('raositez_discount_leads_v1');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn('Could not parse stored discount leads', e);
    }
    return [
      {
        id: 'dl-1',
        name: 'Kunal Singhal',
        phone: '+91 98112 33445',
        couponCode: 'RAO15-9K2M',
        discountPercent: 15,
        status: 'new',
        expiresAt: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString(),
        createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
      },
      {
        id: 'dl-2',
        name: 'Dr. Pallavi Saxena',
        phone: '+91 98200 77112',
        couponCode: 'RAO15-4J7P',
        discountPercent: 15,
        status: 'contacted',
        expiresAt: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
      }
    ];
  });

  // Handle URL hash & path changes for direct deep linking
  useEffect(() => {
    const handleUrl = () => {
      let raw = window.location.hash.replace(/^#\/?/, '').trim();
      if (!raw && window.location.pathname && window.location.pathname !== '/') {
        raw = window.location.pathname.replace(/^\//, '').trim();
      }

      if (raw.startsWith('site/')) {
        const slug = raw.replace('site/', '');
        setActiveViewInternal('site');
        setActiveSiteSlug(slug);
      } else if (raw === 'admin' || raw.startsWith('admin/')) {
        setActiveViewInternal('admin');
      } else if (raw === 'dashboard' || raw.startsWith('dashboard/')) {
        setActiveViewInternal('dashboard');
      } else if (raw === 'wizard' || raw === 'create') {
        setActiveViewInternal('wizard');
      } else if (raw.startsWith('editor')) {
        const parts = raw.split('/');
        setActiveViewInternal('editor');
        if (parts[1]) setActiveEditorSiteId(parts[1]);
      } else if (raw === 'builder') {
        setActiveViewInternal('builder');
      } else if (raw === 'demo-websites' || raw === 'demos' || raw.startsWith('demo-websites/')) {
        const parts = raw.split('/');
        setActiveViewInternal('demo-websites');
        if (parts[1]) setDemoCategoryFilter(parts[1]);
      } else if (raw === 'pricing') {
        setActiveViewInternal('pricing');
      } else if (raw === 'case-studies') {
        setActiveViewInternal('case-studies');
      } else if (raw === 'testimonials') {
        setActiveViewInternal('testimonials');
      } else if (raw === 'blog' || raw.startsWith('blog/')) {
        setActiveViewInternal('blog');
      } else if (raw === 'refer-and-earn' || raw === 'refer') {
        setActiveViewInternal('refer-and-earn');
      } else if (raw === 'faq') {
        setActiveViewInternal('faq');
      } else if (raw === 'contact') {
        setActiveViewInternal('contact');
      } else if (raw === 'properties' || raw === 'real-estate') {
        setActiveViewInternal('properties');
      } else if (raw === 'sweet-coffee') {
        setActiveViewInternal('sweet-coffee');
        setActiveSiteSlug('sweet-coffee');
      } else if (raw.startsWith('references/')) {
        const refSlug = raw.replace(/^references\//, '').replace(/\/$/, '');
        setActiveViewInternal('site');
        const aliasMap: Record<string, string> = {
          '2d-cafe': '2d-cafe',
          'blue-tokai': 'blue-tokai',
          'third-wave': 'third-wave',
          'cafe-coffee-day': 'cafe-coffee-day',
          'koffee-hut': 'sweet-coffee',
          'tim-wendelboe': 'brew-bloom-tim-wendelboe',
          'onyx-coffee-lab': 'brew-bloom-onyx',
          'city-brew': 'brew-bloom-city-brew',
          'gregorys-coffee': 'brew-bloom-gregorys',
          'rubys-cafe': 'rubys-cafe',
          'brewed-coffee-shop': 'brewed-coffee-shop',
          'greenberrys': 'greenberrys',
          'mean-mug': 'mean-mug',
          'revival-cafe': 'revival-cafe',
          'subko': 'brew-bloom',
          'american-provisions': 'american-provisions',
          'mojo-coffee': 'mojo-coffee',
          'sweetwaters': 'sweetwaters',
          'sweetwaters-cafe': 'sweetwaters',
          'benne': 'benne',
          'barbeque-nation': 'barbeque-nation',
          'nandos': 'nandos',
          'nandos-india': 'nandos',
          'mainland-china': 'mainland-china',
          'oh-calcutta': 'oh-calcutta',
          'punjab-grill': 'punjab-grill',
          'bikanervala': 'bikanervala',
          'sagar-ratna': 'sagar-ratna',
          'karims': 'karims',
          'al-baik': 'al-baik',
          'mr-idli': 'mr-idli',
          'dream-travels': 'dream-travels',
          'dreamtotravels': 'dream-travels',
          'dream-to-travels': 'dream-travels',
          'tour-travel': 'dream-travels',
          'southern-travels': 'southern-travels',
          'southerntravels': 'southern-travels',
          'southerntravelsindia': 'southern-travels',
          'brandstore.aspx-new-delhi': 'southern-travels',
          'srm-holidays': 'srm-holidays',
          'srmholidays': 'srm-holidays',
          'itdc-travels': 'itdc-travels',
          'itdc': 'itdc-travels',
          'travels-tours': 'itdc-travels',
          'ashok-travels': 'itdc-travels',
          'travel-art': 'travel-art',
          'travelart': 'travel-art',
          'travelartcompany': 'travel-art',
          'brio-travels': 'brio-travels',
          'briotravels': 'brio-travels',
          'tour-travel-2': 'tour-travel-2',
          'tourtravel2': 'tour-travel-2',
          'bodycraft': 'bodycraft',
          'home-salon': 'home-salon',
          'dessange-mumbai': 'dessange-mumbai',
          'dessange': 'dessange-mumbai',
          'dessangemumbai': 'dessange-mumbai',
          'tanishq': 'tanishq',
          'jewelbox': 'jewelbox',
          'beauty-berry': 'beauty-berry',
          'beautyberry': 'beauty-berry',
          'golds-gym': 'golds-gym',
          'goldsgym': 'golds-gym',
          'fitpass': 'fitpass',
          'krishna-jewellers': 'krishna-jewellers',
          'krishnajewellers': 'krishna-jewellers',
          'hazoorilal-jewellers': 'hazoorilal-jewellers',
          'hazoorilal': 'hazoorilal-jewellers'
        };
        const targetSlug = aliasMap[refSlug] || refSlug;
        setActiveSiteSlug(targetSlug);
      } else if (raw.startsWith('demo/') || raw.startsWith('demos/')) {
        const demoSlug = raw.replace(/^(demo|demos)\//, '').replace(/^tour-travel\//, '').replace(/\/$/, '');
        setActiveViewInternal('site');
        const aliasMap: Record<string, string> = {
          'tour-travel-2': 'tour-travel-2',
          'tourtravel2': 'tour-travel-2',
          'brio-travels': 'brio-travels',
          'briotravels': 'brio-travels',
          'tour-travel': 'brio-travels',
          'southern-travels': 'southern-travels',
          'southerntravels': 'southern-travels',
          'srm-holidays': 'srm-holidays',
          'srmholidays': 'srm-holidays',
          'itdc-travels': 'itdc-travels',
          'itdc': 'itdc-travels',
          'travels-tours': 'itdc-travels',
          'ashok-travels': 'itdc-travels',
          'travel-art': 'travel-art',
          'travelart': 'travel-art',
          'travelartcompany': 'travel-art',
          'dream-travels': 'dream-travels',
          'bodycraft': 'bodycraft',
          'home-salon': 'home-salon',
          'dessange-mumbai': 'dessange-mumbai',
          'dessange': 'dessange-mumbai',
          'dessangemumbai': 'dessange-mumbai',
          'tanishq': 'tanishq',
          'jewelbox': 'jewelbox',
          'beauty-berry': 'beauty-berry',
          'beautyberry': 'beauty-berry',
          'golds-gym': 'golds-gym',
          'goldsgym': 'golds-gym',
          'fitpass': 'fitpass',
          'krishna-jewellers': 'krishna-jewellers',
          'krishnajewellers': 'krishna-jewellers',
          'hazoorilal-jewellers': 'hazoorilal-jewellers',
          'hazoorilal': 'hazoorilal-jewellers'
        };
        const targetSlug = aliasMap[demoSlug] || demoSlug;
        setActiveSiteSlug(targetSlug);
      } else if (raw === 'tour-travel-2' || raw.startsWith('tour-travel-2/') || raw === 'demos/tour-travel-2' || raw === 'demos/tour-travel-2/') {
        setActiveViewInternal('site');
        setActiveSiteSlug('tour-travel-2');
      } else if (raw === 'brio-travels' || raw.startsWith('brio-travels/') || raw === 'demos/tour-travel/brio-travels' || raw === 'demos/tour-travel') {
        setActiveViewInternal('site');
        setActiveSiteSlug('brio-travels');
      } else if (raw === 'brew-bloom' || raw.startsWith('brew-bloom/')) {
        setActiveViewInternal('brew-bloom');
        setActiveSiteSlug('brew-bloom');
      } else if (raw === 'tim-wendelboe' || raw === 'brew-bloom-tim-wendelboe') {
        setActiveViewInternal('tim-wendelboe');
        setActiveSiteSlug('brew-bloom-tim-wendelboe');
      } else if (raw === 'onyx' || raw === 'brew-bloom-onyx') {
        setActiveViewInternal('onyx');
        setActiveSiteSlug('brew-bloom-onyx');
      } else if (raw === 'city-brew' || raw === 'brew-bloom-city-brew') {
        setActiveViewInternal('city-brew');
        setActiveSiteSlug('brew-bloom-city-brew');
      } else if (raw === 'gregorys' || raw === 'brew-bloom-gregorys') {
        setActiveViewInternal('gregorys');
        setActiveSiteSlug('brew-bloom-gregorys');
      } else if (raw === 'veena-world' || raw === 'veenaworld') {
        setActiveViewInternal('veena-world');
      } else if (raw === 'enrich' || raw === 'enrich-beauty') {
        setActiveViewInternal('enrich');
      } else if (raw === 'bodycraft' || raw === 'bodycraft-salon' || raw === 'bodycraft-clinic' || raw === 'demo/bodycraft' || raw === 'demos/bodycraft' || raw === 'site/bodycraft' || raw === 'references/bodycraft') {
        setActiveViewInternal('bodycraft');
        setActiveSiteSlug('bodycraft');
      } else if (raw === 'home-salon' || raw === 'demo/home-salon' || raw === 'demos/home-salon' || raw === 'site/home-salon' || raw === 'references/home-salon') {
        setActiveViewInternal('home-salon');
        setActiveSiteSlug('home-salon');
      } else if (raw === 'dessange-mumbai' || raw === 'dessange' || raw === 'dessangemumbai' || raw === 'demo/dessange-mumbai' || raw === 'demos/dessange-mumbai' || raw === 'site/dessange-mumbai' || raw === 'references/dessange-mumbai') {
        setActiveViewInternal('dessange-mumbai');
        setActiveSiteSlug('dessange-mumbai');
      } else if (raw === 'tanishq' || raw === 'demo/tanishq' || raw === 'demos/tanishq' || raw === 'site/tanishq' || raw === 'references/tanishq' || raw === 'jewellery/tanishq') {
        setActiveViewInternal('tanishq');
        setActiveSiteSlug('tanishq');
      } else if (raw === 'jewelbox' || raw === 'demo/jewelbox' || raw === 'demos/jewelbox' || raw === 'site/jewelbox' || raw === 'references/jewelbox' || raw === 'jewellery/jewelbox') {
        setActiveViewInternal('jewelbox');
        setActiveSiteSlug('jewelbox');
      } else if (raw === 'beauty-berry' || raw === 'beautyberry' || raw === 'demo/beauty-berry' || raw === 'demos/beauty-berry' || raw === 'site/beauty-berry' || raw === 'references/beauty-berry' || raw === 'beauty-cosmetics/beauty-berry' || raw === 'cosmetics/beauty-berry') {
        setActiveViewInternal('beauty-berry');
        setActiveSiteSlug('beauty-berry');
      } else if (raw === 'golds-gym' || raw === 'goldsgym' || raw === 'demo/golds-gym' || raw === 'demos/golds-gym' || raw === 'site/golds-gym' || raw === 'references/golds-gym' || raw === 'gym/golds-gym') {
        setActiveViewInternal('golds-gym');
        setActiveSiteSlug('golds-gym');
      } else if (raw === 'fitpass' || raw === 'demo/fitpass' || raw === 'demos/fitpass' || raw === 'site/fitpass' || raw === 'references/fitpass' || raw === 'gym/fitpass') {
        setActiveViewInternal('fitpass');
        setActiveSiteSlug('fitpass');
      } else if (raw === 'krishna-jewellers' || raw === 'krishnajewellers' || raw === 'demo/krishna-jewellers' || raw === 'demos/krishna-jewellers' || raw === 'site/krishna-jewellers' || raw === 'references/krishna-jewellers' || raw === 'jewellery/krishna-jewellers') {
        setActiveViewInternal('krishna-jewellers');
        setActiveSiteSlug('krishna-jewellers');
      } else if (raw === 'hazoorilal-jewellers' || raw === 'hazoorilal' || raw === 'demo/hazoorilal-jewellers' || raw === 'demos/hazoorilal-jewellers' || raw === 'site/hazoorilal-jewellers' || raw === 'references/hazoorilal-jewellers' || raw === 'jewellery/hazoorilal-jewellers') {
        setActiveViewInternal('hazoorilal-jewellers');
        setActiveSiteSlug('hazoorilal-jewellers');
      } else if (raw.startsWith('for-')) {
        const city = raw.replace('for-', '').toLowerCase();
        setActiveViewInternal('city');
        setActiveCitySlug(city);
      } else if (raw.length > 0 && !raw.startsWith('!')) {
        // Direct business slug support: e.g. #/the-roastery-cafe
        const found = websites.find(w => w.slug === raw);
        if (found) {
          setActiveViewInternal('site');
          setActiveSiteSlug(raw);
        } else {
          setActiveViewInternal('home');
        }
      } else {
        setActiveViewInternal('home');
      }
    };

    handleUrl();
    window.addEventListener('hashchange', handleUrl);
    window.addEventListener('popstate', handleUrl);
    return () => {
      window.removeEventListener('hashchange', handleUrl);
      window.removeEventListener('popstate', handleUrl);
    };
  }, [websites]);

  const setActiveView = (
    view: AppView,
    slug?: string | null
  ) => {
    setActiveViewInternal(view);
    if (view === 'site' && slug) {
      setActiveSiteSlug(slug);
      window.location.hash = `/site/${slug}`;
    } else if (view === 'city') {
      const city = slug || activeCitySlug || 'delhi';
      setActiveCitySlug(city);
      window.location.hash = `/for-${city}`;
    } else if (view === 'admin') {
      window.location.hash = '/admin';
    } else if (view === 'dashboard') {
      window.location.hash = '/dashboard';
    } else if (view === 'wizard') {
      window.location.hash = '/wizard';
    } else if (view === 'editor') {
      window.location.hash = slug ? `/editor/${slug}` : '/editor';
    } else if (view === 'builder') {
      window.location.hash = '/builder';
    } else if (view === 'demo-websites') {
      setActiveSiteSlug(null);
      if (slug) {
        setDemoCategoryFilter(slug);
        window.location.hash = `/demo-websites/${slug}`;
      } else {
        window.location.hash = '/demo-websites';
      }
    } else if (view === 'home') {
      setActiveSiteSlug(null);
      window.location.hash = '/';
    } else {
      setActiveSiteSlug(null);
      window.location.hash = `/${view}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_SITES, JSON.stringify(websites));
  }, [websites]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_LEADS, JSON.stringify(leads));
  }, [leads]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_PLANS, JSON.stringify(pricingPlans));
  }, [pricingPlans]);

  useEffect(() => {
    localStorage.setItem('raositez_settings_v2', JSON.stringify(userSettings));
  }, [userSettings]);

  // Firebase Auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        setIsFirebaseConnected(true);
      }
    });
    return () => unsubscribe();
  }, []);

  // Initialize and load collections from Firestore
  useEffect(() => {
    let isMounted = true;
    async function initAndLoadFirestore() {
      try {
        // Setup initial structure if collections are empty
        const initResult = await initializeFirestoreCollections(false);
        if (initResult.isSeeded) {
          setIsFirebaseConnected(true);
        }

        // Load websites with rules-compliant query
        try {
          const isAdmin = Boolean(auth.currentUser && auth.currentUser.email === 'raoamityadavak123@gmail.com');
          const websiteQuery = isAdmin
            ? collection(db, 'websites')
            : query(collection(db, 'websites'), where('status', '==', 'published'));
          const websitesSnap = await getDocs(websiteQuery);
          if (isMounted && !websitesSnap.empty) {
            const loaded: BusinessWebsite[] = [];
            websitesSnap.forEach(d => {
              const data = d.data() as Partial<BusinessWebsite>;
              if (!isLegacyDemoSite(data)) {
                loaded.push(normalizeBusinessSite(data));
              }
            });
            const list = [...loaded];
            for (const s of ALL_46_COLLECTION_WEBSITES) {
              if (!list.some(w => w.slug === s.slug || w.id === s.id)) {
                list.push(s);
              }
            }
            setWebsites(list);
          }
        } catch (e) {
          // Graceful fallback to default/local websites
        }

        // Load pricing plans
        try {
          const plansSnap = await getDocs(collection(db, 'pricing_plans'));
          if (isMounted && !plansSnap.empty) {
            const loadedPlans: PricingPlan[] = [];
            plansSnap.forEach(d => {
              loadedPlans.push(d.data() as PricingPlan);
            });
            if (loadedPlans.length > 0) {
              setPricingPlans(loadedPlans);
            }
          }
        } catch (e) {
          // Fallback to local pricing plans
        }

        // Load settings
        try {
          const settingsSnap = await getDoc(doc(db, 'settings', 'general'));
          if (isMounted && settingsSnap.exists()) {
            setUserSettings(settingsSnap.data() as typeof DEFAULT_USER_SETTINGS);
          }
        } catch (e) {
          // Fallback to local settings
        }
      } catch (err) {
        // Silent fallback to local storage
      }
    }
    initAndLoadFirestore();
    return () => {
      isMounted = false;
    };
  }, []);

  const syncFirestore = async (force: boolean = false) => {
    const res = await initializeFirestoreCollections(force);
    if (res.isSeeded) {
      setIsFirebaseConnected(true);
      // Reload fresh documents
      try {
        const isAdmin = Boolean(auth.currentUser && auth.currentUser.email === 'raoamityadavak123@gmail.com');
        const websiteQuery = isAdmin
          ? collection(db, 'websites')
          : query(collection(db, 'websites'), where('status', '==', 'published'));
        const websitesSnap = await getDocs(websiteQuery);
        if (!websitesSnap.empty) {
          const loaded: BusinessWebsite[] = [];
          websitesSnap.forEach(d => {
            const data = d.data() as Partial<BusinessWebsite>;
            if (!isLegacyDemoSite(data)) {
              loaded.push(normalizeBusinessSite(data));
            }
          });
          const list = [...loaded];
          const ensureSites = [
            TIM_WENDELBOE_WEBSITE,
            ONYX_WEBSITE,
            CITY_BREW_WEBSITE,
            GREGORYS_WEBSITE,
            SWEET_COFFEE_WEBSITE,
            BREW_BLOOM_WEBSITE
          ];
          for (const s of ensureSites) {
            if (!list.some(w => w.slug === s.slug)) {
              list.push(s);
            }
          }
          setWebsites(list);
        }
        const plansSnap = await getDocs(collection(db, 'pricing_plans'));
        if (!plansSnap.empty) {
          const loadedPlans: PricingPlan[] = [];
          plansSnap.forEach(d => loadedPlans.push(d.data() as PricingPlan));
          setPricingPlans(loadedPlans);
        }
      } catch (e) {
        console.warn('Reloading firestore docs failed', e);
      }
    }
    return res;
  };

  const isAdminAuthenticated = Boolean(user || demoAdmin);

  const loginAdminWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setIsFirebaseConnected(true);
    } catch (error) {
      handleFirestoreError(error, OperationType.GET, 'auth');
      // Fallback to demo admin if popup is blocked
      setDemoAdmin(true);
      localStorage.setItem(LOCAL_STORAGE_KEY_DEMO_ADMIN, 'true');
    }
  };

  const loginDemoAdmin = () => {
    setDemoAdmin(true);
    localStorage.setItem(LOCAL_STORAGE_KEY_DEMO_ADMIN, 'true');
  };

  const logoutAdmin = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.warn(e);
    }
    setDemoAdmin(false);
    localStorage.removeItem(LOCAL_STORAGE_KEY_DEMO_ADMIN);
  };

  const createWebsite = async (site: BusinessWebsite) => {
    setWebsites(prev => [site, ...prev]);
    try {
      await setDoc(doc(db, 'websites', site.slug), site);
    } catch (e) {
      // Local copy already safely saved
    }
  };

  const updateWebsite = async (id: string, updates: Partial<BusinessWebsite>) => {
    const now = new Date().toISOString();
    let updatedSite: BusinessWebsite | null = null;

    setWebsites(prev =>
      prev.map(site => {
        if (site.id === id || site.slug === id) {
          updatedSite = { ...site, ...updates, updatedAt: now };
          return updatedSite;
        }
        return site;
      })
    );

    if (updatedSite) {
      try {
        await setDoc(doc(db, 'websites', (updatedSite as BusinessWebsite).slug), updatedSite);
      } catch (e) {
        // Fallback local persistence active
      }
    }
  };

  const deleteWebsite = async (id: string) => {
    const target = websites.find(w => w.id === id || w.slug === id);
    setWebsites(prev => prev.filter(w => w.id !== id && w.slug !== id));
    if (target) {
      try {
        await deleteDoc(doc(db, 'websites', target.slug));
      } catch (e) {
        // Fallback local persistence active
      }
    }
  };

  const duplicateWebsite = async (id: string) => {
    const original = websites.find(w => w.id === id || w.slug === id);
    if (!original) return;

    const newSlug = `${original.slug}-copy-${Math.floor(Math.random() * 900 + 100)}`;
    const newSite: BusinessWebsite = {
      ...original,
      id: newSlug,
      slug: newSlug,
      businessName: `${original.businessName} (Copy)`,
      status: 'draft',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    await createWebsite(newSite);
  };

  const publishWebsite = async (id: string) => {
    await updateWebsite(id, { status: 'published' });
  };

  const unpublishWebsite = async (id: string) => {
    await updateWebsite(id, { status: 'draft' });
  };

  const archiveWebsite = async (id: string) => {
    await updateWebsite(id, { status: 'archived' });
  };

  const submitLead = async (leadData: Omit<LeadEnquiry, 'id' | 'createdAt'>) => {
    const newLead: LeadEnquiry = {
      ...leadData,
      id: `lead-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    setLeads(prev => [newLead, ...prev]);

    try {
      await setDoc(doc(db, 'enquiries', newLead.id), newLead);
    } catch (e) {
      // Handled via local storage
    }
  };

  const updateLeadStatus = async (id: string, status: LeadEnquiry['status']) => {
    setLeads(prev =>
      prev.map(l => (l.id === id ? { ...l, status } : l))
    );
    try {
      await setDoc(doc(db, 'enquiries', id), { status }, { merge: true });
    } catch (e) {
      // Local state preserved
    }
  };

  const submitWebsiteRequest = async (reqData: Omit<WebsiteRequest, 'id' | 'status' | 'createdAt'>): Promise<WebsiteRequest> => {
    const newReq: WebsiteRequest = {
      ...reqData,
      id: `wr-${Date.now()}`,
      status: 'New',
      createdAt: new Date().toISOString()
    };
    setWebsiteRequests(prev => {
      const updated = [newReq, ...prev];
      try {
        localStorage.setItem('raositez_website_requests_v1', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
    try {
      await setDoc(doc(db, 'website_requests', newReq.id), newReq);
    } catch (e) {
      // Handled via local storage
    }
    return newReq;
  };

  const updateWebsiteRequestStatus = async (id: string, status: WebsiteRequest['status']) => {
    setWebsiteRequests(prev => {
      const updated = prev.map(r => (r.id === id ? { ...r, status } : r));
      try {
        localStorage.setItem('raositez_website_requests_v1', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
    try {
      await setDoc(doc(db, 'website_requests', id), { status }, { merge: true });
    } catch (e) {}
  };

  const updatePricingPlan = async (updatedPlan: PricingPlan) => {
    setPricingPlans(prev =>
      prev.map(p => (p.id === updatedPlan.id ? updatedPlan : p))
    );
    try {
      await setDoc(doc(db, 'pricing_plans', updatedPlan.id), updatedPlan);
    } catch (e) {
      // Local state preserved
    }
  };

  const getWebsiteBySlug = (slug: string) => {
    if (!slug || typeof slug !== 'string') return undefined;
    const clean = slug.trim().toLowerCase().replace(/^\/?references\//, '').replace(/\/$/, '');
    const aliasMap: Record<string, string> = {
      '2d-cafe': '2d-cafe',
      'blue-tokai': 'blue-tokai',
      'third-wave': 'third-wave',
      'cafe-coffee-day': 'cafe-coffee-day',
      'koffee-hut': 'sweet-coffee',
      'tim-wendelboe': 'brew-bloom-tim-wendelboe',
      'onyx-coffee-lab': 'brew-bloom-onyx',
      'onyx': 'brew-bloom-onyx',
      'city-brew': 'brew-bloom-city-brew',
      'gregorys-coffee': 'brew-bloom-gregorys',
      'gregorys': 'brew-bloom-gregorys',
      'rubys-cafe': 'rubys-cafe',
      'rubys': 'rubys-cafe',
      'brewed-coffee-shop': 'brewed-coffee-shop',
      'brewed': 'brewed-coffee-shop',
      'greenberrys': 'greenberrys',
      'mean-mug': 'mean-mug',
      'revival-cafe': 'revival-cafe',
      'revival': 'revival-cafe',
      'subko': 'brew-bloom',
      'american-provisions': 'american-provisions',
      'mojo-coffee': 'mojo-coffee',
      'sweetwaters': 'sweetwaters',
      'sweetwaters-cafe': 'sweetwaters',
      'benne': 'benne',
      'barbeque-nation': 'barbeque-nation',
      'nandos': 'nandos',
      'nandos-india': 'nandos',
      'mainland-china': 'mainland-china',
      'oh-calcutta': 'oh-calcutta',
      'punjab-grill': 'punjab-grill',
      'bikanervala': 'bikanervala',
      'sagar-ratna': 'sagar-ratna',
      'karims': 'karims',
      'al-baik': 'al-baik',
      'mr-idli': 'mr-idli',
      'dream-travels': 'dream-travels',
      'dreamtotravels': 'dream-travels',
      'dream-to-travels': 'dream-travels',
      'tour-travel': 'dream-travels',
      'auravoyage': 'dream-travels'
    };
    const target = aliasMap[clean] || clean;
    const found = websites.find(w => (w?.slug && (w.slug.toLowerCase() === clean || w.slug.toLowerCase() === target)) || (w?.id && (w.id.toLowerCase() === clean || w.id.toLowerCase() === target))) ||
      ALL_30_COLLECTION_WEBSITES.find(w => (w?.slug && (w.slug.toLowerCase() === clean || w.slug.toLowerCase() === target)) || (w?.id && (w.id.toLowerCase() === clean || w.id.toLowerCase() === target))) ||
      DEFAULT_WEBSITES.find(w => (w?.slug && w.slug.toLowerCase() === clean) || (w?.id && w.id.toLowerCase() === clean));
    return found ? normalizeBusinessSite(found) : undefined;
  };

  // Calculate revenue statistics
  const revenueMetrics = React.useMemo(() => {
    const paidSites = websites.filter(w => w.paymentStatus === 'paid');
    const totalRevenue = paidSites.reduce((sum, s) => sum + (s.amountPaid || 0), 0);
    const pendingSites = websites.filter(w => w.paymentStatus === 'pending');
    const pendingRevenue = pendingSites.reduce((sum, s) => sum + (s.amountPaid || 1499), 0);

    // Approximate monthly based on recent dates
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const monthlyRevenue = paidSites
      .filter(s => {
        const d = new Date(s.createdAt || Date.now());
        return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
      })
      .reduce((sum, s) => sum + (s.amountPaid || 0), 0);

    return {
      totalRevenue: totalRevenue || 5496,
      monthlyRevenue: monthlyRevenue || 3497,
      totalPaidWebsites: paidSites.length,
      pendingRevenue
    };
  }, [websites]);

  const updateUserSettings = async (newSettings: Partial<typeof DEFAULT_USER_SETTINGS>) => {
    const updated = {
      ...userSettings,
      ...newSettings,
      updatedAt: new Date().toISOString()
    };
    setUserSettings(updated);
    try {
      await setDoc(doc(db, 'settings', 'general'), updated, { merge: true });
    } catch (e) {
      // Handled in local storage
    }
  };

  const importReferencesFromCsv = (csvText: string): { count: number; error?: string } => {
    try {
      const parsed = parseReferenceCsv(csvText);
      if (!parsed || parsed.length === 0) {
        return { count: 0, error: 'No valid category rows found in CSV. Please verify column headers.' };
      }
      const existingMap = new Map(categoryReferences.map(c => [c.id, c]));
      for (const item of parsed) {
        existingMap.set(item.id, item);
      }
      const updated = Array.from(existingMap.values());
      setCategoryReferences(updated);
      localStorage.setItem('raositez_130_references_v1', JSON.stringify(updated));
      return { count: parsed.length };
    } catch (err: any) {
      return { count: 0, error: err?.message || 'Failed to parse CSV file.' };
    }
  };

  const updateCategoryReference = async (catId: string, updates: Partial<CategoryReferenceItem>) => {
    const updated = categoryReferences.map(c => c.id === catId ? { ...c, ...updates } : c);
    setCategoryReferences(updated);
    localStorage.setItem('raositez_130_references_v1', JSON.stringify(updated));
  };

  const resetReferencesToDefault = async () => {
    setCategoryReferences(CATEGORIES_130_DATA);
    localStorage.setItem('raositez_130_references_v1', JSON.stringify(CATEGORIES_130_DATA));
  };

  const getCategoryReference = (catId: string) => {
    return categoryReferences.find(c => c.id === catId);
  };

  const resetDemoCatalog = async () => {
    setWebsites([]);
    localStorage.removeItem(LOCAL_STORAGE_KEY_SITES);
    localStorage.removeItem(LOCAL_STORAGE_KEY_LEADS);
    localStorage.setItem(RESET_CATALOG_STORAGE_KEY, 'true');
    // If admin is connected to Firestore, remove demo website documents
    if (auth.currentUser) {
      try {
        const snap = await getDocs(collection(db, 'websites'));
        for (const docSnap of snap.docs) {
          await deleteDoc(doc(db, 'websites', docSnap.id));
        }
      } catch (e) {
        console.warn('Firestore reset catalog cleanup', e);
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        websites,
        pricingPlans,
        leads,
        userSettings,
        user,
        isAdminAuthenticated,
        isFirebaseConnected,
        activeView,
        activeSiteSlug,
        activeCitySlug,
        setActiveCitySlug,
        discountLeads,
        demoCategoryFilter,
        setDemoCategoryFilter,
        referenceCategoryFilter,
        setReferenceCategoryFilter,
        categoryPickerOpen,
        setCategoryPickerOpen,
        openCategoryPicker,
        builderEditSiteId,
        activeEditorSiteId,
        previewMode,
        setActiveView,
        setBuilderEditSiteId,
        setActiveEditorSiteId,
        setPreviewMode,
        loginAdminWithGoogle,
        loginDemoAdmin,
        logoutAdmin,
        createWebsite,
        updateWebsite,
        deleteWebsite,
        duplicateWebsite,
        publishWebsite,
        unpublishWebsite,
        archiveWebsite,
        submitLead,
        updateLeadStatus,
        updatePricingPlan,
        updateUserSettings,
        syncFirestore,
        getWebsiteBySlug,
        categoryReferences,
        importReferencesFromCsv,
        updateCategoryReference,
        resetReferencesToDefault,
        getCategoryReference,
        revenueMetrics,
        websiteRequests,
        submitWebsiteRequest,
        updateWebsiteRequestStatus,
        resetDemoCatalog
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
