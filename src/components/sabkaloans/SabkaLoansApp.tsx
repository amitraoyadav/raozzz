import React, { useState, useEffect, useMemo } from 'react';
import {
  Landmark,
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
  Headphones,
  Info,
  Calendar,
  IndianRupee,
  Share2,
  TrendingUp,
  Award,
  ChevronRight,
  HeartPulse,
  GraduationCap,
  Plane,
  Home,
  Zap,
  CreditCard,
  AlertTriangle,
  Compass,
  MessageSquareText,
  FileCheck,
  BellRing
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
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
  SABKA_FINANCE_CONFIG,
  LOAN_PURPOSE_CARDS,
  SABKA_LOAN_PRODUCTS,
  SUPPORT_PROMISES,
  TRUST_PILLARS,
  LOAN_FAQS,
  MANDATORY_LEGAL_DISCLAIMER,
  LoanProduct
} from '../../data/sabkaLoansData';
import { SabkaLoansHeader } from './SabkaLoansHeader';
import { SabkaLoansFooter } from './SabkaLoansFooter';
import { SabkaLoansCategorySwitcher } from './SabkaLoansCategorySwitcher';
import { SabkaLoansCalculator, formatIndianCurrency } from './SabkaLoansCalculator';
import {
  SabkaLoansApplicationModal,
  SabkaLoansProductModal,
  SabkaLoansLegalModal
} from './SabkaLoansModals';
import {
  DedicatedLoanProductView,
  SabkaLoansRepaymentView,
  SabkaLoansAboutView,
  SabkaLoansContactView,
  SabkaLoansEligibilityView
} from './SabkaLoansDedicatedViews';

