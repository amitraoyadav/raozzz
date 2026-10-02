import React, { useState, useMemo } from 'react';
import {
  Search,
  ExternalLink,
  QrCode,
  Smartphone,
  Eye,
  Sparkles,
  MapPin,
  ChevronRight,
  Filter,
  CheckCircle2,
  Layers,
  ArrowRight,
  Globe,
  Palette,
  Check
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { BusinessWebsite } from '../../types';
import { QRCodeModal } from '../common/QRCodeModal';
import { TemplatePreviewModal } from '../site/TemplatePreviewModal';
import { CategoryReferenceItem, ReferenceSite } from '../../data/categories130Data';

interface DemoWebsitesPageProps {
  onOpenOrderModal: () => void;
}

export const DemoWebsitesPage: React.FC<DemoWebsitesPageProps> = ({ onOpenOrderModal }) => {
  const { websites, setActiveView, demoCategoryFilter, categoryReferences, referenceCategoryFilter, setReferenceCategoryFilter } = useApp();

  // Top Mode: 'references' (130 Categories & 396 Reference Sites) vs 'demos' (Ready-Built Demos)
  const [viewMode, setViewMode] = useState<'references' | 'demos'>('references');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [selectedDemoCat, setSelectedDemoCat] = useState<string>(demoCategoryFilter || 'all');
  const [qrModalSite, setQrModalSite] = useState<BusinessWebsite | null>(null);
  const [previewModalSite, setPreviewModalSite] = useState<BusinessWebsite | null>(null);

  // Sync if demoCategoryFilter is provided
  React.useEffect(() => {
    if (demoCategoryFilter) {
      setSelectedDemoCat(demoCategoryFilter);
      setViewMode('demos');
    }
  }, [demoCategoryFilter]);

  // Extract distinct groups from 130 categories
  const categoryGroups = useMemo(() => {
    const set = new Set<string>();
    categoryReferences.forEach(c => set.add(c.group));
    return ['all', ...Array.from(set)];
  }, [categoryReferences]);

  // Filter 130 categories
  const filteredCategoryReferences = useMemo(() => {
    return categoryReferences.filter(cat => {
      const matchesGroup = selectedGroup === 'all' || cat.group === selectedGroup;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesGroup;

      const matchName = cat.categoryName.toLowerCase().includes(q);
      const matchGroup = cat.group.toLowerCase().includes(q);
      const matchFeatures = cat.featuresToStudy.toLowerCase().includes(q);
      const matchRefs = cat.references.some(
        r => r.name.toLowerCase().includes(q) || r.url.toLowerCase().includes(q) || r.features.toLowerCase().includes(q)
      );

      return matchesGroup && (matchName || matchGroup || matchFeatures || matchRefs);
    });
  }, [categoryReferences, selectedGroup, searchQuery]);

  // Filter ready-built demos
  const filteredWebsites = useMemo(() => {
    return websites.filter(site => {
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
      if (referenceCategoryFilter === 'gym_fitness' && site.category !== 'gym_fitness' && site.category !== ('gym_fitness' as any) && site.category !== 'gym') {
        return false;
      }
      if (referenceCategoryFilter === 'web_tools' && site.category !== 'web_tools') {
        return false;
      }
      if (selectedDemoCat !== 'all') {
        if ((selectedDemoCat === 'gym' || selectedDemoCat === 'gym_fitness') && (site.category === 'gym' || site.category === ('gym_fitness' as any))) {
          // match
        } else if (site.category !== selectedDemoCat) {
          return false;
        }
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = (site.businessName || '').toLowerCase().includes(q);
        const matchTagline = (site.tagline || '').toLowerCase().includes(q);
        const matchCity = (site.city || '').toLowerCase().includes(q) || (site.address || '').toLowerCase().includes(q);
        const matchCat = (site.category || '').toLowerCase().includes(q);
        return matchName || matchTagline || matchCity || matchCat;
      }
      return true;
    });
  }, [websites, selectedDemoCat, searchQuery, referenceCategoryFilter]);

  // Create an on-the-fly interactive preview site driven by a selected reference site
  const handlePreviewReference = (cat: CategoryReferenceItem, ref: ReferenceSite) => {
    const previewSite: BusinessWebsite = {
      id: `preview-${cat.id}-${ref.id}`,
      slug: `preview-${cat.id}-${ref.id}`,
      businessName: `${cat.categoryName} Exemplar`,
      category: cat.id as any,
      templateId: 'reference-driven',
      tagline: `Crafted in the style of ${ref.name}`,
      description: `Demonstrating authentic layout and features studied from ${ref.name}: ${ref.features}`,
      ownerName: 'Proprietor',
      phone: '+91 98765 43210',
      whatsapp: '+91 98765 43210',
      email: `contact@${cat.id}.in`,
      address: 'Main Commercial High Street, Connaught Place, New Delhi',
      city: 'Delhi NCR',
      mapsUrl: 'https://maps.google.com',
      openingHours: 'Mon - Sun: 9:00 AM – 10:00 PM',
      coverUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1200&q=80',
      primaryColor: ref.designSignature.palette.accentColor,
      secondaryColor: ref.designSignature.palette.secondaryAccent,
      fontFamily: ref.designSignature.typography.headlineFont.split(',')[0].replace(/['"]/g, '').trim(),
      bookingType: (ref.designSignature.bookingStyle as any) || 'whatsapp_order',
      bookingCtaLabel: (ref.designSignature.bookingStyle as string) === 'reservation_party' ? 'Book Table' : 'Order on WhatsApp',
      specialBadge: ref.designSignature.vibeTag,
      referenceSiteId: ref.id,
      referenceSiteName: ref.name,
      referenceSiteUrl: ref.url,
      referenceFeatures: ref.features,
      designSignature: ref.designSignature,
      status: 'published',
      pricingPlanId: 'professional',
      amountPaid: 1499,
      paymentStatus: 'paid',
      items: [
        {
          id: 'item-demo-1',
          name: `${cat.categoryName} Signature Offering`,
          description: `Premium quality service modeled on ${ref.name} standard specifications.`,
          price: 499,
          discountPrice: 399,
          category: 'Signature',
          imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80',
          isAvailable: true,
          isFeatured: true
        },
        {
          id: 'item-demo-2',
          name: 'Deluxe Service Package',
          description: 'Comprehensive package with all amenities and quick confirmation.',
          price: 899,
          category: 'Popular',
          imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80',
          isAvailable: true
        },
        {
          id: 'item-demo-3',
          name: 'Express Consultation & Order',
          description: 'Fast priority processing directly over WhatsApp.',
          price: 299,
          category: 'Quick Booking',
          imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
          isAvailable: true
        }
      ],
      offers: [
        {
          id: 'offer-demo-1',
          title: 'Special Introductory Offer 15% Off',
          description: `Mention ${ref.name} reference styling for launch discount.`,
          discountPercent: 15,
          couponCode: 'RAO15',
          startDate: '2026-01-01',
          endDate: '2026-12-31',
          isActive: true
        }
      ],
      gallery: [
        {
          id: 'gal-1',
          imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
          title: 'Interior & Experience',
          category: 'interior'
        },
        {
          id: 'gal-2',
          imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
          title: 'Work & Presentation',
          category: 'general'
        }
      ],
      sections: [
        { id: 'about', title: 'About Us', isEnabled: true, order: 1 },
        { id: 'offers', title: 'Special Offers', isEnabled: true, order: 2 },
        { id: 'menu', title: 'Products & Services', isEnabled: true, order: 3 },
        { id: 'gallery', title: 'Gallery', isEnabled: true, order: 4 },
        { id: 'timings', title: 'Hours & Location', isEnabled: true, order: 5 },
        { id: 'contact', title: 'Contact & Bookings', isEnabled: true, order: 6 }
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setPreviewModalSite(previewSite);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#14162B] font-['Inter']">
      {/* Hero Header */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-[#E8E7F0]/60 via-[#FAFAF8] to-[#FAFAF8] border-b border-[#E8E7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>130 Business Categories · 396 Reference Websites</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#14162B] font-['Fraunces'] tracking-tight">
            Reference-Driven Website Directory
          </h1>

          <p className="mt-3 text-xs sm:text-sm text-[#474B64] leading-relaxed max-w-2xl mx-auto">
            Choose any reference website below. Our engineers study the live reference site's exact typography, color palette, navigation style, and catalog structure to build your website.
          </p>

          {/* View Mode Switcher Pills */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <button
              onClick={() => setViewMode('references')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                viewMode === 'references'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>130 Category References ({categoryReferences.length})</span>
            </button>

            <button
              onClick={() => setViewMode('demos')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                viewMode === 'demos'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Created Websites ({websites.length})</span>
            </button>
          </div>

          {/* Search Input */}
          <div className="mt-6 max-w-xl mx-auto relative">
            <Search className="w-4 h-4 text-[#8E92A8] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={
                viewMode === 'references'
                  ? 'Search 130 categories or 396 reference URLs (e.g. Blinkit, Blue Tokai, Salon, Clinic)...'
                  : 'Find created business websites...'
              }
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 text-xs sm:text-sm rounded-2xl border border-[#E8E7F0] bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4338CA]"
            />
          </div>
        </div>
      </section>

      {/* Group / Category Filter Chips */}
      <section className="sticky top-14 sm:top-18 z-20 bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#E8E7F0] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth flex-nowrap pb-1">
            {viewMode === 'references' ? (
              categoryGroups.map(grp => (
                <button
                  key={grp}
                  onClick={() => setSelectedGroup(grp)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold capitalize whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                    selectedGroup === grp
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-white text-[#474B64] hover:bg-[#E8E7F0] border border-[#E8E7F0]'
                  }`}
                >
                  {grp === 'all' ? 'All Groups (130 Categories)' : grp}
                </button>
              ))
            ) : (
              ['all', 'cafe', 'restaurant', 'travel', 'salon', 'clinic', 'retail', 'gym', 'realestate', 'coaching', 'services'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedDemoCat(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold capitalize whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                    selectedDemoCat === cat
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white text-[#474B64] hover:bg-[#E8E7F0] border border-[#E8E7F0]'
                  }`}
                >
                  {cat === 'all' ? 'All Demos' : cat}
                </button>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {viewMode === 'references' ? (
          /* TAB 1: 130 Category References & 396 Reference Websites */
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-500">
                Showing <strong className="text-slate-900">{filteredCategoryReferences.length}</strong> of{' '}
                <strong>{categoryReferences.length}</strong> business categories ({filteredCategoryReferences.length * 3} reference websites)
              </p>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-indigo-600 hover:underline cursor-pointer"
                >
                  Clear Search
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredCategoryReferences.map(cat => (
                <div
                  key={cat.id}
                  className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-100">
                            {cat.group}
                          </span>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-slate-600">
                            {cat.industry}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">{cat.categoryName}</h3>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      <strong className="text-slate-800">Features to Study:</strong> {cat.featuresToStudy}
                    </p>

                    {/* 3 Reference Websites */}
                    <div className="space-y-3 mb-5">
                      {cat.references.map((ref, idx) => (
                        <div
                          key={ref.id}
                          className="p-3.5 rounded-2xl border border-slate-100 bg-slate-50/70 hover:bg-slate-50 transition-colors"
                        >
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <div className="flex items-center gap-2 min-w-0">
                              <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0">
                                {idx + 1}
                              </span>
                              <span className="font-bold text-xs text-slate-900 truncate">
                                {ref.name}
                              </span>
                              <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-200/70 text-slate-700 shrink-0">
                                {ref.designSignature.vibeTag}
                              </span>
                            </div>

                            <a
                              href={ref.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 hover:text-indigo-800 hover:underline shrink-0"
                            >
                              <span>Visit Live Ref</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>

                          <p className="text-[11px] text-slate-600 leading-relaxed mb-2">
                            {ref.features}
                          </p>

                          {/* Design Signature Preview Strip */}
                          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-200/60 text-[10px] font-mono text-slate-500">
                            <div className="flex items-center gap-1.5">
                              <span>Palette:</span>
                              <span
                                className="w-3 h-3 rounded-full border border-slate-300 shadow-xs inline-block"
                                style={{ backgroundColor: ref.designSignature.palette.accentColor }}
                                title="Accent Color"
                              />
                              <span
                                className="w-3 h-3 rounded-full border border-slate-300 shadow-xs inline-block"
                                style={{ backgroundColor: ref.designSignature.palette.secondaryAccent }}
                                title="Secondary Color"
                              />
                              <span
                                className="w-3 h-3 rounded-full border border-slate-300 shadow-xs inline-block"
                                style={{ backgroundColor: ref.designSignature.palette.baseBg }}
                                title="Background Color"
                              />
                            </div>

                            <div>
                              Font: <strong className="text-slate-700">{ref.designSignature.typography.fontPairingLabel}</strong>
                            </div>

                            <button
                              onClick={() => handlePreviewReference(cat, ref)}
                              className="px-2.5 py-1 bg-white hover:bg-indigo-600 hover:text-white text-indigo-700 text-[10px] font-bold rounded-lg border border-indigo-200 transition-colors cursor-pointer flex items-center gap-1"
                            >
                              <Eye className="w-3 h-3" />
                              <span>Preview Demo #{idx + 1}</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-mono">
                      Category ID: {cat.id}
                    </span>

                    <button
                      onClick={onOpenOrderModal}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Request Website for {cat.categoryName}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* TAB 2: Ready-Built Websites */
          <div>
            {/* EXACTLY THREE CATEGORIES: Cafes, Restaurants, Tour & Travel */}
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="inline-flex items-center gap-1 sm:gap-2 p-1.5 bg-white rounded-2xl border border-[#D5D4E3] shadow-xs">
                {/* 1. CAFES */}
                <button
                  onClick={() => {
                    const next = referenceCategoryFilter === 'cafes' ? 'all' : 'cafes';
                    setReferenceCategoryFilter(next);
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
              </div>

              {referenceCategoryFilter !== 'all' && (
                <div className="mt-2 flex items-center gap-2 text-xs text-slate-500 font-['Inter']">
                  <span>Filtered by: <strong className="text-slate-800 capitalize">{referenceCategoryFilter === 'travel' ? 'Tour & Travel' : referenceCategoryFilter === 'salon' ? 'Salon' : referenceCategoryFilter === 'jewellery' ? 'Jewellery' : referenceCategoryFilter === 'beauty_cosmetics' ? 'Beauty & Cosmetics' : referenceCategoryFilter === 'gym_fitness' ? 'Gym & Fitness' : referenceCategoryFilter === 'web_tools' ? 'Web Tools / Utilities' : referenceCategoryFilter}</strong></span>
                  <span>•</span>
                  <button
                    onClick={() => setReferenceCategoryFilter('all')}
                    className="text-[#4338CA] hover:underline font-bold cursor-pointer"
                  >
                    Clear filter (Show all {websites.length})
                  </button>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between mb-6">
              <p className="text-xs text-slate-500">
                Showing <strong className="text-slate-900">{filteredWebsites.length}</strong> created business websites
              </p>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-indigo-600 hover:underline cursor-pointer"
                >
                  Clear Search
                </button>
              )}
            </div>

            {filteredWebsites.length === 0 ? (
              <div className="text-center py-20 px-6 bg-white rounded-3xl border border-[#E8E7F0] max-w-lg mx-auto shadow-xs space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-[#4338CA] mx-auto flex items-center justify-center">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-['Fraunces']">
                  Website Catalog Clean & Ready
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-['Inter']">
                  All previous demo websites and sample templates have been removed. You have a fresh slate to create new business websites from scratch.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => setActiveView('wizard')}
                    className="w-full sm:w-auto px-5 py-2.5 bg-[#4338CA] hover:bg-[#3730A3] text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>Create with Mobile Wizard</span>
                  </button>
                  <button
                    onClick={() => setViewMode('references')}
                    className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                  >
                    <span>Browse 130 Category References</span>
                  </button>
                </div>
              </div>
            ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWebsites.map(site => (
                <div
                  key={site.slug}
                  className="bg-white rounded-3xl overflow-hidden border border-[#E8E7F0] shadow-sm hover:shadow-md hover:border-indigo-400 transition-all flex flex-col justify-between group"
                >
                  {/* Cover */}
                  <div
                    onClick={() => setPreviewModalSite(site)}
                    className="relative aspect-16/10 bg-slate-900 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={site.coverUrl || site.logoUrl}
                      alt={site.businessName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-md bg-slate-950/85 backdrop-blur-xs text-white text-[10px] font-bold">
                        {site.category.replace('_', ' ')}
                      </span>
                      {site.referenceSiteName && (
                        <span className="px-2.5 py-0.5 rounded-md bg-indigo-600 text-white text-[10px] font-bold">
                          {site.referenceSiteName}
                        </span>
                      )}
                    </div>

                    <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          setPreviewModalSite(site);
                        }}
                        className="p-1.5 rounded-lg bg-black/60 backdrop-blur-xs text-white hover:bg-black/90 transition-colors shadow-xs cursor-pointer"
                        title="Interactive Device Preview"
                      >
                        <Smartphone className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          setQrModalSite(site);
                        }}
                        className="p-1.5 rounded-lg bg-black/60 backdrop-blur-xs text-white hover:bg-black/90 transition-colors shadow-xs cursor-pointer"
                        title="Scan Counter QR Code"
                      >
                        <QrCode className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1 font-['Fraunces']">
                        {site.businessName}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                        {site.tagline}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-2.5 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-indigo-600 shrink-0" />
                        <span className="truncate">{site.address}</span>
                      </p>
                    </div>

                    {/* Preview and Public Order Buttons */}
                    <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                      <button
                        onClick={() => setActiveView('site', site.slug)}
                        className="flex-1 min-h-[44px] px-3.5 py-2 rounded-xl bg-[#14162B] hover:bg-[#4338CA] text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                        <span>{site.bookingCtaLabel || 'Open Website'}</span>
                      </button>

                      <button
                        onClick={() => setPreviewModalSite(site)}
                        className="min-h-[44px] px-3 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                        title="Interactive Device Preview"
                      >
                        <Eye className="w-4 h-4 text-slate-500" />
                        <span className="hidden sm:inline">Preview</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            )}
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-16 p-8 bg-gradient-to-r from-[#14162B] to-[#232742] text-white rounded-3xl text-center max-w-3xl mx-auto shadow-xl">
          <h3 className="text-2xl font-black font-['Fraunces']">
            Want a Reference-Driven Website for Your Business?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#D5D4E3] max-w-xl mx-auto">
            Tell us about your business, pick any of our 130 category references, and our development team will contact you within 24 hours to build and publish your site.
          </p>
          <button
            onClick={onOpenOrderModal}
            className="mt-6 px-6 py-3 bg-[#FF6B4A] hover:bg-[#F25A38] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tell Us About Your Business</span>
          </button>
        </div>
      </main>

      {/* QR Code Modal */}
      {qrModalSite && (
        <QRCodeModal
          isOpen={Boolean(qrModalSite)}
          onClose={() => setQrModalSite(null)}
          site={qrModalSite}
        />
      )}

      {/* Dedicated Interactive Template Preview Modal */}
      <TemplatePreviewModal
        site={previewModalSite}
        isOpen={Boolean(previewModalSite)}
        onClose={() => setPreviewModalSite(null)}
        onUseDesign={() => {
          setPreviewModalSite(null);
          onOpenOrderModal();
        }}
      />
    </div>
  );
};
