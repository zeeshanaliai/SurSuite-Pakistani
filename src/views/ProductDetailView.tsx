import React, { useState } from 'react';
import {
  Verified,
  ScienceIcon,
  LocalHospitalIcon,
  ShoppingCart,
  RequestQuoteIcon,
  LocalShipping,
  ChevronRightIcon,
} from '../components/Icons';
import { Minus, Plus, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailViewProps {
  product: Product;
  onNavigateCatalog: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onOpenQuoteWithProduct: (product: Product) => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  product,
  onNavigateCatalog,
  onAddToCart,
  onOpenQuoteWithProduct,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(product.minOrderQuantity || 10);
  const [destination, setDestination] = useState('Karachi');
  const [addedToast, setAddedToast] = useState(false);

  const images = product.thumbnails && product.thumbnails.length > 0 ? product.thumbnails : [product.image];
  const activeImage = images[activeImageIndex] || product.image;

  const getEstimatedDelivery = (dest: string) => {
    switch (dest) {
      case 'Sialkot':
        return 'Est. Delivery: Same Day / 24h';
      case 'Lahore':
        return 'Est. Delivery: 1-2 Days';
      case 'Islamabad':
      case 'Rawalpindi':
        return 'Est. Delivery: 2-3 Days';
      case 'Karachi':
        return 'Est. Delivery: 2-3 Days';
      case 'Peshawar':
        return 'Est. Delivery: 3-4 Days';
      case 'Quetta':
        return 'Est. Delivery: 4-5 Days';
      case 'International (Export)':
        return 'Est. Air Freight: 5-7 Days';
      default:
        return 'Est. Delivery: 2-3 Days';
    }
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-20 py-8">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex text-[#42474f] text-xs font-semibold mb-6">
        <ol className="inline-flex items-center space-x-1 md:space-x-2">
          <li className="inline-flex items-center">
            <button
              onClick={onNavigateCatalog}
              className="hover:text-[#003358] transition-colors"
            >
              Instruments
            </button>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRightIcon className="text-[14px] text-[#727780]" />
              <button
                onClick={onNavigateCatalog}
                className="ml-1 md:ml-2 hover:text-[#003358] transition-colors"
              >
                {product.category}
              </button>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <ChevronRightIcon className="text-[14px] text-[#727780]" />
              <span className="ml-1 md:ml-2 text-[#003358] font-bold truncate max-w-[200px] sm:max-w-md">
                {product.name}
              </span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Main Grid: Gallery + Purchase Column */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Product Gallery (Left lg:col-span-7) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Main Large Image Container */}
          <div className="w-full bg-white border border-[#B0C4DE] rounded-lg overflow-hidden relative aspect-square flex items-center justify-center group shadow-xs">
            <img
              src={activeImage}
              alt={product.name}
              className="object-contain w-full h-full p-8 transition-transform duration-500 group-hover:scale-105"
            />

            {/* Sialkot Trust Marker Badge */}
            <div className="absolute bottom-4 right-4 bg-white/95 border border-[#004A7C] rounded-full flex items-center gap-1.5 px-3 py-1 shadow-xs">
              <Verified className="text-[16px] text-[#003358]" />
              <span className="text-xs font-bold text-[#003358]">Made in Sialkot</span>
            </div>
          </div>

          {/* Thumbnails Strip */}
          {images.length > 1 && (
            <div className="flex overflow-x-auto gap-3 custom-scrollbar pb-2">
              {images.map((thumbUrl, idx) => {
                const isSelected = idx === activeImageIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`flex-shrink-0 w-24 h-24 bg-white rounded-lg overflow-hidden focus:outline-none transition-all p-1.5 ${
                      isSelected
                        ? 'border-2 border-[#003358] shadow-xs'
                        : 'border border-[#B0C4DE] hover:border-[#003358]'
                    }`}
                  >
                    <img
                      src={thumbUrl}
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      className="object-contain w-full h-full"
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Product Details & Purchase Card (Right lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Header Info */}
          <div className="flex flex-col gap-2 border-b border-[#c1c7d0] pb-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#0b1c30] leading-tight">
              {product.name}
            </h1>
            <p className="text-sm text-[#42474f] leading-relaxed">
              {product.description}
            </p>

            <div className="flex flex-wrap items-center gap-2 mt-2">
              {product.isIsoCertified && (
                <span className="inline-flex items-center gap-1 bg-[#eff4ff] text-[#003358] px-2.5 py-1 rounded text-xs font-semibold border border-[#9ccaff]">
                  <ScienceIcon className="text-[16px]" />
                  <span>ISO 13485 Compliant</span>
                </span>
              )}
              {product.isAutoclaveSafe && (
                <span className="inline-flex items-center gap-1 bg-[#eff4ff] text-[#003358] px-2.5 py-1 rounded text-xs font-semibold border border-[#9ccaff]">
                  <LocalHospitalIcon className="text-[16px]" />
                  <span>Autoclave Safe</span>
                </span>
              )}
              <span className="text-xs text-[#727780] font-mono px-2 py-0.5">
                SKU: {product.sku}
              </span>
            </div>
          </div>

          {/* Pricing & Order Card */}
          <div className="bg-white border border-[#B0C4DE] rounded-lg p-6 shadow-xs">
            <div className="mb-4">
              <div className="text-xs font-semibold uppercase text-[#42474f] tracking-wider">
                Unit Price
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-[#003358] tracking-tight mt-0.5">
                PKR {product.price.toLocaleString()}
              </div>
              <div className="text-xs font-semibold text-[#006a6a] mt-1">
                Excl. GST | Minimum Order: {product.minOrderQuantity} Units
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex flex-col gap-1.5 mb-6">
              <label className="text-xs font-bold text-[#0b1c30]">
                Quantity (Minimum {product.minOrderQuantity} Units)
              </label>
              <div className="flex items-center border border-[#B0C4DE] rounded max-w-[160px] bg-white">
                <button
                  onClick={() => setQuantity((q) => Math.max(product.minOrderQuantity, q - 1))}
                  disabled={quantity <= product.minOrderQuantity}
                  className="p-2.5 text-[#42474f] hover:text-[#003358] disabled:opacity-40 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="number"
                  min={product.minOrderQuantity}
                  value={quantity}
                  onChange={(e) => {
                    const val = parseInt(e.target.value) || product.minOrderQuantity;
                    setQuantity(Math.max(product.minOrderQuantity, val));
                  }}
                  className="w-full text-center border-none focus:ring-0 text-sm font-bold text-[#0b1c30] bg-transparent py-2 outline-none"
                />
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-2.5 text-[#42474f] hover:text-[#003358] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <div className="text-xs text-[#42474f] mt-1">
                Total: <span className="font-bold text-[#003358]">PKR {(product.price * quantity).toLocaleString()}</span> (excl. tax)
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleAddToCart}
                className="w-full bg-[#008B8B] hover:bg-[#007070] text-white font-semibold text-sm py-3 rounded transition-colors flex justify-center items-center gap-2 shadow-xs"
              >
                {addedToast ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="text-[18px]" />
                    <span>Add to Procurement Cart</span>
                  </>
                )}
              </button>

              <button
                onClick={() => onOpenQuoteWithProduct(product)}
                className="w-full bg-white border border-[#B0C4DE] hover:bg-[#eff4ff] text-[#00497b] font-semibold text-sm py-3 rounded transition-colors flex justify-center items-center gap-2"
              >
                <RequestQuoteIcon className="text-[18px]" />
                <span>Request Bulk Quote (&gt;500 units)</span>
              </button>
            </div>
          </div>

          {/* Shipping Estimator */}
          <div className="bg-[#f8f9ff] border border-[#c1c7d0] rounded-lg p-4">
            <h3 className="text-sm font-bold text-[#0b1c30] flex items-center gap-2 mb-3">
              <LocalShipping className="text-[#003358] text-[20px]" />
              <span>Shipping Estimator</span>
            </h3>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="flex flex-col gap-1">
                <label className="text-xs text-[#42474f] font-semibold">Destination</label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full border border-[#B0C4DE] rounded text-[#0b1c30] focus:border-[#003358] focus:ring-1 focus:ring-[#003358] py-2 px-2 text-xs bg-white outline-none"
                >
                  <option value="Karachi">Karachi</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Sialkot">Sialkot (HQ)</option>
                  <option value="Peshawar">Peshawar</option>
                  <option value="Quetta">Quetta</option>
                  <option value="International (Export)">International Export</option>
                </select>
              </div>

              <div className="flex flex-col justify-end">
                <div className="bg-white border border-[#B0C4DE] rounded p-2 text-center text-[#003358] font-semibold text-xs truncate">
                  {getEstimatedDelivery(destination)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Specifications (Zebra-striped table) */}
      <div className="mt-14">
        <h2 className="text-xl sm:text-2xl font-bold text-[#0b1c30] border-b border-[#c1c7d0] pb-2 mb-6">
          Technical Specifications
        </h2>

        <div className="bg-white border border-[#B0C4DE] rounded-lg overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Column 1 */}
            <div className="flex flex-col border-b md:border-b-0 md:border-r border-[#B0C4DE]">
              <div className="flex justify-between py-3 px-4 zebra-row border-b border-[#B0C4DE]">
                <span className="text-xs text-[#42474f]">Instrument Type</span>
                <span className="text-xs text-[#0b1c30] font-semibold">
                  {product.specifications.instrumentType}
                </span>
              </div>
              <div className="flex justify-between py-3 px-4 zebra-row border-b border-[#B0C4DE]">
                <span className="text-xs text-[#42474f]">Profile</span>
                <span className="text-xs text-[#0b1c30] font-semibold">
                  {product.specifications.profile}
                </span>
              </div>
              <div className="flex justify-between py-3 px-4 zebra-row border-b border-[#B0C4DE]">
                <span className="text-xs text-[#42474f]">Overall Length</span>
                <span className="text-xs text-[#0b1c30] font-semibold">
                  {product.specifications.overallLength}
                </span>
              </div>
              <div className="flex justify-between py-3 px-4 zebra-row">
                <span className="text-xs text-[#42474f]">Working End</span>
                <span className="text-xs text-[#0b1c30] font-semibold">
                  {product.specifications.workingEnd}
                </span>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col">
              <div className="flex justify-between py-3 px-4 zebra-row border-b border-[#B0C4DE]">
                <span className="text-xs text-[#42474f]">Material</span>
                <span className="text-xs text-[#0b1c30] font-semibold">
                  {product.specifications.material}
                </span>
              </div>
              <div className="flex justify-between py-3 px-4 zebra-row border-b border-[#B0C4DE]">
                <span className="text-xs text-[#42474f]">Finish</span>
                <span className="text-xs text-[#0b1c30] font-semibold">
                  {product.specifications.finish}
                </span>
              </div>
              <div className="flex justify-between py-3 px-4 zebra-row border-b border-[#B0C4DE]">
                <span className="text-xs text-[#42474f]">Usage</span>
                <span className="text-xs text-[#0b1c30] font-semibold">
                  {product.specifications.usage}
                </span>
              </div>
              <div className="flex justify-between py-3 px-4 zebra-row">
                <span className="text-xs text-[#42474f]">Sterilization</span>
                <span className="text-xs text-[#0b1c30] font-semibold">
                  {product.specifications.sterilization}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
