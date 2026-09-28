import React from 'react';
import { Smartphone, QrCode, Utensils, MessageSquare, MapPin, Award, Sparkles } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: 'Professional Online Presence',
      description: 'Build immediate customer trust. When people search your business on Google or Instagram, they find a polished, authoritative website instead of an empty profile.',
      icon: Award,
      badge: 'Build Trust'
    },
    {
      title: 'Instant QR Code Sharing',
      description: 'Place your custom QR code on dining tables, shop billing counters, salon mirrors, or doctor prescription pads. Customers scan and browse in 1 second.',
      icon: QrCode,
      badge: 'Zero Friction'
    },
    {
      title: 'Digital Menu & Transparent Rates',
      description: 'Never worry about reprinting paper menus or pamphlets. Update item prices, daily specials, doctor OPD fees, or seasonal offers with ease.',
      icon: Utensils,
      badge: 'Save Printing Costs'
    },
    {
      title: 'Direct WhatsApp Leads & Orders',
      description: 'Every product and service features a direct WhatsApp inquiry button with pre-filled text so customers contact you instantly on your personal number.',
      icon: MessageSquare,
      badge: 'High Conversion'
    },
    {
      title: 'Accurate Google Maps Navigation',
      description: 'Integrated interactive maps and one-tap "Get Directions" buttons guide walk-in customers straight to your front door without lost phone calls.',
      icon: MapPin,
      badge: 'Drive Footfall'
    },
    {
      title: 'Lightning Fast on 4G / 5G Mobiles',
      description: '90%+ of Indian customers browse on mobile phones. Our websites load in less than 1.5 seconds even on modest mobile networks.',
      icon: Smartphone,
      badge: 'Mobile First'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-[#FAFAF8] border-b border-[#E8E7F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8E7F0]/80 border border-[#D5D4E3] text-[#14162B] text-xs font-semibold mb-3 font-['Inter']">
            <Sparkles className="w-3.5 h-3.5 text-[#4338CA]" />
            <span>Why Online Presence Matters</span>
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14162B] tracking-tight font-['Fraunces']">
            Built to capture customers who search before visiting.
          </h3>
          <p className="mt-3 text-[#474B64] text-sm sm:text-base leading-relaxed font-['Inter']">
            Traditional agencies quote ₹15,000–₹30,000 plus annual hosting renewals. RaoSitez gives you world-class business technology for a flat ₹999.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map(item => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white p-7 rounded-2xl border border-[#E8E7F0] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#FAFAF8] border border-[#E8E7F0] flex items-center justify-center text-[#4338CA]">
                      <Icon className="w-5 h-5" />
                    </div>
                    {/* Clean unboxed metadata tag */}
                    <span className="text-xs font-semibold text-[#636882] tracking-wide font-['Inter']">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-[#14162B] mb-2 font-['Fraunces']">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#51556E] leading-relaxed font-['Inter']">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
