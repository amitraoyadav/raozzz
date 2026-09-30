export type BusinessCategory =
  | 'cafe'
  | 'clinic'
  | 'salon'
  | 'jewellery'
  | 'beauty_cosmetics'
  | 'gym'
  | 'gym_fitness'
  | 'retail'
  | 'hotel'
  | 'coaching'
  | 'sweets'
  | 'services'
  | 'kirana'
  | 'repair'
  | 'laundry'
  | 'restaurant'
  | 'electrician'
  | 'plumber'
  | 'tailor'
  | 'pharmacy'
  | 'driving'
  | 'photography'
  | 'events'
  | 'pets'
  | 'locksmith'
  | 'computer'
  | 'hardware'
  | 'furniture'
  | 'bakery'
  | 'icecream'
  | 'carwash'
  | 'realestate'
  | 'travel'
  | 'tiffin'
  | 'florist'
  | 'printing'
  | 'construction'
  // 42 Extended Business Categories:
  | 'ca_tax'
  | 'lawyer'
  | 'interior_design'
  | 'architect'
  | 'banquet_hall'
  | 'packers_movers'
  | 'ac_repair'
  | 'cctv_security'
  | 'vet_clinic'
  | 'preschool_daycare'
  | 'astrologer_pooja'
  | 'arts_academy'
  | 'auto_showroom'
  | 'solar_installer'
  | 'painting_contractor'
  | 'jewellery_shop'
  | 'optical_shop'
  | 'ro_water_purifier'
  | 'pest_control'
  | 'courier_delivery'
  | 'home_baker'
  | 'notary_legal'
  | 'insurance_agent'
  | 'loan_dsa'
  | 'telecom_recharge'
  | 'gift_stationery'
  | 'toy_shop'
  | 'sports_shop'
  | 'cycle_repair'
  | 'auto_garage'
  | 'vehicle_scrapping'
  | 'cab_taxi_rental'
  | 'physiotherapy'
  | 'musical_instruments'
  | 'bookshop_library'
  | 'curtain_upholstery'
  | 'plant_nursery'
  | 'bridal_makeup'
  | 'cold_storage_warehouse'
  | 'school_transport'
  | 'dance_fitness'
  | 'pathology_lab'
  // 12 New Distinct Demo Categories:
  | 'gaming_cafe'
  | 'escape_room'
  | 'tattoo_studio'
  | 'home_tutor'
  | 'drone_service'
  | 'organic_farm'
  | 'coworking_space'
  | 'party_rental'
  | 'corporate_gifting'
  | 'handicraft_store'
  | 'rooftop_cafe'
  | 'office_tiffin'
  | (string & {});

export type BookingPatternType =
  | 'pickup_drop'
  | 'appointment_slot'
  | 'whatsapp_order'
  | 'reservation_party'
  | 'table_reservation'
  | 'slot_booking'
  | 'consultation_quote'
  | 'subscription_order'
  | 'general';

export type WebsiteStatus = 'draft' | 'pending_approval' | 'published' | 'archived';

export interface ItemOrService {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  category: string;
  imageUrl?: string;
  image?: string;
  isAvailable?: boolean;
  badge?: string;
  isVeg?: boolean;
  duration?: string;
  doctorQualification?: string;
  doctorExperience?: string;
  doctorOpdTimings?: string;
  productBadge?: string;
  isFeatured?: boolean;
  unit?: string; // e.g. "per kg", "per visit", "per month", "per piece"
  specifications?: string;
  registrationNo?: string;
  turnaroundTime?: string;
  capacityDetails?: string;
  popular?: boolean;
}

export interface WebsiteOffer {
  id: string;
  title: string;
  description: string;
  discountPercent?: number;
  couponCode?: string;
  discount?: string;
  code?: string;
  validTill?: string;
  startDate?: string;
  endDate?: string;
  isActive?: boolean;
}

export interface GalleryImage {
  id: string;
  title?: string;
  category: 'exterior' | 'interior' | 'products' | 'food' | 'staff' | 'facilities' | 'general' | 'events' | 'coffee' | 'bakery' | 'sandwiches' | (string & {});
  imageUrl: string;
}

