import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
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
  MessageSquare
} from "lucide-react";
import { SCRIPT_URL } from "../utils/api";

/* CLS-Prevented Safe Image Component */
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
      className="w-full overflow-hidden bg-[#FAF7F2] border border-[#E8D8C4]/40 rounded-2xl shadow-sm relative group"
      style={{ aspectRatio: `${width}/${height}`, minHeight: "150px" }}
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
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      ) : (
        <div className="flex items-center justify-center h-full text-[#0F3D3E]/60 text-xs font-serif italic bg-[#FAF7F2] p-4 text-center">
          Luxury Kitchen Design Preview
        </div>
      )}
    </div>
  );
};

const ModularKitchenBangalore = () => {
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

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

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

    setForm((prev) => ({
      ...prev,
      ...utmData,
      landing_page: window.location.href,
    }));
  }, []);

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
    
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit number";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.location.trim()) {
      newErrors.location = "Pincode or service area is required";
    }

    if (!form.kitchenType) {
      newErrors.kitchenType = "Select kitchen layout";
    }

    if (!form.budget) {
      newErrors.budget = "Select budget range";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const scrollToForm = () => {
    const formEl = document.getElementById("kitchenLeadForm");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectKitchenType = (type) => {
    setForm((prev) => ({
      ...prev,
      kitchenType: type,
    }));
    scrollToForm();
  };

  const handleSelectBudget = (budget) => {
    setForm((prev) => ({
      ...prev,
      budget: budget,
    }));
    scrollToForm();
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
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    try {
      setLoading(true);

      // Save to Google Sheets
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
          propertyType: `Modular Kitchen (${form.kitchenType})`,
          possession: "Modular Kitchen Service",
          budget: form.budget,
          message: form.message || `Interested in ${form.kitchenType} modular kitchen.`,
          source: "Modular Kitchen Bangalore LP",
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

      // GTM event push
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "lead_conversion",
        page: "modular_kitchen_bangalore"
      });

      // Google Ads event tracking
      if (window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-11303451952/63-FCIP1rZ8cELD6840q"
        });
      }

      // WhatsApp Redirect Option on submission or immediate thank you
      setTimeout(() => {
        window.location.href = "/thank-you?source=kitchen";
      }, 1000);

    } catch (err) {
      console.error("Submission issue:", err);
    } finally {
      setLoading(false);
    }
  };

  const kitchenTypes = [
    {
      title: "L-Shape Modular Kitchen",
      desc: "Maximizes corner efficiency with a natural cooking triangle, ideal for medium-sized apartments.",
      features: ["Highly efficient corners", "Ample counter space", "Seamless working flow"],
      img: "/images/kitchen1.webp",
      val: "L-Shape"
    },
    {
      title: "U-Shape Modular Kitchen",
      desc: "Provides maximum storage and three spacious counters, perfect for large families.",
      features: ["Maximized drawer modules", "Multiple chefs space", "Excellent zone separation"],
      img: "/images/kitchen2.webp",
      val: "U-Shape"
    },
    {
      title: "Parallel Modular Kitchen",
      desc: "Splits storage and appliances across two parallel counters for professional-grade workflow.",
      features: ["Professional cooking zone", "Zero wasted corners", "Separate wet & dry zones"],
      img: "/images/kitchen3.webp",
      val: "Parallel"
    },
    {
      title: "Island Modular Kitchen",
      desc: "Includes a luxurious freestanding center unit that functions as prep space and a breakfast counter.",
      features: ["Social gathering hub", "Luxury aesthetic appeal", "Extra storage & prep sink"],
      img: "/images/landingpagehero.webp",
      val: "Island"
    },
    {
      title: "Straight Modular Kitchen",
      desc: "A minimalist, space-saving linear setup perfect for studio apartments and compact homes.",
      features: ["Ultra-compact design", "Cost-effective layout", "Perfect for micro-homes"],
      img: "/images/kitchen1.webp",
      val: "Straight"
    },
    {
      title: "Open Concept Kitchen",
      desc: "Flows seamlessly into living/dining areas for a modern, airy, and highly social lifestyle.",
      features: ["Integrated living flow", "Modern premium look", "Fosters social cooking"],
      img: "/images/kitchen2.webp",
      val: "Open Concept"
    },
    {
      title: "Contemporary Modular Kitchen",
      desc: "Features flat slab handleless profiles, smart pull-out hardware, and minimalist luxury materials.",
      features: ["Gola-profile handleless", "Built-in appliances slot", "Anti-fingerprint matte"],
      img: "/images/kitchen3.webp",
      val: "Contemporary"
    },
    {
      title: "Luxury Modular Kitchen",
      desc: "Crafted with custom tinted glass panels, integrated LED lighting, and premium German hardware.",
      features: ["Blum servo-drive lifts", "High-end quartz tops", "State-of-the-art aesthetics"],
      img: "/images/landingpagehero.webp",
      val: "Luxury Premium"
    }
  ];

  const valueProps = [
    { title: "Custom Designs", desc: "100% personalized layouts tailored to your unique cooking habits and storage needs.", icon: Sparkles },
    { title: "Factory Finish", desc: "Precision edge-banding and manufacturing on state-of-the-art German machinery.", icon: Award },
    { title: "Premium Hardware", desc: "Equipped with authentic soft-close runners and hinges from Hettich and Blum.", icon: ShieldCheck },
    { title: "Space Optimization", desc: "Intelligent corner solutions, tall pantry pulls, and smart organizers that maximize utility.", icon: Clock },
    { title: "Vastu-Friendly Layouts", desc: "Expert placement of cooking stove (Fire) and washing sink (Water) according to Vastu.", icon: Compass },
    { title: "Transparent Pricing", desc: "Detailed breakdown of pricing before order confirmation with absolutely no hidden costs.", icon: DollarSign },
    { title: "End-to-End Execution", desc: "Seamless project management from preliminary measurements to final structural handover.", icon: Users },
    { title: "3D Visualization", desc: "High-resolution, photorealistic virtual 3D drafts to preview finishes before production.", icon: Zap },
    { title: "Experienced Designers", desc: "Designed by senior interior architects specializing specifically in premium kitchen ergonomics.", icon: CheckCircle }
  ];

  const processTimeline = [
    { title: "Consultation", desc: "1-on-1 discussion with a senior modular kitchen specialist to discuss layout preferences and requirements." },
    { title: "Design Planning", desc: "Our designer drafts a personalized structural layout optimization plan according to your kitchen size." },
    { title: "3D Visualization", desc: "Review high-definition photorealistic 3D kitchen renders. Revise colors, cabinets, and appliances." },
    { title: "Material Selection", desc: "Visit our Bangalore experience center to feel premium materials, hardware, and custom finishes." },
    { title: "Manufacturing", desc: "Precision components are manufactured at our state-of-the-art facility to guarantee zero gaps." },
    { title: "Installation", desc: "Our professional engineers assemble the modular kitchen on-site in a neat, dust-free process within 7 days." },
    { title: "Final Handover", desc: "Strict quality check verification, deep cleaning, and formal structural handover with warranty certificates." }
  ];

  const premiumFinishes = [
    { name: "Acrylic Finish", desc: "High-gloss, mirror-like premium surface that adds ultimate contemporary luxury and brightness.", resilience: "Extremely high gloss, easy to wipe down" },
    { name: "Premium Laminate", desc: "Super durable, scratch-resistant surface available in exquisite woodgrains, solid colors, and textures.", resilience: "Highly impact resistant, perfect for heavy daily use" },
    { name: "PU Finish", desc: "Seamless, sleek liquid spray-painted boards with immaculate details. Available in modern matte or high-gloss.", resilience: "Completely seamless edges, premium designer feel" },
    { name: "Natural Veneer", desc: "Thin slices of authentic premium timber overlaid on sturdy boards, reflecting rich organic luxury.", resilience: "Unique natural wood textures, timeless classic value" },
    { name: "Glass Finish", desc: "Tempered back-painted glass panels built inside aluminum frames for a futuristic, modern look.", resilience: "Completely heat and water resistant, sleek luxury style" },
    { name: "Sleek Matte Finish", desc: "Anti-fingerprint, low-reflection surfaces offering a sophisticated, modern Scandinavian touch.", resilience: "Stain resistant, zero reflections, soft touch feel" },
    { name: "High Gloss Finish", desc: "Highly reflective polymer coated boards that bounce light and make compact kitchens feel spacious.", resilience: "Bounces natural light, elevates visual depth" }
  ];

  const pricingPlans = [
    {
      name: "Basic Modular",
      price: "₹1.5 Lakhs",
      desc: "Perfect for rental homes or compact apartments requiring robust quality at an optimized price point.",
      features: [
        "Premium Marine Grade BWP Plywood",
        "Durable Matte/Gloss Laminate Finish",
        "Branded Soft-Close Hinges & Sliders",
        "Standard Kitchen Layout Configuration",
        "Includes Spice Pull-out & Cutlery Tray",
        "5-Year Material Warranty"
      ],
      val: "Basic Plan"
    },
    {
      name: "Premium Modular",
      price: "₹2.5 Lakhs",
      desc: "Our most popular choice. German-engineered hardware paired with high-gloss luxury finishes for modern families.",
      features: [
        "Moisture-Proof High Density HDMR/BWP",
        "Anti-Scratch Acrylic or Sleek PU Finish",
        "Premium Hettich Soft-Close Drawer Systems",
        "Customized Space-Saving Corner Carousel",
        "Dedicated Chimney & Built-In Hob Cabinets",
        "10-Year Comprehensive Warranty",
        "Free 3D Design & Site Measurement"
      ],
      val: "Premium Plan",
      popular: true
    },
    {
      name: "Luxury Modular",
      price: "₹4.5 Lakhs",
      desc: "The ultimate culinary masterpiece. Handleless Gola profiles, integrated lighting, and Blum electronic lift systems.",
      features: [
        "Premium BWP Plywood & Aluminum Profiles",
        "Exquisite Lacquered Glass or Natural Veneer",
        "Blum Legrabox & Servo-Drive Automation",
        "Integrated LED Warm Profile Lighting",
        "Tall Pantry Pullman Unit & Magic Corner",
        "Premium Quartz/Granite Countertop Assist",
        "Lifetime Hardware Warranty Support",
        "VIP Priority Engineering & Handover"
      ],
      val: "Luxury Plan"
    }
  ];

  const testimonials = [
    {
      quote: "Denova Creations transformed our kitchen in Whitefield into a functional masterpiece. The parallel layout optimizes every square inch, and the Hettich hardware feels absolutely seamless. Highly recommend their professional designers!",
      name: "Shreya & Raghavan Swamy",
      loc: "Whitefield, Bangalore",
      rating: 5
    },
    {
      quote: "We were skeptical about the 45-day delivery promise, but Denova completed our U-shape acrylic kitchen on the 41st day. The factory finish edge-banding is perfect—miles ahead of local carpenter work. Transparent pricing, highly satisfied.",
      name: "Karthik Gowda",
      loc: "HSR Layout, Bangalore",
      rating: 5
    },
    {
      quote: "The Blum lift-ups in our open island kitchen are a game changer. Denova's designers paid special attention to Vastu and custom pantry spacing. The Deep Emerald and Warm Beige accents match our living room aesthetics beautifully.",
      name: "Meera Sen",
      loc: "Indiranagar, Bangalore",
      rating: 5
    }
  ];

  const serviceAreas = [
    "Whitefield", "Sarjapur Road", "Electronic City", "HSR Layout",
    "Marathahalli", "Bellandur", "Indiranagar", "Jayanagar", "Koramangala"
  ];

  const faqs = [
    {
      q: "What is the average cost of a modular kitchen in Bangalore?",
      a: "The cost depends on layout size, materials, and hardware. Typically, a standard straight modular kitchen starts at ₹1.5 Lakhs. Premium L-shape or Parallel kitchens with German hardware range from ₹2.5 Lakhs to ₹4 Lakhs, while high-end luxury kitchens with automated lifts and glass/veneer finishes range from ₹4.5 Lakhs upwards."
    },
    {
      q: "What is the timeline for manufacturing and installing the kitchen?",
      a: "We offer a strict 45-Day Delivery Guarantee. All cabinet modules are manufactured in our high-precision factory, which takes approximately 30-35 days. The actual on-site assembly and installation at your Bangalore home is completed within 5 to 7 days in a clean, dust-free environment."
    },
    {
      q: "What kind of warranty does Denova Creations offer?",
      a: "We offer a 10-Year Structural Warranty on our Boiling Water Proof (BWP) marine plywood boards and high-density materials against water ingress and delamination. Additionally, we provide a lifetime functional warranty on premium drawer runners and hinges from our hardware partners Hettich and Blum."
    },
    {
      q: "Which materials are best suited for Indian cooking environments?",
      a: "Indian cooking involves heavy moisture, spices, and heat. We highly recommend Boiling Water Proof (BWP) Marine Grade Plywood or high-density water-resistant HDMR for carcases. For shutters, Premium Acrylic or PU paint finishes are excellent choices because they are highly moisture-proof and easy to wipe clean."
    },
    {
      q: "Can I fully customize the sizes of drawers and cabinets?",
      a: "Yes. Unlike generic modular brands that only offer standard box sizes, Denova Creations custom-manufactures every module at our factory. We adapt drawer heights, cupboard depths, and pull-out systems specifically to your kitchen's dimensions and your appliance storage preferences."
    },
    {
      q: "Are there No-Cost EMI or financing options available?",
      a: "Yes, we partner with leading financial institutions to offer zero-percent interest EMI payment options for up to 12 months. Our design consultant will provide you with easy approval plans during the initial layout budgeting phase."
    },
    {
      q: "Is the initial site measurement and design consultation free?",
      a: "Yes, absolutely. Our initial package includes site measurement, 2D kitchen layout planning, material material showcase, and a transparent pricing quote at zero cost or obligation."
    },
    {
      q: "How does the pricing vary by kitchen layouts and dimensions?",
      a: "Kitchen pricing is calculated based on running foot dimensions, selected shutter finishes, and internal hardware modules (e.g., plain shelves vs. wire baskets vs. Hettich InnoTech drawers). We provide a line-item estimate so you can selectively upgrade or downgrade to fit your budget."
    }
  ];

  return (
    <div className="bg-[#FAF8F5] text-stone-800 antialiased min-h-screen">
      <Helmet>
        <title>Premium Modular Kitchen Designers in Bangalore | Denova Creations</title>
        <meta
          name="description"
          content="Premium modular kitchens in Bangalore by Denova Creations. Explore customizable L-shape, U-shape, parallel, and island layouts with 10-year warranty, factory finish, and soft-close German hardware."
        />
        <link rel="canonical" href="https://denovacreations.com/modular-kitchen-bangalore" />
        <meta property="og:title" content="Premium Modular Kitchen Designers in Bangalore | Denova Creations" />
        <meta
          property="og:description"
          content="Transform your cooking space with premium modular kitchens in Bangalore. Get customized factory-finish layouts, 10-year warranty, and premium soft-close hardware. Book a free consultation!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://denovacreations.com/modular-kitchen-bangalore" />
        <meta property="og:image" content="https://denovacreations.com/images/kitchen1.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Modular Kitchen Designers in Bangalore | Denova Creations" />
        <meta
          name="twitter:description"
          content="Premium modular kitchens in Bangalore with 45-day delivery guarantee. Get customized, factory-finished setups with Blum & Hettich fittings. Book your free consultation now!"
        />
        <meta name="twitter:image" content="https://denovacreations.com/images/kitchen1.webp" />
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Denova Creations",
            image: "https://denovacreations.com/images/kitchen1.webp",
            url: "https://denovacreations.com/modular-kitchen-bangalore",
            telephone: "+91-9164466606",
            address: {
              "@type": "PostalAddress",
              streetAddress: "373/2, Begur Hulimavu Road",
              addressLocality: "Bengaluru",
              addressRegion: "Karnataka",
              postalCode: "560114",
              addressCountry: "IN",
            },
            areaServed: {
              "@type": "Place",
              name: "Bangalore",
            },
            priceRange: "INR 150000+",
          })}
        </script>
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          })}
        </script>
      </Helmet>

      {/* 1. HERO SECTION (SPLIT SCREEN DESKTOP - HIGH CONVERTING) */}
      <section className="relative bg-gradient-to-b from-[#FAF7F2] to-white pt-8 pb-16 lg:py-24 overflow-hidden border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 text-left">
            {/* LUXURY TRUST TAG */}
            <div className="inline-flex items-center gap-2 bg-[#E8D8C4]/20 border border-[#E8D8C4] px-4 py-1.5 rounded-full text-[#0F3D3E] text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bangalore's Premier Kitchen Architects</span>
            </div>

            {/* HIGHLY OPTIMIZED H1 */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight text-stone-900 tracking-tight">
              Premium Modular Kitchen Designers in <span className="text-[#0F3D3E] underline decoration-[#E8D8C4] decoration-4 underline-offset-4">Bangalore</span>
            </h1>

            {/* EMOTIONAL PERSUASIVE SUBTITLE */}
            <p className="mt-6 text-lg md:text-xl font-medium text-stone-700 max-w-2xl leading-relaxed">
              Crafting state-of-the-art culinary spaces optimized for space, beauty, and Indian cooking ergonomics. Custom-built with water-proof marine ply and German-engineered soft-close hardware.
            </p>

            <p className="mt-4 text-base text-stone-600 max-w-xl leading-relaxed">
              Why settle for generic carpenter installations when you can have customized, machine-perfect precision from Bangalore's premium luxury interior brand?
            </p>

            {/* KEY METRIC BADGES ROW */}
            <div className="mt-8 pt-8 border-t border-stone-200/60 grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-[#0F3D3E] font-serif">150+</p>
                <p className="text-[10px] md:text-xs text-stone-500 uppercase tracking-widest font-semibold mt-1">Kitchens Delivered</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-[#0F3D3E] font-serif">4.8★</p>
                <p className="text-[10px] md:text-xs text-stone-500 uppercase tracking-widest font-semibold mt-1">Google Rating</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-[#0F3D3E] font-serif">10 Yr</p>
                <p className="text-[10px] md:text-xs text-stone-500 uppercase tracking-widest font-semibold mt-1">Material Warranty</p>
              </div>
            </div>

            {/* TRUST SIGNALS LIST */}
            <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-stone-500 italic">
              <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-[#0F3D3E]" /> 45 Days Delivery Guarantee</span>
              <span className="flex items-center gap-1">•</span>
              <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-[#0F3D3E]" /> Factory-Finished Precision</span>
              <span className="flex items-center gap-1">•</span>
              <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-[#0F3D3E]" /> Blum & Hettich Hardware</span>
            </div>

            {/* CTAS FOR MOBILE INSTEAD OF SCROLLING DOWN */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 lg:hidden">
              <button
                onClick={scrollToForm}
                className="bg-[#0F3D3E] hover:bg-[#0B2C2D] text-white px-8 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition duration-300 w-full sm:w-auto text-center"
              >
                Get Free Consultation
              </button>
              <a
                href="#gallery-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("gallery-section")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-2 border-[#0F3D3E] text-[#0F3D3E] hover:bg-[#0F3D3E] hover:text-white px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition duration-300 w-full sm:w-auto text-center"
              >
                View Kitchen Designs
              </a>
            </div>
          </div>

          {/* RIGHT SIDE FORM (HERO CONVERSIONS CONSOLE) */}
          <div className="lg:col-span-5 w-full">
            <form
              id="kitchenLeadForm"
              onSubmit={handleSubmit}
              className="bg-white p-6 md:p-8 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-[#E8D8C4]/60 text-stone-800 flex flex-col gap-4 w-full"
            >
              <div>
                <span className="text-[#0F3D3E] text-xs font-bold uppercase tracking-wider">High-Converting Offer</span>
                <h2 className="text-xl md:text-2xl font-bold font-serif leading-tight text-stone-900 mt-0.5">
                  Request Free Design Plan
                </h2>
                <p className="text-xs text-stone-500 mt-1">
                  Get a custom 2D layout planning & transparent estimate from our senior architect.
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
                    className="w-full p-3 border border-stone-200 rounded-xl bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3D3E] focus:border-transparent text-sm transition duration-200 text-stone-800 placeholder-stone-400"
                  />
                  {errors.name && <p className="text-red-600 text-xs mt-1 font-medium">{errors.name}</p>}
                </div>

                {/* PHONE */}
                <div>
                  <label htmlFor="phone" className="sr-only">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="10-Digit Mobile Number"
                    maxLength="10"
                    value={form.phone}
                    required
                    onChange={handleChange}
                    className="w-full p-3 border border-stone-200 rounded-xl bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3D3E] focus:border-transparent text-sm transition duration-200 text-stone-800 placeholder-stone-400"
                  />
                  {errors.phone && <p className="text-red-600 text-xs mt-1 font-medium">{errors.phone}</p>}
                </div>

                {/* EMAIL */}
                <div>
                  <label htmlFor="email" className="sr-only">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    required
                    onChange={handleChange}
                    className="w-full p-3 border border-stone-200 rounded-xl bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3D3E] focus:border-transparent text-sm transition duration-200 text-stone-800 placeholder-stone-400"
                  />
                  {errors.email && <p className="text-red-600 text-xs mt-1 font-medium">{errors.email}</p>}
                </div>

                {/* LOCATION */}
                <div>
                  <label htmlFor="location" className="sr-only">Pincode or Service Area in Bangalore</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="E.g., Whitefield, HSR Layout, 560066"
                    value={form.location}
                    required
                    onChange={handleChange}
                    className="w-full p-3 border border-stone-200 rounded-xl bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3D3E] focus:border-transparent text-sm transition duration-200 text-stone-800 placeholder-stone-400"
                  />
                  {errors.location && <p className="text-red-600 text-xs mt-1 font-medium">{errors.location}</p>}
                </div>

                {/* KITCHEN LAYOUT SELECT */}
                <div>
                  <label htmlFor="kitchenType" className="sr-only">Select Kitchen Layout</label>
                  <select
                    id="kitchenType"
                    name="kitchenType"
                    value={form.kitchenType}
                    required
                    onChange={handleChange}
                    className="w-full p-3 border border-stone-200 rounded-xl bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3D3E] focus:border-transparent text-sm transition duration-200 text-stone-600"
                  >
                    <option value="">Select Kitchen Layout</option>
                    <option value="L-Shape">L-Shape Kitchen</option>
                    <option value="U-Shape">U-Shape Kitchen</option>
                    <option value="Parallel">Parallel Kitchen</option>
                    <option value="Island">Island Kitchen</option>
                    <option value="Straight">Straight Kitchen</option>
                    <option value="Open Concept">Open Layout Kitchen</option>
                    <option value="Contemporary">Contemporary Design</option>
                    <option value="Luxury Custom">Luxury Modular Kitchen</option>
                  </select>
                  {errors.kitchenType && <p className="text-red-600 text-xs mt-1 font-medium">{errors.kitchenType}</p>}
                </div>

                {/* BUDGET RANGE SELECT */}
                <div>
                  <label htmlFor="budget" className="sr-only">Select Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    required
                    onChange={handleChange}
                    className="w-full p-3 border border-stone-200 rounded-xl bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3D3E] focus:border-transparent text-sm transition duration-200 text-stone-600"
                  >
                    <option value="">Select Budget Range</option>
                    <option value="₹1.5L - ₹2.5L">₹1.5 Lakhs - ₹2.5 Lakhs (Basic)</option>
                    <option value="₹2.5L - ₹4.5L">₹2.5 Lakhs - ₹4.5 Lakhs (Premium - Recommended)</option>
                    <option value="₹4.5L+">₹4.5 Lakhs+ (Luxury Bespoke)</option>
                  </select>
                  {errors.budget && <p className="text-red-600 text-xs mt-1 font-medium">{errors.budget}</p>}
                </div>

                {/* CUSTOM MESSAGE */}
                <div>
                  <label htmlFor="message" className="sr-only">Custom Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="2"
                    placeholder="Any specific requests? E.g., parallel layout, Hettich fittings, quartz countertop..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-stone-200 rounded-xl bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3D3E] focus:border-transparent text-sm transition duration-200 text-stone-800 placeholder-stone-400 resize-none"
                  ></textarea>
                </div>
              </div>

              {/* ACTION BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0F3D3E] hover:bg-[#0B2C2D] text-[#E8D8C4] hover:text-white font-bold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-center text-sm uppercase tracking-wider flex items-center justify-center gap-2 mt-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Saving Slot...</span>
                  </>
                ) : (
                  <>
                    <span>Book Free Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 text-xs text-stone-500 mt-2">
                <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-[#0F3D3E]" /> Secure Connection</span>
                <span>•</span>
                <span>No obligation quote</span>
              </div>
            </form>
          </div>

        </div>
      </section>

      {/* 2. TRUST INDICATORS (HORIZONTAL VALUE STREAM) */}
      <section className="bg-white py-12 border-y border-stone-100 shadow-sm relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center divide-x divide-stone-100">
            <div className="px-2">
              <span className="inline-block p-2 bg-[#FAF7F2] rounded-full text-[#0F3D3E] mb-2">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">10-Yr Warranty</h3>
              <p className="text-[10px] text-stone-500 mt-1">Waterproof Marine Ply</p>
            </div>
            
            <div className="px-2 border-l border-stone-100 md:border-l">
              <span className="inline-block p-2 bg-[#FAF7F2] rounded-full text-[#0F3D3E] mb-2">
                <Clock className="w-5 h-5" />
              </span>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">45-Day Delivery</h3>
              <p className="text-[10px] text-stone-500 mt-1">Delayed Compensation</p>
            </div>
            
            <div className="px-2 border-l border-stone-100">
              <span className="inline-block p-2 bg-[#FAF7F2] rounded-full text-[#0F3D3E] mb-2">
                <Award className="w-5 h-5" />
              </span>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">German Quality</h3>
              <p className="text-[10px] text-stone-500 mt-1">Blum & Hettich Hardware</p>
            </div>
            
            <div className="px-2 border-l border-stone-100">
              <span className="inline-block p-2 bg-[#FAF7F2] rounded-full text-[#0F3D3E] mb-2">
                <Compass className="w-5 h-5" />
              </span>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">Vastu Friendly</h3>
              <p className="text-[10px] text-stone-500 mt-1">Fire & Water Planning</p>
            </div>
            
            <div className="px-2 border-l border-stone-100">
              <span className="inline-block p-2 bg-[#FAF7F2] rounded-full text-[#0F3D3E] mb-2">
                <Users className="w-5 h-5" />
              </span>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">100% Customized</h3>
              <p className="text-[10px] text-stone-500 mt-1">Perfect Fit Guarantee</p>
            </div>

            <div className="px-2 border-l border-stone-100">
              <span className="inline-block p-2 bg-[#FAF7F2] rounded-full text-[#0F3D3E] mb-2">
                <DollarSign className="w-5 h-5" />
              </span>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">Zero Hidden Cost</h3>
              <p className="text-[10px] text-stone-500 mt-1">Fixed Price Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MODULAR KITCHEN TYPES SECTION */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#0F3D3E] text-xs font-bold uppercase tracking-widest">Aesthetic Adaptations</span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-stone-900 mt-2">
              Explore Modular Kitchen Layouts
            </h2>
            <p className="text-stone-600 mt-4">
              Select a foundational structural shape. Every layout is mathematically adjusted to optimize your kitchen workspace triangle (Stove, Sink, and Refrigerator).
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kitchenTypes.map((kt, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_20px_45px_rgba(15,61,62,0.05)] transition-all duration-500 hover:-translate-y-1 flex flex-col group"
              >
                <div className="p-3 relative">
                  <SafeImage src={kt.img} alt={kt.title} width={400} height={300} />
                  <span className="absolute top-6 right-6 bg-[#0F3D3E] text-[#E8D8C4] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {kt.val}
                  </span>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-serif text-lg font-bold text-[#0F3D3E] mb-2 group-hover:text-stone-900 transition-colors">
                    {kt.title}
                  </h3>
                  
                  <p className="text-xs text-stone-500 leading-relaxed mb-4 flex-grow">
                    {kt.desc}
                  </p>
                  
                  {/* FEATURES LIST */}
                  <ul className="space-y-1.5 mb-6 border-t border-stone-50 pt-4">
                    {kt.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-stone-600 font-medium">
                        <Check className="w-3.5 h-3.5 text-[#0F3D3E] flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* ACTION CTA BUTTON */}
                  <button
                    onClick={() => handleSelectKitchenType(kt.title)}
                    className="w-full text-center py-2.5 bg-[#FAF7F2] hover:bg-[#0F3D3E] text-[#0F3D3E] hover:text-[#E8D8C4] font-semibold rounded-xl text-xs uppercase tracking-wider transition-all duration-300"
                  >
                    Select & Enquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE DENOVA CREATIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#0F3D3E] text-xs font-bold uppercase tracking-widest">Engineering Excellence</span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-stone-900 mt-2">
              Why Homeowners Choose Denova
            </h2>
            <p className="text-stone-600 mt-4">
              We approach kitchen interiors with the precision of an architectural firm. No gaps, no misalignments, just clean premium luxury.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueProps.map((vp, index) => {
              const IconComp = vp.icon;
              return (
                <div
                  key={index}
                  className="p-6 md:p-8 rounded-3xl bg-[#FAF8F5] border border-stone-100 hover:border-[#E8D8C4] transition-all duration-500 flex items-start gap-4 shadow-sm group hover:bg-[#0F3D3E] hover:text-white"
                >
                  <span className="p-3 rounded-2xl bg-white text-[#0F3D3E] group-hover:bg-[#E8D8C4] group-hover:text-[#0F3D3E] shadow-sm flex-shrink-0 transition-colors duration-500">
                    <IconComp className="w-6 h-6" />
                  </span>
                  
                  <div>
                    <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-[#E8D8C4] mb-2 transition-colors duration-500">
                      {vp.title}
                    </h3>
                    <p className="text-xs text-stone-600 group-hover:text-stone-300 leading-relaxed transition-colors duration-500">
                      {vp.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION (MODERN TIMELINE) */}
      <section className="py-20 bg-stone-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#0F3D3E] text-xs font-bold uppercase tracking-widest">Structured Execution</span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-stone-900 mt-2">
              Our Precise 7-Step Process
            </h2>
            <p className="text-stone-600 mt-4">
              From the initial measurements to the final handover, our structured methodology ensures your kitchen is delivered on-time, matching the approved 3D design renders exactly.
            </p>
          </div>

          {/* TIMELINE DESIGN */}
          <div className="relative pt-8">
            {/* Horizontal timeline line for desktop */}
            <div className="hidden lg:block absolute top-[120px] left-[5%] right-[5%] h-1 bg-[#E8D8C4]/60 z-0"></div>
            
            <div className="grid lg:grid-cols-7 gap-8 relative z-10">
              {processTimeline.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                  {/* Step bubble */}
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[#E8D8C4] flex items-center justify-center shadow-md mb-6 relative group-hover:border-[#0F3D3E] group-hover:bg-[#0F3D3E] transition-all duration-300">
                    <span className="text-[#0F3D3E] font-serif text-lg font-bold group-hover:text-[#E8D8C4] transition-colors duration-300">
                      0{idx + 1}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-serif text-md font-bold text-stone-900 mb-2 group-hover:text-[#0F3D3E] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed max-w-[200px] lg:max-w-none">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. PREMIUM GALLERY SECTION */}
      <section id="gallery-section" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#0F3D3E] text-xs font-bold uppercase tracking-widest">Our Signature Portfolios</span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-stone-900 mt-2">
              Kitchen Transformation Showcase
            </h2>
            <p className="text-stone-600 mt-4">
              Explore actual modular kitchens completed by Denova Creations across major high-end apartments and villas in Bengaluru.
            </p>
          </div>

          {/* MASONRY/MODULAR GRID */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 relative overflow-hidden group rounded-3xl border border-stone-100 shadow-sm">
              <SafeImage src="/images/kitchen1.webp" alt="Luxury Open Modular Kitchen in Sarjapur, Bangalore" width={800} height={500} priority={false} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 text-white">
                <span className="text-[#E8D8C4] text-[10px] font-bold uppercase tracking-widest">Completed Project</span>
                <h3 className="text-xl font-serif font-bold mt-1">Premium Parallel Kitchen</h3>
                <p className="text-xs text-stone-300 mt-1">Sobha Royal Pavilion, Sarjapur Road</p>
              </div>
            </div>

            <div className="relative overflow-hidden group rounded-3xl border border-stone-100 shadow-sm">
              <SafeImage src="/images/kitchen2.webp" alt="Minimalist L-Shape Kitchen HSR Layout" width={400} height={500} priority={false} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 text-white">
                <span className="text-[#E8D8C4] text-[10px] font-bold uppercase tracking-widest">Completed Project</span>
                <h3 className="text-lg font-serif font-bold mt-1">Sleek Acrylic L-Shape Kitchen</h3>
                <p className="text-xs text-stone-300 mt-1">Luxury Apartment, HSR Layout</p>
              </div>
            </div>

            <div className="relative overflow-hidden group rounded-3xl border border-stone-100 shadow-sm">
              <SafeImage src="/images/kitchen3.webp" alt="Contemporary Island Kitchen Whitefield" width={400} height={500} priority={false} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 text-white">
                <span className="text-[#E8D8C4] text-[10px] font-bold uppercase tracking-widest">Completed Project</span>
                <h3 className="text-lg font-serif font-bold mt-1">Luxury Island Kitchen</h3>
                <p className="text-xs text-stone-300 mt-1">Prestige Shantiniketan, Whitefield</p>
              </div>
            </div>

            <div className="md:col-span-2 relative overflow-hidden group rounded-3xl border border-stone-100 shadow-sm">
              <SafeImage src="/images/landingpagehero.webp" alt="Bespoke PU Finish Kitchen Indiranagar" width={800} height={500} priority={false} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 text-white">
                <span className="text-[#E8D8C4] text-[10px] font-bold uppercase tracking-widest">Completed Project</span>
                <h3 className="text-xl font-serif font-bold mt-1">Bespoke Matte PU Open Kitchen</h3>
                <p className="text-xs text-stone-300 mt-1">Bungalow Home, Indiranagar</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={scrollToForm}
              className="bg-[#0F3D3E] hover:bg-[#0B2C2D] text-[#E8D8C4] hover:text-white px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition shadow-md hover:shadow-lg"
            >
              Get Free Consultation for Your Space
            </button>
          </div>
        </div>
      </section>

      {/* 7. MATERIALS & FINISHES SECTION */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#0F3D3E] text-xs font-bold uppercase tracking-widest">Immaculate Selection</span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-stone-900 mt-2">
              Premium Cabinet Finishes & Materials
            </h2>
            <p className="text-stone-600 mt-4">
              We exclusively use Boiling Water Proof (BWP) Marine Grade Plywood and highly stable core boards to resist extreme Bangalore humidity and temperature fluctuations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {premiumFinishes.map((pf, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-3xl border border-stone-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-[#E8D8C4] transition-all duration-500 hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#FAF7F2] text-[#0F3D3E] flex items-center justify-center font-serif font-bold text-sm mb-4">
                  0{index + 1}
                </div>
                
                <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                  {pf.name}
                </h3>
                
                <p className="text-xs text-stone-500 leading-relaxed mb-4">
                  {pf.desc}
                </p>
                
                <div className="bg-[#FAF8F5] p-3.5 rounded-2xl border border-stone-50">
                  <span className="text-[10px] uppercase font-bold text-[#0F3D3E] block tracking-wide">Key Advantage</span>
                  <p className="text-[11px] font-medium text-stone-700 mt-0.5">{pf.resilience}</p>
                </div>
              </div>
            ))}
            
            {/* Callout box for Plywood core */}
            <div className="bg-[#0F3D3E] text-white p-6 rounded-3xl flex flex-col justify-between border border-[#0F3D3E]">
              <div>
                <span className="text-[#E8D8C4] text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                  <Info className="w-3.5 h-3.5" /> High Moisture Core
                </span>
                <h3 className="font-serif text-xl font-bold text-white mt-2 leading-tight">
                  Marine Grade BWP Plywood Base
                </h3>
                <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                  Every kitchen we install features a Boiling Water Proof (BWP) marine plywood core, treated against termites, guaranteeing lifelong structural stability.
                </p>
              </div>
              <button
                onClick={scrollToForm}
                className="w-full text-center py-2 bg-[#E8D8C4] text-[#0F3D3E] hover:bg-white hover:text-stone-900 font-bold rounded-xl text-xs uppercase tracking-wider transition-colors duration-300 mt-6"
              >
                Request Material Catalog
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. COST / PRICING SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#0F3D3E] text-xs font-bold uppercase tracking-widest">Transparent Estimates</span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-stone-900 mt-2">
              Predictable, Direct Kitchen Packages
            </h2>
            <p className="text-stone-600 mt-4">
              Select a package tier corresponding to your requirements. We provide complete itemized transparency with zero post-agreement budget inflation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl overflow-hidden border transition-all duration-500 flex flex-col relative ${
                  plan.popular
                    ? "border-2 border-[#0F3D3E] shadow-[0_15px_40px_rgba(15,61,62,0.08)] scale-105 z-10"
                    : "border-stone-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:border-[#E8D8C4] z-0"
                }`}
              >
                {/* POPULAR BADGE */}
                {plan.popular && (
                  <span className="absolute top-0 right-0 bg-[#0F3D3E] text-[#E8D8C4] text-[10px] font-bold px-4 py-1.5 rounded-bl-3xl uppercase tracking-widest">
                    Most Popular Choice
                  </span>
                )}
                
                <div className="p-8 border-b border-stone-100 bg-[#FAF7F2]">
                  <span className="text-xs uppercase font-bold text-stone-500 tracking-widest">{plan.name}</span>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-4xl font-serif font-bold text-stone-950">{plan.price}</span>
                    <span className="text-xs text-stone-500 font-medium">starting</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed mt-4">
                    {plan.desc}
                  </p>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-[10px] uppercase font-bold text-[#0F3D3E] tracking-widest block mb-4">Included Specifications:</span>
                  <ul className="space-y-3 flex-grow mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-stone-700 leading-tight">
                        <CheckCircle className="w-4 h-4 text-[#0F3D3E] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => handleSelectBudget(plan.price)}
                    className={`w-full py-3.5 rounded-xl text-xs uppercase font-bold tracking-widest transition-all duration-300 ${
                      plan.popular
                        ? "bg-[#0F3D3E] hover:bg-[#0B2C2D] text-white shadow-md hover:shadow-lg"
                        : "bg-[#FAF7F2] hover:bg-[#0F3D3E] text-[#0F3D3E] hover:text-white"
                    }`}
                  >
                    Select & Enquire
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-xs text-stone-500 italic mt-8 max-w-lg mx-auto">
            *Pricing estimates are for baseline linear configuration sizes. Actual custom quotes are calculated by running foot size, layout selections, and internal module upgrades.
          </p>
        </div>
      </section>

      {/* 9. CUSTOMER TESTIMONIALS */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#0F3D3E] text-xs font-bold uppercase tracking-widest">Verified Customer Reviews</span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-stone-900 mt-2">
              Loved by Bangalore Homeowners
            </h2>
            <p className="text-stone-600 mt-4">
              Real reviews from families who upgraded their lifestyles with our custom premium modular kitchens.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl border border-stone-100 shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* GOOGLE RATING STAR DISPLAY */}
                  <div className="flex gap-1 text-amber-500 mb-6">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-xs text-stone-600 leading-relaxed font-medium italic">
                    "{test.quote}"
                  </p>
                </div>
                
                <div className="border-t border-stone-100 pt-6 mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FAF7F2] text-[#0F3D3E] font-serif font-bold flex items-center justify-center text-sm shadow-inner">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">{test.name}</h4>
                    <span className="text-[10px] text-stone-400 font-medium tracking-wide flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#0F3D3E]" /> {test.loc}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. SERVICE AREAS SECTION */}
      <section className="py-16 bg-white border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="text-[#0F3D3E] text-xs font-bold uppercase tracking-widest">Local Reach</span>
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-stone-900 mt-2">
            Serving Major Areas in Bangalore
          </h2>
          <p className="text-xs text-stone-500 max-w-xl mx-auto mt-2 leading-relaxed">
            We provide fast on-site consultation, digital measurement, and seamless installation across premium residential zones in Bengaluru.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 max-w-3xl mx-auto">
            {serviceAreas.map((area, index) => (
              <span
                key={index}
                className="bg-[#FAF7F2] border border-[#E8D8C4]/60 text-[#0F3D3E] px-4 py-2 rounded-2xl text-xs font-semibold shadow-sm hover:border-[#0F3D3E] transition-colors cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQ SECTION (SEO ACCORDION) */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#0F3D3E] text-xs font-bold uppercase tracking-widest">Got Questions?</span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-stone-900 mt-2">
              Frequently Asked Questions
            </h2>
            <p className="text-stone-600 mt-4 text-sm">
              Read transparent answers on cost, specifications, manufacturing, and timelines for planning custom modular kitchens.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-stone-100 overflow-hidden shadow-sm transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none transition-colors duration-200"
                  >
                    <span className="font-serif font-bold text-stone-900 text-sm md:text-base pr-4">
                      {faq.q}
                    </span>
                    <span className={`p-1.5 rounded-full bg-[#FAF7F2] text-[#0F3D3E] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 bg-[#0F3D3E] text-[#E8D8C4]" : ""
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                  
                  {/* EXPANDABLE ANSWER BODY */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[300px] border-t border-stone-50" : "max-h-0"
                    }`}
                  >
                    <div className="p-5 md:p-6 text-xs md:text-sm text-stone-600 leading-relaxed bg-[#FAF8F5]/40">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. LEAD FORM SECTION (EXPANDED OPT-IN PANEL) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#0F3D3E] rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0B2526] to-[#0F3D3E]/40 z-0"></div>
            
            <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 text-left">
                <span className="text-[#E8D8C4] text-[10px] font-bold uppercase tracking-widest">Lead Console</span>
                <h2 className="text-2xl md:text-4xl font-bold font-serif leading-tight mt-2 text-white">
                  Let's Build Your Dream Kitchen
                </h2>
                <p className="text-xs text-stone-300 mt-4 leading-relaxed">
                  Provide your dimensions and requirements. Our senior design specialist will contact you to draft your free photorealistic 3D kitchen design layout.
                </p>
                
                <div className="mt-8 space-y-4 border-t border-white/10 pt-8">
                  <a
                    href="tel:+919164466606"
                    className="flex items-center gap-3 text-xs font-semibold text-[#E8D8C4] hover:text-white transition"
                  >
                    <span className="p-2 bg-white/10 rounded-full">
                      <PhoneCall className="w-4 h-4" />
                    </span>
                    <span>Call Direct: +91 91644 66606</span>
                  </a>
                  
                  <a
                    href="https://wa.me/919164466606?text=Hi,%20I'm%20interested%20in%20modular%20kitchen%20design%20services%20in%20Bangalore."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-xs font-semibold text-[#E8D8C4] hover:text-white transition"
                  >
                    <span className="p-2 bg-white/10 rounded-full">
                      <MessageSquare className="w-4 h-4" />
                    </span>
                    <span>WhatsApp Chat Integration</span>
                  </a>
                </div>
              </div>

              {/* FORM FIELDS ON RIGHT */}
              <div className="md:col-span-7 w-full bg-white text-stone-800 p-6 md:p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="font-serif text-lg font-bold text-[#0F3D3E] mb-4">Design Intake Console</h3>
                
                <div className="flex flex-col gap-3">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={form.name}
                      required
                      onChange={handleChange}
                      className="w-full p-3 border border-stone-200 rounded-xl bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3D3E] text-xs"
                    />
                    {errors.name && <p className="text-red-600 text-[10px] mt-1 font-semibold">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Mobile Number"
                        maxLength="10"
                        value={form.phone}
                        required
                        onChange={handleChange}
                        className="w-full p-3 border border-stone-200 rounded-xl bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3D3E] text-xs"
                      />
                      {errors.phone && <p className="text-red-600 text-[10px] mt-1 font-semibold">{errors.phone}</p>}
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={form.email}
                        required
                        onChange={handleChange}
                        className="w-full p-3 border border-stone-200 rounded-xl bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3D3E] text-xs"
                      />
                      {errors.email && <p className="text-red-600 text-[10px] mt-1 font-semibold">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        name="location"
                        placeholder="Service Area / Pincode"
                        value={form.location}
                        required
                        onChange={handleChange}
                        className="w-full p-3 border border-stone-200 rounded-xl bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3D3E] text-xs"
                      />
                      {errors.location && <p className="text-red-600 text-[10px] mt-1 font-semibold">{errors.location}</p>}
                    </div>

                    <div>
                      <select
                        name="kitchenType"
                        value={form.kitchenType}
                        required
                        onChange={handleChange}
                        className="w-full p-3 border border-stone-200 rounded-xl bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3D3E] text-xs text-stone-600"
                      >
                        <option value="">Layout Type</option>
                        <option value="L-Shape">L-Shape Kitchen</option>
                        <option value="U-Shape">U-Shape Kitchen</option>
                        <option value="Parallel">Parallel Kitchen</option>
                        <option value="Island">Island Kitchen</option>
                        <option value="Straight">Straight Kitchen</option>
                      </select>
                      {errors.kitchenType && <p className="text-red-600 text-[10px] mt-1 font-semibold">{errors.kitchenType}</p>}
                    </div>
                  </div>

                  <div>
                    <select
                      name="budget"
                      value={form.budget}
                      required
                      onChange={handleChange}
                      className="w-full p-3 border border-stone-200 rounded-xl bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3D3E] text-xs text-stone-600"
                    >
                      <option value="">Approx Budget Range</option>
                      <option value="₹1.5L - ₹2.5L">₹1.5 Lakhs - ₹2.5 Lakhs (Basic)</option>
                      <option value="₹2.5L - ₹4.5L">₹2.5 Lakhs - ₹4.5 Lakhs (Premium)</option>
                      <option value="₹4.5L+">₹4.5 Lakhs+ (Luxury Bespoke)</option>
                    </select>
                    {errors.budget && <p className="text-red-600 text-[10px] mt-1 font-semibold">{errors.budget}</p>}
                  </div>

                  <div>
                    <textarea
                      name="message"
                      rows="2"
                      placeholder="Describe your kitchen dimensions or custom requirements..."
                      value={form.message}
                      onChange={handleChange}
                      className="w-full p-3 border border-stone-200 rounded-xl bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#0F3D3E] text-xs resize-none"
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full bg-[#0F3D3E] hover:bg-[#0B2C2D] text-white font-bold py-3.5 rounded-xl shadow transition duration-300 text-xs uppercase tracking-widest flex items-center justify-center gap-2 mt-2"
                  >
                    {loading ? "Saving lead..." : "Get Free design layout plan"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FINAL CTA SECTION (EMOTIONAL DRIVER) */}
      <section className="py-20 bg-stone-50 border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-[#0F3D3E] text-xs font-bold uppercase tracking-widest">Time-Sensitive Package Offer</span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#0F3D3E] mt-2 leading-tight">
            Elevate Your Cooking Experience
          </h2>
          <p className="text-stone-600 max-w-xl mx-auto mt-4 text-sm leading-relaxed">
            Reserve your complimentary design slot this week. Enjoy a **Free Consultation**, a **Free Site Dimension Audit**, and a comprehensive **3D Virtual Kitchen Draft Layout (Worth ₹15,000)** at absolutely no commitment.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToForm}
              className="bg-[#0F3D3E] hover:bg-[#0B2C2D] text-white font-semibold px-8 py-4 rounded-full text-xs uppercase tracking-widest shadow-md hover:shadow-lg transition-all duration-300"
            >
              Get Free Design Draft
            </button>
            
            <a
              href="tel:+919164466606"
              className="bg-white border-2 border-[#0F3D3E] text-[#0F3D3E] hover:bg-[#0F3D3E] hover:text-white font-semibold px-8 py-4 rounded-full text-xs uppercase tracking-widest transition duration-300 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Direct</span>
            </a>
          </div>
        </div>
      </section>

      {/* 14. MOBILE BOTTOM STICKY CTA BAR (HIGH-CONVERTING CONVERSION DRIVER) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-100 shadow-[0_-8px_30px_rgba(0,0,0,0.05)] px-4 py-3 flex items-center justify-between gap-4">
        <div>
          <span className="text-[10px] text-stone-500 font-bold uppercase tracking-widest block">Premium Kitchens</span>
          <span className="text-xs font-bold text-stone-900">Book Free 3D Design</span>
        </div>
        
        <div className="flex gap-2">
          <a
            href="https://wa.me/919164466606?text=Hi,%20I'm%20interested%20in%20modular%20kitchen%20design%20services%20in%20Bangalore."
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#E8D8C4] hover:bg-[#FAF7F2] text-[#0F3D3E] rounded-full transition shadow-sm flex items-center justify-center"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
          </a>
          
          <button
            onClick={scrollToForm}
            className="bg-[#0F3D3E] hover:bg-[#0B2C2D] text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow"
          >
            Book Free Consult
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModularKitchenBangalore;
