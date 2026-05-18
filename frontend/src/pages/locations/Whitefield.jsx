import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Whitefield = () => {
  return (
    <div className="bg-white">

      <Helmet>
        <title>
          Interior Designers in Whitefield | Denova
        </title>
        <meta
          name="description"
          content="Luxury interior designers in Whitefield Bangalore for villas and premium apartments. Bespoke modular kitchens, wardrobes and turnkey luxury interiors by Denova Creations."
        />
        <link
          rel="canonical"
          href="https://denovacreations.com/interior-designers/whitefield"
        />
        <meta
          property="og:title"
          content="Interior Designers in Whitefield | Denova"
        />
        <meta
          property="og:description"
          content="Luxury interior designers in Whitefield Bangalore for villas and premium residences."
        />
        <meta
          property="og:image"
          content="https://denovacreations.com/images/hero2.webp"
        />
        <meta
          property="og:url"
          content="https://denovacreations.com/interior-designers/whitefield"
        />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
      </Helmet>

      {/* HERO - LUXURY STYLE */}
      <section className="relative h-[600px] flex items-center">
        <img
          src="/images/hero2.webp"
          alt="Luxury villa interior design in Whitefield Bangalore"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-white">
          <h1
            className="text-5xl md:text-6xl font-light mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Luxury Interior Designers in Whitefield Bangalore
          </h1>

          <p className="text-lg max-w-xl">
            Bespoke interiors crafted for villas and premium apartments.
            Experience refined design, premium materials, and flawless execution.
          </p>

          <p className="text-white/80 leading-relaxed max-w-2xl mt-4">
            Denova Creations specializes in luxury interior design services in Whitefield Bangalore for villas, penthouses and premium apartments. We create bespoke living spaces with elegant materials, sophisticated finishes and turnkey execution tailored for elevated urban lifestyles.
          </p>

          <button className="mt-8 border border-white px-8 py-3 hover:bg-white hover:text-black transition">
            Book Consultation
          </button>
        </div>
      </section>

      {/* PREMIUM TRUST */}
      <section className="py-10 text-center border-b">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-gray-700">
          <div>Premium Clients Served</div>
          <div>High-End Material Selection</div>
          <div>Turnkey Luxury Interiors</div>
        </div>
      </section>

      {/* ABOUT STYLE */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-light mb-6">
          Designed for Elevated Living
        </h2>

        <p className="text-gray-600 leading-relaxed">
          At Denova Creations, we specialize in luxury interior design for
          Whitefield’s villas and high-end residences. Our approach combines
          elegance, functionality, and premium craftsmanship to create timeless
          living spaces.
        </p>
      </section>

      {/* PROJECT SHOWCASE (FOCUS) */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-light mb-8 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <img
            src="/images/project3.webp"
            alt="Luxury apartment interior project in Whitefield Bangalore"
            className="h-72 object-cover w-full"
          />
          <img
            src="/images/project4.webp"
            alt="Premium villa interior project in Whitefield Bangalore"
            className="h-72 object-cover w-full"
          />
          <img
            src="/images/project5.webp"
            alt="Bespoke living room interior project in Whitefield Bangalore"
            className="h-72 object-cover w-full"
          />
        </div>
      </section>

      {/* SERVICES - MINIMAL */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-2xl font-light mb-6">
            Our Expertise
          </h2>

          <p className="text-gray-600">
            Luxury home interiors • Villa design • Modular kitchens • Wardrobes •
            Lighting design • Complete turnkey execution
          </p>

        </div>
      </section>

      {/* COST - PREMIUM STYLE */}
      <section className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h2 className="text-2xl font-light mb-6">
          Investment Range
        </h2>

        <p className="text-gray-700">
          Premium interiors typically start from ₹6L onwards,
          depending on materials, customization, and scope.
        </p>
      </section>

      {/* FINAL CTA - STRONG */}
      <section className="bg-black text-white py-16 text-center">
        <h2 className="text-3xl font-light mb-6">
          Start Your Luxury Interior Journey
        </h2>

        <button className="border border-white px-8 py-3 hover:bg-white hover:text-black transition">
          Call Now: 9164011181
        </button>

        <div className="mt-6 space-x-4 text-sm">
          <Link
            to="/interior-designers/koramangala"
            className="underline"
          >
            Koramangala
          </Link>
          <Link
            to="/interior-designers/hsr-layout"
            className="underline"
          >
            HSR Layout
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Whitefield;




