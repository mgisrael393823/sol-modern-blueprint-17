/**
 * Content Type Definitions for SOL Modern Blueprint
 * 
 * This module defines the complete type system for all content within the blueprint.
 * These TypeScript interfaces ensure consistent data structure and provide
 * type safety throughout the application. The content model is designed to be
 * complete, extensible, and decoupled from the presentation layer.
 * 
 * The content structure follows a hierarchical model where the ContentStore
 * is the root object containing all sections of the blueprint. Each section
 * has its own specialized interface defining its content requirements.
 * 
 * @module content-types
 */

/**
 * BaseContent defines common properties shared by most content items.
 * 
 * @interface BaseContent
 * @property {string} id - Unique identifier for the content item
 * @property {string} title - Display title for the content
 * @property {string} [description] - Optional longer description
 */
export interface BaseContent {
  id: string;
  title: string;
  description?: string;
}

/**
 * NavigationItem represents an item in the main navigation menu.
 * Extends BaseContent with path and access control properties.
 * 
 * @interface NavigationItem
 * @extends BaseContent
 * @property {string} path - URL path for the navigation item
 * @property {boolean} gated - Whether this content requires authentication
 * @property {string} [icon] - Optional icon identifier
 */
export interface NavigationItem extends BaseContent {
  path: string;
  gated: boolean;
  icon?: string;
}

/**
 * SectionContent represents a main content section that appears on the homepage.
 * Extends NavigationItem with a summary for homepage display.
 * 
 * @interface SectionContent
 * @extends NavigationItem
 * @property {string} summary - Brief summary displayed on the homepage
 */
export interface SectionContent extends NavigationItem {
  summary: string;
}

/**
 * SwotItem represents an item in a SWOT analysis (Strengths, Weaknesses, 
 * Opportunities, Threats).
 * 
 * @interface SwotItem
 * @property {string} title - Category title (e.g., "Strengths")
 * @property {string} [icon] - Optional icon identifier
 * @property {string[]} points - Array of bullet points for this category
 */
export interface SwotItem {
  title: string;
  icon?: string;
  points: string[];
}

/**
 * Recommendation represents a strategic recommendation with priority.
 * Used in multiple sections including Executive Summary and Strategic Opportunities.
 * 
 * @interface Recommendation
 * @property {string} title - Title of the recommendation
 * @property {string} content - Detailed content of the recommendation
 * @property {number} [priority] - Optional numerical priority (lower = higher priority)
 */
export interface Recommendation {
  title: string;
  content: string;
  priority?: number;
}

/**
 * ExecutiveSummaryContent defines the structure of the executive summary section.
 * Contains the introduction, SWOT analysis, and strategic recommendations.
 * 
 * @interface ExecutiveSummaryContent
 * @property {string} introText - Introductory paragraph
 * @property {SwotItem[]} swotItems - SWOT analysis categories
 * @property {Recommendation[]} recommendations - Strategic recommendations
 */
export interface ExecutiveSummaryContent {
  introText: string;
  swotItems: SwotItem[];
  recommendations: Recommendation[];
}

/**
 * MetricItem represents a key business metric with value and trend.
 * Used in multiple sections including Market Intelligence and Competitive Landscape.
 * 
 * @interface MetricItem
 * @property {string} title - Name of the metric
 * @property {string} value - Current value of the metric
 * @property {string} [trend] - Optional trend indicator
 * @property {string} [description] - Optional detailed description
 * @property {string} [icon] - Optional icon identifier
 */
export interface MetricItem {
  title: string;
  value: string;
  trend?: string;
  description?: string;
  icon?: string;
}

/**
 * CompetitiveEntity represents a competitor, benchmark, or projected position
 * in the competitive landscape.
 * 
 * @interface CompetitiveEntity
 * @property {string} name - Name of the entity
 * @property {string} [description] - Optional description
 * @property {string[]} strengths - Array of strength points
 * @property {string[]} weaknesses - Array of weakness points
 * @property {Record<string, string|number>} metrics - Key metrics as key-value pairs
 * @property {string[]} [features] - Optional feature list
 * @property {'competitor'|'projected'|'benchmark'} [type] - Entity type
 */
