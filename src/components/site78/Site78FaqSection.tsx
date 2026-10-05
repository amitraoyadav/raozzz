import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS_DATA } from '../../data/site78Data';
import { site78Config } from '../../config/site78Config';

export const Site78FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#F3EEE7]/50 text-[#222222] relative font-['Jost',sans-serif]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#747157] text-xs font-bold uppercase tracking-[0.25em]">
            <span className="w-8 h-[1px] bg-[#B99D75]" />
            <span>Quick Answers</span>
            <span className="w-8 h-[1px] bg-[#B99D75]" />
          </div>

          <h2 className="font-['Cormorant',serif] font-bold text-3xl sm:text-5xl lg:text-6xl text-[#1C1C1C] leading-[1.12]">
            Frequently Asked Questions
          </h2>

          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-[#E5DFD7]" />
            <span className="text-[#B99D75] text-xs">✦</span>
            <span className="w-12 h-[1px] bg-[#E5DFD7]" />
          </div>

          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed max-w-xl mx-auto">
            Everything you need to know about your arrival, private pool facilities, policies, transfers, and celebrations at Aurelia Goa.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E5DFD7] overflow-hidden shadow-xs transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F3EEE7]/30 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-['Cormorant',serif] font-semibold text-lg sm:text-2xl text-[#1C1C1C] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#747157] text-white border-[#747157] rotate-180'
                        : 'bg-[#F3EEE7] text-[#747157] border-[#E5DFD7]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-stone-600 font-light text-sm sm:text-base leading-relaxed border-t border-[#F3EEE7] animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Concierge Help Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-[#E5DFD7] text-center space-y-3">
          <div className="font-['Cormorant',serif] font-bold text-2xl text-[#1C1C1C]">
            Have an enquiry not covered here?
          </div>
          <p className="text-sm text-stone-600 font-light max-w-lg mx-auto">
            Our guest relations team is available 24 hours a day to assist with custom room requirements, airport pickups, and special celebration arrangements.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${site78Config.WHATSAPP}?text=${encodeURIComponent(site78Config.WHATSAPP_DEFAULT_MSG)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-[#747157] hover:bg-[#56543e] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-xs flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#B99D75]" />
              <span>Chat with Concierge</span>
            </a>
            <a
              href={`tel:${site78Config.PHONE_ROOMS_RAW}`}
              className="px-6 py-2.5 rounded-full bg-[#F3EEE7] hover:bg-[#e7dfd4] text-[#222222] text-xs font-semibold tracking-wider uppercase transition-all"
            >
              Call {site78Config.PHONE_ROOMS}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
