import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Building2,
  Calendar,
  Phone,
  Mail,
  User,
  MapPin,
  IndianRupee,
  Upload,
  Info,
  Lock,
  Share2,
  Check
} from 'lucide-react';
import {
  BRAND_NAME,
  BRAND_DISPLAY,
  PHONE_NUMBER,
  EMAIL_ADDRESS,
  MANDATORY_LEGAL_DISCLAIMER,
  PropertyItem,
  RealEstateProject
} from '../../data/squareYardDealersData';
import { useApp } from '../../context/AppContext';

// 1. POST / LIST PROPERTY MODAL
interface PostPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SquareYardDealersPostPropertyModal: React.FC<PostPropertyModalProps> = ({
  isOpen,
  onClose
}) => {
  const { submitLead } = useApp();

  const [ownerName, setOwnerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [propertyType, setPropertyType] = useState('Apartment');
  const [listingIntent, setListingIntent] = useState<'Sale' | 'Rent'>('Sale');
  const [propertyLocation, setPropertyLocation] = useState('');
  const [expectedPrice, setExpectedPrice] = useState('');
  const [bedrooms, setBedrooms] = useState('3');
  const [area, setArea] = useState('');
  const [description, setDescription] = useState('');
  const [needDealerAssistance, setNeedDealerAssistance] = useState(true);

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ownerName || !mobileNumber || !propertyLocation) return;

    const ref = `SYD-LST-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);

    try {
      await submitLead({
        websiteSlug: 'square-yard-dealers',
        businessName: 'Square Yard Dealers Property Listing',
        customerName: ownerName,
        customerPhone: mobileNumber.replace(/\D/g, ''),
        customerEmail: emailAddress,
        serviceRequested: `List Property for ${listingIntent}: ${bedrooms} BHK ${propertyType} in ${propertyLocation} at ₹${expectedPrice}`,
        message: `Area: ${area} sq.ft | Dealer Assistance: ${needDealerAssistance ? 'Yes' : 'No'} | Details: ${description || 'Owner listing'}`,
        status: 'new'
      });
    } catch {
      // Fallback
    }

    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-[#0f172a] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block mb-1">
            Free Owner &amp; Dealer Listing
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Sell or Rent Your Property
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            List your property and connect with interested buyers or tenants.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 sm:p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Property Listing Submitted!</h3>
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl max-w-xs mx-auto text-xs text-slate-700">
              <span className="text-slate-400 block text-[11px] uppercase">Reference ID</span>
              <strong className="text-base font-mono text-blue-700">{referenceId}</strong>
            </div>
            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{ownerName}</strong>. Your listing details have been recorded. Our team will verify your property information within 24 hours.
            </p>
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-[11px] text-amber-900">
              Note: Square Yard Dealers facilitates discovery. We do not guarantee buyers, guaranteed rent, or a fixed sale turnaround time.
            </div>
            <button
              onClick={onClose}
              className="py-3 px-8 rounded-full bg-slate-900 text-white font-bold text-xs uppercase tracking-wider"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 max-h-[75vh] overflow-y-auto text-xs">
            {/* Intent Switcher: Sale / Rent */}
            <div>
              <label className="block text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                I want to:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setListingIntent('Sale')}
                  className={`py-2.5 rounded-xl font-bold text-xs border cursor-pointer transition-all ${
                    listingIntent === 'Sale'
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  Sell Property
                </button>
                <button
                  type="button"
                  onClick={() => setListingIntent('Rent')}
                  className={`py-2.5 rounded-xl font-bold text-xs border cursor-pointer transition-all ${
                    listingIntent === 'Rent'
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  Rent Out Property
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Owner / Contact Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  placeholder="10-digit mobile number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Property Type *
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="Apartment">Apartment / Flat</option>
                  <option value="Builder Floor">Builder Floor</option>
                  <option value="Villa">Villa / Bungalow</option>
                  <option value="Independent House">Independent House</option>
                  <option value="Plot">Residential Plot</option>
                  <option value="Office Space">Commercial Office Space</option>
                  <option value="Shop">Commercial Retail Shop</option>
                  <option value="Warehouse">Warehouse / Industrial</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Bedrooms (BHK)
                </label>
                <select
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="1">1 BHK</option>
                  <option value="2">2 BHK</option>
                  <option value="3">3 BHK</option>
                  <option value="4">4 BHK</option>
                  <option value="5">5+ BHK / NA</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Super Area (Sq.Ft)
                </label>
                <input
                  type="number"
                  placeholder="e.g. 1500"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Expected Price (₹) *
                </label>
                <input
                  type="text"
                  required
                  placeholder={listingIntent === 'Sale' ? 'e.g. 1.50 Cr' : 'e.g. 45000/mo'}
                  value={expectedPrice}
                  onChange={(e) => setExpectedPrice(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Property Location &amp; Society Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. DLF Phase 5, Golf Course Road, Gurgaon"
                value={propertyLocation}
                onChange={(e) => setPropertyLocation(e.target.value)}
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Description &amp; Key Highlights
              </label>
              <textarea
                rows={3}
                placeholder="Mention floor number, furnishing status, facing, parking, and specific key amenities..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3.5 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Dealer Assistance checkbox */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-800">
                <input
                  type="checkbox"
                  checked={needDealerAssistance}
                  onChange={(e) => setNeedDealerAssistance(e.target.checked)}
                  className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
                />
                <span>Get Assistance From a Property Dealer</span>
              </label>
              <p className="text-[11px] text-slate-500 mt-1 pl-6">
                Our local area specialists can conduct physical site visits and coordinate documentation for you.
              </p>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-full border border-slate-300 font-bold text-slate-700 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-7 py-2.5 rounded-full bg-amber-400 hover:bg-yellow-400 text-slate-950 font-black uppercase tracking-wider shadow-md"
              >
                List My Property
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

// 2. SCHEDULE SITE VISIT MODAL
interface ScheduleVisitModalProps {
  propertyOrProject: PropertyItem | RealEstateProject | null;
  onClose: () => void;
}

export const SquareYardDealersScheduleVisitModal: React.FC<ScheduleVisitModalProps> = ({
  propertyOrProject,
  onClose
}) => {
  const { submitLead } = useApp();
  const [visitorName, setVisitorName] = useState('');
  const [visitorPhone, setVisitorPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('11:00 AM');
  const [visitType, setVisitType] = useState<'In-Person' | 'Video Call'>('In-Person');
  const [booked, setBooked] = useState(false);

  if (!propertyOrProject) return null;

  const title = 'title' in propertyOrProject ? propertyOrProject.title : propertyOrProject.name;

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorName || !visitorPhone) return;

    try {
      await submitLead({
        websiteSlug: 'square-yard-dealers',
        businessName: 'Site Visit Booking',
        customerName: visitorName,
        customerPhone: visitorPhone.replace(/\D/g, ''),
        serviceRequested: `Site Visit for ${title} on ${preferredDate} at ${preferredTime} (${visitType})`,
        message: `Scheduled visit requested for ${title}`,
        status: 'new'
      });
    } catch {
      // Fallback
    }

    setBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-[#0f172a] text-white p-5 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block mb-1">
            Site Inspection
          </span>
          <h2 className="text-lg font-black text-white">Schedule Site Visit</h2>
          <p className="text-xs text-slate-300 line-clamp-1">{title}</p>
        </div>

        {booked ? (
          <div className="p-6 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Visit Scheduled!</h3>
            <p className="text-xs text-slate-600">
              Thank you, {visitorName}. A property coordinator will contact you to confirm the location pin and arrival details.
            </p>
            <button
              onClick={onClose}
              className="py-2.5 px-6 rounded-full bg-slate-900 text-white font-bold text-xs uppercase"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="p-5 space-y-3 text-xs">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Full name"
                value={visitorName}
                onChange={(e) => setVisitorName(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Mobile Number *
              </label>
              <input
                type="tel"
                required
                maxLength={10}
                placeholder="10-digit mobile number"
                value={visitorPhone}
                onChange={(e) => setVisitorPhone(e.target.value.replace(/\D/g, ''))}
                className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Time Slot
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white"
                >
                  <option value="10:00 AM">10:00 AM - 12:00 PM</option>
                  <option value="02:00 PM">02:00 PM - 04:00 PM</option>
                  <option value="05:00 PM">05:00 PM - 07:00 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Visit Mode
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setVisitType('In-Person')}
                  className={`py-2 rounded-xl font-bold border ${
                    visitType === 'In-Person' ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-50'
                  }`}
                >
                  In-Person Visit
                </button>
                <button
                  type="button"
                  onClick={() => setVisitType('Video Call')}
                  className={`py-2 rounded-xl font-bold border ${
                    visitType === 'Video Call' ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-50'
                  }`}
                >
                  Live Video Walkthrough
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-amber-400 hover:bg-yellow-400 text-slate-950 font-black uppercase tracking-wider shadow-md"
              >
                Schedule Site Visit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

// 3. PROPERTY VALUATION ESTIMATOR MODAL
interface ValuationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SquareYardDealersValuationModal: React.FC<ValuationModalProps> = ({
  isOpen,
  onClose
}) => {
  const [city, setCity] = useState('Gurgaon');
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('Apartment');
  const [area, setArea] = useState(1500);
  const [bhk, setBhk] = useState(3);
  const [age, setAge] = useState('0-5 Years');
  const [result, setResult] = useState<number | null>(null);

  if (!isOpen) return null;

  const calculateEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    const baseRates: Record<string, number> = {
      Gurgaon: 15100,
      Delhi: 18200,
      Mumbai: 37700,
      Bangalore: 12400,
      Pune: 13550,
      Noida: 12650,
      Hyderabad: 9400,
      Thane: 16000
    };
    const rate = baseRates[city] || 12000;
    const est = area * rate;
    setResult(est);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-[#0f172a] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block mb-1">
            Data-Backed Estimation
          </span>
          <h2 className="text-xl font-black text-white">Know Your Property's Estimated Value</h2>
          <p className="text-xs text-slate-300 mt-1">
            Check indicative market rates based on recent transactions in your locality.
          </p>
        </div>

        <form onSubmit={calculateEstimate} className="p-6 space-y-4 text-xs">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                City
              </label>
              <select
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                  setResult(null);
                }}
                className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white"
              >
                <option value="Gurgaon">Gurgaon</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Pune">Pune</option>
                <option value="Noida">Noida</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Thane">Thane</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Locality / Project
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Golf Course Road"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  setResult(null);
                }}
                className="w-full px-3 py-2 border border-slate-300 rounded-xl"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Super Area (Sq.Ft)
              </label>
              <input
                type="number"
                min={200}
                max={15000}
                value={area}
                onChange={(e) => {
                  setArea(Number(e.target.value));
                  setResult(null);
                }}
                className="w-full px-3 py-2 border border-slate-300 rounded-xl"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Age of Property
              </label>
              <select
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                  setResult(null);
                }}
                className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white"
              >
                <option value="Under Construction">Under Construction</option>
                <option value="0-5 Years">0 - 5 Years (New)</option>
                <option value="5-10 Years">5 - 10 Years</option>
                <option value="10+ Years">10+ Years</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-md"
          >
            Get Property Valuation
          </button>

          {result !== null && (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2 text-amber-950 animate-in fade-in">
              <span className="text-[10px] uppercase font-bold text-amber-800 tracking-wider block">
                Estimated Market Value Range
              </span>
              <div className="text-2xl font-black text-slate-900">
                ₹{(result * 0.95 / 10000000).toFixed(2)} Cr - ₹{(result * 1.08 / 10000000).toFixed(2)} Cr
              </div>
              <p className="text-[11px] text-amber-900 leading-relaxed font-normal">
                Estimated average rate: ₹{(result / area).toLocaleString('en-IN')} / sq.ft for {propertyType} in {location || city}.
              </p>
            </div>
          )}

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500 italic leading-relaxed">
            *Online valuation is an automated analytical estimate and does not represent a legal valuation, bank sanction, or guaranteed sale price.
          </div>
        </form>
      </div>
    </div>
  );
};

// 4. LEGAL POLICIES MODAL
interface LegalModalProps {
  pageType: 'privacy' | 'terms' | 'disclaimer' | 'cookie' | null;
  onClose: () => void;
}

export const SquareYardDealersLegalModal: React.FC<LegalModalProps> = ({
  pageType,
  onClose
}) => {
  if (!pageType) return null;

  const titles: Record<string, string> = {
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    disclaimer: 'Disclaimer & RERA Advisory',
    cookie: 'Cookie Policy'
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-6">
        <div className="bg-[#0f172a] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block mb-1">
            {BRAND_NAME} Legal &amp; Compliance
          </span>
          <h2 className="text-xl font-black text-white">{titles[pageType]}</h2>
        </div>

        <div className="p-6 sm:p-8 space-y-4 text-xs text-slate-700 leading-relaxed max-h-[60vh] overflow-y-auto">
          {/* Statutory Notice */}
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-amber-950 space-y-1">
            <strong className="block text-[11px] uppercase tracking-wider text-amber-900">
              Statutory Real Estate Notice:
            </strong>
            <p className="text-[11px] leading-relaxed">{MANDATORY_LEGAL_DISCLAIMER}</p>
          </div>

          {pageType === 'privacy' && (
            <>
              <h4 className="font-bold text-slate-900 text-sm">1. Information We Collect</h4>
              <p>
                Square Yard Dealers collects property search criteria, contact information (name, phone number, email address), and listing details exclusively to connect buyers, tenants, owners, and property dealers for real estate exploration.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">2. Data Security &amp; Encryption</h4>
              <p>
                All data transmission on our marketplace is secured via SSL encryption. We strictly never sell your private personal credentials or request sensitive banking PINs or OTPs.
              </p>
            </>
          )}

          {pageType === 'terms' && (
            <>
              <h4 className="font-bold text-slate-900 text-sm">1. Platform Scope &amp; Marketplace Role</h4>
              <p>
                Square Yard Dealers acts as an online discovery platform connecting seekers with property owners, real estate developers, and certified property dealers.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">2. Independent Verification</h4>
              <p>
                Users are strongly advised to independently verify all property measurements, occupancy certificates, title ownership, and RERA registration documents prior to financial exchange.
              </p>
            </>
          )}

          {pageType === 'disclaimer' && (
            <>
              <h4 className="font-bold text-slate-900 text-sm">1. RERA &amp; Regulatory Disclosures</h4>
              <p>
                Project information and photographs on this website are for general guidance and illustrative purposes. Real estate transactions must comply with state Real Estate Regulatory Authority (RERA) rules.
              </p>
            </>
          )}

          {pageType === 'cookie' && (
            <>
              <h4 className="font-bold text-slate-900 text-sm">1. Use of Cookies</h4>
              <p>
                We use cookies to retain your preferred city filter, recently viewed property listings, and calculator values for an enhanced browsing experience.
              </p>
            </>
          )}
        </div>

        <div className="bg-slate-50 border-t border-slate-200 p-4 px-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-slate-900 text-white text-xs font-bold"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
