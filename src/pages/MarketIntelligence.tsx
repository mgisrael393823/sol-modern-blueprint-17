
import { Card, CardContent } from "@/components/ui/card";
import { ChartBarIcon, TrendingUpIcon, UsersIcon } from "lucide-react";

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
      content: "Growing millennial and young professional population, driving demand for premium rental options."
    },
    {
      title: "Employment Growth",
      highlights: [
        "15,000+ new tech sector positions",
        "Major employers expanding presence",
        "High-income job growth trajectory"
      ],
      content: "Tech sector expansion driving job growth, with Tesla, Oracle, and Google leading local market growth."
    },
    {
      title: "Housing Demand",
      highlights: [
        "Strong rental market growth",
        "Positive 12-month absorption forecast",
        "Housing affordability driving rentals"
      ],
      content: "Persistent rental demand supported by housing market dynamics and population growth."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      <div className="space-y-4 transition-all duration-300 ease-in-out hover:translate-y-[-2px]">
        <h1 className="text-3xl font-semibold">Market Intelligence</h1>
        
        <div className="bg-purple-50/50 p-6 rounded-lg border border-purple-100/50 transition-all duration-300 ease-in-out hover:bg-purple-50/70">
          <p className="text-gray-700 leading-relaxed">
            Our comprehensive market analysis reveals strong fundamentals and growth potential in the Downtown Phoenix submarket, supported by demographic shifts and economic expansion.
          </p>
        </div>
      </div>

      <section className="space-y-4 transition-all duration-300 ease-in-out">
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

      <section className="space-y-6 transition-all duration-300 ease-in-out">
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

      <section className="mt-8 space-y-6 transition-all duration-300 ease-in-out">
        <h2 className="text-2xl font-medium">Supply Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-green-50/50 p-4 rounded-lg border border-green-100/50 transition-all duration-300 ease-in-out hover:bg-green-50/70 hover:shadow-md">
              <h3 className="font-medium text-green-800 mb-3">Current Pipeline</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-green-500 rounded-full"></span>
                  1,200 units under construction within 3-mile radius
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-green-500 rounded-full"></span>
                  60% delivering in next 12 months
                </li>
              </ul>
            </div>
            <div className="bg-green-50/50 p-4 rounded-lg border border-green-100/50 transition-all duration-300 ease-in-out hover:bg-green-50/70 hover:shadow-md">
              <h3 className="font-medium text-green-800 mb-3">Market Balance</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-green-500 rounded-full"></span>
                  95% competitive set occupancy
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-green-500 rounded-full"></span>
                  Strong demand-supply equilibrium
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
                  45 units/month average absorption
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-green-500 rounded-full"></span>
                  Projected 24-month lease-up period
                </li>
              </ul>
            </div>
            <div className="bg-green-50/50 p-4 rounded-lg border border-green-100/50 transition-all duration-300 ease-in-out hover:bg-green-50/70 hover:shadow-md">
              <h3 className="font-medium text-green-800 mb-3">Vacancy Trends</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-green-500 rounded-full"></span>
                  4.2% current vacancy rate
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-green-500 rounded-full"></span>
                  -0.8% YoY improvement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketIntelligence;
