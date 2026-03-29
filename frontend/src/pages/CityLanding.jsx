import React from "react";
import { useParams } from "react-router-dom";
import locations from "../data/locations";
import CityLandingTemplate from "../components/CityLandingTemplate";

const CityLanding = () => {
  const { city } = useParams();

  const location = locations.find((loc) => loc.slug === city);

  if (!location) {
    return (
      <div className="p-10 text-center">
        <h2>Page Not Found</h2>
      </div>
    );
  }

  return <CityLandingTemplate location={location} />;
};

export default CityLanding;