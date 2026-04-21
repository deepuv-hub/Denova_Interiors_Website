import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ className = '', dark = false }) => {
  const logoSrc = dark 
    ? '/assets/images/denova-logo-white.svg'
    : '/assets/images/denova-logo.svg';

  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img
        src={logoSrc}
        alt="Denova Creations Interior Design Bangalore"
        className="h-10 md:h-12 w-auto"
        loading="eager"
      />
    </Link>
  );
};

export default Logo;