import React, { useEffect } from "react";

// AdSense display unit. The adsbygoogle.js loader is in public/index.html.
// Remount (via a changing key) to request a new ad after SPA navigation.
const AdSlot = ({ slot = "4891854628" }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // Ad blockers or a duplicate push can throw; the page should still render.
    }
  }, []);

  return (
    <div className="container-custom py-6">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1542816127514935"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSlot;
