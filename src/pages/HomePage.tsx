
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Lock } from "lucide-react";

const HomePage = () => {
  const sections = [
    { 
      name: "Executive Summary", 
      path: "/executive-summary", 
      gated: false,
      description: "Overview of key findings and recommendations" 
    },
    { 
      name: "Market Intelligence", 
      path: "/market-intelligence", 
      gated: false,
      description: "Market analysis and trends" 
    },
    { 
      name: "Competitive Landscape", 
      path: "/competitive-landscape", 
      gated: false,
      description: "Analysis of competitors and market positioning" 
    },
    { 
      name: "Strategic Opportunities", 
      path: "/strategic-opportunities", 
      gated: true,
      description: "Identified opportunities for growth and differentiation" 
    },
    { 
      name: "Pricing & Incentive Framework", 
      path: "/pricing-framework", 
      gated: true,
      description: "Pricing strategy and incentive structure" 
    },
    { 
      name: "Go-to-Market Roadmap", 
      path: "/roadmap", 
      gated: true,
      description: "Implementation timeline and key milestones" 
    },
    { 
      name: "Opportunity Map", 
      path: "/opportunity-map", 
      gated: false,
      description: "Visual representation of market opportunities" 
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          SOL Modern – Lease-Up Strategy & Competitive Blueprint
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          A comprehensive analysis and strategic framework for optimizing the lease-up process for SOL Modern properties. This blueprint analyzes market dynamics, competitive positioning, and outlines strategic approaches to maximize occupancy rates and revenue potential.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-medium mb-6">Table of Contents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((section) => (
            <Link to={section.path} key={section.path} className="no-underline">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">{section.name}</h3>
                    {section.gated && <Lock className="h-4 w-4 text-gray-500" />}
                  </div>
                  <p className="text-sm text-gray-500">{section.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
