import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { MetricCard } from "@/components/patterns/MetricCard";
import { useContent } from "@/lib/ContentProvider";
import { SectionLayout } from "@/components/layouts/SectionLayout";
import { ContentRow, ContentColumn } from "@/components/layouts/GridLayouts";

const CompetitiveLandscape = () => {
  const { content } = useContent();
  const { competitiveLandscape } = content;

  return (
    <SectionLayout
      title="Competitive Landscape Analysis"
      description={competitiveLandscape.overview}
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Key Market Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {competitiveLandscape.metrics.map((metric, index) => (
            <MetricCard 
              key={index}
              title={metric.title}
              value={metric.value}
              trend={metric.trend}
              description={metric.description}
              iconType={metric.icon} 
            />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-medium">Competitors Analysis</h2>
        <div className="rounded-lg border shadow-sm overflow-hidden bg-gradient-to-br from-white to-themePrimaryLight/30">
          <Table>
            <TableHeader>
              <TableRow className="bg-themePrimaryLight/50">
                <TableHead>Name</TableHead>
                <TableHead>Option 1</TableHead>
                <TableHead>Option 2</TableHead>
                <TableHead>Option 3</TableHead>
                <TableHead>Occupancy</TableHead>
                <TableHead>Market Share</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {competitiveLandscape.competitors.map((comp) => (
                <TableRow 
                  key={comp.name} 
                  className={`hover:bg-themePrimaryLight/20 ${comp.type === 'projected' ? 'bg-themePrimaryLight/30 font-medium' : ''}`}
                >
                  <TableCell className="font-medium">{comp.name}</TableCell>
                  <TableCell>{comp.metrics.option1}</TableCell>
                  <TableCell>{comp.metrics.option2}</TableCell>
                  <TableCell>{comp.metrics.option3}</TableCell>
                  <TableCell>{comp.metrics.occupancy}</TableCell>
                  <TableCell>{comp.metrics.marketShare}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {competitiveLandscape.analysis && competitiveLandscape.analysis.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl font-medium">Competitive Analysis</h2>
          <div className="space-y-4">
            {competitiveLandscape.analysis.map((analysis, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-3 text-themePrimary">{analysis.title}</h3>
                  <p className="text-gray-700">{analysis.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      <section className="space-y-6">
        <h2 className="text-2xl font-medium">Competitive Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitiveLandscape.competitors.map((competitor) => (
            <Card key={competitor.name} className="hover:shadow-md transition-shadow bg-gradient-to-br from-white to-themePrimaryLight/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-3 text-themePrimary">{competitor.name}</h3>
                {competitor.description && (
                  <p className="text-gray-700 mb-4 text-sm">{competitor.description}</p>
                )}
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-2 text-green-700">Strengths</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {competitor.strengths.map((strength, idx) => (
                        <li key={idx} className="text-gray-600 text-sm">{strength}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm mb-2 text-red-700">Weaknesses</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {competitor.weaknesses.map((weakness, idx) => (
                        <li key={idx} className="text-gray-600 text-sm">{weakness}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="p-6 bg-themePrimaryLight rounded-lg border border-themePrimary/10">
        <h2 className="text-2xl font-medium mb-4">Market Position</h2>
        <p className="text-gray-700 leading-relaxed">
          {competitiveLandscape.marketPosition}
        </p>
      </div>

      <section className="p-6 bg-gradient-to-br from-white to-themePrimaryLight/30 rounded-lg border border-themePrimary/10">
        <h2 className="text-2xl font-medium mb-4">Strategic Differentiators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {competitiveLandscape.differentiators.map((differentiator, index) => (
            <div key={index}>
              <h3 className="font-medium text-lg mb-2 text-themePrimary">{differentiator.category}</h3>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                {differentiator.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </SectionLayout>
  );
};

export default CompetitiveLandscape;