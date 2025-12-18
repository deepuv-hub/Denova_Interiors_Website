import React, { useState, useEffect } from 'react';
import { X, Send, Phone, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { companyInfo } from '../data/mock';
import { toast } from 'sonner';

const FloatingLeadForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [showCount, setShowCount] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    propertyType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check session storage for show count and dismissed status
    const storedCount = parseInt(sessionStorage.getItem('leadFormShowCount') || '0');
    const wasDismissed = sessionStorage.getItem('leadFormDismissed') === 'true';
    
    setShowCount(storedCount);
    
    // Only show if not dismissed and shown less than 2 times
    if (!wasDismissed && storedCount < 2) {
      // First appearance after 30 seconds
      const firstTimer = setTimeout(() => {
        if (storedCount < 2) {
          setIsVisible(true);
          const newCount = storedCount + 1;
          setShowCount(newCount);
          sessionStorage.setItem('leadFormShowCount', newCount.toString());
        }
      }, 30000); // 30 seconds

      return () => clearTimeout(firstTimer);
    }
  }, []);

  useEffect(() => {
    // Second appearance after closing the first one (wait 60 seconds)
    if (!isVisible && showCount === 1 && !isDismissed) {
      const secondTimer = setTimeout(() => {
        setIsVisible(true);
        setShowCount(2);
        sessionStorage.setItem('leadFormShowCount', '2');
      }, 60000); // 60 seconds after first close

      return () => clearTimeout(secondTimer);
    }
  }, [isVisible, showCount, isDismissed]);

  const handleClose = () => {
    setIsVisible(false);
    if (showCount >= 2) {
      setIsDismissed(true);
      sessionStorage.setItem('leadFormDismissed', 'true');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast.error('Please fill in your name and phone number');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission (mock)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Thank you! Our team will call you shortly.');
    setFormData({ name: '', phone: '', propertyType: '' });
    setIsSubmitting(false);
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('leadFormDismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-white rounded-sm shadow-2xl max-w-md w-full overflow-hidden animate-fade-in-up">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="bg-[#1F1F1F] text-white p-6 pb-8">
          <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            Get Your <span className="text-[#C8A35F]">Free Quote</span>
          </h3>
          <p className="text-white/70 text-sm">
            Book a free consultation with our design experts
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 -mt-4">
          <div className="bg-white rounded-sm shadow-lg p-5 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="lead-name" className="text-[#4A4A4A] text-sm">Your Name *</Label>
              <Input
                id="lead-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-gray-200 focus:border-[#C8A35F] rounded-sm"
                placeholder="Enter your name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="lead-phone" className="text-[#4A4A4A] text-sm">Phone Number *</Label>
              <Input
                id="lead-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="border-gray-200 focus:border-[#C8A35F] rounded-sm"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lead-property" className="text-[#4A4A4A] text-sm">Property Type</Label>
              <Select value={formData.propertyType} onValueChange={(value) => setFormData(prev => ({ ...prev, propertyType: value }))}>
                <SelectTrigger className="border-gray-200 focus:border-[#C8A35F] rounded-sm">
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1bhk">1 BHK Apartment</SelectItem>
                  <SelectItem value="2bhk">2 BHK Apartment</SelectItem>
                  <SelectItem value="3bhk">3 BHK Apartment</SelectItem>
                  <SelectItem value="4bhk">4+ BHK Apartment</SelectItem>
                  <SelectItem value="villa">Villa / Independent House</SelectItem>
                  <SelectItem value="commercial">Commercial / Office</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-gold py-3 rounded-sm font-semibold flex items-center justify-center gap-2"
            >
              {isSubmitting ? 'Submitting...' : 'Get Free Consultation'}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Or call us */}
          <div className="mt-4 text-center">
            <p className="text-[#777777] text-sm mb-2">Or call us directly</p>
            <a 
              href={`tel:${companyInfo.primaryPhone}`}
              className="inline-flex items-center gap-2 text-[#1F1F1F] font-semibold hover:text-[#C8A35F] transition-colors"
            >
              <Phone className="w-4 h-4" />
              {companyInfo.primaryPhone}
            </a>
          </div>
        </form>

        {/* Trust indicators */}
        <div className="bg-[#F5F5F5] px-6 py-4 flex items-center justify-center gap-6 text-sm text-[#777777]">
          <span className="flex items-center gap-1">
            <span className="text-[#C8A35F]">★</span> {companyInfo.rating} Rating
          </span>
          <span>|</span>
          <span>{companyInfo.projectsCompleted}+ Projects</span>
        </div>
      </div>
    </div>
  );
};

export default FloatingLeadForm;
