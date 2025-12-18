import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { companyInfo } from '../../data/mock';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Materials', path: '/materials' },
  { name: 'Testimonials', path: '/testimonials' },
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
      {/* Top Bar */}
      <div className="bg-[#1F1F1F] text-white py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href={`tel:${companyInfo.primaryPhone}`} className="flex items-center gap-2 hover:text-[#C8A35F] transition-colors">
              <Phone className="w-4 h-4" />
              {companyInfo.primaryPhone}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {companyInfo.serviceArea}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#C8A35F] font-medium">⭐ {companyInfo.rating} Rating</span>
            <span className="text-gray-400">|</span>
            <span>{companyInfo.projectsCompleted}+ Projects Completed</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold text-[#1F1F1F]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Denova<span className="text-[#C8A35F]">.</span>
              </span>
              <span className="text-xs text-[#777777] -mt-1">Interiors</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link text-[15px] font-medium ${
                    location.pathname === link.path
                      ? 'text-[#C8A35F]'
                      : 'text-[#4A4A4A] hover:text-[#1F1F1F]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Link to="/estimate">
                <Button className="btn-gold px-6 py-2 rounded-sm font-semibold">
                  Get Free Estimate
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <div className="flex flex-col h-full py-6">
                  <div className="mb-8">
                    <span className="text-2xl font-bold text-[#1F1F1F]" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Denova<span className="text-[#C8A35F]">.</span>
                    </span>
                    <span className="text-xs text-[#777777] block">Interiors</span>
                  </div>
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium py-2 border-b border-gray-100 ${
                          location.pathname === link.path
                            ? 'text-[#C8A35F]'
                            : 'text-[#4A4A4A] hover:text-[#1F1F1F]'
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto space-y-4">
                    <Link to="/estimate" onClick={() => setIsOpen(false)}>
                      <Button className="w-full btn-gold py-3 rounded-sm font-semibold">
                        Get Free Estimate
                      </Button>
                    </Link>
                    <a href={`tel:${companyInfo.primaryPhone}`} className="flex items-center justify-center gap-2 text-[#1F1F1F] font-medium">
                      <Phone className="w-5 h-5" />
                      {companyInfo.primaryPhone}
                    </a>
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
