import React, { useState, useMemo } from "react";
import { Card, CardContent } from "../components/ui/card";
import { submitLead } from "../utils/submitLead";

const EstimatePage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [area, setArea] = useState(1000);
  const [scope, setScope] = useState("");
  const [budget, setBudget] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ ESTIMATE LOGIC
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

  // ✅ HANDLE SUBMIT (FIXED)
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
    <div>
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* FORM */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Get Consultation</h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-3 border rounded"
                  required
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="p-3 border rounded"
                  required
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#C8A35F] text-black py-3 rounded font-semibold"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>

              </form>
            </div>

            {/* ESTIMATE */}
            <div>
              <Card className="bg-[#1F1F1F] text-white rounded-sm">
                <CardContent className="p-8">

                  {estimate ? (
                    <p className="text-3xl text-[#C8A35F]">
                      {formatCurrency(estimate.totalMin)} - {formatCurrency(estimate.totalMax)}
                    </p>
                  ) : (
                    <p>Fill details to get estimate</p>
                  )}

                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default EstimatePage;