import React from 'react';
import { Store, FileText, Palette, CheckSquare, Rocket, ArrowRight, Sparkles } from 'lucide-react';

export const ProcessSection: React.FC<{ onOpenOrderModal: () => void }> = ({ onOpenOrderModal }) => {
  const steps = [
    {
      number: '01.',
      title: 'Choose Business Type',
      description: 'Select your trade — café, dental clinic, beauty parlour, gym, clothing boutique, coaching or grocery.'
    },
    {
      number: '02.',
      title: 'Share Your Details',
      description: 'Send us your shop name, menu/services, prices, timings, photos, and WhatsApp number via simple chat.'
    },
    {
      number: '03.',
      title: 'Bespoke Design',
      description: 'We craft a custom, mobile-first website matching your business colors, font pairings, and trade workflows.'
    },
    {
      number: '04.',
      title: 'Review & Verify',
      description: 'We send you a private live preview link. Suggest any changes or updates until you are 100% satisfied.'
    },
    {
      number: '05.',
      title: 'Live in 24 Hours',
      description: 'Your site launches on your unique URL with Google Maps and shop QR standee ready for customers.'
    }
  ];

  return (
    <section id="process" className="py-20 bg-[#FAFAF8] border-b border-[#E8E7F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8E7F0]/80 border border-[#D5D4E3] text-[#14162B] text-xs font-semibold mb-3 font-['Inter']">
            <Sparkles className="w-3.5 h-3.5 text-[#4338CA]" />
            <span>Turnkey Onboarding</span>
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14162B] tracking-tight font-['Fraunces']">
            How we get your shop ready in 24 hours.
          </h3>
          <p className="mt-3 text-[#474B64] text-sm sm:text-base leading-relaxed font-['Inter']">
            No technical knowledge or coding needed. We do all the heavy lifting so you can focus on running your business.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative font-['Inter']">
          {steps.map((step) => {
            return (
              <div
                key={step.number}
                className="bg-white rounded-2xl p-6 border border-[#E8E7F0] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="font-['Fraunces'] text-2xl font-black text-[#4338CA] block mb-3">
                    {step.number}
                  </span>

                  <h4 className="text-base font-bold text-[#14162B] mb-2 font-['Fraunces']">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#51556E] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenOrderModal}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FF6B4A] hover:bg-[#F25A38] text-white text-xs font-bold rounded-xl shadow-lg shadow-[#FF6B4A]/25 transition-all cursor-pointer font-['Inter'] transform hover:-translate-y-0.5"
          >
            <span>Get Started for ₹999</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
