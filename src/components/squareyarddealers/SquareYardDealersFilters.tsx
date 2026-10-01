import React from 'react';
import {
  X,
  Filter,
  Check,
  RotateCcw,
  SlidersHorizontal,
  Building,
  IndianRupee,
  ShieldCheck
} from 'lucide-react';
import { POPULAR_CITIES } from '../../data/squareYardDealersData';

export interface PropertyFilterState {
  searchQuery: string;
  city: string;
  locality: string;
  listingType: 'all' | 'buy' | 'rent';
  propertyCategory: 'all' | 'residential' | 'commercial' | 'land';
  propertyTypes: string[];
  bhk: number[];
  minPrice: number;
  maxPrice: number;
  minArea: number;
  maxArea: number;
  furnishing: string[];
  possessionStatus: string[];
  postedBy: string[];
  verifiedOnly: boolean;
  sortBy: 'relevance' | 'newest' | 'price_asc' | 'price_desc';
}

interface FilterProps {
  filters: PropertyFilterState;
  onUpdateFilters: (newFilters: Partial<PropertyFilterState>) => void;
  onResetFilters: () => void;
  isMobileDrawer?: boolean;
  onCloseMobileDrawer?: () => void;
  totalResultsCount?: number;
}

const PROPERTY_TYPE_OPTIONS = [
  'Apartment',
  'Builder Floor',
  'Villa',
  'Independent House',
  'Penthouse',
  'Plot',
  'Office Space',
  'Shop',
  'Showroom',
  'Warehouse',
  'Co-working Space'
];

