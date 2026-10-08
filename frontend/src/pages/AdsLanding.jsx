import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import logoPrimary from "@/assets/branding/logo-primary.png";
import { companyInfo } from "../data/mock";
import {
  Sparkles,
  Star,
  Award,
  ShieldCheck,
  Clock,
  Compass,
  Users,
  PhoneCall,
  Calendar,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  ArrowRight,
  Check,
} from "lucide-react";
import {
  buildLeadPayload,
  isValidIndianMobile,
  postLeadNoCors,
  trackLeadConversion,
  useSubmitLock,
} from "../utils/leadTracking";
import { FULL_HOME_RATE, FULL_HOME_RATE_RANGE, PRICING_DISCLAIMER } from "../data/pricing";

const PRICE_RANGE = `${FULL_HOME_RATE_RANGE}/sq.ft.`;
const PRICE_RANGE_TEXT = `Indicative full-home interior pricing: ${PRICE_RANGE}`;
const PRICE_SPLIT_TEXT = `Starting from ₹${FULL_HOME_RATE.min.toLocaleString("en-IN")}/sq.ft. | Up to ₹${FULL_HOME_RATE.max.toLocaleString("en-IN")}/sq.ft.`;
const PRICE_QUALIFIER = PRICING_DISCLAIMER;

const PRIMARY_CTA = "Get Free Consultation";

const WHATSAPP_URL = `https://wa.me/919591039597?text=${encodeURIComponent(
  "Hi, I am looking for home interiors in Bangalore. Please share details."
)}`;

const PROPERTY_OPTIONS = [
  { value: "1 BHK", label: "1 BHK Apartment" },
  { value: "2 BHK", label: "2 BHK Apartment" },
  { value: "3 BHK", label: "3 BHK Apartment" },
  { value: "3+ BHK", label: "3+ BHK / Duplex" },
  { value: "Villa", label: "Villa / Independent House" },
];

const BUDGET_OPTIONS = [
  { value: "3.5-5L", label: "₹3.5L – ₹5 Lakhs" },
  { value: "5-10L", label: "₹5L – ₹10 Lakhs" },
  { value: "10-20L", label: "₹10L – ₹20 Lakhs" },
  { value: "20L+", label: "₹20 Lakhs+" },
];

const FIELD_ORDER = ["name", "phone", "propertyType", "budget"];

const validateLead = (form) => {
  const errors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!isValidIndianMobile(form.phone)) errors.phone = "Please enter a valid 10-digit phone number.";
  if (!form.propertyType) errors.propertyType = "Please select your property type.";
  if (!form.budget) errors.budget = "Please select your budget range.";
  return errors;
};

// 16px text on mobile prevents iOS zoom on focus; 14px from md up.
const fieldClass = (hasError) =>
  `w-full p-3 border rounded-lg bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3B2E] focus:border-transparent text-base md:text-sm transition duration-200 text-stone-800 placeholder-stone-400 ${
    hasError ? "border-red-400" : "border-stone-200"
  }`;

const FieldError = ({ id, message }) =>
  message ? (
    <p id={id} className="text-red-600 text-xs mt-1">
      {message}
    </p>
  ) : null;

