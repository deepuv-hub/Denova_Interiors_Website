import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { FULL_HOME_RATE_TEXT } from "../data/pricing";

const SITE_URL = "https://denovacreations.com";
const DEFAULT_IMAGE = `${SITE_URL}/images/hero2.webp`;

const pageMeta = {
  "/": {
    title: "Interior Designers in Bangalore | Denova Creations",
    description:
      `Denova Creations is an interior design company in Bangalore for full-home interiors, modular kitchens and wardrobes. Full-home interiors at ${FULL_HOME_RATE_TEXT}.`,
  },
  "/about": {
    title: "Premium Turnkey Interior Design Studio | About Denova Creations",
    description:
      "Learn about Denova Creations, an interior design studio in Bengaluru for full-home interiors, modular kitchens and custom wardrobes.",
  },
  "/services": {
    title: "Luxury Interior Design Services Bangalore | Denova Creations",
    description:
      "Explore bespoke interior design services in Bangalore. We specialize in modular kitchens, wardrobes, living rooms, and complete turnkey home interiors.",
  },
  "/projects": {
    title: "Interior Design Portfolio Bangalore | Completed Projects | Denova Creations",
    description:
      "Explore completed luxury home interior projects in Bangalore. Discover detailed case studies of modular kitchens, wardrobes, false ceilings, and residential spaces.",
  },
  // /portfolio lists the same projects as /projects, so /projects is canonical.
  "/portfolio": {
    title: "Signature Interior Design Portfolio Bangalore | Denova Creations",
    description:
      "Explore our signature home interior design portfolios in Bangalore. Filter through completed luxury kitchens, modular wardrobes, and residential spaces.",
    canonicalPath: "/projects",
  },
  "/materials": {
    title: "Interior Materials & Design Guide Bangalore | Denova Creations",
    description:
      "The ultimate interior materials and planning guide in Bangalore. Discover the differences between BWP marine ply, BWR plywood, acrylics, and modular pricing.",
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
    title: "Contact Denova Creations | Free Interior Design Consultation",
    description:
      "Contact Denova Creations in Begur, Bangalore. Call +91 95910 39597 or book a free design consultation for home interiors, modular kitchens and wardrobes.",
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

// "/About/" and "/about" render the same page, so look up and canonicalise
// the lowercase path without a trailing slash.
const normalizePath = (pathname) => pathname.toLowerCase().replace(/\/+$/, "") || "/";

const SEO = () => {
  const { pathname } = useLocation();
  const path = normalizePath(pathname);
  const meta = getMeta(path);
  const canonical = `${SITE_URL}${meta.canonicalPath || path}`;

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
