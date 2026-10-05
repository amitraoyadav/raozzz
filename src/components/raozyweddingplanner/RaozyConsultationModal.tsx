import React, { useState } from 'react';
import { raozyConfig } from '../../config/raozyWeddingConfig';

interface RaozyConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledNotes?: string;
  initialDestination?: string;
}

export const RaozyConsultationModal: React.FC<RaozyConsultationModalProps> = ({
  isOpen,
  onClose,
  prefilledNotes = '',
  initialDestination = 'delhi'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    weddingDate: '',
    destination: initialDestination,
    guestRange: '250',
    budgetTier: '50-100',
    notes: prefilledNotes
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppInstant = () => {
    const text = `*VIP Wedding Consultation Request — ${raozyConfig.SITE_NAME}*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Wedding Date: ${formData.weddingDate || 'TBD'}
Destination: ${formData.destination}
Guests: ${formData.guestRange}
Budget: ${formData.budgetTier} Lakhs
Notes: ${formData.notes || 'Requesting Senior Director date review.'}`;

    window.open(`https://wa.me/${raozyConfig.WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#161310] border border-[#DFC082]/40 rounded-2xl p-6 sm:p-8 text-stone-200 shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-white p-2 text-xl focus:outline-none"
          aria-label="Close Modal"
        >
          ✕
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#DFC082]/20 border border-[#DFC082] text-[#DFC082] mx-auto flex items-center justify-center text-xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-serif font-bold text-white">
              Consultation Reserved
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.name}</strong>. 
              A Senior Wedding Director will contact you within 30 minutes to confirm date exclusivity.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={handleWhatsAppInstant}
                className="px-6 py-2.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-serif font-bold uppercase tracking-wider transition"
              >
                Open Direct WhatsApp Thread
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2.5 rounded bg-stone-900 text-stone-400 text-xs hover:text-white border border-stone-800 transition"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 border-b border-stone-800 pb-4">
              <span className="text-[10px] font-serif text-[#DFC082] uppercase tracking-widest block mb-1">
                Strict 60-Weddings-a-Year Limit
              </span>
              <h3 className="text-2xl font-serif font-semibold text-white">
                Check Wedding Date Availability
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                Speak directly with a Founding Director to evaluate your venue shortlist and custom decor feasibility.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#DFC082] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-stone-900 border border-stone-800 text-white text-xs placeholder-stone-600 focus:outline-none focus:border-[#DFC082]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#DFC082] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98118 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-stone-900 border border-stone-800 text-white text-xs placeholder-stone-600 focus:outline-none focus:border-[#DFC082]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#DFC082] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-stone-900 border border-stone-800 text-white text-xs placeholder-stone-600 focus:outline-none focus:border-[#DFC082]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#DFC082] mb-1">
                    Target Date / Month
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. December 2025"
                    value={formData.weddingDate}
                    onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-stone-900 border border-stone-800 text-white text-xs placeholder-stone-600 focus:outline-none focus:border-[#DFC082]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#DFC082] mb-1">
                    Wedding Destination
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-stone-900 border border-stone-800 text-white text-xs focus:outline-none focus:border-[#DFC082]"
                  >
                    <option value="delhi">Gurugram / Delhi NCR</option>
                    <option value="udaipur">Udaipur Lake Palaces</option>
                    <option value="jaipur">Jaipur Heritage Forts</option>
                    <option value="goa">South Goa Beachfront</option>
                    <option value="corbett">Jim Corbett Wilderness</option>
                    <option value="dubai">Dubai &amp; UAE</option>
                    <option value="other">Other Destination</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#DFC082] mb-1">
                    Estimated Guests
                  </label>
                  <select
                    value={formData.guestRange}
                    onChange={(e) => setFormData({ ...formData, guestRange: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-stone-900 border border-stone-800 text-white text-xs focus:outline-none focus:border-[#DFC082]"
                  >
                    <option value="100">Intimate (Up to 100)</option>
                    <option value="250">200 to 350 Guests</option>
                    <option value="500">400 to 600 Guests</option>
                    <option value="800">700 to 1,000+ Guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-serif uppercase tracking-wider text-[#DFC082] mb-1">
                  Specific Requirements / Venue Ideas
                </label>
                <textarea
                  rows={2}
                  placeholder="Any venues shortlisted, budget considerations, or decor preferences..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 rounded bg-stone-900 border border-stone-800 text-white text-xs placeholder-stone-600 focus:outline-none focus:border-[#DFC082]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 rounded bg-gradient-to-r from-[#C5A059] to-[#DFC082] text-[#171410] font-serif font-bold text-xs tracking-wider uppercase shadow hover:brightness-110 active:scale-95 transition"
                >
                  Confirm Availability Check
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppInstant}
                  className="py-3 px-4 rounded bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-sans flex items-center justify-center gap-1.5 transition"
                >
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
