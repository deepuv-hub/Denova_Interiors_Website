import React, { useState } from "react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzNJ8sIocwARx549U8iAn-RYxwiNj0kMPxDQ6io8Wmby_Kc2VMBHyV9A5hLuRJa_gZB/exec";

/* SAFE IMAGE COMPONENT */
const SafeImage = ({ src, alt }) => {
  const [error, setError] = useState(false);

  return (
    <div className="w-full h-48 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
      {!error ? (
        <img
          src={src}
          alt={alt}
          onError={() => setError(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="text-sm text-gray-400">Image coming soon</span>
      )}
    </div>
  );
};

const AdsLanding = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    property: "",
    budget: "",
  });

  const [loading, setLoading] = useState(false);

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

      {/* 1. HERO */}
      <section className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Premium Home Interiors in Bangalore
            <span className="text-[#C8A96A] block">Starting at ₹3.5 Lakhs</span>
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Complete Design + Execution | Delivered On Time
          </p>

          <div className="mt-6 space-y-2 text-sm">
            <p>✅ 100+ Homes Delivered</p>
            <p>✅ Free 3D Design</p>
            <p>✅ Transparent Pricing</p>
          </div>

          <button onClick={scrollToForm} className="mt-6 bg-[#C8A96A] px-6 py-3 rounded-lg font-semibold">
            Book Free Consultation
          </button>
        </div>

        {/* FORM */}
        <form id="leadForm" onSubmit={handleSubmit} className="bg-white shadow-xl p-6 rounded-xl flex flex-col gap-4 border">
          <h3 className="text-xl font-semibold text-center">Get Free Consultation</h3>

          <input type="text" name="name" placeholder="Your Name" required value={form.name} onChange={handleChange} className="p-3 border rounded-lg" />
          <input type="tel" name="phone" placeholder="Phone Number" required value={form.phone} onChange={handleChange} className="p-3 border rounded-lg" />

          <select name="property" required value={form.property} onChange={handleChange} className="p-3 border rounded-lg">
            <option value="">Property Type</option>
            <option>2 BHK</option>
            <option>3 BHK</option>
            <option>Villa</option>
          </select>

          <select name="budget" value={form.budget} onChange={handleChange} className="p-3 border rounded-lg">
            <option value="">Budget</option>
            <option>3L - 5L</option>
            <option>5L - 10L</option>
            <option>10L+</option>
          </select>

          <button className="bg-[#C8A96A] py-3 rounded-lg font-semibold">
            {loading ? "Submitting..." : "Get Free Quote"}
          </button>
        </form>
      </section>

      {/* 2. TRUST BAR */}
      <section className="bg-gray-100 py-4 text-center text-sm font-medium">
        100+ Homes Delivered | 5+ Years Experience | 4.9★ Client Rating
      </section>

      {/* 3. DESIGN SHOWCASE */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-semibold mb-6">Our Design Showcase</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div>
            <SafeImage src="/images/living-room.webp" alt="Living Room" />
            <p className="mt-2 text-sm">2BHK Living Room • Whitefield</p>
          </div>

          <div>
            <SafeImage src="/images/kitchen.webp" alt="Kitchen" />
            <p className="mt-2 text-sm">Modular Kitchen • Sarjapur</p>
          </div>

          <div>
            <SafeImage src="/images/bedroom.webp" alt="Bedroom" />
            <p className="mt-2 text-sm">Modern Bedroom • Bangalore</p>
          </div>
        </div>
      </section>

      {/* 4. WHY US */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-semibold mb-6">Why Choose Denova</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-sm">
          <div>✔ Fixed Pricing</div>
          <div>✔ Dedicated Designer</div>
          <div>✔ End-to-End Execution</div>
          <div>✔ Premium Materials</div>
          <div>✔ On-Time Delivery</div>
          <div>✔ Bangalore Expertise</div>
        </div>
      </section>

      {/* 5. SERVICES */}
      <section className="py-12 bg-gray-50 text-center">
        <h2 className="text-2xl font-semibold mb-6">Our Services</h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-sm">
          <div>🏠 Full Home Interiors</div>
          <div>🍽 Modular Kitchen</div>
          <div>🛏 Wardrobes</div>
          <div>🔨 Renovation</div>
        </div>
      </section>

      {/* 6. PRICING */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="border p-6 rounded-lg">
            <h3>2BHK</h3>
            <p>₹3.5L+</p>
          </div>

          <div className="border p-6 rounded-lg">
            <h3>3BHK</h3>
            <p>₹5L+</p>
          </div>

          <div className="border p-6 rounded-lg">
            <h3>Villa</h3>
            <p>Custom</p>
          </div>
        </div>

        <button onClick={scrollToForm} className="mt-6 bg-[#C8A96A] px-6 py-3 rounded-lg">
          Get Exact Quote
        </button>
      </section>

      {/* 7. PROCESS */}
      <section className="py-12 bg-gray-50 text-center">
        <h2 className="text-2xl font-semibold mb-6">How It Works</h2>

        <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto text-sm">
          <div>Consult</div>
          <div>Design</div>
          <div>Approve</div>
          <div>Execute</div>
          <div>Handover</div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-12 text-center">
        <h2 className="text-xl font-semibold mb-6">Customer Reviews</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white shadow p-5">⭐⭐⭐⭐⭐ Excellent work</div>
          <div className="bg-white shadow p-5">⭐⭐⭐⭐⭐ Professional team</div>
          <div className="bg-white shadow p-5">⭐⭐⭐⭐⭐ Loved the design</div>
        </div>
      </section>

      {/* 9. COST ESTIMATOR */}
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-2xl mb-4">Get Your Interior Cost Estimate</h2>
        <button onClick={scrollToForm} className="bg-[#C8A96A] px-6 py-3 rounded-lg">
          Get My Estimate
        </button>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-16 text-center">
        <h2 className="text-2xl mb-4">Ready to Start Your Dream Home?</h2>
        <button onClick={scrollToForm} className="bg-[#C8A96A] px-6 py-3 rounded-lg">
          Book Free Consultation
        </button>
      </section>

    </div>
  );
};

export default AdsLanding;