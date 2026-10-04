import React, { useState } from 'react';
import {
  Search,
  SlidersHorizontal,
  Sparkles,
  ExternalLink,
  Smartphone,
  Eye,
  ArrowRight,
  MapPin,
  ChevronRight,
  X,
  Filter
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { BusinessWebsite } from '../../types';
import { TemplatePreviewModal } from '../site/TemplatePreviewModal';
import { CATEGORY_INFO } from '../../data/templateDefs';
import { getCategoryToken } from '../../data/categoryDesignTokens';

interface DemoShowcaseProps {
  onOpenOrderModal?: () => void;
}

export const DemoShowcase: React.FC<DemoShowcaseProps> = ({ onOpenOrderModal }) => {
  const { websites, setActiveView, referenceCategoryFilter, setReferenceCategoryFilter } = useApp();

  // Search and filter states
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'name' | 'items'>('featured');
  const [filterDrawerOpen, setFilterDrawerOpen] = useState<boolean>(false);
  const [previewSite, setPreviewSite] = useState<BusinessWebsite | null>(null);

  // Derive categories dynamically from active websites in catalog
  const categoryChips: Array<{ id: string; label: string }> = React.useMemo(() => {
    const relevantWebsites = websites.filter(w => {
      if (referenceCategoryFilter === 'cafes') return w.category === 'cafe';
      if (referenceCategoryFilter === 'restaurants') return w.category === 'restaurant';
      if (referenceCategoryFilter === 'travel') return w.category === 'travel' || w.category === ('tour_travel' as any);
      if (referenceCategoryFilter === 'salon') return w.category === 'salon';
      if (referenceCategoryFilter === 'jewellery') return w.category === 'jewellery';
      if (referenceCategoryFilter === 'beauty_cosmetics') return w.category === 'beauty_cosmetics';
      if (referenceCategoryFilter === 'gym_fitness') return w.category === 'gym_fitness' || w.category === 'gym';
      if (referenceCategoryFilter === 'web_tools') return w.category === 'web_tools';
      return true;
    });
    const cats = Array.from(new Set(relevantWebsites.map(w => w.category)));
    return [
      { id: 'all', label: `All In View (${relevantWebsites.length})` },
      ...cats.map(c => ({
        id: c,
        label: CATEGORY_INFO[c]?.label || (c === 'travel' ? 'Tour & Travel' : c === 'salon' ? 'Salon & Clinic' : c.replace(/_/g, ' '))
      }))
    ];
  }, [websites, referenceCategoryFilter]);

  // Filtering & Search
  const filteredWebsites = websites.filter(site => {
    // Four categories filter: CAFES, RESTAURANTS, TOUR & TRAVEL, SALON & CLINIC
    if (referenceCategoryFilter === 'cafes' && site.category !== 'cafe') {
      return false;
    }
    if (referenceCategoryFilter === 'restaurants' && site.category !== 'restaurant') {
      return false;
    }
    if (referenceCategoryFilter === 'travel' && site.category !== 'travel' && site.category !== ('tour_travel' as any)) {
      return false;
    }
    if (referenceCategoryFilter === 'salon' && site.category !== 'salon') {
      return false;
    }
    if (referenceCategoryFilter === 'jewellery' && site.category !== 'jewellery') {
      return false;
    }
    if (referenceCategoryFilter === 'beauty_cosmetics' && site.category !== 'beauty_cosmetics') {
      return false;
    }
    if (referenceCategoryFilter === 'gym_fitness' && site.category !== 'gym_fitness' && site.category !== 'gym') {
      return false;
    }
    if (referenceCategoryFilter === 'web_tools' && site.category !== 'web_tools') {
      return false;
    }
    if (referenceCategoryFilter === 'loans' && site.category !== 'loan' && site.category !== 'loans' && site.category !== 'loan_dsa') {
      return false;
    }
    if (referenceCategoryFilter === 'healthcare' && site.category !== 'healthcare' && site.category !== 'clinic' && site.category !== 'hospital') {
      return false;
    }

    // Specific Category match
    if (selectedCategory !== 'all' && site.category !== selectedCategory) {
      return false;
    }

    // Search query match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchName = (site.businessName || '').toLowerCase().includes(q);
      const matchTagline = (site.tagline || '').toLowerCase().includes(q);
      const matchCategory = (site.category || '').toLowerCase().includes(q);
      const matchCity = (site.city || '').toLowerCase().includes(q) || (site.address || '').toLowerCase().includes(q);
      const matchItems = Array.isArray(site.items)
        ? site.items.some(i => (i.name || '').toLowerCase().includes(q))
        : false;
      return matchName || matchTagline || matchCategory || matchCity || matchItems;
    }

    return true;
  }).sort((a, b) => {
    if (sortBy === 'name') {
      return a.businessName.localeCompare(b.businessName);
    }
    if (sortBy === 'items') {
      return (b.items?.length || 0) - (a.items?.length || 0);
    }
    return 0;
  });

  const handleUseDesign = (site: BusinessWebsite) => {
    setPreviewSite(null);
    if (onOpenOrderModal) {
      onOpenOrderModal();
    } else {
      setActiveView('contact');
    }
  };

  return (
    <section id="demos" className="py-12 sm:py-20 bg-[#FAFAF8] border-b border-[#E8E7F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold text-[#4338CA] uppercase tracking-wide">
            Template Gallery
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#14162B] font-['Fraunces'] tracking-tight mt-1">
            Explore Business Designs
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#51556E] font-['Inter']">
            Ready-made responsive layouts with menus, photos, Google Maps, and direct WhatsApp ordering buttons.
          </p>
        </div>

        {websites.length === 0 ? (
          <div className="text-center py-16 px-6 bg-white rounded-3xl border border-[#E8E7F0] max-w-xl mx-auto shadow-xs">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-[#4338CA] mx-auto flex items-center justify-center mb-4">
              <Sparkles className="w-7 h-7" />
            </div>
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200">
              Clean Slate — Active Catalog Reset
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#14162B] font-['Fraunces']">
              Website Catalog Ready for New Builds
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#51556E] leading-relaxed font-['Inter']">
              All previous demo websites, sample cards, and placeholder templates have been removed. You have a fresh, clean canvas to build new websites from scratch.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => setActiveView('wizard')}
                className="w-full sm:w-auto min-h-[46px] px-6 py-2.5 bg-[#4338CA] hover:bg-[#3730A3] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Smartphone className="w-4 h-4" />
                <span>Create with Mobile Wizard</span>
              </button>
              <button
                onClick={() => setActiveView('builder')}
                className="w-full sm:w-auto min-h-[46px] px-6 py-2.5 bg-white hover:bg-slate-50 text-[#14162B] border border-[#D5D4E3] text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Open Website Builder</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* EXACTLY THREE CATEGORIES: Cafes, Restaurants, Tour & Travel */}
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="inline-flex items-center gap-1 sm:gap-2 p-1.5 bg-white rounded-2xl border border-[#D5D4E3] shadow-xs">
                {/* 1. CAFES */}
                <button
                  onClick={() => {
                    const next = referenceCategoryFilter === 'cafes' ? 'all' : 'cafes';
                    setReferenceCategoryFilter(next);
                    setSelectedCategory('all');
                  }}
                  className={`px-3.5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
                    referenceCategoryFilter === 'cafes'
                      ? 'bg-[#14162B] text-white shadow-sm ring-1 ring-[#14162B]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                  aria-pressed={referenceCategoryFilter === 'cafes'}
                >
                  <span>☕ CAFES</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                    referenceCategoryFilter === 'cafes' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {websites.filter(w => w.category === 'cafe').length}
                  </span>
                </button>

                {/* 2. RESTAURANTS */}
                <button
                  onClick={() => {
                    const next = referenceCategoryFilter === 'restaurants' ? 'all' : 'restaurants';
                    setReferenceCategoryFilter(next);
                    setSelectedCategory('all');
                  }}
                  className={`px-3.5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
                    referenceCategoryFilter === 'restaurants'
                      ? 'bg-[#14162B] text-white shadow-sm ring-1 ring-[#14162B]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                  aria-pressed={referenceCategoryFilter === 'restaurants'}
                >
                  <span>🍽️ RESTAURANTS</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                    referenceCategoryFilter === 'restaurants' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {websites.filter(w => w.category === 'restaurant').length}
                  </span>
                </button>

                {/* 3. TOUR & TRAVEL */}
                <button
                  onClick={() => {
                    const next = referenceCategoryFilter === 'travel' ? 'all' : 'travel';
                    setReferenceCategoryFilter(next);
                    setSelectedCategory('all');
                  }}
                  className={`px-3.5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
                    referenceCategoryFilter === 'travel'
                      ? 'bg-[#14162B] text-white shadow-sm ring-1 ring-[#14162B]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                  aria-pressed={referenceCategoryFilter === 'travel'}
                >
                  <span>✈️ TOUR & TRAVEL</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                    referenceCategoryFilter === 'travel' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {websites.filter(w => w.category === 'travel' || w.category === ('tour_travel' as any)).length}
                  </span>
                </button>

                {/* 4. SALON */}
                <button
                  onClick={() => {
                    const next = referenceCategoryFilter === 'salon' ? 'all' : 'salon';
                    setReferenceCategoryFilter(next);
                    setSelectedCategory('all');
                  }}
                  className={`px-3.5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
                    referenceCategoryFilter === 'salon'
                      ? 'bg-[#14162B] text-white shadow-sm ring-1 ring-[#14162B]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                  aria-pressed={referenceCategoryFilter === 'salon'}
                >
                  <span>✂️ SALON</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                    referenceCategoryFilter === 'salon' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {websites.filter(w => w.category === 'salon').length}
                  </span>
                </button>

                {/* 5. JEWELLERY */}
                <button
                  onClick={() => {
                    const next = referenceCategoryFilter === 'jewellery' ? 'all' : 'jewellery';
                    setReferenceCategoryFilter(next);
                    setSelectedCategory('all');
                  }}
                  className={`px-3.5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
                    referenceCategoryFilter === 'jewellery'
                      ? 'bg-[#14162B] text-white shadow-sm ring-1 ring-[#14162B]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                  aria-pressed={referenceCategoryFilter === 'jewellery'}
                >
                  <span>💎 JEWELLERY</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                    referenceCategoryFilter === 'jewellery' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {websites.filter(w => w.category === 'jewellery').length}
                  </span>
                </button>

                {/* 6. BEAUTY & COSMETICS */}
                <button
                  onClick={() => {
                    const next = referenceCategoryFilter === 'beauty_cosmetics' ? 'all' : 'beauty_cosmetics';
                    setReferenceCategoryFilter(next);
                    setSelectedCategory('all');
                  }}
                  className={`px-3.5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
                    referenceCategoryFilter === 'beauty_cosmetics'
                      ? 'bg-[#14162B] text-white shadow-sm ring-1 ring-[#14162B]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                  aria-pressed={referenceCategoryFilter === 'beauty_cosmetics'}
                >
                  <span>💄 BEAUTY & COSMETICS</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                    referenceCategoryFilter === 'beauty_cosmetics' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {websites.filter(w => w.category === 'beauty_cosmetics').length}
                  </span>
                </button>

                {/* 7. GYM & FITNESS */}
                <button
                  onClick={() => {
                    const next = referenceCategoryFilter === 'gym_fitness' ? 'all' : 'gym_fitness';
                    setReferenceCategoryFilter(next);
                    setSelectedCategory('all');
                  }}
                  className={`px-3.5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
                    referenceCategoryFilter === 'gym_fitness'
                      ? 'bg-[#14162B] text-white shadow-sm ring-1 ring-[#14162B]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                  aria-pressed={referenceCategoryFilter === 'gym_fitness'}
                >
                  <span>🏋️ GYM & FITNESS</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                    referenceCategoryFilter === 'gym_fitness' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {websites.filter(w => w.category === 'gym_fitness' || w.category === 'gym').length}
                  </span>
                </button>

                {/* 8. WEB TOOLS / UTILITIES */}
                <button
                  onClick={() => {
                    const next = referenceCategoryFilter === 'web_tools' ? 'all' : 'web_tools';
                    setReferenceCategoryFilter(next);
                    setSelectedCategory('all');
                  }}
                  className={`px-3.5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
                    referenceCategoryFilter === 'web_tools'
                      ? 'bg-[#14162B] text-white shadow-sm ring-1 ring-[#14162B]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                  aria-pressed={referenceCategoryFilter === 'web_tools'}
                >
                  <span>🛠️ WEB TOOLS</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                    referenceCategoryFilter === 'web_tools' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {websites.filter(w => w.category === 'web_tools').length}
                  </span>
                </button>

                {/* 9. LOAN */}
                <button
                  onClick={() => {
                    const next = referenceCategoryFilter === 'loans' ? 'all' : 'loans';
                    setReferenceCategoryFilter(next);
                    setSelectedCategory('all');
                  }}
                  className={`px-3.5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
                    referenceCategoryFilter === 'loans'
                      ? 'bg-[#14162B] text-white shadow-sm ring-1 ring-[#14162B]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                  aria-pressed={referenceCategoryFilter === 'loans'}
                >
                  <span>💰 LOAN</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                    referenceCategoryFilter === 'loans' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {websites.filter(w => w.category === 'loan' || w.category === 'loans' || w.category === 'loan_dsa').length}
                  </span>
                </button>

                {/* 10. HEALTHCARE */}
                <button
                  onClick={() => {
                    const next = referenceCategoryFilter === 'healthcare' ? 'all' : 'healthcare';
                    setReferenceCategoryFilter(next);
                    setSelectedCategory('all');
                  }}
                  className={`px-3.5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
                    referenceCategoryFilter === 'healthcare'
                      ? 'bg-[#14162B] text-white shadow-sm ring-1 ring-[#14162B]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                  aria-pressed={referenceCategoryFilter === 'healthcare'}
                >
                  <span>🩺 HEALTHCARE</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                    referenceCategoryFilter === 'healthcare' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {websites.filter(w => w.category === 'healthcare' || w.category === 'clinic' || w.category === 'hospital').length}
                  </span>
                </button>
              </div>

              {referenceCategoryFilter !== 'all' && (
                <div className="mt-2 flex items-center gap-2 text-xs text-slate-500 font-['Inter']">
                  <span>Filtered by: <strong className="text-slate-800 capitalize">{referenceCategoryFilter === 'travel' ? 'Tour & Travel' : referenceCategoryFilter === 'salon' ? 'Salon' : referenceCategoryFilter === 'jewellery' ? 'Jewellery' : referenceCategoryFilter === 'beauty_cosmetics' ? 'Beauty & Cosmetics' : referenceCategoryFilter === 'gym_fitness' ? 'Gym & Fitness' : referenceCategoryFilter === 'web_tools' ? 'Web Tools / Utilities' : referenceCategoryFilter === 'loans' ? 'Loans & Finance' : referenceCategoryFilter === 'healthcare' ? 'Healthcare & Clinic' : referenceCategoryFilter}</strong></span>
                  <span>•</span>
                  <button
                    onClick={() => {
                      setReferenceCategoryFilter('all');
                      setSelectedCategory('all');
                    }}
                    className="text-[#4338CA] hover:underline font-bold cursor-pointer"
                  >
                    View All Demos ({websites.length})
                  </button>
                </div>
              )}
            </div>

            {/* Prominent Search Bar with exact placeholder */}
            <div className="max-w-xl mx-auto relative mb-6">
              <div className="relative flex items-center">
                <Search className="w-4 h-4 text-slate-400 absolute left-4 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Find a website design or business type..."
                  className="w-full min-h-[48px] pl-11 pr-24 text-xs sm:text-sm bg-white border border-[#D5D4E3] rounded-2xl shadow-xs focus:ring-2 focus:ring-[#4338CA] focus:border-[#4338CA] outline-hidden font-['Inter']"
                />
                {searchQuery ? (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-12 text-xs text-slate-400 hover:text-slate-600 font-bold p-1 cursor-pointer"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                ) : null}

                {/* Mobile Filter Button */}
                <button
                  onClick={() => setFilterDrawerOpen(true)}
                  className="absolute right-2 min-h-[38px] px-2.5 py-1 text-xs font-semibold text-slate-600 hover:text-[#4338CA] bg-slate-100 hover:bg-slate-200 active:bg-slate-250 rounded-xl flex items-center gap-1 cursor-pointer"
                  aria-label="Open filters"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span className="hidden xs:inline">Filter</span>
                </button>
              </div>
            </div>

            {/* Horizontally Scrollable Category Chips with Visible Scroll Affordance */}
            <div className="relative max-w-4xl mx-auto mb-8">
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 px-1 scroll-smooth">
                {categoryChips.map(chip => {
                  const isSelected = selectedCategory === chip.id;
                  return (
                    <button
                      key={chip.id}
                      onClick={() => setSelectedCategory(chip.id)}
                      className={`min-h-[40px] px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap font-['Inter'] ${
                        isSelected
                          ? 'bg-[#14162B] text-white shadow-sm ring-2 ring-[#14162B]'
                          : 'bg-white text-slate-700 hover:bg-slate-100 border border-[#E8E7F0]'
                      }`}
                    >
                      <span>{chip.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Fade gradient cue on right to visibly show more categories */}
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#FAFAF8] to-transparent sm:hidden" />
            </div>

            {/* Active Filters / Result Count Pill */}
            <div className="max-w-7xl mx-auto mb-6 flex items-center justify-between text-xs text-[#51556E] font-['Inter']">
              <div>
                Showing <span className="font-bold text-[#14162B]">{filteredWebsites.length}</span> designs
                {selectedCategory !== 'all' && (
                  <span> in <strong className="text-[#4338CA] capitalize">{categoryChips.find(c => c.id === selectedCategory)?.label}</strong></span>
                )}
              </div>

              {/* Desktop Sort Dropdown */}
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-slate-400">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value as any)}
                  className="bg-white border border-[#E8E7F0] rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-700 outline-hidden"
                >
                  <option value="featured">Featured First</option>
                  <option value="name">Name (A-Z)</option>
                  <option value="items">Most Products/Services</option>
                </select>
              </div>
            </div>

            {/* Empty State when filter yields 0 */}
            {filteredWebsites.length === 0 && (
              <div className="text-center py-16 px-4 bg-white rounded-3xl border border-[#E8E7F0] max-w-md mx-auto space-y-3">
                <Sparkles className="w-10 h-10 text-slate-300 mx-auto" />
                <h3 className="text-base font-bold text-slate-900">No template designs found</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-['Inter']">
                  We couldn't find any designs matching "{searchQuery}". Try selecting another category or clear your search.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="min-h-[44px] px-4 py-2 bg-[#4338CA] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            )}

            {/* Responsive Template Cards Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {filteredWebsites.map(site => {
                const catToken = getCategoryToken(site.category);
                const catMeta = CATEGORY_INFO[site.category] || CATEGORY_INFO.cafe;
                const isDevdas = site.slug === '68-devdas-wedding' || site.slug === 'devdas-wedding' || site.slug === 'devdas' || site.slug === '68-devdas' || site.id === 'site-devdas-68';
                const isLivinto = site.slug === '67-livinto-interiors' || site.slug === 'livinto-interiors' || site.slug === 'livinto' || site.slug === '67-livinto' || site.id === 'site-livinto-67';
                const isSkinSciene = site.slug === '66-skinsciene-naturals' || site.slug === 'skinsciene-naturals' || site.slug === 'skinsciene' || site.id === 'site-skinsciene-66';
                const isMedicarePlus = site.slug === '65-medicareplus-hospital' || site.slug === 'medicareplus' || site.slug === 'medicareplus-hospital' || site.id === 'site-medicareplus-65';
                const isGroupAch = site.slug === 'group-ach' || site.slug === 'group-ach-loan-solutions' || site.id === 'site-group-ach-63';
                const isClinicByPeople = site.slug === '64-clinicbypeople' || site.slug === 'clinicbypeople' || site.id === 'site-clinicbypeople-64';

                return (
                  <div
                    key={site.id}
                    className="bg-white rounded-2xl border border-[#E8E7F0] shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
                  >
                <div>
                  {/* Template Screenshot / Preview Image */}
                  <div
                    onClick={() => {
                      if (isDevdas) {
                        setActiveView('devdas-wedding');
                      } else if (isLivinto) {
                        setActiveView('livinto-interiors');
                      } else if (isSkinSciene) {
                        setActiveView('skinsciene-naturals');
                      } else if (isMedicarePlus) {
                        setActiveView('medicareplus');
                      } else if (isClinicByPeople) {
                        setActiveView('clinicbypeople');
                      } else if (isGroupAch) {
                        setActiveView('group-ach');
                      } else {
                        setPreviewSite(site);
                      }
                    }}
                    className="relative h-48 sm:h-52 bg-slate-100 overflow-hidden cursor-pointer"
                  >
                    {isDevdas ? (
                      /* Polished authentic website mockup of Devdas Wedding */
                      <div className="w-full h-full bg-[#180A0D] p-3 text-white flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-300 font-serif">
                        <div className="absolute inset-0 bg-gradient-to-br from-rose-900/40 via-transparent to-amber-950/30 pointer-events-none" />
                        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2">
                          <div className="flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded-lg bg-[#7A1C30] text-amber-300 flex items-center justify-center text-[10px] font-black border border-amber-400/40">
                              DW
                            </span>
                            <span className="font-serif font-black tracking-wider text-[11px] uppercase text-white">
                              DEVDAS <span className="text-amber-400 font-normal italic">WEDDING</span>
                            </span>
                          </div>
                          <span className="text-[9px] font-mono text-amber-300 bg-red-950/80 px-1.5 py-0.5 rounded border border-amber-400/30">
                            DESTINATION PLANNERS
                          </span>
                        </div>

                        <div className="relative z-10 my-auto text-center py-1">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-amber-300/90">
                            Bespoke Palaces &amp; Coastal Shores
                          </span>
                          <h4 className="font-serif text-sm font-bold leading-tight mt-0.5 text-white">
                            Udaipur • Goa • Jim Corbett • Kerala
                          </h4>
                          <div className="mt-2 flex items-center justify-center gap-1 text-[9px] text-slate-200">
                            <span className="bg-white/10 px-1.5 py-0.5 rounded">280+ Celebrations</span>
                            <span className="bg-white/10 px-1.5 py-0.5 rounded">Zero Markup</span>
                            <span className="bg-white/10 px-1.5 py-0.5 rounded">Fixed Fee</span>
                          </div>
                        </div>

                        <div className="relative z-10 flex items-center justify-between text-[9px] text-slate-300 pt-1 border-t border-white/10 font-sans">
                          <span>Lake Palace Mandaps</span>
                          <span className="text-amber-400 font-bold">Interactive Budget Estimator</span>
                        </div>
                      </div>
                    ) : isLivinto ? (
                      /* Polished authentic website mockup of Livinto Home Interiors */
                      <div className="w-full h-full bg-[#1b101c] p-3 text-white flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-300 font-['Satoshi',sans-serif]">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/25 via-transparent to-transparent pointer-events-none" />
                        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2">
                          <div className="flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded-lg bg-[#814882] text-amber-300 flex items-center justify-center text-[10px] font-black">
                              L
                            </span>
                            <span className="font-serif font-black tracking-wider text-[11px] uppercase">
                              LIVINTO <span className="text-amber-400 font-bold">INTERIORS</span>
                            </span>
                          </div>
                          <span className="text-[9px] font-mono text-amber-300 bg-purple-950/80 px-1.5 py-0.5 rounded border border-purple-800/40">
                            1800 425 6677
                          </span>
                        </div>

                        <div className="relative z-10 my-auto text-center py-1">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-amber-300">
                            Turnkey Home Interiors
                          </span>
                          <h4 className="font-serif text-sm font-bold leading-tight mt-0.5">
                            Custom Modular Kitchens &amp; Wardrobes
                          </h4>
                          <div className="mt-2 flex items-center justify-center gap-1 text-[9px] text-slate-300">
                            <span className="bg-white/10 px-1.5 py-0.5 rounded">29 Showrooms</span>
                            <span className="bg-white/10 px-1.5 py-0.5 rounded">40-Day Handover</span>
                            <span className="bg-white/10 px-1.5 py-0.5 rounded">10-Yr Warranty</span>
                          </div>
                        </div>

                        <div className="relative z-10 flex items-center justify-between text-[9px] text-slate-400 pt-1 border-t border-white/10">
                          <span>350k Sq Ft German Factory</span>
                          <span className="text-amber-400 font-bold">100% BWP Marine Ply</span>
                        </div>
                      </div>
                    ) : isSkinSciene ? (
                      /* Polished authentic website mockup of SkinSciene Naturals */
                      <div className="w-full h-full bg-[#062018] p-3 text-white flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-300 font-['Satoshi',sans-serif]">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/25 via-transparent to-transparent pointer-events-none" />
                        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2">
                          <div className="flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-[10px] font-black">
                              SN
                            </span>
                            <span className="font-serif font-black tracking-wider text-[11px] uppercase">
                              SKINSCIENE <span className="text-emerald-400 font-bold">NATURALS</span>
                            </span>
                          </div>
                          <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-800/40">
                            1800 572 8899
                          </span>
                        </div>

                        <div className="relative z-10 my-auto text-center py-1">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-300">
                            Dermatologist-Led Clinic
                          </span>
                          <h4 className="font-serif text-sm font-bold leading-tight mt-0.5">
                            US-FDA Laser Hair Removal &amp; Acne Scars
                          </h4>
                          <div className="mt-2 flex items-center justify-center gap-1 text-[9px] text-slate-300">
                            <span className="bg-white/10 px-1.5 py-0.5 rounded">120+ MD Doctors</span>
                            <span className="bg-white/10 px-1.5 py-0.5 rounded">36+ Clinics</span>
                            <span className="bg-white/10 px-1.5 py-0.5 rounded">10 Cities</span>
                          </div>
                        </div>

                        <div className="relative z-10 flex items-center justify-between text-[9px] text-slate-400 pt-1 border-t border-white/10">
                          <span>Soprano Titanium Laser</span>
                          <span className="text-emerald-400 font-bold">Free Consult Screening</span>
                        </div>
                      </div>
                    ) : isMedicarePlus ? (
                      /* Polished authentic website mockup of MedicarePlus Hospital */
                      <div className="w-full h-full bg-[#051E28] p-3 text-white flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-300 font-['Satoshi',sans-serif]">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00A896]/20 via-transparent to-transparent pointer-events-none" />
                        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2">
                          <div className="flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded-lg bg-[#00A896] text-white flex items-center justify-center text-[10px] font-black">
                              M+
                            </span>
                            <span className="font-extrabold text-xs text-white tracking-tight">
                              MedicarePlus Hospital
                            </span>
                          </div>
                          <span className="text-[9px] font-mono text-teal-300 bg-teal-950/70 px-1.5 py-0.5 rounded border border-teal-800/40">
                            medicareplusdemo.in
                          </span>
                        </div>

                        <div className="relative z-10 my-auto text-center py-2">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-teal-300">
                            Multispeciality Hospital · 24x7 Emergency
                          </span>
                          <h4 className="text-sm font-extrabold text-white leading-tight mt-0.5">
                            Advanced Healthcare. Compassionate Care.
                          </h4>
                          <div className="mt-2 flex items-center justify-center gap-1 text-[9px] text-slate-300">
                            <span className="bg-white/10 px-1.5 py-0.5 rounded">22 Specialities</span>
                            <span className="bg-white/10 px-1.5 py-0.5 rounded">400+ Doctors</span>
                            <span className="bg-white/10 px-1.5 py-0.5 rounded">Online OPD</span>
                          </div>
                        </div>

                        <div className="relative z-10 flex items-center justify-between text-[9px] text-slate-400 pt-1 border-t border-white/10">
                          <span>Ambulance: +91 90000 50000</span>
                          <span className="text-teal-300 font-bold">NABH Benchmark</span>
                        </div>
                      </div>
                    ) : isClinicByPeople ? (
                      /* Polished authentic website mockup of ClinicByPeople */
                      <div className="w-full h-full bg-[#0B1528] p-3 text-white flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-300 font-['Lexend',sans-serif]">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0C5BE2]/25 via-transparent to-transparent pointer-events-none" />
                        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2">
                          <div className="flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded-lg bg-[#0C5BE2] text-white flex items-center justify-center text-[10px] font-black">
                              CP
                            </span>
                            <span className="font-extrabold text-xs text-white tracking-tight">
                              ClinicByPeople
                            </span>
                          </div>
                          <span className="text-[9px] font-mono text-sky-400 bg-sky-950/60 px-1.5 py-0.5 rounded border border-sky-800/40">
                            clinicbypeople.in
                          </span>
                        </div>

                        <div className="relative z-10 my-auto text-center py-2">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-[#FF6B4A]">
                            Specialist Care · Trusted Doctors
                          </span>
                          <h4 className="text-sm font-extrabold text-white leading-tight mt-0.5">
                            Modern Specialist Healthcare Platform
                          </h4>
                          <div className="mt-2 flex items-center justify-center gap-1 text-[9px] text-slate-300">
                            <span className="bg-white/10 px-1.5 py-0.5 rounded">8 Specialities</span>
                            <span className="bg-white/10 px-1.5 py-0.5 rounded">Free OPD</span>
                            <span className="bg-white/10 px-1.5 py-0.5 rounded">Cashless</span>
                          </div>
                        </div>

                        <div className="relative z-10 flex items-center justify-between text-[9px] text-slate-400 pt-1 border-t border-white/10">
                          <span>15-Min Consultation Callback</span>
                          <span className="text-sky-400 font-bold">NABH Daycare Centres</span>
                        </div>
                      </div>
                    ) : isGroupAch ? (
                      /* Polished authentic website mockup of Group ACH Loan Solutions */
                      <div className="w-full h-full bg-[#192721] p-3 text-white flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                        {/* Background pattern */}
                        <div className="absolute inset-0 bg-radial from-[#2F483E]/60 to-transparent pointer-events-none" />
                        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2">
                          <div className="flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded bg-[#85673E] text-white flex items-center justify-center font-serif text-[10px] font-bold">
                              ACH
                            </span>
                            <span className="font-serif text-xs font-bold text-white tracking-tight">
                              Group ACH
                            </span>
                          </div>
                          <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40">
                            www.achlinks.in
                          </span>
                        </div>

                        <div className="relative z-10 my-auto text-center py-2">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-[#D4AF37]">
                            Expert Loan Advisory
                          </span>
                          <h4 className="font-serif text-sm font-bold leading-tight mt-0.5">
                            Home Loan &amp; Property Loan Solutions
                          </h4>
                          <div className="mt-2 flex items-center justify-center gap-1 text-[9px] text-slate-300">
                            <span className="bg-white/10 px-1.5 py-0.5 rounded">70+ Banks</span>
                            <span className="bg-white/10 px-1.5 py-0.5 rounded">EMI Calculator</span>
                            <span className="bg-white/10 px-1.5 py-0.5 rounded">Doorstep</span>
                          </div>
                        </div>

                        <div className="relative z-10 flex items-center justify-between text-[9px] text-slate-400 pt-1 border-t border-white/10">
                          <span>Starting from 8.35% p.a.</span>
                          <span className="text-emerald-400 font-bold">Zero Advisory Fee</span>
                        </div>
                      </div>
                    ) : (
                      <>
                        <img
                          src={
                            site.coverUrl ||
                            site.items?.[0]?.imageUrl ||
                            'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80'
                          }
                          alt={site.businessName}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      </>
                    )}

                    {/* Category pill on image */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-none">
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-[#14162B]/90 text-white backdrop-blur-md">
                        {isDevdas ? '#68' : isLivinto ? '#67' : isSkinSciene ? '#66' : isMedicarePlus ? '#65' : isClinicByPeople ? '#64' : isGroupAch ? '#63' : catMeta.label}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-600 text-white shadow-xs">
                        DEMO WEBSITE
                      </span>
                    </div>

                    {/* Business Name in Preview */}
                    {!isDevdas && !isLivinto && !isGroupAch && !isClinicByPeople && !isMedicarePlus && !isSkinSciene && (
                      <div className="absolute bottom-3 left-3 right-3 text-white z-20">
                        <h3
                          className="font-bold text-base truncate"
                          style={{ fontFamily: catToken.headlineFont }}
                        >
                          {site.businessName}
                        </h3>
                        <p className="text-slate-300 text-xs truncate flex items-center gap-1 font-['Inter']">
                          <MapPin className="w-3 h-3 text-[#FF6B4A]" />
                          {site.city || 'Local Store'}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Body: Short Description & Meta */}
                  <div className="p-4 space-y-2 font-['Inter']">
                    {isDevdas ? (
                      <div>
                        <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                          <span className="font-mono text-[11px] font-bold text-[#7A1C30] bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">
                            #68
                          </span>
                          <h3 className="font-extrabold text-base text-slate-900 leading-tight">
                            DEVDAS WEDDING
                          </h3>
                        </div>
                        <p className="text-[11px] font-semibold text-[#7A1C30] uppercase tracking-wide">
                          Luxury Destination Wedding Planners India &amp; Worldwide
                        </p>
                        <p className="text-xs text-[#51556E] line-clamp-2 leading-relaxed mt-1.5">
                          Turnkey destination wedding curation in Udaipur palaces, Goa beaches, Kerala backwaters &amp; Jim Corbett lodges with interactive budget estimator and transparent planning fees.
                        </p>
                        <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#636882]">
                          <span className="font-semibold text-[#7A1C30]">Transparent Fixed Fee</span>
                          <span className="font-semibold text-amber-700">280+ Curated Weddings</span>
                        </div>
                      </div>
                    ) : isLivinto ? (
                      <div>
                        <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                          <span className="font-mono text-[11px] font-bold text-purple-900 bg-purple-50 px-1.5 py-0.5 rounded border border-purple-200">
                            #67
                          </span>
                          <h3 className="font-extrabold text-base text-slate-900 leading-tight">
                            LIVINTO HOME INTERIORS
                          </h3>
                        </div>
                        <p className="text-[11px] font-semibold text-[#814882] uppercase tracking-wide">
                          Premium Home Interior Design &amp; Execution
                        </p>
                        <p className="text-xs text-[#51556E] line-clamp-2 leading-relaxed mt-1.5">
                          Turnkey interior design and modular execution with 29 direct showrooms, 350,000 sq ft German automated factory, 40-day delivery guarantee, and 10-year warranty.
                        </p>
                        <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#636882]">
                          <span className="font-semibold text-[#814882]">40-Day Delivery Promise</span>
                          <span className="font-semibold text-amber-700">10-Year Warranty</span>
                        </div>
                      </div>
                    ) : isSkinSciene ? (
                      <div>
                        <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                          <span className="font-mono text-[11px] font-bold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                            #66
                          </span>
                          <h3 className="font-extrabold text-base text-slate-900 leading-tight">
                            SKINSCIENE NATURALS
                          </h3>
                        </div>
                        <p className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wide">
                          Premium Skin, Hair &amp; Aesthetic Clinic
                        </p>
                        <p className="text-xs text-[#51556E] line-clamp-2 leading-relaxed mt-1.5">
                          100% US-FDA approved dermatology and hair clinic network with 120+ MD dermatologists, 36+ clinics in 10 cities, before/after slider, and appointment scheduling.
                        </p>
                        <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#636882]">
                          <span className="font-semibold text-emerald-800">120+ MD Doctors</span>
                          <span className="font-semibold text-teal-700">36+ Clinics in 10 Cities</span>
                        </div>
                      </div>
                    ) : isMedicarePlus ? (
                      <div>
                        <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                          <span className="font-mono text-[11px] font-bold text-teal-700 bg-teal-50 px-1.5 py-0.5 rounded">
                            #65
                          </span>
                          <h3 className="font-extrabold text-base text-slate-900 leading-tight">
                            MEDICAREPLUS HOSPITAL
                          </h3>
                        </div>
                        <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                          Multispeciality Hospital Website
                        </p>
                        <p className="text-xs text-[#51556E] line-clamp-2 leading-relaxed mt-1.5">
                          A complete modern hospital website with doctor discovery, specialities, healthcare services, patient information, appointments, emergency support and hospital resources.
                        </p>
                        <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#636882]">
                          <span className="font-semibold text-teal-700">Doctor Discovery &amp; OPD</span>
                          <span className="font-semibold text-emerald-600">NABH Standards</span>
                        </div>
                      </div>
                    ) : isClinicByPeople ? (
                      <div>
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="font-mono text-[11px] font-bold text-sky-700 bg-sky-50 px-1.5 py-0.5 rounded">
                            #64
                          </span>
                          <h3 className="font-extrabold text-base text-slate-900 leading-tight">
                            CLINICBYPeople
                          </h3>
                        </div>
                        <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                          Healthcare &amp; Clinic Website
                        </p>
                        <p className="text-xs text-[#51556E] line-clamp-2 leading-relaxed mt-1.5">
                          Modern healthcare platform for specialist discovery, consultation, treatment information and patient support.
                        </p>
                        <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#636882]">
                          <span className="font-semibold text-sky-700">Specialist Discovery</span>
                          <span className="font-semibold text-emerald-600">Cashless Insurance</span>
                        </div>
                      </div>
                    ) : isGroupAch ? (
                      <div>
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="font-mono text-[11px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                            #63
                          </span>
                          <h3 className="font-serif font-bold text-base text-slate-900 leading-tight">
                            GROUP ACH LOAN SOLUTIONS
                          </h3>
                        </div>
                        <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                          Loan &amp; Finance Website
                        </p>
                        <p className="text-xs text-[#51556E] line-clamp-2 leading-relaxed mt-1.5">
                          Professional home loan and property loan advisory website with loan calculators, lender information, lead generation, SEO-focused pages and responsive design.
                        </p>
                        <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#636882]">
                          <span className="font-semibold text-emerald-700">70+ Partner Banks</span>
                          <span className="font-semibold text-[#4338CA]">Interactive Calculators</span>
                        </div>
                      </div>
                    ) : (
                      <>
                        <p className="text-xs text-[#51556E] line-clamp-2 leading-relaxed">
                          {site.description || site.tagline}
                        </p>
                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#636882]">
                          <span>{site.items?.length || 0} Catalog Items</span>
                          <span className="font-semibold text-[#4338CA]">WhatsApp Direct</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Exact Required Card Action Buttons: Open Complete Website and Preview */}
                <div className="p-3 bg-[#FAFAF8] border-t border-[#E8E7F0] flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (isDevdas) {
                        setActiveView('devdas-wedding');
                      } else if (isLivinto) {
                        setActiveView('livinto-interiors');
                      } else if (isSkinSciene) {
                        setActiveView('skinsciene-naturals');
                      } else if (isMedicarePlus) {
                        setActiveView('medicareplus');
                      } else if (isClinicByPeople) {
                        setActiveView('clinicbypeople');
                      } else if (isGroupAch) {
                        setActiveView('group-ach');
                      } else {
                        setActiveView('site', site.slug);
                      }
                    }}
                    className="flex-1 min-h-[44px] px-3.5 py-2 bg-[#14162B] hover:bg-[#4338CA] active:bg-[#3730A3] text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                    <span>{isDevdas || isLivinto || isSkinSciene || isMedicarePlus || isClinicByPeople || isGroupAch ? 'VIEW PROJECT' : (site.bookingCtaLabel || 'View Demo')}</span>
                  </button>

                  <button
                    onClick={() => {
                      if (isDevdas) {
                        setActiveView('devdas-wedding');
                      } else if (isLivinto) {
                        setActiveView('livinto-interiors');
                      } else if (isSkinSciene) {
                        setActiveView('skinsciene-naturals');
                      } else if (isMedicarePlus) {
                        setActiveView('medicareplus');
                      } else if (isClinicByPeople) {
                        setActiveView('clinicbypeople');
                      } else if (isGroupAch) {
                        setActiveView('group-ach');
                      } else {
                        setPreviewSite(site);
                      }
                    }}
                    className="min-h-[44px] px-3 py-2 bg-white hover:bg-slate-50 border border-[#D5D4E3] active:bg-slate-100 text-slate-800 text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                    title={isDevdas || isLivinto || isSkinSciene || isMedicarePlus ? 'Launch Interactive Demo' : 'Quick Device Preview'}
                  >
                    <Eye className="w-4 h-4 text-slate-500" />
                    <span className="hidden xs:inline">{isDevdas || isLivinto || isSkinSciene || isMedicarePlus ? 'LAUNCH DEMO' : 'Preview'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
          </>
        )}
      </div>

      {/* Mobile Filter Bottom Sheet Drawer */}
      {filterDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex flex-col justify-end animate-fadeIn">
          <div
            className="bg-white text-slate-900 rounded-t-3xl p-5 space-y-4 shadow-2xl max-h-[80vh] overflow-y-auto animate-reveal font-['Inter']"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#4338CA]" />
                <h3 className="font-bold text-base text-slate-900 font-['Fraunces']">
                  Filters & Sorting
                </h3>
              </div>
              <button
                onClick={() => setFilterDrawerOpen(false)}
                className="min-h-[44px] min-w-[44px] p-2 text-slate-400 hover:text-slate-600 flex items-center justify-center rounded-xl cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sort Order */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">Sort Results</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'featured', label: 'Featured' },
                  { id: 'name', label: 'Name (A-Z)' },
                  { id: 'items', label: 'Most Items' }
                ].map(s => (
                  <button
                    key={s.id}
                    onClick={() => setSortBy(s.id as any)}
                    className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-colors ${
                      sortBy === s.id
                        ? 'bg-[#14162B] text-white border-[#14162B]'
                        : 'bg-slate-50 text-slate-700 border-slate-200'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Category selection list */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">Business Category</label>
              <div className="grid grid-cols-2 gap-2">
                {categoryChips.map(c => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCategory(c.id)}
                    className={`p-2.5 rounded-xl border text-xs font-medium text-left truncate transition-colors ${
                      selectedCategory === c.id
                        ? 'bg-[#4338CA] text-white border-[#4338CA] font-bold'
                        : 'bg-slate-50 text-slate-700 border-slate-200'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Apply button */}
            <div className="pt-2">
              <button
                onClick={() => setFilterDrawerOpen(false)}
                className="w-full min-h-[46px] bg-[#14162B] hover:bg-[#4338CA] text-white text-xs font-bold rounded-xl shadow-md transition-colors cursor-pointer"
              >
                Apply Filters ({filteredWebsites.length} Results)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dedicated Template Preview Modal */}
      <TemplatePreviewModal
        site={previewSite}
        isOpen={Boolean(previewSite)}
        onClose={() => setPreviewSite(null)}
        onUseDesign={handleUseDesign}
      />
    </section>
  );
};
