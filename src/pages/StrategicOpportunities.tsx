
import { useState } from "react";
import { Card } from "@/components/ui/card";

const StrategicOpportunities = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="prose max-w-none">
        <h1 className="text-3xl font-semibold mb-6">Strategic Opportunities</h1>
        <div className="bg-purple-50 p-6 rounded-lg mb-8 border border-purple-100">
          <p className="text-gray-700 leading-relaxed mb-4">
            Explore key strategic advantages including innovative technology, premium features,
            wellness amenities, and authentic market integration to stand apart in the competitive landscape.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white/60 p-4 rounded-lg border border-purple-100">
              <h3 className="font-medium text-purple-900 mb-2">Featured Advantages</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Advantage point 1</li>
                <li>Advantage point 2</li>
                <li>Advantage point 3</li>
              </ul>
            </div>
            <div className="bg-white/60 p-4 rounded-lg border border-purple-100">
              <h3 className="font-medium text-purple-900 mb-2">Market Position</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Position point 1</li>
                <li>Position point 2</li>
                <li>Position point 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <Card className="p-6">
          <h2 className="text-2xl font-medium mb-4">Market Positioning</h2>
          <p className="text-gray-700">
            Strategic market positioning and competitive differentiation analysis.
          </p>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-medium mb-4">Growth Opportunities</h2>
          <p className="text-gray-700">
            Key growth opportunities across various market segments and customer profiles.
          </p>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-medium mb-4">Implementation Priorities</h2>
          <p className="text-gray-700">
            Prioritized implementation roadmap with resource requirements and expected outcomes.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default StrategicOpportunities;
