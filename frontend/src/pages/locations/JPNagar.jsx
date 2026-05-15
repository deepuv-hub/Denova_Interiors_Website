import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const JPNagar = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>
          Interior Designers in JP Nagar Bangalore | Denova Creations
        </title>
        <meta
          name="description"
          content="Premium interior designers in JP Nagar Bangalore for 2BHK and 3BHK homes. Modular kitchens, wardrobes and complete home interiors by Denova Creations."
        />
        <link
          rel="canonical"
          href="https://denovacreations.com/interior-designers/jp-nagar"
        />
        <meta
          property="og:title"
          content="Interior Designers in JP Nagar Bangalore | Denova Creations"
        />
        <meta
          property="og:description"
          content="Premium home interior designers in JP Nagar Bangalore for apartments and family homes."
        />
        <meta
          property="og:image"
          content="https://denovacreations.com/images/jpnagar-hero.jpg"
        />
        <meta
          property="og:url"
          content="https://denovacreations.com/interior-designers/jp-nagar"
        />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
      </Helmet>

      {/* HERO */}
      <section className="relative h-[500px] flex items-center">
        <img
          src="/images/jpnagar-hero.jpg"
          alt="Luxury family home interior in JP Nagar Bangalore"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Interior Designers in JP Nagar Bangalore
          </h1>

          <p className="max-w-xl">
            Create a comfortable and stylish home for your family with thoughtfully designed interiors in JP Nagar.
          </p>

          <p className="max-w-2xl mt-4 text-white/80 leading-relaxed">
            Denova Creations specializes in family-friendly interior design solutions in JP Nagar Bangalore. We create practical and elegant interiors for apartments and villas with modular kitchens, wardrobes, smart storage and turnkey execution tailored for modern family living.
          </p>

          <button className="mt-6 bg-yellow-600 px-6 py-3 font-semibold">
            Get Free Consultation
          </button>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="max-w-6xl mx-auto py-10 px-6 grid md:grid-cols-3 gap-6 text-center">
        <div className="p-4 border">Family-Friendly Designs</div>
        <div className="p-4 border">Smart Storage Solutions</div>
        <div className="p-4 border">Balanced Pricing</div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6">
          Interior Services in JP Nagar
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-3">
            <li>Complete Home Interiors</li>
            <li>Modular Kitchen</li>
            <li>Wardrobes & Storage</li>
            <li>Living Room Interiors</li>
          </ul>

          <ul className="space-y-3">
            <li>Bedroom Design</li>
            <li>Space Planning</li>
            <li>Renovation Services</li>
            <li>Turnkey Execution</li>
          </ul>
        </div>
      </section>

      {/* COST */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-6">
            Interior Cost in JP Nagar
          </h2>

          <div className="bg-white p-6 shadow-md">
            <p>2BHK Interiors: Rs. 3L - Rs. 6L</p>
            <p>3BHK Interiors: Rs. 5L - Rs. 9L</p>
            <p>Renovation Projects: Rs. 2L onwards</p>
          </div>
        </div>
      </section>

      {/* PROJECT SHOWCASE */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6">
          Our Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <img
            src="/images/j1.jpg"
            alt="Modern home interior project in JP Nagar Bangalore"
            className="h-60 object-cover w-full"
          />
          <img
            src="/images/j2.jpg"
            alt="Modular kitchen interior project in JP Nagar Bangalore"
            className="h-60 object-cover w-full"
          />
          <img
            src="/images/j3.jpg"
            alt="Family living room interior project in JP Nagar Bangalore"
            className="h-60 object-cover w-full"
          />
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl mb-6">Why Choose Denova Creations?</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div>Practical Designs</div>
            <div>Quality Materials</div>
            <div>Affordable Pricing</div>
            <div>On-Time Delivery</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 text-center">
        <h2 className="text-2xl mb-4">
          Design a Comfortable Home for Your Family
        </h2>

        <button className="bg-yellow-600 px-6 py-3">
          Call Now: 9164466606
        </button>

        <div className="mt-4">
          <Link
            to="/estimate"
            className="underline"
          >
            View Interior Pricing →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default JPNagar;
