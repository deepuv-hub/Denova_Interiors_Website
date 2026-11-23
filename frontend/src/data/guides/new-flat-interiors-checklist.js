import { img } from "./photos";

const guide = {
  slug: "new-flat-interiors-checklist",
  title: "Got the Keys? A Checklist for Doing Interiors in a New Bangalore Flat",
  description:
    "What to check at handover, which decisions to make before work starts, apartment association rules to ask about, and the usual order of work for new-flat interiors.",
  category: "Budget & Planning",
  published: "2026-11-23",
  updated: "2026-11-23",
  image: "/images/living2.webp",
  imageAlt: "Living room in a newly furnished apartment",
  body: [
    { type: "p", text: "Getting the keys to a new flat is exciting, and it is tempting to start interiors immediately. A few weeks of preparation saves a lot of rework. This checklist covers what to inspect at handover, what to decide before any furniture is designed, and how the work usually runs." },

    { type: "h2", text: "1. Inspect the flat before you accept it" },
    { type: "p", text: "Builders generally fix defects pointed out at handover. Once furniture covers a wall, problems are harder to see and harder to get fixed. Walk through every room with a notebook or a phone and record:" },
    { type: "ul", items: [
      "Damp patches, hairline cracks and uneven plaster, especially on external walls and around windows.",
      "Tiles that sound hollow when tapped, chipped edges and uneven grout.",
      "Leaks under every sink and around every bathroom floor. Run the taps and the shower for a few minutes.",
      "Doors and windows that stick, don't lock or let rain in.",
      "Electrical points: test every socket and switch and note the earthing in the kitchen and bathrooms.",
      "The slope of the balcony and bathroom floors, so water runs to the drain.",
    ] },
    { type: "tip", text: "Send the list to the builder in writing, with photos, and keep a copy. Ask for the fixes to be completed before interior work begins." },

    { type: "h2", text: "2. Gather the documents" },
    { type: "p", text: "Ask the builder or the association for the floor plan with dimensions, the electrical layout, and the plumbing and drainage layout if available. These save time in design, and they show where pipes run inside walls – important before anyone drills for a wardrobe or a TV unit." },

    { type: "h2", text: "3. Read the association's interior rules" },
    { type: "p", text: "Most gated communities have rules for interior work. Ask for them early because they affect your timeline and cost." },
    { type: "ul", items: [
      "Permitted working hours and days, and noise restrictions.",
      "Whether a refundable deposit is required before work starts.",
      "Lift booking for materials, and whether a service lift must be used.",
      "Where materials can be stored and how debris must be removed.",
      "Rules on changes to the façade, balcony enclosures and grills.",
      "Registration of workers at the security gate.",
    ] },

    { type: "h2", text: "4. Decide the big things first" },
    { type: "p", text: "Some decisions shape everything else, so settle them before the design is drawn:" },
    { type: "ol", items: [
      "Scope – which rooms and which items. Our budgeting guide explains how to size it.",
      "Appliances – hob, chimney, built-in oven, refrigerator size, washing machine location. Kitchen cabinets are designed around them.",
      "Air-conditioning positions – they affect false ceilings, wiring and wardrobe placement.",
      "Any civil changes – moving a door, changing flooring, enclosing a balcony. These must happen first and may need association approval.",
      "Electrical changes – extra sockets, TV and data points, lighting circuits. Mark them on the plan before walls are painted or covered.",
    ] },
    img("tvUnit"),

    { type: "h2", text: "Measure after civil and electrical work, not before" },
    { type: "p", text: "Built-in furniture is made to fit within a few millimetres. If a wall is re-plastered, a skirting tile is added or a socket moves after measurements are taken, panels may not fit. Ask your designer to take final measurements once civil changes and electrical points are done, and to check them again before production starts." },
    { type: "p", text: "It also helps to photograph every wall with the electrical and plumbing points visible before anything is covered. Those photos are invaluable years later when you want to drill a hole safely or trace a leak." },
    { type: "h2", text: "Rented out or moving in?" },
    { type: "p", text: "If you plan to rent the flat out, durability and easy maintenance matter more than statement finishes: laminate rather than high-gloss acrylic, sturdy hardware, and neutral colours that suit most tenants. If you are moving in yourself, spend on the things you will use every day – the kitchen, wardrobes and lighting – and leave decorative items to add over time." },
    { type: "h2", text: "5. The usual order of work" },
    { type: "ol", items: [
      "Civil changes and any plumbing or flooring work.",
      "Electrical rewiring and new points.",
      "False ceilings and their wiring.",
      "First coat of paint, or putty and primer.",
      "Installation of kitchen, wardrobes and other built-in furniture (made in a factory or workshop alongside the earlier steps).",
      "Countertops, appliances and fittings.",
      "Final painting touch-ups, deep cleaning and handover.",
    ] },
    { type: "p", text: "Doing things out of order is the most common source of damage and rework – for example, painting fully before installation, or installing wardrobes before the AC wiring is run." },

    { type: "h2", text: "6. Before you move in" },
    { type: "ul", items: [
      "Do a final walkthrough with your designer and list every snag: alignment of shutters, soft-close function, edge banding, scratches.",
      "Keep the manuals and warranty cards for appliances and hardware together.",
      "Ask for a small stock of spare laminate or touch-up paint for future repairs.",
      "Arrange a professional deep clean – construction dust settles inside cabinets for weeks.",
    ] },
    { type: "p", text: "A new flat is a blank canvas, which is the best time to get the hidden things – wiring, plumbing, AC routes – right. Those are the things that are hardest to change once you are living there." },
  ],
  faqs: [
    { q: "Should I start interiors before the builder fixes defects?", a: "It is better to have handover defects fixed first. Once furniture covers walls and floors, leaks and cracks are harder to find and repair." },
    { q: "Do apartment associations restrict interior work?", a: "Most gated communities have rules on working hours, deposits, lift use and debris removal. Ask for them before you plan your timeline." },
  ],
  related: [
    { label: "Budgeting by carpet area", to: "/guides/carpet-area-interior-budget-bangalore" },
    { label: "Our design process", to: "/process" },
  ],
};

export default guide;
