import React, { useState, useEffect , useCallback } from "react";
import { Link } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { companyInfo } from "../data/mock";
import { projects } from "../data/projects";
import { useNavigate } from 'react-router-dom';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeType, setActiveType] = useState('all');
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = projects.flatMap((project) =>
  project.images.map((img, index) => ({
    id: `${project.id}-${index}`,
    image: img,
    title: project.title,
    category: project.category,
    type: project.type,
    projectId: project.id,
  }))
);
  

  // ================= CATEGORY STRUCTURE =================
  const residentialCategories = [
    "Kitchen",
    "Wardrobe",
    "Living Room",
    "Bedroom",
    "Ceiling"
  ];

  const commercialCategories = [
      "Office",
    
  ];

  const allCategories = [
    "All",
    ...residentialCategories,
    ...commercialCategories
  ];


// ================= FILTER LOGIC =================
  const filteredGallery = galleryItems.filter((item) => {
    const matchCategory =
      activeCategory === "All" || item.category === activeCategory;

    const matchType =
      activeType === "all" || item.type === activeType;

    return matchCategory && matchType;
  });

const handleNext = useCallback(() => {
  setCurrentIndex((prev) =>
    prev === filteredGallery.length - 1 ? 0 : prev + 1
  );
}, [filteredGallery.length]);

const handlePrev = useCallback(() => {
  setCurrentIndex((prev) =>
    prev === 0 ? filteredGallery.length - 1 : prev - 1
  );
}, [filteredGallery.length]);

useEffect(() => {
  const handleKey = (e) => {
    if (!selectedImage) return;

    if (e.key === "ArrowRight") handleNext();
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "Escape") setSelectedImage(null);
  };

  window.addEventListener("keydown", handleKey);

  return () => {
    window.removeEventListener("keydown", handleKey);
  };
}, [selectedImage, handleNext, handlePrev]);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedImage]);

  const getCategoryImage = (category) => {
  const project = projects.find(
    (p) => p.category === category && p.type === "residential"
  );
  return project?.images?.[0] || "/images/placeholder.jpg";
};

