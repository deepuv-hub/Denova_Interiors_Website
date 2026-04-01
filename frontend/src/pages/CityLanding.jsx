import React from "react";
import { useParams } from "react-router-dom";
import locations from "../data/locations";
import CityLandingTemplate from "../components/CityLandingTemplate";
import { Helmet } from "react-helmet";

const CityLanding = () => {
  const { city } = useParams();

  console.log("URL city:", city);
  console.log("Locations:", locations);

  const location = locations.find(
    (loc) => loc.slug.toLowerCase() === city.toLowerCase()
  );

  if (!location) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h2>City Not Found</h2>
        <p>{city}</p>
      </div>
    );
  }
  <Helmet>
  <title>{location.title}</title>
  <meta name="description" content={location.description} />
</Helmet>

  return <CityLandingTemplate location={location} />;
};

export default CityLanding;