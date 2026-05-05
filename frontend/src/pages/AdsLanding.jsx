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

    // 🔥 Fire GTM event BEFORE redirect
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "lead_conversion"
});

// Then redirect
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

      <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
        Premium Interior Design for Modern Homes in Bangalore
      </h1>

      <p className="mt-3 text-xl font-semibold text-[#C8A96A] max-w-2xl">
       Complete home interiors designed for functionality, aesthetics, and long-term living.
      </p>

      <p className="mt-4 text-lg text-gray-200 max-w-2xl">
        For homeowners planning quality interiors with structured execution.
      </p>
      
     {/* TRUST LINE */}
<p className="mt-4 text-sm text-gray-300">
  Trusted by homeowners across Bangalore for complete interior design & execution, with 100+ homes delivered
  <br />
  End-to-End Execution &nbsp;•&nbsp; Quality Materials &nbsp;•&nbsp; On-Time Delivery
</p>

      {/* CTA */}
      <button
        onClick={scrollToForm}
        className="mt-6 bg-[#C8A96A] px-8 py-3 rounded-lg font-semibold text-black hover:opacity-90 transition"
      >
        Get Free Interior Consultation
      </button>

      {/* SECONDARY CTA */}
      <a 
        href="https://wa.me/919164011181?text=Hi, I am looking for interior design for my home in Bangalore. My budget is above ₹3L. Please share details."
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-3 text-sm text-green-400 hover:text-green-300 transition"
      >
        📞 Talk to a Designer on WhatsApp
      </a>

    </div>

    {/*HERO SECTION FORM SECTION STARTS*/}
    <form
      id="leadForm"
      onSubmit={handleSubmit}
      className="bg-white/95 backdrop-blur-lg p-6 md:p-7 rounded-xl shadow-2xl border border-white/30 text-black flex flex-col gap-4"
      >

      <h2 className="text-lg font-semibold">
        Get Free Interior Consultation for Your Home
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
  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8A96A]"
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
  pattern="[6-9]{1}[0-9]{9}"
  required 
  onChange={handleChange} 
  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8A96A]"
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
  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8A96A]"
/>
{errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}


{/* PROPERTY TYPE */}
<label htmlFor="propertyType" className="sr-only">Property Type</label>
<select 
  id="propertyType"
  name="propertyType"
  value={form.propertyType}
  onChange={handleChange} 
  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8A96A]"
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
  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8A96A]"
/>
{errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}  


{/* POSSESSION */}
<label htmlFor="possession" className="sr-only">Possession</label>
<select
  id="possession"
  name="possession"
  value={form.possession}
  onChange={handleChange}
  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8A96A]"
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
  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8A96A]"
  required
>
  <option value="">Select Budget</option>
  <option value="3.5-5L">₹3.5–5 Lakhs</option>
  <option value="5-10L">₹5–10 Lakhs</option>
  <option value="10-20L">₹10–20 Lakhs</option>
  <option value="20L+">₹20 Lakhs+</option>
</select>

{/* PREMIUM POSITIONING LINE */}
<p className="text-xs text-gray-600 font-medium text-center">
  Serving premium residential projects across Bangalore
</p>

      {/* CTA BUTTON */}
      <button
  type="submit"
  disabled={!isFormValid || loading}
  className={`py-3 rounded-lg font-semibold transition ${
   !isFormValid
  ? "bg-gray-300 cursor-not-allowed text-black"
  : "bg-[#C8A96A] text-black hover:brightness-90 shadow-md"
  }`}
>
        {loading ? "Submitting..." : "Get Free Interior Consultation"}
      </button>

      {/* TRUST TEXT */}
      <div className="mt-2 space-y-2 text-center">

  <p className="text-sm text-gray-700 font-medium">
    Our senior designer will call you within 30 minutes to understand your requirements.
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

 {/* HERO SECTION FORM SECTION ENDS */}

 {/* SERVICES */}
