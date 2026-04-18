import Home from "./pages/Home";
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import CityLanding from "./pages/CityLanding";
import AdsLanding from "./pages/AdsLanding";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Koramangala from "./pages/locations/Koramangala";
import HSRLayout from "./pages/locations/HSRLayout";
import Whitefield from "./pages/locations/Whitefield";
import Marathahalli from "./pages/locations/Marathahalli";
import Indiranagar from "./pages/locations/Indiranagar";
import SarjapurRoad from "./pages/locations/SarjapurRoad";
import Hebbal from "./pages/locations/Hebbal";
import Yelahanka from "./pages/locations/Yelahanka";
import JPNagar from "./pages/locations/JPNagar";

// Layout Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import FloatingCTA from "./components/FloatingCTA";
import FloatingLeadForm from "./components/FloatingLeadForm";

// Page Components
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ProcessPage from "./pages/ProcessPage";
import ContactPage from "./pages/ContactPage";
import EstimatePage from "./pages/EstimatePage";
import MaterialsPage from "./pages/MaterialsPage";
import GalleryPage from "./pages/GalleryPage";
import ThankYou from "./pages/ThankYou";

// Layout wrapper
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <FloatingCTA />
      <FloatingLeadForm />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          {/* ✅ ADS PAGE (NO LAYOUT) */}
          <Route path="/lp/interior-design-bangalore" element={<AdsLanding />} />

          {/* ✅ THANK YOU PAGE (NO DISTRACTION) */}
          <Route path="/thank-you" element={<ThankYou />} />

          {/* ✅ ALL OTHER PAGES WITH LAYOUT */}
          <Route
            path="*"
            element={
              <Layout>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/gallery" element={<GalleryPage />} />
                  <Route path="/materials" element={<MaterialsPage />} />
                  <Route path="/testimonials" element={<TestimonialsPage />} />
                  <Route path="/process" element={<ProcessPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/estimate" element={<EstimatePage />} />
                  <Route path="/interior-designers/koramangala" element={<Koramangala />} />
                  <Route path="/interior-designers/hsr-layout" element={<HSRLayout />} />
                  <Route path="/interior-designers/whitefield" element={<Whitefield />} />
                  <Route path="/interior-designers/marathahalli" element={<Marathahalli />} />
                  <Route path="/interior-designers/indiranagar" element={<Indiranagar />} />
                  <Route path="/interior-designers/sarjapur-road" element={<SarjapurRoad />} />
                  <Route path="/interior-designers/hebbal" element={<Hebbal />} />
                  <Route path="/interior-designers/yelahanka" element={<Yelahanka />} />
                  <Route path="/interior-designers/jp-nagar" element={<JPNagar />} />

                  {/* ✅ EXISTING DYNAMIC ROUTE (KEEP THIS) */}
                  <Route path="/interior-designers/:city" element={<CityLanding />} />

                  {/* ✅ NEW STATIC SEO ROUTES (VERY IMPORTANT) */}
                  

                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                </Routes>
              </Layout>
            }
          />

        </Routes>

        <Toaster position="top-right" />

      </BrowserRouter>
    </div>
  );
}

export default App;