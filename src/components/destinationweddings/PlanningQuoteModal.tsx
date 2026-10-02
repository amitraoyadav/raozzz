import React, { useState } from 'react';
import { X, Calendar, Users, MapPin, CheckCircle, Sparkles, Gift, Heart, ArrowRight } from 'lucide-react';
import { DW_SEASONS, DW_GUEST_COUNTS, DW_REGIONS } from './destinationWeddingsData';

interface PlanningQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSeason?: string;
  initialGuests?: string;
  initialDestination?: string;
}

export const PlanningQuoteModal: React.FC<PlanningQuoteModalProps> = ({
  isOpen,
  onClose,
  initialSeason,
  initialGuests,
  initialDestination
}) => {
  const [season, setSeason] = useState(initialSeason || 'Spring 2027');
  const [guests, setGuests] = useState(initialGuests || 'A Happy Medium (25-49 guests)');
  const [destination, setDestination] = useState(initialDestination || 'Mexico');
  const [fullName, setFullName] = useState('');
  const [partnerName, setPartnerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [budgetRange, setBudgetRange] = useState('$10,000 - $15,000');
  const [submitted, setSubmitted] = useState(false);
  const [confirmationNumber, setConfirmationNumber] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const conf = 'DW-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmationNumber(conf);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#1b1e24] text-white border border-[#2e3440] rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#b3275a] to-[#8d1b44] p-5 sm:p-6 text-white flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider mb-1">
              <Gift className="w-3.5 h-3.5" />
              <span>Free Consultation + Win $500 Gift Card</span>
            </div>
            <h3 className="text-xl font-bold text-white">Start Your Wedding Planning</h3>
            <p className="text-xs text-white/80 mt-0.5">
              100% Free Service &bull; Certified Destination Wedding Specialist Assigned
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3 border border-emerald-500/30">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-1">You&rsquo;re All Set, {fullName}!</h4>
              <p className="text-xs sm:text-sm text-stone-300 max-w-md mx-auto mb-4 leading-relaxed">
                Your profile for <strong className="text-white">{destination}</strong> in <strong className="text-white">{season}</strong> has been created. A Certified Destination Wedding Specialist will contact you within 24 hours.
              </p>
              <div className="p-3 bg-stone-900 border border-stone-800 rounded-xl inline-block font-mono text-xs text-[#b3275a] bg-rose-950/30 border-rose-900/50 mb-6">
                Confirmation &amp; Giveaway Entry #: {confirmationNumber}
              </div>
              <div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#b3275a] hover:bg-[#c93268] text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-300 font-semibold mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#b3275a]" /> When&rsquo;s the big day?
                  </label>
                  <select
                    value={season}
                    onChange={(e) => setSeason(e.target.value)}
                    className="w-full bg-[#242832] border border-stone-700 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-[#b3275a]"
                  >
                    {DW_SEASONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-stone-300 font-semibold mb-1 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#b3275a]" /> How many guests?
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-[#242832] border border-stone-700 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-[#b3275a]"
                  >
                    {DW_GUEST_COUNTS.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-stone-300 font-semibold mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#b3275a]" /> Preferred Wedding Destination
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-[#242832] border border-stone-700 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-[#b3275a]"
                >
                  {DW_REGIONS.map((r) => (
                    <option key={r.id} value={r.name}>{r.name} ({r.subdestinations.slice(0, 3).join(', ')}...)</option>
                  ))}
                  <option value="Undecided / Open to Specialist Recommendations">Undecided / Recommend to Me</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-300 font-semibold mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    placeholder="First & Last Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#242832] border border-stone-700 rounded-xl px-3 py-2 text-white placeholder-stone-500 focus:outline-none focus:border-[#b3275a]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-stone-300 font-semibold mb-1">Partner&rsquo;s Name</label>
                  <input
                    type="text"
                    placeholder="Partner Name"
                    value={partnerName}
                    onChange={(e) => setPartnerName(e.target.value)}
                    className="w-full bg-[#242832] border border-stone-700 rounded-xl px-3 py-2 text-white placeholder-stone-500 focus:outline-none focus:border-[#b3275a]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-300 font-semibold mb-1">Email Address *</label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#242832] border border-stone-700 rounded-xl px-3 py-2 text-white placeholder-stone-500 focus:outline-none focus:border-[#b3275a]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-stone-300 font-semibold mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="(555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#242832] border border-stone-700 rounded-xl px-3 py-2 text-white placeholder-stone-500 focus:outline-none focus:border-[#b3275a]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-300 font-semibold mb-1">Estimated Wedding Budget</label>
                <select
                  value={budgetRange}
                  onChange={(e) => setBudgetRange(e.target.value)}
                  className="w-full bg-[#242832] border border-stone-700 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-[#b3275a]"
                >
                  <option value="Under $7,500">Under $7,500</option>
                  <option value="$7,500 - $12,000">$7,500 - $12,000 (Average All-Inclusive)</option>
                  <option value="$12,000 - $20,000">$12,000 - $20,000</option>
                  <option value="$20,000 - $35,000">$20,000 - $35,000</option>
                  <option value="$35,000+">$35,000+ (Luxury Estate / Villa)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#b3275a] to-[#8d1b44] hover:from-[#c93268] hover:to-[#a0204f] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#b3275a]/20 cursor-pointer transition-all flex items-center justify-center gap-2"
                >
                  <span>Get Started &amp; Enter $500 Giveaway</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-stone-400 text-center mt-2">
                  🔒 100% Free consultation. No hidden fees. We match online rates and beat resort-direct group perks.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
