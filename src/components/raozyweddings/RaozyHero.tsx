import React, { useState } from 'react';
import { RAOZY_BUSINESS_CONFIG, RAOZY_DESTINATIONS } from '../../data/raozyWeddingData';

interface RaozyHeroProps {
  onOpenConsultationModal: () => void;
  onWatchFilms: () => void;
  onExploreDecorLibrary: () => void;
  onOpenCostEstimator: (destinationId?: string) => void;
}

export const RaozyHero: React.FC<RaozyHeroProps> = ({
  onOpenConsultationModal,
  onWatchFilms,
  onExploreDecorLibrary,
  onOpenCostEstimator
}) => {
  const [selectedDest, setSelectedDest] = useState(RAOZY_DESTINATIONS[0].id);
  const [guestTier, setGuestTier] = useState('250');
  const [season, setSeason] = useState('winter');

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenCostEstimator(selectedDest);
  };

  return (
    <section className="relative min-h-[640px] lg:min-h-[740px] bg-[#140508] text-white overflow-hidden flex items-center">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Destination Wedding Decor"
          className="w-full h-full object-cover object-center transform scale-105 opacity-35 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140508] via-[#140508]/80 to-[#140508]/40" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#140508]/60 to-[#140508]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Value Points */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/30 text-xs text-amber-200">
              <span className="flex text-amber-400">★★★★★</span>
              <span className="font-semibold text-white">4.96 / 5</span>
              <span className="text-white/40">|</span>
              <span>Rated across 650+ Soulful Destination Weddings</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Crafting Soulful <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-rose-200">
                Destination Weddings
              </span>{' '}
              in India &amp; Beyond.
            </h1>

            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Boutique luxury destination wedding planner &amp; bespoke scenography studio. 
              Photorealistic 3D venue renders before build, curated heritage palace &amp; coastal buyouts, 
              and our dedicated 14-member on-ground operations squad.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                onClick={onOpenConsultationModal}
                className="w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#800020] via-[#66001A] to-[#4D0014] border border-[#D4AF37]/50 rounded-xl shadow-lg shadow-[#800020]/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span>Plan Your Wedding</span>
                <svg className="w-4 h-4 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <button
                onClick={onWatchFilms}
                className="w-full sm:w-auto px-6 py-3.5 text-sm sm:text-base font-medium text-white/90 hover:text-white bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4l12 6-12 6V4z" />
                </svg>
                <span>Watch Wedding Films</span>
              </button>

              <button
                onClick={onExploreDecorLibrary}
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-3.5 text-sm text-stone-300 hover:text-white transition-colors"
              >
                <span>Explore Decor Library →</span>
              </button>
            </div>

            {/* Trust Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-left">
              <div>
                <div className="font-serif text-xl sm:text-2xl font-bold text-white">650+</div>
                <div className="text-xs text-white/60">Weddings Curated</div>
              </div>
              <div>
                <div className="font-serif text-xl sm:text-2xl font-bold text-amber-300">100%</div>
                <div className="text-xs text-white/60">Itemized Open-Book</div>
              </div>
              <div>
                <div className="font-serif text-xl sm:text-2xl font-bold text-rose-300">250+</div>
                <div className="text-xs text-white/60">Palace &amp; Resort Partners</div>
              </div>
              <div>
                <div className="font-serif text-xl sm:text-2xl font-bold text-emerald-400">12 Regions</div>
                <div className="text-xs text-white/60">India &amp; International</div>
              </div>
            </div>

          </div>

          {/* Right Column: Destination Estimator & Consultation Box */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 backdrop-blur-xl text-stone-900 rounded-2xl p-6 sm:p-7 shadow-2xl border border-white/40 relative">
              
              <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#800020] text-amber-200 border border-[#D4AF37]/50 shadow-md">
                Bespoke Destination Recce
              </div>

              <div className="mb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#800020]">
                  Plan With Transparent Costing
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                  Destination Wedding Estimator
                </h3>
                <p className="text-xs text-stone-600 mt-0.5">
                  Select your dream destination and guest count to calculate detailed budget insights.
                </p>
              </div>

              <form onSubmit={handleHeroSubmit} className="space-y-4">
                
                {/* Destination Dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Target Destination
                  </label>
                  <select
                    value={selectedDest}
                    onChange={(e) => setSelectedDest(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-stone-50 border border-stone-300 text-stone-800 text-sm font-medium focus:ring-2 focus:ring-[#800020] focus:border-transparent transition-all"
                  >
                    {RAOZY_DESTINATIONS.map(d => (
                      <option key={d.id} value={d.id}>
                        {d.name}, {d.state} ({d.vibe})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Expected Guests */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Expected Guest Count
                  </label>
                  <select
                    value={guestTier}
                    onChange={(e) => setGuestTier(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-stone-50 border border-stone-300 text-stone-800 text-sm font-medium focus:ring-2 focus:ring-[#800020] focus:border-transparent transition-all"
                  >
                    <option value="120">50 – 150 Guests (Intimate Wilderness / Haveli)</option>
                    <option value="250">150 – 350 Guests (Palace / Coastal Resort)</option>
                    <option value="450">350 – 600 Guests (Monumental Palace Gala)</option>
                    <option value="800">600 – 1,200+ Guests (Royal Estate Takeover)</option>
                  </select>
                </div>

                {/* Season / Timing */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Wedding Season / Timeframe
                  </label>
                  <select
                    value={season}
                    onChange={(e) => setSeason(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-stone-50 border border-stone-300 text-stone-800 text-sm font-medium focus:ring-2 focus:ring-[#800020] focus:border-transparent transition-all"
                  >
                    <option value="winter">Winter (October – March: Peak Palace &amp; Beach Season)</option>
                    <option value="spring">Spring (April – May: Hill Stations &amp; Corbett)</option>
                    <option value="monsoon">Monsoon / Summer (June – September: Intimate &amp; Value Dates)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#800020] via-[#66001A] to-[#4D0014] hover:from-[#66001A] hover:to-[#3B000F] shadow-md shadow-[#800020]/30 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span>Open Interactive Cost Estimator</span>
                </button>

                <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Zero commitment required
                  </span>
                  <span>100% Free 1-Day Recce</span>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
