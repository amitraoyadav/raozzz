import React from 'react';
import { globalPlannerssConfig } from '../../config/globalPlannerssConfig';

export const GlobalManifesto: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#0D0B0A] text-stone-200 border-t border-b border-stone-800 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-serif uppercase tracking-[0.25em] text-[#C19A4B] mb-4">
          A different kind of wedding company
        </p>

        <p className="font-serif text-2xl sm:text-4xl md:text-5xl font-light text-white leading-tight max-w-2xl mx-auto mb-8">
          Most wedding planners manage weddings. We carry them.
        </p>

        <div className="w-16 h-0.5 bg-[#C19A4B]/40 mx-auto mb-8" />

        <p className="font-sans text-base sm:text-lg md:text-xl text-stone-300 font-light leading-relaxed max-w-3xl mx-auto mb-6">
          We absorb the pressure, simplify the decisions and organise the chaos — so the people at the heart of the celebration can be fully present in every moment that matters.
        </p>

        <p className="text-xs text-stone-500 font-sans max-w-xl mx-auto leading-relaxed">
          {globalPlannerssConfig.SITE_NAME} is a luxury wedding planner in Gurugram, Delhi NCR, established in {globalPlannerssConfig.ESTABLISHED_YEAR}. 
          220+ destination weddings. 60 a year. Fees published, from ₹2.5L.
        </p>
      </div>
    </section>
  );
};
