import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Sparkles,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Layers,
  Send,
  CheckCircle2,
  X,
  Phone,
  MessageSquare,
  Building,
  Shield,
  FileCheck,
  Calculator,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import {
  BRAND_CONFIG,
  GroupAchLoanType,
  GroupAchLeadFormData,
  submitGroupAchLead,
  buildWhatsAppLink,
} from '../../data/groupAchData';
import { GroupAchNavbar } from './GroupAchNavbar';
import { GroupAchHero } from './GroupAchHero';
import { GroupAchBankPartners } from './GroupAchBankPartners';
import { GroupAchProducts } from './GroupAchProducts';
import { GroupAchCalculators } from './GroupAchCalculators';
import { GroupAchAbout } from './GroupAchAbout';
import { GroupAchTestimonials } from './GroupAchTestimonials';
import { GroupAchFaq } from './GroupAchFaq';
import { GroupAchContact } from './GroupAchContact';
import { GroupAchFooter } from './GroupAchFooter';
import { GroupAchLeadModal } from './GroupAchLeadModal';
import { GroupAchLegalModals } from './GroupAchLegalModals';
import { GroupAchFloatingWhatsApp } from './GroupAchFloatingWhatsApp';
import { GroupAchHomeLoanPage } from './pages/GroupAchHomeLoanPage';
import { GroupAchLapPage } from './pages/GroupAchLapPage';
import { GroupAchDelhiNcrPage } from './pages/GroupAchDelhiNcrPage';
import { GroupAchBlogPage } from './pages/GroupAchBlogPage';

interface GroupAchAppProps {
  onBackToHub?: () => void;
  initialFullDemo?: boolean;
}

