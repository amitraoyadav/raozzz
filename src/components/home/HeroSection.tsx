import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Smartphone, Eye } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface HeroSectionProps {
  onOpenOrderModal: () => void;
  onExploreDemos: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenOrderModal, onExploreDemos }) => {
  const { setActiveView } = useApp();

  return (
    <section className="relative overflow-hidden bg-[#FAFAF8] pt-8 pb-14 sm:pt-16 sm:pb-24 border-b border-[#E8E7F0]">
      {/* Subtle atmospheric gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-radial from-[#E8E7F0]/70 via-[#FAFAF8]/30 to-transparent blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Eyebrow kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8E7F0]/80 border border-[#D5D4E3] text-[#14162B] text-xs font-semibold mb-4 shadow-xs font-['Inter']">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6B4A]" />
            <span>Built for Indian Small Businesses & Shops</span>
          </div>

          {/* Exact required headline: "Your Business Deserves a Website." */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#14162B] tracking-tight leading-[1.15] font-['Fraunces'] text-balance">
            Your Business Deserves a Website.
          </h1>

          {/* Exact required supporting text */}
          <p className="mt-3.5 sm:mt-5 text-sm sm:text-lg text-[#3C3F58] font-normal leading-relaxed max-w-2xl mx-auto font-['Inter'] text-balance">
            Create a beautiful professional website for your business in minutes. No coding. No technical skills.
          </p>

          {/* Core reassurance points */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-[#51556E] font-['Inter']">
            <span className="flex items-center gap-1 text-[#14162B] font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Flat ₹999 One-Time
            </span>
            <span className="text-slate-300 hidden sm:inline">·</span>
            <span className="flex items-center gap-1 text-[#14162B] font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Direct WhatsApp Orders
            </span>
            <span className="text-slate-300 hidden sm:inline">·</span>
            <span className="flex items-center gap-1 text-[#14162B] font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Ready in 24 Hours
            </span>
          </div>

          {/* Required Primary & Secondary Action CTAs */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md sm:max-w-none mx-auto">
            <button
              onClick={onOpenOrderModal}
              className="w-full sm:w-auto min-h-[50px] inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-white bg-[#FF6B4A] hover:bg-[#F25A38] active:bg-[#d94a2b] rounded-xl shadow-lg shadow-[#FF6B4A]/25 transition-all cursor-pointer font-['Inter']"
            >
              <span>Get Your Website Built</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveView('wizard')}
              className="w-full sm:w-auto min-h-[50px] inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#14162B] bg-white hover:bg-slate-50 border border-[#E8E7F0] rounded-xl shadow-xs transition-all cursor-pointer font-['Inter']"
            >
              <Smartphone className="w-4 h-4 text-[#4338CA]" />
              <span>Create With Mobile Wizard</span>
            </button>
          </div>
        </div>

        {/* Clean Website Builder Experience Preview */}
        <div className="mt-10 sm:mt-14 max-w-4xl mx-auto">
          <div className="bg-[#14162B] rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 overflow-hidden text-white font-['Inter']">
            {/* Top mock address bar */}
            <div className="flex items-center justify-between pb-4 px-1 border-b border-slate-800 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="ml-2 font-mono text-[11px] text-slate-300 bg-slate-900 px-3 py-1 rounded-md border border-slate-800 truncate max-w-[200px] sm:max-w-none">
                  raositez.in/your-business-name
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Ready to Launch · 24h Turnaround</span>
              </div>
            </div>

            {/* 3 Value Pillars for Small Businesses */}
            <div className="pt-5 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {/* Feature 1 */}
              <div className="bg-[#1E223D] rounded-2xl p-4 border border-slate-700/60 flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-3">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-white font-['Fraunces']">
                    Mobile-First Storefront
                  </h4>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    Custom tailored for your shop or service. Looks stunning on all mobile phones with zero clutter.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-700/50 flex items-center gap-1.5 text-[11px] text-indigo-300 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>No Coding Required</span>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-[#1E223D] rounded-2xl p-4 border border-slate-700/60 flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-white font-['Fraunces']">
                    Direct WhatsApp Orders
                  </h4>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    Customers browse your menu or service list with real ₹ prices and order straight to your WhatsApp.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-700/50 flex items-center gap-1.5 text-[11px] text-emerald-300 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Instant Customer Chat</span>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-[#1E223D] rounded-2xl p-4 border border-slate-700/60 flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-white font-['Fraunces']">
                    Free Hosting & QR Standee
                  </h4>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    Includes 1 year of ultra-fast cloud hosting, Google Maps directions, and print-ready QR standee files.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-700/50 flex items-center gap-1.5 text-[11px] text-amber-300 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>₹999 Flat One-Time</span>
                </div>
              </div>
            </div>

            {/* Bottom Action Strip */}
            <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-400">
                Ready to build? Launch the creator wizard or let our team build it for you.
              </span>
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={() => setActiveView('wizard')}
                  className="flex-1 sm:flex-none px-4 py-2 bg-[#4338CA] hover:bg-[#3730A3] text-white text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Open Creator Wizard</span>
                </button>
                <button
                  onClick={onOpenOrderModal}
                  className="flex-1 sm:flex-none px-4 py-2 bg-[#FF6B4A] hover:bg-[#F25A38] text-white text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Build For Me (₹999)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
