
import { Card, CardContent } from "@/components/ui/card";
import { ChartBarIcon, TrendingUpIcon, UsersIcon } from "lucide-react";

const MarketIntelligence = () => {
  const marketMetrics = [
    {
      title: "Occupancy Rate",
      value: "95.8%",
      trend: "+2.3%",
      icon: <ChartBarIcon className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Average Rent",
      value: "$2,450",
      trend: "+5.7%",
      icon: <TrendingUpIcon className="h-6 w-6 text-green-600" />
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
      content: "Growing millennial and young professional population, with 65% of new residents in target age range of 25-40."
    },
    {
      title: "Employment",
      content: "Tech sector expansion driving job growth, with multiple companies announcing local office expansions."
    },
    {
      title: "Housing Demand",
      content: "Strong rental demand persists with housing affordability challenges driving rental market growth."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-semibold mb-6">Market Intelligence</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {marketMetrics.map((metric) => (
          <Card key={metric.title}>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                {metric.icon}
                <h3 className="text-lg font-medium">{metric.title}</h3>
              </div>
              <div className="mt-2">
                <span className="text-2xl font-bold">{metric.value}</span>
                <span className="text-sm text-gray-500 ml-2">{metric.trend}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-medium mb-4">Market Trends</h2>
        {marketTrends.map((trend) => (
          <div key={trend.title} className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-2">{trend.title}</h3>
            <p className="text-gray-700">{trend.content}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-purple-50 rounded-lg">
        <h2 className="text-2xl font-medium mb-4">Supply Analysis</h2>
        <p className="text-gray-700">
          Current pipeline includes 1,200 units under construction within a 3-mile radius, 
          with 60% expected to deliver in the next 12 months. SOL Modern's delivery timing 
          aligns with projected market absorption rates and demonstrates minimal direct 
          competition during initial lease-up period.
        </p>
      </div>
    </div>
  );
};

export default MarketIntelligence;
