import React, { useState } from 'react';
import { X, ShoppingBag, Heart, ArrowRight, Leaf, Ruler } from 'lucide-react';
import { ProductItem } from '../../data/site76Data';

interface Site76QuickViewModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onAddToCart: (product: ProductItem, size: string, color: string, quantity: number) => void;
  onViewFullDetails: (product: ProductItem) => void;
  onToggleWishlist: (productId: string) => void;
  isWishlisted: boolean;
  onOpenSizeGuide: () => void;
}

export const Site76QuickViewModal: React.FC<Site76QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onViewFullDetails,
  onToggleWishlist,
  isWishlisted,
  onOpenSizeGuide
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string>(product.availableSizes[0] || 'M');
  const [selectedColor, setSelectedColor] = useState<string>(product.availableColors[0]?.name || 'Natural');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FDFBF7] rounded-3xl max-w-2xl w-full border border-[#E8E1D5] shadow-2xl overflow-hidden relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-[#1E1F21] shadow-xs"
          aria-label="Close quick view"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Image */}
          <div className="aspect-[3/4] bg-[#F5EFEB] overflow-hidden relative">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 bg-white/90 text-[#1E1F21] text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded">
                {product.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[11px] text-[#9C4C36] font-mono uppercase tracking-wider block">
                {product.material}
              </span>

              <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#1E1F21]">
                {product.name}
              </h3>

              <div className="flex items-baseline gap-2 pt-1">
                <span className="font-mono text-xl font-bold text-[#1E1F21] tabular-nums">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice > product.price && (
                  <span className="font-mono text-xs text-[#9FA895] line-through tabular-nums">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
              </div>

              <p className="text-xs text-[#544133] line-clamp-3 leading-relaxed">
                {product.description}
              </p>

              {/* Color swatches */}
              <div className="space-y-1.5 pt-2">
                <span className="text-xs font-semibold text-[#1E1F21]">
                  Color: <span className="font-normal text-[#544133]">{selectedColor}</span>
                </span>
                <div className="flex gap-2">
                  {product.availableColors.map((c, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-6 h-6 rounded-full border border-black/20 ${selectedColor === c.name ? 'ring-2 ring-[#C16A52]' : ''}`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-[#1E1F21]">Size</span>
                  <button
                    type="button"
                    onClick={() => { onClose(); onOpenSizeGuide(); }}
                    className="text-[#C16A52] hover:underline inline-flex items-center gap-1"
                  >
                    <Ruler className="w-3 h-3" /> Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {product.availableSizes.map(s => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelectedSize(s)}
                      className={`min-w-10 py-1.5 px-2 text-xs font-semibold rounded-md border ${
                        selectedSize === s ? 'bg-[#263422] text-white border-[#263422]' : 'bg-white border-[#D5C7B5]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2 pt-4 border-t border-[#E8E1D5]">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleAdd}
                  className="flex-1 py-3 px-4 rounded-full bg-[#263422] hover:bg-[#354830] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 text-[#D5C7B5]" />
                  <span>{added ? 'Added to Bag!' : 'Add to Bag'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => onToggleWishlist(product.id)}
                  className={`p-3 rounded-full border border-[#D5C7B5] ${isWishlisted ? 'bg-[#C16A52] text-white' : 'bg-white text-[#1E1F21]'}`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              <button
                type="button"
                onClick={() => { onClose(); onViewFullDetails(product); }}
                className="w-full text-center text-xs font-semibold text-[#9C4C36] hover:underline pt-1 flex items-center justify-center gap-1"
              >
                <span>View Full Craft Provenance &amp; Care Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
