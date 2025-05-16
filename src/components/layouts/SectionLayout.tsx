/**
 * SectionLayout Component Module
 * 
 * This module provides standardized layout components for blueprint sections.
 * It ensures consistent presentation of section titles, descriptions, and content
 * throughout the application. It follows the blueprint's design system using
 * theme-aware styling.
 * 
 * @module SectionLayout
 */
import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props interface for the SectionLayout component.
 * 
 * @interface SectionLayoutProps
 * @property {string} title - The main title of the section
 * @property {string} [description] - Optional descriptive text shown below the title
 * @property {React.ReactNode} children - The content to render within the section
 * @property {string} [className] - Optional additional CSS classes
 * @property {boolean} [fullWidth=false] - Whether the content should use the full width
 */
type SectionLayoutProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
};

/**
 * SectionLayout is the primary layout component for all main content sections.
 * It provides consistent styling for section headers, descriptions, and maintains
 * proper spacing and width constraints.
 * 
 * This component is the foundation for all blueprint pages, ensuring visual consistency
 * while allowing for content flexibility.
 * 
 * @component SectionLayout
 * @example
 * // Basic usage
 * <SectionLayout
 *   title="Market Intelligence"
 *   description="Overview of market trends and opportunities"
 * >
 *   <p>Section content goes here...</p>
 * </SectionLayout>
 * 
 * @example
 * // With full width
 * <SectionLayout
 *   title="Competitive Landscape"
 *   description="Analysis of competitors"
 *   fullWidth={true}
 *   className="bg-slate-50"
 * >
 *   <CompetitorTable />
 * </SectionLayout>
 */
export const SectionLayout: React.FC<SectionLayoutProps> = ({
  title,
  description,
  children,
  className,
  fullWidth = false,
}) => {
  return (
    <div className={cn("space-y-6", className)}>
      {/* Section header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        
        {/* Optional description banner */}
        {description && (
          <div className="bg-themePrimaryLight/30 p-6 rounded-lg mb-8 border border-themePrimaryLight/50">
            <p className="text-lg text-textSecondary">{description}</p>
          </div>
        )}
      </div>
      
      {/* Content container with optional width constraint */}
      <div className={cn(
        "grid gap-6",
        fullWidth ? "" : "max-w-4xl" // Apply max width unless fullWidth is true
      )}>
        {children}
      </div>
    </div>
  );
};

/**
 * Props interface for the SectionCard component.
 * 
 * @interface SectionCardProps
 * @property {string} title - The card title
 * @property {string} [description] - Optional card description
 * @property {React.ReactNode} children - Content to render in the card
 * @property {string} [className] - Optional additional CSS classes
 * @property {React.ReactNode} [icon] - Optional icon to display next to the title
 */
interface SectionCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

/**
 * SectionCard provides a consistent card layout for content sections.
 * It features a title, optional icon, description, and flexible content area.
 * 
 * This component is used for creating visually distinct content blocks
 * within section layouts.
 * 
 * @component SectionCard
 * @example
 * // Basic usage
 * <SectionCard title="Market Growth">
 *   <p>Card content here...</p>
 * </SectionCard>
 * 
 * @example
 * // With icon and description
 * <SectionCard
 *   title="Revenue Projections"
 *   description="Q1-Q4 2025 estimates"
 *   icon={<ChartIcon className="w-5 h-5" />}
 * >
 *   <RevenueChart data={chartData} />
 * </SectionCard>
 */
export const SectionCard: React.FC<SectionCardProps> = ({ 
  title, 
  description, 
  children, 
  className, 
  icon 
}) => {
  return (
    <div className={cn(
      "rounded-lg border bg-card p-6 shadow-sm", 
      className
    )}>
      {/* Card header with optional icon */}
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-xl font-medium">{title}</h3>
      </div>
      
      {/* Optional description */}
      {description && <p className="mb-4 text-textSecondary">{description}</p>}
      
      {/* Card content */}
      {children}
    </div>
  );
};

/**
 * Default export of the SectionLayout component
 */
export default SectionLayout;