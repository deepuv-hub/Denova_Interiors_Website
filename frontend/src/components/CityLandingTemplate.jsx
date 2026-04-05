import { SCRIPT_URL } from "../utils/api";
import React, { useState } from "react";
import { Helmet } from "react-helmet";

/**
 * EXPECTED LOCATION OBJECT STRUCTURE:
 * {
 *   name: "Whitefield",
 *   landmarks: "Prestige Shantiniketan, ITPL",
 *   audience: "IT Professionals & Families",
 *   projects: "25+",
 *   rating: "4.9"
 * }
 */

const CityLandingTemplate = ({ location }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (phone.length !== 10) {
      alert("Enter valid phone number");
      return;
    }

    setLoading(true);

    // 🔹 Track conversion
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-11303451952/zBhUCM29o5QcELD6840q",
      });

      window.gtag("event", "form_submit", {
        event_category: "lead",
        event_label: location.name,
      });
    }

    // 🔹 Save lead (Google Sheet / backend)
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
    } catch (err) {
      console.log("Lead save failed");
    }

    // 🔹 WhatsApp message AFTER submit
    const msg = `Hi, I'm ${name}.
My number is ${phone}.
I need interior design service in ${location.name}.
Please share details.`;

    window.open(
      `https://wa.me/919164011181?text=${encodeURIComponent(msg)}`,
      "_blank"
    );

    // 🔹 Redirect to funnel step
    window.location.href = "/thank-you";
  };

  return (
    <div className="bg-white text-gray-800">

      {/* ================= SEO + SCHEMA ================= */}
      <Helmet>
        <title>
          Interior Designers in {location.name} Bangalore | Free Consultation
        </title>

        <meta
          name="description"
          content={`Interior designers in ${location.name}, Bangalore. Get free 3D design & instant cost estimate.`}
        />

        {/* LOCAL BUSINESS */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Denova Creations",
            telephone: "+91-9591039597",
            areaServed: location.name,
            address: {
              "@type": "PostalAddress",
              addressLocality: location.name,
              addressRegion: "Karnataka",
              addressCountry: "India",
            },
          })}
        </script>

        {/* FAQ */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: `What is interior design cost in ${location.name}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cost starts from ₹3.5 Lakhs depending on requirements.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl font-bold leading-tight">
              Interior Designers in {location.name} – Transform Your Home in 30 Days
            </h1>

            <p className="mt-4 text-gray-600">
              Free 3D Design + Instant Cost Estimate in {location.name}
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Serving {location.landmarks} | Trusted by {location.audience}
            </p>

            <div className="mt-6 flex gap-4">
              <button
                onClick={handleSubmit}
                className="bg-black text-white px-6 py-3 rounded"
              >
                Get Free Consultation
              </button>

              <a
                href="https://wa.me/919164011181"
                className="bg-green-500 text-white px-6 py-3 rounded"
              >
                WhatsApp Now
              </a>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl p-6 rounded flex flex-col gap-4"
          >
            <h2 className="text-lg font-semibold">
              Free Consultation (Limited Slots)
            </h2>

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
              className="bg-black text-white py-3 rounded"
            >
              {loading ? "Submitting..." : "Get Free Design Plan"}
            </button>
          </form>
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="grid grid-cols-3 text-center py-8 bg-white">
        <div>
          <h3 className="text-xl font-bold">{location.projects}</h3>
          <p>Homes Delivered</p>
        </div>

        <div>
          <h3 className="text-xl font-bold">{location.rating}★</h3>
          <p>Client Rating</p>
        </div>

        <div>
          <h3 className="text-xl font-bold">5+</h3>
          <p>Years Experience</p>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="py-16 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-8">
          Recent Projects in {location.name}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <img src="/images/project1.webp" loading="lazy" />
          <img src="/images/project2.webp" loading="lazy" />
          <img src="/images/project3.webp" loading="lazy" />
        </div>
      </section>

      {/* ================= OFFER ================= */}
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

      {/* ================= TESTIMONIAL ================= */}
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-xl font-semibold mb-4">
          What Our Clients Say
        </h2>

        <p>
          “Denova transformed my home in {location.name}. Highly recommended!”
        </p>
      </section>

      {/* ================= SEO CONTENT ================= */}
      <section className="py-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Interior Designers in {location.name}
        </h2>

        <p className="text-gray-600">
          Looking for interior designers in {location.name}, Bangalore? Denova Creations provides modular kitchens,
          wardrobes, and complete home interiors tailored to your lifestyle.
        </p>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 text-center bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">
          Book Free Consultation Today
        </h2>

        <button
          onClick={handleSubmit}
          className="bg-black text-white px-6 py-3 rounded"
        >
          Get Free Consultation
        </button>
      </section>

      {/* ================= STICKY CTA ================= */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow p-3 flex justify-between items-center">
        <span>Free Consultation</span>

        <a
          href="https://wa.me/919164011181"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default CityLandingTemplate;