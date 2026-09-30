import React from 'react';
import {
  Star,
  CreditCard,
  Award,
  ShieldCheck,
  Building2,
  CalendarCheck,
  BadgePercent,
  Headphones
} from 'lucide-react';
import { REASONS_TO_CHOOSE } from '../data/brioTravelsData';

export const BrioReasonToChoose: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Star':
        return <Star className="w-6 h-6 text-amber-500" />;
      case 'CreditCard':
        return <CreditCard className="w-6 h-6 text-teal-600" />;
      case 'Award':
        return <Award className="w-6 h-6 text-indigo-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'Hotel':
        return <Building2 className="w-6 h-6 text-cyan-600" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-6 h-6 text-teal-600" />;
      case 'BadgePercent':
        return <BadgePercent className="w-6 h-6 text-orange-500" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-rose-500" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-teal-600" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-2">
            Why Travel With Brio
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-['Poppins'] tracking-tight">
            Reasons to Choose Us
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 font-['Inter']">
            We go beyond ordinary travel planning to ensure complete safety, transparent pricing, and unforgettable holiday memories.
          </p>
        </div>

        {/* 8 Icon Tiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS_TO_CHOOSE.map(item => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200 hover:bg-white hover:border-teal-300 hover:shadow-lg transition-all duration-300 space-y-3 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                {getIcon(item.iconName)}
              </div>

              <h3 className="font-bold text-base text-slate-900 font-['Poppins'] group-hover:text-teal-700 transition-colors">
                {item.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-['Inter']">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
