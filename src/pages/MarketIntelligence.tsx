import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MetricCard } from "@/components/patterns/MetricCard";
import { useContent } from "@/lib/ContentProvider";
import { SectionLayout } from "@/components/layouts/SectionLayout";
import { ContentRow, ContentColumn } from "@/components/layouts/GridLayouts";

const MarketIntelligence = () => {
  const { content } = useContent();
  const { marketIntelligence } = content;

  // Static data that would eventually come from content store
  const phoenixVacancyData = [
    { submarket: "Downtown Core", rate: "4.2%", change: "-0.8%" },
    { submarket: "Midtown", rate: "5.3%", change: "-0.3%" },
    { submarket: "Roosevelt Row", rate: "3.8%", change: "-1.2%" },
    { submarket: "Arts District", rate: "4.5%", change: "-0.5%" }
  ];

  const absorptionRatesData = [
    { quarter: "Q1 2024", units: "320", trend: "↑" },
    { quarter: "Q4 2023", units: "285", trend: "↑" },
    { quarter: "Q3 2023", units: "265", trend: "→" },
    { quarter: "Q2 2023", units: "240", trend: "↑" }
  ];

  const rentTrendsData = [
    { unitType: "Studio", current: "$1,950", yoy: "+5.4%", projected: "+3.8%" },
    { unitType: "1-Bedroom", current: "$2,450", yoy: "+5.7%", projected: "+4.2%" },
    { unitType: "2-Bedroom", current: "$3,200", yoy: "+6.2%", projected: "+4.5%" }
  ];

  const supplyGrowthData = [
    { stage: "Under Construction", units: "1,850", delivery: "12-18 months" },
    { stage: "Planned", units: "2,200", delivery: "18-36 months" },
    { stage: "Proposed", units: "3,400", delivery: "36+ months" }
  ];

  const economicIndicators = [
    { indicator: "Job Growth", value: "4.2%", benchmark: "US Avg: 2.1%" },
    { indicator: "Median Income", value: "$92,500", benchmark: "+6.8% YoY" },
    { indicator: "Population Growth", value: "3.1%", benchmark: "US Avg: 0.8%" },
    { indicator: "GDP Growth", value: "4.8%", benchmark: "US Avg: 2.3%" }
  ];

  return (
    <SectionLayout
      title="Market Intelligence"
      description={marketIntelligence.overview}
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Key Market Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {marketIntelligence.metrics.map((metric, index) => (
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

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-medium">Phoenix Vacancy Rates</h2>
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Historic Low: 3.8%
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="transition-all duration-300 ease-in-out hover:shadow-lg hover:translate-y-[-2px] bg-gradient-to-br from-white to-green-50/30">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4 text-green-900">Submarket Vacancy Rates</h3>
              <div className="space-y-3">
                {phoenixVacancyData.map((item) => (
                  <div key={item.submarket} className="flex items-center justify-between pb-2 border-b border-green-100/50">
                    <span className="font-medium">{item.submarket}</span>
                    <div>
                      <span className="font-bold text-green-700">{item.rate}</span>
                      <span className="text-xs ml-2 text-green-600">{item.change} YoY</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Downtown Phoenix submarkets continue to outperform the broader metropolitan area (5.7% vacancy) by a significant margin.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100/50 transition-all duration-300 ease-in-out hover:shadow-md">
              <h3 className="font-medium text-blue-800 mb-3">Vacancy Trends Analysis</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-blue-500 rounded-full"></span>
                  Consistent vacancy decline for 8 consecutive quarters
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-blue-500 rounded-full"></span>
                  Luxury segment ({'>'}$2,200/mo) performing exceptionally at 3.5% vacancy
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-blue-500 rounded-full"></span>
                  New deliveries absorbed 40% faster than 5-year average
                </li>
              </ul>
            </div>
            <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100/50 transition-all duration-300 ease-in-out hover:shadow-md">
              <h3 className="font-medium text-blue-800 mb-3">Market Projection</h3>
              <p className="text-gray-700">
                Vacancy rates projected to stabilize at 4.0-4.5% despite 1,850 units currently under construction, indicating exceptional absorption capacity in the core downtown submarkets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-medium">Absorption Rates</h2>
          <Badge variant="outline" className="bg-themePrimary/10 text-themePrimary border-themePrimary/20">
            Trending Upward
          </Badge>
        </div>
        
        <Card className="transition-all duration-300 ease-in-out hover:shadow-lg hover:translate-y-[-2px]">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-4 text-themePrimary">Quarterly Absorption</h3>
                <div className="space-y-3">
                  {absorptionRatesData.map((item) => (
                    <div key={item.quarter} className="flex items-center justify-between pb-2 border-b border-themePrimary/10">
                      <span className="font-medium">{item.quarter}</span>
                      <div>
                        <span className="font-bold text-themePrimary">{item.units} units</span>
                        <span className={`text-lg ml-2 ${item.trend === "↑" ? "text-green-600" : item.trend === "↓" ? "text-red-600" : "text-gray-600"}`}>
                          {item.trend}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Total annual absorption of 1,110 units represents a 15% increase over previous year.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium mb-2 text-themePrimary">Absorption Insights</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-themePrimary rounded-full"></span>
                    Premium units ($2,200+) absorbing fastest at 48 units/month
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-themePrimary rounded-full"></span>
                    Tech corridor buildings achieving lease-up 30% faster than market average
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-themePrimary rounded-full"></span>
                    Amenity-rich developments commanding 15% absorption premium
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-themePrimary rounded-full"></span>
                    Average lease-up period: 9 months vs. market average of 12 months
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-medium">Rent Trends</h2>
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            Strong Growth
          </Badge>
        </div>
        
        <Card className="transition-all duration-300 ease-in-out hover:shadow-lg hover:translate-y-[-2px] bg-gradient-to-br from-white to-blue-50/30">
          <CardContent className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-blue-100">
                    <th className="text-left py-2 px-3">Unit Type</th>
                    <th className="text-left py-2 px-3">Current Average</th>
                    <th className="text-left py-2 px-3">YoY Growth</th>
                    <th className="text-left py-2 px-3">Projected Next Year</th>
                  </tr>
                </thead>
                <tbody>
                  {rentTrendsData.map((item) => (
                    <tr key={item.unitType} className="border-b border-blue-50 hover:bg-blue-50/40 transition-colors">
                      <td className="py-2 px-3 font-medium">{item.unitType}</td>
                      <td className="py-2 px-3">{item.current}</td>
                      <td className="py-2 px-3 text-green-600">{item.yoy}</td>
                      <td className="py-2 px-3">{item.projected}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-blue-50/50 rounded-lg">
              <h3 className="font-medium text-blue-800 mb-3">Rent Insights</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 text-sm">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-blue-500 rounded-full"></span>
                  Premium buildings achieving 8.4% YoY growth
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-blue-500 rounded-full"></span>
                  Downtown core outperforming suburban markets by 2.3%
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-blue-500 rounded-full"></span>
                  Concession burn-off adding 1.5% effective rent growth
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-blue-500 rounded-full"></span>
                  Renewal increases averaging 6.8%
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-medium">Supply Growth</h2>
          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
            Controlled Pipeline
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-white to-amber-50/30 transition-all duration-300 ease-in-out hover:shadow-lg hover:translate-y-[-2px]">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4 text-amber-900">Development Pipeline</h3>
              <div className="space-y-3">
                {supplyGrowthData.map((item) => (
                  <div key={item.stage} className="flex items-center justify-between pb-2 border-b border-amber-100/50">
                    <span className="font-medium">{item.stage}</span>
                    <div>
                      <span className="font-bold text-amber-700">{item.units} units</span>
                      <span className="text-xs ml-2 text-gray-500">{item.delivery}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Financing constraints have reduced planned pipeline by approximately 25% compared to 2022 projections.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <div className="bg-amber-50/50 p-4 rounded-lg border border-amber-100/50 transition-all duration-300 ease-in-out hover:shadow-md">
              <h3 className="font-medium text-amber-800 mb-3">Supply Analysis</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-amber-500 rounded-full"></span>
                  65% of pipeline concentrated in Arts District and Roosevelt Row
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-amber-500 rounded-full"></span>
                  High-rise developments face 25% construction premium
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-amber-500 rounded-full"></span>
                  Average delivery delays of 4-6 months affecting completion schedule
                </li>
              </ul>
            </div>
            <div className="bg-amber-50/50 p-4 rounded-lg border border-amber-100/50 transition-all duration-300 ease-in-out hover:shadow-md">
              <h3 className="font-medium text-amber-800 mb-3">Delivery Forecast</h3>
              <p className="text-gray-700">
                Restrictive financing and rising construction costs are expected to limit actual deliveries to 70-75% of current pipeline, creating favorable supply constraint conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-medium">Market Trends</h2>
        {marketIntelligence.trends.map((trend, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-br from-white to-blue-50/50 rounded-lg p-6 shadow-sm border border-blue-100/50 transition-all duration-300 ease-in-out hover:shadow-md hover:translate-y-[-2px]"
          >
            <h3 className="text-xl font-medium mb-4 text-themePrimary">{trend.title}</h3>
            <ContentRow>
              <ContentColumn>
                <p className="text-gray-700 leading-relaxed">{trend.content}</p>
                {trend.source && (
                  <p className="text-sm text-gray-500 mt-2 italic">{trend.source}</p>
                )}
              </ContentColumn>
            </ContentRow>
          </div>
        ))}
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-medium">Economic Indicators</h2>
          <Badge variant="outline" className="bg-themePrimary/10 text-themePrimary border-themePrimary/20">
            Strong Fundamentals
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-white to-themePrimaryLight transition-all duration-300 ease-in-out hover:shadow-lg hover:translate-y-[-2px]">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4 text-themePrimary">Phoenix Economic Metrics</h3>
              <div className="space-y-3">
                {economicIndicators.map((item) => (
                  <div key={item.indicator} className="flex items-center justify-between pb-2 border-b border-themePrimary/10">
                    <span className="font-medium">{item.indicator}</span>
                    <div>
                      <span className="font-bold text-themePrimary">{item.value}</span>
                      <span className="text-xs ml-2 text-gray-500">{item.benchmark}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <div className="bg-themePrimaryLight p-4 rounded-lg border border-themePrimary/10 transition-all duration-300 ease-in-out hover:shadow-md">
              <h3 className="font-medium text-themePrimary mb-3">Market Leadership</h3>
              <p className="text-gray-700 mb-2">
                Phoenix ranks #2 nationally in job growth and #3 in population growth among major metropolitan areas, creating sustained demand for housing.
              </p>
              <p className="text-gray-700">
                Tech sector expansion continues to drive high-wage job creation, with average new position salaries 28% above market median, supporting luxury rental demand.
              </p>
            </div>
            <div className="bg-themePrimaryLight p-4 rounded-lg border border-themePrimary/10 transition-all duration-300 ease-in-out hover:shadow-md">
              <h3 className="font-medium text-themePrimary mb-3">Market Resilience</h3>
              <p className="text-gray-700">
                Downtown Phoenix demonstrated remarkable resilience during economic challenges, maintaining 93% occupancy through pandemic periods and quickly rebounding to current 95.8% levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {marketIntelligence.demographics && marketIntelligence.demographics.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-medium">Demographics</h2>
          <div className="grid grid-cols-1 gap-6">
            {marketIntelligence.demographics.map((demographic, index) => (
              <Card key={index} className="transition-all duration-300 ease-in-out hover:shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4 text-themePrimary">{demographic.title}</h3>
                  <p className="text-gray-700">{demographic.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      <div className="mt-8 p-6 bg-themePrimaryLight rounded-lg border border-themePrimary/10 transition-all duration-300 ease-in-out hover:bg-themePrimaryLight/80">
        <h2 className="text-2xl font-medium mb-4">Market Outlook</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Phoenix luxury rental market demonstrates exceptional strength across all key metrics. Strong job and population growth coupled with controlled supply pipeline creates optimal conditions for SOL Modern's market entry.
        </p>
        <p className="text-gray-700 leading-relaxed">
          While maintaining vigilance regarding increased competition and potential economic headwinds, the market fundamentals strongly support the development of premium multifamily product in the downtown core with projected stabilization within 12-15 months of completion.
        </p>
      </div>
    </SectionLayout>
  );
};

export default MarketIntelligence;