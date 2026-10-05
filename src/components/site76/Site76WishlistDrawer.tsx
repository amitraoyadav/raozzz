import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { ProductItem } from '../../data/site76Data';

interface Site76WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: ProductItem[];
  onRemoveFromWishlist: (productId: string) => void;
  onMoveToCart: (product: ProductItem, size?: string) => void;
  onSelectProduct: (product: ProductItem) => void;
}

export const Site76WishlistDrawer: React.FC<Site76WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveFromWishlist,
  onMoveToCart,
  onSelectProduct
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-[#FDFBF7] shadow-2xl flex flex-col z-50 border-l border-[#E8E1D5]">
        {/* Header */}
        <div className="p-5 border-b border-[#E8E1D5] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#C16A52] fill-[#C16A52]" />
            <h2 className="font-['Cormorant_Garamond',serif] text-xl font-bold text-[#1E1F21]">
              Saved Pieces ({wishlistProducts.length})
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#6F736D] hover:text-[#1E1F21] rounded-md transition-colors"
            aria-label="Close wishlist drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {wishlistProducts.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#F5EFEB] mx-auto flex items-center justify-center text-[#6F736D]">
                <Heart className="w-6 h-6" />
              </div>
              <p className="font-['Cormorant_Garamond',serif] text-xl font-bold text-[#1E1F21]">
                Your wishlist is empty
              </p>
              <p className="text-xs text-[#6F736D] max-w-xs mx-auto">
                Save pieces as you browse to keep track of seasonal small-batch loom releases.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-2 px-6 py-2 rounded-full bg-[#263422] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#354830] transition-colors"
              >
                Browse Natural Silhouettes
              </button>
            </div>
          ) : (
            wishlistProducts.map(product => (
              <div
                key={product.id}
                className="flex gap-4 p-3 bg-white rounded-xl border border-[#E8E1D5] hover:border-[#D5C7B5] transition-all"
              >
                <div
                  onClick={() => { onSelectProduct(product); onClose(); }}
                  className="w-20 h-24 rounded-lg overflow-hidden bg-[#F5EFEB] shrink-0 border border-[#E8E1D5] cursor-pointer"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-start justify-between gap-2">
                      <h4
                        onClick={() => { onSelectProduct(product); onClose(); }}
                        className="font-['Cormorant_Garamond',serif] text-base font-bold text-[#1E1F21] line-clamp-1 hover:text-[#C16A52] cursor-pointer"
                      >
                        {product.name}
                      </h4>
                      <button
                        type="button"
                        onClick={() => onRemoveFromWishlist(product.id)}
                        className="text-[#9FA895] hover:text-[#C16A52] p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-[11px] text-[#9C4C36] font-mono uppercase tracking-wider">
                      {product.material}
                    </p>
                    <p className="font-mono text-xs font-bold text-[#1E1F21] tabular-nums">
                      ₹{product.price.toLocaleString('en-IN')}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => onMoveToCart(product)}
                      className="px-3 py-1.5 rounded-full bg-[#263422] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#354830] transition-colors flex items-center gap-1.5"
                    >
                      <ShoppingBag className="w-3 h-3 text-[#D5C7B5]" />
                      <span>Move to Bag</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
