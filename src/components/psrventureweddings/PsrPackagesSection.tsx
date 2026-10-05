import React from 'react';
import { 
  Crown, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  Users, 
  Wallet,
  Clock,
  PlusCircle
} from 'lucide-react';
import { PSR_PACKAGES, WeddingPackageItem } from '../../data/psrWeddingsData';

interface PsrPackagesSectionProps {
  onOpenConsultation: (packageName?: string) => void;
}

export const PsrPackagesSection: React.FC<PsrPackagesSectionProps> = ({
  onOpenConsultation
}) => {
  return (
    <section id="packages-section" className="py-20 lg:py-28 bg-[#120306] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#DFBE78]/30">
            <Crown className="w-3 h-3 text-[#DFBE78]" />
            <span className="text-[11px] font-bold text-[#DFBE78] uppercase tracking-widest">
              Curated Luxury Tiers
            </span>
          </div>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Transparent Wedding Packages
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
            Every wedding is uniquely tailored to your family’s traditions. These curated benchmark packages illustrate typical deliverables, scopes, and budget expectations across India's top destination formats.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PSR_PACKAGES.slice(0, 3).map((pkg, idx) => {
            const isFeatured = idx === 0;
            return (
              <div
                key={pkg.id}
                className={`rounded-3xl border flex flex-col justify-between overflow-hidden transition-all duration-300 relative ${
                  isFeatured
                    ? 'bg-[#23070C] border-[#DFBE78] shadow-2xl scale-102 lg:-translate-y-2'
                    : 'bg-[#190408] border-[#C5A059]/30 shadow-xl hover:border-[#DFBE78]/60'
                }`}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="bg-gradient-to-r from-[#C5A059] to-[#DFBE78] text-[#1A0509] font-bold text-[10px] uppercase tracking-widest py-1.5 text-center shadow-md">
                    ★ MOST REQUESTED PALACE EXPERIENCE
                  </div>
                )}

                {/* Package Header */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[11px] text-[#DFBE78] font-bold uppercase tracking-wider block">
                      {pkg.tag}
                    </span>
                    <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-white leading-tight">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-stone-300 font-light">
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Budget & Duration Highlight */}
                  <div className="p-4 rounded-2xl bg-black/40 border border-[#C5A059]/20 space-y-2">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-stone-400">Est. Investment:</span>
                      <span className="text-lg font-bold text-[#DFBE78] font-['Playfair_Display',serif]">
                        {pkg.estimatedBudget}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-stone-300 border-t border-stone-800/80 pt-2">
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#DFBE78]" />
                        {pkg.guestBracket}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#DFBE78]" />
                        {pkg.duration}
                      </span>
                    </div>
                  </div>

                  {/* Inclusions List */}
                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-white block">
                      What Is Included in Scope:
                    </span>
                    <ul className="space-y-2 text-xs text-stone-300 font-light">
                      {pkg.inclusions.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#DFBE78] shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recommended Destinations */}
                  <div className="pt-3 border-t border-stone-800 space-y-1.5">
                    <span className="text-[10px] uppercase font-bold text-[#DFBE78] tracking-wider block">
                      Ideal Locations:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.recommendedDestinations.map((d, di) => (
                        <span key={di} className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-stone-300 border border-white/10">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="p-6 bg-black/40 border-t border-stone-800">
                  <button
                    onClick={() => onOpenConsultation(pkg.name)}
                    className={`w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer ${
                      isFeatured
                        ? 'bg-gradient-to-r from-[#C5A059] to-[#DFBE78] text-[#1A0509] hover:brightness-110'
                        : 'bg-white/10 hover:bg-[#C5A059] hover:text-[#1A0509] text-white border border-white/20'
                    }`}
                  >
                    <span>Customise This Package</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Additional 2 Packages Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#1C060A] border border-[#C5A059]/25 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs uppercase font-bold tracking-wider text-[#DFBE78] block">
              Also Available: Wilderness Romance & Delhi NCR Regalia Packages
            </span>
            <p className="text-xs sm:text-sm text-stone-300 font-light">
              Explore our boutique forest packages for Jim Corbett or high-capacity 500-1,000+ guest farmsteads in the National Capital Region.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation('Custom Bespoke Wedding Package')}
            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs font-bold uppercase tracking-wider shrink-0 cursor-pointer"
          >
            Request Bespoke Blueprint
          </button>
        </div>
      </div>
    </section>
  );
};
