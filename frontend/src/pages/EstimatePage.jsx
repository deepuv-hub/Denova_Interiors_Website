import React, { useState } from "react";

const EstimatePage = () => {
  const [form, setForm] = useState({
    property: "",
    area: 1000,
    scope: "",
    budget: "",
  });

  const [result, setResult] = useState(null);

  // 💰 Pricing Logic (you can tweak later)
  const calculateEstimate = () => {
    if (!form.property || !form.scope || !form.budget) return;

    let rate = 0;

    // Base pricing logic
    if (form.scope === "Modular Kitchen Only") rate = 800;
    else if (form.scope === "Wardrobes Only") rate = 900;
    else if (form.scope === "Modular Kitchen & Wardrobes") rate = 950;
    else if (form.scope === "Full Home Interior") rate = 1040;
    else if (form.scope === "Premium Full Home + Civil Work") rate = 1400;

    // Budget multiplier
    if (form.budget === "Premium") rate += 200;
    if (form.budget === "Luxury") rate += 400;

    const min = form.area * rate * 0.9;
    const max = form.area * rate * 1.1;

    setResult({
      rate,
      min,
      max,
    });
  };

  const formatPrice = (num) => {
    return (num / 100000).toFixed(2);
  };

  return (
    <div className="p-10 bg-[#f8f8f8] min-h-screen">
      {/* HERO */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Get Your Free <span className="text-yellow-600">Estimate</span>
        </h1>
        <p className="text-gray-600 mt-2">
          Use our calculator to estimate your interior cost.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Budget Calculator</h2>

          {/* Property */}
          <select
            className="w-full p-3 border rounded mb-4"
            value={form.property}
            onChange={(e) =>
              setForm({ ...form, property: e.target.value })
            }
          >
            <option value="">Property Type</option>
            <option value="1 BHK">1 BHK</option>
            <option value="2 BHK">2 BHK</option>
            <option value="3 BHK">3 BHK</option>
            <option value="Villa">Villa</option>
            <option value="Commercial">Commercial</option>
          </select>

          {/* Area */}
          <div className="mb-4">
            <label>Carpet Area (sq.ft)</label>
            <input
              type="number"
              value={form.area}
              className="w-full p-2 border mt-2"
              onChange={(e) =>
                setForm({ ...form, area: Number(e.target.value) })
              }
            />

            <input
              type="range"
              min="100"
              max="5000"
              value={form.area}
              className="w-full mt-2"
              onChange={(e) =>
                setForm({ ...form, area: Number(e.target.value) })
              }
            />
          </div>

          {/* Scope */}
          <select
            className="w-full p-3 border rounded mb-4"
            onChange={(e) =>
              setForm({ ...form, scope: e.target.value })
            }
          >
            <option value="">Select scope</option>
            <option>Modular Kitchen Only</option>
            <option>Wardrobes Only</option>
            <option>Modular Kitchen & Wardrobes</option>
            <option>Full Home Interior</option>
            <option>Premium Full Home + Civil Work</option>
          </select>

          {/* Budget */}
          <select
            className="w-full p-3 border rounded mb-4"
            onChange={(e) =>
              setForm({ ...form, budget: e.target.value })
            }
          >
            <option value="">Select budget range</option>
            <option value="Economy">Economy (Budget-Friendly)</option>
            <option value="Standard">Standard (Value for Money)</option>
            <option value="Premium">Premium (High Quality)</option>
            <option value="Luxury">Luxury (Top-of-the-Line)</option>
          </select>

          {/* BUTTON */}
          <button
            onClick={calculateEstimate}
            className="bg-black text-white px-6 py-3 rounded"
          >
            Calculate Estimate
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-black text-white p-6 rounded-lg">
          {!result ? (
            <div className="text-center opacity-60 mt-20">
              Fill in the details to see your estimate
            </div>
          ) : (
            <>
              <h3 className="text-lg mb-4">Estimated Range</h3>

              <div className="text-3xl font-bold text-yellow-500 mb-4">
                ₹{formatPrice(result.min)} Lakhs - ₹{formatPrice(result.max)} Lakhs
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm opacity-70">Rate per sq.ft</p>
                  <p className="text-lg font-bold">₹{result.rate}</p>
                </div>

                <div>
                  <p className="text-sm opacity-70">Total Area</p>
                  <p className="text-lg font-bold">{form.area} sq.ft</p>
                </div>
              </div>

              <div className="bg-yellow-900/30 p-3 text-sm mb-4 rounded">
                This is an approximate estimate. Final pricing may vary.
              </div>

              {/* CTA */}
              <button
                className="w-full bg-yellow-600 text-black py-3 rounded font-semibold"
                onClick={() =>
                  (window.location.href = "/contact")
                }
              >
                Get Detailed Quote →
              </button>

              <p className="text-center mt-3 text-sm opacity-70">
                Call +91 9164466606
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EstimatePage;
