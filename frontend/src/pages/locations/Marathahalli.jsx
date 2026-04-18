import React from "react";
import { Helmet } from "react-helmet";

const Marathahalli = () => {
  return (
    <div className="bg-white">

      <Helmet>
        <title>Interior Designers in Marathahalli | Budget Home Interiors</title>
        <meta
          name="description"
          content="Affordable interior designers in Marathahalli for rental flats and apartments. Get budget-friendly 2BHK interiors with fast execution."
        />
      </Helmet>

      {/* HERO - PRACTICAL STYLE */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl font-bold mb-4">
              Interior Designers in Marathahalli
            </h1>

            <p>
              Looking for affordable interiors for your flat in Marathahalli?
              We specialize in budget-friendly designs perfect for rental homes
              and working professionals.
            </p>

            <button className="mt-6 bg-yellow-600 px-6 py-3 font-semibold">
              Get Free Estimate
            </button>
          </div>

          <img
            src="/images/marathahalli-hero.jpg"
            className="rounded-lg object-cover"
          />

        </div>
      </section>

      {/* QUICK BENEFITS */}
      <section className="max-w-6xl mx-auto py-10 px-6 grid md:grid-cols-3 gap-6 text-center">
        <div className="p-4 border">Budget-Friendly Packages</div>
        <div className="p-4 border">Quick Installation</div>
        <div className="p-4 border">Rental-Friendly Designs</div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6">
          Services We Offer in Marathahalli
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-3">
            <li>✔ 2BHK & 3BHK Interiors</li>
            <li>✔ Modular Kitchen</li>
            <li>✔ Wardrobes</li>
            <li>✔ TV Units</li>
          </ul>

          <ul className="space-y-3">
            <li>✔ Space Optimization</li>
            <li>✔ Budget Furniture</li>
            <li>✔ Rental Home Setup</li>
            <li>✔ Quick Turnkey Execution</li>
          </ul>
        </div>
      </section>

      {/* COST - STRONG POSITIONING */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-2xl font-semibold mb-6">
            Interior Cost in Marathahalli
          </h2>

          <div className="bg-white p-6 shadow-md">
            <p>✔ 2BHK Interiors: ₹2.8L – ₹5L</p>
            <p>✔ 3BHK Interiors: ₹4L – ₹7L</p>
            <p>✔ Kitchen Packages: ₹90K onwards</p>
          </div>

        </div>
      </section>

      {/* PROJECT SHOWCASE */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6">
          Recent Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <img src="/images/m1.jpg" className="h-60 object-cover w-full" />
          <img src="/images/m2.jpg" className="h-60 object-cover w-full" />
          <img src="/images/m3.jpg" className="h-60 object-cover w-full" />
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-2xl mb-6">Why Choose Denova?</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div>Affordable Pricing</div>
            <div>Fast Delivery</div>
            <div>Space Optimization</div>
            <div>End-to-End Service</div>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-12 text-center">
        <h2 className="text-2xl mb-4">
          Get Affordable Interiors for Your Home
        </h2>

        <button className="bg-yellow-600 px-6 py-3">
          Call Now: 9164011181
        </button>

        <div className="mt-4">
          <a href="/interior-design-cost-bangalore" className="underline">
            Check Interior Cost →
          </a>
        </div>
      </section>

    </div>
  );
};

export default Marathahalli;