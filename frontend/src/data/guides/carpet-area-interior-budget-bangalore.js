import { FULL_HOME_RATE, FULL_HOME_RATE_TEXT, PRICING_DISCLAIMER } from "../pricing";
import { img } from "./photos";

const rate = (n) => `₹${n.toLocaleString("en-IN")}`;
const example = (sqft) =>
  `${rate(sqft * FULL_HOME_RATE.min)} to ${rate(sqft * FULL_HOME_RATE.max)}`;

const guide = {
    slug: "carpet-area-interior-budget-bangalore",
    title: "Carpet Area vs Super Built-Up Area: How to Budget Your Home Interiors",
    description:
      "Why interior quotes in Bangalore are based on carpet area, how to work out yours from the sale agreement, and how to turn it into a realistic full-home interior budget.",
    category: "Budget & Planning",
    published: "2026-11-23",
    updated: "2026-11-23",
    image: "/images/living1.webp",
    imageAlt: "Furnished living room in a Bangalore apartment",
    body: [
      { type: "p", text: "Most people in Bangalore know their flat by one number: the area printed in the builder's brochure. A \"1,450 sq.ft 3BHK\" sounds precise, but that figure is usually the super built-up area, and it is not the number an interior designer should use to price your home. Mixing up the two is one of the most common reasons interior budgets go wrong before a single sheet of plywood is cut." },
      { type: "p", text: "This guide explains the three area figures you will see, which one interior pricing is based on, how to find it, and how to turn it into a working budget." },

      { type: "h2", text: "The three area figures, in plain words" },
      { type: "ul", items: [
        "Carpet area – the usable floor area inside your flat. Under the Real Estate (Regulation and Development) Act, 2016 (RERA), it is the net usable floor area, excluding external walls, service shafts, exclusive balconies or verandahs and open terraces, but including the internal partition walls.",
        "Built-up area – carpet area plus the thickness of the external walls, and often your balconies.",
        "Super built-up area – built-up area plus your share of common areas: lobbies, staircases, lift wells, the clubhouse and so on. This is the largest number, and in many apartment projects it is 25–35% more than the carpet area.",
      ] },
      { type: "p", text: "Interiors are built inside your walls, so the work and the material scale with the space you actually use. That is why full-home interior pricing is normally based on carpet area." },

      { type: "h2", text: "How to find your carpet area" },
      { type: "ol", items: [
        "Check your sale agreement. For projects registered under RERA, the agreement has to state the carpet area.",
        "Look up the project on the Karnataka RERA website, which lists unit types and their carpet areas for registered projects.",
        "If you only have a floor plan, add up the room dimensions (length × width for each room, including the kitchen, bathrooms and passages). It will be close enough for a first budget.",
        "If none of these is available, a rough rule is to take 70–75% of the super built-up area – but treat that as a placeholder until the site is measured.",
      ] },
      { type: "tip", text: "Your interior designer will measure the site before the final quote. Use your own figure for budgeting, and expect the measured figure to be the one that counts." },

      { type: "h2", text: "Turning carpet area into a budget" },
      { type: "p", text: `At Denova Creations, full-home interiors are currently priced at ${FULL_HOME_RATE_TEXT} of carpet area. That range is wide on purpose: the same flat can be done very simply or very richly. A worked example:` },
      { type: "ul", items: [
        `A 2BHK with about 900 sq.ft of carpet area: roughly ${example(900)}.`,
        `A 3BHK with about 1,200 sq.ft of carpet area: roughly ${example(1200)}.`,
        `A villa with about 2,500 sq.ft of carpet area: roughly ${example(2500)}.`,
      ] },
      { type: "p", text: `${PRICING_DISCLAIMER} Use the example as a range to plan around, not a quote.` },

      { type: "h2", text: "What moves you up or down the range" },
      { type: "h3", text: "Scope" },
      { type: "p", text: "A \"full home\" can mean kitchen, wardrobes and a TV unit, or it can mean every room including false ceilings, wall panelling, lighting, a study, a pooja unit and loose furniture. Write down exactly which rooms and which items you want before comparing any quotes." },
      { type: "h3", text: "Core material" },
      { type: "p", text: "The board that cabinets are built from (MR or BWR plywood, BWP plywood, HDHMR, MDF or particle board) affects both cost and how well the furniture copes with moisture. Kitchens and bathroom vanities are where this matters most. Our guide to plywood grades covers the differences." },
      { type: "h3", text: "Finish and hardware" },
      { type: "p", text: "Laminate is the most economical finish; acrylic, PU paint, veneer and lacquered glass cost more. Soft-close hinges, tandem drawers, tall units and corner solutions in the kitchen add up quickly. Ask for these to be listed line by line." },
      { type: "h3", text: "Civil and electrical changes" },
      { type: "p", text: "Moving plumbing points, changing flooring, re-wiring or breaking walls are usually priced separately from furniture. If you are buying a new flat, ask the builder about changes before handover, when they are cheaper to make." },

      { type: "h2", text: "Costs that sit outside the per-sq.ft figure" },
      { type: "p", text: "A per-square-foot rate is a quick way to size a budget, but a home has costs that don't scale neatly with area. It helps to list them separately so they don't surprise you later." },
      { type: "ul", items: [
        "Appliances – hob, chimney, built-in oven or microwave, dishwasher. These are usually bought separately, and their sizes need to be fixed before the kitchen is designed.",
        "Loose furniture – sofas, dining tables, beds and mattresses, if they are not part of the interior scope.",
        "Soft furnishings – curtains, blinds, rugs and cushions, which can add up quickly in a home with many large windows.",
        "Light fittings and fans – the decorative pieces in particular, as opposed to the basic recessed lights in a false ceiling.",
        "Society and site costs – lift booking, debris removal, deposits that some apartment associations collect before interior work starts.",
      ] },
      img("tvUnit"),
      { type: "h2", text: "Common budgeting mistakes" },
      { type: "p", text: "The first is comparing quotes that are built on different areas. One quote on carpet area and another on super built-up area can look very different even when the work is the same. Ask every designer which area they are using." },
      { type: "p", text: "The second is comparing different scopes. A low quote that leaves out the false ceiling, lofts or the utility area is not cheaper; it is smaller. Line the quotes up room by room." },
      { type: "p", text: "The third is spending evenly. Kitchens and wardrobes are used every day and are expensive to redo, so they deserve better materials and hardware. Decorative wall panelling can be simpler, or added later." },
      { type: "h2", text: "A simple way to set your budget" },
      { type: "ol", items: [
        "Confirm your carpet area.",
        "Decide your scope room by room.",
        "Multiply the carpet area by the low and high ends of the rate to get a range.",
        "Keep 10% aside for changes you decide on during the project – there are always some.",
        "Compare quotes only when they cover the same scope, materials and hardware.",
      ] },
      { type: "p", text: "It also helps to decide early what can wait. Many families finish the kitchen, wardrobes and essential storage first and add a study unit, decorative panelling or a bar unit a year later. A designer can plan the wiring and wall reinforcement for those future items now, so adding them later does not mean breaking anything." },
      { type: "p", text: "If you would like a quick indicative figure for your own home, try the cost calculator, or book a consultation and we will measure and quote properly." },
    ],
    faqs: [
      { q: "Is interior design priced on carpet area or super built-up area?", a: "Full-home interiors are usually priced on carpet area, because the work is done inside your walls. Always check which area a quote uses before comparing it with another." },
      { q: "How much smaller is carpet area than super built-up area?", a: "It varies by project, but carpet area is often 25–35% smaller than the super built-up area in Bangalore apartment complexes. Your sale agreement or the Karnataka RERA listing gives the exact figure." },
    ],
    related: [{ label: "Estimate your interior cost", to: "/estimate" }, { label: "Plywood grades explained", to: "/guides/plywood-grades-mr-bwr-bwp-explained" }],
  };

export default guide;
