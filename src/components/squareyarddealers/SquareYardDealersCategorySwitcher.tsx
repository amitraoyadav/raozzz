import React, { useState } from 'react';
import {
  Utensils,
  Scissors,
  Coffee,
  Gem,
  Dumbbell,
  Landmark,
  Building,
  ChevronDown,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import {
  GLOBAL_SEVEN_CATEGORIES,
  GlobalCategoryItem,
  RESTAURANT_URL,
  SALON_URL,
  CAFE_URL,
  JEWELLERY_URL,
  GYM_URL,
  LOANS_URL,
  REAL_ESTATE_URL
} from '../../data/squareYardDealersData';
import { useApp } from '../../context/AppContext';

interface CategorySwitcherProps {
  variant?: 'topbar' | 'header-dropdown' | 'floating-card' | 'inline-bar';
  onSelectCategory?: (category: GlobalCategoryItem) => void;
}

export const SquareYardDealersCategorySwitcher: React.FC<CategorySwitcherProps> = ({
  variant = 'topbar',
  onSelectCategory
}) => {
  const { setActiveView } = useApp();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedPlaceholder, setSelectedPlaceholder] = useState<GlobalCategoryItem | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'utensils':
        return <Utensils className="w-3.5 h-3.5" />;
      case 'scissors':
        return <Scissors className="w-3.5 h-3.5" />;
      case 'coffee':
        return <Coffee className="w-3.5 h-3.5" />;
      case 'gem':
        return <Gem className="w-3.5 h-3.5" />;
      case 'dumbbell':
        return <Dumbbell className="w-3.5 h-3.5" />;
      case 'landmark':
        return <Landmark className="w-3.5 h-3.5" />;
      case 'building':
      default:
        return <Building className="w-3.5 h-3.5" />;
    }
  };

  const handleCategoryClick = (cat: GlobalCategoryItem) => {
    setDropdownOpen(false);
    if (onSelectCategory) {
      onSelectCategory(cat);
      return;
    }

    if (cat.id === 'real-estate') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Direct routing to category sites if available in platform collection
    if (cat.id === 'restaurant') {
      setActiveView('site', 'al-baik');
    } else if (cat.id === 'salon') {
      setActiveView('site', 'bodycraft');
    } else if (cat.id === 'cafe') {
      setActiveView('site', 'brew-bloom');
    } else if (cat.id === 'jewellery') {
      setActiveView('site', 'hazoorilal-jewellers');
    } else if (cat.id === 'gym') {
      setActiveView('site', 'fitpass');
    } else if (cat.id === 'loans') {
      setActiveView('sabka-loans');
    } else {
      setSelectedPlaceholder(cat);
    }
  };

  if (variant === 'topbar') {
    return (
      <div className="bg-[#0b1329] text-slate-200 border-b border-white/10 text-xs py-2 px-4 select-none">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Left badge indicator */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 font-semibold text-[11px]">
              <Sparkles className="w-3 h-3 text-blue-400" />
              <span>Multi-Industry Collection</span>
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-400 text-[11px]">
              Select Business Category:
            </span>
          </div>

          {/* EXACTLY 7 Business Categories Selector */}
          <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap overflow-x-auto py-0.5">
            {GLOBAL_SEVEN_CATEGORIES.map((cat, idx) => {
              const isRealEstate = cat.id === 'real-estate';
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat)}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                    isRealEstate
                      ? 'bg-amber-400 text-slate-950 font-black shadow-sm ring-1 ring-amber-300'
                      : 'bg-white/5 text-slate-300 hover:bg-white/15 hover:text-white border border-white/10'
                  }`}
                  title={`${cat.name}: ${cat.description}`}
                >
                  <span className={isRealEstate ? 'text-slate-950' : 'text-blue-300'}>
                    {getCategoryIcon(cat.iconName)}
                  </span>
                  <span className="tracking-wider uppercase text-[10px]">
                    {idx + 1}. {cat.name}
                  </span>
                  {isRealEstate && (
                    <span className="px-1.5 py-0.2 rounded text-[9px] bg-slate-900 text-amber-300 font-bold ml-1 uppercase">
                      Active
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Modal when a non-real-estate category is clicked if necessary */}
        {selectedPlaceholder && (
          <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white text-slate-900 rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                {getCategoryIcon(selectedPlaceholder.iconName)}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {selectedPlaceholder.name} Category
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                {selectedPlaceholder.description}. This vertical is part of the 7 core business categories in our platform collection.
              </p>
              <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 text-xs text-slate-700 mb-5">
                <span className="font-semibold block text-slate-900 mb-1">Currently Active Website:</span>
                You are currently viewing <strong className="text-blue-600">Square Yard Dealers (Real Estate)</strong>.
              </div>
              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedPlaceholder(null)}
                  className="px-4 py-2 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  Stay on Square Yard Dealers
                </button>
                <button
                  onClick={() => {
                    const id = selectedPlaceholder.id;
                    setSelectedPlaceholder(null);
                    if (id === 'restaurant') setActiveView('site', 'al-baik');
                    if (id === 'salon') setActiveView('site', 'bodycraft');
                    if (id === 'cafe') setActiveView('site', 'brew-bloom');
                    if (id === 'jewellery') setActiveView('site', 'hazoorilal-jewellers');
                    if (id === 'gym') setActiveView('site', 'fitpass');
                    if (id === 'loans') setActiveView('sabka-loans');
                  }}
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>Explore {selectedPlaceholder.displayName}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Header Dropdown Variant
  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/20 bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
      >
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
        <span>Categories (Real Estate Active)</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-[#0b1329] text-white rounded-xl shadow-2xl border border-white/15 py-2 z-50">
          <div className="px-3.5 py-1.5 border-b border-white/10 text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
            <span>7 Global Categories</span>
            <span className="text-amber-400">Real Estate Active</span>
          </div>
          {GLOBAL_SEVEN_CATEGORIES.map((cat, idx) => {
            const isRealEstate = cat.id === 'real-estate';
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat)}
                className={`w-full text-left px-3.5 py-2.5 text-xs flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer ${
                  isRealEstate ? 'bg-amber-400/20 text-amber-300 font-bold border-l-2 border-amber-400' : 'text-slate-300'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={isRealEstate ? 'text-amber-300' : 'text-blue-400'}>
                    {getCategoryIcon(cat.iconName)}
                  </span>
                  <div>
                    <span className="block text-white font-medium">
                      {idx + 1}. {cat.displayName}
                    </span>
                    <span className="text-[10px] text-slate-400 font-normal line-clamp-1">
                      {cat.description}
                    </span>
                  </div>
                </div>
                {isRealEstate ? (
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400 text-slate-950">
                    Current
                  </span>
                ) : (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
