import React, { useState } from 'react';
import {
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  ArrowRight,
  ChevronDown,
  MessageSquare,
  FileText,
  UserCheck,
  Check,
  Sparkles,
  Lock,
  Building,
  HeartPulse,
  GraduationCap,
  Plane,
  Home,
  Briefcase,
  HelpCircle,
  ExternalLink,
  AlertCircle
} from 'lucide-react';
import { ReferenceSiteSwitcher } from '../common/ReferenceSiteSwitcher';
import {
  BRAND_NAME,
  BRAND_DISPLAY,
  BRAND_TAGLINE,
  LONKARO_NAME,
  PHONE_NUMBER,
  EMAIL_ADDRESS,
  WHATSAPP_NUMBER,
  OFFICE_ADDRESS,
  MANDATORY_LEGAL_DISCLAIMER,
  SABKA_FINANCE_PRODUCTS,
  SABKA_FINANCE_FAQS,
  LoanProduct
} from '../../data/sabkaFinanceData';
import { SabkaFinanceHeader } from './SabkaFinanceHeader';
import { SabkaFinanceFooter } from './SabkaFinanceFooter';
import { SabkaFinanceCalculator } from './SabkaFinanceCalculator';
import { SabkaFinanceApplyModal, SabkaFinanceLegalModal } from './SabkaFinanceModals';
import {
  SabkaFinanceDedicatedLoanView,
  SabkaFinanceRepaymentView,
  SabkaFinanceAboutView,
  SabkaFinanceContactView
} from './SabkaFinanceDedicatedViews';
import { useApp } from '../../context/AppContext';