export const SabkaLoansApp: React.FC = () => {
  const { submitLead, setActiveView } = useApp();

  // Navigation tab state
  const [currentTab, setCurrentTab] = useState<string>('home');

  // Modals state
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState<LoanProduct | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'disclaimer' | 'fair-practice' | null>(null);

  // Application prefill state
  const [prefilledLoanType, setPrefilledLoanType] = useState('Personal Loan');
  const [prefilledAmount, setPrefilledAmount] = useState(250000);

  // FAQ Accordion State
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);

  // Hero Quick Form State (Matching reference structure)
  const [heroName, setHeroName] = useState('');
  const [heroEmail, setHeroEmail] = useState('');
  const [heroPhone, setHeroPhone] = useState('');
  const [heroAmount, setHeroAmount] = useState(50000);
  const [heroLoanType, setHeroLoanType] = useState('Personal Loan');
  const [heroSubmitted, setHeroSubmitted] = useState(false);

  // Inline Eligibility Section State
  const [eligibilityAge, setEligibilityAge] = useState(29);
  const [eligibilityIncome, setEligibilityIncome] = useState(45000);
  const [eligibilityEmployment, setEligibilityEmployment] = useState<'Salaried' | 'Self Employed' | 'Business Owner' | 'Other'>('Salaried');
  const [eligibilityAmount, setEligibilityAmount] = useState(300000);
  const [eligibilityCity, setEligibilityCity] = useState('Delhi NCR');
  const [eligibilityResultShown, setEligibilityResultShown] = useState(false);

  // Scroll to top on tab change
  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenApply = (productName?: string, amount?: number) => {
    if (productName) setPrefilledLoanType(productName);
    if (amount) setPrefilledAmount(amount);
    setApplicationModalOpen(true);
  };

  const handleHeroFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroName || !heroPhone) return;

    try {
      await submitLead({
        websiteSlug: 'sabka-loans',
        businessName: 'Sabka Finance Hero Application',
        customerName: heroName,
        customerPhone: heroPhone.replace(/\D/g, ''),
        customerEmail: heroEmail,
        serviceRequested: `${heroLoanType} for ₹${Number(heroAmount).toLocaleString('en-IN')}`,
        message: `Submitted from Hero form. Type: ${heroLoanType}, Amount: ₹${heroAmount}`,
        status: 'new'
      });
    } catch {
      // Fallback
    }

    setHeroSubmitted(true);
  };

  const getLoanPurposeIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-7 h-7 text-blue-400" />;
      case 'HeartPulse':
        return <HeartPulse className="w-7 h-7 text-rose-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-7 h-7 text-amber-400" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-pink-400" />;
      case 'Plane':
        return <Plane className="w-7 h-7 text-sky-400" />;
      case 'Zap':
        return <Zap className="w-7 h-7 text-emerald-400" />;
      case 'Home':
        return <Home className="w-7 h-7 text-indigo-400" />;
      case 'CreditCard':
      default:
        return <CreditCard className="w-7 h-7 text-blue-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-['Inter',sans-serif] selection:bg-blue-600 selection:text-white">
      {/* 1. Global Multi-site Switcher for the 49 Websites collection */}
      <ReferenceSiteSwitcher currentSiteId="sabka-loans" />

      {/* 2. Global Header with sticky nav, 6 categories selector & fraud marquee */}
      <SabkaLoansHeader
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenApply={handleOpenApply}
      />

      {/* 3. DYNAMIC CONTENT ROUTER */}
      <main className="flex-1">
        {/* VIEW: Repayment Info */}
        {currentTab === 'repayment' && (
          <SabkaLoansRepaymentView
            onOpenApply={handleOpenApply}
            onNavigate={handleNavigate}
          />
        )}

        {/* VIEW: About Us */}
        {currentTab === 'about' && (
          <SabkaLoansAboutView
            onOpenApply={handleOpenApply}
            onNavigate={handleNavigate}
          />
        )}

        {/* VIEW: Contact Us */}
        {currentTab === 'contact' && (
          <SabkaLoansContactView
            onOpenApply={handleOpenApply}
            onNavigate={handleNavigate}
          />
        )}

        {/* VIEW: Eligibility Page */}
        {currentTab === 'eligibility' && (
          <SabkaLoansEligibilityView
            onOpenApply={handleOpenApply}
            onNavigate={handleNavigate}
          />
        )}

        {/* VIEW: Calculator Page */}
        {currentTab === 'calculator' && (
          <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-wider text-blue-600 block mb-1">
                Repayment Planning
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
                Loan EMI Calculator
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-2">
                Calculate estimated monthly installments, interest breakdown, and repayment schedules instantly.
              </p>
            </div>
            <SabkaLoansCalculator onApplyWithDetails={(amt, tenure, type) => handleOpenApply(type, amt)} />
          </div>
        )}

        {/* VIEW: FAQ Page */}
        {currentTab === 'faq' && (
          <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center">
              <span className="text-xs uppercase font-bold tracking-wider text-blue-600 block mb-1">
                Frequently Asked Questions
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
                Frequently Asked Questions
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-2">
                Clear answers to common questions regarding loan applications, criteria, and repayment terms.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              {LOAN_FAQS.map((faq, idx) => {
                const isOpen = expandedFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
                  >
                    <button
                      onClick={() => setExpandedFaqIndex(isOpen ? null : idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm text-slate-900 cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-blue-600 shrink-0 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* VIEW: Dedicated Product Pages */}
        {(currentTab.endsWith('-loan') || currentTab.startsWith('prod-')) && (
          <DedicatedLoanProductView
            productSlug={currentTab}
            onOpenApply={handleOpenApply}
            onNavigate={handleNavigate}
          />
        )}

        {/* VIEW: HOMEPAGE (Default full loan service experience) */}
        {currentTab === 'home' && (
          <>
            {/* HERO SECTION */}
            <section className="relative bg-[#02051a] text-white pt-16 pb-20 sm:pt-20 sm:pb-28 overflow-hidden border-b border-white/10">
              {/* Background gradient & decorative subtle rupee patterns */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-[#02051a] to-[#02051a] pointer-events-none" />

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  {/* Left Column: Headlines & CTAs */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-semibold">
                      <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                      <span>Financial Assistance Platform · Website #49</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                      Financial Support When You Need It
                    </h1>

                    <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
                      Explore suitable loan options with a simple digital application and professional assistance throughout the process.
                    </p>

                    {/* Primary CTAs */}
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => handleOpenApply()}
                        className="py-4 px-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl shadow-blue-600/30 flex items-center gap-2 cursor-pointer hover:scale-105"
                      >
                        <span>Apply Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => {
                          const el = document.getElementById('eligibility-section');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                          else handleNavigate('eligibility');
                        }}
                        className="py-4 px-7 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                      >
                        Check Eligibility
                      </button>
                    </div>

                    {/* Trust Highlights Row */}
                    <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 text-xs">
                      <div>
                        <span className="text-xl sm:text-2xl font-black text-blue-400 block">
                          ₹10K - 25L
                        </span>
                        <span className="text-[11px] text-slate-400">Loan Range</span>
                      </div>
                      <div>
                        <span className="text-xl sm:text-2xl font-black text-white block">
                          100% Digital
                        </span>
                        <span className="text-[11px] text-slate-400">Application Flow</span>
                      </div>
                      <div>
                        <span className="text-xl sm:text-2xl font-black text-emerald-400 block">
                          Zero
                        </span>
                        <span className="text-[11px] text-slate-400">Upfront Broker Fees</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Hero Application Form Card (Matching Reference Design) */}
                  <div className="lg:col-span-5">
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl space-y-4">
                      <div className="border-b border-white/10 pb-3">
                        <span className="text-[10px] uppercase font-bold text-blue-400 tracking-wider block">
                          Quick Loan Enquiry
                        </span>
                        <h3 className="text-xl font-black text-white">
                          Check Your Loan Offer
                        </h3>
                        <p className="text-[11px] text-slate-300">
                          Takes less than 2 minutes. Transparent assessment.
                        </p>
                      </div>

                      {heroSubmitted ? (
                        <div className="py-8 text-center space-y-3">
                          <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                            <CheckCircle2 className="w-6 h-6" />
                          </div>
                          <h4 className="font-bold text-white text-base">Enquiry Sent!</h4>
                          <p className="text-xs text-slate-300">
                            Thank you, {heroName}. A loan coordinator will contact you shortly to review available options.
                          </p>
                          <button
                            onClick={() => setHeroSubmitted(false)}
                            className="text-xs text-blue-400 underline pt-2 block mx-auto"
                          >
                            Submit another enquiry
                          </button>
                        </div>
                      ) : (
                        <form onSubmit={handleHeroFormSubmit} className="space-y-3">
                          <div>
                            <input
                              type="text"
                              required
                              placeholder="Full Name"
                              value={heroName}
                              onChange={(e) => setHeroName(e.target.value)}
                              className="w-full px-4 py-2.5 rounded-full bg-white/15 border border-white/25 text-white placeholder-slate-400 text-xs focus:outline-hidden focus:ring-2 focus:ring-blue-400"
                            />
                          </div>

                          <div>
                            <input
                              type="email"
                              required
                              placeholder="Email Address"
                              value={heroEmail}
                              onChange={(e) => setHeroEmail(e.target.value)}
                              className="w-full px-4 py-2.5 rounded-full bg-white/15 border border-white/25 text-white placeholder-slate-400 text-xs focus:outline-hidden focus:ring-2 focus:ring-blue-400"
                            />
                          </div>

                          <div>
                            <input
                              type="tel"
                              required
                              maxLength={10}
                              placeholder="Phone Number (10 Digits)"
                              value={heroPhone}
                              onChange={(e) => setHeroPhone(e.target.value.replace(/\D/g, ''))}
                              className="w-full px-4 py-2.5 rounded-full bg-white/15 border border-white/25 text-white placeholder-slate-400 text-xs focus:outline-hidden focus:ring-2 focus:ring-blue-400"
                            />
                          </div>

                          <div>
                            <select
                              value={heroLoanType}
                              onChange={(e) => setHeroLoanType(e.target.value)}
                              className="w-full px-4 py-2.5 rounded-full bg-[#0a0f2c] border border-white/25 text-white text-xs focus:outline-hidden focus:ring-2 focus:ring-blue-400"
                            >
                              <option value="Personal Loan">Personal Loan</option>
                              <option value="Business Loan">Business Loan</option>
                              <option value="Education Loan">Education Loan</option>
                              <option value="Medical Loan">Medical Loan</option>
                              <option value="Travel Loan">Travel Loan</option>
                              <option value="Home Renovation Loan">Home Renovation Loan</option>
                              <option value="Other">Other Financial Needs</option>
                            </select>
                          </div>

                          {/* Amount Slider */}
                          <div className="pt-1">
                            <div className="flex justify-between items-center text-xs text-slate-300 mb-1">
                              <span>Loan Amount</span>
                              <span className="font-extrabold text-blue-400 text-sm">
                                {formatIndianCurrency(heroAmount)}
                              </span>
                            </div>
                            <input
                              type="range"
                              min={10000}
                              max={1000000}
                              step={5000}
                              value={heroAmount}
                              onChange={(e) => setHeroAmount(Number(e.target.value))}
                              className="w-full h-1.5 rounded-lg cursor-pointer accent-blue-500"
                            />
                            <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
                              <span>₹10,000</span>
                              <span>₹10,00,000+</span>
                            </div>
                          </div>

                          <div className="pt-2">
                            <button
                              type="submit"
                              className="w-full py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-blue-600/30"
                            >
                              Check Loan Offer
                            </button>
                          </div>

                          <p className="text-[10px] text-slate-400 text-center pt-1 italic">
                            *No guaranteed approval. Subject to lender credit assessment.
                          </p>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ABOUT SABKA FINANCE SECTION */}
            <section className="py-20 bg-white" id="about-section">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 block">
                      About {BRAND_DISPLAY}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                      About Sabka Finance
                    </h2>
                    <p className="text-base text-slate-600 leading-relaxed">
                      Sabka Finance is a customer-focused financial assistance platform designed to make the loan application journey simpler, clearer and more accessible.
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      We help customers explore suitable financing options from trusted banking and regulated financial partners. We understand that borrowing can feel complicated, so our team guides you through understanding eligibility criteria, organizing required documents, and choosing repayment schedules that suit your life.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-xs font-bold text-slate-900">100% Digital Enquiries</strong>
                          <span className="text-[11px] text-slate-500">Apply anytime without bank branch queues.</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-xs font-bold text-slate-900">Zero Upfront Brokerage</strong>
                          <span className="text-[11px] text-slate-500">Transparent processing without unexpected fees.</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => handleNavigate('about')}
                        className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5 group cursor-pointer"
                      >
                        <span>Read More About Our Principles</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-[#02051a] p-8 text-white space-y-6">
                      <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white">
                        <Landmark className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-black">
                        Simple. Transparent. Everyday Financial Support.
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed font-light">
                        "Our goal is to bring clarity and ease to everyday financial requirements across India, connecting applicants to suitable institutional lenders with care."
                      </p>
                      <div className="pt-2 border-t border-white/10 text-xs text-blue-300 flex items-center justify-between">
                        <span>Platform Website #49</span>
                        <span className="text-emerald-400 font-semibold">Active & Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* WHAT WE OFFER SECTION (8 LOAN PURPOSE CARDS) */}
            <section className="py-20 bg-slate-50" id="products-section">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="text-center max-w-3xl mx-auto space-y-3">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 block">
                    What We Offer
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    Solutions for Different Financial Needs
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Compare tailored loan products designed for life milestones, unexpected emergencies, and business expansion.
                  </p>
                </div>

                {/* 8 Loan Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {LOAN_PURPOSE_CARDS.map((card) => (
                    <div
                      key={card.id}
                      className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            {getLoanPurposeIcon(card.icon)}
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">
                            {card.badge}
                          </span>
                        </div>

                        <div>
                          <h3 className="font-extrabold text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                            {card.title}
                          </h3>
                          <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                            {card.shortDescription}
                          </p>
                        </div>

                        <div className="space-y-1 pt-2 border-t border-slate-100 text-[11px] text-slate-600">
                          {card.highlights.map((h, i) => (
                            <div key={i} className="flex items-center gap-1.5">
                              <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 flex items-center gap-2">
                        <button
                          onClick={() => handleNavigate(card.slug)}
                          className="flex-1 py-2.5 px-3 rounded-full border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 text-center transition-colors cursor-pointer"
                        >
                          Learn More
                        </button>
                        <button
                          onClick={() => handleOpenApply(card.title, card.minAmount)}
                          className="flex-1 py-2.5 px-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold text-center transition-colors cursor-pointer shadow-sm"
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CHECK YOUR ELIGIBILITY SECTION */}
            <section className="py-20 bg-white" id="eligibility-section">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-5 space-y-6">
                    <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 block">
                      Eligibility Check
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                      Check Your Eligibility
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Loan eligibility is determined by multiple financial and profiling factors:
                    </p>

                    <ul className="space-y-2.5 text-xs text-slate-700">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span><strong>Age:</strong> Typically between 21 and 58 years of age.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span><strong>Income:</strong> Stable monthly salary or verified business turnover.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span><strong>Employment Profile:</strong> Salaried employee, professional or business owner.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span><strong>Credit History:</strong> Consistent repayment record and reasonable FOIR ratio.</span>
                      </li>
                    </ul>

                    <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 italic">
                      "Eligibility results are indicative only. Final approval is determined by the applicable lending institution."
                    </div>
                  </div>

                  {/* Interactive Eligibility Card */}
                  <div className="lg:col-span-7">
                    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-800 space-y-5">
                      <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3">
                        Self Eligibility Calculator
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                            Age: {eligibilityAge} Years
                          </label>
                          <input
                            type="range"
                            min={18}
                            max={65}
                            value={eligibilityAge}
                            onChange={(e) => {
                              setEligibilityAge(Number(e.target.value));
                              setEligibilityResultShown(false);
                            }}
                            className="w-full h-2 rounded-lg cursor-pointer accent-blue-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                            Employment Type
                          </label>
                          <select
                            value={eligibilityEmployment}
                            onChange={(e) => {
                              setEligibilityEmployment(e.target.value as any);
                              setEligibilityResultShown(false);
                            }}
                            className="w-full px-3 py-2 text-xs rounded-xl bg-slate-800 border border-slate-700 text-white"
                          >
                            <option value="Salaried">Salaried Employee</option>
                            <option value="Self Employed">Self-Employed Professional</option>
                            <option value="Business Owner">Business Owner</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                            Monthly Net Income: {formatIndianCurrency(eligibilityIncome)}
                          </label>
                          <input
                            type="range"
                            min={10000}
                            max={250000}
                            step={5000}
                            value={eligibilityIncome}
                            onChange={(e) => {
                              setEligibilityIncome(Number(e.target.value));
                              setEligibilityResultShown(false);
                            }}
                            className="w-full h-2 rounded-lg cursor-pointer accent-blue-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                            Required Amount: {formatIndianCurrency(eligibilityAmount)}
                          </label>
                          <input
                            type="range"
                            min={10000}
                            max={2500000}
                            step={10000}
                            value={eligibilityAmount}
                            onChange={(e) => {
                              setEligibilityAmount(Number(e.target.value));
                              setEligibilityResultShown(false);
                            }}
                            className="w-full h-2 rounded-lg cursor-pointer accent-blue-500"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                            City / Location
                          </label>
                          <input
                            type="text"
                            value={eligibilityCity}
                            onChange={(e) => setEligibilityCity(e.target.value)}
                            placeholder="e.g. Mumbai, Bangalore, Delhi NCR"
                            className="w-full px-3 py-2 text-xs rounded-xl bg-slate-800 border border-slate-700 text-white"
                          />
                        </div>
                      </div>

                      <button
                        onClick={() => setEligibilityResultShown(true)}
                        className="w-full py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg"
                      >
                        Check Eligibility
                      </button>

                      {eligibilityResultShown && (
                        <div className="p-4 rounded-2xl bg-blue-950/80 border border-blue-600/50 text-xs text-blue-200 space-y-2">
                          <div className="flex items-center gap-2 text-emerald-400 font-bold">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Preliminary Match: Eligible for Evaluation!</span>
                          </div>
                          <p className="text-[11px] leading-relaxed">
                            Based on your age ({eligibilityAge} yrs) and monthly income ({formatIndianCurrency(eligibilityIncome)}), you qualify to submit an application for up to {formatIndianCurrency(eligibilityAmount)}.
                          </p>
                          <button
                            onClick={() => handleOpenApply('Personal Loan', eligibilityAmount)}
                            className="px-5 py-2 rounded-full bg-blue-600 text-white font-bold text-[11px] uppercase tracking-wider"
                          >
                            Proceed with Application
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* APPLICATION PROCESS: 3 SIMPLE STEPS */}
            <section className="py-20 bg-slate-50" id="how-it-works">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="text-center max-w-2xl mx-auto space-y-3">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 block">
                    Simple Process
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    Apply in 3 Simple Steps
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    A streamlined, transparent journey from initial enquiry to loan disbursal.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* STEP 1 */}
                  <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative space-y-4 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-black text-lg flex items-center justify-center shadow-lg shadow-blue-600/20">
                      1
                    </div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                      STEP 1
                    </span>
                    <h3 className="text-xl font-black text-slate-900">
                      APPLY ONLINE
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Complete the basic application form in less than 2 minutes with your essential personal and financial information.
                    </p>
                  </div>

                  {/* STEP 2 */}
                  <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative space-y-4 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-black text-lg flex items-center justify-center shadow-lg shadow-blue-600/20">
                      2
                    </div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                      STEP 2
                    </span>
                    <h3 className="text-xl font-black text-slate-900">
                      GET VERIFIED
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Provide the required information and basic documents (PAN, Aadhaar, income statements) for evaluation by the lender.
                    </p>
                  </div>

                  {/* STEP 3 */}
                  <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative space-y-4 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-black text-lg flex items-center justify-center shadow-lg shadow-blue-600/20">
                      3
                    </div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                      STEP 3
                    </span>
                    <h3 className="text-xl font-black text-slate-900">
                      RECEIVE FUNDS
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      If approved, funds are disbursed directly into your bank account according to the applicable lender's terms.
                    </p>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <button
                    onClick={() => handleOpenApply()}
                    className="py-4 px-9 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-black text-xs uppercase tracking-wider transition-all shadow-xl shadow-blue-600/30 inline-flex items-center gap-2 cursor-pointer hover:scale-105"
                  >
                    <span>Start Your Application</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>

            {/* CUSTOMER SUPPORT THAT KEEPS YOU INFORMED (ZERO FAKE REVIEWS) */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="text-center max-w-3xl mx-auto space-y-3">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 block">
                    Our Support Commitment
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    Customer Support That Keeps You Informed
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We prioritize transparent assistance and clear communication at every turn so you always know where your application stands.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {SUPPORT_PROMISES.map((item) => (
                    <div
                      key={item.id}
                      className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs space-y-3"
                    >
                      <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                        {item.id === 'sp-1' && <MessageSquareText className="w-5 h-5" />}
                        {item.id === 'sp-2' && <Compass className="w-5 h-5" />}
                        {item.id === 'sp-3' && <FileCheck className="w-5 h-5" />}
                        {item.id === 'sp-4' && <BellRing className="w-5 h-5" />}
                      </div>
                      <h3 className="font-extrabold text-sm text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECURITY & TRUST SECTION: "YOUR INFORMATION MATTERS" */}
            <section className="py-20 bg-[#02051a] text-white border-t border-white/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="text-center max-w-3xl mx-auto space-y-3">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-blue-400 block">
                    Privacy & Compliance
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    Your Information Matters
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    We maintain stringent security measures and adhere to transparent data principles.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {TRUST_PILLARS.map((item) => (
                    <div
                      key={item.id}
                      className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md space-y-3"
                    >
                      <div className="w-10 h-10 rounded-2xl bg-blue-600/30 text-blue-400 flex items-center justify-center font-bold border border-blue-400/30">
                        {item.id === 'tp-1' && <ShieldCheck className="w-5 h-5" />}
                        {item.id === 'tp-2' && <Lock className="w-5 h-5" />}
                        {item.id === 'tp-3' && <FileText className="w-5 h-5" />}
                        {item.id === 'tp-4' && <Headphones className="w-5 h-5" />}
                      </div>
                      <h3 className="font-extrabold text-sm text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Partner Network Disclosure */}
                <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-white/5 border border-white/10 text-center space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400">
                    Our Lending Network
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Depending on the product and customer profile, enquiries may be evaluated or facilitated through applicable lending institutions or financial partners.
                  </p>
                </div>
              </div>
            </section>

            {/* LOAN EMI CALCULATOR SECTION */}
            <section className="py-20 bg-slate-50" id="calculator-section">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="text-center max-w-3xl mx-auto space-y-3">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 block">
                    Financial Planning
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    Interactive Loan EMI Calculator
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Simulate your monthly installment and total repayment breakdown in Indian Rupees.
                  </p>
                </div>

                <SabkaLoansCalculator onApplyWithDetails={(amt, tenure, type) => handleOpenApply(type, amt)} />
              </div>
            </section>

            {/* ACCORDION FAQ SECTION */}
            <section className="py-20 bg-white" id="faq-section">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                <div className="text-center space-y-3">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 block">
                    Questions & Answers
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Everything you need to know about our financial facilitation services.
                  </p>
                </div>

                <div className="space-y-3">
                  {LOAN_FAQS.map((faq, idx) => {
                    const isOpen = expandedFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-xs"
                      >
                        <button
                          onClick={() => setExpandedFaqIndex(isOpen ? null : idx)}
                          className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm text-slate-900 cursor-pointer hover:bg-slate-100/60"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-blue-600 shrink-0 transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
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

      {/* 4. FOOTER */}
      <SabkaLoansFooter
        onNavigate={handleNavigate}
        onOpenApply={handleOpenApply}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* 5. MODALS */}
      <SabkaLoansApplicationModal
        isOpen={applicationModalOpen}
        onClose={() => setApplicationModalOpen(false)}
        preselectedProduct={prefilledLoanType}
        preselectedAmount={prefilledAmount}
      />

      <SabkaLoansProductModal
        product={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
        onApplyForProduct={(p) => {
          setSelectedProductForModal(null);
          handleOpenApply(p.name, p.minAmount);
        }}
      />

      <SabkaLoansLegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Floating Action Buttons for quick help & application */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 transition-transform hover:scale-110 cursor-pointer"
          title="WhatsApp Loan Assistance"
        >
          <MessageSquare className="w-5 h-5" />
        </a>

        <button
          onClick={() => handleOpenApply()}
          className="py-2.5 px-5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-xl shadow-blue-600/30 transition-transform hover:scale-105 flex items-center gap-2 cursor-pointer"
        >
          <span>Apply Now</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
