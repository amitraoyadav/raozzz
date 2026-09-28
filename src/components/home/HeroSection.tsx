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
              onClick={onExploreDemos}
              className="w-full sm:w-auto min-h-[50px] inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#14162B] bg-white hover:bg-slate-50 border border-[#E8E7F0] rounded-xl shadow-xs transition-all cursor-pointer font-['Inter']"
            >
              <span>Explore Designs</span>
            </button>
          </div>
        </div>

        {/* Responsive Website Preview below hero text */}
        <div className="mt-10 sm:mt-14 max-w-4xl mx-auto">
          <div className="bg-[#14162B] rounded-3xl p-3 sm:p-5 shadow-2xl border border-slate-800 overflow-hidden">
            {/* Top mock address bar */}
            <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-800 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="ml-2 font-mono text-[11px] text-slate-300 bg-slate-900 px-2.5 py-0.5 rounded-md border border-slate-800 truncate max-w-[180px] sm:max-w-none">
                  raositez.in/the-roastery-cafe
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Preview</span>
              </div>
            </div>

            {/* Showcase cards grid */}
            <div className="pt-3.5 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Card 1: Roastery Coffee House */}
              <div
                onClick={() => setActiveView('site', 'the-roastery-cafe')}
                className="bg-[#2D1F17] hover:bg-[#3D2B1F] text-[#F5E6D3] rounded-2xl p-3.5 cursor-pointer transition-all border border-[#523B2B] flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-28 rounded-xl overflow-hidden mb-2.5">
                    <img
                      src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80"
                      alt="Roastery Coffee House"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-[#1A110B]/90 text-[#C08552] text-[10px] font-bold px-2 py-0.5 rounded">
                      Cafe & Bakery
                    </span>
                  </div>
                  <h3 className="font-bold text-[#F5E6D3] text-sm font-['Fraunces']">
                    Roastery Coffee House
                  </h3>
                  <p className="text-[11px] text-[#D8C7B4] mt-0.5 line-clamp-1 font-['Inter']">
                    Estate pour-overs, cold brew, and table reservations.
                  </p>
                </div>
                <div className="mt-2.5 pt-2 border-t border-[#523B2B] flex items-center justify-between text-[11px] font-['Inter']">
                  <span className="text-[#C08552] font-semibold">Tap to view</span>
                  <span className="text-[#C08552]">→</span>
                </div>
              </div>

              {/* Card 2: OpenHouse Bistro Lounge */}
              <div
                onClick={() => setActiveView('site', 'openhouse-bistro-lounge')}
                className="bg-[#3D1A14] hover:bg-[#4E221A] text-[#FFF7ED] rounded-2xl p-3.5 cursor-pointer transition-all border border-[#C2573F]/40 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-28 rounded-xl overflow-hidden mb-2.5">
                    <img
                      src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
                      alt="OpenHouse Cafe Lounge"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-[#241F1C]/90 text-[#E0A526] text-[10px] font-bold px-2 py-0.5 rounded">
                      Restaurant & Bar
                    </span>
                  </div>
                  <h3 className="font-bold text-[#FFF7ED] text-sm font-['Fraunces']">
                    OpenHouse Bistro
                  </h3>
                  <p className="text-[11px] text-[#FED7AA] mt-0.5 line-clamp-1 font-['Inter']">
                    Wood-fired pizzas, cocktails, and weekend acoustics.
                  </p>
                </div>
                <div className="mt-2.5 pt-2 border-t border-[#C2573F]/40 flex items-center justify-between text-[11px] font-['Inter']">
                  <span className="text-[#E0A526] font-semibold">Tap to view</span>
                  <span className="text-[#E0A526]">→</span>
                </div>
              </div>

              {/* Card 3: SwagGlam Salon at Home */}
              <div
                onClick={() => setActiveView('site', 'swagglam-salon-at-home')}
                className="bg-[#2D162A] hover:bg-[#3D1D39] text-[#EFD9D3] rounded-2xl p-3.5 cursor-pointer transition-all border border-[#63335D] flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-28 rounded-xl overflow-hidden mb-2.5">
                    <img
                      src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80"
                      alt="SwagGlam Salon at Home"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-[#291326] text-[#EFD9D3] text-[10px] font-bold px-2 py-0.5 rounded">
                      Salon & Spa
                    </span>
                  </div>
                  <h3 className="font-bold text-[#EFD9D3] text-sm font-['Fraunces']">
                    SwagGlam Doorstep Salon
                  </h3>
                  <p className="text-[11px] text-[#DFBFC7] mt-0.5 line-clamp-1 font-['Inter']">
                    Sealed monodose beauty kits and bridal packages.
                  </p>
                </div>
                <div className="mt-2.5 pt-2 border-t border-[#63335D] flex items-center justify-between text-[11px] font-['Inter']">
                  <span className="text-[#EFD9D3] font-semibold">Tap to view</span>
                  <span className="text-[#EFD9D3]">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
