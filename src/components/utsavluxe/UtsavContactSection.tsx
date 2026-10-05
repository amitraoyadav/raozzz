import React, { useState } from 'react';
import { UTSAV_BUSINESS_CONFIG } from '../../data/utsavLuxeData';

interface UtsavContactSectionProps {
  initialCity?: string;
  defaultService?: string;
}

export const UtsavContactSection: React.FC<UtsavContactSectionProps> = ({
  initialCity = 'bengaluru',
  defaultService = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: initialCity,
    eventType: defaultService || 'Full 3-Day Wedding (Turnkey)',
    eventDate: '',
    guestCount: '300',
    budgetRange: '₹15L – ₹30L',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMsg('Please provide your name, phone number, and email.');
      return;
    }
    setErrorMsg('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hi Utsav Luxe Team! My name is ${formData.name || 'there'}. I am planning a ${formData.eventType} in ${formData.city.toUpperCase()} with ~${formData.guestCount} guests around ${formData.eventDate || 'soon'}. I would like to schedule a free 3D design consultation.`
    );
    window.open(`https://wa.me/${UTSAV_BUSINESS_CONFIG.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-stone-50 text-stone-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E05A47]/10 text-[#E05A47] text-xs font-bold uppercase tracking-wider mb-3">
            Get In Touch
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 tracking-tight">
            Let’s Plan Your Celebration
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            Schedule your private consultation at our flagship studios or connect virtually. 
            Receive a complimentary 3D mandap render and itemized cost matrix within 48 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-stone-200">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl mx-auto">
                  ✓
                </div>
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  Inquiry Received with Joy!
                </h3>
                <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-stone-900">{formData.name}</span>. 
                  Our Senior Wedding Director for <span className="font-bold text-[#E05A47]">{formData.city.toUpperCase()}</span> will 
                  contact you on <span className="font-bold text-stone-900">{formData.phone}</span> within 15 minutes during business hours.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Connect on WhatsApp Now</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                    </svg>
                  </button>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-stone-500 hover:text-stone-800 underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {errorMsg && (
                  <div className="p-3 rounded-lg bg-red-50 text-red-700 text-xs font-medium border border-red-200">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Radhika Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-[#E05A47] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-[#E05A47] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="radhika@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-[#E05A47] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Target Wedding City
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm font-semibold bg-stone-50 focus:ring-2 focus:ring-[#E05A47] focus:outline-none"
                    >
                      {UTSAV_BUSINESS_CONFIG.cities.map(c => (
                        <option key={c.id} value={c.id}>{c.name} ({c.tag})</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Approximate Date
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-[#E05A47] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Expected Guests
                    </label>
                    <select
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs bg-stone-50 focus:ring-2 focus:ring-[#E05A47] focus:outline-none"
                    >
                      <option value="150">50 – 150 (Intimate)</option>
                      <option value="300">150 – 350 (Medium)</option>
                      <option value="600">350 – 700 (Grand)</option>
                      <option value="1200">700+ (Monumental)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Target Budget
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs bg-stone-50 focus:ring-2 focus:ring-[#E05A47] focus:outline-none"
                    >
                      <option value="₹5L – ₹10L">₹5L – ₹10L</option>
                      <option value="₹10L – ₹20L">₹10L – ₹20L</option>
                      <option value="₹20L – ₹40L">₹20L – ₹40L</option>
                      <option value="₹40L+">₹40 Lakhs+ (Royal Bespoke)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Event Type / Services Needed
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm bg-stone-50 focus:ring-2 focus:ring-[#E05A47] focus:outline-none"
                  >
                    <option value="Full 3-Day Wedding (Turnkey)">Full 3-Day Wedding (Turnkey Decor + Planning)</option>
                    <option value="Decor & Scenography Only">Decor & Scenography Only (Mandap, Stage & Entry)</option>
                    <option value="Turnkey Planning & Logistics Only">Turnkey Planning & Day-of Logistics Squad</option>
                    <option value="Sangeet & Cocktail Mega Night">Sangeet & Cocktail Stage Production</option>
                    <option value="Destination Palace Takeover">Destination Palace / Beachfront Takeover</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Additional Notes / Specific Aesthetic Wishes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention specific venue, Pinterest themes, floral preferences, or family traditions..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-[#E05A47] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#E05A47] to-[#C94330] hover:from-[#C94330] hover:to-[#B33524] shadow-md shadow-[#E05A47]/30 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                >
                  {loading ? 'Submitting Your Request...' : 'Schedule Free 3D Recce Consultation'}
                </button>

                <div className="flex items-center justify-between text-[11px] text-stone-500 pt-2">
                  <span>🔒 100% Confidential. Zero spam.</span>
                  <span>Estimated Response Time: 15 Mins</span>
                </div>

              </form>
            )}
          </div>

          {/* Contact Details & Studios Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="bg-stone-950 text-white rounded-2xl p-6 sm:p-8 border border-stone-800 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF8D7B]">
                  Direct Studio Concierge
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mt-1">
                  Connect With Us Today
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-stone-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#FF8D7B]">
                    📞
                  </div>
                  <div>
                    <span className="text-[11px] text-stone-400 block font-medium">Toll-Free Phone</span>
                    <a href={`tel:${UTSAV_BUSINESS_CONFIG.phoneRaw}`} className="font-bold text-white hover:text-[#FF8D7B]">
                      {UTSAV_BUSINESS_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-emerald-400">
                    💬
                  </div>
                  <div>
                    <span className="text-[11px] text-stone-400 block font-medium">WhatsApp Direct</span>
                    <a href={UTSAV_BUSINESS_CONFIG.whatsappLink} target="_blank" rel="noreferrer" className="font-bold text-white hover:text-emerald-400">
                      {UTSAV_BUSINESS_CONFIG.whatsappNumber} (Instant Reply)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-amber-400">
                    ✉️
                  </div>
                  <div>
                    <span className="text-[11px] text-stone-400 block font-medium">Email Inquiries</span>
                    <a href={`mailto:${UTSAV_BUSINESS_CONFIG.email}`} className="font-bold text-white hover:text-amber-300">
                      {UTSAV_BUSINESS_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-blue-400">
                    🏢
                  </div>
                  <div>
                    <span className="text-[11px] text-stone-400 block font-medium">Headquarters Studio</span>
                    <p className="text-white font-medium">
                      {UTSAV_BUSINESS_CONFIG.headquarters}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-stone-400">
                Hours: {UTSAV_BUSINESS_CONFIG.workingHours}
              </div>
            </div>

            {/* City Studios List */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                Flagship Experience Studios:
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-stone-800">
                <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                  <span className="text-[#E05A47]">📍</span> Bengaluru (Indiranagar)
                </div>
                <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                  <span className="text-[#E05A47]">📍</span> Delhi NCR (Mehrauli)
                </div>
                <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                  <span className="text-[#E05A47]">📍</span> Mumbai (Bandra West)
                </div>
                <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                  <span className="text-[#E05A47]">📍</span> Hyderabad (Jubilee Hills)
                </div>
                <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                  <span className="text-[#E05A47]">📍</span> Jaipur (Civil Lines)
                </div>
                <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                  <span className="text-[#E05A47]">📍</span> Goa (Candolim Beach)
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
