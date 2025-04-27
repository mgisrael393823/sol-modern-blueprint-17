
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ExecutiveSummary from "./pages/ExecutiveSummary";
import MarketIntelligence from "./pages/MarketIntelligence";
import CompetitiveLandscape from "./pages/CompetitiveLandscape";
import StrategicOpportunities from "./pages/StrategicOpportunities";
import PricingFramework from "./pages/PricingFramework";
import GoToMarketRoadmap from "./pages/GoToMarketRoadmap";
import OpportunityMap from "./pages/OpportunityMap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="executive-summary" element={<ExecutiveSummary />} />
            <Route path="market-intelligence" element={<MarketIntelligence />} />
            <Route path="competitive-landscape" element={<CompetitiveLandscape />} />
            <Route path="strategic-opportunities" element={<StrategicOpportunities />} />
            <Route path="pricing-framework" element={<PricingFramework />} />
            <Route path="roadmap" element={<GoToMarketRoadmap />} />
            <Route path="opportunity-map" element={<OpportunityMap />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
