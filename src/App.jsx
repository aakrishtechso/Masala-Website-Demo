import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import BrandStory from './components/BrandStory.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import CategorySection from './components/CategorySection.jsx';
import RecipeSection from './components/RecipeSection.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import QuickViewModal from './components/QuickViewModal.jsx';
import RecipeModal from './components/RecipeModal.jsx';
import StoryModal from './components/StoryModal.jsx';

import { PRODUCTS, CATEGORIES, RECIPES } from './data/products.js';

export default function App() {
  const [cart, setCart] = useState(() => {
    // Initialize cart from localStorage if present
    try {
      const saved = localStorage.getItem('veda_masala_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activeCategory, setActiveCategory] = useState('all');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('veda_masala_cart', JSON.stringify(cart));
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, [cart]);

  // Toast feedback helper
  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 3000);
  };

  // Add item to cart
  const handleAddToCart = (product, weight, qty = 1) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.id === product.id && item.selectedWeight.size === weight.size
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += qty;
        return updated;
      } else {
        return [
          ...prevCart,
          {
            id: product.id,
            name: product.name,
            imageUrl: product.imageUrl,
            selectedWeight: weight,
            quantity: qty
          }
        ];
      }
    });

    showToast(`Added ${weight.size} ${product.name} to cart.`);
  };

  // Update quantity in cart
  const handleUpdateQuantity = (productId, weightSize, newQty) => {
    if (newQty <= 0) {
      handleRemoveCartItem(productId, weightSize);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === productId && item.selectedWeight.size === weightSize) {
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  // Remove item from cart
  const handleRemoveCartItem = (productId, weightSize) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item.id === productId && item.selectedWeight.size === weightSize)
      )
    );
    showToast('Item removed from cart.');
  };

  // Clear entire cart
  const handleClearCart = () => {
    setCart([]);
  };

  // Smooth navigation helper
  const handleNavigate = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Category select helper from Category cards
  const handleCategorySelect = (categoryId) => {
    setActiveCategory(categoryId);
    handleNavigate('products');
  };

  // Add Recipe Spices helper
  const handleAddRecipeSpices = (recipe) => {
    // Match recipe to corresponding product spices
    const spicesToAdd = [];
    if (recipe.id === 'paneer-tikka') {
      const garamMasala = PRODUCTS.find((p) => p.id === 'garam-masala');
      const redChili = PRODUCTS.find((p) => p.id === 'red-chili-powder');
      if (garamMasala) spicesToAdd.push({ product: garamMasala, weight: garamMasala.weights[0] });
      if (redChili) spicesToAdd.push({ product: redChili, weight: redChili.weights[0] });
    } else if (recipe.id === 'chole-masala') {
      const kitchenKing = PRODUCTS.find((p) => p.id === 'kitchen-king-masala');
      const coriander = PRODUCTS.find((p) => p.id === 'coriander-powder');
      if (kitchenKing) spicesToAdd.push({ product: kitchenKing, weight: kitchenKing.weights[0] });
      if (coriander) spicesToAdd.push({ product: coriander, weight: coriander.weights[0] });
    } else if (recipe.id === 'vegetable-biryani') {
      const garamMasala = PRODUCTS.find((p) => p.id === 'garam-masala');
      const cumin = PRODUCTS.find((p) => p.id === 'cumin-seeds');
      if (garamMasala) spicesToAdd.push({ product: garamMasala, weight: garamMasala.weights[0] });
      if (cumin) spicesToAdd.push({ product: cumin, weight: cumin.weights[0] });
    }

    spicesToAdd.forEach(({ product, weight }) => {
      handleAddToCart(product, weight, 1);
    });

    showToast(`Added ${recipe.name} spice kit to your cart!`);
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2A1D17]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#2A1D17] text-[#FAF7F2] text-xs font-medium px-4 py-3 rounded-lg shadow-xl border border-[#4A3525] flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span className="w-2 h-2 rounded-full bg-[#CA8A04]" />
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-[#9E8B7E] hover:text-white text-xs ml-2"
          >
            &times;
          </button>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreClick={() => handleNavigate('products')}
          onStoryClick={() => setIsStoryModalOpen(true)}
        />

        {/* Product Collection */}
        <ProductGrid
          products={PRODUCTS}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onAddToCart={handleAddToCart}
          onQuickView={(p) => setQuickViewProduct(p)}
        />

        {/* Brand Story */}
        <BrandStory
          onOpenStoryModal={() => setIsStoryModalOpen(true)}
        />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Shop by Category */}
        <CategorySection
          categories={CATEGORIES}
          onSelectCategory={handleCategorySelect}
        />

        {/* Recipes */}
        <RecipeSection
          recipes={RECIPES}
          onSelectRecipe={(r) => setSelectedRecipe(r)}
        />

        {/* Final CTA */}
        <FinalCTA
          onShopAllClick={() => {
            setActiveCategory('all');
            handleNavigate('products');
          }}
        />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
        onBrowseSpices={() => handleNavigate('products')}
      />

      {/* Quick View Product Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Recipe Detail Modal */}
      <RecipeModal
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
        onAddRecipeSpices={handleAddRecipeSpices}
      />

      {/* Brand Craftsmanship Story Modal */}
      <StoryModal
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
        onExploreSpices={() => handleNavigate('products')}
      />

    </div>
  );
}
