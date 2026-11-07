import React, { useState } from 'react';
import { ShoppingCart, User, Search, Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  activeView: 'home' | 'catalog' | 'product' | 'heritage' | 'compliance';
  onNavigate: (view: 'home' | 'catalog' | 'heritage' | 'compliance', category?: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenQuote,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);

  return (
    <header className="bg-white border-b border-[#c1c7d0] sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-4 md:px-12 lg:px-20 max-w-7xl mx-auto h-20">
        {/* Brand */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => onNavigate('home')}
            className="text-2xl font-bold text-[#003358] tracking-tight hover:opacity-90 transition-opacity flex items-center gap-2 text-left"
          >
            <span>SurSite</span>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 h-full">
          <button
            onClick={() => onNavigate('catalog')}
            className={`h-full flex items-center text-sm font-medium transition-colors ${
              activeView === 'catalog'
                ? 'text-[#003358] border-b-2 border-[#003358] font-semibold'
                : 'text-[#42474f] hover:text-[#003358]'
            }`}
          >
            Instruments
          </button>

          <button
            onClick={() => onNavigate('home')}
            className={`h-full flex items-center text-sm font-medium transition-colors ${
              activeView === 'home'
                ? 'text-[#003358] border-b-2 border-[#003358] font-semibold'
                : 'text-[#42474f] hover:text-[#003358]'
            }`}
          >
            Categories
          </button>

          <button
            onClick={() => onNavigate('heritage')}
            className={`h-full flex items-center text-sm font-medium transition-colors ${
              activeView === 'heritage'
                ? 'text-[#003358] border-b-2 border-[#003358] font-semibold'
                : 'text-[#42474f] hover:text-[#003358]'
            }`}
          >
            Sialkot Heritage
          </button>

          <button
            onClick={() => onNavigate('compliance')}
            className={`h-full flex items-center text-sm font-medium transition-colors ${
              activeView === 'compliance'
                ? 'text-[#003358] border-b-2 border-[#003358] font-semibold'
                : 'text-[#42474f] hover:text-[#003358]'
            }`}
          >
            Compliance
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3 text-[#003358]">
          {/* Quick Search */}
          <button
            onClick={onOpenSearch}
            aria-label="Search surgical catalog"
            title="Search catalog (Ctrl+K)"
            className="p-2 text-[#42474f] hover:text-[#003358] hover:bg-[#eff4ff] rounded-full transition-colors relative"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Cart with Counter */}
          <button
            onClick={onOpenCart}
            aria-label="Shopping Cart"
            className="p-2 text-[#003358] hover:bg-[#eff4ff] rounded-full transition-colors relative"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-[#008B8B] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-in fade-in zoom-in">
                {cartCount}
              </span>
            )}
          </button>

          {/* Account / RFQ Action Dropdown */}
          <div className="relative">
            <button
              onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
              aria-label="Account & Institutional Desk"
              className="p-2 text-[#003358] hover:bg-[#eff4ff] rounded-full transition-colors"
            >
              <User className="w-5 h-5" />
            </button>

            {accountDropdownOpen && (
              <div 
                className="absolute right-0 mt-2 w-64 bg-white border border-[#c1c7d0] rounded shadow-lg py-2 z-50 text-sm animate-in fade-in"
                onMouseLeave={() => setAccountDropdownOpen(false)}
              >
                <div className="px-4 py-2 border-b border-[#c1c7d0]">
                  <p className="font-semibold text-[#003358]">Institutional Procurement</p>
                  <p className="text-xs text-[#42474f]">Hospital & Distributor Desk</p>
                </div>
                <button
                  onClick={() => {
                    setAccountDropdownOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-[#eff4ff] text-[#003358] font-medium flex items-center justify-between"
                >
                  <span>Request Bulk Quote (RFQ)</span>
                  <span className="text-[11px] bg-[#e5eeff] px-1.5 py-0.5 rounded text-[#003358]">50+ units</span>
                </button>
                <button
                  onClick={() => {
                    setAccountDropdownOpen(false);
                    onNavigate('heritage');
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-[#eff4ff] text-[#42474f]"
                >
                  Distributor Inquiries
                </button>
                <button
                  onClick={() => {
                    setAccountDropdownOpen(false);
                    onNavigate('compliance');
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-[#eff4ff] text-[#42474f] flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-4 h-4 text-[#008B8B]" />
                  <span>ISO 13485 Verification</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#003358] hover:bg-[#eff4ff] rounded"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#c1c7d0] px-4 py-4 space-y-3">
          <button
            onClick={() => {
              onNavigate('catalog');
              setMobileMenuOpen(false);
            }}
            className={`block w-full text-left py-2 px-3 rounded text-sm ${
              activeView === 'catalog' ? 'bg-[#eff4ff] text-[#003358] font-bold' : 'text-[#42474f]'
            }`}
          >
            Instruments Catalog
          </button>
          <button
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
            className={`block w-full text-left py-2 px-3 rounded text-sm ${
              activeView === 'home' ? 'bg-[#eff4ff] text-[#003358] font-bold' : 'text-[#42474f]'
            }`}
          >
            Categories
          </button>
          <button
            onClick={() => {
              onNavigate('heritage');
              setMobileMenuOpen(false);
            }}
            className={`block w-full text-left py-2 px-3 rounded text-sm ${
              activeView === 'heritage' ? 'bg-[#eff4ff] text-[#003358] font-bold' : 'text-[#42474f]'
            }`}
          >
            Sialkot Heritage
          </button>
          <button
            onClick={() => {
              onNavigate('compliance');
              setMobileMenuOpen(false);
            }}
            className={`block w-full text-left py-2 px-3 rounded text-sm ${
              activeView === 'compliance' ? 'bg-[#eff4ff] text-[#003358] font-bold' : 'text-[#42474f]'
            }`}
          >
            Compliance & Certifications
          </button>
          <div className="pt-2 border-t border-[#c1c7d0] flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenQuote();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#008B8B] text-white py-2 px-3 rounded text-sm font-semibold text-center"
            >
              Request Bulk Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
