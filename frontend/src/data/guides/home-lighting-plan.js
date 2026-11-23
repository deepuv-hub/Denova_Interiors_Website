import { img } from "./photos";

const guide = {
  slug: "home-lighting-plan",
  title: "Planning Home Lighting: Layers, Colour Temperature and Where the Wiring Goes",
  description:
    "A plain-language guide to planning lighting in each room: ambient, task and accent light, warm versus cool white, CRI, and what to decide before the false ceiling and walls close.",
  category: "Ceilings & Lighting",
  published: "2026-11-23",
  updated: "2026-11-23",
  image: "/images/projects/living-room-modern-1/1.webp",
  imageAlt: "TV wall panelling lit by spotlights",
  body: [
    { type: "p", text: "Lighting is often decided at the last minute, after the furniture is chosen. That is backwards: wiring runs inside the ceiling and walls, so lighting has to be planned before they are closed. A good plan also makes a modest interior look far better than a costly one that is poorly lit." },

    { type: "h2", text: "Think in three layers" },
    { type: "h3", text: "Ambient light" },
    { type: "p", text: "This is the general light that lets you move around the room – recessed downlights, a central fitting, or a cove in the false ceiling. It should be even, without dark corners or harsh bright spots." },
    { type: "h3", text: "Task light" },
    { type: "p", text: "This is focused light where you work: under the kitchen wall cabinets, over a study desk, beside the bed for reading, at the bathroom mirror. Task lights matter most in kitchens, where ceiling lights behind you cast your shadow on the counter." },
    { type: "h3", text: "Accent light" },
    { type: "p", text: "This adds mood and highlights features – spotlights on a panelled TV wall, lights inside display niches, or a pendant over the dining table. It is what makes a room look finished in the evening." },
    img("tvUnit"),

    { type: "h2", text: "Warm, neutral or cool white" },
    { type: "p", text: "LED lights are labelled with a colour temperature in Kelvin (K). Lower numbers are warmer and more yellow; higher numbers are cooler and bluer." },
    { type: "ul", items: [
      "About 2700–3000K (warm white): relaxed and cosy. Good for bedrooms, living rooms and dining areas.",
      "About 4000K (neutral white): crisp without being harsh. Good for kitchens, study areas and bathrooms.",
      "About 5700–6500K (cool daylight): very bright and blue. Common in older Indian homes, but it can feel clinical in living spaces.",
    ] },
    { type: "tip", text: "Mixing colour temperatures in the same room usually looks patchy. Pick one for each room and stick to it, or use fittings that let you switch between tones." },

    { type: "h2", text: "Colour rendering (CRI)" },
    { type: "p", text: "CRI describes how faithfully a light shows colours, on a scale up to 100. Lights with a CRI of 90 or more make food, skin tones and wood finishes look natural. It is worth paying for in the kitchen, at dressing mirrors and on feature walls." },

    { type: "h2", text: "Room-by-room suggestions" },
    { type: "ul", items: [
      "Living room: cove or recessed ambient light, accent lights on the TV wall or art, a floor or table lamp for evenings.",
      "Kitchen: bright, even ceiling light plus strip lights under the wall cabinets; a light inside the chimney hood is not enough.",
      "Bedrooms: soft ambient light, reading lights at the bed, and a low-level night light along the path to the bathroom.",
      "Wardrobes: sensor-operated strip lights that switch on when the shutter opens.",
      "Bathrooms: light at the mirror from the sides or front, not only from above, so faces aren't shadowed.",
      "Dining: a pendant or cluster centred on the table, hung low enough to light it without blocking the view across.",
    ] },
    img("ceiling"),

    { type: "h2", text: "Common lighting mistakes" },
    { type: "ul", items: [
      "Downlights in a neat grid that ignores the furniture, leaving the sofa in shadow and lighting empty floor.",
      "Only one bright ceiling light, which flattens the room and causes glare on the TV.",
      "Spotlights placed directly above a bed or a seat, shining into people's eyes.",
      "Cove lights with the LED strip visible from below, which looks like a row of dots rather than a soft glow.",
      "Cheap LED strips with a low CRI, which make wood finishes look grey and skin tones dull.",
      "No light at all inside deep wardrobes and tall kitchen units.",
    ] },
    { type: "p", text: "Most of these are easy to avoid at the planning stage and difficult to fix afterwards, which is why lighting deserves its own drawing in the design set, alongside the furniture layout." },
    { type: "h2", text: "Switches and controls" },
    { type: "p", text: "Put each layer on its own switch so you can choose the mood. Place switches where you naturally reach – at room entrances, and two-way switches for bedroom lights at both the door and the bed. Dimmers on living and dining lights are inexpensive and useful. If you are considering smart switches, decide before wiring: some need a neutral wire at the switch box." },

    { type: "h2", text: "Before the ceiling and walls close" },
    { type: "ol", items: [
      "Mark every light position on a ceiling plan, aligned with the furniture layout – a light over the dining table needs to be over the table.",
      "Mark sockets and switch positions for under-cabinet, wardrobe and niche lighting.",
      "Plan where LED drivers will sit and how they can be reached for replacement.",
      "Leave spare conduit or a pull wire to places you might want lights later.",
    ] },
    { type: "p", text: "Good lighting doesn't mean many lights. It means the right light in the right place, controlled separately – planned with the interior, not after it." },
  ],
  faqs: [
    { q: "Which colour light is best for a bedroom?", a: "Warm white, around 2700–3000K, is usually most comfortable for bedrooms and living rooms. Neutral white (around 4000K) suits kitchens and study areas." },
    { q: "Do I need under-cabinet lights in the kitchen?", a: "They are strongly recommended. Ceiling lights are behind you when you work at the counter, so under-cabinet lights stop you working in your own shadow." },
  ],
  related: [
    { label: "False ceilings explained", to: "/guides/false-ceiling-guide" },
    { label: "See a living room project", to: "/projects/modern-living-room-interior-design" },
  ],
};

export default guide;
