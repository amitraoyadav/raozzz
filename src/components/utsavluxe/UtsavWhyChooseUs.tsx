import React from 'react';
import { UTSAV_BUSINESS_CONFIG } from '../../data/utsavLuxeData';

export const UtsavWhyChooseUs: React.FC = () => {
  const comparisonRows = [
    {
      feature: 'Pre-Event Visual Guarantee',
      utsav: 'Photorealistic 3D CAD renders of your exact venue with interactive lighting simulation',
      traditional: 'Vague phone screenshots, outdated printed catalogs, and verbal promises'
    },
    {
      feature: 'Pricing Transparency',
      traditional: 'Lump-sum quotations with hidden 20-30% vendor kickbacks and surprise invoices',
      utsav: '100% itemized cost sheets (flower stems, truss lengths, light counts) with zero markups'
    },
    {
      feature: 'Floral & Decor Supply Chain',
      traditional: 'Local middlemen florists buying day-old mandi blooms at inflated prices',
      utsav: 'Direct procurement from Dutch, Bangalore & Kolkata cold-chain floral farms (22% cheaper)'
    },
    {
      feature: 'Wedding Day Coordination',
      traditional: 'Single overwhelmed decorator running between events with poor communication',
      utsav: 'Assigned Senior Director + 14-member squad equipped with licensed walkie-talkies'
    },
    {
      feature: 'Emergency & Weather Backup',
      traditional: 'Panic when rain hits outdoor lawn; delayed baraat missing auspicious mahurat',
      utsav: 'Pre-planned weatherproof Plan B structures, backup generators & medical bridal kit'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-stone-100 text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E05A47]/10 text-[#E05A47] text-xs font-bold uppercase tracking-wider mb-3">
            The Modern Standard
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 tracking-tight">
            Why India Trusts UTSAV LUXE
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            We built UTSAV LUXE to replace the opaque, stressful wedding planning industry 
            with precision engineering, technological transparency, and soulful hospitality.
          </p>
        </div>

        {/* 4 Pillars Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {UTSAV_BUSINESS_CONFIG.guarantees.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#E05A47]/10 text-[#E05A47] flex items-center justify-center font-bold text-lg font-serif">
                  0{idx + 1}
                </div>
                <h4 className="font-serif text-lg font-bold text-stone-900 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm">
          <div className="p-6 sm:p-8 bg-stone-950 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF8D7B]">
                Head-to-Head Comparison
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">
                UTSAV LUXE vs Traditional Planners
              </h3>
            </div>
            <span className="text-xs text-stone-400">
              Honest breakdown of industry standards
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-500 font-bold uppercase tracking-wider text-[11px]">
                  <th className="py-4 px-6 w-1/4">Key Dimension</th>
                  <th className="py-4 px-6 w-3/8 text-[#E05A47] bg-[#E05A47]/5 font-bold">
                    UTSAV LUXE Platform
                  </th>
                  <th className="py-4 px-6 w-3/8 text-stone-600">
                    Traditional Local Decorators
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-stone-50/60 transition-colors">
                    <td className="py-4 px-6 font-bold text-stone-900">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 bg-[#E05A47]/5 font-medium text-stone-900">
                      <div className="flex items-start gap-2">
                        <span className="text-[#E05A47] font-bold text-sm">✓</span>
                        <span>{row.utsav}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-stone-500">
                      <div className="flex items-start gap-2">
                        <span className="text-red-400 font-bold text-sm">✕</span>
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
