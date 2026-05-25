import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Target, Heart, Lightbulb, Award, Users, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { companyInfo } from '../data/mock';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Execution Excellence',
      description: 'We prioritize flawless execution, ensuring every project is delivered with precision and attention to detail.'
    },
    {
      icon: Heart,
      title: 'Client-Centric Approach',
      description: 'Your satisfaction is our priority. We listen, understand, and deliver designs that exceed expectations.'
    },
    {
      icon: Lightbulb,
      title: 'Innovative Design',
      description: 'Blending creativity with functionality, we create spaces that are both beautiful and practical.'
    },
    {
      icon: Award,
      title: 'Quality Materials',
      description: 'We use only premium materials and finishes, ensuring durability and aesthetic excellence.'
    }
  ];

  const stats = [
    { value: '150+', label: 'Projects Completed' },
    { value: '4.9', label: 'Client Rating' },
    { value: '8+', label: 'Years Experience' },
    { value: '50+', label: 'Happy Clients' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-[#C8A35F] font-medium mb-4 tracking-wide uppercase text-sm">About Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Crafting Spaces That
              <span className="text-[#C8A35F]"> Inspire</span>
            </h1>
            <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
              Denova Creations is a premium interior design firm based in Bengaluru, dedicated to transforming spaces into personalized sanctuaries that reflect your style and enhance your lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C8A35F] font-medium mb-4 tracking-wide uppercase text-sm">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                A Division of Denova Creations
              </h2>
              <div className="space-y-4 text-[#4A4A4A] leading-relaxed">
                <p>
                  Founded with a passion for design excellence, Denova Creations has grown to become one of Bengaluru's trusted names in interior design. As a division of Denova Creations, we bring together creativity, craftsmanship, and commitment to deliver exceptional spaces.
                </p>
                <p>
                  Our journey began with a simple belief: every space has the potential to be extraordinary. Today, we've helped over 150 families and businesses transform their environments into spaces that truly reflect their personality and needs.
                </p>
                <p>
                  We specialize in residential, apartment, villa, and commercial interiors, offering end-to-end solutions from concept to completion. Our team of experienced designers and craftsmen work tirelessly to bring your vision to life within the promised timeline.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Interior Design Studio"
                className="w-full h-[500px] object-cover rounded-sm"
              />
              <div className="absolute -bottom-8 -left-8 bg-[#C8A35F] p-8 rounded-sm hidden lg:block">
                <p className="text-4xl font-bold text-[#1F1F1F]" style={{ fontFamily: 'Playfair Display, serif' }}>8+</p>
                <p className="text-[#1F1F1F]/80">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1F1F1F]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-[#C8A35F] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {stat.value}
                </p>
                <p className="text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-[#C8A35F] font-medium mb-3 tracking-wide uppercase text-sm">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              What Drives Us
            </h2>
            <p className="text-[#4A4A4A] max-w-2xl mx-auto">
              Our core values guide every project we undertake
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="flex gap-6 p-8 border border-gray-100 rounded-sm hover:border-[#C8A35F] transition-colors">
                <div className="w-14 h-14 bg-[#C8A35F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-7 h-7 text-[#C8A35F]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {value.title}
                  </h3>
                  <p className="text-[#4A4A4A] leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Premium Interior Design"
                className="w-full h-[500px] object-cover rounded-sm"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-[#C8A35F] font-medium mb-4 tracking-wide uppercase text-sm">Why Denova</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Why Choose Denova Creations?
              </h2>
              <div className="space-y-4">
                {[
                  'Premium designs at budget-friendly prices',
                  'End-to-end turnkey solutions',
                  'Timely project delivery within 45-60 days',
                  'Experienced team of designers & craftsmen',
                  'Quality materials with warranty',
                  'Transparent pricing with no hidden costs',
                  'Post-delivery support & assistance',
                  'Serving all zones of Bengaluru'
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C8A35F] flex-shrink-0" />
                    <span className="text-[#4A4A4A]">{point}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/contact">
                  <Button className="btn-gold px-8 py-3 rounded-sm font-semibold flex items-center gap-2">
                    Start Your Project
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#C8A35F]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-[#1F1F1F]/80 text-lg mb-8 max-w-2xl mx-auto">
            Ready to transform your space? Contact us for a free consultation and let our experts guide you through the journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-[#1F1F1F] text-white hover:bg-[#333] px-8 py-4 text-lg rounded-sm font-semibold">
                Contact Us
              </Button>
            </Link>
            <a href={`tel:${companyInfo.primaryPhone}`}>
              <Button className="bg-white text-[#1F1F1F] hover:bg-white/90 px-8 py-4 text-lg rounded-sm font-semibold">
                Call {companyInfo.primaryPhone}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
