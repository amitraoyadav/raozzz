import React from 'react';
import { Clock, MessageSquare, HeartHandshake, ShieldCheck } from 'lucide-react';
import { raozWeddingHubConfig } from '../../config/raozWeddingHubConfig';

export const RaozThesis: React.FC = () => {
  return (
    <section className="px-5 sm:px-6 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto py-14 md:py-20 border-y border-[#E8DFD3]">
        <span className="inline-block font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-[#A85C3D] mb-3">
          The thesis
        </span>

        <h2 className="font-serif font-medium text-[27px] sm:text-[34px] md:text-[40px] leading-[1.2] tracking-tight text-[#1F1B16] text-balance max-w-5xl">
          Destination weddings aren't defined by a single afternoon — they unfold over days, creating a full experience for couples and guests alike. Every existing planning tool was built for just the afternoon. We built Raoz Wedding Hub for this and for everything around it.
        </h2>

        {/* 4 Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-[#F0EAE1]">
          <div className="space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#FAF2ED] text-[#A85C3D] flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-medium text-lg text-[#1F1B16]">
              72–96 Hours of Presence
            </h3>
            <p className="text-xs sm:text-[13px] leading-relaxed text-[#6B6155]">
              Welcome dinners, coastal boat excursions, recovery brunches, and late-night laughter. Planned deliberately so you're not rushing through greeting lines.
            </p>
          </div>

          <div className="space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#F0F4EF] text-[#4A5847] flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-medium text-lg text-[#1F1B16]">
              End the WhatsApp Chaos
            </h3>
            <p className="text-xs sm:text-[13px] leading-relaxed text-[#6B6155]">
              No more repetitive texts asking "What's the dress code?", "Which airport?", or "When does the shuttle leave?". One single live link answers everything.
            </p>
          </div>

          <div className="space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#FAF2ED] text-[#A85C3D] flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-medium text-lg text-[#1F1B16]">
              Zero-Friction for Guests
            </h3>
            <p className="text-xs sm:text-[13px] leading-relaxed text-[#6B6155]">
              Guests don't want another app login. Their hub loads instantly in their native tongue on any browser, with private RSVPs and dietary alerts.
            </p>
          </div>

          <div className="space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#F4EFEA] text-[#1F1B16] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-medium text-lg text-[#1F1B16]">
              Transparent One-Time Fee
            </h3>
            <p className="text-xs sm:text-[13px] leading-relaxed text-[#6B6155]">
              Never worry about ongoing monthly subscriptions if your wedding is in 18 months. Lifetime access with no ads, no pushy vendor marketplaces, no traps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RaozThesis;
