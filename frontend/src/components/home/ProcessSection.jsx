import React from 'react';

const processSteps = [
  {
    num: "01",
    title: "Creative Consultation",
    desc: "We analyze your lifestyle preferences, measure site layouts, and detail budget boundaries.",
  },
  {
    num: "02",
    title: "Concept & 3D Renders",
    desc: "Our architects model beautiful, highly realistic 3D designs showing colors, materials, and lights.",
  },
  {
    num: "03",
    title: "Material Curation",
    desc: "Touch and select plywood, premium laminates, acrylics, and hardware at our modern studio.",
  },
  {
    num: "04",
    title: "Precision Fabrication",
    desc: "Custom components are machine-finished with factory edge-banding to avoid manual errors.",
  },
  {
    num: "05",
    title: "Turnkey Reveal",
    desc: "Site installation by certified engineers, final deep cleanup, and formal luxury handover."
  }
];

const ProcessSection = () => {
  return (
    <section className="py-20 md:py-24 bg-white border-t border-stone-100">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
          <span className="text-[#0F3D3E] font-bold tracking-widest uppercase text-xs block">
            Orderly Timelines
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F3D3E] font-serif leading-tight">
            Our Design Journey
          </h2>
          <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
            We make structural interior design a simple, enjoyable, and completely transparent step-by-step experience.
          </p>
        </div>

        {/* Steps Workflow Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {processSteps.map((step, idx) => (
            <div key={idx} className="flex flex-col text-left space-y-4 relative group">
              {/* Step badge */}
              <div className="text-4xl md:text-5xl font-bold font-serif text-[#E8D8C4]/60 group-hover:text-[#E8D8C4] transition-colors duration-300">
                {step.num}
              </div>

              <h3 className="text-base md:text-lg font-bold text-[#0F3D3E] font-serif tracking-tight">
                {step.title}
              </h3>

              <p className="text-xs text-stone-500 leading-relaxed">
                {step.desc}
              </p>

              {/* Desktop connector line */}
              {idx < 4 && (
                <div className="hidden lg:block absolute top-6 left-[80%] w-full h-[1px] bg-stone-200 -z-10 group-hover:bg-[#E8D8C4] transition-colors duration-500"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