const getCategoryCount = (category) => {
  return projects.filter(
    (p) => p.category === category && p.type === "residential"
  ).length;
};
  
  

  

  return (
    <div>   
            {/* ================= HERO ================= */}
<section className="py-14 md:py-16 bg-gradient-to-b from-[#F4F4F4] to-[#E6E6E6]">
  <div className="container-custom flex justify-center">
    
    <div className="max-w-3xl text-center">
      
      <p className="text-[#C8A35F] font-medium mb-3 tracking-wide uppercase text-xs">
        Our Work
      </p>

      <h1
        className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4 leading-tight"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        Real Interior Projects{" "}
        <span className="text-[#C8A35F]">by Denova</span>
      </h1>

      <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed max-w-xl mx-auto">
        Explore residential and commercial interior designs executed for real clients.
      </p>

    </div>

  </div>
</section>

      

     

      {/* ================= GALLERY ================= */}
<section className="py-16 md:py-20 bg-[#FAF8F4]">
  <div className="container-custom">

    {/* ================= CATEGORY FILTER ================= */}
    <div className="flex flex-wrap justify-center gap-2 mb-10">
      {allCategories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-5 py-2 text-sm rounded-full font-medium transition-all ${
            activeCategory === category
              ? 'bg-[#C8A35F] text-[#1F1F1F]'
              : 'bg-white border border-[#E5DED3] text-[#4A4A4A] hover:bg-[#C8A35F]/10'
          }`}
        >
          {category}
        </button>
      ))}
    </div>

    {/* ================= GRID ================= */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">

      {filteredGallery.map((item, index) => (
        <React.Fragment key={item.id}>

          {/* IMAGE CARD */}
<div
  className="group cursor-pointer"
  onClick={() => {
    setSelectedImage(item);
    setCurrentIndex(index);
  }}
>
            <div className="relative aspect-square overflow-hidden rounded-md shadow-sm hover:shadow-md transition">

              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/50 transition-all duration-300 flex items-end">
                
                <div className="w-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-semibold text-sm leading-tight">
                    {item.title}
                  </p>
                  <p className="text-white/70 text-xs">
                    {item.category}
                  </p>
                  <Link
  to={`/gallery/${item.type}/${item.category}/${item.projectId}`}
  onClick={(e) => e.stopPropagation()}
  className="text-white text-xs underline mt-2 block"
>
  View Full Project →
</Link>
                </div>

              </div>
            </div>
          </div>

          {/* ================= INLINE CTA ================= */}
          {(index + 1) % 8 === 0 && (
            <div className="col-span-full">
              <div className="bg-[#1F1F1F] text-center py-8 px-6 rounded-md shadow-sm">
                <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
                  Like what you see?
                </h3>
                <p className="text-white/70 text-sm md:text-base mb-5">
                  Get a similar design tailored for your home and budget.
                </p>

                <Link to="/contact">
                  <Button className="btn-gold px-6 py-3 flex items-center gap-2 mx-auto">
                    Get Free Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          )}

        </React.Fragment>
      ))}
      {/* ================= FINAL CTA ================= */}
<section className="py-16 bg-[#1F1F1F] mt-16">
  <div className="container-custom text-center">

    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
      Ready to Transform Your Home?
    </h2>

    <p className="text-white/70 mb-6 max-w-2xl mx-auto">
      Get a personalized design plan based on your space, budget & lifestyle.
    </p>

    <div className="flex flex-wrap justify-center gap-4">
      
      <Link to="/contact">
        <Button className="btn-gold px-8 py-4 text-lg flex items-center gap-2">
          Get Free Consultation
          <ArrowRight className="w-5 h-5" />
        </Button>
      </Link>

      <a href={`tel:${companyInfo.primaryPhone}`}>
        <Button className="border-2 border-white text-white hover:bg-white hover:text-[#1F1F1F] px-8 py-4 text-lg">
          Call Now
        </Button>
      </a>

    </div>

  </div>
</section>

    </div>

    {/* ================= EMPTY STATE ================= */}
    {filteredGallery.length === 0 && (
      <div className="text-center py-16">
        <p className="text-[#777777] text-base">
          No designs found in this category.
        </p>
      </div>
    )}

  </div>
</section>

   {/* ================= LIGHTBOX ================= */}
{selectedImage && (
  <div
   className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm overflow-y-auto flex items-start justify-center pt-16 pb-16 animate-fadeIn"
    onClick={() => setSelectedImage(null)}
  >

    {/* Close Button */}
    <button
      className="absolute top-5 right-5 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition"
      onClick={() => setSelectedImage(null)}
    >
      <X className="w-7 h-7" />
    </button>

    {/* Left Arrow */}
    <button
      onClick={(e) => {
        e.stopPropagation();
        handlePrev();
      }}
      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition z-50"
    >
      ‹
    </button>

    {/* Right Arrow */}
    <button
      onClick={(e) => {
        e.stopPropagation();
        handleNext();
      }}
      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition z-50"
    >
      ›
    </button>

    <div
      className="max-w-5xl w-full flex flex-col items-center gap-6 pb-10"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Image */}
      <img
        src={filteredGallery[currentIndex].image}
        alt={filteredGallery[currentIndex].title}        
        className="w-full h-auto max-h-[80vh] object-contain rounded-md mt-6"
      />
      

      <div className="mt-8 text-center max-w-2xl mx-auto bg-black/60 backdrop-blur-md p-5 rounded-lg">

  {/* Title */}
  <p className="text-white text-xl font-semibold mb-2">
    {filteredGallery[currentIndex].title}
  </p>

  <p className="text-[#C8A35F] text-xs uppercase tracking-wide mb-1">
  {filteredGallery[currentIndex].category} • {filteredGallery[currentIndex].type}
</p>

  <p className="text-white/60 text-sm mb-2">
  {projects.find(p => p.id === filteredGallery[currentIndex].projectId)?.location} • 
  {projects.find(p => p.id === filteredGallery[currentIndex].projectId)?.propertyType}
</p>
<p className="text-white/70 text-sm mb-3 max-w-md mx-auto">
  {projects.find(p => p.id === filteredGallery[currentIndex].projectId)?.description}
</p>

  {/* Category + Counter */}
  <p className="text-white/60 text-sm mb-4">
    {filteredGallery[currentIndex].category} • {currentIndex + 1} / {filteredGallery.length}
  </p>

  {/* Trust */}
  <p className="text-green-400 text-xs mb-1">
    ✔ 500+ Happy Homes Delivered
  </p>

  {/* Urgency */}
  <p className="text-red-400 text-xs mb-4">
    Limited consultation slots this week
  </p>

  {/* Supporting Text */}
  <p className="text-white/70 text-sm mb-3">
    Speak with our designers & get a custom plan
  </p>

  {/* Primary CTA */}
  <Link to="/contact">
    <Button className="btn-gold px-8 py-3 text-base flex items-center gap-2 mx-auto mt-2">
      Get Free Design Consultation
      <ArrowRight className="w-4 h-4" />
    </Button>
  </Link>

  {/* WhatsApp CTA (separate, NOT inside Link) */}
  <a
    href="https://wa.me/919164466606?text=Hi%20I%20liked%20this%20design.%20Can%20you%20share%20details?"
    target="_blank"
    rel="noopener noreferrer"
    className="block mt-4 mb-6"
  >
    <button className="bg-green-500 text-white px-6 py-2 rounded-md text-sm mt-2">
      Chat on WhatsApp
    </button>
  </a>
  <Link to={`/projects/${filteredGallery[currentIndex].projectId}`}>
  <button className="text-white/80 text-sm underline mt-3">
    View Full Project →
  </button>
</Link>

</div>
    </div>
  </div>

)}
<div className="fixed bottom-0 left-0 w-full bg-[#1F1F1F] text-white py-3 px-4 flex justify-between items-center z-50 md:hidden">

  <p className="text-sm">
    Get your home designed by experts
  </p>

  <Link to="/contact">
    <button className="bg-[#C8A35F] px-4 py-2 rounded text-sm">
      Free Quote
    </button>
  </Link>

</div>
  </div>
  );
};

export default GalleryPage;