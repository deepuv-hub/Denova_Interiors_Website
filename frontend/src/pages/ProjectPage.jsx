import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { projects } from "../data/projects";
import NotFoundPage from "./NotFoundPage";

const ProjectPage = () => {
  const { projectId } = useParams();

  const project = projects.find((p) => p.id === projectId);

  if (project) {
    return <Navigate to={`/projects/${project.slug}`} replace />;
  }

  return <NotFoundPage />;
};

export default ProjectPage;
