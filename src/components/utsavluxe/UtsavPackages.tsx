import React from 'react';
import { UTSAV_PACKAGE_PLANS, UtsavPackagePlan } from '../../data/utsavLuxeData';

interface UtsavPackagesProps {
  onSelectPackage: (pkg: UtsavPackagePlan) => void;
  onOpenCalculator: () => void;
}

export const UtsavPackages: React.FC<UtsavPackagesProps> = ({
  onSelectPackage,
  onOpenCalculator
}) => {
  return (
    <section id="packages" className="py-16 sm:py-24 bg-white text-stone-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E05A47]/10 text-[#E05A47] text-xs font-bold uppercase tracking-wider mb-3">
            Transparent Pricing Plans
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 tracking-tight">
            Curated Wedding Packages
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            Choose a structured package or customize every detail in our calculator. 
            All plans include photorealistic 3D CAD blueprints and in-house floral fabrication.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {UTSAV_PACKAGE_PLANS.map(pkg => {
            const isPopular = pkg.isPopular;
            return (
              <div
                key={pkg.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? 'bg-stone-950 text-white shadow-2xl ring-2 ring-[#E05A47] scale-[1.02] lg:-translate-y-2'
                    : 'bg-stone-50 text-stone-900 border border-stone-200 hover:shadow-lg'
                }`}
              >
                {/* Popular Pill */}
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#E05A47] text-white shadow-md">
                    {pkg.badge}
                  </div>
                )}

                <div className="space-y-6">
                  
                  <div>
                    <h3 className="font-serif text-2xl font-bold">
                      {pkg.name}
                    </h3>
                    <p className={`text-xs mt-1 leading-relaxed ${isPopular ? 'text-stone-400' : 'text-stone-500'}`}>
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className={`p-4 rounded-xl ${isPopular ? 'bg-white/5 border border-white/10' : 'bg-white border border-stone-200'}`}>
                    <span className={`text-[10px] font-bold uppercase tracking-wider block ${isPopular ? 'text-[#FF8D7B]' : 'text-[#E05A47]'}`}>
                      Starting From
                    </span>
                    <div className="font-serif text-3xl font-bold mt-0.5">
                      {pkg.priceDisplay}
                    </div>
                    <div className={`text-[11px] mt-1 ${isPopular ? 'text-stone-400' : 'text-stone-500'}`}>
                      {pkg.estimatedBudget}
                    </div>
                  </div>

                  {/* Quick Meta */}
                  <div className={`space-y-1.5 text-xs py-2 border-y ${isPopular ? 'border-white/10 text-stone-300' : 'border-stone-200 text-stone-700'}`}>
                    <div className="flex justify-between">
                      <span className="opacity-70">Guest Capacity:</span>
                      <span className="font-semibold">{pkg.guestRange}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-70">Ceremonies:</span>
                      <span className="font-semibold">{pkg.eventFunctions}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5">
                    <span className={`text-xs font-bold uppercase tracking-wider block ${isPopular ? 'text-white' : 'text-stone-900'}`}>
                      What’s Included:
                    </span>
                    <ul className={`space-y-2 text-xs ${isPopular ? 'text-stone-300' : 'text-stone-600'}`}>
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#E05A47] font-bold">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Bottom CTA */}
                <div className="pt-8 space-y-2">
                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className={`w-full py-3.5 px-4 rounded-xl font-semibold text-sm transition-all shadow-md ${
                      isPopular
                        ? 'bg-gradient-to-r from-[#E05A47] to-[#C94330] hover:from-[#C94330] hover:to-[#B33524] text-white shadow-[#E05A47]/30 hover:scale-[1.02]'
                        : 'bg-stone-900 hover:bg-stone-950 text-white'
                    }`}
                  >
                    Select {pkg.name}
                  </button>

                  <button
                    onClick={onOpenCalculator}
                    className={`w-full py-2 text-xs font-medium text-center transition-colors ${
                      isPopular ? 'text-stone-400 hover:text-white' : 'text-stone-500 hover:text-stone-900'
                    }`}
                  >
                    Customize in Cost Estimator →
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
