import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/enhanced-accordion';
import { 
  ShieldCheckIcon, 
  ShieldAlertIcon, 
  LightbulbIcon, 
  TrendingUpIcon,
  FlagIcon
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
  // State to track expanded SWOT items
  const [expandedSwotItems, setExpandedSwotItems] = React.useState<Record<string, boolean>>({});
  // State to track if all recommendations are visible
  const [showAllRecommendations, setShowAllRecommendations] = React.useState(false);
  
  // Get only the highest priority recommendations (up to 3) unless showing all
  const displayedRecommendations = showAllRecommendations
    ? [...recommendations].sort((a, b) => (a.priority || 999) - (b.priority || 999))
    : [...recommendations].sort((a, b) => (a.priority || 999) - (b.priority || 999)).slice(0, 3);
    
  // Toggle expanded state for a SWOT item
  const toggleSwotItemExpand = (index: string) => {
    setExpandedSwotItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

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
    <div className="mb-12 rounded-xl overflow-hidden bg-white shadow-[0_2px_4px_rgba(0,0,0,0.05)] border border-gray-200 border-t-2 border-t-[#5A6B7D]">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-themePrimary/10 to-themePrimaryLight/20 py-4 px-5">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Executive Summary
        </h2>
      </div>
      
      {/* Introduction section */}
      <div className="px-5 pt-4 pb-6 border-b border-gray-200">
        <p className="text-sm sm:text-base text-textSecondary leading-relaxed">
          {introText.length > 200 ? introText.substring(0, 200) + '...' : introText}
        </p>
      </div>

      {/* SWOT Analysis */}
      <Accordion type="single" collapsible className="transition-all duration-200 pt-6">
        <AccordionItem value="swot" className="border-b border-gray-200">
          <AccordionTrigger className="py-4 px-5 text-[18px] font-medium transition-all duration-200 text-gray-700 relative pl-7 hover:bg-gray-50 group">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#5A6B7D] rounded-r group-hover:h-7 transition-all duration-200"></span>
            <span className="group-hover:text-[#5A6B7D] transition-colors duration-200">SWOT Analysis</span>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-6 pt-5 transition-all duration-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {swotItems.map((item, index) => (
                <div 
                  key={`${item.title}-${index}`} 
                  className="bg-white p-4 rounded-lg transition-all duration-300 hover:shadow-md border border-gray-200 hover:border-[#5A6B7D]/40 hover:bg-gradient-to-b hover:from-white hover:to-[#5A6B7D]/5 hover:animate-card-hover flex flex-col h-full"
                  style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                    {renderSwotIcon(item.title)}
                    <h3 className="text-sm text-gray-600 font-medium">{item.title}</h3>
                  </div>
                  <ul className="space-y-2 pl-1 flex-grow">
                    {(expandedSwotItems[`${item.title}-${index}`] ? item.points : item.points.slice(0, 3)).map((point, idx) => (
                      <li key={idx} 
                          className={cn(
                            "flex items-start text-sm text-textSecondary",
                            expandedSwotItems[`${item.title}-${index}`] && idx >= 3 && "animate-expand-item"
                          )}
                        >
                        <span className="inline-block h-1.5 w-1.5 bg-themePrimary/70 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-3">
                    {item.points.length > 3 && !expandedSwotItems[`${item.title}-${index}`] && (
                      <button 
                        className="text-[10px] sm:text-xs bg-white text-[#5A6B7D] px-3 sm:px-4 py-1.5 rounded-full hover:bg-[#5A6B7D]/10 transition-all duration-200 inline-flex items-center border border-[#5A6B7D]/20 shadow-sm hover:shadow hover:scale-105"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleSwotItemExpand(`${item.title}-${index}`);
                        }}
                      >
                        <span className="mr-1 sm:mr-1.5 text-[#5A6B7D] font-medium">+</span>
                        {item.points.length - 3} more points
                      </button>
                    )}
                    {expandedSwotItems[`${item.title}-${index}`] && (
                      <button 
                        className="text-[10px] sm:text-xs bg-white text-[#5A6B7D] px-3 sm:px-4 py-1.5 rounded-full hover:bg-[#5A6B7D]/10 transition-all duration-200 inline-flex items-center border border-[#5A6B7D]/20 shadow-sm hover:shadow hover:scale-105"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleSwotItemExpand(`${item.title}-${index}`);
                        }}
                      >
                        <span className="mr-1 sm:mr-1.5 text-[#5A6B7D] font-medium">−</span>
                        Show less
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Strategic Recommendations */}
      <Accordion type="single" collapsible defaultValue="recommendations" className="transition-all duration-200">
        <AccordionItem value="recommendations" className="border-b border-gray-200">
          <AccordionTrigger className="py-4 px-5 text-[18px] font-medium transition-all duration-200 text-gray-700 relative pl-7 hover:bg-gray-50 group">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#5A6B7D] rounded-r group-hover:h-7 transition-all duration-200"></span>
            <span className="group-hover:text-[#5A6B7D] transition-colors duration-200">Key Recommendations</span>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-6 pt-5 transition-all duration-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {displayedRecommendations.map((rec, index) => (
                <div 
                  key={`recommendation-${index}`} 
                  className={cn(
                    "bg-white p-4 rounded-lg transition-all duration-300 hover:shadow-md border border-gray-200 hover:border-[#5A6B7D]/40 hover:bg-gradient-to-b hover:from-white hover:to-[#5A6B7D]/5 hover:animate-card-hover flex flex-col h-full",
                    showAllRecommendations && index >= 3 && "animate-expand-item"
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                      <Badge 
                        className={cn(
                          "h-6 w-6 rounded-full flex items-center justify-center p-0 text-white text-sm font-medium flex-shrink-0",
                          getPriorityColor(rec.priority)
                        )}
                      >
                        {rec.priority || "-"}
                      </Badge>
                      <h3 className="text-sm text-gray-600 font-medium line-clamp-1">{rec.title}</h3>
                    </div>
                    <div className="flex-grow">
                      <p className="text-xs text-textSecondary line-clamp-4">
                        {rec.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-6">
              {recommendations.length > 3 && !showAllRecommendations && (
                <button 
                  className="text-[10px] sm:text-xs bg-white text-[#5A6B7D] px-3 sm:px-4 py-1.5 rounded-full hover:bg-[#5A6B7D]/10 transition-all duration-200 inline-flex items-center border border-[#5A6B7D]/20 shadow-sm hover:shadow hover:scale-105"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowAllRecommendations(true);
                  }}
                >
                  <span className="mr-1 sm:mr-1.5 text-[#5A6B7D] font-medium">+</span>
                  {recommendations.length - 3} more recommendations
                </button>
              )}
              {showAllRecommendations && (
                <button 
                  className="text-[10px] sm:text-xs bg-white text-[#5A6B7D] px-3 sm:px-4 py-1.5 rounded-full hover:bg-[#5A6B7D]/10 transition-all duration-200 inline-flex items-center border border-[#5A6B7D]/20 shadow-sm hover:shadow hover:scale-105"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowAllRecommendations(false);
                  }}
                >
                  <span className="mr-1 sm:mr-1.5 text-[#5A6B7D] font-medium">−</span>
                  Show less
                </button>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      {/* Footer with subtle links/help */}
      <div className="bg-[#5A6B7D]/5 py-4 px-5 text-xs text-left text-gray-500 mt-2">
        <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1.5 text-[#5A6B7D]/70" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          For detailed analysis, expand each section above
        </span>
      </div>
    </div>
  );
};

export default ExecutiveSummaryHighlights;