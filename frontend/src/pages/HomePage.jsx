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

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Luxury Interior Designers in Bangalore | Denova Creations</title>
        <meta
          name="description"
          content="Denova Creations is Bengaluru's premier home interior design studio. Specialized in bespoke modular kitchens, luxury wardrobes, and complete turnkey residential designs."
        />
        <link rel="canonical" href="https://denovacreations.com/" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Denova Creations",
            url: "https://denovacreations.com",
            logo: "https://denovacreations.com/images/logo-primary.png",
            image: "https://denovacreations.com/images/hero2.webp",
            telephone: "+91-9164466606",
            address: {
              "@type": "PostalAddress",
              streetAddress: "373/2, Begur Hulimavu Road",
              addressLocality: "Bengaluru",
              addressRegion: "Karnataka",
              postalCode: "560114",
              addressCountry: "IN"
            },
            areaServed: "Bangalore",
            priceRange: "₹₹₹",
            description:
              "Bespoke home interior designers in Bangalore specializing in custom modular kitchens, wardrobes, false ceilings, and turnkey luxury interiors."
          })}
        </script>

        <meta property="og:title" content="Luxury Interior Designers in Bangalore | Denova Creations" />
        <meta property="og:description" content="Elevate your living experience with premium home interior designers in Bangalore. Customized kitchens, wardrobes, and turnkey execution with 10-year warranty." />
        <meta property="og:image" content="https://denovacreations.com/images/hero2.webp" />
        <meta property="og:url" content="https://denovacreations.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Luxury Interior Designers in Bangalore | Denova Creations" />
        <meta name="twitter:description" content="Elevate your living experience with premium home interior designers in Bangalore. Customized kitchens, wardrobes, and turnkey execution with 10-year warranty." />
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
