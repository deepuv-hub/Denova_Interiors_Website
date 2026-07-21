import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  Home, 
  Building2, 
  Castle, 
  Briefcase, 
  Wrench, 
  Key, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  Compass, 
  ShieldCheck, 
  MapPin, 
  PhoneCall, 
  Award, 
  Layers, 
  Clock 
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { companyInfo, testimonials } from '../data/mock';
import { Helmet } from "react-helmet-async";

const iconMap = {
  Home: Home,
  Building2: Building2,
  Castle: Castle,
  Briefcase: Briefcase,
  Wrench: Wrench,
  Key: Key,
};

// Existing High-Quality actual images mapped to a premium fullscreen Ken Burns slider
const heroSlides = [
  {
    image: "/images/landingpagehero.webp",
    heading: "Designing Timeless Luxury Interiors",
    subheading: "Bengaluru's premier home design studio crafting premium, visually immersive, and highly personalized luxury living spaces."
  },
  {
    image: "/images/hero2.webp",
    heading: "Crafted Spaces. Elevated Living.",
    subheading: "Bespoke home interiors featuring European modular systems, German-engineered hardware, and flawless turnkey execution."
  },
  {
    image: "/images/kitchen1.webp",
    heading: "Luxury Modular Kitchens",
    subheading: "Precision-engineered kitchens with high-gloss acrylic finishes, intelligent accessories, and 10-year durability warranties."
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

// Luxury re-theming of services grid mapping
const luxuryServices = [
  {
    id: 1,
    title: "Residential Interiors",
    description: "Bespoke full-home designs tailored to your architectural preferences and luxury lifestyle standard.",
    icon: "Home",
    features: ["Bespoke Living Rooms", "Custom Accent Paneling", "Designer False Ceilings"]
  },
  {
    id: 2,
    title: "Modular Kitchens",
    description: "Precision-engineered kitchens featuring high-gloss finishes, German soft-close fittings, and optimal space planning.",
    icon: "Layers", // Custom mapping for modular kitchen
    features: ["Intelligent Storage Units", "Quartz Countertops", "High-End Acrylic Finishes"]
  },
  {
    id: 3,
    title: "Bespoke Wardrobes",
    description: "Floor-to-ceiling storage systems, premium walk-in wardrobes, and seamless sliding mechanisms.",
    icon: "Castle",
    features: ["Glass & Acrylic Shutters", "Soft-Close Hinges", "Led Drawer Organizers"]
  },
  {
    id: 4,
    title: "Corporate & Offices",
    description: "Premium commercial and workspace environments designed to boost visual identity and productivity.",
    icon: "Briefcase",
    features: ["Executive Boardrooms", "Collaborative Workspaces", "Branded Reception Hubs"]
  },
  {
    id: 5,
    title: "Elegance Renovations",
    description: "Complete design makeover for existing spaces, upgrading structural aesthetics and modern utility layout.",
    icon: "Wrench",
    features: ["Structural Redesigns", "Modern Bathrooms Upgrade", "Updated Paint & Textures"]
  },
  {
    id: 6,
    title: "Turnkey Execution",
    description: "End-to-end hassle-free execution from initial architectural blueprints to final aesthetic styling and site cleanup.",
    icon: "Key",
    features: ["Strict 45-Day Delivery", "Dedicated Site Engineers", "10-Year Solid Warranty"]
  }
];

// Curated selection of actual high-quality showcase projects in Bengaluru
const luxuryProjects = [
  {
    id: 1,
    title: "Modern Minimalist Villa",
    location: "Sarjapur Road, Bangalore",
    category: "Villa",
    image: "/images/landingpagehero.webp",
    area: "3,800 sq.ft",
    features: "Marble walls & dynamic fluted partitions"
  },
  {
    id: 2,
    title: "Contemporary 3BHK Residence",
    location: "Whitefield, Bangalore",
    category: "Apartment",
    image: "/images/living2.webp",
    area: "1,850 sq.ft",
    features: "Sleek wooden paneling & hidden LED lines"
  },
  {
    id: 3,
    title: "High-Gloss Modular Kitchen",
    location: "HSR Layout, Bangalore",
    category: "Kitchen",
    image: "/images/kitchen1.webp",
    area: "Premium Acrylic",
    features: "Quartz counters & bespoke soft-close drawers"
  },
  {
    id: 4,
    title: "Luxury Master Bedroom Suite",
    location: "Koramangala, Bangalore",
    category: "Bedroom",
    image: "/images/bedroom3.webp",
    area: "Master Suite",
    features: "Floor-to-ceiling sliding wardrobe & beige headboard"
  }
];

const brandStats = [
  { number: "150+", label: "Completed Luxury Homes", desc: "Delivered strictly within timeline" },
  { number: "10-Year", label: "Material Warranty", desc: "Assuring authentic German hardware" },
  { number: "100%", label: "Transparent Estimates", desc: "Zero hidden costs, zero surprises" },
  { number: "45-Day", label: "On-Time Handover", desc: "Or we pay your rent penalty" }
];

const processSteps = [
  {
    num: "01",
    title: "Creative Consultation",
    desc: "We analyze your lifestyle preferences, measure site layouts, and detail budget boundaries.",
  },
  {
    num: "02",
    title: "Concept & 3D Renders",
    desc: "Our architects model beautiful, highly realistic 3D designs showing colors, materials, and lights.",
  },
  {
    num: "03",
    title: "Material Curation",
    desc: "Touch and select plywood, premium laminates, acrylics, and hardware at our modern studio.",
  },
  {
    num: "04",
    title: "Precision Fabrication",
    desc: "Custom components are machine-finished with factory edge-banding to avoid manual errors.",
  },
  {
    num: "05",
    title: "Turnkey Reveal",
    desc: "Site installation by certified engineers, final deep cleanup, and formal luxury handover."
  }
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <>
      <Helmet>
        <title>Luxury Interior Designers in Bangalore | Denova Creations</title>
        <meta
          name="description"
          content="Denova Creations is Bengaluru's premier home interior design studio. Specialized in bespoke modular kitchens, luxury wardrobes, and complete turnkey residential designs."
        />
        <link rel="canonical" href="https://denovacreations.com/" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Denova Creations",
            url: "https://denovacreations.com",
            logo: "https://denovacreations.com/images/logo-primary.png",
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
              "Bespoke home interior designers in Bangalore specializing in custom modular kitchens, wardrobes, false ceilings, and turnkey luxury interiors."
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
        
        {/* 1. CINEMATIC FULLSCREEN HERO SLIDER */}
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
              {/* Premium review status badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-white mb-6 animate-fade-in">
                <span className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </span>
                <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider">
                  Trusted Luxury Home Design • {companyInfo.rating}/5 Rating
                </span>
              </div>

              {/* Dynamic slide heading */}
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] font-serif tracking-tight min-h-[110px] md:min-h-auto">
                {heroSlides[currentSlide].heading}
              </h1>

              {/* Dynamic slide description */}
              <p className="text-base md:text-lg text-stone-300 mb-10 leading-relaxed max-w-xl transition-all duration-500">
                {heroSlides[currentSlide].subheading}
              </p>

              {/* Luxury Styled CTA buttons */}
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="bg-[#E8D8C4] hover:bg-white text-[#0F3D3E] font-bold px-6 py-5 rounded-lg text-xs md:text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:scale-[1.03] flex items-center gap-2">
                    <span>Book Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>

                <Link to="/projects">
                  <Button className="bg-transparent hover:bg-white/10 border border-white/30 text-white font-bold px-6 py-5 rounded-lg text-xs md:text-sm uppercase tracking-wider transition-all duration-300 shadow-md">
                    View Showcase
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

        {/* 2. SOPHISTICATED BRAND INTRODUCTION */}
        <section className="py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Brand Statement */}
              <div className="lg:col-span-7 text-left space-y-6">
                <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                  Bespoke Architectural Craftsmanship
                </span>
                
                <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#0F3D3E] leading-[1.15] tracking-tight">
                  We shape environments that embody luxury, soul, and utility.
                </h2>
                
                <p className="text-stone-600 text-sm md:text-base leading-relaxed max-w-2xl">
                  At Denova Creations, we believe your residence should represent a sanctuary curated around your individual story. As Bengaluru's premier turnkey home interior studio, we blend high-end custom furniture, German precision edge-banding, and exquisite architectural layouts to deliver spaces of absolute distinction.
                </p>
                
                <div className="pt-4 flex flex-wrap gap-6 items-center">
                  <div className="flex items-center gap-2 text-stone-700 font-bold text-xs uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-[#0F3D3E]" />
                    <span>German Factory Finish</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-700 font-bold text-xs uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-[#0F3D3E]" />
                    <span>No Sub-Contracting</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-700 font-bold text-xs uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-[#0F3D3E]" />
                    <span>10-Year Solid Warranty</span>
                  </div>
                </div>
              </div>

              {/* Right Side Visual Block */}
              <div className="lg:col-span-5 relative group">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border-4 border-white">
                  <img
                    src="/images/hero2.webp"
                    alt="Denova Creations design studio"
                    className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-stone-950/20"></div>
                </div>
                {/* Decorative border box */}
                <div className="absolute -bottom-4 -left-4 w-40 h-40 border-l-4 border-b-4 border-[#E8D8C4] rounded-bl-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. FEATURED SERVICES (MODERN LUXURY CARDS) */}
        <section className="py-20 md:py-24 bg-white border-t border-stone-100">
          <div className="container-custom">
            <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
              <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                Designing Distinctive Spaces
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0F3D3E] font-serif leading-tight">
                Our Architectural Expertise
              </h2>
              <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
                From luxury living rooms to high-performance modular kitchens, we bring your vision to life with complete design precision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {luxuryServices.map((service) => {
                let IconComponent = iconMap[service.icon];
                if (!IconComponent) {
                  // Fallback icon just in case
                  IconComponent = Layers;
                }
                return (
                  <Link key={service.id} to="/services" className="group block h-full">
                    <Card className="border border-stone-100 bg-[#FAF8F5] hover:border-[#E8D8C4] rounded-3xl hover:shadow-[0_15px_40px_rgba(15,61,62,0.04)] hover:-translate-y-1 transition-all duration-500 h-full flex flex-col overflow-hidden">
                      <CardContent className="p-8 h-full flex flex-col flex-grow text-left">
                        {/* Circle Icon Container */}
                        <div className="w-14 h-14 bg-white text-[#0F3D3E] border border-stone-100/50 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#0F3D3E] group-hover:text-white transition-colors duration-500">
                          <IconComponent className="w-6 h-6" />
                        </div>

                        {/* Title */}
                        <h3 className="text-lg md:text-xl font-bold font-serif text-[#0F3D3E] mb-3 group-hover:text-stone-900 transition-colors">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs text-stone-500 mb-6 leading-relaxed flex-grow">
                          {service.description}
                        </p>

                        {/* Feature bullets */}
                        <ul className="space-y-2 mb-6 border-t border-stone-200/40 pt-4">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2.5 text-xs text-stone-600 font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#0F3D3E]" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Explore link */}
                        <div className="mt-auto inline-flex items-center gap-2 text-[#0F3D3E] group-hover:text-stone-950 font-bold text-xs uppercase tracking-wider">
                          <span>Explore Layouts</span>
                          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Link to="/services">
                <Button className="border-2 border-[#0F3D3E] text-[#0F3D3E] hover:bg-[#0F3D3E] hover:text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition duration-300">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 4. FEATURED PROJECTS SHOWCASE (PREMIUM HOVER ZOOM) */}
        <section className="py-20 md:py-24 bg-stone-50 border-t border-stone-100">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6 text-left">
              <div>
                <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block mb-2">
                  Exquisite Portfolios
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-[#0F3D3E] font-serif tracking-tight leading-none">
                  Completed Projects
                </h2>
              </div>
              <Link to="/projects">
                <Button className="bg-[#0F3D3E] hover:bg-[#0B2C2D] text-[#E8D8C4] hover:text-white font-bold px-6 py-3 rounded-lg text-xs uppercase tracking-wider transition duration-300">
                  View Full Portfolio
                </Button>
              </Link>
            </div>

            {/* Showcase Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {luxuryProjects.map((project) => (
                <Link key={project.id} to="/projects" className="block relative group overflow-hidden rounded-3xl shadow-lg border border-stone-200/20 bg-white">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={`Interior project by Denova Creations - ${project.title}`}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      style={{ transitionDuration: '800ms' }}
                      loading="lazy"
                    />
                    {/* Shadow overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-90 transition-opacity duration-300"></div>
                  </div>

                  {/* Absolute positioned project metadata */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-left z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-[#E8D8C4] text-[#0F3D3E] text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                        {project.category}
                      </span>
                      <span className="text-stone-300 text-xs flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#E8D8C4]" />
                        <span>{project.location}</span>
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white font-serif mb-1 group-hover:text-[#E8D8C4] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-stone-400 text-xs tracking-wide">
                      {project.area} • {project.features}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 5. MINIMALIST WHY CHOOSE US (LUXURY STATS GRID) */}
        <section className="py-20 md:py-24 bg-[#0A2526] text-white relative z-10">
          <div className="container-custom">
            <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
              <span className="text-[#E8D8C4] font-bold tracking-widest uppercase text-xs block">
                The Denova Advantage
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white font-serif leading-tight">
                Architectural Standards
              </h2>
              <p className="text-stone-400 text-xs md:text-sm leading-relaxed max-w-lg mx-auto">
                We implement structural guidelines, strict material audits, and direct site supervision to deliver flawless luxury homes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
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

        {/* 6. DESIGN JOURNEY PROCESS (LUXURY STEPS) */}
        <section className="py-20 md:py-24 bg-white border-t border-stone-100">
          <div className="container-custom">
            <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
              <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                Orderly Timelines
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0F3D3E] font-serif leading-tight">
                Our Design Journey
              </h2>
              <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
                We make structural interior design a simple, enjoyable, and completely transparent step-by-step experience.
              </p>
            </div>

            {/* Steps Workflow Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {processSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col text-left space-y-4 relative group">
                  {/* Step badge */}
                  <div className="text-4xl md:text-5xl font-bold font-serif text-[#E8D8C4]/60 group-hover:text-[#E8D8C4] transition-colors duration-300">
                    {step.num}
                  </div>

                  <h3 className="text-base md:text-lg font-bold text-[#0F3D3E] font-serif tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-xs text-stone-500 leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Desktop connector line */}
                  {idx < 4 && (
                    <div className="hidden lg:block absolute top-6 left-[80%] w-full h-[1px] bg-stone-200 -z-10 group-hover:bg-[#E8D8C4] transition-colors duration-500"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. PREMIUM HOMEOWNER TESTIMONIALS (CAROUSEL) */}
        <section className="py-20 md:py-24 bg-stone-50 border-t border-stone-100 select-none">
          <div className="container-custom">
            <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
              <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                Verified Reviews
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0F3D3E] font-serif leading-tight">
                Client Testimonials
              </h2>
            </div>

            {/* Testimonials Slider Body */}
            <div className="max-w-4xl mx-auto relative bg-white p-8 md:p-12 rounded-3xl shadow-[0_15px_40px_rgba(15,61,62,0.03)] border border-stone-200/40 text-left flex flex-col md:flex-row gap-8 items-center">
              
              {/* Client Face Frame */}
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#E8D8C4] flex-shrink-0">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Review Text Area */}
              <div className="flex-grow space-y-4">
                {/* 5 stars */}
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <blockquote className="text-sm md:text-base text-stone-700 italic leading-relaxed font-medium">
                  "{testimonials[activeTestimonial].text}"
                </blockquote>

                <div>
                  <cite className="not-italic text-sm font-bold text-[#0F3D3E] block">
                    {testimonials[activeTestimonial].name}
                  </cite>
                  <span className="text-[11px] text-stone-500 font-semibold tracking-wide">
                    {testimonials[activeTestimonial].projectType} • {testimonials[activeTestimonial].location}
                  </span>
                </div>
              </div>

              {/* Controls inside frame */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-4 bg-white px-4 py-2.5 rounded-full border border-stone-200/50 shadow-md">
                <button
                  onClick={handlePrevTestimonial}
                  className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-[#FAF7F2] hover:text-[#0F3D3E] transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextTestimonial}
                  className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-[#FAF7F2] hover:text-[#0F3D3E] transition-colors"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 8. BRAND CLOSING CTA SECTION */}
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

      </div>
    </>
  );
};

export default HomePage;
