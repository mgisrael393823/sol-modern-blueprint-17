/**
 * Default content preset for SOL Modern Blueprint
 * 
 * This file contains the default placeholder content for the blueprint.
 * It serves as both an example of the content structure and as fallback
 * content when no custom content has been loaded.
 */

import {
  ContentStore,
  SwotItem,
  Recommendation,
  MetricItem,
  CompetitiveEntity,
  OpportunityItem,
  PricingTier,
  RoadmapPhase
} from '../content-types';

// Default navigation items matching the routes in App.tsx
const defaultNavigation = [
  { 
    id: "home",
    title: "Home", 
    path: "/", 
    gated: false 
  },
  { 
    id: "executive-summary",
    title: "Executive Summary", 
    path: "/executive-summary", 
    gated: false 
  },
  { 
    id: "market-intelligence",
    title: "Market Intelligence", 
    path: "/market-intelligence", 
    gated: false 
  },
  { 
    id: "competitive-landscape",
    title: "Competitive Landscape", 
    path: "/competitive-landscape", 
    gated: false 
  },
  { 
    id: "strategic-opportunities",
    title: "Strategic Opportunities", 
    path: "/strategic-opportunities", 
    gated: false 
  },
  { 
    id: "pricing-framework",
    title: "Pricing & Incentive Framework", 
    path: "/pricing-framework", 
    gated: false 
  },
  { 
    id: "roadmap",
    title: "Go-to-Market Roadmap", 
    path: "/roadmap", 
    gated: false 
  },
  { 
    id: "opportunity-map",
    title: "Opportunity Map", 
    path: "/opportunity-map", 
    gated: false 
  }
];

// Default sections for homepage and navigation
const defaultSections = [
  {
    id: "executive-summary",
    title: "Executive Summary",
    path: "/executive-summary",
    gated: false,
    summary: "Comprehensive market analysis and strategic recommendations"
  },
  {
    id: "market-intelligence",
    title: "Market Intelligence",
    path: "/market-intelligence",
    gated: false,
    summary: "Detailed market trends, demographics, and demand analysis"
  },
  {
    id: "competitive-landscape",
    title: "Competitive Landscape",
    path: "/competitive-landscape",
    gated: false,
    summary: "In-depth competitor analysis and market positioning"
  },
  {
    id: "strategic-opportunities",
    title: "Strategic Opportunities",
    path: "/strategic-opportunities",
    gated: false,
    summary: "Key growth opportunities and strategic initiatives"
  },
  {
    id: "pricing-framework",
    title: "Pricing & Incentive Framework",
    path: "/pricing-framework",
    gated: false,
    summary: "Detailed pricing strategy and incentive recommendations"
  },
  {
    id: "roadmap",
    title: "Go-to-Market Roadmap",
    path: "/roadmap",
    gated: false,
    summary: "Implementation timeline and execution strategy"
  },
  {
    id: "opportunity-map",
    title: "Opportunity Map",
    path: "/opportunity-map",
    gated: false,
    summary: "Visual mapping of market opportunities and growth potential"
  }
];

// Default SWOT items for executive summary
const defaultSwotItems: SwotItem[] = [
  {
    title: "Strengths",
    points: [
      "Key strength point 1",
      "Key strength point 2",
      "Key strength point 3",
      "Key strength point 4"
    ]
  },
  {
    title: "Weaknesses",
    points: [
      "Key weakness point 1",
      "Key weakness point 2",
      "Key weakness point 3",
      "Key weakness point 4"
    ]
  },
  {
    title: "Opportunities",
    points: [
      "Key opportunity point 1",
      "Key opportunity point 2",
      "Key opportunity point 3",
      "Key opportunity point 4"
    ]
  },
  {
    title: "Threats",
    points: [
      "Key threat point 1",
      "Key threat point 2",
      "Key threat point 3",
      "Key threat point 4"
    ]
  }
];

// Default recommendations for executive summary
const defaultRecommendations: Recommendation[] = [
  {
    title: "Strategic Recommendation 1",
    content: "Description of the first strategic recommendation with key points and implementation guidelines.",
    priority: 1
  },
  {
    title: "Strategic Recommendation 2",
    content: "Description of the second strategic recommendation with key points and implementation guidelines.",
    priority: 2
  },
  {
    title: "Strategic Recommendation 3",
    content: "Description of the third strategic recommendation with key points and implementation guidelines.",
    priority: 3
  }
];

// Default market metrics
const defaultMetrics: MetricItem[] = [
  {
    title: "Market Metric 1",
    value: "94%",
    trend: "+2.1% YoY"
  },
  {
    title: "Market Metric 2",
    value: "45 units",
    trend: "Stable"
  },
  {
    title: "Market Metric 3",
    value: "12%",
    trend: "Growing"
  }
];

