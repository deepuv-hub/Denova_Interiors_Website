```jsx
import React from "react";

const ModularKitchenBangalore = () => {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative px-6 lg:px-20 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
              Premium Modular Kitchen Interiors
            </p>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Premium Modular Kitchen Designers In Bangalore
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Custom modular kitchens with smart storage, elegant finishes
              and turnkey execution tailored for modern Bangalore homes.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="bg-black text-white px-8 py-4 rounded-full text-sm font-medium hover:opacity-90 transition"
              >
                Book Free Consultation
              </a>

              <a
                href="https://wa.me/919591039597"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black px-8 py-4 rounded-full text-sm font-medium hover:bg-black hover:text-white transition"
              >
                WhatsApp Us
              </a>
            </div>

            {/* TRUST BAR */}
            <div className="flex flex-wrap gap-6 mt-10 text-sm text-gray-600">
              <span>150+ Homes Delivered</span>
              <span>Premium Materials</span>
              <span>Turnkey Execution</span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src="/images/modular-kitchen-hero.webp"
              alt="Premium Modular Kitchen Bangalore"
              className="w-full h-[500px] object-cover rounded-3xl"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="px-6 lg:px-20 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Designed For Modern Living
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Functional layouts, premium finishes and elegant modular solutions
              crafted for contemporary homes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "Smart Storage Solutions",
              "Premium Finishes",
              "Soft Close Hardware",
              "Space Optimized Layouts",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <h3 className="font-semibold text-lg">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 lg:px-20 py-20">
        <div className="max-w-5xl mx-auto bg-black rounded-3xl text-white text-center px-8 py-16">

          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Start Your Dream Kitchen Project
          </h2>

          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Book a free modular kitchen consultation with Denova Creations today.
          </p>

          <a
            href="/contact"
            className="bg-white text-black px-8 py-4 rounded-full text-sm font-medium inline-block hover:opacity-90 transition"
          >
            Get Free Kitchen Quote
          </a>
        </div>
      </section>

    </main>
  );
};

export default ModularKitchenBangalore;
```
