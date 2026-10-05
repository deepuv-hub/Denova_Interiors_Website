import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Target,
  Compass,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { companyInfo, testimonials } from '../data/mock';
import { Helmet } from "react-helmet-async";
import { BUSINESS_REF } from "../data/business";

const iconMap = {
  Target: Target,
  Compass: Compass,
  ShieldCheck: ShieldCheck,
  Award: Award,
};

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('vision');

  const coreValues = [
    {
      icon: Target,
      title: 'Execution Excellence',
      description: 'We prioritize technical precision, durable materials, and immaculate alignments.'
    },
    {
      icon: Compass,
      title: 'Client-Centric Philosophy',
      description: 'Your unique lifestyle maps our blueprint. We coordinate design reviews, material touches, and cost outlines tailored to you.'
    },
    {
      icon: Award,
      title: 'Timeless Aesthetics',
      description: 'Blending contemporary European design structures with rich textures to craft beautiful interior sanctuaries that age gracefully.'
    }
  ];

  const premiumAdvantages = [
    {
      number: "Turnkey",
      title: "Hassle-Free Delivery",
      desc: "Complete project management from floor plans to final deep cleaning."
    },
    {
      number: "Tailored",
      title: "Architectural Layouts",
      desc: "Spacious wardrobes, false ceilings, and smart space planning."
    }
  ];

  const horizontalSteps = [
    {
      num: "01",
      title: "Lifestyle Consultation",
      desc: "We analyze your space parameters, measure layouts, and map your lifestyle requirements and budget."
    },
    {
      num: "02",
      title: "Bespoke Concept Plans",
      desc: "Our architects draft functional spatial mockups and initial theme concepts tailored to your tastes."
    },
    {
      num: "03",
      title: "Photorealistic 3D Renders",
      desc: "Visualize your actual home interior layout with precise light values, textures, and exact dimensions."
    },
    {
      num: "04",
      title: "Material & Studio Curation",
      desc: "Touch, select, and verify plywood grades, high-gloss acrylics, laminates, and fittings at our studio."
    },
    {
      num: "05",
      title: "Fabrication",
      desc: "Custom components are fabricated to the approved design."
    },
    {
      num: "06",
      title: "Turnkey Handover",
      desc: "Supervised site installation, final deep cleanup, and formal reveal of your luxury home."
    }
  ];

  return (
    <>
      <Helmet>
        {/* About Page Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Denova Creations",
            url: "https://denovacreations.com/about",
            about: BUSINESS_REF,
          })}
        </script>
      </Helmet>

      <div className="bg-[#FAF8F5] text-stone-800 antialiased">

        {/* 1. PREMIUM HERO SECTION */}
        <section className="relative h-[65vh] flex items-center bg-[#071F20] overflow-hidden select-none">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero2.webp"
              alt="Premium luxury home interior by Denova Creations"
              className="w-full h-full object-cover scale-102 opacity-95 transition-transform duration-1000"
            />
            {/* Elegant overlay to highlight typography and text contrast */}
            <div className="absolute inset-0 bg-[#051819]/80 backdrop-blur-[1px]"></div>
          </div>

          <div className="relative z-10 w-full container-custom mt-8">
            <div className="max-w-3xl text-left space-y-5 animate-fade-in-up">
              <span className="text-[#E8D8C4] font-bold tracking-widest uppercase text-xs block">
                Who We Are
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-serif tracking-tight">
                Crafting Luxury Spaces with <span className="text-[#E8D8C4]">Purpose & Passion.</span>
              </h1>
              
              <p className="text-stone-300 text-sm md:text-base leading-relaxed max-w-xl">
                Denova Creations is a turnkey home design studio in Bengaluru. We bring European aesthetics and authentic styling to create timeless living sanctuaries.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="bg-[#E8D8C4] hover:bg-white text-[#0F3D3E] font-bold px-6 py-5 rounded-lg text-xs md:text-sm uppercase tracking-wider transition-all duration-300 shadow-md flex items-center gap-2 hover:scale-[1.02]">
                    <span>Book Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button className="bg-transparent hover:bg-white/10 border border-white/30 text-white font-bold px-6 py-5 rounded-lg text-xs md:text-sm uppercase tracking-wider transition-all duration-300">
                    Explore Projects
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. BRAND STORY SECTION (EDITORIAL DUAL SECTION) */}
        <section className="py-20 md:py-28 bg-white relative overflow-hidden">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column - Image with luxurious accent boarder offsets */}
              <div className="lg:col-span-6 relative group animate-slide-in-left">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border-4 border-white z-10">
                  <img
                    src="/images/living2.webp"
                    alt="Timeless architectural living space by Denova Creations"
                    className="w-full h-full object-cover group-hover:scale-105 duration-700 transition-transform"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-stone-950/10"></div>
                </div>
                {/* Visual architectural offset borders */}
                <div className="absolute -bottom-4 -left-4 w-48 h-48 border-l-4 border-b-4 border-[#E8D8C4] rounded-bl-3xl z-0"></div>
                <div className="absolute -top-4 -right-4 w-24 h-24 border-r-4 border-t-4 border-[#0F3D3E]/30 rounded-tr-3xl z-0"></div>
              </div>

              {/* Right Column - Concise Brand Story */}
              <div className="lg:col-span-6 text-left space-y-6 animate-slide-in-right">
                <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                  A Legacy of Distinction
                </span>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-[#0F3D3E] leading-tight tracking-tight">
                  Design that speaks your language. Precision that lasts.
                </h2>

                <div className="space-y-4 text-stone-600 text-xs md:text-sm leading-relaxed">
                  <p>
                    At Denova Creations, we believe that an interior space is much more than curated coordinates of wood and fabric. It is a three-dimensional representation of your life story, your values, and your daily rituals.
                  </p>
                  <p>
                    Established in the heart of Bengaluru, we have dedicated ourselves to bridging the gap between imaginative, high-end designs and practical execution realities.
                  </p>
                  
                  {/* Subtle Accent Highlight Quote */}
                  <blockquote className="border-l-2 border-[#E8D8C4] pl-4 italic text-stone-900 font-medium py-1.5 my-3 text-xs md:text-sm">
                    "Every layout should express visual balance, clean symmetry, and durable material harmony. We don't build interiors for immediate impressions, we build them for lifetimes."
                  </blockquote>

                  <p>
                    Whether fabricating a high-gloss modular kitchen featuring intelligent space storage or styling a serene personal sanctuary bedroom, our philosophy remains client-first.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. VISION & MISSION SECTION (MINIMAL LUXURY SPLIT TAB) */}
        <section className="py-20 md:py-24 bg-[#FAF8F5] border-t border-stone-100 relative">
          <div className="container-custom">
            
            {/* Selection Tabs */}
            <div className="max-w-2xl mx-auto text-center mb-12 space-y-4">
              <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                Our Alignment
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0F3D3E] tracking-tight">
                Architectural Core Values
              </h2>
              
              <div className="flex justify-center gap-2 pt-4">
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                    activeTab === 'vision'
                      ? 'bg-[#0F3D3E] border-[#0F3D3E] text-white shadow-md'
                      : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  Our Vision
                </button>
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                    activeTab === 'mission'
                      ? 'bg-[#0F3D3E] border-[#0F3D3E] text-white shadow-md'
                      : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  Our Mission
                </button>
              </div>
            </div>

            {/* Tab Contents */}
            <div className="max-w-4xl mx-auto mb-16">
              {activeTab === 'vision' ? (
                <div className="bg-white p-8 md:p-12 rounded-3xl border border-stone-150 shadow-[0_15px_40px_rgba(0,0,0,0.02)] text-center space-y-4 animate-fade-in">
                  <div className="w-14 h-14 bg-[#FAF7F2] text-[#0F3D3E] rounded-full flex items-center justify-center mx-auto mb-2 border border-[#E8D8C4]/35">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#0F3D3E] font-serif">Elevating Daily Experiences</h3>
                  <p className="text-stone-600 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto">
                    To redefine how residential spaces are curated through timeless luxury interior architecture. We visualize homes that capture perfect symmetry, balanced functional layouts, and aesthetic excellence that inspires elevated living standards.
                  </p>
                </div>
              ) : (
                <div className="bg-white p-8 md:p-12 rounded-3xl border border-stone-150 shadow-[0_15px_40px_rgba(0,0,0,0.02)] text-center space-y-4 animate-fade-in">
                  <div className="w-14 h-14 bg-[#FAF7F2] text-[#0F3D3E] rounded-full flex items-center justify-center mx-auto mb-2 border border-[#E8D8C4]/35">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#0F3D3E] font-serif">Delivery with Complete Honesty</h3>
                  <p className="text-stone-600 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto">
                    To deliver stress-free, turnkey home design journeys with authentic brand fittings.
                  </p>
                </div>
              )}
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
              {coreValues.map((value, idx) => {
                const IconComponent = value.icon;
                return (
                  <div key={idx} className="flex gap-5 p-6 bg-white rounded-3xl border border-stone-100 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:border-[#E8D8C4] transition-colors duration-300">
                    <div className="w-12 h-12 bg-[#FAF7F2] text-[#0F3D3E] rounded-xl flex items-center justify-center flex-shrink-0 border border-[#E8D8C4]/25">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-base md:text-lg font-bold font-serif text-[#0F3D3E]">
                        {value.title}
                      </h4>
                      <p className="text-xs text-stone-500 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 4. WHY CHOOSE DENOVA CREATIONS (LUXURY BADGE HIGHLIGHTS) */}
        <section className="py-20 md:py-24 bg-white border-t border-stone-150">
          <div className="container-custom">
            
            <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
              <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                Spacious Spacing
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F3D3E] font-serif tracking-tight leading-none">
                Why Choose Denova?
              </h2>
              <p className="text-stone-500 text-xs md:text-sm max-w-lg mx-auto">
                We combine creative luxury styling with turnkey project management to provide a premium design experience.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {premiumAdvantages.map((adv, idx) => (
                <div 
                  key={idx} 
                  className="group relative bg-[#FAF8F5] p-8 rounded-3xl border border-stone-100 hover:border-[#E8D8C4] hover:bg-white hover:shadow-[0_20px_45px_rgba(15,61,62,0.03)] hover:-translate-y-1 transition-all duration-500 text-left flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Visual Badge Indicator */}
                    <div className="text-2xl md:text-3xl font-serif font-bold text-[#E8D8C4] tracking-tight group-hover:text-[#0F3D3E] transition-colors duration-500">
                      {adv.number}
                    </div>
                    
                    <h3 className="text-base md:text-lg font-bold font-serif text-[#0F3D3E] group-hover:text-stone-900 transition-colors">
                      {adv.title}
                    </h3>
                    
                    <p className="text-xs text-stone-500 leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>
                  
                  {/* Subtle active underline */}
                  <div className="w-8 h-0.5 bg-stone-200 group-hover:w-full group-hover:bg-[#E8D8C4] transition-all duration-500 mt-6"></div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 5. OUR DESIGN PROCESS (HORIZONTAL STEP-BY-STEP PROGRESS) */}
        <section className="py-20 md:py-24 bg-[#FAF8F5] border-t border-stone-100 select-none">
          <div className="container-custom">
            
            <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
              <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                Our Methodology
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F3D3E] font-serif leading-tight">
                Our Design Journey
              </h2>
              <p className="text-stone-500 text-xs md:text-sm">
                A simple, elegant, step-by-step interior design execution path.
              </p>
            </div>

            {/* Horizontal Timeline Process */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
              {horizontalSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col text-left space-y-3.5 group relative">
                  
                  {/* Number Badge */}
                  <div className="text-4xl md:text-5xl font-serif font-bold text-[#E8D8C4]/60 group-hover:text-[#0F3D3E] transition-colors duration-300 leading-none">
                    {step.num}
                  </div>
                  
                  <h3 className="text-sm md:text-base font-bold text-[#0F3D3E] font-serif tracking-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-[11px] text-stone-500 leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Horizontal dotted connector on larger screens */}
                  {idx < 5 && (
                    <div className="hidden lg:block absolute top-5 left-[80%] w-full h-[1px] border-t border-dashed border-stone-300 -z-10 group-hover:border-[#E8D8C4] transition-colors duration-500"></div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 6. STUDIO PHILOSOPHY SECTION (EDITORIAL-STYLE PANEL) */}
        <section className="py-20 md:py-28 bg-white border-t border-stone-150 relative">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left - Large Luxury Quote */}
              <div className="lg:col-span-5 text-left space-y-5">
                <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                  Studio Focus
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#0F3D3E] leading-tight">
                  "Beauty emerges when creative aesthetics find their perfect functional balance."
                </h3>
                <p className="text-xs text-[#0F3D3E] font-bold tracking-widest uppercase">
                  — The Denova Studio Philosophy
                </p>
              </div>

              {/* Right - Philosophy Detail */}
              <div className="lg:col-span-7 text-left space-y-6 text-stone-600 text-xs md:text-sm leading-relaxed border-l-2 border-[#FAF7F2] lg:pl-10">
                <p>
                  Our creative core is centered around spatial intelligence. We analyze spatial volumes, natural interior lighting directions, and physical foot traffic flows before proposing layouts.
                </p>
                <p>
                  Every material finish, from high-gloss cabinetry to subtle textured accent paneling, is hand-selected in design meetings at our Bengaluru studio.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 7. GLASSMORPHIC TRUST PANEL / REVIEWS */}
        <section className="py-20 bg-stone-50 border-t border-stone-100">
          <div className="container-custom">
            
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-[0_15px_40px_rgba(15,61,62,0.02)] border border-stone-200/40 text-left flex flex-col md:flex-row gap-8 items-center">
              
              {/* Featured review */}
              <div className="flex-grow space-y-4">
                <blockquote className="text-xs md:text-sm text-stone-600 italic leading-relaxed font-medium">
                  "Working with Denova Creations was a flawless experience. They completely managed our apartment interiors turnkey while keeping us updated on GTM timeline tracking. The final finishing details of our modular kitchen and wood fluting look extremely premium!"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div>
                    <cite className="not-italic text-xs font-bold text-[#0F3D3E] block">
                      Aravind S.
                    </cite>
                    <span className="text-[10px] text-stone-500 font-semibold tracking-wide">
                      Premium 3BHK Resident • Whitefield, Bengaluru
                    </span>
                  </div>
                  
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 8. BRAND CLOSING CTA BANNER */}
        <section className="py-20 md:py-24 bg-gradient-to-b from-[#0F3D3E] to-[#0A2526] text-white relative z-10 select-none">
          <div className="container-custom text-center max-w-3xl mx-auto space-y-6">
            <span className="text-[#E8D8C4] font-bold tracking-widest uppercase text-xs block">
              Start Redesigning Today
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight tracking-tight">
              Let's Design a Space That Reflects Your Lifestyle.
            </h2>
            
            <p className="text-stone-300 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
              Coordinate a private design consultation session at our Bengaluru studio or book a site survey visit with our experts today.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-[#E8D8C4] hover:bg-white text-[#0F3D3E] font-bold px-8 py-6 rounded-lg text-xs md:text-sm uppercase tracking-wider shadow-lg transition-transform duration-300 hover:scale-[1.02] flex items-center gap-2">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href={`tel:${companyInfo.primaryPhone.replace(/\s+/g, '')}`}>
                <Button className="bg-transparent hover:bg-white/10 border border-white/20 text-white font-semibold px-8 py-6 rounded-lg text-xs md:text-sm uppercase tracking-wider transition-all duration-300">
                  Call {companyInfo.primaryPhone}
                </Button>
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default AboutPage;
