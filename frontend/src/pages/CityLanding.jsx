import React from "react";
import { useParams } from "react-router-dom";
import locations from "../data/locations";
import CityLandingTemplate from "../components/CityLandingTemplate";
import { Helmet } from "react-helmet";

const BASE_URL = "https://denovacreations.com";

const CityLanding = (props) => {
  const params = useParams();

  // ✅ SUPPORT BOTH STATIC + DYNAMIC ROUTES
  const cityKey = props.city || params.city;

  const location = locations.find(
    (loc) => loc.slug.toLowerCase() === (cityKey && cityKey.toLowerCase())
  );

  if (!location) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h2>City Not Found</h2>
        <p>{cityKey}</p>
      </div>
    );
  }

  const pageUrl = `${BASE_URL}/interior-designers-${location.slug}`;

  return (
    <>
      <Helmet>
        {/* BASIC SEO */}
        <title>{location.title}</title>
        <meta name="description" content={location.description} />
        <link rel="canonical" href={pageUrl} />

        {/* OPEN GRAPH */}
        <meta property="og:title" content={location.title} />
        <meta property="og:description" content={location.description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />

        {/* LOCAL BUSINESS SCHEMA */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Denova Creations",
            "image": `${BASE_URL}/logo.png`,
            "url": BASE_URL,
            "telephone": "+919164011181",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bangalore",
              "addressCountry": "IN"
            },
            "areaServed": location.name,
            "priceRange": "₹₹",
            "description": location.description,
            "sameAs": [
              "https://www.instagram.com/yourpage",
              "https://g.page/your-google-review-link"
            ]
          })}
        </script>

        {/* FAQ SCHEMA */}
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

        {/* BREADCRUMB SCHEMA */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": BASE_URL
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": `Interior Designers in ${location.name}`,
                "item": pageUrl
              }
            ]
          })}
        </script>
      </Helmet>

      {/* MAIN TEMPLATE */}
      <CityLandingTemplate location={location} />
    </>
  );
};

export default CityLanding;