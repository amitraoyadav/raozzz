import React from 'react';
import { Scale, Check } from 'lucide-react';
import { MAHESHWARI_FIRM_INFO } from '../../data/maheshwariData';

interface Props {
  isOpen: boolean;
  onAccept: () => void;
}

export const MaheshwariDisclaimerModal: React.FC<Props> = ({ isOpen, onAccept }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all">
        {/* Header with firm branding */}
        <div className="bg-[#1F242C] text-white px-6 py-5 flex items-center gap-3 border-b-4 border-[#8B1E2B]">
          <div className="w-10 h-10 rounded-lg bg-[#8B1E2B] flex items-center justify-center text-white shrink-0 shadow">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight uppercase font-serif">DISCLAIMER</h2>
            <p className="text-xs text-slate-300 font-sans tracking-wide">
              {MAHESHWARI_FIRM_INFO.legalName}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 text-slate-700 text-sm md:text-[14.5px] leading-relaxed max-h-[65vh] overflow-y-auto space-y-4">
          <p className="font-medium text-slate-900">
            The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner.
          </p>
          <p>
            By accessing this website (<span className="text-[#8B1E2B] font-semibold">https://www.maheshwariandco.com/</span>), you acknowledge and confirm that you are seeking information relating to <strong className="text-slate-900">Maheshwari &amp; Co., Advocates and Legal Consultants</strong> (hereinafter referred to as “Maheshwari &amp; Co.”), of your own accord and that there has been no form of solicitation, advertisement, or inducement by Maheshwari &amp; Co., or its members.
          </p>
          <p>
            The content of this website is for informational purposes only and should not be interpreted as soliciting or advertising. No material or information provided on this website should be construed as legal advice. Maheshwari &amp; Co. shall not be liable for the consequences of any action taken by relying on the material/information provided on this website.
          </p>
          <div className="p-3.5 bg-amber-50/80 border border-amber-200 rounded-lg text-xs text-amber-900">
            <strong>Notice:</strong> All disputes and inquiries submitted are subject to conflict checks and client acceptance protocols of the firm.
          </div>
        </div>

        {/* Action Button */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500">
            Bar Council of India Rule Compliance
          </span>
          <button
            onClick={onAccept}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#8B1E2B] hover:bg-[#721721] active:bg-[#5b1219] text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Check className="w-4 h-4" />
            <span>I accept the above</span>
          </button>
        </div>
      </div>
    </div>
  );
};
