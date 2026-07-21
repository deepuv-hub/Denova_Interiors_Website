import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Star,
  Home,
  Building2,
  Castle,
  Briefcase,
  Wrench,
  Key,
  Compass,
  ShieldCheck,
  Check,
  PhoneCall,
  MessageSquare
} from "lucide-react";
import { SCRIPT_URL } from "../utils/api";

const EstimatePage = () => {
  // Step State
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    property: "",
    area: 1000,
    scope: "",
    budget: "",
    name: "",
    phone: "",
    email: "",
    location: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  // Set UTM parameters on mount
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
  }, []);

  const handleNextStep = () => {
    // Validation before moving next
    if (step === 1 && !form.property) {
      alert("Please select a property type to proceed");
      return;
    }
    if (step === 3 && !form.scope) {
      alert("Please select your interior scope of work");
      return;
    }
    if (step === 4 && !form.budget) {
      alert("Please select your budget preference");
      return;
    }
    
    setStep((currentStep) => currentStep + 1);
  };

  const handlePrevStep = () => {
    setStep((currentStep) => Math.max(1, currentStep - 1));
  };

  const handleSelectOption = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const formatPrice = (num) => {
    return (num / 100000).toFixed(2);
  };

  // Estimate pricing logic preserved exactly from previous component
  const calculateFinalEstimate = () => {
    let rate = 0;

    if (form.scope === "Modular Kitchen Only") rate = 800;
    else if (form.scope === "Wardrobes Only") rate = 900;
    else if (form.scope === "Modular Kitchen & Wardrobes") rate = 950;
    else if (form.scope === "Full Home Interior") rate = 1040;
    else if (form.scope === "Premium Full Home + Civil Work") rate = 1400;

    if (form.budget === "Premium") rate += 200;
    if (form.budget === "Luxury") rate += 400;

    // Property multiplier
    if (form.property === "Villa") rate += 150;
    if (form.property === "Commercial") rate += 250;

    const min = form.area * rate * 0.9;
    const max = form.area * rate * 1.1;

    return {
      rate,
      min,
      max,
    };
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();

    // Intake Form Validation
    let newErrors = {};
    if (!form.name?.trim()) newErrors.name = "Your name is required";
    
    if (!form.phone.trim()) {
      newErrors.phone = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10-digit number";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter valid email address";
    }

    if (!form.location.trim()) {
      newErrors.location = "Pincode or area is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);

      const calculated = calculateFinalEstimate();

      // Submit Lead data to Google Sheets
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
          location: form.location,
          propertyType: `${form.property} (${form.area} sqft)`,
          possession: `Scope: ${form.scope}`,
          budget: `${form.budget} Plan (Est: ₹${formatPrice(calculated.min)}L - ₹${formatPrice(calculated.max)}L)`,
          message: `Calculated Estimate: Scope: ${form.scope}, Area: ${form.area} sqft, Budget: ${form.budget}`,
          source: "Cost Calculator Page",
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

      // Dispatch analytical conversion telemetry
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "lead_conversion",
        page: "cost_calculator"
      });

      if (window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-11303451952/63-FCIP1rZ8cELD6840q"
        });
      }

      setResult(calculated);
      setStep(6); // Render final calculated panel

    } catch (err) {
      console.error("Calculator save error:", err);
    } finally {
      setLoading(false);
    }
  };

  const propertyOptions = [
    { title: "1 BHK Apartment", val: "1 BHK", desc: "Compact residential flat", icon: Home },
    { title: "2 BHK Apartment", val: "2 BHK", desc: "Standard residential flat", icon: Home },
    { title: "3 BHK Apartment", val: "3 BHK", desc: "Spacious residential flat", icon: Home },
    { title: "Luxury Villa", val: "Villa", desc: "Bespoke detached duplex/villa", icon: Castle },
    { title: "Commercial Space", val: "Commercial", desc: "Premium retail office space", icon: Building2 }
  ];

  const scopeOptions = [
    { title: "Modular Kitchen Only", val: "Modular Kitchen Only", desc: "Cabinets, chimneys, and pullout baskets" },
    { title: "Wardrobes Only", val: "Wardrobes Only", desc: "Sliding shutters, hinge-shutters, lofts" },
    { title: "Modular Kitchen & Wardrobes", val: "Modular Kitchen & Wardrobes", desc: "Kitchen and room storage cabinets combined" },
    { title: "Full Home Interior", val: "Full Home Interior", desc: "Kitchen, wardrobes, TV unit, paint, false ceiling" },
    { title: "Premium Turnkey + Civil Work", val: "Premium Full Home + Civil Work", desc: "Complete luxury layout restructuring & interiors" }
  ];

  const budgetOptions = [
    { title: "Economy Option", val: "Economy", desc: "Robust materials, cost-effective laminate finishes", fittings: "Standard hardware" },
    { title: "Standard Option", val: "Standard", desc: "Durable BWR ply, high gloss laminates", fittings: "Soft close runners" },
    { title: "Premium Luxury", val: "Premium", desc: "HDMR core, acrylic/sleek PU finishes", fittings: "Authentic Hettich hardware" },
    { title: "Bespoke Royal", val: "Luxury", desc: "Natural wood veneer, Lacquered glass shutters", fittings: "Blum touch-less sliders" }
  ];

  return (
    <>
      <Helmet>
        <title>Interior Design Estimate Bangalore | Denova Creations</title>
        <meta
          name="description"
          content="Estimate your home interior cost in Bangalore with Denova Creations. Calculate modular kitchen, wardrobe and full home interior pricing instantly."
        />
        <link rel="canonical" href="https://denovacreations.com/estimate" />
        <meta property="og:title" content="Interior Design Estimate Bangalore | Denova Creations" />
        <meta
          property="og:description"
          content="Get instant interior cost estimates for modular kitchens, wardrobes and complete home interiors in Bangalore."
        />
        <meta property="og:image" content="https://denovacreations.com/images/hero2.webp" />
        <meta property="og:url" content="https://denovacreations.com/estimate" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Interior Design Estimate Bangalore | Denova Creations" />
        <meta
          name="twitter:description"
          content="Get instant interior cost estimates for modular kitchens, wardrobes and complete home interiors in Bangalore."
        />
        <meta name="twitter:image" content="https://denovacreations.com/images/hero2.webp" />
      </Helmet>

      <div className="bg-[#FAF8F5] text-stone-800 antialiased min-h-screen">
        {/* HERO STRIP (DEEP EMERALD) */}
        <section className="relative overflow-hidden bg-[#0A2526] text-white py-16 md:py-20 border-b border-[#E8D8C4]/15">
          <div className="absolute inset-0">
            <img
              src="/images/hero2.webp"
              alt="Luxury Interior Design Estimate Bangalore"
              className="w-full h-full object-cover opacity-20 scale-105"
              loading="eager"
            />
            <div className="absolute inset-0 bg-[#0A2526]/90"></div>
          </div>

          <div className="relative z-10 container-custom">
            <div className="max-w-3xl text-left">
              {/* Google ratings */}
              <div className="flex items-center gap-2 mb-4">
                <span className="flex text-[#E8D8C4]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </span>
                <span className="text-stone-300 text-xs font-semibold uppercase tracking-wider">
                  4.9 Google Rating • Bangalore's Premium Brand
                </span>
              </div>

              <h1
                className="text-4xl md:text-5xl font-bold font-serif leading-tight text-white mb-4"
              >
                Cost Calculator <span className="text-[#E8D8C4]">- Bangalore Homes</span>
              </h1>

              <p className="text-stone-300 text-sm md:text-base leading-relaxed max-w-xl">
                Draft your customized interior estimate instantly. Go through 4 quick steps, input your parameters, and unlock detailed pricing metrics.
              </p>
            </div>
          </div>
        </section>

        {/* CALCULATOR STEP PANEL */}
        <section className="py-12 md:py-16">
          <div className="container-custom">
            <div className="grid lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
              
              {/* LEFT COLUMN: ACTIVE STEP PANEL */}
              <div className="lg:col-span-8 bg-white p-6 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-stone-200/50 flex flex-col justify-between min-h-[460px]">
                
                {/* STEP PROGRESS INDICATOR */}
                {step <= 5 && (
                  <div className="mb-8">
                    <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                      <span>Step {step} of 5</span>
                      <span>{step === 1 ? "Property Choice" : step === 2 ? "Carpet Area" : step === 3 ? "Scope Options" : step === 4 ? "Budget Tier" : "Unlock Estimate"}</span>
                    </div>
                    {/* Visual Progress Bar */}
                    <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#0F3D3E] rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${(step / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* STEP CONTENT SWITCHBOARD */}
                <div className="flex-grow">
                  
                  {/* STEP 1: PROPERTY Choice */}
                  {step === 1 && (
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold font-serif text-[#0F3D3E] mb-6">Select Property Type</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {propertyOptions.map((opt, idx) => {
                          const IconComp = opt.icon;
                          const isSelected = form.property === opt.val;
                          return (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => handleSelectOption("property", opt.val)}
                              className={`p-5 rounded-2xl border text-left flex items-start gap-4 transition-all duration-300 ${
                                isSelected
                                  ? "border-2 border-[#0F3D3E] bg-[#FAF7F2] shadow-sm"
                                  : "border-stone-200 hover:border-[#E8D8C4] bg-white"
                              }`}
                            >
                              <span className={`p-2.5 rounded-xl border flex-shrink-0 ${
                                isSelected ? "bg-[#0F3D3E] text-[#E8D8C4]" : "bg-stone-50 text-[#0F3D3E]"
                              }`}>
                                <IconComp className="w-5 h-5" />
                              </span>
                              <div>
                                <h3 className="font-semibold text-stone-900 text-sm">{opt.title}</h3>
                                <p className="text-[11px] text-stone-400 mt-0.5 leading-relaxed">{opt.desc}</p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* STEP 2: CARPET AREA SLIDER */}
                  {step === 2 && (
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold font-serif text-[#0F3D3E] mb-2">Define Carpet Area</h2>
                      <p className="text-stone-500 text-xs mb-8">Move the slider to match the approximate carpet area of your Bangalore property.</p>
                      
                      <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-stone-200/40 text-center max-w-md mx-auto shadow-inner">
                        <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">Total Area</span>
                        <div className="text-4xl font-serif font-bold text-[#0F3D3E] mt-1 mb-4 flex items-baseline justify-center gap-1">
                          <span>{form.area}</span>
                          <span className="text-sm text-stone-500 font-semibold uppercase tracking-wider">sq.ft</span>
                        </div>
                        
                        <input
                          type="range"
                          min="500"
                          max="5000"
                          step="50"
                          value={form.area}
                          onChange={(e) => handleSelectOption("area", Number(e.target.value))}
                          className="w-full accent-[#0F3D3E]"
                        />
                        
                        <div className="flex justify-between text-[10px] text-stone-400 font-bold mt-2">
                          <span>500 SQFT</span>
                          <span>5000 SQFT</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: SCOPE OPTIONS */}
                  {step === 3 && (
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold font-serif text-[#0F3D3E] mb-6">Select Interior Scope</h2>
                      <div className="grid gap-3">
                        {scopeOptions.map((opt, idx) => {
                          const isSelected = form.scope === opt.val;
                          return (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => handleSelectOption("scope", opt.val)}
                              className={`p-4 rounded-xl border text-left flex justify-between items-center transition-all duration-300 ${
                                isSelected
                                  ? "border-2 border-[#0F3D3E] bg-[#FAF7F2] shadow-sm"
                                  : "border-stone-200 hover:border-[#E8D8C4] bg-white"
                              }`}
                            >
                              <div>
                                <h3 className="font-semibold text-stone-900 text-xs sm:text-sm">{opt.title}</h3>
                                <p className="text-[10px] text-stone-400 mt-0.5 leading-relaxed">{opt.desc}</p>
                              </div>
                              <span className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                                isSelected ? "bg-[#0F3D3E] border-[#0F3D3E] text-white" : "border-stone-300 bg-white"
                              }`}>
                                {isSelected && <Check className="w-3.5 h-3.5" />}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* STEP 4: BUDGET PREFERENCE */}
                  {step === 4 && (
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold font-serif text-[#0F3D3E] mb-6">Quality & Budget Plan</h2>
                      <div className="grid gap-3">
                        {budgetOptions.map((opt, idx) => {
                          const isSelected = form.budget === opt.val;
                          return (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => handleSelectOption("budget", opt.val)}
                              className={`p-4 rounded-xl border text-left flex justify-between items-center transition-all duration-300 ${
                                isSelected
                                  ? "border-2 border-[#0F3D3E] bg-[#FAF7F2] shadow-sm"
                                  : "border-stone-200 hover:border-[#E8D8C4] bg-white"
                              }`}
                            >
                              <div>
                                <h3 className="font-semibold text-stone-900 text-xs sm:text-sm">{opt.title}</h3>
                                <p className="text-[10px] text-stone-400 mt-0.5 leading-relaxed">{opt.desc}</p>
                                <span className="text-[10px] font-bold text-[#0F3D3E] mt-1 block group-hover:text-stone-900">{opt.fittings}</span>
                              </div>
                              <span className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                                isSelected ? "bg-[#0F3D3E] border-[#0F3D3E] text-white" : "border-stone-300 bg-white"
                              }`}>
                                {isSelected && <Check className="w-3.5 h-3.5" />}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* STEP 5: LEAD INTAKE FOR UNLOCKING */}
                  {step === 5 && (
                    <form onSubmit={handleLeadSubmit} className="flex flex-col gap-4 text-left">
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold font-serif text-[#0F3D3E]">Unlock Pricing Estimate</h2>
                        <p className="text-stone-500 text-xs mt-1">Enter your details to generate your customized pricing range and detailed disclaimers.</p>
                      </div>

                      <div className="flex flex-col gap-3 mt-2">
                        {/* Name */}
                        <div>
                          <input
                            type="text"
                            placeholder="Your Full Name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            required
                            className="w-full p-3 border border-stone-200 rounded-xl bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3D3E] text-xs text-stone-800"
                          />
                          {errors.name && <p className="text-red-600 text-[10px] mt-1 font-semibold">{errors.name}</p>}
                        </div>

                        {/* Phone */}
                        <div>
                          <input
                            type="tel"
                            placeholder="Mobile Number"
                            maxLength="10"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            required
                            className="w-full p-3 border border-stone-200 rounded-xl bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3D3E] text-xs text-stone-800"
                          />
                          {errors.phone && <p className="text-red-600 text-[10px] mt-1 font-semibold">{errors.phone}</p>}
                        </div>

                        {/* Email */}
                        <div>
                          <input
                            type="email"
                            placeholder="Email Address"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            required
                            className="w-full p-3 border border-stone-200 rounded-xl bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3D3E] text-xs text-stone-800"
                          />
                          {errors.email && <p className="text-red-600 text-[10px] mt-1 font-semibold">{errors.email}</p>}
                        </div>

                        {/* Location */}
                        <div>
                          <input
                            type="text"
                            placeholder="Bangalore Service Area / Pincode"
                            value={form.location}
                            onChange={(e) => setForm({ ...form, location: e.target.value })}
                            required
                            className="w-full p-3 border border-stone-200 rounded-xl bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3D3E] text-xs text-stone-800"
                          />
                          {errors.location && <p className="text-red-600 text-[10px] mt-1 font-semibold">{errors.location}</p>}
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#0F3D3E] hover:bg-[#0B2C2D] text-white font-bold py-3.5 rounded-xl shadow transition duration-300 text-xs uppercase tracking-widest flex items-center justify-center gap-2 mt-4"
                      >
                        {loading ? "Calculating Estimate..." : "Unlock My Cost Estimate →"}
                      </button>
                    </form>
                  )}

                  {/* STEP 6: PRICING DISPLAY PANEL (FINAL CALCULATED RENDER) */}
                  {step === 6 && result && (
                    <div className="text-left animate-fadeIn">
                      <span className="text-[#0F3D3E] text-[10px] font-bold uppercase tracking-widest block">Calculated Result</span>
                      <h2 className="text-2xl font-bold font-serif text-stone-900 mt-1 mb-6">Your Customized Budget Estimate</h2>
                      
                      <div className="bg-[#0B2526] text-white p-8 rounded-3xl shadow-md border border-[#E8D8C4]/15 mb-6 text-center">
                        <span className="text-stone-400 text-xs uppercase tracking-widest font-bold">Estimated Pricing Range</span>
                        <div className="text-3xl md:text-5xl font-serif font-bold text-[#E8D8C4] mt-2 mb-4">
                          ₹{formatPrice(result.min)}L - ₹{formatPrice(result.max)}L
                        </div>
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-stone-300 text-xs border border-white/5">
                          <Check className="w-3.5 h-3.5 text-[#E8D8C4]" />
                          <span>Includes precision edge-banding & softclose hardware</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6 border-b border-stone-100 pb-6">
                        <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-stone-200/40">
                          <span className="text-[10px] text-stone-400 uppercase font-bold block">Rate / Sqft</span>
                          <span className="text-lg font-serif font-bold text-[#0F3D3E] mt-1 block">₹{result.rate} / sq.ft</span>
                        </div>
                        
                        <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-stone-200/40">
                          <span className="text-[10px] text-stone-400 uppercase font-bold block">Total Carpet Area</span>
                          <span className="text-lg font-serif font-bold text-[#0F3D3E] mt-1 block">{form.area} sq.ft</span>
                        </div>
                      </div>

                      <p className="text-[11px] text-stone-500 leading-relaxed italic mb-6">
                        *This estimate is calculated based on standard floorplans. Final pricing will depend on specific structural customization, chimney/hob appliance selections, and exact site conditions.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Link to="/contact" className="w-full">
                          <button className="w-full bg-[#0F3D3E] hover:bg-[#0B2C2D] text-white font-bold py-3.5 rounded-xl shadow text-xs uppercase tracking-widest transition">
                            Book Free Site Survey
                          </button>
                        </Link>
                        
                        <a
                          href={`https://wa.me/919164466606?text=Hi,%20I'm%20${form.name}.%20My%20carpet%20area%20is%20${form.area}%20sqft%20and%20I'd%20like%20to%20verify%20my%20modular%20estimate.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 border-2 border-[#0F3D3E] text-[#0F3D3E] hover:bg-[#0F3D3E] hover:text-white font-bold py-3 rounded-xl text-xs uppercase tracking-widest transition"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>WhatsApp Architect</span>
                        </a>
                      </div>
                    </div>
                  )}

                </div>

                {/* BACK / NEXT NAVIGATION ACTIONS */}
                {step <= 4 && (
                  <div className="flex justify-between items-center border-t border-stone-100 pt-6 mt-8">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      disabled={step === 1}
                      className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-stone-400 transition hover:text-[#0F3D3E] ${
                        step === 1 ? "opacity-30 cursor-not-allowed" : ""
                      }`}
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="bg-[#0F3D3E] hover:bg-[#0B2C2D] text-white px-7 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition shadow flex items-center gap-1.5"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

              </div>

              {/* RIGHT COLUMN: REAL-TIME SUMMARY & TRUST CREDENTIALS */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                
                {/* DYNAMIC REAL-TIME SELECTION BILL */}
                <div className="bg-[#FAF7F2] p-6 rounded-3xl border border-stone-200/50 text-left">
                  <span className="text-[#0F3D3E] text-[10px] font-bold uppercase tracking-widest block">Live Summary</span>
                  <h3 className="text-lg font-bold font-serif text-stone-900 mt-1 mb-4">Your Parameters</h3>
                  
                  <ul className="space-y-3.5 text-xs">
                    <li className="flex justify-between border-b border-stone-200/30 pb-2">
                      <span className="text-stone-400 font-medium">Property Type:</span>
                      <span className="font-bold text-[#0F3D3E]">{form.property || "Not Selected"}</span>
                    </li>
                    
                    <li className="flex justify-between border-b border-stone-200/30 pb-2">
                      <span className="text-stone-400 font-medium">Carpet Area:</span>
                      <span className="font-bold text-[#0F3D3E]">{form.area} sq.ft</span>
                    </li>
                    
                    <li className="flex justify-between border-b border-stone-200/30 pb-2">
                      <span className="text-stone-400 font-medium">Scope:</span>
                      <span className="font-bold text-[#0F3D3E] max-w-[150px] truncate text-right" title={form.scope}>{form.scope || "Not Selected"}</span>
                    </li>
                    
                    <li className="flex justify-between pb-1">
                      <span className="text-stone-400 font-medium">Quality Tier:</span>
                      <span className="font-bold text-[#0F3D3E]">{form.budget || "Not Selected"}</span>
                    </li>
                  </ul>
                </div>

                {/* TRUST SIGNALS LIST */}
                <div className="bg-white p-6 rounded-3xl border border-stone-200/50 text-left">
                  <h3 className="font-serif font-bold text-stone-900 text-sm mb-4">Instant Assurances</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2.5 text-xs text-stone-600">
                      <ShieldCheck className="w-4 h-4 text-[#0F3D3E] flex-shrink-0 mt-0.5" />
                      <span>10-Year structural material warranty</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-stone-600">
                      <CheckCircle2 className="w-4 h-4 text-[#0F3D3E] flex-shrink-0 mt-0.5" />
                      <span>Transparent line-item material invoice</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-stone-600">
                      <Compass className="w-4 h-4 text-[#0F3D3E] flex-shrink-0 mt-0.5" />
                      <span>Vastu-friendly architectural alignments</span>
                    </li>
                  </ul>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* TRUST BANNER */}
        <section className="bg-white py-12 border-t border-stone-100">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="flex justify-center mb-3">
                  <Star className="w-6 h-6 text-[#0F3D3E]" />
                </div>
                <h4 className="text-xl font-bold text-stone-950 font-serif">4.9 / 5★</h4>
                <p className="text-stone-400 text-xs font-semibold mt-1">Google Rating</p>
              </div>

              <div>
                <div className="flex justify-center mb-3">
                  <Home className="w-6 h-6 text-[#0F3D3E]" />
                </div>
                <h4 className="text-xl font-bold text-stone-950 font-serif">150+</h4>
                <p className="text-stone-400 text-xs font-semibold mt-1">Homes Delivered</p>
              </div>

              <div>
                <div className="flex justify-center mb-3">
                  <Building2 className="w-6 h-6 text-[#0F3D3E]" />
                </div>
                <h4 className="text-xl font-bold text-stone-950 font-serif">Bengaluru</h4>
                <p className="text-stone-400 text-xs font-semibold mt-1">All Zones Covered</p>
              </div>

              <div>
                <div className="flex justify-center mb-3">
                  <CheckCircle2 className="w-6 h-6 text-[#0F3D3E]" />
                </div>
                <h4 className="text-xl font-bold text-stone-950 font-serif">45-60 Days</h4>
                <p className="text-stone-400 text-xs font-semibold mt-1">Delivery Timeline</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EstimatePage;
