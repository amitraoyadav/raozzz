import React, { useState } from 'react';
import { X, Search, Key, Heart, CheckCircle2 } from 'lucide-react';

interface FindWeddingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FindWeddingModal: React.FC<FindWeddingModalProps> = ({ isOpen, onClose }) => {
  const [lastName, setLastName] = useState('');
  const [passcode, setPasscode] = useState('');
  const [searched, setSearched] = useState(false);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#1b1e24] text-white border border-[#2e3440] rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-[#242832] p-5 border-b border-stone-800 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-[#b3275a] text-xs font-bold uppercase tracking-wider mb-0.5">
              <Heart className="w-3.5 h-3.5 fill-[#b3275a]" />
              <span>Guest Resources</span>
            </div>
            <h3 className="text-lg font-bold text-white">Find a Wedding</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {searched ? (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <h4 className="text-base font-bold text-white mb-1">
                  Wedding Found: The {lastName.toUpperCase()} Celebration
                </h4>
                <p className="text-xs text-stone-300">
                  Dreams Riviera Cancun Resort &amp; Spa &bull; Riviera Maya, Mexico
                </p>
              </div>

              <div className="bg-[#20242d] p-3.5 rounded-xl border border-stone-800 text-xs space-y-2 text-stone-300">
                <div className="flex justify-between">
                  <span className="text-stone-400">Wedding Dates:</span>
                  <strong className="text-white">November 12 - 16, 2026</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Group Room Block Code:</span>
                  <strong className="text-[#f76d9e] font-mono">DREAMS-WED-774</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Dedicated Specialist:</span>
                  <span className="text-white">Tracy Espina</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setSearched(false);
                  onClose();
                }}
                className="w-full py-2.5 rounded-xl bg-[#b3275a] hover:bg-[#c93268] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Request Room in Group Block
              </button>
            </div>
          ) : (
            <form onSubmit={handleSearch} className="space-y-4 text-xs">
              <p className="text-stone-300 text-xs leading-relaxed">
                If you were invited to a wedding booked through All In One Destination Weddings, enter the couple&rsquo;s last name and passcode to view room blocks and travel itineraries.
              </p>

              <div>
                <label className="block text-stone-300 font-semibold mb-1">Couple&rsquo;s Last Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Miller, Smith, or Johnson"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full bg-[#242832] border border-stone-700 rounded-xl px-3 py-2 text-white placeholder-stone-500 focus:outline-none focus:border-[#b3275a]"
                  required
                />
              </div>

              <div>
                <label className="block text-stone-300 font-semibold mb-1">Wedding Passcode *</label>
                <input
                  type="text"
                  placeholder="e.g. LOVE2026 or LASTNAME26"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="w-full bg-[#242832] border border-stone-700 rounded-xl px-3 py-2 text-white placeholder-stone-500 focus:outline-none focus:border-[#b3275a]"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#b3275a] to-[#8d1b44] text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all cursor-pointer shadow-lg shadow-[#b3275a]/20"
                >
                  Find Wedding &amp; View Details
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
