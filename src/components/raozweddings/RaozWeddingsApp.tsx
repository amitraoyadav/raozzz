import React, { useState, useMemo, useEffect } from 'react';
import {
  RAOZ_WEDDINGS_CONTACT,
  WEDDING_CITIES,
  WEDDING_VENUES_DATA,
  WEDDING_SERVICES_DATA,
  DECOR_THEMES_DATA,
  PHOTOGRAPHY_PACKAGES_DATA,
  WEDDING_IDEAS_DATA,
  CLIENT_REVIEWS_DATA,
  FAQS_DATA,
  WeddingVenue,
  WeddingService,
  DecorTheme,
  PhotographyPackage,
  WeddingIdea
} from '../../data/raozWeddingsData';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import { ProposalModal } from './ProposalModal';
import { VenueDetailModal } from './VenueDetailModal';
import {
  Search,
  MapPin,
  Calendar,
  Users,
  IndianRupee,
  Phone,
  Sparkles,
  Star,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Building2,
  Camera,
  Heart,
  HelpCircle,
  Menu,
  X,
  CreditCard,
  Gift,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

export const RaozWeddingsApp: React.FC = () => {
  // Navigation & View State
  const [currentNav, setCurrentNav] = useState<'home' | 'venues' | 'services' | 'decor' | 'photographers' | 'ideas' | 'price-beat' | 'payment-plan'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Filter State
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [budgetFilter, setBudgetFilter] = useState<'all' | 'under1500' | '1500-2500' | 'luxury'>('all');

  // Modals State
  const [proposalModalOpen, setProposalModalOpen] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState<WeddingVenue | null>(null);

  // Review Slider State
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  // Ideabook Filter
  const [ideaCategory, setIdeaCategory] = useState<string>('all');

  // FAQ open indexes
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Set document title & SEO
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "RAOZ WEDDINGS | India's Premier Wedding Planning & Venue Discovery Platform";
    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'RAOZ WEDDINGS is your trusted platform for wedding venue booking across Bengaluru, Delhi, Mumbai, Goa, Jaipur & Udaipur, bespoke stage decor, cinematic photography, and guaranteed price savings.'
      );
    }
    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) {
        metaDesc.setAttribute('content', prevDesc);
      }
    };
  }, []);

  // Filtered Venues
  const filteredVenues = useMemo(() => {
    return WEDDING_VENUES_DATA.filter(venue => {
      const matchesCity = selectedCity === 'all' || venue.city === selectedCity;
      const matchesType = selectedType === 'all' || venue.type.toLowerCase() === selectedType.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        venue.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        venue.locality.toLowerCase().includes(searchQuery.toLowerCase()) ||
        venue.cityName.toLowerCase().includes(searchQuery.toLowerCase());

      let matchesBudget = true;
      if (budgetFilter === 'under1500') matchesBudget = venue.vegPrice <= 1500;
      else if (budgetFilter === '1500-2500') matchesBudget = venue.vegPrice > 1500 && venue.vegPrice <= 2500;
      else if (budgetFilter === 'luxury') matchesBudget = venue.vegPrice > 2500;

      return matchesCity && matchesType && matchesSearch && matchesBudget;
    });
  }, [selectedCity, selectedType, searchQuery, budgetFilter]);

  // Filtered Ideas
  const filteredIdeas = useMemo(() => {
    if (ideaCategory === 'all') return WEDDING_IDEAS_DATA;
    return WEDDING_IDEAS_DATA.filter(i => i.category === ideaCategory);
  }, [ideaCategory]);

  return (
    <div className="min-h-screen bg-[#FFF9F9] text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#9A2157] selection:text-white">
      {/* Site Switcher Header for Site #55 */}
      <ReferenceSiteSwitcher currentSiteId="raoz-weddings" />

      {/* Top Notification Bar */}
      <div className="bg-[#5C0632] text-white text-xs py-2 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Winter Wedding Saaya Season Open: Guaranteed 10% Extra Savings on Palaces &amp; Resorts!</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="hidden md:inline text-rose-200">
              Helpline: {RAOZ_WEDDINGS_CONTACT.supportPhone}
            </span>
            <a
              href={`https://api.whatsapp.com/send?phone=${RAOZ_WEDDINGS_CONTACT.phoneRaw}&text=Hi%20RAOZ%20WEDDINGS%2C%20I%20am%20looking%20for%20wedding%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 px-2.5 py-1 rounded-full font-bold text-white transition flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3" />
              <span>WhatsApp Expert</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-rose-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo & Brand */}
          <button
            onClick={() => {
              setCurrentNav('home');
              setSelectedCity('all');
            }}
            className="flex items-center gap-3 text-left group shrink-0 cursor-pointer"
          >
            <img
              src="/assets/raozweddings/logo.webp"
              alt="RAOZ WEDDINGS Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div>
              <span className="block text-xl sm:text-2xl font-black tracking-tight text-[#9A2157] font-serif leading-none">
                RAOZ <span className="text-amber-600 font-sans">WEDDINGS</span>
              </span>
              <span className="block text-[10px] tracking-wider uppercase font-bold text-slate-500 mt-1">
                Luxury Planning &amp; Venues
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-bold text-slate-700">
            <button
              onClick={() => setCurrentNav('venues')}
              className={`hover:text-[#9A2157] transition cursor-pointer ${
                currentNav === 'venues' ? 'text-[#9A2157] border-b-2 border-[#9A2157] pb-1' : ''
              }`}
            >
              Wedding Venues
            </button>
            <button
              onClick={() => setCurrentNav('services')}
              className={`hover:text-[#9A2157] transition cursor-pointer ${
                currentNav === 'services' ? 'text-[#9A2157] border-b-2 border-[#9A2157] pb-1' : ''
              }`}
            >
              Services
            </button>
            <button
              onClick={() => setCurrentNav('decor')}
              className={`hover:text-[#9A2157] transition cursor-pointer ${
                currentNav === 'decor' ? 'text-[#9A2157] border-b-2 border-[#9A2157] pb-1' : ''
              }`}
            >
              Decor &amp; Themes
            </button>
            <button
              onClick={() => setCurrentNav('photographers')}
              className={`hover:text-[#9A2157] transition cursor-pointer ${
                currentNav === 'photographers' ? 'text-[#9A2157] border-b-2 border-[#9A2157] pb-1' : ''
              }`}
            >
              Photographers
            </button>
            <button
              onClick={() => setCurrentNav('ideas')}
              className={`hover:text-[#9A2157] transition cursor-pointer ${
                currentNav === 'ideas' ? 'text-[#9A2157] border-b-2 border-[#9A2157] pb-1' : ''
              }`}
            >
              Ideabook
            </button>
            <button
              onClick={() => setCurrentNav('price-beat')}
              className={`hover:text-amber-600 text-amber-700 transition cursor-pointer flex items-center gap-1 ${
                currentNav === 'price-beat' ? 'border-b-2 border-amber-600 pb-1' : ''
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Price Beat</span>
            </button>
          </nav>

          {/* Header Action Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setProposalModalOpen(true)}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#9A2157] via-[#BC2D6D] to-[#9A2157] text-white font-bold text-xs shadow-md hover:shadow-lg hover:scale-[1.02] transition cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Start My Wedding Planning</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-rose-100 bg-white px-4 py-4 space-y-3 text-sm font-bold shadow-lg">
            <button
              onClick={() => {
                setCurrentNav('venues');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-slate-800 hover:text-[#9A2157]"
            >
              Wedding Venues
            </button>
            <button
              onClick={() => {
                setCurrentNav('services');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-slate-800 hover:text-[#9A2157]"
            >
              Services &amp; Planning
            </button>
            <button
              onClick={() => {
                setCurrentNav('decor');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-slate-800 hover:text-[#9A2157]"
            >
              Decor &amp; Themes
            </button>
            <button
              onClick={() => {
                setCurrentNav('photographers');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-slate-800 hover:text-[#9A2157]"
            >
              Photographers &amp; Cinema
            </button>
            <button
              onClick={() => {
                setCurrentNav('ideas');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-slate-800 hover:text-[#9A2157]"
            >
              Ideabook (10,000+ Ideas)
            </button>
            <button
              onClick={() => {
                setCurrentNav('price-beat');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-amber-700"
            >
              Price Beat Challenge (Save 10%)
            </button>
            <button
              onClick={() => {
                setProposalModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-[#9A2157] to-[#BC2D6D] text-white font-bold text-center block shadow"
            >
              Start Wedding Planning
            </button>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-[580px] sm:min-h-[640px] flex items-center justify-center text-center px-4 py-16 overflow-hidden">
          {/* Background image & gradient overlay */}
          <img
            src="/assets/raozweddings/hero-bg.webp"
            alt="Dream Wedding Background"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-[#5C0632]/90" />

          {/* Hero Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-white">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-amber-300 font-bold text-xs uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>India’s Leading End-to-End Wedding Company</span>
            </span>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-serif tracking-tight leading-tight sm:leading-tight">
              Best Wedding Services <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-200 to-amber-200">
                &amp; Luxury Venues in India
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-slate-200 mt-4 max-w-2xl mx-auto font-medium">
              Curating 2,500+ verified wedding palaces, resorts &amp; banquets with 100% price guarantee, bespoke floral decor, and master wedding planners.
            </p>

            {/* Quick Search & City Selector Bar */}
            <div className="mt-8 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-3xl shadow-2xl text-slate-900 border border-white/50 text-left max-w-3xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* City */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#9A2157]" />
                    Select Destination
                  </label>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full text-xs sm:text-sm font-bold bg-slate-100 border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:ring-2 focus:ring-[#9A2157]"
                  >
                    <option value="all">All Top Indian Cities (8)</option>
                    {WEDDING_CITIES.map(c => (
                      <option key={c.id} value={c.id}>
                        {c.name} ({c.venuesCount}+ venues)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Venue Type */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-[#9A2157]" />
                    Venue Category
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full text-xs sm:text-sm font-bold bg-slate-100 border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:ring-2 focus:ring-[#9A2157]"
                  >
                    <option value="all">All Types (Resorts, Palaces, Lawns)</option>
                    <option value="resort">Luxury Resorts</option>
                    <option value="palace">Royal Palaces &amp; Forts</option>
                    <option value="banquet hall">Grand Banquet Halls</option>
                    <option value="farmhouse">Expansive Farmhouses</option>
                    <option value="lawn">Open Green Lawns</option>
                    <option value="hotel">5-Star Hotels</option>
                  </select>
                </div>

                {/* Search / Budget */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <IndianRupee className="w-3.5 h-3.5 text-[#9A2157]" />
                    Plate Budget
                  </label>
                  <select
                    value={budgetFilter}
                    onChange={(e: any) => setBudgetFilter(e.target.value)}
                    className="w-full text-xs sm:text-sm font-bold bg-slate-100 border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:ring-2 focus:ring-[#9A2157]"
                  >
                    <option value="all">Any Price Range</option>
                    <option value="under1500">Under ₹1,500 / Plate</option>
                    <option value="1500-2500">₹1,500 - ₹2,500 / Plate</option>
                    <option value="luxury">Luxury (₹2,500+ / Plate)</option>
                  </select>
                </div>
              </div>

              {/* Bottom Quick Search text input */}
              <div className="mt-3 pt-3 border-t border-slate-200 flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    placeholder="Search by venue name or locality (e.g. Amita Rasa, Nandi Hills, Goa...)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 text-xs border border-slate-200 rounded-xl bg-slate-50 focus:bg-white outline-none focus:ring-2 focus:ring-[#9A2157]"
                  />
                </div>
                <button
                  onClick={() => setProposalModalOpen(true)}
                  className="px-6 py-2 rounded-xl bg-[#9A2157] hover:bg-[#7D1B46] text-white font-bold text-xs transition cursor-pointer shrink-0 shadow flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Get Free Quote</span>
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                1,200+ Executed Weddings
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                100% Price Beat Guarantee
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                4.9/5 Rating on Google
              </span>
              <span className="flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-rose-300" />
                0% Interest Wedding EMI
              </span>
            </div>
          </div>
        </section>

        {/* POPULAR CITIES STRIP */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
          <div className="bg-white rounded-3xl p-5 shadow-xl border border-rose-100">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 font-serif">
                  Explore Wedding Venues by Top Destinations
                </h3>
                <p className="text-xs text-slate-500">
                  Select a city to discover hand-picked palaces, beach resorts, and banquet halls
                </p>
              </div>
              {selectedCity !== 'all' && (
                <button
                  onClick={() => setSelectedCity('all')}
                  className="text-xs text-[#9A2157] font-bold hover:underline cursor-pointer"
                >
                  View All Cities
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {WEDDING_CITIES.map(city => {
                const isSelected = selectedCity === city.id;
                return (
                  <button
                    key={city.id}
                    onClick={() => {
                      setSelectedCity(city.id);
                      setCurrentNav('venues');
                    }}
                    className={`group relative rounded-2xl overflow-hidden aspect-[4/5] border transition-all text-left cursor-pointer ${
                      isSelected
                        ? 'ring-3 ring-[#9A2157] border-transparent shadow-lg scale-105'
                        : 'border-slate-200 hover:border-rose-300 hover:shadow-md'
                    }`}
                  >
                    <img
                      src={city.image}
                      alt={city.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2 text-white">
                      <span className="block text-xs font-black font-serif leading-tight">
                        {city.name}
                      </span>
                      <span className="text-[10px] text-amber-300 font-semibold">
                        {city.venuesCount}+ Venues
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS (3 STEPS) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#9A2157] bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Simple 3-Step Process
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-serif text-slate-900 mt-2">
              Book Your Wedding Service in 3 Easy Steps
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              We eliminate the stress of calling dozens of vendors. Tell us your dream, and we handle the rest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-rose-100 relative group hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-[#9A2157] flex items-center justify-center font-black text-xl mb-4">
                1
              </div>
              <img
                src="/assets/raozweddings/step1.webp"
                alt="Share Requirements"
                className="w-full h-40 object-cover rounded-2xl mb-4"
              />
              <h3 className="text-lg font-black text-slate-900 font-serif">
                Share Your Requirements
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Tell us your target event dates, budget, destination, guest count, and whether you want beach, palace, or garden lawns.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-rose-100 relative group hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-black text-xl mb-4">
                2
              </div>
              <img
                src="/assets/raozweddings/step2.webp"
                alt="Get Personalized Proposal"
                className="w-full h-40 object-cover rounded-2xl mb-4"
              />
              <h3 className="text-lg font-black text-slate-900 font-serif">
                Get a Personalized Proposal
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Receive the best negotiated deals on verified venues, catering menus, and 3D decor designs with our Price Beat Guarantee.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-rose-100 relative group hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xl mb-4">
                3
              </div>
              <img
                src="/assets/raozweddings/step3.webp"
                alt="Flawless Execution"
                className="w-full h-40 object-cover rounded-2xl mb-4"
              />
              <h3 className="text-lg font-black text-slate-900 font-serif">
                Stress-Free Execution
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                A senior dedicated wedding planner and 6-member day coordination team runs your ceremonies with military precision.
              </p>
            </div>
          </div>
        </section>

        {/* VENUES DIRECTORY SECTION */}
        <section id="venues" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#9A2157]">
                Verified Venue Collection
              </span>
              <h2 className="text-2xl sm:text-4xl font-black font-serif text-slate-900 mt-1">
                Curated Wedding Venues Across India
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Showing {filteredVenues.length} hand-picked luxury hotels, palatial havelis, and beachfront resorts
              </p>
            </div>

            {/* City filter pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2">
              <button
                onClick={() => setSelectedCity('all')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold shrink-0 transition cursor-pointer ${
                  selectedCity === 'all'
                    ? 'bg-[#9A2157] text-white shadow'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                All Cities
              </button>
              {WEDDING_CITIES.map(c => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCity(c.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold shrink-0 transition cursor-pointer ${
                    selectedCity === c.id
                      ? 'bg-[#9A2157] text-white shadow'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* Venues Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVenues.map(venue => (
              <div
                key={venue.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-rose-100 transition flex flex-col group"
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={venue.featuredImage}
                    alt={venue.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  
                  {venue.badge && (
                    <span className="absolute top-3 left-3 bg-[#9A2157] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow">
                      {venue.badge}
                    </span>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                    <span className="text-xs font-semibold capitalize bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
                      {venue.type} · {venue.cityName}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-bold text-amber-300">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      {venue.rating}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-black font-serif text-slate-900 group-hover:text-[#9A2157] transition">
                      {venue.name}
                    </h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-1 truncate">
                      <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span>{venue.locality}</span>
                    </p>
                  </div>

                  {/* Pricing & Capacity snapshot */}
                  <div className="grid grid-cols-2 gap-2 bg-rose-50/50 p-3 rounded-2xl border border-rose-100 text-xs">
                    <div>
                      <span className="block text-[10px] font-bold text-slate-500 uppercase">Veg Plate</span>
                      <span className="font-black text-[#9A2157] text-sm">
                        ₹{venue.vegPrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-slate-500 uppercase">Guest Capacity</span>
                      <span className="font-black text-slate-800 text-sm">
                        {venue.capacityMin} - {venue.capacityMax}
                      </span>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                    <button
                      onClick={() => setSelectedVenue(venue)}
                      className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs transition cursor-pointer text-center"
                    >
                      View Venue Details
                    </button>
                    <button
                      onClick={() => {
                        setSelectedVenue(venue);
                        setProposalModalOpen(true);
                      }}
                      className="px-4 py-2.5 rounded-xl bg-[#9A2157] hover:bg-[#7D1B46] text-white font-bold text-xs transition cursor-pointer shadow"
                    >
                      Book Visit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="bg-white py-16 border-y border-rose-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-[#9A2157] bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                End-To-End Services
              </span>
              <h2 className="text-2xl sm:text-4xl font-black font-serif text-slate-900 mt-2">
                Wedding Planning Services Offered by RAOZ WEDDINGS
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Your one-stop destination for complete wedding fulfillment. Transparent, reliable, and tailored to your budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WEDDING_SERVICES_DATA.map(service => (
                <div
                  key={service.id}
                  className="bg-[#FFF9F9] rounded-3xl p-6 border border-rose-100 shadow-sm hover:shadow-xl transition flex flex-col justify-between"
                >
                  <div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-44 object-cover rounded-2xl mb-4"
                    />
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-[#9A2157]">
                        Starting from {service.startingPrice}
                      </span>
                      <span className="text-[10px] bg-rose-100 text-rose-800 font-bold px-2 py-0.5 rounded">
                        Guaranteed Deals
                      </span>
                    </div>
                    <h3 className="text-lg font-black font-serif text-slate-900">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <div className="mt-4 space-y-1.5">
                      {service.deliverables.slice(0, 3).map((d, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setProposalModalOpen(true)}
                    className="w-full mt-6 py-2.5 rounded-xl bg-white border border-[#9A2157] text-[#9A2157] hover:bg-[#9A2157] hover:text-white font-bold text-xs transition cursor-pointer shadow-sm"
                  >
                    Inquire About This Service
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DECOR & MANDAP SECTION */}
        <section id="decor" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#9A2157]">
              Bespoke Production
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-serif text-slate-900 mt-2">
              Wedding Decoration &amp; Mandap Themes
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              From Royal Sheesh Mahal to Bohemian Sunset Beachfront sets, view our 3D custom decor themes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DECOR_THEMES_DATA.slice(0, 3).map(theme => (
              <div
                key={theme.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-rose-100 transition group"
              >
                <div className="h-60 overflow-hidden relative">
                  <img
                    src={theme.image}
                    alt={theme.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-black/60 text-white text-[10px] font-bold px-2.5 py-1 rounded backdrop-blur-sm">
                    {theme.style}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-black font-serif text-slate-900">
                    {theme.title}
                  </h3>
                  <span className="block text-xs font-bold text-[#9A2157] mt-1">
                    {theme.priceRange}
                  </span>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {theme.description}
                  </p>
                  <button
                    onClick={() => setProposalModalOpen(true)}
                    className="mt-4 w-full py-2 rounded-xl bg-rose-50 text-[#9A2157] font-bold text-xs hover:bg-[#9A2157] hover:text-white transition cursor-pointer"
                  >
                    Get 3D Decor Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PHOTOGRAPHY PACKAGES */}
        <section id="photographers" className="bg-[#5C0632] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-amber-300">
                Memories That Last A Lifetime
              </span>
              <h2 className="text-2xl sm:text-4xl font-black font-serif text-white mt-2">
                Wedding Photography &amp; Cinematography Packages
              </h2>
              <p className="text-xs sm:text-sm text-rose-200 mt-2">
                Award-winning candid storytellers, 4K aerial drones, and handcrafted Italian leather albums.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PHOTOGRAPHY_PACKAGES_DATA.map(pkg => (
                <div
                  key={pkg.id}
                  className={`rounded-3xl p-6 relative flex flex-col justify-between ${
                    pkg.popular
                      ? 'bg-gradient-to-b from-white/20 to-white/10 border-2 border-amber-400 shadow-2xl scale-105'
                      : 'bg-white/10 border border-white/20'
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-3 py-1 rounded-full shadow">
                      Most Popular Package
                    </span>
                  )}
                  <div>
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                      {pkg.tier} Tier
                    </span>
                    <h3 className="text-xl font-black font-serif mt-1">{pkg.title}</h3>
                    <div className="mt-3 mb-4">
                      <span className="text-3xl font-black">{pkg.price}</span>
                      <span className="text-xs text-rose-200 block">{pkg.days} · {pkg.team}</span>
                    </div>

                    <div className="space-y-2 text-xs text-slate-200 border-t border-white/20 pt-4">
                      {pkg.deliverables.map((del, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-300 shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setProposalModalOpen(true)}
                    className="w-full mt-6 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow transition cursor-pointer"
                  >
                    Book Photography Consultation
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IDEABOOK & INSPIRATION */}
        <section id="ideas" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#9A2157]">
                Wedding Inspiration
              </span>
              <h2 className="text-2xl sm:text-4xl font-black font-serif text-slate-900 mt-1">
                Explore 10,000+ Wedding Ideas in Your Ideabook
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Discover trending bridal lehengas, groom sherwanis, jewellery, and photoshoot poses.
              </p>
            </div>

            {/* Idea Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              <button
                onClick={() => setIdeaCategory('all')}
                className={`px-3 py-1 rounded-full text-xs font-bold shrink-0 transition cursor-pointer ${
                  ideaCategory === 'all'
                    ? 'bg-[#9A2157] text-white'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                All Ideas
              </button>
              {['sarees', 'pre-wedding-shoot', 'jewellery', 'venue-ideas', 'photoshoot-poses', 'groom-dresses', 'bridal-lehengas'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setIdeaCategory(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-bold shrink-0 capitalize transition cursor-pointer ${
                    ideaCategory === cat
                      ? 'bg-[#9A2157] text-white'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {cat.replace(/-/g, ' ')}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredIdeas.slice(0, 8).map(idea => (
              <div
                key={idea.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-rose-100 transition group"
              >
                <div className="h-52 relative overflow-hidden bg-slate-900">
                  <img
                    src={idea.image}
                    alt={idea.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-sm">
                    {idea.categoryLabel}
                  </span>
                  <span className="absolute bottom-2.5 right-2.5 bg-rose-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                    <Heart className="w-3 h-3 fill-white" />
                    {idea.likesCount}
                  </span>
                </div>
                <div className="p-3.5">
                  <h4 className="text-xs font-bold text-slate-900 line-clamp-1">{idea.title}</h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2 mt-1">{idea.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRICE BEAT GUARANTEE BANNER */}
        <section id="price-beat" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="rounded-3xl bg-gradient-to-r from-amber-500 via-rose-600 to-[#9A2157] p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/20 text-amber-200 text-xs font-black uppercase tracking-wider mb-3">
                <ShieldCheck className="w-4 h-4" />
                Industry First Promise
              </span>
              <h2 className="text-2xl sm:text-4xl font-black font-serif leading-tight">
                RAOZ Price Beat Challenge: 5% - 10% Guaranteed Extra Savings
              </h2>
              <p className="text-xs sm:text-sm text-rose-100 mt-3 leading-relaxed">
                Already received a formal quotation from any verified venue, decorator, or photographer? Bring it to us! We guarantee to beat their final invoice price by 5% to 10% or give you a ₹25,000 complimentary decor voucher.
              </p>
            </div>
            <button
              onClick={() => setProposalModalOpen(true)}
              className="px-8 py-4 rounded-2xl bg-white text-slate-950 font-black text-sm shadow-2xl hover:bg-amber-100 hover:scale-105 transition cursor-pointer shrink-0"
            >
              Submit Quote to Beat
            </button>
          </div>
        </section>

        {/* CLIENT REVIEWS SECTION */}
        <section className="bg-white py-16 border-t border-rose-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-[#9A2157]">
                Happy Couples &amp; Families
              </span>
              <h2 className="text-2xl sm:text-4xl font-black font-serif text-slate-900 mt-2">
                Our Clients’ Reviews &amp; Experiences
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Hear directly from couples whose weddings we orchestrated with love and precision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CLIENT_REVIEWS_DATA.map(rev => (
                <div
                  key={rev.id}
                  className="bg-rose-50/60 rounded-3xl p-6 border border-rose-100 flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 mb-3">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-700 italic leading-relaxed">
                      "{rev.reviewText}"
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-rose-100 flex items-center gap-3">
                    <img
                      src={rev.image}
                      alt={rev.coupleName}
                      className="w-10 h-10 rounded-full object-cover border border-[#9A2157]"
                    />
                    <div>
                      <span className="block text-xs font-black text-slate-900 font-serif">
                        {rev.coupleName}
                      </span>
                      <span className="block text-[10px] text-slate-500">
                        {rev.venueName} · {rev.weddingDate}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-[#9A2157]">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-serif text-slate-900 mt-1">
              Frequently Asked Questions (FAQs)
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS_DATA.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-rose-100 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-[#9A2157] transition cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-[#9A2157]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* VENDOR ONBOARDING BANNER */}
        <section className="bg-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Partner Network
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-serif mt-1">
                Are you a Wedding Venue Owner or Vendor?
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Join India's fastest growing wedding fulfillment network. Receive high-intent leads with guaranteed booking conversions.
              </p>
            </div>
            <button
              onClick={() => setProposalModalOpen(true)}
              className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shrink-0 cursor-pointer shadow"
            >
              Register as Partner
            </button>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#2D0318] text-white border-t border-rose-950/40 pt-16 pb-24 lg:pb-16 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <img src="/assets/raozweddings/logo.webp" alt="RAOZ WEDDINGS" className="h-10 w-auto brightness-125" />
              <span className="text-lg font-black font-serif tracking-tight text-white">
                RAOZ <span className="text-amber-400 font-sans">WEDDINGS</span>
              </span>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              India’s premier wedding planning, venue discovery, and full-service coordination portal. Making dream weddings real, transparent, and joyful.
            </p>
            <div className="text-slate-300 space-y-1">
              <p>Corporate Office: {RAOZ_WEDDINGS_CONTACT.corporateOffice}</p>
              <p>Helpline: {RAOZ_WEDDINGS_CONTACT.supportPhone}</p>
              <p>Email: {RAOZ_WEDDINGS_CONTACT.email}</p>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-bold text-amber-300 uppercase tracking-wider mb-3">
              Top Wedding Destinations
            </h4>
            <ul className="space-y-2 text-slate-400">
              {WEDDING_CITIES.map(c => (
                <li key={c.id}>
                  <button
                    onClick={() => {
                      setSelectedCity(c.id);
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }}
                    className="hover:text-white transition cursor-pointer text-left"
                  >
                    Wedding Venues in {c.name} ({c.venuesCount}+)
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-amber-300 uppercase tracking-wider mb-3">
              Wedding Services
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>Wedding Planning &amp; Management</li>
              <li>Venue Booking &amp; Price Beat</li>
              <li>Designer Stage &amp; Mandap Decor</li>
              <li>Candid Photography &amp; 4K Drone</li>
              <li>Gourmet Catering &amp; Live Stations</li>
              <li>Guest Hospitality &amp; Fleet Transfers</li>
              <li>0% Interest Wedding Payment Plan</li>
            </ul>
          </div>

          {/* Legal & Trust */}
          <div>
            <h4 className="font-bold text-amber-300 uppercase tracking-wider mb-3">
              Company &amp; Legal
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>Client Terms of Use</li>
              <li>Vendor Partner Agreement</li>
              <li>Privacy Policy</li>
              <li>Refund &amp; Cancellation Policy</li>
              <li>Price Beat Challenge Terms</li>
            </ul>
            <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-rose-200">
              Site #55 · Wedding Category <br />
              All Rights Reserved © 2026 RAOZ WEDDINGS
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-white/10 text-center text-slate-500 text-[10px]">
          Disclaimer: RAOZ WEDDINGS facilitates venue discovery, customized proposals, and end-to-end wedding production. Verified prices and availability are updated in real-time.
        </div>
      </footer>

      {/* Floating Sticky Bottom Bar for Instant Action */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-rose-200 p-3 flex items-center justify-between gap-3 shadow-2xl max-w-4xl mx-auto rounded-t-3xl">
        <div className="hidden sm:block text-xs">
          <span className="font-bold text-slate-900 block">Planning a Wedding?</span>
          <span className="text-slate-500 text-[11px]">Get a tailored proposal &amp; save up to 10% on venues</span>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <a
            href={`https://api.whatsapp.com/send?phone=${RAOZ_WEDDINGS_CONTACT.phoneRaw}&text=Hi%20RAOZ%20WEDDINGS%2C%20I%20want%20to%20plan%20my%20wedding.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none px-4 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </a>
          <button
            onClick={() => setProposalModalOpen(true)}
            className="flex-1 sm:flex-none px-6 py-3 rounded-2xl bg-gradient-to-r from-[#9A2157] via-[#BC2D6D] to-[#9A2157] text-white font-bold text-xs shadow-lg hover:shadow-xl transition cursor-pointer flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Start My Wedding Planning</span>
          </button>
        </div>
      </div>

      {/* Modals */}
      <ProposalModal
        isOpen={proposalModalOpen}
        onClose={() => setProposalModalOpen(false)}
        selectedCity={selectedCity !== 'all' ? selectedCity : 'bengaluru'}
      />

      <VenueDetailModal
        venue={selectedVenue}
        onClose={() => setSelectedVenue(null)}
        onOpenProposal={() => setProposalModalOpen(true)}
      />
    </div>
  );
};
