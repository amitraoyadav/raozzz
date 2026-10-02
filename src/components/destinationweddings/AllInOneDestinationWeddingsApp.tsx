import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Users,
  Search,
  MapPin,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Heart,
  Gift,
  Check,
  CheckCircle2,
  Phone,
  Mail,
  Building2,
  Compass,
  Star,
  ExternalLink,
  Menu,
  X,
  ArrowRight,
  Globe,
  SlidersHorizontal,
  Bell
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import {
  DW_REGIONS,
  DW_RESORTS,
  DW_TOP_LOCATIONS,
  DW_EXCLUSIVE_OFFERS,
  DW_REAL_WEDDINGS,
  DW_TESTIMONIALS,
  DW_FAQS,
  DW_SEASONS,
  DW_GUEST_COUNTS,
  DWRegion,
  DWResort,
  DWExclusiveOffer
} from './destinationWeddingsData';
import { PlanningQuoteModal } from './PlanningQuoteModal';
import { ResortSearchModal } from './ResortSearchModal';
import { FindWeddingModal } from './FindWeddingModal';
import { OfferDetailsModal } from './OfferDetailsModal';

export const AllInOneDestinationWeddingsApp: React.FC = () => {
  // Page Title & SEO
  useEffect(() => {
    document.title = 'Destination Wedding Packages, Venues, Planning | All In One Destination Weddings';
    window.scrollTo(0, 0);
  }, []);

  // Modals
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [findWeddingModalOpen, setFindWeddingModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState<DWExclusiveOffer | null>(null);
  const [offerModalOpen, setOfferModalOpen] = useState(false);

  // Form selections for hero widget
  const [selectedSeason, setSelectedSeason] = useState('Spring 2027');
  const [seasonDropdownOpen, setSeasonDropdownOpen] = useState(false);
  const [selectedGuests, setSelectedGuests] = useState('A Happy Medium (25-49 guests)');
  const [guestsDropdownOpen, setGuestsDropdownOpen] = useState(false);

  // Bottom widget state
  const [bottomSeason, setBottomSeason] = useState('Fall 2027');
  const [bottomSeasonOpen, setBottomSeasonOpen] = useState(false);
  const [bottomGuests, setBottomGuests] = useState('Large Group (50-99 guests)');
  const [bottomGuestsOpen, setBottomGuestsOpen] = useState(false);

  // Topbar notification ticker
  const [tickerIndex, setTickerIndex] = useState(0);
  const topNotifications = [
    { text: 'Limited Time Offer: Up to $2,500 off your destination wedding', action: () => handleOpenOfferById('offer-2500-off') },
    { text: 'ENTER NOW TO WIN: $500 AMAZON GIFT CARD WITH FREE CONSULTATION', action: () => setQuoteModalOpen(true) }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % topNotifications.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [topNotifications.length]);

  // Destination Locations Slider
  const [activeLocSlide, setActiveLocSlide] = useState(0);

  // Testimonials Slider
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // FAQ Accordion
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Mega-menu tabs for destinations
  const [activeDestTab, setActiveDestTab] = useState<string>('mexico');
  const activeRegionObj = DW_REGIONS.find((r) => r.id === activeDestTab) || DW_REGIONS[0];

  // Mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDestOpen, setMobileDestOpen] = useState(false);
  const [mobileResortsOpen, setMobileResortsOpen] = useState(false);

  const handleOpenOfferById = (offerId: string) => {
    const found = DW_EXCLUSIVE_OFFERS.find((o) => o.id === offerId) || DW_EXCLUSIVE_OFFERS[0];
    setSelectedOffer(found);
    setOfferModalOpen(true);
  };

  const handleSelectResortFromSearch = (resort: DWResort) => {
    setSelectedOffer(DW_EXCLUSIVE_OFFERS[0]);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-stone-800 font-sans selection:bg-[#b3275a] selection:text-white">
      {/* 1. Reference Site Switcher */}
      <ReferenceSiteSwitcher currentSiteId="all-in-one-destination-weddings" />

      {/* 2. Topbar Notification Slider */}
      <div className="bg-[#b3275a] text-white text-xs py-2 px-4 shadow-inner relative z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex-1 flex items-center justify-center gap-2 text-center text-[11px] sm:text-xs font-semibold">
            <Bell className="w-3.5 h-3.5 animate-pulse shrink-0" />
            <span
              onClick={topNotifications[tickerIndex].action}
              className="cursor-pointer hover:underline tracking-wide truncate max-w-xl"
            >
              {topNotifications[tickerIndex].text}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 shrink-0 ml-4">
            <button
              onClick={() => setTickerIndex((prev) => (prev - 1 + topNotifications.length) % topNotifications.length)}
              className="p-1 rounded hover:bg-white/20 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setTickerIndex((prev) => (prev + 1) % topNotifications.length)}
              className="p-1 rounded hover:bg-white/20 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. Primary Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="w-10 h-10 rounded-full bg-[#b3275a] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 fill-white" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black tracking-tight text-stone-900 flex items-center gap-1">
                <span>ALL IN ONE</span>
                <span className="text-[#b3275a] font-serif font-normal italic">DESTINATION WEDDINGS</span>
              </div>
              <div className="text-[9px] tracking-widest text-stone-500 uppercase font-bold">
                Certified Specialists &bull; 100% Free Service
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links with Mega-Menus */}
          <nav className="hidden lg:flex items-center gap-1 text-xs font-bold text-stone-700">
            {/* Wedding Destinations Mega Dropdown */}
            <div className="relative group">
              <button
                className="px-3 py-2 rounded-lg hover:text-[#b3275a] hover:bg-stone-50 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>Wedding Destinations</span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#b3275a]" />
              </button>

              <div className="absolute left-0 top-full mt-1 w-[720px] bg-white border border-stone-200 rounded-2xl shadow-2xl p-6 hidden group-hover:block z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="grid grid-cols-12 gap-6">
                  {/* Regions list tab */}
                  <div className="col-span-5 border-r border-stone-100 pr-4 space-y-1">
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-2">
                      Select Country / Region
                    </span>
                    {DW_REGIONS.map((r) => (
                      <button
                        key={r.id}
                        onMouseEnter={() => setActiveDestTab(r.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                          activeDestTab === r.id
                            ? 'bg-[#b3275a] text-white shadow-sm'
                            : 'text-stone-700 hover:bg-stone-100'
                        }`}
                      >
                        <span>{r.name}</span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-70" />
                      </button>
                    ))}
                  </div>

                  {/* Active Region's Sub-Destinations & Guides */}
                  <div className="col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-black text-stone-900">
                          {activeRegionObj.name} Destinations
                        </h4>
                        <span className="text-[10px] text-[#b3275a] font-bold">
                          {activeRegionObj.resortsCount}+ Resorts
                        </span>
                      </div>
                      <p className="text-xs text-stone-500 mb-4 leading-relaxed">
                        {activeRegionObj.description}
                      </p>

                      <div className="grid grid-cols-2 gap-2 text-xs font-medium text-stone-700 mb-4">
                        {activeRegionObj.subdestinations.map((sub, i) => (
                          <div
                            key={i}
                            onClick={() => {
                              setSelectedSeason('Spring 2027');
                              setQuoteModalOpen(true);
                            }}
                            className="p-1.5 rounded hover:bg-stone-100 hover:text-[#b3275a] cursor-pointer flex items-center gap-1.5 transition-colors"
                          >
                            <MapPin className="w-3 h-3 text-[#b3275a]" />
                            <span>{sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                      <div className="text-[11px] font-bold text-[#b3275a] truncate max-w-[240px]">
                        Guide: {activeRegionObj.guideTitle}
                      </div>
                      <button
                        onClick={() => setQuoteModalOpen(true)}
                        className="px-3.5 py-1.5 rounded-full bg-[#b3275a] text-white text-[11px] font-bold hover:bg-[#8d1b44] transition-colors cursor-pointer"
                      >
                        Explore {activeRegionObj.name}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resorts & Venues Dropdown */}
            <div className="relative group">
              <button
                className="px-3 py-2 rounded-lg hover:text-[#b3275a] hover:bg-stone-50 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>Resorts &amp; Venues</span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#b3275a]" />
              </button>

              <div className="absolute left-0 top-full mt-1 w-64 bg-white border border-stone-200 rounded-2xl shadow-xl p-2 hidden group-hover:block z-50 animate-in fade-in zoom-in-95 duration-150">
                {[
                  { label: 'All-Inclusive Resorts', action: () => setSearchModalOpen(true) },
                  { label: 'Top Recommended Resorts', action: () => setSearchModalOpen(true) },
                  { label: 'Resort Brands (Dreams, Hard Rock, etc.)', action: () => setSearchModalOpen(true) },
                  { label: 'Resort Inspiration (Adults-Only, Family)', action: () => setSearchModalOpen(true) },
                  { label: 'Luxury Private Villas (Los Cabos)', action: () => setSearchModalOpen(true) }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={item.action}
                    className="w-full text-left py-2 px-3 rounded-lg hover:bg-stone-100 text-stone-700 hover:text-[#b3275a] text-xs font-semibold transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Wedding Planning */}
            <div className="relative group">
              <button
                className="px-3 py-2 rounded-lg hover:text-[#b3275a] hover:bg-stone-50 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>Wedding Planning</span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#b3275a]" />
              </button>

              <div className="absolute left-0 top-full mt-1 w-64 bg-white border border-stone-200 rounded-2xl shadow-xl p-2 hidden group-hover:block z-50">
                {[
                  { label: 'How It Works (5 Easy Steps)', action: () => { document.getElementById('how-it-works-sec')?.scrollIntoView({ behavior: 'smooth' }); } },
                  { label: 'Wedding Planning FAQs', action: () => { document.getElementById('faqs-sec')?.scrollIntoView({ behavior: 'smooth' }); } },
                  { label: 'Cost-Saving Tips & Budget Info', action: () => setQuoteModalOpen(true) },
                  { label: 'Meet Our Certified Specialists', action: () => setQuoteModalOpen(true) }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={item.action}
                    className="w-full text-left py-2 px-3 rounded-lg hover:bg-stone-100 text-stone-700 hover:text-[#b3275a] text-xs font-semibold transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Real Weddings */}
            <button
              onClick={() => { document.getElementById('real-weddings-sec')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-3 py-2 rounded-lg hover:text-[#b3275a] hover:bg-stone-50 transition-colors cursor-pointer"
            >
              Real Weddings
            </button>

            {/* Exclusive Offers */}
            <button
              onClick={() => { document.getElementById('offers-sec')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-3 py-2 rounded-lg hover:text-[#b3275a] hover:bg-stone-50 transition-colors cursor-pointer text-[#b3275a]"
            >
              Exclusive Offers
            </button>

            {/* Guest Resources: Find a Wedding */}
            <button
              onClick={() => setFindWeddingModalOpen(true)}
              className="px-3 py-2 rounded-lg hover:text-[#b3275a] hover:bg-stone-50 transition-colors cursor-pointer text-stone-600"
            >
              Find a Wedding
            </button>
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="flex items-center gap-3">
            {/* Search Trigger */}
            <button
              onClick={() => setSearchModalOpen(true)}
              className="p-2 rounded-full hover:bg-stone-100 text-stone-600 hover:text-[#b3275a] transition-colors cursor-pointer"
              title="Search Hotels & Resorts"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Start Planning Button */}
            <button
              onClick={() => setQuoteModalOpen(true)}
              className="px-5 py-2.5 rounded-full bg-[#b3275a] hover:bg-[#8d1b44] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#b3275a]/20 cursor-pointer hidden sm:flex items-center gap-1.5"
            >
              <span>START PLANNING</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-stone-100 text-stone-700 hover:text-[#b3275a]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 p-4 space-y-2 text-xs font-bold text-stone-800">
            <button
              onClick={() => { setMobileMenuOpen(false); setQuoteModalOpen(true); }}
              className="w-full text-left py-2.5 px-3 rounded-lg bg-[#b3275a] text-white uppercase tracking-wider"
            >
              START PLANNING (FREE)
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); setSearchModalOpen(true); }}
              className="w-full text-left py-2 px-3 rounded-lg hover:bg-stone-100"
            >
              Search Hotels &amp; Resorts
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); setFindWeddingModalOpen(true); }}
              className="w-full text-left py-2 px-3 rounded-lg hover:bg-stone-100"
            >
              Guest Resources: Find a Wedding
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); document.getElementById('how-it-works-sec')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="w-full text-left py-2 px-3 rounded-lg hover:bg-stone-100"
            >
              How It Works
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); document.getElementById('offers-sec')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="w-full text-left py-2 px-3 rounded-lg hover:bg-stone-100"
            >
              Exclusive Offers
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); document.getElementById('real-weddings-sec')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="w-full text-left py-2 px-3 rounded-lg hover:bg-stone-100"
            >
              Real Weddings
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); document.getElementById('faqs-sec')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="w-full text-left py-2 px-3 rounded-lg hover:bg-stone-100"
            >
              Planning FAQs
            </button>
          </div>
        )}
      </header>

      {/* 4. Hero Banner & Lead Intake Widget */}
      <section className="relative h-[600px] sm:h-[650px] lg:h-[700px] overflow-hidden bg-stone-900 flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-7000 scale-105"
          style={{
            backgroundImage: `url('https://assets.milestoneinternet.com/cdn-cgi/image/width=1380,height=625,f=auto/destination-weddings-travel-group/homepage-hero-2.jpg?cropW=7836&cropH=3549')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/30" />
        </div>

        {/* Hero Content Box */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 drop-shadow-md">
            Let Our Experts Help Plan Your <br className="hidden sm:inline" />
            <span className="text-rose-200 font-serif italic">Perfect Destination Wedding</span>
          </h1>

          <p className="text-sm sm:text-base text-stone-200 max-w-2xl mx-auto mb-8 drop-shadow leading-relaxed">
            100% Free Service &bull; Certified Destination Wedding Specialists &bull; Best Group Prices &bull; Over 30,000 Happy Couples
          </p>

          {/* Interactive Intake Widget */}
          <div className="bg-white/95 backdrop-blur-md p-4 sm:p-6 rounded-3xl shadow-2xl max-w-3xl mx-auto border border-white/50 text-stone-900 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
              {/* Season Selection */}
              <div className="lg:col-span-5 relative">
                <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#b3275a]" /> When&rsquo;s the big day?
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setSeasonDropdownOpen(!seasonDropdownOpen);
                    setGuestsDropdownOpen(false);
                  }}
                  className="w-full bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs font-bold text-stone-800 text-left flex items-center justify-between cursor-pointer"
                >
                  <span className="truncate">{selectedSeason}</span>
                  <ChevronDown className="w-4 h-4 text-stone-500 shrink-0" />
                </button>

                {seasonDropdownOpen && (
                  <div className="absolute left-0 top-full mt-1 w-full bg-white border border-stone-200 rounded-xl shadow-xl max-h-48 overflow-y-auto z-50 p-1">
                    {DW_SEASONS.map((s) => (
                      <div
                        key={s}
                        onClick={() => {
                          setSelectedSeason(s);
                          setSeasonDropdownOpen(false);
                        }}
                        className="px-3 py-2 text-xs font-medium hover:bg-stone-100 hover:text-[#b3275a] rounded-lg cursor-pointer transition-colors"
                      >
                        {s}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Guests Selection */}
              <div className="lg:col-span-4 relative">
                <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mb-1 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-[#b3275a]" /> How many guests?
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setGuestsDropdownOpen(!guestsDropdownOpen);
                    setSeasonDropdownOpen(false);
                  }}
                  className="w-full bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs font-bold text-stone-800 text-left flex items-center justify-between cursor-pointer"
                >
                  <span className="truncate">{selectedGuests}</span>
                  <ChevronDown className="w-4 h-4 text-stone-500 shrink-0" />
                </button>

                {guestsDropdownOpen && (
                  <div className="absolute left-0 top-full mt-1 w-full bg-white border border-stone-200 rounded-xl shadow-xl max-h-48 overflow-y-auto z-50 p-1">
                    {DW_GUEST_COUNTS.map((g) => (
                      <div
                        key={g}
                        onClick={() => {
                          setSelectedGuests(g);
                          setGuestsDropdownOpen(false);
                        }}
                        className="px-3 py-2 text-xs font-medium hover:bg-stone-100 hover:text-[#b3275a] rounded-lg cursor-pointer transition-colors"
                      >
                        {g}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Get Started CTA */}
              <div className="lg:col-span-3 pt-4 sm:pt-0">
                <label className="hidden lg:block text-[10px] font-bold text-transparent mb-1">Action</label>
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="w-full py-3 rounded-xl bg-[#b3275a] hover:bg-[#8d1b44] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#b3275a]/30 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>GET STARTED</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Giveaway promotion ticker beneath hero */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-full max-w-xl px-4">
          <div
            onClick={() => setQuoteModalOpen(true)}
            className="p-2 px-4 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-center text-[11px] text-white font-medium hover:bg-black/80 transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            <Gift className="w-4 h-4 text-[#f76d9e]" />
            <span>Have a FREE consultation and you&rsquo;ll be automatically entered to win $500.</span>
          </div>
        </div>
      </section>

      {/* 5. Four Key USPs Bar */}
      <section className="bg-white py-10 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 flex flex-col items-center">
              <span className="text-3xl mb-2">🥂</span>
              <h3 className="font-bold text-sm text-stone-900">100% Free Service</h3>
              <p className="text-[11px] text-stone-500 mt-0.5">Zero fees, zero markups</p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 flex flex-col items-center">
              <span className="text-3xl mb-2">👩‍💼</span>
              <h3 className="font-bold text-sm text-stone-900">Award-Winning Specialists</h3>
              <p className="text-[11px] text-stone-500 mt-0.5">Dedicated destination experts</p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 flex flex-col items-center">
              <span className="text-3xl mb-2">🎁</span>
              <h3 className="font-bold text-sm text-stone-900">Best Prices &amp; Offers</h3>
              <p className="text-[11px] text-stone-500 mt-0.5">Exclusive partner resort perks</p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 flex flex-col items-center">
              <span className="text-3xl mb-2">✈️</span>
              <h3 className="font-bold text-sm text-stone-900">Group Travel Expertise</h3>
              <p className="text-[11px] text-stone-500 mt-0.5">Seamless guest room blocks</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Headline & "We'll Help You" Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1 text-[#b3275a] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Stress-Free Planning</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 leading-tight mb-4">
              Plan Your Dream Destination Wedding Today
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-4">
              As the #1 provider of destination wedding travel services, we offer you the expertise, personalized assistance, and peace of mind needed to plan your perfect celebration abroad. Our Certified Destination Wedding Specialists will be with you every step of the way, helping make your dream destination wedding a reality—all at no cost to you.
            </p>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-6">
              To get started, simply tell us what you&rsquo;re looking for in your celebration. We&rsquo;ll pair you with a Specialist whose expertise matches your preferences. Plus, you&rsquo;ll be automatically entered to win a $500 Gift Card.
            </p>

            <button
              onClick={() => setQuoteModalOpen(true)}
              className="px-8 py-3.5 rounded-full bg-[#b3275a] hover:bg-[#8d1b44] text-white font-extrabold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
            >
              Speak with an Expert Today
            </button>
          </div>

          <div className="lg:col-span-5 bg-rose-50/50 p-6 sm:p-8 rounded-3xl border border-rose-100">
            <h3 className="text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#b3275a] fill-[#b3275a]" />
              <span>We&rsquo;ll Help You:</span>
            </h3>

            <ul className="space-y-3 text-xs sm:text-sm text-stone-700">
              {[
                'Choose the Perfect All-Inclusive Resort or Luxury Villa',
                'Confirm Your Wedding Date & Ceremony Venue',
                'Secure Your Group Room Block with Exclusive Rates',
                'Book Flights, Transfers & Itineraries for All Guests',
                'Select & Customize Your Resort Wedding Package',
                'Directly Communicate With On-Site Wedding Planners',
                'Ensure a Completely Smooth & Stress-Free Event'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#b3275a] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. How It Works (5 Easy Steps) */}
      <section id="how-it-works-sec" className="py-20 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#b3275a] uppercase tracking-widest block mb-1">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 mb-3">
              We Make It as Easy as Saying &ldquo;I Do&rdquo;
            </h2>
            <p className="text-sm text-stone-600">
              From your first consultation to your final dance on the beach, we handle the logistics so you enjoy the journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                step: '01',
                title: 'Tell Us About Your Big Day',
                desc: 'Fill out a brief form to help us understand your vision, dates, and budget for your wedding.',
                icon: '📋'
              },
              {
                step: '02',
                title: 'Meet Your Specialist',
                desc: 'We’ll pair you with an expert Certified Specialist dedicated to your vision.',
                icon: '🤝'
              },
              {
                step: '03',
                title: 'Choose Your Dream Location',
                desc: 'Your Specialist helps you compare resorts, packages, perks, and venues to find the match.',
                icon: '🏖️'
              },
              {
                step: '04',
                title: 'Leave Travel to Us',
                desc: 'We secure your room block, answer guest inquiries, and book seamless reservations.',
                icon: '✈️'
              },
              {
                step: '05',
                title: 'Finalize & Say "I Do"',
                desc: 'Work with the on-site resort coordinator while we ensure every detail unfolds smoothly.',
                icon: '💍'
              }
            ].map((s, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between hover:border-[#b3275a] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{s.icon}</span>
                    <span className="font-mono text-xs font-bold text-[#b3275a] bg-rose-50 px-2 py-0.5 rounded">
                      Step {s.step}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-stone-900 mb-2">{s.title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Top Destination Wedding Locations Slider */}
      <section className="bg-[#b3275a] text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-rose-200 block mb-1">
                Explore The World
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Top Destination Wedding Locations
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveLocSlide((prev) => (prev - 1 + DW_TOP_LOCATIONS.length) % DW_TOP_LOCATIONS.length)}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#b3275a] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveLocSlide((prev) => (prev + 1) % DW_TOP_LOCATIONS.length)}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#b3275a] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Location Cards Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DW_TOP_LOCATIONS.slice(activeLocSlide, activeLocSlide + 3).concat(
              DW_TOP_LOCATIONS.slice(0, Math.max(0, activeLocSlide + 3 - DW_TOP_LOCATIONS.length))
            ).map((loc) => (
              <div
                key={loc.id}
                onClick={() => {
                  setSelectedSeason('Spring 2027');
                  setQuoteModalOpen(true);
                }}
                className="bg-white text-stone-900 rounded-3xl overflow-hidden shadow-xl group cursor-pointer flex flex-col justify-between transition-transform hover:-translate-y-1"
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                    {loc.country}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-black text-stone-900 group-hover:text-[#b3275a] transition-colors mb-2">
                      {loc.name}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed mb-4">
                      {loc.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-[#b3275a]">
                    <span>Learn More &amp; See Resorts</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots tracker */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {DW_TOP_LOCATIONS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveLocSlide(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  idx === activeLocSlide ? 'w-8 bg-white' : 'w-2 bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 9. Exclusive Offers Cards Section */}
      <section id="offers-sec" className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#b3275a] uppercase tracking-widest block mb-1">
            Exclusive Offers
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 mb-3">
            Savings You Won&rsquo;t Find Anywhere Else
          </h2>
          <p className="text-sm text-stone-600">
            Enjoy major group discounts, complimentary wedding collections, and free anniversary return stays at leading partner resorts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DW_EXCLUSIVE_OFFERS.map((offer) => (
            <div
              key={offer.id}
              onClick={() => handleOpenOfferById(offer.id)}
              className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#b3275a] text-white text-[10px] font-bold uppercase tracking-wider shadow">
                    {offer.badge}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-stone-900 group-hover:text-[#b3275a] transition-colors mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {offer.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-[#b3275a]">
                  <span>Learn More &amp; Claim Offer</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Testimonials Slider */}
      <section className="py-20 bg-[#b3275a] text-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-200 block mb-2">
            Real Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-10">
            Couples Love Our Certified Specialists
          </h2>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 sm:p-12 rounded-3xl shadow-xl relative">
            <blockquote className="text-sm sm:text-lg text-white italic leading-relaxed mb-6 font-serif">
              &ldquo;{DW_TESTIMONIALS[activeTestimonial].quote}&rdquo;
            </blockquote>

            <cite className="not-italic font-sans block">
              <span className="font-bold text-base text-white block">
                &mdash; {DW_TESTIMONIALS[activeTestimonial].author}
              </span>
              <span className="text-xs text-rose-200">
                Verified review via {DW_TESTIMONIALS[activeTestimonial].platform} &bull; {DW_TESTIMONIALS[activeTestimonial].destination}
              </span>
            </cite>

            {/* Slider navigation buttons */}
            <button
              onClick={() => setActiveTestimonial((prev) => (prev - 1 + DW_TESTIMONIALS.length) % DW_TESTIMONIALS.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#b3275a] flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveTestimonial((prev) => (prev + 1) % DW_TESTIMONIALS.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#b3275a] flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 11. Real Weddings Photo Gallery */}
      <section id="real-weddings-sec" className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold text-[#b3275a] uppercase tracking-widest block mb-1">
              Inspiration Gallery
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900">
              Real Couples, Real Weddings
            </h2>
          </div>

          <button
            onClick={() => setQuoteModalOpen(true)}
            className="px-6 py-2.5 rounded-full bg-[#b3275a] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#8d1b44] transition-colors cursor-pointer self-start sm:self-auto"
          >
            Get Inspired With a Specialist
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {DW_REAL_WEDDINGS.map((rw) => (
            <div
              key={rw.id}
              onClick={() => setQuoteModalOpen(true)}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-md hover:shadow-xl cursor-pointer"
            >
              <img
                src={rw.image}
                alt={rw.couple}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] font-mono font-bold text-[#f76d9e] uppercase tracking-wider">
                  {rw.resort}
                </span>
                <h3 className="text-xl font-bold text-white mb-1">{rw.couple}</h3>
                <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
                  {rw.location}, {rw.country}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 12. Planning FAQs (Accordion) */}
      <section id="faqs-sec" className="py-20 bg-stone-50 border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-[#b3275a] uppercase tracking-widest block mb-1">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900">
              Wedding Planning FAQs
            </h2>
            <p className="text-sm text-stone-600 mt-2">
              Everything you need to know about destination wedding packages, average costs, and working with our specialists.
            </p>
          </div>

          <div className="space-y-3">
            {DW_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-stone-200 rounded-2xl overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50"
                  >
                    <span className="font-bold text-sm sm:text-base text-stone-900">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#b3275a] shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">
                      {faq.answer.split('\n\n').map((para, pIdx) => (
                        <p key={pIdx} className="mb-2 last:mb-0">{para}</p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. Over 30,000 Celebrations Planned Bottom Banner */}
      <section className="py-20 bg-white border-t border-stone-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 mb-2">
            Over 30,000 Personalized Celebrations Planned.
          </h2>
          <p className="text-stone-600 text-sm mb-8">
            Let us help plan yours! Tell us your timeline and party size to connect with a specialist today.
          </p>

          <div className="bg-stone-100 p-4 sm:p-6 rounded-3xl max-w-2xl mx-auto border border-stone-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {/* Season Selection */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setBottomSeasonOpen(!bottomSeasonOpen)}
                  className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-xs font-bold text-stone-800 text-left flex items-center justify-between cursor-pointer"
                >
                  <span className="truncate">{bottomSeason}</span>
                  <ChevronDown className="w-4 h-4 text-stone-500" />
                </button>
                {bottomSeasonOpen && (
                  <div className="absolute left-0 top-full mt-1 w-full bg-white border border-stone-200 rounded-xl shadow-xl max-h-48 overflow-y-auto z-50 p-1 text-left text-xs">
                    {DW_SEASONS.map((s) => (
                      <div
                        key={s}
                        onClick={() => {
                          setBottomSeason(s);
                          setBottomSeasonOpen(false);
                        }}
                        className="px-3 py-2 hover:bg-stone-100 rounded-lg cursor-pointer"
                      >
                        {s}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Guest Count Selection */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setBottomGuestsOpen(!bottomGuestsOpen)}
                  className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-xs font-bold text-stone-800 text-left flex items-center justify-between cursor-pointer"
                >
                  <span className="truncate">{bottomGuests}</span>
                  <ChevronDown className="w-4 h-4 text-stone-500" />
                </button>
                {bottomGuestsOpen && (
                  <div className="absolute left-0 top-full mt-1 w-full bg-white border border-stone-200 rounded-xl shadow-xl max-h-48 overflow-y-auto z-50 p-1 text-left text-xs">
                    {DW_GUEST_COUNTS.map((g) => (
                      <div
                        key={g}
                        onClick={() => {
                          setBottomGuests(g);
                          setBottomGuestsOpen(false);
                        }}
                        className="px-3 py-2 hover:bg-stone-100 rounded-lg cursor-pointer"
                      >
                        {g}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => {
                setSelectedSeason(bottomSeason);
                setSelectedGuests(bottomGuests);
                setQuoteModalOpen(true);
              }}
              className="w-full py-3.5 rounded-xl bg-[#b3275a] hover:bg-[#8d1b44] text-white font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md"
            >
              GET STARTED
            </button>
          </div>
        </div>
      </section>

      {/* 14. Footer with Newsletter & TICO Information */}
      <footer className="bg-stone-900 text-stone-300 pt-16 pb-10 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {/* Newsletter Column */}
            <div>
              <h3 className="text-white text-base font-bold mb-3">
                Put A Little Romance In Your Inbox
              </h3>
              <p className="text-stone-400 text-xs mb-4 leading-relaxed">
                Receive exclusive resort discounts, seasonal promotions, and breathtaking destination inspiration straight to your inbox.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you for subscribing to All In One Destination Weddings romantic offers!');
                }}
                className="space-y-2"
              >
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="w-full bg-stone-800 border border-stone-700 rounded-xl px-3 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#b3275a]"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="w-full bg-stone-800 border border-stone-700 rounded-xl px-3 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#b3275a]"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#b3275a] hover:bg-[#8d1b44] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  SIGN UP
                </button>
              </form>
            </div>

            {/* Why Choose Us & Links */}
            <div>
              <h3 className="text-white text-base font-bold mb-3">
                Why Choose Us
              </h3>
              <ul className="space-y-2 text-stone-400">
                <li><button onClick={() => setQuoteModalOpen(true)} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => setQuoteModalOpen(true)} className="hover:text-white transition-colors">Contact Us</button></li>
                <li><button onClick={() => setQuoteModalOpen(true)} className="hover:text-white transition-colors">Careers</button></li>
                <li><button onClick={() => { document.getElementById('faqs-sec')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors">Customer Reviews</button></li>
                <li><button onClick={() => { document.getElementById('offers-sec')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors">Exclusive Offers</button></li>
                <li><button onClick={() => setFindWeddingModalOpen(true)} className="hover:text-[#f76d9e] transition-colors font-bold">Find A Wedding (Guest Login)</button></li>
              </ul>
            </div>

            {/* Social & Corporate */}
            <div>
              <h3 className="text-white text-base font-bold mb-3">
                Connect With Us
              </h3>
              <p className="text-stone-400 text-xs mb-4">
                Join our community of over 30,000 happily married couples worldwide.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Facebook', 'Instagram', 'TikTok', 'Pinterest', 'YouTube', 'LinkedIn'].map((platform) => (
                  <span
                    key={platform}
                    className="px-3 py-1 rounded-full bg-stone-800 text-stone-300 text-[11px] font-medium"
                  >
                    {platform}
                  </span>
                ))}
              </div>
              <div className="text-[11px] text-stone-500 space-y-1">
                <p>TICO Registration: 50019699</p>
                <p>All In One Destination Weddings Travel Group</p>
                <p>545 King Street West | Toronto, ON M5V1M1 &bull; 416-532-4949</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-800 text-center text-stone-500 text-[11px] flex flex-col sm:flex-row items-center justify-between gap-2">
            <div>
              &copy; 2026 All In One Destination Weddings. All rights reserved.
            </div>
            <div className="text-stone-400 font-mono">
              Site #58 &bull; Destination Weddings Category
            </div>
          </div>
        </div>
      </footer>

      {/* 15. Modals */}
      <PlanningQuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialSeason={selectedSeason}
        initialGuests={selectedGuests}
      />

      <ResortSearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectResort={handleSelectResortFromSearch}
      />

      <FindWeddingModal
        isOpen={findWeddingModalOpen}
        onClose={() => setFindWeddingModalOpen(false)}
      />

      <OfferDetailsModal
        isOpen={offerModalOpen}
        onClose={() => setOfferModalOpen(false)}
        offer={selectedOffer}
        onClaimOffer={() => setQuoteModalOpen(true)}
      />
    </div>
  );
};
