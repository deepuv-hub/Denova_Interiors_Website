import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  Home,
  Building2,
  Castle,
  Check,
  PhoneCall,
  MessageSquare
} from "lucide-react";
import {
  buildLeadPayload,
  isValidEmail,
  isValidIndianMobile,
  postLeadNoCors,
  trackLeadConversion,
  useSubmitLock,
} from "../utils/leadTracking";
import { FULL_HOME_RATE, FULL_HOME_RATE_RANGE, FULL_HOME_RATE_TEXT, PRICING_DISCLAIMER } from "../data/pricing";

const FULL_HOME = "Full Home Interior";
const KITCHEN = "Modular Kitchen Only";
const WARDROBES = "Wardrobes Only";
const KITCHEN_WARDROBES = "Modular Kitchen & Wardrobes";
const CIVIL = "Premium Full Home + Civil Work";

const MIN_CARPET_AREA = 200;
const MAX_CARPET_AREA = 10000;

const RATE_LINE = `${FULL_HOME_RATE_TEXT}.`;

// Copy for scopes without a confirmed rate: these never show a number.
const CUSTOM_COPY = {
  [KITCHEN]: {
    explain: "Kitchen pricing depends on the actual kitchen size, layout, materials, hardware and storage requirements.",
    cta: "Get Custom Kitchen Estimate",
  },
  [WARDROBES]: {
    explain: "Wardrobe pricing depends on the wardrobe size, configuration, materials, hardware and storage requirements.",
    cta: "Get Custom Wardrobe Estimate",
  },
  [KITCHEN_WARDROBES]: {
    explain: "This estimate depends on your actual kitchen and wardrobe requirements: sizes, layout, materials, hardware and storage.",
    cta: "Get Custom Kitchen & Wardrobe Estimate",
  },
  default: {
    explain: "This scope is priced on your actual requirement, measurements and site conditions, so we prepare it individually.",
    cta: "Get Custom Estimate",
  },
};

const KITCHEN_TYPES = ["L-Shape", "U-Shape", "Parallel", "Island", "Straight", "Not sure yet"];
const WARDROBE_COUNTS = ["1", "2", "3", "4 or more", "Not sure yet"];

const propertyOptions = [
  { title: "1 BHK Apartment", val: "1 BHK", desc: "Compact residential flat", icon: Home },
  { title: "2 BHK Apartment", val: "2 BHK", desc: "Standard residential flat", icon: Home },
  { title: "3 BHK Apartment", val: "3 BHK", desc: "Spacious residential flat", icon: Home },
  { title: "Luxury Villa", val: "Villa", desc: "Bespoke detached duplex/villa", icon: Castle },
  { title: "Commercial Space", val: "Commercial", desc: "Retail or office space", icon: Building2 }
];

const scopeOptions = [
  { title: "Full Home Interior", val: FULL_HOME, desc: "Interiors for the complete home" },
  { title: "Modular Kitchen Only", val: KITCHEN, desc: "Kitchen cabinets and storage" },
  { title: "Wardrobes Only", val: WARDROBES, desc: "Sliding or hinged wardrobes and lofts" },
  { title: "Modular Kitchen & Wardrobes", val: KITCHEN_WARDROBES, desc: "Kitchen and wardrobes together" },
  { title: "Full Home + Civil Work", val: CIVIL, desc: "Interiors with layout or civil changes" }
];

const STEP_LABELS = ["Property Type", "Scope of Work", "Your Requirement", "Your Details"];

// ₹ amount in lakhs: 1120000 -> "11.2", 1400000 -> "14".
const formatLakh = (num) => String(Math.round(num / 10000) / 10);

