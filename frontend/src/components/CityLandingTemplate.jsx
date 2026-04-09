import { SCRIPT_URL } from "../utils/api";
import React, { useState } from "react";
import { Helmet } from "react-helmet";

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

    // Google Ads Conversion
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-11303451952/zBhUCM29o5QcELD6840q",
      });
    }

    // Save Lead
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

    // WhatsApp Redirect
    const msg = `Hi, I'm ${name}. My number is ${phone}. I need interior design service in ${location.name}.`;

    window.open(
      `https://wa.me/919591039597?text=${encodeURIComponent(msg)}`,
      "_blank"
    );

    window.location.href = "/thank-you";
  };

  return (
    <div className="bg-white text-gray-800">

      {/* SEO */}
      <Helmet>
        <title>{location.title}</title>
        <meta name="description" content={location.description} />
        <link
          rel="canonical"
          href={`https://denovacreations.com/interior-designers/${location.slug}`}
        />

        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Denova Creations",
            telephone: "+91-9591039597",
            areaServed: location.name,
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: location.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          })}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl font-bold leading-tight">
              Interior Designers in {location.name}, Bangalore
            </h1>

            <p className="mt-4 text-gray-600">
              We specialize in {location.keywords.join(", ")} in {location.name}, delivering customized interiors for modern homes.
            </p>

            <div className="mt-6 flex gap-4">
              <button
                onClick={handleSubmit}
                className="bg-black text-white px-6 py-3 rounded"
              >
                Get Free Consultation
              </button>

              <a
                href="https://wa.me/919591039597"
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

      {/* INTRO */}
      <section className="py-10 max-w-4xl mx-auto">
        <p className="text-gray-600">{location.intro}</p>
      </section>

      {/* SERVICES */}
      <section className="py-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Interior Design Services in {location.name}
        </h2>

        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          {location.services.map((service, index) => (
            <li key={index}>{service} in {location.name}</li>
          ))}
        </ul>
      </section>

      {/* PRICING */}
      <section className="py-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Interior Design Cost in {location.name}
        </h2>

        <p className="text-gray-700 font-medium">
          {location.pricing}
        </p>
      </section>

      {/* PROJECTS */}
      <section className="py-16 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-8">
          Recent Projects in {location.name}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <img src="/images/project1.webp" alt={`Interior project in ${location.name}`} />
          <img src="/images/project2.webp" alt={`Interior project in ${location.name}`} />
          <img src="/images/project3.webp" alt={`Interior project in ${location.name}`} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>

        {location.faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold">{faq.q}</h3>
            <p className="text-gray-600">{faq.a}</p>
          </div>
        ))}
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-10 max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold mb-4">
          Areas We Serve in Bangalore
        </h3>

        <ul className="grid grid-cols-2 gap-2 text-blue-600 underline">
          <li><a href="/interior-designers/whitefield">Whitefield</a></li>
          <li><a href="/interior-designers/indiranagar">Indiranagar</a></li>
          <li><a href="/interior-designers/marathahalli">Marathahalli</a></li>
          <li><a href="/interior-designers/hsr-layout">HSR Layout</a></li>
        </ul>
      </section>

      {/* FINAL CTA */}
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

    </div>
  );
};

export default CityLandingTemplate;