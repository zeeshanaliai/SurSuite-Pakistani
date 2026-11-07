/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { InstrumentsView } from './views/InstrumentsView';
import { ProductDetailView } from './views/ProductDetailView';
import { HeritageView } from './views/HeritageView';
import { ComplianceView } from './views/ComplianceView';
import { CartDrawer } from './components/CartDrawer';
import { QuoteModal } from './components/QuoteModal';
import { SearchModal } from './components/SearchModal';
import { PRODUCTS } from './data/products';
import { Product, CartItem } from './types';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'catalog' | 'product' | 'heritage' | 'compliance'>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('metzenbaum-scissors-18cm-curved');
  const [disciplineFilter, setDisciplineFilter] = useState<string | undefined>(undefined);
  
  // Cart state initialized with 1 default item so user sees immediate live data
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[0],
      quantity: 10,
    },
  ]);

  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<Product | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView, selectedProductId]);

  // Global search shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (view: 'home' | 'catalog' | 'heritage' | 'compliance', discipline?: string) => {
    if (discipline) {
      setDisciplineFilter(discipline);
    }
    setActiveView(view);
  };

  const handleOpenProduct = (productId: string) => {
    setSelectedProductId(productId);
    setActiveView('product');
  };

  const handleAddToCart = (product: Product, quantity: number) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveCartItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleOpenQuoteWithProduct = (product: Product) => {
    setQuoteProduct(product);
    setQuoteModalOpen(true);
  };

  const handleOpenGeneralQuote = () => {
    setQuoteProduct(null);
    setQuoteModalOpen(true);
  };

  const selectedProduct = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9ff] text-[#0b1c30]">
      {/* Top Navigation */}
      <Navbar
        activeView={activeView}
        onNavigate={handleNavigate}
        cartCount={cartItems.length}
        onOpenCart={() => setCartDrawerOpen(true)}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenQuote={handleOpenGeneralQuote}
      />

      {/* Main View Router */}
      <main className="flex-grow">
        {activeView === 'home' && (
          <HomeView
            onNavigateCatalog={(discipline) => {
              setDisciplineFilter(discipline);
              setActiveView('catalog');
            }}
            onOpenQuote={handleOpenGeneralQuote}
            onOpenProduct={handleOpenProduct}
            featuredProducts={PRODUCTS}
          />
        )}

        {activeView === 'catalog' && (
          <InstrumentsView
            products={PRODUCTS}
            onOpenProduct={handleOpenProduct}
            onOpenQuoteWithProduct={handleOpenQuoteWithProduct}
            initialDiscipline={disciplineFilter}
          />
        )}

        {activeView === 'product' && (
          <ProductDetailView
            product={selectedProduct}
            onNavigateCatalog={() => setActiveView('catalog')}
            onAddToCart={handleAddToCart}
            onOpenQuoteWithProduct={handleOpenQuoteWithProduct}
          />
        )}

        {activeView === 'heritage' && <HeritageView />}

        {activeView === 'compliance' && (
          <ComplianceView onOpenQuote={handleOpenGeneralQuote} />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onOpenQuote={handleOpenGeneralQuote}
        onNavigate={handleNavigate}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onOpenProduct={handleOpenProduct}
        onOpenQuote={() => {
          setCartDrawerOpen(false);
          handleOpenGeneralQuote();
        }}
      />

      {/* Bulk RFQ Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        selectedProduct={quoteProduct}
        products={PRODUCTS}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        products={PRODUCTS}
        onSelectProduct={handleOpenProduct}
      />
    </div>
  );
}
