import React from 'react';
import {
  X,
  Heart,
  Trash2,
  ExternalLink,
  MapPin,
  Building,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { WealthProperty, WEALTH_PROPERTIES } from '../../data/site82Data';

interface Site82WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistIds: string[];
  onRemoveFromWishlist: (id: string) => void;
  onClearWishlist: () => void;
  onSelectProperty: (property: WealthProperty) => void;
  onExploreProperties: () => void;
}

export const Site82WishlistDrawer: React.FC<Site82WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistIds,
  onRemoveFromWishlist,
  onClearWishlist,
  onSelectProperty,
  onExploreProperties
}) => {
  if (!isOpen) return null;

  const wishlistedProperties = WEALTH_PROPERTIES.filter((p) => wishlistIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-[#F0D9CC]">
          {/* Header */}
          <div className="p-5 bg-gradient-to-r from-[#F54900] to-[#F36F21] text-white flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">My Saved Properties</h3>
                <span className="text-xs text-white/80">
                  {wishlistedProperties.length} {wishlistedProperties.length === 1 ? 'property' : 'properties'} saved
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {wishlistedProperties.length > 0 && (
                <button
                  onClick={onClearWishlist}
                  className="text-xs text-white/80 hover:text-white transition-colors cursor-pointer p-1"
                  title="Clear Wishlist"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* List Content */}
          <div className="p-4 overflow-y-auto flex-1 divide-y divide-neutral-100 bg-[#FCFAF9]">
            {wishlistedProperties.length === 0 ? (
              <div className="text-center py-20 px-4">
                <div className="w-16 h-16 rounded-full bg-orange-100 text-[#F54900] flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-base text-neutral-800">Your wishlist is empty</h4>
                <p className="text-xs text-neutral-500 mt-1 max-w-xs mx-auto leading-relaxed mb-6">
                  Save your favorite residential apartments, commercial shops, and penthouses to review and compare anytime.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onExploreProperties();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#F54900] text-white text-xs font-bold hover:bg-[#E65100] transition-colors cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>Browse Properties</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              wishlistedProperties.map((p) => (
                <div key={p.id} className="py-3.5 first:pt-0 flex gap-3 group">
                  <div
                    onClick={() => {
                      onSelectProperty(p);
                      onClose();
                    }}
                    className="w-24 h-24 rounded-xl overflow-hidden shrink-0 cursor-pointer relative"
                  >
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-black/70 text-white font-mono text-[9px]">
                      {p.city}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h5
                          onClick={() => {
                            onSelectProperty(p);
                            onClose();
                          }}
                          className="font-bold text-xs sm:text-sm text-neutral-900 truncate hover:text-[#F54900] transition-colors cursor-pointer"
                        >
                          {p.name}
                        </h5>
                        <button
                          onClick={() => onRemoveFromWishlist(p.id)}
                          className="text-neutral-400 hover:text-red-500 transition-colors p-1 cursor-pointer shrink-0"
                          title="Remove from saved"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-[11px] text-neutral-500 truncate flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-[#F54900] shrink-0" />
                        <span>{p.location}</span>
                      </p>

                      <div className="text-xs font-bold text-[#F54900] mt-1">
                        {p.priceFormatted}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[10px] text-neutral-500 font-mono">
                        {p.configuration}
                      </span>
                      <button
                        onClick={() => {
                          onSelectProperty(p);
                          onClose();
                        }}
                        className="text-[11px] font-semibold text-neutral-800 hover:text-[#F54900] flex items-center gap-1 cursor-pointer"
                      >
                        <span>View</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Bottom Action Footer */}
          {wishlistedProperties.length > 0 && (
            <div className="p-4 bg-neutral-50 border-t border-neutral-200 shrink-0">
              <button
                onClick={() => {
                  onClose();
                  onExploreProperties();
                }}
                className="w-full py-2.5 rounded-xl bg-[#F54900] text-white font-bold text-xs hover:bg-[#E65100] transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Continue Browsing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
