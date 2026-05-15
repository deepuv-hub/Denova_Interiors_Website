import React from "react";
import { Link } from "react-router-dom";

const InternalLinksCTA = () => {
  return (
    <section className="bg-[#1F1F1F] py-16">
      <div className="container-custom text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Transform Your Space with Denova Interiors
        </h2>

        <p className="text-white/70 max-w-2xl mx-auto mb-8">
          Explore our interior design services, projects and get a personalized estimate for your home interiors in Bangalore.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/services">
            <button className="bg-[#C8A35F] hover:bg-[#b8924d] transition-colors px-8 py-4 rounded-sm text-[#1F1F1F] font-semibold">
              Our Services
            </button>
          </Link>

          <Link to="/projects">
            <button className="border border-white/20 hover:bg-white hover:text-[#1F1F1F] transition-colors px-8 py-4 rounded-sm text-white font-semibold">
              View Projects
            </button>
          </Link>

          <Link to="/estimate">
            <button className="border border-white/20 hover:bg-white hover:text-[#1F1F1F] transition-colors px-8 py-4 rounded-sm text-white font-semibold">
              Get Estimate
            </button>
          </Link>

          <Link to="/contact">
            <button className="border border-white/20 hover:bg-white hover:text-[#1F1F1F] transition-colors px-8 py-4 rounded-sm text-white font-semibold">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InternalLinksCTA;
