import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

const CategoryPage = () => {
  const { type, category } = useParams();
  const navigate = useNavigate();

  const filtered = projects.filter(
    (p) =>
      p.type === type &&
      p.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="container-custom py-16">
      <h1 className="text-3xl font-bold mb-10 capitalize">
        {category} Designs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="cursor-pointer group"
            onClick={() =>
              navigate(`/portfolio/${type}/${category}/${project.id}`)
            }
          >
            <img
              src={project.images[0]}
              className="w-full h-64 object-cover rounded-md group-hover:scale-105 transition"
            />
            <p className="mt-3 font-semibold">{project.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;