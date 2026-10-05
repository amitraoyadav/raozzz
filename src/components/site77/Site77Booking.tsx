import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  Users,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Wine,
  Crown,
  Phone,
  Mail,
  User,
  Tag,
  CreditCard,
  QrCode,
  ArrowRight,
  Download,
  AlertCircle
} from 'lucide-react';
import { site77Config } from '../../config/site77Config';

interface Site77BookingProps {
  initialTableId?: string;
  initialEventTitle?: string;
}

export const Site77Booking: React.FC<Site77BookingProps> = ({
  initialTableId,
  initialEventTitle
}) => {
  // Form State
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [date, setDate] = useState<string>('2026-10-10');
  const [timeSlot, setTimeSlot] = useState<string>('10:30 PM');
  const [guestCount, setGuestCount] = useState<number>(4);
  const [tableTierId, setTableTierId] = useState<string>(
    initialTableId || site77Config.TABLE_TIERS[1].id
  );
  const [occasion, setOccasion] = useState<string>('VIP Night Out');
  const [bottlePreference, setBottlePreference] = useState<string>('Dom Pérignon & Grey Goose');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [couponCode, setCouponCode] = useState<string>('');
  const [couponApplied, setCouponApplied] = useState<boolean>(false);
  const [termsAccepted, setTermsAccepted] = useState<boolean>(true);

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [confirmedBookingId, setConfirmedBookingId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const selectedTier =
    site77Config.TABLE_TIERS.find(t => t.id === tableTierId) || site77Config.TABLE_TIERS[1];

  // Pricing Calculation
  const discountMultiplier = couponApplied ? 0.85 : 1.0;
  const rawMinSpend = selectedTier.minSpend;
  const discountedMinSpend = Math.round(rawMinSpend * discountMultiplier);
  const depositPayable = Math.round(discountedMinSpend * 0.5); // 50% advance booking deposit

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'NOCTURNAVIP') {
      setCouponApplied(true);
      setErrorMessage(null);
    } else {
      setErrorMessage('Invalid coupon code. Try code "NOCTURNAVIP" for 15% VIP advance privilege.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!name.trim()) {
      setErrorMessage('Please provide your full legal name matching government ID.');
      return;
    }
    if (!phone.trim() || phone.length < 8) {
      setErrorMessage('Please enter a valid 10-digit mobile number for WhatsApp verification.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please provide a valid email address for confirmation receipt.');
      return;
    }
    if (!termsAccepted) {
      setErrorMessage('Please acknowledge the 21+ age limit and dress code policy.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `NOC-${Math.floor(10000 + Math.random() * 90000)}`;
      setConfirmedBookingId(generatedId);
    }, 1200);
  };

  const handleReset = () => {
    setConfirmedBookingId(null);
    setName('');
    setPhone('');
    setEmail('');
    setSpecialRequests('');
  };

  return (
    <section className="py-24 bg-[#07080A] relative" id="reservation-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#16140D] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#F3E5AB] uppercase">
              RESERVE YOUR NIGHT
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-[0.08em] text-white uppercase mb-4">
            TABLE RESERVATION & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059]">
              VIP GUESTLIST PASS
            </span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base font-light">
            Secure your preferred VIP table or express guest list passes. All table deposits are 100% 
            credited toward premium bottle service and culinary tapas.
          </p>
        </div>

        {/* If Confirmation Success State */}
        {confirmedBookingId ? (
          <div className="max-w-2xl mx-auto bg-gradient-to-b from-[#161922] to-[#0E1015] border border-[#D4AF37] rounded-3xl p-8 sm:p-12 text-center shadow-2xl animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] flex items-center justify-center mx-auto mb-6 text-[#D4AF37]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="inline-block px-3 py-1 rounded bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F3E5AB] text-xs font-mono font-bold uppercase tracking-widest mb-3">
              VIP RESERVATION CONFIRMED
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white uppercase tracking-wider mb-2">
              YOU ARE ON THE GUEST LIST
            </h3>
            <p className="text-sm text-gray-300 font-light mb-6">
              Thank you, <strong>{name}</strong>. Your luxury table has been reserved at {site77Config.BRAND_NAME} Goa.
            </p>

            {/* Pass QR & Summary Card */}
            <div className="bg-[#07080A] border border-white/10 rounded-2xl p-6 text-left mb-8 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-gray-400 block uppercase">
                    CONFIRMATION ID
                  </span>
                  <span className="font-mono text-xl font-bold text-[#F3E5AB]">
                    #{confirmedBookingId}
                  </span>
                </div>
                <div className="w-14 h-14 bg-white p-1 rounded-lg flex items-center justify-center">
                  <QrCode className="w-12 h-12 text-black" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-gray-400 block text-[10px]">RESERVED TABLE</span>
                  <span className="text-white font-bold">{selectedTier.name}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">DATE & ARRIVAL</span>
                  <span className="text-white font-bold">{date} · {timeSlot}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">GUESTS</span>
                  <span className="text-white font-bold">{guestCount} Patrons (Age 21+)</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">DEPOSIT CREDIT</span>
                  <span className="text-emerald-400 font-bold">
                    ₹{depositPayable.toLocaleString('en-IN')} (100% Redeemable)
                  </span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-3 text-[11px] text-gray-400 font-mono">
                An official confirmation pass and digital entry barcode has been dispatched to <strong>{phone}</strong> and <strong>{email}</strong>.
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${site77Config.WHATSAPP.replace('+', '')}?text=${encodeURIComponent(
                  `Hello Nocturna Concierge, I just booked VIP Reservation #${confirmedBookingId} under ${name}. Please coordinate our bottle preference and valet.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs font-mono uppercase tracking-wider transition-colors flex items-center justify-center space-x-2"
              >
                <span>Notify VIP Concierge on WhatsApp</span>
              </a>

              <button
                onClick={handleReset}
                className="px-6 py-3 rounded border border-white/20 hover:border-white/40 text-gray-300 hover:text-white text-xs font-mono uppercase tracking-wider"
              >
                Book Another Table
              </button>
            </div>
          </div>
        ) : (
          /* Main Interactive Reservation Form */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 Columns: Form Inputs */}
            <div className="lg:col-span-7 bg-[#0E1015] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-xl">
              {errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-red-950/60 border border-red-500/50 flex items-start space-x-3 text-red-200 text-xs">
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Initial Event Reference Notice */}
                {initialEventTitle && (
                  <div className="p-3 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center space-x-2 text-xs text-[#F3E5AB]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Booking for event: <strong>{initialEventTitle}</strong></span>
                  </div>
                )}

                {/* Table Preference Selection */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                    1. Select VIP Table / Seating Tier *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {site77Config.TABLE_TIERS.map(tier => {
                      const isSelected = tableTierId === tier.id;
                      return (
                        <button
                          type="button"
                          key={tier.id}
                          onClick={() => setTableTierId(tier.id)}
                          className={`p-3.5 rounded-xl border text-left transition-all ${
                            isSelected
                              ? 'bg-[#1A1810] border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                              : 'bg-black/40 border-white/10 hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
                            <span className={isSelected ? 'text-[#F3E5AB]' : 'text-white'}>
                              {tier.name}
                            </span>
                            <span className="font-mono text-[#D4AF37] text-xs">
                              {tier.minSpendFormatted}
                            </span>
                          </div>
                          <p className="text-[10px] text-gray-400 font-mono">
                            {tier.capacity} · 100% redeemable
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Date & Time Slot Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                      2. Date *
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg bg-black/60 border border-white/10 text-white text-xs font-mono focus:border-[#D4AF37] focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                      Arrival Time *
                    </label>
                    <select
                      value={timeSlot}
                      onChange={e => setTimeSlot(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg bg-black/60 border border-white/10 text-white text-xs font-mono focus:border-[#D4AF37] focus:outline-none"
                    >
                      <option value="10:00 PM">10:00 PM (Opening Sets)</option>
                      <option value="11:00 PM">11:00 PM (High Energy Peak)</option>
                      <option value="12:00 AM">12:00 AM (Midnight Drop)</option>
                      <option value="1:30 AM">1:30 AM (Late Night Anthems)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                      Guest Count *
                    </label>
                    <select
                      value={guestCount}
                      onChange={e => setGuestCount(Number(e.target.value))}
                      className="w-full px-3 py-2.5 rounded-lg bg-black/60 border border-white/10 text-white text-xs font-mono focus:border-[#D4AF37] focus:outline-none"
                    >
                      <option value={2}>2 Guests (Couple)</option>
                      <option value={4}>4 Guests</option>
                      <option value={6}>6 Guests</option>
                      <option value={8}>8 Guests</option>
                      <option value={10}>10 Guests (Large Group)</option>
                      <option value={15}>15+ Guests (VIP Delegation)</option>
                    </select>
                  </div>
                </div>

                {/* Occasion & Bottle Preference */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                      Occasion
                    </label>
                    <select
                      value={occasion}
                      onChange={e => setOccasion(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg bg-black/60 border border-white/10 text-white text-xs font-mono focus:border-[#D4AF37] focus:outline-none"
                    >
                      <option value="VIP Night Out">VIP Night Out / Party</option>
                      <option value="Milestone Birthday">Milestone Birthday (Sparkler Parade)</option>
                      <option value="Bachelor Party">Bachelor Party</option>
                      <option value="Bachelorette Party">Bachelorette Party</option>
                      <option value="Anniversary">Anniversary Celebration</option>
                      <option value="Corporate Hosting">Corporate VIP Hosting</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                      Preferred Welcome Bottle
                    </label>
                    <select
                      value={bottlePreference}
                      onChange={e => setBottlePreference(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg bg-black/60 border border-white/10 text-white text-xs font-mono focus:border-[#D4AF37] focus:outline-none"
                    >
                      <option value="Dom Pérignon & Grey Goose">Dom Pérignon & Grey Goose</option>
                      <option value="Moët & Chandon Brut">Moët & Chandon Brut Imperial</option>
                      <option value="Macallan 12 Single Malt">Macallan 12 Double Cask</option>
                      <option value="Patrón Añejo Tequila">Patrón Añejo & Reposado Tequila</option>
                      <option value="Hendrick’s Gin & Tonic">Hendrick’s Botanical Gin</option>
                    </select>
                  </div>
                </div>

                {/* Personal Contact Details */}
                <div className="border-t border-white/10 pt-4 space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#D4AF37]">
                    3. Lead Guest Information
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-gray-400 mb-1">
                        Full Name (as per Govt ID) *
                      </label>
                      <div className="relative">
                        <User className="w-3.5 h-3.5 text-gray-500 absolute left-3 top-3" />
                        <input
                          type="text"
                          value={name}
                          onChange={e => setName(e.target.value)}
                          placeholder="Kabir Singhania"
                          className="w-full pl-9 pr-3 py-2 rounded-lg bg-black/60 border border-white/10 text-white text-xs font-mono focus:border-[#D4AF37] focus:outline-none"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-gray-400 mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-3.5 h-3.5 text-gray-500 absolute left-3 top-3" />
                        <input
                          type="tel"
                          value={phone}
                          onChange={e => setPhone(e.target.value)}
                          placeholder="+91 98231 07777"
                          className="w-full pl-9 pr-3 py-2 rounded-lg bg-black/60 border border-white/10 text-white text-xs font-mono focus:border-[#D4AF37] focus:outline-none"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-gray-400 mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-3.5 h-3.5 text-gray-500 absolute left-3 top-3" />
                        <input
                          type="email"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          placeholder="kabir@example.com"
                          className="w-full pl-9 pr-3 py-2 rounded-lg bg-black/60 border border-white/10 text-white text-xs font-mono focus:border-[#D4AF37] focus:outline-none"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-gray-400 mb-1">
                      Special Requests / Dietary / Celebration Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={specialRequests}
                      onChange={e => setSpecialRequests(e.target.value)}
                      placeholder="e.g. Bringing a birthday cake; please arrange sparklers at 12:00 AM."
                      className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/10 text-white text-xs font-mono focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Terms Acceptance */}
                <div className="flex items-start space-x-3 pt-2">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={termsAccepted}
                    onChange={e => setTermsAccepted(e.target.checked)}
                    className="mt-0.5 rounded border-white/20 bg-black/60 text-[#D4AF37] focus:ring-[#D4AF37]"
                  />
                  <label htmlFor="terms" className="text-[11px] text-gray-400 leading-snug">
                    I acknowledge that all guests must be 21+ with valid government photo identification.
                    Gentlemen adhere strictly to the closed-shoe dress code policy.
                  </label>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] text-black font-bold text-xs uppercase tracking-[0.22em] shadow-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Confirming VIP Credentials...</span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Confirm Reservation & Pay ₹{depositPayable.toLocaleString('en-IN')} Deposit</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right 5 Columns: Live Reservation Breakdown & Inclusions */}
            <div className="lg:col-span-5 space-y-6">
              {/* Order / Deposit Summary Card */}
              <div className="bg-[#0E1015] border border-[#D4AF37]/30 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 block uppercase">
                      RESERVATION SUMMARY
                    </span>
                    <h3 className="font-serif text-lg font-bold text-white uppercase">
                      {selectedTier.name}
                    </h3>
                  </div>
                  <Crown className="w-6 h-6 text-[#D4AF37]" />
                </div>

                <div className="space-y-3 text-xs font-mono border-b border-white/10 pb-4 mb-4">
                  <div className="flex justify-between text-gray-300">
                    <span>Date & Arrival:</span>
                    <span className="text-white font-bold">{date} ({timeSlot})</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Party Size:</span>
                    <span className="text-white font-bold">{guestCount} Guests</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>100% Redeemable Min Spend:</span>
                    <span className="text-white font-bold">₹{rawMinSpend.toLocaleString('en-IN')}</span>
                  </div>
                  {couponApplied && (
                    <div className="flex justify-between text-emerald-400">
                      <span>VIP Privilege Discount (15%):</span>
                      <span>-₹{(rawMinSpend - discountedMinSpend).toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-gray-400">
                    <span>Effective Minimum Spend:</span>
                    <span className="text-[#F3E5AB] font-bold">
                      ₹{discountedMinSpend.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Deposit Details */}
                <div className="bg-black/50 p-4 rounded-xl border border-white/5 mb-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono text-gray-300">50% Advance Table Deposit:</span>
                    <span className="text-xl font-mono font-bold text-[#F3E5AB]">
                      ₹{depositPayable.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-400 font-mono">
                    Balance ₹{(discountedMinSpend - depositPayable).toLocaleString('en-IN')} payable at table arrival.
                  </p>
                </div>

                {/* Coupon Code Input */}
                <form onSubmit={handleApplyCoupon} className="flex gap-2 mb-4">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-gray-500 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      value={couponCode}
                      onChange={e => setCouponCode(e.target.value)}
                      placeholder="Coupon: NOCTURNAVIP"
                      className="w-full pl-9 pr-3 py-2 rounded-lg bg-black/60 border border-white/10 text-white text-xs font-mono uppercase focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-white/10 hover:bg-[#D4AF37] hover:text-black text-xs font-mono uppercase tracking-wider text-gray-200 transition-colors"
                  >
                    Apply
                  </button>
                </form>

                {couponApplied && (
                  <p className="text-[11px] text-emerald-400 font-mono mb-4 flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>NOCTURNAVIP applied · 15% VIP advance privilege activated!</span>
                  </p>
                )}

                {/* Inclusions Checklist */}
                <div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-2">
                    INCLUDED TABLE PRIVILEGES:
                  </span>
                  <div className="space-y-1.5">
                    {selectedTier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-[11px] text-gray-300">
                        <CheckCircle2 className="w-3 h-3 text-[#D4AF37] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Concierge Contact Card */}
              <div className="bg-[#12141A] border border-white/10 rounded-2xl p-6 text-center">
                <Wine className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
                <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider mb-1">
                  Need Personalized Assistance?
                </h4>
                <p className="text-xs text-gray-400 mb-4 font-light">
                  Our Chief VIP Concierge is ready to customize your bottle packages, arrange VIP transport, or curate birthday sparkler shows.
                </p>
                <a
                  href={`tel:${site77Config.PHONE}`}
                  className="inline-flex items-center space-x-2 text-xs font-mono text-[#D4AF37] hover:text-[#F3E5AB] font-bold"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call VIP Desk: {site77Config.PHONE_DISPLAY}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
