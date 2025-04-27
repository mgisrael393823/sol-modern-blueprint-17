
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Lock } from "lucide-react";

const HomePage = () => {
  const sections = [
    { 
      name: "Executive Summary", 
      path: "/executive-summary", 
      gated: false,
      description: "Comprehensive market analysis and strategic recommendations" 
    },
    { 
      name: "Market Intelligence", 
      path: "/market-intelligence", 
      gated: false,
      description: "Detailed market trends, demographics, and demand analysis" 
    },
    { 
      name: "Competitive Landscape", 
      path: "/competitive-landscape", 
      gated: false,
      description: "In-depth competitor analysis and market positioning" 
    },
    { 
      name: "Strategic Opportunities", 
      path: "/strategic-opportunities", 
      gated: true,
      description: "Key growth opportunities and strategic initiatives" 
    },
    { 
      name: "Pricing & Incentive Framework", 
      path: "/pricing-framework", 
      gated: true,
      description: "Detailed pricing strategy and incentive recommendations" 
    },
    { 
      name: "Go-to-Market Roadmap", 
      path: "/roadmap", 
      gated: true,
      description: "Implementation timeline and execution strategy" 
    },
    { 
      name: "Opportunity Map", 
      path: "/opportunity-map", 
      gated: false,
      description: "Visual mapping of market opportunities and growth potential" 
    }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
          SOL Modern Strategy Blueprint
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          A comprehensive market analysis and strategic framework for SOL Modern's premium multifamily development. This blueprint provides detailed insights into market dynamics, competitive positioning, and strategic recommendations for optimizing lease-up performance and long-term value creation.
        </p>
      </div>

      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <Link to={section.path} key={section.path} className="no-underline group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-purple-200">
                <CardContent className="p-6 flex flex-col space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium group-hover:text-purple-600 transition-colors">
                      {section.name}
                    </h3>
                    {section.gated && (
                      <Lock className="h-4 w-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                    )}
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{section.description}</p>
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
