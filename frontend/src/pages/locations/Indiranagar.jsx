import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
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
  Check,
  Zap,
  Info,
  MessageSquare,
  User,
  Mail,
  Layers,
  Activity
} from "lucide-react";
import { SCRIPT_URL } from "../../utils/api";
import { submitLead } from "../../utils/submitLead";
import { companyInfo } from "../../data/mock";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

// Rotating Indiranagar premium home interior visuals
const heroSlides = [
  {
    img: "/images/hero.webp",
    title: "Luxury Interior Designers in Indiranagar",
    tagline: "Sophisticated turnkey interiors crafted for modern urban lifestyles."
  },
  {
    img: "/images/living1.webp",
    title: "Contemporary Media Units & Lounges",
    tagline: "Seamless Gola-profile drawers, warm walnut accents & magnetic tracks."
  },
  {
    img: "/images/bedroom2.webp",
    title: "Bespoke Sliding Closet Wardrobes",
    tagline: "Integrated lighting coves, velvet organizers & auto-on hanging rods."
  }
];

// Curated Indiranagar capability zones
const localServices = [
  {
    title: "Premium Apartment Interiors (2BHK & 3BHK)",
    desc: "Bespoke home interiors custom-tailored for prominent high-end apartments in Indiranagar. Renders AutoCAD spatial clearances to expand room corridor space while maximizing closet capacity.",
    img: "/images/project3.webp",
    specs: ["Spatial triangle mapping", "Integrated wire raceways", "Smart drop-cove lofts"]
  },
  {
    title: "Luxury Bespoke Villa Interiors",
    desc: "Turnkey architectural decors detailing custom fluted wall paneling, double-height ceilings, metallic trim highlights, custom vanity storage, and premium PU lacquer surfaces.",
    img: "/images/project4.webp",
    specs: ["PU gloss automotive finish", "Walnut media coves", "Concealed ambient tracks"]
  },
  {
    title: "German-Precision Modular Kitchens",
    desc: "100% water-proof IS:710 BWP marine plywood carcass boxes fitted with scratch-proof acrylic upper shutters, handless Gola profile setups, and silent soft-close Blum drawers.",
    img: "/images/kitchen1.webp",
    specs: ["Century BWP plywood shield", "Hafele silent tandem drawers", "Stain-proof quartz worktops"]
  }
];

// Indiranagar customer reviews
const localReviews = [
  {
    name: "Aditya & Ritu Sen",
    location: "Defence Colony, Indiranagar",
    quote: "Denova re-architected our living room and master bedroom. They mapped our ceiling tracks dimming layout perfectly, and the automated German edge-banding finishes look immaculate. Delivered exactly within the promised 45 days!",
    rating: 5
  },
  {
    name: "Pooja Hegde",
    location: "Hal 2nd Stage, Indiranagar",
    quote: "Very professional turnkey team. Once the 3D visual plan was approved, the itemized quote was completely locked. The dedicated civil engineer supervised the modular kitchen stone fits on-site perfectly, avoiding carpentry errors.",
    rating: 5
  }
];

// Local FAQ Coves
const localFaqs = [
  {
    q: "What is the average luxury interior cost in Indiranagar?",
    a: "Luxury interior projects in Indiranagar Bangalore generally start from ₹6L onwards for premium apartments and ₹12L+ for custom gated villas, depending on carpet area, chosen surface finishes (PU vs laminates), and hardware selections (Blum vs Ebco)."
  },
  {
    q: "Do you provide complete turnkey design and execution?",
    a: "Yes. Denova Creations provides absolute turnkey interior execution in Indiranagar Bangalore. We manage 100% of the journey: creative survey, AutoCAD space blueprints, experience studio material curation, factory PUR edge-band fabrication, and onsite civil supervision."
  },
  {
    q: "Can I choose my materials at the experience center?",
    a: "Absolutely. We coordinate private materials Touch-Curation meetings at our Bangalore experience studio, where you can feel authentic 100% BWP Marine ply boards, matte/gloss acrylic surface panels, soft-close drawers, and quartz countertops."
  },
  {
    q: "Do you design modular wardrobes with sliding damping systems?",
    a: "Yes. We design premium modular wardrobes using BWR moisture carcass boards, fitted with aluminum Gola profiles, sliding damping soft rollers (best for narrow rooms), and auto-on LED clothes rods."
  }
];

