 import React, { useState } from "react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby9SBHZXrLYiKlvRxaM8TaqICwB7VkWy_6T8B1WTkz_CXEBNTNYo9B_J1WxZlA9Ebxa/exec";
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
  sizes="(max-width: 768px) 100vw, 400px"
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
// safe image component to handle loading and errors gracefully


const AdsLanding = () => {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    pincode: "",
    possession: "",
    budget: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
const isFormValid =
  form.name?.trim() &&
  /^[6-9]\d{9}$/.test(form.phone) &&
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
  form.propertyType &&
  /^[0-9]{6}$/.test(form.pincode) &&
  form.possession &&
  form.budget;

  const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });

  // Clear error when user types
  setErrors({
    ...errors,
    [e.target.name]: "",
  });
};

  const validateForm = () => {
  let newErrors = {};

  if (!form.name?.trim()) newErrors.name = "Name is required";
  if (!form.budget) newErrors.budget = "Select budget";

  if (!form.phone.trim()) {
    newErrors.phone = "Phone is required";
  } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
    newErrors.phone = "Enter valid 10-digit number";
  }

  if (!form.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    newErrors.email = "Enter valid email";
  }

  if (!form.propertyType) {
    newErrors.propertyType = "Select property type";
  }

  if (!form.pincode.trim()) {
    newErrors.pincode = "Pincode is required";
  } else if (!/^[0-9]{6}$/.test(form.pincode)) {
    newErrors.pincode = "Enter valid 6-digit pincode";
  }

  if (!form.possession) {
    newErrors.possession = "Select possession";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

const scrollToForm = () => {
  const formEl = document.getElementById("leadForm");
  if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
};
  //handleSubmit
const handleSubmit = async (e) => {
  e.preventDefault();

  const isValid = validateForm();
  if (!isValid) return;

  const cleanedPhone = form.phone.replace(/\D/g, "").slice(0, 10);
  if (cleanedPhone.length !== 10) {
    alert("Enter valid number");
    return;
  }

  try {
    setLoading(true);

    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", // IMPORTANT
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        phone: form.phone,
        email: form.email,
        propertyType: form.propertyType,
        location: form.pincode,
        possession: form.possession,
        budget: form.budget,
        source: "Ads Landing Page",
      }),
    });

    // Assume success
    window.location.href = "/thank-you";

  } catch (err) {
    console.error("Submission issue:", err);
  } finally {
    setLoading(false);
  }
};
 //handleSubmit

  return (
    <>
{/* HERO SECTION */}
<section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center">

  {/* BACKGROUND IMAGE */}
  <img
    src="/images/hero2.webp"
    alt="Premium Home Interiors in Bangalore by Denova Creations"
    loading="eager"
    fetchPriority="high"
    decoding="async"
    width={(1200)}
    height={(800)}
    className="absolute inset-0 w-full h-full object-cover"
  />



  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-10 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 text-white">

    {/* LEFT CONTENT */}
    <div>

      <h1 className="text-3xl md:text-5xl font-bold leading-tight">
        Premium Home Interiors in Bangalore
      </h1>

      <p className="mt-3 text-xl font-semibold text-[#C8A96A]">
        Starting at ₹3.5 Lakhs
      </p>

      <p className="mt-4 text-lg text-gray-200">
        End-to-End Interior Solutions for Premium Flats & Villas
      </p>

      {/* TRUST LINE */}
      <p className="mt-4 text-sm text-gray-300">
        ✔ 100+ Homes Delivered &nbsp;•&nbsp; ✔ Free 3D Design &nbsp;•&nbsp; ✔ Transparent Pricing
      </p>

      {/* CTA */}
      <button
        onClick={scrollToForm}
        className="mt-6 bg-[#C8A96A] px-6 py-3 rounded-lg font-semibold text-black hover:opacity-90 transition"
      >
        Get Free Design Consultation
      </button>

      {/* SECONDARY CTA */}
      <a 
        href="https://wa.me/919164011181?text=Hi, I am looking for interior design for my home in Bangalore. My budget is above ₹3L. Please share details."
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-3 text-sm text-green-400 hover:text-green-300 transition"
      >
        📞 Talk to Designer on WhatsApp
      </a>

    </div>

    {/* FORM */}
    <form
      id="leadForm"
      onSubmit={handleSubmit}
      className="bg-white p-6 md:p-7 rounded-xl shadow-xl text-black flex flex-col gap-4"
    >

      <h2 className="text-lg font-semibold">
        Get Free Consultation for Your Home
      </h2>

      {/* INPUTS */}

{/* NAME */}
<label htmlFor="name" className="sr-only">Your Name</label>
<input 
  type="text" 
  id="name"
  name="name" 
  placeholder="Your Name" 
  value={form.name}
  required 
  onChange={handleChange} 
  className={`p-3 border rounded-lg focus:outline-none focus:ring-2 ${
    errors.name ? 'border-red-500 focus:ring-red-500' : 'focus:ring-[#C8A96A]'
  }`}
/>
{errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}


{/* PHONE */}
<label htmlFor="phone" className="sr-only">Phone Number</label>
<input 
  type="tel" 
  id="phone"
  name="phone" 
  placeholder="Phone Number" 
  value={form.phone}
  maxLength={10}
  required 
  onChange={handleChange} 
  className={`p-3 border rounded-lg focus:outline-none focus:ring-2 ${
    errors.phone ? 'border-red-500 focus:ring-red-500' : 'focus:ring-[#C8A96A]'
  }`}
/>
{errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}


{/* EMAIL */}
<label htmlFor="email" className="sr-only">Email</label>
<input
  type="email"
  id="email"
  name="email"
  placeholder="Email ID"
  value={form.email}
  required
  onChange={handleChange}
  className={`p-3 border rounded-lg focus:outline-none focus:ring-2 ${
    errors.email ? 'border-red-500 focus:ring-red-500' : 'focus:ring-[#C8A96A]'
  }`}
/>
{errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}


{/* PROPERTY TYPE */}
<label htmlFor="propertyType" className="sr-only">Property Type</label>
<select 
  id="propertyType"
  name="propertyType"
  value={form.propertyType}
  onChange={handleChange} 
  className="p-3 border rounded-lg"
  required
>
  <option value="">Select Property Type</option>
  <option value="1 BHK">1 BHK</option>
  <option value="2 BHK">2 BHK</option>
  <option value="3 BHK">3 BHK</option>
  <option value="3+ BHK">3+ BHK</option>
  <option value="Villa">Villa</option>
</select>


{/* PINCODE */}
<label htmlFor="pincode" className="sr-only">Pincode</label>
<input
  type="tel"
  id="pincode"
  name="pincode"   
  placeholder="Pincode"
  value={form.pincode}
  required
  maxLength={6}
  onChange={handleChange}   
  className={`p-3 border rounded-lg focus:outline-none focus:ring-2 ${
    errors.pincode ? 'border-red-500 focus:ring-red-500' : 'focus:ring-[#C8A96A]'
  }`}
/>
{errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}  


{/* POSSESSION */}
<label htmlFor="possession" className="sr-only">Possession</label>
<select
  id="possession"
  name="possession"
  value={form.possession}
  onChange={handleChange}
  className="p-3 border rounded-lg"
  required
>
  <option value="">Select Possession</option>
  <option value="Immediate">Immediate</option>
  <option value="0-3 Months">0-3 Months</option>
  <option value="3-6 Months">3-6 Months</option>
  <option value="6+ Months">6+ Months</option>
</select>

<select
  name="budget"
  value={form.budget}
  onChange={handleChange}
  className="p-3 border rounded-lg"
  required
>
  <option value="">Select Budget</option>
  <option value="3-5L">₹3–5 Lakhs</option>
  <option value="5-10L">₹5–10 Lakhs</option>
  <option value="10-20L">₹10–20 Lakhs</option>
  <option value="20L+">₹20 Lakhs+</option>
</select>

      {/* CTA BUTTON */}
      <button
  type="submit"
  disabled={!isFormValid || loading}
  className={`py-3 rounded-lg font-semibold transition ${
    !isFormValid
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-[#C8A96A] hover:opacity-90"
  }`}
>
        {loading ? "Submitting..." : "Get Quote"}
      </button>

      {/* TRUST TEXT */}
      <div className="mt-2 space-y-2 text-center">

  <p className="text-sm text-gray-700 font-medium">
    Our designer will call you within 30 minutes
  </p>

  <p className="text-xs text-gray-500">
    No spam • 100% confidential
  </p>

  <p className="text-xs text-gray-400">
    By submitting this form, you agree to our{" "}
    <a href="/privacy-policy" className="underline hover:text-gray-600">
      Privacy Policy
    </a>
  </p>

</div>

    </form>

  </div>

</section>
                    
            {/* PRICING SECTION */}
            <section id="pricing" className="py-20 bg-gradient-to-b from-[#F8F5F0] to-white">

  <div className="max-w-6xl mx-auto px-4 text-center">

    {/* HEADING */}
    <h2 className="text-3xl font-bold mb-4">
      Interior Design Cost in Bangalore
    </h2>

    <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
      Get a clear idea of interior pricing based on your home type and requirements.
    </p>
    <p className="text-sm text-gray-500 mb-6">
  Our projects typically start from ₹3 Lakhs onwards
</p>

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white">
        <h3 className="font-semibold text-lg mb-2">1 BHK Interiors</h3>

        <p className="text-2xl font-bold text-[#C8A96A] mb-3">
          ₹3L – ₹4.5L
        </p>

        <p className="text-sm text-gray-600 mb-5">
          Ideal for compact homes with essential design and storage solutions.
        </p>

        <button
          onClick={scrollToForm}
          className="bg-[#C8A96A] px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Get Exact Quote for Your Home
        </button>
      </div>

      {/* CARD 2 - HIGHLIGHT */}
      <div className="border-2 border-[#C8A96A] rounded-xl p-6 shadow-lg bg-white scale-105">

        <p className="text-xs font-semibold text-[#C8A96A] mb-2">
          MOST POPULAR
        </p>

        <h3 className="font-semibold text-lg mb-2">2 BHK Interiors</h3>

        <p className="text-2xl font-bold text-[#C8A96A] mb-3">
          ₹3.5L – ₹6L
        </p>

        <p className="text-sm text-gray-600 mb-5">
          Complete home interiors with kitchen, wardrobes & living space design.
        </p>

        <button
          onClick={scrollToForm}
          className="bg-[#C8A96A] px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Get Exact Quote
        </button>
      </div>

      {/* CARD 3 */}
      <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white">
        <h3 className="font-semibold text-lg mb-2">3 BHK & Villas</h3>

        <p className="text-2xl font-bold text-[#C8A96A] mb-3">
          ₹6L – ₹12L+
        </p>

        <p className="text-sm text-gray-600 mb-5">
          Premium interiors with customized design, materials & finishes.
        </p>

        <button
          onClick={scrollToForm}
          className="bg-[#C8A96A] px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Get Exact Quote
        </button>
      </div>

    </div>

    {/* TRUST LINE */}
    <p className="text-sm text-gray-500 mt-10">
      Transparent pricing • No hidden costs • Free consultation
    </p>

  </div>
</section>
{/* PRICING SECTION */}

      {/* SHOWCASE */}
<section id="portfolio" className="py-20 bg-gradient-to-b from-white to-[#F8F5F0]">

  <div className="max-w-6xl mx-auto px-4">

    {/* HEADING */}
    <h2 className="text-3xl font-bold text-center mb-4">
      Our Completed Interior Projects in Bangalore
    </h2>

    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      Real homes designed and executed across Bangalore — tailored to different budgets and lifestyles.
    </p>

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <div className="group cursor-pointer" onClick={scrollToForm}>
        <div className="overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition duration-300">
          <SafeImage 
            src="/images/living1.webp" 
            alt="2BHK Living Room Interior Whitefield Bangalore"
            priority
          />
        </div>
        <p className="mt-3 text-sm text-gray-700 font-medium">
          2BHK Living Room • Whitefield
        </p>
        <p className="text-sm text-[#C8A96A] font-semibold">
          ₹4–5 Lakhs
        </p>
      </div>

      {/* CARD 2 */}
      <div className="group cursor-pointer" onClick={scrollToForm}>
        <div className="overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition duration-300">
          <SafeImage 
            src="/images/kitchen1.webp" 
            alt="Modular Kitchen Interior Sarjapur Bangalore"
          />
        </div>
        <p className="mt-3 text-sm text-gray-700 font-medium">
          Modular Kitchen • Sarjapur
        </p>
        <p className="text-sm text-[#C8A96A] font-semibold">
          ₹3–4 Lakhs
        </p>
      </div>

      {/* CARD 3 */}
      <div className="group cursor-pointer" onClick={scrollToForm}>
        <div className="overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition duration-300">
          <SafeImage 
            src="/images/bedroom1.webp" 
            alt="Bedroom Interior Bangalore Apartment"
          />
        </div>
        <p className="mt-3 text-sm text-gray-700 font-medium">
          Bedroom Interior • Bangalore
        </p>
        <p className="text-sm text-[#C8A96A] font-semibold">
          ₹2.5–3.5 Lakhs
        </p>
      </div>

      {/* CARD 4 */}
      <div className="group cursor-pointer" onClick={scrollToForm}>
        <div className="overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition duration-300">
          <SafeImage 
            src="/images/living2.webp" 
            alt="Luxury Living Room HSR Layout Bangalore"
          />
        </div>
        <p className="mt-3 text-sm text-gray-700 font-medium">
          3BHK Living Room • HSR Layout
        </p>
        <p className="text-sm text-[#C8A96A] font-semibold">
          ₹6–8 Lakhs
        </p>
      </div>

      {/* CARD 5 */}
      <div className="group cursor-pointer" onClick={scrollToForm}>
        <div className="overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition duration-300">
          <SafeImage 
            src="/images/kitchen2.webp" 
            alt="Contemporary Kitchen Electronic City Bangalore"
          />
        </div>
        <p className="mt-3 text-sm text-gray-700 font-medium">
          Contemporary Kitchen • Electronic City
        </p>
        <p className="text-sm text-[#C8A96A] font-semibold">
          ₹3.5–5 Lakhs
        </p>
      </div>

      {/* CARD 6 */}
      <div className="group cursor-pointer" onClick={scrollToForm}>
        <div className="overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition duration-300">
          <SafeImage 
            src="/images/bedroom2.webp" 
            alt="Minimal Bedroom Bangalore Apartment"
          />
        </div>
        <p className="mt-3 text-sm text-gray-700 font-medium">
          Minimal Bedroom • Apartment
        </p>
        <p className="text-sm text-[#C8A96A] font-semibold">
          ₹1.8–3 Lakhs
        </p>
      </div>

    </div>

    {/* CTA */}
    <div className="text-center mt-16">
      <button
        onClick={scrollToForm}
        className="bg-[#C8A96A] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
      >
        Get Your Design Quote
      </button>

      <p className="text-sm text-gray-500 mt-2">
        Free consultation • No hidden costs • Bangalore experts
      </p>
    </div>

  </div>
</section>
{/* SHOWCASE */}


      {/* SERVICES */}
<section id="services" className="py-20 bg-gradient-to-b from-[#F8F5F0] to-white">
  <div className="max-w-6xl mx-auto px-4">

    {/* HEADING */}
    <h2 className="text-3xl font-bold text-center mb-4">
     Premium Interior Solutions for Flats & Villas in Bangalore
    </h2>

    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      From modular kitchens to full home interiors — designed, executed, and delivered on time.
    </p>

    {/* GRID */}
    <div className="grid md:grid-cols-4 gap-8">

      {/* CARD 1 */}
      <div 
        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer"
        onClick={scrollToForm}
      >
        <SafeImage 
          src="/images/living2.webp" 
          alt="Full Home Interior Design Bangalore"
        />
        <div className="p-4 text-center">
          <h3 className="font-semibold text-lg mb-2">
            Full Home Interiors
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            Complete design and execution for your entire home within budget.
          </p>
          <p className="text-[#C8A96A] font-semibold text-sm">
            Get Quote for Your Home →
          </p>
          <p className="text-xs text-[#C8A96A] font-semibold mb-1">
  MOST REQUESTED
</p>
        </div>
      </div>

      {/* CARD 2 */}
      <div 
        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer"
        onClick={scrollToForm}
      >
        <SafeImage 
          src="/images/kitchen3.webp" 
          alt="Modular Kitchen Interior Design Bangalore"
        />
        <div className="p-4 text-center">
          <h3 className="font-semibold text-lg mb-2">
            Modular Kitchen
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            Functional and stylish kitchen solutions designed for daily living.
          </p>
          <p className="text-[#C8A96A] font-semibold text-sm">
            Get Free Quote →
          </p>
        </div>
      </div>

      {/* CARD 3 */}
      <div 
        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer"
        onClick={scrollToForm}
      >
        <SafeImage 
          src="/images/bedroom10.webp" 
          alt="Wardrobe Interior Design Bangalore"
        />
        <div className="p-4 text-center">
          <h3 className="font-semibold text-lg mb-2">
            Wardrobes & Storage
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            Space-optimized storage solutions with premium finishes.
          </p>
          <p className="text-[#C8A96A] font-semibold text-sm">
            Get Free Quote →
          </p>
        </div>
      </div>

      {/* CARD 4 */}
      <div 
        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer"
        onClick={scrollToForm}
      >
        <SafeImage 
          src="/images/kitchen1.webp" 
          alt="Home Renovation Interior Bangalore"
        />
        <div className="p-4 text-center">
          <h3 className="font-semibold text-lg mb-2">
            Renovation Projects
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            Upgrade your existing space into a modern and functional home.
          </p>
          <p className="text-[#C8A96A] font-semibold text-sm">
            Get Free Quote →
          </p>
        </div>
      </div>

    </div>

    {/* SECTION CTA */}
    <div className="text-center mt-12">
      <button
        onClick={scrollToForm}
        className="bg-[#C8A96A] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
      >
        Get Your Interior Quote
      </button>

      <p className="text-sm text-gray-500 mt-2">
        Free consultation • No hidden costs • Bangalore experts
      </p>
    </div>

  </div>
</section>
{/* SERVICES */}


      {/* TESTIMONIALS */}
<section id="testimonials" className="py-20 bg-[#F8F5F0]">
  <div className="max-w-6xl mx-auto px-4">

    <h2 className="text-3xl font-bold text-center mb-4">
      What Our Clients Say
    </h2>

    <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
      Real experiences from homeowners across Bangalore who trusted Denova Creations for their interiors.
    </p>
    <p className="text-center mt-6 mb-6 text-lg md:text-xl font-semibold text-[#1A1A1A]">
  Trusted by <span className="text-[#C8A96A] font-bold">100+</span> homeowners across Bangalore
</p>
<p className="text-sm text-gray-500 text-center mb-4">
  ⭐ 4.8 Rating • Based on 100+ Projects
</p>

    <div className="grid md:grid-cols-3 gap-6">

      {/* CARD 1 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300">
        <SafeImage 
          src="/images/client1.webp" 
          alt="2BHK Interior Project Bangalore"
        />
        <div className="p-5 text-left">
          <p className="text-[#C8A96A] text-sm mb-2">★★★★★</p>
          <p className="text-xs text-gray-500 mb-1 tracking-wide">
            2BHK • Whitefield • ₹4.5 Lakhs
            </p>
          <p className="text-sm text-gray-600 mb-3 leading-relaxed">            
            Completed in 40 days without any delays. Pricing was transparent and final result matched exactly what was promised.
          </p>
          <p className="font-semibold">Vinod</p>
<p className="text-xs text-green-600 mt-1 leading-relaxed">
  ✔ Verified Client &nbsp;|&nbsp; ✔ Project Completed &nbsp;|&nbsp; ✔ On-Time Delivery
</p>
        </div>
      </div>

      {/* CARD 2 */}
<div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300">
  <SafeImage 
    src="/images/client2.webp" 
    alt="3BHK Interior Project Bangalore"
  />
  <div className="p-5 text-left">

    {/* Stars */}
    <p className="text-[#C8A96A] text-sm mb-2">★★★★★</p>

    {/* Project Details */}
    <p className="text-xs text-gray-500 mb-1 tracking-wide">
      3BHK • Sarjapur • ₹6.5 Lakhs
    </p>

    {/* Testimonial */}
    <p className="text-sm text-gray-600 mb-3 leading-relaxed">
      Pricing was completely transparent with no hidden costs. The material quality was excellent and the team handled everything professionally from start to finish.
    </p>

    {/* Name */}
    <p className="font-semibold">Harish</p>

    {/* Trust Badges */}
    <p className="text-xs text-green-600 mt-1 leading-relaxed">
      ✔ Verified Client &nbsp;|&nbsp; ✔ Project Completed &nbsp;|&nbsp; ✔ On-Time Delivery
    </p>

  </div>
</div>

      {/* CARD 3 */}
<div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300">
  <SafeImage 
    src="/images/client3.webp" 
    alt="Home Renovation Bangalore"
  />
  <div className="p-5 text-left">

    {/* Stars */}
    <p className="text-[#C8A96A] text-sm mb-2">★★★★★</p>

    {/* Project Details */}
    <p className="text-xs text-gray-500 mb-1 tracking-wide">
      Renovation • Electronic City • ₹3.8 Lakhs
    </p>

    {/* Testimonial */}
    <p className="text-sm text-gray-600 mb-3 leading-relaxed">
      The renovation was executed exactly as planned. Design matched our expectations and everything stayed within budget without any surprises.
    </p>

    {/* Name */}
    <p className="font-semibold">Srinath</p>

    {/* Trust Badges */}
    <p className="text-xs text-green-600 mt-1 leading-relaxed">
      ✔ Verified Client &nbsp;|&nbsp; ✔ Project Completed &nbsp;|&nbsp; ✔ On-Time Delivery
    </p>
    <p className="text-xs text-gray-400 mt-2">
  Limited slots available this month
</p>

  </div>
</div>

    </div>

  </div>
</section>
 {/* TESTIMONIALS */}

 {/* CTA */}
<div className="text-center mt-12">
  <button
    onClick={scrollToForm}
    className="bg-[#C8A96A] px-6 py-3 rounded-lg font-semibold"
  >
    Get Similar Interior Design for Your Home
  </button>
  <p className="text-sm text-gray-500 mt-2 mb-10">  
     Free consultation • No hidden costs • Bangalore based team  
     </p>
</div>
    </>
  );  
};
export default AdsLanding;