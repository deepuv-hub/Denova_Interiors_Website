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

    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-11303451952/zBhUCM29o5QcELD6840q",
      });
    }

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

      {/* SEO META + SCHEMA */}
      <Helmet>
        <title>Interior Designers in {location.name} Bangalore | Denova Creations</title>

        <meta
          name="description"
          content={`Interior designers in ${location.name} Bangalore for modular kitchen, wardrobes & full home interiors.`}
        />

        {/* LOCAL BUSINESS SCHEMA */}
        <script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Denova Creations",
  "telephone": "+91-9591039597",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": location.name,
    "addressRegion": "Karnataka",
    "addressCountry": "India"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "120"
  }
})}
</script>

        {/* FAQ SCHEMA */}
        <script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": `What is the cost of interior design in ${location.name}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Interior design cost starts from ₹3.5 lakhs depending on requirements."
      }
    }
  ]
})}
</script>

      </Helmet>

      {/* HERO (CONVERSION ONLY) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl font-bold">
              Interior Designers in {location.name} Bangalore
            </h1>

            <p className="mt-4 text-gray-600">
              Premium home interiors with modular kitchens, wardrobes and full home design solutions.
            </p>

            <ul className="mt-6 space-y-2">
              <li>✔ 150+ Homes Delivered</li>
              <li>✔ Transparent Pricing</li>
              <li>✔ 4.9 Rated Designers</li>
            </ul>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="bg-white shadow-xl p-6 rounded flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Get Free Consultation</h2>

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

            <button type="submit" className="bg-black text-white py-3 rounded">
              {loading ? "Submitting..." : "Book Free Consultation"}
            </button>
          </form>

        </div>
      </section>

      {/* TRUST */}
      <div className="text-center py-4 text-sm text-gray-600">
        ✔ 150+ Projects | ✔ On-Time Delivery | ✔ Bangalore Experts
      </div>

      {/* DESIGN GALLERY */}
      <section className="py-16 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-8">Interior Design Ideas</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <img src="/images/kitchen.jpg" className="rounded" />
          <img src="/images/living.jpg" className="rounded" />
          <img src="/images/bedroom.jpg" className="rounded" />
        </div>
      </section>

      {/* MID CTA */}
      <section className="py-12 bg-black text-white text-center">
        <h2 className="text-xl font-semibold mb-4">
          Get Instant Interior Quote
        </h2>

        <a href="tel:9591039597" className="bg-white text-black px-6 py-3 rounded mr-4">
          Call Now
        </a>

        <a href="https://wa.me/919591039597" className="bg-green-500 px-6 py-3 rounded">
          WhatsApp Now
        </a>
      </section>

      {/* PORTFOLIO */}
      <section className="py-16 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-8">
          Our Recent Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <img src="/images/project1.jpg" />
          <img src="/images/project2.jpg" />
          <img src="/images/project3.jpg" />
        </div>
      </section>

      {/* SEO SECTION (SAFE BELOW FOLD) */}
      <section className="py-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Interior Designers in {location.name}
        </h2>

        <p className="text-gray-600">
          Looking for interior designers in {location.name} Bangalore? Denova Creations provides
          complete home interiors including modular kitchens, wardrobes, and full home design solutions.
        </p>

        <h3 className="mt-6 font-semibold">
          Interior Design Cost in {location.name}
        </h3>

        <ul className="mt-2 text-gray-600">
          <li>2BHK: ₹3.5L – ₹6L</li>
          <li>3BHK: ₹5L – ₹10L</li>
        </ul>
      </section>

      {/* INTERNAL LINKS (SEO SAFE) */}
      <div className="text-center py-6">
        {["whitefield","sarjapur-road","hsr-layout"].map((area) => (
          <a key={area} href={`/interior-designers/${area}`} className="mx-2 text-blue-600">
            Interior Designers in {area}
          </a>
        ))}
      </div>

      {/* FINAL CTA */}
      <section className="py-20 text-center bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">
          Book Free Consultation
        </h2>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
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

          <button type="submit" className="bg-black text-white py-3 rounded">
            {loading ? "Submitting..." : "Get Free Consultation"}
          </button>
        </form>

        {success && <p className="text-green-600 mt-4">Redirecting...</p>}
      </section>

      {/* STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow p-3 flex justify-between items-center">
        <span>Free Consultation</span>
        <a href="https://wa.me/919591039597" className="bg-green-500 text-white px-4 py-2 rounded">
          WhatsApp
        </a>
      </div>

    </div>
  );
};

export default CityLandingTemplate;