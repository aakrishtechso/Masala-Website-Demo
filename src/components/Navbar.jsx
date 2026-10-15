import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(targetId);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#1F140E] text-[#F4EFEA] text-xs py-2 px-4 border-b border-[#3D291D]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CA8A04]" />
            <span className="font-medium tracking-wide">
              Complimentary shipping across India on orders over ₹499
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-[#C4B3A5]">
            <span>100% Unadulterated & Cold Ground</span>
            <span>·</span>
            <span>Pure Salem & Mathania Harvests</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#EAE0D5]'
            : 'bg-[#FAF7F2] border-b border-[#EAE0D5]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, 'home')}
            className="flex items-center gap-2.5 group whitespace-nowrap shrink-0 text-left"
          >
            <div className="w-9 h-9 rounded-full bg-[#991B1B] text-white flex items-center justify-center font-serif text-lg font-bold shadow-sm transition-transform duration-300 group-hover:scale-105">
              V
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-[#2A1D17]">
                VEDA MASALA
              </span>
              <span className="text-[10px] uppercase tracking-widest font-sans font-semibold text-[#8C6D58] -mt-1">
                Artisanal Indian Spices
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4A3525]">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, 'home')}
              className="hover:text-[#991B1B] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Home
            </a>
            <a
              href="#products"
              onClick={(e) => handleLinkClick(e, 'products')}
              className="hover:text-[#991B1B] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Shop Spices
            </a>
            <a
              href="#story"
              onClick={(e) => handleLinkClick(e, 'story')}
              className="hover:text-[#991B1B] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Our Story
            </a>
            <a
              href="#recipes"
              onClick={(e) => handleLinkClick(e, 'recipes')}
              className="hover:text-[#991B1B] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Recipes
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="hover:text-[#991B1B] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: Primary Actions (Cart + Shop Now) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Live Cart Button */}
            <button
              onClick={onOpenCart}
              aria-label={`Shopping bag with ${cartCount} items`}
              className="relative p-2.5 rounded-lg text-[#2A1D17] hover:bg-[#EFE6DC] transition-colors flex items-center gap-2 group"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-[#2A1D17] group-hover:text-[#991B1B] transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-[#991B1B] text-white text-[11px] font-bold font-sans rounded-full w-5 h-5 flex items-center justify-center shadow-xs">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider text-[#4A3525]">
                Cart
              </span>
            </button>

            {/* Clear Primary Shop Now Button */}
            <button
              onClick={(e) => handleLinkClick(e, 'products')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#991B1B] hover:bg-[#7F1D1D] text-white text-xs font-semibold uppercase tracking-wider rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap"
            >
              <span>Shop Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 rounded-lg text-[#2A1D17] hover:bg-[#EFE6DC] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#EAE0D5] bg-[#FAF7F2] px-6 py-6 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3 text-base font-medium text-[#2A1D17]">
              <a
                href="#home"
                onClick={(e) => handleLinkClick(e, 'home')}
                className="py-2 border-b border-[#EAE0D5]/50 hover:text-[#991B1B]"
              >
                Home
              </a>
              <a
                href="#products"
                onClick={(e) => handleLinkClick(e, 'products')}
                className="py-2 border-b border-[#EAE0D5]/50 hover:text-[#991B1B]"
              >
                Shop Spices
              </a>
              <a
                href="#categories"
                onClick={(e) => handleLinkClick(e, 'categories')}
                className="py-2 border-b border-[#EAE0D5]/50 hover:text-[#991B1B]"
              >
                Categories
              </a>
              <a
                href="#story"
                onClick={(e) => handleLinkClick(e, 'story')}
                className="py-2 border-b border-[#EAE0D5]/50 hover:text-[#991B1B]"
              >
                Our Story
              </a>
              <a
                href="#recipes"
                onClick={(e) => handleLinkClick(e, 'recipes')}
                className="py-2 border-b border-[#EAE0D5]/50 hover:text-[#991B1B]"
              >
                Recipes
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, 'contact')}
                className="py-2 hover:text-[#991B1B]"
              >
                Contact
              </a>
            </nav>
            <div className="pt-2">
              <button
                onClick={(e) => handleLinkClick(e, 'products')}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#991B1B] text-white font-semibold text-sm rounded-lg"
              >
                <span>Shop All Spices</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
