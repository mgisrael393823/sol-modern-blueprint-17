
import { Card } from "@/components/ui/card";
import { useState } from "react";

const PricingFramework = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="prose max-w-none">
        <h1 className="text-3xl font-semibold mb-6">Pricing & Incentive Framework</h1>
        <div className="bg-purple-50 p-6 rounded-lg mb-8 border border-purple-100">
          <p className="text-gray-700 leading-relaxed">
            Based on comprehensive market analysis and competitor benchmarking, 
            we've developed an innovative pricing strategy that balances positioning 
            with market penetration objectives. Our framework includes dynamic pricing models 
            and targeted incentive programs designed to optimize both engagement and revenue.
          </p>
        </div>
      </div>
      
      <div className="space-y-6">
        <Card className="p-6">
          <h2 className="text-2xl font-medium mb-4">Pricing Strategy</h2>
          <p className="text-gray-700">
            Detailed pricing framework and position strategy relative to market competitors.
          </p>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-medium mb-4">Incentive Programs</h2>
          <p className="text-gray-700">
            Strategic incentive programs designed to drive adoption and optimize customer acquisition costs.
          </p>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-medium mb-4">Revenue Optimization</h2>
          <p className="text-gray-700">
            Methodologies and approaches for continuous revenue optimization through pricing adjustments.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default PricingFramework;