// Default competitors for competitive landscape
const defaultCompetitors: CompetitiveEntity[] = [
  {
    name: "Competitor A",
    description: "Description of Competitor A's position in the market.",
    strengths: [
      "Competitor A strength 1", 
      "Competitor A strength 2"
    ],
    weaknesses: [
      "Competitor A weakness 1", 
      "Competitor A weakness 2"
    ],
    metrics: {
      marketShare: 35,
      growth: "5.2%",
      customers: 1200,
      option1: "$2,200",
      option2: "$2,800",
      option3: "$3,500",
      occupancy: "94%"
    },
    type: "competitor"
  },
  {
    name: "Competitor B",
    description: "Description of Competitor B's position in the market.",
    strengths: [
      "Competitor B strength 1", 
      "Competitor B strength 2"
    ],
    weaknesses: [
      "Competitor B weakness 1", 
      "Competitor B weakness 2"
    ],
    metrics: {
      marketShare: 28,
      growth: "3.8%",
      customers: 950,
      option1: "$2,300",
      option2: "$2,900",
      option3: "$3,600",
      occupancy: "96%"
    },
    type: "competitor"
  },
  {
    name: "Our Product",
    description: "Our projected position in the market.",
    strengths: [
      "Our product strength 1", 
      "Our product strength 2",
      "Our product strength 3"
    ],
    weaknesses: [
      "Our product weakness 1"
    ],
    metrics: {
      marketShare: 22,
      growth: "7.5%",
      customers: 850,
      option1: "$2,400",
      option2: "$3,100",
      option3: "$3,800",
      occupancy: "95%"
    },
    type: "projected"
  }
];

// Default strategic opportunities
const defaultOpportunities: OpportunityItem[] = [
  {
    title: "Opportunity 1",
    description: "Description of opportunity 1 with key points and potential impact.",
    impact: "high",
    effort: "medium",
    priority: 1,
    timeline: "Q1-Q2 2025"
  },
  {
    title: "Opportunity 2",
    description: "Description of opportunity 2 with key points and potential impact.",
    impact: "medium",
    effort: "low",
    priority: 2,
    timeline: "Q2 2025"
  },
  {
    title: "Opportunity 3",
    description: "Description of opportunity 3 with key points and potential impact.",
    impact: "medium",
    effort: "high",
    priority: 3,
    timeline: "Q3-Q4 2025"
  }
];

// Default pricing tiers
const defaultPricingTiers: PricingTier[] = [
  {
    name: "Basic",
    price: "$19",
    description: "For individuals and small teams",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3"
    ]
  },
  {
    name: "Pro",
    price: "$49",
    description: "For professional teams",
    features: [
      "All Basic features",
      "Pro feature 1",
      "Pro feature 2",
      "Pro feature 3"
    ],
    recommended: true
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For large organizations",
    features: [
      "All Pro features",
      "Enterprise feature 1",
      "Enterprise feature 2",
      "Enterprise feature 3",
      "Enterprise feature 4"
    ]
  }
];

// Default roadmap phases
const defaultRoadmapPhases: RoadmapPhase[] = [
  {
    title: "Phase 1: Launch",
    timeframe: "Q1 2025",
    description: "Initial product launch and market entry",
    milestones: [
      {
        title: "Milestone 1",
        description: "Description of milestone 1",
        status: "completed"
      },
      {
        title: "Milestone 2",
        description: "Description of milestone 2",
        status: "in-progress"
      },
      {
        title: "Milestone 3",
        description: "Description of milestone 3",
        status: "planned"
      }
    ]
  },
  {
    title: "Phase 2: Growth",
    timeframe: "Q2-Q3 2025",
    description: "Market expansion and feature enhancements",
    milestones: [
      {
        title: "Milestone 1",
        description: "Description of milestone 1",
        status: "planned"
      },
      {
        title: "Milestone 2",
        description: "Description of milestone 2",
        status: "planned"
      }
    ]
  },
  {
    title: "Phase 3: Optimization",
    timeframe: "Q4 2025",
    description: "Performance optimization and scaling",
    milestones: [
      {
        title: "Milestone 1",
        description: "Description of milestone 1",
        status: "planned"
      }
    ]
  }
];

