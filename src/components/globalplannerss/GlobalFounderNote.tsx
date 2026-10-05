import React from 'react';
import { globalPlannerssConfig } from '../../config/globalPlannerssConfig';

export const GlobalFounderNote: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#0B0908] text-stone-200 border-t border-b border-stone-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
        {/* Founder Crest */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-[#C19A4B]/50 flex items-center justify-center bg-gradient-to-br from-[#271F16] to-[#120F0D] text-[#E5D7B7] font-serif font-bold text-3xl shrink-0 shadow-2xl">
          GP
        </div>

        {/* Narrative Copy */}
        <div className="space-y-4 text-center md:text-left">
          <p className="text-xs font-serif uppercase tracking-[0.25em] text-[#C19A4B]">
            A note from the founder
          </p>

          <p className="font-serif text-lg sm:text-2xl font-light text-stone-100 italic leading-relaxed">
            “We take on sixty weddings a year and not one more, because I read every enquiry personally — and I intend to keep it that way. The whole company exists for one moment: your family, present at your own wedding, carrying nothing but the celebration.”
          </p>

          <p className="text-xs font-sans uppercase tracking-widest text-[#E5D7B7] pt-2">
            Founding Director · {globalPlannerssConfig.SITE_NAME}
          </p>
        </div>
      </div>
    </section>
  );
};
