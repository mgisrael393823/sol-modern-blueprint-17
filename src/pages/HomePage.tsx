
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Lock } from "lucide-react";

const HomePage = () => {
  const sections = [{
    name: "Executive Summary",
    path: "/executive-summary",
    gated: false,
    description: "Comprehensive market analysis and strategic recommendations"
  }, {
    name: "Market Intelligence",
    path: "/market-intelligence",
    gated: false,
    description: "Detailed market trends, demographics, and demand analysis"
  }, {
    name: "Competitive Landscape",
    path: "/competitive-landscape",
    gated: false,
    description: "In-depth competitor analysis and market positioning"
  }, {
    name: "Strategic Opportunities",
    path: "/strategic-opportunities",
    gated: false,
    description: "Key growth opportunities and strategic initiatives"
  }, {
    name: "Pricing & Incentive Framework",
    path: "/pricing-framework",
    gated: false,
    description: "Detailed pricing strategy and incentive recommendations"
  }, {
    name: "Go-to-Market Roadmap",
    path: "/roadmap",
    gated: false,
    description: "Implementation timeline and execution strategy"
  }, {
    name: "Opportunity Map",
    path: "/opportunity-map",
    gated: false,
    description: "Visual mapping of market opportunities and growth potential"
  }];
  
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="text-center space-y-6">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
          Strategy Blueprint Template
        </h1>
        <p className="text-base md:text-lg text-textSecondary max-w-3xl mx-auto leading-relaxed">
          A comprehensive market analysis and strategic framework template. This blueprint provides detailed insights into market dynamics, competitive positioning, and strategic recommendations for optimizing performance and long-term value creation.
        </p>
      </div>

      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map(section => (
            <Link to={section.path} key={section.path} className="no-underline group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-purple-200">
                <CardContent className="p-6 flex flex-col space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base md:text-lg font-semibold normal-case tracking-normal group-hover:text-purple-600 transition-colors">
                      {section.name}
                    </h3>
                    {section.gated && <Lock className="h-4 w-4 text-gray-400 group-hover:text-purple-400 transition-colors" />}
                  </div>
                  <p className="text-sm text-textSecondary leading-relaxed">{section.description}</p>
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
