import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  MessageSquare 
} from 'lucide-react';
import { SAMAROH_FAQS, SAMAROH_CONFIG } from '../../data/samarohLuxeData';

interface SamarohFaqSectionProps {
  onOpenConsultation: () => void;
}

export const SamarohFaqSection: React.FC<SamarohFaqSectionProps> = ({
  onOpenConsultation
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1]);

  const toggleAccordion = (idx: number) => {
    setOpenIndexes(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hello ${SAMAROH_CONFIG.DISPLAY_NAME}, I have a few specific questions regarding your decor pricing and 3D design process.`
    );
    window.open(`https://wa.me/${SAMAROH_CONFIG.WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${msg}`, '_blank');
  };

  return (
    <section id="faqs-section" className="py-20 lg:py-28 bg-[#181514] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E06D53]/15 border border-[#E06D53]/30">
            <HelpCircle className="w-3.5 h-3.5 text-[#E06D53]" />
            <span className="text-[11px] font-bold text-[#E06D53] uppercase tracking-wider">
              Common Questions
            </span>
          </div>
          <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light">
            Everything you need to know about our in-house fabrication, 3D design walkthroughs, and transparent pricing.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {SAMAROH_FAQS.map((faq, idx) => {
            const isOpen = openIndexes.includes(idx);
            return (
              <div
                key={idx}
                className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-850/50 transition-colors"
                >
                  <span className="font-['Fraunces',serif] text-base sm:text-lg font-bold text-white pr-2">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center shrink-0 text-stone-400">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#E06D53]" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-300 font-light leading-relaxed border-t border-stone-850">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Box */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-3">
          <p className="text-xs text-stone-400 font-light">
            Have a unique venue or custom technical setup requirement?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 rounded-full bg-[#E06D53] hover:bg-[#C8523B] text-white text-xs font-bold transition-all cursor-pointer"
            >
              Ask Our Design Team
            </button>
            <button
              onClick={openWhatsApp}
              className="px-5 py-2.5 rounded-full bg-stone-800 hover:bg-stone-750 text-stone-200 text-xs font-semibold border border-stone-700 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