export const SabkaFinanceApp: React.FC = () => {
  const { submitLead } = useApp();

  const [currentTab, setCurrentTab] = useState<string>('home');
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedLoanType, setSelectedLoanType] = useState('Personal Loan');
  const [selectedAmount, setSelectedAmount] = useState(250000);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'disclaimer' | 'cookie' | 'data-deletion' | 'grievance' | null>(null);

  // Hero Quick Application Form state
  const [heroName, setHeroName] = useState('');
  const [heroMobile, setHeroMobile] = useState('');
  const [heroEmail, setHeroEmail] = useState('');
  const [heroAmount, setHeroAmount] = useState('300000');
  const [heroLoanType, setHeroLoanType] = useState('Personal Loan');
  const [heroSubmitted, setHeroSubmitted] = useState(false);

  // Interactive Eligibility Checker state
  const [eligAge, setEligAge] = useState<number>(28);
  const [eligIncome, setEligIncome] = useState<number>(35000);
  const [eligEmp, setEligEmp] = useState<'Salaried' | 'Self-Employed'>('Salaried');
  const [eligCity, setEligCity] = useState('Metro City');

  // FAQ accordion state
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const handleOpenApply = (type?: string, amount?: number) => {
    if (type) setSelectedLoanType(type);
    if (amount) setSelectedAmount(amount);
    setApplyModalOpen(true);
  };

  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroName || !heroMobile) return;

    try {
      await submitLead({
        websiteSlug: 'sabka-finance',
        businessName: 'Sabka Finance Hero Quick Request',
        customerName: heroName,
        customerPhone: heroMobile.replace(/\D/g, ''),
        customerEmail: heroEmail,
        serviceRequested: `Quick Apply: ${heroLoanType} for ₹${Number(heroAmount).toLocaleString('en-IN')}`,
        message: 'Applicant submitted from homepage hero form.',
        status: 'new'
      });
    } catch {
      // Fallback
    }

    setHeroSubmitted(true);
  };

  // Check if viewing a dedicated product page
  const activeProduct = SABKA_FINANCE_PRODUCTS.find(
    (p) => `product-${p.slug}` === currentTab
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-['Inter',sans-serif] selection:bg-amber-400 selection:text-slate-950">
      {/* 1. Global Multi-site Switcher */}
      <ReferenceSiteSwitcher currentSiteId="sabka-finance" />

      {/* 2. Sabka Finance Header with 8 Categories and Navigation */}
      <SabkaFinanceHeader
        currentTab={currentTab}
        onNavigate={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenApplyModal={() => handleOpenApply('Personal Loan', 300000)}
      />

      <main className="flex-1">
        {/* VIEW: Dedicated Product Page */}
        {activeProduct && (
          <SabkaFinanceDedicatedLoanView
            product={activeProduct}
            onNavigate={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenApplyModal={handleOpenApply}
          />
        )}

        {/* VIEW: Repayment */}
        {currentTab === 'repayment' && (
          <SabkaFinanceRepaymentView
            onNavigate={setCurrentTab}
            onOpenApplyModal={handleOpenApply}
          />
        )}

        {/* VIEW: About Us */}
        {currentTab === 'about' && (
          <SabkaFinanceAboutView
            onNavigate={setCurrentTab}
            onOpenApplyModal={handleOpenApply}
          />
        )}

        {/* VIEW: Contact */}
        {currentTab === 'contact' && (
          <SabkaFinanceContactView
            onNavigate={setCurrentTab}
            onOpenApplyModal={handleOpenApply}
          />
        )}

        {/* VIEW: FAQ Dedicated */}
        {currentTab === 'faq' && (
          <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs uppercase font-extrabold tracking-widest text-teal-600 block">
                Frequently Asked Questions
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
                Loan Assistance &amp; Process FAQs
              </h1>
              <p className="text-sm text-slate-600 max-w-lg mx-auto">
                Got questions about loan eligibility, interest rates, or partner lender approvals? We have answers.
              </p>
            </div>

            <div className="space-y-3">
              {SABKA_FINANCE_FAQS.map((faq, idx) => {
                const isOpen = expandedFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
                  >
                    <button
                      onClick={() => setExpandedFaq(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-xs sm:text-sm hover:text-teal-700 cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                          isOpen ? 'rotate-180 text-teal-600' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-5 sm:px-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* VIEW: Eligibility Dedicated */}
        {currentTab === 'eligibility' && (
          <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-3">
              <span className="text-xs uppercase font-extrabold tracking-widest text-teal-600 block">
                Criteria &amp; Guidelines
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
                Check Your Loan Eligibility
              </h1>
              <p className="text-sm text-slate-600 max-w-lg mx-auto">
                Discover the standard credit, income, and documentation parameters required across our partner lenders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-base text-slate-900">For Salaried Applicants</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Age: 21 to 58 years</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Net Monthly Income: ₹15,000+</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Continuous Employment: 1+ year</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Salary credited via Bank Account</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-base text-slate-900">For Self-Employed Individuals</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Age: 23 to 65 years</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Business Vintage: 2+ continuous years</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Minimum Annual ITR: ₹2.5 Lakhs</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Valid GST or MSME Udyam registration</li>
                </ul>
              </div>
            </div>

            <div className="text-center pt-4">
              <button
                onClick={() => handleOpenApply('Personal Loan', 300000)}
                className="py-3 px-8 rounded-full bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-teal-700 transition-colors"
              >
                Proceed to Digital Application
              </button>
            </div>
          </div>
        )}

        {/* VIEW: Process Dedicated */}
        {currentTab === 'process' && (
          <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-3">
              <span className="text-xs uppercase font-extrabold tracking-widest text-teal-600 block">
                Workflow Overview
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
                Simple 3-Step Application Process
              </h1>
              <p className="text-sm text-slate-600 max-w-lg mx-auto">
                From digital form submission to final sanction and direct bank disbursal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: '01',
                  title: 'Digital Application',
                  desc: 'Complete our simple 2-minute form with basic identity, employment, and loan amount requirements.'
                },
                {
                  step: '02',
                  title: 'Document Verification',
                  desc: 'Submit your KYC documents and income proofs for fast digital verification by our coordinators.'
                },
                {
                  step: '03',
                  title: 'Approval & Disbursal',
                  desc: 'Review the formal sanction letter from the lending partner and receive funds directly into your bank account.'
                }
              ].map((s) => (
                <div key={s.step} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 relative">
                  <span className="text-3xl font-black text-teal-200">{s.step}</span>
                  <h3 className="font-extrabold text-base text-slate-900">{s.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DEFAULT VIEW: HOMEPAGE */}
        {currentTab === 'home' && (
          <>
            {/* 1. HERO SECTION */}
            <section className="relative bg-gradient-to-br from-[#022c2b] via-[#042f2e] to-[#0f766e] text-white pt-16 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  {/* Left Column: Headlines & Positioning */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-teal-400/30 text-teal-200 text-xs font-bold backdrop-blur-xs">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>{BRAND_NAME} ({LONKARO_NAME}) · Customer-Centric Credit Assistance</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                      Financial Support When You Need It
                    </h1>

                    <p className="text-sm sm:text-base text-teal-100/90 leading-relaxed max-w-xl">
                      Explore suitable loan options with a simple digital application and professional assistance throughout the process.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                      <button
                        onClick={() => handleOpenApply('Personal Loan', 300000)}
                        className="py-3.5 px-8 rounded-full bg-amber-400 hover:bg-yellow-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-400/25 transition-all hover:scale-105 cursor-pointer flex items-center gap-2"
                      >
                        <span>Apply Now</span>
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                      </button>

                      <button
                        onClick={() => {
                          const el = document.getElementById('eligibility-section');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="py-3.5 px-7 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Check Eligibility
                      </button>
                    </div>

                    {/* Trust badges row */}
                    <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-xs text-teal-100/80">
                      <div>
                        <strong className="block text-white text-base font-black">256-Bit</strong>
                        <span className="text-[11px]">SSL Encrypted</span>
                      </div>
                      <div>
                        <strong className="block text-white text-base font-black">Zero</strong>
                        <span className="text-[11px]">Upfront Fees</span>
                      </div>
                      <div>
                        <strong className="block text-white text-base font-black">RBI-Regulated</strong>
                        <span className="text-[11px]">Partner Lenders</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Hero Application Card */}
                  <div className="lg:col-span-5 bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-teal-100">
                    <div className="space-y-1 mb-5">
                      <span className="text-[10px] uppercase font-bold text-teal-700 tracking-wider block">
                        Fast Digital Pre-Assessment
                      </span>
                      <h3 className="text-lg sm:text-xl font-black text-slate-900">
                        Apply for Loan Assistance
                      </h3>
                      <p className="text-xs text-slate-500">
                        Takes less than 2 minutes. No advance payment required.
                      </p>
                    </div>

                    {heroSubmitted ? (
                      <div className="py-8 text-center space-y-3">
                        <CheckCircle2 className="w-12 h-12 text-teal-600 mx-auto" />
                        <h4 className="font-bold text-base text-slate-900">Inquiry Received!</h4>
                        <p className="text-xs text-slate-600">
                          Thank you, <strong>{heroName}</strong>. Our loan advisor will call you at <strong>{heroMobile}</strong> shortly.
                        </p>
                        <button
                          onClick={() => setHeroSubmitted(false)}
                          className="py-2 px-6 rounded-full bg-slate-900 text-white text-xs font-bold"
                        >
                          Submit Another
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleHeroSubmit} className="space-y-3 text-xs">
                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Full Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="As on PAN card"
                            value={heroName}
                            onChange={(e) => setHeroName(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-teal-500 outline-hidden"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Mobile Number *</label>
                          <input
                            type="tel"
                            required
                            maxLength={10}
                            placeholder="10-digit phone number"
                            value={heroMobile}
                            onChange={(e) => setHeroMobile(e.target.value.replace(/\D/g, ''))}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-teal-500 outline-hidden"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Email</label>
                          <input
                            type="email"
                            placeholder="name@example.com"
                            value={heroEmail}
                            onChange={(e) => setHeroEmail(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-teal-500 outline-hidden"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Loan Amount (₹)</label>
                            <input
                              type="number"
                              min={15000}
                              max={2500000}
                              step={5000}
                              value={heroAmount}
                              onChange={(e) => setHeroAmount(e.target.value)}
                              className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Loan Type</label>
                            <select
                              value={heroLoanType}
                              onChange={(e) => setHeroLoanType(e.target.value)}
                              className="w-full px-2.5 py-2 rounded-xl border border-slate-300 text-xs bg-white font-medium truncate"
                            >
                              <option value="Personal Loan">Personal Loan</option>
                              <option value="Business Loan">Business Loan</option>
                              <option value="Education Loan">Education Loan</option>
                              <option value="Medical Loan">Medical Loan</option>
                              <option value="Travel Loan">Travel Loan</option>
                              <option value="Home Renovation Loan">Home Renovation Loan</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="w-full py-3.5 rounded-full bg-slate-900 hover:bg-teal-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors cursor-pointer mt-2"
                        >
                          Apply Now
                        </button>

                        <p className="text-[10px] text-slate-400 text-center leading-tight">
                          *Submission does not guarantee approval. Loans subject to lender verification.
                        </p>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* 2. ABOUT SABKA FINANCE SECTION */}
            <section className="py-16 bg-white border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-6 space-y-4">
                    <span className="text-xs uppercase font-extrabold tracking-widest text-teal-600 block">
                      Who We Are
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
                      About Sabka Finance
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      "Sabka Finance is a customer-focused financial assistance platform designed to make the loan application journey simpler, clearer and more accessible across India."
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      We help borrowers explore financing options and understand the application process. Instead of facing confusing terms or endless paperwork, our technology and customer coordinators guide you toward suitable programs from regulated lenders.
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                        <span className="font-bold text-slate-900 block text-xs">Customer First</span>
                        <span className="text-[11px] text-slate-500">Unbiased guidance focused on your actual requirement</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                        <span className="font-bold text-slate-900 block text-xs">Regulated Lenders</span>
                        <span className="text-[11px] text-slate-500">We connect you with RBI-authorized institutions</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-6 bg-teal-50/60 p-6 sm:p-8 rounded-3xl border border-teal-100 space-y-4">
                    <h3 className="font-black text-base text-teal-950">Our Service Principles</h3>
                    <ul className="space-y-3 text-xs text-slate-700">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                        <span><strong>Zero Upfront Fees:</strong> We never charge borrowers advance fees or processing deposits.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                        <span><strong>Transparent Terms:</strong> All interest rates, tenures, and lender terms are shared clearly before application.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                        <span><strong>Privacy Protected:</strong> Your financial data is securely transmitted and never sold to spam telemarketers.</span>
                      </li>
                    </ul>

                    <div className="p-3 bg-white rounded-xl border border-teal-200/60 text-[11px] text-teal-900">
                      <strong>Disclosure:</strong> Sabka Finance operates strictly as an independent facilitator and is not a bank or government entity.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. SOLUTIONS FOR DIFFERENT FINANCIAL NEEDS (8 CARDS) */}
            <section className="py-16 bg-slate-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                <div className="text-center space-y-3 max-w-2xl mx-auto">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-teal-600 block">
                    What We Offer
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
                    Solutions for Different Financial Needs
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Choose from our 8 tailored loan facilitation categories matching your specific milestone or emergency.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {SABKA_FINANCE_PRODUCTS.map((prod) => (
                    <div
                      key={prod.id}
                      className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between space-y-4 group"
                    >
                      <div className="space-y-3">
                        <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                          <CreditCard className="w-6 h-6 stroke-[2]" />
                        </div>
                        <h3 className="font-black text-base text-slate-900">{prod.name}</h3>
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                          {prod.shortDescription}
                        </p>
                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                          <span className="text-slate-400">Up to</span>
                          <strong className="text-slate-900">₹ {(prod.maxAmount / 100000).toFixed(1)} Lakhs</strong>
                        </div>
                      </div>

                      <div className="space-y-2 pt-2">
                        <button
                          onClick={() => handleOpenApply(prod.name, prod.minAmount)}
                          className="w-full py-2.5 rounded-full bg-slate-900 hover:bg-teal-700 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                        >
                          Apply Now
                        </button>
                        <button
                          onClick={() => {
                            setCurrentTab(`product-${prod.slug}`);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="w-full py-1 text-slate-500 hover:text-teal-700 text-[11px] font-semibold text-center block cursor-pointer"
                        >
                          View Details →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 4. CHECK YOUR ELIGIBILITY SECTION */}
            <section id="eligibility-section" className="py-16 bg-white border-y border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                <div className="text-center space-y-3 max-w-2xl mx-auto">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-teal-600 block">
                    Eligibility Assessment
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
                    Check Your Eligibility
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Test your profile against standard qualification benchmarks before submitting an application.
                  </p>
                </div>

                <div className="max-w-3xl mx-auto bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <div className="flex justify-between text-xs font-bold text-slate-700 mb-2">
                        <span>Your Age</span>
                        <span className="text-teal-700">{eligAge} Years</span>
                      </div>
                      <input
                        type="range"
                        min={18}
                        max={65}
                        value={eligAge}
                        onChange={(e) => setEligAge(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                      />
                      <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                        <span>18 Yrs</span>
                        <span>Standard: 21-58 Yrs</span>
                        <span>65 Yrs</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold text-slate-700 mb-2">
                        <span>Monthly Net Income</span>
                        <span className="text-teal-700">₹ {eligIncome.toLocaleString('en-IN')}</span>
                      </div>
                      <input
                        type="range"
                        min={10000}
                        max={150000}
                        step={2500}
                        value={eligIncome}
                        onChange={(e) => setEligIncome(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                      />
                      <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                        <span>₹ 10k</span>
                        <span>Min: ₹ 15k</span>
                        <span>₹ 1.5 Lakhs</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Employment</label>
                      <div className="grid grid-cols-2 gap-2">
                        {(['Salaried', 'Self-Employed'] as const).map((emp) => (
                          <button
                            type="button"
                            key={emp}
                            onClick={() => setEligEmp(emp)}
                            className={`py-2 px-3 rounded-xl text-xs font-bold border cursor-pointer ${
                              eligEmp === emp ? 'bg-teal-700 text-white border-teal-700' : 'bg-white text-slate-700 border-slate-300'
                            }`}
                          >
                            {emp}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Location Type</label>
                      <select
                        value={eligCity}
                        onChange={(e) => setEligCity(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-white"
                      >
                        <option value="Metro City">Tier 1 / Metro City</option>
                        <option value="Tier 2 City">Tier 2 City</option>
                        <option value="Tier 3 / Rural">Tier 3 / Regional Area</option>
                      </select>
                    </div>
                  </div>

                  {/* Assessment Output Badge */}
                  <div className="p-4 rounded-2xl bg-white border border-teal-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        <strong className="text-sm font-black text-slate-900">
                          {eligAge >= 21 && eligAge <= 58 && eligIncome >= 15000
                            ? 'High Likelihood of Pre-Qualification'
                            : 'Further Document Verification Required'}
                        </strong>
                      </div>
                      <p className="text-xs text-slate-500">
                        Indicative eligibility for personal loans up to ₹{(eligIncome * 12).toLocaleString('en-IN')}.
                      </p>
                    </div>

                    <button
                      onClick={() => handleOpenApply('Personal Loan', Math.min(1000000, eligIncome * 12))}
                      className="py-2.5 px-6 rounded-full bg-amber-400 hover:bg-yellow-400 text-slate-950 font-black text-xs uppercase tracking-wider shrink-0 cursor-pointer shadow-sm"
                    >
                      Apply With This Profile
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. SIMPLE 3-STEP PROCESS SECTION */}
            <section className="py-16 bg-slate-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                <div className="text-center space-y-3 max-w-2xl mx-auto">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-teal-600 block">
                    How It Works
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
                    Simple 3-Step Application Process
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    A streamlined, transparent journey designed to reduce turnaround time.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      step: '01',
                      title: 'Online Application',
                      desc: 'Submit your requirement, basic details, and preferred loan parameters via our simple digital form.'
                    },
                    {
                      step: '02',
                      title: 'Verification & Assessment',
                      desc: 'Our coordinator verifies your KYC and income records and matches your profile with authorized lenders.'
                    },
                    {
                      step: '03',
                      title: 'Sanction & Disbursal',
                      desc: 'Review the official loan offer and sanction letter, accept terms, and receive direct bank transfer.'
                    }
                  ].map((s) => (
                    <div key={s.step} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
                      <span className="text-3xl font-black text-teal-200">{s.step}</span>
                      <h3 className="font-extrabold text-base text-slate-900">{s.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 6. EMI CALCULATOR SECTION */}
            <section className="py-16 bg-white border-t border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                <div className="text-center space-y-2 max-w-xl mx-auto">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-teal-600 block">
                    Planning
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
                    Estimate Your Monthly EMI
                  </h2>
                </div>
                <SabkaFinanceCalculator onApplyForAmount={(amt) => handleOpenApply('Personal Loan', amt)} />
              </div>
            </section>

            {/* 7. FAQ ACCORDION SECTION */}
            <section className="py-16 bg-slate-50 border-t border-slate-200">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                <div className="text-center space-y-2">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-teal-600 block">
                    Questions &amp; Answers
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-3">
                  {SABKA_FINANCE_FAQS.map((faq, idx) => {
                    const isOpen = expandedFaq === idx;
                    return (
                      <div
                        key={idx}
                        className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
                      >
                        <button
                          onClick={() => setExpandedFaq(isOpen ? null : idx)}
                          className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-xs sm:text-sm hover:text-teal-700 cursor-pointer"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                              isOpen ? 'rotate-180 text-teal-600' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-5 sm:px-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      {/* 3. Footer */}
      <SabkaFinanceFooter
        onNavigate={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenLegal={(type) => setLegalModalType(type)}
        onOpenApplyModal={() => handleOpenApply('Personal Loan', 300000)}
      />

      {/* 4. Modals */}
      <SabkaFinanceApplyModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        defaultLoanType={selectedLoanType}
        defaultAmount={selectedAmount}
      />

      <SabkaFinanceLegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
};
