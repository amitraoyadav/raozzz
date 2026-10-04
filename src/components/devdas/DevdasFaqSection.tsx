import React, { useState } from 'react';
import {
  HelpCircle,
  ChevronDown,
  Sparkles,
  Phone,
  MessageSquare,
  Building,
} from 'lucide-react';
import { FAQS_DATA, FaqItem, DEVDAS_CONFIG } from '../../data/devdasWeddingData';

interface DevdasFaqSectionProps {
  onOpenInquiry: () => void;
}

export const DevdasFaqSection: React.FC<DevdasFaqSectionProps> = ({ onOpenInquiry }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<'all' | 'General' | 'Budget & Fee' | 'Destinations' | 'Vendors & Logistics'>('all');

  const filteredFaqs = FAQS_DATA.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-[#FCFBF7] border-b border-amber-900/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-[#7A1C30] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clear Answers</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Everything you need to know about destination wedding budgeting, planning fees, vendor management, and guest hospitality.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {[
            { id: 'all', label: 'All FAQs' },
            { id: 'General', label: 'General Planning' },
            { id: 'Budget & Fee', label: 'Pricing & Fees' },
            { id: 'Destinations', label: 'Locations & Venues' },
            { id: 'Vendors & Logistics', label: 'Vendors & Guest Logistics' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#7A1C30] text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-rose-50 text-[#7A1C30] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#7A1C30] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/30">
                    <p>{faq.a}</p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-[#7A1C30] font-semibold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Category: {faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm text-center max-w-xl mx-auto space-y-3">
          <h4 className="font-serif font-bold text-lg text-slate-900">
            Have a unique question about your wedding?
          </h4>
          <p className="text-xs text-slate-600">
            Speak directly with our nuptial directors in Gurgaon or WhatsApp our travel desk.
          </p>
          <div className="flex items-center justify-center gap-3 pt-1">
            <button
              onClick={onOpenInquiry}
              className="px-5 py-2.5 rounded-xl bg-[#7A1C30] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#621424] transition-all cursor-pointer"
            >
              Ask Our Wedding Planner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
