import React, { useState } from 'react';
import { X, ShoppingBag, Check, MapPin, Sparkles, Flame, ShieldAlert } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback.jsx';

export default function QuickViewModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  const [selectedWeightIndex, setSelectedWeightIndex] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  const currentWeight = product.weights[selectedWeightIndex];

  const handleAdd = () => {
    if (onAddToCart) {
      onAddToCart(product, currentWeight);
    }
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      <div className="relative bg-[#FAF7F2] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#EAE0D5] z-10 text-left">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-[#2A1D17] shadow-xs transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Left Product Image */}
          <div className="relative bg-[#F4EFEA] aspect-square sm:aspect-auto">
            <ImageWithFallback
              src={product.imageUrl}
              alt={product.name}
              aspectRatio="aspect-square sm:h-full"
              fallbackIcon={product.fallbackIcon || 'spice'}
              fallbackText={product.name}
              className="w-full h-full object-cover"
            />
            {product.isBestseller && (
              <div className="absolute top-4 left-4 bg-white/95 text-[#991B1B] text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm border border-[#EAE0D5]">
                Bestseller
              </div>
            )}
          </div>

          {/* Right Product Details */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#8C6D58] mb-1 font-semibold uppercase tracking-wider">
                  <span>{product.categoryName}</span>
                  <span>·</span>
                  <span className="font-serif italic capitalize text-[#7A5B49]">{product.hindiName}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#2A1D17]">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 text-xs text-[#7A5B49] mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#991B1B]" />
                  <span>Harvest Origin: {product.origin}</span>
                </div>
              </div>

              <p className="text-xs text-[#5A4333] leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Aroma Notes */}
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7A5B49] block mb-1.5">
                  Aromatic Profile:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {product.aromaNotes.map((note) => (
                    <span
                      key={note}
                      className="text-xs bg-white text-[#4A3525] border border-[#EAE0D5] px-2.5 py-1 rounded-md"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cooking Tip */}
              <div className="p-3 bg-[#FAF2E8] border border-[#E5DACF] rounded-lg text-xs text-[#5A4333]">
                <span className="font-semibold text-[#2A1D17] block mb-0.5">Chef's Bloom Tip:</span>
                {product.cookingTip}
              </div>
            </div>

            {/* Bottom Purchase Bar */}
            <div className="pt-6 border-t border-[#EAE0D5] mt-6 space-y-4">
              <div>
                <span className="text-[11px] text-[#7A5B49] block mb-1.5">Choose Pack Size:</span>
                <div className="grid grid-cols-3 gap-2">
                  {product.weights.map((w, idx) => (
                    <button
                      key={w.size}
                      onClick={() => setSelectedWeightIndex(idx)}
                      className={`py-1.5 px-2 text-xs font-semibold rounded-md border text-center transition-colors ${
                        selectedWeightIndex === idx
                          ? 'bg-[#2A1D17] text-white border-[#2A1D17]'
                          : 'bg-white text-[#4A3525] border-[#E5DACF] hover:bg-[#F4EFEA]'
                      }`}
                    >
                      {w.size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xl font-serif font-bold text-[#2A1D17] tabular-nums">
                    ₹{currentWeight.price}
                  </span>
                  <span className="text-[10px] text-[#7A5B49] block">Inclusive of all taxes</span>
                </div>

                <button
                  onClick={handleAdd}
                  disabled={isAdded}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                    isAdded
                      ? 'bg-emerald-700 text-white'
                      : 'bg-[#991B1B] hover:bg-[#7F1D1D] text-white shadow-xs'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
