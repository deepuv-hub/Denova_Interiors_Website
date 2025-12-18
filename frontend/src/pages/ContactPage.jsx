import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { companyInfo } from '../data/mock';
import { toast } from 'sonner';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, propertyType: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (mock)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Thank you for your enquiry! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      propertyType: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const whatsappNumber = companyInfo.primaryPhone.replace(/[^0-9]/g, '');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi, I'm interested in your interior design services.`;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-[#C8A35F] font-medium mb-4 tracking-wide uppercase text-sm">Contact Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Let's Start Your
              <span className="text-[#C8A35F]"> Project</span>
            </h1>
            <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
              Ready to transform your space? Get in touch with us for a free consultation and estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#4A4A4A]">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input border-gray-200 focus:border-[#C8A35F] rounded-sm py-3"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#4A4A4A]">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="form-input border-gray-200 focus:border-[#C8A35F] rounded-sm py-3"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#4A4A4A]">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input border-gray-200 focus:border-[#C8A35F] rounded-sm py-3"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="propertyType" className="text-[#4A4A4A]">Property Type</Label>
                    <Select value={formData.propertyType} onValueChange={handleSelectChange}>
                      <SelectTrigger className="border-gray-200 focus:border-[#C8A35F] rounded-sm py-3">
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1bhk">1 BHK Apartment</SelectItem>
                        <SelectItem value="2bhk">2 BHK Apartment</SelectItem>
                        <SelectItem value="3bhk">3 BHK Apartment</SelectItem>
                        <SelectItem value="4bhk">4+ BHK Apartment</SelectItem>
                        <SelectItem value="villa">Villa / Independent House</SelectItem>
                        <SelectItem value="commercial">Commercial / Office</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#4A4A4A]">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="form-input border-gray-200 focus:border-[#C8A35F] rounded-sm resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold px-8 py-4 rounded-sm font-semibold flex items-center gap-2 w-full md:w-auto"
                >
                  {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                  <Send className="w-5 h-5" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Contact Information
              </h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C8A35F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#C8A35F]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] mb-1">Phone</p>
                    <a href={`tel:${companyInfo.primaryPhone}`} className="text-[#4A4A4A] hover:text-[#C8A35F] transition-colors block">
                      {companyInfo.primaryPhone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C8A35F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#C8A35F]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] mb-1">Email</p>
                    <a href={`mailto:${companyInfo.email}`} className="text-[#4A4A4A] hover:text-[#C8A35F] transition-colors">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C8A35F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#C8A35F]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] mb-1">Address</p>
                    <p className="text-[#4A4A4A] leading-relaxed">
                      {companyInfo.address}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C8A35F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#C8A35F]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] mb-1">Business Hours</p>
                    <p className="text-[#4A4A4A]">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p className="text-[#777777] text-sm">Sunday by appointment only</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-sm font-semibold hover:bg-[#20BD5A] transition-colors w-full justify-center mb-8"
              >
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
              </a>

              {/* Map */}
              <div className="rounded-sm overflow-hidden h-[300px] border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2499366099!2d77.6379!3d12.8889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUzJzIwLjAiTiA3N8KwMzgnMTYuNCJF!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Denova Interiors Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