export const GroupAchApp: React.FC<GroupAchAppProps> = ({
  onBackToHub,
  initialFullDemo = true,
}) => {
  const { setActiveView, submitLead, submitWebsiteRequest } = useApp();

  // Internal page navigation for Group ACH website
  const [currentPage, setCurrentPage] = useState<string>('home');

  // Showcase header banner state (collapsible)
  const [isFullDemoMode, setIsFullDemoMode] = useState<boolean>(initialFullDemo);
  const [showcaseBarCollapsed, setShowcaseBarCollapsed] = useState<boolean>(false);

  // Modals for Group ACH demo
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [applyInitialLoanType, setApplyInitialLoanType] = useState<GroupAchLoanType>('home_loan');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Raozsite "Get a website like this" modal
  const [raozsiteLeadModalOpen, setRaozsiteLeadModalOpen] = useState(false);
  const [raozName, setRaozName] = useState('');
  const [raozPhone, setRaozPhone] = useState('');
  const [raozEmail, setRaozEmail] = useState('');
  const [raozCity, setRaozCity] = useState('');
  const [raozRequirements, setRaozRequirements] = useState(
    'I want a loan advisory website like Group ACH Loan Solutions (Project #63) with EMI calculators, bank partner showcase, and WhatsApp lead generation.'
  );
  const [raozSubmitting, setRaozSubmitting] = useState(false);
  const [raozSubmitted, setRaozSubmitted] = useState(false);

  // Scroll to top on page transition
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleOpenApplyModal = (loanType: GroupAchLoanType = 'home_loan') => {
    setApplyInitialLoanType(loanType);
    setApplyModalOpen(true);
  };

  const handleNavigate = (path: string) => {
    // Normalise path
    const clean = path.replace(/^\//, '');
    if (clean === '' || clean === 'home') {
      setCurrentPage('home');
    } else if (clean === 'home-loans' || clean === 'home-loan') {
      setCurrentPage('home-loans');
    } else if (clean === 'loan-against-property' || clean === 'lap') {
      setCurrentPage('lap');
    } else if (clean === 'delhi-ncr' || clean === 'delhi') {
      setCurrentPage('delhi-ncr');
    } else if (clean === 'calculators' || clean === 'calculator') {
      setCurrentPage('calculators');
    } else if (clean === 'blog' || clean === 'guides' || clean === 'insights') {
      setCurrentPage('blog');
    } else if (clean === 'contact') {
      setCurrentPage('contact');
    } else if (clean === 'about') {
      setCurrentPage('home');
      setTimeout(() => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      setCurrentPage('home');
    }
  };

  const handleRaozsiteLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!raozPhone.trim() || raozSubmitting) return;

    setRaozSubmitting(true);
    try {
      if (submitLead) {
        await submitLead({
          websiteSlug: 'group-ach',
          businessName: 'Group ACH Loan Solutions (Project #63)',
          customerName: raozName || 'Prospective Client',
          customerEmail: raozEmail || '',
          customerPhone: raozPhone,
          message: `${raozRequirements} (City: ${raozCity || 'Not specified'})`,
          status: 'new',
        });
      }
      if (submitWebsiteRequest) {
        await submitWebsiteRequest({
          businessName: `${raozName || 'Prospective Client'}'s Loan Consultancy`,
          category: 'loan_dsa',
          ownerName: raozName || 'Prospective Client',
          phone: raozPhone,
          city: raozCity || 'Delhi NCR',
          notes: raozRequirements,
        });
      }
      setRaozSubmitted(true);
    } catch (err) {
      console.error('Error submitting Raozsite lead:', err);
      setRaozSubmitted(true);
    } finally {
      setRaozSubmitting(false);
    }
  };

  const handleBackToPortfolio = () => {
    if (onBackToHub) {
      onBackToHub();
    } else {
      setActiveView('demo-websites');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAF9] text-slate-900 font-sans selection:bg-[#2F483E] selection:text-white">
      {/* ========================================================================= */}
      {/* 1. RAOZSITE PORTFOLIO TOP SHOWCASE BAR (PROJECT #63 HEADER)              */}
      {/* ========================================================================= */}
      <aside aria-label="Project showcase controls" className="bg-[#0F172A] text-white border-b border-slate-800 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          {/* Left info badge */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleBackToPortfolio}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors cursor-pointer border border-slate-700"
              title="Return to Raozsite Portfolio"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Portfolio</span>
              <span className="sm:hidden">Back</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                PROJECT #63
              </span>
              <div className="hidden md:flex items-center gap-1.5">
                <span className="font-serif font-bold text-sm tracking-tight text-white">
                  Group ACH Loan Solutions
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-xs text-slate-400">Home &amp; Property Loan Advisory</span>
              </div>
            </div>

            {/* Badges */}
            <div className="hidden lg:flex items-center gap-1.5">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                LOAN
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                FINANCE
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                DEMO WEBSITE
              </span>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setIsFullDemoMode(!isFullDemoMode);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                isFullDemoMode
                  ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                  : 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-sm'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isFullDemoMode ? 'Show Overview' : 'OPEN FULL DEMO'}</span>
            </button>

            <button
              onClick={() => setRaozsiteLeadModalOpen(true)}
              className="px-3.5 py-1.5 rounded-lg bg-[#85673E] hover:bg-[#977546] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <span>GET A WEBSITE LIKE THIS</span>
            </button>

            <button
              onClick={() => setShowcaseBarCollapsed(!showcaseBarCollapsed)}
              className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title={showcaseBarCollapsed ? 'Expand Details' : 'Collapse Details'}
            >
              {showcaseBarCollapsed ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronUp className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Expandable Overview Drawer */}
        {!showcaseBarCollapsed && !isFullDemoMode && (
          <div className="bg-[#0B1120] border-t border-slate-800/80 px-4 py-6 text-slate-300 animate-in fade-in duration-200">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-xs leading-relaxed">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                  Project Brief
                </span>
                <h4 className="font-serif text-lg font-bold text-white mt-1">
                  GROUP ACH LOAN SOLUTIONS
                </h4>
                <p className="mt-2 text-slate-400">
                  A complete digital platform designed for a home loan and loan-against-property
                  advisory business, combining service discovery, loan calculators, lender
                  information, lead generation and SEO-focused content.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">
                    Domain: www.achlinks.in
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">
                    Phone: +91 94825 37337
                  </span>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                  Interactive Features Included
                </span>
                <ul className="mt-2 space-y-1.5 text-slate-300">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Real-time EMI, Eligibility &amp; Balance Transfer Calculators</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>70+ Bank &amp; HFC Partner Rate Directory</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Home Loan &amp; Loan Against Property Subpages</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Delhi NCR Localized Real Estate &amp; Loan Landing Page</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Live Lead Capture &amp; Direct WhatsApp Consultation CTAs</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col justify-between bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-sky-400">
                    Client Deliverable
                  </span>
                  <p className="mt-1 font-semibold text-white">
                    Need a high-converting website for your loan DSA or financial consultancy?
                  </p>
                  <p className="mt-1 text-slate-400">
                    We deliver turn-key websites with real calculators, WhatsApp CRM integration, and
                    SEO rankings in 5-7 business days.
                  </p>
                </div>
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => setIsFullDemoMode(true)}
                    className="flex-1 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-center text-xs transition-colors cursor-pointer"
                  >
                    Open Full Demo
                  </button>
                  <button
                    onClick={() => setRaozsiteLeadModalOpen(true)}
                    className="flex-1 py-2 px-3 rounded-lg bg-[#85673E] hover:bg-[#977546] text-white font-bold text-center text-xs transition-colors cursor-pointer"
                  >
                    Get This Site
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* ========================================================================= */}
      {/* 2. GROUP ACH ORIGINAL WEBSITE DEMO                                         */}
      {/* ========================================================================= */}
      <div className="w-full">
        {/* Group ACH Original Navbar */}
        <GroupAchNavbar
          currentPath={currentPage === 'home' ? '/' : `/${currentPage}`}
          onNavigate={handleNavigate}
          onOpenApplyModal={(loanType) => handleOpenApplyModal(loanType || 'home_loan')}
        />

        {/* Page Switcher */}
        <main>
          {currentPage === 'home' && (
            <>
              <GroupAchHero
                onLeadSuccess={async (data) => submitGroupAchLead(data)}
                onOpenCalculator={() => handleNavigate('calculators')}
              />
              <GroupAchBankPartners onSelectBankQuote={() => handleOpenApplyModal('home_loan')} />
              <GroupAchProducts
                onOpenApplyModal={(loanType) => handleOpenApplyModal(loanType)}
              />
              <div id="calculators">
                <GroupAchCalculators onApplyWithEmi={(loanType) => handleOpenApplyModal(loanType)} />
              </div>
              <div id="about">
                <GroupAchAbout onOpenApplyModal={() => handleOpenApplyModal('home_loan')} />
              </div>
              <GroupAchTestimonials />
              <GroupAchFaq />
              <div id="contact">
                <GroupAchContact onLeadSuccess={async (data) => submitGroupAchLead(data)} />
              </div>
            </>
          )}

          {currentPage === 'home-loans' && (
            <GroupAchHomeLoanPage
              onOpenApplyModal={(loanType) => handleOpenApplyModal(loanType || 'home_loan')}
              onNavigate={handleNavigate}
            />
          )}

          {currentPage === 'lap' && (
            <GroupAchLapPage
              onOpenApplyModal={(loanType) => handleOpenApplyModal(loanType || 'loan_against_property')}
              onNavigate={handleNavigate}
            />
          )}

          {currentPage === 'delhi-ncr' && (
            <GroupAchDelhiNcrPage
              onOpenApplyModal={(loanType) => handleOpenApplyModal(loanType || 'home_loan')}
              onNavigate={handleNavigate}
            />
          )}

          {currentPage === 'calculators' && (
            <div className="py-8 bg-slate-50 min-h-screen">
              <div className="max-w-7xl mx-auto px-4 mb-4">
                <button
                  onClick={() => handleNavigate('home')}
                  className="text-xs font-bold text-slate-500 hover:text-slate-900 inline-flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Home</span>
                </button>
              </div>
              <GroupAchCalculators onApplyWithEmi={(loanType) => handleOpenApplyModal(loanType)} />
            </div>
          )}

          {currentPage === 'blog' && (
            <GroupAchBlogPage
              onOpenApplyModal={(loanType) => handleOpenApplyModal(loanType || 'home_loan')}
              onNavigate={handleNavigate}
            />
          )}

          {currentPage === 'contact' && (
            <div className="py-8 bg-slate-50 min-h-screen">
              <div className="max-w-7xl mx-auto px-4 mb-4">
                <button
                  onClick={() => handleNavigate('home')}
                  className="text-xs font-bold text-slate-500 hover:text-slate-900 inline-flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Home</span>
                </button>
              </div>
              <GroupAchContact onLeadSuccess={async (data) => submitGroupAchLead(data)} />
            </div>
          )}
        </main>

        {/* Group ACH Footer */}
        <GroupAchFooter
          onNavigate={handleNavigate}
          onOpenPrivacy={() => setLegalModalType('privacy')}
          onOpenTerms={() => setLegalModalType('terms')}
        />

        {/* Group ACH Floating WhatsApp & Mobile Action Bar */}
        <GroupAchFloatingWhatsApp
          onOpenApplyModal={() => handleOpenApplyModal('home_loan')}
          onNavigate={handleNavigate}
        />

        {/* Group ACH Lead Modal */}
        <GroupAchLeadModal
          isOpen={applyModalOpen}
          onClose={() => setApplyModalOpen(false)}
          initialLoanType={applyInitialLoanType}
          onLeadSuccess={async (data) => {
            const res = await submitGroupAchLead(data);
            return res;
          }}
        />

        {/* Group ACH Legal Modals (Privacy & Terms) */}
        <GroupAchLegalModals
          type={legalModalType}
          onClose={() => setLegalModalType(null)}
        />
      </div>

      {/* ========================================================================= */}
      {/* 3. RAOZSITE "GET A WEBSITE LIKE THIS" MODAL                                */}
      {/* ========================================================================= */}
      {raozsiteLeadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8">
            <button
              onClick={() => {
                setRaozsiteLeadModalOpen(false);
                setRaozSubmitted(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {raozSubmitted ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  Request Received!
                </h3>
                <p className="text-sm text-slate-600 mt-2">
                  Thank you! Our Raozsite engineering and design team will reach out to you within 2 hours
                  with a customized proposal and quote for your loan advisory website.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="https://wa.me/919482537337?text=Hi%20Raozsite,%20I%20am%20interested%20in%20a%20website%20like%20Group%20ACH%20Loan%20Solutions%20(Project%20%2363)"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Direct WhatsApp Chat</span>
                  </a>
                  <button
                    onClick={() => {
                      setRaozsiteLeadModalOpen(false);
                      setRaozSubmitted(false);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-700 border border-emerald-500/30">
                    Raozsite Web Agency
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-slate-900 mt-1">
                    Get A Website Like Project #63
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Order a custom-branded loan advisory website with loan calculators, lead generation,
                    70+ lender tables, and responsive mobile architecture.
                  </p>
                </div>

                <form onSubmit={handleRaozsiteLeadSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={raozName}
                      onChange={(e) => setRaozName(e.target.value)}
                      placeholder="e.g. Ramesh Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 bg-slate-50 focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Mobile Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={raozPhone}
                        onChange={(e) => setRaozPhone(e.target.value)}
                        placeholder="e.g. 9876543210"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 bg-slate-50 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        City / State
                      </label>
                      <input
                        type="text"
                        value={raozCity}
                        onChange={(e) => setRaozCity(e.target.value)}
                        placeholder="e.g. Delhi NCR, Mumbai"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 bg-slate-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={raozEmail}
                      onChange={(e) => setRaozEmail(e.target.value)}
                      placeholder="e.g. ramesh@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 bg-slate-50 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Project Notes / Special Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={raozRequirements}
                      onChange={(e) => setRaozRequirements(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 bg-slate-50 focus:bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={raozSubmitting}
                    className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {raozSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Website Inquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    Direct enquiry via Raozsite's client intake system. Zero obligation quote.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
