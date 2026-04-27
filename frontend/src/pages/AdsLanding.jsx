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
  fetchpriority={priority ? "high" : "auto"}
  sizes="(max-width: 768px) 100vw, 400px"
  onError={() => setError(true)}
  className="w-full h-full object-cover hover:scale-105 transition duration-500"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover"
  }}
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
          alt="Premium Home Interiors in Bangalore by Denova Creations"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width="800"
          height="600"
          className="absolute inset-0 w-full h-full object-cover"
        />

       <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 text-white">

          <div>
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
              Premium Home Interiors in Bangalore by Denova Creations
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
                    {/* FORM */}
       {/* HERO */}

      {/* PRICING SECTION */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4 text-center">

    <h2 className="text-3xl font-bold mb-4">
      Interior Design Cost in Bangalore
    </h2>

    <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
      Get a clear idea of interior pricing based on your home type and requirements.
    </p>

    <div className="grid md:grid-cols-3 gap-6">

      {/* CARD 1 */}
      <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
        <h3 className="font-semibold text-lg mb-2">1 BHK Interiors</h3>
        <p className="text-2xl font-bold text-[#C8A96A] mb-3">₹2.5L – ₹4L</p>
        <p className="text-sm text-gray-600 mb-4">
          Ideal for compact homes with essential design and storage solutions.
        </p>
        <button
          onClick={scrollToForm}
          className="bg-[#C8A96A] px-4 py-2 rounded-lg font-semibold"
        >
          Get Exact Quote
        </button>
      </div>

      {/* CARD 2 */}
      <div className="border rounded-xl p-6 shadow-md">
        <h3 className="font-semibold text-lg mb-2">2 BHK Interiors</h3>
        <p className="text-2xl font-bold text-[#C8A96A] mb-3">₹3.5L – ₹6L</p>
        <p className="text-sm text-gray-600 mb-4">
          Complete home interiors with kitchen, wardrobes & living space design.
        </p>
        <button
          onClick={scrollToForm}
          className="bg-[#C8A96A] px-4 py-2 rounded-lg font-semibold"
        >
          Get Exact Quote
        </button>
      </div>

      {/* CARD 3 */}
      <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
        <h3 className="font-semibold text-lg mb-2">3 BHK & Villas</h3>
        <p className="text-2xl font-bold text-[#C8A96A] mb-3">₹6L – ₹12L+</p>
        <p className="text-sm text-gray-600 mb-4">
          Premium interiors with customized design, materials & finishes.
        </p>
        <button
          onClick={scrollToForm}
          className="bg-[#C8A96A] px-4 py-2 rounded-lg font-semibold"
        >
          Get Exact Quote
        </button>
      </div>

    </div>
    {/* PRICING SECTION */}

    {/* TRUST LINE */}
    <p className="text-sm text-gray-500 mt-8">
      Transparent pricing • No hidden costs • Free consultation
    </p>

  </div>
</section>
{/* TRUST LINE */}

      {/* SHOWCASE */}
<section className="py-20 max-w-6xl mx-auto px-4">

  <h2 className="text-3xl font-bold text-center mb-4">
    Our Work
  </h2>

  <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
    Real homes designed and executed across Bangalore — tailored to different budgets and lifestyles.
  </p>

  <div className="grid md:grid-cols-3 gap-6">

    {/* CARD 1 */}
    <div className="cursor-pointer" onClick={scrollToForm}>
      <SafeImage 
        src="/images/living1.webp" 
        alt="2BHK Living Room Interior Whitefield Bangalore"
        priority
      />
      <p className="mt-2 text-sm text-gray-600">
        2BHK Living Room • Whitefield • ₹4–5 Lakhs
      </p>
    </div>

    {/* CARD 2 */}
    <div className="cursor-pointer" onClick={scrollToForm}>
      <SafeImage 
        src="/images/kitchen1.webp" 
        alt="Modular Kitchen Interior Sarjapur Bangalore"
      />
      <p className="mt-2 text-sm text-gray-600">
        Modular Kitchen • Sarjapur • ₹2–3 Lakhs
      </p>
    </div>

    {/* CARD 3 */}
    <div className="cursor-pointer" onClick={scrollToForm}>
      <SafeImage 
        src="/images/bedroom1.webp" 
        alt="Bedroom Interior Bangalore Apartment"
      />
      <p className="mt-2 text-sm text-gray-600">
        Bedroom Interior • Bangalore • ₹1.5–2 Lakhs
      </p>
    </div>

    {/* CARD 4 */}
    <div className="cursor-pointer" onClick={scrollToForm}>
      <SafeImage 
        src="/images/living2.webp" 
        alt="Luxury Living Room HSR Layout Bangalore"
      />
      <p className="mt-2 text-sm text-gray-600">
        3BHK Living Room • HSR Layout • ₹6–8 Lakhs
      </p>
    </div>

    {/* CARD 5 */}
    <div className="cursor-pointer" onClick={scrollToForm}>
      <SafeImage 
        src="/images/kitchen2.webp" 
        alt="Contemporary Kitchen Electronic City Bangalore"
      />
      <p className="mt-2 text-sm text-gray-600">
        Contemporary Kitchen • Electronic City • ₹3.5–5 Lakhs
      </p>
    </div>

    {/* CARD 6 */}
    <div className="cursor-pointer" onClick={scrollToForm}>
      <SafeImage 
        src="/images/bedroom2.webp" 
        alt="Minimal Bedroom Bangalore Apartment"
      />
      <p className="mt-2 text-sm text-gray-600">
        Minimal Bedroom • Apartment • ₹1.8–3 Lakhs
      </p>
    </div>

  </div>

  {/* SHOWCASE */}



  {/* CTA */}
  <div className="text-center mt-12">
    <button
      onClick={scrollToForm}
      className="bg-[#C8A96A] px-6 py-3 rounded-lg font-semibold"
    >
      Get Your Design Quote
    </button>
  </div>

</section>


  {/* CTA */}



      {/* SERVICES */}
<section className="py-20 bg-[#F8F5F0]">
  <div className="max-w-6xl mx-auto px-4">

    <h2 className="text-3xl font-bold text-center mb-4">
      Interior Design Services in Bangalore
    </h2>

    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      End-to-end interior solutions tailored for apartments, villas, and modern homes.
    </p>

    <div className="grid md:grid-cols-4 gap-8">

      {/* CARD 1 */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg">
        <SafeImage 
          src="/images/living2.webp" 
          alt="Full Home Interior Design Bangalore"
        />
        <div className="p-4 text-center">
          <h3 className="font-semibold text-lg mb-2">
            Full Home Interiors
          </h3>
          <p className="text-sm text-gray-600">
            Complete design and execution for your entire home within budget.
          </p>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg">
        <SafeImage 
          src="/images/kitchen3.webp" 
          alt="Modular Kitchen Interior Design Bangalore"
        />
        <div className="p-4 text-center">
          <h3 className="font-semibold text-lg mb-2">
            Modular Kitchen
          </h3>
          <p className="text-sm text-gray-600">
            Functional and stylish kitchen solutions designed for daily living.
          </p>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg">
        <SafeImage 
          src="/images/bedroom10.webp" 
          alt="Wardrobe Interior Design Bangalore"
        />
        <div className="p-4 text-center">
          <h3 className="font-semibold text-lg mb-2">
            Wardrobes & Storage
          </h3>
          <p className="text-sm text-gray-600">
            Space-optimized storage solutions with premium finishes.
          </p>
        </div>
      </div>

      {/* CARD 4 */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg">
        <SafeImage 
          src="/images/kitchen1.webp" 
          alt="Home Renovation Interior Bangalore"
        />
        <div className="p-4 text-center">
          <h3 className="font-semibold text-lg mb-2">
            Renovation Projects
          </h3>
          <p className="text-sm text-gray-600">
            Upgrade your existing space into a modern and functional home.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>
 {/* SERVICES */}


      {/* TESTIMONIALS */}
<section className="py-20 bg-[#F8F5F0]">
  <div className="max-w-6xl mx-auto px-4">

    <h2 className="text-3xl font-bold text-center mb-4">
      What Our Clients Say
    </h2>

    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      Real experiences from homeowners across Bangalore who trusted Denova Creations.
    </p>
    <p className="text-center mt-10 text-sm text-gray-500">
  Trusted by 100+ homeowners across Bangalore
</p>

    <div className="grid md:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <SafeImage 
          src="/images/client1.webp" 
          alt="2BHK Interior Project Bangalore"
        />
        <div className="p-5 text-left">
          <p className="text-[#C8A96A] text-sm mb-2">★★★★★</p>
          <p className="text-sm text-gray-600 mb-3">
            “The execution was smooth and the final output exceeded our expectations. Everything was delivered on time.”
          </p>
          <p className="font-semibold">Vinod</p>
          <p className="text-xs text-gray-500">2BHK • Bangalore</p>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <SafeImage 
          src="/images/client2.webp" 
          alt="3BHK Interior Project Bangalore"
        />
        <div className="p-5 text-left">
          <p className="text-[#C8A96A] text-sm mb-2">★★★★★</p>
          <p className="text-sm text-gray-600 mb-3">
            “Very transparent pricing and great material quality. The team was professional throughout.”
          </p>
          <p className="font-semibold">Harish</p>
          <p className="text-xs text-gray-500">3BHK • Bangalore</p>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <SafeImage 
          src="/images/client3.webp" 
          alt="Home Renovation Bangalore"
        />
        <div className="p-5 text-left">
          <p className="text-[#C8A96A] text-sm mb-2">★★★★★</p>
          <p className="text-sm text-gray-600 mb-3">
            “Our renovation was handled perfectly. The design matched exactly what we had in mind.”
          </p>
          <p className="font-semibold">Srinath</p>
          <p className="text-xs text-gray-500">Renovation • Bangalore</p>
        </div>
      </div>

    </div>

  </div>
</section>
 {/* TESTIMONIALS */}

    </div>
  );
};

export default AdsLanding;