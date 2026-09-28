import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, CheckCircle2, XCircle, Sparkles, Smartphone, Utensils } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(clamped);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FAFAF8] border-b border-[#E8E7F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4338CA]/10 text-[#4338CA] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            The RaoSitez Difference
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#14162B] font-['Fraunces'] tracking-tight">
            See How Your Business Transforms Online
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#474B64] max-w-xl mx-auto">
            Drag the slider left and right to compare an offline business with a bespoke mobile RaoSitez storefront.
          </p>
        </div>

        {/* Interactive Comparison Slider */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full min-h-[380px] sm:min-h-[440px] md:aspect-16/9 rounded-3xl overflow-hidden shadow-xl border border-[#E8E7F0] select-none cursor-ew-resize bg-slate-900 touch-none"
          >
            {/* AFTER: Modern RaoSitez Digital Storefront (Right Layer / Background) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#14162B] via-[#232742] to-[#1e1b4b] text-white flex flex-col justify-between p-4 sm:p-8 md:p-10">
              <div className="flex justify-end">
                <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] sm:text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  AFTER: With RaoSitez (₹999)
                </span>
              </div>

              {/* Mockup Preview of Clean Site */}
              <div className="max-w-md ml-auto text-right space-y-2 sm:space-y-3">
                <span className="text-[10px] sm:text-xs text-indigo-300 font-mono">raositez.in/the-roastery-cafe</span>
                <h3 className="text-lg sm:text-2xl md:text-3xl font-black font-['Fraunces'] leading-tight">
                  The Roastery Artisanal Café & Bakes
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-300 line-clamp-2">
                  Instant mobile menu in ₹ with 1-click WhatsApp order, live Google location & customer reviews.
                </p>
                <div className="flex justify-end gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                  <span className="bg-white/10 px-2 sm:px-3 py-1 rounded-lg">80+ Monthly Orders</span>
                  <span className="bg-emerald-500/20 text-emerald-300 px-2 sm:px-3 py-1 rounded-lg font-bold">Zero Commission</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-1 text-[10px] sm:text-[11px] text-slate-400 pt-3 sm:pt-4 border-t border-slate-700/50">
                <span>100% Mobile Optimized</span>
                <span className="hidden sm:inline">Direct WhatsApp Click-to-Chat</span>
                <span>Google Rank #1</span>
              </div>
            </div>

            {/* BEFORE: Outdated Offline Store (Left Layer / Clipped) */}
            <div
              className="absolute inset-0 bg-[#3b2d28] text-white flex flex-col justify-between p-4 sm:p-8 md:p-10 overflow-hidden"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <div className="flex justify-start">
                <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[10px] sm:text-xs font-bold">
                  <XCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  BEFORE: Offline Only
                </span>
              </div>

              <div className="max-w-md text-left space-y-2 sm:space-y-3">
                <span className="text-[10px] sm:text-xs text-rose-300 font-mono">No website · No digital link</span>
                <h3 className="text-lg sm:text-2xl md:text-3xl font-black font-['Fraunces'] opacity-90 leading-tight">
                  Paper Menu & Missed Calls
                </h3>
                <p className="text-[11px] sm:text-xs text-stone-300 line-clamp-2">
                  Customers asking for photos on WhatsApp. Competitors on Zomato taking all nearby orders.
                </p>
                <div className="flex gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                  <span className="bg-white/10 px-2 sm:px-3 py-1 rounded-lg">Lost Evening Walk-Ins</span>
                  <span className="bg-rose-500/20 text-rose-300 px-2 sm:px-3 py-1 rounded-lg font-bold">30% Zomato Cuts</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-1 text-[10px] sm:text-[11px] text-stone-400 pt-3 sm:pt-4 border-t border-stone-700/50">
                <span>Unresponsive paper flyers</span>
                <span className="hidden sm:inline">Unverified phone listings</span>
                <span>Zero search visibility</span>
              </div>
            </div>

            {/* Vertical Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-2xl"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-[#14162B] shadow-2xl flex items-center justify-center border-2 border-[#4338CA]">
                <ArrowLeftRight className="w-4 h-4 text-[#4338CA]" />
              </div>
            </div>
          </div>

          {/* Quick Explanation */}
          <div className="flex items-center justify-between text-xs text-[#8E92A8] mt-3 px-2">
            <span>← Slide left to reveal RaoSitez</span>
            <span className="font-semibold text-[#14162B]">Drag or tap to inspect</span>
            <span>Slide right to see offline struggles →</span>
          </div>
        </div>
      </div>
    </section>
  );
};
