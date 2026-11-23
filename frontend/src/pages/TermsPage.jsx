import React from "react";
import { Link } from "react-router-dom";
import { companyInfo } from "../data/mock";
import { PRICING_DISCLAIMER } from "../data/pricing";

// Website terms of use. Project contracts (scope, payment schedule, warranty)
// are agreed separately in writing for each client, so nothing about those is
// stated here.
const TermsPage = () => {
  return (
    <div className="bg-[#F8F5F0] min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-4 text-center">Terms of Use</h1>

        <p className="text-sm text-gray-500 text-center mb-8">
          Effective Date: 23 November 2026
        </p>

        <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
          <section>
            <h2 className="font-semibold text-lg mb-2">1. About These Terms</h2>
            <p>
              These terms apply to your use of denovacreations.com (the
              "website"), operated by Denova Creations ("we", "our", "us"),
              an interior design studio in Bengaluru. By using the website you
              agree to these terms. If you do not agree, please do not use the
              website.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">2. Information on This Website</h2>
            <p>
              The guides, articles, project descriptions and other content on
              this website are for general information. They are not a
              substitute for a site visit, measurements or professional advice
              for your specific home. We try to keep the information accurate
              and up to date, but we do not guarantee that it is complete or
              free of errors.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">3. Prices and Estimates</h2>
            <p>
              Prices and ranges shown on the website, and figures from the
              online cost calculator, are indicative only and are not a
              quotation or an offer. {PRICING_DISCLAIMER} Any project we carry
              out is governed by a separate written quotation and agreement.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">4. Photos and Content</h2>
            <p>
              Project photos, text, logos and designs on this website belong
              to Denova Creations unless stated otherwise. You may share links
              to our pages, but you may not copy, republish or use our content
              or photos for commercial purposes without our written
              permission.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">5. Enquiries You Send Us</h2>
            <p>
              When you submit a form, call or message us, please give accurate
              details. How we use that information is explained in our{" "}
              <Link to="/privacy-policy" className="underline">Privacy Policy</Link>.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">6. Advertising and Third-Party Links</h2>
            <p>
              Some pages show ads served by Google AdSense, and the website may
              link to other websites. We do not control and are not responsible
              for third-party ads, websites or their content. Ads shown on this
              website are not endorsements by Denova Creations.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">7. Limitation of Liability</h2>
            <p>
              To the extent permitted by law, Denova Creations is not liable for
              any loss arising from your use of, or reliance on, the information
              on this website.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">8. Changes and Governing Law</h2>
            <p>
              We may update these terms from time to time; the effective date
              above shows the latest version. These terms are governed by the
              laws of India, and courts in Bengaluru, Karnataka have
              jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">9. Contact Us</h2>
            <p>
              {companyInfo.name} <br />
              {companyInfo.address} <br />
              Phone: {companyInfo.primaryPhone} <br />
              Email: {companyInfo.email}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
