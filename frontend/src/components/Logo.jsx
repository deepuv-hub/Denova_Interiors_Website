import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ className = '', dark = false }) => {
  const textColor = dark ? 'text-white' : 'text-[#1F1F1F]';
  const subtextColor = dark ? 'text-gray-400' : 'text-[#777777]';

  return (
    <Link to="/" className={`flex flex-col ${className}`}>
      <span className="text-2xl md:text-3xl font-bold flex items-baseline" style={{ fontFamily: 'Playfair Display, serif' }}>
        <span className={textColor}>Denov</span>
        {/* Custom "A" with upward arrow signifying growth */}
        <span className="relative inline-flex items-center">
          <svg 
            viewBox="0 0 24 32" 
            className="w-[0.65em] h-[0.9em]" 
            fill="currentColor"
          >
            {/* Upward Arrow forming the letter A */}
            <path 
              d="M12 0 L22 20 L18 20 L16 16 L8 16 L6 20 L2 20 L12 0 Z M10 13 L14 13 L12 8 L10 13 Z" 
              className="text-[#C8A35F]"
              fill="currentColor"
            />
            {/* Small upward arrow tip on top */}
            <path 
              d="M12 0 L8 6 L10.5 6 L10.5 3 L13.5 3 L13.5 6 L16 6 L12 0 Z" 
              className="text-[#C8A35F]"
              fill="currentColor"
            />
          </svg>
        </span>
        <span className="text-[#C8A35F]">.</span>
      </span>
      <span className={`text-xs ${subtextColor} -mt-1`}>Interiors</span>
    </Link>
  );
};

// Simpler version with CSS-based arrow A
export const LogoSimple = ({ className = '', dark = false }) => {
  const textColor = dark ? 'text-white' : 'text-[#1F1F1F]';
  const subtextColor = dark ? 'text-gray-400' : 'text-[#777777]';

  return (
    <Link to="/" className={`flex flex-col ${className}`}>
      <span className="text-2xl md:text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
        <span className={textColor}>Denov</span>
        <span className="text-[#C8A35F] relative">
          <span className="relative">
            A
            {/* Upward arrow indicator */}
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-[0.4em]">
              ▲
            </span>
          </span>
        </span>
        <span className="text-[#C8A35F]">.</span>
      </span>
      <span className={`text-xs ${subtextColor} -mt-1`}>Interiors</span>
    </Link>
  );
};

// SVG-based logo with growth arrow
export const LogoWithArrow = ({ className = '', dark = false, size = 'default' }) => {
  const textColor = dark ? '#FFFFFF' : '#1F1F1F';
  const subtextColor = dark ? '#9CA3AF' : '#777777';
  const goldColor = '#C8A35F';
  
  const sizes = {
    small: { width: 120, fontSize: 24, subSize: 10 },
    default: { width: 160, fontSize: 32, subSize: 12 },
    large: { width: 200, fontSize: 40, subSize: 14 }
  };
  
  const { width, fontSize, subSize } = sizes[size] || sizes.default;

  return (
    <Link to="/" className={`inline-flex flex-col ${className}`}>
      <svg viewBox="0 0 160 45" width={width} height={width * 0.28} className="overflow-visible">
        {/* Denov text */}
        <text 
          x="0" 
          y="28" 
          fontFamily="Playfair Display, Georgia, serif" 
          fontSize={fontSize} 
          fontWeight="700" 
          fill={textColor}
        >
          Denov
        </text>
        
        {/* Custom A with upward arrow */}
        <g transform="translate(98, 0)">
          {/* Main A shape */}
          <path 
            d="M16 30 L8 30 L10 24 L22 24 L24 30 L16 30 Z M12 21 L16 8 L20 21 L12 21 Z M16 8 L10 24 M16 8 L22 24" 
            fill="none" 
            stroke={goldColor} 
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* A body */}
          <path 
            d="M6 30 L16 5 L26 30 L22 30 L20 24 L12 24 L10 30 Z M13 20 L19 20 L16 11 Z" 
            fill={goldColor}
          />
          {/* Upward arrow tip */}
          <path 
            d="M16 0 L12 5 L14.5 5 L14.5 8 L17.5 8 L17.5 5 L20 5 Z" 
            fill={goldColor}
          />
        </g>
        
        {/* Dot */}
        <circle cx="132" cy="27" r="3" fill={goldColor} />
        
        {/* Interiors subtitle */}
        <text 
          x="0" 
          y="42" 
          fontFamily="Inter, sans-serif" 
          fontSize={subSize} 
          fill={subtextColor}
        >
          Interiors
        </text>
      </svg>
    </Link>
  );
};

export default LogoWithArrow;
