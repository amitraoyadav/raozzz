import React, { useState } from 'react';
import {
  CreditCard,
  CheckCircle2,
  AlertCircle,
  X,
  ShieldCheck,
  Building,
  User,
  Phone,
  FileText,
  DollarSign,
  ArrowRight,
  Download,
  RotateCcw,
} from 'lucide-react';
import { MEDICARE_CONFIG } from '../../data/medicarePlusData';

interface MedicarePlusOnlinePaymentProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MedicarePlusOnlinePayment: React.FC<MedicarePlusOnlinePaymentProps> = ({
  isOpen,
  onClose,
}) => {
  const [paymentCategory, setPaymentCategory] = useState<'opd' | 'consultation' | 'diagnostic' | 'other'>('opd');
  const [uhid, setUhid] = useState('MPH-2026-');
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('1200');
  const [remarks, setRemarks] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');

  const [loading, setLoading] = useState(false);
  const [successReceipt, setSuccessReceipt] = useState<{
    txnId: string;
    date: string;
    amount: string;
    patientName: string;
    uhid: string;
    category: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleGenerateSampleUhid = () => {
    const random = Math.floor(100000 + Math.random() * 900000);
    setUhid(`MPH-2026-${random}`);
  };

  const handleCategorySelect = (cat: 'opd' | 'consultation' | 'diagnostic' | 'other') => {
    setPaymentCategory(cat);
    if (cat === 'opd') setAmount('1000');
    else if (cat === 'consultation') setAmount('1500');
    else if (cat === 'diagnostic') setAmount('2800');
    else setAmount('5000');
  };

  const handleProcessDemoPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !phone.trim() || !amount.trim()) {
      alert('Please fill in required fields (Patient Name, Phone, and Amount).');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccessReceipt({
        txnId: 'TXN-DEMO-' + Math.floor(10000000 + Math.random() * 90000000),
        date: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
        amount,
        patientName,
        uhid: uhid || 'GUEST-DEMO',
        category:
          paymentCategory === 'opd'
            ? 'OPD Registration & Token Fee'
            : paymentCategory === 'consultation'
            ? 'Specialist Doctor Consultation'
            : paymentCategory === 'diagnostic'
            ? 'Pathology & Radiology Diagnostics'
            : 'Inpatient / Other Hospital Services',
      });
    }, 1200);
  };

  const handleReset = () => {
    setSuccessReceipt(null);
    setPatientName('');
    setPhone('');
    setEmail('');
    setRemarks('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto font-['Satoshi',sans-serif]">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0C4A60] to-[#00A896] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-400 text-slate-900">
              Demo Payment Portal
            </span>
            <span className="text-xs text-teal-100 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-200" />
              128-Bit SSL Simulated Gateway
            </span>
          </div>

          <h3 className="text-2xl font-bold tracking-tight">Online Hospital Payment Portal</h3>
          <p className="text-xs text-teal-50 mt-1">
            Safe demonstration portal for OPD registration, specialist consultation, and diagnostic payments.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {successReceipt ? (
            /* Safe Demo Receipt View */
            <div className="space-y-6">
              <div className="text-center py-4 bg-emerald-50 rounded-xl border border-emerald-200">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-emerald-900">Payment Simulation Successful</h4>
                <p className="text-xs text-emerald-700 mt-1">
                  Demo receipt generated. No real currency has been charged.
                </p>
              </div>

              {/* Receipt Card */}
              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50 space-y-3 font-mono text-xs">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Transaction ID:</span>
                  <span className="font-bold text-slate-800">{successReceipt.txnId}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Date & Time:</span>
                  <span className="font-semibold text-slate-800">{successReceipt.date}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Patient UHID:</span>
                  <span className="font-semibold text-teal-700">{successReceipt.uhid}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Patient Name:</span>
                  <span className="font-semibold text-slate-800">{successReceipt.patientName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Service Category:</span>
                  <span className="font-semibold text-slate-800">{successReceipt.category}</span>
                </div>
                <div className="flex justify-between pt-2 text-sm font-bold">
                  <span className="text-slate-900">Amount Paid (Demo):</span>
                  <span className="text-emerald-700">₹{successReceipt.amount}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 py-3 px-4 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  Make Another Payment
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#00A896] hover:bg-[#008f80] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                >
                  Close Demo Portal
                </button>
              </div>
            </div>
          ) : (
            /* Payment Form */
            <form onSubmit={handleProcessDemoPayment} className="space-y-5">
              {/* Payment Categories */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Select Hospital Payment Option <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'opd', label: 'OPD Payment', fee: '₹1,000' },
                    { id: 'consultation', label: 'Consultation', fee: '₹1,500' },
                    { id: 'diagnostic', label: 'Diagnostic', fee: '₹2,800' },
                    { id: 'other', label: 'Other Services', fee: 'Flexible' },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleCategorySelect(cat.id as any)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        paymentCategory === cat.id
                          ? 'border-[#00A896] bg-teal-50/70 text-[#0C4A60] ring-1 ring-[#00A896]'
                          : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <p className="text-xs font-bold">{cat.label}</p>
                      <p className="text-[11px] text-teal-600 font-semibold mt-0.5">{cat.fee}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* UHID & Patient Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-semibold text-slate-700">Patient UHID / Reg No.</label>
                    <button
                      type="button"
                      onClick={handleGenerateSampleUhid}
                      className="text-[10px] text-teal-600 hover:text-teal-800 font-bold underline cursor-pointer"
                    >
                      Generate Demo UHID
                    </button>
                  </div>
                  <input
                    type="text"
                    value={uhid}
                    onChange={(e) => setUhid(e.target.value)}
                    placeholder="e.g. MPH-2026-482910"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Patient Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Amount (INR ₹) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-3 py-2 text-xs font-bold border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none text-[#0C4A60]"
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Simulated Payment Mode
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'upi', name: 'UPI / QR Code', icon: '📱' },
                    { id: 'card', name: 'Credit / Debit Card', icon: '💳' },
                    { id: 'netbanking', name: 'Net Banking', icon: '🏦' },
                  ].map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setPaymentMethod(m.id as any)}
                      className={`p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
                        paymentMethod === m.id
                          ? 'border-[#00A896] bg-teal-50 text-[#0C4A60] font-bold'
                          : 'border-slate-200 bg-white text-slate-600'
                      }`}
                    >
                      <span className="text-base mr-1">{m.icon}</span>
                      <span className="text-xs">{m.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Demo Notice Callout */}
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2 text-amber-900 text-[11px] leading-relaxed">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Portfolio Demo Safety Notice:</strong> This is a portfolio preview interface. No bank transaction or actual payment gateway is connected. Submitting will simulate an instant successful confirmation.
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-600 hover:bg-slate-100 text-xs font-bold transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#0C4A60] to-[#00A896] hover:opacity-95 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Simulating Secure Gateway...</span>
                    </div>
                  ) : (
                    <>
                      <span>Pay ₹{amount} (Safe Demo)</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
