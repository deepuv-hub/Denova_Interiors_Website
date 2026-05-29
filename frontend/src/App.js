import React, { Suspense, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import ModularKitchenBangalore from "./pages/ModularKitchenBangalore";

// Lazy pages
const AdsLanding = React.lazy(() => import("./pages/AdsLanding"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const ServicesPage = React.lazy(() => import("./pages/ServicesPage"));
const ProjectsPage = React.lazy(() => import("./pages/ProjectsPage"));
const TestimonialsPage = React.lazy(() => import("./pages/TestimonialsPage"));
const ProcessPage = React.lazy(() => import("./pages/ProcessPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const EstimatePage = React.lazy(() => import("./pages/EstimatePage"));
const MaterialsPage = React.lazy(() => import("./pages/MaterialsPage"));
const PortfolioPage = React.lazy(() => import("./pages/PortfolioPage"));
const ThankYou = React.lazy(() => import("./pages/ThankYou"));
const CityLanding = React.lazy(() => import("./pages/CityLanding"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const CategoryPage = React.lazy(() => import("./pages/CategoryPage"));
const ProjectPage = React.lazy(() => import("./pages/ProjectPage"));

// Layout components (keep normal)
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import FloatingCTA from "./components/FloatingCTA";
import FloatingLeadForm from "./components/FloatingLeadForm";
import InternalLinksCTA from "./components/InternalLinksCTA";
import SEO from "./components/SEO";

const withSEO = (Component) => (
  <>
    <SEO />
    <Component />
  </>
);

// Layout wrapper
const Layout = ({ children }) => (
  <>
    <Header />
    <main className="min-h-screen">{children}</main>
    <InternalLinksCTA />
    <Footer />
    <FloatingCTA />
    <FloatingLeadForm />
  </>
);

function App() {
  useEffect(() => {
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "wj9mkjr37f");
  }, []);

  useEffect(() => {
  const params = new URLSearchParams(window.location.search);

  const trackingParams = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "gclid"
  ];

  trackingParams.forEach((param) => {
    const value = params.get(param);

    if (value) {
      localStorage.setItem(param, value);
    }
  });

  // Save first landing page
  if (!localStorage.getItem("landing_page")) {
    localStorage.setItem("landing_page", window.location.href);
  }
}, []);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>

            <Route path="/lp/interior-design-bangalore" element={<AdsLanding />} />
            <Route path="/thank-you" element={<ThankYou />} />

            <Route
              path="*"
              element={
                <Layout>
                  <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/about" element={withSEO(AboutPage)} />
  <Route path="/services" element={withSEO(ServicesPage)} />
  <Route path="/projects" element={withSEO(ProjectsPage)} />

  {/* ✅ PORTFOLIO SYSTEM (NEW) */}
  <Route path="/portfolio" element={withSEO(PortfolioPage)} />
  <Route path="/portfolio/:type/:category" element={<CategoryPage />} />
  <Route path="/portfolio/:type/:category/:projectId" element={<ProjectPage />} />

  <Route path="/materials" element={withSEO(MaterialsPage)} />
  <Route path="/testimonials" element={withSEO(TestimonialsPage)} />
  <Route path="/process" element={withSEO(ProcessPage)} />
  <Route path="/contact" element={withSEO(ContactPage)} />
  <Route path="/estimate" element={<EstimatePage />} />
  <Route path="/interior-designers/:city" element={<CityLanding />} />
  <Route path="/privacy-policy" element={withSEO(PrivacyPolicy)} />
  <Route path="/modular-kitchen-bangalore" element={<ModularKitchenBangalore />} />
  
</Routes>
                </Layout>
              }
            />

          </Routes>
        </Suspense>

        <Toaster position="top-right" />
      </BrowserRouter>
    </div>

    

    
  );
}

export default App;
