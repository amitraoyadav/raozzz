import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar,
  Users,
  Ticket,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Download,
  Share2,
  MessageCircle,
  Percent,
  QrCode,
  ArrowRight
} from 'lucide-react';
import { site79Config } from '../../config/site79Config';
import { WEEKLY_LINEUP_EVENTS } from '../../data/site79Data';

export type BookingModalMode = 'table' | 'guestlist' | 'walkin' | 'offer';

interface Site79BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: BookingModalMode;
  initialEventName?: string;
  initialOfferTitle?: string;
}

export const Site79BookingModal: React.FC<Site79BookingModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'table',
  initialEventName,
  initialOfferTitle
}) => {
  const [mode, setMode] = useState<BookingModalMode>(initialMode);

  // Form states
  const [selectedDate, setSelectedDate] = useState<string>('2026-10-10');
  const [selectedEvent, setSelectedEvent] = useState<string>(
    initialEventName || WEEKLY_LINEUP_EVENTS[0].name
  );
  const [guestCount, setGuestCount] = useState<number>(4);
  const [tableTier, setTableTier] = useState<'main' | 'mezzanine' | 'vvip'>('mezzanine');
  const [guestlistType, setGuestlistType] = useState<'couple' | 'female' | 'stag_accompanied'>('couple');
  const [walkinPasses, setWalkinPasses] = useState<number>(2);

  // Contact details
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [agreedTerms, setAgreedTerms] = useState<boolean>(true);

  // Flow states
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [confirmationCode, setConfirmationCode] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    if (initialMode) setMode(initialMode);
    if (initialEventName) setSelectedEvent(initialEventName);
    setIsConfirmed(false);
    setErrorMsg('');
  }, [initialMode, initialEventName, isOpen]);

  if (!isOpen) return null;

  // Table pricing calculation
  const tableBasePrice =
    tableTier === 'main' ? 20000 : tableTier === 'mezzanine' ? 35000 : 60000;
  const tableDiscountPercent = 20; // 20% online discount
  const tableDiscountAmount = (tableBasePrice * tableDiscountPercent) / 100;
  const tableFinalPayable = tableBasePrice - tableDiscountAmount;

  // Walk-in pricing
  const walkinPricePerPass = 2000; // 100% redeemable cover
  const walkinFinalPayable = walkinPasses * walkinPricePerPass;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim()) {
      setErrorMsg('Please enter your primary guest name.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!agreedTerms) {
      setErrorMsg('Please accept the venue 25+ age & dress code policy.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const randomRef = 'ELY-' + Math.floor(100000 + Math.random() * 900000);
      setConfirmationCode(randomRef);
      setIsConfirmed(true);
    }, 700);
  };

  const shareToWhatsApp = () => {
    let msg = '';
    if (mode === 'table') {
      msg = `Hi Elysium! I just reserved Table ${confirmationCode} on ${selectedDate} for ${guestCount} guests (${tableTier.toUpperCase()} VIP). Final Payable: ₹${tableFinalPayable.toLocaleString('en-IN')}.`;
    } else if (mode === 'guestlist') {
      msg = `Hi Elysium! I joined Guestlist ${confirmationCode} for ${selectedEvent} on ${selectedDate} (${guestlistType}). Name: ${fullName}.`;
    } else {
      msg = `Hi Elysium! I booked VIP Walk-in Pass ${confirmationCode} for ${walkinPasses} guests on ${selectedDate}. Total Cover: ₹${walkinFinalPayable.toLocaleString('en-IN')}.`;
    }
    window.open(`https://wa.me/${site79Config.WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-xl animate-fadeIn overflow-y-auto"
    >
      <div
        className="relative w-full max-w-2xl bg-gradient-to-b from-[#141009] via-[#0d0a06] to-[#070604] border border-[#DFB759]/40 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#DFB759]/20 border border-[#DFB759]/40 flex items-center justify-center text-[#DFB759]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-['Cinzel',serif] text-lg sm:text-xl font-black text-white uppercase tracking-wider">
                {mode === 'table' && 'Reserve VIP Table'}
                {mode === 'guestlist' && 'Join Nightclub Guestlist'}
                {mode === 'walkin' && 'VIP Walk-In Pass'}
                {mode === 'offer' && (initialOfferTitle || 'Claim Special Privilege')}
              </h3>
              <p className="text-[10px] sm:text-xs text-[#DFB759] uppercase tracking-widest font-semibold">
                {site79Config.SHORT_BRAND} • Shangri-La Eros New Delhi
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-[#DFB759] transition-colors cursor-pointer"
            aria-label="Close Booking Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher if not yet confirmed */}
        {!isConfirmed && (
          <div className="flex border-b border-white/10 bg-black/40 p-2 gap-1.5 shrink-0">
            <button
              onClick={() => {
                setMode('table');
                setErrorMsg('');
              }}
              className={`flex-1 py-2 px-2 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                mode === 'table'
                  ? 'bg-gradient-to-r from-[#DFB759] to-[#F4D774] text-black shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>VIP Table (20% Off)</span>
            </button>

            <button
              onClick={() => {
                setMode('guestlist');
                setErrorMsg('');
              }}
              className={`flex-1 py-2 px-2 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                mode === 'guestlist'
                  ? 'bg-gradient-to-r from-[#DFB759] to-[#F4D774] text-black shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Guestlist</span>
            </button>

            <button
              onClick={() => {
                setMode('walkin');
                setErrorMsg('');
              }}
              className={`flex-1 py-2 px-2 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                mode === 'walkin'
                  ? 'bg-gradient-to-r from-[#DFB759] to-[#F4D774] text-black shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Ticket className="w-3.5 h-3.5" />
              <span>Walk-ins</span>
            </button>
          </div>
        )}

        {/* Body Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* CONFIRMATION SCREEN */}
          {isConfirmed ? (
            <div className="text-center py-6 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#DFB759]/20 border-2 border-[#DFB759] mx-auto flex items-center justify-center text-[#DFB759] shadow-[0_0_30px_rgba(223,183,89,0.5)]">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs uppercase font-extrabold text-[#DFB759] tracking-widest block mb-1">
                  Pass Confirmed & Priority Reserved
                </span>
                <h4 className="text-2xl sm:text-3xl font-black font-['Cinzel',serif] text-white">
                  Welcome to Elysium The Ecstasy
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto mt-2 font-['Inter']">
                  Your digital reservation voucher has been generated. Please display this reference or QR pass at the Shangri-La hotel concierge desk.
                </p>
              </div>

              {/* Digital Pass Card */}
              <div className="max-w-md mx-auto rounded-3xl bg-[#090704] border-2 border-[#DFB759]/50 p-6 text-left shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#DFB759]/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div>
                    <span className="text-[10px] font-bold text-[#DFB759] uppercase tracking-widest block">
                      Digital Access Pass
                    </span>
                    <span className="font-['Cinzel',serif] text-xl font-black text-white">
                      {confirmationCode}
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center shadow-md">
                    <QrCode className="w-10 h-10 text-black" />
                  </div>
                </div>

                <div className="py-4 space-y-2 text-xs text-gray-300 font-['Inter']">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Primary Guest:</span>
                    <span className="font-bold text-white">{fullName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Date:</span>
                    <span className="font-bold text-white">{selectedDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Reservation Type:</span>
                    <span className="font-bold text-[#DFB759] uppercase">
                      {mode === 'table' ? `${tableTier.toUpperCase()} VIP TABLE` : mode.toUpperCase()}
                    </span>
                  </div>
                  {mode === 'table' && (
                    <div className="flex justify-between border-t border-white/10 pt-2 text-sm">
                      <span className="text-gray-400">Total F&B Credit (100% Spendable):</span>
                      <span className="font-black text-[#DFB759]">₹{tableFinalPayable.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  {mode === 'walkin' && (
                    <div className="flex justify-between border-t border-white/10 pt-2 text-sm">
                      <span className="text-gray-400">Total Spendable Cover:</span>
                      <span className="font-black text-[#DFB759]">₹{walkinFinalPayable.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-white/10 text-[10px] text-gray-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#DFB759]" />
                  <span>Physical Govt ID 25+ Mandatory • Upscale Dress Code Enforced</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={shareToWhatsApp}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#DFB759] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Confirm on WhatsApp</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* BOOKING FORM */
            <form onSubmit={handleSubmit} className="space-y-5 font-['Inter']">
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/40 text-rose-300 text-xs font-semibold">
                  {errorMsg}
                </div>
              )}

              {/* MODE 1: VIP TABLE SPECIFIC SELECTORS */}
              {mode === 'table' && (
                <div className="space-y-4">
                  {/* 20% OFF Announcement Banner */}
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-[#DFB759]/20 via-[#DFB759]/10 to-transparent border border-[#DFB759]/40">
                    <div className="flex items-center gap-2.5">
                      <Percent className="w-4 h-4 text-[#DFB759]" />
                      <span className="text-xs font-bold text-white">
                        Online Privilege: <span className="text-[#DFB759]">Flat 20% Discount</span> on Table Bookings
                      </span>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-[#DFB759] text-black">
                      Active
                    </span>
                  </div>

                  {/* Table Tier Selector */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block mb-2">
                      Select VIP Table Tier
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { id: 'main', name: 'Arena Table', price: 20000, desc: 'Dance floor perimeter' },
                        { id: 'mezzanine', name: 'Mezzanine VIP', price: 35000, desc: 'Elevated luxury banquette' },
                        { id: 'vvip', name: 'Owner’s Stage Booth', price: 60000, desc: 'Prime DJ deck VIP suite' }
                      ].map((tier) => (
                        <div
                          key={tier.id}
                          onClick={() => setTableTier(tier.id as any)}
                          className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                            tableTier === tier.id
                              ? 'bg-[#DFB759]/15 border-[#DFB759] ring-1 ring-[#DFB759]'
                              : 'bg-white/5 border-white/10 hover:border-white/30'
                          }`}
                        >
                          <div className="text-xs font-bold text-white font-['Cinzel',serif]">
                            {tier.name}
                          </div>
                          <div className="text-sm font-black text-[#DFB759] mt-1">
                            ₹{tier.price.toLocaleString('en-IN')}
                          </div>
                          <div className="text-[10px] text-gray-400 mt-0.5">
                            {tier.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Date & Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block mb-1.5">
                        Reservation Date
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:outline-none focus:border-[#DFB759]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block mb-1.5">
                        Party Size
                      </label>
                      <select
                        value={guestCount}
                        onChange={(e) => setGuestCount(Number(e.target.value))}
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-white text-xs focus:outline-none focus:border-[#DFB759]"
                      >
                        {[2, 4, 6, 8, 10, 12, 15, 20].map((num) => (
                          <option key={num} value={num}>
                            {num} Guests
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Summary Breakdown */}
                  <div className="p-4 rounded-2xl bg-black/50 border border-white/10 text-xs space-y-1.5">
                    <div className="flex justify-between text-gray-400">
                      <span>Standard Table Cover:</span>
                      <span>₹{tableBasePrice.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-[#DFB759] font-semibold">
                      <span>Website Privilege (20% OFF):</span>
                      <span>-₹{tableDiscountAmount.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-white font-bold text-sm pt-2 border-t border-white/10">
                      <span>Payable Online (100% F&B Credit):</span>
                      <span className="text-[#DFB759] font-black">₹{tableFinalPayable.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* MODE 2: GUESTLIST SPECIFIC SELECTORS */}
              {mode === 'guestlist' && (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block mb-1.5">
                      Select Night / Event
                    </label>
                    <select
                      value={selectedEvent}
                      onChange={(e) => setSelectedEvent(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-white text-xs focus:outline-none focus:border-[#DFB759]"
                    >
                      {WEEKLY_LINEUP_EVENTS.map((evt) => (
                        <option key={evt.id} value={evt.name}>
                          {evt.day} — {evt.name} ({evt.time})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block mb-2">
                      Guestlist Entry Category
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { id: 'couple', label: 'Couples (RSVP)', sub: 'Complimentary before 12:30 AM' },
                        { id: 'female', label: 'Females / Girls Group', sub: 'Complimentary entry + drinks' },
                        { id: 'stag_accompanied', label: 'Stag (With Couple)', sub: 'Subject to door profile check' }
                      ].map((t) => (
                        <div
                          key={t.id}
                          onClick={() => setGuestlistType(t.id as any)}
                          className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                            guestlistType === t.id
                              ? 'bg-[#DFB759]/15 border-[#DFB759] ring-1 ring-[#DFB759]'
                              : 'bg-white/5 border-white/10 hover:border-white/30'
                          }`}
                        >
                          <div className="text-xs font-bold text-white">{t.label}</div>
                          <div className="text-[10px] text-gray-400 mt-1">{t.sub}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* MODE 3: VIP WALK-IN SPECIFIC SELECTORS */}
              {mode === 'walkin' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                    <span className="text-xs font-bold text-[#DFB759] uppercase tracking-wider block">
                      Queue Skip Priority Walk-In
                    </span>
                    <p className="text-xs text-gray-300 font-light leading-relaxed">
                      Prepaying cover charge online reserves your priority door entry pass and bypasses the main line outside the hotel. The entire amount is 100% spendable credit at the bar.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block mb-1.5">
                        Date of Visit
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:outline-none focus:border-[#DFB759]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block mb-1.5">
                        Number of Passes
                      </label>
                      <select
                        value={walkinPasses}
                        onChange={(e) => setWalkinPasses(Number(e.target.value))}
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-white text-xs focus:outline-none focus:border-[#DFB759]"
                      >
                        {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                          <option key={num} value={num}>
                            {num} Person Pass (₹{(num * 2000).toLocaleString('en-IN')})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* COMMON GUEST DETAILS */}
              <div className="space-y-4 pt-2 border-t border-white/10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#DFB759] block">
                  Lead Guest Information
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-300 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Malhotra"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#DFB759]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-300 block mb-1">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98112 34567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#DFB759]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. vikram@malhotragroup.in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#DFB759]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-1">
                    Special Occasion or Bottle Preference
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Birthday Celebration, Dom Pérignon Sparkler, Preferred corner booth"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#DFB759]"
                  />
                </div>

                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="termsCheck"
                    checked={agreedTerms}
                    onChange={(e) => setAgreedTerms(e.target.checked)}
                    className="mt-1 accent-[#DFB759] rounded cursor-pointer"
                  />
                  <label htmlFor="termsCheck" className="text-[11px] text-gray-400 leading-snug cursor-pointer">
                    I confirm that all members of our group are 25+ years old and adhere to the upscale dress code (no shorts, track pants, or open slippers).
                  </label>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#DFB759] via-[#F4D774] to-[#DFB759] text-black font-extrabold text-sm uppercase tracking-wider hover:brightness-110 hover:shadow-[0_0_30px_rgba(223,183,89,0.6)] transition-all cursor-pointer shadow-lg disabled:opacity-50 text-center flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Generating Access Pass...</span>
                  ) : (
                    <>
                      <span>
                        {mode === 'table' && `Confirm Table Reservation • ₹${tableFinalPayable.toLocaleString('en-IN')}`}
                        {mode === 'guestlist' && 'Submit Guestlist Registration (RSVP)'}
                        {mode === 'walkin' && `Confirm Priority Passes • ₹${walkinFinalPayable.toLocaleString('en-IN')}`}
                        {mode === 'offer' && 'Claim Special Online Offer'}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
