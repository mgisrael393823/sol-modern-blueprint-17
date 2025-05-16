import React from 'react';
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useContent } from '@/lib/ContentProvider';
import ExecutiveSummaryHighlights from '@/components/ExecutiveSummaryHighlights';

// Helper function to filter out specific sections
const filterSections = (sections: any[], excludedPaths: string[]) => {
  return sections.filter(section => !excludedPaths.includes(section.path));
};

const HomePage = () => {
  const { content } = useContent();
  const { sections, siteTitle, siteDescription, executiveSummary } = content;
  
  // Filter out Executive Summary from sections
  const filteredSections = filterSections(sections, ["/executive-summary"]);
  
  return (
    <div className="max-w-5xl mx-auto space-y-10">
      {/* Clean, professional header */}
      <header className="mb-6 pb-4 border-b border-gray-200">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          {siteTitle}
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          {siteDescription}
        </p>
      </header>
      
      {/* Executive Summary */}
      <section className="mb-12">
        <ExecutiveSummaryHighlights 
          swotItems={executiveSummary.swotItems}
          recommendations={executiveSummary.recommendations}
          introText={executiveSummary.introText}
        />
      </section>

      {/* Blueprint Sections - clean layout */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-200">
          Blueprint Sections
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
          {filteredSections.map((section, index) => (
            <Link 
              to={section.path} 
              key={section.path}
              className="group flex flex-col border border-gray-200 rounded-lg p-5 bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-200 no-underline"
            >
              <h3 className="text-lg font-medium text-gray-800 group-hover:text-black transition-colors mb-2">
                {section.title}
              </h3>
              
              <p className="text-sm text-gray-600 flex-grow mb-4">
                {section.summary}
              </p>
              
              <div className="flex items-center text-sm font-medium text-gray-600 group-hover:text-black transition-colors mt-auto">
                <span>Explore section</span>
                <ChevronRight className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      {/* Integration section */}
      <section className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h2 className="text-xl font-semibold mb-3">How to Use This Blueprint</h2>
        <p className="text-gray-600 mb-4">
          This strategic blueprint provides a comprehensive analysis of market conditions, competitive positioning, and growth opportunities. Navigate through each section to gain insights and actionable recommendations.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
          <div className="bg-white p-4 rounded border border-gray-200">
            <h3 className="text-base font-medium mb-2">For Strategic Planning</h3>
            <p className="text-sm text-gray-600">
              Focus on the Executive Summary, Strategic Opportunities, and Roadmap sections to inform your planning process.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded border border-gray-200">
            <h3 className="text-base font-medium mb-2">For Market Research</h3>
            <p className="text-sm text-gray-600">
              Explore the Market Intelligence and Competitive Landscape sections for in-depth analysis of market conditions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;