import React, { useState, useMemo } from 'react';
import {
  Building2,
  Search,
  MapPin,
  SlidersHorizontal,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Clock,
  Phone,
  MessageSquare,
  ChevronDown,
  Layers,
  Award,
  ChevronRight,
  Filter,
  Heart
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import {
  BRAND_NAME,
  BRAND_DISPLAY,
  BRAND_TAGLINE,
  PHONE_NUMBER,
  EMAIL_ADDRESS,
  WHATSAPP_NUMBER,
  OFFICE_ADDRESS,
  POPULAR_CITIES,
  SAMPLE_PROPERTIES,
  SAMPLE_PROJECTS,
  SAMPLE_DEALERS,
  WHY_CHOOSE_US_POINTS,
  REAL_ESTATE_SERVICES,
  HOW_IT_WORKS_STEPS,
  REAL_ESTATE_FAQS,
  REAL_ESTATE_BLOG_ARTICLES,
  MANDATORY_LEGAL_DISCLAIMER,
  PropertyItem,
  RealEstateProject
} from '../../data/squareYardDealersData';
import { SquareYardDealersHeader } from './SquareYardDealersHeader';
import { SquareYardDealersFooter } from './SquareYardDealersFooter';
import { SquareYardDealersPropertyCard } from './SquareYardDealersPropertyCard';
import { SquareYardDealersProjectCard } from './SquareYardDealersProjectCard';
import { SquareYardDealersFilters, PropertyFilterState } from './SquareYardDealersFilters';
import { SquareYardDealersEmiCalculator, formatIndianCurrency } from './SquareYardDealersEmiCalculator';
import {
  SquareYardDealersPostPropertyModal,
  SquareYardDealersScheduleVisitModal,
  SquareYardDealersValuationModal,
  SquareYardDealersLegalModal
} from './SquareYardDealersModals';
import {
  SquareYardDealersPropertyDetailsView,
  SquareYardDealersProjectDetailsView,
  SquareYardDealersBuyView,
  SquareYardDealersRentView,
  SquareYardDealersProjectsView,
  SquareYardDealersAgentsView,
  SquareYardDealersToolsView,
  SquareYardDealersAboutView,
  SquareYardDealersBlogView,
  SquareYardDealersContactView,
  SquareYardDealersSellView,
  SquareYardDealersServicesView
} from './SquareYardDealersDedicatedViews';

const INITIAL_FILTER_STATE: PropertyFilterState = {
  searchQuery: '',
  city: 'All Cities',
  locality: '',
  listingType: 'all',
  propertyCategory: 'all',
  propertyTypes: [],
  bhk: [],
  minPrice: 0,
  maxPrice: 100000000,
  minArea: 0,
  maxArea: 20000,
  furnishing: [],
  possessionStatus: [],
  postedBy: [],
  verifiedOnly: false,
  sortBy: 'relevance'
};

export const SquareYardDealersApp: React.FC = () => {
  const { submitLead } = useApp();

  // Navigation tab state
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedCity, setSelectedCity] = useState<string>('Gurgaon');

  // Currently focused property or project for deep views
  const [selectedProperty, setSelectedProperty] = useState<PropertyItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<RealEstateProject | null>(null);

  // Favorites state
  const [favoriteIds, setFavoriteIds] = useState<string[]>(['prop-1', 'prop-4']);

  // Modals state
  const [postPropertyModalOpen, setPostPropertyModalOpen] = useState(false);
  const [scheduleVisitItem, setScheduleVisitItem] = useState<PropertyItem | RealEstateProject | null>(null);
  const [valuationModalOpen, setValuationModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'disclaimer' | 'cookie' | null>(null);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Hero Search State
  const [heroSearchTab, setHeroSearchTab] = useState<'buy' | 'rent' | 'sell'>('buy');
  const [heroLocationQuery, setHeroLocationQuery] = useState('');
  const [heroPropertyType, setHeroPropertyType] = useState('All');
  const [heroBudgetRange, setHeroBudgetRange] = useState('Any Budget');
  const [heroBhk, setHeroBhk] = useState('All');

  // Interactive Project City Tab on Homepage
  const [hotCityTab, setHotCityTab] = useState('Mumbai');

  // Property Filters State
  const [filters, setFilters] = useState<PropertyFilterState>(INITIAL_FILTER_STATE);

  // FAQ expanded state
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);

  // Toggle favorite
  const handleToggleFavorite = (id: string) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // Navigate handler
  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open property details
  const handleSelectProperty = (prop: PropertyItem) => {
    setSelectedProperty(prop);
    setCurrentTab('property-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open project details
  const handleSelectProject = (proj: RealEstateProject) => {
    setSelectedProject(proj);
    setCurrentTab('project-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Hero Search Execution
  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroSearchTab === 'sell') {
      setPostPropertyModalOpen(true);
      return;
    }

    setFilters((prev) => ({
      ...prev,
      listingType: heroSearchTab,
      searchQuery: heroLocationQuery,
      propertyTypes: heroPropertyType !== 'All' ? [heroPropertyType] : []
    }));

    setCurrentTab(heroSearchTab === 'buy' ? 'buy' : 'rent');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filtered properties based on current filters
  const filteredProperties = useMemo(() => {
    return SAMPLE_PROPERTIES.filter((p) => {
      // Intent
      if (filters.listingType !== 'all' && p.listingType !== filters.listingType) return false;
      // Category
      if (filters.propertyCategory !== 'all' && p.propertyCategory !== filters.propertyCategory) return false;
      // City
      if (filters.city !== 'All Cities' && p.city.toLowerCase() !== filters.city.toLowerCase()) return false;
      // Property Types
      if (filters.propertyTypes.length > 0 && !filters.propertyTypes.includes(p.propertyType)) return false;
      // BHK
      if (filters.bhk.length > 0 && !filters.bhk.includes(p.bedrooms)) return false;
      // Price
      if (p.price > filters.maxPrice) return false;
      // Furnishing
      if (filters.furnishing.length > 0 && !filters.furnishing.includes(p.furnishing)) return false;
      // Possession
      if (filters.possessionStatus.length > 0 && !filters.possessionStatus.includes(p.possessionStatus)) return false;
      // Posted By
      if (filters.postedBy.length > 0 && !filters.postedBy.includes(p.postedBy)) return false;
      // Verified
      if (filters.verifiedOnly && !p.verified) return false;
      // Search query
      if (filters.searchQuery.trim()) {
        const q = filters.searchQuery.toLowerCase();
        const matches =
          p.title.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.locality.toLowerCase().includes(q) ||
          p.city.toLowerCase().includes(q) ||
          p.propertyType.toLowerCase().includes(q);
        if (!matches) return false;
      }
      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price_asc') return a.price - b.price;
      if (filters.sortBy === 'price_desc') return b.price - a.price;
      return 0;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-['Inter',sans-serif] selection:bg-amber-400 selection:text-slate-950">
      {/* 1. Global Multi-site Switcher for the platform collection */}
      <ReferenceSiteSwitcher currentSiteId="square-yard-dealers" />

      {/* 2. Global Header with navigation, 7 categories, city picker & actions */}
      <SquareYardDealersHeader
        currentTab={currentTab}
        selectedCity={selectedCity}
        onSelectCity={(c) => {
          setSelectedCity(c);
          setFilters((prev) => ({ ...prev, city: c }));
        }}
        onNavigate={handleNavigate}
        onOpenPostProperty={() => setPostPropertyModalOpen(true)}
        onOpenLogin={() => setPostPropertyModalOpen(true)}
        favoriteCount={favoriteIds.length}
      />

      {/* 3. DYNAMIC CONTENT ROUTER */}
      <main className="flex-1">
        {/* VIEW: Property Details */}
        {currentTab === 'property-details' && selectedProperty && (
          <SquareYardDealersPropertyDetailsView
            property={selectedProperty}
            onNavigate={handleNavigate}
            onOpenScheduleVisit={(item) => setScheduleVisitItem(item)}
            onOpenPostProperty={() => setPostPropertyModalOpen(true)}
            onSelectProperty={handleSelectProperty}
            onSelectProject={handleSelectProject}
            onToggleFavorite={handleToggleFavorite}
            favoriteIds={favoriteIds}
          />
        )}

        {/* VIEW: Project Details */}
        {currentTab === 'project-details' && selectedProject && (
          <SquareYardDealersProjectDetailsView
            project={selectedProject}
            onNavigate={handleNavigate}
            onOpenScheduleVisit={(item) => setScheduleVisitItem(item)}
            onOpenPostProperty={() => setPostPropertyModalOpen(true)}
            onSelectProperty={handleSelectProperty}
            onSelectProject={handleSelectProject}
          />
        )}

        {/* VIEW: Buy Properties */}
        {currentTab === 'buy' && (
          <SquareYardDealersBuyView
            onNavigate={handleNavigate}
            onOpenScheduleVisit={(item) => setScheduleVisitItem(item)}
            onOpenPostProperty={() => setPostPropertyModalOpen(true)}
            onSelectProperty={handleSelectProperty}
            onSelectProject={handleSelectProject}
            onToggleFavorite={handleToggleFavorite}
            favoriteIds={favoriteIds}
          />
        )}

        {/* VIEW: Rent Properties */}
        {currentTab === 'rent' && (
          <SquareYardDealersRentView
            onNavigate={handleNavigate}
            onOpenScheduleVisit={(item) => setScheduleVisitItem(item)}
            onOpenPostProperty={() => setPostPropertyModalOpen(true)}
            onSelectProperty={handleSelectProperty}
            onSelectProject={handleSelectProject}
            onToggleFavorite={handleToggleFavorite}
            favoriteIds={favoriteIds}
          />
        )}

        {/* VIEW: Projects */}
        {currentTab === 'projects' && (
          <SquareYardDealersProjectsView
            onNavigate={handleNavigate}
            onOpenScheduleVisit={(item) => setScheduleVisitItem(item)}
            onOpenPostProperty={() => setPostPropertyModalOpen(true)}
            onSelectProperty={handleSelectProperty}
            onSelectProject={handleSelectProject}
          />
        )}

        {/* VIEW: Sell / Rent Property */}
        {(currentTab === 'sell-property' || currentTab === 'sell') && (
          <SquareYardDealersSellView
            onNavigate={handleNavigate}
            onOpenScheduleVisit={(item) => setScheduleVisitItem(item)}
            onOpenPostProperty={() => setPostPropertyModalOpen(true)}
            onSelectProperty={handleSelectProperty}
            onSelectProject={handleSelectProject}
            onToggleFavorite={handleToggleFavorite}
            favoriteIds={favoriteIds}
          />
        )}

        {/* VIEW: Real Estate Services */}
        {currentTab === 'services' && (
          <SquareYardDealersServicesView
            onNavigate={handleNavigate}
            onOpenScheduleVisit={(item) => setScheduleVisitItem(item)}
            onOpenPostProperty={() => setPostPropertyModalOpen(true)}
            onSelectProperty={handleSelectProperty}
            onSelectProject={handleSelectProject}
          />
        )}

        {/* VIEW: Property Dealers / Agents */}
        {currentTab === 'agents' && (
          <SquareYardDealersAgentsView
            onNavigate={handleNavigate}
            onOpenScheduleVisit={(item) => setScheduleVisitItem(item)}
            onOpenPostProperty={() => setPostPropertyModalOpen(true)}
            onSelectProperty={handleSelectProperty}
            onSelectProject={handleSelectProject}
          />
        )}

        {/* VIEW: Tools */}
        {currentTab === 'tools' && (
          <SquareYardDealersToolsView
            onNavigate={handleNavigate}
            onOpenScheduleVisit={(item) => setScheduleVisitItem(item)}
            onOpenPostProperty={() => setPostPropertyModalOpen(true)}
            onSelectProperty={handleSelectProperty}
            onSelectProject={handleSelectProject}
          />
        )}

        {/* VIEW: Valuation */}
        {currentTab === 'property-valuation' && (
          <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs uppercase font-bold tracking-wider text-blue-600 block">
                Valuation Engine
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
                Know Your Property's Estimated Value
              </h1>
              <p className="text-xs sm:text-sm text-slate-500">
                Calculate indicative market rates based on historical registry values and asking prices.
              </p>
            </div>
            <button
              onClick={() => setValuationModalOpen(true)}
              className="mx-auto block py-4 px-8 rounded-full bg-amber-400 hover:bg-yellow-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg"
            >
              Launch Property Valuation Tool
            </button>
          </div>
        )}

        {/* VIEW: Calculator */}
        {currentTab === 'calculator' && (
          <div className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs uppercase font-bold tracking-wider text-blue-600 block">
                Financial Planning
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
                Home Loan EMI Calculator
              </h1>
              <p className="text-xs sm:text-sm text-slate-500">
                Calculate your monthly installments, total interest, and amortized repayment schedules.
              </p>
            </div>
            <SquareYardDealersEmiCalculator onExploreLoans={() => handleNavigate('home-loans')} />
          </div>
        )}

        {/* VIEW: Home Loans Assistance */}
        {currentTab === 'home-loans' && (
          <div className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs uppercase font-bold tracking-wider text-blue-600 block">
                Financing
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
                Need Financing for Your Property?
              </h1>
              <p className="text-sm text-slate-600 max-w-xl mx-auto">
                Explore home loan options through applicable lending partners with competitive interest rates and seamless paperwork assistance.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => handleNavigate('contact')}
                  className="py-3.5 px-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider"
                >
                  Check Home Loan Options
                </button>
              </div>
            </div>
            <SquareYardDealersEmiCalculator onExploreLoans={() => handleNavigate('contact')} />
          </div>
        )}

        {/* VIEW: About Us */}
        {currentTab === 'about' && (
          <SquareYardDealersAboutView
            onNavigate={handleNavigate}
            onOpenScheduleVisit={(item) => setScheduleVisitItem(item)}
            onOpenPostProperty={() => setPostPropertyModalOpen(true)}
            onSelectProperty={handleSelectProperty}
            onSelectProject={handleSelectProject}
          />
        )}

        {/* VIEW: Blog */}
        {currentTab === 'blog' && (
          <SquareYardDealersBlogView
            onNavigate={handleNavigate}
            onOpenScheduleVisit={(item) => setScheduleVisitItem(item)}
            onOpenPostProperty={() => setPostPropertyModalOpen(true)}
            onSelectProperty={handleSelectProperty}
            onSelectProject={handleSelectProject}
          />
        )}

        {/* VIEW: Contact */}
        {currentTab === 'contact' && (
          <SquareYardDealersContactView
            onNavigate={handleNavigate}
            onOpenScheduleVisit={(item) => setScheduleVisitItem(item)}
            onOpenPostProperty={() => setPostPropertyModalOpen(true)}
            onSelectProperty={handleSelectProperty}
            onSelectProject={handleSelectProject}
          />
        )}

        {/* VIEW: Shortlisted Properties */}
        {currentTab === 'shortlist' && (
          <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
              Your Shortlisted Properties ({favoriteIds.length})
            </h1>
            {favoriteIds.length === 0 ? (
              <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-3">
                <Heart className="w-10 h-10 text-slate-300 mx-auto" />
                <h3 className="font-bold text-slate-700">No properties shortlisted yet</h3>
                <p className="text-xs text-slate-500">Tap the heart icon on any property card to save it here.</p>
                <button
                  onClick={() => handleNavigate('buy')}
                  className="py-2.5 px-6 rounded-full bg-slate-900 text-white text-xs font-bold uppercase"
                >
                  Browse Properties
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {SAMPLE_PROPERTIES.filter((p) => favoriteIds.includes(p.id)).map((p) => (
                  <SquareYardDealersPropertyCard
                    key={p.id}
                    property={p}
                    onViewDetails={handleSelectProperty}
                    onToggleFavorite={handleToggleFavorite}
                    isFavorite={true}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* VIEW: HOMEPAGE (Default Full Marketplace Experience) */}
        {currentTab === 'home' && (
          <>
            {/* 1. HERO SECTION WITH PROMINENT PROPERTY SEARCH BAR */}
            <section className="relative bg-[#09233c] text-white pt-16 pb-24 sm:pt-24 sm:pb-32 overflow-hidden">
              {/* Background cover image with linear gradient overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80"
                  alt="Square Yard Dealers Hero"
                  className="w-full h-full object-cover opacity-25"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#071728] via-[#09233c]/90 to-[#09233c]/70" />
              </div>

              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                {/* Hero Top Title & Trust Pill */}
                <div className="max-w-3xl space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-amber-400/30 text-amber-300 text-xs font-bold backdrop-blur-xs">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Indian Real Estate Marketplace · Proptech Advisory</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                    Find Your Perfect Property
                  </h1>

                  <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed">
                    Discover homes, commercial spaces and investment opportunities that match your location, budget and requirements.
                  </p>
                </div>

                {/* Powerful Property Search Interface (Buy, Rent, Sell Tabs) */}
                <div className="max-w-5xl bg-white rounded-3xl shadow-2xl p-4 sm:p-6 text-slate-900 border border-slate-100">
                  {/* Tabs: BUY | RENT | SELL */}
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-4">
                    {(['buy', 'rent', 'sell'] as const).map((tab) => (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setHeroSearchTab(tab)}
                        className={`py-2 px-6 rounded-full font-black text-xs uppercase tracking-wider transition-all cursor-pointer ${
                          heroSearchTab === tab
                            ? 'bg-slate-950 text-white shadow-md'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {tab === 'buy' ? 'Buy Property' : tab === 'rent' ? 'Rent Property' : 'Sell / List Property'}
                      </button>
                    ))}
                  </div>

                  {/* Search Form Fields */}
                  <form onSubmit={handleHeroSearch} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
                    {/* Location Field */}
                    <div className="md:col-span-4 space-y-1">
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                        Location / City / Locality
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          placeholder="Search City, Locality or Project"
                          value={heroLocationQuery}
                          onChange={(e) => setHeroLocationQuery(e.target.value)}
                          className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 font-medium"
                        />
                      </div>
                    </div>

                    {/* Property Type */}
                    <div className="md:col-span-3 space-y-1">
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                        Property Type
                      </label>
                      <select
                        value={heroPropertyType}
                        onChange={(e) => setHeroPropertyType(e.target.value)}
                        className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 font-medium"
                      >
                        <option value="All">All Property Types</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Builder Floor">Builder Floor</option>
                        <option value="Villa">Villa / House</option>
                        <option value="Plot">Residential Plot</option>
                        <option value="Office Space">Commercial Office</option>
                        <option value="Shop">Retail Shop</option>
                      </select>
                    </div>

                    {/* BHK Field */}
                    <div className="md:col-span-2 space-y-1">
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                        BHK
                      </label>
                      <select
                        value={heroBhk}
                        onChange={(e) => setHeroBhk(e.target.value)}
                        className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 font-medium"
                      >
                        <option value="All">Any BHK</option>
                        <option value="1">1 BHK</option>
                        <option value="2">2 BHK</option>
                        <option value="3">3 BHK</option>
                        <option value="4">4 BHK</option>
                        <option value="5">5+ BHK</option>
                      </select>
                    </div>

                    {/* Search CTA */}
                    <div className="md:col-span-3">
                      <button
                        type="submit"
                        className="w-full py-3 px-6 rounded-xl bg-amber-400 hover:bg-yellow-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-400/25 flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-105"
                      >
                        <Search className="w-4 h-4 stroke-[2.5]" />
                        <span>Search Properties</span>
                      </button>
                    </div>
                  </form>

                  {/* Trending Search Chips */}
                  <div className="pt-4 mt-3 border-t border-slate-100 flex items-center gap-2 text-xs flex-wrap">
                    <span className="font-bold text-slate-400 text-[11px] uppercase">
                      Trending Localities:
                    </span>
                    {['Golf Course Road', 'Dwarka Expressway', 'Sector 150 Noida', 'Powai Mumbai', 'Whitefield Bangalore'].map((loc) => (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => {
                          setHeroLocationQuery(loc);
                          setFilters((prev) => ({ ...prev, searchQuery: loc }));
                          setCurrentTab('buy');
                        }}
                        className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-amber-100 hover:text-amber-900 text-slate-600 text-[11px] font-medium transition-colors cursor-pointer"
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 2. HOT SELLING REAL ESTATE PROJECTS IN INDIA (Matching Reference Fold) */}
            <section className="py-16 bg-white border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 block">
                      In-Demand Developments
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      Hot Selling Real Estate Projects in India
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 max-w-2xl leading-relaxed">
                      A handpicked collection of the country's most in-demand residential developments with trusted builders and high capital growth.
                    </p>
                  </div>

                  <button
                    onClick={() => handleNavigate('projects')}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 shrink-0"
                  >
                    <span>View All Projects</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* City Filter Tabs for Hot Projects */}
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {['Mumbai', 'Gurgaon', 'Bangalore', 'Noida', 'Pune', 'Hyderabad'].map((city) => (
                    <button
                      key={city}
                      onClick={() => setHotCityTab(city)}
                      className={`py-2 px-5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                        hotCityTab === city
                          ? 'bg-slate-900 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {SAMPLE_PROJECTS.filter((p) => p.city.toLowerCase() === hotCityTab.toLowerCase() || hotCityTab === 'Mumbai').slice(0, 3).map((proj) => (
                    <SquareYardDealersProjectCard
                      key={proj.id}
                      project={proj}
                      onViewProject={handleSelectProject}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* 3. FEATURED PROPERTIES FOR SALE / RENT */}
            <section className="py-16 bg-slate-50 border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 block">
                      Curated Listings
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      Featured Properties in India
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Verified apartments, villas, and commercial spaces with authentic photos and clear legal documentation.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleNavigate('buy')}
                      className="py-2 px-4 rounded-full bg-white border border-slate-200 hover:bg-slate-100 text-xs font-bold"
                    >
                      Buy (Sale)
                    </button>
                    <button
                      onClick={() => handleNavigate('rent')}
                      className="py-2 px-4 rounded-full bg-white border border-slate-200 hover:bg-slate-100 text-xs font-bold"
                    >
                      Rent
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {SAMPLE_PROPERTIES.slice(0, 4).map((p) => (
                    <SquareYardDealersPropertyCard
                      key={p.id}
                      property={p}
                      onViewDetails={handleSelectProperty}
                      onToggleFavorite={handleToggleFavorite}
                      isFavorite={favoriteIds.includes(p.id)}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* 4. EXPLORE REAL ESTATE IN POPULAR INDIAN CITIES */}
            <section className="py-16 bg-white border-b border-slate-200" id="cities-section">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                <div className="space-y-1">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 block">
                    City Discovery
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Explore Real Estate in Popular Indian Cities
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-2xl">
                    Discover prime localities, average square foot benchmarks, and residential hotspots across India's top metropolitan centers.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {POPULAR_CITIES.map((city) => (
                    <div
                      key={city.id}
                      onClick={() => {
                        setSelectedCity(city.name);
                        setFilters((prev) => ({ ...prev, city: city.name }));
                        handleNavigate('buy');
                      }}
                      className="p-4 rounded-2xl border border-slate-200 hover:border-slate-400 bg-slate-50 hover:bg-white shadow-2xs hover:shadow-md transition-all cursor-pointer group"
                    >
                      <div className="h-28 rounded-xl overflow-hidden mb-3 bg-slate-200">
                        <img src={city.imageUrl} alt={city.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      </div>
                      <strong className="text-sm font-bold text-slate-900 block group-hover:text-blue-600">
                        {city.name}
                      </strong>
                      <span className="text-[11px] text-slate-500 block">{city.tagline}</span>
                      <div className="flex justify-between items-center text-[10px] text-slate-400 mt-2 pt-2 border-t border-slate-200">
                        <span>Avg: {city.avgBuyRate}</span>
                        <span className="font-semibold text-blue-600">{city.activePropertiesCount.toLocaleString()} listings</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 5. LOCALITY DISCOVERY */}
            <section className="py-16 bg-slate-50 border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                <div className="space-y-1">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 block">
                    Neighborhoods
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Explore Properties by Locality
                  </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {[
                    { name: 'Golf Course Road', city: 'Gurgaon', tag: 'Luxury Condos' },
                    { name: 'Dwarka Expressway', city: 'Gurgaon', tag: 'Rapid Growth' },
                    { name: 'Dwarka Sector 12', city: 'Delhi', tag: 'Metro Linked' },
                    { name: 'Vasant Kunj', city: 'Delhi', tag: 'Green & Elite' },
                    { name: 'Sector 150 Noida', city: 'Noida', tag: 'Sports City' },
                    { name: 'Powai', city: 'Mumbai', tag: 'Lake & Tech' },
                    { name: 'Andheri West', city: 'Mumbai', tag: 'Prime West' },
                    { name: 'Whitefield', city: 'Bangalore', tag: 'IT Magnet' },
                    { name: 'Sarjapur Road', city: 'Bangalore', tag: 'Villa Clusters' },
                    { name: 'Hinjewadi', city: 'Pune', tag: 'Software Hub' }
                  ].map((loc, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setFilters((prev) => ({ ...prev, searchQuery: loc.name }));
                        handleNavigate('buy');
                      }}
                      className="p-3.5 rounded-2xl bg-white border border-slate-200 text-left hover:border-blue-500 hover:shadow-xs transition-all cursor-pointer"
                    >
                      <strong className="block text-xs font-bold text-slate-900 truncate">
                        {loc.name}
                      </strong>
                      <span className="text-[11px] text-slate-400 block">{loc.city}</span>
                      <span className="inline-block mt-1 text-[9px] font-bold px-1.5 py-0.5 rounded bg-blue-50 text-blue-700">
                        {loc.tag}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* 6. REAL ESTATE SERVICES (10 Services) */}
            <section className="py-16 bg-white border-b border-slate-200" id="services-section">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                <div className="text-center max-w-2xl mx-auto space-y-2">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 block">
                    Advisory Spectrum
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Our Real Estate Services
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Comprehensive property solutions from discovery and site visits to documentation and home financing.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {REAL_ESTATE_SERVICES.map((s) => (
                    <div key={s.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                      <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                        <Building2 className="w-5 h-5 text-blue-700" />
                      </div>
                      <h4 className="font-bold text-sm text-slate-900">{s.title}</h4>
                      <p className="text-[11px] text-slate-600 leading-relaxed">{s.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 7. WHY CHOOSE SQUARE YARD DEALERS? (6 Pillars) */}
            <section className="py-16 bg-slate-900 text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                <div className="text-center max-w-2xl mx-auto space-y-2">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400 block">
                    Our Distinction
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    Why Choose Square Yard Dealers?
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300">
                    We bring structured property discovery, verified facts, and authentic local dealer coordination together.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {WHY_CHOOSE_US_POINTS.map((item, idx) => (
                    <div key={idx} className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-2.5">
                      <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold">
                        <ShieldCheck className="w-5 h-5 text-amber-400" />
                      </div>
                      <h4 className="font-extrabold text-sm text-white">{item.title}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 8. HOW IT WORKS (5 Steps) */}
            <section className="py-16 bg-white border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                <div className="text-center max-w-2xl mx-auto space-y-2">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 block">
                    Streamlined Journey
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    How Square Yard Dealers Works
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {HOW_IT_WORKS_STEPS.map((step) => (
                    <div key={step.step} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 relative">
                      <span className="text-2xl font-black text-blue-600 block">
                        {step.step}
                      </span>
                      <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider">
                        {step.title}
                      </h4>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 9. HOME LOAN EMI CALCULATOR SECTION */}
            <section className="py-16 bg-slate-50 border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                <div className="text-center max-w-2xl mx-auto space-y-2">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 block">
                    Loan Planning
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Home Loan EMI Calculator
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Estimate your monthly repayment installment, total interest component, and required down payment.
                  </p>
                </div>

                <SquareYardDealersEmiCalculator onExploreLoans={() => handleNavigate('home-loans')} />
              </div>
            </section>

            {/* 10. FAQ SECTION */}
            <section className="py-16 bg-white" id="faq-section">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                <div className="text-center space-y-2">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 block">
                    Got Questions?
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-3">
                  {REAL_ESTATE_FAQS.map((faq, idx) => {
                    const isOpen = expandedFaqIndex === idx;
                    return (
                      <div key={idx} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                        <button
                          onClick={() => setExpandedFaqIndex(isOpen ? null : idx)}
                          className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 cursor-pointer hover:bg-slate-100"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown className={`w-4 h-4 text-blue-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      {/* 4. FOOTER */}
      <SquareYardDealersFooter
        onNavigate={handleNavigate}
        onOpenLegal={(type) => setLegalModalType(type)}
        onOpenPostProperty={() => setPostPropertyModalOpen(true)}
      />

      {/* 5. MODALS */}
      <SquareYardDealersPostPropertyModal
        isOpen={postPropertyModalOpen}
        onClose={() => setPostPropertyModalOpen(false)}
      />

      <SquareYardDealersScheduleVisitModal
        propertyOrProject={scheduleVisitItem}
        onClose={() => setScheduleVisitItem(null)}
      />

      <SquareYardDealersValuationModal
        isOpen={valuationModalOpen}
        onClose={() => setValuationModalOpen(false)}
      />

      <SquareYardDealersLegalModal
        pageType={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* 6. FLOATING WHATSAPP ASSISTANCE BUTTON (Using Configurable WHATSAPP_NUMBER) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 transition-transform hover:scale-110 cursor-pointer"
          title="WhatsApp Property Advisory"
        >
          <MessageSquare className="w-5 h-5" />
        </a>

        <button
          onClick={() => setPostPropertyModalOpen(true)}
          className="py-2 px-4 rounded-full bg-amber-400 hover:bg-yellow-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-400/25 transition-transform hover:scale-105 flex items-center gap-1.5 cursor-pointer"
        >
          <span>Post Property</span>
          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};
