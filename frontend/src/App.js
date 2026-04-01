import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import CityLanding from "./pages/CityLanding";

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

// ✅ Layout wrapper (kept same)
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

        {/* ✅ Layout wraps ONLY the pages */}
        <Layout>
          <Routes>

            {/* Static Pages */}
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

            {/* ✅ Dynamic Landing Page */}
            <Route path="/interior-designers/:city" element={<CityLanding />}/>

          </Routes>
        </Layout>

        {/* Toast outside layout */}
        <Toaster position="top-right" />

      </BrowserRouter>
    </div>
  );
}

export default App;