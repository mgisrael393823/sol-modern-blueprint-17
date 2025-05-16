import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useContent } from "@/lib/ContentProvider";
import { SectionLayout } from "@/components/layouts/SectionLayout";
import { ContentRow, ContentColumn } from "@/components/layouts/GridLayouts";
import { RecommendationCard } from "@/components/patterns/RecommendationCard";

const StrategicOpportunities = () => {
  const { content } = useContent();
  const { strategicOpportunities } = content;

  // Function to determine the color based on impact level
  const getImpactColor = (impact: string) => {
    switch(impact) {
      case 'high':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'medium':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'low':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Function to determine the color based on effort level
  const getEffortColor = (effort: string) => {
    switch(effort) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <SectionLayout
      title="Strategic Opportunities"
      description={strategicOpportunities.overview}
    >
      <section className="space-y-6">
        <h2 className="text-2xl font-medium">Opportunity Analysis</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {strategicOpportunities.analysis}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {strategicOpportunities.opportunities.map((opportunity, index) => (
            <Card 
              key={index} 
              className="hover:shadow-md transition-shadow bg-gradient-to-br from-white to-themePrimaryLight/10"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-medium text-themePrimary">{opportunity.title}</h3>
                  <Badge className="ml-2">{`Priority ${opportunity.priority}`}</Badge>
                </div>
                
                <p className="text-gray-700 mb-4">{opportunity.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline" className={getImpactColor(opportunity.impact)}>
                    Impact: {opportunity.impact}
                  </Badge>
                  <Badge variant="outline" className={getEffortColor(opportunity.effort)}>
                    Effort: {opportunity.effort}
                  </Badge>
                  {opportunity.timeline && (
                    <Badge variant="outline" className="bg-blue-50 text-blue-800 border-blue-200">
                      Timeline: {opportunity.timeline}
                    </Badge>
                  )}
                </div>

                {opportunity.metrics && Object.keys(opportunity.metrics).length > 0 && (
                  <div className="mt-4 pt-4 border-t border-themePrimary/10">
                    <h4 className="text-sm font-medium mb-2 text-themePrimary">Key Metrics</h4>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {Object.entries(opportunity.metrics).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-sm">
                          <span className="text-gray-600">{key}:</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6 mt-8">
        <h2 className="text-2xl font-medium">Strategic Recommendations</h2>
        <div className="grid grid-cols-1 gap-6">
          {strategicOpportunities.recommendations.map((recommendation, index) => (
            <RecommendationCard 
              key={index}
              data={recommendation}
            />
          ))}
        </div>
      </section>

      <div className="mt-8 p-6 bg-themePrimaryLight rounded-lg border border-themePrimary/10">
        <h2 className="text-2xl font-medium mb-4">Implementation Strategy</h2>
        <p className="text-gray-700 leading-relaxed">
          Based on the prioritized opportunities above, we recommend a phased implementation approach focusing first on high-impact, low-effort initiatives to generate early wins, followed by strategic investments in higher-effort opportunities with substantial long-term potential.
        </p>
      </div>
    </SectionLayout>
  );
};

export default StrategicOpportunities;