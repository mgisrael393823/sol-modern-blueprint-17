
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Card } from "@/components/ui/card";
import GatedContent from "@/components/GatedContent";

const StrategicOpportunities = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleUnlock = () => {
    if (password === "password123") {
      setIsLocked(false);
    } else {
      toast({
        title: "Access Denied",
        description: "The password you entered is incorrect.",
        variant: "destructive",
      });
    }
  };

  if (isLocked) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="prose max-w-none">
          <h1 className="text-3xl font-semibold">Strategic Opportunities</h1>
          <div className="bg-purple-50 p-6 rounded-lg mb-8 border border-purple-100">
            <p className="text-gray-700 leading-relaxed mb-4">
              Explore key strategic advantages including innovative technology, premium features,
              wellness amenities, and authentic market integration to stand apart in the competitive landscape.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-white/60 p-4 rounded-lg border border-purple-100">
                <h3 className="font-medium text-purple-900 mb-2">Featured Advantages</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Advantage point 1</li>
                  <li>• Advantage point 2</li>
                  <li>• Advantage point 3</li>
                </ul>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-purple-100">
                <h3 className="font-medium text-purple-900 mb-2">Market Position</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Position point 1</li>
                  <li>• Position point 2</li>
                  <li>• Position point 3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-md mx-auto p-6 border rounded-lg shadow-sm">
          <div className="text-center mb-6">
            <Lock className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Protected Content</h2>
            <p className="text-gray-500">
              This section requires a password to access. Please enter the password below.
            </p>
          </div>
          <div className="space-y-4">
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button className="w-full" onClick={handleUnlock}>
              Unlock Content
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Strategic Opportunities</h1>
      <GatedContent title="Strategic Opportunities">
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-2xl font-medium mb-4">Market Positioning</h2>
            <p className="text-gray-700">
              Detailed strategic opportunities content would be displayed here after authentication.
            </p>
          </Card>
        </div>
      </GatedContent>
    </div>
  );
};

export default StrategicOpportunities;
