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
import { SCRIPT_URL } from "../utils/api";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { companyInfo } from "../data/mock";

// Cinematic Slideshow Kitchen Projects
const heroSlides = [
  {
    img: "/images/kitchen1.webp",
    title: "Luxury Modular Kitchen Designs",
    tagline: "German-precision edge-banding and space-optimized workflows."
  },
  {
    img: "/images/kitchen2.webp",
    title: "Sleek Handleless Gola Kitchens",
    tagline: "Contemporary aesthetics with premium soft-close Blum hardware."
  },
  {
    img: "/images/kitchen3.webp",
    title: "Boiling Water Proof Core Cabinetry",
    tagline: "100% BWP Marine Plywood built to withstand heavy Indian cooking."
  },
  {
    img: "/images/landingpagehero.webp",
    title: "Bespoke Island Prep Kitchens",
    tagline: "Exquisite solid quartz countertops and custom tinted glass shutters."
  }
];

// Interactive Kitchen Layouts Data
const kitchenLayouts = [
  {
    title: "L-Shaped Modular Kitchen",
    subtitle: "Classic Workspace Efficiency",
    desc: "Maximizes corner storage using a natural, unbroken cooking triangle (Sink-Fridge-Hob). The absolute best layout for standard Bangalore apartment layouts.",
    features: ["Highly efficient corners", "Ample counter workspace", "Seamless working workflow"],
    img: "/images/kitchen1.webp",
    val: "L-Shape"
  },
  {
    title: "U-Shaped Modular Kitchen",
    subtitle: "Spacious Multi-Chef Layout",
    desc: "Surrounds you with three counters to offer maximum storage, continuous counter space, and separate zones for wet and dry preparation. Ideal for large family homes.",
    features: ["Maximized drawer modules", "Multiple chefs workspace", "Perfect zone separation"],
    img: "/images/kitchen2.webp",
    val: "U-Shape"
  },
  {
    title: "Parallel Modular Kitchen",
    subtitle: "Professional Galley Workflow",
    desc: "Splits wet washing and dry cooking zones across two parallel counters. Bypasses corner issues completely to coordinate a rapid, highly professional workflow.",
    features: ["Professional cooking zone", "Zero wasted corners", "Separate wet & dry zones"],
    img: "/images/kitchen3.webp",
    val: "Parallel"
  },
  {
    title: "Freestanding Island Kitchen",
    subtitle: "Bespoke Architectural Centerpiece",
    desc: "Fitted with a gorgeous freestanding center counter that functions as prep space, breakfast bar, and social dining hub. Yields a premium five-star look.",
    features: ["Social gathering hub", "Luxury aesthetic appeal", "Extra storage & prep sink"],
    img: "/images/landingpagehero.webp",
    val: "Island"
  }
];

// Curated Woods Data for Kitchen carcass
const kitchenWoods = [
  {
    name: "BWP Marine Plywood (IS:710)",
    bestFor: "Wet sink cabinets, bottom carcasses, utility areas",
    benefit: "100% Boiling Water Proof synthetic resin bonding. Zero delamination or termite risk under heavy water exposure.",
    rank: "Mandatory Core"
  },
  {
    name: "BWR Moisture Plywood (IS:303)",
    bestFor: "Dry upper cupboards, storage lofts, pantry shelves",
    benefit: "Boiling Water Resistant resin structure. Highly durable and heat resilient for typical kitchen overhead boxes.",
    rank: "Standard Core"
  },
  {
    name: "German Precision Edge-Banding",
    bestFor: "Carcass edges, drawer panels, shutter borders",
    benefit: "Automated millimeter-accurate hotmelt bonding that leaves zero gaps. Prevents moisture ingress and panel swelling.",
    rank: "Factory Shield"
  }
];

// Curated Bangalore Customer Testimonials
const kitchenReviews = [
  {
    name: "Vikram & Aditi Hegde",
    location: "Godrej Eternity, Kanakapura Road",
    quote: "Denova designed our U-shaped parallel kitchen. They mapped our kitchen triangle perfectly according to Vastu, and the BWP marine ply under the sink gives us absolute peace of mind. Exceptional factory edge-banding quality!",
    rating: 5
  },
  {
    name: "Rajesh Sekhar",
    location: "Prestige Falcon City, Bangalore",
    quote: "Outstanding experience. The 3D render matched the final installation exactly. The Blum soft-close tandem drawers are silent, and the quartz countertop feels bulletproof. They delivered exactly on day 45 as promised.",
    rating: 5
  }
];

