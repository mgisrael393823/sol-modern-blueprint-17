
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
      content: "Growing millennial and young professional population, with 65% of new residents in target age range of 25-40. Average household income of $125,000+, aligned with luxury positioning."
    },
    {
      title: "Employment Growth",
      content: "Tech sector expansion driving job growth, with 15,000+ new positions announced. Major employers including Tesla, Oracle, and Google expanding local presence."
    },
    {
      title: "Housing Demand",
      content: "Strong rental demand persists with housing affordability challenges driving rental market growth. 12-month absorption forecast shows continued strength."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      <h1 className="text-3xl font-semibold mb-6">Market Intelligence</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {marketMetrics.map((metric) => (
          <Card key={metric.title} className="hover:shadow-md transition-shadow bg-gradient-to-br from-white to-purple-50">
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

      <div className="space-y-6">
        <h2 className="text-2xl font-medium mb-4">Market Trends</h2>
        {marketTrends.map((trend) => (
          <div 
            key={trend.title} 
            className="bg-gradient-to-br from-white to-blue-50/50 rounded-lg p-6 shadow-sm border border-blue-100/50 hover:border-purple-100 transition-colors"
          >
            <h3 className="text-lg font-medium mb-2 text-purple-900">{trend.title}</h3>
            <p className="text-gray-700 leading-relaxed">{trend.content}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gradient-to-br from-white to-green-50/50 rounded-lg border border-green-100/50">
        <h2 className="text-2xl font-medium mb-4">Supply Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-white/80 p-4 rounded-lg border border-green-100/50">
              <h3 className="font-medium text-green-800 mb-2">Current Pipeline</h3>
              <p className="text-gray-700">1,200 units under construction within 3-mile radius</p>
              <p className="text-gray-700">60% delivering in next 12 months</p>
            </div>
            <div className="bg-white/80 p-4 rounded-lg border border-green-100/50">
              <h3 className="font-medium text-green-800 mb-2">Market Balance</h3>
              <p className="text-gray-700">95% competitive set occupancy</p>
              <p className="text-gray-700">Strong demand-supply equilibrium</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white/80 p-4 rounded-lg border border-green-100/50">
              <h3 className="font-medium text-green-800 mb-2">Absorption Metrics</h3>
              <p className="text-gray-700">45 units/month average absorption</p>
              <p className="text-gray-700">Projected 24-month lease-up period</p>
            </div>
            <div className="bg-white/80 p-4 rounded-lg border border-green-100/50">
              <h3 className="font-medium text-green-800 mb-2">Vacancy Trends</h3>
              <p className="text-gray-700">4.2% current vacancy rate</p>
              <p className="text-gray-700">-0.8% YoY improvement</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-gradient-to-br from-purple-50/50 to-white rounded-lg border border-purple-100/50">
        <h2 className="text-2xl font-medium mb-4">Key Insights</h2>
        <ul className="space-y-3 list-disc list-inside text-gray-700">
          <li>Market fundamentals remain strong with sustained rental demand</li>
          <li>Growing employment base supports luxury positioning</li>
          <li>Limited new supply in immediate submarket provides opportunity</li>
          <li>Demographic trends align with target resident profile</li>
        </ul>
      </div>
    </div>
  );
};

export default MarketIntelligence;
