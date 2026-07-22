import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../data/mock';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
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
  );
};

export default TestimonialsSection;
