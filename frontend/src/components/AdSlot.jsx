import React, { useEffect } from "react";

// AdSense units. The adsbygoogle.js loader is in public/index.html.
// Remount (via a changing key) to request a new ad after SPA navigation.
const AD_UNITS = {
  // "Ad Display1": responsive display unit
  display: {
    "data-ad-slot": "4891854628",
    "data-ad-format": "auto",
    "data-full-width-responsive": "true",
  },
  // In-feed unit, for placing between items in a list
  inFeed: {
    "data-ad-slot": "4975615107",
    "data-ad-format": "fluid",
    "data-ad-layout-key": "-gf-14+4-fr+rt",
  },
};

const AdSlot = ({ unit = "display", className = "container-custom py-6" }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // Ad blockers or a duplicate push can throw; the page should still render.
    }
  }, []);

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1542816127514935"
        {...AD_UNITS[unit]}
      />
    </div>
  );
};

export default AdSlot;
