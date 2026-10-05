import React, { useState } from 'react';
import {
  Building2,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  Globe,
  Sparkles,
  ArrowRight,
  Disc,
  Clock,
  Phone,
  Mail,
  User,
  MapPin,
  FileText
} from 'lucide-react';
import { site77Config } from '../../config/site77Config';
import { FRANCHISE_TIERS, FranchiseTier } from '../../data/site77Data';

export const Site77Franchise: React.FC = () => {
  // Form State
  const [applicantName, setApplicantName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [targetCity, setTargetCity] = useState<string>('Mumbai');
  const [investmentBracket, setInvestmentBracket] = useState<string>('₹15 Cr – ₹25 Cr');
  const [hospitalityExp, setHospitalityExp] = useState<string>('3–5 Years in Nightlife / F&B');
  const [message, setMessage] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="py-24 bg-[#07080A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#16140D] mb-4">
            <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#F3E5AB] uppercase">
              BUSINESS OPPORTUNITY
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-[0.08em] text-white uppercase mb-4">
            FRANCHISE & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059]">
              GLOBAL EXPANSION
            </span>
          </h2>

          <div className="flex items-center justify-center space-x-4 max-w-xs mx-auto my-5">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
            <Disc className="w-3.5 h-3.5 text-[#D4AF37]" />
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
          </div>

          <p className="text-gray-300 text-sm sm:text-base font-light">
            Partner with India’s most profitable luxury nightlife brand. Nocturna delivers turnkey 
            architectural blueprints, global artist booking networks, and industry-leading 35%+ EBITDA margins.
          </p>
        </div>

        {/* 4 Brand Advantages Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="p-6 rounded-2xl bg-[#0E1015] border border-white/10 hover:border-[#D4AF37]/40 transition-all text-center">
            <TrendingUp className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
            <h3 className="font-serif text-2xl font-bold text-white mb-1">32% – 42%</h3>
            <span className="text-xs font-mono text-[#F3E5AB] uppercase tracking-wider block mb-2">
              EBITDA Operating Margins
            </span>
            <p className="text-xs text-gray-400 font-light">
              Premium beverage pricing and table minimums yield high operational profitability.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0E1015] border border-white/10 hover:border-[#D4AF37]/40 transition-all text-center">
            <Clock className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
            <h3 className="font-serif text-2xl font-bold text-white mb-1">16 – 22 Mo</h3>
            <span className="text-xs font-mono text-[#F3E5AB] uppercase tracking-wider block mb-2">
              Average Capital Payback
            </span>
            <p className="text-xs text-gray-400 font-light">
              Rapid capital recoupment through high-velocity weekend and holiday bookings.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0E1015] border border-white/10 hover:border-[#D4AF37]/40 transition-all text-center">
            <Globe className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
            <h3 className="font-serif text-2xl font-bold text-white mb-1">Global Artists</h3>
            <span className="text-xs font-mono text-[#F3E5AB] uppercase tracking-wider block mb-2">
              Turnkey Artist Booking
            </span>
            <p className="text-xs text-gray-400 font-light">
              Direct access to our roster of Tomorrowland, Armada, and Bollywood top-tier talent.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0E1015] border border-white/10 hover:border-[#D4AF37]/40 transition-all text-center">
            <ShieldCheck className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
            <h3 className="font-serif text-2xl font-bold text-white mb-1">Full SOP Support</h3>
            <span className="text-xs font-mono text-[#F3E5AB] uppercase tracking-wider block mb-2">
              Turnkey Operations
            </span>
            <p className="text-xs text-gray-400 font-light">
              Architectural acoustic blueprints, mixology training, POS ERP, and door security systems.
            </p>
          </div>
        </div>

        {/* Investment Models Table */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-white uppercase tracking-wider">
              CAPITAL INVESTMENT BRACKETS
            </h3>
            <p className="text-xs font-mono text-gray-400 mt-1 uppercase tracking-widest">
              Available Territories & Required Parameters
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {FRANCHISE_TIERS.map((tier, idx) => (
              <div
                key={idx}
                className="bg-[#0E1015] border border-white/10 hover:border-[#D4AF37] rounded-2xl p-6 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-2">
                    MODEL 0{idx + 1}
                  </div>
                  <h4 className="font-serif text-xl font-bold text-white uppercase tracking-wide mb-4">
                    {tier.cityTier}
                  </h4>

                  <div className="space-y-3 text-xs border-t border-b border-white/10 py-4 mb-6">
                    <div>
                      <span className="text-gray-400 block text-[10px] font-mono">TARGET MARKETS</span>
                      <span className="text-white font-semibold">
                        {tier.targetCities.join(', ')}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[10px] font-mono">CARPET AREA REQUIREMENT</span>
                      <span className="text-white font-semibold">{tier.carpetArea}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[10px] font-mono">CAPITAL INVESTMENT</span>
                      <span className="text-[#F3E5AB] font-bold font-mono text-sm">
                        {tier.investmentRange}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[10px] font-mono">ESTIMATED PAYBACK</span>
                      <span className="text-emerald-400 font-semibold">{tier.paybackPeriod}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[10px] font-mono">PROJECTED EBITDA</span>
                      <span className="text-white font-bold">{tier.expectedEbitda}</span>
                    </div>
                  </div>
                </div>

                <a
                  href="#franchise-form"
                  className="w-full py-2.5 rounded border border-[#D4AF37]/50 text-[#F3E5AB] hover:bg-[#D4AF37] hover:text-black text-xs font-mono uppercase tracking-wider text-center transition-all block"
                >
                  Inquire for this Model
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Franchise Expression of Interest Form */}
        <div id="franchise-form" className="max-w-3xl mx-auto bg-[#0E1015] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-white uppercase tracking-wider">
              FRANCHISE EXPRESSION OF INTEREST
            </h3>
            <p className="text-xs text-gray-400 font-light mt-1">
              Submit your preliminary credentials. Our Director of Global Expansion will initiate NDA and disclosure discussions.
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center p-8 bg-[#141822] rounded-xl border border-[#D4AF37] space-y-4 animate-fadeIn">
              <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto" />
              <h4 className="font-serif text-xl font-bold text-white uppercase tracking-wide">
                EXPRESSION OF INTEREST RECEIVED
              </h4>
              <p className="text-xs text-gray-300 font-light max-w-md mx-auto">
                Thank you, <strong>{applicantName}</strong>. Your franchise inquiry for <strong>{targetCity}</strong> has been logged. Our Executive Directorate will reach out within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-6 py-2 rounded border border-white/20 text-xs font-mono uppercase tracking-wider text-gray-300 hover:text-white"
              >
                Submit Additional Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-gray-400 mb-1">
                    Applicant / Entity Name *
                  </label>
                  <input
                    type="text"
                    value={applicantName}
                    onChange={e => setApplicantName(e.target.value)}
                    placeholder="Siddharth Singhania & Partners"
                    className="w-full px-3 py-2.5 rounded-lg bg-black/60 border border-white/10 text-white text-xs font-mono focus:border-[#D4AF37] focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-gray-400 mb-1">
                    Contact Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="+91 98111 22222"
                    className="w-full px-3 py-2.5 rounded-lg bg-black/60 border border-white/10 text-white text-xs font-mono focus:border-[#D4AF37] focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-gray-400 mb-1">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="siddharth@singhaniahospitality.com"
                    className="w-full px-3 py-2.5 rounded-lg bg-black/60 border border-white/10 text-white text-xs font-mono focus:border-[#D4AF37] focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-gray-400 mb-1">
                    Target City / Territory *
                  </label>
                  <input
                    type="text"
                    value={targetCity}
                    onChange={e => setTargetCity(e.target.value)}
                    placeholder="e.g. Mumbai, Dubai, Gurugram, Bengaluru"
                    className="w-full px-3 py-2.5 rounded-lg bg-black/60 border border-white/10 text-white text-xs font-mono focus:border-[#D4AF37] focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-gray-400 mb-1">
                    Available Investment Capacity *
                  </label>
                  <select
                    value={investmentBracket}
                    onChange={e => setInvestmentBracket(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg bg-black/60 border border-white/10 text-white text-xs font-mono focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option value="₹10 Cr – ₹15 Cr">₹10 Cr – ₹15 Cr (High-Growth Tier 2)</option>
                    <option value="₹15 Cr – ₹25 Cr">₹15 Cr – ₹25 Cr (Metro Tier 1)</option>
                    <option value="₹25 Cr – ₹40 Cr+">₹25 Cr – ₹40 Cr+ (Global Flagship / Multi-Unit)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-gray-400 mb-1">
                    Prior F&B / Nightlife Experience
                  </label>
                  <select
                    value={hospitalityExp}
                    onChange={e => setHospitalityExp(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg bg-black/60 border border-white/10 text-white text-xs font-mono focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option value="Extensive Nightlife / F&B Owner">Extensive Nightlife / F&B Owner</option>
                    <option value="Luxury Real Estate / Mall Developer">Luxury Real Estate / Mall Developer</option>
                    <option value="High-Net-Worth Investor with Operator Partner">High-Net-Worth Investor</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-gray-400 mb-1">
                  Proposed Location Details / Remarks
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Outline proposed location (e.g. standalone property, mall rooftop), square footage, and project timeline."
                  className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/10 text-white text-xs font-mono focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] text-black font-bold text-xs uppercase tracking-[0.2em] shadow-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center space-x-2"
              >
                <span>Submit Confidential Franchise Application</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
