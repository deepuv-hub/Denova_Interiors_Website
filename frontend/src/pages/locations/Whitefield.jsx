import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Whitefield = () => {

  const pageTitle =
    "Luxury Interior Designers in Whitefield Bangalore | Denova Creations";

  const pageDescription =
    "Luxury interior designers in Whitefield Bangalore specializing in villas, penthouses, premium apartments, modular kitchens, and turnkey luxury interiors.";

  const pageUrl =
    "https://denovacreations.com/interior-designers/whitefield";

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
              "Whitefield",
              "Bangalore",
              "East Bangalore",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Whitefield",
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
                name: "What is the average luxury interior cost in Whitefield Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Luxury interior projects in Whitefield Bangalore typically start from ₹6L onwards depending on villa size, apartment layout, materials, and customization requirements.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide luxury turnkey interior execution?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. Denova Creations provides complete turnkey luxury interior execution including design, premium material selection, manufacturing, installation, and project management.",
                },
              },
              {
                "@type": "Question",
                name: "Do you specialize in villa and premium apartment interiors?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. We specialize in luxury villa interiors, penthouses, premium apartments, modular kitchens, wardrobes, and bespoke living spaces in Whitefield Bangalore.",
                },
              },
            ],
          })}
        </script>

      </Helmet>

      {/* HERO */}
      <section className="relative h-[700px] flex items-center overflow-hidden">

        <img
          src="/images/hero2.webp"
          alt="Luxury villa interior design in Whitefield Bangalore"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">

          <h1
            className="text-5xl md:text-7xl font-light leading-tight mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Luxury Interior Designers in Whitefield Bangalore
          </h1>

          <p className="text-lg md:text-xl max-w-2xl text-gray-200 leading-8">
            Bespoke interiors crafted for villas, penthouses, and premium
            apartments. Experience refined aesthetics, premium materials,
            and flawless turnkey execution.
          </p>

          <p className="text-white/80 leading-8 max-w-3xl mt-6">
            Denova Creations specializes in luxury interior design services in
            Whitefield Bangalore for high-end residences and contemporary urban
            lifestyles. We create elegant living spaces with sophisticated
            finishes, smart layouts, premium craftsmanship, and timeless design
            aesthetics.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="/contact"
              className="border border-white px-8 py-4 hover:bg-white hover:text-black transition font-semibold"
            >
              Book Consultation
            </a>

            <a
              href="/portfolio"
              className="bg-yellow-600 hover:bg-yellow-700 transition px-8 py-4 font-semibold text-white"
            >
              View Luxury Projects
            </a>

          </div>

        </div>

      </section>

      {/* TRUST STRIP */}
      <section className="py-14 border-b bg-white">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">

          <div className="border border-gray-200 p-6 shadow-sm">
            Premium Clients Served
          </div>

          <div className="border border-gray-200 p-6 shadow-sm">
            High-End Material Selection
          </div>

          <div className="border border-gray-200 p-6 shadow-sm">
            Complete Turnkey Luxury Interiors
          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto py-20 px-6 text-center">

        <h2 className="text-4xl font-light mb-8">
          Designed for Elevated Living
        </h2>

        <p className="text-gray-600 leading-9 text-lg">
          Whitefield is one of Bangalore’s most premium residential and luxury
          living destinations known for upscale apartments, villas, gated
          communities, and modern urban lifestyles. Denova Creations designs
          bespoke interiors that combine elegance, functionality, and premium
          craftsmanship to create sophisticated living experiences.
        </p>

      </section>

      {/* CONTENT BLOCKS */}
      <section className="max-w-6xl mx-auto py-10 px-6">

        <div className="grid md:grid-cols-2 gap-14">

          <div>

            <h3 className="text-3xl font-light mb-5">
              Bespoke Luxury Interior Design
            </h3>

            <p className="text-gray-600 leading-8">
              Our design philosophy focuses on timeless elegance, refined
              aesthetics, smart space planning, and customized luxury interiors
              tailored for modern homeowners seeking sophistication and comfort.
            </p>

          </div>

          <div>

            <h3 className="text-3xl font-light mb-5">
              Premium Turnkey Execution
            </h3>

            <p className="text-gray-600 leading-8">
              From modular kitchens and wardrobes to lighting design and
              premium finishes, we manage complete turnkey execution with
              meticulous attention to detail, premium materials, and seamless
              project coordination.
            </p>

          </div>

        </div>

      </section>

      {/* PROJECT SHOWCASE */}
      <section className="max-w-6xl mx-auto py-20 px-6">

        <h2 className="text-4xl font-light mb-12 text-center">
          Featured Luxury Interior Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-5">

          <img
            src="/images/project3.webp"
            alt="Luxury apartment interior project in Whitefield Bangalore"
            className="h-80 object-cover w-full"
            loading="lazy"
          />

          <img
            src="/images/project4.webp"
            alt="Premium villa interior project in Whitefield Bangalore"
            className="h-80 object-cover w-full"
            loading="lazy"
          />

          <img
            src="/images/project5.webp"
            alt="Luxury living room interior project in Whitefield Bangalore"
            className="h-80 object-cover w-full"
            loading="lazy"
          />

        </div>

      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-light mb-10">
            Our Luxury Interior Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-gray-700">

            <div className="bg-white p-6 shadow-sm">
              Luxury Villa Interiors
            </div>

            <div className="bg-white p-6 shadow-sm">
              Premium Apartment Interiors
            </div>

            <div className="bg-white p-6 shadow-sm">
              Bespoke Modular Kitchens
            </div>

            <div className="bg-white p-6 shadow-sm">
              Wardrobes & Walk-In Closets
            </div>

            <div className="bg-white p-6 shadow-sm">
              Lighting & Ceiling Design
            </div>

            <div className="bg-white p-6 shadow-sm">
              Complete Turnkey Execution
            </div>

          </div>

        </div>

      </section>

      {/* COST */}
      <section className="max-w-4xl mx-auto py-20 px-6 text-center">

        <h2 className="text-4xl font-light mb-8">
          Luxury Interior Investment Range
        </h2>

        <div className="bg-gray-50 p-10 shadow-sm">

          <p className="text-lg text-gray-700 leading-8">
            Premium interior projects in Whitefield Bangalore generally start
            from ₹6L onwards depending on villa size, apartment layout,
            customization level, premium materials, and design complexity.
          </p>

        </div>

      </section>

      {/* WHY CHOOSE */}
      <section className="bg-black text-white py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-light mb-14">
            Why Choose Denova Creations?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="border border-white/20 p-8">
              Bespoke Luxury Designs
            </div>

            <div className="border border-white/20 p-8">
              Premium Material Selection
            </div>

            <div className="border border-white/20 p-8">
              Turnkey Project Management
            </div>

            <div className="border border-white/20 p-8">
              Elegant Timeless Interiors
            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto py-20 px-6">

        <h2 className="text-4xl font-light text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-10">

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              What is the average luxury interior cost in Whitefield?
            </h3>

            <p className="text-gray-600 leading-8">
              Luxury interiors in Whitefield Bangalore generally start from ₹6L
              onwards depending on customization, premium finishes, apartment
              size, and project scope.
            </p>

          </div>

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Do you provide turnkey luxury interior execution?
            </h3>

            <p className="text-gray-600 leading-8">
              Yes. Denova Creations handles complete turnkey luxury interior
              execution including design planning, premium material sourcing,
              manufacturing, installation, and site coordination.
            </p>

          </div>

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Do you specialize in villas and premium residences?
            </h3>

            <p className="text-gray-600 leading-8">
              Absolutely. We specialize in luxury villa interiors, penthouses,
              premium apartments, and bespoke living spaces across Whitefield
              Bangalore.
            </p>

          </div>

        </div>

      </section>

      {/* INTERNAL LINKS */}
      <section className="bg-gray-100 py-14">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-2xl font-semibold mb-8">
            Explore More Interior Locations
          </h2>

          <div className="flex flex-wrap justify-center gap-6">

            <Link
              to="/interior-designers/koramangala"
              className="underline hover:text-yellow-700"
            >
              Koramangala Interiors
            </Link>

            <Link
              to="/interior-designers/hsr-layout"
              className="underline hover:text-yellow-700"
            >
              HSR Layout Interiors
            </Link>

            <Link
              to="/portfolio"
              className="underline hover:text-yellow-700"
            >
              View Portfolio
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
      <section className="bg-black text-white py-20 text-center px-6">

        <h2 className="text-5xl font-light mb-8">
          Start Your Luxury Interior Journey
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300 mb-10 leading-8">
          Speak with Denova Creations today and transform your villa or premium
          apartment in Whitefield Bangalore with bespoke luxury interiors.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="tel:+919164011181"
            className="border border-white px-8 py-4 hover:bg-white hover:text-black transition font-semibold"
          >
            Call Now: 9164011181
          </a>

          <a
            href="/contact"
            className="bg-yellow-600 hover:bg-yellow-700 transition px-8 py-4 font-semibold text-white"
          >
            Book Consultation
          </a>

        </div>

      </section>

    </div>
  );
};

export default Whitefield;