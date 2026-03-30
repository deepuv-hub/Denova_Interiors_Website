import React from "react";
import { useParams } from "react-router-dom";
import locations from "../data/locations";
import CityLandingTemplate from "../components/CityLandingTemplate";

const CityLanding = () => {
  const { city } = useParams();

  const location = locations.find(
    (loc) =>
      loc.slug &&
      city &&
      loc.slug.trim().toLowerCase() === city.trim().toLowerCase()
  );

  // ❌ If location not found
  if (!location) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-semibold text-red-600">
          Location not found: {city}
        </h2>
      </div>
    );
  }

  // ✅ Correct render
  return <CityLandingTemplate location={location} />;
};

export default CityLanding;