import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// AdSense units. The adsbygoogle.js loader is NOT in public/index.html any
// more: it is injected here, the first time an ad is shown, so pages without
// publisher content (forms, legal pages, 404, thank-you) never load ad code.
// That is AdSense's "Google-served ads on screens without publisher content"
// policy. Remount (via a changing key) to request a new ad after SPA navigation.
const AD_CLIENT = "ca-pub-1542816127514935";
const AD_SCRIPT_SRC = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`;

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
  // In-article unit, for placing between sections of long-form content
  inArticle: {
    "data-ad-slot": "2576470440",
    "data-ad-format": "fluid",
    "data-ad-layout": "in-article",
    style: { display: "block", textAlign: "center" },
  },
  // Multiplex unit (grid of recommendations), for the end of an article
  multiplex: {
    "data-ad-slot": "5235469553",
    "data-ad-format": "autorelaxed",
  },
};

// Pages that are mainly forms, navigation, legal text or thin templates.
// No ads (and no ad script) are ever loaded on these.
const NO_AD_PATHS = ["/contact", "/estimate", "/privacy-policy", "/terms", "/thank-you", "/testimonials"];
const NO_AD_PREFIXES = ["/lp/", "/interior-designers/"];

// Pages known to have real content. Anything not listed (including unknown
// URLs that render the 404 page) gets no ads.
const AD_PATHS = ["/", "/about", "/services", "/projects", "/portfolio", "/materials", "/process", "/modular-kitchen-bangalore", "/guides"];
// /portfolio/:type/:category pages are noindex single-project lists, so no ads.
const AD_PREFIXES = ["/projects/", "/guides/"];

export const pageAllowsAds = (pathname) => {
  const path = pathname.toLowerCase().replace(/\/+$/, "") || "/";
  if (NO_AD_PATHS.includes(path) || NO_AD_PREFIXES.some((p) => path.startsWith(p))) return false;
  return AD_PATHS.includes(path) || AD_PREFIXES.some((p) => path.startsWith(p));
};

const isPrerendering = () =>
  typeof navigator !== "undefined" && navigator.userAgent === "ReactSnap";

const loadAdScript = () => {
  if (document.querySelector(`script[src^="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]`)) return;
  const script = document.createElement("script");
  script.async = true;
  script.src = AD_SCRIPT_SRC;
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);
};

// NotFoundPage renders a [data-page-not-found] marker. A bad slug under an
// allowed prefix (e.g. /projects/typo) shows that page, so ads are skipped
// whenever the marker is in the DOM. Effects run after the DOM is committed,
// so the check sees the page that is actually on screen.
const isNotFoundPage = () => !!document.querySelector("[data-page-not-found]");

const AdSlot = ({ unit = "display", className = "container-custom py-6" }) => {
  const { pathname } = useLocation();
  const [blocked, setBlocked] = useState(false);
  const enabled = !blocked && !isPrerendering() && pageAllowsAds(pathname);

  useEffect(() => {
    if (!enabled) return;
    if (isNotFoundPage()) {
      setBlocked(true);
      return;
    }
    try {
      loadAdScript();
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // Ad blockers or a duplicate push can throw; the page should still render.
    }
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={AD_CLIENT}
        {...AD_UNITS[unit]}
      />
    </div>
  );
};

export default AdSlot;
