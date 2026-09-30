import React from 'react';
import { ShieldCheck, Award, Users, HeartHandshake, MapPin, CheckCircle2, Clock } from 'lucide-react';

interface BrioAboutPageProps {
  onExploreTours: () => void;
  onContact: () => void;
}

export const BrioAboutPage: React.FC<BrioAboutPageProps> = ({ onExploreTours, onContact }) => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Banner */}
        <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 text-white rounded-3xl p-8 sm:p-14 shadow-xl border border-teal-800/40 text-center max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3 border border-teal-400/30">
            About Brio Travels
          </span>
          <h1 className="text-2xl sm:text-5xl font-extrabold font-['Poppins'] tracking-tight mb-4">
            India’s Trusted Travel Companion Since 2014
          </h1>
          <p className="text-xs sm:text-base text-slate-300 font-['Inter'] leading-relaxed max-w-2xl mx-auto">
            Headquartered in Connaught Place, New Delhi, Brio Travels creates tailor-made domestic and international journeys that combine authentic cultural discovery, premium comfort, and absolute honesty.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-center">
            <div className="text-3xl font-black text-teal-700 font-['Poppins']">4,900+</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">Happy Travellers</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-center">
            <div className="text-3xl font-black text-teal-700 font-['Poppins']">12+</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">Years in Operation</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-center">
            <div className="text-3xl font-black text-teal-700 font-['Poppins']">100%</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">Verified Hotels</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-center">
            <div className="text-3xl font-black text-teal-700 font-['Poppins']">4.9 / 5</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">Google Review Rating</div>
          </div>
        </div>

        {/* Story & Philosophy */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs max-w-4xl mx-auto space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Poppins']">
            Our Journey & Commitment
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-['Inter']">
            Founded with the conviction that travel should be transparent, stress-free, and culturally enriching, <strong>Brio Travels</strong> has grown from a boutique holiday desk into one of North India’s most dependable tour operators. We understand that every trip represents hard-earned savings, cherished family celebrations, or romantic milestones.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-['Inter']">
            That is why we never rely on third-party broker chains. Our team directly negotiates contracts with top 4-star and 5-star properties, personally inspects vehicle fleets, and conducts background verification for all chauffeurs. We pride ourselves on zero hidden fees, guaranteed price matching, and 24x7 real human support.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-xs text-slate-900 font-semibold">ISO 9001:2015 Quality Certified</strong>
                <p className="text-[11px] text-slate-500">Every package adheres to certified quality management frameworks.</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-xs text-slate-900 font-semibold">Zero-Cost EMI Financing</strong>
                <p className="text-[11px] text-slate-500">Flexible monthly payment schemes with top Indian banks.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onExploreTours}
            className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-md transition-colors cursor-pointer"
          >
            Explore All Tour Packages
          </button>
          <button
            onClick={onContact}
            className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm border border-slate-300 shadow-xs transition-colors cursor-pointer"
          >
            Contact Our Delhi Desk
          </button>
        </div>
      </div>
    </div>
  );
};
