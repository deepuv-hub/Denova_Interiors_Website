import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";

const ProjectPage = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  // ================= SEO =================
  useEffect(() => {
    if (!project) return;

    const title = `${project.title} | Interior Design in Bangalore | Denova Creations`;
    const description = `${project.title} designed by Denova Creations in Bangalore. ${project.description}`;

    document.title = title;

    // Meta Description
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // Open Graph
    const setMetaTag = (property, content) => {
      let tag = document.querySelector(`meta[property='${property}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMetaTag("og:title", title);
    setMetaTag("og:description", description);
    setMetaTag("og:image", project.images?.[0]);
    setMetaTag("og:type", "website");

    // Canonical
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute(
      "href",
      `https://denovacreations.com/gallery/${project.type}/${project.category}/${project.id}`
    );

    // Schema
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Project",
      name: project.title,
      description: project.description,
      image: project.images,
      areaServed: { "@type": "Place", name: "Bangalore" },
      provider: {
        "@type": "Organization",
        name: "Denova Creations",
        url: "https://denovacreations.com"
      },
      category: project.category,
      url: `https://denovacreations.com/gallery/${project.type}/${project.category}/${project.id}`
    };

    let script = document.querySelector("script[type='application/ld+json']");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(schemaData);

  }, [project]);

  // ================= FALLBACK =================
  if (!project) {
    return (
      <div className="container-custom py-20 text-center">
        <h2 className="text-2xl font-semibold">Project not found</h2>
      </div>
    );
  }

  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section className="py-14 md:py-16 bg-[#FAF8F4] border-b border-[#E5DED3]">
        <div className="container-custom text-center max-w-3xl mx-auto">

          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {project.title}
          </h1>

          <p className="text-[#4A4A4A] text-sm md:text-base">
            {project.location} • {project.propertyType} • {project.budget}
          </p>

          {/* CTA (Correct placement) */}
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            <Link to="/contact">
              <button className="bg-[#C8A35F] px-6 py-3 rounded-md font-semibold">
                Get Free Design Quote
              </button>
            </Link>

            <a href="https://wa.me/919164466606">
              <button className="border px-6 py-3 rounded-md">
                WhatsApp Now
              </button>
            </a>
          </div>

          <p className="text-xs text-[#777] mt-3">
            Limited slots available this month • Book your consultation today
          </p>

        </div>
      </section>

      {/* ================= IMAGE GRID ================= */}
      <section className="py-12">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.images.map((img, index) => (
  <div
    key={index}
    className="w-full aspect-[4/3] overflow-hidden rounded-md"
  >
    <img
      src={img}
      alt={`${project.title} interior design Bangalore`}
      loading={index === 0 ? "eager" : "lazy"}
      fetchpriority={index === 0 ? "high" : "auto"}
      decoding="async"
      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
    />
  </div>
))}
        </div>
      </section>

      {/* ================= DETAILS ================= */}
      <section className="py-10">
        <div className="container-custom max-w-3xl mx-auto text-center">

          <p className="text-base md:text-lg text-[#4A4A4A] mb-6">
            {project.description}
          </p>

          <div className="text-left">
            <h3 className="text-lg font-semibold mb-3">Key Highlights:</h3>
            <ul className="list-disc pl-5 space-y-2 text-[#4A4A4A]">
              {project.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-14 bg-[#1F1F1F]">
        <div className="container-custom text-center max-w-2xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
            Want a Similar Design for Your Home?
          </h2>

          <p className="text-white/70 mb-6">
            Get a personalized interior solution tailored to your space and budget.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <Link to="/contact">
              <Button className="btn-gold px-6 py-3 flex items-center gap-2">
                Get Free Consultation <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>

            <a href="tel:+919164466606">
              <Button className="border border-white text-white px-6 py-3">
                Call Now
              </Button>
            </a>

          </div>

        </div>
      </section>

      {/* ================= FORM ================= */}
      <section className="py-14 bg-[#FAF8F4] border-t">
        <div className="container-custom max-w-xl mx-auto text-center">

          <h2 className="text-2xl font-semibold mb-3">
            Get a Free Interior Consultation
          </h2>

          <p className="text-[#4A4A4A] mb-6">
            Share your details and our design expert will contact you within 24 hours.
          </p>

          <form className="space-y-4">

            <input type="text" placeholder="Your Name" required className="w-full px-4 py-3 border rounded-md" />
            <input type="tel" placeholder="Phone Number" required className="w-full px-4 py-3 border rounded-md" />

            <select className="w-full px-4 py-3 border rounded-md">
              <option>Select Property Type</option>
              <option>2BHK</option>
              <option>3BHK</option>
              <option>Villa</option>
              <option>Commercial</option>
            </select>

            <button className="w-full bg-[#C8A35F] py-3 font-semibold rounded-md">
              Get Free Design Plan
            </button>

            <p className="text-xs text-[#777]">
              Trusted by 150+ homeowners in Bangalore • No spam
            </p>

          </form>

          <a href="https://wa.me/919164466606" className="block mt-4 underline">
            Or Chat on WhatsApp
          </a>

        </div>
      </section>

    </div>
  );
};

export default ProjectPage;