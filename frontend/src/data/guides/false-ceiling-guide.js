import { img } from "./photos";

const guide = {
  slug: "false-ceiling-guide",
  title: "False Ceilings for Indian Homes: Gypsum, POP or PVC, and How to Plan One",
  description:
    "How false ceilings are built, how gypsum, POP, PVC and wooden ceilings compare, how much height you lose, and what to plan (lighting, AC, fans) before the ceiling closes.",
  category: "Ceilings & Lighting",
  published: "2026-11-23",
  updated: "2026-11-23",
  image: "/images/projects/ceiling-false-design-1/1.webp",
  imageAlt: "Layered false ceiling with LED cove lighting",
  body: [
    { type: "p", text: "A false ceiling is a second ceiling hung a little below the concrete slab. In most Bangalore apartments it is the single change that does the most to make a room look finished: it hides wiring and AC pipes, gives a clean place for lights, and lets you shape the room with steps and coves. It is also the part of an interior that is hardest to change later, so it is worth planning carefully." },

    { type: "h2", text: "How a false ceiling is built" },
    { type: "p", text: "Most residential false ceilings use a frame of galvanised steel channels fixed to the slab with hangers. Boards are screwed to the frame, the joints are taped and filled, and the whole surface is sanded and painted. Light fittings, AC grilles and fan mounts are cut into the boards. Done well, the finished ceiling looks like one smooth plastered surface." },

    { type: "h2", text: "The main materials" },
    { type: "h3", text: "Gypsum board" },
    { type: "p", text: "Factory-made gypsum boards are the most common choice in apartments today. They go up quickly, give a very flat finish, and are relatively light. Standard boards don't like water, so moisture-resistant boards are used in kitchens and bathrooms or near a balcony door that gets rain." },
    { type: "h3", text: "POP (plaster of Paris)" },
    { type: "p", text: "POP is mixed on site and shaped by hand. It allows curved and very detailed designs that boards can't easily achieve, and skilled workers can produce a beautiful finish. It takes longer, creates more mess and depends heavily on the craftsman, so results vary more than with gypsum boards." },
    { type: "h3", text: "PVC panels" },
    { type: "p", text: "PVC panels are light, waterproof and easy to clean, which makes them practical in bathrooms, balconies and utility areas. They come with printed finishes and glossy surfaces, and the joints between panels usually remain visible, so they read as panels rather than a plastered ceiling." },
    { type: "h3", text: "Wood and veneer" },
    { type: "p", text: "Wooden battens or veneered panels are used as an accent – over a dining table, along a living-room feature, or in a study – rather than for a whole flat. They add warmth but cost more and need to stay away from moisture." },
    img("ceiling"),

    { type: "h2", text: "How much height will you lose?" },
    { type: "p", text: "A flat false ceiling typically drops about 4 to 6 inches below the slab, more if it has to hide AC ducts or beams. Many Bangalore apartments have a floor-to-ceiling height of around 10 feet, which leaves room for a modest drop. If your ceiling is lower, or the room is small, keep the drop shallow, use a peripheral design (a border around the edges with the centre left at full height) and avoid heavy layered steps." },
    { type: "tip", text: "Before the design is finalised, measure the clear height in each room and the depth of any beams. A beam running across a bedroom often decides the design for you." },

    { type: "h2", text: "Plan these before the ceiling closes" },
    { type: "ol", items: [
      "Lighting layout – the position of every recessed light, cove strip and pendant. Moving a light after the ceiling is painted means cutting and patching.",
      "Fan mounts – a ceiling fan must hang from the slab with a proper down-rod, not from the false ceiling boards. Mark the fan hook positions first.",
      "Air-conditioning – split AC pipes and drain lines are often run above the ceiling. Decide the indoor unit positions before the frame goes up.",
      "Wiring and switch points – run the wiring for lights, smart switches and any future additions such as a projector while the ceiling is open.",
      "Access panels – leave a removable panel anywhere you may need to reach later, such as AC drain joints or junction boxes.",
      "Curtain pelmets and blinds – if you want curtains to hang from inside the ceiling, leave a recessed track pocket near the windows.",
    ] },

    { type: "h2", text: "Design ideas that age well" },
    { type: "p", text: "Simple designs usually look better for longer. A clean peripheral border with a cove light, or a single recessed panel over the bed or dining table, gives a finished look without making the room feel heavy. Very ornate layered designs and coloured LED strips tend to date quickly; warm white cove lighting is easier to live with." },
    { type: "p", text: "Keep the design consistent across the home so rooms feel connected, and let the kitchen and bathrooms be simpler and more practical than the living room." },

    { type: "h2", text: "Common problems and how to avoid them" },
    { type: "ul", items: [
      "Cracks along joints – usually from poor taping or a frame that is not rigid. Ask how joints are finished and allow the ceiling to settle before final painting.",
      "Sagging – from too few hangers or heavy fittings fixed straight to the boards. Heavy chandeliers need their own support from the slab.",
      "Water stains – from a leak above, an AC drain, or a bathroom on the floor above. Fix the source and use moisture-resistant boards in wet areas.",
      "Uneven light from cove strips – the cove needs enough depth so the LED strip itself is hidden and the light spreads evenly.",
    ] },
    { type: "p", text: "A false ceiling is usually done early in an interior project, after the electrical planning and before the furniture is installed. Getting the lighting and AC decisions right at that stage avoids most of the problems above." },
  ],
  faqs: [
    { q: "Is gypsum or POP better for a false ceiling?", a: "Gypsum board is faster, cleaner and more consistent, which is why most apartments use it. POP suits curved or highly detailed designs and depends more on the skill of the person applying it." },
    { q: "Can a ceiling fan be fixed to a false ceiling?", a: "No. The fan should hang from the concrete slab with a down-rod passing through the false ceiling. Mark the fan positions before the ceiling is built." },
    { q: "How much does a false ceiling lower the room?", a: "A simple flat false ceiling usually drops about 4 to 6 inches; more if it hides AC ducts or deep beams." },
  ],
  related: [
    { label: "Planning lighting for your home", to: "/guides/home-lighting-plan" },
    { label: "See a false ceiling project", to: "/projects/modern-false-ceiling-design" },
  ],
};

export default guide;
