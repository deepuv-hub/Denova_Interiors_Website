import { img } from "./photos";

const guide = {
  slug: "wardrobe-finishes-guide",
  title: "Wardrobe Finishes Compared: Laminate, Acrylic, PU, Veneer and Glass",
  description:
    "How the common wardrobe shutter finishes look, wear and clean, how sliding and hinged doors compare, and how to plan the inside of a wardrobe for Bangalore homes.",
  category: "Wardrobes",
  published: "2026-11-23",
  updated: "2026-11-23",
  image: "/images/projects/wardrobe-sliding-bedroom-1/1.webp",
  imageAlt: "Sliding wardrobe with lofts and a dresser unit",
  body: [
    { type: "p", text: "A wardrobe is mostly shutters. They are the part you see every day, the part that takes knocks and fingerprints, and the part that sets the cost more than anything else. This guide compares the common finishes and the two door types, then looks at what goes inside." },

    { type: "h2", text: "The finishes" },
    { type: "h3", text: "Laminate" },
    { type: "p", text: "High-pressure laminate is the most widely used finish in Indian homes. It comes in hundreds of colours and textures – wood grains, stone looks, solid colours, matte and gloss – and it resists scratches and everyday wear well. It is the most economical good-quality option. Its limits are at the edges, which show a line where the edge banding meets the face, and in very high gloss, where some laminates show scratches more than others." },
    { type: "h3", text: "Acrylic" },
    { type: "p", text: "Acrylic sheets give a deep, mirror-like gloss with a smooth, seamless look. They suit contemporary designs and solid colours. High-gloss acrylic shows fingerprints and fine scratches, so matte acrylic is often a better choice for wardrobes that are opened many times a day." },
    { type: "h3", text: "PU paint" },
    { type: "p", text: "Polyurethane paint is sprayed in layers onto the shutter, usually on an MDF or HDHMR core, and can be matte or glossy in almost any colour. Because it is painted, the edges can be rounded and shaped, which suits profiled shutters and handle-less designs. It costs more, takes longer to finish, and chips are harder to repair invisibly than with laminate." },
    { type: "h3", text: "Veneer" },
    { type: "p", text: "Veneer is a thin slice of real wood, finished with a protective coat. Every sheet is slightly different, which gives a warmth that printed wood-grain laminate can't fully match. It needs more care: it can fade in direct sunlight and should be kept away from moisture." },
    { type: "h3", text: "Glass and mirror" },
    { type: "p", text: "Lacquered (back-painted) glass gives a sleek, easy-to-wipe surface, and mirror shutters make a small bedroom look larger. Glass is heavier, so it needs good hardware, and it is usually used for a few shutters as an accent rather than the whole wardrobe." },
    img("slidingWardrobe"),

    { type: "h2", text: "Sliding or hinged doors?" },
    { type: "p", text: "Sliding doors need no clearance in front of the wardrobe, which makes them useful in compact bedrooms where a bed or study table sits close by. Their drawbacks are that only part of the wardrobe is open at any time, they need a wardrobe depth of roughly 2 feet plus room for the tracks, and the quality of the sliding system matters a great deal: cheap tracks get noisy and jump." },
    { type: "p", text: "Hinged doors open the whole wardrobe at once, are simpler and generally cheaper, and suit rooms with enough space to swing a door – usually about 2 feet in front of the wardrobe. Soft-close hinges are worth the small extra cost." },
    img("hingedWardrobe"),

    { type: "h2", text: "Plan the inside before the outside" },
    { type: "p", text: "A beautiful shutter in front of a badly planned interior is still a frustrating wardrobe. Start by listing what each person stores, then plan sections for it." },
    { type: "ul", items: [
      "Long hanging for sarees on hangers, dresses and long coats, and short hanging (two rails, one above the other) for shirts and trousers.",
      "Shelves for folded clothes, about 12 to 15 inches apart so stacks don't topple.",
      "Drawers for innerwear, accessories and documents, with one lockable drawer for valuables.",
      "Lofts above the wardrobe for suitcases and seasonal items. They use space that is otherwise wasted, up to the ceiling.",
      "Pull-outs for trousers, ties and belts, or a tilting shoe rack in a section near the floor.",
    ] },

    { type: "h2", text: "Bangalore-specific points" },
    { type: "p", text: "Monsoon months bring humidity, and wardrobes on external walls or next to bathrooms can develop a musty smell or, at worst, fungus on stored clothes. Leave a small gap behind the wardrobe if the wall is prone to damp, use BWR or better plywood for the carcass against such walls, and consider ventilation slots or a small gap at the top of the shutters. Silica gel packs and cedar blocks help inside." },

    { type: "h2", text: "Handles and lighting" },
    { type: "p", text: "Handles change the look of a wardrobe more than people expect. Profile handles and gola channels give a clean, handle-less look; recessed handles suit sliding doors; slim bar handles work on most hinged shutters. Avoid handles that stick out far in a narrow passage. Sensor-operated strip lights inside the wardrobe switch on when a shutter opens and make it much easier to find things, particularly in deep sections." },
    { type: "h2", text: "A quick way to decide" },
    { type: "ul", items: [
      "Best value and toughness: laminate, matte or textured.",
      "Seamless modern gloss: acrylic, preferably matte in daily-use wardrobes.",
      "Custom colours and shaped edges: PU paint.",
      "Natural wood feel: veneer, away from direct sun.",
      "Small room, little clearance: sliding doors with a good-quality track system.",
    ] },
    { type: "p", text: "Many homes mix finishes: laminate for the children's rooms, acrylic or PU for the master bedroom, and a mirror shutter where the room needs to feel bigger. The carcass and hardware should be just as good across all of them." },
  ],
  faqs: [
    { q: "Which wardrobe finish is best for daily use?", a: "Laminate is the toughest and most economical for daily use. If you want gloss, matte acrylic shows fewer fingerprints than high-gloss acrylic." },
    { q: "Are sliding wardrobes better than hinged ones?", a: "Sliding doors save space in front of the wardrobe; hinged doors let you open the whole wardrobe at once and are usually cheaper. Choose sliding only with a good track system." },
  ],
  related: [
    { label: "Plywood grades explained", to: "/guides/plywood-grades-mr-bwr-bwp-explained" },
    { label: "See a sliding wardrobe project", to: "/projects/sliding-door-wardrobe-bedroom" },
  ],
};

export default guide;
