import React from 'react';
import {
  Wifi,
  Users,
  Shield,
  Bed,
  Sparkles,
  Coffee,
  CheckCircle2,
  Clock,
  Key
} from 'lucide-react';
import { CLUB_EXTRA_SERVICES } from '../../data/site78ClubData';

export const Site78ClubServices: React.FC = () => {
  const icons = [
    <Coffee key="1" className="w-7 h-7 text-[#183D2F]" />,
    <Wifi key="2" className="w-7 h-7 text-[#183D2F]" />,
    <Users key="3" className="w-7 h-7 text-[#183D2F]" />,
    <Clock key="4" className="w-7 h-7 text-[#183D2F]" />,
    <Bed key="5" className="w-7 h-7 text-[#183D2F]" />,
    <Sparkles key="6" className="w-7 h-7 text-[#183D2F]" />
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#FFFFFF] text-[#1C242C] font-['Jost',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Matching Panchshila's 'Extra Services' section) */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#183D2F] text-xs font-bold uppercase tracking-[0.25em]">
            <span className="w-8 h-[1px] bg-[#C5A869]" />
            <span>Member Convenience</span>
            <span className="w-8 h-[1px] bg-[#C5A869]" />
          </div>

          <h2 className="font-['Cormorant',serif] font-bold text-3xl sm:text-5xl text-[#0F2537]">
            Extra Services & Privileges
          </h2>

          <p className="text-sm sm:text-base text-stone-600 font-light max-w-xl mx-auto">
            Thoughtful conveniences tailored for modern professionals, remote executives, and families seeking an effortless club lifestyle.
          </p>
        </div>

        {/* 6 Grid Services Cards (Matching reference infoboxes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CLUB_EXTRA_SERVICES.map((svc, idx) => (
            <div
              key={svc.id}
              className="p-7 rounded-xl bg-[#F9F8F5] border border-[#E8E5DF] hover:border-[#C5A869] hover:bg-[#F3EFE6] transition-all duration-300 text-center flex flex-col items-center group shadow-xs hover:shadow-md"
            >
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-5 shadow-xs border border-[#E8E5DF] group-hover:scale-110 group-hover:border-[#C5A869] transition-all duration-300">
                {icons[idx]}
              </div>

              <h3 className="font-['Cormorant',serif] font-bold text-xl sm:text-2xl text-[#0F2537] mb-2 leading-snug">
                {svc.title}
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                {svc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
