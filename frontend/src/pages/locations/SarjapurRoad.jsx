import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const SarjapurRoad = () => {
  return (
    <div className="bg-white">

      <Helmet>
        <title>
          Interior Designers in Sarjapur Road Bangalore | Denova Creations
        </title>
        <meta
          name="description"
          content="Premium interior designers in Sarjapur Road Bangalore for 2BHK and 3BHK apartments. Modular kitchens, wardrobes and complete home interiors by Denova Creations."
        />
        <link
          rel="canonical"
          href="https://denovacreations.com/interior-designers/sarjapur-road"
        />
        <meta
          property="og:title"
          content="Interior Designers in Sarjapur Road Bangalore | Denova Creations"
        />
        <meta
          property="og:description"
          content="Premium home interior designers in Sarjapur Road Bangalore for apartments and family homes."
        />
        <meta
          property="og:image"
          content="https://denovacreations.com/images/sarjapur-hero.jpg"
        />
        <meta
          property="og:url"
          content="https://denovacreations.com/interior-designers/sarjapur-road"
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
          src="/images/sarjapur-hero.jpg"
          alt="Luxury apartment interior design in Sarjapur Road Bangalore"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Interior Designers in Sarjapur Road Bangalore
          </h1>

          <p className="max-w-xl">
            Move into your new home with beautifully designed interiors.
            We specialize in complete home interiors for 2BHK & 3BHK apartments.
          </p>

          <p className="max-w-2xl mt-4 text-white/80 leading-relaxed">
            Denova Creations provides premium interior design services in Sarjapur Road Bangalore for new apartments and family homes. We specialize in modular kitchens, wardrobes and turnkey home interiors designed for modern urban lifestyles and practical living.
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
          <img
            src="/images/s1.jpg"
            alt="Modern apartment interior project in Sarjapur Road Bangalore"
            className="h-60 object-cover w-full"
          />
          <img
            src="/images/s2.jpg"
            alt="Modular kitchen interior project in Sarjapur Road Bangalore"
            className="h-60 object-cover w-full"
          />
          <img
            src="/images/s3.jpg"
            alt="Premium bedroom interior project in Sarjapur Road Bangalore"
            className="h-60 object-cover w-full"
          />
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
          <Link
            to="/estimate"
            className="underline"
          >
            Check Interior Cost →
          </Link>
        </div>
      </section>

    </div>
  );
};

export default SarjapurRoad;
