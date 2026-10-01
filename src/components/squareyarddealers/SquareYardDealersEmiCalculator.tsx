import React, { useState, useMemo } from 'react';
import {
  Calculator as CalcIcon,
  IndianRupee,
  Clock,
  Percent,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Info,
  Building2,
  PieChart as PieIcon
} from 'lucide-react';

interface EmiCalculatorProps {
  initialAmount?: number;
  initialRate?: number;
  initialTenureYears?: number;
  onExploreLoans?: (amount: number, tenure: number) => void;
}

export const formatIndianCurrency = (num: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(num);
};

export const SquareYardDealersEmiCalculator: React.FC<EmiCalculatorProps> = ({
  initialAmount = 4500000,
  initialRate = 8.5,
  initialTenureYears = 20,
  onExploreLoans
}) => {
  const [loanAmount, setLoanAmount] = useState<number>(initialAmount);
  const [interestRate, setInterestRate] = useState<number>(initialRate);
  const [tenureYears, setTenureYears] = useState<number>(initialTenureYears);

  // Reducing balance EMI calculation
  const { monthlyEmi, totalInterest, totalPayable, principalRatio, interestRatio } = useMemo(() => {
    const P = Math.max(10000, loanAmount);
    const n = Math.max(1, tenureYears * 12);
    const r = Math.max(0.1, interestRate) / 12 / 100;

    let emi = 0;
    if (r === 0) {
      emi = P / n;
    } else {
      const pow = Math.pow(1 + r, n);
      emi = (P * r * pow) / (pow - 1);
    }

    const payable = emi * n;
    const interest = Math.max(0, payable - P);

    const pRatio = Math.round((P / payable) * 100);
    const iRatio = 100 - pRatio;

    return {
      monthlyEmi: Math.round(emi),
      totalInterest: Math.round(interest),
      totalPayable: Math.round(payable),
      principalRatio: pRatio,
      interestRatio: iRatio
    };
  }, [loanAmount, interestRate, tenureYears]);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Sliders & Numeric Inputs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Loan Amount Input */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="font-extrabold text-slate-900 uppercase tracking-wider">
                Home Loan Amount
              </label>
              <div className="relative w-44">
                <span className="absolute left-3 top-2 font-bold text-slate-400">₹</span>
                <input
                  type="number"
                  min={100000}
                  max={100000000}
                  step={50000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full pl-7 pr-3 py-1.5 text-right font-black text-sm text-blue-700 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <input
              type="range"
              min={500000}
              max={50000000}
              step={100000}
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 rounded-lg cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400">
              <span>₹5 Lakh</span>
              <span>₹2.5 Crore</span>
              <span>₹5 Crore</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="font-extrabold text-slate-900 uppercase tracking-wider">
                Interest Rate (p.a.)
              </label>
              <div className="relative w-28">
                <input
                  type="number"
                  min={6}
                  max={18}
                  step={0.1}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full pr-7 pl-3 py-1.5 text-right font-black text-sm text-blue-700 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                />
                <span className="absolute right-3 top-2 font-bold text-slate-400">%</span>
              </div>
            </div>
            <input
              type="range"
              min={6.5}
              max={15}
              step={0.05}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 rounded-lg cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400">
              <span>6.5%</span>
              <span>Prevailing: 8.5%</span>
              <span>15.0%</span>
            </div>
          </div>

          {/* Loan Tenure */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="font-extrabold text-slate-900 uppercase tracking-wider">
                Loan Tenure (Years)
              </label>
              <div className="relative w-28">
                <input
                  type="number"
                  min={1}
                  max={30}
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full pr-10 pl-3 py-1.5 text-right font-black text-sm text-blue-700 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                />
                <span className="absolute right-3 top-2 font-bold text-slate-400 text-xs">Yrs</span>
              </div>
            </div>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full h-2 rounded-lg cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400">
              <span>5 Yrs</span>
              <span>15 Yrs</span>
              <span>30 Yrs</span>
            </div>
          </div>
        </div>

        {/* Right Column: Calculated Results & Breakup */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#02051a] text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl border border-slate-800">
          <div>
            <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block">
              Estimated Monthly EMI
            </span>
            <div className="text-3xl sm:text-4xl font-black text-white mt-1">
              {formatIndianCurrency(monthlyEmi)}
              <span className="text-xs text-slate-400 font-normal"> / month</span>
            </div>
          </div>

          <div className="space-y-2.5 pt-2 border-t border-slate-800 text-xs">
            <div className="flex justify-between items-center text-slate-300">
              <span>Principal Amount:</span>
              <strong className="text-white font-bold">{formatIndianCurrency(loanAmount)}</strong>
            </div>

            <div className="flex justify-between items-center text-slate-300">
              <span>Total Interest Payable:</span>
              <strong className="text-amber-400 font-bold">{formatIndianCurrency(totalInterest)}</strong>
            </div>

            <div className="flex justify-between items-center text-slate-300 pt-2 border-t border-slate-800/80">
              <span className="font-bold text-white">Total Amount Payable:</span>
              <strong className="text-white font-extrabold text-sm">{formatIndianCurrency(totalPayable)}</strong>
            </div>
          </div>

          {/* Visual Progress Bar Ratio */}
          <div className="space-y-1.5 pt-1">
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>Principal ({principalRatio}%)</span>
              <span>Interest ({interestRatio}%)</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden flex">
              <div style={{ width: `${principalRatio}%` }} className="bg-blue-500 h-full" />
              <div style={{ width: `${interestRatio}%` }} className="bg-amber-400 h-full" />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => onExploreLoans?.(loanAmount, tenureYears)}
              className="w-full py-3.5 px-6 rounded-full bg-amber-400 hover:bg-yellow-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-400/20"
            >
              <span>Explore Home Loan Options</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>

      {/* Calculator Disclaimer */}
      <div className="pt-4 border-t border-slate-100 flex items-start gap-2 text-[11px] text-slate-500 leading-relaxed italic">
        <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
        <span>
          Calculator results are illustrative estimates only. Actual loan terms depend on the applicable lender and applicant profile.
        </span>
      </div>
    </div>
  );
};
