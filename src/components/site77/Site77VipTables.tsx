import React, { useState } from 'react';
import {
  Crown,
  Sparkles,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Wine,
  Flame,
  Star
} from 'lucide-react';
import { site77Config } from '../../config/site77Config';

interface Site77VipTablesProps {
  onSelectTableForBooking: (tableId: string) => void;
}

export const Site77VipTables: React.FC<Site77VipTablesProps> = ({
  onSelectTableForBooking
}) => {
  const [selectedTierId, setSelectedTierId] = useState<string>(site77Config.TABLE_TIERS[1].id);

  return (
    <section className="py-24 bg-[#0A0B0E] relative overflow-hidden border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#16140D] mb-4">
            <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#F3E5AB] uppercase">
              NOCTURNA VIP SANCTUARY
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-[0.08em] text-white uppercase mb-4">
            VIP TABLE TIERS & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059]">
              BOTTLE PRIVILEGES
            </span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base font-light">
            Elevate your evening with priority red-carpet admission, dedicated butler steward service, 
            exclusive bouncers, and 100% redeemable minimum spends across our vintage champagne and spirit cellar.
          </p>
        </div>

        {/* Table Tiers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {site77Config.TABLE_TIERS.map((tier, idx) => {
            const isFeatured = tier.id === 'table-mezzanine';
            const isStage = tier.id === 'table-stage';

            return (
              <div
                key={tier.id}
                className={`relative rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#1C180E] via-[#12141A] to-[#0A0B0E] border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.25)]'
                    : 'bg-[#0E1015] border-white/10 hover:border-[#D4AF37]/40'
                }`}
              >
                {/* Popular Pill */}
                {isFeatured && (
                  <div className="bg-[#D4AF37] text-black text-[10px] font-mono font-bold uppercase tracking-widest text-center py-1">
                    MOST POPULAR VIP CHOICE
                  </div>
                )}
                {isStage && (
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[10px] font-mono font-bold uppercase tracking-widest text-center py-1">
                    EXCLUSIVE BACKSTAGE ACCESS
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-2">
                    <span className="flex items-center space-x-1 text-[#D4AF37]">
                      <Users className="w-3.5 h-3.5" />
                      <span>{tier.capacity}</span>
                    </span>
                    <span>TIER 0{idx + 1}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white uppercase tracking-wide mb-2">
                    {tier.name}
                  </h3>

                  <div className="mb-4">
                    <span className="text-[10px] font-mono text-gray-400 block uppercase">
                      100% REDEEMABLE MIN SPEND
                    </span>
                    <span className="font-mono text-2xl font-bold text-[#F3E5AB]">
                      {tier.minSpendFormatted}
                    </span>
                  </div>

                  <p className="text-xs text-gray-300 font-light leading-relaxed mb-6 border-b border-white/10 pb-4">
                    {tier.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-6">
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onSelectTableForBooking(tier.id)}
                    className={`w-full py-3 rounded text-xs font-bold uppercase tracking-[0.16em] transition-all flex items-center justify-center space-x-2 ${
                      isFeatured
                        ? 'bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                        : 'border border-[#D4AF37]/60 text-[#F3E5AB] hover:bg-[#D4AF37] hover:text-black'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Reserve This Table</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* VIP Amenities White-Glove Guarantee */}
        <div className="bg-[#12141A] border border-white/10 rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-4">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider">
                100% Minimum Spend Credit
              </h4>
              <p className="text-xs text-gray-400 mt-1">
                Your deposit is fully credited toward spirits, champagnes, mixers, and gourmet dining.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-4">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
              <Wine className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider">
                Sparkler Bottle Ceremony
              </h4>
              <p className="text-xs text-gray-400 mt-1">
                All premium champagne orders include ceremonial sparklers, LED letters and dedicated escort parade.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-4">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider">
                Discreet VIP Valet & Security
              </h4>
              <p className="text-xs text-gray-400 mt-1">
                Private express entrance, dedicated VIP bouncer stationing, and seamless valet drop-off.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
