import React from "react";
import { useParams } from "react-router-dom";
import locations from "../data/locations";
import CityLandingTemplate from "../components/CityLandingTemplate";
import NotFoundPage from "./NotFoundPage";

const CityLanding = (props) => {
  const params = useParams();
  const cityKey = props.city || params.city;

  const location = locations.find(
    (loc) => loc.slug.toLowerCase() === (cityKey && cityKey.toLowerCase())
  );

  // Unknown areas get the noindex 404 page instead of an indexable empty page.
  if (!location) {
    return <NotFoundPage />;
  }

  return <CityLandingTemplate location={location} />;
};

export default CityLanding;
