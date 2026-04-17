import React, { useState } from "react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzNJ8sIocwARx549U8iAn-RYxwiNj0kMPxDQ6io8Wmby_Kc2VMBHyV9A5hLuRJa_gZB/exec";

/* SAFE IMAGE */
const SafeImage = ({ src, alt }) => {
  const [error, setError] = useState(false);

  return (
    <div className="w-full h-56 rounded-xl overflow-hidden bg-gray-100">
      {!error ? (
        <img
          src={src}
          alt={alt}
          onError={() => setError(true)}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      ) : (
        <div className="flex items-center justify-center h-full text-gray-400">
          Image coming soon
        </div>
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanedPhone = form.phone.replace(/\D/g, "");
    if (cleanedPhone.length !== 10) return alert("Enter valid number");

    setLoading(true);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({ ...form, phone: cleanedPhone }),
      });
    } catch (err) {}

    window.open(`https://wa.me/919591039597`);
    window.location.href = "/thank-you";
  };

  const scrollToForm = () => {
    document.getElementById("leadForm").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white text-gray-800 font-sans">

      {/* HERO */}
      <section className="relative h-[90vh] flex items-center">
        <img
          src="/images/hero.webp"
          alt="Interior Design"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 text-white">

          <div>
            <h1 className="text-5xl font-bold leading-tight">
              Premium Home Interiors in Bangalore
              <span className="block text-[#C8A96A]">
                Starting at ₹3.5 Lakhs
              </span>
            </h1>

            <p className="mt-4 text-lg">
              Complete Design and Execution. Delivered On Time.
            </p>

            <div className="mt-6 space-y-2 text-sm">
              <p>100+ Homes Delivered</p>
              <p>Free 3D Design</p>
              <p>Transparent Pricing</p>
            </div>

            <button
              onClick={scrollToForm}
              className="mt-6 bg-[#C8A96A] px-6 py-3 rounded-lg font-semibold text-black"
            >
              Book Free Consultation
            </button>
          </div>

          {/* FORM */}
          <form
            id="leadForm"
            onSubmit={handleSubmit}
            className="backdrop-blur-md bg-white/90 p-6 rounded-xl shadow-2xl text-black flex flex-col gap-4"
          >
            <h3 className="text-xl font-semibold text-center">
              Get Free Consultation
            </h3>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              onChange={handleChange}
              className="p-3 border rounded-lg"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
              className="p-3 border rounded-lg"
            />

            <select
              name="property"
              onChange={handleChange}
              className="p-3 border rounded-lg"
            >
              <option>Property Type</option>
              <option>1 BHK</option>
              <option>2 BHK</option>
              <option>3 BHK</option>
              <option>3+ BHK</option>
              <option>Villa</option>
            </select>

            <select
              name="budget"
              onChange={handleChange}
              className="p-3 border rounded-lg"
            >
              <option>Budget</option>
              <option>3L - 5L</option>
              <option>5L - 10L</option>
              <option>10L+</option>
            </select>

            <button className="bg-[#C8A96A] py-3 rounded-lg font-semibold">
              {loading ? "Submitting..." : "Get Quote"}
            </button>
          </form>
        </div>
      </section>

           {/* TRUST with HIGHLIGHT */}
<section className="py-10 bg-[#C8A96A] text-green">
  <div className="max-w-5xl mx-auto px-4">

    <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-6">

      {/* ITEM 1 */}
      <div>
        <p className="text-3xl font-bold">100+</p>
        <p className="text-sm mt-1 opacity-100">Homes Delivered</p>
      </div>

      {/* ITEM 2 */}
      <div>
        <p className="text-3xl font-bold">5+ Years</p>
        <p className="text-sm mt-1 opacity-90">Experience</p>
      </div>

      {/* ITEM 3 */}
      <div>
        <p className="text-3xl font-bold">4.9 ★</p>
        <p className="text-sm mt-1 opacity-90">Client Rating</p>
      </div>

    </div>

  </div>
</section>

      {/* SHOWCASE - OUR WORK*/}
      <section className="py-20 max-w-6xl mx-auto px-4">
  <h2 className="text-3xl font-bold text-center mb-10">
    Our Work
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div>
      <SafeImage src="/images/living1.webp" alt="Living Room Design" />
      <p className="mt-2 text-sm text-gray-600">
        2BHK Living Room • Whitefield
      </p>
    </div>

    <div>
      <SafeImage src="/images/kitchen1.webp" alt="Kitchen Design" />
      <p className="mt-2 text-sm text-gray-600">
        Modular Kitchen • Sarjapur
      </p>
    </div>

    <div>
      <SafeImage src="/images/bedroom1.webp" alt="Bedroom Design" />
      <p className="mt-2 text-sm text-gray-600">
        Modern Bedroom • Bangalore
      </p>
    </div>

    <div>
      <SafeImage src="/images/living2.webp" alt="Living Room Interior" />
      <p className="mt-2 text-sm text-gray-600">
        Luxury Living • 3BHK • HSR Layout
      </p>
    </div>

    <div>
      <SafeImage src="/images/kitchen2.webp" alt="Kitchen Interior" />
      <p className="mt-2 text-sm text-gray-600">
        Contemporary Kitchen • Electronic City
      </p>
    </div>

    <div>
      <SafeImage src="/images/bedroom2.webp" alt="Bedroom Interior" />
      <p className="mt-2 text-sm text-gray-600">
        Minimal Bedroom • Apartment • Bangalore
      </p>
    </div>

  </div>
</section>

      {/* SERVICES */}
      <section className="py-20 bg-[#F8F5F0]">
  <div className="max-w-6xl mx-auto px-4">

    <h2 className="text-3xl font-bold text-center mb-6">
      Interior Design Services in Bangalore
    </h2>

    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      End-to-end interior solutions tailored for homes, apartments, villas, and commercial spaces.
    </p>

    {/* 🔴 TOP LEVEL SERVICES */}
    <div className="grid md:grid-cols-3 gap-6 mb-12">

      <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition">
        <h3 className="font-semibold text-lg mb-2">Residential Interiors</h3>
        <p className="text-sm text-gray-600">Complete home interior solutions</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition">
        <h3 className="font-semibold text-lg mb-2">Apartment Interiors</h3>
        <p className="text-sm text-gray-600">Optimized designs for flats & apartments</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition">
        <h3 className="font-semibold text-lg mb-2">Villa Interiors</h3>
        <p className="text-sm text-gray-600">Luxury interiors for villas & independent homes</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition">
        <h3 className="font-semibold text-lg mb-2">Corporate & Commercial</h3>
        <p className="text-sm text-gray-600">Office and commercial interior design</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition">
        <h3 className="font-semibold text-lg mb-2">Renovation Projects</h3>
        <p className="text-sm text-gray-600">Upgrade and transform existing spaces</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition">
        <h3 className="font-semibold text-lg mb-2">Turnkey Projects</h3>
        <p className="text-sm text-gray-600">End-to-end design & execution</p>
      </div>

    </div>

    {/* 🔴 DETAILED SERVICES (YOUR EXISTING CARDS) */}
    <div className="grid md:grid-cols-4 gap-8">

      {/* CARD 1 */}
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">
        <div className="relative h-48 overflow-hidden">
          <img src="/images/living2.webp"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">
            Full Home Interiors
          </div>
        </div>
        <div className="p-4 text-sm text-gray-600">
          Complete design and execution for your entire home.
        </div>
      </div>

      {/* CARD 2 */}
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">
        <div className="relative h-48 overflow-hidden">
          <img src="/images/kitchen3.webp"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">
            Modular Kitchen
          </div>
        </div>
        <div className="p-4 text-sm text-gray-600">
          Functional and stylish kitchen solutions.
        </div>
      </div>

      {/* CARD 3 */}
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">
        <div className="relative h-48 overflow-hidden">
          <img src="/images/bedroom10.webp"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">
            Wardrobes
          </div>
        </div>
        <div className="p-4 text-sm text-gray-600">
          Space-optimized storage with premium finishes.
        </div>
      </div>

      {/* CARD 4 */}
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">
        <div className="relative h-48 overflow-hidden">
          <img src="/images/kitchen1.webp"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">
            Renovation
          </div>
        </div>
        <div className="p-4 text-sm text-gray-600">
          Transform your existing space into a modern home.
        </div>
      </div>

    </div>

  </div>
</section>

{/* WHAT'S INCLUDED */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4 text-center">

    {/* HEADING */}
    <p className="text-sm text-[#C8A96A] tracking-wide mb-2">
      WHAT’S INCLUDED
    </p>

    <h2 className="text-3xl font-bold mb-4">
      Our Complete Package
    </h2>

    <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
      Every project includes these essential elements for a hassle-free experience.
    </p>

    {/* GRID */}
    <div className="grid md:grid-cols-4 gap-6">

      {[
        {
          title: "Design Consultation",
          desc: "Free initial consultation with our design experts"
        },
        {
          title: "3D Visualization",
          desc: "Detailed 3D renders to visualize your space"
        },
        {
          title: "Material Selection",
          desc: "Curated material options within your budget"
        },
        {
          title: "Project Management",
          desc: "Dedicated manager for seamless execution"
        },
        {
          title: "Quality Assurance",
          desc: "Rigorous quality checks at every stage"
        },
        {
          title: "Timely Delivery",
          desc: "Project completion within promised timeline"
        },
        {
          title: "Warranty Coverage",
          desc: "Comprehensive warranty on workmanship"
        },
        {
          title: "After-Sales Support",
          desc: "Continued support post project handover"
        }
      ].map((item, index) => (
        <div
          key={index}
          className="bg-[#F8F5F0] p-6 rounded-xl text-left shadow-sm hover:shadow-md transition"
        >

          {/* NUMBER BADGE */}
          <div className="w-10 h-10 flex items-center justify-center bg-[#C8A96A] text-white rounded-full mb-4 font-semibold">
            {index + 1}
          </div>

          {/* TITLE */}
          <h3 className="font-semibold text-lg mb-2">
            {item.title}
          </h3>

          {/* DESC */}
          <p className="text-sm text-gray-600">
            {item.desc}
          </p>

        </div>
      ))}

    </div>

  </div>
</section>

      {/* PRICING */}
     <section className="relative py-24">

  {/* BACKGROUND IMAGE */}
  <img
    src="/images/project6.webp"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Interior Design"
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center text-white">

    {/* LEFT TEXT */}
    <div>
      <h2 className="text-4xl font-bold leading-tight">
        Want Clarity on Your Interior Budget?
      </h2>

      <p className="mt-4 text-lg">
        Get a personalized quote based on your space, budget, and requirements.
      </p>

      <button
        onClick={scrollToForm}
        className="mt-6 bg-[#C8A96A] px-6 py-3 rounded-lg font-semibold text-black"
      >
        Get Free Estimate
      </button>
    </div>

    {/* RIGHT CARD */}
    <div className="bg-white text-gray-800 p-6 rounded-xl shadow-2xl max-w-md w-full">

      <h3 className="text-xl font-semibold mb-4">
        Get Your Interior Quote
      </h3>

      <div className="grid grid-cols-2 gap-3 mb-4">

         <button className="border rounded-lg py-2 hover:bg-gray-100">
          1 BHK
        </button>

        <button className="border rounded-lg py-2 hover:bg-gray-100">
          2 BHK
        </button>

        <button className="border rounded-lg py-2 hover:bg-gray-100">
          3 BHK
        </button>

        <button className="border rounded-lg py-2 hover:bg-gray-100">
          Villa
        </button>

        <button className="border rounded-lg py-2 hover:bg-gray-100">
          Custom
        </button>

      </div>

      <button
        onClick={scrollToForm}
        className="w-full bg-[#C8A96A] py-3 rounded-lg font-semibold"
      >
        Get Exact Pricing
      </button>

    </div>

  </div>
</section>

      {/* TESTIMONIALS */}
     <section className="py-20 bg-[#F8F5F0]">
  <div className="max-w-6xl mx-auto px-4 text-center">

    <h2 className="text-3xl font-bold mb-4">
      What Our Clients Say
    </h2>

    <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
      Real experiences from homeowners who trusted Denova Creations.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

  {/* CARD 1 */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 group">
    <div className="relative h-48 overflow-hidden">
      <img
        src="/images/client1.webp"
        onError={(e) => (e.target.src = "/images/fallback.webp")}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        alt="Vinod Home"
      />
      <div className="absolute inset-0 bg-black/20"></div>
    </div>

    <div className="p-5 text-left">
      <p className="text-[#C8A96A] text-sm mb-2">★★★★★</p>
      <p className="text-sm text-gray-600 mb-3 leading-relaxed">
        “Exceeded expectations. The execution quality was excellent and delivered on time.”
      </p>
      <p className="font-semibold">Vinod’s Home</p>
      <p className="text-xs text-gray-500">2BHK • Bangalore</p>
    </div>
  </div>

  {/* CARD 2 */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 group">
    <div className="relative h-48 overflow-hidden">
      <img
        src="/images/client2.webp"
        onError={(e) => (e.target.src = "/images/fallback.webp")}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        alt="Harish Home"
      />
      <div className="absolute inset-0 bg-black/20"></div>
    </div>

    <div className="p-5 text-left">
      <p className="text-[#C8A96A] text-sm mb-2">★★★★★</p>
      <p className="text-sm text-gray-600 mb-3 leading-relaxed">
        “Very transparent process and premium materials used.”
      </p>
      <p className="font-semibold">Harish’s Home</p>
      <p className="text-xs text-gray-500">3BHK • Bangalore</p>
    </div>
  </div>

  {/* CARD 3 */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 group">
    <div className="relative h-48 overflow-hidden">
      <img
       src="/images/client3.webp"
        onError={(e) => (e.target.src = "/images/fallback.webp")}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        alt="Srinath Home"
      />
      <div className="absolute inset-0 bg-black/20"></div>
    </div>

    <div className="p-5 text-left">
      <p className="text-[#C8A96A] text-sm mb-2">★★★★★</p>
      <p className="text-sm text-gray-600 mb-3 leading-relaxed">
        “Smooth renovation and exactly what we expected.”
      </p>
      <p className="font-semibold">Srinath’s Home</p>
      <p className="text-xs text-gray-500">Renovation • Bangalore</p>
    </div>
  </div>

</div>

  </div>
</section>

      {/* FINAL CTA */}
      <section className="py-24 bg-[#F8F5F0]">

  <div className="max-w-4xl mx-auto text-center px-4">

    {/* HEADLINE */}
    <h2 className="text-4xl font-bold mb-4">
      Ready to Design Your Dream Home?
    </h2>

    {/* SUBTEXT */}
    <p className="text-gray-600 mb-8">
      Speak with our design expert today and get a personalized quote based on your space and budget.
    </p>

    {/* CTA BUTTONS */}
    <div className="flex flex-col md:flex-row gap-4 justify-center">

      <button
        onClick={scrollToForm}
        className="bg-[#C8A96A] px-8 py-3 rounded-lg font-semibold"
      >
        Book Free Consultation
      </button>

      <a
        href="tel:9591039597"
        className="border px-8 py-3 rounded-lg font-semibold"
      >
        Call Now
      </a>

      <a
        href="https://wa.me/919591039597"
        className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold"
      >
        WhatsApp Us
      </a>

    </div>

    {/* TRUST STRIP */}
    <div className="mt-10 text-sm text-gray-500">
      Free Consultation • Transparent Pricing • On-Time Delivery
    </div>

  </div>

</section>

     

    </div>
  );
};

export default AdsLanding;