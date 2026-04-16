import { SCRIPT_URL } from "../utils/api";
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { companyInfo } from '../data/mock';

const ContactPage = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // ✅ Handle select change
  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, propertyType: value }));
  };

  // ✅ Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanedPhone = formData.phone.replace(/\D/g, "");

    if (!formData.name || cleanedPhone.length !== 10) {
      alert("Enter valid details");
      return;
    }

    setIsSubmitting(true);

    fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({
        name: formData.name,
        phone: cleanedPhone,
        location: "Contact Page",
        source: "Website",
      }),
    });

    // ✅ Redirect to thank you
    window.location.href = "/thank-you?source=contact";
  };

  const whatsappNumber = companyInfo.primaryPhone.replace(/[^0-9]/g, '');
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Hi, I'm interested in your interior design services.`;

  return (
    <div>
      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6">

        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />

        <Input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />

        <Select value={formData.propertyType} onValueChange={handleSelectChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select property type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1bhk">1 BHK</SelectItem>
            <SelectItem value="2bhk">2 BHK</SelectItem>
          </SelectContent>
        </Select>

        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message"
        />

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Enquiry"}
        </Button>

      </form>
    </div>
  );
};

export default ContactPage;