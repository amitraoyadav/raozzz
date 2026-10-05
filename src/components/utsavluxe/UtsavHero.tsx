import React, { useState } from 'react';
import { UTSAV_BUSINESS_CONFIG } from '../../data/utsavLuxeData';

interface UtsavHeroProps {
  onOpenCalculator: () => void;
  onOpenConsultationModal: () => void;
  onExploreLookbook: () => void;
  onSelectCity: (cityId: string) => void;
  selectedCity: string;
}

export const UtsavHero: React.FC<UtsavHeroProps> = ({
  onOpenCalculator,
  onOpenConsultationModal,
  onExploreLookbook,
  onSelectCity,
  selectedCity
}) => {
  const [heroCity, setHeroCity] = useState(selectedCity);
  const [heroEventType, setHeroEventType] = useState('full-wedding');
  const [heroGuestCount, setHeroGuestCount] = useState('300');
  const [heroVibe, setHeroVibe] = useState('pastel');

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSelectCity(heroCity);
    onOpenCalculator();
  };

  return (
    <section className="relative min-h-[640px] lg:min-h-[720px] bg-[#140809] text-white overflow-hidden flex items-center">
      {/* Background Cinematic Image with Luxury Gradient Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Indian Wedding Mandap Decor"
          className="w-full h-full object-cover object-center transform scale-105 animate-fade-in opacity-35 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140809] via-[#140809]/80 to-[#140809]/40" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#140809]/60 to-[#140809]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-white/90">
              <span className="flex text-amber-400">★★★★★</span>
              <span className="font-semibold text-white">4.94 / 5</span>
              <span className="text-white/40">|</span>
              <span>Trusted by 3,200+ couples across 8 cities</span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Your Dream Wedding, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8D7B] via-[#F4B2A6] to-[#FFE6B3]">
                Designed in 3D
              </span>{' '}
              & Flawlessly Executed.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              India’s premier full-stack wedding planning & experiential decor platform. 
              Photorealistic 3D venue renders before you pay, 100% itemized transparent pricing, 
              and our dedicated 14-member on-ground operations squad.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                onClick={onOpenConsultationModal}
                className="w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#E05A47] via-[#D84C38] to-[#BA3725] rounded-xl shadow-lg shadow-[#E05A47]/30 hover:shadow-xl hover:shadow-[#E05A47]/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span>Book Free 3D Recce & Consultation</span>
                <svg className="w-4 h-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <button
                onClick={onExploreLookbook}
                className="w-full sm:w-auto px-6 py-3.5 text-sm sm:text-base font-medium text-white/90 hover:text-white bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 text-[#FF8D7B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Browse 3D Lookbook</span>
              </button>
            </div>

            {/* Quick Micro Value Points */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-left">
              <div>
                <div className="font-serif text-xl sm:text-2xl font-bold text-white">3,200+</div>
                <div className="text-xs text-white/60">Weddings Curated</div>
              </div>
              <div>
                <div className="font-serif text-xl sm:text-2xl font-bold text-amber-300">100%</div>
                <div className="text-xs text-white/60">Transparent Pricing</div>
              </div>
              <div>
                <div className="font-serif text-xl sm:text-2xl font-bold text-[#FF8D7B]">300+</div>
                <div className="text-xs text-white/60">Vetted Luxury Venues</div>
              </div>
              <div>
                <div className="font-serif text-xl sm:text-2xl font-bold text-emerald-400">8 Cities</div>
                <div className="text-xs text-white/60">Permanent Studios</div>
              </div>
            </div>

          </div>

          {/* Right Column: Instant Wedding Estimate & 3D Preview Widget */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 backdrop-blur-xl text-stone-900 rounded-2xl p-6 sm:p-7 shadow-2xl border border-white/40 relative">
              
              {/* Widget Badge */}
              <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#E05A47] text-white shadow-md">
                Fast Quote in 60 Sec
              </div>

              <div className="mb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E05A47]">
                  Plan With Transparent Pricing
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                  Instant Wedding Cost Estimator
                </h3>
                <p className="text-xs text-stone-600 mt-0.5">
                  Select your celebration details to get an accurate itemized quote and 3D preview.
                </p>
              </div>

              <form onSubmit={handleHeroSubmit} className="space-y-4">
                
                {/* City Selection */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Wedding City / Studio
                  </label>
                  <select
                    value={heroCity}
                    onChange={(e) => setHeroCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-stone-50 border border-stone-300 text-stone-800 text-sm font-medium focus:ring-2 focus:ring-[#E05A47] focus:border-transparent transition-all"
                  >
                    {UTSAV_BUSINESS_CONFIG.cities.map(c => (
                      <option key={c.id} value={c.id}>
                        {c.name} — {c.tag}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Event Type */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Event Scale & Scope
                  </label>
                  <select
                    value={heroEventType}
                    onChange={(e) => setHeroEventType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-stone-50 border border-stone-300 text-stone-800 text-sm font-medium focus:ring-2 focus:ring-[#E05A47] focus:border-transparent transition-all"
                  >
                    <option value="full-wedding">Complete 3-Day Wedding (Haldi, Sangeet, Pheras & Reception)</option>
                    <option value="wedding-mandap">Sacred Mandap Ceremony & Pheras Only</option>
                    <option value="sangeet-cocktail">Sangeet, Cocktail & After-Party Only</option>
                    <option value="haldi-mehendi">Haldi, Mehendi Carnival & Poolside Party</option>
                    <option value="turnkey-full">Turnkey End-to-End (Decor + Planning + Stays + Banqueting)</option>
                  </select>
                </div>

                {/* Guests & Vibe in 2 Cols */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Expected Guests
                    </label>
                    <select
                      value={heroGuestCount}
                      onChange={(e) => setHeroGuestCount(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg bg-stone-50 border border-stone-300 text-stone-800 text-sm font-medium focus:ring-2 focus:ring-[#E05A47] focus:border-transparent"
                    >
                      <option value="150">50 – 150 Guests (Intimate)</option>
                      <option value="300">150 – 350 Guests (Medium)</option>
                      <option value="550">350 – 700 Guests (Grand)</option>
                      <option value="1000">700 – 1,500+ (Monumental)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Preferred Vibe
                    </label>
                    <select
                      value={heroVibe}
                      onChange={(e) => setHeroVibe(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg bg-stone-50 border border-stone-300 text-stone-800 text-sm font-medium focus:ring-2 focus:ring-[#E05A47] focus:border-transparent"
                    >
                      <option value="pastel">Pastel Bloom Garden</option>
                      <option value="royal">Royal Rajputana Heritage</option>
                      <option value="boho">Modern Bohemian Chic</option>
                      <option value="celestial">Celestial Starlight Glamour</option>
                      <option value="coastal">Tropical Beach Coastal</option>
                    </select>
                  </div>
                </div>

                {/* Submit / Open Full Calculator */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#E05A47] to-[#C94330] hover:from-[#C94330] hover:to-[#B33524] shadow-md shadow-[#E05A47]/30 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span>Calculate Detailed Budget & View 3D Moodboard</span>
                </button>

                <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Zero commitment required
                  </span>
                  <span>Instant PDF download available</span>
                </div>
              </form>

            </div>
          </div>

        </div>
      </div>

      {/* Subtle Bottom Wave Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-stone-100 to-transparent pointer-events-none" />
    </section>
  );
};
