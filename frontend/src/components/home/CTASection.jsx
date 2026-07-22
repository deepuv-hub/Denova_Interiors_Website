import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const CTASection = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-[#0F3D3E] to-[#0A2526] text-white relative z-10">
      <div className="container-custom text-center max-w-3xl mx-auto space-y-6">
        <span className="text-[#E8D8C4] font-bold tracking-widest uppercase text-xs block">
          Start Designing Today
        </span>
        <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
          Ready to create your dream residential space?
        </h2>
        <p className="text-stone-300 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
          Schedule a private design consultation session at our Bengaluru studio or book a site visit with our experts today.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link to="/contact">
            <Button className="bg-[#E8D8C4] hover:bg-white text-[#0F3D3E] font-bold px-8 py-6 rounded-lg text-xs md:text-sm uppercase tracking-wider shadow-lg transition-transform duration-300 hover:scale-[1.02]">
              Book Free Consultation
            </Button>
          </Link>
          <Link to="/estimate">
            <Button className="bg-transparent hover:bg-white/10 border border-white/20 text-white font-semibold px-8 py-6 rounded-lg text-xs md:text-sm uppercase tracking-wider transition-all duration-300">
              Calculate Cost Online
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
