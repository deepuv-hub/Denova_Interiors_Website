import { img } from "./photos";

const guide = {
  slug: "renovating-older-home-bangalore",
  title: "Renovating an Older Home in Bangalore: What to Fix Before the Interiors",
  description:
    "Why older homes need wiring, plumbing, waterproofing and termite checks before new interiors, how to sequence a renovation, and how to plan around living in the house.",
  category: "Renovation",
  published: "2026-11-23",
  updated: "2026-11-23",
  image: "/images/living3.webp",
  imageAlt: "Renovated living room",
  body: [
    { type: "p", text: "Many Bangalore families renovate homes that are 15, 25 or 40 years old – independent houses in established layouts, or apartments from an earlier generation of buildings. The temptation is to go straight to the visible part: new kitchen, wardrobes and paint. In an older home, the hidden services usually need attention first. Fixing them before the interiors costs far less than fixing them after." },

    { type: "h2", text: "Start with an honest survey" },
    { type: "p", text: "Before any design work, walk the house with someone experienced and look for the problems that will undermine new interiors:" },
    { type: "ul", items: [
      "Damp patches, peeling paint and salt deposits on walls, especially near bathrooms, terraces and external walls.",
      "Water stains on ceilings under bathrooms or the terrace.",
      "Termite tracks (thin mud tubes) along walls, door frames and old wooden furniture.",
      "Old switchboards, a fuse box instead of circuit breakers, and sockets that spark or feel warm.",
      "Low water pressure, rusty water or slow drains, which can point to old galvanised iron pipes.",
      "Cracks in walls and ceilings – most are minor, but long diagonal cracks deserve a structural engineer's opinion.",
    ] },

    { type: "h2", text: "Electrical: usually the first upgrade" },
    { type: "p", text: "Older homes were wired for a few lights, fans and a refrigerator. Today's homes run air-conditioners, induction cooktops, geysers, microwaves and many chargers. Old wiring may be undersized and lack proper earthing. A renovation is the right time to rewire with modern cables, a distribution board with circuit breakers and RCCB protection, dedicated circuits for heavy appliances, and many more sockets." },

    { type: "h2", text: "Plumbing and waterproofing" },
    { type: "p", text: "If the bathrooms are being redone, replace old pipes inside the walls while they are open; galvanised iron pipes corrode from inside over time. Waterproof bathroom floors and the lower part of the walls before re-tiling, and check the terrace waterproofing if you are on the top floor or in an independent house. Bangalore's heavy monsoon spells find every weak point in an old terrace." },
    { type: "tip", text: "Do a simple water test after waterproofing: block the drain, fill the bathroom floor with a little water and leave it for a day, then check the ceiling below for damp before tiling." },

    { type: "h2", text: "Termite treatment" },
    { type: "p", text: "New plywood furniture in a house with an active termite problem is at risk. If you see any signs, get a professional anti-termite treatment before installing new woodwork, and ask about treating the wall-floor junctions in rooms where wardrobes and kitchens will go." },
    img("slidingWardrobe"),

    { type: "h2", text: "Walls and floors" },
    { type: "p", text: "Damp walls must be dried and treated at the source – fixing a leak, re-plastering with the right mix, or waterproofing outside – before new paint or panelling. Putting wardrobes against a damp wall traps moisture and ruins both. For floors, decide early whether to replace them: new flooring changes floor levels, which affects door heights and the bottom of every cabinet." },

    { type: "h2", text: "A sensible order of work" },
    { type: "ol", items: [
      "Structural repairs, if any, and demolition.",
      "Waterproofing (terrace, bathrooms) and plumbing replacement.",
      "Electrical rewiring and new points.",
      "Flooring and wall plaster repairs.",
      "False ceilings.",
      "Painting – first coats.",
      "Kitchen, wardrobes and other furniture installation.",
      "Fixtures, final paint and cleaning.",
    ] },

    { type: "h2", text: "Keeping the character of an older home" },
    { type: "p", text: "Older Bangalore homes often have features worth keeping: solid wooden doors and windows, red oxide or mosaic floors, high ceilings and deep window sills. Renovation doesn't have to remove them. Solid wood doors can be stripped and refinished, old floors can sometimes be polished and restored, and high ceilings may need only a partial false ceiling – a border for lighting – rather than a full drop." },
    { type: "p", text: "New interiors look best when they work with these features rather than against them. Warm wood-grain finishes and simple shutters sit comfortably alongside old joinery, while very glossy modern finishes can clash. Decide early what you want to keep, so it is protected during demolition and the new design is drawn around it." },
    { type: "h2", text: "Living in the house during work" },
    { type: "p", text: "Renovating while you live in the home is possible but slower and harder. If you can, move out during the dusty, noisy phases (demolition, plumbing, electrical). If not, plan the work room by room and keep one bathroom and a basic kitchen working throughout. Agree a schedule with your designer so you know which rooms are out of use and when." },

    { type: "h2", text: "Budget for the unknowns" },
    { type: "p", text: "Older buildings hide surprises: a pipe that is worse than expected, a beam that doesn't match the drawings, damp behind old tiles. Keep a contingency of 10–15% for these. It is better to finish the hidden work properly than to stretch the budget for the visible finishes and leave a problem behind them." },
  ],
  faqs: [
    { q: "Should I rewire an old house during renovation?", a: "Usually yes. Older wiring was not designed for modern loads such as air-conditioners and induction cooktops, and a renovation is the easiest time to replace it." },
    { q: "What should be done first in a home renovation?", a: "Structural repairs, waterproofing, plumbing and electrical work come first, then flooring and ceilings, and only then furniture and finishes." },
  ],
  related: [
    { label: "Plywood grades for damp areas", to: "/guides/plywood-grades-mr-bwr-bwp-explained" },
    { label: "Our services", to: "/services" },
  ],
};

export default guide;
