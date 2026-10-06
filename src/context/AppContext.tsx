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
  | 'hazoorilal-jewellers'
  | 'sabka-loans'
  | 'sabka-finance'
  | 'square-yard-dealers'
  | 'choudhary-realestate'
  | 'dlc-group'
  | 'raoz-properties'
  | 'raoz-bazaar'
  | 'raoz-weddings'
  | 'raoz-motors'
  | 'smlwindia'
  | 'rathore-weddings'
  | 'all-in-one-destination-weddings'
  | 'luxespace-htx'
  | 'saveweb2zip'
  | 'lawlinks'
  | 'maheshwari'
  | 'group-ach'
  | 'clinicbypeople'
  | 'medicareplus'
  | 'skinsciene-naturals'
  | 'livinto-interiors'
  | 'devdas-wedding'
  | 'utsav-luxe'
  | '69-utsav-luxe'
  | 'psr-venture-weddings'
  | '70-psr-venture-weddings'
  | 'raozy-wedding-planner'
  | '71-raozy-wedding-planner'
  | 'global-plannerss'
  | '72-global-plannerss'
  | 'raoz-wedding-hub'
  | '73-raoz-wedding-hub'
  | 'grandeur-weddings'
  | '74-grandeur-weddings'
  | 'site-75-aura-luxe'
  | '75-aura-luxe'
  | 'site-76-aranya-earth'
  | '76-aranya-earth'
  | 'site-77-nocturna-club'
  | '77-nocturna-club'
  | 'site-78-aurelia-resort'
  | '78-aurelia-resort'
  | 'site-79-elysium-club'
  | '79-elysium-club'
  | 'site-80-club-bw'
  | '80-club-bw'
  | 'club-bw'
  | 'clubbw'
  | 'site-81-luxury-real-estate'
  | '81-luxury-real-estate'
  | 'valtierra'
  | 'jamesedition'
  | 'site-82-wealth-clinic'
  | '82-wealth-clinic'
  | 'wealth-clinic'
  | 'wealthnexus'
  | 'wealth-nexus';

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
import { SABKA_LOANS_WEBSITE } from '../data/sabkaLoansData';
import { SABKA_FINANCE_WEBSITE } from '../data/sabkaFinanceData';
import { SQUARE_YARD_DEALERS_WEBSITE } from '../data/squareYardDealersData';
import { CHOUDHARY_REALESTATE_WEBSITE } from '../data/choudharyRealestateData';
import { DLC_GROUP_WEBSITE } from '../data/dlcGroupData';
import { RAOZ_PROPERTIES_WEBSITE } from '../data/raozPropertiesData';
import { RAOZ_BAZAAR_WEBSITE } from '../data/raozBazaarData';
import { RAOZ_WEDDINGS_WEBSITE } from '../data/raozWeddingsData';
import { SMLW_WEDDINGS_WEBSITE } from '../data/smlwWeddingsData';
import { RATHORE_WEDDINGS_WEBSITE } from '../data/rathoreWeddingsData';
import { ALL_IN_ONE_DESTINATION_WEDDINGS_WEBSITE } from '../data/allInOneDestinationWeddingsData';
import { LUXESPACE_WEBSITE } from '../data/luxeSpaceWebsiteData';
import { SAVEWEB2ZIP_WEBSITE } from '../data/saveWeb2ZipWebsiteData';
import { LAWLINKS_WEBSITE } from '../data/lawlinksWebsiteData';
import { MAHESHWARI_WEBSITE } from '../data/maheshwariWebsiteData';
import { RAOZ_MOTORS_WEBSITE } from '../data/raozMotorsData';
import { GROUP_ACH_WEBSITE } from '../data/groupAchData';
import { CLINICBYPEOPLE_WEBSITE } from '../data/clinicByPeopleData';
import { MEDICAREPLUS_WEBSITE } from '../data/medicarePlusData';
import { SKINSCIENE_WEBSITE } from '../data/skinScieneData';
import { LIVINTO_WEBSITE } from '../data/livintoInteriorsData';
import { DEVDAS_WEBSITE } from '../data/devdasWeddingData';
import { UTSAV_LUXE_WEBSITE, ALL_UTSAV_WEBSITES } from '../data/utsavLuxeData';
import { PSR_VENTURE_WEDDINGS_WEBSITE } from '../data/psrWeddingsData';
import { RAOZY_WEDDING_WEBSITE } from '../data/raozyWeddingData';
import { GLOBAL_PLANNERSS_WEBSITE } from '../data/globalPlannerssData';
import { RAOZ_WEDDING_HUB_WEBSITE } from '../data/raozWeddingHubData';
import { SITE_74_WEBSITE } from '../data/site74Data';
import { SITE_75_WEBSITE } from '../data/site75Data';
import { SITE_76_WEBSITE } from '../data/site76Data';
import { SITE_77_WEBSITE } from '../data/site77Data';
import { SITE_78_WEBSITE } from '../data/site78Data';
import { SITE_79_WEBSITE } from '../data/site79Data';
import { SITE_80_WEBSITE } from '../data/site80Data';
import { SITE_81_WEBSITE } from '../data/site81Data';
import { SITE_82_WEBSITE } from '../data/site82Data';

export const ALL_SITE_82_WEBSITES: BusinessWebsite[] = [
  SITE_82_WEBSITE
];

export const ALL_SITE_81_WEBSITES: BusinessWebsite[] = [
  SITE_81_WEBSITE
];

