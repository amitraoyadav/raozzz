import React from 'react';
import { ShieldCheck, Award, Zap, CheckCircle2 } from 'lucide-react';
import { US_FDA_EQUIPMENT } from '../../data/skinScieneData';

export const SkinScieneTechShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span>US-FDA Gold Standard Technology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Medical Lasers Trusted by Global Dermatologists
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            SkinSciene Naturals refuses to compromise with unbranded or replica machines. We exclusively invest in authentic, US-FDA cleared platforms imported from USA, Israel, and Germany.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {US_FDA_EQUIPMENT.map((tech, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 border border-slate-700/60 hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-950 text-emerald-300 text-[10px] font-bold border border-emerald-800 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>{tech.certification}</span>
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {tech.origin}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl text-white group-hover:text-emerald-300 transition-colors">
                  {tech.name}
                </h3>
                <div className="text-xs font-semibold text-emerald-400">
                  {tech.purpose}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {tech.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
                <span>Integrated ICE Contact Cooling</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Zero Burns
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
