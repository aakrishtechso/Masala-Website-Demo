import React from 'react';
import { X, Sparkles, Flame, ShieldCheck, HeartHandshake } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback.jsx';

export default function StoryModal({ isOpen, onClose, onExploreSpices }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      <div className="relative bg-[#FAF7F2] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#EAE0D5] z-10 text-left">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-white text-[#2A1D17] shadow-xs transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6D58]">
              The Craft of Spices
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2A1D17] mt-1">
              Tradition in Every Pinch
            </h2>
            <p className="text-xs text-[#7A5B49] mt-1">
              Rooted in reverence for authentic Indian flavors and traditional techniques.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-[#EAE0D5] aspect-[16/9] bg-[#EAE0D5]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80"
              alt="Traditional spice processing"
              aspectRatio="aspect-[16/9]"
              fallbackIcon="spice"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[#4A3525] leading-relaxed">
            <p>
              In traditional Indian kitchens, spices have never been mere condiments; they are the heart, the aroma, and the soul of the hearth. Yet in the rush of industrial manufacturing, high-speed pulverizers generate extreme heat that evaporates volatile aromatic oils before the packet is even sealed.
            </p>
            <p>
              At Veda Masala, our philosophy is rooted in gentle restraint. We work directly with small growers across India's premier spice terroirs—from the deep-orange Lakadong turmeric fields of Meghalaya to the sun-cured chili fields of Mathania in Rajasthan.
            </p>
            <p>
              By milling our whole spices at cool temperatures and roasting them in slow, measured cycles, the natural essential oils, warm undertones, and vibrant natural pigments remain untouched until they hit your warm pan.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-white rounded-xl border border-[#EAE0D5]">
              <Flame className="w-5 h-5 text-[#991B1B] mb-2" />
              <h4 className="font-serif font-bold text-[#2A1D17] text-sm">Low-Heat Processing</h4>
              <p className="text-[11px] text-[#7A5B49] mt-1">
                Zero scorching of delicate seeds or loss of essential aroma compounds.
              </p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-[#EAE0D5]">
              <ShieldCheck className="w-5 h-5 text-[#CA8A04] mb-2" />
              <h4 className="font-serif font-bold text-[#2A1D17] text-sm">Pure & Unadulterated</h4>
              <p className="text-[11px] text-[#7A5B49] mt-1">
                Zero synthetic colors, artificial fillers, or anti-caking agents.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#EAE0D5] flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-semibold text-[#5A4333] hover:text-[#2A1D17]"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                if (onExploreSpices) onExploreSpices();
              }}
              className="px-6 py-2.5 bg-[#991B1B] hover:bg-[#7F1D1D] text-white text-xs font-semibold uppercase tracking-wider rounded-lg shadow-2xs"
            >
              Explore Our Spices
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
