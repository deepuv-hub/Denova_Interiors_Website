import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const ThankYou = () => {

  useEffect(() => {
  const interval = setInterval(() => {
    if (window.gtag) {

      window.gtag("event", "conversion", {
        send_to: "AW-11303451952/63-FCIP1rZ8cELD6840q",
        value: 1.0,
        currency: "INR"
      });

      // 🔥 ADD THIS
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "lead_conversion"
      });

      clearInterval(interval);
    }
  }, 500);

  setTimeout(() => clearInterval(interval), 5000);

}, []);

  return (
    <>
    <Helmet>
      <title>Thank You | Denova Creations</title>
      <meta
        name="description"
        content="Thank you for contacting Denova Creations. Our design expert will call you shortly about your interior design enquiry."
      />
      <link rel="canonical" href="https://denovacreations.com/thank-you" />
      <meta property="og:title" content="Thank You | Denova Creations" />
      <meta
        property="og:description"
        content="Thank you for contacting Denova Creations. Our design expert will call you shortly about your interior design enquiry."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://denovacreations.com/thank-you" />
      <meta property="og:image" content="https://denovacreations.com/images/hero2.webp" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Thank You | Denova Creations" />
      <meta
        name="twitter:description"
        content="Thank you for contacting Denova Creations. Our design expert will call you shortly about your interior design enquiry."
      />
      <meta name="twitter:image" content="https://denovacreations.com/images/hero2.webp" />
      <meta name="robots" content="noindex, follow" />
    </Helmet>
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">

      <h1 className="text-3xl font-bold mb-4">
        🎉 Thank You! Your Request is Received
      </h1>

      <p className="text-gray-600 mb-6">
        Our design expert will contact you within <strong>10 minutes</strong>.
      </p>

      <div className="bg-gray-100 p-6 rounded max-w-md">

        <h2 className="text-lg font-semibold mb-3">
          What to expect next:
        </h2>

        <ul className="text-sm text-gray-700 space-y-2">
          <li>✔ Free consultation call</li>
          <li>✔ Budget discussion</li>
          <li>✔ Design planning</li>
        </ul>

      </div>

      <div className="mt-8 flex gap-4">

        <a
          href="tel:9164466606"
          className="bg-black text-white px-6 py-3 rounded"
        >
          Call Now
        </a>

        <a
          href="https://wa.me/919164466606"
          className="bg-green-500 text-white px-6 py-3 rounded"
        >
          WhatsApp
        </a>

      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
        <a href="/" className="underline text-gray-700 hover:text-black">
          Back to Home
        </a>
        <a href="/projects" className="underline text-gray-700 hover:text-black">
          View Projects
        </a>
        <a href="/contact" className="underline text-gray-700 hover:text-black">
          Contact Us
        </a>
      </div>

    </div>
    </>
  );
};

export default ThankYou;
