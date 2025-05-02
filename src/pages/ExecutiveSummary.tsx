
import { Card, CardContent } from "@/components/ui/card";
import { LightbulbIcon, ShieldCheckIcon, ShieldAlertIcon, TrendingUpIcon } from "lucide-react";

const ExecutiveSummary = () => {
  const swotData = [
    {
      title: "Strengths",
      icon: <ShieldCheckIcon className="h-6 w-6 text-green-600" />,
      points: [
        "Key strength point 1",
        "Key strength point 2",
        "Key strength point 3",
        "Key strength point 4"
      ]
    },
    {
      title: "Weaknesses",
      icon: <ShieldAlertIcon className="h-6 w-6 text-red-600" />,
      points: [
        "Key weakness point 1",
        "Key weakness point 2",
        "Key weakness point 3",
        "Key weakness point 4"
      ]
    },
    {
      title: "Opportunities",
      icon: <LightbulbIcon className="h-6 w-6 text-yellow-600" />,
      points: [
        "Key opportunity point 1",
        "Key opportunity point 2",
        "Key opportunity point 3",
        "Key opportunity point 4"
      ]
    },
    {
      title: "Threats",
      icon: <TrendingUpIcon className="h-6 w-6 text-blue-600" />,
      points: [
        "Key threat point 1",
        "Key threat point 2",
        "Key threat point 3",
        "Key threat point 4"
      ]
    }
  ];

  const recommendations = [
    {
      title: "Strategic Recommendation 1",
      content: "Description of the first strategic recommendation with key points and implementation guidelines."
    },
    {
      title: "Strategic Recommendation 2",
      content: "Description of the second strategic recommendation with key points and implementation guidelines."
    },
    {
      title: "Strategic Recommendation 3",
      content: "Description of the third strategic recommendation with key points and implementation guidelines."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold mb-6">Executive Summary</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            This executive summary provides a concise overview of the key findings, 
            strategic recommendations, and implementation priorities outlined in the 
            comprehensive strategy blueprint.
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