<section id="services" className="py-20 bg-gradient-to-b from-white to-[#F9F7F2]">
  <div className="max-w-6xl mx-auto px-4">

    {/* HEADING */}
    <h2 className="text-3xl font-bold text-center mb-4">
    Complete Home Interior Execution for Flats & Villas in Bangalore
    </h2>

    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      End-to-end design, planning, and execution — built for homeowners seeking quality, clarity, and long-term value.
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
            Complete Home Interiors
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            End-to-end interior design and execution — from layout planning to final handover with full accountability.
          </p>
          <p className="text-xs text-[#C8A96A] font-semibold mt-2 tracking-wide">
  TURNKEY EXECUTION
</p>
          
            
               <p className="text-[#C8A96A] font-semibold text-sm mt-2">
  Explore This Execution →
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
            Kitchen & Storage Systems
          </h3>
          <p className="text-sm text-gray-600 mb-3">
           Modular kitchens and storage solutions designed as part of a complete home interior plan.
          </p>
          <p className="text-[#C8A96A] font-semibold text-sm mt-2">
  Explore This Execution →
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
           Space Planning & Furniture
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            Smart layouts and custom furniture tailored to your lifestyle and space requirements.
          </p>
          <p className="text-[#C8A96A] font-semibold text-sm mt-2">
  Explore This Execution →
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
           Renovation & Upgrades
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            Structured renovation solutions to transform existing spaces with modern design and functionality.
          </p>
          <p className="text-[#C8A96A] font-semibold text-sm mt-2">
  Explore This Execution →
</p>

          
        </div>
      </div>

    </div>

    {/* SECTION CTA */}
    <div className="text-center mt-16">
      
      <button
        onClick={scrollToForm}
        className="bg-[#C8A96A] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
      >
       Get Free Design Consultation
      </button>
      <p className="text-sm text-gray-600 text-center mt-10">
  Projects typically start from ₹5 Lakhs onwards
</p>

      <p className="text-sm text-gray-500 mt-3">
       Trusted execution • Transparent pricing • Dedicated project handling
      </p>
    </div>

  </div>
</section>
{/* SERVICES END*/}

{/* WHY CHOOSE US */}
<section className="bg-gradient-to-b from-[#FAF7F2] to-white PY-20">
  <div className="max-w-6xl mx-auto px-4 text-center">

    {/* HEADING */}
    <h2 className="text-3xl md:text-4xl font-bold">
      Why Homeowners Trust Denova Creations
    </h2>

    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
      We focus on structured execution, transparent processes, and delivering interiors that are built to last — not just look good.
    </p>

    {/* GRID */}
    <div className="mt-12 grid md:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
        <h3 className="font-semibold text-lg mb-4">
          End-to-End Project Responsibility
        </h3>
        <p className="text-sm text-gray-700">
          From design to execution, everything is handled under one system — no multiple vendors, no confusion.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
        <h3 className="font-semibold text-lg mb-4">
          Structured Planning & Execution
        </h3>
        <p className="text-sm text-gray-700">
          Detailed planning, timelines, and execution flow ensure your project progresses smoothly without delays.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
        <h3 className="font-semibold text-lg mb-4">
          Transparent Pricing System
        </h3>
        <p className="text-sm text-gray-700">
          No hidden costs or last-minute surprises — you know exactly what you're investing in from the start.
        </p>
      </div>

      {/* CARD 4 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
        <h3 className="font-semibold text-lg mb-4">
          Dedicated Project Supervision
        </h3>
        <p className="text-sm text-gray-700">
          Every project is monitored closely to maintain quality, timelines, and execution standards.
        </p>
      </div>

      {/* CARD 5 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition text-left">
        <h3 className="font-semibold text-lg mb-4">
          Premium Materials & Finishing
        </h3>
        <p className="text-sm text-gray-700">
          We use reliable materials and processes to ensure long-term durability and a refined finish.
        </p>
      </div>

      {/* CARD 6 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition text-left">
        <h3 className="font-semibold text-lg mb-4">
          Designs That Work in Real Life
        </h3>
        <p className="text-sm text-gray-700">
          Our interiors are built for everyday living — practical, functional, and aligned with your lifestyle.
        </p>
      </div>

    </div>

    {/* CTA */}
    <div className="mt-16">
      <button
        onClick={scrollToForm}
        className="bg-[#C8A96A] px-6 py-3 rounded-lg font-semibold text-black hover:opacity-90 transition shadow-md"
      >
        Get Free Design Consultation
      </button>

      

      <p className="text-sm text-gray-500 mt-3">
        Trusted by homeowners across Bangalore for complete interior execution
      </p>
      <p className="text-xs text-gray-500 mt-3">
  100+ homes delivered • Transparent pricing • Bangalore-based execution team
