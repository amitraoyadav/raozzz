export interface TravelPackage {
  id: string;
  slug: string;
  title: string;
  region: 'Sikkim' | 'Himachal' | 'Kashmir' | 'Andaman' | 'Kerala' | 'Spiti' | 'Bhutan' | 'Leh Ladakh' | 'Thailand' | 'Uttarakhand' | 'Rajasthan';
  stateOrCountry: string;
  duration: string;
  days: number;
  nights: number;
  startingPrice: number;
  originalPrice: number;
  theme: 'Honeymoon' | 'Friends/Group' | 'Adventure' | 'Nature' | 'Solo' | 'Family';
  bestMonths: string[];
  rating: number;
  reviewsCount: number;
  featured: boolean;
  image: string;
  gallery: string[];
  overview: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: Array<{
    day: number;
    title: string;
    description: string;
    stayCity: string;
    meals: string;
  }>;
}

export interface DestinationChip {
  id: string;
  name: string;
  type: 'popular' | 'international' | 'trending';
  regionSlug: string;
  image: string;
  tourCount: number;
  startPrice: number;
}

export interface CountryCard {
  id: string;
  country: string;
  flag: string;
  image: string;
  packageCount: number;
  startingPrice: number;
  tagline: string;
}

export interface ThemeItem {
  id: string;
  name: 'Honeymoon' | 'Friends/Group' | 'Adventure' | 'Nature' | 'Solo' | 'Family';
  icon: string;
  destinationCount: number;
  image: string;
  description: string;
}

export interface SeasonDestination {
  id: string;
  name: string;
  region: string;
  image: string;
  startPrice: number;
  bestFor: string;
  weather: string;
}

export interface PlaceToExplore {
  id: string;
  name: string;
  region: string;
  image: string;
  tourCount: number;
  startPrice: number;
}

export interface MostVisitedPlace {
  region: string;
  places: Array<{ name: string; tag: string }>;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  author: string;
  summary: string;
  image: string;
  content: string[];
  tableData?: {
    headers: string[];
    rows: string[][];
  };
  faqs?: Array<{ question: string; answer: string }>;
}

export interface RegionInfo {
  name: string;
  slug: string;
  heroImage: string;
  tagline: string;
  description: string;
  bestSeason: string;
  idealDuration: string;
  topAttractions: string[];
  faqs: Array<{ question: string; answer: string }>;
}
