import React from 'react';
import { ArrowRight } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback.jsx';

export default function BrandStory({ onOpenStoryModal }) {
  return (
    <section id="story" className="py-16 lg:py-24 bg-[#F4EFEA] border-y border-[#EAE0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Atmospheric Culinary & Spice Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#E0D5C7] bg-[#EAE0D5] aspect-[4/3]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=1000&q=80"
                alt="Traditional Indian spice grinding and culinary ingredients"
                aspectRatio="aspect-[4/3]"
                fallbackIcon="spice"
                fallbackText="Indian Spice Grinding & Heritage Ingredients"
                className="w-full h-full object-cover"
              />
              {/* Subtle Tag Overlay */}
              <div className="absolute bottom-4 left-4 bg-[#FAF7F2]/90 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-[#EAE0D5] text-left">
                <span className="text-[11px] font-serif font-bold text-[#2A1D17] block">
                  Cold Milled at Low Heat
                </span>
                <span className="text-[10px] text-[#7A5B49] block">
                  Preserving raw fragrance & volatile oils
                </span>
              </div>
            </div>
          </div>

          {/* Right: Section Content */}
          <div className="lg:col-span-6 text-left space-y-6">
            
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#8C6D58]">
              <span>Heritage & Craft</span>
            </div>

            {/* Strict Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2A1D17] tracking-tight leading-tight">
              Tradition in Every Pinch.
            </h2>

            {/* Strict 2-3 Short Sentences (No invented claims) */}
            <div className="space-y-4 text-base sm:text-lg text-[#5A4333] font-sans leading-relaxed">
              <p>
                Every spice we offer is carefully chosen from trusted Indian farming families and gently ground to protect its natural aroma.
              </p>
              <p>
                We believe exceptional food begins with simple, honest ingredients that honor classic culinary traditions.
              </p>
              <p>
                From everyday home dals to celebratory feasts, our masalas are blended to bring vibrant depth and warmth to your table.
              </p>
            </div>

            {/* Our Story Button */}
            <div className="pt-2">
              <button
                onClick={onOpenStoryModal}
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#2A1D17] hover:bg-[#1A120E] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-lg shadow-sm hover:shadow transition-colors"
              >
                <span>Our Story</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#CA8A04]" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
