/**
 * MetricCard Component Module
 * 
 * This module provides a standardized way to display key metrics throughout
 * the blueprint. It's designed to present numerical data in a visually consistent
 * and attractive manner, with support for trend indicators and contextual icons.
 * 
 * The component follows the blueprint's theme system, using theme variables for colors
 * and styling.
 * 
 * @module MetricCard
 */
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { 
  ChartBarIcon, 
  TrendingUpIcon, 
  ChartPieIcon 
} from 'lucide-react';

/**
 * Props interface for the MetricCard component.
 * 
 * @interface MetricCardProps
 * @property {string} title - Title of the metric (e.g., "Revenue Growth")
 * @property {string} value - The main value to display (e.g., "$1.2M" or "42%")
 * @property {string} [trend] - Optional trend indicator text (e.g., "+2.1% YoY")
 * @property {string} [description] - Optional description providing context
 * @property {string} [iconType] - Optional icon name: "chart", "trending", or "pie"
 * @property {string} [className] - Additional CSS classes to apply
 */
interface MetricCardProps {
  /**
   * Title of the metric
   * @example "Market Share"
   */
  title: string;
  
  /**
   * The main value to display
   * @example "42%" or "$1.2M"
   */
  value: string;
  
  /**
   * Optional trend indicator text
   * @example "+2.1% YoY" or "↑ 15%"
   */
  trend?: string;
  
  /**
   * Optional description text
   * @example "Compared to industry average of 38%"
   */
  description?: string;
  
  /**
   * Optional icon name to display
   * @example "chart", "trending", "pie"
   */
  iconType?: string;
  
  /**
   * Additional class names for custom styling
   */
  className?: string;
}

/**
 * MetricCard component displays a key business metric with optional trend indicator and icon.
 * 
 * Used throughout the blueprint to present important statistics and metrics in a 
 * visually consistent way. The component features:
 * - A title and primary value display
 * - Optional trend indicator with appropriate styling
 * - Optional contextual icon
 * - Optional description text
 * - Consistent theming with the blueprint's design system
 * 
 * @component
 * @example
 * // Basic usage
 * <MetricCard 
 *   title="Revenue Growth" 
 *   value="24.8%" 
 *   trend="+5.2% YoY"
 * />
 * 
 * @example
 * // With all options
 * <MetricCard 
 *   title="Market Share" 
 *   value="42%" 
 *   trend="+3.8% YoY"
 *   description="Highest in the competitive set"
 *   iconType="chart"
 *   className="col-span-2"
 * />
 */
export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  trend,
  description,
  iconType,
  className
}) => {
  /**
   * Renders the appropriate icon based on the iconType prop.
   * Uses Lucide React icons with consistent styling.
   * 
   * @returns {JSX.Element|null} The icon component or null if no icon specified
   */
  const renderIcon = () => {
    switch(iconType) {
      case 'chart':
        return <ChartBarIcon className="h-6 w-6 text-themePrimary" />;
      case 'trending':
        return <TrendingUpIcon className="h-6 w-6 text-themePrimary" />;
      case 'pie':
        return <ChartPieIcon className="h-6 w-6 text-themePrimary" />;
      default:
        return null;
    }
  };

  return (
    <Card 
      className={cn(
        // Base styling with theme-aware gradient background
        "hover:shadow-md transition-shadow bg-gradient-to-br from-white to-themePrimaryLight/50",
        // Custom class names for layout customization
        className
      )}
    >
      <CardContent className="p-6">
        {/* Header with optional icon */}
        <div className="flex items-center gap-3 mb-3">
          {iconType && renderIcon()}
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
        
        {/* Primary value display with optional trend indicator */}
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className="text-2xl font-bold text-themePrimary">{value}</span>
          {trend && (
            <Badge variant="secondary" className="font-normal">
              {trend}
            </Badge>
          )}
        </div>
        
        {/* Optional description text */}
        {description && (
          <p className="mt-2 text-sm text-textSecondary">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

/**
 * Default export of the MetricCard component
 */
export default MetricCard;