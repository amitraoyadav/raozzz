import React, { useState } from 'react';
import {
  Utensils,
  Scissors,
  Coffee,
  Gem,
  Dumbbell,
  Landmark,
  CreditCard,
  Building,
  ChevronDown,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import {
  MAIN_EIGHT_CATEGORIES,
  MainCategoryItem,
  RESTAURANT_URL,
  SALON_URL,
  CAFE_URL,
  JEWELLERY_URL,
  GYM_URL,
  SABKA_LOANS_URL,
  SABKA_FINANCE_URL,
  REAL_ESTATE_URL
} from '../../data/sabkaLoansData';
import { useApp } from '../../context/AppContext';

interface CategorySwitcherProps {
  variant?: 'topbar' | 'header-dropdown' | 'floating-card' | 'inline-bar';
  onSelectCategory?: (category: MainCategoryItem) => void;
}

export const SabkaLoansCategorySwitcher: React.FC<CategorySwitcherProps> = ({
  variant = 'topbar',
  onSelectCategory
}) => {
  const { setActiveView } = useApp();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedPlaceholder, setSelectedPlaceholder] = useState<MainCategoryItem | null>(null);

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
      case 'credit-card':
        return <CreditCard className="w-3.5 h-3.5" />;
      case 'building':
      default:
        return <Building className="w-3.5 h-3.5" />;
    }
  };

  const handleCategoryClick = (cat: MainCategoryItem) => {
    setDropdownOpen(false);
    if (onSelectCategory) {
      onSelectCategory(cat);
      return;
    }

    if (cat.id === 'sabka-loans') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (cat.id === 'sabka-finance') {
      setActiveView('sabka-finance');
      return;
    }

    if (cat.id === 'real-estate') {
      setActiveView('square-yard-dealers');
      return;
    }

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
    } else {
      setSelectedPlaceholder(cat);
    }
  };

  if (variant === 'topbar') {
    return (
      <div className="bg-[#0b1b36] text-slate-200 border-b border-blue-900/40 text-xs py-2 px-4 select-none">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Left badge indicator */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 font-semibold text-[11px]">
              <Sparkles className="w-3 h-3 text-blue-400" />
              <span>Multi-Industry Collection</span>
            </span>
            <span className="hidden md:inline text-blue-800">|</span>
            <span className="hidden md:inline text-blue-200/70 text-[11px]">
              Select Business Category:
            </span>
          </div>

          {/* EXACT 8 Business Categories Selector */}
          <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap overflow-x-auto py-0.5">
            {MAIN_EIGHT_CATEGORIES.map((cat, idx) => {
              const isSabkaLoans = cat.id === 'sabka-loans';
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat)}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                    isSabkaLoans
                      ? 'bg-amber-400 text-slate-950 font-black shadow-sm ring-1 ring-amber-300'
                      : 'bg-white/5 text-slate-200 hover:bg-white/15 hover:text-white border border-white/10'
                  }`}
                  title={`${cat.name}: ${cat.description}`}
                >
                  <span className={isSabkaLoans ? 'text-slate-950' : 'text-blue-300'}>
                    {getCategoryIcon(cat.iconName)}
                  </span>
                  <span className="tracking-wider uppercase text-[10px]">
                    {idx + 1}. {cat.displayName}
                  </span>
                  {isSabkaLoans && (
                    <span className="px-1.5 py-0.2 rounded text-[9px] bg-slate-900 text-amber-300 font-bold ml-1 uppercase">
                      Active
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
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
        <span>Categories (Sabka Loans Active)</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-[#0b1b36] text-white rounded-xl shadow-2xl border border-blue-700/50 py-2 z-50">
          <div className="px-3.5 py-1.5 border-b border-blue-800 text-[10px] font-bold text-blue-300 uppercase tracking-wider flex items-center justify-between">
            <span>8 Global Categories</span>
            <span className="text-amber-400">Sabka Loans Active</span>
          </div>
          {MAIN_EIGHT_CATEGORIES.map((cat, idx) => {
            const isSabkaLoans = cat.id === 'sabka-loans';
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat)}
                className={`w-full text-left px-3.5 py-2.5 text-xs flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer ${
                  isSabkaLoans ? 'bg-amber-400/20 text-amber-300 font-bold border-l-2 border-amber-400' : 'text-slate-200'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={isSabkaLoans ? 'text-amber-300' : 'text-blue-400'}>
                    {getCategoryIcon(cat.iconName)}
                  </span>
                  <div>
                    <span className="block text-white font-medium">
                      {idx + 1}. {cat.displayName}
                    </span>
                    <span className="text-[10px] text-blue-200/70 font-normal line-clamp-1">
                      {cat.description}
                    </span>
                  </div>
                </div>
                {isSabkaLoans ? (
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400 text-slate-950">
                    Current
                  </span>
                ) : (
                  <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
