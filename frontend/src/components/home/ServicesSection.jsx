import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  ChevronRight, 
  Home, 
  Building2, 
  Castle, 
  Briefcase, 
  Wrench, 
  Key, 
  Layers, 
  Sparkles 
} from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

const iconMap = {
  Home: Home,
  Building2: Building2,
  Castle: Castle,
  Briefcase: Briefcase,
  Wrench: Wrench,
  Key: Key,
  Layers: Layers,
  Sparkles: Sparkles,
};

const luxuryServices = [
  {
    id: 1,
    title: "Complete Home Interiors",
    description: "Turnkey residential design engineered for effortless elegance, personalized spatial layout, and lasting structural quality.",
    icon: "Home",
    badge: "Signature Offering",
    isPrimary: true,
    features: ["Full Turnkey Project Execution", "Bespoke 3D Architectural Renders", "10-Year Solid Material Warranty"]
  },
  {
    id: 2,
    title: "Modular Kitchens",
    description: "Ergonomically designed culinary spaces combining high-gloss luxury finishes with German precision soft-close hardware.",
    icon: "Layers",
    badge: "Most Requested",
    isPrimary: true,
    features: ["100% Waterproof BWP Marine Core", "Vastu-Optimized Cooking Triangle", "Anti-Scratch Acrylic & Quartz Finishes"]
  },
  {
    id: 3,
    title: "Luxury Wardrobes",
    description: "Floor-to-ceiling storage solutions engineered to maximize spatial storage while elevating bedroom aesthetics.",
    icon: "Castle",
    badge: "Bespoke Storage",
    isPrimary: true,
    features: ["Custom Walk-In & Sliding Systems", "Integrated Sensor LED Illumination", "German Soft-Close Motion Hardware"]
  },
  {
    id: 4,
    title: "Living & Bedroom Interiors",
    description: "Sophisticated interior styling featuring custom wood fluting, designer false ceilings, and ambient lighting scenes.",
    icon: "Sparkles",
    isPrimary: false,
    features: ["Custom Marble & Fluted Paneling", "Layered Architectural Lighting", "Ergonomic Space Utilization"]
  },
  {
    id: 5,
    title: "Commercial & Office Spaces",
    description: "High-impact workspace environments designed to reflect brand identity, elevate prestige, and boost productivity.",
    icon: "Briefcase",
    isPrimary: false,
    features: ["Executive Boardrooms & Cabins", "Acoustic Wall & Ceiling Solutions", "Brand-Aligned Aesthetic Styling"]
  },
  {
    id: 6,
    title: "Turnkey Renovations",
    description: "Complete architectural makeover for existing properties, upgrading structural utilities, storage, and visual appeal.",
    icon: "Wrench",
    isPrimary: false,
    features: ["Hassle-Free Structural Redesigns", "Modernized Kitchens & Bathrooms", "45–60 Day On-Time Handover"]
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-stone-100 relative overflow-hidden">
      <div className="container-custom">
        
        {/* Heading & Intro */}
        <div className="text-center mb-12 max-w-3xl mx-auto space-y-4">
          <span className="text-[#C8A35F] font-bold tracking-widest uppercase text-xs block">
            Exquisite Craftsmanship & Execution
          </span>
          <h2 
            className="text-3xl md:text-5xl font-bold text-[#0F3D3E] leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Premium Interior Design Services in Bangalore
          </h2>
          <p className="text-stone-600 text-sm md:text-base leading-relaxed">
            Transforming residences into luxurious sanctuaries with uncompromised European craftsmanship, precision factory finishes, and personalized spatial design. From <strong>Complete Home Interiors</strong> to bespoke <strong>Modular Kitchens</strong> and <strong>Luxury Wardrobes</strong>, we deliver excellence tailored for homeowners across Bangalore.
          </p>
        </div>

        {/* Trust Statement Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-14 py-3.5 px-6 bg-[#FAF8F5] rounded-2xl border border-stone-200/70 max-w-3xl mx-auto text-[#0F3D3E] text-xs md:text-sm font-medium shadow-xs">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C8A35F] shrink-0" />
            <span>Trusted by 150+ Homeowners across Bangalore</span>
          </div>
          <span className="hidden sm:inline text-stone-300">•</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C8A35F] shrink-0" />
            <span>10-Year Material Warranty</span>
          </div>
          <span className="hidden sm:inline text-stone-300">•</span>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#C8A35F] shrink-0" />
            <span>Zero Sub-Contracting</span>
          </div>
        </div>

        {/* Service Cards Grid with Clear Visual Hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {luxuryServices.map((service) => {
            let IconComponent = iconMap[service.icon];
            if (!IconComponent) {
              IconComponent = Layers;
            }
            return (
              <Link key={service.id} to="/services" className="group block h-full">
                <Card className={`border rounded-3xl transition-all duration-500 h-full flex flex-col overflow-hidden ${
                  service.isPrimary 
                    ? 'border-[#C8A35F]/60 bg-[#FAF8F5] shadow-md hover:border-[#C8A35F] hover:shadow-[0_20px_45px_rgba(200,163,95,0.15)] hover:-translate-y-1.5' 
                    : 'border-stone-100 bg-[#FAF8F5]/60 hover:bg-[#FAF8F5] hover:border-[#C8A35F]/40 hover:shadow-[0_15px_35px_rgba(15,61,62,0.05)] hover:-translate-y-1'
                }`}>
                  <CardContent className="p-8 h-full flex flex-col flex-grow text-left relative">
                    
                    {/* Primary Badge */}
                    {service.badge && (
                      <span className="absolute top-6 right-6 px-3 py-1 bg-[#C8A35F]/15 border border-[#C8A35F]/30 text-[#0F3D3E] text-[10px] font-bold uppercase tracking-wider rounded-full">
                        {service.badge}
                      </span>
                    )}

                    {/* Icon Container with Micro-interaction */}
                    <div className="w-14 h-14 bg-white text-[#0F3D3E] border border-stone-200/60 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#C8A35F] group-hover:text-white group-hover:border-[#C8A35F] transition-all duration-500">
                      <IconComponent className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-xl font-bold text-[#0F3D3E] mb-3 group-hover:text-[#C8A35F] transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {service.title}
                    </h3>

                    {/* Description focusing on outcomes */}
                    <p className="text-xs md:text-sm text-stone-600 mb-6 leading-relaxed flex-grow">
                      {service.description}
                    </p>

                    {/* Concise Benefit Bullets */}
                    <ul className="space-y-2.5 mb-6 border-t border-stone-200/50 pt-5">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-xs text-stone-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#C8A35F] shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Explore Link */}
                    <div className="mt-auto inline-flex items-center gap-2 text-[#0F3D3E] group-hover:text-[#C8A35F] font-bold text-xs uppercase tracking-wider transition-colors">
                      <span>Explore Solution</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Stronger CTA Button */}
        <div className="text-center mt-14">
          <Link to="/services">
            <Button className="btn-gold px-9 py-4 rounded-sm font-semibold text-sm uppercase tracking-wider inline-flex items-center gap-2 shadow-md hover:scale-[1.02] transition-all duration-300" aria-label="Explore Our Interior Solutions">
              <span>Explore Our Interior Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
