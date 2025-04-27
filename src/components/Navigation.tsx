
import { Link } from "react-router-dom";
import { Lock } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger
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
    <Sidebar className="border-r">
      <SidebarHeader className="p-4 border-b">
        <h2 className="text-lg font-semibold">SOL Modern</h2>
        <p className="text-sm text-muted-foreground">Strategy Blueprint</p>
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
                    "flex items-center justify-between w-full",
                    activeTab === item.path && "text-purple-600 font-medium"
                  )}
                >
                  <span>{item.name}</span>
                  {item.gated && (
                    <Lock className="h-3 w-3 text-current" />
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
