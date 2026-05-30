import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Layers, 
  Palette, 
  Settings, 
  Lightbulb, 
  CheckCircle2, 
  Compass, 
  HelpCircle, 
  Info, 
  Calculator, 
  ShieldCheck, 
  Scale, 
  MessageSquare, 
  PhoneCall, 
  Award, 
  Sparkles, 
  ChevronDown,
  Activity,
  Maximize2
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { companyInfo } from '../data/mock';
import { Helmet } from "react-helmet-async";

// Curated Woods Data for comparison
const coreWoods = [
  {
    name: "BWP Marine Plywood",
    shortName: "Boiling Water Proof (Marine Grade)",
    lifespan: "15–20+ Years",
    waterproof: "100% Waterproof (Withstands 72 hrs boiling)",
    priceRange: "₹85 - ₹120 per sq.ft",
    bestFor: "Modular kitchens under-sink, wet utility areas, bathroom vanities, balcony storages",
    desc: "Marine-grade plywood built with superior BWP phenol formaldehyde resin. Extremely strong, zero delamination risk, and 100% boiling-water-proof.",
    maintenance: "Very Low"
  },
  {
    name: "BWR Commercial Plywood",
    shortName: "Boiling Water Resistant",
    lifespan: "10–15 Years",
    waterproof: "Highly Moisture Resistant (Withstands 8 hrs boiling)",
    priceRange: "₹65 - ₹85 per sq.ft",
    bestFor: "Master bedroom wardrobes, TV consoles, dry pantry units, storage lofts",
    desc: "Premium grade plywood highly resistant to moisture, humidity, and temperature variations. Ideal for typical semi-dry residential furniture carcass.",
    maintenance: "Low"
  },
  {
    name: "HDF & MDF Boards",
    shortName: "High/Medium Density Fiberboard",
    lifespan: "7–10 Years",
    waterproof: "Low moisture resistance (Prone to swelling on direct water contact)",
    priceRange: "₹45 - ₹65 per sq.ft",
    bestFor: "Designer wardrobe shutter fronts, custom wall panelings, display shelves",
    desc: "Engineered wood made from compressed wood fibers. Yields a perfectly smooth paintable surface. Excellent for intricate routing and clean shutter finishes.",
    maintenance: "Medium"
  },
  {
    name: "Particle Board",
    shortName: "Compressed Chip Board",
    lifespan: "3–5 Years",
    waterproof: "Zero water resistance (Swells and disintegrates easily)",
    priceRange: "₹35 - ₹45 per sq.ft",
    bestFor: "Temporary rental furniture, low-budget dry bookshelves, internal partitions",
    desc: "Budget-friendly engineered wood made of compressed wood chips. Highly cost-effective but structurally weak under moisture or heavy load conditions.",
    maintenance: "High"
  }
];

const processSteps = [
  { num: "01", title: "Creative Survey", desc: "Site survey, spatial measurements, and alignment on lifestyle requirements." },
  { num: "02", title: "Space Planning", desc: "Analyzing walking clearance, furniture placement, and zoning maps." },
  { num: "03", title: "Curation & 3D", desc: "touching materials at the studio, finalizing color palettes, and drafting photorealistic 3Ds." },
  { num: "04", title: "Factory Carcass", desc: "Automated German machine carcass edge-banding and precision board cutting." },
  { num: "05", title: "Engineered Assembly", desc: "turnkey assembly supervised on-site by certified structural civil engineers." },
  { num: "06", title: "Handover & Styling", desc: "Deep cleaning, final inspection, and formal reveal of your luxury home." }
];

const finishesList = [
  {
    name: "High-Gloss Acrylic",
    feel: "Ultra-reflective mirror finish",
    durability: "High scratch-resistance, easy to wipe",
    cost: "Premium Tiers",
    desc: "Adds stunning contemporary brightness. Best for upper kitchen shutters and modern luxury cabinets."
  },
  {
    name: "Matte Laminate",
    feel: "Soft tactile, anti-fingerprint surface",
    durability: "Extremely robust, scratch-proof",
    cost: "Mid-Range Budget",
    desc: "Practical and timeless. Perfect for high-frequency wardrobe doors and children's room cabinetry."
  },
  {
    name: "Natural Wood Veneer",
    feel: "Authentic wood grain texture",
    durability: "Requires PU polish maintenance",
    cost: "Luxury Tiers",
    desc: "Crafts deep, rich architectural warmth. Perfect for fluted living room accents and foyer paneling."
  },
  {
    name: "PU Metallic Polish",
    feel: "Seamless, high-end automotive coating",
    durability: "High durability, stain-resistant",
    cost: "Luxury Tiers",
    desc: "Provides a luxury seamless matte or gloss paint visual. Best for high-end bespoke designer furniture."
  }
];

