import { img } from "./photos";

const guide = {
    slug: "modular-kitchen-layouts-guide",
    title: "L-Shaped, U-Shaped, Parallel or Straight? Choosing a Modular Kitchen Layout",
    description:
      "How the four common modular kitchen layouts work, which suits which apartment kitchen, and the measurements to check before you sign off a design.",
    category: "Kitchens",
    published: "2026-11-23",
    updated: "2026-11-23",
    image: "/images/kitchen1.webp",
    imageAlt: "Modular kitchen with base and wall cabinets",
    body: [
      { type: "p", text: "The layout of a kitchen is decided mostly by the room you already have: where the window is, where the plumbing and the gas line come in, and where the doors are. Within those limits, choosing the right layout makes more difference to daily cooking than any finish or colour. Here are the four layouts you will see in most Bangalore apartments, and how to judge them." },

      { type: "h2", text: "Start with the work triangle" },
      { type: "p", text: "Designers often talk about the \"work triangle\" between the sink, the hob and the refrigerator – the three places you move between most. The idea is simple: keep the three close enough to save steps, far enough apart to give you counter space between them, and keep traffic (people walking through to the utility area, for example) out of the triangle." },
      { type: "p", text: "In Indian kitchens it also helps to plan a clear stretch of counter next to the hob for chopping and plating, and a place for the appliances that live on the counter: mixer-grinder, water purifier and often a microwave." },

      { type: "h2", text: "The four common layouts" },
      { type: "h3", text: "Straight (single wall)" },
      { type: "p", text: "Everything along one wall. It suits small or narrow kitchens and studio flats. The drawback is counter space: with the sink and hob on the same run, the space between them is usually the only prep area, so tall units and good wall storage become important." },
      { type: "h3", text: "Parallel (galley)" },
      { type: "p", text: "Two counters facing each other. Very efficient for cooking – you turn rather than walk – and common in apartments where the kitchen leads to a utility balcony. Keep at least about 1 metre (roughly 3.5 ft) of clear space between the two counters so two people and open drawers can coexist." },
      { type: "h3", text: "L-shaped" },
      { type: "p", text: "Two counters meeting at a corner. It is the most common layout in 2BHK and 3BHK apartments because it works in most room shapes and leaves floor space open. Plan the corner carefully: a blind corner with ordinary shelves wastes space, so ask about corner carousels or pull-out solutions." },
      { type: "h3", text: "U-shaped" },
      { type: "p", text: "Counters on three walls. It gives the most storage and counter space, and lets the sink, hob and refrigerator sit on separate runs. It needs a reasonably wide kitchen; in a narrow room a U-shape can feel cramped and has two corners to solve instead of one." },

      img("kitchen"),
      { type: "h2", text: "Plan storage by zone" },
      { type: "p", text: "Whichever layout you choose, storage works best when it follows the way you cook. A simple approach is to divide the kitchen into zones and put things where they are used." },
      { type: "ul", items: [
        "Cooking zone, around the hob: drawers for pots, pans and kadais, a spice pull-out, and ladles within reach.",
        "Preparation zone, between the sink and the hob: cutlery, chopping boards, knives and the mixer-grinder.",
        "Cleaning zone, around the sink: a pull-out bin, a cleaning-supplies cabinet and a plate rack or drying space.",
        "Storage zone, often a tall unit: dry provisions, rice and dal containers, and appliances you use less often.",
      ] },
      { type: "p", text: "Deep drawers usually work better than shelves in base cabinets, because you can see and reach everything without kneeling. Shelves suit wall units, where things are at eye level." },
      { type: "h2", text: "Measurements worth checking" },
      { type: "ul", items: [
        "Counter height: around 850–900 mm suits most people; if the main cook is tall or short, adjust for them.",
        "Counter depth: about 600 mm is standard and fits most hobs and sinks.",
        "Gap between counter and wall units: around 600 mm, and more above the hob, following the chimney manufacturer's guidance.",
        "Space beside the hob: leave counter on both sides where you can, so pan handles do not hang over an edge or into a wall.",
        "Refrigerator: check the door swing and the space needed behind for ventilation.",
      ] },
      { type: "tip", text: "Before finalising, mark the layout on the floor with masking tape and \"cook\" a meal in the empty room. Problems with door swings and walking space show up immediately." },

      { type: "p", text: "Finally, think about who cooks. A kitchen used by two people at once needs more clear floor space and ideally two separate work areas, while one person cooking alone benefits most from a tight, efficient triangle." },
    { type: "h2", text: "Things people often forget" },
      { type: "ol", items: [
        "Enough electrical points at counter height for every appliance you use – and where they will sit.",
        "A tall unit or pantry pull-out for dry storage, which reduces clutter on the counter.",
        "Lighting under the wall units, so you are not working in your own shadow.",
        "A dedicated place for the dustbin and recycling, ideally a pull-out under or near the sink.",
        "Ventilation: a chimney ducted to the outside works far better than one that only recirculates.",
      ] },
      { type: "p", text: "If your apartment has a utility area beside the kitchen, use it. Moving the washing machine, the second sink and heavy-duty washing out there keeps the main kitchen cleaner and frees counter space." },
      { type: "p", text: "The best layout is the one that fits your room and the way you cook. If you share a photo and a rough floor plan of your kitchen at the consultation, we can show you which layouts fit and how much storage each one gives." },
    ],
    faqs: [
      { q: "Which modular kitchen layout is best for a 2BHK apartment?", a: "An L-shaped layout suits most 2BHK kitchens because it works in many room shapes and keeps floor space open. In narrow kitchens with a utility balcony at the end, a parallel layout is often more efficient." },
      { q: "What is the standard kitchen counter height in India?", a: "Around 850–900 mm from the floor is typical, but it is worth adjusting for the height of the person who cooks most." },
    ],
    related: [{ label: "Modular kitchens in Bangalore", to: "/modular-kitchen-bangalore" }, { label: "See a completed kitchen", to: "/projects/modern-white-modular-kitchen" }],
  };

export default guide;