</p>
    </div>

  </div>
</section>
{/* WHY CHOOSE US ENDS */}

 {/* SHOWCASE / PORTFOLIO */}
<section id="portfolio" className="py-20 bg-gradient-to-b from-white to-[#F8F5F0]">

  <div className="max-w-6xl mx-auto px-4">

    {/* HEADING */}
    <h2 className="text-3xl font-bold text-center mb-4">
      Our Completed Interior Projects in Bangalore
    </h2>

    <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
      Real homes designed and executed across Bangalore — tailored for different budgets, layouts, and lifestyle needs.
    </p>

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <div className="group cursor-pointer" onClick={scrollToForm}>
        <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl group-hover:shadow-xl transition duration-300">
          <SafeImage 
            src="/images/living1.webp" 
            alt="2BHK Full Home Interior Whitefield Bangalore"
            priority
          />
        </div>
        <div className="mt-3">
          <p className="text-sm font-semibold text-gray-800">
            2BHK Full Home Interior • Whitefield
          </p>
          <p className="text-sm text-gray-600">
            Living room, kitchen, wardrobes & TV unit execution
          </p>
          <p className="text-xs text-gray-500 mt-1">
            ₹4–5 Lakhs • 45 Days Delivery
          </p>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="group cursor-pointer" onClick={scrollToForm}>
        <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl group-hover:shadow-xl transition duration-300">
          <SafeImage 
            src="/images/kitchen1.webp" 
            alt="Modular Kitchen Interior Sarjapur Bangalore"
          />
        </div>
        <div className="mt-3">
          <p className="text-sm font-semibold text-gray-800">
            Modular Kitchen • Sarjapur
          </p>
          <p className="text-sm text-gray-600">
            Custom kitchen with storage optimization & premium finishes
          </p>
          <p className="text-xs text-gray-500 mt-1">
            ₹3–4 Lakhs • 30 Days Delivery
          </p>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="group cursor-pointer" onClick={scrollToForm}>
        <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl group-hover:shadow-xl transition duration-300">
          <SafeImage 
            src="/images/bedroom1.webp" 
            alt="Bedroom Interior Bangalore Apartment"
          />
        </div>
        <div className="mt-3">
          <p className="text-sm font-semibold text-gray-800">
            Bedroom + Wardrobe • Bangalore
          </p>
          <p className="text-sm text-gray-600">
            Functional wardrobe design with optimized storage
          </p>
          <p className="text-xs text-gray-500 mt-1">
            ₹2.5–3.5 Lakhs • 25 Days Delivery
          </p>
        </div>
      </div>

      {/* CARD 4 */}
      <div className="group cursor-pointer" onClick={scrollToForm}>
        <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl group-hover:shadow-xl transition duration-300">
          <SafeImage 
            src="/images/living2.webp" 
            alt="3BHK Living Room HSR Layout Bangalore"
          />
        </div>
        <div className="mt-3">
          <p className="text-sm font-semibold text-gray-800">
            3BHK Living Space • HSR Layout
          </p>
          <p className="text-sm text-gray-600">
            Living room, false ceiling & TV unit execution
          </p>
          <p className="text-xs text-gray-500 mt-1">
            ₹6–8 Lakhs • 50 Days Delivery
          </p>
        </div>
      </div>

      {/* CARD 5 */}
      <div className="group cursor-pointer" onClick={scrollToForm}>
        <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl group-hover:shadow-xl transition duration-300">
          <SafeImage 
            src="/images/kitchen2.webp" 
            alt="Contemporary Kitchen Electronic City Bangalore"
          />
        </div>
        <div className="mt-3">
          <p className="text-sm font-semibold text-gray-800">
            Contemporary Kitchen • Electronic City
          </p>
          <p className="text-sm text-gray-600">
            Modern kitchen with durable materials & sleek finishes
          </p>
          <p className="text-xs text-gray-500 mt-1">
            ₹3.5–5 Lakhs • 28 Days Delivery
          </p>
        </div>
      </div>

      {/* CARD 6 */}
      <div className="group cursor-pointer" onClick={scrollToForm}>
        <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl group-hover:shadow-xl transition duration-300">
          <SafeImage 
            src="/images/bedroom2.webp" 
            alt="Minimal Bedroom Bangalore Apartment"
          />
        </div>
        <div className="mt-3">
          <p className="text-sm font-semibold text-gray-800">
            Minimal Bedroom • Apartment
          </p>
          <p className="text-sm text-gray-600">
            Clean, functional bedroom design with storage solutions
          </p>
          <p className="text-xs text-gray-500 mt-1">
            ₹1.8–3 Lakhs • 20 Days Delivery
          </p>
        </div>
      </div>

    </div>

    {/* CTA */}
    <div className="text-center mt-16">
      <button
        onClick={scrollToForm}
        className="bg-[#C8A96A] px-6 py-3 rounded-lg font-semibold text-black hover:opacity-90 transition shadow-md"
      >
        Get Free Design Consultation
      </button>

      <p className="text-sm text-gray-500 mt-2">
        Real homes • Transparent execution • Trusted across Bangalore
      </p>
    </div>

  </div>
