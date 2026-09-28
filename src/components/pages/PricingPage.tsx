import React, { useState } from 'react';
import {
  Check,
  X,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  HelpCircle,
  Clock,
  Globe,
  Smartphone,
  QrCode,
  Zap
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const PricingPage: React.FC<{ onOpenOrderModal: (plan?: string) => void }> = ({ onOpenOrderModal }) => {
  const { pricingPlans } = useApp();

  const starterPlan = pricingPlans.find(p => p.id === 'starter') || { price: 999 };
  const proPlan = pricingPlans.find(p => p.id === 'professional') || { price: 1499 };
  const premiumPlan = pricingPlans.find(p => p.id === 'premium') || { price: 1999 };

  const featureComparison = [
    {
      category: 'Deliverables & Design',
      features: [
        { name: 'Delivery Turnaround Time', starter: '24 Hours', pro: '48 Hours', premium: '3 Days' },
        { name: 'Products / Menu Items in ₹', starter: 'Up to 15 items', pro: 'Up to 40 items', premium: 'Unlimited' },
        { name: 'Responsive Mobile-First Architecture', starter: true, pro: true, premium: true },
        { name: 'Sticky Bottom Call & WhatsApp Bar', starter: true, pro: true, premium: true },
        { name: 'Google Maps Location & Directions Embed', starter: true, pro: true, premium: true },
        { name: 'Photo Gallery (Interior, Products, Staff)', starter: 'Up to 3 photos', pro: 'Up to 10 photos', premium: 'Unlimited' },
        { name: 'Print-Ready Counter QR Code File', starter: true, pro: true, premium: true }
      ]
    },
    {
      category: 'Conversion & Booking Engines',
      features: [
        { name: 'Direct WhatsApp 1-Click Ordering', starter: true, pro: true, premium: true },
        { name: 'Direct Call Now Phone Action', starter: true, pro: true, premium: true },
        { name: 'Category Booking Engine (Slot / Table / Pickup)', starter: false, pro: true, premium: true },
        { name: 'Doctor OPD Timings / Salon Service Durations', starter: false, pro: true, premium: true },
        { name: 'Promotional Offers & Discount Coupon Codes', starter: false, pro: true, premium: true },
        { name: 'Automated WhatsApp Enquiry Lead Forwarding', starter: false, pro: true, premium: true }
      ]
    },
    {
      category: 'Hosting, Domains & Advanced Tech',
      features: [
        { name: 'High-Speed Cloud Hosting', starter: '1 Year Included', pro: '1 Year Included', premium: '1 Year Included' },
        { name: 'RaoSitez Subdomain (raositez.in/your-shop)', starter: true, pro: true, premium: true },
        { name: 'Custom Domain Setup (.in / .com connection)', starter: false, pro: false, premium: true },
        { name: 'LocalBusiness Schema.org JSON-LD SEO', starter: false, pro: true, premium: true },
        { name: 'PWA Mobile App (Add to Phone Home Screen)', starter: false, pro: false, premium: true },
        { name: 'Custom Section Toggle & Reorder Control', starter: false, pro: false, premium: true },
        { name: 'Priority Ongoing Maintenance & Rate Changes', starter: 'Standard', pro: 'Standard', premium: 'Priority VIP' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#14162B] font-['Inter']">
      {/* Hero Header */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#E8E7F0]/40 via-[#FAFAF8] to-white border-b border-[#E8E7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FF6B4A]/10 text-[#FF6B4A] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Transparent Pricing · No Recurring Traps
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#14162B] font-['Fraunces'] tracking-tight leading-tight">
            Simple, Honest Pricing for Indian Small Businesses
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#3C3F58] leading-relaxed">
            Every package includes 1 full year of fast cloud hosting, sticky WhatsApp buttons, and our 100% satisfaction money-back guarantee. Zero hidden agency charges.
          </p>
        </div>
      </section>

      {/* 3 Package Cards */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1. Starter Plan */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E7F0] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-[#8E92A8] tracking-wider">
                  Basic Package
                </span>
                <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">
                  24h Launch
                </span>
              </div>
              <h3 className="text-2xl font-black text-[#14162B] font-['Fraunces'] mt-1">
                Starter Website
              </h3>
              <p className="text-xs text-[#474B64] mt-2">
                Ideal for neighborhood retail counters, chai kiosks, and local home service providers.
              </p>

              <div className="mt-6 flex items-baseline gap-2 pb-6 border-b border-[#E8E7F0]">
                <span className="text-4xl sm:text-5xl font-black text-[#14162B] font-mono-price">
                  ₹{starterPlan.price}
                </span>
                <span className="text-sm text-[#8E92A8] line-through">₹9,999</span>
                <span className="text-xs font-bold text-[#FF6B4A] bg-[#FF6B4A]/10 px-2 py-0.5 rounded">
                  90% OFF
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-xs text-[#474B64]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Single-page fast responsive website</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Up to 15 items with ₹ rates</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Direct WhatsApp ordering & Call buttons</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Google Maps location & directions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>1 Year High-Speed Cloud Hosting</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenOrderModal('starter')}
              className="mt-8 w-full py-3 bg-[#14162B] hover:bg-[#232742] text-white text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Get Starter (₹{starterPlan.price})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Small Free Hosting Included Badge */}
            <div className="mt-2.5 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl bg-emerald-50 text-emerald-800 text-[11px] font-semibold border border-emerald-200">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>Free hosting included — no renewal fees</span>
            </div>
          </div>

          {/* 2. Professional Plan (POPULAR) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#4338CA] shadow-xl relative flex flex-col justify-between">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#4338CA] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
              Most Popular Choice
            </div>

            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-[#4338CA] tracking-wider">
                  Recommended
                </span>
                <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                  48h Launch
                </span>
              </div>
              <h3 className="text-2xl font-black text-[#14162B] font-['Fraunces'] mt-1">
                Professional Website
              </h3>
              <p className="text-xs text-[#474B64] mt-2">
                Best for cafes, clinics, salons, laundries, and busy local businesses.
              </p>

              <div className="mt-6 flex items-baseline gap-2 pb-6 border-b border-[#E8E7F0]">
                <span className="text-4xl sm:text-5xl font-black text-[#14162B] font-mono-price">
                  ₹{proPlan.price}
                </span>
                <span className="text-sm text-[#8E92A8] line-through">₹14,999</span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  TOP VALUE
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-xs text-[#474B64]">
                <li className="flex items-center gap-2 font-semibold text-[#14162B]">
                  <Check className="w-4 h-4 text-[#4338CA] shrink-0" />
                  <span>Everything in Starter +</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Up to 40 items/services with categories</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Booking Engine (Slots, Tables, Pickups)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Doctor OPD timings or Salon durations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Promotional Offer & Discount vouchers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Interactive photo gallery & high-res QR standee</span>
                </li>
              </ul>
            </div>

            {/* Coral Conversion Button */}
            <button
              onClick={() => onOpenOrderModal('professional')}
              className="mt-8 w-full py-3.5 bg-[#FF6B4A] hover:bg-[#F25A38] text-white text-xs font-bold rounded-xl shadow-md shadow-[#FF6B4A]/25 transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Get Professional (₹{proPlan.price})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Small Free Hosting Included Badge */}
            <div className="mt-2.5 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl bg-emerald-50 text-emerald-800 text-[11px] font-semibold border border-emerald-200">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>Free hosting included — no renewal fees</span>
            </div>
          </div>

          {/* 3. Premium Plan */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E7F0] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-[#8E92A8] tracking-wider">
                  Full Branded Portal
                </span>
                <span className="text-[11px] font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full">
                  3 Days
                </span>
              </div>
              <h3 className="text-2xl font-black text-[#14162B] font-['Fraunces'] mt-1">
                Premium Brand Portal
              </h3>
              <p className="text-xs text-[#474B64] mt-2">
                For luxury studios, diagnostic labs, fitness centers, and established enterprises.
              </p>

              <div className="mt-6 flex items-baseline gap-2 pb-6 border-b border-[#E8E7F0]">
                <span className="text-4xl sm:text-5xl font-black text-[#14162B] font-mono-price">
                  ₹{premiumPlan.price}
                </span>
                <span className="text-sm text-[#8E92A8] line-through">₹24,999</span>
                <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                  VIP SUITE
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-xs text-[#474B64]">
                <li className="flex items-center gap-2 font-semibold text-[#14162B]">
                  <Check className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Everything in Professional +</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Unlimited products, services & photos</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Custom domain support (yourbrand.in)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>PWA Mobile App capability</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>LocalBusiness Schema.org SEO markup</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Priority lifetime updates & rate changes</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenOrderModal('premium')}
              className="mt-8 w-full py-3 bg-[#14162B] hover:bg-[#232742] text-white text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Get Premium (₹{premiumPlan.price})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Small Free Hosting Included Badge */}
            <div className="mt-2.5 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl bg-emerald-50 text-emerald-800 text-[11px] font-semibold border border-emerald-200">
              <span className="text-emerald-600 font-bold">✓</span>
              <span>Free hosting included — no renewal fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Feature Comparison Table */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-[#14162B] font-['Fraunces']">
            Detailed Feature Comparison
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#474B64]">
            Compare all 3 RaoSitez packages side-by-side to choose the exact fit for your business.
          </p>
          <div className="mt-3 md:hidden inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-medium">
            <span>⇄ Swipe horizontally to compare plans</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-[#E8E7F0] overflow-hidden shadow-sm">
          <div className="overflow-x-auto scroll-smooth">
            <table className="w-full min-w-[620px] text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#14162B] text-white">
                  <th className="py-4 px-6 font-bold font-['Fraunces'] text-sm w-2/5">
                    Feature & Capability
                  </th>
                  <th className="py-4 px-4 font-bold text-center sm:w-1/5 font-mono-price text-xs sm:text-sm">
                    Starter (₹{starterPlan.price})
                  </th>
                  <th className="py-4 px-4 font-bold text-center sm:w-1/5 bg-[#4338CA] text-white font-mono-price text-xs sm:text-sm">
                    Professional (₹{proPlan.price})
                  </th>
                  <th className="py-4 px-4 font-bold text-center sm:w-1/5 font-mono-price text-xs sm:text-sm">
                    Premium (₹{premiumPlan.price})
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E7F0]">
                {featureComparison.map((cat, catIdx) => (
                  <React.Fragment key={catIdx}>
                    <tr className="bg-[#FAFAF8]">
                      <td
                        colSpan={4}
                        className="py-3 px-6 font-bold text-[11px] uppercase tracking-wider text-[#4338CA] font-['Inter']"
                      >
                        {cat.category}
                      </td>
                    </tr>
                    {cat.features.map((feat, fIdx) => (
                      <tr key={fIdx} className="hover:bg-[#FAFAF8]/50 transition-colors">
                        <td className="py-3.5 px-6 font-medium text-[#14162B]">
                          {feat.name}
                        </td>
                        <td className="py-3.5 px-4 text-center text-[#474B64]">
                          {typeof feat.starter === 'boolean' ? (
                            feat.starter ? (
                              <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                            ) : (
                              <X className="w-4 h-4 text-[#8E92A8] mx-auto opacity-40" />
                            )
                          ) : (
                            <span className="font-semibold">{feat.starter}</span>
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-center bg-indigo-50/40 text-[#14162B]">
                          {typeof feat.pro === 'boolean' ? (
                            feat.pro ? (
                              <Check className="w-4 h-4 text-[#4338CA] mx-auto stroke-[2.5]" />
                            ) : (
                              <X className="w-4 h-4 text-[#8E92A8] mx-auto opacity-40" />
                            )
                          ) : (
                            <span className="font-bold text-[#4338CA]">{feat.pro}</span>
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-center text-[#474B64]">
                          {typeof feat.premium === 'boolean' ? (
                            feat.premium ? (
                              <Check className="w-4 h-4 text-purple-600 mx-auto" />
                            ) : (
                              <X className="w-4 h-4 text-[#8E92A8] mx-auto opacity-40" />
                            )
                          ) : (
                            <span className="font-semibold text-purple-700">{feat.premium}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#14162B] font-['Fraunces']">
                100% Satisfaction or Full Refund Guarantee
              </h4>
              <p className="text-xs text-[#474B64] mt-0.5">
                If you aren't completely thrilled with your website within 7 days of launch, we refund every rupee. Zero hassle.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenOrderModal('professional')}
            className="px-6 py-3 bg-[#FF6B4A] hover:bg-[#F25A38] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer shrink-0"
          >
            Order Your Website Now
          </button>
        </div>
      </section>
    </div>
  );
};
