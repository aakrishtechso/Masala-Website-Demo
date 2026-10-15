import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const handleNav = (e, id) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1F140E] text-[#D8CECA] border-t border-[#352319] pt-16 pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#352319]">
          
          {/* Brand Info & Tagline (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#991B1B] text-white flex items-center justify-center font-serif text-lg font-bold">
                V
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight text-[#FAF7F2]">
                VEDA MASALA
              </span>
            </div>

            <p className="text-sm text-[#BDB0A8] leading-relaxed max-w-sm">
              Artisanal Indian spices and heirloom masalas crafted from single-origin harvests. Cold-ground in small batches to preserve pure flavor and rich aroma.
            </p>

            <div className="pt-2 text-xs text-[#9E8B7E] space-y-1">
              <p>FSSAI Central Lic. No. 10021011000189 [Demo]</p>
              <p>Ramganj Mandi, Rajasthan, India</p>
            </div>
          </div>

          {/* Quick Links (Col 5-7) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#CA8A04]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#BDB0A8]">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleNav(e, 'home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => handleNav(e, 'products')}
                  className="hover:text-white transition-colors"
                >
                  Shop Spices
                </a>
              </li>
              <li>
                <a
                  href="#categories"
                  onClick={(e) => handleNav(e, 'categories')}
                  className="hover:text-white transition-colors"
                >
                  Collections
                </a>
              </li>
              <li>
                <a
                  href="#story"
                  onClick={(e) => handleNav(e, 'story')}
                  className="hover:text-white transition-colors"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#recipes"
                  onClick={(e) => handleNav(e, 'recipes')}
                  className="hover:text-white transition-colors"
                >
                  Recipes
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNav(e, 'contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Collections (Col 8-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#CA8A04]">
              Pantry Specialties
            </h4>
            <ul className="space-y-2 text-sm text-[#BDB0A8]">
              <li>Salem Turmeric Powder (High Curcumin)</li>
              <li>Mathania & Guntur Red Chili Blend</li>
              <li>Cold-Milled Ramganj Coriander</li>
              <li>Single-Estate Unpolished Jeera</li>
              <li>Awadhi Royal Shahi Garam Masala</li>
              <li>Kitchen King All-Purpose Curry Blend</li>
            </ul>
          </div>

          {/* Contact Details & Social (Col 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#CA8A04]">
              Customer Support
            </h4>
            <div className="space-y-2 text-sm text-[#BDB0A8]">
              <p>Mon – Sat: 9:00 AM – 6:30 PM IST</p>
              <p className="text-white font-medium">+91 1800 266 8332 [Placeholder]</p>
              <p className="text-white font-medium">care@vedamasala.in [Placeholder]</p>
            </div>

            {/* Social Links */}
            <div className="pt-3">
              <span className="text-xs text-[#8C7A70] block mb-2 font-medium">Follow Our Spice Journey</span>
              <div className="flex items-center gap-3 text-xs text-[#FAF7F2]">
                <a href="#instagram" className="px-2.5 py-1 rounded bg-[#2D1F17] hover:bg-[#3D2C22] transition-colors">
                  Instagram
                </a>
                <a href="#youtube" className="px-2.5 py-1 rounded bg-[#2D1F17] hover:bg-[#3D2C22] transition-colors">
                  YouTube
                </a>
                <a href="#facebook" className="px-2.5 py-1 rounded bg-[#2D1F17] hover:bg-[#3D2C22] transition-colors">
                  Facebook
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Policies */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C7A70]">
          <div>
            &copy; {new Date().getFullYear()} Veda Masala Private Limited. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <span>·</span>
            <a href="#shipping" className="hover:text-white transition-colors">
              Shipping & Returns
            </a>
            <span>·</span>
            <a href="#fssai" className="hover:text-white transition-colors">
              Quality Assurance
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
