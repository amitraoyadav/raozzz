export type VehicleCategory = 'trucks' | 'buses' | 'special';

export type SubCategory =
  | 'lcv'
  | 'icv'
  | 'tipper'
  | 'cng'
  | 'school_bus'
  | 'staff_bus'
  | 'luxury_coach'
  | 'ambulance'
  | 'municipal'
  | 'defense_utility';

export interface VehicleSpec {
  engine: string;
  maxPower: string;
  maxTorque: string;
  displacement: string;
  emissionNorms: string;
  transmission: string;
  clutch: string;
  gvw: string;
  payload?: string;
  wheelbase: string;
  overallLength?: string;
  cargoDeckLength?: string;
  seatingCapacity?: string;
  fuelTank: string;
  fuelType: 'Diesel' | 'CNG' | 'Electric';
  brakes: string;
  steering: string;
  suspension: string;
  tyres: string;
  topSpeed?: string;
  gradeability?: string;
}

export interface CommercialVehicle {
  id: string;
  name: string;
  series: string;
  tagline: string;
  category: VehicleCategory;
  subCategory: SubCategory;
  subCategoryLabel: string;
  startingPrice: string;
  gvw: string;
  power: string;
  seatingOrPayload: string;
  fuelType: 'Diesel' | 'CNG' | 'Electric';
  applications: string[];
  image: string;
  highlights: string[];
  specs: VehicleSpec;
  overview: string;
  brochureUrl?: string;
}

export interface DealerNetworkItem {
  id: string;
  name: string;
  facilityType: '3S (Sales, Service, Spares)' | 'Authorized Showroom' | 'Authorized Service Workshop' | 'Spares Stockist';
  state: string;
  city: string;
  address: string;
  pincode: string;
  phone: string;
  email: string;
  timing: string;
  hasWorkshop: boolean;
  latitude?: number;
  longitude?: number;
}

export interface NewsItem {
  id: string;
  date: string;
  category: 'Corporate' | 'Product Launch' | 'Award' | 'Sustainability';
  title: string;
  excerpt: string;
  readTime: string;
  image: string;
}

export interface CareerOpening {
  id: string;
  title: string;
  department: 'Engineering & R&D' | 'Plant Operations & Manufacturing' | 'Sales & Dealer Development' | 'Customer Service';
  location: string;
  experience: string;
  type: 'Full Time';
  description: string;
}
