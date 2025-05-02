
import { Card } from "@/components/ui/card";
import GatedContent from "@/components/GatedContent";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const GoToMarketRoadmap = () => {
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
          <h1 className="text-3xl font-semibold">Go-to-Market Roadmap</h1>
          <div className="bg-purple-50 p-6 rounded-lg mb-8 border border-purple-100">
            <p className="text-gray-700 leading-relaxed">
              Our detailed implementation roadmap outlines key milestones and strategic initiatives 
              across a specified timeline. The plan encompasses marketing activation strategies, 
              and engagement programs, with specific KPIs and success metrics for each phase.
            </p>
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
      <h1 className="text-3xl font-semibold mb-6">Go-to-Market Roadmap</h1>
      <GatedContent title="Go-to-Market Roadmap">
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-2xl font-medium mb-4">Implementation Timeline</h2>
            <p className="text-gray-700">
              Detailed roadmap content would be displayed here after authentication.
            </p>
          </Card>
        </div>
      </GatedContent>
    </div>
  );
};

export default GoToMarketRoadmap;
