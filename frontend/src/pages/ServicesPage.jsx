import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Home, 
  Building2, 
  Castle, 
  Briefcase, 
  Wrench, 
  Key, 
  Star, 
  Layers, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  MessageSquare, 
  PhoneCall, 
  Sparkles, 
  Award,
  ChevronRight
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
  Layers: Layers
};

// Curated 4 major luxury interior service categories with real images
const luxuryServices = [
  {
    id: 1,
    title: "Residential & Apartments",
    description: "Bespoke home interiors customized to represent your lifestyle. We shape visual, spacious, and highly elegant living areas and master bedrooms.",
    image: "/images/landingpagehero.webp",
    features: ["Bespoke Living Rooms", "Wood Fluting & Panel Accents", "Designer False Ceilings", "Smart Space Layout Planning", "Premium TV Entertainment Units"],
    ctaText: "Explore Residential Projects",
    ctaLink: "/projects",
    startingRate: "₹1,400/sq.ft"
  },
  {
    id: 2,
    title: "Modular Kitchen Systems",
    description: "Precision German-engineered modular kitchens. Engineered for optimal ergonomic utility, smart storage storage, and lifelong build durability.",
    image: "/images/kitchen1.webp",
    features: ["L-Shaped & Parallel layouts", "Quartz & Italian Marble counters", "German Hafele Soft-Close fittings", "High-Gloss Acrylic finishes", "Custom Pull-out Drawers & Pantries"],
    ctaText: "View Kitchen Portfolio",
    ctaLink: "/modular-kitchen-bangalore",
    startingRate: "₹1,600/sq.ft"
  },
  {
    id: 3,
    title: "Bespoke Wardrobes & Bedroom Suites",
    description: "Floor-to-ceiling custom storage layouts, walk-in closets, and peaceful sanctuaries built to support your rest and storage requirements.",
    image: "/images/bedroom3.webp",
    features: ["Sleek Sliding & Openable Wardrobes", "Durable Ply-Laminate lofts", "Glass & Mirror front panels", "Integrated LED drawer organizers", "Coordinated Headboards & Bed frames"],
    ctaText: "View Bedroom Projects",
    ctaLink: "/projects",
    startingRate: "₹1,300/sq.ft"
  },
  {
    id: 4,
    title: "Corporate & Executive Offices",
    description: "Architectural commercial environments crafted to enhance corporate visual identity, work collaboration, and professional efficiency.",
    image: "/images/living2.webp",
    features: ["Executive Boardrooms", "Collaborative open workspaces", "Branded Reception Hubs", "Acoustic Wall Paneling", "Strict commercial timeline handovers"],
    ctaText: "Explore Commercial Work",
    ctaLink: "/projects",
    startingRate: "₹1,500/sq.ft"
  }
];

const whyChooseDenova = [
  {
    title: "Bespoke Customization",
    desc: "Every layout is drawn from scratch around your personal style. No generic grids, no repetitive styles."
  },
  {
    title: "German-Engineered Materials",
    desc: "Machine edge-banding and core hardware systems powered by Hettich, Hafele, and authentic Century Ply."
  },
  {
    title: "100% Transparent Quotations",
    desc: "Fully itemized cost sheets detailing precise materials, thicknesses, brand tags, and labor dimensions."
  },
  {
    title: "Photorealistic 3D Renders",
    desc: "See exact lights, textures, paint colors, and layouts before factory cutting, eliminating execution errors."
  },
  {
    title: "Dedicated Site Engineers",
    desc: "Rigorous direct onsite supervision by professional civil engineers, guaranteeing flawless craftsmanship."
  },
  {
    title: "On-Time Handover Penalty",
    desc: "Strict 45-day factory-to-site delivery timelines. We pay your rent penalties in case of execution delays."
  }
];

const processSteps = [
  {
    num: "01",
    title: "Lifestyle Consultation",
    desc: "Initial spatial survey, lifestyle profiling, timeline requirements, and budget parameter coordination."
  },
  {
    num: "02",
    title: "Concept Blueprinting",
    desc: "Spatial layout options, mood boards, and aesthetic styling plans drafted for design review."
  },
  {
    num: "03",
    title: "Photorealistic 3Ds",
    desc: "Curating textures, lights, and color coordination in photorealistic 3D models before cutting."
  },
  {
    num: "04",
    title: "Material & Studio Curation",
    desc: "Touch and select plywood grades, finishes, laminates, and smart handles directly at our studio."
  },
  {
    num: "05",
    title: "German Factory Fabrication",
    desc: "Precision machining, automated edge-banding, and visual quality control checks in the plant."
  },
  {
    num: "06",
    title: "Turnkey Installation & Reveal",
    desc: "Supervised site installation, deep cleanup, and formal luxury handover of your finished home."
  }
];

