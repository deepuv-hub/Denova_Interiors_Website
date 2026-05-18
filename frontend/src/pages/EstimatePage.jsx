import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Home,
  Building2,
} from "lucide-react";

const EstimatePage = () => {
  const [form, setForm] = useState({
    property: "",
    area: 1000,
    scope: "",
    budget: "",
  });

  const [result, setResult] = useState(null);

  // Estimate Logic
  const calculateEstimate = () => {
    if (!form.property || !form.scope || !form.budget) return;

    let rate = 0;

    if (form.scope === "Modular Kitchen Only") rate = 800;
    else if (form.scope === "Wardrobes Only") rate = 900;
    else if (form.scope === "Modular Kitchen & Wardrobes") rate = 950;
    else if (form.scope === "Full Home Interior") rate = 1040;
    else if (form.scope === "Premium Full Home + Civil Work") rate = 1400;

    if (form.budget === "Premium") rate += 200;
    if (form.budget === "Luxury") rate += 400;

    // Property multiplier
    if (form.property === "Villa") rate += 150;
    if (form.property === "Commercial") rate += 250;

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
    <>
      <Helmet>
        <title>
          Interior Cost Calculator Bangalore | Denova Interiors
        </title>

        <meta
          name="description"
          content="Estimate your home interior cost in Bangalore with Denova Interiors. Calculate modular kitchen, wardrobe and full home interior pricing instantly."
        />

        <link
          rel="canonical"
          href="https://denovacreations.com/estimate"
        />

        <meta
          property="og:title"
          content="Interior Cost Calculator Bangalore | Denova Interiors"
        />

        <meta
          property="og:description"
          content="Get instant interior cost estimates for modular kitchens, wardrobes and complete home interiors in Bangalore."
        />

        <meta
          property="og:image"
          content="https://denovacreations.com/images/hero2.webp"
        />

        <meta
          property="og:url"
          content="https://denovacreations.com/estimate"
        />

        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Interior Cost Calculator Bangalore | Denova Interiors"
        />
        <meta
          name="twitter:description"
          content="Get instant interior cost estimates for modular kitchens, wardrobes and complete home interiors in Bangalore."
        />
        <meta
          name="twitter:image"
          content="https://denovacreations.com/images/hero2.webp"
        />
      </Helmet>

      <div className="bg-[#F5F5F5] min-h-screen">

        {/* HERO */}
        <section className="relative overflow-hidden bg-[#1F1F1F]">
          <div className="absolute inset-0">
            <img
              src="/images/hero2.webp"
              alt="Luxury Interior Design"
              className="w-full h-full object-cover opacity-20"
            />
          </div>

          <div className="relative z-10 container-custom py-20">

            <div className="grid lg:grid-cols-2 gap-14 items-center">

              {/* LEFT SIDE */}
              <div>

                <div className="flex items-center gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#C8A35F] text-[#C8A35F]"
                    />
                  ))}
                  <span className="text-white/70 text-sm">
                    4.9 Rating • 150+ Projects
                  </span>
                </div>

                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Interior Cost Calculator
                  <span className="text-[#C8A35F]">
                    {" "}for Bangalore Homes
                  </span>
                </h1>

                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  Estimate your home interior budget instantly for modular kitchens,
                  wardrobes, false ceilings and complete home interiors.
                </p>

                <div className="space-y-4 mb-8">

                  <div className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-[#C8A35F]" />
                    150+ Successfully Delivered Projects
                  </div>

                  <div className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-[#C8A35F]" />
                    Transparent Pricing Structure
                  </div>

                  <div className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-[#C8A35F]" />
                    Bengaluru-Wide Interior Services
                  </div>

                  <div className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-[#C8A35F]" />
                    Free Design Consultation Included
                  </div>

                </div>

                <div className="flex flex-wrap gap-4">

                  <Link to="/projects">
                    <button className="bg-[#C8A35F] hover:bg-[#b8924d] transition-colors px-8 py-4 rounded-sm text-[#1F1F1F] font-semibold flex items-center gap-2">
                      View Projects
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>

                  <Link to="/contact">
                    <button className="border border-white/20 hover:bg-white hover:text-[#1F1F1F] transition-colors px-8 py-4 rounded-sm text-white font-semibold">
                      Contact Us
                    </button>
                  </Link>

                </div>
              </div>

              {/* RIGHT SIDE */}
              <div>

                <div className="bg-white rounded-sm shadow-2xl p-8">

                  <h2
                    className="text-2xl font-bold text-[#1F1F1F] mb-2"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Calculate Your Estimate
                  </h2>

                  <p className="text-[#777777] mb-8">
                    Fill in your project details to get an approximate pricing range.
                  </p>

                  {/* PROPERTY */}
                  <select
                    className="w-full p-4 border border-gray-200 rounded-sm mb-4 focus:outline-none focus:border-[#C8A35F]"
                    value={form.property}
                    onChange={(e) =>
                      setForm({ ...form, property: e.target.value })
                    }
                  >
                    <option value="">Select Property Type</option>
                    <option value="1 BHK">1 BHK Apartment</option>
                    <option value="2 BHK">2 BHK Apartment</option>
                    <option value="3 BHK">3 BHK Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Commercial">Commercial Space</option>
                  </select>

                  {/* AREA */}
                  <div className="mb-6">

                    <div className="flex justify-between mb-2">
                      <label className="font-medium text-[#1F1F1F]">
                        Carpet Area
                      </label>

                      <span className="text-[#C8A35F] font-semibold">
                        {form.area} sq.ft
                      </span>
                    </div>

                    <input
                      type="range"
                      min="500"
                      max="5000"
                      step="50"
                      value={form.area}
                      className="w-full accent-[#C8A35F]"
                      onChange={(e) =>
                        setForm({
                          ...form,
                          area: Number(e.target.value),
                        })
                      }
                    />
                  </div>

                  {/* SCOPE */}
                  <select
                    className="w-full p-4 border border-gray-200 rounded-sm mb-4 focus:outline-none focus:border-[#C8A35F]"
                    value={form.scope}
                    onChange={(e) =>
                      setForm({ ...form, scope: e.target.value })
                    }
                  >
                    <option value="">Select Interior Scope</option>
                    <option>Modular Kitchen Only</option>
                    <option>Wardrobes Only</option>
                    <option>Modular Kitchen & Wardrobes</option>
                    <option>Full Home Interior</option>
                    <option>Premium Full Home + Civil Work</option>
                  </select>

                  {/* BUDGET */}
                  <select
                    className="w-full p-4 border border-gray-200 rounded-sm mb-6 focus:outline-none focus:border-[#C8A35F]"
                    value={form.budget}
                    onChange={(e) =>
                      setForm({ ...form, budget: e.target.value })
                    }
                  >
                    <option value="">Select Budget Preference</option>
                    <option value="Economy">Economy</option>
                    <option value="Standard">Standard</option>
                    <option value="Premium">Premium</option>
                    <option value="Luxury">Luxury</option>
                  </select>

                  {/* BUTTON */}
                  <button
                    onClick={calculateEstimate}
                    className="w-full bg-[#1F1F1F] hover:bg-[#333] transition-colors text-white py-4 rounded-sm font-semibold mb-8"
                  >
                    Calculate Estimate
                  </button>

                  {/* RESULT */}
                  {!result ? (

                    <div className="bg-[#F5F5F5] rounded-sm p-6 text-center text-[#777777]">
                      Your estimated pricing range will appear here.
                    </div>

                  ) : (

                    <div className="bg-[#1F1F1F] text-white rounded-sm p-8">

                      <p className="text-white/70 mb-2">
                        Estimated Interior Budget
                      </p>

                      <h3 className="text-3xl md:text-4xl font-bold text-[#C8A35F] mb-6">
                        ₹{formatPrice(result.min)}L - ₹{formatPrice(result.max)}L
                      </h3>

                      <div className="grid grid-cols-2 gap-6 mb-6">

                        <div>
                          <p className="text-white/60 text-sm mb-1">
                            Rate / sq.ft
                          </p>

                          <p className="font-semibold text-lg">
                            ₹{result.rate}
                          </p>
                        </div>

                        <div>
                          <p className="text-white/60 text-sm mb-1">
                            Total Area
                          </p>

                          <p className="font-semibold text-lg">
                            {form.area} sq.ft
                          </p>
                        </div>

                      </div>

                      <div className="bg-white/10 rounded-sm p-4 text-sm text-white/70 mb-6">
                        Final pricing may vary based on materials,
                        finishes, customizations and on-site conditions.
                      </div>

                      <Link to="/contact">
                        <button className="w-full bg-[#C8A35F] hover:bg-[#b8924d] transition-colors text-[#1F1F1F] py-4 rounded-sm font-semibold">
                          Get Detailed Quote →
                        </button>
                      </Link>

                    </div>

                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="bg-white py-8 border-t border-gray-100">

          <div className="container-custom">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

              <div>
                <div className="flex justify-center mb-3">
                  <Star className="w-7 h-7 text-[#C8A35F]" />
                </div>

                <h4 className="text-2xl font-bold text-[#1F1F1F]">
                  4.9/5
                </h4>

                <p className="text-[#777777] text-sm">
                  Google Rating
                </p>
              </div>

              <div>
                <div className="flex justify-center mb-3">
                  <Home className="w-7 h-7 text-[#C8A35F]" />
                </div>

                <h4 className="text-2xl font-bold text-[#1F1F1F]">
                  150+
                </h4>

                <p className="text-[#777777] text-sm">
                  Projects Delivered
                </p>
              </div>

              <div>
                <div className="flex justify-center mb-3">
                  <Building2 className="w-7 h-7 text-[#C8A35F]" />
                </div>

                <h4 className="text-2xl font-bold text-[#1F1F1F]">
                  Bengaluru
                </h4>

                <p className="text-[#777777] text-sm">
                  All Areas Covered
                </p>
              </div>

              <div>
                <div className="flex justify-center mb-3">
                  <CheckCircle2 className="w-7 h-7 text-[#C8A35F]" />
                </div>

                <h4 className="text-2xl font-bold text-[#1F1F1F]">
                  45-60 Days
                </h4>

                <p className="text-[#777777] text-sm">
                  Average Delivery
                </p>
              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default EstimatePage;
