import { Card } from "@/components/ui/card";
import GatedContent from "@/components/GatedContent";

const GoToMarketRoadmap = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Go-to-Market Roadmap</h1>
      <GatedContent title="Go-to-Market Roadmap">
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-2xl font-medium mb-4">Implementation Timeline</h2>
            <p className="text-gray-700">
              Content from PDF section on go-to-market roadmap...
            </p>
          </Card>
        </div>
      </GatedContent>
    </div>
  );
};

export default GoToMarketRoadmap;
