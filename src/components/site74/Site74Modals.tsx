import React, { useState } from 'react';
import {
  X, Phone, Mail, User, Clock, CheckCircle2, MapPin, Building,
  Calendar, Users, Sparkles, ArrowRight, ShieldCheck, AlertCircle
} from 'lucide-react';
import { site74Config } from '../../config/site74Config';
import { DestinationItem, OfferItem } from '../../data/site74Data';

// ==========================================
// 1. GET A CALLBACK MODAL
// ==========================================
interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallbackModal: React.FC<CallbackModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (09:30 AM – 01:00 PM)');
  const [destination, setDestination] = useState('Goa');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim()) {
      setErrorMessage('Please enter your full name');
      return;
    }
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 9) {
      setErrorMessage('Please enter a valid phone number');
      return;
    }

    setIsSubmitting(true);
    // Simulate backend call to site74Config.API_ENDPOINTS.callbackRequest
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setName('');
    setPhone('');
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] rounded-3xl max-w-md w-full overflow-hidden border border-[#E8E1D5] shadow-2xl relative p-6 sm:p-8">
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white text-stone-700 hover:text-black flex items-center justify-center border border-[#E8E1D5] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSuccess ? (
          <div className="space-y-5">
            <div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#8C6D37] font-bold">
                Direct Hospitality Hotline
              </span>
              <h3 className="font-serif font-medium text-2xl text-[#141210] mt-1">
                Request a Wedding Callback
              </h3>
              <p className="text-xs text-[#6B6155] mt-1 leading-relaxed">
                Connect directly with a Senior Luxury Wedding Concierge at a time convenient for your family.
              </p>
            </div>

            {errorMessage && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs flex items-center gap-2 font-mono">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#141210] font-semibold mb-1">
                  Your Full Name *
                </label>
                <div className="relative">
                  <User className="w-3.5 h-3.5 text-stone-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="e.g. Radhika Mehra"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-[#D5C9B8] bg-white text-xs text-[#141210] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#141210] font-semibold mb-1">
                  Contact Phone / WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="w-3.5 h-3.5 text-stone-400 absolute left-3.5 top-3" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="+91 98210 00000"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-[#D5C9B8] bg-white text-xs text-[#141210] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#141210] font-semibold mb-1">
                  Email Address (Optional)
                </label>
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 text-stone-400 absolute left-3.5 top-3" />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="radhika@example.com"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-[#D5C9B8] bg-white text-xs text-[#141210] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#141210] font-semibold mb-1">
                    Destination
                  </label>
                  <select
                    value={destination}
                    onChange={e => setDestination(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#D5C9B8] bg-white text-xs text-[#141210] focus:outline-none"
                  >
                    <option value="Goa">Goa</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Udaipur">Udaipur</option>
                    <option value="Mussoorie">Mussoorie</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Dubai">Dubai</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#141210] font-semibold mb-1">
                    Preferred Time
                  </label>
                  <select
                    value={preferredTime}
                    onChange={e => setPreferredTime(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#D5C9B8] bg-white text-xs text-[#141210] focus:outline-none"
                  >
                    <option>Morning (09:30 AM – 01:00 PM)</option>
                    <option>Afternoon (01:00 PM – 05:00 PM)</option>
                    <option>Evening (05:00 PM – 08:30 PM)</option>
                    <option>Immediately / Urgent</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#D4B26F] via-[#C5A059] to-[#A37E36] hover:from-[#E2C78A] hover:to-[#B59148] text-[#141210] font-bold text-xs uppercase tracking-widest shadow-md transition-all cursor-pointer mt-2"
              >
                {isSubmitting ? 'Scheduling Concierge...' : 'Schedule My VIP Callback'}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-serif font-medium text-2xl text-[#141210]">
              Callback Scheduled
            </h3>
            <p className="text-xs text-[#6B6155] leading-relaxed max-w-sm mx-auto">
              Thank you, <span className="font-bold text-[#141210]">{name}</span>. Our Senior Wedding Specialist for <span className="font-bold text-[#141210]">{destination}</span> will call you on <span className="font-mono text-[#8C6D37]">{phone}</span> during your preferred window ({preferredTime}).
            </p>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full bg-[#141210] text-white text-xs font-mono uppercase tracking-wider hover:bg-black cursor-pointer"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


// ==========================================
// 2. DESTINATION DETAIL MODAL
// ==========================================
interface DestinationDetailModalProps {
  destination: DestinationItem | null;
  onClose: () => void;
  onPlanForDestination: (destName: string) => void;
}

export const DestinationDetailModal: React.FC<DestinationDetailModalProps> = ({
  destination,
  onClose,
  onPlanForDestination
}) => {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-[#E8E1D5] shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-4 float-right mr-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-colors z-50 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Hero Banner */}
        <div className="relative h-72 sm:h-80 overflow-hidden bg-stone-900">
          <img
            src={destination.heroImage}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-black/40 to-black/60" />

          <div className="absolute bottom-6 left-6 right-6 text-[#141210]">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8C6D37] font-bold block mb-1">
              {destination.stateCountry} · {destination.category.toUpperCase()} WEDDINGS
            </span>
            <h2 className="font-serif font-medium text-3xl sm:text-5xl text-[#141210]">
              {destination.name}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 space-y-8">
          <div>
            <p className="font-serif italic text-base sm:text-lg text-[#8C6D37] mb-2">
              "{destination.tagline}"
            </p>
            <p className="text-xs sm:text-sm text-[#52483E] leading-relaxed">
              {destination.description}
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-[#E8E1D5] space-y-1">
              <span className="font-mono text-[10px] uppercase text-[#8A7B6E] font-bold block">Best Season</span>
              <span className="text-xs font-semibold text-[#141210] block">{destination.bestSeason}</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#E8E1D5] space-y-1">
              <span className="font-mono text-[10px] uppercase text-[#8A7B6E] font-bold block">Airport Transit</span>
              <span className="text-xs font-semibold text-[#141210] block">{destination.airportInfo}</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#E8E1D5] space-y-1">
              <span className="font-mono text-[10px] uppercase text-[#8A7B6E] font-bold block">Capacity Spectrum</span>
              <span className="text-xs font-semibold text-[#8C6D37] block">{destination.capacityRange}</span>
            </div>
          </div>

          {/* Featured Properties in Destination */}
          <div className="space-y-4">
            <h4 className="font-serif font-medium text-2xl text-[#141210] border-b border-[#E8E1D5] pb-2">
              Featured Luxury Resorts &amp; Palaces in {destination.name}
            </h4>

            <div className="space-y-5">
              {destination.featuredVenues.map(venue => (
                <div
                  key={venue.id}
                  className="bg-white rounded-2xl border border-[#E8E1D5] p-5 sm:p-6 shadow-xs grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-5 items-center"
                >
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-36 rounded-xl object-cover"
                  />
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <span className="font-mono text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-bold">
                        {venue.type}
                      </span>
                      <span className="font-mono text-[10px] text-stone-500 font-bold">
                        {venue.roomsCount} Rooms · {venue.capacity}
                      </span>
                    </div>

                    <h5 className="font-serif font-medium text-lg text-[#141210]">{venue.name}</h5>

                    <div className="flex flex-wrap gap-3 text-[11px] text-[#6B6155] font-mono">
                      <span>Indoor: {venue.indoorSqFt}</span>
                      <span>•</span>
                      <span>Outdoor: {venue.outdoorLawnSqFt}</span>
                    </div>

                    <ul className="text-xs text-[#52483E] space-y-1 pt-1">
                      {venue.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Planner Tips & Culinary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-white border border-[#E8E1D5] space-y-2">
              <span className="font-mono text-xs font-bold uppercase text-[#8C6D37] block">
                Regional Culinary Signatures
              </span>
              <ul className="space-y-1.5 text-xs text-[#52483E]">
                {destination.culinaryHighlights.map((ch, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#C5A059] font-bold">✓</span>
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E8E1D5] space-y-2">
              <span className="font-mono text-xs font-bold uppercase text-[#8C6D37] block">
                Executive Wedding Planner Insights
              </span>
              <ul className="space-y-1.5 text-xs text-[#52483E]">
                {destination.plannerTips.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#C5A059] font-bold">★</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="pt-4 border-t border-[#E8E1D5] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-[#8A7B6E] block font-mono">Ready to verify dates in {destination.name}?</span>
              <span className="font-serif text-lg font-bold text-[#141210]">Custom Turnkey Hospitality &amp; Banquets</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onPlanForDestination(destination.name);
              }}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4B26F] via-[#C5A059] to-[#A37E36] text-[#141210] font-bold text-xs uppercase tracking-widest shadow-lg hover:scale-102 transition-transform cursor-pointer"
            >
              Start Planning for {destination.name} →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
