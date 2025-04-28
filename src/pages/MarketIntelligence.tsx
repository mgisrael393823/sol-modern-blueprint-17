
import { Card, CardContent } from "@/components/ui/card";
import { ChartBarIcon, TrendingUpIcon, UsersIcon, BuildingIcon, HomeIcon, PieChartIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const MarketIntelligence = () => {
  const marketMetrics = [
    {
      title: "Occupancy Rate",
      value: "95.8%",
      trend: "+2.3% YoY",
      icon: <ChartBarIcon className="h-6 w-6 text-purple-600" />
    },
    {
      title: "Average Rent",
      value: "$2,450",
      trend: "+5.7% YoY",
      icon: <TrendingUpIcon className="h-6 w-6 text-purple-600" />
    },
    {
      title: "Absorption Rate",
      value: "250 units",
      trend: "Monthly",
      icon: <UsersIcon className="h-6 w-6 text-purple-600" />
    }
  ];

  const marketTrends = [
    {
      title: "Demographics",
      highlights: [
        "65% of new residents in target age range (25-40)",
        "Average household income: $125,000+",
        "Strong alignment with luxury positioning"
      ],
      content: "Growing millennial and young professional population, driving demand for premium rental options. Recent demographic shifts show 72% of new downtown residents work in high-income sectors including tech, healthcare, and financial services."
    },
    {
      title: "Employment Growth",
      highlights: [
        "15,000+ new tech sector positions",
        "Major employers expanding presence",
        "High-income job growth trajectory"
      ],
      content: "Tech sector expansion driving job growth, with Tesla, Oracle, and Google leading local market growth. Downtown Phoenix added 22,500 new jobs in the past 24 months with average salaries 35% above metropolitan median."
    },
    {
      title: "Housing Demand",
      highlights: [
        "Strong rental market growth",
        "Positive 12-month absorption forecast",
        "Housing affordability driving rentals"
      ],
      content: "Persistent rental demand supported by housing market dynamics and population growth. Median home prices increased 18% year-over-year, pushing more high-income earners toward luxury rental options."
    }
  ];

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
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      <div className="space-y-4 transition-all duration-300 ease-in-out hover:translate-y-[-2px]">
        <h1 className="text-3xl font-semibold">Market Intelligence</h1>
        
        <div className="bg-purple-50/50 p-6 rounded-lg border border-purple-100/50 transition-all duration-300 ease-in-out hover:bg-purple-50/70">
          <p className="text-gray-700 leading-relaxed">
            Our comprehensive market analysis reveals strong fundamentals and growth potential in the Downtown Phoenix submarket, supported by demographic shifts and economic expansion. The area demonstrates exceptional resilience with vacancy rates continuing to decline despite new deliveries, indicating robust absorption capacity.
          </p>
        </div>
      </div>

      <section className="space-y-4 transition-all duration-300 ease-in-out animate-fadeIn">
        <h2 className="text-2xl font-medium">Key Market Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {marketMetrics.map((metric) => (
            <Card key={metric.title} className="transition-all duration-300 ease-in-out hover:shadow-lg hover:translate-y-[-2px] bg-gradient-to-br from-white to-purple-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  {metric.icon}
                  <h3 className="text-lg font-medium">{metric.title}</h3>
                </div>
                <div className="mt-2">
                  <span className="text-2xl font-bold text-purple-600">{metric.value}</span>
                  <span className="text-sm text-gray-500 ml-2">{metric.trend}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4 transition-all duration-300 ease-in-out animate-fadeIn">
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
                  Luxury segment (>$2,200/mo) performing exceptionally at 3.5% vacancy
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

      <section className="space-y-4 transition-all duration-300 ease-in-out animate-fadeIn">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-medium">Absorption Rates</h2>
          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
            Trending Upward
          </Badge>
        </div>
        
        <Card className="transition-all duration-300 ease-in-out hover:shadow-lg hover:translate-y-[-2px]">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-4 text-purple-900">Quarterly Absorption</h3>
                <div className="space-y-3">
                  {absorptionRatesData.map((item) => (
                    <div key={item.quarter} className="flex items-center justify-between pb-2 border-b border-purple-100/50">
                      <span className="font-medium">{item.quarter}</span>
                      <div>
                        <span className="font-bold text-purple-700">{item.units} units</span>
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
                <h3 className="text-lg font-medium mb-2 text-purple-900">Absorption Insights</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-purple-500 rounded-full"></span>
                    Premium units ($2,200+) absorbing fastest at 48 units/month
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-purple-500 rounded-full"></span>
                    Tech corridor buildings achieving lease-up 30% faster than market average
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-purple-500 rounded-full"></span>
                    Amenity-rich developments commanding 15% absorption premium
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-purple-500 rounded-full"></span>
                    Average lease-up period: 9 months vs. market average of 12 months
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4 transition-all duration-300 ease-in-out animate-fadeIn">
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

      <section className="space-y-4 transition-all duration-300 ease-in-out animate-fadeIn">
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

      <section className="space-y-6 transition-all duration-300 ease-in-out animate-fadeIn">
        <h2 className="text-2xl font-medium">Market Trends</h2>
        {marketTrends.map((trend) => (
          <div 
            key={trend.title} 
            className="bg-gradient-to-br from-white to-blue-50/50 rounded-lg p-6 shadow-sm border border-blue-100/50 transition-all duration-300 ease-in-out hover:shadow-md hover:translate-y-[-2px]"
          >
            <h3 className="text-xl font-medium mb-4 text-purple-900">{trend.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/80 p-4 rounded-lg transition-colors duration-300 hover:bg-white">
                <ul className="space-y-2">
                  {trend.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-purple-500 rounded-full"></span>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">{trend.content}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-8 space-y-6 transition-all duration-300 ease-in-out animate-fadeIn">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-medium">Economic Indicators</h2>
          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
            Strong Fundamentals
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-white to-purple-50/30 transition-all duration-300 ease-in-out hover:shadow-lg hover:translate-y-[-2px]">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4 text-purple-900">Phoenix Economic Metrics</h3>
              <div className="space-y-3">
                {economicIndicators.map((item) => (
                  <div key={item.indicator} className="flex items-center justify-between pb-2 border-b border-purple-100/50">
                    <span className="font-medium">{item.indicator}</span>
                    <div>
                      <span className="font-bold text-purple-700">{item.value}</span>
                      <span className="text-xs ml-2 text-gray-500">{item.benchmark}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <div className="bg-purple-50/50 p-4 rounded-lg border border-purple-100/50 transition-all duration-300 ease-in-out hover:shadow-md">
              <h3 className="font-medium text-purple-800 mb-3">Market Leadership</h3>
              <p className="text-gray-700 mb-2">
                Phoenix ranks #2 nationally in job growth and #3 in population growth among major metropolitan areas, creating sustained demand for housing.
              </p>
              <p className="text-gray-700">
                Tech sector expansion continues to drive high-wage job creation, with average new position salaries 28% above market median, supporting luxury rental demand.
              </p>
            </div>
            <div className="bg-purple-50/50 p-4 rounded-lg border border-purple-100/50 transition-all duration-300 ease-in-out hover:shadow-md">
              <h3 className="font-medium text-purple-800 mb-3">Market Resilience</h3>
              <p className="text-gray-700">
                Downtown Phoenix demonstrated remarkable resilience during economic challenges, maintaining 93% occupancy through pandemic periods and quickly rebounding to current 95.8% levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4 transition-all duration-300 ease-in-out animate-fadeIn">
        <h2 className="text-2xl font-medium">Supply Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-green-50/50 p-4 rounded-lg border border-green-100/50 transition-all duration-300 ease-in-out hover:bg-green-50/70 hover:shadow-md">
              <h3 className="font-medium text-green-800 mb-3">Current Pipeline</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-green-500 rounded-full"></span>
                  1,850 units under construction within 3-mile radius
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-green-500 rounded-full"></span>
                  65% delivering in next 12-18 months
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-green-500 rounded-full"></span>
                  Average delivery delay: 4.5 months from original schedule
                </li>
              </ul>
            </div>
            <div className="bg-green-50/50 p-4 rounded-lg border border-green-100/50 transition-all duration-300 ease-in-out hover:bg-green-50/70 hover:shadow-md">
              <h3 className="font-medium text-green-800 mb-3">Market Balance</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-green-500 rounded-full"></span>
                  95.8% competitive set occupancy
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-green-500 rounded-full"></span>
                  Strong demand-supply equilibrium
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-green-500 rounded-full"></span>
                  Absorption capacity: 1,100-1,200 units annually
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-green-50/50 p-4 rounded-lg border border-green-100/50 transition-all duration-300 ease-in-out hover:bg-green-50/70 hover:shadow-md">
              <h3 className="font-medium text-green-800 mb-3">Absorption Metrics</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-green-500 rounded-full"></span>
                  45 units/month average absorption for luxury projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-green-500 rounded-full"></span>
                  Projected 12-15 month lease-up period for SOL Modern
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-green-500 rounded-full"></span>
                  Premium units ($3,000+) leasing at 35% faster rate than market average
                </li>
              </ul>
            </div>
            <div className="bg-green-50/50 p-4 rounded-lg border border-green-100/50 transition-all duration-300 ease-in-out hover:bg-green-50/70 hover:shadow-md">
              <h3 className="font-medium text-green-800 mb-3">Vacancy Trends</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-green-500 rounded-full"></span>
                  4.2% current vacancy rate in target submarket
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-green-500 rounded-full"></span>
                  -0.8% YoY improvement despite new deliveries
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-green-500 rounded-full"></span>
                  Projected stabilized vacancy: 4.0-4.5%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-6 bg-purple-50/50 rounded-lg border border-purple-100/50 transition-all duration-300 ease-in-out hover:bg-purple-50/70">
        <h2 className="text-2xl font-medium mb-4">Market Outlook</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Phoenix luxury rental market demonstrates exceptional strength across all key metrics. Strong job and population growth coupled with controlled supply pipeline creates optimal conditions for SOL Modern's market entry.
        </p>
        <p className="text-gray-700 leading-relaxed">
          While maintaining vigilance regarding increased competition and potential economic headwinds, the market fundamentals strongly support the development of premium multifamily product in the downtown core with projected stabilization within 12-15 months of completion.
        </p>
      </div>
    </div>
  );
};

export default MarketIntelligence;
