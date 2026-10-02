import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  Calendar,
  MapPin,
  Users,
  IndianRupee,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Star,
  Sparkles,
  Heart,
  Play,
  CheckCircle2,
  Compass,
  Building2,
  Award,
  Globe,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Clock,
  Shield,
  Search,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import {
  SMLW_VENUES,
  SMLW_DOMESTIC_DESTINATIONS,
  SMLW_INTERNATIONAL_DESTINATIONS,
  SMLW_WEDDING_TYPES,
  SMLW_SERVICES,
  SMLW_TESTIMONIALS,
  SMLW_VIDEOS,
  SMLW_FAQS,
  SMLW_COUPLES,
  SMLW_PARTNERS,
  SMLWVenue,
  SMLWVideo
} from './smlwData';
import { CheckAvailabilityModal } from './CheckAvailabilityModal';
import { QuickQuoteModal } from './QuickQuoteModal';
import { HotelCostCalculatorModal } from './HotelCostCalculatorModal';
import { AppointmentBookingModal } from './AppointmentBookingModal';
import { VideoPlayerModal } from './VideoPlayerModal';

export const SMLWWeddingsApp: React.FC = () => {
  // Page Meta title & SEO
  useEffect(() => {
    document.title = 'Best Wedding Planners in Delhi, Destination Wedding Planners Delhi, India | SMLW India';
    window.scrollTo(0, 0);
  }, []);

  // Modals state
  const [availModalOpen, setAvailModalOpen] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState<SMLWVenue | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [quickQuoteOpen, setQuickQuoteOpen] = useState(false);
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<SMLWVideo | null>(null);

  // Mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destDropdownOpen, setDestDropdownOpen] = useState(false);
  const [planningDropdownOpen, setPlanningDropdownOpen] = useState(false);

  // Hero Slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroSlides = [
    {
      title: 'Royal Venue for Your Special Day',
      highlight: 'Your Special Day',
      desc: 'Host your destination wedding amidst breathtaking architecture, luxurious hospitality, and beautifully landscaped surroundings.',
      bg: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&auto=format&fit=crop&q=80',
      actionText: 'Check Venue Availability',
      action: () => setAvailModalOpen(true)
    },
    {
      title: 'Celebrate Your Wedding in Royal Udaipur Luxury',
      highlight: 'Royal Udaipur Luxury',
      desc: 'Experience the charm of a grand destination wedding at one of Udaipur’s most luxurious palace resorts. From breathtaking lake views to royal architecture, create unforgettable memories.',
      bg: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600&auto=format&fit=crop&q=80',
      actionText: 'Start Planning',
      action: () => setAppointmentOpen(true)
    },
    {
      title: 'Say “I Do” in Royal Style',
      highlight: 'Royal Style',
      desc: 'Celebrate your special day at a stunning palace wedding venue with unforgettable hospitality, master culinary feasts, and imperial elegance.',
      bg: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&auto=format&fit=crop&q=80',
      actionText: 'View Your Estimate',
      action: () => setCalculatorOpen(true)
    },
    {
      title: 'Luxury Destination Weddings in Goa',
      highlight: 'Luxury Destination Weddings',
      desc: 'Create magical wedding memories at an elegant seaside resort with breathtaking ocean views and premium wedding experiences.',
      bg: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&auto=format&fit=crop&q=80',
      actionText: 'Check Venue Availability',
      action: () => setAvailModalOpen(true)
    },
    {
      title: 'Luxury Weddings, Crafted to Perfection',
      highlight: 'Crafted to Perfection',
      desc: 'Turn your wedding vision into reality with premium venues, elegant celebrations, and seamless end-to-end planning support.',
      bg: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?w=1600&auto=format&fit=crop&q=80',
      actionText: 'Book Wedding Consultation',
      action: () => setAppointmentOpen(true)
    }
  ];

  // Auto advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Venue Filters
  const [selectedDestinationFilter, setSelectedDestinationFilter] = useState<'all' | string>('all');
  const filteredVenues = selectedDestinationFilter === 'all'
    ? SMLW_VENUES
    : SMLW_VENUES.filter(v => v.city.toLowerCase().includes(selectedDestinationFilter.toLowerCase()));

  // Types of Wedding Tab
  const [activeWeddingType, setActiveWeddingType] = useState<string>('type-fort');
  const currentWeddingTypeObj = SMLW_WEDDING_TYPES.find(t => t.id === activeWeddingType) || SMLW_WEDDING_TYPES[0];

  // Accordion FAQ state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Search Widget State
  const [searchCity, setSearchCity] = useState('Udaipur');
  const [searchDates, setSearchDates] = useState('');
  const [searchMobile, setSearchMobile] = useState('');
  const [searchBudget, setSearchBudget] = useState('50');

  const handleWidgetCheckAvailability = (e: React.FormEvent) => {
    e.preventDefault();
    setSelectedCity(searchCity);
    setAvailModalOpen(true);
  };

  const handleOpenVenueAvail = (venue: SMLWVenue) => {
    setSelectedVenue(venue);
    setSelectedCity(venue.city);
    setAvailModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0e0e11] text-stone-100 font-['Red_Hat_Display',sans-serif] selection:bg-[#d2cd48] selection:text-black">
      {/* 1. Reference Site Switcher */}
      <ReferenceSiteSwitcher currentSiteId="smlwindia" />

      {/* 2. Secondary Header */}
      <div className="bg-[#17181e] text-stone-300 text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="text-[11px] sm:text-xs text-stone-300">
            Check <strong className="text-white font-semibold">Real-Time Venue Availability</strong> &amp; Best Pricing within <strong className="text-[#d2cd48] font-bold">24 Hours</strong> &nbsp;|&nbsp;
            <a href="tel:+919717430005" className="hover:text-[#d2cd48] font-bold text-white transition-colors ml-1.5 inline-flex items-center gap-1">
              <Phone className="w-3 h-3 text-[#d2cd48]" /> +91 97174 30005
            </a>
          </div>
          <div className="hidden sm:block">
            <button
              onClick={() => setAppointmentOpen(true)}
              className="px-4 py-1 rounded-full bg-gradient-to-r from-[#d2cd48] to-[#b8b335] text-black font-extrabold text-[11px] tracking-wide uppercase hover:opacity-90 transition-opacity cursor-pointer"
            >
              Book A Consultation
            </button>
          </div>
        </div>
      </div>

      {/* 3. Primary Header & Navigation */}
      <header className="sticky top-0 z-40 bg-[#121318]/95 backdrop-blur-md border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d2cd48] to-[#8d891b] flex items-center justify-center text-slate-950 font-black shadow-lg shadow-[#d2cd48]/15">
              <Sparkles className="w-5 h-5 text-black" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black tracking-tight text-white flex items-center gap-1.5">
                <span>SHUBH MUHURAT</span>
                <span className="text-[#d2cd48] font-light">LUXURY WEDDINGS</span>
              </div>
              <div className="text-[9px] tracking-widest text-stone-400 uppercase font-mono font-semibold">
                SMLW India · Destination Wedding Planners
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 text-xs font-bold text-stone-200">
            {/* Destinations Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setDestDropdownOpen(!destDropdownOpen)}
                className="px-3 py-2 rounded-lg hover:text-white hover:bg-stone-800/60 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>Destinations</span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-400 group-hover:text-white" />
              </button>

              <div className="absolute left-0 top-full mt-1 w-[540px] bg-[#17181f] border border-stone-800 rounded-2xl shadow-2xl p-4 hidden group-hover:block z-50">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-[11px] font-bold text-[#d2cd48] uppercase tracking-wider mb-2 border-b border-stone-800 pb-1">
                      Destinations In India
                    </h5>
                    <div className="space-y-1 text-xs">
                      {SMLW_DOMESTIC_DESTINATIONS.slice(0, 5).map(d => (
                        <button
                          key={d.id}
                          onClick={() => {
                            setSelectedDestinationFilter(d.name);
                            const el = document.getElementById('venues-section');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="w-full text-left py-1 px-2 rounded hover:bg-stone-800 text-stone-300 hover:text-white flex items-center justify-between"
                        >
                          <span>Wedding in {d.name}</span>
                          <span className="text-[10px] text-stone-500 font-mono">{d.venuesCount}+</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-[11px] font-bold text-[#d2cd48] uppercase tracking-wider mb-2 border-b border-stone-800 pb-1">
                      International Destinations
                    </h5>
                    <div className="space-y-1 text-xs">
                      {SMLW_INTERNATIONAL_DESTINATIONS.slice(0, 5).map(d => (
                        <button
                          key={d.id}
                          onClick={() => {
                            setSelectedDestinationFilter(d.country);
                            const el = document.getElementById('venues-section');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="w-full text-left py-1 px-2 rounded hover:bg-stone-800 text-stone-300 hover:text-white flex items-center justify-between"
                        >
                          <span>Wedding in {d.name}</span>
                          <span className="text-[10px] text-stone-500 font-mono">{d.venuesCount}+</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wedding Planning Dropdown */}
            <div className="relative group">
              <button
                className="px-3 py-2 rounded-lg hover:text-white hover:bg-stone-800/60 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>Wedding Planning</span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-400 group-hover:text-white" />
              </button>

              <div className="absolute left-0 top-full mt-1 w-64 bg-[#17181f] border border-stone-800 rounded-2xl shadow-2xl p-2 hidden group-hover:block z-50">
                {[
                  { label: 'Step-by-Step Guide', action: () => setAppointmentOpen(true) },
                  { label: 'Budget & Cost Calculator', action: () => setCalculatorOpen(true) },
                  { label: 'Our Services', action: () => { const el = document.getElementById('services-section'); el?.scrollIntoView({ behavior: 'smooth' }); } },
                  { label: 'Client Testimonials', action: () => { const el = document.getElementById('testimonials-section'); el?.scrollIntoView({ behavior: 'smooth' }); } },
                  { label: 'Preferred Partners', action: () => { const el = document.getElementById('partners-section'); el?.scrollIntoView({ behavior: 'smooth' }); } },
                  { label: 'Frequently Asked Questions', action: () => { const el = document.getElementById('faqs-section'); el?.scrollIntoView({ behavior: 'smooth' }); } }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={item.action}
                    className="w-full text-left py-2 px-3 rounded-lg hover:bg-stone-800 text-stone-300 hover:text-white text-xs font-medium transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                const el = document.getElementById('venues-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-3 py-2 rounded-lg hover:text-white hover:bg-stone-800/60 transition-colors cursor-pointer"
            >
              Hotels &amp; Venues
            </button>

            <button
              onClick={() => setCalculatorOpen(true)}
              className="px-3 py-2 rounded-lg hover:text-white hover:bg-stone-800/60 transition-colors cursor-pointer text-[#d2cd48]"
            >
              Cost Estimator
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('videos-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-3 py-2 rounded-lg hover:text-white hover:bg-stone-800/60 transition-colors cursor-pointer"
            >
              Real Weddings
            </button>

            <button
              onClick={() => setQuickQuoteOpen(true)}
              className="px-3 py-2 rounded-lg hover:text-white hover:bg-stone-800/60 transition-colors cursor-pointer"
            >
              Quick Quote
            </button>
          </nav>

          {/* Right Header CTAs */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setAvailModalOpen(true)}
              className="px-4 py-2 rounded-full bg-[#d2cd48] hover:bg-[#e0db52] text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#d2cd48]/15 cursor-pointer hidden sm:flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Check Availability</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-stone-800 text-stone-300 hover:text-white cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#16171d] border-b border-stone-800 p-4 space-y-2 text-sm">
            <button
              onClick={() => { setMobileMenuOpen(false); setAvailModalOpen(true); }}
              className="w-full text-left py-2 px-3 rounded-lg bg-[#d2cd48] text-black font-bold"
            >
              Check Real-Time Availability
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); setCalculatorOpen(true); }}
              className="w-full text-left py-2 px-3 rounded-lg hover:bg-stone-800 text-stone-200"
            >
              Hotel &amp; Wedding Cost Calculator
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); setAppointmentOpen(true); }}
              className="w-full text-left py-2 px-3 rounded-lg hover:bg-stone-800 text-stone-200"
            >
              Book 1-on-1 Consultation
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); setQuickQuoteOpen(true); }}
              className="w-full text-left py-2 px-3 rounded-lg hover:bg-stone-800 text-stone-200"
            >
              Quick Quote Form
            </button>
          </div>
        )}
      </header>

      {/* 4. Hero Banner Slider (5 Slides) */}
      <section className="relative h-[560px] sm:h-[660px] lg:h-[720px] overflow-hidden bg-black">
        {heroSlides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background with Dark Vignette */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-7000 ease-out scale-105"
                style={{ backgroundImage: `url(${slide.bg})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-transparent to-black/40" />
              </div>

              {/* Slide Content */}
              <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center">
                <div className="max-w-2xl text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d2cd48]/20 border border-[#d2cd48]/40 text-[#d2cd48] text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-sm">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>SMLW Luxury Weddings India</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                    {slide.title.replace(slide.highlight, '')}
                    <span className="text-[#d2cd48] block sm:inline">{slide.highlight}</span>
                  </h1>

                  <p className="text-sm sm:text-lg text-stone-300 font-normal leading-relaxed mb-6 max-w-xl">
                    {slide.desc}
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={slide.action}
                      className="px-6 py-3.5 rounded-full bg-[#d2cd48] hover:bg-[#e0db52] text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#d2cd48]/20 cursor-pointer flex items-center gap-2"
                    >
                      <span>{slide.actionText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setQuickQuoteOpen(true)}
                      className="px-6 py-3.5 rounded-full bg-stone-900/80 hover:bg-stone-800 text-white border border-stone-700 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Instant Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Slide Navigation Controls */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                idx === currentSlide ? 'w-8 bg-[#d2cd48]' : 'w-2 bg-stone-600 hover:bg-stone-400'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-[#d2cd48] hover:text-black flex items-center justify-center transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-[#d2cd48] hover:text-black flex items-center justify-center transition-colors cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </section>

      {/* 5. Interactive Check Availability Search Bar Widget */}
      <section className="relative z-30 max-w-6xl mx-auto px-4 -mt-14 sm:-mt-16">
        <div className="bg-[#1b1c24] border border-stone-700/80 rounded-2xl shadow-2xl p-4 sm:p-5">
          <form onSubmit={handleWidgetCheckAvailability} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {/* Destination */}
            <div className="bg-[#242530] rounded-xl px-3 py-2 border border-stone-700">
              <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#d2cd48]" /> Destination
              </label>
              <select
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                className="w-full bg-transparent text-white font-semibold text-xs focus:outline-none mt-0.5 cursor-pointer"
              >
                <option value="Jaipur" className="bg-[#1b1c24]">Jaipur</option>
                <option value="Udaipur" className="bg-[#1b1c24]">Udaipur</option>
                <option value="Goa" className="bg-[#1b1c24]">Goa</option>
                <option value="Delhi NCR" className="bg-[#1b1c24]">Delhi NCR</option>
                <option value="Mussoorie" className="bg-[#1b1c24]">Mussoorie</option>
                <option value="Shimla" className="bg-[#1b1c24]">Shimla</option>
                <option value="Dubai" className="bg-[#1b1c24]">Dubai</option>
                <option value="Thailand" className="bg-[#1b1c24]">Thailand</option>
              </select>
            </div>

            {/* Wedding Dates */}
            <div className="bg-[#242530] rounded-xl px-3 py-2 border border-stone-700">
              <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#d2cd48]" /> Wedding Dates
              </label>
              <input
                type="date"
                value={searchDates}
                onChange={(e) => setSearchDates(e.target.value)}
                className="w-full bg-transparent text-white font-semibold text-xs focus:outline-none mt-0.5"
                required
              />
            </div>

            {/* Phone */}
            <div className="bg-[#242530] rounded-xl px-3 py-2 border border-stone-700">
              <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block flex items-center gap-1">
                <Phone className="w-3 h-3 text-[#d2cd48]" /> Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 97174 30005"
                value={searchMobile}
                onChange={(e) => setSearchMobile(e.target.value)}
                className="w-full bg-transparent text-white font-semibold text-xs focus:outline-none mt-0.5 placeholder-stone-500"
                required
              />
            </div>

            {/* Budget */}
            <div className="bg-[#242530] rounded-xl px-3 py-2 border border-stone-700">
              <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block flex items-center gap-1">
                <IndianRupee className="w-3 h-3 text-[#d2cd48]" /> Budget (In Lakhs)
              </label>
              <input
                type="number"
                placeholder="Budget e.g. 50"
                value={searchBudget}
                onChange={(e) => setSearchBudget(e.target.value)}
                className="w-full bg-transparent text-white font-semibold text-xs focus:outline-none mt-0.5 placeholder-stone-500"
              />
            </div>

            {/* Submit */}
            <div className="flex items-center">
              <button
                type="submit"
                className="w-full h-full min-h-[46px] rounded-xl bg-gradient-to-r from-[#d2cd48] to-[#b8b335] text-black font-extrabold text-xs uppercase tracking-wider hover:opacity-95 transition-all shadow-md shadow-[#d2cd48]/15 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Check Availability</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 6. Domestic & International Locations Grid */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Domestic */}
          <div className="bg-[#16171e] p-6 rounded-2xl border border-stone-800">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Domestic Locations</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#d2cd48]/15 text-[#d2cd48] font-mono font-semibold">
                  Pan-India Palaces
                </span>
              </h2>
              <span className="text-xs text-stone-400">40+ Curated Hubs</span>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
              {SMLW_DOMESTIC_DESTINATIONS.slice(0, 5).map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setSelectedDestinationFilter(loc.name)}
                  className={`group flex flex-col items-center p-2 rounded-xl border transition-all cursor-pointer ${
                    selectedDestinationFilter === loc.name
                      ? 'bg-[#d2cd48]/15 border-[#d2cd48]'
                      : 'bg-[#1e1f28] border-stone-800 hover:border-stone-700'
                  }`}
                >
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-12 h-12 rounded-full object-cover mb-2 border border-stone-700 group-hover:scale-105 transition-transform"
                  />
                  <span className="text-[11px] font-bold text-white text-center leading-tight">
                    {loc.name}
                  </span>
                  <span className="text-[9px] text-[#d2cd48] mt-0.5">{loc.venuesCount}+ venues</span>
                </button>
              ))}

              <button
                onClick={() => setSelectedDestinationFilter('all')}
                className="flex flex-col items-center justify-center p-2 rounded-xl bg-gradient-to-br from-[#d2cd48] to-[#a39f1c] text-black font-extrabold cursor-pointer hover:opacity-90 transition-opacity"
              >
                <span className="text-sm font-black">+40</span>
                <span className="text-[9px] uppercase tracking-wider font-bold">See All</span>
              </button>
            </div>
          </div>

          {/* International */}
          <div className="bg-[#16171e] p-6 rounded-2xl border border-stone-800">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>International Locations</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-sky-500/15 text-sky-400 font-mono font-semibold">
                  Global Destinations
                </span>
              </h2>
              <span className="text-xs text-stone-400">20+ Countries</span>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
              {SMLW_INTERNATIONAL_DESTINATIONS.slice(0, 5).map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setSelectedDestinationFilter(loc.country)}
                  className={`group flex flex-col items-center p-2 rounded-xl border transition-all cursor-pointer ${
                    selectedDestinationFilter === loc.country
                      ? 'bg-[#d2cd48]/15 border-[#d2cd48]'
                      : 'bg-[#1e1f28] border-stone-800 hover:border-stone-700'
                  }`}
                >
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-12 h-12 rounded-full object-cover mb-2 border border-stone-700 group-hover:scale-105 transition-transform"
                  />
                  <span className="text-[11px] font-bold text-white text-center leading-tight">
                    {loc.country}
                  </span>
                  <span className="text-[9px] text-[#d2cd48] mt-0.5">{loc.venuesCount}+ venues</span>
                </button>
              ))}

              <button
                onClick={() => setSelectedDestinationFilter('all')}
                className="flex flex-col items-center justify-center p-2 rounded-xl bg-gradient-to-br from-[#d2cd48] to-[#a39f1c] text-black font-extrabold cursor-pointer hover:opacity-90 transition-opacity"
              >
                <span className="text-sm font-black">+20</span>
                <span className="text-[9px] uppercase tracking-wider font-bold">See All</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Curated Luxury Venues Section */}
      <section id="venues-section" className="py-12 bg-[#121319] border-y border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-1.5 text-[#d2cd48] text-xs font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Weddings Venues</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Explore Premier Venues for Your Special Day
              </h2>
              <p className="text-xs sm:text-sm text-stone-400 mt-1">
                Verified palatial ballrooms, private island resorts, and beachfront retreats with exclusive SMLW institutional rates.
              </p>
            </div>

            <div className="flex items-center gap-2">
              {selectedDestinationFilter !== 'all' && (
                <button
                  onClick={() => setSelectedDestinationFilter('all')}
                  className="px-3 py-1.5 rounded-lg bg-stone-800 text-stone-300 hover:text-white text-xs font-semibold cursor-pointer"
                >
                  Clear Filter: {selectedDestinationFilter} ✕
                </button>
              )}
              <button
                onClick={() => setAvailModalOpen(true)}
                className="px-4 py-2 rounded-full bg-[#d2cd48] text-black font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                Check All Availability
              </button>
            </div>
          </div>

          {/* Venues Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredVenues.map((venue) => (
              <div
                key={venue.id}
                className="bg-[#191a22] border border-stone-800 hover:border-stone-700 rounded-2xl overflow-hidden shadow-lg flex flex-col group transition-all"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={venue.featuredImage}
                    alt={venue.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[#d2cd48] text-[10px] font-bold uppercase tracking-wide border border-stone-700">
                    {venue.category}
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-amber-400 text-xs font-bold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span>{venue.rating}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-white line-clamp-1 group-hover:text-[#d2cd48] transition-colors">
                      {venue.name}
                    </h4>
                    <div className="flex items-center gap-1 text-xs text-stone-400 mt-1 mb-3">
                      <MapPin className="w-3.5 h-3.5 text-[#d2cd48]" />
                      <span>{venue.city}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 bg-[#20212b] p-2.5 rounded-xl border border-stone-800/80 text-xs mb-4">
                      <div>
                        <span className="text-[10px] text-stone-500 uppercase tracking-wider block">Max Guests</span>
                        <strong className="text-white font-semibold">{venue.guestMax} Pax</strong>
                      </div>
                      <div>
                        <span className="text-[10px] text-stone-500 uppercase tracking-wider block">Event Areas</span>
                        <strong className="text-white font-semibold">{venue.areasCount} Banquets</strong>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-stone-800/80 pt-3 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-500 block">Starting From</span>
                      <strong className="text-sm font-black text-[#d2cd48]">₹{venue.priceStartingLakhs} Lakhs*</strong>
                    </div>

                    <button
                      onClick={() => handleOpenVenueAvail(venue)}
                      className="px-3 py-1.5 rounded-lg bg-[#d2cd48] hover:bg-[#e0db52] text-black font-extrabold text-[11px] uppercase tracking-wide transition-colors cursor-pointer"
                    >
                      Check Dates
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Icons Panel */}
      <section className="bg-[#181921] py-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-xl bg-[#20212b] border border-stone-800 flex items-center justify-center gap-3">
              <span className="text-2xl">💍</span>
              <span className="font-bold text-xs text-white uppercase tracking-wider">
                100% Personalized Wedding Planning
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#20212b] border border-stone-800 flex items-center justify-center gap-3">
              <span className="text-2xl">🏆</span>
              <span className="font-bold text-xs text-white uppercase tracking-wider">
                Trusted Luxury Wedding Venue Experts
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#20212b] border border-stone-800 flex items-center justify-center gap-3">
              <span className="text-2xl">💰</span>
              <span className="font-bold text-xs text-white uppercase tracking-wider">
                Best Hotel Rates &amp; Exclusive Deals
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#20212b] border border-stone-800 flex items-center justify-center gap-3">
              <span className="text-2xl">👨‍👩‍👧‍👦</span>
              <span className="font-bold text-xs text-white uppercase tracking-wider">
                Destination Wedding Specialists
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Live Instagram Feed Section */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Wedding Stories From <span className="text-[#d2cd48]">Instagram</span>
          </h2>
          <div className="mt-4 bg-[#181921] border border-stone-800 rounded-2xl p-4 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-0.5">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Shubh Muhurat Luxury Weddings</h4>
                <p className="text-xs text-[#d2cd48]">@shubhmuhuratluxuryweddings</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <div><strong className="text-white">875</strong> <span className="text-stone-400">Posts</span></div>
              <div><strong className="text-white">13.2K</strong> <span className="text-stone-400">Followers</span></div>
              <div><strong className="text-white">236</strong> <span className="text-stone-400">Following</span></div>
            </div>

            <a
              href="https://www.instagram.com/shubhmuhuratluxuryweddings/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-1.5 rounded-full bg-[#d2cd48] hover:bg-[#e0db52] text-black font-extrabold text-xs uppercase tracking-wider transition-colors"
            >
              Follow
            </a>
          </div>
        </div>

        {/* 8 Instagram Feed Photos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1544077960-604201fe74bc?w=600&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=80'
          ].map((src, i) => (
            <a
              key={i}
              href="https://www.instagram.com/shubhmuhuratluxuryweddings/"
              target="_blank"
              rel="noreferrer"
              className="relative aspect-square rounded-xl overflow-hidden group border border-stone-800"
            >
              <img
                src={src}
                alt="Instagram story"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 text-white transition-opacity">
                <span className="flex items-center gap-1 text-xs font-bold"><Heart className="w-4 h-4 fill-rose-500 text-rose-500" /> 1.2k</span>
                <span className="flex items-center gap-1 text-xs font-bold"><Instagram className="w-4 h-4" /></span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 10. Types of Weddings & Helpdesk Section */}
      <section className="py-14 bg-[#14151c] border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-1.5 text-[#d2cd48] text-xs font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Types of Wedding</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Luxury Wedding Planners in Delhi NCR &amp; Destination India
              </h2>
              <div className="w-16 h-1 bg-[#d2cd48] my-3" />
              <p className="text-sm text-stone-300 leading-relaxed">
                We, at Shubh Muhurat Luxury Weddings (SMLW), make your dreams come true by planning the wedding in an adventurous and innovative way. Whether you are seeking a century-old royal fort, misty Himalayan mountain heights, golden sunset beaches, or royal Mewar palaces, our team crafts every nuance with bespoke artistry and flawless execution.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#1e1f29] p-6 rounded-2xl border border-stone-800">
              <h6 className="text-xs font-black uppercase tracking-wider text-[#d2cd48] mb-3">
                WE’LL HELP YOU:
              </h6>
              <ul className="space-y-2 text-xs text-stone-300">
                {[
                  'Choose the Perfect Luxury Resort / Palace',
                  'Confirm Your Wedding Date & Venue with Guaranteed Availability',
                  'Secure Exclusive Group Room Blocks with Zero Markup',
                  'Book Your Guests’ Airport Travel & VIP Escorts',
                  'Select & Customize Your Signature Wedding Package',
                  'Communicate With Onsite Hotel Planners & Chefs',
                  'Ensure a Smooth, Surprises-Free & Stress-Free Event'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#d2cd48] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Interactive Wedding Types Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 border-b border-stone-800 pb-3">
            {SMLW_WEDDING_TYPES.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveWeddingType(type.id)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                  activeWeddingType === type.id
                    ? 'bg-[#d2cd48] text-black shadow-md shadow-[#d2cd48]/15'
                    : 'bg-[#1b1c24] text-stone-400 hover:text-white hover:bg-stone-800'
                }`}
              >
                {type.title}
              </button>
            ))}
          </div>

          {/* Active Wedding Type Display Card */}
          <div className="bg-[#1b1c24] rounded-2xl border border-stone-800 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xl">
            <div className="lg:col-span-5 relative h-64 lg:h-auto">
              <img
                src={currentWeddingTypeObj.image}
                alt={currentWeddingTypeObj.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 lg:hidden">
                <span className="text-xl font-bold text-white">{currentWeddingTypeObj.title}</span>
              </div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-[#d2cd48] uppercase tracking-wider mb-1">
                  {currentWeddingTypeObj.subtitle}
                </div>
                <h3 className="text-2xl font-black text-white mb-3">
                  {currentWeddingTypeObj.title}
                </h3>
                <p className="text-sm text-stone-300 leading-relaxed mb-6">
                  {currentWeddingTypeObj.description}
                </p>

                <div>
                  <h5 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
                    Recommended Destinations:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {currentWeddingTypeObj.recommendedDestinations.map((dest, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-[#252632] border border-stone-700 text-xs text-stone-200"
                      >
                        📍 {dest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-800 flex items-center gap-3">
                <button
                  onClick={() => setAvailModalOpen(true)}
                  className="px-5 py-2.5 rounded-full bg-[#d2cd48] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#e0db52] transition-colors cursor-pointer"
                >
                  Plan A {currentWeddingTypeObj.title}
                </button>
                <button
                  onClick={() => setCalculatorOpen(true)}
                  className="px-5 py-2.5 rounded-full bg-stone-800 hover:bg-stone-700 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Calculate Budget
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. International Destinations Highlight Banner */}
      <section className="relative py-16 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=1600&auto=format&fit=crop&q=80')` }}>
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl bg-[#14151cf0] backdrop-blur-md p-8 rounded-2xl border border-stone-700 shadow-2xl">
            <h4 className="text-2xl sm:text-3xl font-black text-white mb-2">
              Most Popular Places for <br /><span className="text-[#d2cd48]">International Destination Weddings</span>
            </h4>
            <p className="text-sm text-stone-300 leading-relaxed mb-6">
              From the balmy breezes of Thailand’s Andaman Sea to the opulent royal desert estates of Dubai, and the historic clifftops of Bali and European castles, discover our premier international wedding portfolio designed to create romantic memories of a lifetime.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  setSelectedDestinationFilter('Thailand');
                  const el = document.getElementById('venues-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-full bg-[#d2cd48] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#e0db52] cursor-pointer transition-colors"
              >
                Explore Thailand &amp; Dubai Venues
              </button>
              <button
                onClick={() => setAppointmentOpen(true)}
                className="px-6 py-3 rounded-full bg-stone-800 text-white border border-stone-700 text-xs font-bold uppercase tracking-wider hover:bg-stone-700 cursor-pointer"
              >
                Request Overseas Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Stress-Free Destination Wedding Planning */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
          Stress-Free Destination Wedding Planning at Your Fingertips
        </h2>
        <p className="text-sm text-stone-400 max-w-2xl mx-auto mb-10">
          From master budgeting to destination guest logistics and breathtaking bespoke decor, we handle it all with certified expertise and unwavering devotion.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            {
              title: 'A World of Choice',
              desc: 'Explore over 1,200 verified luxury properties in 42 countries to find the perfect fit.',
              icon: '🏰',
              img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop&q=80'
            },
            {
              title: 'Personalized Celebrations',
              desc: 'Every romantic event and getaway is custom-designed around each couple’s unique vision.',
              icon: '💖',
              img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&auto=format&fit=crop&q=80'
            },
            {
              title: 'Dedicated Specialists',
              desc: 'Our award-winning Certified Destination Wedding Specialists support you every step.',
              icon: '👩‍💼',
              img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80'
            },
            {
              title: 'Exclusive Savings',
              desc: 'We offer amazing deals through our preferred hotel partner rates with zero hidden markups.',
              icon: '💎',
              img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&auto=format&fit=crop&q=80'
            },
            {
              title: 'All Complimentary',
              desc: 'Initial venue shortlisting and master budget feasibility consultation is 100% complimentary.',
              icon: '🎁',
              img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&auto=format&fit=crop&q=80'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#181921] border border-stone-800 rounded-2xl overflow-hidden text-left flex flex-col group hover:border-[#d2cd48]/40 transition-colors">
              <div className="h-32 overflow-hidden relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-black/80 flex items-center justify-center text-sm">
                  {item.icon}
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-sm text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-stone-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 13. Services We Provide */}
      <section id="services-section" className="py-16 bg-[#13141b] border-y border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-1.5 text-[#d2cd48] text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Turnkey Execution</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Services We Provide</h2>
            <p className="text-xs sm:text-sm text-stone-400 mt-2">
              Holistic end-to-end luxury wedding orchestration across design, guest logistics, banqueting, and celebrity artists.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SMLW_SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="bg-[#191a23] border border-stone-800 hover:border-stone-700 p-6 rounded-2xl flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#d2cd48]/15 text-[#d2cd48] flex items-center justify-center mb-4 border border-[#d2cd48]/30 group-hover:bg-[#d2cd48] group-hover:text-black transition-colors">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{srv.title}</h4>
                  <p className="text-xs text-stone-300 leading-relaxed mb-4">{srv.shortDesc}</p>

                  <div className="space-y-1.5 mb-6">
                    {srv.deliverables.map((d, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-stone-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#d2cd48]" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setAppointmentOpen(true)}
                  className="w-full py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center"
                >
                  Consult on {srv.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Real Wedding Videos Section */}
      <section id="videos-section" className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-1.5 text-[#d2cd48] text-xs font-bold uppercase tracking-wider mb-1">
              <Play className="w-3.5 h-3.5 fill-[#d2cd48]" />
              <span>Cinematic Highlights</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Real Wedding Videos</h2>
            <p className="text-xs sm:text-sm text-stone-400 mt-1">
              From Delhi and Udaipur to Goa, Thailand, and Mussoorie, watch our real couple wedding films.
            </p>
          </div>

          <a
            href="https://www.youtube.com/@shubhmuhuratluxuryweddings"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-full bg-stone-800 hover:bg-stone-700 text-white text-xs font-bold uppercase tracking-wider"
          >
            Visit YouTube Channel
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SMLW_VIDEOS.map((vid) => (
            <div
              key={vid.id}
              onClick={() => setActiveVideo(vid)}
              className="bg-[#181921] border border-stone-800 hover:border-stone-700 rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#d2cd48] text-black flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-black ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 font-mono text-[10px] text-white">
                  {vid.duration}
                </div>
              </div>

              <div className="p-4">
                <h4 className="font-bold text-sm text-white line-clamp-1 group-hover:text-[#d2cd48] transition-colors">
                  {vid.title}
                </h4>
                <div className="flex items-center justify-between text-xs text-stone-400 mt-1">
                  <span>{vid.couple}</span>
                  <span className="text-[#d2cd48]">{vid.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 15. Real Couples Gallery */}
      <section className="py-14 bg-[#14151c] border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Get Inspired by Our Beautiful Couples
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 mt-2">
              Our happy newlyweds have said &ldquo;I do&rdquo; across the grandest palaces and beaches of the world.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {SMLW_COUPLES.map((c, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden border border-stone-800 aspect-[4/5]">
                <img src={c.image} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-3">
                  <strong className="text-white text-xs font-bold block">{c.name}</strong>
                  <span className="text-[10px] text-[#d2cd48] truncate">{c.venue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. Celebrity & Client Testimonials Section */}
      <section id="testimonials-section" className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-1.5 text-[#d2cd48] text-xs font-bold uppercase tracking-wider mb-1">
            <Heart className="w-3.5 h-3.5 fill-[#d2cd48]" />
            <span>Words of Praise</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            What Our High-Profile Clients Are Saying
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-2">
            Read authentic reviews from Bollywood stars, corporate leaders, and global couples.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SMLW_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#181921] border border-stone-800 rounded-2xl p-6 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-stone-300 italic leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="border-t border-stone-800 pt-3 flex items-center justify-between">
                <div>
                  <strong className="text-sm font-bold text-white block">{t.name}</strong>
                  <span className="text-[11px] text-[#d2cd48]">{t.role}</span>
                </div>
                {t.location && (
                  <span className="text-[10px] text-stone-500 font-mono">📍 {t.location}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 17. Frequently Asked Questions (Accordion) */}
      <section id="faqs-section" className="py-16 bg-[#13141b] border-y border-stone-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-1.5 text-[#d2cd48] text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Destination Planning FAQs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-stone-400 mt-2">
              Everything you need to know about planning a palace or luxury beach wedding in India or abroad.
            </p>
          </div>

          <div className="space-y-3">
            {SMLW_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-[#181921] border border-stone-800 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-800/40"
                  >
                    <span className="font-bold text-sm sm:text-base text-white">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#d2cd48] shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-stone-300 leading-relaxed border-t border-stone-800/60 bg-[#16171f]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 18. Preferred Tourism & Hotel Partners */}
      <section id="partners-section" className="py-14 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h3 className="text-lg font-bold text-stone-300 uppercase tracking-wider mb-8">
          Preferred Tourism Boards &amp; Luxury Hospitality Partners
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
          {SMLW_PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="bg-[#181921] border border-stone-800 rounded-xl p-3 flex flex-col items-center justify-center text-center h-24 hover:border-[#d2cd48]/40 transition-colors"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-10 h-10 rounded-full object-cover mb-1.5 opacity-80"
              />
              <span className="text-[10px] font-semibold text-stone-400 line-clamp-2">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 19. Footer */}
      <footer className="bg-[#0b0c0f] border-t border-stone-800 pt-14 pb-8 text-stone-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Col 1 */}
            <div>
              <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li><button onClick={() => setAvailModalOpen(true)} className="hover:text-[#d2cd48] transition-colors">— &nbsp; Pre Wedding Shoots</button></li>
                <li><button onClick={() => setAvailModalOpen(true)} className="hover:text-[#d2cd48] transition-colors">— &nbsp; Cocktail Party Venues</button></li>
                <li><button onClick={() => setAppointmentOpen(true)} className="hover:text-[#d2cd48] transition-colors">— &nbsp; Wedding Planner India</button></li>
                <li><button onClick={() => setAvailModalOpen(true)} className="hover:text-[#d2cd48] transition-colors">— &nbsp; Wedding Reception</button></li>
                <li><button onClick={() => setAppointmentOpen(true)} className="hover:text-[#d2cd48] transition-colors">— &nbsp; Wedding Decoration</button></li>
                <li><button onClick={() => setAppointmentOpen(true)} className="hover:text-[#d2cd48] transition-colors">— &nbsp; Celebrity Artist Management</button></li>
              </ul>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
                Other Links
              </h4>
              <ul className="space-y-2">
                <li><button onClick={() => setCalculatorOpen(true)} className="hover:text-[#d2cd48] transition-colors">— &nbsp; Hotel Cost Calculator</button></li>
                <li><button onClick={() => setQuickQuoteOpen(true)} className="hover:text-[#d2cd48] transition-colors">— &nbsp; Instant Quick Quote</button></li>
                <li><button onClick={() => { const el = document.getElementById('videos-section'); el?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#d2cd48] transition-colors">— &nbsp; Real Wedding Videos</button></li>
                <li><button onClick={() => { const el = document.getElementById('services-section'); el?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#d2cd48] transition-colors">— &nbsp; Our Services</button></li>
                <li><button onClick={() => setAppointmentOpen(true)} className="hover:text-[#d2cd48] transition-colors">— &nbsp; Contact Us</button></li>
                <li><button onClick={() => setAppointmentOpen(true)} className="hover:text-[#d2cd48] transition-colors">— &nbsp; Our Certifications</button></li>
              </ul>
            </div>

            {/* Col 3: Contact */}
            <div>
              <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
                Contact Us
              </h4>
              <div className="space-y-2 text-stone-300">
                <p>New Delhi, India – 110001</p>
                <p>
                  <a href="mailto:smlwindia@gmail.com" className="text-[#d2cd48] hover:underline">
                    smlwindia@gmail.com
                  </a>
                </p>
                <p>
                  <a href="tel:+919717430005" className="text-white font-bold hover:text-[#d2cd48]">
                    +91 97174 30005
                  </a>
                </p>
                <p className="text-[11px] text-stone-500">
                  Concierge Desk Open: Mon – Sun 9:00 AM – 9:00 PM IST
                </p>
              </div>

              <div className="flex items-center gap-3 mt-4">
                <a href="https://www.facebook.com/ShubhMuhurat/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center hover:bg-[#d2cd48] hover:text-black transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/shubhmuhuratluxuryweddings/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center hover:bg-[#d2cd48] hover:text-black transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://twitter.com/smlwindia" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center hover:bg-[#d2cd48] hover:text-black transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/company/shubhmuhuratluxuryweddings/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center hover:bg-[#d2cd48] hover:text-black transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
                Why Choose SMLW
              </h4>
              <ul className="space-y-2">
                <li><button onClick={() => setAppointmentOpen(true)} className="hover:text-[#d2cd48] transition-colors">— &nbsp; 15+ Years Royal Heritage</button></li>
                <li><button onClick={() => setAppointmentOpen(true)} className="hover:text-[#d2cd48] transition-colors">— &nbsp; SMLW Dedicated Team</button></li>
                <li><button onClick={() => setCalculatorOpen(true)} className="hover:text-[#d2cd48] transition-colors">— &nbsp; Cost Saving Tips &amp; Hacks</button></li>
                <li><button onClick={() => setAppointmentOpen(true)} className="hover:text-[#d2cd48] transition-colors">— &nbsp; 100% Personalized Wedding</button></li>
                <li><button onClick={() => setAvailModalOpen(true)} className="hover:text-[#d2cd48] transition-colors">— &nbsp; Vow Renewal Destination</button></li>
                <li><button onClick={() => { const el = document.getElementById('faqs-section'); el?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#d2cd48] transition-colors">— &nbsp; FAQs - Questions Answered</button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-6 text-center text-stone-500 text-xs flex flex-col sm:flex-row items-center justify-between gap-2">
            <div>
              &copy; 2020 - 2030 copyright smlwindia.com. All rights reserved.
            </div>
            <div className="text-[11px] text-stone-400">
              Site #56 · Shubh Muhurat Luxury Weddings (SMLW) · Wedding Category
            </div>
          </div>
        </div>
      </footer>

      {/* 20. Floating Contact Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5">
        <a
          href="tel:+919717430005"
          className="px-4 py-2.5 rounded-full bg-stone-900 border border-stone-700 text-white hover:text-[#d2cd48] hover:border-[#d2cd48] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-2xl transition-all"
        >
          <Phone className="w-4 h-4 text-[#d2cd48]" />
          <span>LET’S TALK</span>
        </a>

        <a
          href="https://wa.me/919717430005?text=Hello%20SMLW%2C%20I%20would%20like%20to%20check%20destination%20wedding%20venue%20availability%20and%20rates."
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2.5 rounded-full bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-2xl hover:opacity-90 transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>LIVE CHAT</span>
        </a>
      </div>

      {/* 21. Modals */}
      <CheckAvailabilityModal
        isOpen={availModalOpen}
        onClose={() => setAvailModalOpen(false)}
        initialVenue={selectedVenue}
        initialCity={selectedCity}
      />

      <QuickQuoteModal
        isOpen={quickQuoteOpen}
        onClose={() => setQuickQuoteOpen(false)}
      />

      <HotelCostCalculatorModal
        isOpen={calculatorOpen}
        onClose={() => setCalculatorOpen(false)}
        onOpenCheckAvail={() => setAvailModalOpen(true)}
      />

      <AppointmentBookingModal
        isOpen={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
      />

      <VideoPlayerModal
        isOpen={!!activeVideo}
        onClose={() => setActiveVideo(null)}
        video={activeVideo}
      />
    </div>
  );
};
