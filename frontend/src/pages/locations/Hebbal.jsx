import React from "react";
import { Helmet } from "react-helmet-async";

const Hebbal = () => {
  const pageUrl =
    "https://denovacreations.com/interior-designers/hebbal";

  const pageTitle =
    "Luxury Interior Designers in Hebbal Bangalore | Denova Creations";

  const pageDescription =
    "Luxury interior designers in Hebbal Bangalore specializing in premium apartments, villas, modular kitchens, wardrobes, and turnkey home interiors.";

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
            "@type": "ProfessionalService",
            name: "Denova Creations",
            url: pageUrl,
            image: imageUrl,
            telephone: "+91-9164466606",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Hebbal",
              addressRegion: "Karnataka",
              addressCountry: "India",
            },
            areaServed: [
              "Hebbal",
              "Bangalore",
              "North Bangalore",
            ],
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
                name: "What is the average interior cost in Hebbal Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Interior costs in Hebbal Bangalore generally range between ₹4L and ₹12L depending on apartment size, materials, and customization.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide turnkey interior execution?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. Denova Creations provides complete turnkey interior execution including design, manufacturing, installation, and project management.",
                },
              },
              {
                "@type": "Question",
                name: "Do you design interiors for villas and apartments in Hebbal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. We specialize in luxury interiors for apartments, villas, and premium residential spaces in Hebbal Bangalore.",
                },
              },
            ],
          })}
        </script>

      </Helmet>

      {/* HERO */}
      <section className="relative h-[600px] flex items-center overflow-hidden">

        <img
          src="/images/hero2.webp"
          alt="Luxury home interior design in Hebbal Bangalore by Denova Creations"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">

          <h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Luxury Interior Designers in Hebbal Bangalore
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-gray-200">
            Transform your villa or apartment with premium interiors designed
            for modern living. Denova Creations delivers elegant, functional,
            and luxurious interiors tailored for Hebbal homeowners.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="/contact"
              className="bg-yellow-600 hover:bg-yellow-700 transition px-6 py-3 font-semibold"
            >
              Book Free Consultation
            </a>

            <a
              href="/portfolio"
              className="border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition"
            >
              View Portfolio
            </a>

          </div>

        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-gray-100 py-8">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center px-6">

          <div className="bg-white shadow-sm p-5">
            Premium Residential Interiors
          </div>

          <div className="bg-white shadow-sm p-5">
            End-to-End Turnkey Execution
          </div>

          <div className="bg-white shadow-sm p-5">
            High-Quality Materials & Finishes
          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto py-16 px-6">

        <div className="text-center mb-10">

          <h2 className="text-3xl font-semibold mb-6">
            Elegant Interiors Designed for Comfortable Living
          </h2>

          <p className="text-gray-600 leading-8">
            Hebbal is one of Bangalore’s rapidly growing premium residential
            locations featuring luxury apartments, villas, and gated
            communities. Denova Creations specializes in creating thoughtfully
            designed interiors that combine luxury aesthetics with practical
            everyday functionality.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Customized Design Solutions
            </h3>

            <p className="text-gray-600 leading-8">
              Every home is unique. Our design approach focuses on understanding
              your lifestyle, storage requirements, design preferences, and
              space planning needs to create interiors that feel personalized
              and timeless.
            </p>

          </div>

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Premium Quality Execution
            </h3>

            <p className="text-gray-600 leading-8">
              From modular kitchens and wardrobes to false ceilings and luxury
              living rooms, our team ensures quality craftsmanship, premium
              materials, and smooth project execution from start to finish.
            </p>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-semibold text-center mb-10">
          Interior Design Services in Hebbal
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Full Home Interiors",
            "Modular Kitchen Design",
            "Wardrobes & Storage",
            "Living Room Interiors",
            "Bedroom Interior Design",
            "False Ceiling & Lighting",
            "TV Unit Design",
            "Dining Area Interiors",
            "Luxury Villa Interiors",
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

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Interior Design Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-5">

          <img
            src="/images/project3.webp"
            alt="Luxury apartment interior design project in Hebbal Bangalore"
            className="h-72 w-full object-cover"
            loading="lazy"
          />

          <img
            src="/images/project4.webp"
            alt="Modern modular kitchen interior design in Hebbal Bangalore"
            className="h-72 w-full object-cover"
            loading="lazy"
          />

          <img
            src="/images/project5.webp"
            alt="Premium living room interior design in Hebbal Bangalore"
            className="h-72 w-full object-cover"
            loading="lazy"
          />

        </div>

      </section>

      {/* COST */}
      <section className="bg-gray-50 py-16">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold mb-8">
            Interior Design Cost in Hebbal Bangalore
          </h2>

          <div className="space-y-4 text-lg">

            <p>✔ 2BHK Interior Design: ₹4L – ₹7L</p>

            <p>✔ 3BHK Interior Design: ₹6L – ₹11L</p>

            <p>✔ Luxury Villa Interiors: ₹10L onwards</p>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE */}
      <section className="bg-black text-white py-16">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl text-center font-semibold mb-12">
            Why Choose Denova Creations?
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">

            <div className="border border-white/20 p-6">
              Elegant Modern Designs
            </div>

            <div className="border border-white/20 p-6">
              Premium Material Quality
            </div>

            <div className="border border-white/20 p-6">
              Experienced Design Team
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
              What is the average interior cost in Hebbal Bangalore?
            </h3>

            <p className="text-gray-600 leading-7">
              Interior costs typically range from ₹4L to ₹12L depending on
              apartment size, material quality, and level of customization.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-3">
              Do you provide turnkey interior execution?
            </h3>

            <p className="text-gray-600 leading-7">
              Yes. Denova Creations handles complete turnkey interior execution
              including design, manufacturing, installation, and site
              supervision.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-3">
              Do you work on villas and luxury apartments in Hebbal?
            </h3>

            <p className="text-gray-600 leading-7">
              Absolutely. We specialize in premium residential interiors for
              villas, apartments, and gated communities across Hebbal Bangalore.
            </p>

          </div>

        </div>

      </section>

      {/* INTERNAL LINKS */}
      <section className="bg-gray-100 py-14">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-2xl font-semibold mb-8">
            Explore More
          </h2>

          <div className="flex flex-wrap justify-center gap-6">

            <a
              href="/portfolio"
              className="underline hover:text-yellow-700"
            >
              Interior Portfolio
            </a>

            <a
              href="/services"
              className="underline hover:text-yellow-700"
            >
              Interior Services
            </a>

            <a
              href="/estimate"
              className="underline hover:text-yellow-700"
            >
              Interior Cost Estimate
            </a>

            <a
              href="/contact"
              className="underline hover:text-yellow-700"
            >
              Contact Denova Creations
            </a>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="py-16 text-center px-6">

        <h2 className="text-4xl font-semibold mb-6">
          Upgrade Your Living Space with Premium Interiors
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          Speak with our interior design experts today and transform your
          apartment or villa in Hebbal with customized luxury interiors.
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
            Get Free Consultation
          </a>

        </div>

      </section>

    </div>
  );
};

export default Hebbal;