import React from 'react';
import { ShieldCheck, Award, Users, HeartHandshake, ArrowRight, CheckCircle2 } from 'lucide-react';

interface BrioAboutBlockProps {
  onLearnMore: () => void;
}

export const BrioAboutBlock: React.FC<BrioAboutBlockProps> = ({ onLearnMore }) => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Visual Collage with Trust Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md sm:max-w-none">
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80"
                  alt="Travellers exploring historic monuments with Brio Travels"
                  className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Floating Stat Card 1: 4.9k Happy Travellers */}
              <div className="absolute -bottom-6 -left-4 sm:left-4 bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-100 flex items-center gap-3.5 max-w-[260px] animate-fadeIn">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 font-['Poppins']">
                    4.9k+
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    Happy Travellers & Families from Delhi NCR
                  </p>
                </div>
              </div>

              {/* Floating Stat Card 2: 12+ Years Experience */}
              <div className="hidden sm:flex absolute -top-5 -right-4 bg-teal-800 text-white rounded-2xl p-4 shadow-xl border-2 border-white items-center gap-3 animate-fadeIn">
                <div className="w-10 h-10 rounded-xl bg-teal-700/80 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <div className="text-base font-bold font-['Poppins']">
                    12+ Years
                  </div>
                  <p className="text-[11px] text-teal-200">
                    Trusted Tour Operations
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              <span>Best Travel Agency in Delhi</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-['Poppins'] tracking-tight leading-snug">
              Crafting Unforgettable Journeys Across India & the World
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-['Inter']">
              Headquartered in the heart of New Delhi, <strong>Brio Travels</strong> has earned the trust of over 4,900+ vacationers, honeymoon couples, and corporate groups. We specialize in custom-tailored domestic circuits from the snow peaks of Kashmir and Himachal to the peaceful backwaters of Kerala, as well as premier international packages to Dubai, Bali, Europe, and Southeast Asia.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  100% Verified 4-Star & 5-Star Accommodations
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  Sanitized Private Fleet with Professional Drivers
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  Zero Cost EMI & Transparent Pricing Guarantee
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  24x7 Dedicated WhatsApp & On-Trip Concierge
                </span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-teal-700 text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
              >
                <span>Read Full Company Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
