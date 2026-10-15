import React, { useState } from 'react';
import { X, Clock, Users, ChefHat, Check, ShoppingBag, Sparkles } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback.jsx';

export default function RecipeModal({ recipe, onClose, onAddRecipeSpices }) {
  const [kitAdded, setKitAdded] = useState(false);

  if (!recipe) return null;

  const handleAddKit = () => {
    if (onAddRecipeSpices) {
      onAddRecipeSpices(recipe);
    }
    setKitAdded(true);
    setTimeout(() => setKitAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      <div className="relative bg-[#FAF7F2] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#EAE0D5] z-10 text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-white text-[#2A1D17] shadow-xs transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image & Title Overlay */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-[#EAE0D5] overflow-hidden">
          <ImageWithFallback
            src={recipe.imageUrl}
            alt={recipe.name}
            aspectRatio="aspect-[16/9] sm:aspect-[21/9]"
            fallbackIcon="recipe"
            fallbackText={recipe.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6 sm:p-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#EAB308] font-semibold">
                Authentic Indian Kitchen
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mt-1">
                {recipe.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#F4EFEA]/90 mt-1 max-w-xl">
                {recipe.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Recipe Meta Strip */}
        <div className="bg-white px-6 sm:px-8 py-3.5 border-b border-[#EAE0D5] flex flex-wrap items-center justify-between gap-4 text-xs text-[#5A4333]">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium text-[#2A1D17]">
              <Clock className="w-4 h-4 text-[#991B1B]" />
              Prep: {recipe.prepTime} · Cook: {recipe.cookTime}
            </span>
            <span className="flex items-center gap-1.5 font-medium text-[#2A1D17]">
              <Users className="w-4 h-4 text-[#991B1B]" />
              {recipe.servings}
            </span>
          </div>

          <button
            onClick={handleAddKit}
            disabled={kitAdded}
            className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors ${
              kitAdded
                ? 'bg-emerald-700 text-white'
                : 'bg-[#991B1B] hover:bg-[#7F1D1D] text-white shadow-2xs'
            }`}
          >
            {kitAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Spice Kit Added!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add Spice Pairings to Cart</span>
              </>
            )}
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Summary */}
          <p className="text-sm text-[#4A3525] leading-relaxed italic border-l-2 border-[#CA8A04] pl-4">
            "{recipe.summary}"
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Ingredients (Col 1-5) */}
            <div className="md:col-span-5 bg-white p-6 rounded-xl border border-[#EAE0D5] space-y-4">
              <h3 className="text-base font-serif font-bold text-[#2A1D17] flex items-center gap-2">
                <ChefHat className="w-4 h-4 text-[#991B1B]" />
                Ingredients Checklist
              </h3>
              <ul className="space-y-2.5 text-xs text-[#5A4333]">
                {recipe.ingredients.map((ing, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#CA8A04] mt-0.5">•</span>
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Preparation Steps (Col 6-12) */}
            <div className="md:col-span-7 space-y-4">
              <h3 className="text-base font-serif font-bold text-[#2A1D17]">
                Method of Preparation
              </h3>
              <div className="space-y-4">
                {recipe.instructions.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs leading-relaxed text-[#4A3525]">
                    <span className="w-6 h-6 rounded-full bg-[#2A1D17] text-[#FAF7F2] flex items-center justify-center font-bold shrink-0 text-[11px]">
                      {idx + 1}
                    </span>
                    <p className="pt-0.5">{step}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
