import React, { useState } from "react";
import { submitLead } from "../utils/submitLead";

const ContactPage = () => {

  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    pincode: "",
    possession: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const goNext = () => {
    if (!form.name || !form.phone || !form.pincode) {
      alert("Please fill required fields");
      return;
    }
    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanedPhone = form.phone.replace(/\D/g, "");

    if (cleanedPhone.length !== 10) {
      alert("Enter valid 10-digit phone number");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitLead({
        name: form.name,
        phone: cleanedPhone,
        email: form.email || "",
        propertyType: form.propertyType || "",
        location: form.pincode || "",
        possession: form.possession || "",
        source: "Website",
      });

      if (result.result === "success") {
        window.location.href = "/thank-you?source=contact";
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
    <section
  className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/contact-bg.jpg')",
      
  }}
>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center w-full">

        {/* LEFT */}
        <div className="max-w-lg">
  <h2 className="text-4xl font-bold mb-4 leading-tight text-white">
    Get Premium Home Interiors in Bangalore — Starting ₹3.5L
  </h2>

  <p className="mb-6 text-gray-100">
    Get expert interior consultation for your home in Bangalore.
  </p>
  <p className="mb-6 text-gray-100">
  Free 3D Design • Transparent Pricing • Delivered On Time
</p>

  <div className="space-y-2 text-sm text-gray-100">
    <p>✔ 150+ Homes Designed</p>
    <p>✔ End-to-End Interior Solutions</p>
    <p>✔ Transparent Pricing</p>
    <p>✔ On-Time Delivery</p>
  </div>

  {/* CTA Buttons */}
  <div className="mt-6 flex gap-3">
    <a
      href="tel:+919164466606"
      className="bg-[#C8A96A] text-white px-5 py-3 rounded-lg"
    >
      Call Now
    </a>

    <a
      href="https://wa.me/919164466606"
      target="_blank"
      className="bg-green-500 text-white px-5 py-3 rounded-lg"
    >
      WhatsApp
    </a>
  </div>
</div>


        {/* RIGHT FORM */}
        <div className="max-w-md mx-auto md:ml-auto bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
          <p className="text-xs text-red-500 text-center mb-2">
  Limited slots available this week
</p>

<div className="mt-6 md:mt-0"></div>
                <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center mb-4">
                 <h3 className="text-xl font-semibold">
                   Get Free Design Consultation
                   </h3>
                   <p className="text-sm text-gray-500">
                    Our expert will call you within 30 minutes
                      </p>
                      </div>

               < div className="flex justify-center items-center gap-3 mb-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 1 ? "bg-[#C8A96A] text-white" : "bg-gray-300"}`}>
                 1
                 </div>
                  <div className="w-10 h-[2px] bg-gray-300"></div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 2 ? "bg-[#C8A96A] text-white" : "bg-gray-300"}`}>
                    2
                  </div>
                </div>
            

            {step === 1 && (
              <>
                <input name="name" placeholder="Full Name" onChange={handleChange} className="p-3 border rounded-lg w-full" />

                <input name="email" type="email" placeholder="Email" onChange={handleChange} className="p-3 border rounded-lg w-full" />

                <input name="phone" type="tel" placeholder="Phone Number" onChange={handleChange} className="p-3 border rounded-lg w-full" />

                <input
                  name="pincode"
                  placeholder="Pincode"
                  maxLength={6}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      pincode: e.target.value.replace(/\D/g, ""),
                    })
                  }
                  className="p-3 border rounded-lg w-full"
                />

                <button
                  type="button"
                  onClick={goNext}
                  className="bg-[#C8A96A] text-white py-3 rounded-lg w-full"
                >
                  Check Design Options →
                </button>
                <p className="text-xs text-center text-gray-500 mt-2">
                 Takes less than 30 seconds • No spam
                  </p>
              </>
            )}

            {step === 2 && (
              <>
                <select name="propertyType" onChange={handleChange} className="p-3 border rounded-lg w-full">
                  <option value="">Property Type</option>
                  <option value="1 BHK">1 BHK</option>
                  <option value="2 BHK">2 BHK</option>
                  <option value="3 BHK">3 BHK</option>
                  <option value="Villa">Villa</option>
                </select>

                <select name="possession" onChange={handleChange} className="p-3 border rounded-lg w-full">
                  <option value="">Possession</option>
                  <option value="Immediate">Immediate</option>
                  <option value="0-3 Months">0-3 Months</option>
                  <option value="3-6 Months">3-6 Months</option>
                  <option value="6+ Months">6+ Months</option>
                </select>

 

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="bg-gray-300 py-3 rounded-lg w-1/2"
                  >
                    Back
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#C8A96A] text-white py-3 rounded-lg w-1/2"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>

                  
                  
                </div>
                
              </>
            )}

          </form>

          <p className="text-sm text-center mt-4">
            By submitting, you agree to our <a href="/privacy-policy">Privacy Policy</a>.
          </p>
          {/* ✅ TRUST LINE (ADD THIS HERE) */}
    <div className="flex justify-center gap-4 text-xs text-gray-500 mt-3">
  <span>✔ Free consultation</span>
  <span>✔ No obligation</span>
  <span>✔ 30 min callback</span>
</div>

        </div>

      </div>

    </section>
  );
};

export default ContactPage;