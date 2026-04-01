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
          {location.content || `Denova Creations offers modern and functional interior design services in ${location.name}.`}
        </p>

        {/* EXTRA INTRO */}
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          At Denova Creations, we provide complete home interior solutions including modular kitchens, wardrobes, living room designs, and full home interiors tailored to your lifestyle and budget.
        </p>
      </section>

      {/* TRUST BAR */}
      <div className="text-center py-4 text-sm text-gray-600">
        ✔ 100+ Projects | ✔ On-Time Delivery | ✔ Transparent Pricing
      </div>

      {/* SERVICES */}
      <section className="py-16 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">
          Interior Design Services in {location.name}
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

      {/* COST SECTION */}
      <section className="py-12 max-w-4xl mx-auto text-center">
        <h2 className="text-xl font-semibold mb-4">
          Interior Design Cost in {location.name}
        </h2>

        <p className="text-gray-600">
          The cost of interior design in {location.name} depends on home size, materials, and customization. For a 2BHK home, interior costs typically start from ₹3.5 lakhs and vary based on design preferences.
        </p>
      </section>

      {/* LOCAL SEO BOOST */}
      <section className="py-12 max-w-4xl mx-auto text-center">
        <h2 className="text-xl font-semibold mb-4">
          Why Choose Denova Creations in {location.name}?
        </h2>

        <p className="text-gray-600">
          We design interiors tailored for homes in {location.name}, including apartments, villas, and gated communities. Our focus is on space optimization, aesthetics, and functionality.
        </p>
      </section>

      <div className="text-center py-4 text-sm text-gray-600">
        ⭐ 4.9 Rated | 150+ Projects Completed | Bangalore Experts
      </div>

      {/* FAQ SECTION */}
      <section className="py-12 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Frequently Asked Questions
        </h2>

        <p><strong>What is the cost of interior design in {location.name}?</strong></p>
        <p>Interior cost starts from ₹3.5 lakhs for a 2BHK and varies based on customization.</p>

        <p className="mt-4"><strong>Do you provide full home interiors?</strong></p>
        <p>Yes, we provide complete home interior solutions including modular kitchen, wardrobes, and furniture.</p>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-10 text-center">
        <h2 className="text-xl font-semibold mb-4">
          Other Areas We Serve
        </h2>

        <ul className="flex flex-wrap justify-center gap-4 text-blue-600">
          <li><a href="/interior-designers/whitefield">Whitefield</a></li>
          <li><a href="/interior-designers/sarjapur-road">Sarjapur Road</a></li>
          <li><a href="/interior-designers/hsr-layout">HSR Layout</a></li>
          <li><a href="/interior-designers/indiranagar">Indiranagar</a></li>
        </ul>
      </section>

      {/* FORM / CTA */}
      <section className="py-20 text-center bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">
          Get Free Interior Consultation in {location.name}
        </h2>

        <p className="text-gray-600 mb-6">
          Call or WhatsApp us now to get personalized interior design solutions.
        </p>

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
            {loading ? "Submitting..." : "Get Free Consultation"}
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