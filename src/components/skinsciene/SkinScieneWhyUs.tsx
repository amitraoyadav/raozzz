import React from 'react';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Stethoscope,
  Microscope,
  Sparkles,
  ArrowRight,
  HeartHandshake,
} from 'lucide-react';
import { FIVE_STEP_PROCESS } from '../../data/skinScieneData';

interface SkinScieneWhyUsProps {
  onOpenBooking: () => void;
}

export const SkinScieneWhyUs: React.FC<SkinScieneWhyUsProps> = ({ onOpenBooking }) => {
  return (
    <section id="why-us" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>The Clinical Difference</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Why 850,000+ Patients Choose SkinSciene Naturals
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            We don’t sell generic salon packages. Every treatment is prescribed and performed under the direct care of MD-qualified dermatologists using 100% US-FDA approved technologies.
          </p>
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Standardized 5-Step Medical Protocol
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {FIVE_STEP_PROCESS.map((item, idx) => (
              <div
                key={item.step}
                className="bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 group hover:shadow-xl hover:shadow-emerald-950/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-serif font-extrabold text-emerald-400 group-hover:scale-110 transition-transform block">
                      {item.step}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs text-slate-400 font-bold">
                      {idx + 1}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-base text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Clinical Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Pillars of Safety & Quality */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-800">
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <h4 className="font-bold text-white text-base">100% Doctor-Led Protocol</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Consultations, diagnostic assessments, and machine parameters are customized strictly by MD Dermatologists, not commercial sales staff.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
              <Microscope className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <h4 className="font-bold text-white text-base">US-FDA Gold Standard Tech</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We invest in imported, internationally proven platforms including Soprano Titanium, Candela GentleMax, and Lutronic Spectra.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <h4 className="font-bold text-white text-base">Hospital-Grade Sterilization</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Autoclaved surgical instruments, HEPA positive-pressure consultation rooms, and 100% single-use disposables guarantee zero infection risk.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-900/60 via-slate-900 to-teal-900/60 border border-emerald-700/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif font-bold text-lg text-white">
              Experience the SkinSciene Naturals Difference Firsthand
            </h4>
            <p className="text-xs text-slate-300">
              Book your comprehensive 5-step clinical consultation with an MD Dermatologist today.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg transition-all flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>Book Doctor Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
