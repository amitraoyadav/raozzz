import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { ProductItem } from '../../data/site76Data';

interface Site76SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: ProductItem[];
  onSelectProduct: (product: ProductItem) => void;
  onSearchQuerySubmit: (query: string) => void;
}

export const Site76SearchModal: React.FC<Site76SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
  onSearchQuerySubmit
}) => {
  const [query, setQuery] = useState('');

  const quickSearches = [
    'Khadi Cotton',
    'Pure Linen Dress',
    'Wild Hemp',
    'Jamdani',
    'Botanical Indigo',
    'Waffle Co-ord',
    'Madder Root',
    'Lounge Kimono'
  ];

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.material.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    ).slice(0, 6);
  }, [products, query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-start justify-center pt-20 p-4">
      <div className="bg-[#FDFBF7] rounded-3xl max-w-2xl w-full border border-[#E8E1D5] shadow-2xl overflow-hidden">
        {/* Search Bar Input */}
        <div className="p-4 sm:p-6 border-b border-[#E8E1D5] flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-[#6F736D]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && query.trim()) {
                onSearchQuerySubmit(query.trim());
                onClose();
              }
            }}
            placeholder="Search natural garments, materials, silhouettes..."
            className="flex-1 bg-transparent text-base sm:text-lg text-[#1E1F21] placeholder-[#9FA895] focus:outline-hidden font-light"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 text-[#6F736D] hover:text-[#1E1F21]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="ml-2 text-xs font-semibold uppercase tracking-wider text-[#6F736D] hover:text-[#1E1F21]"
          >
            Esc
          </button>
        </div>

        {/* Content Box */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Quick Search Tags */}
          <div className="space-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#9C4C36] font-mono">
              Curated Queries
            </span>
            <div className="flex flex-wrap gap-2">
              {quickSearches.map(tag => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setQuery(tag)}
                  className="px-3 py-1 bg-white border border-[#D5C7B5] hover:border-[#1E1F21] rounded-full text-xs text-[#544133] transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Results List */}
          {query.trim() && (
            <div className="space-y-3 pt-2">
              <span className="text-xs font-semibold text-[#1E1F21]">
                Found {results.length} pieces for "{query}"
              </span>

              {results.length > 0 ? (
                <div className="space-y-2">
                  {results.map(prod => (
                    <div
                      key={prod.id}
                      onClick={() => { onSelectProduct(prod); onClose(); }}
                      className="flex items-center gap-4 p-2.5 rounded-xl hover:bg-[#F5EFEB] transition-colors cursor-pointer border border-transparent hover:border-[#E8E1D5]"
                    >
                      <img
                        src={prod.images[0]}
                        alt={prod.name}
                        className="w-14 h-16 object-cover rounded-lg border border-[#E8E1D5]"
                      />
                      <div className="flex-1">
                        <h4 className="font-['Cormorant_Garamond',serif] text-base font-bold text-[#1E1F21] line-clamp-1">
                          {prod.name}
                        </h4>
                        <p className="text-xs text-[#6F736D]">{prod.material}</p>
                        <p className="font-mono text-xs font-bold text-[#1E1F21]">₹{prod.price.toLocaleString('en-IN')}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#9FA895]" />
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={() => { onSearchQuerySubmit(query); onClose(); }}
                    className="w-full text-center py-2.5 text-xs font-semibold text-[#C16A52] hover:underline"
                  >
                    View all matching results in Shop →
                  </button>
                </div>
              ) : (
                <div className="py-8 text-center text-xs text-[#6F736D]">
                  No exact match found. Try searching for "linen", "cotton", or "kurta".
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
