import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/mock';

const FloatingCTA = () => {
  const whatsappNumber = companyInfo.primaryPhone.replace(/[^0-9]/g, '');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi, I'm interested in your interior design services.`;

  return (
    <div className="floating-cta">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn bg-[#25D366] text-white"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href={`tel:${companyInfo.primaryPhone}`}
        className="floating-btn bg-[#C8A35F] text-[#1F1F1F]"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingCTA;
