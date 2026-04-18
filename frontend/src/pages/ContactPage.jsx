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
    email: "",
    phone: "",
    propertyType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle select change
  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, propertyType: value }));
  };

  // ✅ Handle submit (FIXED)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanedPhone = formData.phone.replace(/\D/g, "");

    // 🔒 Validation
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
  );
};

export default ContactPage;