export interface CompetitiveEntity {
  name: string;
  description?: string;
  strengths: string[];
  weaknesses: string[];
  metrics: Record<string, string | number>;
  features?: string[];
  type?: 'competitor' | 'projected' | 'benchmark';
}

/**
 * MarketIntelligenceContent defines the structure of the market intelligence section.
 * Contains market overview, metrics, trends, and demographic information.
 * 
 * @interface MarketIntelligenceContent
 * @property {string} overview - Section overview
 * @property {MetricItem[]} metrics - Key market metrics
 * @property {Object[]} trends - Market trends
 * @property {Object[]} [demographics] - Optional demographic information
 */
export interface MarketIntelligenceContent {
  overview: string;
  metrics: MetricItem[];
  trends: {
    title: string;
    content: string;
    source?: string;
  }[];
  demographics?: {
    title: string;
    content: string;
    chart?: string;
  }[];
}

/**
 * CompetitiveLandscapeContent defines the structure of the competitive landscape section.
 * Contains overview, metrics, competitor analysis, and differentiation points.
 * 
 * @interface CompetitiveLandscapeContent
 * @property {string} overview - Section overview
 * @property {MetricItem[]} metrics - Key competitive metrics
 * @property {CompetitiveEntity[]} competitors - Competitor data
 * @property {Object[]} analysis - Analysis points
 * @property {string} marketPosition - Description of market position
 * @property {Object[]} differentiators - Differentiation categories and points
 */
export interface CompetitiveLandscapeContent {
  overview: string;
  metrics: MetricItem[];
  competitors: CompetitiveEntity[];
  analysis: {
    title: string;
    content: string;
  }[];
  marketPosition: string;
  differentiators: {
    category: string;
    points: string[];
  }[];
}

/**
 * OpportunityItem represents a strategic opportunity with impact and effort assessment.
 * Used in the Strategic Opportunities section.
 * 
 * @interface OpportunityItem
 * @property {string} title - Title of the opportunity
 * @property {string} description - Detailed description
 * @property {'high'|'medium'|'low'} impact - Impact level
 * @property {'high'|'medium'|'low'} effort - Required effort level
 * @property {number} priority - Priority ranking (lower = higher priority)
 * @property {string} [timeline] - Optional implementation timeline
 * @property {Record<string, string|number>} [metrics] - Optional relevant metrics
 */
export interface OpportunityItem {
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  effort: 'high' | 'medium' | 'low';
  priority: number;
  timeline?: string;
  metrics?: Record<string, string | number>;
}

/**
 * StrategicOpportunitiesContent defines the structure of the strategic opportunities section.
 * Contains overview, opportunity items, analysis, and recommendations.
 * 
 * @interface StrategicOpportunitiesContent
 * @property {string} overview - Section overview
 * @property {OpportunityItem[]} opportunities - Strategic opportunities
 * @property {string} analysis - Analysis text
 * @property {Recommendation[]} recommendations - Strategic recommendations
 */
export interface StrategicOpportunitiesContent {
  overview: string;
  opportunities: OpportunityItem[];
  analysis: string;
  recommendations: Recommendation[];
}

/**
 * PricingTier represents a pricing option with features and pricing details.
 * Used in the Pricing Framework section.
 * 
 * @interface PricingTier
 * @property {string} name - Tier name
 * @property {string} price - Price display (can include currency, period)
 * @property {string} description - Tier description
 * @property {string[]} features - Features included in this tier
 * @property {boolean} [recommended] - Whether this tier is recommended
 */
export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

/**
 * PricingFrameworkContent defines the structure of the pricing framework section.
 * Contains overview, strategy, pricing tiers, and incentive programs.
 * 
 * @interface PricingFrameworkContent
 * @property {string} overview - Section overview
 * @property {string} strategy - Pricing strategy description
 * @property {PricingTier[]} tiers - Pricing tiers
 * @property {Object[]} incentives - Incentive programs
 * @property {string} [competitiveAnalysis] - Optional pricing competitive analysis
 */
