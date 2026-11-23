import { img } from "./photos";

const guide = {
    slug: "plywood-grades-mr-bwr-bwp-explained",
    title: "MR, BWR, BWP or Marine? Plywood Grades for Home Interiors Explained",
    description:
      "What the plywood grades on a quotation mean, which Indian Standards cover them, and which grade to use for kitchens, wardrobes and bathroom vanities in Bangalore homes.",
    category: "Materials",
    published: "2026-11-23",
    updated: "2026-11-23",
    image: "/images/wardrobe.webp",
    imageAlt: "Built-in wardrobe made from laminated plywood",
    body: [
      { type: "p", text: "Almost every interior quotation in India lists the plywood grade, usually as a short code: MR, BWR, BWP or \"marine\". These codes decide how the furniture will behave around water, and they affect the price more than most finishes do. Here is what they mean and where each one makes sense." },

      { type: "h2", text: "The grades, and the standards behind them" },
      { type: "p", text: "Plywood grades in India are defined by the Bureau of Indian Standards (BIS). The two standards you will see are IS 303 (plywood for general purposes) and IS 710 (marine plywood). A sheet sold as a particular grade should carry the relevant IS mark and the manufacturer's details." },
      { type: "ul", items: [
        "MR (Moisture Resistant) – IS 303. Usually bonded with urea-formaldehyde resin. Fine in dry, indoor conditions; not meant for areas that get wet.",
        "BWR (Boiling Water Resistant) – IS 303. Typically bonded with phenolic resin, so it copes much better with humidity and occasional splashes.",
        "BWP (Boiling Water Proof) – IS 303. Also phenol-formaldehyde bonded, to a higher water-resistance requirement than BWR.",
        "Marine – IS 710. Made for boats and very wet conditions, with stricter rules on the veneers and the bond. It is rarely necessary inside a home.",
      ] },
      { type: "tip", text: "\"Water resistant\" refers to the glue line. No plywood is happy sitting in water: edges that are left unsealed will still absorb moisture, so good edge banding matters as much as the grade." },

      { type: "h2", text: "Which grade where" },
      { type: "h3", text: "Kitchen base cabinets and the sink unit" },
      { type: "p", text: "This is where water damage actually happens: a slow leak under the sink, spills that run behind the skirting, wet mopping. BWP plywood is the sensible choice for base units and essential for the sink cabinet. Many people also use it for the wall units for a consistent build." },
      { type: "h3", text: "Bathroom vanities" },
      { type: "p", text: "Use BWP at minimum, keep a gap between the cabinet and the wet floor where you can, and make sure every exposed edge is sealed." },
      { type: "h3", text: "Wardrobes, TV units, bed backs and study units" },
      { type: "p", text: "These stay dry, so MR or BWR plywood is usually adequate. Choose BWR if the wardrobe is against an external wall that faces the monsoon or a bathroom wall that could develop damp." },
      { type: "h3", text: "Shutters" },
      { type: "p", text: "Shutters are often made from the same plywood as the carcass, but some finishes, such as acrylic and PU, may be applied on MDF or HDHMR boards for a flatter surface. Ask what your shutter core is, not just the carcass." },

      img("hingedWardrobe"),
      { type: "h2", text: "Thickness matters too" },
      { type: "p", text: "Quotations usually give a thickness as well as a grade. As a rule of thumb, 18–19 mm boards are used for carcasses, shelves that carry weight and shutters, while 6–9 mm boards are used for drawer bottoms and the backs of cabinets. A wide shelf in thin board will sag over time, especially under books or heavy utensils, so check the thickness of long shelves and ask whether they have a support in the middle." },
      { type: "h2", text: "Laminate and edge banding" },
      { type: "p", text: "Plywood is almost always covered: by a decorative laminate on the outside faces and a thinner, cheaper laminate on the inside. The laminate protects the board as well as giving it a finish, which is why inside faces should be laminated too rather than left bare." },
      { type: "p", text: "The cut edges of each panel are the weak point. Edge banding is a thin strip, usually PVC, pressed onto those edges with adhesive. Machine-applied edge banding seals far better than strips glued by hand. On kitchen and bathroom units, ask for all four edges of every panel to be banded, including the ones that will not be visible." },
      { type: "h2", text: "What about HDHMR, MDF and particle board?" },
      { type: "p", text: "Engineered boards are common in factory-made modular furniture. HDHMR (high density, high moisture resistance board) is dense, flat and holds up reasonably well to humidity. MDF gives a very smooth surface for paint finishes but is weak against water. Particle board is the most economical and best kept to dry, low-load uses. None of these is wrong; the question is whether the board suits where it is used." },

      { type: "h2", text: "How to check what you are getting" },
      { type: "ol", items: [
        "Ask for the grade, thickness and brand of plywood for each item – carcass and shutters – in the quotation.",
        "Check the sheets on site for the IS mark, the grade and the manufacturer's stamp.",
        "Ask how exposed edges will be finished (edge banding, and on which faces).",
        "Ask which hardware brand is used for hinges and channels. A good board with poor hinges still fails early.",
      ] },
      { type: "p", text: "It is also worth asking how the factory or workshop stores the boards. Plywood that has absorbed moisture before it is cut can warp after installation, whatever its grade." },
      { type: "p", text: "Bangalore's climate is mild, but the monsoon months are humid and kitchens are used heavily. Spending on the right grade in wet areas and saving on dry ones is usually the best balance of cost and life. Our materials page goes further into finishes and hardware." },
    ],
    faqs: [
      { q: "Is BWR plywood waterproof?", a: "No. BWR is boiling water resistant – its glue holds up well to humidity and splashes – but it is not meant for constantly wet areas. Use BWP for sink units and bathroom vanities." },
      { q: "Do I need marine plywood for my kitchen?", a: "Usually not. BWP plywood with properly sealed edges is enough for most home kitchens. Marine plywood (IS 710) is made for much wetter conditions and costs more." },
    ],
    related: [{ label: "Interior materials guide", to: "/materials" }, { label: "Modular kitchens in Bangalore", to: "/modular-kitchen-bangalore" }],
  };

export default guide;
