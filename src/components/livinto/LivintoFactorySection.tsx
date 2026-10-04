import React from 'react';
import {
  Building2,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Hammer,
  Zap,
} from 'lucide-react';
import { LIVINTO_CONFIG } from '../../data/livintoInteriorsData';

interface LivintoFactorySectionProps {
  onOpenConsultation: () => void;
}

export const LivintoFactorySection: React.FC<LivintoFactorySectionProps> = ({
  onOpenConsultation,
}) => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-900/60 text-amber-300 text-xs font-bold uppercase tracking-wider border border-purple-700/50">
              <Cpu className="w-3.5 h-3.5" />
              <span>100% In-House Production</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
              350,000 Sq Ft German Automated Factory
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Unlike local carpenters or outsourced aggregators, every single cabinet, shutter, and drawer unit at Livinto is manufactured in our own automated factory using computerized German machinery from Homag.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Cpu className="w-4 h-4" />
                  <span>Homag CNC Beam Saws</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Millimeter-precision laser cutting ensures perfectly square modular panels with zero chipping.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Zap className="w-4 h-4" />
                  <span>Laser PUR Edge Banding</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Seamless waterproof PUR edge sealing prevents moisture ingress into the plywood core.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>BWP 710 Marine Plywood</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Certified boiling waterproof marine ply carcasses tested to withstand 72 hours of boiling water.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Flat-Pack Delivery</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Pre-drilled modular panels flat-packed and assembled on-site with zero dust and zero noise.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-xl bg-[#814882] hover:bg-[#6e3a6f] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
              >
                Schedule Factory or Experience Centre Tour
              </button>
              <div className="text-xs text-slate-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>300+ Homes Handed Over Every Month</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
                alt="Automated Factory Homag Machinery"
                className="w-full h-[440px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md p-5 rounded-2xl border border-slate-700 text-white space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-amber-400 font-bold uppercase tracking-wider">
                    Infrastructure Metric
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-emerald-900/80 text-emerald-300 font-bold">
                    ISO 9001:2015
                  </span>
                </div>
                <div className="text-xl font-bold font-serif">
                  350,000 Sq. Ft. Manufacturing Capacity
                </div>
                <p className="text-xs text-slate-300">
                  Fully integrated manufacturing ecosystem with 8 production lines and in-house powder coating &amp; lacquer plants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
