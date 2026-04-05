import React, { useState } from "react";

const AdsLanding = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // ✅ Clean validation
  const isValidPhone = (num) => {
    return /^[6-9]\d{9}$/.test(num);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidPhone(phone)) {
      alert("Enter valid phone number");
      return;
    }

    setLoading(true);
    setSubmitted(true);

    const msg = `Hi, I'm ${name}. I need interior design service in Bangalore. My number is ${phone}`;

    setTimeout(() => {
      window.open(`https://wa.me/919591039597?text=${encodeURIComponent(msg)}`);
      window.location.href = "/thank-you";
    }, 1200);
  };

  // ✅ CTA scroll instead of submit
  const scrollToForm = () => {
    document.getElementById("leadForm").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white text-gray-800">

      {/* HERO */}
      <section className="py-20 px-4 text-center max-w-4xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Transform Your Home with{" "}
          <span className="text-[#C8A96A]">Premium Interior Design</span>
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Get Free 3D Design + Instant Cost Estimate in Bangalore
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Limited 5 Slots Available This Week
        </p>

        {/* FORM */}
        <form
          id="leadForm"
          onSubmit={handleSubmit}
          className="mt-8 bg-white shadow-2xl p-6 rounded-xl flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 border rounded-lg"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="p-3 border rounded-lg"
          />

          <button className="bg-[#C8A96A] text-black py-3 rounded-lg text-lg font-semibold shadow-lg hover:scale-105 transition">
            {loading ? "Submitting..." : "Get Free Design Plan"}
          </button>
        </form>

        {submitted && (
          <p className="text-green-600 mt-3">
            Our designer will contact you within 10 minutes...
          </p>
        )}

      </section>

      {/* TRUST */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-2xl font-semibold mb-10">
          Trusted by Homeowners Across Bangalore
        </h2>

        <div className="grid md:grid-cols-3 gap-8 px-4">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-3xl font-bold text-[#C8A96A]">150+</h3>
            <p>Homes Delivered</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-3xl font-bold text-[#C8A96A]">4.9★</h3>
            <p>Client Rating</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-3xl font-bold text-[#C8A96A]">5+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-16 text-center max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8">
          Recent Interior Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6 px-4">
          <img src="/images/project1.webp" className="rounded-xl" />
          <img src="/images/project2.webp" className="rounded-xl" />
          <img src="/images/project3.webp" className="rounded-xl" />
        </div>
      </section>

      {/* PREMIUM OFFER */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a1a] to-[#2b2b2b] text-white text-center">

        <h2 className="text-3xl font-semibold mb-4">
          Free Interior Design Consultation
        </h2>

        <p className="text-gray-300 mb-8">
          Limited Slots Available This Week — Book Now
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10 px-4">

          <div className="bg-white/5 p-5 rounded-xl">
            Free <span className="text-[#C8A96A] font-semibold">3D Design</span>
          </div>

          <div className="bg-white/5 p-5 rounded-xl">
            Budget Plan in 24 Hours
          </div>

          <div className="bg-white/5 p-5 rounded-xl">
            Limited Slots Available
          </div>

        </div>

        {/* FIXED CTA */}
        <button
          onClick={scrollToForm}
          className="bg-[#C8A96A] text-black px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:scale-105 transition"
        >
          Claim Free Consultation
        </button>

      </section>

      {/* FINAL CTA */}
      <section className="py-16 text-center bg-gray-100">

        <h2 className="text-2xl mb-4">
          Start Your Dream Home Today
        </h2>

        <button
          onClick={scrollToForm}
          className="bg-[#C8A96A] text-black px-6 py-3 rounded-lg font-semibold shadow-lg"
        >
          Get Free Design Plan
        </button>

      </section>

      {/* STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-3 flex justify-between items-center">
        <span className="text-sm font-medium">
          Free Consultation Available
        </span>

        <a
          href="https://wa.me/919591039597"
          className="bg-green-500 text-white px-5 py-2 rounded-lg font-semibold"
        >
          WhatsApp Now
        </a>
      </div>

    </div>
  );
};

export default AdsLanding;