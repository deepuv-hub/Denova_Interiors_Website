import React from "react";
import { Link } from "react-router-dom";

const InternalLinksCTA = () => {
  return (
    <section className="bg-gradient-to-b from-[#0F3D3E] to-[#0A2526] py-10 md:py-12 border-b border-white/5 relative z-20">
      <div className="container-custom text-center">
        <h2
          className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Transform Your Space with Denova Creations
        </h2>

        <p className="text-stone-300 text-xs md:text-sm max-w-xl mx-auto mb-6 leading-relaxed">
          Explore our bespoke interior design services, view our completed luxury homes, or calculate a personalized budget estimate online.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/services">
            <button className="bg-[#E8D8C4] hover:bg-[#dfcbb3] transition-all duration-300 px-5 py-2.5 rounded-lg text-[#0F3D3E] font-bold text-xs md:text-sm tracking-wide shadow-sm hover:scale-[1.02]">
              Our Services
            </button>
          </Link>

          <Link to="/projects">
            <button className="border border-[#E8D8C4]/20 hover:bg-white/5 hover:border-[#E8D8C4]/40 transition-all duration-300 px-5 py-2.5 rounded-lg text-[#E8D8C4] font-medium text-xs md:text-sm tracking-wide hover:scale-[1.02]">
              View Projects
            </button>
          </Link>

          <Link to="/estimate">
            <button className="border border-[#E8D8C4]/20 hover:bg-white/5 hover:border-[#E8D8C4]/40 transition-all duration-300 px-5 py-2.5 rounded-lg text-[#E8D8C4] font-medium text-xs md:text-sm tracking-wide hover:scale-[1.02]">
              Get Estimate
            </button>
          </Link>

          <Link to="/contact">
            <button className="border border-[#E8D8C4]/20 hover:bg-white/5 hover:border-[#E8D8C4]/40 transition-all duration-300 px-5 py-2.5 rounded-lg text-[#E8D8C4] font-medium text-xs md:text-sm tracking-wide hover:scale-[1.02]">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InternalLinksCTA;
