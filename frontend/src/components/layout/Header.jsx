import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, MessageSquare, PhoneCall } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { companyInfo } from '../../data/mock';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Materials', path: '/materials' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 1. TOP BAR (DESKTOP ONLY - ULTRA PREMIUM EMERALD) */}
      <div className="bg-[#0B2526] text-stone-300 py-2.5 hidden md:block border-b border-white/5 relative z-50">
        <div className="container-custom flex justify-between items-center text-xs font-medium tracking-wide">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${companyInfo.primaryPhone}`}
              className="flex items-center gap-2 hover:text-[#E8D8C4] transition-colors"
              title="Call Denova Creations Support"
            >
              <Phone className="w-3.5 h-3.5 text-[#E8D8C4]" />
              <span>{companyInfo.primaryPhone}</span>
            </a>
            
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#E8D8C4]" />
              <span>{companyInfo.serviceArea}</span>
            </span>
          </div>
          
          <div className="flex items-center gap-5">
            <span className="text-[#E8D8C4] font-semibold flex items-center gap-1">
              ★ {companyInfo.rating} Rating on Google
            </span>
            <span className="text-stone-600">|</span>
            <span className="text-stone-400">{companyInfo.projectsCompleted}+ Luxury Projects Completed</span>
            <span className="text-stone-600">|</span>
            
            {/* WhatsApp direct shortcut in top bar */}
            <a
              href={`https://wa.me/919164466606?text=Hi,%20I'm%20interested%20in%20premium%20interior%20design%20services%20with%20Denova%20Creations.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-white transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER (STICKY LUXURY NAVIGATION) */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-3 border-b border-stone-100' 
          : 'bg-white/95 backdrop-blur-md py-4 border-b border-stone-100/40'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link to="/" className="flex flex-col group select-none">
              <span className="text-2xl md:text-3xl font-bold text-[#0F3D3E] tracking-tight leading-none" style={{ fontFamily: 'Playfair Display, serif' }}>
                Denova<span className="text-[#E8D8C4]">.</span>
              </span>
              <span className="text-[10px] text-stone-500 font-bold uppercase tracking-widest mt-1 group-hover:text-[#0F3D3E] transition-colors">
                Creations
              </span>
            </Link>

            {/* Desktop Center Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative py-1 text-sm font-semibold tracking-wide transition-all duration-300 ${
                      isActive 
                        ? 'text-[#0F3D3E]' 
                        : 'text-stone-600 hover:text-[#0F3D3E]'
                    }`}
                  >
                    {link.name}
                    {/* Underscore active indicator */}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-[#E8D8C4] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 hover:w-full'
                    }`}></span>
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action CTAs Area */}
            <div className="hidden lg:flex items-center gap-4">
              {/* WhatsApp direct CTA */}
              <a
                href="https://wa.me/919164466606?text=Hi,%20I'd%20like%20to%20book%20a%20free%20design%20consultation%20meeting%20with%20your%20design%20specialists."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-2.5 bg-[#FAF7F2] hover:bg-[#E8D8C4]/20 border border-[#E8D8C4]/50 rounded-xl text-[#0F3D3E] transition duration-300"
                title="Chat with our architect on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              {/* Phone Direct CTA */}
              <a
                href="tel:+919164466606"
                className="flex items-center gap-2 py-2 px-3.5 bg-[#FAF7F2] hover:bg-[#E8D8C4]/20 border border-[#E8D8C4]/50 rounded-xl text-xs font-semibold text-[#0F3D3E] transition duration-300"
                title="Call us direct"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#0C3031]" />
                <span>Call Expert</span>
              </a>

              {/* Free Estimate Primary Button */}
              <Link to="/estimate">
                <Button className="bg-[#0F3D3E] hover:bg-[#0B2C2D] text-[#E8D8C4] hover:text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 uppercase tracking-wider">
                  Get Free Estimate
                </Button>
              </Link>
            </div>

            {/* Mobile Sheet Trigger & Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-[#0F3D3E] hover:bg-[#FAF7F2] rounded-xl">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-white border-l border-stone-100 rounded-l-3xl p-6">
                <div className="flex flex-col h-full py-2">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-[#0F3D3E]" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Denova<span className="text-[#E8D8C4]">.</span>
                      </span>
                      <span className="text-[10px] text-stone-500 font-bold uppercase tracking-widest -mt-0.5">Creations</span>
                    </div>
                  </div>
                  
                  {/* Mobile Navigation List */}
                  <nav className="flex flex-col gap-1.5 flex-grow">
                    {navLinks.map((link) => {
                      const isActive = location.pathname === link.path;
                      return (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          className={`text-base font-semibold py-3 px-4 rounded-xl border border-transparent transition-all ${
                            isActive
                              ? 'text-[#0F3D3E] bg-[#FAF7F2] border-[#E8D8C4]/40'
                              : 'text-stone-600 hover:text-[#0F3D3E] hover:bg-stone-50'
                          }`}
                        >
                          {link.name}
                        </Link>
                      );
                    })}
                  </nav>
                  
                  {/* Mobile Actions Footer */}
                  <div className="mt-auto space-y-3 pt-6 border-t border-stone-100">
                    <Link to="/estimate" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-[#0F3D3E] hover:bg-[#0B2C2D] text-[#E8D8C4] hover:text-white py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs shadow-md">
                        Get Free Estimate
                      </Button>
                    </Link>
                    
                    <div className="grid grid-cols-2 gap-2.5">
                      <a
                        href="tel:+919164466606"
                        className="flex items-center justify-center gap-2 border border-stone-200 hover:bg-stone-50 py-3 rounded-xl text-stone-700 text-xs font-semibold"
                      >
                        <Phone className="w-4 h-4 text-[#0F3D3E]" />
                        <span>Call</span>
                      </a>
                      
                      <a
                        href="https://wa.me/919164466606?text=Hi,%20I'd%20like%20to%20enquire%20about%20your%20luxury%20interiors."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 border border-stone-200 hover:bg-[#FAF7F2] py-3 rounded-xl text-[#0F3D3E] text-xs font-semibold"
                      >
                        <MessageSquare className="w-4 h-4 text-[#0F3D3E]" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
