import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, RotateCcw } from 'lucide-react';
import ProductCard from './ProductCard.jsx';

export default function ProductGrid({
  products,
  activeCategory,
  onCategoryChange,
  onAddToCart,
  onQuickView
}) {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Spices' },
    { id: 'everyday-spices', label: 'Everyday Spices' },
    { id: 'signature-masalas', label: 'Signature Masalas' },
    { id: 'whole-spices', label: 'Whole Spices' }
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.hindiName.toLowerCase().includes(q) ||
        item.shortDescription.toLowerCase().includes(q) ||
        item.origin.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [products, activeCategory, searchQuery]);

  return (
    <section id="products" className="py-16 lg:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#EAE0D5] text-left">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6D58]">
              The Artisanal Pantry
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2A1D17] mt-1 tracking-tight">
              Pure Single-Origin & Handcrafted Masalas
            </h2>
            <p className="text-sm text-[#5A4333] mt-2 leading-relaxed">
              Milled at controlled cool temperatures to retain natural aromatic oils, golden hues, and authentic culinary depth.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search spices, haldi, jeera..."
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-[#D4C5B9] rounded-lg text-sm text-[#2A1D17] placeholder-[#9E8B7E] focus:outline-none focus:ring-1 focus:ring-[#991B1B] focus:border-[#991B1B] shadow-2xs"
            />
            <Search className="w-4 h-4 text-[#8C6D58] absolute left-3 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C6D58] hover:text-[#2A1D17]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`px-4 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                activeCategory === cat.id
                  ? 'bg-[#2A1D17] text-[#FAF7F2] shadow-xs'
                  : 'bg-white text-[#5A4333] border border-[#EAE0D5] hover:bg-[#F4EFEA]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="bg-white rounded-xl border border-[#EAE0D5] p-12 text-center max-w-md mx-auto my-8">
            <div className="w-12 h-12 rounded-full bg-[#FAF7F2] text-[#8C6D58] flex items-center justify-center mx-auto mb-3">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-base font-serif font-bold text-[#2A1D17]">
              No spices found
            </h3>
            <p className="text-xs text-[#5A4333] mt-1 mb-4">
              We couldn’t find any spices matching "{searchQuery}". Try searching for cumin, turmeric, or garam masala.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                onCategoryChange('all');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FAF7F2] hover:bg-[#EFE6DC] border border-[#D4C5B9] rounded-lg text-xs font-semibold text-[#2A1D17]"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
