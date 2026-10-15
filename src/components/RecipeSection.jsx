import React from 'react';
import { Clock, Users, ArrowRight, Utensils } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback.jsx';

export default function RecipeSection({ recipes, onSelectRecipe }) {
  return (
    <section id="recipes" className="py-16 lg:py-24 bg-[#F4EFEA] border-t border-[#EAE0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 text-left">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6D58]">
              Culinary Kitchen
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2A1D17] mt-1.5 tracking-tight">
              Recipes & Spice Pairings
            </h2>
          </div>
          <p className="text-sm text-[#5A4333] max-w-md">
            Master authentic regional delicacies with our foolproof traditional recipes and aromatic spice blends.
          </p>
        </div>

        {/* 3 Recipe Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-xl border border-[#E0D5C7] overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col text-left group"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-[#EAE0D5] overflow-hidden">
                <ImageWithFallback
                  src={recipe.imageUrl}
                  alt={recipe.name}
                  aspectRatio="aspect-[4/3]"
                  fallbackIcon="recipe"
                  fallbackText={recipe.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Prep Time Pill Replacement (Clean quiet label) */}
                <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-xs text-[#2A1D17] text-[11px] font-medium px-2.5 py-1 rounded-sm border border-[#EAE0D5] flex items-center gap-1.5 shadow-2xs">
                  <Clock className="w-3.5 h-3.5 text-[#991B1B]" />
                  <span>Prep: {recipe.prepTime}</span>
                </div>
              </div>

              {/* Recipe Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] text-[#8C6D58] font-semibold uppercase tracking-wider mb-1">
                    Featured: {recipe.spiceFeatured}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#2A1D17] group-hover:text-[#991B1B] transition-colors">
                    {recipe.name}
                  </h3>
                  <p className="text-xs text-[#5A4333] mt-2 line-clamp-2 leading-relaxed">
                    {recipe.summary}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#F2ECE5] flex items-center justify-between">
                  <span className="text-xs text-[#7A5B49] flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    <span>{recipe.servings}</span>
                  </span>

                  {/* Working View Recipe Link */}
                  <button
                    onClick={() => onSelectRecipe(recipe)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#991B1B] hover:text-[#7F1D1D] transition-colors"
                  >
                    <span>View Recipe</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
