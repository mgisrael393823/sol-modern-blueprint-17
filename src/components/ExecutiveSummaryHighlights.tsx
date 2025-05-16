import React from 'react';
import { 
  ShieldCheckIcon, 
  ShieldAlertIcon, 
  LightbulbIcon, 
  TrendingUpIcon,
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import { SwotItem, Recommendation } from '@/lib/content-types';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ExecutiveSummaryHighlightsProps {
  swotItems: SwotItem[];
  recommendations: Recommendation[];
  introText: string;
}

export const ExecutiveSummaryHighlights: React.FC<ExecutiveSummaryHighlightsProps> = ({
  swotItems,
  recommendations,
  introText
}) => {
  // Function to determine priority badge color
  const getPriorityColor = (priority: number | undefined) => {
    if (!priority) return "bg-gray-400";
    if (priority === 1) return "bg-red-500";
    if (priority === 2) return "bg-orange-500";
    if (priority === 3) return "bg-yellow-500";
    return "bg-blue-500";
  };

  // Function to render SWOT icon
  const renderSwotIcon = (title: string) => {
    switch(title.toLowerCase()) {
      case 'strengths':
        return <ShieldCheckIcon className="h-5 w-5 text-green-600 flex-shrink-0" />;
      case 'weaknesses':
        return <ShieldAlertIcon className="h-5 w-5 text-red-600 flex-shrink-0" />;
      case 'opportunities':
        return <LightbulbIcon className="h-5 w-5 text-yellow-600 flex-shrink-0" />;
      case 'threats':
        return <TrendingUpIcon className="h-5 w-5 text-blue-600 flex-shrink-0" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      {/* Summary Header */}
      <div className="px-6 py-5 border-b border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800">Executive Summary</h2>
        <p className="mt-2 text-gray-600">{introText.length > 200 ? introText.substring(0, 200) + '...' : introText}</p>
      </div>
      
      {/* Dashboard-style overview */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* SWOT Analysis Dashboard */}
          <div className="space-y-5">
            <h3 className="text-lg font-medium text-gray-700 pb-2 border-b border-gray-100">SWOT Analysis Overview</h3>
            <div className="grid grid-cols-2 gap-4">
              {swotItems.map((item, index) => (
                <div 
                  key={`${item.title}-${index}`} 
                  className="border border-gray-100 rounded-lg p-4 bg-gray-50"
                >
                  <div className="flex items-center gap-2 mb-3">
                    {renderSwotIcon(item.title)}
                    <h4 className="text-sm font-medium text-gray-700">{item.title}</h4>
                  </div>
                  
                  <ul className="space-y-1.5">
                    {item.points.slice(0, 3).map((point, idx) => (
                      <li key={idx} className="flex items-start text-xs text-gray-600">
                        <span className="inline-block h-1 w-1 bg-black rounded-full mt-1.5 mr-1.5 flex-shrink-0"></span>
                        <span className="line-clamp-2">{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {item.points.length > 3 && (
                    <div className="text-xs text-gray-500 mt-2 flex items-center">
                      <span>+{item.points.length - 3} more</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Top Recommendations */}
          <div className="space-y-5">
            <h3 className="text-lg font-medium text-gray-700 pb-2 border-b border-gray-100">Key Recommendations</h3>
            <div className="space-y-3">
              {recommendations.slice(0, 3).map((rec, index) => (
                <div 
                  key={`recommendation-${index}`} 
                  className="flex gap-3 p-3 border border-gray-100 rounded-lg"
                >
                  <Badge 
                    className={cn(
                      "h-6 w-6 rounded-full flex items-center justify-center p-0 text-white text-sm font-medium flex-shrink-0",
                      getPriorityColor(rec.priority)
                    )}
                  >
                    {rec.priority || "-"}
                  </Badge>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 line-clamp-1">{rec.title}</h4>
                    <p className="text-xs text-gray-600 line-clamp-2 mt-1">{rec.content}</p>
                  </div>
                </div>
              ))}
              
              {recommendations.length > 3 && (
                <div className="text-sm text-gray-600 flex items-center justify-end">
                  <span className="flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1 text-gray-400" />
                    {recommendations.length - 3} more recommendations
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 px-6 py-3 border-t border-gray-200 flex justify-between items-center">
        <span className="text-sm text-gray-500">Last updated: May 16, 2025</span>
        <span className="text-sm text-gray-600 font-medium flex items-center">
          View complete analysis
          <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
        </span>
      </div>
    </div>
  );
};

export default ExecutiveSummaryHighlights;