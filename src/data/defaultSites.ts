import { BusinessWebsite, PricingPlan, LeadEnquiry } from '../types';

export const DEFAULT_PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Website',
    price: 999,
    description: 'Perfect for small local shops, kiosks, and home-based service providers needing an online card & menu.',
    popular: false,
    timeline: 'Delivered in 24 Hours',
    features: [
      'Single-page modern responsive website',
      'Mobile-first layout with sticky Call & WhatsApp buttons',
      'Up to 15 products / services with prices in ₹',
      'Direct WhatsApp click-to-order button',
      'Direct Call Now button',
      'Google Maps location embed & directions',
      'Free high-speed cloud hosting (1 Year)',
      'Digital QR Code for shop counter & cards'
    ]
  },
  {
    id: 'professional',
    name: 'Professional Website',
    price: 1499,
    popular: true,
    description: 'Best for cafes, clinics, salons, laundries, and established stores wanting high mobile conversion.',
    timeline: 'Delivered in 48 Hours',
    features: [
      'Multi-section custom themed business website',
      'Category-specific booking engine (Pickup, Slot, Order, Table)',
      'Up to 40 items/services with categories, units & photos',
      'Doctor OPD timings or Salon service durations',
      'Promotional offers & discount countdowns',
      'Interactive photo gallery (interior, exterior, products)',
      'Instant Lead & Appointment booking form',
      'Google Maps directions & business hours widget',
      'Free high-speed cloud hosting (1 Year)',
      'Print-ready high-res QR code standee file'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Website',
    price: 1999,
    popular: false,
    description: 'For premium studios, multi-speciality clinics, fitness gyms, and ambitious Indian businesses.',
    timeline: 'Delivered in 3 Days',
    features: [
      'Comprehensive custom branded portal',
      'Unlimited products / services / menu items',
      'Custom domain connection support (e.g. yourbrand.in)',
      'Custom section order & toggle control',
      'Multiple doctor / trainer / stylist profiles',
      'Automated WhatsApp enquiry lead forwarding',
      'PWA support: Add to Home Screen as mobile app',
      'LocalBusiness Schema.org JSON-LD structured data',
      'Free high-speed cloud hosting (1 Year)',
      'Priority ongoing maintenance & price updates'
    ]
  }
];

// 19 Cafes
import { TWOD_WEBSITE } from './twoDCafeData';
import { BLUE_TOKAI_WEBSITE } from './blueTokaiData';
import { THIRD_WAVE_WEBSITE } from './thirdWaveCoffeeData';
import { CCD_WEBSITE } from './cafeCoffeeDayData';
import { SWEET_COFFEE_WEBSITE } from './sweetCoffeeData';
import { TIM_WENDELBOE_WEBSITE } from './timWendelboeData';
import { ONYX_WEBSITE } from './onyxCoffeeData';
import { CITY_BREW_WEBSITE } from './cityBrewData';
import { GREGORYS_WEBSITE } from './gregorysCoffeeData';
import { RUBYS_WEBSITE } from './rubysCafeData';
import { BREWED_WEBSITE } from './brewedCoffeeData';
import { GREENBERRYS_WEBSITE } from './greenberrysData';
import { MEAN_MUG_WEBSITE } from './meanMugCoffeeData';
import { REVIVAL_WEBSITE } from './revivalCafeData';
import { BREW_BLOOM_WEBSITE } from './brewBloomData';
import { AMERICAN_PROVISIONS_WEBSITE } from './americanProvisionsData';
import { MOJO_WEBSITE } from './mojoCoffeeData';
import { SWEETWATERS_WEBSITE } from './sweetwatersData';
import { BENNE_WEBSITE } from './benneData';

// 10 Restaurants
import { BARBEQUE_NATION_WEBSITE } from './barbequeNationData';
import { NANDOS_WEBSITE } from './nandosData';
import { MAINLAND_CHINA_WEBSITE } from './mainlandChinaData';
import { OH_CALCUTTA_WEBSITE } from './ohCalcuttaData';
import { PUNJAB_GRILL_WEBSITE } from './punjabGrillData';
import { BIKANERVALA_WEBSITE } from './bikanervalaData';
import { SAGAR_RATNA_WEBSITE } from './sagarRatnaData';
import { KARIMS_WEBSITE } from './karimsData';
import { AL_BAIK_WEBSITE } from './alBaikData';
import { MR_IDLI_WEBSITE } from './mrIdliData';

// 7 Tour & Travel
import { TOUR_TRAVEL_2_WEBSITE } from './tourTravel2Website';
import { BRIO_TRAVELS_WEBSITE } from './brioTravelsWebsite';
import { DREAM_TRAVELS_WEBSITE } from './dreamToTravelsData';
import { SOUTHERN_TRAVELS_WEBSITE } from './southernTravelsData';
import { SRM_HOLIDAYS_WEBSITE } from './srmHolidaysData';
import { ITDC_TRAVELS_WEBSITE } from './itdcTravelsData';
import { TRAVEL_ART_WEBSITE } from './travelArtData';

// 2 Salon (Bodycraft as site #37, Home Salon as site #38)
import { BODYCRAFT_WEBSITE } from './bodycraftData';
import { HOME_SALON_WEBSITE } from './homeSalonData';

// User's active 38 Reference Websites faithfully recreated
export const DEFAULT_WEBSITES: BusinessWebsite[] = [
  // 1-19: Cafes (19)
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
  BENNE_WEBSITE,

  // 20-29: Restaurants (10)
  BARBEQUE_NATION_WEBSITE,
  NANDOS_WEBSITE,
  MAINLAND_CHINA_WEBSITE,
  OH_CALCUTTA_WEBSITE,
  PUNJAB_GRILL_WEBSITE,
  BIKANERVALA_WEBSITE,
  SAGAR_RATNA_WEBSITE,
  KARIMS_WEBSITE,
  AL_BAIK_WEBSITE,
  MR_IDLI_WEBSITE,

  // 30-36: Tour & Travel (7)
  TOUR_TRAVEL_2_WEBSITE,
  BRIO_TRAVELS_WEBSITE,
  DREAM_TRAVELS_WEBSITE,
  SOUTHERN_TRAVELS_WEBSITE,
  SRM_HOLIDAYS_WEBSITE,
  ITDC_TRAVELS_WEBSITE,
  TRAVEL_ART_WEBSITE,

  // 37-38: Salon (2)
  BODYCRAFT_WEBSITE,
  HOME_SALON_WEBSITE
];

export const INITIAL_LEADS: LeadEnquiry[] = [];
