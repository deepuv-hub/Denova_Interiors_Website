import React from "react";
import { Helmet } from "react-helmet";

const Hebbal = () => {
  return (
    <div className="bg-white">

      <Helmet>
        <title>
          Interior Designers in Hebbal Bangalore | Denova Creations
        </title>
        <meta
          name="description"
          content="Interior designers in Hebbal for villas and premium apartments. Get elegant home interiors with quality materials and expert execution."
        />
        <link
          rel="canonical"
          href="https://denovacreations.com/interior-designers/hebbal"
        />
        <meta
          property="og:title"
          content="Interior Designers in Hebbal Bangalore | Denova Creations"
        />
        <meta
          property="og:description"
          content="Premium interior designers in Hebbal Bangalore for villas and apartments. Modular kitchens, wardrobes and full home interiors by Denova Creations."
        />
        <meta
          property="og:image"
          content="https://denovacreations.com/images/hebbal-hero.jpg"
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
      </Helmet>

      {/* HERO */}
      <section className="relative h-[550px] flex items-center">
        <img
          src="/images/hebbal-hero.jpg"
          alt="Premium home interior design in Hebbal Bangalore by Denova Creations"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Interior Designers in Hebbal Bangalore
          </h1>

          <p className="max-w-xl">
            Elegant and functional interiors designed for villas and premium apartments in Hebbal. 
            Experience a perfect balance of luxury and practicality.
          </p>

          <button className="mt-6 bg-yellow-600 px-6 py-3 font-semibold">
            Book Free Consultation
          </button>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 text-center gap-6">
          <div>Premium Residences</div>
          <div>High-Quality Materials</div>
          <div>End-to-End Execution</div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Designed for Comfortable Living
        </h2>
        <p className="text-gray-600">
          Denova Creations delivers thoughtfully designed interiors tailored for spacious homes in Hebbal. 
          From villas to modern apartments, we ensure functionality, aesthetics, and long-lasting quality.
        </p>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border p-5">Full Home Interiors</div>
          <div className="border p-5">Modular Kitchen</div>
          <div className="border p-5">Wardrobes & Storage</div>
          <div className="border p-5">Living Room Design</div>
          <div className="border p-5">Bedroom Interiors</div>
          <div className="border p-5">Lighting & Ceiling</div>
        </div>
      </section>

      {/* PROJECT SHOWCASE */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6">Our Projects</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <img
            src="/images/h1.jpg"
            alt="Luxury apartment interior design project in Hebbal Bangalore"
            className="h-64 object-cover w-full"
          />
          <img
            src="/images/h2.jpg"
            alt="Modern modular kitchen interior design in Hebbal Bangalore"
            className="h-64 object-cover w-full"
          />
          <img
            src="/images/h3.jpg"
            alt="Premium living room interior design project in Hebbal Bangalore"
            className="h-64 object-cover w-full"
          />
        </div>
      </section>

      {/* COST */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-2xl font-semibold mb-6">
            Interior Cost in Hebbal
          </h2>

          <p>✔ 2BHK Interiors: ₹4L – ₹7L</p>
          <p>✔ 3BHK Interiors: ₹6L – ₹11L</p>
          <p>✔ Villas: ₹10L onwards</p>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl mb-6">Why Choose Denova Creations?</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div>Elegant Designs</div>
            <div>Premium Materials</div>
            <div>Experienced Team</div>
            <div>On-Time Delivery</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 text-center">
        <h2 className="text-2xl mb-4">
          Upgrade Your Living Space
        </h2>

        <button className="bg-yellow-600 px-6 py-3">
          Call Now: 9164011181
        </button>

        <div className="mt-4">
          <a href="/interior-design-cost-bangalore" className="underline">
            View Pricing Details →
          </a>
        </div>
      </section>

    </div>
  );
};

export default Hebbal;
