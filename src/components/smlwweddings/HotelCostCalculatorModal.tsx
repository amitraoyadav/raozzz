import React, { useState } from 'react';
import { X, Calculator, IndianRupee, Sparkles, Building2, Users, Moon, Check } from 'lucide-react';

interface HotelCostCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCheckAvail?: () => void;
}

export const HotelCostCalculatorModal: React.FC<HotelCostCalculatorModalProps> = ({
  isOpen,
  onClose,
  onOpenCheckAvail
}) => {
  const [destination, setDestination] = useState<'Udaipur' | 'Jaipur' | 'Goa' | 'Delhi NCR' | 'Thailand' | 'Dubai'>('Udaipur');
  const [hotelTier, setHotelTier] = useState<'Palace' | 'LuxuryResort' | 'HeritageHaveli'>('Palace');
  const [roomsCount, setRoomsCount] = useState<number>(80);
  const [nightsCount, setNightsCount] = useState<number>(2);
  const [guestsCount, setGuestsCount] = useState<number>(200);
  const [includeDecorEstimate, setIncludeDecorEstimate] = useState<boolean>(true);

  if (!isOpen) return null;

  // Calculation rates
  const roomRates = {
    Udaipur: { Palace: 35000, LuxuryResort: 20000, HeritageHaveli: 14000 },
    Jaipur: { Palace: 32000, LuxuryResort: 18000, HeritageHaveli: 12000 },
    Goa: { Palace: 28000, LuxuryResort: 19000, HeritageHaveli: 11000 },
    'Delhi NCR': { Palace: 24000, LuxuryResort: 16000, HeritageHaveli: 10000 },
    Thailand: { Palace: 30000, LuxuryResort: 22000, HeritageHaveli: 15000 },
    Dubai: { Palace: 42000, LuxuryResort: 26000, HeritageHaveli: 18000 }
  };

  const mealPerPersonPerDay = {
    Palace: 8500,
    LuxuryResort: 5500,
    HeritageHaveli: 3800
  };

  const decorBaseline = {
    Palace: 2500000,
    LuxuryResort: 1800000,
    HeritageHaveli: 1200000
  };

  const avgRoomRate = roomRates[destination][hotelTier];
  const totalRoomCost = roomsCount * nightsCount * avgRoomRate;
  const avgMealCost = mealPerPersonPerDay[hotelTier];
  const totalFnBCost = guestsCount * nightsCount * avgMealCost;
  const decorCost = includeDecorEstimate ? decorBaseline[hotelTier] : 0;
  const totalEstimatedCost = totalRoomCost + totalFnBCost + decorCost;

  const formatLakhs = (amt: number) => {
    const inLakhs = amt / 100000;
    if (inLakhs >= 100) {
      return `₹${(inLakhs / 100).toFixed(2)} Crore`;
    }
    return `₹${inLakhs.toFixed(1)} Lakhs`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#141416] text-white border border-[#303038] rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1b1c22] to-[#252630] p-5 sm:p-6 border-b border-[#2d2e35] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#d2cd48]/15 text-[#d2cd48] flex items-center justify-center border border-[#d2cd48]/30">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-[#d2cd48] text-[11px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Transparent Budget Estimator</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Destination Wedding &amp; Hotel Cost Calculator
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-5">
          {/* Destination Selector */}
          <div>
            <label className="block text-xs font-semibold text-stone-300 mb-2">1. Select Destination</label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {(['Udaipur', 'Jaipur', 'Goa', 'Delhi NCR', 'Thailand', 'Dubai'] as const).map((dest) => (
                <button
                  key={dest}
                  type="button"
                  onClick={() => setDestination(dest)}
                  className={`py-2 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                    destination === dest
                      ? 'bg-[#d2cd48] text-black border-[#d2cd48] shadow-md shadow-[#d2cd48]/15'
                      : 'bg-[#1c1d24] text-stone-300 border-stone-800 hover:border-stone-700'
                  }`}
                >
                  {dest}
                </button>
              ))}
            </div>
          </div>

          {/* Hotel Tier */}
          <div>
            <label className="block text-xs font-semibold text-stone-300 mb-2">2. Property Standard</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                { id: 'Palace', title: 'Palace / Ultra Luxury 5-Star', desc: 'Oberoi, Taj Palaces, Leela' },
                { id: 'LuxuryResort', title: '5-Star Luxury Resort', desc: 'Marriott, Hyatt, Westin' },
                { id: 'HeritageHaveli', title: 'Heritage Haveli / 4-Star', desc: 'Royal Forts & Boutique Havelis' }
              ].map((tier) => (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setHotelTier(tier.id as any)}
                  className={`p-3 rounded-xl text-left transition-all cursor-pointer border ${
                    hotelTier === tier.id
                      ? 'bg-[#d2cd48]/10 text-white border-[#d2cd48]'
                      : 'bg-[#1c1d24] text-stone-300 border-stone-800 hover:border-stone-700'
                  }`}
                >
                  <div className="font-bold text-xs flex items-center justify-between">
                    <span>{tier.title}</span>
                    {hotelTier === tier.id && <Check className="w-3.5 h-3.5 text-[#d2cd48]" />}
                  </div>
                  <div className="text-[11px] text-stone-400 mt-0.5">{tier.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#191a22] p-4 rounded-xl border border-stone-800">
            <div>
              <div className="flex justify-between text-xs font-semibold text-stone-300 mb-1">
                <span>Rooms Required</span>
                <span className="text-[#d2cd48] font-bold">{roomsCount} Rooms</span>
              </div>
              <input
                type="range"
                min="30"
                max="250"
                step="10"
                value={roomsCount}
                onChange={(e) => setRoomsCount(Number(e.target.value))}
                className="w-full accent-[#d2cd48] cursor-pointer"
              />
              <div className="text-[10px] text-stone-500 mt-1">Accommodates ~{roomsCount * 2} guests</div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-stone-300 mb-1">
                <span>Nights of Stay</span>
                <span className="text-[#d2cd48] font-bold">{nightsCount} Nights</span>
              </div>
              <input
                type="range"
                min="1"
                max="4"
                step="1"
                value={nightsCount}
                onChange={(e) => setNightsCount(Number(e.target.value))}
                className="w-full accent-[#d2cd48] cursor-pointer"
              />
              <div className="text-[10px] text-stone-500 mt-1">{nightsCount} Days / {nightsCount + 1} Functions</div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-stone-300 mb-1">
                <span>Total Expected Guests</span>
                <span className="text-[#d2cd48] font-bold">{guestsCount} Guests</span>
              </div>
              <input
                type="range"
                min="80"
                max="600"
                step="20"
                value={guestsCount}
                onChange={(e) => setGuestsCount(Number(e.target.value))}
                className="w-full accent-[#d2cd48] cursor-pointer"
              />
              <div className="text-[10px] text-stone-500 mt-1">For High-Tea, Dinners &amp; Reception</div>
            </div>
          </div>

          {/* Breakdown Card */}
          <div className="bg-gradient-to-br from-[#1d1f27] to-[#17181f] p-4 rounded-xl border border-stone-700/80">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3 flex items-center justify-between">
              <span>Estimated Cost Breakdown</span>
              <span className="text-[11px] text-[#d2cd48] font-mono">Real-Time Model</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs border-b border-stone-800 pb-3 mb-3">
              <div>
                <span className="text-stone-400 block text-[11px]">Room Stays ({roomsCount} rms × {nightsCount} nts)</span>
                <strong className="text-white text-sm font-semibold">{formatLakhs(totalRoomCost)}</strong>
              </div>
              <div>
                <span className="text-stone-400 block text-[11px]">Food &amp; Banquets ({guestsCount} pax)</span>
                <strong className="text-white text-sm font-semibold">{formatLakhs(totalFnBCost)}</strong>
              </div>
              <div>
                <span className="text-stone-400 block text-[11px]">Decor &amp; Stage Baseline</span>
                <strong className="text-white text-sm font-semibold">{formatLakhs(decorCost)}</strong>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
              <div>
                <div className="text-[11px] text-stone-400">Total Projected Destination Budget:</div>
                <div className="text-2xl sm:text-3xl font-black text-[#d2cd48]">
                  {formatLakhs(totalEstimatedCost)}
                  <span className="text-xs font-normal text-stone-400 ml-1.5">(Approx ±10%)</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    if (onOpenCheckAvail) onOpenCheckAvail();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#d2cd48] hover:bg-[#e0db52] text-black font-extrabold text-xs uppercase tracking-wider cursor-pointer shadow-lg transition-all"
                >
                  Verify Exact Dates &amp; Rates
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
