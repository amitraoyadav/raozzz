import React, { useState } from 'react';
import {
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  Video,
  Sparkles,
  ShieldCheck,
  Check
} from 'lucide-react';
import { PropertyListing } from '../../data/site81Data';
import { site81Config } from '../../config/site81Config';

interface Site81PropertyCardProps {
  property: PropertyListing;
  currency: string;
  unit: 'sqft' | 'sqm';
  isFavorite: boolean;
  onToggleFavorite: (propertyId: string) => void;
  onSelectProperty: (property: PropertyListing) => void;
}

export const formatCurrencyPrice = (priceUsd: number, currencyCode: string): string => {
  const currencyObj = site81Config.CURRENCIES.find((c) => c.code === currencyCode) || site81Config.CURRENCIES[0];
  const converted = Math.round(priceUsd * currencyObj.rate);

  if (currencyCode === 'USD') {
    return `$${converted.toLocaleString('en-US')}`;
  } else if (currencyCode === 'EUR') {
    return `€${converted.toLocaleString('de-DE')}`;
  } else if (currencyCode === 'GBP') {
    return `£${converted.toLocaleString('en-GB')}`;
  } else if (currencyCode === 'AED') {
    return `AED ${converted.toLocaleString('en-US')}`;
  } else if (currencyCode === 'CHF') {
    return `CHF ${converted.toLocaleString('de-CH')}`;
  } else if (currencyCode === 'INR') {
    return `₹${converted.toLocaleString('en-IN')}`;
  }
  return `${currencyObj.symbol}${converted.toLocaleString()}`;
};

export const Site81PropertyCard: React.FC<Site81PropertyCardProps> = ({
  property,
  currency,
  unit,
  isFavorite,
  onToggleFavorite,
  onSelectProperty
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [copiedShare, setCopiedShare] = useState(false);

  const images = property.images && property.images.length > 0 ? property.images : ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'];

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard?.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleFavorite(property.id);
  };

  const formattedPrice = formatCurrencyPrice(property.priceUsd, currency);
  const sizeDisplay = unit === 'sqft'
    ? `${property.interiorSizeSqFt.toLocaleString()} sq ft`
    : `${property.interiorSizeSqM.toLocaleString()} m²`;

  return (
    <article
      onClick={() => onSelectProperty(property)}
      className="group bg-white rounded-lg overflow-hidden border border-neutral-200/90 hover:border-neutral-400 hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
    >
      {/* 1. Image Container with Carousel Controls */}
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
        <img
          src={images[currentImageIndex]}
          alt={property.title}
          className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Quiet Overlay Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 items-center pointer-events-none">
          {property.isFeatured && (
            <span className="bg-neutral-950/80 backdrop-blur-md text-amber-300 text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded font-semibold border border-amber-300/30">
              Featured
            </span>
          )}
          {property.hasVideo && (
            <span className="bg-neutral-900/80 backdrop-blur-md text-white text-[10px] font-mono uppercase px-2 py-0.5 rounded flex items-center gap-1">
              <Video className="w-3 h-3 text-red-400" />
              <span>Video</span>
            </span>
          )}
          {property.isDirectFromDeveloper && (
            <span className="bg-white/90 backdrop-blur-md text-neutral-900 text-[10px] font-mono uppercase px-2 py-0.5 rounded font-medium">
              Direct Developer
            </span>
          )}
        </div>

        {/* Favorite & Share Buttons */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
          <button
            onClick={handleShare}
            className="w-8 h-8 rounded-full bg-white/90 hover:bg-white text-neutral-700 hover:text-black flex items-center justify-center transition-transform hover:scale-110 shadow-sm cursor-pointer"
            title="Share listing"
            aria-label="Share property"
          >
            {copiedShare ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={handleFavoriteClick}
            className={`w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-transform hover:scale-110 shadow-sm cursor-pointer ${
              isFavorite ? 'text-rose-600' : 'text-neutral-700 hover:text-rose-600'
            }`}
            title={isFavorite ? 'Remove from saved' : 'Save property'}
            aria-label="Save property"
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-600' : ''}`} />
          </button>
        </div>

        {/* Prev / Next Carousel Arrows */}
        {images.length > 1 && (
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Carousel Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-2 inset-x-0 flex justify-center gap-1 pointer-events-none">
            {images.slice(0, 5).map((_, idx) => (
              <span
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  idx === currentImageIndex ? 'bg-white w-3' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* 2. Card Details Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Price and Listing Type */}
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-xl sm:text-2xl font-serif font-bold text-neutral-950 tracking-tight">
              {formattedPrice}
            </span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
              {property.listingType === 'sale' ? 'For Sale' : property.listingType === 'rent' ? 'For Rent' : 'New Development'}
            </span>
          </div>

          {/* Property Title */}
          <h3 className="font-serif text-base sm:text-lg text-neutral-900 group-hover:text-amber-800 transition-colors mt-1 font-normal line-clamp-1">
            {property.title}
          </h3>

          {/* Location Line */}
          <p className="text-xs text-neutral-500 mt-0.5 line-clamp-1">
            {property.address ? `${property.address}, ` : ''}{property.city}, {property.country}
          </p>

          {/* Clean Unboxed Metadata (Zero-Pill Discipline) */}
          <div className="mt-3 pt-3 border-t border-neutral-100 flex items-center flex-wrap gap-x-2 gap-y-1 text-xs text-neutral-600 font-sans">
            <span>{property.bedrooms} Beds</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span>{property.bathrooms} Baths</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span>{sizeDisplay}</span>
            {property.lotSizeAcres && (
              <>
                <span aria-hidden="true" className="text-neutral-300">·</span>
                <span>{property.lotSizeAcres} Acres</span>
              </>
            )}
          </div>
        </div>

        {/* Broker Information */}
        <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
          <div className="flex items-center gap-2">
            <img
              src={property.broker.photoUrl}
              alt={property.broker.name}
              className="w-5 h-5 rounded-full object-cover border border-neutral-200"
            />
            <span className="truncate max-w-[140px] text-neutral-700 font-medium">
              {property.broker.agency}
            </span>
          </div>
          <span className="text-amber-700 font-mono text-[10px] uppercase tracking-wider group-hover:translate-x-0.5 transition-transform">
            View Details →
          </span>
        </div>
      </div>
    </article>
  );
};