export interface SectionConfig {
  id: string;
  title: string;
  isEnabled: boolean;
  order: number;
}

export interface CustomDomainConfig {
  domain: string;
  status: 'unconfigured' | 'pending_verification' | 'active';
  cnameTarget?: string;
  verifiedAt?: string;
}

export interface BusinessWebsite {
  id: string;
  slug: string;
  businessName: string;
  category: BusinessCategory;
  templateId: string;
  tagline: string;
  description?: string;
  ownerName?: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  city?: string;
  mapsUrl: string;
  openingHours: string;
  instagramUrl?: string;
  facebookUrl?: string;
  logoUrl?: string;
  coverUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;
  fontFamily?: string;
  bookingType: BookingPatternType;
  bookingCtaLabel: string;
  specialBadge?: string;
  siteTypeTag?: string;
  dribbbleInspiration?: string;
  tradeModel?: string;
  deliveryRadius?: string;
  referenceId?: string;
  referenceSiteId?: string;
  referenceSiteName?: string;
  referenceSiteUrl?: string;
  referenceFeatures?: string;
  blueprint?: any;
  ctaText?: string;
  designTokens?: any;
  designSignature?: any;
  designBlueprint?: import('./referenceDesign').ReferenceDesignBlueprint;
  referenceScreenshotUrl?: string;
  inspectionStatus?: import('./referenceDesign').InspectionStatus;
  items: ItemOrService[];
  offers: WebsiteOffer[];
  gallery: GalleryImage[];
  sections: SectionConfig[];
  status: WebsiteStatus;
  customDomain?: CustomDomainConfig;
  pricingPlanId: 'starter' | 'professional' | 'premium';
  amountPaid: number;
  paymentStatus: 'paid' | 'pending' | 'unpaid';
  userId?: string;
  userEmail?: string;
  state?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  viewsCount?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface LeadEnquiry {
  id: string;
  websiteSlug: string;
  businessName: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  message: string;
  serviceRequested?: string;
  preferredDate?: string;
  preferredTime?: string;
  pickupAddress?: string;
  deviceBrandModel?: string;
  partySize?: number;
  bookingType?: BookingPatternType;
  ticketNumber?: string;
  status: 'new' | 'contacted' | 'converted' | 'closed';
  createdAt: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  popular?: boolean;
  description: string;
  features: string[];
  timeline: string;
}

export interface TemplateDefinition {
  id: string;
  name: string;
  category: BusinessCategory;
  description: string;
  style: string;
  thumbnail: string;
  themeColor: string;
  accentColor: string;
  fontFamily: string;
  vibe: string;
}

export interface UserSettings {
  adminEmail: string;
  operatorPhone: string;
  currencySymbol: string;
  domainCnameTarget: string;
  platformName: string;
  updatedAt: string;
}

export interface DiscountLead {
  id: string;
  name: string;
  phone: string;
  couponCode: string;
  discountPercent: number;
  status: 'new' | 'contacted' | 'redeemed';
  expiresAt: string;
  createdAt: string;
}

export interface RealEstateProperty {
  id: string;
  title: string;
  slug: string;
  price: number;
  priceFormatted: string;
  propertyType: 'Luxury Apartment' | 'High-Street Retail' | 'Penthouse' | 'Independent Villa' | 'Commercial Office';
  bhk: '1 BHK' | '2 BHK' | '3 BHK' | '4 BHK' | 'Commercial';
  location: string;
  city: string;
  areaSqFt: number;
  status: 'Ready to Move' | 'Under Construction' | 'Newly Launched';
  description: string;
  images: string[];
  amenities: string[];
  floorPlanUrl: string;
  reraNumber: string;
  agentName: string;
  agentPhone: string;
  isFeatured?: boolean;
}

export interface WebsiteRequest {
  id: string;
  businessName: string;
  category: string;
  ownerName: string;
  phone: string;
  city: string;
  notes?: string;
  status: 'New' | 'Contacted' | 'In Discussion' | 'Converted' | 'Closed';
  createdAt: string;
}

export * from './referenceDesign';
