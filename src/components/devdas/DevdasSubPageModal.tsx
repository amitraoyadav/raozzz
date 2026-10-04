import React from 'react';
import {
  X,
  Building2,
  Layers,
  CheckCircle2,
  ShieldCheck,
  Award,
  Clock,
  Sparkles,
  ArrowRight,
  Users,
  Compass,
  Heart,
  FileCheck,
  Calendar,
} from 'lucide-react';
import { DEVDAS_CONFIG } from '../../data/devdasWeddingData';

interface DevdasSubPageModalProps {
  pageType: string | null;
  onClose: () => void;
  onOpenInquiry: () => void;
  onOpenCalculator: () => void;
}

export const DevdasSubPageModal: React.FC<DevdasSubPageModalProps> = ({
  pageType,
  onClose,
  onOpenInquiry,
  onOpenCalculator,
}) => {
  if (!pageType) return null;

  const renderContent = () => {
    switch (pageType) {
      case 'about':
      case 'why-devdas':
        return (
          <div className="space-y-6">
            <div>
              <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider inline-block mb-2">
                Our Legacy &amp; Vision
              </span>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900">
                The Devdas Wedding Story
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Founded in 2015, Devdas Wedding was created to bring high aesthetic precision, transparent financial governance, and family warmth to Indian destination celebrations. Over a decade, we have grown into one of the subcontinent's most revered bespoke wedding design houses.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#FCFBF7] border border-amber-900/10 space-y-2">
                <ShieldCheck className="w-6 h-6 text-[#7A1C30]" />
                <h4 className="font-serif font-bold text-base text-slate-900">100% Commission-Free</h4>
                <p className="text-xs text-slate-600">
                  We refuse vendor and hotel commissions. Every contracted rupee, buffet discount, and room upgrade is credited back directly to our couples.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FCFBF7] border border-amber-900/10 space-y-2">
                <Heart className="w-6 h-6 text-[#7A1C30]" />
                <h4 className="font-serif font-bold text-base text-slate-900">Dedicated Family Concierge</h4>
                <p className="text-xs text-slate-600">
                  A personal shadow manager accompanies the bride, groom, and immediate elders throughout the celebration, ensuring comfort at every step.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200 space-y-3">
              <h4 className="font-serif font-bold text-base text-[#7A1C30]">Key Company Milestones</h4>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7A1C30]" />
                  <span><strong>2015:</strong> Founded in Delhi NCR as a bespoke boutique design studio.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7A1C30]" />
                  <span><strong>2018:</strong> Expanded dedicated on-ground hubs in Udaipur and South Goa.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7A1C30]" />
                  <span><strong>2022:</strong> Crossed 200+ milestone royal &amp; luxury celebrations across Asia.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7A1C30]" />
                  <span><strong>2026:</strong> Operating full-scale production offices in Gurgaon, Udaipur, Goa, and Bangkok.</span>
                </li>
              </ul>
            </div>
          </div>
        );

      case 'costs':
        return (
          <div className="space-y-6">
            <div>
              <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider inline-block mb-2">
                Financial Advisory
              </span>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900">
                Destination Wedding Cost Architecture
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Learn how budgets are allocated across hospitality, decor, F&amp;B, logistics, and entertainment. No hidden contingencies or unexpected surcharges.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  dest: 'Udaipur & Rajasthan Palaces',
                  range: '₹45 Lacs - ₹1.5 Crores',
                  notes: 'Palace venues, lakeside mandap fabrication, royal welcome procession, and folk cultural troupes.',
                },
                {
                  dest: 'Goa Coastal Resorts',
                  range: '₹35 Lacs - ₹90 Lacs',
                  notes: '5-star beach lawn ceremonies, sundowner cocktail sets, sea-facing fireworks, and CRZ permits.',
                },
                {
                  dest: 'Jim Corbett Mountain Lodges',
                  range: '₹28 Lacs - ₹65 Lacs',
                  notes: 'Riverside mandap builds, forest lodge buyouts, private jungle safaris, and Delhi transit buses.',
                },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl border border-slate-200 bg-white space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-slate-900 text-sm">{item.dest}</span>
                    <span className="font-bold text-[#7A1C30] text-sm">{item.range}</span>
                  </div>
                  <p className="text-xs text-slate-600">{item.notes}</p>
                </div>
              ))}
            </div>

            <div className="text-center pt-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenCalculator();
                }}
                className="px-6 py-3 rounded-xl bg-[#7A1C30] text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                Launch Custom Budget Calculator
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-amber-900/10 overflow-hidden my-auto max-h-[90vh] flex flex-col">
        <div className="p-5 border-b border-slate-200 flex items-center justify-between shrink-0 bg-slate-50">
          <div className="font-serif font-bold text-base text-slate-900 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#7A1C30]" />
            <span>Devdas Wedding · Editorial Information</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto">{renderContent()}</div>

        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenInquiry();
            }}
            className="px-5 py-2.5 rounded-xl bg-[#7A1C30] hover:bg-[#621424] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            Book Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