export const SquareYardDealersFilters: React.FC<FilterProps> = ({
  filters,
  onUpdateFilters,
  onResetFilters,
  isMobileDrawer = false,
  onCloseMobileDrawer,
  totalResultsCount
}) => {
  const toggleArrayItem = (list: string[], item: string): string[] => {
    return list.includes(item) ? list.filter((i) => i !== item) : [...list, item];
  };

  const toggleBhkItem = (bhkList: number[], num: number): number[] => {
    return bhkList.includes(num) ? bhkList.filter((b) => b !== num) : [...bhkList, num];
  };

  const content = (
    <div className="space-y-6 text-xs text-slate-700">
      {/* Listing Mode (Buy / Rent) */}
      <div>
        <label className="block text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-2">
          Listing Intent
        </label>
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-xl">
          {(['all', 'buy', 'rent'] as const).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => onUpdateFilters({ listingType: type })}
              className={`py-2 px-3 rounded-lg font-bold text-xs capitalize transition-all cursor-pointer ${
                filters.listingType === type
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {type === 'all' ? 'All Intent' : type}
            </button>
          ))}
        </div>
      </div>

      {/* Property Category */}
      <div>
        <label className="block text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-2">
          Category
        </label>
        <div className="grid grid-cols-3 gap-1.5">
          {(['residential', 'commercial', 'land'] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() =>
                onUpdateFilters({
                  propertyCategory: filters.propertyCategory === cat ? 'all' : cat
                })
              }
              className={`py-2 px-2.5 rounded-xl border text-center font-bold capitalize transition-all cursor-pointer ${
                filters.propertyCategory === cat
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* City Selector */}
      <div>
        <label className="block text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-2">
          Select City
        </label>
        <select
          value={filters.city}
          onChange={(e) => onUpdateFilters({ city: e.target.value })}
          className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl bg-white font-medium focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
        >
          <option value="All Cities">All Metro Hubs (India)</option>
          {POPULAR_CITIES.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {/* BHK Selector */}
      <div>
        <label className="block text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-2">
          Bedrooms (BHK)
        </label>
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5].map((bhkNum) => {
            const isSelected = filters.bhk.includes(bhkNum);
            return (
              <button
                key={bhkNum}
                type="button"
                onClick={() => onUpdateFilters({ bhk: toggleBhkItem(filters.bhk, bhkNum) })}
                className={`w-11 h-9 rounded-xl font-extrabold text-xs transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                }`}
              >
                {bhkNum === 5 ? '5+' : `${bhkNum}`}
              </button>
            );
          })}
        </div>
      </div>

      {/* Budget Range Selector */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">
            Budget Max: ₹{(filters.maxPrice / 100000).toFixed(0)} Lakh
          </label>
          <span className="text-[10px] text-slate-400">
            {filters.maxPrice >= 10000000 ? `₹${(filters.maxPrice / 10000000).toFixed(2)} Cr` : ''}
          </span>
        </div>
        <input
          type="range"
          min={500000}
          max={100000000}
          step={500000}
          value={filters.maxPrice}
          onChange={(e) => onUpdateFilters({ maxPrice: Number(e.target.value) })}
          className="w-full h-1.5 rounded-lg cursor-pointer accent-blue-600"
        />
        <div className="flex justify-between text-[10px] text-slate-400 mt-1">
          <span>₹5L</span>
          <span>₹1 Cr</span>
          <span>₹10 Cr+</span>
        </div>
      </div>

      {/* Property Types Multiple Selection */}
      <div>
        <label className="block text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-2">
          Property Type
        </label>
        <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
          {PROPERTY_TYPE_OPTIONS.map((pt) => {
            const checked = filters.propertyTypes.includes(pt);
            return (
              <label
                key={pt}
                className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-slate-50 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() =>
                    onUpdateFilters({
                      propertyTypes: toggleArrayItem(filters.propertyTypes, pt)
                    })
                  }
                  className="rounded text-blue-600 focus:ring-blue-500 w-3.5 h-3.5"
                />
                <span className="text-xs text-slate-700">{pt}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Possession Status */}
      <div>
        <label className="block text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-2">
          Possession Status
        </label>
        <div className="space-y-1.5">
          {['Ready To Move', 'Under Construction', 'Immediate'].map((status) => {
            const checked = filters.possessionStatus.includes(status);
            return (
              <label key={status} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() =>
                    onUpdateFilters({
                      possessionStatus: toggleArrayItem(filters.possessionStatus, status)
                    })
                  }
                  className="rounded text-blue-600 focus:ring-blue-500 w-3.5 h-3.5"
                />
                <span>{status}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Furnishing */}
      <div>
        <label className="block text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-2">
          Furnishing
        </label>
        <div className="flex flex-wrap gap-1.5">
          {['Furnished', 'Semi-Furnished', 'Unfurnished'].map((f) => {
            const isSelected = filters.furnishing.includes(f);
            return (
              <button
                key={f}
                type="button"
                onClick={() =>
                  onUpdateFilters({
                    furnishing: toggleArrayItem(filters.furnishing, f)
                  })
                }
                className={`py-1.5 px-3 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-50 text-blue-700 border-blue-400 font-bold'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>
      </div>

      {/* Posted By */}
      <div>
        <label className="block text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-2">
          Posted By
        </label>
        <div className="flex flex-wrap gap-1.5">
          {['Owner', 'Property Dealer', 'Builder'].map((poster) => {
            const isSelected = filters.postedBy.includes(poster);
            return (
              <button
                key={poster}
                type="button"
                onClick={() =>
                  onUpdateFilters({
                    postedBy: toggleArrayItem(filters.postedBy, poster)
                  })
                }
                className={`py-1.5 px-3 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                }`}
              >
                {poster}
              </button>
            );
          })}
        </div>
      </div>

      {/* Verified Only Toggle */}
      <div className="pt-2 border-t border-slate-200">
        <label className="flex items-center justify-between cursor-pointer p-2 rounded-xl bg-emerald-50/70 border border-emerald-200">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="font-bold text-xs text-emerald-950">Verified Properties Only</span>
          </div>
          <input
            type="checkbox"
            checked={filters.verifiedOnly}
            onChange={(e) => onUpdateFilters({ verifiedOnly: e.target.checked })}
            className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
          />
        </label>
      </div>

      {/* Reset Button */}
      <div className="pt-2">
        <button
          type="button"
          onClick={onResetFilters}
          className="w-full py-2.5 px-4 rounded-xl border border-slate-300 text-slate-600 hover:bg-slate-100 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset All Filters</span>
        </button>
      </div>
    </div>
  );

  // If Mobile Drawer
  if (isMobileDrawer) {
    return (
      <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
        <div className="bg-white rounded-t-3xl sm:rounded-3xl max-w-lg w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4">
          <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-slate-900" />
              <h3 className="font-bold text-sm text-slate-900">Filter Properties</h3>
              {totalResultsCount !== undefined && (
                <span className="text-xs text-slate-500 font-normal">
                  ({totalResultsCount} found)
                </span>
              )}
            </div>
            <button
              onClick={onCloseMobileDrawer}
              className="p-1.5 rounded-full hover:bg-slate-200 text-slate-500 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-5 overflow-y-auto flex-1">{content}</div>

          <div className="p-4 border-t border-slate-200 flex items-center gap-3 bg-white">
            <button
              type="button"
              onClick={onResetFilters}
              className="flex-1 py-3 rounded-full border border-slate-300 font-bold text-xs text-slate-700"
            >
              Clear All
            </button>
            <button
              type="button"
              onClick={onCloseMobileDrawer}
              className="flex-1 py-3 rounded-full bg-blue-600 text-white font-extrabold text-xs uppercase tracking-wider"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Desktop Sidebar Panel
  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm sticky top-24">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-blue-600" />
          <h3 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider">
            Filters
          </h3>
        </div>
        <button
          type="button"
          onClick={onResetFilters}
          className="text-[11px] text-blue-600 hover:underline font-bold"
        >
          Clear
        </button>
      </div>

      {content}
    </div>
  );
};
