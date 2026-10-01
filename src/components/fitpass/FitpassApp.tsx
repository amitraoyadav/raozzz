import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  SlidersHorizontal,
  Star,
  MapPin,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  Award,
  ChevronRight,
  ArrowRight,
  Sparkles,
  QrCode,
  Smartphone,
  Phone,
  Mail,
  Play,
  Heart,
  Activity,
  Flame,
  Dumbbell,
  Check,
  Navigation,
  Clock,
  ExternalLink,
  Users,
  Compass
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import { FitpassHeader } from './FitpassHeader';
import { FitpassFooter } from './FitpassFooter';
import {
  StudioDetailModal,
  ReserveSessionModal,
  CityModal,
  BmiCalculatorModal,
  LoginModal,
  CheckoutModal
} from './FitpassModals';
import {
  FITPASS_STUDIOS,
  FITPASS_ACTIVITIES,
  FITPASS_PLANS,
  FITPASS_TESTIMONIALS,
  FITPASS_TV_CLASSES,
  FITPASS_BLOGS,
  FitpassStudio,
  FitpassPlan,
  FitpassArticle
} from '../../data/fitpassData';

export const FitpassApp: React.FC = () => {
  // Navigation View State
  const [activeTab, setActiveTab] = useState<string>('explore'); // 'explore' | 'onepass' | 'plans' | 'studios' | 'fitcoach' | 'fitfeast' | 'tv' | 'fitheal' | 'blog'

  // Location State
  const [selectedCity, setSelectedCity] = useState<string>('Mumbai');
  const [selectedLocality, setSelectedLocality] = useState<string>('Mumbai Central');

  // Search & Filters State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedActivityFilter, setSelectedActivityFilter] = useState<string>('all');
  const [ratingFilterActive, setRatingFilterActive] = useState<boolean>(false);
  const [verifiedOnly, setVerifiedOnly] = useState<boolean>(false);
  const [displayCount, setDisplayCount] = useState<number>(6);
  const [seeMoreExpanded, setSeeMoreExpanded] = useState<boolean>(false);

  // App Download form
  const [downloadMode, setDownloadMode] = useState<'email' | 'mobile'>('email');
  const [downloadInput, setDownloadInput] = useState<string>('');
  const [downloadSent, setDownloadSent] = useState<boolean>(false);

  // Modals State
  const [selectedStudioForDetail, setSelectedStudioForDetail] = useState<FitpassStudio | null>(null);
  const [selectedStudioForBooking, setSelectedStudioForBooking] = useState<FitpassStudio | null>(null);
  const [cityModalOpen, setCityModalOpen] = useState<boolean>(false);
  const [bmiModalOpen, setBmiModalOpen] = useState<boolean>(false);
  const [loginModalOpen, setLoginModalOpen] = useState<boolean>(false);
  const [checkoutModalPlan, setCheckoutModalPlan] = useState<FitpassPlan | null>(null);
  const [selectedBlogArticle, setSelectedBlogArticle] = useState<FitpassArticle | null>(null);

  // FITCOACH Interactive Generator State
  const [coachGoal, setCoachGoal] = useState<'Fat Loss' | 'Muscle Gain' | 'Cardio Stamina' | 'Core Abs'>('Fat Loss');
  const [coachLevel, setCoachLevel] = useState<'Beginner' | 'Intermediate' | 'Advanced'>('Intermediate');
  const [coachDays, setCoachDays] = useState<number>(4);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  // Filtered Studios
  const filteredStudios = useMemo(() => {
    return FITPASS_STUDIOS.filter(studio => {
      // City matching
      if (selectedCity && studio.city.toLowerCase() !== selectedCity.toLowerCase()) {
        // If city is Mumbai, show Mumbai studios; else allow all or selected city
        if (selectedCity !== 'All' && studio.city.toLowerCase() !== selectedCity.toLowerCase()) {
          // If searching in Delhi/Bengaluru/Gurugram, allow matching
          return false;
        }
      }

      // Rating 4.0+
      if (ratingFilterActive && studio.rating < 4.0) {
        return false;
      }

      // Verified only
      if (verifiedOnly && !studio.isVerified) {
        return false;
      }

      // Activity filter
      if (selectedActivityFilter !== 'all') {
        const hasActivity = studio.workouts.some(
          w => w.toLowerCase().includes(selectedActivityFilter.toLowerCase())
        );
        if (!hasActivity) return false;
      }

      // Text search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = studio.name.toLowerCase().includes(q);
        const matchLoc = studio.locality.toLowerCase().includes(q);
        const matchWorkouts = studio.workouts.some(w => w.toLowerCase().includes(q));
        if (!matchName && !matchLoc && !matchWorkouts) return false;
      }

      return true;
    });
  }, [selectedCity, ratingFilterActive, verifiedOnly, selectedActivityFilter, searchQuery]);

  const handleSendDownloadLink = () => {
    if (!downloadInput.trim()) return;
    setDownloadSent(true);
    setTimeout(() => {
      setDownloadSent(false);
      setDownloadInput('');
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-white text-[#0A1F34] font-['Figtree',sans-serif] selection:bg-[#D6383B] selection:text-white flex flex-col">
      {/* 1. Global AI Studio Demo Switcher: Site 44 of 44! */}
      <ReferenceSiteSwitcher currentSiteId="fitpass" />

      {/* 2. Authentic FITPASS Header */}
      <FitpassHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedCity={selectedCity}
        selectedLocality={selectedLocality}
        onOpenCityModal={() => setCityModalOpen(true)}
        onOpenLoginModal={() => setLoginModalOpen(true)}
        onOpenSubscribeModal={() => setCheckoutModalPlan(FITPASS_PLANS[0])}
      />

      {/* Main Content Area (Offset by fixed header height 80px) */}
      <main className="flex-1 mt-[80px]">
        {/* ============================================================== */}
        {/* VIEW 1: EXPLORE / HOME (EXACT MATCH TO UPLOADED REFERENCE)     */}
        {/* ============================================================== */}
        {activeTab === 'explore' && (
          <div>
            {/* Top Breadcrumb & Hero Section */}
            <div className="lg:max-w-[1200px] md:max-w-[1000px] w-full md:m-auto px-4 sm:px-6 py-4 sm:py-6">
              <div className="flex items-start justify-between gap-6 mb-2">
                <div className="flex-1 max-w-[760px] pt-1">
                  {/* Breadcrumb row */}
                  <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-semibold mb-3 text-stone-500">
                    <button onClick={() => setActiveTab('explore')} className="text-black font-normal hover:underline cursor-pointer">
                      FITPASS
                    </button>
                    <span className="text-[#92939E]">›</span>
                    <button onClick={() => setCityModalOpen(true)} className="text-black font-normal hover:underline cursor-pointer">
                      {selectedCity}
                    </button>
                    <span className="text-[#92939E]">›</span>
                    <span className="text-black font-normal">South {selectedCity}</span>
                    <span className="text-[#92939E]">›</span>
                    <span className="text-[#D6383B] font-bold">{selectedLocality}</span>
                  </div>

                  {/* Main Title */}
                  <h1 className="text-[22px] leading-[30px] lg:text-[32px] lg:leading-[42px] font-bold text-[#0A1F34]">
                    Fitness Centres &amp; Gyms in {selectedLocality}, {selectedCity}
                  </h1>

                  {/* Description with "See More" toggle */}
                  <div className="mt-2 text-xs sm:text-sm font-normal text-stone-700 leading-relaxed">
                    <p>
                      Discover the finest gyms in {selectedLocality} and kickstart your workout sessions with a bang. These top-notch gyms near you provide ample space for you to unleash your full potential. Benefit from state-of-the-art gym machinery and equipment that elevate your performance and deliver optimal results.
                      {seeMoreExpanded && (
                        <span>
                          {' '}Explore a diverse array of workout options, including Yoga, Pilates, Zumba classes, Swimming Classes, Cardio training, and more, tailored to suit your preferences. Achieve holistic fitness as you embark on your fitness journey, whether it’s weight loss, body bulking, muscle toning, or muscle strengthening. Take a step closer to your fitness goals by joining the nearest gym in {selectedLocality}, {selectedCity} today.
                        </span>
                      )}
                      <button
                        onClick={() => setSeeMoreExpanded(!seeMoreExpanded)}
                        className="ml-1 underline text-xs cursor-pointer text-[#0070C0] font-semibold inline hover:text-blue-800"
                      >
                        {seeMoreExpanded ? 'See Less' : 'See More'}
                      </button>
                    </p>
                  </div>
                </div>

                {/* Right Hero Illustration Image directly from reference */}
                <div className="hidden sm:block shrink-0 self-start">
                  <img
                    alt="Gym Workouts"
                    className="w-[190px] h-[165px] lg:w-[220px] lg:h-[190px] aspect-[4/3] object-contain object-top drop-shadow-xs"
                    src="https://cdn.fitimg.in/fitshop/activity_1741776024-31wuzsrvlribk0puvrwt.png"
                  />
                </div>
              </div>

              {/* Filter Pills Bar */}
              <div className="flex gap-2 w-full items-center overflow-x-auto scrollbar-hide py-2 mt-2">
                {/* Search Input Button */}
                <div className="relative shrink-0">
                  <input
                    type="text"
                    placeholder="Search Gym..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="border border-gray-200 rounded-[30px] pl-8 pr-4 py-[7px] text-[13px] text-[#0A1F34] bg-white shadow-xs outline-none focus:border-[#D6383B] w-[140px] sm:w-[180px]"
                  />
                  <Search className="w-3.5 h-3.5 text-[#0A1F34] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                {/* Rating 4.0+ Toggle */}
                <button
                  onClick={() => setRatingFilterActive(!ratingFilterActive)}
                  className={`shrink-0 flex items-center gap-1.5 border rounded-[30px] px-4 py-[7px] text-[13px] font-semibold transition-all cursor-pointer ${
                    ratingFilterActive
                      ? 'bg-[#0A1F34] text-white border-[#0A1F34]'
                      : 'border-gray-200 bg-white text-[#0A1F34] hover:bg-gray-50'
                  }`}
                >
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span>Rating 4.0+</span>
                </button>

                {/* Verified Only Toggle */}
                <button
                  onClick={() => setVerifiedOnly(!verifiedOnly)}
                  className={`shrink-0 flex items-center gap-1.5 border rounded-[30px] px-4 py-[7px] text-[13px] font-semibold transition-all cursor-pointer ${
                    verifiedOnly
                      ? 'bg-[#2563EB] text-white border-[#2563EB]'
                      : 'border-gray-200 bg-white text-[#0A1F34] hover:bg-gray-50'
                  }`}
                >
                  <ShieldCheck className="w-3 h-3 text-white" />
                  <span>Verified Gyms</span>
                </button>

                {/* Activity Chips */}
                {['all', 'Gym Workout', 'Zumba', 'Abs Workout', 'HIIT', 'Yoga', 'Strength Training', 'Cardio'].map(act => (
                  <button
                    key={act}
                    onClick={() => setSelectedActivityFilter(act)}
                    className={`shrink-0 border rounded-[30px] px-3.5 py-[7px] text-[13px] font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      selectedActivityFilter === act
                        ? 'bg-[#D6383B] text-white border-[#D6383B]'
                        : 'border-gray-200 bg-white text-[#0A1F34] hover:bg-gray-50'
                    }`}
                  >
                    {act === 'all' ? 'All Activities' : act}
                  </button>
                ))}
              </div>

              {/* Studios Grid (Matches exact reference structure: 3 columns on desktop, responsive) */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 py-6">
                {filteredStudios.slice(0, displayCount).map(studio => (
                  <div
                    key={studio.id}
                    onClick={() => setSelectedStudioForDetail(studio)}
                    className="flex sm:flex-col bg-white rounded-2xl border border-gray-100 sm:border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer group p-2.5 sm:p-0"
                  >
                    {/* Thumbnail with Watermark Logo & Verified Badge */}
                    <div className="relative min-w-[140px] w-[140px] aspect-[125/110] sm:w-full sm:h-[210px] sm:aspect-auto shrink-0 overflow-hidden rounded-xl sm:rounded-none bg-gray-100">
                      <img
                        src={studio.profileImage}
                        alt={studio.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Small Studio Logo on bottom left of image */}
                      <div className="absolute bottom-2 left-2 w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-xl p-1 shadow-md flex items-center justify-center border border-gray-100">
                        <img src={studio.logo} alt="logo" className="w-full h-full object-contain rounded-md" />
                      </div>

                      {/* Blue Verified Badge */}
                      {studio.isVerified && (
                        <div
                          title="Verified Studio"
                          className="absolute bottom-2 right-2 w-5 h-5 bg-[#2563EB] text-white rounded-full flex items-center justify-center shadow-md text-[10px]"
                        >
                          ✓
                        </div>
                      )}
                    </div>

                    {/* Studio Information */}
                    <div className="flex-1 min-w-0 pl-3 sm:p-4 flex flex-col justify-between">
                      <div>
                        <h2 className="font-bold text-[15px] sm:text-[17px] leading-tight line-clamp-1 text-[#0A1F34] group-hover:text-[#D6383B] transition-colors">
                          {studio.name}
                        </h2>
                        
                        <p className="mt-1 text-[11px] sm:text-[12px] text-gray-500 font-semibold truncate">
                          {studio.locality}, {studio.city} • {studio.distanceKm} km
                        </p>

                        {/* Star Rating */}
                        <div className="flex items-center gap-1 mt-1.5">
                          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                          <span className="font-bold text-xs text-[#0A1F34]">{studio.rating}</span>
                          <span className="text-gray-400 text-xs">({studio.ratingCount})</span>
                        </div>
                      </div>

                      {/* Workout Pills */}
                      <div className="flex gap-1.5 overflow-x-auto scrollbar-hide pt-2.5 mt-auto">
                        {studio.workouts.slice(0, 2).map(w => (
                          <span
                            key={w}
                            className="whitespace-nowrap border border-gray-200 rounded-full px-2.5 py-0.5 text-[#0A1F34] text-[11px] font-medium bg-gray-50/60"
                          >
                            {w}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              {displayCount < filteredStudios.length && (
                <div className="text-center my-6">
                  <button
                    onClick={() => setDisplayCount(prev => prev + 6)}
                    className="bg-[#D6383B] hover:bg-red-700 text-white rounded-xl text-sm font-semibold py-2.5 px-8 transition-colors cursor-pointer shadow-sm"
                  >
                    Load More Studios ({filteredStudios.length - displayCount} remaining)
                  </button>
                </div>
              )}
            </div>

            {/* ========================================================== */}
            {/* SECTION 2: DISCOVER NEW FITNESS ACTIVITIES (from reference) */}
            {/* ========================================================== */}
            <div className="bg-[#FAFAFA] py-12 border-y border-gray-100">
              <div className="max-w-[1250px] mx-auto px-4 sm:px-6">
                <div className="text-center mb-8">
                  <h2 className="text-[22px] sm:text-[28px] font-bold text-[#0A1F34]">
                    Discover New Fitness Activities Around {selectedLocality}, {selectedCity}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    Try different workout formats without paying separate gym membership fees
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                  {FITPASS_ACTIVITIES.slice(0, 6).map(act => (
                    <div
                      key={act.id}
                      onClick={() => {
                        setSelectedActivityFilter(act.name);
                        window.scrollTo({ top: 180, behavior: 'smooth' });
                      }}
                      className="relative h-44 rounded-2xl overflow-hidden group cursor-pointer shadow-xs border border-gray-100"
                    >
                      <img
                        src={act.desktopBanner}
                        alt={act.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />
                      <div
                        className="absolute inset-0 transition group-hover:opacity-90"
                        style={{
                          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 45%, rgba(0, 0, 0, 0.8) 90%)'
                        }}
                      />
                      <div className="absolute bottom-3 left-0 right-0 text-center px-2">
                        <h3 className="text-white text-xs sm:text-sm font-bold truncate">
                          {act.name}
                        </h3>
                        <span className="text-[10px] text-amber-300 block font-mono">
                          {act.calorieBurn}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ========================================================== */}
            {/* SECTION 3: CHOOSE YOUR FITPASS PLAN (from reference)        */}
            {/* ========================================================== */}
            <div className="max-w-[1250px] mx-auto px-4 sm:px-6 py-14">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1F34]">
                  Choose Your FITPASS Plan
                </h2>
                <p className="text-xs sm:text-sm font-medium text-gray-500 mt-1">
                  Your Fitness Journey Starts with the Right Plan · Cancel or Pause Anytime
                </p>
              </div>

              {/* Plan Cards Row with Rich Banner on Desktop */}
              <div className="flex flex-col lg:flex-row gap-6 items-stretch justify-center">
                {/* Left Desktop Banner Graphic */}
                <div className="hidden lg:block w-[320px] rounded-3xl overflow-hidden shadow-md shrink-0 bg-stone-900 border border-gray-100">
                  <img
                    src="https://img.fitimg.in/cdn/web-assets/images/membership/fit-rich-desktop.png"
                    alt="Fitpass Rich Plan"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Plan 1: FITPASS 360 */}
                <div className="flex-1 max-w-md bg-white rounded-3xl border-2 border-[#D6383B] p-6 shadow-xl flex flex-col justify-between relative">
                  <div className="absolute -top-3.5 right-6 bg-[#D6383B] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    MOST POPULAR • ALL-IN-ONE
                  </div>

                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-bold text-[#D6383B] uppercase tracking-wider">
                        12 Months Unlimited
                      </span>
                      <h3 className="text-2xl font-black text-[#0A1F34]">FITPASS 360</h3>
                      <div className="flex items-baseline gap-2 mt-2">
                        <span className="text-3xl font-black text-[#0A1F34]">₹1,667</span>
                        <span className="text-xs text-gray-500 font-bold">/ month</span>
                        <span className="text-xs text-gray-400 line-through">₹7,500/mo</span>
                      </div>
                      <p className="text-[11px] text-gray-500 mt-0.5">Billed annually at ₹19,999</p>
                    </div>

                    <div className="pt-2 border-t border-gray-100 space-y-2.5 text-xs text-gray-700">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Access to 12,000+ premium gyms across 150+ cities</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Certified nutritionist consults, personalized diet plans &amp; meal logs on FITFEAST</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>ARIA A.I. personal fitness coach with real-time posture guidance</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Unlimited virtual live classes from 4,000+ global studios on FITPASS-TV</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Free Doctor consultations &amp; annual diagnostic checkup on FITHEAL</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={() => setCheckoutModalPlan(FITPASS_PLANS[0])}
                      className="w-full py-3.5 bg-[#D6383B] hover:bg-red-700 text-white rounded-full font-bold text-sm tracking-wider uppercase transition-all shadow-md cursor-pointer"
                    >
                      Subscribe Now @ ₹1667/month
                    </button>
                  </div>
                </div>

                {/* Plan 2: FITPASS 180 */}
                <div className="flex-1 max-w-md bg-white rounded-3xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                        12 Months Core
                      </span>
                      <h3 className="text-2xl font-black text-[#0A1F34]">FITPASS 180</h3>
                      <div className="flex items-baseline gap-2 mt-2">
                        <span className="text-3xl font-black text-[#0A1F34]">₹1,417</span>
                        <span className="text-xs text-gray-500 font-bold">/ month</span>
                        <span className="text-xs text-gray-400 line-through">₹3,250/mo</span>
                      </div>
                      <p className="text-[11px] text-gray-500 mt-0.5">Billed annually at ₹16,999</p>
                    </div>

                    <div className="pt-2 border-t border-gray-100 space-y-2.5 text-xs text-gray-700">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Access to 12,000+ partner fitness centres in 150+ cities</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Reserve up to 5 workouts every month at each partner gym</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>ARIA A.I. personal fitness coach</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Access to unlimited virtual home workouts on FITPASS-TV</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={() => setCheckoutModalPlan(FITPASS_PLANS[1])}
                      className="w-full py-3.5 bg-[#0A1F34] hover:bg-stone-900 text-white rounded-full font-bold text-sm tracking-wider uppercase transition-all shadow-md cursor-pointer"
                    >
                      Subscribe Now @ ₹1417/month
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================== */}
            {/* SECTION 4: FULL EDITORIAL SEO CONTENT (Exact from Reference)*/}
            {/* ========================================================== */}
            <div className="bg-[#F6F6F6] py-12 border-t border-gray-200">
              <div className="max-w-[1160px] mx-auto px-4 sm:px-6 space-y-6 text-[#0A1F34]">
                <p className="text-sm leading-relaxed">
                  Staying active and healthy in {selectedLocality}, South {selectedCity}, {selectedCity} is now easier than ever. Whether you prefer working out at a gym, joining group fitness classes, training at home, or improving your overall health through nutrition and preventive care, FITPASS brings everything together in one place. With access to 12k+ premium gyms across 150+ cities and a complete suite of nutrition, coaching, and health services, your transformation starts here.
                </p>

                <h2 className="text-xl font-bold text-[#0A1F34]">
                  Why Choose FITPASS in {selectedLocality}, South {selectedCity}, {selectedCity}
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed">
                  With a single membership, FITPASS gives you access to a wide network of gyms and fitness studios across {selectedLocality}, allowing you to work out close to home, office, or anywhere in the city.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="bg-white p-5 rounded-2xl border border-gray-200 space-y-2">
                    <h3 className="font-bold text-base text-[#0A1F34]">
                      Cardio, HIIT &amp; Body Toning in {selectedCity}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Improve your fitness with a combination of cardio and strength-based workouts suitable for all fitness levels. Cardio sessions such as treadmill workouts, functional training, and HIIT help boost heart health and support effective calorie burn.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-gray-200 space-y-2">
                    <h3 className="font-bold text-base text-[#0A1F34]">
                      Personalised Nutrition Guidance on FITFEAST
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      With the FITPASS 360 membership, users in {selectedCity} get nutritionist support at no extra cost, making it easier to combine workouts with the right eating habits for better, sustainable results.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-gray-200 space-y-2">
                    <h3 className="font-bold text-base text-[#0A1F34]">
                      Smarter Training with ARIA - A.I. Fitness Trainer
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      ARIA is an A.I.-powered personal fitness coach that helps users follow structured, goal-focused workouts without relying on expensive personal trainer contracts. By analysing movement patterns, ARIA adapts sets and rest periods.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-gray-200 space-y-2">
                    <h3 className="font-bold text-base text-[#0A1F34]">
                      Virtual Home Workouts with FITPASS-TV
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      For days when you prefer working out at home or while travelling, FITPASS-TV gives users access to a wide range of virtual fitness workouts from popular international studios across 50+ countries.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================== */}
            {/* SECTION 5: APP DOWNLOAD BANNER (Exact from Reference)      */}
            {/* ========================================================== */}
            <div className="py-12 bg-white border-t border-gray-100">
              <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                <div className="bg-stone-50 border border-gray-200 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#091F34]">
                      Get FITPASS &amp; Get <span className="text-red-500 font-extrabold">Moving!</span>
                    </h3>
                    <p className="text-sm text-gray-600">
                      Trusted by 11M+ customers all across India since 2016
                    </p>
                    <div className="text-sm font-bold text-[#0A1F34] flex items-center gap-1.5">
                      <span>⭐ 4.7</span>
                      <span className="text-gray-400">|</span>
                      <span>50K+ Verified App Store &amp; Play Store Ratings</span>
                    </div>

                    {/* Radio Selectors */}
                    <div className="flex items-center gap-6 pt-2 text-sm font-medium">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="mode"
                          checked={downloadMode === 'mobile'}
                          onChange={() => setDownloadMode('mobile')}
                          className="accent-[#D6383B]"
                        />
                        <span>Mobile No.</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="mode"
                          checked={downloadMode === 'email'}
                          onChange={() => setDownloadMode('email')}
                          className="accent-[#D6383B]"
                        />
                        <span>Email ID</span>
                      </label>
                    </div>

                    {/* Input & Send Link */}
                    <div className="flex max-w-md w-full pt-1">
                      <input
                        type={downloadMode === 'mobile' ? 'tel' : 'email'}
                        placeholder={downloadMode === 'mobile' ? 'Enter 10-digit mobile number' : 'Enter Email ID'}
                        value={downloadInput}
                        onChange={e => setDownloadInput(e.target.value)}
                        className="flex-1 px-4 py-3 rounded-l-xl border border-gray-300 text-xs sm:text-sm outline-none focus:border-[#D6383B]"
                      />
                      <button
                        onClick={handleSendDownloadLink}
                        className="bg-[#D6383B] hover:bg-red-700 text-white font-bold px-6 rounded-r-xl text-xs sm:text-sm transition-colors cursor-pointer"
                      >
                        Send Link
                      </button>
                    </div>

                    {downloadSent && (
                      <p className="text-xs text-emerald-600 font-bold flex items-center gap-1 animate-fade-in">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Link sent successfully! Check your inbox/SMS to download.</span>
                      </p>
                    )}
                  </div>

                  {/* QR Code & Badges */}
                  <div className="flex items-center gap-6 bg-white p-5 rounded-2xl border border-gray-200 shadow-xs">
                    <div className="text-center">
                      <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                        Scan QR Code
                      </div>
                      <div className="w-24 h-24 p-1 border border-gray-200 rounded-lg">
                        <img
                          src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https%3A%2F%2Fapp.fitpass.co.in%2FdCBm%2Fo1gsiswl"
                          alt="FITPASS QR"
                          className="w-full h-full"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 border-l border-gray-100 pl-6">
                      <span className="text-[11px] font-bold text-gray-500 uppercase block">
                        Direct Download
                      </span>
                      <div className="px-3 py-1.5 rounded-lg bg-black text-white text-xs font-semibold flex items-center gap-2 cursor-pointer hover:bg-stone-800">
                        <span>🍎 App Store</span>
                      </div>
                      <div className="px-3 py-1.5 rounded-lg bg-black text-white text-xs font-semibold flex items-center gap-2 cursor-pointer hover:bg-stone-800">
                        <span>🤖 Google Play</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 2: ONE PASS (The Universal Membership)                    */}
        {/* ============================================================== */}
        {activeTab === 'onepass' && (
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="px-3 py-1 rounded-full bg-red-50 text-[#D6383B] text-xs font-bold uppercase tracking-wider border border-red-100">
                1 Membership · 12,000+ Gyms · 150+ Cities
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#0A1F34]">
                The All-In-One FITPASS Network
              </h1>
              <p className="text-sm text-gray-600 leading-relaxed">
                Why pay for five different memberships? FITPASS connects you to thousands of top-tier fitness centers with zero lock-in contracts and seamless mobile QR check-ins.
              </p>
            </div>

            {/* How It Works 3-Step Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-200 space-y-3 text-center">
                <div className="w-12 h-12 rounded-2xl bg-[#D6383B] text-white flex items-center justify-center font-bold text-lg mx-auto">
                  1
                </div>
                <h3 className="font-bold text-lg text-[#0A1F34]">Choose Any Gym Nearby</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Open the FITPASS app or map, find partner fitness centres near your residence, workplace, or travel destination.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-200 space-y-3 text-center">
                <div className="w-12 h-12 rounded-2xl bg-[#D6383B] text-white flex items-center justify-center font-bold text-lg mx-auto">
                  2
                </div>
                <h3 className="font-bold text-lg text-[#0A1F34]">Scan Your Digital Pass</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Walk straight to the reception desk, scan the FITPASS QR counter code or generate your one-time digital entry pass.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-200 space-y-3 text-center">
                <div className="w-12 h-12 rounded-2xl bg-[#D6383B] text-white flex items-center justify-center font-bold text-lg mx-auto">
                  3
                </div>
                <h3 className="font-bold text-lg text-[#0A1F34]">Work Out with Total Freedom</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Enjoy weights, cardio machines, swimming pools, yoga halls, and group Zumba classes with zero admission barriers.
                </p>
              </div>
            </div>

            {/* Network Statistics Row */}
            <div className="bg-[#0A1F34] text-white p-8 rounded-3xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <span className="text-3xl sm:text-4xl font-black text-[#D6383B]">12,000+</span>
                <span className="text-xs text-gray-400 block mt-1 uppercase font-semibold">Partner Studios</span>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-black text-amber-400">150+</span>
                <span className="text-xs text-gray-400 block mt-1 uppercase font-semibold">Indian Cities</span>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-black text-emerald-400">11M+</span>
                <span className="text-xs text-gray-400 block mt-1 uppercase font-semibold">Happy Fitsters</span>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-black text-sky-400">20+</span>
                <span className="text-xs text-gray-400 block mt-1 uppercase font-semibold">Workout Types</span>
              </div>
            </div>

            <div className="text-center pt-4">
              <button
                onClick={() => setCheckoutModalPlan(FITPASS_PLANS[0])}
                className="px-8 py-3.5 bg-[#D6383B] hover:bg-red-700 text-white rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg cursor-pointer"
              >
                Get Your One Pass Today
              </button>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 3: MEMBERSHIP PLANS & COMPARISON                          */}
        {/* ============================================================== */}
        {activeTab === 'plans' && (
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h1 className="text-3xl sm:text-4xl font-black text-[#0A1F34]">
                Transparent Fitness Pricing
              </h1>
              <p className="text-sm text-gray-600">
                Choose the right plan for your personal goals. All plans include full app access and virtual home workouts.
              </p>
            </div>

            {/* Grid of 4 plans */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {FITPASS_PLANS.map(plan => (
                <div
                  key={plan.id}
                  className={`bg-white rounded-3xl p-6 border flex flex-col justify-between transition-all ${
                    plan.isRecommended
                      ? 'border-2 border-[#D6383B] shadow-xl relative'
                      : 'border-gray-200 shadow-xs hover:shadow-md'
                  }`}
                >
                  {plan.badge && (
                    <span className="absolute -top-3 left-6 bg-[#D6383B] text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                      {plan.badge}
                    </span>
                  )}

                  <div className="space-y-4">
                    <div>
                      <span className="text-[11px] font-bold text-gray-500 uppercase">
                        {plan.durationMonths} Month{plan.durationMonths > 1 ? 's' : ''}
                      </span>
                      <h3 className="text-xl font-black text-[#0A1F34] mt-0.5">{plan.label}</h3>
                      <div className="flex items-baseline gap-1 mt-2">
                        <span className="text-2xl font-black text-[#0A1F34]">₹{plan.monthlySellingPrice}</span>
                        <span className="text-xs text-gray-500">/ mo</span>
                      </div>
                      <span className="text-xs text-gray-400 line-through">₹{plan.actualPrice.toLocaleString('en-IN')}</span>
                    </div>

                    <div className="pt-2 border-t border-gray-100 space-y-2 text-xs text-gray-600">
                      {plan.features.map(f => (
                        <div key={f} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={() => setCheckoutModalPlan(plan)}
                      className={`w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                        plan.isRecommended
                          ? 'bg-[#D6383B] hover:bg-red-700 text-white shadow-md'
                          : 'bg-gray-100 hover:bg-gray-200 text-[#0A1F34]'
                      }`}
                    >
                      Select Plan
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Member Testimonials */}
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200 space-y-6">
              <h3 className="text-xl font-bold text-center text-[#0A1F34]">
                What Real FITPASS Members Are Saying
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {FITPASS_TESTIMONIALS.slice(0, 3).map(t => (
                  <div key={t.id} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-3">
                    <div className="flex items-center gap-3">
                      <img src={t.photo} alt={t.name} className="w-10 h-10 rounded-full border border-gray-200" />
                      <div>
                        <h4 className="font-bold text-xs text-[#0A1F34]">{t.name}</h4>
                        <div className="flex items-center text-amber-500 text-xs">
                          {'★'.repeat(t.rating)}
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed italic">
                      "{t.text}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 4: FITCOACH (ARIA A.I. Fitness Trainer)                   */}
        {/* ============================================================== */}
        {activeTab === 'fitcoach' && (
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider border border-indigo-100">
                A.I. Adaptive Fitness Intelligence
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#0A1F34]">
                Meet ARIA: Your Personal AI Fitness Coach
              </h1>
              <p className="text-sm text-gray-600">
                No fixed or generic spreadsheets. ARIA dynamically calibrates exercises, reps, and weights based on your reported fatigue, posture, and weekly schedule.
              </p>
            </div>

            {/* Interactive ARIA Routine Configurator */}
            <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 border border-stone-800">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    <span>Generate Your Custom ARIA Workout Split</span>
                  </h3>
                  <p className="text-xs text-stone-400 mt-1">
                    Select your current target and let ARIA synthesize optimal biomechanical pairing
                  </p>
                </div>

                <span className="text-xs font-mono px-3 py-1 rounded-full bg-red-950 text-red-400 border border-red-800">
                  ARIA v4.2 Active
                </span>
              </div>

              {/* Goal Selectors */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {(['Fat Loss', 'Muscle Gain', 'Cardio Stamina', 'Core Abs'] as const).map(g => (
                  <button
                    key={g}
                    onClick={() => setCoachGoal(g)}
                    className={`py-3 px-4 rounded-2xl border text-xs font-bold text-center transition-all cursor-pointer ${
                      coachGoal === g
                        ? 'border-[#D6383B] bg-[#D6383B] text-white shadow-md'
                        : 'border-stone-800 bg-stone-950 text-stone-300 hover:border-stone-700'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>

              {/* Generated Split Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-stone-950 p-5 rounded-2xl border border-stone-800 space-y-2">
                  <span className="text-[10px] uppercase font-mono text-red-400 font-bold block">Day 1 • Upper Hypertrophy</span>
                  <h4 className="font-bold text-sm text-white">Barbell Bench &amp; Bent-Over Rows</h4>
                  <p className="text-xs text-stone-400">4 sets × 8-10 reps • Rest 90s • Kinematic Form Check Active</p>
                </div>

                <div className="bg-stone-950 p-5 rounded-2xl border border-stone-800 space-y-2">
                  <span className="text-[10px] uppercase font-mono text-amber-400 font-bold block">Day 2 • Lower &amp; Posterior Chain</span>
                  <h4 className="font-bold text-sm text-white">Romanian Deadlift &amp; Front Squats</h4>
                  <p className="text-xs text-stone-400">4 sets × 10-12 reps • Hamstring &amp; Glute Activation</p>
                </div>

                <div className="bg-stone-950 p-5 rounded-2xl border border-stone-800 space-y-2">
                  <span className="text-[10px] uppercase font-mono text-emerald-400 font-bold block">Day 3 • HIIT Conditioning</span>
                  <h4 className="font-bold text-sm text-white">Kettlebell Swings &amp; Assault Bike</h4>
                  <p className="text-xs text-stone-400">6 rounds × 45s work / 15s rest • 520 kcal burn estimate</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="text-xs text-stone-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Integrated with apple Health &amp; Google Fit synchronization</span>
                </div>
                <button
                  onClick={() => setCheckoutModalPlan(FITPASS_PLANS[0])}
                  className="px-6 py-3 rounded-full bg-[#D6383B] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Activate ARIA Coach
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 5: FITFEAST (Nutrition Guidance & BMI Calculator)         */}
        {/* ============================================================== */}
        {activeTab === 'fitfeast' && (
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider border border-emerald-100">
                Certified Clinical Nutritionists
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#0A1F34]">
                FITFEAST: Nutrition Tailored to Real Lives
              </h1>
              <p className="text-sm text-gray-600">
                Workouts represent only 30% of your body composition transformation. FITFEAST pairs you with real certified clinical dieticians for customized daily meal charts.
              </p>
            </div>

            {/* Launch BMI Calculator Banner */}
            <div className="bg-gradient-to-r from-red-600 to-amber-600 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <h3 className="text-2xl sm:text-3xl font-black">
                  Calculate Your Body Mass Index (BMI)
                </h3>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                  Enter your height, weight, and age to get an immediate clinical BMI report and recommended daily caloric budget.
                </p>
              </div>
              <button
                onClick={() => setBmiModalOpen(true)}
                className="px-8 py-3.5 bg-white text-[#D6383B] hover:bg-stone-100 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg shrink-0 cursor-pointer"
              >
                Open Free BMI Calculator
              </button>
            </div>

            {/* 3 Pillars of FITFEAST */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-200 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl">
                  🥗
                </div>
                <h4 className="font-bold text-lg text-[#0A1F34]">Indian Diet Compatibility</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  No forced exotic foods. Our nutritionists design sustainable meal plans around homemade rotis, dals, paneer, and regional staples.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-200 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl">
                  💬
                </div>
                <h4 className="font-bold text-lg text-[#0A1F34]">Unlimited 1-on-1 Chat</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Going out for dinner or attending a wedding? Text your assigned nutritionist on WhatsApp for real-time menu guidance.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-200 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl">
                  📊
                </div>
                <h4 className="font-bold text-lg text-[#0A1F34]">Micro &amp; Macro Tracking</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Log your daily meals with our comprehensive Indian food database to effortlessly hit protein, fiber, and micronutrient targets.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 6: FITPASS-TV (Virtual Home Workouts)                      */}
        {/* ============================================================== */}
        {activeTab === 'tv' && (
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider border border-purple-100">
                4,000+ Global Masterclasses
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#0A1F34]">
                FITPASS-TV: Workout from Anywhere
              </h1>
              <p className="text-sm text-gray-600">
                Can’t make it to the gym today? Stream live and on-demand fitness classes led by celebrity master trainers from 50+ countries.
              </p>
            </div>

            {/* Video Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {FITPASS_TV_CLASSES.map(cls => (
                <div
                  key={cls.id}
                  className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-lg transition-all group"
                >
                  <div className="h-48 relative overflow-hidden bg-stone-900">
                    <img
                      src={cls.thumbnailUrl}
                      alt={cls.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#D6383B] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 ml-0.5 fill-white" />
                      </div>
                    </div>
                    <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-black/70 text-white uppercase">
                      {cls.category}
                    </span>
                  </div>

                  <div className="p-5 space-y-3">
                    <div>
                      <h4 className="font-bold text-base text-[#0A1F34]">{cls.title}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">{cls.trainer}</p>
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-600 pt-2 border-t border-gray-100">
                      <span>⏱️ {cls.durationMins} mins</span>
                      <span>🔥 {cls.calories} kcal</span>
                      <span className="font-bold text-[#D6383B]">{cls.difficulty}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 7: FITHEAL (Preventive Health Services)                   */}
        {/* ============================================================== */}
        {activeTab === 'fitheal' && (
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-100">
                Preventive Healthcare
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#0A1F34]">
                FITHEAL: Integrated Medical &amp; Wellness
              </h1>
              <p className="text-sm text-gray-600">
                Exercise, nutrition, and proactive medical monitoring belong under one roof. FITHEAL safeguards your lifelong fitness journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xl">
                  👨‍⚕️
                </div>
                <h4 className="font-bold text-lg text-[#0A1F34]">Online Doctor Consultations</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  24/7 video and tele-consultations with verified general physicians and sports medicine experts for injury prevention.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xl">
                  🧪
                </div>
                <h4 className="font-bold text-lg text-[#0A1F34]">Annual Diagnostic Check-Up</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Complimentary 60+ parameters blood profile including lipid panel, liver enzymes, and HbA1c with doorstep sample collection.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xl">
                  💊
                </div>
                <h4 className="font-bold text-lg text-[#0A1F34]">E-Pharmacy Vouchers</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Exclusive savings on whey proteins, multivitamins, electrolyte supplements, and prescription medications delivered to your home.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 8: FITNESS JOURNAL / BLOG                                 */}
        {/* ============================================================== */}
        {activeTab === 'blog' && (
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="px-3 py-1 rounded-full bg-red-50 text-[#D6383B] text-xs font-bold uppercase tracking-wider border border-red-100">
                Expert Evidence-Based Guides
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#0A1F34]">
                The FITPASS Fitness Journal
              </h1>
              <p className="text-sm text-gray-600">
                Actionable training methodologies, sports nutrition science, and motivation from India’s leading fitness experts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {FITPASS_BLOGS.map(article => (
                <div
                  key={article.id}
                  onClick={() => setSelectedBlogArticle(article)}
                  className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#D6383B] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center gap-2 text-[11px] text-gray-400 mb-1">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h4 className="font-bold text-base text-[#0A1F34] leading-snug group-hover:text-[#D6383B] transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-xs text-gray-600 line-clamp-2 mt-1.5 leading-relaxed">
                        {article.summary}
                      </p>
                    </div>

                    <span className="text-xs font-bold text-[#D6383B] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read Full Article →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* 3. Authentic FITPASS Footer */}
      <FitpassFooter
        onNavigate={setActiveTab}
        onOpenBmiModal={() => setBmiModalOpen(true)}
      />

      {/* ============================================================== */}
      {/* MODALS & OVERLAYS                                              */}
      {/* ============================================================== */}

      {/* Studio Detail Modal */}
      <StudioDetailModal
        studio={selectedStudioForDetail}
        onClose={() => setSelectedStudioForDetail(null)}
        onOpenBooking={studio => {
          setSelectedStudioForDetail(null);
          setSelectedStudioForBooking(studio);
        }}
      />

      {/* Reserve Session Modal */}
      <ReserveSessionModal
        studio={selectedStudioForBooking}
        onClose={() => setSelectedStudioForBooking(null)}
      />

      {/* City & Locality Selector Modal */}
      <CityModal
        isOpen={cityModalOpen}
        onClose={() => setCityModalOpen(false)}
        selectedCity={selectedCity}
        selectedLocality={selectedLocality}
        onSelectLocation={(city, locality) => {
          setSelectedCity(city);
          setSelectedLocality(locality);
        }}
      />

      {/* Interactive BMI Calculator Modal */}
      <BmiCalculatorModal
        isOpen={bmiModalOpen}
        onClose={() => setBmiModalOpen(false)}
        onExploreFitfeast={() => setActiveTab('fitfeast')}
      />

      {/* Login / OTP Modal */}
      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />

      {/* Subscribe Plan Checkout Modal */}
      <CheckoutModal
        plan={checkoutModalPlan}
        onClose={() => setCheckoutModalPlan(null)}
      />

      {/* Blog Article Reader Modal */}
      {selectedBlogArticle && (
        <div className="fixed inset-0 z-[10000] bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8 space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedBlogArticle(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 cursor-pointer"
            >
              ✕
            </button>

            <div>
              <span className="text-xs font-bold text-[#D6383B] uppercase tracking-wider">
                {selectedBlogArticle.category} • {selectedBlogArticle.readTime}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0A1F34] mt-1">
                {selectedBlogArticle.title}
              </h2>
              <span className="text-xs text-gray-400 block mt-1">{selectedBlogArticle.date}</span>
            </div>

            <div className="h-56 rounded-2xl overflow-hidden">
              <img src={selectedBlogArticle.imageUrl} alt={selectedBlogArticle.title} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
              {selectedBlogArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <button
              onClick={() => setSelectedBlogArticle(null)}
              className="w-full py-3 bg-[#0A1F34] text-white font-bold text-xs rounded-xl hover:bg-stone-900 transition-colors"
            >
              Close Article
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
