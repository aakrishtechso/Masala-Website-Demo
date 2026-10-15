import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback.jsx';

export default function CategorySection({ categories, onSelectCategory }) {
  return (
    <section id="categories" className="py-16 lg:py-24 bg-[#FAF7F2] border-t border-[#EAE0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 text-left">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6D58]">
              Curated Collections
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2A1D17] mt-1.5 tracking-tight">
              Shop by Category
            </h2>
          </div>
          <p className="text-sm text-[#5A4333] max-w-md">
            Explore single-estate staples, aromatic royal blends, whole pantry seeds, and regional specialties.
          </p>
        </div>

        {/* 4 Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group cursor-pointer bg-white rounded-xl border border-[#EAE0D5] overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col text-left"
            >
              {/* Image Container with Consistent Aspect Ratio */}
              <div className="relative aspect-[4/3] bg-[#F4EFEA] overflow-hidden">
                <ImageWithFallback
                  src={cat.imageUrl}
                  alt={cat.name}
                  aspectRatio="aspect-[4/3]"
                  fallbackIcon="spice"
                  fallbackText={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Subtle Text Badge */}
                <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-xs text-[#2A1D17] text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-sm border border-[#EAE0D5]">
                  {cat.badge}
                </div>

                {/* Arrow Icon Button */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white text-[#2A1D17] group-hover:bg-[#991B1B] group-hover:text-white flex items-center justify-center shadow-xs transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Text Meta */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-serif font-bold text-[#2A1D17] group-hover:text-[#991B1B] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#7A5B49] font-medium mt-0.5">
                    {cat.tagline}
                  </p>
                  <p className="text-xs text-[#5A4333] mt-2 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                
                <div className="mt-4 pt-3 border-t border-[#F2ECE5] flex items-center justify-between text-[11px] text-[#8C6D58]">
                  <span>{cat.count}</span>
                  <span className="font-semibold text-[#991B1B] group-hover:underline">
                    Explore &rarr;
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
