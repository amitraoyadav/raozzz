import React from 'react';
import {
  Award,
  Users,
  Building,
  CheckCircle,
  MessageCircle,
  Phone,
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { site82Config } from '../../config/site82Config';

interface Site82TrustStatsProps {
  onCheckProjects: () => void;
  onTalkToExpert: () => void;
  onBookConsultation: () => void;
}

export const Site82TrustStats: React.FC<Site82TrustStatsProps> = ({
  onCheckProjects,
  onTalkToExpert,
  onBookConsultation
}) => {
  return (
    <section className="relative px-6 pb-14 lg:pb-24 lg:px-20 bg-[#FCFAF9] overflow-hidden">
      {/* Background Decorative SVG Wave */}
      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Section Heading & Subtitle */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-[#1E2430] tracking-tight leading-tight max-w-4xl mx-auto">
            Best Real Estate Consultant in Noida for Residential &amp; Commercial Properties
          </h2>
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200">
            <CheckCircle className="w-4 h-4 text-[#F54900]" />
            <span className="text-sm font-semibold text-neutral-800">
              Trusted By Thousands of Buyers Across India
            </span>
          </div>
        </div>

        {/* DESKTOP 3-COLUMN ORBITAL ARCHITECTURE (≥ xl) */}
        <div className="hidden xl:flex items-start justify-center gap-6 2xl:gap-10">
          {/* Left Column: 14+ Years Trust + Project Discovery Card + 15M+ Customers */}
          <div className="w-[300px] flex flex-col gap-6 shrink-0 pt-4 z-10">
            {/* 14+ Years */}
            <div className="bg-white rounded-3xl p-5 flex items-center gap-4 shadow-[0_30px_60px_rgba(20,20,40,.08)] border border-neutral-100 hover:border-orange-200 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-orange-100/70 text-[#F54900] flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-3xl font-bold text-[#1E2430] leading-none">
                  {site82Config.YEARS_OF_TRUST}
                </div>
                <div className="text-xs text-neutral-500 font-medium mt-1">
                  Years of Trust
                </div>
              </div>
            </div>

            {/* Check Projects Advisory Card */}
            <div className="bg-white rounded-3xl p-6 shadow-[0_30px_60px_rgba(20,20,40,.08)] border border-neutral-100 flex flex-col items-center text-center">
              <p className="text-xs text-neutral-600 leading-relaxed">
                Buying a property is more than choosing a home or making an investment, it’s about making informed decisions with the right guidance. Wealth Nexus is one of the{' '}
                <span className="text-[#F54900] font-bold">best real estate consultants in Noida</span>
                , helping homebuyers discover{' '}
                <span className="text-[#F54900] font-bold">RERA-approved</span> residential, commercial, luxury, and investment properties across Noida, Greater Noida, and Yamuna Expressway.
              </p>
              <button
                onClick={onCheckProjects}
                className="mt-5 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#F54900] hover:bg-[#C7510B] transition-all shadow-md shadow-orange-500/30 cursor-pointer"
              >
                Check Projects
              </button>
            </div>

            {/* 15M+ Customers */}
            <div className="bg-white rounded-3xl p-5 flex items-center gap-4 shadow-[0_30px_60px_rgba(20,20,40,.08)] border border-neutral-100 hover:border-orange-200 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-orange-100/70 text-[#F54900] flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-3xl font-bold text-[#1E2430] leading-none">
                  {site82Config.HAPPY_CUSTOMERS}
                </div>
                <div className="text-xs text-neutral-500 font-medium mt-1">
                  Happy Customers
                </div>
              </div>
            </div>
          </div>

          {/* Center Column: Concentric Glowing Rings + Building Render */}
          <div className="relative w-[500px] h-[660px] shrink-0 flex items-center justify-center">
            {/* Concentric Glow Rings */}
            <div className="absolute inset-0 m-auto w-[480px] h-[480px] rounded-full border border-orange-500/20 bg-[radial-gradient(circle,rgba(245,115,50,0.22)_0%,rgba(245,115,50,0.1)_55%,rgba(245,115,50,0)_78%)] pointer-events-none" />
            <div className="absolute inset-0 m-auto w-[380px] h-[380px] rounded-full border border-orange-500/20 pointer-events-none" />
            <div className="absolute inset-0 m-auto w-[280px] h-[280px] rounded-full border border-orange-500/20 pointer-events-none" />

            {/* Central Building Visual */}
            <div className="relative z-10 w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="Luxury Modern Architecture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-300 font-bold block mb-1">
                  Verified Grade-A Realty
                </span>
                <h4 className="text-lg font-bold">Prime NCR Sanctuaries</h4>
              </div>
            </div>
          </div>

          {/* Right Column: Talk to Expert + Advisory Services + 500+ Projects Listed */}
          <div className="w-[300px] flex flex-col gap-6 shrink-0 pt-16 z-10">
            {/* Talk to Expert Link */}
            <button
              onClick={onTalkToExpert}
              className="bg-white rounded-3xl p-5 flex items-center gap-4 shadow-[0_30px_60px_rgba(20,20,40,.08)] border border-neutral-100 hover:border-orange-200 transition-all hover:-translate-y-1 cursor-pointer text-left w-full"
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-100/70 text-[#F54900] flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <div className="text-lg font-bold text-[#1E2430]">Talk to Expert</div>
                <div className="text-xs text-neutral-500">Free 1-on-1 Consultation</div>
              </div>
            </button>

            {/* End-to-end Assistance Card */}
            <div className="bg-white rounded-3xl p-6 shadow-[0_30px_60px_rgba(20,20,40,.08)] border border-neutral-100 flex flex-col items-center text-center">
              <p className="text-xs text-neutral-600 leading-relaxed">
                Our experienced property consultants provide <span className="text-[#F54900] font-bold">end-to-end assistance</span>, including project shortlisting, site visits, investment analysis, home loan support, RERA verification, legal documentation, and after-sales guidance.
              </p>
              <button
                onClick={onTalkToExpert}
                className="mt-5 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#F54900] hover:bg-[#C7510B] transition-all shadow-md shadow-orange-500/30 cursor-pointer"
              >
                Talk to Experts
              </button>
            </div>

            {/* 500+ Projects Listed */}
            <div className="bg-white rounded-3xl p-5 flex items-center gap-4 shadow-[0_30px_60px_rgba(20,20,40,.08)] border border-neutral-100 hover:border-orange-200 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-orange-100/70 text-[#F54900] flex items-center justify-center shrink-0">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <div className="text-3xl font-bold text-[#1E2430] leading-none">
                  {site82Config.PROJECTS_LISTED}
                </div>
                <div className="text-xs text-neutral-500 font-medium mt-1">
                  Projects Listed
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE & TABLET RESPONSIVE LAYOUT (< xl) */}
        <div className="xl:hidden space-y-6">
          {/* Mobile Image with Concentric Rings */}
          <div className="relative flex items-center justify-center my-6">
            <div className="w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-2 border-white">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
                alt="Luxury Property"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* 3 Metric Cards Grid */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-2xl p-3.5 text-center shadow-md border border-neutral-100">
              <Award className="w-6 h-6 text-[#F54900] mx-auto mb-1" />
              <div className="text-xl font-bold text-[#1E2430]">{site82Config.YEARS_OF_TRUST}</div>
              <div className="text-[11px] text-neutral-500">Years</div>
            </div>
            <div className="bg-white rounded-2xl p-3.5 text-center shadow-md border border-neutral-100">
              <Users className="w-6 h-6 text-[#F54900] mx-auto mb-1" />
              <div className="text-xl font-bold text-[#1E2430]">{site82Config.HAPPY_CUSTOMERS}</div>
              <div className="text-[11px] text-neutral-500">Customers</div>
            </div>
            <div className="bg-white rounded-2xl p-3.5 text-center shadow-md border border-neutral-100">
              <Building className="w-6 h-6 text-[#F54900] mx-auto mb-1" />
              <div className="text-xl font-bold text-[#1E2430]">{site82Config.PROJECTS_LISTED}</div>
              <div className="text-[11px] text-neutral-500">Projects</div>
            </div>
          </div>

          {/* Mobile CTAs */}
          <div className="flex flex-col gap-3 pt-2">
            <button
              onClick={onCheckProjects}
              className="w-full p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-center justify-between text-left font-bold text-sm text-[#1E2430] cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#F54900]" />
                <span>Explore Verified Projects</span>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-400" />
            </button>

            <button
              onClick={onTalkToExpert}
              className="w-full p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-center justify-between text-left font-bold text-sm text-[#1E2430] cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-[#F54900]" />
                <span>Talk to Expert Advisor</span>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-400" />
            </button>

            <button
              onClick={onBookConsultation}
              className="w-full p-4 rounded-2xl bg-[#F54900] text-white shadow-md shadow-orange-500/30 flex items-center justify-center font-bold text-sm uppercase tracking-wider cursor-pointer"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
