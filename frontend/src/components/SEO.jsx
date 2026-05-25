import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://denovacreations.com";
const DEFAULT_IMAGE = `${SITE_URL}/images/hero2.webp`;

const pageMeta = {
  "/": {
    title: "Luxury Interior Designers in Bangalore | Denova Creations",
    description:
      "Denova Creations designs modular kitchens, wardrobes and complete home interiors in Bangalore with quality materials and end-to-end execution.",
  },
  "/about": {
    title: "About Denova Creations | Interior Designers Bangalore",
    description:
      "Learn about Denova Creations, a Bangalore interior design team delivering home interiors, modular kitchens, wardrobes and turnkey execution.",
  },
  "/services": {
    title: "Interior Design Services in Bangalore | Denova Creations",
    description:
      "Explore complete interior design services in Bangalore including modular kitchens, wardrobes, living rooms, bedrooms and commercial interiors.",
  },
  "/projects": {
    title: "Interior Design Projects Bangalore | Denova Creations",
    description:
      "View completed interior design projects by Denova Creations across Bangalore, including apartments, villas, offices and renovation work.",
  },
  "/portfolio": {
    title: "Interior Design Portfolio Bangalore | Denova Creations",
    description:
      "Browse Denova Creations portfolio with modular kitchen, wardrobe, bedroom, living room, ceiling and office interior design ideas.",
  },
  "/materials": {
    title: "Interior Materials Guide Bangalore | Denova Creations",
    description:
      "Compare plywood, laminates, hardware and finishes used in durable Bangalore home interiors by Denova Creations.",
  },
  "/testimonials": {
    title: "Client Testimonials | Denova Creations",
    description:
      "Read client testimonials and reviews for Denova Creations, trusted for home interior design and execution in Bangalore.",
  },
  "/process": {
    title: "Interior Design Process Bangalore | Denova Creations",
    description:
      "Understand Denova Creations' design process from consultation and planning to material selection, execution and project handover.",
  },
  "/contact": {
    title: "Contact Denova Creations | Bangalore Interior Designers",
    description:
      "Contact Denova Creations for home interior design, modular kitchen, wardrobe and turnkey execution services in Bangalore.",
  },
  "/estimate": {
    title: "Interior Design Estimate Bangalore | Denova Creations",
    description:
      "Request a free estimate for home interiors in Bangalore, including modular kitchens, wardrobes and complete interior execution.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Denova Creations",
    description:
      "Read the Denova Creations privacy policy for details on how enquiry and contact information is collected and used.",
  },
};

const getMeta = (pathname) => {
  if (pageMeta[pathname]) return pageMeta[pathname];

  if (pathname.startsWith("/interior-designers/")) {
    const area = pathname.split("/").pop().replace(/-/g, " ");
    const titleArea = area.replace(/\b\w/g, (char) => char.toUpperCase());
    return {
      title: `Interior Designers in ${titleArea} | Denova Creations`,
      description: `Get complete home interiors, modular kitchens and wardrobes in ${titleArea}, Bangalore with Denova Creations.`,
    };
  }

  if (pathname.startsWith("/portfolio/")) {
    return {
      title: "Interior Design Project Bangalore | Denova Creations",
      description:
        "View this Denova Creations project with design details, images and interior execution highlights from Bangalore.",
    };
  }

  return pageMeta["/"];
};

const SEO = () => {
  const { pathname } = useLocation();
  const canonical = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
  const meta = getMeta(pathname);

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />
    </Helmet>
  );
};

export default SEO;