</section>
{/* SHOWCASE /PORTFOLIO ENDS */}


                    
          {/* PRICING SECTION */}
<section id="pricing" className="py-20 bg-gradient-to-b from-[#F8F5F0] to-white">

  <div className="max-w-6xl mx-auto px-4 text-center">

    {/* HEADING */}
    <h2 className="text-3xl font-bold mb-4">
      Interior Design Pricing Guide in Bangalore
    </h2>

    <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
      Understand interior costs based on scope, customization level, and execution quality.
    </p>

    <p className="text-sm text-gray-500 mb-12">
      Most projects typically start from ₹3.5 Lakhs onwards
    </p>

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white">
        <h3 className="font-semibold text-lg mb-2">
          Essential Interiors
        </h3>

        <p className="text-2xl font-bold text-[#C8A96A] mb-3">
          ₹3.5L – ₹5L
        </p>

        <p className="text-sm text-gray-600 mb-4">
          Ideal for compact homes with essential interiors and functional design.
        </p>

        <ul className="text-sm text-gray-600 space-y-2 mb-6">
          <li>• Modular kitchen</li>
          <li>• Basic wardrobes</li>
          <li>• Space-optimized layouts</li>
        </ul>

        <button
          onClick={scrollToForm}
          className="bg-[#C8A96A] px-4 py-2 rounded-lg font-semibold text-black hover:opacity-90 transition"
        >
          Get Free Consultation
        </button>
      </div>

      {/* CARD 2 - HIGHLIGHT */}
      <div className="border-2 border-[#C8A96A] rounded-xl p-6 shadow-lg bg-white scale-105">

        <p className="text-xs font-semibold text-[#C8A96A] mb-2">
          MOST POPULAR
        </p>

        <h3 className="font-semibold text-lg mb-2">
          Complete Home Interiors
        </h3>

        <p className="text-2xl font-bold text-[#C8A96A] mb-3">
          ₹5L – ₹10L
        </p>

        <p className="text-sm text-gray-600 mb-4">
          Full home interior execution with balanced design and customization.
        </p>

        <ul className="text-sm text-gray-600 space-y-2 mb-6">
          <li>• Kitchen + wardrobes</li>
          <li>• TV unit & storage</li>
          <li>• End-to-end execution</li>
        </ul>

        <button
          onClick={scrollToForm}
          className="bg-[#C8A96A] px-5 py-2 rounded-lg font-semibold text-black hover:opacity-90 transition"
        >
          Get Free Consultation
        </button>
      </div>

      {/* CARD 3 */}
      <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white">
        <h3 className="font-semibold text-lg mb-2">
          Premium Custom Interiors
        </h3>

        <p className="text-2xl font-bold text-[#C8A96A] mb-3">
          ₹10L+
        </p>

        <p className="text-sm text-gray-600 mb-4">
          High-end interiors with custom design, premium materials, and detailing.
        </p>

        <ul className="text-sm text-gray-600 space-y-2 mb-6">
          <li>• Custom furniture</li>
          <li>• Premium finishes</li>
          <li>• Advanced detailing</li>
        </ul>

        <button
          onClick={scrollToForm}
          className="bg-[#C8A96A] px-4 py-2 rounded-lg font-semibold text-black hover:opacity-90 transition"
        >
          Get Free Consultation
        </button>
      </div>

    </div>

    {/* TRUST LINE */}
    <p className="text-sm text-gray-500 mt-10">
      Transparent pricing • No hidden costs • Designed for Bangalore homes
    </p>

  </div>
