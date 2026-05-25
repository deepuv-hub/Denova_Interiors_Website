import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const HSRLayout = () => {

  const pageTitle =
    "Affordable Interior Designers in HSR Layout Bangalore | Denova Creations";

  const pageDescription =
    "Affordable interior designers in HSR Layout Bangalore for 2BHK and 3BHK apartments, modular kitchens, wardrobes, and turnkey home interiors.";

  const pageUrl =
    "https://denovacreations.com/interior-designers/hsr-layout";

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
              "HSR Layout",
              "Bangalore",
              "South Bangalore",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "HSR Layout",
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
                name: "What is the average interior cost in HSR Layout Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Interior design costs in HSR Layout typically range from ₹3L to ₹8L depending on apartment size, materials, and customization level.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide budget-friendly interior packages?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. Denova Creations offers affordable interior design packages for apartments, rental homes, and compact spaces in HSR Layout Bangalore.",
                },
              },
              {
                "@type": "Question",
                name: "Do you handle complete turnkey execution?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. We provide complete turnkey interior execution including design, manufacturing, installation, and project management.",
                },
              },
            ],
          })}
        </script>

      </Helmet>

      {/* HERO */}
      <section className="bg-gray-900 text-white py-24 overflow-hidden">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>

            <h1
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Affordable Interior Designers in HSR Layout Bangalore
            </h1>

            <p className="text-lg text-gray-300 leading-8 max-w-xl">
              Looking for modern and budget-friendly home interiors in HSR
              Layout? Denova Creations specializes in stylish apartment
              interiors, modular kitchens, wardrobes, and turnkey solutions
              tailored for urban living.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="/contact"
                className="bg-yellow-600 hover:bg-yellow-700 transition px-6 py-3 font-semibold"
              >
                Get Free Estimate
              </a>

              <a
                href="/portfolio"
                className="border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition"
              >
                View Portfolio
              </a>

            </div>

          </div>

          <div>

            <img
              src="/images/hero2.webp"
              alt="Affordable apartment interior design in HSR Layout Bangalore"
              className="rounded-xl shadow-2xl"
            />

          </div>

        </div>

      </section>

      {/* BENEFITS */}
      <section className="max-w-6xl mx-auto py-14 px-6">

        <div className="grid md:grid-cols-3 gap-6 text-center">

          <div className="border border-gray-200 p-6 shadow-sm">
            Budget-Friendly Packages
          </div>

          <div className="border border-gray-200 p-6 shadow-sm">
            Fast & Reliable Execution
          </div>

          <div className="border border-gray-200 p-6 shadow-sm">
            Apartment Interior Specialists
          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto py-16 px-6">

        <div className="text-center mb-10">

          <h2 className="text-3xl font-semibold mb-6">
            Smart & Functional Interiors for Modern Homes
          </h2>

          <p className="text-gray-600 leading-8">
            HSR Layout is one of Bangalore’s most vibrant residential hubs,
            known for apartments, compact urban homes, and modern living
            spaces. Denova Creations designs practical yet elegant interiors
            optimized for comfort, storage, aesthetics, and long-term value.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Apartment Interior Specialists
            </h3>

            <p className="text-gray-600 leading-8">
              We specialize in creating efficient layouts and stylish interiors
              for 2BHK and 3BHK apartments across HSR Layout Bangalore. Our
              solutions maximize storage while maintaining modern aesthetics.
            </p>

          </div>

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Affordable Turnkey Solutions
            </h3>

            <p className="text-gray-600 leading-8">
              From modular kitchens and wardrobes to false ceilings and TV
              units, our turnkey execution process ensures smooth delivery,
              transparent pricing, and quality craftsmanship.
            </p>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-semibold text-center mb-10">
          Interior Design Services in HSR Layout
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Full Home Interiors",
            "Modular Kitchen Design",
            "Wardrobes & Storage",
            "TV Unit Design",
            "Living Room Interiors",
            "Bedroom Interior Design",
            "False Ceiling & Lighting",
            "Rental Home Interiors",
            "Turnkey Interior Solutions",
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

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-8 text-center">
            Interior Cost in HSR Layout Bangalore
          </h2>

          <div className="bg-white shadow-lg p-8 space-y-4 text-lg">

            <p>✔ 2BHK Interiors: ₹3L – ₹5.5L</p>

            <p>✔ 3BHK Interiors: ₹4.5L – ₹8L</p>

            <p>✔ Modular Kitchen Packages: ₹1L onwards</p>

          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-semibold text-center mb-10">
          Recent Interior Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-5">

          <img
            src="/images/project3.webp"
            alt="Modern apartment interior project in HSR Layout Bangalore"
            className="h-72 object-cover w-full"
            loading="lazy"
          />

          <img
            src="/images/project4.webp"
            alt="Modular kitchen interior project in HSR Layout Bangalore"
            className="h-72 object-cover w-full"
            loading="lazy"
          />

          <img
            src="/images/project5.webp"
            alt="Bedroom interior design project in HSR Layout Bangalore"
            className="h-72 object-cover w-full"
            loading="lazy"
          />

        </div>

      </section>

      {/* WHY CHOOSE */}
      <section className="bg-black text-white py-16">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold mb-12">
            Why Choose Denova Creations?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="border border-white/20 p-6">
              Transparent Pricing
            </div>

            <div className="border border-white/20 p-6">
              Apartment Interior Experts
            </div>

            <div className="border border-white/20 p-6">
              Fast Project Delivery
            </div>

            <div className="border border-white/20 p-6">
              End-to-End Turnkey Service
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
              What is the average interior cost in HSR Layout?
            </h3>

            <p className="text-gray-600 leading-7">
              Interior costs typically range from ₹3L to ₹8L depending on
              apartment size, material quality, and customization.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-3">
              Do you provide affordable interior packages?
            </h3>

            <p className="text-gray-600 leading-7">
              Yes. We offer budget-friendly interior solutions for apartments,
              compact homes, and rental properties in HSR Layout Bangalore.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-3">
              Do you handle complete turnkey execution?
            </h3>

            <p className="text-gray-600 leading-7">
              Absolutely. Denova Creations provides end-to-end interior
              execution including design, manufacturing, installation, and site
              coordination.
            </p>

          </div>

        </div>

      </section>

      {/* INTERNAL LINKS */}
      <section className="bg-gray-100 py-14">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-2xl font-semibold mb-8">
            Explore More Interior Services
          </h2>

          <div className="flex flex-wrap justify-center gap-6">

            <Link
              to="/portfolio"
              className="underline hover:text-yellow-700"
            >
              Interior Portfolio
            </Link>

            <Link
              to="/services"
              className="underline hover:text-yellow-700"
            >
              Interior Services
            </Link>

            <Link
              to="/estimate"
              className="underline hover:text-yellow-700"
            >
              Interior Pricing Estimate
            </Link>

            <Link
              to="/interior-designers/koramangala"
              className="underline hover:text-yellow-700"
            >
              Koramangala Interior Designers
            </Link>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="py-16 text-center px-6">

        <h2 className="text-4xl font-semibold mb-6">
          Transform Your Apartment with Smart Interior Design
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          Speak with Denova Creations today and create stylish, functional,
          and affordable interiors for your home in HSR Layout Bangalore.
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

export default HSRLayout;