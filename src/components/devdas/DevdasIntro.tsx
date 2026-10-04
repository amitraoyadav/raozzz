import React from 'react';
import {
  ShieldCheck,
  Award,
  Heart,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
  Compass,
} from 'lucide-react';
import { DEVDAS_CONFIG } from '../../data/devdasWeddingData';

interface DevdasIntroProps {
  onOpenInquiry: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const DevdasIntro: React.FC<DevdasIntroProps> = ({
  onOpenInquiry,
  onNavigateToSection,
}) => {
  return (
    <section id="intro" className="py-20 sm:py-24 bg-[#FCFBF7] border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Visual Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80"
                alt="Royal Destination Wedding Curation"
                className="w-full h-[420px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Floating Award / Trust Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-amber-200/80 shadow-2xl flex items-center justify-between">
                <div>
                  <div className="font-serif font-black text-xl sm:text-2xl text-slate-900 flex items-center gap-1.5">
                    <span>10+ Years</span>
                    <span className="text-[#C5A059] font-normal text-sm sm:text-base italic">of Nuptial Artistry</span>
                  </div>
                  <p className="text-xs text-[#7A1C30] font-semibold mt-0.5">
                    280+ Curated Celebrations Across 24 Destinations
                  </p>
                </div>

                <div className="w-12 h-12 rounded-full bg-rose-50 border border-amber-400/40 text-[#7A1C30] flex items-center justify-center font-bold text-xs shrink-0">
                  ESTD<br />2015
                </div>
              </div>
            </div>

            {/* Overlapping small accent card */}
            <div className="hidden sm:flex absolute -top-5 -left-5 bg-[#7A1C30] text-white p-3.5 rounded-2xl shadow-xl border border-amber-400/30 items-center gap-2 max-w-[200px]">
              <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
              <div className="text-[11px] font-semibold leading-tight">
                No Cookie-Cutter Weddings
              </div>
            </div>
          </div>

          {/* Right Rich Story & Principles */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-[#7A1C30] text-xs font-bold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5" />
                <span>Why Devdas Wedding</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">
                Bespoke Luxury Over Catalogues. Organic Relationships Over Markups.
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              <p>
                Founded in 2015 by visionary mother-daughter nuptial artistes, <strong>Devdas Wedding</strong> was born from a singular conviction: your wedding should reflect your personal romance, cultural heritage, and aesthetic individuality—not an identical package flipped from a binder.
              </p>
              <p>
                We specialize exclusively in niche destination and luxury celebrations across India (Rajasthan palaces, Goa beach shores, Kerala backwaters, and Jim Corbett wilderness lodges) and exotic international hubs like Thailand and Bali. Operating from our studios in New Delhi-Gurgaon and Kolkata, we limit our annual wedding commissions to guarantee our founders’ personal, on-the-ground involvement in every single detail.
              </p>
            </div>

            {/* 3 Core Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-rose-50 text-[#7A1C30] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-sm text-slate-900">Zero Commissions</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  We charge a fixed planning fee. 100% of vendor &amp; hotel discounts are passed directly to you.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-sm text-slate-900">Nuptial Artistry</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Bespoke 3D decor concepts, unscripted moments, and thematic continuity across every event.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-sm text-slate-900">Flawless Logistics</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Airport reception desks, private bus convoys, rooming lists, and 24/7 guest concierge.
                </p>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenInquiry}
                className="px-6 py-3.5 rounded-xl bg-[#7A1C30] hover:bg-[#621424] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer flex items-center gap-2"
              >
                <span>Schedule Strategy Call with Nuptial Artiste</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigateToSection('destinations')}
                className="text-xs font-bold text-slate-800 hover:text-[#7A1C30] transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>Browse Destination Portfolio</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
