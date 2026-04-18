import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Maximize2, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { projects, projectCategories, companyInfo } from '../data/mock';

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-[#C8A35F] font-medium mb-4 tracking-wide uppercase text-sm">Our Portfolio</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Explore Our
              <span className="text-[#C8A35F]"> Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
              Browse through our completed interior design projects across Bengaluru. Each project reflects our commitment to quality and client satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-[#C8A35F] text-[#1F1F1F]'
                    : 'bg-[#F5F5F5] text-[#4A4A4A] hover:bg-[#C8A35F]/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card bg-white rounded-sm overflow-hidden shadow-sm group">
                <div className="img-zoom aspect-[4/3] relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#1F1F1F]/0 group-hover:bg-[#1F1F1F]/40 transition-all duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-medium flex items-center gap-2">
                      View Details <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white text-[#1F1F1F] text-xs font-medium rounded">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {project.title}
                  </h3>
                  <p className="text-[#777777] text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-[#4A4A4A]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-[#C8A35F]" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize2 className="w-4 h-4 text-[#C8A35F]" />
                      {project.area}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-[#C8A35F]" />
                      {project.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#777777] text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#C8A35F]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Want to See Your Project Here?
          </h2>
          <p className="text-[#1F1F1F]/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your interior design project and add it to our portfolio of successful transformations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-[#1F1F1F] text-white hover:bg-[#333] px-8 py-4 text-lg rounded-sm font-semibold">
                Start Your Project
              </Button>
            </Link>
            <a href={`tel:${companyInfo.primaryPhone}`}>
              <Button className="bg-white text-[#1F1F1F] hover:bg-white/90 px-8 py-4 text-lg rounded-sm font-semibold">
                Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
