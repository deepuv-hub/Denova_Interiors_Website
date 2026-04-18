import React from "react";
import { Helmet } from "react-helmet";

const Yelahanka = () => {
  return (
    <div className="bg-white">

      <Helmet>
        <title>Interior Designers in Yelahanka | Budget Home Interiors</title>
        <meta
          name="description"
          content="Affordable interior designers in Yelahanka for independent homes and 2BHK, 3BHK houses. Get budget-friendly and durable interiors."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative h-[500px] flex items-center">
        <img
          src="/images/yelahanka-hero.jpg"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-4xl font-bold mb-4">
            Interior Designers in Yelahanka
          </h1>

          <p className="max-w-xl">
            Practical and budget-friendly interiors designed for independent homes and spacious living in Yelahanka.
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
          <img src="/images/y1.jpg" className="h-60 object-cover w-full" />
          <img src="/images/y2.jpg" className="h-60 object-cover w-full" />
          <img src="/images/y3.jpg" className="h-60 object-cover w-full" />
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
          <a href="/interior-design-cost-bangalore" className="underline">
            View Pricing →
          </a>
        </div>
      </section>

    </div>
  );
};

export default Yelahanka;