</section>
{/* PRICING SECTION ENDS */}

     {/* PROCESS SECTION */}
<section id="process" className="py-20 bg-gradient-to-b from-white to-[#F8F5F0]">

  <div className="max-w-6xl mx-auto px-4 text-center">

    {/* HEADING */}
    <h2 className="text-3xl font-bold mb-4">
      Our Interior Design Process — Simple, Structured & Transparent
    </h2>

    <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
      From consultation to final handover, we follow a clear process to ensure quality, timelines, and complete execution without confusion.
    </p>

    {/* PROCESS STEPS */}
    <div className="grid md:grid-cols-4 gap-8 text-left">

      {/* STEP 1 */}
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
        <p className="text-[#C8A96A] font-bold text-lg mb-2">01</p>
        <h3 className="font-semibold text-lg mb-2">
          Consultation & Requirement Understanding
        </h3>
        <p className="text-sm text-gray-600">
          We understand your space, budget, and requirements to plan the right design direction.
        </p>
      </div>

      {/* STEP 2 */}
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
        <p className="text-[#C8A96A] font-bold text-lg mb-2">02</p>
        <h3 className="font-semibold text-lg mb-2">
          Design & Space Planning
        </h3>
        <p className="text-sm text-gray-600">
          Layout planning, material selection, and design concepts tailored to your lifestyle and space.
        </p>
      </div>

      {/* STEP 3 */}
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
        <p className="text-[#C8A96A] font-bold text-lg mb-2">03</p>
        <h3 className="font-semibold text-lg mb-2">
          Execution & Project Management
        </h3>
        <p className="text-sm text-gray-600">
          End-to-end execution with site supervision, quality checks, and timeline tracking.
        </p>
      </div>

      {/* STEP 4 */}
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
        <p className="text-[#C8A96A] font-bold text-lg mb-2">04</p>
        <h3 className="font-semibold text-lg mb-2">
          Final Delivery & Handover
        </h3>
        <p className="text-sm text-gray-600">
          Complete project handover with finishing checks and ready-to-move-in interiors.
        </p>
      </div>

    </div>

    {/* CTA */}
    <div className="text-center mt-12">
      <button
        onClick={scrollToForm}
        className="bg-[#C8A96A] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
      >
        Start Your Interior Design Journey
      </button>

      <p className="text-sm text-gray-500 mt-2">
        Clear process • On-time delivery • Professional execution
      </p>
    </div>

  </div>
