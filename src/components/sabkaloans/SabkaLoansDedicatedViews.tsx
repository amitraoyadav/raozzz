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
  AlertCircle,
  Sparkles,
  ChevronDown,
  AlertTriangle,
  ExternalLink
} from 'lucide-react';
import {
  SABKA_LOAN_PRODUCTS,
  SABKA_FINANCE_CONFIG,
  MANDATORY_LEGAL_DISCLAIMER,
  LoanProduct,
  PHONE_NUMBER,
  EMAIL_ADDRESS,
  WHATSAPP_NUMBER,
  OFFICE_ADDRESS,
  BRAND_NAME,
  BRAND_DISPLAY,
  BRAND_TAGLINE,
  LONKARO_NAME,
  LOAN_FAQS
} from '../../data/sabkaLoansData';
import { formatIndianCurrency, SabkaLoansCalculator } from './SabkaLoansCalculator';
import { useApp } from '../../context/AppContext';

interface ViewProps {
  onOpenApply: (productName?: string) => void;
  onNavigate: (tab: string) => void;
}

// 1. DEDICATED LOAN PRODUCT VIEW (Covers all loan products)
export const DedicatedLoanProductView: React.FC<ViewProps & { productSlug: string }> = ({
  productSlug,
  onOpenApply,
  onNavigate
}) => {
  const product =
    SABKA_LOAN_PRODUCTS.find((p) => p.slug === productSlug) ||
    SABKA_LOAN_PRODUCTS[0];
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const productFaqs = [
    {
      q: `What is the maximum amount I can explore under ${product.name}?`,
      a: `For ${product.name}, applicants can explore facilities up to ${formatIndianCurrency(product.maxAmount)}, subject to individual income assessment, credit profile, and lender underwriting criteria.`
    },
    {
      q: `How long is the repayment tenure for ${product.name}?`,
      a: `The repayment tenure ranges from ${product.minTenureMonths} months up to ${product.maxTenureMonths} months, allowing you to structure your monthly EMI to match your cash flow.`
    },
    {
      q: `What is the processing fee charged for ${product.name}?`,
      a: `The processing fee is typically ${product.processingFee}. Fees are deducted from the sanctioned loan amount upon final disbursal by the lender, with no hidden charges.`
    },
    {
      q: `Are loans guaranteed?`,
      a: `No. Loan availability, eligibility, interest rates, fees, tenure, approval and disbursement are subject to the applicable lending institution's policies and applicant profile. Submission of an enquiry does not guarantee approval.`
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Product Hero */}
      <section className="relative bg-[#02051a] text-white py-16 sm:py-24 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-15">
          <img
            src={product.bannerImage}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/30 border border-blue-400/40 text-blue-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{product.name.toUpperCase()} ASSISTANCE</span>
            </span>

            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              {product.tagline}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Quick Metrics Bar */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/15">
                <span className="text-[10px] uppercase text-blue-300 block font-semibold">Indicative Rate</span>
                <span className="text-sm font-bold text-white">{(product as any).interestRateDisplay || (product as any).indicativeInterestRate || 'Competitive Rates'}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/15">
                <span className="text-[10px] uppercase text-blue-300 block font-semibold">Max Loan Size</span>
                <span className="text-sm font-bold text-white">Up to {formatIndianCurrency(product.maxAmount)}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/15">
                <span className="text-[10px] uppercase text-blue-300 block font-semibold">Tenure</span>
                <span className="text-sm font-bold text-white">{product.minTenureMonths} - {product.maxTenureMonths} Mos</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/15">
                <span className="text-[10px] uppercase text-blue-300 block font-semibold">Security</span>
                <span className="text-sm font-bold text-white">No Collateral</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenApply(product.name)}
                className="py-3.5 px-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-blue-600/30"
              >
                <span>Apply for {product.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('product-calculator');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="py-3.5 px-6 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                Calculate EMI
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-blue-600 block mb-1">
                Loan Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                What is a {product.name}?
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {(product as any).longDescription || product.shortDescription}
            </p>

            <div className="pt-4">
              <h3 className="text-base font-bold text-slate-900 mb-3">
                Key Features
              </h3>
              <div className="space-y-2.5">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 font-medium leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Suitable for */}
            {(product as any).suitableFor && Array.isArray((product as any).suitableFor) && (
              <div className="pt-2">
                <h3 className="text-base font-bold text-slate-900 mb-3">
                  Suitable For
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {((product as any).suitableFor as string[]).map((item: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2 p-3 rounded-lg bg-blue-50/70 border border-blue-100 text-xs text-blue-950 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Card: Eligibility & Documents */}
          <div className="lg:col-span-5 space-y-6">
            {/* Eligibility Card */}
            <div className="bg-[#02051a] text-white rounded-3xl p-6 sm:p-7 space-y-4 shadow-xl border border-white/10">
              <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                <UserCheck className="w-5 h-5 text-blue-400" />
                <h3 className="text-base font-bold text-white">Eligibility Criteria</h3>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {product.eligibility.map((el, idx) => (
                  <li key={idx} className="flex items-start gap-2 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                    <span>{el}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <p className="text-[11px] text-slate-400 leading-relaxed italic">
                  *Eligibility results are indicative only. Final approval is determined by the applicable lending institution.
                </p>
              </div>
            </div>

            {/* Documents Checklist */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <FileText className="w-5 h-5 text-blue-600" />
                <h3 className="text-base font-bold text-slate-900">Documents Required</h3>
              </div>

              <div className="space-y-3 text-xs">
                {Array.isArray(product.documents) ? (
                  <ul className="space-y-1.5 text-slate-600 pl-2">
                    {product.documents.map((doc: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <>
                    <div>
                      <span className="font-bold text-blue-900 block mb-1">For Salaried Individuals:</span>
                      <ul className="space-y-1 text-slate-600 pl-2">
                        {(product.documents as any)?.salaried?.map((doc: string, idx: number) => (
                          <li key={idx}>• {doc}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <span className="font-bold text-blue-900 block mb-1">For Self-Employed Applicants:</span>
                      <ul className="space-y-1 text-slate-600 pl-2">
                        {(product.documents as any)?.selfEmployed?.map((doc: string, idx: number) => (
                          <li key={idx}>• {doc}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Product Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="product-calculator">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs uppercase font-bold tracking-wider text-blue-600 block mb-1">
            Repayment Planning
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Estimate Your {product.name} EMI
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Test different loan amounts and repayment periods before submitting your application.
          </p>
        </div>

        <SabkaLoansCalculator
          onApplyWithDetails={() => onOpenApply(product.name)}
        />
      </section>

      {/* Product FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-slate-900">
            Frequently Asked Questions about {product.name}
          </h2>
        </div>

        <div className="space-y-3">
          {productFaqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm text-slate-900 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-blue-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#02051a] text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl border border-white/10">
          <h2 className="text-2xl sm:text-3xl font-black">
            Ready to Explore Your {product.name} Options?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-light">
            Submit your basic details online in 2 minutes and let our loan coordinator guide you through the available offers.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenApply(product.name)}
              className="py-3.5 px-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-blue-600/30"
            >
              <span>Apply for {product.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// 2. DEDICATED REPAYMENT PAGE (/repayment, /repay-loan)
export const SabkaLoansRepaymentView: React.FC<ViewProps> = ({ onOpenApply }) => {
  return (
    <div className="space-y-16 pb-20">
      <section className="bg-[#02051a] text-white py-16 sm:py-20 text-center border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
            Official Guidance
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Loan Repayment Assistance
          </h1>
          <p className="text-sm sm:text-base text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Important information regarding secure loan repayment and fraud prevention for all customers.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Warning Callout Box */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-6 sm:p-8 space-y-3">
          <div className="flex items-center gap-3 text-amber-900 font-extrabold text-base">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
            <span>Strict Security Guidance for Loan Repayments</span>
          </div>
          <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-medium">
            For repayment instructions, please use only the official payment channels provided by your actual lender or loan provider. Never make payments to unofficial accounts or links.
          </p>
        </div>

        {/* Informational Guidance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Official Bank Auto-Debit (NACH / e-NACH)</h3>
            <p className="text-slate-600 leading-relaxed">
              Standard loan EMIs are automatically deducted from the bank account you registered during loan disbursal through RBI-approved National Automated Clearing House (NACH) mandate. Ensure adequate funds on your scheduled EMI date.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Lender Customer Portal / Official App</h3>
            <p className="text-slate-600 leading-relaxed">
              If making an ad-hoc or part-prepayment, log in exclusively to the official website or mobile app of the sanctioning financial institution. Check the loan account number matches your original sanction letter.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Never Pay to Personal UPI IDs</h3>
            <p className="text-slate-600 leading-relaxed">
              No representative of Sabka Finance or any genuine lending partner will ever ask you to send money to a personal mobile number, personal Google Pay/PhonePe/Paytm QR, or unauthorized bank account.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              4
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Need Verification or Help?</h3>
            <p className="text-slate-600 leading-relaxed">
              If you receive any suspicious SMS, call, or payment link claiming to be from your loan provider, immediately contact our customer assistance desk at {PHONE_NUMBER} or email {EMAIL_ADDRESS} before making any payment.
            </p>
          </div>
        </div>

        {/* Regulatory disclaimer */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-500 leading-relaxed">
          {MANDATORY_LEGAL_DISCLAIMER}
        </div>
      </section>
    </div>
  );
};

// 3. ABOUT US VIEW
export const SabkaLoansAboutView: React.FC<ViewProps> = ({ onOpenApply, onNavigate }) => {
  return (
    <div className="space-y-16 pb-20">
      <section className="bg-[#02051a] text-white py-16 sm:py-20 text-center border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-600/30 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/40">
            About {BRAND_DISPLAY}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            About Sabka Finance
          </h1>
          <p className="text-sm sm:text-base text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Sabka Finance is a customer-focused financial assistance platform designed to make the loan application journey simpler, clearer and more accessible.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <h2 className="text-2xl font-black text-slate-900">
              Simplifying Borrowing for Everyday Needs
            </h2>
            <p>
              Navigating loan options can often be overwhelming with varying rate benchmarks, complex documentation, and technical underwriting jargon. Sabka Finance helps customers explore financing options and understand the application process with transparency and support.
            </p>
            <p>
              Whether you are facing an emergency, planning a home upgrade, or covering planned expenses, we help you understand eligibility criteria, compare alternatives, and organize required documents seamlessly.
            </p>
          </div>

          <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
            <h3 className="font-bold text-slate-900 text-base">Customer Support That Keeps You Informed</h3>
            <ul className="space-y-3 text-xs text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Clear Communication:</strong> Straightforward terms with zero financial jargon.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Application Guidance:</strong> Step-by-step assistance through forms and requirements.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Documentation Assistance:</strong> Pre-checking your documents to ensure quick processing.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Process Updates:</strong> Regular updates as your enquiry is reviewed by lending partners.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Clear Regulatory Disclosure Box */}
        <div className="bg-amber-50/70 border border-amber-300 rounded-3xl p-6 sm:p-8 text-xs text-amber-950 space-y-2">
          <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
            <AlertCircle className="w-5 h-5 text-amber-600" />
            <span>Statutory & Regulatory Notice</span>
          </div>
          <p className="leading-relaxed">
            {MANDATORY_LEGAL_DISCLAIMER}
          </p>
        </div>

        {/* Security & Trust pillars */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
            </div>
            <h4 className="font-bold text-slate-900 text-xs uppercase">Secure Enquiry</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              256-bit encryption for all enquiries. No spam or unauthorized data transfers.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Lock className="w-5 h-5 text-blue-600" />
            </div>
            <h4 className="font-bold text-slate-900 text-xs uppercase">Responsible Data Handling</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Strict data protection protocols. Transparent consent and easy deletion requests.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <h4 className="font-bold text-slate-900 text-xs uppercase">Transparent Information</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Realistic terms, clear rates, and zero false claims of guaranteed approvals.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <UserCheck className="w-5 h-5 text-blue-600" />
            </div>
            <h4 className="font-bold text-slate-900 text-xs uppercase">Professional Assistance</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Customer assistance executives guide you without upfront commission demands.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <button
          onClick={() => onOpenApply()}
          className="py-3.5 px-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 cursor-pointer shadow-md"
        >
          <span>Apply Online With Sabka Finance</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};

// 4. CONTACT US VIEW
export const SabkaLoansContactView: React.FC<ViewProps> = ({ onOpenApply }) => {
  const { submitLead } = useApp();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Personal Loan Enquiry');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    try {
      await submitLead({
        websiteSlug: 'sabka-loans',
        businessName: 'Sabka Finance Contact Enquiry',
        customerName: name,
        customerPhone: phone,
        customerEmail: email,
        serviceRequested: `Contact Message: ${subject}`,
        message: message || 'Submitted via Contact Us form',
        status: 'new'
      });
    } catch {
      // fallback
    }

    setSent(true);
  };

  return (
    <div className="space-y-16 pb-20">
      <section className="bg-[#02051a] text-white py-16 sm:py-20 text-center border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-600/30 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/40">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Get in Touch
          </h1>
          <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl mx-auto">
            Have questions about loan options, eligibility criteria, or required documentation? We are here to assist you.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details Left */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-2xl font-black text-slate-900">
                Customer Assistance Desk
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Reach out through phone, email, or WhatsApp.
              </p>
            </div>

            <div className="space-y-4 text-xs text-slate-700">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <Phone className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block text-sm">Phone Helpline</span>
                  <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="text-blue-600 hover:underline">
                    {PHONE_NUMBER}
                  </a>
                  <span className="block text-[11px] text-slate-500 mt-0.5">Mon – Sat (9:00 AM – 7:00 PM IST)</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <MessageSquare className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block text-sm">WhatsApp Assistance</span>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">
                    +{WHATSAPP_NUMBER}
                  </a>
                  <span className="block text-[11px] text-slate-500 mt-0.5">Quick chat with loan specialist</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block text-sm">Email Enquiries</span>
                  <a href={`mailto:${EMAIL_ADDRESS}`} className="text-blue-600 hover:underline">
                    {EMAIL_ADDRESS}
                  </a>
                  <span className="block text-[11px] text-slate-500 mt-0.5">Prompt response within 24 hours</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block text-sm">Office Address</span>
                  <span className="text-slate-600">{OFFICE_ADDRESS}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Right */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl">
            {sent ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Enquiry Submitted!</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out to Sabka Finance. A loan coordinator will contact you shortly via call or email.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="py-2.5 px-6 rounded-xl bg-blue-600 text-white text-xs font-bold"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Submit an Enquiry</h3>
                <p className="text-xs text-slate-500">
                  Please share your requirements and we will connect you with a specialist.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Subject
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-hidden bg-white"
                    >
                      <option value="Personal Loan Enquiry">Personal Loan Enquiry</option>
                      <option value="Medical Loan Enquiry">Medical Emergency Loan</option>
                      <option value="Education Loan Enquiry">Education Loan</option>
                      <option value="Wedding Loan Enquiry">Wedding Loan</option>
                      <option value="Travel Loan Enquiry">Travel Loan</option>
                      <option value="Home Renovation Enquiry">Home Renovation Loan</option>
                      <option value="Short-Term Loan Enquiry">Short-Term Loan</option>
                      <option value="General Question">General Assistance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your loan requirement or questions..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Submit Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

// 5. DEDICATED ELIGIBILITY CHECKER VIEW
export const SabkaLoansEligibilityView: React.FC<ViewProps> = ({ onOpenApply }) => {
  const [age, setAge] = useState(28);
  const [employmentType, setEmploymentType] = useState<'Salaried' | 'Self Employed' | 'Business Owner' | 'Other'>('Salaried');
  const [monthlyIncome, setMonthlyIncome] = useState(45000);
  const [loanAmount, setLoanAmount] = useState(250000);
  const [city, setCity] = useState('Delhi NCR');
  const [checked, setChecked] = useState(false);

  const isIndicativeEligible = age >= 21 && age <= 58 && monthlyIncome >= 20000;

  return (
    <div className="space-y-16 pb-20">
      <section className="bg-[#02051a] text-white py-16 sm:py-20 text-center border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-600/30 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/40">
            Self Assessment
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Check Your Eligibility
          </h1>
          <p className="text-sm sm:text-base text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Understand your preliminary loan eligibility before submitting your enquiry.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Your Age: {age} Years
              </label>
              <input
                type="range"
                min={18}
                max={65}
                value={age}
                onChange={(e) => {
                  setAge(Number(e.target.value));
                  setChecked(false);
                }}
                className="w-full h-2 rounded-lg cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>18 Yrs</span>
                <span>Eligible: 21 - 58 Yrs</span>
                <span>65 Yrs</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Employment Type
              </label>
              <select
                value={employmentType}
                onChange={(e) => {
                  setEmploymentType(e.target.value as any);
                  setChecked(false);
                }}
                className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="Salaried">Salaried (Private / Govt)</option>
                <option value="Self Employed">Self Employed Professional</option>
                <option value="Business Owner">Business Owner / Trader</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Monthly Net Income: {formatIndianCurrency(monthlyIncome)}
              </label>
              <input
                type="range"
                min={10000}
                max={300000}
                step={5000}
                value={monthlyIncome}
                onChange={(e) => {
                  setMonthlyIncome(Number(e.target.value));
                  setChecked(false);
                }}
                className="w-full h-2 rounded-lg cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>₹10,000</span>
                <span>Min: ₹20,000/mo</span>
                <span>₹3,00,000+</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Desired Loan Amount: {formatIndianCurrency(loanAmount)}
              </label>
              <input
                type="range"
                min={10000}
                max={2500000}
                step={10000}
                value={loanAmount}
                onChange={(e) => {
                  setLoanAmount(Number(e.target.value));
                  setChecked(false);
                }}
                className="w-full h-2 rounded-lg cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>₹10,000</span>
                <span>₹25,00,000</span>
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                City / Location
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. Mumbai, Delhi NCR, Bangalore, Pune"
                className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <button
            onClick={() => setChecked(true)}
            className="w-full py-3.5 px-6 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-blue-600/30"
          >
            Check Eligibility
          </button>

          {checked && (
            <div className={`p-6 rounded-2xl border transition-all ${
              isIndicativeEligible
                ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                : 'bg-amber-50 border-amber-200 text-amber-950'
            }`}>
              <div className="flex items-start gap-3">
                {isIndicativeEligible ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                )}
                <div className="space-y-2">
                  <h4 className="font-bold text-sm">
                    {isIndicativeEligible
                      ? 'Preliminary Match: Indicatively Eligible!'
                      : 'Needs Profile Review'}
                  </h4>
                  <p className="text-xs leading-relaxed">
                    {isIndicativeEligible
                      ? `Based on your age (${age} years) and monthly income (${formatIndianCurrency(monthlyIncome)}), you match the standard preliminary criteria for loan amounts up to ${formatIndianCurrency(loanAmount)}.`
                      : `Standard lending policies usually require age between 21-58 and minimum monthly income of ₹20,000. You may still explore options with a co-applicant.`}
                  </p>
                  <p className="text-[11px] text-slate-500 italic">
                    Eligibility results are indicative only. Final approval is determined by the applicable lending institution.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => onOpenApply()}
                      className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider"
                    >
                      Proceed to Full Application
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Factors */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-xs text-slate-600 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm">Factors That Determine Loan Eligibility:</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc list-inside">
            <li>Age between 21 and 58 years</li>
            <li>Net monthly income credited to bank</li>
            <li>Employment and business stability</li>
            <li>Credit / CIBIL score track record</li>
            <li>Existing debt-to-income (FOIR) ratio</li>
            <li>Applicable lender underwriting policies</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
