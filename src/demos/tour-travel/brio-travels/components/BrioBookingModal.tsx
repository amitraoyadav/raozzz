import React from 'react';
import { X, Calendar, Sparkles } from 'lucide-react';
import { BrioQuickEnquiryForm } from './BrioQuickEnquiryForm';

interface BrioBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTourTitle?: string;
}

export const BrioBookingModal: React.FC<BrioBookingModalProps> = ({
  isOpen,
  onClose,
  defaultTourTitle = ''
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 my-8"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Fast Booking & Enquiry</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Poppins']">
            {defaultTourTitle ? `Book: ${defaultTourTitle}` : 'Plan Your Dream Vacation'}
          </h3>
          <p className="text-xs text-slate-500 mt-1 font-['Inter']">
            Get instant customized pricing, day-by-day itineraries, and free date rescheduling from our Delhi specialists.
          </p>
        </div>

        <BrioQuickEnquiryForm defaultDestination={defaultTourTitle} compact={false} />
      </div>
    </div>
  );
};
