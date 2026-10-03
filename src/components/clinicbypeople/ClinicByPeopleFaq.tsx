import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare, Phone } from 'lucide-react';
import { FAQS_DATA, CLINIC_CONFIG, buildClinicWhatsAppLink } from '../../data/clinicByPeopleData';

interface ClinicByPeopleFaqProps {
  onOpenConsultationModal: () => void;
}

export const ClinicByPeopleFaq: React.FC<ClinicByPeopleFaqProps> = ({
  onOpenConsultationModal,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200 font-['Lexend',sans-serif]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0C5BE2] border border-blue-100">
            Common Patient Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1528] tracking-tight mt-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Clear, straightforward answers about specialist consultations, insurance pre-authorizations, and daycare surgeries.
          </p>
        </div>

        {/* FAQ Accordions List */}
        <div className="space-y-3">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 overflow-hidden transition-all bg-white shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'bg-[#0C5BE2] text-white rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 bg-slate-50/40 animate-in fade-in duration-150">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Helpdesk Prompt */}
        <div className="mt-12 p-6 rounded-3xl bg-slate-50 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900">
              Have a clinical question not answered here?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Our 24x7 medical helpdesk is active to assist you right away.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenConsultationModal}
              className="px-4 py-2.5 rounded-xl bg-[#0C5BE2] hover:bg-[#0947b3] text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Ask an Advisor
            </button>
            <a
              href={buildClinicWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
