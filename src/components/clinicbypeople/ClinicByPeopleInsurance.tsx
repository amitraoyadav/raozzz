import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  CreditCard,
  Building2,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';
import { INSURANCE_PARTNERS, buildClinicWhatsAppLink } from '../../data/clinicByPeopleData';

interface ClinicByPeopleInsuranceProps {
  onOpenConsultationModal: (speciality?: string, note?: string) => void;
}

export const ClinicByPeopleInsurance: React.FC<ClinicByPeopleInsuranceProps> = ({
  onOpenConsultationModal,
}) => {
  const [selectedInsurer, setSelectedInsurer] = useState('HDFC ERGO');
  const [hasPolicy, setHasPolicy] = useState<'yes' | 'no'>('yes');
  const [checkedStatus, setCheckedStatus] = useState(false);

  const handleQuickCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckedStatus(true);
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-[#F6F9FF] border-b border-slate-200 font-['Lexend',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Info Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200 inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Cashless Hospitalization Support</span>
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1528] tracking-tight leading-tight">
              Cashless Surgery with Full Insurance Support
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Don't let hospital paperwork delay necessary medical procedures. Our specialized in-house insurance desk works directly with your TPA to ensure swift cashless approvals in under 30 minutes.
            </p>

            {/* 3 Pillars */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#0C5BE2] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    30-Minute Cashless Pre-Authorization
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    We initiate and follow up on cashless claims with your insurer so you don't face counter rejections.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#FF6B4A] flex items-center justify-center shrink-0 mt-0.5">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    0% No-Cost EMI Financing Available
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    If your health insurance coverage has a co-pay or sub-limit, pay the balance in zero-interest monthly instalments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    40+ Leading TPAs &amp; Corporate Empanelments
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Accepted across major public &amp; private insurance providers, including group corporate medical policies.
                  </p>
                </div>
              </div>
            </div>

            {/* Mandatory Regulatory Disclaimer */}
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/80 text-[11px] text-amber-900 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>
                <strong>Important Note:</strong> Insurance coverage is subject to the terms and approval of the respective insurer.
              </span>
            </div>
          </div>

          {/* Right Column: Instant Cashless Eligibility Checker Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Free Policy Evaluation
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Check Your Cashless Surgery Eligibility
              </h3>

              {checkedStatus ? (
                <div className="py-6 text-center space-y-4 animate-in fade-in duration-200">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      Eligible for Cashless Assistance!
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Our hospital TPA desk directly supports <strong className="text-slate-900">{selectedInsurer}</strong> with 0% EMI financing.
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      onOpenConsultationModal(
                        'General Surgery',
                        `Cashless verification inquiry for ${selectedInsurer}`
                      )
                    }
                    className="w-full py-3 rounded-xl bg-[#0C5BE2] hover:bg-[#0947b3] text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    Confirm My Cashless Claim
                  </button>
                  <button
                    onClick={() => setCheckedStatus(false)}
                    className="text-[11px] text-slate-500 hover:text-slate-800 underline block mx-auto"
                  >
                    Check another insurer
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuickCheck} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Select Your Insurance Company / TPA
                    </label>
                    <select
                      value={selectedInsurer}
                      onChange={(e) => setSelectedInsurer(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0C5BE2]/20 text-slate-900 font-medium"
                    >
                      {INSURANCE_PARTNERS.map((ins) => (
                        <option key={ins} value={ins}>
                          {ins}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Do you have an active health insurance policy?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setHasPolicy('yes')}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                          hasPolicy === 'yes'
                            ? 'bg-blue-50 border-[#0C5BE2] text-[#0C5BE2]'
                            : 'border-slate-200 text-slate-700'
                        }`}
                      >
                        Yes, I have insurance
                      </button>
                      <button
                        type="button"
                        onClick={() => setHasPolicy('no')}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                          hasPolicy === 'no'
                            ? 'bg-orange-50 border-[#FF6B4A] text-[#FF6B4A]'
                            : 'border-slate-200 text-slate-700'
                        }`}
                      >
                        No / Want 0% EMI
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-[#0C5BE2] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Check Cashless Coverage</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[10px] text-center text-slate-400">
                    Free evaluation by our dedicated TPA desk. Zero obligation.
                  </p>
                </form>
              )}

              {/* Insurer Logos Strip */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Empanelled TPA Network:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {INSURANCE_PARTNERS.slice(0, 8).map((name) => (
                    <span
                      key={name}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-medium text-slate-600"
                    >
                      {name}
                    </span>
                  ))}
                  <span className="px-2 py-0.5 rounded-md bg-blue-50 text-[10px] font-bold text-[#0C5BE2]">
                    +30 More
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
