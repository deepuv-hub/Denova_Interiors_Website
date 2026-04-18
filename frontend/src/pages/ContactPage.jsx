import React, { useState } from "react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { submitLead } from "../utils/submitLead";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
<<<<<<< HEAD
=======
    email: "",
>>>>>>> 2be1bca8f7c0ef626d3e2a29459df00c0843aaf3
    phone: "",
    propertyType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

<<<<<<< HEAD
=======
  // ✅ Handle input change
>>>>>>> 2be1bca8f7c0ef626d3e2a29459df00c0843aaf3
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

<<<<<<< HEAD
=======
  // ✅ Handle select change
>>>>>>> 2be1bca8f7c0ef626d3e2a29459df00c0843aaf3
  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, propertyType: value }));
  };

<<<<<<< HEAD
=======
  // ✅ Handle submit (FIXED)
>>>>>>> 2be1bca8f7c0ef626d3e2a29459df00c0843aaf3
  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanedPhone = formData.phone.replace(/\D/g, "");

<<<<<<< HEAD
=======
    // 🔒 Validation
>>>>>>> 2be1bca8f7c0ef626d3e2a29459df00c0843aaf3
    if (!formData.name) {
      alert("Please enter your name");
      return;
    }

    if (cleanedPhone.length !== 10) {
      alert("Enter valid 10-digit phone number");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitLead({
        name: formData.name,
        phone: cleanedPhone,
        location: "Contact Page",
        requirement:
          formData.propertyType + " | " + formData.message,
      });

      if (result.status === "success") {
        window.location.href = "/thank-you?source=contact";
      } else {
        alert("Something went wrong. Please try again.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Error submitting form");
      setIsSubmitting(false);
    }
  };

  return (
<<<<<<< HEAD
    <section className="denova-form-ui">
      <div className="form-grid">

        {/* LEFT SIDE */}
        <div className="form-left">
          <h2 className="left-title">Design Your Dream Space with Denova</h2>

          <p className="left-subtitle">
            Get expert interior consultation for your home in Bangalore.
            We help you plan, design, and execute your dream space without confusion or hidden costs.
          </p>

          <ul className="left-points">
            <li>✔ 150+ Projects Completed</li>
            <li>✔ End-to-End Interior Solutions</li>
            <li>✔ Transparent Pricing</li>
            <li>✔ On-Time Delivery</li>
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

          <h2 className="form-title">Get Free Consultation</h2>
          <p className="form-subtitle">
            Fill the form and our team will contact you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label>Your Name</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full"
                required
              />
            </div>

            <div>
              <label>Phone Number</label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full"
                required
              />
            </div>

            <div>
              <label>Property Type</label>
              <Select
                value={formData.propertyType}
                onValueChange={handleSelectChange}
              >
                <SelectTrigger
                  className="w-full !bg-[#fafafa] !border !border-gray-300 !text-black hover:!bg-[#f5f5f5]"
                >
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="1BHK">1 BHK</SelectItem>
                  <SelectItem value="2BHK">2 BHK</SelectItem>
                  <SelectItem value="3BHK">3 BHK</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label>Your Requirement</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your requirement"
                className="w-full"
              />
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Sending..." : "Send Enquiry"}
            </Button>

            {/* Consent line */}
            <p className="form-consent">
              By submitting, you agree to our{" "}
              <a href="/privacy-policy">Privacy Policy</a>.
            </p>

            {/* Trust line */}
            <p style={{ fontSize: "13px", color: "#888", textAlign: "center" }}>
              ✔ Free consultation | ✔ No obligation | ✔ Transparent pricing
            </p>

          </form>
        </div>

      </div>
    </section>
=======
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">

        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />

        <Input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />

        <Select value={formData.propertyType} onValueChange={handleSelectChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select property type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1BHK">1 BHK</SelectItem>
            <SelectItem value="2BHK">2 BHK</SelectItem>
            <SelectItem value="3BHK">3 BHK</SelectItem>
          </SelectContent>
        </Select>

        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your requirement"
        />

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Enquiry"}
        </Button>

      </form>
    </div>
>>>>>>> 2be1bca8f7c0ef626d3e2a29459df00c0843aaf3
  );
};

export default ContactPage;