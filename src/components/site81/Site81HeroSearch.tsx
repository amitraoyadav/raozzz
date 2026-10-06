import React, { useState } from 'react';
import { Search, MapPin, Home, DollarSign, SlidersHorizontal, ArrowRight, Sparkles } from 'lucide-react';
import { site81Config } from '../../config/site81Config';

interface Site81HeroSearchProps {
  onSearch: (filters: {
    query: string;
    listingType: 'sale' | 'rent' | 'new_development';
    propertyType: string;
    maxPriceUsd?: number;
    destination?: string;
  }) => void;
  onExploreAll: () => void;
  currency: string;
}

export const Site81HeroSearch: React.FC<Site81HeroSearchProps> = ({
  onSearch,
  onExploreAll,
  currency
}) => {
  const [listingType, setListingType] = useState<'sale' | 'rent' | 'new_development'>('sale');
  const [query, setQuery] = useState('');
  const [propertyType, setPropertyType] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const popularDestinations = [
    'Los Angeles',
    'Saint-Tropez',
    'Lake Como',
    'Dubai Palm',
    'London Mayfair',
    'Paris 8th',
    'Mallorca',
    'Zermatt'
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let maxPriceUsd: number | undefined;
    if (priceRange === 'under-10m') maxPriceUsd = 10000000;
    else if (priceRange === '10m-25m') maxPriceUsd = 25000000;
    else if (priceRange === '25m-50m') maxPriceUsd = 50000000;
    else if (priceRange === '50m-plus') maxPriceUsd = 200000000;

    onSearch({
      query,
      listingType,
      propertyType: propertyType === 'all' ? '' : propertyType,
      maxPriceUsd
    });
  };

  const handleDestinationClick = (dest: string) => {
    setQuery(dest);
    onSearch({
      query: dest,
      listingType,
      propertyType: propertyType === 'all' ? '' : propertyType
    });
  };

  return (
    <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center bg-neutral-900 text-white overflow-hidden">
      {/* Background Editorial Image with subtle dark gradient overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Architecture Promontory Villa"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/60 to-neutral-950/40" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        {/* Subtle Luxury Pre-title */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/40 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-[0.2em] text-neutral-300 uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>Curated Super-Prime Portfolios</span>
        </div>

        {/* Main Serif Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-white tracking-tight leading-[1.15] max-w-4xl mx-auto drop-shadow-sm">
          Discover Exceptional Estates &amp; Architectural Sanctuaries
        </h1>

        <p className="mt-4 text-sm sm:text-base text-neutral-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow">
          Connecting discerning high-net-worth buyers with the most prestigious residences, private islands, and châteaux across 120+ sovereign jurisdictions.
        </p>

        {/* Search Box Card with Tabs */}
        <div className="mt-8 sm:mt-10 max-w-4xl mx-auto bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl p-4 sm:p-5 text-neutral-900 text-left border border-white/20">
          {/* Segmented Buy / Rent / New Developments Tabs */}
          <div className="flex items-center gap-1 border-b border-neutral-200 pb-3 mb-4">
            <button
              type="button"
              onClick={() => setListingType('sale')}
              className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded transition-all cursor-pointer ${
                listingType === 'sale'
                  ? 'bg-neutral-900 text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
              }`}
            >
              Buy
            </button>
            <button
              type="button"
              onClick={() => setListingType('rent')}
              className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded transition-all cursor-pointer ${
                listingType === 'rent'
                  ? 'bg-neutral-900 text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
              }`}
            >
              Rent
            </button>
            <button
              type="button"
              onClick={() => setListingType('new_development')}
              className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded transition-all cursor-pointer ${
                listingType === 'new_development'
                  ? 'bg-neutral-900 text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
              }`}
            >
              New Developments
            </button>
          </div>

          {/* Search Inputs Grid */}
          <form onSubmit={handleFormSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
            {/* Input 1: Location & Keywords */}
            <div className="lg:col-span-4 relative">
              <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                Location or Keyword
              </label>
              <div className="relative flex items-center">
                <MapPin className="absolute left-3 w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="City, Country, or Region (e.g. Bel-Air, Como)"
                  className="w-full pl-9 pr-3 py-2.5 text-sm bg-neutral-50 hover:bg-neutral-100/70 focus:bg-white border border-neutral-200 rounded text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                />
              </div>
            </div>

            {/* Input 2: Property Type */}
            <div className="lg:col-span-3 relative">
              <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                Property Type
              </label>
              <div className="relative flex items-center">
                <Home className="absolute left-3 w-4 h-4 text-neutral-400" />
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-sm bg-neutral-50 hover:bg-neutral-100/70 focus:bg-white border border-neutral-200 rounded text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors appearance-none cursor-pointer"
                >
                  <option value="all">All Property Types</option>
                  <option value="Villa">Villas &amp; Mansions</option>
                  <option value="Penthouse">Penthouses &amp; Sky Duplexes</option>
                  <option value="Waterfront Estate">Waterfront Estates</option>
                  <option value="Modernist Mansion">Modernist Architecture</option>
                  <option value="Château">Châteaux &amp; Historic</option>
                  <option value="Alpine Chalet">Alpine Chalets</option>
                  <option value="Private Island">Private Islands</option>
                </select>
              </div>
            </div>

            {/* Input 3: Price Range */}
            <div className="lg:col-span-3 relative">
              <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                Price Range ({currency})
              </label>
              <div className="relative flex items-center">
                <DollarSign className="absolute left-3 w-4 h-4 text-neutral-400" />
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-sm bg-neutral-50 hover:bg-neutral-100/70 focus:bg-white border border-neutral-200 rounded text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors appearance-none cursor-pointer"
                >
                  <option value="all">Any Price</option>
                  <option value="under-10m">Under $10,000,000</option>
                  <option value="10m-25m">$10M – $25,000,000</option>
                  <option value="25m-50m">$25M – $50,000,000</option>
                  <option value="50m-plus">$50,000,000+</option>
                </select>
              </div>
            </div>

            {/* Input 4: Search Button */}
            <div className="lg:col-span-2 pt-1 sm:pt-4">
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold tracking-wider uppercase rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
            </div>
          </form>

          {/* Quick Trending Searches */}
          <div className="mt-4 pt-3 border-t border-neutral-100 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-neutral-400 text-[11px] font-mono uppercase tracking-wider mr-1">Trending:</span>
            {popularDestinations.map((dest) => (
              <button
                key={dest}
                type="button"
                onClick={() => handleDestinationClick(dest)}
                className="px-2.5 py-0.5 rounded text-neutral-700 bg-neutral-100 hover:bg-neutral-200 hover:text-black transition-colors cursor-pointer text-xs"
              >
                {dest}
              </button>
            ))}
          </div>
        </div>

        {/* View All Properties Direct CTA */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            onClick={onExploreAll}
            className="group inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-white/90 hover:text-amber-400 transition-colors cursor-pointer"
          >
            <span>Explore All 18 Curated Super-Prime Properties</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
