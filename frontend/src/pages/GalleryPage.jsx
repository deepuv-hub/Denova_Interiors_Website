import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { factoryGallery, companyInfo } from '../data/mock';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(factoryGallery.map(item => item.category))];

  const filteredGallery = activeCategory === 'All'
    ? factoryGallery
    : factoryGallery.filter(item => item.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-[#C8A35F] font-medium mb-4 tracking-wide uppercase text-sm">Our Facility</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Factory &
              <span className="text-[#C8A35F]"> Gallery</span>
            </h1>
            <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
              Take a look at our state-of-the-art facility and the quality of work we deliver for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
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

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGallery.map((item) => (
              <div 
                key={item.id} 
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative aspect-square overflow-hidden rounded-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#1F1F1F]/0 group-hover:bg-[#1F1F1F]/60 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                      <p className="text-white font-semibold text-lg mb-1">{item.title}</p>
                      <p className="text-white/70 text-sm">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredGallery.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#777777] text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-[#C8A35F] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-sm"
            />
            <div className="mt-4 text-center">
              <p className="text-white text-xl font-semibold">{selectedImage.title}</p>
              <p className="text-white/70">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-[#1F1F1F]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Want to See Our Work in Person?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a visit to our facility or completed project sites to experience our quality firsthand.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="btn-gold px-8 py-4 text-lg rounded-sm font-semibold flex items-center gap-2">
                Schedule a Visit
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href={`tel:${companyInfo.primaryPhone}`}>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-[#1F1F1F] px-8 py-4 text-lg rounded-sm font-semibold transition-colors">
                Call Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
