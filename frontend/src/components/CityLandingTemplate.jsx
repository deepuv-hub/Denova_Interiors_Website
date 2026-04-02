import { SCRIPT_URL } from "../utils/api";
import React, { useState } from "react";
import { Helmet } from "react-helmet";

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

      {/* SEO META */}
      <Helmet>
        <title>Best Interior Designers in {location.name} Bangalore | Denova Creations</title>
        <meta
          name="description"
          content={`Looking for interior designers in ${location.name} Bangalore? Get modular kitchen, wardrobes, and full home interiors with transparent pricing.`}
        />
      </Helmet>

      {/* HERO */}
      <section className="py-20 text-center bg-gray-50">
        <h1 className="text-4xl font-bold">
          Best Interior Designers in {location.name} Bangalore
        </h1>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Looking for the best interior designers in {location.name} Bangalore? Denova Creations offers modern, functional, and premium home interior solutions tailored for apartments, villas, and gated communities.
        </p>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          We provide complete home interiors including modular kitchens, wardrobes, living room designs, and full home interiors customized to your lifestyle and budget.
        </p>
      </section>

      {/* TRUST */}
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
          <div className="border p-4">Modular Kitchen Design</div>
          <div className="border p-4">Wardrobes & Storage</div>
          <div className="border p-4">False Ceiling</div>
          <div className="border p-4">Living Room Interiors</div>
          <div className="border p-4">Bedroom Interiors</div>
        </div>
      </section>

      {/* COST */}
      <section className="py-12 max-w-4xl mx-auto text-center">
        <h2 className="text-xl font-semibold mb-4">
          Interior Design Cost in {location.name} Bangalore
        </h2>

        <p className="text-gray-600">
          Interior design cost in {location.name} depends on home size, materials, and customization level.
        </p>

        <ul className="mt-4 text-gray-700">
          <li>2BHK Interiors: ₹3.5L – ₹6L</li>
          <li>3BHK Interiors: ₹5L – ₹10L</li>
          <li>Modular Kitchen: Starts from ₹1.5L</li>
        </ul>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-12 max-w-4xl mx-auto text-center">
        <h2 className="text-xl font-semibold mb-4">
          Why Choose Denova Creations in {location.name}?
        </h2>

        <ul className="text-gray-600 space-y-2">
          <li>✔ 100+ Completed Projects</li>
          <li>✔ On-Time Delivery</li>
          <li>✔ Premium Quality Materials</li>
          <li>✔ Customized Design Solutions</li>
          <li>✔ Bangalore-Based Experts</li>
        </ul>
      </section>

      <div className="text-center py-4 text-sm text-gray-600">
        ⭐ 4.9 Rated | 150+ Projects Completed | Bangalore Experts
      </div>

      {/* PROCESS */}
      <section className="py-12 max-w-4xl mx-auto text-center">
        <h2 className="text-xl font-semibold mb-4">
          Our Interior Design Process
        </h2>

        <ol className="text-gray-600 space-y-2">
          <li>1. Free Consultation</li>
          <li>2. Space Planning</li>
          <li>3. 3D Design</li>
          <li>4. Material Selection</li>
          <li>5. Execution</li>
          <li>6. Final Handover</li>
        </ol>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-10 text-center">
        <h2 className="text-xl font-semibold mb-4">
          Areas We Serve Near {location.name}
        </h2>

        <ul className="flex flex-wrap justify-center gap-4 text-blue-600">
          <li><a href="/interior-designers/sarjapur-road">Sarjapur Road</a></li>
          <li><a href="/interior-designers/hsr-layout">HSR Layout</a></li>
          <li><a href="/interior-designers/indiranagar">Indiranagar</a></li>
          <li><a href="/interior-designers/marathahalli">Marathahalli</a></li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="py-12 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Frequently Asked Questions
        </h2>

        <p><strong>What is the cost of interior design in {location.name}?</strong></p>
        <p>Interior cost starts from ₹3.5 lakhs and varies based on customization.</p>

        <p className="mt-4"><strong>Do you provide full home interiors?</strong></p>
        <p>Yes, we provide complete home interior solutions.</p>
      </section>

      {/* CTA */}
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
            Limited slots available this month. Book now.
          </p>
        </form>

        {success && (
          <p className="text-green-600 mt-4">
            Redirecting to WhatsApp...
          </p>
        )}
      </section>

    </div>
  );
};

export default CityLandingTemplate;