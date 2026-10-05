import React from 'react';
import { Helmet } from "react-helmet-async";
import HeroSection from '../components/home/HeroSection';
import BrandIntroSection from '../components/home/BrandIntroSection';
import ServicesSection from '../components/home/ServicesSection';
import PortfolioSection from '../components/home/PortfolioSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import ProcessSection from '../components/home/ProcessSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';
import { BUSINESS_ENTITY } from "../data/business";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Interior Designers in Bangalore | Denova Creations</title>
        <meta
          name="description"
          content="Denova Creations is an interior design company in Bangalore for full-home interiors, modular kitchens and wardrobes. Full-home interiors at ₹1,400–₹1,800 per sq.ft including materials."
        />
        <link rel="canonical" href="https://denovacreations.com/" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({ "@context": "https://schema.org", ...BUSINESS_ENTITY })}
        </script>

        <meta property="og:title" content="Interior Designers in Bangalore | Denova Creations" />
        <meta property="og:description" content="Interior designers in Bangalore for full-home interiors, modular kitchens and wardrobes, from design to installation." />
        <meta property="og:image" content="https://denovacreations.com/images/hero2.webp" />
        <meta property="og:url" content="https://denovacreations.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Interior Designers in Bangalore | Denova Creations" />
        <meta name="twitter:description" content="Interior designers in Bangalore for full-home interiors, modular kitchens and wardrobes, from design to installation." />
        <meta name="twitter:image" content="https://denovacreations.com/images/hero2.webp" />
      </Helmet>

      <div className="bg-[#FAF8F5] text-stone-800 antialiased min-h-screen">
        <HeroSection />
        <BrandIntroSection />
        <ServicesSection />
        <PortfolioSection />
        <WhyChooseUsSection />
        <ProcessSection />
        <TestimonialsSection />
        <CTASection />
      </div>
    </>
  );
};

export default HomePage;
