import React, { useState, useMemo } from 'react';
import { Verified, DescriptionIcon, ChevronLeftIcon, ChevronRightIcon } from '../components/Icons';
import { Product, MaterialType, CategoryType } from '../types';

interface InstrumentsViewProps {
  products: Product[];
  onOpenProduct: (productId: string) => void;
  onOpenQuoteWithProduct: (product: Product) => void;
  initialDiscipline?: string;
}

export const InstrumentsView: React.FC<InstrumentsViewProps> = ({
  products,
  onOpenProduct,
  onOpenQuoteWithProduct,
  initialDiscipline,
}) => {
  // Filters
  const [selectedMaterials, setSelectedMaterials] = useState<MaterialType[]>([
    '316L Stainless Steel',
    'High Carbon Steel',
    'Titanium Alloy',
  ]);
  const [selectedCategories, setSelectedCategories] = useState<CategoryType[]>([
    'Cutting & Dissecting',
    'Grasping & Holding',
    'Clamping & Occluding',
    'Retracting & Exposing',
  ]);
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>(initialDiscipline || 'All');
  const [sortBy, setSortBy] = useState<'relevance' | 'price-asc' | 'price-desc' | 'grade'>('relevance');
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const toggleMaterial = (mat: MaterialType) => {
    setSelectedMaterials((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
    );
    setPage(1);
  };

  const toggleCategory = (cat: CategoryType) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
    setPage(1);
  };

  const handleResetFilters = () => {
    setSelectedMaterials(['316L Stainless Steel', 'High Carbon Steel', 'Titanium Alloy']);
    setSelectedCategories([
      'Cutting & Dissecting',
      'Grasping & Holding',
      'Clamping & Occluding',
      'Retracting & Exposing',
    ]);
    setSelectedDiscipline('All');
    setPage(1);
  };

  // Filtered and Sorted
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchMat = selectedMaterials.length === 0 || selectedMaterials.includes(p.material);
      const matchCat = selectedCategories.length === 0 || selectedCategories.includes(p.category);
      const matchDisc = selectedDiscipline === 'All' || p.discipline === selectedDiscipline;
      return matchMat && matchCat && matchDisc;
    });
  }, [products, selectedMaterials, selectedCategories, selectedDiscipline]);

  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'grade') {
      list.sort((a, b) => (b.isIsoCertified ? 1 : 0) - (a.isIsoCertified ? 1 : 0));
    }
    return list;
  }, [filteredProducts, sortBy]);

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage) || 1;
  const paginatedProducts = sortedProducts.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-20 py-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Sidebar Filters */}
        <aside className="md:col-span-3 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-[#003358] mb-1">Instruments</h1>
            <p className="text-sm text-[#42474f]">Precision surgical tools crafted in Sialkot.</p>
          </div>

          {/* Discipline Quick Selector if set */}
          {selectedDiscipline !== 'All' && (
            <div className="bg-[#eff4ff] border border-[#B0C4DE] p-3 rounded flex items-center justify-between text-xs">
              <span className="text-[#003358] font-semibold">
                Discipline: <span className="font-bold">{selectedDiscipline}</span>
              </span>
              <button
                onClick={() => setSelectedDiscipline('All')}
                className="text-[#003358] hover:underline font-semibold"
              >
                Clear
              </button>
            </div>
          )}

          {/* Filter Group: Material */}
          <div className="border border-[#c1c7d0] rounded bg-[#f8f9ff] p-4">
            <h3 className="text-base font-semibold text-[#003358] mb-3 border-b border-[#c1c7d0] pb-2">
              Material
            </h3>
            <div className="space-y-2.5">
              {(['316L Stainless Steel', 'High Carbon Steel', 'Titanium Alloy'] as MaterialType[]).map(
                (mat) => (
                  <label key={mat} className="flex items-center gap-2.5 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedMaterials.includes(mat)}
                      onChange={() => toggleMaterial(mat)}
                      className="rounded border-[#c1c7d0] text-[#003358] focus:ring-[#003358] w-4 h-4 bg-white"
                    />
                    <span className="text-sm text-[#0b1c30] group-hover:text-[#003358] transition-colors">
                      {mat}
                    </span>
                  </label>
                )
              )}
            </div>
          </div>

          {/* Filter Group: Category */}
          <div className="border border-[#c1c7d0] rounded bg-[#f8f9ff] p-4">
            <h3 className="text-base font-semibold text-[#003358] mb-3 border-b border-[#c1c7d0] pb-2">
              Category
            </h3>
            <div className="space-y-2.5">
              {(
                [
                  'Cutting & Dissecting',
                  'Grasping & Holding',
                  'Clamping & Occluding',
                  'Retracting & Exposing',
                ] as CategoryType[]
              ).map((cat) => (
                <label key={cat} className="flex items-center gap-2.5 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                    className="rounded border-[#c1c7d0] text-[#003358] focus:ring-[#003358] w-4 h-4 bg-white"
                  />
                  <span className="text-sm text-[#0b1c30] group-hover:text-[#003358] transition-colors">
                    {cat}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Apply / Reset Filter buttons */}
          <div className="space-y-2">
            <button
              onClick={() => setPage(1)}
              className="w-full bg-[#008B8B] hover:bg-[#007A7A] text-white text-xs font-semibold py-3 rounded transition-colors uppercase tracking-wider shadow-xs"
            >
              Apply Filters
            </button>
            <button
              onClick={handleResetFilters}
              className="w-full bg-white border border-[#B0C4DE] hover:bg-[#eff4ff] text-[#42474f] text-xs font-semibold py-2 rounded transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        </aside>

        {/* Product Grid */}
        <section className="md:col-span-9">
          {/* Top Bar */}
          <div className="flex justify-between items-center mb-6 pb-3 border-b border-[#c1c7d0]">
            <span className="text-xs font-semibold text-[#42474f]">
              Showing {sortedProducts.length} Instruments
            </span>

            <div className="flex items-center gap-2">
              <span className="text-xs text-[#42474f]">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-[#B0C4DE] text-[#0b1c30] text-xs rounded px-2.5 py-1.5 focus:border-[#004A7C] focus:ring-1 focus:ring-[#004A7C] outline-none"
              >
                <option value="relevance">Clinical Relevance</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="grade">Grade: Highest (ISO)</option>
              </select>
            </div>
          </div>

          {/* Cards Grid */}
          {paginatedProducts.length === 0 ? (
            <div className="py-16 text-center border border-dashed border-[#c1c7d0] rounded bg-white">
              <p className="text-base font-semibold text-[#003358] mb-2">No matching instruments found</p>
              <p className="text-xs text-[#42474f] mb-4">
                Try selecting different materials or resetting the category filter.
              </p>
              <button
                onClick={handleResetFilters}
                className="bg-[#003358] text-white text-xs font-semibold px-4 py-2 rounded"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-[#B0C4DE] hover:shadow-[0px_4px_14px_rgba(0,74,124,0.08)] transition-all duration-300 rounded flex flex-col group overflow-hidden"
                >
                  {/* Image container */}
                  <div
                    onClick={() => onOpenProduct(product.id)}
                    className="aspect-square bg-white border-b border-[#B0C4DE] p-4 relative flex items-center justify-center cursor-pointer overflow-hidden"
                  >
                    {/* ISO Badge */}
                    {product.isIsoCertified && (
                      <div className="absolute top-2 right-2 bg-[#eff4ff] text-[#42474f] text-[10px] font-semibold px-1.5 py-0.5 rounded border border-[#c1c7d0] flex items-center gap-1 z-10">
                        <Verified className="text-[13px] text-[#003358]" />
                        <span>ISO 13485</span>
                      </div>
                    )}

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-4 flex flex-col flex-grow">
                    <div className="mb-auto">
                      <h4
                        onClick={() => onOpenProduct(product.id)}
                        className="text-base font-bold text-[#003358] mb-1.5 hover:text-[#008B8B] cursor-pointer transition-colors leading-snug line-clamp-2"
                      >
                        {product.name}
                      </h4>
                      <div className="flex items-center gap-1.5 mb-3 flex-wrap">
                        <span className="text-[11px] font-medium text-[#42474f] bg-[#F8FAFC] px-1.5 py-0.5 rounded border border-[#c1c7d0]">
                          {product.materialTag}
                        </span>
                        <span className="text-[11px] font-medium text-[#42474f] bg-[#F8FAFC] px-1.5 py-0.5 rounded border border-[#c1c7d0]">
                          {product.dimensions}
                        </span>
                        <span className="text-[10px] text-[#727780] font-mono">
                          {product.sku}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Pricing & Quote */}
                    <div className="mt-4 pt-3 border-t border-[#c1c7d0] flex justify-between items-end">
                      <div>
                        <p className="text-[10px] font-semibold text-[#42474f] uppercase tracking-wider mb-0.5">
                          Est. Bulk Price
                        </p>
                        <p className="text-lg font-bold text-[#004A7C]">
                          Rs. {product.price.toLocaleString()}
                        </p>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenQuoteWithProduct(product);
                        }}
                        className="border border-[#B0C4DE] text-[#004A7C] hover:bg-[#F8FAFC] text-xs font-semibold px-3 py-1.5 rounded transition-colors flex items-center gap-1"
                      >
                        <DescriptionIcon className="text-[16px]" />
                        <span>Quote</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-10 flex justify-center items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="p-2 border border-[#c1c7d0] rounded text-[#42474f] hover:text-[#003358] hover:border-[#B0C4DE] bg-white disabled:opacity-40 transition-colors"
              >
                <ChevronLeftIcon className="text-[20px]" />
              </button>

              {Array.from({ length: totalPages }).map((_, i) => {
                const pageNumber = i + 1;
                const isActive = pageNumber === page;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => setPage(pageNumber)}
                    className={`w-8 h-8 text-xs font-semibold rounded flex items-center justify-center transition-colors ${
                      isActive
                        ? 'bg-[#eff4ff] text-[#003358] border border-[#004A7C]'
                        : 'text-[#42474f] hover:bg-[#eff4ff]'
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="p-2 border border-[#c1c7d0] rounded text-[#42474f] hover:text-[#003358] hover:border-[#B0C4DE] bg-white disabled:opacity-40 transition-colors"
              >
                <ChevronRightIcon className="text-[20px]" />
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
