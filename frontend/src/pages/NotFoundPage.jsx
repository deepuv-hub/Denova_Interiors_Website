import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NotFoundPage = () => {
  return (
    <div className="container-custom py-20 text-center">
      <Helmet>
        <title>Page Not Found | Denova Creations</title>
        <meta name="description" content="The page you are looking for could not be found." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
      <p className="text-[#4A4A4A] mb-6">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className="underline text-[#4A4A4A] hover:text-[#C8A35F]">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
