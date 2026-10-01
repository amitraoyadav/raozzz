import React, { useState, useMemo } from 'react';
import { Calculator, IndianRupee, ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, PieChart } from 'lucide-react';

export const formatIndianCurrency = (val: number): string => {
  if (val >= 10000000) {
    const cr = val / 10000000;
    return `₹ ${cr.toFixed(2).replace(/\.00$/, '')} Cr`;
  }
  if (val >= 100000) {
    const lac = val / 100000;
    return `₹ ${lac.toFixed(2).replace(/\.00$/, '')} Lac`;
  }
  return `₹ ${val.toLocaleString('en-IN')}`;
};

interface SabkaLoansCalculatorProps {
  onApplyForLoan?: (amount: number, tenureMonths: number) => void;
  onApplyWithDetails?: (amount: number, tenureMonths: number, type: string) => void;
}

export const SabkaLoansCalculator: React.FC<SabkaLoansCalculatorProps> = ({
  onApplyForLoan,
  onApplyWithDetails
}) => {
  const [loanAmount, setLoanAmount] = useState<number>(500000);
  const [tenureYears, setTenureYears] = useState<number>(3);
  const [interestRate, setInterestRate] = useState<number>(11.5);

  const tenureMonths = tenureYears * 12;

  const { monthlyEmi, totalInterest, totalPayment, principalPercent, interestPercent } = useMemo(() => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenureMonths;

    if (P <= 0 || n <= 0) {
      return { monthlyEmi: 0, totalInterest: 0, totalPayment: 0, principalPercent: 100, interestPercent: 0 };
    }

    const emi = Math.round((P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    const totalPay = emi * n;
    const totalInt = totalPay - P;

    const pPct = Math.round((P / totalPay) * 100);
    const iPct = 100 - pPct;

    return {
      monthlyEmi: emi,
      totalInterest: Math.max(0, totalInt),
      totalPayment: totalPay,
      principalPercent: pPct,
      interestPercent: iPct
    };
  }, [loanAmount, tenureMonths, interestRate]);

  const formatRupee = (val: number) => `₹ ${val.toLocaleString('en-IN')}`;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-xl">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Sliders Area */}
        <div className="w-full lg:w-3/5 space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Calculator className="w-4 h-4" />
            </div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-900">
              BrightLoans EMI Calculator
            </h3>
          </div>

          {/* Amount Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-700 uppercase">Desired Loan Amount</span>
              <span className="font-extrabold text-blue-700 text-sm">{formatRupee(loanAmount)}</span>
            </div>
            <input
              type="range"
              min={50000}
              max={5000000}
              step={25000}
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-500">
              <span>₹ 50,000</span>
              <span>₹ 25 Lakhs</span>
              <span>₹ 50 Lakhs</span>
            </div>
          </div>

          {/* Tenure Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-700 uppercase">Loan Duration (Years)</span>
              <span className="font-extrabold text-blue-700 text-sm">
                {tenureYears} Years ({tenureMonths} Months)
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={7}
              step={1}
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-500">
              <span>1 Year</span>
              <span>3 Years</span>
              <span>7 Years</span>
            </div>
          </div>

          {/* Interest Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-700 uppercase">Expected Rate of Interest</span>
              <span className="font-extrabold text-blue-700 text-sm">{interestRate}% p.a.</span>
            </div>
            <input
              type="range"
              min={8.5}
              max={22}
              step={0.25}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-500">
              <span>8.5% (Prime LAP)</span>
              <span>11.5% (Personal)</span>
              <span>22% (Unsecured)</span>
            </div>
          </div>
        </div>

        {/* Output Card with visual split */}
        <div className="w-full lg:w-2/5 bg-gradient-to-br from-[#0b1b36] to-[#1e3a8a] text-white p-6 rounded-3xl shadow-xl space-y-5">
          <span className="text-[10px] uppercase font-bold text-blue-300 tracking-wider block">
            Estimated Monthly Installment (EMI)
          </span>

          <div>
            <div className="text-3xl sm:text-4xl font-black text-amber-400">
              {formatRupee(monthlyEmi)}
            </div>
            <span className="text-[11px] text-blue-200/80 block mt-1">
              For {tenureMonths} monthly payments
            </span>
          </div>

          {/* Visual Ratio Bar */}
          <div className="space-y-1">
            <div className="flex justify-between text-[11px] text-blue-200">
              <span>Principal: {principalPercent}%</span>
              <span>Interest: {interestPercent}%</span>
            </div>
            <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden flex">
              <div style={{ width: `${principalPercent}%` }} className="bg-amber-400 h-full" />
              <div style={{ width: `${interestPercent}%` }} className="bg-blue-400 h-full" />
            </div>
          </div>

          <div className="pt-2 border-t border-white/10 space-y-2 text-xs">
            <div className="flex justify-between text-blue-100">
              <span>Principal Borrowed:</span>
              <span className="font-bold text-white">{formatRupee(loanAmount)}</span>
            </div>
            <div className="flex justify-between text-blue-100">
              <span>Total Interest Charged:</span>
              <span className="font-bold text-amber-300">{formatRupee(totalInterest)}</span>
            </div>
            <div className="flex justify-between text-blue-100 border-t border-white/10 pt-2 font-bold">
              <span>Total Amount Payable:</span>
              <span className="text-white">{formatRupee(totalPayment)}</span>
            </div>
          </div>

          <button
            onClick={() => {
              if (onApplyWithDetails) {
                onApplyWithDetails(loanAmount, tenureMonths, 'Personal Loan');
              } else if (onApplyForLoan) {
                onApplyForLoan(loanAmount, tenureMonths);
              }
            }}
            className="w-full py-3 rounded-full bg-amber-400 hover:bg-yellow-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Apply For This Amount</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </div>
  );
};
