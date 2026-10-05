import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Eye, 
  CheckCircle2, 
  Layers, 
  Filter,
  Calendar
} from 'lucide-react';
import { SAMAROH_PACKAGES, DecorThemePackage } from '../../data/samarohLuxeData';
import { SamarohPackageDetailModal } from './SamarohPackageDetailModal';

interface SamarohPackagesSectionProps {
  onOpenConsultation: (packageName?: string) => void;
  initialFilter?: string;
}

export const SamarohPackagesSection: React.FC<SamarohPackagesSectionProps> = ({
  onOpenConsultation,
  initialFilter = 'all'
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialFilter);
  const [selectedPackage, setSelectedPackage] = useState<DecorThemePackage | null>(null);

  const categories = [
    { id: 'all', label: 'All Themes' },
    { id: 'mandap', label: 'Mandap & Muhurtham' },
    { id: 'reception', label: 'Grand Reception' },
    { id: 'sangeet', label: 'Sangeet & Cocktail' },
    { id: 'haldi', label: 'Haldi & Chooda' },
    { id: 'mehendi', label: 'Garden Mehendi' },
    { id: 'all_inclusive', label: '3-Day All-Inclusive' }
  ];

  const filteredPackages = useMemo(() => {
    if (activeCategory === 'all') return SAMAROH_PACKAGES;
    return SAMAROH_PACKAGES.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="packages-section" className="py-20 lg:py-28 bg-[#181514] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E06D53]/15 border border-[#E06D53]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#E06D53]" />
            <span className="text-[11px] font-bold text-[#E06D53] uppercase tracking-wider">
              Transparent Curated Themes
            </span>
          </div>
          <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Curated Wedding Decor Packages
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
            Every package is 100% itemized and ready for 3D customization. Explore starting prices, inclusions, and photo-realistic visualizers.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#E06D53] text-white shadow-md'
                  : 'bg-stone-850 text-stone-300 hover:bg-stone-800 hover:text-white border border-stone-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map(pkg => (
            <div
              key={pkg.id}
              className="bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden hover:border-stone-700 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Visual Header */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pkg.primaryImage}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-stone-200 border border-white/10">
                      {pkg.categoryLabel}
                    </span>
                  </div>

                  {/* Starting Price Pill */}
                  <div className="absolute bottom-4 right-4">
                    <span className="text-sm font-bold text-white bg-[#E06D53] px-3.5 py-1 rounded-xl shadow-lg">
                      {pkg.priceFormatted}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-['Fraunces',serif] text-xl font-bold text-white group-hover:text-[#E06D53] transition-colors">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-stone-400 font-light line-clamp-2 leading-relaxed">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Inclusions Sneak Peek */}
                  <div className="space-y-2 border-t border-stone-800 pt-3">
                    <span className="text-[11px] font-bold text-stone-300 uppercase tracking-wider block">
                      Included Elements:
                    </span>
                    <ul className="space-y-1.5 text-xs text-stone-300">
                      {pkg.highlights.slice(0, 3).map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Action Buttons */}
              <div className="p-6 pt-0 flex items-center gap-3 border-t border-stone-850">
                <button
                  onClick={() => setSelectedPackage(pkg)}
                  className="flex-1 min-h-[42px] px-3 py-2 rounded-xl bg-stone-800 hover:bg-stone-750 text-stone-200 text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5 text-stone-400" />
                  <span>View 3D Specs</span>
                </button>

                <button
                  onClick={() => onOpenConsultation(pkg.title)}
                  className="flex-1 min-h-[42px] px-3 py-2 rounded-xl bg-[#E06D53] hover:bg-[#C8523B] text-white text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-md"
                >
                  <span>Book Theme</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Package Detail Modal */}
      <SamarohPackageDetailModal
        packageItem={selectedPackage}
        onClose={() => setSelectedPackage(null)}
        onOpenConsultation={onOpenConsultation}
      />
    </section>
  );
};