// Interactive FAQ Coves
const kitchenFaqs = [
  {
    q: "Why is BWP Plywood mandatory for modular kitchens?",
    a: "BWP (Boiling Water Proof) marine-grade plywood (certified IS:710) uses premium synthetic phenol-formaldehyde resin. This allows the core wood to withstand direct water contact and boiling water up to 72 hours without swelling or delamination. We mandate BWP for all under-sink boxes and lower carcass modules."
  },
  {
    q: "How are modular kitchen costs calculated in Bangalore?",
    a: "Modular kitchen pricing is calculated based on Running Feet (R.Ft) of the horizontal space, separating the base cabinets, wall cabinets, and countertop quartz. The core carcass material (BWP vs BWR), selected surface finish (laminate vs acrylic), and tandem accessories (Hettich drawers, pantry pull-outs) determine the final estimate."
  },
  {
    q: "What is the delivery turnaround timeline for Denova modular kitchens?",
    a: "Our strict turnaround timeline is 45 days. Because all modular components are precision-cut, pre-drilled, and hotmelt edge-banded in our automated factory, onsite assembly at your Bangalore apartment takes only 5 to 7 days, ensuring a clean, dust-free installation."
  },
  {
    q: "Do you design according to Vastu principles?",
    a: "Yes, all our space layouts respect the Kitchen Triangle and Vastu guidelines. We coordinate the stove (Fire element) to face East/South-East and the washing sink (Water element) to face North-East, keeping them properly separated for balance and workflow."
  }
];

