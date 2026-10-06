import React, { useState } from 'react';
import {
  ArrowLeft,
  Heart,
  Share2,
  MapPin,
  Bed,
  Bath,
  Maximize2,
  Calendar,
  Building2,
  ShieldCheck,
  Video,
  Check,
  Phone,
  Mail,
  MessageCircle,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
  Compass,
  Layers,
  Send,
  CheckCircle2
} from 'lucide-react';
import { PropertyListing, LUXURY_PROPERTIES } from '../../data/site81Data';
import { site81Config } from '../../config/site81Config';
import { formatCurrencyPrice, Site81PropertyCard } from './Site81PropertyCard';

interface Site81PropertyDetailProps {
  property: PropertyListing;
  currency: string;
  unit: 'sqft' | 'sqm';
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onBack: () => void;
  onSelectProperty: (property: PropertyListing) => void;
  onOpenSellModal: () => void;
}

export const Site81PropertyDetail: React.FC<Site81PropertyDetailProps> = ({
  property,
  currency,
  unit,
  isFavorite,
  onToggleFavorite,
  onBack,
  onSelectProperty,
  onOpenSellModal
}) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);

  // Inquire / Viewing Form State
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formDate, setFormDate] = useState('');
  const [formMessage, setFormMessage] = useState(
    `I am interested in scheduling a private discreet viewing of ${property.title} in ${property.city}. Please provide the official portfolio prospectus.`
  );
  const [formSubmitted, setFormSubmitted] = useState(false);

  const images = property.images && property.images.length > 0 ? property.images : ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80'];

  const formattedPrice = formatCurrencyPrice(property.priceUsd, currency);
  const sizeFormatted = unit === 'sqft'
    ? `${property.interiorSizeSqFt.toLocaleString()} sq ft`
    : `${property.interiorSizeSqM.toLocaleString()} m²`;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 2500);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formEmail.trim()) return;
    setFormSubmitted(true);
  };

  // Similar properties (same country or similar price range)
  const similarProperties = LUXURY_PROPERTIES.filter(
    (p) => p.id !== property.id && (p.country === property.country || Math.abs(p.priceUsd - property.priceUsd) < 30000000)
  ).slice(0, 3);

  return (
    <article className="bg-white min-h-screen text-neutral-900 pb-20">
      {/* 1. Sticky Navigation & Breadcrumbs Bar */}
      <div className="border-b border-neutral-200 bg-neutral-50/80 sticky top-18 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-700 hover:text-black transition-colors cursor-pointer py-1 px-2 rounded hover:bg-neutral-200/50"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Marketplace</span>
            </button>
            <span className="hidden sm:inline text-neutral-300">|</span>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-neutral-500 font-mono">
              <span>{property.country}</span>
              <span>/</span>
              <span>{property.city}</span>
              <span>/</span>
              <span className="text-neutral-900 font-medium truncate max-w-xs">{property.title}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="flex items-center gap-1 text-xs font-medium text-neutral-700 hover:text-black py-1.5 px-3 rounded border border-neutral-200 hover:bg-white transition-colors cursor-pointer"
            >
              {shareCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{shareCopied ? 'Link Copied' : 'Share'}</span>
            </button>
            <button
              onClick={() => onToggleFavorite(property.id)}
              className={`flex items-center gap-1.5 text-xs font-medium py-1.5 px-3 rounded border transition-colors cursor-pointer ${
                isFavorite
                  ? 'bg-rose-50 border-rose-300 text-rose-700 font-semibold'
                  : 'border-neutral-200 text-neutral-700 hover:bg-white'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-rose-600 text-rose-600' : ''}`} />
              <span>{isFavorite ? 'Saved' : 'Save'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Editorial Image Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 rounded-xl overflow-hidden shadow-sm relative">
          {/* Main Hero Photo (Takes 2 cols on tablet/desktop) */}
          <div
            onClick={() => {
              setSelectedPhotoIndex(0);
              setLightboxOpen(true);
            }}
            className="md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto md:h-[500px] relative overflow-hidden group cursor-pointer bg-neutral-100"
          >
            <img
              src={images[0]}
              alt={property.title}
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs px-3 py-1 rounded font-mono uppercase tracking-wider">
              Primary View
            </div>
          </div>

          {/* Secondary Photos */}
          {images.slice(1, 5).map((imgUrl, idx) => (
            <div
              key={idx}
              onClick={() => {
                setSelectedPhotoIndex(idx + 1);
                setLightboxOpen(true);
              }}
              className="hidden md:block h-[246px] relative overflow-hidden group cursor-pointer bg-neutral-100"
            >
              <img
                src={imgUrl}
                alt={`${property.title} - photo ${idx + 2}`}
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>
          ))}

          {/* "View All Photos" Button Overlay */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2">
            {property.hasVideo && property.videoUrl && (
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="px-3.5 py-2 rounded bg-black/80 hover:bg-black text-white text-xs font-semibold backdrop-blur-md border border-white/20 transition-all flex items-center gap-1.5 cursor-pointer shadow-lg"
              >
                <Video className="w-4 h-4 text-red-400" />
                <span>Watch Film</span>
              </button>
            )}
            <button
              onClick={() => {
                setSelectedPhotoIndex(0);
                setLightboxOpen(true);
              }}
              className="px-4 py-2 rounded bg-white/95 hover:bg-white text-neutral-900 text-xs font-semibold backdrop-blur-md border border-neutral-300 transition-all flex items-center gap-1.5 cursor-pointer shadow-lg"
            >
              <Maximize2 className="w-4 h-4" />
              <span>View All {images.length} Photos</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Main Detail Layout: Details Left + Sticky Inquiry Form Right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT COLUMN (8 cols): Property Overview, Specs, Amenities, Description, Map */}
          <div className="lg:col-span-8 space-y-10">
            {/* Header: Title, Address, Price */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-100 text-neutral-600 font-semibold">
                    {property.propertyType}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">Ref: VLT-{property.id.toUpperCase()}</span>
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-amber-700 font-semibold">
                  {property.listingType === 'sale' ? 'Offered For Sale' : 'Prime Rental'}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-neutral-950 mt-2 font-normal leading-tight">
                {property.title}
              </h1>

              <div className="flex items-center gap-2 text-sm text-neutral-500 mt-2 font-light">
                <MapPin className="w-4 h-4 text-neutral-400 shrink-0" />
                <span>{property.address ? `${property.address}, ` : ''}{property.city}, {property.region}, {property.country}</span>
              </div>

              {/* Price Banner */}
              <div className="mt-4 pt-4 border-t border-neutral-200 flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-serif font-bold text-neutral-950">
                  {formattedPrice}
                </span>
                <span className="text-xs text-neutral-500 font-mono">
                  {currency !== 'USD' && `(Approx. $${property.priceUsd.toLocaleString()} USD)`}
                </span>
              </div>
            </div>

            {/* Key Facts Summary Ribbon */}
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400">Bedrooms</span>
                <span className="text-xl font-serif font-semibold text-neutral-900 mt-0.5">{property.bedrooms}</span>
              </div>
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400">Bathrooms</span>
                <span className="text-xl font-serif font-semibold text-neutral-900 mt-0.5">{property.bathrooms}</span>
              </div>
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400">Interior Size</span>
                <span className="text-xl font-serif font-semibold text-neutral-900 mt-0.5">{sizeFormatted}</span>
              </div>
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400">Year Built</span>
                <span className="text-xl font-serif font-semibold text-neutral-900 mt-0.5">{property.yearBuilt}</span>
              </div>
            </div>

            {/* Editorial Description */}
            <div>
              <h2 className="text-xl font-serif font-semibold text-neutral-950 mb-3">
                Architectural Overview &amp; Residence Profile
              </h2>
              <div className="prose prose-neutral max-w-none text-neutral-700 text-sm sm:text-base leading-relaxed space-y-4">
                <p>{property.description}</p>
                <p>
                  Conceived with uncompromising structural integrity, the residence seamlessly unites indoor and outdoor pavilions through motorized floor-to-ceiling thermal glazing. Materials were sourced from premier European quarries, featuring honed travertine, French oak paneling, and custom bronze ironmongery.
                </p>
                <p>
                  Discreet security protocols, independent dual-chiller climate systems, and high-capacity back-up electrical generation ensure flawless continuity for high-profile international occupants and diplomatic delegations.
                </p>
              </div>
            </div>

            {/* Features & Amenities Grid */}
            <div>
              <h2 className="text-xl font-serif font-semibold text-neutral-950 mb-4">
                Curated Amenities &amp; Private Infrastructure
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200/80 bg-white"
                  >
                    <div className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 text-amber-700">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-neutral-800">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Location / Map Guidance Section */}
            <div className="pt-4 border-t border-neutral-200">
              <h2 className="text-xl font-serif font-semibold text-neutral-950 mb-3">
                Location &amp; Global Access
              </h2>
              <p className="text-sm text-neutral-600 mb-4">
                Located in prime {property.city}, {property.country}. Exact GPS coordinates: {property.coordinates.lat.toFixed(4)}° N, {property.coordinates.lng.toFixed(4)}° W.
              </p>

              {/* Map Preview Box */}
              <div className="relative rounded-lg overflow-hidden border border-neutral-300 bg-neutral-900 h-64 flex items-center justify-center text-center p-6">
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
                </div>
                <div className="relative z-10 max-w-md">
                  <Compass className="w-8 h-8 text-amber-400 mx-auto mb-2 animate-bounce" />
                  <h4 className="text-white font-serif text-lg">
                    {property.city}, {property.country}
                  </h4>
                  <p className="text-xs text-neutral-300 font-mono mt-1">
                    Coordinates: {property.coordinates.lat.toFixed(4)}, {property.coordinates.lng.toFixed(4)}
                  </p>
                  <p className="text-xs text-neutral-400 mt-2">
                    Private jet runways and helipads within 25 minutes. Michelin-starred culinary enclaves and yacht anchorages within close proximity.
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${property.coordinates.lat},${property.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 rounded bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Video Section if available */}
            {property.hasVideo && property.videoUrl && (
              <div className="pt-4 border-t border-neutral-200">
                <h2 className="text-xl font-serif font-semibold text-neutral-950 mb-3 flex items-center gap-2">
                  <Video className="w-5 h-5 text-neutral-800" />
                  <span>Cinematic Residence Walk-Through</span>
                </h2>
                <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                  <video
                    src={property.videoUrl}
                    controls
                    poster={images[0]}
                    className="w-full h-full object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN (4 cols): Sticky Inquire & Broker Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">
              {/* Broker / Agent Card */}
              <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-3.5 pb-4 border-b border-neutral-100">
                  <img
                    src={property.broker.photoUrl}
                    alt={property.broker.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-neutral-200"
                  />
                  <div>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-amber-700 uppercase font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                      <span>Verified Prime Broker</span>
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-neutral-950 mt-0.5">
                      {property.broker.name}
                    </h3>
                    <p className="text-xs text-neutral-500">{property.broker.agency}</p>
                  </div>
                </div>

                <div className="pt-3 grid grid-cols-2 gap-2 text-xs">
                  <a
                    href={`tel:${property.broker.phone}`}
                    className="py-2 px-3 rounded border border-neutral-200 hover:border-neutral-400 text-center flex items-center justify-center gap-1.5 text-neutral-800 font-medium transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Call Broker</span>
                  </a>
                  <a
                    href={`mailto:${property.broker.email}?subject=Inquiry for ${encodeURIComponent(property.title)}`}
                    className="py-2 px-3 rounded border border-neutral-200 hover:border-neutral-400 text-center flex items-center justify-center gap-1.5 text-neutral-800 font-medium transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Email Broker</span>
                  </a>
                </div>
              </div>

              {/* Inquiry & Schedule Private Viewing Form */}
              <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-md">
                <h3 className="font-serif text-lg font-semibold text-neutral-950 mb-1">
                  Schedule Private Viewing
                </h3>
                <p className="text-xs text-neutral-500 mb-4">
                  Request an exclusive escorted walkthrough or confidential transaction prospectus.
                </p>

                {formSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5 text-center text-emerald-900">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <h4 className="font-serif font-bold text-base">Inquiry Dispatched</h4>
                    <p className="text-xs mt-1 text-emerald-700">
                      Our Private Client Director for {property.city} will contact you within 4 hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-4 text-xs font-semibold text-emerald-800 underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-3">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="Lord / Lady / Dr. / Mr. / Ms."
                        className="w-full px-3 py-2 text-xs border border-neutral-200 rounded focus:outline-none focus:border-neutral-900 bg-neutral-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="client@familyoffice.com"
                        className="w-full px-3 py-2 text-xs border border-neutral-200 rounded focus:outline-none focus:border-neutral-900 bg-neutral-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3 py-2 text-xs border border-neutral-200 rounded focus:outline-none focus:border-neutral-900 bg-neutral-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                        Target Viewing Date
                      </label>
                      <input
                        type="date"
                        value={formDate}
                        onChange={(e) => setFormDate(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-neutral-200 rounded focus:outline-none focus:border-neutral-900 bg-neutral-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                        Confidential Message
                      </label>
                      <textarea
                        rows={3}
                        value={formMessage}
                        onChange={(e) => setFormMessage(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-neutral-200 rounded focus:outline-none focus:border-neutral-900 bg-neutral-50/50 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Private Inquiry</span>
                    </button>
                  </form>
                )}

                {/* Direct WhatsApp Concierge CTA */}
                <div className="mt-4 pt-4 border-t border-neutral-100">
                  <a
                    href={`https://wa.me/${site81Config.WHATSAPP}?text=Hello%2C%20I%20am%20inquiring%20about%20Valtierra%20Listing%20Ref%20VLT-${property.id.toUpperCase()}%20(${encodeURIComponent(property.title)})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp Direct Concierge</span>
                  </a>
                </div>
              </div>

              {/* Sell Your Property Box */}
              <div className="bg-neutral-900 text-white p-5 rounded-xl text-center">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
                  Valtierra Private Client Office
                </span>
                <h4 className="font-serif text-base font-semibold mt-1">
                  Own an Iconic Estate?
                </h4>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  List discreetly with our global syndicate reaching 140,000+ verified ultra-high-net-worth investors.
                </p>
                <button
                  onClick={onOpenSellModal}
                  className="mt-3 px-4 py-1.5 border border-white/40 hover:bg-white hover:text-black text-xs font-semibold uppercase tracking-wider rounded transition-all cursor-pointer"
                >
                  List with Valtierra
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Similar & Recommended Properties Section */}
        {similarProperties.length > 0 && (
          <div className="mt-16 pt-12 border-t border-neutral-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
                  Curated Recommendations
                </span>
                <h2 className="text-2xl font-serif font-semibold text-neutral-950 mt-1">
                  Similar Ultra-Prime Properties
                </h2>
              </div>
              <button
                onClick={onBack}
                className="text-xs font-mono text-neutral-700 hover:underline uppercase"
              >
                View Full Catalog →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarProperties.map((simProp) => (
                <Site81PropertyCard
                  key={simProp.id}
                  property={simProp}
                  currency={currency}
                  unit={unit}
                  isFavorite={false}
                  onToggleFavorite={onToggleFavorite}
                  onSelectProperty={onSelectProperty}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 5. Fullscreen Photo Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6">
          {/* Lightbox Header */}
          <div className="flex items-center justify-between text-white pb-3 border-b border-white/10">
            <div>
              <h3 className="font-serif text-lg font-light">{property.title}</h3>
              <p className="text-xs font-mono text-neutral-400">
                Photo {selectedPhotoIndex + 1} of {images.length} · {property.city}, {property.country}
              </p>
            </div>
            <button
              onClick={() => setLightboxOpen(false)}
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Main Image & Prev/Next Arrows */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            <button
              onClick={() =>
                setSelectedPhotoIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
              }
              className="absolute left-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer z-10"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={images[selectedPhotoIndex]}
              alt={`${property.title} photo`}
              className="max-h-[75vh] max-w-full object-contain shadow-2xl transition-all duration-300"
            />

            <button
              onClick={() =>
                setSelectedPhotoIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
              }
              className="absolute right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer z-10"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Thumbnail Strip */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto py-2">
            {images.map((imgUrl, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedPhotoIndex(idx)}
                className={`w-16 h-12 rounded overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                  selectedPhotoIndex === idx ? 'border-amber-400 opacity-100 scale-105' : 'border-transparent opacity-50 hover:opacity-80'
                }`}
              >
                <img src={imgUrl} alt="thumb" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 6. Video Film Lightbox Modal */}
      {isVideoModalOpen && property.videoUrl && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
          <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 text-white/80 hover:text-white bg-black/60 rounded-full cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video">
              <video
                src={property.videoUrl}
                controls
                autoPlay
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};
