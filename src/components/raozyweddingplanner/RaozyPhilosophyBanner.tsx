import React from 'react';
import { raozyConfig } from '../../config/raozyWeddingConfig';

export const RaozyPhilosophyBanner: React.FC = () => {
  const comparisonRows = [
    {
      feature: 'Annual Wedding Bookings',
      massPlanners: '200 to 300+ events per year (Assembly line model)',
      raozy: 'Strictly capped at 60 celebrations per year (Absolute exclusivity)'
    },
    {
      feature: 'Who Leads Your Wedding',
      massPlanners: 'Junior coordinators, interns, and event-day freelancers',
      raozy: 'Senior Founding Director and permanent 18-member operations squad'
    },
    {
      feature: 'Decor & Stage Production',
      massPlanners: 'Outsourced to external tent vendors with 25–35% broker markup',
      raozy: 'In-house 25,000 sq.ft. atelier (welding, carpentry, florals & furniture)'
    },
    {
      feature: 'Design Preview Guarantee',
      massPlanners: 'Generic Pinterest moodboards; actual execution looks vastly different',
      raozy: 'Photorealistic 3D CAD virtual blueprints & physical studio mockups'
    },
    {
      feature: 'Fee Structure & Commission',
      massPlanners: 'Secret 15–30% supplier kickbacks and inflated billing',
      raozy: '100% open-book management fee; all wholesale savings passed directly to you'
    },
    {
      feature: 'Fresh Floral Cold-Chain',
      massPlanners: 'Bought from local wholesale mandi on the morning; prone to wilting',
      raozy: 'Temperature-controlled cold vans and direct farm imports (Holland & Bengaluru)'
    },
    {
      feature: 'Tight Timeline Readiness',
      massPlanners: 'Paralyzed by unexpected venue delays or short lead times',
      raozy: 'Proven 15-day emergency takeover execution with full in-house asset control'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#12100E] text-stone-200 border-t border-b border-stone-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-serif tracking-[0.25em] text-[#DFC082] uppercase block mb-3">
            Our Core Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight mb-6">
            The 60-Weddings-A-Year Manifesto
          </h2>
          <p className="text-stone-400 font-sans text-sm sm:text-base leading-relaxed">
            In an industry obsessed with high volume and commercial turnover, Raozy made a deliberate, uncompromising vow: 
            <strong className="text-stone-200 font-medium"> we will never plan more than 60 weddings in a calendar year</strong>. 
            Because creating once-in-a-lifetime memories demands undivided creative obsession.
          </p>
        </div>

        {/* 3 Pillars of Exclusivity */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#181512] p-8 rounded-xl border border-stone-800 hover:border-[#DFC082]/40 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-[#DFC082]/10 border border-[#DFC082]/30 flex items-center justify-center text-[#DFC082] mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-semibold text-white mb-3">Dedicated Senior Director</h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              You are never handed down to inexperienced interns or day-hire freelancers. A Senior Wedding Director leads your planning sessions, walks every venue recce, and remains on-site with walkie-talkie until the final farewell.
            </p>
          </div>

          <div className="bg-[#181512] p-8 rounded-xl border border-stone-800 hover:border-[#DFC082]/40 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-[#DFC082]/10 border border-[#DFC082]/30 flex items-center justify-center text-[#DFC082] mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-semibold text-white mb-3">In-House 25,000 Sq.Ft. Atelier</h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              We do not act as middlemen brokers. Our Gurugram production facility houses precision metal fabrication, woodworking, imported floral cold lockers, and 1,000+ luxury furniture pieces for direct quality and cost control.
            </p>
          </div>

          <div className="bg-[#181512] p-8 rounded-xl border border-stone-800 hover:border-[#DFC082]/40 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-[#DFC082]/10 border border-[#DFC082]/30 flex items-center justify-center text-[#DFC082] mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-semibold text-white mb-3">100% Open-Book Transparency</h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Zero secret markups. Zero venue kickbacks. All hotel room buyouts, caterers, sound contractors, and artists are contracted directly at negotiated wholesale rates with full accounting transparency.
            </p>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-[#161310] rounded-2xl border border-stone-800 overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-8 bg-gradient-to-r from-[#201A15] to-[#161310] border-b border-stone-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-white">
                Why Discerning Families Choose Raozy
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 mt-1">
                A direct comparison between high-volume commercial agencies and our bespoke atelier approach.
              </p>
            </div>
            <span className="px-3 py-1 bg-[#DFC082]/15 text-[#DFC082] border border-[#DFC082]/30 rounded text-xs font-serif tracking-wider uppercase">
              The Raozy Distinction
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-stone-800 bg-[#14110E] text-stone-400 uppercase tracking-wider text-[11px]">
                  <th className="py-4 px-6 font-semibold w-1/4">Operational Parameter</th>
                  <th className="py-4 px-6 font-semibold w-3/8 text-red-300/80 bg-red-950/10">
                    Conventional Mass Wedding Agencies
                  </th>
                  <th className="py-4 px-6 font-semibold w-3/8 text-[#DFC082] bg-[#DFC082]/10 border-l border-[#DFC082]/20">
                    RAOZY WEDDING PLANNER
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/60 font-sans">
                {comparisonRows.map((row, index) => (
                  <tr key={index} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-medium text-stone-300">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-stone-400 bg-red-950/5">
                      <div className="flex items-start gap-2">
                        <span className="text-red-400 font-bold shrink-0">✕</span>
                        <span>{row.massPlanners}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-stone-200 bg-[#DFC082]/5 border-l border-[#DFC082]/20 font-medium">
                      <div className="flex items-start gap-2">
                        <span className="text-[#DFC082] font-bold shrink-0">✓</span>
                        <span>{row.raozy}</span>
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
