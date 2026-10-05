import React from 'react';
import { 
  Sparkles, 
  MessageSquare, 
  Layers, 
  Building2, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

interface SamarohProcessSectionProps {
  onOpenConsultation: () => void;
}

export const SamarohProcessSection: React.FC<SamarohProcessSectionProps> = ({
  onOpenConsultation
}) => {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Moodboard',
      duration: 'Within 24 Hours',
      desc: 'Meet our design lead online or at our city experience studios. We analyze your venue floor-plan, bridal palette, and ceremony preferences to generate an initial design moodboard.'
    },
    {
      num: '02',
      title: '3D Spatial Walkthroughs',
      duration: '3-4 Business Days',
      desc: 'We map your exact venue dimensions into photo-realistic 3D CAD renders. You will see every floral garland, crystal chandelier, and stage lighting angle before committing a rupee.'
    },
    {
      num: '03',
      title: 'In-House Warehouse Build',
      duration: '7-14 Days Prior',
      desc: 'Our 45,000 sq. ft. fabrication hubs custom-weld structures, carve wooden pillars, and pre-assemble floral mechanics. Flowers are sourced fresh directly from Ooty and Dutch auctions.'
    },
    {
      num: '04',
      title: 'Flawless On-Ground Delivery',
      duration: '36-48 Hrs On-Site',
      desc: 'Our Senior Production Manager oversees the complete on-site crew, electrical DG sets, safety checks, and flower blooming timers so your wedding handover is 100% on schedule.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#141210] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E06D53]/15 border border-[#E06D53]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#E06D53]" />
            <span className="text-[11px] font-bold text-[#E06D53] uppercase tracking-wider">
              How It Works
            </span>
          </div>
          <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            The 4-Step Samaroh Journey
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
            Eliminating anxiety through software, 3D visualization, and vertically integrated in-house execution.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-7 relative hover:border-[#E06D53]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-4">
                {/* Step Number Top */}
                <div className="flex items-center justify-between">
                  <span className="font-['Fraunces',serif] text-3xl font-bold text-[#E06D53]">
                    {step.num}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-stone-800 text-stone-300 border border-stone-700">
                    {step.duration}
                  </span>
                </div>

                <h3 className="font-['Fraunces',serif] text-lg font-bold text-white group-hover:text-[#E06D53] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-stone-850 mt-6 flex items-center gap-2 text-[11px] font-semibold text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Stage Milestone Certified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#291F1C] to-[#1C1614] border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-['Fraunces',serif] text-xl font-bold text-white">
              Ready to start with Step 01?
            </h4>
            <p className="text-xs text-stone-400 font-light">
              It takes just 2 minutes to submit your wedding details and receive a customized 3D moodboard.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#E06D53] to-[#C8523B] hover:from-[#C8523B] hover:to-[#E06D53] text-white text-xs font-bold transition-all shadow-md cursor-pointer flex items-center gap-2 shrink-0"
          >
            <span>Start Free Discovery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
