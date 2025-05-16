import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Lock, ArrowRight } from "lucide-react";
import { useContent } from '@/lib/ContentProvider';
import { CardGrid } from '@/components/layouts/GridLayouts';
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
    <div className="space-y-8">
      <div className="text-center space-y-6 py-8">
        <div className="relative inline-block group cursor-default">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-themePrimary pb-2 px-1 transition-transform duration-500 group-hover:scale-105">
            {siteTitle}
          </h1>
          <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-themePrimary/80 via-themeSecondary/90 to-themePrimaryDark/80 rounded-full shadow-sm"></div>
          <div className="absolute -inset-1 bg-themePrimary/5 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <p className="text-base md:text-xl text-textSecondary max-w-3xl mx-auto leading-relaxed mt-8">
          {siteDescription}
        </p>
      </div>
      
      {/* Executive Summary Highlights */}
      <ExecutiveSummaryHighlights 
        swotItems={executiveSummary.swotItems}
        recommendations={executiveSummary.recommendations}
        introText={executiveSummary.introText}
      />

      <div className="mt-12">
        <h2 className="text-2xl font-medium mb-6 flex items-center">
          <span className="bg-themePrimary/10 w-10 h-10 rounded-full flex items-center justify-center mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-themePrimary">
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
              <path d="M7 7h.01"></path>
              <path d="M7 12h.01"></path>
              <path d="M7 17h.01"></path>
              <path d="M12 7h5"></path>
              <path d="M12 12h5"></path>
              <path d="M12 17h5"></path>
            </svg>
          </span>
          Blueprint Sections
        </h2>
        <CardGrid columns="3x2">
          {filteredSections.map((section, index) => (
            <Link 
              to={section.path} 
              key={section.path} 
              className="no-underline group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Card className="h-full transition-all duration-200 hover:shadow-xl hover:scale-[1.03] hover:border-themePrimaryLight overflow-hidden backdrop-blur-sm bg-white/90 hover:bg-glass-gradient animate-slide-up">
                <CardContent className="p-6 flex flex-col space-y-4 relative">
                  <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-themePrimary/10 to-transparent rounded-bl-3xl -z-10" />
                  <div className="absolute -left-6 -bottom-6 w-20 h-20 rounded-full bg-themePrimary/5 -z-10" />
                  
                  <div className="flex items-center justify-between">
                    <h3 className="text-base md:text-lg font-bold normal-case tracking-normal group-hover:text-themePrimary transition-colors">
                      {section.title}
                    </h3>
                    {section.gated && <Lock className="h-4 w-4 text-gray-400 group-hover:text-themePrimary transition-colors" />}
                  </div>
                  
                  <div className="h-0.5 w-8 bg-gradient-to-r from-themePrimary to-transparent rounded-full opacity-70 group-hover:w-12 transition-all duration-300"></div>
                  
                  <p className="text-sm text-textSecondary leading-relaxed">{section.summary}</p>
                  
                  <div className="pt-2 mt-auto flex items-center text-themePrimary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-t border-themePrimaryLight/20 pt-3">
                    <span>View section</span>
                    <ArrowRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform"/>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </CardGrid>
      </div>
    </div>
  );
};

export default HomePage;