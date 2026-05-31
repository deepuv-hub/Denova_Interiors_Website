import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import logoPrimary from "@/assets/branding/logo-primary.png";
import {
  Sparkles,
  Star,
  Award,
  ShieldCheck,
  Clock,
  Compass,
  DollarSign,
  Users,
  PhoneCall,
  Calendar,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  ArrowRight,
  MapPin,
  Check
} from "lucide-react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby9SBHZXrLYiKlvRxaM8TaqICwB7VkWy_6T8B1WTkz_CXEBNTNYo9B_J1WxZlA9Ebxa/exec";

/* SAFE IMAGE - OPTIMIZED WITH DYNAMIC RATIO & SKELETON PREVENTING CLS */
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
      className="w-full overflow-hidden bg-stone-50 border border-[#E5DDD3]/40 rounded-xl"
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
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
        />
      ) : (
        <div className="flex items-center justify-center h-full text-stone-400 text-xs font-serif italic">
          Design Concept Preview
        </div>
      )}
    </div>
  );
};

const AdsLanding = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    pincode: "",
    possession: "",
    budget: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
    gclid: "",
    landing_page: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    const utmData = {
      utm_source: url.searchParams.get("utm_source") || localStorage.getItem("utm_source") || "",
      utm_medium: url.searchParams.get("utm_medium") || localStorage.getItem("utm_medium") || "",
      utm_campaign: url.searchParams.get("utm_campaign") || localStorage.getItem("utm_campaign") || "",
      utm_content: url.searchParams.get("utm_content") || localStorage.getItem("utm_content") || "",
      utm_term: url.searchParams.get("utm_term") || localStorage.getItem("utm_term") || "",
      gclid: url.searchParams.get("gclid") || localStorage.getItem("gclid") || "",
    };

    Object.entries(utmData).forEach(([key, value]) => {
      if (value) {
        localStorage.setItem(key, value);
      }
    });

    setForm((prev) => ({
      ...prev,
      ...utmData,
      landing_page: window.location.href,
    }));
  }, []);

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

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

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
        mode: "no-cors",
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
          utm_source: localStorage.getItem("utm_source") || "",
          utm_medium: localStorage.getItem("utm_medium") || "",
          utm_campaign: localStorage.getItem("utm_campaign") || "",
          utm_content: localStorage.getItem("utm_content") || "",
          utm_term: localStorage.getItem("utm_term") || "",
          gclid: localStorage.getItem("gclid") || "",
          landing_page: localStorage.getItem("landing_page") || window.location.href,
          timestamp: new Date().toISOString(),
        }),
      });

      // GTM EVENT
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "lead_conversion"
      });

      // GOOGLE ADS DIRECT CONVERSION
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: 'AW-11303451952/63-FCIP1rZ8cELD6840q'
        });
      }

      // REDIRECT AFTER DELAY
      setTimeout(() => {
        window.location.href = "/thank-you";
      }, 1200);

    } catch (err) {
      console.error("Submission issue:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#FAF8F5] text-stone-800 antialiased min-h-screen">
      <Helmet>
        <title>Interior Design Consultation in Bangalore | Denova Creations</title>
        <meta
          name="description"
          content="Book a free interior design consultation in Bangalore with Denova Creations for modular kitchens, wardrobes and complete home interiors."
        />
        <link rel="canonical" href="https://denovacreations.com/lp/interior-design-bangalore" />
        <meta property="og:title" content="Interior Design Consultation in Bangalore | Denova Creations" />
        <meta
          property="og:description"
          content="Book a free interior design consultation in Bangalore with Denova Creations for modular kitchens, wardrobes and complete home interiors."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://denovacreations.com/lp/interior-design-bangalore" />
        <meta property="og:image" content="https://denovacreations.com/images/landingpagehero.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Interior Design Consultation in Bangalore | Denova Creations" />
        <meta
          name="twitter:description"
          content="Book a free interior design consultation in Bangalore with Denova Creations for modular kitchens, wardrobes and complete home interiors."
        />
        <meta name="twitter:image" content="https://denovacreations.com/images/landingpagehero.webp" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      {/* LUXURY MINIMALIST HEADER */}
      <header className="absolute top-0 left-0 right-0 z-30 bg-transparent">
        <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logoPrimary}
              alt="Denova Creations Logo"
              className="h-9 md:h-11 w-auto object-contain brightness-0 invert"
              loading="eager"
            />
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="tel:+919164466606"
              className="hidden sm:flex items-center gap-2 text-white font-medium hover:text-[#E7D7C9] transition text-sm bg-[#0F3B2E]/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
            >
              <PhoneCall className="w-4 h-4 text-[#E7D7C9]" />
              <span>+91 91644 66606</span>
            </a>
            <button
              onClick={scrollToForm}
              className="bg-[#E7D7C9] hover:bg-white text-[#0F3B2E] text-xs md:text-sm font-semibold px-4 md:px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Book Consult
            </button>
          </div>
        </div>
      </header>

      {/* STUNNING HERO SECTION */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        {/* BACKGROUND IMAGE - PRELOADED ABOVE THE FOLD */}
        <img
          src="/images/landingpagehero.webp"
          alt="Premium Home Interiors in Bangalore by Denova Creations"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width={1800}
          height={1200}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* LUXURIOUS DEEP EMERALD TINT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071F19]/90 via-[#0A2D25]/75 to-[#071F19]/85 md:to-[#071F19]/50"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full grid lg:grid-cols-12 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 text-white text-left">
            {/* TAGLINE */}
            <div className="inline-flex items-center gap-2 bg-[#E7D7C9]/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E7D7C9]/20 text-[#E7D7C9] text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bengaluru's Premium Interior Brand</span>
            </div>

            {/* MAIN H1 - SEO CONVERSION TARGETED */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight tracking-tight">
              Premium Interior Design for Modern Homes in Bangalore
            </h1>

            {/* SUBTITLE */}
            <p className="mt-6 text-lg md:text-xl font-medium text-[#E7D7C9] max-w-2xl leading-relaxed">
              Complete home interiors designed for functionality, aesthetics, and long-term living.
            </p>

            <p className="mt-4 text-base text-stone-300 max-w-2xl leading-relaxed">
              For homeowners planning high-end luxury interiors with structured, transparent execution.
            </p>

            {/* TRUST SIGNALS */}
            <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white font-serif">100+</p>
                <p className="text-[10px] md:text-xs text-stone-400 uppercase tracking-widest font-semibold mt-1">Homes Delivered</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white font-serif">4.8★</p>
                <p className="text-[10px] md:text-xs text-stone-400 uppercase tracking-widest font-semibold mt-1">Google Rating</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white font-serif">10 Yr</p>
                <p className="text-[10px] md:text-xs text-stone-400 uppercase tracking-widest font-semibold mt-1">Material Warranty</p>
              </div>
            </div>

            <p className="mt-6 text-xs text-stone-400 italic">
              End-to-End Execution &nbsp;•&nbsp; 45 Days Delivery Guarantee &nbsp;•&nbsp; No Hidden Costs
            </p>

            {/* PRIMARY BUTTON ON MOBILE */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 lg:hidden">
              <button
                onClick={scrollToForm}
                className="bg-[#E7D7C9] hover:bg-white text-[#0F3B2E] px-8 py-3.5 rounded-lg font-bold text-sm uppercase tracking-wider shadow-lg transition duration-300 w-full sm:w-auto"
              >
                Get Free Interior Consultation
              </button>
            </div>
          </div>

          {/* RIGHT SIDE FORM (HERO CONVERSIONS CONSOLE) */}
          <div className="lg:col-span-5 w-full">
            <form
              id="leadForm"
              onSubmit={handleSubmit}
              className="bg-white/95 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20 text-[#0F3B2E] flex flex-col gap-4 w-full"
            >
              <div>
                <h2 className="text-lg md:text-xl font-bold font-serif leading-tight">
                  Get Free Design Proposal
                </h2>
                <p className="text-xs text-stone-600 mt-1">
                  Book a direct 1-on-1 session with our senior architect.
                </p>
              </div>

              {/* INPUT FIELDS */}
              <div className="flex flex-col gap-3">
                {/* NAME */}
                <div>
                  <label htmlFor="name" className="sr-only">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    required
                    onChange={handleChange}
                    className="w-full p-3 border border-stone-200 rounded-lg bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3B2E] focus:border-transparent text-sm transition duration-200 text-stone-800 placeholder-stone-400"
                  />
                  {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* PHONE */}
                <div>
                  <label htmlFor="phone" className="sr-only">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="10-Digit Phone Number"
                    value={form.phone}
                    maxLength={10}
                    pattern="[6-9]{1}[0-9]{9}"
                    required
                    onChange={handleChange}
                    className="w-full p-3 border border-stone-200 rounded-lg bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3B2E] focus:border-transparent text-sm transition duration-200 text-stone-800 placeholder-stone-400"
                  />
                  {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
                </div>

                {/* EMAIL */}
                <div>
                  <label htmlFor="email" className="sr-only">Email ID</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    required
                    onChange={handleChange}
                    className="w-full p-3 border border-stone-200 rounded-lg bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3B2E] focus:border-transparent text-sm transition duration-200 text-stone-800 placeholder-stone-400"
                  />
                  {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* PROPERTY TYPE */}
                <div>
                  <label htmlFor="propertyType" className="sr-only">Property Type</label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={form.propertyType}
                    onChange={handleChange}
                    className="w-full p-3 border border-stone-200 rounded-lg bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3B2E] focus:border-transparent text-sm transition duration-200 text-stone-800"
                    required
                  >
                    <option value="">Select Property Layout</option>
                    <option value="1 BHK">1 BHK Apartment</option>
                    <option value="2 BHK">2 BHK Apartment</option>
                    <option value="3 BHK">3 BHK Apartment</option>
                    <option value="3+ BHK">3+ BHK / Duplex</option>
                    <option value="Villa">Luxury Villa</option>
                  </select>
                </div>

                {/* PINCODE */}
                <div>
                  <label htmlFor="pincode" className="sr-only">Pincode</label>
                  <input
                    type="tel"
                    id="pincode"
                    name="pincode"
                    placeholder="Pincode in Bangalore"
                    value={form.pincode}
                    required
                    maxLength={6}
                    onChange={handleChange}
                    className="w-full p-3 border border-stone-200 rounded-lg bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3B2E] focus:border-transparent text-sm transition duration-200 text-stone-800 placeholder-stone-400"
                  />
                  {errors.pincode && <p className="text-red-600 text-xs mt-1">{errors.pincode}</p>}
                </div>

                {/* POSSESSION */}
                <div>
                  <label htmlFor="possession" className="sr-only">Possession</label>
                  <select
                    id="possession"
                    name="possession"
                    value={form.possession}
                    onChange={handleChange}
                    className="w-full p-3 border border-stone-200 rounded-lg bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3B2E] focus:border-transparent text-sm transition duration-200 text-stone-800"
                    required
                  >
                    <option value="">Expected Handover Time</option>
                    <option value="Immediate">Immediate / Move-in</option>
                    <option value="0-3 Months">Within 3 Months</option>
                    <option value="3-6 Months">3 to 6 Months</option>
                    <option value="6+ Months">More than 6 Months</option>
                  </select>
                </div>

                {/* BUDGET */}
                <div>
                  <label htmlFor="budget" className="sr-only">Budget</label>
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full p-3 border border-stone-200 rounded-lg bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3B2E] focus:border-transparent text-sm transition duration-200 text-stone-800"
                    required
                  >
                    <option value="">Expected Budget Range</option>
                    <option value="3.5-5L">₹3.5L – ₹5 Lakhs</option>
                    <option value="5-10L">₹5L – ₹10 Lakhs</option>
                    <option value="10-20L">₹10L – ₹20 Lakhs</option>
                    <option value="20L+">₹20 Lakhs+</option>
                  </select>
                </div>
              </div>

              {/* PREMIUM SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={!isFormValid || loading}
                className={`w-full py-3.5 rounded-lg font-bold text-sm tracking-wider uppercase shadow-md transition-all duration-300 transform active:scale-95 mt-2 ${!isFormValid || loading
                    ? "bg-stone-200 text-stone-400 cursor-not-allowed"
                    : "bg-[#0F3B2E] text-white hover:bg-[#154e3d] hover:shadow-lg"
                  }`}
              >
                {loading ? "Registering Request..." : "Request Free Design Consultation"}
              </button>

              {/* VERIFICATION AND TRUST PARAGRAPH */}
              <div className="space-y-2 text-center text-xs text-stone-500 border-t border-stone-100 pt-4 mt-1">
                <div className="flex items-center justify-center gap-1.5 text-stone-700 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#0F3B2E]" />
                  <span>Call back guaranteed within 30 minutes</span>
                </div>
                <p className="text-[10px] text-stone-400 leading-normal">
                  No Spam • 100% Secure • Fully Confidential
                </p>
                <p className="text-[9px] text-stone-400">
                  By submitting, you agree to our{" "}
                  <a href="/privacy-policy" className="underline hover:text-stone-600 transition">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 bg-gradient-to-b from-[#FAF8F5] to-white relative">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* SECTION HEADLINE */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#0F3B2E] tracking-widest uppercase bg-[#0F3B2E]/5 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Design Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0F3B2E]">
              Complete Home Interior Execution
            </h2>
            <div className="w-16 h-1 bg-[#E7D7C9] mx-auto mt-4 mb-3 rounded-full"></div>
            <p className="text-stone-600 text-base leading-relaxed">
              End-to-end design, planning, and execution — customized for Bengaluru homeowners seeking longevity, precision, and aesthetic balance.
            </p>
          </div>

          {/* GRID OF SERVICES */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* CARD 1 */}
            <div
              className="bg-white rounded-xl overflow-hidden border border-[#E5DDD3] shadow-[0_4px_25px_rgba(0,0,0,0.015)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)] hover:border-[#0F3B2E]/20 transition-all duration-300 cursor-pointer flex flex-col h-full group"
              onClick={scrollToForm}
            >
              <SafeImage
                src="/images/living2.webp"
                alt="Full Home Interior Design Bangalore"
              />
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#0F3B2E] tracking-wider uppercase bg-[#E7D7C9]/25 px-2.5 py-1 rounded-full mb-3 inline-block">
                    Full Execution
                  </span>
                  <h3 className="font-semibold font-serif text-lg text-[#0F3B2E] mb-2">
                    Complete Home Interiors
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    End-to-end interior design and architectural planning — from structural layout optimization to direct site handover.
                  </p>
                </div>
                <div className="text-xs font-bold text-[#0F3B2E] group-hover:text-[#154e3d] inline-flex items-center gap-1.5 transition mt-auto">
                  <span>Explore Execution</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition duration-200" />
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div
              className="bg-white rounded-xl overflow-hidden border border-[#E5DDD3] shadow-[0_4px_25px_rgba(0,0,0,0.015)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)] hover:border-[#0F3B2E]/20 transition-all duration-300 cursor-pointer flex flex-col h-full group"
              onClick={scrollToForm}
            >
              <SafeImage
                src="/images/kitchen3.webp"
                alt="Modular Kitchen Interior Design Bangalore"
              />
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#0F3B2E] tracking-wider uppercase bg-[#E7D7C9]/25 px-2.5 py-1 rounded-full mb-3 inline-block">
                    Modular Layouts
                  </span>
                  <h3 className="font-semibold font-serif text-lg text-[#0F3B2E] mb-2">
                    Kitchen & Storage Systems
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    Ergonomic modular kitchens, space-efficient smart pantries, and wardrobes meticulously configured for your storage patterns.
                  </p>
                </div>
                <div className="text-xs font-bold text-[#0F3B2E] group-hover:text-[#154e3d] inline-flex items-center gap-1.5 transition mt-auto">
                  <span>Explore Execution</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition duration-200" />
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div
              className="bg-white rounded-xl overflow-hidden border border-[#E5DDD3] shadow-[0_4px_25px_rgba(0,0,0,0.015)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)] hover:border-[#0F3B2E]/20 transition-all duration-300 cursor-pointer flex flex-col h-full group"
              onClick={scrollToForm}
            >
              <SafeImage
                src="/images/bedroom10.webp"
                alt="Wardrobe Interior Design Bangalore"
              />
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#0F3B2E] tracking-wider uppercase bg-[#E7D7C9]/25 px-2.5 py-1 rounded-full mb-3 inline-block">
                    Ergonomic Planning
                  </span>
                  <h3 className="font-semibold font-serif text-lg text-[#0F3B2E] mb-2">
                    Space & Custom Furniture
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    Architectural layouts, customized furniture models, lighting plots, and bespoke color styling created for your lifestyle.
                  </p>
                </div>
                <div className="text-xs font-bold text-[#0F3B2E] group-hover:text-[#154e3d] inline-flex items-center gap-1.5 transition mt-auto">
                  <span>Explore Execution</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition duration-200" />
                </div>
              </div>
            </div>

            {/* CARD 4 */}
            <div
              className="bg-white rounded-xl overflow-hidden border border-[#E5DDD3] shadow-[0_4px_25px_rgba(0,0,0,0.015)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)] hover:border-[#0F3B2E]/20 transition-all duration-300 cursor-pointer flex flex-col h-full group"
              onClick={scrollToForm}
            >
              <SafeImage
                src="/images/kitchen1.webp"
                alt="Home Renovation Interior Bangalore"
              />
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#0F3B2E] tracking-wider uppercase bg-[#E7D7C9]/25 px-2.5 py-1 rounded-full mb-3 inline-block">
                    Premium Upgrade
                  </span>
                  <h3 className="font-semibold font-serif text-lg text-[#0F3B2E] mb-2">
                    Renovation & Upgrades
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    Structured retrofitting and complete remodel upgrades for premium apartments, restoring vintage aesthetics with modern flair.
                  </p>
                </div>
                <div className="text-xs font-bold text-[#0F3B2E] group-hover:text-[#154e3d] inline-flex items-center gap-1.5 transition mt-auto">
                  <span>Explore Execution</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition duration-200" />
                </div>
              </div>
            </div>
          </div>

          {/* LOWER SECTION CTAS */}
          <div className="text-center mt-12 pt-8 border-t border-stone-200/50">
            <button
              onClick={scrollToForm}
              className="bg-[#0F3B2E] text-white hover:bg-[#154e3d] px-8 py-3.5 rounded-lg font-bold text-sm tracking-wider uppercase shadow-md transition duration-300 inline-flex items-center gap-2 transform active:scale-95"
            >
              <span>Get Free Design Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-stone-500 mt-4">
              Complete custom solutions usually scale from ₹5 Lakhs onwards • Full transparency guaranteed
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#FAF8F5] py-20 relative">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="text-xs font-bold text-[#0F3B2E] tracking-widest uppercase bg-[#0F3B2E]/5 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Why Denova Creations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0F3B2E]">
            Built to Last, Designed to Live
          </h2>
          <div className="w-16 h-1 bg-[#E7D7C9] mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="text-stone-600 max-w-2xl mx-auto text-sm leading-relaxed mb-12">
            We focus on strict execution discipline, absolute material integrity, and structured milestones. No confusion, no unapproved budget escalations.
          </p>

          {/* VALUES GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {/* VALUE CARD 1 */}
            <div className="bg-white border border-[#E5DDD3] rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-md transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#0F3B2E]/5 flex items-center justify-center text-[#0F3B2E] mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-semibold font-serif text-lg text-[#0F3B2E] mb-2">
                100% Unified Accountability
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                We take complete, end-to-end charge from the very first moodboard sketch to key handover. No subcontracting or vendor coordination problems.
              </p>
            </div>

            {/* VALUE CARD 2 */}
            <div className="bg-white border border-[#E5DDD3] rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-md transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#0F3B2E]/5 flex items-center justify-center text-[#0F3B2E] mb-4">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-semibold font-serif text-lg text-[#0F3B2E] mb-2">
                Strict Schedule Milestones
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Every project is tracked with modern gantt timelines. We maintain systematic progress, ensuring your home is delivered on time, as scheduled.
              </p>
            </div>

            {/* VALUE CARD 3 */}
            <div className="bg-white border border-[#E5DDD3] rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-md transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#0F3B2E]/5 flex items-center justify-center text-[#0F3B2E] mb-4">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="font-semibold font-serif text-lg text-[#0F3B2E] mb-2">
                Absolute Pricing Guarantee
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Detailed estimates down to every screw and square foot. What we quote at sign-off is exactly what you pay. Zero surprise hidden costs.
              </p>
            </div>

            {/* VALUE CARD 4 */}
            <div className="bg-white border border-[#E5DDD3] rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-md transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#0F3B2E]/5 flex items-center justify-center text-[#0F3B2E] mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-semibold font-serif text-lg text-[#0F3B2E] mb-2">
                On-Site Senior Supervision
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Bespoke design is nothing without master execution. Our senior project architects inspect work sites daily for quality checks and alignment control.
              </p>
            </div>

            {/* VALUE CARD 5 */}
            <div className="bg-white border border-[#E5DDD3] rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-md transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#0F3B2E]/5 flex items-center justify-center text-[#0F3B2E] mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-semibold font-serif text-lg text-[#0F3B2E] mb-2">
                Premium Material Integrity
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                We strictly deploy branded, certified high-grade waterproof plywood, robust hardware systems, and durable laminates.
              </p>
            </div>

            {/* VALUE CARD 6 */}
            <div className="bg-white border border-[#E5DDD3] rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-md transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#0F3B2E]/5 flex items-center justify-center text-[#0F3B2E] mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-semibold font-serif text-lg text-[#0F3B2E] mb-2">
                Practical, Everyday Design
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                We design homes to be lived in, not just photographed. Clean layout clearances, high-durability surfaces, and smart modularity.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <button
              onClick={scrollToForm}
              className="bg-[#0F3B2E] text-white hover:bg-[#154e3d] px-8 py-3.5 rounded-lg font-bold text-sm tracking-wider uppercase shadow-md transition duration-300 transform active:scale-95"
            >
              Start Planning Your Interior
            </button>
            <p className="text-[11px] text-stone-500 mt-3">
              100+ Happy Homeowners • Dedicated Execution Teams • 10-Year Warranty Coverage
            </p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SHOWCASE */}
      <section id="portfolio" className="py-20 bg-white relative">
        <div className="max-w-6xl mx-auto px-4">
          {/* HEADLINE */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#0F3B2E] tracking-widest uppercase bg-[#0F3B2E]/5 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Our Showcase
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0F3B2E]">
              Completed Projects in Bangalore
            </h2>
            <div className="w-16 h-1 bg-[#E7D7C9] mx-auto mt-4 mb-3 rounded-full"></div>
            <p className="text-stone-600 text-sm leading-relaxed">
              Step inside real homes designed, executed, and handed over by Denova Creations. Every project represents precise budget compliance.
            </p>
          </div>

          {/* PROJECTS GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* PORTFOLIO CARD 1 */}
            <div className="group cursor-pointer" onClick={scrollToForm}>
              <div className="overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-all duration-500">
                <SafeImage
                  src="/images/living1.webp"
                  alt="2BHK Full Home Interior Whitefield Bangalore"
                  priority={true}
                />
              </div>
              <div className="mt-4">
                <p className="text-sm font-bold text-stone-900 group-hover:text-[#0F3B2E] transition">
                  2BHK Full Home Interior • Whitefield
                </p>
                <p className="text-xs text-stone-600 mt-1">
                  Living layout, customized kitchen module, custom wardrobes & modern TV console.
                </p>
                <div className="flex items-center gap-3 mt-3 pt-3 border-t border-stone-100 text-xs font-semibold text-stone-500">
                  <span className="flex items-center gap-1 text-[#0F3B2E]">
                    <DollarSign className="w-3.5 h-3.5" />
                    <span>₹4L – ₹5 Lakhs</span>
                  </span>
                  <span className="text-stone-300">•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>45 Days Handover</span>
                  </span>
                </div>
              </div>
            </div>

            {/* PORTFOLIO CARD 2 */}
            <div className="group cursor-pointer" onClick={scrollToForm}>
              <div className="overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-all duration-500">
                <SafeImage
                  src="/images/kitchen1.webp"
                  alt="Modular Kitchen Interior Sarjapur Bangalore"
                />
              </div>
              <div className="mt-4">
                <p className="text-sm font-bold text-stone-900 group-hover:text-[#0F3B2E] transition">
                  Modular Kitchen • Sarjapur
                </p>
                <p className="text-xs text-stone-600 mt-1">
                  Premium custom kitchen tailored with acrylic cabinetry, soft-close hardware & quartz countertops.
                </p>
                <div className="flex items-center gap-3 mt-3 pt-3 border-t border-stone-100 text-xs font-semibold text-stone-500">
                  <span className="flex items-center gap-1 text-[#0F3B2E]">
                    <DollarSign className="w-3.5 h-3.5" />
                    <span>₹3L – ₹4 Lakhs</span>
                  </span>
                  <span className="text-stone-300">•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>30 Days Handover</span>
                  </span>
                </div>
              </div>
            </div>

            {/* PORTFOLIO CARD 3 */}
            <div className="group cursor-pointer" onClick={scrollToForm}>
              <div className="overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-all duration-500">
                <SafeImage
                  src="/images/bedroom1.webp"
                  alt="Bedroom Interior Bangalore Apartment"
                />
              </div>
              <div className="mt-4">
                <p className="text-sm font-bold text-stone-900 group-hover:text-[#0F3B2E] transition">
                  Master Bedroom & Wardrobes • Bangalore
                </p>
                <p className="text-xs text-stone-600 mt-1">
                  Highly functional floor-to-ceiling sliding wardrobe layouts with premium built-in vanity console.
                </p>
                <div className="flex items-center gap-3 mt-3 pt-3 border-t border-stone-100 text-xs font-semibold text-stone-500">
                  <span className="flex items-center gap-1 text-[#0F3B2E]">
                    <DollarSign className="w-3.5 h-3.5" />
                    <span>₹2.5L – ₹3.5 Lakhs</span>
                  </span>
                  <span className="text-stone-300">•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>25 Days Handover</span>
                  </span>
                </div>
              </div>
            </div>

            {/* PORTFOLIO CARD 4 */}
            <div className="group cursor-pointer" onClick={scrollToForm}>
              <div className="overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-all duration-500">
                <SafeImage
                  src="/images/living2.webp"
                  alt="3BHK Living Room HSR Layout Bangalore"
                />
              </div>
              <div className="mt-4">
                <p className="text-sm font-bold text-stone-900 group-hover:text-[#0F3B2E] transition">
                  3BHK Premium Living Space • HSR Layout
                </p>
                <p className="text-xs text-stone-600 mt-1">
                  Luxury false ceiling design, architectural accent lighting plots, wooden paneling & TV unit execution.
                </p>
                <div className="flex items-center gap-3 mt-3 pt-3 border-t border-stone-100 text-xs font-semibold text-stone-500">
                  <span className="flex items-center gap-1 text-[#0F3B2E]">
                    <DollarSign className="w-3.5 h-3.5" />
                    <span>₹6L – ₹8 Lakhs</span>
                  </span>
                  <span className="text-stone-300">•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>50 Days Handover</span>
                  </span>
                </div>
              </div>
            </div>

            {/* PORTFOLIO CARD 5 */}
            <div className="group cursor-pointer" onClick={scrollToForm}>
              <div className="overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-all duration-500">
                <SafeImage
                  src="/images/kitchen2.webp"
                  alt="Contemporary Kitchen Electronic City Bangalore"
                />
              </div>
              <div className="mt-4">
                <p className="text-sm font-bold text-stone-900 group-hover:text-[#0F3B2E] transition">
                  Contemporary Kitchen • Electronic City
                </p>
                <p className="text-xs text-stone-600 mt-1">
                  Sleek handleless modular kitchen incorporating premium lacquer finish and pull-out storage accessories.
                </p>
                <div className="flex items-center gap-3 mt-3 pt-3 border-t border-stone-100 text-xs font-semibold text-stone-500">
                  <span className="flex items-center gap-1 text-[#0F3B2E]">
                    <DollarSign className="w-3.5 h-3.5" />
                    <span>₹3.5L – ₹5 Lakhs</span>
                  </span>
                  <span className="text-stone-300">•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>28 Days Handover</span>
                  </span>
                </div>
              </div>
            </div>

            {/* PORTFOLIO CARD 6 */}
            <div className="group cursor-pointer" onClick={scrollToForm}>
              <div className="overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-all duration-500">
                <SafeImage
                  src="/images/bedroom2.webp"
                  alt="Minimal Bedroom Bangalore Apartment"
                />
              </div>
              <div className="mt-4">
                <p className="text-sm font-bold text-stone-900 group-hover:text-[#0F3B2E] transition">
                  Minimalist Bedroom • Bangalore Apartment
                </p>
                <p className="text-xs text-stone-600 mt-1">
                  Clean, visual-space-optimized guest bedroom configuration featuring robust laminate sliding wardrobes.
                </p>
                <div className="flex items-center gap-3 mt-3 pt-3 border-t border-stone-100 text-xs font-semibold text-stone-500">
                  <span className="flex items-center gap-1 text-[#0F3B2E]">
                    <DollarSign className="w-3.5 h-3.5" />
                    <span>₹1.8L – ₹3 Lakhs</span>
                  </span>
                  <span className="text-stone-300">•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>20 Days Handover</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button
              onClick={scrollToForm}
              className="bg-[#0F3B2E] text-white hover:bg-[#154e3d] px-8 py-3.5 rounded-lg font-bold text-sm tracking-wider uppercase shadow-md transition duration-300 transform active:scale-95"
            >
              Consult On Your Layout Target
            </button>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-[#FAF8F5] to-white relative">
        <div className="max-w-6xl mx-auto px-4">
          {/* HEADLINE */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#0F3B2E] tracking-widest uppercase bg-[#0F3B2E]/5 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Cost Guidance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0F3B2E]">
              Transparent Pricing Framework
            </h2>
            <div className="w-16 h-1 bg-[#E7D7C9] mx-auto mt-4 mb-3 rounded-full"></div>
            <p className="text-stone-600 text-sm leading-relaxed">
              Every package represents high material quality. Choose a framework that matches your scale.
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* PRICING CARD 1 */}
            <div className="border border-[#E5DDD3] rounded-2xl p-6 md:p-8 bg-white flex flex-col justify-between shadow-sm hover:shadow-md transition duration-300">
              <div>
                <h3 className="font-semibold font-serif text-xl text-[#0F3B2E] mb-2">
                  Essential Spaces
                </h3>
                <div className="flex items-baseline gap-1 my-4">
                  <span className="text-3xl md:text-4xl font-bold text-[#0F3B2E] font-serif">₹3.5L – ₹5L</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed mb-6">
                  Perfect for compact residences or homeowners seeking clean, essential modular installations without complex paneling work.
                </p>
                <ul className="text-xs text-stone-600 space-y-3.5 border-t border-stone-100 pt-6 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0F3B2E] shrink-0" />
                    <span>Modular Kitchen Layout with High-Gloss finish</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0F3B2E] shrink-0" />
                    <span>Laminate sliding or swing wardrobes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0F3B2E] shrink-0" />
                    <span>Space-efficient custom TV unit console</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0F3B2E] shrink-0" />
                    <span>Basic storage planning & 2D drafts</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={scrollToForm}
                className="w-full bg-[#0F3B2E] hover:bg-[#154e3d] text-white py-3 rounded-lg font-bold text-xs tracking-wider uppercase transition shadow-sm"
              >
                Choose Essential Plan
              </button>
            </div>

            {/* PRICING CARD 2 (HIGH CONVERSION HERO CARD) */}
            <div className="border-2 border-[#E7D7C9] rounded-2xl p-6 md:p-8 bg-[#0F3B2E] text-white flex flex-col justify-between shadow-[0_15px_40px_rgba(15,59,46,0.15)] relative transform md:scale-105">
              <div className="absolute top-0 right-6 -translate-y-1/2 bg-[#E7D7C9] text-[#0F3B2E] text-[10px] tracking-widest font-extrabold uppercase px-3 py-1 rounded-full shadow-sm">
                MOST POPULAR
              </div>
              <div>
                <h3 className="font-semibold font-serif text-xl text-[#E7D7C9] mb-2">
                  Complete Home Plan
                </h3>
                <div className="flex items-baseline gap-1 my-4">
                  <span className="text-3xl md:text-4xl font-bold text-white font-serif">₹5L – ₹10L</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed mb-6">
                  Comprehensive custom design for the entire flat. Includes refined detailing, custom false ceiling panels, and direct architect oversight.
                </p>
                <ul className="text-xs text-stone-300 space-y-3.5 border-t border-white/10 pt-6 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#E7D7C9] shrink-0" />
                    <span>Premium Modular Kitchen with Soft-Close Hardware</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#E7D7C9] shrink-0" />
                    <span>Custom sliding wardrobes in all bedrooms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#E7D7C9] shrink-0" />
                    <span>Architectural TV panel and false ceiling plans</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#E7D7C9] shrink-0" />
                    <span>3D visualizations & custom material finishes</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={scrollToForm}
                className="w-full bg-[#E7D7C9] hover:bg-white text-[#0F3B2E] py-3 rounded-lg font-bold text-xs tracking-wider uppercase transition shadow-md"
              >
                Choose Complete Plan
              </button>
            </div>

            {/* PRICING CARD 3 */}
            <div className="border border-[#E5DDD3] rounded-2xl p-6 md:p-8 bg-white flex flex-col justify-between shadow-sm hover:shadow-md transition duration-300">
              <div>
                <h3 className="font-semibold font-serif text-xl text-[#0F3B2E] mb-2">
                  Premium Custom
                </h3>
                <div className="flex items-baseline gap-1 my-4">
                  <span className="text-3xl md:text-4xl font-bold text-[#0F3B2E] font-serif">₹10L+</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed mb-6">
                  Elite signature homes with ultra-premium materials, structural interior layouts, customized high-end detailing, and luxury styling.
                </p>
                <ul className="text-xs text-stone-600 space-y-3.5 border-t border-stone-100 pt-6 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0F3B2E] shrink-0" />
                    <span>Bespoke custom furniture and designer units</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0F3B2E] shrink-0" />
                    <span>Premium imported hardware and luxury acrylics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0F3B2E] shrink-0" />
                    <span>Complete wall treatment, premium lighting & veneers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0F3B2E] shrink-0" />
                    <span>Priority supervisor assignment & custom handovers</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={scrollToForm}
                className="w-full bg-[#0F3B2E] hover:bg-[#154e3d] text-white py-3 rounded-lg font-bold text-xs tracking-wider uppercase transition shadow-sm"
              >
                Choose Custom Plan
              </button>
            </div>
          </div>

          <p className="text-center text-xs text-stone-500 mt-12">
            No last-minute cost escalations. Detailed item-wise commercial sheet provided prior to any project kick-off.
          </p>
        </div>
      </section>

      {/* PROCESS ROADMAP */}
      <section id="process" className="py-20 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="text-xs font-bold text-[#0F3B2E] tracking-widest uppercase bg-[#0F3B2E]/5 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Execution Flow
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0F3B2E]">
            Simple, Structured & Transparent Process
          </h2>
          <div className="w-16 h-1 bg-[#E7D7C9] mx-auto mt-4 mb-12 rounded-full"></div>

          {/* PROCESS TIMELINE */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left relative">
            {/* STEP 1 */}
            <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#E5DDD3]/60 relative shadow-sm hover:shadow transition">
              <span className="font-serif text-[#E7D7C9]/40 text-6xl font-bold absolute top-4 right-6 select-none pointer-events-none">01</span>
              <div className="w-10 h-10 rounded-full bg-[#0F3B2E] text-white flex items-center justify-center font-bold text-sm mb-4">
                01
              </div>
              <h3 className="font-semibold font-serif text-base text-[#0F3B2E] mb-2">
                1-on-1 Consultation
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                We sit down (or connect digitally) to map out your detailed room layouts, budget targets, style preferences, and lifestyle patterns.
              </p>
            </div>

            {/* STEP 2 */}
            <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#E5DDD3]/60 relative shadow-sm hover:shadow transition">
              <span className="font-serif text-[#E7D7C9]/40 text-6xl font-bold absolute top-4 right-6 select-none pointer-events-none">02</span>
              <div className="w-10 h-10 rounded-full bg-[#0F3B2E] text-white flex items-center justify-center font-bold text-sm mb-4">
                02
              </div>
              <h3 className="font-semibold font-serif text-base text-[#0F3B2E] mb-2">
                Design & 3D Drafting
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Our designer generates functional space layouts, color palettes, and realistic 3D visuals to give you absolute spatial clarity.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#E5DDD3]/60 relative shadow-sm hover:shadow transition">
              <span className="font-serif text-[#E7D7C9]/40 text-6xl font-bold absolute top-4 right-6 select-none pointer-events-none">03</span>
              <div className="w-10 h-10 rounded-full bg-[#0F3B2E] text-white flex items-center justify-center font-bold text-sm mb-4">
                03
              </div>
              <h3 className="font-semibold font-serif text-base text-[#0F3B2E] mb-2">
                Precision Execution
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Materials are structured, delivered to site, and installed under strict architectural supervision following high finishing standards.
              </p>
            </div>

            {/* STEP 4 */}
            <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#E5DDD3]/60 relative shadow-sm hover:shadow transition">
              <span className="font-serif text-[#E7D7C9]/40 text-6xl font-bold absolute top-4 right-6 select-none pointer-events-none">04</span>
              <div className="w-10 h-10 rounded-full bg-[#0F3B2E] text-white flex items-center justify-center font-bold text-sm mb-4">
                04
              </div>
              <h3 className="font-semibold font-serif text-base text-[#0F3B2E] mb-2">
                Handover & Checklist
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Detailed quality inspections are executed for hinges, leveling, and painting finishes before final clean-up and key delivery.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={scrollToForm}
              className="bg-[#0F3B2E] text-white hover:bg-[#154e3d] px-8 py-3.5 rounded-lg font-bold text-sm tracking-wider uppercase shadow-md transition duration-300 transform active:scale-95"
            >
              Begin Design Journey
            </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-[#FAF8F5] to-white relative">
        <div className="max-w-6xl mx-auto px-4">
          {/* SECTION HEADLINE */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#0F3B2E] tracking-widest uppercase bg-[#0F3B2E]/5 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Client Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0F3B2E]">
              What Bangalore Homeowners Say
            </h2>
            <div className="w-16 h-1 bg-[#E7D7C9] mx-auto mt-4 mb-3 rounded-full"></div>
            <p className="text-stone-600 text-sm leading-relaxed">
              Real experiences from homeowners who trusted Denova Creations for their space execution.
            </p>
          </div>

          {/* GOOGLE TRUST SCORE BOX */}
          <div className="bg-white border border-[#E5DDD3] p-5 rounded-2xl max-w-md mx-auto text-center shadow-sm mb-12 flex flex-col items-center justify-center">
            <div className="flex items-center gap-1 text-[#E7D7C9] mb-1">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="font-bold text-stone-900 text-base">
              Google Customer Rating: <span className="text-[#0F3B2E]">4.8 / 5</span>
            </p>
            <p className="text-xs text-stone-500">
              Based on over 100+ complete residential projects in Bangalore
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* CARD 1 */}
            <div className="bg-white border border-[#E5DDD3] rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition duration-300 flex flex-col h-full">
              <SafeImage
                src="/images/client1.webp"
                alt="2BHK Interior Project Whitefield Bangalore"
              />
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-0.5 text-amber-400 text-xs mb-2">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <p className="text-[10px] font-bold text-stone-400 tracking-wider uppercase mb-2">
                    2BHK Apartment • Whitefield
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed italic mb-4">
                    "Completed the entire carpentry and lighting installation in 40 days without scheduling issues. The modular drawers function perfectly and the color tones matched the initial moodboard perfectly."
                  </p>
                </div>
                <div>
                  <p className="font-bold font-serif text-sm text-stone-900">Rakesh K.</p>
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-stone-100">
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      <CheckCircle className="w-3 h-3" /> Verified Client
                    </span>
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                      Handover Complete
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-white border border-[#E5DDD3] rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition duration-300 flex flex-col h-full">
              <SafeImage
                src="/images/client2.webp"
                alt="3BHK Interior Project Sarjapur Bangalore"
              />
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-0.5 text-amber-400 text-xs mb-2">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <p className="text-[10px] font-bold text-stone-400 tracking-wider uppercase mb-2">
                    3BHK Apartment • Sarjapur
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed italic mb-4">
                    "The pricing structure was 100% transparent. No strange charges at final delivery. Material and paint finishing looks extremely luxury. Highly professional architect supervision."
                  </p>
                </div>
                <div>
                  <p className="font-bold font-serif text-sm text-stone-900">Harish M.</p>
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-stone-100">
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      <CheckCircle className="w-3 h-3" /> Verified Client
                    </span>
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                      Handover Complete
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-white border border-[#E5DDD3] rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition duration-300 flex flex-col h-full">
              <SafeImage
                src="/images/client3.webp"
                alt="Home Renovation Electronic City Bangalore"
              />
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-0.5 text-amber-400 text-xs mb-2">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <p className="text-[10px] font-bold text-stone-400 tracking-wider uppercase mb-2">
                    Renovation • Electronic City
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed italic mb-4">
                    "We did a structured modular kitchen remodel and bedroom upgrade. The design consultation helped optimize every inch of storage. Handed over exactly within budget limits."
                  </p>
                </div>
                <div>
                  <p className="font-bold font-serif text-sm text-stone-900">Srinath V.</p>
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-stone-100">
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      <CheckCircle className="w-3 h-3" /> Verified Client
                    </span>
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                      Handover Complete
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={scrollToForm}
              className="bg-[#0F3B2E] text-white hover:bg-[#154e3d] px-8 py-3.5 rounded-lg font-bold text-sm tracking-wider uppercase shadow-md transition duration-300 transform active:scale-95"
            >
              Get Free Design Proposal
            </button>
          </div>
        </div>
      </section>

      {/* FAQ SECTION (SEO OPTIMIZED INTERACTIVE ACCORDION) */}
      <section className="py-20 bg-white border-t border-stone-100">
        <div className="max-w-3xl mx-auto px-4">
          {/* HEADLINE */}
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#0F3B2E] tracking-widest uppercase bg-[#0F3B2E]/5 px-3.5 py-1.5 rounded-full inline-block mb-3">
              FAQ
            </span>
            <h2 className="text-3xl font-bold font-serif text-[#0F3B2E]">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-[#E7D7C9] mx-auto mt-4 mb-3 rounded-full"></div>
            <p className="text-stone-600 text-sm">
              Quick answers regarding modular specifications, timelines, and commercial procedures in Bangalore.
            </p>
          </div>

          {/* ACCORDION FAQ */}
          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="border border-[#E5DDD3] rounded-xl overflow-hidden bg-[#FAF8F5]">
              <button
                onClick={() => toggleFaq(0)}
                className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold font-serif text-sm md:text-base text-[#0F3B2E] transition focus:outline-none"
              >
                <span>What is the average cost of complete home interiors in Bangalore?</span>
                {activeFaq === 0 ? <ChevronUp className="w-4 h-4 shrink-0 text-[#0F3B2E]" /> : <ChevronDown className="w-4 h-4 shrink-0 text-[#0F3B2E]" />}
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${activeFaq === 0 ? "max-h-40 border-t border-[#E5DDD3]/40" : "max-h-0"
                  }`}
              >
                <p className="px-6 py-4 text-xs md:text-sm text-stone-600 leading-relaxed">
                  The commercial investment varies based on size, custom hardware selections, and finishing details. Typically, essential 2BHK and 3BHK flat interiors scale between ₹3.5 Lakhs and ₹8 Lakhs, with premium custom duplexes and villas starting higher.
                </p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="border border-[#E5DDD3] rounded-xl overflow-hidden bg-[#FAF8F5]">
              <button
                onClick={() => toggleFaq(1)}
                className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold font-serif text-sm md:text-base text-[#0F3B2E] transition focus:outline-none"
              >
                <span>How long does it take from plan design to site handover?</span>
                {activeFaq === 1 ? <ChevronUp className="w-4 h-4 shrink-0 text-[#0F3B2E]" /> : <ChevronDown className="w-4 h-4 shrink-0 text-[#0F3B2E]" />}
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${activeFaq === 1 ? "max-h-40 border-t border-[#E5DDD3]/40" : "max-h-0"
                  }`}
              >
                <p className="px-6 py-4 text-xs md:text-sm text-stone-600 leading-relaxed">
                  Most regular interior execution milestones are achieved within 30 to 45 working days post final draft sign-off. Detailed bespoke custom work or high-end villa configurations can scale up to 60 working days.
                </p>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="border border-[#E5DDD3] rounded-xl overflow-hidden bg-[#FAF8F5]">
              <button
                onClick={() => toggleFaq(2)}
                className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold font-serif text-sm md:text-base text-[#0F3B2E] transition focus:outline-none"
              >
                <span>Are there warranty guarantees on materials used?</span>
                {activeFaq === 2 ? <ChevronUp className="w-4 h-4 shrink-0 text-[#0F3B2E]" /> : <ChevronDown className="w-4 h-4 shrink-0 text-[#0F3B2E]" />}
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${activeFaq === 2 ? "max-h-40 border-t border-[#E5DDD3]/40" : "max-h-0"
                  }`}
              >
                <p className="px-6 py-4 text-xs md:text-sm text-stone-600 leading-relaxed">
                  Yes, absolute assurance is provided. We carry a structural material warranty of up to 10 years on select boiling waterproof plywood laminates, and direct brand warranties on premium hardware accessories.
                </p>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="border border-[#E5DDD3] rounded-xl overflow-hidden bg-[#FAF8F5]">
              <button
                onClick={() => toggleFaq(3)}
                className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold font-serif text-sm md:text-base text-[#0F3B2E] transition focus:outline-none"
              >
                <span>Do you execute on-site custom structural changes?</span>
                {activeFaq === 3 ? <ChevronUp className="w-4 h-4 shrink-0 text-[#0F3B2E]" /> : <ChevronDown className="w-4 h-4 shrink-0 text-[#0F3B2E]" />}
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${activeFaq === 3 ? "max-h-40 border-t border-[#E5DDD3]/40" : "max-h-0"
                  }`}
              >
                <p className="px-6 py-4 text-xs md:text-sm text-stone-600 leading-relaxed">
                  Yes, end-to-end turnkey architectural planning includes complete dry wall partitions, customized false ceiling execution, complete tile cladding, and lighting layout relocations.
                </p>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className="border border-[#E5DDD3] rounded-xl overflow-hidden bg-[#FAF8F5]">
              <button
                onClick={() => toggleFaq(4)}
                className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold font-serif text-sm md:text-base text-[#0F3B2E] transition focus:outline-none"
              >
                <span>What precautions are taken for material quality checks?</span>
                {activeFaq === 4 ? <ChevronUp className="w-4 h-4 shrink-0 text-[#0F3B2E]" /> : <ChevronDown className="w-4 h-4 shrink-0 text-[#0F3B2E]" />}
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${activeFaq === 4 ? "max-h-40 border-t border-[#E5DDD3]/40" : "max-h-0"
                  }`}
              >
                <p className="px-6 py-4 text-xs md:text-sm text-stone-600 leading-relaxed">
                  All plywood batches undergo rigorous waterproof and density certifications at the facility before transit. We also welcome client structural checks directly on-site prior to final laminations.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={scrollToForm}
              className="bg-[#0F3B2E] text-white hover:bg-[#154e3d] px-6 py-3 rounded-lg font-bold text-xs tracking-wider uppercase shadow-md transition duration-300"
            >
              Talk to Our Expert Designer
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER LEAD FORM */}
      <section id="contact" className="py-20 bg-[#FAF8F5] relative border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs font-bold text-[#0F3B2E] tracking-widest uppercase bg-[#0F3B2E]/5 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl font-bold font-serif text-[#0F3B2E] mb-3">
            Book Free Consult Session
          </h2>
          <p className="text-stone-600 text-sm max-w-md mx-auto mb-10">
            Let's structure a beautiful, optimized cost estimate and design concept mapping for your residential space.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white border border-[#E5DDD3] p-6 md:p-8 rounded-2xl shadow-md flex flex-col gap-4 max-w-md mx-auto text-left"
          >
            {/* NAME */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                required
                onChange={handleChange}
                className="w-full p-3 border border-stone-200 rounded-lg bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3B2E] focus:border-transparent text-sm transition duration-200 text-stone-800"
              />
            </div>

            {/* PHONE */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                maxLength={10}
                required
                onChange={handleChange}
                pattern="[6-9]{1}[0-9]{9}"
                className="w-full p-3 border border-stone-200 rounded-lg bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3B2E] focus:border-transparent text-sm transition duration-200 text-stone-800"
              />
            </div>

            {/* EMAIL */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                value={form.email}
                required
                onChange={handleChange}
                className="w-full p-3 border border-stone-200 rounded-lg bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3B2E] focus:border-transparent text-sm transition duration-200 text-stone-800"
              />
            </div>

            {/* PROPERTY TYPE */}
            <div>
              <select
                name="propertyType"
                value={form.propertyType}
                onChange={handleChange}
                required
                className="w-full p-3 border border-stone-200 rounded-lg bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3B2E] focus:border-transparent text-sm transition duration-200 text-stone-800"
              >
                <option value="">Select Property Layout</option>
                <option value="1 BHK">1 BHK Apartment</option>
                <option value="2 BHK">2 BHK Apartment</option>
                <option value="3 BHK">3 BHK Apartment</option>
                <option value="3+ BHK">3+ BHK / Duplex</option>
                <option value="Villa">Luxury Villa</option>
              </select>
            </div>

            {/* PINCODE */}
            <div>
              <input
                type="tel"
                name="pincode"
                placeholder="Pincode"
                value={form.pincode}
                maxLength={6}
                required
                onChange={handleChange}
                className="w-full p-3 border border-stone-200 rounded-lg bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3B2E] focus:border-transparent text-sm transition duration-200 text-stone-800"
              />
            </div>

            {/* POSSESSION */}
            <div>
              <select
                name="possession"
                value={form.possession}
                onChange={handleChange}
                required
                className="w-full p-3 border border-stone-200 rounded-lg bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3B2E] focus:border-transparent text-sm transition duration-200 text-stone-800"
              >
                <option value="">Expected Handover Time</option>
                <option value="Immediate">Immediate / Move-in</option>
                <option value="0-3 Months">Within 3 Months</option>
                <option value="3-6 Months">3 to 6 Months</option>
                <option value="6+ Months">More than 6 Months</option>
              </select>
            </div>

            {/* BUDGET */}
            <div>
              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
                required
                className="w-full p-3 border border-stone-200 rounded-lg bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3B2E] focus:border-transparent text-sm transition duration-200 text-stone-800"
              >
                <option value="">Expected Budget Range</option>
                <option value="3.5-5L">₹3.5L – ₹5 Lakhs</option>
                <option value="5-10L">₹5L – ₹10 Lakhs</option>
                <option value="10-20L">₹10L – ₹20 Lakhs</option>
                <option value="20L+">₹20 Lakhs+</option>
              </select>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3.5 rounded-lg font-bold text-sm tracking-wider uppercase shadow-md transition-all duration-300 mt-2 ${loading
                  ? "bg-stone-200 text-stone-400 cursor-not-allowed"
                  : "bg-[#0F3B2E] text-white hover:bg-[#154e3d]"
                }`}
            >
              {loading ? "Registering Consult..." : "Get Free Interior Consultation"}
            </button>

            <div className="text-center mt-2 text-[11px] text-stone-500 space-y-1">
              <p className="font-semibold text-stone-700">
                Senior architect will contact you within 30 minutes.
              </p>
              <p className="text-stone-400">
                No spam • 100% confidential • Complete execution team based in Bangalore
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* FINAL HIGH-CONVERSION CTA */}
      <section className="py-20 bg-[#0B251E] text-white text-center relative overflow-hidden">
        {/* LIGHT GOLD SHIMMER GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(231,215,201,0.05)_0,transparent_60%)]"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <span className="text-[10px] font-bold text-[#E7D7C9] tracking-widest uppercase bg-white/5 border border-white/10 px-3 py-1 rounded-full inline-block mb-4">
            Limited Availability Slots
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight">
            Plan Your Space with Precise Architectural Detail
          </h2>
          <p className="text-stone-300 text-sm md:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Eliminate structural layout guesswork, design deviations, and commercial confusion. Secure a direct design consultation with our senior project team today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToForm}
              className="bg-[#E7D7C9] hover:bg-white text-[#0F3B2E] px-8 py-3.5 rounded-lg font-bold text-sm uppercase tracking-wider shadow-lg transition duration-300 transform active:scale-95 w-full sm:w-auto"
            >
              Request Free Consultation
            </button>
            <a
              href="https://wa.me/919164466606?text=Hi, I am looking for interior design for my home in Bangalore. My budget is above ₹3L. Please share details."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-white font-semibold text-sm hover:text-[#E7D7C9] transition bg-white/5 border border-white/10 px-8 py-3.5 rounded-lg w-full sm:w-auto hover:bg-white/10"
            >
              <span>Talk to a Designer on WhatsApp</span>
            </a>
          </div>
          <p className="text-xs text-stone-400 mt-6 uppercase tracking-wider font-semibold">
            ⭐ 4.8 Rating • 100+ Homes Handed Over • Dedicated Bangalore Support
          </p>
        </div>
      </section>

      {/* SYSTEMIC TRUSTED FOOTER */}
      <footer className="py-8 bg-[#071F19] text-stone-500 border-t border-white/5 text-center text-xs">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={logoPrimary}
              alt="Denova Creations Signature Logo"
              className="h-6 w-auto object-contain brightness-0 invert opacity-45"
            />
            <p>© {new Date().getFullYear()} Denova Creations. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a>
            <span className="text-stone-700">|</span>
            <span>Premium Residential Design & Execution</span>
          </div>
        </div>
      </footer>

      {/* SMART STICKY BOTTOM MOBILE CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200/50 px-4 py-3 flex items-center justify-between shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
        <div>
          <p className="text-[9px] font-bold text-stone-400 uppercase tracking-widest leading-none">Consultation Slots Open</p>
          <p className="text-xs font-bold text-[#0F3B2E] mt-1 flex items-center gap-1 font-serif">
            <span>★ 4.8 Rated (100+ Homes)</span>
          </p>
        </div>
        <button
          onClick={scrollToForm}
          className="bg-[#0F3B2E] text-white hover:bg-[#154e3d] text-xs font-bold tracking-wider uppercase px-4 py-2.5 rounded-lg shadow transition transform active:scale-95 flex items-center gap-1"
        >
          <span>Free Consult</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default AdsLanding;
