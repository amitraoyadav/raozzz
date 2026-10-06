import React from 'react';
import {
  ShieldCheck,
  Award,
  Handshake,
  Clock,
  Headphones,
  Building2,
  CheckCircle2
} from 'lucide-react';
import { PARTNER_DEVELOPERS } from '../../data/site82Data';

export const Site82PartnerDevelopers: React.FC = () => {
  return (
    <section className="py-12 lg:py-24 bg-[#FFF7F4] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-sans font-semibold text-2xl sm:text-4xl lg:text-5xl text-[#1F2430] tracking-tight">
            Our <span className="text-[#F54900]">Partner</span> Developers
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <span className="hidden sm:inline-block w-8 h-[2px] bg-gradient-to-r from-transparent to-[#F54900]" />
            <p className="text-sm sm:text-base font-bold text-[#F54900] tracking-wide">
              Trusted Partnerships. Exceptional Developments.
            </p>
            <span className="hidden sm:inline-block w-8 h-[2px] bg-gradient-to-l from-transparent to-[#F54900]" />
          </div>

          <p className="text-xs sm:text-sm text-[#5F6672] max-w-2xl mx-auto leading-relaxed font-light">
            We collaborate with India’s most trusted and RERA-registered developers to offer premium residential and commercial properties. Every project is carefully vetted for construction quality, strategic connectivity, and long-term capital appreciation.
          </p>
        </div>

        {/* 5 Trust Pillars Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-12">
          {/* Pillar 1 */}
          <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-white/70 border border-orange-100 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-orange-100 text-[#F54900] flex items-center justify-center mb-2">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#2B2B2B]">
              Verified Developers
            </div>
            <div className="text-[11px] text-[#6B7280] mt-1 leading-snug">
              All partners are 100% RERA registered
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-white/70 border border-orange-100 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-orange-100 text-[#F54900] flex items-center justify-center mb-2">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#2B2B2B]">
              Quality Assurance
            </div>
            <div className="text-[11px] text-[#6B7280] mt-1 leading-snug">
              Committed to structural delivery excellence
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-white/70 border border-orange-100 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-orange-100 text-[#F54900] flex items-center justify-center mb-2">
              <Handshake className="w-5 h-5" />
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#2B2B2B]">
              Long Term Partnership
            </div>
            <div className="text-[11px] text-[#6B7280] mt-1 leading-snug">
              Built on fiduciary trust &amp; transparency
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-white/70 border border-orange-100 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-orange-100 text-[#F54900] flex items-center justify-center mb-2">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#2B2B2B]">
              Timely Delivered
            </div>
            <div className="text-[11px] text-[#6B7280] mt-1 leading-snug">
              Proven project completion track record
            </div>
          </div>

          {/* Pillar 5 */}
          <div className="col-span-2 lg:col-span-1 flex flex-col items-center text-center p-3 rounded-2xl bg-white/70 border border-orange-100 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-orange-100 text-[#F54900] flex items-center justify-center mb-2">
              <Headphones className="w-5 h-5" />
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#2B2B2B]">
              Customer First
            </div>
            <div className="text-[11px] text-[#6B7280] mt-1 leading-snug">
              Guiding 15M+ homebuyers with zero brokerage
            </div>
          </div>
        </div>
      </div>

      {/* CONTINUOUS AUTO-SCROLLING DEVELOPER LOGOS MARQUEE */}
      <div className="relative w-full overflow-hidden py-4 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="flex gap-4 w-max animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]">
          {[...PARTNER_DEVELOPERS, ...PARTNER_DEVELOPERS].map((dev, idx) => (
            <div
              key={`${dev.id}-${idx}`}
              className="h-24 w-52 sm:w-60 shrink-0 px-5 bg-white rounded-2xl border border-orange-100/80 shadow-sm flex flex-col items-center justify-center text-center hover:border-orange-400 hover:shadow-md transition-all cursor-pointer group"
            >
              <Building2 className="w-6 h-6 text-[#F54900] mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold text-[#1E2430] group-hover:text-[#F54900] transition-colors leading-tight">
                {dev.name}
              </span>
              <span className="text-[10px] text-neutral-400 font-mono mt-0.5 truncate max-w-full">
                {dev.projectsCount} · {dev.experienceYears}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
