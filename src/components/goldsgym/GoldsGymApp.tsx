import React, { useState, useEffect, useMemo } from 'react';
import {
  Sparkles,
  ShoppingBag,
  Award,
  ShieldCheck,
  MapPin,
  Calendar,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  ArrowRight,
  Filter,
  Search,
  Dumbbell,
  Users,
  Briefcase,
  Play,
  Star,
  ExternalLink,
  ChevronRight,
  Compass,
  Check,
  Building,
  Activity,
  Flame,
  Zap,
  Globe
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import { GoldsGymHeader } from './GoldsGymHeader';
import { GoldsGymFooter } from './GoldsGymFooter';
import {
  GoldsGymCartDrawer,
  GoldsGymCheckoutModal,
  GoldsGymSearchModal,
  GoldsGymFreeTrialModal,
  GoldsGymDetailModal,
  GoldsGymCourseModal,
  GoldsGymBlogModal,
  GoldsGymCartItem
} from './GoldsGymModals';
import {
  GoldsGymLocation,
  GoldsGymCourse,
  GoldsGymBlog,
  GOLDS_GYM_LOCATIONS,
  GOLDS_GYM_COURSES,
  GOLDS_GYM_PROGRAMS,
  GOLDS_GYM_MEMBERSHIP_PLANS,
  GOLDS_GYM_BLOGS,
  GOLDS_GYM_TESTIMONIALS,
  GOLDS_GYM_EVENTS,
  GOLDS_GYM_GALLERY_IMAGES,
  GOLDS_GYM_WEBSITE
} from '../../data/goldsGymData';

export const GoldsGymApp: React.FC = () => {
  // Navigation State
  const [activeTab, setActiveTab] = useState<string>('home');

  // Gym Locator State
  const [selectedState, setSelectedState] = useState<string>('all');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [selectedFormat, setSelectedFormat] = useState<string>('all');
  const [gymSearchQuery, setGymSearchQuery] = useState<string>('');
  const [selectedGym, setSelectedGym] = useState<GoldsGymLocation | null>(null);

  // Cart & Commerce State
  const [cart, setCart] = useState<GoldsGymCartItem[]>([
    {
      id: 'cart-init-membership',
      title: "Gold's Gym 1-Year Annual Classic Membership",
      subtitle: 'Unlimited Access + 14 Free Travel Passes',
      category: 'Membership',
      price: 32000,
      duration: '12 Months',
      gymLocation: "Gold's Gym Mumbai Bandra",
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80'
    }
  ]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [freeTrialOpen, setFreeTrialOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<GoldsGymCourse | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<GoldsGymBlog | null>(null);
  const [galleryCategory, setGalleryCategory] = useState<string>('all');

  // Hero Slider State
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: 'Free Trial Workout Pass',
      subtitle: 'Built By Gold’s Fitness Experience · 150+ Clubs in India',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=80',
      ctaText: 'Claim Free Trial',
      action: () => setFreeTrialOpen(true)
    },
    {
      id: 2,
      title: 'Become a Certified Personal Trainer',
      subtitle: 'GGFI Diploma with 100% Placement Assistance at Gold’s Gym',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1800&q=80',
      ctaText: 'Explore GGFI Courses',
      action: () => setActiveTab('ggfi')
    },
    {
      id: 3,
      title: 'Annual Classic & All-India Passport',
      subtitle: 'Workout Across 95 Indian Cities with Domestic & Global Travel Privileges',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1800&q=80',
      ctaText: 'Buy Membership Now',
      action: () => setActiveTab('membership')
    }
  ];

  // Auto-play hero slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Cart actions
  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as GoldsGymCartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const handleAddGymMembership = (gym: GoldsGymLocation, planType: 'annual' | 'monthly') => {
    const isAnnual = planType === 'annual';
    const newItem: GoldsGymCartItem = {
      id: `cart-gym-${gym.id}-${planType}`,
      title: `${gym.name} (${isAnnual ? 'Annual Classic' : '1-Month Pass'})`,
      subtitle: `Format: ${gym.gymType}`,
      category: 'Membership',
      price: isAnnual ? gym.annualPrice : gym.monthlyPrice,
      duration: isAnnual ? '12 Months' : '1 Month',
      gymLocation: `${gym.name}, ${gym.city}`,
      quantity: 1,
      image: gym.featuredImage
    };

    setCart((prev) => {
      const exists = prev.find((i) => i.id === newItem.id);
      if (exists) {
        return prev.map((i) => (i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, newItem];
    });

    setCartOpen(true);
  };

  const handleAddCourse = (course: GoldsGymCourse) => {
    const newItem: GoldsGymCartItem = {
      id: `cart-course-${course.id}`,
      title: course.title,
      subtitle: `${course.code} · ${course.duration}`,
      category: 'Course',
      price: course.price,
      duration: course.duration,
      quantity: 1,
      image: course.image
    };

    setCart((prev) => {
      const exists = prev.find((i) => i.id === newItem.id);
      if (exists) {
        return prev.map((i) => (i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, newItem];
    });

    setCartOpen(true);
  };

  // Filtered Gyms for Locator
  const filteredGyms = useMemo(() => {
    return GOLDS_GYM_LOCATIONS.filter((gym) => {
      if (selectedState !== 'all' && gym.state !== selectedState) return false;
      if (selectedCity !== 'all' && gym.city !== selectedCity) return false;
      if (selectedFormat !== 'all' && gym.gymType !== selectedFormat) return false;
      if (gymSearchQuery.trim()) {
        const q = gymSearchQuery.toLowerCase().trim();
        const matchName = gym.name.toLowerCase().includes(q);
        const matchCity = gym.city.toLowerCase().includes(q);
        const matchState = gym.state.toLowerCase().includes(q);
        const matchAddress = gym.address.toLowerCase().includes(q);
        return matchName || matchCity || matchState || matchAddress;
      }
      return true;
    });
  }, [selectedState, selectedCity, selectedFormat, gymSearchQuery]);

  // Unique lists for filters
  const uniqueStates = useMemo(() => {
    return Array.from(new Set(GOLDS_GYM_LOCATIONS.map((g) => g.state))).sort();
  }, []);

  const uniqueCities = useMemo(() => {
    const pool = selectedState === 'all'
      ? GOLDS_GYM_LOCATIONS
      : GOLDS_GYM_LOCATIONS.filter((g) => g.state === selectedState);
    return Array.from(new Set(pool.map((g) => g.city))).sort();
  }, [selectedState]);

  // Contact form submission state
  const [contactSubmitted, setContactSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white text-stone-900 font-['Montserrat',sans-serif] flex flex-col selection:bg-[#FFE400] selection:text-black">
      {/* 1. Global Floating Reference Site Switcher */}
      <ReferenceSiteSwitcher currentSiteId="golds-gym" />

      {/* 2. Gold's Gym Header */}
      <GoldsGymHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={cart.reduce((a, b) => a + b.quantity, 0)}
        cartTotal={cart.reduce((a, b) => a + b.price * b.quantity, 0)}
        onOpenCart={() => setCartOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenFreeTrial={() => setFreeTrialOpen(true)}
      />

      {/* 3. Main Views Content */}
      <main className="flex-1">
        {/* ============================================================== */}
        {/* VIEW 1: HOMEPAGE (Exact Reference Structure)                   */}
        {/* ============================================================== */}
        {activeTab === 'home' && (
          <div>
            {/* HERO SLIDER (Authentic Banners) */}
            <section className="relative w-full bg-black overflow-hidden h-[450px] sm:h-[500px] lg:h-[550px]">
              {heroSlides.map((slide, idx) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>

                  <div className="absolute inset-0 max-w-7xl mx-auto px-6 flex flex-col justify-center text-white">
                    <div className="max-w-2xl space-y-4">
                      <span className="text-xs font-black uppercase tracking-widest px-3 py-1 bg-[#FFE400] text-black inline-block rounded">
                        Gold's Gym India
                      </span>
                      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-sm sm:text-base text-stone-300 font-medium leading-relaxed">
                        {slide.subtitle}
                      </p>
                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <button
                          onClick={slide.action}
                          className="bg-[#FFE400] hover:bg-white text-black font-extrabold text-xs uppercase px-7 py-3.5 rounded-full transition-all cursor-pointer shadow-lg tracking-wider"
                        >
                          {slide.ctaText}
                        </button>
                        <button
                          onClick={() => setActiveTab('gyms')}
                          className="border-2 border-white hover:bg-white hover:text-black text-white font-extrabold text-xs uppercase px-6 py-3.5 rounded-full transition-all cursor-pointer tracking-wider"
                        >
                          Find A Gym Near You
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Slider Dots */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      idx === currentSlide ? 'w-8 bg-[#FFE400]' : 'w-2 bg-white/50'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </section>

            {/* WHAT MAKES US DIFFERENT THAN OTHERS (Stats Grid) */}
            <section className="py-14 bg-white border-b border-stone-200">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black mb-2">
                  What Makes Us <span className="text-black font-extrabold">Different Than Others</span>
                </h2>
                <div className="w-16 h-1 bg-[#FFE400] mx-auto mb-10"></div>

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
                  {/* Stat 1 */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 shadow-xs text-center hover:border-black transition-all group">
                    <div className="w-12 h-12 rounded-full bg-[#FFFDE5] text-amber-600 flex items-center justify-center mx-auto mb-2 font-black text-sm group-hover:scale-110 transition-transform">
                      <Building className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-black text-black block">156</span>
                    <span className="text-xs font-bold text-stone-600 uppercase">Gyms</span>
                  </div>

                  {/* Stat 2 */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 shadow-xs text-center hover:border-black transition-all group">
                    <div className="w-12 h-12 rounded-full bg-[#FFFDE5] text-amber-600 flex items-center justify-center mx-auto mb-2 font-black text-sm group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-black text-black block">95</span>
                    <span className="text-xs font-bold text-stone-600 uppercase">Cities</span>
                  </div>

                  {/* Stat 3 */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 shadow-xs text-center hover:border-black transition-all group">
                    <div className="w-12 h-12 rounded-full bg-[#FFFDE5] text-amber-600 flex items-center justify-center mx-auto mb-2 font-black text-sm group-hover:scale-110 transition-transform">
                      <Globe className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-black text-black block">26</span>
                    <span className="text-xs font-bold text-stone-600 uppercase">States</span>
                  </div>

                  {/* Stat 4 */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 shadow-xs text-center hover:border-black transition-all group">
                    <div className="w-12 h-12 rounded-full bg-[#FFFDE5] text-amber-600 flex items-center justify-center mx-auto mb-2 font-black text-sm group-hover:scale-110 transition-transform">
                      <Dumbbell className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-extrabold text-black block leading-tight mt-1">
                      Personal Training
                    </span>
                    <span className="text-[10px] text-stone-500 font-semibold">1-on-1 Results</span>
                  </div>

                  {/* Stat 5 */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 shadow-xs text-center hover:border-black transition-all group">
                    <div className="w-12 h-12 rounded-full bg-[#FFFDE5] text-amber-600 flex items-center justify-center mx-auto mb-2 font-black text-sm group-hover:scale-110 transition-transform">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-extrabold text-black block leading-tight mt-1">
                      Corporate Wellness
                    </span>
                    <span className="text-[10px] text-stone-500 font-semibold">500+ Companies</span>
                  </div>

                  {/* Stat 6 */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 shadow-xs text-center hover:border-black transition-all group">
                    <div className="w-12 h-12 rounded-full bg-[#FFFDE5] text-amber-600 flex items-center justify-center mx-auto mb-2 font-black text-sm group-hover:scale-110 transition-transform">
                      <Users className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-extrabold text-black block leading-tight mt-1">
                      Group Exercise
                    </span>
                    <span className="text-[10px] text-stone-500 font-semibold">GGX Studio</span>
                  </div>

                  {/* Stat 7 */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 shadow-xs text-center hover:border-black transition-all group">
                    <div className="w-12 h-12 rounded-full bg-[#FFFDE5] text-amber-600 flex items-center justify-center mx-auto mb-2 font-black text-sm group-hover:scale-110 transition-transform">
                      <Compass className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-extrabold text-black block leading-tight mt-1">
                      Travel Pass
                    </span>
                    <span className="text-[10px] text-stone-500 font-semibold">Domestic & Global</span>
                  </div>
                </div>
              </div>
            </section>

            {/* OUR LEGACY SECTION (Venice Beach, CA to India Since 2002) */}
            <section className="py-16 bg-stone-50 border-b border-stone-200">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  {/* Left: Video / Media Player */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video group">
                    <img
                      src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80"
                      alt="Gold's Gym Legacy"
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <button
                        onClick={() => window.open('https://youtu.be/R9Q13UJU7P0?si=n508wWfzUTNQcE7N', '_blank')}
                        className="w-16 h-16 rounded-full bg-[#FFE400] text-black flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
                        title="Watch Gold's Gym Legacy Video"
                      >
                        <Play className="w-7 h-7 fill-current ml-1" />
                      </button>
                    </div>
                    <div className="absolute bottom-3 left-4 text-white text-xs font-bold uppercase tracking-wider">
                      Watch The Gold's Gym Story (1965 – Present)
                    </div>
                  </div>

                  {/* Right: Legacy Story Text */}
                  <div className="space-y-4">
                    <span className="text-xs font-black uppercase tracking-widest text-amber-600 block">
                      Heritage Since 1965
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black uppercase text-black tracking-tight leading-tight">
                      Our Legacy
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed text-justify">
                      Gold's Gym is a globally renowned fitness brand that has made its mark in India. With a strong legacy dating back to 1965 in Venice Beach, California, Gold's Gym has become synonymous with fitness excellence and innovation. Gold’s Gym India carries the legacy ahead in the home country since its inception in 2002.
                    </p>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed text-justify">
                      World-class fitness facilities and a comprehensive range of workout programs tailored to meet the needs of diverse fitness enthusiasts is what sets us apart from others. With 150+ clubs across 95 Indian cities, it is a haven that combines state-of-the-art Life Fitness and Hammer Strength equipment, expert trainers, and a supportive community.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => setActiveTab('about')}
                        className="bg-black hover:bg-[#FFE400] hover:text-black text-white font-extrabold text-xs uppercase px-6 py-3 rounded-xl transition-all cursor-pointer"
                      >
                        Read Full History
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* OUR BUSINESS VERTICALS (Gyms & GGFI) */}
            <section className="py-16 bg-[#002b49] text-white">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <span className="text-xs font-black uppercase tracking-widest text-[#FFE400] block mb-1">
                  Structure
                </span>
                <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-2">
                  Our Business Verticals
                </h2>
                <p className="text-xs sm:text-sm text-stone-300 max-w-xl mx-auto mb-10">
                  Gold's Gym India business comprises 2 premier verticals: Gold's Gym & GGFI
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
                  {/* Vertical 1: Gyms */}
                  <div
                    onClick={() => setActiveTab('gyms')}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-[#FFE400] transition-all cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#FFE400] text-black flex items-center justify-center mb-4 group-hover:scale-110 transition-transform font-black">
                      <Dumbbell className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black uppercase text-white mb-2 group-hover:text-[#FFE400] transition-colors">
                      Gold's Gym Clubs
                    </h3>
                    <p className="text-xs text-stone-300 leading-relaxed mb-4">
                      We are one of the largest gym chains in India with 150+ active clubs across 95 cities, operating in India since 2002. Offering flagship gyms, express facilities, and high-energy community fitness centers.
                    </p>
                    <span className="text-xs font-bold text-[#FFE400] flex items-center gap-1">
                      <span>Explore All 156+ Gyms</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Vertical 2: GGFI */}
                  <div
                    onClick={() => setActiveTab('ggfi')}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-[#FFE400] transition-all cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#FFE400] text-black flex items-center justify-center mb-4 group-hover:scale-110 transition-transform font-black">
                      <Award className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black uppercase text-white mb-2 group-hover:text-[#FFE400] transition-colors">
                      GGFI Fitness Institute
                    </h3>
                    <p className="text-xs text-stone-300 leading-relaxed mb-4">
                      GGFI opened its doors in 2006 and has successfully certified over 25,000 personal trainers, nutritionists, and fitness managers. Authorized partner for global ACE certification and Skill India diplomas.
                    </p>
                    <span className="text-xs font-bold text-[#FFE400] flex items-center gap-1">
                      <span>View Courses & Diplomas</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* BOOK YOUR FREE TRIAL CALLOUT BANNER */}
            <section className="relative py-14 bg-black text-white overflow-hidden border-y-4 border-[#FFE400]">
              <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-1">
                    Book Your <span className="text-[#FFE400]">Free Trial</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300">
                    Start Your Fitness Journey at Gold's Gym Today. 1-Day VIP Pass With Zero Commitments.
                  </p>
                </div>
                <button
                  onClick={() => setFreeTrialOpen(true)}
                  className="bg-[#FFE400] hover:bg-white text-black font-black text-xs uppercase tracking-wider px-8 py-3.5 rounded-full transition-all cursor-pointer shadow-lg shrink-0"
                >
                  Sign Me Up
                </button>
              </div>
            </section>

            {/* CLUB FORMATS (GG, GG Express, GG Activ) */}
            <section className="py-12 bg-white border-b border-stone-200">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-2xl font-black text-black block mb-2">GG Flagship</span>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Sprawling 10,000+ sq ft luxury clubs with full Life Fitness decks, steam, sauna, spinning studio, and locker lounges.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-2xl font-black text-black block mb-2">GG Express</span>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Compact, high-efficiency workout hubs located in neighborhood commercial districts with essential strength and cardio.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-2xl font-black text-black block mb-2">GG Activ</span>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      High-energy group training, functional turf, youth conditioning, and community workout formats.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* PRE SALE & GYMS COMING SOON SECTION */}
            <section className="py-14 bg-stone-900 text-white">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {/* Left: Pre-Sale Banner */}
                  <div className="bg-stone-800 rounded-2xl p-6 border border-stone-700">
                    <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-[#FFE400] text-black inline-block rounded mb-3">
                      Exclusive Launch Offer
                    </span>
                    <h3 className="text-2xl font-black uppercase text-white mb-2">
                      Pre Sale: Gold's Gym Sonipat Sector 14
                    </h3>
                    <p className="text-xs text-stone-400 mb-5 leading-relaxed">
                      Be among the first 100 founder members of Sonipat's most advanced fitness facility. Save up to 40% on annual access.
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-black text-[#FFE400]">₹23,000 / year</span>
                      <button
                        onClick={() => {
                          const sonipat = GOLDS_GYM_LOCATIONS.find((g) => g.id === 'gg-sonipat-sec14');
                          if (sonipat) setSelectedGym(sonipat);
                        }}
                        className="bg-[#FFE400] hover:bg-white text-black font-black text-xs uppercase px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
                      >
                        View Details
                      </button>
                    </div>
                  </div>

                  {/* Right: Gyms Coming Soon */}
                  <div className="bg-stone-800 rounded-2xl p-6 border border-stone-700">
                    <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-amber-500 text-black inline-block rounded mb-3">
                      Expansion
                    </span>
                    <h3 className="text-2xl font-black uppercase text-white mb-2">
                      Gyms Coming Soon
                    </h3>
                    <ul className="space-y-3 mt-3">
                      <li className="flex items-center justify-between text-xs border-b border-stone-700 pb-2">
                        <span className="font-bold text-stone-200">Gold's Gym Mohali, Punjab</span>
                        <span className="text-[10px] text-amber-400 font-bold uppercase">Opening Q2 2026</span>
                      </li>
                      <li className="flex items-center justify-between text-xs border-b border-stone-700 pb-2">
                        <span className="font-bold text-stone-200">Gold's Gym MIT Kothrud, Pune</span>
                        <span className="text-[10px] text-amber-400 font-bold uppercase">Pre-Registration Open</span>
                      </li>
                      <li className="flex items-center justify-between text-xs">
                        <span className="font-bold text-stone-200">Gold's Gym Indiranagar 100ft, Bengaluru</span>
                        <span className="text-[10px] text-amber-400 font-bold uppercase">Renovation Phase</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* OUR PROGRAMS SECTION (Corporate, Personal Training, Group Program) */}
            <section className="py-16 bg-white border-b border-stone-200">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <h2 className="text-3xl font-black uppercase tracking-tight text-black mb-2">
                    Our Programs
                  </h2>
                  <div className="w-16 h-1 bg-[#FFE400] mx-auto mb-3"></div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    From personalized 1-on-1 coaching to high-energy group dance workouts and corporate health transformations.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {GOLDS_GYM_PROGRAMS.map((prog) => (
                    <div
                      key={prog.id}
                      className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-lg transition-all flex flex-col"
                    >
                      <div className="h-48 overflow-hidden bg-stone-200 relative">
                        <img
                          src={prog.image}
                          alt={prog.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute top-3 left-3 bg-black text-[#FFE400] text-[10px] font-black uppercase px-2 py-0.5 rounded">
                          {prog.tagline}
                        </span>
                      </div>
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-black text-black uppercase mb-2">
                            {prog.title}
                          </h3>
                          <p className="text-xs text-stone-600 leading-relaxed mb-4">
                            {prog.description}
                          </p>
                          <ul className="text-xs text-stone-700 space-y-1.5 mb-6">
                            {prog.features.slice(0, 3).map((f, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button
                          onClick={() => setActiveTab('programs')}
                          className="w-full bg-black hover:bg-[#FFE400] hover:text-black text-white font-extrabold text-xs uppercase py-3 rounded-xl transition-colors cursor-pointer"
                        >
                          Explore Program
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* GGFI - GOLD'S GYM FITNESS INSTITUTE SECTION */}
            <section className="py-16 bg-stone-900 text-white border-b border-stone-800">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <span className="text-xs font-black uppercase tracking-widest text-[#FFE400] block mb-1">
                  Asia's Premier Academy
                </span>
                <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-2">
                  Become a Certified Fitness Professional Today
                </h2>
                <div className="w-16 h-1 bg-[#FFE400] mx-auto mb-4"></div>
                <p className="text-xs sm:text-sm text-stone-300 max-w-xl mx-auto mb-10 leading-relaxed">
                  Turn your passion into a lucrative career with internationally accredited certifications from the Gold's Gym Fitness Institute (GGFI).
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-10">
                  {GOLDS_GYM_COURSES.slice(0, 4).map((c) => (
                    <div
                      key={c.id}
                      onClick={() => setSelectedCourse(c)}
                      className="bg-stone-800 rounded-2xl overflow-hidden border border-stone-700 hover:border-[#FFE400] transition-all cursor-pointer group flex flex-col"
                    >
                      <div className="h-40 overflow-hidden bg-stone-900 relative">
                        <img
                          src={c.image}
                          alt={c.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute top-2.5 right-2.5 bg-black/80 text-[#FFE400] text-[10px] font-black uppercase px-2 py-0.5 rounded">
                          {c.mode}
                        </span>
                      </div>
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] text-stone-400 font-mono block mb-1">{c.code}</span>
                          <h4 className="text-xs font-black text-white uppercase group-hover:text-[#FFE400] transition-colors line-clamp-2 leading-snug">
                            {c.title}
                          </h4>
                          <span className="text-[11px] text-stone-400 block mt-1">{c.duration}</span>
                        </div>
                        <div className="pt-3 border-t border-stone-700 mt-3 flex items-baseline justify-between">
                          <span className="text-base font-black text-[#FFE400]">
                            ₹{c.price.toLocaleString('en-IN')}
                          </span>
                          <span className="text-[11px] font-bold text-white group-hover:underline">
                            Details →
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setActiveTab('ggfi')}
                  className="bg-[#FFE400] hover:bg-white text-black font-extrabold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full transition-all cursor-pointer shadow-lg"
                >
                  View All GGFI Courses
                </button>
              </div>
            </section>

            {/* TESTIMONIALS SLIDER SECTION */}
            <section className="py-16 bg-white border-b border-stone-200">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-black uppercase tracking-tight text-black mb-2">
                  Member Testimonials
                </h2>
                <div className="w-16 h-1 bg-[#FFE400] mx-auto mb-10"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  {GOLDS_GYM_TESTIMONIALS.map((t) => (
                    <div
                      key={t.id}
                      className="bg-stone-50 border border-stone-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-1 text-amber-500 mb-3">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <p className="text-xs text-stone-700 leading-relaxed italic mb-4">
                          "{t.quote}"
                        </p>
                      </div>

                      <div className="pt-4 border-t border-stone-200 flex items-center gap-3">
                        <img
                          src={t.avatar}
                          alt={t.name}
                          className="w-10 h-10 rounded-full object-cover border border-amber-300"
                        />
                        <div>
                          <h4 className="text-xs font-bold text-black">{t.name}</h4>
                          <p className="text-[10px] text-stone-500">{t.location}</p>
                          <span className="text-[10px] font-bold text-amber-700 block">{t.achievement}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* GET IN TOUCH WITH US (Contact & Department Enquiry Form) */}
            <section className="py-16 bg-stone-900 text-white">
              <div className="max-w-3xl mx-auto px-4">
                <div className="text-center mb-10">
                  <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-2">
                    Get In Touch With Us
                  </h2>
                  <div className="w-16 h-1 bg-[#FFE400] mx-auto mb-3"></div>
                  <p className="text-xs text-stone-300">
                    Speak with our experts to share your specific requirements, which can provide customized solutions catering to your needs.
                  </p>
                </div>

                {contactSubmitted ? (
                  <div className="bg-emerald-950/80 border border-emerald-600 rounded-2xl p-8 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                    <h3 className="text-lg font-black uppercase text-white">Message Submitted Successfully!</h3>
                    <p className="text-xs text-stone-300 max-w-md mx-auto">
                      Thank you for contacting Gold's Gym India. A representative from the designated department will get in touch with you within 24 business hours.
                    </p>
                    <button
                      onClick={() => setContactSubmitted(false)}
                      className="bg-[#FFE400] text-black font-extrabold text-xs uppercase px-6 py-2.5 rounded-lg mt-3 cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setContactSubmitted(true);
                    }}
                    className="bg-stone-800 p-6 sm:p-8 rounded-2xl border border-stone-700 space-y-4 shadow-xl"
                  >
                    <div>
                      <label className="block text-[11px] font-bold text-stone-300 uppercase mb-1">
                        Select Department *
                      </label>
                      <select
                        required
                        className="w-full bg-stone-900 border border-stone-600 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#FFE400]"
                      >
                        <option value="">SELECT A DEPARTMENT</option>
                        <option value="FRANCHISE">INTERESTED IN FRANCHISE</option>
                        <option value="MARKETING">MARKETING & BRAND ALLIANCES</option>
                        <option value="ADVERTISE">ADVERTISE WITH GOLD’S GYM</option>
                        <option value="CUSTOMER_CARE">CUSTOMER CARE & GRIEVANCE</option>
                        <option value="SPECIFIC_GYM">CONTACT A SPECIFIC GYM</option>
                        <option value="CORPORATE_SALES">CORPORATE SALES & MEMBERSHIPS</option>
                        <option value="HR">HR & CAREERS</option>
                        <option value="GGFI">GGFI - FITNESS INSTITUTE</option>
                        <option value="GENERAL">GENERAL INQUIRY</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-stone-300 uppercase mb-1">Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          className="w-full bg-stone-900 border border-stone-600 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FFE400]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-stone-300 uppercase mb-1">Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="your@email.com"
                          className="w-full bg-stone-900 border border-stone-600 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FFE400]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-stone-300 uppercase mb-1">Phone *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          className="w-full bg-stone-900 border border-stone-600 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FFE400]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-stone-300 uppercase mb-1">State *</label>
                        <select className="w-full bg-stone-900 border border-stone-600 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FFE400]">
                          <option value="">Select State</option>
                          {uniqueStates.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-stone-300 uppercase mb-1">City *</label>
                        <select className="w-full bg-stone-900 border border-stone-600 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FFE400]">
                          <option value="">Select City</option>
                          {uniqueCities.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-stone-300 uppercase mb-1">Gym</label>
                        <select className="w-full bg-stone-900 border border-stone-600 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FFE400]">
                          <option value="">Select Gym</option>
                          {GOLDS_GYM_LOCATIONS.map((g) => (
                            <option key={g.id} value={g.name}>{g.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-stone-300 uppercase mb-1">Message</label>
                      <textarea
                        rows={3}
                        placeholder="Share your requirements..."
                        className="w-full bg-stone-900 border border-stone-600 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FFE400]"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#FFE400] hover:bg-white text-black font-black text-xs uppercase py-3.5 px-4 rounded-xl transition-colors cursor-pointer shadow-md"
                    >
                      Submit Inquiry
                    </button>
                  </form>
                )}
              </div>
            </section>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 2: GYM LOCATOR (Our Gyms India)                           */}
        {/* ============================================================== */}
        {activeTab === 'gyms' && (
          <div className="py-10 bg-stone-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4">
              <div className="mb-8">
                <span className="text-xs font-black uppercase tracking-widest text-amber-600 block mb-1">
                  156+ Clubs Across India
                </span>
                <h1 className="text-3xl font-black uppercase text-black">
                  Our Gyms India Locator
                </h1>
                <p className="text-xs text-stone-600 mt-1">
                  Find a world-class Gold's Gym facility near your home or office.
                </p>
              </div>

              {/* Filters Bar */}
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-200 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* Search query */}
                <div>
                  <label className="block text-[11px] font-bold text-stone-500 uppercase mb-1">
                    Search Name or Area
                  </label>
                  <div className="relative">
                    <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder="e.g. Bandra, GK, Indiranagar"
                      value={gymSearchQuery}
                      onChange={(e) => setGymSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-xs focus:outline-none focus:border-black"
                    />
                  </div>
                </div>

                {/* State selector */}
                <div>
                  <label className="block text-[11px] font-bold text-stone-500 uppercase mb-1">
                    Filter by State
                  </label>
                  <select
                    value={selectedState}
                    onChange={(e) => {
                      setSelectedState(e.target.value);
                      setSelectedCity('all');
                    }}
                    className="w-full py-2 px-3 bg-stone-50 border border-stone-300 rounded-lg text-xs focus:outline-none focus:border-black"
                  >
                    <option value="all">All States ({uniqueStates.length})</option>
                    {uniqueStates.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* City selector */}
                <div>
                  <label className="block text-[11px] font-bold text-stone-500 uppercase mb-1">
                    Filter by City
                  </label>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full py-2 px-3 bg-stone-50 border border-stone-300 rounded-lg text-xs focus:outline-none focus:border-black"
                  >
                    <option value="all">All Cities ({uniqueCities.length})</option>
                    {uniqueCities.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Gym Format */}
                <div>
                  <label className="block text-[11px] font-bold text-stone-500 uppercase mb-1">
                    Club Format
                  </label>
                  <select
                    value={selectedFormat}
                    onChange={(e) => setSelectedFormat(e.target.value)}
                    className="w-full py-2 px-3 bg-stone-50 border border-stone-300 rounded-lg text-xs focus:outline-none focus:border-black"
                  >
                    <option value="all">All Club Formats</option>
                    <option value="GG Flagship">GG Flagship (Full Scale)</option>
                    <option value="GG Express">GG Express (Compact)</option>
                    <option value="GG Activ">GG Activ (Group Hub)</option>
                  </select>
                </div>
              </div>

              {/* Gyms Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGyms.map((gym) => (
                  <div
                    key={gym.id}
                    className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-lg transition-all flex flex-col group"
                  >
                    <div className="relative h-48 bg-stone-200 overflow-hidden">
                      <img
                        src={gym.featuredImage}
                        alt={gym.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-3 left-3 bg-black text-[#FFE400] text-[10px] font-black uppercase px-2 py-0.5 rounded">
                        {gym.gymType}
                      </span>
                      {gym.isPreSale && (
                        <span className="absolute top-3 right-3 bg-amber-500 text-black text-[10px] font-black uppercase px-2 py-0.5 rounded">
                          Pre Sale Open
                        </span>
                      )}
                      {gym.isComingSoon && (
                        <span className="absolute top-3 right-3 bg-blue-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded">
                          Coming Soon
                        </span>
                      )}
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between text-xs text-stone-400 font-bold mb-1">
                          <span>{gym.city}, {gym.state}</span>
                          <span className="text-emerald-700 font-semibold">{gym.zone}</span>
                        </div>
                        <h3 className="text-base font-black text-black uppercase mb-1 group-hover:text-amber-600 transition-colors">
                          {gym.name}
                        </h3>
                        <p className="text-xs text-stone-500 flex items-start gap-1.5 mb-3 line-clamp-2">
                          <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                          <span>{gym.address}</span>
                        </p>
                        <div className="text-[11px] text-stone-600 space-y-1 bg-stone-50 p-2.5 rounded-lg mb-4">
                          <div className="flex justify-between">
                            <span className="text-stone-400">Hours:</span>
                            <span className="font-semibold">{gym.operatingHours.weekdays}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-stone-400">Annual Plan:</span>
                            <span className="font-black text-black">₹{gym.annualPrice.toLocaleString('en-IN')}</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 flex items-center gap-2">
                        <button
                          onClick={() => setSelectedGym(gym)}
                          className="flex-1 border border-black text-black font-extrabold text-xs uppercase py-2.5 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer text-center"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => handleAddGymMembership(gym, 'annual')}
                          className="flex-1 bg-[#FFE400] hover:bg-black hover:text-white text-black font-black text-xs uppercase py-2.5 rounded-lg transition-colors cursor-pointer text-center shadow-xs"
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 3: MEMBERSHIP (Buy Membership Plans)                      */}
        {/* ============================================================== */}
        {activeTab === 'membership' && (
          <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-black uppercase tracking-widest text-amber-600 block mb-1">
                  Official Membership
                </span>
                <h1 className="text-3xl sm:text-4xl font-black uppercase text-black">
                  Buy a Gold's Gym Membership Today
                </h1>
                <div className="w-16 h-1 bg-[#FFE400] mx-auto my-3"></div>
                <p className="text-xs sm:text-sm text-stone-600">
                  Select a plan tailored to your lifestyle. Enjoy access to state-of-the-art machines, certified coaches, and travel passes across India.
                </p>
              </div>

              {/* Plans Comparison Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
                {GOLDS_GYM_MEMBERSHIP_PLANS.map((plan) => {
                  const isFeatured = plan.id === 'plan-1-year-classic';
                  return (
                    <div
                      key={plan.id}
                      className={`rounded-2xl p-5 border flex flex-col justify-between transition-all ${
                        isFeatured
                          ? 'border-2 border-black bg-[#FFFDE5] shadow-xl relative scale-105 z-10'
                          : 'border-stone-200 bg-stone-50 hover:border-black'
                      }`}
                    >
                      {isFeatured && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-[#FFE400] text-[9px] font-black uppercase px-3 py-1 rounded-full tracking-wider">
                          Most Popular
                        </span>
                      )}

                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-amber-800 bg-amber-200/50 px-2 py-0.5 rounded inline-block mb-2">
                          {plan.badge}
                        </span>
                        <h3 className="text-base font-black text-black leading-snug mb-1">
                          {plan.name}
                        </h3>
                        <span className="text-xs text-stone-500 block mb-3">{plan.duration}</span>

                        <div className="text-2xl font-black text-black mb-4">
                          ₹{plan.price.toLocaleString('en-IN')}
                          <span className="text-[10px] font-normal text-stone-500 block">+ 18% GST</span>
                        </div>

                        <ul className="text-xs text-stone-700 space-y-2 mb-6">
                          {plan.features.map((feat, i) => (
                            <li key={i} className="flex items-start gap-1.5 leading-tight">
                              <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        onClick={() => {
                          const item: GoldsGymCartItem = {
                            id: `cart-plan-${plan.id}`,
                            title: plan.name,
                            subtitle: `${plan.duration} Plan`,
                            category: 'Membership',
                            price: plan.price,
                            duration: plan.duration,
                            quantity: 1
                          };
                          setCart((prev) => [...prev, item]);
                          setCartOpen(true);
                        }}
                        className={`w-full py-3 rounded-xl font-black text-xs uppercase transition-all cursor-pointer ${
                          isFeatured
                            ? 'bg-[#FFE400] hover:bg-black hover:text-white text-black shadow-md'
                            : 'bg-black hover:bg-[#FFE400] hover:text-black text-white'
                        }`}
                      >
                        Enroll Now
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Free Trial Banner */}
              <div className="bg-stone-900 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-[#FFE400]">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-white mb-1">
                    Still Undecided? Try Us For Free!
                  </h3>
                  <p className="text-xs text-stone-300">
                    Book a complimentary 1-day pass at any of our 156+ clubs before enrolling.
                  </p>
                </div>
                <button
                  onClick={() => setFreeTrialOpen(true)}
                  className="bg-[#FFE400] hover:bg-white text-black font-black text-xs uppercase px-8 py-3.5 rounded-full cursor-pointer shadow-md shrink-0"
                >
                  Claim 1-Day Trial
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 4: GGFI - FITNESS INSTITUTE                              */}
        {/* ============================================================== */}
        {activeTab === 'ggfi' && (
          <div className="py-12 bg-stone-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-xs font-black uppercase tracking-widest text-amber-600 block mb-1">
                  Established 2006
                </span>
                <h1 className="text-3xl sm:text-4xl font-black uppercase text-black">
                  Gold's Gym Fitness Institute (GGFI)
                </h1>
                <div className="w-16 h-1 bg-[#FFE400] mx-auto my-3"></div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  GGFI is India's pioneer in fitness education, producing over 25,000 certified fitness trainers, sports nutritionists, and club managers. Authorized educational partner for ACE (American Council on Exercise).
                </p>
              </div>

              {/* Courses Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {GOLDS_GYM_COURSES.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-lg transition-all flex flex-col group"
                  >
                    <div className="h-48 overflow-hidden bg-stone-100 relative">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-3 left-3 bg-black text-[#FFE400] text-[10px] font-black uppercase px-2 py-0.5 rounded">
                        {course.mode} Mode
                      </span>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-stone-400 block mb-1">
                          {course.code} · {course.duration}
                        </span>
                        <h3 className="text-base font-black text-black uppercase group-hover:text-amber-600 transition-colors mb-2">
                          {course.title}
                        </h3>
                        <p className="text-xs text-stone-600 leading-relaxed mb-4 line-clamp-3">
                          {course.description}
                        </p>
                        <div className="bg-[#FFFDE5] border border-amber-200 rounded-lg p-2.5 mb-4 text-[11px] text-amber-900 font-semibold">
                          Certification: {course.certification}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-baseline justify-between mb-3">
                          <span className="text-xl font-black text-black">
                            ₹{course.price.toLocaleString('en-IN')}
                          </span>
                          <span className="text-xs text-stone-400 line-through">
                            ₹{course.originalPrice.toLocaleString('en-IN')}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setSelectedCourse(course)}
                            className="flex-1 border border-black text-black font-extrabold text-xs uppercase py-2.5 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer text-center"
                          >
                            Course Details
                          </button>
                          <button
                            onClick={() => handleAddCourse(course)}
                            className="flex-1 bg-[#FFE400] hover:bg-black hover:text-white text-black font-black text-xs uppercase py-2.5 rounded-lg transition-colors cursor-pointer text-center shadow-xs"
                          >
                            Buy Course
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 5: PROGRAMS (Personal Training, GGX Studio, Corporate)    */}
        {/* ============================================================== */}
        {activeTab === 'programs' && (
          <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 space-y-16">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-black uppercase tracking-widest text-amber-600 block mb-1">
                  Training Systems
                </span>
                <h1 className="text-3xl sm:text-4xl font-black uppercase text-black">
                  Gold's Gym Signature Programs
                </h1>
                <div className="w-16 h-1 bg-[#FFE400] mx-auto my-3"></div>
              </div>

              {GOLDS_GYM_PROGRAMS.map((prog, idx) => (
                <div
                  key={prog.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                    idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="rounded-2xl overflow-hidden shadow-xl aspect-4/3 bg-stone-100">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <span className="text-xs font-black uppercase tracking-widest text-amber-600 px-2.5 py-1 bg-amber-50 rounded inline-block">
                      {prog.tagline}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black uppercase text-black tracking-tight">
                      {prog.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed text-justify">
                      {prog.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-black">Key Highlights:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                        {prog.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3">
                      <button
                        onClick={() => setFreeTrialOpen(true)}
                        className="bg-black hover:bg-[#FFE400] hover:text-black text-white font-extrabold text-xs uppercase px-6 py-3 rounded-xl transition-all cursor-pointer"
                      >
                        Enquire / Book Free Trial
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 6: EVENTS                                                 */}
        {/* ============================================================== */}
        {activeTab === 'events' && (
          <div className="py-12 bg-stone-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-black uppercase tracking-widest text-amber-600 block mb-1">
                  Expos & Conventions
                </span>
                <h1 className="text-3xl font-black uppercase text-black">
                  Our Events & Leadership Conventions
                </h1>
                <div className="w-16 h-1 bg-[#FFE400] mx-auto my-3"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {GOLDS_GYM_EVENTS.map((event) => (
                  <div
                    key={event.id}
                    className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-lg transition-all flex flex-col"
                  >
                    <div className="h-48 overflow-hidden bg-stone-100">
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between text-xs text-amber-700 font-bold mb-1">
                          <span>{event.category}</span>
                          <span>{event.date}</span>
                        </div>
                        <h3 className="text-base font-black text-black uppercase mb-2">
                          {event.title}
                        </h3>
                        <p className="text-xs text-stone-500 mb-2 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-stone-400" />
                          <span>{event.location}</span>
                        </p>
                        <p className="text-xs text-stone-600 leading-relaxed">{event.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 7: GALLERY                                                */}
        {/* ============================================================== */}
        {activeTab === 'gallery' && (
          <div className="py-12 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <h1 className="text-3xl font-black uppercase text-black">
                  Gold's Gym Photo Gallery
                </h1>
                <div className="w-16 h-1 bg-[#FFE400] mx-auto my-3"></div>
                <p className="text-xs text-stone-500">
                  Step inside our world-class clubs, Olympic weightlifting decks, and high-energy GGX studios.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {GOLDS_GYM_GALLERY_IMAGES.map((img) => (
                  <div
                    key={img.id}
                    className="relative group rounded-2xl overflow-hidden aspect-4/3 bg-stone-100 shadow-sm"
                  >
                    <img
                      src={img.imageUrl}
                      alt={img.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <div>
                        <span className="text-[10px] text-[#FFE400] uppercase font-bold block">{img.category}</span>
                        <h4 className="text-xs font-bold text-white">{img.title}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 8: BLOGS                                                  */}
        {/* ============================================================== */}
        {activeTab === 'blogs' && (
          <div className="py-12 bg-stone-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs font-black uppercase tracking-widest text-amber-600 block mb-1">
                  Evidence-Based Insights
                </span>
                <h1 className="text-3xl font-black uppercase text-black">
                  Gold's Gym Fitness & Nutrition Blog
                </h1>
                <div className="w-16 h-1 bg-[#FFE400] mx-auto my-3"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {GOLDS_GYM_BLOGS.map((blog) => (
                  <div
                    key={blog.id}
                    onClick={() => setSelectedBlog(blog)}
                    className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col group"
                  >
                    <div className="h-48 overflow-hidden bg-stone-100">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 rounded inline-block mb-2">
                          {blog.category}
                        </span>
                        <h3 className="text-base font-black text-black group-hover:text-amber-600 transition-colors mb-2 leading-snug">
                          {blog.title}
                        </h3>
                        <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed mb-4">
                          {blog.excerpt}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-400 flex justify-between">
                        <span>{blog.author}</span>
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 9: FRANCHISE                                              */}
        {/* ============================================================== */}
        {activeTab === 'franchise' && (
          <div className="py-12 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-4 space-y-10">
              <div className="text-center">
                <span className="text-xs font-black uppercase tracking-widest text-amber-600 block mb-1">
                  Business Opportunity
                </span>
                <h1 className="text-3xl sm:text-4xl font-black uppercase text-black">
                  Own a Gold's Gym Franchise
                </h1>
                <div className="w-16 h-1 bg-[#FFE400] mx-auto my-3"></div>
                <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto">
                  Partner with the world's most trusted fitness authority. Build a high-yield fitness enterprise backed by 24+ years of proven Indian operational expertise.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200">
                  <span className="text-[11px] font-bold text-stone-400 uppercase block mb-1">Floor Area</span>
                  <span className="text-xl font-black text-black">3,500 – 12,000 sq ft</span>
                </div>
                <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200">
                  <span className="text-[11px] font-bold text-stone-400 uppercase block mb-1">Investment Range</span>
                  <span className="text-xl font-black text-black">₹1.5 Cr – ₹4.5 Cr</span>
                </div>
                <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200">
                  <span className="text-[11px] font-bold text-stone-400 uppercase block mb-1">ROI Horizon</span>
                  <span className="text-xl font-black text-emerald-700">30% – 38% Annual</span>
                </div>
              </div>

              <div className="bg-[#FFFDE5] border border-amber-300 rounded-2xl p-6 space-y-3">
                <h3 className="text-base font-black uppercase text-amber-950">Why Franchise With Gold's Gym?</h3>
                <ul className="text-xs text-amber-900 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                    <span>Global brand recognition with 60 years of prestige and celebrity endorsement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                    <span>Turnkey architectural layouts, equipment procurement at OEM bulk pricing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                    <span>Pre-trained and certified trainers provided via GGFI institute pipeline</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 10: ABOUT US                                              */}
        {/* ============================================================== */}
        {activeTab === 'about' && (
          <div className="py-12 bg-white">
            <div className="max-w-4xl mx-auto px-4 space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-amber-600 block">
                Since 1965
              </span>
              <h1 className="text-3xl sm:text-4xl font-black uppercase text-black">
                About Gold's Gym India
              </h1>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed text-justify">
                Joe Gold opened the first Gold’s Gym in Venice Beach, California in 1965. Long before the modern fitness craze, Gold's Gym became the training grounds for bodybuilding icons, Olympic champions, and Hollywood icons.
              </p>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed text-justify">
                In 2002, F2 Fun & Fitness India brought the legendary legacy to Indian shores, inaugurating the flagship Bandra branch in Mumbai. Today, with over 156 gyms spanning 95 cities and 26 states, Gold's Gym India stands as the premier symbol of unyielding commitment to physical vitality and athletic excellence.
              </p>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 11: CONTACT US                                            */}
        {/* ============================================================== */}
        {activeTab === 'contact' && (
          <div className="py-12 bg-stone-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 space-y-8">
              <div className="text-center">
                <h1 className="text-3xl font-black uppercase text-black">
                  Contact Gold's Gym India
                </h1>
                <div className="w-16 h-1 bg-[#FFE400] mx-auto my-3"></div>
                <p className="text-xs text-stone-600">
                  Headquarters, customer care, and corporate inquiries.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-6 bg-white rounded-2xl border border-stone-200">
                  <Mail className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                  <span className="text-xs font-bold text-stone-400 uppercase block">Email Support</span>
                  <span className="text-xs font-black text-black">customer.care@goldsgym.in</span>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-stone-200">
                  <Phone className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                  <span className="text-xs font-bold text-stone-400 uppercase block">Helpline</span>
                  <span className="text-xs font-black text-black">+91 22 2640 1234</span>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-stone-200">
                  <MapPin className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                  <span className="text-xs font-bold text-stone-400 uppercase block">Corporate Office</span>
                  <span className="text-xs font-black text-black">Turner Rd, Bandra West, Mumbai</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* 4. Footer */}
      <GoldsGymFooter
        onNavClick={setActiveTab}
        onOpenFreeTrial={() => setFreeTrialOpen(true)}
        onSelectBlog={(slug) => {
          const b = GOLDS_GYM_BLOGS.find((item) => item.slug === slug);
          if (b) setSelectedBlog(b);
        }}
      />

      {/* 5. Modals & Drawers */}
      <GoldsGymCartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onOpenCheckout={() => {
          setCartOpen(false);
          setCheckoutOpen(true);
        }}
        onExplorePlans={() => setActiveTab('membership')}
      />

      <GoldsGymCheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        cart={cart}
        onOrderComplete={() => setCart([])}
      />

      <GoldsGymSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectGym={(gym) => setSelectedGym(gym)}
        onSelectCourse={(course) => setSelectedCourse(course)}
      />

      <GoldsGymFreeTrialModal
        isOpen={freeTrialOpen}
        onClose={() => setFreeTrialOpen(false)}
      />

      <GoldsGymDetailModal
        gym={selectedGym}
        onClose={() => setSelectedGym(null)}
        onAddToCart={handleAddGymMembership}
        onOpenFreeTrial={() => {
          setSelectedGym(null);
          setFreeTrialOpen(true);
        }}
      />

      <GoldsGymCourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onAddToCart={handleAddCourse}
      />

      <GoldsGymBlogModal
        blog={selectedBlog}
        onClose={() => setSelectedBlog(null)}
      />
    </div>
  );
};
