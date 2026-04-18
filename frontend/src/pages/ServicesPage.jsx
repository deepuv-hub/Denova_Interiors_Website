import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Home, Building2, Castle, Briefcase, Wrench, Key } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { services, companyInfo } from '../data/mock';

const iconMap = {
  Home: Home,
  Building2: Building2,
  Castle: Castle,
  Briefcase: Briefcase,
  Wrench: Wrench,
  Key: Key,
};

const ServicesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-[#C8A35F] font-medium mb-4 tracking-wide uppercase text-sm">Our Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Comprehensive Interior
              <span className="text-[#C8A35F]"> Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
              From residential to commercial, we offer end-to-end interior design services tailored to your unique needs and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-20">
            {services.map((service, idx) => {
              const IconComponent = iconMap[service.icon];
              const isEven = idx % 2 === 0;
              
              return (
                <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={isEven ? 'order-1' : 'order-1 lg:order-2'}>
                    <div className="w-16 h-16 bg-[#C8A35F]/10 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-[#C8A35F]" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {service.title}
                    </h2>
                    <p className="text-[#4A4A4A] text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, fidx) => (
                        <div key={fidx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#C8A35F] flex-shrink-0" />
                          <span className="text-[#4A4A4A]">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link to="/contact">
                      <Button className="btn-gold px-6 py-3 rounded-sm font-semibold flex items-center gap-2">
                        Get Quote
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </Link>
                  </div>
                  <div className={isEven ? 'order-2' : 'order-2 lg:order-1'}>
                    <div className="relative">
                      <img
                        src={`https://images.unsplash.com/photo-160${idx}210492486-724fe5c67fb0?w=800&q=80`.replace('160', `160${idx}`)}
                        alt={service.title}
                        className="w-full h-[400px] object-cover rounded-sm"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80';
                        }}
                      />
                      <div className="absolute -bottom-6 -right-6 bg-[#1F1F1F] text-white p-6 rounded-sm hidden lg:block">
                        <p className="text-sm text-white/70">Starting from</p>
                        <p className="text-2xl font-bold text-[#C8A35F]">₹1,500/sq.ft</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-[#C8A35F] font-medium mb-3 tracking-wide uppercase text-sm">What's Included</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Complete Package
            </h2>
            <p className="text-[#4A4A4A] max-w-2xl mx-auto">
              Every project includes these essential elements for a hassle-free experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Design Consultation', desc: 'Free initial consultation with our design experts' },
              { title: '3D Visualization', desc: 'Detailed 3D renders to visualize your space' },
              { title: 'Material Selection', desc: 'Curated material options within your budget' },
              { title: 'Project Management', desc: 'Dedicated manager for seamless execution' },
              { title: 'Quality Assurance', desc: 'Rigorous quality checks at every stage' },
              { title: 'Timely Delivery', desc: 'Project completion within promised timeline' },
              { title: 'Warranty Coverage', desc: 'Comprehensive warranty on workmanship' },
              { title: 'After-Sales Support', desc: 'Continued support post project handover' }
            ].map((item, idx) => (
              <Card key={idx} className="bg-white border-0 rounded-sm">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-[#C8A35F] text-[#1F1F1F] rounded-full flex items-center justify-center mb-4 font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-[#777777] text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#1F1F1F]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Get Started?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Book a free consultation with our design experts and take the first step towards your dream space.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/estimate">
              <Button className="btn-gold px-8 py-4 text-lg rounded-sm font-semibold">
                Get Free Estimate
              </Button>
            </Link>
            <a href={`tel:${companyInfo.primaryPhone}`}>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-[#1F1F1F] px-8 py-4 text-lg rounded-sm font-semibold transition-colors">
                Call {companyInfo.primaryPhone}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
