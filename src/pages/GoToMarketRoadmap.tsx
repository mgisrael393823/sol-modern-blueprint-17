
import { Card } from "@/components/ui/card";
import { useState } from "react";

const GoToMarketRoadmap = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="prose max-w-none">
        <h1 className="text-3xl font-semibold mb-6">Go-to-Market Roadmap</h1>
        <div className="bg-purple-50 p-6 rounded-lg mb-8 border border-purple-100">
          <p className="text-gray-700 leading-relaxed">
            Our detailed implementation roadmap outlines key milestones and strategic initiatives 
            across a specified timeline. The plan encompasses marketing activation strategies, 
            and engagement programs, with specific KPIs and success metrics for each phase.
          </p>
        </div>
      </div>
      
      <div className="space-y-6">
        <Card className="p-6">
          <h2 className="text-2xl font-medium mb-4">Implementation Timeline</h2>
          <p className="text-gray-700">
            Detailed roadmap content would be displayed here after authentication.
          </p>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-medium mb-4">Marketing Activation</h2>
          <p className="text-gray-700">
            Comprehensive marketing strategy detailing channel activation, messaging framework, and campaign timeline.
          </p>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-medium mb-4">KPIs & Success Metrics</h2>
          <p className="text-gray-700">
            Key performance indicators and success metrics for measuring implementation effectiveness and ROI.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default GoToMarketRoadmap;
