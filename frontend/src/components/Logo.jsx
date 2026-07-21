import React from 'react';
import { Link } from 'react-router-dom';
import logoPrimary from '@/assets/branding/logo-primary.png';

const Logo = ({ className = '', dark = false }) => {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img
        src={logoPrimary}
        alt="Denova Creations Interior Design Bangalore"
        className={`h-11 lg:h-14 w-auto object-contain ${dark ? 'brightness-0 invert' : ''}`}
        loading="eager"
      />
    </Link>
  );
};

export default Logo;
