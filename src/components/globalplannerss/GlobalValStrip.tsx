import React from 'react';
import { VALUE_PILLARS } from '../../data/globalPlannerssData';

export const GlobalValStrip: React.FC = () => {
  return (
    <section className="bg-[#171411] py-12 border-b border-stone-800 text-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-stone-800/80">
          {VALUE_PILLARS.map((item, idx) => (
            <div key={idx} className={`pt-4 sm:pt-0 ${idx > 0 ? 'sm:pl-4' : ''} flex flex-col justify-start`}>
              <span className="font-serif text-base sm:text-lg font-semibold text-[#E5D7B7] block mb-1">
                {item.title}
              </span>
              <span className="text-xs text-stone-400 font-sans leading-relaxed">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
