import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const JPNagar = () => {

  const pageTitle =
    "Interior Designers in JP Nagar Bangalore | Denova Creations";

  const pageDescription =
    "Premium interior designers in JP Nagar Bangalore for 2BHK and 3BHK homes, modular kitchens, wardrobes, and complete turnkey home interiors.";

  const pageUrl =
    "https://denovacreations.com/interior-designers/jp-nagar";

  const imageUrl =
    "https://denovacreations.com/images/hero2.webp";

  return (
    <div className="bg-white text-gray-900">

      {/* SEO */}
      <Helmet>

        {/* Primary SEO */}
        <title>{pageTitle}</title>

        <meta
          name="description"
          content={pageDescription}
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href={pageUrl}
        />

        {/* Open Graph */}
        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content={pageUrl}
        />

        <meta
          property="og:title"
          content={pageTitle}
        />

        <meta
          property="og:description"
          content={pageDescription}
        />

        <meta
          property="og:image"
          content={imageUrl}
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content={pageTitle}
        />

        <meta
          name="twitter:description"
          content={pageDescription}
        />

        <meta
          name="twitter:image"
          content={imageUrl}
        />

        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "InteriorDesigner",
            name: "Denova Creations",
            url: pageUrl,
            image: imageUrl,
            telephone: "+91-9164466606",
            areaServed: [
              "JP Nagar",
              "Bangalore",
              "South Bangalore",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "JP Nagar",
              addressRegion: "Karnataka",
              addressCountry: "India",
            },
            description: pageDescription,
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the average interior cost in JP Nagar Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Interior design costs in JP Nagar Bangalore generally range between ₹3L and ₹9L depending on apartment size, materials, and customization level.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide turnkey home interior services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. Denova Creations provides complete turnkey interior solutions including design, manufacturing, installation, and project execution.",
                },
              },
              {
                "@type": "Question",
                name: "Do you design interiors for apartments and villas in JP Nagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. We specialize in interior design solutions for apartments, villas, and family homes across JP Nagar Bangalore.",
                },
              },
            ],
          })}
        </script>

      </Helmet>

      {/* HERO */}
      <section className="relative h-[650px] flex items-center overflow-hidden">

        <img
          src="/images/hero2.webp"
          alt="Luxury family home interior design in JP Nagar Bangalore"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">

          <h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Interior Designers in JP Nagar Bangalore
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-gray-200 leading-8">
            Create a stylish, practical, and comfortable home for your family
            with thoughtfully designed interiors tailored for modern living in
            JP Nagar Bangalore.
          </p>

          <p className="max-w-3xl mt-6 text-white/80 leading-8">
            Denova Creations specializes in elegant family-friendly interiors
            for apartments and villas including modular kitchens, wardrobes,
            smart storage solutions, living room interiors, and complete
            turnkey execution.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="/contact"
              className="bg-yellow-600 hover:bg-yellow-700 transition px-8 py-4 font-semibold"
            >
              Get Free Consultation
            </a>

            <a
              href="/portfolio"
              className="border border-white px-8 py-4 font-semibold hover:bg-white hover:text-black transition"
            >
              View Portfolio
            </a>

          </div>

        </div>

      </section>

      {/* BENEFITS */}
      <section className="max-w-6xl mx-auto py-14 px-6">

        <div className="grid md:grid-cols-3 gap-6 text-center">

          <div className="border border-gray-200 p-6 shadow-sm">
            Family-Friendly Designs
          </div>

          <div className="border border-gray-200 p-6 shadow-sm">
            Smart Storage Solutions
          </div>

          <div className="border border-gray-200 p-6 shadow-sm">
            Balanced & Transparent Pricing
          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto py-16 px-6">

        <div className="text-center mb-10">

          <h2 className="text-3xl font-semibold mb-6">
            Elegant Interiors Designed for Comfortable Family Living
          </h2>

          <p className="text-gray-600 leading-8">
            JP Nagar is one of Bangalore’s well-established residential
            neighborhoods known for apartments, villas, and spacious family
            homes. Denova Creations designs interiors that combine elegance,
            functionality, comfort, and long-term practicality for modern
            families.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Smart Space Planning
            </h3>

            <p className="text-gray-600 leading-8">
              Our team focuses on intelligent layouts, optimized storage, and
              functional interior planning to create spacious and organized
              living environments tailored for everyday family life.
            </p>

          </div>

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Complete Turnkey Execution
            </h3>

            <p className="text-gray-600 leading-8">
              From modular kitchens and wardrobes to false ceilings and living
              room interiors, we provide complete turnkey execution with premium
              materials, expert craftsmanship, and on-time project delivery.
            </p>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-semibold text-center mb-10">
          Interior Design Services in JP Nagar
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Complete Home Interiors",
            "Modular Kitchen Design",
            "Wardrobes & Storage",
            "Living Room Interiors",
            "Bedroom Interior Design",
            "Space Planning Solutions",
            "Home Renovation Services",
            "False Ceiling & Lighting",
            "Turnkey Interior Execution",
          ].map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
            >
              {service}
            </div>
          ))}

        </div>

      </section>

      {/* COST */}
      <section className="bg-gray-100 py-16">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold mb-8">
            Interior Cost in JP Nagar Bangalore
          </h2>

          <div className="bg-white p-8 shadow-lg space-y-4 text-lg">

            <p>✔ 2BHK Interiors: ₹3L – ₹6L</p>

            <p>✔ 3BHK Interiors: ₹5L – ₹9L</p>

            <p>✔ Renovation Projects: ₹2L onwards</p>

          </div>

        </div>

      </section>

      {/* PROJECT SHOWCASE */}
      <section className="max-w-6xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-semibold text-center mb-10">
          Recent Interior Design Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-5">

          <img
            src="/images/project3.webp"
            alt="Modern family home interior project in JP Nagar Bangalore"
            className="h-72 object-cover w-full"
            loading="lazy"
          />

          <img
            src="/images/project4.webp"
            alt="Modular kitchen interior project in JP Nagar Bangalore"
            className="h-72 object-cover w-full"
            loading="lazy"
          />

          <img
            src="/images/project5.webp"
            alt="Family living room interior design project in JP Nagar Bangalore"
            className="h-72 object-cover w-full"
            loading="lazy"
          />

        </div>

      </section>

      {/* WHY US */}
      <section className="bg-black text-white py-16">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold mb-12">
            Why Choose Denova Creations?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="border border-white/20 p-6">
              Practical Family-Friendly Designs
            </div>

            <div className="border border-white/20 p-6">
              Premium Quality Materials
            </div>

            <div className="border border-white/20 p-6">
              Transparent Pricing
            </div>

            <div className="border border-white/20 p-6">
              On-Time Project Delivery
            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-semibold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-8">

          <div>

            <h3 className="text-xl font-semibold mb-3">
              What is the average interior cost in JP Nagar?
            </h3>

            <p className="text-gray-600 leading-7">
              Interior costs typically range from ₹3L to ₹9L depending on home
              size, material quality, and level of customization.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-3">
              Do you provide renovation services in JP Nagar?
            </h3>

            <p className="text-gray-600 leading-7">
              Yes. Denova Creations provides renovation and remodeling services
              for apartments, villas, kitchens, bedrooms, and living spaces in
              JP Nagar Bangalore.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-3">
              Do you provide turnkey home interiors?
            </h3>

            <p className="text-gray-600 leading-7">
              Absolutely. We manage complete turnkey interior execution
              including design, manufacturing, installation, and project
              coordination.
            </p>

          </div>

        </div>

      </section>

      {/* INTERNAL LINKS */}
      <section className="bg-gray-100 py-14">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-2xl font-semibold mb-8">
            Explore More Interior Solutions
          </h2>

          <div className="flex flex-wrap justify-center gap-6">

            <Link
              to="/services"
              className="underline hover:text-yellow-700"
            >
              Interior Design Services
            </Link>

            <Link
              to="/projects"
              className="underline hover:text-yellow-700"
            >
              View Projects
            </Link>

            <Link
              to="/estimate"
              className="underline hover:text-yellow-700"
            >
              Interior Pricing Estimate
            </Link>

            <Link
              to="/contact"
              className="underline hover:text-yellow-700"
            >
              Contact Denova Creations
            </Link>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="py-16 text-center px-6">

        <h2 className="text-4xl font-semibold mb-6">
          Design a Comfortable & Elegant Home for Your Family
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          Speak with Denova Creations today and transform your apartment or
          villa in JP Nagar Bangalore with premium and functional interior
          design solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="tel:+919164466606"
            className="bg-yellow-600 hover:bg-yellow-700 transition px-8 py-4 font-semibold text-white"
          >
            Call Now: 9164466606
          </a>

          <a
            href="/contact"
            className="border border-black px-8 py-4 font-semibold hover:bg-black hover:text-white transition"
          >
            Book Free Consultation
          </a>

        </div>

      </section>

    </div>
  );
};

export default JPNagar;