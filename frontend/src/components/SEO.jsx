import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://denovacreations.com";
const DEFAULT_IMAGE = `${SITE_URL}/images/hero2.webp`;

const pageMeta = {
  "/": {
    title: "Interior Designers in Bangalore | Denova Interiors",
    description:
      "Denova Interiors designs modular kitchens, wardrobes and complete home interiors in Bangalore with quality materials and end-to-end execution.",
  },
  "/about": {
    title: "About Denova Interiors | Bangalore Interior Designers",
    description:
      "Learn about Denova Interiors, a Bangalore interior design team delivering home interiors, modular kitchens, wardrobes and turnkey execution.",
  },
  "/services": {
    title: "Interior Design Services in Bangalore | Denova",
    description:
      "Explore complete interior design services in Bangalore including modular kitchens, wardrobes, living rooms, bedrooms and commercial interiors.",
  },
  "/projects": {
    title: "Interior Design Projects in Bangalore | Denova",
    description:
      "View completed interior design projects by Denova Interiors across Bangalore, including apartments, villas, offices and renovation work.",
  },
  "/portfolio": {
    title: "Interior Design Portfolio | Denova Bangalore",
    description:
      "Browse Denova Interiors portfolio with modular kitchen, wardrobe, bedroom, living room, ceiling and office interior design ideas.",
  },
  "/materials": {
    title: "Interior Materials Guide | Denova Interiors",
    description:
      "Compare plywood, laminates, hardware and finishes used in durable Bangalore home interiors by Denova Interiors.",
  },
  "/testimonials": {
    title: "Client Testimonials | Denova Interiors Bangalore",
    description:
      "Read client testimonials and reviews for Denova Interiors, trusted for home interior design and execution in Bangalore.",
  },
  "/process": {
    title: "Interior Design Process | Denova Interiors",
    description:
      "Understand Denova Interiors' design process from consultation and planning to material selection, execution and project handover.",
  },
  "/contact": {
    title: "Contact Denova Interiors | Bangalore",
    description:
      "Contact Denova Interiors for home interior design, modular kitchen, wardrobe and turnkey execution services in Bangalore.",
  },
  "/estimate": {
    title: "Get Interior Design Estimate | Denova Bangalore",
    description:
      "Request a free estimate for home interiors in Bangalore, including modular kitchens, wardrobes and complete interior execution.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Denova Interiors",
    description:
      "Read the Denova Interiors privacy policy for details on how enquiry and contact information is collected and used.",
  },
};

const getMeta = (pathname) => {
  if (pageMeta[pathname]) return pageMeta[pathname];

  if (pathname.startsWith("/interior-designers/")) {
    const area = pathname.split("/").pop().replace(/-/g, " ");
    const titleArea = area.replace(/\b\w/g, (char) => char.toUpperCase());
    return {
      title: `Interior Designers in ${titleArea} | Denova`,
      description: `Get complete home interiors, modular kitchens and wardrobes in ${titleArea}, Bangalore with Denova Interiors.`,
    };
  }

  if (pathname.startsWith("/portfolio/")) {
    return {
      title: "Interior Design Project | Denova Portfolio",
      description:
        "View this Denova Interiors project with design details, images and interior execution highlights from Bangalore.",
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
