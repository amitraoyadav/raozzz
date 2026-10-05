import React from 'react';
import { Leaf, ArrowRight, ShieldCheck, Check, Sparkles, Feather, Droplet, Sun, Wind } from 'lucide-react';
import { MaterialDetail, ProductItem } from '../../data/site76Data';
import { Site76ProductCard } from './Site76ProductCard';

interface Site76MaterialsProps {
  materials: MaterialDetail[];
  selectedMaterialSlug?: string | null;
  onSelectMaterial: (slug: string) => void;
  onBackToDirectory: () => void;
  allProducts: ProductItem[];
  onSelectProduct: (product: ProductItem) => void;
  onQuickView: (product: ProductItem) => void;
  onQuickAdd: (product: ProductItem, size?: string) => void;
  onToggleWishlist: (productId: string) => void;
  wishlistIds: string[];
}

export const Site76Materials: React.FC<Site76MaterialsProps> = ({
  materials,
  selectedMaterialSlug,
  onSelectMaterial,
  onBackToDirectory,
  allProducts,
  onSelectProduct,
  onQuickView,
  onQuickAdd,
  onToggleWishlist,
  wishlistIds
}) => {
  const currentMaterial = selectedMaterialSlug
    ? materials.find(m => m.slug === selectedMaterialSlug)
    : null;

  // Filter products belonging to this material
  const materialProducts = currentMaterial
    ? allProducts.filter(p => currentMaterial.relatedProductIds.includes(p.id) || p.material.toLowerCase().includes(currentMaterial.name.toLowerCase()))
    : [];

  // If a specific material is selected, show the full dedicated material deep dive
  if (currentMaterial) {
    return (
      <div className="bg-[#FDFBF7] min-h-screen py-8 sm:py-16 border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Top Breadcrumb */}
          <div className="flex items-center justify-between border-b border-[#E8E1D5] pb-4">
            <button
              type="button"
              onClick={onBackToDirectory}
              className="text-xs font-semibold text-[#544133] hover:text-[#C16A52] uppercase tracking-wider flex items-center gap-1.5"
            >
              <span>← Back to Materials Directory</span>
            </button>
            <div className="text-xs text-[#6F736D] font-mono">
              Natural Fibers / {currentMaterial.name}
            </div>
          </div>

          {/* Material Hero Banner */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#9C4C36] font-mono">
                <Leaf className="w-3.5 h-3.5 text-[#586737]" />
                <span>Fiber Provenance · {currentMaterial.subtitle}</span>
              </div>

              <h1 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-6xl font-bold text-[#1E1F21] leading-tight">
                {currentMaterial.name}
              </h1>

              <p className="text-base sm:text-lg text-[#544133] font-light leading-relaxed">
                {currentMaterial.tagline}
              </p>

              <p className="text-sm text-[#544133] leading-relaxed">
                {currentMaterial.description}
              </p>

              {/* Texture Profile */}
              <div className="p-4 rounded-xl bg-[#F5EFEB] border border-[#D5C7B5] space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1E1F21]">
                  Tactile Character &amp; Handfeel
                </span>
                <p className="text-xs text-[#544133] leading-relaxed">
                  {currentMaterial.texture}
                </p>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                {currentMaterial.stats.map((stat, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-lg border border-[#E8E1D5]">
                    <span className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#1E1F21] block">
                      {stat.value}
                    </span>
                    <span className="text-[11px] text-[#6F736D] uppercase tracking-wider block">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5 aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden shadow-xl border border-[#D5C7B5] bg-[#EAE2D7]">
              <img
                src={currentMaterial.heroImage}
                alt={`${currentMaterial.name} close up textile photography`}
                className="w-full h-full object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Benefits & Ecological Impact */}
          <div className="border-t border-[#E8E1D5] pt-12 space-y-6">
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl font-bold text-[#1E1F21]">
              Why We Choose {currentMaterial.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentMaterial.benefits.map((benefit, i) => (
                <div key={i} className="p-5 bg-white rounded-xl border border-[#E8E1D5] space-y-2">
                  <div className="w-8 h-8 rounded-full bg-[#F5EFEB] flex items-center justify-center text-[#586737]">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-xs text-[#544133] leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 4-Step Crafting & Weaving Process */}
          <div className="border-t border-[#E8E1D5] pt-12 space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#9C4C36] font-mono">
                From Soil to Silhouette
              </p>
              <h2 className="font-['Cormorant_Garamond',serif] text-3xl font-bold text-[#1E1F21]">
                The Crafting Lifecycle
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentMaterial.craftingProcess.map((proc) => (
                <div key={proc.step} className="bg-[#F5EFEB] p-6 rounded-xl border border-[#E8E1D5] space-y-3">
                  <span className="font-['Cormorant_Garamond',serif] text-3xl font-bold text-[#C16A52] block tabular-nums">
                    {proc.step}
                  </span>
                  <h3 className="text-sm font-bold text-[#1E1F21]">
                    {proc.title}
                  </h3>
                  <p className="text-xs text-[#544133] leading-relaxed">
                    {proc.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Provenance & Care */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#E8E1D5]">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#9C4C36]">
                Geographical Provenance
              </span>
              <p className="font-['Cormorant_Garamond',serif] text-xl font-bold text-[#1E1F21]">
                {currentMaterial.origin}
              </p>
              <p className="text-xs text-[#544133]">
                Directly commissioned through registered weaver societies ensuring ethical living wages and zero exploitative middle agents.
              </p>
            </div>
            <div className="space-y-2 border-t md:border-t-0 md:border-l border-[#E8E1D5] pt-4 md:pt-0 md:pl-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#9C4C36]">
                Slow Laundering Guide
              </span>
              <p className="text-xs text-[#544133] leading-relaxed">
                {currentMaterial.careGuide}
              </p>
            </div>
          </div>

          {/* Products using this specific material */}
          {materialProducts.length > 0 && (
            <div className="border-t border-[#E8E1D5] pt-12 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#9C4C36] font-mono">
                    Living Collection
                  </p>
                  <h2 className="font-['Cormorant_Garamond',serif] text-3xl font-bold text-[#1E1F21]">
                    Garments Woven From {currentMaterial.name}
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {materialProducts.map(p => (
                  <Site76ProductCard
                    key={p.id}
                    product={p}
                    onSelect={onSelectProduct}
                    onQuickView={onQuickView}
                    onQuickAdd={onQuickAdd}
                    onToggleWishlist={onToggleWishlist}
                    isWishlisted={wishlistIds.includes(p.id)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // DEFAULT VIEW: /materials Directory
  return (
    <div className="bg-[#FDFBF7] min-h-screen py-10 sm:py-16 border-b border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Directory Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#9C4C36] font-mono">
            <span>Natural Materiality</span>
            <span aria-hidden="true">·</span>
            <span>Zero Synthetics</span>
          </div>
          <h1 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-bold text-[#1E1F21]">
            The 6 Ancient Fibers of Aranya Earth
          </h1>
          <p className="text-sm sm:text-base text-[#544133] font-light leading-relaxed">
            Every garment begins in fertile soil, rainfall, and sunshine. We refuse synthetic polyester, acrylic, or elastane blends in favor of 100% biodegradable natural fibers.
          </p>
        </div>

        {/* 6 Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map((mat) => (
            <div
              key={mat.id}
              onClick={() => onSelectMaterial(mat.slug)}
              className="bg-white rounded-2xl overflow-hidden border border-[#E8E1D5] hover:border-[#D5C7B5] hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-[#F5EFEB]">
                  <img
                    src={mat.heroImage}
                    alt={mat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-[#9C4C36] font-mono uppercase tracking-wider">
                    <span>{mat.subtitle}</span>
                    <span>{mat.origin.split(',')[0]}</span>
                  </div>
                  <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#1E1F21] group-hover:text-[#C16A52] transition-colors">
                    {mat.name}
                  </h3>
                  <p className="text-xs text-[#544133] line-clamp-3 leading-relaxed">
                    {mat.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-[#E8E1D5] flex items-center justify-between text-xs font-semibold text-[#263422] group-hover:text-[#C16A52] transition-colors">
                <span>Explore Fiber &amp; Weaving Process</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Environmental Integrity Commitment */}
        <div className="bg-[#263422] text-[#FDFBF7] p-8 sm:p-12 rounded-3xl space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#D5C7B5] font-mono">
              Strict Scientific Integrity
            </span>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl font-bold">
              Only Claims Supported by Empirical Weaving Data
            </h2>
            <p className="text-xs sm:text-sm text-[#EAE2D7] leading-relaxed font-light">
              We never make ambiguous greenwashing claims. Our organic cotton is verified under GOTS transaction certificates; our wild hemp is harvested with state forestry permits in Uttarakhand; our indigo vats are free of synthetic sodium hydrosulfite.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[#354830] pt-6">
            <div>
              <span className="font-['Cormorant_Garamond',serif] text-3xl font-bold text-white block">100%</span>
              <span className="text-[11px] text-[#98A391]">Biodegradable Fibers</span>
            </div>
            <div>
              <span className="font-['Cormorant_Garamond',serif] text-3xl font-bold text-white block">Zero</span>
              <span className="text-[11px] text-[#98A391]">Petroleum Polyester</span>
            </div>
            <div>
              <span className="font-['Cormorant_Garamond',serif] text-3xl font-bold text-white block">1,200+</span>
              <span className="text-[11px] text-[#98A391]">Weavers Supported</span>
            </div>
            <div>
              <span className="font-['Cormorant_Garamond',serif] text-3xl font-bold text-white block">GOTS</span>
              <span className="text-[11px] text-[#98A391]">Certified Organic Processing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
