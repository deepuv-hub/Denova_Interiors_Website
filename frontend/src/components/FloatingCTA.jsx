import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/mock';

const FloatingCTA = () => {
  const whatsappNumber = companyInfo.primaryPhone.replace(/[^0-9]/g, '');
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Hi, I'm interested in your interior design services.`;

  return (
    <div className="floating-cta">
      <a
        href={whatsappLink}
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
      <a
  href="https://wa.me/919164466606?text=Hi%20Denova%20Creations,%20I%20am%20interested%20in%20interior%20design%20services."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-20 right-5 z-50"
>
  <div className="bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition">
    WhatsApp
  </div>
</a>
    </div>
  );
};

export default FloatingCTA;
