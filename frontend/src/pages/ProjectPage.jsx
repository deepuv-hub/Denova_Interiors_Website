import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const slugify = (value) =>
  value.toLowerCase().replace(/\s+/g, "-");

const ProjectPage = () => {
  const { projectId } = useParams();

  const project = projects.find(
    (p) => p.id === projectId
  );

  // ================= FALLBACK =================
  if (!project) {
    return (
      <div className="container-custom py-20 text-center">
        <h2 className="text-2xl font-semibold">
          Project not found
        </h2>

        <Link
          to="/portfolio"
          className="underline mt-4 inline-block"
        >
          Back to Portfolio
        </Link>
      </div>
    );
  }

  // ================= SAFE FALLBACKS =================
  const safeDescription =
    project.description ||
    "Premium interior design project by Denova Creations in Bangalore featuring elegant layouts, functional planning, and modern aesthetics.";

  const safeHighlights =
    project.highlights || [
      "Premium interior finishes",
      "Functional space planning",
      "Modern design execution",
    ];

  const safeBudget =
    project.budget || "Custom Pricing";

  // ================= SEO =================
  const title = `${project.title} | Denova Creations`;

  const description = `${project.title} by Denova Creations in Bangalore featuring ${project.category} interior design solutions, premium materials, elegant finishes, and turnkey execution.`;

  const pageUrl = `https://denovacreations.com/portfolio/${project.type}/${slugify(project.category)}/${project.id}`;

  const toAbsoluteUrl = (path) =>
    path?.startsWith("http")
      ? path
      : `https://denovacreations.com${path}`;

  const image =
    toAbsoluteUrl(project.images?.[0]) ||
    "https://denovacreations.com/images/hero2.webp";

  // ================= RELATED PROJECTS =================
  const relatedProjects = projects
    .filter(
      (p) =>
        p.category === project.category &&
        p.id !== project.id
    )
    .slice(0, 3);

  // ================= SCHEMA =================
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description,
    image: project.images?.map(toAbsoluteUrl),
    provider: {
      "@type": "Organization",
      name: "Denova Creations",
      url: "https://denovacreations.com",
    },
    url: pageUrl,
  };

  return (
    <div className="bg-white">

      {/* ================= SEO ================= */}
      <Helmet>

        <title>{title}</title>

        <meta
          name="description"
          content={description}
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href={pageUrl}
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content={title}
        />

        <meta
          property="og:description"
          content={description}
        />

        <meta
          property="og:url"
          content={pageUrl}
        />

        <meta
          property="og:type"
          content="article"
        />

        <meta
          property="og:image"
          content={image}
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content={title}
        />

        <meta
          name="twitter:description"
          content={description}
        />

        <meta
          name="twitter:image"
          content={image}
        />

        {/* Schema */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>

      </Helmet>

      {/* ================= HERO ================= */}
      <section className="py-14 md:py-16 bg-[#FAF8F4] border-b border-[#E5DED3]">

        <div className="container-custom text-center max-w-3xl mx-auto">

          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {project.title}
          </h1>

          <p className="text-[#4A4A4A] text-sm md:text-base">
            {project.location} • {project.propertyType} • {safeBudget}
          </p>

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
            Trusted by homeowners across Bangalore
          </p>

        </div>

      </section>

      {/* ================= IMAGE GRID ================= */}
      <section className="py-12">

        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-6">

          {project.images?.map((img, index) => (

            <div
              key={index}
              className="w-full aspect-[4/3] overflow-hidden rounded-md"
            >

              <img
                src={img}
                alt={`${project.title} interior design Bangalore`}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />

            </div>

          ))}

        </div>

      </section>

      {/* ================= DETAILS ================= */}
      <section className="py-10">

        <div className="container-custom max-w-3xl mx-auto text-center">

          <p className="text-base md:text-lg text-[#4A4A4A] mb-6 leading-8">
            {safeDescription}
          </p>

          <div className="text-left">

            <h2 className="text-lg font-semibold mb-3">
              Key Highlights
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-[#4A4A4A]">

              {safeHighlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}

            </ul>

          </div>

        </div>

      </section>

      {/* ================= RELATED PROJECTS ================= */}
      {relatedProjects.length > 0 && (

        <section className="py-14 bg-[#FAF8F4]">

          <div className="container-custom">

            <h2 className="text-3xl font-semibold text-center mb-10">
              Related Interior Projects
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              {relatedProjects.map((item) => (

                <Link
                  key={item.id}
                  to={`/portfolio/${item.type}/${slugify(item.category)}/${item.id}`}
                  className="border rounded-md overflow-hidden hover:shadow-lg transition"
                >

                  <img
                    src={item.images?.[0]}
                    alt={item.title}
                    className="w-full h-56 object-cover"
                    loading="lazy"
                  />

                  <div className="p-4">

                    <h3 className="font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-2">
                      {item.location}
                    </p>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        </section>

      )}
      <section className="py-14 bg-[#FAF8F4]">

  <div className="container-custom text-center">

    <h2 className="text-2xl font-semibold mb-6">
      Explore More Interior Categories
    </h2>

    <div className="flex flex-wrap justify-center gap-5">

      <Link to="/portfolio/residential/kitchen">
        Kitchen Interiors
      </Link>

      <Link to="/portfolio/residential/bedroom">
        Bedroom Interiors
      </Link>

      <Link to="/portfolio/residential/living-room">
        Living Room Interiors
      </Link>

      <Link to="/portfolio/residential/wardrobe">
        Wardrobe Designs
      </Link>

      <Link to="/portfolio/residential/ceiling">
        Ceiling Designs
      </Link>

      <Link to="/portfolio/commercial/office">
        Office Interiors
      </Link>

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
            Get personalized interior solutions tailored to your home and budget.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <Link to="/contact">

              <Button className="btn-gold px-6 py-3 flex items-center gap-2">
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>

            </Link>

            <a href="tel:+919164011181">

              <Button className="border border-white text-white px-6 py-3">
                Call Now
              </Button>

            </a>

          </div>

        </div>

      </section>

      {/* ================= INTERNAL LINKS ================= */}
      <section className="py-12 border-t">

        <div className="container-custom text-center">

          <h2 className="text-2xl font-semibold mb-6">
            Explore More Interior Solutions
          </h2>

          <div className="flex flex-wrap justify-center gap-5">

            <Link
              to="/portfolio"
              className="underline"
            >
              View Portfolio
            </Link>

            <Link
              to="/services"
              className="underline"
            >
              Interior Design Services
            </Link>

            <Link
              to="/estimate"
              className="underline"
            >
              Interior Cost Estimate
            </Link>

            <Link
              to="/contact"
              className="underline"
            >
              Contact Denova Creations
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default ProjectPage;