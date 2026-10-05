import React from 'react';
import { Star, Quote, MapPin, Compass, CheckCircle2, Shield, Heart } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../../data/site78Data';
import { site78Config } from '../../config/site78Config';

export const Site78SeoContent: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] text-[#222222] font-['Jost',sans-serif] border-t border-[#E5DFD7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Sub-Section 1: What Makes Aurelia The Best Beach Resort */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-[#747157] text-xs font-bold uppercase tracking-[0.25em] block">
              Exceptional Sanctuary
            </span>
            <h2 className="font-['Cormorant',serif] font-bold text-3xl sm:text-5xl text-[#1C1C1C] leading-[1.15]">
              What Makes Aurelia The Best Beach Resort in North Goa?
            </h2>
            <div className="w-16 h-[2px] bg-[#B99D75]" />
            <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              When discerning travelers seek a beach resort in Goa, they are often confronted with a stark choice between overcrowded commercial mega-resorts or basic beach huts lacking comfort.
            </p>
            <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              Aurelia Goa was created to bridge this divide. We combine the bespoke intimacy of private pool villas with five-star hospitality amenities, personalized butler attention, gourmet dining, and a direct 60-second stroll to the peaceful northern edge of Morjim Beach.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#F3EEE7]/60 border border-[#E5DFD7]">
                <div className="font-['Cormorant',serif] font-bold text-lg text-[#1C1C1C] mb-1">
                  Absolute Seclusion
                </div>
                <p className="text-xs text-stone-600 font-light">
                  Enclosed courtyards guarantee zero sightlines into your private pool.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#F3EEE7]/60 border border-[#E5DFD7]">
                <div className="font-['Cormorant',serif] font-bold text-lg text-[#1C1C1C] mb-1">
                  Pristine Coastline
                </div>
                <p className="text-xs text-stone-600 font-light">
                  Morjim's low-density beach is free from hawkers, jet skis, and blaring shacks.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border border-[#E5DFD7] aspect-[4/3]">
            <img
              src="/assets/site78/banner-8.webp"
              alt="Aurelia Goa Private Pool Veranda"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Sub-Section 2: For Those Who Value Calm and Comfort */}
        <div className="bg-[#F3EEE7] rounded-3xl p-8 sm:p-14 border border-[#E5DFD7]">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-[#747157] text-xs font-bold uppercase tracking-[0.25em]">
              Bespoke Travelers
            </span>
            <h3 className="font-['Cormorant',serif] font-bold text-3xl sm:text-4xl text-[#1C1C1C]">
              For Those Who Value Calm and Comfort
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
              Whether you are an affectionate couple celebrating an anniversary, a family seeking safe poolside comfort, or a creator in search of coastal focus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 space-y-3 shadow-xs border border-[#E5DFD7]/80">
              <div className="w-10 h-10 rounded-full bg-[#747157]/10 flex items-center justify-center text-[#747157]">
                <Heart className="w-5 h-5 text-[#747157]" />
              </div>
              <h4 className="font-['Cormorant',serif] font-bold text-2xl text-[#1C1C1C]">
                Romantic Escapes
              </h4>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Candlelit pool verandas, chilled champagne, couples Ayurvedic treatments, and sunset champagne walks along Morjim Beach.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 space-y-3 shadow-xs border border-[#E5DFD7]/80">
              <div className="w-10 h-10 rounded-full bg-[#747157]/10 flex items-center justify-center text-[#747157]">
                <Shield className="w-5 h-5 text-[#747157]" />
              </div>
              <h4 className="font-['Cormorant',serif] font-bold text-2xl text-[#1C1C1C]">
                Family Retreats
              </h4>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Spacious two-bedroom suites with private gardens provide a secure, enclosed haven for children to play and splash safely.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 space-y-3 shadow-xs border border-[#E5DFD7]/80">
              <div className="w-10 h-10 rounded-full bg-[#747157]/10 flex items-center justify-center text-[#747157]">
                <Compass className="w-5 h-5 text-[#747157]" />
              </div>
              <h4 className="font-['Cormorant',serif] font-bold text-2xl text-[#1C1C1C]">
                Extended Workcations
              </h4>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Dedicated 300 Mbps symmetric optical fiber Wi-Fi, ergonomic desk setups, and in-room Italian espresso for deep remote work.
              </p>
            </div>
          </div>
        </div>

        {/* Sub-Section 3: What Our Guests Say (Testimonials) */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#747157] text-xs font-bold uppercase tracking-[0.25em]">
              Verified Guest Impressions
            </span>
            <h3 className="font-['Cormorant',serif] font-bold text-3xl sm:text-5xl text-[#1C1C1C]">
              What Our Guests Say
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-light">
              Read uncensored feedback from travelers who made Aurelia Goa their coastal home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((t) => (
              <div
                key={t.id}
                className="bg-white p-7 sm:p-8 rounded-3xl border border-[#E5DFD7] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-sm text-stone-700 font-light leading-relaxed italic">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F3EEE7]">
                  <div className="font-['Cormorant',serif] font-bold text-lg text-[#1C1C1C]">
                    {t.guestName}
                  </div>
                  <div className="text-[11px] text-stone-500 font-light">
                    {t.location} · {t.roomType}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sub-Section 4: Strategic Coastal Location */}
        <div className="bg-[#1C1C1C] text-white rounded-3xl p-8 sm:p-12 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-[#B99D75] text-xs font-semibold uppercase tracking-widest">
              <MapPin className="w-4 h-4" />
              <span>Pernem, North Goa</span>
            </div>
            <h3 className="font-['Cormorant',serif] font-bold text-3xl sm:text-4xl text-white">
              Prime Location Close To North Goa Attractions
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
              Situated in Vithaldas Waddo along Morjim Beach Road, Aurelia offers the rarest luxury in Goa: absolute calm at your villa, yet easy 15-minute access to the vibrant culinary hubs of Assagao, Siolim, Anjuna, and Vagator.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-stone-300 font-light">
              <div>• Morjim Beach: 50 Meters</div>
              <div>• Ashwem Beach: 5 Mins</div>
              <div>• Chapora Fort: 15 Mins</div>
              <div>• Assagao Cafes: 18 Mins</div>
              <div>• MOPA Airport (GOX): 35 Mins</div>
              <div>• Panjim City: 40 Mins</div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white/5 rounded-2xl p-6 border border-white/10 space-y-3 text-center">
            <div className="font-['Cormorant',serif] font-bold text-2xl text-[#B99D75]">
              Seamless Arrival Experience
            </div>
            <p className="text-xs text-stone-300 font-light leading-relaxed">
              Our concierge coordinates direct airport transfers in sanitized premium AC SUVs directly from Manohar International Airport (GOX) or Dabolim (GOI).
            </p>
            <div className="pt-2">
              <a
                href={`tel:${site78Config.PHONE_ROOMS_RAW}`}
                className="inline-block px-6 py-2.5 rounded-full bg-[#747157] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#56543e] transition-colors"
              >
                Inquire With Concierge
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
