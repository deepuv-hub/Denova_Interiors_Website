import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import locations from "../data/locations";
import { projects } from "../data/projects";
import { FULL_HOME_RATE_TEXT, PRICING_DISCLAIMER } from "../data/pricing";
import {
  buildLeadPayload,
  isValidEmail,
  isValidIndianMobile,
  normalizeName,
  postLeadNoCors,
  trackLeadConversion,
  useSubmitLock,
} from "../utils/leadTracking";
import { BUSINESS_REF } from "../data/business";

const PROPERTY_TYPES = ["1 BHK", "2 BHK", "3 BHK", "3+ BHK", "Villa / Independent House", "Other"];

const RELATED_PAGES = [
  { to: "/services", label: "Interior design services" },
  { to: "/modular-kitchen-bangalore", label: "Modular kitchens in Bangalore" },
  { to: "/estimate", label: "Estimate your interior cost" },
  { to: "/projects", label: "Completed projects" },
];

const CityLandingTemplate = ({ location }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
  });

  // Only real projects from projects.js: ones in this area first, otherwise
  // other Bangalore projects (labelled as such, never as local work).
  const areaKey = location.name.toLowerCase();
  const localProjects = projects.filter((p) => p.location.toLowerCase().includes(areaKey));
  const otherProjects = projects
    .filter((p) => !localProjects.includes(p))
    .slice(0, localProjects.length ? 2 : 3);
  const otherAreas = locations.filter((loc) => loc.slug !== location.slug);
  const { submitting: loading, acquire, release } = useSubmitLock();
  const pageUrl = `https://denovacreations.com/interior-designers/${location.slug}`;
  const ogImage = "https://denovacreations.com/images/hero2.webp";
  const seoTitle = `Interior Designers in ${location.name} | Denova Creations`;

  const scrollToLeadForm = () => {
    const leadForm = document.getElementById("lead-form");

    if (leadForm) {
      leadForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  const updateFormData = (field, value) => {
    setFormData((currentFormData) => ({
      ...currentFormData,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }

    if (!normalizeName(formData.name)) {
      alert("Please enter your name");
      return;
    }

    if (!isValidIndianMobile(formData.phone)) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    if (!isValidEmail(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (!formData.propertyType) {
      alert("Please select your property type");
      return;
    }

    if (!acquire()) return;

    const lead = buildLeadPayload({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      propertyType: formData.propertyType,
      location: location.name,
      source: "Landing Page",
    });

    // Save Lead
    try {
      await postLeadNoCors(lead);
    } catch (err) {
      console.error("Lead save failed:", err);
      alert("We could not submit your request. Please check your connection and try again.");
      release();
      return;
    }

    await trackLeadConversion({ leadId: lead.lead_id, leadSource: lead.source });

    // WhatsApp Redirect
    const msg = `Hi, I'm ${lead.name}. My number is ${lead.phone}. I need interior design service in ${location.name}.`;

    window.open(
      `https://wa.me/919591039597?text=${encodeURIComponent(msg)}`,
      "_blank"
    );

    window.location.href = "/thank-you?source=seo";
  };

  return (
    <div className="bg-white text-gray-800">

      {/* SEO */}
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={location.description} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={location.description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={location.description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Service schema (the business itself is described once, on the home page) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Interior Design",
            name: `Interior design in ${location.name}, Bangalore`,
            url: pageUrl,
            provider: BUSINESS_REF,
            areaServed: { "@type": "Place", name: `${location.name}, Bengaluru` },
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: location.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          })}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl font-bold leading-tight">
              Interior Designers in {location.name}, Bangalore
            </h1>

            <p className="mt-4 text-gray-600">
              We specialize in {location.keywords.join(", ")} in {location.name}, delivering customized interiors for modern homes.
            </p>

            <div className="mt-6 flex gap-4">
              <button
                onClick={scrollToLeadForm}
                className="bg-black text-white px-6 py-3 rounded"
              >
                Get Free Consultation
              </button>

              <a
                href="https://wa.me/919591039597"
                className="bg-green-500 text-white px-6 py-3 rounded"
              >
                WhatsApp Now
              </a>
            </div>
          </div>

          {/* FORM */}
          <form
            id="lead-form"
            onSubmit={handleSubmit}
            className="bg-white shadow-xl p-6 rounded flex flex-col gap-4"
          >
            <h2 className="text-lg font-semibold">
              Free Design Consultation in {location.name}
            </h2>

            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => updateFormData("name", e.target.value)}
              required
              className="p-3 border rounded"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => updateFormData("phone", e.target.value)}
              maxLength="10"
              pattern="[6-9][0-9]{9}"
              required
              className="p-3 border rounded"
            />

            <input
              type="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={(e) => updateFormData("email", e.target.value)}
              required
              className="p-3 border rounded"
            />

            <select
              value={formData.propertyType}
              onChange={(e) => updateFormData("propertyType", e.target.value)}
              required
              aria-label="Property type"
              className="p-3 border rounded bg-white"
            >
              <option value="">Property Type</option>
              {PROPERTY_TYPES.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white py-3 rounded"
            >
              {loading ? "Submitting..." : "Get Free Design Plan"}
            </button>
          </form>

        </div>
      </section>

      {/* INTRO */}
      <section className="py-10 max-w-4xl mx-auto">
        <p className="text-gray-600">{location.intro}</p>
      </section>

      {/* SERVICES */}
      <section className="py-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Interior Design Services in {location.name}
        </h2>

        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          {location.services.map((service, index) => (
            <li key={index}>{service} in {location.name}</li>
          ))}
        </ul>
      </section>

      {/* PRICING */}
      <section className="py-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Interior Design Cost in {location.name}
        </h2>

        <p className="text-gray-700 font-medium">
          Full-home interiors in {location.name} are priced at {FULL_HOME_RATE_TEXT}.
        </p>
        <p className="mt-3 text-gray-600">
          {PRICING_DISCLAIMER} Kitchen-only and wardrobe-only work is estimated for your layout.
          For an indicative figure for your home, try our{" "}
          <Link to="/estimate" className="text-blue-600 underline">interior cost calculator</Link>.
        </p>
      </section>

      {/* PROJECTS: real entries from projects.js only */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        {localProjects.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold mb-8 text-center">
              Our Work in {location.name}
            </h2>
            <ProjectGrid items={localProjects} />
          </>
        )}

        <h2 className={`text-2xl font-semibold mb-8 text-center ${localProjects.length ? "mt-14" : ""}`}>
          {localProjects.length ? "More Projects Across Bangalore" : "Recent Projects Across Bangalore"}
        </h2>
        <ProjectGrid items={otherProjects} />

        <div className="mt-8 text-center">
          <Link to="/projects" className="text-blue-600 underline">
            View all completed projects
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>

        {location.faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold">{faq.q}</h3>
            <p className="text-gray-600">{faq.a}</p>
          </div>
        ))}
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-10 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">
          Plan Your Interiors
        </h2>

        <ul className="grid sm:grid-cols-2 gap-2 text-blue-600 underline mb-8">
          {RELATED_PAGES.map((page) => (
            <li key={page.to}><Link to={page.to}>{page.label}</Link></li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mb-4">
          Other Areas We Serve in Bangalore
        </h2>

        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-blue-600 underline">
          {otherAreas.map((area) => (
            <li key={area.slug}>
              <Link to={`/interior-designers/${area.slug}`}>{area.name}</Link>
            </li>
          ))}
        </ul>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 text-center bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">
          Book Free Consultation Today
        </h2>

        <button
          onClick={scrollToLeadForm}
          className="bg-black text-white px-6 py-3 rounded"
        >
          Get Free Consultation
        </button>
      </section>

    </div>
  );
};

const ProjectGrid = ({ items }) => (
  <div className="grid md:grid-cols-3 gap-6">
    {items.map((project) => (
      <Link key={project.id} to={`/projects/${project.slug}`} className="group block text-left">
        <img
          src={project.images[0]}
          alt={`${project.title} in ${project.location}`}
          loading="lazy"
          className="w-full h-56 object-cover rounded"
        />
        <p className="mt-3 font-semibold group-hover:underline">{project.title}</p>
        <p className="text-sm text-gray-600">
          {project.location} · {project.propertyType}
        </p>
      </Link>
    ))}
  </div>
);

export default CityLandingTemplate;
