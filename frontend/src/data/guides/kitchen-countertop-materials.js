import { img } from "./photos";

const guide = {
  slug: "kitchen-countertop-materials",
  title: "Granite, Quartz, Solid Surface or Steel? Choosing a Kitchen Countertop",
  description:
    "How the common kitchen countertop materials compare for Indian cooking: heat, stains, maintenance and looks, plus the details to check before the slab is cut.",
  category: "Kitchens",
  published: "2026-11-23",
  updated: "2026-11-23",
  image: "/images/projects/kitchen-modern-white-1/2.webp",
  imageAlt: "Kitchen with a light stone countertop and wood-grain cabinets",
  body: [
    { type: "p", text: "Indian kitchens are hard on countertops. Turmeric, oil, hot kadais taken straight off the flame, heavy grinding and daily wet cleaning all test the surface. The right countertop depends on how you cook as much as on how it looks. Here is how the main options compare." },

    { type: "h2", text: "Granite" },
    { type: "p", text: "Granite is natural stone and the most common countertop in Indian kitchens. It handles heat well, is very hard, and is widely available in South India in many colours, from deep blacks to speckled greys and browns. Darker, denser granites hide stains and wear best. Some lighter or more porous granites can absorb oil and turmeric if they are not sealed, so ask whether the stone you choose needs a sealer." },
    { type: "p", text: "Because it is quarried, every slab is different, and long kitchens often need joints. A good fabricator places joints where they are least visible and matches the colour across them." },

    { type: "h2", text: "Quartz" },
    { type: "p", text: "Engineered quartz is made mostly of crushed quartz bound with resin. It is non-porous, so it resists stains without sealing, and it comes in very consistent colours, including the plain whites and soft marble-looks that are popular in modern kitchens. It is hard and scratch-resistant." },
    { type: "p", text: "Its weak point is high heat: the resin can discolour or crack if a very hot pan is placed directly on it. With quartz, use trivets and keep a granite or steel strip near the hob if you often move pans off the flame. It also costs more than most granites." },
    img("kitchen"),

    { type: "h2", text: "Solid surface (acrylic)" },
    { type: "p", text: "Solid-surface materials can be joined almost invisibly and moulded into integrated sinks and curved edges. They are non-porous and repairable – light scratches can be sanded out. They are softer than stone and less tolerant of heat, so they suit kitchens with light cooking or islands used for serving more than for heavy work." },

    { type: "h2", text: "Stainless steel" },
    { type: "p", text: "Steel is what professional kitchens use: heat-proof, hygienic and completely stain-proof. In a home it gives an industrial look, shows scratches and water marks, and can be noisy. Some families use a steel section around the hob or the sink and stone elsewhere." },

    { type: "h2", text: "Marble" },
    { type: "p", text: "Marble is beautiful but soft and porous. Lemon, tamarind and tomato can etch it, and turmeric and oil can stain it. It suits a dining counter or a lightly used island better than the main cooking counter in most Indian kitchens." },

    { type: "h2", text: "Caring for your countertop" },
    { type: "p", text: "Whatever the material, a few habits keep a countertop looking new. Wipe turmeric, oil and coloured spills soon rather than leaving them overnight. Use mild soap and water for daily cleaning; acidic or abrasive cleaners can dull stone and solid surfaces. Use a chopping board rather than cutting directly on the counter, and a trivet under very hot vessels, especially on quartz and solid surface." },
    { type: "p", text: "Natural stone that needs sealing will tell you: if water darkens the surface instead of beading, it is time to reseal. It is a simple job and much cheaper than trying to remove a set-in stain." },
    { type: "h2", text: "A quick comparison" },
    { type: "ul", items: [
      "Heat from hot vessels: granite and steel handle it best; quartz and solid surface need care.",
      "Stains from turmeric and oil: quartz, steel and solid surface resist best; dense dark granite is good; marble is poor.",
      "Consistent look: quartz and solid surface; granite and marble vary by slab.",
      "Seamless joints: solid surface; others need visible joints in long runs.",
      "Value: granite generally offers the best balance for heavy Indian cooking.",
    ] },

    { type: "h2", text: "Details to check before the slab is cut" },
    { type: "ol", items: [
      "Thickness – most kitchens use about 18–20 mm stone, sometimes with a thicker-looking front edge made by doubling up the edge strip.",
      "Edge profile – a rounded or eased edge chips less and is kinder to hips and children than a sharp square edge.",
      "Cut-outs – the exact model and size of the hob and sink must be decided before the stone is templated.",
      "Backsplash – decide whether the stone continues up the wall behind the counter or whether tiles take over.",
      "Under-mount or top-mount sink – under-mount sinks make cleaning easier but need careful sealing of the stone edge.",
      "Overhang and support – a breakfast counter overhang needs support brackets if it projects more than a few inches.",
    ] },
    { type: "tip", text: "Take a turmeric-and-oil test home: put a little on a sample piece overnight and wipe it in the morning. It tells you more than any brochure." },
    { type: "p", text: "Whatever you choose, the countertop is the last big piece of a modular kitchen, installed after the base cabinets are level and fixed. A level, well-supported base is what keeps a stone countertop from cracking over the years." },
  ],
  faqs: [
    { q: "Is quartz or granite better for an Indian kitchen?", a: "Granite handles heat from hot vessels better and usually costs less; quartz resists stains better and has a more consistent look. For heavy daily cooking, dense granite is often the more forgiving choice." },
    { q: "Can I keep a hot pan on a quartz countertop?", a: "It is best not to. The resin in quartz can discolour or crack under direct high heat. Use a trivet." },
  ],
  related: [
    { label: "Choosing a modular kitchen layout", to: "/guides/modular-kitchen-layouts-guide" },
    { label: "Modular kitchens in Bangalore", to: "/modular-kitchen-bangalore" },
  ],
};

export default guide;
