import React, { useState, useEffect } from 'react';
import {
  Truck,
  Bus,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Search,
  ChevronRight,
  ChevronDown,
  Layers,
  FileText,
  Calendar,
  PhoneCall,
  Clock,
  ArrowRight,
  CheckCircle2,
  Award,
  Globe,
  Gauge,
  Weight,
  Compass,
  Fuel,
  Zap,
  Briefcase,
  Users,
  Building2,
  TrendingUp,
  Download,
  Menu,
  X,
  ExternalLink,
  MessageSquare,
  HelpCircle
} from 'lucide-react';
import { CommercialVehicle, VehicleCategory, SubCategory, DealerNetworkItem } from './types';
import { ALL_COMMERCIAL_VEHICLES, VEHICLE_CATEGORIES_METADATA } from './vehicleData';
import { ALL_DEALERS, ALL_NEWS, ALL_CAREERS } from './dealerData';
import { VehicleDetailModal } from './VehicleDetailModal';
import { RequestQuoteModal } from './RequestQuoteModal';
import { BookTestDriveModal } from './BookTestDriveModal';
import { VehicleCompareModal } from './VehicleCompareModal';
import { BrochureModal } from './BrochureModal';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';

export const RaozMotorsApp: React.FC = () => {
  // Navigation / Page section state
  const [activeTab, setActiveTab] = useState<'home' | 'trucks' | 'buses' | 'special' | 'dealers' | 'saarthi' | 'corporate' | 'investors' | 'media' | 'careers' | 'contact'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Vehicle Filter State
  const [selectedCategory, setSelectedCategory] = useState<VehicleCategory | 'all'>('all');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedFuel, setSelectedFuel] = useState<string>('all');

  // Search My Vehicle Widget State
  const [widgetCategory, setWidgetCategory] = useState<string>('all');
  const [widgetSubCategory, setWidgetSubCategory] = useState<string>('all');
  const [widgetGvw, setWidgetGvw] = useState<string>('all');

  // Dealer Locator State
  const [dealerState, setDealerState] = useState<string>('All States');
  const [dealerCity, setDealerCity] = useState<string>('All Cities');
  const [facilityFilter, setFacilityFilter] = useState<string>('all');

  // Modal States
  const [detailVehicle, setDetailVehicle] = useState<CommercialVehicle | null>(null);
  const [detailModalOpen, setDetailModalOpen] = useState<boolean>(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [quoteVehicle, setQuoteVehicle] = useState<CommercialVehicle | null>(null);
  const [testDriveModalOpen, setTestDriveModalOpen] = useState<boolean>(false);
  const [testDriveVehicle, setTestDriveVehicle] = useState<CommercialVehicle | null>(null);
  const [compareModalOpen, setCompareModalOpen] = useState<boolean>(false);
  const [compareInitialVehicle, setCompareInitialVehicle] = useState<CommercialVehicle | null>(null);
  const [brochureModalOpen, setBrochureModalOpen] = useState<boolean>(false);
  const [brochureVehicle, setBrochureVehicle] = useState<CommercialVehicle | null>(null);

  // Quick TCO Calculator state
  const [monthlyKm, setMonthlyKm] = useState<number>(4500);
  const [dieselPrice, setDieselPrice] = useState<number>(90);
  const estimatedFuelSavingsPerYear = Math.round((monthlyKm * 12 * 0.08 * dieselPrice) / 4.5);

  // Set Title & SEO
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'RAOZ MOTORS | Commercial Vehicles · Trucks, Buses & Special Applications';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Official Raoz Motors Commercial Vehicles website. Explore BS6 Phase 2 trucks, Sartaj, Samrat, Supreme, school buses, executive coaches, ambulances and nationwide 3S dealer network.'
      );
    }
    return () => {
      document.title = prevTitle;
    };
  }, []);

  // Filter vehicles
  const filteredVehicles = ALL_COMMERCIAL_VEHICLES.filter(v => {
    if (selectedCategory !== 'all' && v.category !== selectedCategory) return false;
    if (selectedSubCategory !== 'all' && v.subCategory !== selectedSubCategory) return false;
    if (selectedFuel !== 'all' && v.fuelType !== selectedFuel) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = v.name.toLowerCase().includes(q);
      const matchTag = v.tagline.toLowerCase().includes(q);
      const matchApp = v.applications.some(a => a.toLowerCase().includes(q));
      if (!matchName && !matchTag && !matchApp) return false;
    }
    return true;
  });

  // Unique States & Cities from Dealer Data
  const dealerStates = ['All States', ...Array.from(new Set(ALL_DEALERS.map(d => d.state)))];
  const dealerCities = ['All Cities', ...Array.from(new Set(
    ALL_DEALERS
      .filter(d => dealerState === 'All States' || d.state === dealerState)
      .map(d => d.city)
  ))];

  const filteredDealers = ALL_DEALERS.filter(d => {
    if (dealerState !== 'All States' && d.state !== dealerState) return false;
    if (dealerCity !== 'All Cities' && d.city !== dealerCity) return false;
    if (facilityFilter === '3s' && !d.facilityType.includes('3S')) return false;
    if (facilityFilter === 'workshop' && !d.hasWorkshop) return false;
    return true;
  });

  // Handlers
  const handleOpenDetail = (vehicle: CommercialVehicle) => {
    setDetailVehicle(vehicle);
    setDetailModalOpen(true);
  };

  const handleOpenQuote = (vehicle?: CommercialVehicle) => {
    setQuoteVehicle(vehicle || null);
    setQuoteModalOpen(true);
  };

  const handleOpenTestDrive = (vehicle?: CommercialVehicle) => {
    setTestDriveVehicle(vehicle || null);
    setTestDriveModalOpen(true);
  };

  const handleOpenCompare = (vehicle?: CommercialVehicle) => {
    setCompareInitialVehicle(vehicle || null);
    setCompareModalOpen(true);
  };

  const handleOpenBrochure = (vehicle: CommercialVehicle) => {
    setBrochureVehicle(vehicle);
    setBrochureModalOpen(true);
  };

  const handleWidgetSearch = () => {
    if (widgetCategory !== 'all') {
      setSelectedCategory(widgetCategory as VehicleCategory);
    } else {
      setSelectedCategory('all');
    }
    if (widgetSubCategory !== 'all') {
      setSelectedSubCategory(widgetSubCategory);
    } else {
      setSelectedSubCategory('all');
    }
    // Scroll to vehicle showcase
    const el = document.getElementById('vehicle-showcase');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0d0f12] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Top Banner Ticker & Fast Help */}
      <div className="bg-[#14171d] border-b border-stone-800 text-[11px] py-1.5 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-stone-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-amber-400 font-bold">
              <Phone className="w-3 h-3" />
              <span>24x7 Commercial Helpline: 1800-419-7269 (Toll-Free)</span>
            </span>
            <span className="hidden md:inline text-stone-600">|</span>
            <span className="hidden md:inline font-mono">
              BSE: <strong className="text-white">505192</strong> · NSE: <strong className="text-white">RAOZMOTORS</strong>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('dealers')}
              className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <MapPin className="w-3 h-3 text-amber-400" />
              <span>300+ Touchpoints</span>
            </button>
            <span className="text-stone-600">|</span>
            <button
              onClick={() => setActiveTab('saarthi')}
              className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer font-bold text-amber-300"
            >
              <Zap className="w-3 h-3" />
              <span>Saarthi Telematics Login</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header & Navbar */}
      <header className="sticky top-0 z-40 bg-[#111317]/95 backdrop-blur-md border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo Area */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20">
              <Truck className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white">RAOZ</span>
                <span className="text-xl sm:text-2xl font-light tracking-tight text-amber-400">MOTORS</span>
              </div>
              <div className="text-[10px] tracking-widest text-stone-400 uppercase font-mono font-semibold">
                Automobile &amp; Commercial Vehicles · India
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-bold text-stone-300">
            <button
              onClick={() => { setActiveTab('home'); setSelectedCategory('all'); }}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'home' ? 'text-amber-400 bg-stone-800/60' : 'hover:text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => { setActiveTab('trucks'); setSelectedCategory('trucks'); }}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'trucks' ? 'text-amber-400 bg-stone-800/60' : 'hover:text-white'
              }`}
            >
              Trucks
            </button>
            <button
              onClick={() => { setActiveTab('buses'); setSelectedCategory('buses'); }}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'buses' ? 'text-amber-400 bg-stone-800/60' : 'hover:text-white'
              }`}
            >
              Buses &amp; Coaches
            </button>
            <button
              onClick={() => { setActiveTab('special'); setSelectedCategory('special'); }}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'special' ? 'text-amber-400 bg-stone-800/60' : 'hover:text-white'
              }`}
            >
              Special Applications
            </button>
            <button
              onClick={() => setActiveTab('dealers')}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'dealers' ? 'text-amber-400 bg-stone-800/60' : 'hover:text-white'
              }`}
            >
              Find Dealer
            </button>
            <button
              onClick={() => setActiveTab('saarthi')}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'saarthi' ? 'text-amber-400 bg-stone-800/60' : 'hover:text-white'
              }`}
            >
              Telematics
            </button>
            <button
              onClick={() => setActiveTab('corporate')}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'corporate' ? 'text-amber-400 bg-stone-800/60' : 'hover:text-white'
              }`}
            >
              Corporate
            </button>
            <button
              onClick={() => setActiveTab('investors')}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'investors' ? 'text-amber-400 bg-stone-800/60' : 'hover:text-white'
              }`}
            >
              Investors
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => handleOpenCompare()}
              className="hidden sm:flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors border border-stone-700 cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>Compare</span>
            </button>

            <button
              onClick={() => handleOpenQuote()}
              className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs tracking-wide shadow-md shadow-amber-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>REQUEST QUOTE</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-stone-800 text-stone-300 hover:text-white cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#15181f] border-b border-stone-800 px-4 py-4 space-y-2 text-sm font-semibold animate-fadeIn">
            <button
              onClick={() => { setActiveTab('home'); setSelectedCategory('all'); setMobileMenuOpen(false); }}
              className="w-full text-left py-2 px-3 rounded-lg text-stone-200 hover:bg-stone-800 cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => { setActiveTab('trucks'); setSelectedCategory('trucks'); setMobileMenuOpen(false); }}
              className="w-full text-left py-2 px-3 rounded-lg text-stone-200 hover:bg-stone-800 cursor-pointer"
            >
              Commercial Trucks (LCV &amp; ICV)
            </button>
            <button
              onClick={() => { setActiveTab('buses'); setSelectedCategory('buses'); setMobileMenuOpen(false); }}
              className="w-full text-left py-2 px-3 rounded-lg text-stone-200 hover:bg-stone-800 cursor-pointer"
            >
              Passenger Buses &amp; School Coaches
            </button>
            <button
              onClick={() => { setActiveTab('special'); setSelectedCategory('special'); setMobileMenuOpen(false); }}
              className="w-full text-left py-2 px-3 rounded-lg text-stone-200 hover:bg-stone-800 cursor-pointer"
            >
              Special Application Vehicles (Ambulance, Civic)
            </button>
            <button
              onClick={() => { setActiveTab('dealers'); setMobileMenuOpen(false); }}
              className="w-full text-left py-2 px-3 rounded-lg text-stone-200 hover:bg-stone-800 cursor-pointer"
            >
              Find Dealer (300+ Touchpoints)
            </button>
            <button
              onClick={() => { setActiveTab('saarthi'); setMobileMenuOpen(false); }}
              className="w-full text-left py-2 px-3 rounded-lg text-stone-200 hover:bg-stone-800 cursor-pointer"
            >
              SML Saarthi Telematics Fleet
            </button>
            <button
              onClick={() => { setActiveTab('corporate'); setMobileMenuOpen(false); }}
              className="w-full text-left py-2 px-3 rounded-lg text-stone-200 hover:bg-stone-800 cursor-pointer"
            >
              About Raoz Motors &amp; Asron Plant
            </button>
            <button
              onClick={() => { setActiveTab('investors'); setMobileMenuOpen(false); }}
              className="w-full text-left py-2 px-3 rounded-lg text-stone-200 hover:bg-stone-800 cursor-pointer"
            >
              Investor Relations &amp; Financials
            </button>
            <button
              onClick={() => { setActiveTab('careers'); setMobileMenuOpen(false); }}
              className="w-full text-left py-2 px-3 rounded-lg text-stone-200 hover:bg-stone-800 cursor-pointer"
            >
              Careers &amp; Openings
            </button>
            <button
              onClick={() => { setActiveTab('contact'); setMobileMenuOpen(false); }}
              className="w-full text-left py-2 px-3 rounded-lg text-stone-200 hover:bg-stone-800 cursor-pointer"
            >
              Contact Us &amp; Regional Offices
            </button>
          </div>
        )}
      </header>

      {/* Main View Router */}
      <main>
        {/* HOMEPAGE VIEW */}
        {activeTab === 'home' && (
          <div className="space-y-16 pb-16">
            {/* Hero Visual Section */}
            <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#141820] to-[#0d0f12]">
              <div className="absolute inset-0 z-0">
                <img
                  src="/assets/raozmotors/hero_fleet_highway.jpg"
                  alt="Raoz Motors Commercial Fleet on Indian Highway"
                  className="w-full h-full object-cover opacity-25 filter contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f12] via-[#0d0f12]/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12] via-transparent to-transparent" />
              </div>

              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-20 w-full">
                <div className="max-w-2xl space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>BS6 PHASE 2 OBD-2 COMPLIANT COMMERCIAL VEHICLES</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                    DRIVING INDIA'S <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
                      COMMERCIAL GROWTH
                    </span>
                  </h1>

                  <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                    Over 40 years of proven automotive engineering excellence. From high-mileage Sartaj delivery trucks and 62-seater Saarthi school coaches to heavy Samrat tippers and LifeLine mobile ICUs.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={() => {
                        const el = document.getElementById('search-vehicle-widget');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-xl shadow-amber-500/20 transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <Search className="w-4 h-4" />
                      <span>SEARCH MY VEHICLE</span>
                    </button>

                    <button
                      onClick={() => handleOpenTestDrive()}
                      className="py-3 px-5 rounded-xl bg-stone-800/90 hover:bg-stone-700 text-white font-bold text-xs sm:text-sm transition-colors border border-stone-700 flex items-center gap-2 cursor-pointer"
                    >
                      <Calendar className="w-4 h-4 text-amber-400" />
                      <span>Book Demonstration</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('dealers')}
                      className="py-3 px-5 rounded-xl bg-stone-900/80 hover:bg-stone-800 text-stone-300 font-bold text-xs sm:text-sm transition-colors border border-stone-800 flex items-center gap-2 cursor-pointer"
                    >
                      <MapPin className="w-4 h-4 text-emerald-400" />
                      <span>Find 3S Dealer</span>
                    </button>
                  </div>

                  {/* Trust Stats Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-stone-800/80">
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-amber-400 font-mono">40+ Yrs</div>
                      <div className="text-[11px] text-stone-400">Engineering Trust</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-white font-mono">300+</div>
                      <div className="text-[11px] text-stone-400">3S Dealerships</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-white font-mono">1.5 Lakh+</div>
                      <div className="text-[11px] text-stone-400">Vehicles on Road</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">4,500+</div>
                      <div className="text-[11px] text-stone-400">School Fleets</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* "SEARCH MY VEHICLE" Interactive Search Widget (Requirement 5) */}
            <section id="search-vehicle-widget" className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 relative z-20">
              <div className="bg-[#171a21] rounded-2xl p-5 sm:p-6 border border-stone-800 shadow-2xl">
                <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider mb-4">
                  <Search className="w-4 h-4" />
                  <span>FIND THE RIGHT COMMERCIAL VEHICLE FOR YOUR FLEET</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                  {/* Category Selector */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-300">Vehicle Category</label>
                    <select
                      value={widgetCategory}
                      onChange={(e) => setWidgetCategory(e.target.value)}
                      className="w-full bg-[#101216] border border-stone-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="all">All Categories</option>
                      <option value="trucks">Commercial Trucks</option>
                      <option value="buses">Passenger Buses</option>
                      <option value="special">Special Application Vehicles</option>
                    </select>
                  </div>

                  {/* Sub-Category / Application */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-300">Application / Type</label>
                    <select
                      value={widgetSubCategory}
                      onChange={(e) => setWidgetSubCategory(e.target.value)}
                      className="w-full bg-[#101216] border border-stone-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="all">All Sub-Categories</option>
                      <option value="lcv">Light Commercial (LCV 4/6 Tyre)</option>
                      <option value="icv">Intermediate Commercial (ICV)</option>
                      <option value="tipper">Construction Tippers</option>
                      <option value="cng">Eco CNG Green Fleet</option>
                      <option value="school_bus">School Buses (AIS 063)</option>
                      <option value="staff_bus">Staff Transit Coaches</option>
                      <option value="luxury_coach">Hiroi Luxury Tourer</option>
                      <option value="ambulance">LifeLine Mobile ICU</option>
                      <option value="municipal">Municipal &amp; Water Tankers</option>
                      <option value="defense_utility">Defense &amp; Recovery</option>
                    </select>
                  </div>

                  {/* Gross Vehicle Weight (GVW) */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-300">Gross Vehicle Weight (GVW)</label>
                    <select
                      value={widgetGvw}
                      onChange={(e) => setWidgetGvw(e.target.value)}
                      className="w-full bg-[#101216] border border-stone-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="all">Any Gross Weight</option>
                      <option value="light">5,200 kg - 7,200 kg</option>
                      <option value="medium">7,200 kg - 10,700 kg</option>
                      <option value="heavy">10,700 kg - 11,990 kg</option>
                    </select>
                  </div>

                  {/* Search Button */}
                  <div>
                    <button
                      onClick={handleWidgetSearch}
                      className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer h-[42px]"
                    >
                      <Search className="w-4 h-4" />
                      <span>FILTER VEHICLES</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Three Pillars: Trucks, Buses, Special Applications */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                  PORTFOLIO ARCHITECTURE
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  Commercial Product Ranges
                </h2>
                <p className="text-stone-400 text-xs sm:text-sm">
                  Precision-built commercial platforms tailored to India's logistics corridors, student transit protocols, and critical civic utility requirements.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {VEHICLE_CATEGORIES_METADATA.map((cat) => (
                  <div
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id as VehicleCategory);
                      const el = document.getElementById('vehicle-showcase');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-[#15181f] rounded-2xl p-6 border border-stone-800 hover:border-amber-500/50 transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                        {cat.id === 'trucks' && <Truck className="w-6 h-6" />}
                        {cat.id === 'buses' && <Bus className="w-6 h-6" />}
                        {cat.id === 'special' && <ShieldCheck className="w-6 h-6" />}
                      </div>
                      <div>
                        <div className="text-xs font-mono text-amber-400 font-bold">{cat.count} Models Available</div>
                        <h3 className="text-xl font-black text-white mt-1 group-hover:text-amber-300 transition-colors">
                          {cat.title}
                        </h3>
                        <p className="text-stone-400 text-xs mt-2 leading-relaxed">{cat.description}</p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-stone-800/80 mt-6 flex items-center justify-between text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
                      <span>Explore Range</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* VEHICLE SHOWCASE & PRODUCT CARDS (Requirement 2 & 3) */}
            <section id="vehicle-showcase" className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 border-b border-stone-800 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                    ALL COMMERCIAL MODELS
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
                    Explore Vehicle Catalog ({filteredVehicles.length})
                  </h2>
                </div>

                {/* Filter Pills */}
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => { setSelectedCategory('all'); setSelectedSubCategory('all'); }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedCategory === 'all'
                        ? 'bg-amber-500 text-slate-950 shadow-sm font-black'
                        : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                    }`}
                  >
                    All ({ALL_COMMERCIAL_VEHICLES.length})
                  </button>
                  <button
                    onClick={() => { setSelectedCategory('trucks'); setSelectedSubCategory('all'); }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedCategory === 'trucks'
                        ? 'bg-amber-500 text-slate-950 shadow-sm font-black'
                        : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                    }`}
                  >
                    Trucks ({ALL_COMMERCIAL_VEHICLES.filter(v => v.category === 'trucks').length})
                  </button>
                  <button
                    onClick={() => { setSelectedCategory('buses'); setSelectedSubCategory('all'); }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedCategory === 'buses'
                        ? 'bg-amber-500 text-slate-950 shadow-sm font-black'
                        : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                    }`}
                  >
                    Buses ({ALL_COMMERCIAL_VEHICLES.filter(v => v.category === 'buses').length})
                  </button>
                  <button
                    onClick={() => { setSelectedCategory('special'); setSelectedSubCategory('all'); }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedCategory === 'special'
                        ? 'bg-amber-500 text-slate-950 shadow-sm font-black'
                        : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                    }`}
                  >
                    Special Applications ({ALL_COMMERCIAL_VEHICLES.filter(v => v.category === 'special').length})
                  </button>
                </div>
              </div>

              {/* Vehicle Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVehicles.map((vehicle) => (
                  <div
                    key={vehicle.id}
                    className="bg-[#14171d] rounded-2xl border border-stone-800 hover:border-amber-500/50 shadow-xl overflow-hidden transition-all group flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Thumbnail */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                        <img
                          src={vehicle.image}
                          alt={vehicle.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1000&auto=format&fit=crop&q=80';
                          }}
                        />
                        <div className="absolute top-3 left-3 flex items-center gap-1.5">
                          <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-amber-400 border border-amber-500/30">
                            {vehicle.subCategoryLabel}
                          </span>
                        </div>
                        <div className="absolute top-3 right-3">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-700/80 text-white backdrop-blur-md">
                            {vehicle.fuelType}
                          </span>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-5 space-y-3">
                        <div>
                          <div className="text-[11px] font-mono text-stone-400">{vehicle.series}</div>
                          <h3 className="text-xl font-black text-white mt-0.5 group-hover:text-amber-400 transition-colors">
                            {vehicle.name}
                          </h3>
                          <p className="text-xs text-stone-400 line-clamp-1 mt-1">{vehicle.tagline}</p>
                        </div>

                        {/* Specs Strip */}
                        <div className="grid grid-cols-3 gap-2 py-2 border-y border-stone-800/80 text-center">
                          <div>
                            <div className="text-[10px] text-stone-500 font-mono">GROSS WEIGHT</div>
                            <div className="text-xs font-bold text-stone-200 mt-0.5">{vehicle.gvw}</div>
                          </div>
                          <div>
                            <div className="text-[10px] text-stone-500 font-mono">POWER OUTPUT</div>
                            <div className="text-xs font-bold text-stone-200 mt-0.5">{vehicle.power.split('@')[0]}</div>
                          </div>
                          <div>
                            <div className="text-[10px] text-stone-500 font-mono">CAPACITY</div>
                            <div className="text-xs font-bold text-stone-200 mt-0.5 truncate">{vehicle.seatingOrPayload.split(':')[1] || vehicle.seatingOrPayload}</div>
                          </div>
                        </div>

                        {/* Price Info */}
                        <div className="flex items-baseline justify-between pt-1">
                          <span className="text-[11px] text-stone-400">Starting Ex-Showroom</span>
                          <span className="text-lg font-black text-amber-400">{vehicle.startingPrice}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="px-5 pb-5 pt-2 grid grid-cols-2 gap-2">
                      <button
                        onClick={() => handleOpenDetail(vehicle)}
                        className="py-2.5 px-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5 text-amber-400" />
                        <span>View Specs</span>
                      </button>

                      <button
                        onClick={() => handleOpenQuote(vehicle)}
                        className="py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-amber-500/20"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span>Get Quote</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SML SAARTHI TELEMATICS 24x7 CONNECTED FLEET SECTION */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="bg-gradient-to-br from-[#161a22] to-[#121419] rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-2xl relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
                      <Zap className="w-3.5 h-3.5" />
                      <span>SML SAARTHI 3.0 ADVANCED TELEMATICS PLATFORM</span>
                    </div>

                    <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                      Real-Time Fleet Intelligence. <br />
                      <span className="text-amber-400">Zero Guesswork. Higher Profitability.</span>
                    </h2>

                    <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                      Factory-fitted on all BS6 Phase 2 Raoz Motors commercial vehicles. Connected directly to the vehicle’s CAN-bus architecture, Saarthi delivers millisecond-level telemetry to your fleet manager’s web and mobile dashboard.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                          <Compass className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-white">Live GPS &amp; Geo-Fencing</h4>
                          <p className="text-[11px] text-stone-400 mt-0.5">Route deviation alerts and automated entry/exit milestone notifications.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                          <Fuel className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-white">Fuel Pilferage Detection</h4>
                          <p className="text-[11px] text-stone-400 mt-0.5">Instant SMS warnings on abnormal fuel level drops and idling waste.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                          <Gauge className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-white">Driver Behavior Analytics</h4>
                          <p className="text-[11px] text-stone-400 mt-0.5">Harsh braking, sudden acceleration, overspeeding and gear mis-selection scoring.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                          <Zap className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-white">Predictive Diagnostics</h4>
                          <p className="text-[11px] text-stone-400 mt-0.5">Automated service due notifications and diagnostic trouble code (DTC) logs.</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center gap-3">
                      <button
                        onClick={() => setActiveTab('saarthi')}
                        className="py-2.5 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-all cursor-pointer shadow-lg shadow-amber-500/20"
                      >
                        Explore Saarthi Portal
                      </button>
                      <button
                        onClick={() => handleOpenQuote()}
                        className="py-2.5 px-4 rounded-xl bg-stone-800 hover:bg-stone-700 text-white font-bold text-xs transition-colors cursor-pointer border border-stone-700"
                      >
                        Request Telematics Demo
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="rounded-2xl overflow-hidden border border-stone-700 aspect-[4/3] bg-stone-900 shadow-2xl relative">
                      <img
                        src="/assets/raozmotors/telematics_saarthi.jpg"
                        alt="SML Saarthi Telematics Dashboard"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                        <div className="text-xs text-white">
                          <span className="font-bold text-amber-400">Connected Fleet Status:</span> 24x7 Real-Time Cloud Uplink with 99.98% Uptime SLA.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* DEALER NETWORK LOCATOR SECTION (Requirement 5) */}
            <section id="dealer-network-locator" className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="bg-[#15181f] rounded-2xl p-6 sm:p-8 border border-stone-800 space-y-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-800 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                      NATIONWIDE FOOTPRINT
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
                      Find an Authorized 3S Dealer &amp; Service Workshop
                    </h2>
                    <p className="text-stone-400 text-xs sm:text-sm mt-1">
                      Over 300 Sales, Service &amp; Spare Parts (3S) touchpoints guaranteeing rapid support along all major transport corridors.
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
                      Showing {filteredDealers.length} Facilities
                    </span>
                  </div>
                </div>

                {/* Filter Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-300">Select State / Region</label>
                    <select
                      value={dealerState}
                      onChange={(e) => { setDealerState(e.target.value); setDealerCity('All Cities'); }}
                      className="w-full bg-[#1b1f26] border border-stone-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                    >
                      {dealerStates.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-300">Select City</label>
                    <select
                      value={dealerCity}
                      onChange={(e) => setDealerCity(e.target.value)}
                      className="w-full bg-[#1b1f26] border border-stone-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                    >
                      {dealerCities.map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-300">Facility Type</label>
                    <select
                      value={facilityFilter}
                      onChange={(e) => setFacilityFilter(e.target.value)}
                      className="w-full bg-[#1b1f26] border border-stone-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="all">All Touchpoints</option>
                      <option value="3s">3S (Sales, Service &amp; Spares)</option>
                      <option value="workshop">Heavy Repair Workshops Only</option>
                    </select>
                  </div>
                </div>

                {/* Dealer Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                  {filteredDealers.slice(0, 6).map((dealer) => (
                    <div
                      key={dealer.id}
                      className="bg-[#191d24] p-5 rounded-xl border border-stone-800 space-y-3 flex flex-col justify-between hover:border-stone-700 transition-colors"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                            {dealer.facilityType}
                          </span>
                          <span className="text-[10px] text-stone-400 font-mono">{dealer.city}</span>
                        </div>
                        <h4 className="font-bold text-white text-sm">{dealer.name}</h4>
                        <p className="text-xs text-stone-400 flex items-start gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-stone-500 shrink-0 mt-0.5" />
                          <span>{dealer.address}</span>
                        </p>
                      </div>

                      <div className="pt-3 border-t border-stone-800/80 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-stone-400 font-mono">Helpline</span>
                          <a href={`tel:${dealer.phone}`} className="font-bold text-amber-400 hover:underline">
                            {dealer.phone}
                          </a>
                        </div>
                        <div className="grid grid-cols-2 gap-2 pt-1">
                          <button
                            onClick={() => handleOpenTestDrive()}
                            className="py-1.5 px-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-[11px] text-center cursor-pointer"
                          >
                            Book Demo
                          </button>
                          <button
                            onClick={() => handleOpenQuote()}
                            className="py-1.5 px-2 rounded-lg bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-slate-950 font-bold text-[11px] text-center transition-colors cursor-pointer"
                          >
                            Get Quote
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredDealers.length > 6 && (
                  <div className="text-center pt-2">
                    <button
                      onClick={() => setActiveTab('dealers')}
                      className="px-6 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-white font-bold text-xs cursor-pointer inline-flex items-center gap-1.5"
                    >
                      <span>View All {filteredDealers.length} Dealership Locations</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* MANUFACTURING EXCELLENCE & HERITAGE */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                    ENGINEERING HERITAGE
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                    World-Class Manufacturing at Asron, Punjab
                  </h2>
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                    Spanning over 200 acres near Ropar in Punjab, the Raoz Motors manufacturing complex unites Japanese production rigor with heavy Indian duty-cycle engineering. Featuring automated robotic framing, cathodic electrodeposition (CED) primer dip tanks, and an all-weather high-speed test track.
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2.5 text-xs text-stone-200">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />
                      <span>Automated 12-stage Cathode Electrodeposition (CED) corrosion prevention</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-stone-200">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />
                      <span>Computerized dynamometer engine emission and torque testing</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-stone-200">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />
                      <span>Certified ISO 9001 (Quality) &amp; ISO 14001 (Environmental Management)</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => setActiveTab('corporate')}
                      className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs cursor-pointer shadow-md"
                    >
                      Read Corporate Story
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl overflow-hidden border border-stone-800 aspect-[4/3]">
                    <img
                      src="/assets/raozmotors/plant_manufacturing_asron.jpg"
                      alt="Asron Manufacturing Plant"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-stone-800 aspect-[4/3] mt-6">
                    <img
                      src="/assets/raozmotors/tech_rd_testing.jpg"
                      alt="Automotive R&D Testing"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* FLEET TCO CALCULATOR WIDGET */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="bg-[#15181f] rounded-2xl p-6 sm:p-8 border border-stone-800">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-800 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                      TOTAL COST OF OWNERSHIP
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-1">
                      Fleet Mileage &amp; Fuel Savings Estimator
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-stone-400 font-mono">ESTIMATED ANNUAL FUEL SAVINGS</div>
                    <div className="text-2xl sm:text-3xl font-black text-emerald-400">
                      ₹ {estimatedFuelSavingsPerYear.toLocaleString('en-IN')} <span className="text-xs text-stone-400 font-normal">/ vehicle</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 items-center">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-stone-300 font-semibold">Average Monthly Run (km)</span>
                        <span className="font-bold text-amber-400 font-mono">{monthlyKm.toLocaleString()} km / mo</span>
                      </div>
                      <input
                        type="range"
                        min="2000"
                        max="10000"
                        step="500"
                        value={monthlyKm}
                        onChange={(e) => setMonthlyKm(Number(e.target.value))}
                        className="w-full accent-amber-500 cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-stone-500">
                        <span>2,000 km</span>
                        <span>10,000 km</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-stone-300 font-semibold">Fuel Price (₹ / Litre)</span>
                        <span className="font-bold text-amber-400 font-mono">₹ {dieselPrice} / L</span>
                      </div>
                      <input
                        type="range"
                        min="75"
                        max="110"
                        step="1"
                        value={dieselPrice}
                        onChange={(e) => setDieselPrice(Number(e.target.value))}
                        className="w-full accent-amber-500 cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="bg-[#191d24] p-5 rounded-xl border border-stone-800 text-xs text-stone-300 space-y-2.5">
                    <div className="font-bold text-white flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <span>Why Raoz Motors Delivers Lower TCO:</span>
                    </div>
                    <ul className="space-y-1.5 list-disc pl-4 text-stone-400">
                      <li>Up to 8% superior real-world fuel economy via optimized SLT6 common rail injection.</li>
                      <li>40,000 km extended engine oil drain interval reducing maintenance downtime.</li>
                      <li>High residual resale value across Indian used commercial vehicle markets.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* TRUCKS TAB VIEW */}
        {activeTab === 'trucks' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8">
            <div className="border-b border-stone-800 pb-5">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                COMMERCIAL HAULAGE
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                Commercial Trucks Lineup
              </h1>
              <p className="text-stone-400 text-xs sm:text-sm mt-1 max-w-3xl">
                Light Commercial Vehicles (LCV) from 5.2 tonnes to Intermediate Commercial Vehicles (ICV) up to 11.99 tonnes. Built for express parcel logistics, FMCG, agriculture, and construction tipper applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ALL_COMMERCIAL_VEHICLES.filter(v => v.category === 'trucks').map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="bg-[#14171d] rounded-2xl border border-stone-800 hover:border-amber-500/50 shadow-xl overflow-hidden transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-black/70 text-amber-400 border border-amber-500/30">
                          {vehicle.subCategoryLabel}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-700/80 text-white">
                          {vehicle.fuelType}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <div>
                        <div className="text-[11px] font-mono text-stone-400">{vehicle.series}</div>
                        <h3 className="text-xl font-black text-white mt-0.5">{vehicle.name}</h3>
                        <p className="text-xs text-stone-400 line-clamp-1 mt-1">{vehicle.tagline}</p>
                      </div>

                      <div className="grid grid-cols-3 gap-2 py-2 border-y border-stone-800 text-center">
                        <div>
                          <div className="text-[10px] text-stone-500 font-mono">GVW</div>
                          <div className="text-xs font-bold text-stone-200 mt-0.5">{vehicle.gvw}</div>
                        </div>
                        <div>
                          <div className="text-[10px] text-stone-500 font-mono">POWER</div>
                          <div className="text-xs font-bold text-stone-200 mt-0.5">{vehicle.power.split('@')[0]}</div>
                        </div>
                        <div>
                          <div className="text-[10px] text-stone-500 font-mono">PAYLOAD</div>
                          <div className="text-xs font-bold text-stone-200 mt-0.5">{vehicle.specs.payload || vehicle.seatingOrPayload}</div>
                        </div>
                      </div>

                      <div className="flex items-baseline justify-between pt-1">
                        <span className="text-[11px] text-stone-400">Ex-Showroom</span>
                        <span className="text-lg font-black text-amber-400">{vehicle.startingPrice}</span>
                      </div>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-2 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleOpenDetail(vehicle)}
                      className="py-2.5 px-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5 text-amber-400" />
                      <span>Specifications</span>
                    </button>
                    <button
                      onClick={() => handleOpenQuote(vehicle)}
                      className="py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Get Quote</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BUSES TAB VIEW */}
        {activeTab === 'buses' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8">
            <div className="border-b border-stone-800 pb-5">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                PASSENGER TRANSIT
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                Passenger Buses &amp; Luxury Coaches
              </h1>
              <p className="text-stone-400 text-xs sm:text-sm mt-1 max-w-3xl">
                AIS 052 &amp; AIS 063 safety compliant school buses, corporate employee commuters with pushback reclining seats, and flagship Hiroi air-suspension luxury coaches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ALL_COMMERCIAL_VEHICLES.filter(v => v.category === 'buses').map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="bg-[#14171d] rounded-2xl border border-stone-800 hover:border-amber-500/50 shadow-xl overflow-hidden transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-black/70 text-amber-400 border border-amber-500/30">
                          {vehicle.subCategoryLabel}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-700/80 text-white">
                          {vehicle.fuelType}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <div>
                        <div className="text-[11px] font-mono text-stone-400">{vehicle.series}</div>
                        <h3 className="text-xl font-black text-white mt-0.5">{vehicle.name}</h3>
                        <p className="text-xs text-stone-400 line-clamp-1 mt-1">{vehicle.tagline}</p>
                      </div>

                      <div className="grid grid-cols-3 gap-2 py-2 border-y border-stone-800 text-center">
                        <div>
                          <div className="text-[10px] text-stone-500 font-mono">SEATING</div>
                          <div className="text-xs font-bold text-stone-200 mt-0.5">{vehicle.specs.seatingCapacity?.split('/')[0] || vehicle.seatingOrPayload}</div>
                        </div>
                        <div>
                          <div className="text-[10px] text-stone-500 font-mono">POWER</div>
                          <div className="text-xs font-bold text-stone-200 mt-0.5">{vehicle.power.split('@')[0]}</div>
                        </div>
                        <div>
                          <div className="text-[10px] text-stone-500 font-mono">GVW</div>
                          <div className="text-xs font-bold text-stone-200 mt-0.5">{vehicle.gvw}</div>
                        </div>
                      </div>

                      <div className="flex items-baseline justify-between pt-1">
                        <span className="text-[11px] text-stone-400">Ex-Showroom</span>
                        <span className="text-lg font-black text-amber-400">{vehicle.startingPrice}</span>
                      </div>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-2 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleOpenDetail(vehicle)}
                      className="py-2.5 px-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5 text-amber-400" />
                      <span>Specifications</span>
                    </button>
                    <button
                      onClick={() => handleOpenQuote(vehicle)}
                      className="py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Get Quote</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SPECIAL APPLICATION TAB VIEW */}
        {activeTab === 'special' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8">
            <div className="border-b border-stone-800 pb-5">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                CRITICAL MISSION MOBILITY
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                Special Application Commercial Vehicles
              </h1>
              <p className="text-stone-400 text-xs sm:text-sm mt-1 max-w-3xl">
                Certified Type-D Advanced Life Support Mobile ICUs, Swachh Bharat solid waste dumper placers, high-pressure municipal water tankers, and tactical troop carriers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ALL_COMMERCIAL_VEHICLES.filter(v => v.category === 'special').map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="bg-[#14171d] rounded-2xl border border-stone-800 hover:border-amber-500/50 shadow-xl overflow-hidden transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-black/70 text-amber-400 border border-amber-500/30">
                          {vehicle.subCategoryLabel}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-700/80 text-white">
                          {vehicle.fuelType}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <div>
                        <div className="text-[11px] font-mono text-stone-400">{vehicle.series}</div>
                        <h3 className="text-xl font-black text-white mt-0.5">{vehicle.name}</h3>
                        <p className="text-xs text-stone-400 line-clamp-1 mt-1">{vehicle.tagline}</p>
                      </div>

                      <div className="grid grid-cols-3 gap-2 py-2 border-y border-stone-800 text-center">
                        <div>
                          <div className="text-[10px] text-stone-500 font-mono">APPLICATION</div>
                          <div className="text-xs font-bold text-stone-200 mt-0.5 truncate">{vehicle.applications[0]}</div>
                        </div>
                        <div>
                          <div className="text-[10px] text-stone-500 font-mono">POWER</div>
                          <div className="text-xs font-bold text-stone-200 mt-0.5">{vehicle.power.split('@')[0]}</div>
                        </div>
                        <div>
                          <div className="text-[10px] text-stone-500 font-mono">GVW</div>
                          <div className="text-xs font-bold text-stone-200 mt-0.5">{vehicle.gvw}</div>
                        </div>
                      </div>

                      <div className="flex items-baseline justify-between pt-1">
                        <span className="text-[11px] text-stone-400">Ex-Showroom</span>
                        <span className="text-lg font-black text-amber-400">{vehicle.startingPrice}</span>
                      </div>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-2 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleOpenDetail(vehicle)}
                      className="py-2.5 px-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5 text-amber-400" />
                      <span>Specifications</span>
                    </button>
                    <button
                      onClick={() => handleOpenQuote(vehicle)}
                      className="py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Get Quote</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DEALERS TAB VIEW */}
        {activeTab === 'dealers' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8">
            <div className="border-b border-stone-800 pb-5">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                DEALER &amp; SERVICE NETWORK
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                Nationwide 3S Dealerships ({filteredDealers.length})
              </h1>
              <p className="text-stone-400 text-xs sm:text-sm mt-1 max-w-3xl">
                Locate authorized sales showrooms, heavy vehicle maintenance workshops, and genuine spare parts stockists nearest to your fleet operating hub.
              </p>
            </div>

            {/* Filter Bar */}
            <div className="bg-[#15181f] p-4 rounded-xl border border-stone-800 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-300">Filter By State</label>
                <select
                  value={dealerState}
                  onChange={(e) => { setDealerState(e.target.value); setDealerCity('All Cities'); }}
                  className="w-full bg-[#101216] border border-stone-700 rounded-lg px-3 py-2 text-xs text-white"
                >
                  {dealerStates.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-300">Filter By City</label>
                <select
                  value={dealerCity}
                  onChange={(e) => setDealerCity(e.target.value)}
                  className="w-full bg-[#101216] border border-stone-700 rounded-lg px-3 py-2 text-xs text-white"
                >
                  {dealerCities.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-300">Facility Type</label>
                <select
                  value={facilityFilter}
                  onChange={(e) => setFacilityFilter(e.target.value)}
                  className="w-full bg-[#101216] border border-stone-700 rounded-lg px-3 py-2 text-xs text-white"
                >
                  <option value="all">All Touchpoints</option>
                  <option value="3s">3S (Sales, Service, Spares)</option>
                  <option value="workshop">Heavy Workshops Only</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDealers.map(dealer => (
                <div key={dealer.id} className="bg-[#15181f] p-5 rounded-xl border border-stone-800 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                        {dealer.facilityType}
                      </span>
                      <span className="text-[10px] text-stone-400 font-mono">{dealer.city}, {dealer.state}</span>
                    </div>
                    <h3 className="font-bold text-white text-base">{dealer.name}</h3>
                    <p className="text-xs text-stone-400 flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-stone-500 shrink-0 mt-0.5" />
                      <span>{dealer.address}</span>
                    </p>
                    <p className="text-[11px] text-stone-500 flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3 text-stone-500" />
                      <span>{dealer.timing}</span>
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-800 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-stone-400 font-mono">Phone</span>
                      <a href={`tel:${dealer.phone}`} className="font-bold text-amber-400 hover:underline">
                        {dealer.phone}
                      </a>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        onClick={() => handleOpenTestDrive()}
                        className="py-1.5 px-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-xs cursor-pointer"
                      >
                        Book Demo
                      </button>
                      <button
                        onClick={() => handleOpenQuote()}
                        className="py-1.5 px-2 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs cursor-pointer"
                      >
                        Request Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SAARTHI TELEMATICS TAB VIEW */}
        {activeTab === 'saarthi' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
            <div className="border-b border-stone-800 pb-5">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                IOT FLEET MANAGEMENT
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                SML Saarthi 3.0 Connected Telematics
              </h1>
              <p className="text-stone-400 text-xs sm:text-sm mt-1 max-w-3xl">
                Advanced real-time fleet telematics pre-integrated with CAN-bus controllers. Monitor driver efficiency, fuel status, route adherence, and health metrics directly from your smartphone or enterprise ERP.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#15181f] p-6 rounded-2xl border border-stone-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">Live Route Tracking &amp; Replay</h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Real-time GPS pin location with 10-second ping intervals. Historical trip playback with stop duration, speed heatmaps, and toll booth timestamps.
                </p>
              </div>

              <div className="bg-[#15181f] p-6 rounded-2xl border border-stone-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Fuel className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">Ultrasonic Fuel Monitoring</h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  High-precision digital fuel level readings preventing pilferage. Real-time consumption curves per kilometer and automated refill receipt logs.
                </p>
              </div>

              <div className="bg-[#15181f] p-6 rounded-2xl border border-stone-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Gauge className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">Engine Health &amp; DTC Alerts</h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Direct connection with OBD-2 engine ECU. Instant alerts on coolant temperature spikes, oil pressure drops, and DPF regeneration cycles.
                </p>
              </div>
            </div>

            <div className="bg-[#15181f] p-8 rounded-2xl border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white">Need Saarthi Enterprise Fleet API Integration?</h4>
                <p className="text-xs text-stone-400">We offer ready REST APIs and Webhook web services for SAP, Oracle, and custom logistics management ERPs.</p>
              </div>
              <button
                onClick={() => handleOpenQuote()}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs cursor-pointer shadow-lg whitespace-nowrap"
              >
                Request Enterprise Integration
              </button>
            </div>
          </div>
        )}

        {/* CORPORATE / ABOUT US TAB VIEW */}
        {activeTab === 'corporate' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
            <div className="border-b border-stone-800 pb-5">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                ABOUT RAOZ MOTORS INDIA
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                Corporate Heritage &amp; Leadership
              </h1>
              <p className="text-stone-400 text-xs sm:text-sm mt-1 max-w-3xl">
                Formerly Swaraj Mazda Limited, founded in 1983 as a pioneering Indo-Japanese collaboration with Sumitomo Corporation and Isuzu Motors. Four decades of empowering Indian logistics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-xs sm:text-sm text-stone-300 leading-relaxed">
                <h3 className="text-xl font-bold text-white">Engineering Reliability Since 1983</h3>
                <p>
                  Raoz Motors has built its reputation on manufacturing rugged, fuel-efficient commercial trucks, buses, and specialized utility vehicles engineered specifically for Indian road conditions and extreme ambient temperatures.
                </p>
                <p>
                  With manufacturing headquarters located in Asron, District Shahid Bhagat Singh Nagar (Ropar), Punjab, our vertically integrated plant houses modern robotic body-in-white welding lines, cathodic electrodeposition (CED) paint booths, chassis assembly conveyors, and an ARAI-certified test track.
                </p>
                <p>
                  Today, Raoz Motors vehicles transport millions of school children daily, deliver vital consumer goods to retail stores, support city municipal corporations, and serve as emergency ambulances across all 28 states and union territories.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-stone-800 aspect-[16/10]">
                <img
                  src="/assets/raozmotors/plant_manufacturing_asron.jpg"
                  alt="Raoz Motors Plant"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Milestones Timeline */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white font-mono uppercase text-amber-400">Milestones of Excellence</h3>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="bg-[#15181f] p-4 rounded-xl border border-stone-800">
                  <div className="text-amber-400 font-mono font-black text-lg">1983</div>
                  <div className="font-bold text-white text-xs mt-1">Company Inception</div>
                  <p className="text-[11px] text-stone-400 mt-1">Incorporated as a joint venture bringing Japanese commercial vehicle engineering to India.</p>
                </div>
                <div className="bg-[#15181f] p-4 rounded-xl border border-stone-800">
                  <div className="text-amber-400 font-mono font-black text-lg">2012</div>
                  <div className="font-bold text-white text-xs mt-1">SML Global Series</div>
                  <p className="text-[11px] text-stone-400 mt-1">Launch of next-gen Sartaj &amp; Samrat commercial platforms with high torque CRDi engines.</p>
                </div>
                <div className="bg-[#15181f] p-4 rounded-xl border border-stone-800">
                  <div className="text-amber-400 font-mono font-black text-lg">2020</div>
                  <div className="font-bold text-white text-xs mt-1">BS6 Clean Mobility</div>
                  <p className="text-[11px] text-stone-400 mt-1">Full fleet transition to BS6 Phase 1 &amp; Phase 2 norms with factory-fitted telematics.</p>
                </div>
                <div className="bg-[#15181f] p-4 rounded-xl border border-stone-800">
                  <div className="text-amber-400 font-mono font-black text-lg">2026</div>
                  <div className="font-bold text-white text-xs mt-1">EV &amp; Green Future</div>
                  <p className="text-[11px] text-stone-400 mt-1">Field validation of full-electric school &amp; city commuter buses with fast DC charging.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* INVESTORS TAB VIEW */}
        {activeTab === 'investors' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8">
            <div className="border-b border-stone-800 pb-5">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                FINANCIAL DISCLOSURES &amp; GOVERNANCE
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                Investor Relations
              </h1>
              <p className="text-stone-400 text-xs sm:text-sm mt-1 max-w-3xl">
                BSE &amp; NSE listed entity. Access financial results, annual reports, investor presentations, credit ratings, and corporate governance disclosures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#15181f] p-6 rounded-2xl border border-stone-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-400">FINANCIAL RESULTS</span>
                  <FileText className="w-4 h-4 text-stone-500" />
                </div>
                <h3 className="font-bold text-white text-base">Q1 FY 2026-27 Audited Results</h3>
                <p className="text-xs text-stone-400">Consolidated and standalone financial statements approved by the Board of Directors.</p>
                <button
                  onClick={() => alert('Downloading official Q1 FY27 financial statement PDF...')}
                  className="w-full py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>Download Financial Report</span>
                </button>
              </div>

              <div className="bg-[#15181f] p-6 rounded-2xl border border-stone-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-400">ANNUAL REPORT</span>
                  <FileText className="w-4 h-4 text-stone-500" />
                </div>
                <h3 className="font-bold text-white text-base">Annual Report FY 2025-26</h3>
                <p className="text-xs text-stone-400">Complete 42nd Annual Report including Chairman’s statement and auditor's report.</p>
                <button
                  onClick={() => alert('Downloading 42nd Annual Report PDF...')}
                  className="w-full py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>Download Annual Report</span>
                </button>
              </div>

              <div className="bg-[#15181f] p-6 rounded-2xl border border-stone-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-400">SHAREHOLDING</span>
                  <Users className="w-4 h-4 text-stone-500" />
                </div>
                <h3 className="font-bold text-white text-base">Shareholding Pattern Q1 FY27</h3>
                <p className="text-xs text-stone-400">Quarterly statement under Regulation 31 of SEBI Listing Regulations.</p>
                <button
                  onClick={() => alert('Downloading Shareholding Pattern document...')}
                  className="w-full py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>Download Shareholding</span>
                </button>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#15181f] border border-stone-800 space-y-2 text-xs text-stone-300">
              <div className="font-bold text-white text-sm">Investor Relations Contact</div>
              <div>Company Secretary &amp; Compliance Officer: <span className="text-amber-400 font-mono">investor.relations@raozmotors.com</span></div>
              <div>Registered Office: Village Asron, Distt. Shahid Bhagat Singh Nagar, Punjab - 144533</div>
            </div>
          </div>
        )}

        {/* CAREERS TAB VIEW */}
        {activeTab === 'careers' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8">
            <div className="border-b border-stone-800 pb-5">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                BUILD THE FUTURE OF COMMERCIAL MOBILITY
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                Careers at Raoz Motors
              </h1>
              <p className="text-stone-400 text-xs sm:text-sm mt-1 max-w-3xl">
                Join our multidisciplinary engineering, manufacturing, and commercial team shaping India’s heavy vehicle future.
              </p>
            </div>

            <div className="space-y-4">
              {ALL_CAREERS.map(career => (
                <div key={career.id} className="bg-[#15181f] p-6 rounded-2xl border border-stone-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                        {career.department}
                      </span>
                      <span className="text-xs text-stone-400 font-mono">{career.location}</span>
                    </div>
                    <h3 className="font-bold text-white text-base">{career.title}</h3>
                    <p className="text-xs text-stone-400 max-w-2xl">{career.description}</p>
                    <div className="text-[11px] text-stone-500 font-mono">Experience: {career.experience} · Type: {career.type}</div>
                  </div>
                  <div>
                    <button
                      onClick={() => alert(`Application submitted for ${career.title}! Please send your updated resume to careers@raozmotors.com.`)}
                      className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs whitespace-nowrap cursor-pointer"
                    >
                      Apply For Role
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CONTACT US TAB VIEW */}
        {activeTab === 'contact' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8">
            <div className="border-b border-stone-800 pb-5">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                GET IN TOUCH
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                Contact Raoz Motors
              </h1>
              <p className="text-stone-400 text-xs sm:text-sm mt-1 max-w-3xl">
                Connect with our corporate headquarters, manufacturing plant, or regional sales offices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#15181f] p-6 rounded-2xl border border-stone-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">Corporate Office</h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Plot No. 15, Industrial Area Phase II, Near International Airport Road, Mohali, Punjab - 160002
                </p>
                <div className="text-xs text-amber-400 font-mono pt-1">+91 172 265 8900</div>
              </div>

              <div className="bg-[#15181f] p-6 rounded-2xl border border-stone-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">Manufacturing Plant</h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Village Asron, PO Asron, Distt. Shahid Bhagat Singh Nagar (Ropar), Punjab - 144533
                </p>
                <div className="text-xs text-amber-400 font-mono pt-1">+91 1881 270 120</div>
              </div>

              <div className="bg-[#15181f] p-6 rounded-2xl border border-stone-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">Customer Care (24x7)</h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Nationwide Toll-Free Commercial Fleet Breakdown and Service Support
                </p>
                <div className="text-xs text-amber-400 font-mono font-bold pt-1">1800-419-7269 (Toll-Free)</div>
              </div>
            </div>

            <div className="bg-[#15181f] p-6 sm:p-8 rounded-2xl border border-stone-800">
              <h3 className="font-bold text-white text-lg mb-4">Send Fleet Inquiry Message</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you! Your inquiry has been forwarded to our regional commercial fleet manager.');
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs"
              >
                <div>
                  <label className="text-stone-300 font-semibold block mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Gurpreet Singh"
                    className="w-full bg-[#1b1f26] border border-stone-700 rounded-xl px-3 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="text-stone-300 font-semibold block mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 00000"
                    className="w-full bg-[#1b1f26] border border-stone-700 rounded-xl px-3 py-2 text-white"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-stone-300 font-semibold block mb-1">Inquiry Details *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your fleet requirements, model interested in, or service inquiry..."
                    className="w-full bg-[#1b1f26] border border-stone-700 rounded-xl p-3 text-white"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-2.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs cursor-pointer shadow-md"
                  >
                    Submit Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>

      {/* Corporate Comprehensive Footer */}
      <footer className="bg-[#0b0c0f] border-t border-stone-800 pt-12 pb-8 text-xs text-stone-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Col 1: Brand Info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20">
                  <Truck className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xl font-black tracking-tight text-white">RAOZ</span>
                    <span className="text-xl font-light tracking-tight text-amber-400">MOTORS</span>
                  </div>
                  <div className="text-[10px] tracking-widest text-stone-400 uppercase font-mono font-semibold">
                    Commercial Vehicles
                  </div>
                </div>
              </div>
              <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
                Pioneering reliable, fuel-efficient commercial trucks, school buses, corporate coaches, and specialized municipal &amp; ambulance vehicles across India since 1983.
              </p>
              <div className="pt-1 text-stone-300 space-y-1">
                <div className="font-bold text-white">24x7 Roadside Assistance Hotline:</div>
                <div className="text-amber-400 font-mono text-base font-black">1800-419-7269 (Toll-Free)</div>
              </div>
            </div>

            {/* Col 2: Trucks */}
            <div className="space-y-3">
              <h4 className="font-bold text-white uppercase font-mono text-xs text-amber-400">Commercial Trucks</h4>
              <ul className="space-y-1.5 text-stone-400">
                <li><button onClick={() => { setActiveTab('trucks'); setSelectedCategory('trucks'); }} className="hover:text-white cursor-pointer">Sartaj GS 5252 (LCV)</button></li>
                <li><button onClick={() => { setActiveTab('trucks'); setSelectedCategory('trucks'); }} className="hover:text-white cursor-pointer">Sartaj HG 72 (6-Tyre)</button></li>
                <li><button onClick={() => { setActiveTab('trucks'); setSelectedCategory('trucks'); }} className="hover:text-white cursor-pointer">Sartaj 59 CNG (Green)</button></li>
                <li><button onClick={() => { setActiveTab('trucks'); setSelectedCategory('trucks'); }} className="hover:text-white cursor-pointer">Samrat GS (10.7T ICV)</button></li>
                <li><button onClick={() => { setActiveTab('trucks'); setSelectedCategory('trucks'); }} className="hover:text-white cursor-pointer">Samrat GS XT (24ft Deck)</button></li>
                <li><button onClick={() => { setActiveTab('trucks'); setSelectedCategory('trucks'); }} className="hover:text-white cursor-pointer">Supreme GS (11.99T)</button></li>
                <li><button onClick={() => { setActiveTab('trucks'); setSelectedCategory('trucks'); }} className="hover:text-white cursor-pointer">Samrat Tippers (Quarry)</button></li>
              </ul>
            </div>

            {/* Col 3: Buses & Special */}
            <div className="space-y-3">
              <h4 className="font-bold text-white uppercase font-mono text-xs text-amber-400">Buses &amp; Special</h4>
              <ul className="space-y-1.5 text-stone-400">
                <li><button onClick={() => { setActiveTab('buses'); setSelectedCategory('buses'); }} className="hover:text-white cursor-pointer">SML Saathi School Bus</button></li>
                <li><button onClick={() => { setActiveTab('buses'); setSelectedCategory('buses'); }} className="hover:text-white cursor-pointer">Executive School Coach 4240</button></li>
                <li><button onClick={() => { setActiveTab('buses'); setSelectedCategory('buses'); }} className="hover:text-white cursor-pointer">Executive LX Staff Coach</button></li>
                <li><button onClick={() => { setActiveTab('buses'); setSelectedCategory('buses'); }} className="hover:text-white cursor-pointer">Hiroi Luxury AC Coach</button></li>
                <li><button onClick={() => { setActiveTab('special'); setSelectedCategory('special'); }} className="hover:text-white cursor-pointer">LifeLine ACLS Ambulance</button></li>
                <li><button onClick={() => { setActiveTab('special'); setSelectedCategory('special'); }} className="hover:text-white cursor-pointer">CleanCity Water Sprinklers</button></li>
                <li><button onClick={() => { setActiveTab('special'); setSelectedCategory('special'); }} className="hover:text-white cursor-pointer">Dpr-8 Garbage Dumper Placer</button></li>
              </ul>
            </div>

            {/* Col 4: Corporate & Quick Links */}
            <div className="space-y-3">
              <h4 className="font-bold text-white uppercase font-mono text-xs text-amber-400">Corporate &amp; Dealers</h4>
              <ul className="space-y-1.5 text-stone-400">
                <li><button onClick={() => setActiveTab('corporate')} className="hover:text-white cursor-pointer">About Raoz Motors</button></li>
                <li><button onClick={() => setActiveTab('dealers')} className="hover:text-white cursor-pointer">Find Authorized Dealer</button></li>
                <li><button onClick={() => setActiveTab('saarthi')} className="hover:text-white cursor-pointer">SML Saarthi Telematics</button></li>
                <li><button onClick={() => setActiveTab('investors')} className="hover:text-white cursor-pointer">Investor Relations</button></li>
                <li><button onClick={() => setActiveTab('careers')} className="hover:text-white cursor-pointer">Careers &amp; Openings</button></li>
                <li><button onClick={() => setActiveTab('contact')} className="hover:text-white cursor-pointer">Contact Us</button></li>
                <li><button onClick={() => handleOpenQuote()} className="text-amber-400 font-bold hover:underline cursor-pointer">Request Fleet Quotation</button></li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright & Disclaimer */}
          <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
            <div>
              © {new Date().getFullYear()} RAOZ MOTORS COMMERCIAL VEHICLES (INDIA). All Rights Reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Use</span>
              <span>•</span>
              <span>Statutory Disclosures</span>
              <span>•</span>
              <span>ISO 9001:2015 &amp; ISO 14001</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Reference Site Switcher */}
      <ReferenceSiteSwitcher currentSiteId="raoz-motors" />

      {/* Modals */}
      {detailVehicle && (
        <VehicleDetailModal
          vehicle={detailVehicle}
          isOpen={detailModalOpen}
          onClose={() => setDetailModalOpen(false)}
          onRequestQuote={(v) => { setDetailModalOpen(false); handleOpenQuote(v); }}
          onBookTestDrive={(v) => { setDetailModalOpen(false); handleOpenTestDrive(v); }}
          onDownloadBrochure={(v) => { setDetailModalOpen(false); handleOpenBrochure(v); }}
          onCompare={(v) => { setDetailModalOpen(false); handleOpenCompare(v); }}
        />
      )}

      <RequestQuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        selectedVehicle={quoteVehicle}
      />

      <BookTestDriveModal
        isOpen={testDriveModalOpen}
        onClose={() => setTestDriveModalOpen(false)}
        selectedVehicle={testDriveVehicle}
      />

      <VehicleCompareModal
        isOpen={compareModalOpen}
        onClose={() => setCompareModalOpen(false)}
        initialVehicle={compareInitialVehicle}
        onRequestQuote={(v) => { setCompareModalOpen(false); handleOpenQuote(v); }}
      />

      {brochureVehicle && (
        <BrochureModal
          vehicle={brochureVehicle}
          isOpen={brochureModalOpen}
          onClose={() => setBrochureModalOpen(false)}
          onRequestQuote={(v) => { setBrochureModalOpen(false); handleOpenQuote(v); }}
        />
      )}
    </div>
  );
};
