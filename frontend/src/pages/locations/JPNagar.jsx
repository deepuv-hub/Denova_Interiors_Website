import React from "react";
import { Helmet } from "react-helmet";

const JPNagar = () => {
  return (
    <div className="bg-white">

      <Helmet>
        <title>Interior Designers in JP Nagar | Home Interior Experts</title>
        <meta
          name="description"
          content="Interior designers in JP Nagar for 2BHK & 3BHK homes. Get functional and stylish interiors for family living with transparent pricing."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative h-[500px] flex items-center">
        <img
          src="/images/jpnagar-hero.jpg"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-4xl font-semibold mb-4">
            Interior Designers in JP Nagar
          </h1>

          <p className="max-w-xl">
            Create a comfortable and stylish home for your family with thoughtfully designed interiors in JP Nagar.
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
            <li>✔ Complete Home Interiors</li>
            <li>✔ Modular Kitchen</li>
            <li>✔ Wardrobes & Storage</li>
            <li>✔ Living Room Interiors</li>
          </ul>

          <ul className="space-y-3">
            <li>✔ Bedroom Design</li>
            <li>✔ Space Planning</li>
            <li>✔ Renovation Services</li>
            <li>✔ Turnkey Execution</li>
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
            <p>✔ 2BHK Interiors: ₹3L – ₹6L</p>
            <p>✔ 3BHK Interiors: ₹5L – ₹9L</p>
            <p>✔ Renovation Projects: ₹2L onwards</p>
          </div>

        </div>
      </section>

      {/* PROJECT SHOWCASE */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6">
          Our Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <img src="/images/j1.jpg" className="h-60 object-cover w-full" />
          <img src="/images/j2.jpg" className="h-60 object-cover w-full" />
          <img src="/images/j3.jpg" className="h-60 object-cover w-full" />
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
          <a href="/interior-design-cost-bangalore" className="underline">
            View Interior Pricing →
          </a>
        </div>
      </section>

    </div>
  );
};

export default JPNagar;