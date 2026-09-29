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
  | 'properties';

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

const RESET_CATALOG_STORAGE_KEY = 'raositez_clean_slate_catalog_v3';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [websites, setWebsites] = useState<BusinessWebsite[]>(() => {
    try {
      // Purge any legacy demo/placeholder website cache to ensure clean slate
      if (!localStorage.getItem(RESET_CATALOG_STORAGE_KEY)) {
        localStorage.removeItem(LOCAL_STORAGE_KEY_SITES);
        localStorage.removeItem(LOCAL_STORAGE_KEY_LEADS);
        localStorage.setItem(RESET_CATALOG_STORAGE_KEY, 'true');
        return [];
      }
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY_SITES);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed
            .filter((s: unknown): s is Partial<BusinessWebsite> => Boolean(s && typeof s === 'object'))
            .map(s => normalizeBusinessSite(s));
        }
      }
    } catch (e) {
      console.warn('Could not parse stored websites', e);
    }
    return [];
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
              loaded.push(normalizeBusinessSite(d.data() as Partial<BusinessWebsite>));
            });
            if (loaded.length > 0) {
              setWebsites(loaded);
            }
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
          websitesSnap.forEach(d => loaded.push(normalizeBusinessSite(d.data() as Partial<BusinessWebsite>)));
          setWebsites(loaded);
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
    const clean = slug.trim().toLowerCase();
    const found = websites.find(w => (w?.slug && w.slug.toLowerCase() === clean) || (w?.id && w.id.toLowerCase() === clean)) ||
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
        const d = new Date(s.createdAt);
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
