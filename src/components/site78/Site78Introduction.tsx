import React from 'react';
import {
  Sparkles,
  Award,
  ShieldCheck,
  HeartHandshake,
  Compass,
  ArrowRight,
  CheckCircle2,
  Waves
} from 'lucide-react';
import { site78Config } from '../../config/site78Config';
import { RESORT_STATS } from '../../data/site78Data';

interface Site78IntroductionProps {
  onExploreRooms: () => void;
  onExploreEvents: () => void;
}

export const Site78Introduction: React.FC<Site78IntroductionProps> = ({
  onExploreRooms,
  onExploreEvents
}) => {
  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] text-[#222222] relative overflow-hidden font-['Jost',sans-serif]">
      {/* Background Subtle Wave Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F3EEE7]/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Top Heading & Ornamental Divider */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#747157] text-xs font-bold uppercase tracking-[0.25em]">
            <span className="w-8 h-[1px] bg-[#B99D75]" />
            <span>The Aurelia Experience</span>
            <span className="w-8 h-[1px] bg-[#B99D75]" />
          </div>

          <h2 className="font-['Cormorant',serif] font-bold text-3xl sm:text-5xl lg:text-6xl text-[#1C1C1C] leading-[1.12] tracking-tight">
            Your Luxury Home <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#747157]">Away From Home</span>
          </h2>

          <div className="flex items-center justify-center gap-3 pt-1">
            <span className="w-12 h-[1px] bg-[#E5DFD7]" />
            <span className="text-[#B99D75] text-xs">✦</span>
            <span className="w-12 h-[1px] bg-[#E5DFD7]" />
          </div>

          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed pt-2">
            Nestled directly behind the soft dunes of Morjim Beach in North Goa, Aurelia is a celebration of unhurried tropical elegance. 
            We replaced the impersonal scale of large commercial hotels with an intimate boutique sanctuary where every single guest room and suite features its own crystalline private plunge pool.
          </p>
        </div>

        {/* 2-Column Story Showcase: Images & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Left Column: Overlapping Editorial Images */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-[#E5DFD7] aspect-[4/3] group">
              <img
                src="/assets/site78/about-6-1.webp"
                alt="Aurelia Goa Beach Resort Grounds"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B99D75] block mb-1">
                  Private Sanctuary
                </span>
                <h4 className="font-['Cormorant',serif] text-2xl font-bold">
                  Boutique Seclusion in North Goa
                </h4>
              </div>
            </div>

            {/* Inset Secondary Image */}
            <div className="hidden sm:block absolute -bottom-10 -right-8 z-20 w-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] group">
              <img
                src="/assets/site78/about-7-1.webp"
                alt="Tropical Pool and Open Shower"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Stamp Logo Floating Badge */}
            <div className="absolute -top-6 -left-6 z-30 w-24 h-24 rounded-full bg-[#1C1C1C] text-[#B99D75] p-3 shadow-xl border border-[#B99D75]/40 flex flex-col items-center justify-center text-center">
              <span className="text-[8px] uppercase tracking-widest block font-bold text-white">ESTD</span>
              <span className="font-['Cormorant',serif] text-xl font-bold text-[#B99D75]">GOA</span>
              <span className="text-[7px] uppercase tracking-widest block text-stone-300">2024</span>
            </div>
          </div>

          {/* Right Column: Editorial Hospitality Narrative */}
          <div className="lg:col-span-6 space-y-6 pt-6 lg:pt-0">
            <div className="inline-block px-3 py-1 rounded-full bg-[#F3EEE7] text-[#747157] text-[11px] font-bold tracking-widest uppercase">
              Beachfront Luxury Reimagined
            </div>

            <h3 className="font-['Cormorant',serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1C] leading-[1.15]">
              Best Beach Resort in North Goa, India
            </h3>

            <p className="text-stone-600 font-light leading-relaxed text-sm sm:text-base">
              Aurelia Goa was conceived as an antidote to crowded, noisy getaways. Here, the soothing rhythm of ocean tides, rustling coconut fronds, and bespoke architecture ground your spirit in serenity.
            </p>

            <p className="text-stone-600 font-light leading-relaxed text-sm sm:text-base">
              Step from your private courtyard directly onto Morjim’s protected golden beach. Spend your afternoons lounging on teakwood sunbeds with iced single-estate espresso, or let our chefs prepare a personalized fresh catch dinner on our open-air wooden deck.
            </p>

            {/* Feature Points Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#747157] mt-0.5 shrink-0" />
                <span className="text-xs font-medium text-stone-800">100% Private Freshwater Plunge Pools</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#747157] mt-0.5 shrink-0" />
                <span className="text-xs font-medium text-stone-800">Open-Air Balinese Rainforest Showers</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#747157] mt-0.5 shrink-0" />
                <span className="text-xs font-medium text-stone-800">Direct 60-Second Walk to Morjim Beach</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#747157] mt-0.5 shrink-0" />
                <span className="text-xs font-medium text-stone-800">Weddings & Private Celebration Banquets</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreRooms}
                className="px-6 py-3 rounded-full bg-[#747157] hover:bg-[#56543e] text-white text-xs font-semibold tracking-[0.16em] uppercase transition-all shadow-md cursor-pointer flex items-center gap-2"
              >
                <span>View Our Rooms</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B99D75]" />
              </button>

              <button
                onClick={onExploreEvents}
                className="px-6 py-3 rounded-full bg-[#F3EEE7] hover:bg-[#e7dfd4] text-[#222222] border border-[#E5DFD7] text-xs font-semibold tracking-[0.16em] uppercase transition-all cursor-pointer"
              >
                Plan An Event
              </button>
            </div>
          </div>
        </div>

        {/* 4 Trust Counters & Hospitality Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 bg-[#F3EEE7] rounded-3xl p-6 sm:p-10 border border-[#E5DFD7]">
          {RESORT_STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`p-4 sm:p-6 text-center space-y-2 ${
                idx !== 0 ? 'border-l border-[#E5DFD7]' : ''
              }`}
            >
              <div className="font-['Cormorant',serif] font-bold text-4xl sm:text-5xl lg:text-6xl text-[#747157] tracking-tight">
                {stat.value}
              </div>
              <div className="font-semibold text-xs sm:text-sm text-[#1C1C1C] uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-[11px] text-stone-500 font-light leading-snug">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
