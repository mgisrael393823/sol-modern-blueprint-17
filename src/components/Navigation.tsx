
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Lock } from "lucide-react";

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const navigationItems = [
  { 
    name: "Home", 
    path: "/", 
    gated: false 
  },
  { 
    name: "Executive Summary", 
    path: "/executive-summary", 
    gated: false 
  },
  { 
    name: "Market Intelligence", 
    path: "/market-intelligence", 
    gated: false 
  },
  { 
    name: "Competitive Landscape", 
    path: "/competitive-landscape", 
    gated: false 
  },
  { 
    name: "Strategic Opportunities", 
    path: "/strategic-opportunities", 
    gated: true 
  },
  { 
    name: "Pricing & Incentive Framework", 
    path: "/pricing-framework", 
    gated: true 
  },
  { 
    name: "Go-to-Market Roadmap", 
    path: "/roadmap", 
    gated: true 
  },
  { 
    name: "Opportunity Map", 
    path: "/opportunity-map", 
    gated: false 
  }
];

const Navigation = ({ activeTab, setActiveTab }: NavigationProps) => {
  return (
    <nav className="border-b border-gray-200 overflow-x-auto bg-white/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="flex space-x-1">
        {navigationItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setActiveTab(item.path)}
            className={cn(
              "flex items-center whitespace-nowrap px-4 py-2 text-sm font-medium transition-all duration-200",
              "hover:text-purple-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full",
              "after:origin-center after:scale-x-0 after:bg-purple-600 after:transition-transform after:duration-200",
              "hover:after:scale-x-100",
              activeTab === item.path
                ? "border-b-2 border-purple-600 text-purple-600"
                : "text-gray-500"
            )}
          >
            {item.name}
            {item.gated && (
              <Lock className="ml-1 h-3 w-3 text-current" />
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;

