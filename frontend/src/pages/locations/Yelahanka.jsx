import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Yelahanka = () => {

  const pageTitle =
    "Affordable Interior Designers in Yelahanka Bangalore | Denova Creations";

  const pageDescription =
    "Affordable interior designers in Yelahanka Bangalore for independent homes, villas, apartments, modular kitchens, wardrobes, and turnkey home interiors.";

  const pageUrl =
    "https://denovacreations.com/interior-designers/yelahanka";

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
            telephone: "+91-9164011181",
            areaServed: [
              "Yelahanka",
              "Bangalore",
              "North Bangalore",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Yelahanka",
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
                name: "What is the average interior cost in Yelahanka Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Interior design costs in Yelahanka Bangalore generally range between ₹2.5L and ₹7.5L depending on home size, materials, and customization requirements.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide affordable turnkey home interiors?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. Denova Creations provides affordable turnkey home interior solutions including design, manufacturing, installation, and project execution.",
                },
              },
              {
                "@type": "Question",
                name: "Do you design interiors for independent homes and villas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. We specialize in interiors for independent homes, villas, apartments, modular kitchens, wardrobes, and family living spaces in Yelahanka Bangalore.",
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
          alt="Affordable independent home interior design in Yelahanka Bangalore"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">

          <h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Affordable Interior Designers in Yelahanka Bangalore
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-gray-200 leading-8">
            Practical, durable, and budget-friendly interiors designed for
            independent homes, villas, and family living in Yelahanka
            Bangalore.
          </p>

          <p className="max-w-3xl mt-6 text-white/80 leading-8">
            Denova Creations specializes in affordable home interior design
            services including modular kitchens, wardrobes, living room
            interiors, smart storage solutions, and complete turnkey execution
            tailored for comfortable family living.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="/contact"
              className="bg-yellow-600 hover:bg-yellow-700 transition px-8 py-4 font-semibold"
            >
              Get Free Estimate
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
            Affordable Interior Packages
          </div>

          <div className="border border-gray-200 p-6 shadow-sm">
            Durable Quality Materials
          </div>

          <div className="border border-gray-200 p-6 shadow-sm">
            Perfect for Independent Homes
          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto py-16 px-6">

        <div className="text-center mb-10">

          <h2 className="text-3xl font-semibold mb-6">
            Comfortable Interiors for Spacious Family Living
          </h2>

          <p className="text-gray-600 leading-8">
            Yelahanka is one of Bangalore’s rapidly developing residential
            areas known for independent homes, villas, gated communities, and
            spacious family living. Denova Creations designs practical and
            elegant interiors focused on durability, comfort, functionality,
            and long-term value for modern families.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Smart Storage & Space Planning
            </h3>

            <p className="text-gray-600 leading-8">
              Our design approach focuses on maximizing storage, improving
              functionality, and creating organized living spaces with modular
              kitchens, wardrobes, TV units, and optimized layouts tailored for
              family homes.
            </p>

          </div>

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Complete Turnkey Home Interiors
            </h3>

            <p className="text-gray-600 leading-8">
              From design planning and material selection to manufacturing and
              installation, we provide complete turnkey execution with quality
              craftsmanship, durable materials, and transparent pricing.
            </p>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-semibold text-center mb-10">
          Interior Services in Yelahanka Bangalore
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Full Home Interiors",
            "Modular Kitchen Design",
            "Wardrobes & Storage",
            "Living Room Interiors",
            "Bedroom Interior Design",
            "TV Unit Design",
            "Space Optimization Solutions",
            "Independent Home Interiors",
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
            Interior Cost in Yelahanka Bangalore
          </h2>

          <div className="bg-white p-8 shadow-lg space-y-4 text-lg">

            <p>✔ 2BHK Interiors: ₹2.5L – ₹5L</p>

            <p>✔ 3BHK Interiors: ₹4L – ₹7.5L</p>

            <p>✔ Independent Home Interiors: ₹6L onwards</p>

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
            alt="Modern independent home interior project in Yelahanka Bangalore"
            className="h-72 object-cover w-full"
            loading="lazy"
          />

          <img
            src="/images/project4.webp"
            alt="Modular kitchen interior project in Yelahanka Bangalore"
            className="h-72 object-cover w-full"
            loading="lazy"
          />

          <img
            src="/images/project5.webp"
            alt="Family living room interior project in Yelahanka Bangalore"
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
              Affordable Transparent Pricing
            </div>

            <div className="border border-white/20 p-6">
              Durable Quality Materials
            </div>

            <div className="border border-white/20 p-6">
              Smart Space Planning
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
              What is the average interior cost in Yelahanka?
            </h3>

            <p className="text-gray-600 leading-7">
              Interior costs generally range between ₹2.5L and ₹7.5L depending
              on home size, customization level, and material quality.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-3">
              Do you provide affordable turnkey home interiors?
            </h3>

            <p className="text-gray-600 leading-7">
              Yes. Denova Creations provides affordable turnkey interior
              execution including design, manufacturing, installation, and
              complete project coordination.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-3">
              Do you work on independent homes and villas?
            </h3>

            <p className="text-gray-600 leading-7">
              Absolutely. We specialize in independent homes, villas,
              apartments, modular kitchens, and spacious family interiors in
              Yelahanka Bangalore.
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
              View Pricing
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
          Affordable Interiors for Your Dream Home
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          Speak with Denova Creations today and transform your apartment,
          villa, or independent home in Yelahanka Bangalore with affordable
          and functional interior design solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="tel:+919164011181"
            className="bg-yellow-600 hover:bg-yellow-700 transition px-8 py-4 font-semibold text-white"
          >
            Call Now: 9164011181
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

export default Yelahanka;