</section>
{/* PROCESS SECTION ENDS */}


      
{/* TESTIMONIALS */}
<section id="testimonials" className="py-20 bg-gradient-to-b from-[#F8F5F0] to-white">
  <div className="max-w-6xl mx-auto px-4">

    {/* HEADING */}
    <h2 className="text-3xl font-bold text-center mb-4">
      What Bangalore Homeowners Say About Our Work
    </h2>

    <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
      Real experiences from homeowners across Bangalore who trusted Denova Creations for their interiors.
    </p>

    {/* TRUST STATS */}
    <p className="text-center mt-4 text-lg md:text-xl font-semibold text-[#1A1A1A]">
      Trusted by <span className="text-[#C8A96A] font-bold">100+</span> homeowners across Bangalore
    </p>

    <p className="text-sm text-gray-500 text-center mb-12">
      ⭐ 4.8 Rating • Based on 100+ Projects
    </p>

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-6">

      {/* CARD 1 */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300">
        <SafeImage 
          src="/images/client1.webp" 
          alt="2BHK Interior Project Whitefield Bangalore"
        />
        <div className="p-5 text-left">
          <p className="text-[#C8A96A] text-sm mb-2">★★★★★</p>

          <p className="text-xs text-gray-500 mb-1 tracking-wide">
            2BHK • Whitefield • ₹4.5 Lakhs
          </p>

          <p className="text-sm text-gray-600 mb-3 leading-relaxed">
            Completed in 40 days without delays. Pricing was transparent and the final result matched what was promised.
          </p>

          <p className="font-semibold">Rakesh</p>

          <p className="text-xs text-green-600 mt-1 leading-relaxed">
            ✔ Verified Client &nbsp;|&nbsp; ✔ Project Completed &nbsp;|&nbsp; ✔ On-Time Delivery
          </p>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300">
        <SafeImage 
          src="/images/client2.webp" 
          alt="3BHK Interior Project Sarjapur Bangalore"
        />
        <div className="p-5 text-left">

          <p className="text-[#C8A96A] text-sm mb-2">★★★★★</p>

          <p className="text-xs text-gray-500 mb-1 tracking-wide">
            3BHK • Sarjapur • ₹6.5 Lakhs
          </p>

          <p className="text-sm text-gray-600 mb-3 leading-relaxed">
            Pricing was transparent with no hidden costs. Material quality was excellent and execution was handled professionally.
          </p>

          <p className="font-semibold">Harish</p>

          <p className="text-xs text-green-600 mt-1 leading-relaxed">
            ✔ Verified Client &nbsp;|&nbsp; ✔ Project Completed &nbsp;|&nbsp; ✔ On-Time Delivery
          </p>

        </div>
      </div>

      {/* CARD 3 */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300">
        <SafeImage 
          src="/images/client3.webp" 
          alt="Home Renovation Electronic City Bangalore"
        />
        <div className="p-5 text-left">

          <p className="text-[#C8A96A] text-sm mb-2">★★★★★</p>

          <p className="text-xs text-gray-500 mb-1 tracking-wide">
            Renovation • Electronic City • ₹3.8 Lakhs
          </p>

          <p className="text-sm text-gray-600 mb-3 leading-relaxed">
            The renovation was executed exactly as planned. Design met expectations and everything stayed within budget.
          </p>

          <p className="font-semibold">Srinath</p>

          <p className="text-xs text-green-600 mt-1 leading-relaxed">
            ✔ Verified Client &nbsp;|&nbsp; ✔ Project Completed &nbsp;|&nbsp; ✔ On-Time Delivery
          </p>

        </div>
      </div>

    </div>

    {/* CTA */}
    <div className="text-center mt-12">
      <button
        onClick={scrollToForm}
        className="bg-[#C8A96A] px-6 py-3 rounded-lg font-semibold text-black hover:opacity-90 transition shadow-md"
      >
        Get Free Design Consultation
      </button>

      <p className="text-sm text-gray-500 mt-2">
        Trusted by 100+ homeowners • Transparent pricing • On-time delivery
      </p>
    </div>

  </div>
</section>
{/* TESTIMONIALS ENDS */}

{/* FAQ SECTION (SEO OPTIMIZED) */}
<section className="py-20 bg-white">

  <div className="max-w-4xl mx-auto px-4">

    {/* HEADING */}
    <h2 className="text-3xl font-bold text-center mb-6">
      Interior Design FAQs — Bangalore Homes
    </h2>

    <p className="text-center text-gray-600 mb-12">
      Answers to common questions about interior design cost, process, and execution in Bangalore.
    </p>

    {/* FAQ LIST */}
    <div className="space-y-6 text-left">

      {/* Q1 */}
      <div>
        <h3 className="font-semibold text-lg">
          What is the cost of home interiors in Bangalore?
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          Interior design cost in Bangalore depends on home size, materials, and customization. For most 2BHK and 3BHK homes, complete interiors typically start from ₹3.5 Lakhs and increase based on scope and design requirements.
        </p>
      </div>

      {/* Q2 */}
      <div>
        <h3 className="font-semibold text-lg">
          How much does a 2BHK interior cost in Bangalore?
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          A 2BHK interior in Bangalore usually costs between ₹4 Lakhs to ₹8 Lakhs depending on the level of customization, materials, and execution quality.
        </p>
      </div>

      {/* Q3 */}
      <div>
        <h3 className="font-semibold text-lg">
          Do you provide complete home interior execution in Bangalore?
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          Yes, we provide end-to-end interior solutions including design, planning, material selection, and full execution until final handover.
        </p>
      </div>

      {/* Q4 */}
      <div>
        <h3 className="font-semibold text-lg">
          How long does it take to complete interior work for a home?
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          Most home interior projects in Bangalore are completed within 30 to 60 days depending on the size of the home and the scope of work.
        </p>
      </div>

      {/* Q5 */}
      <div>
        <h3 className="font-semibold text-lg">
          Are there any hidden costs in interior design projects?
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          No, we follow a transparent pricing model where all costs are discussed and finalized before starting the project.
        </p>
      </div>

      {/* Q6 */}
      <div>
        <h3 className="font-semibold text-lg">
          Can I customize my interior design based on my budget?
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          Yes, every interior project is customized based on your budget, space, and lifestyle requirements to ensure the best balance between design and functionality.
        </p>
      </div>

    </div>

    {/* CTA */}
    <div className="text-center mt-10">
      <button
        onClick={scrollToForm}
        className="bg-[#C8A96A] px-6 py-3 rounded-lg font-semibold text-black hover:opacity-90 transition"
      >
        Get Free Interior Consultation
      </button>
    </div>

  </div>
</section>
{/* FAQ SECTION (SEO OPTIMIZED)ENDS */}

{/* FORM SECTION */}
<section id="contact" className="py-20 bg-white">

  <div className="max-w-4xl mx-auto px-4 text-center">

    {/* HEADING */}
    <h2 className="text-3xl font-bold mb-3">
      Get Free Interior Consultation for Your Home
    </h2>

    {/* SUBLINE */}
    <p className="text-sm text-gray-600 mb-2">
      Speak with our design expert to plan your home interiors with clarity on budget, design, and execution.
    </p>

    {/* FILTER LINE */}
    <p className="text-xs text-gray-500 mb-8">
      Suitable for homeowners planning interior projects starting from ₹3.5 Lakhs onwards
    </p>

    {/* FORM BOX */}
    <form
      id="leadForm"
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 p-6 md:p-8 rounded-xl shadow-md flex flex-col gap-4 max-w-md mx-auto text-left"
    >

      {/* NAME */}
      <input 
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        required
        onChange={handleChange}
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8A96A]"
      />

      {/* PHONE */}
      <input 
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        maxLength={10}
        required
        onChange={handleChange}
        pattern="[6-9]{1}[0-9]{9}"
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8A96A]"
      />

      {/* EMAIL */}
      <input 
        type="email"
        name="email"
        placeholder="Email ID"
        value={form.email}
        required
        onChange={handleChange}
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8A96A]"
      />

      {/* PROPERTY TYPE */}
      <select
        name="propertyType"
        value={form.propertyType}
        onChange={handleChange}
        required
        className="p-3 border border-gray-300 rounded-lg"
      >
        <option value="">Select Property Type</option>
        <option value="1 BHK">1 BHK</option>
        <option value="2 BHK">2 BHK</option>
        <option value="3 BHK">3 BHK</option>
        <option value="3+ BHK">3+ BHK</option>
        <option value="Villa">Villa</option>
      </select>

      {/* PINCODE */}
      <input
        type="tel"
        name="pincode"
        placeholder="Pincode"
        value={form.pincode}
        maxLength={6}
        required
        onChange={handleChange}
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8A96A]"
      />

      {/* POSSESSION */}
      <select
        name="possession"
        value={form.possession}
        onChange={handleChange}
        required
        className="p-3 border border-gray-300 rounded-lg"
      >
        <option value="">Select Possession</option>
        <option value="Immediate">Immediate</option>
        <option value="0-3 Months">0-3 Months</option>
        <option value="3-6 Months">3-6 Months</option>
        <option value="6+ Months">6+ Months</option>
      </select>

      {/* BUDGET */}
      <select
        name="budget"
        value={form.budget}
        onChange={handleChange}
        required
        className="p-3 border border-gray-300 rounded-lg"
      >
        <option value="">Select Budget</option>
        <option value="3.5-5L">₹3.5–5 Lakhs</option>
        <option value="5-10L">₹5–10 Lakhs</option>
        <option value="10-20L">₹10–20 Lakhs</option>
        <option value="20L+">₹20 Lakhs+</option>
      </select>

      {/* TRUST LINE */}
      <p className="text-xs text-gray-500 text-center">
        Trusted by 100+ homeowners across Bangalore
      </p>

      {/* CTA BUTTON */}
      <button
        type="submit"
        disabled={loading}
        className={`py-3 rounded-lg font-semibold transition ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[#C8A96A] text-black hover:opacity-90 shadow-md"
        }`}
      >
        {loading ? "Submitting..." : "Get Free Interior Consultation"}
      </button>

      {/* MICROCOPY */}
      <div className="text-center mt-2">
        <p className="text-sm text-gray-700 font-medium">
          Our senior designer will call you within 30 minutes to understand your requirements.
        </p>

        <p className="text-xs text-gray-500">
          No spam • 100% confidential • Bangalore-based team
        </p>
      </div>

    </form>

  </div>
</section>
{/* FORM SECTION ENDS */}


{/* FINAL CTA */}
<section className="py-20 bg-[#1A1A1A] text-white text-center">

  <div className="max-w-3xl mx-auto px-4">

    {/* HEADLINE */}
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Plan Your Home Interiors with Expert Guidance
    </h2>

    {/* SUBTEXT */}
    <p className="text-gray-300 mb-6">
      Get clarity on design, budget, and execution before you start your project — no guesswork, no confusion.
    </p>

    {/* TRUST LINE */}
    <p className="text-sm text-gray-400 mb-8">
      Trusted by 100+ homeowners across Bangalore • Transparent pricing • End-to-end execution
    </p>

    {/* BUTTON */}
    <button
      onClick={scrollToForm}
      className="bg-[#C8A96A] px-8 py-3 rounded-lg font-semibold text-black hover:opacity-90 transition shadow-md"
    >
      Get Free Interior Consultation
    </button>

  </div>

</section>
    </>
  );  
};
export default AdsLanding;