export interface PricingFrameworkContent {
  overview: string;
  strategy: string;
  tiers: PricingTier[];
  incentives: {
    title: string;
    description: string;
    terms?: string;
  }[];
  competitiveAnalysis?: string;
}

/**
 * RoadmapPhase represents a phase in the implementation roadmap.
 * Used in the Go-to-Market Roadmap section.
 * 
 * @interface RoadmapPhase
 * @property {string} title - Phase title
 * @property {string} timeframe - Implementation timeframe
 * @property {string} description - Phase description
 * @property {Object[]} milestones - Key milestones in this phase
 * @property {Record<string, string|number>} [metrics] - Optional relevant metrics
 */
export interface RoadmapPhase {
  title: string;
  timeframe: string;
  description: string;
  milestones: {
    title: string;
    description: string;
    status?: 'completed' | 'in-progress' | 'planned';
  }[];
  metrics?: Record<string, string | number>;
}

/**
 * RoadmapContent defines the structure of the go-to-market roadmap section.
 * Contains overview, implementation phases, critical path, and risk assessment.
 * 
 * @interface RoadmapContent
 * @property {string} overview - Section overview
 * @property {RoadmapPhase[]} phases - Implementation phases
 * @property {string} [criticalPath] - Optional critical path description
 * @property {Object[]} [risks] - Optional implementation risks
 */
export interface RoadmapContent {
  overview: string;
  phases: RoadmapPhase[];
  criticalPath?: string;
  risks?: {
    title: string;
    description: string;
    mitigation: string;
    impact: 'high' | 'medium' | 'low';
  }[];
}

/**
 * OpportunityMapContent defines the structure of the opportunity map section.
 * Contains overview, opportunity quadrants, and summary.
 * 
 * @interface OpportunityMapContent
 * @property {string} overview - Section overview
 * @property {Object[]} quadrants - Opportunity quadrants
 * @property {string} summary - Summary analysis
 */
export interface OpportunityMapContent {
  overview: string;
  quadrants: {
    title: string;
    description: string;
    opportunities: {
      name: string;
      description: string;
      value?: number;
    }[];
  }[];
  summary: string;
}

/**
 * ContentStore is the root interface that defines the complete content structure
 * for the entire blueprint. It contains all section content, navigation, and site metadata.
 * 
 * This is the main data structure that gets passed to the ContentProvider and
 * distributed throughout the application.
 * 
 * @interface ContentStore
 * @property {NavigationItem[]} navigation - Navigation menu items
 * @property {SectionContent[]} sections - Main content sections
 * @property {ExecutiveSummaryContent} executiveSummary - Executive summary content
 * @property {MarketIntelligenceContent} marketIntelligence - Market intelligence content
 * @property {CompetitiveLandscapeContent} competitiveLandscape - Competitive landscape content
 * @property {StrategicOpportunitiesContent} strategicOpportunities - Strategic opportunities content
 * @property {PricingFrameworkContent} pricingFramework - Pricing framework content
 * @property {RoadmapContent} roadmap - Go-to-market roadmap content
 * @property {OpportunityMapContent} opportunityMap - Opportunity map content
 * @property {string} siteTitle - Site title for display
 * @property {string} siteDescription - Site description for display
 */
export interface ContentStore {
  navigation: NavigationItem[];
  sections: SectionContent[];
  executiveSummary: ExecutiveSummaryContent;
  marketIntelligence: MarketIntelligenceContent;
  competitiveLandscape: CompetitiveLandscapeContent;
  strategicOpportunities: StrategicOpportunitiesContent;
  pricingFramework: PricingFrameworkContent;
  roadmap: RoadmapContent;
  opportunityMap: OpportunityMapContent;
  siteTitle: string;
  siteDescription: string;
}