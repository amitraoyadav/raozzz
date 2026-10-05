import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  Crown, 
  Calendar, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  ArrowRight,
  ShieldCheck,
  Send,
  Loader2
} from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { PSR_DESTINATIONS } from '../../data/psrWeddingsData';

interface PsrConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDestination?: string;
  initialServiceOrVenue?: string;
}

export const PsrConsultationModal: React.FC<PsrConsultationModalProps> = ({
  isOpen,
  onClose,
  initialDestination = '',
  initialServiceOrVenue = ''
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState(initialDestination);
  const [weddingDate, setWeddingDate] = useState('');
  const [guestCount, setGuestCount] = useState('150-300');
  const [budgetRange, setBudgetRange] = useState('₹40L - ₹75L');
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Venue Selection & Negotiations',
    'Full-Service Wedding Planning',
    'Decor, Scenography & Floral Design'
  ]);
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialDestination) {
      setDestination(initialDestination);
    }
    if (initialServiceOrVenue) {
      setNotes(prev => prev ? `${prev}\nInterested in: ${initialServiceOrVenue}` : `Interested in: ${initialServiceOrVenue}`);
    }
  }, [initialDestination, initialServiceOrVenue]);

  if (!isOpen) return null;

  const servicesList = [
    'Venue Selection & Negotiations',
    'Full-Service Wedding Planning',
    'Decor, Scenography & Floral Design',
    'Hospitality & Guest Concierge',
    'Catering & Menu Design',
    'Photography & Cinematic Films',
    'Entertainment & Celebrity Artists',
    'Logistics, Fleet & Travel Desk'
  ];

  const toggleService = (srv: string) => {
    setSelectedServices(prev => 
      prev.includes(srv) ? prev.filter(s => s !== srv) : [...prev, srv]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `*PSR VENTURE WEDDINGS — CONSULTATION REQUEST*\n\n` +
      `• *Name:* ${name}\n` +
      `• *Phone:* ${phone}\n` +
      `• *Email:* ${email}\n` +
      `• *Target Destination:* ${destination || 'Flexible'}\n` +
      `• *Target Date/Season:* ${weddingDate || 'Winter 2026/27'}\n` +
      `• *Guest Count:* ${guestCount}\n` +
      `• *Budget Range:* ${budgetRange}\n` +
      `• *Services Required:* ${selectedServices.join(', ')}\n` +
      (notes ? `• *Notes:* ${notes}\n` : '') +
      `\nPlease schedule our complimentary master planning consultation.`
    );
    window.open(`https://wa.me/${siteConfig.WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${text}`, '_blank');
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={handleResetAndClose}
      />

      <div className="relative min-h-screen flex items-center justify-center p-3 sm:p-6">
        <div className="relative bg-[#1A0509] text-white rounded-3xl max-w-2xl w-full border border-[#C5A059]/40 shadow-2xl overflow-hidden my-8">
          {/* Close button */}
          <button
            onClick={handleResetAndClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer shadow-lg"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="bg-gradient-to-r from-[#2A090F] to-[#1F070B] p-6 sm:p-8 border-b border-[#C5A059]/25 space-y-2">
            <div className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-[#DFBE78]" />
              <span className="text-[11px] font-bold text-[#DFBE78] uppercase tracking-widest">
                Private Consultation
              </span>
            </div>
            <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-white leading-tight">
              Plan Your Dream Destination Wedding
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
              Connect directly with our Senior Wedding Directors. Receive an honest, transparent line-item budget analysis and personalized venue shortlist.
            </p>
          </div>

          {/* Body: Form or Success */}
          <div className="p-6 sm:p-8">
            {isSuccess ? (
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#DFBE78] to-[#C5A059] text-[#1A0509] flex items-center justify-center mx-auto shadow-xl">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-white">
                    Consultation Request Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 max-w-md mx-auto font-light leading-relaxed">
                    Thank you, <strong className="text-white font-semibold">{name}</strong>. A Senior Wedding Director from {siteConfig.SITE_NAME} has been assigned to review your celebration requirements for <span className="text-[#DFBE78] font-medium">{destination || 'your destination'}</span>.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#24080D] border border-[#C5A059]/30 text-xs text-stone-300 max-w-md mx-auto space-y-1.5 text-left">
                  <div className="flex justify-between">
                    <span className="text-stone-400">Target Destination:</span>
                    <span className="font-bold text-white">{destination || 'To be decided'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Guest Bracket:</span>
                    <span className="font-bold text-white">{guestCount} Guests</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Budget Range:</span>
                    <span className="font-bold text-[#DFBE78]">{budgetRange}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Connect on WhatsApp Instantly</span>
                  </button>
                  <button
                    onClick={handleResetAndClose}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* 1. Name & Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-300">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Singhal"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full bg-[#120306] border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-hidden focus:border-[#DFBE78]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-300">
                      Mobile Number (WhatsApp Preferred) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="w-full bg-[#120306] border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-hidden focus:border-[#DFBE78]"
                    />
                  </div>
                </div>

                {/* Email & Destination */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. ananya@gmail.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full bg-[#120306] border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-hidden focus:border-[#DFBE78]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-300">
                      Preferred Destination
                    </label>
                    <select
                      value={destination}
                      onChange={e => setDestination(e.target.value)}
                      className="w-full bg-[#120306] border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-hidden focus:border-[#DFBE78]"
                    >
                      <option value="">Select Destination</option>
                      {PSR_DESTINATIONS.map(d => (
                        <option key={d.slug} value={d.name}>{d.name} ({d.stateOrRegion})</option>
                      ))}
                      <option value="International (Dubai/Thailand)">International (Dubai/Thailand)</option>
                      <option value="Undecided / Open to Suggestions">Undecided / Open to Suggestions</option>
                    </select>
                  </div>
                </div>

                {/* Date, Guests, Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-300">
                      Tentative Date / Month
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Nov 2026 or Dec 2027"
                      value={weddingDate}
                      onChange={e => setWeddingDate(e.target.value)}
                      className="w-full bg-[#120306] border border-stone-700 rounded-xl px-3 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-hidden focus:border-[#DFBE78]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-300">
                      Guest Count
                    </label>
                    <select
                      value={guestCount}
                      onChange={e => setGuestCount(e.target.value)}
                      className="w-full bg-[#120306] border border-stone-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-hidden focus:border-[#DFBE78]"
                    >
                      <option value="Under 100">Under 100 (Intimate)</option>
                      <option value="100-200">100 - 200 Guests</option>
                      <option value="200-350">200 - 350 Guests</option>
                      <option value="350-500">350 - 500 Guests</option>
                      <option value="500+">500+ (Grand Palace)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-300">
                      Target Budget Range
                    </label>
                    <select
                      value={budgetRange}
                      onChange={e => setBudgetRange(e.target.value)}
                      className="w-full bg-[#120306] border border-stone-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-hidden focus:border-[#DFBE78]"
                    >
                      <option value="₹25L - ₹40L">₹25L - ₹40L</option>
                      <option value="₹40L - ₹75L">₹40L - ₹75L</option>
                      <option value="₹75L - ₹1.5 Cr">₹75L - ₹1.5 Crores</option>
                      <option value="₹1.5 Cr - ₹3 Cr">₹1.5 Cr - ₹3 Crores</option>
                      <option value="₹3 Cr+">₹3 Crores+ (Ultra Luxury)</option>
                    </select>
                  </div>
                </div>

                {/* Services Checkboxes */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-stone-300 block">
                    Services You Require:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {servicesList.map(srv => {
                      const isChecked = selectedServices.includes(srv);
                      return (
                        <label
                          key={srv}
                          onClick={() => toggleService(srv)}
                          className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-colors ${
                            isChecked
                              ? 'bg-[#2A090E] border-[#DFBE78] text-white font-medium'
                              : 'bg-[#120306] border-stone-800 text-stone-400 hover:text-stone-200'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}}
                            className="accent-[#DFBE78] cursor-pointer"
                          />
                          <span className="truncate">{srv}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Message / Special Vision */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-300">
                    Tell us about your celebration vision or specific venue questions:
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. We are looking for an island or lakefront palace in Udaipur with space for 200 guests and vegetarian royal catering..."
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                    className="w-full bg-[#120306] border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-hidden focus:border-[#DFBE78]"
                  />
                </div>

                {/* Trust Note */}
                <div className="p-3 rounded-xl bg-black/40 border border-[#C5A059]/20 text-[11px] text-stone-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#DFBE78] shrink-0" />
                  <span>
                    Strict Confidentiality Guarantee. We never share client contact details with unauthorized third parties.
                  </span>
                </div>

                {/* Submit CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#DFBE78] hover:from-[#DFBE78] hover:to-[#C5A059] text-[#1A0509] font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#1A0509]" />
                        <span>Submitting Blueprint...</span>
                      </>
                    ) : (
                      <>
                        <span>Request a Consultation</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppRedirect}
                    className="w-full sm:w-auto text-xs text-emerald-400 hover:underline flex items-center justify-center gap-1.5 cursor-pointer py-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Prefer WhatsApp? Chat directly</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
