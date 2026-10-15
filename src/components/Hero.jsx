import React from 'react';
import { ArrowRight, Compass, ShieldCheck, Sparkles } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback.jsx';

export default function Hero({ onExploreClick, onStoryClick }) {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-[#FAF7F2]">
      {/* Subtle background ambient warmth */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#CA8A04]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#991B1B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-6 space-y-8 text-left z-10">
            
            {/* Clean Editorial Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#8C6D58]">
              <span>Pure Heritage Harvests</span>
              <span aria-hidden="true">·</span>
              <span>Direct Estate Sourcing</span>
            </div>

            {/* Strict Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#2A1D17] tracking-tight leading-[1.1] text-balance">
              Bring Every Meal to Life.
            </h1>

            {/* Strict Supporting Text */}
            <p className="text-lg sm:text-xl text-[#5A4333] font-sans font-normal leading-relaxed max-w-xl text-balance">
              Authentic Indian spices. Extraordinary everyday flavor.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#991B1B] hover:bg-[#7F1D1D] text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow transition-all group"
              >
                <span>Explore Our Spices</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <button
                onClick={onStoryClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent hover:bg-[#EFE6DC] text-[#3D291D] border border-[#D4C5B9] text-sm font-semibold rounded-lg transition-colors"
              >
                <span>Discover Our Story</span>
              </button>
            </div>

            {/* Quality Proof Bar */}
            <div className="pt-6 border-t border-[#EAE0D5] grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#2A1D17] tabular-nums">
                  100%
                </p>
                <p className="text-xs text-[#7A5B49] mt-0.5">Cold ground & pure</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#2A1D17] tabular-nums">
                  5.6%
                </p>
                <p className="text-xs text-[#7A5B49] mt-0.5">Potent Salem curcumin</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#2A1D17] tabular-nums">
                  0%
                </p>
                <p className="text-xs text-[#7A5B49] mt-0.5">Zero artificial colors</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#EAE0D5] bg-[#F4EFEA] aspect-[4/3] lg:aspect-[16/11]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=85"
                alt="Authentic Indian whole and ground spices in brass vessels including chili peppers, turmeric, coriander, and cumin"
                aspectRatio="aspect-[4/3] lg:aspect-[16/11]"
                className="w-full h-full object-cover"
                fallbackIcon="spice"
                fallbackText="Authentic Indian Spices: Turmeric, Chili, Cumin & Coriander"
              />

              {/* Floating Curated Spice Highlight Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-[#FAF7F2]/95 backdrop-blur-md p-4 rounded-xl border border-[#EAE0D5] shadow-md text-left">
                <div className="flex items-center justify-between text-xs text-[#8C6D58] mb-1">
                  <span className="font-semibold uppercase tracking-wider">Heritage Selection</span>
                  <span className="text-[#991B1B] font-semibold">14-Spice Blend</span>
                </div>
                <p className="text-sm font-serif font-bold text-[#2A1D17]">
                  Royal Shahi Garam Masala
                </p>
                <p className="text-xs text-[#5A4333] mt-1 line-clamp-2">
                  Slowly dry-roasted whole cardamoms, cinnamon quills, and mace ground at cool temperatures.
                </p>
              </div>
            </div>

            {/* Background Decorative Frame */}
            <div className="absolute -inset-2 -z-10 rounded-3xl border border-[#D97706]/15 pointer-events-none transform rotate-1" />
          </div>

        </div>
      </div>
    </section>
  );
}
