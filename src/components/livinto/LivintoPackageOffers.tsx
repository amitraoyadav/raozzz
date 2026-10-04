import React from 'react';
import {
  Tag,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { PACKAGE_OFFERS_DATA, PackageOffer } from '../../data/livintoInteriorsData';

interface LivintoPackageOffersProps {
  onOpenConsultation: () => void;
  onOpenEstimate: (packageSlug?: string) => void;
}

export const LivintoPackageOffers: React.FC<LivintoPackageOffersProps> = ({
  onOpenConsultation,
  onOpenEstimate,
}) => {
  return (
    <section id="offers" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-[#814882] text-xs font-bold uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5 text-[#814882]" />
            <span>Limited Period Price Protection</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Comprehensive Home Interior Packages
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Transparent pricing without surprise escalations. Every package includes custom 3D design, 100% factory manufacturing, Blum/Hafele hardware, and 10-year warranty.
          </p>
        </div>

        {/* 3 Package Cards matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGE_OFFERS_DATA.map((pack) => (
            <div
              key={pack.id}
              className="bg-white rounded-3xl border border-slate-200 hover:border-[#814882] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <img
                    src={pack.coverImage}
                    alt={pack.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#814882] text-white text-[11px] font-bold shadow">
                      {pack.tag}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-amber-400 text-slate-950 text-[11px] font-black uppercase tracking-wide">
                      {pack.savings}
                    </span>
                  </div>

                  {/* Package Title Banner inside Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs uppercase tracking-wider text-amber-300 font-semibold">
                      {pack.subtitle}
                    </div>
                    <div className="font-serif font-black text-2xl tracking-tight">
                      {pack.name}
                    </div>
                  </div>
                </div>

                {/* Price Bar */}
                <div className="p-6 pb-4 border-b border-slate-100 bg-purple-50/40">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                        Special Offer Price
                      </span>
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <span className="text-2xl sm:text-3xl font-extrabold font-serif text-[#814882]">
                          ₹{pack.offerPrice} Lac*
                        </span>
                        <span className="text-sm text-slate-400 line-through">
                          ₹{pack.originalPrice} Lac
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                      GST Included
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-2 font-medium">
                    Ideal For: <strong>{pack.idealFor}</strong>
                  </p>
                </div>

                {/* Inclusions List */}
                <div className="p-6 space-y-3">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Package Scope &amp; Inclusions:
                  </div>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {pack.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#814882] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => onOpenEstimate(pack.slug)}
                  className="w-full py-3 rounded-xl bg-[#814882] hover:bg-[#6e3a6f] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Get Detailed Estimate</span>
                </button>

                <button
                  onClick={onOpenConsultation}
                  className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Talk to Designer</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