/* 4-FIELD CONSULTATION FORM (used in the hero and the final CTA) */
const LeadForm = ({ idPrefix }) => {
  const [form, setForm] = useState({ name: "", phone: "", propertyType: "", budget: "" });
  const [errors, setErrors] = useState({});
  const [attempted, setAttempted] = useState(false);
  const { submitting, acquire, release } = useSubmitLock();
  const formRef = useRef(null);

  const fieldId = (name) => `${idPrefix}-${name}`;
  const errorId = (name) => `${idPrefix}-${name}-error`;

  const handleChange = (e) => {
    const next = { ...form, [e.target.name]: e.target.value };
    setForm(next);
    // After the first submit attempt, re-check as the visitor fixes fields.
    if (attempted) setErrors(validateLead(next));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAttempted(true);

    const newErrors = validateLead(form);
    setErrors(newErrors);
    const firstInvalid = FIELD_ORDER.find((name) => newErrors[name]);
    if (firstInvalid) {
      // Keep invalid attempts away from GTM's form-submit listener on
      // document (the Meta "Lead" tag fires on gtm.formSubmit).
      e.stopPropagation();
      formRef.current?.querySelector(`#${fieldId(firstInvalid)}`)?.focus();
      return;
    }

    if (!acquire()) return;

    // email / location / possession are sent empty so the lead sheet keeps
    // its existing columns.
    const lead = buildLeadPayload({
      name: form.name,
      phone: form.phone,
      email: "",
      propertyType: form.propertyType,
      location: "",
      possession: "",
      budget: form.budget,
      source: "Ads Landing Page",
    });

    try {
      await postLeadNoCors(lead);
    } catch (err) {
      console.error("Submission issue:", err);
      alert("We could not submit your request. Please check your connection and try again.");
      release();
      return;
    }

    await trackLeadConversion({ leadId: lead.lead_id, leadSource: lead.source });
    window.location.href = "/thank-you";
  };

  const a11y = (name) => ({
    id: fieldId(name),
    name,
    "aria-invalid": errors[name] ? "true" : "false",
    "aria-describedby": errors[name] ? errorId(name) : undefined,
  });

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      data-lead-form
      className="bg-white/95 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20 text-[#0F3B2E] flex flex-col gap-4 w-full text-left"
    >
      <div>
        <h2 className="text-xl font-bold font-serif leading-tight">
          Get Your Home Interior Consultation
        </h2>
        <p className="text-sm text-stone-600 mt-1.5 leading-relaxed">
          Tell us about your project and our team will contact you to discuss your requirements, design and budget.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {/* NAME */}
        <div>
          <label htmlFor={fieldId("name")} className="sr-only">Your Name</label>
          <input
            type="text"
            autoComplete="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className={fieldClass(errors.name)}
            {...a11y("name")}
          />
          <FieldError id={errorId("name")} message={errors.name} />
        </div>

        {/* PHONE */}
        <div>
          <label htmlFor={fieldId("phone")} className="sr-only">Phone Number</label>
          <input
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="10-Digit Phone Number"
            value={form.phone}
            maxLength={15}
            onChange={handleChange}
            className={fieldClass(errors.phone)}
            {...a11y("phone")}
          />
          <FieldError id={errorId("phone")} message={errors.phone} />
        </div>

        {/* PROPERTY TYPE */}
        <div>
          <label htmlFor={fieldId("propertyType")} className="sr-only">Property Type / Layout</label>
          <select
            value={form.propertyType}
            onChange={handleChange}
            className={fieldClass(errors.propertyType)}
            {...a11y("propertyType")}
          >
            <option value="">Property Type / Layout</option>
            {PROPERTY_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          <FieldError id={errorId("propertyType")} message={errors.propertyType} />
        </div>

        {/* BUDGET */}
        <div>
          <label htmlFor={fieldId("budget")} className="sr-only">Budget Range</label>
          <select
            value={form.budget}
            onChange={handleChange}
            className={fieldClass(errors.budget)}
            {...a11y("budget")}
          >
            <option value="">Budget Range</option>
            {BUDGET_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          <FieldError id={errorId("budget")} message={errors.budget} />
        </div>
      </div>

      {/* SUBMIT: only disabled while a submission is in flight */}
      <button
        type="submit"
        disabled={submitting}
        className={`w-full min-h-[52px] py-3.5 rounded-lg font-bold text-sm tracking-wider uppercase shadow-md transition-all duration-300 mt-1 ${
          submitting
            ? "bg-stone-300 text-stone-600 cursor-wait"
            : "bg-[#0F3B2E] text-white hover:bg-[#154e3d] hover:shadow-lg active:scale-[0.98]"
        }`}
      >
        {submitting ? "Submitting..." : PRIMARY_CTA}
      </button>

      <div className="space-y-2 text-center text-xs text-stone-500 border-t border-stone-100 pt-4">
        <div className="flex items-center justify-center gap-1.5 text-stone-700 font-medium">
          <Clock className="w-3.5 h-3.5 text-[#0F3B2E]" />
          <span>Our team will call you to discuss your project</span>
        </div>
        <p className="text-[11px] text-stone-500">
          Prefer chat?{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#0F3B2E] underline underline-offset-2"
          >
            Talk to a Designer on WhatsApp
          </a>
        </p>
        <p className="text-[11px] text-stone-400 leading-normal">
          No spam. By submitting, you agree to our{" "}
          <a href="/privacy-policy" className="underline hover:text-stone-600 transition">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </form>
  );
};

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

const SectionCta = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-[#0F3B2E] text-white hover:bg-[#154e3d] min-h-[48px] px-8 py-3.5 rounded-lg font-bold text-sm tracking-wider uppercase shadow-md transition duration-300 inline-flex items-center gap-2 transform active:scale-95"
  >
    <span>{PRIMARY_CTA}</span>
    <ArrowRight className="w-4 h-4" />
  </button>
);

const FAQS = [
  {
    q: "How much do home interiors cost in Bangalore?",
    a: `${PRICE_RANGE_TEXT} ${PRICE_QUALIFIER} Kitchen-only and wardrobe-only work is estimated separately for your layout.`,
  },
  {
    q: "Do you work near me? Which areas of Bangalore do you cover?",
    a: "We design and execute home interiors across Bangalore, including Whitefield, Sarjapur Road, HSR Layout, Koramangala, Electronic City, Indiranagar, Marathahalli, Hebbal, Yelahanka and JP Nagar. Our office is on Begur – Hulimavu Road.",
  },
  {
    q: "What happens after I request a consultation?",
    a: "Our team will call you to understand your home, requirements and budget, and to plan the design discussion. You can get an indicative interior budget based on your project requirements.",
  },
  {
    q: "Do you execute on-site custom structural changes?",
    a: "Yes, end-to-end turnkey architectural planning includes complete dry wall partitions, customized false ceiling execution, complete tile cladding, and lighting layout relocations.",
  },
  {
    q: "What precautions are taken for material quality checks?",
    a: "We welcome client structural checks directly on-site prior to final laminations.",
  },
];

const AdsLanding = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formInView, setFormInView] = useState(false);

  // Hide the sticky mobile CTA while any lead form is on screen, so it never
  // covers form fields.
  useEffect(() => {
    const forms = document.querySelectorAll("[data-lead-form]");
    if (!forms.length || typeof IntersectionObserver === "undefined") return;
    const visible = new Set();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      });
      setFormInView(visible.size > 0);
    });
    forms.forEach((f) => observer.observe(f));
    return () => observer.disconnect();
  }, []);

  const scrollToForm = () => {
    const formEl = document.getElementById("leadForm");
    if (formEl) formEl.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="bg-[#FAF8F5] text-stone-800 antialiased min-h-screen overflow-x-hidden">
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
        <div className="max-w-6xl mx-auto px-4 py-5 md:py-6 flex items-center justify-between">
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
              href="tel:+919591039597"
              className="hidden sm:flex items-center gap-2 text-white font-medium hover:text-[#E7D7C9] transition text-sm bg-[#0F3B2E]/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
            >
              <PhoneCall className="w-4 h-4 text-[#E7D7C9]" />
              <span>+91 95910 39597</span>
            </a>
            <button
              onClick={scrollToForm}
              className="bg-[#E7D7C9] hover:bg-white text-[#0F3B2E] text-xs md:text-sm font-semibold px-4 md:px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Free Consultation
            </button>
          </div>
        </div>
      </header>

      {/* 1-2. HERO + LEAD FORM */}
      <section className="relative md:min-h-screen flex items-center pt-24 md:pt-28 pb-12 md:pb-16 overflow-hidden">
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

        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 text-white text-left">
            <div className="inline-flex items-center gap-2 bg-[#E7D7C9]/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E7D7C9]/20 text-[#E7D7C9] text-[11px] md:text-xs font-semibold uppercase tracking-wider mb-5 md:mb-6">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>Denova Creations · Home Interior Designers</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight tracking-tight">
              Premium Home Interiors in Bangalore
            </h1>

            <p className="mt-4 md:mt-6 text-lg md:text-xl font-medium text-[#E7D7C9] max-w-2xl leading-relaxed">
              End-to-end interior design, manufacturing and execution for Bangalore homes.
            </p>

            <div className="mt-5 md:mt-6 max-w-2xl border-l-2 border-[#E7D7C9]/50 pl-4">
              <p className="text-sm md:text-base font-semibold text-white">
                {PRICE_RANGE_TEXT}
              </p>
              <p className="mt-1 text-xs text-stone-300 leading-relaxed">
                {PRICE_QUALIFIER}
              </p>
            </div>

            {/* PRIMARY CTA (mobile/tablet: form follows directly below) */}
            <div className="mt-6 lg:hidden">
              <button
                onClick={scrollToForm}
                className="bg-[#E7D7C9] hover:bg-white text-[#0F3B2E] min-h-[52px] px-8 py-3.5 rounded-lg font-bold text-sm uppercase tracking-wider shadow-lg transition duration-300 w-full sm:w-auto"
              >
                {PRIMARY_CTA}
              </button>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div id="leadForm" className="lg:col-span-5 w-full scroll-mt-4">
            <LeadForm idPrefix="hero" />
          </div>
        </div>
      </section>

      {/* 3. WHY DENOVA */}
      <section className="bg-[#FAF8F5] py-16 md:py-20 relative">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="text-xs font-bold text-[#0F3B2E] tracking-widest uppercase bg-[#0F3B2E]/5 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Why Denova Creations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0F3B2E]">
            Home Interior Designers in Bangalore, From Design to Handover
          </h2>
          <div className="w-16 h-1 bg-[#E7D7C9] mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="text-stone-600 max-w-2xl mx-auto text-sm leading-relaxed mb-12">
            Denova Creations is an interior design company in Bangalore for apartments and villas. We plan, design and execute your home interiors with one team responsible from the first discussion to handover.
          </p>

          {/* VALUES GRID */}
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white border border-[#E5DDD3] rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-md transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#0F3B2E]/5 flex items-center justify-center text-[#0F3B2E] mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-semibold font-serif text-lg text-[#0F3B2E] mb-2">
                Single Point of Accountability
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                One team manages your project from the first design discussion to handover, so you are not coordinating separate vendors.
              </p>
            </div>

            <div className="bg-white border border-[#E5DDD3] rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-md transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#0F3B2E]/5 flex items-center justify-center text-[#0F3B2E] mb-4">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-semibold font-serif text-lg text-[#0F3B2E] mb-2">
                Planned Project Milestones
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Every project is planned in clear stages, so you know what is happening from design approval to installation.
              </p>
            </div>

            <div className="bg-white border border-[#E5DDD3] rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-md transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#0F3B2E]/5 flex items-center justify-center text-[#0F3B2E] mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-semibold font-serif text-lg text-[#0F3B2E] mb-2">
                On-Site Supervision
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Our project team supervises site work for finishing quality and alignment.
              </p>
            </div>

            <div className="bg-white border border-[#E5DDD3] rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-md transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#0F3B2E]/5 flex items-center justify-center text-[#0F3B2E] mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-semibold font-serif text-lg text-[#0F3B2E] mb-2">
                Premium Material Integrity
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                We use branded, high-grade waterproof plywood, robust hardware systems, and durable laminates.
              </p>
            </div>

            <div className="bg-white border border-[#E5DDD3] rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-md transition duration-300 md:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-[#0F3B2E]/5 flex items-center justify-center text-[#0F3B2E] mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-semibold font-serif text-lg text-[#0F3B2E] mb-2">
                Practical, Everyday Design
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                We design homes to be lived in, not just photographed. Clean layout clearances, high-durability surfaces, and smart modularity.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <SectionCta onClick={scrollToForm} />
          </div>
        </div>
      </section>

      {/* 4. COMPLETED BANGALORE PROJECTS */}
      <section id="portfolio" className="py-16 md:py-20 bg-white relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="text-xs font-bold text-[#0F3B2E] tracking-widest uppercase bg-[#0F3B2E]/5 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Our Showcase
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0F3B2E]">
              Completed Projects in Bangalore
            </h2>
            <div className="w-16 h-1 bg-[#E7D7C9] mx-auto mt-4 mb-3 rounded-full"></div>
            <p className="text-stone-600 text-sm leading-relaxed">
              Step inside real homes designed, executed, and handed over by Denova Creations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group cursor-pointer" onClick={scrollToForm}>
              <div className="overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-all duration-500">
                <SafeImage src="/images/living1.webp" alt="2BHK Full Home Interior Whitefield Bangalore" />
              </div>
              <div className="mt-4">
                <p className="text-sm font-bold text-stone-900 group-hover:text-[#0F3B2E] transition">
                  2BHK Full Home Interior • Whitefield
                </p>
                <p className="text-xs text-stone-600 mt-1">
                  Living layout, customized kitchen module, custom wardrobes & modern TV console.
                </p>
              </div>
            </div>

            <div className="group cursor-pointer" onClick={scrollToForm}>
              <div className="overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-all duration-500">
                <SafeImage src="/images/kitchen1.webp" alt="Modular Kitchen Interior Sarjapur Bangalore" />
              </div>
              <div className="mt-4">
                <p className="text-sm font-bold text-stone-900 group-hover:text-[#0F3B2E] transition">
                  Modular Kitchen • Sarjapur
                </p>
                <p className="text-xs text-stone-600 mt-1">
                  Premium custom kitchen tailored with acrylic cabinetry, soft-close hardware & quartz countertops.
                </p>
              </div>
            </div>

            <div className="group cursor-pointer" onClick={scrollToForm}>
              <div className="overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-all duration-500">
                <SafeImage src="/images/bedroom1.webp" alt="Bedroom Interior Bangalore Apartment" />
              </div>
              <div className="mt-4">
                <p className="text-sm font-bold text-stone-900 group-hover:text-[#0F3B2E] transition">
                  Master Bedroom & Wardrobes • Bangalore
                </p>
                <p className="text-xs text-stone-600 mt-1">
                  Highly functional floor-to-ceiling sliding wardrobe layouts with premium built-in vanity console.
                </p>
              </div>
            </div>

            <div className="group cursor-pointer" onClick={scrollToForm}>
              <div className="overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-all duration-500">
                <SafeImage src="/images/living2.webp" alt="3BHK Living Room HSR Layout Bangalore" />
              </div>
              <div className="mt-4">
                <p className="text-sm font-bold text-stone-900 group-hover:text-[#0F3B2E] transition">
                  3BHK Premium Living Space • HSR Layout
                </p>
                <p className="text-xs text-stone-600 mt-1">
                  Luxury false ceiling design, architectural accent lighting plots, wooden paneling & TV unit execution.
                </p>
              </div>
            </div>

            <div className="group cursor-pointer" onClick={scrollToForm}>
              <div className="overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-all duration-500">
                <SafeImage src="/images/kitchen2.webp" alt="Contemporary Kitchen Electronic City Bangalore" />
              </div>
              <div className="mt-4">
                <p className="text-sm font-bold text-stone-900 group-hover:text-[#0F3B2E] transition">
                  Contemporary Kitchen • Electronic City
                </p>
                <p className="text-xs text-stone-600 mt-1">
                  Sleek handleless modular kitchen incorporating premium lacquer finish and pull-out storage accessories.
                </p>
              </div>
            </div>

            <div className="group cursor-pointer" onClick={scrollToForm}>
              <div className="overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-all duration-500">
                <SafeImage src="/images/bedroom2.webp" alt="Minimal Bedroom Bangalore Apartment" />
              </div>
              <div className="mt-4">
                <p className="text-sm font-bold text-stone-900 group-hover:text-[#0F3B2E] transition">
                  Minimalist Bedroom • Bangalore Apartment
                </p>
                <p className="text-xs text-stone-600 mt-1">
                  Clean, visual-space-optimized guest bedroom configuration featuring robust laminate sliding wardrobes.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 md:mt-16">
            <SectionCta onClick={scrollToForm} />
          </div>
        </div>
      </section>

      {/* 5. INTERIOR SERVICES */}
      <section id="services" className="py-16 md:py-20 bg-gradient-to-b from-[#FAF8F5] to-white relative">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="text-xs font-bold text-[#0F3B2E] tracking-widest uppercase bg-[#0F3B2E]/5 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Interior Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0F3B2E]">
              Home Interior Design Services in Bangalore
            </h2>
            <div className="w-16 h-1 bg-[#E7D7C9] mx-auto mt-4 mb-3 rounded-full"></div>
            <p className="text-stone-600 text-base leading-relaxed">
              End-to-end design, planning, and execution — customized for Bengaluru homeowners seeking longevity, precision, and aesthetic balance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                img: "/images/living2.webp",
                alt: "Full Home Interior Design Bangalore",
                tag: "Full Execution",
                title: "Complete Home Interiors",
                text: "End-to-end interior design and architectural planning — from structural layout optimization to direct site handover.",
              },
              {
                img: "/images/kitchen3.webp",
                alt: "Modular Kitchen Interior Design Bangalore",
                tag: "Modular Layouts",
                title: "Kitchen & Storage Systems",
                text: "Ergonomic modular kitchens, space-efficient smart pantries, and wardrobes meticulously configured for your storage patterns.",
              },
              {
                img: "/images/bedroom10.webp",
                alt: "Wardrobe Interior Design Bangalore",
                tag: "Ergonomic Planning",
                title: "Space & Custom Furniture",
                text: "Architectural layouts, customized furniture models, lighting plots, and bespoke color styling created for your lifestyle.",
              },
              {
                img: "/images/kitchen1.webp",
                alt: "Home Renovation Interior Bangalore",
                tag: "Premium Upgrade",
                title: "Renovation & Upgrades",
                text: "Structured retrofitting and complete remodel upgrades for premium apartments, restoring vintage aesthetics with modern flair.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-xl overflow-hidden border border-[#E5DDD3] shadow-[0_4px_25px_rgba(0,0,0,0.015)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)] hover:border-[#0F3B2E]/20 transition-all duration-300 cursor-pointer flex flex-col h-full group"
                onClick={scrollToForm}
              >
                <SafeImage src={s.img} alt={s.alt} />
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-[#0F3B2E] tracking-wider uppercase bg-[#E7D7C9]/25 px-2.5 py-1 rounded-full mb-3 inline-block">
                      {s.tag}
                    </span>
                    <h3 className="font-semibold font-serif text-lg text-[#0F3B2E] mb-2">
                      {s.title}
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed mb-4">
                      {s.text}
                    </p>
                  </div>
                  <div className="text-xs font-bold text-[#0F3B2E] group-hover:text-[#154e3d] inline-flex items-center gap-1.5 transition mt-auto">
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition duration-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 pt-8 border-t border-stone-200/50">
            <SectionCta onClick={scrollToForm} />
            <p className="text-xs text-stone-500 mt-4">
              {PRICE_RANGE_TEXT} {PRICE_QUALIFIER}
            </p>
          </div>
        </div>
      </section>

      {/* 6. PRICING */}
      <section id="pricing" className="py-16 md:py-20 bg-gradient-to-b from-[#FAF8F5] to-white relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="text-xs font-bold text-[#0F3B2E] tracking-widest uppercase bg-[#0F3B2E]/5 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Cost Guidance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0F3B2E]">
              Home Interior Pricing in Bangalore
            </h2>
            <div className="w-16 h-1 bg-[#E7D7C9] mx-auto mt-4 mb-3 rounded-full"></div>
            <p className="text-stone-700 text-base font-semibold">
              {PRICE_RANGE_TEXT}
            </p>
            <p className="text-stone-600 text-sm leading-relaxed mt-2">
              Get an indicative interior budget based on your project requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            <div className="border border-[#E5DDD3] rounded-2xl p-6 md:p-8 bg-white flex flex-col justify-between shadow-sm hover:shadow-md transition duration-300">
              <div>
                <h3 className="font-semibold font-serif text-xl text-[#0F3B2E] mb-2">
                  Essential Spaces
                </h3>
                <div className="flex items-baseline gap-1 my-4">
                  <span className="text-2xl md:text-3xl font-bold text-[#0F3B2E] font-serif">Custom estimate</span>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed mb-6">
                  Perfect for compact residences or homeowners seeking clean, essential modular installations without complex paneling work.
                </p>
                <ul className="text-sm text-stone-600 space-y-3.5 border-t border-stone-100 pt-6 mb-8">
                  {[
                    "Modular Kitchen Layout with High-Gloss finish",
                    "Laminate sliding or swing wardrobes",
                    "Space-efficient custom TV unit console",
                    "Basic storage planning & 2D drafts",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#0F3B2E] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={scrollToForm}
                className="w-full min-h-[48px] bg-[#0F3B2E] hover:bg-[#154e3d] text-white py-3 rounded-lg font-bold text-xs tracking-wider uppercase transition shadow-sm"
              >
                {PRIMARY_CTA}
              </button>
            </div>

            <div className="border-2 border-[#E7D7C9] rounded-2xl p-6 md:p-8 bg-[#0F3B2E] text-white flex flex-col justify-between shadow-[0_15px_40px_rgba(15,59,46,0.15)] relative md:scale-105">
              <div className="absolute top-0 right-6 -translate-y-1/2 bg-[#E7D7C9] text-[#0F3B2E] text-[10px] tracking-widest font-extrabold uppercase px-3 py-1 rounded-full shadow-sm">
                Full Home
              </div>
              <div>
                <h3 className="font-semibold font-serif text-xl text-[#E7D7C9] mb-2">
                  Full-Home Interiors
                </h3>
                <div className="my-4">
                  <span className="block text-2xl md:text-3xl font-bold text-white font-serif">{PRICE_RANGE}</span>
                  <span className="block text-xs text-stone-300 mt-2">{PRICE_SPLIT_TEXT}</span>
                </div>
                <p className="text-sm text-stone-300 leading-relaxed mb-6">
                  Comprehensive custom design for the entire home, including refined detailing, false ceiling panels and design oversight.
                </p>
                <ul className="text-sm text-stone-300 space-y-3.5 border-t border-white/10 pt-6 mb-8">
                  {[
                    "Modular Kitchen with Soft-Close Hardware",
                    "Custom wardrobes in bedrooms",
                    "TV panel and false ceiling plans",
                    "3D visualizations & custom material finishes",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#E7D7C9] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={scrollToForm}
                className="w-full min-h-[48px] bg-[#E7D7C9] hover:bg-white text-[#0F3B2E] py-3 rounded-lg font-bold text-xs tracking-wider uppercase transition shadow-md"
              >
                {PRIMARY_CTA}
              </button>
            </div>

            <div className="border border-[#E5DDD3] rounded-2xl p-6 md:p-8 bg-white flex flex-col justify-between shadow-sm hover:shadow-md transition duration-300">
              <div>
                <h3 className="font-semibold font-serif text-xl text-[#0F3B2E] mb-2">
                  Premium Custom
                </h3>
                <div className="flex items-baseline gap-1 my-4">
                  <span className="text-2xl md:text-3xl font-bold text-[#0F3B2E] font-serif">Custom estimate</span>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed mb-6">
                  For homes that need premium materials, structural interior layouts, customized detailing and luxury styling.
                </p>
                <ul className="text-sm text-stone-600 space-y-3.5 border-t border-stone-100 pt-6 mb-8">
                  {[
                    "Bespoke custom furniture and designer units",
                    "Premium imported hardware and luxury acrylics",
                    "Complete wall treatment, premium lighting & veneers",
                    "Priority supervisor assignment & custom handovers",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#0F3B2E] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={scrollToForm}
                className="w-full min-h-[48px] bg-[#0F3B2E] hover:bg-[#154e3d] text-white py-3 rounded-lg font-bold text-xs tracking-wider uppercase transition shadow-sm"
              >
                {PRIMARY_CTA}
              </button>
            </div>
          </div>

          <p className="text-center text-xs text-stone-500 mt-10 max-w-2xl mx-auto leading-relaxed">
            {PRICE_RANGE_TEXT} {PRICE_QUALIFIER}
          </p>
        </div>
      </section>

      {/* 7a. PROCESS */}
      <section id="process" className="py-16 md:py-20 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="text-xs font-bold text-[#0F3B2E] tracking-widest uppercase bg-[#0F3B2E]/5 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Execution Flow
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0F3B2E]">
            Simple, Structured & Transparent Process
          </h2>
          <div className="w-16 h-1 bg-[#E7D7C9] mx-auto mt-4 mb-12 rounded-full"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left relative">
            {[
              {
                n: "01",
                title: "1-on-1 Consultation",
                text: "We sit down (or connect digitally) to map out your detailed room layouts, budget targets, style preferences, and lifestyle patterns.",
              },
              {
                n: "02",
                title: "Design & 3D Drafting",
                text: "Our designer generates functional space layouts, color palettes, and realistic 3D visuals to give you absolute spatial clarity.",
              },
              {
                n: "03",
                title: "Precision Execution",
                text: "Materials are structured, delivered to site, and installed under architectural supervision following high finishing standards.",
              },
              {
                n: "04",
                title: "Handover & Checklist",
                text: "Detailed quality inspections are executed for hinges, leveling, and painting finishes before final clean-up and key delivery.",
              },
            ].map((step) => (
              <div key={step.n} className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#E5DDD3]/60 relative shadow-sm hover:shadow transition">
                <span className="font-serif text-[#E7D7C9]/40 text-6xl font-bold absolute top-4 right-6 select-none pointer-events-none">{step.n}</span>
                <div className="w-10 h-10 rounded-full bg-[#0F3B2E] text-white flex items-center justify-center font-bold text-sm mb-4">
                  {step.n}
                </div>
                <h3 className="font-semibold font-serif text-base text-[#0F3B2E] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <SectionCta onClick={scrollToForm} />
          </div>
        </div>
      </section>

      {/* 7b. TESTIMONIALS */}
      <section id="testimonials" className="py-16 md:py-20 bg-gradient-to-b from-[#FAF8F5] to-white relative">
        <div className="max-w-6xl mx-auto px-4">
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

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                meta: "2BHK Apartment • Whitefield",
                quote: "Completed the entire carpentry and lighting installation in 40 days without scheduling issues. The modular drawers function perfectly and the color tones matched the initial moodboard perfectly.",
                name: "Rakesh K.",
              },
              {
                meta: "3BHK Apartment • Sarjapur",
                quote: "The pricing structure was 100% transparent. No strange charges at final delivery. Material and paint finishing looks extremely luxury. Highly professional architect supervision.",
                name: "Harish M.",
              },
              {
                meta: "Renovation • Electronic City",
                quote: "We did a structured modular kitchen remodel and bedroom upgrade. The design consultation helped optimize every inch of storage. Handed over exactly within budget limits.",
                name: "Srinath V.",
              },
            ].map((t) => (
              <div key={t.name} className="bg-white border border-[#E5DDD3] rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition duration-300 flex flex-col h-full">
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-0.5 text-amber-400 text-xs mb-2">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="text-[10px] font-bold text-stone-400 tracking-wider uppercase mb-2">
                      {t.meta}
                    </p>
                    <p className="text-sm text-stone-600 leading-relaxed italic mb-4">
                      "{t.quote}"
                    </p>
                  </div>
                  <div>
                    <p className="font-bold font-serif text-sm text-stone-900">{t.name}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-stone-100">
                      <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        <CheckCircle className="w-3 h-3" /> Client Review
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <SectionCta onClick={scrollToForm} />
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-16 md:py-20 bg-white border-t border-stone-100">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#0F3B2E] tracking-widest uppercase bg-[#0F3B2E]/5 px-3.5 py-1.5 rounded-full inline-block mb-3">
              FAQ
            </span>
            <h2 className="text-3xl font-bold font-serif text-[#0F3B2E]">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-[#E7D7C9] mx-auto mt-4 mb-3 rounded-full"></div>
            <p className="text-stone-600 text-sm">
              Quick answers for homeowners planning interiors in Bangalore.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={faq.q} className="border border-[#E5DDD3] rounded-xl overflow-hidden bg-[#FAF8F5]">
                <button
                  onClick={() => toggleFaq(index)}
                  aria-expanded={activeFaq === index}
                  className="w-full min-h-[48px] px-5 md:px-6 py-4 flex items-center justify-between gap-3 text-left font-semibold font-serif text-sm md:text-base text-[#0F3B2E] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F3B2E]"
                >
                  <span>{faq.q}</span>
                  {activeFaq === index ? <ChevronUp className="w-4 h-4 shrink-0 text-[#0F3B2E]" /> : <ChevronDown className="w-4 h-4 shrink-0 text-[#0F3B2E]" />}
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${activeFaq === index ? "max-h-96 border-t border-[#E5DDD3]/40" : "max-h-0"
                    }`}
                >
                  <p className="px-5 md:px-6 py-4 text-sm text-stone-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CONSULTATION CTA */}
      <section id="contact" className="py-16 md:py-20 bg-[#0B251E] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(231,215,201,0.05)_0,transparent_60%)]"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <span className="text-[10px] font-bold text-[#E7D7C9] tracking-widest uppercase bg-white/5 border border-white/10 px-3 py-1 rounded-full inline-block mb-4">
              Free Consultation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-5 leading-tight">
              Talk to Home Interior Designers in Bangalore
            </h2>
            <p className="text-stone-300 text-sm md:text-base mb-4 leading-relaxed">
              Get an indicative interior budget based on your project requirements, and a clear plan for design and execution.
            </p>
            <p className="text-sm font-semibold text-[#E7D7C9]">{PRICE_RANGE_TEXT}</p>
            <p className="text-xs text-stone-400 mt-1 mb-6 leading-relaxed">{PRICE_QUALIFIER}</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-white font-semibold text-sm hover:text-[#E7D7C9] transition bg-white/5 border border-white/10 min-h-[48px] px-6 py-3 rounded-lg w-full sm:w-auto hover:bg-white/10"
            >
              <span>Talk to a Designer on WhatsApp</span>
            </a>
          </div>

          <div className="w-full max-w-md mx-auto lg:max-w-none">
            <LeadForm idPrefix="final" />
          </div>
        </div>
      </section>

      {/* FOOTER (extra bottom padding on mobile keeps it clear of the sticky CTA) */}
      <footer className="pt-8 pb-28 md:pb-8 bg-[#071F19] text-stone-500 border-t border-white/5 text-center text-xs">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <img
              src={logoPrimary}
              alt="Denova Creations Signature Logo"
              className="h-6 w-auto object-contain brightness-0 invert opacity-45"
            />
            <p>© {new Date().getFullYear()} Denova Creations. All rights reserved.</p>
          </div>
          <p className="max-w-md leading-relaxed">
            {companyInfo.address} ·{" "}
            <a href="tel:+919591039597" className="hover:text-white transition">
              +91 95910 39597
            </a>
          </p>
          <a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a>
        </div>
      </footer>

      {/* STICKY MOBILE CTA (hidden while a lead form is on screen) */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200/50 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] flex items-center justify-between gap-3 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] transition-transform duration-300 ${
          formInView ? "translate-y-full" : "translate-y-0"
        }`}
        aria-hidden={formInView}
      >
        <p className="text-xs font-bold text-[#0F3B2E] font-serif leading-snug">
          Home interiors in Bangalore
          <span className="block font-sans font-medium text-stone-500 text-[11px]">{PRICE_RANGE}</span>
        </p>
        <button
          onClick={scrollToForm}
          tabIndex={formInView ? -1 : 0}
          className="bg-[#0F3B2E] text-white hover:bg-[#154e3d] text-xs font-bold tracking-wider uppercase min-h-[44px] px-4 py-2.5 rounded-lg shadow transition transform active:scale-95 flex items-center gap-1 shrink-0"
        >
          <span>{PRIMARY_CTA}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default AdsLanding;
