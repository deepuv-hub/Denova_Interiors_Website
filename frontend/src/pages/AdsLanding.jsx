import React, { useState } from "react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzNJ8sIocwARx549U8iAn-RYxwiNj0kMPxDQ6io8Wmby_Kc2VMBHyV9A5hLuRJa_gZB/exec";

const AdsLanding = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    property: "",
    budget: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isValidPhone = (num) => num.replace(/\D/g, "").length === 10;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanedPhone = form.phone.replace(/\D/g, "");

    if (!isValidPhone(cleanedPhone)) {
      alert("Enter valid 10-digit phone number");
      return;
    }

    setLoading(true);
    setSubmitted(true);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          ...form,
          phone: cleanedPhone,
          location: "Bangalore",
          source: "Google Ads Landing",
        }),
      });
    } catch (err) {}

    const msg = `Hi, I'm ${form.name}. I need interior design for ${form.property}. My number is ${cleanedPhone}`;

    setTimeout(() => {
      window.open(`https://wa.me/919591039597?text=${encodeURIComponent(msg)}`);
      window.location.href = "/thank-you?source=ads";
    }, 800);
  };

  const scrollToForm = () => {
    document.getElementById("leadForm").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white text-gray-800">

      {/* HERO */}
      <section className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Transform Your Home in Bangalore
            <span className="text-[#C8A96A] block">
              Without Overspending
            </span>
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Free 3D Design + Transparent Pricing + Expert Consultation
          </p>

          <div className="mt-6 space-y-2 text-sm">
            <p>✅ 150+ Homes Delivered</p>
            <p>✅ 5+ Years Experience</p>
            <p>✅ Bangalore-Based Team</p>
          </div>

          <button
            onClick={scrollToForm}
            className="mt-6 bg-[#C8A96A] px-6 py-3 rounded-lg font-semibold"
          >
            Book Free Consultation
          </button>
        </div>

        {/* FORM */}
        <form
          id="leadForm"
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl p-6 rounded-xl flex flex-col gap-4 border"
        >
          <h3 className="text-xl font-semibold text-center">
            Get Free Design Consultation
          </h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
            className="p-3 border rounded-lg"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={form.phone}
            onChange={handleChange}
            className="p-3 border rounded-lg"
          />

          <select
            name="property"
            required
            value={form.property}
            onChange={handleChange}
            className="p-3 border rounded-lg"
          >
            <option value="">Property Type</option>
            <option>2 BHK</option>
            <option>3 BHK</option>
            <option>Villa</option>
          </select>

          <select
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className="p-3 border rounded-lg"
          >
            <option value="">Budget (Optional)</option>
            <option>3L - 5L</option>
            <option>5L - 10L</option>
            <option>10L+</option>
          </select>

          <button className="bg-[#C8A96A] py-3 rounded-lg font-semibold text-lg">
            {loading ? "Submitting..." : "Get Free Quote"}
          </button>

          <p className="text-xs text-center text-gray-500">
            Limited slots available this month
          </p>
        </form>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-10 bg-gray-50 text-center">
        <h2 className="text-xl font-semibold mb-2">
          Trusted by Bangalore Homeowners
        </h2>

        <p className="text-sm text-gray-600 mb-6">
          ⭐ Rated 4.9/5 by our clients on Google
        </p>

        <div className="grid md:grid-cols-3 gap-6 px-4 max-w-5xl mx-auto">

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-[#C8A96A] text-lg">★★★★★</p>
            <p className="text-sm mt-2">
              “Exceeded all expectations. The design quality and execution were outstanding.”
            </p>
            <p className="text-xs mt-3 text-gray-500">
              — Vinod, Bangalore
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-[#C8A96A] text-lg">★★★★★</p>
            <p className="text-sm mt-2">
              “Professional and transparent team. Premium materials and great finish.”
            </p>
            <p className="text-xs mt-3 text-gray-500">
              — Harish, Bangalore
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-[#C8A96A] text-lg">★★★★★</p>
            <p className="text-sm mt-2">
              “Smooth renovation process and exactly the results I expected.”
            </p>
            <p className="text-xs mt-3 text-gray-500">
              — Srinath, Bangalore
            </p>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 text-center">
        <h2 className="text-2xl mb-4">
          Ready to Design Your Dream Home?
        </h2>

        <button
          onClick={scrollToForm}
          className="bg-[#C8A96A] px-6 py-3 rounded-lg font-semibold"
        >
          Book Free Consultation
        </button>
      </section>

    </div>
  );
};

export default AdsLanding;