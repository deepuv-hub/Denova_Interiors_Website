import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { processSteps, faqs, companyInfo } from '../data/mock';

const ProcessPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-[#C8A35F] font-medium mb-4 tracking-wide uppercase text-sm">Our Process</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              How We
              <span className="text-[#C8A35F]"> Work</span>
            </h1>
            <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
              A streamlined, transparent process designed to transform your vision into reality with minimal hassle and maximum satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-0">
            {processSteps.map((step, idx) => (
              <div key={step.step} className="relative">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-12 ${idx !== processSteps.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  {/* Step Number */}
                  <div className="lg:col-span-2 flex lg:justify-center">
                    <div className="w-20 h-20 bg-[#C8A35F] text-[#1F1F1F] rounded-full flex items-center justify-center text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {step.step}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="lg:col-span-7">
                    <h3 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {step.title}
                    </h3>
                    <p className="text-[#4A4A4A] text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Duration */}
                  <div className="lg:col-span-3 flex lg:justify-end">
                    <div className="flex items-center gap-2 bg-[#F5F5F5] px-4 py-2 rounded-sm">
                      <Clock className="w-5 h-5 text-[#C8A35F]" />
                      <span className="text-[#4A4A4A] font-medium">{step.duration}</span>
                    </div>
                  </div>
                </div>
                
                {/* Connector Line */}
                {idx !== processSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-[calc(8.33%+40px-1px)] top-[calc(50%+40px)] h-[calc(50%-40px+48px)] w-0.5 bg-[#C8A35F]/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-16 bg-[#1F1F1F]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Typical Project Timeline
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Most residential projects are completed within 3 months. Timeline may vary based on project scope and complexity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-white/10 rounded-sm">
              <p className="text-4xl font-bold text-[#C8A35F] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>1-2 Weeks</p>
              <p className="text-white/80 font-medium mb-2">Design Phase</p>
              <p className="text-white/60 text-sm">Consultation, planning, and design approval</p>
            </div>
            <div className="text-center p-8 border border-white/10 rounded-sm">
              <p className="text-4xl font-bold text-[#C8A35F] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>6-10 Weeks</p>
              <p className="text-white/80 font-medium mb-2">Execution Phase</p>
              <p className="text-white/60 text-sm">Material procurement and installation</p>
            </div>
            <div className="text-center p-8 border border-white/10 rounded-sm">
              <p className="text-4xl font-bold text-[#C8A35F] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>2-3 Days</p>
              <p className="text-white/80 font-medium mb-2">Handover Phase</p>
              <p className="text-white/60 text-sm">Quality check and final delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#C8A35F] font-medium mb-3 tracking-wide uppercase text-sm">FAQs</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Frequently Asked Questions
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border border-gray-200 rounded-sm px-6 data-[state=open]:border-[#C8A35F]">
                  <AccordionTrigger className="text-left text-[#1A1A1A] font-medium hover:text-[#C8A35F] py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4A4A4A] pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#C8A35F]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Start Your Journey?
          </h2>
          <p className="text-[#1F1F1F]/80 text-lg mb-8 max-w-2xl mx-auto">
            Book your free consultation today and take the first step towards your dream interior.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-[#1F1F1F] text-white hover:bg-[#333] px-8 py-4 text-lg rounded-sm font-semibold flex items-center gap-2">
                Book Consultation
                <ArrowRight className="w-5 h-5" />
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

export default ProcessPage;
