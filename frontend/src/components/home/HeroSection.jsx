import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import { Button } from '../ui/button';

const heroSlides = [
  {
    image: "/images/hero2.webp",
    heading: "Crafting Bespoke Luxury Interiors in Bangalore",
    subheading: "Experience complete home interiors tailored to your lifestyle, from concept to completion."
  },
  {
    image: "/images/landingpagehero.webp",
    heading: "Crafted Spaces. Elevated Living.",
    subheading: "Bespoke home interiors with modular systems and turnkey execution."
  },
  {
    image: "/images/kitchen1.webp",
    heading: "Luxury Modular Kitchens",
    subheading: "Modular kitchens with high-gloss acrylic finishes and intelligent accessories."
  },
  {
    image: "/images/bedroom3.webp",
    heading: "Sophisticated Bedrooms",
    subheading: "Elegantly styled personal sanctuaries blending custom floor-to-ceiling wardrobes, bespoke lighting, and premium material accents."
  },
  {
    image: "/images/living2.webp",
    heading: "Architectural Living Rooms",
    subheading: "Exquisite public spaces detailed with premium wood fluting, custom Italian marble backdrops, and balanced luxury styling."
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto Hero Slide Transitions
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(slideTimer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <section className="relative h-screen flex items-center bg-[#071F20] overflow-hidden">
      {/* Images slideshow with smooth Ken Burns zoom & fade */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, idx) => (
          <div 
            key={idx} 
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
              currentSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`Luxury home interior design by Denova Creations - ${slide.heading}`}
              className={`w-full h-full object-cover transition-transform ease-out ${
                currentSlide === idx ? 'scale-105 opacity-100' : 'scale-100 opacity-0'
              }`}
              style={{ transitionDuration: '6500ms' }}
              loading={idx === 0 ? "eager" : "lazy"}
            />
            {/* Premium left-to-right gradient to keep text readable while showcasing sharp details on the right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#051819]/95 via-[#051819]/65 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Slider Content Overlay */}
      <div className="relative z-20 w-full container-custom mt-16 md:mt-24 select-none">
        <div className="max-w-3xl text-left">
          {/* Stable page heading; the rotating slide text below is decorative */}
          <h1 className="text-[#E8D8C4] text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
            Interior Designers in Bangalore
          </h1>

          {/* Dynamic slide heading */}
          <p className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] font-serif tracking-tight min-h-[110px] md:min-h-auto">
            {heroSlides[currentSlide].heading}
          </p>

          {/* Dynamic slide description */}
          <p className="text-base md:text-lg text-stone-300 mb-8 leading-relaxed max-w-2xl transition-all duration-500">
            {heroSlides[currentSlide].subheading}
          </p>

          {/* Trust highlights row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 pt-4 border-t border-white/15">
            <div className="flex items-center gap-2.5 text-white/90 text-xs md:text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#E8D8C4] shrink-0" />
              <span>Free Design Consultation</span>
            </div>
            <div className="flex items-center gap-2.5 text-white/90 text-xs md:text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#E8D8C4] shrink-0" />
              <span>Transparent Pricing</span>
            </div>
            <div className="flex items-center gap-2.5 text-white/90 text-xs md:text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#E8D8C4] shrink-0" />
              <span>Premium Materials</span>
            </div>
          </div>

          {/* Luxury Styled CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button className="bg-[#C8A35F] hover:bg-[#b89555] text-white font-bold px-6 py-4 rounded-sm text-xs md:text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:scale-[1.02] flex items-center gap-2">
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>

            <Link to="/projects">
              <Button className="bg-transparent hover:bg-white/10 border border-white/30 text-white font-bold px-6 py-4 rounded-sm text-xs md:text-sm uppercase tracking-wider transition-all duration-300 shadow-md">
                Explore Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Slider Controls - Arrow Keys */}
      <button 
        onClick={handlePrevSlide} 
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 hidden md:flex w-12 h-12 rounded-full border border-white/20 hover:border-white/50 hover:bg-white/10 flex items-center justify-center text-white transition-all duration-300"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={handleNextSlide} 
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 hidden md:flex w-12 h-12 rounded-full border border-white/20 hover:border-white/50 hover:bg-white/10 flex items-center justify-center text-white transition-all duration-300"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slider Indicators - Dots */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-3">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              currentSlide === idx ? 'w-8 bg-[#E8D8C4]' : 'w-2 bg-white/40'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
