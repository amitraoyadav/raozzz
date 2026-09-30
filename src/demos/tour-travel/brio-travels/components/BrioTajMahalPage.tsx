import React, { useState } from 'react';
import { Sparkles, Clock, Star, MapPin, CheckCircle2, ChevronDown, ChevronUp, ShieldCheck, Car } from 'lucide-react';
import { TAJ_MAHAL_SPECIAL } from '../data/brioTravelsData';
import { BrioQuickEnquiryForm } from './BrioQuickEnquiryForm';

interface BrioTajMahalPageProps {
  onOpenBookingModal: (title: string) => void;
}

export const BrioTajMahalPage: React.FC<BrioTajMahalPageProps> = ({ onOpenBookingModal }) => {
  const [openDay, setOpenDay] = useState<number | null>(1);
  const pkg = TAJ_MAHAL_SPECIAL;

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Banner */}
        <div className="relative bg-slate-950 text-white rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[460px] flex items-end p-6 sm:p-12 shadow-2xl">
          <img
            src={pkg.coverImage}
            alt="Taj Mahal Sunrise Agra Tour"
            className="absolute inset-0 w-full h-full object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-orange-600 text-white flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Delhi Signature Day Excursion</span>
              </span>
              <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-white/20 text-white backdrop-blur-md flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-teal-300" />
                <span>12 - 14 Hours Round Trip</span>
              </span>
              <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-white/20 text-white backdrop-blur-md flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>5.0 (940+ Reviews)</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-['Poppins'] tracking-tight mb-3">
              Same Day Express Taj Mahal Tour from Delhi
            </h1>

            <p className="text-xs sm:text-base text-slate-200 font-['Inter'] leading-relaxed">
              Travel along the modern 6-lane Yamuna Expressway in a sanitized private AC car with an authorized expert monument guide. Experience sunrise at the Taj Mahal, explore Agra Fort, and visit Mehtab Bagh with seamless doorstep pickup and drop across Delhi NCR.
            </p>
          </div>
        </div>

        {/* Content & Sticky Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-8">
            {/* Overview Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
              <h2 className="text-xl font-bold text-slate-900 font-['Poppins']">
                Tour Overview & Features
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-['Inter']">
                {pkg.overview}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-100">
                {pkg.highlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hour-by-Hour Schedule */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
              <h2 className="text-xl font-bold text-slate-900 font-['Poppins']">
                Detailed Same Day Schedule
              </h2>

              <div className="space-y-3">
                {pkg.itinerary.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-orange-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900 font-['Poppins']">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 pl-8 leading-relaxed font-['Inter']">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
                <h3 className="font-bold text-sm text-emerald-800 uppercase tracking-wider font-['Poppins']">
                  Package Inclusions
                </h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  {pkg.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
                <h3 className="font-bold text-sm text-rose-800 uppercase tracking-wider font-['Poppins']">
                  Package Exclusions
                </h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  {pkg.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold">✕</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4 sticky top-24 space-y-6">
            <div className="bg-white rounded-3xl p-6 border-2 border-orange-500/30 shadow-xl space-y-5">
              <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    All-Inclusive Car & Guide
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-orange-900 font-mono">
                      ₹{pkg.startingPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-slate-400 line-through font-mono">
                      ₹{pkg.originalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <span className="text-[10px] text-orange-800 font-medium">
                    Private AC Sedan (Up to 4 passengers)
                  </span>
                </div>
              </div>

              <button
                onClick={() => onOpenBookingModal('Same Day Taj Mahal Express Tour')}
                className="w-full py-3.5 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book Instant Agra Trip</span>
              </button>

              <BrioQuickEnquiryForm defaultDestination="Same Day Taj Mahal Tour" compact={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
