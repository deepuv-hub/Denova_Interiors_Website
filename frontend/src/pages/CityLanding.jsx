import React from "react";
import { useParams } from "react-router-dom";
import locations from "../data/locations";
import CityLandingTemplate from "../components/CityLandingTemplate";

const CityLanding = (props) => {
  const params = useParams();
  const cityKey = props.city || params.city;

  const location = locations.find(
    (loc) => loc.slug.toLowerCase() === (cityKey && cityKey.toLowerCase())
  );

  if (!location) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h1>City Not Found</h1>
        <p>{cityKey}</p>
      </div>
    );
  }

  return <CityLandingTemplate location={location} />;
};

export default CityLanding;
