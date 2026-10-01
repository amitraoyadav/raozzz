import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  IndianRupee,
  FileText,
  UserCheck,
  Lock,
  MessageSquare,
  HelpCircle,
  Building,
  Home,
  Briefcase,
  AlertTriangle,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import {
  BRAND_NAME,
  BRAND_DISPLAY,
  LONKARO_NAME,
  PHONE_NUMBER,
  EMAIL_ADDRESS,
  WHATSAPP_NUMBER,
  OFFICE_ADDRESS,
  MANDATORY_LEGAL_DISCLAIMER,
  SABKA_FINANCE_PRODUCTS,
  LoanProduct
} from '../../data/sabkaFinanceData';
import { SabkaFinanceCalculator } from './SabkaFinanceCalculator';
import { useApp } from '../../context/AppContext';

interface ViewProps {
  onNavigate: (tab: string) => void;
  onOpenApplyModal: (loanType?: string) => void;
}

// 1. DEDICATED LOAN PRODUCT VIEW
export const SabkaFinanceDedicatedLoanView: React.FC<ViewProps & { product: LoanProduct }> = ({
  product,
  onNavigate,
  onOpenApplyModal
}) => {
  return (
    <div className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <button onClick={() => onNavigate('home')} className="hover:text-teal-600">Home</button>
        <span>/</span>
        <button onClick={() => onNavigate('home')} className="hover:text-teal-600">Products</button>
        <span>/</span>
        <span className="font-bold text-slate-900">{product.name}</span>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-[#042f2e] to-[#0f766e] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="max-w-2xl space-y-4 relative z-10">
          <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-400/30 uppercase tracking-wider">
            {product.tagline}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            {product.name}
          </h1>
          <p className="text-sm sm:text-base text-teal-100/90 leading-relaxed">
            {product.longDescription}
          </p>
          <div className="pt-4 flex flex-wrap gap-4 items-center">
            <button
              onClick={() => onOpenApplyModal(product.name)}
              className="py-3.5 px-8 rounded-full bg-amber-400 hover:bg-yellow-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-105 cursor-pointer flex items-center gap-2"
            >
              <span>Apply for {product.name}</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
            <div className="text-xs text-teal-200">
              <span>Indicative Rates: </span>
              <strong className="text-white text-sm">{product.indicativeInterestRate}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Key Highlights Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-[11px] font-bold text-slate-500 uppercase">Max Amount</span>
          <div className="text-lg font-black text-slate-900">₹ {(product.maxAmount / 100000).toFixed(1)} Lakhs</div>
          <span className="text-[10px] text-slate-400">Min: ₹ {product.minAmount.toLocaleString()}</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-[11px] font-bold text-slate-500 uppercase">Tenure</span>
          <div className="text-lg font-black text-slate-900">{product.maxTenureMonths} Months</div>
          <span className="text-[10px] text-slate-400">Min: {product.minTenureMonths} Months</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-[11px] font-bold text-slate-500 uppercase">Processing Fee</span>
          <div className="text-lg font-black text-slate-900">{product.processingFee}</div>
          <span className="text-[10px] text-slate-400">No upfront charges</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-[11px] font-bold text-slate-500 uppercase">Disbursal</span>
          <div className="text-lg font-black text-teal-700">Fast Transfer</div>
          <span className="text-[10px] text-slate-400">Direct to bank</span>
        </div>
      </div>

      {/* Features & Eligibility */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-extrabold text-base text-slate-900">Key Features</h3>
          <ul className="space-y-3 text-xs text-slate-700">
            {product.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-extrabold text-base text-slate-900">Eligibility Criteria</h3>
          <ul className="space-y-3 text-xs text-slate-700">
            {product.eligibility.map((elig, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{elig}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Documents Required */}
      <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6">
        <h3 className="font-extrabold text-lg text-slate-900">Documents Checklist</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-slate-700">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3">
            <span className="font-bold text-teal-900 uppercase block border-b pb-2">For Salaried Individuals</span>
            <ul className="space-y-2">
              {product.documents.salaried.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <FileText className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3">
            <span className="font-bold text-teal-900 uppercase block border-b pb-2">For Self-Employed</span>
            <ul className="space-y-2">
              {product.documents.selfEmployed.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <FileText className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Calculator for this product */}
      <SabkaFinanceCalculator onApplyForAmount={() => onOpenApplyModal(product.name)} />
    </div>
  );
};

// 2. REPAYMENT VIEW
export const SabkaFinanceRepaymentView: React.FC<ViewProps> = () => {
  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="text-center space-y-3">
        <span className="text-xs uppercase font-extrabold tracking-widest text-teal-600 block">
          Repayment Assistance
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
          How to Repay Your Loan
        </h1>
        <p className="text-sm text-slate-600 max-w-xl mx-auto">
          Understand the safe, transparent, and official ways to service your monthly installments directly with the lending partner.
        </p>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-xs text-slate-700 leading-relaxed">
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p>
            <strong>Important Anti-Fraud Notice:</strong> Sabka Finance NEVER collects EMI payments in cash, via personal UPI IDs, or through third-party payment links. All loan repayments must be made directly to the sanctioned lending bank or NBFC via official auto-debit (e-NACH) or their verified website.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-base text-slate-900">1. Automated NACH / e-Mandate (Recommended)</h3>
          <p>
            At the time of loan disbursal, your lending institution sets up an e-NACH mandate on your registered salary/savings bank account. Ensure adequate balance is maintained on your specified EMI due date to avoid automated bounce charges.
          </p>

          <h3 className="font-bold text-base text-slate-900">2. Official Lender Portal / Mobile App</h3>
          <p>
            If your auto-debit fails or you wish to make an advance payment, log in to the official customer portal of your sanctioning lender using your Loan Account Number (LAN). Most lenders support NetBanking, BBPS, and verified UPI handles.
          </p>

          <h3 className="font-bold text-base text-slate-900">3. Foreclosure &amp; Part-Prepayment</h3>
          <p>
            Floating-rate personal loans sanctioned to individual borrowers carry zero prepayment penalty under RBI mandates. Request a formal Foreclosure Statement directly from your lender's service team before closing the loan account.
          </p>
        </div>
      </div>
    </div>
  );
};

// 3. ABOUT VIEW
export const SabkaFinanceAboutView: React.FC<ViewProps> = ({ onOpenApplyModal }) => {
  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="text-center space-y-3">
        <span className="text-xs uppercase font-extrabold tracking-widest text-teal-600 block">
          About {BRAND_DISPLAY} ({LONKARO_NAME})
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          Simple Financial Solutions for Everyday Needs
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          Sabka Finance is a customer-focused financial assistance platform designed to make the loan application journey simpler, clearer and more accessible across India.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700 leading-relaxed">
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
          <h3 className="font-black text-slate-900 text-sm">Our Mission</h3>
          <p>
            Securing credit should not be an intimidating experience filled with hidden charges and dense jargon. Sabka Finance assists everyday borrowers in understanding loan requirements, gathering necessary documents, and applying for suitable products from authorized lenders.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
          <h3 className="font-black text-slate-900 text-sm">Transparent Advisory</h3>
          <p>
            We operate as an independent digital credit assistance platform. We never ask for upfront payments, never promise false approval guarantees, and prioritize data security with 256-bit encryption.
          </p>
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-teal-50 border border-teal-200 text-xs text-teal-950">
        <strong className="block text-[11px] uppercase font-bold text-teal-900 mb-1">
          Regulatory Disclosure
        </strong>
        <p>{MANDATORY_LEGAL_DISCLAIMER}</p>
      </div>
    </div>
  );
};

// 4. CONTACT VIEW
export const SabkaFinanceContactView: React.FC<ViewProps> = () => {
  const { submitLead } = useApp();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Loan Inquiry');
  const [msg, setMsg] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    try {
      await submitLead({
        websiteSlug: 'sabka-finance',
        businessName: 'Sabka Finance Contact Support',
        customerName: name,
        customerPhone: phone.replace(/\D/g, ''),
        customerEmail: email,
        serviceRequested: `Subject: ${subject}`,
        message: msg || 'Support request',
        status: 'new'
      });
    } catch {
      // fallback
    }
    setSent(true);
  };

  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="text-center space-y-3">
        <span className="text-xs uppercase font-extrabold tracking-widest text-teal-600 block">
          Support Desk
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900">Contact Sabka Finance</h1>
        <p className="text-sm text-slate-600 max-w-md mx-auto">
          Need help with your application or loan options? Reach out to our customer coordinators.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4 text-xs text-slate-700">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
            <span className="font-bold text-slate-900 block text-sm">Customer Helpline</span>
            <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="text-teal-700 font-bold">
              {PHONE_NUMBER}
            </a>
            <span className="block text-[11px] text-slate-400">Mon - Sat: 9:00 AM - 7:00 PM</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
            <span className="font-bold text-slate-900 block text-sm">Support Email</span>
            <a href={`mailto:${EMAIL_ADDRESS}`} className="text-teal-700 font-bold">
              {EMAIL_ADDRESS}
            </a>
            <span className="block text-[11px] text-slate-400">Response within 24 hours</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
            <span className="font-bold text-slate-900 block text-sm">Head Office</span>
            <p className="text-slate-600 leading-relaxed">{OFFICE_ADDRESS}</p>
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl">
          {sent ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-teal-600 mx-auto" />
              <h3 className="font-bold text-base text-slate-900">Message Received!</h3>
              <p className="text-xs text-slate-600">Our customer team will contact you shortly.</p>
              <button
                onClick={() => setSent(false)}
                className="py-2 px-6 rounded-full bg-slate-900 text-white text-xs font-bold"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <h3 className="font-bold text-sm text-slate-900">Leave a Message</h3>
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  placeholder="10-digit mobile"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Email</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Subject</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white"
                >
                  <option value="Loan Application Inquiry">Loan Application Inquiry</option>
                  <option value="Eligibility Questions">Eligibility Questions</option>
                  <option value="Document Assistance">Document Assistance</option>
                  <option value="Repayment Help">Repayment Help</option>
                  <option value="General Support">General Support</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Message</label>
                <textarea
                  rows={3}
                  placeholder="Tell us how we can help..."
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-teal-700 hover:bg-teal-600 text-white font-extrabold text-xs uppercase tracking-wider"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
