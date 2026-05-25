import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SarjapurRoad = () => {

  const pageTitle =
    "Interior Designers in Sarjapur Road Bangalore | Denova Creations";

  const pageDescription =
    "Premium interior designers in Sarjapur Road Bangalore for 2BHK and 3BHK apartments, modular kitchens, wardrobes, and turnkey home interiors.";

  const pageUrl =
    "https://denovacreations.com/interior-designers/sarjapur-road";

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
              "Sarjapur Road",
              "Bangalore",
              "East Bangalore",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Sarjapur Road",
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
                name: "What is the average interior cost in Sarjapur Road Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Interior design costs in Sarjapur Road Bangalore generally range between ₹3.5L and ₹9L depending on apartment size, customization, and materials.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide turnkey home interior execution?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. Denova Creations provides complete turnkey interior execution including design, manufacturing, installation, and project management.",
                },
              },
              {
                "@type": "Question",
                name: "Do you design interiors for apartments and family homes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. We specialize in apartment interiors, modular kitchens, wardrobes, living room interiors, and premium family home interiors across Sarjapur Road Bangalore.",
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
          alt="Luxury apartment interior design in Sarjapur Road Bangalore"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">

          <h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Interior Designers in Sarjapur Road Bangalore
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-gray-200 leading-8">
            Move into your new home with beautifully designed interiors
            tailored for modern family living in Sarjapur Road Bangalore.
          </p>

          <p className="max-w-3xl mt-6 text-white/80 leading-8">
            Denova Creations specializes in premium home interiors for
            apartments and family homes including modular kitchens,
            wardrobes, living room interiors, false ceilings, and complete
            turnkey execution.
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
            Perfect for New Apartments
          </div>

          <div className="border border-gray-200 p-6 shadow-sm">
            Family-Friendly Interior Designs
          </div>

          <div className="border border-gray-200 p-6 shadow-sm">
            End-to-End Turnkey Interiors
          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto py-16 px-6">

        <div className="text-center mb-10">

          <h2 className="text-3xl font-semibold mb-6">
            Premium Interior Solutions for Modern Family Homes
          </h2>

          <p className="text-gray-600 leading-8">
            Sarjapur Road is one of Bangalore’s fastest-growing residential
            corridors known for gated communities, apartments, and family
            homes. Denova Creations designs elegant and functional interiors
            tailored for modern urban lifestyles and practical everyday living.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Smart Space Planning
            </h3>

            <p className="text-gray-600 leading-8">
              We create optimized layouts and smart storage solutions for
              apartments and villas ensuring maximum functionality, comfort,
              and aesthetics for families and working professionals.
            </p>

          </div>

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Complete Turnkey Execution
            </h3>

            <p className="text-gray-600 leading-8">
              From modular kitchens and wardrobes to false ceilings and
              lighting, our turnkey execution process ensures quality
              craftsmanship, premium materials, and on-time project delivery.
            </p>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-semibold text-center mb-10">
          Complete Interior Design Solutions
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Full Home Interiors",
            "Modular Kitchen Design",
            "Wardrobes & Storage",
            "Living Room Interiors",
            "Bedroom Interior Design",
            "False Ceiling & Lighting",
            "Space Planning Solutions",
            "TV Unit Design",
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
            Interior Cost in Sarjapur Road Bangalore
          </h2>

          <div className="bg-white p-8 shadow-lg space-y-4 text-lg">

            <p>✔ 2BHK Interiors: ₹3.5L – ₹6.5L</p>

            <p>✔ 3BHK Interiors: ₹5.5L – ₹9L</p>

            <p>✔ Modular Kitchen Packages: ₹1.2L onwards</p>

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
            alt="Modern apartment interior project in Sarjapur Road Bangalore"
            className="h-72 object-cover w-full"
            loading="lazy"
          />

          <img
            src="/images/project4.webp"
            alt="Modular kitchen interior project in Sarjapur Road Bangalore"
            className="h-72 object-cover w-full"
            loading="lazy"
          />

          <img
            src="/images/project5.webp"
            alt="Premium bedroom interior project in Sarjapur Road Bangalore"
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
              Complete Home Interior Solutions
            </div>

            <div className="border border-white/20 p-6">
              Family-Oriented Interior Design
            </div>

            <div className="border border-white/20 p-6">
              Premium Quality Materials
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
              What is the average interior cost in Sarjapur Road?
            </h3>

            <p className="text-gray-600 leading-7">
              Interior costs generally range between ₹3.5L and ₹9L depending
              on apartment size, customization level, and material selection.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-3">
              Do you provide turnkey interior execution?
            </h3>

            <p className="text-gray-600 leading-7">
              Yes. Denova Creations provides complete turnkey execution
              including design, manufacturing, installation, and project
              coordination.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-3">
              Do you design interiors for new apartments?
            </h3>

            <p className="text-gray-600 leading-7">
              Absolutely. We specialize in interiors for newly purchased
              apartments, villas, and family homes across Sarjapur Road
              Bangalore.
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
          Design Your Dream Home with Premium Interiors
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          Speak with Denova Creations today and transform your apartment or
          family home in Sarjapur Road Bangalore with elegant and functional
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

export default SarjapurRoad;