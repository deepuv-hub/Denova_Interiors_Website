import React from "react";
import { Helmet } from "react-helmet-async";

const Indiranagar = () => {

  const pageTitle =
    "Luxury Interior Designers in Indiranagar Bangalore | Denova Creations";

  const pageDescription =
    "Premium interior designers in Indiranagar Bangalore specializing in luxury apartments, modular kitchens, wardrobes, and turnkey home interiors.";

  const pageUrl =
    "https://denovacreations.com/interior-designers/indiranagar";

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
              "Indiranagar",
              "Bangalore",
              "East Bangalore",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Indiranagar",
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
                name: "What is the average interior cost in Indiranagar Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Interior design costs in Indiranagar typically range between ₹4L and ₹12L depending on apartment size, customization, and material quality.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide luxury interior design services in Indiranagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. Denova Creations specializes in premium and luxury interior design solutions for apartments, villas, and modern urban homes in Indiranagar Bangalore.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide turnkey interior execution?",
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
      <section className="relative bg-black text-white py-24 overflow-hidden">

        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/hero2.webp"
            alt="Luxury apartment interior design in Indiranagar Bangalore"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

          <h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Luxury Interior Designers in Indiranagar Bangalore
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-8">
            Stylish and elegant interiors crafted for modern urban living.
            Denova Creations specializes in premium apartment interiors,
            modular kitchens, wardrobes, and luxury turnkey home interiors in
            Indiranagar Bangalore.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <a
              href="/contact"
              className="bg-yellow-600 hover:bg-yellow-700 transition px-8 py-4 font-semibold"
            >
              Book Free Consultation
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

      {/* TRUST STRIP */}
      <section className="bg-gray-50 py-12">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">

          <div className="bg-white p-6 shadow-sm">
            Modern Urban Interior Designs
          </div>

          <div className="bg-white p-6 shadow-sm">
            Premium Materials & Finishes
          </div>

          <div className="bg-white p-6 shadow-sm">
            Complete Turnkey Execution
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
            Indiranagar is one of Bangalore’s most vibrant and premium
            residential locations known for stylish apartments, luxury homes,
            and urban lifestyles. Denova Creations designs sophisticated
            interiors that combine functionality, elegance, and modern
            aesthetics tailored for contemporary living.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Customized Luxury Interiors
            </h3>

            <p className="text-gray-600 leading-8">
              From modular kitchens and wardrobes to elegant living rooms and
              premium bedrooms, we create personalized interiors designed around
              your lifestyle, storage needs, and aesthetic preferences.
            </p>

          </div>

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Turnkey Interior Execution
            </h3>

            <p className="text-gray-600 leading-8">
              Our end-to-end execution process includes design planning,
              material selection, manufacturing, installation, and complete
              project management ensuring seamless delivery and premium quality.
            </p>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-semibold text-center mb-10">
          Interior Design Services in Indiranagar
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Full Home Interiors",
            "Luxury Modular Kitchens",
            "Wardrobes & Storage",
            "Living Room Interior Design",
            "Bedroom Interiors",
            "False Ceiling & Lighting",
            "TV Unit Design",
            "Dining Area Interiors",
            "Luxury Apartment Interiors",
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
          Recent Interior Design Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-5">

          <img
            src="/images/project3.webp"
            alt="Luxury apartment interior project in Indiranagar Bangalore"
            className="h-72 w-full object-cover"
            loading="lazy"
          />

          <img
            src="/images/project4.webp"
            alt="Modern modular kitchen interior design in Indiranagar Bangalore"
            className="h-72 w-full object-cover"
            loading="lazy"
          />

          <img
            src="/images/project5.webp"
            alt="Premium living room interior design project in Indiranagar Bangalore"
            className="h-72 w-full object-cover"
            loading="lazy"
          />

        </div>

      </section>

      {/* COST */}
      <section className="bg-gray-100 py-16">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold mb-8">
            Interior Cost in Indiranagar Bangalore
          </h2>

          <div className="bg-white shadow-lg p-8 space-y-4 text-lg">

            <p>✔ 2BHK Interiors: ₹4L – ₹7L</p>

            <p>✔ 3BHK Interiors: ₹6L – ₹11L</p>

            <p>✔ Luxury Interior Packages: ₹10L onwards</p>

          </div>

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
              Elegant Modern Designs
            </div>

            <div className="border border-white/20 p-6">
              Premium Material Quality
            </div>

            <div className="border border-white/20 p-6">
              Experienced Design Team
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
              What is the average interior cost in Indiranagar?
            </h3>

            <p className="text-gray-600 leading-7">
              Interior costs in Indiranagar generally range between ₹4L and
              ₹12L depending on apartment size, customization level, and
              material selection.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-3">
              Do you design luxury interiors for apartments?
            </h3>

            <p className="text-gray-600 leading-7">
              Yes. Denova Creations specializes in premium apartment interiors,
              luxury living rooms, modular kitchens, wardrobes, and customized
              home interiors in Indiranagar Bangalore.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-3">
              Do you provide complete turnkey execution?
            </h3>

            <p className="text-gray-600 leading-7">
              Absolutely. We provide end-to-end turnkey execution including
              design planning, manufacturing, installation, and project
              coordination.
            </p>

          </div>

        </div>

      </section>

      {/* INTERNAL LINKS */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">

        <h2 className="text-3xl font-semibold mb-8">
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
            Interior Cost Estimate
          </a>

          <a
            href="/contact"
            className="underline hover:text-yellow-700"
          >
            Contact Denova Creations
          </a>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="bg-gray-50 py-16 text-center px-6">

        <h2 className="text-4xl font-semibold mb-6">
          Transform Your Home with Luxury Interiors
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          Speak with Denova Creations today and create elegant, modern, and
          functional interiors for your apartment or luxury home in
          Indiranagar Bangalore.
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

export default Indiranagar;