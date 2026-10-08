import React from 'react';
import { Link } from 'react-router-dom';
import { FULL_HOME_RATE_RANGE, FULL_HOME_RATE_TEXT } from '../../data/pricing';

// Only owner-confirmed facts here (no ratings, counts, warranties or timelines).
const brandStats = [
  { number: FULL_HOME_RATE_RANGE, label: "Per sq.ft.", desc: "Full-home interiors, indicative range" },
  { number: "Carpet Area", label: "Pricing Basis", desc: "Full-home pricing is based on carpet area" },
  { number: "Bengaluru", label: "Service Area", desc: "Interior design for homes in Bengaluru" }
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 md:py-24 bg-[#0A2526] text-white relative z-10">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
          <span className="text-[#E8D8C4] font-bold tracking-widest uppercase text-xs block">
            Clear Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-serif leading-tight">
            How Full-Home Pricing Works
          </h2>
          <p className="text-stone-400 text-xs md:text-sm leading-relaxed max-w-lg mx-auto">
            Full-home interiors are priced at {FULL_HOME_RATE_TEXT}, based on carpet area.{" "}
            <Link to="/estimate" className="text-[#E8D8C4] underline">Get an indicative estimate</Link>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
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
