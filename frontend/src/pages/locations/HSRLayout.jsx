import React from "react";
import { Helmet } from "react-helmet";

const HSRLayout = () => {
  return (
    <div className="bg-white">

      <Helmet>
        <title>Interior Designers in HSR Layout | Denova Creations</title>
        <meta name="description" content="Affordable interior designers in HSR Layout for 2BHK & 3BHK flats. Modular kitchen, wardrobes & complete home interiors." />
      </Helmet>

      {/* HERO (Different Layout Style) */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl font-bold mb-4">
              Interior Designers in HSR Layout
            </h1>
            <p>
              Looking for affordable interior design in HSR Layout? We specialize in
              practical and stylish interiors for apartments and rental homes.
            </p>

            <button className="mt-6 bg-yellow-600 px-6 py-3 font-semibold">
              Get Free Estimate
            </button>
          </div>

          <img src="/images/hsr-hero.jpg" className="rounded-lg" />

        </div>
      </section>

      {/* QUICK BENEFITS */}
      <section className="max-w-6xl mx-auto py-10 px-6 grid md:grid-cols-3 gap-6 text-center">
        <div className="p-4 border">Budget-Friendly Packages</div>
        <div className="p-4 border">Fast Execution</div>
        <div className="p-4 border">Apartment Specialists</div>
      </section>

      {/* SERVICES (DIFFERENT STYLE - LIST + GRID) */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6">Services We Offer in HSR</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-3">
            <li>✔ Full Home Interiors</li>
            <li>✔ Modular Kitchen</li>
            <li>✔ Wardrobes</li>
            <li>✔ TV Units</li>
          </ul>

          <ul className="space-y-3">
            <li>✔ Space Optimization</li>
            <li>✔ Rental Home Interiors</li>
            <li>✔ Budget Design Solutions</li>
            <li>✔ Turnkey Execution</li>
          </ul>
        </div>
      </section>

      {/* COST (DIFFERENT STYLE - CARD) */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6 text-center">
            Interior Cost in HSR Layout
          </h2>

          <div className="bg-white p-6 shadow-md">
            <p>2BHK Interiors: ₹3L – ₹5.5L</p>
            <p>3BHK Interiors: ₹4.5L – ₹8L</p>
            <p>Kitchen Packages: ₹1L onwards</p>
          </div>

        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6">Recent Projects</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <img src="/images/hsr1.jpg" className="h-60 object-cover w-full" />
          <img src="/images/hsr2.jpg" className="h-60 object-cover w-full" />
          <img src="/images/hsr3.jpg" className="h-60 object-cover w-full" />
        </div>
      </section>

      {/* WHY DIFFERENT STYLE */}
      <section className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-2xl mb-6">Why Choose Denova?</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div>Transparent Pricing</div>
            <div>Apartment Experts</div>
            <div>Quick Delivery</div>
            <div>End-to-End Service</div>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-12 text-center">
        <h2 className="text-2xl mb-4">Get Free Consultation</h2>

        <button className="bg-yellow-600 px-6 py-3">
          Call Now: 9164011181
        </button>

        <div className="mt-4">
          <a href="/interior-designers/koramangala" className="underline">
            Explore Koramangala Interiors
          </a>
        </div>
      </section>

    </div>
  );
};

export default HSRLayout;