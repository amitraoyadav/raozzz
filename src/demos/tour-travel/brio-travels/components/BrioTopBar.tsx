import React from 'react';
import { ArrowLeft, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';

interface BrioTopBarProps {
  onBackToPortfolio: () => void;
}

export const BrioTopBar: React.FC<BrioTopBarProps> = ({ onBackToPortfolio }) => {
  return (
    <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Back to Portfolio Link */}
        <div className="flex items-center gap-4">
          <button
            onClick={onBackToPortfolio}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-teal-800 hover:bg-teal-700 text-white rounded-md font-semibold transition-colors cursor-pointer text-xs shadow-xs"
            title="Return to RaoSitez Portfolio Gallery"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </button>

          <span className="hidden md:inline-flex items-center gap-1.5 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
            <span>ISO 9001:2015 Certified Travel Agency · Delhi NCR</span>
          </span>
        </div>

        {/* Right: Contact & Working Hours */}
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <a
            href="tel:+910000000000"
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-teal-400" />
            <span>+91-00000-00000</span>
          </a>

          <a
            href="mailto:info@example.com"
            className="hidden sm:inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-teal-400" />
            <span>info@example.com</span>
          </a>

          <div className="hidden lg:inline-flex items-center gap-1.5 text-slate-400 border-l border-slate-700 pl-3">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Mon - Sat: 10:00 AM – 7:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};
