import React from 'react';
import { MessageSquare, FileText, Truck, Shield, Scale } from 'lucide-react';

interface FooterProps {
  onOpenQuote: () => void;
  onNavigate: (view: 'home' | 'catalog' | 'heritage' | 'compliance') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote, onNavigate }) => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello SurSite Surgical, I would like to inquire about surgical instrument procurement and bulk hospital supply.");
    window.open(`https://wa.me/923000000000?text=${text}`, '_blank');
  };

  return (
    <footer className="bg-[#d3e4fe] border-t border-[#c1c7d0] text-[#0b1c30] w-full mt-auto">
      <div className="w-full py-10 px-4 md:px-12 lg:px-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand & Identity */}
        <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
          <div className="text-xl font-bold text-[#003358] tracking-tight">
            SurSite
          </div>
          <p className="text-sm text-[#42474f] max-w-md">
            © 2024 SurSite Surgical. Precision from Sialkot. ISO 13485 Certified.
          </p>
          <div className="flex gap-2 mt-3 items-center">
            {/* Payment & Settlement Mockup Badges */}
            <div className="h-7 px-2.5 bg-white/70 border border-[#c1c7d0] rounded flex items-center justify-center text-[11px] font-bold text-[#42474f]">
              VISA
            </div>
            <div className="h-7 px-2.5 bg-white/70 border border-[#c1c7d0] rounded flex items-center justify-center text-[11px] font-bold text-[#42474f]">
              MC
            </div>
            <div className="h-7 px-2.5 bg-white/70 border border-[#c1c7d0] rounded flex items-center justify-center text-[11px] font-bold text-[#004a7c]">
              JazzCash
            </div>
            <div className="h-7 px-2.5 bg-white/70 border border-[#c1c7d0] rounded flex items-center justify-center text-[11px] font-bold text-[#006a6a]">
              Bank Transfer / L/C
            </div>
          </div>
        </div>

        {/* Support Column */}
        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-semibold text-[#003358] mb-1">Support</h4>
          <button
            onClick={handleWhatsApp}
            className="text-sm text-[#42474f] hover:text-[#003358] text-left transition-colors flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp Support</span>
          </button>
          <button
            onClick={onOpenQuote}
            className="text-sm text-[#42474f] hover:text-[#003358] text-left transition-colors flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Request Bulk Quote</span>
          </button>
          <button
            onClick={() => onNavigate('heritage')}
            className="text-sm text-[#42474f] hover:text-[#003358] text-left transition-colors flex items-center gap-1.5"
          >
            <Truck className="w-3.5 h-3.5" />
            <span>Shipping Policy</span>
          </button>
        </div>

        {/* Legal & Compliance Column */}
        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-semibold text-[#003358] mb-1">Legal & Quality</h4>
          <button
            onClick={() => onNavigate('compliance')}
            className="text-sm text-[#42474f] hover:text-[#003358] text-left transition-colors flex items-center gap-1.5"
          >
            <Shield className="w-3.5 h-3.5 text-[#008B8B]" />
            <span>Quality Compliance (ISO 13485)</span>
          </button>
          <button
            onClick={() => alert("SurSite Surgical Privacy Policy: All client and hospital procurement specifications, custom blueprint requests, and RFQs are held in strict medical-grade confidentiality under ISO 13485 standards.")}
            className="text-sm text-[#42474f] hover:text-[#003358] text-left transition-colors"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => alert("SurSite Surgical Commercial Terms: Standard export and domestic terms require 10-unit Minimum Order Quantities (MOQ). All instruments are autoclave safe and passivated to ASTM A967.")}
            className="text-sm text-[#42474f] hover:text-[#003358] text-left transition-colors flex items-center gap-1.5"
          >
            <Scale className="w-3.5 h-3.5" />
            <span>Terms of Procurement</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