const EstimatePage = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    property: "",
    scope: "",
    carpetArea: "1000",
    kitchenType: "",
    kitchenSize: "",
    wardrobeCount: "",
    wardrobeSize: "",
    requirement: "",
    name: "",
    phone: "",
    email: "",
    location: "",
  });

  const [errors, setErrors] = useState({});
  const { submitting: loading, acquire, release } = useSubmitLock();
  const [result, setResult] = useState(null);
  // Set once this visitor's lead has been sent, so going back and
  // resubmitting does not create a second lead or conversion.
  const submittedLeadIdRef = useRef(null);

  // Only full-home interiors for homes have a confirmed rate (carpet area x
  // FULL_HOME_RATE). Every other scope is a custom estimate.
  const isFullHomeEstimate = form.scope === FULL_HOME && form.property !== "Commercial";
  const hasKitchen = form.scope === KITCHEN || form.scope === KITCHEN_WARDROBES;
  const hasWardrobes = form.scope === WARDROBES || form.scope === KITCHEN_WARDROBES;
  const customCopy = CUSTOM_COPY[form.scope] || CUSTOM_COPY.default;
  const carpetArea = Number(form.carpetArea);

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleNextStep = () => {
    if (step === 1 && !form.property) {
      alert("Please select a property type to proceed");
      return;
    }
    if (step === 2 && !form.scope) {
      alert("Please select your scope of work");
      return;
    }
    if (step === 3 && isFullHomeEstimate) {
      if (!Number.isFinite(carpetArea) || carpetArea < MIN_CARPET_AREA || carpetArea > MAX_CARPET_AREA) {
        setErrors((prev) => ({
          ...prev,
          carpetArea: `Enter a carpet area between ${MIN_CARPET_AREA} and ${MAX_CARPET_AREA.toLocaleString("en-IN")} sq.ft.`,
        }));
        return;
      }
    }
    setStep((currentStep) => currentStep + 1);
  };

  const handlePrevStep = () => {
    setStep((currentStep) => Math.max(1, currentStep - 1));
  };

  const calculateResult = () => {
    if (!isFullHomeEstimate) return { custom: true };
    return {
      custom: false,
      area: carpetArea,
      min: carpetArea * FULL_HOME_RATE.min,
      max: carpetArea * FULL_HOME_RATE.max,
    };
  };

  // Short requirement summary for the lead sheet and WhatsApp message.
  const requirementSummary = () => {
    const parts = [];
    if (isFullHomeEstimate) parts.push(`Carpet area: ${carpetArea} sq.ft`);
    if (hasKitchen) {
      if (form.kitchenType) parts.push(`Kitchen type: ${form.kitchenType}`);
      if (form.kitchenSize) parts.push(`Kitchen size: ~${form.kitchenSize} running ft`);
    }
    if (hasWardrobes) {
      if (form.wardrobeCount) parts.push(`Wardrobes: ${form.wardrobeCount}`);
      if (form.wardrobeSize.trim()) parts.push(`Wardrobe size: ${form.wardrobeSize.trim()}`);
    }
    if (!isFullHomeEstimate && !hasKitchen && !hasWardrobes && form.requirement.trim()) {
      parts.push(`Requirement: ${form.requirement.trim()}`);
    }
    return parts.join(", ");
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!form.name?.trim()) newErrors.name = "Your name is required";

    if (!form.phone.trim()) {
      newErrors.phone = "Mobile number is required";
    } else if (!isValidIndianMobile(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.location.trim()) {
      newErrors.location = "Pincode or area is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const calculated = calculateResult();

    if (submittedLeadIdRef.current) {
      setResult(calculated);
      setStep(5);
      return;
    }

    if (!acquire()) return;

    const summary = requirementSummary();
    const lead = buildLeadPayload({
      name: form.name,
      phone: form.phone,
      email: form.email,
      location: form.location,
      propertyType: form.property,
      possession: `Scope: ${form.scope}`,
      budget: calculated.custom
        ? "Custom estimate requested"
        : `Indicative ₹${formatLakh(calculated.min)}L - ₹${formatLakh(calculated.max)}L (${calculated.area} sq.ft carpet area)`,
      message: `Estimate request: ${form.scope}${summary ? ` (${summary})` : ""}`,
      source: "Cost Calculator Page",
    });

    try {
      await postLeadNoCors(lead);
    } catch (err) {
      console.error("Calculator save error:", err);
      alert("We could not submit your details. Please check your connection and try again.");
      release();
      return;
    }

    submittedLeadIdRef.current = lead.lead_id;
    await trackLeadConversion({ leadId: lead.lead_id, leadSource: lead.source });

    setResult(calculated);
    setStep(5);
    release();
  };

  const optionButtonClass = (isSelected) =>
    `p-4 rounded-xl border text-left flex justify-between items-center transition-all duration-300 ${
      isSelected ? "border-2 border-[#0F3D3E] bg-[#FAF7F2] shadow-sm" : "border-stone-200 hover:border-[#E8D8C4] bg-white"
    }`;
  const inputClass = "w-full p-3 border border-stone-200 rounded-xl bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3D3E] text-xs text-stone-800";
  const labelClass = "block text-xs font-semibold text-stone-700 mb-1.5";

  const whatsappText = `Hi, I'm ${form.name}. I'd like ${
    isFullHomeEstimate ? "to discuss my full-home interior estimate" : "a custom estimate"
  } for ${form.scope} (${form.property}${requirementSummary() ? `; ${requirementSummary()}` : ""}).`;

  return (
    <>
      <Helmet>
        <title>Interior Design Cost Calculator Bangalore | Denova Creations</title>
        <meta
          name="description"
          content={`Estimate your home interior budget in Bangalore. Full-home interiors from ${FULL_HOME_RATE_TEXT} of carpet area. Custom estimates for modular kitchens and wardrobes.`}
        />
        <link rel="canonical" href="https://denovacreations.com/estimate" />
        <meta property="og:title" content="Interior Design Cost Calculator Bangalore | Denova Creations" />
        <meta
          property="og:description"
          content={`Indicative full-home interior budget for Bangalore homes: ${FULL_HOME_RATE_TEXT} of carpet area.`}
        />
        <meta property="og:image" content="https://denovacreations.com/images/hero2.webp" />
        <meta property="og:url" content="https://denovacreations.com/estimate" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Interior Design Cost Calculator Bangalore | Denova Creations" />
        <meta
          name="twitter:description"
          content={`Indicative full-home interior budget for Bangalore homes: ${FULL_HOME_RATE_TEXT} of carpet area.`}
        />
        <meta name="twitter:image" content="https://denovacreations.com/images/hero2.webp" />
      </Helmet>

      <div className="bg-[#FAF8F5] text-stone-800 antialiased min-h-screen">
        {/* HERO STRIP (DEEP EMERALD) */}
        <section className="relative overflow-hidden bg-[#0A2526] text-white py-16 md:py-20 border-b border-[#E8D8C4]/15">
          <div className="absolute inset-0">
            <img
              src="/images/hero2.webp"
              alt="Interior design cost estimate for Bangalore homes"
              className="w-full h-full object-cover opacity-20 scale-105"
              loading="eager"
            />
            <div className="absolute inset-0 bg-[#0A2526]/90"></div>
          </div>

          <div className="relative z-10 container-custom">
            <div className="max-w-3xl text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-serif leading-tight text-white mb-4">
                Interior Design Cost Calculator <span className="text-[#E8D8C4]">for Bangalore Homes</span>
              </h1>

              <p className="text-stone-300 text-sm md:text-base leading-relaxed max-w-xl">
                Full-home interiors from {FULL_HOME_RATE_TEXT} of carpet area. Get an indicative budget for your home, or request a custom estimate for a modular kitchen or wardrobes.
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
                {step <= 4 && (
                  <div className="mb-8">
                    <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                      <span>Step {step} of 4</span>
                      <span>{STEP_LABELS[step - 1]}</span>
                    </div>
                    <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#0F3D3E] rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${(step / 4) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <div className="flex-grow">

                  {/* STEP 1: PROPERTY TYPE */}
                  {step === 1 && (
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold font-serif text-[#0F3D3E] mb-6">Select Property Type</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {propertyOptions.map((opt) => {
                          const IconComp = opt.icon;
                          const isSelected = form.property === opt.val;
                          return (
                            <button
                              key={opt.val}
                              type="button"
                              onClick={() => updateField("property", opt.val)}
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

                  {/* STEP 2: SCOPE */}
                  {step === 2 && (
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold font-serif text-[#0F3D3E] mb-6">Select Scope of Work</h2>
                      <div className="grid gap-3">
                        {scopeOptions.map((opt) => {
                          const isSelected = form.scope === opt.val;
                          return (
                            <button
                              key={opt.val}
                              type="button"
                              onClick={() => updateField("scope", opt.val)}
                              className={optionButtonClass(isSelected)}
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

                  {/* STEP 3: REQUIREMENT (depends on scope) */}
                  {step === 3 && isFullHomeEstimate && (
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold font-serif text-[#0F3D3E] mb-2">Carpet Area (sq.ft.)</h2>
                      <p className="text-stone-500 text-xs mb-8">
                        Full-home pricing is based on carpet area: the usable floor area inside your home's walls.
                      </p>

                      <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-stone-200/40 text-center max-w-md mx-auto shadow-inner">
                        <label htmlFor="carpetArea" className="text-[10px] uppercase font-bold text-stone-500 tracking-wider block">
                          Carpet Area (sq.ft.)
                        </label>
                        <input
                          id="carpetArea"
                          type="number"
                          inputMode="numeric"
                          min={MIN_CARPET_AREA}
                          max={MAX_CARPET_AREA}
                          step="10"
                          value={form.carpetArea}
                          onChange={(e) => updateField("carpetArea", e.target.value)}
                          className="mt-2 mb-4 w-40 text-center text-3xl font-serif font-bold text-[#0F3D3E] bg-white border border-stone-200 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#0F3D3E]"
                        />
                        <input
                          type="range"
                          aria-label="Carpet Area (sq.ft.)"
                          min="300"
                          max="5000"
                          step="50"
                          value={Math.min(5000, Math.max(300, carpetArea || 300))}
                          onChange={(e) => updateField("carpetArea", e.target.value)}
                          className="w-full accent-[#0F3D3E]"
                        />
                        <div className="flex justify-between text-[10px] text-stone-400 font-bold mt-2">
                          <span>300 SQ.FT.</span>
                          <span>5,000 SQ.FT.</span>
                        </div>
                        {errors.carpetArea && <p className="text-red-600 text-[11px] mt-3 font-semibold">{errors.carpetArea}</p>}
                      </div>
                    </div>
                  )}

                  {step === 3 && !isFullHomeEstimate && (
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold font-serif text-[#0F3D3E] mb-2">Tell Us About Your Requirement</h2>
                      <p className="text-stone-500 text-xs mb-6">
                        All fields here are optional. Share what you know and our designer will cover the rest.
                      </p>

                      <div className="grid gap-4 max-w-md">
                        {hasKitchen && (
                          <>
                            <div>
                              <label htmlFor="kitchenType" className={labelClass}>Kitchen type</label>
                              <select
                                id="kitchenType"
                                value={form.kitchenType}
                                onChange={(e) => updateField("kitchenType", e.target.value)}
                                className={inputClass}
                              >
                                <option value="">Select kitchen type</option>
                                {KITCHEN_TYPES.map((type) => <option key={type} value={type}>{type}</option>)}
                              </select>
                            </div>
                            <div>
                              <label htmlFor="kitchenSize" className={labelClass}>Approximate kitchen size, in running feet (if known)</label>
                              <input
                                id="kitchenSize"
                                type="number"
                                inputMode="numeric"
                                min="1"
                                placeholder="e.g. 12"
                                value={form.kitchenSize}
                                onChange={(e) => updateField("kitchenSize", e.target.value)}
                                className={inputClass}
                              />
                            </div>
                          </>
                        )}

                        {hasWardrobes && (
                          <>
                            <div>
                              <label htmlFor="wardrobeCount" className={labelClass}>Number of wardrobes</label>
                              <select
                                id="wardrobeCount"
                                value={form.wardrobeCount}
                                onChange={(e) => updateField("wardrobeCount", e.target.value)}
                                className={inputClass}
                              >
                                <option value="">Select number of wardrobes</option>
                                {WARDROBE_COUNTS.map((count) => <option key={count} value={count}>{count}</option>)}
                              </select>
                            </div>
                            <div>
                              <label htmlFor="wardrobeSize" className={labelClass}>Approximate wardrobe size (if known)</label>
                              <input
                                id="wardrobeSize"
                                type="text"
                                placeholder="e.g. 7 ft x 8 ft"
                                value={form.wardrobeSize}
                                onChange={(e) => updateField("wardrobeSize", e.target.value)}
                                className={inputClass}
                              />
                            </div>
                          </>
                        )}

                        {!hasKitchen && !hasWardrobes && (
                          <div>
                            <label htmlFor="requirement" className={labelClass}>Describe your requirement</label>
                            <textarea
                              id="requirement"
                              rows={4}
                              placeholder="e.g. approximate area, rooms, layout or civil changes"
                              value={form.requirement}
                              onChange={(e) => updateField("requirement", e.target.value)}
                              className={inputClass}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* STEP 4: LEAD DETAILS */}
                  {step === 4 && (
                    <form onSubmit={handleLeadSubmit} className="flex flex-col gap-4 text-left">
                      {isFullHomeEstimate ? (
                        <div>
                          <h2 className="text-xl md:text-2xl font-bold font-serif text-[#0F3D3E]">See Your Indicative Budget</h2>
                          <p className="text-stone-500 text-xs mt-1">
                            Enter your details to see the indicative full-home budget for {carpetArea.toLocaleString("en-IN")} sq.ft. of carpet area.
                          </p>
                        </div>
                      ) : (
                        <div>
                          <span className="text-[#0F3D3E] text-[10px] font-bold uppercase tracking-widest block">{form.scope}</span>
                          <h2 className="text-xl md:text-2xl font-bold font-serif text-[#0F3D3E] mt-1">Custom Estimate Required</h2>
                          <p className="text-stone-500 text-xs mt-1">
                            {customCopy.explain} Share your details and our designer will prepare an estimate for your requirement.
                          </p>
                        </div>
                      )}

                      <div className="flex flex-col gap-3 mt-2">
                        <div>
                          <input
                            type="text"
                            aria-label="Your full name"
                            placeholder="Your Full Name"
                            value={form.name}
                            onChange={(e) => updateField("name", e.target.value)}
                            required
                            className={inputClass}
                          />
                          {errors.name && <p className="text-red-600 text-[10px] mt-1 font-semibold">{errors.name}</p>}
                        </div>

                        <div>
                          <input
                            type="tel"
                            aria-label="Mobile number"
                            placeholder="Mobile Number"
                            maxLength="10"
                            value={form.phone}
                            onChange={(e) => updateField("phone", e.target.value)}
                            required
                            className={inputClass}
                          />
                          {errors.phone && <p className="text-red-600 text-[10px] mt-1 font-semibold">{errors.phone}</p>}
                        </div>

                        <div>
                          <input
                            type="email"
                            aria-label="Email address"
                            placeholder="Email Address"
                            value={form.email}
                            onChange={(e) => updateField("email", e.target.value)}
                            required
                            className={inputClass}
                          />
                          {errors.email && <p className="text-red-600 text-[10px] mt-1 font-semibold">{errors.email}</p>}
                        </div>

                        <div>
                          <input
                            type="text"
                            aria-label="Bangalore service area or pincode"
                            placeholder="Bangalore Service Area / Pincode"
                            value={form.location}
                            onChange={(e) => updateField("location", e.target.value)}
                            required
                            className={inputClass}
                          />
                          {errors.location && <p className="text-red-600 text-[10px] mt-1 font-semibold">{errors.location}</p>}
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#0F3D3E] hover:bg-[#0B2C2D] text-white font-bold py-3.5 rounded-xl shadow transition duration-300 text-xs uppercase tracking-widest flex items-center justify-center gap-2 mt-4"
                      >
                        {loading ? "Submitting..." : isFullHomeEstimate ? "Show My Indicative Budget →" : `${customCopy.cta} →`}
                      </button>

                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-widest text-stone-400 transition hover:text-[#0F3D3E]"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>
                    </form>
                  )}

                  {/* STEP 5: RESULT */}
                  {step === 5 && result && (
                    <div className="text-left animate-fadeIn">
                      {result.custom ? (
                        <>
                          <span className="text-[#0F3D3E] text-[10px] font-bold uppercase tracking-widest block">{form.scope}</span>
                          <h2 className="text-2xl font-bold font-serif text-stone-900 mt-1 mb-6">Custom Estimate Required</h2>
                          <div className="bg-[#0B2526] text-white p-8 rounded-3xl shadow-md border border-[#E8D8C4]/15 mb-6 text-center">
                            <span className="text-stone-400 text-xs uppercase tracking-widest font-bold">Request Received</span>
                            <p className="text-lg md:text-xl font-serif font-bold text-[#E8D8C4] mt-3">
                              {customCopy.explain}
                            </p>
                            <p className="text-stone-300 text-xs mt-3">
                              Our designer will contact you to understand your requirement and prepare a custom estimate.
                            </p>
                          </div>
                          <p className="text-[11px] text-stone-500 leading-relaxed mb-6">
                            For reference, full-home interiors are priced at {RATE_LINE}
                          </p>
                        </>
                      ) : (
                        <>
                          <span className="text-[#0F3D3E] text-[10px] font-bold uppercase tracking-widest block">Indicative Estimate</span>
                          <h2 className="text-2xl font-bold font-serif text-stone-900 mt-1 mb-6">Indicative Full-Home Interior Budget</h2>

                          <div className="bg-[#0B2526] text-white p-8 rounded-3xl shadow-md border border-[#E8D8C4]/15 mb-6 text-center">
                            <span className="text-stone-400 text-xs uppercase tracking-widest font-bold">
                              {result.area.toLocaleString("en-IN")} sq.ft. carpet area
                            </span>
                            <div className="text-3xl md:text-5xl font-serif font-bold text-[#E8D8C4] mt-2 mb-4">
                              ₹{formatLakh(result.min)}L – ₹{formatLakh(result.max)}L
                            </div>
                            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-stone-300 text-xs border border-white/5">
                              <Check className="w-3.5 h-3.5 text-[#E8D8C4]" />
                              <span>{RATE_LINE}</span>
                            </div>
                          </div>

                          <p className="text-[11px] text-stone-500 leading-relaxed italic mb-6">
                            Indicative estimate only. {PRICING_DISCLAIMER} This is not a quotation.
                          </p>
                        </>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <a
                          href="tel:+919591039597"
                          className="flex items-center justify-center gap-2 bg-[#0F3D3E] hover:bg-[#0B2C2D] text-white font-bold py-3.5 rounded-xl shadow text-xs uppercase tracking-widest transition"
                        >
                          <PhoneCall className="w-4 h-4" />
                          <span>Call +91 95910 39597</span>
                        </a>

                        <a
                          href={`https://wa.me/919591039597?text=${encodeURIComponent(whatsappText)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 border-2 border-[#0F3D3E] text-[#0F3D3E] hover:bg-[#0F3D3E] hover:text-white font-bold py-3 rounded-xl text-xs uppercase tracking-widest transition"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>WhatsApp Us</span>
                        </a>
                      </div>

                      <p className="text-[11px] text-stone-500 mt-5">
                        Want to see our work first? Browse{" "}
                        <Link to="/projects" className="underline text-[#0F3D3E]">completed projects</Link>
                        {hasKitchen && (
                          <>
                            {" "}or our{" "}
                            <Link to="/modular-kitchen-bangalore" className="underline text-[#0F3D3E]">modular kitchen designs</Link>
                          </>
                        )}
                        .
                      </p>
                    </div>
                  )}

                </div>

                {/* BACK / NEXT NAVIGATION (steps 1-3) */}
                {step <= 3 && (
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

              {/* RIGHT COLUMN: SUMMARY & TRUST */}
              <div className="lg:col-span-4 flex flex-col gap-6">

                <div className="bg-[#FAF7F2] p-6 rounded-3xl border border-stone-200/50 text-left">
                  <span className="text-[#0F3D3E] text-[10px] font-bold uppercase tracking-widest block">Live Summary</span>
                  <h3 className="text-lg font-bold font-serif text-stone-900 mt-1 mb-4">Your Selections</h3>

                  <ul className="space-y-3.5 text-xs">
                    <li className="flex justify-between border-b border-stone-200/30 pb-2">
                      <span className="text-stone-400 font-medium">Property Type:</span>
                      <span className="font-bold text-[#0F3D3E]">{form.property || "Not Selected"}</span>
                    </li>
                    <li className="flex justify-between border-b border-stone-200/30 pb-2">
                      <span className="text-stone-400 font-medium">Scope:</span>
                      <span className="font-bold text-[#0F3D3E] max-w-[150px] truncate text-right" title={form.scope}>{form.scope || "Not Selected"}</span>
                    </li>
                    {isFullHomeEstimate && (
                      <li className="flex justify-between pb-1">
                        <span className="text-stone-400 font-medium">Carpet Area:</span>
                        <span className="font-bold text-[#0F3D3E]">{form.carpetArea || "-"} sq.ft.</span>
                      </li>
                    )}
                    {form.scope && !isFullHomeEstimate && (
                      <li className="flex justify-between pb-1">
                        <span className="text-stone-400 font-medium">Estimate:</span>
                        <span className="font-bold text-[#0F3D3E]">Custom</span>
                      </li>
                    )}
                  </ul>

                  <p className="text-[11px] text-stone-500 mt-4 leading-relaxed">
                    Full-home interiors: {RATE_LINE}
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* CONFIRMED PRICING FACTS */}
        <section className="bg-white py-12 border-t border-stone-100">
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-xl font-bold text-stone-950 font-serif">{FULL_HOME_RATE_RANGE} / sq.ft.</h4>
                <p className="text-stone-400 text-xs font-semibold mt-1">Full-home interiors, indicative range</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-stone-950 font-serif">Carpet Area</h4>
                <p className="text-stone-400 text-xs font-semibold mt-1">Basis for full-home pricing</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-stone-950 font-serif">Bengaluru</h4>
                <p className="text-stone-400 text-xs font-semibold mt-1">Service area</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EstimatePage;
