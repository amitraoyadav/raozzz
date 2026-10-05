import React from 'react';
import { 
  Sparkles, 
  Compass, 
  MapPin, 
  CalendarCheck, 
  Palette, 
  HeartHandshake, 
  Crown, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface PsrExperienceSectionProps {
  onOpenConsultation: () => void;
}

export const PsrExperienceSection: React.FC<PsrExperienceSectionProps> = ({
  onOpenConsultation
}) => {
  const steps = [
    {
      num: '01',
      title: 'Vision & Feasibility Consultation',
      desc: 'We map your family traditions, desired vibes, guest profiles, and financial parameters into a structured master brief.',
      icon: <Compass className="w-5 h-5 text-[#DFBE78]" />
    },
    {
      num: '02',
      title: 'Destination & Palace Selection',
      desc: 'We shortlist 5-8 verified properties, conduct assisted site inspections, and negotiate GM-level buyout contracts.',
      icon: <MapPin className="w-5 h-5 text-[#DFBE78]" />
    },
    {
      num: '03',
      title: 'Budget Architecture & Roadmap',
      desc: 'Every single rupee is allocated across 18 transparent line-items with zero markups and real-time cloud variance tracking.',
      icon: <CalendarCheck className="w-5 h-5 text-[#DFBE78]" />
    },
    {
      num: '04',
      title: '3D Scenography & Artist Procurement',
      desc: 'Our architects generate 3D renders of your mandap and sangeet stages, while we lock top celebrity musicians without agency commissions.',
      icon: <Palette className="w-5 h-5 text-[#DFBE78]" />
    },
    {
      num: '05',
      title: 'White-Glove Guest Hospitality',
      desc: 'Airport reception desks, luggage tracking tags, pre-keyed room packets, and 24/7 concierge so your family is truly pampered.',
      icon: <HeartHandshake className="w-5 h-5 text-[#DFBE78]" />
    },
    {
      num: '06',
      title: 'Flawless Day-of Orchestration',
      desc: 'A 25-member shadow crew manages backstage cues, panditji samagri, fireworks, and emergency bridal kits so you simply celebrate.',
      icon: <Crown className="w-5 h-5 text-[#DFBE78]" />
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#180408] text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#DFBE78]/30">
            <Sparkles className="w-3 h-3 text-[#DFBE78]" />
            <span className="text-[11px] font-bold text-[#DFBE78] uppercase tracking-widest">
              The Journey to Forever
            </span>
          </div>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            How We Turn Your Wedding into an Unforgettable Destination Experience
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
            A destination wedding is more than a ceremony—it is a once-in-a-lifetime vacation for your closest circle. Our 6-stage structured methodology ensures seamless elegance from your first phone call to the final farewell.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#20070B] rounded-2xl border border-[#C5A059]/25 p-7 shadow-xl hover:border-[#DFBE78]/60 transition-all duration-300 group space-y-4 relative"
            >
              <div className="flex items-center justify-between">
                <span className="font-['Playfair_Display',serif] text-3xl font-black text-[#DFBE78]/60 group-hover:text-[#DFBE78] transition-colors">
                  {step.num}
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#2E0B11] border border-[#C5A059]/30 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>

              <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-white leading-snug">
                {step.title}
              </h3>

              <p className="text-xs text-stone-300 font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Highlight Box */}
        <div className="mt-16 bg-[#21070B] border border-[#C5A059]/30 rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-widest text-[#DFBE78] flex items-center justify-center lg:justify-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#DFBE78]" />
              The {siteConfig.SITE_NAME} Transparency Guarantee
            </span>
            <h3 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-white">
              No Hidden Markups. Direct Vendor Contracts.
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
              Unlike traditional wedding agencies that charge secret 20-30% supplier kickbacks, {siteConfig.SITE_NAME} operates on a clean, professional management fee. Every invoice is passed directly to you at negotiated wholesale rates.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#C5A059] to-[#DFBE78] text-[#1A0509] font-bold text-xs uppercase tracking-widest shadow-xl hover:brightness-110 transition-all cursor-pointer shrink-0 flex items-center gap-2"
          >
            <span>Start Planning With Us</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
