import React from 'react';

export const UtsavProcess: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Discovery & 3D Visualization',
      subtitle: 'Laser Recce & CAD Blueprints',
      desc: 'We visit your selected venue, record exact laser dimensions, and build photorealistic 3D CAD renders of your mandap, stage, and entrance. You see the setup before spending a rupee on fabrication.',
      badge: 'Within 5 Days'
    },
    {
      step: '02',
      title: 'Transparent Itemized Costing',
      subtitle: 'Zero Hidden Markups',
      desc: 'We provide an open-book spreadsheet detailing every single floral bunch, truss meter, spotlight, and catering counter. Complete flexibility to scale up or down without penalty.',
      badge: 'Fixed Price Lock'
    },
    {
      step: '03',
      title: 'Artisan Build & Rehearsals',
      subtitle: 'Floral Trials & Sound Checks',
      desc: 'Our in-house fabrication teams construct custom archways while you attend floral tasting sessions. Sangeet choreographers and sound engineers run full rehearsal drills.',
      badge: 'Pre-Event Trial'
    },
    {
      step: '04',
      title: 'Flawless On-Ground Execution',
      subtitle: '14-Member Operations Squad',
      desc: 'Equipped with licensed walkie-talkies, our operations squad orchestrates guest hospitality, manages baraat timing to the minute, and leaves your families free to celebrate.',
      badge: 'Minute-by-Minute'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E05A47]/10 text-[#E05A47] text-xs font-bold uppercase tracking-wider mb-3">
            The Journey
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 tracking-tight">
            How We Bring Your Dream Wedding to Life
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            A structured, tech-enabled 4-phase planning methodology designed to replace anxiety with sheer celebration.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((st, i) => (
            <div
              key={st.step}
              className="relative bg-stone-50 rounded-2xl p-6 sm:p-7 border border-stone-200/80 hover:border-stone-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-4xl font-extrabold text-[#E05A47]/20 group-hover:text-[#E05A47]/40">
                    {st.step}
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-white text-stone-700 border border-stone-200">
                    {st.badge}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-[#E05A47] uppercase tracking-wider block">
                    {st.subtitle}
                  </span>
                  <h4 className="font-serif text-xl font-bold text-stone-900 mt-1">
                    {st.title}
                  </h4>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200/60 mt-4 flex items-center gap-2 text-[11px] font-semibold text-stone-500">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E05A47]" />
                <span>Phase {i + 1} of 4</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
