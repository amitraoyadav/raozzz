import React from 'react';
import {
  Tag,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
} from 'lucide-react';
import { PACKAGES_DATA } from '../../data/devdasWeddingData';

interface DevdasPackagesProps {
  onOpenInquiry: (packageName?: string) => void;
}

export const DevdasPackages: React.FC<DevdasPackagesProps> = ({ onOpenInquiry }) => {
  return (
    <section id="packages" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-[#7A1C30] text-xs font-bold uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5" />
            <span>Honest &amp; Commission-Free</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            PLANNING PACKAGES &amp; FEES
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            We charge a transparent professional planning fee. We do not earn commissions or inflated markups from hotel room blocks, decorators, or caterers.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES_DATA.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl border border-slate-200 hover:border-[#7A1C30] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 sm:p-8 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-0.5 rounded-full bg-rose-50 text-[#7A1C30] text-[11px] font-bold uppercase tracking-wider">
                      {pkg.badge}
                    </span>
                    <span className="font-serif font-extrabold text-xl text-[#7A1C30]">
                      {pkg.fee}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900 leading-tight">
                    {pkg.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pkg.subtitle}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-[11px] text-slate-700">
                  <strong className="text-slate-900">Ideal For:</strong> {pkg.idealFor}
                </div>

                {/* Inclusions */}
                <div className="space-y-2.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    What's Included:
                  </div>
                  <ul className="space-y-2">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenInquiry(pkg.name)}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#7A1C30] hover:bg-[#621424] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer group-hover:scale-[1.02]"
                >
                  <span>Select {pkg.name.split(' ')[0]} Package</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-950">
          <div className="flex items-center gap-3">
            <HeartHandshake className="w-6 h-6 text-amber-700 shrink-0" />
            <div>
              <strong className="font-bold">Complimentary Initial Strategy Session:</strong>{' '}
              Meet our founder on Zoom for 45 minutes to discuss venue ideas, date selection &amp; realistic budgets.
            </div>
          </div>
          <button
            onClick={() => onOpenInquiry('Free Strategy Session')}
            className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold whitespace-nowrap cursor-pointer transition-colors"
          >
            Claim Free Session
          </button>
        </div>
      </div>
    </section>
  );
};
