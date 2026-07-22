import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const BrandIntroSection = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Brand Statement */}
          <div className="lg:col-span-7 text-left space-y-6">
            <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
              Bespoke Architectural Craftsmanship
            </span>

            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#0F3D3E] leading-[1.15] tracking-tight">
              We shape environments that embody luxury, soul, and utility.
            </h2>

            <p className="text-stone-600 text-sm md:text-base leading-relaxed max-w-2xl">
              At Denova Creations, we believe your residence should represent a sanctuary curated around your individual story. As Bengaluru's premier turnkey home interior studio, we blend high-end custom furniture, German precision edge-banding, and exquisite architectural layouts to deliver spaces of absolute distinction.
            </p>

            <div className="pt-4 flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2 text-stone-700 font-bold text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#0F3D3E]" />
                <span>German Factory Finish</span>
              </div>
              <div className="flex items-center gap-2 text-stone-700 font-bold text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#0F3D3E]" />
                <span>No Sub-Contracting</span>
              </div>
              <div className="flex items-center gap-2 text-stone-700 font-bold text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#0F3D3E]" />
                <span>10-Year Solid Warranty</span>
              </div>
            </div>
          </div>

          {/* Right Side Visual Block */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border-4 border-white">
              <img
                src="/images/hero2.webp"
                alt="Denova Creations design studio"
                className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-stone-950/20"></div>
            </div>
            {/* Decorative border box */}
            <div className="absolute -bottom-4 -left-4 w-40 h-40 border-l-4 border-b-4 border-[#E8D8C4] rounded-bl-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIntroSection;
