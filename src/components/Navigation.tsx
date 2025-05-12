
import { Link } from "react-router-dom";
import { Lock } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

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
    gated: false 
  },
  { 
    name: "Pricing & Incentive Framework", 
    path: "/pricing-framework", 
    gated: false 
  },
  { 
    name: "Go-to-Market Roadmap", 
    path: "/roadmap", 
    gated: false 
  },
  { 
    name: "Opportunity Map", 
    path: "/opportunity-map", 
    gated: false 
  }
];

const Navigation = ({ activeTab, setActiveTab }: NavigationProps) => {
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="p-4 border-b transition-colors duration-300">
        <h2 className="text-lg font-semibold transition-colors duration-300 hover:text-purple-600">SOL Modern</h2>
        <p className="text-xs text-muted-foreground">Strategy Blueprint</p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navigationItems.map((item) => (
            <SidebarMenuItem key={item.path}>
              <SidebarMenuButton asChild>
                <Link
                  to={item.path}
                  onClick={() => setActiveTab(item.path)}
                  className={cn(
                    "flex items-center justify-between w-full transition-all duration-300 ease-in-out rounded-md px-3 py-2 hover:bg-purple-50/50",
                    activeTab === item.path ? "text-purple-600 font-medium bg-purple-50/30" : "hover:text-purple-600"
                  )}
                >
                  <span className="text-sm">{item.name}</span>
                  {item.gated && (
                    <Lock className="h-3 w-3 text-current transition-transform duration-300 group-hover:scale-110" />
                  )}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

export default Navigation;
