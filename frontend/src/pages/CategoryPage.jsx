import React from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { Helmet } from "react-helmet-async";

const slugify = (value) => value.toLowerCase().replace(/\s+/g, "-");

const CategoryPage = () => {
  const { type, category } = useParams();

  const filtered = projects.filter(
    (p) =>
      p.type === type &&
      slugify(p.category) === category.toLowerCase()
  );
  const categoryName = category.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
  const title = `${categoryName} Interior Designs | Denova Portfolio`;
  const description = `Explore ${categoryName.toLowerCase()} interior design projects by Denova Interiors in Bangalore with photos and execution details.`;
  const pageUrl = `https://denovacreations.com/portfolio/${type}/${category}`;
  const image = filtered[0]?.images?.[0] || "https://denovacreations.com/images/hero2.webp";

  return (
    <div className="container-custom py-16">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      <h1 className="text-3xl font-bold mb-10 capitalize">
        {categoryName} Designs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <Link
            key={project.id}
            className="cursor-pointer group"
            to={`/portfolio/${type}/${category}/${project.id}`}
          >
            <img
              src={project.images[0]}
              alt={`${project.title} ${project.category} interior design`}
              className="w-full h-64 object-cover rounded-md group-hover:scale-105 transition"
            />
            <p className="mt-3 font-semibold">{project.title}</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link to="/portfolio" className="underline text-[#4A4A4A] hover:text-[#C8A35F]">
          Back to Portfolio
        </Link>
        <Link to="/contact" className="underline text-[#4A4A4A] hover:text-[#C8A35F]">
          Discuss a Similar Project
        </Link>
      </div>
    </div>
  );
};

export default CategoryPage;
