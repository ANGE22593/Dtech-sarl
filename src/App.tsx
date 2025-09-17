import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import DevisPage from "./pages/DevisPage";
import FAQPage from "./pages/FAQPage";
import CivilEngineeringPage from "./pages/CivilEngineeringPage";
import TechnologyPage from "./pages/TechnologyPage";
import EnergyPage from "./pages/EnergyPage";
import RealisationsPage from "./pages/RealisationsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import NewsPage from "./pages/NewsPage";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/civil" element={<CivilEngineeringPage />} />
          <Route path="/services/tech" element={<TechnologyPage />} />
          <Route path="/services/energy" element={<EnergyPage />} />
          <Route path="/devis" element={<DevisPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/realisations" element={<RealisationsPage />} />
          <Route path="/realisations/:projectId" element={<ProjectDetailPage />} />
          <Route path="/actualites" element={<NewsPage />} />

          {/* Admin Routes */}
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
