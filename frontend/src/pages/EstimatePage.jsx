import React, { useState, useMemo } from "react";
import { submitLead } from "../utils/submitLead";

const EstimatePage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [area, setArea] = useState(1000);
  const [scope, setScope] = useState("");
  const [budget, setBudget] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ ESTIMATE LOGIC (UNCHANGED)
  const estimate = useMemo(() => {
    if (!propertyType || !scope || !budget || area < 100) return null;

    const baseRates = {
      "1bhk": 1200,
      "2bhk": 1300,
      "3bhk": 1400,
      "4bhk": 1500,
      "villa": 1600,
      "commercial": 1400,
    };

    const scopeMultipliers = {
      "kitchen": 0.35,
      "wardrobe": 0.3,
      "modular": 0.6,
      "full": 1,
      "premium": 1.5,
    };

    const budgetMultipliers = {
      "economy": 0.8,
      "standard": 1,
      "premium": 1.3,
      "luxury": 1.6,
    };

    const baseRate = baseRates[propertyType] || 1300;
    const scopeMult = scopeMultipliers[scope] || 1;
    const budgetMult = budgetMultipliers[budget] || 1;

    const sqftRate = Math.round(baseRate * scopeMult * budgetMult);
    const totalMin = Math.round(sqftRate * area * 0.9);
    const totalMax = Math.round(sqftRate * area * 1.1);

    return { sqftRate, totalMin, totalMax };
  }, [propertyType, area, scope, budget]);

  const formatCurrency = (amount) => {
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} Lakhs`;
    }
    return `₹${amount.toLocaleString("en-IN")}`;
  };

  // ✅ SUBMIT (UNCHANGED)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanedPhone = phone.replace(/\D/g, "");

    if (!name) {
      alert("Please enter your name");
      return;
    }

    if (cleanedPhone.length !== 10) {
      alert("Enter valid phone number");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitLead({
        name,
        phone: cleanedPhone,
        location: "Estimate Page",
        requirement: `${propertyType} | ${scope} | ${budget} | ${area} sqft`,
      });

      if (result.status === "success") {
        window.location.href = "/thank-you?source=estimate";
      } else {
        alert("Something went wrong");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting form");
      setIsSubmitting(false);
    }
  };

  return (
    <section className="denova-form-ui">
      <div className="form-grid">

        {/* LEFT SIDE */}
        <div className="form-left">
          <h2 className="left-title">Get Your Interior Cost Estimate</h2>

          <p className="left-subtitle">
            Know the approximate cost for your home interiors based on your requirements.
            Transparent pricing. No hidden costs.
          </p>

          <ul className="left-points">
            <li>✔ Starting from ₹1200/sqft</li>
            <li>✔ Custom design & execution</li>
            <li>✔ Budget-friendly to luxury options</li>
            <li>✔ Free expert consultation</li>
          </ul>

          <div className="cta-buttons">
            <a href="tel:+919164466606" className="cta-call">Call Now</a>
            <a
              href="https://wa.me/919164466606"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-whatsapp"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="form-wrapper">

          <h2 className="form-title">Calculate Your Estimate</h2>
          <p className="form-subtitle">
            Fill details to get instant approximate pricing.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border rounded"
              required
            />

            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-full p-3 border rounded bg-[#fafafa]"
            >
              <option value="">Select Property Type</option>
              <option value="1bhk">1 BHK</option>
              <option value="2bhk">2 BHK</option>
              <option value="3bhk">3 BHK</option>
              <option value="villa">Villa</option>
              <option value="commercial">Commercial</option>
            </select>

            <select
              value={scope}
              onChange={(e) => setScope(e.target.value)}
              className="w-full p-3 border rounded bg-[#fafafa]"
            >
              <option value="">Select Scope</option>
              <option value="kitchen">Kitchen Only</option>
              <option value="wardrobe">Wardrobes</option>
              <option value="modular">Modular Setup</option>
              <option value="full">Full Home</option>
              <option value="premium">Premium Interiors</option>
            </select>

            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full p-3 border rounded bg-[#fafafa]"
            >
              <option value="">Select Budget Range</option>
              <option value="economy">Economy</option>
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
              <option value="luxury">Luxury</option>
            </select>

            <input
              type="number"
              placeholder="Area (sqft)"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full p-3 border rounded"
            />

            {/* ESTIMATE OUTPUT */}
            <div className="estimate-card">
  {estimate ? (
    <div className="estimate-result">
      <p className="estimate-label">Estimated Budget</p>

      <p className="estimate-value">
        {formatCurrency(estimate.totalMin)} - {formatCurrency(estimate.totalMax)}
      </p>

      <p className="estimate-sub">
        Based on {area} sq.ft • {scope} • {budget}
      </p>

      <p className="estimate-note">
        *Final pricing may vary based on design and materials
      </p>
    </div>
  ) : (
    <div className="estimate-placeholder">
      <p>Fill in the details to get your estimated budget</p>
    </div>
  )}
</div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#C8A35F] text-white py-3 rounded"
            >
              {isSubmitting ? "Calculating..." : "Get My Estimate"}
            </button>

            <p className="form-consent">
              By submitting, you agree to our{" "}
              <a href="/privacy-policy">Privacy Policy</a>.
            </p>

          </form>
        </div>

      </div>
    </section>

    
  );
};

export default EstimatePage;