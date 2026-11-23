// Denova Creations' own project photos, with captions that describe what is
// actually in each picture. Use only these (or other real project photos) in
// guides.
export const photos = {
  ceiling: {
    src: "/images/projects/ceiling-false-design-1/1.webp",
    alt: "Layered false ceiling with an LED cove strip, recessed lights and a central medallion",
    caption: "A layered false ceiling with LED cove lighting and recessed spotlights.",
  },
  kitchen: {
    src: "/images/projects/kitchen-modern-white-1/2.webp",
    alt: "Modular kitchen with wood-grain cabinets, white stone countertop, peninsula and pendant lights",
    caption: "Wood-grain cabinets, a light stone countertop and a peninsula with open storage.",
  },
  slidingWardrobe: {
    src: "/images/projects/wardrobe-sliding-bedroom-1/1.webp",
    alt: "Three-door sliding wardrobe with lofts above and a dresser unit at the side",
    caption: "A sliding wardrobe with loft storage above and a built-in dresser at the end.",
  },
  tvUnit: {
    src: "/images/projects/living-room-modern-1/1.webp",
    alt: "TV unit with wood-grain wall panelling, spotlights and floating drawers, during installation",
    caption: "A TV wall during installation: panelling, accent spotlights and floating drawers.",
  },
  hingedWardrobe: {
    src: "/images/projects/bedroom-modern-design-1/1.webp",
    alt: "Floor-to-ceiling hinged wardrobe in a stone-look high-gloss finish with lofts",
    caption: "A floor-to-ceiling hinged wardrobe with lofts, in a stone-look high-gloss finish.",
  },
};

export const img = (key) => ({ type: "img", ...photos[key] });
