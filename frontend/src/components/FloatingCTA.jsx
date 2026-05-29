import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { companyInfo } from '../data/mock';

const FloatingCTA = () => {
  const whatsappNumber = "919164466606";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20Denova%20Creations,%20I%20am%20interested%20in%20interior%20design%20services.`;

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col gap-3 select-none">
      {/* Premium WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 relative group"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 md:w-6 md:h-6 fill-current" />
        <span className="absolute right-14 bg-stone-900/90 text-white text-[11px] px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap font-medium tracking-wide shadow-md">
          WhatsApp Us
        </span>
      </a>

      {/* Premium Call Button */}
      <a
        href={`tel:${companyInfo.primaryPhone}`}
        className="w-12 h-12 md:w-14 md:h-14 bg-[#0F3D3E] text-[#E8D8C4] border border-[#E8D8C4]/20 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 relative group"
        aria-label="Call Now"
      >
        <Phone className="w-5 h-5 md:w-6 md:h-6" />
        <span className="absolute right-14 bg-stone-900/90 text-white text-[11px] px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap font-medium tracking-wide shadow-md">
          Call Expert
        </span>
      </a>
    </div>
  );
};

export default FloatingCTA;
