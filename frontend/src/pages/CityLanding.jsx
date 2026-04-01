import React from "react";
import { useParams } from "react-router-dom";
import locations from "../data/locations";
import CityLandingTemplate from "../components/CityLandingTemplate";
import { Helmet } from "react-helmet";

const CityLanding = () => {
  const { city } = useParams();

  const location = locations.find(
    (loc) => loc.slug.toLowerCase() === city.toLowerCase()
  );

  if (!location) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h2>City Not Found</h2>
        <p>{city}</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{location.title}</title>
        <meta name="description" content={location.description} />
        <script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Denova Creations",
  "image": "https://denovacreations.com/logo.png",
  "url": "https://denovacreations.com",
  "telephone": "+919164011181",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bangalore",
    "addressCountry": "IN"
  },
  "areaServed": location.name,
  "priceRange": "₹₹",
  "description": location.description
})}
</script>
<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": `What is the cost of interior design in ${location.name}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Interior design cost in ${location.name} starts from ₹3.5 lakhs for a 2BHK and varies based on materials and customization.`
      }
    },
    {
      "@type": "Question",
      "name": `Do you provide complete home interiors in ${location.name}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Denova Creations offers end-to-end interior design services including modular kitchen, wardrobes, and full home interiors."
      }
    }
  ]
})}
</script>
      </Helmet>

      <CityLandingTemplate location={location} />
    </>
  );
};

export default CityLanding;