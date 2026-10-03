import React from 'react';
import { X, ShieldAlert, FileText } from 'lucide-react';
import { BRAND_CONFIG } from '../../data/groupAchData';
import { AchIconMark } from './GroupAchLogo';

interface GroupAchLegalModalsProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const GroupAchLegalModals: React.FC<GroupAchLegalModalsProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand header */}
        <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 mb-4">
          <AchIconMark className="w-5 h-7 shrink-0" color="#2F483E" />
          <div className="flex flex-col">
            <span className="font-serif text-sm font-bold text-slate-900 leading-none">Group ACH</span>
            <span className="text-[10px] font-mono text-slate-400">{BRAND_CONFIG.domain}</span>
          </div>
        </div>

        {type === 'privacy' ? (
          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-5 h-5 text-sky-600" />
              <h3 className="text-xl font-bold text-slate-900">Privacy &amp; Data Handling Policy</h3>
            </div>
            <p>
              <strong>{BRAND_CONFIG.name}</strong> ({BRAND_CONFIG.domain}) is dedicated to safeguarding borrower privacy and maintaining complete confidentiality of applicant data.
            </p>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 pt-2">
              1. Information Collection
            </h4>
            <p>
              We collect information provided directly by you through our online inquiry forms, telephone conversations, or WhatsApp chats, including your full name, phone number, city, estimated loan requirement, employment status, and income metrics.
            </p>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 pt-2">
              2. Channel Purpose &amp; Lending Submission
            </h4>
            <p>
              Your information is exclusively utilized to evaluate loan eligibility and to present your file to the authorized underwriting desks of our 70+ partner banks and housing finance institutions. We never sell, rent, or trade your personal data to unauthorized third-party telemarketers.
            </p>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 pt-2">
              3. Data Security &amp; Storage
            </h4>
            <p>
              All physical or digital paperwork submitted for loan verification is treated with bank-grade confidentiality and deleted or archived strictly in accordance with RBI and institutional compliance standards.
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="flex items-center gap-2 mb-2">
              <ShieldAlert className="w-5 h-5 text-amber-600" />
              <h3 className="text-xl font-bold text-slate-900">Terms of Service &amp; Channel Partner Disclaimer</h3>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium space-y-1">
              <strong className="block font-bold">Mandatory Legal Notice:</strong>
              <p>{BRAND_CONFIG.legalDisclaimer}</p>
            </div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 pt-2">
              1. Independent Intermediary Role
            </h4>
            <p>
              {BRAND_CONFIG.name} ({BRAND_CONFIG.domain}) functions strictly as an independent channel connector and loan advisor. We are not a direct lender, non-banking financial company (NBFC), or banking corporation.
            </p>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 pt-2">
              2. Loan Sanction Discretion
            </h4>
            <p>
              Loan sanction, loan-to-value (LTV), pricing interest rates, tenure, and final fund disbursement are at the exclusive discretion of the lending partner bank or NBFC following their internal credit, legal, and technical appraisal policies.
            </p>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 pt-2">
              3. Zero Advisory Charges
            </h4>
            <p>
              Borrowers are not required to pay any upfront consulting or representation fees to {BRAND_CONFIG.name}. Any loan processing fees, valuation charges, or statutory stamp duty are payable directly to the lending institution upon formal sanction.
            </p>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
