import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#F8F5F0] min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">

        {/* TITLE */}
        <h1 className="text-3xl font-bold mb-4 text-center">
          Privacy Policy
        </h1>

        <p className="text-sm text-gray-500 text-center mb-8">
          Effective Date: {new Date().toLocaleDateString()}
        </p>

        {/* CONTENT */}
        <div className="space-y-6 text-gray-700 text-sm leading-relaxed">

          <section>
            <h2 className="font-semibold text-lg mb-2">1. Introduction</h2>
            <p>
              Denova Creations ("we", "our", "us") values your privacy and is
              committed to protecting your personal information. This policy
              explains how we collect and use your data.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">2. Information We Collect</h2>
            <p>
              We may collect your name, phone number, email address, property
              details, and any information you provide through our website forms,
              calls, or WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">3. How We Use Your Information</h2>
            <p>
              We use your data to provide consultations, share quotations,
              improve our services, and contact you via phone, WhatsApp, SMS, or email.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">4. Data Sharing</h2>
            <p>
              We do not sell your personal data. Your data may be shared only with
              internal teams or trusted partners involved in service delivery.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">5. Cookies & Tracking</h2>
            <p>
              We may use tools like Google Ads, Google Analytics, and Meta Ads
              to understand user behavior and improve marketing performance.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">6. Third-Party Services</h2>
            <p>
              We may use platforms like Google, Meta, and WhatsApp, which may
              process your data as per their respective privacy policies.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">7. Your Rights</h2>
            <p>
              You may request access, correction, or deletion of your data at any time.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">8. Consent</h2>
            <p>
              By submitting your details on our website, you agree to this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">9. Contact Us</h2>
            <p>
              Denova Creations <br />
              Phone: +91 9164466606 <br />
              Email: admin@denovacreations.com
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;