import React, { useState } from "react";

const CityLandingTemplate = ({ location }) => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:5000/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          location: location.name,
        }),
      });

      if (res.ok) {
        setSuccess(true);
        setName("");
        setPhone("");

        // 🔥 WhatsApp redirect (HIGH CONVERSION)
        const message = `Hi Denova Creations, I'm interested in interior design services in ${location.name}. My name is ${name}.`;
        window.open(`https://wa.me/919591039597?text=${encodeURIComponent(message)}`, "_blank");

      } else {
        alert("Something went wrong. Please try again.");
      }

    } catch (error) {
      alert("Server error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-white text-gray-800">

      {/* HERO */}
      <section className="py-20 px-6 text-center bg-gray-50">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Interior Designers in {location.name}
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          {location.description}
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="tel:9591039597"
            className="px-6 py-3 bg-black text-white rounded-lg"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/919591039597"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-black rounded-lg"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Our Interior Services in {location.name}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg">Full Home Interiors</div>
          <div className="p-6 border rounded-lg">Modular Kitchen</div>
          <div className="p-6 border rounded-lg">Wardrobes</div>
          <div className="p-6 border rounded-lg">False Ceiling</div>
          <div className="p-6 border rounded-lg">Living Room Design</div>
          <div className="p-6 border rounded-lg">Bedroom Interiors</div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">
            Why Choose Denova Creations in {location.name}?
          </h2>

          <p className="text-gray-600">
            We specialize in delivering modern, functional, and customized interior
            design solutions tailored for homes in {location.name}.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-6">
          Get Free Consultation in {location.name}
        </h2>

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
        </form>

        {/* SUCCESS MESSAGE */}
        {success && (
          <p className="text-green-600 mt-4">
            Thank you! Redirecting to WhatsApp...
          </p>
        )}
      </section>

    </div>
  );
};

export default CityLandingTemplate;