import React, { useState } from 'react';
import {
  X,
  Phone,
  MessageSquare,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  Share2,
  Building,
  ShieldCheck,
  Award,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Car,
  Home,
  Check,
  Send,
  Download,
  Printer,
  Sparkles,
  Calculator,
  User,
  Mail,
  DollarSign,
  Layers,
  ArrowRight
} from 'lucide-react';
import {
  RealEstateProperty,
  BlogArticle,
  PHONE_NUMBER,
  WHATSAPP_NUMBER,
  OFFICE_ADDRESS
} from '../../data/choudharyRealestateData';

// 1. Property Detail Modal
interface PropertyModalProps {
  property: RealEstateProperty | null;
  onClose: () => void;
  onBookSiteVisit: (property: RealEstateProperty) => void;
}

export const PropertyDetailModal: React.FC<PropertyModalProps> = ({
  property,
  onClose,
  onBookSiteVisit
}) => {
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [visitName, setVisitName] = useState('');
  const [visitPhone, setVisitPhone] = useState('');
  const [visitDate, setVisitDate] = useState('Tomorrow, 11:30 AM');
  const [visitBooked, setVisitBooked] = useState(false);

  if (!property) return null;

  const images = property.gallery && property.gallery.length > 0 ? property.gallery : [property.featuredImage];

  const formatPrice = (val: number, purpose: string) => {
    if (purpose === 'Rent') {
      return `₹${val.toLocaleString('en-IN')}/month`;
    }
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(val / 100000).toFixed(2)} Lakh`;
  };

  const handleQuickVisitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitName || !visitPhone) return;
    setVisitBooked(true);
    setTimeout(() => {
      setVisitBooked(false);
      onClose();
    }, 3500);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `Check out this verified property in Dwarka with Choudhary Realestate: ${property.title} (${formatPrice(property.price, property.purpose)})`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Property link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      <div className="relative bg-[#0F1E36] text-white border border-[#C5A25D]/40 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors cursor-pointer border border-white/20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery Hero */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-slate-900 overflow-hidden rounded-t-3xl">
          <img
            src={images[activeImgIdx]}
            alt={property.title}
            className="w-full h-full object-cover transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36] via-transparent to-black/40" />

          {/* Tag Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
            <span className="px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md">
              ✔ 100% Freehold Title
            </span>
            <span className="px-3 py-1 rounded-full bg-[#C5A25D] text-slate-950 font-black text-xs uppercase tracking-wider shadow-md">
              {property.purpose === 'Sale' ? 'For Sale' : 'For Rent'}
            </span>
            <span className="px-3 py-1 rounded-full bg-black/60 text-white border border-white/30 text-xs font-mono">
              Code: {property.code}
            </span>
          </div>

          {/* Gallery navigation controls */}
          {images.length > 1 && (
            <div className="absolute bottom-4 right-4 flex items-center gap-2 z-10">
              <button
                onClick={() => setActiveImgIdx(prev => (prev === 0 ? images.length - 1 : prev - 1))}
                className="p-2 rounded-full bg-black/60 text-white hover:bg-black/90 cursor-pointer border border-white/20"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-bold px-2 py-1 rounded bg-black/60 text-white border border-white/20">
                {activeImgIdx + 1} / {images.length}
              </span>
              <button
                onClick={() => setActiveImgIdx(prev => (prev === images.length - 1 ? 0 : prev + 1))}
                className="p-2 rounded-full bg-black/60 text-white hover:bg-black/90 cursor-pointer border border-white/20"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div className="flex items-center gap-2 p-3 bg-[#0A1526] overflow-x-auto border-b border-white/10">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImgIdx(i)}
                className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                  activeImgIdx === i ? 'border-[#C5A25D] scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Header Info */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <span className="text-xs uppercase font-mono tracking-widest text-[#C5A25D] font-bold">
                {property.sector} · {property.propertyType}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {property.title}
              </h2>
              <p className="flex items-center gap-1.5 text-slate-300 text-sm">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{property.address}</span>
              </p>
            </div>

            <div className="lg:text-right space-y-1 bg-white/5 lg:bg-transparent p-4 lg:p-0 rounded-2xl border lg:border-none border-white/10">
              <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                {property.purpose === 'Sale' ? 'All-Inclusive Demand' : 'Monthly Rent'}
              </div>
              <div className="text-3xl sm:text-4xl font-black text-[#C5A25D]">
                {formatPrice(property.price, property.purpose)}
              </div>
              <div className="text-xs text-slate-400 font-mono">
                ₹{property.pricePerSqFt.toLocaleString('en-IN')} / sq.ft · 1% Brokerage
              </div>
            </div>
          </div>

          {/* Quick Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1">
              <span className="text-xs text-slate-400 font-medium block">Bedrooms</span>
              <span className="text-lg font-bold text-white block">{property.bedrooms} BHK</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1">
              <span className="text-xs text-slate-400 font-medium block">Bathrooms</span>
              <span className="text-lg font-bold text-white block">{property.bathrooms} Baths</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1">
              <span className="text-xs text-slate-400 font-medium block">Super Area</span>
              <span className="text-lg font-bold text-white block">
                {property.area} sq.ft {property.areaYards ? `(${property.areaYards} Yd)` : ''}
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1">
              <span className="text-xs text-slate-400 font-medium block">Car Parking</span>
              <span className="text-lg font-bold text-white block">
                {property.parking} Stilt Slot
              </span>
            </div>
          </div>

          {/* Key Facts Summary */}
          <div className="p-5 rounded-2xl bg-[#0A1526] border border-amber-500/20 grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4 text-xs">
            <div>
              <span className="text-slate-400 block">Floor Number:</span>
              <span className="font-bold text-white">{property.floorNumber} of {property.totalFloors} Floors</span>
            </div>
            <div>
              <span className="text-slate-400 block">Lift Facility:</span>
              <span className="font-bold text-emerald-400">{property.lift ? '✔ High-Speed Lift Available' : 'No Lift'}</span>
            </div>
            <div>
              <span className="text-slate-400 block">Vastu Facing:</span>
              <span className="font-bold text-white">{property.facing} Facing</span>
            </div>
            <div>
              <span className="text-slate-400 block">Road Width:</span>
              <span className="font-bold text-white">{property.roadWidth} Feet Wide Road</span>
            </div>
            <div>
              <span className="text-slate-400 block">Construction Age:</span>
              <span className="font-bold text-white">{property.propertyAge}</span>
            </div>
            <div>
              <span className="text-slate-400 block">Bank Loan:</span>
              <span className="font-bold text-emerald-400">{property.loanAvailable ? '✔ Approved (SBI/HDFC)' : 'N/A'}</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Property Overview</span>
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed font-light">
              {property.description}
            </p>
          </div>

          {/* Amenities Checklist */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-amber-300 uppercase tracking-wider">
              Luxury Specifications &amp; Amenities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {property.amenities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200 bg-white/5 p-2.5 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Locality & Proximity */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-amber-300 uppercase tracking-wider">
              Connectivity &amp; Nearby Landmarks
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-amber-400 font-bold block">Nearest Metro Station:</span>
                <span className="text-slate-200">{property.nearbyMetro.join(', ') || 'Sector 8 / 11 Metro (walking distance)'}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-amber-400 font-bold block">Reputed Schools:</span>
                <span className="text-slate-200">{property.nearbySchools.join(', ') || 'Vandana International, DPS'}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-amber-400 font-bold block">Hospitals &amp; Healthcare:</span>
                <span className="text-slate-200">{property.nearbyHospitals.join(', ') || 'Manipal Hospital, Venkateshwar'}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-amber-400 font-bold block">Malls &amp; Markets:</span>
                <span className="text-slate-200">{property.nearbyMalls.join(', ') || 'Vegas Mall, Sector DDA Market'}</span>
              </div>
            </div>
          </div>

          {/* Quick Schedule Site Visit Card */}
          <div className="bg-gradient-to-br from-[#162B4D] to-[#0A1526] p-6 rounded-3xl border border-[#C5A25D]/40 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-bold text-white">Book an Accompanied Site Visit</h4>
                <p className="text-xs text-slate-300">Free pickup &amp; walkthrough with our senior Sector 8 Dwarka property specialist.</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                100% Free
              </span>
            </div>

            {visitBooked ? (
              <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-center space-y-2 text-emerald-200">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h5 className="font-bold text-base text-white">Site Visit Confirmed!</h5>
                <p className="text-xs">
                  Thank you, <strong>{visitName}</strong>. Our senior consultant assigned to {property.sector} will call you at <strong>{visitPhone}</strong> to confirm your slot for {visitDate}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleQuickVisitSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={visitName}
                  onChange={e => setVisitName(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#C5A25D]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Your Mobile Number"
                  value={visitPhone}
                  onChange={e => setVisitPhone(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#C5A25D]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#C5A25D] to-[#E5C378] text-[#0F1E36] font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-110 cursor-pointer"
                >
                  Confirm Visit
                </button>
              </form>
            )}
          </div>

          {/* Action CTAs Bottom Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <button
                onClick={handleShare}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold flex items-center gap-2 cursor-pointer border border-white/20"
              >
                <Share2 className="w-4 h-4 text-amber-400" />
                <span>Share</span>
              </button>
              <span className="text-xs text-slate-400 hidden sm:inline">
                Fixed 1% Brokerage on Closing
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer border border-white/20"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Us</span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  `Hello Choudhary Realestate, I am interested in property code: ${property.code} (${property.title}). Please share full document details and schedule a walkthrough.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. Post / List Property Modal
interface PostPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PostPropertyModal: React.FC<PostPropertyModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sector, setSector] = useState('Sector 8');
  const [propertyType, setPropertyType] = useState('Builder Floor');
  const [bhk, setBhk] = useState('3 BHK');
  const [purpose, setPurpose] = useState('Sale');
  const [expectedPrice, setExpectedPrice] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative bg-[#0F1E36] text-white border border-[#C5A25D]/40 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl space-y-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <span className="text-xs font-mono uppercase text-[#C5A25D] font-bold">
            Sellers &amp; Landlords Free Portal
          </span>
          <h3 className="text-2xl font-black text-white">List Your Property with Choudhary Realestate</h3>
          <p className="text-xs text-slate-300">
            Reach verified, serious buyers in Dwarka. 100% free listing with zero upfront charges.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
            <h4 className="text-lg font-bold text-white">Property Submitted Successfully!</h4>
            <p className="text-xs text-emerald-200 leading-relaxed">
              Thank you, <strong>{name}</strong>. Our senior Dwarka listing specialist will inspect your property details and contact you at <strong>{phone}</strong> within 2 hours to arrange a professional photoshoot and legal document verification.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold uppercase text-slate-300 mb-1 block">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Chandra"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#C5A25D]"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold uppercase text-slate-300 mb-1 block">Mobile Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98XXX XXXXX"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#C5A25D]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div>
                <label className="text-[11px] font-bold uppercase text-slate-300 mb-1 block">Sector</label>
                <select
                  value={sector}
                  onChange={e => setSector(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#0A1526] border border-white/20 text-white text-xs"
                >
                  <option value="Sector 8">Sector 8</option>
                  <option value="Sector 11">Sector 11</option>
                  <option value="Sector 12">Sector 12</option>
                  <option value="Sector 19">Sector 19</option>
                  <option value="Sector 22">Sector 22</option>
                  <option value="Sector 23">Sector 23</option>
                  <option value="Sector 14">Sector 14</option>
                  <option value="Sector 7">Sector 7</option>
                  <option value="Other Sector">Other Sector</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase text-slate-300 mb-1 block">Type</label>
                <select
                  value={propertyType}
                  onChange={e => setPropertyType(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#0A1526] border border-white/20 text-white text-xs"
                >
                  <option value="Builder Floor">Builder Floor</option>
                  <option value="Society Flat">Society Flat</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Plot">Plot</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase text-slate-300 mb-1 block">BHK</label>
                <select
                  value={bhk}
                  onChange={e => setBhk(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#0A1526] border border-white/20 text-white text-xs"
                >
                  <option value="1 BHK">1 BHK</option>
                  <option value="2 BHK">2 BHK</option>
                  <option value="3 BHK">3 BHK</option>
                  <option value="4 BHK">4 BHK</option>
                  <option value="Commercial">N/A</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase text-slate-300 mb-1 block">Purpose</label>
                <select
                  value={purpose}
                  onChange={e => setPurpose(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#0A1526] border border-white/20 text-white text-xs"
                >
                  <option value="Sale">For Sale</option>
                  <option value="Rent">For Rent</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold uppercase text-slate-300 mb-1 block">Expected Price / Rent</label>
              <input
                type="text"
                placeholder="e.g. ₹1.85 Cr or ₹25,000/month"
                value={expectedPrice}
                onChange={e => setExpectedPrice(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#C5A25D]"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold uppercase text-slate-300 mb-1 block">Floor / Block / Society Name &amp; Details</label>
              <textarea
                rows={2}
                placeholder="e.g. 2nd floor with lift, park facing, 125 sq yds plot"
                value={details}
                onChange={e => setDetails(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#C5A25D]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C5A25D] to-[#E5C378] text-[#0F1E36] font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 cursor-pointer"
            >
              Submit Property Listing
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// 3. Property Valuation Modal
interface ValuationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ValuationModal: React.FC<ValuationModalProps> = ({ isOpen, onClose }) => {
  const [sector, setSector] = useState('Sector 8');
  const [propertyType, setPropertyType] = useState('Builder Floor');
  const [bhk, setBhk] = useState('3 BHK');
  const [area, setArea] = useState('125');
  const [calculatedValue, setCalculatedValue] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const areaNum = parseFloat(area) || 100;
    let baseRate = 16000;
    if (sector === 'Sector 11') baseRate = 17500;
    if (sector === 'Sector 22') baseRate = 15000;
    if (sector === 'Sector 19') baseRate = 13500;

    const sqFt = propertyType === 'Builder Floor' ? areaNum * 9 : areaNum;
    const est = sqFt * baseRate;
    const minVal = (est * 0.95) / 10000000;
    const maxVal = (est * 1.08) / 10000000;
    setCalculatedValue(`₹${minVal.toFixed(2)} Cr – ₹${maxVal.toFixed(2)} Cr`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative bg-[#0F1E36] text-white border border-[#C5A25D]/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <span className="text-xs font-mono uppercase text-[#C5A25D] font-bold">Instant Dwarka Benchmark</span>
          <h3 className="text-2xl font-black text-white">Free Property Valuation Calculator</h3>
          <p className="text-xs text-slate-300">
            Based on recent Sub-Registrar circle rates and 2026 live market closures in Dwarka.
          </p>
        </div>

        <form onSubmit={handleCalculate} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-bold uppercase text-slate-300 mb-1 block">Sector</label>
              <select
                value={sector}
                onChange={e => setSector(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-[#0A1526] border border-white/20 text-white text-xs"
              >
                <option value="Sector 8">Sector 8</option>
                <option value="Sector 11">Sector 11</option>
                <option value="Sector 12">Sector 12</option>
                <option value="Sector 19">Sector 19</option>
                <option value="Sector 22">Sector 22</option>
                <option value="Sector 23">Sector 23</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-bold uppercase text-slate-300 mb-1 block">Type</label>
              <select
                value={propertyType}
                onChange={e => setPropertyType(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-[#0A1526] border border-white/20 text-white text-xs"
              >
                <option value="Builder Floor">Builder Floor</option>
                <option value="Society Flat">Society Flat</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-bold uppercase text-slate-300 mb-1 block">BHK Layout</label>
              <select
                value={bhk}
                onChange={e => setBhk(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-[#0A1526] border border-white/20 text-white text-xs"
              >
                <option value="2 BHK">2 BHK</option>
                <option value="3 BHK">3 BHK</option>
                <option value="4 BHK">4 BHK</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-bold uppercase text-slate-300 mb-1 block">
                {propertyType === 'Builder Floor' ? 'Plot Area (Sq Yds)' : 'Super Area (Sq Ft)'}
              </label>
              <input
                type="number"
                value={area}
                onChange={e => setArea(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-xs"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#C5A25D] to-[#E5C378] text-[#0F1E36] font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-110 cursor-pointer"
          >
            Calculate Market Value
          </button>
        </form>

        {calculatedValue && (
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#162B4D] to-[#0A1526] border border-amber-500/40 text-center space-y-2">
            <span className="text-xs uppercase font-mono text-slate-400 font-bold block">Estimated Dwarka Market Valuation</span>
            <div className="text-3xl font-black text-[#C5A25D]">{calculatedValue}</div>
            <p className="text-[11px] text-slate-300">
              *Actual price depends on floor level, stilt parking, lift access, park facing orientation, and interior quality.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// 4. Blog Reader Modal
interface BlogModalProps {
  article: BlogArticle | null;
  onClose: () => void;
}

export const BlogDetailModal: React.FC<BlogModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative bg-[#0F1E36] text-white border border-[#C5A25D]/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl space-y-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-[#C5A25D]">
            <span>{article.category}</span>
            <span>•</span>
            <span>{article.readingTime} min read</span>
            <span>•</span>
            <span>{article.publishDate}</span>
          </div>
          <h3 className="text-2xl font-black text-white leading-tight">{article.title}</h3>
          <p className="text-xs text-slate-400 font-medium">By {article.author} · Choudhary Realestate</p>
        </div>

        <div className="h-56 rounded-2xl overflow-hidden">
          <img src={article.featuredImage} alt={article.title} className="w-full h-full object-cover" />
        </div>

        <div className="space-y-4 text-sm text-slate-200 leading-relaxed font-light">
          {article.content.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
          {article.tags.map((t, idx) => (
            <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-amber-400">
              #{t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
