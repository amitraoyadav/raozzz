import React from 'react';
import {
  Bed,
  Bath,
  Maximize2,
  MapPin,
  CheckCircle2,
  Heart,
  Share2,
  ArrowRight,
  ShieldCheck,
  Building,
  Calendar,
  Sparkles
} from 'lucide-react';
import { PropertyItem } from '../../data/squareYardDealersData';

interface PropertyCardProps {
  property: PropertyItem;
  onViewDetails: (property: PropertyItem) => void;
  onToggleFavorite?: (propertyId: string) => void;
  isFavorite?: boolean;
  onShare?: (property: PropertyItem) => void;
}

export const SquareYardDealersPropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onViewDetails,
  onToggleFavorite,
  isFavorite = false,
  onShare
}) => {
  return (
    <article className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
      <div>
        {/* Image Container with Badges */}
        <div className="relative h-56 bg-slate-100 overflow-hidden cursor-pointer" onClick={() => onViewDetails(property)}>
          <img
            src={property.images[0] || 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />

          {/* Top Badges Overlay */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-1.5 flex-wrap">
              {property.verified && (
                <span className="px-2.5 py-1 rounded-full bg-emerald-600/90 text-white font-bold text-[10px] uppercase tracking-wider backdrop-blur-xs flex items-center gap-1 shadow-sm">
                  <ShieldCheck className="w-3 h-3 text-white" />
                  <span>Verified</span>
                </span>
              )}
              <span className="px-2.5 py-1 rounded-full bg-slate-900/80 text-white font-bold text-[10px] uppercase tracking-wider backdrop-blur-xs shadow-sm">
                {property.propertyType}
              </span>
              {property.hotDeal && (
                <span className="px-2.5 py-1 rounded-full bg-amber-500 text-slate-950 font-black text-[10px] uppercase tracking-wider shadow-sm">
                  Hot Deal
                </span>
              )}
            </div>

            {/* Favorite & Share Buttons */}
            <div className="flex items-center gap-1.5 pointer-events-auto">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onShare?.(property);
                }}
                className="w-8 h-8 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
                title="Share Property"
              >
                <Share2 className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleFavorite?.(property.id);
                }}
                className="w-8 h-8 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
                title="Add to Shortlist"
              >
                <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-rose-500 text-rose-500' : ''}`} />
              </button>
            </div>
          </div>

          {/* Bottom Overlay: Price */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-4 flex items-end justify-between text-white">
            <div>
              <span className="text-[10px] text-slate-300 uppercase tracking-wider block font-semibold">
                {property.listingType === 'buy' ? 'Price' : 'Monthly Rent'}
              </span>
              <strong className="text-xl font-black text-amber-300 tracking-tight">
                {property.priceDisplay}
              </strong>
            </div>
            {property.pricePerSqFt && (
              <span className="text-[11px] text-slate-300 font-medium">
                {property.pricePerSqFt}
              </span>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 space-y-3">
          <div>
            <h3
              onClick={() => onViewDetails(property)}
              className="font-bold text-base text-slate-900 line-clamp-1 group-hover:text-blue-600 transition-colors cursor-pointer"
              title={property.title}
            >
              {property.title}
            </h3>
            <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="line-clamp-1">{property.location}</span>
            </p>
          </div>

          {/* Key Specs Pills */}
          <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-100 text-xs text-slate-700">
            {property.bedrooms > 0 && (
              <div className="flex items-center gap-1.5">
                <Bed className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span className="font-semibold">{property.bedrooms} BHK</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>{property.area} {property.areaUnit}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span className="truncate">{property.possessionStatus}</span>
            </div>
          </div>

          {/* Highlights / Amenities preview */}
          <div className="flex items-center gap-1.5 flex-wrap text-[11px] text-slate-500">
            <span className="px-2 py-0.5 rounded-md bg-slate-100 font-medium">
              {property.furnishing}
            </span>
            {property.floor && (
              <span className="px-2 py-0.5 rounded-md bg-slate-100 font-medium">
                {property.floor}
              </span>
            )}
            {property.facing && (
              <span className="px-2 py-0.5 rounded-md bg-slate-100 font-medium">
                {property.facing} Facing
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer: CTA */}
      <div className="p-5 pt-0 flex items-center justify-between gap-3">
        <span className="text-[11px] text-slate-400 truncate">
          By {property.postedBy}
        </span>

        <button
          type="button"
          onClick={() => onViewDetails(property)}
          className="py-2 px-4 rounded-full bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
        >
          <span>View Property</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
};
