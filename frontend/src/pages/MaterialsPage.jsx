import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Layers, Settings, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { materialGuide, companyInfo } from '../data/mock';

const MaterialsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-[#C8A35F] font-medium mb-4 tracking-wide uppercase text-sm">Material Guide</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Understanding Interior
              <span className="text-[#C8A35F]"> Materials</span>
            </h1>
            <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
              Make informed decisions about the materials that go into your home. Learn about plywood grades, laminate types, hardware options, and get expert color guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <a href="#plywood" className="flex items-center gap-3 p-4 border border-gray-100 rounded-sm hover:border-[#C8A35F] transition-colors">
              <Layers className="w-8 h-8 text-[#C8A35F]" />
              <div>
                <p className="font-semibold text-[#1A1A1A]">Plywood</p>
                <p className="text-sm text-[#777777]">Core Structure</p>
              </div>
            </a>
            <a href="#laminates" className="flex items-center gap-3 p-4 border border-gray-100 rounded-sm hover:border-[#C8A35F] transition-colors">
              <Palette className="w-8 h-8 text-[#C8A35F]" />
              <div>
                <p className="font-semibold text-[#1A1A1A]">Laminates</p>
                <p className="text-sm text-[#777777]">Surface Finish</p>
              </div>
            </a>
            <a href="#hardware" className="flex items-center gap-3 p-4 border border-gray-100 rounded-sm hover:border-[#C8A35F] transition-colors">
              <Settings className="w-8 h-8 text-[#C8A35F]" />
              <div>
                <p className="font-semibold text-[#1A1A1A]">Hardware</p>
                <p className="text-sm text-[#777777]">Functionality</p>
              </div>
            </a>
            <a href="#colors" className="flex items-center gap-3 p-4 border border-gray-100 rounded-sm hover:border-[#C8A35F] transition-colors">
              <Lightbulb className="w-8 h-8 text-[#C8A35F]" />
              <div>
                <p className="font-semibold text-[#1A1A1A]">Color Tips</p>
                <p className="text-sm text-[#777777]">Design Guidance</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Plywood Section */}
      <section id="plywood" className="section-padding">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-[#C8A35F]/10 rounded-lg flex items-center justify-center">
              <Layers className="w-7 h-7 text-[#C8A35F]" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display, serif' }}>
                {materialGuide.plywood.title}
              </h2>
              <p className="text-[#777777]">The foundation of your furniture</p>
            </div>
          </div>
          <p className="text-[#4A4A4A] text-lg mb-8 max-w-3xl">{materialGuide.plywood.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {materialGuide.plywood.types.map((type, idx) => (
              <Card key={idx} className="border border-gray-100 hover:border-[#C8A35F] transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {type.name}
                  </h3>
                  <p className="text-[#4A4A4A] mb-4">{type.description}</p>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C8A35F] mt-0.5 flex-shrink-0" />
                      <span><strong>Best for:</strong> {type.recommended}</span>
                    </p>
                    <p className="text-[#C8A35F] font-semibold text-base">{type.priceRange}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-[#F5F5F5] p-6 rounded-sm">
            <p className="text-[#4A4A4A]">
              <strong className="text-[#1A1A1A]">Trusted Brands We Use:</strong> {materialGuide.plywood.brands.join(' • ')}
            </p>
          </div>
        </div>
      </section>

      {/* Laminates Section */}
      <section id="laminates" className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-[#C8A35F]/10 rounded-lg flex items-center justify-center">
              <Palette className="w-7 h-7 text-[#C8A35F]" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display, serif' }}>
                {materialGuide.laminates.title}
              </h2>
              <p className="text-[#777777]">The visual appeal of your furniture</p>
            </div>
          </div>
          <p className="text-[#4A4A4A] text-lg mb-8 max-w-3xl">{materialGuide.laminates.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {materialGuide.laminates.types.map((type, idx) => (
              <Card key={idx} className="bg-white border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {type.name}
                  </h3>
                  <p className="text-[#4A4A4A] mb-4">{type.description}</p>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C8A35F] mt-0.5 flex-shrink-0" />
                      <span><strong>Best for:</strong> {type.recommended}</span>
                    </p>
                    <p className="text-[#C8A35F] font-semibold text-base">{type.priceRange}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-white p-6 rounded-sm">
            <p className="text-[#4A4A4A]">
              <strong className="text-[#1A1A1A]">Trusted Brands We Use:</strong> {materialGuide.laminates.brands.join(' • ')}
            </p>
          </div>
        </div>
      </section>

      {/* Hardware Section */}
      <section id="hardware" className="section-padding">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-[#C8A35F]/10 rounded-lg flex items-center justify-center">
              <Settings className="w-7 h-7 text-[#C8A35F]" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display, serif' }}>
                {materialGuide.hardware.title}
              </h2>
              <p className="text-[#777777]">The functionality of your furniture</p>
            </div>
          </div>
          <p className="text-[#4A4A4A] text-lg mb-8 max-w-3xl">{materialGuide.hardware.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {materialGuide.hardware.types.map((type, idx) => (
              <Card key={idx} className="border border-gray-100 hover:border-[#C8A35F] transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {type.name}
                  </h3>
                  <p className="text-[#4A4A4A] mb-4">{type.description}</p>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C8A35F] mt-0.5 flex-shrink-0" />
                      <span><strong>Best for:</strong> {type.recommended}</span>
                    </p>
                    <p className="text-[#C8A35F] font-medium">
                      Brands: {type.brands.join(' • ')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Color Tips Section */}
      <section id="colors" className="section-padding bg-[#1F1F1F]">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-[#C8A35F]/20 rounded-lg flex items-center justify-center">
              <Lightbulb className="w-7 h-7 text-[#C8A35F]" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                {materialGuide.colorGuidance.title}
              </h2>
              <p className="text-white/60">Expert guidance for your interior colors</p>
            </div>
          </div>
          
          {/* Color Tips Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {materialGuide.colorGuidance.tips.map((tip, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm p-6 rounded-sm border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-[#C8A35F]" />
                  <h4 className="font-semibold text-white">{tip.title}</h4>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>

          {/* Popular Palettes */}
          <h3 className="text-2xl font-semibold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Popular Color Palettes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {materialGuide.colorGuidance.popularPalettes.map((palette, idx) => (
              <div key={idx} className="bg-white p-6 rounded-sm">
                <h4 className="font-semibold text-[#1A1A1A] mb-4 text-lg">{palette.name}</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {palette.colors.map((color, cidx) => (
                    <span key={cidx} className="px-4 py-2 bg-[#F5F5F5] text-[#4A4A4A] text-sm rounded-sm font-medium">
                      {color}
                    </span>
                  ))}
                </div>
                <p className="text-[#777777] text-sm">
                  <strong className="text-[#1A1A1A]">Best for:</strong> {palette.bestFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#C8A35F]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Need Help Choosing Materials?
          </h2>
          <p className="text-[#1F1F1F]/80 text-lg mb-8 max-w-2xl mx-auto">
            Our design experts will guide you through material selection based on your requirements and budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-[#1F1F1F] text-white hover:bg-[#333] px-8 py-4 text-lg rounded-sm font-semibold flex items-center gap-2">
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/estimate">
              <Button className="bg-white text-[#1F1F1F] hover:bg-white/90 px-8 py-4 text-lg rounded-sm font-semibold">
                Get Cost Estimate
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaterialsPage;
