import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";

const pageMeta = {
  title: "Modular Kitchen Bangalore | Premium Kitchen Interiors",
  description:
    "Premium modular kitchen design in Bangalore with customized layouts, modern finishes, and complete execution by Denova Creations.",
  url: "https://denovacreations.com/modular-kitchen-bangalore",
  image: "https://denovacreations.com/images/kitchen1.webp",
};

const kitchenSolutions = [
  {
    title: "L Shape Kitchens",
    description:
      "Functional layouts with efficient corner utilization and modern finishes.",
  },
  {
    title: "U Shape Kitchens",
    description:
      "Spacious kitchen planning designed for larger families and premium homes.",
  },
  {
    title: "Parallel Kitchens",
    description:
      "Smart layouts for compact apartments with optimized storage.",
  },
];

const ModularKitchenBangalore = () => {
  const leadFormRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setFormData({ name: "", phone: "", email: "" });
    alert("Thank you! We will contact you shortly.");
  };

  const scrollToForm = () => {
    leadFormRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Helmet>
        <title>{pageMeta.title}</title>
        <meta name="description" content={pageMeta.description} />
        <link rel="canonical" href={pageMeta.url} />
        <meta property="og:title" content="Modular Kitchen Bangalore | Denova Creations" />
        <meta property="og:description" content="Custom modular kitchen interiors in Bangalore designed for functionality, aesthetics, and smart storage." />
        <meta property="og:url" content={pageMeta.url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageMeta.image} />
      </Helmet>

      <section className="relative min-h-[85vh] flex items-center bg-black">
        <img
          src="/images/kitchen1.webp"
          alt="Modular Kitchen Bangalore"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          loading="eager"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 grid gap-10 items-center md:grid-cols-2 text-white">
          <div>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Premium Modular Kitchen Designs in Bangalore
            </h1>
            <p className="mt-6 text-lg text-gray-200">
              Smart storage, elegant finishes, and custom kitchen interiors designed to elevate everyday cooking.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={scrollToForm}
                className="rounded-lg bg-[#C8A96A] px-6 py-3 font-semibold text-black transition hover:opacity-90"
              >
                Get Free Consultation
              </button>
              <a
                href="https://wa.me/919164466606"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-black"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          <form
            ref={leadFormRef}
            onSubmit={handleSubmit}
            className="rounded-xl bg-white p-6 shadow-2xl text-black flex flex-col gap-4"
          >
            <h2 className="text-2xl font-bold">Book Free Kitchen Consultation</h2>

            <label className="flex flex-col gap-2 text-sm font-medium">
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="rounded-lg border p-3 text-sm outline-none focus:border-black"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium">
              Phone
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number"
                className="rounded-lg border p-3 text-sm outline-none focus:border-black"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium">
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                className="rounded-lg border p-3 text-sm outline-none focus:border-black"
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-lg bg-[#C8A96A] py-3 font-semibold transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Get Free Estimate"}
            </button>

            <p className="text-center text-xs text-gray-500">
              Trusted by homeowners across Bangalore.
            </p>
          </form>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold mb-12">Our Modular Kitchen Solutions</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {kitchenSolutions.map((item) => (
              <div key={item.title} className="rounded-xl bg-[#F8F5F0] p-6">
                <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] py-20 text-white text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-4xl font-bold">Ready to Build Your Dream Kitchen?</h2>
          <p className="mt-4 text-gray-300">
            Speak with our modular kitchen experts and get a tailored plan for your home.
          </p>
          <button
            type="button"
            onClick={scrollToForm}
            className="mt-8 rounded-lg bg-[#C8A96A] px-8 py-3 font-semibold text-black transition hover:opacity-90"
          >
            Get Free Consultation
          </button>
        </div>
      </section>
    </>
  );
};


export default ModularKitchenBangalore;
