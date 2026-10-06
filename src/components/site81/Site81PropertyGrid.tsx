import React, { useState, useMemo } from 'react';
import {
  Grid,
  List,
  SlidersHorizontal,
  X,
  RotateCcw,
  Search,
  ChevronDown,
  ArrowUpDown,
  Filter,
  Check
} from 'lucide-react';
import { PropertyListing, LUXURY_PROPERTIES } from '../../data/site81Data';
import { Site81PropertyCard, formatCurrencyPrice } from './Site81PropertyCard';

interface Site81PropertyGridProps {
  initialSearchQuery?: string;
  initialListingType?: 'sale' | 'rent' | 'new_development';
  initialPropertyType?: string;
  initialMaxPriceUsd?: number;
  currency: string;
  unit: 'sqft' | 'sqm';
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onSelectProperty: (property: PropertyListing) => void;
}

export const Site81PropertyGrid: React.FC<Site81PropertyGridProps> = ({
  initialSearchQuery = '',
  initialListingType = 'sale',
  initialPropertyType = '',
  initialMaxPriceUsd,
  currency,
  unit,
  favorites,
  onToggleFavorite,
  onSelectProperty
}) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filters State
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [listingType, setListingType] = useState<'all' | 'sale' | 'rent' | 'new_development'>(initialListingType);
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [selectedPropertyType, setSelectedPropertyType] = useState<string>(initialPropertyType || 'all');
  const [minPriceUsd, setMinPriceUsd] = useState<number | ''>('');
  const [maxPriceUsd, setMaxPriceUsd] = useState<number | ''>(initialMaxPriceUsd || '');
  const [minBedrooms, setMinBedrooms] = useState<number | 'any'>('any');
  const [minBathrooms, setMinBathrooms] = useState<number | 'any'>('any');
  const [onlyWaterfront, setOnlyWaterfront] = useState(false);
  const [onlyVideo, setOnlyVideo] = useState(false);
  const [onlyDeveloper, setOnlyDeveloper] = useState(false);
  const [onlyFeatured, setOnlyFeatured] = useState(false);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'beds-desc' | 'size-desc'>('featured');

  // Countries List for Filter
  const countries = useMemo(() => {
    const set = new Set<string>();
    LUXURY_PROPERTIES.forEach((p) => set.add(p.country));
    return ['all', ...Array.from(set).sort()];
  }, []);

  // Filtered Properties Computation
  const filteredProperties = useMemo(() => {
    return LUXURY_PROPERTIES.filter((p) => {
      // Query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesQuery =
          p.title.toLowerCase().includes(q) ||
          p.city.toLowerCase().includes(q) ||
          p.country.toLowerCase().includes(q) ||
          p.region.toLowerCase().includes(q) ||
          p.propertyType.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q);
        if (!matchesQuery) return false;
      }

      // Listing Type
      if (listingType !== 'all' && p.listingType !== listingType) {
        return false;
      }

      // Country
      if (selectedCountry !== 'all' && p.country !== selectedCountry) {
        return false;
      }

      // Property Type
      if (selectedPropertyType !== 'all' && p.propertyType !== selectedPropertyType) {
        return false;
      }

      // Min & Max Price
      if (typeof minPriceUsd === 'number' && p.priceUsd < minPriceUsd) {
        return false;
      }
      if (typeof maxPriceUsd === 'number' && p.priceUsd > maxPriceUsd) {
        return false;
      }

      // Bedrooms
      if (minBedrooms !== 'any' && p.bedrooms < minBedrooms) {
        return false;
      }

      // Bathrooms
      if (minBathrooms !== 'any' && p.bathrooms < minBathrooms) {
        return false;
      }

      // Badges / Flags
      if (onlyWaterfront && !p.propertyType.includes('Waterfront') && !p.features.some((f) => f.toLowerCase().includes('waterfront') || f.toLowerCase().includes('beach') || f.toLowerCase().includes('lake'))) {
        return false;
      }
      if (onlyVideo && !p.hasVideo) {
        return false;
      }
      if (onlyDeveloper && !p.isDirectFromDeveloper) {
        return false;
      }
      if (onlyFeatured && !p.isFeatured) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceUsd - b.priceUsd;
      if (sortBy === 'price-desc') return b.priceUsd - a.priceUsd;
      if (sortBy === 'beds-desc') return b.bedrooms - a.bedrooms;
      if (sortBy === 'size-desc') return b.interiorSizeSqFt - a.interiorSizeSqFt;
      // Default: featured first, then price desc
      if (a.isFeatured !== b.isFeatured) return a.isFeatured ? -1 : 1;
      return b.priceUsd - a.priceUsd;
    });
  }, [
    searchQuery,
    listingType,
    selectedCountry,
    selectedPropertyType,
    minPriceUsd,
    maxPriceUsd,
    minBedrooms,
    minBathrooms,
    onlyWaterfront,
    onlyVideo,
    onlyDeveloper,
    onlyFeatured,
    sortBy
  ]);

  const activeFiltersCount = [
    searchQuery.trim() !== '',
    listingType !== 'all',
    selectedCountry !== 'all',
    selectedPropertyType !== 'all',
    minPriceUsd !== '',
    maxPriceUsd !== '',
    minBedrooms !== 'any',
    minBathrooms !== 'any',
    onlyWaterfront,
    onlyVideo,
    onlyDeveloper,
    onlyFeatured
  ].filter(Boolean).length;

  const handleResetFilters = () => {
    setSearchQuery('');
    setListingType('all');
    setSelectedCountry('all');
    setSelectedPropertyType('all');
    setMinPriceUsd('');
    setMaxPriceUsd('');
    setMinBedrooms('any');
    setMinBathrooms('any');
    setOnlyWaterfront(false);
    setOnlyVideo(false);
    setOnlyDeveloper(false);
    setOnlyFeatured(false);
    setSortBy('featured');
  };

  return (
    <div className="bg-neutral-50/50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Section Title */}
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono tracking-wider uppercase mb-1">
              <span>Valtierra Marketplace</span>
              <span>/</span>
              <span className="text-neutral-900 font-semibold">Luxury Real Estate</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-serif text-neutral-950 font-normal">
              Prime International Properties
            </h1>
            <p className="text-sm text-neutral-500 mt-1">
              Showing <span className="font-semibold text-neutral-900">{filteredProperties.length}</span> curated estates &amp; residences
            </p>
          </div>

          {/* Desktop View Switcher & Mobile Filter Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-3.5 py-2 rounded border border-neutral-300 bg-white text-xs font-semibold text-neutral-800 shadow-sm cursor-pointer"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}</span>
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-xs text-neutral-500 font-mono uppercase tracking-wider">
                Sort:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="py-1.5 px-3 bg-white border border-neutral-200 rounded text-xs font-medium text-neutral-800 focus:outline-none focus:border-neutral-900 cursor-pointer shadow-sm"
              >
                <option value="featured">Featured First</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="beds-desc">Bedrooms: Most First</option>
                <option value="size-desc">Size: Largest Area</option>
              </select>
            </div>

            {/* Grid / List Mode */}
            <div className="hidden sm:flex items-center border border-neutral-200 rounded bg-white p-0.5 shadow-sm">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded transition-colors cursor-pointer ${
                  viewMode === 'grid' ? 'bg-neutral-900 text-white' : 'text-neutral-500 hover:text-black'
                }`}
                title="Grid view"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded transition-colors cursor-pointer ${
                  viewMode === 'list' ? 'bg-neutral-900 text-white' : 'text-neutral-500 hover:text-black'
                }`}
                title="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Filter Bar */}
        <div className="hidden lg:block bg-white border border-neutral-200 rounded-lg p-4 mb-8 shadow-sm">
          {/* Row 1: Search, Country, Property Type, Listing Type, Price Range */}
          <div className="grid grid-cols-12 gap-3 items-center">
            {/* Search Input */}
            <div className="col-span-3 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search city, estate name, features..."
                className="w-full pl-9 pr-3 py-2 text-xs border border-neutral-200 rounded text-neutral-900 focus:outline-none focus:border-neutral-900 bg-neutral-50/50"
              />
            </div>

            {/* Country Selector */}
            <div className="col-span-2">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full py-2 px-3 text-xs border border-neutral-200 rounded text-neutral-800 bg-neutral-50/50 focus:outline-none focus:border-neutral-900 cursor-pointer"
              >
                <option value="all">All Countries</option>
                {countries.filter((c) => c !== 'all').map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Property Type */}
            <div className="col-span-2">
              <select
                value={selectedPropertyType}
                onChange={(e) => setSelectedPropertyType(e.target.value)}
                className="w-full py-2 px-3 text-xs border border-neutral-200 rounded text-neutral-800 bg-neutral-50/50 focus:outline-none focus:border-neutral-900 cursor-pointer"
              >
                <option value="all">All Property Types</option>
                <option value="Modernist Mansion">Modernist Mansion</option>
                <option value="Waterfront Estate">Waterfront Estate</option>
                <option value="Penthouse">Penthouse</option>
                <option value="Villa">Luxury Villa</option>
                <option value="Château">Château &amp; Historic</option>
                <option value="Alpine Chalet">Alpine Chalet</option>
                <option value="Private Island">Private Island</option>
              </select>
            </div>

            {/* Buy / Rent / New Dev */}
            <div className="col-span-2">
              <select
                value={listingType}
                onChange={(e) => setListingType(e.target.value as any)}
                className="w-full py-2 px-3 text-xs border border-neutral-200 rounded text-neutral-800 bg-neutral-50/50 focus:outline-none focus:border-neutral-900 cursor-pointer"
              >
                <option value="all">Buy &amp; Rent</option>
                <option value="sale">For Sale</option>
                <option value="rent">For Rent</option>
                <option value="new_development">New Developments</option>
              </select>
            </div>

            {/* Bedrooms */}
            <div className="col-span-2">
              <select
                value={minBedrooms}
                onChange={(e) => setMinBedrooms(e.target.value === 'any' ? 'any' : Number(e.target.value))}
                className="w-full py-2 px-3 text-xs border border-neutral-200 rounded text-neutral-800 bg-neutral-50/50 focus:outline-none focus:border-neutral-900 cursor-pointer"
              >
                <option value="any">Beds: Any</option>
                <option value="3">3+ Beds</option>
                <option value="4">4+ Beds</option>
                <option value="5">5+ Beds</option>
                <option value="6">6+ Beds</option>
                <option value="8">8+ Beds</option>
              </select>
            </div>

            {/* Clear All Button */}
            <div className="col-span-1 text-right">
              {activeFiltersCount > 0 && (
                <button
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1 text-[11px] text-amber-700 hover:text-amber-900 font-mono underline cursor-pointer"
                  title="Reset all filters"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Row 2: Secondary Quick Filter Toggles */}
          <div className="mt-3 pt-3 border-t border-neutral-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono uppercase text-neutral-400">Amenities &amp; Features:</span>
              <button
                type="button"
                onClick={() => setOnlyWaterfront(!onlyWaterfront)}
                className={`px-2.5 py-1 text-xs rounded border transition-colors cursor-pointer ${
                  onlyWaterfront ? 'bg-neutral-900 text-white border-neutral-900' : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-300'
                }`}
              >
                Waterfront
              </button>
              <button
                type="button"
                onClick={() => setOnlyVideo(!onlyVideo)}
                className={`px-2.5 py-1 text-xs rounded border transition-colors cursor-pointer ${
                  onlyVideo ? 'bg-neutral-900 text-white border-neutral-900' : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-300'
                }`}
              >
                Video Available
              </button>
              <button
                type="button"
                onClick={() => setOnlyDeveloper(!onlyDeveloper)}
                className={`px-2.5 py-1 text-xs rounded border transition-colors cursor-pointer ${
                  onlyDeveloper ? 'bg-neutral-900 text-white border-neutral-900' : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-300'
                }`}
              >
                Direct from Developer
              </button>
              <button
                type="button"
                onClick={() => setOnlyFeatured(!onlyFeatured)}
                className={`px-2.5 py-1 text-xs rounded border transition-colors cursor-pointer ${
                  onlyFeatured ? 'bg-neutral-900 text-white border-neutral-900' : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-300'
                }`}
              >
                Featured Portfolios
              </button>
            </div>

            <div className="text-[11px] text-neutral-400 font-mono">
              Prices displayed in {currency}
            </div>
          </div>
        </div>

        {/* Mobile Filter Drawer Modal */}
        {mobileFilterOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
            <div className="w-full max-w-md bg-white h-full overflow-y-auto p-6 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                  <h3 className="font-serif text-lg font-bold text-neutral-900">
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
                  {/* Search text */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">
                      Search Query
                    </label>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Keyword, location..."
                      className="w-full px-3 py-2 text-sm border border-neutral-300 rounded"
                    />
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">
                      Country
                    </label>
                    <select
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-neutral-300 rounded bg-white"
                    >
                      <option value="all">All Countries</option>
                      {countries.filter((c) => c !== 'all').map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Property Type */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">
                      Property Type
                    </label>
                    <select
                      value={selectedPropertyType}
                      onChange={(e) => setSelectedPropertyType(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-neutral-300 rounded bg-white"
                    >
                      <option value="all">All Property Types</option>
                      <option value="Modernist Mansion">Modernist Mansion</option>
                      <option value="Waterfront Estate">Waterfront Estate</option>
                      <option value="Penthouse">Penthouse</option>
                      <option value="Villa">Villa</option>
                      <option value="Château">Château</option>
                      <option value="Alpine Chalet">Alpine Chalet</option>
                      <option value="Private Island">Private Island</option>
                    </select>
                  </div>

                  {/* Listing Type */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">
                      Listing Status
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['all', 'sale', 'rent'].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setListingType(t as any)}
                          className={`py-1.5 text-xs font-medium rounded border uppercase ${
                            listingType === t ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-700'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Bedrooms */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">
                      Bedrooms
                    </label>
                    <select
                      value={minBedrooms}
                      onChange={(e) => setMinBedrooms(e.target.value === 'any' ? 'any' : Number(e.target.value))}
                      className="w-full px-3 py-2 text-sm border border-neutral-300 rounded bg-white"
                    >
                      <option value="any">Any Bedrooms</option>
                      <option value="3">3+ Bedrooms</option>
                      <option value="4">4+ Bedrooms</option>
                      <option value="5">5+ Bedrooms</option>
                      <option value="6">6+ Bedrooms</option>
                    </select>
                  </div>

                  {/* Checkbox toggles */}
                  <div className="pt-2 space-y-2">
                    <label className="flex items-center gap-2 text-sm text-neutral-800 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={onlyWaterfront}
                        onChange={(e) => setOnlyWaterfront(e.target.checked)}
                        className="rounded border-neutral-300"
                      />
                      <span>Waterfront / Beachfront</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm text-neutral-800 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={onlyVideo}
                        onChange={(e) => setOnlyVideo(e.target.checked)}
                        className="rounded border-neutral-300"
                      />
                      <span>Video Tour Available</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm text-neutral-800 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={onlyDeveloper}
                        onChange={(e) => setOnlyDeveloper(e.target.checked)}
                        className="rounded border-neutral-300"
                      />
                      <span>Direct from Developer</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm text-neutral-800 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={onlyFeatured}
                        onChange={(e) => setOnlyFeatured(e.target.checked)}
                        className="rounded border-neutral-300"
                      />
                      <span>Featured Only</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200 flex gap-2">
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="flex-1 py-2.5 border border-neutral-300 text-neutral-700 text-xs font-semibold uppercase tracking-wider rounded"
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={() => setMobileFilterOpen(false)}
                  className="flex-1 py-2.5 bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider rounded"
                >
                  Apply ({filteredProperties.length})
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Empty State or Results */}
        {filteredProperties.length === 0 ? (
          <div className="bg-white border border-neutral-200 rounded-lg p-12 text-center max-w-lg mx-auto my-12 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-neutral-900 mb-2">
              No matching luxury residences found
            </h3>
            <p className="text-sm text-neutral-500 mb-6">
              Try adjusting your search criteria, widening the price parameters, or resetting filters.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-5 py-2.5 bg-neutral-950 text-white text-xs uppercase font-semibold tracking-wider rounded hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'
                : 'flex flex-col gap-6'
            }
          >
            {filteredProperties.map((property) => (
              <Site81PropertyCard
                key={property.id}
                property={property}
                currency={currency}
                unit={unit}
                isFavorite={favorites.includes(property.id)}
                onToggleFavorite={onToggleFavorite}
                onSelectProperty={onSelectProperty}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
