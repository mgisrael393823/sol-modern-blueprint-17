
import { Card, CardContent } from "@/components/ui/card";
import { RocketIcon, StarIcon, MapPinIcon } from "lucide-react";

const OpportunityMap = () => {
  const opportunities = [
    {
      category: "Category 1",
      icon: <StarIcon className="h-6 w-6 text-purple-600" />,
      items: [
        {
          title: "Opportunity 1",
          description: "Description of the first opportunity with key points and potential impact."
        },
        {
          title: "Opportunity 2",
          description: "Description of the second opportunity with key points and potential impact."
        }
      ]
    },
    {
      category: "Category 2",
      icon: <RocketIcon className="h-6 w-6 text-blue-600" />,
      items: [
        {
          title: "Opportunity 3",
          description: "Description of the third opportunity with key points and potential impact."
        },
        {
          title: "Opportunity 4",
          description: "Description of the fourth opportunity with key points and potential impact."
        }
      ]
    },
    {
      category: "Category 3",
      icon: <MapPinIcon className="h-6 w-6 text-green-600" />,
      items: [
        {
          title: "Opportunity 5",
          description: "Description of the fifth opportunity with key points and potential impact."
        },
        {
          title: "Opportunity 6",
          description: "Description of the sixth opportunity with key points and potential impact."
        }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-semibold mb-6">Opportunity Map</h1>

      <div className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700">
          The opportunity map outlines key areas for growth, improvement, 
          and market penetration. This strategic framework provides a roadmap for 
          achieving and maintaining market leadership position.
        </p>
      </div>

      {opportunities.map((category) => (
        <div key={category.category} className="space-y-4">
          <div className="flex items-center gap-3">
            {category.icon}
            <h2 className="text-2xl font-medium">{category.category}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.items.map((item) => (
              <Card key={item.title}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-8 p-6 bg-purple-50 rounded-lg">
        <h2 className="text-2xl font-medium mb-4">Implementation Priority</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-red-500 rounded-full"></span>
            <span className="font-medium">High Priority (0-3 months):</span>
            <span className="text-gray-600">Priority items for immediate implementation</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-yellow-500 rounded-full"></span>
            <span className="font-medium">Medium Priority (3-6 months):</span>
            <span className="text-gray-600">Priority items for mid-term implementation</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-green-500 rounded-full"></span>
            <span className="font-medium">Long-term (6+ months):</span>
            <span className="text-gray-600">Priority items for long-term implementation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityMap;
