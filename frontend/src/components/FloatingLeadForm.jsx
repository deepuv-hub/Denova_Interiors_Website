import React, { useState, useEffect } from "react";
import { X, Phone, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { companyInfo } from "../data/mock";
import { toast } from "sonner";
import { submitLead } from "../utils/submitLead";

const FloatingLeadForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [showCount, setShowCount] = useState(0);

 const [formData, setFormData] = useState({
  name: "",
  phone: "",
  pincode: "",
});

  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Show logic (controlled popup)
  useEffect(() => {
    const storedCount = parseInt(
      sessionStorage.getItem("leadFormShowCount") || "0"
    );
    const wasDismissed =
      sessionStorage.getItem("leadFormDismissed") === "true";

    setShowCount(storedCount);

    if (!wasDismissed && storedCount < 2) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        const newCount = storedCount + 1;
        setShowCount(newCount);
        sessionStorage.setItem(
          "leadFormShowCount",
          newCount.toString()
        );
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem("leadFormDismissed", "true");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ SUBMIT (FIXED + PRODUCTION)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanedPhone = formData.phone.replace(/\D/g, "");

    // 🔒 Validation
    if (!formData.name) {
      toast.error("Please enter your name");
      return;
    }

    if (cleanedPhone.length !== 10) {
      toast.error("Enter valid 10-digit phone number");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitLead({
  name: formData.name,
  phone: cleanedPhone,
  email: "",
  propertyType: "",
  location: formData.pincode || "",
  possession: "",
  source: "Floating Form",
});

      if (result.status === "success") {
        toast.success("Thank you! We will contact you shortly.");

        // reset form
        setFormData({ name: "", phone: "", propertyType: "" });

        // close popup
        setIsVisible(false);
        sessionStorage.setItem("leadFormDismissed", "true");

      } else {
        toast.error("Something went wrong. Try again.");
      }

    } catch (error) {
      console.error("Lead error:", error);
      toast.error("Submission failed");
    }

    setIsSubmitting(false);
  };

  if (!isVisible) return null;
  

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-gray-100">

        {/* CLOSE BUTTON */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        {/* HEADER */}
        <div className="bg-gradient-to-r from-[#1F1F1F] to-[#2a2a2a] text-white p-6 text-center">
          
  <p className="text-xs text-red-400 mb-1">
    Limited slots available this week
  </p>

  <h3 className="text-xl font-bold">
    Get Your <span className="text-[#C8A35F]">Free Design Consultation</span>
  </h3>

  <p className="text-xs text-gray-300 mt-1">
    Our expert will call you within 30 minutes
  </p>
</div>

        {/* FORM */}
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          

  <Input
    name="name"
    value={formData.name}
    onChange={handleChange}
    placeholder="Your Name"
      className="focus:ring-2 focus:ring-[#C8A96A]"

  />

  <Input
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    placeholder="Phone Number"
      className="focus:ring-2 focus:ring-[#C8A96A]"

  />

  <Input
    name="pincode"
    value={formData.pincode}
    onChange={(e) =>
      setFormData({
        ...formData,
        pincode: e.target.value.replace(/\D/g, ""),
      })
    }
    placeholder="Pincode"
    maxLength={6}
      className="focus:ring-2 focus:ring-[#C8A96A]"

  />

  

  {/* TRUST LINE */}
  <p className="text-xs text-center text-gray-500">
    Takes less than 30 seconds • No spam
  </p>

  <Button type="submit" disabled={isSubmitting} className="w-full bg-[#C8A96A] text-white hover:bg-[#b89655] active:scale-95 transition-all">
    {isSubmitting ? "Submitting..." : "Book My Free Design Call"}
    <ArrowRight className="w-4 h-4 ml-2" />
  </Button>

  <p className="text-[11px] text-center text-red-400 mt-2">
  Only 3 slots left for today
</p>

</form>

<div className="text-center pb-4 text-xs text-gray-500">
  ✔ Free consultation • ✔ No obligation • ✔ 30 min callback
</div>
        {/* CALL CTA */}
        <div className="text-center pb-4">
  <a
    href={`tel:${companyInfo.primaryPhone}`}
    className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black"
  >
    📞 Call Now: {companyInfo.primaryPhone}
  </a>
</div>

      </div>
    </div>
  );
};

export default FloatingLeadForm;