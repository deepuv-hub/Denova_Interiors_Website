import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/mock';

const FloatingCTA = () => {
  const whatsappNumber = companyInfo.primaryPhone.replace(/[^0-9]/g, '');
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Hi, I'm interested in your interior design services.`;

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const link = e.currentTarget;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'whatsapp_click',
      link_url: link.href,
      link_text: link.getAttribute('aria-label') || link.innerText || 'WhatsApp'
    });
    setTimeout(() => {
      window.location.href = link.href;
    }, 300);
  };

  return (
    <div className="floating-cta">
      <a
        href={whatsappLink}
        onClick={handleWhatsAppClick}
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
