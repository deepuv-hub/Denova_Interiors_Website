import React, { useState, useEffect, useCallback } from "react";
import { Link } from 'react-router-dom';
import { 
  X, 
  ArrowRight, 
  MapPin, 
  Clock, 
  Maximize2, 
  CheckCircle2, 
  MessageSquare, 
  Compass, 
  ShieldCheck
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { companyInfo } from "../data/mock";
import { projects as projectsDb } from "../data/projects";
import { Helmet } from "react-helmet-async";

const filterTabs = [
  { id: "All", label: "Signature Showcase" },
  { id: "Kitchen", label: "Modular Kitchens" },
  { id: "Wardrobe", label: "Bespoke Wardrobes" },
  { id: "Living Room", label: "Living Rooms" },
  { id: "Bedroom", label: "Luxury Bedrooms" },
  { id: "Ceiling", label: "Ceilings & Lights" },
  { id: "Office", label: "Commercial Offices" }
];

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filteredPortfolio = activeFilter === "All"
    ? projectsDb
    : projectsDb.filter(item => item.category === activeFilter);

  const handleNextImage = useCallback(() => {
    if (!selectedProject) return;
    setActiveImageIndex((prev) => 
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  }, [selectedProject]);

  const handlePrevImage = useCallback(() => {
    if (!selectedProject) return;
    setActiveImageIndex((prev) => 
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  }, [selectedProject]);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyNav = (e) => {
      if (!selectedProject) return;
      if (e.key === "ArrowRight") handleNextImage();
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "Escape") setSelectedProject(null);
    };

    window.addEventListener("keydown", handleKeyNav);
    return () => window.removeEventListener("keydown", handleKeyNav);
  }, [selectedProject, handleNextImage, handlePrevImage]);

  // Prevent scroll behind fullscreen console overlay
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedProject]);

  return (
    <>
      <Helmet>
        <title>Signature Interior Design Portfolio Bangalore | Denova Creations</title>
        <meta
          name="description"
          content="Explore our signature home interior design portfolios in Bangalore. Filter through completed luxury kitchens, modular wardrobes, and residential spaces."
        />
        <link rel="canonical" href="https://denovacreations.com/portfolio" />
        
        {/* Collection Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Denova Creations Portfolio Collections",
            "description": "Bespoke modern modular kitchen, sliding wardrobe, false ceiling, and office interior portfolios in Bangalore.",
            "url": "https://denovacreations.com/portfolio"
          })}
        </script>
      </Helmet>

      <div className="bg-[#FAF8F5] text-stone-800 antialiased min-h-screen">

        {/* 1. PREMIUM HERO SECTION */}
        <section className="relative h-[65vh] flex items-center bg-[#071F20] overflow-hidden select-none">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/kitchen1.webp"
              alt="Signature completed portfolios by Denova Creations"
              className="w-full h-full object-cover scale-102 opacity-95 transition-transform duration-1000"
            />
            {/* Elegant overlay to highlight typography and text contrast */}
            <div className="absolute inset-0 bg-[#051819]/80 backdrop-blur-[1px]"></div>
          </div>

          <div className="relative z-10 w-full container-custom mt-8">
            <div className="max-w-3xl text-left space-y-5 animate-fade-in-up">
              <span className="text-[#E8D8C4] font-bold tracking-widest uppercase text-xs block">
                Our Showcase
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-serif tracking-tight">
                Explore Our Signature <span className="text-[#E8D8C4]">Interior Projects.</span>
              </h1>
              
              <p className="text-stone-300 text-sm md:text-base leading-relaxed max-w-xl">
                A highly refined presentation of bespoke modular kitchens, space-optimized wardrobes, false ceilings, and collaborative workspaces crafted turnkey across Bengaluru.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="bg-[#E8D8C4] hover:bg-white text-[#0F3D3E] font-bold px-6 py-5 rounded-lg text-xs md:text-sm uppercase tracking-wider transition-all duration-300 shadow-lg flex items-center gap-2 hover:scale-[1.02]">
                    <span>Start Your Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button className="bg-transparent hover:bg-white/10 border border-white/30 text-white font-bold px-6 py-5 rounded-lg text-xs md:text-sm uppercase tracking-wider transition-all duration-300">
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. STICKY FILTER SELECTOR NAVIGATION */}
        <section className="py-8 bg-white border-b border-stone-150 sticky top-[72px] z-[9999] shadow-sm">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-5 py-2.5 text-xs rounded-full font-bold uppercase tracking-wider transition-all duration-300 border ${
                    activeFilter === tab.id
                      ? 'bg-[#0F3D3E] border-[#0F3D3E] text-white shadow-sm'
                      : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50 hover:text-[#0F3D3E]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 3. MASONRY PROJECT GRID LAYOUT */}
        <section className="py-16 md:py-24 bg-[#FAF8F5]">
          <div className="container-custom">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPortfolio.map((project) => (
                <div 
                  key={project.id}
                  onClick={() => {
                    setSelectedProject(project);
                    setActiveImageIndex(0);
                  }}
                  className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-[0_4px_25px_rgba(0,0,0,0.015)] hover:shadow-md hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between"
                >
                  {/* Aspect cover photo */}
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    />
                    {/* Shadow wash */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-stone-950/0 to-transparent"></div>
                    
                    {/* Visual Category Label */}
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#0F3D3E] text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-stone-100 shadow-sm">
                      {project.category} Portfolio
                    </span>
                  </div>

                  {/* Metadata Content */}
                  <div className="p-6 text-left space-y-3">
                    <h3 className="text-lg md:text-xl font-bold font-serif text-[#0F3D3E] group-hover:text-stone-950 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs text-stone-500 leading-relaxed font-semibold">
                      Style: <span className="text-[#0F3D3E]">{project.style}</span>
                    </p>

                    <p className="text-xs text-stone-400 line-clamp-2">
                      Designed with premium {project.materialsUsed.toLowerCase()}. Site civil engineer supervised turnkey execution in Bangalore.
                    </p>

                    <div className="pt-2 flex items-center justify-between border-t border-stone-100 text-[10px] text-stone-400 font-bold uppercase tracking-wider">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#E8D8C4]" />
                        <span>{project.location}</span>
                      </span>
                      
                      <span className="text-[#0F3D3E] flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                        <span>View Project Presentation</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {filteredPortfolio.length === 0 && (
              <div className="text-center py-20 bg-white rounded-3xl border border-stone-100 max-w-3xl mx-auto shadow-sm">
                <p className="text-stone-500 text-base">No portfolios found in this category.</p>
              </div>
            )}

          </div>
        </section>

        {/* 4. IMMERSIVE FULLSCREEN PRESENTATION CONSOLE (MODAL REDESIGN) */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-[999999] bg-[#0A2526]/95 backdrop-blur-md overflow-y-auto flex items-start justify-center pt-8 pb-8 md:pt-16 md:pb-16 animate-fadeIn"
            onClick={() => setSelectedProject(null)}
          >
            
            {/* Close trigger overlay button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full border border-white/10 transition z-50"
              aria-label="Close Presentation"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Body Console Grid */}
            <div 
              className="max-w-6xl w-full mx-4 bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-100 text-left flex flex-col lg:flex-row relative z-10"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Left Slider Viewer Box (60% width on Desktop) */}
              <div className="lg:w-[62%] bg-stone-950 flex flex-col justify-between relative p-6 md:p-8">
                
                {/* Visual Slide Frame */}
                <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-2xl flex items-center justify-center">
                  <img
                    src={selectedProject.images[activeImageIndex]}
                    alt={`${selectedProject.title} slideshow detailed snapshot`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  
                  {/* Left / Right Slide Chevron Switches */}
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full border border-white/10 transition-all duration-300 z-30"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full border border-white/10 transition-all duration-300 z-30"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Counter Index overlay */}
                  <span className="absolute bottom-4 right-4 bg-black/70 text-white/80 px-3.5 py-1.5 rounded-xl border border-white/10 text-xs font-semibold">
                    {activeImageIndex + 1} / {selectedProject.images.length}
                  </span>
                </div>

                {/* DYNAMIC IMAGE-BY-IMAGE EXPLANATION CONSOLE (Core Brief Requirement) */}
                <div className="mt-6 bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 text-left space-y-2">
                  <span className="text-[#E8D8C4] text-[9px] font-bold uppercase tracking-widest block">Slide Design Detailing</span>
                  <p className="text-stone-300 text-xs md:text-sm leading-relaxed">
                    {selectedProject.explanations[activeImageIndex] || "Luxury interior detailing coordinating high-end plywood material, custom edge-banding finishes, and optimized visual balances."}
                  </p>
                </div>

                {/* Thumbnails Row preview strip */}
                <div className="mt-5 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                  {selectedProject.images.map((thumb, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-16 md:w-20 aspect-square rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all duration-300 hover:scale-[1.05] ${
                        activeImageIndex === idx ? 'border-[#E8D8C4] scale-[1.03]' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={thumb}
                        alt="slideshow thumbnail preview"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>

              </div>

              {/* Right Specifications & Leads Box (38% width on Desktop) */}
              <div className="lg:w-[38%] bg-[#FAF8F5] p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh] lg:max-h-none border-t lg:border-t-0 lg:border-l border-stone-200/50 text-left">
                
                {/* Specifications details */}
                <div className="space-y-6">
                  
                  {/* Category & Title */}
                  <div className="space-y-1">
                    <span className="text-[#0F3D3E] font-bold text-[9px] uppercase tracking-widest block">Completed Portfolio</span>
                    <h2 className="text-xl md:text-2xl font-bold font-serif text-[#0F3D3E] leading-tight">
                      {selectedProject.title}
                    </h2>
                    <span className="text-xs text-stone-500 font-semibold">{selectedProject.style}</span>
                  </div>

                  {/* Specs Data sheet */}
                  <div className="p-5 bg-white rounded-2xl border border-stone-100 space-y-3 shadow-xs">
                    <h4 className="text-[#0F3D3E] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 border-b border-stone-100 pb-2">
                      <Compass className="w-4 h-4 text-[#E8D8C4]" />
                      <span>Specifications Sheet</span>
                    </h4>
                    
                    <ul className="space-y-2 text-xs">
                      <li className="flex justify-between"><span className="text-stone-400 font-medium">Type:</span> <span className="text-stone-700 font-bold uppercase">{selectedProject.category}</span></li>
                      <li className="flex justify-between"><span className="text-stone-400 font-medium">Location:</span> <span className="text-stone-700 font-bold">{selectedProject.location}</span></li>
                      <li className="flex justify-between"><span className="text-stone-400 font-medium">Space size:</span> <span className="text-stone-700 font-bold">{selectedProject.area}</span></li>
                      <li className="flex justify-between"><span className="text-stone-400 font-medium">Timeline:</span> <span className="text-stone-700 font-bold">{selectedProject.completionTime}</span></li>
                      <li className="flex justify-between"><span className="text-stone-400 font-medium">Budget:</span> <span className="text-[#0F3D3E] font-bold uppercase text-[10px]">{selectedProject.budget}</span></li>
                    </ul>
                  </div>

                  {/* Materials & Sourcing */}
                  <div className="space-y-2.5">
                    <h4 className="text-stone-700 font-bold text-xs uppercase tracking-wider">Materials & Sourcing</h4>
                    <p className="text-xs text-stone-500 leading-relaxed font-light">
                      {selectedProject.materialsUsed}
                    </p>
                  </div>

                  {/* Scope of Work */}
                  <div className="space-y-2">
                    <h4 className="text-stone-700 font-bold text-xs uppercase tracking-wider">Scope of Work executed</h4>
                    <p className="text-xs text-stone-500 leading-relaxed font-light">
                      {selectedProject.scope?.join(", ")}
                    </p>
                  </div>

                  {/* Trust Stamps check list */}
                  <div className="p-4 bg-[#E8D8C4]/20 rounded-2xl border border-[#E8D8C4]/35 space-y-2">
                    <h4 className="text-[#0F3D3E] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#0F3D3E]" />
                      <span>Trust & Quality audits</span>
                    </h4>
                    <ul className="space-y-1.5 text-[11px] text-[#0F3D3E] font-semibold">
                      <li className="flex items-center gap-1.5">✓ {selectedProject.supervision}</li>
                      <li className="flex items-center gap-1.5">✓ German factory automated edge-banding</li>
                      <li className="flex items-center gap-1.5">✓ Late handover rent penalty covered</li>
                    </ul>
                  </div>

                </div>

                {/* Dynamically integrated Leads CTAs */}
                <div className="pt-6 border-t border-stone-200/50 mt-6 space-y-3 border-t">
                  <div className="grid grid-cols-1 gap-2.5">
                    <Link to={`/projects/${selectedProject.slug}`} onClick={() => setSelectedProject(null)}>
                      <Button className="w-full bg-[#0F3D3E] hover:bg-[#0B2C2D] text-[#E8D8C4] hover:text-white py-4 rounded-xl text-xs uppercase tracking-wider font-bold shadow-md flex items-center justify-center gap-2">
                        <span>View Detailed Case Study</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>

                    <Link to="/contact" onClick={() => setSelectedProject(null)}>
                      <Button className="w-full bg-white hover:bg-stone-50 text-[#0F3D3E] border border-stone-200 py-4 rounded-xl text-xs uppercase tracking-wider font-bold shadow-xs flex items-center justify-center gap-2">
                        <span>Get Free Consultation</span>
                      </Button>
                    </Link>
                    
                    <a
                      href={`https://wa.me/919164466606?text=Hi%20I'm%20exploring%20your%20completed%20portfolio%20project:%20${selectedProject.title}%20(Slide%20${activeImageIndex + 1}).%20Can%20you%20share%20costing%20estimates?`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full border border-[#25D366] hover:bg-[#25D366]/5 py-3.5 rounded-xl text-[#25D366] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition duration-300"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Inquiry</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* 5. STRONG CONVERSION CTA BANNER */}
        <section className="py-20 md:py-24 bg-gradient-to-b from-[#0F3D3E] to-[#0A2526] text-white relative z-10 select-none">
          <div className="container-custom text-center max-w-3xl mx-auto space-y-6">
            <span className="text-[#E8D8C4] font-bold tracking-widest uppercase text-xs block">
              Start Designing Today
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight tracking-tight">
              Ready to Design Your Masterpiece?
            </h2>
            
            <p className="text-stone-300 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
              Book a free design consultation session at our Bangalore studio or coordinate a detailed structural costing review today.
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
                  Call Expert
                </Button>
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default PortfolioPage;
