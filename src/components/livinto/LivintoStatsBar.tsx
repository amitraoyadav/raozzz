import React from 'react';
import {
  Calendar,
  ShieldCheck,
  Clock,
  Building2,
  HeartHandshake,
  Sparkles,
} from 'lucide-react';
import { LIVINTO_CONFIG } from '../../data/livintoInteriorsData';

export const LivintoStatsBar: React.FC = () => {
  const METRICS = [
    {
      title: 'SINCE',
      value: '2004',
      subline: '22+ Years Legacy',
      icon: Calendar,
      color: 'border-purple-200 text-[#814882]',
    },
    {
      title: 'PREMIUM',
      value: 'Materials',
      subline: 'BWP 710 & German Hardware',
      icon: Sparkles,
      color: 'border-amber-200 text-amber-700',
    },
    {
      title: '10 YEARS',
      value: 'Warranty',
      subline: 'Written Certificate',
      icon: ShieldCheck,
      color: 'border-emerald-200 text-emerald-700',
    },
    {
      title: 'COMPLETION',
      value: '40 Working Days',
      subline: 'Guaranteed Handover',
      icon: Clock,
      color: 'border-blue-200 text-blue-700',
    },
    {
      title: 'PROJECTS',
      value: '300 Per Month',
      subline: '350,000 Sq Ft Factory',
      icon: Building2,
      color: 'border-rose-200 text-rose-700',
    },
    {
      title: 'LIFELONG',
      value: 'Service Support',
      subline: 'Post-Handover Desk',
      icon: HeartHandshake,
      color: 'border-teal-200 text-teal-700',
    },
  ];

  return (
    <section className="py-14 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#814882]">
            PROFESSIONAL HOME INTERIOR DESIGN COMPANY
          </h2>
          <div className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Crafted for Longevity, Precision &amp; Peace of Mind
          </div>
        </div>

        {/* 6 Circular Badge Tiles matching reference layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 justify-center">
          {METRICS.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-3 group"
            >
              {/* Circular Medallion */}
              <div
                className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white border-2 shadow-sm group-hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center p-2 mb-3 group-hover:scale-105 ${item.color}`}
              >
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">
                  {item.title}
                </span>
                <span className="text-sm sm:text-base font-serif font-extrabold text-[#814882] leading-tight mt-0.5">
                  {item.value}
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">
                {item.subline}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