const estimationTiers = [
  {
    tier: "Essential Smart",
    price: "₹1.5L - ₹2.5L",
    materials: "MR BWR Plywood carcass, matte laminates, standard Ebco hardware hinges.",
    bestFor: "Budget-friendly modular kitchen upgrades & standard bedroom closets."
  },
  {
    tier: "Premium Elite",
    price: "₹3.0L - ₹5.5L",
    materials: "100% BWP Marine Plywood wet areas, gloss acrylic shutters, Hettich soft-close sliders.",
    bestFor: "Urban 2BHK & 3BHK turnkey modular apartment packages."
  },
  {
    tier: "Signature Luxury",
    price: "₹6.0L - ₹12.0L+",
    materials: "BWP Ply, PU gloss/glass shutters, quartz countertops, Hafele tandem drawers, veneer panelings.",
    bestFor: "Luxury custom villas & high-end architectural penthouses."
  }
];

const faqsData = [
  {
    q: "Which plywood is best for modular kitchens?",
    a: "We highly recommend using Boiling Water Proof (BWP) marine-grade plywood (IS:710 certified) for all modular kitchen under-sink areas, utility boxes, and bottom cabinets. BWR (Boiling Water Resistant) plywood is suitable for upper dry cabinets, but BWP is mandatory for wet zones to prevent swelling and termite decay."
  },
  {
    q: "What is the difference between BWP Plywood and Commercial Plywood?",
    a: "Commercial plywood is Moisture Resistant (MR) but cannot withstand direct water contact; it swells easily when wet. BWP (Boiling Water Proof) plywood uses superior phenol-formaldehyde synthetic resin, allowing it to withstand boiling water for up to 72 hours without delaminating. BWP is essential for kitchens and bathrooms."
  },
  {
    q: "Matte vs. Gloss: Which finish should I select for wardrobes?",
    a: "For wardrobes, Matte laminates are highly recommended because they are anti-fingerprint, scratch-resistant, and create a calm luxury aesthetic. Gloss finishes (like Acrylic) are best used sparingly on upper kitchen cabinets or narrow hallways to bounce light and make small areas feel spacious."
  },
  {
    q: "How are modular wardrobe costs calculated?",
    a: "Modular wardrobes are calculated based on Square Feet (Sq.Ft) area (Height × Width of the wardrobe front). The cost is determined by the carcass core material (BWR vs MDF), sliding vs. hinged mechanisms, and the surface finish (laminate vs. acrylic or glass)."
  },
  {
    q: "How are modular kitchen costs calculated?",
    a: "Modular kitchens are calculated in Running Feet (R.Ft) along the length of the counter. Standard calculations separate the bottom counter cabinets, quartz countertops, and upper wall cabinets. Accessories (tandem boxes, pantries) and premium hardware (Hafele, Hettich) are added to this base rate."
  },
  {
    q: "What is the delivery timeline for a turnkey home interior in Bangalore?",
    a: "At Denova Creations, our strict factory-to-site turnaround is 45 to 60 days. Because all components are precision-cut and automated edge-banded in our factory, onsite assembly takes only 7-10 days, eliminating dust and manual carpentry delays."
  }
];

