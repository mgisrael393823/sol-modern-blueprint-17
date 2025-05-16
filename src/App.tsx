import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ContentProvider } from "@/lib/ContentProvider";
import BaseLayout from "@/components/layouts/BaseLayout";

// Pages
import HomePage from "./pages/HomePage";
import MarketIntelligence from "./pages/MarketIntelligence";
import CompetitiveLandscape from "./pages/CompetitiveLandscape";
import StrategicOpportunities from "./pages/StrategicOpportunities";
import PricingFramework from "./pages/PricingFramework";
import GoToMarketRoadmap from "./pages/GoToMarketRoadmap";
import OpportunityMap from "./pages/OpportunityMap";
import NotFound from "./pages/NotFound";

// Initialize query client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ContentProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BaseLayout />}>
              <Route index element={<HomePage />} />
              <Route path="executive-summary" element={<Navigate to="/" replace />} />
              <Route path="market-intelligence" element={<MarketIntelligence />} />
              <Route path="competitive-landscape" element={<CompetitiveLandscape />} />
              <Route path="strategic-opportunities" element={<StrategicOpportunities />} />
              <Route path="pricing-framework" element={<PricingFramework />} />
              <Route path="roadmap" element={<GoToMarketRoadmap />} />
              <Route path="opportunity-map" element={<OpportunityMap />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ContentProvider>
  </QueryClientProvider>
);

export default App;