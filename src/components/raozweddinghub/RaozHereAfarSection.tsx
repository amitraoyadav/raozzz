import React, { useState } from 'react';
import { ArrowRight, Plane, Home, Check, MapPin } from 'lucide-react';
import { raozWeddingHubConfig } from '../../config/raozWeddingHubConfig';

interface RaozHereAfarSectionProps {
  onSelectLocal: () => void;
  onSelectDestination: () => void;
}

export const RaozHereAfarSection: React.FC<RaozHereAfarSectionProps> = ({
  onSelectLocal,
  onSelectDestination
}) => {
  const [selectedView, setSelectedView] = useState<'both' | 'afar' | 'here'>('both');

  return (
    <section className="bg-[#F5EFE5] px-5 sm:px-6 py-16 md:py-24 border-y border-[#E8DFD3]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-center">
          {/* Imagery Showcase */}
          <div className="relative">
            <div className="overflow-hidden rounded-[24px] shadow-[0_26px_60px_-32px_rgba(31,27,22,0.38)] aspect-[4/3.4] border border-[#E8DFD3] relative group">
              <img
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80"
                alt="A couple celebrating their wedding joyfully"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-3 border border-white/40 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#A85C3D]" />
                  <span className="font-serif italic font-medium text-[#1F1B16]">Raoz Here &amp; Raoz Afar</span>
                </div>
                <span className="font-mono text-[10px] uppercase text-[#8A7B6E] tracking-wider">Same Calm Foundation</span>
              </div>
            </div>

            {/* Background offset card */}
            <div className="absolute -bottom-3 -left-3 w-full h-full rounded-[24px] border border-[#4A5847]/20 -z-10 pointer-events-none" />
          </div>

          {/* Copy and Mode Switcher */}
          <div>
            <span className="inline-block font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-[#A85C3D] mb-3">
              Raoz Here &amp; Raoz Afar
            </span>

            <h2 className="font-serif font-medium text-[36px] sm:text-[48px] lg:text-[54px] leading-[1.06] tracking-tight text-[#1F1B16]">
              Not every wedding
              <br />
              <span className="italic text-[#A85C3D]">crosses an ocean.</span>
            </h2>

            <p className="text-[16px] sm:text-[17px] leading-[1.6] text-[#6B6155] max-w-[500px] mt-6">
              Raoz Here is the same calm planning home, tuned for couples marrying close to home. One day, one place, everyone already nearby. We strip out the destination logistics and keep everything that makes the day itself sing.
            </p>

            {/* Comparative Breakdown Table */}
            <div className="mt-8 mb-8 border-t border-[#E8DFD3]">
              {/* Afar Row */}
              <div className="grid grid-cols-[85px_1fr] sm:grid-cols-[100px_1fr] gap-4 items-center py-4 border-b border-[#E8DFD3]/80">
                <div className="flex items-center gap-1.5 font-sans text-xs font-bold tracking-wider uppercase text-[#4A5847]">
                  <Plane className="w-3.5 h-3.5" />
                  <span>Afar</span>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[11px] tracking-[0.05em] uppercase text-[#6B6155] block">
                    Multi-day chapters · far from home
                  </span>
                  <span className="text-xs text-[#8A7B6E]">Flight trackers, room block assignments, 8-language hub, local currency buffers</span>
                </div>
              </div>

              {/* Here Row */}
              <div className="grid grid-cols-[85px_1fr] sm:grid-cols-[100px_1fr] gap-4 items-center py-4 border-b border-[#E8DFD3]/80">
                <div className="flex items-center gap-1.5 font-sans text-xs font-bold tracking-wider uppercase text-[#A85C3D]">
                  <Home className="w-3.5 h-3.5" />
                  <span>Here</span>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[11px] tracking-[0.05em] uppercase text-[#6B6155] block">
                    One day · close to home
                  </span>
                  <span className="text-xs text-[#8A7B6E]">Streamlined day-of run sheets, direct RSVPs, local vendor coordination, no travel noise</span>
                </div>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onSelectLocal}
                className="group inline-flex items-center gap-2 text-sm font-medium text-[#1F1B16] border-b border-[#A85C3D] pb-0.5 hover:text-[#A85C3D] transition-colors"
              >
                <span>Explore Raoz Here (Local Weddings)</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onSelectDestination}
                className="group inline-flex items-center gap-2 text-sm font-medium text-[#6B6155] border-b border-transparent hover:border-[#6B6155] pb-0.5 hover:text-[#1F1B16] transition-colors"
              >
                <span>Compare Raoz Afar (Destination)</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RaozHereAfarSection;
