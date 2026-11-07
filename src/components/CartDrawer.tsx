import React from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, MessageSquare, FileSpreadsheet, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onOpenProduct: (productId: string) => void;
  onOpenQuote: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onOpenProduct,
  onOpenQuote,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const gstRate = 0.18; // 18% standard GST
  const estimatedGst = Math.round(subtotal * gstRate);
  const total = subtotal + estimatedGst;
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleWhatsAppCheckout = () => {
    let message = `*SurSite Surgical - Procurement Order Request*\n\n`;
    items.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}* (SKU: ${item.product.sku})\n`;
      message += `   Qty: ${item.quantity} units @ PKR ${item.product.price.toLocaleString()} = PKR ${(item.product.price * item.quantity).toLocaleString()}\n`;
    });
    message += `\n*Subtotal:* PKR ${subtotal.toLocaleString()}`;
    message += `\n*Est. GST (18%):* PKR ${estimatedGst.toLocaleString()}`;
    message += `\n*Estimated Total:* PKR ${total.toLocaleString()}`;
    message += `\n*Total Units:* ${totalQuantity}`;
    message += `\n\nPlease confirm availability, pro-forma billing, and dispatch timelines from Sialkot HQ.`;

    window.open(`https://wa.me/923000000000?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleDownloadInvoice = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-white h-full shadow-2xl flex flex-col border-l border-[#c1c7d0] animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 md:p-6 border-b border-[#c1c7d0] flex items-center justify-between bg-[#eff4ff]">
          <div>
            <h2 className="text-lg font-bold text-[#003358] flex items-center gap-2">
              <span>Procurement Cart</span>
              <span className="text-xs bg-[#004a7c] text-white px-2 py-0.5 rounded font-normal">
                {items.length} {items.length === 1 ? 'line item' : 'line items'}
              </span>
            </h2>
            <p className="text-xs text-[#42474f] mt-0.5">
              Direct B2B hospital & distributor supply from Sialkot
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#42474f] hover:text-[#003358] hover:bg-white rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
          {items.length === 0 ? (
            <div className="py-16 text-center text-[#42474f]">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#eff4ff] border border-[#B0C4DE] rounded-full flex items-center justify-center text-[#003358]">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-base font-semibold text-[#003358] mb-1">Your cart is empty</h3>
              <p className="text-sm max-w-xs mx-auto mb-6">
                Explore our precision instruments manufactured in Sialkot, Pakistan.
              </p>
              <button
                onClick={onClose}
                className="bg-[#003358] text-white text-sm font-semibold px-6 py-2.5 rounded hover:bg-[#004a7c] transition-colors"
              >
                Browse Catalog
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="p-3.5 bg-white border border-[#B0C4DE] rounded flex gap-3.5 items-start transition-shadow hover:shadow-xs"
              >
                <div
                  onClick={() => {
                    onOpenProduct(item.product.id);
                    onClose();
                  }}
                  className="w-20 h-20 bg-[#f8f9ff] border border-[#c1c7d0] rounded p-1 flex-shrink-0 cursor-pointer flex items-center justify-center"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-2">
                    <h4
                      onClick={() => {
                        onOpenProduct(item.product.id);
                        onClose();
                      }}
                      className="text-sm font-semibold text-[#003358] hover:text-[#008B8B] cursor-pointer truncate"
                    >
                      {item.product.name}
                    </h4>
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-[#727780] hover:text-[#ba1a1a] p-1"
                      title="Remove instrument"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs text-[#42474f] font-mono mt-0.5">
                    SKU: {item.product.sku} · {item.product.dimensions}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center border border-[#B0C4DE] rounded bg-white">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, Math.max(item.product.minOrderQuantity, item.quantity - 5))}
                        className="p-1 hover:bg-[#eff4ff] text-[#42474f] disabled:opacity-40"
                        disabled={item.quantity <= item.product.minOrderQuantity}
                        title={`Minimum order: ${item.product.minOrderQuantity}`}
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-2.5 text-xs font-semibold text-[#003358]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 5)}
                        className="p-1 hover:bg-[#eff4ff] text-[#42474f]"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-right">
                      <div className="text-sm font-bold text-[#003358]">
                        PKR {(item.product.price * item.quantity).toLocaleString()}
                      </div>
                      <div className="text-[10px] text-[#42474f]">
                        PKR {item.product.price.toLocaleString()} / unit
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & CTAs */}
        {items.length > 0 && (
          <div className="p-4 md:p-6 border-t border-[#c1c7d0] bg-[#f8f9ff] space-y-3">
            <div className="space-y-1.5 text-xs text-[#42474f]">
              <div className="flex justify-between">
                <span>Subtotal ({totalQuantity} units)</span>
                <span className="font-semibold text-[#003358]">PKR {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Est. Sales Tax (18% GST)</span>
                <span className="font-semibold text-[#003358]">PKR {estimatedGst.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Domestic Delivery (TCS / Leopard / Cargo)</span>
                <span className="text-[#006a6a] font-semibold">Calculated at dispatch</span>
              </div>
              <div className="pt-2 border-t border-[#c1c7d0] flex justify-between text-base font-bold text-[#003358]">
                <span>Total Estimated</span>
                <span>PKR {total.toLocaleString()}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full bg-[#25D366] hover:bg-[#1fb855] text-white py-2.5 px-4 rounded text-sm font-semibold flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm Order via WhatsApp</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={onOpenQuote}
                  className="bg-white border border-[#003358] text-[#003358] hover:bg-[#eff4ff] py-2 px-3 rounded text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5" />
                  <span>Request RFQ (&gt;500)</span>
                </button>

                <button
                  onClick={handleDownloadInvoice}
                  className="bg-white border border-[#B0C4DE] text-[#42474f] hover:bg-white/80 py-2 px-3 rounded text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Print Pro-Forma</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <p className="text-[11px] text-center text-[#727780]">
              All items packaged sterile or in autoclave-ready pouches with ISO 13485 test lot certificates.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
