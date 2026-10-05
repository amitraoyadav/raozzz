import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CollectionItem, ProductItem } from '../../data/site76Data';
import { Site76ProductCard } from './Site76ProductCard';

interface Site76CollectionsProps {
  collections: CollectionItem[];
  selectedCollectionSlug?: string | null;
  onSelectCollection: (slug: string) => void;
  onBackToCollections: () => void;
  allProducts: ProductItem[];
  onSelectProduct: (product: ProductItem) => void;
  onQuickView: (product: ProductItem) => void;
  onQuickAdd: (product: ProductItem, size?: string) => void;
  onToggleWishlist: (productId: string) => void;
  wishlistIds: string[];
}

export const Site76Collections: React.FC<Site76CollectionsProps> = ({
  collections,
  selectedCollectionSlug,
  onSelectCollection,
  onBackToCollections,
  allProducts,
  onSelectProduct,
  onQuickView,
  onQuickAdd,
  onToggleWishlist,
  wishlistIds
}) => {
  const currentCollection = selectedCollectionSlug
    ? collections.find(c => c.slug === selectedCollectionSlug)
    : null;

  const collectionProducts = currentCollection
    ? allProducts.filter(p => currentCollection.productIds.includes(p.id))
    : [];

  // Dedicated Collection View
  if (currentCollection) {
    return (
      <div className="bg-[#FDFBF7] min-h-screen py-8 sm:py-16 border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumb */}
          <div className="flex items-center justify-between border-b border-[#E8E1D5] pb-4">
            <button
              type="button"
              onClick={onBackToCollections}
              className="text-xs font-semibold text-[#544133] hover:text-[#C16A52] uppercase tracking-wider flex items-center gap-1.5"
            >
              <span>← All Curated Collections</span>
            </button>
            <div className="text-xs text-[#6F736D] font-mono">
              Collections / {currentCollection.title}
            </div>
          </div>

          {/* Collection Hero Header */}
          <div className="relative aspect-[16/7] rounded-3xl overflow-hidden shadow-2xl border border-[#D5C7B5] bg-[#EAE2D7]">
            <img
              src={currentCollection.heroImage}
              alt={currentCollection.title}
              className="w-full h-full object-cover"
              loading="eager"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E1F21]/80 via-[#1E1F21]/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white space-y-2 max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-[#D5C7B5] font-mono">
                {currentCollection.moodTag}
              </span>
              <h1 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-5xl font-bold">
                {currentCollection.title}
              </h1>
              <p className="text-xs sm:text-sm text-[#F5EFEB] font-light leading-relaxed">
                {currentCollection.description}
              </p>
            </div>
          </div>

          {/* Product Grid */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-bold text-[#1E1F21]">
                Pieces in this Edit ({collectionProducts.length})
              </h2>
              <span className="text-xs text-[#6F736D] font-mono">
                Small-Batch Availability
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {collectionProducts.map(p => (
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
        </div>
      </div>
    );
  }

  // Directory View of Collections
  return (
    <div className="bg-[#FDFBF7] min-h-screen py-10 sm:py-16 border-b border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#9C4C36] font-mono">
            Seasonal Edits &amp; Curations
          </span>
          <h1 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-bold text-[#1E1F21]">
            Curated Collections
          </h1>
          <p className="text-sm text-[#544133] font-light leading-relaxed">
            Each collection is conceived around a specific weaving cluster, natural fiber dialogue, and seasonal rhythm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map(col => (
            <div
              key={col.id}
              onClick={() => onSelectCollection(col.slug)}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E8E1D5] hover:border-[#D5C7B5] hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-[#F5EFEB]">
                  <img
                    src={col.heroImage}
                    alt={col.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[11px] text-[#9C4C36] font-mono uppercase tracking-widest block">
                    {col.moodTag}
                  </span>
                  <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#1E1F21] group-hover:text-[#C16A52] transition-colors">
                    {col.title}
                  </h3>
                  <p className="text-xs text-[#544133] leading-relaxed line-clamp-2">
                    {col.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-[#E8E1D5] flex items-center justify-between text-xs font-semibold text-[#263422] group-hover:text-[#C16A52]">
                <span>Explore {col.productCount} Handcrafted Pieces</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
