import React, { useEffect } from "react";

const ThankYou = () => {

  useEffect(() => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: "lead_conversion",
      value: 1.0,
      currency: "INR"
    });

    console.log("✅ GTM conversion event pushed");
  } else {
    console.warn("❌ dataLayer not available");
  }
}, []);

  return (
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

    </div>
  );
};

export default ThankYou;