export const ALL_SITE_80_WEBSITES: BusinessWebsite[] = [
  SITE_80_WEBSITE
];

export const ALL_SITE_79_WEBSITES: BusinessWebsite[] = [
  SITE_79_WEBSITE
];

export const ALL_SITE_78_WEBSITES: BusinessWebsite[] = [
  SITE_78_WEBSITE
];

export const ALL_SITE_77_WEBSITES: BusinessWebsite[] = [
  SITE_77_WEBSITE
];

export const ALL_SITE_76_WEBSITES: BusinessWebsite[] = [
  SITE_76_WEBSITE
];

export const ALL_SITE_75_WEBSITES: BusinessWebsite[] = [
  SITE_75_WEBSITE
];

export const ALL_SITE_74_WEBSITES: BusinessWebsite[] = [
  SITE_74_WEBSITE
];

export const ALL_RAOZ_WEDDING_HUB_WEBSITES: BusinessWebsite[] = [
  RAOZ_WEDDING_HUB_WEBSITE
];

export const ALL_GLOBAL_PLANNERSS_WEBSITES: BusinessWebsite[] = [
  GLOBAL_PLANNERSS_WEBSITE
];

export const ALL_DEVDAS_WEBSITES: BusinessWebsite[] = [
  DEVDAS_WEBSITE
];

export const ALL_UTSAV_WEBSITES_EXPORT: BusinessWebsite[] = ALL_UTSAV_WEBSITES;

export const ALL_PSR_WEBSITES: BusinessWebsite[] = [
  PSR_VENTURE_WEDDINGS_WEBSITE
];

export const ALL_RAOZY_WEBSITES: BusinessWebsite[] = [
  RAOZY_WEDDING_WEBSITE
];

export const ALL_INTERIOR_WEBSITES: BusinessWebsite[] = [
  LIVINTO_WEBSITE
];

export const ALL_HEALTHCARE_WEBSITES: BusinessWebsite[] = [
  CLINICBYPEOPLE_WEBSITE,
  MEDICAREPLUS_WEBSITE,
  SKINSCIENE_WEBSITE
];

export const ALL_LEGAL_WEBSITES: BusinessWebsite[] = [
  LAWLINKS_WEBSITE,
  MAHESHWARI_WEBSITE
];

export const ALL_WEB_TOOLS_WEBSITES: BusinessWebsite[] = [
  SAVEWEB2ZIP_WEBSITE
];

export const ALL_DESTINATION_WEDDINGS_WEBSITES: BusinessWebsite[] = [
  ALL_IN_ONE_DESTINATION_WEDDINGS_WEBSITE
];

export const ALL_EVENT_PLANNING_WEBSITES: BusinessWebsite[] = [
  RATHORE_WEDDINGS_WEBSITE
];

export const ALL_COMMERCIAL_VEHICLES_WEBSITES: BusinessWebsite[] = [
  RAOZ_MOTORS_WEBSITE
];

export const ALL_LOANS_WEBSITES: BusinessWebsite[] = [
  SABKA_LOANS_WEBSITE,
  SABKA_FINANCE_WEBSITE,
  GROUP_ACH_WEBSITE
];

export const ALL_STORE_WEBSITES: BusinessWebsite[] = [
  RAOZ_BAZAAR_WEBSITE
];

export const ALL_WEDDING_WEBSITES: BusinessWebsite[] = [
  RAOZ_WEDDINGS_WEBSITE,
  SMLW_WEDDINGS_WEBSITE,
  LUXESPACE_WEBSITE
];

export const ALL_REAL_ESTATE_WEBSITES: BusinessWebsite[] = [
  SQUARE_YARD_DEALERS_WEBSITE,
  CHOUDHARY_REALESTATE_WEBSITE,
  DLC_GROUP_WEBSITE,
  RAOZ_PROPERTIES_WEBSITE
];

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

export const ALL_57_COLLECTION_WEBSITES: BusinessWebsite[] = [
  ...ALL_CAFE_WEBSITES,
  ...ALL_RESTAURANT_WEBSITES,
  ...ALL_TRAVEL_WEBSITES,
  ...ALL_SALON_WEBSITES,
  ...ALL_JEWELLERY_WEBSITES,
  ...ALL_BEAUTY_COSMETICS_WEBSITES,
  ...ALL_GYM_FITNESS_WEBSITES,
  ...ALL_LOANS_WEBSITES,
  ...ALL_REAL_ESTATE_WEBSITES,
  ...ALL_STORE_WEBSITES,
  ...ALL_WEDDING_WEBSITES,
  ...ALL_COMMERCIAL_VEHICLES_WEBSITES,
  ...ALL_EVENT_PLANNING_WEBSITES,
  ...ALL_DESTINATION_WEDDINGS_WEBSITES,
  ...ALL_WEB_TOOLS_WEBSITES,
  ...ALL_LEGAL_WEBSITES,
  ...ALL_HEALTHCARE_WEBSITES,
  ...ALL_INTERIOR_WEBSITES,
  ...ALL_DEVDAS_WEBSITES,
  ...ALL_UTSAV_WEBSITES,
  ...ALL_PSR_WEBSITES,
  ...ALL_RAOZY_WEBSITES,
  ...ALL_GLOBAL_PLANNERSS_WEBSITES,
  ...ALL_RAOZ_WEDDING_HUB_WEBSITES,
  ...ALL_SITE_74_WEBSITES,
  ...ALL_SITE_75_WEBSITES,
  ...ALL_SITE_76_WEBSITES,
  ...ALL_SITE_77_WEBSITES,
  ...ALL_SITE_78_WEBSITES,
  ...ALL_SITE_79_WEBSITES,
  ...ALL_SITE_80_WEBSITES,
  ...ALL_SITE_81_WEBSITES,
  ...ALL_SITE_82_WEBSITES
];

