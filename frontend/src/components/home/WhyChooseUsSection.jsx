import React from 'react';

const brandStats = [
  { number: "150+", label: "Completed Luxury Homes", desc: "Delivered strictly within timeline" },
  { number: "10-Year", label: "Material Warranty", desc: "Assuring authentic German hardware" },
  { number: "100%", label: "Transparent Estimates", desc: "Zero hidden costs, zero surprises" },
  { number: "45-Day", label: "On-Time Handover", desc: "Or we pay your rent penalty" }
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 md:py-24 bg-[#0A2526] text-white relative z-10">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
          <span className="text-[#E8D8C4] font-bold tracking-widest uppercase text-xs block">
            The Denova Advantage
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-serif leading-tight">
            Architectural Standards
          </h2>
          <p className="text-stone-400 text-xs md:text-sm leading-relaxed max-w-lg mx-auto">
            We implement structural guidelines, strict material audits, and direct site supervision to deliver flawless luxury homes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {brandStats.map((stat, idx) => (
            <div key={idx} className="flex flex-col text-center items-center space-y-3 p-6 bg-white/5 rounded-3xl border border-white/5 shadow-md">
              <div className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#E8D8C4] tracking-tight">
                {stat.number}
              </div>
              <div className="font-bold text-xs uppercase tracking-wide text-white">
                {stat.label}
              </div>
              <div className="text-stone-400 text-xs leading-relaxed">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
