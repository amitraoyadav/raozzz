import { doc, getDoc, setDoc, getDocs, collection, query, where } from 'firebase/firestore';
import { db, auth, handleFirestoreError, OperationType } from '../firebase';
import { DEFAULT_WEBSITES, DEFAULT_PRICING_PLANS } from '../data/defaultSites';
import { BusinessWebsite, PricingPlan } from '../types';

export interface FirestoreInitStatus {
  websitesCount: number;
  plansCount: number;
  settingsInitialized: boolean;
  isSeeded: boolean;
  message: string;
}

export const DEFAULT_USER_SETTINGS = {
  adminEmail: 'raoamityadavak123@gmail.com',
  operatorPhone: '+91 98765 43210',
  currencySymbol: '₹',
  domainCnameTarget: 'cname.raositez.in',
  platformName: 'RaoSitez',
  updatedAt: new Date().toISOString()
};

/**
 * Ensures initial Firestore collections structure exists for:
 * 1. websites (/websites/{slug})
 * 2. pricing_plans (/pricing_plans/{planId})
 * 3. settings (/settings/general)
 */
export async function initializeFirestoreCollections(force: boolean = false): Promise<FirestoreInitStatus> {
  const status: FirestoreInitStatus = {
    websitesCount: 0,
    plansCount: 0,
    settingsInitialized: false,
    isSeeded: false,
    message: ''
  };

  const isAdmin = Boolean(auth.currentUser && auth.currentUser.email === DEFAULT_USER_SETTINGS.adminEmail);

  try {
    // 1. Setup /settings/general
    const settingsRef = doc(db, 'settings', 'general');
    const settingsSnap = await getDoc(settingsRef);
    if ((!settingsSnap.exists() || force) && isAdmin) {
      await setDoc(settingsRef, {
        ...DEFAULT_USER_SETTINGS,
        updatedAt: new Date().toISOString()
      }, { merge: true });
      status.settingsInitialized = true;
    } else {
      status.settingsInitialized = settingsSnap.exists();
    }

    // 2. Setup /pricing_plans
    const plansSnap = await getDocs(collection(db, 'pricing_plans'));
    if ((plansSnap.empty || force) && isAdmin) {
      for (const plan of DEFAULT_PRICING_PLANS) {
        await setDoc(doc(db, 'pricing_plans', plan.id), {
          ...plan,
          updatedAt: new Date().toISOString()
        });
      }
      status.plansCount = DEFAULT_PRICING_PLANS.length;
    } else {
      status.plansCount = plansSnap.size;
    }

    // 3. Setup /websites
    const websiteQuery = isAdmin
      ? collection(db, 'websites')
      : query(collection(db, 'websites'), where('status', '==', 'published'));
    const websitesSnap = await getDocs(websiteQuery);

    if ((websitesSnap.empty || force) && isAdmin) {
      for (const site of DEFAULT_WEBSITES) {
        await setDoc(doc(db, 'websites', site.slug), {
          ...site,
          updatedAt: new Date().toISOString()
        });
      }
      status.websitesCount = DEFAULT_WEBSITES.length;
      status.isSeeded = true;
      status.message = `Successfully initialized Firestore collections: ${DEFAULT_WEBSITES.length} websites, ${DEFAULT_PRICING_PLANS.length} pricing plans, and general user settings.`;
    } else {
      status.websitesCount = websitesSnap.size;
      status.isSeeded = websitesSnap.size > 0;
      status.message = `Firestore collections active: ${websitesSnap.size} websites, ${status.plansCount} pricing plans, and settings connected.`;
    }

    return status;
  } catch (error: any) {
    if (error?.code !== 'unavailable' && !error?.message?.includes('the client is offline')) {
      handleFirestoreError(error, OperationType.GET, 'initializeFirestoreCollections');
    }
    status.message = `Firestore initialization active with offline cache fallback: ${error instanceof Error ? error.message : String(error)}`;
    return status;
  }
}
