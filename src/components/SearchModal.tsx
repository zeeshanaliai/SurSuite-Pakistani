import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (productId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // Toggle search
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const filtered = products.filter((p) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      p.sku.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.discipline.toLowerCase().includes(q) ||
      p.material.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-start justify-center pt-20 px-4">
      <div 
        className="w-full max-w-xl bg-white border border-[#B0C4DE] rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-3.5 border-b border-[#c1c7d0] flex items-center gap-3 bg-[#eff4ff]">
          <Search className="w-5 h-5 text-[#003358]" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search instruments by name, SKU (e.g. METZ-18C), discipline, or material..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent border-none text-sm text-[#0b1c30] placeholder:text-[#727780] focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-[#727780] hover:text-[#003358]">
              <X className="w-4 h-4" />
            </button>
          )}
          <span className="text-[10px] text-[#727780] bg-white border border-[#c1c7d0] px-1.5 py-0.5 rounded">
            ESC
          </span>
        </div>

        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-[#eff4ff]">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-sm text-[#42474f]">
              No surgical instruments found matching &ldquo;{query}&rdquo;
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectProduct(item.id);
                  onClose();
                }}
                className="p-3 hover:bg-[#f8f9ff] cursor-pointer rounded flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white border border-[#B0C4DE] rounded p-1 flex items-center justify-center">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#003358] group-hover:text-[#008B8B] transition-colors">
                      {item.name}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-[#42474f]">
                      <span className="font-mono text-[11px] text-[#727780]">{item.sku}</span>
                      <span>·</span>
                      <span>{item.category}</span>
                      <span>·</span>
                      <span className="text-[#006a6a] font-medium">PKR {item.price.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center text-xs text-[#003358] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
