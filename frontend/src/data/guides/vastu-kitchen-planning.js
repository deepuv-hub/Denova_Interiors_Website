import { img } from "./photos";

const guide = {
  slug: "vastu-kitchen-planning",
  title: "Vastu for the Kitchen: Traditional Guidance and Practical Compromises in Apartments",
  description:
    "What traditional Vastu guidance says about the kitchen – direction, hob, sink and storage – and how to apply it sensibly when an apartment's layout is already fixed.",
  category: "Kitchens",
  published: "2026-11-23",
  updated: "2026-11-23",
  image: "/images/kitchen1.webp",
  imageAlt: "Modular kitchen with base and wall cabinets",
  body: [
    { type: "p", text: "Many families in Bangalore ask for a Vastu-friendly kitchen. Vastu Shastra is a traditional system of design principles, and its guidance on the kitchen is among the most widely followed. This guide summarises the commonly cited recommendations and how designers usually apply them in apartments, where the position of the kitchen and its plumbing is already decided by the builder." },
    { type: "p", text: "Vastu is a matter of belief and tradition, and different practitioners interpret it differently. If it matters to your family, consult the person you trust on it; what follows is the general guidance, not a ruling." },

    { type: "h2", text: "Where the kitchen should be" },
    { type: "p", text: "Traditional guidance associates the kitchen with the element of fire and places it in the south-east corner of the home, often called the Agni corner. The north-west is commonly treated as the next-best alternative. North-east kitchens are usually discouraged." },
    { type: "p", text: "In an apartment, you can't move the kitchen. What you can influence is where things go inside it, and that is where most of the practical Vastu work happens." },

    { type: "h2", text: "The hob and the cook's direction" },
    { type: "p", text: "The most commonly followed rule is that the person cooking should face east. In practice that means placing the hob on the counter along the east wall, or, if that is not possible, positioning it so the cook faces east or north. Within the kitchen, the south-east part of the counter is the traditional place for the hob." },
    { type: "tip", text: "Hob position also depends on the gas line and the chimney duct. Decide the hob position with both in mind before the kitchen design is finalised – moving a gas line later is disruptive." },

    { type: "h2", text: "Fire and water apart" },
    { type: "p", text: "Vastu guidance generally keeps the hob (fire) and the sink (water) apart, and avoids placing them directly opposite or right next to each other. This lines up neatly with good kitchen ergonomics: a stretch of counter between the sink and the hob is exactly the preparation space most cooks want. The sink is traditionally placed towards the north-east part of the kitchen." },
    img("kitchen"),

    { type: "h2", text: "Storage, appliances and colours" },
    { type: "ul", items: [
      "Heavy storage – tall units and provision storage – is usually placed along the south or west walls.",
      "The refrigerator is often recommended for the south-west or north-west, and not in the north-east corner.",
      "Electrical appliances such as the microwave and oven are commonly placed in the south-east, near the hob.",
      "Warm, light colours – cream, yellow, orange and light browns – are traditionally preferred; very dark colours and black are often avoided.",
      "A window or exhaust towards the east is considered good, which also helps light and ventilation.",
    ] },

    { type: "h2", text: "When the layout doesn't cooperate" },
    { type: "p", text: "Most apartment kitchens will not satisfy every rule. The plumbing points, the window and the utility door set limits. Designers usually prioritise in this order, because it is what most families care about most:" },
    { type: "ol", items: [
      "The cook's facing direction (east, or north as the alternative).",
      "Keeping the hob and sink apart, with counter space between them.",
      "Hob towards the south-east of the kitchen.",
      "Storage and appliance placement.",
      "Colours and finishes, which are the easiest to adjust.",
    ] },
    { type: "p", text: "Where a rule can't be met, families often prefer a small adjustment over a major change: shifting the hob a little along the counter, changing which way the cook faces, or choosing colours that follow the guidance. These cost little compared with moving plumbing or gas lines." },

    { type: "h2", text: "Other commonly followed points" },
    { type: "ul", items: [
      "The kitchen door: many people prefer it not to face the main entrance directly or the toilet door.",
      "The gas cylinder is usually kept in the south-east, near the hob, which is also practical for a short gas line.",
      "Drinking water, such as the water purifier, is often placed in the north-east or north of the kitchen.",
      "Overhead beams directly above the cooking area are traditionally avoided; a false ceiling can hide a beam if needed.",
      "A clean, uncluttered kitchen is part of nearly every interpretation – good storage planning helps here more than anything else.",
    ] },
    { type: "h2", text: "Good design and Vastu usually agree" },
    { type: "p", text: "Much of the traditional guidance overlaps with practical planning. Morning light from the east, good cross-ventilation, a clear working triangle between the hob, sink and refrigerator, and heavy storage on solid walls all make a kitchen pleasant to use regardless of belief." },
    { type: "p", text: "If you want your kitchen planned with Vastu in mind, tell your designer at the first meeting and share the directions of the kitchen walls (a phone compass is enough). It is much easier to build it into the first layout than to rework a finished design." },
  ],
  faqs: [
    { q: "Which direction should the cook face according to Vastu?", a: "Traditional guidance recommends facing east while cooking, with north as the usual alternative." },
    { q: "Can the sink and hob be next to each other?", a: "Vastu guidance generally keeps the sink (water) and hob (fire) apart. A stretch of counter between them also gives useful preparation space." },
  ],
  related: [
    { label: "Choosing a modular kitchen layout", to: "/guides/modular-kitchen-layouts-guide" },
    { label: "Kitchen countertop materials", to: "/guides/kitchen-countertop-materials" },
  ],
};

export default guide;
