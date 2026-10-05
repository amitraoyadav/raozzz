import React from 'react';
import { 
  Building2, 
  Layers, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  XCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { SAMAROH_CONFIG } from '../../data/samarohLuxeData';

interface SamarohWhyUsSectionProps {
  onOpenConsultation: () => void;
}

export const SamarohWhyUsSection: React.FC<SamarohWhyUsSectionProps> = ({
  onOpenConsultation
}) => {
  const comparison = [
    {
      feature: 'Production & Fabrication',
      traditional: 'Subcontracts to local unvetted tent vendors with 20-30% markups',
      samaroh: '45,000+ sq. ft. in-house production warehouses, carpenters & metal-shops'
    },
    {
      feature: 'Design Certainty',
      traditional: 'Sends vague Pinterest photos and sketch notes with no guarantees',
      samaroh: 'Photo-realistic 3D spatial renders of your exact venue dimensions'
    },
    {
      feature: 'Pricing Structure',
      traditional: 'Opaque lump-sum quotes with hidden last-minute generator/curfew charges',
      samaroh: '100% itemized pricing with fixed element counts and zero escalation'
    },
    {
      feature: 'Flower Quality & Sourcing',
      traditional: 'Buys surplus flowers from third-party agents on morning of event',
      samaroh: 'Direct wholesale mandi procurement from Ooty, Bengaluru & Dutch imports'
    },
    {
      feature: 'Event Day Management',
      traditional: 'Fragmented vendors with no single responsible party on ground',
      samaroh: 'Dedicated Senior Production Director on-site 36 hours prior to start'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#1C1917] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E06D53]/15 border border-[#E06D53]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#E06D53]" />
            <span className="text-[11px] font-bold text-[#E06D53] uppercase tracking-wider">
              The Modern Platform Advantage
            </span>
          </div>
          <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Why Modern Couples Choose Samaroh Luxe
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
            We built Samaroh Luxe to fix the broken, opaque wedding decor industry in India. Here is how our tech-enabled in-house model protects your celebration.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#24201E] border border-stone-800 p-6 rounded-3xl space-y-3 relative hover:border-[#E06D53]/50 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#E06D53]/15 text-[#E06D53] flex items-center justify-center font-bold">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-['Fraunces',serif] text-lg font-bold text-white">
              In-House Fabrication
            </h3>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              We own and operate over 45,000 sq. ft. of fabrication and floral facilities. No middlemen, no subcontracting markups, and total quality control.
            </p>
          </div>

          <div className="bg-[#24201E] border border-stone-800 p-6 rounded-3xl space-y-3 relative hover:border-[#E06D53]/50 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#E06D53]/15 text-[#E06D53] flex items-center justify-center font-bold">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-['Fraunces',serif] text-lg font-bold text-white">
              3D Spatial Previews
            </h3>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Walk through your mandap, reception stage, and entrance tunnel in full 3D color before you sign contracts or pay vendor deposits.
            </p>
          </div>

          <div className="bg-[#24201E] border border-stone-800 p-6 rounded-3xl space-y-3 relative hover:border-[#E06D53]/50 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#E06D53]/15 text-[#E06D53] flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-['Fraunces',serif] text-lg font-bold text-white">
              100% Itemized Pricing
            </h3>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              See the exact price for every floral hedge, chandelier, truss, and printed backdrop. Transparent pricing with zero surprise add-ons.
            </p>
          </div>

          <div className="bg-[#24201E] border border-stone-800 p-6 rounded-3xl space-y-3 relative hover:border-[#E06D53]/50 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#E06D53]/15 text-[#E06D53] flex items-center justify-center font-bold">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-['Fraunces',serif] text-lg font-bold text-white">
              Single Point Director
            </h3>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              A seasoned Production Manager oversees all sound engineers, florists, carpenters, and venue logistics on-site so families can simply celebrate.
            </p>
          </div>
        </div>

        {/* Head-to-Head Comparison Table */}
        <div className="bg-[#181514] border border-stone-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-8 border-b border-stone-800">
            <h3 className="font-['Fraunces',serif] text-xl sm:text-2xl font-bold text-white">
              Traditional Wedding Decorators vs. Samaroh Luxe
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 mt-1 font-light">
              Why 1,450+ families trusted our platform to deliver their life’s biggest milestone without friction.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-stone-800 bg-stone-900/60 text-stone-400 uppercase text-[11px] font-bold">
                  <th className="py-4 px-6">Planning Dimension</th>
                  <th className="py-4 px-6 text-rose-400/90">Traditional Agency / Tent Vendor</th>
                  <th className="py-4 px-6 text-[#E06D53]">Samaroh Luxe Modern Platform</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/60">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-stone-850/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-white">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-stone-400 font-light">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-stone-200 font-medium">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{row.samaroh}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Bar */}
          <div className="p-6 bg-stone-900/40 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-stone-400">
              Ready to experience modern wedding decor planning with zero stress?
            </span>
            <button
              onClick={onOpenConsultation}
              className="px-6 py-2.5 rounded-full bg-[#E06D53] hover:bg-[#C8523B] text-white text-xs font-bold transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Book Your 3D Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
