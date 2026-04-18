import React from "react";
import { Helmet } from "react-helmet";

const SarjapurRoad = () => {
  return (
    <div className="bg-white">

      <Helmet>
        <title>Interior Designers in Sarjapur Road | Denova Creations</title>
        <meta
          name="description"
          content="Interior designers in Sarjapur Road for 2BHK & 3BHK apartments. Get complete home interiors for new flats with transparent pricing."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative h-[500px] flex items-center">
        <img
          src="/images/sarjapur-hero.jpg"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-4xl font-bold mb-4">
            Interior Designers in Sarjapur Road
          </h1>

          <p className="max-w-xl">
            Move into your new home with beautifully designed interiors.
            We specialize in complete home interiors for 2BHK & 3BHK apartments.
          </p>

          <button className="mt-6 bg-yellow-600 px-6 py-3 font-semibold">
            Get Free Estimate
          </button>
        </div>
      </section>

      {/* FAMILY BENEFITS */}
      <section className="max-w-6xl mx-auto py-10 px-6 grid md:grid-cols-3 gap-6 text-center">
        <div className="p-4 border">Perfect for New Homes</div>
        <div className="p-4 border">Family-Friendly Designs</div>
        <div className="p-4 border">End-to-End Interiors</div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6">
          Complete Interior Solutions
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-3">
            <li>✔ Full Home Interiors</li>
            <li>✔ Modular Kitchen</li>
            <li>✔ Wardrobes & Storage</li>
            <li>✔ Living Room Design</li>
          </ul>

          <ul className="space-y-3">
            <li>✔ Bedroom Interiors</li>
            <li>✔ False Ceiling & Lighting</li>
            <li>✔ Space Planning</li>
            <li>✔ Turnkey Execution</li>
          </ul>
        </div>
      </section>

      {/* COST */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-2xl font-semibold mb-6">
            Interior Cost in Sarjapur Road
          </h2>

          <div className="bg-white p-6 shadow-md">
            <p>✔ 2BHK Interiors: ₹3.5L – ₹6.5L</p>
            <p>✔ 3BHK Interiors: ₹5.5L – ₹9L</p>
            <p>✔ Kitchen Packages: ₹1.2L onwards</p>
          </div>

        </div>
      </section>

      {/* PROJECT SHOWCASE */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6">
          Recent Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <img src="/images/s1.jpg" className="h-60 object-cover w-full" />
          <img src="/images/s2.jpg" className="h-60 object-cover w-full" />
          <img src="/images/s3.jpg" className="h-60 object-cover w-full" />
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-2xl mb-6">Why Choose Denova Creations?</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div>Complete Home Interiors</div>
            <div>Family-Oriented Design</div>
            <div>Quality Materials</div>
            <div>On-Time Delivery</div>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-12 text-center">
        <h2 className="text-2xl mb-4">
          Design Your Dream Home Today
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

export default SarjapurRoad;