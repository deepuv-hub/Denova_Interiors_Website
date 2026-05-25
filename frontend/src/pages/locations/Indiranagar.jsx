import React from "react";
import { Helmet } from "react-helmet-async";

const Indiranagar = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>
          Interior Designers in Indiranagar | Denova Creations
        </title>
        <meta
          name="description"
          content="Premium interior designers in Indiranagar Bangalore for apartments, modern homes and luxury interiors. Modular kitchens, wardrobes and turnkey interiors by Denova Creations."
        />
        <link
          rel="canonical"
          href="https://denovacreations.com/interior-designers/indiranagar"
        />
        <meta
          property="og:title"
          content="Interior Designers in Indiranagar | Denova Creations"
        />
        <meta
          property="og:description"
          content="Modern and luxury interior designers in Indiranagar Bangalore for apartments and premium homes."
        />
        <meta
          property="og:image"
          content="https://denovacreations.com/images/hero2.webp"
        />
        <meta
          property="og:url"
          content="https://denovacreations.com/interior-designers/indiranagar"
        />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
      </Helmet>

      <section className="bg-black text-white py-20 text-center">
        <h1
          className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Interior Designers in Indiranagar Bangalore
        </h1>
        <p className="mt-4">Stylish interiors crafted for modern urban living.</p>
      </section>

      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-2xl mb-4">Urban Interior Solutions</h2>
        <p className="text-gray-600 leading-relaxed">
          Denova Creations provides premium interior design services in Indiranagar Bangalore for apartments, studios and modern urban homes. From modular kitchens and wardrobes to complete turnkey interiors, we create elegant living spaces that balance functionality, comfort and aesthetics for modern lifestyles.
        </p>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
          <div>Modern Urban Designs</div>
          <div>Premium Materials</div>
          <div>Turnkey Execution</div>
        </div>
      </section>

      <section className="bg-gray-100 py-12 text-center">
        <p>2BHK: Rs. 4L - Rs. 7L | 3BHK: Rs. 6L - Rs. 11L</p>
      </section>

      <section className="max-w-5xl mx-auto py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-6">
          Explore More Interior Solutions
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/services"
            className="underline text-yellow-700"
          >
            Interior Design Services
          </a>

          <a
            href="/projects"
            className="underline text-yellow-700"
          >
            View Projects
          </a>

          <a
            href="/estimate"
            className="underline text-yellow-700"
          >
            Interior Cost Estimate
          </a>

          <a
            href="/contact"
            className="underline text-yellow-700"
          >
            Contact Denova Creations
          </a>
        </div>
      </section>

      <section className="text-center py-12">
        <button className="bg-yellow-600 px-6 py-3">Call Now: 9164011181</button>
      </section>
    </div>
  );
};

export default Indiranagar;



