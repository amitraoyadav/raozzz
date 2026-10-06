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

// 3 Salon (Bodycraft as site #37, Home Salon as site #38, DESSANGE Mumbai as site #39)
import { BODYCRAFT_WEBSITE } from './bodycraftData';
import { HOME_SALON_WEBSITE } from './homeSalonData';
import { DESSANGE_MUMBAI_WEBSITE } from './dessangeData';

// 4 Jewellery (Tanishq as site #40, Jewelbox as site #41, Krishna Jewellers as site #45, Hazoorilal Jewellers as site #46)
import { TANISHQ_WEBSITE } from './tanishqData';
import { JEWELBOX_WEBSITE } from './jewelboxData';
import { KRISHNA_JEWELLERS_WEBSITE } from './krishnaJewellersData';
import { HAZOORILAL_WEBSITE } from './hazoorilalData';

// 1 Beauty & Cosmetics (Beauty Berry as site #42)
import { BEAUTY_BERRY_WEBSITE } from './beautyBerryData';

// 2 Gym & Fitness (Gold's Gym as site #43, FITPASS as site #44)
import { GOLDS_GYM_WEBSITE } from './goldsGymData';
import { FITPASS_WEBSITE } from './fitpassData';

// 47-80: Remaining categories & sites
import { SABKA_LOANS_WEBSITE } from './sabkaLoansData';
import { SABKA_FINANCE_WEBSITE } from './sabkaFinanceData';
import { SQUARE_YARD_DEALERS_WEBSITE } from './squareYardDealersData';
import { CHOUDHARY_REALESTATE_WEBSITE } from './choudharyRealestateData';
import { DLC_GROUP_WEBSITE } from './dlcGroupData';
import { RAOZ_PROPERTIES_WEBSITE } from './raozPropertiesData';
import { RAOZ_BAZAAR_WEBSITE } from './raozBazaarData';
import { RAOZ_WEDDINGS_WEBSITE } from './raozWeddingsData';
import { SMLW_WEDDINGS_WEBSITE } from './smlwWeddingsData';
import { RATHORE_WEDDINGS_WEBSITE } from './rathoreWeddingsData';
import { ALL_IN_ONE_DESTINATION_WEDDINGS_WEBSITE } from './allInOneDestinationWeddingsData';
import { LUXESPACE_WEBSITE } from './luxeSpaceWebsiteData';
import { SAVEWEB2ZIP_WEBSITE } from './saveWeb2ZipWebsiteData';
import { LAWLINKS_WEBSITE } from './lawlinksWebsiteData';
import { MAHESHWARI_WEBSITE } from './maheshwariWebsiteData';
import { RAOZ_MOTORS_WEBSITE } from './raozMotorsData';
import { GROUP_ACH_WEBSITE } from './groupAchData';
import { CLINICBYPEOPLE_WEBSITE } from './clinicByPeopleData';
import { MEDICAREPLUS_WEBSITE } from './medicarePlusData';
import { SKINSCIENE_WEBSITE } from './skinScieneData';
import { LIVINTO_WEBSITE } from './livintoInteriorsData';
import { DEVDAS_WEBSITE } from './devdasWeddingData';
import { UTSAV_LUXE_WEBSITE } from './utsavLuxeData';
import { PSR_VENTURE_WEDDINGS_WEBSITE } from './psrWeddingsData';
import { RAOZY_WEDDING_WEBSITE } from './raozyWeddingData';
import { GLOBAL_PLANNERSS_WEBSITE } from './globalPlannerssData';
import { RAOZ_WEDDING_HUB_WEBSITE } from './raozWeddingHubData';
import { SITE_74_WEBSITE } from './site74Data';
import { SITE_75_WEBSITE } from './site75Data';
import { SITE_76_WEBSITE } from './site76Data';
import { SITE_77_WEBSITE } from './site77Data';
import { SITE_78_WEBSITE } from './site78Data';
import { SITE_79_WEBSITE } from './site79Data';
import { SITE_80_WEBSITE } from './site80Data';

// User's active 80 Reference Websites faithfully recreated
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

  // 37-39: Salon (3)
  BODYCRAFT_WEBSITE,
  HOME_SALON_WEBSITE,
  DESSANGE_MUMBAI_WEBSITE,

  // 40-41: Jewellery (2)
  TANISHQ_WEBSITE,
  JEWELBOX_WEBSITE,

  // 42: Beauty & Cosmetics (1)
  BEAUTY_BERRY_WEBSITE,

  // 43-44: Gym & Fitness (2)
  GOLDS_GYM_WEBSITE,
  FITPASS_WEBSITE,

  // 45-46: Jewellery (3rd & 4th in Jewellery category)
  KRISHNA_JEWELLERS_WEBSITE,
  HAZOORILAL_WEBSITE,

  // 47-48: Loans & Finance (2)
  SABKA_LOANS_WEBSITE,
  SABKA_FINANCE_WEBSITE,

  // 49-53: Real Estate (5)
  SQUARE_YARD_DEALERS_WEBSITE,
  CHOUDHARY_REALESTATE_WEBSITE,
  DLC_GROUP_WEBSITE,
  RAOZ_PROPERTIES_WEBSITE,
  RAOZ_BAZAAR_WEBSITE,

  // 54-56: Weddings (3)
  RAOZ_WEDDINGS_WEBSITE,
  SMLW_WEDDINGS_WEBSITE,
  RATHORE_WEDDINGS_WEBSITE,

  // 57-60: Destination Weddings, LuxeSpace, Web Tools, Vehicles (4)
  ALL_IN_ONE_DESTINATION_WEDDINGS_WEBSITE,
  LUXESPACE_WEBSITE,
  SAVEWEB2ZIP_WEBSITE,
  RAOZ_MOTORS_WEBSITE,

  // 61-63: Legal & Corporate Finance (3)
  LAWLINKS_WEBSITE,
  MAHESHWARI_WEBSITE,
  GROUP_ACH_WEBSITE,

  // 64-67: Healthcare & Interiors (4)
  CLINICBYPEOPLE_WEBSITE,
  MEDICAREPLUS_WEBSITE,
  SKINSCIENE_WEBSITE,
  LIVINTO_WEBSITE,

  // 68-73: Wedding Planners & Hubs (6)
  DEVDAS_WEBSITE,
  UTSAV_LUXE_WEBSITE,
  PSR_VENTURE_WEDDINGS_WEBSITE,
  RAOZY_WEDDING_WEBSITE,
  GLOBAL_PLANNERSS_WEBSITE,
  RAOZ_WEDDING_HUB_WEBSITE,

  // 74-80: Grandeur, Aura, Aranya, Nocturna, Aurelia, Elysium, Noir Blanc (7)
  SITE_74_WEBSITE,
  SITE_75_WEBSITE,
  SITE_76_WEBSITE,
  SITE_77_WEBSITE,
  SITE_78_WEBSITE,
  SITE_79_WEBSITE,
  SITE_80_WEBSITE
];

export const INITIAL_LEADS: LeadEnquiry[] = [];
