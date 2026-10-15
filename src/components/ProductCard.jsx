import React, { useState } from 'react';
import { ShoppingBag, Check, Eye } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback.jsx';

export default function ProductCard({ product, onAddToCart, onQuickView }) {
  const [selectedWeightIndex, setSelectedWeightIndex] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  const currentWeight = product.weights[selectedWeightIndex];

  const handleAdd = () => {
    if (onAddToCart) {
      onAddToCart(product, currentWeight);
    }
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  return (
    <div className="group relative flex flex-col bg-white rounded-xl border border-[#EAE0D5] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300">
      
      {/* Top Image Container (65% visual weight) */}
      <div className="relative w-full aspect-[4/3] bg-[#F4EFEA] overflow-hidden">
        <ImageWithFallback
          src={product.imageUrl}
          alt={product.name}
          aspectRatio="aspect-[4/3]"
          fallbackIcon={product.fallbackIcon || 'spice'}
          fallbackText={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Bestseller / Quiet Label (Subtle, Anti-Slop) */}
        {product.isBestseller && (
          <div className="absolute top-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-xs text-[#991B1B] text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm border border-[#EAE0D5] shadow-xs">
            Bestseller
          </div>
        )}

        {/* Origin Tag */}
        <div className="absolute bottom-3 left-3 bg-[#1F140E]/80 backdrop-blur-xs text-[#FAF7F2] text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-sm">
          {product.origin.split(',')[0]}
        </div>

        {/* Quick View Button on Hover */}
        <button
          onClick={() => onQuickView(product)}
          aria-label={`Quick view ${product.name}`}
          className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white text-[#2A1D17] hover:text-[#991B1B] rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          title="Quick View Details"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between text-left">
        <div>
          {/* Category / Hindi Sub-title */}
          <div className="flex items-center justify-between text-xs text-[#8C6D58] mb-1">
            <span className="font-semibold uppercase tracking-wider">{product.categoryName}</span>
            <span className="font-serif italic text-[#7A5B49]">{product.hindiName}</span>
          </div>

          {/* Product Name */}
          <h3 className="text-lg font-serif font-bold text-[#2A1D17] group-hover:text-[#991B1B] transition-colors">
            {product.name}
          </h3>

          {/* Concise Description */}
          <p className="text-xs text-[#5A4333] mt-1.5 leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>
        </div>

        {/* Weight Selector & Pricing Block */}
        <div className="mt-4 pt-3 border-t border-[#F2ECE5] space-y-3">
          
          {/* Weight Options Segmented Control */}
          <div>
            <div className="flex items-center justify-between text-[11px] text-[#7A5B49] mb-1.5">
              <span>Select Pack Size:</span>
              <span className="font-medium text-[#2A1D17]">{currentWeight.size}</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {product.weights.map((w, idx) => (
                <button
                  key={w.size}
                  type="button"
                  onClick={() => setSelectedWeightIndex(idx)}
                  className={`py-1 px-2 text-xs font-medium rounded-md border text-center transition-colors whitespace-nowrap ${
                    selectedWeightIndex === idx
                      ? 'bg-[#2A1D17] text-white border-[#2A1D17] shadow-xs'
                      : 'bg-[#FAF7F2] text-[#4A3525] border-[#E5DACF] hover:bg-[#EFE6DC]'
                  }`}
                >
                  {w.size}
                </button>
              ))}
            </div>
          </div>

          {/* Price & Add to Cart Row */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg font-serif font-bold text-[#2A1D17] tabular-nums">
                  ₹{currentWeight.price}
                </span>
                {currentWeight.originalPrice && (
                  <span className="text-xs text-[#9E8B7E] line-through tabular-nums">
                    ₹{currentWeight.originalPrice}
                  </span>
                )}
              </div>
              <span className="text-[10px] text-[#7A5B49]">Taxes included</span>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAdd}
              disabled={isAdded}
              className={`inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all duration-200 ${
                isAdded
                  ? 'bg-[#15803D] text-white'
                  : 'bg-[#991B1B] hover:bg-[#7F1D1D] text-white shadow-xs'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
