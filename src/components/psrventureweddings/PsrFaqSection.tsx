import React, { useState, useMemo } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Sparkles, 
  MessageSquare, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { PSR_FAQS, FaqItem } from '../../data/psrWeddingsData';
import { siteConfig } from '../../config/siteConfig';

interface PsrFaqSectionProps {
  onOpenConsultation: () => void;
}

export const PsrFaqSection: React.FC<PsrFaqSectionProps> = ({
  onOpenConsultation
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1]); // First 2 open by default

  const categories = ['All', 'General', 'Budgets & Fees', 'Destinations & Venues', 'Vendors & Logistics'];

  const filteredFaqs = useMemo(() => {
    if (activeCategory === 'All') return PSR_FAQS;
    return PSR_FAQS.filter(f => f.category === activeCategory);
  }, [activeCategory]);

  const toggleAccordion = (index: number) => {
    setOpenIndexes(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hello ${siteConfig.SITE_NAME}, I have a few specific questions regarding planning our destination wedding.`
    );
    window.open(`https://wa.me/${siteConfig.WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${msg}`, '_blank');
  };

  return (
    <section id="faqs-section" className="py-20 lg:py-28 bg-[#180408] text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#DFBE78]/30">
            <HelpCircle className="w-3.5 h-3.5 text-[#DFBE78]" />
            <span className="text-[11px] font-bold text-[#DFBE78] uppercase tracking-widest">
              Clarity & Peace of Mind
            </span>
          </div>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
            Planning an outstation celebration brings genuine dilemmas about vendor contracts, hotel negotiations, noise curfews, and logistics. Here are frank, experienced answers.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#C5A059] to-[#DFBE78] text-[#1A0509] font-bold shadow-md'
                  : 'bg-white/5 hover:bg-white/10 text-stone-300 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={index}
                className="bg-[#20070B] rounded-2xl border border-[#C5A059]/25 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <span className="font-['Playfair_Display',serif] text-base sm:text-lg font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#DFBE78] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#C5A059]/20' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-300 font-light leading-relaxed border-t border-stone-800/80">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-[#22070C] border border-[#C5A059]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <span className="text-xs uppercase font-bold text-[#DFBE78] tracking-wider block">
              Have a Question We Haven’t Answered?
            </span>
            <p className="text-xs text-stone-300 font-light">
              Chat directly with our Senior Destination Wedding Directors on WhatsApp.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={openWhatsApp}
              className="px-5 py-2.5 rounded-full bg-emerald-800/40 hover:bg-emerald-700/60 border border-emerald-500/50 text-emerald-300 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </button>
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 rounded-full bg-[#C5A059] hover:bg-[#DFBE78] text-[#1A0509] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Book Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
