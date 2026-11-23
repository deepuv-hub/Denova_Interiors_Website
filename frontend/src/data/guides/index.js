// Long-form guides (the site's blog), one file per guide. Each renders at
// /guides/:slug via GuideArticlePage, is listed on /guides, and must be added
// to public/sitemap.xml. Keep prices consistent with data/pricing.js and do
// not state business facts (warranties, timelines, brands) the owner has not
// confirmed. Body blocks: { type: "p" | "h2" | "h3" | "ul" | "ol" | "tip" | "img" }.
import carpetArea from "./carpet-area-interior-budget-bangalore";
import plywood from "./plywood-grades-mr-bwr-bwp-explained";
import kitchenLayouts from "./modular-kitchen-layouts-guide";
import falseCeiling from "./false-ceiling-guide";
import wardrobeFinishes from "./wardrobe-finishes-guide";
import countertops from "./kitchen-countertop-materials";
import vastuKitchen from "./vastu-kitchen-planning";
import newFlat from "./new-flat-interiors-checklist";
import small2bhk from "./small-2bhk-space-saving-ideas";
import lighting from "./home-lighting-plan";
import modularVsCarpenter from "./modular-vs-carpenter-furniture";
import renovation from "./renovating-older-home-bangalore";
import kitchenHardware from "./kitchen-hardware-guide";

const wordCount = (g) =>
  g.body.map((b) => b.text || (b.items || []).join(" ") || "").join(" ").split(/\s+/).length;

// Reading time is worked out from the text (about 200 words a minute).
const withReadTime = (g) => ({ ...g, readMinutes: Math.max(2, Math.round(wordCount(g) / 200)) });

export const guides = [
  carpetArea,
  newFlat,
  kitchenLayouts,
  countertops,
  kitchenHardware,
  vastuKitchen,
  plywood,
  modularVsCarpenter,
  wardrobeFinishes,
  falseCeiling,
  lighting,
  small2bhk,
  renovation,
].map(withReadTime);

export const getGuide = (slug) => guides.find((g) => g.slug === slug);
