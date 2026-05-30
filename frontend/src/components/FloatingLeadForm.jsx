import React, { useState, useEffect } from "react";
import { X, Phone, ArrowRight, Sparkles, MessageSquare, ShieldCheck, Check, Calendar, Layers } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { submitLead } from "../utils/submitLead";

const FloatingLeadForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inactivityTimer, setInactivityTimer] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pincode: "",
    propertyType: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  // Trigger Logic: Scroll, delay, and Exit Intent
  useEffect(() => {
    const wasDismissed = sessionStorage.getItem("leadFormDismissed") === "true";
    if (wasDismissed) return;

    // 1. Scroll trigger (appear after scrolling 200px)
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // 2. Timeout fallback trigger (appear after 8 seconds anyway)
    const delayTimer = setTimeout(() => {
      setIsVisible(true);
    }, 8000);

    // 3. Desktop Exit intent trigger
    const handleMouseLeave = (e) => {
      if (e.clientY < 5) {
        setIsVisible(true);
        setIsExpanded(true);
      }
    };
    
    const isMobile = window.innerWidth < 768;
    if (!isMobile) {
      document.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(delayTimer);
      if (!isMobile) {
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  // Inactivity auto-minimize logic (15 seconds)
  const resetInactivityTimer = () => {
    clearInactivityTimer();
    const timer = setTimeout(() => {
      setIsExpanded(false);
    }, 15000);
    setInactivityTimer(timer);
  };

  const clearInactivityTimer = () => {
    if (inactivityTimer) {
      clearTimeout(inactivityTimer);
    }
  };

  useEffect(() => {
    if (isExpanded) {
      resetInactivityTimer();
    } else {
      clearInactivityTimer();
    }
    return () => clearInactivityTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded]);

  const handleInteraction = () => {
    if (isExpanded) {
      resetInactivityTimer();
    }
  };

  const handleChange = (e) => {
    handleInteraction();
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleMinimize = (e) => {
    e.stopPropagation();
    setIsExpanded(false);
  };

  const handleClosePermanently = (e) => {
    e.stopPropagation();
    setIsVisible(false);
    setIsExpanded(false);
    sessionStorage.setItem("leadFormDismissed", "true");
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full Name is required";
    
    const cleanedPhone = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (cleanedPhone.length !== 10) {
      tempErrors.phone = "Must be a 10-digit number";
    }

    if (!formData.pincode.trim()) {
      tempErrors.pincode = "Pincode is required";
    } else if (formData.pincode.trim().length !== 6) {
      tempErrors.pincode = "Pincode must be exactly 6 digits";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleInteraction();

    if (!validateForm()) return;

    const cleanedPhone = formData.phone.replace(/\D/g, "").slice(0, 10);
    setIsSubmitting(true);

    try {
      const result = await submitLead({
        name: formData.name,
        phone: cleanedPhone,
        email: "",
        propertyType: formData.propertyType || "Not Specified",
        location: formData.pincode || "",
        possession: "",
        requirements: formData.message || "Bespoke floating consultation request",
        source: "Floating Lead Widget",
      });

      if (result.status === "success" || result.result === "success") {
        toast.success("Design consultation request received!");
        
        // GTM & analytics events preservation
        if (window.dataLayer) {
          window.dataLayer.push({
            event: "leadSubmit",
            leadSource: "Global Floating Lead Widget",
            pincode: formData.pincode
          });
        }

        setFormData({
          name: "",
          phone: "",
          pincode: "",
          propertyType: "",
          message: ""
        });

        setIsExpanded(false);
        setIsVisible(false);
        sessionStorage.setItem("leadFormDismissed", "true");
      } else {
        toast.error("Something went wrong. Please check your network and try again.");
      }
    } catch (error) {
      console.error("Floating Lead Submit Error:", error);
      toast.error("Error submitting details. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* 1. MOBILE BOTTOM DRAWER BACKDROP */}
      {isExpanded && (
        <div 
          className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-xs z-[998] transition-opacity duration-300"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* 2. MAIN WIDGET WRAPPER */}
      <div 
        onMouseMove={handleInteraction}
        className="fixed select-none"
        style={{
          zIndex: 9999,
        }}
      >
        {isExpanded ? (
          /* ========================================================================= */
          /* EXPANDED LUXURY CARD DISPLAY                                              */
          /* ========================================================================= */
          <>
            {/* Desktop Card View */}
            <div className="hidden md:block fixed bottom-[145px] right-6 w-[330px] bg-white/95 border border-[#E8D8C4]/40 rounded-2xl shadow-[0_20px_50px_rgba(15,61,62,0.15)] overflow-hidden backdrop-blur-md transition-all duration-500 ease-in-out hover:border-[#E8D8C4]/60 animate-fade-in-up">
              
              {/* Header */}
              <div className="bg-[#FAF7F2] p-4 border-b border-[#E8D8C4]/20 relative text-left">
                <button 
                  onClick={handleMinimize} 
                  className="absolute top-4 right-4 text-stone-400 hover:text-[#0F3D3E] transition-colors"
                  aria-label="Minimize form"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-1 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                  <span className="text-[9px] font-bold text-stone-500 uppercase tracking-widest leading-none">Response within 30 mins</span>
                </div>
                <h4 className="font-serif font-bold text-base text-[#0F3D3E] leading-tight">Start Your Luxury Project</h4>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="p-5 space-y-3.5 text-left">
                
                {/* Name */}
                <div className="space-y-1">
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className={`bg-stone-50/50 border rounded-xl text-xs px-3.5 py-2.5 focus:ring-1 focus:ring-[#0F3D3E] transition-all duration-300 ${
                      errors.name ? "border-red-500" : "border-stone-200"
                    }`}
                  />
                  {errors.name && <span className="text-[10px] text-red-500 font-bold block">{errors.name}</span>}
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className={`bg-stone-50/50 border rounded-xl text-xs px-3.5 py-2.5 focus:ring-1 focus:ring-[#0F3D3E] transition-all duration-300 ${
                      errors.phone ? "border-red-500" : "border-stone-200"
                    }`}
                  />
                  {errors.phone && <span className="text-[10px] text-red-500 font-bold block">{errors.phone}</span>}
                </div>

                {/* Pincode */}
                <div className="space-y-1">
                  <Input
                    name="pincode"
                    value={formData.pincode}
                    maxLength={6}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "");
                      setFormData(prev => ({ ...prev, pincode: val }));
                      if (errors.pincode) setErrors(prev => ({ ...prev, pincode: "" }));
                      handleInteraction();
                    }}
                    placeholder="Pincode"
                    className={`bg-stone-50/50 border rounded-xl text-xs px-3.5 py-2.5 focus:ring-1 focus:ring-[#0F3D3E] transition-all duration-300 ${
                      errors.pincode ? "border-red-500" : "border-stone-200"
                    }`}
                  />
                  {errors.pincode && <span className="text-[10px] text-red-500 font-bold block">{errors.pincode}</span>}
                </div>

                {/* Property Type Dropdown */}
                <div className="relative">
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full bg-stone-50/50 border border-stone-200 rounded-xl text-xs px-3.5 py-2.5 focus:outline-none focus:border-[#0F3D3E] transition-all appearance-none cursor-pointer text-stone-600 font-medium"
                  >
                    <option value="">Select Property Type</option>
                    <option value="2 BHK Apartment">2 BHK Apartment</option>
                    <option value="3 BHK Apartment">3 BHK Apartment</option>
                    <option value="4 BHK Apartment">4 BHK Apartment</option>
                    <option value="Luxury Villa">Luxury Villa</option>
                    <option value="Modular Kitchen Only">Modular Kitchen Only</option>
                  </select>
                  <Layers className="absolute right-3.5 top-3.5 w-3.5 h-3.5 text-stone-400 pointer-events-none" />
                </div>

                {/* Special Request */}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Special Curation Requirements (Optional)"
                  rows={2}
                  className="w-full bg-stone-50/50 border border-stone-200 rounded-xl text-xs px-3.5 py-2.5 focus:outline-none focus:border-[#0F3D3E] transition-all text-stone-600 font-medium resize-none"
                />

                {/* Submit button */}
                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full py-5 rounded-xl bg-[#0F3D3E] hover:bg-[#0A2526] text-[#E8D8C4] hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5"
                >
                  <span>{isSubmitting ? "Submitting..." : "Talk to a Designer"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>

                {/* Trust indications */}
                <div className="border-t border-stone-100 pt-3 flex justify-between text-[9px] font-bold text-stone-400">
                  <span>✔ Free 3D Blueprint</span>
                  <span>✔ 150+ Projects Completed</span>
                </div>

              </form>

            </div>

            {/* Mobile bottom-sheet Drawer View */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#E8D8C4]/40 rounded-t-3xl shadow-2xl z-[999] px-6 pb-6 pt-3 transition-transform duration-500 animate-slide-up">
              
              {/* iOS-Style handle bar */}
              <div 
                className="w-12 h-1 bg-stone-200 rounded-full mx-auto mb-4 cursor-pointer"
                onClick={() => setIsExpanded(false)}
              />

              <div className="flex justify-between items-start mb-4 text-left">
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#0F3D3E]">Free Design Curation</h4>
                  <p className="text-[10px] text-stone-400 font-semibold uppercase tracking-wider flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                    Response within 30 minutes
                  </p>
                </div>
                <button 
                  onClick={handleMinimize}
                  className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 hover:text-stone-600 border border-stone-100"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className={`bg-stone-50/50 border rounded-xl text-xs py-2.5 px-3 focus:ring-1 focus:ring-[#0F3D3E] ${
                        errors.name ? "border-red-500" : "border-stone-200"
                      }`}
                    />
                  </div>
                  <div className="space-y-1">
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      className={`bg-stone-50/50 border rounded-xl text-xs py-2.5 px-3 focus:ring-1 focus:ring-[#0F3D3E] ${
                        errors.phone ? "border-red-500" : "border-stone-200"
                      }`}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Input
                      name="pincode"
                      value={formData.pincode}
                      maxLength={6}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, "");
                        setFormData(prev => ({ ...prev, pincode: val }));
                        if (errors.pincode) setErrors(prev => ({ ...prev, pincode: "" }));
                      }}
                      placeholder="Pincode"
                      className={`bg-stone-50/50 border rounded-xl text-xs py-2.5 px-3 focus:ring-1 focus:ring-[#0F3D3E] ${
                        errors.pincode ? "border-red-500" : "border-stone-200"
                      }`}
                    />
                  </div>
                  <div className="relative">
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full bg-stone-50/50 border border-stone-200 rounded-xl text-xs py-2.5 px-3 focus:outline-none focus:border-[#0F3D3E] appearance-none cursor-pointer text-stone-600 font-medium"
                    >
                      <option value="">Type</option>
                      <option value="2 BHK Apartment">2 BHK</option>
                      <option value="3 BHK Apartment">3 BHK</option>
                      <option value="4 BHK Apartment">4 BHK</option>
                      <option value="Luxury Villa">Villa</option>
                    </select>
                    <Layers className="absolute right-3 top-3 w-3 h-3 text-stone-400 pointer-events-none" />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full py-4.5 rounded-xl bg-[#0F3D3E] hover:bg-[#0A2526] text-[#E8D8C4] hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5"
                >
                  <span>{isSubmitting ? "Submitting..." : "Book Curation Call"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>

                <div className="flex justify-center gap-5 text-[9px] font-bold text-stone-400 text-center mt-1">
                  <span>✔ Free 3D Plan</span>
                  <span>✔ 150+ Projects Completed</span>
                </div>

              </form>

            </div>
          </>
        ) : (
          /* ========================================================================= */
          /* MINIMIZED LUXURY PILL / BUTTON DISPLAY                                    */
          /* ========================================================================= */
          <>
            {/* Desktop Pill Button (Floats elegantly above FloatingCTA WhatsApp/Call) */}
            <div 
              onClick={() => setIsExpanded(true)}
              className="hidden md:flex fixed bottom-[145px] right-6 items-center gap-2.5 px-5 py-3.5 bg-[#0F3D3E] hover:bg-[#0A2526] text-[#E8D8C4] hover:text-white border border-[#E8D8C4]/35 rounded-full shadow-[0_10px_30px_rgba(15,61,62,0.25)] hover:scale-105 active:scale-98 transition-all duration-300 font-serif font-bold text-[10px] uppercase tracking-widest cursor-pointer animate-fade-in relative group"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E8D8C4] group-hover:animate-spin duration-700" />
              <span>Get Free Consultation</span>
              
              <button 
                onClick={handleClosePermanently}
                className="w-3.5 h-3.5 rounded-full bg-white/10 hover:bg-white/20 text-[#E8D8C4] flex items-center justify-center text-[8px] font-sans ml-1 border border-[#E8D8C4]/10 transition-colors"
                title="Dismiss widget"
              >
                ✕
              </button>
            </div>

            {/* Mobile Pill Button (Floats cleanly above the CTAs at bottom-24) */}
            <div 
              onClick={() => setIsExpanded(true)}
              className="md:hidden fixed bottom-24 right-4 flex items-center gap-2 px-4 py-3 bg-[#0F3D3E] text-[#E8D8C4] border border-[#E8D8C4]/30 rounded-full shadow-md active:scale-95 transition-all duration-300 font-serif font-bold text-[9px] uppercase tracking-wider cursor-pointer animate-fade-in"
            >
              <Sparkles className="w-3 h-3 text-[#E8D8C4]" />
              <span>Free Consultation</span>
              <button 
                onClick={handleClosePermanently}
                className="w-3 h-3 rounded-full bg-white/10 text-[#E8D8C4] flex items-center justify-center text-[7px] font-sans ml-1 border border-white/5"
              >
                ✕
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default FloatingLeadForm;