import React, { useState } from 'react';
import { X, Calculator, Calendar, Users, CheckCircle, Sparkles, ShieldCheck } from 'lucide-react';

interface WeddingQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBookTour?: () => void;
}

export const WeddingQuoteModal: React.FC<WeddingQuoteModalProps> = ({
  isOpen,
  onClose,
  onOpenBookTour
}) => {
  const [dayTier, setDayTier] = useState<'saturday' | 'friday_sunday' | 'weekday'>('saturday');
  const [guestTier, setGuestTier] = useState<number>(120);
  const [hoursOption, setHoursOption] = useState<number>(12);
  const [addChampagneTower, setAddChampagneTower] = useState(true);
  const [addLoungeVignettes, setAddLoungeVignettes] = useState(true);
  const [addCustomMonogram, setAddCustomMonogram] = useState(false);
  const [calculatedQuote, setCalculatedQuote] = useState<number | null>(null);

  if (!isOpen) return null;

  // Base pricing logic
  const calculateTotal = () => {
    let base = 0;
    if (dayTier === 'saturday') base = 6500;
    else if (dayTier === 'friday_sunday') base = 5200;
    else base = 3800;

    // Extra hours over standard 10
    if (hoursOption > 10) {
      base += (hoursOption - 10) * 350;
    }

    // Addons
    if (addChampagneTower) base += 450;
    if (addLoungeVignettes) base += 600;
    if (addCustomMonogram) base += 350;

    setCalculatedQuote(base);
  };

  const currentTotal = calculatedQuote || (() => {
    let base = dayTier === 'saturday' ? 6500 : dayTier === 'friday_sunday' ? 5200 : 3800;
    if (hoursOption > 10) base += (hoursOption - 10) * 350;
    if (addChampagneTower) base += 450;
    if (addLoungeVignettes) base += 600;
    if (addCustomMonogram) base += 350;
    return base;
  })();

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#12110e] text-[#f4efe6] border border-[#2d2922] rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200 font-sans">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1c1a15] to-[#141310] border-b border-[#2d2922] p-5 sm:p-6 flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#c5a059] text-[11px] font-mono uppercase tracking-widest mb-1">
              <Calculator className="w-3.5 h-3.5" />
              <span>Transparent Venue Investment</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif text-[#f4efe6]">
              LuxeSpace Wedding Estimate Calculator
            </h3>
            <p className="text-xs text-[#a09a8f] mt-0.5">
              Calculate your bespoke rental package with 100% transparent pricing and no hidden fees.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#1e1c18] hover:bg-[#2c2923] text-[#a09a8f] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <div className="p-5 sm:p-6 space-y-4 text-xs">
          {/* Day selection */}
          <div>
            <label className="block text-[#a09a8f] font-medium mb-1.5 uppercase tracking-wider text-[10px]">
              1. Preferred Day of Week
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setDayTier('saturday')}
                className={`p-2.5 rounded-lg border text-center cursor-pointer transition-all ${
                  dayTier === 'saturday'
                    ? 'bg-[#1e1c17] border-[#c5a059] text-white font-semibold'
                    : 'bg-[#151411] border-[#2d2922] text-[#8e877c] hover:border-[#423d33]'
                }`}
              >
                <div>Saturday</div>
                <div className="text-[10px] text-[#c5a059] mt-0.5">$6,500 Base</div>
              </button>
              <button
                type="button"
                onClick={() => setDayTier('friday_sunday')}
                className={`p-2.5 rounded-lg border text-center cursor-pointer transition-all ${
                  dayTier === 'friday_sunday'
                    ? 'bg-[#1e1c17] border-[#c5a059] text-white font-semibold'
                    : 'bg-[#151411] border-[#2d2922] text-[#8e877c] hover:border-[#423d33]'
                }`}
              >
                <div>Friday / Sunday</div>
                <div className="text-[10px] text-[#c5a059] mt-0.5">$5,200 Base</div>
              </button>
              <button
                type="button"
                onClick={() => setDayTier('weekday')}
                className={`p-2.5 rounded-lg border text-center cursor-pointer transition-all ${
                  dayTier === 'weekday'
                    ? 'bg-[#1e1c17] border-[#c5a059] text-white font-semibold'
                    : 'bg-[#151411] border-[#2d2922] text-[#8e877c] hover:border-[#423d33]'
                }`}
              >
                <div>Mon – Thu</div>
                <div className="text-[10px] text-[#c5a059] mt-0.5">$3,800 Base</div>
              </button>
            </div>
          </div>

          {/* Access Hours */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[#a09a8f] font-medium mb-1 uppercase tracking-wider text-[10px]">
                2. Venue Access Duration
              </label>
              <select
                value={hoursOption}
                onChange={(e) => setHoursOption(Number(e.target.value))}
                className="w-full bg-[#171612] border border-[#2d2922] rounded-lg px-3 py-2 text-[#f4efe6] focus:outline-none focus:border-[#c5a059]"
              >
                <option value={10}>10 Hours Total Access (Standard)</option>
                <option value={12}>12 Hours Total Access (Recommended)</option>
                <option value={14}>14 Hours Total Access (All-Day Full Buyout)</option>
              </select>
            </div>
            <div>
              <label className="block text-[#a09a8f] font-medium mb-1 uppercase tracking-wider text-[10px]">
                3. Estimated Guests
              </label>
              <select
                value={guestTier}
                onChange={(e) => setGuestTier(Number(e.target.value))}
                className="w-full bg-[#171612] border border-[#2d2922] rounded-lg px-3 py-2 text-[#f4efe6] focus:outline-none focus:border-[#c5a059]"
              >
                <option value={75}>Up to 75 Guests (Intimate)</option>
                <option value={120}>100 - 120 Guests (Average)</option>
                <option value={150}>150 Guests (Full Seated Maximum)</option>
              </select>
            </div>
          </div>

          {/* Add-ons */}
          <div>
            <label className="block text-[#a09a8f] font-medium mb-1.5 uppercase tracking-wider text-[10px]">
              4. Curated Elevated Additions
            </label>
            <div className="space-y-2">
              <label className="flex items-center justify-between p-2.5 bg-[#171511] border border-[#2d2922] rounded-lg cursor-pointer hover:border-[#3d372c]">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={addChampagneTower}
                    onChange={(e) => setAddChampagneTower(e.target.checked)}
                    className="rounded text-[#c5a059] focus:ring-[#c5a059]"
                  />
                  <div>
                    <span className="text-white font-medium">Bespoke 5-Tier Champagne Tower Rental</span>
                    <p className="text-[10px] text-[#8e877c]">Includes crystal coupe glassware and drip tray</p>
                  </div>
                </div>
                <span className="font-mono text-[#c5a059]">+$450</span>
              </label>

              <label className="flex items-center justify-between p-2.5 bg-[#171511] border border-[#2d2922] rounded-lg cursor-pointer hover:border-[#3d372c]">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={addLoungeVignettes}
                    onChange={(e) => setAddLoungeVignettes(e.target.checked)}
                    className="rounded text-[#c5a059] focus:ring-[#c5a059]"
                  />
                  <div>
                    <span className="text-white font-medium">Velvet Lounge Vignettes Package</span>
                    <p className="text-[10px] text-[#8e877c]">Emerald &amp; noir velvet couches, brass coffee tables &amp; poufs</p>
                  </div>
                </div>
                <span className="font-mono text-[#c5a059]">+$600</span>
              </label>

              <label className="flex items-center justify-between p-2.5 bg-[#171511] border border-[#2d2922] rounded-lg cursor-pointer hover:border-[#3d372c]">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={addCustomMonogram}
                    onChange={(e) => setAddCustomMonogram(e.target.checked)}
                    className="rounded text-[#c5a059] focus:ring-[#c5a059]"
                  />
                  <div>
                    <span className="text-white font-medium">Custom Couple Monogram Projection</span>
                    <p className="text-[10px] text-[#8e877c]">Projected onto the marble feature wall or dance floor</p>
                  </div>
                </div>
                <span className="font-mono text-[#c5a059]">+$350</span>
              </label>
            </div>
          </div>

          {/* Quote Display Box */}
          <div className="p-4 bg-[#1a1813] border border-[#c5a059]/40 rounded-xl flex items-center justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#a09a8f]">
                Estimated Venue Investment
              </div>
              <div className="text-3xl font-serif text-[#c5a059] mt-0.5">
                ${currentTotal.toLocaleString()}
              </div>
              <div className="text-[10px] text-[#7d776d] mt-1">
                Includes setup/breakdown, 150 chairs, tables, bridal suite &amp; on-site liaison.
              </div>
            </div>
            <button
              onClick={() => {
                onClose();
                if (onOpenBookTour) onOpenBookTour();
              }}
              className="px-5 py-2.5 rounded-md bg-[#c5a059] hover:bg-[#d4b06a] text-black font-bold uppercase tracking-widest text-xs cursor-pointer transition-colors shrink-0"
            >
              Lock In Date &amp; Tour
            </button>
          </div>

          {/* Guarantee */}
          <div className="p-2.5 bg-[#151410] border border-[#28251e] rounded-lg text-[10px] text-[#8e877c] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#c5a059] shrink-0" />
            <span>Dates require a 25% initial retainer to officially secure. Flexible installment payment schedules available.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
