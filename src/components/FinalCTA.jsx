import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback.jsx';

export default function FinalCTA({ onShopAllClick }) {
  return (
    <section className="relative overflow-hidden bg-[#163022] text-[#FAF7F2] py-20 lg:py-24">
      {/* Decorative ambient glowing accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2D5A3F]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#CA8A04]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              Artisanal Indian Cooking
            </span>

            {/* Strict Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
              Make Every Dish Special.
            </h2>

            {/* Strict Supporting Text */}
            <p className="text-lg sm:text-xl text-[#D8E6DD] font-sans font-light leading-relaxed max-w-xl">
              Find the perfect spices for your next meal.
            </p>

            {/* Primary Action */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onShopAllClick}
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#991B1B] hover:bg-[#B91C1C] text-white text-sm font-semibold uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all group"
              >
                <span>Shop All Spices</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <div className="pt-4 flex items-center gap-6 text-xs text-[#B5CEC0]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                Freshness guaranteed
              </span>
              <span>·</span>
              <span>Complimentary shipping ₹499+</span>
              <span>·</span>
              <span>Direct estate harvest</span>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] bg-[#1F412F]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=800&q=80"
                alt="Arrangement of royal whole spices and ground masalas in brass spoons"
                aspectRatio="aspect-[4/3]"
                fallbackIcon="spice"
                fallbackText="Veda Masala Artisanal Heritage Selection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
