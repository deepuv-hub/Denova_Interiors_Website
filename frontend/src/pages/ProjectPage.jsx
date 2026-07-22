import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectPage = () => {
  const { projectId } = useParams();

  const project = projects.find((p) => p.id === projectId);

  if (project) {
    return <Navigate to={`/projects/${project.slug}`} replace />;
  }

  return (
    <div className="container-custom py-20 text-center">
      <h2 className="text-2xl font-semibold">Project not found</h2>
      <Link to="/portfolio" className="underline mt-4 inline-block">
        Back to Portfolio
      </Link>
    </div>
  );
};

export default ProjectPage;