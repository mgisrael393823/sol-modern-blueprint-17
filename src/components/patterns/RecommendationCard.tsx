import React from 'react';
import { cn } from '@/lib/utils';
import { Recommendation } from '@/lib/content-types';

interface RecommendationCardProps {
  /**
   * Recommendation data
   */
  data: Recommendation;
  
  /**
   * Additional class names
   */
  className?: string;
}

/**
 * RecommendationCard component displays a strategic recommendation with title and content.
 * Used in the executive summary and strategic opportunities sections.
 */
export const RecommendationCard: React.FC<RecommendationCardProps> = ({
  data,
  className
}) => {
  return (
    <div 
      className={cn(
        "bg-themePrimaryLight/30 rounded-lg p-6",
        className
      )}
    >
      <h3 className="text-lg font-medium text-themePrimary mb-2">
        {data.priority ? `${data.priority}. ${data.title}` : data.title}
      </h3>
      <p className="text-textSecondary">{data.content}</p>
    </div>
  );
};

export default RecommendationCard;