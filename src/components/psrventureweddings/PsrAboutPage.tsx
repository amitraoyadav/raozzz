import React from 'react';
import { 
  Crown, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  Users, 
  HeartHandshake, 
  Compass, 
  CheckCircle2, 
  ArrowRight,
  MapPin
} from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface PsrAboutPageProps {
  onOpenConsultation: () => void;
}

export const PsrAboutPage: React.FC<PsrAboutPageProps> = ({
  onOpenConsultation
}) => {
  return (
    <div className="bg-[#120306] text-white">
      {/* Hero Header */}
      <section className="relative py-20 lg:py-28 bg-[#180408] border-b border-[#C5A059]/20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80"
            alt="Royal Palace Courtyard"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#180408] via-black/80 to-[#180408]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#DFBE78]/30">
            <Crown className="w-3 h-3 text-[#DFBE78]" />
            <span className="text-[11px] font-bold text-[#DFBE78] uppercase tracking-widest">
              About {siteConfig.SITE_NAME}
            </span>
          </div>
          <h1 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Curators of Unrivaled Destination Splendour
          </h1>
          <p className="text-stone-300 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Founded with a singular conviction: destination weddings should celebrate family warmth and royal elegance, free from supplier anxiety or hidden kickbacks.
          </p>
        </div>
      </section>

      {/* Main Philosophy Section */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-[#DFBE78] block">
              Our Founding Story & Ethos
            </span>
            <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl font-bold text-white leading-tight">
              12 Years of Crafting India’s Most Coveted Royal Nuptials
            </h2>
            <div className="space-y-4 text-sm text-stone-300 font-light leading-relaxed">
              <p>
                In 2012, our founders noticed a persistent flaw in Indian destination wedding planning: couples and their parents were exhausted by opaque markups, chaotic hotel room handovers, and last-minute production scrambles.
              </p>
              <p>
                <strong>{siteConfig.SITE_NAME}</strong> was established as a premier wedding management company and venue specialist governed by absolute integrity. We pioneered the 100% open-book management model in luxury Indian weddings, passing negotiated wholesale room rates and direct vendor contracts to our families.
              </p>
              <p>
                Today, with on-ground liaison offices across Delhi NCR, Jaipur, Udaipur, and Goa, our multidisciplinary team of architects, hospitality directors, and master producers has orchestrated over 380+ bespoke celebrations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#1C060A] border border-[#C5A059]/25 space-y-1">
                <span className="font-['Playfair_Display',serif] text-2xl font-bold text-[#DFBE78]">380+</span>
                <span className="text-xs text-stone-300 block">Weddings Delivered</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#1C060A] border border-[#C5A059]/25 space-y-1">
                <span className="font-['Playfair_Display',serif] text-2xl font-bold text-[#DFBE78]">140+</span>
                <span className="text-xs text-stone-300 block">Palace & Resort Partners</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#1C060A] border border-[#C5A059]/25 space-y-1">
                <span className="font-['Playfair_Display',serif] text-2xl font-bold text-[#DFBE78]">18%</span>
                <span className="text-xs text-stone-300 block">Average Client Savings</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#1C060A] border border-[#C5A059]/25 space-y-1">
                <span className="font-['Playfair_Display',serif] text-2xl font-bold text-[#DFBE78]">99.4%</span>
                <span className="text-xs text-stone-300 block">Family Satisfaction</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-[#C5A059]/40 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80"
                alt={`${siteConfig.SITE_NAME} Luxury Planning Team`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#26080E] border border-[#DFBE78]/40 p-5 rounded-2xl shadow-xl max-w-xs hidden sm:block">
              <span className="text-xs font-bold text-[#DFBE78] block">Bespoke Royal Assurance</span>
              <p className="text-[11px] text-stone-300 mt-1 font-light">
                Every wedding is assigned a Senior Wedding Director with a maximum of 4 weddings per season to ensure undivided focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars */}
      <section className="py-16 bg-[#180408] border-t border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#DFBE78]">The PSR Standard</span>
            <h3 className="font-['Playfair_Display',serif] text-3xl font-bold text-white">Our Four Operating Pillars</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#20070B] p-6 rounded-2xl border border-[#C5A059]/25 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#2E0B11] text-[#DFBE78] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-['Playfair_Display',serif] text-lg font-bold text-white">Financial Transparency</h4>
              <p className="text-xs text-stone-300 font-light leading-relaxed">
                Zero secret kickbacks. Open-book vendor billing and real-time cloud budget variance tracking.
              </p>
            </div>

            <div className="bg-[#20070B] p-6 rounded-2xl border border-[#C5A059]/25 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#2E0B11] text-[#DFBE78] flex items-center justify-center font-bold">
                <Crown className="w-5 h-5" />
              </div>
              <h4 className="font-['Playfair_Display',serif] text-lg font-bold text-white">Venue Diplomacy</h4>
              <p className="text-xs text-stone-300 font-light leading-relaxed">
                Direct GM relationships across Taj, Oberoi, Leela, and Fairmont ensuring privileged dates and waivers.
              </p>
            </div>

            <div className="bg-[#20070B] p-6 rounded-2xl border border-[#C5A059]/25 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#2E0B11] text-[#DFBE78] flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-['Playfair_Display',serif] text-lg font-bold text-white">Architectural Scenography</h4>
              <p className="text-xs text-stone-300 font-light leading-relaxed">
                In-house 3D design studio creating original mandap structures rather than recycling catalogue decor.
              </p>
            </div>

            <div className="bg-[#20070B] p-6 rounded-2xl border border-[#C5A059]/25 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#2E0B11] text-[#DFBE78] flex items-center justify-center font-bold">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="font-['Playfair_Display',serif] text-lg font-bold text-white">Guest Concierge</h4>
              <p className="text-xs text-stone-300 font-light leading-relaxed">
                Airport reception desks, express room keys, and 24/7 guest hospitality desks so families celebrate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4 space-y-6">
        <h3 className="font-['Playfair_Display',serif] text-3xl font-bold text-white">
          Begin Your Royal Planning Journey Today
        </h3>
        <p className="text-stone-300 text-sm font-light">
          Let’s discuss your target dates, dream destination, and budget roadmap over a private consultation.
        </p>
        <button
          onClick={onOpenConsultation}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-[#C5A059] to-[#DFBE78] text-[#1A0509] font-bold text-xs uppercase tracking-widest shadow-xl cursor-pointer hover:brightness-110 transition-all inline-flex items-center gap-2"
        >
          <span>Schedule Private Consultation</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};
