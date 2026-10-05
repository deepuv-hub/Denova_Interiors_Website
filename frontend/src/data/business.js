// Single business identity for structured data. The home page renders the
// full entity; other pages reference it through BUSINESS_REF so every page
// describes the same business. Only add facts the owner has confirmed (no
// ratings, reviews or opening hours until they are verified).
import { companyInfo } from "./mock";
import { FULL_HOME_RATE_TEXT } from "./pricing";

export const SITE_URL = "https://denovacreations.com";
export const BUSINESS_ID = `${SITE_URL}/#business`;

export const BUSINESS_REF = {
  "@type": "ProfessionalService",
  "@id": BUSINESS_ID,
  name: companyInfo.name,
  url: `${SITE_URL}/`,
  telephone: "+91 9591039597",
};

export const BUSINESS_ENTITY = {
  ...BUSINESS_REF,
  logo: `${SITE_URL}/images/logo-primary.png`,
  image: `${SITE_URL}/images/hero2.webp`,
  email: companyInfo.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "373/2, Begur – Hulimavu Road, Opp. Rejoice Apartment, Classic Paradise Layout, Begur",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560114",
    addressCountry: "IN",
  },
  areaServed: { "@type": "City", name: "Bengaluru" },
  priceRange: `Full-home interiors ${FULL_HOME_RATE_TEXT}`,
  description:
    "Interior design company in Bangalore for full-home interiors, modular kitchens and wardrobes, from design to installation.",
};
