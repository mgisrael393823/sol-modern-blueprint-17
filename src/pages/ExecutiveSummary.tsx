import React from 'react';
import { useContent } from '@/lib/ContentProvider';
import { SectionLayout } from '@/components/layouts/SectionLayout';
import SwotCard from '@/components/patterns/SwotCard';
import RecommendationCard from '@/components/patterns/RecommendationCard';

const ExecutiveSummary = () => {
  const { content } = useContent();
  const { executiveSummary } = content;

  return (
    <SectionLayout
      title="Executive Summary"
      description={executiveSummary.introText}
    >
      <h2 className="text-2xl font-medium mb-4">SWOT Analysis</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {executiveSummary.swotItems.map((item, index) => (
          <SwotCard key={`${item.title}-${index}`} data={item} />
        ))}
      </div>

      <h2 className="text-2xl font-medium mt-8 mb-4">Strategic Recommendations</h2>
      <div className="space-y-4">
        {executiveSummary.recommendations.map((rec, index) => (
          <RecommendationCard key={`recommendation-${index}`} data={rec} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default ExecutiveSummary;