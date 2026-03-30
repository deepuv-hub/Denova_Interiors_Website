import { SCRIPT_URL } from "../utils/api";
import React, { useState, useEffect } from 'react';
import { X, Phone, ArrowRight } from 'lucide-react';
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
    const storedCount = parseInt(sessionStorage.getItem('leadFormShowCount') || '0');
    const wasDismissed = sessionStorage.getItem('leadFormDismissed') === 'true';

    setShowCount(storedCount);

    if (!wasDismissed && storedCount < 2) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        const newCount = storedCount + 1;
        setShowCount(newCount);
        sessionStorage.setItem('leadFormShowCount', newCount.toString());
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('leadFormDismissed', 'true');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !/^[0-9]{10}$/.test(formData.phone)) {
      toast.error("Enter valid name and 10-digit phone number");
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          location: "Floating Form",
          source: "Website",
        }),
      });

      toast.success("Thank you! Our team will call you shortly.");

      setFormData({ name: "", phone: "", propertyType: "" });
      setIsVisible(false);
      sessionStorage.setItem("leadFormDismissed", "true");

    } catch (error) {
      toast.error("Something went wrong");
    }

    setIsSubmitting(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white rounded-sm shadow-2xl max-w-md w-full overflow-hidden">

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="bg-[#1F1F1F] text-white p-6">
          <h3 className="text-xl font-bold">
            Get Your <span className="text-[#C8A35F]">Free Quote</span>
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">

          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />

          <Input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Submitting..." : "Get Free Consultation"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

        </form>

        <div className="text-center pb-4">
          <a href={`tel:${companyInfo.primaryPhone}`}>
            <Phone className="inline w-4 h-4 mr-1" />
            {companyInfo.primaryPhone}
          </a>
        </div>

      </div>
    </div>
  );
};

export default FloatingLeadForm;