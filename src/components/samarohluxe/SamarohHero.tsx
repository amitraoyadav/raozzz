import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Users, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Star,
  Play
} from 'lucide-react';
import { SAMAROH_CONFIG } from '../../data/samarohLuxeData';

interface SamarohHeroProps {
  selectedCity: string;
  onSelectCity: (cityId: string) => void;
  onOpenConsultation: (brief?: string) => void;
  onNavigateToTab: (tab: any) => void;
}

export const SamarohHero: React.FC<SamarohHeroProps> = ({
  selectedCity,
  onSelectCity,
  onOpenConsultation,
  onNavigateToTab
}) => {
  const [selectedEventType, setSelectedEventType] = useState('Wedding & Reception');
  const [eventDate, setEventDate] = useState('');
  const [guestScale, setGuestScale] = useState('200-500 Guests');

  const activeCityObj = SAMAROH_CONFIG.CITIES.find(c => c.id === selectedCity) || SAMAROH_CONFIG.CITIES[0];

  const handleQuickQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const brief = `City: ${activeCityObj.name} | Event: ${selectedEventType} | Guests: ${guestScale} | Date: ${eventDate || 'Upcoming'}`;
    onOpenConsultation(brief);
  };

  return (
    <section className="relative bg-[#1C1917] text-white pt-10 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E06D53]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-800/80 border border-stone-700 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E06D53] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E06D53]"></span>
              </span>
              <span className="text-xs text-stone-300 font-medium">
                Styling weddings across <strong>{activeCityObj.name}</strong> &amp; 5 other top cities
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-['Fraunces',serif] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Modern Wedding Decor &amp; Experiences,{' '}
              <span className="italic font-light text-[#E06D53]">Made Effortless.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-stone-300 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-xl">
              India’s first tech-enabled wedding styling company. Explore 3D spatial renders of your venue, skip the 30% middleman vendor markups with our in-house fabrication warehouses, and enjoy complete itemized pricing transparency.
            </p>

            {/* Key Advantages Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E06D53] shrink-0" />
                <span>3D Renders Before Event</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E06D53] shrink-0" />
                <span>In-House Production Units</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E06D53] shrink-0" />
                <span>Single Point Event Director</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenConsultation()}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#E06D53] to-[#C8523B] hover:from-[#C8523B] hover:to-[#E06D53] text-white font-bold text-xs uppercase tracking-wider shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Free 3D Design Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigateToTab('calculator')}
                className="px-6 py-3.5 rounded-full bg-stone-800 hover:bg-stone-750 text-stone-200 border border-stone-700 text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Try Decor Budget Calculator</span>
              </button>
            </div>

            {/* Social Proof Row */}
            <div className="pt-4 border-t border-stone-800/80 flex items-center gap-6 text-xs text-stone-400">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-white ml-1">{SAMAROH_CONFIG.RATING}</span>
                <span>({SAMAROH_CONFIG.VERIFIED_REVIEWS} Reviews)</span>
              </div>
              <span>•</span>
              <div>
                <strong className="text-white font-semibold">{SAMAROH_CONFIG.EVENTS_DELIVERED}</strong> Weddings Styled
              </div>
            </div>
          </div>

          {/* Right Column: Quick Quote / Estimation Lead Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#262220] border border-stone-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              <div className="space-y-1 pb-5 border-b border-stone-800">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E06D53] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#E06D53]" />
                  Instant Decor Estimate
                </span>
                <h3 className="font-['Fraunces',serif] text-xl font-bold text-white">
                  Get Your Venue Styled in {activeCityObj.name}
                </h3>
                <p className="text-xs text-stone-400 font-light">
                  Tell us about your celebration for curated 3D concepts and transparent itemized pricing.
                </p>
              </div>

              <form onSubmit={handleQuickQuote} className="mt-5 space-y-4">
                {/* City Picker */}
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    Celebration City
                  </label>
                  <select
                    value={selectedCity}
                    onChange={e => onSelectCity(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#E06D53] cursor-pointer"
                  >
                    {SAMAROH_CONFIG.CITIES.map(city => (
                      <option key={city.id} value={city.id}>
                        {city.name} {city.isPrimary ? '(Flagship)' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Event Type */}
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    Primary Ceremony / Function
                  </label>
                  <select
                    value={selectedEventType}
                    onChange={e => setSelectedEventType(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#E06D53] cursor-pointer"
                  >
                    <option value="Wedding & Reception">Wedding &amp; Reception (Full Suite)</option>
                    <option value="Muhurtham & Mandap">Muhurtham &amp; Sacred Mandap Only</option>
                    <option value="Grand Reception">Grand Evening Reception Stage</option>
                    <option value="Sangeet & Cocktail">Sangeet &amp; Cocktail Party Night</option>
                    <option value="Haldi & Mehendi">Haldi &amp; Mehendi Day Ceremonies</option>
                    <option value="Complete 3-Day Wedding">Complete 3-Day Destination Wedding</option>
                  </select>
                </div>

                {/* Two-Column: Date & Scale */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1.5">
                      Approximate Date
                    </label>
                    <input
                      type="date"
                      value={eventDate}
                      onChange={e => setEventDate(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#E06D53]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1.5">
                      Expected Guests
                    </label>
                    <select
                      value={guestScale}
                      onChange={e => setGuestScale(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#E06D53] cursor-pointer"
                    >
                      <option value="50-150 Guests">50 - 150 (Intimate)</option>
                      <option value="150-350 Guests">150 - 350 (Classic)</option>
                      <option value="350-700 Guests">350 - 700 (Grand)</option>
                      <option value="700-1500+ Guests">700 - 1,500+ (Royal)</option>
                    </select>
                  </div>
                </div>

                {/* CTA Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E06D53] to-[#C8523B] hover:from-[#C8523B] hover:to-[#E06D53] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Get Free 3D Concept &amp; Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-center">
                  <span className="text-[10px] text-stone-400">
                    🔒 No obligation. Our design manager shares initial moodboard in 24 hours.
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
