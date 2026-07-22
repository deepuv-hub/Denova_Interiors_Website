import React, { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { Button } from "../components/ui/button";
import { 
  ArrowRight, 
  MapPin, 
  Clock, 
  Maximize2, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  MessageSquare, 
  Compass, 
  PhoneCall,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const [selectedImgIndex, setSelectedImgIndex] = useState(null);

  // Look up project by slug
  const project = projects.find((p) => p.slug === slug);

  // Keyboard navigation for gallery lightbox
  const handleNextImage = useCallback(() => {
    if (selectedImgIndex === null || !project) return;
    setSelectedImgIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  }, [selectedImgIndex, project]);

  const handlePrevImage = useCallback(() => {
    if (selectedImgIndex === null || !project) return;
    setSelectedImgIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  }, [selectedImgIndex, project]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImgIndex === null) return;
      if (e.key === "ArrowRight") handleNextImage();
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "Escape") setSelectedImgIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImgIndex, handleNextImage, handlePrevImage]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedImgIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImgIndex]);

  // Fallback if project is not found
  if (!project) {
    return (
      <div className="container-custom py-24 text-center min-h-[50vh] flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-stone-800 font-serif mb-4">
          Project Not Found
        </h2>
        <p className="text-stone-600 mb-6">
          The requested interior design project details could not be located.
        </p>
        <Link to="/portfolio">
          <Button className="bg-[#0F3D3E] hover:bg-[#0B2C2D] text-[#E8D8C4] font-bold px-6 py-3 rounded-lg">
            Back to Portfolio
          </Button>
        </Link>
      </div>
    );
  }

  // SEO configuration
  const title = `${project.title} | ${project.style} Style Portfolio | Denova Creations`;
  const description = `${project.title} by Denova Creations in Bangalore. A luxury ${project.style.toLowerCase()} ${project.category.toLowerCase()} design featuring custom execution. Explore challenges, materials, and highlights.`;
  const pageUrl = `https://denovacreations.com/projects/${project.slug}`;
  const firstImageAbsolute = project.images?.[0] ? `https://denovacreations.com${project.images[0]}` : "https://denovacreations.com/images/hero2.webp";

  // Schema Markup
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "image": project.images?.map(img => `https://denovacreations.com${img}`),
    "creator": {
      "@type": "Organization",
      "name": "Denova Creations",
      "url": "https://denovacreations.com"
    },
    "url": pageUrl
  };

  // Find related projects (same category, excluding current)
  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="bg-[#FAF8F5] antialiased">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={firstImageAbsolute} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={firstImageAbsolute} />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-[65vh] flex items-center bg-[#071F20] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover opacity-90 scale-102"
          />
          <div className="absolute inset-0 bg-[#051819]/75 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 w-full container-custom mt-8 text-left">
          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-[#E8D8C4] text-[#0F3D3E] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                {project.category} Showcase
              </span>
              <span className="text-[#E8D8C4] text-xs font-semibold tracking-wider uppercase">
                {project.style} Style
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-serif tracking-tight">
              {project.title}
            </h1>

            <p className="text-stone-300 text-sm md:text-base max-w-2xl font-light">
              A bespoke luxury transformation completed in {project.location} featuring custom specifications and spatial engineering.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SPECIFICATION CARDS BAR */}
      <section className="relative z-20 -mt-12 max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl border border-stone-200/40 p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-stone-700">
          <div className="space-y-1 text-center md:text-left md:border-r border-stone-100 last:border-0 pr-4">
            <span className="text-stone-400 uppercase tracking-widest text-[9px] font-bold block">Location</span>
            <span className="text-stone-800 font-bold text-sm md:text-base flex items-center justify-center md:justify-start gap-1">
              <MapPin className="w-4 h-4 text-[#C8A35F]" />
              {project.location}
            </span>
          </div>
          <div className="space-y-1 text-center md:text-left md:border-r border-stone-100 last:border-0 pr-4">
            <span className="text-stone-400 uppercase tracking-widest text-[9px] font-bold block">Property Type</span>
            <span className="text-stone-800 font-bold text-sm md:text-base block">{project.propertyType}</span>
          </div>
          <div className="space-y-1 text-center md:text-left md:border-r border-stone-100 last:border-0 pr-4">
            <span className="text-stone-400 uppercase tracking-widest text-[9px] font-bold block">Carpet Area</span>
            <span className="text-stone-800 font-bold text-sm md:text-base block">{project.area}</span>
          </div>
          <div className="space-y-1 text-center md:text-left">
            <span className="text-stone-400 uppercase tracking-widest text-[9px] font-bold block">Completion</span>
            <span className="text-stone-800 font-bold text-sm md:text-base flex items-center justify-center md:justify-start gap-1">
              <Clock className="w-4 h-4 text-[#C8A35F]" />
              {project.completionTime} ({project.year})
            </span>
          </div>
        </div>
      </section>

      {/* 3. PROJECT OVERVIEW & CLIENT REQUIREMENTS */}
      <section className="py-16 md:py-24 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Overview */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-[#C8A35F] text-[10px] font-bold tracking-widest uppercase block">Design Narrative</span>
              <h2 className="text-3xl font-bold font-serif text-[#0F3D3E] tracking-tight">Project Overview</h2>
            </div>
            <p className="text-stone-600 text-base md:text-lg leading-relaxed font-light">
              {project.description}
            </p>
            <div className="p-6 bg-[#FAF7F2] rounded-3xl border border-[#E8D8C4]/20 space-y-4">
              <div className="flex items-center gap-2 text-[#0F3D3E] font-bold text-xs uppercase tracking-wider">
                <Compass className="w-4 h-4 text-[#C8A35F]" />
                <span>Color & Styling Board</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-600">
                <div>
                  <span className="font-semibold text-stone-700 block">Primary Tones:</span>
                  {project.colorPalette?.tones}
                </div>
                <div>
                  <span className="font-semibold text-stone-700 block">Accents:</span>
                  {project.colorPalette?.accents}
                </div>
                <div>
                  <span className="font-semibold text-stone-700 block">Atmosphere:</span>
                  {project.colorPalette?.mood}
                </div>
              </div>
            </div>
          </div>

          {/* Client Requirements */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-stone-200/40 shadow-sm text-left space-y-5">
            <div className="flex items-center gap-3">
              <div className="bg-[#E8D8C4]/40 p-2.5 rounded-2xl">
                <Sparkles className="w-5 h-5 text-[#0F3D3E]" />
              </div>
              <div>
                <span className="text-stone-400 text-[9px] font-bold uppercase tracking-wider block">Briefing Context</span>
                <h3 className="font-bold text-lg text-[#0F3D3E]">Client Requirements</h3>
              </div>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed font-light italic">
              "{project.clientGoal}"
            </p>
            <div className="border-t border-stone-100 pt-4">
              <span className="text-stone-400 text-[9px] font-bold uppercase tracking-wider block">Estimated Project Budget</span>
              <span className="text-[#0F3D3E] text-xl font-bold tracking-tight">{project.budget}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DESIGN CHALLENGES & SOLUTION SIDE-BY-SIDE */}
      <section className="py-16 md:py-20 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Design Challenges */}
            <div className="space-y-4 text-left border-b md:border-b-0 md:border-r border-stone-850 pb-8 md:pb-0 md:pr-12">
              <span className="text-[#E8D8C4] text-[9px] font-bold tracking-widest uppercase block">The Obstacle</span>
              <h3 className="text-2xl font-bold font-serif text-white tracking-tight">Design Challenges</h3>
              <p className="text-stone-300 text-sm md:text-base leading-relaxed font-light">
                {project.designChallenges}
              </p>
            </div>

            {/* Our Solution */}
            <div className="space-y-4 text-left">
              <span className="text-[#E8D8C4] text-[9px] font-bold tracking-widest uppercase block">The Resolution</span>
              <h3 className="text-2xl font-bold font-serif text-white tracking-tight">Our Solution & Outcome</h3>
              <p className="text-stone-300 text-sm md:text-base leading-relaxed font-light">
                {project.projectOutcome}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TECHNICAL SPECIFICATIONS & MATERIALS */}
      <section className="py-16 md:py-24 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Materials & Supervision */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-[#C8A35F] text-[10px] font-bold tracking-widest uppercase block">Material Integrity</span>
            <h2 className="text-3xl font-bold font-serif text-[#0F3D3E] tracking-tight">Materials & Supervision</h2>
            <div className="space-y-4 text-stone-600 text-sm md:text-base leading-relaxed font-light">
              <p>
                We curate materials that balance longevity and beauty. For this layout, the selected palette includes:
              </p>
              <div className="bg-white p-6 rounded-3xl border border-stone-200/40 shadow-xs">
                <span className="text-stone-800 font-bold block text-sm mb-1">Material Palette:</span>
                <span className="text-[#0F3D3E] font-medium text-sm">{project.materialsUsed}</span>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-stone-200/40 shadow-xs">
                <span className="text-stone-800 font-bold block text-sm mb-1">Quality Supervision:</span>
                <span className="text-[#0F3D3E] font-medium text-sm">{project.supervision}</span>
              </div>
            </div>
          </div>

          {/* Execution stages */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-[#C8A35F] text-[10px] font-bold tracking-widest uppercase block">Work Breakdown</span>
            <h2 className="text-3xl font-bold font-serif text-[#0F3D3E] tracking-tight">Technical Stages</h2>
            <div className="space-y-3">
              {project.scope?.map((stage, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl border border-stone-200/40 shadow-xs flex items-center gap-3">
                  <div className="bg-[#0F3D3E] text-[#E8D8C4] text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </div>
                  <span className="text-stone-700 text-sm font-semibold">{stage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROJECT HIGHLIGHTS */}
      <section className="py-16 bg-[#FAF7F2] border-y border-[#E5DED3]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <div className="space-y-2">
            <span className="text-[#C8A35F] text-[10px] font-bold tracking-widest uppercase block">Key Benefits</span>
            <h2 className="text-3xl font-bold font-serif text-[#0F3D3E] tracking-tight">Project Highlights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {project.highlights?.map((highlight, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-stone-200/20 shadow-xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <p className="text-stone-700 text-sm leading-relaxed font-light">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE IMAGE GALLERY */}
      <section className="py-16 md:py-24 max-w-6xl mx-auto px-4">
        <div className="text-center space-y-3 mb-12">
          <span className="text-[#C8A35F] text-[10px] font-bold tracking-widest uppercase block">Visual Walkthrough</span>
          <h2 className="text-3xl font-bold font-serif text-[#0F3D3E] tracking-tight">Project Gallery</h2>
          <p className="text-stone-500 text-xs md:text-sm max-w-md mx-auto">
            Click any snapshot to explore detailed design explanations and navigate slide-by-slide specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.images?.map((imagePath, idx) => (
            <div 
              key={idx}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-md border-2 border-white cursor-zoom-in"
              onClick={() => setSelectedImgIndex(idx)}
            >
              <img
                src={imagePath}
                alt={`${project.title} detailed snapshot ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-950/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-full shadow-md text-[#0F3D3E]">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. LEGACY GALLERY OVERLAY LIGHTBOX */}
      {selectedImgIndex !== null && (
        <div className="fixed inset-0 z-[99999] bg-stone-950/95 backdrop-blur-sm flex flex-col justify-between p-4 md:p-8 select-none">
          {/* Top navigation controls */}
          <div className="flex justify-between items-center text-white w-full max-w-7xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
              {project.title} • {selectedImgIndex + 1} of {project.images.length}
            </span>
            <button 
              onClick={() => setSelectedImgIndex(null)}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Central image display */}
          <div className="relative flex justify-center items-center flex-grow max-w-5xl w-full mx-auto my-4">
            {/* Left Button */}
            <button
              onClick={handlePrevImage}
              className="absolute left-0 md:-left-16 p-3 bg-white/10 hover:bg-white/20 rounded-full transition text-white z-20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Active Image */}
            <div className="relative max-h-[60vh] md:max-h-[70vh] max-w-full overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
              <img
                src={project.images[selectedImgIndex]}
                alt="Active gallery preview"
                className="max-h-[60vh] md:max-h-[70vh] w-auto max-w-full object-contain mx-auto"
              />
            </div>

            {/* Right Button */}
            <button
              onClick={handleNextImage}
              className="absolute right-0 md:-right-16 p-3 bg-white/10 hover:bg-white/20 rounded-full transition text-white z-20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom explanations block */}
          <div className="bg-stone-900/60 border border-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 max-w-3xl w-full mx-auto text-left text-white space-y-1">
            <span className="text-[#E8D8C4] text-[9px] font-bold uppercase tracking-widest block">Interior Explanation</span>
            <p className="text-stone-200 text-xs md:text-sm leading-relaxed font-light">
              {project.explanations?.[selectedImgIndex % project.explanations.length] || "Details of spatial carpentry, layout lighting, and execution quality checks."}
            </p>
          </div>
        </div>
      )}

      {/* 9. RELATED PROJECTS */}
      {relatedProjects.length > 0 && (
        <section className="py-16 md:py-24 bg-[#FAF8F4] border-t border-stone-200/50">
          <div className="container-custom">
            <div className="text-center space-y-2 mb-12">
              <span className="text-[#C8A35F] text-[10px] font-bold tracking-widest uppercase block">Explore More Designs</span>
              <h2 className="text-3xl font-bold font-serif text-[#0F3D3E] tracking-tight">Related Interior Projects</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedProjects.map((item) => (
                <Link
                  key={item.id}
                  to={`/projects/${item.slug}`}
                  className="bg-white border border-stone-200/30 rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300 group block text-left"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-950/20 transition-all duration-300"></div>
                  </div>

                  <div className="p-6 space-y-2">
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-stone-400">
                      <span>{item.category}</span>
                      <span className="text-[#C8A35F]">{item.style}</span>
                    </div>
                    <h3 className="font-bold text-stone-800 group-hover:text-[#0F3D3E] transition-colors text-base font-serif leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-500 font-light flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#C8A35F]" />
                      {item.location}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. STRONG CONSULTATION CTA */}
      <section className="py-20 bg-[#0F3D3E] text-white select-none">
        <div className="container-custom text-center max-w-3xl mx-auto space-y-6">
          <span className="text-[#E8D8C4] text-xs font-bold uppercase tracking-widest block">Let's Craft Yours</span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif leading-tight">
            Want a Similar Exquisite Design for Your Home?
          </h2>
          <p className="text-stone-300 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
            Get personalized interior solutions tailored precisely to your home layouts, lifestyle goals, and budget benchmarks.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-[#E8D8C4] hover:bg-white text-[#0F3D3E] font-bold px-8 py-6 rounded-xl text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 transition duration-300 hover:scale-[1.02]">
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <a href="tel:+919164011181">
              <Button className="bg-transparent hover:bg-white/10 border border-white/30 text-white font-bold px-8 py-6 rounded-xl text-xs uppercase tracking-wider transition duration-300">
                Call Our Designers
              </Button>
            </a>
          </div>
          <p className="text-[10px] text-stone-400 pt-2">
            No obligation consult • Turnkey transparent quotes • 10-Year Warranty execution
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;
