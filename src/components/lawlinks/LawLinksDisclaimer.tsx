import React from 'react';
import { LAWLINKS_INFO } from '../../data/lawlinksData';
import { Scale, CheckCircle2 } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onAgree: () => void;
}

export const LawLinksDisclaimer: React.FC<Props> = ({ isOpen, onAgree }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Header decoration */}
        <div className="bg-gradient-to-r from-[#03A9F5] to-[#0288d1] px-6 py-5 text-white flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <Scale className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-sky-100 font-semibold">Bar Council of India Compliance</span>
            <h3 className="text-xl font-bold tracking-tight">“Disclaimer & Confirmation”</h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-5 text-slate-700 leading-relaxed text-sm md:text-base">
          <p className="font-medium text-slate-900 border-l-4 border-[#03A9F5] pl-4 py-1 italic bg-sky-50/50 rounded-r">
            {LAWLINKS_INFO.disclaimer}
          </p>

          <div className="space-y-2 text-xs text-slate-500 pt-2 border-t border-slate-100">
            <p>• The user acknowledges that there has been no advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from us or any of our members to solicit any work through this website.</p>
            <p>• The user wishes to gain more information about us for their own information and personal use.</p>
            <p>• The information about us is provided to the user only on their specific request.</p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>By clicking Agree, you accept these terms.</span>
            </div>
            <button
              onClick={onAgree}
              className="w-full sm:w-auto px-8 py-3 bg-[#03A9F5] hover:bg-[#0288d1] text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 uppercase tracking-wider text-sm cursor-pointer"
            >
              AGREE & CONTINUE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
