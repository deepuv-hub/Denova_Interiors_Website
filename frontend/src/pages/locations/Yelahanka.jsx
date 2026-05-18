import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Yelahanka = () => {
  return (
    <div className="bg-white">

      <Helmet>
        <title>
          Interior Designers in Yelahanka | Denova
        </title>
        <meta
          name="description"
          content="Affordable interior designers in Yelahanka Bangalore for independent homes, villas and apartments. Modular kitchens, wardrobes and durable home interiors by Denova Creations."
        />
        <link
          rel="canonical"
          href="https://denovacreations.com/interior-designers/yelahanka"
        />
        <meta
          property="og:title"
          content="Interior Designers in Yelahanka | Denova"
        />
        <meta
          property="og:description"
          content="Affordable home interior designers in Yelahanka Bangalore for apartments and independent homes."
        />
        <meta
          property="og:image"
          content="https://denovacreations.com/images/hero2.webp"
        />
        <meta
          property="og:url"
          content="https://denovacreations.com/interior-designers/yelahanka"
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
          src="/images/hero2.webp"
          alt="Affordable independent home interior design in Yelahanka Bangalore"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Interior Designers in Yelahanka Bangalore
          </h1>

          <p className="max-w-xl">
            Practical and budget-friendly interiors designed for independent homes and spacious living in Yelahanka.
          </p>

          <p className="max-w-2xl mt-4 text-white/80 leading-relaxed">
            Denova Creations provides affordable and durable interior design services in Yelahanka Bangalore for independent homes, villas and apartments. We specialize in modular kitchens, wardrobes and complete turnkey interiors designed for comfortable family living.
          </p>

          <button className="mt-6 bg-yellow-600 px-6 py-3 font-semibold">
            Get Free Estimate
          </button>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="max-w-6xl mx-auto py-10 px-6 grid md:grid-cols-3 gap-6 text-center">
        <div className="p-4 border">Affordable Packages</div>
        <div className="p-4 border">Durable Materials</div>
        <div className="p-4 border">Ideal for Independent Homes</div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6">
          Interior Services in Yelahanka
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-3">
            <li>✔ Full Home Interiors</li>
            <li>✔ Modular Kitchen</li>
            <li>✔ Wardrobes & Storage</li>
            <li>✔ Living Room Interiors</li>
          </ul>

          <ul className="space-y-3">
            <li>✔ Bedroom Design</li>
            <li>✔ Storage Optimization</li>
            <li>✔ Budget Furniture</li>
            <li>✔ Turnkey Execution</li>
          </ul>
        </div>
      </section>

      {/* COST */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-2xl font-semibold mb-6">
            Interior Cost in Yelahanka
          </h2>

          <div className="bg-white p-6 shadow-md">
            <p>✔ 2BHK Interiors: ₹2.5L – ₹5L</p>
            <p>✔ 3BHK Interiors: ₹4L – ₹7.5L</p>
            <p>✔ Independent Homes: ₹6L onwards</p>
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
            src="/images/project3.webp"
            alt="Modern independent home interior project in Yelahanka Bangalore"
            className="h-60 object-cover w-full"
          />
          <img
            src="/images/project4.webp"
            alt="Modular kitchen interior project in Yelahanka Bangalore"
            className="h-60 object-cover w-full"
          />
          <img
            src="/images/project5.webp"
            alt="Family living room interior project in Yelahanka Bangalore"
            className="h-60 object-cover w-full"
          />
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-2xl mb-6">Why Choose Denova Creations?</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div>Cost-Effective Solutions</div>
            <div>Durable Materials</div>
            <div>Smart Space Planning</div>
            <div>On-Time Delivery</div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-12 text-center">
        <h2 className="text-2xl mb-4">
          Affordable Interiors for Your Home
        </h2>

        <button className="bg-yellow-600 px-6 py-3">
          Call Now: 9164466606
        </button>

        <div className="mt-4">
          <Link
            to="/estimate"
            className="underline"
          >
            View Pricing →
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Yelahanka;




