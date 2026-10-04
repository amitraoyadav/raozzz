import React, { useState } from 'react';
import {
  X,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Award,
  ChevronRight,
  Layers,
  Calendar,
  ChefHat,
  BedDouble,
  Tv,
  UtensilsCrossed,
  Sparkle,
  Baby,
} from 'lucide-react';
import { PRODUCT_CATEGORIES_DATA, ProductItem } from '../../data/livintoInteriorsData';

interface LivintoProductDetailModalProps {
  productSlug: string | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const LivintoProductDetailModal: React.FC<LivintoProductDetailModalProps> = ({
  productSlug,
  onClose,
  onOpenConsultation,
}) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  if (!productSlug) return null;

  const product = PRODUCT_CATEGORIES_DATA.find(
    (p) => p.slug === productSlug || p.category === productSlug
  );

  if (!product) return null;

  const allImages = [product.coverImage, ...product.galleryImages];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in">
      <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Visual Area */}
        <div className="relative h-64 sm:h-80 w-full bg-slate-950">
          <img
            src={allImages[activeImageIdx] || product.coverImage}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

          {/* Badges and Title */}
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
            <span className="px-3 py-1 rounded-full bg-[#814882] text-white text-xs font-bold uppercase tracking-wider inline-block">
              {product.category.replace('-', ' ')}
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-4xl text-white">
              {product.name}
            </h2>
            <p className="text-xs sm:text-sm text-amber-300 font-medium">
              {product.tagline}
            </p>
          </div>
        </div>

        {/* Image Thumbnails */}
        {allImages.length > 1 && (
          <div className="p-3 bg-slate-100 flex gap-2 overflow-x-auto border-b border-slate-200">
            {allImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIdx(idx)}
                className={`w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                  activeImageIdx === idx
                    ? 'border-[#814882] scale-105'
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt="thumb" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Overview */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-lg text-slate-900">
              Overview &amp; Design Philosophy
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {product.overview}
            </p>
          </div>

          {/* Styles / Layout Variations */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-lg text-slate-900">
              Available Layout Configurations &amp; Styles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {product.styles.map((st, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col justify-between"
                >
                  <div className="h-28 w-full bg-slate-200 overflow-hidden">
                    <img src={st.image} alt={st.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-3 space-y-1">
                    <div className="font-bold text-xs text-slate-900">{st.name}</div>
                    <p className="text-[11px] text-slate-500 line-clamp-2">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Materials & Hardware Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-3">
              <h4 className="font-serif font-bold text-sm text-[#814882] flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>Materials &amp; Surface Finishes</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {product.materialsAndFinishes.map((mat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#814882] shrink-0" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-100 space-y-3">
              <h4 className="font-serif font-bold text-sm text-amber-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>Certified Hardware &amp; Mechanism</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {product.hardwareBrands.map((hw, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{hw}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Engineering Features */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-lg text-slate-900">
              Key Engineering &amp; Durability Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.keyFeatures.map((feat, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 flex items-center gap-2.5"
                >
                  <div className="w-2 h-2 rounded-full bg-[#814882] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Specific FAQs */}
          <div className="space-y-3 pt-2">
            <h3 className="font-serif font-bold text-lg text-slate-900">
              Common Questions about {product.name}
            </h3>
            <div className="space-y-2">
              {product.faqs.map((faq, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                  <div className="font-bold text-slate-900">{faq.q}</div>
                  <div className="text-slate-600 leading-relaxed">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTA Bar */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              Ready to customize this {product.name.toLowerCase()} for your home layout?
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenConsultation();
                }}
                className="px-6 py-2.5 rounded-xl bg-[#814882] hover:bg-[#6e3a6f] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
              >
                Book Consultation for {product.name}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