const MaterialsPage = () => {
  const [selectedWood, setSelectedWood] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>
      <Helmet>
        <title>Interior Materials & Design Guide Bangalore | Denova Creations</title>
        <meta
          name="description"
          content="The ultimate interior materials and planning guide in Bangalore. Discover the differences between BWP marine ply, BWR plywood, acrylics, and modular pricing."
        />
        <link rel="canonical" href="https://denovacreations.com/materials" />
        
        {/* Knowledge Page Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "name": "Interior Materials & Planning Guide",
            "description": "Educational guide detailing residential plywood grades, modular kitchen shutter finishes, color combinations, and cost calculations in Bangalore.",
            "url": "https://denovacreations.com/materials",
            "publisher": {
              "@type": "Organization",
              "name": "Denova Creations",
              "logo": "https://denovacreations.com/images/denova-logo.svg"
            }
          })}
        </script>
      </Helmet>

      <div className="bg-[#FAF8F5] text-stone-800 antialiased min-h-screen">

        {/* 1. PREMIUM HERO SECTION */}
        <section className="relative h-[65vh] flex items-center bg-[#071F20] overflow-hidden select-none">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero2.webp"
              alt="Premium materials guide by Denova Creations"
              className="w-full h-full object-cover scale-102 opacity-95 transition-transform duration-1000"
            />
            {/* Elegant overlay to highlight typography and text contrast */}
            <div className="absolute inset-0 bg-[#051819]/80 backdrop-blur-[1px]"></div>
          </div>

          <div className="relative z-10 w-full container-custom mt-8">
            <div className="max-w-3xl text-left space-y-5 animate-fade-in-up">
              <span className="text-[#E8D8C4] font-bold tracking-widest uppercase text-xs block">
                Educational Knowledge Hub
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-serif tracking-tight">
                The Complete Guide to <span className="text-[#E8D8C4]">Interior Materials & Planning.</span>
              </h1>
              
              <p className="text-stone-300 text-sm md:text-base leading-relaxed max-w-xl">
                Make transparent, highly informed decisions about the core woods, BWP waterproofing structures, modular setups, and surface finishes that shape your home sanctuary.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <a href="#woods">
                  <Button className="bg-[#E8D8C4] hover:bg-white text-[#0F3D3E] font-bold px-6 py-5 rounded-lg text-xs md:text-sm uppercase tracking-wider transition-all duration-300 shadow-lg flex items-center gap-2 hover:scale-[1.02]">
                    <span>Explore Material Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <Link to="/contact">
                  <Button className="bg-transparent hover:bg-white/10 border border-white/30 text-white font-bold px-6 py-5 rounded-lg text-xs md:text-sm uppercase tracking-wider transition-all duration-300">
                    Talk to a Designer
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. INTRODUCTION PROCESS TIMELINE STRIP */}
        <section className="py-20 bg-white border-b border-stone-150 select-none">
          <div className="container-custom text-center">
            
            <div className="mb-16 max-w-2xl mx-auto space-y-3">
              <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                Turnkey Workflow
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0F3D3E] tracking-tight leading-none">
                How Turnkey Interiors Work
              </h2>
              <p className="text-stone-500 text-xs md:text-sm">
                From initial survey dimensions to factory manufacturing, we coordinate a stress-free spatial journey.
              </p>
            </div>

            {/* Steps Timeline Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10 text-left">
              {processSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col space-y-3 group relative">
                  
                  {/* Step Num */}
                  <div className="text-3xl md:text-4xl font-serif font-bold text-[#E8D8C4]/60 group-hover:text-[#0F3D3E] transition-colors duration-300 leading-none">
                    {step.num}
                  </div>
                  
                  <h3 className="text-xs md:text-sm font-bold text-[#0F3D3E] font-serif tracking-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-[11px] text-stone-500 leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Horizontal dotted connector on larger screens */}
                  {idx < 5 && (
                    <div className="hidden lg:block absolute top-4 left-[85%] w-full h-[1px] border-t border-dashed border-stone-300 -z-10 group-hover:border-[#E8D8C4] transition-colors duration-500"></div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 3. WOODS & CORE MATERIAL COMPARISON HUB */}
        <section id="woods" className="py-20 md:py-24 bg-[#FAF8F5]">
          <div className="container-custom">
            
            <div className="text-center mb-16 max-w-2xl mx-auto space-y-3 text-left md:text-center">
              <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                The Foundation
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F3D3E] font-serif tracking-tight">
                Plywood & Engineered Core Guide
              </h2>
              <p className="text-stone-500 text-xs md:text-sm">
                Bespoke furniture is only as robust as its core structural plywood. Compare plywood grades, lifespans, and direct applications.
              </p>
            </div>

            {/* Woods Comparative Interactive Block */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
              
              {/* Left Selector List */}
              <div className="lg:col-span-4 space-y-3 text-left">
                {coreWoods.map((wood, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedWood(idx)}
                    className={`w-full p-5 rounded-2xl border text-left transition-all duration-300 ${
                      selectedWood === idx
                        ? 'bg-[#0F3D3E] border-[#0F3D3E] text-white shadow-md'
                        : 'bg-white border-stone-100 hover:border-[#E8D8C4] text-stone-700'
                    }`}
                  >
                    <span className="text-[10px] uppercase font-bold tracking-wider opacity-75 block mb-1">Carcass Option 0{idx + 1}</span>
                    <span className="font-serif font-bold text-base block">{wood.name}</span>
                  </button>
                ))}
              </div>

              {/* Right Detail Pane Card */}
              <div className="lg:col-span-8 bg-white p-8 rounded-3xl border border-stone-100 shadow-[0_15px_40px_rgba(15,61,62,0.02)] text-left space-y-6 animate-fadeIn">
                <div className="space-y-1.5 border-b border-stone-100 pb-4">
                  <span className="text-[#E8D8C4] font-bold text-[10px] uppercase tracking-widest block">Selected Core Specifications</span>
                  <h3 className="text-2xl font-bold font-serif text-[#0F3D3E]">{coreWoods[selectedWood].name}</h3>
                  <p className="text-stone-400 text-xs font-semibold">{coreWoods[selectedWood].shortName}</p>
                </div>

                <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
                  {coreWoods[selectedWood].desc}
                </p>

                {/* Specs comparison detail */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-[#FAF8F5] rounded-xl space-y-1">
                    <span className="text-stone-400 block text-[9px] uppercase font-semibold">Estimated Lifespan</span>
                    <span className="text-[#0F3D3E] block font-bold">{coreWoods[selectedWood].lifespan}</span>
                  </div>
                  <div className="p-4 bg-[#FAF8F5] rounded-xl space-y-1">
                    <span className="text-stone-400 block text-[9px] uppercase font-semibold">Waterproof Capacity</span>
                    <span className="text-[#0F3D3E] block font-bold">{coreWoods[selectedWood].waterproof}</span>
                  </div>
                  <div className="p-4 bg-[#FAF8F5] rounded-xl space-y-1">
                    <span className="text-stone-400 block text-[9px] uppercase font-semibold">Investment Tier</span>
                    <span className="text-stone-700 block font-bold">{coreWoods[selectedWood].priceRange}</span>
                  </div>
                  <div className="p-4 bg-[#FAF8F5] rounded-xl space-y-1">
                    <span className="text-stone-400 block text-[9px] uppercase font-semibold">Maintenance Level</span>
                    <span className="text-stone-700 block font-bold">{coreWoods[selectedWood].maintenance}</span>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100 text-emerald-800 text-xs">
                  <span className="font-bold uppercase tracking-wider text-[9px] text-emerald-700 block mb-1">Recommended Best Applications</span>
                  <p className="font-semibold">{coreWoods[selectedWood].bestFor}</p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 4. WATERPROOF MATERIALS SEGMENT (VERY IMPORTANT TRUST INDICATORS) */}
        <section className="py-20 md:py-24 bg-white border-t border-stone-150 select-none">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
              
              {/* Left Column Text */}
              <div className="lg:col-span-7 text-left space-y-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-[1px] bg-[#E8D8C4]"></span>
                  <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs">
                    Termite & Water Protection
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0F3D3E] tracking-tight leading-tight">
                  Where Waterproof Materials are Mandatory.
                </h2>

                <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
                  Water leaks under modular kitchens or wash areas are the primary cause of cabinetry swelling, rot, and structural breakdown. At Denova Creations, we coordinate highly structured material mappings to mandate BWP waterproof materials in structural hotspots.
                </p>

                {/* Spotlights Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-stone-200/40 pt-6 text-xs font-semibold">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-stone-800 block">Kitchen Sink Cabinets</span>
                      <span className="text-stone-400 font-normal text-[10px]">100% BWP Marine Ply carcass base</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-stone-800 block">Bathroom Vanities</span>
                      <span className="text-stone-400 font-normal text-[10px]">Moisture-proof PVC board cores</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-stone-800 block">Balcony Storage Lofts</span>
                      <span className="text-stone-400 font-normal text-[10px]">Laminated BWR panels moisture shields</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-stone-800 block">Washing Utility Niches</span>
                      <span className="text-stone-400 font-normal text-[10px]">Corrosion-proof aluminum profiles</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column visual box */}
              <div className="lg:col-span-5 relative group">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl border-4 border-white z-10">
                  <img
                    src="/images/kitchen1.webp"
                    alt="Premium waterproof kitchen structure setup by Denova Creations"
                    className="w-full h-full object-cover transition-transform group-hover:scale-103 duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-stone-950/10"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-40 h-40 border-r-4 border-b-4 border-[#E8D8C4] rounded-br-3xl z-0"></div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. MODULAR KITCHEN & WARDROBE MATRICES */}
        <section className="py-20 md:py-24 bg-[#FAF8F5] border-y border-stone-150">
          <div className="container-custom">
            
            <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
              <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                Component Blueprints
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F3D3E] font-serif tracking-tight leading-none">
                Modular Anatomy Guides
              </h2>
              <p className="text-stone-500 text-xs md:text-sm">
                Discover the direct component coordination that separates premium modular layouts from manual site cabinetry.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
              
              {/* Kitchen blueprint */}
              <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-[0_10px_35px_rgba(0,0,0,0.01)] space-y-6">
                <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
                  <div className="w-10 h-10 bg-[#FAF7F2] text-[#0F3D3E] rounded-xl flex items-center justify-center border border-[#E8D8C4]/25">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#0F3D3E]">Modular Kitchen Blueprint</h3>
                    <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Anatomy & Options</span>
                  </div>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="space-y-1">
                    <span className="text-stone-400 block font-semibold text-[9px] uppercase">Cabinet Core Carcass</span>
                    <p className="text-stone-600 font-medium">BWP waterproof marine plywood (Century/Kitply) finished with white liner laminates internally.</p>
                  </div>
                  <div className="space-y-1 border-t border-stone-100 pt-3">
                    <span className="text-stone-400 block font-semibold text-[9px] uppercase">Shutter Finishes</span>
                    <p className="text-stone-600 font-medium">High-Gloss European Acrylic, scratch-proof anti-fingerprint Matte Laminates, or seamless PU lacquer coatings.</p>
                  </div>
                  <div className="space-y-1 border-t border-stone-100 pt-3">
                    <span className="text-stone-400 block font-semibold text-[9px] uppercase">Quartz Countertops</span>
                    <p className="text-stone-600 font-medium">15mm - 20mm premium solid quartz countertops. Resistant to heavy stains, acidic liquids, and hot pans.</p>
                  </div>
                  <div className="space-y-1 border-t border-stone-100 pt-3">
                    <span className="text-stone-400 block font-semibold text-[9px] uppercase">Modular Hardware</span>
                    <p className="text-[#0F3D3E] font-bold">German soft-close tandem drawer systems (Hafele, Hettich) and visual pneumatic gas-lift dampers.</p>
                  </div>
                </div>
              </div>

              {/* Wardrobe blueprint */}
              <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-[0_10px_35px_rgba(0,0,0,0.01)] space-y-6">
                <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
                  <div className="w-10 h-10 bg-[#FAF7F2] text-[#0F3D3E] rounded-xl flex items-center justify-center border border-[#E8D8C4]/25">
                    <Palette className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#0F3D3E]">Bespoke Wardrobe Blueprint</h3>
                    <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Storage & Mechanisms</span>
                  </div>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="space-y-1">
                    <span className="text-stone-400 block font-semibold text-[9px] uppercase">Internal carcass plywood</span>
                    <p className="text-stone-600 font-medium">IS:303 BWR moisture-resistant structural plywood finished with inner textured wood laminates.</p>
                  </div>
                  <div className="space-y-1 border-t border-stone-100 pt-3">
                    <span className="text-stone-400 block font-semibold text-[9px] uppercase">Sliding vs Hinged closets</span>
                    <p className="text-stone-600 font-medium">Sliding door systems fitted with aluminum DAMPER rollers (best for narrow rooms), or hinged open profiles.</p>
                  </div>
                  <div className="space-y-1 border-t border-stone-100 pt-3">
                    <span className="text-stone-400 block font-semibold text-[9px] uppercase">Wardrobe Shutter Accents</span>
                    <p className="text-stone-600 font-medium">Frosted glass shutters, custom floor-to-ceiling mirror panel doors, or warm fluted vertical wooden lines.</p>
                  </div>
                  <div className="space-y-1 border-t border-stone-100 pt-3">
                    <span className="text-stone-400 block font-semibold text-[9px] uppercase">Storage Optimization</span>
                    <p className="text-[#0F3D3E] font-bold">Integrated auto-on LED rod hangers, soft-close velvet organizers, sliding trouser pull-outs.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 6. SURFACE FINISHES & COLOR PALETTE COORDINATION SHEET */}
        <section className="py-20 md:py-24 bg-white border-b border-stone-150 select-none">
          <div className="container-custom">
            
            <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
              <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                Visual Harmony
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F3D3E] font-serif leading-tight">
                Finishes & Color Boards
              </h2>
              <p className="text-stone-500 text-xs md:text-sm">
                Explore premium coating textures and expert color balancing formulas to raise height and create visual warmth.
              </p>
            </div>

            {/* Finishes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16 text-left">
              {finishesList.map((finish, idx) => (
                <div key={idx} className="p-6 bg-[#FAF8F5] rounded-3xl border border-stone-100 space-y-3.5 hover:border-[#E8D8C4] hover:bg-white transition-all duration-300">
                  <div className="w-8 h-8 bg-[#0F3D3E] text-white rounded-lg flex items-center justify-center font-bold text-xs shadow-sm">
                    0{idx + 1}
                  </div>
                  <h4 className="text-base font-serif font-bold text-[#0F3D3E]">{finish.name}</h4>
                  <ul className="space-y-1 text-[11px] text-stone-500 leading-normal">
                    <li><span className="font-semibold text-stone-700">Feel:</span> {finish.feel}</li>
                    <li><span className="font-semibold text-stone-700">Durability:</span> {finish.durability}</li>
                    <li><span className="font-semibold text-stone-700">Budget:</span> {finish.cost}</li>
                  </ul>
                  <p className="text-[11px] text-stone-400 pt-2 border-t border-stone-100">
                    {finish.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Color Curation guidelines */}
            <div className="bg-[#FAF7F2] p-8 md:p-10 rounded-3xl border border-[#E8D8C4]/25 text-left max-w-4xl mx-auto space-y-6">
              <div className="space-y-1">
                <span className="text-[#0F3D3E] font-bold text-[9px] uppercase tracking-widest block">Studio Advice</span>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-[#0F3D3E]">Coordinating Warm Luxury Palettes</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-stone-600 leading-relaxed">
                <div className="space-y-2">
                  <span className="font-serif font-bold text-stone-850 text-sm block">1. Dominate Neutral Base (60%)</span>
                  <p>Use Warm Beige, Off-White, or Linen tones on key walls and main wardrobe panels to maximize ambient reflection and spaciousness.</p>
                </div>
                <div className="space-y-2 border-t md:border-t-0 md:border-l border-stone-200/50 pt-4 md:pt-0 md:pl-6">
                  <span className="font-serif font-bold text-stone-850 text-sm block">2. Wood Veneer Accents (30%)</span>
                  <p>Coordinated natural Oak or Walnut textures on vertical flutes, shelves, or TV drawers to introduce biophilic visual warmth.</p>
                </div>
                <div className="space-y-2 border-t md:border-t-0 md:border-l border-stone-200/50 pt-4 md:pt-0 md:pl-6">
                  <span className="font-serif font-bold text-stone-850 text-sm block">3. Luxury Emerald Contrast (10%)</span>
                  <p>Brushed brass handle accents, deep emerald soft-seating upholstery, or metallic trims to yield premium architectural depth.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 7. SPACE PLANNING & ESTMATION TIERING */}
        <section className="py-20 md:py-24 bg-[#FAF8F5] border-b border-stone-150 text-left">
          <div className="container-custom">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
              
              {/* Left Column - Space Planning clearance rules */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">Architectural Ergonomics</span>
                <h2 className="text-3xl font-bold font-serif text-[#0F3D3E] tracking-tight leading-tight">Space Planning Clearance Rules</h2>
                
                <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
                  A gorgeous interior is functionally failed if daily walking paths are obstructed. We follow strict spatial coordinates:
                </p>

                <div className="space-y-4 text-xs font-semibold text-stone-600">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-white text-[#0F3D3E] rounded-lg border border-stone-100 flex items-center justify-center flex-shrink-0 font-bold shadow-xs">3.0</div>
                    <div>
                      <span className="text-stone-800 block text-xs">Walking Clearance (3 Feet minimum)</span>
                      <span className="text-stone-400 font-normal text-[10px] block leading-tight">Required between wardrobes and bed edges to allow unobstructed walking paths.</span>
                    </div>
                  </div>
                  <div className="flex gap-3 border-t border-stone-200/50 pt-4">
                    <div className="w-8 h-8 bg-white text-[#0F3D3E] rounded-lg border border-stone-100 flex items-center justify-center flex-shrink-0 font-bold shadow-xs">2.5</div>
                    <div>
                      <span className="text-stone-800 block text-xs">Modular Drawer Pull-Out (2.5 Feet)</span>
                      <span className="text-stone-400 font-normal text-[10px] block leading-tight">Clear space required in kitchens to coordinate soft-close pulls comfortably.</span>
                    </div>
                  </div>
                  <div className="flex gap-3 border-t border-stone-200/50 pt-4">
                    <div className="w-8 h-8 bg-white text-[#0F3D3E] rounded-lg border border-stone-100 flex items-center justify-center flex-shrink-0 font-bold shadow-xs">3.5</div>
                    <div>
                      <span className="text-stone-800 block text-xs">Modular Lighting Zoning (3.5 Feet clearance)</span>
                      <span className="text-stone-400 font-normal text-[10px] block leading-tight">Optimal spotlight track offsets from walls to avoid visual shadowing.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Cost Tiers */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block font-bold">Costing Transparency</span>
                <h2 className="text-3xl font-bold font-serif text-[#0F3D3E] tracking-tight leading-tight">Estimation Cost Tiers</h2>
                
                <div className="space-y-4">
                  {estimationTiers.map((tier, idx) => (
                    <div key={idx} className="p-5 bg-white rounded-3xl border border-stone-100 shadow-[0_5px_15px_rgba(0,0,0,0.005)] space-y-2">
                      <div className="flex justify-between items-center border-b border-stone-100 pb-2">
                        <span className="font-serif font-bold text-base text-[#0F3D3E]">{tier.tier}</span>
                        <span className="text-emerald-700 font-bold text-sm bg-emerald-50 px-3 py-1 rounded-full">{tier.price}</span>
                      </div>
                      <p className="text-[11px] text-stone-500 leading-normal"><span className="font-semibold text-stone-700">Spec Core:</span> {tier.materials}</p>
                      <p className="text-[10px] text-stone-400 leading-tight font-medium uppercase tracking-wide">Best For: {tier.bestFor}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 8. SQUARE FEET MEASUREMENT & COST CALCULATION FORMULAS */}
        <section className="py-20 md:py-24 bg-white border-b border-stone-150 text-left select-none">
          <div className="container-custom">
            
            <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
              <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                Cost Planning Accuracy
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F3D3E] font-serif leading-tight">
                How Cost Calculations Work
              </h2>
              <p className="text-stone-500 text-xs md:text-sm">
                Avoid technical confusion. Discover exactly how modular kitchens, closets, and ceilings are mathematically measured in Bangalore.
              </p>
            </div>

            {/* Calculations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-xs">
              
              {/* Kitchen running feet */}
              <div className="p-6 bg-[#FAF8F5] rounded-3xl border border-stone-100 space-y-4">
                <h4 className="font-serif font-bold text-base text-[#0F3D3E] border-b border-stone-200/50 pb-2 flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-[#E8D8C4]" />
                  <span>Modular Kitchen (R.Ft)</span>
                </h4>
                <p className="text-stone-500 leading-relaxed">
                  Measured in **Running Feet (R.Ft)** along the horizontal counter length. Separate calculations coordinate the bottom cabinetry framework, countertops, and upper wall lockers.
                </p>
                <div className="p-3.5 bg-white rounded-xl border border-stone-100 font-mono text-[10px] text-stone-600 text-center">
                  Counter Length (Ft) × R.Ft Unit Cost
                </div>
              </div>

              {/* Wardrobe sqft */}
              <div className="p-6 bg-[#FAF8F5] rounded-3xl border border-stone-100 space-y-4">
                <h4 className="font-serif font-bold text-base text-[#0F3D3E] border-b border-stone-200/50 pb-2 flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-[#E8D8C4]" />
                  <span>Modular Wardrobes (Sq.Ft)</span>
                </h4>
                <p className="text-stone-500 leading-relaxed">
                  Measured in **Square Feet (Sq.Ft)** along the wardrobe's front profile area. Calculated strictly by multiplying wardrobe total Height by total Width.
                </p>
                <div className="p-3.5 bg-white rounded-xl border border-stone-100 font-mono text-[10px] text-stone-600 text-center">
                  Height (Ft) × Width (Ft) × Sq.Ft Unit Cost
                </div>
              </div>

              {/* Ceiling area */}
              <div className="p-6 bg-[#FAF8F5] rounded-3xl border border-stone-100 space-y-4">
                <h4 className="font-serif font-bold text-base text-[#0F3D3E] border-b border-stone-200/50 pb-2 flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-[#E8D8C4]" />
                  <span>False Ceiling (Sq.Ft)</span>
                </h4>
                <p className="text-stone-500 leading-relaxed">
                  Measured in flat **Square Feet (Sq.Ft)** along the horizontal ceiling flat area. Custom drop steps coves are calculated separately to coordinate strip wiring lengths.
                </p>
                <div className="p-3.5 bg-white rounded-xl border border-stone-100 font-mono text-[10px] text-stone-600 text-center">
                  Ceiling Length (Ft) × Width (Ft) × Sq.Ft Cost
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 9. ACCORDION-STYLE INTERACTIVE FAQ CONSOLE */}
        <section className="py-20 md:py-24 bg-[#FAF8F5]">
          <div className="container-custom">
            
            <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
              <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                Client Education
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F3D3E] font-serif leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-stone-500 text-xs md:text-sm">
                Find clear answers to structural interior materials, waterproof grades, and timeline calculations.
              </p>
            </div>

            {/* Accordion FAQ Container */}
            <div className="max-w-3xl mx-auto space-y-3 text-left">
              {faqsData.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div 
                    key={idx} 
                    className="bg-white rounded-2xl border border-stone-150 overflow-hidden transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.005)]"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 flex justify-between items-center text-[#0F3D3E] hover:text-stone-950 font-serif font-bold text-sm md:text-base text-left transition-colors duration-300"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-[#E8D8C4] flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#0F3D3E]' : ''
                      }`} />
                    </button>
                    
                    {/* FAQ Answer panel */}
                    <div className={`transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-[300px] border-t border-stone-50 opacity-100 p-5' : 'max-h-0 opacity-0 p-0 overflow-hidden'
                    }`}>
                      <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 10. PREMIUM CLOSING CTA SECTION */}
        <section className="py-20 md:py-24 bg-gradient-to-b from-[#0F3D3E] to-[#0A2526] text-white relative z-10 select-none">
          <div className="container-custom text-center max-w-3xl mx-auto space-y-6">
            <span className="text-[#E8D8C4] font-bold tracking-widest uppercase text-xs block">
              Start Designing Today
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight tracking-tight">
              Need Help Planning Your Interior Project?
            </h2>
            
            <p className="text-stone-300 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
              Book a free private materials curation meeting at our Bangalore studio or coordinate a detailed structural costing review today.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-[#E8D8C4] hover:bg-white text-[#0F3D3E] font-bold px-8 py-6 rounded-lg text-xs md:text-sm uppercase tracking-wider shadow-lg transition-transform duration-300 hover:scale-[1.02] flex items-center gap-2">
                  <span>Talk to an Expert</span>
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

export default MaterialsPage;
