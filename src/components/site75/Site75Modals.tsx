import React, { useState } from 'react';
import { X, Phone, Mail, User, Clock, Check, Sparkles, MapPin, Calendar, Plane, Users, ArrowRight } from 'lucide-react';
import { site75Config } from '../../config/site75Config';
import { DestinationItem } from '../../data/site75Data';

// ========================================================
// 1. FAST GET-A-CALLBACK MODAL
// ========================================================
interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallbackModal: React.FC<CallbackModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredTime, setPreferredTime] = useState('Immediate / Next 2 Hours');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please provide your full name.');
      return;
    }
    if (!phone.trim() || !/^[+0-9\s-]{7,15}$/.test(phone.trim())) {
      setError('Please provide a valid contact number.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
    } catch (err) {
      setError('Failed to request callback. Please try via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 text-left">
      <div className="bg-[#0E131F] border border-[#20293D] rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#131A29] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl text-white font-medium">
              Callback Scheduled
            </h3>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Our Senior Wedding Concierge will reach out to <strong className="text-white">{phone}</strong> during the <span className="text-[#D4AF37]">{preferredTime}</span> window.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#080B12] bg-[#D4AF37] hover:bg-[#E8CA65] transition-all cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] font-semibold">
                Direct Line
              </span>
              <h3 className="font-serif text-2xl text-white font-medium">
                Request a Callback
              </h3>
              <p className="text-xs text-slate-400 font-light">
                Connect with our Mumbai Concierge Desk at your convenience.
              </p>
            </div>

            {error && (
              <div className="p-2.5 rounded-xl bg-red-950/60 border border-red-800 text-xs text-red-300">
                {error}
              </div>
            )}

            <div className="space-y-3 pt-2">
              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase text-slate-300">Your Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="e.g. Yashvardhan Singhania"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#131A29] border border-[#20293D] text-xs text-white placeholder-stone-500 focus:outline-hidden focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase text-slate-300">Phone / WhatsApp *</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="+91 98200 00000"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#131A29] border border-[#20293D] text-xs text-white placeholder-stone-500 focus:outline-hidden focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase text-slate-300">Email Address (Optional)</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#131A29] border border-[#20293D] text-xs text-white placeholder-stone-500 focus:outline-hidden focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase text-slate-300">Preferred Window</label>
                <select
                  value={preferredTime}
                  onChange={e => setPreferredTime(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#131A29] border border-[#20293D] text-xs text-white focus:outline-hidden focus:border-[#D4AF37]"
                >
                  <option value="Immediate / Next 2 Hours">Immediate / Next 2 Hours</option>
                  <option value="Today Evening (5 PM - 8 PM)">Today Evening (5 PM - 8 PM)</option>
                  <option value="Tomorrow Morning (10 AM - 1 PM)">Tomorrow Morning (10 AM - 1 PM)</option>
                  <option value="Weekend Appointment">Weekend Appointment</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#080B12] bg-[#D4AF37] hover:bg-[#E8CA65] transition-all cursor-pointer shadow-lg disabled:opacity-50 mt-4"
            >
              {isSubmitting ? 'Scheduling...' : 'Request Direct Call'}
            </button>

            <p className="text-[10px] text-stone-500 text-center font-mono">
              Or call our direct 24/7 hotline at {site75Config.PHONE_DISPLAY}
            </p>
          </form>
        )}

      </div>
    </div>
  );
};

// ========================================================
// 2. DETAILED DESTINATION PROPERTY SHEET MODAL
// ========================================================
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 text-left">
      <div className="bg-[#0E131F] border border-[#20293D] rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-[#080B12]/80 border border-white/10 flex items-center justify-center text-white hover:text-[#D4AF37] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Banner */}
        <div className="relative h-72 sm:h-96 w-full overflow-hidden">
          <img
            src={destination.heroImage}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F] via-[#0E131F]/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 space-y-1">
            <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-[#080B12] text-[10px] font-mono uppercase font-bold tracking-widest inline-block">
              {destination.region} Destination
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-white font-medium">
              {destination.name}
            </h3>
            <p className="text-xs text-[#D4AF37] font-mono tracking-wider uppercase">
              {destination.tagline}
            </p>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Overview Statement */}
          <div className="space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold block">
              Destination Character &amp; Scenography
            </span>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              {destination.description}
            </p>
          </div>

          {/* Key Logistical Parameters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-[#131A29] border border-white/5 font-mono text-xs">
            <div className="space-y-1">
              <span className="text-stone-400 block text-[10px] uppercase">Best Season</span>
              <span className="text-white font-medium flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                {destination.bestSeason}
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-stone-400 block text-[10px] uppercase">Airport Hub</span>
              <span className="text-white font-medium flex items-center gap-1.5 truncate">
                <Plane className="w-3.5 h-3.5 text-[#D4AF37]" />
                {destination.airportHub}
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-stone-400 block text-[10px] uppercase">Guest Capacity</span>
              <span className="text-white font-medium flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                {destination.averageGuestRange}
              </span>
            </div>
          </div>

          {/* Featured Properties & Palaces */}
          <div className="space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold block">
              Premier Palace &amp; Resort Portfolios
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {destination.featuredVenues.map((venue, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden bg-[#131A29] border border-white/5 space-y-2">
                  <div className="h-36 overflow-hidden">
                    <img
                      src={venue.image}
                      alt={venue.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3.5 space-y-1">
                    <h5 className="font-serif text-sm font-medium text-white truncate">
                      {venue.name}
                    </h5>
                    <p className="text-[10px] text-stone-400 font-sans">
                      {venue.style}
                    </p>
                    <span className="text-[10px] font-mono text-[#D4AF37] block">
                      Capacity: {venue.capacity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Signature Highlights */}
          <div className="space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold block">
              Atelier Experiences in {destination.name}
            </span>
            <div className="space-y-2">
              {destination.signatureHighlights.map((hl, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 font-light">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer */}
          <div className="pt-6 border-t border-[#20293D] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-stone-400 font-light">
              Interested in private buyouts or date availability for {destination.name}?
            </span>
            <button
              onClick={() => {
                onClose();
                onPlanForDestination(destination.name);
              }}
              className="w-full sm:w-auto px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-[#080B12] bg-[#D4AF37] hover:bg-[#E8CA65] transition-all cursor-pointer shadow-lg"
            >
              Start Planning for {destination.name}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
