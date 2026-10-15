import React from 'react';
import { Sparkles, Flame, CheckCircle, Package } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Flame,
      title: 'Rich Aroma',
      description: 'Slow-ground at controlled temperatures to lock in delicate essential oils.'
    },
    {
      icon: Sparkles,
      title: 'Authentic Flavor',
      description: 'Heirloom spice proportions crafted for authentic Indian home kitchens.'
    },
    {
      icon: CheckCircle,
      title: 'Carefully Selected Ingredients',
      description: 'Single-origin, unpolished harvests directly from renowned spice regions.'
    },
    {
      icon: Package,
      title: 'Packed with Care',
      description: 'Aroma-sealed food-grade pouches to preserve fragrance and culinary potency.'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6D58]">
            The Veda Standard
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2A1D17] mt-1.5 tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-sm text-[#5A4333] mt-2">
            Uncompromising quality in every grain, pod, and blend.
          </p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white p-7 rounded-xl border border-[#EAE0D5] flex flex-col items-start text-left hover:border-[#D4C5B9] transition-colors shadow-2xs"
              >
                <div className="w-11 h-11 rounded-lg bg-[#FAF7F2] border border-[#EAE0D5] text-[#991B1B] flex items-center justify-center mb-5 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#2A1D17]">
                  {feature.title}
                </h3>
                <p className="text-xs text-[#5A4333] mt-2 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
