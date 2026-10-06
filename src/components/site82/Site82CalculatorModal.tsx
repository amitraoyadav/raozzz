import React, { useState } from 'react';
import {
  X,
  Calculator,
  TrendingUp,
  Percent,
  Coins,
  ShieldCheck,
  Calendar,
  Building,
  ArrowRight
} from 'lucide-react';
import { site82Config } from '../../config/site82Config';

interface Site82CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const Site82CalculatorModal: React.FC<Site82CalculatorModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation
}) => {
  const [activeTab, setActiveTab] = useState<'emi' | 'yield'>('emi');

  // EMI Calculator State
  const [loanAmountLakhs, setLoanAmountLakhs] = useState<number>(75); // 75 Lakhs
  const [interestRate, setInterestRate] = useState<number>(8.5); // 8.5%
  const [tenureYears, setTenureYears] = useState<number>(20); // 20 years

  // Yield Calculator State
  const [purchasePriceLakhs, setPurchasePriceLakhs] = useState<number>(120); // 1.20 Cr
  const [monthlyRentThousand, setMonthlyRentThousand] = useState<number>(65); // 65,000 / month
  const [annualAppreciationPercent, setAnnualAppreciationPercent] = useState<number>(7.5); // 7.5% per annum

  if (!isOpen) return null;

  // Calculate EMI: P * r * (1+r)^n / ((1+r)^n - 1)
  const P = loanAmountLakhs * 100000;
  const r = interestRate / 12 / 100;
  const n = tenureYears * 12;
  const emi =
    r === 0
      ? P / n
      : (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

  const totalPayment = emi * n;
  const totalInterest = totalPayment - P;

  // Calculate Commercial Yield
  const totalInvestment = purchasePriceLakhs * 100000;
  const annualRent = monthlyRentThousand * 1000 * 12;
  const grossYield = totalInvestment > 0 ? (annualRent / totalInvestment) * 100 : 0;
  // 5-year capital value with compound appreciation
  const estimated5YearValue = totalInvestment * Math.pow(1 + annualAppreciationPercent / 100, 5);
  const total5YearRent = annualRent * 5;
  const totalProjectedGain = (estimated5YearValue - totalInvestment) + total5YearRent;

  const formatLakhsCr = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(amount / 100000).toFixed(2)} Lakh`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#F0D9CC] max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1E2430] to-[#2D3748] text-white p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F54900] flex items-center justify-center text-white">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Real Estate Financial Calculators
              </h3>
              <p className="text-xs text-neutral-400">
                Accurate Indian banking &amp; commercial investment projections
              </p>
            </div>
          </div>

          {/* Tab Switcher */}
          <div className="flex gap-2 mt-5">
            <button
              onClick={() => setActiveTab('emi')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'emi'
                  ? 'bg-[#F54900] text-white shadow-md'
                  : 'bg-white/10 text-neutral-300 hover:bg-white/20'
              }`}
            >
              <Coins className="w-3.5 h-3.5" />
              <span>Home &amp; Commercial Loan EMI</span>
            </button>
            <button
              onClick={() => setActiveTab('yield')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'yield'
                  ? 'bg-[#F54900] text-white shadow-md'
                  : 'bg-white/10 text-neutral-300 hover:bg-white/20'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Commercial Rental ROI Yield</span>
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-[#FCFAF9]">
          {activeTab === 'emi' ? (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Sliders Input Column */}
              <div className="md:col-span-7 space-y-6">
                {/* Loan Amount */}
                <div>
                  <div className="flex justify-between items-center mb-2 text-xs">
                    <span className="font-semibold text-neutral-700">Loan Amount:</span>
                    <span className="font-bold text-[#F54900] text-sm">
                      {formatLakhsCr(loanAmountLakhs * 100000)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="5"
                    value={loanAmountLakhs}
                    onChange={(e) => setLoanAmountLakhs(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#F54900]"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 mt-1 font-mono">
                    <span>₹10 Lakh</span>
                    <span>₹2.5 Cr</span>
                    <span>₹5 Cr</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                  <div className="flex justify-between items-center mb-2 text-xs">
                    <span className="font-semibold text-neutral-700">Annual Interest Rate:</span>
                    <span className="font-bold text-[#F54900] text-sm">{interestRate}% p.a.</span>
                  </div>
                  <input
                    type="range"
                    min="7.0"
                    max="14.0"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#F54900]"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 mt-1 font-mono">
                    <span>7.0% (Best Home Loan)</span>
                    <span>9.5%</span>
                    <span>14.0% (Commercial)</span>
                  </div>
                </div>

                {/* Tenure */}
                <div>
                  <div className="flex justify-between items-center mb-2 text-xs">
                    <span className="font-semibold text-neutral-700">Loan Tenure:</span>
                    <span className="font-bold text-[#F54900] text-sm">{tenureYears} Years</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    step="1"
                    value={tenureYears}
                    onChange={(e) => setTenureYears(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#F54900]"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 mt-1 font-mono">
                    <span>5 Years</span>
                    <span>15 Years</span>
                    <span>30 Years</span>
                  </div>
                </div>
              </div>

              {/* Result Summary Box */}
              <div className="md:col-span-5 bg-white p-6 rounded-2xl border border-[#F0D9CC] shadow-sm space-y-4">
                <div className="text-center pb-4 border-b border-neutral-100">
                  <span className="text-xs uppercase font-mono tracking-wider text-neutral-400 block mb-1">
                    Monthly Equated Installment
                  </span>
                  <div className="text-3xl font-extrabold text-[#F54900]">
                    ₹{Math.round(emi).toLocaleString('en-IN')}
                    <span className="text-xs text-neutral-500 font-normal"> / month</span>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between py-1 border-b border-neutral-100">
                    <span className="text-neutral-500">Principal Amount:</span>
                    <span className="font-semibold text-neutral-800">
                      ₹{P.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-100">
                    <span className="text-neutral-500">Total Interest Payable:</span>
                    <span className="font-semibold text-neutral-800">
                      ₹{Math.round(totalInterest).toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-100">
                    <span className="text-neutral-500">Total Payment (P + I):</span>
                    <span className="font-bold text-[#1E2430]">
                      ₹{Math.round(totalPayment).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenConsultation();
                    }}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#F54900] to-[#F36F21] text-white font-bold text-xs hover:brightness-110 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <span>Check Bank Pre-Approval</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Commercial Yield Sliders */}
              <div className="md:col-span-7 space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2 text-xs">
                    <span className="font-semibold text-neutral-700">Purchase / Investment Value:</span>
                    <span className="font-bold text-[#F54900] text-sm">
                      {formatLakhsCr(purchasePriceLakhs * 100000)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="1000"
                    step="10"
                    value={purchasePriceLakhs}
                    onChange={(e) => setPurchasePriceLakhs(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#F54900]"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 mt-1 font-mono">
                    <span>₹30 Lakh</span>
                    <span>₹5 Cr</span>
                    <span>₹10 Cr</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2 text-xs">
                    <span className="font-semibold text-neutral-700">Expected Monthly Rental:</span>
                    <span className="font-bold text-[#F54900] text-sm">
                      ₹{monthlyRentThousand.toLocaleString('en-IN')},000 / mo
                    </span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="600"
                    step="5"
                    value={monthlyRentThousand}
                    onChange={(e) => setMonthlyRentThousand(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#F54900]"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 mt-1 font-mono">
                    <span>₹15,000</span>
                    <span>₹2,50,000</span>
                    <span>₹6,00,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2 text-xs">
                    <span className="font-semibold text-neutral-700">Projected Capital Appreciation:</span>
                    <span className="font-bold text-[#F54900] text-sm">{annualAppreciationPercent}% p.a.</span>
                  </div>
                  <input
                    type="range"
                    min="3.0"
                    max="15.0"
                    step="0.5"
                    value={annualAppreciationPercent}
                    onChange={(e) => setAnnualAppreciationPercent(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#F54900]"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 mt-1 font-mono">
                    <span>3% (Conservative)</span>
                    <span>8% (NCR Avg)</span>
                    <span>15% (Jewar Express)</span>
                  </div>
                </div>
              </div>

              {/* Yield Summary Card */}
              <div className="md:col-span-5 bg-white p-6 rounded-2xl border border-[#F0D9CC] shadow-sm space-y-4">
                <div className="text-center pb-4 border-b border-neutral-100">
                  <span className="text-xs uppercase font-mono tracking-wider text-neutral-400 block mb-1">
                    Gross Annual Rental Yield
                  </span>
                  <div className="text-3xl font-extrabold text-emerald-600">
                    {grossYield.toFixed(2)}%
                    <span className="text-xs text-neutral-500 font-normal"> / year</span>
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-1">
                    Annual Rental Income: ₹{(annualRent / 100000).toFixed(2)} Lakhs
                  </div>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between py-1 border-b border-neutral-100">
                    <span className="text-neutral-500">5-Yr Estimated Property Value:</span>
                    <span className="font-semibold text-neutral-800">
                      {formatLakhsCr(estimated5YearValue)}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-100">
                    <span className="text-neutral-500">5-Yr Total Rental Received:</span>
                    <span className="font-semibold text-neutral-800">
                      {formatLakhsCr(total5YearRent)}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-100">
                    <span className="text-neutral-500">Total Projected Wealth Creation:</span>
                    <span className="font-bold text-[#F54900]">
                      +{formatLakhsCr(totalProjectedGain)}
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenConsultation();
                    }}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#F54900] to-[#F36F21] text-white font-bold text-xs hover:brightness-110 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <span>View Pre-Leased Inventories</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
