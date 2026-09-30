import React, { useState, useMemo } from 'react';
import { Search, Filter, Clock, Star, ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { BrioTourPackage } from '../data/types';

interface BrioListingPageProps {
  title: string;
  subtitle: string;
  packages: BrioTourPackage[];
  categoryType: 'domestic' | 'international';
  onSelectPackage: (pkg: BrioTourPackage) => void;
  onOpenBookingModal: (tourTitle: string) => void;
}

export const BrioListingPage: React.FC<BrioListingPageProps> = ({
  title,
  subtitle,
  packages,
  categoryType,
  onSelectPackage,
  onOpenBookingModal
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const filteredPackages = useMemo(() => {
    return packages
      .filter(pkg => {
        const matchesSearch =
          pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          pkg.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          pkg.overview.toLowerCase().includes(searchQuery.toLowerCase());

        let matchesDuration = true;
        if (selectedDuration === 'short') matchesDuration = pkg.days <= 3;
        else if (selectedDuration === 'medium') matchesDuration = pkg.days >= 4 && pkg.days <= 6;
        else if (selectedDuration === 'long') matchesDuration = pkg.days >= 7;

        return matchesSearch && matchesDuration;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.startingPrice - b.startingPrice;
        if (sortBy === 'price-desc') return b.startingPrice - a.startingPrice;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0;
      });
  }, [packages, searchQuery, selectedDuration, sortBy]);

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Banner */}
        <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 text-white rounded-3xl p-8 sm:p-12 mb-10 shadow-xl border border-teal-800/40 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3 border border-teal-400/30">
              {categoryType === 'domestic' ? 'India Exploration Catalog' : 'Global Destinations Catalog'}
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold font-['Poppins'] tracking-tight mb-3">
              {title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 font-['Inter'] leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={`Search ${packages.length} tour packages (e.g. Kashmir, Agra, Dubai)...`}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 outline-none focus:border-teal-500 bg-slate-50/50"
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Duration filter */}
            <select
              value={selectedDuration}
              onChange={e => setSelectedDuration(e.target.value)}
              className="px-3 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-700 bg-white font-medium outline-none"
            >
              <option value="all">All Durations</option>
              <option value="short">Short Getaways (1 - 3 Days)</option>
              <option value="medium">Standard Vacations (4 - 6 Days)</option>
              <option value="long">Extended Expeditions (7+ Days)</option>
            </select>

            {/* Sort by */}
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className="px-3 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-700 bg-white font-medium outline-none"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6 font-medium">
          <div>
            Showing <strong className="text-slate-800">{filteredPackages.length}</strong> of{' '}
            <strong>{packages.length}</strong> packages
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-teal-600 hover:underline cursor-pointer"
            >
              Clear Search
            </button>
          )}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.map(pkg => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5"
            >
              <div>
                {/* Image Cover */}
                <div
                  onClick={() => onSelectPackage(pkg)}
                  className="relative h-48 overflow-hidden cursor-pointer"
                >
                  <img
                    src={pkg.coverImage}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold text-white uppercase tracking-wider bg-teal-700/90">
                      {pkg.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-white/95 text-slate-900 flex items-center gap-1 shadow-xs">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                      <span>{pkg.rating.toFixed(1)}</span>
                    </span>
                  </div>

                  {/* Duration Badge Bottom Left */}
                  <div className="absolute bottom-2.5 left-3 text-white text-xs font-semibold flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-teal-300" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 space-y-2">
                  <h3
                    onClick={() => onSelectPackage(pkg)}
                    className="font-bold text-base text-slate-900 group-hover:text-teal-600 transition-colors line-clamp-1 cursor-pointer font-['Poppins']"
                  >
                    {pkg.title}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {pkg.subtitle}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-1 text-xs text-slate-600">
                    <div className="font-semibold text-teal-800 text-[11px]">
                      Highlights:
                    </div>
                    <p className="text-[11px] text-slate-500 line-clamp-2">
                      {pkg.highlights.join(' • ')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer: Price & Actions */}
              <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2">
                <div>
                  <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                    Starting From
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg font-black text-teal-700 font-mono">
                      ₹{pkg.startingPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-slate-400 line-through font-mono">
                      ₹{pkg.originalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className="px-3.5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-colors cursor-pointer flex items-center gap-1 shadow-xs"
                  >
                    <span>View Itinerary</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => onOpenBookingModal(pkg.title)}
                    className="px-2.5 py-2 rounded-xl bg-orange-50 hover:bg-orange-500 hover:text-white text-orange-700 border border-orange-200 text-xs font-bold transition-colors cursor-pointer"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
