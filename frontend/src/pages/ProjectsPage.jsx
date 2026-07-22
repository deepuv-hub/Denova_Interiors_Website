import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MapPin, 
  CheckCircle2, 
  Star, 
  MessageSquare, 
  Compass
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { companyInfo } from '../data/mock';
import { projects as projectsDb } from '../data/projects';
import { Helmet } from "react-helmet-async";

const categoryTabs = ["All", "Kitchen", "Wardrobe", "Living Room", "Bedroom", "Ceiling", "Office"];

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  
  // Manage selected thumbnail state for each case study dynamically
  const [selectedThumbnails, setSelectedThumbnails] = useState(
    projectsDb.reduce((acc, study) => {
      acc[study.id] = study.images[0];
      return acc;
    }, {})
  );

  const handleThumbnailClick = (studyId, imageUrl) => {
    setSelectedThumbnails((prev) => ({
      ...prev,
      [studyId]: imageUrl
    }));
  };

  const filteredCaseStudies = activeTab === "All"
    ? projectsDb
    : projectsDb.filter(study => study.category === activeTab);

  return (
    <>
      <Helmet>
        <title>Interior Design Portfolio Bangalore | Completed Projects | Denova Creations</title>
        <meta
          name="description"
          content="Explore completed luxury home interior projects in Bangalore. Discover detailed case studies of modular kitchens, wardrobes, false ceilings, and residential spaces."
        />
        <link rel="canonical" href="https://denovacreations.com/projects" />
        
        {/* Portfolio Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Denova Creations completed projects",
            "description": "Premium story-driven case studies of completed luxury apartments, kitchens, wardrobes, and corporate office spaces in Bangalore.",
            "url": "https://denovacreations.com/projects",
            "about": {
              "@type": "LocalBusiness",
              "name": "Denova Creations",
              "image": "https://denovacreations.com/images/hero2.webp",
              "telephone": "+91-9164466606"
            }
          })}
        </script>
      </Helmet>

      <div className="bg-[#FAF8F5] text-stone-800 antialiased min-h-screen">

        {/* 1. CINEMATIC HERO SECTION */}
        <section className="relative h-[65vh] flex items-center bg-[#071F20] overflow-hidden select-none">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/projects/living-room-modern-1/1.webp"
              alt="Completed luxury living interior by Denova Creations"
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
                Spaces Designed with <span className="text-[#E8D8C4]">Purpose & Luxury.</span>
              </h1>
              
              <p className="text-stone-300 text-sm md:text-base leading-relaxed max-w-xl">
                Explore real completed residences and corporate spaces across Bangalore. Discover the design thinking, material curations, and turnkey execution behind every successful transformation.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="bg-[#E8D8C4] hover:bg-white text-[#0F3D3E] font-bold px-6 py-5 rounded-lg text-xs md:text-sm uppercase tracking-wider transition-all duration-300 shadow-lg flex items-center gap-2 hover:scale-[1.02]">
                    <span>Start Your Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/estimate">
                  <Button className="bg-transparent hover:bg-white/10 border border-white/30 text-white font-bold px-6 py-5 rounded-lg text-xs md:text-sm uppercase tracking-wider transition-all duration-300">
                    Calculate Cost Online
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. CATEGORY SELECTOR TABS */}
        <section className="py-8 bg-white border-b border-stone-150 sticky top-[72px] z-[9999] shadow-sm">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-2">
              {categoryTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 text-xs rounded-full font-bold uppercase tracking-wider transition-all duration-300 border ${
                    activeTab === tab
                      ? 'bg-[#0F3D3E] border-[#0F3D3E] text-white shadow-sm'
                      : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50 hover:text-[#0F3D3E]'
                  }`}
                >
                  {tab} Projects
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 3. EDITORIAL CASE STUDIES LIST (ALTERNATING LAYOUTS) */}
        <section className="py-16 md:py-24 bg-[#FAF8F5] relative overflow-hidden">
          <div className="container-custom">
            
            <div className="space-y-24 md:space-y-32 max-w-6xl mx-auto">
              {filteredCaseStudies.map((study, idx) => {
                const isEven = idx % 2 === 0;
                const activeImage = selectedThumbnails[study.id] || study.images[0];

                return (
                  <React.Fragment key={study.id}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start border-b border-stone-200/40 pb-20 md:pb-28 last:border-0 last:pb-0 font-light">
                      
                      {/* Left/Right Interactive Gallery Column */}
                      <div className={`lg:col-span-6 space-y-4 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                        {/* Main Image View */}
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl border-4 border-white z-10 group">
                          <img
                            src={activeImage}
                            alt={`${study.title} completed interior project by Denova Creations`}
                            className="w-full h-full object-cover transition-transform group-hover:scale-103"
                            style={{ transitionDuration: '600ms' }}
                          />
                          <div className="absolute inset-0 bg-stone-950/5"></div>
                          
                          {/* Investment Tag Overlay */}
                          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-xl border border-white/10 text-xs font-semibold">
                            {study.budget}
                          </div>
                        </div>

                        {/* Interactive Thumbnails Row */}
                        <div className="flex gap-2.5 overflow-x-auto py-1 scrollbar-hide">
                          {study.images.map((thumb, tIdx) => (
                            <button
                              key={tIdx}
                              onClick={() => handleThumbnailClick(study.id, thumb)}
                              className={`w-20 aspect-square rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all duration-300 hover:scale-[1.05] ${
                                activeImage === thumb ? 'border-[#0F3D3E] shadow-sm' : 'border-transparent shadow-xs hover:border-[#E8D8C4]'
                              }`}
                            >
                              <img
                                src={thumb}
                                alt="interior detail thumbnail"
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Text details Column */}
                      <div className={`lg:col-span-6 text-left space-y-5 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="bg-[#E8D8C4] text-[#0F3D3E] text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full">
                            {study.category} Case Study
                          </span>
                          
                          <span className="text-stone-400 text-xs flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-[#E8D8C4]" />
                            <span>{study.location}</span>
                          </span>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#0F3D3E] tracking-tight leading-tight">
                          {study.title}
                        </h2>

                        {/* Project Specs Strip */}
                        <div className="grid grid-cols-3 gap-2.5 py-3 border-y border-stone-200/50 text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                          <div className="space-y-1">
                            <span className="text-stone-400 block text-[9px]">Property</span>
                            <span className="text-stone-700 block font-bold">{study.propertyType}</span>
                          </div>
                          <div className="space-y-1 border-l border-stone-200/70 pl-3">
                            <span className="text-stone-400 block text-[9px]">Carpet Area</span>
                            <span className="text-stone-700 block font-bold">{study.area}</span>
                          </div>
                          <div className="space-y-1 border-l border-stone-200/70 pl-3">
                            <span className="text-stone-400 block text-[9px]">Duration</span>
                            <span className="text-stone-700 block font-bold">{study.completionTime}</span>
                          </div>
                        </div>

                        {/* Design Storytelling */}
                        <div className="space-y-4 text-xs md:text-sm text-stone-600 leading-relaxed">
                          <p>{study.description}</p>
                          
                          {/* Color & Material boards */}
                          <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#E8D8C4]/20 space-y-2">
                            <h4 className="text-[#0F3D3E] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                              <Compass className="w-3.5 h-3.5 text-[#E8D8C4]" />
                              <span>Color & Material Sourcing</span>
                            </h4>
                            <ul className="space-y-1 text-xs">
                              <li><span className="font-semibold text-stone-700">Primary Palette:</span> {study.colorPalette?.tones}</li>
                              <li><span className="font-semibold text-stone-700">Accents:</span> {study.colorPalette?.accents}</li>
                              <li><span className="font-semibold text-stone-700">Durability Core:</span> {study.materialsUsed}</li>
                            </ul>
                          </div>

                          {/* Technical Execution details */}
                          <div className="space-y-2">
                            <h4 className="text-stone-700 font-bold text-xs uppercase tracking-wider font-bold">Technical Execution Stages</h4>
                            <ul className="grid grid-cols-2 gap-2 text-xs">
                              {study.scope?.map((stage, stageIdx) => (
                                <li key={stageIdx} className="flex items-center gap-2 font-semibold">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0F3D3E] flex-shrink-0" />
                                  <span>{stage}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Client testimonial */}
                          <blockquote className="border-l-2 border-[#E8D8C4] pl-4 italic text-stone-500 font-medium py-1">
                            "{study.clientReview}"
                            <span className="text-stone-700 block not-italic font-bold text-[10px] uppercase tracking-wider mt-1.5">— {study.clientName}</span>
                          </blockquote>
                        </div>

                        {/* CTAs */}
                        <div className="pt-4 flex flex-wrap gap-4 items-center">
                          <Link to={`/projects/${study.slug}`}>
                            <Button className="bg-[#0F3D3E] hover:bg-[#0B2C2D] text-[#E8D8C4] hover:text-white font-bold px-6 py-4 rounded-xl text-xs uppercase tracking-wider shadow-sm transition duration-300 flex items-center gap-2">
                              <span>Read Design Story</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Button>
                          </Link>
                          
                          <a 
                            href={`https://wa.me/919164466606?text=Hi%20I'm%20interested%20in%20a%20design%20similar%20to%20your%20${study.title}%20(Slug:%20${study.slug})`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-600 hover:text-emerald-700 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                          >
                            <MessageSquare className="w-4 h-4" />
                            <span>WhatsApp Query</span>
                          </a>
                        </div>

                      </div>
                    </div>

                    {/* 4. DYNAMIC LEAD CAPTURE CTAs INLINE */}
                    {(idx + 1) % 2 === 0 && (
                      <div className="py-6 max-w-6xl mx-auto select-none animate-fadeIn">
                        <div className="bg-[#0A2526] text-white p-8 md:p-12 rounded-3xl border border-white/5 shadow-md text-center space-y-5">
                          <span className="text-[#E8D8C4] font-bold tracking-widest uppercase text-xs block">Inspired by our completed works?</span>
                          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white max-w-xl mx-auto leading-tight">
                            Let's Design an Exquisite Home Curated Around Your Vision.
                          </h3>
                          <p className="text-stone-400 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
                            Schedule a free initial spatial consultation at our Bangalore studio or coordinate a detailed structural costing survey today.
                          </p>
                          <div className="pt-3 flex flex-wrap justify-center gap-4">
                            <Link to="/contact">
                              <Button className="bg-[#E8D8C4] hover:bg-white text-[#0F3D3E] font-bold px-6 py-4 rounded-lg text-xs uppercase tracking-wider shadow-sm transition-transform hover:scale-[1.02] duration-300">
                                Book Free Consultation
                              </Button>
                            </Link>
                            <a 
                              href="https://wa.me/919164466606?text=Hi%20I'm%20exploring%20completed%20portfolio%20projects.%20I'd%20like%20to%20book%20a%20design%20consultation."
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-transparent hover:bg-white/5 border border-white/20 text-white font-semibold px-6 py-4 rounded-lg text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all"
                            >
                              <MessageSquare className="w-3.5 h-3.5" />
                              <span>WhatsApp Chat</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-20 bg-white rounded-3xl border border-stone-100 max-w-3xl mx-auto shadow-sm">
                <p className="text-stone-500 text-base">No case studies found in this category.</p>
              </div>
            )}

          </div>
        </section>

        {/* 5. CLIENT TRUST & VERIFIED REVIEW PANEL */}
        <section className="py-20 bg-stone-50 border-t border-stone-100">
          <div className="container-custom">
            
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-[0_15px_40px_rgba(15,61,62,0.02)] border border-stone-200/40 text-left flex flex-col md:flex-row gap-8 items-center">
              
              {/* Left trust ratings */}
              <div className="flex-shrink-0 text-center md:text-left space-y-2 border-b md:border-b-0 md:border-r border-stone-100 pb-6 md:pb-0 md:pr-10">
                <div className="text-5xl font-serif font-bold text-[#0F3D3E] tracking-tight">4.9★</div>
                <div className="flex justify-center md:justify-start text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">Google Customer Rating</p>
                <div className="pt-2 text-stone-400 text-xs">{companyInfo.projectsCompleted}+ Premium Homes Served</div>
              </div>

              {/* Right featured review */}
              <div className="flex-grow space-y-4">
                <blockquote className="text-xs md:text-sm text-stone-600 italic leading-relaxed font-medium">
                  "Exploring Denova's completed case studies gave us so much confidence. We could see the exact color palettes, core plywood qualities, and execution stages before signing the contract. The actual living room woodwork fits perfectly!"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div>
                    <cite className="not-italic text-xs font-bold text-[#0F3D3E] block">
                      Sudhir & Radhika P.
                    </cite>
                    <span className="text-[10px] text-stone-500 font-semibold tracking-wide">
                      Completed 3BHK Resident • Indiranagar, Bengaluru
                    </span>
                  </div>
                  
                  {/* Google Verified Stamp */}
                  <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-[9px] font-bold uppercase px-2 py-0.5 rounded-full">
                    ✓ Google Verified
                  </span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 6. STRONG CONVERSION CTA BANNER */}
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

export default ProjectsPage;
