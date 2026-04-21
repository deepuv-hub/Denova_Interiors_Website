import React, { useState } from "react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzNJ8sIocwARx549U8iAn-RYxwiNj0kMPxDQ6io8Wmby_Kc2VMBHyV9A5hLuRJa_gZB/exec";

/* SAFE IMAGE - OPTIMIZED */
const SafeImage = ({ 
  src, 
  alt, 
  width = 800, 
  height = 600, 
  priority = false 
}) => {
  const [error, setError] = useState(false);

  return (
    <div
      className="w-full h-56 rounded-xl overflow-hidden bg-gray-100"
      style={{ aspectRatio: `${width}/${height}`, minHeight: "200px" }}
    >
      {!error ? (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          onError={() => setError(true)}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      ) : (
        <div className="flex items-center justify-center h-full text-gray-400 text-sm">
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

    window.open(`https://wa.me/919164466606`);
    window.location.href = "/thank-you";
  };

  const scrollToForm = () => {
    document.getElementById("leadForm")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white text-gray-800 font-sans">

      {/* HERO */}
      <section className="relative min-h-[45vh] md:min-h-[55vh] flex items-center">

        <img
          src="/images/hero2.webp"
          alt="Premium Home Interiors in Bangalore"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width="1200"
          height="1193"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 text-white">

          <div>
            <h1 className="text-4xl font-bold">
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
            className="backdrop-blur-md bg-white/90 p-6 rounded-xl shadow-lg text-black flex flex-col gap-4"
          >
            <h3 className="text-xl font-semibold text-center">
              Get Free Consultation
            </h3>

            <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} className="p-3 border rounded-lg" />
            <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} className="p-3 border rounded-lg" />

            <select name="property" onChange={handleChange} className="p-3 border rounded-lg">
              <option>Property Type</option>
              <option>1 BHK</option>
              <option>2 BHK</option>
              <option>3 BHK</option>
              <option>3+ BHK</option>
              <option>Villa</option>
            </select>

            <select name="budget" onChange={handleChange} className="p-3 border rounded-lg">
              <option>Budget</option>
              <option>3L - 5L</option>
              <option>5L - 10L</option>
              <option>10L+</option>
            </select>

            <button disabled={loading} className="bg-[#C8A96A] py-3 rounded-lg font-semibold">
              {loading ? "Submitting..." : "Get Quote"}
            </button>

            <p className="text-xs text-gray-500 mt-3 text-center">
              By submitting this form, you agree to our{" "}
              <a href="/privacy-policy" className="underline font-medium">
                Privacy Policy
              </a>.
            </p>
          </form>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Work</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <SafeImage src="/images/living1.webp" alt="Living Room Interior Whitefield Bangalore" priority />
          <SafeImage src="/images/kitchen1.webp" alt="Modular Kitchen Sarjapur Bangalore" />
          <SafeImage src="/images/bedroom1.webp" alt="Bedroom Interior Bangalore" />
          <SafeImage src="/images/living2.webp" alt="Luxury Living Room HSR Layout" />
          <SafeImage src="/images/kitchen2.webp" alt="Kitchen Interior Electronic City" />
          <SafeImage src="/images/bedroom2.webp" alt="Minimal Bedroom Bangalore" />
        </div>
      </section>

      {/* SERVICES (IMAGES FIXED) */}
      <section className="py-20 bg-[#F8F5F0]">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">

          <SafeImage src="/images/living2.webp" alt="Full Home Interiors Bangalore" />
          <SafeImage src="/images/kitchen3.webp" alt="Modular Kitchen Design Bangalore" />
          <SafeImage src="/images/bedroom10.webp" alt="Wardrobe Interior Design Bangalore" />
          <SafeImage src="/images/kitchen1.webp" alt="Renovation Interior Bangalore" />

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-[#F8F5F0]">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">

          <SafeImage src="/images/client1.webp" alt="Client Review Bangalore" />
          <SafeImage src="/images/client2.webp" alt="Interior Client Bangalore" />
          <SafeImage src="/images/client3.webp" alt="Home Interior Testimonial Bangalore" />

        </div>
      </section>

    </div>
  );
};

export default AdsLanding;