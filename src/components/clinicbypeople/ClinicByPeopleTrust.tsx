import React from 'react';
import {
  Award,
  Building2,
  HeartHandshake,
  ShieldCheck,
  Car,
  Stethoscope,
  CheckCircle2,
} from 'lucide-react';
import { TRUST_POINTS } from '../../data/clinicByPeopleData';

export const ClinicByPeopleTrust: React.FC = () => {
  const iconMap: Record<string, any> = {
    Award,
    Building2,
    UserHeart: HeartHandshake,
    ShieldCheck,
    Car,
    Stethoscope,
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200 font-['Lexend',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
            Uncompromising Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1528] tracking-tight mt-3">
            Built by Trusted Hands, Valued by Thousands
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Every clinical protocol, partner hospital, and surgical procedure is audited against international safety and infection-control benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TRUST_POINTS.map((item, index) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={index}
                className="p-6 sm:p-7 rounded-3xl bg-slate-50/80 border border-slate-200/80 hover:border-[#0C5BE2]/50 hover:bg-white transition-all duration-300 shadow-xs hover:shadow-lg flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-100/70 text-[#0C5BE2] flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
