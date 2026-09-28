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
  const { websites, setActiveView } = useApp();

  // Search and filter states
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'name' | 'items'>('featured');
  const [filterDrawerOpen, setFilterDrawerOpen] = useState<boolean>(false);
  const [previewSite, setPreviewSite] = useState<BusinessWebsite | null>(null);

  // Active Batch 001 categories: Restaurant, Cafe, Rooftop Cafe, Gaming Cafe, Bakery, Home Baker, Mithai, Ice Cream, Tiffin Service, Office Tiffin
  const categoryChips: Array<{ id: string; label: string; matchSlugs?: string[] }> = [
    { id: 'all', label: 'All 20 Reference Designs' },
    { id: 'restaurant', label: 'Restaurant', matchSlugs: ['madras-central-cafe', 'maa-restaurant-sweets'] },
    { id: 'cafe', label: 'Cafe', matchSlugs: ['cafe-nook', 'gateway-cafe'] },
    { id: 'rooftop', label: 'Rooftop Cafe', matchSlugs: ['kaffiiaa-rooftop-cafe', 'campanella-rooftop'] },
    { id: 'gaming', label: 'Gaming Cafe', matchSlugs: ['social-connect-gaming-cafe', 'respawn-gaming-arena'] },
    { id: 'bakery', label: 'Bakery', matchSlugs: ['honey-and-dough', 'rameshwars-annapurna-bakery'] },
    { id: 'home_baker', label: 'Home Baker', matchSlugs: ['sna-bakehouse', 'vanilla-miel-patisserie'] },
    { id: 'sweets', label: 'Sweet Shop / Mithai', matchSlugs: ['nathus-sweets-delhi', 'balaji-sweets-mithai'] },
    { id: 'icecream', label: 'Ice Cream Shop', matchSlugs: ['elato-artisan-ice-cream', 'rameshwars-kulfi-sundaes'] },
    { id: 'tiffin', label: 'Tiffin Service', matchSlugs: ['ghar-jaisa-swad-tiffin', 'aggarwals-home-tiffin'] },
    { id: 'office_tiffin', label: 'Office Tiffin', matchSlugs: ['aggarwals-corporate-meals', 'tiffyn-box-corporate-kitchen'] }
  ];

  // Filtering & Search
  const filteredWebsites = websites.filter(site => {
    // Category match
    if (selectedCategory !== 'all') {
      const chip = categoryChips.find(c => c.id === selectedCategory);
      if (chip?.matchSlugs) {
        if (!chip.matchSlugs.includes(site.slug)) return false;
      } else if (site.category !== selectedCategory) {
        return false;
      }
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
    // Featured default priority
    const priority = ['the-roastery-cafe', 'openhouse-bistro-lounge', 'swagglam-salon-at-home', 'constructionkart-materials-direct'];
    const idxA = priority.indexOf(a.slug);
    const idxB = priority.indexOf(b.slug);
    if (idxA !== -1 && idxB !== -1) return idxA - idxB;
    if (idxA !== -1) return -1;
    if (idxB !== -1) return 1;
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

        {/* Empty State */}
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

        {/* Responsive Template Cards Gallery (1 column on small phones, 2 columns on wide mobile/tablet, 3 on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredWebsites.map(site => {
            const catToken = getCategoryToken(site.category);
            const catMeta = CATEGORY_INFO[site.category] || CATEGORY_INFO.cafe;

            return (
              <div
                key={site.id}
                className="bg-white rounded-2xl border border-[#E8E7F0] shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Template Screenshot / Preview Image */}
                  <div
                    onClick={() => setPreviewSite(site)}
                    className="relative h-48 sm:h-52 bg-slate-100 overflow-hidden cursor-pointer"
                  >
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

                    {/* Category pill on image */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-[#14162B]/90 text-white backdrop-blur-md">
                        {catMeta.label}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-600 text-white shadow-xs">
                        LIVE DEMO
                      </span>
                    </div>

                    {/* Business Name in Preview */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
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
                  </div>

                  {/* Body: Short Description & Meta */}
                  <div className="p-4 space-y-2 font-['Inter']">
                    <p className="text-xs text-[#51556E] line-clamp-2 leading-relaxed">
                      {site.description || site.tagline}
                    </p>
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#636882]">
                      <span>{site.items?.length || 0} Catalog Items</span>
                      <span className="font-semibold text-[#4338CA]">WhatsApp Direct</span>
                    </div>
                  </div>
                </div>

                {/* Exact Required Card Action Buttons: "Preview" and "Use This Design" */}
                <div className="p-3 bg-[#FAFAF8] border-t border-[#E8E7F0] flex items-center gap-2">
                  <button
                    onClick={() => setPreviewSite(site)}
                    className="flex-1 min-h-[44px] px-3 py-2 bg-white hover:bg-slate-50 border border-[#D5D4E3] active:bg-slate-100 text-slate-800 text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-4 h-4 text-slate-500" />
                    <span>Preview</span>
                  </button>

                  <button
                    onClick={() => handleUseDesign(site)}
                    className="flex-1 min-h-[44px] px-3 py-2 bg-[#FF6B4A] hover:bg-[#F25A38] active:bg-[#d94a2b] text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Use This Design</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
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
