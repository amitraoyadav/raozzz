export interface BrioTourPackage {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'domestic' | 'international' | 'honeymoon' | 'taj-mahal';
  duration: string;
  nights: number;
  days: number;
  startingPrice: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  coverImage: string;
  galleryImages: string[];
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

export interface BrioVehicle {
  id: string;
  name: string;
  type: string;
  seats: string;
  ac: string;
  luggage: string;
  ratePerKm: string;
  dailyRate: string;
  image: string;
  features: string[];
}

export interface BrioBlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  author: string;
  summary: string;
  image: string;
  content: string[];
}

export interface BrioTestimonial {
  id: string;
  name: string;
  location: string;
  tour: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}
