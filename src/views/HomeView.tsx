import React from 'react';
import { ShoppingCart, Verified, FactCheck, WorkspacePremium, LocalShipping, Chat } from '../components/Icons';
import { Product } from '../types';

interface HomeViewProps {
  onNavigateCatalog: (disciplineFilter?: string) => void;
  onOpenQuote: () => void;
  onOpenProduct: (productId: string) => void;
  featuredProducts: Product[];
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigateCatalog,
  onOpenQuote,
  onOpenProduct,
}) => {
  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent("Hello SurSite Surgical team, I would like to place an order / request a surgical procurement price list for our facility.");
    window.open(`https://wa.me/923000000000?text=${text}`, '_blank');
  };

  return (
    <div className="w-full pb-16">
      {/* Hero Section */}
      <section className="relative w-full min-h-[520px] md:min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden border-b border-[#c1c7d0] bg-white">
        {/* Background Image with clinical overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center opacity-15"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDT8QUjRcW1xkUZHbFItSs1pxN-dPutYetHJmxBKbnvjDkvD_PuQ5RCrF7pXz_f-mlZk8tjQofV_w5onSjcSd4UA5Y28B4H_R93tpgD8vyojYf6YxjgIvjnRp9cZtg-_Q7UPphwIuVnFSy7fsqArrlcrpnDfEUCHJPHIF_o_NcEN6wpxgbSg9Pucle976HjFzTWlAZhb3PkM2bi6bzH40FWYoi85jTQrcHTrl8KVMWW0P7uJCpYH-Q')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-20 py-12 md:py-20 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-3/4 flex flex-col items-start gap-4">
            <div className="inline-flex items-center gap-2 bg-[#eff4ff] border border-[#c1c7d0] rounded px-3 py-1 text-[#42474f] text-xs font-semibold">
              <Verified className="text-[16px] text-[#003358]" />
              <span>ISO 13485 Certified</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1c30] tracking-tight leading-[1.15]">
              Precision in Every Cut.<br />
              Pakistan&apos;s Finest Surgical Instruments.
            </h1>

            <p className="text-base sm:text-lg text-[#42474f] max-w-2xl mt-1 leading-relaxed">
              Direct from the skilled artisans of Sialkot to operating rooms worldwide. We combine heritage craftsmanship with uncompromising medical-grade standards.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <button
                onClick={() => onNavigateCatalog()}
                className="bg-[#003358] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded hover:bg-[#004a7c] transition-colors flex items-center gap-2 shadow-xs"
              >
                <ShoppingCart className="text-[18px]" />
                <span>Browse Catalog</span>
              </button>
              <button
                onClick={onOpenQuote}
                className="bg-white text-[#003358] border border-[#003358] text-xs sm:text-sm font-semibold px-6 py-3 rounded hover:bg-[#eff4ff] transition-colors flex items-center gap-2"
              >
                <span>Request Bulk Quote</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Instruments (Bento Grid) */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-20 py-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1c30]">Featured Instruments</h2>
            <p className="text-sm text-[#42474f] mt-1">Precision tools sorted by discipline.</p>
          </div>
          <button
            onClick={() => onNavigateCatalog()}
            className="text-xs sm:text-sm text-[#003358] font-semibold hover:underline"
          >
            View all 44 instruments →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Card: General Surgery */}
          <div
            onClick={() => onNavigateCatalog('General Surgery')}
            className="md:col-span-2 group relative overflow-hidden bg-[#e5eeff] border border-[#c1c7d0] rounded-lg p-6 min-h-[300px] hover:border-[#004a7c] transition-all cursor-pointer flex flex-col justify-end shadow-xs hover:shadow-md"
          >
            <div className="absolute inset-0 z-0 opacity-25 group-hover:opacity-45 transition-opacity duration-300">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDfX2XYZKRTpKV5f8Lr2JX1LjIrU5nVwHW5nqGRtdZ2zum-dGdyv7teYzsFbZl-1elf9kZDXffIxULHUPd2_q5N342WYR91GAw1iR4MhCHDCKkaFr8n9HogpPzEcYSSgsfSxKr964aR4HsOEdatWQ62Bjrv9Ht7tBjlcQuVPUX7b2ConCytSTPJKBcKPYAjP5Q9IG35w9ODVnEGGgmW-KbMdptSgIpX85XVmxm1pU4GjdI3K_mFjbg')`,
                }}
              />
            </div>
            <div className="relative z-10 bg-white/95 p-4 border border-[#c1c7d0] rounded self-start shadow-xs">
              <h3 className="text-xl font-bold text-[#003358]">General Surgery</h3>
              <p className="text-xs sm:text-sm text-[#42474f] mt-1">Scalpels, Forceps, Retractors</p>
            </div>
          </div>

          {/* Small Cards Stack: Dental & Orthopedic */}
          <div className="flex flex-col gap-6">
            {/* Dental */}
            <div
              onClick={() => onNavigateCatalog('Dental')}
              className="group relative overflow-hidden bg-[#e5eeff] border border-[#c1c7d0] rounded-lg p-6 flex-1 hover:border-[#004a7c] transition-all cursor-pointer flex flex-col justify-end min-h-[140px] shadow-xs hover:shadow-md"
            >
              <div className="absolute inset-0 z-0 opacity-25 group-hover:opacity-45 transition-opacity duration-300">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBx0sZ6HJoiMDeokKFattaE39D9mLfbHuttx1oj0pb5bj4ApZXTXs2EWVnAU2nbiVZIluL4slQ40_ReKBQ17yJPFzpohKCUYwnH3g6zR99vcR6Xzuk3Ux5PwS_DMugX00xzh6mTj6gbJJ_jNgYtB6-so-D5wJ1BxklF-E6i19bYItk3oZIq2R_LYKtIM_pUR1gmQBgNFyO4fPLyoHecT2LJbJOWKJPz3AfU9TLz8bP3zbjy21cwOKM')`,
                  }}
                />
              </div>
              <div className="relative z-10 bg-white/95 p-3 border border-[#c1c7d0] rounded self-start shadow-xs">
                <h3 className="text-base font-bold text-[#003358]">Dental</h3>
              </div>
            </div>

            {/* Orthopedic */}
            <div
              onClick={() => onNavigateCatalog('Orthopedic')}
              className="group relative overflow-hidden bg-[#e5eeff] border border-[#c1c7d0] rounded-lg p-6 flex-1 hover:border-[#004a7c] transition-all cursor-pointer flex flex-col justify-end min-h-[140px] shadow-xs hover:shadow-md"
            >
              <div className="absolute inset-0 z-0 opacity-25 group-hover:opacity-45 transition-opacity duration-300">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB3DMhKM2rdcShQWBmONuYVegBrXzzaVFWWacnDkdB1SEgrxy8szT1yfCjPRjYWMD_nyD9PRlDJ8kkE3Wn8rYSGxWfKkjk5xd157b--enRFEYRCBz4t-wep25uAOWjp81iJmXy4sQzwVcsRbTk8f7wyQovDHKdwLP2KrNRJifAeu7msTDEPDKZWF_CHKkfdzDZT4WhxqYPWMsTWgwChuEnDPP8Os-_oA3iz0W05NGlXY1RXWRdzrcQ')`,
                  }}
                />
              </div>
              <div className="relative z-10 bg-white/95 p-3 border border-[#c1c7d0] rounded self-start shadow-xs">
                <h3 className="text-base font-bold text-[#003358]">Orthopedic</h3>
              </div>
            </div>
          </div>

          {/* Full Width Bottom Card: Ophthalmic */}
          <div
            onClick={() => onNavigateCatalog('Ophthalmic')}
            className="md:col-span-3 group relative overflow-hidden bg-[#e5eeff] border border-[#c1c7d0] rounded-lg p-6 hover:border-[#004a7c] transition-all cursor-pointer flex flex-col justify-end min-h-[180px] shadow-xs hover:shadow-md"
          >
            <div className="absolute inset-0 z-0 opacity-25 group-hover:opacity-45 transition-opacity duration-300">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB3qOb2ghByzaiPNsF7Ny2LjwZhDQY51u4fXoeuy2dGWl4t4DnBe7Ee1R1ML79sRvq74HZczfKcC69TP2Zp6spmC6xwVCzuqbbCiyb3V_uSSCJyJw4oKuxq0svVHV8oNq5diesRdb2BIN7Wz7xt71UzHU5yhEcBYkojmTrxyIjbuW6qYunyXnS6MhaGIVEtZTrFSLZyQmL5ZIvatvnQ66tKU87bZ19cFh8tXnRRPiAgp6rWhImRxns')`,
                }}
              />
            </div>
            <div className="relative z-10 bg-white/95 p-4 border border-[#c1c7d0] rounded self-start shadow-xs">
              <h3 className="text-xl font-bold text-[#003358]">Ophthalmic</h3>
              <p className="text-xs sm:text-sm text-[#42474f] mt-1">Micro-instruments for delicate procedures</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Legacy Section (Quality Assurance) */}
      <section className="w-full bg-[#eff4ff] border-y border-[#c1c7d0] py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold text-[#003358] uppercase tracking-wider">Quality Assurance</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1c30]">Sialkot&apos;s Legacy of Excellence</h2>
            <p className="text-sm sm:text-base text-[#42474f] leading-relaxed">
              Every SurSite instrument is forged in Sialkot, a city globally renowned for centuries of metalworking mastery. We combine this traditional craftsmanship with modern metallurgical science to produce instruments of unyielding quality.
            </p>

            <div className="flex flex-col gap-3 mt-2">
              {/* Data row 1 */}
              <div className="flex items-center gap-4 border-b border-[#c1c7d0] pb-3">
                <Verified className="text-[#003358] text-[24px]" />
                <div className="flex-1">
                  <span className="text-xs font-semibold text-[#0b1c30] block">Material Grade</span>
                  <span className="text-sm text-[#42474f]">100% Medical Grade Stainless Steel</span>
                </div>
              </div>

              {/* Data row 2 */}
              <div className="flex items-center gap-4 border-b border-[#c1c7d0] pb-3">
                <FactCheck className="text-[#003358] text-[24px]" />
                <div className="flex-1">
                  <span className="text-xs font-semibold text-[#0b1c30] block">Certification</span>
                  <span className="text-sm text-[#42474f]">ISO 13485:2016 Compliant Facility</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Trust Marker with Blueprint Grid */}
          <div className="relative flex justify-center items-center bg-[#f8f9ff] p-10 border border-[#B0C4DE] rounded-lg min-h-[260px] overflow-hidden">
            {/* Sialkot Badge */}
            <div className="w-48 h-48 rounded-full border-2 border-[#004a7c] flex flex-col items-center justify-center p-4 text-center bg-white shadow-sm z-10 relative">
              <WorkspacePremium className="text-[#003358] text-[40px] mb-1" />
              <span className="text-lg font-bold text-[#003358] block leading-tight">
                Made in<br />Sialkot
              </span>
              <span className="text-xs text-[#42474f] font-semibold mt-1">Since 1995</span>
            </div>

            {/* Blueprint Grid background */}
            <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Seamless Procurement Across Pakistan */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-20 py-14 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-[#0b1c30] mb-2">
          Seamless Procurement Across Pakistan
        </h2>
        <p className="text-sm sm:text-base text-[#42474f] mb-8 max-w-2xl mx-auto">
          We&apos;ve localized our distribution to ensure hospitals and clinics receive their tools swiftly and securely.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            onClick={handleWhatsAppOrder}
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded transition-colors flex items-center justify-center gap-2 shadow-xs"
          >
            <Chat className="text-[20px]" />
            <span>Order via WhatsApp</span>
          </button>

          <div className="flex items-center gap-2 text-[#42474f] text-xs sm:text-sm bg-[#e5eeff] py-3 px-4 rounded border border-[#c1c7d0]">
            <LocalShipping className="text-[#003358] text-[20px]" />
            <span>Cash on Delivery Available Nationwide</span>
          </div>
        </div>
      </section>
    </div>
  );
};
