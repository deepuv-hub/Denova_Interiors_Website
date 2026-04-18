import React from "react";
import { Helmet } from "react-helmet";

const Indiranagar = () => {
  return (
    <div className="bg-white">

      <Helmet>
        <title>Interior Designers in Indiranagar | Denova Creations</title>
        <meta name="description" content="Modern interior designers in Indiranagar for stylish apartments and urban homes." />
      </Helmet>

      <section className="bg-black text-white py-20 text-center">
        <h1 className="text-4xl font-semibold">Interior Designers in Indiranagar</h1>
        <p className="mt-4">Stylish interiors crafted for modern urban living.</p>
      </section>

      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-2xl mb-4">Urban Interior Solutions</h2>
        <p>Perfect for apartments, studios, and modern homes in Indiranagar.</p>
      </section>

      <section className="bg-gray-100 py-12 text-center">
        <p>2BHK: ₹4L – ₹7L | 3BHK: ₹6L – ₹11L</p>
      </section>

      <section className="text-center py-12">
        <button className="bg-yellow-600 px-6 py-3">Call Now: 9164011181</button>
      </section>

    </div>
  );
};

export default Indiranagar;