const Indiranagar = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    pincode: "",
    propertyType: "",
    possession: "",
    budget: "",
    consultationMode: "",
    requirements: ""
  });

  const pageTitle = "Luxury Interior Designers in Indiranagar Bangalore | Denova Creations";
  const pageDescription = "Premium interior designers in Indiranagar Bangalore specializing in luxury apartments, modular kitchens, wardrobes, and turnkey home interiors.";
  const pageUrl = "https://denovacreations.com/interior-designers/indiranagar";
  const imageUrl = "https://denovacreations.com/images/hero2.webp";

  // Cycle hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateStep1 = () => {
    const tempErrors = {};
    if (!form.name.trim()) tempErrors.name = "Full Name is required";
    
    const cleanedPhone = form.phone.replace(/\D/g, "");
    if (!form.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (cleanedPhone.length !== 10) {
      tempErrors.phone = "Must be a valid 10-digit number";
    }

    if (!form.pincode.trim()) {
      tempErrors.pincode = "Pincode is required";
    } else if (form.pincode.trim().length !== 6) {
      tempErrors.pincode = "Pincode must be exactly 6 digits";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep1()) {
      setStep(2);
      const formEl = document.getElementById("indiranagarForm");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep1()) {
      setStep(1);
      return;
    }

    const cleanedPhone = form.phone.replace(/\D/g, "").slice(0, 10);
    setLoading(true);

    try {
      // POST details to Google Sheets App Script URL
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          phone: cleanedPhone,
          email: form.email || "",
          location: `Indiranagar (${form.pincode})`,
          propertyType: form.propertyType || "Not Specified",
          possession: form.possession || "Not Specified",
          budget: form.budget || "Not Specified",
          consultationMode: form.consultationMode || "Not Specified",
          requirements: form.requirements || "Not Specified",
          source: "Indiranagar LP Form",
          utm_source: localStorage.getItem("utm_source") || "GoogleSEO",
          utm_medium: localStorage.getItem("utm_medium") || "organic",
          utm_campaign: localStorage.getItem("utm_campaign") || "",
          utm_content: localStorage.getItem("utm_content") || "",
          utm_term: localStorage.getItem("utm_term") || "",
          gclid: localStorage.getItem("gclid") || "",
          landing_page: window.location.href,
          timestamp: new Date().toISOString(),
        }),
      });

      // GTM event dispatch
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "lead_conversion",
        page: "indiranagar_interior_designers"
      });

      // Google Ads conversion trigger
      if (window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-11303451952/63-FCIP1rZ8cELD6840q"
        });
      }

      // Meta Pixel Lead Dispatch
      if (window.fbq) {
        window.fbq("track", "Lead", {
          content_name: "Indiranagar Location Lead",
          value: 0.00,
          currency: "INR"
        });
      }

      setTimeout(() => {
        window.location.href = "/thank-you?source=indiranagar";
      }, 1000);

    } catch (error) {
      console.error("Indiranagar LP Submit Error:", error);
      alert("Something went wrong. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />

        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Denova Creations",
            "url": pageUrl,
            "image": imageUrl,
            "telephone": "+91-9164466606",
            "areaServed": ["Indiranagar", "Bangalore", "East Bangalore"],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Indiranagar",
              "addressRegion": "Karnataka",
              "postalCode": "560038",
              "addressCountry": "India"
            },
            "description": pageDescription
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the average interior cost in Indiranagar Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Interior design costs in Indiranagar typically range between ₹4L and ₹12L depending on apartment size, customization, and material quality."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide luxury interior design services in Indiranagar?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Denova Creations specializes in premium and luxury interior design solutions for apartments, villas, and modern urban homes in Indiranagar Bangalore."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide turnkey interior execution?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We provide complete turnkey interior execution including design, manufacturing, installation, and project management."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-[#FAF8F5] text-stone-850 antialiased min-h-screen">

        {/* 1. CINEMATIC HERO SLIDESHOW & 2-STEP STEPPER FORM */}
        <section className="relative min-h-[92vh] flex items-center bg-[#071F20] pt-24 pb-16 overflow-hidden select-none">
          
          {/* Visual Background Slider */}
          <div className="absolute inset-0 z-0">
            {heroSlides.map((slide, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  idx === slideIndex ? "opacity-100" : "opacity-0"
                }`}
                style={{ transition: "opacity 1000ms ease-in-out" }}
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className={`w-full h-full object-cover blur-[1.5px] opacity-80 transition-all ${
                    idx === slideIndex ? "scale-105" : "scale-100"
                  }`}
                  style={{ transition: "all 6000ms ease-in-out" }}
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-[#051819]/95 via-[#051819]/85 to-[#051819]/65"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,24,25,0.75)_100%)]"></div>
          </div>

          <div className="relative z-10 w-full container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* LEFT COLUMN: LOCAL SEO COPY & TRUST KEYS */}
              <div className="lg:col-span-6 text-left space-y-6 lg:max-w-xl animate-fade-in-up">
                
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E8D8C4]/15 border border-[#E8D8C4]/20 backdrop-blur-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#E8D8C4]" />
                  <span className="text-[#E8D8C4] font-bold text-[9px] uppercase tracking-widest leading-none">
                    Indiranagar Premium Interiors
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif tracking-tight leading-tight">
                  Luxury Interior Designers <span className="text-[#E8D8C4]">in Indiranagar.</span>
                </h1>

                <p className="text-stone-300 text-xs md:text-sm leading-relaxed">
                  Bespoke turnkey home interiors crafted for premium urban living. Experience refined layouts, direct factory edge-banding edge precision, and direct site engineer supervision.
                </p>

                {/* Local trust indices */}
                <div className="grid grid-cols-2 gap-4 border-t border-stone-700/50 pt-6 text-white text-xs font-semibold">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#E8D8C4] mt-0.5" />
                    <div>
                      <span className="text-white block">10-Year Warranty</span>
                      <span className="text-stone-400 font-normal text-[10px]">German precise hotmelt PUR edges</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#E8D8C4] mt-0.5" />
                    <div>
                      <span className="text-white block">Century BWP Marine Ply</span>
                      <span className="text-stone-400 font-normal text-[10px]">100% water-proof wet area boxes</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4 items-center">
                  <a href="#services">
                    <Button className="bg-[#E8D8C4] hover:bg-white text-[#0F3D3E] font-bold px-6 py-5 rounded-lg text-xs md:text-sm uppercase tracking-wider transition-all duration-300">
                      Explore Design Services
                    </Button>
                  </a>
                  <a href="tel:+919164466606" className="inline-flex items-center gap-2 text-stone-300 hover:text-white text-xs font-semibold transition-colors duration-300">
                    <PhoneCall className="w-4.5 h-4.5 text-[#E8D8C4]" />
                    <span>Direct Call: +91 91644 66606</span>
                  </a>
                </div>

              </div>

              {/* RIGHT COLUMN: GLASSMORPHIC STEPPER CARD */}
              <div className="lg:col-span-6 lg:ml-auto w-full max-w-lg">
                <Card 
                  id="indiranagarForm" 
                  className="border-0 bg-white/95 shadow-[0_30px_60px_rgba(5,24,25,0.3)] rounded-3xl overflow-hidden backdrop-blur-md relative"
                >
                  <div className="bg-[#FAF7F2] py-2.5 px-6 border-b border-[#E8D8C4]/20 flex justify-between items-center text-[10px] font-bold text-[#0F3D3E] uppercase tracking-wider">
                    <span className="text-red-600 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping"></span>
                      Direct Curation Slots Available
                    </span>
                    <span>Free Estimate</span>
                  </div>

                  <CardContent className="p-8 space-y-5">
                    <div className="text-center space-y-1">
                      <h2 className="text-2xl font-bold font-serif text-[#0F3D3E]">
                        Book Free Indiranagar Consultation
                      </h2>
                      <p className="text-stone-500 text-xs font-medium">
                        Receive a customized AutoCAD layout plan and itemized costing review.
                      </p>
                    </div>

                    {/* Progress Indicator */}
                    <div className="flex justify-center items-center gap-3">
                      <button
                        onClick={() => setStep(1)}
                        className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-all duration-300 ${
                          step === 1 ? "bg-[#0F3D3E] text-white" : "bg-[#FAF7F2] text-[#0F3D3E] border border-[#E8D8C4]/40"
                        }`}
                      >
                        1
                      </button>
                      <div className="w-12 h-[1px] bg-stone-200"></div>
                      <button
                        onClick={handleNextStep}
                        className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-all duration-300 ${
                          step === 2 ? "bg-[#0F3D3E] text-white" : "bg-[#FAF7F2] text-stone-400 border border-stone-100"
                        }`}
                      >
                        2
                      </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 text-left">
                      
                      {/* Step 1 */}
                      {step === 1 && (
                        <div className="space-y-4 animate-fadeIn">
                          
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-wider font-bold text-stone-500 block">Full Name *</label>
                            <div className="relative">
                              <User className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                              <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Rahul Sharma"
                                className={`w-full pl-10 pr-4 py-3 bg-[#FAF8F5] border rounded-xl text-xs font-semibold focus:outline-none focus:border-[#0F3D3E] transition-all ${
                                  errors.name ? "border-red-500 bg-red-50/20" : "border-stone-200/60"
                                }`}
                              />
                            </div>
                            {errors.name && <span className="text-[10px] text-red-500 font-bold block">{errors.name}</span>}
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-wider font-bold text-stone-500 block">Phone Number *</label>
                            <div className="relative">
                              <PhoneCall className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                              <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="9876543210"
                                className={`w-full pl-10 pr-4 py-3 bg-[#FAF8F5] border rounded-xl text-xs font-semibold focus:outline-none focus:border-[#0F3D3E] transition-all ${
                                  errors.phone ? "border-red-500 bg-red-50/20" : "border-stone-200/60"
                                }`}
                              />
                            </div>
                            {errors.phone && <span className="text-[10px] text-red-500 font-bold block">{errors.phone}</span>}
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-wider font-bold text-stone-500 block">Email Address</label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                              <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="rahul@gmail.com"
                                className="w-full pl-10 pr-4 py-3 bg-[#FAF8F5] border border-stone-200/60 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#0F3D3E] transition-all"
                              />
                            </div>
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-wider font-bold text-stone-500 block">Indiranagar Area Pincode *</label>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                              <input
                                type="text"
                                name="pincode"
                                value={form.pincode}
                                maxLength={6}
                                onChange={(e) => {
                                  const val = e.target.value.replace(/\D/g, "");
                                  setForm((prev) => ({ ...prev, pincode: val }));
                                  if (errors.pincode) setErrors((prev) => ({ ...prev, pincode: "" }));
                                }}
                                placeholder="e.g. 560038"
                                className={`w-full pl-10 pr-4 py-3 bg-[#FAF8F5] border rounded-xl text-xs font-semibold focus:outline-none focus:border-[#0F3D3E] transition-all ${
                                  errors.pincode ? "border-red-500 bg-red-50/20" : "border-stone-200/60"
                                }`}
                              />
                            </div>
                            {errors.pincode && <span className="text-[10px] text-red-500 font-bold block">{errors.pincode}</span>}
                          </div>

                          <Button
                            type="button"
                            onClick={handleNextStep}
                            className="w-full py-6 rounded-xl bg-[#0F3D3E] hover:bg-[#0A2526] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 mt-4 hover:scale-[1.01]"
                          >
                            <span>Configure Spatial Options</span>
                            <ArrowRight className="w-4 h-4" />
                          </Button>

                        </div>
                      )}

                      {/* Step 2 */}
                      {step === 2 && (
                        <div className="space-y-4 animate-fadeIn">
                          
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-wider font-bold text-stone-500 block">Property Type</label>
                            <div className="relative">
                              <Layers className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                              <select
                                name="propertyType"
                                value={form.propertyType}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 bg-[#FAF8F5] border border-stone-200/60 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#0F3D3E] transition-all appearance-none cursor-pointer"
                              >
                                <option value="">Select Property Type</option>
                                <option value="2 BHK Apartment">2 BHK Premium Apartment</option>
                                <option value="3 BHK Apartment">3 BHK Premium Apartment</option>
                                <option value="4 BHK Apartment">4 BHK Premium Apartment</option>
                                <option value="Luxury Villa">Luxury Custom Villa</option>
                                <option value="Modular Kitchen Only">Modular Kitchen Setup</option>
                              </select>
                              <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-stone-400 pointer-events-none" />
                            </div>
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-wider font-bold text-stone-500 block">Investment Budget</label>
                            <div className="relative">
                              <DollarSign className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                              <select
                                name="budget"
                                value={form.budget}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 bg-[#FAF8F5] border border-stone-200/60 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#0F3D3E] transition-all appearance-none cursor-pointer"
                              >
                                <option value="">Select Budget Limit</option>
                                <option value="₹1.5L - ₹3.0L">₹1.5L - ₹3.0L (Essential Smart)</option>
                                <option value="₹3.0L - ₹6.0L">₹3.0L - ₹6.0L (Premium Elite)</option>
                                <option value="₹6.0L - ₹12.0L">₹6.0L - ₹12.0L (Signature Luxury)</option>
                                <option value="₹12.0L+">₹12.0L+ (Bespoke Villa Tiers)</option>
                              </select>
                              <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-stone-400 pointer-events-none" />
                            </div>
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-wider font-bold text-stone-500 block">Possession Status</label>
                            <div className="relative">
                              <Calendar className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                              <select
                                name="possession"
                                value={form.possession}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 bg-[#FAF8F5] border border-stone-200/60 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#0F3D3E] transition-all appearance-none cursor-pointer"
                              >
                                <option value="">Select Possession Status</option>
                                <option value="Immediate">Immediate / Key Handed Over</option>
                                <option value="0-3 Months">Within 0-3 Months</option>
                                <option value="3-6 Months">Within 3-6 Months</option>
                                <option value="6+ Months">6+ Months / Planning Phase</option>
                              </select>
                              <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-stone-400 pointer-events-none" />
                            </div>
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-wider font-bold text-stone-500 block">Preferred Consultation Mode</label>
                            <div className="relative">
                              <Compass className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                              <select
                                name="consultationMode"
                                value={form.consultationMode}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 bg-[#FAF8F5] border border-stone-200/60 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#0F3D3E] transition-all appearance-none cursor-pointer"
                              >
                                <option value="">Select Meeting Type</option>
                                <option value="Studio Meeting">Bangalore Curation Studio Coves</option>
                                <option value="Site Survey">Certified Engineer Civil Site Survey</option>
                                <option value="Virtual Call">Virtual Online Video Consultation</option>
                              </select>
                              <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-stone-400 pointer-events-none" />
                            </div>
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-wider font-bold text-stone-500 block">Special Curation Notes (Optional)</label>
                            <textarea
                              name="requirements"
                              value={form.requirements}
                              onChange={handleChange}
                              rows={2}
                              placeholder="e.g. Modern minimal walk-in closets, kitchen quartz coves..."
                              className="w-full p-3 bg-[#FAF8F5] border border-stone-200/60 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#0F3D3E] transition-all"
                            />
                          </div>

                          <div className="flex gap-3 pt-2">
                            <Button
                              type="button"
                              onClick={() => setStep(1)}
                              className="w-1/3 py-6 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs uppercase tracking-wider transition-all"
                            >
                              Back
                            </Button>
                            <Button
                              type="submit"
                              disabled={loading}
                              className="w-2/3 py-6 rounded-xl bg-[#0F3D3E] hover:bg-[#0A2526] text-[#E8D8C4] hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01]"
                            >
                              <span>{loading ? "Submitting..." : "Book Indiranagar Survey"}</span>
                              <Check className="w-4 h-4" />
                            </Button>
                          </div>

                        </div>
                      )}

                    </form>

                    <p className="text-[10px] text-stone-450 leading-normal text-center">
                      By submitting details, you agree to our <a href="/privacy-policy" className="underline text-stone-550 hover:text-[#0F3D3E]">Privacy Policy</a>.
                    </p>

                    <div className="border-t border-stone-100 pt-4 flex justify-center gap-5 text-[10px] font-semibold text-stone-400">
                      <span className="flex items-center gap-1">✔ Free consultation</span>
                      <span className="flex items-center gap-1">✔ 3D visual preview</span>
                      <span className="flex items-center gap-1">✔ 30-min callback</span>
                    </div>

                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </section>

        {/* 2. WALKTHROUGH STEP 1: INTRODUCTION & INDIRANAGAR LIFESTYLE */}
        <section className="py-20 bg-white border-b border-stone-150 select-none">
          <div className="container-custom text-center">
            
            <div className="mb-16 max-w-2xl mx-auto space-y-3">
              <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                Walkthrough Step 01
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0F3D3E] tracking-tight">
                Designed for Refined Indiranagar Urban Lifestyles
              </h2>
              <p className="text-stone-500 text-xs md:text-sm">
                Indiranagar's premium apartments and villas require sophisticated spatial blueprints that balance visual luxury with absolute modular utility.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto text-left">
              
              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-bold text-[#0F3D3E]">
                  Ergonomic Curation for Premium Urban Homes
                </h3>
                <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
                  Homeowners in premium pockets of Indiranagar value spacious layouts but are often limited by standard developer cabinet niches and typical dark kitchen corners.
                </p>
                <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
                  At Denova Creations, we re-engineer spatial paths. We coordinate detailed AutoCAD layouts, ensuring optimal walking corridors, smart sliding wardrobe lofts to leverage ceiling height, and structured Vastu triangles that separate cooking fire elements from washing zones beautifully.
                </p>

                <div className="flex flex-wrap gap-3 pt-2 text-[10px] font-bold uppercase tracking-wider text-[#0F3D3E]">
                  <span className="bg-[#FAF7F2] px-3.5 py-1.5 rounded-full">✔ Premium Layout Curation</span>
                  <span className="bg-[#FAF7F2] px-3.5 py-1.5 rounded-full">✔ Smart Space zoning</span>
                  <span className="bg-[#FAF7F2] px-3.5 py-1.5 rounded-full">✔ Vastu Ergonomics</span>
                </div>
              </div>

              <div className="relative group">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-lg border-4 border-white z-10">
                  <img
                    src="/images/project3.webp"
                    alt="Premium living space by Denova in Indiranagar Bangalore"
                    className="w-full h-full object-cover transition-transform group-hover:scale-103 duration-500"
                  />
                  <div className="absolute inset-0 bg-stone-900/10"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r-4 border-b-4 border-[#E8D8C4] rounded-br-3xl z-0"></div>
              </div>

            </div>

          </div>
        </section>

        {/* 3. WALKTHROUGH STEP 2: ALTERNATING SERVICE BLUEPRINTS */}
        <section id="services" className="py-20 md:py-24 bg-[#FAF8F5]">
          <div className="container-custom">
            
            <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
              <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                Walkthrough Step 02
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0F3D3E] tracking-tight">
                Signature Turnkey Capabilities
              </h2>
              <p className="text-stone-500 text-xs md:text-sm">
                Explore alternating residential blueprints and direct factory material specifications engineered for Indiranagar homes.
              </p>
            </div>

            {/* Alternating services rows */}
            <div className="space-y-16 max-w-5xl mx-auto text-left">
              {localServices.map((service, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div 
                    key={idx} 
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                      isEven ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    
                    {/* Visual */}
                    <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-md border-4 border-white">
                        <img
                          src={service.img}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-stone-900/10"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`lg:col-span-7 space-y-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <span className="text-[#E8D8C4] font-bold text-[9px] uppercase tracking-widest block leading-none">
                        Capability 0{idx + 1}
                      </span>
                      
                      <h3 className="text-2xl font-bold font-serif text-[#0F3D3E]">
                        {service.title}
                      </h3>
                      
                      <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
                        {service.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 text-[10px] font-bold text-[#0F3D3E] uppercase tracking-wide">
                        {service.specs.map((spec, i) => (
                          <span key={i} className="bg-white border border-stone-100 px-3 py-1 rounded-full shadow-xs">
                            {spec}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2">
                        <a href="#indiranagarForm">
                          <Button className="bg-[#0F3D3E] hover:bg-[#FAF7F2] hover:text-[#0F3D3E] text-white border border-[#0F3D3E] font-bold text-xs uppercase tracking-wider px-6 py-4.5 rounded-xl transition-all flex items-center gap-2">
                            <span>Discuss Curation</span>
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </a>
                      </div>

                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 4. WALKTHROUGH STEP 3: MATERIALS Durability */}
        <section className="py-20 bg-white border-y border-stone-150 select-none">
          <div className="container-custom">
            
            <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
              <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                Walkthrough Step 03
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0F3D3E] tracking-tight">
                Material & Hardware Durability Standards
              </h2>
              <p className="text-stone-500 text-xs md:text-sm">
                We believe in absolute execution standards. Compare structural elements separating automated edge precision from manual site carpentry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto text-left">
              
              {/* Card 1 */}
              <div className="p-6 bg-[#FAF8F5] rounded-3xl border border-stone-100 space-y-3.5 hover:border-[#E8D8C4] hover:bg-white transition-all duration-300">
                <div className="w-9 h-9 bg-white text-[#0F3D3E] border border-stone-100 flex items-center justify-center rounded-lg shadow-xs">
                  <ShieldCheck className="w-5 h-5 text-[#E8D8C4]" />
                </div>
                <h4 className="font-serif font-bold text-base text-[#0F3D3E]">Century IS:710 BWP Ply</h4>
                <p className="text-stone-500 text-[11px] leading-relaxed">
                  Boiling Water Proof marine resin board. 100% water and termite proof, mandatory for all bottom wet kitchen base cabinets.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-6 bg-[#FAF8F5] rounded-3xl border border-stone-100 space-y-3.5 hover:border-[#E8D8C4] hover:bg-white transition-all duration-300">
                <div className="w-9 h-9 bg-white text-[#0F3D3E] border border-stone-100 flex items-center justify-center rounded-lg shadow-xs">
                  <Award className="w-5 h-5 text-[#E8D8C4]" />
                </div>
                <h4 className="font-serif font-bold text-base text-[#0F3D3E]">Automated PUR Edges</h4>
                <p className="text-stone-500 text-[11px] leading-relaxed">
                  Millimeter-precise automated hotmelt PUR edge-banding. Fully seals core wood from atmospheric moisture and swelling.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-6 bg-[#FAF8F5] rounded-3xl border border-stone-100 space-y-3.5 hover:border-[#E8D8C4] hover:bg-white transition-all duration-300">
                <div className="w-9 h-9 bg-white text-[#0F3D3E] border border-stone-100 flex items-center justify-center rounded-lg shadow-xs">
                  <Clock className="w-5 h-5 text-[#E8D8C4]" />
                </div>
                <h4 className="font-serif font-bold text-base text-[#0F3D3E]">Silent Blum Hinges</h4>
                <p className="text-stone-500 text-[11px] leading-relaxed">
                  Authentic soft-close tandem runners and hydraulic clip-on dampers. Engineered to guarantee completely silent operations.
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-6 bg-[#FAF8F5] rounded-3xl border border-stone-100 space-y-3.5 hover:border-[#E8D8C4] hover:bg-white transition-all duration-300">
                <div className="w-9 h-9 bg-white text-[#0F3D3E] border border-stone-100 flex items-center justify-center rounded-lg shadow-xs">
                  <Compass className="w-5 h-5 text-[#E8D8C4]" />
                </div>
                <h4 className="font-serif font-bold text-base text-[#0F3D3E]">Stain-Proof Countertops</h4>
                <p className="text-stone-500 text-[11px] leading-relaxed">
                  15mm solid quartz countertops. Acid, heat, and scratch resistant surface that remains completely stain-proof.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* 5. WALKTHROUGH STEP 4: WORKFLOW TIMELINE */}
        <section className="py-20 md:py-24 bg-[#FAF8F5] border-b border-stone-150">
          <div className="container-custom text-center">
            
            <div className="mb-16 max-w-2xl mx-auto space-y-3">
              <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                Walkthrough Step 04
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0F3D3E] tracking-tight">
                Turnkey Workflow Timeline
              </h2>
              <p className="text-stone-500 text-xs md:text-sm">
                From initial site measurement coordinates to factory edge-banding fabrication and civil site engineer supervision.
              </p>
            </div>

            {/* Timeline pipeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 text-left max-w-6xl mx-auto">
              {[
                { n: "01", t: "Creative Survey", d: "Precise dimensions collection and Vastu triangle layout planning." },
                { n: "02", t: "AutoCAD Zoning", d: "Drafting walking corridors, drawer clearance coves, and storage outlines." },
                { n: "03", t: "Experience Curation", d: "Touching board materials and premium finishes in our Bangalore studio." },
                { n: "04", t: "Factory Production", d: "German automated edge-banding PUR panel hotmelt shielding." },
                { n: "05", t: "Engineered Assembly", d: "Certified civil structural engineers monitor onsite stone alignments and panel fits." },
                { n: "06", t: "Warranty Handover", d: "Strict quality audits verification, deep cleaning, and formal warranty certifications." }
              ].map((step, i) => (
                <div key={i} className="flex flex-col space-y-3 relative group">
                  <div className="text-3xl font-serif font-bold text-[#E8D8C4]/60 group-hover:text-[#0F3D3E] transition-colors duration-300 leading-none">
                    {step.n}
                  </div>
                  <h4 className="text-xs font-bold text-[#0F3D3E] font-serif tracking-tight">{step.t}</h4>
                  <p className="text-[11px] text-stone-500 leading-relaxed">{step.d}</p>
                  
                  {i < 5 && (
                    <div className="hidden lg:block absolute top-4 left-[85%] w-full h-[1px] border-t border-dashed border-stone-300 -z-10"></div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 6. WALKTHROUGH STEP 5: TRENDS EDITORIAL & LOCAL SEO */}
        <section className="py-20 bg-white select-none border-b border-stone-150">
          <div className="container-custom">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-5xl mx-auto text-left">
              
              {/* Editorial Left */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                  Walkthrough Step 05
                </span>
                
                <h2 className="text-3xl font-bold font-serif text-[#0F3D3E] tracking-tight leading-tight">
                  Premium Interior Trends in Indiranagar Bangalore
                </h2>

                <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
                  Indiranagar is synonymous with upscale urban living, and current interior trends focus heavily on **Sophisticated Warm Minimalism** and **Contemporary Architectural** aesthetics. Handleless flat slab cabinet profiles utilizing aluminum Gola channels are preferred over legacy external handles, creating sleek seamless lines.
                </p>
                <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
                  Closets are transitioning into floor-to-ceiling sliding wardrobes fitted with soft dampened sliding rollers to avoid standard corridor door obstructions. Tinted frosted glass doors and auto-on internal clothes hangers raise luxury details.
                </p>
                <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
                  Layered ambient lighting coordinates customizable magnetic track spotlights and linear false ceiling profile strips. This replaces old raw tube lights, creating visual depth, zoning spaces comfortably, and raising home aesthetic value.
                </p>
              </div>

              {/* Specs side card */}
              <div className="lg:col-span-5 bg-[#FAF8F5] p-8 rounded-3xl border border-stone-100 space-y-6">
                <h3 className="font-serif font-bold text-lg text-[#0F3D3E] border-b border-stone-200/50 pb-2">
                  Indiranagar Planning parameters
                </h3>
                
                <div className="space-y-4 text-xs">
                  <div className="space-y-1">
                    <span className="text-stone-400 block font-semibold text-[9px] uppercase">Best Color curations</span>
                    <p className="text-stone-600 font-medium leading-relaxed">Warm beige base (60%), biophilic wood veneers (30%), premium emerald accents (10%).</p>
                  </div>
                  <div className="space-y-1 border-t border-stone-200/50 pt-3">
                    <span className="text-stone-400 block font-semibold text-[9px] uppercase">Optimal wardrobe depth</span>
                    <p className="text-stone-600 font-medium leading-relaxed">exactly 2.0 feet (24 inches) to prevent visual bulk and ensure hangers clear closet backs perfectly.</p>
                  </div>
                  <div className="space-y-1 border-t border-stone-200/50 pt-3">
                    <span className="text-stone-400 block font-semibold text-[9px] uppercase">Modular Kitchen carcass</span>
                    <p className="text-stone-600 font-medium leading-relaxed">100% IS:710 BWP marine plywood core underneath sink; BWR moisture plywood overhead cabinets.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 7. WALKTHROUGH STEP 6: NATURAL INTERNAL LINKS */}
        <section className="py-16 bg-[#FAF8F5] border-b border-stone-150">
          <div className="container-custom text-center">
            
            <div className="mb-10 max-w-xl mx-auto space-y-2">
              <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                Walkthrough Step 06
              </span>
              <h4 className="text-xl font-bold font-serif text-[#0F3D3E]">
                Explore Denova Creations Expertise
              </h4>
              <p className="text-stone-500 text-[11px]">
                Crawl natural contextual pathways to understand our design studio principles.
              </p>
            </div>

            {/* Links grid */}
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto text-xs font-semibold">
              <Link to="/" className="bg-white border border-stone-100 hover:border-[#E8D8C4] hover:text-[#0F3D3E] px-5 py-3 rounded-full shadow-xs transition-all">
                Studio Homepage
              </Link>
              <Link to="/about" className="bg-white border border-stone-100 hover:border-[#E8D8C4] hover:text-[#0F3D3E] px-5 py-3 rounded-full shadow-xs transition-all">
                About Studio & Founder
              </Link>
              <Link to="/services" className="bg-white border border-stone-100 hover:border-[#E8D8C4] hover:text-[#0F3D3E] px-5 py-3 rounded-full shadow-xs transition-all">
                Luxury Curation Services
              </Link>
              <Link to="/portfolio" className="bg-white border border-stone-100 hover:border-[#E8D8C4] hover:text-[#0F3D3E] px-5 py-3 rounded-full shadow-xs transition-all">
                Signature Project Portfolio
              </Link>
              <Link to="/modular-kitchen-bangalore" className="bg-white border border-stone-100 hover:border-[#E8D8C4] hover:text-[#0F3D3E] px-5 py-3 rounded-full shadow-xs transition-all">
                Google Ads Modular Kitchens
              </Link>
              <Link to="/materials" className="bg-white border border-stone-100 hover:border-[#E8D8C4] hover:text-[#0F3D3E] px-5 py-3 rounded-full shadow-xs transition-all">
                Materials & Planning Guide
              </Link>
              <Link to="/estimate" className="bg-white border border-stone-100 hover:border-[#E8D8C4] hover:text-[#0F3D3E] px-5 py-3 rounded-full shadow-xs transition-all">
                Interactive Cost Calculator
              </Link>
              <Link to="/contact" className="bg-white border border-stone-100 hover:border-[#E8D8C4] hover:text-[#0F3D3E] px-5 py-3 rounded-full shadow-xs transition-all">
                Contact Curation Studio
              </Link>
            </div>

          </div>
        </section>

        {/* 8. VERIFIED REVIEWS */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            
            <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
              <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                Social Proof
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0F3D3E] tracking-tight">
                Loved by Indiranagar Gated Communities
              </h2>
              <p className="text-stone-500 text-xs md:text-sm">
                Join 150+ Bangalore families who upgraded to modular factory edges durability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
              {localReviews.map((review, idx) => (
                <div key={idx} className="p-8 bg-[#FAF8F5] rounded-3xl border border-stone-100 space-y-4">
                  <div className="flex gap-0.5 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-stone-600 text-xs md:text-sm leading-relaxed italic">
                    "{review.quote}"
                  </p>
                  <div className="pt-2 border-t border-stone-100/50 flex items-center justify-between">
                    <div>
                      <span className="font-serif font-bold text-stone-850 text-xs block">{review.name}</span>
                      <span className="text-[10px] text-stone-400">{review.location}</span>
                    </div>
                    <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full uppercase tracking-wider">Google Verified</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 9. FAQ ACCORDION PANEL */}
        <section className="py-20 bg-[#FAF8F5] border-t border-stone-150">
          <div className="container-custom">
            
            <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
              <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0F3D3E] tracking-tight">
                Indiranagar Interior FAQ coves
              </h2>
              <p className="text-stone-500 text-xs md:text-sm">
                Get immediate, transparent spatial and costing answers.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-3 text-left">
              {localFaqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div 
                    key={idx} 
                    className="bg-white rounded-2xl border border-stone-150 overflow-hidden transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.005)]"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 flex justify-between items-center text-[#0F3D3E] hover:text-stone-950 font-serif font-bold text-sm md:text-base text-left transition-colors"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4.5 h-4.5 text-[#E8D8C4] flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4.5 h-4.5 text-[#E8D8C4] flex-shrink-0" />
                      )}
                    </button>
                    
                    <div className={`transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-[300px] border-t border-stone-100 bg-white p-5 opacity-100' : 'max-h-0 opacity-0 p-0 overflow-hidden'
                    }`}>
                      <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 10. FINAL CTA STRIP */}
        <section className="py-24 bg-[#071F20] text-white relative overflow-hidden select-none">
          {/* Immersive Dark Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero.webp"
              alt="Bespoke luxury interior"
              className="w-full h-full object-cover blur-[2px] opacity-25 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F3D3E]/95 to-[#0A2526]/98"></div>
          </div>
          <div className="relative z-10 container-custom text-center max-w-3xl mx-auto space-y-6">
            <span className="text-[#E8D8C4] font-bold tracking-widest uppercase text-xs block">
              Bespoke Turnkey Curation
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight tracking-tight">
              Let’s Design Your Dream Home in Indiranagar.
            </h2>
            
            <p className="text-stone-300 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
              Connect with a senior spatial interior architect at our Bangalore curation studio today.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a href="#indiranagarForm">
                <Button className="bg-[#E8D8C4] hover:bg-white text-[#0F3D3E] font-bold px-8 py-6 rounded-lg text-xs md:text-sm uppercase tracking-wider shadow-lg transition-transform hover:scale-[1.02] flex items-center gap-2">
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <a 
                href="https://wa.me/919164466606?text=Hi%20Denova%20Creations%2C%20I%20would%20like%20to%20get%20a%20turnkey%20home%20interior%20estimate%20for%20my%20residence%20in%20Indiranagar."
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-transparent hover:bg-white/10 border border-white/20 text-white font-semibold px-8 py-6 rounded-lg text-xs md:text-sm uppercase tracking-wider transition-all duration-300">
                  WhatsApp Us
                </Button>
              </a>
              <Link to="/estimate">
                <Button className="bg-transparent hover:bg-white/10 border border-white/20 text-white font-semibold px-8 py-6 rounded-lg text-xs md:text-sm uppercase tracking-wider transition-all duration-300">
                  Get Cost Estimate
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Indiranagar;