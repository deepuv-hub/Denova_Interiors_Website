import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { companyInfo } from '../data/mock';

const FloatingCTA = () => {
  const whatsappNumber = "919164466606";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20Denova%20Creations,%20I%20am%20interested%20in%20interior%20design%20services.`;

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col gap-3 select-none">
      
      {/* Redesigned Premium WhatsApp Button (Clean & Luxury aesthetic) */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 bg-[#0A2526] text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(10,37,38,0.3)] hover:scale-115 active:scale-95 transition-all duration-300 relative group"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 md:w-6 md:h-6 fill-current text-emerald-400" />
        <span className="absolute right-15 bg-[#0F3D3E] text-[#E8D8C4] border border-[#E8D8C4]/20 text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
          WhatsApp Us
        </span>
      </a>

      {/* Redesigned Premium Call Button */}
      <a
        href={`tel:${companyInfo.primaryPhone}`}
        className="w-12 h-12 md:w-14 md:h-14 bg-[#0F3D3E] text-[#E8D8C4] border border-[#E8D8C4]/25 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(15,61,62,0.3)] hover:scale-115 active:scale-95 transition-all duration-300 relative group"
        aria-label="Call Now"
      >
        <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#E8D8C4]" />
        <span className="absolute right-15 bg-[#0F3D3E] text-[#E8D8C4] border border-[#E8D8C4]/20 text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
          Call Expert
        </span>
      </a>

    </div>
  );
};

export default FloatingCTA;