// Interactive Portfolio Project Previews
const portfolioPreviews = [
  {
    id: 1,
    title: "Modern Minimalist Villa",
    category: "Residential",
    desc: "Timeless living space detailed with wood fluting & custom Italian marble backdrops.",
    image: "/images/landingpagehero.webp",
    link: "/projects"
  },
  {
    id: 2,
    title: "Acrylic Modular Kitchen",
    category: "Kitchen",
    desc: "High-gloss parallel kitchen featuring premium quartz counters & intelligent pull-outs.",
    image: "/images/kitchen1.webp",
    link: "/modular-kitchen-bangalore"
  },
  {
    id: 3,
    title: "Luxury Bedroom Wardrobes",
    category: "Residential",
    desc: "Floor-to-ceiling sliding wardrobe suite crafted with glass doors & custom vanity setups.",
    image: "/images/bedroom3.webp",
    link: "/projects"
  },
  {
    id: 4,
    title: "Executive Collaborative Office",
    category: "Commercial",
    desc: "Premium office layout featuring wooden acoustic panels & modular open desks.",
    image: "/images/living2.webp",
    link: "/projects"
  }
];

const ServicesPage = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? portfolioPreviews 
    : portfolioPreviews.filter(p => p.category === filter);

  return (
    <>
      <Helmet>
        <title>Luxury Interior Design Services Bangalore | Denova Creations</title>
        <meta
          name="description"
          content="Explore bespoke interior design services in Bangalore. We specialize in modular kitchens, wardrobes, living rooms, and complete turnkey home interiors."
        />
        <link rel="canonical" href="https://denovacreations.com/services" />
        
        {/* Services Page Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Denova Creations",
              "image": "https://denovacreations.com/images/hero2.webp",
              "telephone": "+91-9164466606",
              "priceRange": "₹₹₹",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "373/2, Begur Hulimavu Road",
                "addressLocality": "Bengaluru",
                "postalCode": "560114",
                "addressCountry": "IN"
              }
            },
            "serviceType": "Interior Design Services",
            "areaServed": "Bangalore",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Interior Design Catalog",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Residential Interior Design"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Modular Kitchen Systems"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Bespoke Wardrobe Fabrication"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <div className="bg-[#FAF8F5] text-stone-800 antialiased min-h-screen">

        {/* 1. PREMIUM HERO SECTION */}
        <section className="relative h-[65vh] flex items-center bg-[#071F20] overflow-hidden select-none">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/kitchen1.webp"
              alt="Luxury modular kitchen by Denova Creations"
              className="w-full h-full object-cover scale-102 opacity-95 transition-transform duration-1000"
            />
            {/* Elegant overlay to highlight typography and text contrast */}
            <div className="absolute inset-0 bg-[#051819]/80 backdrop-blur-[1px]"></div>
          </div>

          <div className="relative z-10 w-full container-custom mt-8">
            <div className="max-w-3xl text-left space-y-5 animate-fade-in-up">
              <span className="text-[#E8D8C4] font-bold tracking-widest uppercase text-xs block">
                Our Capabilities
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-serif tracking-tight">
                Luxury Interiors Designed Around Your <span className="text-[#E8D8C4]">Lifestyle.</span>
              </h1>
              
              <p className="text-stone-300 text-sm md:text-base leading-relaxed max-w-xl">
                Bengaluru's premier home design studio delivering exquisite modular kitchens, custom wardrobes, false ceilings, and premium turnkey residential spaces.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="bg-[#E8D8C4] hover:bg-white text-[#0F3D3E] font-bold px-6 py-5 rounded-lg text-xs md:text-sm uppercase tracking-wider transition-all duration-300 shadow-md flex items-center gap-2 hover:scale-[1.02]">
                    <span>Book Free Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button className="bg-transparent hover:bg-white/10 border border-white/30 text-white font-bold px-6 py-5 rounded-lg text-xs md:text-sm uppercase tracking-wider transition-all duration-300">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. TRUST STATS STRIP */}
        <section className="py-8 bg-white border-b border-stone-150">
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center items-center">
              <div className="space-y-1">
                <div className="text-2xl md:text-3xl font-bold font-serif text-[#0F3D3E]">{companyInfo.projectsCompleted}+</div>
                <div className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">Luxury Turned Keys</div>
              </div>
              <div className="space-y-1 border-l border-stone-100">
                <div className="text-2xl md:text-3xl font-bold font-serif text-[#0F3D3E]">German</div>
                <div className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">Edge-Band Finishes</div>
              </div>
              <div className="space-y-1 border-l border-stone-100">
                <div className="text-2xl md:text-3xl font-bold font-serif text-[#0F3D3E]">10-Year</div>
                <div className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">Solid Warranty</div>
              </div>
              <div className="space-y-1 border-l border-stone-100">
                <div className="text-2xl md:text-3xl font-bold font-serif text-[#0F3D3E]">{companyInfo.deliveryTimeline}</div>
                <div className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">Guaranteed Handover</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CORE SERVICES CENTERPIECE (ALTERNATING EDITORIAL SECTION) */}
        <section className="py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden">
          <div className="container-custom">
            
            <div className="text-center mb-20 max-w-2xl mx-auto space-y-3">
              <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                Bespoke Capabilities
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F3D3E] font-serif tracking-tight">
                Our Creative Expertise
              </h2>
              <p className="text-stone-500 text-xs md:text-sm">
                From luxury apartments to modern modular systems, we craft premium environments matching absolute technical precision.
              </p>
            </div>

            {/* Alternating Layout */}
            <div className="space-y-24 md:space-y-32">
              {luxuryServices.map((service, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div 
                    key={service.id} 
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center`}
                  >
                    {/* Visual Card Column */}
                    <div className={`lg:col-span-6 relative group ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                      <div className="relative rounded-3xl overflow-hidden aspect-[16/10] shadow-xl border-4 border-white z-10">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-103 duration-700 transition-transform"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-stone-950/10"></div>
                      </div>
                      
                      {/* Pricing Tag Overlay */}
                      <div className="absolute -bottom-4 -right-4 bg-[#0F3D3E] text-[#E8D8C4] px-5 py-3 rounded-2xl shadow-lg z-20 border border-white/10 text-left">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-[#E8D8C4]/75 block">Rates From</span>
                        <span className="text-base md:text-lg font-bold font-serif">{service.startingRate}</span>
                      </div>
                      
                      {/* Visual border boxes */}
                      <div className={`absolute -bottom-4 -left-4 w-40 h-40 border-l-4 border-b-4 border-[#E8D8C4] rounded-bl-3xl z-0 ${isEven ? 'block' : 'hidden lg:block'}`}></div>
                    </div>

                    {/* Text Details Column */}
                    <div className={`lg:col-span-6 text-left space-y-6 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-[#E8D8C4]"></span>
                        <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs">
                          Expertise {service.id}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold font-serif text-[#0F3D3E] tracking-tight leading-tight">
                        {service.title}
                      </h3>

                      <p className="text-xs md:text-sm text-stone-500 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Feature Bullet Points */}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 border-t border-stone-200/40 pt-5">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2.5 text-xs text-stone-600 font-semibold">
                            <CheckCircle2 className="w-4 h-4 text-[#0F3D3E] flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Action Navigation CTA */}
                      <div className="pt-6 flex flex-wrap gap-4 items-center">
                        <Link to={service.ctaLink}>
                          <Button className="bg-[#FAF7F2] hover:bg-[#E8D8C4]/20 border border-[#E8D8C4] text-[#0F3D3E] font-bold px-6 py-4 rounded-xl text-xs md:text-sm uppercase tracking-wider flex items-center gap-2 transition duration-300">
                            <span>{service.ctaText}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Button>
                        </Link>
                        
                        <Link to="/contact" className="text-stone-500 hover:text-stone-900 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors">
                          <span>Get Free Estimate</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 4. WHY DENOVA CREATIONS GRID (STRATEGIC DIFFERENTIATION) */}
        <section className="py-20 md:py-24 bg-white border-t border-stone-150 relative z-10">
          <div className="container-custom">
            
            <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
              <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                The Studio Advantage
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F3D3E] font-serif leading-tight">
                Why We Are Different
              </h2>
              <p className="text-stone-500 text-xs md:text-sm max-w-lg mx-auto">
                We remove manual assembly errors, bypass subcontractor layers, and establish detailed warranties to guarantee absolute luxury.
              </p>
            </div>

            {/* Core Advantages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseDenova.map((item, idx) => (
                <div 
                  key={idx} 
                  className="group relative bg-[#FAF8F5] p-8 rounded-3xl border border-stone-100 hover:border-[#E8D8C4] hover:bg-white hover:shadow-[0_20px_45px_rgba(15,61,62,0.03)] hover:-translate-y-1 transition-all duration-500 text-left flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Circle badge outline */}
                    <div className="w-10 h-10 bg-white text-[#0F3D3E] rounded-xl flex items-center justify-center font-serif font-bold text-sm border border-stone-100 group-hover:bg-[#0F3D3E] group-hover:text-white transition-colors duration-500">
                      0{idx + 1}
                    </div>
                    
                    <h3 className="text-base md:text-lg font-bold font-serif text-[#0F3D3E] group-hover:text-stone-900 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs text-stone-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="w-8 h-0.5 bg-stone-200 group-hover:w-full group-hover:bg-[#E8D8C4] transition-all duration-500 mt-6"></div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 5. DESIGN PROCESS TIMELINE JOURNEY */}
        <section className="py-20 md:py-24 bg-[#FAF8F5] border-t border-stone-100 select-none">
          <div className="container-custom">
            
            <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
              <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                Workflow Timeline
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F3D3E] font-serif leading-tight">
                Our Design Process
              </h2>
              <p className="text-stone-500 text-xs md:text-sm">
                A simple, elegant, and completely transparent step-by-step interior design execution path.
              </p>
            </div>

            {/* Horizontal Timeline Process */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
              {processSteps.map((step, idx) => (
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

        {/* 6. INTERACTIVE PORTFOLIO SHOWCASE PREVIEWS */}
        <section className="py-20 md:py-24 bg-white border-t border-stone-150">
          <div className="container-custom">
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 text-left">
              <div className="space-y-2">
                <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                  Interactive Showcase
                </span>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0F3D3E] tracking-tight">
                  Services in Action
                </h2>
              </div>

              {/* Showcase filter tabs */}
              <div className="flex flex-wrap gap-1.5 bg-[#FAF8F5] p-1.5 rounded-full border border-stone-200/50">
                {['All', 'Residential', 'Kitchen', 'Commercial'].map((category) => (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 uppercase tracking-wider ${
                      filter === category
                        ? 'bg-[#0F3D3E] text-white shadow-sm'
                        : 'text-stone-500 hover:text-[#0F3D3E]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Filtered Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProjects.map((project) => (
                <Link 
                  key={project.id} 
                  to={project.link} 
                  className="group block relative overflow-hidden rounded-3xl border border-stone-200/20 bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-103"
                      style={{ transitionDuration: '600ms' }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/10 to-transparent"></div>
                  </div>

                  {/* Absolute Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-left z-10">
                    <span className="bg-[#E8D8C4] text-[#0F3D3E] text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-2 inline-block">
                      {project.category}
                    </span>
                    <h4 className="text-base font-bold text-white font-serif group-hover:text-[#E8D8C4] transition-colors mb-1">
                      {project.title}
                    </h4>
                    <p className="text-[10px] text-stone-300 leading-tight">
                      {project.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* 7. CLIENT TRUST & VERIFIED REVIEW PANEL */}
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
                  "Choosing Denova Creations was the best choice for our modular kitchen design. Their factory engineering precision and 100% itemized billing transparency saved us from any hidden contractor fees. Everything was completed on time!"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div>
                    <cite className="not-italic text-xs font-bold text-[#0F3D3E] block">
                      Nikita R.
                    </cite>
                    <span className="text-[10px] text-stone-500 font-semibold tracking-wide">
                      Premium Kitchen Owner • Jayanagar, Bengaluru
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

        {/* 8. STRONG CONVERSION CTA SECTION */}
        <section className="py-20 md:py-24 bg-gradient-to-b from-[#0F3D3E] to-[#0A2526] text-white relative z-10 select-none">
          <div className="container-custom text-center max-w-3xl mx-auto space-y-6">
            <span className="text-[#E8D8C4] font-bold tracking-widest uppercase text-xs block">
              Start Designing Today
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight tracking-tight">
              Let's Build a Space That Reflects Your Vision.
            </h2>
            
            <p className="text-stone-300 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
              Book a free private survey consultation session at our studio or coordinate a detailed structural costing review today.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-[#E8D8C4] hover:bg-white text-[#0F3D3E] font-bold px-8 py-6 rounded-lg text-xs md:text-sm uppercase tracking-wider shadow-lg transition-transform duration-300 hover:scale-[1.02] flex items-center gap-2">
                  <span>Book Free Consultation</span>
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

export default ServicesPage;
