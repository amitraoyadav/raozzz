import React, { useState, useMemo } from 'react';
import {
  Grid,
  List,
  SlidersHorizontal,
  X,
  Search,
  RotateCcw,
  Heart,
  Scale,
  MapPin,
  Building,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { CITIES_LIST, WEALTH_PROPERTIES, WealthProperty } from '../../data/site82Data';

interface Site82PropertyMarketplaceProps {
  initialProjectType?: string;
  initialCity?: string;
  initialCategory?: string;
  onSelectProperty: (property: WealthProperty) => void;
  wishlist: string[];
  onToggleWishlist: (id: string) => void;
  compareList: string[];
  onToggleCompare: (id: string) => void;
  onOpenCompareModal: () => void;
}

export const Site82PropertyMarketplace: React.FC<Site82PropertyMarketplaceProps> = ({
  initialProjectType = 'all',
  initialCity = 'all',
  initialCategory = 'all',
  onSelectProperty,
  wishlist,
  onToggleWishlist,
  compareList,
  onToggleCompare,
  onOpenCompareModal
}) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filters State
  const [activeTab, setActiveTab] = useState<string>(initialProjectType || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState(initialCity || 'all');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'all');
  const [maxPriceLakhs, setMaxPriceLakhs] = useState<number | ''>('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  // Filtered Properties Computation
  const filteredProperties = useMemo(() => {
    return WEALTH_PROPERTIES.filter((p) => {
      // Tab filter
      if (activeTab === 'residential' && p.projectType !== 'Residential' && p.projectType !== 'Plots') return false;
      if (activeTab === 'commercial' && p.projectType !== 'Commercial') return false;
      if (activeTab === 'luxury' && p.category !== 'luxury' && p.projectType !== 'Luxury') return false;

      // Query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matches =
          p.name.toLowerCase().includes(q) ||
          p.developer.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.city.toLowerCase().includes(q);
        if (!matches) return false;
      }

      // City filter
      if (selectedCity !== 'all') {
        const cityObj = CITIES_LIST.find((c) => c.slug === selectedCity || c.id === selectedCity || c.name.toLowerCase() === selectedCity.toLowerCase());
        const targetCityName = cityObj ? cityObj.name.toLowerCase() : selectedCity.toLowerCase();
        if (p.city.toLowerCase() !== targetCityName) return false;
      }

      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }

      // Status filter
      if (selectedStatus !== 'all' && p.status !== selectedStatus) {
        return false;
      }

      // Price filter
      if (typeof maxPriceLakhs === 'number' && p.priceValue > maxPriceLakhs) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceValue - b.priceValue;
      if (sortBy === 'price-desc') return b.priceValue - a.priceValue;
      if (sortBy === 'rating') return b.rating - a.rating;
      // Default: featured first
      if (a.isFeatured !== b.isFeatured) return a.isFeatured ? -1 : 1;
      return b.priceValue - a.priceValue;
    });
  }, [activeTab, searchQuery, selectedCity, selectedCategory, selectedStatus, maxPriceLakhs, sortBy]);

  const handleResetFilters = () => {
    setActiveTab('all');
    setSearchQuery('');
    setSelectedCity('all');
    setSelectedCategory('all');
    setSelectedStatus('all');
    setMaxPriceLakhs('');
    setSortBy('featured');
  };

  const activeFiltersCount = [
    activeTab !== 'all',
    searchQuery.trim() !== '',
    selectedCity !== 'all',
    selectedCategory !== 'all',
    selectedStatus !== 'all',
    maxPriceLakhs !== ''
  ].filter(Boolean).length;

  return (
    <div className="bg-[#FCFAF9] min-h-screen pt-28 pb-20">
      <div className="max-w-[1760px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header Breadcrumbs & Title */}
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#F54900] font-bold mb-1">
              RERA Verified Marketplace
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold text-[#1E2430]">
              Properties &amp; Projects in Noida &amp; NCR
            </h1>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              Showing <span className="font-bold text-[#1E2430]">{filteredProperties.length}</span> verified residential and commercial developments
            </p>
          </div>

          {/* Desktop View Switcher & Sort */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#F0D9CC] text-xs font-bold text-neutral-800 shadow-sm cursor-pointer"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#F54900]" />
              <span>Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}</span>
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-xs text-neutral-500 uppercase font-mono">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="py-2 px-3 bg-white border border-neutral-200 rounded-xl text-xs font-semibold text-neutral-800 focus:outline-none focus:border-[#F54900] shadow-sm cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated (5★)</option>
              </select>
            </div>

            {/* Grid / List Mode */}
            <div className="hidden sm:flex items-center border border-neutral-200 rounded-xl bg-white p-1 shadow-sm">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'grid' ? 'bg-[#F54900] text-white' : 'text-neutral-500 hover:text-black'
                }`}
                title="Grid view"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'list' ? 'bg-[#F54900] text-white' : 'text-neutral-500 hover:text-black'
                }`}
                title="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Primary Type Tabs */}
        <div className="flex items-center gap-2 border-b border-neutral-200 pb-3 mb-6 overflow-x-auto scrollbar-none">
          {[
            { id: 'all', label: 'All Properties' },
            { id: 'residential', label: 'Residential Condos' },
            { id: 'commercial', label: 'Commercial & Retail' },
            { id: 'luxury', label: 'Ultra Luxury' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#F54900] text-white shadow-md shadow-orange-500/30'
                  : 'bg-white text-neutral-700 border border-neutral-200 hover:border-orange-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Desktop Filter Toolbar */}
        <div className="hidden lg:block bg-white border border-[#F0D9CC] rounded-2xl p-4 mb-8 shadow-sm">
          <div className="grid grid-cols-12 gap-3 items-center">
            {/* Search Input */}
            <div className="col-span-4 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search project name, sector, builder..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs border border-neutral-200 rounded-xl focus:outline-none focus:border-[#F54900] bg-neutral-50/50"
              />
            </div>

            {/* City Selector */}
            <div className="col-span-3">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full py-2 px-3 text-xs border border-neutral-200 rounded-xl text-neutral-800 bg-neutral-50/50 focus:outline-none focus:border-[#F54900] cursor-pointer"
              >
                <option value="all">All Locations</option>
                {CITIES_LIST.filter((c) => c.id !== 'all').map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Category */}
            <div className="col-span-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full py-2 px-3 text-xs border border-neutral-200 rounded-xl text-neutral-800 bg-neutral-50/50 focus:outline-none focus:border-[#F54900] cursor-pointer"
              >
                <option value="all">All Categories</option>
                <option value="ready-to-move">Ready-to-Move</option>
                <option value="affordable">Affordable</option>
                <option value="mid-range">Mid-Range</option>
                <option value="luxury">Luxury</option>
              </select>
            </div>

            {/* Status */}
            <div className="col-span-2">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full py-2 px-3 text-xs border border-neutral-200 rounded-xl text-neutral-800 bg-neutral-50/50 focus:outline-none focus:border-[#F54900] cursor-pointer"
              >
                <option value="all">All Statuses</option>
                <option value="Ready to Move">Ready to Move</option>
                <option value="Under Construction">Under Construction</option>
                <option value="New Launch">New Launch</option>
              </select>
            </div>

            {/* Clear All */}
            <div className="col-span-1 text-right">
              {activeFiltersCount > 0 && (
                <button
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1 text-[11px] text-[#F54900] font-mono underline cursor-pointer"
                  title="Reset all filters"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Filter Drawer Modal */}
        {mobileFilterOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
            <div className="w-full max-w-sm bg-white h-full overflow-y-auto p-6 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                  <h3 className="font-bold text-base text-neutral-900">
                    Filter Properties
                  </h3>
                  <button
                    onClick={() => setMobileFilterOpen(false)}
                    className="p-1 text-neutral-500 hover:text-black cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="py-4 space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">
                      Search Query
                    </label>
                    <input
                      type="text"
                      placeholder="Keyword, sector..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-neutral-200 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">
                      City / Corridor
                    </label>
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-neutral-200 rounded-xl bg-white"
                    >
                      <option value="all">All Locations</option>
                      {CITIES_LIST.filter((c) => c.id !== 'all').map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">
                      Budget &amp; Category
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-neutral-200 rounded-xl bg-white"
                    >
                      <option value="all">All Categories</option>
                      <option value="ready-to-move">Ready-to-Move</option>
                      <option value="affordable">Affordable</option>
                      <option value="mid-range">Mid-Range</option>
                      <option value="luxury">Luxury</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200 flex gap-2">
                <button
                  onClick={handleResetFilters}
                  className="flex-1 py-2.5 border border-neutral-300 text-neutral-700 text-xs font-bold uppercase rounded-xl"
                >
                  Reset
                </button>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="flex-1 py-2.5 bg-[#F54900] text-white text-xs font-bold uppercase rounded-xl"
                >
                  Apply ({filteredProperties.length})
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Results Grid / List */}
        {filteredProperties.length === 0 ? (
          <div className="bg-white border border-[#F0D9CC] rounded-3xl p-12 text-center max-w-md mx-auto my-12 shadow-sm">
            <h3 className="font-bold text-lg text-neutral-900 mb-1">
              No matching properties found
            </h3>
            <p className="text-xs text-neutral-500 mb-6">
              Try widening your budget or clearing the location filters.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-2.5 bg-[#F54900] text-white text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                : 'flex flex-col gap-5'
            }
          >
            {filteredProperties.map((prop) => {
              const isWishlisted = wishlist.includes(prop.id);
              const isCompared = compareList.includes(prop.id);

              return (
                <div
                  key={prop.id}
                  onClick={() => onSelectProperty(prop)}
                  className="group bg-white rounded-3xl overflow-hidden border border-neutral-200/90 hover:border-[#F54900]/50 hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer relative"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                    <img
                      src={prop.images[0]}
                      alt={prop.name}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                      <span className="bg-[#0F172A]/85 backdrop-blur-md text-white text-[10px] font-mono uppercase px-2 py-0.5 rounded-full font-bold">
                        {prop.projectType}
                      </span>
                      {prop.isReraCompliant && (
                        <span className="bg-emerald-600/90 text-white text-[10px] font-mono uppercase px-2 py-0.5 rounded-full font-bold">
                          RERA
                        </span>
                      )}
                    </div>

                    {/* Compare & Wishlist Action Buttons */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleCompare(prop.id);
                        }}
                        className={`w-8 h-8 rounded-full flex items-center justify-center shadow transition-all cursor-pointer ${
                          isCompared
                            ? 'bg-[#F54900] text-white'
                            : 'bg-white/90 hover:bg-white text-neutral-700'
                        }`}
                        title="Compare property"
                      >
                        <Scale className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleWishlist(prop.id);
                        }}
                        className={`w-8 h-8 rounded-full flex items-center justify-center shadow transition-all cursor-pointer ${
                          isWishlisted
                            ? 'bg-rose-600 text-white'
                            : 'bg-white/90 hover:bg-white text-neutral-700'
                        }`}
                        title="Add to wishlist"
                      >
                        <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current' : ''}`} />
                      </button>
                    </div>

                    {/* Price Ribbon */}
                    <div className="absolute bottom-3 left-3 text-white">
                      <span className="text-base sm:text-lg font-bold text-[#FF9B54]">
                        {prop.priceFormatted}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-mono text-neutral-400 uppercase">
                        By {prop.developer}
                      </div>
                      <h3 className="font-bold text-base text-[#1E2430] group-hover:text-[#F54900] transition-colors leading-snug mt-0.5 line-clamp-1">
                        {prop.name}
                      </h3>
                      <p className="text-xs text-neutral-500 flex items-center gap-1 mt-1 truncate">
                        <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                        <span>{prop.location}, {prop.city}</span>
                      </p>

                      <div className="mt-3 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-600">
                        <span className="font-medium">{prop.areaSqFt}</span>
                        <span className="font-mono text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">
                          {prop.status}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                      <span className="text-neutral-400 text-[11px] font-mono">
                        RERA: {prop.reraNumber}
                      </span>
                      <span className="text-[#F54900] font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Floating Compare Bar if 2+ properties are marked */}
        {compareList.length > 0 && (
          <div className="fixed bottom-6 inset-x-4 sm:inset-x-auto sm:right-8 z-40 bg-[#0F172A] text-white p-4 rounded-2xl shadow-2xl flex items-center justify-between gap-6 border border-neutral-700 animate-in slide-in-from-bottom-4">
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#F54900]" />
              <span className="text-xs sm:text-sm font-bold">
                {compareList.length} {compareList.length === 1 ? 'Property' : 'Properties'} Selected
              </span>
            </div>
            <button
              onClick={onOpenCompareModal}
              className="px-4 py-2 bg-[#F54900] hover:bg-[#C7510B] text-white text-xs font-bold uppercase rounded-xl transition-colors cursor-pointer"
            >
              Compare Side-by-Side →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
