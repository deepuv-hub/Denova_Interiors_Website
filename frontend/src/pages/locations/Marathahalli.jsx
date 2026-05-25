import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Marathahalli = () => {

  const pageTitle =
    "Affordable Interior Designers in Marathahalli Bangalore | Denova Creations";

  const pageDescription =
    "Affordable interior designers in Marathahalli Bangalore for apartments, rental homes, modular kitchens, wardrobes, and turnkey home interiors.";

  const pageUrl =
    "https://denovacreations.com/interior-designers/marathahalli";

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
              "Marathahalli",
              "Bangalore",
              "East Bangalore",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Marathahalli",
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
                name: "What is the average interior cost in Marathahalli Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Interior design costs in Marathahalli Bangalore generally range between ₹2.8L and ₹7L depending on apartment size, customization, and materials.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide affordable interior packages for apartments?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. Denova Creations provides affordable and budget-friendly interior packages for apartments, compact homes, and rental properties in Marathahalli Bangalore.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide turnkey home interior execution?",
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
              Affordable Interior Designers in Marathahalli Bangalore
            </h1>

            <p className="text-lg text-gray-300 leading-8 max-w-xl">
              Looking for stylish yet affordable interiors for your apartment
              or rental home in Marathahalli? Denova Creations specializes in
              practical and budget-friendly interior solutions for modern urban
              living.
            </p>

            <p className="mt-6 text-white/80 leading-8 max-w-2xl">
              We design modular kitchens, wardrobes, living room interiors,
              smart storage solutions, and turnkey home interiors tailored for
              working professionals, families, and compact urban spaces.
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

          <div>

            <img
              src="/images/hero2.webp"
              alt="Affordable apartment interior design in Marathahalli Bangalore"
              className="rounded-xl shadow-2xl object-cover"
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
            Quick Installation & Execution
          </div>

          <div className="border border-gray-200 p-6 shadow-sm">
            Rental-Friendly Interior Designs
          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto py-16 px-6">

        <div className="text-center mb-10">

          <h2 className="text-3xl font-semibold mb-6">
            Functional Interiors for Modern Urban Living
          </h2>

          <p className="text-gray-600 leading-8">
            Marathahalli is one of Bangalore’s busiest residential and IT
            corridors known for apartments, rental homes, and compact urban
            living spaces. Denova Creations designs practical interiors that
            maximize functionality, comfort, storage, and aesthetics while
            maintaining affordable pricing.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Smart Space Optimization
            </h3>

            <p className="text-gray-600 leading-8">
              We specialize in efficient layouts and smart storage solutions for
              apartments and compact homes, helping homeowners maximize every
              inch of available space without compromising design aesthetics.
            </p>

          </div>

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Affordable Turnkey Interiors
            </h3>

            <p className="text-gray-600 leading-8">
              From modular kitchens and wardrobes to TV units and lighting, we
              provide complete turnkey execution with transparent pricing,
              quality materials, and fast project delivery.
            </p>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-semibold text-center mb-10">
          Interior Design Services in Marathahalli
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "2BHK & 3BHK Home Interiors",
            "Modular Kitchen Design",
            "Wardrobes & Storage",
            "TV Unit Design",
            "Living Room Interiors",
            "Bedroom Interior Design",
            "Space Optimization Solutions",
            "Rental Home Setup",
            "Quick Turnkey Execution",
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
            Interior Cost in Marathahalli Bangalore
          </h2>

          <div className="bg-white p-8 shadow-lg space-y-4 text-lg">

            <p>✔ 2BHK Interiors: ₹2.8L – ₹5L</p>

            <p>✔ 3BHK Interiors: ₹4L – ₹7L</p>

            <p>✔ Modular Kitchen Packages: ₹90K onwards</p>

          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-semibold text-center mb-10">
          Recent Interior Design Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-5">

          <img
            src="/images/project3.webp"
            alt="Modern apartment interior project in Marathahalli Bangalore"
            className="h-72 object-cover w-full"
            loading="lazy"
          />

          <img
            src="/images/project4.webp"
            alt="Modular kitchen interior project in Marathahalli Bangalore"
            className="h-72 object-cover w-full"
            loading="lazy"
          />

          <img
            src="/images/project5.webp"
            alt="Space-saving wardrobe interior project in Marathahalli Bangalore"
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
              Affordable Transparent Pricing
            </div>

            <div className="border border-white/20 p-6">
              Fast Project Delivery
            </div>

            <div className="border border-white/20 p-6">
              Smart Space Optimization
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
              What is the average interior cost in Marathahalli?
            </h3>

            <p className="text-gray-600 leading-7">
              Interior costs generally range from ₹2.8L to ₹7L depending on
              apartment size, customization level, and materials selected.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-3">
              Do you provide affordable apartment interior packages?
            </h3>

            <p className="text-gray-600 leading-7">
              Yes. Denova Creations specializes in affordable interior design
              solutions for apartments, compact homes, and rental properties in
              Marathahalli Bangalore.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-3">
              Do you provide turnkey interior execution?
            </h3>

            <p className="text-gray-600 leading-7">
              Absolutely. We provide complete turnkey interior execution
              including design, manufacturing, installation, and project
              management.
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
              Check Interior Cost
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
          Get Affordable Interiors for Your Home
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          Speak with Denova Creations today and transform your apartment or
          rental home in Marathahalli Bangalore with affordable and functional
          interior design solutions.
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

export default Marathahalli;