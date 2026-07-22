import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { Button } from '../ui/button';

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

const PortfolioSection = () => {
  return (
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
  );
};

export default PortfolioSection;
