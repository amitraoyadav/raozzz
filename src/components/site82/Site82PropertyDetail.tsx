import React, { useState } from 'react';
import {
  ArrowLeft,
  Heart,
  Scale,
  Share2,
  MapPin,
  Building,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Layers,
  Phone,
  MessageCircle,
  Video,
  X,
  Maximize2,
  Download,
  Send,
  Sparkles,
  ExternalLink,
  Check
} from 'lucide-react';
import { WealthProperty, WEALTH_PROPERTIES } from '../../data/site82Data';
import { site82Config } from '../../config/site82Config';

interface Site82PropertyDetailProps {
  property: WealthProperty;
  onBack: () => void;
  onSelectProperty: (property: WealthProperty) => void;
  isWishlisted: boolean;
  onToggleWishlist: (id: string) => void;
  isCompared: boolean;
  onToggleCompare: (id: string) => void;
  onOpenConsultation: () => void;
}

export const Site82PropertyDetail: React.FC<Site82PropertyDetailProps> = ({
  property,
  onBack,
  onSelectProperty,
  isWishlisted,
  onToggleWishlist,
  isCompared,
  onToggleCompare,
  onOpenConsultation
}) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  // Inquire / Site Visit Form
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const images = property.images && property.images.length > 0 ? property.images : ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'];

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formPhone.trim()) return;
    setSubmitted(true);
  };

  // Similar properties
  const similarProperties = WEALTH_PROPERTIES.filter(
    (p) => p.id !== property.id && (p.city === property.city || p.projectType === property.projectType)
  ).slice(0, 3);

  return (
    <article className="bg-white min-h-screen pt-24 pb-20 text-[#1E2430]">
      {/* 1. Sub-Header Navigation & Breadcrumbs */}
      <div className="bg-neutral-50 border-b border-neutral-200 py-3 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-700 hover:text-[#F54900] transition-colors cursor-pointer py-1 px-2 rounded-lg hover:bg-neutral-200/50"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Properties</span>
            </button>
            <span className="hidden sm:inline text-neutral-300">|</span>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-neutral-500 font-mono">
              <span>{property.city}</span>
              <span>/</span>
              <span>{property.projectType}</span>
              <span>/</span>
              <span className="text-neutral-900 font-bold truncate max-w-xs">{property.name}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleCompare(property.id)}
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                isCompared
                  ? 'bg-[#F54900] text-white border-[#F54900]'
                  : 'bg-white text-neutral-700 border-neutral-200 hover:border-orange-300'
              }`}
              title="Compare property"
            >
              <Scale className="w-4 h-4" />
            </button>

            <button
              onClick={() => onToggleWishlist(property.id)}
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                isWishlisted
                  ? 'bg-rose-600 text-white border-rose-600'
                  : 'bg-white text-neutral-700 border-neutral-200 hover:border-rose-300'
              }`}
              title="Add to wishlist"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-full border border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400 transition-colors cursor-pointer"
              title="Share property"
            >
              {copiedShare ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* 2. Photo Gallery Showcase */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 rounded-3xl overflow-hidden shadow-lg relative bg-neutral-900">
          {/* Main Photo */}
          <div
            onClick={() => {
              setSelectedPhotoIndex(0);
              setLightboxOpen(true);
            }}
            className="md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto md:h-[480px] relative overflow-hidden group cursor-pointer"
          >
            <img
              src={images[0]}
              alt={property.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 bg-[#F54900] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
              {property.status}
            </div>
            <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-xl font-mono">
              Click to view fullscreen
            </div>
          </div>

          {/* Secondary Photos */}
          {images.slice(1, 5).map((img, idx) => (
            <div
              key={idx}
              onClick={() => {
                setSelectedPhotoIndex(idx + 1);
                setLightboxOpen(true);
              }}
              className="hidden md:block h-[234px] relative overflow-hidden group cursor-pointer bg-neutral-800"
            >
              <img
                src={img}
                alt={`${property.name} photo ${idx + 2}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}

          {/* Action Overlay: View All Photos & Watch Film */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2 z-10">
            {property.videoUrl && (
              <button
                onClick={() => setVideoModalOpen(true)}
                className="px-4 py-2 bg-black/80 hover:bg-black text-white rounded-xl text-xs font-bold backdrop-blur-md flex items-center gap-2 cursor-pointer border border-white/20 shadow-lg"
              >
                <Video className="w-4 h-4 text-red-500" />
                <span>Watch Walkthrough Film</span>
              </button>
            )}
            <button
              onClick={() => {
                setSelectedPhotoIndex(0);
                setLightboxOpen(true);
              }}
              className="px-4 py-2 bg-white/95 hover:bg-white text-neutral-900 rounded-xl text-xs font-bold backdrop-blur-md flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <Maximize2 className="w-4 h-4" />
              <span>View All {images.length} Photos</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Main Detail Layout (Overview Left, Inquire Form Right) */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column (8 cols): Title, Pricing, Facts, Description, Amenities, Location */}
          <div className="lg:col-span-8 space-y-10">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-orange-100 text-[#F54900]">
                    By {property.developer}
                  </span>
                  {property.isReraCompliant && (
                    <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>RERA: {property.reraNumber}</span>
                    </span>
                  )}
                </div>
                <span className="text-xs font-semibold text-neutral-500">
                  Ref Code: WN-{property.id.toUpperCase()}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E2430] mt-3 tracking-tight">
                {property.name}
              </h1>

              <p className="text-sm sm:text-base text-neutral-500 flex items-center gap-1.5 mt-2">
                <MapPin className="w-4 h-4 text-[#F54900] shrink-0" />
                <span>{property.location}, {property.city}</span>
              </p>

              {/* Price Banner */}
              <div className="mt-4 pt-4 border-t border-neutral-200 flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#F54900]">
                  {property.priceFormatted}
                </span>
                {property.pricePerSqFt && (
                  <span className="text-xs font-mono text-neutral-500">
                    ({property.pricePerSqFt})
                  </span>
                )}
              </div>
            </div>

            {/* Key Facts Ribbon */}
            <div className="bg-[#FFF7F4] border border-orange-200/80 rounded-2xl p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-neutral-500">Project Type</span>
                <span className="text-base sm:text-lg font-bold text-[#1E2430] mt-0.5 block">{property.projectType}</span>
              </div>
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-neutral-500">Configurations</span>
                <span className="text-xs sm:text-sm font-bold text-[#1E2430] mt-1 block truncate">{property.configuration}</span>
              </div>
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-neutral-500">Super Area</span>
                <span className="text-base sm:text-lg font-bold text-[#1E2430] mt-0.5 block">{property.areaSqFt}</span>
              </div>
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-neutral-500">Possession</span>
                <span className="text-base sm:text-lg font-bold text-emerald-700 mt-0.5 block">{property.possessionDate}</span>
              </div>
            </div>

            {/* Description & Overview */}
            <div>
              <h2 className="text-xl font-bold text-[#1E2430] mb-3">
                About {property.name} &amp; Investment Overview
              </h2>
              <div className="text-sm sm:text-base text-neutral-700 leading-relaxed space-y-4 font-normal">
                <p>{property.description}</p>
                <p>
                  Strategically located in {property.location}, the development is approved by UP RERA under registration number <strong>{property.reraNumber}</strong>. The project incorporates modern seismic-zone compliant RCC structural framing, IGBC green building benchmarks, and 3-tier electronic security surveillance.
                </p>
                <p>
                  Zero buyer brokerage applies on this development when routed through Wealth Nexus. Escorted site visits with complimentary air-conditioned cab pickup are provided for verified investors.
                </p>
              </div>
            </div>

            {/* Amenities Grid */}
            <div>
              <h2 className="text-xl font-bold text-[#1E2430] mb-4">
                Project Amenities &amp; Lifestyle Infrastructure
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3.5 rounded-2xl border border-neutral-200/90 bg-white shadow-sm">
                    <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#F54900] flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-neutral-800">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Highlights & Strategic Access */}
            {property.locationHighlights && property.locationHighlights.length > 0 && (
              <div className="pt-4 border-t border-neutral-200">
                <h2 className="text-xl font-bold text-[#1E2430] mb-3">
                  Location Advantages &amp; Connectivity
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.locationHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column (4 cols): Sticky Lead Capture & Schedule Visit */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-32 space-y-6">
              {/* Schedule Site Visit Card */}
              <div className="bg-white border-2 border-orange-200/80 rounded-3xl p-6 shadow-xl">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#F54900] font-bold">
                  Zero Brokerage Assured
                </span>
                <h3 className="text-xl font-bold text-[#1E2430] mt-1">
                  Schedule Escorted Site Visit
                </h3>
                <p className="text-xs text-neutral-500 mt-1 mb-4">
                  Complimentary doorstep AC cab pickup &amp; priority allotment consultation.
                </p>

                {submitted ? (
                  <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center text-emerald-900">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <h4 className="font-bold text-base">Visit Scheduled!</h4>
                    <p className="text-xs text-emerald-700 mt-1">
                      Our Senior Property Relationship Manager will coordinate cab logistics within 30 minutes.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-3 text-xs font-bold text-emerald-800 underline cursor-pointer"
                    >
                      Book another slot
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3">
                    <div>
                      <label className="block text-[10px] font-bold uppercase text-neutral-500 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-xl focus:outline-none focus:border-[#F54900]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-neutral-500 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-xl focus:outline-none focus:border-[#F54900]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-neutral-500 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="investor@domain.com"
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-xl focus:outline-none focus:border-[#F54900]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-neutral-500 mb-1">
                        Preferred Visit Date
                      </label>
                      <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-xl focus:outline-none focus:border-[#F54900]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-[#F54900] hover:bg-[#C7510B] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md shadow-orange-500/30 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Confirm Site Visit</span>
                    </button>
                  </form>
                )}

                {/* Direct WhatsApp Concierge CTA */}
                <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-col gap-2">
                  <a
                    href={`https://wa.me/${site82Config.WHATSAPP}?text=Hi%2C%20I%20am%20interested%20in%20visiting%20${encodeURIComponent(property.name)}%20at%20${encodeURIComponent(property.location)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Chat on WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${site82Config.PHONE_NUM}`}
                    className="w-full py-2.5 rounded-xl border border-neutral-300 hover:border-neutral-500 text-neutral-800 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#F54900]" />
                    <span>Call Desk: {site82Config.PHONE}</span>
                  </a>
                </div>
              </div>

              {/* Download Brochure Card */}
              <div className="bg-[#1E2430] text-white rounded-3xl p-5 text-center">
                <Building className="w-7 h-7 text-[#FF9B54] mx-auto mb-2" />
                <h4 className="font-bold text-sm">Download Official Brochure</h4>
                <p className="text-[11px] text-neutral-400 mt-1">
                  Floor plans, RERA approvals &amp; developer payment schedules.
                </p>
                <button
                  onClick={() => alert(`Official Prospectus & Brochure for ${property.name} downloaded.`)}
                  className="mt-3 px-4 py-2 rounded-xl bg-white text-neutral-900 text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF Brochure</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Similar Properties Recommendation */}
        {similarProperties.length > 0 && (
          <div className="mt-16 pt-12 border-t border-neutral-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-mono uppercase text-[#F54900] font-bold">
                  Recommended For You
                </span>
                <h3 className="text-2xl font-bold text-[#1E2430] mt-0.5">
                  Similar Verified Projects
                </h3>
              </div>
              <button
                onClick={onBack}
                className="text-xs font-bold text-[#F54900] hover:underline"
              >
                View Full Catalog →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarProperties.map((sim) => (
                <div
                  key={sim.id}
                  onClick={() => {
                    onSelectProperty(sim);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="rounded-2xl border border-neutral-200 overflow-hidden cursor-pointer hover:shadow-xl hover:border-orange-300 transition-all bg-white"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                    <img src={sim.images[0]} alt={sim.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <span className="text-[10px] font-mono uppercase text-[#F54900] font-bold">{sim.projectType}</span>
                    <h4 className="font-bold text-base text-[#1E2430] mt-0.5">{sim.name}</h4>
                    <p className="text-xs text-neutral-500">{sim.location}, {sim.city}</p>
                    <div className="mt-2 text-sm font-bold text-[#F54900]">{sim.priceFormatted}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 5. Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6">
          <div className="flex items-center justify-between text-white pb-3 border-b border-white/10">
            <div>
              <h3 className="text-lg font-bold">{property.name}</h3>
              <p className="text-xs text-neutral-400 font-mono">
                Photo {selectedPhotoIndex + 1} of {images.length} · {property.city}
              </p>
            </div>
            <button
              onClick={() => setLightboxOpen(false)}
              className="p-2 text-white/70 hover:text-white rounded-full cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center my-4 overflow-hidden">
            <img
              src={images[selectedPhotoIndex]}
              alt={property.name}
              className="max-h-[75vh] max-w-full object-contain rounded-2xl"
            />
          </div>

          <div className="flex items-center justify-center gap-2 overflow-x-auto py-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedPhotoIndex(idx)}
                className={`w-16 h-12 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                  selectedPhotoIndex === idx ? 'border-[#F54900] opacity-100 scale-105' : 'border-transparent opacity-50'
                }`}
              >
                <img src={img} alt="thumb" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 6. Video Walkthrough Modal */}
      {videoModalOpen && property.videoUrl && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 text-white bg-black/60 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video">
              <video src={property.videoUrl} controls autoPlay className="w-full h-full object-contain">
                Your browser does not support video.
              </video>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};
