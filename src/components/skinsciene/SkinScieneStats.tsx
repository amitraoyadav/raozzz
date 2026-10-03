import React from 'react';
import { Users, Award, Building2, Star, ShieldCheck, HeartHandshake } from 'lucide-react';
import { SKINSCIENE_CONFIG } from '../../data/skinScieneData';

export const SkinScieneStats: React.FC = () => {
  const statsList = [
    {
      icon: Users,
      value: SKINSCIENE_CONFIG.stats.happyPatients,
      label: 'Happy Patients Treated',
      subtext: 'Documented medical records',
      accent: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    },
    {
      icon: Award,
      value: SKINSCIENE_CONFIG.stats.dermatologistsCount,
      label: 'MD Dermatologists',
      subtext: '100% Doctor-led consultations',
      accent: 'text-teal-600 bg-teal-50 border-teal-200',
    },
    {
      icon: Building2,
      value: SKINSCIENE_CONFIG.stats.clinicsCount,
      label: 'Clinics in 10 Cities',
      subtext: 'State-of-the-art facilities',
      accent: 'text-amber-600 bg-amber-50 border-amber-200',
    },
    {
      icon: Star,
      value: SKINSCIENE_CONFIG.stats.satisfactionRate,
      label: 'Clinical Satisfaction',
      subtext: 'Across 45,000+ Google reviews',
      accent: 'text-rose-600 bg-rose-50 border-rose-200',
    },
    {
      icon: ShieldCheck,
      value: SKINSCIENE_CONFIG.stats.usFdaApproved,
      label: 'US-FDA Technologies',
      subtext: 'Strict safety & hygiene protocols',
      accent: 'text-blue-600 bg-blue-50 border-blue-200',
    },
  ];

  return (
    <section className="bg-slate-900 border-b border-slate-800 py-10 relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {statsList.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center text-center p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-emerald-500/40 transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${stat.accent}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold font-serif text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-emerald-300 mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
