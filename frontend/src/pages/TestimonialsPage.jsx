import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote } from 'lucide-react';
import { Button } from '../components/ui/button';
import { testimonials, companyInfo } from '../data/mock';

const TestimonialsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-[#C8A35F] font-medium mb-4 tracking-wide uppercase text-sm">Testimonials</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              What Our Clients
              <span className="text-[#C8A35F]"> Say</span>
            </h1>
            <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
              Real experiences from our valued clients. Their satisfaction is our greatest achievement.
            </p>
          </div>
          <div className="flex items-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#C8A35F] text-[#C8A35F]" />
                ))}
              </div>
              <span className="text-2xl font-bold text-[#1A1A1A]">{companyInfo.rating}</span>
            </div>
            <div className="text-[#777777]">
              Based on {companyInfo.projectsCompleted}+ happy clients
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card bg-white p-8 rounded-sm border border-gray-100 hover:border-[#C8A35F] transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#C8A35F] text-[#C8A35F]" />
                    ))}
                  </div>
                  <Quote className="w-10 h-10 text-[#C8A35F]/20" />
                </div>
                <p className="text-[#4A4A4A] text-lg mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-[#1A1A1A]">{testimonial.name}</p>
                    <p className="text-[#777777] text-sm">{testimonial.projectType}</p>
                    <p className="text-[#C8A35F] text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1F1F1F]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-[#C8A35F] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                {companyInfo.rating}
              </p>
              <p className="text-white/70">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-[#C8A35F] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                {companyInfo.projectsCompleted}+
              </p>
              <p className="text-white/70">Happy Clients</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-[#C8A35F] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                100%
              </p>
              <p className="text-white/70">Project Completion</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-[#C8A35F] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                95%
              </p>
              <p className="text-white/70">Referral Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#C8A35F]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-[#1F1F1F]/80 text-lg mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied clients. Let's create a space you'll love.
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

export default TestimonialsPage;
