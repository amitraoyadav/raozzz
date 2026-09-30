import React, { useState, useMemo } from 'react';
import { MapPin, Star, Globe, ShieldCheck, Utensils, CheckCircle2, ArrowRight } from 'lucide-react';
import { VEENA_PACKAGES, VeenaPackage } from '../../../data/veenaWorldData';

interface VeenaWorldToursPageProps {
  onOpenDetail: (pkg: VeenaPackage) => void;
  onOpenBooking: (pkg: VeenaPackage) => void;
}

export const VeenaWorldToursPage: React.FC<VeenaWorldToursPageProps> = ({ onOpenDetail, onOpenBooking }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  const worldPackages = useMemo(() => {
    return VEENA_PACKAGES.filter(p => p.category === 'world');
  }, []);

  const regions = [
    { id: 'all', label: 'All World Tours' },
    { id: 'Europe', label: 'Europe & Switzerland' },
    { id: 'Middle East', label: 'Dubai & Middle East' },
    { id: 'South East Asia', label: 'Singapore, Malaysia & Thailand' },
    { id: 'Far East Asia', label: 'Japan Cherry Blossom' }
  ];

  const filtered = useMemo(() => {
    let list = worldPackages.filter(p => {
      if (selectedRegion !== 'all' && p.region !== selectedRegion) return false;
      return true;
    });

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.priceInr - b.priceInr);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.priceInr - a.priceInr);
    }
    return list;
  }, [worldPackages, selectedRegion, sortBy]);

  return (
    <div className="py-8 bg-slate-50 min-h-[600px]">
      {/* Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-gradient-to-r from-[#0F2C59] via-[#0A1D37] to-[#1E3A8A] text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-2">
            <span className="px-3 py-1 rounded-full bg-[#FDB813] text-[#0F2C59] text-[11px] font-black uppercase tracking-wider">
              International World Holidays
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-white">
              Explore the World with Family & Friends
            </h1>
            <p className="text-xs sm:text-sm text-slate-200">
              Escorted European tours, revolving cable cars on Mt Titlis, Dubai safaris, and bullet trains in Japan. Fully inclusive of flights, visas, Indian chef meals, and caring tour managers.
            </p>
          </div>
        </div>
      </div>

      {/* Region Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {regions.map(r => (
              <button
                key={r.id}
                onClick={() => setSelectedRegion(r.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedRegion === r.id
                    ? 'bg-[#0F2C59] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-600 font-semibold">
            <span>Sort By:</span>
            <select
              value={sortBy}
              onChange={(e: any) => setSortBy(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-xs font-bold text-slate-800"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(pkg => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-56 overflow-hidden bg-slate-200">
                <img
                  src={pkg.imageUrl}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-[#D32F2F] text-white font-extrabold text-[10px] uppercase">
                    {pkg.badge || 'World Tour'}
                  </span>
                  <span className="px-2 py-1 rounded-md bg-[#0F2C59]/90 text-white font-bold text-[10px]">
                    {pkg.tourCode}
                  </span>
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-white/95 text-[#0F2C59] font-black text-xs">
                  {pkg.durationDays}D / {pkg.durationNights}N
                </div>
                <div className="absolute bottom-2 left-3 right-3 text-white text-xs font-semibold truncate flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#FDB813] shrink-0" />
                  <span className="truncate">{pkg.route}</span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                    <span className="inline-flex items-center gap-1 font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      <span>{pkg.rating}</span>
                      <span className="text-slate-400 font-normal">({pkg.reviewsCount} reviews)</span>
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700">Visa Support Included</span>
                  </div>

                  <h3
                    onClick={() => onOpenDetail(pkg)}
                    className="font-black text-base text-[#0F2C59] hover:text-[#D32F2F] transition-colors cursor-pointer line-clamp-2"
                  >
                    {pkg.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {pkg.destinationSummary}
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5 text-[11px] text-slate-600 font-medium">
                    <span className="px-2 py-0.5 rounded bg-slate-100">✈️ Return Flights</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100">🏨 4★ Hotels</span>
                    <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-semibold">🍲 Indian Chef Meals</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100">🧭 Tour Manager</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block leading-none">All-Inclusive</span>
                    <span className="text-xl font-black text-[#0F2C59]">
                      ₹{pkg.priceInr.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] text-slate-500 block">
                      EMI from ₹{pkg.emiStartsFromInr.toLocaleString('en-IN')}/mo
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenDetail(pkg)}
                      className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
                    >
                      Itinerary
                    </button>
                    <button
                      onClick={() => onOpenBooking(pkg)}
                      className="px-4 py-2 rounded-xl bg-[#FDB813] hover:bg-yellow-400 text-[#0F2C59] text-xs font-black uppercase tracking-wider transition-all shadow-xs cursor-pointer"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
