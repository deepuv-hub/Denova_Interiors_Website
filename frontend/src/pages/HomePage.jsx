import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle2, Home, Building2, Castle, Briefcase, Wrench, Key, ChevronRight, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { companyInfo, services, projects, testimonials, processSteps, clients, clientLogoBanner } from '../data/mock';
import { Helmet } from "react-helmet-async";

const iconMap = {
  Home: Home,
  Building2: Building2,
  Castle: Castle,
  Briefcase: Briefcase,
  Wrench: Wrench,
  Key: Key,
};

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Luxury Interior Designers in Bangalore | Denova Creations</title>
        <meta
          name="description"
          content="Denova Creations is one of the best interior designers in Bangalore. We design premium modular kitchens, custom wardrobes, and luxury home interiors with a 10-year warranty."
        />
        <link rel="canonical" href="https://denovacreations.com/" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Denova Creations",
            url: "https://denovacreations.com",
            logo: "https://denovacreations.com/images/denova-logo.svg",
            image: "https://denovacreations.com/images/hero2.webp",
            telephone: "+91-9164466606",
            address: {
              "@type": "PostalAddress",
              streetAddress: "373/2, Begur Hulimavu Road",
              addressLocality: "Bengaluru",
              addressRegion: "Karnataka",
              postalCode: "560114",
              addressCountry: "IN"
            },
            areaServed: "Bangalore",
            priceRange: "₹₹₹",
            description:
              "Bespoke home interior designers in Bangalore specializing in custom modular kitchens, wardrobes, wardrobes, false ceilings, and turnkey luxury interiors."
          })}
        </script>

        <meta property="og:title" content="Luxury Interior Designers in Bangalore | Denova Creations" />
        <meta property="og:description" content="Elevate your living experience with premium home interior designers in Bangalore. Customized kitchens, wardrobes, and turnkey execution with 10-year warranty." />
        <meta property="og:image" content="https://denovacreations.com/images/hero2.webp" />
        <meta property="og:url" content="https://denovacreations.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Luxury Interior Designers in Bangalore | Denova Creations" />
        <meta name="twitter:description" content="Elevate your living experience with premium home interior designers in Bangalore. Customized kitchens, wardrobes, and turnkey execution with 10-year warranty." />
        <meta name="twitter:image" content="https://denovacreations.com/images/hero2.webp" />
      </Helmet>

      <div className="bg-[#FAF8F5] text-stone-800 antialiased min-h-screen">
        {/* 1. STUNNING HERO SECTION (LUXURY OVERLAY & HIGH CONVERSIONS) */}
        <section className="relative min-h-[90vh] flex items-center bg-[#071F20] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero2.webp"
              alt="Premium Home Interior Design in Bangalore by Denova Creations"
              className="w-full h-full object-cover opacity-30 scale-105 animate-pulse"
              loading="eager"
            />
            {/* Elegant deep emerald gradient tint */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2526]/95 via-[#0A2526]/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 container-custom py-24 text-left">
            <div className="max-w-3xl">
              {/* Premium Review Header */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-white mb-6 animate-fade-in">
                <span className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider">{companyInfo.rating} Rating • {companyInfo.projectsCompleted}+ Luxury Projects Completed</span>
              </div>
              
              {/* Main Heading optimized for SEO targeting "Interior Designers in Bangalore" */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-serif tracking-tight animate-fade-in-up">
                Bespoke <span className="text-[#E8D8C4] underline decoration-[#E8D8C4] decoration-2 underline-offset-8">Interior Designers</span> in Bangalore
              </h1>
              
              {/* Persuasive copy */}
              <p className="text-lg md:text-xl text-stone-300 mb-10 leading-relaxed max-w-2xl animate-fade-in-up stagger-2">
                Crafting luxury modular kitchens, bespoke wardrobes, and highly personalized home interior designs in Bangalore. Precision edge-banding, German hardware, and turnkey handover delivered within {companyInfo.deliveryTimeline}.
              </p>
              
              {/* Visual CTAs */}
              <div className="flex flex-wrap gap-4 animate-fade-in-up stagger-3">
                <Link to="/contact">
                  <Button
                    className="bg-[#E8D8C4] hover:bg-white text-[#0F3D3E] px-8 py-6 rounded-xl font-bold uppercase tracking-wider text-xs shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
                    aria-label="Book Free Interior Design Consultation"
                  >
                    <span>Get Free Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>

                <Link to="/estimate">
                  <Button
                    className="bg-transparent hover:bg-white/10 border border-[#E8D8C4] text-[#E8D8C4] hover:text-white px-8 py-6 rounded-xl font-bold uppercase tracking-wider text-xs shadow-sm transition-all duration-300"
                    aria-label="Get Detailed Interior Design Estimate"
                  >
                    Get Cost Estimate
                  </Button>
                </Link>

                <Link to="/projects">
                  <Button
                    className="bg-white/5 border border-white/10 text-white hover:bg-white hover:text-[#0F3D3E] px-8 py-6 rounded-xl font-bold uppercase tracking-wider text-xs transition duration-300"
                    aria-label="View Interior Design Projects"
                  >
                    View Portfolios
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. TRUST INDICATOR STRIP (LUXURY IVORY BACKGROUND) */}
        <section className="bg-[#FAF7F2] py-8 border-b border-stone-200/40 relative z-10 shadow-sm">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:divide-x md:divide-stone-200/50">
              <Link to="/testimonials" className="flex items-center justify-center gap-4 hover:opacity-80 transition-opacity">
                <div className="w-12 h-12 bg-[#0F3D3E]/10 rounded-full flex items-center justify-center text-[#0F3D3E]">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div className="text-left">
                  <p className="text-xl font-bold text-[#0F3D3E] leading-none">{companyInfo.rating}/5★</p>
                  <p className="text-xs text-stone-500 font-semibold mt-1">Google Reviews</p>
                </div>
              </Link>
              
              <Link to="/projects" className="flex items-center justify-center gap-4 hover:opacity-80 transition-opacity">
                <div className="w-12 h-12 bg-[#0F3D3E]/10 rounded-full flex items-center justify-center text-[#0F3D3E]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xl font-bold text-[#0F3D3E] leading-none">{companyInfo.projectsCompleted}+</p>
                  <p className="text-xs text-stone-500 font-semibold mt-1">Homes Delivered</p>
                </div>
              </Link>
              
              <Link to="/projects" className="flex items-center justify-center gap-4 hover:opacity-80 transition-opacity">
                <div className="w-12 h-12 bg-[#0F3D3E]/10 rounded-full flex items-center justify-center text-[#0F3D3E]">
                  <Home className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xl font-bold text-[#0F3D3E] leading-none">Bengaluru</p>
                  <p className="text-xs text-stone-500 font-semibold mt-1">All Zones Covered</p>
                </div>
              </Link>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-[#0F3D3E]/10 rounded-full flex items-center justify-center text-[#0F3D3E]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xl font-bold text-[#0F3D3E] leading-none">{companyInfo.deliveryTimeline}</p>
                  <p className="text-xs text-stone-500 font-semibold mt-1">Timeline Promise</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CORE SERVICES SECTION (LUXURY CARD CARDS) */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="text-[#0F3D3E] font-bold mb-3 tracking-widest uppercase text-xs block">
                Innovative Space Crafting
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0F3D3E] mb-4 font-serif leading-tight">
                Our Premium Services
              </h2>
              <p className="text-stone-600 mt-4 leading-relaxed text-sm md:text-base">
                We are specialized in custom modular kitchens, modular wardrobes, TV units, designer false ceilings, and end-to-end luxury turnkey residential and commercial interiors in Bangalore.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const IconComponent = iconMap[service.icon];
                return (
                  <Link key={service.id} to="/services" className="block h-full group">
                    <Card className="border border-stone-100 bg-[#FAF8F5] hover:border-[#E8D8C4] rounded-3xl hover:shadow-[0_15px_40px_rgba(15,61,62,0.05)] hover:-translate-y-1 transition-all duration-500 h-full flex flex-col overflow-hidden">
                      <CardContent className="p-8 h-full flex flex-col flex-grow">
                        <div className="w-14 h-14 bg-white text-[#0F3D3E] border border-stone-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#0F3D3E] group-hover:text-white transition-colors duration-500">
                          <IconComponent className="w-6 h-6" />
                        </div>

                        <h3 className="text-xl font-bold font-serif text-[#0F3D3E] mb-3 group-hover:text-stone-900 transition-colors">
                          {service.title}
                        </h3>

                        <p className="text-xs text-stone-500 mb-6 leading-relaxed flex-grow">
                          {service.description}
                        </p>

                        <ul className="space-y-2 mb-6 border-t border-stone-200/40 pt-4">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs text-stone-600 font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#0F3D3E] flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-auto inline-flex items-center gap-2 text-[#0F3D3E] group-hover:text-stone-950 font-bold text-xs uppercase tracking-wider">
                          <span>Explore Layouts</span>
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Link to="/services">
                <Button className="border-2 border-[#0F3D3E] text-[#0F3D3E] hover:bg-[#0F3D3E] hover:text-white px-8 py-3 rounded-full font-semibold text-xs uppercase tracking-wider transition duration-300" aria-label="Explore All Our Interior Design Services">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 4. FEATURED PROJECTS PORTFOLIO (LUXURY OVERLAY & PREV CONTROLS) */}
        <section className="section-padding bg-stone-50">
          <div className="container-custom">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="text-[#0F3D3E] font-bold mb-3 tracking-widest uppercase text-xs block">Featured Showcases</span>
              <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#0F3D3E] mb-4">
                Signature Portfolios
              </h2>
              <p className="text-stone-600 mt-4 leading-relaxed text-sm md:text-base">
                Discover photorealistic representations and actually finished premium interior works delivered across major residential zones in Bengaluru.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.slice(0, 6).map((project) => (
                <Link
                  key={project.id}
                  to="/projects"
                  className="block bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-md transition-all duration-300 group"
                >
                  <div className="overflow-hidden aspect-[4/3] relative">
                    <img
                      src={project.image}
                      alt={`${project.title} - Denova Creations`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <span className="absolute top-4 right-4 bg-[#0F3D3E] text-[#E8D8C4] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="text-lg font-bold text-[#0F3D3E] font-serif mb-1 group-hover:text-stone-900 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[11px] text-stone-400 font-semibold tracking-wide flex items-center gap-1 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-[#0F3D3E]" /> {project.location}
                    </p>
                    <div className="flex justify-between items-center text-xs text-stone-500 border-t border-stone-50 pt-4 font-medium">
                      <span>Area: {project.area}</span>
                      <span>Timeline: {project.duration}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/projects">
                <Button className="bg-[#0F3D3E] hover:bg-[#0B2C2D] text-[#E8D8C4] hover:text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow flex items-center gap-2 mx-auto">
                  <span>View All Portfolios</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 5. DESIGN PROCESS (timeline flow) */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="text-[#0F3D3E] font-bold mb-3 tracking-widest uppercase text-xs block">Seamless Journey</span>
              <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#0F3D3E] mb-4">
                Our Execution Timeline
              </h2>
              <p className="text-stone-600 mt-4 leading-relaxed text-sm md:text-base">
                An organized, hassle-free structural schedule designed to bring your vision to life within timeline parameters.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-5xl mx-auto pt-8">
              {processSteps.map((step, idx) => (
                <div key={step.step} className="relative text-center group">
                  <div className="w-16 h-16 bg-[#0F3D3E] text-[#E8D8C4] rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold font-serif shadow-md border-2 border-[#E8D8C4] hover:scale-105 transition-transform duration-300">
                    {step.step}
                  </div>
                  {idx < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-[#E8D8C4]/60"></div>
                  )}
                  <h4 className="text-lg font-bold text-[#0F3D3E] font-serif mb-2 group-hover:text-stone-900 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs text-stone-500 font-semibold tracking-wide uppercase">{step.duration}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-14">
              <Link to="/process">
                <Button className="border-2 border-[#0F3D3E] text-[#0F3D3E] hover:bg-[#0F3D3E] hover:text-white px-8 py-3 rounded-full font-semibold text-xs uppercase tracking-wider transition duration-300" aria-label="Learn About Our Process">
                  Learn Process Details
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 6. VERIFIED SOCIAL PROOF TESTIMONIALS (ACCENTS-EMERALD) */}
        <section className="section-padding bg-[#0A2526] text-white">
          <div className="container-custom">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="text-[#E8D8C4] font-bold mb-3 tracking-widest uppercase text-xs block">Homeowner Feedbacks</span>
              <h2 className="text-3xl md:text-5xl font-bold font-serif text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-stone-300 mt-4 leading-relaxed text-sm">
                Discover the actual visual experiences of families who transformed their lifestyles with our tailored, premium interior designs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.slice(0, 2).map((testimonial) => (
                <div key={testimonial.id} className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 flex flex-col justify-between text-left hover:border-[#E8D8C4]/40 transition-colors duration-300">
                  <div>
                    <div className="flex gap-1 mb-6 text-amber-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-stone-200 text-sm leading-relaxed italic mb-6">
                      "{testimonial.text}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover shadow-inner"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-white font-bold text-sm">{testimonial.name}</p>
                      <p className="text-stone-400 text-xs font-medium tracking-wide flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-[#E8D8C4]" /> {testimonial.projectType} • {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/testimonials">
                <Button className="bg-[#E8D8C4] hover:bg-white text-[#0F3D3E] px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition shadow-md" aria-label="Read More Customer Testimonials">
                  Read More Reviews
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 7. PARTNERS & CLIENTS (LUXURY CARDS IN REDUCED RATINGS) */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12 max-w-xl mx-auto">
              <span className="text-[#0F3D3E] font-bold mb-3 tracking-widest uppercase text-xs block">Trusted Credentials</span>
              <h2 className="text-2xl md:text-4xl font-bold font-serif text-[#0F3D3E] mb-4">
                Our Partners & Clients
              </h2>
              <p className="text-stone-500 text-xs leading-relaxed">
                We cooperate with Bangalore's leading real estate properties and developers to deliver flawless, customized spaces.
              </p>
            </div>
            
            <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-stone-100 max-w-4xl mx-auto shadow-sm">
              <img 
                src={clientLogoBanner}
                alt="Denova Creations Builder Partners"
                className="w-full max-w-3xl mx-auto object-contain brightness-95 contrast-105"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* 8. HIGH-IMPACT FINAL CTA SECTION (RE-THEMED FROM RAW GOLD TO LUXURY DEEP EMERALD) */}
        <section className="py-20 bg-[#0F3D3E] text-white text-center relative overflow-hidden border-t border-[#E8D8C4]/15">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#071F20] to-[#0F3D3E]/30 z-0"></div>
          <div className="container-custom relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif leading-tight tracking-tight">
              Ready to Restructure Your Space?
            </h2>
            <p className="text-stone-300 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a complimentary interior design meeting and site estimation with our senior interior architects today. No obligation, 100% custom blueprint layouts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/estimate">
                <Button className="bg-[#E8D8C4] hover:bg-white text-[#0F3D3E] px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest shadow-md hover:shadow-lg transition-all duration-300" aria-label="Get Free Interior Design Estimate">
                  Get Free Estimate
                </Button>
              </Link>
              <a href={`tel:${companyInfo.primaryPhone}`}>
                <Button className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition duration-300 flex items-center gap-2" aria-label="Call Denova Creations Support">
                  <PhoneCall className="w-4 h-4" />
                  <span>Call {companyInfo.primaryPhone}</span>
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
