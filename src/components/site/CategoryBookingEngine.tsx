import React, { useState } from 'react';
import { BusinessWebsite, BookingPatternType, LeadEnquiry, ItemOrService } from '../../types';
import {
  Calendar,
  Clock,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2,
  Users,
  Smartphone,
  Sparkles,
  ShoppingBag,
  FileText,
  Search,
  AlertCircle
} from 'lucide-react';

interface CategoryBookingEngineProps {
  site: BusinessWebsite;
  selectedItem?: ItemOrService | null;
  onSubmitLead: (lead: Omit<LeadEnquiry, 'id' | 'createdAt'>) => Promise<void>;
  onDirectWhatsApp: (text: string) => void;
}

export const CategoryBookingEngine: React.FC<CategoryBookingEngineProps> = ({
  site,
  selectedItem,
  onSubmitLead,
  onDirectWhatsApp
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (10:00 AM - 1:00 PM)');
  const [pickupAddress, setPickupAddress] = useState('');
  const [deviceBrandModel, setDeviceBrandModel] = useState('');
  const [partySize, setPartySize] = useState<number>(2);
  const [customListMessage, setCustomListMessage] = useState('');
  const [urgency, setUrgency] = useState<'normal' | 'emergency'>('normal');

  // Repair ticket lookup state
  const [lookupTicket, setLookupTicket] = useState('');
  const [ticketResult, setTicketResult] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const bookingType: BookingPatternType = site.bookingType || 'appointment_slot';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return;

    setLoading(true);

    const generatedTicket = (bookingType === 'pickup_drop')
      ? `${site.slug.substring(0, 3).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`
      : undefined;

    const leadPayload: Omit<LeadEnquiry, 'id' | 'createdAt'> = {
      websiteSlug: site.slug,
      businessName: site.businessName,
      customerName,
      customerPhone,
      customerEmail: customerEmail || undefined,
      message: customListMessage || `Booking request for ${site.businessName}`,
      serviceRequested: selectedItem?.name || site.bookingCtaLabel || 'General Enquiry',
      preferredDate: preferredDate || undefined,
      preferredTime: preferredTime || undefined,
      pickupAddress: pickupAddress || undefined,
      deviceBrandModel: deviceBrandModel || undefined,
      partySize: bookingType === 'reservation_party' ? partySize : undefined,
      bookingType,
      ticketNumber: generatedTicket,
      status: 'new'
    };

    await onSubmitLead(leadPayload);
    setLoading(false);
    setSuccess(true);
  };

  const handleWhatsAppForward = () => {
    let msg = `*New Request for ${site.businessName}*\n\n` +
      `*Name:* ${customerName || 'Customer'}\n` +
      `*Phone:* ${customerPhone}\n`;

    if (selectedItem) {
      msg += `*Service/Item:* ${selectedItem.name} (₹${selectedItem.discountPrice || selectedItem.price})\n`;
    }

    if (bookingType === 'pickup_drop') {
      msg += `*Pickup Address:* ${pickupAddress}\n*Date & Slot:* ${preferredDate} (${preferredTime})\n`;
      if (deviceBrandModel) msg += `*Device/Item:* ${deviceBrandModel}\n`;
    } else if (bookingType === 'appointment_slot') {
      msg += `*Date & Time:* ${preferredDate} (${preferredTime})\n`;
      if (pickupAddress) msg += `*Address:* ${pickupAddress}\n`;
      if (urgency === 'emergency') msg += `*Priority:* 🚨 EMERGENCY DISPATCH\n`;
    } else if (bookingType === 'reservation_party') {
      msg += `*Party Size / Guests:* ${partySize} Persons\n*Date & Time:* ${preferredDate} at ${preferredTime}\n`;
    } else if (bookingType === 'whatsapp_order') {
      msg += `*Order / Requirement List:*\n${customListMessage || 'Please share product details'}\n`;
      if (pickupAddress) msg += `*Delivery Address:* ${pickupAddress}\n`;
    }

    onDirectWhatsApp(msg);
  };

  const handleSearchTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lookupTicket.trim()) return;
    const clean = lookupTicket.trim().toUpperCase();
    if (clean === 'QF-8492' || clean.includes('8492')) {
      setTicketResult('Status: ✅ REPAIR COMPLETED. Ready for delivery/pickup. Quality check passed.');
    } else {
      setTicketResult(`Status: 🔧 IN PROGRESS for Ticket #${clean}. Technician assigned, parts assembled.`);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-8 border border-slate-200/80 shadow-md">
      {/* Repair Ticket Status Lookup Bar (for Mobile & Laptop Repair) */}
      {(site.category === 'repair' || site.category === 'computer') && (
        <div className="mb-6 p-4 bg-slate-50 rounded-2xl border border-slate-200">
          <div className="flex items-center gap-2 mb-2 text-xs font-bold text-slate-900">
            <Search className="w-4 h-4 text-indigo-600" />
            <span>Track Your Repair Status by Ticket Number:</span>
          </div>
          <form onSubmit={handleSearchTicket} className="flex gap-2">
            <input
              type="text"
              placeholder="e.g. QF-8492"
              value={lookupTicket}
              onChange={e => setLookupTicket(e.target.value)}
              className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-200 bg-white font-mono uppercase"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
            >
              Check
            </button>
          </form>
          {ticketResult && (
            <div className="mt-3 p-2.5 bg-indigo-50 border border-indigo-100 rounded-xl text-xs text-indigo-900 font-medium">
              {ticketResult}
            </div>
          )}
        </div>
      )}

      {success ? (
        <div className="text-center py-6 space-y-4">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-900">Request Confirmed!</h4>
            <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto leading-relaxed">
              {site.businessName} has received your booking. We will connect on WhatsApp or phone immediately.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto pt-2">
            <button
              onClick={handleWhatsAppForward}
              className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp Now
            </button>
            <button
              onClick={() => setSuccess(false)}
              className="py-2.5 px-4 bg-slate-100 text-slate-700 text-xs font-semibold rounded-xl hover:bg-slate-200 transition-colors"
            >
              Book Another
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 block">
                {bookingType === 'pickup_drop' ? 'Doorstep Pickup & Delivery' :
                 bookingType === 'reservation_party' ? 'Table / Event Reservation' :
                 bookingType === 'whatsapp_order' ? 'Direct Order & Inquiries' :
                 'Appointment Booking'}
              </span>
              <h3 className="text-lg font-extrabold text-slate-900">
                {site.bookingCtaLabel || 'Book Appointment / Order'}
              </h3>
            </div>
            {site.specialBadge && (
              <span className="text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-1 rounded-full">
                {site.specialBadge}
              </span>
            )}
          </div>

          {selectedItem && (
            <div className="p-3 bg-indigo-50/70 border border-indigo-100 rounded-xl flex items-center justify-between text-xs">
              <span className="font-semibold text-indigo-950 truncate">
                Selected: {selectedItem.name}
              </span>
              <span className="font-extrabold text-indigo-700 shrink-0 ml-2">
                ₹{selectedItem.discountPrice || selectedItem.price}
              </span>
            </div>
          )}

          {/* Core Contacts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={customerName}
                onChange={e => setCustomerName(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[44px]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                WhatsApp / Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={customerPhone}
                onChange={e => setCustomerPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[44px]"
              />
            </div>
          </div>

          {/* PATTERN A: PICKUP & DROP SCHEDULING (Dry Cleaning, Mobile Repair, Laptop Care) */}
          {bookingType === 'pickup_drop' && (
            <div className="space-y-3 pt-1">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Pickup Address (House / Office / Landmark) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Flat 402, Tower B, Palm Heights, Sector 18"
                  value={pickupAddress}
                  onChange={e => setPickupAddress(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[44px]"
                />
              </div>

              {(site.category === 'repair' || site.category === 'computer') && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Device Brand & Model (e.g. iPhone 13, ThinkPad T480)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. OnePlus 11R (Cracked Screen)"
                    value={deviceBrandModel}
                    onChange={e => setDeviceBrandModel(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[44px]"
                  />
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Pickup Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={e => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[44px]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Pickup Time Slot
                  </label>
                  <select
                    value={preferredTime}
                    onChange={e => setPreferredTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-white min-h-[44px]"
                  >
                    <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                    <option value="Evening (5:00 PM - 8:30 PM)">Evening (5:00 PM - 8:30 PM)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* PATTERN B: APPOINTMENT / SLOT BOOKING (Salon, Clinic, Electrician, Plumber, Tailor, Gym, Driving, Locksmith, Pets, Carwash) */}
          {bookingType === 'appointment_slot' && (
            <div className="space-y-3 pt-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Appointment Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={e => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[44px]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={preferredTime}
                    onChange={e => setPreferredTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-white min-h-[44px]"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                    <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                  </select>
                </div>
              </div>

              {(site.category === 'electrician' || site.category === 'plumber' || site.category === 'locksmith' || site.category === 'tailor') && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Service Address / Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. House No. 24, Street 3, Lajpat Nagar"
                    value={pickupAddress}
                    onChange={e => setPickupAddress(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[44px]"
                  />
                </div>
              )}

              {(site.category === 'electrician' || site.category === 'plumber' || site.category === 'locksmith') && (
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-700 pt-1">
                  <span>Dispatch Urgency:</span>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="urgency"
                      checked={urgency === 'normal'}
                      onChange={() => setUrgency('normal')}
                      className="text-indigo-600"
                    />
                    <span>Standard Visit</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer text-rose-600 font-bold">
                    <input
                      type="radio"
                      name="urgency"
                      checked={urgency === 'emergency'}
                      onChange={() => setUrgency('emergency')}
                      className="text-rose-600"
                    />
                    <span>🚨 Urgent (Arrive ASAP)</span>
                  </label>
                </div>
              )}
            </div>
          )}

          {/* PATTERN C: WHATSAPP ORDER / ENQUIRY (Kirana, Mithai, Bakery, Icecream, Pharmacy, Hardware, Furniture, Florist, Printing, Boutique) */}
          {bookingType === 'whatsapp_order' && (
            <div className="space-y-3 pt-1">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {site.category === 'pharmacy' ? 'Type Medicine Names or State Prescription' :
                   site.category === 'printing' ? 'Printing Specs (B&W / Color, No. of Pages, Binding Type)' :
                   site.category === 'sweets' ? 'Mithai Box Weight & Target Delivery Date' :
                   site.category === 'kirana' ? 'Items List (e.g. 5kg Atta, 2L Mustard Oil, Tata Tea)' :
                   'Order Items / Custom Request'}
                </label>
                <textarea
                  rows={3}
                  placeholder={
                    site.category === 'pharmacy' ? 'e.g. Glycomet GP2 (1 strip), Telma 40 (2 strips). Prescribed by Dr. Verma.' :
                    site.category === 'printing' ? 'e.g. 150 Pages B&W double-sided project print with blue spiral binding.' :
                    site.category === 'sweets' ? 'e.g. 2 Kg Kaju Katli + 1 Kg Motichoor Ladoo in wedding gift packaging.' :
                    'Type your order list or instructions here...'
                  }
                  value={customListMessage}
                  onChange={e => setCustomListMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none min-h-[70px]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Delivery Address / Flat Details (Optional for Doorstep Delivery)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sector 45, Tower 3, Flat 501"
                  value={pickupAddress}
                  onChange={e => setPickupAddress(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[44px]"
                />
              </div>
            </div>
          )}

          {/* PATTERN D: RESERVATION / PARTY SIZE (Restaurant/Dhaba, Event Planner, Travel Agent, Real Estate Tour, Tiffin) */}
          {bookingType === 'reservation_party' && (
            <div className="space-y-3 pt-1">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {site.category === 'realestate' ? 'Guests Attending Tour' :
                     site.category === 'travel' ? 'Total Travelers' :
                     'Number of Guests / Party Size'}
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="number"
                      min={1}
                      max={100}
                      value={partySize}
                      onChange={e => setPartySize(Number(e.target.value))}
                      className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[44px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Target Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={e => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[44px]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Target Time
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 8:00 PM Dinner"
                    value={preferredTime}
                    onChange={e => setPreferredTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[44px]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Special Notes / Seating Preference
                </label>
                <input
                  type="text"
                  placeholder="e.g. High chair needed / Outdoor garden table preferred"
                  value={customListMessage}
                  onChange={e => setCustomListMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[44px]"
                />
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="pt-3 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-3 px-5 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 min-h-[44px]"
              style={{ backgroundColor: site.primaryColor || '#4f46e5' }}
            >
              <Send className="w-4 h-4" />
              <span>{loading ? 'Submitting...' : `Confirm ${site.bookingCtaLabel || 'Booking'}`}</span>
            </button>

            <button
              type="button"
              onClick={handleWhatsAppForward}
              className="py-3 px-5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat / Book via WhatsApp</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
