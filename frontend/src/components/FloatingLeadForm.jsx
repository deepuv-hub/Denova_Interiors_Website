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
  email: "",
  propertyType: "",
  location: "",
  possession: "",
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
        location: "Floating Form",
        requirement: formData.propertyType || "Quick Enquiry",
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
      <div className="relative bg-white rounded-sm shadow-2xl max-w-md w-full overflow-hidden">

        {/* CLOSE BUTTON */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        {/* HEADER */}
        <div className="bg-[#1F1F1F] text-white p-6">
          <h3 className="text-xl font-bold">
            Get Your <span className="text-[#C8A35F]">Free Quote</span>
          </h3>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">

          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />

          <Input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Submitting..." : "Get Free Consultation"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

        </form>

        {/* CALL CTA */}
        <div className="text-center pb-4">
          <a href={`tel:${companyInfo.primaryPhone}`}>
            <Phone className="inline w-4 h-4 mr-1" />
            {companyInfo.primaryPhone}
          </a>
        </div>

      </div>
    </div>
  );
};

export default FloatingLeadForm;