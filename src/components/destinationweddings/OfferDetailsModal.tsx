import React from 'react';
import { X, Check, Gift, Sparkles, ArrowRight } from 'lucide-react';
import { DWExclusiveOffer } from './destinationWeddingsData';

interface OfferDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  offer: DWExclusiveOffer | null;
  onClaimOffer: () => void;
}

export const OfferDetailsModal: React.FC<OfferDetailsModalProps> = ({
  isOpen,
  onClose,
  offer,
  onClaimOffer
}) => {
  if (!isOpen || !offer) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#1b1e24] text-white border border-[#2e3440] rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="relative h-48 overflow-hidden">
          <img src={offer.image} alt={offer.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b1e24] via-black/40 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-6">
            <span className="px-2.5 py-0.5 rounded-full bg-[#b3275a] text-white text-[10px] font-bold uppercase tracking-wider">
              {offer.badge}
            </span>
            <h3 className="text-xl font-black text-white mt-1">{offer.title}</h3>
          </div>
        </div>

        <div className="p-6 space-y-4 text-xs">
          <p className="text-stone-300 leading-relaxed">
            {offer.description}
          </p>

          <div className="bg-[#242832] p-4 rounded-xl border border-stone-800">
            <span className="block font-bold text-white uppercase tracking-wider mb-2">
              What&rsquo;s Included In This Promotion:
            </span>
            <ul className="space-y-2 text-stone-300">
              {offer.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#b3275a] shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2 flex items-center justify-between gap-3">
            <span className="text-[11px] text-stone-400">
              Offered by {offer.resortBrand}
            </span>
            <button
              onClick={() => {
                onClose();
                onClaimOffer();
              }}
              className="px-6 py-2.5 rounded-full bg-[#b3275a] hover:bg-[#c93268] text-white font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>Apply Offer To My Wedding</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
