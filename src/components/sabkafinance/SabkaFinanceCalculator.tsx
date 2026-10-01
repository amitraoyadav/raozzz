import React, { useState, useMemo } from 'react';
import { Calculator, IndianRupee, ArrowRight, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

interface SabkaFinanceCalculatorProps {
  onApplyForAmount?: (amount: number, tenureMonths: number) => void;
}

export const SabkaFinanceCalculator: React.FC<SabkaFinanceCalculatorProps> = ({
  onApplyForAmount
}) => {
  const [loanAmount, setLoanAmount] = useState<number>(300000);
  const [tenureMonths, setTenureMonths] = useState<number>(24);
  const [interestRate, setInterestRate] = useState<number>(12.5);

  const { monthlyEmi, totalInterest, totalPayment } = useMemo(() => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenureMonths;

    if (P <= 0 || n <= 0) {
      return { monthlyEmi: 0, totalInterest: 0, totalPayment: 0 };
    }

    if (r === 0) {
      const emi = Math.round(P / n);
      return { monthlyEmi: emi, totalInterest: 0, totalPayment: P };
    }

    const emi = Math.round((P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    const totalPay = emi * n;
    const totalInt = totalPay - P;

    return {
      monthlyEmi: emi,
      totalInterest: Math.max(0, totalInt),
      totalPayment: totalPay
    };
  }, [loanAmount, tenureMonths, interestRate]);

  const formatRupee = (val: number) => {
    return `₹ ${val.toLocaleString('en-IN')}`;
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-teal-100 shadow-xl">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Sliders Area */}
        <div className="w-full lg:w-3/5 space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
              <Calculator className="w-4 h-4" />
            </div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-900">
              Interactive Loan EMI Estimator
            </h3>
          </div>

          {/* Amount Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-700 uppercase">Loan Requirement</span>
              <span className="font-extrabold text-teal-700 text-sm">{formatRupee(loanAmount)}</span>
            </div>
            <input
              type="range"
              min={25000}
              max={1500000}
              step={5000}
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
            />
            <div className="flex justify-between text-[11px] text-slate-600">
              <span>₹ 25,000</span>
              <span>₹ 7.5 Lakhs</span>
              <span>₹ 15 Lakhs</span>
            </div>
          </div>

          {/* Tenure Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-700 uppercase">Repayment Tenure</span>
              <span className="font-extrabold text-teal-700 text-sm">
                {tenureMonths} Months ({Math.round(tenureMonths / 12 * 10) / 10} Yrs)
              </span>
            </div>
            <input
              type="range"
              min={6}
              max={60}
              step={3}
              value={tenureMonths}
              onChange={(e) => setTenureMonths(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
            />
            <div className="flex justify-between text-[11px] text-slate-600">
              <span>6 Months</span>
              <span>24 Months</span>
              <span>60 Months</span>
            </div>
          </div>

          {/* Indicative Interest Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-700 uppercase">Indicative Interest Rate</span>
              <span className="font-extrabold text-teal-700 text-sm">{interestRate}% p.a.</span>
            </div>
            <input
              type="range"
              min={10.5}
              max={24}
              step={0.25}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
            />
            <div className="flex justify-between text-[11px] text-slate-600">
              <span>10.5% (Prime)</span>
              <span>16% (Standard)</span>
              <span>24% (Max)</span>
            </div>
          </div>
        </div>

        {/* Output Card */}
        <div className="w-full lg:w-2/5 bg-gradient-to-br from-[#042f2e] to-[#0f766e] text-white p-6 rounded-3xl shadow-xl space-y-5">
          <span className="text-[10px] uppercase font-bold text-teal-300 tracking-wider block">
            Estimated Monthly Installment
          </span>

          <div>
            <div className="text-3xl sm:text-4xl font-black text-amber-400">
              {formatRupee(monthlyEmi)}
            </div>
            <span className="text-[11px] text-teal-200/80 block mt-1">
              Estimated per month for {tenureMonths} months
            </span>
          </div>

          <div className="pt-4 border-t border-white/10 space-y-2.5 text-xs">
            <div className="flex justify-between text-teal-100">
              <span>Principal Amount:</span>
              <span className="font-bold text-white">{formatRupee(loanAmount)}</span>
            </div>
            <div className="flex justify-between text-teal-100">
              <span>Estimated Interest:</span>
              <span className="font-bold text-amber-300">{formatRupee(totalInterest)}</span>
            </div>
            <div className="flex justify-between text-teal-100 border-t border-white/10 pt-2 font-bold">
              <span>Total Payable:</span>
              <span className="text-white">{formatRupee(totalPayment)}</span>
            </div>
          </div>

          <button
            onClick={() => onApplyForAmount && onApplyForAmount(loanAmount, tenureMonths)}
            className="w-full py-3 rounded-full bg-amber-400 hover:bg-yellow-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Apply For This Loan</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <p className="text-[10px] text-teal-200/70 text-center leading-relaxed">
            *Indicative calculation only. Final EMI, rate and sanction depend on lender evaluation.
          </p>
        </div>
      </div>
    </div>
  );
};