const ModularKitchenBangalore = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [activeFaq, setActiveFaq] = useState(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    kitchenType: "",
    budget: "",
    message: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
    gclid: "",
    landing_page: "",
  });

  // UTM parameters setup
  useEffect(() => {
    const url = new URL(window.location.href);
    const utmData = {
      utm_source: url.searchParams.get("utm_source") || localStorage.getItem("utm_source") || "GoogleAds",
      utm_medium: url.searchParams.get("utm_medium") || localStorage.getItem("utm_medium") || "cpc",
      utm_campaign: url.searchParams.get("utm_campaign") || localStorage.getItem("utm_campaign") || "",
      utm_content: url.searchParams.get("utm_content") || localStorage.getItem("utm_content") || "",
      utm_term: url.searchParams.get("utm_term") || localStorage.getItem("utm_term") || "",
      gclid: url.searchParams.get("gclid") || localStorage.getItem("gclid") || "",
    };

    Object.entries(utmData).forEach(([key, value]) => {
      if (value) localStorage.setItem(key, value);
    });

    setForm((prev) => ({
      ...prev,
      ...utmData,
      landing_page: window.location.href,
    }));
  }, []);

  // Automatic slide cycle for Hero Background
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!form.name.trim()) tempErrors.name = "Full Name is required";
    
    const cleanedPhone = form.phone.replace(/\D/g, "");
    if (!form.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (cleanedPhone.length !== 10) {
      tempErrors.phone = "Must be a valid 10-digit number";
    }

    if (!form.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      tempErrors.email = "Enter a valid email address";
    }

    if (!form.location.trim()) {
      tempErrors.location = "Bangalore location / pincode is required";
    }

    if (!form.kitchenType) {
      tempErrors.kitchenType = "Please select a kitchen layout";
    }

    if (!form.budget) {
      tempErrors.budget = "Please select a budget range";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const scrollToForm = () => {
    const formEl = document.getElementById("kitchenLeadForm");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleSelectKitchenType = (type) => {
    setForm((prev) => ({ ...prev, kitchenType: type }));
    scrollToForm();
  };

  const handleSelectBudget = (budget) => {
    setForm((prev) => ({ ...prev, budget: budget }));
    scrollToForm();
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const cleanedPhone = form.phone.replace(/\D/g, "").slice(0, 10);
    setLoading(true);

    try {
      // Save details to Google Sheets App Script URL
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          phone: cleanedPhone,
          email: form.email,
          location: form.location,
          propertyType: `Modular Kitchen (${form.kitchenType})`,
          possession: "Modular Kitchen Service Page",
          budget: form.budget,
          message: form.message || `Interested in ${form.kitchenType} modular kitchen.`,
          source: "Modular Kitchen Bangalore LP",
          utm_source: localStorage.getItem("utm_source") || "GoogleAds",
          utm_medium: localStorage.getItem("utm_medium") || "cpc",
          utm_campaign: localStorage.getItem("utm_campaign") || "",
          utm_content: localStorage.getItem("utm_content") || "",
          utm_term: localStorage.getItem("utm_term") || "",
          gclid: localStorage.getItem("gclid") || "",
          landing_page: localStorage.getItem("landing_page") || window.location.href,
          timestamp: new Date().toISOString(),
        }),
      });

      // GTM custom conversion trigger
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "lead_conversion",
        page: "modular_kitchen_bangalore"
      });

      // Direct Google Ads conversion script triggers
      if (window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-11303451952/63-FCIP1rZ8cELD6840q"
        });
      }

      setTimeout(() => {
        window.location.href = "/thank-you?source=kitchen";
      }, 1000);

    } catch (err) {
      console.error("Submission issue:", err);
      alert("Something went wrong. Please check your network and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Premium Modular Kitchen Designers Bangalore | Denova Creations</title>
        <meta
          name="description"
          content="Get a luxury modular kitchen in Bangalore. BWP waterproof marine plywood, German precision edge-banding, Hettich soft-close hardware & 45-day guaranteed delivery."
        />
        <link rel="canonical" href="https://denovacreations.com/modular-kitchen-bangalore" />
        
        {/* Product schema mapping for modular kitchens */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Luxury Modular Kitchen Interiors Bangalore",
            "image": "https://denovacreations.com/images/kitchen1.webp",
            "description": "Bespoke modular kitchens designed with 100% waterproof BWP marine plywood, Gola profiles, and German precision automation.",
            "brand": {
              "@type": "Brand",
              "name": "Denova Creations"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "lowPrice": "150000",
              "highPrice": "1200000",
              "offerCount": "150"
            }
          })}
        </script>
      </Helmet>

      <div className="bg-[#FAF8F5] text-stone-850 antialiased min-h-screen relative pb-16 md:pb-0">

        {/* 1. AUTO-SLIDING CINEMATIC HERO & GLASSMORPHIC LEAD CAPTURE FORM */}
        <section className="relative min-h-[92vh] flex items-center bg-[#071F20] pt-24 pb-16 overflow-hidden select-none">
          
          {/* Background Slider */}
          <div className="absolute inset-0 z-0">
            {heroSlides.map((slide, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  idx === slideIndex ? "opacity-100 scale-102" : "opacity-0 scale-100"
                }`}
                style={{ transition: "opacity 1000ms ease-in-out, transform 5000ms ease-out" }}
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            {/* Elegant deep gradient and composition overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#051819]/95 via-[#051819]/80 to-[#051819]/55"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,24,25,0.7)_100%)]"></div>
          </div>

          <div className="relative z-10 w-full container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* LEFT: HEADING HIERARCHY & PRIMARY ASSURANCES */}
              <div className="lg:col-span-6 text-left space-y-6 lg:max-w-xl animate-fade-in-up">
                
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E8D8C4]/15 border border-[#E8D8C4]/20 backdrop-blur-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#E8D8C4]" />
                  <span className="text-[#E8D8C4] font-bold text-[9px] uppercase tracking-widest leading-none">
                    Google Ads Special Offer
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif tracking-tight leading-tight">
                  Luxury Modular Kitchens <span className="text-[#E8D8C4]">Crafted for Elegant Living.</span>
                </h1>

                <p className="text-stone-300 text-xs md:text-sm leading-relaxed">
                  German precision edge-banding, Vastu-friendly cooking triangle zones, and 100% water-proof BWP marine plywood carcass shields built for Indian homes.
                </p>

                {/* Core trust matrix */}
                <div className="grid grid-cols-2 gap-4 border-t border-stone-700/50 pt-6 text-white text-xs font-semibold">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#E8D8C4] mt-0.5" />
                    <div>
                      <span className="text-white block">10-Year Warranty</span>
                      <span className="text-stone-400 font-normal text-[10px]">Millimeter factory precision</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#E8D8C4] mt-0.5" />
                    <div>
                      <span className="text-white block">150+ Kitchens Built</span>
                      <span className="text-stone-400 font-normal text-[10px]">Zero middleman markups</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#E8D8C4] mt-0.5" />
                    <div>
                      <span className="text-white block">100% Waterproof</span>
                      <span className="text-stone-400 font-normal text-[10px]">BWP Marine Ply wet cabinet base</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#E8D8C4] mt-0.5" />
                    <div>
                      <span className="text-white block">45-Day Turnaround</span>
                      <span className="text-stone-400 font-normal text-[10px]">Neat, dustless onsite assembly</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4 items-center">
                  <a href="#layouts">
                    <Button className="bg-[#E8D8C4] hover:bg-white text-[#0F3D3E] font-bold px-6 py-5 rounded-lg text-xs md:text-sm uppercase tracking-wider transition-all duration-300">
                      Explore Kitchen Layouts
                    </Button>
                  </a>
                  <a href="tel:+919164466606" className="inline-flex items-center gap-2 text-stone-300 hover:text-white text-xs font-semibold transition-colors duration-300">
                    <PhoneCall className="w-4.5 h-4.5 text-[#E8D8C4]" />
                    <span>Call Expert: +91 91644 66606</span>
                  </a>
                </div>

              </div>

              {/* RIGHT: PREMIUM GLASSMORPHIC LEAD CARD */}
              <div className="lg:col-span-6 lg:ml-auto w-full max-w-lg">
                <Card 
                  id="kitchenLeadForm" 
                  className="border-0 bg-white/95 shadow-[0_30px_60px_rgba(5,24,25,0.3)] rounded-3xl overflow-hidden backdrop-blur-md relative"
                >
                  {/* Warning ticker */}
                  <div className="bg-[#FAF7F2] py-2.5 px-6 border-b border-[#E8D8C4]/20 flex justify-between items-center text-[10px] font-bold text-[#0F3D3E] uppercase tracking-wider">
                    <span className="text-red-600 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping"></span>
                      Google Ads Direct Booking Discount Active
                    </span>
                    <span>Free Quote</span>
                  </div>

                  <CardContent className="p-8 space-y-5">
                    <div className="text-center space-y-1">
                      <h2 className="text-2xl font-bold font-serif text-[#0F3D3E]">
                        Get Free Kitchen Estimate
                      </h2>
                      <p className="text-stone-500 text-xs font-medium">
                        Receive a detailed itemized costing estimate within 30 minutes.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
                      
                      {/* Name input */}
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

                      {/* Grid for phone and email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        
                        {/* Phone input */}
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

                        {/* Email input */}
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase tracking-wider font-bold text-stone-500 block">Email Address *</label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                            <input
                              type="email"
                              name="email"
                              value={form.email}
                              onChange={handleChange}
                              placeholder="rahul@gmail.com"
                              className={`w-full pl-10 pr-4 py-3 bg-[#FAF8F5] border rounded-xl text-xs font-semibold focus:outline-none focus:border-[#0F3D3E] transition-all ${
                                errors.email ? "border-red-500 bg-red-50/20" : "border-stone-200/60"
                              }`}
                            />
                          </div>
                          {errors.email && <span className="text-[10px] text-red-500 font-bold block">{errors.email}</span>}
                        </div>

                      </div>

                      {/* Location and layout selection */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        
                        {/* Location */}
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase tracking-wider font-bold text-stone-500 block">Bangalore Location *</label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                            <input
                              type="text"
                              name="location"
                              value={form.location}
                              onChange={handleChange}
                              placeholder="Whitefield, HSR, Pincode"
                              className={`w-full pl-10 pr-4 py-3 bg-[#FAF8F5] border rounded-xl text-xs font-semibold focus:outline-none focus:border-[#0F3D3E] transition-all ${
                                errors.location ? "border-red-500 bg-red-50/20" : "border-stone-200/60"
                              }`}
                            />
                          </div>
                          {errors.location && <span className="text-[10px] text-red-500 font-bold block">{errors.location}</span>}
                        </div>

                        {/* Kitchen layout selection */}
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase tracking-wider font-bold text-stone-500 block">Kitchen Layout *</label>
                          <div className="relative">
                            <Layers className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                            <select
                              name="kitchenType"
                              value={form.kitchenType}
                              onChange={handleChange}
                              className={`w-full pl-10 pr-4 py-3 bg-[#FAF8F5] border rounded-xl text-xs font-semibold focus:outline-none focus:border-[#0F3D3E] transition-all appearance-none cursor-pointer ${
                                errors.kitchenType ? "border-red-500 bg-red-50/20" : "border-stone-200/60"
                              }`}
                            >
                              <option value="">Select Layout</option>
                              <option value="L-Shape">L-Shape Kitchen</option>
                              <option value="U-Shape">U-Shape Kitchen</option>
                              <option value="Parallel">Parallel Kitchen</option>
                              <option value="Island">Freestanding Island</option>
                              <option value="Straight">Linear Straight</option>
                              <option value="Open Concept">Open Concept Layout</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-stone-400 pointer-events-none" />
                          </div>
                          {errors.kitchenType && <span className="text-[10px] text-red-500 font-bold block">{errors.kitchenType}</span>}
                        </div>

                      </div>

                      {/* Budget Range Dropdown */}
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-wider font-bold text-stone-500 block">Budget Tier *</label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                          <select
                            name="budget"
                            value={form.budget}
                            onChange={handleChange}
                            className={`w-full pl-10 pr-4 py-3 bg-[#FAF8F5] border rounded-xl text-xs font-semibold focus:outline-none focus:border-[#0F3D3E] transition-all appearance-none cursor-pointer ${
                              errors.budget ? "border-red-500 bg-red-50/20" : "border-stone-200/60"
                            }`}
                          >
                            <option value="">Select Budget</option>
                            <option value="₹1.5L - ₹2.5L">₹1.5L - ₹2.5L (Essential Smart)</option>
                            <option value="₹3.0L - ₹5.5L">₹3.0L - ₹5.5L (Premium Elite)</option>
                            <option value="₹6.0L - ₹12.0L+">₹6.0L - ₹12.0L+ (Signature Luxury)</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-stone-400 pointer-events-none" />
                        </div>
                        {errors.budget && <span className="text-[10px] text-red-500 font-bold block">{errors.budget}</span>}
                      </div>

                      {/* Optional requirement notes */}
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-wider font-bold text-stone-500 block">Additional Notes / Appliance Requirements</label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={2}
                          placeholder="e.g. Inbuilt oven slot, profile handles, quartz tops..."
                          className="w-full p-3 bg-[#FAF8F5] border border-stone-200/60 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#0F3D3E] transition-all"
                        />
                      </div>

                      {/* Submit button */}
                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full py-6 rounded-xl bg-[#0F3D3E] hover:bg-[#0A2526] text-[#E8D8C4] hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01]"
                      >
                        <span>{loading ? "Submitting..." : "Get Free Custom Estimate"}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>

                    </form>

                    <div className="border-t border-stone-100 pt-4 flex justify-center gap-5 text-[10px] font-semibold text-stone-400">
                      <span className="flex items-center gap-1">✔ Free consultation</span>
                      <span className="flex items-center gap-1">✔ 3D design coves</span>
                      <span className="flex items-center gap-1">✔ Zero obligation</span>
                    </div>

                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </section>

        {/* 2. DUSTLESS TRUST STATS STRIP */}
        <section className="py-8 bg-white border-b border-stone-150 select-none">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 lg:gap-0 max-w-5xl mx-auto text-xs font-bold text-stone-600">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4.5 h-4.5 text-[#0F3D3E]" />
                150+ Modular Kitchens Completed
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4.5 h-4.5 text-[#0F3D3E]" />
                German Precision Edge-banding
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4.5 h-4.5 text-[#0F3D3E]" />
                Century/Kitply IS:710 certified BWP Ply
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4.5 h-4.5 text-[#0F3D3E]" />
                Blum & Hettich soft-close systems
              </span>
            </div>
          </div>
        </section>

        {/* 3. INTERACTIVE DESIGN CATEGORIES */}
        <section id="layouts" className="py-20 md:py-24 bg-[#FAF8F5]">
          <div className="container-custom">
            
            <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
              <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                Shape Collections
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0F3D3E] tracking-tight">
                Modular Kitchen Design Layouts
              </h2>
              <p className="text-stone-500 text-xs md:text-sm">
                Each kitchen shape maps specific spatial guidelines and working triangles. Select a layout to configure inside your estimate form.
              </p>
            </div>

            {/* Layout categories grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
              {kitchenLayouts.map((layout, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-3xl overflow-hidden border border-stone-100 hover:border-[#E8D8C4] shadow-[0_10px_35px_rgba(0,0,0,0.015)] hover:shadow-lg transition-all duration-300 group flex flex-col"
                >
                  <div className="h-60 overflow-hidden relative">
                    <img
                      src={layout.img}
                      alt={layout.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-stone-900/10"></div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-[#E8D8C4] font-bold text-[9px] uppercase tracking-widest block">
                        {layout.subtitle}
                      </span>
                      <h3 className="text-xl font-bold font-serif text-[#0F3D3E] leading-tight">
                        {layout.title}
                      </h3>
                      <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
                        {layout.desc}
                      </p>
                    </div>

                    <div className="border-t border-stone-50 pt-4 flex flex-wrap gap-2 text-[10px] font-bold text-[#0F3D3E] uppercase tracking-wide">
                      {layout.features.map((f, i) => (
                        <span key={i} className="bg-[#FAF7F2] px-2.5 py-1 rounded-full">
                          {f}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2">
                      <Button
                        onClick={() => handleSelectKitchenType(layout.val)}
                        className="w-full bg-[#0F3D3E] hover:bg-[#FAF7F2] hover:text-[#0F3D3E] text-white border border-[#0F3D3E] font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-all"
                      >
                        Select This Layout
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 4. WHY CHOOSE DENOVA FOR MODULAR KITCHENS */}
        <section className="py-20 bg-white border-y border-stone-150 select-none">
          <div className="container-custom">
            
            <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
              <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                The Denova Standard
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0F3D3E] tracking-tight">
                Designed for Reliability & Elegance
              </h2>
              <p className="text-stone-500 text-xs md:text-sm">
                We eliminate sub-contracting and field carpentry errors with automated factory precision edge finishes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
              
              {/* Point 1 */}
              <div className="p-8 bg-[#FAF8F5] rounded-3xl border border-stone-100/60 space-y-3.5 hover:border-[#E8D8C4] hover:bg-white transition-all duration-300">
                <div className="w-9 h-9 bg-white text-[#0F3D3E] border border-stone-100 flex items-center justify-center rounded-lg shadow-xs">
                  <ShieldCheck className="w-5 h-5 text-[#E8D8C4]" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#0F3D3E]">100% Waterproof Carcass</h3>
                <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
                  We use IS:710 Boiling Water Proof (BWP) marine plywood exclusively under sinks and washing zones to prevent structural rot or termite nesting.
                </p>
              </div>

              {/* Point 2 */}
              <div className="p-8 bg-[#FAF8F5] rounded-3xl border border-stone-100/60 space-y-3.5 hover:border-[#E8D8C4] hover:bg-white transition-all duration-300">
                <div className="w-9 h-9 bg-white text-[#0F3D3E] border border-stone-100 flex items-center justify-center rounded-lg shadow-xs">
                  <Award className="w-5 h-5 text-[#E8D8C4]" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#0F3D3E]">German Edge-Banding Precision</h3>
                <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
                  All board borders undergo automated factory edge-binding with PUR hotmelt technology, sealing boards 100% from water entry and swelling.
                </p>
              </div>

              {/* Point 3 */}
              <div className="p-8 bg-[#FAF8F5] rounded-3xl border border-stone-100/60 space-y-3.5 hover:border-[#E8D8C4] hover:bg-white transition-all duration-300">
                <div className="w-9 h-9 bg-white text-[#0F3D3E] border border-stone-100 flex items-center justify-center rounded-lg shadow-xs">
                  <Clock className="w-5 h-5 text-[#E8D8C4]" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#0F3D3E]">Soft-Close Hardware Only</h3>
                <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
                  Fitted with premium soft-close tandem drawers and hydraulic clip-on hinges from Hettich and Blum to provide completely silent, long-lasting closures.
                </p>
              </div>

              {/* Point 4 */}
              <div className="p-8 bg-[#FAF8F5] rounded-3xl border border-stone-100/60 space-y-3.5 hover:border-[#E8D8C4] hover:bg-white transition-all duration-300">
                <div className="w-9 h-9 bg-white text-[#0F3D3E] border border-stone-100 flex items-center justify-center rounded-lg shadow-xs">
                  <Compass className="w-5 h-5 text-[#E8D8C4]" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#0F3D3E]">Vastu-Optimized Placement</h3>
                <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
                  Our layouts strictly map Vastu principles, placing the cooking stove in the South-East zone and keeping the washing sink completely separate.
                </p>
              </div>

              {/* Point 5 */}
              <div className="p-8 bg-[#FAF8F5] rounded-3xl border border-stone-100/60 space-y-3.5 hover:border-[#E8D8C4] hover:bg-white transition-all duration-300">
                <div className="w-9 h-9 bg-white text-[#0F3D3E] border border-stone-100 flex items-center justify-center rounded-lg shadow-xs">
                  <DollarSign className="w-5 h-5 text-[#E8D8C4]" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#0F3D3E]">Zero Cost Deviations</h3>
                <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
                  Once your 3D kitchen layout is approved, your itemized cost quotation is locked. Zero extra charges, zero mid-project price changes.
                </p>
              </div>

              {/* Point 6 */}
              <div className="p-8 bg-[#FAF8F5] rounded-3xl border border-stone-100/60 space-y-3.5 hover:border-[#E8D8C4] hover:bg-white transition-all duration-300">
                <div className="w-9 h-9 bg-white text-[#0F3D3E] border border-stone-100 flex items-center justify-center rounded-lg shadow-xs">
                  <Users className="w-5 h-5 text-[#E8D8C4]" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#0F3D3E]">Dedicated Structural Supervision</h3>
                <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
                  A certified civil engineer monitors your onsite module alignment and stone fittings directly, avoiding manual carpentry errors.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* 5. QUALITY & MATERIAL TRANSPARENCY HUB */}
        <section className="py-20 md:py-24 bg-[#FAF8F5]">
          <div className="container-custom">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-5xl mx-auto text-left">
              
              {/* Left text column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-[1px] bg-[#E8D8C4]"></span>
                  <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs">Material Blueprint</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0F3D3E] tracking-tight leading-tight">
                  Premium Sourcing. Total Transparency.
                </h2>
                
                <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
                  We believe a luxury kitchen should last a generation. We only source certified, branded boards and authentic Hettich/Hafele hardware to guarantee lifetime performance.
                </p>

                {/* Woods data blocks */}
                <div className="space-y-4 pt-4 border-t border-stone-200/50">
                  {kitchenWoods.map((wood, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#0F3D3E] border border-emerald-100 flex items-center justify-center flex-shrink-0 font-serif font-bold text-xs">
                        0{idx + 1}
                      </div>
                      <div>
                        <span className="text-[#0F3D3E] font-bold text-xs block">{wood.name}</span>
                        <p className="text-stone-500 text-[11px] leading-relaxed mt-0.5">{wood.benefit}</p>
                        <span className="text-[9px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full inline-block mt-1">{wood.rank}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right image column */}
              <div className="lg:col-span-6 relative group">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl border-4 border-white z-10">
                  <img
                    src="/images/kitchen3.webp"
                    alt="Premium edge-banded modular cabinets by Denova"
                    className="w-full h-full object-cover transition-transform group-hover:scale-103 duration-500"
                  />
                  <div className="absolute inset-0 bg-stone-900/10"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-40 h-40 border-r-4 border-b-4 border-[#E8D8C4] rounded-br-3xl z-0"></div>
              </div>

            </div>

          </div>
        </section>

        {/* 6. MODULAR PRICING TRANSPARENCY SECTION */}
        <section className="py-20 bg-white border-y border-stone-150 select-none">
          <div className="container-custom">
            
            <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
              <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                Cost Tiers
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0F3D3E] tracking-tight">
                Modular Kitchen Costing Guide
              </h2>
              <p className="text-stone-500 text-xs md:text-sm">
                Transparent ranges based on layout sizes, selected surface finishes, and hardware options.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
              
              {/* Tier 1 */}
              <div className="p-8 bg-[#FAF8F5] rounded-3xl border border-stone-100 flex flex-col justify-between hover:border-[#E8D8C4] transition-all duration-300">
                <div className="space-y-4">
                  <span className="text-[#E8D8C4] font-bold text-[9px] uppercase tracking-widest block">Core Essential</span>
                  <h3 className="font-serif font-bold text-xl text-[#0F3D3E]">Smart L-Shape Basic</h3>
                  <span className="text-2xl font-bold text-emerald-700 block bg-emerald-50/50 p-3 rounded-2xl text-center border border-emerald-100/50">
                    ₹1.5L - ₹2.5L
                  </span>
                  <p className="text-stone-500 text-xs leading-relaxed">
                    Perfect for compact standard apartments or rental homes requiring robust, waterproof modular cores at an optimized price point.
                  </p>
                  <ul className="space-y-2 pt-2 border-t border-stone-200/50 text-[11px] text-stone-600 font-semibold">
                    <li className="flex items-center gap-2">✔ Moisture resistant BWR Plywood carcass</li>
                    <li className="flex items-center gap-2">✔ Durable Matte/Gloss laminates</li>
                    <li className="flex items-center gap-2">✔ Soft-close Hettich hinges</li>
                    <li className="flex items-center gap-2">✔ standard wire baskets & cutlery</li>
                  </ul>
                </div>
                <div className="pt-6">
                  <Button onClick={() => handleSelectBudget("₹1.5L - ₹2.5L")} className="w-full bg-[#0F3D3E] hover:bg-[#0A2526] text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl">
                    Select This Tier
                  </Button>
                </div>
              </div>

              {/* Tier 2 */}
              <div className="p-8 bg-white rounded-3xl border-2 border-[#0F3D3E] shadow-xl flex flex-col justify-between relative">
                <span className="absolute top-4 right-4 bg-emerald-700 text-white font-bold text-[8px] uppercase tracking-widest px-2.5 py-1 rounded-full">Best Seller</span>
                <div className="space-y-4">
                  <span className="text-[#E8D8C4] font-bold text-[9px] uppercase tracking-widest block">Premium Elite</span>
                  <h3 className="font-serif font-bold text-xl text-[#0F3D3E]">Urban Parallel / U-Shape</h3>
                  <span className="text-2xl font-bold text-emerald-700 block bg-emerald-50 p-3 rounded-2xl text-center border border-emerald-100">
                    ₹3.0L - ₹5.5L
                  </span>
                  <p className="text-stone-500 text-xs leading-relaxed">
                    Our signature tier for modern home owners. Full BWP marine ply cores matched with highly reflective contemporary surface finishes.
                  </p>
                  <ul className="space-y-2 pt-2 border-t border-stone-200/50 text-[11px] text-stone-600 font-semibold">
                    <li className="flex items-center gap-2 text-emerald-800">✔ 100% BWP Marine Plywood core</li>
                    <li className="flex items-center gap-2">✔ Premium Gloss Acrylic shutters</li>
                    <li className="flex items-center gap-2">✔ Hettich soft-close tandem drawers</li>
                    <li className="flex items-center gap-2">✔ Custom modular bottle pull-outs</li>
                  </ul>
                </div>
                <div className="pt-6">
                  <Button onClick={() => handleSelectBudget("₹3.0L - ₹5.5L")} className="w-full bg-[#0F3D3E] hover:bg-[#0A2526] text-[#E8D8C4] hover:text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl">
                    Select This Tier
                  </Button>
                </div>
              </div>

              {/* Tier 3 */}
              <div className="p-8 bg-[#FAF8F5] rounded-3xl border border-stone-100 flex flex-col justify-between hover:border-[#E8D8C4] transition-all duration-300">
                <div className="space-y-4">
                  <span className="text-[#E8D8C4] font-bold text-[9px] uppercase tracking-widest block">Signature Luxury</span>
                  <h3 className="font-serif font-bold text-xl text-[#0F3D3E]">Architectural Island Villa</h3>
                  <span className="text-2xl font-bold text-emerald-700 block bg-emerald-50/50 p-3 rounded-2xl text-center border border-emerald-100/50">
                    ₹6.0L - ₹12.0L+
                  </span>
                  <p className="text-stone-500 text-xs leading-relaxed">
                    Custom modular masterpieces featuring state-of-the-art kitchen mechanics, custom fluted veneer panels, and quartz stone prep islands.
                  </p>
                  <ul className="space-y-2 pt-2 border-t border-stone-200/50 text-[11px] text-stone-600 font-semibold">
                    <li className="flex items-center gap-2">✔ BWP Ply + PVC vanity waterproof</li>
                    <li className="flex items-center gap-2">✔ Seamless automotive PU finishes</li>
                    <li className="flex items-center gap-2">✔ Blum Servo-Drive motorized lifts</li>
                    <li className="flex items-center gap-2">✔ Solid quartz worktops & tall pantries</li>
                  </ul>
                </div>
                <div className="pt-6">
                  <Button onClick={() => handleSelectBudget("₹6.0L - ₹12.0L+")} className="w-full bg-[#0F3D3E] hover:bg-[#0A2526] text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl">
                    Select This Tier
                  </Button>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 7. VERIFIED BANGALORE CUSTOMER TRUST COVES */}
        <section className="py-20 bg-[#FAF8F5]">
          <div className="container-custom">
            
            <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
              <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                Social Proof
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0F3D3E] tracking-tight">
                Google Verified Transformation Stories
              </h2>
              <p className="text-stone-500 text-xs md:text-sm">
                Hear directly from Bangalore homeowners who upgraded to the Denova modular kitchen system.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
              {kitchenReviews.map((review, idx) => (
                <div key={idx} className="p-8 bg-white rounded-3xl border border-stone-100 space-y-4">
                  <div className="flex gap-0.5 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-stone-600 text-xs md:text-sm leading-relaxed italic">
                    "{review.quote}"
                  </p>
                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
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

        {/* 8. INTERACTIVE FAQ COVES */}
        <section className="py-20 bg-white border-t border-stone-150">
          <div className="container-custom">
            
            <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
              <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                Client Education
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0F3D3E] tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-stone-500 text-xs md:text-sm">
                Get clear, honest structural answers before commissioning your modular setup.
              </p>
            </div>

            {/* Accordion List */}
            <div className="max-w-3xl mx-auto space-y-3 text-left">
              {kitchenFaqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div 
                    key={idx} 
                    className="bg-[#FAF8F5] rounded-2xl border border-stone-150 overflow-hidden transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.005)]"
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
                    
                    {/* FAQ Answer Panel */}
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

        {/* 9. PREMIUM CLOSING CTA */}
        <section className="py-20 md:py-24 bg-gradient-to-b from-[#0F3D3E] to-[#0A2526] text-white relative z-10 select-none">
          <div className="container-custom text-center max-w-3xl mx-auto space-y-6">
            <span className="text-[#E8D8C4] font-bold tracking-widest uppercase text-xs block">
              Start Designing Today
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight tracking-tight">
              Ready to Build Your Dream Modular Kitchen?
            </h2>
            
            <p className="text-stone-300 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
              Book a free private kitchen space planning session at our Bangalore studio or get a detailed structural quotation.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a href="#kitchenLeadForm">
                <Button className="bg-[#E8D8C4] hover:bg-white text-[#0F3D3E] font-bold px-8 py-6 rounded-lg text-xs md:text-sm uppercase tracking-wider shadow-lg transition-transform hover:scale-[1.02] flex items-center gap-2">
                  <span>Get Kitchen Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <a 
                href="https://wa.me/919164466606?text=Hi%20Denova%20Creations%2C%20I%20would%20like%20to%20get%20a%20modular%20kitchen%20quote%20estimate."
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-transparent hover:bg-white/10 border border-white/20 text-white font-semibold px-8 py-6 rounded-lg text-xs md:text-sm uppercase tracking-wider transition-all duration-300">
                  WhatsApp Expert
                </Button>
              </a>
              <Link to="/portfolio">
                <Button className="bg-transparent hover:bg-white/10 border border-white/20 text-white font-semibold px-8 py-6 rounded-lg text-xs md:text-sm uppercase tracking-wider transition-all duration-300">
                  Explore Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 10. STICKY MOBILE CTA BAR (CRITICAL FOR GOOGLE ADS MOBILE TRAFFIC) */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-[999] bg-white/95 border-t border-stone-200 px-4 py-2.5 shadow-2xl flex justify-between gap-3 items-center backdrop-blur-md">
          <a
            href="tel:+919164466606"
            className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl border border-stone-300 text-stone-700 font-bold text-[10px] uppercase tracking-wider bg-white active:bg-stone-50 transition-all text-center"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#0F3D3E]" />
            <span>Call Expert</span>
          </a>
          
          <a
            href="https://wa.me/919164466606?text=Hi%20Denova%20Creations%2C%20I%20would%20like%20to%20get%20a%20modular%20kitchen%20quote%20estimate."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl text-white font-bold text-[10px] uppercase tracking-wider bg-emerald-600 active:bg-emerald-700 transition-all text-center"
          >
            <MessageSquare className="w-3.5 h-3.5 text-white" />
            <span>WhatsApp Us</span>
          </a>

          <a
            href="#kitchenLeadForm"
            onClick={scrollToForm}
            className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl text-[#0F3D3E] font-bold text-[10px] uppercase tracking-wider bg-[#E8D8C4] active:bg-[#e0cbb2] transition-all text-center"
          >
            <Zap className="w-3.5 h-3.5 text-[#0F3D3E]" />
            <span>Get Quote</span>
          </a>
        </div>

      </div>
    </>
  );
};

export default ModularKitchenBangalore;
