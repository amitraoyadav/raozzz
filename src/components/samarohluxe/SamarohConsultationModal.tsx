import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  ArrowRight,
  ShieldCheck,
  Send,
  Loader2,
  Building2
} from 'lucide-react';
import { SAMAROH_CONFIG } from '../../data/samarohLuxeData';

interface SamarohConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCity?: string;
  initialBrief?: string;
}

export const SamarohConsultationModal: React.FC<SamarohConsultationModalProps> = ({
  isOpen,
  onClose,
  initialCity,
  initialBrief
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [city, setCity] = useState(initialCity || 'bengaluru');
  const [eventDate, setEventDate] = useState('');
  const [venueName, setVenueName] = useState('');
  const [selectedFunctions, setSelectedFunctions] = useState<string[]>(['Wedding', 'Reception']);

  // Contact Info
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [budgetRange, setBudgetRange] = useState('₹4 Lakhs - ₹8 Lakhs');
  const [notes, setNotes] = useState(initialBrief || '');

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialBrief) {
      setNotes(initialBrief);
    }
  }, [initialBrief]);

  useEffect(() => {
    if (initialCity) {
      setCity(initialCity);
    }
  }, [initialCity]);

  if (!isOpen) return null;

  const toggleFunction = (fn: string) => {
    if (selectedFunctions.includes(fn)) {
      setSelectedFunctions(selectedFunctions.filter(f => f !== fn));
    } else {
      setSelectedFunctions([...selectedFunctions, fn]);
    }
  };

  const activeCityObj = SAMAROH_CONFIG.CITIES.find(c => c.id === city) || SAMAROH_CONFIG.CITIES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleWhatsAppInstant = () => {
    const text = encodeURIComponent(
      `*${SAMAROH_CONFIG.SITE_NAME} — 3D Design Consultation*\n\n` +
      `• *Name:* ${fullName}\n` +
      `• *Phone:* ${phone}\n` +
      `• *City:* ${activeCityObj.name}\n` +
      `• *Date:* ${eventDate || 'To be decided'}\n` +
      `• *Venue:* ${venueName || 'Under search'}\n` +
      `• *Ceremonies:* ${selectedFunctions.join(', ') || 'All-inclusive'}\n` +
      `• *Budget Range:* ${budgetRange}\n` +
      (notes ? `• *Special Notes:* ${notes}\n\n` : '\n') +
      `Please connect me with our designated ${activeCityObj.name} lead designer.`
    );
    window.open(`https://wa.me/${SAMAROH_CONFIG.WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#1C1917] text-white border border-stone-700 w-full max-w-2xl rounded-3xl shadow-2xl z-10 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-stone-800 flex items-center justify-between bg-stone-900/90 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#E06D53] flex items-center justify-center text-white shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-['Fraunces',serif] text-xl font-bold text-white">
                Book 3D Design Consultation
              </h3>
              <span className="text-xs text-stone-400 block font-light">
                {activeCityObj.name} Experience Studio · 100% Free Initial 3D Moodboard
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h4 className="font-['Fraunces',serif] text-2xl font-bold text-white">
                  Consultation Booked Successfully!
                </h4>
                <p className="text-stone-300 text-xs sm:text-sm font-light max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white font-semibold">{fullName}</strong>. Your inquiry has been routed to our <strong className="text-[#E06D53]">{activeCityObj.name}</strong> studio team. A senior wedding design director will connect with you within 2 business hours.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 text-xs text-left max-w-md mx-auto space-y-1.5 text-stone-300">
                <div className="flex justify-between">
                  <span className="text-stone-400">Design Studio:</span>
                  <span className="font-semibold text-white">{activeCityObj.name} ({activeCityObj.studio})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Selected Events:</span>
                  <span className="font-semibold text-white">{selectedFunctions.join(', ') || 'Custom Suite'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Approximate Budget:</span>
                  <span className="font-semibold text-emerald-400">{budgetRange}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppInstant}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Immediate WhatsApp Copy</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-stone-800 hover:bg-stone-750 text-stone-200 text-xs font-semibold cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step indicator */}
              <div className="flex items-center justify-between text-xs text-stone-400 pb-2 border-b border-stone-800">
                <span>Step {step} of 2</span>
                <span className="text-[#E06D53] font-medium">
                  {step === 1 ? 'Ceremony & Venue Details' : 'Contact & 3D Preferences'}
                </span>
              </div>

              {step === 1 && (
                <div className="space-y-5">
                  {/* City Selection */}
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1.5">
                      1. Select Your Celebration City
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {SAMAROH_CONFIG.CITIES.map(c => (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setCity(c.id)}
                          className={`p-2.5 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                            city === c.id
                              ? 'bg-[#E06D53]/20 border-[#E06D53] text-[#E06D53] font-bold'
                              : 'bg-stone-850 border-stone-800 text-stone-300 hover:border-stone-700'
                          }`}
                        >
                          {c.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Functions Checklist */}
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1.5">
                      2. Which Ceremonies Require Decor &amp; Styling?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {['Haldi', 'Mehendi', 'Sangeet', 'Wedding', 'Reception', 'Cocktail'].map(fn => (
                        <button
                          key={fn}
                          type="button"
                          onClick={() => toggleFunction(fn)}
                          className={`px-3 py-1.5 rounded-lg border text-xs transition-all cursor-pointer ${
                            selectedFunctions.includes(fn)
                              ? 'bg-[#E06D53] border-[#E06D53] text-white font-bold'
                              : 'bg-stone-850 border-stone-800 text-stone-300 hover:border-stone-700'
                          }`}
                        >
                          {fn}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Date & Venue Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1.5">
                        Tentative Event Date
                      </label>
                      <input
                        type="date"
                        value={eventDate}
                        onChange={e => setEventDate(e.target.value)}
                        className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#E06D53]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1.5">
                        Booked / Shortlisted Venue (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., The Tamarind Tree, Taj, etc."
                        value={venueName}
                        onChange={e => setVenueName(e.target.value)}
                        className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#E06D53]"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E06D53] to-[#C8523B] hover:from-[#C8523B] hover:to-[#E06D53] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Continue to Contact Info</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tanvi Rao"
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                        className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#E06D53]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1.5">
                        WhatsApp Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98800 XXXXX"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#E06D53]"
                      />
                    </div>
                  </div>

                  {/* Email & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="you@email.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#E06D53]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1.5">
                        Anticipated Decor Budget
                      </label>
                      <select
                        value={budgetRange}
                        onChange={e => setBudgetRange(e.target.value)}
                        className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#E06D53] cursor-pointer"
                      >
                        <option value="₹2 Lakhs - ₹4 Lakhs">₹2 Lakhs - ₹4 Lakhs (Intimate)</option>
                        <option value="₹4 Lakhs - ₹8 Lakhs">₹4 Lakhs - ₹8 Lakhs (Popular)</option>
                        <option value="₹8 Lakhs - ₹15 Lakhs">₹8 Lakhs - ₹15 Lakhs (Grand)</option>
                        <option value="₹15 Lakhs+">₹15 Lakhs+ (Ultra Luxury / Multi-Day)</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Special Requests */}
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1.5">
                      Specific Design Themes or Requests
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Lotus pond mandap, glasshouse reception, need DJ & sound setup..."
                      value={notes}
                      onChange={e => setNotes(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#E06D53]"
                    />
                  </div>

                  {/* Navigation Buttons */}
                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-3 rounded-xl border border-stone-700 text-stone-300 hover:text-white text-xs font-semibold cursor-pointer"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-[#E06D53] to-[#C8523B] hover:from-[#C8523B] hover:to-[#E06D53] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Routing to {activeCityObj.name} Studio...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          <span>Submit &amp; Schedule 3D Session</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
