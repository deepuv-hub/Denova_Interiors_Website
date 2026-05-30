import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { submitLead } from "../utils/submitLead";
import { companyInfo } from "../data/mock";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  PhoneCall,
  MessageSquare,
  Clock,
  Mail,
  ShieldCheck,
  Award,
  Sparkles,
  ChevronDown,
  User,
  Phone,
  DollarSign,
  Calendar,
  Layers,
  Video,
  Check
} from "lucide-react";

// Curated Bangalore Client Testimonials for Social Proof
const contactTestimonials = [
  {
    name: "Arjun & Priyanka Rao",
    location: "Prestige Lakeside Habitat, Varthur",
    quote: "Denova's spatial planning is masterclass. They transformed our 3BHK with exceptional custom wardrobes and modular kitchen edge-banding. The process was transparent, with zero price deviations from the 3D quotation.",
    rating: 5
  },
  {
    name: "Malini Krishnan",
    location: "Sobha Dream Acres, Panathur",
    quote: "Exceptional quality. I was highly skeptical about the delivery timeline, but their factory edge-banding automation allowed them to finish our modular kitchen assembly onsite in exactly 8 days. Highly recommended!",
    rating: 5
  }
];

const ContactPage = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear errors inline as user types
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
      // Smooth scroll back to top of form
      const formEl = document.getElementById("lead-capture-card");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep1()) {
      setStep(1);
      return;
    }

    const cleanedPhone = form.phone.replace(/\D/g, "");
    setIsSubmitting(true);

    try {
      const result = await submitLead({
        name: form.name,
        phone: cleanedPhone,
        email: form.email || "",
        propertyType: form.propertyType || "Not Specified",
        location: form.pincode || "",
        possession: form.possession || "Not Specified",
        budget: form.budget || "Not Specified",
        consultationMode: form.consultationMode || "Not Specified",
        requirements: form.requirements || "Not Specified",
        source: "Website Contact Page",
      });

      if (result.result === "success") {
        // Track lead submission internally or in GA4 if configured
        if (window.dataLayer) {
          window.dataLayer.push({
            event: "leadSubmit",
            leadSource: "Contact Page Form"
          });
        }
        window.location.href = "/thank-you?source=contact";
      } else {
        alert("Something went wrong. Please check your internet connection and try again.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting details. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Speak with Luxury Interior Designers Bangalore | Denova Creations</title>
        <meta
          name="description"
          content="Start your luxury interior design journey with Denova Creations Bangalore. Book a free space planning consultation. Custom modular kitchens, wardrobes & turnkey designs."
        />
        <link rel="canonical" href="https://denovacreations.com/contact" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Denova Creations",
            "image": "https://denovacreations.com/images/hero.webp",
            "telephone": companyInfo.primaryPhone,
            "email": companyInfo.email,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": companyInfo.address,
              "addressLocality": "Bangalore",
              "addressRegion": "KA",
              "postalCode": "560068",
              "addressCountry": "IN"
            },
            "url": "https://denovacreations.com/contact",
            "priceRange": "₹₹₹",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "10:00",
              "closes": "19:30"
            }
          })}
        </script>
      </Helmet>

      <div className="bg-[#FAF8F5] text-stone-850 antialiased min-h-screen">
        
        {/* 1. CINEMATIC LUXURY HERO & SPLIT LEAD CAPTURE FORM */}
        <section className="relative min-h-[92vh] flex items-center bg-[#071F20] pt-24 pb-16 overflow-hidden select-none">
          
          {/* Visual Rich Background */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/contact-bg.jpg"
              alt="Premium luxury interior design backdrop"
              className="w-full h-full object-cover scale-102 blur-[1.5px] opacity-90 transition-transform duration-1000"
            />
            {/* Elegant deep emerald gradient wash and layered textures overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#051819]/95 via-[#051819]/80 to-[#051819]/60"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,24,25,0.7)_100%)]"></div>
          </div>

          <div className="relative z-10 w-full container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* LEFT COLUMN: BRAND STORYTELLING & TRUST */}
              <div className="lg:col-span-6 text-left space-y-6 lg:max-w-xl animate-fade-in-up">
                
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E8D8C4]/15 border border-[#E8D8C4]/20 backdrop-blur-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#E8D8C4]" />
                  <span className="text-[#E8D8C4] font-bold text-[9px] uppercase tracking-widest leading-none">
                    Start Your Luxury Interior Journey
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif tracking-tight leading-tight">
                  Let’s Design Your <span className="text-[#E8D8C4]">Dream Space.</span>
                </h1>

                <p className="text-stone-300 text-xs md:text-sm leading-relaxed">
                  Every exceptional home begins with a conversation. Share your visual requirements, and our master architects will draft a bespoke space plan and itemized structural quote.
                </p>

                {/* Trust Badges Matrix */}
                <div className="grid grid-cols-2 gap-4 border-t border-stone-700/50 pt-6 text-white">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-[#E8D8C4] border border-[#E8D8C4]/25 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold font-serif block">10-Year Warranty</span>
                      <span className="text-[10px] text-stone-400">German precision edge-banding</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-[#E8D8C4] border border-[#E8D8C4]/25 flex items-center justify-center flex-shrink-0">
                      <Award className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold font-serif block">150+ Homes Designed</span>
                      <span className="text-[10px] text-stone-400">100% direct-factory transparency</span>
                    </div>
                  </div>
                </div>

                {/* Instant Quick Direct Connect */}
                <div className="pt-4 flex flex-wrap gap-4 items-center">
                  <a
                    href="tel:+919164466606"
                    className="inline-flex items-center gap-2 text-stone-300 hover:text-white text-xs font-semibold transition-colors duration-300"
                  >
                    <PhoneCall className="w-4 h-4 text-[#E8D8C4]" />
                    <span>Call Studio: +91 91644 66606</span>
                  </a>
                  <span className="hidden sm:inline text-stone-600">|</span>
                  <a
                    href="https://wa.me/919164466606?text=Hi%20Denova%20Creations%2C%20I%20would%20like%20to%20book%20a%20free%20design%20consultation%20for%20my%20home."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-xs font-semibold transition-colors duration-300"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>

              </div>

              {/* RIGHT COLUMN: DYNAMIC STEPPER LEAD CARD */}
              <div className="lg:col-span-6 lg:ml-auto w-full max-w-lg">
                <Card 
                  id="lead-capture-card" 
                  className="border-0 bg-white/95 shadow-[0_30px_60px_rgba(5,24,25,0.25)] rounded-3xl overflow-hidden backdrop-blur-md relative"
                >
                  {/* Top warning strip */}
                  <div className="bg-[#FAF7F2] py-2.5 px-6 border-b border-[#E8D8C4]/20 flex justify-between items-center text-[10px] font-bold text-[#0F3D3E] uppercase tracking-wider">
                    <span className="text-red-600 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping"></span>
                      Limited slots available this week
                    </span>
                    <span>Free Curation Coves</span>
                  </div>

                  <CardContent className="p-8 space-y-6">
                    
                    <div className="text-center space-y-1">
                      <h2 className="text-2xl font-bold font-serif text-[#0F3D3E]">
                        Book Private Consultation
                      </h2>
                      <p className="text-stone-500 text-xs font-medium">
                        Our master design expert will reach out within 30 minutes.
                      </p>
                    </div>

                    {/* Progress Indicator */}
                    <div className="flex justify-center items-center gap-3">
                      <button
                        onClick={() => setStep(1)}
                        className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-all duration-300 ${
                          step === 1
                            ? "bg-[#0F3D3E] text-white shadow-md"
                            : "bg-[#FAF7F2] text-[#0F3D3E] border border-[#E8D8C4]/40"
                        }`}
                      >
                        1
                      </button>
                      <div className="w-12 h-[1px] bg-stone-200"></div>
                      <div
                        className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-all duration-300 ${
                          step === 2
                            ? "bg-[#0F3D3E] text-white shadow-md"
                            : "bg-[#FAF7F2] text-stone-400 border border-stone-100"
                        }`}
                      >
                        2
                      </div>
                    </div>

                    {/* FORM */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      
                      {/* STEP 1: Basic Info */}
                      {step === 1 && (
                        <div className="space-y-4 text-left animate-fadeIn">
                          
                          {/* Name Field */}
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-wider font-bold text-stone-500 block">
                              Full Name <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <User className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                              <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="e.g. Rahul Sharma"
                                className={`w-full pl-10 pr-4 py-3 bg-[#FAF8F5] border rounded-xl text-xs font-semibold focus:outline-none focus:border-[#0F3D3E] transition-all ${
                                  errors.name ? "border-red-500 bg-red-50/20" : "border-stone-200/60"
                                }`}
                              />
                            </div>
                            {errors.name && (
                              <span className="text-[10px] text-red-500 font-bold block mt-0.5">{errors.name}</span>
                            )}
                          </div>

                          {/* Phone Field */}
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-wider font-bold text-stone-500 block">
                              Phone Number <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                              <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="e.g. 9876543210"
                                className={`w-full pl-10 pr-4 py-3 bg-[#FAF8F5] border rounded-xl text-xs font-semibold focus:outline-none focus:border-[#0F3D3E] transition-all ${
                                  errors.phone ? "border-red-500 bg-red-50/20" : "border-stone-200/60"
                                }`}
                              />
                            </div>
                            {errors.phone && (
                              <span className="text-[10px] text-red-500 font-bold block mt-0.5">{errors.phone}</span>
                            )}
                          </div>

                          {/* Email Field */}
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-wider font-bold text-stone-500 block">
                              Email Address
                            </label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                              <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="e.g. rahul@gmail.com"
                                className="w-full pl-10 pr-4 py-3 bg-[#FAF8F5] border border-stone-200/60 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#0F3D3E] transition-all"
                              />
                            </div>
                          </div>

                          {/* Pincode Field */}
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-wider font-bold text-stone-500 block">
                              Bangalore Pincode <span className="text-red-500">*</span>
                            </label>
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
                                placeholder="e.g. 560068"
                                className={`w-full pl-10 pr-4 py-3 bg-[#FAF8F5] border rounded-xl text-xs font-semibold focus:outline-none focus:border-[#0F3D3E] transition-all ${
                                  errors.pincode ? "border-red-500 bg-red-50/20" : "border-stone-200/60"
                                }`}
                              />
                            </div>
                            {errors.pincode && (
                              <span className="text-[10px] text-red-500 font-bold block mt-0.5">{errors.pincode}</span>
                            )}
                          </div>

                          {/* Next Button */}
                          <Button
                            type="button"
                            onClick={handleNextStep}
                            className="w-full py-6 rounded-xl bg-[#0F3D3E] hover:bg-[#0A2526] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 mt-4 hover:scale-[1.01]"
                          >
                            <span>Configure Project Options</span>
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </div>
                      )}

                      {/* STEP 2: Advanced Curation */}
                      {step === 2 && (
                        <div className="space-y-4 text-left animate-fadeIn">
                          
                          {/* Property Type Dropdown */}
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-wider font-bold text-stone-500 block">
                              Property Layout
                            </label>
                            <div className="relative">
                              <Layers className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                              <select
                                name="propertyType"
                                value={form.propertyType}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 bg-[#FAF8F5] border border-stone-200/60 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#0F3D3E] transition-all appearance-none cursor-pointer"
                              >
                                <option value="">Select Property Type</option>
                                <option value="1 BHK">1 BHK Apartment</option>
                                <option value="2 BHK">2 BHK Apartment</option>
                                <option value="3 BHK">3 BHK Apartment</option>
                                <option value="4 BHK">4 BHK Apartment</option>
                                <option value="Villa">Luxury Villa</option>
                                <option value="Office / Commercial">Commercial Space</option>
                              </select>
                              <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-stone-400 pointer-events-none" />
                            </div>
                          </div>

                          {/* Budget Range Dropdown */}
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-wider font-bold text-stone-500 block">
                              Estimated Budget Range
                            </label>
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

                          {/* Possession Timeline Dropdown */}
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-wider font-bold text-stone-500 block">
                              Possession Status
                            </label>
                            <div className="relative">
                              <Calendar className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                              <select
                                name="possession"
                                value={form.possession}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 bg-[#FAF8F5] border border-stone-200/60 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#0F3D3E] transition-all appearance-none cursor-pointer"
                              >
                                <option value="">Select Possession Timeline</option>
                                <option value="Immediate">Immediate / Already Possessed</option>
                                <option value="0-3 Months">Within 0-3 Months</option>
                                <option value="3-6 Months">Within 3-6 Months</option>
                                <option value="6+ Months">6+ Months / Planning Stage</option>
                              </select>
                              <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-stone-400 pointer-events-none" />
                            </div>
                          </div>

                          {/* Preferred Consultation Mode */}
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-wider font-bold text-stone-500 block">
                              Preferred Discussion Mode
                            </label>
                            <div className="relative">
                              <Video className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                              <select
                                name="consultationMode"
                                value={form.consultationMode}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 bg-[#FAF8F5] border border-stone-200/60 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#0F3D3E] transition-all appearance-none cursor-pointer"
                              >
                                <option value="">Select Curation Venue</option>
                                <option value="Studio Meeting">Private Bangalore Studio Meeting</option>
                                <option value="On-Site Consultation">Civil Site Survey Consultation</option>
                                <option value="Virtual Video call">Virtual Online Video Consultation</option>
                              </select>
                              <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-stone-400 pointer-events-none" />
                            </div>
                          </div>

                          {/* Requirements Textarea */}
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-wider font-bold text-stone-500 block">
                              Additional Spaces & Requirements (Optional)
                            </label>
                            <textarea
                              name="requirements"
                              value={form.requirements}
                              onChange={handleChange}
                              rows={2}
                              placeholder="e.g. Modular kitchen, custom TV console in walnut flutes..."
                              className="w-full p-3 bg-[#FAF8F5] border border-stone-200/60 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#0F3D3E] transition-all"
                            />
                          </div>

                          {/* Submit Actions */}
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
                              disabled={isSubmitting}
                              className="w-2/3 py-6 rounded-xl bg-[#0F3D3E] hover:bg-[#0A2526] text-[#E8D8C4] hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01]"
                            >
                              <span>{isSubmitting ? "Submitting..." : "Schedule Design Meeting"}</span>
                              <Check className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      )}

                    </form>

                    <p className="text-[10px] text-center text-stone-400 leading-normal">
                      By submitting details, you agree to our <a href="/privacy-policy" className="underline text-stone-500 hover:text-[#0F3D3E]">Privacy Policy</a>.
                    </p>

                    {/* Form Trust Strip */}
                    <div className="border-t border-stone-100 pt-4 flex justify-center gap-5 text-[10px] font-semibold text-stone-400">
                      <span className="flex items-center gap-1">✔ Free consultation</span>
                      <span className="flex items-center gap-1">✔ No obligation</span>
                      <span className="flex items-center gap-1">✔ 30 min callback</span>
                    </div>

                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </section>

        {/* 2. DEDICATED CONSULTATION BENEFITS SECTION */}
        <section className="py-20 md:py-24 bg-white border-b border-stone-150 select-none">
          <div className="container-custom">
            
            <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
              <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                Why Book Today?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0F3D3E] tracking-tight">
                The Free Design Curation Experience
              </h2>
              <p className="text-stone-500 text-xs md:text-sm">
                Discover the immediate professional assets and estimates we coordinate for homeowners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
              
              {/* Box 1 */}
              <div className="p-8 bg-[#FAF8F5] rounded-3xl border border-stone-100/60 space-y-4 hover:border-[#E8D8C4] transition-all duration-300">
                <div className="w-10 h-10 bg-white text-[#0F3D3E] border border-stone-100 flex items-center justify-center rounded-xl shadow-xs">
                  <Layers className="w-5 h-5 text-[#E8D8C4]" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#0F3D3E]">Space Planning Blueprint</h3>
                <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
                  Our designers draft a detailed AutoCAD walking zoning outline to guarantee ergonomic flow, optimal clearance zones, and smart layout maps.
                </p>
              </div>

              {/* Box 2 */}
              <div className="p-8 bg-[#FAF8F5] rounded-3xl border border-stone-100/60 space-y-4 hover:border-[#E8D8C4] transition-all duration-300">
                <div className="w-10 h-10 bg-white text-[#0F3D3E] border border-stone-100 flex items-center justify-center rounded-xl shadow-xs">
                  <Sparkles className="w-5 h-5 text-[#E8D8C4]" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#0F3D3E]">Studio Materials Curation</h3>
                <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
                  Touch and compare authentic 100% BWP Marine plywood cores, visual gloss acrylics, matte laminates, and premium fittings in our Bangalore studio.
                </p>
              </div>

              {/* Box 3 */}
              <div className="p-8 bg-[#FAF8F5] rounded-3xl border border-stone-100/60 space-y-4 hover:border-[#E8D8C4] transition-all duration-300">
                <div className="w-10 h-10 bg-white text-[#0F3D3E] border border-stone-100 flex items-center justify-center rounded-xl shadow-xs">
                  <Award className="w-5 h-5 text-[#E8D8C4]" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#0F3D3E]">Itemized Zero-Deviation Costing</h3>
                <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
                  Receive a fully transparent modular structural pricing log with exact itemized square feet breakups. Absolute clarity with zero hidden surprises.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* 3. COORDINATES & MAP LOCATION GRID */}
        <section className="py-20 md:py-24 bg-[#FAF8F5]">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch max-w-6xl mx-auto">
              
              {/* Coordinates Info Panel */}
              <div className="lg:col-span-5 text-left flex flex-col justify-between space-y-8">
                
                <div className="space-y-4">
                  <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                    Our Location
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0F3D3E] tracking-tight leading-tight">
                    Visit Our Design Studio coordinates.
                  </h2>
                  <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
                    Drop by our central studio or connect with us directly. We are fully equipped to demonstrate edge-band mechanisms, custom carcasses, and surface curations.
                  </p>
                </div>

                {/* Coordinate Blocks */}
                <div className="space-y-5 text-xs">
                  
                  {/* Address block */}
                  <div className="flex gap-4">
                    <div className="w-9 h-9 bg-white text-[#0F3D3E] border border-stone-100 flex items-center justify-center rounded-xl flex-shrink-0 shadow-xs">
                      <MapPin className="w-4.5 h-4.5 text-[#E8D8C4]" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[#0F3D3E] font-serif font-bold text-sm block">Design Studio Address</span>
                      <p className="text-stone-500 leading-relaxed font-semibold">
                        {companyInfo.address}
                      </p>
                      <a 
                        href="https://maps.google.com/?q=Denova+Creations+Bangalore" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:text-stone-900 font-bold block underline mt-1"
                      >
                        Get Maps Navigation Directions →
                      </a>
                    </div>
                  </div>

                  {/* Operational block */}
                  <div className="flex gap-4 border-t border-stone-200/50 pt-4">
                    <div className="w-9 h-9 bg-white text-[#0F3D3E] border border-stone-100 flex items-center justify-center rounded-xl flex-shrink-0 shadow-xs">
                      <Clock className="w-4.5 h-4.5 text-[#E8D8C4]" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[#0F3D3E] font-serif font-bold text-sm block">Studio Curation Hours</span>
                      <p className="text-stone-500 leading-normal font-semibold">
                        Monday – Sunday: 10:00 AM – 7:30 PM (All Days Open)
                      </p>
                    </div>
                  </div>

                  {/* Connect block */}
                  <div className="flex gap-4 border-t border-stone-200/50 pt-4">
                    <div className="w-9 h-9 bg-white text-[#0F3D3E] border border-stone-100 flex items-center justify-center rounded-xl flex-shrink-0 shadow-xs">
                      <PhoneCall className="w-4.5 h-4.5 text-[#E8D8C4]" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[#0F3D3E] font-serif font-bold text-sm block">Direct Connect Support</span>
                      <p className="text-stone-500 font-semibold">
                        Mobile: <a href={`tel:${companyInfo.primaryPhone.replace(/\s+/g, '')}`} className="hover:underline">{companyInfo.primaryPhone}</a>
                      </p>
                      <p className="text-stone-500 font-semibold">
                        Email: <a href={`mailto:${companyInfo.email}`} className="hover:underline">{companyInfo.email}</a>
                      </p>
                    </div>
                  </div>

                </div>

              </div>

              {/* Map Canvas Frame */}
              <div className="lg:col-span-7 w-full h-[400px] lg:h-auto rounded-3xl overflow-hidden shadow-xl border-4 border-white relative min-h-[300px]">
                {/* Premium embedded interactive map */}
                <iframe
                  title="Denova Creations Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8570258169123!2d77.6253457!3d12.9168902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab50352ef29d0f%3A0xe54e3d5b035aef2f!2sDenova%20Creations!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 absolute inset-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>
          </div>
        </section>

        {/* 4. PREMIUM SOCIAL PROOF SECTION */}
        <section className="py-20 bg-white border-t border-stone-150 select-none">
          <div className="container-custom">
            
            <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
              <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
                Verified Reviews
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0F3D3E] tracking-tight">
                Loved by Bangalore Homeowners
              </h2>
              <p className="text-stone-500 text-xs md:text-sm">
                Join 150+ families who experienced the Denova modular edge-banding difference.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
              {contactTestimonials.map((t, idx) => (
                <div key={idx} className="p-8 bg-[#FAF8F5] rounded-3xl border border-stone-100 relative space-y-4">
                  {/* Stars */}
                  <div className="flex gap-0.5 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>

                  <p className="text-stone-600 text-xs md:text-sm leading-relaxed italic">
                    "{t.quote}"
                  </p>

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <span className="font-serif font-bold text-stone-850 text-xs block">{t.name}</span>
                      <span className="text-[10px] text-stone-400">{t.location}</span>
                    </div>
                    <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full uppercase tracking-wider">Google Verified</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 5. DUSTLESS FINAL CONVERSION CTA STRIP */}
        <section className="py-20 md:py-24 bg-gradient-to-b from-[#0F3D3E] to-[#0A2526] text-white relative z-10 select-none">
          <div className="container-custom text-center max-w-3xl mx-auto space-y-6">
            <span className="text-[#E8D8C4] font-bold tracking-widest uppercase text-xs block">
              Bespoke Spaces Made Easy
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight tracking-tight">
              Let’s Create a Space That Reflects Your Lifestyle.
            </h2>
            
            <p className="text-stone-300 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
              Plan your direct-factory turnkey modular home interior with certified structural engineers today.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a href="#lead-capture-card">
                <Button className="bg-[#E8D8C4] hover:bg-white text-[#0F3D3E] font-bold px-8 py-6 rounded-lg text-xs md:text-sm uppercase tracking-wider shadow-lg transition-transform duration-300 hover:scale-[1.02] flex items-center gap-2">
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <a 
                href="https://wa.me/919164466606?text=Hi%20Denova%20Creations%2C%20I%20would%20like%20to%20book%20a%20free%20design%20consultation%20for%20my%20home."
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-transparent hover:bg-white/10 border border-white/20 text-white font-semibold px-8 py-6 rounded-lg text-xs md:text-sm uppercase tracking-wider transition-all duration-300">
                  WhatsApp Us
                </Button>
              </a>
              <Link to="/projects">
                <Button className="bg-transparent hover:bg-white/10 border border-white/20 text-white font-semibold px-8 py-6 rounded-lg text-xs md:text-sm uppercase tracking-wider transition-all duration-300">
                  Explore Projects
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default ContactPage;