import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { CENTRES_OF_EXCELLENCE } from '../../data/medicarePlusData';

interface MedicarePlusCentresExcellenceProps {
  onSelectSpeciality: (specialityId: string) => void;
}

export const MedicarePlusCentresExcellence: React.FC<MedicarePlusCentresExcellenceProps> = ({
  onSelectSpeciality,
}) => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80 font-['Satoshi',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-[#00A896] border border-teal-200">
            Dedicated Tertiary Institutes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C4A60] tracking-tight mt-3">
            Centres of Excellence
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Integrated institutes bringing together specialized surgery, advanced intensive care units, and clinical research under one umbrella.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CENTRES_OF_EXCELLENCE.map((centre) => (
            <div
              key={centre.id}
              onClick={() => onSelectSpeciality(centre.specialityId)}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
            >
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                <img
                  src={centre.imageUrl}
                  alt={centre.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C4A60]/90 via-[#0C4A60]/30 to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs font-bold text-teal-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{centre.metrics}</span>
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-black text-[#0C4A60] group-hover:text-[#00A896] transition-colors leading-tight">
                    {centre.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {centre.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#00A896]">
                  <span>Explore Institute</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
