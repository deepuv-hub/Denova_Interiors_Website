import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle2, Home, Building2, Castle, Briefcase, Wrench, Key, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { companyInfo, services, projects, testimonials, processSteps, clients } from '../data/mock';

const iconMap = {
  Home: Home,
  Building2: Building2,
  Castle: Castle,
  Briefcase: Briefcase,
  Wrench: Wrench,
  Key: Key,
};

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-[#1F1F1F] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80"
            alt="Luxury Interior Design"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 container-custom py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6 animate-fade-in">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C8A35F] text-[#C8A35F]" />
                ))}
              </div>
              <span className="text-white/80 text-sm">{companyInfo.rating} Rating • {companyInfo.projectsCompleted}+ Projects</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up" style={{ fontFamily: 'Playfair Display, serif' }}>
              Transform Your Space Into
              <span className="text-[#C8A35F]"> Extraordinary</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed animate-fade-in-up stagger-2">
              Premium interior design solutions for homes, apartments, villas & commercial spaces in Bengaluru. Quality craftsmanship delivered within {companyInfo.deliveryTimeline}.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up stagger-3">
              <Link to="/estimate">
                <Button className="btn-gold px-8 py-4 text-lg rounded-sm font-semibold flex items-center gap-2">
                  Get Free Estimate
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button className="btn-outline border-white text-white hover:bg-white hover:text-[#1F1F1F] px-8 py-4 text-lg rounded-sm font-semibold">
                  View Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-[#F5F5F5] py-6">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-0">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#C8A35F]/10 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-[#C8A35F]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#1F1F1F]">{companyInfo.rating}/5</p>
                <p className="text-sm text-[#777777]">Google Rating</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-300"></div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#C8A35F]/10 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-[#C8A35F]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#1F1F1F]">{companyInfo.projectsCompleted}+</p>
                <p className="text-sm text-[#777777]">Projects Delivered</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-300"></div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#C8A35F]/10 rounded-full flex items-center justify-center">
                <Home className="w-6 h-6 text-[#C8A35F]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#1F1F1F]">Bengaluru</p>
                <p className="text-sm text-[#777777]">All Zones Covered</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-300"></div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#C8A35F]/10 rounded-full flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-[#C8A35F]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#1F1F1F]">45-60 Days</p>
                <p className="text-sm text-[#777777]">Typical Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-[#C8A35F] font-medium mb-3 tracking-wide uppercase text-sm">What We Offer</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Services
            </h2>
            <p className="text-[#4A4A4A] max-w-2xl mx-auto text-lg">
              Comprehensive interior design solutions tailored to your needs and budget
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card key={service.id} className="service-card border border-gray-100 bg-white hover:border-[#C8A35F] rounded-sm">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-[#C8A35F]/10 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-7 h-7 text-[#C8A35F]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {service.title}
                    </h3>
                    <p className="text-[#4A4A4A] mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-[#777777]">
                          <CheckCircle2 className="w-4 h-4 text-[#C8A35F]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="btn-outline px-8 py-3 rounded-sm font-semibold">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-[#C8A35F] font-medium mb-3 tracking-wide uppercase text-sm">Our Portfolio</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Featured Projects
            </h2>
            <p className="text-[#4A4A4A] max-w-2xl mx-auto text-lg">
              Explore our latest interior design projects across Bengaluru
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 6).map((project) => (
              <div key={project.id} className="project-card bg-white rounded-sm overflow-hidden shadow-sm">
                <div className="img-zoom aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-[#C8A35F]/10 text-[#C8A35F] text-xs font-medium rounded mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {project.title}
                  </h3>
                  <p className="text-[#777777] text-sm mb-3">{project.location}</p>
                  <div className="flex justify-between text-sm text-[#4A4A4A]">
                    <span>{project.area}</span>
                    <span>{project.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects">
              <Button className="btn-gold px-8 py-3 rounded-sm font-semibold flex items-center gap-2 mx-auto">
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-[#C8A35F] font-medium mb-3 tracking-wide uppercase text-sm">How We Work</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Process
            </h2>
            <p className="text-[#4A4A4A] max-w-2xl mx-auto text-lg">
              A streamlined approach to transform your vision into reality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <div key={step.step} className="relative text-center">
                <div className="w-16 h-16 bg-[#C8A35F] text-[#1F1F1F] rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-[#C8A35F]/30"></div>
                )}
                <h4 className="text-lg font-semibold text-[#1A1A1A] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {step.title}
                </h4>
                <p className="text-sm text-[#777777]">{step.duration}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/process">
              <Button className="btn-outline px-8 py-3 rounded-sm font-semibold">
                Learn More About Our Process
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section-padding bg-[#1F1F1F]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-[#C8A35F] font-medium mb-3 tracking-wide uppercase text-sm">Testimonials</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(0, 2).map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card bg-white/5 backdrop-blur-sm p-8 rounded-sm border border-white/10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#C8A35F] text-[#C8A35F]" />
                  ))}
                </div>
                <p className="text-white/80 text-lg mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-white/60 text-sm">{testimonial.projectType} • {testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button className="btn-gold px-8 py-3 rounded-sm font-semibold">
                Read More Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-[#C8A35F] font-medium mb-3 tracking-wide uppercase text-sm">Trusted By</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Clients
            </h2>
            <p className="text-[#4A4A4A] max-w-2xl mx-auto text-lg">
              We're proud to have worked with these esteemed organizations
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-sm flex items-center justify-center min-h-[120px] border border-gray-100 hover:border-[#C8A35F] hover:shadow-md transition-all group"
              >
                {client.logo ? (
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="max-h-16 max-w-[140px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                ) : null}
                <p 
                  className={`text-[#1A1A1A] font-semibold text-center text-sm md:text-base ${client.logo ? 'hidden' : 'block'}`}
                >
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#C8A35F]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Transform Your Space?
          </h2>
          <p className="text-[#1F1F1F]/80 text-lg mb-8 max-w-2xl mx-auto">
            Get a free consultation and estimate for your interior design project. Our experts are ready to bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/estimate">
              <Button className="bg-[#1F1F1F] text-white hover:bg-[#333] px-8 py-4 text-lg rounded-sm font-semibold">
                Get Free Estimate
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

export default HomePage;
