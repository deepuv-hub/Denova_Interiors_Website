import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { guides } from "../data/guides";
import { SITE_URL } from "../data/business";

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

const GuidesPage = () => {
  const title = "Home Interior Guides for Bangalore | Denova Creations";
  const description =
    "Practical guides to planning home interiors in Bangalore: budgeting by carpet area, choosing plywood grades, modular kitchen layouts and more.";
  const pageUrl = `${SITE_URL}/guides`;

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/images/hero2.webp`} />
      </Helmet>

      <section className="bg-[#0F3D3E] text-white py-16">
        <div className="container-custom max-w-4xl">
          <span className="text-[#E8D8C4] font-bold tracking-widest uppercase text-xs block mb-3">
            Guides
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-serif leading-tight mb-4">
            Home Interior Guides
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed max-w-2xl">
            Straightforward advice from our design team on planning, budgeting and
            choosing materials for home interiors in Bangalore.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container-custom max-w-5xl grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <article key={g.slug} className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
              <Link to={`/guides/${g.slug}`} className="block aspect-[16/10] overflow-hidden bg-stone-100">
                <img src={g.image} alt={g.imageAlt} className="w-full h-full object-cover" loading="lazy" />
              </Link>
              <div className="p-5 flex flex-col flex-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C8A35F] mb-2">
                  {g.category} · {g.readMinutes} min read
                </span>
                <h2 className="text-lg font-bold text-[#0F3D3E] leading-snug mb-2">
                  <Link to={`/guides/${g.slug}`} className="hover:underline">{g.title}</Link>
                </h2>
                <p className="text-sm text-stone-600 leading-relaxed flex-1">{g.description}</p>
                <p className="text-xs text-stone-400 mt-4">{formatDate(g.published)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GuidesPage;
