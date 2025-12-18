import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { companyInfo, services } from '../../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F1F1F] text-white">
      {/* Main Footer */}
      <div className="section-padding pb-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <div className="mb-6">
                <span className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Denova<span className="text-[#C8A35F]">.</span>
                </span>
                <span className="text-sm text-gray-400 block">Interiors</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Premium interior design solutions for homes, apartments, villas, and commercial spaces in Bengaluru.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C8A35F] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C8A35F] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C8A35F] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C8A35F] transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Services', 'Projects', 'Testimonials', 'Contact'].map((link) => (
                  <li key={link}>
                    <Link
                      to={`/${link.toLowerCase().replace(' ', '-')}`}
                      className="footer-link text-gray-400 hover:text-[#C8A35F]"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.slice(0, 6).map((service) => (
                  <li key={service.id}>
                    <Link
                      to="/services"
                      className="footer-link text-gray-400 hover:text-[#C8A35F]"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#C8A35F] flex-shrink-0 mt-1" />
                  <div>
                    <a href={`tel:${companyInfo.primaryPhone}`} className="text-gray-300 hover:text-[#C8A35F] transition-colors block">
                      {companyInfo.primaryPhone}
                    </a>
                    <a href={`tel:${companyInfo.secondaryPhone}`} className="text-gray-400 hover:text-[#C8A35F] transition-colors text-sm">
                      {companyInfo.secondaryPhone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#C8A35F] flex-shrink-0 mt-1" />
                  <a href={`mailto:${companyInfo.email}`} className="text-gray-400 hover:text-[#C8A35F] transition-colors">
                    {companyInfo.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C8A35F] flex-shrink-0 mt-1" />
                  <span className="text-gray-400 text-sm leading-relaxed">
                    {companyInfo.address}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#C8A35F] flex-shrink-0 mt-1" />
                  <span className="text-gray-400 text-sm">
                    Mon - Sat: 9:00 AM - 7:00 PM
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Denova Interiors. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-[#C8A35F] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#C8A35F] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
