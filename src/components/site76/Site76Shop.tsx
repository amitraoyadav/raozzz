import React, { useState, useMemo } from 'react';
import {
  Filter,
  SlidersHorizontal,
  X,
  RotateCcw,
  Search,
  Check,
  ChevronDown
} from 'lucide-react';
import { ProductItem } from '../../data/site76Data';
import { Site76ProductCard } from './Site76ProductCard';

interface Site76ShopProps {
  products: ProductItem[];
  onSelectProduct: (product: ProductItem) => void;
  onQuickView: (product: ProductItem) => void;
  onQuickAdd: (product: ProductItem, size?: string) => void;
  onToggleWishlist: (productId: string) => void;
  wishlistIds: string[];
  initialGender?: string;
  initialCategory?: string;
  initialMaterial?: string;
}

export const Site76Shop: React.FC<Site76ShopProps> = ({
  products,
  onSelectProduct,
  onQuickView,
  onQuickAdd,
  onToggleWishlist,
  wishlistIds,
  initialGender = 'all',
  initialCategory = 'all',
  initialMaterial = 'all'
}) => {
  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGender, setSelectedGender] = useState<string>(initialGender);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedMaterial, setSelectedMaterial] = useState<string>(initialMaterial);
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [selectedColor, setSelectedColor] = useState<string>('all');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest'>('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Available unique options extracted dynamically
  const categoriesList = useMemo(() => {
    return Array.from(new Set(products.map(p => p.category)));
  }, [products]);

  const materialsList = useMemo(() => {
    return [
      'Organic Cotton',
      'Pure French Linen',
      'Himalayan Hemp',
      'Handspun Khadi',
      'Handloom',
      'Botanical'
    ];
  }, []);

  const sizesList = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const colorPalette = [
    { name: 'Ivory/Ecru', hex: '#F5EFEB' },
    { name: 'Sand/Oat', hex: '#DCD1BD' },
    { name: 'Terracotta', hex: '#C16A52' },
    { name: 'Sage/Olive', hex: '#87977F' },
    { name: 'Indigo', hex: '#26425A' },
    { name: 'Charcoal', hex: '#2A2A2A' }
  ];

  // Filtering Logic
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesDesc = p.description.toLowerCase().includes(q);
        const matchesMat = p.material.toLowerCase().includes(q);
        const matchesCat = p.category.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesMat && !matchesCat) return false;
      }

      // Gender
      if (selectedGender !== 'all') {
        if (selectedGender === 'lifestyle' || selectedGender === 'home') {
          if (p.gender !== selectedGender) return false;
        } else if (p.gender !== selectedGender) {
          return false;
        }
      }

      // Category
      if (selectedCategory !== 'all' && p.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }

      // Material
      if (selectedMaterial !== 'all') {
        if (!p.material.toLowerCase().includes(selectedMaterial.toLowerCase())) {
          return false;
        }
      }

      // Size
      if (selectedSize !== 'all') {
        const matchesSize = p.availableSizes.some(s => s.toLowerCase().includes(selectedSize.toLowerCase()));
        if (!matchesSize) return false;
      }

      // Color
      if (selectedColor !== 'all') {
        const matchesColor = p.availableColors.some(c =>
          c.name.toLowerCase().includes(selectedColor.toLowerCase())
        );
        if (!matchesColor) return false;
      }

      // In stock
      if (inStockOnly && !p.inStock) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
    });
  }, [products, searchQuery, selectedGender, selectedCategory, selectedMaterial, selectedSize, selectedColor, inStockOnly, sortBy]);

  const resetAllFilters = () => {
    setSearchQuery('');
    setSelectedGender('all');
    setSelectedCategory('all');
    setSelectedMaterial('all');
    setSelectedSize('all');
    setSelectedColor('all');
    setInStockOnly(false);
    setSortBy('featured');
  };

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedGender !== 'all' ||
    selectedCategory !== 'all' ||
    selectedMaterial !== 'all' ||
    selectedSize !== 'all' ||
    selectedColor !== 'all' ||
    inStockOnly;

  return (
    <div className="bg-[#FDFBF7] min-h-screen py-8 sm:py-12 border-b border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Section Header */}
        <div className="mb-8 space-y-2">
          <div className="flex items-center gap-2 text-xs text-[#6F736D] uppercase tracking-wider font-mono">
            <span>Home</span>
            <span aria-hidden="true">/</span>
            <span className="text-[#1E1F21] font-semibold">Natural Storefront</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-5xl font-bold text-[#1E1F21]">
                Conscious Apparel &amp; Living
              </h1>
              <p className="text-sm text-[#544133] mt-1 max-w-xl font-light">
                Hand-spun, hand-woven, and plant-dyed garments designed to breathe with ease.
              </p>
            </div>

            {/* Quick Gender Tabs */}
            <div className="flex items-center gap-1 p-1 bg-[#F5EFEB] rounded-xl border border-[#E8E1D5] text-xs font-semibold uppercase tracking-wider self-start md:self-auto">
              {['all', 'women', 'men', 'lifestyle', 'home'].map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setSelectedGender(g)}
                  className={`px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${
                    selectedGender === g
                      ? 'bg-[#263422] text-[#FDFBF7] shadow-xs'
                      : 'text-[#544133] hover:text-[#1E1F21]'
                  }`}
                >
                  {g === 'all' ? 'All Pieces' : g}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Toolbar: Search, Filter Toggle & Sorting */}
        <div className="bg-[#F5EFEB] p-4 rounded-xl border border-[#E8E1D5] mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6F736D]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search garments, linen, khadi..."
              className="w-full pl-9 pr-4 py-2 bg-white rounded-lg border border-[#D5C7B5] text-xs text-[#1E1F21] placeholder-[#9FA895] focus:outline-hidden focus:border-[#C16A52]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6F736D] hover:text-black"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center justify-between w-full md:w-auto gap-4">
            {/* Mobile Filter Button */}
            <button
              type="button"
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#D5C7B5] text-xs font-semibold text-[#1E1F21]"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#C16A52]" />
              <span>Filters {hasActiveFilters && '•'}</span>
            </button>

            {/* Product Count Display */}
            <span className="text-xs text-[#6F736D] font-mono tabular-nums">
              Showing {filteredProducts.length} of {products.length} garments
            </span>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#6F736D] hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="px-3 py-2 bg-white rounded-lg border border-[#D5C7B5] text-xs font-medium text-[#1E1F21] focus:outline-hidden focus:border-[#C16A52] cursor-pointer"
              >
                <option value="featured">Featured Artisans</option>
                <option value="newest">Newest Loom Releases</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Active Filters Row (if any) */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 mb-6 text-xs text-[#544133]">
            <span className="font-semibold text-[#1E1F21]">Active filters:</span>
            {selectedGender !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#EAE2D7] rounded-md text-[11px]">
                Gender: {selectedGender}
                <button type="button" onClick={() => setSelectedGender('all')}><X className="w-3 h-3" /></button>
              </span>
            )}
            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#EAE2D7] rounded-md text-[11px]">
                Category: {selectedCategory}
                <button type="button" onClick={() => setSelectedCategory('all')}><X className="w-3 h-3" /></button>
              </span>
            )}
            {selectedMaterial !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#EAE2D7] rounded-md text-[11px]">
                Fiber: {selectedMaterial}
                <button type="button" onClick={() => setSelectedMaterial('all')}><X className="w-3 h-3" /></button>
              </span>
            )}
            {selectedSize !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#EAE2D7] rounded-md text-[11px]">
                Size: {selectedSize}
                <button type="button" onClick={() => setSelectedSize('all')}><X className="w-3 h-3" /></button>
              </span>
            )}
            {selectedColor !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#EAE2D7] rounded-md text-[11px]">
                Color: {selectedColor}
                <button type="button" onClick={() => setSelectedColor('all')}><X className="w-3 h-3" /></button>
              </span>
            )}
            {inStockOnly && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#EAE2D7] rounded-md text-[11px]">
                In Stock Only
                <button type="button" onClick={() => setInStockOnly(false)}><X className="w-3 h-3" /></button>
              </span>
            )}
            <button
              type="button"
              onClick={resetAllFilters}
              className="text-[#C16A52] hover:underline font-semibold ml-2 inline-flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              Reset All
            </button>
          </div>
        )}

        {/* Layout Grid: Sidebar Filters (Desktop) + Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block lg:col-span-1 space-y-6 bg-[#FDFBF7] border border-[#E8E1D5] rounded-xl p-5 h-fit sticky top-28">
            <div className="flex items-center justify-between border-b border-[#E8E1D5] pb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1E1F21]">
                Filter Catalog
              </span>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={resetAllFilters}
                  className="text-[11px] text-[#C16A52] hover:underline"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Categories */}
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#9C4C36]">Categories</p>
              <div className="space-y-1 text-xs">
                <button
                  type="button"
                  onClick={() => setSelectedCategory('all')}
                  className={`block w-full text-left py-1 px-2 rounded-md ${
                    selectedCategory === 'all' ? 'bg-[#263422] text-white font-medium' : 'text-[#544133] hover:bg-[#F5EFEB]'
                  }`}
                >
                  All Categories
                </button>
                {categoriesList.map(cat => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left py-1 px-2 rounded-md ${
                      selectedCategory.toLowerCase() === cat.toLowerCase()
                        ? 'bg-[#263422] text-white font-medium'
                        : 'text-[#544133] hover:bg-[#F5EFEB]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Materials */}
            <div className="border-t border-[#E8E1D5] pt-4 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#9C4C36]">Natural Fiber</p>
              <div className="space-y-1 text-xs">
                <button
                  type="button"
                  onClick={() => setSelectedMaterial('all')}
                  className={`block w-full text-left py-1 px-2 rounded-md ${
                    selectedMaterial === 'all' ? 'bg-[#263422] text-white font-medium' : 'text-[#544133] hover:bg-[#F5EFEB]'
                  }`}
                >
                  All Natural Fibers
                </button>
                {materialsList.map(mat => (
                  <button
                    key={mat}
                    type="button"
                    onClick={() => setSelectedMaterial(mat)}
                    className={`block w-full text-left py-1 px-2 rounded-md ${
                      selectedMaterial.toLowerCase() === mat.toLowerCase()
                        ? 'bg-[#263422] text-white font-medium'
                        : 'text-[#544133] hover:bg-[#F5EFEB]'
                    }`}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="border-t border-[#E8E1D5] pt-4 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#9C4C36]">Size</p>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => setSelectedSize('all')}
                  className={`px-2.5 py-1 text-xs rounded-md border ${
                    selectedSize === 'all'
                      ? 'bg-[#263422] text-white border-[#263422]'
                      : 'border-[#D5C7B5] text-[#544133] hover:border-black'
                  }`}
                >
                  All
                </button>
                {sizesList.map(size => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`px-2.5 py-1 text-xs rounded-md border font-mono ${
                      selectedSize === size
                        ? 'bg-[#263422] text-white border-[#263422]'
                        : 'border-[#D5C7B5] text-[#544133] hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="border-t border-[#E8E1D5] pt-4 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#9C4C36]">Earthy Hues</p>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedColor('all')}
                  className={`col-span-3 text-left px-2 py-1 rounded text-xs ${
                    selectedColor === 'all' ? 'bg-[#263422] text-white' : 'text-[#544133] hover:bg-[#F5EFEB]'
                  }`}
                >
                  All Colors
                </button>
                {colorPalette.map(color => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setSelectedColor(color.name.split('/')[0])}
                    className={`flex items-center gap-1.5 p-1 rounded text-[11px] border ${
                      selectedColor.toLowerCase().includes(color.name.split('/')[0].toLowerCase())
                        ? 'border-[#263422] bg-[#EAE2D7]'
                        : 'border-transparent hover:bg-[#F5EFEB]'
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full border border-black/20 shrink-0" style={{ backgroundColor: color.hex }} />
                    <span className="truncate">{color.name.split('/')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* In stock toggle */}
            <div className="border-t border-[#E8E1D5] pt-4">
              <label className="flex items-center gap-2 text-xs text-[#1E1F21] cursor-pointer">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="rounded border-[#D5C7B5] text-[#263422] focus:ring-0 cursor-pointer"
                />
                <span>In Stock Items Only</span>
              </label>
            </div>
          </aside>

          {/* Product Grid Area */}
          <main className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <Site76ProductCard
                    key={product.id}
                    product={product}
                    onSelect={onSelectProduct}
                    onQuickView={onQuickView}
                    onQuickAdd={onQuickAdd}
                    onToggleWishlist={onToggleWishlist}
                    isWishlisted={wishlistIds.includes(product.id)}
                  />
                ))}
              </div>
            ) : (
              /* Empty state */
              <div className="text-center py-20 bg-white border border-[#E8E1D5] rounded-xl p-8 space-y-4">
                <p className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#1E1F21]">
                  No natural garments matched your criteria
                </p>
                <p className="text-sm text-[#6F736D] max-w-md mx-auto">
                  Try clearing some filter tags or searching for wider terms like "linen", "kurta", or "khadi".
                </p>
                <button
                  type="button"
                  onClick={resetAllFilters}
                  className="px-6 py-2.5 rounded-full bg-[#263422] text-[#FDFBF7] text-xs font-semibold uppercase tracking-wider hover:bg-[#354830] transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filter Slide-out Modal */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileFilterOpen(false)} />
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#FDFBF7] shadow-xl flex flex-col z-50">
            <div className="p-4 border-b border-[#E8E1D5] flex items-center justify-between">
              <span className="font-semibold text-sm text-[#1E1F21]">Filter Garments</span>
              <button type="button" onClick={() => setMobileFilterOpen(false)} className="p-1 text-[#6F736D]">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-5 text-xs">
              <div>
                <p className="font-semibold uppercase tracking-widest text-[#9C4C36] mb-2">Category</p>
                <div className="space-y-1">
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('all')}
                    className={`block w-full text-left py-1.5 px-2 rounded ${selectedCategory === 'all' ? 'bg-[#263422] text-white' : ''}`}
                  >
                    All Categories
                  </button>
                  {categoriesList.map(c => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setSelectedCategory(c)}
                      className={`block w-full text-left py-1.5 px-2 rounded ${selectedCategory.toLowerCase() === c.toLowerCase() ? 'bg-[#263422] text-white' : ''}`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#E8E1D5] pt-4">
                <p className="font-semibold uppercase tracking-widest text-[#9C4C36] mb-2">Fiber</p>
                <div className="space-y-1">
                  {materialsList.map(m => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setSelectedMaterial(m)}
                      className={`block w-full text-left py-1.5 px-2 rounded ${selectedMaterial.toLowerCase() === m.toLowerCase() ? 'bg-[#263422] text-white' : ''}`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#E8E1D5] pt-4">
                <p className="font-semibold uppercase tracking-widest text-[#9C4C36] mb-2">Size</p>
                <div className="flex flex-wrap gap-1.5">
                  {sizesList.map(s => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelectedSize(s)}
                      className={`px-3 py-1 border rounded ${selectedSize === s ? 'bg-[#263422] text-white' : 'border-[#D5C7B5]'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-[#E8E1D5] bg-[#F5EFEB] flex gap-2">
              <button
                type="button"
                onClick={resetAllFilters}
                className="flex-1 py-2.5 border border-[#D5C7B5] rounded-lg text-xs font-semibold"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => setMobileFilterOpen(false)}
                className="flex-1 py-2.5 bg-[#263422] text-white rounded-lg text-xs font-semibold"
              >
                Show Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
