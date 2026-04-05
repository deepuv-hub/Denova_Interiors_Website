import React, { useState } from "react";

const AdsLanding = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phone.length !== 10) {
      alert("Enter valid number");
      return;
    }

    setLoading(true);
    setSubmitted(true);

    const msg = `Hi, I'm ${name}. I need interior design service in Bangalore. My number is ${phone}`;

    // Delay improves perceived trust
    setTimeout(() => {
      window.open(`https://wa.me/919164011181?text=${encodeURIComponent(msg)}`);
      window.location.href = "/thank-you";
    }, 1500);
  };

  return (
    <div className="bg-white text-gray-800">

      {/* 🔥 HERO */}
      <section className="py-16 px-4 text-center max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold leading-tight">
          Get Free 3D Interior Design in Bangalore
        </h1>

        <p className="mt-3 text-gray-600">
          Instant Cost Estimate + Consultation | Limited 5 Slots This Week
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">

          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 border rounded"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="p-3 border rounded"
          />

          <button className="bg-black text-white py-3 rounded text-lg">
            {loading ? "Submitting..." : "Get Free Design Plan"}
          </button>
        </form>

        {submitted && (
          <p className="text-green-600 mt-3">
            Our designer will contact you within 10 minutes...
          </p>
        )}

        <p className="text-sm text-gray-500 mt-4">
          ✔ Free 3D Design | ✔ 24hr Estimate | ✔ 150+ Homes Delivered
        </p>

      </section>

      {/* 🔥 TRUST SECTION */}
      <section className="py-10 bg-gray-100 text-center">
        <h2 className="text-xl font-semibold">Why Choose Denova Creations</h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">

          <div>
            <h3 className="text-2xl font-bold">150+</h3>
            <p>Homes Delivered</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">4.9★</h3>
            <p>Client Rating</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">5+</h3>
            <p>Years Experience</p>
          </div>

        </div>
      </section>

      {/* 🔥 PROJECT PROOF */}
      <section className="py-12 text-center">
        <h2 className="text-xl font-semibold mb-6">Recent Work</h2>

        <div className="grid md:grid-cols-3 gap-4 px-4">
          <img src="/images/project1.webp" loading="lazy" />
          <img src="/images/project2.webp" loading="lazy" />
          <img src="/images/project3.webp" loading="lazy" />
        </div>

        <p className="mt-4 text-sm text-gray-500">
          2BHK Interiors starting ₹3.5L | 3BHK from ₹5L
        </p>
      </section>

      {/* 🔥 OFFER */}
      <section className="py-12 bg-black text-white text-center">
        <h2 className="text-xl font-semibold mb-4">
          Free Interior Design Consultation
        </h2>

        <ul className="mb-6 space-y-2">
          <li>✔ Free 3D Design</li>
          <li>✔ Budget Plan in 24 Hours</li>
          <li>✔ Limited Slots Available</li>
        </ul>

        <button
          onClick={handleSubmit}
          className="bg-white text-black px-6 py-3 rounded"
        >
          Claim Free Consultation
        </button>
      </section>

      {/* 🔥 FINAL CTA */}
      <section className="py-16 text-center">
        <h2 className="text-2xl mb-4">
          Start Your Dream Home Today
        </h2>

        <button
          onClick={handleSubmit}
          className="bg-black text-white px-6 py-3 rounded"
        >
          Get Free Design Plan
        </button>
      </section>

      {/* 🔥 STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow p-3 flex justify-between items-center">
        <span className="text-sm">Free Consultation</span>

        <a
          href="https://wa.me/919164011181"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          WhatsApp Now
        </a>
      </div>

    </div>
  );
};

export default AdsLanding;