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
    // This is a placeholder. In a real app, you'd verify the password against a secure backend
    if (password === "password123") { // Simple placeholder password
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
      <div className="max-w-md mx-auto mt-12 p-6 border rounded-lg shadow-sm">
        <div className="text-center mb-6">
          <Lock className="h-12 w-12 mx-auto text-gray-400 mb-4" />
          <h1 className="text-2xl font-semibold mb-2">Protected Content</h1>
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
              Content from PDF section on strategic opportunities...
            </p>
          </Card>
        </div>
      </GatedContent>
    </div>
  );
};

export default StrategicOpportunities;
