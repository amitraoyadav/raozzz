import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar,
  Users,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Download,
  Share2,
  MessageCircle,
  QrCode,
  ArrowRight
} from 'lucide-react';
import { UPCOMING_EVENTS } from '../../data/site80Data';
import { site80Config } from '../../config/site80Config';

interface Site80BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultEventTitle?: string;
}

export const Site80BookingModal: React.FC<Site80BookingModalProps> = ({
  isOpen,
  onClose,
  defaultEventTitle
}) => {
  const [activeTab, setActiveTab] = useState<'table' | 'guestlist'>('table');
  const [selectedEvent, setSelectedEvent] = useState<string>(
    defaultEventTitle || UPCOMING_EVENTS[0].title
  );
  const [date, setDate] = useState<string>('2026-03-14');
  const [guests, setGuests] = useState<number>(4);
  const [section, setSection] = useState<'arena' | 'mezzanine' | 'booth'>('mezzanine');
  const [guestType, setGuestType] = useState<'couple' | 'ladies' | 'vip_stag'>('couple');

  // Contact fields
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');

  const [loading, setLoading] = useState<boolean>(false);
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  useEffect(() => {
    if (defaultEventTitle) {
      setSelectedEvent(defaultEventTitle);
    }
  }, [defaultEventTitle]);

  if (!isOpen) return null;

  const sectionPrices: Record<string, { minSpend: number; title: string; perk: string }> = {
    arena: {
      minSpend: 25000,
      title: 'Main Arena Table',
      perk: 'Direct dance floor proximity, 100% redeemable credit on food & premium spirits.'
    },
    mezzanine: {
      minSpend: 45000,
      title: 'VIP Mezzanine Suite',
      perk: 'Elevated panoramic views, private steward, Dom Pérignon sparkler presentation.'
    },
    booth: {
      minSpend: 75000,
      title: "Owner's Ultra Booth",
      perk: 'Exclusive private cordon, bodyguard security, customized LED name scroll, vintage Champagne.'
    }
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('Please enter your name and phone number.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const randomRef = `NB-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingRef(randomRef);
      setLoading(false);
      setConfirmed(true);
    }, 800);
  };

  const resetForm = () => {
    setConfirmed(false);
    setBookingRef('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn font-['Inter']"
    >
      <div className="relative w-full max-w-2xl bg-[#0d0d0d] border border-white/20 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="relative px-6 py-5 border-b border-white/10 bg-gradient-to-r from-black via-[#141414] to-black flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFD700] shadow-[0_0_10px_#FFD700]" />
            <h2 className="text-xl sm:text-2xl font-bold font-['Alegreya_Sans',sans-serif] uppercase tracking-wide text-white">
              {confirmed ? 'Reservation Pass Confirmed' : 'Club Noir Blanc Access'}
            </h2>
          </div>

          <button
            onClick={resetForm}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {!confirmed ? (
            <>
              {/* Mode Toggle: Table Reservation vs Guestlist */}
              <div className="grid grid-cols-2 gap-3 p-1.5 rounded-2xl bg-black border border-white/10">
                <button
                  type="button"
                  onClick={() => setActiveTab('table')}
                  className={`py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === 'table'
                      ? 'bg-[#FFD700] text-black shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  VIP Table Reservation
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('guestlist')}
                  className={`py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === 'guestlist'
                      ? 'bg-[#FFD700] text-black shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Join Guestlist
                </button>
              </div>

              {/* Event Picker Notice */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#FFD700]" />
                  <span className="text-gray-300">Selected Night:</span>
                  <span className="font-bold text-white">{selectedEvent}</span>
                </div>
                <span className="text-[10px] text-[#FFD700] font-mono uppercase">Doors: 9 PM</span>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleBooking} className="space-y-5">
                {activeTab === 'table' ? (
                  <>
                    {/* Section Selector */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Choose Section Preference
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {(['arena', 'mezzanine', 'booth'] as const).map((sec) => (
                          <div
                            key={sec}
                            onClick={() => setSection(sec)}
                            className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                              section === sec
                                ? 'bg-[#FFD700]/10 border-[#FFD700] text-white shadow-md'
                                : 'bg-black/60 border-white/10 text-gray-400 hover:border-white/25'
                            }`}
                          >
                            <span className="text-xs font-bold block text-white">
                              {sectionPrices[sec].title}
                            </span>
                            <span className="text-[11px] text-[#FFD700] font-semibold block mt-0.5 font-mono">
                              Min ₹{sectionPrices[sec].minSpend.toLocaleString('en-IN')} Spend
                            </span>
                            <p className="text-[10px] text-gray-400 mt-1 line-clamp-2">
                              {sectionPrices[sec].perk}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Guests & Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-300 mb-1.5">
                          Reservation Date *
                        </label>
                        <input
                          type="date"
                          required
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#FFD700] text-xs text-white outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-gray-300 mb-1.5">
                          Party Size (Guests) *
                        </label>
                        <select
                          value={guests}
                          onChange={(e) => setGuests(Number(e.target.value))}
                          className="w-full px-4 py-2.5 rounded-xl bg-black border border-white/10 focus:border-[#FFD700] text-xs text-white outline-none"
                        >
                          {[2, 4, 6, 8, 10, 12, 15, 20].map((num) => (
                            <option key={num} value={num}>
                              {num} Guests (Couple/Mixed Group)
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Guestlist Specific options */}
                    <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 space-y-1">
                      <p className="font-semibold flex items-center gap-1.5 text-[#FFD700]">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Club Admission & Guestlist Protocol</span>
                      </p>
                      <p className="text-[11px] text-gray-300">
                        Guestlist is valid strictly for Couples and Single Ladies arriving before 11:30 PM. Male stags require prior table reservation or management approval.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-300 mb-1.5">
                          Entry Type *
                        </label>
                        <select
                          value={guestType}
                          onChange={(e) => setGuestType(e.target.value as any)}
                          className="w-full px-4 py-2.5 rounded-xl bg-black border border-white/10 focus:border-[#FFD700] text-xs text-white outline-none"
                        >
                          <option value="couple">Couple Entry (Complimentary till 11:30 PM)</option>
                          <option value="ladies">Ladies Entry (Free Flow drinks till midnight)</option>
                          <option value="vip_stag">VIP Male Stag (Subject to Cover Charge)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-gray-300 mb-1.5">
                          Date of Visit *
                        </label>
                        <input
                          type="date"
                          required
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#FFD700] text-xs text-white outline-none"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Contact Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sameer Kapoor"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#FFD700] text-xs text-white placeholder-gray-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      WhatsApp Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98110 xxxxx"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#FFD700] text-xs text-white placeholder-gray-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="sameer@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#FFD700] text-xs text-white placeholder-gray-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Celebration / Special Occasion / Bottle Preference
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Birthday celebration, Dom Pérignon bottle parade requested..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#FFD700] text-xs text-white placeholder-gray-500 outline-none"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full bg-[#FFD700] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-[0_0_25px_rgba(255,215,0,0.5)] flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Securing Reservation Pass...</span>
                  ) : (
                    <>
                      <span>
                        {activeTab === 'table' ? 'Confirm Table Reservation' : 'Submit Guestlist RSVP'}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            /* Confirmation Pass Screen */
            <div className="space-y-6 text-center animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#FFD700]/20 border border-[#FFD700] text-[#FFD700] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#FFD700]">
                  Official Confirmation
                </span>
                <h3 className="text-3xl font-bold font-['Alegreya_Sans',sans-serif] text-white mt-1">
                  You are On the List
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Present this digital voucher or reference code at the front reception desk.
                </p>
              </div>

              {/* Digital Pass Card */}
              <div className="p-6 rounded-3xl bg-black border border-[#FFD700]/40 text-left space-y-4 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <span className="text-[10px] font-mono text-gray-400">BOOKING REFERENCE</span>
                    <p className="text-xl font-black font-mono text-[#FFD700]">{bookingRef}</p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/40 text-[#FFD700] text-[10px] font-bold uppercase tracking-wider">
                    {activeTab === 'table' ? sectionPrices[section].title : 'Guestlist Pass'}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-gray-400 text-[10px] block">GUEST NAME</span>
                    <span className="font-bold text-white">{name}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-[10px] block">CONTACT PHONE</span>
                    <span className="font-bold text-white">{phone}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-[10px] block">DATE OF VISIT</span>
                    <span className="font-bold text-white">{date}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-[10px] block">VENUE</span>
                    <span className="font-bold text-white">The Suryaa New Delhi</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
                  <span>Dress Code: Upscale Club Chic</span>
                  <span>Doors Open: 9:00 PM</span>
                </div>
              </div>

              {/* WhatsApp Concierge Dispatch */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/${site80Config.WHATSAPP}?text=Hi%20Club%20Noir%20Blanc%2C%20my%20reservation%20ref%20is%20${bookingRef}%20for%20${name}.%20Please%20confirm%20my%20arrival.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#25D366] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send Confirmation to Host</span>
                </a>

                <button
                  onClick={resetForm}
                  className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Done & Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
