import React, { useState } from 'react';
import { X, CheckCircle, FileText, Send, Building2, Globe } from 'lucide-react';
import { Product } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct?: Product | null;
  products: Product[];
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  selectedProduct,
  products,
}) => {
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [productId, setProductId] = useState(selectedProduct?.id || (products[0]?.id || ''));
  const [quantity, setQuantity] = useState(500);
  const [country, setCountry] = useState('Pakistan');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [rfqNumber, setRfqNumber] = useState('');

  if (!isOpen) return null;

  const currentProduct = products.find((p) => p.id === productId) || selectedProduct;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `RFQ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setRfqNumber(code);
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="w-full max-w-2xl bg-white border border-[#B0C4DE] rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 border-b border-[#c1c7d0] bg-[#eff4ff] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded bg-[#003358] text-white flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#003358]">
                Request Bulk Quote (RFQ)
              </h2>
              <p className="text-xs text-[#42474f]">
                Factory direct pricing for hospitals, distributors, and bulk medical orders
              </p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 text-[#42474f] hover:text-[#003358] hover:bg-white rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#e5eeff] text-[#008B8B] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 text-[#008B8B]" />
            </div>
            <h3 className="text-xl font-bold text-[#003358]">Quote Request Received</h3>
            <p className="text-sm text-[#42474f] max-w-md mx-auto">
              Your inquiry has been logged under reference{' '}
              <span className="font-mono font-bold text-[#003358] bg-[#eff4ff] px-2 py-0.5 rounded border border-[#B0C4DE]">
                {rfqNumber}
              </span>
              . Our Sialkot metallurgical and export team will email you the formal commercial proposal within 4 business hours.
            </p>

            <div className="p-4 bg-[#f8f9ff] border border-[#B0C4DE] rounded text-left text-xs space-y-1.5 max-w-md mx-auto text-[#42474f]">
              <div className="flex justify-between">
                <span>Requested Instrument:</span>
                <span className="font-semibold text-[#003358]">{currentProduct?.name || 'General Batch'}</span>
              </div>
              <div className="flex justify-between">
                <span>Requested Volume:</span>
                <span className="font-semibold text-[#003358]">{quantity} units</span>
              </div>
              <div className="flex justify-between">
                <span>Destination Market:</span>
                <span className="font-semibold text-[#003358]">{country}</span>
              </div>
              <div className="flex justify-between">
                <span>Contact Email:</span>
                <span className="font-semibold text-[#003358]">{email}</span>
              </div>
            </div>

            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={resetAndClose}
                className="bg-[#003358] text-white px-6 py-2 rounded text-sm font-semibold hover:bg-[#004a7c] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Tiered Discount Banner */}
            <div className="bg-[#eff4ff] border border-[#B0C4DE] rounded p-3 text-xs text-[#003358] flex items-center justify-between">
              <span className="font-semibold flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#008B8B]" />
                Volume Tier Benefits:
              </span>
              <div className="flex gap-2">
                <span className="bg-white px-2 py-0.5 rounded border border-[#c1c7d0]">50+ units: 5% off</span>
                <span className="bg-white px-2 py-0.5 rounded border border-[#c1c7d0]">100+ units: 12% off</span>
                <span className="bg-[#004a7c] text-white px-2 py-0.5 rounded font-semibold">500+ units: 22% off</span>
              </div>
            </div>

            {/* Instrument Selection */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-[#003358]">Selected Instrument</label>
              <select
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                className="border border-[#B0C4DE] p-2 text-sm rounded bg-white text-[#0b1c30] focus:border-[#003358] focus:ring-1 focus:ring-[#003358] outline-none"
              >
                {products.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.sku}) — Standard Unit: PKR {p.price.toLocaleString()}
                  </option>
                ))}
                <option value="custom">Custom Surgical Set / OEM Blueprint Inquiry</option>
              </select>
            </div>

            {/* Grid fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#42474f]">Hospital / Company Name *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Shaukat Khanum / St. Jude Medical"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="border border-[#B0C4DE] p-2 text-sm rounded bg-white text-[#0b1c30] focus:border-[#003358] focus:ring-1 focus:ring-[#003358] outline-none"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#42474f]">Contact Person Name *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Dr. A. Rahman / Procurement Head"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="border border-[#B0C4DE] p-2 text-sm rounded bg-white text-[#0b1c30] focus:border-[#003358] focus:ring-1 focus:ring-[#003358] outline-none"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#42474f]">Corporate Email *</label>
                <input
                  required
                  type="email"
                  placeholder="procurement@hospital.org"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-[#B0C4DE] p-2 text-sm rounded bg-white text-[#0b1c30] focus:border-[#003358] focus:ring-1 focus:ring-[#003358] outline-none"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#42474f]">Phone / WhatsApp</label>
                <input
                  type="tel"
                  placeholder="+92 300 1234567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border border-[#B0C4DE] p-2 text-sm rounded bg-white text-[#0b1c30] focus:border-[#003358] focus:ring-1 focus:ring-[#003358] outline-none"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#42474f]">Estimated Quantity (Units) *</label>
                <input
                  required
                  type="number"
                  min="50"
                  step="10"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border border-[#B0C4DE] p-2 text-sm rounded bg-white text-[#0b1c30] focus:border-[#003358] focus:ring-1 focus:ring-[#003358] outline-none"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#42474f]">Destination Country / City *</label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="border border-[#B0C4DE] p-2 text-sm rounded bg-white text-[#0b1c30] focus:border-[#003358] focus:ring-1 focus:ring-[#003358] outline-none"
                >
                  <option value="Pakistan - Karachi">Pakistan - Karachi</option>
                  <option value="Pakistan - Lahore">Pakistan - Lahore</option>
                  <option value="Pakistan - Islamabad/Rawalpindi">Pakistan - Islamabad/Rawalpindi</option>
                  <option value="Pakistan - Sialkot">Pakistan - Sialkot</option>
                  <option value="Pakistan - Peshawar">Pakistan - Peshawar</option>
                  <option value="Pakistan - Quetta">Pakistan - Quetta</option>
                  <option value="United States">United States (Export)</option>
                  <option value="United Kingdom">United Kingdom (Export)</option>
                  <option value="Germany / EU">Germany / EU (Export)</option>
                  <option value="United Arab Emirates / GCC">United Arab Emirates / GCC</option>
                  <option value="Other">Other Global Market</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-[#42474f]">
                Technical Requirements, Custom Laser Etching, or Packaging Notes
              </label>
              <textarea
                rows={3}
                placeholder="Include custom specifications, hospital branding, tungsten carbide grade requests, or required delivery deadlines..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="border border-[#B0C4DE] p-2 text-sm rounded bg-white text-[#0b1c30] focus:border-[#003358] focus:ring-1 focus:ring-[#003358] outline-none resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-[#c1c7d0]">
              <span className="text-xs text-[#727780] flex items-center gap-1">
                <Globe className="w-3.5 h-3.5" />
                ISO 13485:2016 verified Sialkot factory direct
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-4 py-2 text-xs font-semibold text-[#42474f] hover:bg-[#eff4ff] rounded border border-[#B0C4DE]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#008B8B] hover:bg-[#007070] text-white px-5 py-2 rounded text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit RFQ</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
