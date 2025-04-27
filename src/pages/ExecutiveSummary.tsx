
import { Card, CardContent } from "@/components/ui/card";
import { LightbulbIcon, ShieldCheckIcon, ShieldAlertIcon, TrendingUpIcon } from "lucide-react";

const ExecutiveSummary = () => {
  const swotData = [
    {
      title: "Strengths",
      icon: <ShieldCheckIcon className="h-6 w-6 text-green-600" />,
      points: [
        "Prime location in growing market area",
        "Modern design and finishes",
        "Competitive amenity package",
        "Strong brand positioning"
      ]
    },
    {
      title: "Weaknesses",
      icon: <ShieldAlertIcon className="h-6 w-6 text-red-600" />,
      points: [
        "Limited brand recognition",
        "Above-market pricing strategy",
        "Construction timeline delays",
        "Initial lease-up period vulnerability"
      ]
    },
    {
      title: "Opportunities",
      icon: <LightbulbIcon className="h-6 w-6 text-yellow-600" />,
      points: [
        "Growing demand for luxury rentals",
        "Remote work trend increasing home-office demand",
        "Tech sector employment growth",
        "Limited new supply in immediate submarket"
      ]
    },
    {
      title: "Threats",
      icon: <TrendingUpIcon className="h-6 w-6 text-blue-600" />,
      points: [
        "Increased competition from new developments",
        "Economic uncertainty impact on rental market",
        "Rising interest rates affecting investment returns",
        "Shifting consumer preferences post-pandemic"
      ]
    }
  ];

  const recommendations = [
    {
      title: "Strategic Positioning",
      content: "Position SOL Modern as the premier luxury rental option with emphasis on modern design, premium amenities, and exceptional service."
    },
    {
      title: "Pricing Strategy",
      content: "Implement dynamic pricing model with strategic concessions during initial lease-up period while maintaining long-term value proposition."
    },
    {
      title: "Marketing Focus",
      content: "Target young professionals and tech sector employees with digital-first marketing approach and virtual touring options."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold mb-6">Executive Summary</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            SOL Modern represents a significant opportunity in the luxury rental market, 
            combining premium positioning with strategic timing in a growing market area. 
            This analysis provides a comprehensive framework for successful market entry and 
            sustained competitive advantage.
          </p>
        </div>

        <h2 className="text-2xl font-medium mb-4">SWOT Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {swotData.map((item) => (
            <Card key={item.title}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  {item.icon}
                  <h3 className="text-xl font-medium">{item.title}</h3>
                </div>
                <ul className="list-disc list-inside space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="text-gray-600">{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-medium mt-8 mb-4">Strategic Recommendations</h2>
        <div className="space-y-4">
          {recommendations.map((rec) => (
            <div key={rec.title} className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-purple-900 mb-2">{rec.title}</h3>
              <p className="text-gray-700">{rec.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummary;