// Complete default content
export const defaultContent: ContentStore = {
  siteTitle: "Strategy Blueprint",
  siteDescription: "A comprehensive market analysis and strategic framework",
  
  navigation: defaultNavigation,
  sections: defaultSections,
  
  executiveSummary: {
    introText: "This executive summary provides a concise overview of the key findings, strategic recommendations, and implementation priorities outlined in the comprehensive strategy blueprint.",
    swotItems: defaultSwotItems,
    recommendations: defaultRecommendations
  },
  
  marketIntelligence: {
    overview: "This section provides detailed market intelligence, including trends, demographics, and competitive dynamics that impact strategic decision-making.",
    metrics: defaultMetrics,
    trends: [
      {
        title: "Market Trend 1",
        content: "Description of market trend 1 with key insights and implications.",
        source: "Source: Market Research 2023"
      },
      {
        title: "Market Trend 2",
        content: "Description of market trend 2 with key insights and implications.",
        source: "Source: Industry Report 2023"
      },
      {
        title: "Market Trend 3",
        content: "Description of market trend 3 with key insights and implications.",
        source: "Source: Analyst Review 2023"
      }
    ],
    demographics: [
      {
        title: "Demographic Segment 1",
        content: "Analysis of demographic segment 1 including size, growth, and preferences."
      },
      {
        title: "Demographic Segment 2",
        content: "Analysis of demographic segment 2 including size, growth, and preferences."
      }
    ]
  },
  
  competitiveLandscape: {
    overview: "This section provides a comprehensive analysis of the competitive landscape, including detailed competitor profiles and market positioning.",
    metrics: defaultMetrics,
    competitors: defaultCompetitors,
    analysis: [
      {
        title: "Competitive Analysis 1",
        content: "Detailed analysis of competitive dynamics and market positioning."
      },
      {
        title: "Competitive Analysis 2",
        content: "Insights into competitive strategies and market share trends."
      }
    ],
    marketPosition: "This section describes your market positioning strategy and highlights your unique value proposition in the competitive landscape.",
    differentiators: [
      {
        category: "Category A",
        points: [
          "Differentiator point 1",
          "Differentiator point 2",
          "Differentiator point 3"
        ]
      },
      {
        category: "Category B",
        points: [
          "Differentiator point 1",
          "Differentiator point 2",
          "Differentiator point 3"
        ]
      }
    ]
  },
  
  strategicOpportunities: {
    overview: "This section outlines key strategic opportunities identified through market analysis and competitive assessment.",
    opportunities: defaultOpportunities,
    analysis: "Detailed analysis of strategic opportunities and their potential impact on business growth and market positioning.",
    recommendations: defaultRecommendations
  },
  
  pricingFramework: {
    overview: "Based on comprehensive market analysis and competitor benchmarking, we've developed an innovative pricing strategy that balances positioning with market penetration objectives.",
    strategy: "Detailed pricing framework and position strategy relative to market competitors.",
    tiers: defaultPricingTiers,
    incentives: [
      {
        title: "Incentive Program 1",
        description: "Description of incentive program 1 and its benefits.",
        terms: "Terms and conditions apply."
      },
      {
        title: "Incentive Program 2",
        description: "Description of incentive program 2 and its benefits.",
        terms: "Terms and conditions apply."
      }
    ],
    competitiveAnalysis: "Analysis of competitor pricing strategies and market positioning."
  },
  
  roadmap: {
    overview: "Our detailed implementation roadmap outlines key milestones and strategic initiatives across a specified timeline.",
    phases: defaultRoadmapPhases,
    criticalPath: "Description of the critical path for successful implementation.",
    risks: [
      {
        title: "Risk 1",
        description: "Description of risk 1",
        mitigation: "Mitigation strategy for risk 1",
        impact: "high"
      },
      {
        title: "Risk 2",
        description: "Description of risk 2",
        mitigation: "Mitigation strategy for risk 2",
        impact: "medium"
      }
    ]
  },
  
  opportunityMap: {
    overview: "This opportunity map provides a visual representation of key opportunities based on value and feasibility.",
    quadrants: [
      {
        title: "High Value, Low Effort",
        description: "Opportunities with high value and low implementation effort.",
        opportunities: [
          {
            name: "Opportunity 1",
            description: "Description of opportunity 1",
            value: 85
          },
          {
            name: "Opportunity 2",
            description: "Description of opportunity 2",
            value: 80
          }
        ]
      },
      {
        title: "High Value, High Effort",
        description: "Opportunities with high value but significant implementation effort.",
        opportunities: [
          {
            name: "Opportunity 3",
            description: "Description of opportunity 3",
            value: 90
          },
          {
            name: "Opportunity 4",
            description: "Description of opportunity 4",
            value: 75
          }
        ]
      },
      {
        title: "Low Value, Low Effort",
        description: "Opportunities with lower value but easy implementation.",
        opportunities: [
          {
            name: "Opportunity 5",
            description: "Description of opportunity 5",
            value: 50
          },
          {
            name: "Opportunity 6",
            description: "Description of opportunity 6",
            value: 45
          }
        ]
      },
      {
        title: "Low Value, High Effort",
        description: "Opportunities with lower value and significant implementation effort.",
        opportunities: [
          {
            name: "Opportunity 7",
            description: "Description of opportunity 7",
            value: 30
          },
          {
            name: "Opportunity 8",
            description: "Description of opportunity 8",
            value: 25
          }
        ]
      }
    ],
    summary: "Summary of the opportunity map and prioritization recommendations."
  }
};