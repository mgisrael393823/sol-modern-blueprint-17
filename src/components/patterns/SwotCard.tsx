import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { 
  ShieldCheckIcon, 
  ShieldAlertIcon, 
  LightbulbIcon, 
  TrendingUpIcon 
} from 'lucide-react';
import { SwotItem } from '@/lib/content-types';

interface SwotCardProps {
  /**
   * SWOT item data
   */
  data: SwotItem;
  
  /**
   * Additional class names
   */
  className?: string;
}

/**
 * SwotCard component displays a SWOT analysis item with appropriate icon and bullet points.
 * Used in the executive summary section.
 */
export const SwotCard: React.FC<SwotCardProps> = ({
  data,
  className
}) => {
  // Render the appropriate icon based on the SWOT category
  const renderIcon = () => {
    switch(data.title.toLowerCase()) {
      case 'strengths':
        return <ShieldCheckIcon className="h-6 w-6 text-green-600" />;
      case 'weaknesses':
        return <ShieldAlertIcon className="h-6 w-6 text-red-600" />;
      case 'opportunities':
        return <LightbulbIcon className="h-6 w-6 text-yellow-600" />;
      case 'threats':
        return <TrendingUpIcon className="h-6 w-6 text-blue-600" />;
      default:
        return null;
    }
  };

  return (
    <Card className={cn("h-full", className)}>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-3">
          {renderIcon()}
          <h3 className="text-xl font-medium">{data.title}</h3>
        </div>
        <ul className="list-disc list-inside space-y-2">
          {data.points.map((point, index) => (
            <li key={index} className="text-textSecondary">{point}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default SwotCard;