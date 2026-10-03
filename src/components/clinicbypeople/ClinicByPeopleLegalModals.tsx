import React from 'react';
import { X, ShieldAlert, FileText, Lock } from 'lucide-react';
import { CLINIC_CONFIG } from '../../data/clinicByPeopleData';
import { ClinicByPeopleLogo } from './ClinicByPeopleLogo';

interface ClinicByPeopleLegalModalsProps {
  type: 'privacy' | 'terms' | 'disclaimer' | null;
  onClose: () => void;
}

export const ClinicByPeopleLegalModals: React.FC<ClinicByPeopleLegalModalsProps> = ({
  type,
  onClose,
}) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200 font-['Lexend',sans-serif]">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 pb-4 border-b border-slate-100 mb-4">
          <ClinicByPeopleLogo size="sm" />
        </div>

        {type === 'privacy' && (
          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="w-5 h-5 text-[#0C5BE2]" />
              <h3 className="text-xl font-bold text-slate-900">Privacy &amp; Patient Data Protection</h3>
            </div>
            <p>
              At <strong>{CLINIC_CONFIG.brandName}</strong>, safeguarding patient health records and personal contact details is our absolute priority.
            </p>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 pt-2">
              1. Information We Collect
            </h4>
            <p>
              We gather information provided voluntarily through consultation requests, telephone calls, or WhatsApp chats, including your name, contact number, city, medical symptoms, and insurance policy details for cashless pre-authorizations.
            </p>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 pt-2">
              2. Purpose of Medical Data Use
            </h4>
            <p>
              Collected health records are exclusively utilized to coordinate specialist appointments, arrange pre-surgery diagnostics, and coordinate with hospital TPA desks for insurance claim settlements. We never sell or lease patient records to third-party telemarketers.
            </p>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 pt-2">
              3. Data Security Protocols
            </h4>
            <p>
              All patient information is processed through 256-bit encrypted channels adhering to healthcare data security standards.
            </p>
          </div>
        )}

        {type === 'terms' && (
          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-5 h-5 text-[#0C5BE2]" />
              <h3 className="text-xl font-bold text-slate-900">Terms of Service</h3>
            </div>
            <p>
              Welcome to <strong>{CLINIC_CONFIG.brandName}</strong>. By accessing this platform or scheduling a consultation, you agree to these operational terms.
            </p>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 pt-2">
              1. Platform Nature &amp; Services
            </h4>
            <p>
              ClinicByPeople functions as a specialized medical discovery and patient care coordination platform. We assist patients in finding verified specialist surgeons, booking hospital suites, and streamlining insurance processing.
            </p>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 pt-2">
              2. Clinical Discretion
            </h4>
            <p>
              All clinical diagnoses, surgical suitability, medication decisions, and post-operative instructions are rendered solely by licensed, independent specialist medical practitioners.
            </p>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 pt-2">
              3. Insurance Approvals
            </h4>
            <p>
              Cashless hospital claim settlement is subject to the specific policy terms, exclusion lists, and underwriting discretion of the respective insurance company or Third Party Administrator (TPA).
            </p>
          </div>
        )}

        {type === 'disclaimer' && (
          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="flex items-center gap-2 mb-2">
              <ShieldAlert className="w-5 h-5 text-amber-500" />
              <h3 className="text-xl font-bold text-slate-900">Medical Disclaimer</h3>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 font-medium">
              {CLINIC_CONFIG.disclaimer}
            </div>
            <p>
              Content, surgical overviews, disease descriptions, and recovery timelines displayed on this website are provided strictly for educational and demonstration purposes.
            </p>
            <p>
              In the event of an acute medical emergency, severe bleeding, or trauma, please contact your nearest emergency room or dial emergency ambulance services immediately.
            </p>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
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
