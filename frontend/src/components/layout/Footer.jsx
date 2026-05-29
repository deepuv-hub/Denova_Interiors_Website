import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { companyInfo, services } from '../../data/mock';
import locations from '../../data/locations';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Contact', path: '/contact' },
  { label: 'Privacy Policy', path: '/privacy-policy' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A2526] text-stone-300 border-t border-[#E8D8C4]/10 relative z-30 select-none">
      {/* 1. MAIN FOOTER (COMPACT LUXURY GRID) */}
      <div className="py-10 md:py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            
            {/* Column 1: Company Profile Summary */}
            <div className="flex flex-col text-left">
              <div className="mb-3">
                <span className="text-2xl font-bold text-white tracking-tight leading-none" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Denova<span className="text-[#E8D8C4]">.</span>
                </span>
                <span className="text-[9px] text-stone-400 font-bold uppercase tracking-widest mt-0.5 block">
                  Creations
                </span>
              </div>
              
              <p className="text-stone-400 text-[11px] leading-relaxed mb-4">
                Bengaluru's premier home interior brand. Specializing in factory-finished modular kitchens, bespoke wardrobes, and complete luxury turnkey residential interior designs.
              </p>
              
              {/* Luxury Social Icons Bar */}
              <div className="flex gap-2">
                <a
                  href="#"
                  className="w-8 h-8 bg-white/5 rounded-lg border border-white/5 flex items-center justify-center text-stone-400 hover:bg-[#E8D8C4] hover:text-[#0F3D3E] hover:border-[#E8D8C4] transition-all duration-300"
                  aria-label="Follow Denova Creations on Facebook"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white/5 rounded-lg border border-white/5 flex items-center justify-center text-stone-400 hover:bg-[#E8D8C4] hover:text-[#0F3D3E] hover:border-[#E8D8C4] transition-all duration-300"
                  aria-label="Follow Denova Creations on Instagram"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white/5 rounded-lg border border-white/5 flex items-center justify-center text-stone-400 hover:bg-[#E8D8C4] hover:text-[#0F3D3E] hover:border-[#E8D8C4] transition-all duration-300"
                  aria-label="Follow Denova Creations on LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white/5 rounded-lg border border-white/5 flex items-center justify-center text-stone-400 hover:bg-[#E8D8C4] hover:text-[#0F3D3E] hover:border-[#E8D8C4] transition-all duration-300"
                  aria-label="Subscribe to Denova Creations YouTube channel"
                >
                  <Youtube className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="text-left">
              <h4 className="text-[11px] uppercase font-bold tracking-widest text-[#E8D8C4] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                Quick Navigation
              </h4>
              <ul className="space-y-1.5 text-[11px]">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.path}
                      className="footer-link text-stone-400 hover:text-white flex items-center gap-1 hover:translate-x-1 duration-300"
                    >
                      <span className="text-stone-600">•</span> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Interior Design Services */}
            <div className="text-left">
              <h4 className="text-[11px] uppercase font-bold tracking-widest text-[#E8D8C4] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                Our Core Expertise
              </h4>
              <ul className="space-y-1.5 text-[11px]">
                {services.slice(0, 6).map((service) => (
                  <li key={service.id}>
                    <Link
                      to="/services"
                      className="footer-link text-stone-400 hover:text-white flex items-center gap-1 hover:translate-x-1 duration-300"
                    >
                      <span className="text-stone-600">•</span> {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact & Studio Info */}
            <div className="text-left">
              <h4 className="text-[11px] uppercase font-bold tracking-widest text-[#E8D8C4] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                Studio Contact
              </h4>
              <ul className="space-y-2.5 text-[11px] text-stone-400">
                <li className="flex items-start gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-[#E8D8C4] flex-shrink-0 mt-0.5" />
                  <div>
                    <a href={`tel:${companyInfo.primaryPhone}`} className="text-stone-300 hover:text-white font-semibold transition-colors block">
                      {companyInfo.primaryPhone}
                    </a>
                    <span className="text-[9px] text-stone-500 block mt-0.5">Mon - Sat: 9:00 AM - 7:00 PM</span>
                  </div>
                </li>
                
                <li className="flex items-start gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-[#E8D8C4] flex-shrink-0 mt-0.5" />
                  <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors">
                    {companyInfo.email}
                  </a>
                </li>
                
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-[#E8D8C4] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    {companyInfo.address}
                  </span>
                </li>
                
                <li className="flex items-start gap-2.5">
                  <Clock className="w-3.5 h-3.5 text-[#E8D8C4] flex-shrink-0 mt-0.5" />
                  <span>Serving All Zones in Bangalore</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 2. SEO AREA LOCATION LINKS (BENGALURU SERVING DOMAINS) */}
          <div className="mt-8 border-t border-white/5 pt-6 text-left">
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#E8D8C4] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              Interior Designers in Bangalore serving:
            </h4>
            
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[11px]">
              {locations.map((loc) => (
                <Link
                  key={loc.slug}
                  to={`/interior-designers/${loc.slug}`}
                  className="text-stone-500 hover:text-[#E8D8C4] hover:underline transition-colors"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM SUB-FOOTER (COPYRIGHTS & COOKIES) */}
      <div className="border-t border-white/5 py-4 bg-[#071F20]">
        <div className="container-custom flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-stone-500 font-medium tracking-wide">
          <p>
            © {currentYear} Denova Creations. All rights reserved. Precision Designed & Conversion Engineered.
          </p>
          
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-[#E8D8C4] transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-[#E8D8C4] transition-colors">Contact Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
