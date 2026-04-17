import React from "react";
import { Helmet } from "react-helmet";

const Koramangala = () => {
  return (
    <div className="bg-white">

      <Helmet>
        <title>Interior Designers in Koramangala | Denova Creations</title>
        <meta name="description" content="Premium interior designers in Koramangala for 2BHK & 3BHK homes. Get modern interiors with transparent pricing." />
      </Helmet>

      {/* HERO */}
      <section className="relative h-[500px] flex items-center">
        <img src="/images/koramangala.jpg" className="absolute w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-4xl font-bold mb-4">
            Interior Designers in Koramangala
          </h1>
          <p className="max-w-xl">
            Transform your home with modern, functional interiors designed for 2BHK & 3BHK apartments.
          </p>

          <button className="mt-6 bg-yellow-600 px-6 py-3 font-semibold">
            Get Free Estimate
          </button>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-gray-100 py-6">
        <div className="max-w-6xl mx-auto flex justify-between text-center">
          <div>⭐ 4.9 Rating</div>
          <div>150+ Projects</div>
          <div>5+ Years Experience</div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["Full Home Interiors", "Modular Kitchen", "Wardrobes"].map((item, i) => (
            <div key={i} className="border p-6 hover:shadow-md">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT SHOWCASE */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6">Our Projects</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <img src="/images/p1.jpg" className="h-60 object-cover w-full" />
          <img src="/images/p2.jpg" className="h-60 object-cover w-full" />
          <img src="/images/p3.jpg" className="h-60 object-cover w-full" />
        </div>
      </section>

      {/* COST */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Interior Cost</h2>
          <p>2BHK: ₹3.5L – ₹6L</p>
          <p>3BHK: ₹5L – ₹10L</p>
        </div>
      </section>

      {/* WHY US */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6">Why Choose Us</h2>

        <div className="grid md:grid-cols-4 gap-4">
          <div>Transparent Pricing</div>
          <div>Custom Designs</div>
          <div>End-to-End</div>
          <div>On-Time Delivery</div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-12 text-center">
        <h2 className="text-2xl mb-4">Get Free Interior Consultation</h2>
        <button className="bg-yellow-600 px-6 py-3">
          Call Now: 9164011181
        </button>
      </section>

    </div>
  );
};

export default Koramangala;