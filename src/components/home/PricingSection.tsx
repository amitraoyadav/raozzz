import React from 'react';
import { Check, Sparkles, Shield, ArrowRight, ShieldCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const PricingSection: React.FC<{ onOpenOrderModal: () => void }> = ({ onOpenOrderModal }) => {
  const { pricingPlans } = useApp();

  return (
    <section id="pricing" className="py-20 bg-[#FAFAF8] border-b border-[#E8E7F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8E7F0]/80 border border-[#D5D4E3] text-[#14162B] text-xs font-semibold mb-3 font-['Inter']">
            <Sparkles className="w-3.5 h-3.5 text-[#4338CA]" />
            <span>Honest One-Time Pricing</span>
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14162B] tracking-tight font-['Fraunces']">
            No Monthly Subscriptions. Pay Once, Own Forever.
          </h3>
          <p className="mt-3 text-[#474B64] text-sm sm:text-base leading-relaxed font-['Inter']">
            All packages include bespoke domain-appropriate styling, mobile optimization, 1 full year of cloud hosting, and direct WhatsApp customer ordering.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map(plan => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 transition-all flex flex-col justify-between ${
                plan.popular
                  ? 'bg-[#14162B] text-[#FAFAF8] shadow-2xl border-2 border-[#4338CA] md:-translate-y-2 z-10'
                  : 'bg-white text-[#14162B] border border-[#E8E7F0] shadow-xs hover:shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF6B4A] text-white text-[11px] font-bold py-1 px-4 rounded-full shadow-md flex items-center gap-1 font-['Inter']">
                  <Sparkles className="w-3.5 h-3.5" />
                  MOST POPULAR DEAL
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold tracking-tight mb-2 font-['Fraunces']">
                    {plan.name}
                  </h4>
                  <p className={`text-xs leading-relaxed font-['Inter'] ${plan.popular ? 'text-[#D5D4E3]' : 'text-[#636882]'}`}>
                    {plan.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-[#E8E7F0]/30">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm line-through text-[#8E92A8] font-bold font-['Inter']">
                      ₹{(plan.price * 10).toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-[#FF6B4A]/15 text-[#FF6B4A] border border-[#FF6B4A]/25 font-['Inter']">
                      90% OFF
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-black font-['Fraunces']">
                      ₹{plan.price.toLocaleString('en-IN')}
                    </span>
                    <span className={`text-xs font-medium font-['Inter'] ${plan.popular ? 'text-[#D5D4E3]' : 'text-[#636882]'}`}>
                      one-time · no hidden charges
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 font-['Inter']">
                    <span className={`inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded ${
                      plan.popular ? 'bg-white/10 text-white' : 'bg-[#FAFAF8] text-[#14162B] border border-[#E8E7F0]'
                    }`}>
                      {plan.timeline}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-500 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      100% Satisfaction or Refund
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8 font-['Inter']">
                  <span className={`text-[11px] font-bold uppercase tracking-wider block ${
                    plan.popular ? 'text-[#D5D4E3]' : 'text-[#8E92A8]'
                  }`}>
                    What is included:
                  </span>
                  {plan.features.map(feat => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        plan.popular ? 'bg-[#4338CA] text-white' : 'bg-[#E8E7F0] text-[#4338CA]'
                      }`}>
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className={plan.popular ? 'text-[#FAFAF8]' : 'text-[#3C3F58]'}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <button
                  onClick={onOpenOrderModal}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer font-['Inter'] ${
                    plan.popular
                      ? 'bg-[#FF6B4A] hover:bg-[#F25A38] text-white shadow-lg shadow-[#FF6B4A]/25'
                      : 'bg-[#14162B] hover:bg-[#4338CA] text-white shadow-xs'
                  }`}
                >
                  <span>Select {plan.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className={`text-[10px] text-center mt-2.5 font-['Inter'] ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                  🔒 100% satisfaction or full refund guarantee
                </p>

                {/* Free Hosting Included Badge */}
                <div className={`mt-3 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl text-[11px] font-semibold ${
                  plan.popular 
                    ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/30' 
                    : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                }`}>
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Free hosting included — no renewal fees</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees Strip */}
        <div className="mt-16 p-6 rounded-2xl bg-white border border-[#E8E7F0] flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto font-['Inter']">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-bold text-[#14162B] text-sm sm:text-base font-['Fraunces']">
                100% Satisfaction or Full Refund Guarantee
              </h5>
              <p className="text-xs text-[#51556E] mt-0.5">
                We review your menu, pricing, and images with you. If you are not satisfied with the finished site, you receive a full refund immediately.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenOrderModal}
            className="px-6 py-2.5 bg-[#14162B] hover:bg-[#4338CA] text-white text-xs font-bold rounded-xl transition-colors shrink-0 cursor-pointer"
          >
            Start for ₹999
          </button>
        </div>
      </div>
    </section>
  );
};