export const ALL_82_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_57_COLLECTION_WEBSITES;
export const ALL_81_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_82_COLLECTION_WEBSITES;
export const ALL_80_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_81_COLLECTION_WEBSITES;
export const ALL_79_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_80_COLLECTION_WEBSITES;
export const ALL_78_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_80_COLLECTION_WEBSITES;
export const ALL_77_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_80_COLLECTION_WEBSITES;
export const ALL_76_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_80_COLLECTION_WEBSITES;
export const ALL_75_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_80_COLLECTION_WEBSITES;
export const ALL_74_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_80_COLLECTION_WEBSITES;
export const ALL_73_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_80_COLLECTION_WEBSITES;
export const ALL_72_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_80_COLLECTION_WEBSITES;
export const ALL_71_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_80_COLLECTION_WEBSITES;
export const ALL_70_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_80_COLLECTION_WEBSITES;
export const ALL_68_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_80_COLLECTION_WEBSITES;
export const ALL_65_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_80_COLLECTION_WEBSITES;
export const ALL_64_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_80_COLLECTION_WEBSITES;
export const ALL_63_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_80_COLLECTION_WEBSITES;
export const ALL_62_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_80_COLLECTION_WEBSITES;
export const ALL_61_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_80_COLLECTION_WEBSITES;
export const ALL_60_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_80_COLLECTION_WEBSITES;
export const ALL_59_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_57_COLLECTION_WEBSITES;
export const ALL_58_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_57_COLLECTION_WEBSITES;
export const ALL_56_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_57_COLLECTION_WEBSITES;
export const ALL_55_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_56_COLLECTION_WEBSITES;
export const ALL_54_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_55_COLLECTION_WEBSITES;
export const ALL_53_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_55_COLLECTION_WEBSITES;
export const ALL_52_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_55_COLLECTION_WEBSITES;
export const ALL_51_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_55_COLLECTION_WEBSITES;
export const ALL_50_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_55_COLLECTION_WEBSITES;
export const ALL_49_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_52_COLLECTION_WEBSITES;
export const ALL_46_COLLECTION_WEBSITES: BusinessWebsite[] = ALL_50_COLLECTION_WEBSITES;

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
  referenceCategoryFilter: 'all' | 'cafes' | 'restaurants' | 'travel' | 'salon' | 'jewellery' | 'beauty_cosmetics' | 'gym_fitness' | 'web_tools' | 'loans' | 'healthcare';
  setReferenceCategoryFilter: (filter: 'all' | 'cafes' | 'restaurants' | 'travel' | 'salon' | 'jewellery' | 'beauty_cosmetics' | 'gym_fitness' | 'web_tools' | 'loans' | 'healthcare') => void;
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
          const canonical = [...ALL_81_COLLECTION_WEBSITES];
          const custom = cleaned.filter(s => !canonical.some(c => c.slug === s.slug || c.id === s.id));
          return [...canonical, ...custom];
        }
      }
    } catch (e) {
      console.warn('Could not parse stored websites', e);
    }
    return ALL_81_COLLECTION_WEBSITES;
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
  const [activeView, setActiveViewInternal] = useState<AppView>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#/', '').replace('#', '').trim().toLowerCase();
      if (hash === 'site-79-elysium-club' || hash === '79-elysium-club' || hash === 'elysium' || hash === 'elysium-club' || hash === 'privee' || hash === 'privee-delhi' || hash === 'priveenewdelhi' || hash === 'site-79' || hash === '79' || hash === '') return 'site-79-elysium-club';
      if (hash === 'site-78-aurelia-resort' || hash === '78-aurelia-resort' || hash === 'aurelia' || hash === 'aurelia-resort' || hash === 'aureliagoa' || hash === 'anemos' || hash === 'anemos-goa' || hash === 'anemosgoa' || hash === 'anemosgoa.com' || hash === 'site-78' || hash === '78') return 'site-78-aurelia-resort';
      if (hash === 'site-77-nocturna-club' || hash === '77-nocturna-club' || hash === 'nocturna' || hash === 'nocturna-club' || hash === 'nocturnaclub' || hash === 'hammerzz' || hash === 'hammerzzclub' || hash === 'hammerzzclub.com' || hash === 'site-77' || hash === '77') return 'site-77-nocturna-club';
      if (hash === 'site-76-aranya-earth' || hash === '76-aranya-earth' || hash === 'aranya-earth' || hash === 'aranya' || hash === 'craftedknots' || hash === 'craftedknots.in' || hash === 'site-76' || hash === '76') return 'site-76-aranya-earth';
      if (hash === 'site-75-aura-luxe' || hash === '75-aura-luxe' || hash === 'auraluxe' || hash === 'aura-luxe' || hash === 'bonevento' || hash === 'bonevento.com' || hash === 'site-75' || hash === '75') return 'site-75-aura-luxe';
      if (hash === 'grandeur-weddings' || hash === '74-grandeur-weddings' || hash === 'grandeur' || hash === 'marriottindiaweddings' || hash === 'site-74' || hash === '74') return 'grandeur-weddings';
      if (hash === 'raoz-wedding-hub' || hash === '73-raoz-wedding-hub' || hash === 'raozweddinghub' || hash === 'vowsafar' || hash === 'vows-afar' || hash === 'site-73' || hash === '73') return 'raoz-wedding-hub';
      if (hash === 'global-plannerss' || hash === '72-global-plannerss' || hash === 'globalplannerss' || hash === 'global-planner' || hash === 'site-72' || hash === '72') return 'global-plannerss';
      if (hash === 'raozy-wedding-planner' || hash === '71-raozy-wedding-planner' || hash === 'raozy' || hash === 'site-71' || hash === '71') return 'raozy-wedding-planner';
      if (hash === 'utsav-luxe' || hash === '69-utsav-luxe' || hash === 'utsav' || hash === 'utsavluxe' || hash === 'site-69' || hash === '69' || hash === 'meragi') return 'utsav-luxe';
      if (hash === 'psr-venture-weddings' || hash === '70-psr-venture-weddings' || hash === 'psr' || hash === 'site-70' || hash === '70') return 'psr-venture-weddings';
      if (hash === 'maheshwari' || hash === 'maheshwariandco' || hash === 'maheshwari-co' || hash === 'site-62' || hash === '62' || hash === 'maheshwariandco.com') return 'maheshwari';
      if (hash === 'lawlinks' || hash === 'lawlinks.in' || hash === 'law-links' || hash === 'site-61' || hash === '61' || hash === 'advocates') return 'lawlinks';
      if (hash === 'saveweb2zip' || hash === 'saveweb' || hash === 'web2zip' || hash === 'saveweb2zip.com' || hash === 'site-60' || hash === '60') return 'saveweb2zip';
      if (hash === 'luxespace-htx' || hash === 'luxespace' || hash === 'luxespacehtx' || hash === 'site-59' || hash === '59') return 'luxespace-htx';
      if (hash === 'all-in-one-destination-weddings' || hash === 'allinonedestinationweddings' || hash === 'destinationweddings' || hash === 'destination-weddings' || hash === 'destweds' || hash === 'site-58' || hash === '58') return 'all-in-one-destination-weddings';
      if (hash === 'rathore-weddings' || hash === 'rathore' || hash === 'bmpweddings' || hash === 'bmp' || hash === 'wedding-events' || hash === 'site-57' || hash === '57') return 'rathore-weddings';
      if (hash === 'smlwindia' || hash === 'smlw' || hash === 'smlw-weddings' || hash === 'shubh-muhurat' || hash === 'site-56' || hash === '56') return 'smlwindia';
      if (hash === 'raoz-motors' || hash === 'commercial-vehicles' || hash === 'trucks' || hash === 'buses') return 'raoz-motors';
      if (hash === 'raoz-weddings' || hash === 'wedding' || hash === 'weddings' || hash === 'theweddingcompany' || hash === 'site-55' || hash === '55') return 'raoz-weddings';
      if (hash === 'raoz-bazaar' || hash === 'smartkirana' || hash === 'store' || hash === 'shop' || hash === 'site-54' || hash === '54') return 'raoz-bazaar';
      if (hash === 'raoz-properties') return 'raoz-properties';
      if (hash === 'dlc-group') return 'dlc-group';
      if (hash === 'choudhary-realestate') return 'choudhary-realestate';
      if (hash === 'square-yard-dealers') return 'square-yard-dealers';
    }
    return 'home';
  });
  const [activeSiteSlug, setActiveSiteSlug] = useState<string | null>(null);
  const [activeCitySlug, setActiveCitySlug] = useState<string>('delhi');
  const [demoCategoryFilter, setDemoCategoryFilter] = useState<string | null>(null);
  const [referenceCategoryFilter, setReferenceCategoryFilter] = useState<'all' | 'cafes' | 'restaurants' | 'travel' | 'salon' | 'jewellery' | 'beauty_cosmetics' | 'gym_fitness' | 'web_tools' | 'loans' | 'healthcare'>('all');
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
      } else if (raw === 'sabka-loans' || raw === 'loans' || raw === 'demo/sabka-loans' || raw === 'demos/sabka-loans' || raw === 'site/sabka-loans' || raw === 'references/sabka-loans' || raw === 'references/brightloans' || raw === 'personal-loan' || raw === 'home-loan' || raw === 'loan-against-property') {
        setActiveViewInternal('sabka-loans');
        setActiveSiteSlug('sabka-loans');
      } else if (raw === 'sabka-finance' || raw === 'lonkaro' || raw === 'demo/sabka-finance' || raw === 'demos/sabka-finance' || raw === 'site/sabka-finance' || raw === 'references/sabka-loan') {
        setActiveViewInternal('sabka-finance');
        setActiveSiteSlug('sabka-finance');
      } else if (raw === 'choudhary-realestate' || raw === 'choudhary' || raw === 'arvindestates' || raw === 'arvind-estates' || raw === 'dwarka' || raw === 'site/choudhary-realestate' || raw === 'references/choudhary-realestate' || raw === 'builder-floors-dwarka') {
        setActiveViewInternal('choudhary-realestate');
        setActiveSiteSlug('choudhary-realestate');
      } else if (raw === 'dlc-group' || raw === 'dlc' || raw === 'dlcgroup' || raw === 'real-estate-agents-in-delhi' || raw === 'site/dlc-group' || raw === 'references/dlc-group' || raw === 'dlc-realestate') {
        setActiveViewInternal('dlc-group');
        setActiveSiteSlug('dlc-group');
      } else if (raw === 'raoz-properties' || raw === 'raoz' || raw === 'hrrealtech' || raw === 'site/raoz-properties' || raw === 'references/raoz-properties' || raw === 'raozproperties') {
        setActiveViewInternal('raoz-properties');
        setActiveSiteSlug('raoz-properties');
      } else if (raw === 'raoz-bazaar' || raw === 'smartkirana' || raw === 'smart-kirana' || raw === 'store' || raw === 'shop' || raw === 'site-54' || raw === 'site/54' || raw === 'site/raoz-bazaar' || raw === 'references/smartkirana' || raw === 'bazaar') {
        setActiveViewInternal('raoz-bazaar');
        setActiveSiteSlug('raoz-bazaar');
      } else if (raw === 'raoz-weddings' || raw === 'wedding' || raw === 'weddings' || raw === 'theweddingcompany' || raw === 'site-55' || raw === 'site/55' || raw === 'site/raoz-weddings' || raw === 'references/theweddingcompany' || raw === 'wedding-venues') {
        setActiveViewInternal('raoz-weddings');
        setActiveSiteSlug('raoz-weddings');
      } else if (raw === 'smlwindia' || raw === 'smlw' || raw === 'smlw-weddings' || raw === 'shubh-muhurat' || raw === 'shubhmuhurat' || raw === 'site-56' || raw === 'site/56' || raw === 'references/smlwindia' || raw === 'site/smlwindia') {
        setActiveViewInternal('smlwindia');
        setActiveSiteSlug('smlwindia');
      } else if (raw === 'rathore-weddings' || raw === 'rathore' || raw === 'bmpweddings' || raw === 'bmp' || raw === 'wedding-events' || raw === 'site-57' || raw === 'site/57' || raw === 'references/bmpweddings' || raw === 'site/rathore-weddings') {
        setActiveViewInternal('rathore-weddings');
        setActiveSiteSlug('rathore-weddings');
      } else if (raw === 'all-in-one-destination-weddings' || raw === 'allinonedestinationweddings' || raw === 'destinationweddings' || raw === 'destination-weddings' || raw === 'destweds' || raw === 'site-58' || raw === 'site/58' || raw === 'references/destinationweddings' || raw === 'site/all-in-one-destination-weddings') {
        setActiveViewInternal('all-in-one-destination-weddings');
        setActiveSiteSlug('all-in-one-destination-weddings');
      } else if (raw === 'luxespace-htx' || raw === 'luxespace' || raw === 'luxespacehtx' || raw === 'luxespace-venue' || raw === 'site-59' || raw === 'site/59' || raw === 'references/luxespacehtx' || raw === 'site/luxespace-htx') {
        setActiveViewInternal('luxespace-htx');
        setActiveSiteSlug('luxespace-htx');
      } else if (raw === 'site-79-elysium-club' || raw === '79-elysium-club' || raw === 'elysium' || raw === 'elysium-club' || raw === 'privee' || raw === 'privee-delhi' || raw === 'priveenewdelhi' || raw === 'site-79' || raw === 'site/79' || raw === 'demo-79' || raw === 'references/site-79-elysium-club' || raw === 'portfolio/79-elysium-club' || raw === 'site/79-elysium-club') {
        setActiveViewInternal('site-79-elysium-club');
        setActiveSiteSlug('79-elysium-club');
      } else if (raw === 'site-78-aurelia-resort' || raw === '78-aurelia-resort' || raw === 'aurelia' || raw === 'aurelia-resort' || raw === 'aureliagoa' || raw === 'anemos' || raw === 'anemos-goa' || raw === 'anemosgoa' || raw === 'anemosgoa.com' || raw === 'site-78' || raw === 'site/78' || raw === 'demo-78' || raw === 'demo/aurelia' || raw === 'references/site-78-aurelia-resort' || raw === 'references/anemosgoa' || raw === 'portfolio/78-aurelia-resort' || raw === 'site/78-aurelia-resort') {
        setActiveViewInternal('site-78-aurelia-resort');
        setActiveSiteSlug('78-aurelia-resort');
      } else if (raw === 'site-77-nocturna-club' || raw === '77-nocturna-club' || raw === 'nocturna' || raw === 'nocturna-club' || raw === 'nocturnaclub' || raw === 'hammerzz' || raw === 'hammerzzclub' || raw === 'hammerzzclub.com' || raw === 'site-77' || raw === 'site/77' || raw === 'demo-77' || raw === 'demo/nocturna' || raw === 'references/site-77-nocturna-club' || raw === 'references/hammerzzclub' || raw === 'portfolio/77-nocturna-club' || raw === 'site/77-nocturna-club') {
        setActiveViewInternal('site-77-nocturna-club');
        setActiveSiteSlug('77-nocturna-club');
      } else if (raw === 'site-76-aranya-earth' || raw === '76-aranya-earth' || raw === 'aranya-earth' || raw === 'aranya' || raw === 'craftedknots' || raw === 'craftedknots.in' || raw === 'site-76' || raw === 'site/76' || raw === 'demo-76' || raw === 'demo/aranya-earth' || raw === 'references/site-76-aranya-earth' || raw === 'references/craftedknots' || raw === 'portfolio/76-aranya-earth' || raw === 'site/76-aranya-earth') {
        setActiveViewInternal('site-76-aranya-earth');
        setActiveSiteSlug('76-aranya-earth');
      } else if (raw === 'site-75-aura-luxe' || raw === '75-aura-luxe' || raw === 'auraluxe' || raw === 'aura-luxe' || raw === 'bonevento' || raw === 'bonevento.com' || raw === 'site-75' || raw === 'site/75' || raw === 'demo-75' || raw === 'demo/aura-luxe' || raw === 'references/site-75-aura-luxe' || raw === 'references/bonevento' || raw === 'portfolio/75-aura-luxe' || raw === 'site/75-aura-luxe') {
        setActiveViewInternal('site-75-aura-luxe');
        setActiveSiteSlug('75-aura-luxe');
      } else if (raw === 'grandeur-weddings' || raw === '74-grandeur-weddings' || raw === 'grandeur' || raw === 'marriottindiaweddings' || raw === 'marriottweddings' || raw === 'site-74' || raw === 'site/74' || raw === 'demo-74' || raw === 'demo/grandeur' || raw === 'references/grandeur-weddings' || raw === 'references/marriottindiaweddings' || raw === 'site/74-grandeur-weddings' || raw === 'site/grandeur-weddings' || raw === 'grandeurweddings74.com') {
        setActiveViewInternal('grandeur-weddings');
        setActiveSiteSlug('74-grandeur-weddings');
      } else if (raw === 'raoz-wedding-hub' || raw === '73-raoz-wedding-hub' || raw === 'raozweddinghub' || raw === 'vowsafar' || raw === 'vows-afar' || raw === 'site-73' || raw === 'site/73' || raw === 'demo-73' || raw === 'demo/raoz-wedding-hub' || raw === 'references/raoz-wedding-hub' || raw === 'references/vowsafar' || raw === 'site/73-raoz-wedding-hub' || raw === 'site/raoz-wedding-hub' || raw === 'raozweddinghub.com' || raw === 'vowsafar.au') {
        setActiveViewInternal('raoz-wedding-hub');
        setActiveSiteSlug('73-raoz-wedding-hub');
      } else if (raw === 'global-plannerss' || raw === '72-global-plannerss' || raw === 'globalplannerss' || raw === 'global-planner' || raw === 'global' || raw === '72-global' || raw === 'portfolio/72-global-plannerss' || raw === 'portfolio/global-plannerss' || raw === 'portfolio/global' || raw === 'site-72' || raw === 'site/72' || raw === 'demo-72' || raw === 'demo/global' || raw === 'references/global-plannerss' || raw === 'references/global' || raw === 'site/72-global-plannerss' || raw === 'site/global-plannerss' || raw === 'globalplannerss.com') {
        setActiveViewInternal('global-plannerss');
        setActiveSiteSlug('72-global-plannerss');
      } else if (raw === 'raozy' || raw === 'raozy-wedding-planner' || raw === 'raozyweddingplanner' || raw === '71-raozy-wedding-planner' || raw === '71-raozy' || raw === 'portfolio/71-raozy-wedding-planner' || raw === 'portfolio/raozy-wedding-planner' || raw === 'portfolio/raozy' || raw === 'site-71' || raw === 'site/71' || raw === 'demo-71' || raw === 'demo/raozy' || raw === 'references/raozy' || raw === 'site/71-raozy-wedding-planner' || raw === 'site/raozy-wedding-planner') {
        setActiveViewInternal('raozy-wedding-planner');
        setActiveSiteSlug('71-raozy-wedding-planner');
      } else if (raw === 'psr' || raw === 'psr-venture' || raw === 'psr-venture-weddings' || raw === 'psr-weddings' || raw === '70-psr-venture-weddings' || raw === '70-psr' || raw === 'portfolio/70-psr-venture-weddings' || raw === 'portfolio/psr-venture-weddings' || raw === 'portfolio/psr' || raw === 'site-70' || raw === 'site/70' || raw === 'demo-70' || raw === 'demo/psr' || raw === 'references/psr' || raw === 'site/70-psr-venture-weddings' || raw === 'site/psr-venture-weddings' || raw === 'psrventureweddings' || raw === 'psrventureweddings.com') {
        setActiveViewInternal('psr-venture-weddings');
        setActiveSiteSlug('70-psr-venture-weddings');
      } else if (raw === 'utsav' || raw === 'utsav-luxe' || raw === 'utsavluxe' || raw === '69-utsav-luxe' || raw === '69-utsav' || raw === 'portfolio/69-utsav-luxe' || raw === 'portfolio/utsav-luxe' || raw === 'portfolio/utsav' || raw === 'site-69' || raw === 'site/69' || raw === 'demo-69' || raw === 'demo/utsav' || raw === 'references/utsav' || raw === 'references/meragi' || raw === 'site/69-utsav-luxe' || raw === 'site/utsav-luxe' || raw === 'utsavluxe.com' || raw === 'meragi') {
        setActiveViewInternal('utsav-luxe');
        setActiveSiteSlug('69-utsav-luxe');
      } else if (raw === 'devdas' || raw === 'devdas-wedding' || raw === 'devdaswedding' || raw === '68-devdas-wedding' || raw === '68-devdas' || raw === 'portfolio/68-devdas-wedding' || raw === 'portfolio/68-devdas' || raw === 'portfolio/devdas' || raw === 'site-68' || raw === 'site/68' || raw === 'demo-68' || raw === 'demo/devdas' || raw === 'references/devdas' || raw === 'site/68-devdas-wedding' || raw === 'site/devdas-wedding' || raw === 'site/devdas' || raw === 'destination-wedding' || raw === 'wedding-planner' || raw === 'devdaswedding.in') {
        setActiveViewInternal('devdas-wedding');
        setActiveSiteSlug('68-devdas-wedding');
      } else if (raw === 'livinto' || raw === 'livinto-interiors' || raw === 'livintointeriors' || raw === '67-livinto-interiors' || raw === '67-livinto' || raw === 'portfolio/67-livinto-interiors' || raw === 'portfolio/67-livinto' || raw === 'portfolio/livinto' || raw === 'site-67' || raw === 'site/67' || raw === 'demo-67' || raw === 'demo/livinto' || raw === 'references/livinto' || raw === 'site/67-livinto-interiors' || raw === 'site/livinto-interiors' || raw === 'site/livinto' || raw === 'interior-design' || raw === 'interior' || raw === 'modular-kitchen' || raw === 'livintointeriors.com') {
        setActiveViewInternal('livinto-interiors');
        setActiveSiteSlug('67-livinto-interiors');
      } else if (raw === 'skinsciene' || raw === 'skinsciene-naturals' || raw === 'skinscienenaturals' || raw === '66-skinsciene-naturals' || raw === 'portfolio/66-skinsciene-naturals' || raw === 'portfolio/skinsciene-naturals' || raw === 'portfolio/skinsciene' || raw === 'portfolio/65-skinsciene-naturals' || raw === 'site-66' || raw === 'site/66' || raw === 'demo-66' || raw === 'demo/skinsciene' || raw === 'references/skinsciene' || raw === 'site/66-skinsciene-naturals' || raw === 'site/skinsciene-naturals' || raw === 'site/skinsciene' || raw === 'dermatology' || raw === 'skin-clinic' || raw === 'skinscienedemo.in') {
        setActiveViewInternal('skinsciene-naturals');
        setActiveSiteSlug('66-skinsciene-naturals');
      } else if (raw === 'medicareplus' || raw === '65-medicareplus-hospital' || raw === 'portfolio/65-medicareplus-hospital' || raw === 'portfolio/medicareplus-hospital' || raw === 'portfolio/medicareplus' || raw === 'site-65' || raw === 'site/65' || raw === 'demo-65' || raw === 'demo/medicareplus' || raw === 'references/medicareplus' || raw === 'site/65-medicareplus-hospital' || raw === 'site/medicareplus-hospital' || raw === 'site/medicareplus' || raw === 'medicareplus-hospital' || raw === 'medicareplusdemo.in') {
        setActiveViewInternal('medicareplus');
        setActiveSiteSlug('65-medicareplus-hospital');
      } else if (raw === 'clinicbypeople' || raw === '64-clinicbypeople' || raw === 'portfolio/64-clinicbypeople' || raw === 'portfolio/clinicbypeople' || raw === 'site-64' || raw === 'site/64' || raw === 'demo-64' || raw === 'demo/clinicbypeople' || raw === 'references/clinicbypeople' || raw === 'site/64-clinicbypeople' || raw === 'site/clinicbypeople') {
        setActiveViewInternal('clinicbypeople');
        setActiveSiteSlug('64-clinicbypeople');
      } else if (raw === 'group-ach' || raw === 'group-ach-loan-solutions' || raw === 'portfolio/group-ach-loan-solutions' || raw === 'portfolio/group-ach' || raw === 'site-63' || raw === 'site/63' || raw === 'demo-63' || raw === 'demo/group-ach' || raw === 'achlinks' || raw === 'achlinks.in' || raw === 'references/group-ach' || raw === 'site/group-ach-loan-solutions' || raw === 'site/group-ach') {
        setActiveViewInternal('group-ach');
        setActiveSiteSlug('group-ach');
      } else if (raw === 'maheshwari' || raw === 'maheshwariandco' || raw === 'maheshwari-co' || raw === 'site-62' || raw === 'site/62' || raw === 'references/maheshwari' || raw === 'site/maheshwari' || raw === 'maheshwariandco.com') {
        setActiveViewInternal('maheshwari');
        setActiveSiteSlug('maheshwari');
      } else if (raw === 'lawlinks' || raw === 'lawlinks.in' || raw === 'law-links' || raw === 'site-61' || raw === 'site/61' || raw === 'references/lawlinks' || raw === 'site/lawlinks') {
        setActiveViewInternal('lawlinks');
        setActiveSiteSlug('lawlinks');
      } else if (raw === 'saveweb2zip' || raw === 'saveweb' || raw === 'web2zip' || raw === 'saveweb2zip.com' || raw === 'site-60' || raw === 'site/60' || raw === 'references/saveweb2zip' || raw === 'site/saveweb2zip') {
        setActiveViewInternal('saveweb2zip');
        setActiveSiteSlug('saveweb2zip');
      } else if (raw === 'raoz-motors' || raw === 'commercial-vehicles' || raw === 'trucks' || raw === 'buses' || raw === 'site/raoz-motors') {
        setActiveViewInternal('raoz-motors');
        setActiveSiteSlug('raoz-motors');
      } else if (raw === 'square-yard-dealers' || raw === 'squareyards' || raw === 'square-yards' || raw === 'real-estate' || raw === 'property-dealers' || raw === 'dealers' || raw === 'realestate' || raw === 'buy' || raw === 'rent' || raw === 'sell' || raw === 'projects' || raw === 'demo/square-yard-dealers' || raw === 'demos/square-yard-dealers' || raw === 'site/square-yard-dealers' || raw === 'references/square-yards') {
        setActiveViewInternal('square-yard-dealers');
        setActiveSiteSlug('square-yard-dealers');
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
    } else if (view === 'raozy-wedding-planner' || view === '71-raozy-wedding-planner') {
      setActiveSiteSlug('71-raozy-wedding-planner');
      window.location.hash = '/portfolio/71-raozy-wedding-planner';
    } else if (view === 'psr-venture-weddings' || view === '70-psr-venture-weddings') {
      setActiveSiteSlug('70-psr-venture-weddings');
      window.location.hash = '/portfolio/70-psr-venture-weddings';
    } else if (view === 'utsav-luxe' || view === '69-utsav-luxe') {
      setActiveSiteSlug('69-utsav-luxe');
      window.location.hash = '/portfolio/69-utsav-luxe';
    } else if (view === 'devdas-wedding') {
      setActiveSiteSlug('68-devdas-wedding');
      window.location.hash = '/portfolio/68-devdas-wedding';
    } else if (view === 'livinto-interiors') {
      setActiveSiteSlug('67-livinto-interiors');
      window.location.hash = '/portfolio/67-livinto-interiors';
    } else if (view === 'skinsciene-naturals') {
      setActiveSiteSlug('66-skinsciene-naturals');
      window.location.hash = '/portfolio/66-skinsciene-naturals';
    } else if (view === 'medicareplus') {
      setActiveSiteSlug('65-medicareplus-hospital');
      window.location.hash = '/portfolio/65-medicareplus-hospital';
    } else if (view === 'clinicbypeople') {
      setActiveSiteSlug('64-clinicbypeople');
      window.location.hash = '/portfolio/64-clinicbypeople';
    } else if (view === 'group-ach') {
      setActiveSiteSlug('group-ach');
      window.location.hash = '/portfolio/group-ach-loan-solutions';
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
      'auravoyage': 'dream-travels',
      'clinicbypeople': '64-clinicbypeople',
      'clinic-by-people': '64-clinicbypeople',
      '64-clinicbypeople': '64-clinicbypeople',
      'clinic': '64-clinicbypeople',
      'medicareplus': '65-medicareplus-hospital',
      'medicare-plus': '65-medicareplus-hospital',
      'medicareplus-hospital': '65-medicareplus-hospital',
      '65-medicareplus-hospital': '65-medicareplus-hospital',
      'hospital': '65-medicareplus-hospital',
      'skinsciene': '66-skinsciene-naturals',
      'skinsciene-naturals': '66-skinsciene-naturals',
      'skinscienenaturals': '66-skinsciene-naturals',
      '66-skinsciene-naturals': '66-skinsciene-naturals',
      '65-skinsciene-naturals': '66-skinsciene-naturals',
      'dermatology': '66-skinsciene-naturals',
      'skin-clinic': '66-skinsciene-naturals',
      'livinto': '67-livinto-interiors',
      'livinto-interiors': '67-livinto-interiors',
      'livintointeriors': '67-livinto-interiors',
      '67-livinto-interiors': '67-livinto-interiors',
      '67-livinto': '67-livinto-interiors',
      'interior-design': '67-livinto-interiors',
      'modular-kitchen': '67-livinto-interiors',
      'devdas': '68-devdas-wedding',
      'devdas-wedding': '68-devdas-wedding',
      'devdaswedding': '68-devdas-wedding',
      '68-devdas-wedding': '68-devdas-wedding',
      '68-devdas': '68-devdas-wedding',
      'destination-wedding': '68-devdas-wedding',
      'wedding-planner': '68-devdas-wedding',
      'psr': '70-psr-venture-weddings',
      'psr-venture': '70-psr-venture-weddings',
      'psr-venture-weddings': '70-psr-venture-weddings',
      'psr-weddings': '70-psr-venture-weddings',
      '70-psr-venture-weddings': '70-psr-venture-weddings',
      '70-psr': '70-psr-venture-weddings',
      'psrventureweddings': '70-psr-venture-weddings',
      '78-aurelia-resort': '78-aurelia-resort',
      'aurelia-resort': '78-aurelia-resort',
      'aurelia': '78-aurelia-resort',
      'anemos': '78-aurelia-resort',
      'anemos-goa': '78-aurelia-resort',
      '79-elysium-club': '79-elysium-club',
      'elysium-club': '79-elysium-club',
      'elysium': '79-elysium-club',
      'privee': '79-elysium-club',
      'privee-delhi': '79-elysium-club',
      '80-club-bw': '80-club-bw',
      'club-bw': '80-club-bw',
      'clubbw': '80-club-bw',
      'clubnoirblanc': '80-club-bw',
      'club-nb': '80-club-bw'
    };
    const target = aliasMap[clean] || clean;
    const found = websites.find(w => (w?.slug && (w.slug.toLowerCase() === clean || w.slug.toLowerCase() === target)) || (w?.id && (w.id.toLowerCase() === clean || w.id.toLowerCase() === target))) ||
      ALL_80_COLLECTION_WEBSITES.find(w => (w?.slug && (w.slug.toLowerCase() === clean || w.slug.toLowerCase() === target)) || (w?.id && (w.id.toLowerCase() === clean || w.id.toLowerCase() === target))) ||
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
