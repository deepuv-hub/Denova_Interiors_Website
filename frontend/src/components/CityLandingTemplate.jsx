import { SCRIPT_URL } from "../utils/api";
import React, { useState } from "react";

const CityLandingTemplate = ({ location }) => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (phone.length !== 10) {
    alert("Enter valid phone number");
    return;
  }

  setLoading(true);

  // ✅ Open WhatsApp FIRST (avoid popup block)
  const msg = `Hi, I'm ${name}.
My number is ${phone}.
I need interior design service in ${location.name}.
Please share details.`;
  window.open(
    `https://wa.me/919591039597?text=${encodeURIComponent(msg)}`,
    "_blank"
  );

  try {
    await fetch(SCRIPT_URL, {
  method: "POST",
  mode: "no-cors",
  body: JSON.stringify({
    name,
    phone,
    location: location.name,
    source: "Landing Page",
  }),
});

    setSuccess(true);
    setName("");
    setPhone("");

  } catch (err) {
    console.log("Error saving lead");
  }

  setLoading(false);
};

  return (
    <div className="bg-white text-gray-800">

      {/* HERO */}
      <section className="py-20 text-center bg-gray-50">
        <h1 className="text-4xl font-bold">
          Best Interior Designers in {location.name} Bangalore
        </h1>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Transform your home in {location.name} with modern, functional interiors by Denova Creations.
        </p>
      </section>

      {/* TRUST BAR */}
      <div className="text-center py-4 text-sm text-gray-600">
        ✔ 100+ Projects | ✔ On-Time Delivery | ✔ Transparent Pricing
      </div>

      {/* SERVICES */}
      <section className="py-16 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">
          Our Services
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="border p-4">Full Home Interiors</div>
          <div className="border p-4">Modular Kitchen</div>
          <div className="border p-4">Wardrobes</div>
          <div className="border p-4">False Ceiling</div>
          <div className="border p-4">Living Room</div>
          <div className="border p-4">Bedroom Design</div>
        </div>
      </section>

      <div className="text-center py-4 text-sm text-gray-600">
  ⭐ 4.9 Rated | 150+ Projects Completed | Bangalore Experts
</div>

      {/* FORM */}
      <section className="py-20 text-center bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">
          Get Free Consultation
        </h2>
        <h2>Other Areas We Serve</h2>
<ul>
  <li><a href="/interior-designers/sarjapur-road">Sarjapur</a></li>
  <li><a href="/interior-designers/hsr-layout">HSR Layout</a></li>
  <li><a href="/interior-designers/marathahalli">Marathahalli</a></li>
</ul>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-3 border rounded"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="p-3 border rounded"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white py-3 rounded"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
          <p className="text-sm text-gray-500">
  Limited slots available this month. Book your free consultation now.
</p>
        </form>

        {success && (
          <p className="text-green-600 mt-4">
            Lead submitted! Redirecting to WhatsApp...
          </p>
        )}
      </section>

    </div>
  );
};

export default CityLandingTemplate;