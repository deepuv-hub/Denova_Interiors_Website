import React from "react";
import { Helmet } from "react-helmet-async";

const Koramangala = () => {

  const pageTitle =
    "Interior Designers in Koramangala Bangalore | Denova Creations";

  const pageDescription =
    "Premium interior designers in Koramangala Bangalore for 2BHK and 3BHK apartments, modular kitchens, wardrobes, and turnkey home interiors.";

  const pageUrl =
    "https://denovacreations.com/interior-designers/koramangala";

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
            areaServed: [
              "Koramangala",
              "Bangalore",
              "South Bangalore",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Koramangala",
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
                name: "What is the average interior cost in Koramangala Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Interior design costs in Koramangala Bangalore generally range between ₹3.5L and ₹10L depending on apartment size, customization, and material quality.",
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
                name: "Do you design interiors for apartments and urban homes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. We specialize in premium interiors for apartments, urban homes, modular kitchens, wardrobes, and modern living spaces in Koramangala Bangalore.",
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
          alt="Luxury apartment interior design in Koramangala Bangalore"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">

          <h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Interior Designers in Koramangala Bangalore
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-gray-200 leading-8">
            Transform your apartment or urban home with modern, elegant, and
            functional interiors designed for contemporary lifestyles in
            Koramangala Bangalore.
          </p>

          <p className="max-w-3xl mt-6 text-white/80 leading-8">
            Denova Creations specializes in premium home interiors including
            modular kitchens, wardrobes, living room interiors, false ceilings,
            and complete turnkey execution tailored for modern urban living.
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

      {/* TRUST BAR */}
      <section className="bg-gray-100 py-10">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">

          <div className="bg-white p-6 shadow-sm">
            ⭐ 4.9 Client Rating
          </div>

          <div className="bg-white p-6 shadow-sm">
            150+ Interior Projects
          </div>

          <div className="bg-white p-6 shadow-sm">
            5+ Years Experience
          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto py-16 px-6">

        <div className="text-center mb-10">

          <h2 className="text-3xl font-semibold mb-6">
            Premium Interior Solutions for Modern Urban Homes
          </h2>

          <p className="text-gray-600 leading-8">
            Koramangala is one of Bangalore’s most vibrant and premium urban
            residential locations known for modern apartments, luxury homes,
            and contemporary lifestyles. Denova Creations designs elegant and
            functional interiors tailored for urban homeowners seeking comfort,
            aesthetics, and practicality.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Customized Apartment Interiors
            </h3>

            <p className="text-gray-600 leading-8">
              We create personalized interiors for 2BHK and 3BHK apartments
              with modular kitchens, wardrobes, smart storage, living room
              designs, and optimized layouts that maximize both style and
              functionality.
            </p>

          </div>

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Complete Turnkey Execution
            </h3>

            <p className="text-gray-600 leading-8">
              From design planning and material selection to manufacturing and
              installation, our turnkey execution process ensures premium
              quality, transparent communication, and on-time delivery.
            </p>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-semibold text-center mb-10">
          Interior Design Services in Koramangala
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
            "Turnkey Interior Solutions",
          ].map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 p-6 hover:shadow-md transition"
            >
              {item}
            </div>
          ))}

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
            alt="Modern apartment interior project in Koramangala Bangalore"
            className="h-72 object-cover w-full"
            loading="lazy"
          />

          <img
            src="/images/project4.webp"
            alt="Modular kitchen interior project in Koramangala Bangalore"
            className="h-72 object-cover w-full"
            loading="lazy"
          />

          <img
            src="/images/project5.webp"
            alt="Premium living room interior project in Koramangala Bangalore"
            className="h-72 object-cover w-full"
            loading="lazy"
          />

        </div>

      </section>

      {/* COST */}
      <section className="bg-gray-50 py-16">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold mb-8">
            Interior Cost in Koramangala Bangalore
          </h2>

          <div className="bg-white p-8 shadow-lg space-y-4 text-lg">

            <p>✔ 2BHK Interiors: ₹3.5L – ₹6L</p>

            <p>✔ 3BHK Interiors: ₹5L – ₹10L</p>

            <p>✔ Premium Turnkey Packages Available</p>

          </div>

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
              Transparent Pricing
            </div>

            <div className="border border-white/20 p-6">
              Customized Interior Designs
            </div>

            <div className="border border-white/20 p-6">
              End-to-End Execution
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
              What is the average interior cost in Koramangala?
            </h3>

            <p className="text-gray-600 leading-7">
              Interior design costs generally range between ₹3.5L and ₹10L
              depending on apartment size, material quality, and level of
              customization.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-3">
              Do you provide turnkey home interiors?
            </h3>

            <p className="text-gray-600 leading-7">
              Yes. Denova Creations provides complete turnkey interior
              execution including design, material selection, manufacturing,
              installation, and project management.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-3">
              Do you design interiors for apartments in Koramangala?
            </h3>

            <p className="text-gray-600 leading-7">
              Absolutely. We specialize in apartment interiors, modular
              kitchens, wardrobes, living room interiors, and premium urban
              home interiors across Koramangala Bangalore.
            </p>

          </div>

        </div>

      </section>

      {/* INTERNAL LINKS */}
      <section className="py-14 text-center bg-gray-100">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-8">
            Explore More Interior Solutions
          </h2>

          <div className="flex flex-wrap justify-center gap-6">

            <a
              href="/services"
              className="underline hover:text-yellow-700"
            >
              Interior Design Services
            </a>

            <a
              href="/projects"
              className="underline hover:text-yellow-700"
            >
              View Projects
            </a>

            <a
              href="/estimate"
              className="underline hover:text-yellow-700"
            >
              Get Interior Estimate
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

      {/* CTA */}
      <section className="bg-black text-white py-16 text-center px-6">

        <h2 className="text-4xl font-semibold mb-6">
          Get Free Interior Consultation
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
          Speak with Denova Creations today and transform your apartment or
          urban home in Koramangala Bangalore with premium modern interiors.
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
            className="border border-white px-8 py-4 font-semibold hover:bg-white hover:text-black transition"
          >
            Book Free Consultation
          </a>

        </div>

      </section>

    </div>
  );
};

export default Koramangala;